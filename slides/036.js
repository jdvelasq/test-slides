diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s036">
  <style>
    .s036 .hitos { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); width: 100%; }
    .s036 .hitos::before { content: ""; position: absolute; left: 10%; right: 10%; top: 86px; height: 4px; background: var(--linea); }
    .s036 .hito { position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0; padding: 0 16px; }
    .s036 .fecha { height: 60px; font-size: 28px; font-weight: 800; color: var(--texto-suave); }
    .s036 .hito::after { content: ""; position: absolute; top: 74px; left: 50%; width: 28px; height: 28px; margin-left: -14px; border-radius: 50%; background: var(--texto-suave); }
    .s036 .texto { margin-top: 80px; font-size: 30px; line-height: 1.3; }
    .s036 .hito.acento .fecha, .s036 .hito.acento .texto { color: var(--acento); font-weight: 800; }
    .s036 .hito.acento::after { background: var(--acento); transform: scale(1.4); }
  </style>
  <h2>Los proveedores ya diseñan productos para universidades y docentes.</h2>
  <div class="evidencia">
    <div class="hitos">
      <div class="hito"><div class="fecha">Abr. 2025</div><div class="texto">Claude for Education</div></div>
      <div class="hito"><div class="fecha">Ene. 2026</div><div class="texto">Prism: escritura científica en LaTeX</div></div>
      <div class="hito"><div class="fecha">Jun. 2026</div><div class="texto">Claude Science</div></div>
      <div class="hito"><div class="fecha">Jul. 2026</div><div class="texto">Claude for Teachers</div></div>
      <div class="hito acento"><div class="fecha">Hoy</div><div class="texto">Gemini para Educación, la licencia que ya tenemos</div></div>
    </div>
  </div>
</section>
`);
