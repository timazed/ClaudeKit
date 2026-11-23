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
var chunk_fcwndvnw_exports = {};
__export(chunk_fcwndvnw_exports, {
  EWa: () => EWa,
  GRn: () => GRn,
  SWa: () => SWa,
  X8o: () => X8o,
  bWa: () => bWa,
  kWa: () => kWa,
  mXr: () => mXr,
  pXr: () => pXr,
  pnt: () => pnt,
  wWa: () => wWa,
  yWa: () => yWa
});
module.exports = __toCommonJS(chunk_fcwndvnw_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_crypto = require("crypto");
function yWa() {
  return (0, import_chunk_865at33z.b)("tengu_harbor_permissions", false);
}
function G() {
  return (0, import_chunk_865at33z.Lt)("tengu_quiet_elephant", true);
}
var C = "abcdefghijkmnopqrstuvwxyz", J = ["fuck", "shit", "cunt", "cock", "dick", "twat", "piss", "crap", "bitch", "whore", "ass", "tit", "cum", "fag", "dyke", "nig", "kike", "rape", "nazi", "damn", "poo", "pee", "wank", "anus"];
function M(n) {
  let e = 2166136261;
  for (let r = 0; r < n.length; r++) e ^= n.charCodeAt(r), e = Math.imul(e, 16777619);
  e = e >>> 0;
  let o = "";
  for (let r = 0; r < 5; r++) o += C[e % 25], e = Math.floor(e / 25);
  return o;
}
function SWa(n) {
  if (!G()) return Z(n);
  let e = "";
  for (let o = 0; o <= 10; o++) {
    e = "";
    for (let r = 0; r < 5; r++) e += C[(0, import_crypto.randomInt)(C.length)];
    if (!J.some((r) => e.includes(r))) return e;
  }
  return e;
}
function Z(n) {
  let e = M(n);
  for (let o = 0; o < 10; o++) {
    if (!J.some((r) => e.includes(r))) return e;
    e = M(`${n}:${o}`);
  }
  return e;
}
var ee = 3500, T = 2e3, k = 1500, K = 15e3, z = 3e4;
function pnt(n) {
  return v(p(n).replace(/\s+/g, " ").trim());
}
function v(n) {
  let e = Array.from(n);
  if (e.length <= ee) return n;
  let o = e.length - T - k;
  return e.slice(0, T).join("") + `
\u22EF ${o} ${(0, import_chunk_7cfjrnwy.O)(o, "code point")} elided \u22EF
` + e.slice(e.length - k).join("");
}
function p(n) {
  return Array.from((0, import_chunk_7cfjrnwy.vc)(n), (e) => (0, import_chunk_r8478wtb.KN)(e.codePointAt(0) ?? 0) ? " " : e).join("").replace(import_chunk_r8478wtb.aB, "\xB7").replace(ne, "\xB7").replace(oe, "\xB7").replace(import_chunk_r8478wtb.yee, " ");
}
var ne = /[\u2018\u2019\u201A\u201B\u00B4\u02B9\u02BB\u02BC\u02BD\u02BE\u02BF\u02C0\u02C8\u02CA\u02CB\u02F4\u0374\u0384\u055A\u055D\u05F3\u07F4\u07F5\u1FBD\u1FBF\u1FEF\u1FFD\u1FFE\u2032\u2035\u275B\u275C\u275F\uA78B\uA78C\uFF07\uFF40]/g, re = /* @__PURE__ */ new Set(["\u1433", "\u1438", "\u16B2", "\u{16F3F}", "\u2039", "\u203A"]), oe = new RegExp(`[${[...import_chunk_kx2fp6pc.WLr.keys()].filter((n) => !re.has(n)).join("")}]`, "gu");
function R(n) {
  return I((0, import_chunk_w578pjby._)(n)).replace(/\s/g, " ");
}
function x(n, e, o) {
  let r = n, a = R(n);
  if (e.has(a)) {
    let s = a, l = o.get(s) ?? 2;
    r = `${n}#${l}`, a = R(r);
    while (e.has(a)) l++, r = `${n}#${l}`, a = R(r);
    o.set(s, l + 1);
  }
  return e.add(a), r;
}
var H = "(value hidden: it could not be masked. Check it in the terminal or refuse)";
function U(n) {
  return n instanceof RangeError && n.message.startsWith("Maximum call stack size exceeded");
}
function V(n) {
  try {
    return (0, import_chunk_sah8dzn4.z8)(n);
  } catch (e) {
    throw (0, import_chunk_sah8dzn4.j6e)(e), e;
  }
}
function S(n) {
  if (Array.isArray(n)) return n.map(S);
  if (n !== null && typeof n === "object") {
    let e = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
    for (let [a, s] of Object.entries(n)) e[x((0, import_chunk_sah8dzn4.z8)(a), o, r)] = S(s);
    return e;
  }
  return n;
}
var ie = 32e3, se = 2e6;
function q(n) {
  if (n === null || typeof n !== "object") return false;
  let e = se, o = [{ node: n, depth: 1 }];
  while (o.length > 0) {
    let r = o.pop(), { depth: a, node: s } = r;
    if (a >= ie) return true;
    if (typeof s.toJSON === "function") {
      if (e -= 1, e < 0) return true;
      let u;
      try {
        u = s.toJSON();
      } catch {
        return true;
      }
      if (u === null || typeof u !== "object") continue;
      s = u;
    }
    if (Array.isArray(s)) {
      if (e -= s.length, e < 0) return true;
    }
    for (let u of Object.keys(s)) {
      if (e -= 1, e < 0) return true;
      let g = s[u];
      if (g !== null && typeof g === "object") o.push({ node: g, depth: a + 1 });
    }
  }
  return false;
}
function bWa(n) {
  try {
    if (n !== null && typeof n === "object" && !Array.isArray(n)) {
      let a = [], s = 0, l = [], u = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map();
      for (let m of Object.keys(n)) {
        let h, y, E = false;
        try {
          if (h = n[m], q(h)) E = true;
          else y = (0, import_chunk_w578pjby._)(h);
        } catch {
          E = true;
        }
        if (y === void 0) {
          if (!E) continue;
          let f = x(V(m), u, g);
          (0, import_chunk_w578pjby.t)("truncateForPreview: field serialization threw (depth) \u2014 rendering a loud unserializable marker", { level: "error" });
          let w = p((0, import_chunk_w578pjby._)(f)).replace(/\s+/g, " "), P = (0, import_chunk_7cfjrnwy.Ea)(w, 50), L = P.length < w.length ? P + "\u2026" : P;
          if (s >= K) {
            l.push(L);
            continue;
          }
          let N = `${L}: (value unserializable)`;
          s += Array.from(N).length, a.push(N);
          continue;
        }
        let c = x(V(m), u, g);
        if (s >= K) {
          let f = p((0, import_chunk_w578pjby._)(c)).replace(/\s+/g, " "), w = (0, import_chunk_7cfjrnwy.Ea)(f, 50);
          l.push(w.length < f.length ? w + "\u2026" : w);
          continue;
        }
        let d, j = false, F = false;
        try {
          d = (0, import_chunk_w578pjby._)(S((0, import_chunk_sah8dzn4.yJ)({ [m]: (0, import_chunk_w578pjby.te)(y) }, import_chunk_sah8dzn4.z8)[m]));
        } catch (f) {
          if (j = true, !U(f)) F = true, (0, import_chunk_sah8dzn4.j6e)(f);
        }
        if (d === void 0) if (F) (0, import_chunk_w578pjby.t)(`truncateForPreview: redaction round-trip threw for field ${(0, import_chunk_w578pjby._)(c)} \u2014 rendering a marker`, { level: "error" });
        else if (j) (0, import_chunk_w578pjby.t)(`truncateForPreview: redaction round-trip threw for field ${(0, import_chunk_w578pjby._)(c)} \u2014 rendering unredacted`, { level: "error" });
        else (0, import_chunk_w578pjby.t)(`truncateForPreview: redaction round-trip yielded no text for field ${(0, import_chunk_w578pjby._)(c)} \u2014 rendering unredacted`, { level: "error" }), (0, import_chunk_k449cc64.i)(Error("truncateForPreview: redaction round-trip yielded no text for a field \u2014 rendering unredacted"));
        let Q = d === void 0 ? y : d, B = `${I((0, import_chunk_w578pjby._)(c))}: ${F ? H : I(Q)}`;
        s += Array.from(B).length, a.push(B);
      }
      let A = "";
      if (l.length > 0) {
        let h = Math.floor(z / 10);
        if (l.length <= h) {
          let y = Math.max(8, Math.floor(z / l.length) - 2), E = l.map((c) => {
            let d = (0, import_chunk_7cfjrnwy.Ea)(c, y);
            return d.length < c.length ? d + "\u2026" : d;
          });
          A = `
\u22EF ${l.length} ${(0, import_chunk_7cfjrnwy.O)(l.length, "field")} elided: ${E.join(", ")} \u22EF
`;
        } else A = `
\u22EF ${l.length} ${(0, import_chunk_7cfjrnwy.O)(l.length, "field")} elided (count exceeds the ${h}-name bound \u2014 refuse) \u22EF
`;
      }
      return `{ ${a.join(", ")} }${A}`;
    }
    let e;
    try {
      if (q(n)) return (0, import_chunk_w578pjby.t)("truncateForPreview: non-object input exceeds the serialization depth probe \u2014 rendering a loud unserializable marker", { level: "error" }), "(value unserializable)";
      e = (0, import_chunk_w578pjby._)(n);
    } catch {
      return (0, import_chunk_w578pjby.t)("truncateForPreview: non-object input serialization threw \u2014 rendering a loud unserializable marker", { level: "error" }), "(value unserializable)";
    }
    if (e === void 0) return "(unserializable)";
    let o, r = false;
    try {
      o = (0, import_chunk_w578pjby._)(S((0, import_chunk_sah8dzn4.yJ)((0, import_chunk_w578pjby.te)(e), import_chunk_sah8dzn4.z8)));
    } catch (a) {
      if (!U(a)) return (0, import_chunk_sah8dzn4.j6e)(a), (0, import_chunk_w578pjby.t)("truncateForPreview: non-object redaction round-trip threw \u2014 rendering a marker", { level: "error" }), H;
      r = true;
    }
    if (o === void 0) {
      if (r) (0, import_chunk_w578pjby.t)("truncateForPreview: non-object redaction round-trip threw \u2014 rendering unredacted", { level: "error" });
      else (0, import_chunk_w578pjby.t)("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted", { level: "error" }), (0, import_chunk_k449cc64.i)(Error("truncateForPreview: non-object redaction round-trip failed \u2014 rendering unredacted"));
      o = e;
    }
    return v(p(o).replace(/\s{2,}/g, " "));
  } catch {
    return "(unserializable)";
  }
}
function I(n) {
  if (n.length <= 1e5) return v(p(n).replace(/\s{2,}/g, " "));
  let e = 0;
  for (let l of n) e++;
  let o = p((0, import_chunk_7cfjrnwy.Ea)(n.slice(0, T * 2 + 1), T)).replace(/\s{2,}/g, " "), r = Array.from((0, import_chunk_7cfjrnwy.vc)(n.slice(-(k * 2 + 1)))), a = p(r.slice(-k).join("")).replace(/\s{2,}/g, " "), s = e - T - k;
  return o + `
\u22EF ${s} ${(0, import_chunk_7cfjrnwy.O)(s, "code point")} elided \u22EF
` + a;
}
function GRn(n, e) {
  return !!n?.experimental?.[e];
}
function wWa(n, e, o) {
  return n.filter((r) => r.type === "connected" && e(r.name) && GRn(r.capabilities, "claude/channel") && GRn(r.capabilities, "claude/channel/permission") && o(r.name) && r.protocolEra !== "modern");
}
function kWa(n) {
  let e = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
  return { isServerRegistered: n, onResponse(r, a) {
    let s = r.toLowerCase();
    if (G()) {
      if (o.has(s)) return e.delete(s), (0, import_chunk_w578pjby.t)("Channel permission relay: a request ID was drawn twice in one session; channel replies with that ID are ignored \u2014 answer in the terminal", { level: "warn" }), () => {
      };
      o.add(s);
    }
    return e.set(s, a), () => {
      e.delete(s);
    };
  }, resolve(r, a, s) {
    let l = r.toLowerCase(), u = e.get(l);
    if (!u) return false;
    return e.delete(l), u({ behavior: a, fromServer: s }), true;
  } };
}
function D(n, e) {
  if (Array.isArray(n)) return n.map((s) => D(s, e));
  if (n === null || typeof n !== "object") return n;
  let o = Object.entries(n), r = (0, import_chunk_sah8dzn4.usa)(o.map(([s]) => s), e), a = /* @__PURE__ */ Object.create(null);
  for (let [s, [, l]] of o.entries()) a[r[s]] = D(l, e);
  return a;
}
function W(n, e, o) {
  let r = (n.summaryRawKeys?.() ?? []).filter((l) => l in e), a = { ...D((0, import_chunk_sah8dzn4.yJ)(e, o), o), ...Object.fromEntries(r.map((l) => [l, e[l]])) }, s = "";
  try {
    s = n.getToolUseSummary?.(a) ?? n.getActivityDescription?.(a) ?? "";
  } catch (l) {
    (0, import_chunk_w578pjby.t)(`a tool's summary threw: ${l}`, { level: "error" });
  }
  return { summary: s, readRawKeys: r.length > 0 };
}
function pXr(n, e) {
  return W(n, e, import_chunk_sah8dzn4.z8).summary;
}
function X8o(n, e, o) {
  let { summary: r, readRawKeys: a } = W(n, e, import_chunk_sah8dzn4.R3), s = (0, import_chunk_sah8dzn4.dsa)(a ? (0, import_chunk_sah8dzn4.R3)(r) : r);
  return (0, import_chunk_sah8dzn4.dsa)(o(s));
}
var Y = /* @__PURE__ */ new WeakMap();
function mXr(n, e) {
  Y.set(e, n);
}
function EWa(n) {
  let e = Y.get(n);
  return e && X8o(e, n, pnt) || void 0;
}
