# Instrucciones para agentes de IA

Presentación tipo Keynote hecha en HTML, CSS y JS puros. Se publica con GitHub Pages desde la raíz de la rama `main`. No hay paso de compilación ni dependencias: lo que está en el repo es lo que se publica.

## Estructura

```
index.html          cascarón: carga el tema y el motor
slides/NNN.html     una diapositiva por archivo (001.html, 002.html, ...)
theme/tokens.css    colores, tipografía, tamaños y espaciados
theme/layouts.css   lienzo y plantillas (data-layout)
theme/components.css piezas reutilizables (.fuente, .acento, código, tablas, número)
engine/deck.js      carga de slides, escalado y navegación
assets/             imágenes, vídeos, SVG y datos
.nojekyll           evita que GitHub Pages procese el sitio con Jekyll
```

## Reglas

1. **Numeración.** Cada diapositiva es `slides/NNN.html` con tres dígitos, consecutiva desde `001` y sin huecos. El motor carga hasta el primer número que falte; todo lo que venga después de un hueco no se muestra.
2. **Insertar, borrar o mover** una diapositiva obliga a renumerar las siguientes con `git mv`. Al insertar, renombra desde la última hacia atrás para no sobrescribir archivos. "La slide 5" es siempre `slides/005.html`.
3. **Contenido del archivo.** Cada archivo contiene un único `<section data-layout="...">`, sin `<html>`, `<head>` ni `<body>`.
4. **Rutas relativas a la raíz** del sitio, porque las slides se insertan en `index.html`: `assets/foto.jpg`, nunca `/assets/foto.jpg` ni `../assets/foto.jpg`. El sitio vive en `https://<usuario>.github.io/<repo>/`.
5. **Lienzo de 1920×1080 px.** Diseña con medidas de ese lienzo; el motor lo escala a la pantalla.
6. **Estilos.** Usa las variables de `theme/tokens.css` y las clases existentes. Los estilos `style="..."` solo para ajustes puntuales de una diapositiva; si algo se repite, llévalo a `layouts.css` o `components.css`.
7. **El número de diapositiva lo pone el motor**; no lo escribas en las slides.
8. **No añadir** notas del orador, modo presentador, cronómetro, frameworks, bundlers ni recursos externos de CDN.

## Plantillas

| `data-layout` | Uso | Elementos |
|---|---|---|
| `portada` | Primera diapositiva | `h1`, `p.subtitulo`, `p.autor` |
| `seccion` | Separador entre partes | `p.etiqueta`, `h2` |
| `titulo-texto` | Título y contenido | `h2`, `ul`/`p`/`pre`/`table` |
| `dos-columnas` | Comparaciones, texto + imagen | `h2`, `div.columnas` > dos `div.col` |
| `imagen` | Imagen a sangre | `img` o `figure` > `img` + `figcaption` |
| `cita` | Frase destacada | `blockquote`, `cite` |
| `cifra` | Un número protagonista | `div.cifra`, `p` |

Modificadores: `class="oscuro"` en el `section` para fondo negro. Clases útiles: `.acento`, `.suave`, `.fuente` (nota al pie).

## Estilo

- Una idea por diapositiva, poco texto y letra grande.
- Como máximo cinco o seis viñetas; si hay más, divide la diapositiva.
- El color de acento solo para lo que debe destacar.

## Probar en local

```
python3 -m http.server 8000
```

Abrir `http://localhost:8000`. Abrir `index.html` con doble clic no funciona, porque el motor carga las slides con `fetch`.

Navegación: flechas, espacio, clic o deslizar. `#/5` en la URL abre la diapositiva 5.
