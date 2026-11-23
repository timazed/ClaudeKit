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
var chunk_57sd0ak5_exports = {};
__export(chunk_57sd0ak5_exports, {
  Dl: () => Dl,
  FU: () => FU,
  Ure: () => Ure
});
module.exports = __toCommonJS(chunk_57sd0ak5_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
function Dl(n) {
  let t = (0, import_chunk_2yx6c1y2._e)("policySettings")?.strictPluginOnlyCustomization;
  if (t === true) return true;
  if (Array.isArray(t)) return t.includes(n);
  return false;
}
var e = /* @__PURE__ */ new Set(["plugin", "policySettings", "built-in", "builtin", "bundled"]);
function FU(n) {
  return n !== void 0 && e.has(n);
}
function Ure(n, { source: t, plugin: i }) {
  if (t === "plugin") return (0, import_chunk_xcgcdx61.is)(i ?? "") === import_chunk_xcgcdx61.lh && import_chunk_xcgcdx61.pEe.some(Dl);
  return !(FU(t) || t === "flagSettings" || t === "mcp") && Dl(n);
}
