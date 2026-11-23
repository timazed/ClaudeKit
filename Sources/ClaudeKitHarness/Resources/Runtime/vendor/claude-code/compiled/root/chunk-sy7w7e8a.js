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
var chunk_sy7w7e8a_exports = {};
__export(chunk_sy7w7e8a_exports, {
  uqe: () => uqe
});
module.exports = __toCommonJS(chunk_sy7w7e8a_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function n() {
  let e = (0, import_chunk_865at33z.Ld)();
  if (e === "opus" && (0, import_chunk_865at33z.VZ)() && !(0, import_chunk_865at33z.dI)((0, import_chunk_865at33z.RE)())) return { alias: "opus[1m]", name: "Opus 1M", multiplier: 5 };
  else if (e === "sonnet" && (0, import_chunk_865at33z.KZ)() && !(0, import_chunk_865at33z.dI)((0, import_chunk_865at33z.Nb)())) return { alias: "sonnet[1m]", name: "Sonnet 1M", multiplier: 5 };
  return null;
}
function uqe(e) {
  let t = n();
  if (!t) return null;
  switch (e) {
    case "warning":
      return `/model ${t.alias}`;
    case "tip":
      return `Tip: You have access to ${t.name} with ${t.multiplier}x more context`;
    default:
      return null;
  }
}
