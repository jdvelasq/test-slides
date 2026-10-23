diapositiva(`
<section data-layout="transicion" data-bloque="linea" class="s005">
  <h2>2017–2022 · De dónde sale todo</h2>
  <p class="subtitulo">Del artículo científico al chat que usa todo el mundo.</p>
  <div class="visual">2017–2022</div>
  <div class="linea-tiempo" data-resaltar="2017, 2022"></div>
  <style>
    .s005 h2 { margin-top: 360px; font-size: 64px; }
    .s005 .subtitulo { margin-top: 24px; font-size: 32px; }
    .s005 .visual {
      position: absolute;
      bottom: 240px;
      left: 50%;
      transform: translateX(-50%);
      width: 1000px;
      height: 160px;
      background: var(--acento);
      border-radius: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 120px;
      font-weight: 700;
      color: #fff;
    }
    .s005 .linea-tiempo {
      position: absolute;
      bottom: 160px;
      left: var(--margen);
      right: var(--margen);
    }
    .s005 .linea-tiempo span.on {
      color: #fff;
      font-weight: 700;
    }
    .s005 .linea-tiempo span.on::before { background: #fff; transform: scale(1.4); }
  </style>
</section>
`);
