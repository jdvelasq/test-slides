diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s068">
  <style>
    .s068 .evidencia {
      display: flex;
      gap: 64px;
      align-items: stretch;
    }
    .s068 .rejilla {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      align-content: center;
    }
    .s068 .caja {
      padding: 20px 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.3;
      font-size: var(--t-rotulo);
    }
    .s068 .caja strong {
      display: block;
      font-size: var(--t-pequeno);
      color: var(--acento);
      margin-bottom: 8px;
    }
    .s068 .panel-permisos {
      width: 420px;
      flex-shrink: 0;
      border: var(--borde);
      border-radius: var(--radio-grande);
      background: var(--gris-suave);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .s068 .panel-permisos .titulo-panel {
      font-size: var(--t-pequeno);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--texto-suave);
      margin-bottom: 4px;
    }
    .s068 .fila-permiso {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      font-size: var(--t-rotulo);
    }
    .s068 .fila-permiso .etiqueta {
      color: var(--texto);
    }
    .s068 .interruptor {
      width: 56px;
      height: 30px;
      border-radius: 15px;
      position: relative;
      flex-shrink: 0;
    }
    .s068 .interruptor::after {
      content: "";
      position: absolute;
      top: 3px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      transition: left 0.2s;
    }
    .s068 .interruptor.on {
      background: var(--acento);
    }
    .s068 .interruptor.on::after {
      left: 29px;
    }
    .s068 .interruptor.off {
      background: var(--linea);
    }
    .s068 .interruptor.off::after {
      left: 3px;
    }
  </style>
  <h2>2026 · Privacidad y permisos: qué compartir y qué permitir</h2>
  <div class="evidencia">
    <div class="rejilla">
      <div class="caja">
        <strong>Datos personales</strong>
        Revisa la política de tu institución antes de subirlos a cualquier servicio en la nube.
      </div>
      <div class="caja">
        <strong>Cuentas institucionales</strong>
        Usa cuentas institucionales cuando existan: suelen garantizar que tus datos no se usan para entrenar modelos.
      </div>
      <div class="caja">
        <strong>Acceso mínimo</strong>
        Da acceso solo a las carpetas y conectores que la tarea necesita.
      </div>
      <div class="caja">
        <strong>Acciones irreversibles</strong>
        No autorices acciones irreversibles (enviar, pagar, borrar) sin revisar primero.
      </div>
      <div class="caja">
        <strong>Memoria</strong>
        Revisa y limpia la memoria de la herramienta de vez en cuando.
      </div>
      <div class="caja">
        <strong>Modelo local</strong>
        Para lo más sensible, un modelo local mantiene los datos en tu equipo.
      </div>
    </div>
    <div class="panel-permisos">
      <div class="titulo-panel">Panel de permisos</div>
      <div class="fila-permiso">
        <span class="etiqueta">Carpetas</span>
        <span class="interruptor on"></span>
      </div>
      <div class="fila-permiso">
        <span class="etiqueta">Correo</span>
        <span class="interruptor off"></span>
      </div>
      <div class="fila-permiso">
        <span class="etiqueta">Calendario</span>
        <span class="interruptor on"></span>
      </div>
      <div class="fila-permiso">
        <span class="etiqueta">Navegador</span>
        <span class="interruptor off"></span>
      </div>
      <div class="fila-permiso">
        <span class="etiqueta">Acciones irreversibles</span>
        <span class="interruptor off"></span>
      </div>
    </div>
  </div>
</section>
`);
