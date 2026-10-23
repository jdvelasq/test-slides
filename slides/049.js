diapositiva(`
<section data-audiencia="formacion" data-layout="afirmacion" data-bloque="analitica" class="s049">
  <style>
    .s049 .lado { display: flex; flex-direction: column; gap: 16px; }
    .s049 .notebook { width: 620px; font-family: var(--fuente-mono); font-size: 20px; }
    .s049 .notebook .cuerpo { padding: 18px 22px; display: flex; flex-direction: column; gap: 8px; }
    .s049 .celda { display: flex; gap: 12px; padding: 6px 10px; border-radius: 6px; background: var(--gris-suave); }
    .s049 .celda small { color: var(--texto-suave); }
    .s049 .arbol { width: 520px; font-family: var(--fuente-mono); font-size: 28px; line-height: 1.7; }
    .s049 .arbol .cuerpo div::before { content: "▸ "; color: var(--acento); }
    .s049 .rotulos { font-size: 26px; }
  </style>
  <p class="rotulo-audiencia">Formación en analítica</p>
  <h2>Un proyecto de portafolio debe ejecutarse desde cero y explicar sus límites.</h2>
  <div class="evidencia" style="gap: 48px">
    <div class="lado">
      <div class="panel-titulo">Antes</div>
      <div class="ventana notebook">
        <div class="barra">analisis_final_v3.ipynb</div>
        <div class="cuerpo">
          <div class="celda"><small>[12]</small>df2 = df[df.x &gt; 0]</div>
          <div class="celda"><small>[7]</small>temp = df2.merge(df_old)</div>
          <div class="celda"><small>[31]</small># no borrar!!</div>
          <div class="celda"><small>[3]</small>final_v3 = temp.dropna()</div>
          <div class="celda"><small>[ ]</small>modelo.fit(final_v3)</div>
        </div>
      </div>
    </div>
    <div class="flecha acento">→</div>
    <div class="lado">
      <div class="panel-titulo acento">Después</div>
      <div class="ventana arbol">
        <div class="cuerpo">
          <div>datos/</div>
          <div>src/</div>
          <div>pruebas/</div>
          <div>pipeline.yml</div><div>README.md</div>
        </div>
      </div>
    </div>
    <ul class="rotulos" style="max-width: 440px">
      <li>Proyecto de ventas: módulos con pruebas</li>
      <li>Comparar resultados antes y después de refactorizar</li>
      <li>Documentar datos, ejecución y límites</li>
    </ul>
  </div>
<div class="pie"><div class="pruebelo">“Refactoriza este notebook sin cambiar sus resultados. Antes de editar, propone cómo comprobar equivalencia; deja un README para ejecutarlo desde cero.”</div></div>
</section>
`);
