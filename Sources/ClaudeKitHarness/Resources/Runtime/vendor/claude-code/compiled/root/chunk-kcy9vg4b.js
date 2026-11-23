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
var chunk_kcy9vg4b_exports = {};
__export(chunk_kcy9vg4b_exports, {
  LS: () => LS
});
module.exports = __toCommonJS(chunk_kcy9vg4b_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var LS = { async get(e, t) {
  return import_chunk_3jjr3wje.bn.get(e, s(e, t));
}, async post(e, t, n) {
  return import_chunk_3jjr3wje.bn.post(e, t, s(e, n));
}, async put(e, t, n) {
  return import_chunk_3jjr3wje.bn.put(e, t, s(e, n));
}, async patch(e, t, n) {
  return import_chunk_3jjr3wje.bn.patch(e, t, s(e, n));
}, async delete(e, t) {
  return import_chunk_3jjr3wje.bn.delete(e, s(e, t));
} };
function s(e, t) {
  return (0, import_chunk_3jjr3wje.yRt)() && (0, import_chunk_702cfzzh.d0l)() ? { ...t, ...(0, import_chunk_3jjr3wje.XX)(e, t?.headers) } : t;
}
