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
var chunk_wyxkas6w_exports = {};
__export(chunk_wyxkas6w_exports, {
  FKo: () => FKo,
  iMa: () => iMa,
  tXs: () => tXs,
  ttr: () => ttr
});
module.exports = __toCommonJS(chunk_wyxkas6w_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
function tXs(n) {
  if (n === null || typeof n !== "object") return;
  let o = n.protocols;
  if (!Array.isArray(o)) return;
  let t = o.filter((r) => typeof r === "string");
  return t.length > 0 ? t : void 0;
}
function iMa(n) {
  let o = tXs(n);
  if (o === void 0) return "";
  return ` (subprotocols: ${o.map((t) => `"${t}"`).join(", ")})`;
}
var FKo = 4, e = 48;
function ttr(n) {
  let o = n.slice(0, FKo).map((r) => r.length > e ? `${(0, import_chunk_7cfjrnwy.ee)(r, e)}\u2026` : r), t = n.length - o.length;
  return `${o.map((r) => `"${r}"`).join(", ")}${t > 0 ? ` (+${t} more)` : ""}`;
}
