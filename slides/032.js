diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s032">
  <style>
    .s032 .evidencia {
      display: flex;
      gap: 64px;
      align-items: center;
      width: 100%;
    }
    .s032 .rejilla.c2 {
      flex: 1;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
    }
    .s032 .caja {
      padding: 20px 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
      font-size: var(--t-rotulo);
    }
    .s032 .caja strong {
      display: block;
      font-size: var(--t-pequeno);
      color: var(--acento);
      margin-bottom: 8px;
    }
    .s032 .caja p {
      margin: 0;
      color: var(--texto);
    }
    .s032 .visual {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }
    .s032 .ciclo {
      position: relative;
      width: 420px;
      height: 420px;
    }
    .s032 .ciclo svg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
    }
    .s032 .ciclo .nodo {
      position: absolute;
      width: 160px;
      text-align: center;
      font-size: var(--t-pequeno);
      font-weight: 600;
      color: var(--texto);
      line-height: 1.2;
    }
    .s032 .ciclo .nodo.arriba { top: 0; left: 50%; transform: translateX(-50%); }
    .s032 .ciclo .nodo.derecha { top: 50%; right: 0; transform: translateY(-50%); }
    .s032 .ciclo .nodo.abajo { bottom: 0; left: 50%; transform: translateX(-50%); }
    .s032 .ciclo .nodo.izquierda { top: 50%; left: 0; transform: translateY(-50%); }
    .s032 .ciclo .centro {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: var(--t-pequeno);
      color: var(--acento);
      font-weight: 700;
      text-align: center;
      width: 140px;
    }
    .s032 .permiso {
      width: 360px;
      padding: 24px;
      border: 2px solid var(--acento);
      border-radius: var(--radio-grande);
      background: var(--fondo);
      font-size: var(--t-rotulo);
      line-height: 1.35;
      text-align: center;
    }
    .s032 .permiso .titulo {
      font-weight: 700;
      color: var(--acento);
      margin-bottom: 12px;
      font-size: var(--t-pequeno);
    }
    .s032 .permiso .botones {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-top: 16px;
    }
    .s032 .permiso .boton {
      padding: 8px 20px;
      border-radius: 999px;
      font-size: var(--t-pequeno);
      font-weight: 600;
    }
    .s032 .permiso .boton.si {
      background: var(--acento);
      color: #fff;
    }
    .s032 .permiso .boton.no {
      border: var(--borde);
      color: var(--texto-suave);
    }
  </style>
  <h2>2024 · Computer use: la IA mueve el mouse</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>22 oct 2024</strong>
        <p>Anthropic presenta "computer use". El modelo mira capturas de pantalla y controla el mouse y el teclado como una persona.</p>
      </div>
      <div class="caja">
        <strong>Antes</strong>
        <p>Un sistema de IA solo podía actuar en programas diseñados para conectarse con ella.</p>
      </div>
      <div class="caja">
        <strong>Ahora</strong>
        <p>Puede usar cualquier programa o sitio web pensado para personas.</p>
      </div>
      <div class="caja">
        <strong>Riesgos</strong>
        <p>Hacer clic donde no corresponde, ejecutar acciones irreversibles (enviar, pagar, borrar) y exponer contraseñas.</p>
      </div>
      <div class="caja">
        <strong>Controles</strong>
        <p>Estas herramientas piden permiso por aplicación y confirmación antes de las acciones sensibles.</p>
      </div>
    </div>
    <div class="visual">
      <div class="ciclo">
        <svg viewBox="0 0 420 420">
          <circle cx="210" cy="210" r="150" fill="none" stroke="var(--linea)" stroke-width="2" stroke-dasharray="8 6"/>
          <path d="M 210 60 A 150 150 0 0 1 360 210" fill="none" stroke="var(--acento)" stroke-width="3" marker-end="url(#flecha)"/>
          <path d="M 360 210 A 150 150 0 0 1 210 360" fill="none" stroke="var(--acento)" stroke-width="3" marker-end="url(#flecha)"/>
          <path d="M 210 360 A 150 150 0 0 1 60 210" fill="none" stroke="var(--acento)" stroke-width="3" marker-end="url(#flecha)"/>
          <path d="M 60 210 A 150 150 0 0 1 210 60" fill="none" stroke="var(--acento)" stroke-width="3" marker-end="url(#flecha)"/>
          <defs>
            <marker id="flecha" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--acento)"/>
            </marker>
          </defs>
        </svg>
        <div class="nodo arriba">Mirar la pantalla</div>
        <div class="nodo derecha">Decidir</div>
        <div class="nodo abajo">Hacer clic o escribir</div>
        <div class="nodo izquierda">Volver a mirar</div>
        <div class="centro">Ciclo</div>
      </div>
      <div class="permiso">
        <div class="titulo">¿Permitir que la IA use esta aplicación?</div>
        <div class="botones">
          <span class="boton si">Permitir</span>
          <span class="boton no">Denegar</span>
        </div>
      </div>
    </div>
  </div>
</section>
`);
