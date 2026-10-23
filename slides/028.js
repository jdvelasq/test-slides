diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s028">
  <style>
    .s028 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
    }
    .s028 .rejilla.c2 {
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }
    .s028 .caja {
      padding: 24px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.35;
      font-size: var(--t-rotulo);
    }
    .s028 .caja strong {
      display: block;
      font-size: var(--t-texto);
      margin-bottom: 10px;
      color: var(--texto);
    }
    .s028 .caja p {
      margin: 0;
      color: var(--texto-suave);
    }
    .s028 .visual {
      display: flex;
      gap: 48px;
      width: 100%;
      align-items: stretch;
    }
    .s028 .pantalla {
      flex: 1;
      min-width: 0;
      border: var(--borde);
      border-radius: var(--radio-grande);
      background: var(--fondo);
      padding: 28px 32px;
      font-size: var(--t-rotulo);
      line-height: 1.4;
    }
    .s028 .pantalla .barra {
      display: flex;
      align-items: center;
      gap: 10px;
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: var(--borde);
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
    }
    .s028 .pantalla .barra::before {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #c7c7cc;
      box-shadow: 20px 0 0 #c7c7cc, 40px 0 0 #c7c7cc;
      margin-right: 48px;
    }
    .s028 .lista-enlaces {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .s028 .lista-enlaces li {
      color: var(--acento);
      text-decoration: underline;
      font-size: var(--t-rotulo);
    }
    .s028 .respuesta {
      font-size: var(--t-rotulo);
      line-height: 1.5;
      color: var(--texto);
    }
    .s028 .respuesta .cita {
      color: var(--acento);
      font-weight: 700;
    }
    .s028 .fuentes {
      margin-top: 24px;
      padding-top: 16px;
      border-top: var(--borde);
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      line-height: 1.4;
    }
    .s028 .fuentes strong {
      display: block;
      margin-bottom: 8px;
      color: var(--texto);
    }
  </style>
  <h2>2024 · Buscadores con IA: de la lista de enlaces a la respuesta con citas</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>Buscador clásico</strong>
        <p>Escribes palabras clave, recibes enlaces, abres y lees, y la síntesis la haces tú.</p>
      </div>
      <div class="caja">
        <strong>Buscador con IA</strong>
        <p>Perplexity y, después, la búsqueda dentro de ChatGPT, Claude y Gemini: escribes una pregunta, el sistema busca, lee y te responde con citas.</p>
      </div>
      <div class="caja">
        <strong>Proyectos abiertos</strong>
        <p>Perplexica (abril de 2024) muestra el mecanismo: un motor de búsqueda más un modelo que redacta citando la fuente de cada afirmación.</p>
      </div>
      <div class="caja">
        <strong>Hábito necesario</strong>
        <p>Abrir al menos las citas clave. Que una respuesta tenga citas no significa que cada cita respalde lo que dice.</p>
      </div>
    </div>
    <div class="visual">
      <div class="pantalla">
        <div class="barra">Buscador clásico</div>
        <ul class="lista-enlaces">
          <li>Enlace 1</li>
          <li>Enlace 2</li>
          <li>Enlace 3</li>
          <li>Enlace 4</li>
          <li>Enlace 5</li>
          <li>Enlace 6</li>
          <li>Enlace 7</li>
          <li>Enlace 8</li>
          <li>Enlace 9</li>
          <li>Enlace 10</li>
        </ul>
      </div>
      <div class="pantalla">
        <div class="barra">Buscador con IA</div>
        <p class="respuesta">
          La respuesta del sistema resume el tema y cita las fuentes entre corchetes:
          afirmación importante <span class="cita">[1]</span>, dato relevante
          <span class="cita">[2]</span> y conclusión <span class="cita">[3]</span>.
        </p>
        <div class="fuentes">
          <strong>Fuentes</strong>
          [1] Fuente A · [2] Fuente B · [3] Fuente C
        </div>
      </div>
    </div>
  </div>
</section>
`);
