// Motor de la presentación: carga slides/001.js a 999.js en orden, saltando los
// números que falten; escala el lienzo 1920×1080 a la ventana y gestiona la navegación.
// Las slides se cargan con <script> (no con fetch) para que index.html funcione
// también abierto con doble clic (file://).
(() => {
  const W = 1920;
  const H = 1080;
  const BATCH = 100;
  const MARCAS = ['Antes de 2017', '2017', '2020', '2022', '2023', '2024', '2025', '2026'];
  const stage = document.getElementById('stage');
  const recibidas = new Map();
  let slides = [];
  let current = 0;

  const pad = (n) => String(n).padStart(3, '0');

  // Cada slides/NNN.js llama a diapositiva(`<section>…</section>`).
  window.diapositiva = (html) => {
    const n = Number(document.currentScript?.dataset.n);
    if (n) recibidas.set(n, html);
  };

  function loadScript(n) {
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = `slides/${pad(n)}.js?v=20261022-huecos`;
      s.dataset.n = n;
      s.onload = () => resolve(recibidas.get(n) ?? null);
      s.onerror = () => { s.remove(); resolve(null); };
      document.head.append(s);
    });
  }

  // Pide de 001 a 999 en lotes paralelos y salta los números que falten.
  async function loadSlides() {
    const sources = [];
    for (let start = 1; start <= 999; start += BATCH) {
      const nums = [];
      for (let n = start; n < start + BATCH && n <= 999; n++) nums.push(n);
      const batch = await Promise.all(nums.map(loadScript));
      sources.push(...batch.filter((html) => html !== null));
    }
    return sources;
  }

  // Escribe las marcas de cada franja .linea-tiempo y resalta las de data-resaltar.
  function fillTimelines(root) {
    root.querySelectorAll('.linea-tiempo').forEach((el) => {
      const on = (el.dataset.resaltar || '').split(',').map((s) => s.trim());
      el.innerHTML = MARCAS
        .map((m) => `<span${on.includes(m) ? ' class="on"' : ''}>${m}</span>`)
        .join('');
    });
  }

  function build(sources) {
    sources.forEach((src, i) => {
      const tpl = document.createElement('template');
      tpl.innerHTML = src.trim();
      let section = tpl.content.querySelector('section');
      if (!section) {
        section = document.createElement('section');
        section.append(tpl.content);
      }
      fillTimelines(section);
      const num = document.createElement('span');
      num.className = 'numero';
      num.textContent = i + 1;
      section.append(num);
      stage.append(section);
    });
    slides = [...stage.children];
  }

  function show(index) {
    if (!slides.length) return;
    current = Math.max(0, Math.min(index, slides.length - 1));
    slides.forEach((s, i) => s.classList.toggle('activa', i === current));
    history.replaceState(null, '', `#/${current + 1}`);
  }

  function indexFromHash() {
    const m = location.hash.match(/^#\/(\d+)/);
    return m ? Number(m[1]) - 1 : 0;
  }

  function fit() {
    const scale = Math.min(innerWidth / W, innerHeight / H);
    stage.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  function bindEvents() {
    addEventListener('resize', fit);
    addEventListener('hashchange', () => show(indexFromHash()));

    addEventListener('keydown', (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const next = ['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter'];
      const prev = ['ArrowLeft', 'ArrowUp', 'PageUp', 'Backspace'];
      if (next.includes(e.key)) show(current + 1);
      else if (prev.includes(e.key)) show(current - 1);
      else if (e.key === 'Home') show(0);
      else if (e.key === 'End') show(slides.length - 1);
      else return;
      e.preventDefault();
    });

    addEventListener('click', (e) => {
      if (e.target.closest('a, button, input, select, textarea, video, audio')) return;
      show(current + 1);
    });

    let touchX = null;
    addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    addEventListener('touchend', (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    });
  }

  async function init() {
    fit();
    const sources = await loadSlides();
    if (!sources.length) {
      stage.innerHTML = '<section class="activa" data-layout="seccion"><h2>No hay diapositivas</h2>' +
        '<p>Crea slides/001.js.</p></section>';
      return;
    }
    build(sources);
    bindEvents();
    show(indexFromHash());
  }

  init();
})();
