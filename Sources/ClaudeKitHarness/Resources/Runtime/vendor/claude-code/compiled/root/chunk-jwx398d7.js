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
var chunk_jwx398d7_exports = {};
__export(chunk_jwx398d7_exports, {
  $Sa: () => $Sa,
  DSa: () => DSa,
  FSa: () => FSa,
  HSa: () => HSa,
  ISa: () => ISa,
  LSa: () => LSa,
  MSa: () => MSa,
  NSa: () => NSa,
  USa: () => USa,
  Vse: () => Vse
});
module.exports = __toCommonJS(chunk_jwx398d7_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var r = /* @__PURE__ */ new Set(["appeared", "responded", "abandoned", "followup_prompt_appeared", "followup_skipped", "followup_submitted", "followup_text_submitted", "followup_text_failed"]), o = /* @__PURE__ */ new Set(["bad", "fine", "good", "not_sure", "dismissed"]), u = /* @__PURE__ */ new Set(["session", "post_compact", "memory", "long_context"]), i = /* @__PURE__ */ new Set(["ide", "desktop"]), a = /* @__PURE__ */ new Set(["every_rating", "bad_only", "none"]), S = /* @__PURE__ */ new Set(["no_answer", "not_allowed", "gate_off", "refused", "saved_locally"]), s = new Set(Object.keys({ auth_error: true, auth_refused: true, data_residency: true, http_error: true, missing_feedback_id: true, network_error: true, not_first_party: true, org_refused: true, payload_too_large_413: true, payload_too_large_precheck: true, payload_too_large_range_error: true, policy_blocked: true, scope_refused: true, timeout: true, zdr_org: true, unknown: true, unavailable: true })), d = /* @__PURE__ */ new Set(["positive", "negative"]), f = /* @__PURE__ */ new Set(["tool_use", "assistant_text"]);
function n(e, t) {
  return typeof e === "string" && t.has(e) ? (0, import_chunk_78g0060s.Fr)(e) : void 0;
}
function ISa(e) {
  return n(e, r);
}
function MSa(e) {
  return n(e, o);
}
function HSa(e) {
  return n(e, u);
}
function DSa(e) {
  return n(e, i);
}
function LSa(e) {
  return n(e, a);
}
function NSa(e) {
  return n(e, S);
}
function FSa(e) {
  return n(e, s);
}
function $Sa(e) {
  return n(e, d);
}
function USa(e) {
  return n(e, f);
}
function Vse(e) {
  return typeof e === "string" ? e : void 0;
}
