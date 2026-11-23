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
var chunk_z1w66k9b_exports = {};
__export(chunk_z1w66k9b_exports, {
  Q$r: () => Q$r
});
module.exports = __toCommonJS(chunk_z1w66k9b_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function Q$r(i) {
  let n = "client_platform" in i ? i.client_platform : void 0;
  return !((0, import_chunk_865at33z.ANe)("origin" in i ? i.origin : void 0, "isSynthetic" in i && Boolean(i.isSynthetic)) || "is_meta" in i && i.is_meta === true || "seeded_summon" in i && i.seeded_summon === true || "client_composed" in i && i.client_composed === true || "inbound_origin" in i && i.inbound_origin !== void 0 || n !== void 0 && !(typeof n === "string" && ((0, import_chunk_npsm5tcc.vG)(n) || (0, import_chunk_npsm5tcc.FUt)(n))) || (0, import_chunk_xfj2cwfv.J4)(i) || (0, import_chunk_bzyb60p0.Rie)("initiator" in i && typeof i.initiator === "string" ? i.initiator : void 0) !== void 0);
}
