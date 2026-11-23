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
var chunk_wragst20_exports = {};
__export(chunk_wragst20_exports, {
  J5r: () => J5r
});
module.exports = __toCommonJS(chunk_wragst20_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
function J5r(e, n) {
  let o = (0, import_chunk_dw5px5e0.Tb)("--fast-mode");
  if (o !== "on" && o !== "off") return;
  (0, import_chunk_f9x2f6cx.oE)({ ...(0, import_chunk_f9x2f6cx.Fd)() ?? {}, fastMode: e }), (0, import_chunk_r3mm3x33.pr)(), (0, import_chunk_9e5mdyfk.BW)("--fast-mode", [], e ? "on" : "off", void 0, n);
}
