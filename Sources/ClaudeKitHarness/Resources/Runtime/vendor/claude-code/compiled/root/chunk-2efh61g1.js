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
var chunk_2efh61g1_exports = {};
__export(chunk_2efh61g1_exports, {
  TCa: () => TCa,
  n6r: () => n6r
});
module.exports = __toCommonJS(chunk_2efh61g1_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
function n6r(e) {
  let r = (0, import_chunk_2nv4wrez.q2i)(e);
  if (r === null) {
    (0, import_chunk_cqa9hrgx.l)("feedback_refusal_memory", "no_principal");
    return;
  }
  (0, import_chunk_cqa9hrgx.u)("feedback_refusal_memory"), (0, import_chunk_865at33z.Ke)((o) => ({ ...o, feedbackRefusedByServer: r }));
}
function TCa() {
  let e = (0, import_chunk_865at33z.ge)().feedbackRefusedByServer;
  if (typeof e?.principal === "string" && typeof e.at === "number") (0, import_chunk_2nv4wrez.K2i)(e);
}
