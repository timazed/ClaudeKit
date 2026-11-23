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
var chunk_6e87dr3w_exports = {};
__export(chunk_6e87dr3w_exports, {
  GLa: () => GLa,
  H3o: () => H3o,
  KLa: () => KLa,
  VLa: () => VLa,
  crr: () => crr,
  drr: () => drr,
  h9r: () => h9r,
  jLa: () => jLa,
  zLa: () => zLa
});
module.exports = __toCommonJS(chunk_6e87dr3w_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_z12zbtvr = require("/$bunfs/root/chunk-z12zbtvr.js");
function u(e) {
  if (!Array.isArray(e)) return [];
  let n = (0, import_chunk_z12zbtvr.S7)(), s = [];
  for (let o of e) {
    let i = n.safeParse(o);
    if (i.success) s.push(i.data);
    else (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Dropping malformed permissionUpdate entry: ${i.error.message}`, { level: "warn" });
  }
  return s;
}
function h9r(e) {
  (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pending.set(e.requestId, e), (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Registered callback for request ${e.requestId}`);
}
function drr(e) {
  (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pending.delete(e), (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Unregistered callback for request ${e}`);
}
function jLa(e) {
  return (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pending.has(e);
}
function GLa() {
  (0, import_chunk_mvszxaxb.Zo)().teamPermissions.clear();
}
var d = true, H3o = "Your team lead's answer to this request could not be verified, so it was not used and the request did not go ahead. If the team lead restarted, asking again will not help, and the person must start a new teammate.";
function a(e, n) {
  let s = n.toolUseId === void 0 ? d : n.toolUseId === e.toolUseId, o = n.approvedRequest, i = o === void 0 ? d : o.tool_use_id === e.toolUseId && o.tool_name === e.toolName, r = o === void 0 ? d : o.input_digest === e.inputDigest;
  if (!s || !i) return "mismatch";
  if (!r) return "input_digest_mismatch";
  return n.toolUseId === void 0 || o === void 0 ? "unbound" : "bound";
}
function crr(e) {
  let n = (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pending, s = n.get(e.requestId);
  if (!s) return (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] No callback registered for mailbox response ${(0, import_chunk_w578pjby._)(e.requestId)}`), false;
  if (n.delete(e.requestId), e.unverified === true) return (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Refusing unverified verdict for request ${(0, import_chunk_w578pjby._)(e.requestId)}`, { level: "warn" }), s.onRefuse(H3o, "unverified"), true;
  let o = a(s, e);
  if (o === "mismatch" || o === "input_digest_mismatch") {
    let i = e.approvedRequest, r = e.decision === "approved" ? "approval" : "denial", l = o === "input_digest_mismatch" ? `this ${(0, import_chunk_w578pjby._)(s.toolName)} call (${(0, import_chunk_w578pjby._)(s.toolUseId)}), but its input digest differs` : `${i ? `${(0, import_chunk_w578pjby._)(i.tool_name)} (${(0, import_chunk_w578pjby._)(i.tool_use_id)})` : (0, import_chunk_w578pjby._)(e.toolUseId)}, not this ${(0, import_chunk_w578pjby._)(s.toolName)} call (${(0, import_chunk_w578pjby._)(s.toolUseId)})`;
    return (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Refusing ${r} for request ${(0, import_chunk_w578pjby._)(e.requestId)}: the leader answered ${l}`, { level: "warn" }), s.onRefuse(`The ${r} did not describe this tool call, so it was refused.`, r), true;
  }
  if ((0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Processing mailbox response for request ${(0, import_chunk_w578pjby._)(e.requestId)}: ${e.decision} (${o})`), o === "unbound") s.onUnboundVerdict();
  if (e.decision === "approved") {
    let i = u(e.permissionUpdates), r = e.updatedInput;
    s.onAllow(r, i);
  } else s.onReject(e.feedback);
  return true;
}
function zLa(e) {
  (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pendingSandbox.set(e.requestId, e), (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Registered sandbox callback for request ${e.requestId}`);
}
function VLa(e) {
  return (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pendingSandbox.has(e);
}
function KLa(e) {
  let n = (0, import_chunk_mvszxaxb.Zo)().teamPermissions.pendingSandbox, s = n.get(e.requestId);
  if (!s) return (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] No sandbox callback registered for request ${(0, import_chunk_w578pjby._)(e.requestId)}`), false;
  if (n.delete(e.requestId), s.host !== e.host) return (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Refusing sandbox ${e.allow === true ? "allow" : "deny"} for request ${(0, import_chunk_w578pjby._)(e.requestId)}: the leader answered for ${(0, import_chunk_w578pjby._)(e.host)}, not ${(0, import_chunk_w578pjby._)(s.host)}`, { level: "warn" }), s.resolve(false), true;
  return (0, import_chunk_w578pjby.t)(`[SwarmPermissionPoller] Processing sandbox response for request ${(0, import_chunk_w578pjby._)(e.requestId)}: allow=${(0, import_chunk_w578pjby._)(e.allow)}`), s.resolve(e.allow), true;
}
