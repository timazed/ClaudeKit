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
var chunk_n3q6af6h_exports = {};
__export(chunk_n3q6af6h_exports, {
  Pjr: () => Pjr,
  kSa: () => kSa
});
module.exports = __toCommonJS(chunk_n3q6af6h_exports);
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function kSa(e, l) {
  let t = /* @__PURE__ */ new Map(), o = [];
  if (e === void 0 || e === null) return { manifests: t, malformedField: false, malformedServerNames: o };
  if (!(0, import_chunk_ma3kja9f.T)(e)) return { manifests: t, malformedField: true, malformedServerNames: o };
  for (let r of l) {
    if (!Object.hasOwn(e, r)) continue;
    let n = e[r], s = (0, import_chunk_ma3kja9f.T)(n) ? n.initializeResult : void 0, i = (0, import_chunk_ma3kja9f.T)(n) && n.toolsListResult !== null ? n.toolsListResult : void 0;
    if ((0, import_chunk_ma3kja9f.T)(s) && (i === void 0 || (0, import_chunk_ma3kja9f.T)(i))) t.set(r, i === void 0 ? { initializeResult: s } : { initializeResult: s, toolsListResult: i });
    else o.push(r);
  }
  return { manifests: t, malformedField: false, malformedServerNames: o };
}
var d = "notifications/tools/list_changed";
function Pjr(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && !("id" in e) && e.method === d;
}
