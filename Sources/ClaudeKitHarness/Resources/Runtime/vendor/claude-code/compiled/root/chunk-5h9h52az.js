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
var chunk_5h9h52az_exports = {};
__export(chunk_5h9h52az_exports, {
  Rk: () => Rk,
  TTa: () => TTa,
  WEn: () => WEn,
  WL: () => WL,
  pht: () => pht
});
module.exports = __toCommonJS(chunk_5h9h52az_exports);
function pht(t, r) {
  switch (r) {
    case "bash":
      return `!${t}`;
    default:
      return t;
  }
}
function Rk(t) {
  if (t.startsWith("!")) return "bash";
  return "prompt";
}
function WL(t) {
  if (Rk(t) === "prompt") return t;
  return t.slice(1);
}
function WEn(t) {
  return t === "!";
}
function TTa({ nextValue: t, value: r, cursorOffset: n, mode: o }) {
  let e = Rk(t);
  if (n !== 0 || e === "prompt" || e === o) return false;
  return t.length === r.length + 1 || r.length === 0;
}
