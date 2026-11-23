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
var chunk_drzsvpnd_exports = {};
__export(chunk_drzsvpnd_exports, {
  $6r: () => $6r,
  WQn: () => WQn
});
module.exports = __toCommonJS(chunk_drzsvpnd_exports);
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_ym431gm8 = require("/$bunfs/root/chunk-ym431gm8.js");
var o = 48;
function WQn(r) {
  return (0, import_chunk_xfj2cwfv.X4)((0, import_chunk_ym431gm8.XKe)(r)).replace(/[\s\u2800]+/g, " ").trim();
}
function $6r(r, t) {
  let n = (0, import_chunk_f64qna2j.Au)(WQn(t), o, { hard: true, trim: true }).split(`
`);
  return [r, ...n.map((i) => `\u2502 ${i}`)].join(`
`);
}
