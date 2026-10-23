diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s020">
  <style>
    .s020 .rejilla.c3 { align-items: end; gap: 64px; }
    .s020 .modelo { display: flex; flex-direction: column; align-items: center; gap: 20px; }
    .s020 .archivo { text-align: center; }
    .s020 .archivo .bits { font-size: var(--t-titulo); font-weight: 700; color: var(--acento); }
    .s020 .archivo .nombre { font-family: var(--fuente-mono); font-size: var(--t-pequeno); color: var(--texto-suave); margin-top: 6px; }
    .s020 .archivo.q16 { min-height: 200px; }
    .s020 .archivo.q8 { min-height: 140px; }
    .s020 .archivo.q4 { min-height: 90px; }
    .s020 .metricas { width: 100%; display: flex; flex-direction: column; gap: 12px; }
    .s020 .barra { display: flex; align-items: center; gap: 12px; }
    .s020 .barra .etiqueta { font-size: var(--t-fuente); color: var(--texto-suave); width: 130px; text-align: right; flex-shrink: 0; }
    .s020 .barra .pista { flex: 1; height: 12px; background: var(--gris-suave); border-radius: 6px; overflow: hidden; }
    .s020 .barra .lleno { height: 100%; border-radius: 6px; background: var(--acento); }
    .s020 .barra.calidad .lleno { background: var(--verde); }
    .s020 .nota { font-size: var(--t-fuente); color: var(--texto-suave); text-align: center; margin-top: 16px; }
  </style>
  <h2>2023 · llama.cpp y cuantización: un modelo gigante en una laptop</h2>
  <div class="evidencia">
    <div class="rejilla c3">
      <div class="modelo">
        <div class="caja archivo q16">
          <div class="bits">16 bits</div>
          <div class="nombre">modelo.gguf</div>
        </div>
        <div class="metricas">
          <div class="barra memoria">
            <span class="etiqueta">Memoria</span>
            <div class="pista"><div class="lleno" style="width:100%"></div></div>
          </div>
          <div class="barra calidad">
            <span class="etiqueta">Calidad</span>
            <div class="pista"><div class="lleno" style="width:100%"></div></div>
          </div>
        </div>
      </div>
      <div class="modelo">
        <div class="caja archivo q8">
          <div class="bits">8 bits</div>
          <div class="nombre">modelo-Q8.gguf</div>
        </div>
        <div class="metricas">
          <div class="barra memoria">
            <span class="etiqueta">Memoria</span>
            <div class="pista"><div class="lleno" style="width:55%"></div></div>
          </div>
          <div class="barra calidad">
            <span class="etiqueta">Calidad</span>
            <div class="pista"><div class="lleno" style="width:92%"></div></div>
          </div>
        </div>
      </div>
      <div class="modelo">
        <div class="caja archivo q4">
          <div class="bits">4 bits</div>
          <div class="nombre">modelo-Q4.gguf</div>
        </div>
        <div class="metricas">
          <div class="barra memoria">
            <span class="etiqueta">Memoria</span>
            <div class="pista"><div class="lleno" style="width:30%"></div></div>
          </div>
          <div class="barra calidad">
            <span class="etiqueta">Calidad</span>
            <div class="pista"><div class="lleno" style="width:80%"></div></div>
          </div>
        </div>
      </div>
    </div>
    <p class="nota">Cuanto más pequeño el modelo y más cuantizado, más rápido y liviano, pero menos capaz.</p>
  </div>
  <div class="pie">
    <dl class="terminos">
      <div><dt>GGUF</dt> <dd>formato estándar para modelos locales.</dd></div>
      <div><dt>Q4, Q8</dt> <dd>nivel de cuantización.</dd></div>
    </dl>
  </div>
</section>
`);
