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
var chunk_35rmjae5_exports = {};
__export(chunk_35rmjae5_exports, {
  u8t: () => u8t
});
module.exports = __toCommonJS(chunk_35rmjae5_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function u8t() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_rib", false) === true;
  } catch {
    return false;
  }
}
