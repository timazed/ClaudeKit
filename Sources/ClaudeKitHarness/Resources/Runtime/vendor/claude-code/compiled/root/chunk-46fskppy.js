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
var chunk_46fskppy_exports = {};
__export(chunk_46fskppy_exports, {
  D2e: () => D2e,
  Hle: () => Hle,
  Lat: () => Lat,
  PBn: () => PBn,
  TBi: () => TBi,
  Vbs: () => Vbs,
  Vdn: () => Vdn,
  _vr: () => _vr,
  _wl: () => _wl,
  ywl: () => ywl
});
module.exports = __toCommonJS(chunk_46fskppy_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function Vbs(e, n) {
  return e !== void 0 && Number.isInteger(e) && e >= 6 && e <= n ? e : 6;
}
var D2e = { first: 5, permissionRequestRenames: 6, readAllowLarge: 7, editOriginalFile: 8, containerSearchTools: 9, managedHookCall: 10, keptBackgroundCommands: 11, readCallsByToolUseId: 12, repoRulesReadHere: 13, repoRulesOnRenders: 14, repoRulesOnUploads: 15, whichCopyAsk: 16, runAnswersKept: 17, repoHooksListing: 18, readOutputDropsFileUnchanged: 19, shellDirectoryHeld: 20, pluginHttpHookCall: 21, hookConditionCall: 22, attachedComputerPermissionRequest: 23, httpHookFlagLists: 24, pluginHttpHookFlagLists: 25, startOnlyFilesOfCall: 26, stageFileConnectorChecksMade: 27, machineMcpTasks: 28, hookTranscript: 29, managedHttpHookCall: 30, shellDirectoryHeldOfAnyName: 31, hookTranscriptInMemory: 32, stageFileBrowserDownloads: 33, skillHookHttp: 34, pluginsUnreadMark: 35, readFileAnchorAndOffset: 36 };
function TBi() {
  return D2e.machineMcpTasks;
}
var f = D2e.attachedComputerPermissionRequest, s = Math.max(...Object.values(D2e)), c = { [import_chunk_k883m4fq.De]: { [import_chunk_k883m4fq.Mke]: D2e.readAllowLarge } };
function d(e, n) {
  return e === import_chunk_hn3cwwzt.ke && import_chunk_hn3cwwzt.Vj in n ? (0, import_chunk_qwbhh2k3.Pn)(n, [import_chunk_hn3cwwzt.Vj]) : n;
}
function _wl(e, n, a) {
  let o = c[e] ?? {}, r = d(e, n), t = Object.keys(o).filter((i) => a < (o[i] ?? 0) && i in r);
  return t.length === 0 ? r : (0, import_chunk_qwbhh2k3.Pn)(r, t);
}
var _vr = { version: s, min_version: Vbs(void 0, s) }, Hle = { version: _vr.version, min_version: 1 }, ywl = { ...Hle, version: D2e.machineMcpTasks - 1 }, PBn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ version: (0, import_chunk_adx6804h.Zc)().min(1), min_version: (0, import_chunk_adx6804h.Zc)().min(1) }).refine(({ version: e, min_version: n }) => n <= e));
function Vdn(e) {
  return PBn().safeParse(e).data;
}
function Lat(e, n) {
  if (n.version < e.min_version) return { kind: "peer_too_old" };
  return e.version < n.min_version ? { kind: "self_too_old" } : { kind: "agreed", version: Math.min(e.version, n.version) };
}
