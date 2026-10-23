diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s021">
  <style>
    .s021 .reto { width: 100%; font-size: var(--t-rotulo); line-height: 1.4; }
    .s021 .caso { display: grid; grid-template-columns: 640px 1fr; gap: var(--hueco); width: 100%; align-items: center; }
    .s021 table { width: 100%; font-size: var(--t-pequeno); }
    .s021 th, .s021 td { padding: 14px 16px; }
    .s021 .opciones { display: flex; flex-direction: column; gap: 24px; }
    .s021 .panel { padding: 0 0 0 24px; border-left: var(--borde); }
    .s021 .panel.guiado { border-left: 2px solid var(--acento); }
    .s021 .instruccion { margin-top: 8px; font-size: var(--t-pequeno); line-height: 1.4; }
    .s021 .resultado { margin-top: 12px; font-size: var(--t-texto); font-weight: 600; }
    .s021 .comprobacion { margin-top: 6px; font-size: var(--t-pequeno); color: var(--texto-suave); }
    .s021 .matiz { max-width: 1500px; font-size: var(--t-terminos); color: var(--texto-suave); text-align: center; }
  </style>
  <h2>Elegir lo más popular no basta cuando hay restricciones que cumplir.</h2>
  <div class="evidencia vertical">
    <p class="reto">¿Qué <strong>3 electivas</strong> maximizan las inscripciones, con un costo total de <strong>máximo 11</strong> y <strong>sin cruces de horario</strong>?</p>
    <div class="caso">
      <table aria-label="Electivas disponibles y restricciones">
        <thead><tr><th>Electiva</th><th>Inscritos</th><th>Costo</th><th>Horario</th></tr></thead>
        <tbody>
          <tr><td>A · Series</td><td>30</td><td>5</td><td>Lun. 18 h</td></tr>
          <tr><td>B · Redes</td><td>28</td><td>5</td><td>Lun. 18 h</td></tr>
          <tr><td>C · Texto</td><td>24</td><td>4</td><td>Mar. 18 h</td></tr>
          <tr><td>D · Visualización</td><td>20</td><td>3</td><td>Mié. 18 h</td></tr>
          <tr><td>E · Optimización</td><td>18</td><td>3</td><td>Mar. 18 h</td></tr>
        </tbody>
      </table>
      <div class="opciones">
        <div class="panel">
          <div class="panel-titulo">Selección por popularidad · ilustración</div>
          <p class="instruccion">Prompt directo para comparar: “Con estos datos y restricciones, elige las tres electivas. Da solo la selección.”</p>
          <p class="resultado">Atajo: A + B + C → 82 inscripciones</p>
          <p class="comprobacion">Parece atractivo, pero cuesta 14 y A se cruza con B. No es viable.</p>
        </div>
        <div class="panel guiado">
          <div class="panel-titulo acento">CoT · procedimiento guiado e ilustración</div>
          <p class="instruccion">“Con estos datos y restricciones, resuelve paso a paso: descarta cruces, verifica el costo de cada terna y compara las opciones viables. Resume la comprobación.”</p>
          <p class="resultado acento">A + D + E → 68 inscripciones</p>
          <p class="comprobacion">Solo quedan ADE y BDE: ambas cuestan 11 y no tienen cruces. ADE suma 68; BDE, 66.</p>
        </div>
      </div>
    </div>
    <p class="matiz">Idea clave: primero compruebe viabilidad; después compare el beneficio. Soluciones ilustrativas: un prompt directo también puede acertar y pedir pasos no garantiza exactitud.</p>
  </div>
  <div class="pie">
    <dl class="terminos">
      <div><dt>Chain-of-thought (CoT)</dt> <dd>cadena de pensamiento: guiar la resolución con pasos intermedios o ejemplos resueltos.</dd></div>
    </dl>
    <div class="pruebelo">Compare ambos prompts en el mismo modelo. Verifique las diez combinaciones con una tabla o un script; una explicación convincente puede ser incorrecta.</div>
  </div>
  <p class="fuente">Caso ficticio · CoT: Wei et al. (2022), arxiv.org/abs/2201.11903.</p>
</section>
`);
