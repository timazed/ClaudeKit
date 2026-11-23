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
var chunk_9rvw567f_exports = {};
__export(chunk_9rvw567f_exports, {
  $9t: () => $9t,
  EGs: () => EGs,
  KBo: () => KBo,
  L7n: () => L7n,
  MJ: () => MJ,
  Umt: () => Umt,
  ajr: () => ajr,
  akn: () => akn,
  bGs: () => bGs,
  kGs: () => kGs,
  t$e: () => t$e,
  wGs: () => wGs
});
module.exports = __toCommonJS(chunk_9rvw567f_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_3dxkbe9d = require("/$bunfs/root/chunk-3dxkbe9d.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_v6yexwhb = require("/$bunfs/root/chunk-v6yexwhb.js");
var import_chunk_04nf05xp = require("/$bunfs/root/chunk-04nf05xp.js");
var { floor: j, random: F } = Math;
function D(e, r) {
  return e + j(F() * (r - e + 1));
}
var T = D;
function I(e) {
  var r = e.length;
  return r ? e[T(0, r - 1)] : void 0;
}
var v = I;
function B(e, r) {
  return (0, import_chunk_04nf05xp.cJ)(r, function(a) {
    return e[a];
  });
}
var C = B;
function V(e) {
  return e == null ? [] : C(e, (0, import_chunk_v6yexwhb.EOe)(e));
}
var M = V;
function U(e) {
  return v(M(e));
}
var w = U;
function K(e) {
  var r = (0, import_chunk_04nf05xp.tE)(e) ? v : w;
  return r(e);
}
var MJ = K;
(0, import_chunk_bs4h6795.G)();
function L7n() {
  let r = (0, import_chunk_2yx6c1y2.vt)().spinnerVerbs;
  if (!r) return b;
  if (r.mode === "replace") return r.verbs.length > 0 ? r.verbs : b;
  return [...b, ...r.verbs];
}
var b = ["Accomplishing", "Actioning", "Actualizing", "Architecting", "Baking", "Beaming", "Beboppin'", "Befuddling", "Billowing", "Blanching", "Bloviating", "Boogieing", "Boondoggling", "Booping", "Bootstrapping", "Brewing", "Bunning", "Burrowing", "Calculating", "Caramelizing", "Cascading", "Catapulting", "Cerebrating", "Channeling", "Choreographing", "Churning", "Clauding", "Coalescing", "Cogitating", "Combobulating", "Composing", "Computing", "Concocting", "Considering", "Contemplating", "Cooking", "Crafting", "Creating", "Crunching", "Crystallizing", "Cultivating", "Deciphering", "Deliberating", "Determining", "Dilly-dallying", "Discombobulating", "Doing", "Doodling", "Drizzling", "Ebbing", "Effecting", "Elucidating", "Embellishing", "Enchanting", "Envisioning", "Fermenting", "Fiddle-faddling", "Finagling", "Flamb\xE9ing", "Flibbertigibbeting", "Flowing", "Flummoxing", "Fluttering", "Forging", "Forming", "Frolicking", "Frosting", "Gallivanting", "Galloping", "Garnishing", "Generating", "Gesticulating", "Germinating", "Gitifying", "Grooving", "Gusting", "Harmonizing", "Hashing", "Hatching", "Herding", "Honking", "Hullaballooing", "Hyperspacing", "Ideating", "Imagining", "Improvising", "Incubating", "Inferring", "Infusing", "Ionizing", "Jitterbugging", "Julienning", "Kerfuffling", "Kneading", "Leavening", "Levitating", "Lollygagging", "Manifesting", "Marinating", "Meandering", "Metamorphosing", "Misting", "Moonwalking", "Moseying", "Mulling", "Mustering", "Nebulizing", "Nesting", "Newspapering", "Noodling", "Nucleating", "Onioning", "Orbiting", "Orchestrating", "Osmosing", "Perambulating", "Percolating", "Perusing", "Philosophizing", "Photosynthesizing", "Polishing", "Pollinating", "Pondering", "Pontificating", "Pouncing", "Precipitating", "Prestidigitating", "Processing", "Proofing", "Propagating", "Puttering", "Puzzling", "Quantumizing", "Razzle-dazzling", "Razzmatazzing", "Recombobulating", "Reticulating", "Roosting", "Ruminating", "Saut\xE9ing", "Scampering", "Schlepping", "Scurrying", "Seasoning", "Shenaniganing", "Shimmying", "Simmering", "Skedaddling", "Sketching", "Slithering", "Smooshing", "Sock-hopping", "Spelunking", "Spinning", "Sprouting", "Stewing", "Sublimating", "Swirling", "Swooping", "Symbioting", "Synthesizing", "Tempering", "Thinking", "Thundering", "Tinkering", "Tomfoolering", "Topsy-turvying", "Transfiguring", "Transmogrifying", "Transmuting", "Twisting", "Undulating", "Unfurling", "Unraveling", "Vibing", "Waddling", "Wandering", "Warping", "Whatchamacalliting", "Whirlpooling", "Whirring", "Whisking", "Wibbling", "Working", "Wrangling", "Zesting", "Zigzagging"];
var ajr = "API error";
function KBo(e) {
  try {
    let r = J(e);
    if (r === null || r === "not_a_retry_status" || e === null || e.kind !== "retrying") return { status: r === null ? e : null, malformed: r };
    if (![e.attempt, e.maxRetries, e.deadline].every(Number.isFinite)) return { status: null, malformed: "counters_are_not_numbers" };
    let a = e.error, u = typeof a === "object" && a !== null && "status" in a ? a.status : void 0;
    return { status: { ...e, error: { ...Y, status: typeof u === "number" && Number.isFinite(u) ? u : void 0 } }, malformed: r };
  } catch {
    return { status: null, malformed: "unreadable" };
  }
}
function x(e) {
  (0, import_chunk_k449cc64.i)(new O(q[e]));
}
var P = { retrying: true, stalled: false, auto_mode_unavailable: false, low_priority_waiting: false }, Y = { message: ajr, status: void 0, requestId: void 0, formatted: ajr, connection: null, isNetworkDown: false, rateLimits: null, noResponse: null }, E = "Spinner ignored an API retry status it could not draw (session unaffected): ", p = "Spinner replaced the error details of an API retry status it could not draw (session unaffected): ", q = { not_a_retry_status: E + "it is not an object with a known kind", unreadable: E + "reading it threw", counters_are_not_numbers: E + "its error field is unusable and its counters are not numbers", error_is_nullish: p + "its error field is undefined or null", error_is_a_string: p + "its error field is a string", error_is_not_an_object: p + "its error field is a number, boolean, bigint, symbol or function", formatted_is_not_a_string: p + "error.formatted is set but is not a string", rate_limit_type_is_not_a_string: p + "error.rateLimits.rateLimitType is set but is not a string", error_is_an_error_instance: p + "error.formatted is undefined on an Error instance", error_has_no_keys: p + "error.formatted is undefined on an object with no keys", error_has_api_error_keys: p + "error.formatted is undefined on an object that has the headers or requestID key of an SDK APIError", error_has_snapshot_keys: p + "error.formatted is undefined on an object that has the connection or isNetworkDown key of an error snapshot", error_is_another_object: p + "error.formatted is undefined on another kind of object" };
class O extends import_chunk_jv7av99m.A {
  constructor(e) {
    super(e);
    this.name = "MalformedRetryStatusError";
  }
}
function J(e) {
  if (e === null) return null;
  let r = typeof e === "object" && "kind" in e ? e.kind : void 0;
  if (!Z(r)) return "not_a_retry_status";
  if (!P[r]) return null;
  let a = typeof e === "object" && "error" in e ? e.error : void 0;
  if (a === void 0 || a === null) return "error_is_nullish";
  if (typeof a === "string") return "error_is_a_string";
  if (typeof a !== "object") return "error_is_not_an_object";
  let u = "formatted" in a ? a.formatted : void 0;
  if (typeof u === "string") {
    let l = "rateLimits" in a ? a.rateLimits : void 0, f = (typeof l === "object" || typeof l === "function") && l !== null && "rateLimitType" in l ? l.rateLimitType : void 0;
    return f === void 0 || f === null || typeof f === "string" ? null : "rate_limit_type_is_not_a_string";
  }
  if (u !== void 0) return "formatted_is_not_a_string";
  return a instanceof Error ? "error_is_an_error_instance" : Object.keys(a).length === 0 ? "error_has_no_keys" : "headers" in a || "requestID" in a ? "error_has_api_error_keys" : "connection" in a || "isNetworkDown" in a ? "error_has_snapshot_keys" : "error_is_another_object";
}
function Z(e) {
  return typeof e === "string" && Object.hasOwn(P, e);
}
var bGs = "The session is taking longer than usual to start", _ = Object.freeze({ mode: "responding", overrideMessage: null, overrideHeading: null, workerWait: null, overrideColor: null, overrideShimmerColor: null, isCompacting: false, isResponseHeld: false, compactingHintText: null, compactingStartTime: null, turnEffort: null, turnModel: null, sentEffort: null, retryStatus: null, thinkingStartedAt: null, outputLimitRecovery: null, defaultVerb: "" });
function wGs({ onMalformedRetryStatus: e = x } = {}) {
  let r = (0, import_chunk_se72nykz.ps)({}), a = /* @__PURE__ */ new Set();
  function u(t, g, { materialize: c = true } = {}) {
    r.setState((m) => {
      let y = t in m;
      if (!y && !c) return m;
      let h = m[t] ?? { ..._, defaultVerb: MJ(L7n()) ?? "" }, R = g(h);
      if (R === h && y) return m;
      return { ...m, [t]: R };
    });
  }
  function l(t) {
    function g(n, o) {
      let s = Date.now(), d = n === "requesting" ? o ?? null : null;
      u(t, (S) => S.mode === n && S.outputLimitRecovery === d ? S : { ...S, mode: n, thinkingStartedAt: n === "thinking" ? s : null, outputLimitRecovery: d });
    }
    function c(n, o = null) {
      u(t, (s) => s.overrideMessage === n && s.overrideHeading?.words === o?.words && s.overrideHeading?.detail === o?.detail ? s : { ...s, overrideMessage: n, overrideHeading: o });
    }
    function m(n) {
      u(t, (o) => o.workerWait === n ? o : { ...o, workerWait: n });
    }
    function y(n, o) {
      u(t, (s) => s.overrideColor === n && s.overrideShimmerColor === o ? s : { ...s, overrideColor: n, overrideShimmerColor: o });
    }
    function h(n, o = null) {
      u(t, (s) => s.turnEffort === n && s.turnModel === o ? s : { ...s, turnEffort: n, turnModel: o }, { materialize: n !== null || o !== null });
    }
    function R(n) {
      u(t, (o) => o.sentEffort === n ? o : { ...o, sentEffort: n });
    }
    function H(n) {
      let { status: o, malformed: s } = KBo(n);
      if (s !== null && !a.has(s)) {
        a.add(s);
        try {
          e(s);
        } catch {
        }
      }
      u(t, (d) => d.retryStatus === o ? d : { ...d, retryStatus: o }, { materialize: o !== null });
    }
    function k(n, o = null) {
      let s = Date.now();
      u(t, (d) => {
        if (d.isCompacting === n && d.compactingHintText === o) return d;
        let S = n ? d.compactingStartTime ?? s : null;
        return { ...d, isCompacting: n, compactingHintText: o, compactingStartTime: S };
      });
    }
    function L() {
      u(t, (n) => n.overrideMessage === null && n.overrideColor === null && n.overrideShimmerColor === null && !n.isCompacting && n.compactingHintText === null && n.compactingStartTime === null ? n : { ...n, overrideMessage: null, overrideHeading: null, overrideColor: null, overrideShimmerColor: null, isCompacting: false, compactingHintText: null, compactingStartTime: null });
    }
    function W(n) {
      u(t, (o) => o.isResponseHeld === n ? o : { ...o, isResponseHeld: n });
    }
    function z() {
      let n = MJ(L7n()) ?? "";
      u(t, (o) => ({ ...o, overrideMessage: null, overrideHeading: null, overrideColor: null, overrideShimmerColor: null, isCompacting: false, isResponseHeld: false, compactingHintText: null, compactingStartTime: null, turnEffort: null, turnModel: null, sentEffort: null, retryStatus: null, outputLimitRecovery: null, defaultVerb: n }));
    }
    function N(n) {
      switch (n.type) {
        case "hooks_start":
          y("claudeBlue_FOR_SYSTEM_SPINNER", "claudeBlueShimmer_FOR_SYSTEM_SPINNER"), c(n.hookType === "pre_compact" ? "Running PreCompact hooks\u2026" : n.hookType === "post_compact" ? "Running PostCompact hooks\u2026" : import_chunk_bzyb60p0.RXo);
          return;
        case "compact_start":
          c("Compacting conversation"), k(true, n.hintText ?? null);
          return;
        case "compact_end":
          L();
          return;
      }
    }
    return { setMode: g, setMessage: c, setWorkerWait: m, setColors: y, setTurnEffort: h, setSentEffort: R, setRetryStatus: H, setCompacting: k, setResponseHeld: W, resetOverrides: z, applyCompactProgress: N };
  }
  let f = { setMode: (t, g) => l((0, import_chunk_f9x2f6cx.ot)()).setMode(t, g), setMessage: (t, g) => l((0, import_chunk_f9x2f6cx.ot)()).setMessage(t, g), setWorkerWait: (t) => l((0, import_chunk_f9x2f6cx.ot)()).setWorkerWait(t), setColors: (t, g) => l((0, import_chunk_f9x2f6cx.ot)()).setColors(t, g), setTurnEffort: (t, g) => l((0, import_chunk_f9x2f6cx.ot)()).setTurnEffort(t, g), setSentEffort: (t) => l((0, import_chunk_f9x2f6cx.ot)()).setSentEffort(t), setRetryStatus: (t) => l((0, import_chunk_f9x2f6cx.ot)()).setRetryStatus(t), setCompacting: (t, g) => l((0, import_chunk_f9x2f6cx.ot)()).setCompacting(t, g), setResponseHeld: (t) => l((0, import_chunk_f9x2f6cx.ot)()).setResponseHeld(t), resetOverrides: () => l((0, import_chunk_f9x2f6cx.ot)()).resetOverrides(), applyCompactProgress: (t) => l((0, import_chunk_f9x2f6cx.ot)()).applyCompactProgress(t) };
  return { getSnapshot: r.getSnapshot, getState: r.getState, setState: r.setState, subscribe: r.subscribe, get(t) {
    return r.getState()[t ?? (0, import_chunk_f9x2f6cx.ot)()] ?? _;
  }, bind: l, main: f, evict(t) {
    r.setState((g) => {
      if (!(t in g)) return g;
      let { [t]: c, ...m } = g;
      return m;
    });
  }, applyEvent(t) {
    switch (t.kind) {
      case "agent-mode":
        l(t.agentId).setMode(t.mode, t.outputLimitRecovery);
        return;
      case "agent-retry-status":
        l(t.agentId).setRetryStatus(t.retryStatus);
        return;
      case "agent-turn-effort":
        l(t.agentId).setTurnEffort(t.turnEffort, t.turnModel);
        return;
      case "main-message":
        f.setMessage(t.message);
        return;
      case "main-colors":
        f.setColors(t.color, t.shimmerColor);
        return;
      case "main-response-held":
        f.setResponseHeld(t.held);
        return;
    }
  } };
}
var $9t = (0, import_chunk_bs4h6795.an)(null);
function t$e() {
  let e = (0, import_chunk_bs4h6795.be)($9t);
  if (!e) throw ReferenceError("useSpinnerStore cannot be called outside of a SpinnerStoreContext provider (mounted by <AppStateProvider />)");
  return e;
}
function akn(e) {
  let r = e ?? (0, import_chunk_f9x2f6cx.ot)();
  return (0, import_chunk_3dxkbe9d.$e)(t$e(), (a) => a[r] ?? _);
}
function kGs(e) {
  return (0, import_chunk_3dxkbe9d.$e)(t$e(), (r) => (r[e] ?? _).thinkingStartedAt);
}
function EGs(e) {
  return (0, import_chunk_3dxkbe9d.$e)(t$e(), (r) => (r[e] ?? _).retryStatus);
}
function Umt(e) {
  let r = (0, import_chunk_f9x2f6cx.ot)();
  return (0, import_chunk_3dxkbe9d.$e)(t$e(), (a) => (a[r] ?? _)[e]);
}
