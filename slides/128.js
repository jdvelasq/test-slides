diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s128">
  <style>
    .s128 > h2 { font-size: var(--t-titulo); }
    .s128 .tarjeta { display: flex; gap: 32px; align-items: center; height: 100%; box-sizing: border-box; padding: 24px 32px; }
    .s128 .tarjeta ul { flex: 1; margin: 10px 0 0; padding-left: 1.1em; font-size: 24px; }
    .s128 .tarjeta li + li { margin-top: 6px; }
    .s128 .mini { width: 170px; flex: none; }
    .s128 .mini .doc { padding: 16px; }
    .s128 .mini .barras { gap: 8px; }
    .s128 .mini .barras i { height: 8px; }
    .s128 .pila { position: relative; height: 170px; }
    .s128 .pila .doc { position: absolute; inset: 0; }
    .s128 .pila .doc:nth-child(1) { transform: translate(16px, -14px); }
    .s128 .pila .doc:nth-child(2) { transform: translate(8px, -7px); }
  </style>
  <h2>La misma pregunta en Gemini: una respuesta en segundos o un informe en minutos.</h2>
  <div class="evidencia vertical" style="gap: 20px">
    <p class="pregunta-grande" style="font-size: 32px">“¿Qué maestrías en analítica en Colombia se ofrecen en modalidad híbrida y cómo se comparan en créditos?”</p>
    <div class="rejilla c2" style="flex: 1; min-height: 0; gap: 40px">
      <div class="tarjeta">
        <div style="flex: 1">
          <div class="panel-titulo">Búsqueda normal</div>
          <ul>
            <li>Segundos</li>
            <li>Pocas fuentes</li>
            <li>Una respuesta de un párrafo o una lista</li>
            <li>Sirve para un dato puntual</li>
          </ul>
        </div>
        <div class="mini"><div class="doc"><div class="barras"><i></i><i></i><i></i><i></i></div></div></div>
      </div>
      <div class="tarjeta acento">
        <div style="flex: 1">
          <div class="panel-titulo acento">Deep Research</div>
          <ul>
            <li>Primero muestra un plan de investigación que se puede editar</li>
            <li>Varios minutos</li>
            <li>Decenas de fuentes leídas</li>
            <li>Un informe de varias páginas con tabla y referencias</li>
            <li>Sirve para un panorama que alimenta una decisión</li>
          </ul>
        </div>
        <div class="mini pila">
          <div class="doc"></div><div class="doc"></div>
          <div class="doc"><div class="barras"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
        </div>
      </div>
    </div>
    <p class="destacado" style="align-self: flex-start; font-size: 26px">En ambos casos, las fuentes se revisan antes de usarlas.</p>
  </div>
  <div class="pie">
    <div class="pruebelo" style="max-width: 1300px; font-size: 26px"><strong>Gemini (cuenta institucional)</strong>: escriba la pregunta una vez como chat normal y otra vez activando Deep Research. Compare cuántas fuentes usó cada uno y qué programas encontró que el otro no.</div>
  </div>
</section>
`);
