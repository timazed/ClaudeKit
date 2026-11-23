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
var chunk_v8rvzaxg_exports = {};
__export(chunk_v8rvzaxg_exports, {
  CONTRACT_MD: () => C,
  dealDesignGuide: () => x
});
module.exports = __toCommonJS(chunk_v8rvzaxg_exports);
var import_chunk_0vw1gz5c = require("/$bunfs/root/chunk-0vw1gz5c.js");
var import_chunk_6wkvjx00 = require("/$bunfs/root/chunk-6wkvjx00.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_crypto = require("crypto");
var e = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/contract-3qfaf3rd.md");
var t = (0, import_chunk_w1d7ygsk.ft)("/$bunfs/root/deck-wx3e6rww.md");
var a = "/$bunfs/root/design-5e501774.md.zst";
var o = (0, import_chunk_0vw1gz5c.Wt)(a, __dirname);
var c = "{{cards}}", f = 3, C = e;
function x(i) {
  let n = (0, import_chunk_6wkvjx00.Xle)(t.trim().split(`
`), (r) => (0, import_crypto.createHash)("sha256").update(i).update(r).digest("hex")).slice(0, f).join(`
`);
  return o.replace(c, () => n);
}
