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
var chunk_g6k95sax_exports = {};
__export(chunk_g6k95sax_exports, {
  jTr: () => jTr,
  n2i: () => n2i,
  ned: () => ned,
  r2i: () => r2i
});
module.exports = __toCommonJS(chunk_g6k95sax_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_j2ybpxmz = require("/$bunfs/root/chunk-j2ybpxmz.js");
var import_chunk_cy6vm0hs = require("/$bunfs/root/chunk-cy6vm0hs.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var p = "https://browser-intake-us5-datadoghq.com/api/v2/logs", g = 3e4, u = 25, l = 1e4, n = 100;
function m() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DD_ERROR_TRACKING_FLUSH_INTERVAL_MS || g;
}
async function f(e) {
  if (!(0, import_chunk_cy6vm0hs.A2i)()) {
    (0, import_chunk_w578pjby.t)(`dd-error-tracking: compliance verdict now blocks reporting; dropping batch=${e.length}`, { level: "warn" });
    return;
  }
  if ((0, import_chunk_865at33z.W9)()) return;
  let r = (0, import_chunk_w578pjby._)(e), a = new URLSearchParams({ ddsource: "browser", "dd-api-key": import_chunk_j2ybpxmz.Eks, "dd-evp-origin": "browser", "dd-evp-origin-version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, "dd-request-id": (0, import_crypto.randomUUID)() });
  try {
    await import_chunk_np189awg.Xd.post(`${p}?${a}`, r, { headers: { "Content-Type": "application/json" }, timeout: l });
  } catch (o) {
    if ((0, import_chunk_3jjr3wje.fd)(o) && o.response) (0, import_chunk_w578pjby.t)(`dd-error-tracking: intake responded ${o.response.status} (batch=${e.length})`, { level: "warn" });
    else (0, import_chunk_w578pjby.t)(`dd-error-tracking: intake failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
  }
}
class i {
  reportsEnqueued = 0;
  capSentinelSent = false;
  cachedUserBucket = void 0;
  sender = (0, import_chunk_j2ybpxmz.kks)({ maxBatchSize: u, getFlushIntervalMs: m, post: f });
}
var E = new import_chunk_2904xtvq.j(() => new i());
function jTr() {
  return E.of((0, import_chunk_f9x2f6cx.N)().host);
}
function n2i() {
  return jTr().reportsEnqueued >= n;
}
function h(e) {
  return { ...e, message: `ErrorTrackingCapReached: per-process cap of ${n} hit, dropping further reports`, error: { kind: "ErrorTrackingCapReached", message: `per-process cap of ${n} hit`, stack: `ErrorTrackingCapReached
    at enqueueErrorLog (src/services/errorTracking/client.ts)`, fingerprint: "cap-reached-sentinel", handling: "handled" }, error_frames: void 0 };
}
function r2i(e) {
  let r = jTr();
  if (r.reportsEnqueued >= n) return;
  if (r.reportsEnqueued++, r.reportsEnqueued === n && !r.capSentinelSent) r.capSentinelSent = true, (0, import_chunk_w578pjby.t)(`dd-error-tracking: per-process report cap reached (${n}); dropping further reports`, { level: "warn" }), r.sender.enqueue(h(e));
  else r.sender.enqueue(e);
}
async function ned() {
  await jTr().sender.shutdown();
}
