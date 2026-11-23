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
var chunk_3rzdsfp6_exports = {};
__export(chunk_3rzdsfp6_exports, {
  Sgt: () => Sgt,
  dZs: () => dZs
});
module.exports = __toCommonJS(chunk_3rzdsfp6_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
function dZs() {
  return (0, import_chunk_865at33z.b)("tengu_propose_goal", false);
}
function Sgt() {
  if ((0, import_chunk_f9x2f6cx.Se)() || (0, import_chunk_f9x2f6cx.Hn)()) return;
  if ((0, import_chunk_f9x2f6cx.gh)()) return;
  if ((0, import_chunk_865at33z.Qt)()) return;
  if (!dZs()) return;
  let e = (0, import_chunk_2yx6c1y2.mut)();
  return e === "disabled" ? void 0 : e;
}
