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
var chunk_d167qrvj_exports = {};
__export(chunk_d167qrvj_exports, {
  $ya: () => $ya,
  A2s: () => A2s,
  BWr: () => BWr,
  Dwn: () => Dwn,
  F2: () => F2,
  Fya: () => Fya,
  Hwn: () => Hwn,
  Lwn: () => Lwn,
  Lya: () => Lya,
  Nya: () => Nya,
  O2s: () => O2s,
  P2s: () => P2s,
  R2s: () => R2s,
  UWr: () => UWr,
  b9t: () => b9t,
  cBo: () => cBo,
  dBo: () => dBo,
  fBo: () => fBo,
  m7n: () => m7n,
  pBo: () => pBo,
  uBo: () => uBo,
  w9t: () => w9t,
  x2s: () => x2s
});
module.exports = __toCommonJS(chunk_d167qrvj_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_210k8f6q = require("/$bunfs/root/chunk-210k8f6q.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_37tzw4e2 = require("/$bunfs/root/chunk-37tzw4e2.js");
var import_chunk_tqcvacgp = require("/$bunfs/root/chunk-tqcvacgp.js");
var import_chunk_nn296t4g = require("/$bunfs/root/chunk-nn296t4g.js");
var import_chunk_zdtzd1bp = require("/$bunfs/root/chunk-zdtzd1bp.js");
var import_chunk_1m0ck3v8 = require("/$bunfs/root/chunk-1m0ck3v8.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var st = /* @__PURE__ */ new Set(["iTerm.app", "vscode", "WezTerm", "WarpTerminal", "Hyper", "Tabby", "rio", "contour", "alacritty"]);
function UWr() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_FORCE_STRIKETHROUGH) return true;
  let e = import_chunk_c203g5kd.s.TERM;
  if (import_chunk_c203g5kd.s.TERM_PROGRAM === "Apple_Terminal" || e === "linux") return false;
  return st.has(import_chunk_c203g5kd.s.TERM_PROGRAM ?? "") || import_chunk_5cey7gvv.wC.isGhostty() || import_chunk_5cey7gvv.wC.isMintty() || import_chunk_5cey7gvv.wC.isJetBrainsIdeTerminal() || import_chunk_c203g5kd.s.LC_TERMINAL === "iTerm2" || !!e?.includes("kitty") || !!e?.includes("alacritty") || !!e?.startsWith("foot") || !!import_chunk_c203g5kd.s.KITTY_WINDOW_ID || !!import_chunk_c203g5kd.s.ALACRITTY_LOG || !!import_chunk_c203g5kd.s.KONSOLE_VERSION || !!import_chunk_c203g5kd.s.WT_SESSION || !!import_chunk_c203g5kd.s.ZED_TERM || parseInt(import_chunk_c203g5kd.s.VTE_VERSION ?? "", 10) >= 4400;
}
var N = 1e3, he = 16e3, Te = 100, ot = 4e3, J = 100, Ee = N * Te, D = import_chunk_sjqze7qg.d5e.rules.block.gfm, be = /\r\n?/g, it = `x
`, lt = /^\n*/, at = /\n*$/, Y = new RegExp(`^(?:[^\\n]+\\n){1,${J}}? {0,3}(?:=+|-+) *(?:\\n|$)`), ye = /^(?:[^\n]+\n)+? {0,3}(?:=+|-+) *(?:\n|$)/;
function ct() {
  let e = 0;
  return { isHeld: () => e > 0, during: (t) => {
    e += 1;
    try {
      return t();
    } finally {
      e -= 1;
    }
  } };
}
var ee = ct();
function Lya(e, t) {
  let n = new import_chunk_sjqze7qg.d5e(e.defaults);
  return t.includes("<") && n.lex(t), n.state.inLink || n.state.inRawBlock;
}
function dBo(e) {
  let t = e.replace(be, `
`);
  return re(I([], t, N)).length === t.length && !K(t.slice(D.fences.exec(t)?.[0].length));
}
function b9t(e, t) {
  let n = !dBo(t);
  return { tokens: n ? ee.during(() => ut(e, t)) : e.lexer(t), isWindowed: n };
}
function A2s(e) {
  let t = "tokens" in e;
  return ie(e) ? e.items : Z(e) ? [...e.header, ...e.rows.flat()].flatMap((n) => n.tokens) : t ? e.tokens ?? [] : [];
}
function ut(e, t) {
  let n = [], r = I([], t.replace(be, `
`), N);
  while (r.rest !== "") {
    r = { declining: r.declining, ...pt(e, r) };
    for (let i of r.taken) {
      let o = n.at(-1);
      o?.type === "space" && i.type === "space" ? o.raw += i.raw : n.push(i);
    }
  }
  return n;
}
function pt(e, t) {
  let n = re(t), { header: r = "", fromRow: i = t.rest } = t.declining ?? {}, o = n.length + i.length <= t.rest.length && n.startsWith(r);
  return ft(e, n) ? z(t.rest) : o ? te(e, t.rest) : gt(e, t, n);
}
function ft(e, t) {
  let r = K(t) ? new import_chunk_sjqze7qg.d5e(e.defaults).blockTokens(t) : [], i = false;
  while (!i && r.length > 0) i = r.some((o) => dt(o).some(K)), r = r.flatMap(A2s);
  return i;
}
function dt(e) {
  let t = (se(e) || e.type === "heading" || e.type === "text") && "text" in e && typeof e.text === "string";
  return Z(e) ? [e.raw] : t ? [e.text] : [];
}
function gt(e, t, n) {
  let r = e.lexer(n), o = n.length === t.rest.length ? r.length : xt(r, n), l = we(r, o, n);
  return l > 0 ? I(r.slice(0, o), t.rest.slice(l), N) : ht(e, t, r);
}
function ht(e, t, n) {
  let [r] = n, i = n.length === 1, o = i && se(r) && !Le(t.rest), l = i && Z(r), u = cBo(r?.raw ?? ""), p = t.declining?.fromRow ?? t.rest, a = l && u.length + p.length <= t.rest.length && !ne(e, u + p.slice(0, O(p, 0, 1)));
  return o ? ke(e, t.rest) : a ? te(e, t.rest) : l ? bt(e, r, t.rest) : mt(t, n);
}
function mt(e, t) {
  let [n] = t, r = t.findLastIndex(_e) <= 0, i = r && t.some(Ae), o = e.lines < he && !(i && se(n)), l = r && ie(n), u = r && (n?.type === "code" || i && n?.type !== "html");
  return o ? I([], e.rest, he) : l ? Tt(e, n) : u ? I(t, St(e), e.lines) : z(e.rest);
}
function Tt(e, t) {
  let n = t.items.slice(0, -1), r = W(n);
  return r !== "" && e.rest.startsWith(r) ? I([Nt(t, r, n)], e.rest.slice(r.length), e.lines) : z(e.rest);
}
function ke(e, t) {
  let n = Et(t), r = O(n.text, 0, ot) === n.text.length && !K(n.text);
  return I([{ ...n, tokens: r ? new import_chunk_sjqze7qg.d5e(e.defaults).inlineTokens(n.text) : [Se(n.text)] }], t.slice(n.raw.length), N);
}
var te = (e, t) => Le(t) ? z(t) : ke(e, t);
function Le(e) {
  return Y.test(e) && D.lheading.test(e);
}
function Et(e) {
  let t = Rt(), n = me(e, "");
  while (n.nextLines !== "") t.text += t.raw === "" ? n.nextLines : `
${n.nextLines}`, t.raw += n.nextLines + n.lineBreak, n = me(n.isOpen ? e.slice(t.raw.length) : "", it);
  return t;
}
function me(e, t) {
  let n = O(e, 0, N), r = e[n - 1] === `
` ? n - 1 : n, i = (D.paragraph.exec(t + e.slice(0, O(e, n, 1)))?.[0] ?? t).slice(t.length), o = i.slice(0, r), l = i.length > r, u = l || D.newline.exec(e.slice(o.length))?.[0] === `
`;
  return { nextLines: o, lineBreak: u ? `
` : "", isOpen: l };
}
function bt(e, t, n) {
  let r = cBo(t.raw), i = kt(r, n), o = xe(n.slice(r.length, i), N), l = [], u = false;
  while (!u && l.length < o.length) {
    let a = ne(e, r + (o[l.length] ?? ""));
    u = a === void 0, a && l.push(a);
  }
  let p = n.slice(0, i) + (lt.exec(n.slice(i))?.[0] ?? "");
  return u ? yt(e, r, o.slice(0, l.length + 1), n) : I([At(t, p, l.flatMap((a) => a.rows))], n.slice(p.length), N);
}
function yt(e, t, n, r) {
  let i = te(e, r), o = t.length + n.join("").length, l = r.length - i.rest.length < o, u = l ? xe(n.at(-1) ?? "", 1) : [], p = Math.floor(Ee / t.length), a = u.slice(0, p).findIndex((_) => !ne(e, t + _)), f = a >= 0 ? a : p < u.length ? p : 0, m = r.slice(o - u.slice(f).join("").length);
  return { ...i, declining: l ? { header: t, fromRow: m } : void 0 };
}
function kt(e, t) {
  let n = e.length, r = n < t.length;
  while (r) {
    let i = t.slice(n, O(t, n, N)), o = Lt(e, i);
    n += o, r = o === i.length && n < t.length;
  }
  return n;
}
function Lt(e, t) {
  let n = (D.table.exec(e + t)?.[0] ?? e).slice(e.length), r = n.replace(at, "");
  return r !== "" && n.length > r.length ? r.length + 1 : r.length;
}
function ne(e, t) {
  let [n] = K(t) ? [] : e.lexer(t);
  return Z(n) && n.raw.length === t.length ? n : void 0;
}
function xe(e, t) {
  let n = [];
  for (let r = 0; r < e.length; r = O(e, r, t)) n.push(e.slice(r, O(e, r, t)));
  return n;
}
function xt(e, t) {
  let n = wt(e), r = e.findLastIndex((l, u) => u < n && Ae(l)) + 1, i = n, o = 0;
  for (let l = e.length - 1; l >= r && o <= J; l--) o += (0, import_chunk_7cfjrnwy.Mt)(e[l]?.raw ?? "", `
`), i = o <= J ? Math.min(i, l) : i;
  return [r, i].find((l) => we(e, l, t) > 0) ?? 0;
}
function wt(e) {
  let t = e.findLastIndex((r) => r.raw.trim() !== "");
  return ie(e[t]) ? t : Math.max(e.findLastIndex(_e), 0);
}
var Nya = (e, t) => W(e) === t;
function Fya(e, t, n) {
  let r = W(e.slice(0, t)), i = W(e.slice(t)), o = n.endsWith(i);
  return n.startsWith(r) ? r.length : o ? n.length - i.length : 0;
}
function we(e, t, n) {
  let r = W(e.slice(0, t)), i = W(e.slice(t)), o = r.length + i.length === n.length || n.startsWith(r), l = n.endsWith(i);
  return o ? r.length : l ? n.length - i.length : 0;
}
function O(e, t, n) {
  let r = t;
  for (let i = 0; i < n && r < e.length && r - t < n * Te; i++) {
    let o = e.indexOf(`
`, r);
    r = o === -1 ? e.length : o + 1;
  }
  return r;
}
function K(e) {
  let t = 0, n = false;
  while (!n && t < e.length) {
    let r = e.indexOf(`
`, t), i = r === -1 ? e.length : r;
    n = i - t > Ee, t = i + 1;
  }
  return n;
}
function re({ rest: e, lines: t }) {
  return e.slice(0, O(e, D.fences.exec(e)?.[0].length ?? 0, t));
}
function St(e) {
  return e.rest.slice(re(e).length);
}
function cBo(e) {
  return e.slice(0, e.indexOf(`
`, e.indexOf(`
`) + 1) + 1);
}
function I(e, t, n) {
  return { taken: e, rest: t, lines: n };
}
function z(e) {
  return I([_t(e)], "", N);
}
function Rt() {
  return { type: "paragraph", raw: "", text: "", tokens: [] };
}
function _t(e) {
  return { type: "paragraph", raw: e, text: e, tokens: [Se(e)] };
}
function Se(e) {
  return { type: "text", raw: e, text: e, escaped: false };
}
function At(e, t, n) {
  return { ...e, raw: t, rows: n };
}
function Nt(e, t, n) {
  return { ...e, raw: t, items: n };
}
function _e(e) {
  return e.type !== "space";
}
function Ae(e) {
  return e.type === "space" || e.raw.endsWith(`

`);
}
function se(e) {
  return e?.type === "paragraph";
}
function ie(e) {
  return e?.type === "list";
}
function Z(e) {
  return e?.type === "table";
}
function W(e) {
  return e.map((t) => t.raw).join("");
}
var It = /^[ \t>]+/gm, Ot = /[ \t]+/g, Pt = /\n{3,}/g;
function Ct() {
  let e = /* @__PURE__ */ new WeakMap(), t = (n) => (e.get(n) ?? 0) >= 100;
  return { isAtMaxNesting: t, lexLevel: (n, r) => {
    if (t(n)) return;
    let o = e.get(n) ?? 0;
    e.set(n, o + 1);
    try {
      return r();
    } finally {
      e.set(n, o);
    }
  } };
}
var G = Ct(), Ne = (e) => e.replace(It, (t) => t.replace(Ot, " ").trimStart()).replace(Pt, `

`).trimEnd();
var Dt = 6, $t = 16, B = `
`, le = (e) => ({ rows: e, isDone: false }), Pe = (e) => e === "" || e.endsWith(B) ? e : e + B, Ie = (e) => e === "" ? [] : [le(e)], Ce = (e) => (0, import_chunk_wbk1hf21.Dr)(e).trim() !== "";
function Wt(e) {
  let t = import_chunk_d57v19zt.Re.dim(import_chunk_xcgcdx61.gZi);
  return le(e.split(B).map((n) => Ce(n) ? `${t} ${import_chunk_d57v19zt.Re.italic(n)}` : n).join(B));
}
function Oe(e) {
  let t = `${import_chunk_xcgcdx61.gZi} `.repeat(Math.max(0, e)).trimEnd();
  return t === "" ? "" : `${import_chunk_d57v19zt.Re.dim(t)} `;
}
function Bt(e, t, n) {
  let r = Math.min(t + 1, $t) - n.around, i = n.around === 0, o = Oe(i ? 1 : r), l = Oe(i ? r - 1 : 0), u = i ? import_chunk_d57v19zt.Re.italic : (p) => p;
  return { rows: Pe(e).split(B).map((p) => Ce(p) ? o + u(l + p) : p).join(B), isDone: true };
}
function Ht(e) {
  let t = [], n = "";
  for (let r of e) if (r.isDone) t.push(...Ie(Pe(n)), r), n = "";
  else n += r.rows;
  return [...t, ...Ie(n)];
}
function Me(e, t, n) {
  let i = t < Dt ? Wt : (o) => Bt(o, t, n);
  return Ht(e.flatMap((o) => o.type === "blockquote" ? Me(o.tokens ?? [], t + 1, n) : [le(n.draw(o, t + 1))])).map((o) => o.isDone ? o : i(o.rows));
}
var De = (e, t, n) => Me(e, t, { around: t, draw: n }).map((r) => r.rows).join("");
function uBo(e) {
  let n = e.some((o) => import_chunk_37tzw4e2.I2s.test(o.raw)) ? [e] : [];
  for (let o of n) for (let [l, u] of Object.entries(o)) {
    let p = typeof u === "string" && l !== "href";
    if (typeof u === "object" && u !== null) n.push(u);
    else if (p) Reflect.set(o, l, (0, import_chunk_37tzw4e2.CIt)(u));
  }
  let r = n.some((o) => Object.entries(o).some(([l, u]) => l !== "href" && typeof u === "string" && u.includes("\x1B"))), i = n.filter((o) => "type" in o && (o.type === "link" || o.type === "image" || o.type === "codespan"));
  for (let o of r ? i : []) Object.assign(o, { afterStyle: true });
  return e;
}
var y = `
`, Ke = new RegExp(`^[${import_chunk_4s4nxvxt.Kko}]+`, "u"), Ut = new RegExp(`(?:^|[^${import_chunk_4s4nxvxt.Kko}])([${import_chunk_4s4nxvxt.Kko}]*)$`, "u");
function ae(e) {
  let t = Ut.exec(e)?.[1]?.length ?? 0;
  return t === 0 ? e : e.slice(0, e.length - t);
}
var Ge = /\x1b\]8;[^;\x07\x1b]*;([^\x07\x1b]*)(?:\x07|\x1b\\)/g, jt = /\x9d|\x1b(?!\[)/, vt = /\x9d/g, Ft = /\x1b(?!\[)/g, H = (e) => Array.from(e).filter((t) => {
  let n = t.codePointAt(0) ?? 0;
  return n !== 10697 && !(0, import_chunk_r8478wtb.KN)(n);
}).join(""), Qe = "\x1B[28m\x1B[39m\x1B[49m", V = (e) => "afterStyle" in e && e.afterStyle === true ? Qe : "", $e = (e, t) => `${t}${H(e)}`, ue = (e, t, n = "") => `${t} (${H(e)}${n})`, pe = (e) => ue(e, Qe);
function We(e, t = (0, import_chunk_210k8f6q.XE)()) {
  if (!e.includes("\x1B]8;")) return e;
  let n = [], r = (a) => {
    if (t || e.slice(a.openEnd, a.closeStart) !== a.href) n.push(a);
  }, i = null;
  for (let a of e.matchAll(Ge)) {
    let f = a.index + a[0].length;
    if (i !== null) r({ href: i.href, openEnd: i.openEnd, closeStart: a.index, closeEnd: f }), i = null;
    let m = a[1] ?? "";
    if (m !== "") i = { href: m, openEnd: f };
  }
  if (i !== null) r({ href: i.href, openEnd: i.openEnd, closeStart: e.length, closeEnd: e.length });
  let o = "", l = 0, u = 0, p = false;
  for (let a of n) {
    let f = e.lastIndexOf("\x1B]8;", a.openEnd - 1), m = ae((0, import_chunk_wbk1hf21.Dr)(e.slice(0, f))), _ = u;
    u = a.closeStart;
    let h = (0, import_chunk_r8478wtb.rOs)(a.href), c = p;
    if (p = h, !h) {
      let T = (0, import_chunk_wbk1hf21.Dr)(e.slice(_, f)), E = T.includes(import_chunk_xcgcdx61.Wh), d = c && ae(T) === "";
      if (!E && !m.endsWith(import_chunk_xcgcdx61.Wh) && !d) continue;
    } else if (!m.endsWith(import_chunk_xcgcdx61.Wh)) continue;
    if (h) {
      let T = e.slice(a.openEnd, a.closeStart), E = (0, import_chunk_wbk1hf21.Dr)(T).startsWith(`${import_chunk_xcgcdx61.Wh} `) ? T.indexOf(`${import_chunk_xcgcdx61.Wh} `) : -1;
      if (E !== -1) o += e.slice(l, a.openEnd), o += T.slice(0, E), o += T.slice(E + import_chunk_xcgcdx61.Wh.length + 1), l = a.closeStart;
      else {
        let d = e.slice(l, f), k = `${import_chunk_xcgcdx61.Wh} `;
        if (d.endsWith(k)) {
          let w = d.slice(0, -k.length);
          if (ae((0, import_chunk_wbk1hf21.Dr)(o + w)).endsWith(import_chunk_xcgcdx61.Wh)) o += w, l = f;
        }
      }
      continue;
    }
    let g = pe(a.href), b = a.closeEnd;
    if (e.startsWith(g, b)) continue;
    o += e.slice(l, b) + g, l = b;
  }
  return o + e.slice(l);
}
function m7n(e, t, n) {
  let r = n();
  if (!r.includes("\x1B]8;")) return r;
  let i = We(r, t);
  if (!r.includes(import_chunk_xcgcdx61.Wh) && i === r) return r;
  let o = qe(e ?? []);
  if (o.length === 0) return i;
  try {
    for (let l of o) Object.assign(l, { defanged: true });
    return We(n(), t);
  } finally {
    for (let l of o) Reflect.deleteProperty(l, "defanged");
  }
}
function qe(e) {
  return e.flatMap((t) => {
    if (t.type === "codespan") return !("defanged" in t && t.defanged === true) && et.test(t.text) ? [t] : [];
    return "tokens" in t && Array.isArray(t.tokens) ? qe(t.tokens) : [];
  });
}
class Xe {
  #e = false;
  get configured() {
    return this.#e;
  }
  set() {
    this.#e = true;
  }
  reset() {
    this.#e = false, import_chunk_sjqze7qg._Se.defaults = new import_chunk_sjqze7qg.c5e().defaults;
  }
}
var Be = (0, import_chunk_t57w17k7.de)(new Xe(), (e) => e.reset());
class ze {
  #e = new import_chunk_1frjyv5h.Uf({ max: 200, ttl: 3e4 });
  get(e) {
    return this.#e.get(e);
  }
  record(e, t) {
    this.#e.set(e, t);
  }
}
var Or = new import_chunk_2904xtvq.j(() => new ze()), He = import_chunk_sjqze7qg.nDe.prototype.table, Kt = import_chunk_sjqze7qg.nDe.prototype.blockquote, Gt = import_chunk_sjqze7qg.nDe.prototype.list, Qt = import_chunk_sjqze7qg.nDe.prototype.emStrong, fe = String.raw`[\p{sc=Han}\p{sc=Hangul}\u3001-\u31ff\uff01-\uffe6]`, qt = String.raw`(?:${fe}\*{2,3}[^\s*]|[^\s*]\*{2,3}${fe})`, Ze = new RegExp(`^${qt}`, "u"), Xt = String.raw((0, import_chunk_w1d7ygsk.jE)(["(?![.:!?][!-~])[\\p{Term}\\p{Pe}\\p{Pf}\u30FB]"])`(?![.:!?][!-~])[\p{Term}\p{Pe}\p{Pf}\u30FB]`), zt = String.raw((0, import_chunk_w1d7ygsk.jE)(["[(\uFF08](?![^*]*[)\uFF09]\\*)"])`[(\uFF08](?![^*]*[)\uFF09]\*)`), Zt = new RegExp(String.raw`^\*+(?:["']?(?:\s|$|${Xt})|${zt})`, "u"), Vt = new RegExp(fe, "u"), Jt = new RegExp("\\p{Ps}", "u"), ge = { tokenizer: { del(e) {
  return e.startsWith("~~") ? false : void 0;
}, blockquote(e) {
  return this.rules.other.blockquoteStart.test(e) ? G.lexLevel(this.lexer, () => Kt.call(this, e)) : void 0;
}, list(e) {
  return this.rules.block.list.test(e) ? G.lexLevel(this.lexer, () => Gt.call(this, e)) : void 0;
}, emStrong(e, t, n = "") {
  if (!this.rules.inline.emphasisOpener.test(e)) return;
  let r = Ze.test(n + e.slice(0, 5)) && !Zt.test(e);
  return G.lexLevel(this.lexer, () => Qt.call(this, e, t, r ? "" : n, /^\*{2,3}(?!\*)/.test(e) ? Yt : void 0));
}, paragraph(e) {
  let t = Ue(this, e);
  return t ? { type: "paragraph", ...t } : false;
}, text(e) {
  let t = Ue(this, e);
  return t ? { type: "text", ...t } : false;
}, def() {
  return;
}, lheading(e) {
  return (ee.isHeld() ? Y.test(e) : ye.test(e)) ? false : void 0;
}, table(e) {
  let t = this.rules.block.table.exec(e);
  if (!t) return;
  let n = t[0], r = n.split(`
`).map(Ln), i = r.join(`
`), o = i === n ? He.call(this, e) : He.call(this, i + e.slice(n.length));
  if (o) {
    if (xn(r, o.header.length)) return;
    if (i !== n) o.raw = n;
  }
  return o;
} } };
function Yt(e, t, n) {
  let r = String.fromCodePoint(e);
  return (t === 2 || t === 3) && !Jt.test(r) && Vt.test(r + String.fromCodePoint(n));
}
var en = { '"': '"', "'": "'", ")": "(", "]": "[", "}": "{", ">": "<" }, tn = /^\\.[\p{L}\p{N}\\*_`~]/u, nn = /[\p{L}\p{N}].$/u, rn = { extensions: [{ name: "wrappedBackslash", level: "inline", tokenizer(e, t) {
  let n = e[1];
  if (e[0] !== "\\" || n === void 0 || this.lexer.state.inLink) return;
  let r = en[n], i = t.at(-1);
  if (r === void 0 || i?.type !== "text" || !i.raw.endsWith(r) || nn.test(i.raw) || tn.test(e)) return;
  let o = t.at(-2);
  if (i.raw === r && o !== void 0 && o.type !== "br" && !(o.type === "escape" && o.text === o.raw)) return;
  let l = `\\${n}`;
  return { type: "escape", raw: l, text: l };
} }] }, sn = /^\\[._\-[({$@#~!%+*]+(?=[\p{L}\p{N}\\])/u, on = /\\[^\s\\]+(?: [^\s\\]+){0,2}$/, ln = /^\\[^\s\\]+\\[\p{L}\p{N}]/u, an = /[\p{L}\p{N}]$/u, cn = /[\s("'[](?:[a-z]:|\.\.?|~|%\w+%|\$env:\w+|\$HOME)\\[._]$/i, un = { extensions: [{ name: "windowsPath", level: "inline", tokenizer(e, t) {
  let n = sn.exec(e)?.[0], r = t.at(-1);
  if (n === void 0 || r?.type !== "text" || this.lexer.state.inLink) return;
  let i = t.length === 1 ? " " : "";
  if (!on.test(r.raw) && !(ln.test(e) && an.test(r.raw)) && !cn.test(i + r.raw + n.slice(0, 2))) return;
  return { type: "text", raw: n, text: n, escaped: this.lexer.state.inRawBlock };
} }] };
function Ue(e, t) {
  if (!G.isAtMaxNesting(e.lexer) || !(e.rules.block.list.test(t) || e.rules.other.blockquoteStart.test(t))) return;
  let n = Ne(t);
  return { raw: t, text: n, tokens: e.lexer.inline(n) };
}
var pn = /^(?: {0,3}(?:\+|- +\*[\s/]|-(?! \S| {3}\S))| \*)/, fn = /^ +[-*](?![^]*\n {4,}(?:```|~~~))/;
function Hwn() {
  if (Be.configured) return;
  Be.set(), import_chunk_sjqze7qg._Se.use(ge, rn, un);
}
var Ve = String.raw`(?<=")(?=\*+")|(?<=')(?=\*+')`, Je = String.raw`(?<=[\w/\\.)\]*])|(?=\*+(?:[\s/\\.,;:)\]}|]|$))|${Ve}`, dn = String.raw`(?<=^|[\s/\\([{])|(?=\*+(?:[\w/\\]|\.\w))|${Ve}`, gn = new RegExp(`^[^](?:${Je})`), hn = new RegExp(`(?<!\\*)(?:${Je})(?:${dn})\\*+`, "g"), $ya = new import_chunk_sjqze7qg.c5e(ge, { tokenizer: { emStrong(e, t, n = "") {
  if (!e.startsWith("*") || gn.test((n || " ") + e) && !Ze.test(n + e.slice(0, 5))) return;
  return ge.tokenizer?.emStrong?.call(this, e, t.replace(hn, (r) => "+".repeat(r.length)), n);
}, table() {
  return;
}, list(e) {
  return pn.test(e) || this.lexer.state.top && fn.test(e) ? void 0 : false;
}, blockquote() {
  return;
}, hr() {
  return;
}, lheading() {
  return;
}, code(e) {
  let t = this.rules.block.code.exec(e)?.[0];
  if (t === void 0) return;
  let n = t.indexOf(`
`, t.trimEnd().length), r = n === -1 ? t : t.slice(0, n);
  return { type: "code", raw: r, text: r, codeBlockStyle: "indented" };
}, link() {
  return;
}, autolink() {
  return;
}, url() {
  return;
}, escape() {
  return;
}, br() {
  return;
} } });
function w9t(e, t, n = null) {
  Hwn();
  let { tokens: r, isWindowed: i } = b9t(import_chunk_sjqze7qg._Se, (0, import_chunk_bzyb60p0.xfe)(e)), o = !i && (0, import_chunk_210k8f6q.XE)();
  return uBo(r).map((l) => F2(l, t, { listDepth: 0, orderedListNumber: null, parent: null, highlight: n, linkCap: o, windowed: i })).join("").trim();
}
var mn = /\s/, Tn = /&(?:nbsp|#0{0,4}160|#[xX]0{0,4}[aA]0);/g, R2s = 32;
function Dwn(e) {
  if (!e.endsWith(`
`)) return false;
  for (let t = e.length - 2; t >= 0; t--) {
    let n = e[t];
    if (n === `
`) return true;
    if (!mn.test(n)) return false;
  }
  return false;
}
function F2(e, t, n) {
  let r = En(e, t, n);
  return n.windowed && jt.test(r) ? r.replace(Ge, "").replace(vt, "").replace(Ft, "") : r;
}
function En(e, t, n) {
  let { listDepth: r = 0, orderedListNumber: i = null, parent: o = null, highlight: l = null, glueProse: u = false, screenReader: p = false, listIndent: a = "", promptMode: f = false, windowed: m, quotesAround: _ = 0 } = n, h = !m && (n.linkCap ?? (0, import_chunk_210k8f6q.XE)());
  switch (e.type) {
    case "blockquote":
      return De(e.tokens ?? [], _, (c, g) => F2(c, t, { listDepth: 0, orderedListNumber: null, parent: null, highlight: l, glueProse: false, linkCap: h, windowed: m, screenReader: p, promptMode: f, quotesAround: g }));
    case "code": {
      let c = e.lang ?? "";
      if (!c && e.codeBlockStyle !== "indented") return e.text.replace(/\S(?:.*\S)?/g, (0, import_chunk_nn296t4g.ls)("permission", t)) + y;
      let g = c.match(/^[\w.+#-]+/)?.[0] ?? "", b = l && c && l.supportsLanguage(c) ? c : l && g && l.supportsLanguage(g) ? g : "plaintext", T = c && !l?.supportsLanguage(c) ? import_chunk_d57v19zt.Re.dim(c) + y : "";
      if (!l) return T + e.text + y;
      return T + l.highlight(e.text, { language: b, theme: t, fence: e }) + y;
    }
    case "codespan": {
      let c = (0, import_chunk_nn296t4g.ls)("permission", t)(e.text);
      if (!(f || o?.type === "link" || "defanged" in e && e.defanged === true || "afterStyle" in e && e.afterStyle === true) && et.test(e.text) && URL.canParse(e.text) && (h || !m && (0, import_chunk_210k8f6q.WZn)(e.text))) return (0, import_chunk_tqcvacgp.YE)(e.text, c, { themeName: t, supportsHyperlinks: true });
      return c;
    }
    case "em":
      return import_chunk_d57v19zt.Re.italic((e.tokens ?? []).map((c) => F2(c, t, { listDepth: 0, orderedListNumber: null, parent: o, highlight: l, glueProse: u, linkCap: h, windowed: m, promptMode: f })).join(""));
    case "strong":
      return import_chunk_d57v19zt.Re.bold((e.tokens ?? []).map((c) => F2(c, t, { listDepth: 0, orderedListNumber: null, parent: o, highlight: l, glueProse: u, linkCap: h, windowed: m, promptMode: f })).join(""));
    case "del": {
      let c = (e.tokens ?? []).map((g) => F2(g, t, { listDepth: 0, orderedListNumber: null, parent: o, highlight: l, glueProse: u, linkCap: h, windowed: m, promptMode: f })).join("");
      return UWr() && import_chunk_d57v19zt.Re.level > 0 ? import_chunk_d57v19zt.Re.strikethrough(c) : `~~${c}~~`;
    }
    case "heading": {
      let c = () => (e.tokens ?? []).map((b) => F2(b, t, { listDepth: 0, orderedListNumber: null, parent: null, highlight: l, glueProse: false, linkCap: h, windowed: m, promptMode: f })).join("");
      return (e.depth === 1 ? import_chunk_d57v19zt.Re.bold.italic.underline : import_chunk_d57v19zt.Re.bold)(m7n(e.tokens, h, c)) + y + y;
    }
    case "hr":
      return "---" + y;
    case "image": {
      if (!e.text && !e.title) return $e(e.href, V(e));
      let c = e.title ? ` "${e.title}"` : "", g = ue(e.href, V(e), c);
      return e.text ? `${e.text}${g}` : g.replace(" (", "(");
    }
    case "link": {
      let c = e.title ? ` ("${e.title}")` : "";
      if (/^mailto:/i.test(e.href)) {
        let A = e.href.replace(/^mailto:/i, ""), q = V(e);
        return (e.text && e.text !== H(A) ? `${e.text}${ue(A, q)}` : $e(A, q)) + c;
      }
      let g = h ? je(e.href) : null, b = "defanged" in e && e.defanged === true, T = g !== null && !b, E = V(e), d = T ? g : H(g ?? e.href), k = !m && !b && (0, import_chunk_210k8f6q.WZn)(d) && je(e.href) !== null, w = (e.tokens ?? []).map((A) => F2(A, t, { listDepth: 0, orderedListNumber: null, parent: e, highlight: l, glueProse: false, linkCap: h, windowed: m, promptMode: f })).join(""), L = (0, import_chunk_wbk1hf21.Dr)(w), S = (0, import_chunk_r8478wtb.rOs)(e.href), R = Boolean(L && L !== e.href), P = (A) => A.replace(Ke, "").startsWith(import_chunk_xcgcdx61.Wh), x = P(L) || P(e.text ?? ""), Q = L.includes(import_chunk_xcgcdx61.Wh) || (e.text ?? "").includes(import_chunk_xcgcdx61.Wh);
      if (S && R) {
        let A = Array.from(L).filter((rt) => {
          let X = rt.codePointAt(0) ?? 0;
          if (X === 8205 || X >= 65024 && X <= 65039) return true;
          return !(0, import_chunk_r8478wtb.KN)(X);
        }).join(""), q = x ? A : (0, import_chunk_xcgcdx61.hZi)(A);
        return (0, import_chunk_tqcvacgp.YE)(d, q, { themeName: t, supportsHyperlinks: T, shownUrlStart: E, mayWriteHyperlink: k }) + (T && e.title ? pe(d) : "") + c;
      }
      let C = !R || (0, import_chunk_tqcvacgp.w8s)(d, L), U = T && C ? E : "", v = U === "" ? w : H(L), M = R ? v : T ? H(e.href) : d, F = (0, import_chunk_tqcvacgp.YE)(d, M, { themeName: t, supportsHyperlinks: T, shownUrlStart: E, mayWriteHyperlink: k }), nt = !S && Q || Boolean(e.title);
      if (T && R && nt) return U + F + pe(d) + c;
      return U + (S ? (0, import_chunk_xcgcdx61.hZi)(F) : F) + c;
    }
    case "list":
      return e.items.map((c, g) => F2(c, t, { listDepth: r, orderedListNumber: e.ordered ? e.start + g : null, parent: e, highlight: l, glueProse: false, linkCap: h, windowed: m, screenReader: p, listIndent: a, promptMode: f, quotesAround: _ })).join("");
    case "list_item": {
      let g = (f && i !== null ? /^ *(\d+[.)])/.exec(e.raw)?.[1] : void 0) ?? P2s(r, i !== null && o?.type === "list" ? { number: i, ...x2s(o) } : null), b = a + (0, import_chunk_7cfjrnwy.xd)(" ", (0, import_chunk_mgh1y10w.oe)(g) + 1), T = (0, import_chunk_7cfjrnwy.xd)(" ", Math.min(b.length, R2s)), E = e.tokens ? fBo(e) : e, d = E.tokens ?? [], k = d.findIndex((x) => x.type !== "space"), w = k === -1 ? [] : d.slice(k), L = w[0], S = L !== void 0 && (L.type === "code" || L.type === "blockquote" || L.type === "hr" || L.type === "table" || L.type === "list"), R = !S, P = w.map((x) => {
        let Q = x.type === "blockquote" ? Lwn(x, l) : void 0, C = F2(Q ?? x, t, { listDepth: r + 1, orderedListNumber: i, parent: E, highlight: l, glueProse: false, linkCap: h, windowed: m, screenReader: p, listIndent: T, promptMode: f, quotesAround: _ });
        if (x.type === "code" && C === y) return "";
        if (x.type === "code" || x.type === "blockquote" || x.type === "hr" || x.type === "table" || x.type === "list" || x.type === "space") return x.type === "blockquote" && Q === void 0 || x.type === "hr" || x.type === "table" ? C.replace(/^\n+/, "") : C;
        let U = R ? `${a}${g} ` : b;
        R = false;
        let v = C.split(y).map((M, F) => F === 0 ? U + M : M === "" ? M : b + M).join(y);
        return x.type === "html" && !v.endsWith(y) ? v + y : v;
      }).join("");
      return R || S ? `${a}${g}${y}${P}` : P;
    }
    case "paragraph":
      return m7n(e.tokens, h, () => (e.tokens ?? []).map((c) => F2(c, t, { listDepth: 0, orderedListNumber: null, parent: null, highlight: l, glueProse: false, linkCap: h, windowed: m, promptMode: f })).join("")) + y;
    case "space":
      return y;
    case "br":
      return y;
    case "text": {
      if (o?.type === "link") return e.text;
      let c = !f && e.escaped === false ? e.text.replace(Tn, " ") : e.text;
      if (o?.type === "list_item") {
        let b = e.tokens ? m7n(e.tokens, h, () => (e.tokens ?? []).map((d) => F2(d, t, { listDepth: r, orderedListNumber: i, parent: e, highlight: l, glueProse: true, linkCap: h, windowed: m, promptMode: f })).join("")) : Fe(ve(c, t, h, o, f)), T = o.tokens?.[0] === e;
        return `${o.task && T ? `[${o.checked ? "x" : " "}] ` : ""}${b}${y}`;
      }
      let g = ve(c, t, h, o, f);
      return u ? Fe(g) : g;
    }
    case "table": {
      let g = function(d) {
        return m7n(d, h, () => d?.map((k) => F2(k, t, { listDepth: 0, orderedListNumber: null, parent: null, highlight: l, glueProse: false, linkCap: h, windowed: m, promptMode: f })).join("") ?? "");
      }, b = function(d) {
        return (0, import_chunk_wbk1hf21.Dr)(g(d));
      }, c = e;
      if (p) return O2s(c.header.map((d) => b(d.tokens)), c.rows.map((d) => d.map((k) => b(k.tokens)))) + y + y;
      let T = c.header.map((d, k) => {
        let w = (0, import_chunk_mgh1y10w.oe)(b(d.tokens));
        for (let L of c.rows) {
          let S = (0, import_chunk_mgh1y10w.oe)(b(L[k]?.tokens));
          w = Math.max(w, S);
        }
        return Math.max(w, 3);
      }), E = "| ";
      return c.header.forEach((d, k) => {
        let w = g(d.tokens), L = b(d.tokens), S = T[k], R = c.align?.[k];
        E += pBo(w, (0, import_chunk_mgh1y10w.oe)(L), S, R) + " | ";
      }), E = E.trimEnd() + y, E += "|", T.forEach((d) => {
        let k = "-".repeat(d + 2);
        E += k + "|";
      }), E += y, c.rows.forEach((d) => {
        E += "| ", d.forEach((k, w) => {
          let L = g(k.tokens), S = b(k.tokens), R = T[w], P = c.align?.[w];
          E += pBo(L, (0, import_chunk_mgh1y10w.oe)(S), R, P) + " | ";
        }), E = E.trimEnd() + y;
      }), E + y;
    }
    case "escape":
      return e.text;
    case "html":
      return e.text;
    case "def":
      return "";
  }
  return e.raw;
}
var bn = /(^|[^\w./-])([A-Za-z0-9][\w-]*\/[A-Za-z0-9][\w.-]*)#(\d+)\b/g, yn = /* @__PURE__ */ new Set(["gitlab.com", "bitbucket.org", "codeberg.org", "gitea.com", "git.sr.ht", "dev.azure.com"]), Ye = /^[a-z][a-z0-9+.-]*:/i, et = /^https?:\/\/[\w\-.~:/?#[\]@!$&'()*+,;=%]+$/i;
function kn(e, t) {
  let n = Ye.exec(e)?.[0];
  if (n !== void 0) return !t.has(n.slice(0, -1).toLowerCase());
  let r = e.split(/[/?#]/, 1)[0] ?? "";
  return !/^[A-Za-z0-9._~-]*$/.test(r);
}
function BWr(e, t) {
  for (let n of e) {
    if (n.type === "codespan" || n.type === "link" && kn(n.href, t)) Object.assign(n, { defanged: true });
    if (n.type === "table") {
      let r = n;
      for (let i of [...r.header, ...r.rows.flat()]) BWr(i.tokens, t);
    } else if (n.type === "list") for (let r of n.items) BWr(r.tokens, t);
    else if ("tokens" in n && Array.isArray(n.tokens)) BWr(n.tokens, t);
  }
}
function je(e) {
  let t = (0, import_chunk_zdtzd1bp.oso)(e);
  if (t === null || import_chunk_7cfjrnwy.Wz.test(t) || Ke.test(t) || t !== t.trimEnd()) return null;
  if (Ye.test(t)) return t;
  let n = (0, import_chunk_4s4nxvxt.kTr)(t), r = n.some((i) => /^file:/i.test((0, import_chunk_4s4nxvxt.yji)(i)));
  return (0, import_chunk_4s4nxvxt.zws)(t, n) || r ? null : t;
}
function Ln(e) {
  if (!e.includes("`") || !e.includes("|")) return e;
  let t = [], n = [];
  for (let p = 0; p < e.length; ) {
    if (e[p] !== "`") {
      p++;
      continue;
    }
    let a = 0;
    while (e[p + a] === "`") a++;
    t.push(p), n.push(a), p += a;
  }
  let r = Array(t.length).fill(-1), i = /* @__PURE__ */ new Map();
  for (let p = t.length - 1; p >= 0; p--) {
    let a = i.get(n[p]);
    if (a !== void 0) r[p] = a;
    i.set(n[p], p);
  }
  let o = "", l = 0, u = 0;
  while (l < e.length) {
    if (e[l] !== "`") {
      o += e[l++];
      continue;
    }
    let p = n[u], a = e.slice(l, l + p), f = r[u];
    if (f === -1) {
      o += a, l += p, u++;
      continue;
    }
    let m = t[f];
    o += a;
    let _ = 0;
    for (let h = l + p; h < m; h++) {
      let c = e[h];
      if (c === "\\") {
        _++, o += c;
        continue;
      }
      if (c === "|") o += _ % 2 === 0 ? "\\|" : "|";
      else o += c;
      _ = 0;
    }
    o += a, l = m + p, u = f + 1;
  }
  return o;
}
function xn(e, t) {
  for (let n = 2; n < e.length; n++) {
    let r = wn(e[n]);
    for (let i = t; i < r.length; i++) if (r[i].trim()) return true;
  }
  return false;
}
function wn(e) {
  let n = e.replace(/\|/g, (r, i, o) => {
    let l = false, u = i;
    while (--u >= 0 && o[u] === "\\") l = !l;
    return l ? "|" : " |";
  }).split(/ \|/);
  if (!n[0]?.trim()) n.shift();
  if (n.length > 0 && !n.at(-1)?.trim()) n.pop();
  return n;
}
function ve(e, t, n, r, i) {
  if (i) return e;
  return Sn(Rn(e, t, n), t, n, r);
}
function Sn(e, t, n = (0, import_chunk_210k8f6q.XE)(), r) {
  return e;
}
function Rn(e, t, n = (0, import_chunk_210k8f6q.XE)()) {
  if (!n) return e;
  if (!e.includes("#")) return e;
  let r = (0, import_chunk_3hr8g93j.O_n)(), i = r !== null && (0, import_chunk_1m0ck3v8.AI)(r) === "gitlab";
  if (!i && r !== null && yn.has((0, import_chunk_43nz5n02.Qqt)(r))) return e;
  let o = r ?? import_chunk_43nz5n02.Vr, l = i ? "/-/issues/" : "/issues/";
  return e.replace(bn, (u, p, a, f) => p + (0, import_chunk_tqcvacgp.YE)(`https://${o}/${a}${l}${f}`, `${a}#${f}`, { themeName: t, supportsHyperlinks: n }));
}
function _n(e) {
  let t = "";
  while (e > 0) e--, t = String.fromCharCode(97 + e % 26) + t, e = Math.floor(e / 26);
  return t;
}
var An = [[1e3, "m"], [900, "cm"], [500, "d"], [400, "cd"], [100, "c"], [90, "xc"], [50, "l"], [40, "xl"], [10, "x"], [9, "ix"], [5, "v"], [4, "iv"], [1, "i"]];
function Nn(e) {
  let t = "";
  for (let [n, r] of An) while (e >= n) t += r, e -= n;
  return t;
}
function Fe(e) {
  return e.replace(/ (\d{1,9}[.)])(?!\w)/g, "\xA0$1");
}
function x2s(e) {
  let t = e.start === "" ? 1 : e.start;
  return { first: t, last: t + e.items.length - 1 };
}
function fBo(e) {
  let t = e.tokens.map((n) => {
    if (n.type !== "list" || !n.ordered) return n;
    let r = [];
    for (let o of n.items) {
      let l = /^ *(\d{1,9}[.)])/.exec(o.raw)?.[1];
      if (o.tokens.length > 0 || l === void 0) return n;
      r.push(l);
    }
    let i = r.join(`
`);
    return { type: "text", raw: i, text: i };
  });
  return t.every((n, r) => n === e.tokens[r]) ? e : { ...e, tokens: t };
}
function tt(e, t) {
  switch (e.type) {
    case "space":
      return true;
    case "code":
      return e.text === "" && (!e.lang || t?.supportsLanguage(e.lang) === true);
    case "heading":
      return e.text === "";
    case "blockquote":
      return (e.tokens ?? []).every((n) => tt(n, t));
    default:
      return false;
  }
}
function Lwn(e, t) {
  let n = e.tokens.findIndex((o) => !tt(o, t)), r = e.tokens[n], i = r?.type === "blockquote" ? Lwn(r, t) : r?.type === "code" ? r : void 0;
  return i && { ...e, tokens: [i, ...e.tokens.slice(n + 1)] };
}
function P2s(e, t) {
  return t === null ? "-" : `${In(e + 1, t)}.`;
}
function In(e, { number: t, first: n, last: r }) {
  switch (e) {
    case 2:
      return n >= 1 ? _n(t) : t.toString();
    case 3:
      return n >= 1 && r <= 3999 ? Nn(t) : t.toString();
    default:
      return t.toString();
  }
}
function pBo(e, t, n, r) {
  let i = Math.max(0, n - t);
  if (r === "center") {
    let o = Math.floor(i / 2);
    return " ".repeat(o) + e + (0, import_chunk_7cfjrnwy.xd)(" ", i - o);
  }
  if (r === "right") return " ".repeat(i) + e;
  return e + " ".repeat(i);
}
function O2s(e, t) {
  function n(l) {
    return l.replace(/\s+/g, " ").trim();
  }
  function r(l) {
    return /[.!?\u2026]["')\]]*$/.test(l) ? l : `${l}.`;
  }
  function i(l) {
    return l.map((u, p) => {
      let a = n(e[p] ?? ""), f = n(u);
      if (!a && !f) return null;
      return r(a ? `${a}: ${f}` : f);
    }).filter((u) => u !== null).join(" ");
  }
  return (t.length > 0 ? t.map(i) : [e.map(n).filter(Boolean).map(r).join(" ")]).filter((l) => l.length > 0).join(y);
}
