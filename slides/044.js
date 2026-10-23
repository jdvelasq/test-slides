diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s044">
  <style>
    .s044 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s044 .rejilla.c2 {
      flex: 1;
    }
    .s044 .caja {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .s044 .caja .rotulo {
      font-weight: 700;
      font-size: 28px;
      color: var(--acento);
    }
    .s044 .caja p {
      margin: 0;
      font-size: 24px;
      line-height: 1.35;
      color: var(--texto);
    }
    .s044 .visual {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: center;
    }
    .s044 .tarjeta-comparativa {
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 24px 28px;
      border-radius: var(--radio);
      background: var(--gris-suave);
      border: 1px solid var(--linea);
    }
    .s044 .tarjeta-comparativa.acento {
      background: var(--acento-suave);
      border-color: var(--acento);
      box-shadow: 0 0 0 2px var(--acento);
    }
    .s044 .tarjeta-comparativa .icono {
      flex-shrink: 0;
    }
    .s044 .tarjeta-comparativa .texto {
      font-size: 24px;
      line-height: 1.3;
      color: var(--texto);
    }
    .s044 .tarjeta-comparativa .texto strong {
      display: block;
      font-size: 28px;
      margin-bottom: 4px;
    }
  </style>
  <h2>2025 · Agent Skills: recetas que el agente reutiliza</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <span class="rotulo">16 de octubre de 2025</span>
        <p>Anthropic presenta las Agent Skills. En diciembre de 2025 el formato se publica como estándar abierto y lo adoptan otras herramientas.</p>
      </div>
      <div class="caja">
        <span class="rotulo">¿Qué es una skill?</span>
        <p>Un paquete de instrucciones (y, si hace falta, plantillas o ejemplos) que explica cómo hacer bien un tipo de tarea: "cómo preparo un informe con el formato de mi universidad" o "cómo reviso un análisis de datos".</p>
      </div>
      <div class="caja">
        <span class="rotulo">Carga bajo demanda</span>
        <p>El agente la carga solo cuando la tarea lo requiere.</p>
      </div>
      <div class="caja">
        <span class="rotulo">Diferencias</span>
        <p>Prompt: lo escribes tú cada vez. Skill: el procedimiento queda guardado y se reutiliza. Conector: da acceso a un servicio. Cuando ves "instala esta skill en Claude", es esto.</p>
      </div>
    </div>
    <div class="visual">
      <div class="tarjeta-comparativa">
        <svg class="icono" viewBox="0 0 24 24"><path d="M15.5 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.5L15.5 3z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>
        <div class="texto">
          <strong>Prompt</strong>
          Lo escribes tú cada vez.
        </div>
      </div>
      <div class="tarjeta-comparativa acento">
        <svg class="icono" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 7h6"/><path d="M9 11h4"/></svg>
        <div class="texto">
          <strong>Skill</strong>
          El procedimiento queda guardado y se reutiliza.
        </div>
      </div>
      <div class="tarjeta-comparativa">
        <svg class="icono" viewBox="0 0 24 24"><path d="M9 2v6"/><path d="M15 2v6"/><path d="M6 8h12v4a6 6 0 0 1-12 0V8z"/><path d="M12 18v4"/></svg>
        <div class="texto">
          <strong>Conector</strong>
          Da acceso a un servicio.
        </div>
      </div>
    </div>
  </div>
</section>
`);
