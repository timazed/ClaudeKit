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
var chunk_1t9jfpfm_exports = {};
__export(chunk_1t9jfpfm_exports, {
  a2s: () => a2s,
  yIt: () => yIt
});
module.exports = __toCommonJS(chunk_1t9jfpfm_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var N = /^([0-9]{1,6})\.([0-9]{1,6})\.([0-9]{1,6})(?=-|$)/;
function b({ ownVersion: e, announced: r, now: f, requiredMaximumVersion: o, updatesDisabled: V, entrypoint: m }) {
  if (m !== "cli" && m !== "sdk-cli") return null;
  let u = N.exec(e);
  if (!u) return null;
  let n = r.claude_code.split(".").map(Number).join(".");
  if (!(0, import_chunk_tvttgr51._I)(u.slice(1).map(Number).join("."), n)) return null;
  let a = Number(r.date.slice(0, 4)), c = Number(r.date.slice(5, 7)) - 1, l = Number(r.date.slice(8, 10)), d = new Date(Date.UTC(a, c, l)).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }), p = f < Date.UTC(a, c, l, 17) ? "upcoming" : "past", i = o ? (0, import_chunk_tvttgr51.$A)(o)?.version : void 0, y = i && (0, import_chunk_tvttgr51._I)(i, n) ? "Ask your admin to raise requiredMaximumVersion." : V || i ? `Ask your IT team for ${n} or later.` : "Run 'claude update'.", g = `Claude Code ${n} or later is required for your organization. You're on ${e}. ${y}`;
  return { minimumVersion: n, date: d, state: p, sentence: p === "upcoming" ? `From ${d}, ${g}` : g };
}
function yIt() {
  try {
    let e = (0, import_chunk_2nv4wrez.rEs)();
    if (!e) return null;
    return b({ ownVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, announced: e, now: Date.now(), requiredMaximumVersion: (0, import_chunk_2yx6c1y2._e)("policySettings")?.requiredMaximumVersion, updatesDisabled: import_chunk_c203g5kd.s.DISABLE_UPDATES, entrypoint: import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT });
  } catch {
    return (0, import_chunk_w578pjby.t)("Minimum-version warning not shown: the check for it threw an error (error text not logged)", { level: "error" }), null;
  }
}
var a2s = { subscribe: import_chunk_2nv4wrez.UU, getSnapshot: import_chunk_2nv4wrez.rEs };
