const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_5beb1yrd_exports = {};
__export(chunk_5beb1yrd_exports, {
  E5n: () => E5n,
  bua: () => bua,
  kua: () => kua,
  wua: () => wua
});
module.exports = __toCommonJS(chunk_5beb1yrd_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_dy7yfx4p = require("/$bunfs/root/chunk-dy7yfx4p.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var S = "https://anthropic.com/claude-code/plugin.schema.json", E5n = ["skills", "agents", "hooks", "mcp", "lsp", "output-style", "channel"];
function bua(e) {
  let n = (0, import_chunk_xcgcdx61.t6e)().shape.name.safeParse(e);
  if (!n.success) return n.error.issues[0]?.message ?? null;
  if (e.includes("/") || e.includes("\\") || e.includes("..") || e === ".") return 'Plugin name cannot contain path separators (/ or \\), ".." sequences, or be "."';
  if (!(0, import_chunk_mgntjepj.Z2n)(e) || (0, import_chunk_mgntjepj.nde)(e) || (0, import_chunk_mgntjepj.Vme)(e)) return `Plugin name cannot be "${import_chunk_mgntjepj.yX}" or start with "." \u2014 those directories are never loaded as plugin adoptions`;
  let s = (0, import_chunk_dy7yfx4p.lHt)(e);
  if (s?.severity === "error") return s.message;
  return null;
}
function wua(e) {
  let { name: n, description: a, author: s } = e, r = e.with ?? [], t = [], o = { $schema: S, name: n, version: "0.1.0", description: a ?? "TODO: describe what this plugin provides" };
  if (s) o.author = s;
  if (o.skills = ["./"], t.push({ relPath: (0, import_path.join)(".claude-plugin", "plugin.json"), contents: (0, import_chunk_w578pjby._)(o, null, 2) + `
` }), t.push({ relPath: "SKILL.md", contents: d(n) }), r.includes("skills")) t.push({ relPath: (0, import_path.join)("skills", "example", "SKILL.md"), contents: d("example") });
  if (r.includes("agents")) t.push({ relPath: (0, import_path.join)("agents", "example.md"), contents: y() });
  if (r.includes("hooks")) t.push({ relPath: (0, import_path.join)("hooks", "hooks.json"), contents: v() }, { relPath: (0, import_path.join)("hooks-handlers", "on-session-start.ts"), contents: k(), mode: 493 });
  if (r.includes("mcp") && !r.includes("channel")) t.push({ relPath: ".mcp.json", contents: x() });
  if (r.includes("lsp")) t.push({ relPath: ".lsp.json", contents: O() });
  if (r.includes("output-style")) t.push({ relPath: (0, import_path.join)("output-styles", `${n}.md`), contents: T(n) });
  if (r.includes("channel")) o.channels = [{ server: n, displayName: n }], t.push({ relPath: ".mcp.json", contents: P(n) }, { relPath: "server.ts", contents: N(n) }, { relPath: "package.json", contents: b(n) });
  return t[0].contents = (0, import_chunk_w578pjby._)(o, null, 2) + `
`, t;
}
async function kua(e, n, a) {
  let s = (0, import_path.resolve)(e);
  if (!a.force) try {
    await (0, import_promises.mkdir)((0, import_path.join)(s, ".claude-plugin"));
  } catch (t) {
    if ((0, import_chunk_jv7av99m.w)(t) === "EEXIST") return { ok: false, error: `${(0, import_path.join)(s, ".claude-plugin")} already exists. Use --force to overwrite.` };
    if ((0, import_chunk_jv7av99m.w)(t) !== "ENOENT") throw t;
  }
  let r = [];
  for (let t of n) {
    let o = (0, import_path.resolve)(s, t.relPath), l = (0, import_path.relative)(s, o);
    if (l.startsWith(".." + import_path.sep) || l === "..") return { ok: false, error: `Refusing to write outside ${s}: ${t.relPath}` };
    if (await (0, import_promises.mkdir)((0, import_path.dirname)(o), { recursive: true }), a.force) await (0, import_chunk_q7qjcthc.yr)(o, t.contents, t.mode);
    else try {
      await (0, import_promises.writeFile)(o, t.contents, { flag: "wx", mode: t.mode });
    } catch (c) {
      if ((0, import_chunk_jv7av99m.w)(c) !== "EEXIST") throw c;
      r.push(t.relPath);
    }
  }
  return { ok: true, skipped: r };
}
function d(e) {
  return `---
name: ${e}
description: TODO \u2014 describe WHEN Claude should use this. Include trigger phrases users
  might say ("do X", "set up Y", "review Z"). Be specific; this string is what Claude
  matches the user's request against.
---

# ${e}

TODO: what this skill does, and the steps Claude should take.
`;
}
function y() {
  return `---
name: example
description: TODO \u2014 when should Claude delegate to this subagent?
tools:
  - Read
  - Grep
---

TODO: system prompt for the subagent.
`;
}
function v() {
  return (0, import_chunk_w578pjby._)({ hooks: { SessionStart: [{ hooks: [{ type: "command", command: 'bun "${CLAUDE_PLUGIN_ROOT}/hooks-handlers/on-session-start.ts"' }] }] } }, null, 2) + `
`;
}
function k() {
  return `#!/usr/bin/env bun
// SessionStart hook handler. Reads the event from stdin, writes a JSON result
// to stdout. Swap "bun" for "node" or "python3" in hooks/hooks.json if your
// users' environment lacks bun.
const input = await new Response(Bun.stdin.stream()).text()
const event = JSON.parse(input)
process.stdout.write(JSON.stringify({}))
`;
}
function x() {
  return (0, import_chunk_w578pjby._)({ mcpServers: { "example-remote": { type: "http", url: "https://example.com/mcp" }, "example-local": { command: "npx", args: ["<your-mcp-server-package>"] } } }, null, 2) + `
`;
}
function O() {
  return (0, import_chunk_w578pjby._)({ example: { command: "example-language-server", args: ["--stdio"], extensionToLanguage: { ".example": "example" } } }, null, 2) + `
`;
}
function T(e) {
  return `---
name: ${e}
description: TODO \u2014 one line shown in the Output style picker in /config
force-for-plugin: true
keep-coding-instructions: true
---

TODO: the style prompt. This is appended to Claude's system prompt while the
style is active. With force-for-plugin: true, the style applies automatically
when this plugin is enabled.
`;
}
function P(e) {
  return (0, import_chunk_w578pjby._)({ mcpServers: { [e]: { command: "bun", args: ["run", "--cwd", "${CLAUDE_PLUGIN_ROOT}", "--shell=bun", "--silent", "start"] } } }, null, 2) + `
`;
}
function b(e) {
  return (0, import_chunk_w578pjby._)({ name: `claude-channel-${e}`, version: "0.1.0", type: "module", scripts: { start: "bun install --no-summary && bun server.ts" }, dependencies: { "@modelcontextprotocol/sdk": "^1.0.0" } }, null, 2) + `
`;
}
function N(e) {
  return `#!/usr/bin/env bun
/**
 * ${e} channel server \u2014 stdio MCP server implementing the channel contract.
 * See https://code.claude.com/docs/en/channels-reference.
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'

const mcp = new Server(
  { name: '${e}', version: '0.1.0' },
  {
    capabilities: {
      tools: {},
      // Required: presence of this key registers the channel notification
      // listener on Claude's side.
      experimental: { 'claude/channel': {} },
    },
    instructions:
      "Events from ${e} arrive as <channel source=\\"${e}\\" ...>. Anything " +
      "you want the sender to see must go through the reply tool \u2014 your " +
      "transcript output never reaches the channel.",
  },
)

mcp.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'reply',
      description: 'Send a message back to the ${e} channel.',
      inputSchema: {
        type: 'object',
        properties: { text: { type: 'string' } },
        required: ['text'],
      },
    },
  ],
}))

mcp.setRequestHandler(CallToolRequestSchema, async req => {
  const args = (req.params.arguments ?? {}) as Record<string, unknown>
  if (req.params.name === 'reply') {
    // TODO: deliver args.text to the external service.
    return { content: [{ type: 'text', text: 'sent' }] }
  }
  return { content: [{ type: 'text', text: 'unknown tool' }], isError: true }
})

// TODO: when the external service has an inbound event, push it to Claude:
//
//   await mcp.notification({
//     method: 'notifications/claude/channel',
//     params: {
//       content: 'the event body',
//       meta: { chat_id: '...', sender: '...' },
//     },
//   })
//
// Each meta key becomes an attribute on the <channel> tag. Keys must be
// identifiers (letters/digits/underscores) \u2014 others are silently dropped.

await mcp.connect(new StdioServerTransport())
`;
}
