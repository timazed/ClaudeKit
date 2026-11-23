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
var chunk_cfkfe0j1_exports = {};
__export(chunk_cfkfe0j1_exports, {
  Igo: () => Igo,
  Mgo: () => Mgo,
  Ogo: () => Ogo,
  Pgo: () => Pgo
});
module.exports = __toCommonJS(chunk_cfkfe0j1_exports);
var import_chunk_7mhs1h0h = require("/$bunfs/root/chunk-7mhs1h0h.js");
var import_chunk_dbw5qqws = require("/$bunfs/root/chunk-dbw5qqws.js");
var r = Object.freeze({}), i = Object.freeze({}), Pgo = { bagelActive: void 0, bagelUrl: void 0, bagelPanelVisible: void 0, computerUseMcpState: void 0, denialTracking: void 0, activeGoal: void 0, remoteAutocompactState: void 0, remoteSessionCostUsd: void 0, frameOpenFailedPath: null, frameOpenFailedSeen: false, artifactWatchApproved: false, artifactDbWriteApproved: false, artifactDbWriteHumanApproved: false, artifactDbReadConsentSlugs: import_chunk_dbw5qqws.Dgo, artifactDbReadHumanConsentSlugs: import_chunk_dbw5qqws.Lgo, artifactReadConsentSlugs: import_chunk_dbw5qqws.xbr, artifactConsentEpoch: 0, artifactAssetUploadConsentSlugs: import_chunk_dbw5qqws.Ngo, artifactAssetUploadHumanConsentSlugs: import_chunk_dbw5qqws.Fgo, artifactAssetReadConsentSlugs: import_chunk_dbw5qqws.Pbr, artifactAssetReadHumanConsentSlugs: import_chunk_dbw5qqws.Obr, artifactOutsideOrgConsentSlugs: import_chunk_dbw5qqws.Ibr, artifactHandlersReadConsentSlugs: import_chunk_dbw5qqws.$go, artifactHandlersReadHumanConsentSlugs: import_chunk_dbw5qqws.Ugo, artifactHandlersWriteConsentSlugs: import_chunk_dbw5qqws.Bgo, artifactHandlersWriteHumanConsentSlugs: import_chunk_dbw5qqws.Wgo, artifactRoomJoinConsentSlugs: import_chunk_dbw5qqws.Lan, artifactPlanPublishConsentPaths: import_chunk_dbw5qqws.Hgo, prResolvedThisSession: false, ultrareviewOverageConfirmed: false, artifactReadVersions: r, artifactReadObservers: i }, n = { artifactReadConsentSlugs: import_chunk_dbw5qqws.xbr, artifactAssetReadConsentSlugs: import_chunk_dbw5qqws.Pbr, artifactAssetReadHumanConsentSlugs: import_chunk_dbw5qqws.Obr, artifactOutsideOrgConsentSlugs: import_chunk_dbw5qqws.Ibr }, _ = Object.keys(n);
function Ogo(e) {
  return _.every((t) => e[t] === n[t]) ? e : { ...e, ...n };
}
var o = Object.keys(Pgo);
function Igo(e) {
  let t = e.webBrowser, s = t.view === void 0 && t.logs.length === 0 && t.unreadErrors === 0 && t.unreadWarnings === 0, S = Object.keys(e.artifactReadVersions ?? {}).length === 0 && Object.keys(e.artifactReadObservers ?? {}).length === 0;
  if (s && S && o.every((a) => a === "artifactReadVersions" || a === "artifactReadObservers" || e[a] === Pgo[a])) return e;
  return { ...e, ...Pgo, webBrowser: s ? t : { ...(0, import_chunk_7mhs1h0h.a0i)(), cleanupRegistered: t.cleanupRegistered } };
}
function Mgo(e) {
  if (e().webBrowser.view && typeof Bun < "u" && "WebView" in Bun) return Bun.WebView.closeAll(), true;
  return false;
}
