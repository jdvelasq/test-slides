diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s029">
  <style>
    .s029 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
    }
    .s029 .visual {
      display: flex;
      flex-direction: column;
      gap: 32px;
      align-items: center;
    }
    .s029 .esquema-antiguo {
      display: flex;
      align-items: center;
      gap: 24px;
      text-decoration: line-through;
      color: var(--texto-suave);
      font-size: var(--t-rotulo);
    }
    .s029 .esquema-antiguo .caja {
      padding: 12px 20px;
      font-size: var(--t-pequeno);
    }
    .s029 .flujo-nuevo {
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .s029 .onda {
      width: 200px;
      height: 80px;
    }
    .s029 .onda path {
      fill: none;
      stroke: var(--acento);
      stroke-width: 3;
      stroke-linecap: round;
    }
    .s029 .bloque-modelo {
      padding: 24px 40px;
      border: 2px solid var(--acento);
      border-radius: var(--radio);
      background: var(--acento-suave, color-mix(in srgb, var(--acento) 12%, var(--fondo)));
      font-size: var(--t-texto);
      font-weight: 700;
      color: var(--acento);
      text-align: center;
    }
    .s029 .flecha-flujo {
      font-size: 48px;
      color: var(--acento);
    }
    .s029 .rejilla.c2 {
      gap: 32px;
    }
    .s029 .caja {
      padding: 24px 28px;
      font-size: var(--t-rotulo);
      line-height: 1.35;
    }
    .s029 .caja strong {
      display: block;
      margin-bottom: 8px;
      font-size: var(--t-texto);
      color: var(--acento);
    }
  </style>
  <h2>2024 · GPT-4o: hablar con el modelo en tiempo real</h2>
  <div class="evidencia">
    <div class="visual">
      <div class="esquema-antiguo">
        <div class="caja">Voz a texto</div>
        <span class="flecha">→</span>
        <div class="caja">Modelo</div>
        <span class="flecha">→</span>
        <div class="caja">Texto a voz</div>
      </div>
      <div class="flujo-nuevo">
        <svg class="onda" viewBox="0 0 200 80">
          <path d="M10,40 Q30,10 50,40 T90,40 T130,40 T170,40 T190,40" />
        </svg>
        <span class="flecha-flujo">→</span>
        <div class="bloque-modelo">Modelo</div>
        <span class="flecha-flujo">→</span>
        <svg class="onda" viewBox="0 0 200 80">
          <path d="M10,40 Q30,70 50,40 T90,40 T130,40 T170,40 T190,40" />
        </svg>
      </div>
    </div>
    <div class="rejilla c2">
      <div class="caja">
        <strong>13 de mayo de 2024</strong>
        OpenAI presenta GPT-4o, un solo modelo que entiende y produce texto, imagen y audio.
      </div>
      <div class="caja">
        <strong>Antes</strong>
        La voz encadenaba tres sistemas: voz a texto, modelo y texto a voz. Era lento y perdía el tono.
      </div>
      <div class="caja">
        <strong>Ahora</strong>
        Se conversa casi como con una persona, se le puede interrumpir y entiende la entonación.
      </div>
      <div class="caja">
        <strong>Usos</strong>
        Practicar una presentación, pensar en voz alta mientras caminas, dictar un borrador, conversar sobre lo que muestra la cámara del teléfono.
      </div>
    </div>
  </div>
</section>
`);
