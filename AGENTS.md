# Instrucciones para agentes de IA

Presentación tipo Keynote hecha en HTML, CSS y JS puros: **IA generativa y agéntica**. Se publica con GitHub Pages desde la raíz de la rama `main`. No hay paso de compilación ni dependencias: lo que está en el repo es lo que se publica.

## Estructura

```text
index.html           cascarón: carga el tema y el motor
slides/NNN.js        una diapositiva por archivo (001.js, 002.js, ...)
theme/tokens.css     colores, tipografía, tamaños, acentos por bloque
theme/layouts.css    lienzo y plantillas (data-layout)
theme/components.css piezas reutilizables (términos, Pruébelo, rótulos, maquetas…)
engine/deck.js       carga de slides, franja de línea de tiempo, escalado y navegación
assets/              imágenes, vídeos, SVG y datos
.nojekyll            evita que GitHub Pages procese el sitio con Jekyll
```

## Reglas

1. **Numeración.** Cada diapositiva es `slides/NNN.js` con tres dígitos, de `001` a `999`. El número del archivo solo fija el orden: se permiten huecos y el motor los salta. El número que se ve en pantalla (y en `#/N`) es la posición en la presentación, no el del archivo: hoy `slides/108.js` se muestra como la 8.
2. **Insertar** una diapositiva: usa un número libre entre las dos vecinas. **Borrar** no obliga a renumerar. Si hace falta renumerar, usa `git mv`, renombra desde la última hacia atrás para no sobrescribir archivos y cambia también la clase de ámbito `sNNN` dentro del archivo (ver regla 6). Cuando el usuario diga "la slide 108", se refiere a `slides/108.js`; si hay duda entre archivo y posición en pantalla, pregunta.
3. **Formato del archivo.** Cada archivo envuelve un único `<section data-layout="..." data-bloque="...">` (sin `<html>`, `<head>` ni `<body>`) en una llamada a `diapositiva`:

   ```js
   diapositiva(`
   <section data-layout="afirmacion" data-bloque="linea" class="s005">
     …
   </section>
   `);
   ```

   El HTML va dentro de una plantilla de JavaScript (comillas invertidas): no uses comillas invertidas (`` ` ``), `${` ni barras invertidas (`\`) dentro del HTML. Se usa `.js` y no `.html` para que la presentación funcione también abriendo `index.html` con doble clic.
4. **Rutas relativas a la raíz** del sitio, porque las slides se insertan en `index.html`: `assets/foto.jpg`, nunca `/assets/foto.jpg` ni `../assets/foto.jpg`.
5. **Lienzo de 1920×1080 px.** Diseña con medidas de ese lienzo (1 pt de PowerPoint ≈ 2 px); el motor lo escala a la pantalla.
6. **Estilos propios de una slide** van en un `<style>` dentro del `section`, con todos los selectores prefijados por la clase de ámbito del archivo: `<section class="s014">` y `.s014 .campo { … }`. Sin prefijo, el estilo afecta a todas las slides. Lo que se repita en varias slides va a `components.css`.
7. **Colores y tamaños** salen de las variables de `theme/tokens.css` (`--acento`, `--texto-suave`, `--t-titulo`…). No escribas colores de acento a mano: los da `data-bloque`.
8. **El número de diapositiva lo pone el motor**; no lo escribas en las slides.
9. **No añadir** notas del orador, modo presentador, cronómetro, frameworks, bundlers ni recursos externos de CDN.

## Estilo de la presentación

- Charla tipo TEDx con formato afirmación–evidencia: el título (`h2`) es una afirmación completa de una o dos líneas; el cuerpo es evidencia visual (diagrama, maqueta, dato), no una lista de viñetas.
- Una sola idea por diapositiva, mucho espacio vacío y solo los rótulos indicados, con el texto exacto.
- Sin logotipos de empresas ni de productos: los nombres van solo como texto. Las imágenes son maquetas en HTML/SVG genéricas.
- El color de acento solo resalta lo que se está explicando.
- Preferencia del usuario: paleta Tableau 10 para acentos y categorías; colores centralizados en tokens.css.
- Todo en español.

## Bloques y color de acento (`data-bloque`)

| Valor | Bloque | Acento |
| --- | --- | --- |
| `apertura` | Apertura y cierre | gris oscuro |
| `linea` | Línea de tiempo | azul |
| `leer` | Leer, decidir e instalar | turquesa |
| `analitica` | Analítica y curso | verde |
| `gestion` | Gestión académica | naranja |
| `ventaja` | Ventaja competitiva | morado |
| `gobernanza` | Gobernanza | rojo |

## Plantillas (`data-layout`)

| Valor | Uso |
| --- | --- |
| `afirmacion` | La de casi todas: `h2` arriba, `div.evidencia` al centro (crece), `div.pie` abajo con términos y Pruébelo |
| `portada` | Primera diapositiva: `h1`, `p.subtitulo`, `div.autor` |
| `transicion` | Título muy grande centrado y una línea pequeña debajo |
| `lienzo` | Sin márgenes, para composiciones a pantalla completa |
| `seccion`, `titulo-texto`, `dos-columnas`, `imagen`, `cita`, `cifra` | Plantillas genéricas disponibles |

`div.evidencia` es una fila centrada; con la clase `vertical` apila su contenido.

## Piezas del guion

```html
<!-- Franja de línea de tiempo: el motor escribe las marcas; data-resaltar lista las que van en acento -->
<div class="linea-tiempo" data-resaltar="2023, 2024"></div>
<!-- Marcas posibles: Antes de 2017, 2017, 2020, 2022, 2023, 2024, 2025, 2026. Clase "tenue" para la portada. -->

<div class="pie">
  <!-- Recuadro de términos -->
  <dl class="terminos">
    <div><dt>Término</dt> <dd>definición en una línea.</dd></div>
  </dl>
  <!-- Recuadro Pruébelo: la palabra "Pruébelo" la pone el CSS -->
  <div class="pruebelo"><strong>Herramienta</strong>: “instrucción”</div>
</div>

<!-- Pie de fuente -->
<p class="fuente">Autor (año).</p>

<!-- Rótulos de hitos: la fecha en <b> -->
<ul class="rotulos"><li><b>2017</b> Transformer: …</li></ul>
<!-- Variantes: rotulos horizontal, rotulos hitos -->
```

Otras piezas en `components.css`: `.destacado`, `.caja` / `.caja.acento` / `.caja.llena`, `.tarjeta` / `.tarjeta.acento`, `.panel-titulo`, `.flecha`, `.chip`, `.sello`, `.punto.verde|amarillo|rojo`, `.rejilla.c2…c5`, `.fila`, `.columna`, y maquetas `.ventana` (con `.barra` y `.cuerpo`), `.terminal`, `.telefono`, `.doc`, `.barras`, `.msg`, `.icono` (SVG de trazo).

## Probar en local

Abrir `index.html` con doble clic (funciona sin servidor). También sirve un servidor local:

```sh
python3 -m http.server 8000
```

Navegación: flechas, espacio, clic o deslizar. `#/5` en la URL abre la quinta diapositiva en orden (no necesariamente `slides/005.js`).

## Revisión visual con Playwright (Codex y Claude)

Playwright para Python está disponible en `.venv`. `CLAUDE.md` importa estas mismas instrucciones.
No hace falta Node, un servidor MCP ni añadir dependencias al sitio.

```sh
# Restaurar las herramientas de desarrollo
uv pip install --python .venv/bin/python -r requirements-dev.txt
.venv/bin/python -m playwright install chromium

# Capturar diapositivas concretas o toda la presentación
.venv/bin/python tools/capturar_slides.py --slides 2,14,24
.venv/bin/python tools/capturar_slides.py --all
```

El script abre `index.html` mediante `file://`, espera a que cargue la presentación y genera PNG de 1920 × 1080 en `.artifacts/playwright/` (ignorado por Git). Use el visor de imágenes disponible para inspeccionar las capturas antes de afirmar que se revisó visualmente una diapositiva. Una captura creada no implica que su composición se haya revisado.

## Diagramas editables con draw.io

El MCP oficial `drawio` está configurado a nivel de usuario para Codex y Claude Code mediante `https://mcp.draw.io/mcp`. La conexión es remota y no depende de `.venv` ni de Node. Reinicie la sesión del cliente tras añadir el servidor para cargar sus herramientas.

Para diagramas que el usuario quiera editar visualmente, conserve el original `.drawio` y la exportación SVG en `assets/`. La presentación debe usar el archivo local exportado y seguir funcionando sin el conector. Para diagramas sencillos puede seguir usando HTML/SVG directamente. Revise la composición final con Playwright.
