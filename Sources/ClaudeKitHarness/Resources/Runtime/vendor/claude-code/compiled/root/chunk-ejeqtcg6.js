const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ejeqtcg6_exports = {};
__export(chunk_ejeqtcg6_exports, {
  H2s: () => H2s,
  eue: () => eue,
  jWr: () => jWr
});
module.exports = __toCommonJS(chunk_ejeqtcg6_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
async function eue() {
  let { env: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-48fpz2bp.js")));
  return o.CLAUDE_CODE_CHILD_SESSION ? f : void 0;
}
var f = "This setting cannot be changed from an editor started inside a Claude Code session. Start the editor outside the session and try again.", p = "Claude Design cannot be signed in from inside a Claude Code session. Start the editor outside the session and try again.";
async function jWr(o) {
  let d = [], s = 0, t = Bun.stdin.stream().getReader();
  for (; ; ) {
    let { done: r, value: n } = await t.read();
    if (r) break;
    if (s += n.byteLength, s > o) return await t.cancel(), null;
    d.push(n);
  }
  return new TextDecoder().decode(Buffer.concat(d));
}
function H2s(o, d) {
  o.command("edit-permission-rules", { hidden: true }).allowExcessArguments(false).description("Apply one permission-rule edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (s) => {
    if (process.stdin.isTTY) return (0, import_chunk_mpk68jst.Bn)("claude edit-permission-rules reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let t = await eue();
    if (t !== void 0) return (0, import_chunk_mpk68jst.Bn)(t);
    let { isPermissionRuleCompose: r, runPermissionRuleCompose: n, runPermissionRuleEdit: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xdkc6wy1.js"))), e = await jWr(2097152), c = e === null ? null : (0, import_chunk_0jve1fep.et)(e, false);
    if (c === null) return (0, import_chunk_mpk68jst.Bn)("claude edit-permission-rules: stdin is not a JSON edit");
    if (r(c)) {
      let m = await n(c);
      if (await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)(m) + `
`), m.ok) (0, import_chunk_cqa9hrgx.u)("cli_compose_permission_rule");
      else (0, import_chunk_cqa9hrgx.l)("cli_compose_permission_rule", m.refusal);
      return (0, import_chunk_mpk68jst.Lo)(0);
    }
    let a = await i(c, s);
    if (!a.ok) {
      if (a.refusal !== void 0) await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)({ ok: false, refusal: a.refusal }) + `
`);
      return (0, import_chunk_mpk68jst.Bn)(a.error);
    }
    return await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)({ ok: true, warnings: a.warnings, stored: a.stored }) + `
`), (0, import_chunk_mpk68jst.sX)();
  })), o.command("edit-memory-settings", { hidden: true }).allowExcessArguments(false).description("Apply one memory-settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (s) => {
    if (process.stdin.isTTY) return (0, import_chunk_mpk68jst.Bn)("claude edit-memory-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let t = await eue();
    if (t !== void 0) return (0, import_chunk_mpk68jst.Bn)(t);
    let { runMemorySettingsEdit: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-a6csm043.js"))), n = await jWr(4096), i = n === null ? null : (0, import_chunk_0jve1fep.et)(n, false);
    if (i === null) return (0, import_chunk_mpk68jst.Bn)("claude edit-memory-settings: stdin is not a JSON edit");
    let e = await r(i, s);
    if (!e.ok) return (0, import_chunk_mpk68jst.Bn)(e.error);
    return await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)({ ok: true, written: e.written }) + `
`), (0, import_chunk_mpk68jst.Lo)(0);
  })), o.command("edit-skill-overrides", { hidden: true }).allowExcessArguments(false).description("Apply one skill state edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (s) => {
    if (process.stdin.isTTY) return (0, import_chunk_mpk68jst.Bn)("claude edit-skill-overrides reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let t = await eue();
    if (t !== void 0) return (0, import_chunk_mpk68jst.Bn)(t);
    let { runSkillOverrideEdit: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0np3bsyj.js"))), n = await jWr(4096), i = n === null ? null : (0, import_chunk_0jve1fep.et)(n, false);
    if (i === null) return (0, import_chunk_mpk68jst.Bn)("claude edit-skill-overrides: stdin is not a JSON edit");
    let e = await r(i, (0, import_chunk_18rsj2ts.pe)(), s);
    if (!e.ok) return (0, import_chunk_mpk68jst.Bn)(e.error);
    return await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)({ ok: true, written: e.written, changed: e.changed }) + `
`), (0, import_chunk_mpk68jst.sX)();
  })), o.command("edit-sandbox-settings", { hidden: true }).allowExcessArguments(false).description("Apply one sandbox settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(async () => {
    if (process.stdin.isTTY) return (0, import_chunk_mpk68jst.Bn)("claude edit-sandbox-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let s = await eue();
    if (s !== void 0) return (0, import_chunk_mpk68jst.Bn)(s);
    let { runSandboxSettingsEdit: t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-c72tpfdv.js"))), r = await jWr(4096), n = r === null ? null : (0, import_chunk_0jve1fep.et)(r, false);
    if (n === null) return (0, import_chunk_mpk68jst.Bn)("claude edit-sandbox-settings: stdin is not a JSON edit");
    let i = await t(n);
    if (!i.ok) return (0, import_chunk_mpk68jst.Bn)(i.error);
    return await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)({ ok: true, written: i.written }) + `
`), (0, import_chunk_mpk68jst.Lo)(0);
  }), o.command("design-login", { hidden: true }).allowExcessArguments(false).description("Run the Claude Design sign-in, or report its state, as JSON lines (used by the VS Code extension)").requiredOption("--json", "Write JSON lines to stdout").option("--status", "Report whether design-system access is authorized, and exit").action(d(async (s, t) => {
    if (process.stdin.isTTY) return (0, import_chunk_mpk68jst.Bn)("claude design-login --json is run by the VS Code extension, not by hand; use /design-login in a session");
    let { isSpawnedByClaudeCodeSession: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-t9xj0tn5.js")));
    if (r()) return (0, import_chunk_mpk68jst.Bn)(p);
    let { designLoginStatus: n, runDesignLoginSignIn: i } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-j6vkhxzk.js")));
    if (t.status) return await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)(await n()) + `
`), (0, import_chunk_mpk68jst.Lo)(0);
    let e = new AbortController(), { markPrintModeSignalHandlersRegistered: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s4dyym4n.js")));
    process.once("SIGTERM", () => e.abort()), process.once("SIGINT", () => e.abort()), c();
    let a = await i({ stdin: process.stdin, write: (m) => (0, import_chunk_mpk68jst.am)(m + `
`), signal: e.signal });
    return (0, import_chunk_mpk68jst.Lo)(a.ok ? 0 : 1);
  })), o.command("edit-chrome-settings", { hidden: true }).allowExcessArguments(false).description("Apply one Claude in Chrome settings edit read as JSON from stdin (used by the VS Code extension)").requiredOption("--json", "Read the edit as JSON from stdin").action(d(async (s) => {
    if (process.stdin.isTTY) return (0, import_chunk_mpk68jst.Bn)("claude edit-chrome-settings reads one JSON edit from stdin; it is run by the VS Code extension, not by hand");
    let t = await eue();
    if (t !== void 0) return (0, import_chunk_mpk68jst.Bn)(t);
    let { runChromeSettingsEdit: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-hfhpaczj.js"))), n = await jWr(4096), i = n === null ? null : (0, import_chunk_0jve1fep.et)(n, false);
    if (i === null) return (0, import_chunk_mpk68jst.Bn)("claude edit-chrome-settings: stdin is not a JSON edit");
    let e = await r(i, s);
    if (!e.ok) return (0, import_chunk_mpk68jst.Bn)(e.error);
    return await (0, import_chunk_mpk68jst.am)((0, import_chunk_w578pjby._)({ ok: true, written: e.written }) + `
`), (0, import_chunk_mpk68jst.sX)();
  }));
}
