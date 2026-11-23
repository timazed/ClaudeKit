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
var chunk_6hz903p5_exports = {};
__export(chunk_6hz903p5_exports, {
  AXs: () => AXs,
  CXs: () => CXs,
  JMa: () => JMa,
  QMa: () => QMa,
  R4r: () => R4r,
  R7t: () => R7t,
  XMa: () => XMa,
  YKo: () => YKo,
  Zht: () => Zht,
  ptr: () => ptr,
  wqe: () => wqe,
  x4r: () => x4r,
  x7t: () => x7t
});
module.exports = __toCommonJS(chunk_6hz903p5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_208y07t1 = require("/$bunfs/root/chunk-208y07t1.js");
var import_chunk_yta0vzjp = require("/$bunfs/root/chunk-yta0vzjp.js");
function wqe() {
  if (!(0, import_chunk_865at33z.Qt)()) return true;
  return (0, import_chunk_f9x2f6cx.pf)() !== null && (0, import_chunk_f9x2f6cx.t3t)();
}
function XMa(e) {
  let t = (0, import_chunk_f9x2f6cx.MI)(e), n = (0, import_chunk_f9x2f6cx.waa)(e);
  return () => {
    t(), n();
  };
}
function R7t() {
  if ((0, import_chunk_0rkwgmhx.se)().autoReact.enabledMemo !== true) return /* @__PURE__ */ new Set();
  return new Set(Array.from(u(), (e) => e.slug));
}
function Zht() {
  let { autoReact: e, durable: t, live: n, wakes: r } = (0, import_chunk_0rkwgmhx.se)(), i = /* @__PURE__ */ new Set();
  if (e.enabledMemo === false || e.userDisarmed) return i;
  for (let [o, s] of n.bootingWiredArms) {
    if (s.scanGeneration !== r.scanGeneration || n.retiredInFlightArms.has(o) || t.stopLatches.isStopped(o)) continue;
    if (!(0, import_chunk_208y07t1.pE)(o) || s.freshPublish && (0, import_chunk_208y07t1.Uv)(o) && s.stopGeneration === (0, import_chunk_208y07t1.Eue)(o)) i.add(o);
  }
  return i;
}
function* u() {
  for (let e of (0, import_chunk_0rkwgmhx.se)().live.supervisors.values()) if (!e.stopped && e.autoReactWiring !== void 0 && !(0, import_chunk_208y07t1.mE)(e.slug)) yield e;
}
function YKo(e) {
  let { live: t } = (0, import_chunk_0rkwgmhx.se)();
  for (let n of u()) if (e?.reconnecting !== true || n.timer !== void 0 || t.inFlightSubscribes.has(n.slug)) return true;
  return false;
}
function JMa() {
  return (0, import_chunk_0rkwgmhx.se)().autoReact.enabledMemo === true && YKo({ reconnecting: true });
}
function ptr(e) {
  let t = (0, import_chunk_0rkwgmhx.se)().live;
  for (let n of e) {
    let r = t.supervisors.get(n);
    if (r !== void 0) (0, import_chunk_0rkwgmhx.Xkr)(r), t.supervisors.delete(n);
    t.heardVersions.delete(n), (0, import_chunk_0rkwgmhx.SSo)(n);
  }
  l(e);
}
function l(e) {
  let t = (0, import_chunk_0rkwgmhx.se)().live;
  for (let n of e) if (t.inFlightSubscribes.has(n) && !t.supervisors.has(n)) t.retiredInFlightArms.add(n), t.bootingWiredArms.delete(n), t.inFlightWiredIntent.delete(n);
}
var x7t = 1e4;
function a() {
  return (0, import_chunk_0rkwgmhx.se)().autoReact.unattendedReplies;
}
function CXs(e) {
  let t = a();
  t.set(e, Math.min((t.get(e) ?? 0) + 1, x7t));
}
function AXs(e, t) {
  if (t > 0) {
    let n = a();
    n.set(e, Math.min((n.get(e) ?? 0) + t, x7t));
  }
}
function QMa(e) {
  let t = a(), n = t.get(e) ?? 0;
  return t.delete(e), n;
}
function R4r() {
  let e = (0, import_chunk_0rkwgmhx.se)().autoReact, t = e.unattendedReplies;
  e.unattendedReplies = /* @__PURE__ */ new Map();
  let n = 0;
  for (let r of t.values()) n += r;
  return { total: n, bySlug: t };
}
function x4r(e, { where: t, stop: n }) {
  return (0, import_chunk_yta0vzjp.lp)(`Claude auto-replied to ${e} ${(0, import_chunk_7cfjrnwy.O)(e, "comment")}${t} while you were away.${n}`, "notice");
}
