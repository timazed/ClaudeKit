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
var chunk_qdcbcsg7_exports = {};
__export(chunk_qdcbcsg7_exports, {
  $Oo: () => $Oo,
  $n: () => $n,
  Ap: () => Ap,
  Aze: () => Aze,
  BOo: () => BOo,
  CLl: () => CLl,
  DPe: () => DPe,
  DVt: () => DVt,
  ELl: () => ELl,
  GOo: () => GOo,
  Gct: () => Gct,
  Ihn: () => Ihn,
  Ioe: () => Ioe,
  KOo: () => KOo,
  Khe: () => Khe,
  Mhn: () => Mhn,
  Moe: () => Moe,
  Ohn: () => Ohn,
  PVn: () => PVn,
  Pl: () => Pl,
  Pze: () => Pze,
  Qx: () => Qx,
  Rze: () => Rze,
  SLl: () => SLl,
  TLl: () => TLl,
  UOo: () => UOo,
  VOo: () => VOo,
  Vct: () => Vct,
  Vhe: () => Vhe,
  WOo: () => WOo,
  WX: () => WX,
  Wct: () => Wct,
  _7i: () => _7i,
  _Ll: () => _Ll,
  aMr: () => aMr,
  aO: () => aO,
  bLl: () => bLl,
  c7i: () => c7i,
  f7i: () => f7i,
  fFe: () => fFe,
  fIs: () => fIs,
  fLl: () => fLl,
  g7i: () => g7i,
  gK: () => gK,
  gLl: () => gLl,
  h7i: () => h7i,
  hLl: () => hLl,
  iMr: () => iMr,
  jOo: () => jOo,
  jct: () => jct,
  kLl: () => kLl,
  m7i: () => m7i,
  mB: () => mB,
  mLl: () => mLl,
  mt: () => mt,
  nJe: () => nJe,
  oJe: () => oJe,
  oMr: () => oMr,
  p7i: () => p7i,
  pIs: () => pIs,
  pLl: () => pLl,
  qOo: () => qOo,
  rJe: () => rJe,
  rMr: () => rMr,
  ri: () => ri,
  sJe: () => sJe,
  sMr: () => sMr,
  tJe: () => tJe,
  u7i: () => u7i,
  uIs: () => uIs,
  vLl: () => vLl,
  wLl: () => wLl,
  xze: () => xze,
  y7i: () => y7i,
  yLl: () => yLl,
  zOo: () => zOo,
  zct: () => zct,
  zde: () => zde
});
module.exports = __toCommonJS(chunk_qdcbcsg7_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
function fLl(e) {
  return e;
}
function Ap(e) {
  return e;
}
class i {
  reconnect = null;
  toggle = null;
  isDisabled = null;
  dialBlockCause = null;
  policyColdStartWaiter = null;
  skippedDynamicServers = [];
  subagentBroughtOwnArtifactsServer = false;
  subagentUsesOfDial = /* @__PURE__ */ new WeakMap();
  cliOwnedConfigs = /* @__PURE__ */ new WeakSet();
  contradictedDataFlowServers = /* @__PURE__ */ new WeakSet();
  cliOwnedFirstPartyServerIds = /* @__PURE__ */ new WeakMap();
  cliOwnedFileUploadSwitches = /* @__PURE__ */ new WeakMap();
  cliOwnedBearerProviders = /* @__PURE__ */ new WeakMap();
  cliOwnedAsyncBearerProviders = /* @__PURE__ */ new WeakMap();
  cliOwnedResponseObservers = /* @__PURE__ */ new WeakMap();
  cliOwnedRequestHeaderProviders = /* @__PURE__ */ new WeakMap();
  cliOwnedBeforeRequestHooks = /* @__PURE__ */ new WeakMap();
  cliOwnedCredentialRequestHeaders = /* @__PURE__ */ new WeakMap();
  cliOwnedWithheldBearerRefusals = /* @__PURE__ */ new WeakMap();
  cliOwnedResendDeciders = /* @__PURE__ */ new WeakMap();
  ccrInjectedConfigs = /* @__PURE__ */ new WeakSet();
  ccrLaunchMcpUrls = /* @__PURE__ */ new Map();
  ccrLaunchMcpOrigins = /* @__PURE__ */ new Map();
  ccrMetaEntries = /* @__PURE__ */ new WeakSet();
  ccrProjectEntries = /* @__PURE__ */ new WeakSet();
  ownToolContainerConfigs = /* @__PURE__ */ new WeakSet();
  ownReplyServerConfigs = /* @__PURE__ */ new WeakSet();
  heldConnectorLimits = /* @__PURE__ */ new Map();
  refusedRefreshServers = /* @__PURE__ */ new Set();
  clientAuthProviders = /* @__PURE__ */ new WeakMap();
  clientFirstPartyBearers = /* @__PURE__ */ new WeakMap();
  clientTasksDeclaredBeforeServerList = /* @__PURE__ */ new WeakMap();
  clientsBuiltWithTasks = /* @__PURE__ */ new WeakMap();
  sessionFollowsTasks = false;
  firstToolsListReports = /* @__PURE__ */ new WeakMap();
  toolsListAhead = /* @__PURE__ */ new WeakMap();
  stepUpReauthFlights = /* @__PURE__ */ new Map();
  stepUpReauthExhausted = /* @__PURE__ */ new Map();
  identityEpoch = 0;
  identityBaseline = void 0;
  identitySeedAttempted = false;
  identityChangedThisProcess = false;
  identityTrippedHandler = null;
  identityTripUnowned = false;
  headlessMcpTeardown = null;
  isRunEnding = null;
  headlessConnectorMountInFlight = void 0;
  headlessConnectorsAtStart = void 0;
  transientRetryPasses = /* @__PURE__ */ new Map();
  awaitsNextTurnRedial = null;
  searchRedial = null;
  searchRedialFailures = /* @__PURE__ */ new Map();
  heldSignInOnlyDials = /* @__PURE__ */ new Set();
  dialedWithoutOAuth = /* @__PURE__ */ new Map();
  unaskedClients = /* @__PURE__ */ new WeakSet();
  redirectedMcpAddresses = /* @__PURE__ */ new Map();
  joinRounds = { count: 0, modules: void 0, answers: /* @__PURE__ */ new Map() };
  hooksLoadWait = void 0;
  spentHooksLoads = /* @__PURE__ */ new WeakSet();
  authCacheRead = null;
  authCacheWriteChain = Promise.resolve();
  rejectedStoredTokens = /* @__PURE__ */ new Map();
  connectsToRedialWithoutToken = /* @__PURE__ */ new WeakMap();
  tokenlessRejections = /* @__PURE__ */ new Map();
  savedAccessTokens = /* @__PURE__ */ new Map();
  signInClears = /* @__PURE__ */ new Map();
  signInClearsAsked = /* @__PURE__ */ new Map();
  signInClearsUnderWay = /* @__PURE__ */ new Map();
  discoverVerdictsRead = null;
  discoverVerdictsWriteChain = Promise.resolve();
  firstPartyDesignConsentAsks = /* @__PURE__ */ new Map();
  claudeAiConfigsFetch = null;
  claudeAiConfigsFetchRuns = /* @__PURE__ */ new WeakMap();
  claudeAiConnectorIdIndex = void 0;
  claudeAiConnectorListStatus = "pending";
  claudeAiConnectorBlockIndex = void 0;
  claudeAiConnectorBlockIndexSeq = 0;
  claudeAiConnectorBlockRows = [];
  claudeAiConnectorListSkippedBySwitch = false;
  claudeAiConnectorListCutWhileOff = false;
  connectorBlockHeld = void 0;
  claudeAiConnectorListGeneration = 0;
  claudeAiConnectorListFetchSeq = 0;
  claudeAiConnectorListSettledSeq = 0;
  connectorBlockMissesCounted = /* @__PURE__ */ new Set();
  connectorBlocksAsSentCounted = /* @__PURE__ */ new Set();
  connectorBlockFaultsNoted = /* @__PURE__ */ new Set();
  connectorBlockHopsCounted = /* @__PURE__ */ new Set();
  connectorBlockHopsRefused = /* @__PURE__ */ new Set();
  connectorBlockHopsOfDial = /* @__PURE__ */ new WeakMap();
  claudeAiConfigsFetchTransientFailures = /* @__PURE__ */ new WeakSet();
  claudeAiConnectorListsRead = /* @__PURE__ */ new WeakMap();
  pendingCrossOrgNotice = void 0;
  claudeAiConnectedThisSession = /* @__PURE__ */ new Set();
  needsAuthNoticedThisSession = /* @__PURE__ */ new Set();
  pendingScopeExpansionNotice = void 0;
  scopeExpansionDisclosed = false;
  officialUrls = void 0;
  listableUrlLookedUp = false;
  officialUrlsFetchAwaitsLookup = false;
  officialUrlsFetch = void 0;
  urlsRegistryCannotList = /* @__PURE__ */ new Set();
  vscodeClient = null;
  stopVscodePolicyGatesRefresh = null;
  notificationErrorHookedClients = /* @__PURE__ */ new WeakSet();
  toolRefreshSequences = /* @__PURE__ */ new WeakMap();
  droppedToolsSeqByConnection = /* @__PURE__ */ new WeakMap();
  toolsListErrorByResult = /* @__PURE__ */ new WeakMap();
  discoveryFetchErrors = /* @__PURE__ */ new WeakMap();
  rawToolsByResult = /* @__PURE__ */ new WeakMap();
  rawCommandsByResult = /* @__PURE__ */ new WeakMap();
  rawResourcesByResult = /* @__PURE__ */ new WeakMap();
  rawFetchedAtByResult = /* @__PURE__ */ new WeakMap();
  persistedDiscoveryRounds = /* @__PURE__ */ new WeakSet();
  listChangedRefetchHandlers = /* @__PURE__ */ new WeakMap();
  toolsListsAfresh = /* @__PURE__ */ new Map();
  listedWithUpload = /* @__PURE__ */ new WeakSet();
  listedDeclarations = /* @__PURE__ */ new WeakMap();
  burnedListingDiscoverPriors = /* @__PURE__ */ new Set();
  skillsFunnelSeen = /* @__PURE__ */ new Set();
  skillsFetcher = null;
  discoveryCacheStore = null;
  connectionCache = null;
  cachedFirstDialArmsRan = /* @__PURE__ */ new WeakSet();
  supersededDials = /* @__PURE__ */ new WeakSet();
  swrRefreshDialsInFlight = /* @__PURE__ */ new WeakSet();
  reauthDecisionSink = void 0;
  holdStaleReauthEntry = false;
  stdioProbeTimeoutMsOverride = void 0;
  oauthCallbackListeners = /* @__PURE__ */ new Map();
  oauthCallbackSubmitters = /* @__PURE__ */ new Map();
  activeOAuthFlows = /* @__PURE__ */ new Map();
  authLost = (0, import_chunk_69qhefwa.Be)();
  reauthReconnect = (0, import_chunk_69qhefwa.Be)();
  cachedAdopt = (0, import_chunk_69qhefwa.Be)();
  cachedDialFailed = (0, import_chunk_69qhefwa.Be)();
}
var c = new import_chunk_2904xtvq.j(() => new i());
function mt() {
  return c.of((0, import_chunk_f9x2f6cx.N)().host);
}
function $Oo(e) {
  let { oauthCallbackSubmitters: n, activeOAuthFlows: r } = mt();
  return n.has(e) || r.has(e);
}
function Aze(e, n) {
  return "url" in n && mt().dialedWithoutOAuth.get(e) === n.url;
}
function UOo(e) {
  return e?.type === "connected" && mt().unaskedClients.has(Ap(e.client));
}
function tJe(e, n) {
  return Aze(e, n) && mt().dialedWithoutOAuth.delete(e);
}
function BOo(e) {
  return mt().clientAuthProviders.has(Ap(e.client));
}
function Vhe(e, n) {
  let r = mt();
  if (r.cliOwnedConfigs.add(e), n?.firstPartyServer !== void 0) r.cliOwnedFirstPartyServerIds.set(e, n.firstPartyServer.id), r.cliOwnedFileUploadSwitches.set(e, n.firstPartyServer.allowsFileUpload);
  if (n?.getBearerToken) r.cliOwnedBearerProviders.set(e, n.getBearerToken);
  if (n?.resolveBearerToken) r.cliOwnedAsyncBearerProviders.set(e, n.resolveBearerToken);
  if (n?.onResponse) r.cliOwnedResponseObservers.set(e, n.onResponse);
  if (n?.requestHeaders) r.cliOwnedRequestHeaderProviders.set(e, n.requestHeaders);
  if (n?.beforeRequest) r.cliOwnedBeforeRequestHooks.set(e, n.beforeRequest);
  if (n?.credentialRequestHeaders) r.cliOwnedCredentialRequestHeaders.set(e, new Set(n.credentialRequestHeaders.map((t) => t.toLowerCase())));
  if (n?.resendAfter) r.cliOwnedResendDeciders.set(e, n.resendAfter);
  if (n?.withheldBearerRefusal !== void 0) r.cliOwnedWithheldBearerRefusals.set(e, n.withheldBearerRefusal);
  return e;
}
function pLl(e) {
  return typeof e === "object" && e !== null ? mt().cliOwnedWithheldBearerRefusals.get(e) : void 0;
}
function Pl(e) {
  return typeof e === "object" && e !== null && mt().cliOwnedConfigs.has(e);
}
function nJe(e) {
  return typeof e === "object" && e !== null ? mt().cliOwnedFirstPartyServerIds.get(e) : void 0;
}
function mLl(e) {
  if (typeof e !== "object" || e === null) return true;
  let n = mt().cliOwnedFileUploadSwitches.get(e);
  if (n === void 0) return nJe(e) === void 0;
  return n();
}
function rMr(e) {
  if (typeof e !== "object" || e === null) return false;
  let n = mt();
  return n.cliOwnedBearerProviders.has(e) || n.cliOwnedAsyncBearerProviders.has(e);
}
function u(e) {
  if (typeof e !== "object" || e === null) return null;
  let n = mt().cliOwnedBearerProviders.get(e);
  if (!n) return null;
  try {
    return n() || null;
  } catch {
    return null;
  }
}
async function hLl(e) {
  if (typeof e !== "object" || e === null) return null;
  let n = mt().cliOwnedAsyncBearerProviders.get(e);
  if (!n) return u(e);
  try {
    return await n() || null;
  } catch {
    return null;
  }
}
async function gLl(e, n) {
  if (typeof e !== "object" || e === null) return;
  try {
    await mt().cliOwnedBeforeRequestHooks.get(e)?.(n);
  } catch {
  }
}
function _Ll(e, n) {
  if (typeof e !== "object" || e === null) return {};
  let r = mt().cliOwnedRequestHeaderProviders.get(e);
  if (!r) return {};
  try {
    return r(n);
  } catch {
    return {};
  }
}
function c7i(e, n) {
  return typeof e === "object" && e !== null && (mt().cliOwnedCredentialRequestHeaders.get(e)?.has(n.toLowerCase()) ?? false);
}
async function u7i(e, n, r) {
  if (typeof e !== "object" || e === null) return false;
  try {
    let t = mt().cliOwnedResendDeciders.get(e);
    return t === void 0 ? false : await t({ status: n.status, headers: n.headers }, r);
  } catch {
    return false;
  }
}
function yLl(e, n) {
  if (typeof e !== "object" || e === null) return;
  let r = mt().cliOwnedResponseObservers.get(e);
  if (!r) return;
  try {
    r({ method: n.method, status: n.status, headers: n.headers, requestHeaders: n.requestHeaders, bearerFingerprint: n.bearerFingerprint });
  } catch {
  }
}
var $n = "remote-devices", uIs = "Claude_Browser__request_access", fIs = "computer_request_access", WOo = "device_request_folder_access", SLl = `mcp__${$n}__Claude_Browser__save_download`, mB = "claude_ai", pIs = `mcp__${mB}__read_conversation`, bLl = `mcp__${mB}__conversation_search`, Khe = "widgets", rJe = "ccr-email", Rze = "visualize", wLl = "6f616b42-0ed8-571e-823f-ee4aca6b7ce9", jOo = "cowork", Qx = "memory", oMr = `mcp__${Qx}__memory_`, kLl = "memory_", PVn = "a471caf9-e559-5ad8-836c-4e5972877185", DVt = "63d0e670-f310-5da6-b45c-86ffaf444223";
function Ioe(e, n) {
  if (e.length + n.length > 256) return (0, import_chunk_mzmcvr6c.cx)(n, (0, import_chunk_mzmcvr6c.cx)(e, a));
  let r = (0, import_chunk_f9x2f6cx.kr)(p), t = `${e.length}:${e}${n}`, o = r.get(t);
  if (o === void 0) {
    if (r.size >= 256) r.clear();
    o = (0, import_chunk_mzmcvr6c.cx)(n, (0, import_chunk_mzmcvr6c.cx)(e, a)), r.set(t, o);
  }
  return o;
}
var a = "00000000-0000-0000-0000-000000000000", p = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Map());
function Moe(e) {
  if (e.type !== "http") return;
  let n = "headers" in e ? e.headers : void 0;
  for (let [r, t] of Object.entries(n ?? {})) if (r.toLowerCase() === "x-mcp-server-id") return t.toLowerCase();
  return;
}
var Ohn = new import_chunk_pzzqg6s3.ze(() => ({}));
function ELl(e) {
  return Moe(e) === DVt;
}
var Wct = "758bbc64-7e6c-5dab-a3a5-2a4c7ca423fc", jct = "667a974b-0f6b-57fc-8973-52854120fcb3", xze = /* @__PURE__ */ new Set(["Claude_Pages", "Claude_Docs"]), oJe = "batch", Ihn = "create", GOo = "query", zOo = "read", Gct = "update", Pze = "1a59c906-04da-521d-bda7-7f71b9f9e01c", zct = "/v1/pages/mcp", aO = "2cd180e1-ecb6-5156-82c8-41224ae6346e", ri = "claude-artifacts", sMr = "/v1/code/mcp/ccr-artifacts", sJe = "/api/artifacts/mcp";
function VOo(e) {
  return Moe(e) === Pze;
}
var gK = `mcp__${$n}__device_bash`, iMr = `mcp__${$n}__device_stage_files`, zde = `mcp__${$n}__device_commit_files`, f7i = `mcp__${$n}__Claude_Browser__file_upload`, p7i = `mcp__${$n}__device_list_dir`, m7i = `mcp__${$n}__get_device_info`, fFe = `mcp__${$n}__`;
function h7i(e) {
  return e.startsWith(`${fFe}device_`) && !e.slice(fFe.length).includes("__");
}
var KOo = `${fFe}plugin_`;
function vLl(e, n) {
  let r = n?.["anthropic/serverId"], t = n?.["anthropic/plugin"];
  return e === $n && n?.["anthropic/kind"] === "plugin" && typeof r === "string" ? { serverId: r, ...typeof t === "string" && { origin: t }, ...n["anthropic/placement"] === "vm" && { placement: "vm" } } : void 0;
}
function TLl(e, n) {
  return false;
}
var DPe = "ide", qOo = `mcp__${DPe}__executeCode`, l = "office_bridge.listing";
function Vct(e) {
  let n = e._meta, r = typeof n === "object" && n !== null && l in n ? n[l] : void 0;
  return r === "stub" || r === "live" ? r : void 0;
}
var g7i = [gK, p7i, iMr, zde], _7i = [m7i, `mcp__${$n}__list_devices`, ...g7i], y7i = /* @__PURE__ */ new Set([DPe, $n]), _ = ["claude_in_chrome", "claude_browser", "claude_preview", "claude_code_ios_simulator", "claude_code_android_emulator", "computer_use", "framebuffer", "plugins", "skills", "mcp_registry", "scheduled_tasks", "cowork", "session_info", "dispatch", "remote_devices", "ccd_directory"], C = /* @__PURE__ */ new Set(["workspace", "terminal", "office", "visualize", "window_halo", "dev_debug", "ccd_session", import_chunk_bne5t4g3.Xct]);
function s(e) {
  return e.replace(/[^a-zA-Z0-9_-]+/g, "_").toLowerCase().replace(/-/g, "_");
}
var d = ["claude_browser"];
function aMr(e, n = d) {
  let r = s(e);
  return n.find((t) => s(t) === r) ?? null;
}
function WX(e) {
  return e.toLowerCase().replace(/[^a-z0-9]/g, "");
}
function Mhn(e, n) {
  let r = WX(e);
  return r.length > 0 && r === WX(n);
}
function CLl(e, n = d) {
  if (y7i.has(e)) return true;
  if (aMr(e, n) !== null) return false;
  let r = s(e);
  return C.has(r) || _.some((t) => r.startsWith(t));
}
