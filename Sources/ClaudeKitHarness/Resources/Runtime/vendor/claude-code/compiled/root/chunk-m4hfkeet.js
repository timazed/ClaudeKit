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
var chunk_m4hfkeet_exports = {};
__export(chunk_m4hfkeet_exports, {
  Nse: () => Nse,
  vZe: () => vZe
});
module.exports = __toCommonJS(chunk_m4hfkeet_exports);
var import_chunk_hn0x7v1y = require("/$bunfs/root/chunk-hn0x7v1y.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function O(N) {
  return { ...N };
}
function Nse(d, o) {
  let c = (0, import_chunk_sng02qpc.k)(10), S;
  if (c[0] !== d) S = { screen: d, depth: 0 }, c[0] = d, c[1] = S;
  else S = c[1];
  let [t, r, p] = (0, import_chunk_hn0x7v1y.fu)(S), f, h;
  if (c[2] !== r) f = () => () => r(O), h = [r], c[2] = r, c[3] = f, c[4] = h;
  else f = c[3], h = c[4];
  (0, import_chunk_bs4h6795.H)(f, h);
  let i;
  if (c[5] !== p || c[6] !== o || c[7] !== r || c[8] !== t) i = { top: t.screen, depth: t.depth, push(v, x) {
    if (p() !== t) {
      return false;
    }
    let C = { ...t, screen: x ?? t.screen };
    return r({ screen: v, depth: t.depth + 1, under: C }), true;
  }, back() {
    if (p() !== t) {
      return;
    }
    if (t.under) r(t.under);
    else o();
  } }, c[5] = p, c[6] = o, c[7] = r, c[8] = t, c[9] = i;
  else i = c[9];
  return i;
}
function vZe(d) {
  let t = (0, import_chunk_sng02qpc.k)(6), { stack: o, children: c } = d;
  const S = o.depth;
  let r;
  if (t[0] !== c || t[1] !== o.top) r = c(o.top), t[0] = c, t[1] = o.top, t[2] = r;
  else r = t[2];
  let p;
  if (t[3] !== o.depth || t[4] !== r) p = (0, import_chunk_a46xeenj.e)(import_chunk_bs4h6795.nf, { children: r }, S), t[3] = o.depth, t[4] = r, t[5] = p;
  else p = t[5];
  return p;
}
