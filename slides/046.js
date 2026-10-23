diapositiva(`
<section data-audiencia="formacion" data-layout="afirmacion" data-bloque="analitica" class="s046">
  <style>
    .s046 .terminal { width: 1060px; font-size: 19px; }
    .s046 .terminal .cuerpo { padding: 18px 26px; }
    .s046 .graficos { display: flex; gap: 16px; margin: 12px 0; }
    .s046 .graficos svg { width: 200px; height: 120px; padding: 10px; border-radius: 10px; background: #2c2c2e; }
    .s046 .hallazgos { margin: 0; padding-left: 1.6em; color: #e8e8ed; font-size: 18px; columns: 2; column-gap: 36px; }
    .s046 .rotulos { font-size: 26px; }
  </style>
  <p class="rotulo-audiencia">Formación en analítica</p>
  <h2>El análisis exploratorio debe dejar código y hallazgos comprobables.</h2>
  <div class="evidencia">
    <div class="ventana terminal">
      <div class="barra">Proyecto de curso: ventas · salida ilustrativa con datos ficticios</div>
      <div class="cuerpo">
        <p><span class="prompt">&gt;</span> Analiza ventas_sinteticas.csv sin modificar el original</p>
        <p class="tenue">● Escribí eda.py · lo ejecuté · guardé 3 gráficos en figuras/</p>
        <div class="graficos">
          <svg viewBox="0 0 100 60" aria-hidden="true"><g fill="#8ab4f8"><rect x="4" y="44" width="10" height="14"/><rect x="16" y="30" width="10" height="28"/><rect x="28" y="14" width="10" height="44"/><rect x="40" y="6" width="10" height="52"/><rect x="52" y="20" width="10" height="38"/><rect x="64" y="34" width="10" height="24"/><rect x="76" y="46" width="10" height="12"/></g></svg>
          <svg viewBox="0 0 60 60" aria-hidden="true"><g><rect x="0" y="0" width="15" height="15" fill="#7ee2a8"/><rect x="15" y="0" width="15" height="15" fill="#4a7a62"/><rect x="30" y="0" width="15" height="15" fill="#3a3a3c"/><rect x="45" y="0" width="15" height="15" fill="#c2716c"/><rect x="0" y="15" width="15" height="15" fill="#4a7a62"/><rect x="15" y="15" width="15" height="15" fill="#7ee2a8"/><rect x="30" y="15" width="15" height="15" fill="#5a8a72"/><rect x="45" y="15" width="15" height="15" fill="#3a3a3c"/><rect x="0" y="30" width="15" height="15" fill="#3a3a3c"/><rect x="15" y="30" width="15" height="15" fill="#5a8a72"/><rect x="30" y="30" width="15" height="15" fill="#7ee2a8"/><rect x="45" y="30" width="15" height="15" fill="#4a7a62"/><rect x="0" y="45" width="15" height="15" fill="#c2716c"/><rect x="15" y="45" width="15" height="15" fill="#3a3a3c"/><rect x="30" y="45" width="15" height="15" fill="#4a7a62"/><rect x="45" y="45" width="15" height="15" fill="#7ee2a8"/></g></svg>
          <svg viewBox="0 0 100 60" aria-hidden="true"><g stroke="#f2c46d" stroke-width="2" fill="none"><line x1="20" y1="8" x2="20" y2="52"/><rect x="10" y="18" width="20" height="22" fill="#4a3f2a"/><line x1="10" y1="30" x2="30" y2="30"/><line x1="50" y1="12" x2="50" y2="50"/><rect x="40" y="22" width="20" height="18" fill="#4a3f2a"/><line x1="40" y1="32" x2="60" y2="32"/><line x1="80" y1="16" x2="80" y2="56"/><rect x="70" y="28" width="20" height="16" fill="#4a3f2a"/><line x1="70" y1="36" x2="90" y2="36"/></g><circle cx="80" cy="6" r="2.5" fill="#f2c46d"/></svg>
        </div>
        <p><span class="ok">✓</span> Cinco hallazgos:</p>
        <ol class="hallazgos">
          <li>El 8 % de “precio” está vacío</li>
          <li>32 filas duplicadas</li>
          <li>Hay cantidades negativas por comprobar</li>
          <li>“Precio” y “ventas” correlacionan −0,41</li>
          <li>Una tienda tiene muy pocos registros</li>
        </ol>
      </div>
    </div>
    <ul class="rotulos" style="max-width: 520px">
      <li>Código y gráficos que se ejecutan desde cero</li>
      <li>Cada hallazgo incluye cálculo y limitación</li>
      <li>El analista confirma claves y significado de las variables</li>
    </ul>
  </div>
  <div class="pie">
    <div class="pruebelo"><strong>opencode o Claude Code</strong>: “Con ventas_sinteticas.csv, comprueba tipos, claves, faltantes y duplicados. Guarda código y gráficos; para cada hallazgo incluye cálculo y limitación. No modifiques el original.”</div>
  </div>
</section>
`);
