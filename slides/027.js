diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s027">
  <style>
    .s027 .rejilla.c2 { gap: 28px; }
    .s027 .caja { padding: 18px 24px; }
    .s027 .caja strong { display: block; font-size: var(--t-rotulo); margin-bottom: 8px; }
    .s027 .caja p { margin: 0; font-size: var(--t-pequeno); line-height: 1.35; color: var(--texto-suave); }
    .s027 .flujo { display: flex; align-items: center; gap: 24px; width: 100%; }
    .s027 .paso { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 12px; text-align: center; }
    .s027 .paso .icono { width: 56px; height: 56px; }
    .s027 .paso span { font-size: var(--t-pequeno); color: var(--texto-suave); }
    .s027 .flecha { font-size: 40px; }
  </style>
  <h2>2024 · RAG: responder a partir de tus documentos</h2>
  <div class="evidencia vertical">
    <div class="rejilla c2">
      <div class="caja">
        <strong>Origen del nombre</strong>
        <p>El nombre viene de un artículo de 2020: Retrieval-Augmented Generation, generación aumentada con recuperación.</p>
      </div>
      <div class="caja">
        <strong>La idea</strong>
        <p>Antes de responder, el sistema busca los fragmentos relevantes en tus documentos y responde apoyándose en ellos.</p>
      </div>
      <div class="caja">
        <strong>En la práctica</strong>
        <p>Es lo que ocurre cuando subes una carpeta de PDF y preguntas sobre ella, o cuando una herramienta dice "chatea con tus documentos".</p>
      </div>
      <div class="caja">
        <strong>Ventaja</strong>
        <p>Respuestas ancladas a tus fuentes, con referencia al fragmento usado.</p>
      </div>
      <div class="caja">
        <strong>Limitación</strong>
        <p>Si la búsqueda no encuentra el fragmento correcto, la respuesta será incompleta aunque suene segura.</p>
      </div>
    </div>
    <div class="flujo">
      <div class="paso">
        <svg class="icono" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span>Pregunta</span>
      </div>
      <div class="flecha">→</div>
      <div class="paso">
        <svg class="icono" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        <span>Buscar en tus documentos</span>
      </div>
      <div class="flecha">→</div>
      <div class="paso">
        <svg class="icono" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        <span>Fragmentos relevantes</span>
      </div>
      <div class="flecha">→</div>
      <div class="paso">
        <svg class="icono" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span>Respuesta con referencia</span>
      </div>
    </div>
  </div>
</section>
`);
