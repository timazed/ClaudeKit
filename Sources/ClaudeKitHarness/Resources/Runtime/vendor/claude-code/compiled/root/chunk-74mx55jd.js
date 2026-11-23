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
var chunk_74mx55jd_exports = {};
__export(chunk_74mx55jd_exports, {
  KQ: () => KQ
});
module.exports = __toCommonJS(chunk_74mx55jd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var s = new import_chunk_2904xtvq.j(() => ({ alreadyReported: /* @__PURE__ */ new Set() }));
function KQ(r) {
  try {
    let e = s.of((0, import_chunk_f9x2f6cx.N)().host);
    if (!e.alreadyReported.has(r)) e.alreadyReported.add(r), e.listener?.(r);
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
