# 2office for Claude / 2office para Claude

**EN** — Connects Claude to your company in [2office](https://2office.online): map a process, propose how it should work (what an AI agent, a system or a person does), operate its table with its agent, and check projects and credits. Claude does the thinking; 2office only stores what you confirm.

- **Connects to:** one remote MCP server, `https://mcp.2office.online/mcp` (HTTPS, OAuth 2.1 sign-in in your browser). No other network calls, no scripts, no local code.
- **Data it reads/writes:** only your own company's processes, org chart, projects, tasks, process tables and credit balance. Saving or editing always asks for your confirmation first. There is no delete-company tool.
- **Privacy policy:** https://2office.online/privacidad/ · **Support:** hola@2office.online
- **Account needed:** a free 2office account (https://app.2office.online/registro).

**ES** — Conecta Claude con tu empresa en 2office: mapea procesos, propón cómo deberían ser, opera la base de un proceso con su agente y mira tus proyectos y créditos. La IA corre en tu Claude; 2office solo guarda lo que confirmas. Solo ve tu empresa; puedes revocar el acceso en 2office › Conectar con Claude.

Skills / Habilidades: `mapear-proceso`, `transformar-proceso`, `operar-proceso`, `estado-proyecto`, `mis-creditos`.

Version pinning: the plugin ships only markdown skills and one `.mcp.json` pointing at the HTTPS server above (override with `TWOOFFICE_MCP_URL` for a test server).

Install / Instalar: `/plugin install 2office --marketplace Samuelbf2001/2office-claude-plugin`
