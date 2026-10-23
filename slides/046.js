diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s046">
  <style>
    .s046 .evidencia { display: flex; flex-direction: column; gap: 36px; }
    .s046 .zona-principal { display: flex; gap: 48px; align-items: stretch; flex: 1; }
    .s046 .zona-cuaderno { flex: 1; position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px; }
    .s046 .fuente { position: absolute; padding: 10px 18px; border-radius: var(--radio); background: var(--gris-suave); font-size: var(--t-pequeno); border: var(--borde); font-weight: 600; }
    .s046 .fuente.pdf { top: 0; left: 0; }
    .s046 .fuente.enlace { top: 0; right: 0; }
    .s046 .fuente.audio { bottom: 60px; left: 0; }
    .s046 .nota-renombrado { font-size: var(--t-pequeno); color: var(--texto-suave); text-align: center; }
    .s046 .zona-respuesta { width: 520px; display: flex; flex-direction: column; }
    .s046 .comparacion-inferior { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
    .s046 .comparacion-inferior .caja { text-align: center; padding: 24px 28px; }
    .s046 .uso-tipico { font-size: var(--t-pequeno); color: var(--texto-suave); text-align: center; }
  </style>
  <h2>2026 · Gemini Notebook (antes NotebookLM): investigar sobre tus fuentes</h2>
  <div class="evidencia">
    <div class="zona-principal">
      <div class="zona-cuaderno">
        <div class="fuente pdf">PDF</div>
        <div class="fuente enlace">Enlace</div>
        <div class="fuente audio">Audio</div>
        <div class="ventana" style="width: 380px; height: 300px;">
          <div class="barra">Gemini Notebook</div>
          <div class="cuerpo">
            <p class="suave">Herramienta de Google: subes tus documentos y conversas solo sobre ellos, con citas al fragmento exacto.</p>
            <p class="negrita">Artículos · Apuntes · Transcripciones · Enlaces</p>
          </div>
        </div>
        <p class="nota-renombrado">16 jul 2026: renombrada a Gemini Notebook, integrada con la app Gemini y con la búsqueda</p>
      </div>
      <div class="zona-respuesta">
        <div class="ventana" style="flex: 1;">
          <div class="barra">Respuesta con citas</div>
          <div class="cuerpo">
            <p>Según el informe, la adopción creció un 40% <span class="acento negrita">[1]</span>.</p>
            <p>La política de 2024 establece plazos de 18 meses <span class="acento negrita">[2]</span>.</p>
            <p class="suave" style="font-size: var(--t-pequeno); margin-top: 16px;">[1] Artículo 3, p. 12 · [2] Informe, § 4.2</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comparacion-inferior">
      <div class="caja">
        <p class="panel-titulo">Web abierta</p>
        <p>Deep Research: sale a buscar en la web</p>
      </div>
      <div class="caja acento">
        <p class="panel-titulo acento">Tus fuentes</p>
        <p>Cuaderno: trabaja con las fuentes que tú elegiste</p>
      </div>
    </div>
    <p class="uso-tipico">Uso típico: preparar una clase a partir de diez artículos, estudiar un informe largo o comparar documentos de política</p>
  </div>
  <p class="destacado">Deep Research sale a buscar en la web; el cuaderno trabaja con las fuentes que tú elegiste.</p>
</section>
`);
