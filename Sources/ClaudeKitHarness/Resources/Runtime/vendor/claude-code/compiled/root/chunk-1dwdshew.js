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
var chunk_1dwdshew_exports = {};
__export(chunk_1dwdshew_exports, {
  o1i: () => o1i,
  vyo: () => vyo
});
module.exports = __toCommonJS(chunk_1dwdshew_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_nq1amxs4 = require("/$bunfs/root/chunk-nq1amxs4.js");
var import_chunk_d19q7hh0 = require("/$bunfs/root/chunk-d19q7hh0.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var l = /* @__PURE__ */ new Map([["MCP server rejected the session credential", "credential_rejected"], ["CLI-owned MCP request not sent: its bearer was withheld", "credential_withheld"]]), m = [...import_chunk_nq1amxs4.Fyo, ...import_chunk_nq1amxs4.Nyo, "compartment_held", "compliance_state_unavailable", "org_toggle_unavailable", "org_type_disabled", "plan_required", "session_network_off", "session_network_off_cowritten", "session_network_off_shared_outside", "user_type_not_granted"], _ = /^[a-z_]+ failed \(HTTP (\d{3})\): (.*)/m;
function o1i(e) {
  let s = e.message === "not found" || e.message.startsWith("not found. If this is a public artifact ") ? "404" : _.exec(e.message)?.[1];
  if (s !== void 0) return Number(s);
  let n = (0, import_chunk_0jve1fep.et)(e.message, false), t = (0, import_chunk_ma3kja9f.T)(n) && (0, import_chunk_ma3kja9f.T)(n.error) ? n.error.status : void 0;
  return typeof t === "number" && Number.isInteger(t) && t >= 400 && t <= 599 ? t : void 0;
}
function vyo(e, s) {
  let n = e instanceof import_chunk_yz5b8aaa.Bm, t = n ? o1i(e) : !(e instanceof Error) || e.name === "McpError" || e.name === "ProtocolError" ? void 0 : "code" in e && typeof e.code === "number" ? e.code : "status" in e && typeof e.status === "number" ? e.status : void 0, a = t !== void 0 && Number.isInteger(t) && t >= 100 && t <= 599 ? t : void 0, r = n && a !== void 0 ? (0, import_chunk_0jve1fep.et)(_.exec(e.message)?.[2], false) : void 0, o = (0, import_chunk_ma3kja9f.T)(r) ? r.reason : void 0, i = e instanceof import_chunk_jv7av99m.A ? e.telemetryMessage : "", d = a !== void 0 || i.startsWith("SdkHttpError "), { transport: p, ...u } = (0, import_chunk_d19q7hh0.bU)(e, s);
  return { cause: (0, import_chunk_78g0060s.f)(n ? "tool_error" : e instanceof import_chunk_yz5b8aaa.iK ? e.expiryKind : d ? "http_error" : l.get(i) ?? (0, import_chunk_yz5b8aaa.gz)(e)), ...a !== void 0 && { http_status: a }, ...typeof o === "string" && o !== "" && { refusal_reason: (0, import_chunk_78g0060s.f)(m.find((c) => c === o) ?? "other") }, ...u };
}
