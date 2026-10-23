# Análisis del estilo de presentación de Juan David Velásquez-Henao

Referencia: `docs.pdf`, «Origen y Evolución de la Analítica Predictiva», 68 páginas, lienzo 1920 × 1080. Revisión del texto y de las composiciones visuales de todas las páginas. Este análisis describe la estructura didáctica y visual; no verifica la exactitud histórica ni las cifras de los casos.

## Hallazgo principal

El rasgo más reconocible es la explicación guiada por preguntas. La presentación tiene una apariencia sobria, pero conserva desarrollo conceptual: definición, mecanismo, evidencia y consecuencia. Simplificar los adornos es compatible con ese estilo; reducir la explicación a rótulos puede eliminar su valor pedagógico.

## Estructura didáctica recurrente

1. Un título sitúa el tema o hito histórico.
2. Una pregunta breve explica qué problema intenta resolver.
3. Una definición establece el significado del concepto.
4. Un diagrama, caso o fragmento técnico muestra su funcionamiento.
5. Un recuadro «Idea clave» formula qué debe recordar el asistente.

Ejemplos: perceptrón (p. 19), CART (p. 31), CRISP-DM (p. 39), AlexNet (p. 56), modelos multimodales (p. 65).

No todas las páginas usan esta plantilla. Las transiciones y los casos tienen composiciones distintas; esa variación marca el ritmo.

## La historia está organizada por problemas y límites

Las páginas de transición no solo anuncian otra sección:

- P. 18: después de programar reglas, plantea si la máquina puede aprenderlas.
- P. 24: después de mostrar aprendizaje, introduce sus límites.
- P. 26: contrapone las expectativas con los resultados para abrir el invierno de la IA.
- P. 34: conecta la enseñanza explícita con el aprendizaje a partir de datos.
- P. 41: introduce la necesidad de escala.
- P. 63: pasa de construir modelos a usar modelos para ayudar a construirlos.

La secuencia construye una razón para aprender el concepto siguiente. La cronología sirve a esa explicación, aunque en ocasiones hay retrocesos temporales al agrupar temas.

## Los ejemplos vinculan mecanismo y decisión

Los casos de Target (p. 4), Netflix (p. 38), Danone (p. 48), UPS (p. 55), American Express (p. 59) y Danske Bank (p. 61) articulan una pregunta práctica y una decisión. Varios separan problema, datos, predicción, decisión y resultado.

El diagrama de MapReduce (p. 43) muestra transformaciones intermedias. AlexNet (p. 56) relaciona datos, arquitectura y cómputo. La asistencia al modelado (p. 66) indica qué aporta la IA en cada etapa. Estas páginas enseñan relaciones y mecanismos, además de nombrar herramientas.

## Lenguaje visual

- Fondo blanco, encabezado oscuro y tipografía estrecha.
- Pregunta gris a la izquierda e idea clave en azul claro a la derecha en numerosas páginas.
- Definición en una columna lateral; evidencia con más espacio en el centro y a la derecha.
- Color selectivo para distinguir etapas, conexiones o categorías.
- Transiciones de fondo gris, con frases grandes y espacio libre.
- Mezcla de diagramas propios, imágenes históricas, capturas, tablas y fórmulas.

La composición puede ser asimétrica. El espacio vacío separa funciones, sin obligar a que cada pieza esté encerrada en una tarjeta.

## Fortalezas que conviene conservar

- Explicar para qué nace una técnica antes de definirla.
- Separar pregunta, explicación e idea clave.
- Mostrar mecanismos y pasos intermedios cuando sean necesarios.
- Reconocer límites y usarlos para construir la transición siguiente.
- Conectar el concepto con una decisión observable.
- Cerrar con una síntesis integradora, como en p. 67.

## Aspectos que conviene depurar

- Algunas definiciones e ideas clave se repiten; pueden cumplir funciones diferentes: definición = qué es, idea clave = qué cambia o permite hacer.
- El texto de páginas como 3, 47, 50 y 52 resulta denso para proyección. Conviene dividir o simplificar la evidencia, manteniendo la explicación necesaria.
- Las figuras procedentes de fuentes diversas presentan tamaños y legibilidad desiguales. Redibujar los diagramas esenciales permitiría unificar tipografía y trazos.
- Los casos con cifras necesitan una fuente fácilmente identificable para su comprobación; este análisis no valida esos resultados.
- Una gran cantidad de hitos puede dificultar reconocer los cambios principales. Las transiciones y la síntesis pueden explicitar qué hitos son decisivos.

## Consecuencias para «IA generativa y agéntica»

La revisión anterior mejoró aspectos operativos y visuales, pero dio demasiado protagonismo a herramientas, recomendaciones y criterios de comprobación sin desarrollar siempre los mecanismos.

Para recuperar este estilo, cada concepto importante debería responder:

- ¿Qué dificultad concreta encuentra el usuario?
- ¿Qué técnica o capacidad responde a esa dificultad?
- ¿Cómo cambia el proceso, con un ejemplo visible?
- ¿Cuál es su límite y qué debe comprobar la persona?
- ¿Qué idea merece recordar?

Aplicaciones concretas:

| Tema | Pregunta que organiza la explicación | Evidencia que necesita |
| --- | --- | --- |
| Calidad del prompt | ¿Por qué el mismo modelo puede entregar algo genérico o algo útil? | Un pedido abierto y otro con objetivo, datos, criterios y formato; señalar qué ambigüedades se resuelven. |
| Ejemplos de salida | ¿Cómo comunicar un criterio difícil de describir? | Una clasificación o un formato deseado, un ejemplo y su aplicación a un caso nuevo. |
| Contexto y documentos | ¿Qué información necesita realmente el modelo? | Mostrar una fuente pertinente, un dato faltante y cómo cambia el alcance de la respuesta. |
| Razonamiento / CoT | ¿Por qué algunas tareas necesitan comprobar varios pasos y restricciones? | Problema, alternativas, descartes y comprobación; separar ilustraciones de resultados medidos. |
| Herramientas | ¿Qué ocurre si la respuesta depende de información que el modelo no tiene? | Consulta o cálculo externo, resultado recuperado e incorporación a la respuesta. |
| Agentes | ¿Qué cambia cuando el sistema puede actuar y observar resultados? | Objetivo → acción → observación → corrección → entrega, con puntos claros de autorización. |
| Revisión iterativa | ¿Cómo mejorar una primera respuesta que incumple un criterio? | Error concreto → instrucción de corrección → nueva comprobación, incluyendo casos que antes acertaba. |

El formato afirmación–evidencia puede mantenerse: el título formula la conclusión, una pregunta breve orienta la lectura y el diagrama demuestra el mecanismo. La apariencia puede seguir siendo minimalista sin reducir el contenido a consejos generales.

El análisis inicial no modificó diapositivas. En la integración posterior se incorporaron preguntas orientadoras e ideas clave en las diapositivas 005, 009, 012, 014, 017, 019, 024, 025 y 026. La 015 también explicita la pregunta y la conclusión del caso. Se mantuvieron las composiciones propias de aperturas, ejercicios y cierre.
