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
var chunk_ym431gm8_exports = {};
__export(chunk_ym431gm8_exports, {
  XKe: () => XKe,
  jQn: () => jQn
});
module.exports = __toCommonJS(chunk_ym431gm8_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
function XKe(n) {
  return n.replace(/[\r\n\u2028\u2029]+/g, " ");
}
function jQn(n, r) {
  let e = (0, import_chunk_xfj2cwfv.Pi)(n);
  if (e.length <= r) return e;
  let t = (0, import_chunk_7cfjrnwy.ee)(e, r), o = Array.from(e.slice(t.length)).length;
  return `${t} \u2026 (${o} more characters follow that are NOT shown in this message)`;
}
