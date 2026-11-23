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
var chunk_fd8kxwhm_exports = {};
__export(chunk_fd8kxwhm_exports, {
  OUo: () => OUo,
  Tmt: () => Tmt,
  a9t: () => a9t,
  hIt: () => hIt,
  iWr: () => iWr
});
module.exports = __toCommonJS(chunk_fd8kxwhm_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_538r8e0n = require("/$bunfs/root/chunk-538r8e0n.js");
var l = /* @__PURE__ */ new Set(["INVALID_CONFIG", "UNCONFIGURED", "AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED", "CLI_OWNED_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "CLAUDEAI_BEARER_REJECTED", "ENDPOINT_NOT_FOUND", "CONNECT_TIMEOUT", "CONNECT_SUSPENDED", "CREDENTIAL_STORE_UNAVAILABLE", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
function OUo(e) {
  let o = (0, import_chunk_538r8e0n.gTe)(e.name, e.config, { detail: "origin" }), n = e.errorCode, s = (r) => (0, import_chunk_538r8e0n.Nm)(e.name, e.config, r);
  if (n !== void 0 && l.has(n)) return e.error !== void 0 ? s(e.error) : n;
  if (n) {
    let r = a(n);
    return o ? `${r} at ${o}` : r;
  }
  return e.error !== void 0 ? s(e.error) : "";
}
function a(e) {
  let o = Number(e);
  return e === "23" ? "request timed out" : Number.isInteger(o) && o >= 100 && o <= 599 ? `HTTP ${e}` : e;
}
function iWr(e) {
  let { errorCode: o, displayDetail: n } = e, s = (i) => (0, import_chunk_271xsh6x.xR)((0, import_chunk_538r8e0n.Nm)(e.name, e.config, i));
  if (o && !l.has(o)) {
    let i = a(o), c = e.error, u = c === void 0 ? i : c === i || c.startsWith(`${i}: `) ? c : `${i}: ${c}`;
    return s(n ? `${u} ${n}` : u);
  }
  let r = e.error ?? o ?? "", f = n ? `${r} ${n}`.trim() : r;
  return f === "" ? f : s(f);
}
function a9t(e, o, n, s) {
  switch (e.client.type) {
    case "connected":
      if (e.client.discoveryBearerRejected) return { message: `Reconnected to ${(0, import_chunk_271xsh6x.xr)(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`, success: false };
      if (e.client.toolsListError) {
        if (n.persistsOffBox) return (0, import_chunk_w578pjby.t)(`mcp reconnect tools/list failed for ${(0, import_chunk_kx2fp6pc.wn)(o)}: ${(0, import_chunk_538r8e0n.Nm)(o, e.client.config, e.client.toolsListError)}`, { level: "error" }), { message: `Reconnected to ${(0, import_chunk_271xsh6x.xr)(o)}, but couldn't load its tools (detail withheld on this connection).`, success: false };
        return { message: `Reconnected to ${(0, import_chunk_271xsh6x.xr)(o)}, but couldn't load its tools: ${(0, import_chunk_271xsh6x.Bl)((0, import_chunk_538r8e0n.Nm)(o, e.client.config, e.client.toolsListError))}`, success: false };
      }
      return { message: `Reconnected to ${(0, import_chunk_271xsh6x.xr)(o)}.`, success: true };
    case "needs-auth":
      return { message: s?.hasHeadersHelper ? `${(0, import_chunk_271xsh6x.xr)(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.` : `${(0, import_chunk_271xsh6x.xr)(o)} requires authentication. Use the 'Authenticate' option.`, success: false };
    case "failed": {
      let r = OUo(e.client);
      if (n.persistsOffBox) {
        if (r) (0, import_chunk_w578pjby.t)(`mcp reconnect failed for ${(0, import_chunk_kx2fp6pc.wn)(o)}: ${r}`, { level: "error" });
        return { message: `Couldn't reconnect to ${(0, import_chunk_271xsh6x.xr)(o)}${r ? " (detail withheld on this connection)" : ""}.`, success: false };
      }
      return { message: r ? `Couldn't reconnect to ${(0, import_chunk_271xsh6x.xr)(o)}: ${(0, import_chunk_271xsh6x.Bl)(r)}` : `Couldn't reconnect to ${(0, import_chunk_271xsh6x.xr)(o)}.`, success: false };
    }
    case "disabled":
      return { message: e.client.heldBy === void 0 ? `Unknown result when reconnecting to ${(0, import_chunk_271xsh6x.xr)(o)}.` : `${(0, import_chunk_bzyb60p0.yye)(o, e.client.heldBy)}.`, success: false };
    default:
      return { message: `Unknown result when reconnecting to ${(0, import_chunk_271xsh6x.xr)(o)}.`, success: false };
  }
}
function hIt(e, o, n) {
  let s = n.config ? (0, import_chunk_538r8e0n.Nm)(o, n.config, (0, import_chunk_jv7av99m.d)(e)) : (0, import_chunk_jv7av99m.d)(e);
  if (e instanceof import_chunk_jv7av99m.gr) return (0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(e), void 0, "none");
  if (n.persistsOffBox) return (0, import_chunk_w578pjby.t)(`mcp reconnect error for ${(0, import_chunk_kx2fp6pc.wn)(o)}: ${s}`, { level: "error" }), `Couldn't reconnect to ${(0, import_chunk_271xsh6x.xr)(o)} (detail withheld on this connection).`;
  return `Couldn't reconnect to ${(0, import_chunk_271xsh6x.xr)(o)}: ${(0, import_chunk_271xsh6x.Bl)(s)}`;
}
function Tmt(e, o, n, s) {
  let r = s.config ? (0, import_chunk_538r8e0n.Nm)(o, s.config, (0, import_chunk_jv7av99m.d)(e)) : (0, import_chunk_jv7av99m.d)(e);
  if (e instanceof import_chunk_jv7av99m.gr) return (0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(e), void 0, "none");
  if (s.persistsOffBox) return (0, import_chunk_w578pjby.t)(`mcp ${n} failed for ${(0, import_chunk_kx2fp6pc.wn)(o)}: ${r}`, { level: "error" }), `Couldn't ${n} MCP server "${(0, import_chunk_271xsh6x.xr)(o)}" (detail withheld on this connection).`;
  return `Couldn't ${n} MCP server "${(0, import_chunk_271xsh6x.xr)(o)}": ${(0, import_chunk_271xsh6x.Bl)(r)}`;
}
