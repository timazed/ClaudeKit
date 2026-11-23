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
var chunk_2wqvb3q7_exports = {};
__export(chunk_2wqvb3q7_exports, {
  $8a: () => $8a,
  B8a: () => B8a,
  Btn: () => Btn,
  Doo: () => Doo,
  F8a: () => F8a,
  U8a: () => U8a,
  W8a: () => W8a,
  _yi: () => _yi,
  cHn: () => cHn,
  cfr: () => cfr,
  dHn: () => dHn,
  fFt: () => fFt,
  ffr: () => ffr,
  fss: () => fss,
  gyi: () => gyi,
  hyi: () => hyi,
  mfr: () => mfr,
  myi: () => myi,
  pfr: () => pfr,
  pss: () => pss,
  pyi: () => pyi,
  uHn: () => uHn,
  ufr: () => ufr,
  uss: () => uss
});
module.exports = __toCommonJS(chunk_2wqvb3q7_exports);
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_zdtzd1bp = require("/$bunfs/root/chunk-zdtzd1bp.js");
var import_async_hooks = require("async_hooks");
var import_async_hooks2 = require("async_hooks");
var import_util = require("util");
var import_async_hooks3 = require("async_hooks");
var y = new import_async_hooks.AsyncLocalStorage();
var cfr = () => y.getStore();
function F8a(e, o, r) {
  let s = o === void 0 ? void 0 : e.get(o);
  return s?.environmentId === r ? s.press : void 0;
}
function $8a(e, o) {
  for (let [r, s] of e) if (s.environmentId === o) e.delete(r);
}
var dHn = new import_async_hooks2.AsyncLocalStorage();
function U8a(e, o, r) {
  let s = dHn.getStore();
  if (s !== void 0) e.set(o, { environmentId: r, press: s, isAnswered: false });
}
function R(e, o) {
  return e?.clientId === o ? e.pressId : void 0;
}
function B8a(e, o) {
  let r = e.get(o);
  if (r === void 0) return;
  e.set(o, { ...r, isAnswered: true });
  let s = [...e].filter(([, p]) => p.isAnswered && p.environmentId === r.environmentId && p.press.pressId === void 0 === (r.press.pressId === void 0)).map(([p]) => p), n = Math.max(...s);
  for (let p of s.filter((i) => i < n)) e.delete(p);
}
function W8a(e, o, r) {
  let s = R(e, o);
  if (s !== void 0) (0, import_chunk_cqa9hrgx.u)(r);
  if (e?.pressId !== void 0 && s === void 0) (0, import_chunk_cqa9hrgx.l)(r, e.clientId === void 0 ? "no_client" : "other_client");
  return s;
}
var pe = (e, o, r) => ({ ...r, run: (s, ...n) => dHn.run((0, import_util.isDeepStrictEqual)(s, o) ? e : void 0, () => r.run(s, ...n)) });
var ffr = new import_async_hooks3.AsyncLocalStorage();
function C() {
  let e = /* @__PURE__ */ new Map(), o = 0;
  return { hold(r, s) {
    let n = -++o, p = e.get(r) ?? /* @__PURE__ */ new Map();
    return p.set(n, s), e.set(r, p), n;
  }, runnerFor: (r, s) => s < 0 ? e.get(r)?.get(s) : void 0, release(r, s) {
    let n = e.get(r);
    if (n === void 0) return;
    for (let p of s) n.delete(p);
    if (n.size === 0) e.delete(r);
  }, forget(r) {
    e.delete(r);
  }, count: () => [...e.values()].reduce((r, s) => r + s.size, 0) };
}
var A = (e) => e < 0;
var Btn = C();
var P = (e, o, r, s) => ({ name: e.plugin, tier: "core", async run(n) {
  let p = (0, import_chunk_865at33z.ce)().loadedModules.find((f) => f.name === e.plugin);
  if (!p) throw new import_chunk_hcg738hf.je(`${o}: ${e.plugin}, which drew ${n.element}, is not loaded`);
  if (!(0, import_chunk_59mwkeke.hu)(p)) return s(n);
  let i = Btn.runnerFor(e.plugin, e.handle);
  if (i !== void 0) return dHn.run(void 0, () => i(n)), s(n);
  p.enter();
  try {
    await y.run(r, () => p.press(e.handle, n));
  } finally {
    p.leave();
  }
  return s(n);
} });
function cHn() {
  let e = /* @__PURE__ */ new Map();
  return (o) => {
    let r = e.get(o);
    if (r) return r;
    let s = (0, import_chunk_865at33z.JGe)();
    return e.set(o, s), s;
  };
}
function fFt(e, o, r) {
  Btn.release(e, o.filter(A));
  let s = o.filter((p) => !A(p));
  if (s.length === 0) return;
  let n = (0, import_chunk_865at33z.ce)().loadedModules.find((p) => p.name === e);
  if (!n) {
    (0, import_chunk_w578pjby.t)(`ui.render (${r.component} ${r.requestId}): ${e} drew Buttons but is not loaded; nothing to release`);
    return;
  }
  n.releasePresses(s);
}
function uss(e, o) {
  let r = /* @__PURE__ */ new Map();
  for (let i of (0, import_chunk_0w2wb7gk.XLe)(e)) {
    let { tag: f, plugin: m, handle: a, element: T, pressableLinks: x, options: d } = i;
    r.set(m, [...r.get(m) ?? [], { tag: f, handle: a, element: T, ...x !== void 0 && { pressableLinks: x }, ...d !== void 0 && { options: d } }]);
  }
  let n = r.size > 0 ? { ...o, drawn: (0, import_chunk_0w2wb7gk.e4l)(e) } : o, p = /* @__PURE__ */ new Map();
  for (let i of /* @__PURE__ */ new Set([...import_chunk_yg9g0473.Fq.holdersOf(o), ...r.keys()])) {
    let { hosted: f, released: m } = import_chunk_yg9g0473.Fq.holdDrawing(i, n, r.get(i) ?? []);
    p.set(i, f), fFt(i, m, o);
  }
  return (0, import_chunk_0w2wb7gk.l4l)(e, (i, f) => p.get(i)?.get(f));
}
var O = ({ held: e, surface: o, kind: r, value: s }) => ({ plugin: e.plugin, element: e.element, component: e.component, requestId: e.requestId, surface: o, kind: r, value: s });
var pyi = cHn();
var myi = import_chunk_0w2wb7gk.zc["ui.input"];
var j = ({ plugin: e, handle: o, element: r }) => import_chunk_yg9g0473.Fq.heldPress(e, o, r) !== void 0 || r !== void 0 && import_chunk_yg9g0473.Fq.hostedButtonsOf(e, r).length > 0;
function w(e) {
  let r = /^www\./i.test(e) ? `http://${e}` : (0, import_chunk_zdtzd1bp.oso)(e) ?? e;
  try {
    return new URL(r).href;
  } catch {
    return r;
  }
}
function fss(e, o) {
  if (o === void 0) return true;
  let r = w(e);
  return o.some((s) => w(s) === r);
}
var Q = (e, o, r) => ({ plugin: e.plugin, element: e.element, component: e.component, requestId: e.requestId, surface: o, ...r !== void 0 && { link: { href: r.href } } });
var hyi = import_chunk_0w2wb7gk.zc["ui.press"];
function pss(e, o, r) {
  if (e === o) return;
  let s = Map.groupBy((0, import_chunk_0w2wb7gk.XLe)(o), (n) => n.plugin);
  for (let [n, p] of Map.groupBy((0, import_chunk_0w2wb7gk.XLe)(e), (i) => i.plugin)) {
    let i = new Set(s.get(n)?.map((f) => f.handle));
    fFt(n, p.filter((f) => !i.has(f.handle) && !import_chunk_yg9g0473.Fq.hostedButtonsOf(n, f.element).some((m) => m.button.handle === f.handle)).map((f) => f.handle), r);
  }
}
function Doo(e, o) {
  let r = /* @__PURE__ */ new Map();
  for (let { plugin: s, handle: n } of (0, import_chunk_0w2wb7gk.XLe)(e)) if (!import_chunk_yg9g0473.Fq.isHeld(s, n)) r.set(s, [...r.get(s) ?? [], n]);
  for (let [s, n] of r) fFt(s, n, o);
}
async function h(e) {
  let o = cfr(), { event: r, tag: s, plugin: n, handle: p, element: i, component: f, surface: m } = e, { requestId: a } = e, x = i !== void 0 && f !== void 0 ? { tag: s, plugin: n, element: i, surface: m, component: f, ...a !== void 0 && { requestId: a } } : void 0, d = import_chunk_yg9g0473.Fq.heldPress(n, p, i) ?? (x === void 0 ? void 0 : import_chunk_yg9g0473.Fq.heldByKeyOf(x));
  if (d?.tag !== s) {
    (0, import_chunk_w578pjby.t)(`${r}: no ${s} of ${n} is held under handle ${p}; nothing ran`);
    return;
  }
  if (e.admits !== void 0 && !e.admits(d)) {
    (0, import_chunk_w578pjby.t)(`${r}: the ${s} ${n}/${d.element} does not take that value; nothing ran`);
    return;
  }
  let S = e.argumentOf(d), k = performance.now(), I = await (0, import_chunk_0w2wb7gk.zT)({ e: S, handlers: [...(0, import_chunk_yg9g0473.wR)(r, void 0, { gestureAt: o }), P(d, r, o, (g) => ({ element: g.element, value: g.value }))], site: e.site });
  return (0, import_chunk_w578pjby.t)(`${r} ${n}/${d.element}${e.detail} in ${d.component} from ${m}: settled in ${(performance.now() - k).toFixed(1)}ms`), I;
}
var M = ({ kind: e, value: o, ...r }) => h({ ...r, event: "ui.input", tag: "Input", site: myi, detail: ` (${e})`, argumentOf: (s) => O({ held: s, surface: r.surface, kind: e, value: o }) });
var _ = ({ held: e, surface: o, value: r }) => ({ plugin: e.plugin, element: e.element, component: e.component, requestId: e.requestId, surface: o, value: r });
var gyi = import_chunk_0w2wb7gk.zc["ui.select"];
var U = ({ value: e, ...o }) => h({ ...o, event: "ui.select", tag: "Select", site: gyi, detail: "", argumentOf: (r) => _({ held: r, surface: o.surface, value: e }), admits: (r) => r.options === void 0 || r.options.includes(e) });
var L = (e, o) => y.run(e, o);
function H(e, o, r) {
  let s = performance.now();
  return j(e) ? o(e.plugin)(() => L(s, () => r(e))) : Promise.resolve(void 0);
}
var ufr = (e) => H(e, pyi, M);
async function pfr({ plugin: e, handle: o, element: r, surface: s, link: n, pagePress: p, work: i }) {
  let f = performance.now(), m = import_chunk_yg9g0473.Fq.heldPress(e, o, r), a = n === void 0 ? "Button" : "Markdown";
  if (!(m !== void 0 && m.tag === a)) {
    (0, import_chunk_w578pjby.t)(`ui.press: no ${a} of ${e} is held under handle ${o}${r !== void 0 && r !== "" ? " and the key the press names" : ""}; nothing ran`);
    return;
  }
  if (n !== void 0 && !fss(n.href, m.pressableLinks)) {
    (0, import_chunk_w578pjby.t)(`ui.press: the Markdown ${e} holds under handle ${o} names that link none of its own; nothing ran`);
    return;
  }
  let d = Q(m, s, n), S = performance.now(), k = [...(0, import_chunk_yg9g0473.wR)("ui.press", void 0, { gestureAt: f }), pe(p, d, P(m, "ui.press", f, (E) => ({ element: E.element })))], I = await ffr.run(i, () => (0, import_chunk_0w2wb7gk.zT)({ e: d, handlers: k, site: hyi })), g = n === void 0 ? "" : " (a link)";
  return (0, import_chunk_w578pjby.t)(`ui.press ${e}/${d.element}${g} in ${d.component} from ${s}: settled in ${(performance.now() - S).toFixed(1)}ms`), I;
}
var _yi = cHn();
var mfr = (e) => H(e, _yi, U);
var uHn = cHn();
