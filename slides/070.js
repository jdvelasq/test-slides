diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s070">
  <style>
    .s070 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
    }
    .s070 .glosario-tabla {
      width: 100%;
      border-collapse: collapse;
      font-size: 30px;
    }
    .s070 .glosario-tabla th,
    .s070 .glosario-tabla td {
      padding: 16px 28px;
      border-bottom: 1px solid var(--linea);
      text-align: left;
      vertical-align: top;
    }
    .s070 .glosario-tabla th {
      font-weight: 700;
      color: var(--texto-suave);
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
    .s070 .glosario-tabla td {
      line-height: 1.35;
    }
    .s070 .glosario-tabla .col-termino {
      font-weight: 700;
      color: var(--acento);
      white-space: nowrap;
    }
    .s070 .glosario-tabla .col-ano {
      white-space: nowrap;
      color: var(--texto-suave);
      font-variant-numeric: tabular-nums;
    }
    .s070 .destacado {
      font-size: 32px;
      font-weight: 600;
      line-height: 1.3;
      padding-left: 24px;
      border-left: 2px solid var(--acento);
      color: var(--texto);
    }
  </style>
  <h2>2017–2026 · Glosario (1/2)</h2>
  <div class="evidencia">
    <table class="glosario-tabla">
      <thead>
        <tr>
          <th>Término</th>
          <th>Qué es</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-termino">Transformer</td>
          <td>La arquitectura base de casi todos los modelos</td>
          <td class="col-ano">2017</td>
        </tr>
        <tr>
          <td class="col-termino">Token</td>
          <td>El fragmento de texto con el que el modelo mide todo</td>
          <td class="col-ano">—</td>
        </tr>
        <tr>
          <td class="col-termino">Modelo fundacional</td>
          <td>Un modelo general adaptable a muchas tareas</td>
          <td class="col-ano">2021</td>
        </tr>
        <tr>
          <td class="col-termino">Alucinación</td>
          <td>Una respuesta inventada dicha con seguridad</td>
          <td class="col-ano">—</td>
        </tr>
        <tr>
          <td class="col-termino">Open-weight</td>
          <td>Un modelo cuyo archivo se puede descargar (LLaMA)</td>
          <td class="col-ano">2023</td>
        </tr>
        <tr>
          <td class="col-termino">Modelo local</td>
          <td>Un modelo que corre en tu equipo, sin internet</td>
          <td class="col-ano">2023</td>
        </tr>
        <tr>
          <td class="col-termino">Cuantización / GGUF</td>
          <td>Reducir el modelo para que quepa en una laptop</td>
          <td class="col-ano">2023</td>
        </tr>
        <tr>
          <td class="col-termino">Multimodal</td>
          <td>Entiende más que texto, como imágenes o audio</td>
          <td class="col-ano">2023</td>
        </tr>
        <tr>
          <td class="col-termino">Ventana de contexto</td>
          <td>Cuánto lee de una vez (1M de tokens)</td>
          <td class="col-ano">2024</td>
        </tr>
        <tr>
          <td class="col-termino">RAG</td>
          <td>Responder a partir de tus documentos</td>
          <td class="col-ano">—</td>
        </tr>
      </tbody>
    </table>
    <p class="destacado">Término, qué es y cuándo apareció.</p>
  </div>
</section>
`);
