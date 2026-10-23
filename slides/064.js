diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s064">
  <style>
    .s064 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
    }
    .s064 .rejilla.c2 {
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: stretch;
    }
    .s064 .caja {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 28px 32px;
    }
    .s064 .caja .rotulo {
      font-weight: 700;
      font-size: var(--t-rotulo);
      color: var(--acento);
    }
    .s064 .caja p {
      margin: 0;
      font-size: var(--t-texto);
      line-height: 1.35;
      color: var(--texto);
    }
    .s064 .visual {
      display: flex;
      gap: 48px;
      align-items: stretch;
      width: 100%;
    }
    .s064 .encargo {
      flex: 1;
      padding: 28px 32px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--gris-suave);
      font-size: var(--t-texto);
      line-height: 1.4;
      color: var(--texto);
    }
    .s064 .encargo .rotulo {
      display: block;
      font-weight: 700;
      font-size: var(--t-rotulo);
      color: var(--acento);
      margin-bottom: 16px;
    }
    .s064 .miniaturas {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 28px 32px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
    }
    .s064 .miniaturas .rotulo {
      font-weight: 700;
      font-size: var(--t-rotulo);
      color: var(--acento);
      margin-bottom: 8px;
    }
    .s064 .miniatura {
      height: 64px;
      border-radius: 8px;
      background: var(--gris-suave);
      border: var(--borde);
    }
    .s064 .miniatura:nth-child(3) { width: 80%; }
    .s064 .miniatura:nth-child(4) { width: 60%; }
    .s064 .revisar {
      width: 100%;
      padding: 28px 32px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
    }
    .s064 .revisar .rotulo {
      font-weight: 700;
      font-size: var(--t-rotulo);
      color: var(--acento);
      margin-bottom: 16px;
    }
    .s064 .revisar ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      font-size: var(--t-texto);
      line-height: 1.35;
      color: var(--texto);
    }
    .s064 .revisar li {
      position: relative;
      padding-left: 28px;
    }
    .s064 .revisar li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 12px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: var(--acento);
    }
  </style>
  <h2>2026 · Encargo 2: preparar una presentación a partir de fuentes</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <span class="rotulo">Fuentes</span>
        <p>Tres artículos de la carpeta 'lecturas' y notas de clase.</p>
      </div>
      <div class="caja">
        <span class="rotulo">Producto</span>
        <p>Presentación de doce diapositivas para estudiantes de posgrado sobre evaluación de modelos predictivos.</p>
      </div>
      <div class="caja">
        <span class="rotulo">Estilo</span>
        <p>Usar como guía de estilo la presentación 'clase-03.pptx' de la misma carpeta.</p>
      </div>
      <div class="caja">
        <span class="rotulo">Reglas</span>
        <p>Una idea por diapositiva, poco texto y la referencia en el pie de cada diapositiva que use un artículo. No inventar datos ni gráficos que no estén en las fuentes.</p>
      </div>
    </div>
    <div class="visual">
      <div class="encargo">
        <span class="rotulo">Encargo</span>
        Con los tres artículos de la carpeta 'lecturas' y mis notas de clase, prepara una presentación de doce diapositivas para estudiantes de posgrado sobre evaluación de modelos predictivos. Usa como guía de estilo la presentación 'clase-03.pptx' de la misma carpeta. Una idea por diapositiva, poco texto y la referencia en el pie de cada diapositiva que use un artículo. No inventes datos ni gráficos que no estén en las fuentes.
      </div>
      <div class="miniaturas">
        <span class="rotulo">Miniaturas</span>
        <div class="miniatura"></div>
        <div class="miniatura"></div>
        <div class="miniatura"></div>
        <div class="miniatura"></div>
      </div>
    </div>
    <div class="revisar">
      <span class="rotulo">Revisar al recibirla</span>
      <ul>
        <li>Orden narrativo</li>
        <li>Exactitud de cada afirmación</li>
        <li>Que las referencias correspondan</li>
        <li>Que el estilo sea el tuyo</li>
      </ul>
    </div>
  </div>
</section>
`);
