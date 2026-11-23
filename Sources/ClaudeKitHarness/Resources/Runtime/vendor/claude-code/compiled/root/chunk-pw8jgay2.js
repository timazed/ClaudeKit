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
var chunk_pw8jgay2_exports = {};
__export(chunk_pw8jgay2_exports, {
  Mv: () => Mv
});
module.exports = __toCommonJS(chunk_pw8jgay2_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function Mv(T) {
  let h = (0, import_chunk_sng02qpc.k)(10), { children: l, color: t, title: c } = T, f = (0, import_chunk_8bkqeb5d.Xe)();
  const n = f ? void 0 : "round", m = f ? 0 : 1, a = c ? 1 : 0;
  let d;
  if (h[0] !== t || h[1] !== c) d = c && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { bold: true, color: t, children: c }), h[0] = t, h[1] = c, h[2] = d;
  else d = h[2];
  let s;
  if (h[3] !== l || h[4] !== t || h[5] !== n || h[6] !== m || h[7] !== a || h[8] !== d) s = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { borderStyle: n, borderColor: t, flexDirection: "column", paddingX: m, gap: a, children: [d, l] }), h[3] = l, h[4] = t, h[5] = n, h[6] = m, h[7] = a, h[8] = d, h[9] = s;
  else s = h[9];
  return s;
}
