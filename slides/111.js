diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s111">
  <style>
    .s111 .tarjeta { display: flex; flex-direction: column; gap: 16px; height: 100%; box-sizing: border-box; padding: 24px 32px; }
    .s111 .nube { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: center; gap: 4px 22px; color: var(--texto-suave); font-weight: 700; line-height: 1.1; }
    .s111 .nube span:nth-child(3n) { color: var(--texto); }
    .s111 .temas { display: flex; flex-direction: column; gap: 10px; font-size: 24px; }
    .s111 .temas b { color: var(--acento); }
    .s111 .tecnicas { font-size: 20px; color: var(--texto-suave); margin-top: auto; }
  </style>
  <header class="cabecera-concepto">
    <p class="pregunta-guia">¿Qué cambia cuando importa el sentido de una frase y no solo sus palabras?</p>
    <h2>Durante décadas, las máquinas contaron palabras. Contar no es entender.</h2>
  </header>
  <div class="evidencia vertical" style="gap: 20px">
    <div class="rejilla c2" style="flex: 1; min-height: 0">
      <div class="tarjeta">
        <div class="panel-titulo">Minería de texto clásica</div>
        <div class="nube">
          <span style="font-size: 64px">clase</span><span style="font-size: 30px">tareas</span><span style="font-size: 52px">profesor</span>
          <span style="font-size: 26px">bien</span><span style="font-size: 44px">mal</span><span style="font-size: 34px">difícil</span>
          <span style="font-size: 24px">examen</span><span style="font-size: 38px">nada</span><span style="font-size: 26px">explica</span>
        </div>
        <div class="tecnicas">Bolsa de palabras y TF-IDF · Sentimiento con diccionarios · Tópicos con LDA (2003) · Un modelo por tarea</div>
      </div>
      <div class="tarjeta">
        <div class="panel-titulo acento">Un modelo de lenguaje</div>
        <div class="temas">
          <div><b>Claridad del profesor</b> · positivo · “Explica muy bien y responde todas las dudas.”</div>
          <div><b>Carga de trabajo</b> · mixto · “Muchas tareas, pero se aprende.”</div>
          <div><b>Dificultad</b> · positivo · “Difícil, pero no estuvo nada mal la clase.”</div>
        </div>
      </div>
    </div>
    <p class="destacado" style="font-size: 28px">“No estuvo nada mal la clase” → un conteo aislado puede sugerir algo negativo; el contexto permite interpretar el elogio.</p>
  </div>
  <div class="pie">
    <dl class="terminos">
      <div class="idea-clave"><dt>Idea clave</dt> <dd>El contexto de las palabras cambia su interpretación; una respuesta también necesita comprobarse.</dd></div>
      <div><dt>Bolsa de palabras</dt> <dd>el texto como conteo de palabras, sin importar el orden.</dd></div>
      <div><dt>Análisis de sentimiento</dt> <dd>clasificar un texto como positivo, negativo o neutro.</dd></div>
    </dl>
    <div class="pruebelo"><strong>Gemini (cuenta institucional)</strong>: “Te pego comentarios ficticios de evaluación docente. Agrúpalos en temas, indica el sentimiento de cada tema y cita dos comentarios textuales por tema.”</div>
  </div>
  <p class="fuente">Salton (TF-IDF, años setenta); Blei, Ng y Jordan (LDA, 2003).</p>
</section>
`);
