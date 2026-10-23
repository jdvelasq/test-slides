diapositiva(`
<section data-audiencia="formacion" data-layout="afirmacion" data-bloque="analitica" class="s045">
  <style>
    .s045 .desorden { position: relative; width: 480px; height: 300px; flex: none; }
    .s045 .desorden > div { position: absolute; padding: 14px 18px; border-radius: 10px; font-size: 19px; line-height: 1.3; box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); }
    .s045 .nota { background: #fff4b8; width: 170px; left: 0; top: 10px; font-size: 18px; transform: rotate(-5deg); font-family: var(--fuente-mano); }
    .s045 .correo { background: #fff; width: 230px; right: 0; top: 0; transform: rotate(3deg); }
    .s045 .transcripcion { background: #fff; width: 300px; left: 70px; top: 150px; transform: rotate(-1.5deg); }
    .s045 .paso { display: flex; flex-direction: column; align-items: center; gap: 4px; width: 230px; flex: none; text-align: center; font-size: 22px; font-weight: 700; color: var(--acento); }
    .s045 table { flex: 1; font-size: 22px; }
    .s045 th { font-size: 20px; color: var(--acento); }
    .s045 th, .s045 td { padding: 10px 14px; }
    .s045 .rotulos { font-size: 24px; }
  </style>
  <p class="rotulo-audiencia">Formación en analítica</p>
  <h2>El problema llega desordenado. La IA ayuda a ordenarlo, no a decidirlo.</h2>
  <div class="evidencia vertical" style="gap: 28px">
    <div class="fila" style="width: 100%; gap: 24px">
      <div class="desorden">
        <div class="nota">¿por qué caen las ventas? revisar inventario</div>
        <div class="correo"><b>Asunto:</b> ventas<br>Hay más devoluciones y faltan productos…</div>
        <div class="transcripcion"><b>Entrevista ficticia:</b> “Creo que es el precio”… “No, faltan existencias”…</div>
      </div>
      <div class="paso"><span class="flecha acento">→</span>Modelo local con tus documentos</div>
      <table>
        <tr><th>Problema central</th><th>Síntomas</th><th>Causas posibles</th><th>Supuestos</th></tr>
        <tr><td>Caen las ventas de una tienda ficticia</td><td>Más devoluciones y faltantes</td><td>Precio; disponibilidad de productos</td><td>Dos personas proponen causas aún no comprobadas</td></tr>
      </table>
    </div>
    <ul class="rotulos horizontal" style="width: 100%">
      <li>Caso de curso: consultar entrevistas y reportes ficticios, con cita a la fuente</li>
      <li>Traducir la meta de negocio en una tarea analítica con entradas, salidas y métrica</li>
    </ul>
  </div>
  <div class="pie">
    <div class="pruebelo"><strong>Open WebUI con un modelo local</strong>: pegue transcripciones y correos y pida “extrae el problema central, los síntomas, las posibles causas y los supuestos de cada persona, en una tabla”.</div>
  </div>
</section>
`);
