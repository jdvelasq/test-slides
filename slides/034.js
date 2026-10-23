diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s034">
  <style>
    .s034 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      align-items: center;
      justify-content: center;
      flex: 1;
    }
    .s034 .formula {
      font-size: 64px;
      font-weight: 700;
      text-align: center;
      line-height: 1.2;
      color: var(--texto);
    }
    .s034 .formula .acento {
      color: var(--acento);
    }
    .s034 .ciclo {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      margin-top: 16px;
    }
    .s034 .ciclo svg {
      width: 220px;
      height: 220px;
    }
    .s034 .ciclo .etapa {
      font-size: 22px;
      color: var(--texto-suave);
      text-align: center;
      line-height: 1.3;
    }
    .s034 .ciclo .etapa strong {
      display: block;
      font-size: 26px;
      color: var(--texto);
      margin-bottom: 4px;
    }
    .s034 .rejilla.c3 {
      width: 100%;
      max-width: 1400px;
    }
    .s034 .caja {
      padding: 24px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.35;
      font-size: 28px;
    }
    .s034 .caja strong {
      display: block;
      font-size: 30px;
      margin-bottom: 8px;
      color: var(--acento);
    }
  </style>
  <h2>2024 · Herramienta, conector, agente: qué es cada cosa</h2>
  <div class="evidencia">
    <div class="formula">
      <span class="acento">agente</span> = modelo + herramientas + ciclo + un objetivo
    </div>
    <div class="ciclo">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <circle cx="100" cy="100" r="80" fill="none" stroke="var(--linea)" stroke-width="2" />
        <path d="M100 20 A80 80 0 0 1 180 100" fill="none" stroke="var(--acento)" stroke-width="4" stroke-linecap="round" />
        <path d="M180 100 A80 80 0 0 1 100 180" fill="none" stroke="var(--acento)" stroke-width="4" stroke-linecap="round" />
        <path d="M100 180 A80 80 0 0 1 20 100" fill="none" stroke="var(--acento)" stroke-width="4" stroke-linecap="round" />
        <path d="M20 100 A80 80 0 0 1 100 20" fill="none" stroke="var(--acento)" stroke-width="4" stroke-linecap="round" />
        <text x="100" y="18" text-anchor="middle" font-size="14" fill="var(--texto-suave)">decidir</text>
        <text x="186" y="104" text-anchor="start" font-size="14" fill="var(--texto-suave)">usar</text>
        <text x="100" y="196" text-anchor="middle" font-size="14" fill="var(--texto-suave)">observar</text>
        <text x="14" y="104" text-anchor="end" font-size="14" fill="var(--texto-suave)">repetir</text>
      </svg>
      <div class="etapa">
        <strong>Ciclo</strong>
        decidir · usar herramienta · observar · repetir
      </div>
    </div>
    <div class="rejilla c3">
      <div class="caja">
        <strong>Herramienta</strong>
        Una acción concreta que el modelo puede ejecutar (buscar en la web, leer un archivo, crear un evento).
      </div>
      <div class="caja">
        <strong>Conector (MCP)</strong>
        La forma estándar de darle al modelo las herramientas de un servicio.
      </div>
      <div class="caja">
        <strong>Agente</strong>
        El modelo trabajando en ciclo. Decide qué herramienta usar, mira el resultado, decide el siguiente paso y sigue hasta cumplir el objetivo.
      </div>
    </div>
  </div>
</section>
`);
