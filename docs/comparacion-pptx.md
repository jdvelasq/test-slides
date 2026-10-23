# Comparación con docs.pptx

Fuente: `/Volumes/GitHub/CONF_ia_agentica_y_generativa/docs.pptx`, 98 diapositivas. Se exportó una copia temporal a PDF mediante PowerPoint para inspeccionar las composiciones. El archivo original se cerró sin guardar cambios.

## Qué funciona mejor

Las diapositivas 63–68 desarrollan mecanismos de manera especialmente clara. Muestran qué entra, qué se transforma, qué programa ejecuta una acción y qué vuelve al modelo. En la presentación HTML, varias de estas explicaciones estaban representadas por una metáfora o un catálogo de componentes sin desarrollar el recorrido completo.

| PPTX | Aporte que se recuperó | Archivo HTML/JS actualizado |
| --- | --- | --- |
| 63 | Frase incompleta, distribución de posibles continuaciones y repetición del ciclo de generación. | `slides/006.js` |
| 65 | Separación entre la solicitud que produce el modelo, la ejecución del programa y la respuesta final. | `slides/012.js` |
| 67 | Preparación de una colección y recuperación de evidencia en cada pregunta. | `slides/013.js` |
| 66 | Aplicación, cliente MCP, servidor, servicio y descubrimiento/invocación de capacidades. | `slides/017.js` |
| 64 | Ciclo de ejecución con herramientas, resultados, permisos y condiciones de parada. | `slides/023.js` |
| 68 | Consulta progresiva de descripción, instrucciones y recursos de una skill. | `slides/027.js` |

## Adaptación

Se conservaron 60 diapositivas consecutivas y los títulos de 56 px. Los diagramas se implementaron en HTML/CSS, sin imágenes de las láminas, dependencias ni recursos de CDN. Las composiciones nuevas tienen espacio para entradas, pasos y resultados.

La distribución de tokens es ilustrativa y suma 1; no representa probabilidades medidas. Se aclara que seleccionar un token puede involucrar muestreo y que no siempre se toma el de mayor probabilidad. La llamada a herramientas usa datos ficticios para mostrar el recorrido sin presentar una afirmación normativa como resultado ejecutado. El ciclo del agente es pseudocódigo conceptual. La explicación de MCP conserva los límites de permisos. La carga de skills evita presentar una cantidad fija de palabras como propiedad universal.

## Fuentes técnicas consultadas

- [Generación de texto — Hugging Face](https://huggingface.co/docs/transformers/llm_tutorial).
- [Arquitectura — Model Context Protocol](https://github.com/modelcontextprotocol/docs/blob/main/docs/concepts/architecture.mdx).
- [Especificación — Agent Skills](https://github.com/agentskills/agentskills/blob/main/docs/specification.mdx).

## Verificación

JavaScriptCore ejecutó las 60 diapositivas. Se verificaron numeración, estructura HTML, ámbito de los estilos, destinos locales y suma de probabilidades ilustrativas. La fuente PPTX sí se inspeccionó visualmente; el HTML adaptado todavía requiere comprobación de renderizado en navegador.
