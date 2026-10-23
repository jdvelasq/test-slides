diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s018">
  <style>
    .s018 .fila-dispositivos {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 48px;
      width: 100%;
      padding: 0 40px;
    }
    .s018 .dispositivo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      flex: 1;
      min-width: 0;
    }
    .s018 .silueta {
      position: relative;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .s018 .silueta svg {
      width: 160px;
      height: 160px;
      fill: none;
      stroke: var(--texto-suave);
      stroke-width: 1.4;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .s018 .silueta .panel-asistente {
      position: absolute;
      right: -18px;
      top: 50%;
      transform: translateY(-50%);
      width: 72px;
      height: 100px;
      border-radius: 10px;
      background: var(--acento);
      opacity: 0.15;
      border: 1.5px solid var(--acento);
    }
    .s018 .silueta .panel-asistente::after {
      content: "";
      position: absolute;
      top: 14px;
      left: 10px;
      right: 10px;
      height: 6px;
      border-radius: 3px;
      background: var(--acento);
      box-shadow: 0 18px 0 var(--acento), 0 36px 0 var(--acento), 0 54px 0 var(--acento);
      opacity: 0.5;
    }
    .s018 .fecha {
      font-size: var(--t-pequeno);
      font-weight: 600;
      color: var(--acento);
      text-align: center;
    }
    .s018 .nombre {
      font-size: var(--t-rotulo);
      font-weight: 600;
      color: var(--texto);
      text-align: center;
      line-height: 1.25;
    }
    .s018 .destacado {
      margin-top: 48px;
      text-align: center;
      max-width: 1100px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
  <h2>2023 · Copilot en Windows: la IA entra al sistema operativo</h2>
  <div class="evidencia">
    <div class="fila-dispositivos">
      <div class="dispositivo">
        <div class="silueta">
          <svg viewBox="0 0 120 120">
            <rect x="10" y="10" width="100" height="70" rx="6"/>
            <line x1="40" y1="90" x2="80" y2="90"/>
            <line x1="60" y1="80" x2="60" y2="90"/>
          </svg>
          <div class="panel-asistente"></div>
        </div>
        <div class="nombre">Copilot en Windows 11</div>
        <div class="fecha">21 sep 2023</div>
      </div>
      <div class="dispositivo">
        <div class="silueta">
          <svg viewBox="0 0 120 120">
            <rect x="35" y="8" width="50" height="104" rx="10"/>
            <circle cx="60" cy="100" r="4"/>
          </svg>
          <div class="panel-asistente"></div>
        </div>
        <div class="nombre">Apple Intelligence</div>
        <div class="fecha">jun 2024</div>
      </div>
      <div class="dispositivo">
        <div class="silueta">
          <svg viewBox="0 0 120 120">
            <rect x="15" y="15" width="90" height="60" rx="4"/>
            <path d="M5 85 L115 85 L105 100 L15 100 Z"/>
          </svg>
          <div class="panel-asistente"></div>
        </div>
        <div class="nombre">Gemini en Android</div>
        <div class="fecha">mar 2025</div>
      </div>
      <div class="dispositivo">
        <div class="silueta">
          <svg viewBox="0 0 120 120">
            <rect x="10" y="15" width="100" height="80" rx="8"/>
            <line x1="10" y1="32" x2="110" y2="32"/>
            <circle cx="24" cy="23" r="3"/>
            <circle cx="36" cy="23" r="3"/>
            <circle cx="48" cy="23" r="3"/>
          </svg>
          <div class="panel-asistente"></div>
        </div>
        <div class="nombre">Gemini en Chrome</div>
        <div class="fecha">2026</div>
      </div>
    </div>
  </div>
  <p class="destacado">La pregunta que deja abierta: qué parte corre en tu equipo, qué parte va a la nube y qué permisos le das.</p>
</section>
`);
