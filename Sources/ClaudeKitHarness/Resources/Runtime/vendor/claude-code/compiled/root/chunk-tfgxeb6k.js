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
var chunk_tfgxeb6k_exports = {};
__export(chunk_tfgxeb6k_exports, {
  ZVo: () => ZVo,
  aqr: () => aqr,
  l7t: () => l7t
});
module.exports = __toCommonJS(chunk_tfgxeb6k_exports);
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_hemc71zd = require("/$bunfs/root/chunk-hemc71zd.js");
var import_chunk_7mhs1h0h = require("/$bunfs/root/chunk-7mhs1h0h.js");
var import_chunk_6t6nqmb1 = require("/$bunfs/root/chunk-6t6nqmb1.js");
function aqr(t) {
  let e = (o) => t((r) => {
    let i = typeof o === "function" ? o(r.toolPermissionContext) : o;
    return r.toolPermissionContext === i ? r : { ...r, toolPermissionContext: i };
  });
  return { setToolPermissionContext: e, setSessionToolPermissionContext: e };
}
function ZVo(t) {
  t((e) => e.ultrareviewOverageConfirmed ? e : { ...e, ultrareviewOverageConfirmed: true });
}
function s(t) {
  return (e) => t((o) => ({ ...o, pendingMemoryUpdates: [...o.pendingMemoryUpdates, e] }));
}
function n(t) {
  t((e) => e.prResolvedThisSession ? e : { ...e, prResolvedThisSession: true });
}
function l7t(t, e) {
  return { markPrResolvedThisSession: () => n(e), isUltrareviewOverageConfirmed: () => t().ultrareviewOverageConfirmed, markUltrareviewOverageConfirmed: () => ZVo(e), getAdvisorSetting: () => t().advisorModel, getMcp: () => t().mcp, getProactivityLevel: () => t().proactivityLevel, getWebBrowser: () => t().webBrowser, ...aqr(e), setWebBrowserSlice: (0, import_chunk_7mhs1h0h.l0i)(e), setArtifactReadVersion: (0, import_chunk_f2vegtjy.CFi)(e), getArtifactReadObservation: (0, import_chunk_f2vegtjy.K8e)(t), artifactRegistries: (0, import_chunk_hemc71zd.PYs)(t, e), setArtifactContractTarget: (0, import_chunk_f2vegtjy.AFi)(e), getArtifactContractTarget: (0, import_chunk_f2vegtjy.RFi)(t), enqueuePendingMemoryUpdate: s(e), agentLifecycle: (0, import_chunk_6t6nqmb1.JLa)(t, e) };
}
