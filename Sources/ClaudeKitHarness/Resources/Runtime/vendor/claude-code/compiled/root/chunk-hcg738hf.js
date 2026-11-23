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
var chunk_hcg738hf_exports = {};
__export(chunk_hcg738hf_exports, {
  $2n: () => $2n,
  $4l: () => $4l,
  F2n: () => F2n,
  F4l: () => F4l,
  GTo: () => GTo,
  KAr: () => KAr,
  KTo: () => KTo,
  KTs: () => KTs,
  QCl: () => QCl,
  U4l: () => U4l,
  VAr: () => VAr,
  VTo: () => VTo,
  VTs: () => VTs,
  WTo: () => WTo,
  ZCl: () => ZCl,
  eVi: () => eVi,
  jTo: () => jTo,
  je: () => je,
  kGe: () => kGe,
  mfn: () => mfn,
  nVi: () => nVi,
  pfn: () => pfn,
  qAr: () => qAr,
  qTs: () => qTs,
  rVi: () => rVi,
  tNe: () => tNe,
  tVi: () => tVi,
  zTo: () => zTo,
  zTs: () => zTs
});
module.exports = __toCommonJS(chunk_hcg738hf_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function pfn(r, o = "aborted") {
  let { reason: e } = r;
  return e instanceof Error ? e.message : e === void 0 ? o : String(e);
}
var F4l = (r) => `the answer is not plain data: ${r}`;
class je extends Error {
  name = "HooksError";
  telemetryMessage = "function hooks error (message not reported: it may contain plugin details)";
  thrownName;
}
function VAr(r, o) {
  if (!(0, import_chunk_ma3kja9f.T)(r)) throw new je(`${o}: next() takes the event's argument: next(e) passes it on, next({ ...e, x }) rewrites it`);
  return r;
}
function WTo(r) {
  if (!(r instanceof Error)) return;
  let o = r.cause;
  return typeof o === "string" ? o : void 0;
}
var zTs = (r) => typeof r === "object" && r !== null && "aborted" in r && typeof r.addEventListener === "function" && typeof r.removeEventListener === "function";
class p extends RangeError {
}
var i = "failed in the session's process", a = /* @__PURE__ */ new WeakMap();
function KAr(r, o) {
  return a.set(r, o), r;
}
var g = /* @__PURE__ */ new Set(["user-cancel", "remote-cancel", "shutdown", "interrupt", "turn-abort", "background", "refusal-fallback-edit", "recovery-timeout", "permission-stop", "ask-withdrawn-by-asker", "call-cut-by-plugin", "server-fallback-tombstone", "subagent-park", "repl-script-over", "repl-ask-declined", "workflow-abort", "user-skip", "user-retry", "stalled", "detached-ceiling", "end_conversation"]), f = (r) => g.has(r) ? r : "aborted";
function eVi(r) {
  if (!(r instanceof Error)) return i;
  let o = a.get(r);
  if (o !== void 0) return o;
  if (r instanceof je || r instanceof p) return r.message;
  if (r.name === "TimeoutError" || (0, import_chunk_jv7av99m.w)(r) === "ETIMEDOUT") return "timed out";
  return (0, import_chunk_jv7av99m.Fe)(r) ? f(r.message) : i;
}
var qAr = ({ reason: r }) => typeof r === "string" ? f(r) : eVi(r), F2n = (r, o) => KAr(new je(r + (0, import_chunk_jv7av99m.d)(o)), r + eVi(o)), QCl = (r, o) => r instanceof je && r !== o.reason ? KAr(r, i) : r;
var $2n = (r) => `next() argument is not plain data: ${r}`;
var tVi = "WebAssembly does not run here: not on the hosted server, nor in a test file's own hooks";
var VTs = (r, o) => `${r}: arguments are not plain data: ${o}`;
class kGe extends je {
}
var ZCl = (r) => r.reason instanceof kGe;
var nVi = (r, o) => o === true ? new kGe(r) : new je(r);
var jTo = (r) => r.reason instanceof kGe ? { isSettled: true } : {};
var $4l = (r) => r instanceof kGe ? new je(r.message) : r;
var t = /* @__PURE__ */ new WeakMap();
function GTo(r, o) {
  if (typeof r === "object" && r !== null) t.set(r, o);
  return r;
}
var rVi = (r) => typeof r === "object" && r !== null ? t.get(r) : void 0;
class KTs extends je {
  asked;
  constructor(r, o) {
    super(r);
    this.asked = o;
  }
}
var n = /* @__PURE__ */ new WeakSet();
var qTs = (r) => typeof r === "object" && r !== null && n.has(r);
function zTo(r) {
  if (typeof r === "object" && r !== null) n.add(r);
  return r;
}
function m() {
  let r = /* @__PURE__ */ new WeakMap();
  return { mark(o, e) {
    if (typeof o === "object" && o !== null && e !== void 0) r.set(o, e);
    return o;
  }, of(o) {
    return typeof o === "object" && o !== null ? r.get(o) : void 0;
  } };
}
var s = m();
var mfn = (r, o) => s.mark(r, o);
var tNe = (r) => new je(`${r}: its environment was unloaded`);
var VTo = (r, o, e) => ({ plugin: r, op: o, message: e });
function U4l(r, o) {
  let e = tNe(r);
  return mfn(e, VTo(r, o, e.message));
}
var KTo = (r) => s.of(r);
