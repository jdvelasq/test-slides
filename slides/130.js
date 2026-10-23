diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s130">
  <style>
    .s130 .capas { display: grid; grid-template-columns: 1fr 300px 300px; grid-template-rows: auto repeat(4, 1fr); width: 100%; height: 100%; column-gap: 32px; }
    .s130 .cab { align-self: end; padding-bottom: 14px; text-align: center; font-size: 26px; font-weight: 800; }
    .s130 .capa { display: flex; align-items: center; padding: 0 32px; border-top: 2px solid var(--fondo); background: var(--gris-suave); font-size: 28px; }
    .s130 .capa b { margin-right: 6px; }
    .s130 .valor { position: relative; display: flex; align-items: center; justify-content: center; }
    .s130 .valor::before { content: ""; position: absolute; top: 0; bottom: 0; left: 50%; width: 6px; margin-left: -3px; background: var(--texto-suave); }
    .s130 .valor.acento::before { background: var(--acento); }
    .s130 .valor span { position: relative; padding: 8px 22px; border-radius: 999px; background: var(--fondo); border: 3px solid var(--texto-suave); font-size: 24px; font-weight: 700; color: var(--texto); }
    .s130 .valor.acento span { border-color: var(--acento); }
    .s130 .primera::before { top: 50%; }
    .s130 .ultima::before { bottom: 50%; }
  </style>
  <header class="cabecera-concepto">
    <p class="pregunta-guia">¿Qué parte del producto genera la respuesta y qué parte organiza el trabajo?</p>
    <h2>Claude Code no es un modelo: es un harness que usa un modelo.</h2>
  </header>
  <div class="evidencia">
    <div class="capas">
      <div></div><div class="cab">Claude Code</div><div class="cab acento">opencode local</div>
      <div class="capa" style="border-radius: 18px 18px 0 0"><span><b>Superficie:</b> por dónde se opera (chat, terminal, Office)</span></div>
      <div class="valor primera"><span>terminal</span></div><div class="valor acento primera"><span>terminal</span></div>
      <div class="capa"><span><b>Harness:</b> lo pone a trabajar en un ciclo (Claude Code, Codex, opencode, Cowork)</span></div>
      <div class="valor"><span>Claude Code</span></div><div class="valor acento"><span>opencode</span></div>
      <div class="capa"><span><b>Modelo:</b> predice y genera (Claude, GPT, Gemini, Qwen)</span></div>
      <div class="valor"><span>Claude</span></div><div class="valor acento"><span>Qwen</span></div>
      <div class="capa" style="border-radius: 0 0 18px 18px"><span><b>Runtime:</b> dónde corre (nube, tu computador)</span></div>
      <div class="valor ultima"><span>nube</span></div><div class="valor acento ultima"><span>tu computador</span></div>
    </div>
  </div>
  <div class="pie">
    <dl class="terminos" style="max-width: 1200px">
      <div class="idea-clave"><dt>Idea clave</dt> <dd>La terminal puede estar en su computador y el modelo en la nube. La columna local supone un modelo y un runtime configurados en el equipo.</dd></div>
      <div><dt>Modelo · Harness · Superficie · Runtime</dt> <dd>las cuatro capas de cualquier producto de IA.</dd></div>
    </dl>
  </div>
</section>
`);
