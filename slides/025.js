diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s025">
  <style>
    .s025 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s025 .rejilla {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      align-content: start;
    }
    .s025 .caja {
      padding: 24px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.35;
      font-size: var(--t-rotulo);
    }
    .s025 .caja strong {
      display: block;
      font-size: var(--t-texto);
      margin-bottom: 10px;
      color: var(--acento);
    }
    .s025 .visual {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
    .s025 .comparacion {
      display: flex;
      align-items: flex-end;
      gap: 48px;
      height: 420px;
    }
    .s025 .columna-doc {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
    .s025 .columna-doc .etiqueta {
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      text-align: center;
    }
    .s025 .columna-doc .etiqueta b {
      display: block;
      font-size: var(--t-rotulo);
      color: var(--texto);
    }
    .s025 .doc-pequeno {
      width: 120px;
      height: 160px;
      border: var(--borde);
      border-radius: 8px;
      background: var(--gris-suave);
      position: relative;
    }
    .s025 .doc-pequeno::after {
      content: "";
      position: absolute;
      top: 20px;
      left: 16px;
      right: 16px;
      height: 8px;
      background: var(--linea);
      box-shadow: 0 20px 0 var(--linea), 0 40px 0 var(--linea), 0 60px 0 var(--linea);
    }
    .s025 .doc-grande {
      width: 200px;
      height: 380px;
      border: 2px solid var(--acento);
      border-radius: 8px;
      background: var(--acento-suave, color-mix(in srgb, var(--acento) 12%, var(--fondo)));
      position: relative;
      overflow: hidden;
    }
    .s025 .doc-grande::after {
      content: "";
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      height: 8px;
      background: var(--acento);
      opacity: 0.3;
      box-shadow: 0 24px 0 var(--acento), 0 48px 0 var(--acento), 0 72px 0 var(--acento),
        0 96px 0 var(--acento), 0 120px 0 var(--acento), 0 144px 0 var(--acento),
        0 168px 0 var(--acento), 0 192px 0 var(--acento), 0 216px 0 var(--acento),
        0 240px 0 var(--acento), 0 264px 0 var(--acento), 0 288px 0 var(--acento),
        0 312px 0 var(--acento), 0 336px 0 var(--acento);
    }
    .s025 .contador {
      font-family: var(--fuente-mono);
      font-size: var(--t-texto);
      color: var(--acento);
      font-weight: 700;
      text-align: center;
    }
    .s025 .contador span {
      display: block;
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      font-weight: 400;
    }
  </style>
  <h2>2024 · Gemini 1.5: la ventana de contexto de un millón de tokens</h2>
  <div class="evidencia">
    <div class="rejilla">
      <div class="caja">
        <strong>Febrero 2024</strong>
        Gemini 1.5 de Google llega a 1 millón de tokens de contexto, y más tarde a 2 millones en lista de espera.
      </div>
      <div class="caja">
        <strong>¿Qué es la ventana?</strong>
        Todo lo que el modelo tiene "a la vista" en una conversación: tus mensajes, los archivos que subiste y sus propias respuestas.
      </div>
      <div class="caja">
        <strong>¿Para qué sirve?</strong>
        Con ventanas grandes se puede subir un libro, un informe extenso o horas de transcripción, y preguntar sobre todo eso a la vez.
      </div>
      <div class="caja">
        <strong>Limitación</strong>
        Más contexto significa más lentitud y más consumo, y el modelo puede pasar por alto detalles en medio de mucho texto.
      </div>
    </div>
    <div class="visual">
      <div class="comparacion">
        <div class="columna-doc">
          <div class="doc-pequeno"></div>
          <div class="etiqueta"><b>2022</b>unas páginas</div>
        </div>
        <div class="columna-doc">
          <div class="doc-grande"></div>
          <div class="etiqueta"><b>2024</b>un libro entero</div>
        </div>
      </div>
      <div class="contador">
        1 000 000 tokens
        <span>ventana de contexto</span>
      </div>
    </div>
  </div>
</section>
`);
