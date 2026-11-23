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
var chunk_n6f4f9sf_exports = {};
__export(chunk_n6f4f9sf_exports, {
  ZSa: () => ZSa,
  eba: () => eba
});
module.exports = __toCommonJS(chunk_n6f4f9sf_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function ZSa() {
  try {
    let { value: e, source: n } = (0, import_chunk_865at33z.gn)("tengu_radiant_heron", false);
    switch (n) {
      case "payload":
      case "override":
        return e === true;
      case "disabled":
        return false;
      case "fallback":
        return (0, import_chunk_865at33z.ni)() ? false : "unknown";
      case "disk":
        return "unknown";
    }
  } catch {
    return "unknown";
  }
}
function eba() {
  return (0, import_chunk_865at33z.b)("tengu_radiant_heron", false);
}
