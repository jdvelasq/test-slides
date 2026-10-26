diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s037">
  <style>
    .s037 .ventana-operator {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
    .s037 .ventana-operator .barra {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 20px;
      background: var(--gris-suave);
      font-size: 20px;
      color: var(--texto-suave);
    }
    .s037 .ventana-operator .barra::before {
      content: "";
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #c7c7cc;
      box-shadow: 22px 0 0 #c7c7cc, 44px 0 0 #c7c7cc;
      margin-right: 52px;
    }
    .s037 .ventana-operator .cuerpo {
      padding: 28px 32px;
      position: relative;
    }
    .s037 .pasos {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    .s037 .paso {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: var(--t-rotulo);
      line-height: 1.3;
    }
    .s037 .paso-num {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--acento);
      color: #fff;
      font-weight: 700;
      font-size: 20px;
      flex-shrink: 0;
    }
    .s037 .paso-texto {
      color: var(--texto);
    }
    .s037 .cursor {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 48px;
      color: var(--acento);
      opacity: 0.7;
    }
    .s037 .etiqueta-confirmacion {
      position: absolute;
      bottom: 20px;
      right: 20px;
      padding: 8px 16px;
      border: 2px solid var(--rojo);
      border-radius: 8px;
      color: var(--rojo);
      font-size: var(--t-pequeno);
      font-weight: 600;
      background: color-mix(in srgb, var(--fondo) 80%, transparent);
    }
    .s037 .rejilla.c4 {
      margin-top: 40px;
    }
    .s037 .caja {
      padding: 20px 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
      font-size: var(--t-rotulo);
    }
    .s037 .caja strong {
      display: block;
      margin-bottom: 8px;
      font-size: var(--t-pequeno);
      color: var(--acento);
    }
  </style>
  <h2>2025 · Operator: la IA usa el navegador por ti</h2>
  <div class="evidencia">
    <div class="ventana ventana-operator">
      <div class="barra">
        <span class="url">https://ejemplo.com</span>
      </div>
      <div class="cuerpo">
        <div class="pasos">
          <div class="paso">
            <span class="paso-num">1</span>
            <span class="paso-texto">Buscar opciones de un viaje</span>
          </div>
          <div class="paso">
            <span class="paso-num">2</span>
            <span class="paso-texto">Abrir resultado</span>
          </div>
          <div class="paso">
            <span class="paso-num">3</span>
            <span class="paso-texto">Llenar campo</span>
          </div>
          <div class="paso">
            <span class="paso-num">4</span>
            <span class="paso-texto">Confirmar</span>
          </div>
        </div>
        <div class="cursor">▍</div>
        <div class="etiqueta-confirmacion">requiere tu confirmación</div>
      </div>
    </div>
    <div class="rejilla c4">
      <div class="caja">
        <strong>Presentación</strong>
        Enero de 2025: OpenAI presenta Operator, un agente que abre sitios web, hace clic, escribe y llena formularios.
      </div>
      <div class="caja">
        <strong>Encargos</strong>
        Buscar opciones de un viaje, completar un formulario, recopilar información de varias páginas.
      </div>
      <div class="caja">
        <strong>Limitaciones</strong>
        Se confunde con cambios de diseño, se bloquea con CAPTCHA y necesita supervisión en pagos y envíos.
      </div>
      <div class="caja">
        <strong>Continuidad</strong>
        Dejó de existir como producto aparte en 2025: su capacidad pasó a ChatGPT Agent y, en 2026, a ChatGPT Work.
      </div>
    </div>
  </div>
</section>
`);
