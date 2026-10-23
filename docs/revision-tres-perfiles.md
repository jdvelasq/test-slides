# Revisión de la presentación desde tres perfiles

Fecha: 22 de octubre de 2026.

## Método y alcance

Tres agentes leyeron las 59 diapositivas desde perfiles simulados. Emitieron recomendaciones independientes y revisaron después los cambios relevantes para su perfil. No se entrevistó a personas reales ni se midió aprendizaje, satisfacción o desempeño de modelos. La revisión final de los agentes es de contenido, no de renderizado en navegador.

Se conservaron las 59 diapositivas, su numeración, el formato JS, el lienzo de 1920 × 1080 y los títulos generales de 56 px. Se aplicaron composiciones abiertas, con entrada, encargo y comprobación, para evitar añadir listas extensas.

## Recomendaciones y aplicación

| Perfil | Diagnóstico | Mejora aplicada | Diapositivas |
| --- | --- | --- | --- |
| Profesional de vicerrectoría académica | El vocabulario aparece antes de entender cómo empezar. | Distinción generativa/agéntica al inicio; objetivo práctico y autonomía según tarea. | 003, 004, 020 |
| Profesional de vicerrectoría académica | Programación e instalación parecen requisitos. | Instrucciones que se pueden pegar en el chat; ruta sin programación; apoyo técnico para ampliar. | 026, 035, 048, 049 |
| Profesional de vicerrectoría académica | Falta una tarea completa y verificable. | Consulta ficticia → norma → borrador con evidencia → revisión; práctica con cinco casos y clave local. | 051, 058 |
| Profesional de vicerrectoría académica | El árbol de archivos oculta el valor del entregable. | Matriz de fuentes, documento por secciones y pendientes para comité. | 053 |
| Estudiante de especialización en analítica | Un EDA vistoso no demuestra reproducibilidad. | Cifras ilustrativas rotuladas; datos sintéticos, código, cálculos y limitaciones; conservar el original. | 040 |
| Estudiante de especialización en analítica | Faltan criterios para decidir si un modelo mejora el trabajo. | Comparación con línea base, evaluación temporal, variables disponibles al decidir y errores por grupos. | 041 |
| Estudiante de especialización en analítica | El proyecto no tiene una definición de entrega profesional. | Ejecución desde cero, equivalencia tras refactorización, README, límites y operación con responsable. | 042, 043, 046 |
| Estudiante de especialización en analítica | El ejemplo de CoT puede confundirse con evidencia experimental. | Ambas soluciones se identifican como ilustraciones; verificación independiente de las diez combinaciones. | 015 |
| Profesor experimentado y director de programa | Faltaba un ejemplo docente completo. | Objetivo, problema y rúbrica → dos variantes → resolver y comprobar antes de asignar. | 037 |
| Profesor experimentado y director de programa | Encontrar texto no equivale a demostrar cumplimiento. | Pedir documento y apartado; admitir evidencia no encontrada; el comité determina cumplimiento. | 052, 057 |
| Profesor experimentado y director de programa | Delegar no mostraba fronteras y cambios observables. | Borradores sin envío/publicación y revisión de secciones modificadas. | 019, 055 |
| Profesor experimentado y director de programa | La evaluación debe demostrar comprensión. | Declaración de uso, comprobación, defensa de una decisión y resolución de una variante. | 045 |
| Los tres | Local o institucional no equivale automáticamente a autorizado. | Confirmar entorno, conexiones, accesos, copias y alcance permitido; practicar con datos ficticios. | 004, 010, 048, 050, 066 |
| Los tres | Se propone escalar sin una prueba de valor. | Tarea y responsable → fuentes y permisos → casos conocidos → comparación → reutilización. Indicadores propuestos, sin resultados inventados. | 063, 064 |

## Material de práctica

- `assets/ejercicio-consultas.txt`: regla inventada, cinco consultas y encargo copiable.
- `assets/ejercicio-consultas-clave.txt`: respuestas esperadas, criterio de aceptación y un caso adicional de prioridad entre reglas.
- La diapositiva 058 enlaza los dos archivos. El ejercicio no usa normativa real ni datos personales.

## Decisiones de edición

No se reordenó la línea de tiempo: se adelantó una definición práctica en la diapositiva 004. La distinción detallada conserva su ubicación. Se sustituyeron las tablas de licencias y límites gratuitos por criterios de elección y comprobación de acceso, pues la configuración institucional no está acreditada en el repositorio. No se añadió equipamiento como requisito para empezar.

La meta de portafolio de la diapositiva 046 está identificada como propuesta de práctica, no como compromiso verificado del curso. Los ejemplos de análisis no se presentan como resultados de un conjunto de datos ejecutado. La comparación de CoT no se presenta como una prueba real entre modelos.

## Verificación

Los tres agentes confirmaron que los cambios revisados resuelven las barreras de contenido identificadas para sus perfiles. Se comprobaron estructura, numeración, ámbitos de estilos, destinos de enlaces locales y coherencia del ejercicio. La revisión visual en navegador y la validación con asistentes reales siguen pendientes.

## Ajuste posterior: calidad de las respuestas

La revisión por perfiles no profundizó lo suficiente en la formulación del pedido. Se reforzaron cinco diapositivas:

- 007: aportar fechas y enlaces, o pedir aclaración cuando faltan, en vez de esperar que el modelo los complete.
- 013: seleccionar fuentes pertinentes, legibles y con versión identificada; comprobar las citas.
- 026: comparación de un pedido abierto y uno con objetivo, contexto, fuentes, formato, ejemplo y tratamiento de faltantes. Los ejemplos son instrucciones, no resultados medidos de modelos.
- 027: plantilla y ejemplo aprobado como referencias de estructura y nivel de detalle, sin copiar hechos del ejemplo.
- 058: corregir un error concreto contra una regla y volver a probar todos los casos.

También se explicita que más texto no asegura más calidad y que la capacidad del modelo y sus herramientas condicionan la resolución. Fuentes: Anthropic, https://www.anthropic.com/research/effective-context-engineering-for-ai-agents y https://claude.com/resources/articles/best-practices-for-prompt-engineering .
