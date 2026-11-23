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
var chunk_tm4h4nvb_exports = {};
__export(chunk_tm4h4nvb_exports, {
  enr: () => enr,
  tnr: () => tnr
});
module.exports = __toCommonJS(chunk_tm4h4nvb_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function enr(e, n) {
  return { targets: e.filter((t) => (0, import_chunk_bzyb60p0.xQr)(t, n)), outOfBandNote: (0, import_chunk_bzyb60p0.j_t)(e, true, n) };
}
async function tnr(e, n) {
  let t = await Promise.allSettled(e.map((o) => n(o.name))), r = 0;
  for (let o of t) if (o.status === "fulfilled" && o.value.client.type === "connected") r++;
  return { results: t, connected: r };
}
