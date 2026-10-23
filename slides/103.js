diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s004">
  <style>
    .s004 .evidencia { flex-direction: column; align-items: stretch; gap: 30px; }
    .s004 .comparacion { display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px; align-items: center; }
    .s004 .panel { background: var(--gris-suave); padding: 32px; border-radius: var(--radio-grande); }
    .s004 .rotulo { color: var(--texto-suave); font-size: var(--t-pequeno); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 22px; }
    .s004 .frase { font-size: 32px; line-height: 1.4; }
    .s004 .nota { font-size: var(--t-pequeno); color: var(--texto-suave); line-height: 1.4; margin-top: 20px; }
    .s004 .acento { color: var(--acento); font-weight: 650; }
    .s004 .implica { font-size: var(--t-texto); border-left: 4px solid var(--acento); padding-left: 28px; }
    .s004 .implica strong { color: var(--acento); }
    .s004 svg { width: 100%; height: 560px; }
    .s004 svg text { font-family: var(--fuente); fill: var(--texto); font-size: 28px; }
    .s004 svg .suave { fill: var(--texto-suave); font-size: 22px; }
    .s004 svg .linea { stroke: var(--linea); stroke-width: 2; fill: none; }
    .s004 svg .enlace { stroke: var(--acento); stroke-width: 4; fill: none; }
    .s004 svg .nodo { fill: var(--fondo); stroke: var(--linea); stroke-width: 2; }
    .s004 svg .foco { fill: var(--acento-suave); stroke: var(--acento); stroke-width: 3; }

    .s004 table { width: 100%; border-collapse: collapse; font-size: 29px; margin-top: 22px; text-align: right; }
    .s004 th, .s004 td { border-bottom: var(--borde); padding: 12px; }
    .s004 th:first-child { text-align: left; }
    .s004 .distancias { font-size: 28px; line-height: 1.6; margin-top: 24px; }
  </style>
  <h2>2013 · Word2Vec: las palabras con contextos similares aprendían vectores similares.</h2>
  <div class="evidencia">
    <div class="comparacion">
      <div class="panel">
        <p class="rotulo">Aprender a predecir palabras · sin etiquetas manuales</p>
        <p class="frase"><b>CBOW:</b> contexto → palabra central<br><b>Skip-gram:</b> palabra central → contexto</p>
        <p class="nota">Ejemplo Skip-gram: “profesor” → “el”, “explica”.<br>Los vectores se aprenden al entrenar estas predicciones.</p>
        <table aria-label="Vectores didácticos de tres dimensiones"><thead><tr><th>Palabra</th><th>d1</th><th>d2</th><th>d3</th></tr></thead><tbody><tr><th>profesor</th><td>0,80</td><td>0,70</td><td>0,20</td></tr><tr><th>docente</th><td>0,75</td><td>0,65</td><td>0,25</td></tr><tr><th>mesa</th><td>0,20</td><td>0,15</td><td>0,80</td></tr></tbody></table>
        <div class="distancias"><p>Similitud coseno = (u · v) / (‖u‖ ‖v‖)</p><p><strong class="acento">profesor ↔ docente: 0,998</strong></p><p>profesor ↔ mesa: 0,469</p></div>
      </div>
      <div>
        <svg viewBox="100 -40 800 710" role="img" aria-label="Cubo con origen en la esquina posterior: d1 y d2 avanzan hacia el frente y d3 asciende. Profesor y docente están próximos; mesa está separada.">
