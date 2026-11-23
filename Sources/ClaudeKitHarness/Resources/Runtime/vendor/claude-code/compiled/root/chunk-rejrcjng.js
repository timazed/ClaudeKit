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
var chunk_rejrcjng_exports = {};
__export(chunk_rejrcjng_exports, {
  fri: () => fri,
  uri: () => uri
});
module.exports = __toCommonJS(chunk_rejrcjng_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var r = 4096;
function uri(...n) {
  for (let [e, o] of n.flatMap(Object.entries)) {
    let t = fri(e, o);
    if (t !== void 0) for (let i of c(e, o).values().filter(s)) (0, import_chunk_qdcbcsg7.mt)().heldConnectorLimits.set(i, t);
  }
}
function fri(n, e) {
  {
    let o = /* @__PURE__ */ new Set([(0, import_chunk_7625rswd.ian)(Reflect.get(e, "orgMaxPermission")), ...c(n, e).map((t) => s(t) ? (0, import_chunk_qdcbcsg7.mt)().heldConnectorLimits.get(t) : "blocked")]);
    return o.has("blocked") ? "blocked" : o.has("ask") ? "ask" : void 0;
  }
  return;
}
function s(n) {
  let e = (0, import_chunk_qdcbcsg7.mt)().heldConnectorLimits;
  return e.has(n) || e.size < r && n.length <= r;
}
function c(n, e) {
  let o = Reflect.get(e, "url"), t = typeof o === "string" ? URL.parse(o, "http://ccr")?.href : void 0, i = (0, import_chunk_865at33z.uIl)(t ?? "");
  return [n.toLowerCase(), ...t !== void 0 && i.length === 0 ? [t] : i];
}
