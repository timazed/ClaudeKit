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
var chunk_k886eq88_exports = {};
__export(chunk_k886eq88_exports, {
  FTo: () => FTo,
  H2n: () => H2n,
  JGt: () => JGt,
  NS: () => NS,
  UAr: () => UAr,
  Wlt: () => Wlt,
  wGe: () => wGe
});
module.exports = __toCommonJS(chunk_k886eq88_exports);
var NS = 4096, wGe = 1e5, UAr = 28e3, Wlt = "nesting deeper than 100000 levels is not supported", H2n = "nesting deeper than 28000 levels is not supported", FTo = "the stack ran out while copying a value across the VM boundary", JGt = ["Maximum call stack size exceeded.", "Maximum call stack size exceeded"];
