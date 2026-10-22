// Motor de la presentación: carga slides/001.html, 002.html, ... hasta el primer
// número que falte, escala el lienzo 1920×1080 a la ventana y gestiona la navegación.
(() => {
  const W = 1920;
  const H = 1080;
  const BATCH = 10;
  const stage = document.getElementById('stage');
  let slides = [];
  let current = 0;

  const pad = (n) => String(n).padStart(3, '0');

  async function fetchSlide(n) {
    try {
      const res = await fetch(`slides/${pad(n)}.html`, { cache: 'no-cache' });
      return res.ok ? await res.text() : null;
    } catch {
      return null;
    }
  }

  // Pide las slides en lotes paralelos y se detiene en el primer hueco.
  async function loadSlides() {
    const sources = [];
    for (let start = 1; start <= 999; start += BATCH) {
      const nums = [];
      for (let n = start; n < start + BATCH && n <= 999; n++) nums.push(n);
      const batch = await Promise.all(nums.map(fetchSlide));
      const gap = batch.indexOf(null);
      sources.push(...(gap === -1 ? batch : batch.slice(0, gap)));
      if (gap !== -1) break;
    }
    return sources;
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
        '<p>Crea slides/001.html y sirve el sitio por HTTP (no con file://).</p></section>';
      return;
    }
    build(sources);
    bindEvents();
    show(indexFromHash());
  }

  init();
})();
