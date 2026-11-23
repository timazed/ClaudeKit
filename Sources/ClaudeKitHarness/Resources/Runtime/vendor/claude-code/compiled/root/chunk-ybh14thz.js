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
var chunk_ybh14thz_exports = {};
__export(chunk_ybh14thz_exports, {
  iks: () => iks
});
module.exports = __toCommonJS(chunk_ybh14thz_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
async function iks(r) {
  let m = (0, import_chunk_4smdap7r.M)([(0, import_chunk_f9x2f6cx.ns)(), (0, import_chunk_18rsj2ts.oa)()]).filter((t) => t !== null);
  for (let t of m) try {
    let o = await (0, import_chunk_w5s307zm.Ona)(r, t);
    if (o !== void 0) {
      let e = await (0, import_chunk_xfj2cwfv.fHl)(t, o.gitRoot, r);
      if (typeof e === "string") (0, import_chunk_w5s307zm.f0s)(e, o.gitRoot, o.canonicalRoot);
    }
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
