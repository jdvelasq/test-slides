diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s062">
  <style>
    .s062 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s062 .rejilla {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      align-content: start;
    }
    .s062 .caja {
      padding: 20px 24px;
      border: 1px solid var(--linea);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
    }
    .s062 .caja strong {
      display: block;
      font-size: var(--t-rotulo);
      color: var(--acento);
      margin-bottom: 6px;
    }
    .s062 .caja p {
      margin: 0;
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      line-height: 1.35;
    }
    .s062 .ficha {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 32px;
      border: 1px solid var(--linea);
      border-radius: var(--radio-grande);
      background: var(--gris-suave);
    }
    .s062 .ficha-titulo {
      font-size: var(--t-rotulo);
      font-weight: 700;
      color: var(--texto);
      margin-bottom: 8px;
    }
    .s062 .campo {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .s062 .campo label {
      font-size: var(--t-pequeno);
      font-weight: 600;
      color: var(--texto);
    }
    .s062 .campo .ejemplo {
      font-size: var(--t-fuente);
      color: var(--texto-suave);
      font-style: italic;
      padding: 8px 12px;
      background: var(--fondo);
      border-radius: 6px;
      border: 1px solid var(--linea);
    }
  </style>
  <h2>2026 · Las seis partes de un buen encargo</h2>
  <div class="evidencia">
    <div class="rejilla">
      <div class="caja">
        <strong>Objetivo</strong>
        <p>Qué quieres lograr y para qué se usará.</p>
      </div>
      <div class="caja">
        <strong>Contexto y fuentes</strong>
        <p>Qué archivos, carpetas, enlaces o datos debe usar.</p>
      </div>
      <div class="caja">
        <strong>Entregable</strong>
        <p>Formato, extensión y estructura (informe de dos páginas, presentación de diez diapositivas, tabla en Excel).</p>
      </div>
      <div class="caja">
        <strong>Criterio de éxito</strong>
        <p>Cómo sabrás que quedó bien.</p>
      </div>
      <div class="caja">
        <strong>Restricciones</strong>
        <p>Qué no debe hacer (no enviar correos, no modificar los originales, no usar fuentes no académicas).</p>
      </div>
      <div class="caja">
        <strong>Ejemplo</strong>
        <p>Un modelo del resultado esperado, si lo tienes.</p>
      </div>
    </div>
    <div class="ficha">
      <div class="ficha-titulo">Orden de trabajo</div>
      <div class="campo">
        <label>Objetivo</label>
        <div class="ejemplo">Resumir el informe anual para la junta directiva.</div>
      </div>
      <div class="campo">
        <label>Contexto y fuentes</label>
        <div class="ejemplo">Informe_2025.pdf, datos de ventas.xlsx, notas de reuniones.</div>
      </div>
      <div class="campo">
        <label>Entregable</label>
        <div class="ejemplo">Presentación de 10 diapositivas en PowerPoint.</div>
      </div>
      <div class="campo">
        <label>Criterio de éxito</label>
        <div class="ejemplo">Cada diapositiva con un dato clave y una recomendación.</div>
      </div>
      <div class="campo">
        <label>Restricciones</label>
        <div class="ejemplo">No usar datos no verificados, no exceder 10 diapositivas.</div>
      </div>
      <div class="campo">
        <label>Ejemplo</label>
        <div class="ejemplo">Ver modelo en carpeta compartida / ejemplo_v1.pptx.</div>
      </div>
    </div>
  </div>
</section>
`);
