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
var chunk_n0xr5s2h_exports = {};
__export(chunk_n0xr5s2h_exports, {
  Hnr: () => Hnr,
  Mnr: () => Mnr
});
module.exports = __toCommonJS(chunk_n0xr5s2h_exports);
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var Mnr = 2, i = { width: 43, height: 33 }, o = 1024;
function Hnr(d, t) {
  if (d !== "kitty" || t === void 0) return;
  let e = Mnr * t.height, n = Math.ceil(i.width * Math.floor(e / i.height) / t.width), h = n * t.width;
  return e >= i.height && Math.max(h, e) <= o && n <= import_chunk_0w2wb7gk.lvs ? { columns: n, width: h, height: e } : void 0;
}
