# Integración de cambios

Estado al 22 de octubre de 2026: cambios guardados en los archivos de la presentación, sin publicación ni commit.

La presentación contiene 67 diapositivas JS consecutivas, funciona mediante el motor de carga de scripts y conserva el lienzo 1920 × 1080 y los títulos de contenido de 48 px sobre una franja oscura de ancho completo.

| Frente | Implementación |
| --- | --- |
| Minimalismo y UX | Tema compartido: jerarquía tipográfica, bordes y superficies suaves, menos sombras, pies discretos y movimiento reducido. |
| Referencias web | Comparaciones alineadas, columnas abiertas y ventanas sin superposición. |
| Estilo del PDF | Preguntas orientadoras, mecanismos visuales e ideas clave en las láminas conceptuales; sin forzar esa plantilla en ejercicios o escenas narrativas. |
| Narrativa inspirada en TEDx | Apertura común, capacidades, tres bloques de aplicación separados y cierre con una tarea del propio ámbito. |
| Calidad de respuestas | Objetivo, contexto, fuentes, formato, ejemplos, datos faltantes, comprobación y corrección iterativa. |
| CoT | Caso de electivas con restricciones y óptimo verificado. Las soluciones se identifican como ilustrativas; no se promete superioridad universal del procedimiento. |
| Vicerrectoría | Ruta sin programación, consultas con fuentes, revisión humana y práctica con cinco casos ficticios. |
| Analítica | Reproducibilidad, comparación con línea base, evaluación temporal, errores por grupos, documentación y portafolio. |
| Profesor y dirección | Actividad docente completa, alineación curricular con evidencia, revisión de propuestas y evaluación de la comprensión. |
| Delegación institucional | Objetivos y permisos, revisión de cambios, piloto con responsable y aceptación; datos en entornos autorizados. |

## Lectura y práctica

- Abrir `index.html` directamente.
- `index.html#/15`: ejemplo de restricciones y CoT.
- `index.html#/26`: calidad del pedido y del contexto.
- `index.html#/37`: actividad docente.
- `index.html#/58`: ejercicio sin programación con material y clave enlazados.
- `index.html#/67`: cierre y acción propuesta.

## Verificación realizada

- El motor ejecutó los 67 archivos y recibió una diapositiva de cada uno.
- Numeración consecutiva y estructura HTML equilibrada.
- Estilos propios acotados a cada diapositiva y enlaces locales existentes.
- Ejemplo de electivas: entre las diez ternas, ADE y BDE son las únicas viables; ADE maximiza la suma con 68.
- Las tres revisiones por perfil fueron simuladas; no constituyen pruebas con usuarios reales.

La comprobación visual en navegador y el ensayo de duración siguen pendientes. Los documentos de análisis y revisión registran las decisiones; no son notas del orador.

## Recuperación de mecanismos del PPTX

Se adaptaron las diapositivas 63–68 de la referencia a los archivos 006, 012, 013, 017, 023 y 027. El detalle de correspondencias y validación está en `docs/comparacion-pptx.md`. La presentación conserva 67 diapositivas.

## Pausas visuales incorporadas

Se incorporaron siete diapositivas de quiebre: 002, 018, 031, 036, 047, 060 y 065. Usan fondo gris oscuro, texto blanco grande y un bloque de texto desplazado hacia la derecha. No sustituyen las explicaciones: anuncian el cambio de preguntar a delegar, delegación, uso práctico, analítica, gestión académica, ventaja institucional y responsabilidad.

La numeración y las clases de ámbito se actualizaron. Se conservaron todos los contenidos anteriores. Los nombres de los archivos de diagramas permanecen estables aunque cambió el número de la diapositiva que los muestra.

La diapositiva 002 introduce la charla después de la portada con «Ya no se trata solo de preguntar.». La apertura continúa con el mapa de audiencias (003) y el propósito práctico (004).

## Separación de ámbitos

La charla conserva 67 diapositivas. El recorrido vigente es: conceptos comunes (001–035), formación en analítica (036–046), gestión de programas (047–059), vicerrectoría (060–066) y cierre (067). Se reunieron docencia y evaluación del aprendizaje. El proyecto formativo usa ventas ficticias; el comité y las consultas curriculares quedan en gestión de programas. Vicerrectoría se concentra en estrategia, pilotos, indicadores y condiciones institucionales de uso. Esta organización sustituye el hilo anterior del comité para toda la presentación.

## Encabezado del PDF de referencia

Las 59 diapositivas de contenido usan título blanco de 48 px sobre una franja gris oscura pegada a los bordes superior y laterales. La franja tiene una altura mínima de 108 px y crece cuando el título necesita dos líneas. Las preguntas, líneas de tiempo y rótulos de audiencia quedan debajo. Se redujeron los márgenes laterales del cuerpo a 60 px; portada y siete quiebres conservan su composición.

Se capturaron las 67 diapositivas con Playwright, se revisaron sus hojas de contacto y se verificó por geometría que todos los encabezados empiezan en (0, 0), ocupan 1920 px de ancho y contienen su texto sin recortes. También se inspeccionaron capturas individuales de láminas conceptuales, diagramas y casos densos. No se detectaron errores JavaScript.
