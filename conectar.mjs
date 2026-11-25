#!/usr/bin/env node
// Conecta 2office a Claude Code y/o Codex, los que tengas instalados, con un solo comando:
//   npx -y github:2OFFICE/claude-plugin
// Claude Code: agrega el catálogo 2OFFICE/claude-plugin e instala el plugin 2office.
// Codex: agrega el servidor MCP de 2office (Codex abre el navegador para que entres a 2office y permitas el acceso).
// Sin dependencias. Si algo ya estaba, lo deja como está.
import { spawnSync } from "node:child_process";

const MCP = "https://mcp.2office.online/mcp";
const win = process.platform === "win32";
const run = (cmd, args, inherit = false) => {
  const r = spawnSync(cmd, args, { shell: win, encoding: "utf8", stdio: inherit ? "inherit" : "pipe" });
  return { ok: r.status === 0, out: `${r.stdout || ""}${r.stderr || ""}` };
};
const tiene = (cmd) => run(cmd, ["--version"]).ok;

const hecho = [];
if (tiene("claude")) {
  console.log("\n→ Claude Code encontrado");
  const m = run("claude", ["plugin", "marketplace", "add", "2OFFICE/claude-plugin"]);
  if (!m.ok && !/already|ya existe|exists/i.test(m.out)) console.log(m.out.trim());
  const i = run("claude", ["plugin", "install", "2office@2office"]);
  const ok = i.ok || /already|ya está|installed/i.test(i.out);
  console.log(ok ? "  ✓ Plugin 2office instalado. La primera vez que lo uses, Claude Code te pide entrar a 2office." : "  ✗ No se pudo instalar:\n" + i.out.trim());
  if (ok) hecho.push("Claude Code");
}
if (tiene("codex")) {
  console.log("\n→ Codex encontrado");
  const fila = run("codex", ["mcp", "list"]).out.split("\n").find((l) => /^2office\s/.test(l));
  if (fila) {
    console.log(/not logged in/i.test(fila) ? "  ✓ 2office ya estaba agregado. Falta entrar: corre «codex mcp login 2office» y pulsa «Permitir»." : "  ✓ 2office ya estaba conectado.");
    hecho.push("Codex");
  }
  else {
    console.log("  Se abre el navegador: entra a 2office y pulsa «Permitir».");
    const c = run("codex", ["mcp", "add", "2office", "--url", MCP], true);
    const quedo = /^2office\s/m.test(run("codex", ["mcp", "list"]).out);
    if (c.ok) console.log("  ✓ 2office conectado a Codex.");
    else if (quedo) console.log("  ✓ 2office agregado a Codex. Falta entrar: corre «codex mcp login 2office» y pulsa «Permitir».");
    else console.log("  ✗ No se pudo agregar 2office a Codex.");
    if (quedo) hecho.push("Codex");
  }
}
if (!hecho.length && !tiene("claude") && !tiene("codex")) {
  console.log("No encontré Claude Code ni Codex. Instala uno y vuelve a correr este comando:\n  npm i -g @anthropic-ai/claude-code   o   npm i -g @openai/codex");
  process.exit(1);
}
console.log(`\nListo${hecho.length ? ": " + hecho.join(" y ") : ""}. Pregúntale a tu IA, por ejemplo: «¿qué procesos tiene mi empresa en 2office?»`);
process.exit(hecho.length ? 0 : 1);
