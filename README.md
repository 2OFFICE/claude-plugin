# 2office para Claude Code

Conecta Claude Code con tu empresa en [2office](https://2office.online): mapea procesos, propón cómo deberían ser (qué hace un agente, un sistema o una persona), mira tus proyectos y tus créditos. La IA corre en tu Claude; 2office solo guarda. Lo que hace tu Claude no gasta créditos de IA de 2office.

## Un solo comando (Claude Code y Codex)

Con Node 18 o superior, en la terminal:

```
npx -y github:2OFFICE/claude-plugin
```

Detecta si tienes Claude Code, Codex o ambos y conecta 2office en cada uno (en Claude Code instala el plugin; en Codex agrega el servidor MCP). Solo te pide entrar a 2office y pulsar «Permitir».

## Instalar (2 comandos dentro de Claude Code)

```
/plugin marketplace add 2OFFICE/claude-plugin
/plugin install 2office@2office
```

La primera vez que uses una herramienta de 2office, Claude Code abre el navegador para que entres a 2office y permitas el acceso (OAuth). Solo ve tu empresa y puedes revocarlo en 2office › Conectar con Claude.

### Sin navegador (pase personal)

En 2office › Conectar con Claude › «Crear pase para Claude Code», copia el pase y:

```
claude mcp add --transport http 2office https://mcp.2office.online/mcp --header "Authorization: Bearer <tu pase>"
```

## Qué trae

- Habilidades: `/2office:mapear-proceso`, `/2office:transformar-proceso`, `/2office:operar-proceso`, `/2office:estado-proyecto`, `/2office:mis-creditos`.
- Herramientas del conector (15): lectura — `quien_soy`, `listar_procesos`, `ver_proceso`, `ver_organigrama`, `listar_proyectos`, `listar_tareas`, `buscar_conocimiento`, `leer_conocimiento`, `ver_creditos`, `ver_base`; escritura (siempre piden tu confirmación) — `guardar_proceso`, `editar_fila`, `borrar_fila` (solo filas de la base de un proceso), `confirmar_propuesta_agente`, `pedir_al_agente`.

Este repositorio contiene SOLO el plugin (sin el código de 2office).
