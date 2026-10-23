diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s069">
  <style>
    .s069 .rejilla.c2 { gap: 48px; }
    .s069 .caja { padding: 24px 28px; }
    .s069 .caja strong { display: block; font-size: 28px; margin-bottom: 10px; }
    .s069 .caja p { margin: 0; font-size: 24px; line-height: 1.4; color: var(--texto-suave); }
    .s069 .visual { display: flex; flex-direction: column; gap: 32px; }
    .s069 .barras { display: flex; flex-direction: column; gap: 20px; }
    .s069 .barra { display: flex; align-items: center; gap: 16px; }
    .s069 .barra .etiqueta { width: 220px; font-size: 22px; color: var(--texto-suave); text-align: right; }
    .s069 .barra .rastro { height: 32px; border-radius: 6px; background: var(--acento); }
    .s069 .barra.corta .rastro { width: 120px; }
    .s069 .barra.media .rastro { width: 320px; }
    .s069 .barra.larga .rastro { width: 560px; }
    .s069 .consejos { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
    .s069 .consejos li { font-size: 22px; line-height: 1.35; color: var(--texto-suave); padding-left: 20px; position: relative; }
    .s069 .consejos li::before { content: "•"; position: absolute; left: 0; color: var(--acento); font-weight: 700; }
  </style>
  <h2>2026 · Límites de uso: por qué un agente se gasta más rápido</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="columna">
        <div class="caja">
          <strong>Un agente hace muchos pasos</strong>
          <p>Busca, lee, piensa, escribe y revisa. Cada paso consume tokens.</p>
        </div>
        <div class="caja">
          <strong>Una tarea consume más que una pregunta</strong>
          <p>En Cowork o en Work consume el límite del plan mucho más rápido que una pregunta en el chat.</p>
        </div>
        <div class="caja">
          <strong>Deep Research y razonamiento</strong>
          <p>También consumen más.</p>
        </div>
      </div>
      <div class="visual">
        <div class="barras">
          <div class="barra corta">
            <span class="etiqueta">Pregunta en el chat</span>
            <div class="rastro"></div>
          </div>
          <div class="barra media">
            <span class="etiqueta">Deep Research</span>
            <div class="rastro"></div>
          </div>
          <div class="barra larga">
            <span class="etiqueta">Tarea de agente</span>
            <div class="rastro"></div>
          </div>
        </div>
        <ul class="consejos">
          <li>Usa el chat para lo simple</li>
          <li>Reserva el agente para tareas con varios pasos</li>
          <li>Entrega fuentes concretas para que no busque de más</li>
          <li>Define bien el encargo para no tener que repetirlo</li>
        </ul>
      </div>
    </div>
  </div>
</section>
`);
