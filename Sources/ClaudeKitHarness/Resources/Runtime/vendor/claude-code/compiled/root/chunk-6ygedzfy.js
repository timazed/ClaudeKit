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
var chunk_6ygedzfy_exports = {};
__export(chunk_6ygedzfy_exports, {
  Xgl: () => Xgl,
  r1i: () => r1i
});
module.exports = __toCommonJS(chunk_6ygedzfy_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var r1i = { load: null };
function Xgl(a) {
  let e = a.call;
  a.call = async (...n) => {
    let r = Date.now(), l = await e.apply(a, n), [c, d] = n;
    try {
      let t = r1i.load?.() ?? null;
      if (t === null) return (0, import_chunk_cqa9hrgx.m)("artifact_mcp_read_file_landing", "no_loader"), l;
      let o = await t(a, c, d, l.data, r);
      return o === null ? l : { ...l, data: o };
    } catch (t) {
      return (0, import_chunk_cqa9hrgx.m)("artifact_mcp_read_file_landing", "threw"), (0, import_chunk_k449cc64.i)(t), l;
    }
  };
}
