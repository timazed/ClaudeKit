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
var chunk_mtw26h3e_exports = {};
__export(chunk_mtw26h3e_exports, {
  Aqs: () => Aqs,
  Cqs: () => Cqs,
  Gzr: () => Gzr,
  Rqs: () => Rqs,
  Tqs: () => Tqs,
  V2l: () => V2l,
  ZTa: () => ZTa,
  eCa: () => eCa,
  kGo: () => kGo,
  lYl: () => lYl,
  vqs: () => vqs,
  z2l: () => z2l,
  zzr: () => zzr
});
module.exports = __toCommonJS(chunk_mtw26h3e_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_awvk50qj = require("/$bunfs/root/chunk-awvk50qj.js");
var import_chunk_gc5a361p = require("/$bunfs/root/chunk-gc5a361p.js");
var import_chunk_kemkq7qp = require("/$bunfs/root/chunk-kemkq7qp.js");
var import_chunk_bkfd2ttj = require("/$bunfs/root/chunk-bkfd2ttj.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var T = "tengu_tranquil_fern";
function S() {
  return (0, import_chunk_865at33z.Lt)(T, true);
}
var O = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().regex(import_chunk_r8478wtb.yo) }));
function vqs() {
  return { source: "none", trustedMode: void 0, recordedMode: "absent" };
}
function ZTa(e) {
  if (e.source !== "none") return "restored";
  return (e.recordedMode === "plan" || e.transcriptOpen === true) && e.trustedMode !== "plan" ? "declined" : "none";
}
function x(e) {
  if (e === void 0 || e === null) return "absent";
  return typeof e === "string" && (0, import_chunk_pbteexar.a_)(e) || "invalid";
}
function y(e) {
  return { ...(0, import_chunk_awvk50qj.zD)(e.mode, "plan", e), mode: "plan" };
}
function k(e) {
  return { ...e, toolPermissionContext: y(e.toolPermissionContext) };
}
function E(e) {
  return S() && e.mode !== "plan" && true && import_chunk_gc5a361p.lie.isEnabled() && !(0, import_chunk_ht27b0vz.Tr)(e, import_chunk_gc5a361p.lie);
}
function z2l(e, o, { forkSession: s, transcript: i } = {}) {
  if (o.recordedMode = x(e?.worker_permission_mode), o.recordedMode === "invalid") (0, import_chunk_w578pjby.t)("[planModeResume] ignoring unrecognized internal_metadata.worker_permission_mode", { level: "warn" });
  if (o.recordedMode === "plan" && i && S()) o.recordTranscriptState = Gzr(i);
  return (r) => {
    if (o.trustedMode ??= r.toolPermissionContext.mode, o.recordedMode !== "plan" || s) return r;
    let d = r;
    if (E(r.toolPermissionContext)) {
      if (o.source = "internal", (0, import_chunk_w578pjby.t)(`[planModeResume] re-entering plan mode from the prior worker's record (was ${r.toolPermissionContext.mode})`), d = k(r), e?.plan_entered_by === "model" && r.toolPermissionContext.mode === "auto") d = { ...d, toolPermissionContext: { ...d.toolPermissionContext, planEnteredBy: "model" } };
    }
    let m = O().safeParse(e?.plan_doc);
    return d.toolPermissionContext.mode === "plan" && m.success && S() ? { ...d, toolPermissionContext: { ...d.toolPermissionContext, planDoc: { id: m.data.id, title: void 0 } } } : d;
  };
}
function Tqs(e, o, { planModeOnResume: s, restored: i, restartedWorker: r }) {
  if (r && !b(i)) return;
  e.enableWorkerPermissionModeRecord(), V2l(e, o, { planModeOnResume: s, restored: i });
}
function b(e) {
  return Boolean(e?.external || e?.internal);
}
function V2l(e, { mode: o, planEnteredBy: s }, { planModeOnResume: i, restored: r }) {
  if (i === void 0 || !b(r)) return;
  e.notifyInternalMetadataChanged({ worker_permission_mode: (0, import_chunk_xcgcdx61.Qc)(o), ...(o !== "plan" || r?.internal?.worker_permission_mode !== "plan") && { plan_doc: null }, plan_entered_by: o === "plan" && s || null });
}
function eCa(e, o, s, i) {
  let r = i && o.source === "none" && (o.recordedMode === "absent" || o.recordedMode === "invalid") && S() && Gzr(e) === "open";
  if (r) o.transcriptOpen = true;
  s((d) => {
    if (o.trustedMode ??= d.toolPermissionContext.mode, !r || d.toolPermissionContext.mode === "plan" || (0, import_chunk_ht27b0vz.Tr)(d.toolPermissionContext, import_chunk_gc5a361p.lie)) return d;
    return o.source = "transcript", (0, import_chunk_w578pjby.t)(`[planModeResume] re-entering plan mode from the transcript's open plan segment (was ${d.toolPermissionContext.mode})`), k(d);
  });
}
function Cqs(e, o, s) {
  if (o.mode === "plan" || Gzr(e) !== "open") return false;
  return !s || !S() || Boolean((0, import_chunk_ht27b0vz.Tr)(o, import_chunk_gc5a361p.lie));
}
function Gzr(e) {
  let o = `<${import_chunk_k449cc64.xp}>/plan</${import_chunk_k449cc64.xp}>`, s = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Set(), r = h(e), d = false, m = () => d ? "none" : "open";
  for (let R = e.length - 1; R >= 0; R--) {
    let M = e[R];
    if (M.type === "attachment") {
      let P = M.attachment.type;
      if (P === "plan_mode" || P === "plan_mode_reentry") return m();
      if (P === "plan_mode_exit") return "exited";
    } else if (M.type === "assistant" && Array.isArray(M.message.content)) {
      let P = M.message.content;
      for (let _ = P.length - 1; _ >= 0; _--) {
        let g = P[_];
        if (g.type !== "tool_use") continue;
        if (g.name === import_chunk_bkfd2ttj._d && i.has(g.id) && !s.has(g.id) && !r.has(g.id)) return "exited";
        if (g.name === import_chunk_kemkq7qp.OA && i.has(g.id) && (!s.has(g.id) || r.has(g.id))) return m();
      }
    } else if (M.type === "user" && (0, import_chunk_bzyb60p0.y5)(M)) {
      let P = M.message.content;
      if (Array.isArray(P)) {
        for (let _ of P) if (_.type === "tool_result") (_.is_error || C(M, _.content) ? s : i).add(_.tool_use_id);
      }
    } else if (M.type === "user") {
      if ((0, import_chunk_bzyb60p0.Hh)(M)?.trimStart().startsWith(o)) return m();
      if (M.permissionMode === "plan") return m();
      if (M.permissionMode !== void 0 && !M.isMeta && (0, import_chunk_865at33z.OE)(M.origin)) d = true;
    }
  }
  return "none";
}
function h(e) {
  let o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  for (let i of e) {
    if (i.type !== "assistant" || !Array.isArray(i.message.content)) continue;
    for (let r of i.message.content) {
      if (r.type !== "tool_use") continue;
      if (o.has(r.id)) s.add(r.id);
      else o.add(r.id);
    }
  }
  return s;
}
function C(e, o) {
  let s = e.toolUseResult;
  if (s !== null && typeof s === "object" && s.awaitingLeaderApproval === true) return true;
  return typeof o === "string" && o.startsWith("Your plan has been submitted to the team lead");
}
function zzr({ sdkUrl: e, permissionModeSuppliedOnInvocation: o, forkSession: s }) {
  if (!import_chunk_gc5a361p.lie.isEnabled() || s) return false;
  return !!e || (0, import_chunk_3t7ve0wy.jra)() || o === false;
}
function Aqs(e, o, s) {
  let i = vqs();
  return eCa(e, i, s, zzr(o)), Rqs(i, { lane: o.sdkUrl ? "sdk_url" : "print", hadExternal: false, hadInternal: false }), ZTa(i);
}
function kGo(e, o, { lane: s, forkSession: i, transcript: r }) {
  let d = vqs();
  if (o(z2l(e?.internal, d, { forkSession: i, transcript: r?.messages })), r) eCa(r.sourceRows, d, o, r.sourceAllowed);
  return Rqs(d, { lane: s, hadExternal: !!e?.external, hadInternal: !!e?.internal }), ZTa(d);
}
function lYl(e, { storedPermissionMode: o, messages: s, forkSession: i, startupModePinned: r, lane: d }) {
  let m = vqs();
  if (m.trustedMode = e.mode, m.recordedMode = x(o), !r && !i && E(e)) {
    if (m.recordedMode === "plan") {
      if (m.recordTranscriptState = Gzr(s), m.recordTranscriptState !== "exited") m.source = "stored";
    } else if ((m.recordedMode === "absent" || m.recordedMode === "invalid") && Gzr(s) === "open") m.transcriptOpen = true, m.source = "transcript";
  }
  if (Rqs(m, { lane: d, hadExternal: false, hadInternal: false }), m.source === "none") return;
  return (0, import_chunk_w578pjby.t)(`[planModeResume] re-entering plan mode on resume (source: ${m.source}, was ${e.mode})`), y(e);
}
function Rqs(e, { lane: o, hadExternal: s, hadInternal: i }) {
  let r = e.source === "none" ? e.trustedMode : "plan";
  if ((0, import_chunk_y53wbr8a.a)("tengu_worker_permission_mode_restore", { source: (0, import_chunk_78g0060s.f)(e.source), lane: (0, import_chunk_78g0060s.f)(o), trusted_mode: (0, import_chunk_78g0060s.fe)(e.trustedMode), recorded_mode: (0, import_chunk_78g0060s.f)(e.recordedMode), target_mode: (0, import_chunk_78g0060s.fe)(r), had_external: s, had_internal: i, guard_enabled: S(), ...e.recordTranscriptState && { record_transcript_state: (0, import_chunk_78g0060s.f)(e.recordTranscriptState) }, ...e.transcriptOpen && { transcript_open: true } }), o === "print" && (0, import_chunk_3t7ve0wy.jra)()) {
    if (e.source === "transcript") (0, import_chunk_cqa9hrgx.u)("resume_plan_on_host_record");
    else if (e.transcriptOpen && e.trustedMode !== "plan") (0, import_chunk_cqa9hrgx.l)("resume_plan_on_host_record", "exit_plan_mode_denied");
  }
}
