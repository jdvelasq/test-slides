"""Revisa la composición de las diapositivas con Playwright y reporta los problemas como texto.

Detecta texto encimado, texto que se sale de su caja o queda recortado, elementos fuera del lienzo
1920×1080, títulos h2 de más de dos líneas y errores de JavaScript. Sale con código 1
si encuentra problemas, para que un agente (por ejemplo Aider con --test-cmd) los corrija.

Por defecto revisa solo las slides con cambios sin commit (según git status).
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
MAX_POR_SLIDE = 12

# Se evalúa en el navegador sobre la sección activa y devuelve la lista de problemas.
REVISAR = r"""
(sec) => {
  const out = [];
  const S = sec.getBoundingClientRect();
  const visible = (el) => {
    const cs = getComputedStyle(el);
    return cs.display !== 'none' && cs.visibility !== 'hidden' && parseFloat(cs.opacity) > 0
      && el.getClientRects().length > 0;
  };
  const desc = (el) => {
    const t = (el.textContent || '').trim().replace(/\s+/g, ' ');
    const c = el.getAttribute('class');
    return '<' + el.tagName.toLowerCase() + (c ? ' class="' + c + '"' : '') + '>'
      + (t ? ' "' + (t.length > 50 ? t.slice(0, 50) + '…' : t) + '"' : '');
  };
  const els = [...sec.querySelectorAll('*')].filter((el) => !el.closest('style, script, .numero') && visible(el));

  // Fuera del lienzo: solo el elemento más externo que se sale.
  const fuera = (r) => r.left < S.left - 1 || r.top < S.top - 1 || r.right > S.right + 1 || r.bottom > S.bottom + 1;
  for (const el of els) {
    const p = el.parentElement;
    if (fuera(el.getBoundingClientRect()) && (p === sec || !fuera(p.getBoundingClientRect()))) {
      out.push('se sale del lienzo 1920×1080: ' + desc(el));
    }
  }

  // Texto encimado: rectángulos de texto de bloques distintos que se cruzan.
  const bloque = (el) => {
    while (el.parentElement && el !== sec && getComputedStyle(el).display.startsWith('inline')) el = el.parentElement;
    return el;
  };
  const cajas = [];
  const walker = document.createTreeWalker(sec, NodeFilter.SHOW_TEXT);
  for (let n; (n = walker.nextNode());) {
    const el = n.parentElement;
    if (!n.textContent.trim() || !el || el.closest('style, script, .numero') || !visible(el)) continue;
    if (el instanceof SVGElement) {
      const t = el.closest('text') || el;
      cajas.push({ b: t, r: t.getBoundingClientRect() });
      continue;
    }
    const range = document.createRange();
    range.selectNodeContents(n);
    for (const r of range.getClientRects()) if (r.width > 1 && r.height > 1) cajas.push({ el, b: bloque(el), r });
  }

  // Texto que cruza el borde o el fondo de la caja visible que lo contiene, o que
  // queda recortado por overflow. Se detiene en elementos con position absolute/fixed:
  // salirse es intencional.
  const dibujada = (cs) => parseFloat(cs.borderTopWidth) + parseFloat(cs.borderLeftWidth) > 0
    && cs.borderTopColor !== 'rgba(0, 0, 0, 0)' || !/rgba\(0, 0, 0, 0\)|transparent/.test(cs.backgroundColor);
  for (const c of cajas) {
    if (!c.el) continue;
    const tol = Math.max(3, 0.15 * parseFloat(getComputedStyle(c.el).fontSize));
    for (let a = c.el; a && a !== sec; a = a.parentElement) {
      const cs = getComputedStyle(a);
      const recorta = cs.overflowX !== 'visible' || cs.overflowY !== 'visible';
      if (a !== c.el && (dibujada(cs) || recorta)) {
        const R = a.getBoundingClientRect();
        const exceso = Math.max(R.left - c.r.left, R.top - c.r.top, c.r.right - R.right, c.r.bottom - R.bottom);
        const que = recorta ? 'texto recortado' : 'texto que se sale de su caja';
        if (exceso > tol) out.push(que + ' (' + Math.round(exceso) + ' px): ' + desc(c.b) + ' dentro de ' + desc(a));
        break;
      }
      if (cs.position === 'absolute' || cs.position === 'fixed') break;
    }
  }
  for (let i = 0; i < cajas.length; i++) {
    for (let j = i + 1; j < cajas.length; j++) {
      const a = cajas[i], b = cajas[j];
      if (a.b === b.b || a.b.contains(b.b) || b.b.contains(a.b)) continue;
      const w = Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left);
      const h = Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top);
      if (w > 2 && h > 0.3 * Math.min(a.r.height, b.r.height)) {
        out.push('texto encimado (' + Math.round(w) + '×' + Math.round(h) + ' px): ' + desc(a.b) + ' con ' + desc(b.b));
      }
    }
  }

  // Títulos de más de dos líneas (solo en la plantilla afirmacion).
  for (const h of sec.querySelectorAll('h2')) {
    if (sec.dataset.layout !== 'afirmacion' || !visible(h)) continue;
    const range = document.createRange();
    range.selectNodeContents(h);
    const tops = [];
    for (const r of range.getClientRects()) {
      if (r.height > 1 && !tops.some((t) => Math.abs(t - r.top) < r.height / 2)) tops.push(r.top);
    }
    if (tops.length > 2) out.push('el h2 ocupa ' + tops.length + ' líneas (máximo 2): ' + desc(h));
  }
  return [...new Set(out)];
}
"""


def cambiadas():
    """Números de las slides/NNN.js nuevas o modificadas que aún no tienen commit."""
    salida = subprocess.run(
        ["git", "status", "--porcelain", "--untracked-files=all", "--", "slides"],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout
    numeros = set()
    for linea in salida.splitlines():
        m = re.search(r"slides/(\d{3})\.js$", linea)
        if m and "D" not in linea[:2]:
            numeros.add(int(m.group(1)))
    return numeros


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    grupo = parser.add_mutually_exclusive_group()
    grupo.add_argument("--slides", help="Posiciones en pantalla separadas por comas (como #/N)")
    grupo.add_argument("--archivos", help="Números de archivo separados por comas, p. ej. 8,108 para slides/008.js y slides/108.js")
    grupo.add_argument("--todas", action="store_true", help="Revisar toda la presentación")
    args = parser.parse_args()
    pedidos = None
    if args.archivos:
        pedidos = {int(n) for n in args.archivos.split(",")}
    elif not args.slides and not args.todas:
        pedidos = cambiadas()
        if not pedidos:
            print("No hay slides con cambios sin commit. Usa --todas, --slides o --archivos.")
            return
    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        try:
            page = browser.new_page(viewport={"width": 1920, "height": 1080}, device_scale_factor=1, reduced_motion="reduce")
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            page.goto((ROOT / "index.html").as_uri(), wait_until="load")
            page.locator("#stage > section.activa").wait_for(state="visible")
            page.evaluate("document.fonts.ready.then(() => true)")
            ambitos = page.eval_on_selector_all(
                "#stage > section",
                "els => els.map(e => [...e.classList].find(c => /^s\\d{3}$/.test(c)) || '')",
            )
            count = len(ambitos)
            total = 0
            if pedidos is not None:
                clases = {f"s{n:03}" for n in pedidos}
                for clase in sorted(clases - set(ambitos)):
                    print(f"slides/{clase[1:]}.js no aparece en la presentación: revisa que el section tenga la clase {clase} y que el archivo no tenga errores de JavaScript.")
                    total += 1
                numbers = [i + 1 for i, a in enumerate(ambitos) if a in clases]
            elif args.slides:
                numbers = [int(n.strip()) for n in args.slides.split(",")]
                if any(n < 1 or n > count for n in numbers):
                    parser.error(f"Los números deben estar entre 1 y {count}")
            else:
                numbers = list(range(1, count + 1))

            for number in numbers:
                page.evaluate("n => { location.hash = '/' + n; }", number)
                section = page.locator(f"#stage > section:nth-child({number}).activa")
                section.wait_for(state="visible")
                problemas = section.evaluate(REVISAR)
                ambito = ambitos[number - 1]
                if not ambito:
                    problemas.insert(0, "la sección no tiene clase de ámbito sNNN")
                if problemas:
                    archivo = f"slides/{ambito[1:]}.js" if ambito else "archivo desconocido"
                    print(f"Slide {number} ({archivo}):")
                    for p in problemas[:MAX_POR_SLIDE]:
                        print(f"  - {p}")
                    if len(problemas) > MAX_POR_SLIDE:
                        print(f"  - … y {len(problemas) - MAX_POR_SLIDE} problemas más")
                    total += len(problemas)
            for error in errors:
                print(f"Error de JavaScript: {error}")
            total += len(errors)
            if total:
                print(f"{total} problemas en {len(numbers)} diapositivas revisadas.")
                sys.exit(1)
            print(f"Sin problemas en {len(numbers)} diapositivas revisadas.")
        finally:
            browser.close()


if __name__ == "__main__":
    main()
