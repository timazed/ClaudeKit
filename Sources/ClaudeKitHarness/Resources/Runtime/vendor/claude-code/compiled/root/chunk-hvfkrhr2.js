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
var chunk_hvfkrhr2_exports = {};
__export(chunk_hvfkrhr2_exports, {
  EAe: () => EAe,
  fll: () => fll,
  mll: () => mll,
  pll: () => pll,
  ull: () => ull
});
module.exports = __toCommonJS(chunk_hvfkrhr2_exports);
function EAe(r) {
  let n = /^git version (\d+)\.(\d+)\.(\d+)/.exec(r.trim());
  return n === null ? null : { major: Number(n[1]), minor: Number(n[2]), patch: Number(n[3]) };
}
function ull(r) {
  return r !== null && (r.major > 2 || r.major === 2 && r.minor >= 32);
}
function fll(r) {
  return r !== null && (r.major > 2 || r.major === 2 && r.minor >= 32);
}
function pll(r) {
  return r !== null && (r.major > 2 || r.major === 2 && r.minor >= 35);
}
function mll(r) {
  return r !== null && (r.major > 2 || r.major === 2 && r.minor >= 36);
}
