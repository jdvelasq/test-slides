diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s112">
  <style>
    .s112 .siguiente-frase { font-size: var(--t-subtitulo); font-weight: 600; }
    .s112 .siguiente-frase span { color: var(--acento); }
    .s112 .generacion { display: grid; grid-template-columns: 1.1fr 1fr; gap: var(--hueco); width: 100%; align-items: center; }
    .s112 .probabilidades { display: flex; flex-direction: column; gap: 20px; }
    .s112 .probabilidades > div { display: grid; grid-template-columns: 140px 1fr 70px; gap: 18px; align-items: center; font-size: var(--t-pequeno); }
    .s112 .probabilidades i { height: 28px; width: var(--probabilidad); background: var(--linea); border-radius: 4px; }
    .s112 .probabilidades > div:first-child i { background: var(--acento); }
    .s112 .columna { font-size: var(--t-rotulo); line-height: 1.45; }
  </style>
  <h2>Un modelo de lenguaje genera la respuesta un token a la vez.</h2>
  <div class="evidencia vertical">
    <p class="siguiente-frase">“Nos vemos mañana en la <span>___</span>”</p>
    <div class="generacion">
      <div class="probabilidades">
        <div><strong>clase</strong><i style="--probabilidad: 62%"></i><span>0,62</span></div>
        <div><strong>reunión</strong><i style="--probabilidad: 21%"></i><span>0,21</span></div>
        <div><strong>oficina</strong><i style="--probabilidad: 9%"></i><span>0,09</span></div>
        <div><strong>otros</strong><i style="--probabilidad: 8%"></i><span>0,08</span></div>
        <p class="criterio-aceptacion">Tokens y probabilidades simplificados e ilustrativos; no son una medición del modelo.</p>
      </div>
      <div class="columna"><div class="panel-titulo acento">El ciclo de generación</div><p>Lee el contexto → calcula probabilidades → selecciona un token → lo agrega al texto → repite.</p><p class="suave">El token elegido no tiene que ser siempre el más probable: depende del método de selección.</p></div>
    </div>
  </div>
  <div class="pie"><dl class="terminos"><div><dt>Token</dt> <dd>fragmento de texto que el modelo procesa o genera.</dd></div><div class="idea-clave"><dt>Idea clave</dt> <dd>generar texto plausible no equivale a comprobar que sea verdadero.</dd></div></dl><div class="pruebelo">Complete una frase en dos contextos distintos: “Nos vemos mañana en la…” después de hablar de un curso y después de hablar de una reunión. Observe cómo cambia la continuación.</div></div>
  <p class="fuente">Adaptación de docs.pptx, diapositiva 63 · Hugging Face, documentación de generación de texto.</p>
</section>
`);
