diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s025">
  <style>
    .s025 .col-gen, .s025 .col-ag { height: 100%; box-sizing: border-box; display: flex; flex-direction: column; gap: 24px; }
    .s025 .col-gen { min-width: 0; }
    .s025 .col-ag { min-width: 0; }
    .s025 .col-gen .fila { flex: 1; justify-content: center; gap: 24px; font-size: 30px; }
    .s025 svg { flex: 1; width: 100%; min-height: 0; }
    .s025 svg text { font-size: 24px; fill: var(--texto); }
  </style>
  <header class="cabecera-concepto">
    <p class="pregunta-guia">¿Qué cambia entre pedir una respuesta y delegar una tarea?</p>
    <h2>La IA puede pasar de redactar un borrador a trabajar para completarlo.</h2>
  </header>
  <div class="evidencia comparacion">
    <div class="tarjeta col-gen">
      <div class="panel-titulo">Generativa</div>
      <div class="fila">
        <div class="caja">Pregunta</div>
        <div class="flecha">→</div>
        <div class="caja">Respuesta</div>
      </div>
    </div>
    <div class="tarjeta acento col-ag">
      <div class="panel-titulo acento">Agéntica</div>
      <svg class="diagrama" viewBox="0 0 960 420" aria-hidden="true">
        <defs><marker id="s025-punta" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="var(--acento)"/></marker></defs>
        <circle cx="480" cy="210" r="160" fill="none" stroke="var(--acento)" stroke-width="4" stroke-dasharray="2 0"/>
        <path d="M 440 55 A 160 160 0 0 1 520 55" fill="none" stroke="var(--acento)" stroke-width="4" marker-end="url(#s025-punta)"/>
        <path d="M 520 365 A 160 160 0 0 1 440 365" fill="none" stroke="var(--acento)" stroke-width="4" marker-end="url(#s025-punta)"/>
        <path d="M 635 170 A 160 160 0 0 1 635 250" fill="none" stroke="var(--acento)" stroke-width="4" marker-end="url(#s025-punta)"/>
        <path d="M 325 250 A 160 160 0 0 1 325 170" fill="none" stroke="var(--acento)" stroke-width="4" marker-end="url(#s025-punta)"/>
        <circle cx="480" cy="210" r="70" fill="var(--acento)"/>
        <text x="480" y="219" text-anchor="middle" style="fill: #fff; font-size: 28px; font-weight: 800">Modelo</text>
        <g fill="#fff" stroke="var(--acento)" stroke-width="3">
          <rect x="500" y="72" width="190" height="52" rx="26"/>
          <rect x="550" y="296" width="250" height="52" rx="26"/>
          <rect x="190" y="296" width="190" height="52" rx="26"/>
          <rect x="250" y="72" width="190" height="52" rx="26"/>
        </g>
        <g text-anchor="middle" style="font-weight: 600">
          <text x="595" y="106">Decidir</text>
          <text x="675" y="330">Usar herramienta</text>
          <text x="285" y="330">Observar</text>
          <text x="345" y="106">Verificar</text>
        </g>
        <g fill="var(--fondo)" stroke="var(--linea)" stroke-width="2"><rect x="0" y="184" width="150" height="52" rx="12"/><rect x="810" y="184" width="150" height="52" rx="12"/></g>
        <g text-anchor="middle" style="font-weight: 700"><text x="75" y="218">Objetivo</text><text x="885" y="218">Resultado</text></g>
        <line x1="152" y1="210" x2="312" y2="210" stroke="var(--texto-suave)" stroke-width="3" marker-end="url(#s025-punta)"/>
        <line x1="648" y1="210" x2="806" y2="210" stroke="var(--texto-suave)" stroke-width="3" marker-end="url(#s025-punta)"/>
      </svg>
    </div>
  </div>
  <div class="pie">
    <dl class="terminos">
      <div class="idea-clave"><dt>Idea clave</dt> <dd>Un agente combina decisiones, herramientas y observaciones; la persona define el objetivo y sus límites.</dd></div>
      <div><dt>Agente</dt> <dd>un modelo que decide, usa herramientas y observa en ciclo hasta cumplir un objetivo.</dd></div>
    </dl>
    <div class="pruebelo"><strong>Compare.</strong> Generativa: “Redacta un resumen a partir de estas notas.” Agéntica: “Revisa los documentos de esta carpeta de práctica, compara sus cifras y guarda un informe con fuentes y pendientes. No cambies los originales.”</div>
  </div>
</section>
`);
