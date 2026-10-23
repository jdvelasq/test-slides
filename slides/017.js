diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s017">
  <style>
    .s017 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
      height: 100%;
      justify-content: center;
    }
    .s017 .formula {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      font-size: 48px;
      font-weight: 700;
      color: var(--texto);
    }
    .s017 .pieza {
      padding: 20px 32px;
      border: 2px solid var(--acento);
      border-radius: var(--radio);
      background: var(--acento-suave);
      color: var(--acento);
      text-align: center;
      min-width: 180px;
    }
    .s017 .pieza.resultado {
      background: var(--acento);
      color: #fff;
      border-color: var(--acento);
    }
    .s017 .linea-conexion {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 24px;
      font-size: 32px;
      color: var(--texto-suave);
      margin-top: 16px;
    }
    .s017 .linea-conexion .etiqueta {
      padding: 8px 20px;
      border: 1px solid var(--linea);
      border-radius: 999px;
      background: var(--gris-suave);
    }
    .s017 .linea-conexion .etiqueta.acento {
      border-color: var(--acento);
      color: var(--acento);
      font-weight: 600;
    }
    .s017 .rejilla.c2 {
      gap: 32px;
    }
    .s017 .caja {
      padding: 24px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.35;
    }
    .s017 .caja strong {
      display: block;
      font-size: 28px;
      margin-bottom: 8px;
      color: var(--texto);
    }
    .s017 .caja p {
      margin: 0;
      font-size: 24px;
      color: var(--texto-suave);
      line-height: 1.4;
    }
  </style>
  <h2>2023 · Plugins y GPTs: el chat con extensiones</h2>
  <div class="evidencia">
    <div class="formula">
      <div class="pieza">Instrucciones</div>
      <div class="pieza">Conocimiento</div>
      <div class="pieza">Herramientas</div>
      <div class="flecha">=</div>
      <div class="pieza resultado">Asistente</div>
    </div>
    <div class="linea-conexion">
      <div class="etiqueta">Plugin (2023)</div>
      <div class="flecha">→</div>
      <div class="etiqueta acento">Conector (2024 en adelante)</div>
    </div>
    <div class="rejilla c2">
      <div class="caja">
        <strong>Marzo 2023</strong>
        <p>Plugins de ChatGPT: el chat se conecta con servicios externos sin reentrenar el modelo.</p>
      </div>
      <div class="caja">
        <strong>Noviembre 2023</strong>
        <p>GPTs personalizados: cualquier persona arma un asistente sin programar.</p>
      </div>
      <div class="caja">
        <strong>Fórmula de un GPT</strong>
        <p>Instrucciones + conocimiento + herramientas = asistente reutilizable.</p>
      </div>
      <div class="caja">
        <strong>Antecedente directo</strong>
        <p>Es el origen de los proyectos, las skills y los conectores de hoy.</p>
      </div>
    </div>
  </div>
</section>
`);
