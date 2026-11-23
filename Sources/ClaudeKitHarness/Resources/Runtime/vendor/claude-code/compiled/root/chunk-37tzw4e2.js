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
var chunk_37tzw4e2_exports = {};
__export(chunk_37tzw4e2_exports, {
  CIt: () => CIt,
  I2s: () => I2s
});
module.exports = __toCommonJS(chunk_37tzw4e2_exports);
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var I2s = /[\x00-\x08\x0b-\x1f\x7f-\x9f]/, r = new RegExp(`(?!${(0, import_chunk_f64qna2j.Act)(";:")})${I2s.source}`, "g"), CIt = (e) => e.replace(/\r\n?/g, `
`).replace(r, "");
