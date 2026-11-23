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
var chunk_1yn47zgk_exports = {};
__export(chunk_1yn47zgk_exports, {
  Abr: () => Abr,
  Rbr: () => Rbr,
  _gs: () => _gs,
  n0i: () => n0i,
  o0i: () => o0i,
  r0i: () => r0i,
  s0i: () => s0i,
  sle: () => sle,
  vgo: () => vgo,
  x8e: () => x8e
});
module.exports = __toCommonJS(chunk_1yn47zgk_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_wc4p32em = require("/$bunfs/root/chunk-wc4p32em.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var S = "__artifactAsk", N = ["Claude wants to upload a file to this artifact.", "Claude wants to copy files from another artifact into this one.", "Claude wants to edit this artifact's data."], M = 64, n0i = 3;
function U(e) {
  return e.length <= 2 ? e.join(" and ") : `${e.slice(0, -1).join(", ")}, and ${e.at(-1)}`;
}
var j = /"[^"]*"/g, v = "Let Claude read the comments on ";
function r0i(e) {
  return `${v}${e ? `"${e}"` : "this artifact"}?`;
}
function I(e) {
  if (!e.startsWith(v)) return;
  for (let s of e.matchAll(new RegExp(`${j.source}|\\?(?=\\s)`, "g"))) if (s[0] === "?") return s.index + 1;
  return;
}
function x8e(e) {
  try {
    return e === void 0 ? void 0 : (0, import_chunk_wc4p32em.cj)(e);
  } catch {
    return;
  }
}
function Abr(e, s, n) {
  let t = (0, import_chunk_0rkwgmhx.se)().askCards.get(s);
  if (t === void 0 || t.reason !== n || x8e(e) !== t.input) return;
  return t.card;
}
function o0i(e, s = (n) => n) {
  let { request: n, script: t, text: r, documents: o, files: a, file: f, source: i } = e, c = [];
  if ((0, import_chunk_ma3kja9f.T)(n) && typeof n.method === "string" && typeof n.path === "string") {
    let d = (0, import_chunk_ma3kja9f.T)(n.query) ? new URLSearchParams(Object.entries(n.query).flatMap(([p, l]) => {
      let m = typeof l === "string" ? l : (0, import_chunk_w578pjby._)(l);
      return m === void 0 ? [] : [[p, m]];
    })).toString() : "", u = s(d === "" ? n.path : `${n.path}?${d}`);
    if (/^[A-Za-z]{1,16}$/.test(n.method) && /^[^\s\p{Cc}]+$/u.test(u)) {
      if (c.push(`${n.method.toUpperCase()} ${u}`), n.body !== void 0) c.push(`Request body \xB7 ${b(L(n.body))}`);
    }
  }
  for (let d of [t, r]) if (typeof d === "string" && d.trim() !== "") {
    let [u = "", ...p] = F(d.trim());
    c.push(`${b(p.length + 1)} \xB7 ${u}`);
  }
  if (o !== void 0) c.push(`${o} ${(0, import_chunk_7cfjrnwy.O)(o, "document")}`);
  if (a !== void 0) {
    let d = a.count - a.names.length, u = a.names.map((l) => `"${l}"`), p = U(d > 0 ? [...u, `${d} more`] : u);
    c.push(`${a.count} ${(0, import_chunk_7cfjrnwy.O)(a.count, "file")} \xB7 ${p}`);
  }
  if (i !== void 0) c.push(`source: ${i}`);
  if (f !== void 0) c.push(`file: ${f}`);
  return c;
}
function L(e, s = /* @__PURE__ */ new WeakSet()) {
  if (typeof e === "string") return F(e).length;
  if (typeof e !== "object" || e === null || s.has(e)) return 1;
  s.add(e);
  let n = Array.isArray(e) ? e : Object.values(e);
  return n.length === 0 ? 1 : n.reduce((t, r) => t + (typeof r === "string" ? 1 : L(r, s)), 2);
}
function F(e) {
  return e.split(/\r\n|[\r\n\u2028\u2029]/);
}
function b(e) {
  return `${e} ${e === 1 ? "line" : "lines"}`;
}
function K(e, s, n, t = (0, import_chunk_0rkwgmhx.se)().askCardFacts.get(e)) {
  let r = (0, import_chunk_0rkwgmhx.se)(), o = r.askClassCards.get(e), a = t?.target, f = t?.values ?? [], i = t?.audience ?? "";
  if (r.askClassCards.delete(e), r.askCardFacts.delete(e), t === void 0 || t.generic === true || s.behavior !== "ask" || s.decisionReason?.type !== "safetyCheck" && s.decisionReason?.type !== "other" || s.decisionReason.reason.trim() === "") return;
  let c = s.decisionReason.reason, d = c.indexOf(`

`), u = d === -1 ? c : c.slice(0, d), p = d === -1 ? [] : c.slice(d + 2).split(`
`).filter((y) => y !== ""), l = s.updatedInput ?? n, m = (0, import_chunk_ma3kja9f.T)(l) ? l[S] : void 0, g;
  if (m === void 0) {
    let h = N.find((P) => u.startsWith(P))?.length ?? I(u), C = h === void 0 ? u : u.slice(0, h), w = h === void 0 ? "" : u.slice(h).trim(), E = a?.title ?? "", R = E !== "" ? `"${E}"` : a?.url, k = [], x = (P) => p.some((q) => q.endsWith(P));
    if (R !== void 0 && !C.includes(R) && !x(R)) k.push(R);
    let A = a?.url;
    if (t?.foreign === true && A !== void 0 && !C.includes(A) && !k.includes(A) && !x(A)) k.push(A);
    if (w !== "") k.push(w);
    let W = i === "" || u.replace(j, "").includes(i);
    g = { question: C, lines: k, values: [...p, ...W ? f : [...f, i]] };
  } else if (o !== void 0 && o.reason === u && x8e(m) === o.stamp) {
    let [y, ...h] = o.parts, C = i === "" || o.saysPublic;
    g = y === void 0 ? void 0 : { question: y, lines: h, values: C ? f : [...f, i] };
  }
  let D = x8e(l);
  if (D !== void 0 && g !== void 0) sle(r.askCards, e, { input: D, card: g, reason: c });
  return g;
}
function s0i(e, s) {
  let n = e.checkPermissions;
  return vgo(e, { async checkPermissions(t, r) {
    let o = await n.call(this, t, r), a = r.toolUseId, f = o.behavior === "ask" ? o.updatedInput ?? t : null;
    if (a !== void 0 && (0, import_chunk_ma3kja9f.T)(f)) {
      let i;
      try {
        i = s(f, r);
      } catch {
        i = { values: [], generic: true };
      }
      sle((0, import_chunk_0rkwgmhx.se)().askCardFacts, a, i);
    }
    return o;
  } });
}
function Rbr(e) {
  let s = e.checkPermissions;
  return vgo(e, { async checkPermissions(n, t) {
    let r = t.toolUseId;
    if (r !== void 0) {
      let d = (0, import_chunk_0rkwgmhx.se)();
      d.askCards.delete(r), d.askClassCards.delete(r), d.askCardFacts.delete(r);
    }
    let o = await _gs(r, () => s.call(this, n, t)), a = r === void 0 ? void 0 : K(r, o, n);
    if (o.behavior !== "ask") return o;
    let { consentWordsOnRecord: f, ...i } = o, c = i.updatedInput ?? n;
    return i.localDisplayOnly === true && (0, import_chunk_ma3kja9f.T)(c) && x8e(c[S]) !== void 0 && a !== void 0 && a.lines.length === 0 && a.values.length === 0 && i.decisionReason?.type === "safetyCheck" && a.question === i.decisionReason.reason ? { ...i, consentWordsOnRecord: true } : i;
  } });
}
async function _gs(e, s) {
  let n = false;
  try {
    let t = await s();
    return n = t.behavior === "deny", t;
  } finally {
    let t = (0, import_chunk_0rkwgmhx.se)();
    if (e !== void 0 && !n && !t.askClassPending.has(e)) t.askClassFirstWords.set(e, "");
  }
}
function sle(e, s, n) {
  if (e.delete(s), e.set(s, n), e.size > M) {
    let t = e.keys().next().value;
    if (t !== void 0) e.delete(t);
  }
}
function vgo(e, s) {
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(s));
}
