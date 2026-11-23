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
var chunk_g49rrdp1_exports = {};
__export(chunk_g49rrdp1_exports, {
  TSn: () => TSn,
  e9l: () => e9l,
  oFo: () => oFo
});
module.exports = __toCommonJS(chunk_g49rrdp1_exports);
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_crypto = require("crypto");
function e9l(o, t) {
  let e = o.mapToolResultToToolResultBlockParam(t.data, `toolu_serve_${(0, import_crypto.randomBytes)(12).toString("hex")}`);
  return oFo(e?.content ?? "", t.data, e?.is_error === true);
}
function oFo(o, t, e = false, r = []) {
  return (0, import_chunk_syr33dp2.y4)({ envelope: { v: import_chunk_syr33dp2.Zm, outcome: "completed", target: TSn(), is_error: e, content: (0, import_chunk_syr33dp2.gvr)(o), output: t, ...r.length > 0 && { notes: r } }, content: o });
}
function TSn() {
  return { name: (0, import_chunk_syr33dp2.p9)(), working_dir: (0, import_chunk_18rsj2ts.pe)() };
}
