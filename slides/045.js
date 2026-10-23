diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s045">
  <style>
    .s045 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
    }
    .s045 .visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
    .s045 .flecha-tachada {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: var(--t-rotulo);
      color: var(--texto-suave);
      text-decoration: line-through;
      text-decoration-color: var(--rojo);
      text-decoration-thickness: 3px;
    }
    .s045 .flecha-tachada .icono {
      width: 48px;
      height: 48px;
      stroke: var(--rojo);
    }
    .s045 .ventanas {
      display: flex;
      gap: 40px;
      align-items: stretch;
    }
    .s045 .ventana-app {
      width: 420px;
      display: flex;
      flex-direction: column;
    }
    .s045 .ventana-app .barra {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 18px;
      background: var(--gris-suave);
      font-size: 20px;
      color: var(--texto-suave);
      border-radius: var(--radio-grande) var(--radio-grande) 0 0;
    }
    .s045 .ventana-app .barra::before {
      content: "";
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #c7c7cc;
      box-shadow: 20px 0 0 #c7c7cc, 40px 0 0 #c7c7cc;
      margin-right: 48px;
    }
    .s045 .ventana-app .cuerpo {
      display: flex;
      flex: 1;
      border: var(--borde);
      border-top: none;
      border-radius: 0 0 var(--radio-grande) var(--radio-grande);
      overflow: hidden;
    }
    .s045 .ventana-app .principal {
      flex: 1;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .s045 .ventana-app .asistente {
      width: 140px;
      background: var(--acento-suave);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-left: 2px solid var(--acento);
    }
    .s045 .ventana-app .asistente .fecha {
      font-size: 18px;
      font-weight: 700;
      color: var(--acento);
    }
    .s045 .ventana-app .asistente .accion {
      font-size: 18px;
      color: var(--texto-suave);
      line-height: 1.3;
    }
    .s045 .ventana-app .principal .linea {
      height: 10px;
      border-radius: 5px;
      background: var(--linea);
    }
    .s045 .ventana-app .principal .linea.corta { width: 60%; }
    .s045 .ventana-app .principal .linea.media { width: 80%; }
    .s045 .ventana-app .principal .linea.larga { width: 100%; }
    .s045 .ventana-app .principal .linea.acento { background: var(--acento); opacity: 0.3; }
    .s045 .rejilla {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      width: 100%;
    }
    .s045 .rejilla .caja {
      padding: 16px 20px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
      font-size: var(--t-pequeno);
    }
    .s045 .rejilla .caja strong {
      display: block;
      font-size: var(--t-rotulo);
      margin-bottom: 6px;
      color: var(--texto);
    }
    .s045 .rejilla .caja p {
      margin: 0;
      color: var(--texto-suave);
    }
  </style>
  <h2>2025 · Claude en Excel, PowerPoint y Word: la IA dentro de Office</h2>
  <div class="evidencia">
    <div class="visual">
      <div class="flecha-tachada">
        <svg class="icono" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        copiar y pegar al chat
      </div>
      <div class="ventanas">
        <div class="ventana-app">
          <div class="barra">Excel</div>
          <div class="cuerpo">
            <div class="principal">
              <div class="linea larga"></div>
              <div class="linea media"></div>
              <div class="linea corta"></div>
              <div class="linea larga acento"></div>
              <div class="linea media"></div>
            </div>
            <div class="asistente">
              <div class="fecha">Oct 2025</div>
              <div class="accion">Lee el libro abierto y trabaja sobre él</div>
            </div>
          </div>
        </div>
        <div class="ventana-app">
          <div class="barra">PowerPoint</div>
          <div class="cuerpo">
            <div class="principal">
              <div class="linea larga"></div>
              <div class="linea media"></div>
              <div class="linea larga acento"></div>
              <div class="linea corta"></div>
              <div class="linea media"></div>
            </div>
            <div class="asistente">
              <div class="fecha">Feb 2026</div>
              <div class="accion">Crea y ajusta diapositivas y gráficos</div>
            </div>
          </div>
        </div>
        <div class="ventana-app">
          <div class="barra">Word</div>
          <div class="cuerpo">
            <div class="principal">
              <div class="linea larga"></div>
              <div class="linea larga"></div>
              <div class="linea media"></div>
              <div class="linea larga acento"></div>
              <div class="linea corta"></div>
            </div>
            <div class="asistente">
              <div class="fecha">Abr 2026</div>
              <div class="accion">Resume y revisa el documento abierto</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rejilla">
      <div class="caja">
        <strong>Octubre 2025</strong>
        <p>Claude para Excel. Lee el libro abierto (celdas, fórmulas, hojas) y trabaja directamente sobre él.</p>
      </div>
      <div class="caja">
        <strong>Febrero 2026</strong>
        <p>Claude para PowerPoint. Crea y ajusta diapositivas y gráficos.</p>
      </div>
      <div class="caja">
        <strong>Abril 2026</strong>
        <p>Claude para Word. Resume y revisa el documento abierto.</p>
      </div>
      <div class="caja">
        <strong>Mismo patrón</strong>
        <p>Microsoft Copilot en Office y Gemini en Docs, Sheets y Slides siguen el mismo patrón.</p>
      </div>
      <div class="caja">
        <strong>Diferencia con el chat</strong>
        <p>No hay que copiar y pegar; la IA ve la estructura real del archivo.</p>
      </div>
    </div>
  </div>
</section>
`);
