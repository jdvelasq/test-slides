diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s018">
  <style>
    .s018 .intercambio { display: flex; flex-direction: column; gap: 16px; width: 100%; }
    .s018 .turno { display: grid; grid-template-columns: 280px 1fr; gap: 28px; padding: 18px 24px; border-left: 2px solid var(--linea); font-size: var(--t-pequeno); }
    .s018 .turno > span { color: var(--texto-suave); font-weight: 600; }
    .s018 .turno.ejecucion { border-color: var(--acento); background: var(--acento-suave); }
    .s018 .turno.respuesta { border-color: var(--acento); }
    .s018 code { overflow-wrap: anywhere; }
  </style>
  <h2>El modelo solicita una herramienta; el programa controla su ejecución.</h2>
  <div class="evidencia vertical">
    <p class="pregunta-grande">“¿Cuántas solicitudes hay pendientes?”</p>
    <div class="intercambio">
      <div class="turno"><span>Modelo → programa</span><code>{"herramienta": "contar_solicitudes", "estado": "pendiente"}</code></div>
      <div class="turno ejecucion"><span>Programa</span><p>Valida permisos y argumentos. Consulta la tabla autorizada.</p></div>
      <div class="turno"><span>Programa → modelo</span><code>{"total": 12, "fuente": "tabla de práctica"}</code></div>
      <div class="turno respuesta"><span>Modelo → usuario</span><p>“Hay 12 solicitudes pendientes en la tabla de práctica.”</p></div>
    </div>
  </div>
  <div class="pie"><dl class="terminos"><div><dt>Herramienta</dt> <dd>función que el programa puede ejecutar a petición del modelo.</dd></div><div class="idea-clave"><dt>Idea clave</dt> <dd>escribir una solicitud no concede permisos ni ejecuta por sí solo una acción.</dd></div></dl><div class="pruebelo">Con una tabla ficticia, pida contar solicitudes pendientes y citar la fuente. Compruebe el conteo. Sin la tabla o una herramienta habilitada, el modelo no debe inventarlo.</div></div>
  <p class="fuente">Adaptación de docs.pptx, diapositiva 65 · Ejemplo ficticio: solicitudes, herramienta y resultado ilustrativos.</p>
</section>
`);
