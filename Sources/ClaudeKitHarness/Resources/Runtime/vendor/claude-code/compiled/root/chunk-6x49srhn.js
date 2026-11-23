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
var chunk_6x49srhn_exports = {};
__export(chunk_6x49srhn_exports, {
  Dzi: () => Dzi,
  Fzi: () => Fzi,
  Hme: () => Hme,
  Lzi: () => Lzi,
  Nzi: () => Nzi,
  UEs: () => UEs,
  WCr: () => WCr,
  Yql: () => Yql,
  jCr: () => jCr
});
module.exports = __toCommonJS(chunk_6x49srhn_exports);
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_async_hooks = require("async_hooks");
var re = () => (0, import_chunk_khxw3ng0.er)(import_chunk_0w2wb7gk.Uwe, (e, t) => (0, import_chunk_0w2wb7gk.uCl)(t));
var B = "classic.PostToolUse";
var ne = "this could not be given to a hook that checks it, so it was not done";
var G = "this tool input could not be given to a hook that checks it, so the tool was not run";
function se(e, t) {
  let o = { "classic.PreToolUse": { deny: G }, "classic.PermissionRequest": { decision: { behavior: "deny", message: G } } }, s = e === "tool.call" || e === "tool.check" || e === "tool.judge" || e === "tool.run", i = (p) => e === "session.append", n = e === "session.compact" || e === "agent.report" || e.startsWith("vcs.") || i(t) && !(0, import_chunk_0w2wb7gk.Yun)(t) ? void 0 : import_chunk_0w2wb7gk.xlt[e];
  return Object.hasOwn(import_chunk_0w2wb7gk.xlt, e) ? n?.(s ? G : ne) : o[e];
}
var WCr = "a hook that checks this result could not hand back its answer";
var ie = /* @__PURE__ */ new Set(["tool.check", "tool.judge", "tool.offer", "agent.offer", "plugin.register", "classic.PreToolUse", "classic.PermissionRequest"]);
function Dzi(e, t) {
  if (e === B) return { isNoted: true };
  let o = se(e, t);
  if (o === void 0) return;
  if (ie.has(e)) return { answer: o, afterNext: o };
  return e === "tool.call" || e === "tool.run" ? { answer: o, afterNext: { deny: WCr }, isWithholding: true } : { answer: o };
}
var Ne = 1e3;
function pe(e) {
  let t = import_chunk_0w2wb7gk.aAr.ref, o = /* @__PURE__ */ new Set(), s = [], i = (p) => p === -1 ? 0 : t + 1 + p, a = (p) => s[Number(p) - t - 1], n = (0, import_chunk_0w2wb7gk.Bvs)((p, l) => {
    let f = p === t ? n.deepest(l) : l, y = n.firstOf(f);
    if (p === t && o.has(f)) return t;
    return i(y === e ? -1 : s.push(y) - 1);
  }, (p, l) => {
    let f = new Set(Object.values(l.props));
    return (0, import_chunk_0w2wb7gk.YLe)(p, (m) => {
      if (typeof m !== "object" || m === null || f.has(m)) return typeof m === "function" || typeof m === "symbol";
      return f.add(m), Array.isArray(m) ? (0, import_chunk_0w2wb7gk._w)(m) : Object.values(m);
    }) ? "a function or a symbol, which cannot leave the sandbox" : void 0;
  });
  return { site: n.site, reach: (p) => o.add(p), told: (p) => {
    let l = n.deepest(e), f = [...o].at(-1) === l, y = n.firstOf(l), m = f ? n.rewritten.get(y) : y, x = s.length === 0 ? [] : [...(0, import_chunk_0w2wb7gk.zLe)([p])], u = [], v = /* @__PURE__ */ new Map([[e, -1]]), S = import_chunk_0w2wb7gk.fTt / 2;
    for (let A of [m, ...x.map(a)]) {
      let P = [];
      for (let r = A; r && !v.has(r); r = n.rewritten.get(r)) P.unshift(r);
      for (let r of P) {
        let c = n.rewritten.get(r) ?? e, k = v.get(c);
        if (v.set(r, void 0), k === void 0 || u.length >= Ne) continue;
        let { kept: w = [], changed: H = [] } = Object.groupBy(Object.entries(r.props), ([O, C]) => C === Reflect.get(c.props, O) ? "kept" : "changed"), R = { props: Object.fromEntries(H), kept: w.map(([O]) => O), from: k }, I = (0, import_chunk_0w2wb7gk.d2n)(R);
        if (A === m || I <= S) S -= I, v.set(r, u.push(R) - 1);
      }
    }
    if (v.size === 1) return { result: p };
    return { result: (0, import_chunk_0w2wb7gk.dTo)(p, (A) => {
      let P = a(A), r = v.get(P);
      return P === void 0 ? A : r === void 0 ? t : i(r);
    }), handedDown: { rewrites: u, standing: v.get(m) ?? -1, isReached: f } };
  } };
}
function ae(e) {
  let t = "kind" in e, o = "value" in e;
  return t ? "ui.input" : o ? "ui.select" : "ui.press";
}
function ue(e, t) {
  let o = e.answering.getStore();
  return o !== void 0 && o.isLive && Date.now() < o.answersUntil && (o.event === "session.start" || o.environmentId === t) ? o.event : void 0;
}
var Ue = (e, t, o) => ({ event: ae(o), isLive: true, answersUntil: Date.now() + import_chunk_0w2wb7gk.yGe, environmentId: t, sent: e });
function Me(e, t) {
  let o = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet();
  return (i) => {
    let { stamp: a, environments: n } = e;
    if (a === void 0) return (0, import_chunk_vfyns8ja.x2n)(i);
    let p = a, l = Atomics.load(p, import_chunk_0w2wb7gk.Zun), f = /* @__PURE__ */ new Map(), y = (u) => Atomics.store(p, import_chunk_0w2wb7gk.Zun, u ?? l);
    function m(u, v) {
      y(u);
      let S = v(), A = u !== void 0 && typeof S === "object" && S !== null;
      if (A) (0, import_chunk_may4s35x.j6i)(S, new Set(((0, import_chunk_may4s35x.K_)(S) ? Object.values(S) : []).filter((r) => (0, import_chunk_may4s35x.K_)(r) && o.has(r))));
      if (A && Object.isFrozen(S)) o.set(S, u);
      return S;
    }
    function x(u, v) {
      if (!f.has(u)) {
        let S = [...n].filter(([, A]) => A.name === u);
        f.set(u, S.length === 1 ? S[0]?.[0] : void 0);
      }
      return m(f.get(u), v);
    }
    try {
      return i((u) => (y(u ? o.get(u) : void 0), u !== void 0 && s.has(u)), x, (u) => {
        let v = m(t, u);
        if (o.has(v)) s.add(v);
        return v;
      });
    } finally {
      Atomics.store(p, import_chunk_0w2wb7gk.Zun, l);
    }
  };
}
function ee(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callers : [];
}
function fe(e, t, o) {
  let { result: s, resolver: i, plugin: a, mayDrawShader: n } = o;
  if ((0, import_chunk_kbr9bg9m.dd)(s)) throw new import_chunk_hcg738hf.je("the ui.resolve answer is a Proxy or a vm context; a table of elements is a plain object");
  if (!(0, import_chunk_ma3kja9f.T)(s)) return s;
  function p(f, y, m) {
    let x = t.invokeSync(f, m);
    if (n !== true) {
      let u = (0, import_chunk_0w2wb7gk.iCl)(x), v = u.length === 0 ? [] : (0, import_chunk_0w2wb7gk.iCl)({ type: "Shader", props: t.cloneIn(m) });
      if (u.some((S) => !v.includes(S))) throw new import_chunk_hcg738hf.je(`${a}: its ui.resolve hook's ${y} built a Shader it was not given, and its source never names Shader; name it there so that claude plugin validate lists it`);
    }
    return x;
  }
  let l = /* @__PURE__ */ Object.create(null);
  for (let f of Reflect.ownKeys(s)) {
    if (typeof f !== "string" || f === "then" || f === "__proto__") continue;
    let y = Reflect.getOwnPropertyDescriptor(s, f);
    if (y?.enumerable !== true) continue;
    let m = y.value, x = !(0, import_chunk_kbr9bg9m.dd)(m) && typeof m === "function", u = x && import_chunk_0w2wb7gk.cTo.nameOf(m) === f;
    l[f] = !x ? void 0 : u ? m : (v) => (0, import_chunk_0w2wb7gk.y4l)(e.stamp, () => (0, import_chunk_0w2wb7gk.C6i)(e.stamp, [...ee(e), i], () => p(m, f, v)));
  }
  return l;
}
var ze = (e, t, o) => ({ environments: /* @__PURE__ */ new Map(), loading: /* @__PURE__ */ new Map(), dispatching: new import_async_hooks.AsyncLocalStorage(), framing: new import_async_hooks.AsyncLocalStorage(), serving: new import_async_hooks.AsyncLocalStorage(), answering: new import_async_hooks.AsyncLocalStorage(), servingLive: /* @__PURE__ */ new Set(), hostOps: e, hostStreamOps: t, presses: /* @__PURE__ */ new Map(), taking: /* @__PURE__ */ new Map(), resolving: /* @__PURE__ */ new Map(), stamp: o });
function q({ environment: e, name: t, event: o, e: s }) {
  try {
    return e.argumentFor(s, o);
  } catch (i) {
    throw (0, import_chunk_hcg738hf.zTo)(new import_chunk_hcg738hf.je(`${t}: ${o}: could not be given its argument: ${(0, import_chunk_jv7av99m.d)(i)}`));
  }
}
function X(e) {
  let t = /* @__PURE__ */ new WeakMap();
  return (o, s) => {
    let i = t.get(o) ?? q({ ...e, e: o });
    return t.set(o, i), e.environment.seated?.(i, s) ?? i;
  };
}
var L = (e, t) => `${e}\0${t}`;
function Ze(e, t, o) {
  let s = e.taking.get(t);
  if (e.taking.delete(t), s === void 0) return;
  let i = /* @__PURE__ */ new Set();
  for (let { plugin: a, handle: n } of (0, import_chunk_0w2wb7gk.XLe)(o)) for (let [p, l] of e.environments) if (l.name === a) i.add(L(p, n));
  for (let a of s) if (!i.has(a)) e.presses.delete(a);
}
function b(e, t) {
  let o = e.environments.get(t);
  if (o === void 0) throw new import_chunk_hcg738hf.je(`environment ${t} is not loaded`);
  return o;
}
function ce(e, t) {
  let o = e.framing.getStore();
  return o?.environmentId === t ? o.registration : void 0;
}
var W = (e, t) => (0, import_chunk_0w2wb7gk.bCl)({ next: () => t(() => e.next()), return: () => t(() => e.return(void 0)) });
function Y(e, t, { event: o, raised: s, leftOut: i }) {
  let { environment: a, name: n, nextTo: p, scan: l } = e;
  for (let f of t) {
    if ((0, import_chunk_vfyns8ja.PTo)(f) && !p.has(f)) throw new import_chunk_hcg738hf.je(`${n}: next.to("${f}") refused: its hooks module does not spell ${(0, import_chunk_0w2wb7gk.f6i)(f)} in a literal the scan reads (host rule)`);
    if (f === "user" && !(s === void 0 ? (0, import_chunk_vfyns8ja.D6i)(l, o) : (0, import_chunk_0w2wb7gk._To)({ clauses: a.activation.registrations.registered.filter((x, u) => i?.includes(u) !== true), scan: l, event: o, raised: s }))) throw new import_chunk_hcg738hf.je(`${n}: next.to("user") refused: no hook of its module that spells it stands on this dispatch of ${o} (host rule)`);
  }
}
function ye({ name: e, result: t, component: o }, { counted: s }) {
  try {
    return (0, import_chunk_0w2wb7gk.o4l)(t, e);
  } catch (i) {
    let a = [...s];
    if (!(i instanceof import_chunk_0w2wb7gk.Qvo && (0, import_chunk_0w2wb7gk.d2n)(a) > import_chunk_0w2wb7gk.fTt / 4 || i instanceof import_chunk_0w2wb7gk.Xvo && a.some((p) => (0, import_chunk_0w2wb7gk.i2n)(p, import_chunk_0w2wb7gk.Lme * 2)))) throw i;
    return (0, import_chunk_may4s35x.tc)().log(`ui.render: ${i.message}, over what next(e) handed it; drawing the engine's own`, "warn"), import_chunk_0w2wb7gk.Vjn.has(o) ? import_chunk_0w2wb7gk.Pj : import_chunk_0w2wb7gk.aAr;
  }
}
function ge(e, t, o) {
  let { environmentId: s, name: i, mayDrawShader: a } = t, n = ye(t, o);
  return (0, import_chunk_0w2wb7gk.sCl)(n) ? (0, import_chunk_0w2wb7gk.d4l)({ tree: n, plugin: i, seen: o.seen, groups: o.groups, parts: o.parts, mayDrawShader: a, take: (p, l) => {
    let f = L(s, p), y = !e.presses.has(f);
    e.presses.set(f, l);
    let m = e.dispatching.getStore();
    if (y && m !== void 0) e.taking.get(m)?.add(f);
  } }) : n;
}
function xe(e, t, o) {
  let s = (0, import_chunk_hcg738hf.qTs)(o) ? Dzi(e, t) : void 0;
  return s === void 0 ? o : (0, import_chunk_hcg738hf.GTo)(o, s);
}
function U(e, t, o) {
  let { environmentId: s, event: i, resolver: a, leftOut: n, ended: p, caughtAnswered: l, endedReached: f, withheld: y } = t, { environment: m, name: x, tier: u, isPersons: v, answersForEngine: S, scan: A } = b(e, s), P = A.namesShader === true || S, r = o ?? m.activation.registrations.get(i, n);
  if (!r) throw new import_chunk_hcg738hf.je(`${x}: no ${i} handler`);
  let { run: c, catch: k } = r, w = v === false && (import_chunk_0w2wb7gk.gTt.some((h) => h === u) || S);
  function H(h, g, E) {
    return a !== void 0 ? fe(e, m, { result: h, resolver: a, plugin: x, mayDrawShader: P }) : i === "ui.render" ? ge(e, { environmentId: s, name: x, result: h, component: Object(E).component, mayDrawShader: P }, g) : m.leaving(h, i);
  }
  function R(h, { seen: g, groups: E, parts: j, counted: K }) {
    function oe(F) {
      if (i === "ui.render" && F !== null && (0, import_chunk_0w2wb7gk.sCl)(F) && !K.has(F)) {
        K.add(F);
        let _ = (0, import_chunk_0w2wb7gk.yxe)(F);
        for (let N of (0, import_chunk_0w2wb7gk.XLe)(F, _)) g.add((0, import_chunk_0w2wb7gk.Zvo)(N.plugin, N.handle));
        for (let N of (0, import_chunk_0w2wb7gk.rAr)(F, _)) g.add((0, import_chunk_0w2wb7gk.t6i)(N));
        for (let N of (0, import_chunk_0w2wb7gk.a4l)(F, _)) g.add((0, import_chunk_0w2wb7gk.r6i)(N));
        for (let N of (0, import_chunk_0w2wb7gk.r4l)(F, _)) g.add((0, import_chunk_0w2wb7gk.n6i)(N));
        for (let N of (0, import_chunk_0w2wb7gk.s4l)(F, _)) g.add(N);
        for (let N of _) {
          let M = (0, import_chunk_0w2wb7gk.eTo)(N);
          if (M !== void 0) g.add(M);
        }
        for (let N of (0, import_chunk_0w2wb7gk.n4l)(F, _)) {
          let M = (0, import_chunk_0w2wb7gk.Jvo)(N);
          E.set(M, (E.get(M) ?? 0) + 1);
        }
        for (let N of (0, import_chunk_0w2wb7gk.i4l)(F, _)) j.set(N, (j.get(N) ?? 0) + 1);
      }
      return F;
    }
    return m.nextFor((0, import_chunk_0w2wb7gk.Mlt)({ call: async (F) => (m.freezeForNext((0, import_chunk_hcg738hf.VAr)(F, x)), oe(await h(F))), to: async (F, ...J) => (m.freezeForNext((0, import_chunk_hcg738hf.VAr)(F, x)), Y(b(e, s), J, t), oe(await (0, import_chunk_0w2wb7gk.SAr)(F, h, J))), signal: h.signal, is: h.is, event: h.event, origin: h.origin, trace: () => h.trace, budget: () => h.budget, caught: (0, import_chunk_0w2wb7gk.Xvs)(h) }), i);
  }
  let I = X({ environment: m, name: x, event: i });
  async function O(h, g, E) {
    let j = (0, import_chunk_0w2wb7gk.t4l)();
    try {
      return H(await h(I(g, E.signal), R(E, j)), j, g);
    } catch (K) {
      throw xe(i, g, K);
    }
  }
  async function C(h, g, E) {
    if (f?.(s, g), h.called) await E(g).then(void 0, () => {
      return;
    });
    throw new import_chunk_hcg738hf.je(h.reason);
  }
  return { name: x, environmentId: s, tier: u, ...w && { isVouched: w }, ...S && { answersForEngine: S }, ...t.isToolBody === true && { isToolBody: () => true }, applied: m.applyIn, ...k && { catch: async (h, g) => {
    let E = await O(k, h, g);
    if (E !== void 0) l?.(s);
    return E;
  } }, ...y && { withheld: y }, run: (h, g) => p === void 0 ? O(c, h, g) : C(p, h, g) };
}
function ve(e, t) {
  let o = e.answering.getStore();
  return o?.event === "ui.press" && o.environmentId === t ? o.sent : void 0;
}
function ke(e) {
  let t = e.serving.getStore();
  return t !== void 0 && e.servingLive.has(t.callId) ? t.callId : void 0;
}
var Z = (e, t) => ({ environmentId: t, dispatchId: e.dispatching.getStore(), registration: ce(e, t), serving: ke(e), rootEvent: ue(e, t), pressing: ve(e, t) });
var xt = (e, t) => (o, s, i) => {
  let a = (n) => e.hostOps({ ...Z(e, t), op: o, args: s, signal: n === void 0 || i === void 0 ? n ?? i : AbortSignal.any([i, n]) });
  return (0, import_chunk_0w2wb7gk.l7e)(o) ? a() : (0, import_chunk_0w2wb7gk.SCl)(o, a);
};
var vt = (e, t) => (o, s, i) => {
  let a = new AbortController(), n = import_chunk_0w2wb7gk.$Gt.getStore()?.opCutOf(o), p = AbortSignal.any([i, a.signal, n].filter((y) => y !== void 0)), l = W(e.hostStreamOps({ ...Z(e, t), op: o, args: s, signal: p }), (y) => (0, import_chunk_0w2wb7gk.SCl)(o, y));
  async function* f() {
    try {
      return yield* l;
    } catch (y) {
      if (a.signal.aborted) return;
      throw y;
    }
  }
  return (0, import_chunk_0w2wb7gk.wCl)((0, import_chunk_0w2wb7gk.UZ)(f), () => a.abort(new import_chunk_hcg738hf.je(`${o}: the stream was let go`)));
};
function kt(e, { event: t, leftOut: o }, [s, i]) {
  let { environment: a, name: n } = b(e, s);
  return a.activation.registrations.catches(t, q({ environment: a, name: n, event: t, e: i }), o?.find((p) => p.environmentId === s)?.registrations);
}
function wt(e, t) {
  let { environmentId: o, request: s, core: i } = t, a = b(e, o), n = s.environments.filter((l) => e.environments.has(l));
  if (n.length === 0) return Promise.resolve(i);
  let p = { surface: s.surface, component: s.component };
  return (0, import_chunk_0w2wb7gk.zT)({ e: p, handlers: n.map((l) => U(e, { environmentId: l, event: "ui.resolve", resolver: o })), site: import_chunk_0w2wb7gk.zc["ui.resolve"], bottom: () => Promise.resolve(i), origin: { plugin: a.name, tier: a.tier } });
}
var At = (e, t) => {
  e.delete(t);
};
var Ot = () => ({ event: "session.start", isLive: true, answersUntil: Number.POSITIVE_INFINITY });
function te(e, t) {
  let { environmentId: o, event: s, leftOut: i } = t, { environment: a, name: n, tier: p } = b(e, o), l = X({ environment: a, name: n, event: s });
  function f(m) {
    let x = m;
    return a.streamNextFor((0, import_chunk_0w2wb7gk.Jvs)({ ...(0, import_chunk_0w2wb7gk.hTo)(m), call: (u) => (a.freezeForNext((0, import_chunk_hcg738hf.VAr)(u, n)), x(u)), to: (u, ...v) => (a.freezeForNext((0, import_chunk_hcg738hf.VAr)(u, n)), Y(b(e, o), v, t), (0, import_chunk_0w2wb7gk.p6i)(u, x, v)) }));
  }
  let y = (m, x) => W(x, (u) => e.framing.run({ environmentId: o, registration: m }, u));
  return a.activation.registrations.streamClauses(s, i).map((m) => {
    if (m.kind === "value") return (0, import_chunk_0w2wb7gk.h4l)(U(e, t, m.hook));
    let { registration: x } = m, u = (S) => async (A, P) => y(x, await S(l(A, P.signal), f(P))), v = m.catch;
    return { name: n, environmentId: o, tier: p, run: u(m.open), ...v !== void 0 && { catch: u(v) } };
  });
}
function Ct(e, { request: t, hostNext: o, signal: s }) {
  let { event: i, leftOut: a, environments: n } = t, p = n.flatMap((f) => te(e, { environmentId: f, event: i, raised: t.payload, leftOut: a?.find((y) => y.environmentId === f)?.registrations })), l = (f, y, m = import_chunk_0w2wb7gk.g2n) => o(f, y, m);
  return { e: t.payload, handlers: p, site: (0, import_chunk_0w2wb7gk.qre)(i, t.raise), signal: s, isHopFold: true, bottom: l, origin: t.origin, floors: t.floors };
}
function Lzi({ hostOps: e, hostStreamOps: t, inputs: o, stamp: s, createEnvironment: i, servedBudgetMs: a = import_chunk_0w2wb7gk.yGe }) {
  let n = ze(e, t, s), { environments: p, loading: l, dispatching: f, framing: y, serving: m, answering: x, presses: u } = n;
  async function v(r, c, k) {
    if (c === "ui.render") n.taking.set(r, /* @__PURE__ */ new Set());
    let w, R = c === "session.start" ? Ot() : void 0;
    try {
      return w = await f.run(r, () => x.run(R, k)), w;
    } finally {
      if (R !== void 0) R.isLive = false;
      Ze(n, r, w);
    }
  }
  async function S(r, c, k) {
    let w = /* @__PURE__ */ new Set(), H = r.event === B ? { isGiven: false } : void 0, R = /* @__PURE__ */ new Map(), I = r.event === "ui.render" && (0, import_chunk_0w2wb7gk.VEs)(r.payload) ? pe(r.payload) : void 0, O;
    try {
      O = await v(r.id, r.event, () => (0, import_chunk_0w2wb7gk.zT)({ e: r.payload, handlers: r.environments.map((g) => U(n, { environmentId: g, event: r.event, raised: r.payload, leftOut: r.leftOut?.find((E) => E.environmentId === g)?.registrations, isToolBody: r.toolBodies?.includes(g), ended: r.ended, caughtAnswered: (E) => w.add(E), ...H && { withheld: () => {
        H.isGiven = true;
      } }, endedReached: (E, j) => R.set(E, j) })), site: I?.site ?? (0, import_chunk_0w2wb7gk.qre)(r.event, r.raise), signal: k, isHopFold: true, bottom: (g, E, j = import_chunk_0w2wb7gk.g2n) => (I?.reach(g), c(g, E, j)), origin: r.origin, floors: r.floors, cutAt: r.cutAt }));
    } catch (g) {
      throw H?.isGiven === true ? (0, import_chunk_hcg738hf.GTo)(g, { isNoted: true }) : g;
    }
    let C = [...R].find(([g]) => g === r.ended?.kept), h = C !== void 0 && !w.has(C[0]) && !kt(n, r, C);
    return { ...I?.told(O) ?? { result: O }, ...r.ended !== void 0 && { answered: [...w] }, ...h && { unmatched: true }, ...H?.isGiven === true && { withheld: true } };
  }
  let A = (r, c) => W(c, (k) => f.run(r, () => x.run(void 0, k)));
  return { opFailureOf: (r) => Array.from(p.values(), (c) => c.environment.opFailureOf(r)).find((c) => c !== void 0), ownsValue: (r) => Array.from(p.values()).some((c) => c.environment.ownsValue(r)), has: (r) => p.has(r), async load(r, c) {
    let k = new AbortController();
    l.set(r, k);
    let w;
    try {
      w = await i(xt(n, r), c, { stamp: s ? { view: s, environmentId: r } : void 0, signal: k.signal, hostStream: vt(n, r), inputs: o?.(), framed: (H, R) => y.run({ environmentId: r, registration: H }, R), blamedFor: () => ee(n)[0], blamedWalk: Me(n, r) });
    } finally {
      l.delete(r);
    }
    return p.set(r, { environment: w, name: c.pluginName, tier: c.tier, isPersons: c.isPersons, nextTo: new Set(c.scan.nextTo ?? []), scan: c.scan, answersForEngine: (0, import_chunk_0w2wb7gk.b2n)(c.modulePath) }), { registered: w.activation.registrations.registered };
  }, unload(r) {
    l.get(r)?.abort(), l.delete(r);
    let c = p.get(r);
    if (c) p.delete(r), n.resolving.delete(r), c.environment.dispose();
    for (let k of u.keys()) if (k.startsWith(L(r, 0).slice(0, -1))) u.delete(k);
  }, dispatch: S, dispatchStream: (r, c, k) => (0, import_chunk_0w2wb7gk.UZ)(A(r.id, (0, import_chunk_0w2wb7gk.eTs)(Ct(n, { request: r, hostNext: c, signal: k })))), link: (r) => U(n, r), linkStreams: (r) => te(n, r), within: v, withinSteps: A, async resolveTables(r, c) {
    let { environment: k } = b(n, r), w = (n.resolving.get(r) ?? 0) + 1;
    n.resolving.set(r, w);
    let H = re(), R = await Promise.all(c.map(async (O) => ({ surface: O.surface, component: O.component, answer: await wt(n, { environmentId: r, request: O, core: H[O.surface] }) })));
    if (p.get(r)?.environment === k && n.resolving.get(r) === w) k.storeResolved(R);
  }, build: (r, c, k) => {
    b(n, r).environment.activation.finalize(c, k);
  }, callInterface(r, { name: c, method: k, args: w }, H) {
    let { environment: R } = b(n, r);
    if (H) n.servingLive.add(H.callId);
    let O = H !== void 0 && a !== Number.POSITIVE_INFINITY ? setTimeout(At, a, n.servingLive, H.callId) : void 0;
    function C() {
      if (clearTimeout(O), H) n.servingLive.delete(H.callId);
    }
    let h = () => (0, import_chunk_0w2wb7gk.C6i)(s, H?.callers ?? [], () => R.activation.callInterface(c, k, R.cloneIn(w))).then(R.leaving);
    try {
      return import_chunk_0w2wb7gk.$Gt.exit(() => y.run(void 0, () => x.run(void 0, () => m.run(H, h)))).finally(C);
    } catch (g) {
      throw C(), g;
    }
  }, press(r, { handle: c, sent: k }, w) {
    let { environment: H } = b(n, r), R = u.get(L(r, c));
    if (R === void 0) return Promise.reject(new import_chunk_hcg738hf.je(`ui.press/ui.input/ui.select: no handler is held under handle ${c}`));
    let I = Ue(k, r, w);
    return y.run(void 0, () => x.run(I, () => H.invoke(R, [H.cloneIn(w)]).then(() => {
      return;
    }).finally(() => {
      I.isLive = false;
    })));
  }, releasePresses: (r, c) => {
    for (let k of c) u.delete(L(r, k));
  } };
}
function jCr(e, t) {
  for (let o of e.values()) o.reject(new import_chunk_hcg738hf.je(t));
  e.clear();
}
function Hme(e, t) {
  let o = e.get(t);
  return e.delete(t), o;
}
var UEs = 0;
var Yql = 3;
var Nzi = 2;
var Fzi = 1;
var tm = Object.freeze({ done: true, value: void 0 });
