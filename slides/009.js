diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s009">
  <style>
    .s009 .evidencia { flex-direction: column; align-items: stretch; gap: 30px; }
    .s009 .comparacion { display: grid; grid-template-columns: 1fr 1.35fr; gap: 48px; align-items: center; }
    .s009 .panel { background: var(--gris-suave); padding: 32px; border-radius: var(--radio-grande); }
    .s009 .rotulo { color: var(--texto-suave); font-size: var(--t-pequeno); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 22px; }
    .s009 .frase { font-size: var(--t-subtitulo); line-height: 1.4; }
    .s009 .nota { font-size: var(--t-pequeno); color: var(--texto-suave); line-height: 1.4; margin-top: 20px; }
    .s009 .acento { color: var(--acento); font-weight: 650; }
    .s009 .implica { font-size: var(--t-texto); border-left: 4px solid var(--acento); padding-left: 28px; }
    .s009 .implica strong { color: var(--acento); }
    .s009 svg { width: 100%; height: 390px; }
    .s009 svg text { font-family: var(--fuente); fill: var(--texto); font-size: 28px; }
    .s009 svg .suave { fill: var(--texto-suave); font-size: 22px; }
    .s009 svg .linea { stroke: var(--linea); stroke-width: 2; fill: none; }
    .s009 svg .enlace { stroke: var(--acento); stroke-width: 4; fill: none; }
    .s009 svg .nodo { fill: var(--fondo); stroke: var(--linea); stroke-width: 2; }
    .s009 svg .foco { fill: var(--acento-suave); stroke: var(--acento); stroke-width: 3; }

    .s009 .proceso { display: flex; flex-direction: column; gap: 24px; margin: 30px 0; }
    .s009 .paso { display: flex; align-items: center; gap: 16px; font-size: 24px; }
    .s009 .paso span { width: 48px; height: 48px; background: var(--acento); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
    .s009 .modelo { padding: 28px 20px; background: var(--acento-suave); border: 2px solid var(--acento); border-radius: var(--radio); font-size: 30px; text-align: center; }
    .s009 .respuesta { font-size: 30px; text-align: center; margin-top: 24px; }
    .s009 .respuesta strong { color: var(--acento); }
    .s009 .adaptacion { display: flex; justify-content: space-between; align-items: center; gap: 20px; font-size: 26px; margin: 30px 0; }
    .s009 .adaptacion span { padding: 20px; background: var(--gris-suave); border-radius: var(--radio); }
    .s009 .limitacion { background: var(--gris-suave); padding: 20px; border-radius: var(--radio); margin-top: 20px; }
    .s009 .limitacion h3 { margin-top: 0; color: var(--acento); font-size: 28px; }
    .s009 .titulo { line-height: 1.3; margin-bottom: 20px; font-size: 32px; }
    .s009 .fuente { font-size: 16px; line-height: 1.4; margin-top: 40px; }
    .s009 .rotulo { margin-bottom: 15px; font-size: 16px; }
    .s009 .comparacion { margin-bottom: 20px; }
    .s009 .limitacion ul { padding-left: 15px; margin: 0; font-size: 18px; line-height: 1.5; }
    .s009 .limitacion li { margin-bottom: 10px; word-wrap: break-word; }
    .s009 .evidencia { max-width: 100%; }
    .s009 .frase { font-size: 24px; }
    .s009 .paso { font-size: 20px; }
    .s009 .modelo { font-size: 24px; }
    .s009 .respuesta { font-size: 24px; }
    .s009 .adaptacion { font-size: 20px; }
  </style>
  <h2 class="titulo">2019 · Sentence-BERT: embeddings para búsqueda semántica</h2>
  <div class="evidencia">
    <div class="comparacion">
      <div class="panel">
        <p class="rotulo">Problema anterior</p>
        <p class="frase">BERT comparaba pares de frases</p>
        <p class="nota">Encontrar el par más similar en 10.000 frases requería ~50 millones de inferencias (~65 horas)</p>
      </div>
      <div class="preentrenamiento">
        <p class="rotulo">Solución SBERT</p>
        <div class="proceso">
          <div class="paso"><span>1</span> Estructuras siamesas sobre BERT</div>
          <div class="paso"><span>2</span> Producción de embeddings por frase</div>
          <div class="paso"><span>3</span> Comparación con similitud coseno</div>
        </div>
        <div class="modelo">SBERT · modelo siamés para embeddings</div>
        <p class="respuesta">Problema reducido de ~65 horas a ~5 segundos</p>
        <p class="nota">Manteniendo la precisión de BERT</p>
      </div>
    </div>
    <div class="adaptacion">
      <span>Texto → modelo de embeddings</span>
      <b>→</b>
      <span>vector de dimensión fija</span>
      <b>→</b>
      <span>similitud coseno</span>
      <b>→</b>
      <span>búsqueda, clustering, RAG</span>
    </div>
    <p class="implica"><strong>Qué cambió:</strong> embeddings permiten búsqueda semántica práctica para RAG.</p>
    
    <div class="limitacion">
      <h3>Límites observados</h3>
      <ul style="font-size: 22px; line-height: 1.6; margin: 0;">
        <li>El modelo y el idioma importan: un modelo inglés ordena mal consultas en español</li>
        <li>La similitud coseno mide cercanía semántica aprendida, no verdad ni relevancia para tu tarea</li>
        <li>Para colecciones muy grandes se usan índices vectoriales aproximados</li>
      </ul>
    </div>
  </div>
  <p class="fuente">Reimers y Gurevych (27-ago-2019), Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks (arXiv 1908.10084)</p>
</section>
`);
