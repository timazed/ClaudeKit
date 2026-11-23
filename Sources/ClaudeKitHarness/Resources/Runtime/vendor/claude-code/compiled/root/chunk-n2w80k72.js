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
var chunk_n2w80k72_exports = {};
__export(chunk_n2w80k72_exports, {
  kzs: () => kzs,
  u8l: () => u8l
});
module.exports = __toCommonJS(chunk_n2w80k72_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_bqf1zbmm = require("/$bunfs/root/chunk-bqf1zbmm.js");
var import_chunk_znwscbk6 = require("/$bunfs/root/chunk-znwscbk6.js");
var import_chunk_mspgntr4 = require("/$bunfs/root/chunk-mspgntr4.js");
var import_chunk_kvavrh0f = require("/$bunfs/root/chunk-kvavrh0f.js");
var import_chunk_2hmcwh3z = require("/$bunfs/root/chunk-2hmcwh3z.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var N = { feature: "remote_control_workspace_trust", name: "Remote Control", command: "claude rc", opening: "Remote Control starts Claude Code sessions in this folder, driven from your other devices:", grant: "Sessions started here can read, edit, and execute files, and this folder's project settings (hooks, MCP servers, permission rules, helper commands) apply to them.", unattendedRemedy: "" };
function kzs() {
  return process.stdin.isTTY === true && process.stdout.isTTY === true && !(0, import_chunk_bzyb60p0.NIn)() && !(0, import_chunk_69qhefwa.Ne)((0, import_chunk_khxw3ng0.Zi)((0, import_chunk_5e3gtsn9.n_)(), "CI"));
}
async function u8l({ dir: r, isHomeDir: o, canPrompt: s, storageV5: n, asker: e = N, input: T = process.stdin, answerGraceMs: g = import_chunk_2hmcwh3z.FIe, answerTimeoutMs: h, screen: p = j() }) {
  let i = (0, import_chunk_xfj2cwfv.Ake)(r), y = (0, import_chunk_xfj2cwfv.hv)(i), S = (0, import_chunk_xfj2cwfv.Gj)(i), a = (o ? `Error: Workspace not trusted. ${i} is your home directory, and for security home-directory trust is never saved, so running \`claude\` here first won't help. Run \`${e.command}\` from a project directory instead (run \`claude\` there once to accept the trust dialog).` : `Error: Workspace not trusted. Please run \`claude\` in ${i} first to review and accept the workspace trust dialog.`) + e.unattendedRemedy;
  if (!s) return (0, import_chunk_cqa9hrgx.m)(e.feature, "cannot_ask"), { trusted: false, reason: "no_prompt", message: a };
  let d = (0, import_chunk_2yx6c1y2.wv)(r), f = !o && d !== null && !(0, import_chunk_2yx6c1y2.bv)(d, (0, import_chunk_z6pfqf6e.pn)(r)), w = ["", e.opening, `  ${y}`, "", `Quick safety check: is this a project you created or one you trust? ${e.grant}`], c = [...f ? [`This folder is part of the repository at ${(0, import_chunk_xfj2cwfv.hv)(d)}; trusting it trusts that whole repository, including when you run \`claude\` there.`] : [], ...o ? ["This is your home directory, so trust lasts for this run only and is not saved."] : [], "Security guide: https://code.claude.com/docs/en/security"], _ = `Trust ${S}?`, v = B(D(r), p, p === void 0 ? 0 : b([...w, ...c, import_chunk_2hmcwh3z.Izs, `${_} [y/N] `], p.columns));
  if (v === "too_small" && p !== void 0) return (0, import_chunk_cqa9hrgx.m)(e.feature, "terminal_too_small"), { trusted: false, reason: "no_prompt", message: L(p, i, o, e.command) };
  let E = v === "too_small" ? [] : v, W = [...w, ...E, ...c].map((R) => `${R}
`).join("");
  process.stdout.write(W);
  let k = h === void 0 ? void 0 : (0, import_chunk_cd75h1kz.Bo)(void 0, { timeoutMs: h, refTimer: true }), A = await (0, import_chunk_2hmcwh3z.xve)(_, T, { ignoreAnswersWithinMs: g, reaskPreamble: W, signal: k?.signal }).finally(() => k?.cleanup());
  if (k?.signal.aborted === true) return (0, import_chunk_cqa9hrgx.m)(e.feature, "no_answer"), { trusted: false, reason: "no_prompt", message: `
No answer in time.
${a}` };
  if (!A) return (0, import_chunk_cqa9hrgx.l)(e.feature, "declined"), { trusted: false, reason: "declined", message: `${e.name} did not start: ${i} is not trusted. Run \`${e.command}\` again to trust it.` };
  let x = await (0, import_chunk_bqf1zbmm.TKe)(r, n).catch((R) => ((0, import_chunk_w578pjby.t)(`[bridge:init] persisting workspace trust failed: ${R}`, { level: "error" }), false)), M = o || (0, import_chunk_f9x2f6cx.HQe)();
  if (!x && !M) process.stderr.write(`Couldn't save that choice to your Claude Code config, so you'll be asked again next time.
`), (0, import_chunk_cqa9hrgx.l)(e.feature, "not_saved");
  else (0, import_chunk_cqa9hrgx.u)(e.feature, { saved: x });
  return (0, import_chunk_f9x2f6cx.k2)(true), { trusted: true };
}
function D(r) {
  let o = (0, import_chunk_mspgntr4.Vjr)(r), s = (0, import_chunk_2yx6c1y2.vm)(), { allowRules: n, additionalDirectories: e, hookSources: T, commandHelperSources: g } = s ? H(o) : o, h = (c) => s ? c.filter((_) => _ !== C) : c, p = (0, import_chunk_znwscbk6.xkn)(), i = Object.keys((0, import_chunk_bzyb60p0.F_)("project", { expandVars: false }).servers), y = i.map(import_chunk_kvavrh0f.OWo).filter((c) => c.length > 0), S = h((0, import_chunk_kvavrh0f.TXn)()), a = h((0, import_chunk_kvavrh0f.vXn)()), d = [], f = (c) => d.push({ text: c, endsInList: false }), w = (c) => d.push({ text: c, endsInList: true });
  if (g.length > 0) f(`This folder runs credential helper commands (apiKeyHelper, awsAuthRefresh and the like), declared in ${(0, import_chunk_kvavrh0f.ow)(g)}`);
  if (p.length > 0) f(`This folder runs commands to mint HTTP headers (headersHelper), declared in ${(0, import_chunk_kvavrh0f.ow)(p)}`);
  if (S.length > 0) f(`This folder sets environment variables for every session here (they can redirect requests and credentials, or change which programs run), declared in ${(0, import_chunk_kvavrh0f.ow)(S)}`);
  if (T.length > 0) f(`This folder configures hooks that run commands, declared in ${(0, import_chunk_kvavrh0f.ow)(T)}`);
  if (i.length > 0) w(`Sessions started here launch, without asking, ${i.length} ${(0, import_chunk_7cfjrnwy.O)(i.length, "MCP server")} from .mcp.json files in this folder or above it: ` + (y.length > 0 ? (0, import_chunk_kvavrh0f.ow)(y, 8) : "(server names contain unprintable characters)"));
  if (n.sources.length > 0) w(`This folder pre-approves ${n.rawCount} ${(0, import_chunk_7cfjrnwy.O)(n.rawCount, "tool permission")} in ${(0, import_chunk_kvavrh0f.ow)(n.sources)}: ` + (n.rules.length > 0 ? (0, import_chunk_kvavrh0f.ow)(n.rules, 8) : "(rule names contain unprintable characters)"));
  if (e.sources.length > 0) w(`This folder adds ${e.rawCount} ${(0, import_chunk_7cfjrnwy.O)(e.rawCount, "directory", "directories")} to the workspace in ${(0, import_chunk_kvavrh0f.ow)(e.sources)}: ` + (e.dirs.length > 0 ? (0, import_chunk_kvavrh0f.ow)(e.dirs, 6) : "(directory names contain unprintable characters)"));
  if (a.length > 0) f(`This folder changes where automatic memory is written (autoMemoryDirectory), declared in ${(0, import_chunk_kvavrh0f.ow)(a)}`);
  return d.length === 0 ? [] : [...d.map((c) => ({ ...c, text: `  ${import_chunk_7r4ehpnw.xe.warning} ${c.text}` })), { text: F, endsInList: false }];
}
var F = "These will apply without asking. Only proceed if you trust this configuration.";
function j() {
  if (process.stdout.isTTY !== true) return;
  let { rows: r, columns: o } = process.stdout;
  return r > 0 && o > 0 ? { rows: r, columns: o } : { rows: 24, columns: 80, assumed: true };
}
function L(r, o, s, n) {
  let e = s ? "." : ", or run `claude` there once to review the trust dialog.";
  return r.assumed === true ? `Error: Workspace not trusted. This terminal did not report its size, so the warnings for ${o} can't be fitted to the screen. Run \`${n}\` again in a normal terminal window${e}` : `Error: Workspace not trusted. This terminal (${r.columns} columns \xD7 ${r.rows} rows) is too small to show what trusting ${o} turns on. Enlarge it and run \`${n}\` again${e}`;
}
function b(r, o) {
  let s = Math.max(1, o - 1);
  return r.reduce((n, e) => n + Math.max(1, Math.ceil(P(e) / s)), 0);
}
function P(r) {
  let o = 0;
  for (let s of r) o += s.charCodeAt(0) < 128 ? 1 : 2;
  return Math.max(o, (0, import_chunk_mgh1y10w.oe)(r));
}
var I = 3;
function z(r, o, s) {
  let n = o * Math.max(1, s - 1) - 1, e = (0, import_chunk_f64qna2j.Tt)(r, n);
  while (b([e], s) > o && n > 1) n -= Math.max(1, Math.ceil(n / 10)), e = (0, import_chunk_f64qna2j.Tt)(r, n);
  return e;
}
function B(r, o, s) {
  if (o === void 0) return r.map((a) => a.text);
  let { rows: n, columns: e } = o;
  if (s > n || o.assumed === true && r.length > 0) return "too_small";
  if (r.length === 0) return [];
  let T = r.at(-1).text, g = r.slice(0, -1).map((a) => a.endsInList ? z(a.text, I, e) : a.text), h = n - s - b([T], e), p = (a) => `  ${import_chunk_7r4ehpnw.xe.warning} ${a} more ${a === 1 ? "warning doesn't" : "warnings don't"} fit on this screen: read this folder's .claude/settings.json and .claude/settings.local.json, and the .mcp.json files here or above, before answering`, i = [], y = 0;
  for (let [a, d] of g.entries()) {
    let f = g.slice(a);
    if (y + b(f, e) <= h) {
      i.push(...f);
      break;
    }
    let w = b([p(f.length - 1)], e);
    if (y + b([d], e) + w > h) break;
    i.push(d), y += b([d], e);
  }
  if (i.length === 0) return "too_small";
  let S = g.length - i.length;
  return [...i, ...S > 0 ? [p(S)] : [], T];
}
var C = ".claude/settings.json";
function H(r) {
  let o = (n) => n.length > 0 && n.every((e) => e === C), s = (n) => n !== C;
  return { settingsFiles: r.settingsFiles, allowRules: o(r.allowRules.sources) ? { rules: [], sources: [], rawCount: 0 } : r.allowRules, additionalDirectories: o(r.additionalDirectories.sources) ? { dirs: [], sources: [], rawCount: 0 } : r.additionalDirectories, hookSources: r.hookSources.filter(s), commandHelperSources: r.commandHelperSources.filter(s) };
}