<path class="linea" d="M450.0,310.0 L730.0,440.0 L490.0,610.0 L210.0,480.0 L450.0,310.0" style="fill:var(--gris-suave);fill-opacity:0.8"/>
<path class="linea" d="M210.0,480.0 L490.0,610.0 L490.0,330.0 L210.0,200.0 L210.0,480.0" style="fill:var(--gris-suave);fill-opacity:0.8"/>
<path class="linea" d="M450.0,310.0 L210.0,480.0 L210.0,200.0 L450.0,30.0 L450.0,310.0" style="fill:var(--gris-suave);fill-opacity:0.8"/>
<path class="linea" d="M450.0,310.0 L730.0,440.0" style="stroke-dasharray:5 6"/>
<path class="linea" d="M450.0,310.0 L210.0,480.0" style="stroke-dasharray:5 6"/>
<path class="linea" d="M450.0,310.0 L450.0,30.0" style="stroke-dasharray:5 6"/>
<path class="linea" d="M450.0,30.0 L730.0,160.0" style=""/>
<path class="linea" d="M450.0,30.0 L210.0,200.0" style=""/>
<path class="linea" d="M210.0,480.0 L490.0,610.0" style=""/>
<path class="linea" d="M210.0,480.0 L210.0,200.0" style=""/>
<path class="linea" d="M210.0,200.0 L490.0,330.0" style=""/>
<path class="linea" d="M730.0,440.0 L490.0,610.0" style=""/>
<path class="linea" d="M730.0,440.0 L730.0,160.0" style=""/>
<path class="linea" d="M730.0,160.0 L490.0,330.0" style=""/>
<path class="linea" d="M490.0,610.0 L490.0,330.0" style=""/>
<path class="enlace" d="M450.0,310.0 L730.0,440.0" style="stroke-width:2.5;stroke-dasharray:7 5"/>
<text x="744" y="455" class="suave">d1 = 1</text>
<circle cx="590.0" cy="375.0" r="4" style="fill:var(--acento)"/><text x="602.0" y="390.0" class="suave">0,5</text>
<path class="enlace" d="M450.0,310.0 L210.0,480.0" style="stroke-width:2.5;stroke-dasharray:7 5"/>
<text x="115" y="498" class="suave">d2 = 1</text>
<circle cx="330.0" cy="395.0" r="4" style="fill:var(--acento)"/><text x="342.0" y="410.0" class="suave">0,5</text>
<path class="enlace" d="M450.0,310.0 L450.0,30.0" style="stroke-width:2.5;stroke-dasharray:7 5"/>
<text x="465" y="22" class="suave">d3 = 1</text>
<circle cx="450" cy="170.0" r="4" style="fill:var(--acento)"/><text x="462" y="185.0" class="suave">0,5</text>
<path class="linea" d="M470.0,361.5 L470.0,137.5" style="stroke-dasharray:5 6;stroke:var(--texto-suave)"/>
<path class="enlace" d="M450.0,310.0 L470.0,137.5" style="stroke:var(--texto-suave);opacity:0.55;stroke-width:3"/>
<circle cx="470.0" cy="137.5" r="8" style="fill:var(--texto-suave);stroke:var(--fondo);stroke-width:2"/>
<path d="M470.0,137.5 L465.0,105.5" class="linea" style="stroke:var(--texto-suave)"/>
<text x="375.0" y="113.5">mesa</text>
<path class="linea" d="M504.0,518.0 L504.0,448.0" style="stroke-dasharray:5 6;stroke:var(--texto-suave)"/>
<path class="enlace" d="M450.0,310.0 L504.0,448.0" style="stroke:var(--acento);opacity:0.55;stroke-width:3"/>
<circle cx="504.0" cy="448.0" r="8" style="fill:var(--acento);stroke:var(--fondo);stroke-width:2"/>
<path d="M504.0,448.0 L419.0,395.0" class="linea" style="stroke:var(--acento)"/>
<text x="329.0" y="403.0">docente</text>
<path class="linea" d="M506.0,533.0 L506.0,477.0" style="stroke-dasharray:5 6;stroke:var(--texto-suave)"/>
<path class="enlace" d="M450.0,310.0 L506.0,477.0" style="stroke:var(--acento);opacity:0.55;stroke-width:3"/>
<circle cx="506.0" cy="477.0" r="8" style="fill:var(--acento);stroke:var(--fondo);stroke-width:2"/>
<path d="M506.0,477.0 L558.0,505.0" class="linea" style="stroke:var(--acento)"/>
<text x="566.0" y="513.0">profesor</text>
<text class="suave" x="350" y="300">[0, 0, 0]</text>
<text class="suave" x="250" y="-15">Espacio vectorial 3D</text>
        </svg>
        <p class="nota">Cubo y tabla: vectores didácticos en 3D, no resultados medidos. Modelo Google News publicado: 300 dimensiones, 3 millones de palabras y frases; entrenado con ≈100 mil millones de palabras.</p>
      </div>
    </div>
    <p class="implica"><strong>Qué cambió:</strong> las relaciones admitían operaciones: v(París) − v(Francia) + v(Italia) ≈ v(Roma).</p>
</div>
  <p class="fuente">Fuentes: Mikolov et al. (2013), arXiv:1301.3781 · Proyecto original: code.google.com/archive/p/word2vec · github.com/tmikolov/word2vec.</p>
</section>
`);
