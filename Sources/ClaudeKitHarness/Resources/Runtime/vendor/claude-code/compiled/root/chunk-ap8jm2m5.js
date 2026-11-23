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
var chunk_ap8jm2m5_exports = {};
__export(chunk_ap8jm2m5_exports, {
  dMt: () => dMt
});
module.exports = __toCommonJS(chunk_ap8jm2m5_exports);
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var s = new RegExp("\\s|\\P{ASCII}", "u"), i = /^(?:[.~{\\]|\/[^\s/]*\/|\w+:\S)/, p = /(?:^|[\s,])(?![A-Z\s,]|mcp__|$)/;
function dMt(e = process.argv.slice(2)) {
  if ((0, import_chunk_dw5px5e0.rSn)(e) !== -1) return;
  for (let t = 0; t < e.length; t++) {
    let o = e[t], r = (0, import_chunk_dw5px5e0.bVe)(e, t), n = e[r]?.trim();
    if (import_chunk_dw5px5e0.g5n.has(o) && r > t + 1 && n !== void 0 && s.test(n) && !i.test(n) && p.test(n.replace(/\(.*\)/s, ""))) return { problem: `"${(0, import_chunk_f64qna2j.Tt)((0, import_chunk_7cfjrnwy.el)(n), 40)}" was read as a value of ${o}, not as a prompt`, fix: `put a prompt before ${o} or after --` };
    t = r;
  }
  return;
}
