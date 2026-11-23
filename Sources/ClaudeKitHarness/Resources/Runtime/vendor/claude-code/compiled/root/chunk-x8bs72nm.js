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
var chunk_x8bs72nm_exports = {};
__export(chunk_x8bs72nm_exports, {
  Aht: () => Aht,
  Rht: () => Rht,
  SY: () => SY,
  tqe: () => tqe
});
module.exports = __toCommonJS(chunk_x8bs72nm_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var Aht = 2e3, SY = "[line break] ";
function tqe(e, r = 0) {
  let t = Aht + (e.startsWith(SY, r) ? SY.length : 0);
  if (e.length - r <= t) return { code: e.slice(r), truncatedChars: 0 };
  let o = e.slice(r, r + t + 1), n = (0, import_chunk_7cfjrnwy.ee)(o, t);
  return { code: n, truncatedChars: e.length - r - n.length };
}
function Rht(e) {
  return ` \u2026 [+${e} chars]`;
}
