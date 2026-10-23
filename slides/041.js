diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s041">
  <style>
    .s041 .evidencia {
      display: flex;
      gap: 64px;
      align-items: center;
      width: 100%;
    }
    .s041 .ciclo {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 0 0 380px;
    }
    .s041 .ciclo .paso {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: var(--t-rotulo);
      line-height: 1.3;
    }
    .s041 .ciclo .paso .num {
      flex: 0 0 48px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--acento);
      color: #fff;
      font-weight: 700;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .s041 .ciclo .paso .flecha {
      font-size: 32px;
      color: var(--texto-suave);
      text-align: center;
      flex: 0 0 48px;
    }
    .s041 .etiquetas {
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex: 0 0 320px;
    }
    .s041 .etiqueta {
      padding: 16px 20px;
      border-radius: var(--radio);
      font-size: var(--t-pequeno);
      line-height: 1.35;
    }
    .s041 .etiqueta.bien {
      background: var(--acento-suave);
      border: 1px solid var(--acento);
      color: var(--texto);
    }
    .s041 .etiqueta.cuidado {
      background: var(--gris-suave);
      border: 1px solid var(--rojo);
      color: var(--texto);
    }
    .s041 .etiqueta strong {
      display: block;
      font-size: var(--t-rotulo);
      margin-bottom: 6px;
    }
    .s041 .rejilla {
      flex: 1;
    }
    .s041 .caja {
      padding: 20px 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--fondo);
      line-height: 1.35;
      font-size: var(--t-pequeno);
    }
    .s041 .caja strong {
      display: block;
      font-size: var(--t-rotulo);
      margin-bottom: 8px;
      color: var(--acento);
    }
  </style>
  <h2>2025 · Vibe coding: crear software describiéndolo</h2>
  <div class="evidencia">
    <div class="ciclo">
      <div class="paso"><span class="num">1</span> Describo</div>
      <div class="flecha">↓</div>
      <div class="paso"><span class="num">2</span> Se genera</div>
      <div class="flecha">↓</div>
      <div class="paso"><span class="num">3</span> Pruebo</div>
      <div class="flecha">↓</div>
      <div class="paso"><span class="num">4</span> Pido un ajuste</div>
    </div>
    <div class="etiquetas">
      <div class="etiqueta bien">
        <strong>Bien para</strong>
        prototipos, herramientas personales
      </div>
      <div class="etiqueta cuidado">
        <strong>Cuidado con</strong>
        datos de terceros, sistemas oficiales
      </div>
    </div>
    <div class="rejilla c2">
      <div class="caja">
        <strong>Origen</strong>
        2 de febrero de 2025: Andrej Karpathy llama "vibe coding" a construir software describiendo lo que quieres, probando el resultado y pidiendo ajustes, sin leer el código.
      </div>
      <div class="caja">
        <strong>Popularidad</strong>
        Es uno de los términos que más circula en redes y publicidad.
      </div>
      <div class="caja">
        <strong>Para quien no programa</strong>
        Significa que puede pedir una herramienta pequeña ("una página que calcule la nota final con estos pesos") y obtenerla funcionando.
      </div>
      <div class="caja">
        <strong>Límite</strong>
        Sirve para prototipos y herramientas personales. Si algo va a manejar datos de otras personas o a usarse en producción, alguien con criterio técnico debe revisarlo.
      </div>
    </div>
  </div>
</section>
`);
