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
var chunk_3f4m74y6_exports = {};
__export(chunk_3f4m74y6_exports, {
  A8: () => A8,
  Qta: () => Qta,
  ZDr: () => ZDr,
  ZFe: () => ZFe,
  dDo: () => dDo,
  kqt: () => kqt,
  mT: () => mT,
  oJ: () => oJ,
  xn: () => xn
});
module.exports = __toCommonJS(chunk_3f4m74y6_exports);
var oJ = "claude.ai ", A8 = "claude_ai_";
function xn(t) {
  let r = t.replace(/[^a-zA-Z0-9_-]/g, "_");
  if (t.startsWith("claude.ai ")) r = r.replace(/_+/g, "_").replace(/^_|_$/g, "");
  return r;
}
var e = "claudeai_";
function mT(t) {
  return xn(t).toLowerCase().replace(/[-_]+/g, "_").replace(/^_|_$/g, "");
}
function dDo(t) {
  return `${mT(t)}_`.startsWith("plugin_");
}
var ZDr = "org-connector-", Qta = 128;
function ZFe(t) {
  if (t.length > Qta) return false;
  let r = `${mT(t)}_`;
  return r.startsWith("org_connector_") || r.startsWith("orgconnector_");
}
function kqt(t) {
  let r = `${mT(t)}_`;
  return r.startsWith("claude_ai_") || r.startsWith(e);
}
