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
var chunk_478m53m1_exports = {};
__export(chunk_478m53m1_exports, {
  J1a: () => J1a,
  Q1a: () => Q1a,
  Sri: () => Sri,
  X1a: () => X1a,
  Y1a: () => Y1a,
  Z1a: () => Z1a,
  bri: () => bri,
  e$a: () => e$a,
  nRn: () => nRn,
  q1a: () => q1a,
  wri: () => wri
});
module.exports = __toCommonJS(chunk_478m53m1_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var s = 5e3;
function Sri(e, t) {
  let o = { sentAhead: false, negotiationDenylisted: t, listChangedBeforeHandler: false, handlerRegistered: false };
  return (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.set(e, o), o;
}
function q1a(e, t, o) {
  e.page = t, e.pageSentAtMs = o;
}
function Y1a(e) {
  if (e.page !== void 0) e.expiry = setTimeout(n, s, e), e.expiry.unref?.();
}
function bri(e) {
  n(e);
}
function X1a(e) {
  let t = (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.get(e);
  if (t?.page === void 0 || t.pageSentAtMs === void 0) return;
  let o = { page: t.page, sentAtMs: t.pageSentAtMs };
  return n(t), o;
}
function J1a(e, t) {
  try {
    let o = (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.get(e);
    if (o !== void 0 && o.firstPageMark === void 0) o.firstPageMark = (0, import_chunk_qdcbcsg7.Vct)(t) ?? "unmarked";
  } catch {
  }
}
function Q1a(e, t) {
  let o = (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.get(e);
  if (o !== void 0) o.earlyAnswer = t;
}
function wri(e) {
  let t = (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.get(e);
  if (t === void 0) return;
  if (n(t), t.sentAhead && !t.handlerRegistered) t.listChangedBeforeHandler = true;
}
function Z1a(e) {
  let t = (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.get(e);
  if (t === void 0) return false;
  t.handlerRegistered = true;
  let o = t.listChangedBeforeHandler;
  return t.listChangedBeforeHandler = false, o;
}
function nRn(e) {
  if (e === void 0) return {};
  return { toolsListAhead: e.sentAhead, ...e.earlyAnswer !== void 0 && { toolsListAheadEarlyAnswer: (0, import_chunk_78g0060s.f)(e.earlyAnswer) }, ...e.firstPageMark !== void 0 && { toolsListFirstPageMark: (0, import_chunk_78g0060s.f)(e.firstPageMark) } };
}
function e$a(e) {
  let t = (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.get((0, import_chunk_qdcbcsg7.Ap)(e.client));
  return t === void 0 ? {} : { ...nRn(t), negotiationDenylisted: t.negotiationDenylisted };
}
function n(e) {
  clearTimeout(e.expiry), e.page = void 0, e.pageSentAtMs = void 0, e.expiry = void 0;
}
