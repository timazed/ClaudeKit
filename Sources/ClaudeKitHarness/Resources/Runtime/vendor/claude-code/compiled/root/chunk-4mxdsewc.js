const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_4mxdsewc_exports = {};
__export(chunk_4mxdsewc_exports, {
  DKe: () => DKe,
  UXn: () => UXn,
  b2r: () => b2r,
  c6s: () => c6s,
  f6s: () => f6s,
  p6s: () => p6s,
  qkn: () => qkn,
  u6s: () => u6s
});
module.exports = __toCommonJS(chunk_4mxdsewc_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_ejeefcyk = require("/$bunfs/root/chunk-ejeefcyk.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_2wqvb3q7 = require("/$bunfs/root/chunk-2wqvb3q7.js");
var import_chunk_j59m93ez = require("/$bunfs/root/chunk-j59m93ez.js");
var import_chunk_m20gh621 = require("/$bunfs/root/chunk-m20gh621.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_dv7h0mb5 = require("/$bunfs/root/chunk-dv7h0mb5.js");
var import_chunk_07r720jc = require("/$bunfs/root/chunk-07r720jc.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var fe = __toESM(require("vm"));
var qkn = {};
(0, import_chunk_w1d7ygsk.jr)(qkn, { clientFocusStore: () => DKe, default: () => qkn, focusClient: () => UXn, focusedClientId: () => so, releaseClientFocus: () => f6s });
function c6s(r = {}) {
  let i = r.run ?? import_chunk_sjqze7qg.Ppr, f = r.schedule ?? ((m) => {
    let c = setTimeout(m, import_chunk_dv7h0mb5.L_);
    return () => {
      clearTimeout(c);
    };
  }), E = r.warn ?? ((m) => {
    (0, import_chunk_w578pjby.t)(m, { level: "warn" });
  }), p = /* @__PURE__ */ new Map(), I, a = 0;
  function u() {
    I = void 0;
    let m = [...p.values()];
    p.clear();
    for (let { message: c, reply: C } of m) a += 1, i(c).then(C, (R) => {
      E(`ui.message ${c.plugin}/${c.message.element}: the chain threw (${(0, import_chunk_jv7av99m.d)(R)}); no reply`);
    });
  }
  return { post(m, c, C) {
    p.set(m, { message: c, reply: C }), I ??= f(u);
  }, cancel(m) {
    if (p.delete(m), p.size === 0 && I !== void 0) I(), I = void 0;
  }, dispatched: () => a };
}
var We = c6s();
var u6s = (r, i) => `${r}\0client\0${i}`;
var ye = (r) => ({ component: r.component, requestId: u6s(r.requestId, r.key), surface: r.surface });
var se = (r, i, f) => `Client ${i}: ${(0, import_chunk_sjqze7qg.was)(r, i, f)}`;
var DKe = (0, import_chunk_t57w17k7.de)((0, import_chunk_se72nykz.ps)({ focusedId: null }), (r) => r.setState(() => ({ focusedId: null })));
var UXn = (r) => DKe.setState((i) => i.focusedId === r ? i : { focusedId: r });
var so = () => DKe.getState().focusedId;
var f6s = (r) => DKe.setState((i) => i.focusedId === r ? { focusedId: null } : i);
var U = (r) => r === import_chunk_0w2wb7gk.Alt ? 1 : 0;
function Ce(r, i) {
  let f = { surface: r.drawing.surface, component: i, requestId: r.requestId };
  return { site: f, bornAt: (0, import_chunk_sjqze7qg.h5e)(f), holders: 0 };
}
var Se = (r, i) => ({ plugin: r, handle: i });
function ke(r, i, f) {
  function E(p) {
    if (!(0, import_chunk_ma3kja9f.T)(p)) return p;
    let { props: I, hover: a, children: u, held: m } = p, c = { type: p.type };
    if (I !== void 0) c.props = I;
    if (a !== void 0) c.hover = a;
    if ((0, import_chunk_0w2wb7gk.a2n)(p.type) && (0, import_chunk_0w2wb7gk.l2n)(a) !== void 0) c.group = { plugin: r };
    if (typeof m === "number") c.press = Se(r, f(m));
    if ((typeof m !== "number" || p.type === "Button") && Array.isArray(u)) c.children = u.map(E);
    return c;
  }
  return (0, import_chunk_may4s35x.$lt)(E((0, import_chunk_0w2wb7gk.Nme)((0, import_chunk_w578pjby.te)(i))));
}
var W = (r) => [r.plugin, r.surface, r.requestId, r.key].join(" ");
var ie = 20;
var ae = 8;
var ve = 3;
var Te = (r) => ({ plugin: r.plugin, module: r.module, component: r.drawing.component, requestId: r.requestId, key: r.element });
var Re = (r, i) => ({ id: W(r), plugin: r.plugin, module: r.module, element: r.key, drawing: ye(r), requestId: r.requestId, clock: r.clock, props: r.props, handedProps: r.props, columns: 0, rows: 0, surface: void 0, snapshot: { status: "loading" }, listeners: /* @__PURE__ */ new Set(), held: [], holders: 1, dialogHolders: U(r.component), rowSite: U(r.component) === 0 ? r.component : void 0, drawnSite: void 0, isOverBudget: false, isDirty: false, isRendering: false, unpromptedRenders: 0, renderTimer: void 0, measurings: 0, frameOutcome: "unmeasured", isUnsettled: false, terminal: i, selfDrawnTimer: void 0, renderedAt: i, thrownAt: void 0, toldLast: void 0, isDestroyed: false, destroyTimer: void 0, mountGeneration: 0, heldIn: /* @__PURE__ */ new Map(), environmentId: void 0 });
var L = (r, i, f) => (0, import_chunk_sjqze7qg.m5e)({ key: [`${r.plugin}#${r.environmentId}`, `Client ${r.module}`, i].join(" "), lead: r.plugin, text: se(r.plugin, r.module, f) });
var Oe = { instance: `its region changed size on each of ${ae} measurings in one frame, so it is drawn as last measured; give the Client a height and a width, or draw no more than surface.rows and surface.columns`, frame: `the Clients on screen were measured again in ${ie} passes of one frame, this one in the next, so it is drawn as last measured; some change their region at every measuring: give each a height and a width, or draw no more than surface.rows and surface.columns` };
var ko = (r, i) => L(r, `unsettled ${i}`, Oe[i]);
function B() {
  let r = import_chunk_j59m93ez.dU.get();
  return [r?.columns, r?.rows, r?.conversationColumns].join("x");
}
function Oo() {
  let r = (0, import_chunk_sjqze7qg.Sas)();
  return (i) => void r(i).catch((f) => {
    (0, import_chunk_may4s35x.tc)().log(`ui.fault ${i.plugin}/${i.fault.element}: the chain threw (${(0, import_chunk_jv7av99m.d)(f)})`, "warn");
  });
}
function Ae(r, i) {
  let { name: f, message: E } = (0, import_chunk_0w2wb7gk.bAr)(r) ? r : i(r);
  return E.trim() !== "" ? E : f === "Error" ? import_chunk_sjqze7qg.bas : f;
}
var De = (r) => `Client: a promise a surface module did not return was rejected: ${r}; the session goes on`;
var be = ({ pluginName: r, environmentId: i, owns: f }) => (0, import_chunk_bzyb60p0.q0t)((E, p) => {
  if (![p, E].some((u) => !(0, import_chunk_bzyb60p0.Tnt)(u) && f(u))) return;
  let a = De((0, import_chunk_sjqze7qg.OCe)((0, import_chunk_0w2wb7gk.bTo)(E)));
  try {
    (0, import_chunk_sjqze7qg.RQ)({ key: `${r}#${i} Client rejection`, lead: r, text: a });
  } catch (u) {
    (0, import_chunk_w578pjby.t)(`${r}: the fault could not be said: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "error" });
  }
  return `${r}: ${a}`;
});
var $e = (r) => (0, import_chunk_0w2wb7gk.bAr)(r) && (0, import_chunk_jv7av99m.w)(r) === "ERR_SCRIPT_EXECUTION_TIMEOUT";
var Ie = 1e3;
var Fe = 6e4;
var _e = "__surface__.run()";
var Ne = (r, i) => ({ ...r, timers: /* @__PURE__ */ new Map(), tick: i });
async function Ko(r, i = {}) {
  let { pluginName: f, pluginRoot: E, environmentId: p, surfaceModules: I } = r, a = false, { sandbox: u, context: m } = (0, import_chunk_0w2wb7gk.PCl)(), c = (0, import_chunk_0w2wb7gk.vCl)(m), C = (o) => (0, import_chunk_may4s35x.$lt)(c(o)), R = (0, import_chunk_0w2wb7gk.TCl)(m, E), P = (0, import_chunk_0w2wb7gk.ECl)(m), v = (0, import_chunk_ejeefcyk.PTt)(m), { intoEnvironment: A } = (0, import_chunk_0w2wb7gk.tTs)(v, R, P), y = (0, import_chunk_0w2wb7gk.OCl)(m, A);
  Object.assign(u, { console: (0, import_chunk_0w2wb7gk.kCl)(y, `[${f}] surface`) });
  let me = be({ pluginName: f, environmentId: p, owns: P }), S = /* @__PURE__ */ new Map(), H = 0, pe = 0;
  function D(o) {
    let n = S.get(o);
    if (!n) throw new import_chunk_hcg738hf.je(`${f}: no client instance ${o}`);
    return n;
  }
  function ue(o, n) {
    let s = D(o), l = `${f}: Client ${s.module}: post: the data`;
    if (n.length > import_chunk_0w2wb7gk.Rvo) throw new import_chunk_hcg738hf.je(`${l} serializes to ${n.length} characters, over the ${import_chunk_0w2wb7gk.Rvo} limit; not sent`);
    let x = (0, import_chunk_w578pjby.te)(n), g = (0, import_chunk_0w2wb7gk.KLe)(x);
    if (g !== void 0) throw new import_chunk_hcg738hf.je(`${l} ${g}; not sent`);
    s.host.post(x);
  }
  function Y(o, n) {
    let s = D(o), l = ++pe;
    return s.timers.set(l, s.host.startTimer(n, () => {
      if (S.get(o)?.timers.has(l) === true) s.tick(l);
    })), l;
  }
  let O = (0, import_chunk_0w2wb7gk.AE)({ schedule: (0, import_chunk_0w2wb7gk.XG)(y((o) => {
    S.get(o)?.host.schedule();
  })), post: (0, import_chunk_0w2wb7gk.XG)(y(ue)), startTimer: (0, import_chunk_0w2wb7gk.XG)(y(Y)), stopTimer: (0, import_chunk_0w2wb7gk.XG)(y((o, n) => {
    let s = S.get(o);
    s?.timers.get(n)?.(), s?.timers.delete(n);
  })), fault: (0, import_chunk_0w2wb7gk.XG)(y((o, n) => {
    let s = S.get(o);
    if (s === void 0) {
      (0, import_chunk_w578pjby.t)(`${f}: Client: a promise an instance since unmounted returned was rejected: ${(0, import_chunk_sjqze7qg.OCe)(n)}`, { level: "warn" });
      return;
    }
    s.host.fault(new import_chunk_hcg738hf.je(`${f}: Client ${s.module}: a promise it returned was rejected: ${n}`));
  })) }), { mount: le, setProps: xe, resize: q, stage: J, dropHeld: Q, hasListener: G, unmount: Z } = fe.runInContext((0, import_chunk_0w2wb7gk.DR)(import_chunk_sjqze7qg.kas), m)(O, C((0, import_chunk_sjqze7qg.Eas)())), ge = new fe.Script((0, import_chunk_0w2wb7gk.DR)(_e), { filename: `${f} surface` }), he = i.budgetMs ?? Ie, j = (0, import_chunk_ejeefcyk.O2n)(Ie, i.budgetMs), ee = (o) => $e(o) ? `ran longer than its ${he}ms budget` : Ae(o, v), oe = (o, n) => new import_chunk_hcg738hf.je(`${f}: Client ${o}: ${ee(n)}`);
  function b(o, n, s) {
    if (a) throw (0, import_chunk_hcg738hf.tNe)(f);
    J(o.id, n, s === void 0 ? void 0 : C(s));
    try {
      return ge.runInContext(m, j);
    } catch (l) {
      throw oe(o.module, l);
    }
  }
  let re = (0, import_chunk_0w2wb7gk.T6i)({ args: { pluginName: f, pluginRoot: E, linked: I.flatMap((o) => o.linked), links: I.flatMap((o) => o.links) }, context: m, isScanned: true, stamped: (o) => o(), evaluateOptions: j }), z = i.readyMs ?? import_chunk_bzyb60p0.Ven, F = /* @__PURE__ */ new Map();
  for (let o of I) F.set(o.module, await N(o));
  async function N(o) {
    try {
      let n = await (0, import_chunk_5appeerh.qt)(re.load(o.modulePath, o.source), z, `its top level did not settle in ${z}ms`);
      return { component: o.component, exports: n };
    } catch (n) {
      return { error: new import_chunk_hcg738hf.je(`${f}: Client ${o.module}: the surface module did not load: ${ee(n)}`) };
    }
  }
  function X(o) {
    if (!S.delete(o.id)) return;
    for (let n of o.timers.values()) n();
    if (o.timers.clear(), !a) Z(o.id);
  }
  function ne(o) {
    let n = F.get(o);
    if (!n) {
      let g = [...F.keys()].join(", ") || "none";
      throw new import_chunk_hcg738hf.je(`${f}: Client ${o}: the plugin loaded no surface module at that path (it loaded ${g})`);
    }
    if ("error" in n) throw n.error;
    let { component: s, exports: l } = n, x = Object.hasOwn(l, s) && l[s];
    if (typeof x !== "function") throw new import_chunk_hcg738hf.je(`${f}: Client ${o}: its export ${s} is not a function (props, surface) => tree`);
    return x;
  }
  function K(o) {
    if (!a) o();
  }
  function e(o) {
    let { props: n, host: s } = o;
    if (a) throw (0, import_chunk_hcg738hf.tNe)(f);
    let l = ne(o.module), x = ++H, g = Ne({ id: x, module: o.module, host: s }, (h) => {
      b(g, "tick", h);
    });
    return S.set(x, g), le(x, l, C(n)), { id: x, render: () => {
      let h = b(g, "render");
      if (typeof h !== "string") throw oe(o.module, Error("the module returned no tree"));
      return h;
    }, setProps: (h) => K(() => xe(x, C(h))), resize: (h, M) => K(() => q(x, h, M)), pointer: (h) => {
      b(g, "pointer", h);
    }, key: (h) => {
      b(g, "key", h);
    }, runHeld: (h, M) => {
      b(g, "held", { handle: h, event: M });
    }, dropHeld: (h) => K(() => Q(x, C(h))), hasPointerListener: () => !a && G(x, "pointer"), hasKeyListener: () => !a && G(x, "key"), unmount: () => X(g) };
  }
  return { pluginName: f, environmentId: p, mount: e, dispose() {
    if (a) return;
    for (let o of [...S.values()]) X(o);
    setTimeout(me, Fe).unref(), a = true;
  }, isDisposed: () => a };
}
var qe = (r, i) => ({ environmentId: r, loading: i });
var Ge = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (r) => r.set(void 0));
function ze() {
  let r = /* @__PURE__ */ new Map(), i = (0, import_chunk_69qhefwa.Be)(), f;
  function E(a, u) {
    if (r.get(a) === u) r.delete(a);
    u.loading.then((c) => {
      c.dispose(), import_chunk_2wqvb3q7.Btn.forget(a), (0, import_chunk_w578pjby.t)(`surface environment of ${a} (environment ${u.environmentId}) disposed`);
    }, () => {
    }), queueMicrotask(() => i.emit(a));
  }
  function p() {
    let a = new Map((0, import_chunk_865at33z.ce)().loadedModules.filter(import_chunk_59mwkeke.hu).map((u) => [u.name, u.environmentId]));
    for (let [u, m] of [...r]) if (a.get(u) !== m.environmentId) E(u, m);
  }
  function I(a) {
    let u = (0, import_chunk_07r720jc.r0e)(a);
    if (!u) return Promise.reject(new import_chunk_hcg738hf.je(`${a}: Client: the plugin is not loaded`));
    let m = r.get(a);
    if (m?.environmentId === u.environmentId) return m.loading;
    if (m) E(a, m);
    let { surfaceModules: c, pluginRoot: C } = u.args;
    if (!c || c.length === 0) return Promise.reject(new import_chunk_hcg738hf.je(`${a}: Client: the plugin loaded no surface module (its hooks module builds no Client from a literal path), so nothing can draw its Clients`));
    let R = Ge.get(), { environmentId: P } = u, v = qe(P, Ko({ pluginName: a, pluginRoot: C, environmentId: P, surfaceModules: c }, R === void 0 ? {} : { budgetMs: R }).then((A) => ((0, import_chunk_w578pjby.t)(`surface environment of ${a} (environment ${P}) loaded ` + c.map((y) => y.module).join(", ")), A)));
    return r.set(a, v), v.loading;
  }
  return { environmentFor(a) {
    return f ??= (0, import_chunk_m20gh621.tit)(p), I(a);
  }, sweep: p, onDisposed: i.subscribe, disposeAll() {
    for (let [a, u] of [...r]) E(a, u);
    f?.(), f = void 0;
  }, count: () => r.size };
}
var Xe = ze();
function p6s(r = {}) {
  let i = r.environments ?? Xe, f = r.port ?? We, E = r.raiseFault ?? Oo(), p = /* @__PURE__ */ new Map(), I, a = 0, u = false, m;
  function c(e, o) {
    e.snapshot = o;
    for (let n of e.listeners) n();
  }
  function C(e) {
    S(e, e.held), e.held = [];
  }
  function R(e) {
    if (e.mountGeneration += 1, O(e), e.isDirty = false, e.isOverBudget = false, e.thrownAt = void 0, e.drawnSite = void 0, import_chunk_0w2wb7gk.Fwe.dropClient(D(e)), e.renderTimer) clearImmediate(e.renderTimer), e.renderTimer = void 0;
    clearImmediate(e.selfDrawnTimer), j(e), e.measurings = 0, e.frameOutcome = "unmeasured", e.isUnsettled = false, import_chunk_yg9g0473.Fq.holdDrawing(e.plugin, e.drawing, []), C(e), e.surface?.unmount(), e.surface = void 0, f.cancel(e.id), f6s(e.id);
  }
  function P(e, o, n) {
    let s = se(e.plugin, e.module, o), l = `${e.plugin}: ${s}`;
    return (0, import_chunk_may4s35x.tc)().log(`${l}; ${n}`, "warn"), (0, import_chunk_yg9g0473.NQ)(e.plugin, s, e.toldLast === s ? "once" : "again"), e.toldLast = s, l;
  }
  function v(e, o, n) {
    let s = (0, import_chunk_jv7av99m.d)(o), l = P(e, s, "the instance unmounted"), x = new Map(e.heldIn);
    R(e), c(e, { status: "failed", text: l }), E((0, import_chunk_sjqze7qg.gwi)(Te(e), e.drawing.surface, { phase: n, reason: s, sites: () => [...e.heldIn.values()].filter((g) => g.holders > 0).map((g) => ({ site: g.site, bornAt: (x.get(g.site.component) ?? g).bornAt })) }));
  }
  let A = (e, o) => `${o} ${(0, import_chunk_wgyw76w5.di)({ props: e.handedProps })}`;
  function y(e, o) {
    if (!e.surface || e.isDestroyed) return;
    try {
      o();
    } catch (n) {
      v(e, n, "run");
    }
  }
  function me(e, o) {
    let n = [], s = [], l = [], x = 0, g = 0;
    try {
      let h = ke(e.plugin, o.render(), (k) => {
        let V = import_chunk_2wqvb3q7.Btn.hold(e.plugin, (we) => {
          O(e), y(e, () => o.runHeld(k, we));
        });
        return n.push({ surfaceHandle: V, environmentHandle: k }), V;
      }), M = (0, import_chunk_0w2wb7gk.Sxe)(h, void 0, { surface: e.drawing.surface, within: N(e), measured: (k, V) => {
        x = k, g = V;
      } });
      if (M !== void 0) throw new import_chunk_hcg738hf.je(`returned a tree that does not validate (${M})`);
      return [(0, import_chunk_0w2wb7gk.nTo)((0, import_chunk_0w2wb7gk.tTo)((0, import_chunk_0w2wb7gk.oAr)(h, (k) => L(e, "borderStyle", (0, import_chunk_sjqze7qg.$io)(k))), (k) => {
        s.push(k);
      }), e.drawing.surface, (k) => {
        l.push(k);
      }), n, x, s, l, g];
    } catch (h) {
      throw S(e, n), h;
    }
  }
  function S(e, o) {
    import_chunk_2wqvb3q7.Btn.release(e.plugin, o.map((n) => n.surfaceHandle)), e.surface?.dropHeld(o.map((n) => n.environmentHandle));
  }
  function H(e) {
    let { surface: o } = e;
    if (!o || e.isDestroyed) return;
    e.isDirty = false, e.isRendering = true, e.renderedAt = B();
    let n;
    try {
      n = me(e, o);
    } catch (_) {
      v(e, _, "render");
      return;
    } finally {
      e.isRendering = false;
    }
    let [s, l, x, g, h, M] = n, k = N(e) === import_chunk_0w2wb7gk.Alt;
    if (k && !import_chunk_0w2wb7gk.Fwe.fits(D(e), x, M)) {
      e.isOverBudget = true, S(e, l), P(e, `returned a tree of ${x} rows that, with the tree around the dialog and its other Clients, passes ${M}`, "the frame before it kept");
      return;
    }
    e.isOverBudget = false;
    let we = e.held;
    e.held = l;
    let Ke = (0, import_chunk_2wqvb3q7.uss)(s, e.drawing);
    S(e, we), e.drawnSite = N(e), c(e, { status: "drawn", tree: Ke });
    for (let _ of g) L(e, (0, import_chunk_0w2wb7gk.Vvo)(_), (0, import_chunk_0w2wb7gk.Kvo)(_));
    for (let _ of h) L(e, `${e.drawing.surface} ${(0, import_chunk_0w2wb7gk.qvo)(_)}`, (0, import_chunk_0w2wb7gk.Yvo)(_));
    if (k) import_chunk_0w2wb7gk.Fwe.recordClient(D(e), x);
  }
  function pe(e) {
    for (let o of p.values()) if (o.isOverBudget && o.requestId === e.requestId && o.drawing.surface === e.surface && !o.isDirty && !o.isDestroyed && o.surface !== void 0) o.isDirty = true, o.unpromptedRenders = 0, o.renderTimer = setImmediate(Y, o);
  }
  let D = (e) => ({ requestId: e.requestId, surface: e.drawing.surface, plugin: e.plugin, key: e.element });
  function ue(e) {
    if (e.isDirty || e.isDestroyed || !e.surface) return;
    if (e.unpromptedRenders >= ve) {
      let o = new import_chunk_hcg738hf.je(`set its state again after each of ${e.unpromptedRenders} renders, nothing heard between; set state on a pointer or key event, a tick, a press or new props, and let a render settle`);
      if (e.isRendering) throw o;
      v(e, o, "run");
      return;
    }
    e.isDirty = true, e.renderTimer = setImmediate(Y, e);
  }
  function Y(e) {
    if (e.renderTimer = void 0, e.isDirty) e.unpromptedRenders += 1, clearImmediate(e.selfDrawnTimer), e.selfDrawnTimer = setImmediate(j, e), H(e);
  }
  function O(e) {
    for (let o of p.values()) if (o.plugin === e.plugin) o.unpromptedRenders = 0;
  }
  function le(e, o) {
    let n = e.mountGeneration;
    f.post(e.id, (0, import_chunk_sjqze7qg.qio)(Te(e), e.drawing.surface, o), (s) => {
      if (s.props !== void 0 && !e.isDestroyed && e.mountGeneration === n) J(e, s.props);
    });
  }
  function xe(e, o) {
    if (e.isDestroyed || e.surface) return;
    if (e.thrownAt !== void 0) {
      if (e.thrownAt === A(e, B())) return;
      e.thrownAt = void 0, e.props = e.handedProps;
      for (let [n, s] of e.heldIn) if (s.holders > 0) e.heldIn.set(n, { ...s, bornAt: (0, import_chunk_sjqze7qg.h5e)(s.site) });
    }
    try {
      e.environmentId = o.environmentId, e.surface = o.mount({ module: e.module, props: e.props, host: { schedule: () => ue(e), post: (n) => le(e, n), startTimer: (n, s) => e.clock.every(n, () => {
        O(e), y(e, s);
      }), fault: (n) => y(e, () => {
        throw n;
      }) } }), e.surface.resize(e.columns, e.rows);
    } catch (n) {
      v(e, n, "load");
      return;
    }
    H(e);
  }
  function q(e) {
    e.mountGeneration += 1;
    let o = e.mountGeneration, n = () => e.mountGeneration === o && !e.isDestroyed;
    i.environmentFor(e.plugin).then((s) => {
      if (n()) xe(e, s);
    }, (s) => {
      if (n()) v(e, s, "load");
    });
  }
  function J(e, o) {
    if ((0, import_chunk_wgyw76w5.di)(o) === (0, import_chunk_wgyw76w5.di)(e.props)) return;
    e.props = o, O(e), y(e, () => {
      e.surface?.setProps(o);
    }), H(e);
  }
  function Q(e, o) {
    e.handedProps = o, J(e, o);
  }
  function G(e) {
    if (e.isDestroyed) return;
    if (e.isDestroyed = true, clearTimeout(e.destroyTimer), R(e), p.get(e.id) === e) p.delete(e.id);
  }
  function Z() {
    m = void 0, a = 0;
    for (let e of p.values()) e.isUnsettled &&= e.frameOutcome !== "measured", e.measurings = 0, e.frameOutcome = "unmeasured";
  }
  function ge(e) {
    let o = e.measurings >= (e.isUnsettled ? 1 : ae), n = e.measurings > 0 && a > ie;
    return o ? "instance" : n ? "frame" : void 0;
  }
  function he(e, o) {
    if (e.frameOutcome = "passed over", e.surface?.resize(e.columns, e.rows), !e.isUnsettled) e.isUnsettled = true, ko(e, o);
  }
  function j(e) {
    e.selfDrawnTimer = void 0;
  }
  function ee(e) {
    if (e.holders === 0) G(e);
  }
  function oe(e, o) {
    if (o.columns === e.columns && o.rows === e.rows) return;
    let n = B(), s = n !== e.terminal, l = u && !s && e.measurings > 0;
    if (e.terminal = n, e.columns = o.columns, e.rows = o.rows, l) a += 1, u = false;
    let x = s ? void 0 : ge(e);
    if (x !== void 0) {
      he(e, x);
      return;
    }
    if (!s) e.measurings += 1;
    if (e.frameOutcome === "unmeasured") e.frameOutcome = "measured";
    if (m ??= setImmediate(Z), s || e.selfDrawnTimer === void 0) O(e);
    if (e.surface) e.surface.resize(o.columns, o.rows), H(e);
  }
  function b(e, o) {
    if (F(e, o, -1), e.holders = Math.max(0, e.holders - 1), e.dialogHolders = Math.max(0, e.dialogHolders - U(o)), e.holders === 0 && !e.isDestroyed) clearTimeout(e.destroyTimer), e.destroyTimer = setTimeout(ee, 0, e);
    else if (!re(e)) z(e);
  }
  function re(e) {
    return e.surface === void 0 || e.drawnSite === N(e);
  }
  function z(e) {
    if (O(e), import_chunk_0w2wb7gk.Fwe.dropClient(D(e)), e.drawnSite = void 0, e.snapshot.status === "drawn") c(e, { status: "loading" });
    H(e);
  }
  function F(e, o, n) {
    let s = e.heldIn.get(o) ?? Ce(e, o);
    e.heldIn.set(o, { ...s, holders: Math.max(0, s.holders + n) });
  }
  function N(e) {
    return e.dialogHolders > 0 ? import_chunk_0w2wb7gk.Alt : e.rowSite ?? e.drawing.component;
  }
  let X = (e, o) => ({ id: e.id, plugin: e.plugin, module: e.module, subscribe: (n) => (e.listeners.add(n), () => e.listeners.delete(n)), getSnapshot: () => e.snapshot, setProps: (n) => Q(e, n), laidOut: () => {
    u = true;
  }, resize: (n, s) => oe(e, { columns: n, rows: s }), pointer: (n) => {
    O(e), y(e, () => e.surface?.pointer(n));
  }, key: (n) => {
    O(e), y(e, () => e.surface?.key(n));
  }, acceptsPointer: () => e.surface?.hasPointerListener() === true, acceptsKeys: () => e.surface?.hasKeyListener() === true, threw: (n) => {
    if (e.surface === void 0 || e.isDestroyed) return;
    v(e, n, "render"), e.thrownAt = A(e, e.renderedAt);
  }, drawnAgain: () => e.thrownAt !== void 0 && e.thrownAt !== A(e, B()) && e.holders > 0 ? q(e) : void 0, release: () => b(e, o) });
  function ne(e) {
    for (let o of p.values()) {
      if (o.plugin !== e || o.isDestroyed) continue;
      if (R(o), o.toldLast = void 0, c(o, { status: "loading" }), o.holders > 0) q(o);
    }
  }
  function K(e, o) {
    clearTimeout(e.destroyTimer), e.destroyTimer = void 0, e.holders += 1, F(e, o.component, 1), e.clock = o.clock;
    let n = U(o.component);
    if (e.dialogHolders += n, e.rowSite = n === 0 ? o.component : e.rowSite, re(e)) Q(e, o.props);
    else e.handedProps = o.props, e.props = o.props, y(e, () => {
      e.surface?.setProps(o.props);
    }), z(e);
    return X(e, o.component);
  }
  return { acquire(e) {
    I ??= [i.onDisposed(ne), import_chunk_0w2wb7gk.Fwe.onFreed(pe)];
    let o = p.get(W(e));
    if (o !== void 0 && !o.isDestroyed && o.module === e.module) return K(o, e);
    if (o) G(o);
    let s = Re(e, B());
    return p.set(s.id, s), F(s, e.component, 1), q(s), X(s, e.component);
  }, shown: (e) => p.get(W(e))?.snapshot, remountPlugin: ne, count: () => p.size, dispose() {
    for (let e of I ?? []) e();
    I = void 0, clearImmediate(m), Z();
    for (let e of p.values()) clearImmediate(e.selfDrawnTimer), j(e);
  } };
}
var b2r = p6s();
