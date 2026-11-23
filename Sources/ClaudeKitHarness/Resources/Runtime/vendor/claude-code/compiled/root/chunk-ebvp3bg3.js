const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ebvp3bg3_exports = {};
__export(chunk_ebvp3bg3_exports, {
  Ger: () => Ger,
  WIa: () => WIa
});
module.exports = __toCommonJS(chunk_ebvp3bg3_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
function WIa(o, i, e) {
  (0, import_chunk_865at33z.to)().bundledWorkflows.push({ source: "built-in", ...i, script: o, disableModelInvocation: e?.disableModelInvocation });
}
function Ger() {
  if ((0, import_chunk_5nf47kr4.Xre)()) return [];
  let o = (0, import_chunk_865at33z.to)().bundledWorkflows;
  if ((0, import_chunk_5nf47kr4.HTt)()) return o.filter((i) => !(0, import_chunk_5nf47kr4.Jre)(i.name));
  return o;
}
