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
var chunk_8bs72yvf_exports = {};
__export(chunk_8bs72yvf_exports, {
  runtimeBlockInsertionIndex: () => o
});
module.exports = __toCommonJS(chunk_8bs72yvf_exports);
var import_chunk_hnffg7ty = require("/$bunfs/root/chunk-hnffg7ty.js");
var import_chunk_e6xyp9a5 = require("/$bunfs/root/chunk-e6xyp9a5.js");
var r = /<\/(?:body|html)[\t\n\f\r />]/i;
function o(n) {
  if (!r.test(n)) return n.length;
  let t = -1;
  if (!(0, import_chunk_e6xyp9a5.BLi)(n, { startTag({ lowerName: e }) {
    if (e !== "html") t = -1;
    return import_chunk_e6xyp9a5.l_s.get(e) ?? "markup";
  }, endTag({ lowerName: e, start: i }) {
    if (e !== "body" && e !== "html") t = -1;
    else if (t < 0) t = i;
  }, text(e) {
    if (/[^\t\n\f ]/.test(e)) t = -1;
  }, comment() {
  }, doctype() {
  }, readsCdata: () => false })) return;
  return t >= 0 ? t : n.length;
}
