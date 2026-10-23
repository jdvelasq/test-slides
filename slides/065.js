diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s065">
  <style>
    .s065 .evidencia { gap: 40px; }
    .s065 .instruccion {
      max-width: 1100px;
      padding: 20px 28px;
      border-left: 3px solid var(--acento);
      background: var(--gris-suave);
      border-radius: 0 var(--radio) var(--radio) 0;
      font-size: var(--t-rotulo);
      line-height: 1.45;
      color: var(--texto);
    }
    .s065 .hojas {
      display: flex;
      align-items: stretch;
      gap: 36px;
      flex: 1;
    }
    .s065 .hoja {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .s065 .hoja .barra {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 18px;
      background: var(--gris-suave);
      font-size: 20px;
      color: var(--texto-suave);
      border-radius: var(--radio) var(--radio) 0 0;
      border: var(--borde);
      border-bottom: none;
    }
    .s065 .hoja .cuerpo {
      flex: 1;
      padding: 16px 18px;
      border: var(--borde);
      border-top: none;
      border-radius: 0 0 var(--radio) var(--radio);
    }
    .s065 .candado {
      width: 20px;
      height: 20px;
      fill: none;
      stroke: var(--texto-suave);
      stroke-width: 1.6;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex-shrink: 0;
    }
    .s065 .candado.abierto { stroke: var(--acento); }
    .s065 .tabla {
      width: 100%;
      border-collapse: collapse;
      font-size: 22px;
    }
    .s065 .tabla th,
    .s065 .tabla td {
      padding: 10px 14px;
      border: var(--borde);
      text-align: left;
    }
    .s065 .tabla th {
      background: var(--gris-suave);
      font-weight: 600;
      color: var(--texto-suave);
    }
    .s065 .celda-ok {
      position: relative;
      background: color-mix(in srgb, var(--verde) 12%, var(--fondo));
    }
    .s065 .celda-ok::after {
      content: "✓";
      position: absolute;
      top: 2px;
      right: 6px;
      color: var(--verde);
      font-size: 18px;
      font-weight: 700;
    }
    .s065 .flecha-mid {
      display: flex;
      align-items: center;
      font-size: 48px;
      color: var(--acento);
      flex-shrink: 0;
    }
    .s065 .destacado { margin-top: 8px; }
  </style>

  <h2>2026 · Encargo 3: analizar una hoja de cálculo y verificar</h2>

  <div class="evidencia">
    <div class="instruccion">
      En 'notas_2026.xlsx', calcula por curso el promedio, la tasa de aprobación y la variación frente al semestre anterior. Muestra la fórmula usada para cada indicador y no modifiques la hoja original: crea una hoja nueva con los resultados. Al final, vuelve a calcular tres cifras al azar desde los datos crudos y dime si coinciden.
    </div>

    <div class="hojas">
      <div class="hoja">
        <div class="barra">
          <svg class="candado" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
          notas_2026.xlsx · Original
        </div>
        <div class="cuerpo">
          <table class="tabla">
            <tr><th>Curso</th><th>Nota</th><th>Estado</th></tr>
            <tr><td>A</td><td>7.2</td><td>Aprobado</td></tr>
            <tr><td>B</td><td>4.1</td><td>Reprobado</td></tr>
            <tr><td>C</td><td>8.5</td><td>Aprobado</td></tr>
          </table>
        </div>
      </div>

      <div class="flecha-mid">→</div>

      <div class="hoja">
        <div class="barra">
          <svg class="candado abierto" viewBox="0 0 24 24"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/></svg>
          resultados.xlsx · Nueva
        </div>
        <div class="cuerpo">
          <table class="tabla">
            <tr><th>Curso</th><th>Promedio</th><th>Tasa aprobación</th><th>Variación</th></tr>
            <tr><td>A</td><td class="celda-ok">7.2</td><td class="celda-ok">68%</td><td class="celda-ok">+1.3</td></tr>
            <tr><td>B</td><td>4.1</td><td>22%</td><td>-0.8</td></tr>
            <tr><td>C</td><td>8.5</td><td>91%</td><td>+2.1</td></tr>
          </table>
        </div>
      </div>
    </div>

    <p class="destacado">pedir que muestre cómo calculó y que se autoverifique. Para decisiones importantes, conviene una segunda revisión en una conversación nueva o con otra herramienta.</p>
  </div>
</section>
`);
