diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s016">
  <style>
    .s016 .pizarra {
      background: #2b2b2e;
      border-radius: var(--radio-grande);
      padding: 28px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-height: 320px;
    }
    .s016 .pizarra .barra {
      font-size: 20px;
      color: #a1a1a6;
      font-weight: 600;
    }
    .s016 .pizarra svg {
      flex: 1;
      width: 100%;
    }
    .s016 .usos {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-top: 24px;
    }
    .s016 .flechas {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 48px;
      margin-top: 32px;
    }
    .s016 .flecha-caja {
      padding: 16px 36px;
      border: 2px solid var(--acento);
      border-radius: var(--radio);
      font-size: var(--t-rotulo);
      font-weight: 600;
      text-align: center;
      background: var(--gris-suave);
    }
    .s016 .flecha-caja small {
      display: block;
      font-size: var(--t-pequeno);
      font-weight: 400;
      color: var(--texto-suave);
      margin-top: 4px;
    }
  </style>

  <h2>2023 · GPT-4V: el modelo ve imágenes</h2>

  <div class="evidencia vertical">
    <div class="fila">
      <div class="pizarra crece">
        <div class="barra">Foto de pizarra</div>
        <svg viewBox="0 0 400 220" fill="none" stroke="#f5f5f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="20" y="30" width="100" height="50" rx="8" stroke="#76B7B2"/>
          <text x="70" y="62" text-anchor="middle" fill="#f5f5f7" font-size="16" stroke="none">Entrada</text>
          <line x1="120" y1="55" x2="165" y2="55"/>
          <polygon points="165,50 175,55 165,60" fill="#76B7B2" stroke="none"/>
          <rect x="175" y="30" width="100" height="50" rx="8" stroke="#EDC948"/>
          <text x="225" y="62" text-anchor="middle" fill="#f5f5f7" font-size="16" stroke="none">Proceso</text>
          <line x1="275" y1="55" x2="320" y2="55"/>
          <polygon points="320,50 330,55 320,60" fill="#EDC948" stroke="none"/>
          <rect x="330" y="30" width="50" height="50" rx="8" stroke="#59A14F"/>
          <text x="355" y="62" text-anchor="middle" fill="#f5f5f7" font-size="12" stroke="none">Sal.</text>
          <line x1="70" y1="80" x2="70" y2="130" stroke-dasharray="4 4"/>
          <line x1="225" y1="80" x2="225" y2="130" stroke-dasharray="4 4"/>
          <rect x="20" y="130" width="360" height="70" rx="8" stroke="#4E79A7" stroke-dasharray="6 4"/>
          <text x="200" y="170" text-anchor="middle" fill="#a1a1a6" font-size="14" stroke="none">Flujo de tres etapas</text>
        </svg>
      </div>
      <div class="crece">
        <div class="ventana">
          <div class="barra">ChatGPT</div>
          <div class="cuerpo">
            <p>El diagrama muestra un flujo de tres etapas: entrada, procesamiento y salida. Cada etapa se conecta con la siguiente mediante una flecha.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="usos">
      <span class="chip">Pizarra</span>
      <span class="chip">Gráfico</span>
      <span class="chip">PDF escaneado</span>
      <span class="chip">Tabla en imagen</span>
      <span class="chip">Formulario</span>
    </div>

    <div class="flechas">
      <div class="flecha-caja">
        imagen → texto
        <small>entender</small>
      </div>
      <div class="flecha" style="font-size:48px;">↔</div>
      <div class="flecha-caja">
        texto → imagen
        <small>generar</small>
      </div>
    </div>
  </div>

  <p class="destacado">Ver la pantalla es lo que más tarde permite que un agente use una computadora.</p>
</section>
`);
