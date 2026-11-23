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
var chunk_5efem4ny_exports = {};
__export(chunk_5efem4ny_exports, {
  default: () => as,
  register: () => vR
});
module.exports = __toCommonJS(chunk_5efem4ny_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var as = {};
(0, import_chunk_w1d7ygsk.jr)(as, { default: () => as, register: () => vR });
var M = (e) => typeof e === "object" && e !== null && !Array.isArray(e);
function fs(e, t) {
  if (t === "[]") return Array.isArray(e) ? e : [];
  if (t === "*") return M(e) ? Object.values(e) : [];
  let o = Array.isArray(e) && e[Number(t)] !== void 0, r = M(e) && e[t] !== void 0;
  return o ? [e[Number(t)]] : r ? [e[t]] : [];
}
function S(e, t = "") {
  let o = [e];
  for (let r of t.split(".").filter((s) => s !== "")) o = o.flatMap((s) => fs(s, r));
  return o;
}
function ge(e, t = "") {
  return typeof e === "string" ? e || t : S(e, "[].text").filter((r) => typeof r === "string").join(`
`) || t;
}
var is = (e) => ({ id: e.tool_use_id, tool: e.tool, input: e.input, storedResult: e.result, text: ge(e.result, e.text) });
function _t(e) {
  return (Array.isArray(e) ? e.flatMap((o) => o.toolUses) : []).flatMap((o) => o.text === void 0 || o.isError ? [] : [is(o)]);
}
var Fl = 24;
var Ul = 4;
var Bl = 24;
var Ct = 8;
var Wl = 40;
var jl = 4;
var vl = 40;
var Be = 3;
var ls = 10;
var k = { line: { label: "line chart", plural: "series", defaultCount: Ct, maxCount: Ct }, columns: { label: "column chart", plural: "series", defaultCount: Ul, maxCount: jl }, sparks: { label: "sparklines", plural: "series", defaultCount: Bl, maxCount: vl }, bars: { label: "bar chart", plural: "bars", singular: "bar", defaultCount: Fl, maxCount: Wl }, share: { label: "share bar", plural: "parts", singular: "part", defaultCount: Ct, maxCount: Ct } };
function jo(e, t) {
  let { plural: o, singular: r = o } = k[e];
  return `${t.toLocaleString("en-US")} ${t === 1 ? r : o}`;
}
var Xl = 40;
var us = 12;
var ds = { type: "array", items: { type: "string" } };
var Lt = { type: "object", additionalProperties: false, properties: { data: { anyOf: [{ type: "string" }, { type: "array", items: { type: "object" } }], description: "Leave it out to chart the tool result just before this call, as it is: do not type a result again. Where it holds several tables, x and y pick the one with those columns. Or the id of an earlier result, as a refusal lists them. Or the table itself, as records or as text, only for numbers no tool returned." }, x: { type: "string", description: "the column along the chart: times, or the categories of bars" }, form: { enum: ["line", "columns", "bars", "sparks", "share"], description: "if left out, a line over times and bars over names. line, columns and sparks need times in x: over names they are drawn as bars. columns stand on zero, one per day, month or other even step. sparks are a small row for each series, on one scale: for many series. bars are horizontal, one per category. share is the parts of a whole as one bar, what a pie shows: its values are summed" }, y: { ...ds, description: `the value columns. Lines share a plot where they have one unit and their largest values are within ${ls} times of each other, columns only where they stack. ${Be} plots at most, and the rest are named` }, by: { ...ds, description: "columns that split the rows into series. With combine and no by, nothing is split" }, combine: { enum: ["sum", "mean", "max", "min"], description: 'how rows that share an x, and a series, become one. "sum" also says the values add, which turns on totals and shares, and stacks columns' }, top: { type: "integer", minimum: 1, description: `how many to draw: ${k.bars.defaultCount} bars if left out and ${k.bars.maxCount} at most, ${k.line.maxCount} lines at most, ${k.sparks.defaultCount} sparks and ${k.sparks.maxCount} at most, ${k.share.maxCount} parts of a share beside one for the rest, ${k.columns.maxCount} series of columns where they stack, else ${Be}. The largest are kept, largest first, and the rest are counted` }, unit: { type: "string", description: "ms, KB, %, $: what bare numbers are in. Values that carry a unit keep it" }, zone: { enum: ["utc", "local"], description: "the zone that times are shown in, utc if left out. Times that name no zone are shown as written" }, log: { type: "boolean", description: "a log scale, for lines. Values at or below zero are counted and left out" }, marks: { type: "array", maxItems: us, items: { type: "object", additionalProperties: false, required: ["at"], properties: { at: { type: "string", description: "a time, spelled as in x" }, label: { type: "string", description: "short" } } }, description: `events on a chart over time, ${us} at most: a rule and a label each. One outside the times drawn is said instead` }, title: { type: "string", description: "short" } } };
var K = (e, t) => `${e.toLocaleString("en-US")} ${e === 1 ? t : `${t}s`}`;
function Et(e, t, o) {
  let r = e.length - t;
  return r > 0 ? [...e.slice(0, t), `and ${K(r, o)}`] : e;
}
var Zl = /[\s\u{115F}\u{1160}\u{2800}\u{3164}\u{FFA0}]+/gu;
var ql = /[\uD800-\uDBFF]$/;
var Ql = /\s*[\n\r\u{2028}\u{2029}\u0085][^]*$/u;
var ex = / +/g;
var Ho = /^[ -~]*$/;
var ox = /[\p{L}\p{N}]/u;
var sx = /[\p{C}\u{FE00}-\u{FE0F}]/gu;
var px = /[\p{Cc}\u{E0000}-\u{E007F}\u{202A}-\u{202E}\u{2066}-\u{2069}]/gu;
var mx = new RegExp("\\p{Extended_Pictographic}|\\p{Regional_Indicator}|\\u{20E3}", "u");
var ax = new RegExp("\\p{Emoji_Presentation}|\\p{Extended_Pictographic}\\u{FE0F}|\\u{20E3}", "u");
var fx = new RegExp("[" + String.raw`\u{1100}-\u{115F}\u{2329}\u{232A}\u{2630}-\u{2637}` + String.raw`\u{268A}-\u{268F}\u{2E80}-\u{303E}` + String.raw`\u{3041}-\u{A4C6}\u{A960}-\u{A97C}\u{AC00}-\u{D7A3}` + String.raw`\u{F900}-\u{FAFF}\u{FE10}-\u{FE19}\u{FE30}-\u{FE6B}` + String.raw`\u{FF01}-\u{FF60}\u{FFE0}-\u{FFE6}\u{16FE0}-\u{18DF2}` + String.raw`\u{1AFF0}-\u{1B2FB}\u{1D300}-\u{1D376}\u{1F200}-\u{1F265}` + String.raw`\u{17A4}\u{17D8}\u{261D}\u{26F9}\u{270C}\u{270D}\u{2E3A}` + String.raw`\u{2E3B}\u{1F3CB}\u{1F3CC}\u{1F574}\u{1F575}\u{1F590}` + String.raw`\u{1F93B}\u{1F946}` + String.raw`\u{20000}-\u{3FFFD}` + "]", "u");
var ix = new RegExp("[" + String.raw`\p{Mn}\p{Me}\u{1160}-\u{11FF}\u{200B}-\u{200F}` + String.raw`\u{D7B0}-\u{D7FB}` + "]", "u");
var At = "\u2026";
function ys(e, t) {
  return e.length > t ? e.slice(0, t).replace(ql, "") + At : e;
}
var dx, cx = { segment: (e) => (dx ??= new Intl.Segmenter("en")).segment(e) };
function Ce(e) {
  return Ho.test(e) ? e.split("") : Array.from(cx.segment(e), (o) => o.segment);
}
var Tx = 1.5;
var Sx = 120;
var $o = 1;
var Ox = 2;
var Cx = 2;
var Lx = 2;
var Ts = (e, t) => e.reduce((o, r) => t(r) ? o + 1 : o, 0);
var F = (e) => [...new Set(e).values()];
function z(e, t) {
  let o = [], r = [];
  for (let l of e) o.push(l), r.push(t(l));
  let s = [...new Set(r).values()], p = new Map(s.map((l, u) => [l, u])), m = r.map((l) => p.get(l) ?? 0), n = s.map(() => 0);
  for (let l of m) n[l] = (n[l] ?? 0) + 1;
  let a = [], f = 0;
  for (let l of n) a.push(f), f += l;
  let i = [...a], x = [...o];
  for (let [l, u] of o.entries()) {
    let d = m[l] ?? 0, c = i[d] ?? 0;
    x[c] = u, i[d] = c + 1;
  }
  return new Map(s.map((l, u) => {
    let d = a[u] ?? 0;
    return [l, x.slice(d, d + (n[u] ?? 0))];
  }));
}
var ne = (e) => [...Array.from({ length: e }).keys()];
function Go(e, t, o) {
  let r = [], s = o;
  for (let p of e) s += t(p), r.push({ part: p, end: s });
  return r;
}
function B(e) {
  let t = e.reduce((r, s) => r + s, 0), o = e.reduce((r, s) => r + Math.abs(s), 0);
  return Math.abs(t) > e.length * Number.EPSILON * o ? t : 0;
}
function Xo(e, t, o) {
  let r = [], s = 0;
  for (let p of e) {
    if (s += o(p), s > t) break;
    r.push(p);
  }
  return r;
}
function U(e, t) {
  let o = [], r = t.values();
  for (let s of e) {
    let p = r.next();
    if (p.done) break;
    o.push([s, p.value]);
  }
  return o;
}
function P(e) {
  if (Ho.test(e)) return e.length;
  let o = 0;
  for (let r of Ce(e)) if (ax.test(r)) o += Cx;
  else for (let p of r) if (!ix.test(p)) o += fx.test(p) ? Lx : 1;
  return o;
}
function Y(e, t) {
  if (P(e) <= t) return e;
  if (t < $o) return "";
  let r = Ce(e), s = Math.ceil((t - $o) / Ox);
  return Xo(r, s, P).join("") + At + Xo(r.toReversed(), t - $o - s, P).toReversed().join("");
}
function Ss(e) {
  let t = mx.test(e);
  return e.replace(t ? px : sx, "");
}
function re(e, t = Sx) {
  let o = ys(e, t * Tx).trim().replace(Ql, At).replace(Zl, " "), r = Ho.test(o);
  return Y((r ? o : Ce(o).map(Ss).join("")).replace(ex, " ").trim(), t);
}
function Rt(e) {
  let t = /* @__PURE__ */ new Map();
  return JSON.parse(JSON.stringify(e), (o, r) => {
    if (typeof r !== "string") return r;
    let p = t.get(r) ?? re(r);
    return t.set(r, p), p;
  });
}
var gs = (e, t) => `${At}${[...e].slice(t).join("")}`;
function kx(e, t) {
  let [o = [], ...r] = e.map((m) => [...m]), s = o.slice(0, Math.max(0, o.findIndex((m, n) => r.some((a) => a[n] !== m)))).findLastIndex((m) => !ox.test(m)) + 1, p = s > 0 && e.some((m) => P(m) > t);
  return e.map((m) => Y(p ? gs(m, s) : m, t));
}
function It(e, t, o = t) {
  let r = [""];
  for (let s of e.split(" ")) {
    let p = Y(s, o), m = `${r.at(-1)} ${p}`.trimStart();
    P(m) <= t || m === p ? r[r.length - 1] = m : r.push(p);
  }
  return r;
}
var Os = (e, t) => Object.hasOwn(e, t) ? e[t] : void 0;
var _s = (e) => ([t, o]) => {
  let r = Os(e.properties, t);
  return r ? e.errorsAt(o, r, `${e.prefix}${t}`).map((s) => `${s} (${r.description})`) : [e.prefix + re(t, Xl) + ` is not a field: those are ${e.fieldNames}`];
};
var Cs = (e) => e === null ? "null" : typeof e;
var Ls = (e) => Number.isInteger(e) ? "integer" : Cs(e);
var Es = (e) => Array.isArray(e) ? "array" : Ls(e);
function ot(e, t, o) {
  let { anyOf: r, items: s, properties: p, required: m = [] } = t;
  if (r?.some((c) => ot(e, c, o).length === 0)) return [];
  if (r) return [`${o} must be ${r.map((c) => c.type).join(" or ")}`];
  if (t.enum?.some((c) => c === e)) return [];
  if (t.enum) return [`${o} must be one of ${t.enum.join(", ")}`];
  let f = Es(e);
  if (t.type !== f) return [`${o || "the call"} must be ${t.type}, not ${f}`];
  if (typeof e === "number" && e < (t.minimum ?? -1 / 0)) return [`${o} must be at least ${t.minimum}`];
  if (Array.isArray(e) && e.length > (t.maxItems ?? 1 / 0)) return [`${o} must hold at most ${t.maxItems}`];
  if (Array.isArray(e) && s) return e.flatMap((c, g) => ot(c, s, `${o}[${g}]`));
  if (!(M(e) && p !== void 0)) return [];
  let d = o === "" ? "" : `${o}.`;
  return [...m.filter((c) => !Object.hasOwn(e, c)).map((c) => `${d}${c} is missing`), ...Object.entries(e).flatMap(_s({ properties: p, prefix: d, fieldNames: Object.keys(p).join(", "), errorsAt: ot }))];
}
var Ko = (e) => ot(e, Lt, "");
var Hx = (e) => Ko(e).length === 0;
var $x = "easel made an auto chart from this result. Chart it again only for a different chart.";
var Gx = "Not drawn. easel failed on this call. The fault is its own, and the same call will fail again.";
var Xx = "Not drawn. The session keeps no conversation for this call, and every call made here will be refused.";
var ae = "mcp__easel__chart";
var Kx = "Not drawn. This organization's policy withholds easel, and every call will be refused.";
var zx = `If a tool named ${ae} is available, call it when numbers over time or across categories would be clearer as a chart.`;
var Yx = 1e24;
var Jx = 1e-24;
var zo = 7;
var Yo = 1e3;
var bs = 86400;
var Rs = 3600;
var Is = 60;
var Ms = 1e-3;
var Ns = 1e-6;
var Qx = 2;
var Jo = 1e9;
var We = 1024;
var Vo = 1e6;
var je = 1e3;
var Zo = 1e12;
var ws = 1e-6;
var ou = 1e-3;
var ru = 1e-9;
var su = 100;
var pu = 1e15;
var ks = 4;
var nu = 4;
var fu = 60;
var iu = 6e4;
var v = (e) => ({ kind: "unread", why: e });
var Ps = (e, t) => ({ kind: "number", value: e, unit: e === 0 ? null : t });
function Le(e, t) {
  let o = Math.abs(e);
  if (!(o <= Yx)) return v("too large");
  return o > 0 && o < Jx ? v("too small") : Ps(e, t);
}
var cu = true;
var hu = false;
var rt = We * We;
var st = rt * We;
var Ou = 6;
var Cu = 30.44;
var Lu = 365.25;
var Eu = 36e5;
var Au = 6e4;
var ve = 2;
var He = 864e5;
var Ru = 2;
var Ds = 2;
var Mu = 2;
var wu = 6;
var Pu = 0.5;
var Fu = 5;
var Uu = 2;
var Fs = 5;
var Qo = 1e3;
var Wu = 2;
var er = 1;
var Us = 0;
var vu = 3;
var $u = 3;
var Gu = 7;
function Bs(e) {
  let t = /* @__PURE__ */ new Map();
  return (o) => {
    let r = t.get(o) ?? e(o);
    return t.set(o, r), r;
  };
}
var tr = Bs((e) => new Intl.DateTimeFormat("sv-SE", { timeZone: e, dateStyle: "short", timeStyle: "medium" }));
function b(e, t) {
  let o = e - Math.floor(e / Qo) * Qo;
  if (t === "UTC") {
    let f = new Date(e);
    return [f.getUTCFullYear(), f.getUTCMonth(), f.getUTCDate(), f.getUTCHours(), f.getUTCMinutes(), f.getUTCSeconds(), o];
  }
  let [r = 0, s = 1, p = 1, m = 0, n = 0, a = 0] = tr(t).format(e).split(/[- :]/, Ou).map(Number);
  return [r, s - 1, p, m, n, a, o];
}
var Ee = [{ fieldIndex: 0, typicalMs: Lu * He, counts: [1, 2, 5, 10, 20, 50, 100] }, { fieldIndex: 1, typicalMs: Cu * He, counts: [1, 3, 6] }, { fieldIndex: 2, typicalMs: He, counts: [1, 2, 4, 7, 14] }, { fieldIndex: 3, typicalMs: Eu, counts: [1, 2, 3, 6, 12] }, { fieldIndex: 4, typicalMs: Au, counts: [1, 2, 5, 10, 15, 30] }, { fieldIndex: 5, typicalMs: Qo, counts: [1, 2, 5, 10, 15, 30] }];
var Vu = true;
var qu = true;
var J = (e) => Date.UTC(e[0] ?? 0, ...e.slice(1));
function $e(e, t) {
  let o = new Date(J(b(e, t))).getUTCDay();
  return o === 0 || o === wu;
}
var rr = (e, t) => Math.floor((J(b(e, t)) / He + $u) / Gu);
var Ws = (e, t) => rr(e.at(-1) ?? 0, t) - rr(e[0] ?? 0, t) >= Mu && !e.some((o) => $e(o, t));
var js = (e) => (t) => e.untilMs > e.fromMs ? (t - e.fromMs) / (e.untilMs - e.fromMs) : Pu;
var vs = (e, t) => (o) => {
  let r = t.get(o) ?? e.periodStarts.findLastIndex((p) => p <= o), s = e.periodStarts[r] ?? e.axisSpan.fromMs;
  return (r + (o - s) / ((e.periodStarts[r + 1] ?? e.axisSpan.untilMs) - s)) / e.periodStarts.length;
};
function Mt(e) {
  return e.periodStarts.length > 0 ? vs(e, new Map(e.periodStarts.map((o, r) => [o, r]))) : js(e.axisSpan);
}
var Hs = [0, 0, 1, 0, 0, 0, 0];
var $s = (e) => (t) => e.some((o) => o >= t.fieldIndex);
var fd = (e, t) => ({ unit: Ee.findLast($s(e.map((o) => b(o, t).findLastIndex((r, s) => r !== Hs[s])))) ?? Ee[Fs], count: 1, skipsWeekends: false });
var Nt = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
var wt = (e, t) => t.zone === "UTC" ? 0 : J(b(e, t.zone)) - e;
function sr(e, t) {
  let o = J(e), r = o - wt(o - He, t), s = o - wt(r, t);
  return s + wt(s, t) === o ? s : Math.max(r, s);
}
function kt(e) {
  let { start: t, step: o } = e, { fieldIndex: r } = o.unit, s = [], p = t[r] ?? 0, m = sr(t, e);
  while (m <= e.untilMs) {
    if (m > (s.at(-1) ?? -1 / 0)) s.push(m);
    p += o.count, m = sr(t.with(r, p), e);
  }
  return s;
}
var Xs = (e) => (t) => e.has(t);
var fe = (e) => e.unit.typicalMs * e.count;
var Ks = (e, t) => ({ start: b(t.fromMs, t.zone), step: e, untilMs: t.untilMs + Ru * fe(e), zone: t.zone });
function zs(e, t, o) {
  let r = kt(Ks(t, o));
  if (!e.every(Xs(new Set(r)))) return null;
  let p = r.filter((m) => m <= o.untilMs);
  return { step: t, periodStarts: p, endMs: r[p.length] ?? o.untilMs };
}
var Ys = (e, t) => e < He ? ["UTC"] : ["UTC", t];
var Js = (e, t) => (o) => e[o.fieldIndex] !== t[o.fieldIndex];
var Vs = (e, t, o) => ({ fromMs: e, untilMs: t, zone: o });
var Zs = (e) => e.toSorted((t, o) => t - o)[Math.floor(e.length / Ds)] ?? 0;
function qs(e, t, o) {
  let r = Math.max(1, Math.round(t / e.typicalMs)), s = o && e.fieldIndex === ve && r === 1;
  return { unit: e, count: r, skipsWeekends: s };
}
function Qs(e, t, o) {
  let { zone: r } = t, s = e[0], p = e.at(-1);
  if (!(s !== void 0 && p !== void 0 && e.length >= Uu)) return null;
  let n = e.slice(1).map((x, l) => x - (e[l] ?? x)), a = Zs(n);
  if ((p - s) / a > e.length * Fu) return null;
  let i = e[n.indexOf(a)] ?? s;
  for (let x of Ys(a, r)) {
    let l = Ee.findLast(Js(b(i, x), b(i + a, x)));
    if (!l) return null;
    let u = qs(l, a, o), d = zs(e, u, Vs(s, p, x));
    if (d) return { ...d, periodStarts: d.periodStarts.filter((c) => !(u.skipsWeekends && $e(c, r))) };
  }
  return null;
}
var ep = (e) => (t, o) => t !== e[o];
function tp(e, t) {
  let o = e.dataSpan, r = b(o.fromMs, o.zone), s = r.findIndex(ep(b(o.untilMs, o.zone)));
  return { zone: o.zone, areTicks: !Vu, fieldsBefore: b(t, o.zone).slice(0, s === -1 ? r.length : s) };
}
function pt(e, t, o) {
  let { fieldIndex: r } = t.unit, s = [], p = o.fieldsBefore;
  for (let m of e) {
    let n = b(m, o.zone), [a, f, i, x, l, u] = n, d = a !== p[Us], c = r >= er && (r <= ve || d || f !== p[er] || i !== p[ve]), g = r === Us || d, T = r > ve && !(o.areTicks && c && x === 0 && l === 0 && u === 0), L = [];
    if (c) {
      let _ = r === er;
      L.push(_ ? `${Nt[f]}` : `${Nt[f]} ${i}`);
    }
    if (g) L.push(String(a));
    if (T) {
      let _ = r === Fs;
      L.push((_ ? [x, l, u] : [x, l]).map((w) => String(w).padStart(Wu, "0")).join(":"));
    }
    s.push(L.join(" ")), p = n;
  }
  return s;
}
var op = (e, t) => pt([t], e.precision, tp(e, t))[0] ?? "";
var rp = (e, t) => ({ unit: e, count: t, skipsWeekends: false });
var sp = Ee.flatMap((e) => e.counts.map((t) => rp(e, t))).toSorted((e, t) => fe(e) - fe(t));
function pp(e, t) {
  return t.unit.fieldIndex === ve ? e : e - e % t.count;
}
var mp = (e, t) => ({ zone: e.zone, areTicks: qu, fieldsBefore: t });
var np = (e, t, o) => ({ start: [...e.slice(0, t.unit.fieldIndex), pp(e[t.unit.fieldIndex], t)], step: t, untilMs: o.untilMs, zone: o.zone });
var ap = (e, t) => (o, r) => {
  let s = e[r] ?? "", p = t.columnOf(o);
  return { text: s, column: p, start: Math.min(Math.max(0, p - (t.areCentred ? Math.floor((s.length - 1) / Ds) : 0)), t.columns - s.length) };
};
var fp = (e, t) => (o, r) => {
  let s = o.map(ap(pt(o, r, e), t));
  return s.every((m, n) => m.start >= 0 && m.start + m.text.length + vu <= (s[n + 1]?.start ?? 1 / 0)) ? s : [];
};
function Dd(e, t, o) {
  let r = b(e.fromMs, e.zone), s = fp(mp(e, r), o);
  for (let p of sp) {
    if (fe(p) < fe(t) || (e.untilMs - e.fromMs) / fe(p) > o.columns) continue;
    let n = s(kt(np(r, p, e)).filter((f) => f >= e.fromMs && !(t.skipsWeekends && p.unit.fieldIndex === ve && $e(f, e.zone))), p);
    if (n.length > 0) return n;
  }
  return s([e.fromMs], t);
}
var pr = `(?:${Nt.join("|")})[a-z]*`;
var ip = new RegExp(String.raw`^(?:\d{1,2}([./-])\d{1,2}\1\d{4}\b|\d{1,2}/\d{1,2}/\d{2}\b|` + String.raw`\d{1,2}[./]\d{4}\b|${pr} \d{1,2}$|` + String.raw`\d{1,2} ${pr}$)`);
var mr = (e) => ip.test(String(e ?? "").trim());
var Gd = String.raw`(?<hour>\d\d):(?<minute>\d\d)` + String.raw`(?::(?<second>\d\d)(?<fraction>\.\d+)?)?`;
var Xd = String.raw`\s?(?<zone>Z|UTC|GMT|[-+]\d\d(?::?\d\d)?)` + String.raw`(?: UTC)?`;
var lp = /^(?:--?|null|none|nan|n\/a|na|\\n|[-+]inf)?$/i;
var zd = new RegExp(String.raw`^(?:(?<days>\d+)d ?)?(?:(?<hours>\d+)h ?)?` + String.raw`(?:(?<minutes>\d+)m ?)?(?:(?<seconds>[\d.]+)s)?$`);
var Jd = /^[\d.E+]+$/;
var Vd = /^(?<year>\d{4})-?W(?<week>\d\d)(?:-?(?<weekday>[1-7]))?$/;
var qd = /^(?<sign>[-+])(?<hours>\d\d):?(?<minutes>\d\d)?$/;
var xp = { days: bs, hours: Rs, minutes: Is, seconds: 1 };
var up = new Map(Object.entries({ k: je, K: je, M: Vo, B: Jo, T: Zo }));
var nr = st * We;
var dp = [["", { k: je, K: je, M: Vo, G: Jo, T: Zo, short: 1, none: 1 }], ["B", { B: 1, kB: je, KB: je, MB: Vo, GB: Jo, TB: Zo, PB: pu }], ["B", { Ki: We, Mi: rt, Gi: st, Ti: nr }], ["B", { KiB: We, MiB: rt, GiB: st, TiB: nr }], ["B", { bytes: 1, decbytes: 1 }], ["s", { ns: ru, us: ws, \u00B5s: ws, ms: ou, s: 1 }], ["s", { min: Is, h: Rs, d: bs }], ["%", { "%": 1, percent: 1, percentunit: su }]];
var Pt = new Map(dp.flatMap(([e, t]) => Object.entries(t).map(([o, r]) => [o, { unit: e, size: r }])));
function cp(e, t) {
  let { unit: o, size: r } = Pt.get(t) ?? { unit: t, size: 1 };
  return Le(e * r, o);
}
function ar(e, t, o) {
  return o !== void 0 ? Le(e * (up.get(t) ?? 1), o) : cp(e, t);
}
function yp(e) {
  let { sign: t, currency: o, suffix: r = "" } = e, { integer: s = "0", fraction: p = "", exponent: m = "0" } = e, n = Number(`${s.replaceAll(",", "")}${p}e${m}`);
  return ar(t === "" || t === "+" ? n : -n, r, o);
}
var ac = String.raw`(?=\.?\d)(?<integer>\d{1,3}(?:,\d{3})+|\d+)?` + String.raw`(?<fraction>\.\d+)?`;
var fc = String.raw`(?:e(?<exponent>[-+]?\d+))?`;
var ic = String.raw((0, import_chunk_w1d7ygsk.jE)(["^(?<sign>[-+\u2212(]?)(?<currency>[$\u20AC\xA3\xA5])?"])`^(?<sign>[-+\u2212(]?)(?<currency>[$\u20AC\u00A3\u00A5])?`);
var lc = String.raw`(?<space>\s?)` + String.raw((0, import_chunk_w1d7ygsk.jE)(["(?<suffix>[a-z\xB5%]*(?:\\/[a-z]+)?)\\)?$"])`(?<suffix>[a-z\u00B5%]*(?:\/[a-z]+)?)\)?$`);
var fr = 'Times are read as ISO 8601 (2026-09-07, 2026-W37), epoch numbers, "7 Sep 2026" or "Sep 7, 2026"';
var Tp = new RegExp(ic + ac + fc + lc, "i");
function Ae(e, t = false) {
  if (typeof e === "number") return Le(e, "");
  let r = String(e ?? "").trim();
  if (lp.test(r)) return { kind: "empty", why: "empty" };
  let p = zd.exec(r)?.groups ?? {}, m = Object.entries(xp).filter(([x]) => p[x] !== void 0).map(([x, l]) => Number(p[x]) * l);
  if (m.length >= Qx) return Le(B(m), "s");
  let a = Tp.exec(r)?.groups;
  if (!a) return v("not a number");
  let [f = ""] = (a.suffix ?? "").split("/");
  return a.space === "" && !t && f !== "" && !Pt.has(f) ? v("not a number") : yp(a);
}
var Sp = { 9: Yo, 10: Yo, 12: 1, 13: 1, 15: Ms, 16: Ms, 18: Ns, 19: Ns };
var Ge = (e, t) => ({ kind: "time", ms: e, isZoned: t });
var gp = (e) => (new Date(e).getUTCDay() + zo - 1) % zo;
var Op = (e, t) => b(J([e, 0, t + nu - 1]), "UTC")[0];
function _p(e) {
  let t = Number(e.year), o = Number(e.week), r = ks - gp(J([t, 0, ks])) + (o - 1) * zo;
  return o < 1 || Op(t, r) !== t ? v("no such week") : Ge(J([t, 0, r + Number(e.weekday ?? 1) - 1]), hu);
}
var Cp = (e) => (t, o) => t !== e[o];
function Lp(e, t) {
  let o = qd.exec(t.zone ?? "")?.groups ?? {}, r = Number(o.hours ?? 0) * fu + Number(o.minutes ?? 0);
  return Ge(e - (o.sign === "-" ? -r : r) * iu + Math.round(Number(t.fraction ?? "0") * Yo), t.zone !== void 0);
}
function Ep(e) {
  let { year: t, month: o = "1", day: r = "1", monthName: s } = e, { hour: p = "0", minute: m = "0", second: n = "0" } = e, f = [t, s === void 0 ? Number(o) - 1 : Nt.findIndex((l) => s.startsWith(l)), r, p, m, n].map(Number), i = J(f);
  return f.some(Cp(b(i, "UTC"))) ? v("no such date") : Lp(i, e);
}
var Dt = Gd + `(?:${Xd})?`;
var Ap = [String.raw`^(?<year>\d{4})(?:[-/](?<month>\d\d)(?:[-/](?<day>\d\d)` + String.raw`(?:[T ]${Dt})?)?)?$`, String.raw`^(?:[A-Z][a-z]{2}, )?(?<day>\d{1,2}) ` + String.raw`(?<monthName>[A-Z][a-z]+) (?<year>\d{4})` + String.raw`(?: ${Dt})?$`, String.raw`^(?<monthName>[A-Z][a-z]+) (?<day>\d{1,2}), (?<year>\d{4})` + String.raw`(?: ${Dt})?$`, String.raw`^(?<year>\d{4})(?<month>\d\d)(?<day>\d\d)T` + String.raw`(?<hour>\d\d)(?<minute>\d\d)(?<second>\d\d)(?<zone>Z)$`].map((e) => new RegExp(e));
function le(e) {
  let t = String(e ?? "").trim();
  if (lp.test(t)) return { kind: "empty", why: "empty" };
  let r = Jd.test(t) ? Number(t) : NaN, s = Sp[String(Math.trunc(r)).length];
  if (!Number.isNaN(r) && s !== void 0) return Ge(r * s, cu);
  for (let n of Ap) {
    let a = n.exec(t)?.groups;
    if (a) return Ep(a);
  }
  let m = Vd.exec(t)?.groups;
  return m ? _p(m) : v("not a time");
}
var bp = `Draws one chart from data you already have, and answers with what was read, drawn and left out. The person sees the chart, not this answer: tell them the headline number and pass on the "note:" lines.
The data is a table under 64 KiB: JSON records, CSV, TSV, a markdown or SQL table, aligned shell output. Name x and y. You may leave them out where there is one way to read it: metric results from Prometheus, Grafana and Datadog (these may be charted unasked), one column of times beside nothing but numbers, or beside one column of names too where the times repeat, or one column of names beside one of numbers (bars). Nothing is guessed: a call that leaves a choice open is refused with the columns that were found, so call again. Rows are not counted or put in buckets of time: pass counts. ${fr}.
It reads no file, and no result that the host cut or saved to a file: query less. A file that a tool read comes with a number before each line: pass its rows as data, without the numbers.`;
var Nc = { name: "chart", description: bp, inputSchema: Lt };
function Rp(e, t) {
  let o = Array.isArray(e) ? e : [], r = o.findLastIndex((m) => m.role === "user" && !m.toolResults?.length), s = o.slice(r + 1).flatMap((m) => m.toolUses), p = s.findIndex((m) => m.tool_use_id === t);
  return s.slice(0, p < 0 ? void 0 : p).some((m) => m.text === void 0 && m.tool !== ae);
}
async function ir(e, t, o) {
  let { agentId: r } = t, [s, ...p] = o, m = await e.session.messages(r ? { agentId: r } : {});
  if (s === void 0 || !Rp(m, t.tool_use_id)) return Array.isArray(m) ? _t(m) : void 0;
  return await e.clock.sleep(s, { signal: t.signal }), ir(e, t, p);
}
var Ft = (e) => ({ ...e, form: "bars", log: void 0 });
function ue(e) {
  return typeof e === "string" || typeof e === "number" || typeof e === "boolean" ? e : e === void 0 || e === null ? null : JSON.stringify(e);
}
var Ut = (e, t) => e.map((o) => t.get(o) ?? null);
var Bt = [{ source: "tab-separated", pattern: /\t/ }, { source: "pipe table", pattern: /[|\u2502]/ }, { source: "CSV", pattern: /,/ }, { source: "semicolon-separated", pattern: /;/ }];
var Wt = (e) => Ae(e).kind === "unread" && le(e).kind === "unread";
var Ip = "Grafana";
var jt = "*";
var lr = "value";
function Xe(e, t) {
  let [o] = S(e, t), r = M(o), s = o === void 0 || o === jt;
  return r ? Object.entries(o).map(([p, m]) => [p, typeof m === "string" ? re(m) : m]) : s ? [] : [[t, re(String(o))]];
}
var Mp = 12;
var vt = [{ name: "Prometheus", series: "[]", labels: ["metric"], time: "values.[].0", value: "values.[].1", isReadAtInstants: true }, { name: "Datadog", series: "series.[]", labels: ["metric", "scope", "group", "functions"], time: "pointlist.[].0", value: "pointlist.[].1", isReadAtInstants: false, unit: "unit.[].short_name" }, { name: "named-series", series: "series.[]", labels: ["name"], time: "data.[].0", value: "data.[].1", isReadAtInstants: false }, { name: "Datadog-buckets", series: "data.buckets.[]", labels: ["by"], time: "computes.*.[].time", value: "computes.*.[].value", isReadAtInstants: false }, { name: "Graphite", series: "[]", labels: ["target"], time: "datapoints.[].1", value: "datapoints.[].0", isReadAtInstants: false }, { name: "CloudWatch", series: "MetricDataResults.[]", labels: ["Label"], time: "Timestamps.[]", value: "Values.[]", isReadAtInstants: false }, { name: "Cloud-Monitoring", series: "timeSeries.[]", labels: ["metric.labels"], time: "points.[].interval.endTime", value: "points.[].value.*", isReadAtInstants: true }, { name: "Cost-Explorer", series: "", labels: [], time: "ResultsByTime.[].TimePeriod.Start", value: "ResultsByTime.[].Total.*.Amount", isReadAtInstants: false, unit: "ResultsByTime.0.Total.*.Unit" }];
var ty = [...vt.map((e) => e.name), Ip];
var Np = (e) => e.every((t) => t.cellsByKey.every(([, o]) => o.length === t.pointCount));
var sy = /^([\w./-]+):[^\s,(){}]+$/;
var my = /^((?:[\w.]+:)?[\w.-]+)\{([^{}]*)\}(?: by \{[^{}]*\})?((?:\.\w+\([^()]*\))*)$/;
function wp(e) {
  let t = typeof e === "string" ? e.split(",") : [], r = t.length <= Mp ? t.map((p) => sy.exec(p)?.[1]) : [];
  return r.length > 0 && !r.includes(void 0) && F(r).length === r.length ? Object.fromEntries(U(r.map((p) => `${p} tag`), t)) : e;
}
var kp = (e, t) => ({ metric: S(e, "expression")[0], scope: S(e, "scope")[0], pointlist: t });
var Pp = (e, t) => (o, r) => [e + r * t, o];
function Dp(e) {
  let t = le(String(S(e, "start_time")[0]));
  return t.kind === "time" && t.isZoned ? S(e, "values").flatMap((r) => String(r).split(",")).map(Pp(t.ms, Number(S(e, "interval_ms")[0]))) : [];
}
var Fp = (e) => kp(e, [...Dp(e), ...S(e, "binned.[]").map((t) => [S(t, "start_time")[0], S(t, "avg")[0]])]);
function Up(e) {
  return S(e, "[].expression").length > 0 ? { series: S(e, "[]").map((o) => Fp(o)) } : e;
}
function nt(e) {
  let t = Ae(e), { kind: o } = t.kind === "unread" ? le(e) : t;
  return o === "unread" ? "text" : o;
}
function Bp(e, t) {
  let o = z(t, nt), r = [...o.keys()].filter((s) => s !== "empty");
  return { name: e, cells: t, cellsByKind: o, soleKind: r.length === 1 ? r[0] : void 0 };
}
var at = (e) => e.columns.map((t, o) => Bp(t, e.rows.map((r) => r[o] ?? null)));
function ft(e, t) {
  let [o, ...r] = e.columns.filter((s) => s.toLowerCase() === t.toLowerCase());
  return o !== void 0 && r.length === 0 ? o : t;
}
var Wp = (e) => e.every((t) => nt(t.name) === "text") || e.some((t) => t.name !== "" && !t.cellsByKind.has(nt(t.name)));
var Ke = (e) => e.soleKind === "text" && (e.cellsByKind.get("text") ?? []).every(mr);
var Sy = 262144;
var dr = 200;
var Ht = 3;
var Re = (e, t) => e > dr || e * t > Sy;
var _y = { line: "line", columns: "columns", bars: "bars", sparks: "line", share: "bars" };
var vp = (e) => (t) => ft(e, t);
var Hp = (e, t, o) => ({ form: e, x: t, ...o });
var $p = (e) => /\d/.test(String(e));
var cr = (e) => (t) => t !== e;
var Ry = ". It was read as a metrics format, into the columns below: x and y can be left out";
var Xp = (e, t) => ({ code: "no_such_column", why: `it has no column ${e.join(", ")}` + (t.roles ? Ry : "") });
var Kp = (e, t) => e.length === 0 || e.length === 1 && new Set(t.cells).size < t.cells.length;
var zp = (e, t) => t === "bars" ? e.length === 1 : e.length >= 1;
function yr(e = null) {
  let t = le(e);
  return t.kind === "time" ? t.ms : void 0;
}
var Yp = (e, t) => e.cells.some((o, r) => yr(o) !== yr(t.cells[r]));
var hr = (e) => e.name;
function Jp(e, t) {
  let o = e.filter((d) => d.name !== ""), r = o.filter((d) => d.soleKind === "text"), s = o.filter((d) => d.soleKind === "number"), p = o.filter((d) => d.cellsByKind.get("time")?.length === d.cells.length && new Set(d.cells).size >= Ht), m = p.length > 0, [n, ...a] = m ? p : r;
  if (!(n !== void 0 && a.length === 0)) return;
  let i = m ? s.filter((d) => Yp(d, n)) : s, x = r.filter((d) => d !== n), l = t ?? (m ? "line" : "bars");
  return 1 + x.length + s.length === o.length && Kp(x, n) && (m || l === "bars") && (t !== void 0 || !Ke(n)) && zp(i, l) ? { form: l, x: n.name, y: i.map(hr), by: x.map(hr) } : void 0;
}
function Vp(e, t) {
  let o = e.find((r) => r.name === t);
  return o?.soleKind === "text" && !Ke(o);
}
var Zp = (e, t) => Vp(e, t) ? "bars" : "line";
function qp(e, t) {
  let o = t.form === void 0 ? void 0 : _y[t.form], r = o === "bars" ? void 0 : e.roles, s = r ? [] : at(e), p = r ?? Jp(s, o), m = t.x === void 0 ? p?.x : ft(e, t.x), n = vp(e), a = F(t.y?.map(n) ?? p?.y ?? []).filter(cr(m)), f = (t.by?.map(n) ?? (t.combine === void 0 ? p?.by : void 0) ?? []).filter(cr(m));
  if (e.rows.length === 0) return { code: "no_rows", why: "it has no rows" };
  if (new Set(e.columns).size < e.columns.length) return { code: "names_repeat", why: "two of its columns share a name, so a name does not pick one. Pass the rows as data, each column under a name of its own" };
  if (m === void 0) {
    let u = s.find(Ke);
    if (u) return { code: "dates_unread", why: `${u.name} looks like dates, in a spelling that is not read (${u.cells[0]}). ${fr}` };
    let d = s.filter((w) => w.soleKind === "time"), c = d[0], g = new Set(c?.cells).size;
    if (c && d.length === 1 && g < Ht) return { code: "few_times", why: `${c.name} holds ${K(g, "time")}, too few to find the time axis unasked (that takes ${Ht}). Name x and y` };
    if (!((e.listColumns ?? []).length > 0 || s.some((w) => w.cells.some($p)))) return { code: "no_numbers", why: "no column holds a number, so there is nothing to draw. Rows are not counted: pass the counts as data" };
    return { code: "no_x", why: a.length > 0 ? "say which column is x" : "say which column is x and which are y" };
  }
  if (a.length === 0) return { code: "no_y", why: `say which columns are y, the values to draw. Rows are not counted: for how many rows share a ${m}, pass the counts as data` };
  let x = [m, ...a, ...f].filter((u) => !e.columns.includes(u));
  return x.length > 0 ? Xp(x, e) : Hp(o ?? p?.form ?? Zp(s, m), m, { y: a, by: f });
}
var Tr = (e) => e.path ?? e.source;
var Qp = (e, t, o) => ({ source: e.name, y: F(t.flatMap((r) => r.y)), points: o.flatMap((r) => ne(r.pointCount).map((s) => Object.fromEntries([...r.labels, ...r.cellsByKey.map(([p, m]) => [p, m[s]])]))), isSeries: true, isReadAtInstants: e.isReadAtInstants });
function Gt(e, t) {
  let o = Re(Math.max(0, ...t.map((r) => r.labels.length + r.cellsByKey.length)), B(t.map((r) => r.pointCount)));
  return Qp(e, t, o ? [] : t);
}
var em = (e) => S(e, "schema.fields.[]").map((t, o) => ({ name: String(S(t, "name")[0]), displayName: S(t, "config.displayNameFromDS")[0], type: S(t, "type")[0], labels: S(t, "labels")[0], unit: re(String(S(t, "config.unit")[0] ?? "")), cells: S(e, `data.values.${o}.[]`) }));
function Xt(e, t) {
  return t !== "" && Ae(`1 ${t}`).kind === "number" && e !== null ? `${e} ${t}` : e;
}
var tm = (e, t, o) => (r) => {
  let s = r.displayName ?? S(e, "schema.name")[0], m = o && Boolean(s) ? String(s) : `${r.name} ${S(e, "schema.refId")[0]}`;
  return { ...r, name: t ? r.name : m, cells: r.cells.map((n) => Xt(n, r.unit)) };
};
function om(e, t, o) {
  let r = em(e), s = r.filter((n) => n.type === "number"), p = r.filter((n) => n.type === "string"), m = r.find((n) => n.type === "time")?.cells ?? [];
  return [...z(s.map(tm(e, o, t && s.length === 1)), (n) => JSON.stringify(n.labels)).values()].map((n) => ({ labels: Xe(n[0], "labels"), y: n.map((a) => a.name), pointCount: m.length, cellsByKey: [...[...p, ...n].map((a) => [a.name, a.cells]), ["time", m]] }));
}
function rm(e) {
  let t = S(e, "results.*"), o = (t.length > 0 ? t : S(e, "data")).map((r) => S(r, "frames.[]"));
  return { ...Gt({ name: Ip, isReadAtInstants: o.flat().every((r) => S(r, "schema.meta.custom.resultType")[0] === "matrix") }, o.flatMap((r) => r.flatMap((s) => om(s, r.length === 1, o.length === 1)))), isSeries: o.flat().every((r) => String(S(r, "schema.meta.type")[0]).startsWith("timeseries")) };
}
function sm(e) {
  let [t] = S(e, "scope");
  if (!(M(e) && typeof t === "string")) return e;
  let [r, s, p, m] = my.exec(String(e.metric)) ?? [], n = r !== void 0, a = new Set(n ? t.split(",") : S(e, "tag_set.[]").map(String));
  return a.delete(jt), { ...e, metric: n ? s : e.metric, scope: (n ? p ?? "" : t).split(",").filter((f) => !a.has(f)).join(",") || jt, group: [...a].join(",") || void 0, functions: m || void 0 };
}
function pm(e) {
  if (!(M(e) && S(e, "series.[].pointlist").length > 0)) return e;
  let o = S(e, "series.[]").map(sm), r = o.map((m) => M(m) ? { ...m, scope: wp(m.scope) } : m), s = S(r, "[].scope"), p = s.every((m) => m === jt || M(m)) && F(s.flatMap((m) => M(m) ? Object.keys(m) : [])).length <= Mp;
  return { ...e, series: p ? r : o };
}
var mm = (e) => (t) => Xt(t, e);
function nm(e, t) {
  let o = t.unit;
  return o !== void 0 ? re(S(e, o).join("/")) : "";
}
var am = (e, t, o) => ({ labels: t.labels.flatMap((r) => Xe(e, r)), y: [lr], pointCount: o.length, cellsByKey: [["time", S(e, t.time)], [lr, o]] });
var fm = (e, t) => S(e, t.series).map((o) => am(o, t, S(o, t.value).map(mm(nm(o, t)))));
var Sr = (e, t) => F(S(e, t.series).map((o) => JSON.stringify(Object.entries(Object.fromEntries(t.labels.flatMap((r) => Xe(o, r)))).toSorted()))).length;
function sh(e) {
  let t = rm(e);
  if (t.points.length > 0) return t;
  let r = Up(e), s = pm(r), p = s === r ? [r] : [s, r];
  for (let m of vt) for (let n of p) {
    let a = fm(n, m), f = Gt(m, Np(a) ? a : []);
    if (f.points.length > 0 && Sr(n, m) >= Sr(r, m)) return f;
  }
  return;
}
var im = "aligned columns";
var lm = "JSON lines";
var zt = "JSON";
var xm = "columns and rows";
var um = " with no header";
var ih = '<field name="';
var dm = "</row>";
var gr = "<row>";
var cm = "XML rows";
var lh = [...Bt.map((e) => e.source), im, xm, zt, lm, cm, ...ty];
var it = 2;
var uh = 32;
var ym = 2;
var de = (e, t, o) => ({ source: e, columns: t, rows: o, hasMadeUpNames: false, isCut: false });
var hh = /\n(?: *\n)+/;
var Sh = /^[\]}]\s*$/;
var gh = /^\s*[[{]./;
var Oh = /^[[{]\s*$/;
var _h = /^\s*\[?\{"/;
var Yt = /^[-+|:=\s\u2500\u2502\u250C\u252C\u2510\u251C\u253C\u2524\u2514\u2534\u2518]+$/;
var Lh = /^[*`]+|(?<![*`])[*`]+$/g;
var Eh = /^\[([^\]]*)\]\([^)]*\)$/;
var bh = /^\uFEFF|\u001B\[[0-9;]*m/g;
var Ih = /<results\b[^>]{0,200}\btruncated="true"/;
var Mh = /^(?<name>[^"]*)"(?<attributes>[^>]*?)(?:\/>|>(?<text>.*?)<\/field>)/s;
var Nh = /(?:^|\s)null="true"/;
var wh = /&#(?:x([0-9a-f]{1,6})|(\d{1,7}));/gi;
var Ph = /[.\u2026 \t]*\[[^\]\n]{0,99}truncated[^\]\n]{0,99}\][. \t]*/;
var Dh = /[\u2502|] *[\d,]+ rows \([\d,]+ shown\).*/;
var hm = (e, t) => ({ source: `${t}${um}`, hasMadeUpNames: true, isCut: false, columns: [...(e[0] ?? []).keys()].map((o) => `column ${o + 1}`), rows: e });
function Jt(e, t) {
  let o = de(t, e[0] ?? [], e.slice(1));
  return Wp(at(o)) ? o : hm(e, t);
}
var Vt = () => ({ source: "a cut text", columns: [], rows: [], hasMadeUpNames: false, isCut: true });
var Tm = (e) => e.length > 1 && e.every(M) && F(e.map((t) => Object.keys(t).join())).length === 1;
function Sm(e) {
  let t = e.findIndex((r) => Oh.test(r));
  return t >= 0 ? e.slice(t, e.findLastIndex((r) => Sh.test(r)) + 1) : [];
}
function gm(e, t) {
  let o = [e];
  for (let r = 0; r <= t; r += 1) o = o.flatMap((s) => typeof s === "object" && s !== null ? Object.values(s) : []);
  return o.length > 0;
}
function Zt(e) {
  try {
    let t = JSON.parse(e);
    return gm(t, uh) ? void 0 : t;
  } catch {
    return;
  }
}
function Om(e) {
  let t = Zt(e);
  if (t !== void 0) return { values: [t], unparsedLines: 0 };
  let o = e.split(`
`), r = Zt(Sm(o).join(`
`));
  if (r !== void 0) return { values: [r], unparsedLines: 0 };
  let s = o.filter((m) => gh.test(m)), p = s.map((m) => Zt(m));
  return { values: p.filter((m) => m !== void 0), unparsedLines: Ts(U(s, p), ([m, n]) => n === void 0 && _h.test(m)) };
}
var _m = (e) => (t) => Array.isArray(t) && t.length === e && !t.some(M);
var Cm = (e, t, o) => ({ source: zt, path: e, columns: t, rows: o, hasMadeUpNames: false, isCut: false });
var Lm = (e) => (t) => (M(t) ? e.map((r) => t[r]) : S(t, "[]")).map(ue);
var Em = (e, t) => ({ column: e, cell: t, isList: false });
var Am = (e) => ({ column: e, cell: null, isList: true });
var Or = (e, t) => Object.entries(e).flatMap(([o, r]) => {
  let s = `${t}${o}`;
  if (typeof r !== "object" || r === null) return [Em(s, ue(r))];
  return Array.isArray(r) && r.some((m) => typeof m === "object" && m !== null) ? [Am(s)] : Or(r, `${s}.`);
});
function _r(e, t, o) {
  let r = [], s = 0;
  for (let i of e) {
    let x = Or(i, "");
    if (r.push(x), s += x.length, Re(1, s)) return [];
  }
  let p = r.flat(), m = F(p.map((i) => i.column));
  if (Re(m.length, e.length)) return [];
  let a = r.map((i) => Ut(m, new Map(i.map((x) => [x.column, x.cell])))), f = F(p.filter((i) => i.isList).map((i) => i.column));
  return [{ source: t, path: o, columns: m, rows: a, listColumns: f, hasMadeUpNames: false, isCut: false }];
}
var bm = (e) => (t) => ne(e).map((o) => ue(t[o]));
var Rm = (e) => Array.isArray(e) && !e.some((t) => typeof t === "object" && t !== null);
function Im(e, t) {
  let o = e.reduce((a, f) => Math.max(a, S(f, "[]").length), 0);
  if (!(e.length >= ym && o >= it && !Re(o, e.length) && e.every(Rm))) return [];
  let [s = [], ...p] = e.map(bm(o)), m = de(zt, s.map((a) => String(a ?? "")), p);
  return Wp(at(m)) ? [{ ...m, path: t }] : [];
}
var Mm = (e, t) => ({ form: "line", x: "time", y: e.y, by: t });
function Nm(e) {
  let t = ["time", ...e.y];
  return (o) => ({ ...o, isSeries: e.isSeries, isReadAtInstants: e.isReadAtInstants, roles: Mm(e, o.columns.filter((r) => !t.includes(r))) });
}
function qt(e, t, o = {}) {
  let { path: r, source: s = zt } = o;
  if (typeof e === "string") return t(e);
  if (typeof e !== "object" || e === null) return [];
  let p = sh(e);
  if (p) {
    let u = _r(p.points, p.source);
    return F(p.points.map((c) => c.time)).length < Ht ? u : u.map(Nm(p));
  }
  let m = S(e, "columns.[]").map((u) => String(S(u, "name")[0] ?? u)), n = S(e, "rows.[]");
  if (m.length > 0 && !Re(m.length, n.length)) return [de(xm, m, n.map(Lm(m)))];
  if (typeof S(e, "range")[0] === "string" && S(e, "majorDimension")[0] === "ROWS") return Im(S(e, "values.[]"), r === void 0 ? "values" : `${r}.values`);
  if (Array.isArray(e)) return e.length > 0 && e.every(M) ? _r(e, s, r) : [];
  let i = Object.values(e), x = S(i[0], "[]").length;
  return i.length >= it && i.every(_m(x)) ? [Cm(r, Object.keys(e), ne(x).map((u) => i.map((d) => ue(d[u]))))] : Object.entries(e).flatMap(([u, d]) => qt(d, t, { path: r === void 0 ? u : `${r}.${u}` }));
}
var wm = (e) => (t) => e.map((o) => t.slice(o.from, o.until).trim());
var Me = (e, t) => e.map((o) => o.slice(t.from, t.until).padEnd(t.until - t.from));
var km = (e, t) => !t.some((o) => o.trim().includes(" ")) && !e.some((o) => o.trim().includes("  ")) && (!e.some((o) => /^ +\S/.test(o)) || !e.some((o) => /\S +$/.test(o)));
var Pm = (e, t) => (o, r) => {
  let s = { from: o.from, until: r.until };
  return o.until === r.from - 1 && km(Me(e, s), Me(t, s));
};
var Dm = (e) => (e[0] ?? "").trim().split(/ +/).every(Wt);
var Fm = (e) => (t) => Me(e, t).slice(1).some(Wt);
var Um = (e, t, o) => (r) => {
  let [s = "", ...p] = Me(e, r);
  return (s.trim() !== "" || !(o && r.from !== t[0]?.from)) && p.join("").trim() !== "";
};
function Bm(e, t, o) {
  let r = Fm(t), s = Um(t, e, Dm(t)), p = Pm(t, o), m = U(e, e.slice(1)).filter(([f, i]) => f.until === i.from - 1), n = m.length < e.length - 1 && m.every(([f, i]) => p(f, i)), a = [];
  for (let f of e) {
    let i = a.at(-1);
    i && p(i, f) && (n || !s(i) || !s(f) || r(i) && r(f)) ? i.until = f.until : a.push({ ...f });
  }
  return a;
}
function Wm(e) {
  let t = [];
  for (let m of e) for (let n = 0; n < m.length; n++) t[n] ||= m[n] !== " ";
  let o = [...t.keys()].filter((m) => t[m]), r = U(o.filter((m) => !t[m - 1]), o.filter((m) => !t[m + 1])).map(([m, n]) => ({ from: m, until: n + 1 }));
  if (Re(r.length, e.length)) return [];
  let p = e.filter((m) => !Yt.test(m));
  return p.map(wm(Bm(r, p, e.filter((m) => Yt.test(m)))));
}
var jm = ([e = [], ...t]) => t.length > 0 && e.length >= it && [...e.keys()].some((o) => t.every((r) => Ae(r[o] ?? "").kind === "number"));
var vm = (e) => e !== "" && (!Yt.test(e) || e.trim().includes(" "));
function Hm(e) {
  let t = e.split(hh).map((o) => Wm(o.split(`
`).filter(vm))).filter(jm);
  return { lineCount: t.flat().length, tables: t.map((o) => Jt(o, im)) };
}
function $m(e) {
  let t = [], o = [];
  for (let [r, s] of e.entries()) {
    let p = s.length >= it && s.length <= dr && s.some((f) => f !== ""), m = o[0]?.length ?? s.length;
    if (p && s.length === m) {
      o.push(s);
      continue;
    }
    if (!(p && e[r + 1]?.length === m)) t.push(o), o = p ? [s] : [];
  }
  return t.push(o), t.filter((r) => r.length >= ym);
}
function Gm(e, t) {
  let o = new RegExp(`[ ]*(?:"(?<quoted>(?:[^"]|"")*)"[ ]*|(?<plain>[^\\n]*?))(?<end>${t.pattern.source}|\\n)`, "gy"), r = [], s = [];
  for (let { groups: p = {} } of `${e}
`.matchAll(o)) if (s.push(p.quoted?.replaceAll('""', '"') ?? p.plain ?? ""), p.end === `
`) r.push(s), s = [];
  return [...r, s].map((p) => (t.pattern.test("|") && p[0] === "" && p.at(-1) === "" ? p.slice(1, -1) : p).map((n) => n.trim().replace(Lh, "").replace(Eh, "$1")));
}
var Xm = (e) => (t) => ({ ...t, unparsedLines: e });
function Km(e, t) {
  let o = Gm(e, t).filter((p) => !Yt.test(p.join(""))), r = $m(o), s = r.flat();
  return { lineCount: s.flatMap((p) => p.join("").split(`
`)).length, tables: r.map((p) => Jt(p, t.source)).map(Xm(Ts(o, (p) => p.length >= it) - s.length)) };
}
var zm = (e) => (t) => t.lineCount === e;
function Ym(e) {
  let t = [...Bt.filter((o) => o.pattern.test(e)).map((o) => Km(e, o)), Hm(e)];
  return t.find(zm(Math.max(...t.map((o) => o.lineCount))))?.tables ?? [];
}
var Jm = (e) => Ih.test(e) || e.lastIndexOf(gr) > e.lastIndexOf(dm);
var Cr = (e) => e.replace(wh, (t, o, r) => {
  let s = o === void 0 ? Number(r) : Number.parseInt(o, 16);
  return s <= 1114111 ? String.fromCodePoint(s) : t;
}).replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&apos;", "'").replaceAll("&amp;", "&");
function Vm(e) {
  let t = Mh.exec(e)?.groups;
  return t !== void 0 ? [[Cr(t.name ?? ""), Nh.test(t.attributes ?? "") ? null : Cr(t.text ?? "")]] : [];
}
function Zm(e) {
  let t = e.slice(e.lastIndexOf(gr));
  return new Map(t.split(ih).slice(1).flatMap(Vm));
}
function qm(e) {
  if (!e.trimStart().startsWith("<")) return [];
  let o = e.split(dm).slice(0, -1).filter((p) => p.includes(gr)).map(Zm), r = F(o.flatMap((p) => [...p.keys()]));
  if (!(r.length > 0 && !Re(r.length, o.length))) return [];
  return Jm(e) ? [Vt()] : [de(cm, r, o.map((p) => Ut(r, p)))];
}
var Qm = [/<persisted-output>/, /<truncated-output>/, /Output too large.*/, /\(output truncated[^)\n]*\)/, Dh, Ph, /Error: result \(.* exceeds maximum allowed tokens.*/];
var en = new RegExp(`^(?:${Qm.map((e) => e.source).join("|")})$`, "im");
var tn = (e) => (t) => ({ unparsedLines: e, ...t });
function Lr(e) {
  let t = e.replace(bh, "").replaceAll(`\r
`, `
`);
  if (en.test(t)) return [Vt()];
  let r = qm(t);
  if (r.length > 0) return Rt(r);
  let { values: s, unparsedLines: p } = Om(t);
  if (s.length === 0) return Rt(Ym(t));
  let m = Tm(s);
  return Rt((m ? qt(s, Lr, { source: lm }) : s.flatMap((n) => qt(n, Lr))).map(tn(p)));
}
var eo = (e) => e.toLowerCase().replaceAll(" ", "_");
var on = "json_path";
var rn = "unread";
function sn(e) {
  return e.path !== void 0 ? on : eo(e.source.replace(um, ""));
}
var pn = [...lh.map(eo), on, rn];
var oo = (e) => e < 1 ? 0 : 2 ** Math.floor(Math.log2(e));
var BT = ["bad_call", "no_result", "data_not_found", "too_long", "cut_short", "no_table_read", "table_unpicked", "no_rows", "names_repeat", "dates_unread", "few_times", "no_numbers", "no_x", "no_y", "no_such_column", "units_mixed", "units_differ", "zones_mixed", "x_not_times", "column_unread", "rows_share_x", "no_values", "bars_partly_unread", "share_not_summed", "share_not_whole", "log_not_line", "uneven_step", "column_below_zero", "failed"];
var HT = ["off", "skips_servers"];
var $T = ["last_result", "result_id", "text", "rows", "none"];
var GT = (e, t) => ({ event: "easel_chart", props: { outcome: { value: e.outcome, of: ["drawn", ...BT] }, form: { value: e.form, of: [...Object.keys(k), "unnamed"] }, format: { value: e.format, of: pn }, data_from: { value: e.dataFrom, of: $T }, series_bucket: oo(e.seriesCount), point_bucket: oo(e.pointCount), elapsed_ms_bucket: oo(t.elapsedMs), is_form_named: e.isFormNamed, has_left_out: e.hasLeftOut, is_form_replaced: e.isFormReplaced, is_asked: t.isAsked, is_in_subagent: t.isInSubagent, is_on_terminal: t.surfaces.includes("terminal"), is_on_app: t.surfaces.some((o) => o !== "terminal") } });
function nn(e, t) {
  if (t.hasLeftOut) return { feature: e, kind: "sad", reason: "data_left_out" };
  return t.isFormReplaced ? { feature: e, kind: "sad", reason: "form_replaced" } : { feature: e, kind: "ok" };
}
var an = (e, t) => ({ feature: e, kind: "bad", reason: t.outcome });
function YT(e, t) {
  let o = t ? "easel_chart" : "easel_auto";
  return e.outcome === "drawn" ? nn(o, e) : an(o, e);
}
var lt = { outcome: "failed", form: "unnamed", isFormNamed: false, format: rn, dataFrom: "none", seriesCount: 0, pointCount: 0, hasLeftOut: false, isFormReplaced: false };
var ZT = (e) => ({ event: "easel_settings", props: { auto_charts: { value: e, of: HT } } });
var fn = (e, t) => ({ ...lt, form: e.form ?? "unnamed", isFormNamed: e.form !== void 0, dataFrom: t });
function ln(e, t, o) {
  if (t.kind === "data") return t.series.length <= (o.top ?? k.bars.defaultCount) ? t : e;
  return { ...t, problem: { ...t.problem, why: `${o.x ?? "x"} holds names, not times, so bars were read. ` + t.problem.why } };
}
var xn = 12;
var mS = 32;
var nS = 3;
var ro = (e, t, o = "") => e > 0 ? [`${K(e, t)}${o}`] : [];
var iS = true;
var dn = (e) => e.every((t) => Ae(t, iS).kind === "number");
var cn = (e) => dn(e) ? ", read as numbers if named as y" : "";
var yn = (e) => e.slice(0, nS).map((t) => Y(String(t), mS));
var hn = (e) => ` (${yn(e).join(", ")})${cn(e)}`;
var Tn = (e) => e.map((t) => le(t)).every((t) => t.kind === "time" && t.isZoned);
var Sn = (e) => Tn(e) ? ", read as times if named as x" : "";
function gn(e) {
  let t = F(e.cellsByKind.get("text") ?? []), o = e.cellsByKind.get("number") ?? [];
  return [...ro(o.length, "number", Sn(o)), ...ro(e.cellsByKind.get("time")?.length ?? 0, "time"), ...ro(t.length, "text", hn(t))];
}
var On = (e) => e ? "lists, which are not read. Pass one row for each item as data, with the fields beside the list repeated" : "empty";
var _n = (e, t = []) => `${e.name}: ` + (gn(e).join(", ") || On(t.includes(e.name)));
var Cn = (e) => `${Tr(e)}, ${K(e.rows.length, "row")}:`;
var Ln = (e, t) => (o) => {
  let r = Et(at(o).map((s) => _n(s, o.listColumns)), e, "more column");
  return t ? [Cn(o), ...r] : r;
};
var CS = (e) => e.flatMap(Ln(Math.floor(xn / e.length), e.length > 1));
var LS = true;
function so(e) {
  let t = e.readings.filter((o) => o.value !== null).map((o) => JSON.stringify([o.groupLabels, o.ms]));
  return new Set(t).size < t.length;
}
var bS = 5;
var An = 120;
var bn = 3;
var Rn = 3;
var IS = 65536;
var NS = 240;
var wS = 8;
var PS = 2;
var FS = /[\]}]\s*$/;
var US = /^\s*[[{]/;
var BS = new RegExp("^[^\\p{L}\\p{N}]*\\p{N}", "u");
var In = (e) => (t) => e.every((o) => t.columns.includes(ft(t, o)));
function Mn(e, t) {
  let o = qp(e, t);
  return !("code" in o) && o.form !== "bars";
}
var Nn = (e) => [e.x ?? [], e.y ?? [], e.by ?? []].flat();
function wn(e, t) {
  let r = e.length === 1 ? e : e.filter(In(Nn(t)));
  return r.length === 1 ? r : r.filter((p) => Mn(p, t));
}
var po = (e) => F(e).slice(0, Rn).join(", ");
function kn(e, t) {
  let { unreadXCells: o } = t, r = o.filter(mr), s = t.readings.length === 0;
  if (r.length > 0 && (s || r.length === o.length)) return { code: "dates_unread", why: `${e.x} holds dates in a spelling that is not read (${po(r)}). ${fr}` };
  let m = o.filter((f) => Ae(f).kind === "number");
  if (m.length > 0) return { code: "x_not_times", why: `${e.x} holds numbers that are not times (${po(m)}). A line, columns and sparks run over times. For one bar for each, pass form: "bars"` };
  return s && o.length > 0 ? { code: "x_not_times", why: `${e.x} holds names, not times (${po(o)}). A line, columns and sparks run over times: for names, pass form: "bars"`, fitsBars: true } : void 0;
}
function Pn({ reading: e, roles: t, request: o, series: r }) {
  if (new Set(e.readings.map((x) => x.isZoned)).size > 1) return { code: "zones_mixed", why: `${t.x} mixes times that name a zone with times that name none` };
  let p = kn(t, e);
  if (p !== void 0) return p;
  let m = e.droppedColumns.find((x) => x.isEntireColumn);
  if (m !== void 0) return { code: "column_unread", why: `a whole column was not read. ${m.sentence}` };
  if (o.combine === void 0 && so(e)) return { code: "rows_share_x", why: `several rows share one ${t.x}; name the columns to split by, or how to combine them (sum, mean, max, min)` };
  if (!(r.length > 0)) return { code: "no_values", why: `no cell of ${t.y.join(", ")} holds a number` };
  let [f] = e.droppedColumns;
  return t.form === "bars" && f !== void 0 ? { code: "bars_partly_unread", why: `bars rank a whole list, and part of this one was not read. ${f.sentence}` } : void 0;
}
var Dn = { sum: B, mean: (e) => B(e) / e.length, max: (e) => Math.max(...e), min: (e) => Math.min(...e) };
var YS = "the last point may still be filling: its period had not ended at the call";
var Ir = "Ask for fewer rows or a shorter span, then chart that";
function Fn({ roles: e, request: t, series: o, timeline: r }) {
  let s = o.flatMap((x) => x.samples.map((l) => l.value ?? 0)), p = s.some((x) => x < 0);
  if (t.form === "share" && t.combine !== "sum") return { code: "share_not_summed", why: "a share is the parts of a whole, which add up. Leave combine out, or draw bars" };
  if (t.form === "share" && (p || B(s) <= 0)) return { code: "share_not_whole", why: "the parts of a whole are at or above zero and add up to more. Draw bars" };
  if (t.log === true && (t.form ?? e.form) !== "line") return { code: "log_not_line", why: "only a line has a log scale: all else stands on zero, which a log scale does not have. Draw a line" };
  if (e.form === "columns" && r.periodStarts.length === 0) return { code: "uneven_step", why: `the times of ${e.x} keep no even step (that takes two or more, with few gaps), so a column cannot stand for a period. Rows are not put in buckets of time: pass one row for each period, or draw a line, or pass zone: "local" if the periods are local days` };
  return e.form === "columns" && p ? { code: "column_below_zero", why: "a column stands on zero and a value is below zero. Draw a line" } : void 0;
}
var Un = (e, t) => e.hasMadeUpNames && t.form === "bars" ? [] : t.y;
function Bn(e) {
  let t = e.mark.label === void 0 ? "" : e.mark.label, o = le(e.mark.at), r = `${t === "" ? "mark" : `mark ${t}`} at ${e.mark.at} not drawn:`;
  if (!(e.drawnForm !== "bars" && e.drawnForm !== "share")) return `${r} it has no times`;
  if (e.drawnForm === "sparks") return `${r} sparks have no time axis`;
  if (o.kind !== "time") return `${r} ${o.why}`;
  if (o.ms < e.axisSpan.fromMs || o.ms > e.axisSpan.untilMs) return `${r} outside the times drawn`;
  return o.isZoned !== e.isZoned ? `${r} name a zone in both the mark and the times, or in neither` : { ms: o.ms, label: t };
}
var Wn = (e) => (t, o) => {
  let r = e.get(t);
  return r === void 0 ? null : o[r] ?? null;
};
var jn = (e, t, o) => (r, s) => ({ ms: e.ms, isZoned: e.isZoned, column: r, groupLabels: o.y.length > 1 ? [...t, r] : t, value: s.kind === "number" ? s.value : null, unit: s.kind === "number" ? s.unit : null });
function vn(e, t) {
  let o = t.unit;
  return e.kind === "number" && !e.unit && !!o ? ar(e.value, o) : e;
}
var Hn = v("a log scale cannot show it");
var sg = { kind: "time", ms: 0, isZoned: false };
function Gn(e, t, o) {
  let r = Wn(new Map(e.columns.map((l, u) => [l, u]))), s = e.rows[0] ?? [], p = t.by.filter((l) => e.rows.some((u) => r(l, u) !== r(l, s))), m = t.form === "bars", n = m ? [t.x, ...p] : p, a = [], f = [], i = [];
  for (let l of e.rows) {
    let u = m ? sg : le(r(t.x, l));
    if (u.kind === "unread") i.push(r(t.x, l));
    if (u.kind !== "time") {
      f.push({ column: t.x, quote: `${r(t.x, l)} (${u.why})` });
      continue;
    }
    let g = jn(u, n.map((T) => String(r(T, l) ?? "") || `no ${T}`), t);
    for (let T of t.y) {
      let L = r(T, l), _ = vn(Ae(L, o.y !== void 0), o), A = o.log === true && _.kind === "number" && _.value <= 0 ? Hn : _;
      if (A.kind === "unread") f.push({ column: T, quote: `${L} (${A.why})` });
      a.push(g(T, A));
    }
  }
  let x = /* @__PURE__ */ new Map();
  for (let [l, u] of z(a, (d) => d.column)) x.set(l, F(u.map((d) => d.unit).filter((d) => d !== null)));
  return { readings: a, units: x, sharedLabels: t.by.filter((l) => !p.includes(l)).map((l) => String(r(l, s) ?? "")), droppedColumns: [...z(f, (l) => l.column)].map(([l, u]) => ({ isEntireColumn: u.length === e.rows.length, sentence: `${K(u.length, "cell")} of ${l} not read: ` + u.slice(0, Rn).map((d) => d.quote).join(", ") })), unreadXCells: i };
}
var Nr = (e) => e.some((t) => t.value !== null);
var Xn = (e, t, o) => e || Ws(t, o);
var Kn = (e, t) => (o) => {
  let r = (e.get(o) ?? []).map((s) => s.value).filter((s) => s !== null);
  return { ms: o, value: r.length > 0 ? t(r) : null };
};
var mo = (e, t) => Y(e[0]?.groupLabels.join(" ") || t.fallbackName, An);
var no = (e) => F(e.map((t) => t.ms)).toSorted((t, o) => t - o);
function zn(e, t, o) {
  let r = no(e), s = e[0]?.column ?? "";
  return { unit: t.reading.units.get(s)?.[0] ?? "", name: mo(e, t), measure: s, samples: (Qs(r, t, Xn(o, r, t.zone))?.periodStarts ?? r).map(Kn(z(e, (p) => p.ms), t.combine)) };
}
function Yn(e) {
  let t = [], o = [], r = z(e.reading.readings, (m) => JSON.stringify(m.groupLabels)), s = no([...r.values()].filter(Nr).flat()), p = Ws(s, e.zone);
  for (let m of r.values()) Nr(m) ? t.push(zn(m, e, p)) : o.push(mo(m, e));
  return { series: t, emptyNames: o, times: s, grid: Qs(s, e, p) };
}
var Ne = (e, t = []) => ({ kind: "refused", problem: e, tables: t });
var wr = (e, t) => Ne({ ...t, why: `${Tr(e)}: ${t.why}` }, [e]);
function Jn(e, t, o) {
  let s = e.length > wS ? K(e.length, "column") : e.join(", "), p = t.y === void 0;
  return Y((p ? o.sharedLabels : [s, ...o.sharedLabels]).filter((m) => m !== "").join(" ") || s, NS);
}
function Vn(e) {
  let t = e.times[0] ?? 0;
  return { fromMs: t, untilMs: e.times.at(-1) ?? t, zone: e.zone };
}
var Zn = (e) => ({ zone: e.zone, areTicks: !LS, fieldsBefore: [] });
function qn(e) {
  let t = Vn(e), o = fd(e.times, e.zone), r = e.readAs === "columns" ? e.grid : null, s = e.readAs === "bars", p = pt(F([t.fromMs, t.untilMs]), o, Zn(e)).join(" \u2192 ");
  return { dataSpan: t, axisSpan: r ? { ...t, untilMs: r.endMs } : t, precision: o, step: e.grid?.step ?? o, spanLabels: s ? [] : [e.isZoned ? `${p} ${e.zone}` : p], periodStarts: r?.periodStarts ?? [] };
}
function Qn(e, t, o) {
  let r = [...e.units.values()];
  if (r.some((n) => n.length > 1)) {
    let n = r.flat().map((f) => f || "none"), a = n.includes("none") && new Set(n).size === PS;
    return { code: "units_mixed", why: `the values of a column carry different units (${n.join(", ")}). ` + (a ? "Name what the bare numbers are in as unit" : "Convert them to one unit, or chart the rows of each unit in a call of its own") };
  }
  let p = z(e.units.keys(), (n) => e.units.get(n)?.[0] ?? "");
  return (t.form === "bars" || o.form === "sparks") && p.size > 1 ? { code: "units_differ", why: (o.form === "sparks" ? "sparks" : "bars") + " share one scale, and the y columns are in different units (" + [...p].map(([n, a]) => `${a.join(", ")} in ${n || "no unit"}`).join("; ") + "). Call once for each unit" } : void 0;
}
function ea(e, t, o) {
  let r = qp(e, t);
  if ("code" in r) return wr(e, r);
  let p = t.form ?? r.form, m = Gn(e, r, t), n = Jn(Un(e, r), t, m), a = m.readings.some((A) => A.isZoned), f = a ? o.zone : "UTC", { series: i, emptyNames: x, times: l, grid: u } = Yn({ reading: m, fallbackName: n, combine: Dn[t.combine ?? "sum"], zone: f }), d = qn({ times: l, grid: u, readAs: r.form, zone: f, isZoned: a }), c = Qn(m, r, t) ?? Pn({ reading: m, roles: r, request: t, series: i }) ?? Fn({ roles: r, request: t, series: i, timeline: d });
  if (c !== void 0) return wr(e, c);
  let g = (t.marks ?? []).map((A) => Bn({ mark: A, drawnForm: p, axisSpan: d.axisSpan, isZoned: a })), T = e.isReadAtInstants !== true && a && u !== null && o.nowMs !== null && o.nowMs >= d.dataSpan.untilMs && o.nowMs < u.endMs, L = x.length > 0, _ = Et(m.droppedColumns.map((A) => A.sentence), bS, "more column"), w = [...L ? [`${x.length} with no value, not drawn: ` + Y(x.join(", "), An)] : [], ...g.filter((A) => typeof A === "string"), ...T ? [YS] : []];
  return { kind: "data", form: p, source: e.source, path: e.path, isSeries: e.isSeries === true, subject: n, hasCombinedRows: so(m), series: i, timeline: d, marks: g.filter((A) => typeof A !== "string").toSorted((A, Ue) => A.ms - Ue.ms), leftOutNotes: _, notes: w };
}
function ta({ rows: e, listColumns: t = [] }) {
  return t.length === 0 && e.every((o) => o.every((r) => r === null || !(BS.test(String(r)) || mr(r) || le(r).kind === "time")));
}
function kr(e, t, o) {
  if (e.length >= IS) return Ne({ code: "too_long", why: `The data is 64 KiB or longer: too long to chart, and it may be cut short. ${Ir}` });
  let s = Lr(e);
  if (s.some((T) => T.isCut)) return Ne({ code: "cut_short", why: `That result was cut short or saved to a file, so part of it is missing. ${Ir}` });
  if (!(s.length > 0)) {
    let T = US.test(e) && !FS.test(e);
    return Ne(T ? { code: "cut_short", why: `That result is JSON that does not close, so it was cut short. ${Ir}` } : { code: "no_table_read", why: `That result holds no rows: it has no table and no list of records of ${dr} columns or fewer. Pass the rows as data, as JSON records or as the text of a CSV, TSV or markdown table, with only the columns to chart` });
  }
  let [n, ...a] = wn(s, t);
  if (n === void 0 || a.length > 0) return Ne({ code: "table_unpicked", why: `That result is not a table: there are ${s.length} in it. To pick one, name a column that only it has, or pass its rows as data` }, s.slice(0, bn));
  let i = ea(n, t, o), x = n.unparsedLines ?? 0, l = s.filter((T) => T !== n && !ta(T)), u = l.length > 0, d = x > 0, c = [...u ? [K(l.length, "other table")] : [], ...d ? [`${K(x, "line")} outside any table`] : []];
  return i.kind === "refused" || c.length === 0 ? i : { ...i, leftOutNotes: [...i.leftOutNotes, "only part of that result is charted: it also holds " + c.join(" and ")] };
}
var ye = (e) => e.values[0] ?? 0;
var Pr = 1e9;
var oa = 2;
var Dr = 10;
var Hg = 100;
var we = 1e-9;
var Gg = 5;
var Kg = 10;
var zg = 10;
var Fr = 1e6;
var Jg = 1e4;
var Vg = 3;
var Zg = 2;
var qg = 2;
var Qg = 12;
var Ur = 1e12;
var tO = 86400;
var oO = 3600;
var rO = 1e-6;
var sO = 1e-3;
var pO = 60;
var mO = 1e-9;
var aO = 1e15;
var fO = 1e3;
function xt(e, t) {
  return e > 0 ? Math.min(Math.max(0, t - 1 - Math.floor(Math.log10(e) + we)), Hg) : 0;
}
var ra = (e, t) => Math.abs(e).toLocaleString("en-US", { minimumFractionDigits: e === 0 ? 0 : t });
var sa = (e) => e < 0 ? "-" : "";
function ze(e, t) {
  let o = t.map((m) => m * e.multiplesPerUnit), r = (m) => o.some((n) => {
    let a = Math.abs(n), f = Number(a.toFixed(m));
    return Math.abs(f - a) > we * a && (m < e.decimals || Math.floor(Math.log10(f)) > Math.floor(Math.log10(a)));
  }), s = 0;
  while (r(s)) s++;
  if (s === 1 && e.before !== "" && e.after === "") s = oa;
  return o.map((m) => {
    let n = Number(m.toFixed(s));
    return sa(n) + e.before + ra(n, s) + (n === 0 ? e.afterZero : e.after);
  });
}
var Br = { "": 1, M: Fr, G: Pr, T: Ur };
var pa = (e, t, o) => (r) => Math.max(o && e < Jg ? oa : 0, xt(e / r, Vg), xt(t / r, Zg));
var ma = { "": 1, M: Fr, B: Pr, T: Ur };
var TO = [1, 2, 5];
var gO = ["$", "\u20AC", "\xA3", "\xA5"];
var na = [{ ns: mO, \u00B5s: rO, ms: sO, s: 1, min: pO, h: oO, d: tO }, { B: 1, kB: fO, MB: Fr, GB: Pr, TB: Ur, PB: aO }, { "%": 1 }];
function ut(e, t) {
  let o = na.find((l) => Object.hasOwn(l, e)), r = gO.includes(e), s = o ?? (r ? ma : Br), p = Math.max(...t.map(Math.abs)), m = pa(p, Math.max(...t) - Math.min(...t), r), n = Object.entries(s).filter(([, l], u) => u === 0 || l <= (p === 0 ? 1 : p)), [a, f] = n.filter(([, l]) => m(l) <= qg).at(-1) ?? n.at(-1) ?? ["", 1], x = s === Br && e !== "" ? ` ${Y(e, Qg)}` : "";
  return { multiplesPerUnit: 1 / f, before: r ? e : "", after: `${a}${x}`, afterZero: o ? a : x, decimals: m(f) };
}
var fo = (e, t) => ze(ut(t, [e]), [e])[0] ?? "";
function Ye(e, t, o = {}) {
  let { peers: r = t, minWritten: s = 0 } = o, p = ut(e, r);
  return Math.min(...[...t, ...r].filter((n) => n !== 0).map(Math.abs)) * p.multiplesPerUnit < Math.max(s, Gg / Dr ** p.decimals) ? t.map((n) => fo(n, e)) : ze(p, t);
}
var aa = (e) => e === 0 ? 1 : Math.abs(e) / Kg;
var fa = (e, t) => !(t - e > we * Math.abs(t));
var ia = (e, t) => ({ ...e, multiplesPerUnit: 1, decimals: Math.max(e.decimals, xt(t, 1)) });
function IO(e, [t, o], r) {
  let s = t * e.multiplesPerUnit, p = o * e.multiplesPerUnit, m = (fa(s, p) ? aa(p) : p - s) / r, n = Dr ** Math.floor(Math.log10(m)), a = n * (TO.find((l) => l * n >= m) ?? zg), f = Math.floor(s / a + we), i = f * a, x = Math.max(1, Math.ceil((p - i) / a - we));
  return { ticks: ze(ia(e, a), ne(x + 1).map((l) => (f + l) * a)).map((l, u) => ({ position: u / x, label: l })), positionOf: (l) => (l * e.multiplesPerUnit - i) / (x * a) };
}
function NO(e, [t, o], r) {
  let s = Math.floor(Math.log10(t) + we), p = Math.max(1, Math.ceil(Math.log10(o) - we) - s), m = Math.ceil(p / r), n = Math.ceil(p / m);
  return { ticks: ne(n + 1).map((a) => ({ position: a / n, label: fo(Dr ** (s + a * m), e) })), positionOf: (a) => (Math.log10(a) - s) / (n * m) };
}
var vr = { title: { host: void 0, light: "#1f1f1f", dark: "#f2f0eb" }, words: { host: void 0, light: "#2b2b2b", dark: "#e6e4df" }, quiet: { host: "ansi256(8)", light: "#6b6b6b", dark: "#a3a19b" }, blue: { host: "ansi256(4)", light: "#2a6fdb", dark: "#6ea8ff" }, orange: { host: "ansi256(3)", light: "#b85c00", dark: "#f0a04b" }, green: { host: "ansi256(2)", light: "#1a7f4e", dark: "#5fc98f" }, pink: { host: "ansi256(5)", light: "#b0307f", dark: "#ee82c4" }, teal: { host: "ansi256(6)", light: "#0b7c8a", dark: "#5cc8d6" }, red: { host: "ansi256(1)", light: "#c0392b", dark: "#ff8a7a" }, violet: { host: "ansi256(13)", light: "#6f42c1", dark: "#b794f6" }, olive: { host: "ansi256(10)", light: "#5c7a00", dark: "#b5d94c" } };
var la = ["blue", "orange", "green", "pink", "teal", "red", "violet", "olive"];
var io = "blue";
var VO = 100;
var qO = 10;
var QO = 3;
var t_ = 0.1;
var r_ = 2;
var s_ = 1e-9;
var p_ = 2;
var n_ = 8e3;
var f_ = 2;
var l_ = 2;
var u_ = 1;
var c_ = 16;
var y_ = 24;
var V = (e) => e[0]?.unit ?? "";
var Hr = "red";
function lo(e, t, o) {
  let r = B(t), s = e.map(ye), p = Math.max(...e.map((l) => l.size)), m = p === 0 ? 1 : p, n = la.filter((l) => l !== Hr), a = o.measures.length <= n.length, f = new Map(a ? U(o.measures, n) : []), x = o.isSummed && r > 0 && t.every((l) => l >= 0) ? Ye("%", s.map((l) => VO * l / r)).map((l) => [["", "", l]]) : s.map(() => []);
  return U(e, U(Ye(V(e), s), x)).map(([l, [u, d]]) => ({ key: "", name: l.name, stats: [["", u, ""], ...d], ink: ye(l) < 0 ? Hr : f.get(l.measure) ?? io, relativeLength: ye(l) / m }));
}
var Ve = { key: "", ink: io };
var xa = (e, t) => ({ ...Ve, name: "total", stats: [["", Ye(V(e), [B(t)], { peers: e.map(ye) })[0] ?? "", ""]], relativeLength: 0 });
function ua(e) {
  let t = e.request.combine === "sum", r = e.request.top !== void 0 || e.selection.cutSeries.length > 0 ? e.selection.topSeries : e.allSeries, s = e.allSeries.flatMap((n) => n.values), p = lo(r, s, { isSummed: t, measures: F(e.allSeries.map((n) => n.measure)) }), m = t ? [...p, xa(r, s)] : p;
  return { form: "bars", header: e.frame.header, rows: m, notes: e.frame.notes };
}
function xo(e) {
  let t = e.samples.map((o) => o.value).filter((o) => o !== null);
  return { ...e, values: t, size: Math.max(...t.map(Math.abs)), isOthers: false };
}
var uo = (e) => e.map((t) => t.name).join(", ");
function da(e) {
  return e === 1 ? "this is the largest" : `these are the ${e} largest`;
}
function ca(e) {
  let t = e.cutSeries.length;
  if (t === 0) return [];
  let o = e.form === "bars" && t >= qO * e.drawnAloneCount, r = t <= QO, s = `${jo(e.form, t)} ` + (e.isRestDrawnAsOne ? "drawn as one" : "not shown") + (r ? ` (${uo(e.cutSeries)})` : "") + `: ${da(e.drawnAloneCount)} of ` + (e.drawnAloneCount + t).toLocaleString("en-US") + (o ? ". For a distribution, pass counts per range" : "");
  return e.top !== void 0 && e.top > e.formLimit ? [s, `top ${e.top}: a chart draws at most ${jo(e.form, e.formLimit)}` + (e.isRestDrawnAsOne ? ", and the rest as one" : "")] : [s];
}
function ya(e, t) {
  let o = [], r = /* @__PURE__ */ new Map(), s = [];
  for (let p of e) {
    let m = r.get(p.unit) ?? o.length, n = o[m];
    if (n !== void 0 && (t || p.size === 0 || n.size <= p.size * ls)) s.push(m);
    else r.set(p.unit, o.length), s.push(o.length), o.push(p);
  }
  return [...z(U(e, s), (p) => p[1]).values()].map((p) => p.map((m) => m[0]));
}
var ha = (e, t, o) => ({ title: t.title ?? "", facts: o, source: Tr(e) });
var Ta = (e) => [...z(e.flatMap((t) => t.samples), (t) => t.ms)].toSorted(([t], [o]) => t - o).map(([t, o]) => {
  let r = o.map((s) => s.value).filter((s) => s !== null);
  return { ms: t, value: r.length > 0 ? B(r) : null };
});
var Ze = (e, t) => xo({ unit: V(e), name: t, measure: e[0]?.measure ?? "", samples: Ta(e) });
function Sa(e, t) {
  if (e.length <= r_) return [];
  let o = new Map(Ze(e, "").samples.map(({ ms: s, value: p }) => [s, p])), r = ({ ms: s, value: p }) => p !== null && Math.abs(p_ * p - (o.get(s) ?? 0)) <= s_ * Math.abs(p);
  return e.filter((s) => s.size > 0 && s.samples.every(r)).map((s) => `${s.name} equals the sum of the other ${t}: if it is their total, leave it out`);
}
function co(e, t) {
  let o = { ms: 0, value: -1 / 0 };
  for (let { ms: r, value: s } of e.samples) if (s !== null && s > o.value) o = { ms: r, value: s };
  return op(t, o.ms);
}
function ga(e, t) {
  let o = Ze(e, "total"), [r = ""] = Ye(o.unit, [Math.max(...o.values)]);
  return `total max ${r} at ${co(o, t)}`;
}
var Oa = (e, t) => e.name < t.name ? -1 : 1;
var _a = (e) => ({ ...Ze(e, `${e.length} others`), isOthers: true });
function Ca(e, t, o) {
  let r = e.toSorted((m, n) => m.size !== n.size ? n.size - m.size : Oa(m, n)).slice(0, o && e.length === t + 1 ? t + 1 : t), s = e.filter((m) => !r.includes(m)), p = o && s.length > 0;
  return { topSeries: r, cutSeries: s, drawnSeries: p ? [...r, _a(s)] : r };
}
var yo = { key: "", ink: "quiet" };
var ho = U([..."abcdefgh"], la).map(([e, t]) => ({ key: e, ink: t }));
function La(e, t, o) {
  let r = o.flatMap((m) => m.values), s = new Map(U(t.topSeries, ho)), p = U(lo(t.drawnSeries, r, { isSummed: true, measures: [] }), t.drawnSeries).map(([m, n]) => ({ ...m, ...s.get(n) ?? yo, share: ye(n) / B(r) }));
  return { form: "share", header: e.header, rows: p, notes: e.notes };
}
var Ea = (e, t, o) => ({ form: "sparks", header: e.header, rows: t, medianStep: o, notes: e.notes });
function To(e) {
  let t = B(e.map((r) => r.samples.length - r.values.length));
  return t > 0 ? [`${K(t, "missing sample")}, left blank where the gap is wide enough to see`] : [];
}
var Aa = (e, t) => ([o, [r, s]]) => ({ ...e.identityOf(o), name: o.name, stats: s, stretches: r.map((p) => p.map(t)) });
var ba = (e, t) => (o) => ({ x: e(o.ms), y: t.positionOf(o.top) });
function Ra({ seriesOfPlot: e, axisValues: t, timeline: o, isSummed: r }) {
  let s = V(e), p = e.map((l) => l.values), m = (l) => Ye(s, l, { peers: t, minWritten: u_ }), n = m(p.map((l) => Math.max(...l))), a = m(p.map((l) => l.at(-1) ?? 0)), f = m(p.map((l) => Math.min(...l))), i = m(p.map((l) => B(l) / l.length)), x = Ye(s, p.map(B));
  return e.map((l, u) => {
    if (l.values.length === 1) return [["last", a[u] ?? "", ""]];
    let d = [["max", n[u] ?? "", `at ${co(l, o)}`], ["last", a[u] ?? "", ""], ["min", f[u] ?? "", ""], ["mean", i[u] ?? "", ""]];
    return r ? [...d, ["total", x[u] ?? "", ""]] : d;
  });
}
var Ia = (e, t) => ({ seriesOfPlot: e.seriesOfPlot, axisValues: t, timeline: e.data.timeline, isSummed: e.request.combine === "sum" });
function So(e) {
  let t = e.data.form === "columns", o = /* @__PURE__ */ new Map(), r = [];
  for (let f of e.seriesOfPlot) {
    let i = [], x = [];
    for (let l of f.samples) if (l.value === null) i.push(x), x = [];
    else {
      let u = (t ? o.get(l.ms) ?? 0 : 0) + l.value;
      o.set(l.ms, u), x.push({ ms: l.ms, top: u });
    }
    i.push(x), r.push(i.filter((l) => l.length > 0));
  }
  let s = r.flat(f_).map((f) => f.top), p = V(e.seriesOfPlot), m = [t ? 0 : Math.min(...s), Math.max(...s)], a = e.request.log === true ? NO(p, m, e.maxAxisSteps) : IO(ut(p, s), m, e.maxAxisSteps);
  return { ticks: a.ticks, rows: U(e.seriesOfPlot, U(r, Ra(Ia(e, s)))).map(Aa(e, ba(Mt(e.data.timeline), a))) };
}
var Ma = { onePlot: 5, severalPlots: 2 };
function Na({ topSeries: e, frame: { header: t, notes: o }, request: r, data: s }) {
  let { ticks: p, rows: m } = So({ seriesOfPlot: e, identityOf: () => Ve, maxAxisSteps: Ma.onePlot, request: r, data: s }), n = Mt(s.timeline), a = e.flatMap((f) => {
    let i = f.samples.map((x) => n(x.ms));
    return U(i, i.slice(1)).map(([x, l]) => l - x);
  }).toSorted((f, i) => f - i);
  return Ea({ header: { ...t, facts: [...t.facts, `each from ${p[0]?.label} to ${p.at(-1)?.label}`] }, notes: [...o, ...To(e)] }, m, a[Math.floor(a.length / l_)] ?? 1);
}
function wa(e) {
  let t = /* @__PURE__ */ new Map();
  for (let o of e.rows.flatMap((r) => r.stretches.flat())) {
    let r = o.y - (t.get(o.x) ?? 0);
    if (e.rows.length > 1 && r > 0 && r < t_) return true;
    t.set(o.x, o.y);
  }
  return false;
}
function ka(e, t, o) {
  let r = t.series.map((a) => a.name), s = (o.y ?? []).map((a) => a.toLowerCase());
  if (!(r.length > 1 && r.every((a) => s.includes(a.toLowerCase())) && e.flat().length === r.length)) return e;
  let m = (a) => r.indexOf(a.name), n = (a) => Math.min(...a.map(m));
  return e.map((a) => a.toSorted((f, i) => m(f) - m(i))).toSorted((a, f) => n(a) - n(f));
}
function Pa(e) {
  let t = Mt(e);
  return (o) => ({ position: t(o.ms), when: op(e, o.ms), label: o.label });
}
function Da(e) {
  let t = e.data.form === "columns", o = ka(e.groups.slice(0, Be), e.data, e.request), r = o.flat(), s = e.groups.slice(Be).flat(), p = new Map(U(r.filter((T) => !T.isOthers), r.length > 1 ? ho : [Ve])), m = (T) => p.get(T) ?? yo, n = Ma[o.length > 1 ? "severalPlots" : "onePlot"], a = o.map((T) => So({ seriesOfPlot: T, identityOf: m, maxAxisSteps: n, request: e.request, data: e.data })), f = e.data.timeline.periodStarts.length, i = r.length > o.length, x = `${f} columns do not fit, so they are drawn as ${i ? "lines, one for each series" : "a line"}`, l = s.length > 0, u = f > y_, d = t && a.some(wa), c = [...e.frame.notes, ...l ? [`${jo(e.data.form, s.length)} not shown (${uo(s)}): a chart has at most ${Be} plots`] : [], ...To(r)], g = [...u ? [`on a screen under about ${f + c_} characters wide, ${x}`] : [], ...d ? ["in a terminal, parts of a column thinner than a row may not show"] : []];
  return { form: t ? "columns" : "line", header: e.frame.header, plots: a, timeline: e.data.timeline, marks: e.data.marks.map(Pa(e.data.timeline)), notes: c, mergedColumnsNote: x, thinPartsNote: "the thinnest parts of a column are too thin to show here", modelOnlyNotes: g };
}
function Q_(e, t) {
  let o = t.combine === "sum", r = e.form === "columns" && !o, s = e.series.map(xo), p = e.form === "share" || e.form === "columns" && o && s.every((l) => l.unit === V(s)), m = r ? Be : k[e.form].maxCount, n = Ca(s, Math.min(t.top ?? k[e.form].defaultCount, m), p), a = e.hasCombinedRows && !o, f = e.form === "columns" && p && s.length > 1, i = ha(e, t, [...e.subject === "" ? [] : [e.subject], ...e.timeline.spanLabels, ...t.log ? ["log scale"] : [], ...a ? [`rows combined by ${t.combine}`] : [], ...f ? [ga(s, e.timeline)] : []]), x = [...e.leftOutNotes, ...e.notes, ...ca({ form: e.form, cutSeries: n.cutSeries, drawnAloneCount: n.topSeries.length, isRestDrawnAsOne: p, formLimit: m, top: t.top }), ...o ? Sa(s, k[e.form].plural) : []];
  switch (e.form) {
    case "bars":
      return ua({ frame: { header: i, notes: x }, selection: n, allSeries: s, request: t });
    case "share":
      return La({ header: i, notes: x }, n, s);
    case "sparks":
      return Na({ topSeries: n.topSeries, frame: { header: i, notes: x }, request: t, data: e });
    case "line":
    case "columns":
      return Da({ groups: r ? n.topSeries.map((l) => [l]) : ya(n.drawnSeries, e.form === "columns" || t.log === true), frame: { header: i, notes: x }, request: t, data: e });
  }
}
function Fa(e) {
  return e.label !== "" ? `mark at ${e.when}: ${e.label}` : `mark at ${e.when}`;
}
var Ua = (e) => "plots" in e ? [...e.notes, ...e.modelOnlyNotes] : e.notes;
var go = " \xB7 ";
var Wa = (e) => e.title === "" ? "" : ` "${e.title.replaceAll('"', "'")}"`;
function ja(e) {
  let t = [`${k[e.form].label}` + Wa(e.header), ...e.header.facts, `from ${e.header.source}`].join(go), o = ("plots" in e ? e.plots.flatMap((s) => s.rows) : e.rows).map((s) => {
    let p = "stretches" in s ? s.stretches.flat().length : 0;
    return `- ${s.name}: ` + [...s.stats.map((m) => m.filter((n) => n !== "").join(" ")), ...p > 0 ? [K(p, "point")] : []].join(go);
  }), r = [...("plots" in e ? e.marks : []).map((s) => Fa(s)), ...Ua(e).map((s) => `note: ${s}`)];
  return [t, ...Et(o, Xo(o, n_ - [t, ...r].join(`
`).length, (s) => s.length + 1).length, "more row"), ...r];
}
var va = (e) => (t) => new Set(t.shownNames.values()).size === e;
var Ha = (e, t, o) => (r, s) => {
  let p = s < e.lane.statsBeforeNames;
  return e.widthPastKey - r.end >= (p ? t : o);
};
var yt = 2;
var MC = 4;
var NC = 2;
var $a = 2;
var Ga = 0.125;
var ke = 0.5;
var Oo = 0.125;
var Xa = 2;
var PC = 0.4;
var Gr = 8;
var DC = 2;
var UC = 1;
var Ka = 40;
var WC = 16;
var vC = 8;
var za = 2;
var $C = 1;
var Ya = 1048576;
var KC = 0.5;
var Ja = 2;
var YC = 1;
var pe = 1;
function Va(e) {
  let t = e.rows.length === 1 ? e.rows[0] : void 0, o = t !== void 0 && e.headerTexts.includes(t.name), s = e.rows.some((p) => p.key) ? Xa : 0;
  return { rows: e.rows, lane: e.lane, fullNames: o ? [] : e.rows.map((p) => p.name), isNamedInHeader: o, indent: Math.max(0, e.left - yt), keyWidth: s, widthPastKey: e.columns - s - yt };
}
var me = (e) => Math.max(0, ...e.map(P));
var Za = (e, t, o) => o ? Math.min(Math.floor(e / DC), e - t.minWidth - pe) : e;
function Xr(e, t) {
  let o = e.lane.minWidth > 0, r = e.widthPastKey - (t.at(-1)?.end ?? 0), s = o && r >= Gr + e.lane.minWidth, p = kx(e.fullNames, Za(r, e.lane, s)), m = e.isNamedInHeader ? Math.min(e.indent, r) : me(p), n = s ? r - m - pe : 0, a = e.keyWidth + m + (s ? pe + n : 0);
  return { wantsLane: o, keyWidth: e.keyWidth, shownNames: new Map(U(e.rows, p)), laneLeft: e.keyWidth + m + pe, laneWidth: n, statsLeft: a > 0 ? a + yt : 0, statColumns: t };
}
var qa = (e, t) => Math.max(Math.min(e.isNamedInHeader ? e.indent : me(e.fullNames), t * PC), e.lane.minWidth > 0 ? Gr + e.lane.minWidth : 0);
var tL = [0, 1, 2];
var ef = (e) => Math.max(0, ...e.map((t) => t.stats.length));
function tf(e) {
  let t = [], o = -yt;
  for (let r of ne(ef(e))) {
    o += yt - pe;
    let s = [];
    for (let p of tL) {
      let m = me(e.map((n) => n.stats[r]?.[p] ?? ""));
      o += m > 0 ? pe + m : 0, s.push({ start: o - m, width: m });
    }
    t.push({ parts: s, end: o });
  }
  return t;
}
function he(e) {
  let t = Va(e), o = tf(e.rows).filter(Ha(t, Math.min(me(t.fullNames), Gr), qa(t, e.columns)));
  return ne(Math.max(0, o.length - e.lane.statsBeforeNames) + 1).map((r) => Xr(t, o.slice(0, o.length - r))).find(va(new Set(t.fullNames).size)) ?? Xr(t, o);
}
var of = (e, t, o) => ({ shapes: e, rows: t + 1, lane: { x: o, y: t } });
var rf = (e) => ({ kind: "text", at: e.at, text: e.text, ink: e.ink, isAboutPartsLeftOut: false });
function I(e) {
  return e.text.trim() === "" ? [] : [rf(e)];
}
var sf = (e, t, o) => t > 0 ? e.width - P(o) : 0;
var pf = (e, t) => e.wantsLane ? "title" : t.ink;
var mf = (e, t, o) => o === UC ? pf(e, t) : "quiet";
function Te(e, t, o) {
  let r = [...I({ at: { x: 0, y: o }, text: t.key, ink: t.ink }), ...I({ at: { x: e.keyWidth, y: o }, text: e.shownNames.get(t) ?? "", ink: e.wantsLane ? "words" : "title" })];
  for (let [s, p] of e.statColumns.entries()) for (let [m, n] of p.parts.entries()) {
    let a = t.stats[s]?.[m] ?? "";
    r.push(...I({ at: { x: e.statsLeft + n.start + sf(n, m, a), y: o }, text: a, ink: mf(e, t, m) }));
  }
  return of(r, o, e.laneLeft);
}
var _o = { minWidth: 0, statsBeforeNames: 1 };
var nf = { minWidth: 8, statsBeforeNames: 1 };
var af = (e, t, o) => ({ kind: "bar", at: e, width: Math.max(Oo, Math.abs(t.relativeLength) * o.laneWidth), ink: t.ink, isHatched: t.relativeLength < 0 });
function ff(e, t, o) {
  let r = he({ rows: t, columns: e.columns, lane: nf, headerTexts: o, left: 0 });
  return { shapes: t.flatMap((s, p) => {
    let m = Te(r, s, e.rows + p);
    return s.relativeLength !== 0 && r.laneWidth > 0 ? [...m.shapes, af(m.lane, s, r)] : m.shapes;
  }), rows: e.rows + t.length };
}
var Co = (e) => Math.round(e * Ya) / Ya;
var lf = (e, t) => ({ key: e.key, ink: e.ink, row: t });
function xf(e, t) {
  let o = e.stretches.at(-1)?.at(-1);
  return o ? [lf(e, Math.floor(t(o.y)))] : [];
}
var uf = (e, t) => z(e.filter((o) => o.key).flatMap((o) => xf(o, t)), (o) => o.row);
var Kr = [11, 7, 5];
var df = (e, t) => Math.floor((e - 1) / t);
var cf = (e, t) => Math.max(1, Math.min(df(Kr.at(e - 1) ?? Math.min(...Kr), t), MC));
var yf = (e, t, o) => e.ticks.filter((r) => r.position >= t && r.position <= o);
function hf(e) {
  let t = /* @__PURE__ */ new Map(), o = [];
  for (let r of e) {
    o.push({ ...r, stretches: r.stretches.map((s) => s.map((p) => ({ x: p.x, y: p.y - (t.get(p.x) ?? 0) }))) });
    for (let s of r.stretches.flat()) t.set(s.x, s.y);
  }
  return o;
}
function Tf(e, t, o) {
  let r = t.form === "columns", s = r && !o ? hf(e.rows) : e.rows, p = s.flatMap((T) => T.stretches.flat()).map((T) => T.y), m = r ? 0 : Math.min(...p), n = Math.max(...p), a = e.ticks.length - 1, f = yf(e, m, n).length >= NC, i = f ? m : 0, x = f ? n : 1, u = n > m ? cf(t.plots.length, (x - i) * a) : 1, d = (T) => Co((1 - T) * a * u), c = (T) => Math.round(d(T)), g = (T) => ke + d(T) - c(x);
  return { ...e, rows: s, yOf: g, height: c(i) - c(x) + 1, endKeys: uf(o ? [] : s, g) };
}
function Sf(e) {
  return e.some((o) => o.rows.some((r) => r.key)) ? Xa : 0;
}
function gf(e) {
  let t = Math.max(0, ...e.flatMap((o) => [...o.endKeys.values()]).map((o) => o.length));
  return t > 0 ? pe + t : 0;
}
function Of(e, t, o) {
  let r = Math.max(1, t - 1), s = (m) => e + Math.floor(Co(m * o)) * t, p = (m) => Math.min(s(m), s((o - 1) / o)) + r / $a;
  return { left: e, width: t * o, columnWidth: r, xOf: s, tickXOf: p };
}
function _f(e, t) {
  let o = (r) => e + r * (t - ke);
  return { left: e, width: t, columnWidth: 0, xOf: o, tickXOf: o };
}
function zr(e, t, o) {
  let r = me(e.flatMap((n) => n.ticks.map((a) => a.label))) + Ja, s = t - r, p = o > 0 ? Math.floor(s / o) : 0;
  return p === 0 ? _f(r, s) : Of(r, p, o);
}
function Cf(e, t) {
  let o = e.plots, r = zr(o, t - Sf(o), e.timeline.periodStarts.length), s = r.columnWidth > 0, p = o.map((m) => Tf(m, e, s));
  return s ? { area: r, drawnPlots: p } : { area: zr(o, t - gf(p), 0), drawnPlots: p };
}
var Lf = (e, t) => ({ kind: "axisRow", at: e, gridWidth: t });
var Ef = (e) => e.map((t, o) => ({ ink: t.ink, height: o > 0 ? 0 : Oo }));
var Af = (e, t, o) => ({ kind: "stack", at: e, width: t.columnWidth, parts: o });
var bf = (e, t) => ([o, r]) => {
  let s = [], p = { y: e, position: 0 };
  for (let m of r) {
    if (m.position > p.position) s.push({ height: p.y - m.y, ink: m.ink });
    p = m;
  }
  return Af({ x: o, y: e }, t, e - p.y < Oo ? Ef(s) : s);
};
var Rf = (e) => z(e.rows.flatMap((t) => t.stretches.flat().map((o) => ({ ...e.toCells(o), position: o.y, ink: t.ink }))), (t) => t.x);
var If = (e) => [...Rf(e)].map(bf(e.toCells({ x: 0, y: 0 }).y, e.area));
var Mf = (e) => (t) => ({ x: e.tickXOf(t.position), text: Y(t.label, WC) });
var Lo = (e, t) => ({ kind: "line", ink: t, points: e });
var Nf = (e, t) => [e.x - ke, e.x + ke].map((o) => ({ x: Math.max(t.left, Math.min(o, t.left + t.width - Ga)), y: e.y }));
var wf = (e) => [...z(e, (t) => Math.floor(t.x / ke)).values()].flatMap((t) => {
  let o = t.toSorted((s, p) => s.y - p.y), r = [t[0], o[0], o.at(-1), t.at(-1)];
  return t.filter((s) => r.includes(s));
});
var kf = (e, t) => e.length > 1 ? wf(e) : Nf(e[0], t);
function Pf(e) {
  let t = [], o = [], r = -1 / 0;
  for (let [s, ...p] of e) {
    if (s === void 0) continue;
    let m = p.length === 0 ? ke : 0;
    if (s.x - m - r < YC) o.push(s, ...p);
    else {
      let a = [s, ...p];
      t.push(a), o = a;
    }
    r = (p.at(-1) ?? s).x + m;
  }
  return t;
}
function Df({ rows: e, area: t, toCells: o }) {
  let r = [];
  for (let s of e.toReversed()) for (let p of Pf(s.stretches.map((m) => m.map(o)))) r.push(Lo(kf(p, t), s.ink));
  return r;
}
var Ff = (e, t) => ne(t.width).map((o) => e.some((s) => s.column === o) ? "\u252C" : "\u2500").join("");
var Uf = (e, t) => I({ at: { x: e.area.left - 1, y: e.room.rows }, text: `\u2514${Ff(t, e.area)}`, ink: "quiet" });
var Bf = (e, t, o) => e.flatMap((r) => I({ at: { x: t.left + r.start, y: o }, text: r.text, ink: "quiet" }));
var Wf = (e) => (t) => (e.periodStarts.findIndex((o) => o >= t) + KC) / e.periodStarts.length;
var jf = (e, t) => (o) => Math.floor(e.tickXOf(t(o)) - e.left);
function vf(e) {
  let t = e.area.columnWidth > 0, o = jf(e.area, t ? Wf(e.timeline) : Mt(e.timeline));
  return Dd(e.timeline.dataSpan, e.timeline.step, { columns: e.area.width, columnOf: o, areCentred: t });
}
function Hf(e) {
  let t = vf(e), o = e.room.rows + 1, r = [], s = o + 1, p;
  for (let m of e.flags.filter((n) => n.text !== "")) {
    let n = P(m.text), a = Math.floor(Math.min(m.x, e.room.columns - n));
    if (p === void 0 || a < p) s += 1;
    r.push(...I({ at: { x: a, y: s - 1 }, text: m.text, ink: "words" })), p = a + n + pe;
  }
  return { shapes: [...Uf(e, t), ...Bf(t, e.area, o), ...r], rows: s };
}
var $f = (e, t, o) => (r) => ({ x: e.xOf(r.x), y: o + t.yOf(r.y) });
function Gf({ room: e, chart: t, plotsLayout: o, headerTexts: r }) {
  let { area: s, drawnPlots: p } = o, m = s.columnWidth > 0, n = he({ rows: p.flatMap((c) => c.rows), columns: e.columns, lane: _o, headerTexts: r, left: s.left }), a = n.shownNames.size + n.statColumns.length > 0, f = t.marks.map(Mf(s)), i = m ? If : Df, x = [], l = e.rows;
  for (let c of p) {
    for (let L of a ? c.rows : []) {
      let _ = Te(n, L, l);
      x.push(_.shapes), l = _.rows;
    }
    let g = l, T = g + c.height;
    for (let L = g; L < T; L++) {
      let _ = c.ticks.find((A) => g + Math.floor(c.yOf(A.position)) === L), w = _?.label ?? "";
      x.push(I({ at: { x: s.left - Ja - P(w), y: L }, text: w, ink: "quiet" }), [Lf({ x: s.left - 1, y: L }, _ ? s.width + ke : 0)]);
    }
    x.push(i({ rows: c.rows, area: s, toCells: $f(s, c, g) }));
    for (let [L, _] of c.endKeys) for (let [w, A] of _.entries()) x.push(I({ at: { x: s.left + s.width + pe + w, y: g + L }, text: A.key, ink: A.ink }));
    x.push(f.map((L) => Lo([g, T - Ga].map((_) => ({ x: L.x, y: _ })), "quiet"))), l = T;
  }
  let u = Hf({ room: { columns: e.columns, rows: l }, timeline: t.timeline, area: s, flags: f }), d = t.form === "columns" && !m;
  return { shapes: [...x.flat(), ...u.shapes], rows: u.rows, notes: d ? [t.mergedColumnsNote] : [] };
}
var Xf = (e, t) => ({ kind: "band", at: { x: 0, y: e }, rows: za, parts: t });
var Kf = (e, t) => I({ at: { x: Math.floor(e.middle), y: t }, text: e.key, ink: e.ink });
var zf = (e, t, o) => ({ ...e, width: t, middle: o - t / $a });
function Yf(e, t) {
  let o = t.map((i) => i.share > 0 ? Math.max(i.share * e.columns, $C) : 0), r = B(o) - e.columns, s = o.indexOf(Math.max(...o)), p = [], m = 0;
  for (let [i, x] of t.entries()) {
    let l = (o[i] ?? 0) - (i === s ? r : 0);
    if (l > 0) m += l, p.push(zf(x, l, m));
  }
  let n = e.rows + za, a = n + 1, f = he({ rows: t, columns: e.columns, lane: _o, headerTexts: [], left: 0 });
  return { shapes: [Xf(e.rows, p), ...p.flatMap((i) => Kf(i, n)), ...t.flatMap((i, x) => Te(f, i, a + x).shapes)], rows: a + t.length };
}
var Jf = (e, t, o) => Math.abs(t - e) >= Math.abs(o - e) ? t : o;
var Vf = (e) => (t) => Math.min(e - 1, Math.floor(t * e));
function Zf(e, t) {
  let o = Array.from(Array(t), () => null), r = e.flat().map((m) => m.y), s = B(r) / r.length, p = Vf(t);
  for (let m of e) for (let [n, a] of m.entries()) {
    let f = p(a.x), i = Math.max(f, p(m[n + 1]?.x ?? a.x) - 1);
    for (let x = f; x <= i; x++) o[x] = Math.max(Oo, Jf(s, a.y, o[x] ?? a.y));
  }
  return o;
}
var qf = (e, t, o) => Zf(e.stretches, o).flatMap((r) => Array.from(Array(Math.floor(t.laneWidth / o)), () => r));
var Qf = { minWidth: 16, statsBeforeNames: 0 };
var ei = (e, t, o) => ({ kind: "strip", at: e, heights: t, ink: o });
function ti(e, t, o) {
  let r = he({ rows: t.rows, columns: e.columns, lane: Qf, headerTexts: o, left: 0 }), s = Math.min(r.laneWidth, Math.round(1 / t.medianStep) + 1);
  return { shapes: t.rows.flatMap((p, m) => {
    let n = Te(r, p, e.rows + m);
    return [...n.shapes, ei(n.lane, qf(p, r, s), p.ink)];
  }), rows: e.rows + t.rows.length };
}
function oi(e, t, o) {
  switch (e.form) {
    case "bars":
      return { ...ff(t, e.rows, o), notes: [] };
    case "share":
      return { ...Yf(t, e.rows), notes: [] };
    case "sparks":
      return { ...ti(t, e, o), notes: [] };
    case "line":
    case "columns": {
      let r = Cf(e, t.columns);
      return r.area.width >= vC ? Gf({ room: t, chart: e, plotsLayout: r, headerTexts: o }) : void 0;
    }
  }
}
function qe(e, t, o) {
  let r = t.flatMap((s) => It(s, e.columns));
  return { shapes: r.flatMap((s, p) => I({ at: { x: 0, y: e.rows + p }, text: s, ink: o })), rows: e.rows + r.length };
}
var ri = (e, t, o) => I({ at: { x: t + pe, y: e - 1 }, text: `${go.trimStart()}${o}`, ink: "quiet" });
var si = () => P(go);
function pi(e, t) {
  let o = [t.title, ...t.facts].filter((m) => m !== ""), r = [], s = e.rows, p = 0;
  for (let [m, n] of o.entries()) {
    let a = p + si() + P(n);
    if (m === 0 || a > e.columns) {
      let i = qe({ columns: e.columns, rows: s }, [n], m === 0 ? "title" : "quiet");
      r.push(...i.shapes), s = i.rows, p = P(n);
    } else r.push(...ri(s, p, n)), p = a;
  }
  return { shapes: r, rows: s, texts: o };
}
var Eo = (e, t) => ({ columns: e, rows: t.rows, shapes: t.shapes });
var Yr = (e, t) => Eo(t, qe({ columns: t, rows: 0 }, ja(e), "words"));
var mi = (e, t) => ({ kind: "text", at: { x: 0, y: t }, text: e, ink: "quiet", isAboutPartsLeftOut: true });
function ni(e, t) {
  let o = It(t, e.columns);
  return { shapes: o.map((r, s) => mi(r, e.rows + s)), rows: e.rows + o.length };
}
function ai(e, t) {
  if (t < Ka) return Yr(e, t);
  let o = pi({ columns: t, rows: 0 }, e.header), r = oi(e, { columns: t, rows: o.rows }, o.texts);
  if (r === void 0) return Yr(e, t);
  let s = qe({ columns: t, rows: r.rows }, [...e.notes, ...r.notes], "quiet"), m = e.form === "columns" ? ni({ columns: t, rows: s.rows }, e.thinPartsNote) : { shapes: [], rows: s.rows };
  return Eo(t, { shapes: [...o.shapes, ...r.shapes, ...s.shapes, ...m.shapes], rows: m.rows });
}
var ii = (e, t, o) => ({ glyph: e, ink: t, background: o });
var qE = 0.5;
var eA = 2;
var ee = 8;
var oA = 3;
var sA = 10240;
var li = 2;
var Jr = 4;
var Ao = " ";
var xi = "\u2588";
var nA = "\u2586";
var aA = "\u2592";
var ui = (e, t) => e.filter((o) => t.slice(0, eA).includes(o));
function bo(e, t, o) {
  let r = e.map((i) => ({ ink: i.ink, size: Math.min(i.to, t + ee) - Math.max(i.from, t) })).filter((i) => i.size >= qE), s = r.toSorted((i, x) => x.size - i.size), [p] = s;
  if (p === void 0) return;
  let m = Math.round((e.at(-1)?.to ?? t) - t);
  if (m < ee) {
    let i = o[m];
    return i ? { glyph: i, ink: p.ink } : void 0;
  }
  let [n = p, a] = ui(r, s), f = o[Math.round(n.size / (n.size + (a?.size ?? 0)) * ee)];
  return f ? ii(f, n.ink, a?.ink) : { glyph: xi, ink: p.ink };
}
var Ro = { glyph: "\u2508", ink: "quiet" };
var di = (e) => e > 0 ? "\u2524" : "\u2502";
var ci = { glyph: Ao, ink: "words" };
function yi(e) {
  let t = Array.from({ length: e.rows * e.columns }, () => ci);
  function o(r) {
    return Number.isInteger(r.x) && Number.isInteger(r.y) && r.x >= 0 && r.x < e.columns ? r.y * e.columns + r.x : -1;
  }
  return { cellAt: (r) => t[o(r)], set: (r, s) => {
    let p = o(r);
    if (t[p] !== void 0) t[p] = s;
  }, rows: () => ne(e.rows).map((r) => t.slice(r * e.columns, (r + 1) * e.columns)) };
}
var hi = (e, t) => ({ glyph: t < oA ? "\u2501" : "\u2580", ink: e.ink });
var Ti = ["", "\u2581", "\u2582", "\u2583", "\u2584", "\u2585", "\u2586", "\u2587"];
var Si = [1, 2, 4, 64, 8, 16, 32, 128];
var gi = ["", "\u258F", "\u258E", "\u258D", "\u258C", "\u258B", "\u258A", "\u2589"];
var Oi = (e, t, o) => ({ from: e, to: t, ink: o });
function Io(e, t, o) {
  let r = (s) => t(s) * ee;
  return Go(e, r, o).map(({ part: s, end: p }) => Oi(p - r(s), p, s.ink));
}
function _i(e, { at: t, width: o, parts: r }) {
  let s = Math.ceil(t.y), p = (s - t.y) * ee, m = Io(r, (f) => f.height, p), n = m.at(-1)?.to ?? 0, a = /* @__PURE__ */ new Set();
  for (let f = 0; f < n; f += ee) {
    let i = bo(m, f, Ti);
    if (i === void 0) continue;
    let l = f < p ? hi(i, n - p) : i;
    a.add(l.ink).add(l.background);
    for (let u = 0; u < Math.round(o); u++) e.set({ x: t.x + u, y: s - 1 - f / ee }, l);
  }
  return r.every((f) => a.has(f.ink));
}
function Ci(e, { at: t, width: o, ink: r, isHatched: s }) {
  let p = gi[Math.max(1, Math.round(o * ee))];
  if (p !== void 0 && !s) {
    e.set(t, { glyph: p, ink: r });
    return;
  }
  for (let n = 0; n < Math.max(1, Math.round(o)); n++) e.set({ x: t.x + n, y: t.y }, { glyph: s ? aA : nA, ink: r });
}
var Li = (e, t) => Si[Math.floor((e - Math.floor(e)) * li) * Jr + Math.floor((t - Math.floor(t)) * Jr)] ?? 0;
var Mo = (e) => Si.reduce((t, o) => (e & o) === 0 ? t : t + 1, 0);
var Ei = (e) => (t) => Mo(t.bits) === e;
function Ai(e, t) {
  let o = e.lines ?? [], r = [...o.filter((m) => m.ink !== t.ink), { ink: t.ink, bits: (o.find((m) => m.ink === t.ink)?.bits ?? 0) | t.bits }], s = r.filter((m) => m.ink !== "quiet"), p = s.length > 0 ? s : r;
  return { glyph: String.fromCodePoint(sA + p.reduce((m, n) => m | n.bits, 0)), ink: p.findLast(Ei(Math.max(...p.map((m) => Mo(m.bits)))))?.ink ?? t.ink, lines: r };
}
function bi(e, { points: t, ink: o }) {
  for (let [r, s] of t.entries()) {
    let p = t[r - 1] ?? s, m = Math.ceil(Math.max(Math.abs(s.x - p.x) * li, Math.abs(s.y - p.y) * Jr, 1));
    for (let n = 0; n <= m; n++) {
      let a = p.x + (s.x - p.x) * n / m, f = p.y + (s.y - p.y) * n / m, i = { x: Math.floor(a), y: Math.floor(f) }, x = e.cellAt(i);
      if (!x || !(x.glyph === Ao || x === Ro || x.lines !== void 0)) continue;
      e.set(i, Ai(x, { ink: o, bits: Li(a, f) }));
    }
  }
}
function Ri(e, { at: t, text: o, ink: r }) {
  let s = Math.round(t.x);
  for (let p of Ce(o)) {
    let m = P(p);
    e.set({ x: s, y: t.y }, { glyph: p, ink: r });
    for (let n = 1; n < m; n++) e.set({ x: s + n, y: t.y }, { glyph: "", ink: r });
    s += m;
  }
}
var Ii = (e) => ({ text: e.glyph, ink: e.ink, background: e.background });
function Mi(e) {
  let t = [];
  for (let o of e.slice(0, e.findLastIndex((r) => r.glyph !== Ao) + 1)) {
    let r = t.at(-1);
    r && (r.ink === o.ink && r.background === o.background || o.glyph === Ao && r.background === void 0) ? r.text += o.glyph : t.push(Ii(o));
  }
  return t;
}
var Ni = (e) => Ti[Math.round(e * ee)] ?? xi;
function MA(e) {
  let t = yi(e), o = false, r = 0;
  for (let s of e.shapes) switch (s.kind) {
    case "text": {
      s.isAboutPartsLeftOut && !o ? r += 1 : Ri(t, s);
      break;
    }
    case "bar":
      Ci(t, s);
      break;
    case "stack":
      o = !_i(t, s) || o;
      break;
    case "line":
      bi(t, s);
      break;
    case "strip": {
      let { at: p, heights: m, ink: n } = s;
      m.forEach((a, f) => {
        if (a !== null) t.set({ x: p.x + f, y: p.y }, { glyph: Ni(a), ink: n });
      });
      break;
    }
    case "band": {
      let { at: p, rows: m, parts: n } = s, a = Io(n, (f) => f.width, 0);
      for (let f = 0; f < (a.at(-1)?.to ?? 0); f += ee) {
        let i = bo(a, f, gi);
        for (let x = 0; i !== void 0 && x < m; x++) t.set({ x: p.x + f / ee, y: p.y + x }, i);
      }
      break;
    }
    case "axisRow": {
      let { at: p, gridWidth: m } = s;
      t.set(p, { glyph: di(m), ink: "quiet" });
      for (let n = 1; n < m; n++) t.set({ x: p.x + n, y: p.y }, Ro);
      break;
    }
  }
  return t.rows().slice(0, e.rows - r).map(Mi);
}
var No = (e, t = "") => `fill="var(--${e})"${t} data-series="${e}"`;
var Vr = 2;
var ki = 0.7;
var jA = 4.5;
var Zr = 18;
var wo = 0.5;
var Pi = 8;
var HA = 13.3;
var GA = 0.125;
var ko = 0.1;
var te = (e) => (e * Zr).toFixed(1);
var Po = (e) => te(e.height) !== te(0);
var q = (e) => (e * Pi).toFixed(1);
var Se = (e, t) => `${q(e)},${te(t)}`;
var Do = (e, t, o = "") => `<line${o} x1="${q(e.x)}" y1="${te(e.y)}" x2="${q(t.x)}" y2="${te(t.y)}" stroke="var(--quiet)"/>`;
function Di(e) {
  let t = e.at.x + wo;
  return Do({ x: t, y: e.at.y }, { x: t, y: e.at.y + 1 });
}
var Fi = (e, t) => ({ x: t.end - t.part.width, y: e.at.y + ko, width: t.part.width, height: e.rows - Vr * ko, ink: t.part.ink });
var Ui = (e) => ({ x: e.at.x, y: e.at.y + (1 - ki) / Vr, width: e.width, height: ki, ink: e.ink });
var Bi = (e) => e.text.replace(/[&<>]/g, (t) => `&#${t.charCodeAt(0)};`);
function Wi(e) {
  let t = e.at.x + wo, o = e.at.y + wo;
  return Do({ x: t, y: o }, { x: t + e.gridWidth, y: o }, ' class="grid"');
}
var ji = (e) => e.isHatched ? ` fill-opacity=".45" stroke="var(--${e.ink})"` : "";
var vi = (e) => e.points.map((t) => Se(t.x, t.y)).join(" ");
var Fo = (e, t = "") => `<rect x="${q(e.x)}" y="${te(e.y)}" width="${q(e.width)}" height="${te(e.height)}" ${No(e.ink, t)}/>`;
var Hi = (e, t) => ({ x: e.at.x, y: t.end, width: e.width - GA, height: t.part.height, ink: t.part.ink });
var $i = (e, t) => e.heights.flatMap((o, r) => {
  let s = e.at.x + r, p = t - (o ?? 0) * (1 - Vr * ko);
  return [Se(s, p), Se(s + 1, p)];
});
function Gi(e) {
  let t = e.at.y + 1 - ko;
  return `${Se(e.at.x, t)} ${$i(e, t).join(" ")} ${Se(e.at.x + e.heights.length, t)}`;
}
var Xi = (e) => `stroke="var(--${e.ink})" data-series="${e.ink}"`;
var Ki = (e) => `textLength="${q(P(e.text))}"`;
var zi = (e) => `fill="var(--${e.ink})"` + (e.ink === "title" ? ' font-weight="600"' : "");
var Yi = (e) => (e.at.y + wo) * Zr + jA;
var Ji = (e) => `x="${q(e.at.x)}" y="${Yi(e)}"`;
function Vi(e) {
  switch (e.kind) {
    case "text":
      return `<text ${Ji(e)} ${Ki(e)} ${zi(e)}>${Bi(e)}</text>`;
    case "bar":
      return Fo(Ui(e), ji(e));
    case "stack":
      return Go(e.parts, (t) => -t.height, e.at.y).filter((t) => Po(t.part)).map((t) => Fo(Hi(e, t))).join("");
    case "axisRow": {
      let t = Di(e);
      return e.gridWidth > 0 ? `${t}${Wi(e)}` : t;
    }
    case "strip":
      return `<polygon points="${Gi(e)}" ${No(e.ink)}/>`;
    case "band":
      return Go(e.parts, (t) => t.width, e.at.x).map((t) => Fo(Fi(e, t))).join("");
    case "line":
      return `<polyline points="${vi(e)}" ${Xi(e)}/>`;
  }
}
var Zi = [`text{font-size:${HA}px;font-family:ui-monospace,Menlo,Consolas,monospace;white-space:pre}`, "polyline{fill:none;stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round}", ".grid{opacity:.25}"].join("");
var qr = (e) => Object.entries(vr).map(([t, o]) => `--${t}:${o[e]}`).join(";");
var yb = "@media (prefers-color-scheme: dark)";
function Tb(e) {
  let o = e.shapes.some((p) => p.kind === "stack" && !p.parts.every(Po)) ? e.shapes : e.shapes.filter((p) => !(p.kind === "text" && p.isAboutPartsLeftOut)), r = e.columns * Pi, s = (e.rows - (e.shapes.length - o.length)) * Zr;
  return [`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${s}" viewBox="0 0 ${r} ${s}">`, `<style>svg{${qr("light")}}${yb}{svg{${qr("dark")}}}`, `${Zi}</style>`, ...o.map(Vi), "</svg>"].join(`
`);
}
var Qr = 100;
var Cb = 1e3;
var Eb = 2;
var el = 40;
var bb = 5;
var Ib = 66;
var tl = (e) => B(e.series.flatMap((t) => t.samples).map((t) => t.value === null ? 0 : 1));
var ol = (e, t) => ({ ...e, outcome: "drawn", form: t.form, format: sn(t), seriesCount: t.series.length, pointCount: tl(t), hasLeftOut: t.leftOutNotes.length > 0 });
var es = (e, t, o) => Number.isNaN(e) ? o : Math.min(Math.floor(e), t);
function Qe(e, t, o) {
  let r = Q_(e, t);
  return { kind: "chart", modelText: ja(r).join(`
`), terminalRows: (s) => MA(ai(r, Math.max(0, es(s, Cb, 0)))), svg: (s = Qr) => Tb(ai(r, Math.max(Ka, es(s, Qr, Qr)))), usage: ol(o, e) };
}
var rl = 1 + xn + Eb * bn;
var Tt = (e, t, o) => ({ kind: "refused", modelText: ("Not drawn. " + Et(t, rl, "more line").join(`
- `)).split(`
`).map((r) => It(r, Ib, 1 / 0).join(`
  `)).join(`
`), usage: { ...o, outcome: e } });
var sl = (e, t, o) => Qe({ ...e, notes: [`drawn as bars, not as ${t.form ?? "line"}: ${t.x ?? "x"} holds names, not times`, ...e.notes] }, Ft(t), { ...o, isFormReplaced: true });
function ts(e, t, o) {
  let r = t.slice(-bb).map(({ id: p, tool: m, text: n }) => `${re(p, el)} (${re(m, el)}, ${K(n.length, "character")})`), s = r.length > 0;
  return Tt(e.code, [e.why + (s ? `
Or name another tool result:` : ""), ...r], o);
}
var pl = (e) => e ? { code: "no_result", why: "No tool has answered yet. Pass the rows as data" } : { code: "data_not_found", why: "data is neither the id of a tool result nor a table. Pass an id, JSON records, or the text of a CSV, TSV or markdown table" };
var jb = /\n|^[[{]/;
function nl(e) {
  let t = M(e) ? e.data : void 0;
  return typeof t === "string" && jb.test(t.trim()) ? t : void 0;
}
var al = (e, t, o) => ({ ...e, format: o ? sn(t) : e.format });
function fl(e) {
  return M(e) ? { ...e, ...typeof e.y === "string" && { y: [e.y] }, ...typeof e.by === "string" && { by: [e.by] } } : e;
}
var il = (e) => e.form === "share" ? { ...e, combine: e.combine ?? "sum" } : e;
function ll(e) {
  let t = fl(Rt(e.input ?? {}));
  if (!Hx(t)) return Tt("bad_call", Ko(t), lt);
  let r = il(t), { data: s } = r, p = e.results.filter((oe) => oe.tool !== ae), m = s === void 0, n = m ? p.findLast((oe) => oe.text.trim() !== "") : p.find((oe) => oe.id === s), a = p.filter((oe) => oe !== n), f = nl(e.input), i = typeof s === "object" ? JSON.stringify(s) : void 0, x = i ?? n?.text ?? f, c = fn(r, i ? "rows" : n ? m ? "last_result" : "result_id" : f === void 0 ? "none" : "text");
  if (x === void 0) return ts(pl(m), a, c);
  let g = { zone: r.zone === "local" ? e.zone : "UTC", nowMs: e.nowMs }, T = kr(x, r, g);
  if (T.kind === "data") return Qe(T, r, c);
  let _ = T.problem.fitsBars ? ln(T, kr(x, Ft(r), g), r) : T;
  if (_.kind === "data") return sl(_, r, c);
  let [A, ...Ue] = _.tables;
  return A !== void 0 ? Tt(_.problem.code, [_.problem.why, ...CS(_.tables)], al(c, A, Ue.length === 0)) : ts(_.problem, a, c);
}
function os(e, t) {
  let o = { form: "line" }, r = kr(e, o, { zone: "UTC", nowMs: t.nowMs });
  if (!(r.kind === "data" && r.isSeries && r.leftOutNotes.length === 0)) return { kind: "none" };
  let p = re(t.query.replaceAll(`
`, " ")), n = r.subject.toLowerCase() === lr && p !== "" ? p : r.subject;
  return Qe({ ...r, subject: n, series: r.series.map((a) => a.name === r.subject ? { ...a, name: n } : a) }, o, { ...lt, dataFrom: "last_result" });
}
function ss(e, t) {
  let o = e.tool.register(Nc).catch((r) => e.ui.log(`no chart tool: ${String(r)}`, { to: "debug" }));
  if (t) e.telemetry.log(ZT(t)).catch(() => {
    return;
  });
  return o;
}
function St(e, t, o) {
  e.telemetry.mark(YT(t, o.isAsked)).catch(() => {
    return;
  }), e.session.surfaces().catch(() => []).then((r) => e.telemetry.log(GT(t, { isAsked: o.isAsked, isInSubagent: o.agentId !== void 0, surfaces: r, elapsedMs: o.elapsedMs }))).catch(() => {
    return;
  });
}
var oR = [10, 20, 40, 80, 160];
var sR = 256;
var mR = 80;
var nR = 500;
function Fe(e, t, o) {
  if (o.kind === "none") return e.chartlessIds.add(t), o;
  let r = [...e.charts.keys()].at(-1);
  if (e.charts.size >= sR && r !== void 0) e.charts.delete(r);
  return e.charts.set(t, o), o;
}
var xl = (e, t) => ({ ...e, ...M(t) && t });
var ul = (e, t) => ({ type: "text", text: e, _meta: { easel: t } });
var dl = (e) => e !== "terminal";
var ps = (e) => e.length > 0;
var uR = /^(0|false|no|off)$/i;
var dR = /^(1|true|yes|on)$/i;
var cl = /^mcp__(?!easel__|claude-artifacts__publish_files$)/;
var ms = /[^\w-]/;
function gt(e) {
  return ["query", "expr", "query_expr"].flatMap((t) => S(e, t)).find((t) => typeof t === "string" && t.trim() !== "") ?? "";
}
var yl = (e) => [...e ?? [], $x];
function hl(e, t) {
  let o = e?.trim() ?? "", r = uR.test(o), s = t.find((p) => p.axScreenReader !== void 0);
  return r ? false : dR.test(o) || s?.axScreenReader === true;
}
function Tl(e) {
  let [t] = S(e, "0._meta.easel"), o = M(t) ? t : {}, r = typeof o.nowMs === "number" ? o.nowMs : null, s = typeof o.zone === "string" ? o.zone : "UTC";
  try {
    return tr(s), { nowMs: r, zone: s };
  } catch (p) {
    if (p instanceof RangeError) return { nowMs: r, zone: "UTC" };
    throw p;
  }
}
var Sl = (e) => e.length > 0;
var Ot = { kind: "none" };
function ns(e, t, o) {
  if (t.transcript && t.transcript !== o) return t.transcript;
  let r = e();
  return t.transcript = r, r.catch(() => {
    if (t.transcript === r) t.transcript = void 0;
  }), r;
}
async function gl(e, t, o) {
  let { tool_use_id: r, tool: s, input: p, output: m, isErrored: n } = o.row;
  if (n || m === void 0 || r === void 0) return Ot;
  let i = t.chartlessIds.has(r) ? Ot : t.charts.get(r);
  if (i) return i;
  let x = s !== ae, l = x && o.hasWholeOutput, u = t.autoChartCalls.get(r);
  if (l) return Fe(t, r, os(ge(m), u ?? { nowMs: null, query: gt(p) }));
  let d = ns(e, t), g = await ((await d).some((_) => _.id === r) ? d : ns(e, t, d)), T = g.findIndex((_) => _.id === r), L = g[T];
  if (!L) return Sl(g) ? Fe(t, r, Ot) : Ot;
  return Fe(t, r, x ? os(ge(L.storedResult), u ?? { nowMs: null, query: gt(L.input) }) : ll({ input: L.input, results: g.slice(0, T), ...Tl(L.storedResult) }));
}
async function Ol(e, t, o) {
  let { tool_use_id: r, tool: s } = o;
  if (!ms.test(s) || r === void 0) return o;
  let m = t.calledTools.get(r);
  if (m !== void 0) return { ...o, tool: m };
  t.earlierTools ??= e().then((a) => new Map(a.map((f) => [f.id, f.tool])), (a) => {
    throw t.earlierTools = void 0, a;
  });
  let n = (await t.earlierTools).get(r);
  return n === void 0 ? o : { ...o, tool: n };
}
var _l = (e, t, o) => h(e.Box, { flexDirection: "column" }, t.hostRow, o);
function ER(e) {
  let t = e.callCount > 1;
  return h(e.elements.Box, { flexDirection: "column" }, h(e.elements.Svg, { source: e.chart.svg(e.columns), alt: e.chart.modelText }), t ? h(e.elements.Text, { dimColor: true }, `newest of ${e.callCount} calls: open the group for the rest`) : null);
}
var AR = 6;
var Ll = (e) => e > 1 ? `newest of ${e} calls, ctrl+o for the rest \xB7 ` : "";
var El = (e) => `auto chart \xB7 ${Ll(e)}turn off in /config: Auto charts`;
var Al = (e) => e === void 0 ? [] : [El(e)];
var NR = "  \u23BF  ";
function Rl(e, t) {
  let o = e.columns - AR;
  return h(e.elements.Box, { flexDirection: "row" }, h(e.elements.Text, { dimColor: true }, NR), h(e.elements.Text, null, e.chart.terminalRows(o).concat(t.flatMap((r) => It(r, o)).map((r) => [{ text: r, ink: "quiet" }])).flatMap((r, s) => [s > 0 ? `
` : "", ...r.map((p) => h(e.elements.Text, { color: vr[p.ink].host, backgroundColor: p.background && vr[p.background].host, bold: p.ink === "title" }, p.text))])));
}
function PR(e) {
  let t = Al(e.autoCallCount);
  return e.isScreenReader ? h(e.elements.Text, null, [e.chart.modelText, ...t].join(`
`)) : Rl(e, t);
}
async function Wo(e, t) {
  let { cache: o, event: r } = t, s = r.viewport?.columns, p = async () => _t(await e.session.messages({})), n = (await Promise.all(t.rows.map((a) => Ol(p, o, a)))).filter((a) => t.isCharted(a.tool));
  for (let a of n.toReversed()) {
    let f = await gl(p, o, { row: a, hasWholeOutput: r.surface === "terminal" });
    if (f.kind !== "chart") continue;
    if (r.surface !== "terminal") {
      let l = ER({ elements: e.ui.resolve(r), chart: f, columns: s, callCount: n.length });
      return _l(e.ui.resolve(r), t, l);
    }
    if (o.screenReader === "unread") {
      let l = await e.env.get("CLAUDE_AX_SCREEN_READER"), u = [];
      for (let d of ["policy", "flag", "user"]) u.push(await e.settings.read({ source: d }));
      o.screenReader = hl(l, u) ? "on" : "off";
    }
    let i = a.tool === ae, x = PR({ elements: e.ui.resolve(r), chart: f, columns: s ?? mR, isScreenReader: o.screenReader === "on", autoCallCount: i ? void 0 : n.length });
    return _l(e.ui.resolve(r), t, x);
  }
  return t.hostRow;
}
function vR(e, t, o = {}) {
  let r = o.isReaderOn?.(), s = { charts: /* @__PURE__ */ new Map(), chartlessIds: /* @__PURE__ */ new Set(), autoChartCalls: /* @__PURE__ */ new Map(), calledTools: /* @__PURE__ */ new Map(), screenReader: r === void 0 ? "unread" : r ? "on" : "off" }, p = String(t.autoChartSkip ?? "").split(/[\s,]+/), m = (f) => cl.test(f) && t.autoCharts !== false && o.isRegulated?.() !== true && !p.some((i) => f.startsWith(`mcp__${i}__`)), n = p.some((f) => f !== ""), a = t.autoCharts === false ? "off" : n && "skips_servers";
  e("session.start", async (f, i, x) => {
    if (!ps(await f.session.surfaces())) return x(i);
    let l = ss(f, a), u = await x(i);
    if (i.isInteractive && await f.session.turns().catch(() => 0) > 0) await Promise.race([l, f.clock.sleep(nR, { signal: x.signal })]).catch(() => {
      return;
    });
    return u;
  }), e("session.attach", (f, i, x) => (ss(f, a), x(i))), e("prompt.section", { name: "env_info_simple" }, async (f, i, x) => {
    let l = await x(i);
    return l.text === null ? l : { ...l, text: `${l.text}
${zx}` };
  }), e("tool.call", { tool: ae }, async (f, i, x) => {
    if (o.isRegulated?.() === true) return { deny: Kx };
    let { tool: l, tool_use_id: u, agentId: d, consent: c, $shadowed: g, ...T } = i, L = xl(T, g);
    s.transcript = void 0, s.calledTools.set(u, ae);
    let _ = T.data === void 0 && d === void 0 && o.isBatchAwaited?.() === true, w = await ir(f, { tool_use_id: u, agentId: d, signal: x.signal }, _ ? oR : []);
    if (w === void 0) return { deny: Xx };
    let A = { nowMs: await f.clock.now(), zone: Intl.DateTimeFormat().resolvedOptions().timeZone }, Ue = performance.now(), et = ll({ input: L, results: w, ...A });
    Fe(s, u, et), St(f, et.usage, { isAsked: true, agentId: d, elapsedMs: performance.now() - Ue });
    let oe = et.modelText;
    return et.kind === "chart" ? { result: [ul(oe, A)] } : { deny: oe };
  }).catch((f, i) => (St(f, lt, { isAsked: true, agentId: i.agentId, elapsedMs: 0 }), { deny: Gx })), e("tool.call", { tool: cl }, async (f, i, x) => {
    if (i.agentId === void 0) s.calledTools.set(i.tool_use_id, i.tool);
    let l = await x(i);
    if (s.transcript = void 0, "deny" in l || l.isError || !m(i.tool) || i.agentId !== void 0 || !ps(await f.session.surfaces())) return l;
    let d = { nowMs: await f.clock.now(), query: gt(i) }, c = performance.now(), g = os(ge(l.result), d);
    if (g.kind !== "chart") return Fe(s, i.tool_use_id, g), l;
    return s.autoChartCalls.set(i.tool_use_id, d), St(f, g.usage, { isAsked: false, agentId: i.agentId, elapsedMs: performance.now() - c }), { ...l, context: yl(l.context) };
  }).catch(async (f, i, x) => {
    let l = await x(i);
    return St(f, lt, { isAsked: false, agentId: i.agentId, elapsedMs: 0 }), l;
  }), e("ui.render", { component: "ToolResult", surface: "terminal", props: { tool: ae } }, async (f, i, x) => await Wo(f, { cache: s, event: i, hostRow: null, rows: [{ ...i.props, input: void 0 }], isCharted: () => true }) ?? x(i)), e("ui.render", { component: "ToolUse", props: { tool: [/^mcp__/, ms] } }, async (f, i, x) => Wo(f, { cache: s, event: i, hostRow: await x(i), rows: [i.props], isCharted: (l) => l === ae ? dl(i.surface) : m(l) })), e("ui.render", { component: "ToolGroup", props: { isExpanded: false, calls: { tool: [/^mcp__/, ms] } } }, async (f, i, x) => Wo(f, { cache: s, event: i, hostRow: await x(i), rows: i.props.calls, isCharted: m }));
}
