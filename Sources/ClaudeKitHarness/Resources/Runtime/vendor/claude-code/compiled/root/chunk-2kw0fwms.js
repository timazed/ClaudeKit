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
var chunk_2kw0fwms_exports = {};
__export(chunk_2kw0fwms_exports, {
  Osr: () => Osr,
  Y8o: () => Y8o,
  _Wa: () => _Wa,
  cXr: () => cXr,
  gWa: () => gWa,
  hWa: () => hWa,
  k0t: () => k0t,
  mWa: () => mWa,
  uXr: () => uXr,
  vTe: () => vTe,
  w0t: () => w0t,
  wii: () => wii
});
module.exports = __toCommonJS(chunk_2kw0fwms_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var w0t = 61440, m = w0t - 4096;
function y(e) {
  return Buffer.byteLength((0, import_chunk_w578pjby.cs)(e)) - 2;
}
function g(e, t, r, n, s) {
  return e.firstEvent.index === r.index && e.deltaType === n && e.first.parent_tool_use_id === t.parent_tool_use_id && e.first.thinking_display === t.thinking_display && e.first.api_message_id === t.api_message_id && e.bytes + s <= m;
}
function S(e) {
  if (e.type !== "content_block_delta") return null;
  switch (e.delta.type) {
    case "text_delta": {
      let t = e.delta.text;
      return typeof t !== "string" ? null : { event: e, deltaType: "text_delta", chunk: t, estimatedTokens: void 0 };
    }
    case "input_json_delta": {
      let t = e.delta.partial_json;
      return typeof t !== "string" ? null : { event: e, deltaType: "input_json_delta", chunk: t, estimatedTokens: void 0 };
    }
    case "thinking_delta": {
      let t = e.delta.thinking;
      return typeof t !== "string" ? null : { event: e, deltaType: "thinking_delta", chunk: t, estimatedTokens: e.delta.estimated_tokens ?? void 0 };
    }
    case "citations_delta":
    case "signature_delta":
    case "compaction_delta":
      return null;
    default:
      return e.delta, null;
  }
}
function _(e) {
  if (e.count === 1) return e.first;
  let t;
  switch (e.deltaType) {
    case "text_delta":
      t = { type: "text_delta", text: e.accumulated };
      break;
    case "input_json_delta":
      t = { type: "input_json_delta", partial_json: e.accumulated };
      break;
    case "thinking_delta":
      t = { type: "thinking_delta", thinking: e.accumulated, estimated_tokens: e.estimatedTokens ?? null };
      break;
  }
  return { ...e.first, event: { ...e.firstEvent, delta: { ...e.firstEvent.delta, ...t } } };
}
function cXr(e) {
  if (e.length <= 1) return e;
  return f(e, false) ?? f(e, true);
}
function f(e, t) {
  let r = [], n = null, s = 0;
  for (let i of e) {
    let l = S(i.event);
    if (l === null) {
      if (n !== null) r.push(_(n)), n = null;
      r.push(i);
      continue;
    }
    let { event: u, deltaType: d, chunk: o, estimatedTokens: a } = l, c = 0;
    if (t) c = y(o);
    else s += o.length;
    if (n !== null && g(n, i, u, d, c)) {
      if (n.accumulated += o, n.bytes += c, n.count += 1, typeof a === "number") n.estimatedTokens = (n.estimatedTokens ?? 0) + a;
      continue;
    }
    if (n !== null) r.push(_(n));
    n = { first: i, firstEvent: u, deltaType: d, accumulated: o, estimatedTokens: a, bytes: c, count: 1 };
  }
  if (n !== null) r.push(_(n));
  return s * 6 > m ? null : r;
}
function mWa(e, t) {
  let r = e.findIndex((s) => s.uuid === t);
  if (r < 0) return t;
  let n = null;
  for (let s = 0; s <= r; s++) {
    let i = e[s], l = S(i.event);
    if (l === null) {
      n = null;
      continue;
    }
    let { event: u, deltaType: d, chunk: o } = l, a = y(o);
    if (n !== null && g(n, i, u, d, a)) n.bytes += a;
    else n = { first: i, firstEvent: u, deltaType: d, bytes: a };
  }
  return n?.first.uuid ?? t;
}
var b = /* @__PURE__ */ new Set(["interrupt", "stop_task", "send_task_message", "set_permission_mode", "set_model", "set_max_thinking_tokens", "set_color", "mcp_toggle", "message_rated", "side_question", "ui_press", "ui_input", "ui_select", "ui_client_press", "ui_pane_show", "ui_close", "ui_scroll", "ui_prompt_edit"]), T = /* @__PURE__ */ new Set(["can_use_tool", "request_user_dialog", "elicitation"]), h = /* @__PURE__ */ new Set(["set_model", "set_permission_mode", "set_max_thinking_tokens"]);
function uXr(e) {
  return k(e.request) && !h.has(e.request.subtype);
}
function hWa() {
  (0, import_chunk_f9x2f6cx.yse)(true);
}
function wii(e, t) {
  switch (e.type) {
    case "user":
      return !(t?.hostOwnsOrigin === true && (0, import_chunk_865at33z.ANe)(e.origin, e.isSynthetic));
    case "bash_command":
      return true;
    case "control_request":
      return k(e.request);
    default:
      return false;
  }
}
function k(e) {
  let t = e?.subtype;
  return typeof t === "string" && b.has(t) && e?.by !== "app";
}
function k0t(e) {
  return T.has(e.request.subtype);
}
(0, import_chunk_adx6804h.B)();
var Osr = "x-ccr-session-writers", gWa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ writers: (0, import_chunk_adx6804h.F)(["owner_account_only", "not_owner_only"]), statedAtMs: (0, import_chunk_adx6804h.E)() }));
function _Wa(e) {
  if (e === null || e.includes(",")) return;
  let t = /* @__PURE__ */ new Map();
  for (let r of e.split(";")) {
    let n = r.trim(), s = n.indexOf("="), i = s === -1 ? "" : n.slice(0, s);
    if (i === "") continue;
    if (t.has(i)) return;
    t.set(i, n.slice(s + 1));
  }
  if (t.get("v") !== "1") return;
  switch (t.get("owner_account_only")) {
    case "true":
      return "owner_account_only";
    case "false":
      return "not_owner_only";
    default:
      return;
  }
}
function vTe(e) {
  return e === "owner_account_only";
}
function Y8o({ frameCreatedAt: e, sessionWriters: t, maxFrameAgeMs: r, maxStatementAgeMs: n, now: s }) {
  if (e === void 0) return "no_frame_stamp";
  if (s - e > r) return "stale_frame";
  if (t === void 0) return "session_writers_unknown";
  if (!vTe(t.writers)) return "session_not_owner_only";
  if (n === void 0) return;
  let i = s - t.statedAtMs;
  return i >= 0 && i <= n ? void 0 : "session_writers_stale";
}
