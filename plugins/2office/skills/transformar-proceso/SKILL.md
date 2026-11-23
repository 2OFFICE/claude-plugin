---
name: transformar-proceso
description: Propone cómo debería ser un proceso ya mapeado en 2office — qué hace un agente de IA, qué un sistema, qué queda en una persona y qué se elimina — y lo guarda como proceso "to_be". Úsalo con "transforma este proceso", "cómo debería ser", "qué puede hacer un agente aquí".
argument-hint: "[nombre del proceso]"
---

# Transformar un proceso (cómo debería ser)

1. `listar_procesos` y `ver_proceso` del proceso de hoy (`as_is`).
2. Para CADA paso decide un destino y dilo con su porqué:
   - **Agente**: leer, redactar, clasificar, responder, conciliar, hacer seguimiento.
   - **Sistema**: reglas fijas, integraciones, formularios (sin IA).
   - **Persona**: juicio, relación o firma; di qué decide.
   - **Eliminar**: doble digitación, reenvíos, revisiones que no agregan valor.
   Sé honesto: no todo es agente. Estima horas al mes ahorradas solo con datos que estén en el proceso.
3. Muestra una tabla (paso · destino · cómo quedaría · horas/mes) y el primer agente que conviene crear, con la persona que lo supervisa.
4. Con un sí explícito, `guardar_proceso` con `variante: "to_be"`, nombre "<proceso> · cómo debería ser", sin los pasos eliminados (menciónalos en `dolores` como "Se elimina …"), y `confirmado: true`.
