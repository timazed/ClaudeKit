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
var chunk_7n1spq36_exports = {};
__export(chunk_7n1spq36_exports, {
  AWl: () => AWl,
  CWl: () => CWl,
  Eyn: () => Eyn,
  GLr: () => GLr,
  Mu: () => Mu,
  OWl: () => OWl,
  PWl: () => PWl,
  RWl: () => RWl,
  Tyn: () => Tyn,
  U4t: () => U4t,
  Xg: () => Xg,
  _sa: () => _sa,
  gsa: () => gsa,
  hsa: () => hsa,
  iLo: () => iLo,
  o3n: () => o3n,
  un: () => un,
  vyn: () => vyn,
  wQe: () => wQe,
  xWl: () => xWl,
  zLs: () => zLs
});
module.exports = __toCommonJS(chunk_7n1spq36_exports);
function Mu(e, t) {
  return { code: "InvalidArgument", argument: e, ...t !== void 0 && { reason: t } };
}
function GLr(e = "unknown", t) {
  return { code: "Unavailable", failureClass: e, ...t?.key !== void 0 && { key: t.key }, ...t?.retryAfterMs !== void 0 && { retryAfterMs: t.retryAfterMs }, ...t?.telemetryCode !== void 0 && { telemetryCode: t.telemetryCode } };
}
var Eyn = "OtherNames";
var vyn = "LeafMoved", iLo = "HardeningUnavailable", hsa = "RemoteLink", CWl = "AsideStranded";
var zLs = "Unsupported";
function Tyn(e) {
  return wQe(e) && e.code === "Failed" && e.telemetryCode === zLs;
}
var n = "ByteViewUnsupported";
function o3n(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === n;
}
var r = "StoreFenced";
function gsa(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === r;
}
var AWl = "SourceNotRegular", RWl = "SourceTooLarge", xWl = "SourceShared", PWl = "SourceOutside";
var o = /* @__PURE__ */ new Set(["InvalidArgument", "NotFound", "AlreadyExists", "PreconditionFailed", "LeaseHeld", "Unavailable", "Failed", "ScopeNotFound"]);
function wQe(e) {
  return typeof e === "object" && e !== null && "code" in e && typeof e.code === "string" && o.has(e.code);
}
var _sa = "AbsentParent";
function U4t(e) {
  return e.code === "Failed" && "telemetryCode" in e && e.telemetryCode === _sa;
}
function Xg(e) {
  if (U4t(e)) return "ENOENT";
  return "telemetryCode" in e ? e.telemetryCode : void 0;
}
var OWl = "TooLarge";
function un(e) {
  return e.code + ("failureClass" in e ? ` ${e.failureClass}` : "") + ("telemetryCode" in e && e.telemetryCode ? ` ${e.telemetryCode}` : "") + ("cause" in e && e.cause ? `: ${i(e.cause)}` : "");
}
function i(e) {
  return e instanceof Error ? e.message : String(e);
}
