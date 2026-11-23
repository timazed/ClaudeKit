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
var chunk_qv6h6wr9_exports = {};
__export(chunk_qv6h6wr9_exports, {
  ZBe: () => ZBe,
  _Si: () => _Si
});
module.exports = __toCommonJS(chunk_qv6h6wr9_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_g6k95sax = require("/$bunfs/root/chunk-g6k95sax.js");
var import_chunk_cy6vm0hs = require("/$bunfs/root/chunk-cy6vm0hs.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_crypto = require("crypto");
var import_os = require("os");
var I = "claude-code-error-tracking";
function F(e) {
  return e ? { version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}_${e}`, sourcemapGroup: e } : { version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, sourcemapGroup: "none" };
}
var k = 30;
function O() {
  let e = (0, import_chunk_g6k95sax.jTr)();
  if (e.cachedUserBucket !== void 0) return e.cachedUserBucket;
  let r = (0, import_chunk_865at33z.$1)(), o = (0, import_crypto.createHash)("sha256").update(r).digest("hex");
  return e.cachedUserBucket = parseInt(o.slice(0, 8), 16) % k, e.cachedUserBucket;
}
function v(e, r) {
  let o = r.slice(0, 3).map((n) => (0, import_chunk_7fsmgfxx.MUl)(n) ? `${n.function ?? "?"}@${n.file}:${n.line ?? "?"}:${n.column ?? "?"}` : `${n.function ?? "?"}@${(0, import_chunk_7fsmgfxx.OUl)(n.file)}`).join("|");
  return (0, import_crypto.createHash)("sha256").update(`${e}
${o}`).digest("hex").slice(0, 16);
}
var b = new Set(import_chunk_zmb62hr5.M6e);
function M() {
  try {
    let e = (0, import_chunk_865at33z.dt)();
    if (!e) return;
    let r = (0, import_chunk_865at33z.St)((0, import_chunk_zmb62hr5.Yt)(e), { identity: true });
    return b.has(r) ? r : "other";
  } catch {
    return;
  }
}
var P = 50;
function U() {
  try {
    let e = (0, import_chunk_865at33z.RX)(), r = (0, import_chunk_865at33z.i3i)(), o = {}, n = 0;
    for (let [t, i] of Object.entries(e)) if (typeof i === "boolean" && r.has(t)) {
      if (o[t] = i, ++n >= P) break;
    }
    return o;
  } catch {
    return {};
  }
}
function L(e) {
  let r = e.issues;
  if (!Array.isArray(r) || r.length === 0) return;
  let o = r.map((n) => n?.code).filter((n) => typeof n === "string" && /^[a-z_]{1,40}$/.test(n));
  return `${r.length} issue(s): ${o.join(",")}`;
}
function B() {
}
var w = !B.name.startsWith("errorTrackingIdentifierProbe"), j = [["APIUserAbortError", import_chunk_jv7av99m.yu], ["APIConnectionTimeoutError", import_chunk_jv7av99m.CF], ["APIConnectionError", import_chunk_jv7av99m.em], ["BadRequestError", import_chunk_jv7av99m.n5n], ["AuthenticationError", import_chunk_jv7av99m.LPt], ["PermissionDeniedError", import_chunk_jv7av99m.r5n], ["NotFoundError", import_chunk_jv7av99m.NPt], ["ConflictError", import_chunk_jv7av99m.o5n], ["UnprocessableEntityError", import_chunk_jv7av99m.s5n], ["RateLimitError", import_chunk_jv7av99m.i5n], ["InternalServerError", import_chunk_jv7av99m.a5n], ["APIError", import_chunk_jv7av99m.Nt], ["RetryableError", import_chunk_jv7av99m.TFr], ["WorkloadIdentityError", import_chunk_9b4aq7fb.og], ["AnthropicError", import_chunk_jv7av99m.Mo], ["ClaudeError", import_chunk_jv7av99m.Ppt]], S = /_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS$/;
function _Si(e, r = w) {
  let o = typeof e.constructor?.name === "string" ? e.constructor.name.replace(S, "") : void 0, n = r && e instanceof import_chunk_jv7av99m.Ppt && e.name === o, c = ((typeof e.name === "string" && e.name !== "Error" && !n ? e.name : void 0) || (!r && (0, import_chunk_jv7av99m.tH)(o) !== void 0 ? o : j.find(([, a]) => e instanceof a)?.[0]) || "Error").replace(S, "");
  return (0, import_chunk_jv7av99m.tH)(c) ?? "Error";
}
var G = 20;
function K(e, r, o) {
  let n = (0, import_chunk_7fsmgfxx.I0r)(e), t = (0, import_chunk_7fsmgfxx.IUl)(n), i = n.slice(0, G), c = (0, import_chunk_jv7av99m.QB)(e), a = t && c === void 0 ? `thrown outside the Claude Code bundle (${o})` : (0, import_chunk_865at33z.Yxl)((0, import_chunk_865at33z.qxl)(e, c ?? L(e) ?? e.message ?? String(e))), A = (0, import_chunk_7fsmgfxx.HUl)({ name: o, message: a }, i), { version: l, sourcemapGroup: C } = F({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.DD_SOURCEMAP_GROUP), N = v(o, i), E = O(), u = M(), T = typeof Bun < "u" && true, m = (0, import_chunk_jv7av99m.Cr)(e), p = (0, import_chunk_jv7av99m.Dca)(e), f = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === void 0 ? "cli" : (0, import_chunk_3t7ve0wy.fh)() ?? "other", d = (0, import_chunk_865at33z.lee)(), g = (0, import_chunk_f9x2f6cx.xNr)(), _ = (0, import_chunk_865at33z.BRs)(), h = X((0, import_os.release)());
  return { ddtags: [`service:${I}`, "team:claude-code", `version:${l}`, "env:external", `origin:${r}`, `platform:${(0, import_chunk_cg8dqz0a.x)()}`, `os_release:${h}`, `user_bucket:${E}`, `entrypoint:${f}`, `node_version:${process.versions.node}`, "bun_version:1.4.4", `is_native_runtime:${T}`, ...u ? [`model:${u}`] : [], ...m ? [`error_code:${m}`] : [], ...p !== void 0 ? [`child_exit_status:${p}`] : [], ...d ? [`session_kind:${d}`] : [], ...d ? [`has_attacher:${(0, import_chunk_f9x2f6cx.pf)() ? "1" : "0"}`] : [], ...g ? [`renderer_mode:${g}`] : [], ..._ ? [`remote_control_lane:${_}`] : [], ...(0, import_chunk_865at33z.MCt)() ? ["projects_session:1"] : []].join(","), service: I, hostname: "claude-code", status: "error", message: `${o}: ${a}`.slice(0, 4e3), timestamp: (/* @__PURE__ */ new Date()).toISOString(), error: { kind: o, message: a.slice(0, 4e3), stack: A.slice(0, 16e3), fingerprint: N, handling: r === "logError" ? "handled" : "unhandled" }, version: l, sourcemap_group: C, env: "external", user_bucket: E, origin: r, host_platform: (0, import_chunk_cg8dqz0a.x)(), host_os_release: h, host_name_redacted: (0, import_chunk_865at33z.umn)().slice(0, 12), entrypoint: f, node_version: process.versions.node, bun_version: "1.4.4", ...u && { model: u }, error_frames: i, feature_flags: U() };
}
var V = /* @__PURE__ */ new Set(["APIUserAbortError", "AuthenticationError", "McpSessionExpiredError"]), W = [{ messagePrefix: "File does not exist", topFrameIncludes: "FileReadTool.ts" }], z = [{ topFile: "node:net", topFunction: "internalConnectMultipleTimeout" }, { topFile: "node:_http_server", topFunction: "#onClose" }];
function H(e) {
  let r = (0, import_chunk_7fsmgfxx.I0r)(e, 20), o = r[0];
  if (!o || r.some(import_chunk_7fsmgfxx.TDo)) return false;
  return z.some((n) => o.file === n.topFile && o.function === n.topFunction);
}
function Y() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true || Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) || Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE);
}
function q(e, r) {
  if (V.has(r)) return true;
  if ((0, import_chunk_3t7ve0wy.ste)() && !Y() && (0, import_chunk_jv7av99m.pa)(e) && e.code !== void 0 && import_chunk_jv7av99m.Fca.has(e.code) && (e.syscall === "mkdir" || e.syscall === "open") && (0, import_chunk_cg8dqz0a.x)() !== "windows") return true;
  let o = e.message ?? "";
  return W.some((n) => o.startsWith(n.messagePrefix) && (e.stack?.split(`
`).find((t) => t.trim().startsWith("at ")) ?? "").includes(n.topFrameIncludes));
}
function X(e) {
  let r = /^(\d+)\.(\d+)/.exec(e);
  return r ? `${r[1]}.${r[2]}` : "unknown";
}
function ZBe(e, r = "logError") {
  try {
    if (!(0, import_chunk_cy6vm0hs.gEo)()) return;
    let o = (0, import_chunk_jv7av99m.D)(e), n = _Si(o);
    if (r === "logError" && q(o, n)) return;
    if ((r === "unhandled_rejection" || r === "uncaught_exception") && H(o)) return;
    if ((0, import_chunk_g6k95sax.n2i)()) return;
    let t = K(o, r, n);
    (0, import_chunk_g6k95sax.r2i)(t);
  } catch {
  }
}
