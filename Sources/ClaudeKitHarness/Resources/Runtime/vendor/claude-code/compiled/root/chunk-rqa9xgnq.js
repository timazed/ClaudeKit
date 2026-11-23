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
var chunk_rqa9xgnq_exports = {};
__export(chunk_rqa9xgnq_exports, {
  fbn: () => fbn,
  g1o: () => g1o,
  lUr: () => lUr
});
module.exports = __toCommonJS(chunk_rqa9xgnq_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
function u() {
  let r = (0, import_chunk_69qhefwa.Be)(), e = /* @__PURE__ */ new Map(), o = 0;
  return { emit(i, s) {
    if (o === 0) {
      e.set(i, s);
      return;
    }
    r.emit(i, s);
  }, subscribe(i) {
    o++;
    let s = [...e];
    e.clear();
    for (let [g, l] of s) i(g, l);
    let c = r.subscribe(i), n = true;
    return () => {
      if (n) n = false, o--, c();
    };
  } };
}
var g1o = new import_chunk_pzzqg6s3.ze(u), fbn = "device-mcp-not-now";
function lUr(r) {
  return (e, o) => {
    (0, import_chunk_w578pjby.t)(`[remote-tools] ${e}: ${o}`), g1o.of(r).emit(e, o);
  };
}
