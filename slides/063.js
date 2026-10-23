diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s063">
  <style>
    .s063 .evidencia { display: flex; gap: 64px; align-items: stretch; }
    .s063 .lado-encargo { flex: 1.4; display: flex; gap: 28px; }
    .s063 .margen-partes { display: flex; flex-direction: column; justify-content: space-around; gap: 10px; min-width: 170px; }
    .s063 .margen-partes .parte {
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      padding-left: 16px;
      border-left: 2px solid var(--acento);
      line-height: 1.3;
    }
    .s063 .caja-encargo {
      flex: 1;
      padding: 32px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--gris-suave);
      font-size: var(--t-rotulo);
      line-height: 1.55;
    }
    .s063 .lado-doc { flex: 0.75; display: flex; align-items: center; justify-content: center; }
    .s063 .doc-mini {
      width: 100%;
      max-width: 340px;
      padding: 28px 32px;
      border-radius: 8px;
      background: #fff;
      color: #2b2b2e;
      box-shadow: 0 0 0 1px var(--linea);
      font-size: 18px;
      line-height: 1.4;
    }
    .s063 .doc-mini .barra-titulo { font-weight: 700; font-size: 22px; margin-bottom: 16px; }
    .s063 .doc-mini .tabla-mini { width: 100%; border-collapse: collapse; font-size: 15px; margin-bottom: 16px; }
    .s063 .doc-mini .tabla-mini th,
    .s063 .doc-mini .tabla-mini td { padding: 6px 10px; border-bottom: 1px solid var(--linea); text-align: left; }
    .s063 .doc-mini .tabla-mini th { font-weight: 700; }
    .s063 .doc-mini .conclusion { font-size: 15px; color: var(--texto-suave); line-height: 1.4; }
  </style>
  <h2>2026 · Encargo 1: investigar en la web y entregar un informe</h2>
  <div class="evidencia">
    <div class="lado-encargo">
      <div class="margen-partes">
        <div class="parte">para quién</div>
        <div class="parte">tema y alcance</div>
        <div class="parte">fuentes</div>
        <div class="parte">datos a buscar</div>
        <div class="parte">estructura</div>
        <div class="parte">si falta un dato</div>
      </div>
      <div class="caja-encargo">
        Necesito un informe para el comité académico sobre los programas de maestría en Analítica de cinco universidades de la región. Busca en sus sitios oficiales: duración, costo, modalidad, cursos de IA y perfil de egreso. Entrega un documento de Word con una tabla comparativa, un párrafo de conclusiones y la lista de enlaces consultados. Si un dato no aparece en la fuente oficial, márcalo como 'no encontrado'; no lo estimes.
      </div>
    </div>
    <div class="lado-doc">
      <div class="doc-mini">
        <div class="barra-titulo">Informe comparativo</div>
        <table class="tabla-mini">
          <tr><th>Universidad</th><th>Duración</th><th>Costo</th><th>Modalidad</th></tr>
          <tr><td>U1</td><td>2 años</td><td>—</td><td>Presencial</td></tr>
          <tr><td>U2</td><td>18 meses</td><td>—</td><td>Online</td></tr>
          <tr><td>U3</td><td>2 años</td><td>—</td><td>Híbrida</td></tr>
        </table>
        <div class="conclusion">Conclusiones y enlaces consultados</div>
      </div>
    </div>
  </div>
  <p class="destacado">dice para quién es, qué fuentes usar, qué estructura entregar y qué hacer cuando falta un dato.</p>
</section>
`);
