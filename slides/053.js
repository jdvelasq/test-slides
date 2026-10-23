diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s053">
  <style>
    .s053 .evidencia {
      display: flex;
      flex-direction: column;
      gap: 48px;
      width: 100%;
    }
    .s053 .rejilla.c2 {
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    .s053 .caja {
      padding: 24px 28px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.35;
      font-size: var(--t-rotulo);
    }
    .s053 .caja strong {
      display: block;
      font-size: var(--t-texto);
      margin-bottom: 10px;
      color: var(--texto);
    }
    .s053 .caja p {
      margin: 0;
      color: var(--texto-suave);
    }
    .s053 .linea-tiempo {
      position: static;
      margin: 0;
      padding-top: 16px;
      border-top: var(--borde);
      font-size: var(--t-fuente);
      color: var(--texto-suave);
    }
    .s053 .linea-tiempo span {
      position: relative;
      padding-top: 14px;
    }
    .s053 .linea-tiempo span::before {
      content: "";
      position: absolute;
      top: -7px;
      left: 50%;
      width: 12px;
      height: 12px;
      margin-left: -6px;
      border-radius: 50%;
      background: var(--linea);
    }
    .s053 .linea-tiempo span.on {
      color: var(--acento);
      font-weight: 700;
    }
    .s053 .linea-tiempo span.on::before {
      background: var(--acento);
      transform: scale(1.4);
    }
    .s053 .ruta-mecanismo {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 36px;
      width: 100%;
      align-items: stretch;
    }
    .s053 .nodo-mecanismo {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 14px;
      padding: 24px;
      border: var(--borde);
      border-radius: var(--radio);
      font-size: var(--t-pequeno);
      line-height: 1.35;
      min-width: 0;
    }
    .s053 .nodo-mecanismo strong {
      font-weight: 600;
    }
    .s053 .nodo-mecanismo span {
      color: var(--texto-suave);
    }
    .s053 .nodo-mecanismo.foco {
      border-color: var(--acento);
      background: var(--acento-suave);
    }
    .s053 .nodo-mecanismo.foco strong {
      color: var(--acento);
    }
    .s053 .nodo-mecanismo:not(:last-child)::after {
      content: "→";
      position: absolute;
      right: -30px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--texto-suave);
      font-size: var(--t-rotulo);
    }
    .s053 .destacado {
      font-size: 32px;
      font-weight: 600;
      line-height: 1.3;
      padding-left: 24px;
      border-left: 2px solid var(--acento);
      margin-top: 32px;
    }
  </style>
  <h2>2026 · ChatGPT Work y Workspace Agents: el equivalente de OpenAI</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>Workspace Agents</strong>
        <p>Abril de 2026: OpenAI presenta Workspace Agents, agentes compartidos dentro de un espacio de trabajo de equipo, con permisos de la organización.</p>
      </div>
      <div class="caja">
        <strong>ChatGPT Work</strong>
        <p>Julio de 2026: lanza ChatGPT Work, una superficie de ChatGPT para delegar tareas largas usando aplicaciones, archivos y flujos conectados.</p>
      </div>
      <div class="caja">
        <strong>Reemplazo</strong>
        <p>Reemplaza a ChatGPT Agent, retirado en agosto de 2026. La navegación pasa a un navegador en la nube de ChatGPT.</p>
      </div>
      <div class="caja">
        <strong>Mismo patrón</strong>
        <p>El patrón es el mismo que en Cowork: conversación, delegación prolongada, trabajo con navegador, archivos y aplicaciones, y producto terminado.</p>
      </div>
    </div>
    <div class="linea-tiempo" data-resaltar="2026"></div>
    <div class="ruta-mecanismo">
      <div class="nodo-mecanismo foco">
        <strong>Conversación</strong>
        <span>El usuario describe la tarea</span>
      </div>
      <div class="nodo-mecanismo">
        <strong>Delegación</strong>
        <span>El agente planifica y ejecuta</span>
      </div>
      <div class="nodo-mecanismo">
        <strong>Recursos</strong>
        <span>Navegador, archivos y aplicaciones</span>
      </div>
      <div class="nodo-mecanismo">
        <strong>Producto</strong>
        <span>Resultado terminado</span>
      </div>
    </div>
    <p class="destacado">El patrón se repite: conversación, delegación prolongada, trabajo con navegador, archivos y aplicaciones, y producto terminado.</p>
  </div>
</section>
`);
