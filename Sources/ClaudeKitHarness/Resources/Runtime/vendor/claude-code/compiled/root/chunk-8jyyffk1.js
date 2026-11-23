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
var chunk_8jyyffk1_exports = {};
__export(chunk_8jyyffk1_exports, {
  met: () => met
});
module.exports = __toCommonJS(chunk_8jyyffk1_exports);
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
function met() {
  let e = (0, import_chunk_2yx6c1y2.vt)().defaultShell;
  if (e === "bash" && !(0, import_chunk_wwft95x8.Gd)()) return "powershell";
  if (e === "powershell" && !(0, import_chunk_wwft95x8.vR)()) return "bash";
  return e ?? ((0, import_chunk_wwft95x8.Gd)() ? "bash" : "powershell");
}
