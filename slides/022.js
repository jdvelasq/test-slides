diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s022">
  <style>
    .s022 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s022 .rejilla.c2 {
      flex: 1;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto auto auto;
      align-content: start;
    }
    .s022 .rejilla.c2 .caja {
      padding: 20px 24px;
      font-size: var(--t-rotulo);
      line-height: 1.35;
    }
    .s022 .rejilla.c2 .caja strong {
      display: block;
      font-size: var(--t-texto);
      margin-bottom: 8px;
      color: var(--acento);
    }
    .s022 .rejilla.c2 .caja.ancho {
      grid-column: 1 / -1;
    }
    .s022 .maqueta {
      flex: 1;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .s022 .maqueta .ventana {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .s022 .maqueta .ventana > .cuerpo {
      flex: 1;
      display: flex;
      gap: 24px;
      padding: 24px;
    }
    .s022 .maqueta .lista {
      flex: 0 0 300px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      border-right: var(--borde);
      padding-right: 24px;
    }
    .s022 .maqueta .lista .modelo {
      padding: 10px 14px;
      border-radius: 8px;
      background: var(--gris-suave);
      font-size: var(--t-pequeno);
    }
    .s022 .maqueta .lista .modelo.activo {
      background: var(--acento-suave);
      color: var(--acento);
      font-weight: 600;
    }
    .s022 .maqueta .chat {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
      justify-content: flex-end;
    }
    .s022 .maqueta .chat .msg {
      max-width: 90%;
      padding: 12px 18px;
      border-radius: 16px;
      font-size: var(--t-pequeno);
    }
    .s022 .maqueta .chat .msg.usuario {
      margin-left: auto;
      background: var(--gris-suave);
    }
    .s022 .maqueta .chat .msg.ia {
      background: var(--acento-suave);
      color: var(--acento);
    }
    .s022 .maqueta .wifi-tachado {
      position: absolute;
      top: 16px;
      right: 16px;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--rojo);
      border-radius: 50%;
      color: #fff;
      font-size: 28px;
      font-weight: 700;
    }
  </style>
  <h2>2023 · LM Studio y Ollama: un modelo en tu computadora, sin internet</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>Mayo de 2023: LM Studio</strong>
        Una aplicación de escritorio con tres pestañas: buscar y descargar un modelo, gestionarlo y chatear con él.
      </div>
      <div class="caja">
        <strong>Julio de 2023: Ollama</strong>
        La misma idea, pensada para usarse desde la terminal o desde otras aplicaciones.
      </div>
      <div class="caja">
        <strong>Qué se gana</strong>
        Los datos no salen de tu equipo, funciona sin conexión y no hay costo por uso.
      </div>
      <div class="caja">
        <strong>Qué se pierde</strong>
        Los modelos que caben en una laptop son menos capaces que los grandes de la nube, y la velocidad depende de tu equipo.
      </div>
      <div class="caja ancho">
        <strong>Demostración en vivo</strong>
        Desconectar el wifi y conversar con un modelo pequeño.
      </div>
    </div>
    <div class="maqueta">
      <div class="ventana">
        <div class="barra">
          <span>LM Studio</span>
        </div>
        <div class="cuerpo">
          <div class="lista">
            <div class="modelo">llama-3-8b</div>
            <div class="modelo activo">mistral-7b</div>
            <div class="modelo">phi-2</div>
            <div class="modelo">gemma-2b</div>
          </div>
          <div class="chat">
            <div class="msg usuario">¿Qué es un modelo local?</div>
            <div class="msg ia">Un modelo que corre en tu equipo, sin conexión a internet.</div>
          </div>
        </div>
      </div>
      <div class="wifi-tachado">✕</div>
    </div>
  </div>
</section>
`);
