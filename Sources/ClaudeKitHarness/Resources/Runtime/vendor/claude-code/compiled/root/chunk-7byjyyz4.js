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
var chunk_7byjyyz4_exports = {};
__export(chunk_7byjyyz4_exports, {
  O7s: () => O7s,
  P7l: () => P7l,
  vKo: () => vKo
});
module.exports = __toCommonJS(chunk_7byjyyz4_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_7h77vtaa = require("/$bunfs/root/chunk-7h77vtaa.js");
var import_chunk_2maapga5 = require("/$bunfs/root/chunk-2maapga5.js");
var d = 32;
function O7s(n) {
  if (n.publishContext !== "subagent" || n.context.agentId === void 0 || n.context.teammateContext !== void 0) return null;
  let { publishContext: e } = (0, import_chunk_f2vegtjy.Yje)({ agentId: void 0, isNonInteractiveSession: (0, import_chunk_f9x2f6cx.Se)() });
  return (0, import_chunk_2maapga5.Lpe)(e) ? e : null;
}
function vKo(n, e) {
  let t = (0, import_chunk_0rkwgmhx.se)().live.pendingSubagentArms, o = t.get(n) ?? [], i = o.findIndex((s) => s.slug === e.slug);
  if (i === -1) o.push(e);
  else o[i] = { ...e, title: e.title ?? o[i]?.title };
  t.delete(n), t.set(n, o);
  let r = 0;
  for (let s of t.values()) r += s.length;
  while (r > d) {
    let [s, a] = t.entries().next().value;
    if (a.shift(), a.length === 0) t.delete(s);
    r--, (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "subagent_arm_evicted");
  }
}
function g(n) {
  let e = (0, import_chunk_0rkwgmhx.se)().live.pendingSubagentArms, t = e.get(n) ?? [];
  return e.delete(n), t;
}
var m = 256;
function c(n) {
  let e = (0, import_chunk_0rkwgmhx.se)().live.finishedSubagentAdopters;
  e.delete(n), e.add(n);
  while (e.size > m) e.delete(e.values().next().value);
}
function P7l(n) {
  let { agentId: e, context: t } = n;
  c(e);
  let o = g(e);
  if (o.length === 0) return;
  let { publishContext: i } = (0, import_chunk_f2vegtjy.Yje)({ agentId: t.agentId, agentType: t.agentContext?.agentType, isNonInteractiveSession: t.options.isNonInteractiveSession });
  if (i === "subagent" && t.agentId !== void 0) {
    let s = (0, import_chunk_bzyb60p0._ne)(t.agentId, t.taskRegistry) === t.agentId || !(0, import_chunk_0rkwgmhx.se)().live.finishedSubagentAdopters.has(t.agentId);
    for (let a of o) if (s) vKo(t.agentId, a);
    else (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "subagent_arm_orphaned");
    return;
  }
  if (!(0, import_chunk_2maapga5.Lpe)(i)) return;
  let r = { ...t, abortController: new AbortController() };
  for (let s of o) (0, import_chunk_7h77vtaa.Vet)({ ...s, publishContext: i, getKnownVer: (0, import_chunk_f2vegtjy.TFi)(t.getArtifactReadObservation, s.slug), context: r, adoptedPublish: true, announceArmlessEnd: true }).catch(() => {
  });
  (0, import_chunk_cqa9hrgx.u)("artifact_live_subscribe", { subagent_publish_adopted: true, count: o.length, publish_context: (0, import_chunk_78g0060s.f)(i) });
}
