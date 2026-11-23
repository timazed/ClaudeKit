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
var chunk_wgyw76w5_exports = {};
__export(chunk_wgyw76w5_exports, {
  di: () => di
});
module.exports = __toCommonJS(chunk_wgyw76w5_exports);
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function n(r, e) {
  if ((0, import_chunk_ma3kja9f.T)(e)) {
    let o = /* @__PURE__ */ Object.create(null);
    for (let t of Object.keys(e).toSorted()) Object.defineProperty(o, t, { value: e[t], enumerable: true });
    return o;
  }
  return e;
}
var f = "\0unserializable:";
function s() {
  let r = 0;
  return () => `${f}${++r}`;
}
var u = s();
function di(r) {
  try {
    return JSON.stringify(r, n);
  } catch {
    return u();
  }
}
