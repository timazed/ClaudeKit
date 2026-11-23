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
var chunk_ddk99w14_exports = {};
__export(chunk_ddk99w14_exports, {
  KGs: () => KGs,
  Op: () => Op,
  U2: () => U2,
  VGs: () => VGs,
  WI: () => WI,
  bKe: () => bKe,
  l$e: () => l$e,
  sXn: () => sXn
});
module.exports = __toCommonJS(chunk_ddk99w14_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_dv7h0mb5 = require("/$bunfs/root/chunk-dv7h0mb5.js");
var import_chunk_rkksytw2 = require("/$bunfs/root/chunk-rkksytw2.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var u = (0, import_chunk_bs4h6795.an)({ isTerminalFocused: true, terminalFocusState: "unknown" });
u.displayName = "TerminalFocusContext";
function VGs(c) {
  let l = (0, import_chunk_sng02qpc.k)(6), { children: n } = c, o = (0, import_chunk_bs4h6795.Ot)(import_chunk_rkksytw2.aet, import_chunk_rkksytw2.zIe), r = (0, import_chunk_bs4h6795.Ot)(import_chunk_rkksytw2.aet, import_chunk_rkksytw2.Nve), i;
  if (l[0] !== o || l[1] !== r) i = { isTerminalFocused: o, terminalFocusState: r }, l[0] = o, l[1] = r, l[2] = i;
  else i = l[2];
  let a = i, s;
  if (l[3] !== n || l[4] !== a) s = (0, import_chunk_a46xeenj.e)(u.Provider, { value: a, children: n }), l[3] = n, l[4] = a, l[5] = s;
  else s = l[5];
  return s;
}
var d = u;
function Op() {
  let { isTerminalFocused: c } = (0, import_chunk_bs4h6795.be)(d);
  return c;
}
function l$e() {
  let { terminalFocusState: c } = (0, import_chunk_bs4h6795.be)(d);
  return c;
}
function R() {
  return v(import_chunk_dv7h0mb5.L_);
}
var U2 = (c, n) => {
  let o = setTimeout(c, n);
  return () => clearTimeout(o);
}, bKe = () => () => {
}, sXn = () => null;
function v(c) {
  let n = /* @__PURE__ */ new Map(), o = null, r = c, l = performance.now(), i = 0;
  function a() {
    i = performance.now() - l;
    for (let t of n.keys()) t();
  }
  function s() {
    if ([...n.values()].some(Boolean)) {
      if (o !== null) clearInterval(o);
      else i = performance.now() - l;
      o = setInterval(a, r);
    } else if (o !== null) clearInterval(o), o = null;
  }
  function f(t, m) {
    return n.set(t, m), s(), () => {
      n.delete(t), s();
    };
  }
  return { subscribeKeepAlive(t) {
    return f(t, true);
  }, subscribeFollower(t) {
    return f(t, false);
  }, now() {
    if (o !== null) return i;
    return performance.now() - l;
  }, setTickInterval(t) {
    if (t === r) return;
    r = t, s();
  }, setTimeout(t, m) {
    let b = setTimeout(t, m);
    return () => clearTimeout(b);
  } };
}
var WI = (0, import_chunk_bs4h6795.an)(null), T = import_chunk_dv7h0mb5.L_ * 2;
function KGs(c) {
  let l = (0, import_chunk_sng02qpc.k)(7), { children: n } = c, [o] = (0, import_chunk_bs4h6795.y)(R), r = Op(), i, a;
  if (l[0] !== o || l[1] !== r) i = () => {
    o.setTickInterval(r ? import_chunk_dv7h0mb5.L_ : T);
  }, a = [o, r], l[0] = o, l[1] = r, l[2] = i, l[3] = a;
  else i = l[2], a = l[3];
  (0, import_chunk_bs4h6795.H)(i, a);
  let s;
  if (l[4] !== n || l[5] !== o) s = (0, import_chunk_a46xeenj.e)(WI.Provider, { value: o, children: n }), l[4] = n, l[5] = o, l[6] = s;
  else s = l[6];
  return s;
}
