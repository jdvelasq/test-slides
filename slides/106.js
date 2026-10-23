diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s007">
  <style>
    .s007 .evidencia { flex-direction: column; align-items: stretch; gap: 30px; }
    .s007 .comparacion { display: grid; grid-template-columns: 1fr 1.35fr; gap: 48px; align-items: center; }
    .s007 .panel { background: var(--gris-suave); padding: 32px; border-radius: var(--radio-grande); }
    .s007 .rotulo { color: var(--texto-suave); font-size: var(--t-pequeno); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 22px; }
    .s007 .frase { font-size: var(--t-subtitulo); line-height: 1.4; }
    .s007 .nota { font-size: var(--t-pequeno); color: var(--texto-suave); line-height: 1.4; margin-top: 20px; }
    .s007 .acento { color: var(--acento); font-weight: 650; }
    .s007 .implica { font-size: var(--t-texto); border-left: 4px solid var(--acento); padding-left: 28px; }
    .s007 .implica strong { color: var(--acento); }
    .s007 svg { width: 100%; height: 390px; }
    .s007 svg text { font-family: var(--fuente); fill: var(--texto); font-size: 28px; }
    .s007 svg .suave { fill: var(--texto-suave); font-size: 22px; }
    .s007 svg .linea { stroke: var(--linea); stroke-width: 2; fill: none; }
    .s007 svg .enlace { stroke: var(--acento); stroke-width: 4; fill: none; }
    .s007 svg .nodo { fill: var(--fondo); stroke: var(--linea); stroke-width: 2; }
    .s007 svg .foco { fill: var(--acento-suave); stroke: var(--acento); stroke-width: 3; }

  </style>
  <h2>2017 · Transformer: la atención relaciona las palabras dentro de cada secuencia.</h2>
  <div class="evidencia">
    <div class="comparacion">
      <div class="panel">
        <p class="rotulo">Del vector fijo a la representación contextual</p>
        <p class="frase">“El animal no cruzó la calle<br>porque <span class="acento">estaba cansado</span>.”</p>
        <p class="nota">Para interpretar “cansado”, importa su relación con “animal”, aunque haya palabras entre ambos.</p>
        <p class="frase" style="margin-top:28px">Cada token combina información de otros tokens mediante <span class="acento">autoatención</span>.</p>
      </div>
      <div>
        <svg viewBox="0 0 940 390" role="img" aria-label="Atención ilustrativa desde cansado hacia animal, estaba y calle, con distintas intensidades.">
          <rect class="nodo" x="24" y="35" width="180" height="70" rx="12"/><text x="114" y="80" text-anchor="middle">animal</text>
          <rect class="nodo" x="265" y="35" width="160" height="70" rx="12"/><text x="345" y="80" text-anchor="middle">calle</text>
          <rect class="nodo" x="485" y="35" width="160" height="70" rx="12"/><text x="565" y="80" text-anchor="middle">estaba</text>
          <rect class="foco" x="710" y="35" width="200" height="70" rx="12"/><text x="810" y="80" text-anchor="middle">cansado</text>
          <path class="enlace" style="stroke-width:9" d="M810 105 Q460 385 114 105"/>
          <path class="enlace" style="opacity:0.25;stroke-width:2" d="M810 105 Q560 290 345 105"/>
          <path class="enlace" style="opacity:0.6" d="M810 105 Q680 215 565 105"/>
          <text x="470" y="305" text-anchor="middle">Relaciones ponderadas por atención</text>
          <text class="suave" x="470" y="354" text-anchor="middle">Grosor ilustrativo; no son pesos medidos de un modelo.</text>
        </svg>
        <p class="nota">La arquitectura combina atención e información de posición. El trabajo original la demostró en traducción y permitió más paralelismo que los modelos recurrentes.</p>
      </div>
    </div>
    <p class="implica"><strong>Qué cambió:</strong> la representación depende de la secuencia. Esta arquitectura se convirtió en la base de BERT y GPT.</p>
</div>
  <p class="fuente">Vaswani et al. (2017), Attention Is All You Need · arXiv:1706.03762. La atención tenía antecedentes; el hito es la arquitectura Transformer.</p>
</section>
`);
