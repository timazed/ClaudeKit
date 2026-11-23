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
var chunk_p90h0hwy_exports = {};
__export(chunk_p90h0hwy_exports, {
  $2o: () => $2o,
  GKe: () => GKe,
  P_e: () => P_e,
  cht: () => cht
});
module.exports = __toCommonJS(chunk_p90h0hwy_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_n7qvhhbn = require("/$bunfs/root/chunk-n7qvhhbn.js");
var import_chunk_tcdd2he7 = require("/$bunfs/root/chunk-tcdd2he7.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function cht(e) {
  return (0, import_chunk_xfr8663h.hEl)(e) || false;
}
var a = "[conversation summary withheld: it may include account memory]";
function P_e(e, o) {
  let s = (0, import_chunk_p3d6wgn7.qst)([...e]).filter((n) => !(0, import_chunk_bzyb60p0.GJr)(n) && !(n.type === "system" && "persist" in n && n.persist === false)), r = x(e, o);
  return s.map((n) => A(n, r) ? S(n) : n);
}
function x(e, { host: o }) {
  return cht(o) || e.some(import_chunk_bzyb60p0.GJr);
}
function A(e, o) {
  if (!o || e.type !== "user") return false;
  let s = e.message;
  return e.isCompactSummary === true || e.repeatsCompactSummary === true || (0, import_chunk_g9n176jp.iwr)(s?.content);
}
function S(e) {
  let o = e.isCompactSummary === true ? a : `<${import_chunk_k449cc64.Tf}>${a}</${import_chunk_k449cc64.Tf}>`, { modelOnlyText: s, ...r } = e, n = { ...r };
  for (let t of [...import_chunk_n7qvhhbn.Zgt, ...import_chunk_n7qvhhbn.FJt]) if (t !== "summarizeMetadata") delete n[t];
  return { ...n, message: { ...e.message, role: e.message?.role ?? "user", content: typeof e.message?.content === "string" ? o : [{ type: "text", text: o }] } };
}
function GKe(e, o) {
  if (!x([], o)) return { jsonl: e, hits: 0 };
  let s = 0;
  return { jsonl: e.split(`
`).map((n) => {
    let t = 0;
    while (n.charCodeAt(t) === 0 || n.charCodeAt(t) === 65279) t++;
    let u = t > 0 ? n.slice(t) : n;
    if (u.trim() === "") return n;
    let m = C.some((c) => u.includes(c)), i;
    try {
      i = (0, import_chunk_w578pjby.Cs)(u);
    } catch {
      i = void 0;
    }
    if (!y(i)) return s++, (0, import_chunk_w578pjby._)({ type: "line-withheld", bytes: Buffer.byteLength(n) });
    if (m && i.type === B) {
      let c = k(i);
      if (c !== void 0) return s++, (0, import_chunk_w578pjby._)(c);
      return n;
    }
    if (!m || i.type !== "user") return n;
    let l = y(i.message) ? i.message : void 0, f = l?.content;
    if (i.isCompactSummary !== true && i.repeatsCompactSummary !== true && !(0, import_chunk_g9n176jp.iwr)(f)) return n;
    s++;
    let d = i.isCompactSummary === true ? a : `<${import_chunk_k449cc64.Tf}>${a}</${import_chunk_k449cc64.Tf}>`, p = { ...i };
    delete p.modelOnlyText;
    for (let c of [...import_chunk_n7qvhhbn.Zgt, ...import_chunk_n7qvhhbn.FJt]) if (c !== "summarizeMetadata") delete p[c];
    return p.message = { role: "user", ...l, content: typeof f === "string" ? d : [{ type: "text", text: d }] }, (0, import_chunk_w578pjby._)(p);
  }).join(`
`), hits: s };
}
var C = ['"isCompactSummary"', '"repeatsCompactSummary"', import_chunk_g9n176jp.HLi, import_chunk_g9n176jp.F8e], B = "api-request-blob";
function k(e) {
  let o = y(e.message) ? e.message : void 0;
  if (o?.role !== "user") return;
  let { content: s } = o;
  if (typeof s === "string") return s.includes(import_chunk_g9n176jp.F8e) ? { ...e, message: { ...o, content: a } } : void 0;
  if (!Array.isArray(s)) return;
  let r = false, n = s.map((t) => {
    if ((0, import_chunk_tcdd2he7.$8e)(t) && t.text.includes(import_chunk_g9n176jp.F8e)) return r = true, { ...t, text: a };
    return t;
  });
  return r ? { ...e, message: { ...o, content: n } } : void 0;
}
function y(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function $2o(e, o, s = []) {
  let r = { keys: (0, import_chunk_4smdap7r.M)(e.filter((t) => t.trim() !== "").flatMap(import_chunk_bzyb60p0.t_i).filter((t) => !a.includes(t))).sort((t, u) => u.length - t.length), replaced: (0, import_chunk_4smdap7r.M)(s.map((t) => t.trim()).filter((t) => t !== "" && !a.includes(t))).sort((t, u) => u.length - t.length), hits: 0 };
  return { messages: r.keys.length === 0 && r.replaced.length === 0 ? o : o.flatMap((t) => {
    if (t.role !== "user") return [t];
    let u = T(t.content, r);
    return u === void 0 ? [] : [{ ...t, content: u }];
  }), keys: r.keys.length + r.replaced.length, hits: r.hits };
}
function T(e, o) {
  if (typeof e === "string") {
    let r = g(e, o);
    return h(r) ? void 0 : r;
  }
  let s = e.flatMap((r) => {
    if (w(r)) {
      let n = g(r.text, o);
      return h(n) ? [] : [{ ...r, text: n }];
    }
    if (L(r) && r.content !== void 0) return [{ ...r, content: T(r.content, o) ?? "" }];
    return [r];
  });
  return s.length === 0 ? void 0 : s;
}
function w(e) {
  return e.type === "text" && "text" in e && typeof e.text === "string";
}
function L(e) {
  return e.type === "tool_result";
}
function g(e, o) {
  let s = e;
  for (let r = 0; ; r++) {
    if (r > e.length) return a;
    let n = o.replaced.find((i) => s.includes(i)), t = o.keys.find((i) => s.includes(i)), u = n !== void 0 && (t === void 0 || n.length >= t.length) ? n : t;
    if (u === void 0) return s;
    let m = s.split(u);
    o.hits += m.length - 1, s = m.join(u === n ? a : "");
  }
}
function h(e) {
  return (0, import_chunk_bzyb60p0.yCe)(e).trim() === "";
}
