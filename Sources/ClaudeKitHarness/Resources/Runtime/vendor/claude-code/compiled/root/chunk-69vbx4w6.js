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
var chunk_69vbx4w6_exports = {};
__export(chunk_69vbx4w6_exports, {
  lH: () => lH
});
module.exports = __toCommonJS(chunk_69vbx4w6_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
(0, import_chunk_bs4h6795.G)();
function we(Ce) {
  return Ce + 1;
}
function U(P) {
  let o = (0, import_chunk_sng02qpc.k)(31), M, b, Z, c, f;
  if (o[0] !== P) ({ children: M, ref: Z, stickyScroll: c, followGrowth: b, ...f } = P), o[0] = P, o[1] = M, o[2] = b, o[3] = Z, o[4] = c, o[5] = f;
  else M = o[1], b = o[2], Z = o[3], c = o[4], f = o[5];
  let r = (0, import_chunk_bs4h6795.I)(null), [v, ke] = (0, import_chunk_bs4h6795.y)(0), _;
  if (o[6] === import_chunk_w1d7ygsk.R) _ = /* @__PURE__ */ new Set(), o[6] = _;
  else _ = o[6];
  let j = (0, import_chunk_bs4h6795.I)(_), Q = (0, import_chunk_bs4h6795.I)(false), ee;
  if (o[7] === import_chunk_w1d7ygsk.R) ee = () => {
    for (const He of j.current) He();
  }, o[7] = ee;
  else ee = o[7];
  let le = ee, re;
  if (o[8] === import_chunk_w1d7ygsk.R) re = function g2(W) {
    if ((0, import_chunk_f9x2f6cx._Ns)(), (0, import_chunk_8bkqeb5d.H$)(W), (0, import_chunk_8bkqeb5d.OGs)(W), le(), Q.current) {
      return;
    }
    Q.current = true, queueMicrotask(() => {
      Q.current = false, (0, import_chunk_8bkqeb5d.G9t)(W);
    });
  }, o[8] = re;
  else re = o[8];
  let g = re, oe, te;
  if (o[9] !== v) oe = () => {
    if (v > 0 && r.current) (0, import_chunk_8bkqeb5d.G9t)(r.current);
  }, te = [v], o[9] = v, o[10] = oe, o[11] = te;
  else oe = o[10], te = o[11];
  (0, import_chunk_bs4h6795.It)(oe, te);
  let ne, ce;
  if (o[12] !== c) ne = () => ({ scrollTo(Me, ve) {
    let u = r.current;
    if (!u) {
      return;
    }
    if (u.stickyScroll = false, !ve?.preserveHwm) u.scrollHeightHwm = void 0;
    u.pendingScrollDelta = void 0, u.scrollAnchor = void 0, u.scrollTop = Math.max(0, Math.floor(Me)), g(u);
  }, scrollToElement(De, p2, Te) {
    let Be = p2 === void 0 ? 0 : p2;
    let h = r.current;
    if (!h) {
      return;
    }
    h.stickyScroll = false, h.scrollHeightHwm = void 0, h.pendingScrollDelta = void 0, h.scrollAnchor = { el: De, offset: Be, block: Te?.block ?? "start" }, g(h);
  }, scrollBy(Ee) {
    let s = r.current;
    if (!s) {
      return;
    }
    s.stickyScroll = false, s.scrollHeightHwm = void 0, s.scrollTop = (0, import_chunk_8bkqeb5d.hKe)(s), s.scrollAnchor = void 0, s.pendingScrollDelta = (s.pendingScrollDelta ?? 0) + Math.floor(Ee), g(s);
  }, scrollToBottom() {
    let i = r.current;
    if (!i) {
      return;
    }
    if (i.pendingScrollDelta = void 0, c === false) {
      i.scrollAnchor = void 0, i.scrollTop = Math.max(0, (i.scrollHeight ?? 0) - (i.scrollViewportHeight ?? 0)), g(i);
      return;
    }
    i.stickyScroll = true, (0, import_chunk_8bkqeb5d.H$)(i), le(), ke(we);
  }, getScrollTop() {
    return r.current?.scrollTop ?? 0;
  }, getPendingDelta() {
    return r.current?.pendingScrollDelta ?? 0;
  }, getScrollHeight() {
    return r.current?.scrollHeight ?? 0;
  }, getFreshScrollHeight() {
    return r.current?.childNodes[0]?.yogaNode?.getComputedHeight() ?? r.current?.scrollHeight ?? 0;
  }, getViewportHeight() {
    return r.current?.scrollViewportHeight ?? 0;
  }, getViewportTop() {
    return r.current?.scrollViewportTop ?? 0;
  }, isSticky() {
    let N = r.current;
    if (!N) {
      return false;
    }
    return N.stickyScroll ?? Boolean(N.attributes.stickyScroll);
  }, subscribe(se) {
    return j.current.add(se), () => j.current.delete(se);
  }, setClampBounds(ie, de) {
    let x = r.current;
    if (!x) {
      return;
    }
    if (x.scrollClampMin === ie && x.scrollClampMax === de) {
      return;
    }
    x.scrollClampMin = ie, x.scrollClampMax = de, (0, import_chunk_8bkqeb5d.H$)(x);
  }, getDomElement() {
    return r.current;
  } }), ce = [c], o[12] = c, o[13] = ne, o[14] = ce;
  else ne = o[13], ce = o[14];
  (0, import_chunk_bs4h6795.KCe)(Z, ne, ce);
  const p = f.flexDirection ?? "row", F = f.flexGrow ?? 0, X = f.flexShrink ?? 1;
  let D;
  if (o[15] !== f || o[16] !== X || o[17] !== p || o[18] !== F) D = { flexWrap: "nowrap", flexDirection: p, flexGrow: F, flexShrink: X, selectionScope: true, ...f, overflowX: "scroll", overflowY: "scroll" }, o[15] = f, o[16] = X, o[17] = p, o[18] = F, o[19] = D;
  else D = o[19];
  let T;
  if (o[20] !== c) T = c !== void 0 && { stickyScroll: c }, o[20] = c, o[21] = T;
  else T = o[21];
  let B;
  if (o[22] !== b) B = b !== void 0 && { followGrowth: b }, o[22] = b, o[23] = B;
  else B = o[23];
  let E;
  if (o[24] !== M) E = (0, import_chunk_a46xeenj.e)(import_chunk_3jkk3v3z.kS, { flexDirection: "column", flexGrow: 1, flexShrink: 0, width: "100%", children: M }), o[24] = M, o[25] = E;
  else E = o[25];
  let fe;
  if (o[26] !== D || o[27] !== T || o[28] !== B || o[29] !== E) fe = (0, import_chunk_a46xeenj.e)("ink-box", { ref: r, style: D, ...T, ...B, children: E }), o[26] = D, o[27] = T, o[28] = B, o[29] = E, o[30] = fe;
  else fe = o[30];
  return fe;
}
var lH = U;
