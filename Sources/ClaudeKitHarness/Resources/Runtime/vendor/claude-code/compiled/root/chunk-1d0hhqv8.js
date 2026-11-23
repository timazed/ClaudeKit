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
var chunk_1d0hhqv8_exports = {};
__export(chunk_1d0hhqv8_exports, {
  Aqe: () => Aqe,
  Cqe: () => Cqe,
  Tqe: () => Tqe
});
module.exports = __toCommonJS(chunk_1d0hhqv8_exports);
var Tqe = 10, Cqe = 2e3;
function Aqe(m, n, t = Date.now) {
  let e = m, o = t();
  function r() {
    let k = t(), u = Math.floor((k - o) / n);
    if (u > 0) e = Math.min(m, e + u), o += u * n;
  }
  return { tryConsume() {
    if (r(), e > 0) return e--, true;
    return false;
  }, tokens() {
    return r(), e;
  }, msUntilToken() {
    if (r(), e > 0) return 0;
    return Math.max(0, o + n - t());
  } };
}
