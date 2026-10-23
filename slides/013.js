diapositiva(`
<section data-layout="afirmacion" data-bloque="linea" class="s013">
  <style>
    .s013 .rejilla.c2 { gap: 48px; }
    .s013 .caja { padding: 24px 28px; }
    .s013 .caja strong { display: block; font-size: 28px; margin-bottom: 10px; }
    .s013 .caja p { margin: 0; font-size: 24px; line-height: 1.35; color: var(--texto-suave); }
    .s013 .visual { display: flex; gap: 40px; align-items: stretch; }
    .s013 .ventana { flex: 1; }
    .s013 .ventana .cuerpo { font-size: 22px; }
    .s013 .msg { font-size: 22px; }
    .s013 .aviso {
      margin-top: 16px;
      padding: 10px 16px;
      border: 2px solid var(--rojo);
      border-radius: 8px;
      color: var(--rojo);
      font-weight: 700;
      font-size: 20px;
      text-align: center;
    }
    .s013 .calendario {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 24px;
      border: var(--borde);
      border-radius: var(--radio);
      background: var(--gris-suave);
    }
    .s013 .calendario .mes {
      font-size: 28px;
      font-weight: 700;
      color: var(--texto);
    }
    .s013 .calendario .grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 6px;
      font-size: 18px;
      color: var(--texto-suave);
    }
    .s013 .calendario .grid span {
      width: 36px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
    }
    .s013 .calendario .grid span.corte {
      background: var(--acento);
      color: #fff;
      font-weight: 700;
    }
    .s013 .calendario .etiqueta {
      font-size: 20px;
      font-weight: 600;
      color: var(--acento);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }
  </style>
  <h2>2022 · Alucinación y fecha de corte: por qué se equivoca con seguridad</h2>
  <div class="evidencia">
    <div class="rejilla c2">
      <div class="columna">
        <div class="caja">
          <strong>Genera, no consulta</strong>
          <p>El modelo genera el texto más plausible, no consulta una base de datos.</p>
        </div>
        <div class="caja">
          <strong>Inventa con seguridad</strong>
          <p>Si no sabe algo, puede inventarlo con el mismo tono seguro: nombres, cifras, citas, referencias bibliográficas.</p>
        </div>
        <div class="caja">
          <strong>Fecha de corte</strong>
          <p>Además, su conocimiento termina en una fecha de corte: no sabe lo que pasó después de su entrenamiento, a menos que busque en la web.</p>
        </div>
        <div class="caja">
          <strong>Hitos siguientes</strong>
          <p>Buena parte de los hitos que siguen (búsqueda, documentos propios, investigación profunda) existen para atacar este problema.</p>
        </div>
      </div>
      <div class="visual">
        <div class="ventana">
          <div class="barra">Chat</div>
          <div class="cuerpo">
            <div class="msg usuario">¿Cuál es la referencia de la teoría de la relatividad?</div>
            <div class="msg ia">Einstein, A. (1905). "Zur Elektrodynamik bewegter Körper". <em>Annalen der Physik</em>, 322(10), 891–921.</div>
            <div class="aviso">No existe</div>
          </div>
        </div>
        <div class="calendario">
          <div class="mes">Septiembre 2021</div>
          <div class="grid">
            <span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span><span>D</span>
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
            <span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
            <span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span>
            <span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span>
            <span>29</span><span>30</span>
          </div>
          <div class="etiqueta">Fecha de corte</div>
        </div>
      </div>
    </div>
  </div>
</section>
`);
