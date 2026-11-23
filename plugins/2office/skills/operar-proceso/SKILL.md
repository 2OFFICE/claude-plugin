---
name: operar-proceso
description: Consulta la base de un proceso de 2office y le pide cosas a su agente (registrar, consultar, hacer seguimiento). Úsalo con "qué solicitudes hay", "registra una solicitud", "pídele al agente de compras", "muéstrame la base".
---

# Operar un proceso con su agente

1. `ver_base` para ver las tablas del proceso, sus filas recientes y los agentes (con su `id`).
2. Si la persona pregunta algo de lo registrado, responde con esas filas; no inventes datos.
3. Si pide registrar o hacer algo, arma el pedido con todos los datos que dio (quién, qué, cuánto, para cuándo), muéstraselo y pide su sí.
4. Con el sí, `pedir_al_agente` con `agente_id`, `pedido` y `confirmado: true`. El agente de 2office guarda las filas en su base (gasta créditos de la empresa).
5. Cuenta qué guardó y qué rechazó (y por qué). Luego `ver_base` para mostrar la fila nueva.

Nada se cambia ni se borra sin el sí de la persona.

## Cambiar o borrar filas
- Directo: `editar_fila` (solo las columnas que cambian) o `borrar_fila`, con el `_id` de `ver_base`. Muestra el antes y el después (o la fila que se borra), pide el sí y llama con `confirmado: true`.
- Por el agente: si `pedir_al_agente` devuelve `porConfirmar`, muéstrale a la persona qué cambia y qué se borra; con su sí, `confirmar_propuesta_agente` con `propuesta_id` y `confirmado: true` (vence en 15 minutos).
- Todo cambio y borrado queda en la bitácora de 2office con el antes.
