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
var chunk_1cer6q9x_exports = {};
__export(chunk_1cer6q9x_exports, {
  JE: () => JE
});
module.exports = __toCommonJS(chunk_1cer6q9x_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var n = /(?![\u200C\u200D])[\p{Cf}\u2028\u2029]/gu, o = /[\u001b\u0080-\u009f]/g, c = 8;
function JE(u) {
  let e = u.replace(o, "").replace(import_chunk_7cfjrnwy.q8, "").replace(/[\v\f\r]/g, "");
  for (let r = 0; r < c; r++) {
    let t = (0, import_chunk_7cfjrnwy.qy)(e.replace(n, ""));
    if (t === e) return e;
    e = t;
  }
  return e.replace(/[\ud800-\udfff]/g, "").replace(n, "");
}
