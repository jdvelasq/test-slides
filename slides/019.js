diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s019">
  <style>
    .s019 .contexto {
      font-size: var(--t-rotulo);
      color: var(--texto-suave);
      text-align: center;
      max-width: 1100px;
      margin: 0 auto 40px;
      line-height: 1.4;
    }
    .s019 .columna-modelo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      text-align: center;
      padding: 32px 24px;
    }
    .s019 .columna-modelo h3 {
      font-size: var(--t-subtitulo);
      margin: 0;
    }
    .s019 .columna-modelo .etiqueta {
      font-size: var(--t-rotulo);
      color: var(--texto-suave);
    }
    .s019 .ejemplos {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-top: 8px;
    }
    .s019 .nota {
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      text-align: center;
      margin-top: 32px;
      font-style: italic;
    }
  </style>
  <h2>2023 · LLaMA: modelo abierto y modelo cerrado</h2>
  <div class="evidencia vertical">
    <p class="contexto">24 de febrero de 2023: Meta publica LLaMA para investigación. Días después, los pesos se filtran y la comunidad empieza a ejecutarlo en computadoras comunes.</p>
    <div class="rejilla c2">
      <div class="columna-modelo">
        <svg class="icono" viewBox="0 0 24 24" style="width:96px;height:96px">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a4 4 0 0 0 0-8z"/>
          <rect x="9" y="14" width="6" height="5" rx="1"/>
          <path d="M10 14v-1a2 2 0 0 1 4 0v1"/>
        </svg>
        <h3>Cerrado</h3>
        <p class="etiqueta">usas el servicio</p>
        <div class="ejemplos">
          <span class="chip">GPT</span>
          <span class="chip">Claude</span>
          <span class="chip">Gemini</span>
        </div>
      </div>
      <div class="columna-modelo">
        <svg class="icono" viewBox="0 0 24 24" style="width:96px;height:96px">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="12" x2="12" y2="16"/>
          <polyline points="9 14 12 17 15 14"/>
        </svg>
        <h3>Open-weight</h3>
        <p class="etiqueta">descargas el modelo</p>
        <div class="ejemplos">
          <span class="chip">Llama</span>
          <span class="chip">Mistral</span>
          <span class="chip">Qwen</span>
          <span class="chip">DeepSeek</span>
          <span class="chip">Gemma</span>
          <span class="chip">gpt-oss</span>
        </div>
      </div>
    </div>
    <p class="nota">"Open-weight" no siempre es "open source": la licencia puede tener restricciones de uso.</p>
  </div>
  <p class="destacado">Cuando en redes dicen "un modelo chino gratis que compite con GPT", casi siempre hablan de un modelo open-weight.</p>
  <div class="pie">
    <dl class="terminos">
      <div><dt>Modelo cerrado</dt> <dd>solo se usa a través del servicio del proveedor.</dd></div>
      <div><dt>Modelo open-weight</dt> <dd>el archivo del modelo se descarga y puede correr en tu máquina.</dd></div>
    </dl>
  </div>
</section>
`);
