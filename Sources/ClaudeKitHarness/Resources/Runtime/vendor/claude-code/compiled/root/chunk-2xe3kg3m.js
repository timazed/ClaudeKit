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
var chunk_2xe3kg3m_exports = {};
__export(chunk_2xe3kg3m_exports, {
  $Uo: () => $Uo,
  UUo: () => UUo,
  mWr: () => mWr
});
module.exports = __toCommonJS(chunk_2xe3kg3m_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var $Uo = { create: "Cloud session created", attach: "Attached to cloud session", move: "Cloud session created", hidden: "Cloud session created (deleted if you leave it empty)" }, UUo = " \xB7 code here or at ";
function n(e, s) {
  return `${$Uo[e]}${UUo}${s}`;
}
function mWr(e, s, o) {
  let t = n(e, s);
  return o ? (0, import_chunk_bzyb60p0.S9a)(e, s, t) : (0, import_chunk_bzyb60p0.Pt)(t, "info");
}
