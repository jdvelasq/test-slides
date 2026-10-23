diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s047">
  <style>
    .s047 .evidencia {
      display: flex;
      gap: 64px;
      align-items: flex-start;
    }
    .s047 .columna-cajas {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .s047 .columna-cajas .caja {
      padding: 18px 24px;
      font-size: 26px;
      line-height: 1.35;
    }
    .s047 .columna-cajas .caja strong {
      display: block;
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: var(--acento);
      margin-bottom: 6px;
    }
    .s047 .columna-visual {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }
    .s047 .tira-pasos {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: nowrap;
    }
    .s047 .tira-pasos .paso {
      flex: 1;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      padding: 14px 8px;
      border: 1px solid var(--linea);
      border-radius: 12px;
      background: var(--gris-suave);
      line-height: 1.2;
    }
    .s047 .tira-pasos .paso.final {
      background: var(--acento-suave);
      border-color: var(--acento);
      color: var(--acento);
    }
    .s047 .tira-pasos .flecha {
      font-size: 28px;
      color: var(--texto-suave);
      flex-shrink: 0;
    }
    .s047 .miniatura {
      width: 100%;
      max-width: 480px;
      aspect-ratio: 16 / 9;
      border: 1px solid var(--linea);
      border-radius: 12px;
      background: var(--fondo);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .s047 .miniatura .barra {
      height: 28px;
      background: var(--gris-suave);
      border-bottom: 1px solid var(--linea);
      display: flex;
      align-items: center;
      padding: 0 12px;
      gap: 6px;
    }
    .s047 .miniatura .barra span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #c7c7cc;
    }
    .s047 .miniatura .cuerpo {
      flex: 1;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .s047 .miniatura .cuerpo .linea {
      height: 10px;
      border-radius: 5px;
      background: var(--linea);
    }
    .s047 .miniatura .cuerpo .linea.corta { width: 60%; }
    .s047 .miniatura .cuerpo .linea.media { width: 80%; }
    .s047 .que-revisar {
      list-style: none;
      margin: 0;
      padding: 0;
      font-size: 22px;
      line-height: 1.4;
      color: var(--texto-suave);
    }
    .s047 .que-revisar li {
      padding-left: 20px;
      position: relative;
    }
    .s047 .que-revisar li::before {
      content: "•";
      position: absolute;
      left: 0;
      color: var(--acento);
      font-weight: 700;
    }
    .s047 .que-revisar li + li {
      margin-top: 6px;
    }
  </style>
  <h2>2025 · Kimi Agentic Slides: del tema a la presentación completa</h2>
  <div class="evidencia">
    <div class="columna-cajas">
      <div class="caja">
        <strong>Nov 2025</strong>
        Kimi (Moonshot AI) lanza Agentic Slides, que delega todo el flujo de una presentación.
      </div>
      <div class="caja">
        <strong>El flujo</strong>
        Tema o fuentes, investigación, síntesis, estructura narrativa, diseño visual y presentación editable.
      </div>
      <div class="caja">
        <strong>Hoy también</strong>
        Claude (Cowork y PowerPoint), ChatGPT Work y Gemini.
      </div>
      <div class="caja">
        <strong>Problemas típicos</strong>
        Síntesis superficial, afirmaciones sin fuente, demasiado texto por diapositiva y un estilo que no es el tuyo.
      </div>
      <div class="caja">
        <strong>Consejo</strong>
        Entregar tus fuentes y una presentación anterior tuya como ejemplo de estilo.
      </div>
    </div>
    <div class="columna-visual">
      <div class="tira-pasos">
        <div class="paso">Tema</div>
        <div class="flecha">→</div>
        <div class="paso">Investigar</div>
        <div class="flecha">→</div>
        <div class="paso">Síntesis</div>
        <div class="flecha">→</div>
        <div class="paso">Estructura</div>
        <div class="flecha">→</div>
        <div class="paso">Diseño</div>
        <div class="flecha">→</div>
        <div class="paso final">Presentación</div>
      </div>
      <div class="miniatura">
        <div class="barra">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="cuerpo">
          <div class="linea media"></div>
          <div class="linea"></div>
          <div class="linea corta"></div>
          <div class="linea media"></div>
          <div class="linea"></div>
        </div>
      </div>
      <ul class="que-revisar">
        <li>Síntesis superficial</li>
        <li>Afirmaciones sin fuente</li>
        <li>Demasiado texto por diapositiva</li>
        <li>Estilo que no es el tuyo</li>
      </ul>
    </div>
  </div>
</section>
`);
