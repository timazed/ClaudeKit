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
var chunk_rxcv97gm_exports = {};
__export(chunk_rxcv97gm_exports, {
  I7n: () => I7n,
  Nmt: () => Nmt,
  Qwn: () => Qwn,
  Zwn: () => Zwn
});
module.exports = __toCommonJS(chunk_rxcv97gm_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
var o = (0, import_chunk_bs4h6795.an)(null), p = 20;
function Qwn(n) {
  let i = (0, import_chunk_sng02qpc.k)(8), { children: t } = n, s;
  if (i[0] === import_chunk_w1d7ygsk.R) s = [], i[0] = s;
  else s = i[0];
  let a = (0, import_chunk_bs4h6795.I)(s), d;
  if (i[1] === import_chunk_w1d7ygsk.R) d = (0, import_chunk_69qhefwa.Be)(), i[1] = d;
  else d = i[1];
  let c = d, b, g, M;
  if (i[2] === import_chunk_w1d7ygsk.R) b = () => a.current, g = (K) => {
    a.current = [K, ...a.current.slice(0, p - 1)], c.emit();
  }, M = (A) => {
    a.current = a.current.filter((w) => w.toolName !== A.toolName || w.inputKey !== A.inputKey), c.emit();
  }, i[2] = b, i[3] = g, i[4] = M;
  else b = i[2], g = i[3], M = i[4];
  let T;
  if (i[5] === import_chunk_w1d7ygsk.R) T = { getDenials: b, recordDenial: g, removeDenial: M, subscribe: c.subscribe, rowTexts: /* @__PURE__ */ new WeakMap() }, i[5] = T;
  else T = i[5];
  let L = T, h;
  if (i[6] !== t) h = (0, import_chunk_a46xeenj.e)(o.Provider, { value: L, children: t }), i[6] = t, i[7] = h;
  else h = i[7];
  return h;
}
function m() {
  return () => {
  };
}
function Zwn(n) {
  let i = (0, import_chunk_sng02qpc.k)(3), t = (0, import_chunk_bs4h6795.be)(o), s;
  if (i[0] !== n || i[1] !== t) s = () => t?.getDenials().some((a) => n.includes(a.toolUseId)) ?? false, i[0] = n, i[1] = t, i[2] = s;
  else s = i[2];
  let d = s;
  return (0, import_chunk_bs4h6795.Ot)(t?.subscribe ?? m, d, d);
}
function l() {
  let n = (0, import_chunk_bs4h6795.be)(o);
  if (!n) {
    throw ReferenceError("useAutoModeDenials and useDenialRowTexts cannot be called outside of an <AutoModeDenialsProvider /> (mounted by <AppStateProvider />)");
  }
  return n;
}
function Nmt() {
  return l();
}
function I7n() {
  return l().rowTexts;
}
