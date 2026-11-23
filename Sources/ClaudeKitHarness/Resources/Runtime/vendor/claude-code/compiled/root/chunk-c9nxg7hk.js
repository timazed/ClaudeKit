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
var chunk_c9nxg7hk_exports = {};
__export(chunk_c9nxg7hk_exports, {
  Rer: () => Rer,
  Sqr: () => Sqr,
  _7t: () => _7t
});
module.exports = __toCommonJS(chunk_c9nxg7hk_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_gp23aqt9 = require("/$bunfs/root/chunk-gp23aqt9.js");
var import_chunk_97e5a0h6 = require("/$bunfs/root/chunk-97e5a0h6.js");
var import_chunk_78edkytf = require("/$bunfs/root/chunk-78edkytf.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_crypto = require("crypto");
var l = 1e5, A = 4e3;
function L(e) {
  let t = e.replace(/[\r\n\v\f\x1c\x1d\x1e\u0085\u2028\u2029]+/g, " ").replaceAll("remote-workflow:", "remote-workflow;");
  if (t.length > A) t = `${(0, import_chunk_7cfjrnwy.ee)(t, A)}\u2026[truncated]`;
  return t;
}
function Rer(e, t) {
  return `remote-workflow: error[${e}]: ${L(t)}`;
}
function c(e) {
  let t = (0, import_chunk_w578pjby._)(e);
  return t === void 0 ? void 0 : t.replaceAll("\x85", "\\u0085").replaceAll("\u2028", "\\u2028").replaceAll("\u2029", "\\u2029");
}
function R() {
  let e = (0, import_chunk_5e3gtsn9.Gc)();
  if (e === void 0) return (0, import_chunk_qrpds8jv.mws)();
  return Object.keys(e).some((t) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && (0, import_chunk_69qhefwa.Ne)(e[t]));
}
function x() {
  return (0, import_chunk_2yx6c1y2.ece)().some((e) => e.disableWorkflows === true || Object.entries(e.env ?? {}).some(([t, m]) => t.toUpperCase() === "CLAUDE_CODE_DISABLE_WORKFLOWS" && (0, import_chunk_69qhefwa.Ne)(m)));
}
var I = "Code review did not run: workflows are turned off in this machine's managed settings (`disableWorkflows`, or `CLAUDE_CODE_DISABLE_WORKFLOWS` in its `env` block). Ask this machine's administrator to allow it.", M = "Code review did not run: this machine's managed settings could not be read, so whether its administrator turned workflows off is not known. Ask this machine's administrator to fix them.";
function C() {
  if (x()) return I;
  return (0, import_chunk_2yx6c1y2.e$)() ? M : null;
}
function _7t(e) {
  if (R()) return "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS` was set when Claude Code started).";
  let t = e?.serverAuthoredCarrier === true;
  if (t && e?.eventSessionOrigin === "review") return C();
  if ((0, import_chunk_qrpds8jv.$wo)()) return (0, import_chunk_qrpds8jv.mws)() ? "dynamic workflows are disabled for this session (the environment variable `CLAUDE_CODE_DISABLE_WORKFLOWS`, set after Claude Code started, for example by a settings `env` block)." : "dynamic workflows are disabled for this session (the `disableWorkflows` setting).";
  if (t && e?.eventSessionOrigin === void 0 && (0, import_chunk_6e68m1dj.h3)()) return C();
  if (!(0, import_chunk_qrpds8jv.Uwo)()) return "dynamic workflows are disabled for this session (org policy `allow_workflows`).";
  return null;
}
async function Sqr({ script: e, args: t, telemetrySource: m, serverAuthoredCarrier: w = false, eventSessionOrigin: v, context: p }) {
  let i = (s, r) => ({ ok: false, layer: s, line: Rer(s, r) }), S = _7t({ serverAuthoredCarrier: w, eventSessionOrigin: v });
  if (S) return i("policy-gate", S);
  let k = w ? import_chunk_p1ewvgeh.PSo : import_chunk_p1ewvgeh.qO;
  if (e.length > k) return i("script-too-large", `workflow script exceeds ${k} bytes.`);
  if (!(0, import_chunk_xfj2cwfv.Kx)(e)) return i("control-chars", "workflow script contains disallowed control characters.");
  let n = (0, import_chunk_gp23aqt9.gR)(e, { maxBytes: k });
  if ("error" in n) return i("meta-parse", `invalid workflow script: ${n.error}`);
  if ((0, import_chunk_97e5a0h6.bqr)(n.scriptBody)) return i("nondeterminism", "workflow scripts must be deterministic: Date.now()/Math.random()/new Date() are unavailable (breaks resume). Stamp results after the workflow returns, or pass timestamps via args.");
  let g = (0, import_chunk_97e5a0h6.STn)(n.scriptBody);
  if (!g.ok) return i("compile", `workflow script compile failed: ${g.error}`);
  let u = `wf_${(0, import_crypto.randomUUID)().slice(0, 12)}`, D = (0, import_chunk_ed372ykp.OT)("local_workflow"), W = (0, import_chunk_p1ewvgeh.OSo)(n.meta.name, u, e, p.storageV5), b = (0, import_chunk_97e5a0h6.Eqr)(n.meta.name, void 0, false), O = (0, import_chunk_97e5a0h6.vqr)(n.meta.description, void 0, false);
  (0, import_chunk_y53wbr8a.a)("tengu_workflow_launched", { invocation_mode: (0, import_chunk_78g0060s.f)(m), workflow_source: (0, import_chunk_78g0060s.f)(m), phase_count: n.meta.phases?.length ?? 0, launched_from_subagent: false, has_args: t != null, is_resume: false, script_size_chars: e.length });
  let o = await new Promise((s) => {
    (0, import_chunk_97e5a0h6.Tqr)({ taskId: D, workflowRunId: u, script: e, scriptPath: W, args: t, meta: n.meta, vmScript: g.vmScript, toolUseContext: p, canUseTool: p.canUseTool ?? import_chunk_bzyb60p0.v6, toolUseId: void 0, transcriptDir: (0, import_chunk_78edkytf.UJ)(u), telemetry: { source: m, name: b, description: O, scriptIsVerbatimBuiltIn: false }, isResume: false, onSettled: s, suppressCompletionNotification: true, withholdScriptFromSdkEvents: w });
  });
  switch (o.status) {
    case "completed": {
      let s = { status: "completed", workflowName: n.meta.name, runId: u, agentCount: o.agentCount, durationMs: o.durationMs, failures: o.failures, result: o.result }, r = c(s);
      if (r === void 0 || r.length > l) {
        let E = r === void 0 ? "not serializable" : `${r.length} chars exceeds ${l}`, d = o.failures.slice(0, 20).map((h) => h.length > 500 ? `${(0, import_chunk_7cfjrnwy.ee)(h, 500)}\u2026[truncated]` : h);
        if (o.failures.length > d.length) d.push(`\u2026and ${o.failures.length - d.length} more failures omitted`);
        if (r = c({ ...s, failures: d }), r === void 0 || r.length > l) r = c({ ...s, failures: [`<${o.failures.length} failures omitted: diagnostics never outrank the result payload>`] });
        if (r === void 0 || r.length > l) r = c({ ...s, failures: d, result: `<result omitted: ${E}>` });
        if (r === void 0 || r.length > l) r = c({ status: "completed", workflowName: (0, import_chunk_7cfjrnwy.ee)(String(n.meta.name), 200), runId: u, agentCount: o.agentCount, durationMs: o.durationMs, failures: [`<${o.failures.length} failures omitted: fallback exceeded ${l}>`], result: `<result omitted: ${E}>` }) ?? '{"status":"completed"}';
      }
      return { ok: true, line: `remote-workflow: ${r}`, workflowName: n.meta.name };
    }
    case "failed":
      return i("workflow-failed", `workflow failed after ${o.durationMs}ms (${o.agentCount} agents): ${o.error}`);
    case "killed":
      return i("killed", "workflow was aborted before completion.");
    case "adopted":
    case "unknown":
      return i("unexpected-state", `workflow ended in unexpected state '${o.status}'.`);
  }
}
