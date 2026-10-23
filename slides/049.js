diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s049">
  <style>
    .s049 .escalones {
      display: flex;
      align-items: flex-end;
      gap: 48px;
      width: 100%;
      height: 100%;
      padding-bottom: 20px;
    }
    .s049 .escalon {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;
      padding: 32px 24px;
      border-radius: var(--radio-grande);
      background: var(--gris-suave);
      border: var(--borde);
    }
    .s049 .escalon-1 { height: 55%; }
    .s049 .escalon-2 { height: 72%; }
    .s049 .escalon-3 { height: 90%; border-color: var(--acento); background: var(--acento-suave); }
    .s049 .figura {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
    }
    .s049 .figura svg {
      width: 100%;
      height: 100%;
      fill: none;
      stroke: var(--acento);
      stroke-width: 1.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .s049 .escalon-1 .figura svg,
    .s049 .escalon-2 .figura svg {
      stroke: var(--texto-suave);
    }
    .s049 .anio {
      font-size: var(--t-pequeno);
      font-weight: 700;
      color: var(--acento);
      letter-spacing: 0.04em;
    }
    .s049 .escalon-1 .anio,
    .s049 .escalon-2 .anio {
      color: var(--texto-suave);
    }
    .s049 .escalon h3 {
      font-size: var(--t-rotulo);
      font-weight: 700;
      margin: 0;
      line-height: 1.2;
    }
    .s049 .escalon p {
      font-size: var(--t-pequeno);
      line-height: 1.4;
      color: var(--texto-suave);
      margin: 0;
    }
    .s049 .escalon-3 p {
      color: var(--texto);
    }
    .s049 .destacado {
      margin-top: 32px;
      font-size: var(--t-rotulo);
    }
  </style>
  <h2>2026 · De conversar a encargar: el cambio de rol</h2>
  <div class="evidencia">
    <div class="escalones">
      <div class="escalon escalon-1">
        <div class="figura">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="12" r="7"/>
            <path d="M14 44c0-6 4-10 10-10s10 4 10 10"/>
            <path d="M30 28l8 4"/>
            <path d="M36 30l3 6"/>
          </svg>
        </div>
        <b class="anio">2022</b>
        <h3>Chat</h3>
        <p>Tú preguntas, la IA responde y tú haces el trabajo.</p>
      </div>
      <div class="escalon escalon-2">
        <div class="figura">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="12" r="7"/>
            <path d="M14 44c0-6 4-10 10-10s10 4 10 10"/>
            <path d="M32 18h10a3 3 0 013 3v6a3 3 0 01-3 3h-4l-4 4v-4h-2a3 3 0 01-3-3v-6a3 3 0 013-3z"/>
            <text x="37" y="28" font-size="10" fill="currentColor" stroke="none" text-anchor="middle" font-weight="700">?</text>
          </svg>
        </div>
        <b class="anio">2024</b>
        <h3>Asistente con herramientas</h3>
        <p>La IA busca y lee por ti, pero cada paso pasa por la conversación.</p>
      </div>
      <div class="escalon escalon-3">
        <div class="figura">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="12" r="7"/>
            <path d="M14 44c0-6 4-10 10-10s10 4 10 10"/>
            <path d="M30 26l4 4 8-8"/>
          </svg>
        </div>
        <b class="anio">2026</b>
        <h3>Agente de trabajo</h3>
        <p>Le das un objetivo y acceso a tus archivos y aplicaciones; trabaja durante minutos u horas y te entrega un resultado para revisar.</p>
      </div>
    </div>
  </div>
  <p class="destacado">Tu rol pasa de redactar a definir bien el encargo y revisar lo entregado, como quien coordina a un asistente.</p>
</section>
`);
