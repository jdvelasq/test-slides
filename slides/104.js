diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s005">
  <style>
    .s005 .evidencia { flex-direction: column; align-items: stretch; gap: 26px; }
    .s005 h3 { font-size: 32px; margin-bottom: 22px; }
    .s005 .preparacion { display: grid; grid-template-columns: 500px 50px 1fr; gap: 20px; align-items: center; }
    .s005 .paso-contexto { display: grid; grid-template-columns: 350px 32px 1fr; gap: 12px; align-items: center; padding: 14px 0; border-bottom: var(--borde); font-size: 27px; }
    .s005 .flecha-contexto { color: var(--acento); font-size: 36px; text-align: center; }
    .s005 .avance { margin: 8px 0 0 240px; color: var(--texto-suave); font-size: 28px; }
    .s005 .origen { font-size: 29px; line-height: 1.6; }
    .s005 .origen > p:first-child { white-space: nowrap; }
    .s005 .panel { padding: 28px; background: var(--gris-suave); border-radius: var(--radio); }
    .s005 .frases { font-size: 34px; line-height: 1.65; }
    .s005 .acento { color: var(--acento); font-weight: 650; }
    .s005 .pares { display: grid; grid-template-columns: 1fr 1fr; gap: 8px 32px; font-size: 26px; }
    .s005 .nota { font-size: 23px; color: var(--texto-suave); margin-top: 18px; }
    .s005 .codificacion { border: var(--borde); border-radius: var(--radio); padding: 24px 28px; }
    .s005 .matriz { display: grid; grid-template-columns: 1.25fr 1fr; gap: 42px; align-items: center; }
    .s005 table { border-collapse: collapse; width: 100%; table-layout: fixed; text-align: center; font-size: 25px; }
    .s005 th, .s005 td { text-align: center; padding: 8px 12px; border-bottom: var(--borde); }
    .s005 th { font-weight: 600; }
    .s005 tbody th { text-align: right; }
    .s005 td { color: var(--texto-suave); }
    .s005 tbody tr:nth-child(2) { background: var(--acento-suave); }
    .s005 tbody tr:nth-child(2) td { color: var(--acento); }
    .s005 .salida-pandas { font-family: var(--fuente-mono); font-size: 24px; line-height: 1.9; margin: 0; padding: 16px 0; background: var(--fondo); color: var(--texto); white-space: pre; }
    .s005 .fila-activa { color: var(--acento); font-weight: 650; }
    .s005 .explicacion { font-size: 29px; line-height: 1.4; }
    .s005 .vector { font-family: var(--fuente-mono); font-size: 26px; margin-top: 20px; color: var(--acento); }
  </style>
  <h2>2013 · Word2Vec: el contexto genera pares de entrenamiento entre palabras vecinas.</h2>
  <div class="evidencia">
    <div>
      <h3>Paso 1 · Obtener los pares de entrenamiento · Skip-gram, ventana ±1</h3>
      <div class="preparacion">
        <div class="panel origen"><p>“el profesor explica la clase”</p><p class="nota">(una frase del corpus)</p></div>
        <span class="flecha-contexto">→</span>
        <div class="panel">
          <div class="paso-contexto"><p>“<strong class="acento">el</strong> profesor explica la clase”</p><span class="flecha-contexto">→</span><p><strong class="acento">el</strong> → profesor</p></div>
          <div class="paso-contexto"><p>“el <strong class="acento">profesor</strong> explica la clase”</p><span class="flecha-contexto">→</span><p><strong class="acento">profesor</strong> → el, &nbsp; <strong class="acento">profesor</strong> → explica</p></div>
          <div class="paso-contexto"><p>“el profesor <strong class="acento">explica</strong> la clase”</p><span class="flecha-contexto">→</span><p><strong class="acento">explica</strong> → profesor, &nbsp; <strong class="acento">explica</strong> → la</p></div>
          <p class="avance">…</p>
        </div>
      </div>
    </div>
    <div class="codificacion">
      <h3>Paso 2 · Contar las coocurrencias · una fila y una columna por palabra</h3>
      <div class="matriz">
        <pre class="salida-pandas" role="img" aria-label="Matriz de coocurrencias con ventana de un vecino, presentada como salida de pandas">                  el  profesor   explica        la     clase
        el         0         1         0         0         0
<span class="fila-activa">  profesor         1         0         1         0         0</span>
   explica         0         1         0         1         0
        la         0         0         1         0         1
     clase         0         0         0         1         0</pre>
        <div class="explicacion"><p>Cada celda cuenta cuántas veces la palabra de la columna es vecina de la palabra de la fila.</p><p class="vector">profesor → el: 1<br>profesor → explica: 1</p><p class="nota">Solo esta frase, ventana ±1. Diagonal = 0. Estos conteos resumen los pares de entrenamiento; no son los vectores aprendidos.</p></div>
      </div>
    </div>
  </div>
  <p class="fuente">Mikolov et al. (2013), arXiv:1301.3781 · Skip-gram con ventana fija ±1, ejemplo didáctico sin submuestreo.</p>
</section>
`);
