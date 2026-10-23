diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s042">
  <style>
    .s042 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      align-items: center;
    }
    .s042 .rejilla.c2 {
      width: 100%;
      max-width: 1400px;
    }
    .s042 .caja {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .s042 .caja .rotulo {
      font-weight: 700;
      font-size: var(--t-rotulo);
      color: var(--acento);
    }
    .s042 .caja p {
      margin: 0;
      font-size: var(--t-texto);
      line-height: 1.35;
    }
    .s042 .convergencia {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
      width: 100%;
      max-width: 1200px;
    }
    .s042 .convergencia .nodo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      text-align: center;
    }
    .s042 .convergencia .nodo .icono {
      width: 80px;
      height: 80px;
    }
    .s042 .convergencia .nodo .etiqueta {
      font-size: var(--t-rotulo);
      font-weight: 600;
      color: var(--texto);
    }
    .s042 .convergencia .nodo.uno .icono {
      stroke: var(--acento);
    }
    .s042 .convergencia .nodo.uno .etiqueta {
      color: var(--acento);
    }
    .s042 .convergencia .flecha {
      font-size: 48px;
      color: var(--texto-suave);
    }
    .s042 .mini-linea {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      width: 100%;
      max-width: 1000px;
      margin-top: 16px;
    }
    .s042 .mini-linea .paso {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      position: relative;
      flex: 1;
    }
    .s042 .mini-linea .paso::before {
      content: "";
      position: absolute;
      top: 10px;
      left: 50%;
      width: 100%;
      height: 3px;
      background: var(--linea);
    }
    .s042 .mini-linea .paso:first-child::before {
      display: none;
    }
    .s042 .mini-linea .paso .punto {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--acento);
      position: relative;
      z-index: 1;
    }
    .s042 .mini-linea .paso .nombre {
      font-size: var(--t-rotulo);
      font-weight: 700;
      color: var(--texto);
    }
    .s042 .mini-linea .paso .fecha {
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
    }
    .s042 .destacado {
      max-width: 1200px;
      text-align: center;
    }
  </style>
  <h2>2025 · ChatGPT Agent: investigar, navegar y actuar en un solo agente</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <span class="rotulo">Unificación</span>
        <p>17 de julio de 2025: OpenAI une en un solo producto la navegación de Operator, la investigación de Deep Research y la conversación de ChatGPT.</p>
      </div>
      <div class="caja">
        <span class="rotulo">Autonomía</span>
        <p>El agente decide por sí mismo cuándo investigar, cuándo navegar y cuándo actuar.</p>
      </div>
      <div class="caja">
        <span class="rotulo">Ritmo de cambio</span>
        <p>En agosto de 2026, ChatGPT Agent fue retirado y su lugar lo ocupó ChatGPT Work.</p>
      </div>
    </div>
    <div class="convergencia">
      <div class="nodo">
        <svg class="icono" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 0 20M2 12h20"/></svg>
        <span class="etiqueta">Navegar</span>
      </div>
      <span class="flecha">→</span>
      <div class="nodo">
        <svg class="icono" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        <span class="etiqueta">Investigar</span>
      </div>
      <span class="flecha">→</span>
      <div class="nodo">
        <svg class="icono" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span class="etiqueta">Conversar</span>
      </div>
      <span class="flecha">→</span>
      <div class="nodo uno">
        <svg class="icono" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        <span class="etiqueta">Un solo agente</span>
      </div>
    </div>
    <div class="mini-linea">
      <div class="paso">
        <div class="punto"></div>
        <span class="nombre">Operator</span>
        <span class="fecha">ene 2025</span>
      </div>
      <div class="paso">
        <div class="punto"></div>
        <span class="nombre">Agent</span>
        <span class="fecha">jul 2025</span>
      </div>
      <div class="paso">
        <div class="punto"></div>
        <span class="nombre">Work</span>
        <span class="fecha">jul 2026</span>
      </div>
    </div>
  </div>
  <p class="destacado">Los nombres de los productos cambian cada pocos meses; el patrón (encargo, trabajo autónomo, revisión) se mantiene.</p>
</section>
`);
