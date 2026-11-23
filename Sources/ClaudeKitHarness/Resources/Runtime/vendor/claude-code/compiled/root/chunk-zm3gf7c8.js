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
var chunk_zm3gf7c8_exports = {};
__export(chunk_zm3gf7c8_exports, {
  j3r: () => j3r,
  o0a: () => o0a,
  q$e: () => q$e,
  r0a: () => r0a
});
module.exports = __toCommonJS(chunk_zm3gf7c8_exports);
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_qaaqd1gd = require("/$bunfs/root/chunk-qaaqd1gd.js");
var import_chunk_mmh7d122 = require("/$bunfs/root/chunk-mmh7d122.js");
function j3r(e) {
  let o = { callId: e.coreFields.tool_use_id, expiresInMs: e.envelopeOnlyFields.expiresInMs, isBypassAvailable: e.envelopeOnlyFields.isBypassAvailable, detachedAgent: e.envelopeOnlyFields.detachedAgent };
  if (a(e)) {
    let { coreFields: i, envelopeOnlyFields: l } = e;
    return (0, import_chunk_syr33dp2.wBi)({ ...o, conversationId: l.conversationId, compactionId: l.compactionId, permissionMode: (0, import_chunk_syr33dp2.n2t)(l.permissionMode), model: l.model, approval: { ask_id: i.ask_digest, decision: "deny", feedback: l.feedback } });
  }
  let { coreFields: s, envelopeOnlyFields: n } = e;
  return s.step, (0, import_chunk_syr33dp2.wBi)({ ...o, conversationId: s.conversation_id, compactionId: s.compaction_id, permissionMode: (0, import_chunk_syr33dp2.n2t)(s.permission_context.mode), model: s.main_loop_model, readBaseline: n.readBaseline, approval: s.approval && { ask_id: s.approval.ask_digest, decision: "allow", feedback: n.feedback, permission_updates: n.permissionUpdates } });
}
function a(e) {
  return e.coreFields.step === "decline";
}
var q$e = "request_reauthored", t = 5e3, r = /^[A-Za-z0-9][A-Za-z0-9._:@[\]-]*(?:\/[A-Za-z0-9][A-Za-z0-9._:@[\]-]*)*$/;
function r0a(e) {
  let { coreFields: o } = e, s = { tool_host_interface: j3r(e).caller.tool_host_interface, tool_use_id: o.tool_use_id, step: o.step }, n = (0, import_chunk_mmh7d122.rnr)(o.step === "decline" ? { ...s, ask_digest: o.ask_digest } : { ...s, main_loop_model: o.main_loop_model, ...(0, import_chunk_gd77dyw4.Hr)({ conversation_id: o.conversation_id, compaction_id: o.compaction_id }, (i) => i !== void 0 && import_chunk_syr33dp2.uwe.test(i)), permission_context: (0, import_chunk_qaaqd1gd._4o)((0, import_chunk_syr33dp2.n2t)(o.permission_context.mode)), ...o.approval !== void 0 && { approval: { ask_digest: o.approval.ask_digest, approver: o.approval.approver, permission_context: (0, import_chunk_qaaqd1gd._4o)((0, import_chunk_syr33dp2.n2t)(o.approval.permission_context.mode)) } } }, "compared_elsewhere", "attached_computer");
  return (n.kind === "requested" || n.kind === "declined") && import_chunk_syr33dp2.rwo.test(n.request.tool_use_id) && (n.request.step === "decline" || r.test(n.request.main_loop_model)) ? n.request : void 0;
}
function o0a(e, o) {
  if (o.gate_mark !== q$e || e.tool_use_id !== o.tool_use_id) return { ok: false, why: "malformed" };
  let s = { v: import_chunk_syr33dp2.Zm, call_id: e.tool_use_id, expires_in_ms: (0, import_chunk_syr33dp2.CZ)(o.deadline_ms - t) }, n = { kind: "ccr_container", tool_host_interface: e.tool_host_interface };
  switch (e.step) {
    case "check":
      return { ok: false, why: "malformed" };
    case "run":
      return (0, import_chunk_syr33dp2.jbs)({ ...s, caller: { ...n, permission_mode: e.permission_context.mode, model: e.main_loop_model, ...(0, import_chunk_6mfepmbb.cf)(e, [import_chunk_syr33dp2.pvr, "conversation_id", "compaction_id"]) }, ...e.approval !== void 0 && { approval: { ask_id: e.approval.ask_digest, decision: "allow", ...(0, import_chunk_6mfepmbb.cf)(e.approval, ["attested", "permission_updates"]) } } });
    case "decline":
      return (0, import_chunk_syr33dp2.jbs)({ ...s, caller: n, approval: { ask_id: e.ask_digest, decision: "deny" } });
  }
}
