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
var chunk_mws1n899_exports = {};
__export(chunk_mws1n899_exports, {
  uA: () => uA
});
module.exports = __toCommonJS(chunk_mws1n899_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function uA(d) {
  let r = (0, import_chunk_sng02qpc.k)(5), { title: t, subtitle: o, children: l, onClose: c } = d, i;
  if (r[0] !== l || r[1] !== c || r[2] !== o || r[3] !== t) i = (0, import_chunk_a46xeenj.e)(import_chunk_vs99e3g5.Oe, { title: t, subtitle: o, onCancel: c, escapeAction: "close", children: l }), r[0] = l, r[1] = c, r[2] = o, r[3] = t, r[4] = i;
  else i = r[4];
  return i;
}
