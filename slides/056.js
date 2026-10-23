diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s056">
  <style>
    .s056 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s056 .visual {
      flex: 0 0 480px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 32px;
    }
    .s056 .nube {
      position: relative;
      width: 360px;
      height: 220px;
      background: var(--acento-suave, #e8f0fe);
      border-radius: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 0 2px var(--acento);
    }
    .s056 .nube::before,
    .s056 .nube::after {
      content: "";
      position: absolute;
      background: var(--acento-suave, #e8f0fe);
      border-radius: 50%;
    }
    .s056 .nube::before {
      width: 140px;
      height: 140px;
      top: -40px;
      left: 40px;
    }
    .s056 .nube::after {
      width: 100px;
      height: 100px;
      top: -20px;
      right: 40px;
    }
    .s056 .agente {
      font-size: 64px;
      z-index: 1;
    }
    .s056 .reloj {
      font-size: 28px;
      font-weight: 600;
      color: var(--acento);
    }
    .s056 .laptop {
      width: 120px;
      height: 80px;
      border: 3px solid var(--texto-suave);
      border-radius: 8px;
      position: relative;
      background: var(--gris-suave);
    }
    .s056 .laptop::after {
      content: "";
      position: absolute;
      bottom: -12px;
      left: -16px;
      right: -16px;
      height: 12px;
      background: var(--texto-suave);
      border-radius: 0 0 8px 8px;
    }
    .s056 .mini-tiempo {
      display: flex;
      gap: 24px;
      margin-top: 16px;
      font-size: 20px;
      color: var(--texto-suave);
    }
    .s056 .mini-tiempo span {
      position: relative;
      padding-top: 12px;
    }
    .s056 .mini-tiempo span::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      width: 10px;
      height: 10px;
      margin-left: -5px;
      border-radius: 50%;
      background: var(--acento);
    }
    .s056 .rejilla {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-content: start;
    }
    .s056 .caja {
      padding: 20px 24px;
      border: 1px solid var(--linea);
      border-radius: 12px;
      background: var(--fondo);
      font-size: 24px;
      line-height: 1.35;
    }
    .s056 .caja strong {
      display: block;
      font-size: 22px;
      color: var(--acento);
      margin-bottom: 8px;
    }
  </style>
  <h2>2026 · Gemini Spark, Autopilot, dots y Muse: agentes personales 24/7</h2>
  <div class="evidencia">
    <div class="visual">
      <div class="nube">
        <span class="agente">🤖</span>
      </div>
      <div class="reloj">24/7</div>
      <div class="laptop"></div>
      <div class="mini-tiempo">
        <span>Spark (may)</span>
        <span>Autopilot (jun)</span>
        <span>dots y Muse (sep)</span>
      </div>
    </div>
    <div class="rejilla">
      <div class="caja">
        <strong>Mayo 2026</strong>
        Google presenta Gemini Spark, un agente personal que corre en la nube de Google y sigue trabajando con la laptop cerrada. Se conecta con Workspace y pide aprobación antes de cada acción.
      </div>
      <div class="caja">
        <strong>Junio 2026</strong>
        Microsoft presenta Autopilot, con Scout como primer agente, siempre activo sobre Teams, Outlook, OneDrive, SharePoint y el calendario.
      </div>
      <div class="caja">
        <strong>Septiembre 2026</strong>
        Siguen el mismo patrón OpenAI (dots) y Meta (Muse).
      </div>
      <div class="caja">
        <strong>Diferencia con Cowork</strong>
        Cowork trabaja en tu computadora; estos agentes viven en la nube del proveedor.
      </div>
      <div class="caja">
        <strong>Preguntas abiertas</strong>
        Costo, privacidad y cuánta autonomía darles.
      </div>
    </div>
  </div>
</section>
`);
