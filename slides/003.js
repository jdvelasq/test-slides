diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s003">
  <style>
    .s003 .evidencia { flex-direction: column; gap: 24px; align-items: stretch; }
    .s003 .frases { display: flex; gap: 32px; }
    .s003 .frase { flex: 1; background: var(--gris-suave); padding: 20px 28px; border-radius: var(--radio); font-size: 38px; }
    .s003 .etiqueta { font-size: var(--t-pequeno); color: var(--texto-suave); margin-right: 20px; }
    .s003 .positivo { color: var(--verde); }
    .s003 .negativo { color: var(--rojo); }
    .s003 .paneles { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
    .s003 .panel { border: var(--borde); border-radius: var(--radio); padding: 24px; }
    .s003 h3 { font-size: 30px; margin-bottom: 18px; }
    .s003 table { border-collapse: collapse; width: 100%; font-size: 27px; text-align: center; }
    .s003 th, .s003 td { padding: 14px 12px; border-bottom: var(--borde); }
    .s003 th { font-weight: 600; }
    .s003 thead { background: var(--gris-suave); }
    .s003 .flujo { display: flex; align-items: center; gap: 16px; margin-top: 30px; }
    .s003 .paso { flex: 1; padding: 16px 12px; text-align: center; background: var(--gris-suave); border-radius: var(--radio); font-size: 26px; }
    .s003 .paso strong, .s003 .paso span { display: block; }
    .s003 .paso span { margin-top: 12px; font-size: 24px; }
    .s003 .nota { color: var(--texto-suave); font-size: 22px; line-height: 1.35; margin-top: 18px; }
    .s003 .relaciones { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; align-items: center; }
    .s003 .relaciones table { font-size: 23px; }
    .s003 .relaciones th, .s003 .relaciones td { padding: 12px 6px; }
    .s003 .red { width: 100%; height: 300px; }
    .s003 .red text { font-family: var(--fuente); font-size: 23px; fill: var(--texto); text-anchor: middle; }
    .s003 .red .arista { stroke: var(--texto-suave); stroke-width: 2; }
    .s003 .red .nodo { fill: var(--fondo); stroke: var(--acento); stroke-width: 3; }
    .s003 .red .grupo-a { fill: var(--verde); fill-opacity: 0.12; stroke: var(--verde); stroke-width: 2; }
    .s003 .red .grupo-b { fill: var(--rojo); fill-opacity: 0.10; stroke: var(--rojo); stroke-width: 2; }
    .s003 .idea { font-size: 30px; font-weight: 600; border-left: 4px solid var(--acento); padding-left: 22px; }
  </style>
  <h2>1975–2002: contar palabras permitió representar y clasificar textos.</h2>
  <div class="evidencia">
    <div class="frases">
      <p class="frase"><span class="etiqueta">D1</span>hola mundo <strong class="positivo">feliz</strong></p>
      <p class="frase"><span class="etiqueta">D2</span>hola mundo <strong class="negativo">cruel</strong></p>
    </div>
    <div class="paneles">
      <div class="panel">
        <h3>Matriz documento–término → clasificar textos</h3>
        <table aria-label="Conteos de palabras por documento y polaridad de ejemplo">
          <thead><tr><th>Documento</th><th>hola</th><th>mundo</th><th>feliz</th><th>cruel</th><th>Polaridad</th></tr></thead>
          <tbody><tr><th>D1</th><td>1</td><td>1</td><td>1</td><td>0</td><td class="positivo">Positiva</td></tr><tr><th>D2</th><td>1</td><td>1</td><td>0</td><td>1</td><td class="negativo">Negativa</td></tr></tbody>
        </table>
        <div class="flujo">
          <div class="paso"><strong>Entradas numéricas</strong><span>[1, 1, 1, 0]<br>[1, 1, 0, 1]</span></div>
          <span aria-hidden="true">→</span>
          <div class="paso"><strong>Regresión logística</strong><span>Modelo entrenado</span></div>
          <span aria-hidden="true">→</span>
          <div class="paso"><strong>Pronóstico</strong><span class="positivo">Positiva</span><span class="negativo">Negativa</span></div>
        </div>
        <p class="nota">La polaridad es la etiqueta objetivo, no una entrada. El modelo aprende con muchos textos etiquetados; estas dos frases solo ilustran el proceso.</p>
      </div>
      <div class="panel">
        <h3>Matriz de coocurrencias → relacionar palabras</h3>
        <div class="relaciones">
          <table aria-label="Documentos en los que cada par de palabras aparece junto; diagonal omitida">
            <thead><tr><th></th><th>hola</th><th>mundo</th><th>feliz</th><th>cruel</th></tr></thead>
            <tbody><tr><th>hola</th><td>—</td><td>2</td><td>1</td><td>1</td></tr><tr><th>mundo</th><td>2</td><td>—</td><td>1</td><td>1</td></tr><tr><th>feliz</th><td>1</td><td>1</td><td>—</td><td>0</td></tr><tr><th>cruel</th><td>1</td><td>1</td><td>0</td><td>—</td></tr></tbody>
          </table>
          <svg class="red" viewBox="0 0 360 300" role="img" aria-label="Dos grupos superpuestos: feliz y cruel comparten hola y mundo. No hay enlace entre feliz y cruel.">
            <path class="grupo-a" d="M20 48 Q70 0 180 45 L220 245 Q125 290 20 230 Z"/>
            <path class="grupo-b" d="M140 45 Q290 0 340 48 L340 230 Q235 290 140 245 Z"/>
            <g class="arista"><path d="M180 75 L180 220" style="stroke-width:5"/><path d="M65 150 L180 75 M65 150 L180 220 M295 150 L180 75 M295 150 L180 220"/></g>
            <circle class="nodo" cx="180" cy="75" r="39"/><circle class="nodo" cx="180" cy="220" r="43"/>
            <circle cx="65" cy="150" r="38" style="fill:var(--fondo);stroke:var(--verde);stroke-width:3"/>
            <circle cx="295" cy="150" r="38" style="fill:var(--fondo);stroke:var(--rojo);stroke-width:3"/>
            <text x="180" y="83">hola</text><text x="180" y="228">mundo</text><text x="65" y="158">feliz</text><text x="295" y="158">cruel</text>
          </svg>
        </div>
        <p class="nota">Coocurrencia = aparecer en el mismo documento; diagonal omitida. Los colores muestran los grupos D1 y D2, superpuestos; no son clústeres estimados con dos frases.</p>
      </div>
    </div>
    <p class="idea">Se contaban palabras y sus relaciones; el orden de la frase se perdía.</p>
  </div>
  <p class="fuente">Publicaciones de referencia: Salton et al. (1975), representación vectorial; Church y Hanks (1990), asociaciones; Schütze et al. (1995), clasificadores; Pang et al. (2002), polaridad.</p>
</section>
`);
