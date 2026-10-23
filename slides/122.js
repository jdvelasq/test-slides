diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s122">
  <style>
    .s122 .ventana { width: 980px; font-size: 24px; }
    .s122 .campo { position: relative; display: flex; align-items: center; gap: 18px; margin-bottom: 16px; }
    .s122 .campo label { width: 180px; color: var(--texto-suave); }
    .s122 .campo .valor { flex: 1; padding: 10px 18px; border: 2px solid var(--linea); border-radius: 10px; }
    .s122 .campo.lleno .valor { border-color: var(--acento); }
    .s122 .num { position: absolute; left: -54px; width: 38px; height: 38px; border-radius: 50%; background: var(--acento); color: #fff; font-weight: 800; text-align: center; line-height: 38px; font-size: 22px; }
    .s122 .cursor { position: absolute; right: 60px; bottom: -36px; width: 40px; }
    .s122 .advertencia { font-size: 40px; font-weight: 800; color: var(--acento); }
  </style>
  <h2>Si una persona lo hace con mouse y teclado, un agente puede intentarlo.</h2>
  <div class="evidencia">
    <div class="ventana">
      <div class="barra"><span class="url">tramites.universidad.edu.co/solicitudes</span></div>
      <div class="cuerpo" style="padding-left: 90px">
        <p style="font-weight: 700; margin-bottom: 18px">Solicitud estudiantil</p>
        <div class="campo lleno"><span class="num">1</span><label>Programa</label><span class="valor">Maestría en Ingeniería – Analítica</span></div>
        <div class="campo lleno"><span class="num">2</span><label>Trámite</label><span class="valor">Cancelación de asignatura</span></div>
        <div class="campo lleno" style="margin-bottom: 0"><span class="num">3</span><label>Asignatura</label><span class="valor">Series de tiempo<span class="cursor-texto"></span></span>
          <svg class="cursor" viewBox="0 0 24 24"><path d="M4 2 L4 20 L9 15 L12.5 22 L15.5 20.5 L12 13.5 L19 13.5 Z" fill="#1d1d1f" stroke="#fff" stroke-width="1.5"/></svg>
        </div>
      </div>
    </div>
    <div class="columna" style="max-width: 560px; gap: 40px">
      <ul class="rotulos">
        <li><b>Oct. 2024</b> Computer use</li>
        <li><b>2025</b> Agentes que navegan sitios web y completan tareas</li>
      </ul>
      <p class="advertencia">El agente actúa con tus permisos.</p>
    </div>
  </div>
  <div class="pie">
    <dl class="terminos">
      <div><dt>Computer use / browser use</dt> <dd>el agente opera la pantalla o el navegador como una persona.</dd></div>
    </dl>
    <div class="pruebelo"><strong>ChatGPT Agent o Claude en Chrome</strong>: “Entra al sitio público del SNIES y lista los programas de maestría en analítica activos en Antioquia, con su código.”</div>
  </div>
</section>
`);
