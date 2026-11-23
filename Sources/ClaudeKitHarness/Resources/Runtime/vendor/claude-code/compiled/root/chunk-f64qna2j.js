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
var chunk_f64qna2j_exports = {};
__export(chunk_f64qna2j_exports, {
  $ke: () => $ke,
  $y: () => $y,
  A8i: () => A8i,
  Act: () => Act,
  Au: () => Au,
  Bhe: () => Bhe,
  C8i: () => C8i,
  CPe: () => CPe,
  Cn: () => Cn,
  Ec: () => Ec,
  FX: () => FX,
  GAt: () => GAt,
  GXe: () => GXe,
  I8i: () => I8i,
  Jc: () => Jc,
  Lde: () => Lde,
  O8i: () => O8i,
  P8i: () => P8i,
  POs: () => POs,
  R8i: () => R8i,
  Sze: () => Sze,
  T8i: () => T8i,
  Tt: () => Tt,
  Ty: () => Ty,
  Us: () => Us,
  X0: () => X0,
  XPo: () => XPo,
  Y1: () => Y1,
  YPo: () => YPo,
  ZNe: () => ZNe,
  aVn: () => aVn,
  dDl: () => dDl,
  ehn: () => ehn,
  gVt: () => gVt,
  go: () => go,
  hVt: () => hVt,
  kIr: () => kIr,
  lDl: () => lDl,
  qPo: () => qPo,
  uB: () => uB,
  v8i: () => v8i,
  vy: () => vy,
  wIr: () => wIr,
  x8i: () => x8i,
  xoe: () => xoe,
  yze: () => yze,
  zAt: () => zAt,
  zXe: () => zXe
});
module.exports = __toCommonJS(chunk_f64qna2j_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var import_chunk_7e12xj51 = require("/$bunfs/root/chunk-7e12xj51.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var Ce = /^\[M[\x60-\x7f][\x20-\uffff]?$/, ve = /\x1b\[(?:\d+;\d+R|\?[\d;]*c)/, Ie = /^\x1b\]8(?:;|\r?$)/, $e = "\x1B]8;;\x1B\\", ke = /^(?:\[(?:\d{1,2}(?:;\d{1,2})?[~^$@]|(?:1;\d{1,2})?[A-DFHa-d])|O[A-DFHa-d])/;
class ehn {
  #t;
  #e = "";
  constructor(e = {}) {
    this.#t = e;
  }
  feed(e) {
    let { tokens: t, unfinished: s } = wIr(this.#e + e, this.#t);
    return this.#e = s, t;
  }
  flush() {
    let e = qPo(this.#e, this.#t);
    return this.#e = "", e;
  }
  reset() {
    this.#e = "";
  }
  buffer() {
    return this.#e;
  }
}
var Oe = /[\x00\x07\x08\x0e\x0f]/g;
function POs(e) {
  return wIr(e.replace(/(^|\n)\uFEFF/g, "$1"), { stringsEndAtLineFeed: true }).tokens.map((t) => t.type === "text" ? { type: "text", value: t.value.replaceAll("\x1B", "").replace(Oe, "") } : t);
}
function aVn(e) {
  return qPo(e, {});
}
function qPo(e, t) {
  let { tokens: s, unfinished: r } = wIr(e, t);
  if (r !== "") s.push({ type: "sequence", value: r });
  return s;
}
function wIr(e, t) {
  let s = t.x10Mouse ?? false, r = t.escPrefixedKeyIsAlt ?? false, i = t.sizeLeavesOutReplies ?? false, l = t.stringsEndAtLineFeed ?? false, o = t.intermediatesRunToFinal ?? false, u = [], c = "ground", n = 0, a = 0, d = 0, g = e.length < 64 || i && e.split(ve).join("").length < 64;
  while (n < e.length) {
    let f = e.charCodeAt(n);
    switch (c) {
      case "ground":
        if (f === import_chunk_0f2gasyz.r3.ESC) X(u, e, a, n), d = n, c = "escape", n++;
        else if (f === import_chunk_0f2gasyz.r3.DEL) if (Ce.test(e.slice(a, n))) n++;
        else X(u, e, a, n), n++, u.push({ type: "text", value: "\x7F" }), a = n;
        else if (s && f < 32 && (g || f === import_chunk_0f2gasyz.r3.BS)) {
          if (X(u, e, a, n), n++, f === 13 && e.charCodeAt(n) === 10) n++;
          u.push({ type: "text", value: String.fromCharCode(f) }), a = n;
        } else n++;
        break;
      case "escape":
        if (f === import_chunk_0f2gasyz.Wke.CSI) c = "csi", n++;
        else if (f === import_chunk_0f2gasyz.Wke.OSC) c = "osc", n++;
        else if (f === import_chunk_0f2gasyz.Wke.DCS) c = "dcs", n++;
        else if (f === import_chunk_0f2gasyz.Wke.APC && (!s || n + 1 >= e.length || le(e, n + 1, n + 1))) c = "apc", n++;
        else if (!s && f === import_chunk_0f2gasyz.Wke.PM) c = "pm", n++;
        else if (!s && (f === import_chunk_0f2gasyz.Wke.SOS || f === 107)) c = "sos", n++;
        else if (s && f === 79) c = "ss3", n++;
        else if (s && (f === 32 || f === 13 || f === 10 || f === 9)) n++, u.push({ type: "text", value: e.slice(d, n) }), c = "ground", a = n;
        else if (s && (0, import_chunk_0f2gasyz.AIr)(f)) u.push({ type: "text", value: e.slice(d, n) }), c = "ground", a = n;
        else if ((0, import_chunk_0f2gasyz.AIr)(f)) c = "escapeIntermediate", n++;
        else if (f === import_chunk_0f2gasyz.r3.DEL) n++, u.push({ type: "text", value: e.slice(d, n) }), c = "ground", a = n;
        else if ((0, import_chunk_0f2gasyz.K8i)(f)) n++, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
        else if (f === import_chunk_0f2gasyz.r3.ESC && r && n === d + 1 && ke.test(e.slice(n + 1, n + 1 + 8))) n++;
        else if (f === import_chunk_0f2gasyz.r3.ESC) u.push({ type: "sequence", value: e.slice(d, n) }), d = n, n++;
        else if (f < 32) n++, u.push({ type: "text", value: e.slice(d, n) }), c = "ground", a = n;
        else c = "ground", a = d;
        break;
      case "escapeIntermediate":
        if (o && (0, import_chunk_0f2gasyz.AIr)(f)) n++;
        else if ((0, import_chunk_0f2gasyz.AIr)(f) || (0, import_chunk_0f2gasyz.K8i)(f)) n++, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
        else c = "ground", a = d;
        break;
      case "csi":
        if (s && f === 77 && n - d === 2 && (n + 1 >= e.length || e.charCodeAt(n + 1) >= 32) && (n + 2 >= e.length || e.charCodeAt(n + 2) >= 32) && (n + 3 >= e.length || e.charCodeAt(n + 3) >= 32)) {
          if (n + 4 <= e.length) n += 4, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
          else n = e.length;
          break;
        }
        if ((0, import_chunk_0f2gasyz.$Dl)(f)) n++, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
        else if ((0, import_chunk_0f2gasyz.FDl)(f) || (0, import_chunk_0f2gasyz.AIr)(f)) n++;
        else c = "ground", a = d;
        break;
      case "ss3":
        if (f >= 64 && f <= 126) n++, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
        else c = "ground", a = d;
        break;
      case "osc":
      case "dcs":
      case "apc":
      case "pm":
      case "sos":
        if (s && c === "apc" && !le(e, d + 2, n)) a = d + 2, u.push({ type: "sequence", value: e.slice(d, a) }), c = "ground";
        else if (f === import_chunk_0f2gasyz.r3.BEL && c !== "pm" && c !== "sos") n++, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
        else if (f === import_chunk_0f2gasyz.r3.ESC && n + 1 < e.length) if (e.charCodeAt(n + 1) === import_chunk_0f2gasyz.Wke.ST) n += 2, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
        else u.push({ type: "sequence", value: e.slice(d, n) }), d = n, c = "escape", n++;
        else if (f === import_chunk_0f2gasyz.r3.CAN || f === import_chunk_0f2gasyz.r3.SUB) n++, u.push({ type: "sequence", value: e.slice(d, n) }), c = "ground", a = n;
        else if (l && f === import_chunk_0f2gasyz.r3.LF) {
          if (Ie.test(e.slice(d, Math.min(n, d + 5)))) u.push({ type: "sequence", value: $e });
          c = "ground", a = n;
        } else n++;
        break;
    }
  }
  if (c === "ground") return X(u, e, a, n), { tokens: u, unfinished: "" };
  return { tokens: u, unfinished: e.slice(d) };
}
function X(e, t, s, r) {
  if (r > s) e.push({ type: "text", value: t.slice(s, r) });
}
function le(e, t, s) {
  let r = e[s], i = s - t;
  if (i === 0) return r === "G";
  if (i === 1) return r === "i" || r === "O" || r === "E";
  let l = e[t + 1];
  if (l === "i") return i > 2 || r === "=";
  let o = e.charCodeAt(s), u = o === import_chunk_0f2gasyz.r3.ESC || o === import_chunk_0f2gasyz.r3.BEL;
  if (l === "O") return i === 2 ? r === "K" : u;
  let c = e.indexOf(":", t + 3);
  if (c !== -1 && c < s) return true;
  return r >= "A" && r <= "Z" || i > 2 && (r === ":" || u);
}
var yze = 8, Ne = /(\t|\n)/, De = /[\x1b\x9b]/g, Le = /[\x90\x98\x9d-\x9f]/g, Me = /[\x1b\x90\x98\x9b\x9d-\x9f]/, We = /^\x1b[P\]X^_k]/, Pe = /^\x1b[P_].*\x07$|\x9c/s;
function ZNe(e, t = yze) {
  return e.includes("	") || T8i([e]) ? v8i([e], t).join("") : e;
}
function v8i(e, t = yze) {
  let s = 0, r = "";
  return e.map((i, l) => {
    if (!CPe(i) && !i.includes("	")) {
      let u = i.lastIndexOf(`
`) + 1;
      if (u > 0) s = 0, r = "";
      return r += u > 0 ? i.slice(u) : i, i;
    }
    let o = "";
    for (let u of ae(i, l === e.length - 1)) {
      let c = fe(u);
      if (c === void 0) {
        o += u.value, r += u.value;
        continue;
      }
      for (let n of c.split(Ne)) if (n === "	") {
        s += (0, import_chunk_mgh1y10w.oe)(r);
        let a = t - s % t;
        o += " ".repeat(a), s += a, r = "";
      } else if (n === `
`) o += n, s = 0, r = "";
      else o += n, r += n;
    }
    return o;
  });
}
function CPe(e) {
  return Me.test(e);
}
function T8i(e) {
  return e.some((t, s) => CPe(t) && ae(t, s === e.length - 1).some((r) => (fe(r) ?? r.value) !== r.value));
}
function ae(e, t) {
  if (!CPe(e)) return [{ type: "text", value: e }];
  let s = new ehn(), r = s.feed(e);
  for (let [l, o] of r.entries()) if (o.type === "sequence" && o.value === "\x1B") r[l] = { type: "text", value: o.value };
  let i = s.buffer();
  if (i !== "") r.push({ type: t && !We.test(i) ? "sequence" : "text", value: i });
  return r;
}
function fe(e) {
  if (e.type === "text" || e.value.includes(`
`) || Pe.test(e.value)) return ce(e.value.replace(De, ""));
  if (e.value.startsWith("\x1Bk")) return ce(`${e.value.slice(2).replace(/\x9b/g, "")}`);
  return;
}
function ce(e) {
  return e.replace(Le, "\uFFFD");
}
var Act = (e) => `\\x1b\\[[0-9${e}]*m`;
class de {
  reader = null;
  latches = null;
  registerReader(e) {
    let t = this.reader;
    return this.reader = e, t;
  }
  registerLatches(e) {
    let t = this.latches;
    return this.latches = e, t;
  }
}
var Q = new de();
function lDl(e) {
  return Q.registerReader(e);
}
function dDl(e) {
  return Q.registerLatches(e);
}
function pe() {
  let e, t;
  try {
    let { reader: s, latches: r } = Q;
    if (!s || !r) return true;
    if (e = r(), e.wrapFitEnabled !== void 0) return e.wrapFitEnabled;
    t = s("tengu_frolicking_nest", true);
  } catch {
    return true;
  }
  if (t.source !== "payload" || !t.defaultHost) return true;
  return e.wrapFitEnabled = t.value !== false;
}
var Z = new RegExp(Act(";:"), "g"), he = /\x1b\]8;[^\x07\x1b]*(?:\x07|\x1b\\)/y, C8i = new RegExp(`\\r((?:${Act(";:")})+)\\n`, "g"), A8i = new RegExp(`\\r(?:${Act(";:")})*(?=\\n)`, "y"), J = [22, 22, 23, 23, 24, 25, 27, 28, 29, 39, 49, 54, 55, 75], ze = /^\x1b\[[34]8;(?:5;\d+|2;\d+;\d+;\d+)m$/, ne = 9, re = 10, Se = /* @__PURE__ */ new Map([[1, 0], [2, 1], [3, 2], [20, 3], [4, 4], [21, 4], [5, 5], [6, 5], [7, 6], [8, 7], [9, 8], [51, 11], [52, 11], [53, 12], [73, 13], [74, 13]]);
function Au(e, t, s) {
  if (!(t > 0)) return e;
  if (!e.includes("\x1B[")) return K(e, t, s);
  let r = e.replace(Z, "");
  if (r.length < e.length && r.includes("\x1B") && (0, import_chunk_wbk1hf21.Dr)(r) !== (0, import_chunk_wbk1hf21.Dr)(e)) return K(e.replace(C8i, `$1\r
`), t, s);
  let i = K(r, t, s);
  if (i === r && !i.includes(`
`)) return e;
  let l = e.match(Z);
  if (l === null) return i;
  let o = e.split(Z), u = [];
  for (let b = 0, N = 0; b < l.length; b++) u.push(N += o[b].length);
  let c = R8i(), n = [], a = 0, d = 0, g = "", f = "", W = true, D = false, C = true, S = 0, w = 0, m = 0, T = -1, k = -1, L = -1, j = [], z = [], h = [], E = [], P = [], y = [], G = [];
  for (; ; ) {
    let b = ge(r, S, E, P), N = ge(i, m, j, z), v = E[b], U = j[N];
    for (let p = 0; p < b; p++) y[p] = -1;
    let I = b - 1, R = 0;
    for (let p = N - 1; p >= -1 && C; p--) {
      let x = p < 0 ? -1 : z[p];
      if (x === 10 || typeof x === "string") {
        h[R++] = p;
        continue;
      }
      let A = I;
      while (A >= 0 && P[A] !== x) A--;
      C = p < 0 || A >= 0;
      for (let H = 0; I > A; I--) {
        let B = P[I], _ = B === 10 || typeof B === "string" ? H : R;
        while (_ < R && z[h[_]] !== B) _++;
        if (_ < R) y[I] = h[_], H = _ + 1;
      }
      if (A >= 0) y[A] = p, I = A - 1;
      R = 0;
    }
    if (!C) break;
    let q = a, M = a - 1;
    for (let p = 0; u[M + 1] <= v; ) {
      let x = u[++M];
      while (p < b && (E[p] < x || y[p] < 0)) p++;
      G[M - q] = x <= S ? 0 : p < b ? y[p] : N;
    }
    for (let p = 0; p <= N; p++) {
      let x = j[p], A = a <= M && G[a - q] <= p, H = p < N && z[p] === 10;
      if (D && (A || p < N && !H)) {
        if (D = false, f !== "") n.push(i.slice(w, x), f), w = x, W = true;
      }
      if (A) {
        n.push(i.slice(w, x)), w = x;
        while (a <= M && G[a - q] <= p) n.push(l[a++]);
        W = true;
      }
      if (H) {
        if (d < a) {
          while (d < a) x8i(l[d++], c);
          g = "", f = "";
          let B = 0;
          for (let _ = 0; _ < c.length; _++) {
            if (c[_] === "") continue;
            if (f += `\x1B[${c[_]}m`, J[_] !== B) B = J[_], g = `\x1B[${B}m${g}`;
          }
        }
        if (W && g !== "") n.push(i.slice(w, x), g), w = x;
        W = false, D = true;
      }
    }
    if (S = v, m = U, m >= i.length) {
      C = S >= r.length;
      break;
    }
    if (D) {
      if (D = false, f !== "") n.push(i.slice(w, m), f), w = m, W = true;
    }
    if (T < m) T = i.indexOf(`
`, m), T = T === -1 ? i.length : T;
    if (k < m) k = i.indexOf("\x1B", m), k = k === -1 ? i.length : k;
    if (L < S) L = r.indexOf("\x1B", S), L = L === -1 ? r.length : L;
    let F = Math.min(T - m, k - m, L - S, a < u.length ? u[a] - S : i.length);
    while (F > 0 && Ee(i.charCodeAt(m + F - 1))) F--;
    if (F < 1 || !r.startsWith(i.slice(m, m + F), S)) {
      if (F = 1, i.charCodeAt(m) !== r.charCodeAt(S)) {
        C = false;
        break;
      }
    }
    S += F, m += F;
  }
  if (!C) return K(e, t, s);
  return n.push(i.slice(w)), n.join("");
}
function ge(e, t, s, r) {
  let i = 0, l = t;
  for (; ; i++) {
    let o = e.charCodeAt(l);
    he.lastIndex = l;
    let u = o === 27 ? he.exec(e) : null;
    if (u === null && !Ee(o)) break;
    s[i] = l, r[i] = u !== null ? u[0] : o === 13 ? 10 : o, l += u !== null ? u[0].length : o === 13 && e.charCodeAt(l + 1) === 10 ? 2 : 1;
  }
  return s[i] = l, i;
}
function Ee(e) {
  return e === 32 || e >= 9 && e <= 13;
}
function R8i() {
  return J.map(() => "");
}
function x8i(e, t) {
  if (!e.endsWith("m")) return;
  if (ze.test(e)) {
    t[e.charCodeAt(2) === 51 ? ne : re] = e.slice(2, -1);
    return;
  }
  let s = e.length === 5 ? e.charCodeAt(2) - 48 : 0, r = e.charCodeAt(e.length - 2) - 48;
  if ((e.length === 4 || e.length === 5) && s >= 0 && s <= 9 && r >= 0 && r <= 9) {
    me(s * 10 + r, t);
    return;
  }
  let i = e.slice(2, -1).split(";");
  for (let l = 0; l < i.length; l++) {
    let o = i[l], u = o === "" ? 0 : parseInt(o, 10);
    if (u === 38 || u === 48 || u === 58) {
      let c = parseInt(i[l + 1] ?? "", 10), n = o.includes(":") ? 1 : c === 5 ? 3 : c === 2 ? 5 : 1;
      if (u !== 58 && (n > 1 || o.includes(":"))) {
        if (l + n <= i.length) t[u === 38 ? ne : re] = i.slice(l, l + n).join(";");
      }
      l += n - 1;
    } else if (u === 4 && o.includes(":")) t[Se.get(4)] = o === "4:0" ? "" : /^4:[1-5]$/.test(o) ? o : "4";
    else me(u, t);
  }
}
function me(e, t) {
  let s = e >= 30 && e <= 37 || e >= 90 && e <= 97 ? ne : e >= 40 && e <= 47 || e >= 100 && e <= 107 ? re : Se.get(e);
  if (s !== void 0) t[s] = String(e);
  else if (e === 0) t.fill("");
  else for (let r = 0; r < t.length; r++) if (J[r] === e) t[r] = "";
}
var se = "\u{F0000}", Te = "\u{2FA1D}", ie = /[\u{F0000}\u{2FA1D}]/gu, ye = /^\x1b(?:\[[0-?]*[ -/]*[@-~]|\][^\x00-\x1f\x7f-\x9f]*(?:\x07|\x1b\\))$/, Ge = new RegExp(`^(?:${Act(";:")}$|\\x1b\\]8;)`), Y = new RegExp(/[^\x00-\u02FF\u0370-\u0482\u048A-\u052F\u2000-\u200B\u2010-\u205F\u2070-\u20CF\u2100-\u2BFF\u2E80-\u3029\u3030-\u3098\u309B-\uA4CF\uAC00-\uD7A3\uF900-\uFAFF\uFF01-\uFF9D\uFFE0-\uFFEE\u{1f000}-\u{1f1e5}\u{1f200}-\u{1f3fa}\u{1f400}-\u{1faff}]/u.source + `|${import_chunk_mgh1y10w.e0r.source}`, "gu");
function K(e, t, s, r = true) {
  if (e.search(Y) === -1) return Bun.wrapAnsi(e, t, s);
  let i = "", l = [], o = [];
  for (let h of aVn(e)) if (h.type === "sequence") l.push(h.value), o.push(i.length);
  else i += h.value;
  let u = { starts: [], ends: [], handedAs: [], restoredAs: [] }, c = (0, import_chunk_em52jhgp.ul)(), n = 0, a = false, d;
  Y.lastIndex = 0;
  while ((d = Y.exec(i)) !== null) {
    let h = d.index;
    while (h > 0 && !be(i.charCodeAt(h - 1))) h--;
    let E = d.index;
    while (E < i.length && !be(i.charCodeAt(E))) E++;
    Y.lastIndex = E;
    let P = i.slice(h, E);
    while (n < o.length && o[n] < h) n++;
    let y = n, G = !CPe(P);
    while (y < o.length && o[y] <= E) G = ye.test(l[y]) && G, y++;
    if (!G && y > n) {
      let b = h;
      for (; n < o.length && o[n] < E; n++) if (o[n] > b) te(i, b, o[n], u), b = o[n];
      te(i, b, E, u);
      continue;
    }
    for (let { segment: b, index: N } of c.segment(P)) {
      if (b.length === 1 && !import_chunk_mgh1y10w.e0r.test(b)) continue;
      let v = h + N, U = v + b.length, I = _e(b);
      while (n < o.length && o[n] <= v) n++;
      let R = n;
      while (R < o.length && o[R] < U) R++;
      if (R === n) {
        if (I !== "") V(u, v, U, I, b);
        else we(u, v, b);
        continue;
      }
      if (I === "" || (0, import_chunk_mgh1y10w.oe)(i.slice(v, o[n])) === 0) {
        for (let p = n; p <= R; p++) {
          let x = p === n ? v : o[p - 1], A = p === R ? U : o[p];
          te(i, x, A, u);
        }
        continue;
      }
      let q = I, M = "", F = v;
      for (let p = n; p < R; p++) {
        let x = l[p];
        if (M += i.slice(F, o[p]), F = o[p], r && Ge.test(x)) q += x, a = true;
        else M += x;
      }
      V(u, v, U, q, M + i.slice(F, U));
    }
  }
  let { starts: g, ends: f, handedAs: W, restoredAs: D } = u;
  if (g.length === 0) return ee(Bun.wrapAnsi(e, t, s), e, t, s);
  let C = [], S = [], w = e.search(ie) !== -1, m = 0, T = 0;
  for (let h = 0; h <= g.length; h++) {
    let E = h < g.length ? g[h] : i.length;
    for (; T < l.length && o[T] <= E; T++) {
      let y = i.slice(m, o[T]);
      xe(S, C, y, w), S.push(l[T]), m = o[T];
    }
    let P = i.slice(m, E);
    if (xe(S, C, P, w), h === g.length) break;
    S.push(W[h]), C.push(D[h]), m = f[h];
    while (T < l.length && o[T] < m) T++;
  }
  let k = S.join("");
  if (a && k.split(Ae).every((h) => (0, import_chunk_mgh1y10w.oe)(h) <= t)) return K(e, t, s, false);
  let L = Bun.wrapAnsi(k, t, s);
  if (L === k) return ee(e, e, t, s);
  let j = 0, z = "";
  for (let h of aVn(L)) z += h.type === "sequence" ? h.value : h.value.replace(ie, (E) => C[j++] ?? E);
  return ee(z, e, t, s);
}
function ee(e, t, s, r) {
  if (!r?.hard || s < 1) return e;
  let i = e.split(`
`);
  if (i.every((c) => (0, import_chunk_mgh1y10w.oe)(c) <= s) || !pe()) return e;
  let l = t.split(Ae), o = [];
  for (let c of l) {
    let n = true;
    for (let a of aVn(c)) if (a.type === "sequence" ? !ye.test(a.value) : CPe(a.value)) {
      n = false;
      break;
    }
    o.push(n);
  }
  if (!o.includes(true)) return e;
  if (o.includes(false)) return l.map((c) => K(c, s, r)).join(`
`);
  let u = [];
  for (let c of i) {
    if ((0, import_chunk_mgh1y10w.oe)(c) <= s) {
      u.push(c);
      continue;
    }
    Re(c, s, false, u);
  }
  return u.join(`
`);
}
function Re(e, t, s, r) {
  let i = "", l = 0, o = () => {
    if (!s && (0, import_chunk_mgh1y10w.oe)(i) > t) Re(i, t, true, r);
    else r.push(i);
    i = "", l = 0;
  }, u = (c, n) => {
    if (l > 0 && n > 0 && l + n > t) o();
    i += c, l += n;
  };
  for (let c of aVn(e)) {
    if (c.type === "sequence") {
      i += c.value;
      continue;
    }
    for (let { segment: n } of (0, import_chunk_em52jhgp.ul)().segment(c.value)) {
      let a = (0, import_chunk_mgh1y10w.oe)(n);
      if (a > t && a > 2) for (let d of n) {
        let g = (0, import_chunk_mgh1y10w.oe)(d);
        u(d, s ? Math.max(g, 1) : g);
      }
      else if (s) {
        let d = 0;
        for (let g of n) d += Math.max((0, import_chunk_mgh1y10w.oe)(g), 1);
        u(n, d);
      } else u(n, a);
    }
  }
  o();
}
function be(e) {
  return e === 10 || e === 13;
}
var Ae = /\r\n?|\n/;
function V(e, t, s, r, i) {
  e.starts.push(t), e.ends.push(s), e.handedAs.push(r), e.restoredAs.push(i);
}
function te(e, t, s, r) {
  let i = e.slice(t, s);
  if (i.search(Y) === -1) return;
  for (let { segment: l, index: o } of (0, import_chunk_em52jhgp.ul)().segment(i)) {
    let u = _e(l);
    if (u !== "") V(r, t + o, t + o + l.length, u, l);
    else we(r, t + o, l);
  }
}
function _e(e) {
  let t = ue(e);
  return t === 1 ? se : t === 2 ? Te : "";
}
function we(e, t, s) {
  let r = ue(s);
  if (r <= 2) return;
  let i = t, l = r - (0, import_chunk_mgh1y10w.hxt)(s) <= 2 ? [s] : Ue(s, r);
  for (let o of l) {
    let u = i + o.length, c = ue(o);
    for (let n = 2; n < c; n++) V(e, i, i, se, "");
    if (c > 0) V(e, i, u, c === 1 ? se : Te, o);
    i = u;
  }
}
function ue(e) {
  let t = e.codePointAt(0) > 65535 ? 2 : 1;
  return e.length > t || import_chunk_mgh1y10w.e0r.test(e) ? (0, import_chunk_mgh1y10w.oe)(e) : 0;
}
function Ue(e, t) {
  let s = [], r = "", i = 0;
  for (let l of e) {
    let o = (0, import_chunk_mgh1y10w.oe)(l);
    if (o > 0 && i > 0) s.push(r), r = "";
    r += l, i += o;
  }
  return s.push(r), i + (0, import_chunk_mgh1y10w.hxt)(e) === t ? s : [];
}
function xe(e, t, s, r) {
  if (s === "") return;
  if (r) for (let i of s.match(ie) ?? []) t.push(i);
  e.push(s);
}
function Jc(e, t) {
  if ((0, import_chunk_mgh1y10w.oe)(e) <= t) return e;
  if (t <= 0) return "\u2026";
  if (t < 5) return Tt(e, t);
  let s = e.lastIndexOf("/"), r = s >= 0 ? s : e.lastIndexOf("\\"), i = r >= 0 ? e.slice(r) : e, l = r >= 0 ? e.slice(0, r) : "", o = (0, import_chunk_mgh1y10w.oe)(i);
  if (o >= t - 1) return Y1(e, t);
  let u = t - 1 - o;
  return uB(l, u) + "\u2026" + i;
}
function Tt(e, t) {
  if ((0, import_chunk_mgh1y10w.oe)(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let s = 0, r = "";
  for (let { segment: i } of (0, import_chunk_em52jhgp.ul)().segment(e)) {
    let l = (0, import_chunk_mgh1y10w.oe)(i);
    if (s + l > t - 1) break;
    r += i, s += l;
  }
  return r + "\u2026";
}
function Y1(e, t) {
  if ((0, import_chunk_mgh1y10w.oe)(e) <= t) return e;
  if (t <= 1) return "\u2026";
  let s = t - 1, r = [...(0, import_chunk_em52jhgp.ul)().segment(e)], i = 0, l = r.length;
  for (let o = r.length - 1; o >= 0; o--) {
    let u = (0, import_chunk_mgh1y10w.oe)(r[o].segment);
    if (i + u > s) break;
    i += u, l = o;
  }
  return `\u2026${r.slice(l).map((o) => o.segment).join("")}`;
}
function uB(e, t) {
  if ((0, import_chunk_mgh1y10w.oe)(e) <= t) return e;
  if (t <= 0) return "";
  let s = 0, r = "";
  for (let { segment: i } of (0, import_chunk_em52jhgp.ul)().segment(e)) {
    let l = (0, import_chunk_mgh1y10w.oe)(i);
    if (s + l > t) break;
    r += i, s += l;
  }
  return r;
}
var Be = 8, qe = 40;
function YPo(e, t) {
  return Tt(e, Math.max(qe, t - Be));
}
function Us(e, t, s = false) {
  let r = e;
  if (s) {
    let i = e.indexOf(`
`);
    if (i !== -1) {
      if (r = e.substring(0, i), (0, import_chunk_mgh1y10w.oe)(r) + 1 > t) return Tt(`${r}\u2026`, t);
      return `${r}\u2026`;
    }
  }
  if ((0, import_chunk_mgh1y10w.oe)(r) <= t) return r;
  return Tt(r, t);
}
function GXe(e, t) {
  let s = [], r = "", i = 0;
  for (let { segment: l } of (0, import_chunk_em52jhgp.ul)().segment(e)) {
    let o = (0, import_chunk_mgh1y10w.oe)(l);
    if (i + o <= t) r += l, i += o;
    else {
      if (r) s.push(r);
      r = l, i = o;
    }
  }
  if (r) s.push(r);
  return s;
}
function $ke(e, t, s) {
  if (s <= 0 || t <= 0) return "";
  let r = Au(e, t, { trim: true, hard: true }).split(`
`);
  if (r.length <= s) return r.join(`
`);
  let i = r.slice(0, s);
  return i[s - 1] = Tt((i[s - 1] ?? "") + "\u2026", t), i.join(`
`);
}
function zXe(e) {
  return `${(e / 1e3).toFixed(1)}s`;
}
function Cn(e, t) {
  if (e < 6e4) {
    if (e === 0) return "0s";
    if (e < 1) return `${(e / 1e3).toFixed(1)}s`;
    return `${Math.floor(e / 1e3).toString()}s`;
  }
  let s = Math.floor(e / 864e5), r = Math.floor(e % 864e5 / 36e5), i = Math.floor(e % 36e5 / 6e4), l = Math.round(e % 6e4 / 1e3);
  if (l === 60) l = 0, i++;
  if (i === 60) i = 0, r++;
  if (r === 24) r = 0, s++;
  let o = t?.hideTrailingZeros;
  if (t?.mostSignificantOnly) {
    if (s > 0) return `${s}d`;
    if (r > 0) return `${r}h`;
    if (i > 0) return `${i}m`;
    return `${l}s`;
  }
  if (s > 0) {
    if (o && r === 0 && i === 0) return `${s}d`;
    if (o && i === 0) return `${s}d ${r}h`;
    return `${s}d ${r}h ${i}m`;
  }
  if (r > 0) {
    if (o && i === 0 && l === 0) return `${r}h`;
    if (o && l === 0) return `${r}h ${i}m`;
    return `${r}h ${i}m ${l}s`;
  }
  if (i > 0) {
    if (o && l === 0) return `${i}m`;
    return `${i}m ${l}s`;
  }
  return `${l}s`;
}
function vy(e) {
  let t = e >= 6e4 ? Math.round(e / 6e4) * 6e4 : e;
  return Cn(t, { hideTrailingZeros: true });
}
function GAt(e) {
  let t = Math.max(0, Math.floor(e / 1e3));
  if (t < 60) return `${t}s`;
  let s = Math.floor(t / 60);
  if (s < 60) return `${s}m${String(t % 60).padStart(2, "0")}s`;
  let r = Math.floor(s / 60);
  if (r < 24) return `${r}h${String(s % 60).padStart(2, "0")}m`;
  return `${Math.floor(r / 24)}d${String(r % 24).padStart(2, "0")}h`;
}
var Ke = { notation: "compact", maximumFractionDigits: 1, minimumFractionDigits: 1 }, je = { notation: "compact", maximumFractionDigits: 1, minimumFractionDigits: 0 };
function Ec(e) {
  let t = typeof e === "number" ? e : Number.NaN, s = t >= 1e3;
  return (0, import_chunk_em52jhgp.NDl)("en-US", s ? Ke : je).format(t).toLowerCase();
}
function go(e) {
  return Ec(e).replace(".0", "");
}
function XPo(e, t = 4) {
  return `$${e > 0.5 ? He(e, 100).toFixed(2) : e.toFixed(t)}`;
}
function He(e, t) {
  return Math.round(e * t) / t;
}
var P8i = "costs may be inaccurate due to usage of unknown models", O8i = "at your organization's configured rates";
function I8i(e) {
  return `${Ec(e.inputTokens)} input, ${Ec(e.outputTokens)} output, ${Ec(e.cacheReadInputTokens)} cache read, ${Ec(e.cacheCreationInputTokens)} cache write` + (e.webSearchRequests > 0 ? `, ${Ec(e.webSearchRequests)} web search` : "");
}
function FX(e) {
  if (e < 20) return "< 20";
  return `~${go(Math.round(e / 10) * 10)}`;
}
function xoe(e, t = {}) {
  let { style: s = "narrow", numeric: r = "always", maxUnit: i, now: l = /* @__PURE__ */ new Date() } = t, o = e.getTime() - l.getTime(), u = Math.trunc(o / 1e3), c = [{ unit: "year", seconds: 31536e3, shortUnit: "y" }, { unit: "month", seconds: 2592e3, shortUnit: "mo" }, { unit: "week", seconds: 604800, shortUnit: "w" }, { unit: "day", seconds: 86400, shortUnit: "d" }, { unit: "hour", seconds: 3600, shortUnit: "h" }, { unit: "minute", seconds: 60, shortUnit: "m" }, { unit: "second", seconds: 1, shortUnit: "s" }], n = i ? c.filter((a) => a.seconds <= 86400) : c;
  for (let { unit: a, seconds: d, shortUnit: g } of n) if (Math.abs(u) >= d) {
    let f = Math.trunc(u / d);
    if (s === "narrow") return u < 0 ? `${Math.abs(f)}${g} ago` : `in ${f}${g}`;
    return (0, import_chunk_em52jhgp.V8i)("long", r).format(f, a);
  }
  if (s === "narrow") return u <= 0 ? "0s ago" : "in 0s";
  return (0, import_chunk_em52jhgp.V8i)(s, "auto").format(0, "second");
}
function Ty(e, t = {}) {
  let { now: s = /* @__PURE__ */ new Date(), ...r } = t;
  if (e > s) return xoe(e, { ...r, now: s });
  return xoe(e, { ...r, numeric: "always", now: s });
}
function kIr(e) {
  let t = e.fileSize !== void 0 ? (0, import_chunk_7e12xj51.dn)(e.fileSize) : `${e.messageCount} messages`, s = [Ty(e.modified, { style: "short" }), ...e.sessionKind === "bg" ? ["bg"] : [], ...e.gitBranch ? [e.gitBranch] : [], t];
  if (e.tag) s.push(`#${e.tag}`);
  if (e.agentSetting) s.push(`@${e.agentSetting}`);
  if (e.prNumber) s.push(e.prRepository ? `${e.prRepository}#${e.prNumber}` : `#${e.prNumber}`);
  return s.join(" \xB7 ");
}
function Fe(e, t) {
  if (t === void 0) return { minutes: e.getMinutes(), year: e.getFullYear() };
  let s = new Map((0, import_chunk_em52jhgp.Eee)("en-US", { timeZone: t, year: "numeric", minute: "numeric" }).formatToParts(e).map((r) => [r.type, r.value]));
  return { minutes: Number(s.get("minute")), year: Number(s.get("year")) };
}
function X0(e, t = false, s = true, r = false, i) {
  if (!e) return;
  let l = new Date(e * 1e3), o = /* @__PURE__ */ new Date(), { minutes: u, year: c } = Fe(l, i), n = t || i !== void 0 ? ` (${i ?? (0, import_chunk_em52jhgp.DDl)()})` : "", a = (l.getTime() - o.getTime()) / 36e5;
  if (r || a > 24) {
    let g = { month: "short", day: "numeric", hour: s ? "numeric" : void 0, minute: !s || u === 0 ? void 0 : "2-digit", hour12: s ? true : void 0, timeZone: i };
    if (c !== Fe(o, i).year) g.year = "numeric";
    return l.toLocaleString("en-US", g).replace(/[ \u202f]([AP]M)/i, (W, D) => D.toLowerCase()) + n;
  }
  return l.toLocaleTimeString("en-US", { hour: "numeric", minute: u === 0 ? void 0 : "2-digit", hour12: true, timeZone: i }).replace(/[ \u202f]([AP]M)/i, (g, f) => f.toLowerCase()) + n;
}
function Bhe(e, t = false, s = true, r = false) {
  let i = new Date(e);
  return `${X0(Math.floor(i.getTime() / 1e3), t, s, r)}`;
}
function hVt(e) {
  return Math.round(e * 1e3) / 10;
}
function Sze(e) {
  return Math.min(hVt(e), 100);
}
function $y(e, t = "line") {
  if (e <= 0) return "";
  return `\u2026 +${e} ${(0, import_chunk_7cfjrnwy.O)(e, t)}`;
}
function gVt(e) {
  let t = e * 100;
  if (t > 0 && t < 0.05) return "<0.1%";
  return `${t < 0.95 ? Number(t.toFixed(1)) : Math.round(t)}%`;
}
function Lde(e, t) {
  if (e <= 0) return "";
  return t === void 0 ? `+${e} more` : `+${e} more ${(0, import_chunk_7cfjrnwy.O)(e, t)}`;
}
function zAt(e) {
  return Math.max(1, Math.round(e / 1e3));
}
