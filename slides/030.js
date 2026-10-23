diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s030">
  <style>
    .s030 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s030 .rejilla.c2 {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      align-content: start;
    }
    .s030 .caja {
      padding: 20px 28px;
      border: 1px solid var(--linea);
      border-radius: 12px;
      background: var(--fondo);
      line-height: 1.3;
      font-size: 26px;
    }
    .s030 .caja strong {
      display: block;
      font-size: 28px;
      margin-bottom: 8px;
      color: var(--acento);
    }
    .s030 .caja p {
      margin: 0;
      color: var(--texto-suave);
    }
    .s030 .ventana {
      flex: 1;
      display: flex;
      flex-direction: column;
      border-radius: 16px;
      background: var(--fondo);
      box-shadow: 0 0 0 1px var(--linea);
      overflow: hidden;
      font-size: 24px;
      line-height: 1.4;
    }
    .s030 .ventana .barra {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 20px;
      background: var(--gris-suave);
      font-size: 20px;
      color: var(--texto-suave);
    }
    .s030 .ventana .barra::before {
      content: "";
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #c7c7cc;
      box-shadow: 22px 0 0 #c7c7cc, 44px 0 0 #c7c7cc;
      margin-right: 52px;
    }
    .s030 .ventana .cuerpo {
      display: flex;
      flex: 1;
      min-height: 0;
    }
    .s030 .ventana .lado {
      flex: 1;
      padding: 24px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .s030 .ventana .lado.izq {
      border-right: 1px solid var(--linea);
    }
    .s030 .msg {
      max-width: 90%;
      padding: 12px 18px;
      border-radius: 16px;
      font-size: 22px;
    }
    .s030 .msg.usuario {
      margin-left: auto;
      background: var(--gris-suave);
    }
    .s030 .msg.ia {
      background: var(--acento-suave);
      color: var(--texto);
    }
    .s030 .cuestionario {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .s030 .cuestionario .pregunta {
      font-weight: 600;
      font-size: 22px;
    }
    .s030 .cuestionario .opciones {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .s030 .cuestionario .opcion {
      padding: 8px 14px;
      border: 1px solid var(--linea);
      border-radius: 8px;
      font-size: 20px;
      background: var(--fondo);
    }
    .s030 .cuestionario .boton {
      margin-top: 8px;
      padding: 10px 18px;
      background: var(--acento);
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }
  </style>
  <h2>2024 · Claude Artifacts: del texto al objeto</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>Panel lateral</strong>
        <p>Junio de 2024: Claude muestra en un panel lateral lo que genera (un documento, un diagrama, una pequeña aplicación interactiva) y lo puedes probar ahí mismo.</p>
      </div>
      <div class="caja">
        <strong>Antes</strong>
        <p>Antes había que copiar lo generado y pegarlo en otro programa para verlo.</p>
      </div>
      <div class="caja">
        <strong>Ejemplos</strong>
        <p>Ejemplos para quien no programa: una calculadora de notas, un cuestionario interactivo, una línea de tiempo, un tablero con tus datos.</p>
      </div>
      <div class="caja">
        <strong>Compartir</strong>
        <p>Se comparte con un enlace.</p>
      </div>
      <div class="caja">
        <strong>Limitación</strong>
        <p>Limitación: es un prototipo; no reemplaza un sistema institucional.</p>
      </div>
    </div>
    <div class="ventana">
      <div class="barra">Claude Artifacts</div>
      <div class="cuerpo">
        <div class="lado izq">
          <div class="msg usuario">haz un cuestionario de cinco preguntas sobre...</div>
          <div class="msg ia">Aquí tienes el cuestionario interactivo. Puedes responder y ver el resultado al final.</div>
        </div>
        <div class="lado der">
          <div class="cuestionario">
            <div class="pregunta">Pregunta 1 de 5</div>
            <div class="opciones">
              <div class="opcion">Opción A</div>
              <div class="opcion">Opción B</div>
              <div class="opcion">Opción C</div>
            </div>
            <div class="boton">Siguiente</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`);
