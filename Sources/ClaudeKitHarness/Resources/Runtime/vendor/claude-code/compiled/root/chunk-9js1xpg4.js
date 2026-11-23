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
var chunk_9js1xpg4_exports = {};
__export(chunk_9js1xpg4_exports, {
  $d: () => $d,
  B7n: () => B7n,
  ZK: () => ZK,
  Zya: () => Zya,
  dkn: () => dkn
});
module.exports = __toCommonJS(chunk_9js1xpg4_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
function Zya(n) {
  let t = Z[n.name], o = { upArrow: t === "upArrow", downArrow: t === "downArrow", leftArrow: t === "leftArrow", rightArrow: t === "rightArrow", pageDown: t === "pageDown", pageUp: t === "pageUp", wheelUp: false, wheelDown: false, home: t === "home", end: t === "end", return: t === "return", escape: t === "escape", tab: t === "tab", backspace: t === "backspace", delete: t === "delete", ctrl: n.ctrl, shift: n.shift, super: n.superKey, meta: n.meta }, r = n.shortcutKey;
  return { input: n.name === "enter" ? `
` : [...r].length === 1 ? r : "", key: o };
}
var Z = { up: "upArrow", down: "downArrow", left: "leftArrow", right: "rightArrow", pagedown: "pageDown", pageup: "pageUp", home: "home", end: "end", return: "return", escape: "escape", tab: "tab", backspace: "backspace", delete: "delete" }, ee = [["escape", "escape"], ["return", "return"], ["tab", "tab"], ["backspace", "backspace"], ["delete", "delete"], ["upArrow", "up"], ["downArrow", "down"], ["leftArrow", "left"], ["rightArrow", "right"], ["pageUp", "pageup"], ["pageDown", "pagedown"], ["wheelUp", "wheelup"], ["wheelDown", "wheeldown"], ["home", "home"], ["end", "end"]];
function S(n, t) {
  return { name: ee.find(([r]) => t[r])?.[1] ?? (n === `
` ? "enter" : ""), key: n, ctrl: t.ctrl, shift: t.shift, meta: t.meta, superKey: t.super };
}
(0, import_chunk_bs4h6795.G)();
function ye() {
}
function ue(we) {
  return we.handler() !== false;
}
function B7n() {
  return { decls: /* @__PURE__ */ new WeakMap(), scopesChanged: (0, import_chunk_69qhefwa.Be)(), handlersChanged: (0, import_chunk_69qhefwa.Be)(), preemptiveScopes: /* @__PURE__ */ new Map(), swallowAll: /* @__PURE__ */ new Map(), keyDispatchTrace: (0, import_chunk_69qhefwa.Be)() };
}
var v = (0, import_chunk_bs4h6795.an)(null);
function dkn(n) {
  let a = (0, import_chunk_sng02qpc.k)(32), { bindings: t, pendingChordRef: o, pendingChord: r, activeContexts: u, registerActiveContext: h, unregisterActiveContext: f, handlerRegistryRef: g, preDispatchRef: C, singleKeyEventRef: L, keyHandlerRegistry: d, children: U } = n, w;
  if (a[0] !== t || a[1] !== o) w = (he, fe, xe) => (0, import_chunk_y8kqnbqt.q1t)(S(he, fe), xe, t, o.current), a[0] = t, a[1] = o, a[2] = w;
  else w = a[2];
  let A;
  if (a[3] !== t) A = (me, Ke) => (0, import_chunk_y8kqnbqt.K1t)(me, Ke, t), a[3] = t, a[4] = A;
  else A = a[4];
  let H;
  if (a[5] !== g || a[6] !== d) H = (c) => {
    let p = g.current;
    if (!p) {
      return ye;
    }
    if (!p.has(c.action)) p.set(c.action, /* @__PURE__ */ new Set());
    return p.get(c.action).add(c), d.handlersChanged.emit(), () => {
      let O = p.get(c.action);
      if (O) {
        if (O.delete(c), O.size === 0) p.delete(c.action);
        d.handlersChanged.emit();
      }
    };
  }, a[5] = g, a[6] = d, a[7] = H;
  else H = a[7];
  let P, E;
  if (a[8] !== g) P = (Re) => K(g.current, Re).length > 0, E = (ve) => {
    ;
    try {
      return K(g.current, ve).some(ue);
    } catch (y2) {
      let Ce = y2;
      return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(Ce), "Key action handler threw")), false;
    }
  }, a[8] = g, a[9] = P, a[10] = E;
  else P = a[9], E = a[10];
  let y;
  if (a[11] !== C) y = (J) => (C.current.add(J), () => C.current.delete(J)), a[11] = C, a[12] = y;
  else y = a[12];
  let N;
  if (a[13] !== L) N = () => L.current, a[13] = L, a[14] = N;
  else N = a[14];
  let Q;
  if (a[15] !== u || a[16] !== t || a[17] !== d || a[18] !== r || a[19] !== h || a[20] !== w || a[21] !== A || a[22] !== H || a[23] !== P || a[24] !== E || a[25] !== y || a[26] !== N || a[27] !== f) Q = { resolve: w, getDisplayText: A, bindings: t, pendingChord: r, activeContexts: u, registerActiveContext: h, unregisterActiveContext: f, registerHandler: H, hasHandler: P, runAction: E, registerPreDispatch: y, singleKeyEvent: N, keyHandlerRegistry: d }, a[15] = u, a[16] = t, a[17] = d, a[18] = r, a[19] = h, a[20] = w, a[21] = A, a[22] = H, a[23] = P, a[24] = E, a[25] = y, a[26] = N, a[27] = f, a[28] = Q;
  else Q = a[28];
  let V = Q, X;
  if (a[29] !== U || a[30] !== V) X = (0, import_chunk_a46xeenj.e)(v.Provider, { value: V, children: U }), a[29] = U, a[30] = V, a[31] = X;
  else X = a[31];
  return X;
}
function K(n, t) {
  return [...n.get(t) ?? []].filter((o) => !o.fallback);
}
function $d() {
  return (0, import_chunk_bs4h6795.be)(v);
}
function ZK(n, t) {
  let u = (0, import_chunk_sng02qpc.k)(5), o = t === void 0 ? true : t, r = $d(), h, f;
  if (u[0] !== n || u[1] !== o || u[2] !== r) h = () => {
    if (!r || !o) {
      return;
    }
    return r.registerActiveContext(n), () => {
      r.unregisterActiveContext(n);
    };
  }, f = [n, r, o], u[0] = n, u[1] = o, u[2] = r, u[3] = h, u[4] = f;
  else h = u[3], f = u[4];
  (0, import_chunk_bs4h6795.It)(h, f);
}
