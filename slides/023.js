diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="linea" class="s023">
  <style>
    .s023 .mcp-intercambio, .s023 .mcp-transportes { display: grid; grid-template-columns: 1fr 1fr; gap: var(--hueco); width: 100%; font-size: var(--t-pequeno); }
    .s023 .mcp-intercambio p { padding-top: 24px; border-top: var(--borde); }
    .s023 .mcp-intercambio strong { display: block; margin-bottom: 12px; color: var(--acento); font-size: var(--t-rotulo); }
    .s023 .mcp-transportes { color: var(--texto-suave); }
  </style>
  <h2>MCP conecta una aplicación con servicios mediante un protocolo común.</h2>
  <div class="evidencia vertical">
<div class="ruta-mecanismo" style="--pasos: 4"><div class="nodo-mecanismo"><strong>Aplicación</strong><span>Donde trabaja la persona</span></div><div class="nodo-mecanismo"><strong>Cliente MCP</strong><span>Mantiene la conexión con el servidor</span></div><div class="nodo-mecanismo foco"><strong>Servidor MCP</strong><span>Expone capacidades disponibles</span></div><div class="nodo-mecanismo"><strong>Servicio</strong><span>Archivos, datos o funciones</span></div></div>
    <div class="mcp-intercambio"><p><strong>Descubrir</strong><span>¿Qué herramientas hay y qué argumentos reciben?</span></p><p><strong>Invocar</strong><span>Enviar una petición y recibir un resultado.</span></p></div>
    <div class="mcp-transportes"><p><strong>Proceso local</strong> · comunicación mediante entrada y salida estándar.</p><p><strong>HTTP</strong> · comunicación con un servidor local o remoto.</p></div>
  </div>
  <div class="pie"><dl class="terminos"><div><dt>MCP</dt> <dd>protocolo para conectar aplicaciones de IA con herramientas, recursos y plantillas de instrucciones.</dd></div><div class="idea-clave"><dt>Idea clave</dt> <dd>un estándar facilita la integración; no autoriza por sí solo el acceso a un sistema.</dd></div></dl><div class="pruebelo">Antes de activar un conector, identifique qué servicio alcanza, qué puede leer o modificar y qué autenticación utiliza. Habilite solo lo necesario para la tarea.</div></div>
  <p class="fuente">Adaptación de docs.pptx, diapositiva 66 · Model Context Protocol, arquitectura y transportes.</p>
</section>
`);
