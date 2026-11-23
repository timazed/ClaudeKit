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
var chunk_4p6z73jq_exports = {};
__export(chunk_4p6z73jq_exports, {
  A5r: () => A5r,
  tZs: () => tZs
});
module.exports = __toCommonJS(chunk_4p6z73jq_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function A5r() {
  let e = (0, import_chunk_2yx6c1y2.kv)("model"), t = e === "policySettings" || e === "flagSettings" ? (0, import_chunk_2yx6c1y2.vt)().model : (0, import_chunk_865at33z.hCt)()?.model ?? (0, import_chunk_2yx6c1y2.vt)().model, i = import_chunk_c203g5kd.s.ANTHROPIC_MODEL || t || (0, import_chunk_865at33z.nke)() || void 0;
  return i && tZs(i, "persisted") || (0, import_chunk_865at33z.qd)();
}
function tZs(e, t) {
  if (!(0, import_chunk_865at33z.wo)(e)) return (0, import_chunk_865at33z.aI)(e) ?? void 0;
  return (0, import_chunk_865at33z.DGn)(e, t) ? void 0 : e;
}
