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
var chunk_jybgpkft_exports = {};
__export(chunk_jybgpkft_exports, {
  Aj: () => Aj
});
module.exports = __toCommonJS(chunk_jybgpkft_exports);
var import_chunk_tpn2kte3 = require("/$bunfs/root/chunk-tpn2kte3.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Aj = (0, import_chunk_w1d7ygsk.V)(function(s) {
  var r = (0, import_chunk_tpn2kte3.uQe)(), o = (e) => e[r.SMITHY_CONTEXT_KEY] || (e[r.SMITHY_CONTEXT_KEY] = {}), i = (e) => {
    if (typeof e === "function") return e;
    let t = Promise.resolve(e);
    return () => t;
  };
  s.getSmithyContext = o;
  s.normalizeProvider = i;
});
