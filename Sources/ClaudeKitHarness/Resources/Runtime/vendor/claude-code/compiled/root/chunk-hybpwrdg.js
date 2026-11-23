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
var chunk_hybpwrdg_exports = {};
__export(chunk_hybpwrdg_exports, {
  Cte: () => Cte,
  JUs: () => JUs,
  Kpt: () => Kpt,
  Z$r: () => Z$r,
  Z3t: () => Z3t,
  eUr: () => eUr,
  ubn: () => ubn
});
module.exports = __toCommonJS(chunk_hybpwrdg_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_z12zbtvr = require("/$bunfs/root/chunk-z12zbtvr.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var g = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()), r = (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("text"), text: (0, import_chunk_adx6804h.n)() }), o = /* @__PURE__ */ new Map(), s = { text: r, tool_use: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("tool_use"), id: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)(), input: e }), thinking: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("thinking"), thinking: (0, import_chunk_adx6804h.n)(), signature: (0, import_chunk_adx6804h.n)().optional() }), redacted_thinking: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("redacted_thinking"), data: (0, import_chunk_adx6804h.n)() }), server_tool_use: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("server_tool_use"), id: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)(), input: e }), mcp_tool_use: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("mcp_tool_use"), id: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)(), server_name: (0, import_chunk_adx6804h.n)(), input: e }) };
  for (let [l, c] of Object.entries(s)) o.set(l, c);
  let i = (0, import_chunk_adx6804h.E)().finite();
  return { text: r, assistantByType: o, usage: (0, import_chunk_adx6804h.$t)({ input_tokens: i, output_tokens: i, cache_creation_input_tokens: i.nullish(), cache_read_input_tokens: i.nullish(), iterations: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.$t)({})).nullish() }), generic: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.n)() }), toolResultLike: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.n)(), tool_use_id: (0, import_chunk_adx6804h.n)() }), toolResult: (0, import_chunk_adx6804h.$t)({ type: (0, import_chunk_adx6804h.v)("tool_result"), tool_use_id: (0, import_chunk_adx6804h.n)(), is_error: (0, import_chunk_adx6804h.P)().optional() }) };
});
function u(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
var y = 256, w = "[truncated: too deep]";
function k(e) {
  let r = [];
  if (typeof e === "object" && e !== null) r.push({ value: e, depth: 1 });
  while (r.length > 0) {
    let { value: o, depth: s } = r.pop();
    if (s > y) return true;
    for (let i of Object.values(o)) if (typeof i === "object" && i !== null) r.push({ value: i, depth: s + 1 });
  }
  return false;
}
function z(e) {
  let r = 0, o = [{ value: e, depth: 1 }];
  while (o.length > 0) {
    let { value: s, depth: i } = o.pop(), l = Array.isArray(s) ? s : u(s) ? s : null;
    if (l === null) continue;
    for (let c of Object.keys(l)) {
      let f = Reflect.get(l, c);
      if (typeof f !== "object" || f === null) continue;
      if (i + 1 > y) Reflect.set(l, c, w), r++;
      else o.push({ value: f, depth: i + 1 });
    }
  }
  return r;
}
function m(e) {
  return u(e) && typeof e.type === "string" ? e.type : null;
}
function j(e) {
  let r = m(e);
  if (r !== null) return r;
  return e === null ? "null" : Array.isArray(e) ? "array" : typeof e;
}
function O(e) {
  let r = m(e);
  if (r === null) return false;
  let o = g();
  return (o.assistantByType.get(r) ?? (r.endsWith("_tool_result") ? o.toolResultLike : o.generic)).safeParse(e).success;
}
function A(e) {
  let r = e.content;
  if (r === void 0 || typeof r === "string") return true;
  if (Array.isArray(r)) {
    let o = r.filter((s) => {
      let i = m(s);
      if (i === null) return false;
      return i === "text" ? g().text.safeParse(s).success : g().generic.safeParse(s).success;
    });
    if (o.length !== r.length) e.content = o;
    return true;
  }
  if (!u(r)) return e.content = String(r), true;
  try {
    return e.content = (0, import_chunk_w578pjby._)(r), true;
  } catch {
    return false;
  }
}
function R(e) {
  let r = m(e);
  if (r === null || !u(e)) return false;
  let o = g();
  if (r === "text") return o.text.safeParse(e).success;
  if (r === "tool_result") {
    if (!o.toolResult.safeParse(e).success) return false;
    return A(e);
  }
  return o.generic.safeParse(e).success;
}
function a(e, r, o) {
  (0, import_chunk_w578pjby.t)(`[wireFrameShape] ${e} frame ${typeof r === "string" ? r : "(no uuid)"}: ${o}`, { level: "error" });
}
function b(e, r, o, s) {
  let i = [], l = e.filter((c) => {
    try {
      if (r(c)) return true;
    } catch (f) {
      return i.push(`unreadable block (${(0, import_chunk_jv7av99m.d)(f)})`), false;
    }
    return i.push(j(c)), false;
  });
  if (i.length === 0) return e;
  return a(o, s, `dropped ${i.length} malformed content block(s): ${i.join(", ")}`), l;
}
function T(e) {
  let r;
  if (typeof e.uuid === "string" && e.uuid !== "") r = e.uuid;
  else a("assistant", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), r = (0, import_crypto.randomUUID)(), e.uuid = r;
  let o = e.message;
  if (!u(o)) return a("assistant", e.uuid, "dropped \u2014 message is not an object"), false;
  if (o.id !== void 0 && typeof o.id !== "string") o.id = typeof o.id === "number" && Number.isFinite(o.id) ? String(o.id) : e.uuid, a("assistant", e.uuid, "coerced a non-string message.id");
  if (typeof o.content === "string") o.content = [{ type: "text", text: o.content }];
  let s = o.content;
  if (!Array.isArray(s)) return a("assistant", e.uuid, "dropped \u2014 message.content is not an array"), false;
  let i = b(s, O, "assistant", e.uuid);
  if (i.length === 0 && s.length > 0) return a("assistant", e.uuid, "dropped \u2014 no valid content blocks remain"), false;
  if (i !== s) o.content = i;
  return S(o, r), true;
}
function S(e, r) {
  let o = [];
  if (e.model !== void 0 && typeof e.model !== "string") delete e.model, o.push("model");
  if (e.stop_reason !== void 0 && e.stop_reason !== null && typeof e.stop_reason !== "string") e.stop_reason = null, o.push("stop_reason");
  if (e.usage !== void 0 && !g().usage.safeParse(e.usage).success) delete e.usage, o.push("usage");
  if (o.length > 0) a("assistant", r, `removed malformed envelope field(s): ${o.join(", ")}`);
}
function x(e) {
  if (e.uuid !== void 0 && (typeof e.uuid !== "string" || e.uuid === "")) a("user", e.uuid, "minted a uuid \u2014 original was not a non-empty string"), e.uuid = (0, import_crypto.randomUUID)();
  let r = e.message;
  if (!u(r)) return a("user", e.uuid, "dropped \u2014 message is not an object"), false;
  let o = r.content;
  if (typeof o === "string") return true;
  if (!Array.isArray(o)) return a("user", e.uuid, "dropped \u2014 message.content is neither string nor array"), false;
  let s = b(o, R, "user", e.uuid);
  if (s.length === 0 && o.length > 0) return a("user", e.uuid, "dropped \u2014 no valid content blocks remain"), false;
  if (s !== o) r.content = s;
  return true;
}
function JUs(e) {
  if (!u(e)) return false;
  switch (e.type) {
    case "message_start":
      return u(e.message) && typeof e.message.id === "string";
    case "content_block_start": {
      let r = e.content_block;
      if (!u(r) || typeof r.type !== "string") return false;
      switch (r.type) {
        case "tool_use":
        case "server_tool_use":
          return typeof r.id === "string" && typeof r.name === "string";
        case "text":
          return typeof r.text === "string";
        case "thinking":
          return typeof r.thinking === "string";
        default:
          return true;
      }
    }
    case "content_block_delta": {
      let r = e.delta;
      if (!u(r)) return false;
      switch (r.type) {
        case "text_delta":
          return typeof r.text === "string";
        case "input_json_delta":
          return typeof r.partial_json === "string";
        case "signature_delta":
          return typeof r.signature === "string";
        case "thinking_delta":
          return typeof r.thinking === "string";
        default:
          return true;
      }
    }
    default:
      return true;
  }
}
function Kpt(e) {
  if (!u(e)) return true;
  try {
    let r = true;
    try {
      let s = z(e);
      if (s > 0) a(typeof e.type === "string" ? e.type : "unknown", e.uuid, `replaced ${s} subtree(s) nested deeper than ${y} levels with a marker`);
    } catch {
      r = false;
    }
    let o;
    switch (e.type) {
      case "assistant":
        o = T(e);
        break;
      case "user":
        o = x(e);
        break;
      case "stream_event":
        if (o = JUs(e.event), !o) a("stream_event", e.uuid, "dropped \u2014 inner event is malformed");
        break;
      default:
        o = true;
        break;
    }
    if (o && !r && k(e)) return a(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 nested deeper than ${y} levels`), false;
    return o;
  } catch (r) {
    return a(typeof e.type === "string" ? e.type : "unknown", e.uuid, `dropped \u2014 conformance threw: ${(0, import_chunk_jv7av99m.d)(r)}`), false;
  }
}
var U = ["blocked_path", "decision_reason", "decision_reason_type", "decision_reason_code", "decision_reason_rule_source", "title", "display_name", "description", "agent_id", "tool_kind", "server_prompt", "provenance_prompt_line"], N = [["decision_reason_hook_event", import_chunk_bzyb60p0.G5a], ["decision_reason_hook_source", import_chunk_bzyb60p0.Nro], ["decision_reason_hook_plugin_id", import_chunk_bzyb60p0.TMn]], D = ["classifier_approvable", "suppress_always_allow_rule", "rule_usually_offered", "default_to_no", "requires_user_interaction", "server_policy_ask_only"];
function Cte(e) {
  return typeof e.agent_id === "string" && e.agent_id !== "" && typeof e.tool_name === "string" && !(0, import_chunk_r9ecxfn9.Sst)(e.tool_name) && !(0, import_chunk_r9ecxfn9.BQ)(e.tool_name);
}
function Z$r(e) {
  if (!u(e)) return false;
  try {
    if (typeof e.tool_name !== "string" || typeof e.tool_use_id !== "string" || !u(e.input) || k(e)) return (0, import_chunk_w578pjby.t)("[wireFrameShape] can_use_tool request dropped \u2014 tool_name/tool_use_id not strings, input not an object, or nested too deep", { level: "error" }), false;
    let r = [];
    for (let o of U) if (e[o] !== void 0 && typeof e[o] !== "string") delete e[o], r.push(o);
    for (let [o, s] of N) if (e[o] !== void 0 && s(e[o]) === void 0) delete e[o], r.push(o);
    for (let o of D) if (e[o] !== void 0 && typeof e[o] !== "boolean") delete e[o], r.push(o);
    if (e.permission_suggestions !== void 0) {
      let o = e.permission_suggestions, s = Array.isArray(o) ? o.filter((i) => (0, import_chunk_z12zbtvr.S7)().safeParse(i).success) : [];
      if (!Array.isArray(o) || s.length !== o.length) if (r.push(`permission_suggestions (${Array.isArray(o) ? `${o.length - s.length} of ${o.length} entries` : "not an array"})`), s.length > 0) e.permission_suggestions = s;
      else delete e.permission_suggestions;
    }
    if (e.matched_ask_rule !== void 0) {
      let o = e.matched_ask_rule;
      if (!u(o) || typeof o.source !== "string" || typeof o.tool_name !== "string" || o.rule_content !== void 0 && typeof o.rule_content !== "string") delete e.matched_ask_rule, r.push("matched_ask_rule");
    }
    if (e.mcp_server !== void 0) {
      let o = e.mcp_server;
      if (!u(o) || typeof o.name !== "string" || typeof o.source !== "string") delete e.mcp_server, r.push("mcp_server");
    }
    if (e.mcp_skill !== void 0) {
      let o = e.mcp_skill;
      if (!u(o) || typeof o.name !== "string" || typeof o.version !== "string" || o.server_description !== void 0 && typeof o.server_description !== "string") delete e.mcp_skill, e.tool_kind = "mcp_skill", r.push("mcp_skill (tool_kind set to 'mcp_skill')");
    }
    if (e.computer_folder !== void 0) {
      let o = e.computer_folder;
      if (!u(o) || typeof o.path !== "string" || typeof o.computer_name !== "string") delete e.computer_folder, r.push("computer_folder");
    }
    if (r.length > 0) (0, import_chunk_w578pjby.t)(`[wireFrameShape] can_use_tool request ${e.tool_use_id}: removed malformed field(s): ${r.join(", ")}`, { level: "error" });
    return true;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`[wireFrameShape] can_use_tool request dropped \u2014 conformance threw: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "error" }), false;
  }
}
function ubn(e) {
  let r = "tool_use_id" in e ? e.tool_use_id : void 0;
  return { behavior: "deny", message: "Malformed permission request from worker", ...typeof r === "string" && { toolUseID: r } };
}
function eUr(e) {
  let r = e.worker_epoch;
  return typeof r === "number" && Number.isSafeInteger(r) && r > 0 ? r : void 0;
}
function Z3t(e) {
  let r = e;
  return r.type === "system" && (r.subtype === "status" && r.status === "requesting" || r.subtype === "init" && r.request_at_init === true);
}
