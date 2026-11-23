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
var chunk_trwykz8a_exports = {};
__export(chunk_trwykz8a_exports, {
  AXe: () => AXe,
  Fmn: () => Fmn,
  Ike: () => Ike,
  Lf: () => Lf,
  POr: () => POr,
  SPe: () => SPe,
  SPo: () => SPo,
  Sd: () => Sd,
  Th: () => Th,
  WR: () => WR,
  bPo: () => bPo,
  jb: () => jb,
  m9i: () => m9i,
  mn: () => mn,
  sB: () => sB,
  xAt: () => xAt
});
module.exports = __toCommonJS(chunk_trwykz8a_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var m9i = "remote-control-device-report", jb = `<${m9i}/>`, Th = [import_chunk_k449cc64.lu, jb];
function Sd(e) {
  return Th.filter((t) => e.includes(t));
}
function SPe(e, t = 0) {
  if (typeof e === "string") return [e];
  if (t > 16) return [];
  if (Array.isArray(e)) return e.flatMap((r) => SPe(r, t + 1));
  if (!(0, import_chunk_ma3kja9f.T)(e)) return [];
  let { type: n, source: s } = e;
  switch (n) {
    case "text":
      return SPe(e.text, t + 1);
    case "tool_result":
      return SPe(e.content, t + 1);
    case "search_result":
      return SPe([e.title, s, e.content], t + 1);
    case "document":
      return SPe([e.title, e.context, ...(0, import_chunk_ma3kja9f.T)(s) ? [s.type === "text" ? s.data : void 0, s.content] : []], t + 1);
    default:
      return [];
  }
}
function AXe(e) {
  let t = SPe(e);
  return Th.filter((n) => t.some((s) => s.includes(n)));
}
function Lf(e, t) {
  return e.filter((n) => !t.includes(n)).map((n) => `${n}
`).join("");
}
function Ike(e, t) {
  let n = (0, import_chunk_k449cc64.Up)(e.includes(import_chunk_k449cc64.lu), t);
  return `${n}${Lf(e, n)}`;
}
function xAt(e) {
  let t = e?.type === "critical_system_reminder" && typeof e.content === "string" ? e.content.split(`
`) : [];
  return t.every((n) => Th.includes(n)) ? t : [];
}
function Fmn(e) {
  let t = e;
  for (let n of Th) if (t.startsWith(`${n}
`)) t = t.slice(n.length + 1);
  return t;
}
var a = 200, l = 64, g = 64, d = Date.now() - process.uptime() * 1e3;
class u {
  outputDir = void 0;
  linkedOutputs = /* @__PURE__ */ new Map();
  linksInheritedBefore = d;
  inheritedLinkLines = /* @__PURE__ */ new Map();
  inheritPredecessorLinks(e, t) {
    if (!Number.isFinite(t)) return;
    this.inheritedLinkLines.set(e, Math.max(d, Math.min(Date.now(), t)));
  }
  linksInheritedBeforeFor(e) {
    return Math.max(this.linksInheritedBefore, this.inheritedLinkLines.get(e) ?? 0);
  }
  outputPathBindings = /* @__PURE__ */ new Map();
  pendingOutputOps = /* @__PURE__ */ new Set();
  diskOutputs = /* @__PURE__ */ new Map();
  terminalEmitClaims = /* @__PURE__ */ new Set();
  runIds = /* @__PURE__ */ new Map();
  evictedRunIds = /* @__PURE__ */ new Map();
  monitorSockets = /* @__PURE__ */ new Map();
  streamedMonitorStops = /* @__PURE__ */ new Map();
  mcpCallProgress = /* @__PURE__ */ new WeakMap();
  remoteSessionLogs = /* @__PURE__ */ new Map();
  tokenReadings = /* @__PURE__ */ new Map();
  lastAgentRequests = /* @__PURE__ */ new Map();
  reportedBashTaskDeliveries = /* @__PURE__ */ new Set();
  bashTaskDeliveryOutcomes = /* @__PURE__ */ new Map();
  bashTaskSnapshots = /* @__PURE__ */ new Map();
  bashTaskGetCounts = /* @__PURE__ */ new Map();
  lastPressureReapAt = 0;
  quietShellOwners = /* @__PURE__ */ new Map();
  bashTaskGetsByResponse = /* @__PURE__ */ new Map();
  withdrawShellNotification = void 0;
  onSubagentResume = void 0;
  mainThreadContexts = /* @__PURE__ */ new Map();
  spawnedByMainThread = /* @__PURE__ */ new Set();
  inheritedCarriedMarkers = /* @__PURE__ */ new Map();
  markersFromScripts = /* @__PURE__ */ new Map();
  markersOfPastRows = /* @__PURE__ */ new Map();
  markersModsRead = /* @__PURE__ */ new Set();
  saveMarkersModsRead = void 0;
  attachmentMarkerLeads = /* @__PURE__ */ new Map();
  parkedTeardowns = /* @__PURE__ */ new Map();
  runReports = /* @__PURE__ */ new Map();
  killAgentMonitors = void 0;
  autoReactHumanTurnObserver = void 0;
  frameLiveUserStopObserver = void 0;
  autoReactDeliberateStopObserver = void 0;
  artifactRoomStopObserver = void 0;
  artifactPresenceStopObserver = void 0;
  agentIdleWindowTimers = /* @__PURE__ */ new Map();
  agentBackgroundSignalResolvers = /* @__PURE__ */ new Map();
  exclusiveCallQueuedBehind = /* @__PURE__ */ new Map();
  unfinishedCallsOfResponse = /* @__PURE__ */ new Map();
  resumesInFlight = /* @__PURE__ */ new Set();
  stoppedWithNoRecord = /* @__PURE__ */ new Map();
  chatPinForfeitedAgentIds = /* @__PURE__ */ new Set();
  canUseToolNarrowings = /* @__PURE__ */ new Map();
  runScopes = /* @__PURE__ */ new Map();
  runningAgents = /* @__PURE__ */ new Map();
  endedAgents = /* @__PURE__ */ new Map();
  runLimitKinds = /* @__PURE__ */ new Map();
  clientLaunches = /* @__PURE__ */ new Set();
  taskEvicted = (0, import_chunk_69qhefwa.Be)();
  agentStrandedMessages = (0, import_chunk_69qhefwa.Be)();
  agentSpawned = (0, import_chunk_69qhefwa.Be)();
  agentSettled = (0, import_chunk_69qhefwa.Be)();
  agentResumeFailed = (0, import_chunk_69qhefwa.Be)();
  cascadeStopExemptions = /* @__PURE__ */ new Set();
  heldShellReleases = /* @__PURE__ */ new Map();
  cascadeSpared = (0, import_chunk_69qhefwa.Be)();
  constructor() {
    this.taskEvicted.subscribe((e) => {
      this.remoteSessionLogs.delete(e), this.tokenReadings.delete(e), this.runReports.delete(e), this.endedAgents.delete(e), this.retireRunId(e);
    });
  }
  retireRunId(e) {
    let t = this.runIds.get(e);
    if (t === void 0) return;
    if (this.runIds.delete(e), this.evictedRunIds.delete(e), this.evictedRunIds.set(e, t), this.evictedRunIds.size > g) {
      let n = this.evictedRunIds.keys().next().value;
      if (n !== void 0) this.evictedRunIds.delete(n);
    }
  }
  rememberBashTaskSnapshot(e, t, n) {
    if (this.bashTaskSnapshots.delete(e), this.bashTaskSnapshots.set(e, { snapshot: t, agentId: n, fetched: false }), this.bashTaskSnapshots.size > a) {
      let s = this.bashTaskSnapshots.keys().next().value;
      if (s !== void 0) this.bashTaskSnapshots.delete(s);
    }
  }
  countBashTaskGet(e) {
    let t = (this.bashTaskGetCounts.get(e) ?? 0) + 1;
    if (this.bashTaskGetCounts.delete(e), this.bashTaskGetCounts.set(e, t), this.bashTaskGetCounts.size > a) {
      let n = this.bashTaskGetCounts.keys().next().value;
      if (n !== void 0) this.bashTaskGetCounts.delete(n);
    }
    return t;
  }
  countBashTaskGetInResponse(e, t, n) {
    let s = this.bashTaskGetsByResponse.get(e) ?? /* @__PURE__ */ new Map();
    if (this.bashTaskGetsByResponse.delete(e), this.bashTaskGetsByResponse.set(e, s), this.bashTaskGetsByResponse.size > l) {
      let o = this.bashTaskGetsByResponse.keys().next().value;
      if (o !== void 0) this.bashTaskGetsByResponse.delete(o);
    }
    let r = s.get(t), i = r?.statusKey === n ? r.count + 1 : 1;
    return s.set(t, { count: i, statusKey: n }), i;
  }
  markBashTaskSnapshotFetched(e) {
    let t = this.bashTaskSnapshots.get(e);
    if (t) this.bashTaskSnapshots.set(e, { ...t, fetched: true });
  }
  reset() {
    this.outputDir = void 0, this.linkedOutputs.clear(), this.outputPathBindings.clear();
    for (let e of this.diskOutputs.values()) e.cancel();
    this.diskOutputs.clear(), this.terminalEmitClaims.clear(), this.runLimitKinds.clear(), this.runIds.clear(), this.evictedRunIds.clear(), this.remoteSessionLogs.clear(), this.tokenReadings.clear(), this.lastAgentRequests.clear(), this.bashTaskSnapshots.clear(), this.bashTaskGetCounts.clear(), this.lastPressureReapAt = 0, this.quietShellOwners.clear(), this.bashTaskGetsByResponse.clear(), this.reportedBashTaskDeliveries.clear(), this.bashTaskDeliveryOutcomes.clear();
  }
  async drainDiskOutputs() {
    for (let e of this.diskOutputs.values()) e.cancel();
    while (this.pendingOutputOps.size > 0) await Promise.allSettled([...this.pendingOutputOps]);
    this.diskOutputs.clear();
  }
}
var p = new import_chunk_2904xtvq.j(() => new u());
function mn() {
  return p.of((0, import_chunk_f9x2f6cx.N)().host);
}
var h = 9, m = /^([0-9a-z]{9})-[0-9a-f]{8}$/;
function WR(e) {
  let { runIds: t, evictedRunIds: n } = mn();
  return t.get(e) ?? n.get(e);
}
function y(e) {
  let t = WR(e);
  return t === void 0 ? void 0 : POr(t);
}
function POr(e) {
  let t = m.exec(e)?.[1];
  return t === void 0 ? void 0 : parseInt(t, 36);
}
function SPo(e, t = f(e)) {
  mn().runIds.set(e, t);
}
function f(e) {
  return `${Math.max(Date.now(), (y(e) ?? -1) + 1).toString(36).padStart(h, "0")}-${(0, import_crypto.randomBytes)(4).toString("hex")}`;
}
var bPo = /^[A-Za-z0-9_.:-]{1,128}$/;
function sB(e) {
  return typeof e === "string" && bPo.test(e) ? e : void 0;
}
