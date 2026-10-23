# Diagramas editables

Cada `.drawio` es el original editable del SVG con el mismo nombre. Las slides 023, 025, 034, 053 y 054 usan solamente los SVG locales; no necesitan draw.io ni conexión a internet.

Para modificar un diagrama, abra su archivo `.drawio` en draw.io. Exporte como SVG con texto y fondo blanco, recortado al contenido con margen de 12 px, y sustituya el SVG del mismo nombre. Mantenga las fuentes del sistema y evite recursos externos. Revise después la diapositiva con Playwright.

Los colores iniciales se tomaron de `theme/tokens.css`: texto, texto suave, línea, fondo y acento del bloque correspondiente. Si cambia el tema, ajuste también estos archivos y vuelva a exportar; un SVG usado como imagen no hereda las variables CSS del documento.

La exportación inicial se realizó con el renderizador oficial de draw.io (`viewer-static.min.js`), ejecutado temporalmente en Chromium. No se añadió esa biblioteca a la presentación.
