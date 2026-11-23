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
var chunk_hz25f5zd_exports = {};
__export(chunk_hz25f5zd_exports, {
  IIr: () => IIr,
  OIr: () => OIr,
  RPe: () => RPe,
  a0l: () => a0l,
  chn: () => chn,
  dOo: () => dOo
});
module.exports = __toCommonJS(chunk_hz25f5zd_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function a0l(n) {
  switch (n) {
    case "hipaa":
      return "HIPAA";
    case "zdr":
      return "ZDR (Zero Data Retention)";
    default:
      return (0, import_chunk_w578pjby.t)(`Unknown compliance_taint '${n}' from policyLimits`, { level: "warn" }), r;
  }
}
var r = "Organization policy", chn = "Per your organization's policy, some features are limited", dOo = "HIPAA configured", o = /* @__PURE__ */ new Set(["hipaa", "zdr"]);
function OIr(n) {
  return o.has(n) || false;
}
function IIr(n) {
  let e = (0, import_chunk_4smdap7r.M)(n), i = e.filter(OIr);
  if (i.length === e.length) return i;
  return (0, import_chunk_w578pjby.t)(`Unknown compliance_taint values from policyLimits (${e.length - i.length})`, { level: "warn" }), [...i, r];
}
var a = /* @__PURE__ */ new Set(["hipaa"]);
function RPe(n) {
  return (0, import_chunk_4smdap7r.M)(n).filter((e) => a.has(e));
}
