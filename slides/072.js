diapositiva(`
<section data-audiencia="vicerrectoria" data-layout="afirmacion" data-bloque="gobernanza" class="s072">
  <style>
    .s072 .semaforo { display: grid; grid-template-columns: 170px 1fr; grid-template-rows: repeat(3, 1fr); width: 100%; max-width: 1560px; height: 100%; max-height: 600px; }
    .s072 .caja-luces { grid-row: 1 / span 3; display: flex; flex-direction: column; justify-content: space-around; align-items: center; border-radius: 40px; background: #1d1d1f; padding: 20px 0; }
    .s072 .luz { width: 110px; height: 110px; border-radius: 50%; }
    .s072 .fila-s { display: grid; grid-template-columns: 200px 1fr 440px; align-items: center; gap: 32px; padding: 0 40px; border-bottom: 2px solid var(--linea); }
    .s072 .fila-s:last-child { border-bottom: 0; }
    .s072 .tipo { font-size: 38px; font-weight: 800; }
    .s072 .ejemplos { font-size: 26px; color: var(--texto-suave); line-height: 1.35; }
    .s072 .herr { font-size: 28px; font-weight: 700; }
  </style>
  <p class="rotulo-audiencia">Vicerrectoría · decisiones institucionales</p>
  <h2>La herramienta la decide el dato, no la costumbre.</h2>
  <div class="evidencia">
    <div class="semaforo">
      <div class="caja-luces">
        <div class="luz" style="background: var(--verde)"></div>
        <div class="luz" style="background: var(--amarillo)"></div>
        <div class="luz" style="background: var(--rojo)"></div>
      </div>
      <div class="fila-s"><div class="tipo" style="color: var(--verde)">Pública</div><div class="ejemplos">normativa publicada, programas de otras universidades</div><div class="herr">Herramienta habilitada para esa tarea</div></div>
      <div class="fila-s"><div class="tipo" style="color: var(--texto-suave)">Interna</div><div class="ejemplos">borradores, informes, material de curso</div><div class="herr">Servicio institucional autorizado para ese uso</div></div>
      <div class="fila-s"><div class="tipo" style="color: var(--rojo)">Sensible</div><div class="ejemplos">notas, solicitudes, actas, datos personales</div><div class="herr">Entorno aprobado, acceso restringido y datos mínimos</div></div>
    </div>
  </div>
  <p class="fuente">Si no está claro qué entorno puede usar, practique con información ficticia y consulte al área responsable.</p>
</section>
`);
