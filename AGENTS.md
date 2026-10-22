# Instrucciones para agentes de IA

Presentación tipo Keynote hecha en HTML, CSS y JS puros: **IA generativa y agéntica**. Se publica con GitHub Pages desde la raíz de la rama `main`. No hay paso de compilación ni dependencias: lo que está en el repo es lo que se publica.

## Estructura

```text
index.html           cascarón: carga el tema y el motor
slides/NNN.html      una diapositiva por archivo (001.html, 002.html, ...)
theme/tokens.css     colores, tipografía, tamaños, acentos por bloque
theme/layouts.css    lienzo y plantillas (data-layout)
theme/components.css piezas reutilizables (términos, Pruébelo, rótulos, maquetas…)
engine/deck.js       carga de slides, franja de línea de tiempo, escalado y navegación
assets/              imágenes, vídeos, SVG y datos
.nojekyll            evita que GitHub Pages procese el sitio con Jekyll
```

## Reglas

1. **Numeración.** Cada diapositiva es `slides/NNN.html` con tres dígitos, consecutiva desde `001` y sin huecos. El motor carga hasta el primer número que falte; todo lo que venga después de un hueco no se muestra.
2. **Insertar, borrar o mover** una diapositiva obliga a renumerar las siguientes con `git mv`. Al insertar, renombra desde la última hacia atrás para no sobrescribir archivos. Al renumerar, cambia también la clase de ámbito `sNNN` dentro del archivo (ver regla 6). "La slide 5" es siempre `slides/005.html`.
3. **Contenido del archivo.** Cada archivo contiene un único `<section data-layout="..." data-bloque="...">`, sin `<html>`, `<head>` ni `<body>`.
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

```sh
python3 -m http.server 8000
```

Abrir `http://localhost:8000`. Abrir `index.html` con doble clic no funciona, porque el motor carga las slides con `fetch`.

Navegación: flechas, espacio, clic o deslizar. `#/5` en la URL abre la diapositiva 5.
