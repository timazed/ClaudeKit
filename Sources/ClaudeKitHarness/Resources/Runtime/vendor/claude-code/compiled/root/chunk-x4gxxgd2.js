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
var chunk_x4gxxgd2_exports = {};
__export(chunk_x4gxxgd2_exports, {
  ma: () => ma
});
module.exports = __toCommonJS(chunk_x4gxxgd2_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a2j3mm6r = require("/$bunfs/root/chunk-a2j3mm6r.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function M(c) {
  return c ? [c] : [];
}
function N(s, w) {
  let { label: g, value: f, gapAbove: P } = s;
  return [P && w > 0 && (0, import_chunk_a46xeenj.o)(import_chunk_a2j3mm6r.VE.Row, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: " " }), (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: "" })] }, `gap-${w}`), (0, import_chunk_a46xeenj.o)(import_chunk_a2j3mm6r.VE.Row, { children: [(0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: g === void 0 ? "" : `${g}:` }), (0, import_chunk_bs4h6795.y_)(f) ? f : (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: f })] }, w)];
}
function ma(s) {
  let a = (0, import_chunk_sng02qpc.k)(10), { rows: b, dimLabels: m } = s, d = m === void 0 ? false : m, l;
  if (a[0] !== d) l = d ? { dim: true } : { bold: true }, a[0] = d, a[1] = l;
  else l = a[1];
  let v;
  if (a[2] === import_chunk_w1d7ygsk.R) v = { width: "fill" }, a[2] = v;
  else v = a[2];
  let t;
  if (a[3] !== l) t = [l, v], a[3] = l, a[4] = t;
  else t = a[4];
  let r;
  if (a[5] !== b) r = b.flatMap(M).flatMap(N), a[5] = b, a[6] = r;
  else r = a[6];
  let y;
  if (a[7] !== t || a[8] !== r) y = (0, import_chunk_a46xeenj.e)(import_chunk_a2j3mm6r.VE, { columns: t, children: r }), a[7] = t, a[8] = r, a[9] = y;
  else y = a[9];
  return y;
}
