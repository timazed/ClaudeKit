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
var chunk_n224j7gb_exports = {};
__export(chunk_n224j7gb_exports, {
  k1r: () => k1r,
  w1r: () => w1r
});
module.exports = __toCommonJS(chunk_n224j7gb_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
function w1r(e, o, r) {
  let t = (0, import_chunk_se72nykz.ps)(o, r);
  return e.engineStore.adopt((0, import_chunk_se72nykz.cOo)(t)), t;
}
function k1r() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_velvety_mango", true) !== false;
  } catch {
    return true;
  }
}
