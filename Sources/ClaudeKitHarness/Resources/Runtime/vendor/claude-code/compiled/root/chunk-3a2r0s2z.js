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
var chunk_3a2r0s2z_exports = {};
__export(chunk_3a2r0s2z_exports, {
  J2t: () => J2t,
  Kcn: () => Kcn,
  Ycn: () => Ycn,
  bvl: () => bvl,
  iX: () => iX,
  nxe: () => nxe,
  qcn: () => qcn,
  s2i: () => s2i,
  txe: () => txe,
  wvl: () => wvl
});
module.exports = __toCommonJS(chunk_3a2r0s2z_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_jqm7sxzd = require("/$bunfs/root/chunk-jqm7sxzd.js");
var import_chunk_b3pvef3t = require("/$bunfs/root/chunk-b3pvef3t.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var a = 8192, D = 512, m = 200, w = 120, E = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().optional().catch(void 0), error: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)() })]).optional().catch(void 0), detail: (0, import_chunk_adx6804h.n)().optional().catch(void 0) }));
function txe(e, r, o) {
  let i = O(e);
  return { mediaType: i, ...S(i, r, o), proxyError: A(e, o), requestId: h(e, o) };
}
function A(e, r) {
  let o = e?.["x-proxy-error"];
  return typeof o === "string" ? l(y(o), r, w) : void 0;
}
function h(e, r) {
  let o = (0, import_chunk_jqm7sxzd.i2i)(e?.["x-request-id"]);
  return o !== void 0 && r(o) === o ? o : void 0;
}
function O(e) {
  let r = e?.["content-type"];
  if (typeof r !== "string") return "";
  let o = r.indexOf(";");
  return (o === -1 ? r : r.slice(0, o)).replace(/^[\t\n\f\r ]+|[\t\n\f\r ]+$/g, "").replace(/[A-Z]/g, (i) => i.toLowerCase());
}
var f = { reason: void 0, code: void 0 };
function S(e, r, o) {
  let i = e === "application/json" || e.endsWith("+json"), s = typeof r === "string" ? y(r) : P(r);
  if (s !== void 0) {
    let { text: d, truncated: u } = s;
    if (d.includes("\uFFFD") || d.includes("\0")) return f;
    if (i || e === "" && d.trimStart().startsWith("{")) return u ? f : b((0, import_chunk_0jve1fep.et)(d, false), o);
    return { reason: e === "text/plain" ? l(s, o, m) : void 0, code: void 0 };
  }
  if (r !== null && typeof r === "object") return b(r, o);
  return f;
}
function b(e, r) {
  let o = E().safeParse(e);
  if (!o.success) return f;
  let { message: i, error: s, detail: d } = o.data, u = typeof s === "string" ? s : s?.message, g = [i, u, d].find((x) => x !== void 0 && x.trim() !== "");
  return { reason: g === void 0 ? void 0 : l(y(g), r, m), code: typeof s === "string" && (0, import_chunk_b3pvef3t.ELe)(s) ? s : void 0 };
}
function l({ text: e, truncated: r }, o, i) {
  let s = o(e), d = r ? (0, import_chunk_7cfjrnwy.ee)(s, s.length - D) : s, u = (0, import_chunk_tp3c5q2s.Ft)(d, i);
  return u === "" ? void 0 : u;
}
function y(e) {
  return { text: (0, import_chunk_7cfjrnwy.ee)(e, a), truncated: e.length > a };
}
function P(e) {
  let r;
  if (e instanceof ArrayBuffer) r = new Uint8Array(e);
  else if (ArrayBuffer.isView(e)) r = new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
  else return;
  let o = r.byteLength > a, i = o ? T(r, a) : r.byteLength;
  return { text: new TextDecoder("utf-8").decode(r.subarray(0, i)), truncated: o };
}
function T(e, r) {
  let o = r - 1, i = 0;
  while (o >= 0 && i < 3 && ((e[o] ?? 0) & 192) === 128) o--, i++;
  if (o < 0) return r;
  let s = e[o] ?? 0, d = s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
  return i + 1 < d ? o : r;
}
var _ = "x-proxy-error", R = "x-deny-reason";
function iX(e, r) {
  return e === 403 && (r?.[_] === "blocked-by-allowlist" || r?.[R] === "host_not_allowed");
}
function J2t(e) {
  let r = (0, import_chunk_3jjr3wje.gD)(e);
  return r !== void 0 && iX(r.connectStatus, r.headers);
}
function s2i(e, r) {
  if (e !== 403) return;
  if (r.mediaType === "text/plain" && z(r.reason)) return "proxy_denied";
  if (r.code !== "content_scan_blocked") return;
  return r.reason?.endsWith("(fail closed)") ? "content_scan_transient" : "content_scan_permanent";
}
function z(e) {
  return false;
}
function bvl(e, r) {
  return false;
}
function Kcn({ status: e, headers: r, data: o, redact: i, label: s }) {
  if (e !== 403) return;
  let d = txe(r, o, i), u = s2i(e, d);
  if (u !== void 0) (0, import_chunk_w578pjby.t)(`${s}: sandbox proxy denied, ${u} (${d.reason ?? "no reason"})`);
  return u;
}
var qcn = { content_scan_transient: "artifact content fetch blocked: the sandbox proxy's content scan was unavailable (HTTP 403). This is transient; retry.", content_scan_permanent: "artifact content fetch blocked: the sandbox proxy's content scan refused this content (HTTP 403); retrying will not help.", proxy_denied: "artifact content fetch blocked by the sandbox proxy's policy (HTTP 403); retrying will not help." };
function wvl(e) {
  return e !== void 0 && e >= 400 && e < 500 && e !== 408 && e !== 429;
}
function k(e, r, o) {
  let i = e?.[r];
  return typeof i === "string" && i.length <= 64 && o.test(i) ? i : void 0;
}
function Ycn(e) {
  return k(e, _, /^[a-z0-9_-]+$/);
}
function nxe(e) {
  return k(e, R, /^[a-z0-9_]+$/);
}
