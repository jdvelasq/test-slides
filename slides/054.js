diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s054">
  <style>
    .s054 .franja-comun {
      width: 100%;
      padding: 28px 36px;
      border: 2px solid var(--acento);
      border-radius: var(--radio);
      background: var(--acento-suave);
    }
    .s054 .franja-comun .fila { gap: 24px; }
    .s054 .franja-comun .caja {
      flex: 1;
      text-align: center;
      font-size: var(--t-pequeno);
      padding: 16px 20px;
    }
    .s054 .franja-comun .flecha { font-size: 36px; }
    .s054 .columnas {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--hueco);
      width: 100%;
    }
    .s054 .columna {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .s054 .flujo {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .s054 .flujo .caja {
      flex: 1;
      text-align: center;
      font-size: var(--t-pequeno);
      padding: 12px 14px;
    }
    .s054 .flujo .flecha { font-size: 28px; }
    .s054 .rotulos { font-size: var(--t-pequeno); gap: 14px; }
  </style>
  <h2>2026 · Cowork y ChatGPT Work: mismo patrón, distinto ecosistema</h2>
  <div class="evidencia vertical">
    <div class="franja-comun">
      <p class="panel-titulo acento">Lo que comparten</p>
      <div class="fila">
        <div class="caja">Objetivo</div>
        <span class="flecha acento">→</span>
        <div class="caja">Pasos con archivos, aplicaciones y web</div>
        <span class="flecha acento">→</span>
        <div class="caja">Resultado para revisar</div>
      </div>
    </div>
    <div class="columnas">
      <div class="columna">
        <p class="panel-titulo">Claude Cowork</p>
        <div class="flujo">
          <div class="caja">Objetivo</div>
          <span class="flecha">→</span>
          <div class="caja">Pasos</div>
          <span class="flecha">→</span>
          <div class="caja">Resultado</div>
        </div>
        <ul class="rotulos">
          <li>Carpetas locales y escritorio (Dispatch desde el móvil)</li>
          <li>Skills, plugins y conectores</li>
        </ul>
      </div>
      <div class="columna">
        <p class="panel-titulo">ChatGPT Work</p>
        <div class="flujo">
          <div class="caja">Objetivo</div>
          <span class="flecha">→</span>
          <div class="caja">Pasos</div>
          <span class="flecha">→</span>
          <div class="caja">Resultado</div>
        </div>
        <ul class="rotulos">
          <li>Ecosistema de ChatGPT: aplicaciones conectadas, navegador en la nube, espacios de equipo</li>
        </ul>
      </div>
    </div>
    <p class="destacado">Criterio de elección: dónde están tus archivos, qué aplicaciones usa tu organización y qué plan tienes. Saber usar uno se transfiere casi por completo al otro.</p>
  </div>
</section>
`);
