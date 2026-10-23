diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s031">
  <style>
    .s031 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
    }
    .s031 .visual {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 100%;
    }
    .s031 .camino {
      display: flex;
      align-items: center;
      gap: 24px;
      font-size: var(--t-rotulo);
      line-height: 1.3;
    }
    .s031 .camino .etapa {
      padding: 12px 20px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      min-width: 180px;
      text-align: center;
    }
    .s031 .camino .etapa.acento {
      border-color: var(--acento);
      background: var(--acento-suave);
      color: var(--acento);
      font-weight: 600;
    }
    .s031 .camino .bucle {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border: 2px dashed var(--acento);
      border-radius: var(--radio-grande);
      background: var(--acento-suave);
      color: var(--acento);
      font-weight: 600;
      min-width: 220px;
      text-align: center;
    }
    .s031 .camino .bucle .flecha-bucle {
      font-size: 32px;
      line-height: 1;
    }
    .s031 .camino .flecha {
      font-size: 40px;
      color: var(--texto-suave);
    }
    .s031 .camino .etiqueta {
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      margin-top: 6px;
    }
    .s031 .listas {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      width: 100%;
    }
    .s031 .lista {
      padding-top: 20px;
      border-top: var(--borde);
    }
    .s031 .lista h3 {
      margin: 0 0 16px 0;
      font-size: var(--t-rotulo);
      font-weight: 700;
      color: var(--acento);
    }
    .s031 .lista ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: var(--t-pequeno);
      line-height: 1.35;
      color: var(--texto);
    }
    .s031 .lista ul li::before {
      content: "•";
      color: var(--acento);
      margin-right: 10px;
      font-weight: 700;
    }
    .s031 .cajas {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      width: 100%;
    }
    .s031 .caja {
      padding: 24px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.35;
      font-size: var(--t-pequeno);
    }
    .s031 .caja strong {
      display: block;
      margin-bottom: 8px;
      font-size: var(--t-rotulo);
      color: var(--acento);
    }
  </style>
  <h2>2024 · o1: modelos de razonamiento</h2>
  <div class="evidencia">
    <div class="visual">
      <div class="camino">
        <div class="etapa">Pregunta</div>
        <div class="flecha">→</div>
        <div class="etapa">Respuesta</div>
        <div class="etiqueta">respuesta rápida</div>
      </div>
      <div class="camino">
        <div class="etapa">Pregunta</div>
        <div class="flecha">→</div>
        <div class="bucle">
          <div class="flecha-bucle">↺</div>
          <div>Pensar</div>
        </div>
        <div class="flecha">→</div>
        <div class="etapa acento">Respuesta</div>
        <div class="etiqueta">razonamiento</div>
      </div>
    </div>
    <div class="listas">
      <div class="lista">
        <h3>Úsalo para</h3>
        <ul>
          <li>Problemas de varios pasos</li>
          <li>Análisis</li>
          <li>Planificación</li>
          <li>Revisión de un documento largo</li>
        </ul>
      </div>
      <div class="lista">
        <h3>No hace falta para</h3>
        <ul>
          <li>Preguntas simples</li>
          <li>Reescribir</li>
          <li>Traducir</li>
        </ul>
      </div>
    </div>
    <div class="cajas">
      <div class="caja">
        <strong>12 de septiembre de 2024</strong>
        OpenAI lanza o1, el primer modelo presentado explícitamente como "de razonamiento". Luego llegan los de Google, Anthropic y DeepSeek.
      </div>
      <div class="caja">
        <strong>Antes de responder</strong>
        El modelo dedica tiempo a "pensar": planea, prueba caminos y revisa su propio trabajo.
      </div>
      <div class="caja">
        <strong>En las aplicaciones</strong>
        Aparece como "pensar", "razonamiento extendido" o un selector de esfuerzo.
      </div>
      <div class="caja">
        <strong>Cuándo no activarlo</strong>
        Preguntas simples, reescribir o traducir. Ahí solo tarda más y consume más.
      </div>
    </div>
  </div>
</section>
`);
