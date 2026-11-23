---
name: mapear-proceso
description: Mapea un proceso de la empresa (cómo se hace hoy) a partir de una conversación, notas o una transcripción, y lo guarda en 2office. Úsalo cuando pidan "mapea este proceso", "documenta cómo se hace X", "convierte esta entrevista en proceso".
argument-hint: "[archivo, texto o descripción del proceso]"
---

# Mapear un proceso en 2office

Trabajas con el conector `2office` (herramientas `quien_soy`, `listar_procesos`, `ver_proceso`, `guardar_proceso`, `ver_organigrama`). La redacción la haces tú; 2office guarda.

1. `quien_soy` para saber la empresa. Si no responde, pide conectar 2office (ver README del plugin).
2. Consigue la fuente: texto pegado, un archivo local o, si no hay, entrevista a la persona con UNA pregunta a la vez: qué dispara el proceso, los pasos en orden, quién hace cada uno (cargo), con qué herramienta, cuánto tarda y dónde se traba.
3. `listar_procesos` (variante `as_is`): si ya existe, propón ACTUALIZARLO con su `id`, no crear otro. Usa `ver_organigrama` para nombrar los cargos como están en la empresa.
4. Borrador sin inventar: nombre, pasos (`step` verbo + objeto, `description`, `responsible`, `system`, `duration`), dolores y sistemas. Lo que no se dijo va como "por validar".
5. Muéstralo en una tabla corta (paso · quién · con qué) y pregunta "¿Lo guardo así?".
6. Solo con un sí explícito: `guardar_proceso` con `variante: "as_is"` y `confirmado: true`.
7. Cierra con qué quedó guardado y ofrece `/2office:transformar-proceso`.

Reglas: sin jerga técnica; nada de borrar; si la herramienta pide confirmación, vuelve al paso 5.
