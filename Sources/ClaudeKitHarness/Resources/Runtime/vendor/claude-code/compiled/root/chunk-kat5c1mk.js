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
var chunk_kat5c1mk_exports = {};
__export(chunk_kat5c1mk_exports, {
  Zce: () => Zce,
  h_e: () => h_e
});
module.exports = __toCommonJS(chunk_kat5c1mk_exports);
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_pjgajh0r = require("/$bunfs/root/chunk-pjgajh0r.js");
var import_chunk_40j5bbmz = require("/$bunfs/root/chunk-40j5bbmz.js");
var import_chunk_px0bhkvr = require("/$bunfs/root/chunk-px0bhkvr.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_x8bs72nm = require("/$bunfs/root/chunk-x8bs72nm.js");
var import_chunk_4684b8fc = require("/$bunfs/root/chunk-4684b8fc.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_thrfqeq5 = require("/$bunfs/root/chunk-thrfqeq5.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function xe(D, S) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { children: D }, S);
}
var fe = 0.4;
function _(n) {
  let u = (0, import_chunk_sng02qpc.k)(12), { patch: t, dim: d, width: i } = n, [a] = (0, import_chunk_3jkk3v3z.Os)(), s = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.DJ), f;
  if (u[0] !== d || u[1] !== s || u[2] !== t.lines || u[3] !== t.oldStart || u[4] !== t.rowsBroken || u[5] !== a || u[6] !== i) f = te(t.lines, t.oldStart, i, d, a, t.rowsBroken, s), u[0] = d, u[1] = s, u[2] = t.lines, u[3] = t.oldStart, u[4] = t.rowsBroken, u[5] = a, u[6] = i, u[7] = f;
  else f = u[7];
  let l = f, L;
  if (u[8] !== l) L = l.map(xe), u[8] = l, u[9] = L;
  else L = u[9];
  let m;
  if (u[10] !== L) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", flexGrow: 1, children: L }), u[10] = L, u[11] = m;
  else m = u[11];
  return m;
}
function me(n) {
  return n.map((t) => {
    let d = t.startsWith("+") ? "add" : t.startsWith("-") ? "remove" : t.startsWith("\\") ? "note" : "nochange", { code: i, truncatedChars: a } = (0, import_chunk_x8bs72nm.tqe)(t, 1);
    return { code: i, i: 0, type: d, originalCode: i, truncatedChars: a };
  });
}
function pe(n) {
  let t = [], d = 0;
  while (d < n.length) {
    let i = n[d];
    if (!i) {
      d++;
      continue;
    }
    if (i.type === "remove") {
      let a = [i], s = d + 1;
      while (s < n.length && n[s]?.type === "remove") {
        let l = n[s];
        if (l) a.push(l);
        s++;
      }
      let u = n[s]?.type === "note" ? n[s++] : void 0, f = [];
      while (s < n.length && n[s]?.type === "add") {
        let l = n[s];
        if (l) f.push(l);
        s++;
      }
      if (a.length > 0 && f.length > 0) {
        let l = Math.min(a.length, f.length);
        for (let L = 0; L < l; L++) {
          let m = a[L], D = f[L];
          if (m && D) m.wordDiff = true, D.wordDiff = true, m.matchedLine = D, D.matchedLine = m;
        }
        if (t.push(...a.filter(Boolean)), u) t.push(u);
        t.push(...f.filter(Boolean)), d = s;
      } else t.push(i), d++;
    } else t.push(i), d++;
  }
  return t;
}
function ge(n, t) {
  return (0, import_chunk_4684b8fc.Ael)(n, t);
}
function ke(n, t, d, i, a) {
  let { type: s, i: u, wordDiff: f, matchedLine: l, originalCode: L } = n;
  if (!f || !l) return null;
  let m = s === "remove" ? L : l.originalCode, D = s === "remove" ? l.originalCode : L, S = ge(m, D), p = m.length + D.length;
  if (S.filter((c) => c.added || c.removed).reduce((c, x) => c + x.value.length, 0) / p > fe || i) return null;
  let C = s === "add" ? "+" : "-", H = C.length, W = Math.max(1, t - d - 1 - H), h = [], R = [], N = 0;
  if (S.forEach((c, x) => {
    let w = false, M;
    if (s === "add") {
      if (c.added) w = true, M = "diffAddedWord";
      else if (!c.removed) w = true;
    } else if (s === "remove") {
      if (c.removed) w = true, M = "diffRemovedWord";
      else if (!c.added) w = true;
    }
    if (!w) return;
    (0, import_chunk_8bkqeb5d.Ud)(c.value, W, "wrap").split(`
`).forEach((T, E) => {
      if (!T) return;
      if (E > 0 || N + (0, import_chunk_mgh1y10w.oe)(T) > W) {
        if (R.length > 0) h.push({ content: [...R], contentWidth: N }), R = [], N = 0;
      }
      R.push((0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { backgroundColor: M, children: T }, `part-${x}-${E}`)), N += (0, import_chunk_mgh1y10w.oe)(T);
    });
  }), R.length > 0) h.push({ content: R, contentWidth: N });
  let v = n.truncatedChars > 0 ? (0, import_chunk_x8bs72nm.Rht)(n.truncatedChars) : "", P = -1;
  if (v && h.length > 0) {
    if (h.at(-1).contentWidth + (0, import_chunk_mgh1y10w.oe)(v) > W) h.push({ content: [], contentWidth: 0 });
    P = h.length - 1;
  }
  return h.map(({ content: c, contentWidth: x }, w) => {
    let M = `${s}-${u}-${w}`, B = s === "add" ? "diffAdded" : "diffRemoved", A = w === 0 ? u : void 0, T = (A !== void 0 ? A.toString().padStart(d) : " ".repeat(d)) + " ", E = w === P ? v : "", z = T.length + H + x + (0, import_chunk_mgh1y10w.oe)(E), V = Math.max(0, t - z);
    return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: a ? "text" : void 0, backgroundColor: B, children: [T, C] }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: a ? "text" : void 0, backgroundColor: B, children: c }), E ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: E }) : null, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, color: a ? "text" : void 0, backgroundColor: B, children: " ".repeat(V) })] }, M);
  });
}
function te(n, t, d, i, a, s, u) {
  let f = Math.max(1, Math.floor(d)), l = me(n), L = pe(l), m = Ce(L, t, s), D = Math.max(...m.map(({ i: p }) => p), 0), S = Math.max(D.toString().length + 1, 0);
  return m.flatMap((p) => {
    let { type: b, code: y, i: C, wordDiff: H, matchedLine: W } = p;
    if (H && W) {
      let x = ke(p, f, S, i, a);
      if (x !== null) return x;
    }
    let h = 2, R = Math.max(1, f - S - 1 - h), v = (0, import_chunk_8bkqeb5d.Ud)(y, R, "wrap").split(`
`), P = p.truncatedChars > 0 ? (0, import_chunk_x8bs72nm.Rht)(p.truncatedChars) : "", c = -1;
    if (P && v.length > 0) {
      let x = v.at(-1);
      if ((0, import_chunk_mgh1y10w.oe)(x) + (0, import_chunk_mgh1y10w.oe)(P) > R) v.push("");
      c = v.length - 1;
    }
    return v.map((x, w) => {
      let M = `${b}-${C}-${w}`, B = w === 0 && b !== "note" ? C : void 0, A = (B !== void 0 ? B.toString().padStart(S) : " ".repeat(S)) + " ", T = { add: "+", remove: "-", nochange: " ", note: "\\" }[b], E = w === c ? P : "", z = A.length + 1 + (0, import_chunk_mgh1y10w.oe)(x) + (0, import_chunk_mgh1y10w.oe)(E), V = Math.max(0, f - z), j = b === "add" ? i ? "diffAddedDimmed" : "diffAdded" : b === "remove" ? i ? "diffRemovedDimmed" : "diffRemoved" : void 0;
      return (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, children: (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { color: a ? "text" : void 0, backgroundColor: j, dimColor: i || b === "nochange" || b === "note", children: [A, T] }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { color: j || u ? "text" : void 0, backgroundColor: j, dimColor: i || b === "note", children: x }), E ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: E }) : null, (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { "aria-hidden": true, color: a ? "text" : void 0, backgroundColor: j, dimColor: i, children: " ".repeat(V) })] }, M);
    });
  });
}
function Ce(n, t, d) {
  let i = t, a = [], s = [...n];
  while (s.length > 0) {
    let u = s.shift(), { code: f, type: l, originalCode: L, truncatedChars: m, wordDiff: D, matchedLine: S } = u, p = { code: f, type: l, i, originalCode: L, truncatedChars: m, wordDiff: D, matchedLine: S };
    switch (l) {
      case "nochange":
        i++, a.push(p);
        break;
      case "note":
        a.push({ ...p, i: 0 });
        break;
      case "add":
        if (d && f.startsWith(import_chunk_x8bs72nm.SY)) {
          a.push({ ...p, i: i - 1 });
          break;
        }
        i++, a.push(p);
        break;
      case "remove": {
        a.push(p);
        let b = 0;
        while (s[0]?.type === "remove") {
          i++;
          let y = s.shift(), { code: C, type: H, originalCode: W, truncatedChars: h, wordDiff: R, matchedLine: N } = y, v = { code: C, type: H, i, originalCode: W, truncatedChars: h, wordDiff: R, matchedLine: N };
          a.push(v), b++;
        }
        i -= b;
        break;
      }
    }
  }
  return a;
}
var ce = ["diffAdded", "diffRemoved", "diffAddedDimmed", "diffRemovedDimmed", "diffAddedWord", "diffRemovedWord"];
function ne(n) {
  if (!n) return;
  let t;
  for (let d of ce) {
    let i = n[d];
    if (i !== void 0) t ??= {}, t[d] = i;
  }
  return t;
}
function ie(n, t, d, i, a, s, u, f, l, L, m) {
  let D = (0, import_chunk_40j5bbmz.Dya)();
  if (!D) return null;
  let S = L ? (0, import_chunk_thrfqeq5.nfn)(t) : 0, p = S > 0 && S < f ? S : 0, b = u ? ce.map((R) => u[R] ?? "").join(",") : "", y = `${s}|${b}|${f}|${l ? 1 : 0}|${m ? 1 : 0}|${p}|${import_chunk_d57v19zt.Re.level}|${d ?? ""}|${i}`, C = n.get(t), H = C?.get(y);
  if (H) return H;
  let W = new D(U(t), d, i, a), h;
  if (p > 0) {
    let { gutters: R, contents: N } = W.renderSplit(s, f, l, u, m);
    h = { split: true, gutterWidth: p, gutters: R, contents: N };
  } else h = { split: false, lines: W.render(s, f, l, u, m) };
  if (!C) C = /* @__PURE__ */ new Map(), n.set(t, C);
  if (C.size >= 4) C.clear();
  return C.set(y, h), h;
}
function de(n) {
  if (!n.lines.some((d) => d.includes("	"))) return n;
  let t = n.lines.map((d) => d.slice(0, 1) + (0, import_chunk_f64qna2j.ZNe)(d.slice(1)));
  return { ...n, lines: t };
}
function U(n) {
  return (0, import_chunk_pjgajh0r.Rq)() ? { ...n, lines: n.lines.map(import_chunk_pjgajh0r.Pfr) } : n;
}
var h_e = (0, import_chunk_bs4h6795.dw)(function(t) {
  let y = (0, import_chunk_sng02qpc.k)(21), { patch: d, dim: i, filePath: a, firstLine: s, fileContent: u, width: f, skipHighlighting: l } = t, L = l === void 0 ? false : l, [m] = (0, import_chunk_3jkk3v3z.Os)(), D = ne((0, import_chunk_3jkk3v3z.bjr)()), p = (0, import_chunk_px0bhkvr.Gu)().syntaxHighlightingDisabled ?? false, b = (0, import_chunk_8bkqeb5d.Xe)(), C;
  if (y[0] !== b || y[1] !== d) C = b ? de(d) : d, y[0] = b, y[1] = d, y[2] = C;
  else C = y[2];
  let H;
  if (y[3] !== C) H = U(C), y[3] = C, y[4] = H;
  else H = y[4];
  let W = H, h = Math.max(1, Math.floor(f)), R = (0, import_chunk_8bkqeb5d.la)(), N = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.DJ), { structuredDiff: v } = (0, import_chunk_8bkqeb5d.fW)(), P = L || p || b ? null : ie(v, d, s, a, u ?? null, m, D, h, i, R, N);
  if (!P) {
    const c2 = b ? f - 1 : f;
    let x;
    if (y[5] !== i || y[6] !== W || y[7] !== c2) x = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { children: (0, import_chunk_a46xeenj.e)(_, { patch: W, dim: i, width: c2 }) }), y[5] = i, y[6] = W, y[7] = c2, y[8] = x;
    else x = y[8];
    return x;
  }
  if (P.split) {
    let { gutterWidth: w, gutters: M, contents: B } = P;
    let c2;
    if (y[9] !== w || y[10] !== M) c2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dangerouslySetAnsi: { lines: M, width: w } }) }), y[9] = w, y[10] = M, y[11] = c2;
    else c2 = y[11];
    const x = h - w;
    let A;
    if (y[12] !== B || y[13] !== x) A = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dangerouslySetAnsi: { lines: B, width: x } }), y[12] = B, y[13] = x, y[14] = A;
    else A = y[14];
    let T;
    if (y[15] !== c2 || y[16] !== A) T = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [c2, A] }), y[15] = c2, y[16] = A, y[17] = T;
    else T = y[17];
    return T;
  }
  let c;
  if (y[18] !== P.lines || y[19] !== h) c = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dangerouslySetAnsi: { lines: P.lines, width: h } }) }), y[18] = P.lines, y[19] = h, y[20] = c;
  else c = y[20];
  return c;
});
function Zce({ hunks: n, dim: t, width: d, filePath: i, firstLine: a, fileContent: s }) {
  return (0, import_chunk_4smdap7r.v3t)(n.map((u, f) => (0, import_chunk_a46xeenj.e)(import_chunk_ee10yhqw.Q, { compact: true, children: (0, import_chunk_a46xeenj.e)(h_e, { patch: u, dim: t, width: d, filePath: i, firstLine: a, fileContent: s }) }, `hunk-${f}`)), (u) => (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "..." }) }, `ellipsis-${u}`));
}
