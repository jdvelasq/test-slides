diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s032">
  <style>
    .s032 .comparacion { grid-template-columns: 0.75fr 1.6fr; }
    .s032 .pedido { display: flex; flex-direction: column; gap: 24px; }
    .s032 .pedido p { font-size: var(--t-rotulo); line-height: 1.45; }
    .s032 .contrato { display: grid; grid-template-columns: 170px 1fr; gap: 18px 24px; font-size: var(--t-pequeno); line-height: 1.4; }
    .s032 .contrato dt { font-weight: 600; color: var(--acento); }
    .s032 .contrato dd { margin: 0; }
    .s032 .limite { font-size: var(--t-pequeno); color: var(--texto-suave); max-width: 1450px; text-align: center; }
  </style>
  <header class="cabecera-concepto">
    <p class="pregunta-guia">¿Por qué el mismo modelo puede entregar un texto genérico o una respuesta útil?</p>
    <h2>El informe empieza a mejorar cuando aclaramos qué debe resolver.</h2>
  </header>
  <div class="evidencia vertical">
    <div class="comparacion">
      <div class="tarjeta pedido">
        <div class="panel-titulo">Pedido abierto</div>
        <p>“Haz un informe de estos datos.”</p>
        <p class="suave">No define para quién, con qué datos ni qué decisión debe apoyar.</p>
      </div>
      <div class="tarjeta acento pedido">
        <div class="panel-titulo acento">El mismo encargo, con criterios claros</div>
        <dl class="contrato">
          <dt>Objetivo</dt><dd>Prepara una nota que identifique qué cambio entre periodos merece investigarse.</dd>
          <dt>Contexto</dt><dd>Compara los dos periodos de la tabla adjunta. Usa el diccionario de variables para interpretarla.</dd>
          <dt>Fuentes</dt><dd>Usa solo estos datos. Cita la fila de cada cifra; no atribuyas causas sin evidencia.</dd>
          <dt>Salida</dt><dd>Máximo 200 palabras: cambio absoluto, cambio porcentual y preguntas pendientes.</dd>
          <dt>Ejemplo</dt><dd>Formato esperado: “De 100 a 80: −20 unidades; −20 % respecto a 100”.</dd>
          <dt>Faltantes</dt><dd>Si no se pueden comparar los periodos, indica qué información falta antes de concluir.</dd>
        </dl>
      </div>
    </div>
    <p class="limite">Más texto no asegura más calidad: seleccione información relevante. El modelo y las herramientas disponibles también limitan lo que puede resolver.</p>
  </div>
  <div class="pie">
    <dl class="terminos">
      <div class="idea-clave"><dt>Idea clave</dt> <dd>La calidad del pedido se puede revisar: objetivo, información, criterios y una salida comprobable.</dd></div><div><dt>Ingeniería de contexto</dt> <dd>seleccionar instrucciones, fuentes, herramientas e historial útiles para la tarea.</dd></div></dl>
    <div class="pruebelo">Antes de enviar: ¿el pedido aclara el objetivo, aporta la información necesaria y permite comprobar la entrega? “Actúa como experto” no sustituye esos elementos.</div>
  </div>
  <p class="fuente">Anthropic, “Effective context engineering for AI agents” (2025) y “Best practices for prompt engineering for 2026”.</p>
</section>
`);
