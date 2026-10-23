diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s051">
  <style>
    .s051 .evidencia {
      display: flex;
      gap: 64px;
      align-items: center;
      width: 100%;
    }
    .s051 .rejilla.c2 {
      flex: 1;
    }
    .s051 .caja {
      padding: 20px 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
      font-size: var(--t-rotulo);
    }
    .s051 .caja strong {
      display: block;
      font-size: var(--t-texto);
      margin-bottom: 8px;
      color: var(--texto);
    }
    .s051 .caja p {
      margin: 0;
      color: var(--texto-suave);
    }
    .s051 .visual {
      position: relative;
      width: 520px;
      height: 520px;
      flex-shrink: 0;
    }
    .s051 .nodo {
      position: absolute;
      width: 140px;
      height: 140px;
      border-radius: 50%;
      background: var(--gris-suave);
      border: 2px solid var(--linea);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: var(--t-pequeno);
      line-height: 1.2;
      padding: 10px;
    }
    .s051 .nodo strong {
      font-size: var(--t-rotulo);
      color: var(--texto);
    }
    .s051 .nodo span {
      color: var(--texto-suave);
      font-size: 18px;
    }
    .s051 .nodo.carpeta { top: 0; left: 190px; }
    .s051 .nodo.conector { top: 130px; right: 0; }
    .s051 .nodo.skills { bottom: 130px; right: 0; }
    .s051 .nodo.app { bottom: 0; left: 190px; }
    .s051 .nodo.navegador { top: 130px; left: 0; }
    .s051 .centro {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: var(--acento);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--t-titulo);
      font-weight: 700;
      z-index: 2;
    }
    .s051 .linea-conector {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
    .s051 .linea-conector line {
      stroke: var(--linea);
      stroke-width: 2;
    }
    .s051 .medidor {
      position: absolute;
      bottom: 20px;
      right: 20px;
      width: 160px;
      height: 80px;
      background: var(--gris-suave);
      border-radius: var(--radio);
      padding: 12px;
      font-size: var(--t-pequeno);
      line-height: 1.3;
    }
    .s051 .medidor strong {
      display: block;
      color: var(--acento);
      font-size: var(--t-rotulo);
    }
    .s051 .medidor .barra {
      height: 12px;
      background: var(--linea);
      border-radius: 6px;
      margin-top: 8px;
      overflow: hidden;
    }
    .s051 .medidor .barra i {
      display: block;
      height: 100%;
      width: 85%;
      background: var(--acento);
    }
  </style>
  <h2>2026 · Claude Cowork: alcance y permisos</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>Carpetas</strong>
        <p>En el escritorio, solo las que tú eliges, dentro de un entorno aislado.</p>
      </div>
      <div class="caja">
        <strong>Conectores</strong>
        <p>Drive, correo, calendario y otros servicios (MCP).</p>
      </div>
      <div class="caja">
        <strong>Skills y plugins</strong>
        <p>Procedimientos y paquetes que amplían lo que sabe hacer (plugins desde febrero de 2026).</p>
      </div>
      <div class="caja">
        <strong>Aplicaciones</strong>
        <p>Puede operar programas del escritorio, pidiendo permiso por aplicación.</p>
      </div>
      <div class="caja">
        <strong>Navegador integrado</strong>
        <p>Desde agosto de 2026.</p>
      </div>
      <div class="caja">
        <strong>Costo</strong>
        <p>Una tarea de agente consume el límite de uso mucho más rápido que una pregunta en el chat.</p>
      </div>
    </div>
    <div class="visual">
      <svg class="linea-conector" viewBox="0 0 520 520">
        <line x1="260" y1="260" x2="260" y2="70" />
        <line x1="260" y1="260" x2="450" y2="200" />
        <line x1="260" y1="260" x2="450" y2="320" />
        <line x1="260" y1="260" x2="260" y2="450" />
        <line x1="260" y1="260" x2="70" y2="200" />
      </svg>
      <div class="nodo carpeta">
        <strong>Carpetas</strong>
        <span>🔒</span>
      </div>
      <div class="nodo conector">
        <strong>Conectores</strong>
        <span>🔓</span>
      </div>
      <div class="nodo skills">
        <strong>Skills</strong>
        <span>🔓</span>
      </div>
      <div class="nodo app">
        <strong>Aplicaciones</strong>
        <span>🔒</span>
      </div>
      <div class="nodo navegador">
        <strong>Navegador</strong>
        <span>🔓</span>
      </div>
      <div class="centro">Cowork</div>
      <div class="medidor">
        <strong>Límite de uso</strong>
        <div class="barra"><i></i></div>
      </div>
    </div>
  </div>
</section>
`);
