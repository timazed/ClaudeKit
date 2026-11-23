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
var chunk_99ajhsqk_exports = {};
__export(chunk_99ajhsqk_exports, {
  YVo: () => YVo,
  h7l: () => h7l
});
module.exports = __toCommonJS(chunk_99ajhsqk_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_wtnnmdmx = require("/$bunfs/root/chunk-wtnnmdmx.js");
async function h7l(r, t) {
  let e = r.trim(), o = t.getAppState(), a = (0, import_chunk_865at33z.jt)(o.mainLoopModelForSession ?? o.mainLoopModel ?? (0, import_chunk_865at33z.xE)());
  if (import_chunk_k449cc64.bF.includes(e)) return { type: "text", value: (0, import_chunk_wtnnmdmx.sqr)() };
  if (e === "current" || e === "status") {
    let { message: s } = (0, import_chunk_wtnnmdmx.ger)((0, import_chunk_bz1f2qnq.e_)(t), a, o.ultracode);
    return { type: "text", value: s };
  }
  if (!e) return { type: "text", value: `Usage: /effort <${(0, import_chunk_k67pwqya.hwe)(a).join("|")}|auto${(0, import_chunk_k67pwqya.jG)(a) ? "|ultracode [on|off]" : ""}>` };
  return { type: "text", value: await YVo(e, t, "noninteractive") };
}
async function YVo(r, t, e) {
  return (await (0, import_chunk_wtnnmdmx.H$e)(r, { effort: (0, import_chunk_bz1f2qnq.e_)(t), ultracode: (0, import_chunk_bz1f2qnq.CYe)(t), route: e }, t.setAppState, !t.options.isNonInteractiveSession, t.storageV5)).message;
}
