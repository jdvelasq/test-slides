diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s033">
  <style>
    .s033 .carga-skills { width: 100%; display: flex; flex-direction: column; gap: 24px; }
    .s033 .carga { display: grid; grid-template-columns: 240px 1fr 150px; gap: 36px; align-items: center; padding: 24px 28px; background: var(--gris-suave); border-left: 2px solid var(--linea); }
    .s033 .carga.foco { background: var(--acento-suave); border-color: var(--acento); }
    .s033 .carga h3 { font-size: var(--t-texto); }
    .s033 .carga p { margin-top: 10px; font-size: var(--t-pequeno); color: var(--texto-suave); }
    .s033 .chip { text-align: center; }
  </style>
  <h2>Una skill se consulta por partes, según lo que la tarea necesita.</h2>
  <div class="evidencia vertical">
    <div class="carga-skills">
      <div class="carga"><div class="panel-titulo">Al descubrirla</div><div><h3>Nombre y descripción</h3><p>El agente identifica para qué sirve: “preparar borradores de actas de comité”.</p></div><span class="chip">Identificar</span></div>
      <div class="carga foco"><div class="panel-titulo acento">Al activarla</div><div><h3>Instrucciones de SKILL.md</h3><p>Lee cómo separar acuerdos, responsables, plazos y datos que faltan.</p></div><span class="chip acento">Instruir</span></div>
      <div class="carga"><div class="panel-titulo">Cuando hace falta</div><div><h3>Plantillas, referencias y scripts</h3><p>Consulta el ejemplo aprobado o ejecuta una comprobación si está permitida.</p></div><span class="chip">Apoyar</span></div>
    </div>
  </div>
  <div class="pie"><dl class="terminos"><div><dt>Skill</dt> <dd>instrucción reutilizable con recursos de apoyo que el agente consulta para una tarea.</dd></div><div class="idea-clave"><dt>Idea clave</dt> <dd>la carga progresiva evita incorporar todos los recursos a cada conversación.</dd></div></dl><div class="pruebelo">Con una skill habilitada para actas: “Usa la plantilla y el ejemplo aprobado con esta transcripción ficticia. No copies sus nombres ni acuerdos; marca fechas o responsables faltantes”.</div></div>
  <p class="fuente">Adaptación de docs.pptx, diapositiva 68 · Agent Skills, especificación de carga progresiva.</p>
</section>
`);
