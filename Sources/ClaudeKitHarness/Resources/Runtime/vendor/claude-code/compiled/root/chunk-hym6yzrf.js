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
var chunk_hym6yzrf_exports = {};
__export(chunk_hym6yzrf_exports, {
  $Es: () => $Es,
  A4: () => A4,
  CGt: () => CGt,
  Eg: () => Eg,
  GTl: () => GTl,
  Jle: () => Jle,
  LV: () => LV,
  Nwe: () => Nwe,
  P9: () => P9,
  hvo: () => hvo,
  jTl: () => jTl,
  mvo: () => mvo,
  wzi: () => wzi,
  xun: () => xun
});
module.exports = __toCommonJS(chunk_hym6yzrf_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_crypto = require("crypto");
var Eg = { output_tokens_details: { thinking_tokens: 0 }, input_tokens: 0, cache_creation_input_tokens: 0, cache_read_input_tokens: 0, output_tokens: 0, server_tool_use: { web_search_requests: 0, web_fetch_requests: 0 }, service_tier: "standard", cache_creation: { ephemeral_1h_input_tokens: 0, ephemeral_5m_input_tokens: 0 }, inference_geo: "", iterations: [], speed: "standard", fallback_credit: null };
function Jle(e) {
  if (e == null || typeof e.input_tokens !== "number") return;
  if (typeof e.output_tokens === "number") return e;
  return e.output_tokens == null ? { ...e, output_tokens: 0 } : void 0;
}
function mvo({ message: e, isUnmetered: n }) {
  let t = Jle(e.usage);
  return e.stop_reason && !n && t && t.output_tokens > 0 ? t : void 0;
}
function Nwe(e) {
  return e.send_now === true && e.cancel_queued !== true;
}
function $Es(e) {
  return typeof e === "string" && e.startsWith("late-bind-interrupt-");
}
function xun(e) {
  return typeof e === "string" && e.startsWith("relay-runner-interrupt-");
}
function CGt(e, n) {
  return $Es(e) || n.worker_epoch !== void 0;
}
function jTl(e) {
  return typeof e === "string" && (e.startsWith("late-bind-mode-reset-") || e.startsWith("service-"));
}
var u = 8;
function hvo(e) {
  let n = e.for_user_message_uuids;
  if (e.cancel_queued === true || !Array.isArray(n) || n.length === 0 || n.length > u) return;
  let t = /* @__PURE__ */ new Set();
  for (let r of n) {
    let o = (0, import_chunk_mzmcvr6c.ht)(r);
    if (o === null) return;
    t.add(o.toLowerCase());
  }
  return { names: (r) => r.some((o) => t.has(o.toLowerCase())) };
}
function wzi(e) {
  return e.for_user_message_uuids !== void 0;
}
function GTl(e) {
  return hvo({ for_user_message_uuids: [e] });
}
function P9(e, n) {
  return { type: "control_response", response: { subtype: "success", request_id: e, response: n } };
}
function A4(e, n, t, r) {
  return { type: "control_response", response: { subtype: "error", request_id: e, error: n, ...t !== void 0 && { error_code: t }, ...r !== void 0 && { model: r } } };
}
function LV(e, n, t) {
  return { type: "result", subtype: "error_during_execution", duration_ms: 0, duration_api_ms: 0, is_error: true, num_turns: 0, stop_reason: null, session_id: e, total_cost_usd: 0, usage: Eg, modelUsage: {}, permission_denials: [], uuid: (0, import_crypto.randomUUID)(), errors: n, ...t !== void 0 && { user_message_uuid: t } };
}
