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
var chunk_eg09wcj1_exports = {};
__export(chunk_eg09wcj1_exports, {
  eQs: () => eQs
});
module.exports = __toCommonJS(chunk_eg09wcj1_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_873jvagp = require("/$bunfs/root/chunk-873jvagp.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function k(a) {
  if (a.length === 0) return import_chunk_d57v19zt.Re.dim("  (no skills loaded)");
  let { cells: t, widths: e } = (0, import_chunk_873jvagp.Jtr)(a), o = import_chunk_d57v19zt.Re.dim(`  ${(0, import_chunk_873jvagp.$3r)("skill", e.name)}  ${(0, import_chunk_873jvagp.$3r)("source", e.source)}  ${(0, import_chunk_873jvagp.mCn)("context", e.context)}  ${(0, import_chunk_873jvagp.mCn)("7d tokens", e.week)}  ${(0, import_chunk_873jvagp.mCn)("uses", e.uses + 1)}  last used`), c = a.map((r, f) => {
    let p = t[f], h = `  ${(0, import_chunk_873jvagp.$3r)(r.name, e.name)}  ${import_chunk_d57v19zt.Re.dim((0, import_chunk_873jvagp.$3r)(r.source, e.source))}  ${(0, import_chunk_873jvagp.mCn)(p.context, e.context)}  ${(0, import_chunk_873jvagp.mCn)(p.week, e.week)}  ${(0, import_chunk_873jvagp.mCn)(String(r.usageCount), e.uses)}\xD7  ${p.lastUsed}`;
    return r.usageCount === 0 ? import_chunk_d57v19zt.Re.yellow(h) : h;
  }).join(`
`);
  return `${o}
${c}`;
}
async function y(a) {
  let { rows: t, unusedOwned: e, unusedSynced: o, unusedFromPlugins: c, unusedFromMcp: r, unusedMcpServers: f, disusedPlugins: p, weekTokensNote: h } = await (0, import_chunk_873jvagp.U3r)((0, import_chunk_873jvagp.X7t)(a)), s = [];
  if (s.push(import_chunk_d57v19zt.Re.bold("Skills loaded this session")), s.push(""), s.push(k(t)), t.length > 0) s.push(""), s.push(import_chunk_d57v19zt.Re.dim("  context = this skill's one-line listing in the system prompt, included every turn")), s.push(import_chunk_d57v19zt.Re.dim("  (dash = not in the current listing, costs nothing; full SKILL.md loads only when it runs)")), s.push(import_chunk_d57v19zt.Re.dim(h === null ? "  7d tokens = tokens attributed to the skill over the last 7 days of sessions on this machine" : `  7d tokens: ${h}`));
  if (s.push(""), e.length > 0) s.push(import_chunk_d57v19zt.Re.yellow(`${e.length} ${(0, import_chunk_7cfjrnwy.O)(e.length, "skill")} loaded but never used. Each one adds to the system prompt every turn. Disable in /skills, or remove from .claude/skills.`));
  if (o.length > 0) s.push(import_chunk_d57v19zt.Re.yellow(`${o.length} ${(0, import_chunk_7cfjrnwy.O)(o.length, "skill")} synced from claude.ai loaded but never used. Each one adds to the system prompt every turn. Disable in /skills, or turn ${o.length === 1 ? "it" : "them"} off on claude.ai \u2014 a deleted synced copy is re-downloaded on the next sync.`));
  if (c.length > 0) {
    let n = (0, import_chunk_4smdap7r.M)(c.map((g) => g.pluginKey === void 0 ? g.source : (0, import_chunk_xcgcdx61.dh)(g.pluginKey)));
    s.push(import_chunk_d57v19zt.Re.yellow(`${c.length} plugin ${(0, import_chunk_7cfjrnwy.O)(c.length, "skill")} loaded but never used, from ${n.join(", ")}. Each one adds to the system prompt every turn. Plugin skills can't be turned off individually \u2014 disable ${n.length === 1 ? "the plugin" : "those plugins"} in /plugin.`));
  }
  if (r.length > 0) {
    let n = f.length > 0 ? `, from ${f.join(", ")}` : "", g = f.length <= 1;
    s.push(import_chunk_d57v19zt.Re.yellow(`${r.length} MCP ${(0, import_chunk_7cfjrnwy.O)(r.length, "skill")} loaded but never used${n}. Each one adds to the system prompt every turn. MCP skills live on the server, not on disk \u2014 turning ${g ? "that server" : "those servers"} off in /mcp also removes ${g ? "its" : "their"} tools.`));
  }
  if (t.length > 0 && t.every((n) => n.usageCount > 0)) s.push(import_chunk_d57v19zt.Re.green("All loaded skills have been used at least once."));
  if (p.length > 0) {
    s.push(""), s.push(import_chunk_d57v19zt.Re.bold("Plugins not used recently")), s.push("");
    for (let n of p) s.push(`  ${import_chunk_d57v19zt.Re.yellow((0, import_chunk_xcgcdx61.dh)(n.name))}  ${import_chunk_d57v19zt.Re.dim(`last used ${n.daysSinceLastUse} days ago`)}`);
    s.push(""), s.push(import_chunk_d57v19zt.Re.dim("  Manage these in /plugin"));
  }
  if (t.length === 0) (0, import_chunk_cqa9hrgx.l)("cli_skill_doctor", "no_user_skills");
  else if (h !== null) (0, import_chunk_cqa9hrgx.l)("cli_skill_doctor", "scan_policy_denied");
  else (0, import_chunk_cqa9hrgx.u)("cli_skill_doctor");
  return s.join(`
`);
}
var eQs = async (a, t) => {
  if ((0, import_chunk_wddxyb00.vs)(t.session)) return { type: "text", value: "Skill usage reports are not available on this connection." };
  try {
    let e = await y(t);
    if ((0, import_chunk_wddxyb00.vs)(t.session)) return { type: "text", value: "Skill usage reports are not available on this connection." };
    return { type: "text", value: e };
  } catch (e) {
    let o = e instanceof import_chunk_873jvagp.agt ? e.cause : e;
    if ((0, import_chunk_k449cc64.i)(o), (0, import_chunk_cqa9hrgx.m)("cli_skill_doctor", e instanceof import_chunk_873jvagp.agt ? e.featureErrorCode : "render_failed"), (0, import_chunk_wddxyb00.vs)(t.session)) return { type: "text", value: "Couldn't compute skill usage.", outcome: { kind: "failed" } };
    return { type: "text", value: `Couldn't compute skill usage. Run with --debug for details. (${(0, import_chunk_jv7av99m.d)(o)})`, outcome: { kind: "failed" } };
  }
};
