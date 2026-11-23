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
var chunk_wvchre07_exports = {};
__export(chunk_wvchre07_exports, {
  it: () => it
});
module.exports = __toCommonJS(chunk_wvchre07_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function v(g) {
  return g !== "" && !p(g);
}
function C(a, h) {
  return (0, import_chunk_a46xeenj.o)(import_chunk_bs4h6795.nf, { children: [h > 0 && (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: " \xB7 " }), a] }, (0, import_chunk_bs4h6795.y_)(a) ? a.key ?? h : h);
}
function it(d) {
  let m = (0, import_chunk_sng02qpc.k)(5), { children: t } = d, i, l;
  if (m[0] !== t) {
    l = import_chunk_w1d7ygsk.Mn;
    q: {
      let s = import_chunk_bs4h6795.dy.toArray(t).filter(v);
      if (s.length === 0) {
        l = null;
        break q;
      }
      i = s.map(C);
    }
    m[0] = t, m[1] = i, m[2] = l;
  } else i = m[1], l = m[2];
  if (l !== import_chunk_w1d7ygsk.Mn) return l;
  let y;
  if (m[3] !== i) y = (0, import_chunk_a46xeenj.e)(import_chunk_a46xeenj.ae, { children: i }), m[3] = i, m[4] = y;
  else y = m[4];
  return y;
}
function p(d) {
  return (0, import_chunk_bs4h6795.y_)(d) && [d.props.chord].flat().every((t) => t === "");
}
