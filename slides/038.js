diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s038">
  <style>
    .s038 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s038 .rejilla {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-content: start;
    }
    .s038 .caja {
      padding: 20px 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
      font-size: var(--t-rotulo);
    }
    .s038 .caja strong {
      display: block;
      font-size: var(--t-pequeno);
      color: var(--acento);
      margin-bottom: 8px;
    }
    .s038 .visual {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
    }
    .s038 .ciclo {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: var(--t-rotulo);
    }
    .s038 .ciclo .nodo {
      padding: 16px 24px;
      border: 2px solid var(--acento);
      border-radius: var(--radio);
      background: var(--acento-suave, color-mix(in srgb, var(--acento) 12%, var(--fondo)));
      font-weight: 600;
      text-align: center;
      min-width: 140px;
    }
    .s038 .ciclo .flecha {
      font-size: 40px;
      color: var(--acento);
    }
    .s038 .reloj {
      font-size: var(--t-texto);
      font-weight: 700;
      color: var(--acento);
      text-align: center;
    }
    .s038 .doc-final {
      width: 100%;
      max-width: 480px;
      padding: 24px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--gris-suave);
      font-size: var(--t-pequeno);
      line-height: 1.4;
    }
    .s038 .doc-final strong {
      display: block;
      margin-bottom: 12px;
      font-size: var(--t-rotulo);
    }
    .s038 .doc-final ul {
      margin: 0;
      padding-left: 20px;
      color: var(--texto-suave);
    }
    .s038 .doc-final li {
      margin-bottom: 6px;
    }
  </style>
  <h2>2025 · Deep Research: un informe con fuentes en minutos</h2>
  <div class="evidencia">
    <div class="rejilla">
      <div class="caja">
        <strong>2 feb 2025</strong>
        OpenAI presenta Deep Research. Google, Anthropic y Perplexity ofrecen modos equivalentes.
      </div>
      <div class="caja">
        <strong>El agente</strong>
        Busca, lee, decide qué buscar después según lo que encontró y escribe un informe con fuentes.
      </div>
      <div class="caja">
        <strong>Antes</strong>
        La persona hacía las búsquedas, abría las páginas y pegaba fragmentos en el chat.
      </div>
      <div class="caja">
        <strong>Tiempo y alcance</strong>
        Tarda varios minutos (5 a 30) y lee decenas de fuentes.
      </div>
      <div class="caja">
        <strong>Limitación</strong>
        Un informe largo puede contener errores de síntesis. Hay que revisar las citas.
      </div>
    </div>
    <div class="visual">
      <div class="ciclo">
        <div class="nodo">Buscar</div>
        <div class="flecha">→</div>
        <div class="nodo">Leer</div>
        <div class="flecha">→</div>
        <div class="nodo">Nueva pista</div>
        <div class="flecha">↺</div>
      </div>
      <div class="reloj">⏱ Minutos</div>
      <div class="doc-final">
        <strong>Informe con fuentes</strong>
        <ul>
          <li>Referencia 1</li>
          <li>Referencia 2</li>
          <li>Referencia 3</li>
        </ul>
      </div>
    </div>
  </div>
</section>
`);
