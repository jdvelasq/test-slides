diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s052">
  <style>
    .s052 .descripcion {
      font-size: var(--t-texto);
      text-align: center;
      max-width: 1100px;
      margin: 0 auto 48px;
    }
    .s052 .escena {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 64px;
      width: 100%;
    }
    .s052 .escena .telefono { flex-shrink: 0; }
    .s052 .escena .ventana { flex: 1; max-width: 720px; }
    .s052 .nota-requisito {
      margin-top: 40px;
      text-align: center;
      font-size: var(--t-pequeno);
      color: var(--texto-suave);
      padding-left: 28px;
      border-left: 2px solid var(--acento);
    }
  </style>
  <h2>2026 · Dispatch: encargar desde el móvil</h2>
  <div class="evidencia vertical">
    <p class="descripcion suave">Marzo de 2026: Cowork añade Dispatch. Asignas o continúas una tarea desde el teléfono y Claude la ejecuta en tu computadora de escritorio.</p>
    <div class="escena">
      <div class="telefono">
        <div class="msg usuario">prepara el resumen semanal con los archivos de la carpeta de reportes</div>
      </div>
      <div class="flecha acento">→</div>
      <div class="ventana">
        <div class="barra">Tarea en progreso</div>
        <div class="cuerpo">
          <div class="barras">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
      </div>
    </div>
    <p class="nota-requisito">Requisito: la computadora debe estar encendida y con Cowork abierto. No es un agente que vive en la nube.</p>
  </div>
</section>
`);
