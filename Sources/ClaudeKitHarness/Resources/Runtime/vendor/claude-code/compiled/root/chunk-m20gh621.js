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
var chunk_m20gh621_exports = {};
__export(chunk_m20gh621_exports, {
  Adl: () => Adl,
  Cdl: () => Cdl,
  KUt: () => KUt,
  Ops: () => Ops,
  Tdl: () => Tdl,
  VUt: () => VUt,
  dFn: () => dFn,
  lFn: () => lFn,
  rmo: () => rmo,
  tit: () => tit
});
module.exports = __toCommonJS(chunk_m20gh621_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_07r720jc = require("/$bunfs/root/chunk-07r720jc.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var rmo = {};
(0, import_chunk_w1d7ygsk.jr)(rmo, { FALLBACK_RENDER_SITE: () => f, activeModNames: () => lFn, changed: () => n, copyInterface: () => i, copyPlugin: () => p, default: () => rmo, devtoolsEvents: () => k, devtoolsHooks: () => a, devtoolsInterfaces: () => S, devtoolsRenderSites: () => H, failed: () => l, hooksOn: () => dFn, latest: () => VUt, loadedArgsOf: () => import_chunk_07r720jc.HT, loadedModuleNamed: () => import_chunk_07r720jc.r0e, publishHookFailure: () => KUt, publishInterfaces: () => Tdl, publishRegistry: () => Cdl, publishRenderSites: () => Adl, snapshots: () => u, subscribeHookFailures: () => Ops, subscribeRegistry: () => tit });
var lFn = (e) => e.filter((o) => !(0, import_chunk_vfyns8ja.Jf)(o.args.pluginStorageId)).map((o) => o.name);
var n = (0, import_chunk_69qhefwa.Be)();
var l = (0, import_chunk_69qhefwa.Be)();
var f = { event: "ui.render", component: "AskUserQuestion", drawnBy: "AskUserQuestionPermissionDialog" };
function u() {
  let e = [], o = [f], s = [];
  return { plugins: () => e, setPlugins: (t) => {
    e = t;
  }, renderSites: () => o, setRenderSites: (t) => {
    o = t;
  }, interfaces: () => s, setInterfaces: (t) => {
    s = t;
  } };
}
var VUt = (0, import_chunk_t57w17k7.de)(u(), (e) => e.setPlugins([]));
var KUt = l.emit;
function i(e) {
  return e.owner === void 0 ? { name: e.name, methods: [...e.methods], suppressedBy: e.suppressedBy } : { name: e.name, methods: [...e.methods], owner: e.owner };
}
var p = (e) => ({ name: e.name, events: [...e.events], calls: [...e.calls], tier: e.tier, generation: e.generation });
var dFn = (e) => VUt.plugins().flatMap((o) => {
  let s = o.events.find((t) => (0, import_chunk_vfyns8ja.FV)(t, e));
  if (s === void 0) return [];
  return [{ plugin: o.name, tier: o.tier, hook: s, generation: o.generation }];
});
function k() {
  let e = {};
  for (let o of import_chunk_vfyns8ja.u7e) e[o] = dFn(o);
  return e;
}
var a = () => VUt.plugins().map(p);
var S = () => VUt.interfaces().map(i);
var H = () => VUt.renderSites().map((e) => ({ ...e }));
var Tdl = (e) => VUt.setInterfaces(e.map(i));
function Cdl(e) {
  VUt.setPlugins(e.map(p)), n.emit(a());
}
var Adl = (e) => VUt.setRenderSites(e.map((o) => ({ ...o })));
var Ops = l.subscribe;
var tit = n.subscribe;
