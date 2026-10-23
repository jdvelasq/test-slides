diapositiva(`
<section data-audiencia="comun" data-layout="afirmacion" data-bloque="leer" class="s041">
  <style>
    .s041 .ruta { height: 100%; box-sizing: border-box; font-size: 26px; padding: 26px 30px; }
    .s041 .ruta b { display: block; margin-bottom: 10px; font-size: 28px; color: var(--acento); }
    .s041 code { font-size: 23px; background: var(--fondo); padding: 1px 8px; border-radius: 6px; }
    .s041 .checklist { display: flex; justify-content: space-between; gap: 24px; width: 100%; font-size: 26px; font-weight: 600; }
    .s041 .checklist span { flex: 1; display: flex; gap: 12px; align-items: flex-start; }
    .s041 .checklist span::before { content: ""; flex: none; width: 28px; height: 28px; margin-top: 2px; border: 3px solid var(--acento); border-radius: 6px; }
  </style>
  <h2>Para empezar no necesita instalar conectores; para ampliar, revise sus permisos.</h2>
  <div class="evidencia vertical" style="gap: 40px">
    <div class="rejilla c3" style="gap: 28px">
      <div class="tarjeta ruta"><b>App de Claude</b>Subir la skill como ZIP en la sección de skills y activarla</div>
      <div class="tarjeta ruta"><b>Claude Code</b>Carpeta <code>~/.claude/skills/</code>, comando <code>/plugin</code>, o <code>claude mcp add</code> para un conector</div>
      <div class="tarjeta ruta"><b>Codex, Gemini CLI y otros</b>Su propia carpeta de skills; mismo formato <code>SKILL.md</code></div>
    </div>
    <div class="checklist">
      <span>¿Quién la publica?</span>
      <span>Leí el SKILL.md y los scripts</span>
      <span>¿Qué permisos y claves pide? ¿Cuánto cuesta?</span>
      <span>La probé con información pública</span>
      <span>Sé cómo desinstalarla</span>
    </div>
  </div>
  <div class="pie">
    <p class="criterio-aceptacion">Ruta sin programación: use primero las funciones habilitadas en su cuenta. Para instalar conectores o gestionar claves, pida apoyo técnico.</p>
    <dl class="terminos" style="max-width: 1300px">
      <div><dt>Clave de API</dt> <dd>credencial con la que un programa usa un servicio y se cobra el consumo; no es la suscripción.</dd></div>
    </dl>
  </div>
  <p class="fuente">Anthropic, centro de ayuda “Use skills in Claude”; Perplexity, documentación MCP.</p>
</section>
`);
