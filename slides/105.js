diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s006">
  <style>
    .s006 .evidencia { flex-direction: column; align-items: stretch; gap: 22px; }
    .s006 .entrada { display: flex; align-items: center; gap: 32px; padding: 22px 28px; background: var(--gris-suave); border-radius: var(--radio); font-size: 30px; }
    .s006 .entrada strong { color: var(--acento); }
    .s006 .entrada span { font-size: 25px; color: var(--texto-suave); }
    .s006 .pasos { display: grid; grid-template-columns: 1fr 42px 1fr 42px 1fr; gap: 16px; align-items: stretch; }
    .s006 .paso { padding: 26px; border: var(--borde); border-radius: var(--radio); }
    .s006 h3 { font-size: 30px; margin-bottom: 18px; }
    .s006 .texto { font-size: 26px; line-height: 1.35; }
    .s006 .nota { font-size: 21px; color: var(--texto-suave); line-height: 1.3; margin-top: 20px; }
    .s006 .matriz { font-family: var(--fuente-mono); font-size: 21px; line-height: 1.9; white-space: pre; margin: 20px 0; padding: 0; background: var(--fondo); }
    .s006 .acento { color: var(--acento); font-weight: 650; }
    .s006 .flecha-paso { align-self: center; font-size: 40px; color: var(--acento); text-align: center; }
    .s006 .operacion { padding: 12px; margin: 10px 0; border-radius: var(--radio); background: var(--acento-suave); font-size: 25px; line-height: 1.25; }
    .s006 .vector-entrada { display: block; font-family: var(--fuente-mono); font-size: 21px; font-weight: 650; font-style: normal; letter-spacing: normal; white-space: pre; color: var(--acento); }
    .s006 .distribucion { display: grid; grid-template-columns: 1fr auto; gap: 4px 24px; font-family: var(--fuente-mono); font-size: 23px; margin: 12px 0; }
    .s006 .probabilidad { display: flex; justify-content: space-between; gap: 20px; font-size: 28px; margin: 20px 0 10px; }
    .s006 .barra-prob { height: 22px; background: var(--gris-suave); border-radius: 8px; overflow: hidden; }
    .s006 .barra-prob span { display: block; width: 10%; height: 100%; background: var(--acento); }
    .s006 .repeticion { display: flex; align-items: center; gap: 30px; padding: 22px 28px; border: 2px solid var(--acento); border-radius: var(--radio); background: var(--acento-suave); font-size: 28px; line-height: 1.4; }
    .s006 .repeticion strong { flex-shrink: 0; color: var(--acento); }
    .s006 .resultado { font-size: 30px; line-height: 1.4; }
  </style>
  <h2>2013 · Word2Vec: cada par de entrenamiento ayuda a ajustar los vectores.</h2>
  <div class="evidencia">
    <div class="pasos">
      <div class="paso">
        <h3>Paso 3 · Crear los vectores iniciales</h3>
        <p class="texto">Asignamos a cada palabra <strong>3 números aleatorios pequeños</strong>.</p>
        <pre class="matriz">                  d1        d2        d3
        el      0,01     −0,03      0,02
<span class="acento">  profesor     −0,02      0,01      0,03</span>
   explica      0,04      0,02     −0,01
        la     −0,01      0,03      0,01
     clase      0,02     −0,01     −0,03</pre>
        <p class="nota">Elegimos d = 3 para visualizarlo; podría ser 300. Una fila por palabra del vocabulario.</p>
      </div>
      <span class="flecha-paso">→</span>
      <div class="paso">
        <h3>Paso 4 · Se toma una palabra y se intenta predecir la vecina</h3>
        <p class="texto"><strong class="acento">profesor → explica</strong><br>Entrada: vector de “profesor”.<br>Objetivo observado: “explica”.</p>
        <div class="operacion"><span class="vector-entrada">[−0,02; 0,01; 0,03]</span>↓<br>Producto punto + softmax<br>↓<br>Distribución de probabilidades</div>
        <div class="distribucion"><span>el</span><span>25 %</span><span>profesor</span><span>5 %</span><strong class="acento">explica</strong><strong class="acento">10 %</strong><span>la</span><span>35 %</span><span>clase</span><span>25 %</span></div>
        <p class="nota">Cinco palabras; probabilidades ilustrativas que suman 100 %. Objetivo observado: “explica”.</p>
      </div>
      <span class="flecha-paso">→</span>
      <div class="paso">
        <h3>Paso 5 · Usar el error para ajustar</h3>
        <p class="texto">Calculamos pequeños cambios en los números para <strong class="acento">reducir el error</strong> de la predicción.</p>
        <div class="operacion">Valores actuales<br>+ pequeños ajustes<br>↓<br>Nuevos valores</div>
        <p class="texto">Se ajustan el vector de entrada y los pesos de salida del modelo.</p>
        <p class="nota">El gradiente indica cómo cambiar los pesos; la tasa de aprendizaje controla cuánto cambia cada valor.</p>
      </div>
    </div>
    <div class="repeticion"><strong>↶ Repetir los pasos 4 y 5</strong><p>el → profesor &nbsp; · &nbsp; profesor → el &nbsp; · &nbsp; profesor → explica &nbsp; · &nbsp; explica → profesor &nbsp; · &nbsp; …<br>Recorremos muchos pares del corpus; cada aparición aporta otro ajuste.</p></div>
    <p class="resultado">Los números dejan de ser aleatorios: <strong class="acento">se convierten en vectores aprendidos a partir de los contextos</strong>.</p>
  </div>
  <p class="fuente">Mikolov et al. (2013), arXiv:1301.3781 y 1310.4546. Números ilustrativos; la probabilidad no se deriva de la matriz mostrada.</p>
</section>
`);
