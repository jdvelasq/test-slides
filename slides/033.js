diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s033">
  <style>
    .s033 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 100%;
    }
    .s033 .visual-mcp {
      display: flex;
      flex-direction: column;
      gap: 24px;
      width: 100%;
    }
    .s033 .antes-maraña {
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      text-align: center;
      padding: 12px 0;
      border-bottom: var(--borde);
    }
    .s033 .antes-maraña svg {
      width: 100%;
      height: 80px;
      margin-top: 8px;
    }
    .s033 .antes-maraña svg path {
      stroke: var(--texto-suave);
      stroke-width: 1.5;
      fill: none;
      opacity: 0.5;
    }
    .s033 .conector-mcp {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
      width: 100%;
    }
    .s033 .columna-servicios,
    .s033 .columna-aplicaciones {
      display: flex;
      flex-direction: column;
      gap: 16px;
      flex: 1;
    }
    .s033 .columna-aplicaciones {
      align-items: flex-end;
    }
    .s033 .columna-servicios {
      align-items: flex-start;
    }
    .s033 .chip-servicio,
    .s033 .chip-aplicacion {
      display: inline-block;
      padding: 10px 20px;
      border-radius: 999px;
      background: var(--gris-suave);
      font-size: var(--t-rotulo);
      line-height: 1.3;
    }
    .s033 .conector-central {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }
    .s033 .conector-central .caja {
      padding: 20px 32px;
      border: 2px solid var(--acento);
      border-radius: var(--radio);
      background: var(--acento-suave);
      font-size: var(--t-texto);
      font-weight: 700;
      color: var(--acento);
      text-align: center;
    }
    .s033 .conector-central .flecha {
      font-size: 48px;
      color: var(--acento);
      line-height: 1;
    }
    .s033 .rejilla-cuadros {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      width: 100%;
    }
    .s033 .caja {
      padding: 20px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
    }
    .s033 .caja strong {
      display: block;
      font-size: var(--t-rotulo);
      margin-bottom: 8px;
      color: var(--texto);
    }
    .s033 .caja p {
      margin: 0;
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      line-height: 1.4;
    }
  </style>
  <h2>2024 · MCP: el "USB-C" de la IA</h2>
  <div class="evidencia">
    <div class="visual-mcp">
      <div class="antes-maraña">
        Antes: cada aplicación con cada servicio
        <svg viewBox="0 0 800 80" preserveAspectRatio="none">
          <path d="M 50 20 Q 200 60 400 20 T 750 20" />
          <path d="M 50 40 Q 250 10 450 50 T 750 40" />
          <path d="M 50 60 Q 150 30 350 60 T 750 60" />
          <path d="M 100 30 Q 300 70 500 30 T 700 30" />
          <path d="M 150 50 Q 350 20 550 50 T 650 50" />
        </svg>
      </div>
      <div class="conector-mcp">
        <div class="columna-aplicaciones">
          <span class="chip-aplicacion">Claude</span>
          <span class="chip-aplicacion">ChatGPT</span>
          <span class="chip-aplicacion">Gemini</span>
          <span class="chip-aplicacion">Cursor</span>
        </div>
        <div class="conector-central">
          <span class="flecha">→</span>
          <div class="caja">MCP</div>
          <span class="flecha">→</span>
        </div>
        <div class="columna-servicios">
          <span class="chip-servicio">Drive</span>
          <span class="chip-servicio">Gmail</span>
          <span class="chip-servicio">Notion</span>
          <span class="chip-servicio">Base de datos</span>
        </div>
      </div>
    </div>
    <div class="rejilla-cuadros">
      <div class="caja">
        <strong>25 de noviembre de 2024</strong>
        <p>Anthropic publica el Model Context Protocol (MCP) como estándar abierto.</p>
      </div>
      <div class="caja">
        <strong>El problema</strong>
        <p>Cada aplicación de IA necesitaba una integración distinta con cada servicio (Drive, Gmail, Notion, una base de datos...).</p>
      </div>
      <div class="caja">
        <strong>La solución</strong>
        <p>Un enlace común. Un servicio se conecta una vez por MCP y funciona con cualquier aplicación compatible: Claude, ChatGPT, Gemini, Cursor y otras.</p>
      </div>
      <div class="caja">
        <strong>Lo que tú ves</strong>
        <p>No dice "MCP": en las aplicaciones aparece como "conectores" o "integraciones". Cuando en redes dicen "conecté Claude a mi Notion" o "MCP para Excel", hablan de esto.</p>
      </div>
    </div>
  </div>
</section>
`);
