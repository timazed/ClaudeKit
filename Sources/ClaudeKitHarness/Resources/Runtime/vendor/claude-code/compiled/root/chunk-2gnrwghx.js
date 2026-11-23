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
var chunk_2gnrwghx_exports = {};
__export(chunk_2gnrwghx_exports, {
  Hv: () => Hv,
  S9t: () => S9t,
  lBo: () => lBo
});
module.exports = __toCommonJS(chunk_2gnrwghx_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_pjgajh0r = require("/$bunfs/root/chunk-pjgajh0r.js");
var import_chunk_6b5tg8j3 = require("/$bunfs/root/chunk-6b5tg8j3.js");
var import_chunk_apafj80n = require("/$bunfs/root/chunk-apafj80n.js");
var import_chunk_40j5bbmz = require("/$bunfs/root/chunk-40j5bbmz.js");
var import_chunk_px0bhkvr = require("/$bunfs/root/chunk-px0bhkvr.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_x8bs72nm = require("/$bunfs/root/chunk-x8bs72nm.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_path = require("path");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
var bt = 500;
function S9t(s, l, i, a, n = { left: Number.MAX_SAFE_INTEGER }, h) {
  let c = `${a}\0${h}\0${import_chunk_6b5tg8j3.bCe.pluginGrammarGeneration}\0${(0, import_chunk_d57v19zt.fct)()}`, d = (0, import_chunk_ghnve1xk.gyn)(c, i), w = s.get(d);
  if (w !== void 0) {
    if (s.delete(d), w.code === i && w.variant === c) return s.set(d, w), n.left -= w.work, w.highlighted;
  }
  let W = n.left, D = l.highlight(i, { language: a, theme: h, work: n });
  if (s.size >= bt) {
    let p = s.keys().next().value;
    if (p !== void 0) s.delete(p);
  }
  return s.set(d, { variant: c, code: i, highlighted: D, work: W - n.left }), D;
}
function _(s) {
  let l = /* @__PURE__ */ new Map();
  if (s.length <= import_chunk_x8bs72nm.Aht) return { text: s, markers: l };
  return { text: s.split(`
`).map((n, h) => {
    let { code: c, truncatedChars: d } = (0, import_chunk_x8bs72nm.tqe)(n);
    if (d > 0) return l.set(h, (0, import_chunk_x8bs72nm.Rht)(d)), c;
    return n;
  }).join(`
`), markers: l };
}
function S(s, l) {
  if (l.size === 0) return s;
  return s.split(`
`).map((i, a) => {
    let n = l.get(a);
    return n ? i + import_chunk_d57v19zt.Re.dim(n) : i;
  }).join(`
`);
}
function ie(s) {
  let d = (0, import_chunk_sng02qpc.k)(16), { code: l, filePath: i, dim: a, skipColoring: n } = s, h = a === void 0 ? false : a, c = n === void 0 ? false : n, w, W;
  if (d[0] !== l || d[1] !== h || d[2] !== c) {
    W = import_chunk_w1d7ygsk.Mn;
    M: {
      w = (0, import_chunk_2yx6c1y2.Qhe)(l);
      if (c) {
        let { text: D, markers: p } = _(w);
        const f2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: S(D, p) });
        let m2;
        if (d[5] !== h || d[6] !== f2) m2 = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: h, children: f2 }), d[5] = h, d[6] = f2, d[7] = m2;
        else m2 = d[7];
        W = m2;
        break M;
      }
    }
    d[0] = l, d[1] = h, d[2] = c, d[3] = w, d[4] = W;
  } else w = d[3], W = d[4];
  if (W !== import_chunk_w1d7ygsk.Mn) return W;
  let f;
  if (d[8] !== i) f = (0, import_path.extname)(i).slice(1), d[8] = i, d[9] = f;
  else f = d[9];
  let b = f, m;
  if (d[10] !== w || d[11] !== b) m = (0, import_chunk_a46xeenj.e)(pe, { codeWithSpaces: w, language: b }), d[10] = w, d[11] = b, d[12] = m;
  else m = d[12];
  let F;
  if (d[13] !== h || d[14] !== m) F = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: h, children: m }), d[13] = h, d[14] = m, d[15] = F;
  else F = d[15];
  return F;
}
function pe(s) {
  let a = (0, import_chunk_sng02qpc.k)(8), { codeWithSpaces: l, language: i } = s, n;
  if (a[0] === import_chunk_w1d7ygsk.R) n = (0, import_chunk_apafj80n.IJ)(), a[0] = n;
  else n = a[0];
  let h = n, [c] = (0, import_chunk_3jkk3v3z.Os)(), { highlightedCode: d } = (0, import_chunk_8bkqeb5d.fW)(), w = import_chunk_6b5tg8j3.bCe.pluginGrammarGeneration, W;
  if (a[1] !== l || a[2] !== d || a[3] !== i || a[4] !== c) {
    b: {
      let { text: D, markers: p } = _(l);
      let f = "markdown";
      if (i) {
        if (h.supportsLanguage(i)) f = i;
        else (0, import_chunk_w578pjby.t)(`Language not supported while highlighting code, falling back to markdown: ${i}`);
      }
      ;
      try {
        W = S(S9t(d, h, D, f, void 0, c), p);
      } catch (m2) {
        let M = m2;
        if (M instanceof Error && M.message.includes("Unknown language")) {
          W = ((0, import_chunk_w578pjby.t)(`Language not supported while highlighting code, falling back to markdown: ${M}`), S(S9t(d, h, D, "markdown", void 0, c), p));
          break b;
        }
        W = S(D, p);
      }
    }
    a[1] = l, a[2] = d, a[3] = i, a[4] = c, a[5] = W;
  } else W = a[5];
  let F = W, m;
  if (a[6] !== F) m = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: F }), a[6] = F, a[7] = m;
  else m = a[7];
  return m;
}
function Vt(or, sr) {
  return (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: or }) }, sr);
}
function Yt() {
  return 1;
}
function Zt(j, at) {
  return at === 0 || (0, import_chunk_wbk1hf21.Dr)(j).trim() !== "" ? [at] : [];
}
var ve = 80;
function Z(s) {
  let l = (0, import_chunk_sng02qpc.k)(2), i;
  if (l[0] !== s) i = (0, import_chunk_pjgajh0r.Rq)() ? (0, import_chunk_pjgajh0r.Pfr)(s) : s, l[0] = s, l[1] = i;
  else i = l[1];
  return i;
}
var Hv = (0, import_chunk_bs4h6795.dw)(function(l) {
  let L = (0, import_chunk_sng02qpc.k)(51), { code: i, filePath: a, width: n, isWidthFixed: h, dim: c, startLine: d, lineNumbers: w, rowsBroken: W } = l, D = h === void 0 ? false : h, p = c === void 0 ? false : c, f = d === void 0 ? 1 : d, m = w === void 0 ? true : w, M = W === void 0 ? false : W, b = Z(i), F = (0, import_chunk_bs4h6795.I)(null), [He, Le] = (0, import_chunk_bs4h6795.y)(ve), dt = n || He, [v] = (0, import_chunk_3jkk3v3z.Os)(), j = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.DJ), z = (0, import_chunk_px0bhkvr.Gu)().syntaxHighlightingDisabled ?? false, ee;
  if (L[0] !== b || L[1] !== a || L[2] !== M || L[3] !== z) {
    Qr: {
      if (z) {
        ee = null;
        break Qr;
      }
      let gt = (0, import_chunk_40j5bbmz.$Wr)();
      if (!gt) {
        ee = null;
        break Qr;
      }
      ee = new gt((0, import_chunk_2yx6c1y2.Qhe)(b), a, M);
    }
    L[0] = b, L[1] = a, L[2] = M, L[3] = z, L[4] = ee;
  } else ee = L[4];
  let X = ee, ut, mt;
  if (L[5] !== n) ut = () => {
    if (!n && F.current) {
      let { width: ht } = (0, import_chunk_8bkqeb5d.Gr)(F.current);
      if (ht > 0) Le(ht - 2);
    }
  }, mt = [n], L[5] = n, L[6] = ut, L[7] = mt;
  else ut = L[6], mt = L[7];
  (0, import_chunk_bs4h6795.H)(ut, mt);
  let ct;
  if (L[8] !== b) ct = le(b), L[8] = b, L[9] = ct;
  else ct = L[9];
  let O = String(ct).length + 2, Ee;
  Vr: {
    if (!m || f === 1) {
      Ee = null;
      break Vr;
    }
    let ft = le(b);
    let de = String(f + ft - 1).length;
    const A2 = Math.max(0, de - String(ft).length);
    let N2;
    if (L[10] !== de || L[11] !== A2) N2 = { digits: de, extraCols: A2 }, L[10] = de, L[11] = A2, L[12] = N2;
    else N2 = L[12];
    Ee = N2;
  }
  let Pe = Ee, er = (0, import_chunk_8bkqeb5d.la)() || f !== 1, A;
  Zr: {
    if (X === null) {
      A = null;
      break Zr;
    }
    let U = dt - (Pe?.extraCols ?? 0) + (m ? 0 : O);
    if (m && !er) {
      let N3;
      if (L[13] !== X || L[14] !== U || L[15] !== p || L[16] !== j || L[17] !== v) N3 = X.render(v, U, p, j), L[13] = X, L[14] = U, L[15] = p, L[16] = j, L[17] = v, L[18] = N3;
      else N3 = L[18];
      let C3;
      if (L[19] !== N3) C3 = { split: false, lines: N3 }, L[19] = N3, L[20] = C3;
      else C3 = L[20];
      A = C3;
      break Zr;
    }
    let N2;
    if (L[21] !== X || L[22] !== U || L[23] !== p || L[24] !== j || L[25] !== v) N2 = X.renderSplit(v, U, p, j), L[21] = X, L[22] = U, L[23] = p, L[24] = j, L[25] = v, L[26] = N2;
    else N2 = L[26];
    let { gutters: De, contents: Me } = N2;
    let C2;
    if (L[27] !== Me || L[28] !== De) C2 = { split: true, gutters: De, contents: Me }, L[27] = Me, L[28] = De, L[29] = C2;
    else C2 = L[29];
    A = C2;
  }
  let u = A, N;
  ei: {
    if (Pe === null || u === null || !u.split) {
      N = null;
      break ei;
    }
    let { digits: ae } = Pe;
    let C2;
    if (L[30] !== ae || L[31] !== u.gutters || L[32] !== f) {
      let Fe = f;
      C2 = u.gutters.map((tr) => {
        if ((0, import_chunk_wbk1hf21.Dr)(tr).trim() === "") {
          return " ".repeat(ae + 2);
        }
        let ir = Fe;
        return Fe = Fe + 1, ` ${String(ir).padStart(ae)} `;
      });
      L[30] = ae, L[31] = u.gutters, L[32] = f, L[33] = C2;
    } else C2 = L[33];
    N = C2;
  }
  let Be = N, nr = (0, import_chunk_8bkqeb5d.Xe)();
  if (u && D && n !== void 0 && n > O && m && f === 1 && !nr && import_chunk_d57v19zt.Re.level >= 2 && !(0, import_chunk_f64qna2j.CPe)(b)) {
    let C2;
    if (L[34] !== O || L[35] !== u.contents || L[36] !== u.gutters || L[37] !== u.lines || L[38] !== u.split || L[39] !== n) C2 = u.split ? (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, flexShrink: 0, children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dangerouslySetAnsi: { lines: u.gutters, width: O } }) }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dangerouslySetAnsi: { lines: u.contents, width: n - O } })] }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dangerouslySetAnsi: { lines: u.lines, width: n } }) }), L[34] = O, L[35] = u.contents, L[36] = u.gutters, L[37] = u.lines, L[38] = u.split, L[39] = n, L[40] = C2;
    else C2 = L[40];
    return C2;
  }
  let C;
  if (L[41] !== b || L[42] !== p || L[43] !== Be || L[44] !== a || L[45] !== m || L[46] !== u || L[47] !== M || L[48] !== f || L[49] !== z) C = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { ref: F, children: u ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.g, { flexDirection: "column", children: u.split ? u.contents.map((pt, ge) => !m ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: pt }) }, ge) : (0, import_chunk_a46xeenj.e)(Se, { gutter: u.gutters[ge], content: pt, displayGutter: Be?.[ge] }, ge)) : u.lines.map(Vt) }) : (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [m && f !== 1 && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["\u2026 from line ", f] }), (0, import_chunk_a46xeenj.e)(ie, { code: b, filePath: a, dim: p, skipColoring: z || M && b.includes(`
${import_chunk_x8bs72nm.SY}`) })] }) }), L[41] = b, L[42] = p, L[43] = Be, L[44] = a, L[45] = m, L[46] = u, L[47] = M, L[48] = f, L[49] = z, L[50] = C;
  else C = L[50];
  return C;
});
function lBo(s, l, i) {
  let w = (0, import_chunk_sng02qpc.k)(8), a = Z(s), [n] = (0, import_chunk_3jkk3v3z.Os)(), c = (0, import_chunk_px0bhkvr.Gu)().syntaxHighlightingDisabled ?? false, d;
  if (w[0] !== a || w[1] !== l || w[2] !== c || w[3] !== n || w[4] !== i) {
    M: {
      let W = c ? null : (0, import_chunk_40j5bbmz.$Wr)();
      if (W === null) {
        let { text: D, markers: p } = _((0, import_chunk_2yx6c1y2.Qhe)(a));
        let f = (0, import_chunk_8bkqeb5d.j7n)([S(D, p)]);
        let m = f.split(`
`);
        if (m.length > 1 && m.at(-1) === "") m.pop();
        if ((0, import_chunk_8bkqeb5d.j9t)(f, i).width <= i) {
          d = m.map(Yt);
          break M;
        }
        let b;
        if (w[6] !== i) b = (F) => Math.max(1, (0, import_chunk_7cfjrnwy.Mt)((0, import_chunk_8bkqeb5d.Ud)(F.replace(/\r$/, ""), i, "wrap"), `
`) + 1), w[6] = i, w[7] = b;
        else b = w[7];
        d = m.map(b);
        break M;
      }
      let { gutters: He } = new W((0, import_chunk_2yx6c1y2.Qhe)(a), l).renderSplit(n, i, false);
      let Le = He.flatMap(Zt);
      d = Le.map((dt, v) => (Le[v + 1] ?? He.length) - dt);
    }
    w[0] = a, w[1] = l, w[2] = c, w[3] = n, w[4] = i, w[5] = d;
  } else d = w[5];
  return d;
}
function le(s) {
  let l = (0, import_chunk_7cfjrnwy.Mt)(s, `
`) + 1;
  return s.endsWith(`
`) ? l - 1 : l;
}
function Se(s) {
  let n = (0, import_chunk_sng02qpc.k)(8), { gutter: l, content: i, displayGutter: a } = s, h;
  if (n[0] !== a || n[1] !== l) h = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.hg, { fromLeftEdge: true, children: a === void 0 ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: l }) }) : (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: a }) }), n[0] = a, n[1] = l, n[2] = h;
  else h = n[2];
  let c;
  if (n[3] !== i) c = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.rr, { children: i }) }), n[3] = i, n[4] = c;
  else c = n[4];
  let d;
  if (n[5] !== h || n[6] !== c) d = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.g, { flexDirection: "row", children: [h, c] }), n[5] = h, n[6] = c, n[7] = d;
  else d = n[7];
  return d;
}
