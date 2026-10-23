diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s057">
  <style>
    .s057 .evidencia { display: flex; flex-direction: column; gap: 36px; }
    .s057 .contexto { font-size: var(--t-pequeno); color: var(--texto-suave); text-align: center; }
    .s057 .escena { display: flex; align-items: center; justify-content: center; gap: 48px; }
    .s057 .maquina { width: 380px; }
    .s057 .maquina .cuerpo { display: flex; flex-direction: column; gap: 14px; align-items: center; }
    .s057 .agente { display: flex; align-items: center; gap: 10px; padding: 10px 18px; border-radius: var(--radio); background: var(--acento-suave); font-size: var(--t-pequeno); font-weight: 600; }
    .s057 .agente svg { width: 28px; height: 28px; }
    .s057 .canales { display: flex; flex-direction: column; gap: 12px; }
    .s057 .canales .msg { margin-bottom: 0; font-size: var(--t-pequeno); }
    .s057 .candado { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .s057 .candado svg { width: 72px; height: 72px; }
    .s057 .candado span { font-size: var(--t-fuente); color: var(--rojo); font-weight: 600; }
    .s057 .notas { display: flex; gap: 40px; }
    .s057 .notas .caja { flex: 1; font-size: var(--t-pequeno); line-height: 1.4; }
    .s057 .notas .caja strong { display: block; margin-bottom: 6px; font-size: var(--t-rotulo); }
  </style>
  <h2>2026 · OpenClaw: los agentes que se instalan</h2>
  <div class="evidencia">
    <p class="contexto">Nació en noviembre de 2025 como proyecto abierto (con el nombre Clawdbot) y se volvió viral en 2026.</p>
    <div class="escena">
      <div class="ventana maquina">
        <div class="barra">openclaw · segundo plano</div>
        <div class="cuerpo">
          <div class="agente">
            <svg class="icono" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>
            Agente residente
          </div>
          <p class="suave" style="font-size:var(--t-pequeno);text-align:center;margin:0">Se instala en tu computadora o servidor · Recuerda entre sesiones</p>
        </div>
      </div>
      <span class="flecha acento">→</span>
      <div class="canales">
        <div class="msg usuario">Canal de mensajería A</div>
        <div class="msg usuario">Canal de mensajería B</div>
        <div class="msg usuario">Canal de mensajería C</div>
      </div>
      <div class="candado">
        <svg viewBox="0 0 24 24" fill="none" stroke="var(--rojo)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="11" width="14" height="10" rx="2"/>
          <path d="M8 11V7a4 4 0 0 1 7.5-2"/>
        </svg>
        <span>La seguridad depende de ti</span>
      </div>
    </div>
    <div class="notas">
      <div class="caja">
        <strong>Atractivo</strong>
        Control total sobre los datos y sobre el modelo que usa.
      </div>
      <div class="caja acento">
        <strong>Riesgo</strong>
        Quien lo instala es responsable de su seguridad. Un agente con acceso al sistema y a tus mensajes amplía mucho lo que puede salir mal.
      </div>
    </div>
  </div>
  <p class="destacado">Para la mayoría de las personas que no programan, un agente gestionado (Cowork, Work) es la opción más segura.</p>
</section>
`);
