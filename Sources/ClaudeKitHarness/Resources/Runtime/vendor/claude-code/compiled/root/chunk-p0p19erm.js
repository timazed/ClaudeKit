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
var chunk_p0p19erm_exports = {};
__export(chunk_p0p19erm_exports, {
  Iyi: () => Iyi,
  _Ya: () => _Ya,
  qtn: () => qtn
});
module.exports = __toCommonJS(chunk_p0p19erm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_path = require("path");
function qtn(t) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return null;
  let e = `${(0, import_chunk_4f4ysf31.R1n)()}${import_path.sep}`, n = ".output";
  if (t.startsWith(e) && t.endsWith(n)) {
    let r = t.slice(e.length, -n.length);
    if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) return r;
  }
  return null;
}
function _Ya(t) {
  if (t?.file_path?.startsWith((0, import_chunk_p1ewvgeh.Xh)())) return "Reading Plan";
  if (t?.file_path && qtn(t.file_path)) return "Read agent output";
  return "Read";
}
function Iyi(t) {
  if (!t?.file_path) return null;
  let e = qtn(t.file_path);
  if (e) return e;
  return (0, import_chunk_2yx6c1y2.Po)(t.file_path);
}
