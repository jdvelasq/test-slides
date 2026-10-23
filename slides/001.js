diapositiva(`
<section data-layout="portada" data-bloque="apertura" class="s001">
  <style>
    .s001 h1 { max-width: 1300px; }
    .s001 .subtitulo { max-width: 1080px; line-height: 1.4; }
    .s001 .visual-tiempo {
      position: absolute;
      bottom: 100px;
      left: var(--margen);
      right: var(--margen);
      height: 100px;
    }
    .s001 .visual-tiempo .linea {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--linea);
    }
    .s001 .visual-tiempo .palabra {
      position: absolute;
      bottom: 24px;
      font-size: var(--t-rotulo);
      font-weight: 600;
      color: var(--acento);
      white-space: nowrap;
    }
    .s001 .visual-tiempo .palabra::after {
      content: "";
      position: absolute;
      bottom: -20px;
      left: 50%;
      width: 12px;
      height: 12px;
      margin-left: -6px;
      border-radius: 50%;
      background: var(--acento);
    }
    .s001 .visual-tiempo .generar { left: 55%; }
    .s001 .visual-tiempo .usar { left: 77%; }
    .s001 .visual-tiempo .delegar { right: 0; }
  </style>
  <h1>2017–2026 · IA generativa y agéntica: del chat a delegar trabajo</h1>
  <p class="subtitulo">Un recorrido histórico, de 2017 a octubre de 2026, para entender qué se puede hacer hoy y cómo hacerlo bien.</p>
  <div class="autor"></div>
  <div class="visual-tiempo">
    <div class="linea"></div>
    <span class="palabra generar">generar</span>
    <span class="palabra usar">usar herramientas</span>
    <span class="palabra delegar">delegar</span>
  </div>
</section>
`);
