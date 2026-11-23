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
var chunk_te8h63e7_exports = {};
__export(chunk_te8h63e7_exports, {
  bbn: () => bbn
});
module.exports = __toCommonJS(chunk_te8h63e7_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function bbn() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_lazy_dove", false) === true;
  } catch {
    return false;
  }
}
