diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s115">
  <style>
    .s115 > h2 { font-size: var(--t-titulo); }
    .s115 .respuesta { position: relative; height: 100%; box-sizing: border-box; padding: 22px 30px; font-size: 24px; display: flex; flex-direction: column; gap: 10px; }
    .s115 .respuesta .sello { position: absolute; right: 28px; bottom: 20px; font-size: 24px; }
    .s115 .enlace { color: var(--acento); text-decoration: underline; font-size: 22px; }
    .s115 .rotulos { font-size: 22px; gap: 32px; }
  </style>
  <h2>Con búsqueda web, el modelo deja de recordar y empieza a consultar.</h2>
  <div class="evidencia vertical" style="gap: 16px">
    <p class="pregunta-grande" style="font-size: 32px">“¿Qué es una tesis de maestría de profundización en la UNAL?”</p>
    <div class="rejilla c2" style="flex: 1; min-height: 0; gap: 40px">
      <div class="tarjeta respuesta">
        <div class="panel-titulo">Sin búsqueda web · ilustración</div>
        <div>Una tesis de profundización es un trabajo de investigación aplicada, de unas 80 páginas, que el estudiante sustenta ante un jurado de dos evaluadores para obtener el título.</div>
        <span class="sello">Sin fuente</span>
      </div>
      <div class="tarjeta acento respuesta">
        <div class="panel-titulo acento">Con búsqueda web · ilustración</div>
        <div>En la UNAL, la Maestría de Profundización no tiene tesis sino <b>trabajo final</b>, que puede tener como máximo el 20 % de los créditos del plan.</div>
        <span class="enlace">[1] Acuerdo 033 de 2007 del CSU</span>
      </div>
    </div>
    <ul class="rotulos horizontal">
      <li><b>Dic. 2022 – feb. 2023</b> Perplexity y Bing Chat: respuestas con fuentes</li>
      <li><b>2023–2025</b> ChatGPT, Gemini y Claude agregan búsqueda web</li>
      <li>Resuelve “no sabe lo reciente”; no resuelve “hay que verificar”</li>
    </ul>
  </div>
  <div class="pie">
    <dl class="terminos" style="max-width: 760px">
      <div class="idea-clave"><dt>Idea clave</dt> <dd>Buscar aporta evidencia externa; la persona comprueba que la fuente respalda la respuesta.</dd></div>
      <div><dt>Búsqueda web (grounding)</dt> <dd>el modelo busca antes de responder y ancla la respuesta en fuentes con enlace.</dd></div>
    </dl>
    <div class="pruebelo" style="max-width: 1000px; font-size: 24px">En <strong>ChatGPT, Gemini o Claude</strong>, haga la pregunta “¿Qué es una tesis de maestría de profundización en la UNAL?” con la búsqueda web desactivada y luego activada. Compare: según el Acuerdo 033 de 2007, la Maestría de Profundización tiene trabajo final, no tesis.</div>
  </div>
  <p class="fuente">Acuerdo 033 de 2007 del Consejo Superior Universitario, artículo 11.</p>
</section>
`);
