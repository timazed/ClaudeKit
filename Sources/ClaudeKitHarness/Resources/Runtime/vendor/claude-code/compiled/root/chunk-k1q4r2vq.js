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
var chunk_k1q4r2vq_exports = {};
__export(chunk_k1q4r2vq_exports, {
  Mer: () => Mer
});
module.exports = __toCommonJS(chunk_k1q4r2vq_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
function Mer({ lineage: s, agentId: e }, r) {
  return s && Object.values(r.all()).find((t) => [t.id, (0, import_chunk_z6hn62tj.BAe)(t)].some((i) => s.has(i)) && (!(0, import_chunk_ed372ykp.$o)(t.status) || t.id !== e && (0, import_chunk_bzyb60p0.Znt)(t)));
}
