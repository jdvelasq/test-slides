diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s021">
  <style>
    .s021 .evidencia {
      display: flex;
      gap: 64px;
      align-items: center;
      width: 100%;
    }
    .s021 .rejilla.c2 {
      flex: 1;
    }
    .s021 .caja {
      padding: 20px 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
      font-size: var(--t-rotulo);
    }
    .s021 .caja strong {
      display: block;
      font-size: var(--t-texto);
      margin-bottom: 8px;
      color: var(--acento);
    }
    .s021 .caja ul {
      margin: 0;
      padding-left: 20px;
      font-size: var(--t-pequeno);
      line-height: 1.4;
    }
    .s021 .caja li {
      margin-bottom: 4px;
    }
    .s021 .visual {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
    .s021 .nombre-grande {
      font-family: var(--fuente-mono);
      font-size: 72px;
      font-weight: 700;
      color: var(--texto);
      text-align: center;
      line-height: 1.2;
    }
    .s021 .nombre-grande .org {
      color: var(--acento);
    }
    .s021 .nombre-grande .familia {
      color: var(--acento);
    }
    .s021 .nombre-grande .tamano {
      color: var(--acento);
    }
    .s021 .llamadas {
      display: flex;
      gap: 48px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .s021 .llamada {
      text-align: center;
      max-width: 220px;
    }
    .s021 .llamada .etiqueta {
      font-size: var(--t-pequeno);
      font-weight: 600;
      color: var(--acento);
      margin-bottom: 6px;
    }
    .s021 .llamada .descripcion {
      font-size: var(--t-fuente);
      color: var(--texto-suave);
      line-height: 1.3;
    }
  </style>
  <h2>2023 · Hugging Face: cómo leer el nombre de un modelo</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>¿Qué es Hugging Face?</strong>
        El sitio donde se publican y descargan la mayoría de los modelos abiertos.
      </div>
      <div class="caja">
        <strong>Leer el nombre</strong>
        "Qwen/Qwen3.8-27B": organización (Qwen), familia y versión (Qwen3.8) y tamaño (27 mil millones de parámetros).
      </div>
      <div class="caja">
        <strong>Variantes en los nombres</strong>
        <ul>
          <li>"Instruct" o "Chat": ajustado para conversar.</li>
          <li>"GGUF": listo para correr localmente.</li>
          <li>"FP8": una versión de menor precisión.</li>
        </ul>
      </div>
      <div class="caja">
        <strong>Uso local</strong>
        No hace falta entrar a Hugging Face para usar un modelo local: las aplicaciones de escritorio lo descargan por ti.
      </div>
    </div>
    <div class="visual">
      <div class="nombre-grande">
        <span class="org">Qwen</span>/<span class="familia">Qwen3.8</span>-<span class="tamano">27B</span>
      </div>
      <div class="llamadas">
        <div class="llamada">
          <div class="etiqueta">Organización</div>
          <div class="descripcion">Qwen</div>
        </div>
        <div class="llamada">
          <div class="etiqueta">Familia y versión</div>
          <div class="descripcion">Qwen3.8</div>
        </div>
        <div class="llamada">
          <div class="etiqueta">Tamaño</div>
          <div class="descripcion">27 mil millones de parámetros</div>
        </div>
      </div>
    </div>
  </div>
</section>
`);
