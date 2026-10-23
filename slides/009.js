diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s009">
  <h2>2022 · InstructGPT y RLHF: de completar texto a seguir instrucciones</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="caja">
        <strong>Antes</strong>
        <p>Se escribe "La capital de Francia" y el modelo continúa con más texto.</p>
      </div>
      <div class="caja">
        <strong>Después</strong>
        <p>Se escribe "¿Cuál es la capital de Francia?" y el modelo responde "París".</p>
      </div>
    </div>
    <p class="destacado">Limitación importante: aprendió a dar respuestas que a una persona le parecen buenas, no a verificar que sean verdaderas. De ahí vienen las alucinaciones.</p>
  </div>
  <div class="pie">
    <dl class="terminos">
      <div><dt>InstructGPT</dt> <dd>modelo ajustado con ejemplos escritos por personas y con personas que comparan y califican respuestas.</dd></div>
      <div><dt>RLHF</dt> <dd>Aprendizaje por refuerzo con retroalimentación humana.</dd></div>
    </dl>
    <div class="pruebelo"><strong>Herramienta</strong>: “Ajustar modelos con RLHF para seguir instrucciones”</div>
  </div>
  <style>
    .s009 .rejilla.c2 {
      margin-top: 48px;
    }
    .s009 .caja {
      padding: 32px 28px;
      font-size: 24px;
      line-height: 1.4;
    }
    .s009 .caja strong {
      display: block;
      margin-bottom: 16px;
      color: var(--acento);
      font-size: 28px;
    }
    .s009 .destacado {
      margin-top: 48px;
      font-size: 28px;
    }
  </style>
</section>
`);
