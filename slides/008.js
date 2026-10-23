diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s008">
  <style>
    .s008 .evidencia { flex-direction: column; align-items: stretch; gap: 30px; }
    .s008 .comparacion { display: grid; grid-template-columns: 1fr 1.35fr; gap: 48px; align-items: center; }
    .s008 .panel { background: var(--gris-suave); padding: 32px; border-radius: var(--radio-grande); }
    .s008 .rotulo { color: var(--texto-suave); font-size: var(--t-pequeno); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 22px; }
    .s008 .frase { font-size: var(--t-subtitulo); line-height: 1.4; }
    .s008 .nota { font-size: var(--t-pequeno); color: var(--texto-suave); line-height: 1.4; margin-top: 20px; }
    .s008 .acento { color: var(--acento); font-weight: 650; }
    .s008 .implica { font-size: var(--t-texto); border-left: 4px solid var(--acento); padding-left: 28px; }
    .s008 .implica strong { color: var(--acento); }
    .s008 svg { width: 100%; height: 390px; }
    .s008 svg text { font-family: var(--fuente); fill: var(--texto); font-size: 28px; }
    .s008 svg .suave { fill: var(--texto-suave); font-size: 22px; }
    .s008 svg .linea { stroke: var(--linea); stroke-width: 2; fill: none; }
    .s008 svg .enlace { stroke: var(--acento); stroke-width: 4; fill: none; }
    .s008 svg .nodo { fill: var(--fondo); stroke: var(--linea); stroke-width: 2; }
    .s008 svg .foco { fill: var(--acento-suave); stroke: var(--acento); stroke-width: 3; }

    .s008 .oracion { display: flex; align-items: center; justify-content: center; gap: 16px; font-size: 32px; }
    .s008 .oracion strong { padding: 14px; border: 2px solid var(--acento); color: var(--acento); background: var(--acento-suave); border-radius: var(--radio); }
    .s008 .convergencia { display: flex; justify-content: center; gap: 48px; font-size: 24px; margin: 24px 0; color: var(--acento); }
    .s008 .convergencia b { font-weight: 400; }
    .s008 .modelo { padding: 28px 20px; background: var(--acento-suave); border: 2px solid var(--acento); border-radius: var(--radio); font-size: 30px; text-align: center; }
    .s008 .respuesta { font-size: 30px; text-align: center; margin-top: 24px; }
    .s008 .respuesta strong { color: var(--acento); }
    .s008 .adaptacion { display: flex; justify-content: space-between; align-items: center; gap: 20px; font-size: 26px; }
    .s008 .adaptacion span { padding: 20px; background: var(--gris-suave); border-radius: var(--radio); }

  </style>
  <h2>2018 · BERT: el contexto a ambos lados permite distinguir significados.</h2>
  <div class="evidencia">
    <div class="comparacion">
      <div class="panel">
        <p class="rotulo">La misma palabra · dos contextos</p>
        <p class="frase">“Retiré dinero del <span class="acento">banco</span>.”</p>
        <p class="frase" style="margin-top:26px">“Me senté en el <span class="acento">banco</span> del parque.”</p>
        <p class="nota">Word2Vec asigna un vector a “banco”. BERT produce representaciones diferentes según la frase que lo rodea.</p>
      </div>
      <div class="preentrenamiento">
        <p class="rotulo">Aprender con texto sin etiquetas de tarea</p>
        <div class="oracion"><span>Me senté en el</span><strong>[MÁSCARA]</strong><span>del parque.</span></div>
        <div class="convergencia"><span>contexto izquierdo →</span><b>← contexto derecho</b></div>
        <div class="modelo">BERT · codificador Transformer bidireccional</div>
        <p class="respuesta">Recuperar la palabra oculta: <strong>banco</strong></p>
        <p class="nota">Ejemplo del objetivo de palabras enmascaradas. El BERT original también aprendía a relacionar pares de oraciones.</p>
      </div>
    </div>
    <div class="adaptacion"><span>Modelo preentrenado</span><b>→</b><span>Ajuste con ejemplos de la tarea</span><b>→</b><span>Polaridad · preguntas y respuestas</span></div>
    <p class="implica"><strong>Qué cambió:</strong> se podía adaptar un modelo ya preentrenado a múltiples tareas con una capa de salida adicional.</p>
</div>
  <p class="fuente">Devlin et al. (octubre de 2018; publicación en NAACL, 2019), BERT · arXiv:1810.04805. Ejemplos didácticos en español.</p>
</section>
`);
