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
var chunk_wyars3pe_exports = {};
__export(chunk_wyars3pe_exports, {
  Inr: () => Inr,
  Onr: () => Onr,
  Pnr: () => Pnr,
  V4o: () => V4o,
  hDt: () => hDt
});
module.exports = __toCommonJS(chunk_wyars3pe_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Inr = {};
(0, import_chunk_w1d7ygsk.jr)(Inr, { booleanOfInput: () => hDt, default: () => Inr, isHeldTrue: () => V4o, numberInputHint: () => Pnr, numberOfInput: () => Onr });
var hDt = (n) => (0, import_chunk_69qhefwa.Ne)(n) ? true : (0, import_chunk_69qhefwa.Oi)(n) ? false : void 0;
var V4o = (n) => n === true || n === "true";
function Pnr(n) {
  return `It takes a number${n.min !== void 0 || n.max !== void 0 ? ` between ${n.min ?? "-\u221E"} and ${n.max ?? "\u221E"}` : ""}.`;
}
function Onr(n, e) {
  let r = n.trim(), t = Number(r);
  return r !== "" && Number.isFinite(t) && (e.min === void 0 || t >= e.min) && (e.max === void 0 || t <= e.max) ? t : void 0;
}
