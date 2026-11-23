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
var chunk_t808a7f9_exports = {};
__export(chunk_t808a7f9_exports, {
  $Yt: () => $Yt
});
module.exports = __toCommonJS(chunk_t808a7f9_exports);
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
function $Yt() {
  return (0, import_chunk_865at33z.Qt)() ? "bg" : (0, import_chunk_wtm85h0y.Yc)() ? "teammate" : (0, import_chunk_7d2qr9z5.AG)() ? "remote" : (0, import_chunk_3t7ve0wy.Ol)() ? "desktop" : (0, import_chunk_3t7ve0wy.fh)() === "claude-vscode" ? "vscode" : null;
}
