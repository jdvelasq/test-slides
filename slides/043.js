diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s043">
  <style>
    .s043 .evidencia { gap: 40px; }
    .s043 .embudo-wrap { display: flex; flex-direction: column; align-items: center; gap: 10px; }
    .s043 .embudo-svg { width: 600px; height: 360px; }
    .s043 .embudo-svg .doc { fill: var(--gris-suave); stroke: var(--linea); stroke-width: 1.5; }
    .s043 .embudo-svg .doc.relevante { fill: var(--acento-suave); stroke: var(--acento); }
    .s043 .embudo-svg .funnel { fill: var(--gris-suave); stroke: var(--linea); stroke-width: 1.5; }
    .s043 .embudo-svg .modelo-box { fill: var(--acento); }
    .s043 .embudo-svg .modelo-txt { fill: #fff; font-size: 22px; font-weight: 600; text-anchor: middle; }
    .s043 .embudo-svg .etiqueta { fill: var(--texto-suave); font-size: 20px; text-anchor: middle; }
    .s043 .comparacion-fila { display: flex; gap: 40px; justify-content: center; }
    .s043 .comparacion-fila .caja { flex: 1; max-width: 400px; text-align: center; padding: 18px 24px; }
    .s043 .comparacion-fila .caja strong { display: block; font-size: var(--t-rotulo); margin-bottom: 4px; }
    .s043 .comparacion-fila .caja span { font-size: var(--t-pequeno); color: var(--texto-suave); }
    .s043 .notas { display: flex; gap: 32px; justify-content: center; }
    .s043 .notas .caja { flex: 1; max-width: 460px; font-size: var(--t-pequeno); line-height: 1.4; }
  </style>
  <h2>2025 · Context engineering: lo que le das determina lo que te devuelve</h2>
  <div class="evidencia vertical">
    <div class="embudo-wrap">
      <svg class="embudo-svg" viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
        <rect class="doc" x="50" y="8" width="64" height="46" rx="4"/>
        <rect class="doc" x="138" y="0" width="64" height="46" rx="4"/>
        <rect class="doc" x="226" y="12" width="64" height="46" rx="4"/>
        <rect class="doc" x="314" y="4" width="64" height="46" rx="4"/>
        <rect class="doc" x="402" y="10" width="64" height="46" rx="4"/>
        <rect class="doc" x="486" y="0" width="64" height="46" rx="4"/>
        <text class="etiqueta" x="300" y="78">Documentos, ejemplos, instrucciones, herramientas</text>
        <polygon class="funnel" points="40,96 560,96 370,250 230,250"/>
        <rect class="doc relevante" x="255" y="262" width="64" height="46" rx="4"/>
        <rect class="doc relevante" x="335" y="262" width="64" height="46" rx="4"/>
        <rect class="modelo-box" x="240" y="320" width="120" height="34" rx="8"/>
        <text class="modelo-txt" x="300" y="343">Modelo</text>
      </svg>
    </div>
    <div class="comparacion-fila">
      <div class="caja">
        <strong>Prompt</strong>
        <span>La pregunta</span>
      </div>
      <div class="caja acento">
        <strong>Contexto</strong>
        <span>Todo lo que el modelo ve</span>
      </div>
    </div>
    <div class="notas">
      <div class="caja">Más información no siempre es mejor: el exceso de material irrelevante distrae al modelo.</div>
      <div class="caja">Consecuencia práctica: dale al agente las fuentes correctas, un ejemplo del resultado esperado y solo las herramientas que necesita.</div>
    </div>
  </div>
  <p class="destacado">La calidad del resultado depende menos de la frase exacta del pedido y más de qué información tiene el agente a la vista: documentos, ejemplos, instrucciones, herramientas.</p>
</section>
`);
