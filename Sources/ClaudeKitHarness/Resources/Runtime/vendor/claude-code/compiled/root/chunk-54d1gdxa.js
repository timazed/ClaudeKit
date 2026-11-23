const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_54d1gdxa_exports = {};
__export(chunk_54d1gdxa_exports, {
  ClaudeAiProxyBearerRejectedError: () => ui,
  GRANT_ELIGIBLE_DESIGN_WRITE_OPS: () => Ql,
  LEGACY_ELICITATION_REJECTED_MESSAGE: () => $h,
  LISTEN_REOPEN_DELAYS_MS: () => Ln,
  LegacyDialectToleratingValidator: () => Ai,
  MCP_TREE_ID: () => AP,
  applyCapabilityServeTimeMiss: () => ig,
  areMcpConfigsEqual: () => JP,
  armListenStreamReopen: () => xm,
  awaitEachWithDeadline: () => iR,
  buildFirstPartyDesignConsentAsk: () => uh,
  buildSseStreamHeaders: () => gh,
  burnListingDiscoverPrior: () => yl,
  callIdeRpc: () => rR,
  callMCPTool: () => Dn,
  callMCPToolWithUrlElicitationRetry: () => Cg,
  capMcpInstructions: () => Fl,
  captureDiscoveryGrantLeg: () => import_chunk_yrpmp1hk._Ue,
  ccrRetroactiveAskCanPrompt: () => pl,
  classifyMcpAuthFailure: () => gg,
  cleanupConnectedMcpClients: () => fR,
  clearServerCache: () => Xo,
  completeResourceTemplate: () => nR,
  composeMcpTool: () => El,
  connectToServer: () => go,
  consentAskCanReachUser: () => eu,
  createCcrProxyFetch: () => Jl,
  createClaudeAiProxyFetch: () => sh,
  createCliOwnedBearerFetch: () => rh,
  createFirstPartyApiMcpFetch: () => Js,
  createSep2663TaskBinding: () => Rg,
  denyTokenlessFirstPartyDesignWrite: () => ch,
  detachAndCloseConnection: () => Po,
  discardMemoizedConnectResult: () => jP,
  discoverySourceForMiss: () => cg,
  discoveryWireSchemas: () => dR,
  disposeServerConnectionDetached: () => ng,
  dropDiscoveryEntry: () => $r,
  droppingConfiguredCcrRequestToken: () => oh,
  emitMcpServerConnectionEvent: () => Ks,
  ensureConnectedClient: () => rn,
  ensureDiscoveryCacheAccount: () => dn,
  evictAllMcpMemosOnIdentityChange: () => FP,
  evictStaleFailedConnectMemoForServe: () => og,
  extractUrlElicitationsFromMcpError: () => hg,
  fetchCommandsForClient: () => zr,
  fetchResourceTemplatesForClient: () => rr,
  fetchResourcesForClient: () => jr,
  fetchToolsForClient: () => nr,
  getArmedRequestTimeoutMs: () => Pi,
  getDiscoveryFetchError: () => Si,
  getListingDiscoverPrior: () => qh,
  getMcpIdentityEpoch: () => import_chunk_yrpmp1hk.hi,
  getMcpRequestTimeoutMs: () => tu,
  getMcpServerConnectionBatchSize: () => wh,
  getMcpToolIdleTimeoutMs: () => Vl,
  getMcpToolTimeoutMs: () => di,
  getMcpToolsCommandsAndResources: () => ug,
  getMcpVersionNegotiation: () => Br,
  getRememberedDiscoverPrior: () => Wh,
  getRemoteMcpServerConnectionBatchSize: () => hl,
  getRootsListResponse: () => kh,
  getToolsListErrorForResult: () => XP,
  hasEraCodeInHttpErrorBody: () => Vh,
  hasLiveConnection: () => Tl,
  hasUnsettledDial: () => tg,
  hydrateCommandsFromListing: () => hu,
  hydrateToolsFromListing: () => fu,
  inertReconnectShape: () => _u,
  inferCompactSchema: () => sr,
  invalidateMcpResourceListCaches: () => zP,
  invokeToolRaw: () => uR,
  isCacheOutcomeMiss: () => dg,
  isDialDisposed: () => To,
  isFirstPartyApiMcpUrl: () => import_chunk_yz5b8aaa.Mhe,
  isFirstPartyDesignServerConfig: () => Zl,
  isLocalMcpServer: () => _l,
  isMcpAuthCached: () => dl,
  isMcpListenDenylisted: () => Uh,
  isMcpNegotiationDenylisted: () => ru,
  isMcpSessionExpiredError: () => Ir,
  isRetryableListError: () => ii,
  isSchemaApiValidateEnabledFor: () => Mh,
  isSchemaNormalizeEnabledFor: () => bh,
  isTerminalConnectionError: () => Mm,
  listToolsRaw: () => cR,
  listingPriorRejectionReason: () => Qs,
  mcpIdentityChangedSinceLastCheck: () => ZP,
  mcpToolInputToAutoClassifierInput: () => cu,
  notifyMcpRootsListChanged: () => BP,
  onMcpElicitRequest: () => qP,
  onMcpElicitationComplete: () => WP,
  onMcpNotification: () => YP,
  onMcpPromptListChanged: () => KP,
  onMcpResourceListChanged: () => GP,
  onMcpToolListChanged: () => VP,
  parseFirstPartyNeedsConsentBody: () => ah,
  peekSettledConnection: () => Nn,
  persistLiveListing: () => ag,
  persistRawDiscoveryIfComplete: () => wi,
  persistRefreshedToolsIfPresent: () => tR,
  prefetchAllMcpResources: () => aR,
  processMCPResult: () => mg,
  readResourceRaw: () => lR,
  reconnectMcpServerDistrusted: () => sR,
  reconnectMcpServerImpl: () => Ti,
  recordDiscoveryFetchErrorForResult: () => eR,
  recordFirstPartyDesignConsentAsk: () => fh,
  recordRawCommandsForResult: () => ei,
  recordRawResourcesForResult: () => or,
  recordRawToolsForResult: () => Zs,
  refreshResourceTemplates: () => oR,
  removeMcpAuthCacheEntry: () => Ur,
  resolveMcpNegotiationTransportKind: () => Fh,
  rootsListAnswerFor: () => pi,
  runCachedFirstDialArms: () => rg,
  sanitizeConnectErrorCodeForTelemetry: () => iu,
  seedMcpIdentityCheck: () => QP,
  serverReceivesPluginToolStagingRoot: () => Rh,
  setHoldStaleReauthEntryForTest: () => UP,
  setMcpReauthDecisionSinkForTest: () => xP,
  setStdioProbeTimeoutMsForTest: () => HP,
  setupSdkMcpClients: () => pR,
  suppressDesignWriteAddRules: () => Ys,
  takeFirstPartyDesignConsentAsk: () => mh,
  takeSettledCachedDialFailure: () => $P,
  toolsListParams: () => $l,
  transformMCPResult: () => fg,
  transformResultContent: () => Ni,
  withFirstPartyDesignConsentIntercept: () => hh,
  withdrawForSharingWideningDesignMcpOp: () => dh,
  wrapFetchWithTimeout: () => Qn
});
module.exports = __toCommonJS(chunk_54d1gdxa_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_72r477hv = require("/$bunfs/root/chunk-72r477hv.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_pm6bf5qr = require("/$bunfs/root/chunk-pm6bf5qr.js");
var import_chunk_dqanqm2x = require("/$bunfs/root/chunk-dqanqm2x.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_z8cg6ntt = require("/$bunfs/root/chunk-z8cg6ntt.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_44yfdc64 = require("/$bunfs/root/chunk-44yfdc64.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_418mqjww = require("/$bunfs/root/chunk-418mqjww.js");
var import_chunk_03kvdj1s = require("/$bunfs/root/chunk-03kvdj1s.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6sjp0rab = require("/$bunfs/root/chunk-6sjp0rab.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_aka192fb = require("/$bunfs/root/chunk-aka192fb.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_7n1tpv84 = require("/$bunfs/root/chunk-7n1tpv84.js");
var import_chunk_nnk8tdzz = require("/$bunfs/root/chunk-nnk8tdzz.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rfgw2dcy = require("/$bunfs/root/chunk-rfgw2dcy.js");
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_f9mxtmjz = require("/$bunfs/root/chunk-f9mxtmjz.js");
var import_chunk_sps8tde9 = require("/$bunfs/root/chunk-sps8tde9.js");
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_y6mqk49g = require("/$bunfs/root/chunk-y6mqk49g.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_kbsax5x5 = require("/$bunfs/root/chunk-kbsax5x5.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_yesjd46y = require("/$bunfs/root/chunk-yesjd46y.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_8f66wxnw = require("/$bunfs/root/chunk-8f66wxnw.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_ay36ksef = require("/$bunfs/root/chunk-ay36ksef.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_3hr8g93j = require("/$bunfs/root/chunk-3hr8g93j.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_8tg38aha = require("/$bunfs/root/chunk-8tg38aha.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_nr0e9cdy = require("/$bunfs/root/chunk-nr0e9cdy.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_m20gh621 = require("/$bunfs/root/chunk-m20gh621.js");
var import_chunk_kvvabk01 = require("/$bunfs/root/chunk-kvvabk01.js");
var import_chunk_1kh4zp5v = require("/$bunfs/root/chunk-1kh4zp5v.js");
var import_chunk_yqt5s0xz = require("/$bunfs/root/chunk-yqt5s0xz.js");
var import_chunk_5qhr9bm2 = require("/$bunfs/root/chunk-5qhr9bm2.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_an3w1y1q = require("/$bunfs/root/chunk-an3w1y1q.js");
var import_chunk_p9gcfhjr = require("/$bunfs/root/chunk-p9gcfhjr.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_gt0vfa7p = require("/$bunfs/root/chunk-gt0vfa7p.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var import_chunk_tvq790h1 = require("/$bunfs/root/chunk-tvq790h1.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_g9n176jp = require("/$bunfs/root/chunk-g9n176jp.js");
var import_chunk_racn22qq = require("/$bunfs/root/chunk-racn22qq.js");
var import_chunk_6d79247d = require("/$bunfs/root/chunk-6d79247d.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_r6fna520 = require("/$bunfs/root/chunk-r6fna520.js");
var import_chunk_d0bewyh8 = require("/$bunfs/root/chunk-d0bewyh8.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ddznn4yb = require("/$bunfs/root/chunk-ddznn4yb.js");
var import_chunk_dzf5h538 = require("/$bunfs/root/chunk-dzf5h538.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_a6xqvbh2 = require("/$bunfs/root/chunk-a6xqvbh2.js");
var import_chunk_4dnx2vkh = require("/$bunfs/root/chunk-4dnx2vkh.js");
var import_chunk_vc431dg0 = require("/$bunfs/root/chunk-vc431dg0.js");
var import_chunk_ta6q9jek = require("/$bunfs/root/chunk-ta6q9jek.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_p2s0km69 = require("/$bunfs/root/chunk-p2s0km69.js");
var import_chunk_kmbc34js = require("/$bunfs/root/chunk-kmbc34js.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_5m00y1wc = require("/$bunfs/root/chunk-5m00y1wc.js");
var import_chunk_a7h1jnra = require("/$bunfs/root/chunk-a7h1jnra.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_s0zsg6za = require("/$bunfs/root/chunk-s0zsg6za.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_w0pnqmj8 = require("/$bunfs/root/chunk-w0pnqmj8.js");
var import_chunk_9y45rehj = require("/$bunfs/root/chunk-9y45rehj.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_fa4dxeec = require("/$bunfs/root/chunk-fa4dxeec.js");
var import_chunk_6xae35jp = require("/$bunfs/root/chunk-6xae35jp.js");
var import_chunk_2fxy1zey = require("/$bunfs/root/chunk-2fxy1zey.js");
var import_chunk_nw2twe6x = require("/$bunfs/root/chunk-nw2twe6x.js");
var import_chunk_b9qnxh4s = require("/$bunfs/root/chunk-b9qnxh4s.js");
var import_chunk_mxhw2w5n = require("/$bunfs/root/chunk-mxhw2w5n.js");
var import_chunk_tvbk4t18 = require("/$bunfs/root/chunk-tvbk4t18.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_pzj67pdt = require("/$bunfs/root/chunk-pzj67pdt.js");
var import_chunk_6a9gdcsm = require("/$bunfs/root/chunk-6a9gdcsm.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_84n38n3t = require("/$bunfs/root/chunk-84n38n3t.js");
var import_chunk_a9pcmp5n = require("/$bunfs/root/chunk-a9pcmp5n.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_fc3gfgch = require("/$bunfs/root/chunk-fc3gfgch.js");
var import_chunk_1hg0ytx8 = require("/$bunfs/root/chunk-1hg0ytx8.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_jtppe9b0 = require("/$bunfs/root/chunk-jtppe9b0.js");
var import_chunk_yn71faep = require("/$bunfs/root/chunk-yn71faep.js");
var import_chunk_fe5esh7d = require("/$bunfs/root/chunk-fe5esh7d.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_e5q83yb8 = require("/$bunfs/root/chunk-e5q83yb8.js");
var import_chunk_p548ry42 = require("/$bunfs/root/chunk-p548ry42.js");
var import_chunk_1ag56sne = require("/$bunfs/root/chunk-1ag56sne.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_gtxzjvjq = require("/$bunfs/root/chunk-gtxzjvjq.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_kma6xjgr = require("/$bunfs/root/chunk-kma6xjgr.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_xzph4c6z = require("/$bunfs/root/chunk-xzph4c6z.js");
var import_chunk_0rbztqww = require("/$bunfs/root/chunk-0rbztqww.js");
var import_chunk_pkzhb7kv = require("/$bunfs/root/chunk-pkzhb7kv.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_zcpqgt0x = require("/$bunfs/root/chunk-zcpqgt0x.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_g03qj0bk = require("/$bunfs/root/chunk-g03qj0bk.js");
var import_chunk_z9f6hbhp = require("/$bunfs/root/chunk-z9f6hbhp.js");
var import_chunk_qp5chy39 = require("/$bunfs/root/chunk-qp5chy39.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_ygx90amt = require("/$bunfs/root/chunk-ygx90amt.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_7fjbagnr = require("/$bunfs/root/chunk-7fjbagnr.js");
var import_chunk_q4pszsad = require("/$bunfs/root/chunk-q4pszsad.js");
var import_chunk_pb0vn6an = require("/$bunfs/root/chunk-pb0vn6an.js");
var import_chunk_4ssv8fte = require("/$bunfs/root/chunk-4ssv8fte.js");
var import_chunk_ejeefcyk = require("/$bunfs/root/chunk-ejeefcyk.js");
var import_chunk_4b5275ey = require("/$bunfs/root/chunk-4b5275ey.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_5w3q7h0v = require("/$bunfs/root/chunk-5w3q7h0v.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_pyawkp3j = require("/$bunfs/root/chunk-pyawkp3j.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_yvad17bv = require("/$bunfs/root/chunk-yvad17bv.js");
var import_chunk_4s4nxvxt = require("/$bunfs/root/chunk-4s4nxvxt.js");
var import_chunk_3zfyrdna = require("/$bunfs/root/chunk-3zfyrdna.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_c1hnv4fm = require("/$bunfs/root/chunk-c1hnv4fm.js");
var import_chunk_0vvtfqck = require("/$bunfs/root/chunk-0vvtfqck.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_0a69wnzr = require("/$bunfs/root/chunk-0a69wnzr.js");
var import_chunk_6k9zs54e = require("/$bunfs/root/chunk-6k9zs54e.js");
var import_chunk_p3d6wgn7 = require("/$bunfs/root/chunk-p3d6wgn7.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_etk95yep = require("/$bunfs/root/chunk-etk95yep.js");
var import_chunk_axd2vhx2 = require("/$bunfs/root/chunk-axd2vhx2.js");
var import_chunk_ae4rjsvk = require("/$bunfs/root/chunk-ae4rjsvk.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_p052vp7t = require("/$bunfs/root/chunk-p052vp7t.js");
var import_chunk_vs7p9j3v = require("/$bunfs/root/chunk-vs7p9j3v.js");
var import_chunk_vhpt9t1j = require("/$bunfs/root/chunk-vhpt9t1j.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_s7eqtcpb = require("/$bunfs/root/chunk-s7eqtcpb.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_b3gt63am = require("/$bunfs/root/chunk-b3gt63am.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
var import_chunk_81q3wevd = require("/$bunfs/root/chunk-81q3wevd.js");
var import_chunk_xkpbmcsq = require("/$bunfs/root/chunk-xkpbmcsq.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_0c92mmpr = require("/$bunfs/root/chunk-0c92mmpr.js");
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_npsm5tcc = require("/$bunfs/root/chunk-npsm5tcc.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_txqh3v33 = require("/$bunfs/root/chunk-txqh3v33.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_89bjmq9y = require("/$bunfs/root/chunk-89bjmq9y.js");
var import_chunk_jzfcqxfe = require("/$bunfs/root/chunk-jzfcqxfe.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_x7880gvk = require("/$bunfs/root/chunk-x7880gvk.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_97tvwnfb = require("/$bunfs/root/chunk-97tvwnfb.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_vn6r8r95 = require("/$bunfs/root/chunk-vn6r8r95.js");
var import_chunk_1tyxkk56 = require("/$bunfs/root/chunk-1tyxkk56.js");
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_3a2r0s2z = require("/$bunfs/root/chunk-3a2r0s2z.js");
var import_chunk_j2ybpxmz = require("/$bunfs/root/chunk-j2ybpxmz.js");
var import_chunk_g6k95sax = require("/$bunfs/root/chunk-g6k95sax.js");
var import_chunk_qv6h6wr9 = require("/$bunfs/root/chunk-qv6h6wr9.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_cq1312e8 = require("/$bunfs/root/chunk-cq1312e8.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_qwcebyxc = require("/$bunfs/root/chunk-qwcebyxc.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_yq00hd9s = require("/$bunfs/root/chunk-yq00hd9s.js");
var import_chunk_7jczpc8b = require("/$bunfs/root/chunk-7jczpc8b.js");
var import_chunk_gp23aqt9 = require("/$bunfs/root/chunk-gp23aqt9.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_859v5edd = require("/$bunfs/root/chunk-859v5edd.js");
var import_chunk_e15pxvhz = require("/$bunfs/root/chunk-e15pxvhz.js");
var import_chunk_dkc86g0t = require("/$bunfs/root/chunk-dkc86g0t.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_jnrh77bs = require("/$bunfs/root/chunk-jnrh77bs.js");
var import_chunk_2vn4k5m6 = require("/$bunfs/root/chunk-2vn4k5m6.js");
var import_chunk_q7cfnzfy = require("/$bunfs/root/chunk-q7cfnzfy.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_6dfy8crz = require("/$bunfs/root/chunk-6dfy8crz.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_1ea72zr6 = require("/$bunfs/root/chunk-1ea72zr6.js");
var import_chunk_j59m93ez = require("/$bunfs/root/chunk-j59m93ez.js");
var import_chunk_507k3c1m = require("/$bunfs/root/chunk-507k3c1m.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_179jgyn9 = require("/$bunfs/root/chunk-179jgyn9.js");
var import_chunk_a9nnd83v = require("/$bunfs/root/chunk-a9nnd83v.js");
var import_chunk_d70fgf5t = require("/$bunfs/root/chunk-d70fgf5t.js");
var import_chunk_6s9tac84 = require("/$bunfs/root/chunk-6s9tac84.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_q5veqmrm = require("/$bunfs/root/chunk-q5veqmrm.js");
var import_chunk_a152y2zc = require("/$bunfs/root/chunk-a152y2zc.js");
var import_chunk_z12zbtvr = require("/$bunfs/root/chunk-z12zbtvr.js");
var import_chunk_tnmn1726 = require("/$bunfs/root/chunk-tnmn1726.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_9r4r85pg = require("/$bunfs/root/chunk-9r4r85pg.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_chunk_hgbq13xy = require("/$bunfs/root/chunk-hgbq13xy.js");
var import_chunk_wnt799dt = require("/$bunfs/root/chunk-wnt799dt.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_snpsm13w = require("/$bunfs/root/chunk-snpsm13w.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_q0pdqy04 = require("/$bunfs/root/chunk-q0pdqy04.js");
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_d3vfy4gs = require("/$bunfs/root/chunk-d3vfy4gs.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_wxn0h5vf = require("/$bunfs/root/chunk-wxn0h5vf.js");
var import_chunk_2wqvb3q7 = require("/$bunfs/root/chunk-2wqvb3q7.js");
var import_chunk_02wf5c4s = require("/$bunfs/root/chunk-02wf5c4s.js");
var import_chunk_5ke1b82m = require("/$bunfs/root/chunk-5ke1b82m.js");
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_ak45b7eq = require("/$bunfs/root/chunk-ak45b7eq.js");
var import_chunk_00egnvdb = require("/$bunfs/root/chunk-00egnvdb.js");
var import_chunk_hvkyrv0z = require("/$bunfs/root/chunk-hvkyrv0z.js");
var import_chunk_6x49srhn = require("/$bunfs/root/chunk-6x49srhn.js");
var import_chunk_pjgajh0r = require("/$bunfs/root/chunk-pjgajh0r.js");
var import_chunk_7ds2xzy3 = require("/$bunfs/root/chunk-7ds2xzy3.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_6b5tg8j3 = require("/$bunfs/root/chunk-6b5tg8j3.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
var import_chunk_wvxk15ee = require("/$bunfs/root/chunk-wvxk15ee.js");
var import_chunk_31sz6df3 = require("/$bunfs/root/chunk-31sz6df3.js");
var import_chunk_07kqypdk = require("/$bunfs/root/chunk-07kqypdk.js");
var import_chunk_qnq7dhb5 = require("/$bunfs/root/chunk-qnq7dhb5.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_1n9wdcmg = require("/$bunfs/root/chunk-1n9wdcmg.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_f6abynt8 = require("/$bunfs/root/chunk-f6abynt8.js");
var import_chunk_0ty8qx28 = require("/$bunfs/root/chunk-0ty8qx28.js");
var import_chunk_rnad4hj1 = require("/$bunfs/root/chunk-rnad4hj1.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_bs4v8td1 = require("/$bunfs/root/chunk-bs4v8td1.js");
var import_chunk_z1z1qsrb = require("/$bunfs/root/chunk-z1z1qsrb.js");
var import_chunk_qhpw13wh = require("/$bunfs/root/chunk-qhpw13wh.js");
var import_chunk_q2a93xh8 = require("/$bunfs/root/chunk-q2a93xh8.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_hmc67k1s = require("/$bunfs/root/chunk-hmc67k1s.js");
var import_chunk_02cqsykt = require("/$bunfs/root/chunk-02cqsykt.js");
var import_chunk_tmh9ctw1 = require("/$bunfs/root/chunk-tmh9ctw1.js");
var import_chunk_21cxvf80 = require("/$bunfs/root/chunk-21cxvf80.js");
var import_chunk_w1zyy3zs = require("/$bunfs/root/chunk-w1zyy3zs.js");
var import_chunk_wpyz5pav = require("/$bunfs/root/chunk-wpyz5pav.js");
var import_chunk_5gh3v8c1 = require("/$bunfs/root/chunk-5gh3v8c1.js");
var import_chunk_pcsags68 = require("/$bunfs/root/chunk-pcsags68.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
var import_chunk_74mx55jd = require("/$bunfs/root/chunk-74mx55jd.js");
var import_chunk_1w26p6p9 = require("/$bunfs/root/chunk-1w26p6p9.js");
var import_chunk_hj4mak61 = require("/$bunfs/root/chunk-hj4mak61.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_44g93ygc = require("/$bunfs/root/chunk-44g93ygc.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_ghhxe1kj = require("/$bunfs/root/chunk-ghhxe1kj.js");
var import_chunk_c2m5gm43 = require("/$bunfs/root/chunk-c2m5gm43.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_x9vzz8b9 = require("/$bunfs/root/chunk-x9vzz8b9.js");
var import_chunk_jmm1stqj = require("/$bunfs/root/chunk-jmm1stqj.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_sdks5h78 = require("/$bunfs/root/chunk-sdks5h78.js");
var import_chunk_vfw28y4s = require("/$bunfs/root/chunk-vfw28y4s.js");
var import_chunk_r3wrey46 = require("/$bunfs/root/chunk-r3wrey46.js");
var import_chunk_p6a07y1c = require("/$bunfs/root/chunk-p6a07y1c.js");
var import_chunk_r0jt20hr = require("/$bunfs/root/chunk-r0jt20hr.js");
var import_chunk_z2tg7jn4 = require("/$bunfs/root/chunk-z2tg7jn4.js");
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
var import_chunk_kcy9vg4b = require("/$bunfs/root/chunk-kcy9vg4b.js");
var import_chunk_6qsjjx4s = require("/$bunfs/root/chunk-6qsjjx4s.js");
var import_chunk_zh47ka3v = require("/$bunfs/root/chunk-zh47ka3v.js");
var import_chunk_21y9ek9j = require("/$bunfs/root/chunk-21y9ek9j.js");
var import_chunk_sg5zbskk = require("/$bunfs/root/chunk-sg5zbskk.js");
var import_chunk_1dkksxs0 = require("/$bunfs/root/chunk-1dkksxs0.js");
var import_chunk_1p0ddgd7 = require("/$bunfs/root/chunk-1p0ddgd7.js");
var import_chunk_jm0134kz = require("/$bunfs/root/chunk-jm0134kz.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_7xxwg4th = require("/$bunfs/root/chunk-7xxwg4th.js");
var import_chunk_5ft9yxne = require("/$bunfs/root/chunk-5ft9yxne.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_mw2v4wks = require("/$bunfs/root/chunk-mw2v4wks.js");
var import_chunk_vbjta162 = require("/$bunfs/root/chunk-vbjta162.js");
var import_chunk_x9aavfmb = require("/$bunfs/root/chunk-x9aavfmb.js");
var import_chunk_gqe1nb2a = require("/$bunfs/root/chunk-gqe1nb2a.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_yrh4vxq4 = require("/$bunfs/root/chunk-yrh4vxq4.js");
var import_chunk_ttsnbbsg = require("/$bunfs/root/chunk-ttsnbbsg.js");
var import_chunk_46p8h02m = require("/$bunfs/root/chunk-46p8h02m.js");
var import_chunk_6wgyy4rn = require("/$bunfs/root/chunk-6wgyy4rn.js");
var import_chunk_9vbqjvhj = require("/$bunfs/root/chunk-9vbqjvhj.js");
var import_chunk_yf5ktj74 = require("/$bunfs/root/chunk-yf5ktj74.js");
var import_chunk_k46cdxhb = require("/$bunfs/root/chunk-k46cdxhb.js");
var import_chunk_jrzfkd53 = require("/$bunfs/root/chunk-jrzfkd53.js");
var import_chunk_am20pvy7 = require("/$bunfs/root/chunk-am20pvy7.js");
var import_chunk_xkpc4wvy = require("/$bunfs/root/chunk-xkpc4wvy.js");
var import_chunk_f5n8840h = require("/$bunfs/root/chunk-f5n8840h.js");
var import_chunk_a5aq0pxy = require("/$bunfs/root/chunk-a5aq0pxy.js");
var import_chunk_4e90ethg = require("/$bunfs/root/chunk-4e90ethg.js");
var import_chunk_th6rswmx = require("/$bunfs/root/chunk-th6rswmx.js");
var import_chunk_8sy6wsb2 = require("/$bunfs/root/chunk-8sy6wsb2.js");
var import_chunk_g44r9njd = require("/$bunfs/root/chunk-g44r9njd.js");
var import_chunk_h5jsp3s5 = require("/$bunfs/root/chunk-h5jsp3s5.js");
var import_chunk_afpjshr0 = require("/$bunfs/root/chunk-afpjshr0.js");
var import_chunk_szpzqs89 = require("/$bunfs/root/chunk-szpzqs89.js");
var import_chunk_rwc528c4 = require("/$bunfs/root/chunk-rwc528c4.js");
var import_chunk_dfyba0ch = require("/$bunfs/root/chunk-dfyba0ch.js");
var import_chunk_qt3kq0hf = require("/$bunfs/root/chunk-qt3kq0hf.js");
var import_chunk_ag73x1p3 = require("/$bunfs/root/chunk-ag73x1p3.js");
var import_chunk_vfh414sa = require("/$bunfs/root/chunk-vfh414sa.js");
var import_chunk_gjddj128 = require("/$bunfs/root/chunk-gjddj128.js");
var import_chunk_jejz6sfb = require("/$bunfs/root/chunk-jejz6sfb.js");
var import_chunk_ttkwnzeb = require("/$bunfs/root/chunk-ttkwnzeb.js");
var import_chunk_w8ry7jkt = require("/$bunfs/root/chunk-w8ry7jkt.js");
var import_chunk_htn4d0yq = require("/$bunfs/root/chunk-htn4d0yq.js");
var import_chunk_x8rfwr2t = require("/$bunfs/root/chunk-x8rfwr2t.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
var import_chunk_tgn73pvk = require("/$bunfs/root/chunk-tgn73pvk.js");
var import_chunk_z88wr2ke = require("/$bunfs/root/chunk-z88wr2ke.js");
var import_chunk_k2g55agd = require("/$bunfs/root/chunk-k2g55agd.js");
var import_chunk_s12gh88k = require("/$bunfs/root/chunk-s12gh88k.js");
var import_chunk_bsnb5bky = require("/$bunfs/root/chunk-bsnb5bky.js");
var import_chunk_qsvts4bv = require("/$bunfs/root/chunk-qsvts4bv.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_kf08yh2z = require("/$bunfs/root/chunk-kf08yh2z.js");
var import_chunk_3m4xkn4b = require("/$bunfs/root/chunk-3m4xkn4b.js");
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_vwr252r7 = require("/$bunfs/root/chunk-vwr252r7.js");
var import_chunk_r9mc45j8 = require("/$bunfs/root/chunk-r9mc45j8.js");
var import_chunk_e18ra2xv = require("/$bunfs/root/chunk-e18ra2xv.js");
var import_chunk_2qh29p4b = require("/$bunfs/root/chunk-2qh29p4b.js");
var import_chunk_zptyswqz = require("/$bunfs/root/chunk-zptyswqz.js");
var import_chunk_yv3afk5n = require("/$bunfs/root/chunk-yv3afk5n.js");
var import_chunk_gk0jv3qt = require("/$bunfs/root/chunk-gk0jv3qt.js");
var import_chunk_bt5spb39 = require("/$bunfs/root/chunk-bt5spb39.js");
var import_chunk_86sakbrd = require("/$bunfs/root/chunk-86sakbrd.js");
var import_chunk_wbm3qtjx = require("/$bunfs/root/chunk-wbm3qtjx.js");
var import_chunk_0snrq607 = require("/$bunfs/root/chunk-0snrq607.js");
var import_chunk_cbqbjyfn = require("/$bunfs/root/chunk-cbqbjyfn.js");
var import_chunk_v6x86eph = require("/$bunfs/root/chunk-v6x86eph.js");
var import_chunk_akez6ycw = require("/$bunfs/root/chunk-akez6ycw.js");
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_chunk_cdfjrfzp = require("/$bunfs/root/chunk-cdfjrfzp.js");
var import_chunk_52cad0n6 = require("/$bunfs/root/chunk-52cad0n6.js");
var import_chunk_7z55j6ad = require("/$bunfs/root/chunk-7z55j6ad.js");
var import_chunk_478m53m1 = require("/$bunfs/root/chunk-478m53m1.js");
var import_chunk_2qx36shh = require("/$bunfs/root/chunk-2qx36shh.js");
var import_chunk_qenyadqg = require("/$bunfs/root/chunk-qenyadqg.js");
var import_chunk_ka9ph908 = require("/$bunfs/root/chunk-ka9ph908.js");
var import_chunk_22v99jwc = require("/$bunfs/root/chunk-22v99jwc.js");
var import_chunk_mt7e13yk = require("/$bunfs/root/chunk-mt7e13yk.js");
var import_chunk_by0bbhe6 = require("/$bunfs/root/chunk-by0bbhe6.js");
var import_chunk_14m79r0k = require("/$bunfs/root/chunk-14m79r0k.js");
var import_chunk_apmh0yjy = require("/$bunfs/root/chunk-apmh0yjy.js");
var import_chunk_v3ek5a4a = require("/$bunfs/root/chunk-v3ek5a4a.js");
var import_chunk_b0n2a2c9 = require("/$bunfs/root/chunk-b0n2a2c9.js");
var import_chunk_e2p0azgz = require("/$bunfs/root/chunk-e2p0azgz.js");
var import_chunk_kj84g0v7 = require("/$bunfs/root/chunk-kj84g0v7.js");
var import_chunk_vp3hv9ky = require("/$bunfs/root/chunk-vp3hv9ky.js");
var import_chunk_jnzfg7cq = require("/$bunfs/root/chunk-jnzfg7cq.js");
var import_chunk_r64qzndq = require("/$bunfs/root/chunk-r64qzndq.js");
var import_chunk_w5811gqy = require("/$bunfs/root/chunk-w5811gqy.js");
var import_chunk_4qkqgt25 = require("/$bunfs/root/chunk-4qkqgt25.js");
var import_chunk_8yvg0j99 = require("/$bunfs/root/chunk-8yvg0j99.js");
var import_chunk_1jfwdjvf = require("/$bunfs/root/chunk-1jfwdjvf.js");
var import_chunk_538r8e0n = require("/$bunfs/root/chunk-538r8e0n.js");
var import_chunk_3fqcfedz = require("/$bunfs/root/chunk-3fqcfedz.js");
var import_chunk_fkbh0xha = require("/$bunfs/root/chunk-fkbh0xha.js");
var import_chunk_tgj1b0ts = require("/$bunfs/root/chunk-tgj1b0ts.js");
var import_chunk_zmjx1k2j = require("/$bunfs/root/chunk-zmjx1k2j.js");
var import_chunk_tntx4v84 = require("/$bunfs/root/chunk-tntx4v84.js");
var import_chunk_8v27xkv5 = require("/$bunfs/root/chunk-8v27xkv5.js");
var import_chunk_hcjp5g4r = require("/$bunfs/root/chunk-hcjp5g4r.js");
var import_chunk_31467yzh = require("/$bunfs/root/chunk-31467yzh.js");
var import_chunk_ca9ws28w = require("/$bunfs/root/chunk-ca9ws28w.js");
var import_chunk_2atp9x7j = require("/$bunfs/root/chunk-2atp9x7j.js");
var import_chunk_0s8m8bar = require("/$bunfs/root/chunk-0s8m8bar.js");
var import_chunk_9zhva0nf = require("/$bunfs/root/chunk-9zhva0nf.js");
var import_chunk_q1sh0fgd = require("/$bunfs/root/chunk-q1sh0fgd.js");
var import_chunk_924etrq7 = require("/$bunfs/root/chunk-924etrq7.js");
var import_chunk_81nggker = require("/$bunfs/root/chunk-81nggker.js");
var import_chunk_jhasw6a0 = require("/$bunfs/root/chunk-jhasw6a0.js");
var import_chunk_w1j4pyn0 = require("/$bunfs/root/chunk-w1j4pyn0.js");
var import_chunk_a5r4xv9h = require("/$bunfs/root/chunk-a5r4xv9h.js");
var import_chunk_anfdrvmv = require("/$bunfs/root/chunk-anfdrvmv.js");
var import_chunk_tpax7jmw = require("/$bunfs/root/chunk-tpax7jmw.js");
var import_chunk_ye486ddj = require("/$bunfs/root/chunk-ye486ddj.js");
var import_chunk_0a5vv9nr = require("/$bunfs/root/chunk-0a5vv9nr.js");
var import_chunk_1y3twj4q = require("/$bunfs/root/chunk-1y3twj4q.js");
var import_chunk_rvw4ecc0 = require("/$bunfs/root/chunk-rvw4ecc0.js");
var import_chunk_btfm8m05 = require("/$bunfs/root/chunk-btfm8m05.js");
var import_chunk_48vr3t96 = require("/$bunfs/root/chunk-48vr3t96.js");
var import_chunk_drrj083m = require("/$bunfs/root/chunk-drrj083m.js");
var import_chunk_p0p19erm = require("/$bunfs/root/chunk-p0p19erm.js");
var import_chunk_6geanr2a = require("/$bunfs/root/chunk-6geanr2a.js");
var import_chunk_zdtzd1bp = require("/$bunfs/root/chunk-zdtzd1bp.js");
var import_chunk_h9qt07a5 = require("/$bunfs/root/chunk-h9qt07a5.js");
var import_chunk_wd66nsbc = require("/$bunfs/root/chunk-wd66nsbc.js");
var import_chunk_yta0vzjp = require("/$bunfs/root/chunk-yta0vzjp.js");
var import_chunk_7sbhbwjm = require("/$bunfs/root/chunk-7sbhbwjm.js");
var import_chunk_7p90qgrg = require("/$bunfs/root/chunk-7p90qgrg.js");
var import_chunk_6c0jwb75 = require("/$bunfs/root/chunk-6c0jwb75.js");
var import_chunk_gea9tjyt = require("/$bunfs/root/chunk-gea9tjyt.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_abbz0fqx = require("/$bunfs/root/chunk-abbz0fqx.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_e09cft3a = require("/$bunfs/root/chunk-e09cft3a.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
var import_chunk_72w4k1fr = require("/$bunfs/root/chunk-72w4k1fr.js");
var import_chunk_s3bbbse4 = require("/$bunfs/root/chunk-s3bbbse4.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_gkm2eky6 = require("/$bunfs/root/chunk-gkm2eky6.js");
var import_chunk_4684b8fc = require("/$bunfs/root/chunk-4684b8fc.js");
var import_chunk_p78dm83c = require("/$bunfs/root/chunk-p78dm83c.js");
var import_chunk_bf14swcm = require("/$bunfs/root/chunk-bf14swcm.js");
var import_chunk_sk0gc06z = require("/$bunfs/root/chunk-sk0gc06z.js");
var import_chunk_bdxa2qdh = require("/$bunfs/root/chunk-bdxa2qdh.js");
var import_chunk_58apc8rx = require("/$bunfs/root/chunk-58apc8rx.js");
var import_chunk_1ksp50wj = require("/$bunfs/root/chunk-1ksp50wj.js");
var import_chunk_nb21njpa = require("/$bunfs/root/chunk-nb21njpa.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_rtsmzy7m = require("/$bunfs/root/chunk-rtsmzy7m.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var import_chunk_tnzbvb83 = require("/$bunfs/root/chunk-tnzbvb83.js");
var import_chunk_4vfdya4f = require("/$bunfs/root/chunk-4vfdya4f.js");
var import_chunk_g5kcfqmg = require("/$bunfs/root/chunk-g5kcfqmg.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_cwkztn5x = require("/$bunfs/root/chunk-cwkztn5x.js");
var import_chunk_zmrcnbgs = require("/$bunfs/root/chunk-zmrcnbgs.js");
var import_chunk_1pan7v6b = require("/$bunfs/root/chunk-1pan7v6b.js");
var import_chunk_4fssttte = require("/$bunfs/root/chunk-4fssttte.js");
var import_chunk_5m9vge4h = require("/$bunfs/root/chunk-5m9vge4h.js");
var import_chunk_drtv8e2x = require("/$bunfs/root/chunk-drtv8e2x.js");
var import_chunk_jg286npj = require("/$bunfs/root/chunk-jg286npj.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_x0vfzwdd = require("/$bunfs/root/chunk-x0vfzwdd.js");
var import_chunk_2xg3wmhp = require("/$bunfs/root/chunk-2xg3wmhp.js");
var import_chunk_shs9e3r5 = require("/$bunfs/root/chunk-shs9e3r5.js");
var import_chunk_5qqp06t1 = require("/$bunfs/root/chunk-5qqp06t1.js");
var import_chunk_8mmj96hs = require("/$bunfs/root/chunk-8mmj96hs.js");
var import_chunk_nq3exp5d = require("/$bunfs/root/chunk-nq3exp5d.js");
var import_chunk_ksk52rm1 = require("/$bunfs/root/chunk-ksk52rm1.js");
var import_chunk_vqrgm5ev = require("/$bunfs/root/chunk-vqrgm5ev.js");
var import_chunk_r3e8vdzv = require("/$bunfs/root/chunk-r3e8vdzv.js");
var import_chunk_cc0rj9gh = require("/$bunfs/root/chunk-cc0rj9gh.js");
var import_chunk_07r720jc = require("/$bunfs/root/chunk-07r720jc.js");
var import_chunk_j7dp96he = require("/$bunfs/root/chunk-j7dp96he.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_mj4h1wdm = require("/$bunfs/root/chunk-mj4h1wdm.js");
var import_chunk_q4y63y6c = require("/$bunfs/root/chunk-q4y63y6c.js");
var import_chunk_20m87428 = require("/$bunfs/root/chunk-20m87428.js");
var import_chunk_g78kc1rr = require("/$bunfs/root/chunk-g78kc1rr.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_pnqybv63 = require("/$bunfs/root/chunk-pnqybv63.js");
var import_chunk_587zek71 = require("/$bunfs/root/chunk-587zek71.js");
var import_chunk_4rp6k6sw = require("/$bunfs/root/chunk-4rp6k6sw.js");
var import_chunk_tps03s5j = require("/$bunfs/root/chunk-tps03s5j.js");
var import_chunk_k4bqn7hc = require("/$bunfs/root/chunk-k4bqn7hc.js");
var import_chunk_g3a1gwww = require("/$bunfs/root/chunk-g3a1gwww.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_8x650tx8 = require("/$bunfs/root/chunk-8x650tx8.js");
var import_chunk_spnfty7j = require("/$bunfs/root/chunk-spnfty7j.js");
var import_chunk_dwxd9se5 = require("/$bunfs/root/chunk-dwxd9se5.js");
var import_chunk_pbbjnb48 = require("/$bunfs/root/chunk-pbbjnb48.js");
var import_chunk_4xgvg9z4 = require("/$bunfs/root/chunk-4xgvg9z4.js");
var import_chunk_tsfdtsmv = require("/$bunfs/root/chunk-tsfdtsmv.js");
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
var import_chunk_75f58nqg = require("/$bunfs/root/chunk-75f58nqg.js");
var import_chunk_r216zqgx = require("/$bunfs/root/chunk-r216zqgx.js");
var import_chunk_01eypw0a = require("/$bunfs/root/chunk-01eypw0a.js");
var import_chunk_etd6y4ew = require("/$bunfs/root/chunk-etd6y4ew.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
var import_chunk_ht78eyc4 = require("/$bunfs/root/chunk-ht78eyc4.js");
var import_chunk_s12kntv9 = require("/$bunfs/root/chunk-s12kntv9.js");
var import_chunk_d19q7hh0 = require("/$bunfs/root/chunk-d19q7hh0.js");
var import_chunk_a9c4wn56 = require("/$bunfs/root/chunk-a9c4wn56.js");
var import_chunk_vfxmw1me = require("/$bunfs/root/chunk-vfxmw1me.js");
var import_chunk_7j8he8m3 = require("/$bunfs/root/chunk-7j8he8m3.js");
var import_chunk_0h9rvfx7 = require("/$bunfs/root/chunk-0h9rvfx7.js");
var import_chunk_r949v7h0 = require("/$bunfs/root/chunk-r949v7h0.js");
var import_chunk_sqvd6je2 = require("/$bunfs/root/chunk-sqvd6je2.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_a8ey418s = require("/$bunfs/root/chunk-a8ey418s.js");
var import_chunk_q1wcxxgg = require("/$bunfs/root/chunk-q1wcxxgg.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_chunk_vyzg3yfa = require("/$bunfs/root/chunk-vyzg3yfa.js");
var import_chunk_ch6321bk = require("/$bunfs/root/chunk-ch6321bk.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_0djtvg5h = require("/$bunfs/root/chunk-0djtvg5h.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_hy0sycbj = require("/$bunfs/root/chunk-hy0sycbj.js");
var import_chunk_pqpxa7em = require("/$bunfs/root/chunk-pqpxa7em.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_chunk_p6rv87rz = require("/$bunfs/root/chunk-p6rv87rz.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_jqm7sxzd = require("/$bunfs/root/chunk-jqm7sxzd.js");
var import_chunk_3v09xgvh = require("/$bunfs/root/chunk-3v09xgvh.js");
var import_chunk_cy6vm0hs = require("/$bunfs/root/chunk-cy6vm0hs.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_v6tczjz9 = require("/$bunfs/root/chunk-v6tczjz9.js");
var import_chunk_fm523nqz = require("/$bunfs/root/chunk-fm523nqz.js");
var import_chunk_nynf6rf6 = require("/$bunfs/root/chunk-nynf6rf6.js");
var import_chunk_6wkvjx00 = require("/$bunfs/root/chunk-6wkvjx00.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var import_chunk_mjq4pbxz = require("/$bunfs/root/chunk-mjq4pbxz.js");
var import_chunk_ya9q1k3s = require("/$bunfs/root/chunk-ya9q1k3s.js");
var import_chunk_8bq2fhrn = require("/$bunfs/root/chunk-8bq2fhrn.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
var import_chunk_wqe8b1g0 = require("/$bunfs/root/chunk-wqe8b1g0.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_9p9dsn6j = require("/$bunfs/root/chunk-9p9dsn6j.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_qk25vh5t = require("/$bunfs/root/chunk-qk25vh5t.js");
var import_chunk_tt4yhkc0 = require("/$bunfs/root/chunk-tt4yhkc0.js");
var import_chunk_4jzbgp2v = require("/$bunfs/root/chunk-4jzbgp2v.js");
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_2172r9j8 = require("/$bunfs/root/chunk-2172r9j8.js");
var import_chunk_cd75h1kz = require("/$bunfs/root/chunk-cd75h1kz.js");
var import_chunk_0bfd61k9 = require("/$bunfs/root/chunk-0bfd61k9.js");
var import_chunk_tp0b74sz = require("/$bunfs/root/chunk-tp0b74sz.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var import_chunk_13h3tw8q = require("/$bunfs/root/chunk-13h3tw8q.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_2567t09g = require("/$bunfs/root/chunk-2567t09g.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_1m0ck3v8 = require("/$bunfs/root/chunk-1m0ck3v8.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var import_chunk_4eswazsj = require("/$bunfs/root/chunk-4eswazsj.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var import_process = __toESM(require("process"));
var import_stream = require("stream");
var import_crypto = require("crypto");
var import_stream2 = require("stream");
var import_url = require("url");
var import_path = require("path");
var import_crypto2 = require("crypto");
var import_async_hooks = require("async_hooks");
var import_path2 = require("path");
var Wi = (0, import_chunk_w1d7ygsk.V)(function(xg, qi) {
  qi.exports = zi;
  zi.sync = Au;
  var $i = (0, import_chunk_w1d7ygsk.ft)("fs");
  function Ru(e, o) {
    var r = o.pathExt !== void 0 ? o.pathExt : process.env.PATHEXT;
    if (!r) return true;
    if (r = r.split(";"), r.indexOf("") !== -1) return true;
    for (var h = 0; h < r.length; h++) {
      var g = r[h].toLowerCase();
      if (g && e.substr(-g.length).toLowerCase() === g) return true;
    }
    return false;
  }
  function ji(e, o, r) {
    if (!e.isSymbolicLink() && !e.isFile()) return false;
    return Ru(o, r);
  }
  function zi(e, o, r) {
    $i.stat(e, function(h, g) {
      r(h, h ? false : ji(g, e, o));
    });
  }
  function Au(e, o) {
    return ji($i.statSync(e), e, o);
  }
});
var Qi = (0, import_chunk_w1d7ygsk.V)(function(Hg, Ji) {
  Ji.exports = Ki;
  Ki.sync = Ou;
  var Vi = (0, import_chunk_w1d7ygsk.ft)("fs");
  function Ki(e, o, r) {
    Vi.stat(e, function(h, g) {
      r(h, h ? false : Yi(g, o));
    });
  }
  function Ou(e, o) {
    return Yi(Vi.statSync(e), o);
  }
  function Yi(e, o) {
    return e.isFile() && Iu(e, o);
  }
  function Iu(e, o) {
    var { mode: r, uid: h, gid: g } = e, y = o.uid !== void 0 ? o.uid : process.getuid && process.getuid(), M = o.gid !== void 0 ? o.gid : process.getgid && process.getgid(), k = parseInt("100", 8), P = parseInt("010", 8), R = parseInt("001", 8), I = k | P, L = r & R || r & P && g === M || r & k && h === y || r & I && y === 0;
    return L;
  }
});
var ea = (0, import_chunk_w1d7ygsk.V)(function(jg, Zi) {
  var $g = (0, import_chunk_w1d7ygsk.ft)("fs"), ur;
  if (global.TESTING_WINDOWS) ur = Wi();
  else ur = Qi();
  Zi.exports = Jr;
  Jr.sync = Lu;
  function Jr(e, o, r) {
    if (typeof o === "function") r = o, o = {};
    if (!r) {
      if (typeof Promise !== "function") throw TypeError("callback not provided");
      return new Promise(function(h, g) {
        Jr(e, o || {}, function(y, M) {
          if (y) g(y);
          else h(M);
        });
      });
    }
    ur(e, o || {}, function(h, g) {
      if (h) {
        if (h.code === "EACCES" || o && o.ignoreErrors) h = null, g = false;
      }
      r(h, g);
    });
  }
  function Lu(e, o) {
    try {
      return ur.sync(e, o || {});
    } catch (r) {
      if (o && o.ignoreErrors || r.code === "EACCES") return false;
      else throw r;
    }
  }
});
var sa = (0, import_chunk_w1d7ygsk.V)(function(zg, ra) {
  var En = process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys", pr = (0, import_chunk_w1d7ygsk.ft)("path"), Du = En ? ";" : ":", Xr = ea(), ta = (e) => Object.assign(Error(`not found: ${e}`), { code: "ENOENT" }), oa = (e, o) => {
    let r = o.colon || Du, h = e.match(/\//) || En && e.match(/\\/) ? [""] : [...En ? [process.cwd()] : [], ...(o.path || process.env.PATH || "").split(r)], g = En ? o.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "", y = En ? g.split(r) : [""];
    if (En) {
      if (e.indexOf(".") !== -1 && y[0] !== "") y.unshift("");
    }
    return { pathEnv: h, pathExt: y, pathExtExe: g };
  }, na = (e, o, r) => {
    if (typeof o === "function") r = o, o = {};
    if (!o) o = {};
    let { pathEnv: h, pathExt: g, pathExtExe: y } = oa(e, o), M = [], k = (R) => new Promise((I, L) => {
      if (R === h.length) return o.all && M.length ? I(M) : L(ta(e));
      let z = h[R], H = /^".*"$/.test(z) ? z.slice(1, -1) : z, F = pr.join(H, e), ae = !H && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + F : F;
      I(P(ae, R, 0));
    }), P = (R, I, L) => new Promise((z, H) => {
      if (L === g.length) return z(k(I + 1));
      let F = g[L];
      Xr(R + F, { pathExt: y }, (ae, _e) => {
        if (!ae && _e) if (o.all) M.push(R + F);
        else return z(R + F);
        return z(P(R, I, L + 1));
      });
    });
    return r ? k(0).then((R) => r(null, R), r) : k(0);
  }, Nu = (e, o) => {
    o = o || {};
    let { pathEnv: r, pathExt: h, pathExtExe: g } = oa(e, o), y = [];
    for (let M = 0; M < r.length; M++) {
      let k = r[M], P = /^".*"$/.test(k) ? k.slice(1, -1) : k, R = pr.join(P, e), I = !P && /^\.[\\\/]/.test(e) ? e.slice(0, 2) + R : R;
      for (let L = 0; L < h.length; L++) {
        let z = I + h[L];
        try {
          if (Xr.sync(z, { pathExt: g })) if (o.all) y.push(z);
          else return z;
        } catch (H) {
        }
      }
    }
    if (o.all && y.length) return y;
    if (o.nothrow) return null;
    throw ta(e);
  };
  ra.exports = na;
  na.sync = Nu;
});
var aa = (0, import_chunk_w1d7ygsk.V)(function(qg, Qr) {
  var ia = (e = {}) => {
    let o = e.env || process.env;
    if ((e.platform || "darwin") !== "win32") return "PATH";
    return Object.keys(o).reverse().find((h) => h.toUpperCase() === "PATH") || "Path";
  };
  Qr.exports = ia;
  Qr.exports.default = ia;
});
var pa = (0, import_chunk_w1d7ygsk.V)(function(Wg, ua) {
  var fr = (0, import_chunk_w1d7ygsk.ft)("path"), la = sa(), Fu = aa();
  function ca(e, o) {
    let r = e.options.env || process.env, h = process.cwd(), g = e.options.cwd != null, y = g && process.chdir !== void 0 && !process.chdir.disabled;
    if (y) try {
      process.chdir(e.options.cwd);
    } catch (k) {
    }
    let M;
    try {
      M = la.sync(e.command, { path: r[Fu({ env: r })], pathExt: o ? fr.delimiter : void 0 });
    } catch (k) {
    } finally {
      if (y) try {
        process.chdir(h);
      } catch (k) {
        let P = k !== null && typeof k === "object" && typeof k.code === "string" ? k.code : "";
        if (!(/^E[A-Z0-9]+$/.test(P) || P === "UNKNOWN" || P.startsWith("Unknown system error"))) throw k;
      }
    }
    if (M) M = fr.resolve(g ? e.options.cwd : "", M);
    return M;
  }
  function Uu(e) {
    return ca(e) || ca(e, true);
  }
  ua.exports = Uu;
});
var fa = (0, import_chunk_w1d7ygsk.V)(function(Hu, es) {
  var Zr = /([()\][%!^"`<>&|;, *?])/g;
  function xu(e) {
    return e = e.replace(Zr, "^$1"), e;
  }
  function Bu(e, o) {
    if (e = `${e}`, e = e.replace(/(?=(\\+?)?)\1"/g, '$1$1\\"'), e = e.replace(/(?=(\\+?)?)\1$/, "$1$1"), e = `"${e}"`, e = e.replace(Zr, "^$1"), o) e = e.replace(Zr, "^$1");
    return e;
  }
  Hu.command = xu;
  Hu.argument = Bu;
});
var ha = (0, import_chunk_w1d7ygsk.V)(function(Vg, ma) {
  ma.exports = /^#!(.*)/;
});
var _a = (0, import_chunk_w1d7ygsk.V)(function(Kg, ga) {
  var zu = ha();
  ga.exports = (e = "") => {
    let o = e.match(zu);
    if (!o) return null;
    let [r, h] = o[0].replace(/#! ?/, "").split(" "), g = r.split("/").pop();
    if (g === "env") return h;
    return h ? `${g} ${h}` : g;
  };
});
var ya = (0, import_chunk_w1d7ygsk.V)(function(Gg, Ca) {
  var bn = (0, import_chunk_w1d7ygsk.ft)("fs"), qu = _a();
  function Wu(e) {
    let r = Buffer.alloc(150), h;
    try {
      h = bn.openSync(e, "r"), bn.readSync(h, r, 0, 150, 0), bn.closeSync(h);
    } catch (g) {
    }
    return qu(r.toString());
  }
  Ca.exports = Wu;
});
var Ea = (0, import_chunk_w1d7ygsk.V)(function(Yg, Ta) {
  var wa = (0, import_chunk_w1d7ygsk.ft)("path"), Sa = pa(), mr = fa(), Vu = ya(), Ku = /\.(?:com|exe)$/i, Gu = /node_modules[\\/].bin[\\/][^\\/]+\.cmd$/i;
  function Ju(e) {
    e.file = Sa(e);
    let o = e.file && Vu(e.file);
    if (o) return e.args.unshift(e.file), e.command = o, Sa(e);
    return e.file;
  }
  function Xu(e) {
    return e;
  }
  function Qu(e, o, r) {
    if (o && !Array.isArray(o)) r = o, o = null;
    o = o ? o.slice(0) : [], r = Object.assign({}, r);
    let h = { command: e, args: o, options: r, file: void 0, original: { command: e, args: o } };
    return r.shell ? h : Xu(h);
  }
  Ta.exports = Qu;
});
var va = (0, import_chunk_w1d7ygsk.V)(function(Jg, Ma) {
  function Zu(e, o) {
    return Object.assign(Error(`${o} ${e.command} ENOENT`), { code: "ENOENT", errno: "ENOENT", syscall: `${o} ${e.command}`, path: e.command, spawnargs: e.args });
  }
  function ep(e, o) {
    return;
  }
  function ba(e, o) {
    return null;
  }
  function tp(e, o) {
    return null;
  }
  Ma.exports = { hookChildProcess: ep, verifyENOENT: ba, verifyENOENTSync: tp, notFoundError: Zu };
});
var Pa = (0, import_chunk_w1d7ygsk.V)(function(Xg, Mn) {
  var hr = (0, import_chunk_w1d7ygsk.ft)("child_process"), ts = Ea(), zn = va();
  function ka(e, o, r) {
    let h = ts(e, o, r), g = hr.spawn(h.command, h.args, h.options);
    return zn.hookChildProcess(g, h), g;
  }
  function op(e, o, r) {
    let h = ts(e, o, r), g = hr.spawnSync(h.command, h.args, h.options);
    return g.error = g.error || zn.verifyENOENTSync(g.status, h), g;
  }
  Mn.exports = ka;
  Mn.exports.spawn = ka;
  Mn.exports.sync = op;
  Mn.exports._parse = ts;
  Mn.exports._enoent = zn;
});
var Ra = (0, import_chunk_w1d7ygsk.rt)(Pa(), 1);
var sp = import_process.default.platform === "win32" ? ["APPDATA", "HOMEDRIVE", "HOMEPATH", "LOCALAPPDATA", "PATH", "PROCESSOR_ARCHITECTURE", "SYSTEMDRIVE", "SYSTEMROOT", "TEMP", "USERNAME", "USERPROFILE", "PROGRAMFILES"] : ["HOME", "LOGNAME", "PATH", "SHELL", "TERM", "USER"];
function rs() {
  let e = {};
  for (let o of sp) {
    let r = import_process.default.env[o];
    if (r === void 0) continue;
    if (r.startsWith("()")) continue;
    e[o] = r;
  }
  return e;
}
var Aa = class {
  _process;
  _readBuffer;
  _serverParams;
  _stderrStream = null;
  onclose;
  onerror;
  onmessage;
  constructor(e) {
    if (this._serverParams = e, this._readBuffer = new import_chunk_racn22qq.doi({ maxBufferSize: e.maxBufferSize }), e.stderr === "pipe" || e.stderr === "overlapped") this._stderrStream = new import_stream.PassThrough();
  }
  async start() {
    if (this._process) throw Error("StdioClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    return new Promise((e, o) => {
      if (this._process = Ra.default(this._serverParams.command, this._serverParams.args ?? [], { env: { ...rs(), ...this._serverParams.env }, stdio: ["pipe", "pipe", this._serverParams.stderr ?? "inherit"], shell: false, windowsHide: import_process.default.platform === "win32", cwd: this._serverParams.cwd }), this._process.on("error", (r) => {
        o(r), this.onerror?.(r);
      }), this._process.on("spawn", () => {
        e();
      }), this._process.on("close", (r) => {
        this._process = void 0, this.onclose?.();
      }), this._process.stdin?.on("error", (r) => {
        this.onerror?.(r);
      }), this._process.stdout?.on("data", (r) => {
        try {
          this._readBuffer.append(r), this.processReadBuffer();
        } catch (h) {
          this.onerror?.(h), this.close().catch(() => {
          });
        }
      }), this._process.stdout?.on("error", (r) => {
        this.onerror?.(r);
      }), this._stderrStream && this._process.stderr) this._process.stderr.pipe(this._stderrStream);
    });
  }
  get stderr() {
    if (this._stderrStream) return this._stderrStream;
    return this._process?.stderr ?? null;
  }
  get pid() {
    return this._process?.pid ?? null;
  }
  processReadBuffer() {
    while (true) try {
      let e = this._readBuffer.readMessage();
      if (e === null) break;
      this.onmessage?.(e);
    } catch (e) {
      this.onerror?.(e);
    }
  }
  async _dispose() {
    let e = this._process;
    if (this._process = void 0, e && e.exitCode === null && e.signalCode === null) {
      let o = new Promise((r) => e.once("exit", () => r()));
      try {
        e.stdin?.end();
      } catch {
      }
      try {
        e.kill("SIGTERM");
      } catch {
      }
      if (await Promise.race([o, new Promise((r) => setTimeout(r, 1e3).unref())]), e.exitCode === null && e.signalCode === null) try {
        e.kill("SIGKILL");
      } catch {
      }
      await o;
    }
    try {
      e?.stdout?.destroy();
    } catch {
    }
    try {
      e?.stdin?.destroy();
    } catch {
    }
    try {
      e?.stderr?.destroy();
    } catch {
    }
    this._readBuffer.clear();
  }
  async close() {
    if (this._process) {
      let e = this._process;
      this._process = void 0;
      let o = new Promise((r) => {
        e.once("close", () => {
          r();
        });
      });
      try {
        e.stdin?.end();
      } catch {
      }
      if (await Promise.race([o, new Promise((r) => setTimeout(r, 2e3).unref())]), e.exitCode === null) {
        try {
          e.kill("SIGTERM");
        } catch {
        }
        await Promise.race([o, new Promise((r) => setTimeout(r, 2e3).unref())]);
      }
      if (e.exitCode === null) try {
        e.kill("SIGKILL");
      } catch {
      }
    }
    this._readBuffer.clear();
  }
  send(e) {
    return new Promise((o) => {
      if (!this._process?.stdin) throw new import_chunk_racn22qq.Xa(import_chunk_racn22qq.Ua.NotConnected, "Not connected");
      let r = (0, import_chunk_racn22qq.coi)(e);
      if (this._process.stdin.write(r)) o();
      else this._process.stdin.once("drain", o);
    });
  }
};
function ip(e, o, r) {
  var h = -1, g = e.length, y = o.length, M = {};
  while (++h < g) {
    var k = h < y ? o[h] : void 0;
    r(M, e[h], k);
  }
  return M;
}
var Oa = ip;
function ap(e, o) {
  return Oa(e || [], o || [], import_chunk_4eswazsj.Fxt);
}
var Ia = ap;
(0, import_chunk_adx6804h.B)();
var dp = /^create[_-]?(pull[_-]?request|merge[_-]?request)$|^(pull[_-]?request|merge[_-]?request)[_-]?create$/i;
function La(e) {
  if (!dp.test(e)) return;
  (0, import_chunk_y53wbr8a.a)("tengu_git_operation", { operation: (0, import_chunk_78g0060s.S)("pr_create") }), (0, import_chunk_p78dm83c.$1t)()?.add(1);
}
var Zo = "CONNECT_SUSPENDED", ss = 10;
function is(e) {
  return { clock: e, awakeStart: e.monotonicNow(), wallStart: e.now() };
}
function as({ clock: e, awakeStart: o, wallStart: r }) {
  return `${Math.round(e.now() - r)}ms, ${Math.round(e.monotonicNow() - o)}ms of it awake`;
}
function Da(e, { clock: o, awakeStart: r, wallStart: h }) {
  if (!(o.now() - h - (o.monotonicNow() - r) > import_chunk_cbnm4p23.TIo) || !(0, import_chunk_865at33z.b)("tengu_mcp_connect_suspend_redial", true)) return;
  return `MCP server "${e}" connection timed out. Your computer went to sleep or its clock changed while connecting.`;
}
async function Na(e, o, r) {
  let h = (0, import_chunk_yrpmp1hk.hi)(), g = await e(), y = 0;
  while (y < ss && g.type === "failed" && g.errorCode === Zo && o() && (0, import_chunk_yrpmp1hk.hi)() === h) y++, (0, import_chunk_k449cc64.He)(g.name, `Connecting again after a sleep or a clock change (${y} of at most ${ss})`), g = await e();
  if (y === 0) return g;
  if (g.type !== "failed") (0, import_chunk_cqa9hrgx.u)("mcp_connect_suspend_redial");
  else if (g.errorCode !== Zo) (0, import_chunk_cqa9hrgx.l)("mcp_connect_suspend_redial", "failed");
  else if ((0, import_chunk_cqa9hrgx.l)("mcp_connect_suspend_redial", "slept_again"), y === ss && o()) r();
  return g;
}
var cs = 16384, ls = cs / 512, Fa = 16, cp = 16384, up = /"[0-9\\][0-9u\\]{0,59}"[\t\n\r ]*:/, fp = 10, mp = 13, ds = Buffer.from("data:"), xa = new TextDecoder(), yr = (0, import_chunk_t57w17k7.de)({ lines: Fa }, (e) => {
  e.lines = Fa;
});
function Ba() {
  return yr.lines > 0 && Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_DIAGNOSTICS_FILE) && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_MCP_INDEX_ROOM_COUNT && (0, import_chunk_r6r2wdsw.Uy)() === "hosted_worker";
}
function gr(e, o) {
  try {
    if (e.length < ls || !Ba() || !up.test(e)) return;
    let r = (0, import_chunk_kx2fp6pc.ULs)(e, 1 / 0);
    if (r === void 0 || r < cs) return;
    yr.lines--, (0, import_chunk_42tcgre6.q)("warn", "mcp_inbound_index_keys", { form: o, memory_mib_up_to: 2 ** Math.ceil(Math.log2(r / cs)), chars_up_to: 2 ** Math.ceil(Math.log2(e.length)) }, "now");
  } catch {
    Cr();
  }
}
function Ha(e) {
  try {
    return Ba() ? new $a(e) : void 0;
  } catch {
    Cr();
    return;
  }
}
class $a {
  isEventStream;
  held = [];
  heldBytes = 0;
  chunksOfThisMessage = 0;
  constructor(e) {
    this.isEventStream = e;
  }
  see(e) {
    try {
      if (yr.lines <= 0) {
        this.held = [];
        return;
      }
      let o = 0, r = this.isEventStream ? -1 : e.length, h = r;
      while (o < e.length) {
        if (r < o) r = e.indexOf(fp, o), r = r === -1 ? e.length : r;
        if (h < o) h = e.indexOf(mp, o), h = h === -1 ? e.length : h;
        let g = Math.min(r, h);
        if (g > o) this.heldBytes += g - o, this.chunksOfThisMessage++;
        let y = g === e.length || this.heldBytes >= ls;
        if (this.chunksOfThisMessage > cp) this.held = [];
        else if (g > o && y) this.held.push(e.subarray(o, g));
        if (g < e.length) this.noteHeld();
        o = g + 1;
      }
    } catch {
      Cr();
    }
  }
  end() {
    try {
      if (!this.isEventStream) this.noteHeld();
    } catch {
      Cr();
    }
  }
  noteHeld() {
    let { held: e, heldBytes: o } = this;
    if (this.held = [], this.heldBytes = 0, this.chunksOfThisMessage = 0, o < ls) return;
    let r = Buffer.concat(e);
    if (!this.isEventStream) gr(xa.decode(r), "http_body");
    else if (r.subarray(0, ds.length).equals(ds)) gr(xa.decode(r.subarray(ds.length)), "http_event");
  }
}
function Cr() {
  yr.lines = 0, (0, import_chunk_k449cc64.i)(Error("The count of index keys in MCP messages failed and is now off. MCP itself is not affected."));
}
var pn = import_chunk_hy0sycbj.XRe, hp = 4 * pn, gp = /^\s*text\/event-stream\s*(?:;|$)/i, _p = 32, yp = /* @__PURE__ */ new Map([["gzip", "gzip"], ["x-gzip", "gzip"], ["deflate", "deflate"]]), ps = "so Claude Code stopped reading it";
class en extends Error {
  constructor(e, o) {
    let r = Math.round(e / 1024 / 1024);
    super((o === "event" ? `sent more than ${r}MB in one event of an event stream (no blank line ended it)` : `sent a response larger than ${r}MB (counted after decompression)`) + `, ${ps}.`);
    this.name = "HttpBodyOverflowError";
  }
}
function Sp(e, o, r) {
  let h = 0, g = 0, y = o <= e, M = 0, k = false, P = performance.now();
  return new TransformStream({ async transform(R, I) {
    if (performance.now() - P > 8) await new Promise((ae) => setImmediate(ae)), P = performance.now();
    if (h += R.length, h > o) {
      I.error(new en(o, "body"));
      return;
    }
    if (y) {
      r?.see(R), I.enqueue(R);
      return;
    }
    let L = -1, { length: z } = R, H = -1, F = -1;
    for (let ae = 0; ae < z; ae++) {
      let _e = R[ae];
      if (k && _e === 10) {
        k = false;
        continue;
      }
      if (k = false, _e === 10 || _e === 13) {
        if (M === 0) L = ae;
        M = 0, k = _e === 13;
        continue;
      }
      if (M++, M < _p) continue;
      let be = ae + 1;
      if (H < be) H = R.indexOf(10, be), H = H === -1 ? z : H;
      if (F < be) F = R.indexOf(13, be), F = F === -1 ? z : F;
      let Q = Math.min(H, F);
      M += Q - be, ae = Q - 1;
    }
    if (g = L >= 0 ? R.length - 1 - L : g + R.length, g > e) {
      I.error(new en(e, "event"));
      return;
    }
    r?.see(R), I.enqueue(R);
  }, flush() {
    r?.end();
  } });
}
function tn(e, { refusesCodings: o = false, door: r = (0, import_chunk_9r4r85pg.sPi)() } = {}) {
  return async (h, g) => {
    let y = r?.noteRequests(g?.body, String(h)), M = (g?.method ?? "GET").toUpperCase(), k = r !== void 0 && (0, import_chunk_wzdjp7c0.f_)() && typeof DecompressionStream < "u", P = await e(h, { ...g, ...k && { decompress: false } });
    if (!P.body || P.body.locked) return P;
    let R = g?.body;
    if (M === "POST" && typeof R === "string" && R.includes('"jsonrpc"') && (P.status === 202 || P.ok && Tp(R))) return await P.body.cancel().catch(() => {
    }), new Response(null, { status: P.status, statusText: P.statusText, headers: P.headers });
    let [I, ...L] = (P.headers.get("content-encoding") ?? "").toLowerCase().split(",").map((At) => At.trim()).filter((At) => At !== "" && At !== "identity");
    if (o && I !== void 0) throw await P.body.cancel(), Error("sent a response with a Content-Encoding. Claude Code reads none from a tool container, so it did not read the response.");
    let z = k && P.headers.get("content-length") !== "0";
    if (z && (I === "br" || I === "zstd")) throw await P.body.cancel(), Error("sent a response compressed with br or zstd. Claude Code reads only gzip and deflate, so it did not read the response.");
    let H = z && I !== void 0 && L.length === 0 ? yp.get(I) : void 0, F = H ? P.body.pipeThrough(new DecompressionStream(H)) : P.body, ae = pn, _e = new Headers(g?.headers);
    if (P.ok && gp.test(P.headers.get("content-type") ?? "") && _e.get("accept")?.includes("text/event-stream")) ae = P.status === 200 && (r === void 0 || I === void 0) && (M === "GET" || _e.get("mcp-method") === "subscriptions/listen") ? 1 / 0 : hp;
    let be = ae > pn, Q = F.pipeThrough(Sp(pn, ae, Ha(be))), Ae = r?.judging({ url: String(h), isGet: M === "GET", ok: P.ok, contentType: P.headers.get("content-type"), answering: y }), Ve = Ae ? Q.pipeThrough(Ae.through) : Q, { headers: Tt } = P;
    if (Ae?.contentType !== void 0) Tt = new Headers(Tt), Tt.set("content-type", Ae.contentType);
    let pt = P.status >= 200 && P.status <= 599, Ge = new Response(Ve, { status: pt ? P.status : 200, statusText: P.statusText, headers: Tt });
    if (!pt) Object.defineProperty(Ge, "status", { value: P.status }), Object.defineProperty(Ge, "ok", { value: P.ok });
    return Object.defineProperty(Ge, "url", { value: P.url }), Object.defineProperty(Ge, "redirected", { value: P.redirected }), Object.defineProperty(Ge, "type", { value: P.type }), Ge;
  };
}
var wp = /* @__PURE__ */ new Set(["jsonrpc", "id", "method"]);
function Tp(e) {
  if (e.includes('"id":') && e.includes('"method":')) return false;
  let o = (0, import_chunk_mj4h1wdm.MAe)(e, wp);
  return o?.get("jsonrpc") === '"2.0"' && o.has("method") !== o.has("id");
}
var Ep = 100, bp = 400, Mp = 100, ja = 300, vp = 600;
function za() {
  if ((0, import_chunk_w578pjby.c_)()) throw Error("Claude Code is shutting down; not starting this MCP server process");
}
function fs(e) {
  let o = (0, import_chunk_w578pjby.Ct)(() => kp(e));
  return e.once("exit", () => o()), o;
}
function Sr(e) {
  return e.exitCode !== null || e.signalCode !== null;
}
async function kp(e) {
  let o = e.pid;
  if (o === void 0 || Sr(e)) return;
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    (0, import_chunk_w578pjby.t)(`[MCP] stdio server process ${o} has no established connection at exit; closing its stdin`), await ms(e);
    return;
  }
  let r = new Promise((g) => {
    e.once("exit", () => g());
  }), h = [["SIGINT", Ep], ["SIGTERM", bp], ["SIGKILL", Mp]];
  for (let [g, y] of h) {
    if (Sr(e)) return;
    (0, import_chunk_w578pjby.t)(`[MCP] stdio server process ${o} has no established connection at exit; sending ${g}`);
    try {
      e.kill(g);
    } catch {
      return;
    }
    await (0, import_chunk_5appeerh.me)(r, y);
  }
}
async function ms(e) {
  let o = e.pid;
  if (o === void 0 || Sr(e)) return;
  let r = new Promise((h) => {
    e.once("exit", () => h());
  });
  if (e.stdin?.end(), await (0, import_chunk_5appeerh.me)(r, ja), Sr(e)) return;
  (0, import_chunk_w578pjby.t)(`[MCP] stdio server process ${o} is still running ${ja}ms after stdin closed; terminating its process tree`), (0, import_chunk_865at33z.lk)(o), await (0, import_chunk_5appeerh.me)(r, vp);
}
class qn extends Error {
  constructor(e) {
    super(`wrote >${Math.round(e / 1024 / 1024)}MB to stdout without a JSON-RPC message boundary. The server is likely writing logs or other non-protocol data to stdout instead of stderr. Disconnecting to prevent unbounded memory growth.`);
    this.name = "StdoutOverflowError";
  }
}
class hs {
  capBytes;
  onOverflow;
  onMessage;
  chunks = [];
  byteLength = 0;
  overflowed = false;
  overflowThrown = false;
  constructor(e, o, r) {
    this.capBytes = e;
    this.onOverflow = o;
    this.onMessage = r;
  }
  append(e) {
    if (this.overflowed) return;
    if (this.byteLength + e.length > this.capBytes) {
      this.chunks = [], this.byteLength = 0, this.overflowed = true, this.onOverflow(new qn(this.capBytes));
      return;
    }
    this.chunks.push(e), this.byteLength += e.length;
  }
  readMessage() {
    if (this.overflowed) {
      if (this.overflowThrown) return null;
      throw this.overflowThrown = true, new qn(this.capBytes);
    }
    if (this.chunks.length === 0) return null;
    let e = this.chunks.at(-1), o = e.indexOf(10);
    if (o === -1) return null;
    let r = this.chunks.length === 1 ? e : Buffer.concat(this.chunks), h = r.length - e.length + o, g = r.toString("utf8", 0, h).replace(/\r$/, ""), y = r.subarray(h + 1);
    this.chunks = y.length > 0 ? [y] : [], this.byteLength = y.length, gr(g, "stdio_line");
    let M = (0, import_chunk_racn22qq.V9o)(g);
    return this.onMessage(M), M;
  }
  clear() {
    this.chunks = [], this.byteLength = 0;
  }
}
var Pp = "server-discover-probe-";
class uo extends Aa {
  overflowError;
  answeredProbeLate = false;
  onAnsweredProbeLate;
  constructor(e) {
    super({ ...e, maxBufferSize: import_chunk_hy0sycbj.XRe });
    this._readBuffer = new hs(import_chunk_hy0sycbj.XRe, (o) => {
      this.overflowError = o, queueMicrotask(() => void this.close());
    }, (o) => {
      if (this._anthropicProbeTimedOut === true && "id" in o && typeof o.id === "string" && o.id.startsWith(Pp) && "result" in o && !this.answeredProbeLate) this.answeredProbeLate = true, this.onAnsweredProbeLate?.();
    });
  }
  get serverProcess() {
    return this._process;
  }
  #e;
  async start() {
    za();
    let e = this.serverProcess !== void 0, o = super.start(), r = this.serverProcess;
    if (!e && r?.pid !== void 0) this.#e = fs(r);
    if (await o, !e && r === void 0) this.#t(this.serverProcess);
    if (!(this._readBuffer instanceof hs)) throw Error("BoundedStdioClientTransport: _readBuffer is no longer the BoundedReadBuffer \u2014 the SDK transport internals this subclass relies on have changed; re-verify the stdout bound.");
  }
  handOffExitCleanup() {
    this.#e?.(), this.#e = void 0;
  }
  #t(e) {
    if (e?.pid !== void 0) {
      this.#e = fs(e);
      return;
    }
    if (this.pid !== null) throw Error("BoundedStdioClientTransport: the SDK transport no longer keeps its child process on _process \u2014 the exit-time reaper for a still-connecting stdio server cannot arm; re-verify BoundedStdioClientTransport.start() against the SDK transport internals.");
  }
}
function qa() {
  return (0, import_chunk_865at33z.b)("tengu_serene_teapot", true) !== false;
}
var Va = /* @__PURE__ */ new WeakSet();
function Ka(e) {
  return Va.has(e);
}
function Ya(e, o, r) {
  let h = new URL(r).href, g = false;
  return async (y, M) => {
    if (new URL(y).href !== h) return await e(y, M);
    if (g && M?.method === "GET" && !new Headers(M.headers).has("last-event-id")) {
      (0, import_chunk_k449cc64.He)(o, "Listen-stream GET not sent: the server's last answer had an Allow header that does not list GET, so Claude Code answered the GET with 405 itself");
      let R = new Response(null, { status: 405, statusText: "Method Not Allowed" });
      return Va.add(R), R;
    }
    let k = await e(y, M), P = k.headers.get("allow");
    return g = P !== null && !P.split(",").some((R) => R.trim().toUpperCase() === "GET"), k;
  };
}
var Ja = 1e3, Rp = 3e4, Op = { now: () => performance.now(), arm: (e, o) => {
  let r = setTimeout(e, o).unref();
  return () => clearTimeout(r);
} };
function wr(e, o, r = Op) {
  let h = true, g, y = Number.NEGATIVE_INFINITY, M = Ja, k = () => {
    M = Ja, h = true;
  }, P = () => {
    let L = g;
    if (g = void 0, L === void 0) {
      k();
      return;
    }
    (async () => o(L.cause))().catch((z) => {
      (0, import_chunk_k449cc64.He)(e.name, `list_changed refetch failed: ${(0, import_chunk_jbjjrhxt.gl)(z, e.config)}`);
    }).finally(() => {
      if (y = r.now(), L.settle(), g === void 0) {
        k();
        return;
      }
      I(), M = Math.min(M * 2, Rp);
    });
  }, R = () => {
    if ((0, import_chunk_tntx4v84.U$)(e)) {
      g?.settle(), g = void 0, k();
      return;
    }
    P();
  }, I = () => {
    h = false;
    let L = y + M - r.now();
    if (L > 0) r.arm(R, L);
    else P();
  };
  return (L) => {
    let z = g;
    if (z === void 0) {
      let H = () => {
      }, F = new Promise((ae) => H = ae);
      if (z = g = { cause: L, settled: F, settle: H }, h) I();
    } else z.cause = L;
    return z.settled;
  };
}
function gs() {
  return !(0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_865at33z.b)("tengu_shimmering_avalanche", false) === true;
}
function Qa(e) {
  return typeof e === "string" && e.includes('"method":"tools/call"') && gs();
}
function Za(e, o) {
  if (e === void 0) return 0;
  return e.pendingElicitations > 0 ? o : Math.min(o, e.lastElicitationClosedAt + o - Date.now());
}
var Wn = 23e4;
function ed(e, o) {
  return o < Wn && !(e.timeout !== void 0 && e.timeout >= 1e3) && (0, import_chunk_f9x2f6cx.Se)() && (0, import_chunk_865at33z.b)("tengu_rosy_finch", false) === true;
}
function nd(e) {
  if (!(0, import_chunk_f9x2f6cx.Se)() || (e.timeout ?? 0) > Wn) return 0;
  let o = (0, import_chunk_865at33z.b)("tengu_enchanted_leaf", 0);
  return typeof o === "number" && Number.isFinite(o) && o > 0 ? o * 1e3 : 0;
}
function Ip() {
  let e = (0, import_chunk_f9x2f6cx.M1e)()?.clientPlatform;
  if (e === void 0) return false;
  let o = (0, import_chunk_865at33z.b)("tengu_snug_orbit", []);
  return Array.isArray(o) && o.includes(e);
}
function rd(e, { inFlight: o, timeoutMs: r, pauses: h, questionBoundMs: g, armTimeout: y, timedOut: M }) {
  let k = performance.now(), P = r, R = 0, I = 0, L = false, z = false, H, F = (ae) => {
    if (o?.has(e)) y(k + ae - performance.now(), ae);
  };
  e.questionOpened = () => {
    if (H === void 0) {
      if (H = !h || Ip(), h && H) (0, import_chunk_cqa9hrgx.l)("mcp_question_pause", "skipped_app_on_list");
    }
    if (H && g === 0) return;
    if (L ||= !H, R++ === 0) {
      I = performance.now();
      let ae = H ? P : Wn, _e = I - k + g;
      z = g > 0 && _e < ae, F(z ? _e : ae);
    }
  }, e.questionClosed = () => {
    if (H && g === 0) return;
    if (--R === 0) {
      if (!H) P = Math.min(P + performance.now() - I, Wn);
      z = false, F(P);
    }
  }, e.returned = () => {
    if (L) (0, import_chunk_cqa9hrgx.u)("mcp_question_pause");
  }, M.catch(() => {
    if (z) (0, import_chunk_cqa9hrgx.l)("mcp_question_pause", "question_bound_timeout");
    else if (L) (0, import_chunk_cqa9hrgx.l)("mcp_question_pause", R > 0 || P === Wn ? "ceiling_timeout" : "timeout");
  });
}
var sd = "This connector asked a question and got no answer in time, so this action stopped. Allow it to try again. The connector may ask again, or the action may run right away.";
function ad({ session: e, options: o, messageQueue: r }) {
  return (0, import_chunk_865at33z.b)("tengu_curious_canyon", false) === true && !(0, import_chunk_3t7ve0wy.nA)() && (0, import_chunk_f9x2f6cx.GB)()?.endsWith("_trigger") !== true && !(0, import_chunk_865at33z.sf)() && !(0, import_chunk_929j4hj9.M8e)(o.messageClientPlatform !== void 0 && (0, import_chunk_npsm5tcc.vG)(o.messageClientPlatform) ? o.messageClientPlatform : import_chunk_929j4hj9.m$n.of(e.host).lastTurnClientPlatform) && r.peek(import_chunk_tjdnrbvx._9) === void 0;
}
async function dd({ canUseTool: e, tool: o, args: r, toolUseContext: h, parentMessage: g, toolUseId: y, signal: M }) {
  let k = { behavior: "ask", forcedByCaller: true, suppressAlwaysAllowRule: true, askRequiresUserInteraction: true, personOnly: true, message: sd, decisionReason: { type: "other", reason: sd } };
  (0, import_chunk_cqa9hrgx.u)("mcp_question_card", { outcome: (0, import_chunk_78g0060s.S)("asked") });
  let P = await e(o, r, h, g, y, k);
  if (M.aborted) throw new import_chunk_jv7av99m.Ie();
  if ((0, import_chunk_w1j4pyn0.nnt)(P, k)) return (0, import_chunk_cqa9hrgx.l)("mcp_question_card", "no_prompt_surface"), false;
  if (P.behavior === "deny" && P.decisionReason.type === "other" && (0, import_chunk_w1j4pyn0.rnt)(P.decisionReason.reason)) return (0, import_chunk_cqa9hrgx.l)("mcp_question_card", "not_answered"), false;
  if (P.behavior !== "allow") throw (0, import_chunk_cqa9hrgx.u)("mcp_question_card", { outcome: (0, import_chunk_78g0060s.S)("denied") }), new import_chunk_jv7av99m.A(P.message || `Approval denied for ${o.name}`, "mcp_question_card_denied");
  if (P.updatedInput !== void 0 && !(0, import_chunk_z688m88d.Zt)(P.updatedInput, r)) return (0, import_chunk_cqa9hrgx.l)("mcp_question_card", "edited_input"), false;
  let R = (0, import_chunk_sjqze7qg.Vso)(h.session, y);
  if (R !== void 0) throw (0, import_chunk_cqa9hrgx.l)("mcp_question_card", "resend_refused"), new import_chunk_jv7av99m.A(R, "mcp_question_card_resend_refused");
  return (0, import_chunk_cqa9hrgx.u)("mcp_question_card", { outcome: (0, import_chunk_78g0060s.S)("allowed") }), true;
}
(0, import_chunk_adx6804h.B)();
var Lp = "tengu_rippling_dahl";
function Dp() {
  return (0, import_chunk_865at33z.b)(Lp, (0, import_chunk_pqpxa7em.Lcn)()) === true;
}
function _s(e) {
  return Dp() && !("url" in e && typeof e.url === "string" && ((0, import_chunk_2mwshd9r.Cze)(e.url) || (0, import_chunk_2mwshd9r.cFe)(e.url)));
}
function cd(e, o) {
  return e.transform((r, h) => {
    let g = r.tools.flatMap((M) => {
      let k = o.safeParse(M);
      return k.success ? [k.data] : [];
    }), y = r.tools.length - g.length;
    if (y > 0 && g.length === 0) return h.addIssue({ code: "custom", path: ["tools"], message: "No tool on this tools/list page is valid" }), import_chunk_adx6804h.m$;
    if (y > 0) (0, import_chunk_w578pjby.t)(`MCP: left ${y} of ${r.tools.length} tools out of a tools/list page because they are not valid`, { level: "warn" });
    return { ...r, tools: g, invalidLeftOut: y };
  });
}
(0, import_chunk_adx6804h.B)();
var Up = 864e5, xp = 6048e5, ys = "mcp-discover-verdicts", Cs = 262144, ud = "ccr:", pd = "stdio:";
function fd() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "state", `${ys}.json`);
}
var md = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ observedAt: (0, import_chunk_adx6804h.E)(), modernProtocolVersion: (0, import_chunk_adx6804h.n)() })), Bp = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()));
function Hp() {
  return (0, import_chunk_865at33z.b)("tengu_dreamy_sundae", true) !== false;
}
function hd(e) {
  if (!Hp()) return false;
  return !e.startsWith(ud) || (0, import_chunk_865at33z.b)("tengu_gentle_brooks", true) !== false;
}
function gd(e) {
  return e.startsWith(pd) ? xp : Up;
}
function _d(e, o, r) {
  let h = r - o.observedAt;
  return o.modernProtocolVersion === import_chunk_hy0sycbj.Bre && h >= 0 && h < gd(e);
}
function $p(e, o, r) {
  let h = r - o.observedAt;
  return h >= 0 && h < gd(e);
}
async function jp(e) {
  let o;
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) {
    let g = await e.readText([import_chunk_hkvzj051.at.state(ys)]);
    if (!g.ok) (0, import_chunk_w578pjby.t)(`[mcp] could not read the remembered discover verdicts (${(0, import_chunk_7n1spq36.un)(g.error)}); servers are probed with server/discover as if nothing was remembered`);
    else if (g.value.items[0]?.found) o = g.value.items[0].value;
  } else o = await zp(fd());
  if (o === void 0) return {};
  let r;
  try {
    r = (0, import_chunk_w578pjby.te)(o);
  } catch {
    return {};
  }
  let h = Bp().safeParse(r);
  return h.success ? h.data : {};
}
async function zp(e) {
  let r;
  try {
    let h = (0, import_chunk_8j3h6yzg.Vn)();
    if (import_chunk_09gzjq1e.Fo === 0) {
      let g = await h.lstat(e);
      if (g !== void 0 && !g.isFile) {
        (0, import_chunk_w578pjby.t)(`[mcp] ${e} is not a regular file; ignoring it, so servers are probed with server/discover as if nothing was remembered`);
        return;
      }
    }
    r = await h.readTail(e, Cs + 1, { noFollow: true });
  } catch (h) {
    if ((0, import_chunk_jv7av99m.J)(h)) return;
    let g = (0, import_chunk_jv7av99m.w)(h);
    (0, import_chunk_w578pjby.t)(g === "ELOOP" || g === "ENXIO" ? `[mcp] ${e} is not a regular file; ignoring it, so servers are probed with server/discover as if nothing was remembered` : `[mcp] could not read ${e} (${(0, import_chunk_jv7av99m.d)(h)}); ignoring it, so servers are probed with server/discover as if nothing was remembered`);
    return;
  }
  if (r.length > Cs) {
    (0, import_chunk_w578pjby.t)(`[mcp] ${e} is larger than ${Cs} bytes; ignoring it, so servers are probed with server/discover as if nothing was remembered`);
    return;
  }
  return r.toString("utf8");
}
function Cd(e) {
  if ((0, import_chunk_865at33z.vde)(e)) return Promise.resolve({});
  let o = (0, import_chunk_qdcbcsg7.mt)();
  return o.discoverVerdictsRead ??= jp(e).catch(() => ({})), o.discoverVerdictsRead;
}
async function qp(e, o) {
  let r = (0, import_chunk_w578pjby._)(e);
  if ((0, import_chunk_m15w38ag.ne)() && o !== void 0) {
    let g = await o.write(import_chunk_hkvzj051.at.state(ys), r, { mode: 384 });
    return g.ok ? void 0 : (0, import_chunk_7n1spq36.un)(g.error);
  }
  let h = fd();
  try {
    await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(h), 448), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(h, r, 384);
    return;
  } catch (g) {
    return (0, import_chunk_jv7av99m.d)(g);
  }
}
function yd(e, o) {
  if (!Object.hasOwn(e, o)) return;
  let r = md().safeParse(e[o]);
  return r.success ? r.data : void 0;
}
function Sd(e, o) {
  let r = {};
  for (let [h, g] of Object.entries(e)) {
    let y = md().safeParse(g);
    if (y.success && $p(h, y.data, o)) r[h] = y.data;
  }
  return r;
}
function wd(e, o) {
  let r = (0, import_chunk_qdcbcsg7.mt)();
  return r.discoverVerdictsWriteChain = r.discoverVerdictsWriteChain.then(async () => {
    if ((0, import_chunk_865at33z.vde)(e)) return;
    let h = o(await Cd(e));
    if (h === void 0) return;
    r.discoverVerdictsRead = Promise.resolve(h);
    let g = await qp(h, e);
    if (g !== void 0) r.discoverVerdictsRead = null, (0, import_chunk_w578pjby.t)(`[mcp] could not save the remembered discover verdicts (${g}); the change is dropped and storage is read again at the next use`);
  }).catch(() => {
  }), r.discoverVerdictsWriteChain;
}
var Wp = ["toolbox_mcp_server_id", "mcp_url"], Vp = ["directory", "custom"];
function Yo(e) {
  if (e.type === "claudeai-proxy") return e.id;
  if ("command" in e) {
    let y = (0, import_chunk_w578pjby._)([e.command, e.args ?? [], Object.entries(e.env ?? {}).sort(([M], [k]) => M < k ? -1 : M > k ? 1 : 0), (0, import_chunk_f9x2f6cx.us)() ?? (0, import_chunk_f9x2f6cx.ns)() ?? ""]);
    return `${pd}${(0, import_chunk_ccm69jjy.Je)(y).slice(0, 32)}`;
  }
  if (e.type !== "http" || !(0, import_chunk_2mwshd9r.Yu)(e.url) || !(0, import_chunk_865at33z.MNe)(e.url, Wp) || (0, import_chunk_2mwshd9r.cFe)(e.url)) return;
  let o = (0, import_chunk_yqt5s0xz._N)(e.headers, import_chunk_yqt5s0xz.$be), r = new URL(e.url), h = r.searchParams.get("toolbox_mcp_server_id")?.toLowerCase();
  if (!import_chunk_2mwshd9r.HPe.test(r.pathname) || o.length !== 1 || !o.every((y) => Vp.includes(y)) || !h || import_chunk_2mwshd9r.Chn.includes(h)) return;
  let g = (0, import_chunk_w578pjby._)([h, r.searchParams.get("mcp_url")]);
  return `${ud}${(0, import_chunk_ccm69jjy.Je)(g).slice(0, 32)}`;
}
async function Td(e, o, r = Date.now()) {
  let h = Yo(e);
  if (h === void 0 || !hd(h)) return false;
  let g = yd(await Cd(o), h);
  return g !== void 0 && _d(h, g, r);
}
function Ss(e, o, r = Date.now()) {
  let h = Yo(e);
  if (h === void 0 || !hd(h)) return Promise.resolve();
  return wd(o, (g) => {
    let y = yd(g, h);
    if (y !== void 0 && _d(h, y, r)) return;
    let M = Sd(g, r);
    return M[h] = { observedAt: r, modernProtocolVersion: import_chunk_hy0sycbj.Bre }, M;
  });
}
function Jo(e, o, r = Date.now()) {
  let h = Yo(e);
  if (h === void 0) return Promise.resolve();
  return wd(o, (g) => {
    if (!Object.hasOwn(g, h)) return;
    let y = Sd(g, r);
    return delete y[h], y;
  });
}
var Ed = 16384, Gp = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("server/discover") })), Yp = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ code: (0, import_chunk_adx6804h.v)(-32601) }) })), Jp = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ code: (0, import_chunk_adx6804h.E)() }) }));
function ws(e, o) {
  return async (r, h) => {
    let g = (h?.method ?? "GET").toUpperCase() === "POST" && typeof h?.body === "string" && Xp(h.body), y = await e(r, h);
    if (g) Qp(y.clone()).then((M) => {
      if (M) o();
    }, () => {
    });
    return y;
  };
}
function bd(e) {
  try {
    return (0, import_chunk_w578pjby.te)(e);
  } catch {
    return;
  }
}
function Xp(e) {
  return e.includes("server/discover") && Gp().safeParse(bd(e)).success;
}
function Md(e) {
  let o = e.trimStart().startsWith("{") ? [e] : e.split(`
`).filter((r) => r.startsWith("data:")).map((r) => r.slice(5));
  for (let r of o) {
    let h = bd(r);
    if (h !== void 0) return h;
  }
  return;
}
function vd(e) {
  let o = Jp().safeParse(Md(e.slice(0, Ed)));
  return o.success ? o.data.error.code : void 0;
}
async function Qp(e) {
  let o = e.body?.getReader();
  if (!o) return false;
  let r = new TextDecoder(), h = "", g = 0, y = void 0;
  while (y === void 0 && g < Ed) {
    let { done: M, value: k } = await o.read();
    if (M) break;
    g += k.byteLength, h += r.decode(k, { stream: true }), y = Md(h);
  }
  return o.cancel().catch(() => {
  }), Yp().safeParse(y).success;
}
var Zp = ["server/discover", "initialize", "notifications/initialized"], tf = { "server/discover": "discover", initialize: "initialize", "notifications/initialized": "initialized_notification" }, of = 8, nf = 6e5, rf = 3e4, kd = '"method":"';
function Ts({ mcpUrl: e, keepAliveDisabled: o, getAnsweredLocally: r, statelessGated: h }) {
  return { mcpHref: Dd(e), keepAliveDisabled: o, getAnsweredLocally: r, statelessGated: h, transportBuilds: 0, handshakeSends: 0, connectEnded: false, initializedNotificationAnswered: false, messageStreamGetOutcome: "not_sent" };
}
function Es(e) {
  e.transportBuilds++, e.handshakeSends = 0, e.initializedNotificationAnswered = false, e.pendingMethod = void 0, e.initializeRequestMs = void 0, e.initializeStartMs = void 0, e.initializeResultMs = void 0, e.initializedNotificationMs = void 0, e.initializedNotificationAnsweredAtMs = void 0, e.discoverResponseKind = void 0, e.initializeResponseKind = void 0, e.messageStreamGetOutcome = "not_sent";
}
function Yn(e) {
  if (e !== void 0) e.connectEnded = true;
}
function bs(e, o) {
  return (r, h) => {
    let g = (h?.method ?? "GET").toUpperCase();
    if (g === "GET") {
      let R = o.messageStreamGetOutcome;
      if (R !== "not_sent" && R !== "unauthorized" && R !== "forbidden" || !Rd(r, o) || af(h)) return e(r, h);
      let I = o.transportBuilds;
      o.messageStreamGetOutcome = "awaiting_response";
      let L = e(r, h);
      return L.then((z) => fn(() => {
        if (o.transportBuilds === I) o.messageStreamGetOutcome = o.getAnsweredLocally || Ka(z) ? "answered_locally" : df(z);
      }), () => fn(() => {
        if (o.transportBuilds === I) o.messageStreamGetOutcome = "no_response";
      })), L;
    }
    if (g !== "POST" || o.connectEnded || o.initializedNotificationAnswered || o.handshakeSends >= of || typeof h?.body !== "string" || !Rd(r, o)) return e(r, h);
    let y = lf(h.body);
    if (y === void 0) return e(r, h);
    o.handshakeSends++;
    let M = o.transportBuilds, k = performance.now();
    if (o.pendingMethod = y, y === "initialize") o.initializeStartMs = k, o.initializeRequestMs = void 0, o.initializeResultMs = void 0;
    else if (y === "notifications/initialized") {
      if (o.initializedNotificationMs = void 0, o.initializeStartMs !== void 0 && o.initializeResultMs === void 0) o.initializeResultMs = Gn(k - o.initializeStartMs);
    }
    let P = e(r, h);
    return P.then((R) => fn(() => Od(o, y, M, k, R)), () => fn(() => Od(o, y, M, k, void 0))), P;
  };
}
function Tr(e) {
  if (e === void 0) return {};
  return { discoverRequestMs: e.discoverRequestMs, initializeRequestMs: e.initializeRequestMs, initializeResultMs: e.initializeResultMs, initializedNotificationMs: e.initializedNotificationMs, handshakeResponseKind: (0, import_chunk_78g0060s.fe)(e.initializeResponseKind ?? e.discoverResponseKind), handshakeRequestPending: (0, import_chunk_78g0060s.fe)(e.pendingMethod === void 0 ? void 0 : tf[e.pendingMethod]), transportBuilds: e.transportBuilds, statelessGated: e.statelessGated, keepAliveDisabled: e.keepAliveDisabled };
}
function Id(e, o) {
  (0, import_chunk_qdcbcsg7.mt)().firstToolsListReports.set(e, { report: o, armedAtMs: performance.now() });
}
function Ld(e, o, r) {
  let h = () => typeof r === "function" ? r() : r, g = (0, import_chunk_qdcbcsg7.mt)().firstToolsListReports, y = g.get(e);
  if (y === void 0) return o;
  g.delete(e);
  let M = performance.now(), k = M - y.armedAtMs;
  if (k > rf) return o;
  let P = Gn(k);
  return o.then((R) => fn(() => Pd(y.report, M, true, P, h(), Array.isArray(R) ? R.length : void 0)), () => fn(() => Pd(y.report, M, false, P, h()))), o;
}
function Pd(e, o, r, h, g, y) {
  let M = performance.now(), k = { toolsListMs: Gn(M - o), toolsListOk: r, toolsListStartAfterConnectMs: h, ...g !== void 0 && { toolsListFromSendMs: Gn(M - g) }, ...y !== void 0 && { toolsListCount: y } };
  setImmediate((P, R) => fn(() => P(R)), e, k);
}
function af(e) {
  try {
    return new Headers(e?.headers).has("last-event-id");
  } catch {
    return false;
  }
}
function Rd(e, o) {
  return Dd(String(e)) === o.mcpHref;
}
function Dd(e) {
  try {
    return new URL(e).href;
  } catch {
    return e;
  }
}
function df(e) {
  if (e.ok) return "opened";
  switch (e.status) {
    case 405:
      return "method_not_allowed";
    case 401:
      return "unauthorized";
    case 403:
      return "forbidden";
    default:
      return "http_error";
  }
}
function Od(e, o, r, h, g) {
  let y = Gn(performance.now() - h);
  if (o === "server/discover") e.discoverRequestMs = y;
  if (e.transportBuilds !== r) return;
  if (e.pendingMethod === o) e.pendingMethod = void 0;
  let M = g?.ok ? cf(g) : void 0;
  switch (o) {
    case "server/discover":
      e.discoverResponseKind = M ?? e.discoverResponseKind;
      return;
    case "initialize":
      e.initializeRequestMs = y, e.initializeResponseKind = M ?? e.initializeResponseKind;
      return;
    case "notifications/initialized":
      if (e.initializedNotificationMs = y, e.initializedNotificationAnswered = g?.ok === true, g?.ok === true) e.initializedNotificationAnsweredAtMs = performance.now();
      return;
  }
}
function cf(e) {
  let [o = ""] = (e.headers.get("content-type") ?? "").split(";");
  switch (o.trim().toLowerCase()) {
    case "application/json":
      return "json";
    case "text/event-stream":
      return "event_stream";
    default:
      return "other";
  }
}
function lf(e) {
  let o = e.indexOf(kd);
  if (o === -1) return;
  let r = o + kd.length, h = Zp.find((g) => e.startsWith(`${g}"`, r));
  if (h === void 0) return;
  try {
    return (0, import_chunk_w578pjby.te)(e)?.method === h ? h : void 0;
  } catch {
    return;
  }
}
function Gn(e) {
  return Math.min(Math.max(Math.round(e), 0), nf);
}
function fn(e) {
  try {
    e();
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
(0, import_chunk_adx6804h.B)();
var Nd = "X-Ccr-Connector-Lane", Fd = "X-Ccr-Connector-Ticket", Ud = new import_chunk_2904xtvq.j(() => ({ relay: void 0 })), xd = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)()]).optional(), method: (0, import_chunk_adx6804h.n)().optional(), params: (0, import_chunk_adx6804h.c)({ requestId: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)()]).optional() }).optional() }));
function Bd(e) {
  return new import_chunk_jv7av99m.A(`${e}. ${import_chunk_hy0sycbj.H2t}`, "connector request from the tool host was answered as if it had not run", import_chunk_hy0sycbj.Dcn);
}
var ff = 6e4, mf = 1e4;
function Hd(e, o) {
  return e === 404 || e === 400 && /Server not initialized|No valid session ID|Mcp-Session-Id header is required/i.test(o);
}
async function hf(e, o, r) {
  let h = AbortSignal.timeout(mf);
  try {
    let g = await e(o, { ...r, body: (0, import_chunk_w578pjby._)({ jsonrpc: "2.0", id: (0, import_crypto2.randomUUID)(), method: "ping" }), signal: r.signal ? AbortSignal.any([r.signal, h]) : h });
    if (g.status !== 404 && g.status !== 400) {
      await g.body?.cancel().catch(() => {
      });
      return;
    }
    let y = await g.text();
    return Hd(g.status, y) ? new Response(y, g) : void 0;
  } catch (g) {
    if (r.signal?.aborted) throw g;
    return;
  }
}
var gf = /* @__PURE__ */ new Set(["tools/call", "resources/read", "resources/directory/read", "prompts/get", "skills/get", "completion/complete", "tasks/get", "tasks/cancel"]), _f = /\/v2\/ccr-sessions\/[^/]+\/mcp$/;
function $d(e, o) {
  let { host: r } = (0, import_chunk_f9x2f6cx.N)(), h = /* @__PURE__ */ new Map(), g = null, y = performance.now(), M = async (P, R) => {
    let { relay: I } = Ud.of(r), L = R?.body;
    if (I === void 0 || typeof L !== "string") throw new import_chunk_jv7av99m.A("not sent: this session's machine sends no connector requests");
    let { id: z, method: H } = xd().safeParse((0, import_chunk_0jve1fep.et)(L, false)).data ?? {};
    return I({ query: new URL(P).searchParams, headers: new Headers(R?.headers), body: L, isToolCall: H === "tools/call", signal: R?.signal ?? void 0, ended: () => {
      if (z !== void 0) h.delete(z);
    } });
  }, k = async (P, R, I, L) => {
    let z = new Response(null, { status: 202 });
    if (L.aborted) return z;
    let H = new Headers(R.headers);
    H.set(Fd, I);
    try {
      let F = await o(M)(P, { ...R, headers: H, signal: AbortSignal.any(R.signal ? [R.signal, L] : [L]) });
      return (0, import_chunk_cqa9hrgx.u)("mcp_connector_by_tool_host"), F;
    } catch (F) {
      if (L.aborted && !R.signal?.aborted) return z;
      if (!(0, import_chunk_jv7av99m.Fe)(F)) (0, import_chunk_cqa9hrgx.m)("mcp_connector_by_tool_host", "not_answered");
      throw F;
    }
  };
  return async (P, R) => {
    if (Ud.of(r).relay === void 0 || R?.method?.toUpperCase() !== "POST" || typeof R.body !== "string" || !_f.test(new URL(P).pathname)) return e(P, R);
    let I = xd().safeParse((0, import_chunk_0jve1fep.et)(R.body, false)).data;
    if (I?.method === "notifications/cancelled") {
      let { requestId: ae } = I.params ?? {};
      if (ae !== void 0) h.get(ae)?.abort();
      return e(P, R);
    }
    if (I?.method === void 0 || !gf.has(I.method)) return e(P, R);
    let L = new Headers(R.headers).get("mcp-session-id");
    if (L !== null && L === g) return new Response("the connector's session has ended", { status: 404 });
    let z = new AbortController(), { id: H } = I;
    if (H !== void 0) h.set(H, z);
    let F = false;
    try {
      let ae = await e(P, R), _e = ae.headers.get(Fd);
      if (ae.status !== 409 || ae.headers.get(Nd) !== "tools-host" || _e === null) return ae;
      await ae.body?.cancel().catch(() => {
      });
      let be = L !== null && performance.now() - y > ff ? await hf(e, P, R) : void 0;
      if (be !== void 0) return be;
      let Q = await k(P, R, _e, z.signal);
      if (y = performance.now(), F = Q.body !== null, Q.status === 409 && Q.headers.get(Nd) === "direct") throw F = false, await Q.body?.cancel().catch(() => {
      }), Bd("the way that this connector is called changed while the call was under way");
      if (Q.status === 401 || Q.status === 403) {
        let Ve = await Q.text();
        return F = false, new Response(`the connector request was answered with the status ${Q.status}: ${Ve}`, { status: 500 });
      }
      if (Q.status !== 404 && Q.status !== 400) return Q;
      let Ae = await Q.text();
      if (F = false, !Hd(Q.status, Ae)) return new Response(Ae, Q);
      throw g = L, Bd(`the connector request was answered with the status ${Q.status}`);
    } finally {
      if (H !== void 0 && !F && h.get(H) === z) h.delete(H);
    }
  };
}
var Cf = "tengu_lovely_quail";
function yf() {
  return (0, import_chunk_865at33z.Lt)(Cf, (0, import_chunk_pqpxa7em.Lcn)()) === true;
}
var Sf = "tengu_humble_clock";
function wf() {
  return (0, import_chunk_865at33z.Lt)(Sf, false) === true;
}
function jd(e) {
  if (Er(e), (0, import_chunk_ma3kja9f.T)(e)) {
    for (let [o, r] of Object.entries(e)) if (o !== "_meta") if (Array.isArray(r)) r.forEach(Er);
    else Er(r);
  }
  return e;
}
function kn(e) {
  let o = e.onmessage;
  e.onmessage = (r, ...h) => {
    o?.(r, ...h);
    let g = (0, import_chunk_ma3kja9f.T)(r) ? r.result : void 0;
    if ((0, import_chunk_ma3kja9f.T)(g) && Array.isArray(g.tools) && yf()) {
      if (g.nextCursor === null) delete g.nextCursor;
      g.tools.forEach(jd);
    }
    for (let y of [g, (0, import_chunk_ma3kja9f.T)(g) ? g.result : void 0]) if ((0, import_chunk_ma3kja9f.T)(y) && Array.isArray(y.content) && wf()) Er(y), y.content.forEach(jd);
  };
}
function Er(e) {
  if ((0, import_chunk_ma3kja9f.T)(e)) {
    for (let o of Object.keys(e)) if (e[o] === null) delete e[o];
  }
}
var Tf = new import_chunk_2904xtvq.j(() => ({}));
function Ef() {
  return Tf.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Ms(e) {
  return Ef().make?.(e);
}
function zd() {
  return (0, import_chunk_865at33z.b)("tengu_mcp_step_up_auth_dialog", true);
}
function Mf(e, o) {
  let r = new Set(e.split(" ").filter(Boolean));
  return o.split(" ").filter(Boolean).every((h) => r.has(h));
}
function qd(e, o) {
  let r = e.oauth?.scopes;
  if (!Boolean(r || e.oauth?.authServerMetadataUrl)) return true;
  if (!o || !r) return false;
  return Mf(r, o);
}
function vs(e) {
  return e.split(" ").filter(Boolean).sort().join(" ");
}
function Wd(e, o, r) {
  return (0, import_chunk_qdcbcsg7.mt)().stepUpReauthExhausted.get((0, import_chunk_yz5b8aaa.kc)(e, o))?.has(vs(r)) ?? false;
}
function Vd(e, o, r, h) {
  let g = vs(r), y = (0, import_chunk_qdcbcsg7.mt)().stepUpReauthExhausted, M = (0, import_chunk_yz5b8aaa.kc)(e, o), k = y.get(M) ?? /* @__PURE__ */ new Set();
  if (vs(h) !== g || k.has(g)) return;
  (0, import_chunk_cqa9hrgx.l)("mcp_step_up_reauth", "rechallenged_after_reauth"), y.set(M, k.add(g));
}
var vf = [{ value: "reauthenticate", label: "Re-authenticate in browser", description: "Signs this server out until you finish authorizing in the browser (for the scope above plus what it already has); if you do not finish, run /mcp to sign back in. The tool call is retried once afterwards" }, { value: "not_now", label: "Not now", description: "The tool call fails with the permission error; other tools keep working" }];
function Kd(e, o, r) {
  let h = `Re-authenticated MCP server "${(0, import_chunk_271xsh6x.xr)(o)}" (scope: "${(0, import_chunk_271xsh6x.Bl)(r, void 0, "none")}")`;
  return typeof e === "string" ? `${h}

${e}` : [{ type: "text", text: h }, ...e ?? []];
}
function Gd({ serverName: e, config: o, requestedScope: r, canUseTool: h, toolUseContext: g, signal: y, performOAuthFlow: M, reconnect: k, discard: P, isPermitted: R }) {
  let I = (0, import_chunk_qdcbcsg7.mt)().stepUpReauthFlights, L = (0, import_chunk_yz5b8aaa.kc)(e, o), z = I.get(L);
  if (z !== void 0) return z;
  let H = (async () => {
    let F = (0, import_chunk_yrpmp1hk.hi)(), ae = () => (0, import_chunk_yrpmp1hk.hi)() === F && R(e, o) && g.getMcp().clients.some((Q) => Q.name === e && Q.config.type === "http" && (0, import_chunk_yz5b8aaa.kc)(Q.name, Q.config) === L), _e = (0, import_chunk_271xsh6x.Bl)(r, void 0, "none");
    if (_e !== r) return (0, import_chunk_cqa9hrgx.l)("mcp_step_up_reauth", "scope_not_displayable"), "declined";
    let be = await (0, import_chunk_h5jsp3s5.Uue)({ canUseTool: h, toolUseContext: g, source: "mcp_step_up_reauth", header: "MCP", question: `MCP server "${(0, import_chunk_271xsh6x.xr)(e)}" needs additional permissions for this tool (it asked for the scope "${_e}"). Re-authenticate now?`, choices: vf });
    if (be.kind !== "chose" || be.value !== "reauthenticate") return (0, import_chunk_cqa9hrgx.l)("mcp_step_up_reauth", be.kind === "unanswered" ? be.reason : be.kind === "chose" ? "declined" : be.kind), "declined";
    if (!ae()) return (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "server_unavailable_after_consent"), "failed";
    try {
      await M(e, o, (Q) => {
        (0, import_chunk_k449cc64.He)(e, `Step-up re-auth authorization URL: ${(0, import_chunk_jbjjrhxt.bu)(Q)}`);
        let Ae = `Opening your browser to re-authenticate MCP server "${(0, import_chunk_271xsh6x.xr)(e)}".`, Ve = (0, import_chunk_kx2fp6pc.n3n)(Q) === Q;
        g.appendSystemMessage?.({ ...(0, import_chunk_yta0vzjp.lp)(Ve ? `${Ae} If it doesn't open, use this link to the server's sign-in page: ${Q}` : `${Ae} If it doesn't open, run /mcp to sign back in; its sign-in screen shows the link.`, "suggestion"), persist: false });
      }, y);
    } catch (Q) {
      if ((0, import_chunk_k449cc64.He)(e, `Step-up re-auth flow failed: ${(0, import_chunk_jbjjrhxt.gl)(Q, o)}`), y.aborted) (0, import_chunk_cqa9hrgx.l)("mcp_step_up_reauth", "cancelled");
      else (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "flow_failed");
      return "failed";
    }
    if (!ae()) return (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "server_unavailable_after_flow"), "failed";
    if (g.session.mcpSessionWiring.connections() === void 0) return (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "no_connections_owner"), "failed";
    try {
      let Q = await k(e, o);
      if ((0, import_chunk_yrpmp1hk.hi)() !== F) return (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "identity_changed"), "failed";
      let Ae = g.session.mcpSessionWiring.connections();
      if (!ae() || Ae === void 0) return await P(e, o).catch((Tt) => (0, import_chunk_k449cc64.He)(e, `Orphan cleanup failed: ${(0, import_chunk_jbjjrhxt.gl)(Tt, o)}`)), Ae?.markReconnectDiscarded(e, o), (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "server_unavailable_after_reconnect"), "failed";
      if (Ae.adoptServer(e, Q) !== "adopted") return await P(e, o).catch((Tt) => (0, import_chunk_k449cc64.He)(e, `Orphan cleanup failed: ${(0, import_chunk_jbjjrhxt.gl)(Tt, o)}`)), (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "adopt_refused"), "failed";
      if (Q.client.type !== "connected") return (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "reconnect_not_connected"), "failed";
    } catch (Q) {
      return (0, import_chunk_k449cc64.He)(e, `Step-up re-auth reconnect failed: ${(0, import_chunk_jbjjrhxt.gl)(Q, o)}`), (0, import_chunk_cqa9hrgx.m)("mcp_step_up_reauth", "reconnect_failed"), "failed";
    }
    return (0, import_chunk_cqa9hrgx.u)("mcp_step_up_reauth"), "reauthenticated";
  })().finally(() => {
    I.delete(L);
  });
  return I.set(L, H), H;
}
(0, import_chunk_adx6804h.B)();
function on(e) {
  return e.type === "claudeai-proxy" && e.stateless === true && (0, import_chunk_sjqze7qg.zSi)();
}
function Yd(e) {
  if (!on(e) || e.type !== "claudeai-proxy") return;
  if (e.cachedInitResponse == null) return;
  let o = import_chunk_racn22qq.lJt.safeParse(e.cachedInitResponse);
  if (!o.success) {
    (0, import_chunk_w578pjby.t)(`[claudeai-mcp] cached_init_response for ${e.id} failed InitializeResult validation \u2014 falling back to real initialize`);
    return;
  }
  if (!import_chunk_racn22qq.iJt.includes(o.data.protocolVersion)) {
    (0, import_chunk_w578pjby.t)(`[claudeai-mcp] cached_init_response for ${e.id} carries unsupported protocolVersion ${(0, import_chunk_hy0sycbj.D2t)(o.data.protocolVersion)} \u2014 falling back to real initialize`);
    return;
  }
  return o.data;
}
var kf = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ cacheScope: (0, import_chunk_adx6804h.v)("public"), ttlMs: (0, import_chunk_adx6804h.E)().positive() }));
function ks(e) {
  if (e.cachedDiscoverResponse == null) return;
  let o = import_chunk_racn22qq.Ytt.safeParse(e.cachedDiscoverResponse);
  if (!o.success) {
    (0, import_chunk_w578pjby.t)(`[claudeai-mcp] cached_discover_response for ${e.id} failed DiscoverResult validation \u2014 ignoring it and connecting as if no discover body had been projected`);
    return;
  }
  if (!o.data.supportedVersions.includes(import_chunk_hy0sycbj.Bre)) {
    (0, import_chunk_w578pjby.t)(`[claudeai-mcp] cached_discover_response for ${e.id} does not list protocol version ${import_chunk_hy0sycbj.Bre} \u2014 ignoring it and connecting as if no discover body had been projected`);
    return;
  }
  if (!kf().safeParse(e.cachedDiscoverResponse).success) {
    (0, import_chunk_w578pjby.t)(`[claudeai-mcp] cached_discover_response for ${e.id} is not declared publicly cacheable \u2014 ignoring it and connecting as if no discover body had been projected`);
    return;
  }
  return o.data;
}
function Jd(e) {
  if (!on(e) || e.type !== "claudeai-proxy") return;
  let o = (0, import_chunk_sjqze7qg.Dso)();
  if (e.discoverSupport === "supported" && o === "all") {
    let r = ks(e);
    if (r !== void 0) return { result: r };
  }
  if ((0, import_chunk_pyawkp3j.x7)() || !(0, import_chunk_ksk52rm1.pN)() && (0, import_chunk_ksk52rm1.Csn)()) return "wire";
  return e.discoverSupport === "legacy" && o !== "off" ? "method-not-found" : void 0;
}
function Ps(e, o, r) {
  let h = e.send.bind(e);
  e.send = async (g, y) => {
    if ((0, import_chunk_racn22qq.Z_e)(g) && g.method === "server/discover" && r !== "wire" && (r !== void 0 || o !== void 0)) {
      let M = r !== void 0 && r !== "method-not-found" ? { jsonrpc: "2.0", id: g.id, result: r.result } : { jsonrpc: "2.0", id: g.id, error: { code: import_chunk_racn22qq.FYr, message: "Method not found" } };
      queueMicrotask(() => e.onmessage?.(M));
      return;
    }
    if (o !== void 0 && (0, import_chunk_racn22qq.Z_e)(g) && g.method === "initialize") {
      let M = { jsonrpc: "2.0", id: g.id, result: o };
      queueMicrotask(() => e.onmessage?.(M));
      return;
    }
    if ((0, import_chunk_racn22qq.z9o)(g) && g.method === "notifications/initialized") return;
    return h(g, y);
  };
}
function Xd(e, o) {
  let r = new URL(o).href;
  return async (h, g) => {
    if ((g?.method ?? "GET").toUpperCase() !== "GET") return await e(h, g);
    let y = typeof h === "object" && h !== null && "url" in h ? h.url : String(h);
    if (new URL(y).href === r) return new Response(null, { status: 405, statusText: "Method Not Allowed" });
    return await e(h, g);
  };
}
var Pf = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Map());
function Rf() {
  return Pf.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Qd(e, o, r) {
  let h = (0, import_chunk_4qkqgt25.dUa)(e, r), g = Rf().get(e);
  if (g === void 0 || !g.toolNames.has(o)) return { mayOverlap: false, call: h };
  return { mayOverlap: true, call: (y, M, ...k) => g.slots.run(M.abortController.signal, () => h(y, M, ...k)) };
}
var Zd = "x-ccr-tool-container-call-owed", Of = new import_async_hooks.AsyncLocalStorage();
function ec(e, o, r) {
  if (r.delete(Zd), !e || Of.getStore()?.isOwedAndOut !== true || typeof o?.body !== "string") return;
  let h = (0, import_chunk_0jve1fep.et)(o.body, false);
  if ((0, import_chunk_ma3kja9f.T)(h) && h.method === "tools/call") r.set(Zd, "1");
}
(0, import_chunk_adx6804h.B)();
var tc = "X-Ccr-Tool-Container-Asked-For", oc = "X-Ccr-Tool-Container-Asked-For-Basis";
var If = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.v)("ping") })), Lf = 512;
function nc(e, o, r) {
  e.delete(tc), e.delete(oc);
  let h = (0, import_chunk_cwkztn5x.td)().toolContainerAskedFor;
  if (h === void 0 || !o || (r?.method ?? "GET").toUpperCase() === "GET") return;
  let { word: g, basis: y } = h(typeof r?.body === "string" && r.body.length <= Lf && r.body.includes('"ping"') && If().safeParse((0, import_chunk_0jve1fep.et)(r.body, false)).success);
  e.set(tc, g), e.set(oc, y);
}
var Rs = { getValidator(e) {
  if ((0, import_chunk_szvrpg0x.Wa)().claim("mcp_output_schema_unchecked")) (0, import_chunk_w578pjby.t)("An MCP server listed a tool with an outputSchema in a session that compiles no schemas; that tool's results are not checked against it", { level: "warn" });
  return (o) => ({ valid: true, data: o, errorMessage: void 0 });
} };
(0, import_chunk_adx6804h.B)();
var Df = "anthropic/askHolderFirst", Nf = "tengu_misty_snowflake", Ff = import_chunk_cdfjrfzp.e0t + 1e3, Uf = 1e3, xf = /<\/tool_use_error/i, Bf = 5e3, Hf = 64, $f = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({})), sc = new import_chunk_pzzqg6s3.ze(() => ({ passed: /* @__PURE__ */ new Set(), unheld: /* @__PURE__ */ new Set(), unjudged: /* @__PURE__ */ new Set() }));
function ic(e, o, r, h) {
  let g = o?.[Df];
  if (r.type !== "connected" || r.config.type !== "sdk" || r.config.hostRegistered !== true || !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || !(0, import_chunk_ma3kja9f.T)(g)) return;
  let { waitMs: y, unansweredText: M } = g;
  if (typeof y !== "number" || !(y >= Ff && y <= import_chunk_ttkwnzeb.Dri) || typeof M !== "string" || M.length === 0 || M.length > Uf || xf.test(M)) return;
  let k = { waitMs: y, unansweredText: M, listedAt: h }, P = e.validateInput;
  e.validateInput = async (I, L) => {
    let z = await P?.call(e, I, L) ?? { result: true };
    if (!z.result) return z;
    let H = await rc(k, r, L);
    return H === void 0 ? z : { result: false, message: H, errorCode: 8 };
  };
  let R = e.call;
  e.call = async (I, L, ...z) => {
    let { signal: H } = L.abortController, F = H.aborted ? void 0 : await rc(k, r, L);
    if (L.toolUseId !== void 0) sc.of(L.session).passed.delete(L.toolUseId);
    if (H.aborted) throw new import_chunk_jv7av99m.Ie();
    if (F !== void 0) throw new import_chunk_jv7av99m.A(F, "No attached client answered a ping for the MCP server, so the call was refused");
    return R.call(e, I, L, ...z);
  };
}
async function rc(e, o, r) {
  let { passed: h, unheld: g, unjudged: y } = sc.of(r.session), { toolUseId: M, queryTracking: k } = r;
  if (M !== void 0 && h.has(M)) return;
  if ((0, import_chunk_865at33z.b)(Nf, true) !== true) {
    (0, import_chunk_cqa9hrgx.l)("mcp_ask_holder_first", "switched_off"), Pn(h, M);
    return;
  }
  let P = k && `${k.chainId} ${o.name} ${e.listedAt}`;
  if (P !== void 0 && g.has(P)) return (0, import_chunk_cqa9hrgx.m)("mcp_ask_holder_first", "earlier_in_chain"), e.unansweredText;
  if (P !== void 0 && y.has(P)) {
    (0, import_chunk_cqa9hrgx.l)("mcp_ask_holder_first", "unjudged_earlier_in_chain"), Pn(h, M);
    return;
  }
  let { signal: R } = r.abortController, I = (0, import_chunk_865at33z.iXe)(r), L = Date.now(), z = "answered", H;
  (0, import_chunk_wx7ffn80.sk)("tool_exec", I);
  try {
    await (0, import_chunk_qdcbcsg7.Ap)(o.client).request({ method: "ping", params: { _meta: { [import_chunk_ttkwnzeb.Hri]: e.waitMs } } }, $f(), { signal: R, timeout: e.waitMs + Bf });
  } catch (ae) {
    if (!R.aborted && (0, import_chunk_jv7av99m.Fe)(ae)) throw ae;
    if (ae instanceof import_chunk_ttkwnzeb.iRn) z = ae.reason;
    else z = "other_error", H = ae;
  } finally {
    (0, import_chunk_wx7ffn80.ik)("tool_exec", I);
  }
  if ((0, import_chunk_cbnm4p23.Ez)(R)) return;
  if (R.aborted) throw new import_chunk_jv7av99m.Ie();
  if ((0, import_chunk_xfj2cwfv.nn)()) await (0, import_chunk_xfj2cwfv.Ga)();
  let F = { wait_ms: Date.now() - L };
  switch (z) {
    case "no_answer":
    case "no_client_holds_it":
      return (0, import_chunk_cqa9hrgx.m)("mcp_ask_holder_first", z, F), Pn(g, P), e.unansweredText;
    case "own_stream_quiet":
      (0, import_chunk_cqa9hrgx.l)("mcp_ask_holder_first", z, F), Pn(y, P);
      break;
    case "other_error":
      if ((0, import_chunk_cqa9hrgx.l)("mcp_ask_holder_first", z, F), F.wait_ms >= e.waitMs) Pn(y, P);
      (0, import_chunk_w578pjby.t)(`The ping before a call of a marked MCP tool failed: ${(0, import_chunk_jv7av99m.A$)(H) ?? "an error of no known class"}`);
      break;
    case "answered":
      (0, import_chunk_cqa9hrgx.u)("mcp_ask_holder_first", F);
  }
  Pn(h, M);
  return;
}
function Pn(e, o) {
  if (o === void 0) return;
  for (let r of e) {
    if (e.size < Hf) break;
    e.delete(r);
  }
  e.add(o);
}
function dc(e, o) {
  let r = e.send.bind(e);
  e.send = async (h) => r("method" in h && h.method === "tools/call" && (0, import_chunk_ts09sys6.Wle)(o()) !== void 0 && (0, import_chunk_865at33z.b)("tengu_tidy_lake", false) ? { ...h, params: { ...h.params, _meta: { ...h.params?._meta, "claudecode/sessionId": (0, import_chunk_f9x2f6cx.W)() } } } : h);
}
function cc(e) {
  let o = (0, import_chunk_865at33z.Tu)(e);
  return (0, import_chunk_865at33z.iGn)(o) && (0, import_chunk_865at33z.ode)(o) === o ? { "anthropic/model": o } : {};
}
class As {
  byMessageId = /* @__PURE__ */ new Map();
}
function lc(e, o) {
  if (!o) return {};
  let r = e.get(As).byMessageId.get(o);
  return { ["anthropic/memory.response_id"]: o, ...r !== void 0 && { ["anthropic/memory.chain"]: r } };
}
function uc(e, o, r) {
  if (!o || !r || !("anthropic/memory.chain" in r)) return;
  let h = r["anthropic/memory.chain"], g = e.get(As).byMessageId;
  if (g.delete(o), typeof h !== "string" || h.length > 16384) return;
  g.set(o, h);
  for (let y of g.keys()) {
    if (g.size <= 8) break;
    g.delete(y);
  }
}
function br(e) {
  return async (o, r) => {
    let h = await e(o, r);
    if (![301, 302, 303, 307, 308].includes(h.status) || !h.headers.has("Location")) return h;
    let g = new Headers(h.headers);
    return g.delete("Location"), new Response(h.body, { status: h.status, statusText: h.statusText, headers: g });
  };
}
function pc(e) {
  return async (o, r) => {
    if (r?.redirect === "error") return await e(o, r);
    let h = new URL(o);
    for (let g = 0; ; g++) {
      let y = await e(h, { ...r, redirect: "manual" }), M = import_chunk_fkbh0xha.Toi.includes(y.status) ? y.headers.get("location") : null;
      if (!M) {
        if (g > 0) Object.defineProperty(y, "redirected", { value: true });
        return y;
      }
      let k = URL.parse(M, h), P = y.status === 307 || y.status === 308 || (r?.method ?? "GET").toUpperCase() === "GET";
      if (k === null || !(0, import_chunk_fkbh0xha.vRn)(k) || !P || !(0, import_chunk_fkbh0xha.zor)(k.href, h.href) || g === import_chunk_fkbh0xha.ERn) {
        let R = new Headers(y.headers);
        R.delete("Location");
        let { body: I, status: L, statusText: z, url: H } = y;
        return Object.defineProperty(new Response(I, { status: L, statusText: z, headers: R }), "url", { value: H });
      }
      if (r?.redirect === "manual") return y;
      y.body?.cancel().catch(() => {
      }), k.username = h.username, k.password = h.password, h = k;
    }
  };
}
function fc() {
  let e = (0, import_chunk_865at33z.Sn)();
  if (!e) return;
  return { accountUuid: e.accountUuid, organizationUuid: e.organizationUuid, credentialInstalled: (0, import_chunk_865at33z.dm)() || (0, import_chunk_865at33z.hRs)() };
}
function mc(e, o, r) {
  let h = () => Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-8bxvbwvx.js"))), g = (P, R) => ({ listed: o, input: P, toolPermissionContext: (0, import_chunk_bz1f2qnq.Z)(R), callTool: r(R), signal: R.abortController.signal, session: R.session }), y = e.validateInput;
  e.validateInput = async (P, R) => (await h()).validateToolFileInputs(o, y, P, R);
  let M = e.call;
  e.call = async (P, R, ...I) => {
    let { argsWithFileInputs: L } = await h(), z = await L({ ...g(P ?? {}, R), toolUseId: R.toolUseId, nobodyAsked: I[3]?.mcpCallMeta?.[import_chunk_gk0jv3qt.rye] === true, permissionPhase: R.permissionPhase, allowGivenBy: R.allowGivenBy });
    return M(z, R, ...I);
  };
  let k = e.askInputPreparer;
  if (e.askInputPreparer = async (P, R, I) => (await h()).fileInputAskPreparer({ ...g(P, R), toolUseId: I }) ?? k?.(P, R, I), (0, import_chunk_f9x2f6cx.Y)()) gc()?.applyArtifactFileCard(e, o.meta, o.client);
}
function hc(e, o, r) {
  if (r.name === import_chunk_qdcbcsg7.ri && (0, import_chunk_f9x2f6cx.Y)()) gc()?.keepListingOfTextTool(e, o, r);
}
function gc() {
  return require("/$bunfs/root/chunk-yjb9kqpa.js");
}
var jf = { key: "claude_keeps_upload_reports", askedBy: (e) => e?.["anthropic/delivers"] === true }, zf = [jf], qf = new import_chunk_pzzqg6s3.ze(() => ({ bridgeName: () => {
  return;
}, says: /* @__PURE__ */ new Map() }));
function _c(e, o, r = zf) {
  let h = r.filter((M) => M.askedBy(o));
  if (e.mcpInfo?.serverName !== import_chunk_qdcbcsg7.$n || h.length === 0) return;
  let g = e.call;
  e.call = async (M, k, ...P) => {
    let R = k.permissionPhase?.pipeline?.result.behavior === "ask" && k.allowGivenBy?.approver !== "hook", I = R ? {} : Os(h, e, k.session);
    if (R ? h.some((L) => Object.hasOwn(M, L.key)) : Object.keys(I).length > 0) (0, import_chunk_cqa9hrgx.u)("ccs_worker_word");
    return g({ ...M, ...I }, k, ...P);
  };
  let y = e.askInputPreparer;
  e.askInputPreparer = async (M, k, P) => {
    if (Object.keys(Os(h, e, k.session)).length === 0) return y?.call(e, M, k, P);
    return { prepare: async () => ({ input: { ...M, ...Os(h, e, k.session) }, description: "", release: async () => {
    } }) };
  };
}
function Os(e, o, r) {
  let h = qf.peek(r), g = h?.bridgeName();
  if (g === void 0 || o.mcpInfo?.serverName !== g) return {};
  return Object.fromEntries(e.flatMap(({ key: y }) => {
    let M = h?.says.get(y)?.();
    return M === void 0 ? [] : [[y, M]];
  }));
}
class Jn {
  answer;
  constructor(e) {
    this.answer = e;
  }
}
function Is(e) {
  return e instanceof Jn && "result" in e.answer;
}
async function Wf(e, o, r) {
  let h = { ...o.requestState === void 0 ? { repeated: false } : { repeated: true, requestState: o.requestState }, ...o.files !== void 0 && { files: o.files } };
  for (let g = 0; ; g++) try {
    let y = await e(o.arguments, h);
    if (y.interrupted) throw new import_chunk_jv7av99m.Ie();
    if (g > 0) (0, import_chunk_cqa9hrgx.u)("mcp_session_recovery");
    return y.inputRequired ?? new Jn({ result: y });
  } catch (y) {
    if (y instanceof import_chunk_yz5b8aaa.iK) {
      let M = h.repeated && y.expiryKind === "session_expired_404";
      if (!y.mayHaveRun && !M && g === 0) {
        (0, import_chunk_cqa9hrgx.l)("mcp_session_recovery", y.expiryKind);
        continue;
      }
      (0, import_chunk_cqa9hrgx.m)("mcp_session_recovery", g > 0 ? "session_retry_exhausted" : M ? "files_repeat_not_resent" : "may_have_run_no_retry");
    } else if (g > 0 && !r.aborted) (0, import_chunk_cqa9hrgx.m)("mcp_session_recovery", "retry_failed_other");
    if (y instanceof import_chunk_yz5b8aaa.Bm) return new Jn({ toolError: y });
    if (typeof y === "object" && y !== null) (0, import_chunk_271f5kxt.vNn)(y);
    throw y;
  }
}
async function Cc(e, o, { context: r, canUseTool: h, serverName: g, authorization: y, sent: M, carrier: k }) {
  if (!(o instanceof Jn)) throw new import_chunk_jv7av99m.A("Claude Code could not read the connector's answer because of a bug in Claude Code, so it is not known whether the tool ran. Tell the user before calling the tool again.", "MCP connector file upload: final answer was not a tool result");
  let P = { canUseTool: h, toolUseContext: r, signal: r.abortController.signal, serverName: g, imageLimits: (0, import_chunk_yvba4101.ac)(r.modelFacts.model), authorization: y, carrier: k };
  if ("toolError" in o.answer) throw (0, import_chunk_271f5kxt.vNn)(o.answer.toolError), await (0, import_chunk_8sy6wsb2.b7r)(o.answer.toolError, e, P), o.answer.toolError;
  let R = o.answer.result;
  (0, import_chunk_8sy6wsb2.esi)(M);
  let I = [...M];
  if (R.downloadOffers !== void 0) I.push(...await (0, import_chunk_8sy6wsb2.xRn)(R, e, P));
  let { content: L, _meta: z, structuredContent: H, resourceLinks: F } = R, ae = (0, import_chunk_jejz6sfb.t8o)(e, (0, import_chunk_w4dc83v7.PH)(z));
  return { data: L, ...I.length > 0 && { connectorFileLines: I }, ...(ae || H || F) && { mcpMeta: { ...ae && { _meta: ae }, ...H && { structuredContent: H }, ...F && { resourceLinks: F } } } };
}
var Mr = (0, import_chunk_t57w17k7.de)({ withoutUploads: /* @__PURE__ */ new WeakSet(), entry: /* @__PURE__ */ new WeakSet() }, (e) => {
  e.withoutUploads = /* @__PURE__ */ new WeakSet(), e.entry = /* @__PURE__ */ new WeakSet();
});
function yc(e) {
  let o = e?.extensions;
  return (0, import_chunk_0jve1fep.Le)(o) && import_chunk_m0xr8k74.nle in o ? { entry: o[import_chunk_m0xr8k74.nle] } : void 0;
}
function Vf(e) {
  if (e.protocolEra === void 0 || Mr.entry.has(e)) return;
  Mr.entry.add(e);
  let o = yc(e.capabilities), r = o === void 0 ? "none" : "not an object", h = o?.entry;
  if ((0, import_chunk_0jve1fep.Le)(h)) {
    let g = Object.keys(h).map((k) => /^[A-Za-z0-9_.-]{1,40}$/.test(k) ? k : "other").sort(), y = g.length > 20 ? `${g.slice(0, 20).join(", ")} and ${g.length - 20} more` : g.join(", "), M = !("upload" in h) ? 'no "upload"' : (0, import_chunk_0jve1fep.Le)(h.upload) ? '"upload" is an object' : '"upload" is not an object';
    r = `keys ${y === "" ? "none" : y}; ${M}`;
  }
  (0, import_chunk_w578pjby.t)(`[${e.name}] the file-uploads extension entry: ${r}; protocol: ${e.protocolEra === "modern" ? "2026-07-28" : "older than 2026-07-28"}`);
}
function Kf(e) {
  if (e.protocolEra === void 0 || Mr.withoutUploads.has(e) || yc(e.capabilities) === void 0) return;
  Mr.withoutUploads.add(e), (0, import_chunk_w578pjby.t)(`[${e.name}] Claude Code will not upload files to this server: it uploads only over MCP 2026-07-28, and only when the server's file-uploads entry has an "upload" object and no "revision". The entry is described on the line before.`);
}
function Sc(e, o, r, h) {
  let g = { ...o, ...h !== void 0 && { carry: h } };
  if (hc(e, g.meta, g.client), _c(e, g.meta), (0, import_chunk_bt5spb39.sBa)(e, g.client), (0, import_chunk_cbqbjyfn.K1a)(e, g.meta), (0, import_chunk_qyhf6bts.eh)(g.client.config) === void 0 && (0, import_chunk_dfyba0ch.kTe)(g.client) === void 0) return;
  if (!(0, import_chunk_ksk52rm1.Csn)(() => !(0, import_chunk_ksk52rm1.pN)())) {
    Gf(e, g, r !== void 0);
    return;
  }
  let y = { ...g, speaksFiles: r !== void 0 && (0, import_chunk_dfyba0ch.z7r)(g.client), ...r === void 0 && { sendsNoFiles: true } };
  if (Vf(g.client), r !== void 0 && !y.speaksFiles) Kf(g.client);
  let M = false, k = false;
  try {
    let I = wc(y);
    k = I.anothers, M = !k && I.schemaMarksAFile && Jf(y);
  } catch (I) {
    (0, import_chunk_w578pjby.t)(`[${e.name}] Claude Code could not work out whether this tool takes files, so it will not upload files for this tool. The tool can still be called as usual, unless Claude Code has shown the model a path in place of a file in this session: then this tool's calls may fail.`, { level: "warn" }), (0, import_chunk_shs9e3r5.kG)(new import_chunk_jv7av99m.A(`MCP connector file upload: checking whether a tool takes files failed, so the tool was left without file upload (${(0, import_chunk_shs9e3r5.u0)(I)})`, "MCP connector file upload: checking whether a tool takes files failed, so the tool was left without file upload"), I);
  }
  if (k) return;
  let P = (I, L) => {
    let z;
    return async (H) => {
      if (z ??= r?.(I, L), z === void 0) throw new import_chunk_m0xr8k74.Pkt(g.client.name);
      return Wf(z, H, I.abortController.signal);
    };
  }, R = (I, L) => async (z, H, F) => Cc(g.client.config, z, { context: I, canUseTool: L, serverName: (0, import_chunk_dfyba0ch.PJt)(g.client), authorization: g.authorization, sent: F, carrier: g.downloadCarrier });
  if (M) {
    Ds().wrapConnectorUploadTool(e, y, P, R, Is);
    return;
  }
  Tc(e, (I) => Ds().connectorUploadChecks(e, I, y, P, R, Is));
}
function wc(e) {
  let o = (0, import_chunk_9zhva0nf.osr)(e);
  return { anothers: o === "file_reference" || (0, import_chunk_wpyz5pav.L$t)(e.client, e.name) !== void 0 || o === "listed_mark" && import_chunk_w1zyy3zs.D9e.some((r) => (0, import_chunk_ts09sys6.kme)(e.client, r)) || (0, import_chunk_w8ry7jkt.P7r)(e.name) && (0, import_chunk_w8ry7jkt.ant)(e.client), schemaMarksAFile: o === "schema_mark" };
}
function Gf(e, o, r) {
  let h;
  Tc(e, (g) => Ds().connectorUploadChecks(e, g, { ...o, speaksFiles: r && (0, import_chunk_dfyba0ch.z7r)(o.client), ...!r && { sendsNoFiles: true }, listedBeforeUploads: true }, () => async () => {
    throw new import_chunk_m0xr8k74.Pkt(o.client.name);
  }, (y, M) => async (k, P, R) => Cc(o.client.config, k, { context: y, canUseTool: M, serverName: (0, import_chunk_dfyba0ch.PJt)(o.client), authorization: o.authorization, sent: R, carrier: o.downloadCarrier }), Is), (g) => (0, import_chunk_ksk52rm1.Csn)() && (0, import_chunk_0snrq607.lsi)(g()) && !(h ??= Yf(e, o)));
}
function Yf(e, o) {
  try {
    return wc(o).anothers;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`[${e.name}] Claude Code could not work out whether another file feature owns this tool, which was listed while uploads read off, so its calls go through the upload's checks.`, { level: "warn" }), (0, import_chunk_shs9e3r5.kG)(new import_chunk_jv7av99m.A(`MCP connector file upload: checking who owns a tool listed with uploads off failed, so the tool was put behind the checks (${(0, import_chunk_shs9e3r5.u0)(r)})`, "MCP connector file upload: checking who owns a tool listed with uploads off failed, so the tool was put behind the checks"), r), false;
  }
}
function Jf(e) {
  if (!e.speaksFiles) return false;
  let { connectorUploadMayAct: o } = require("/$bunfs/root/chunk-zwqxveea.js");
  return o(e);
}
function Ds() {
  return require("/$bunfs/root/chunk-xwh4vge9.js");
}
function Tc(e, o, r = (h) => (0, import_chunk_0snrq607.lsi)(h())) {
  let h = { validateInput: e.validateInput, checkPermissions: e.checkPermissions, call: e.call }, g;
  e.validateInput = async (y, M) => r(() => M?.messages) ? (g ??= o(h)).validateInput(y, M) : await h.validateInput?.call(e, y, M) ?? { result: true }, e.checkPermissions = async (y, M) => r(() => M?.messages) ? (g ??= o(h)).checkPermissions(y, M) : h.checkPermissions.call(e, y, M), e.call = async (...y) => r(() => y[1]?.messages) ? (g ??= o(h)).call(...y) : h.call.call(e, ...y);
}
var Ns = new import_chunk_pzzqg6s3.ze(() => ({}));
function Ec(e, o) {
  Ns.of(e).held = o;
}
function bc(e, o) {
  let r = Ns.peek(e), h = r?.held;
  if (r === void 0 || h === void 0 || h.reply === o.reply) return;
  if (h.nextReply ??= o.reply, h.nextReply !== o.reply) {
    delete r.held;
    return;
  }
  if (o.act === void 0 || o.tabId !== h.tabId) return;
  return delete r.held, { look: h.skipped ? "skipped" : "read", repeats: o.act === h.act };
}
var Mc = ["other", "card", "browser", "batch", "navigate"], vc = { other: "ccs_chrome_tab_site_same_after_other_calls_count", card: "ccs_chrome_tab_site_same_after_card_count", browser: "ccs_chrome_tab_site_same_after_browser_pick_count", batch: "ccs_chrome_tab_site_same_after_batch_count", navigate: "ccs_chrome_tab_site_same_after_navigate_count" }, Pc = { other: "ccs_chrome_tab_site_moved_after_other_calls_count", card: "ccs_chrome_tab_site_moved_after_card_count", browser: "ccs_chrome_tab_site_moved_after_browser_pick_count", batch: "ccs_chrome_tab_site_moved_after_batch_count", navigate: "ccs_chrome_tab_site_moved_after_navigate_count" }, Rc = { reads: "ccs_chrome_tab_site_same_skippable_after_reads_count", acts: "ccs_chrome_tab_site_same_skippable_after_acts_count" }, Ac = { reads: "ccs_chrome_tab_site_moved_skippable_after_reads_count", acts: "ccs_chrome_tab_site_moved_skippable_after_acts_count" }, kr = { same: "ccs_chrome_tab_site_same_skippable_looking_after_acts_count", moved: "ccs_chrome_tab_site_moved_skippable_looking_after_acts_count", sameMs: "ccs_chrome_tab_site_same_skippable_looking_after_acts_total_ms" }, Oc = { reads: "ccs_chrome_tab_site_same_skippable_after_reads_total_ms", acts: "ccs_chrome_tab_site_same_skippable_after_acts_total_ms" }, Ic = { moved: { skipped: "ccs_chrome_refused_moved_after_skip_count", after_reads: "ccs_chrome_refused_moved_skippable_after_reads_count", looking_after_acts: "ccs_chrome_refused_moved_skippable_looking_after_acts_count", other_after_acts: "ccs_chrome_refused_moved_skippable_other_after_acts_count" }, unresolved: { skipped: "ccs_chrome_refused_unresolved_after_skip_count", after_reads: "ccs_chrome_refused_unresolved_skippable_after_reads_count", looking_after_acts: "ccs_chrome_refused_unresolved_skippable_looking_after_acts_count", other_after_acts: "ccs_chrome_refused_unresolved_skippable_other_after_acts_count" }, browser: { skipped: "ccs_chrome_refused_by_browser_after_skip_count", after_reads: "ccs_chrome_refused_by_browser_skippable_after_reads_count", looking_after_acts: "ccs_chrome_refused_by_browser_skippable_looking_after_acts_count", other_after_acts: "ccs_chrome_refused_by_browser_skippable_other_after_acts_count" } }, vr = { skipped: "ccs_chrome_skipped_look_withheld_count", after_reads: "ccs_chrome_look_left_site_skippable_after_reads_count", looking_after_acts: "ccs_chrome_look_left_site_skippable_looking_after_acts_count", other_after_acts: void 0 }, Fs = { skipped: { chance: "ccs_chrome_act_after_skipped_look_count", repeat: "ccs_chrome_repeated_act_after_skipped_look_count" }, read: { chance: "ccs_chrome_act_after_skippable_look_count", repeat: "ccs_chrome_repeated_act_after_skippable_look_count" } }, Lc = { after_reads: "ccs_chrome_skippable_check_after_reads_count", looking_after_acts: "ccs_chrome_skippable_check_looking_after_acts_count", other_after_acts: "ccs_chrome_skippable_check_other_after_acts_count" }, Mw = ["ccs_chrome_tab_read_count", "ccs_chrome_tab_read_skipped_count", ...Object.values(Ic).flatMap((e) => Object.values(e)), vr.skipped, vr.after_reads, vr.looking_after_acts, ...Object.values(Lc), ...Object.values(Fs).flatMap((e) => Object.values(e)), ...Object.values(kr), "ccs_chrome_tab_read_total_ms", "ccs_chrome_tab_read_later_in_reply_count", "ccs_chrome_tab_read_later_in_reply_total_ms", ...Object.values(Oc), "ccs_chrome_tab_read_skippable_failed_count", ...Object.values(vc), ...Object.values(Pc), ...Object.values(Rc), ...Object.values(Ac)], mn = new import_chunk_pzzqg6s3.ze(() => ({ lastReads: /* @__PURE__ */ new Map(), skippable: /* @__PURE__ */ new Map(), counts: /* @__PURE__ */ new Map() }));
function ho(e, o, r) {
  e.counts.set(o, (e.counts.get(o) ?? 0) + r);
}
function Dc(e, o) {
  let r = mn.of(e);
  if (ho(r, "ccs_chrome_tab_read_count", 1), ho(r, "ccs_chrome_tab_read_total_ms", o.ms), o.laterInReply) ho(r, "ccs_chrome_tab_read_later_in_reply_count", 1), ho(r, "ccs_chrome_tab_read_later_in_reply_total_ms", o.ms);
  if (o.failed) {
    if (o.wouldSkip !== void 0) ho(r, "ccs_chrome_tab_read_skippable_failed_count", 1);
    return;
  }
  if (o.wouldSkip !== void 0) {
    if (o.site === o.wouldSkip.site) r.skippable.set(o.toolUseId, { ...o.wouldSkip, ms: o.ms });
    else if (ho(r, Ac[o.wouldSkip.after], 1), o.wouldSkip.after === "acts" && o.wouldSkip.thisCallLooks) ho(r, kr.moved, 1);
  }
  let h = r.lastReads.get(o.tabId);
  if (h !== void 0 && !o.forBatch && h.toolUseId !== o.toolUseId) {
    let g = o.site !== h.site;
    ho(r, (g ? Pc : vc)[h.between], 1);
  }
  if (o.site === void 0) {
    r.lastReads.delete(o.tabId);
    return;
  }
  r.lastReads.set(o.tabId, { site: o.site, toolUseId: o.toolUseId, between: "other" });
}
function Fc(e) {
  ho(mn.of(e), "ccs_chrome_tab_read_skipped_count", 1);
}
function Us(e, o) {
  ho(mn.of(e), Ic[o.kind][o.side], 1);
}
function Uc(e, o) {
  let r = vr[o];
  if (r !== void 0) ho(mn.of(e), r, 1);
}
function xc(e, { look: o, repeats: r }) {
  let h = mn.of(e);
  if (ho(h, Fs[o].chance, 1), r) ho(h, Fs[o].repeat, 1);
}
function Bc(e, o) {
  ho(mn.of(e), Lc[o], 1);
}
function Hc(e, o) {
  let r = mn.peek(e);
  if (r === void 0) return;
  let h = o.toolName === "navigate" ? "navigate" : o.toolName === "browser_batch" ? "batch" : o.toolName === "select_browser" || o.toolName === "switch_browser" ? "browser" : o.afterCard ? "card" : "other", g = o.toolUseId === void 0 ? void 0 : r.skippable.get(o.toolUseId);
  if (o.toolUseId !== void 0) r.skippable.delete(o.toolUseId);
  if (g !== void 0 && g.site === o.siteOnClassifierAllow) {
    if (ho(r, Rc[g.after], 1), ho(r, Oc[g.after], g.ms), g.after === "acts" && g.thisCallLooks) ho(r, kr.same, 1), ho(r, kr.sameMs, g.ms);
  }
  for (let y of r.lastReads.values()) if (Mc.indexOf(h) > Mc.indexOf(y.between)) y.between = h;
}
var Xf = new Set(import_chunk_rg2p81t1.nye.map((e) => e.name)), Qf = "anthropic/chromeWorkerDecides", Yc = "claudecode/chromeJudgedSite", Zf = "claudecode/chromePickJudged", em = "anthropic/chromeOwnTabsUnasked", tm = "anthropic/chromeOwnTabsUnaskedWithNobodyAsked", js = /* @__PURE__ */ new Set(["computer", "find", "form_input", "get_page_text", "read_page", "read_console_messages", "read_network_requests"]), zc = /* @__PURE__ */ new Set([...js, "gif_creator", "javascript_tool", "upload_image"]), qc = "tengu_dappled_gourd", zs = /* @__PURE__ */ new Set([...js, "javascript_tool"]), om = "tengu_squishy_prism", nm = "tengu_greedy_hippo", rm = "1.0.108", sm = /^(?:0|[1-9]\d{0,4})(?:\.(?:0|[1-9]\d{0,4})){2}$/, Jc = "tabs_context_mcp", im = [{ kind: "moved", words: "Claude in Chrome: this action was not sent, because it would act on a different site than the one that was approved" }, { kind: "moved", words: "Claude in Chrome: this call was not sent, because it would act on another site than the one it was checked on" }, { kind: "unresolved", words: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again." }, { kind: "moved", words: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first." }, { kind: "browser", words: "Security check failed: the page navigated" }, { kind: "browser", words: "Security check failed: this tab moved" }, { kind: "browser", words: "Security check failed, so the mouse" }, { kind: "browser", words: "Unable to verify current URL for security check" }, { kind: "browser", words: "Permission denied for " }], xs = 259, am = 1e4, cm = 2500, lm = 1e3, um = "tengu_woolly_thimble";
function Xc(e, o, r, h) {
  let g = `${import_chunk_1w26p6p9.d0}${e}`, y = /* @__PURE__ */ new WeakMap(), M = async (k, P, R) => {
    (0, import_chunk_ca9ws28w.a7r)(P.options?.messageClientPlatform);
    let I = [], L = false, z = true, H = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set(), ae = /* @__PURE__ */ new Set(), _e = [], be = zc.has(e) ? [k.tabId] : [], Q = () => (0, import_chunk_f9x2f6cx.Y)() && import_chunk_b3gt63am.O9e.peek(P.session)?.host === void 0;
    if (e === "file_upload" && import_chunk_b3gt63am.P9e in k) return Rn(import_chunk_prn6030k.HLl);
    if (e === "file_upload" && Q()) return Rn(import_chunk_prn6030k.iJe);
    let Ae = e === "file_upload" ? (0, import_chunk_xcgcdx61.da)({ mcpInfo: { serverName: import_chunk_prn6030k.Xi, toolName: e }, excludedFromModeBypassAllow: () => true }, (0, import_chunk_bz1f2qnq.Z)(P)) : void 0;
    if (Ae !== void 0 && (0, import_chunk_b3gt63am.Bfo)(o)) {
      if (Ae === "plan" || (0, import_chunk_bz1f2qnq.Z)(P).mode === "plan") {
        if (P.toolUseId !== void 0) (0, import_chunk_cqa9hrgx.l)("chrome_upload_card", "plan_mode");
        return Rn(import_chunk_prn6030k.JOo);
      }
      if (Ae !== "auto") {
        let ye = (0, import_chunk_w5811gqy.WYr)(k.origin) ? (0, import_chunk_52cad0n6.IMe)(k.origin) : void 0;
        if (!ye) {
          if (P.toolUseId !== void 0) (0, import_chunk_cqa9hrgx.m)("chrome_upload_card", "origin_not_canonical");
          return Rn(import_chunk_prn6030k.QOo);
        }
        let it = (0, import_chunk_52cad0n6.yTe)((0, import_chunk_52cad0n6.Fue)((0, import_chunk_bz1f2qnq.Z)(P)), ye.host);
        if (it) {
          if (P.toolUseId !== void 0) (0, import_chunk_cqa9hrgx.l)("chrome_upload_card", "domain_rule_denied");
          return it;
        }
        return { behavior: "ask", message: "Claude in Chrome requires permission.", updatedInput: k, suggestions: void 0, personOnly: true, suppressAlwaysAllowRule: true, decisionReason: { type: "safetyCheck", reason: import_chunk_w5811gqy.rUa, classifierApprovable: false }, metadata: { command: { name: g, description: `Allow Claude in Chrome to ${(0, import_chunk_31467yzh.jgt)(e, k)} on ${ye.host}?`, chrome: { ...ye, domainAllowed: false } } } };
      }
    }
    if (e === "file_upload" && o?.[import_chunk_b3gt63am.Lal] === true && !qs(e, (0, import_chunk_bz1f2qnq.Z)(P))) return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "upload_needs_auto_mode"), Rn(import_chunk_prn6030k.RLl);
    if (e === "navigate") {
      if (typeof k.url !== "string") return An("navigate url is not a string");
      I.push(k.url);
    } else if (e === "browser_batch") {
      if (k.actions !== void 0 && !Array.isArray(k.actions)) return An("batch actions is not an array");
      for (let ye of Array.isArray(k.actions) ? k.actions : []) {
        if (!(0, import_chunk_ma3kja9f.T)(ye) || typeof ye.name !== "string") return An("unreadable batch item");
        if (ye.name === "browser_batch") return An("nested batch");
        if (!Xf.has(ye.name)) return An("unrecognized batch item name");
        if (H.add(js.has(ye.name) && (0, import_chunk_ma3kja9f.T)(ye.input) ? ye.input.tabId : void 0), ae.add(ye.name), F.add((zs.has(ye.name) || ye.name === "navigate" && F.size === 0) && (0, import_chunk_ma3kja9f.T)(ye.input) ? ye.input.tabId : void 0), ye.name === "navigate" || zc.has(ye.name)) {
          if (_e.push(ye), (0, import_chunk_ma3kja9f.T)(ye.input) && (ye.name !== "navigate" || Number.isFinite(ye.input.tabId))) be.push(ye.input.tabId);
        }
        if (ye.name === "file_upload") return Rn(Q() ? import_chunk_prn6030k.iJe : import_chunk_prn6030k.ZOo);
        if (ye.name === "navigate") {
          if (!(0, import_chunk_ma3kja9f.T)(ye.input) || typeof ye.input.url !== "string") return An("batch navigate url is not a string");
          if (I.push(ye.input.url), L = true, (0, import_chunk_52cad0n6.yJt)(ye.input.url)) z = false;
        } else if (!import_chunk_rg2p81t1.tye.has(ye.name) || ye.input !== void 0 && !(0, import_chunk_ma3kja9f.T)(ye.input) || !(0, import_chunk_sjqze7qg.ACe)(ye.name, (0, import_chunk_ma3kja9f.T)(ye.input) ? ye.input : {})) z = false;
      }
    }
    let Ve = o?.[Qf] === true && r !== void 0 && (0, import_chunk_bz1f2qnq.Z)(P).mode !== "plan", Tt = (0, import_chunk_bz1f2qnq.Z)(P), pt = e === "browser_batch" && Ve && Rr(P) && (P.agentId === void 0 || P.lateAnswerFor !== P.toolUseId) && P.toolUseId !== void 0 && Kc(e, Tt), Ge = pt && P.agentId === void 0 && (0, import_chunk_bz1f2qnq.nX)(om) === "on", At = Ge && (0, import_chunk_bz1f2qnq.nX)(nm) === "on", Ht = At ? import_chunk_prn6030k.FLl : import_chunk_prn6030k.hIs, Et = Object.keys(k).length === 1, [Wt] = F, pe = Ge && Et && F.size === 1 && typeof Wt === "number" && (!L || At && !z) && !$s(Tt, ae) && !Vc(P, Tt, ae) ? Wt : void 0, oe = pt && Xn(Tt.alwaysAllowRules.session).size > 0;
    if (oe && pe === void 0) {
      let [ye] = ae, [it] = I, Ke = Ge && ye === "navigate" && it !== void 0 && !(0, import_chunk_52cad0n6.yJt)(it) ? (0, import_chunk_52cad0n6.IMe)(it) : void 0;
      if (Ke && Ke.host.length <= xs && Xn(Tt.alwaysAllowRules.session).has((0, import_chunk_52cad0n6.B$)(Ke.host))) (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "batch_opens_allowed_site");
      return Pr(Ge ? Ht : import_chunk_prn6030k.NLl);
    }
    let ge = e === "browser_batch" && L && z, Te = I.filter((ye) => !(0, import_chunk_52cad0n6.yJt)(ye)), Qe, Ye = /* @__PURE__ */ new Map();
    if (Te.length > 0) {
      let ye = (0, import_chunk_bz1f2qnq.Z)(P), it = (0, import_chunk_52cad0n6.Fue)(ye);
      for (let Ke of Te) {
        let Pe = (0, import_chunk_52cad0n6.IMe)(Ke);
        if (!Pe) return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "non_web_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable URL", classifierApprovable: false } };
        let Ne = (0, import_chunk_52cad0n6.yTe)(it, Pe.host);
        if (Ne) return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "domain_rule_denied"), Ne;
        let yt = (0, import_chunk_52cad0n6.B$)(Pe.host);
        if (!it.allowed.has(yt) && !Ye.has(yt)) Ye.set(yt, Pe.host);
        Qe ??= Pe;
      }
      if (Qe !== void 0 && Ye.size === 0 && (e === "navigate" || ge)) {
        if (Ve && e === "navigate" && (0, import_chunk_cdfjrfzp.sRn)((0, import_chunk_52cad0n6.bUe)(Qe.host))) (0, import_chunk_271f5kxt.E7)(P, k, Bs(Qe.host, Rr(P), ye.alwaysAllowRules.session), g);
        let Ke = (0, import_chunk_52cad0n6.B$)(Qe.host), Pe = it.sourceOf.get(Ke) ?? it.sourceOf.get((0, import_chunk_52cad0n6.bUe)(Ke)) ?? "session";
        if (ye.chromeClassifierFloorEnabled !== true) return { behavior: "allow", updatedInput: k, decisionReason: { type: "rule", rule: { source: Pe, ruleBehavior: "allow", ruleValue: { toolName: import_chunk_1w26p6p9.g7, ruleContent: Qe.host } } } };
        return { behavior: "ask", message: "Claude in Chrome requires permission.", updatedInput: k, decisionReason: { type: "other", reason: `Claude in Chrome action on ${Qe.host}` }, metadata: { command: { name: g, chrome: { ...Qe, domainAllowed: true } } } };
      }
    }
    if (import_chunk_rg2p81t1.tye.has(e) && (0, import_chunk_sjqze7qg.ACe)(e, k)) return { behavior: "allow", updatedInput: k };
    let Rt = be.findIndex((ye) => !Number.isFinite(ye) || ye !== be[0]);
    if (Rt !== -1 && (P.lateAnswerFor === void 0 || P.lateAnswerFor !== P.toolUseId)) {
      let ye = Number.isFinite(be[Rt]) ? "batch_multiple_tabs" : "tab_missing";
      return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", ye), { behavior: "deny", message: ye === "tab_missing" ? import_chunk_prn6030k.eIo : import_chunk_prn6030k.nIo, decisionReason: { type: "safetyCheck", reason: `Claude in Chrome: ${ye}`, classifierApprovable: false } };
    }
    let Mt = (0, import_chunk_bz1f2qnq.Z)(P);
    if (tl(e, k) && (o?.[em] === true || o?.[tm] === true) && P.toolUseId !== void 0 && Mt.mode === "acceptEdits" && (0, import_chunk_xfj2cwfv.Ohe)() === "acceptEdits" && (0, import_chunk_xcgcdx61.DKt)({ mcpInfo: { serverName: import_chunk_prn6030k.Xi } }, Mt) === void 0) return (0, import_chunk_271f5kxt.E7)(P, k, { ownTabsUnasked: true }, g), { behavior: "allow", updatedInput: k };
    let ht = Ve && h !== void 0 ? await (0, import_chunk_7z55j6ad.s7r)(e, k, P, (0, import_chunk_bz1f2qnq.Z)(P), async () => {
      let ye = await h(P.abortController.signal);
      if (ye.failed) (0, import_chunk_cqa9hrgx.l)("chrome_unchanged_pick", "list_read_failed");
      return ye.deviceId;
    }) : void 0;
    if (ht !== void 0) return ht;
    if (Ve) {
      let ye = e !== "browser_batch" ? { toolName: e, input: k } : pe !== void 0 && oe ? { toolName: L ? "navigate" : e, input: { tabId: pe } } : !pt || !Et ? void 0 : (0, import_chunk_865at33z.b)(qc, false) ? (0, import_chunk_52cad0n6.nsr)({ actions: _e }) : H.size === 1 ? { toolName: e, input: { tabId: [...H][0] } } : void 0, it = ye !== void 0 && !["navigate", "file_upload"].includes(ye.toolName) && !import_chunk_rg2p81t1.tye.has(e) && ye.input.tabId, Ke = typeof it === "number" && P.toolUseId !== void 0 && P.permissionRound !== void 0 ? { tabId: it, toolUseId: P.toolUseId } : void 0, Pe = Ke && fm(P, Ke.tabId, e), Ne = Pe && { ...Pe, thisCallLooks: (0, import_chunk_cdfjrfzp.l$a)(e, k), thisCallWrites: (0, import_chunk_cdfjrfzp.d$a)(e, k) }, yt = Ke === void 0 || Ne === void 0 ? void 0 : await _m(P, Ke.toolUseId, e, Ne, R), xe = Ne !== void 0 && yt !== void 0 && gm(yt) ? Ne.site : void 0;
      if (Ke !== void 0 && yt !== void 0) Bc(P.session, yt), (0, import_chunk_cdfjrfzp.f$a)(P.session, Ke.toolUseId, xe === void 0 ? yt : "skipped");
      let It = performance.now(), Ot = Ke && xe === void 0 ? await r?.(Ke.tabId, P.abortController.signal) : void 0, se = Ot?.url, ke = se === void 0 ? void 0 : (0, import_chunk_52cad0n6.IMe)(se), ct = xe !== void 0 ? { host: xe } : ye?.toolName === "navigate" ? Qe : ke !== void 0 && ke.host.length <= xs ? ke : void 0;
      if (xe !== void 0) Fc(P.session);
      if (Ke !== void 0 && R !== void 0 && P.agentId === void 0) hm(P, Ke, e, k, yt, xe);
      if (Ke !== void 0 && Ot !== void 0) {
        if ((0, import_chunk_cdfjrfzp.u$a)(P.session, Ke.toolUseId), yt !== void 0 && ct === void 0 && (Ot.url !== void 0 || Ot.failure !== "needs_approval" && Ot.failure !== "not_connected" && Ot.failure !== "stopped")) Us(P.session, { kind: se === void 0 ? "unresolved" : "moved", side: yt });
        let Be = ct && (0, import_chunk_52cad0n6.B$)(ct.host);
        if (Dc(P.session, { ...Ke, forBatch: e === "browser_batch", ms: performance.now() - It, failed: se === void 0, site: Be, laterInReply: (P.sameTurnToolUses?.length ?? 0) > 0, wouldSkip: Ne }), Be !== void 0) (0, import_chunk_cdfjrfzp.c$a)(P.session, Ke.toolUseId, Ke.tabId, Be);
      }
      let bt = pe !== void 0 && oe, jt = bt && L && P.lateAnswerFor !== P.toolUseId && !(P.toolUseId !== void 0 && (0, import_chunk_cdfjrfzp.m$a)(P.session, P.toolUseId)), Re = jt && P.permissionRound !== void 0 && Wc(ct, Tt.alwaysAllowRules.session) ? (await h?.(P.abortController.signal))?.extensionVersion : void 0, Gt = Re !== void 0 && sm.test(Re), Xe = (0, import_chunk_bz1f2qnq.Z)(P), Ce = (0, import_chunk_52cad0n6.Fue)(Xe), wt = ct && (0, import_chunk_52cad0n6.yTe)(Ce, ct.host), we = Xn(Xe.alwaysAllowRules.session), le = bt && Wc(ct, Xe.alwaysAllowRules.session);
      if (Xe.mode === "plan") ;
      else if (pt && (we.size > 0 ? !oe || !Kc(e, Xe) || $s(Xe, ae) || Vc(P, Xe, ae) : oe)) return M(k, P);
      else if (Ot !== void 0 && Ot.url === void 0) {
        let Be = { type: "safetyCheck", reason: "Claude in Chrome: tab URL unresolved", classifierApprovable: false }, Oe = { behavior: "ask", message: "Claude in Chrome requires permission.", updatedInput: k, decisionReason: Be }, Ue = { behavior: "deny", message: "Couldn't determine which page this action targets. Re-read tabs_context_mcp and try again.", decisionReason: Be }, re = P.lateAnswerFor === P.toolUseId, $e = re && Ce.denied.size === 0;
        if (Ot.failure === "not_connected") {
          if ($e && !bt) return Oe;
          try {
            return { ...Ue, message: (0, import_chunk_7z55j6ad.Boi)(Ot.meta, P) ?? (0, import_chunk_2atp9x7j.d7r)() };
          } catch (qe) {
            return (0, import_chunk_k449cc64.i)(qe), Ue;
          }
        }
        if (bt) return Ot.failure === "needs_approval" ? Pr(import_chunk_prn6030k.hIs) : Ue;
        switch (Ot.failure) {
          case "stopped":
            return Oe;
          case "needs_approval":
            if (!re || $e) return Oe;
            break;
          case "timed_out":
          case "no_tab_group":
          case "not_json":
          case "error_answer":
          case "tab_not_listed":
          case "call_threw":
            if ($e) return Oe;
            break;
          default:
        }
        return Ue;
      } else if (se !== void 0 && ct === void 0) return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "non_web_tab_url"), { behavior: "deny", message: "Can't interact with browser-internal or unparseable URLs. Navigate to a web page first.", decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: non-web or unparseable tab URL", classifierApprovable: false } };
      else if (wt) return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "domain_rule_denied"), wt;
      else if (bt && !le) return Pr(Ht);
      else if (jt && !(Gt && (0, import_chunk_tvttgr51.Vb)(Re, rm))) {
        if (P.permissionRound !== void 0 && !P.abortController.signal.aborted) (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "batch_opens_allowed_site"), (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", Gt ? "batch_opens_allowed_site_refused_old_extension" : "batch_opens_allowed_site_refused_version_unknown");
        return Pr(import_chunk_prn6030k.hIs);
      } else if (ct !== void 0 && (0, import_chunk_cdfjrfzp.sRn)((0, import_chunk_52cad0n6.bUe)(ct.host))) {
        if (se !== void 0) (0, import_chunk_cqa9hrgx.u)("chrome_permission_prompt");
        else if (L && le && P.permissionRound !== void 0) {
          if ((0, import_chunk_cqa9hrgx.u)("chrome_permission_prompt", { batch_opens_allowed_site: true }), P.toolUseId !== void 0) (0, import_chunk_cdfjrfzp.p$a)(P.session, P.toolUseId);
        }
        let Be = e !== "browser_batch" || le ? Bs(ct.host, Rr(P), Xe.alwaysAllowRules.session) : (0, import_chunk_bz1f2qnq.nX)(qc) === "on" ? { site: ct.host, personLeftItToClassifier: false } : void 0;
        if (Be !== void 0) (0, import_chunk_271f5kxt.E7)(P, k, Be, g);
        let Oe = Ce.allowed.has((0, import_chunk_52cad0n6.B$)(ct.host)), Ue = xe === void 0 && !Oe && Xe.chromeClassifierFloorEnabled === true && Xe.canAutoClassifierRun === true;
        if (Ue) y.set(k, ct.host);
        let re = e !== "browser_batch" ? `on ${ct.host}` : ye?.toolName === "navigate" ? `starting on ${ct.host}` : `starting in the ${ct.host} tab`;
        return { behavior: "ask", message: "Claude in Chrome requires permission.", updatedInput: k, ...xe !== void 0 && { siteNotRead: true }, suggestions: Ue ? [{ type: "addRules", rules: [{ toolName: import_chunk_1w26p6p9.g7, ruleContent: ct.host }], behavior: "allow", destination: "session" }] : void 0, decisionReason: { type: "other", reason: `Claude in Chrome action ${re}` }, metadata: { command: { name: g, description: `Allow Claude in Chrome to ${(0, import_chunk_31467yzh.jgt)(e, k)} ${re}?`, chrome: { ...ct, domainAllowed: Oe && (e !== "browser_batch" || le) } } } };
      } else if (se !== void 0) (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "tab_site_not_plain");
    }
    let vt = (0, import_chunk_bz1f2qnq.Z)(P), De = e === "select_browser" && Ve && P.agentId === void 0 && typeof k.deviceId === "string" && import_chunk_prn6030k.XOo.test(k.deviceId) && Object.keys(k).length === 1 && ym(vt) && (0, import_chunk_3t7ve0wy.Dm)() ? { toolName: g, ruleContent: k.deviceId } : void 0;
    if (De !== void 0 && vt.alwaysAllowRules.session?.includes((0, import_chunk_qebpc5de.yn)(De))) return (0, import_chunk_271f5kxt.E7)(P, k, { pickLeftToClassifier: true }, g), { behavior: "ask", message: "Claude in Chrome requires permission.", updatedInput: k, metadata: { command: { name: g, chrome: { domainAllowed: true } } } };
    let kt = !(0, import_chunk_f9x2f6cx.Y)();
    return { behavior: "passthrough", message: "Claude in Chrome requires permission.", suggestions: De ? [{ type: "addRules", rules: [De], behavior: "allow", destination: "session" }] : Ye.size === 1 && (e === "navigate" || ge) && kt ? [{ type: "addRules", rules: [...Ye.values()].map((ye) => ({ toolName: import_chunk_1w26p6p9.g7, ruleContent: ye })), behavior: "allow", destination: "session" }] : void 0 };
  };
  return { coerceInput: (k) => {
    let P = (0, import_chunk_sjqze7qg.Yso)(k);
    return P === k ? null : { input: P, shapeClass: "chrome_host_only_args_removed" };
  }, checkPermissions: M, suggestedAllowRule: (k, P) => k.toolName === import_chunk_1w26p6p9.g7 && k.ruleContent !== void 0 && (P === "late" ? (0, import_chunk_cdfjrfzp.sRn)(k.ruleContent.replace(/:[0-9]{1,5}$/, "")) : k.ruleContent === y.get(P)), noteCallFailure: ({ toolUseId: k, text: P }, R) => {
    let I = im.find(({ words: z }) => P.startsWith(z))?.kind, L = (0, import_chunk_cdfjrfzp.L9o)(R.session, k);
    if (I !== void 0 && L !== void 0) Us(R.session, { kind: I, side: L });
    if ((0, import_chunk_cdfjrfzp.Ori)(R.session, k) && !R.abortController.signal.aborted) (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "batch_opens_allowed_site_failed");
  }, suppressesAlwaysAllowRule: () => true, ignoresWholeToolAllowRule: () => true, excludedFromAutoModeAllowlist: () => true, excludedFromModeBypassAllow: () => true };
}
async function Qc(e, o, r) {
  let h = AbortSignal.timeout(am), g = AbortSignal.any([r, h]), y = Gc(e, o, g), M = new AbortController();
  y.then(() => M.abort());
  let k = (0, import_chunk_5appeerh.K)(cm, M.signal).then(async () => {
    if (g.aborted || M.signal.aborted) return;
    let { url: F } = await Gc(e, o, AbortSignal.any([g, M.signal]));
    return F !== void 0 && (0, import_chunk_52cad0n6.IMe)(F) ? F : void 0;
  }), P = await Promise.race([y.then(() => {
    return;
  }), k]);
  if (P !== void 0) return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "tab_read_second_lookup_decided"), { url: P };
  let { url: R, answer: I, meta: L, thrown: z } = await y;
  if ((0, import_chunk_7z55j6ad.Uoi)(L) && (0, import_chunk_865at33z.b)(import_chunk_2atp9x7j.c7r, false)) return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "tab_url_unresolved_not_connected"), { url: void 0, failure: "not_connected", meta: L };
  if (R !== void 0) return { url: R };
  let H = "tab_not_listed";
  if (z !== void 0) {
    if (r.aborted) return { url: void 0, failure: "stopped" };
    let { error: F } = z;
    (0, import_chunk_w578pjby.t)(`Claude in Chrome: the tab read failed: ${String(F)}`, { level: "error" }), H = h.aborted ? "timed_out" : F instanceof SyntaxError ? I.includes("createIfEmpty") ? "no_tab_group" : "not_json" : F instanceof import_chunk_yz5b8aaa.Bm ? "error_answer" : (0, import_chunk_ma3kja9f.T)(F) && F.code === import_chunk_yz5b8aaa.Pke ? "needs_approval" : "call_threw";
  }
  return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", `tab_url_unresolved_${H}`), { url: void 0, failure: H };
}
async function Zc(e, o) {
  try {
    let { content: r } = await e("list_connected_browsers", {}, AbortSignal.any([o, AbortSignal.timeout(lm)])), h = Array.isArray(r) ? r[0] : void 0, g = (0, import_chunk_w578pjby.te)(String((0, import_chunk_ma3kja9f.T)(h) ? h.text : void 0)), y = Array.isArray(g) ? g.find((M) => (0, import_chunk_ma3kja9f.T)(M) && M.inUse === true) : void 0;
    return (0, import_chunk_ma3kja9f.T)(y) ? { ...typeof y.deviceId === "string" && { deviceId: y.deviceId }, ...typeof y.extensionVersion === "string" && { extensionVersion: y.extensionVersion } } : {};
  } catch (r) {
    if (o.aborted) return {};
    return (0, import_chunk_w578pjby.t)(`Claude in Chrome: could not read which browser is in use: ${String(r)}`, { level: "error" }), { failed: true };
  }
}
function Bs(e, o, r = []) {
  return { site: e, personLeftItToClassifier: (0, import_chunk_xfj2cwfv.Ohe)() === "auto" && (0, import_chunk_xfj2cwfv.gu)() || o && Xn(r).has((0, import_chunk_52cad0n6.B$)(e)) };
}
function Rr(e) {
  return e.agentId === void 0 || (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_bz1f2qnq.nX)(um) === "on" && !(0, import_chunk_drk264d0.Ey)(e);
}
function pm({ permissionPhase: e, toolUseId: o, allowGivenBy: r, session: h }) {
  let g = e?.pipeline === void 0 && o !== void 0 ? import_chunk_cdfjrfzp.E$a.peek(h)?.get((0, import_chunk_929j4hj9.fZ)(o)) : void 0;
  if (g !== void 0) return { [import_chunk_cdfjrfzp.Iri]: g };
  let y = e?.pipeline !== void 0 ? e.checked?.note : void 0, M = r?.toolUseId === o ? r?.approver : void 0;
  if ((0, import_chunk_ma3kja9f.T)(y) && y.pickLeftToClassifier === true && M === "classifier") return { [Zf]: true };
  if ((0, import_chunk_ma3kja9f.T)(y) && y.ownTabsUnasked === true && e?.pipeline?.result.behavior === "allow" && M === void 0) return { [import_chunk_gk0jv3qt.rye]: true };
  return (0, import_chunk_ma3kja9f.T)(y) && typeof y.site === "string" && (M === "user" || M === "classifier" && y.personLeftItToClassifier === true) ? { [Yc]: (0, import_chunk_52cad0n6.B$)(y.site) } : void 0;
}
function fm(e, o, r) {
  if (!zs.has(r) || e.lateAnswerFor === e.toolUseId) return;
  let h = (0, import_chunk_cdfjrfzp.w$a)(e.session, e.sameTurnToolUses, o), g = (0, import_chunk_bz1f2qnq.Z)(e);
  return h !== void 0 && (0, import_chunk_52cad0n6.Fue)(g).denied.size === 0 && !$s(g, /* @__PURE__ */ new Set([r])) && Bs(h.site, Rr(e), g.alwaysAllowRules.session).personLeftItToClassifier ? h : void 0;
}
function mm({ after: e, thisCallLooks: o, thisCallWrites: r }) {
  return e === "reads" ? "after_reads" : o ? "looking_after_acts" : r ? void 0 : "other_after_acts";
}
function hm(e, { tabId: o, toolUseId: r }, h, g, y, M) {
  let { session: k, sameTurnToolUses: P } = e, R = (0, import_chunk_cdfjrfzp.S$a)(P, r), I = bc(k, { reply: R, tabId: o, act: (0, import_chunk_cdfjrfzp.Pri)(h, g) });
  if (I !== void 0) xc(k, I);
  let L = (0, import_chunk_cdfjrfzp.b$a)(k, P);
  if (y === "looking_after_acts" && (0, import_chunk_cdfjrfzp.D9o)(h, g) && L !== void 0) Ec(k, { act: L, tabId: o, skipped: M !== void 0, reply: R });
}
function gm(e) {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return false;
  let o = (0, import_chunk_sghy0qej.CGe)(import_chunk_prn6030k.DLl, { safe: 0, others: Object.values(import_chunk_prn6030k.mIs) });
  return o !== 0 && (e === "after_reads" || o === import_chunk_prn6030k.mIs.after_acting || e === "looking_after_acts" && o === import_chunk_prn6030k.mIs.looking_after_acting);
}
async function _m(e, o, r, h, g) {
  let y = mm(h);
  return y !== void 0 && g !== void 0 && !(0, import_chunk_cdfjrfzp.g$a)(e.session, o) && (0, import_chunk_cdfjrfzp.sRn)((0, import_chunk_52cad0n6.bUe)(h.site)) && e.inputChangedByHook !== true && e.runsAloneToolUseId === e.toolUseId && !(0, import_chunk_cdfjrfzp.y$a)(e.sameTurnToolUses, e.sameTurnErroredToolUseIds) && await g.serverClearedCall() && (0, import_chunk_xfj2cwfv.Ohe)() === "auto" && (0, import_chunk_xfj2cwfv.gu)() && qs(r, (0, import_chunk_bz1f2qnq.Z)(e)) ? y : void 0;
}
function Cm(e, o) {
  let r = Array.isArray(e) ? e.findLast((M) => (0, import_chunk_ma3kja9f.T)(M) && typeof M.text === "string" && M.text.startsWith(`

Tab Context:`)) : void 0, g = String(r?.text).split(`
`).findLast((M) => M.startsWith(`  \u2022 tabId ${o}: `))?.match(/\("([^"]*)"\)$/)?.[1], y = g && (0, import_chunk_52cad0n6.IMe)(g)?.host;
  return y && y.length <= xs ? y : void 0;
}
function el(e, o) {
  let r = o.toolUseId === void 0 ? void 0 : (0, import_chunk_cdfjrfzp.L9o)(o.session, o.toolUseId), h = o.toolUseId === void 0 || r === void 0 ? void 0 : (0, import_chunk_cdfjrfzp._$a)(o.session, o.toolUseId), g = h && Cm(e, h.tabId);
  if (r === void 0 || h === void 0 || g === void 0 || (0, import_chunk_52cad0n6.B$)(g) === h.site) return;
  if (Uc(o.session, r), r === "skipped") throw new import_chunk_yz5b8aaa.Bm(import_chunk_prn6030k.LLl, "Claude in Chrome look withheld: its tab left the site named");
}
function tl(e, o) {
  return e === Jc && o.createIfEmpty === true && Object.keys(o).length === 1;
}
function ol(e, o, r) {
  let h = r.allowGivenBy?.toolUseId === r.toolUseId ? r.allowGivenBy?.approver : void 0, g = pm(r) ?? (tl(e, o) && r.permissionPhase?.pipeline === void 0 && h === void 0 && (0, import_chunk_xfj2cwfv.Ohe)() === "acceptEdits" ? { [import_chunk_gk0jv3qt.rye]: true } : void 0), y = g?.[Yc], M = h === "classifier" && typeof y === "string" ? y : void 0;
  if (r.toolUseId !== void 0 && (0, import_chunk_cdfjrfzp.L9o)(r.session, r.toolUseId) === "skipped" && M === void 0) throw (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "site_not_read_send_refused"), new import_chunk_yz5b8aaa.Bm(import_chunk_prn6030k.tIo, "Claude in Chrome call judged on a site that was not read, with no classifier allow");
  if (Hc(r.session, { toolName: e, toolUseId: r.toolUseId, afterCard: h === "user" || g?.[import_chunk_cdfjrfzp.Iri] !== void 0, siteOnClassifierAllow: M }), r.toolUseId !== void 0) {
    if ((0, import_chunk_cdfjrfzp.h$a)(r.session, { toolUseId: r.toolUseId, toolName: e, input: o, judgedByTabSite: zs.has(e), siteOnClassifierAllow: M }), (0, import_chunk_cdfjrfzp.Ori)(r.session, r.toolUseId)) (0, import_chunk_cqa9hrgx.u)("chrome_permission_prompt", { batch_opens_allowed_site_sent: true });
  }
  return g;
}
function Xn(e = []) {
  return (0, import_chunk_52cad0n6.Fue)({ alwaysAllowRules: { session: e }, alwaysDenyRules: {} }).allowed;
}
function Wc(e, o) {
  return e !== void 0 && (0, import_chunk_cdfjrfzp.sRn)((0, import_chunk_52cad0n6.bUe)(e.host)) && Xn(o).has((0, import_chunk_52cad0n6.B$)(e.host));
}
function Rn(e) {
  return { behavior: "deny", message: e, decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: a file_upload that cannot be served", classifierApprovable: false } };
}
function Pr(e) {
  return (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "batch_one_by_one"), { behavior: "deny", message: e, decisionReason: { type: "safetyCheck", reason: "Claude in Chrome: this call does not run in auto mode, so each action is its own call", classifierApprovable: false } };
}
function $s(e, o) {
  return [...(0, import_chunk_ht27b0vz.Vs)(e), ...(0, import_chunk_ht27b0vz.al)(e)].some((r) => [...o].some((h) => (0, import_chunk_ht27b0vz.jc)(e, { name: `${import_chunk_1w26p6p9.d0}${h}`, mcpInfo: { serverName: import_chunk_prn6030k.Xi, toolName: h } }, r)));
}
function Vc(e, o, r) {
  return [...import_chunk_bzyb60p0.SLt].some((h) => (0, import_chunk_bzyb60p0.Rur)({ hookEvent: h, itemTools: [...r].map((g) => `${import_chunk_1w26p6p9.d0}${g}`), batchTool: `${import_chunk_1w26p6p9.d0}browser_batch`, tools: e.options?.tools, toolAliases: o.toolAliases, sessionHooks: e.sessionHooksRegistry, sessionId: (0, import_chunk_bzyb60p0.ly)(e, h, e.session.id) }));
}
function Kc(e, o) {
  return !qs(e, o) && o.chromeClassifierFloorEnabled === true && o.canAutoClassifierRun === true;
}
function ym(e) {
  return (0, import_chunk_bzyb60p0.MQr)(e.mode) && e.servedCall !== true && e.chromeClassifierFloorEnabled === true && e.canAutoClassifierRun === true && !(0, import_chunk_f9x2f6cx.zl)((0, import_chunk_f9x2f6cx.ao)(), import_chunk_xfj2cwfv.Ub) && (0, import_chunk_vc58gmrj.q$t)();
}
function qs(e, o) {
  return (0, import_chunk_xcgcdx61.da)({ mcpInfo: { serverName: import_chunk_prn6030k.Xi, toolName: e }, excludedFromModeBypassAllow: () => true }, o) === "auto";
}
function An(e) {
  return (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "unjudgeable_chrome_input"), { behavior: "deny", message: "Can't run this Claude in Chrome action: its input couldn't be safely checked.", decisionReason: { type: "safetyCheck", reason: `Claude in Chrome: ${e}`, classifierApprovable: false } };
}
async function Gc(e, o, r) {
  let h = "", g;
  try {
    let { content: y, _meta: M } = await e(Jc, { createIfEmpty: false }, r);
    g = M;
    let k = Array.isArray(y) ? y[0] : void 0;
    h = (0, import_chunk_ma3kja9f.T)(k) ? String(k.text) : String(y);
    let P = (0, import_chunk_w578pjby.te)(h), R = (0, import_chunk_ma3kja9f.T)(P) ? P.availableTabs : void 0, I = Array.isArray(R) ? R.find((L) => (0, import_chunk_ma3kja9f.T)(L) && L.tabId === o) : void 0;
    return { url: (0, import_chunk_ma3kja9f.T)(I) && typeof I.url === "string" ? I.url : void 0, answer: h, meta: g };
  } catch (y) {
    return { url: void 0, answer: h, meta: g, thrown: { error: y } };
  }
}
function Dl(e) {
  return (0, import_chunk_qdcbcsg7.fLl)(e);
}
function Xt(e) {
  return (0, import_chunk_qdcbcsg7.Ap)(e);
}
var Ro = require("/$bunfs/root/chunk-f7m7jxed.js"), sn = require("/$bunfs/root/chunk-stn5x3wh.js"), In = require("/$bunfs/root/chunk-5pbpbbpt.js"), Bo = require("/$bunfs/root/chunk-0yavwn80.js"), an = require("/$bunfs/root/chunk-fgfbxe3p.js");
function Nl(e) {
  return e instanceof import_chunk_racn22qq.PO && (e.code === import_chunk_racn22qq.Ua.ClientHttpFailedToOpenStream || e.message.includes("Failed to open SSE stream"));
}
function Ir(e) {
  if (e instanceof import_chunk_yz5b8aaa.iK) return true;
  if (e instanceof import_chunk_racn22qq.ef) return false;
  let o = e instanceof import_chunk_racn22qq.PO ? e.status : "code" in e ? e.code : void 0;
  if (o === 404) return !Nl(e);
  return o === 400 && /Server not initialized|No valid session ID|Mcp-Session-Id header is required/i.test(e.message);
}
function Fl(e, o, r = (0, import_chunk_bzyb60p0.tfe)()) {
  if (!e) return e;
  return si(e, "Server instructions", o, r);
}
function si(e, o, r, h = (0, import_chunk_bzyb60p0.tfe)()) {
  if (e.length <= h) return e;
  if (r !== void 0) (0, import_chunk_k449cc64.He)(r, `${o} truncated from ${e.length} to ${h} chars`);
  return (0, import_chunk_7cfjrnwy.ee)(e, h) + "\u2026 [truncated]";
}
var Ul = ["ECONNRESET", "ETIMEDOUT", "EPIPE", "EHOSTUNREACH", "ECONNREFUSED"], Em = /* @__PURE__ */ new Set([...Ul, "ConnectionRefused", "ConnectionClosed"]), bm = /^Error POSTing to endpoint \(HTTP (\d+)\)/;
function Ws(e) {
  return typeof e === "number" && e >= 100 && e <= 599;
}
function nl(e) {
  return (0, import_chunk_3fqcfedz.OMe)(e) || e instanceof import_chunk_racn22qq.Uor ? (0, import_chunk_3fqcfedz.Gor)(e.message) : void 0;
}
function Mm(e) {
  if (e.name === "AbortError") return true;
  let o = "code" in e ? e.code : void 0, r = "status" in e ? e.status : void 0, h = bm.exec(e.message)?.[1];
  if (Ws(r) || Ws(o) || typeof o === "number" && o < 0 || h !== void 0 && Ws(Number(h))) return false;
  if (typeof o === "string" && Em.has(o)) return true;
  let g = e.message;
  return Ul.some((y) => g.includes(y)) || g.includes("Body Timeout Error") || /\bterminated\b/.test(g) || g.includes("SSE stream disconnected") || g.includes("Failed to reconnect SSE stream") || e instanceof import_chunk_racn22qq.Uor && (0, import_chunk_3fqcfedz.uUa)(g);
}
var vm = 1e8, rl = 20, xl = [250, 500, 1e3];
function ii(e) {
  if ((0, import_chunk_v6x86eph.xor)(e)) return false;
  if (e instanceof import_chunk_bzyb60p0.sro) return false;
  if ((0, import_chunk_3fqcfedz.OMe)(e) || e instanceof import_chunk_bzyb60p0.jcr) return false;
  if (e instanceof import_chunk_tgn73pvk.Sie) return false;
  if ((0, import_chunk_v6x86eph.Lgt)(e)) return false;
  if (e instanceof DOMException && e.name === "TimeoutError") return false;
  if (e instanceof en) return false;
  if (e instanceof import_chunk_racn22qq.PO && e.status >= 400 && e.status < 500) return false;
  if (e instanceof Error && !(e instanceof import_chunk_racn22qq.ef) && "code" in e && typeof e.code === "number" && e.code >= 400 && e.code < 500) return false;
  if (e instanceof import_chunk_racn22qq.Xa && e.code === import_chunk_racn22qq.Ua.RequestTimeout) return false;
  if (e instanceof import_chunk_racn22qq.Xa && e.code === import_chunk_racn22qq.Ua.ListPaginationExceeded) return false;
  if (e instanceof import_chunk_racn22qq.ef) return e.code !== -32001 && e.code !== import_chunk_racn22qq.ld.MethodNotFound && e.code !== import_chunk_racn22qq.ld.InvalidRequest && e.code !== import_chunk_racn22qq.ld.InvalidParams && e.code !== import_chunk_racn22qq.ld.UnsupportedProtocolVersion && e.code !== import_chunk_racn22qq.ld.MissingRequiredClientCapability;
  return true;
}
function sl(e) {
  return (0, import_chunk_qdcbcsg7.mt)().clientAuthProviders.get(e)?.rewrittenRefusalCount;
}
function Hl(e) {
  let o = sl(e), r = false;
  return (h) => {
    if (!(h instanceof import_chunk_racn22qq.YL) || sl(e) === o) return ii(h);
    let g = !r;
    return r = true, g;
  };
}
function Mi(e) {
  return e instanceof DOMException && e.name === "TimeoutError" || e instanceof import_chunk_racn22qq.Xa && e.code === import_chunk_racn22qq.Ua.RequestTimeout || e instanceof import_chunk_racn22qq.ef && e.code === -32001;
}
function gn(e) {
  return "transport" in e && e.transport === void 0;
}
async function qr(e, o, r, h, g, y, M, k) {
  let P = false, R = Hl(e);
  for (let I = 0; ; I++) {
    let L = [], z = /* @__PURE__ */ new Set(), H, F = 0, ae;
    try {
      do {
        let _e = () => e.request({ method: h, ...H && { params: { cursor: H } } }, g, { timeout: (0, import_chunk_98tkmkvx.bf)() }), be = M?.catch((Ve) => {
          if (gn(e) || Mi(Ve)) throw Ve;
          return (0, import_chunk_k449cc64.He)(o, `first ${h} page, sent during the connect, failed (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Ve, r), 200)}); sending it again`), _e();
        }) ?? _e();
        M = void 0;
        let Q = await be;
        if (F++, F === 1) k?.(Q);
        let Ae = y(Q);
        if (Ae) L.push(...Ae);
        if (H) z.add(H);
        if (H = Q.nextCursor, H && z.has(H)) {
          ae = "repeated_cursor";
          break;
        }
        if (H && F >= rl) {
          ae = "capped";
          break;
        }
      } while (H);
      if (ae === "repeated_cursor") (0, import_chunk_k449cc64.He)(o, `${h} returned a nextCursor already sent in this walk (page ${F}); stopping`);
      if (ae === "capped") (0, import_chunk_k449cc64.He)(o, `${h} still returning nextCursor after ${rl} pages; stopping`);
      if (F > 1) Nr(h, F, L.length, ae ?? "complete");
      return L;
    } catch (_e) {
      if (F > 0 && !P) P = true, Nr(h, F, L.length, "error");
      let be = xl[I];
      if (be === void 0 || !R(_e) || gn(e)) throw _e;
      if ((0, import_chunk_k449cc64.He)(o, `${h} failed (${(0, import_chunk_jbjjrhxt.gl)(_e, r)}); retrying in ${be}ms`), await (0, import_chunk_5appeerh.K)(be), gn(e)) throw _e;
    }
  }
}
function Nr(e, o, r, h, g = "pages") {
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_list_paginated", { method: (0, import_chunk_78g0060s.f)(e), pageCount: o, itemCount: r, outcome: (0, import_chunk_78g0060s.f)(h), source: (0, import_chunk_78g0060s.f)(g) });
}
function $l(e, o) {
  if (e.getProtocolEra?.() !== "modern") return;
  let r = (0, import_chunk_qdcbcsg7.mt)().clientTasksDeclaredBeforeServerList.get(e) ?? (0, import_chunk_7625rswd.san)(), h = !((0, import_chunk_507k3c1m.RR)() && !(0, import_chunk_g9n176jp.a_s)(o)) ? (0, import_chunk_7625rswd.Nkt)(r) : r, g = Fr(e, o) ? { ...h, extensions: { ...h.extensions, [import_chunk_m0xr8k74.nle]: { upload: {} } } } : h, y = (0, import_chunk_m0xr8k74.Nho)(g, { serverAdvertisedDownloads: (0, import_chunk_m0xr8k74.k8e)(e.getServerCapabilities?.()), downloadsOn: Wr(e, o).download });
  return y === h ? void 0 : { _meta: { [import_chunk_racn22qq.Q_e]: y } };
}
function Wr(e, o) {
  let r = e.getServerCapabilities?.(), h = (0, import_chunk_qyhf6bts.eh)(o) !== void 0, g = h && r?.tools?.listChanged === true;
  return { download: (0, import_chunk_m0xr8k74.k8e)(r) && (0, import_chunk_81nggker.pBa)(o, h), upload: (0, import_chunk_qyhf6bts.eh)(o) !== void 0 && !(0, import_chunk_ksk52rm1.pN)() && (0, import_chunk_m0xr8k74.w8e)({ protocolEra: e.getProtocolEra?.(), capabilities: r }) && !(0, import_chunk_ksk52rm1.hpo)() && (0, import_chunk_a5r4xv9h.vBa)(g) };
}
var jl = { headers: { "Cache-Control": "no-cache" } }, km = 5e3;
function Fr(e, o) {
  return Wr(e, o).upload && (0, import_chunk_ksk52rm1.wUt)() === true;
}
async function Pm(e, o, r) {
  let h = Hl(e), g = (0, import_chunk_qyhf6bts.eh)(r);
  for (let y = 0; ; y++) try {
    let { listedWithUpload: M, toolsListsAfresh: k } = (0, import_chunk_qdcbcsg7.mt)(), P = Fr(e, r), R = g !== void 0 ? k.get(g) : void 0;
    if (g !== void 0) (0, import_chunk_qdcbcsg7.mt)().listedDeclarations.set(e, (0, import_chunk_w578pjby._)(Wr(e, r)));
    let I = await e.listTools($l(e, r), { ...R !== void 0 && jl, timeout: (0, import_chunk_98tkmkvx.bf)(), cacheMode: "refresh" });
    if (P) M.add(e);
    if (g !== void 0 && R !== void 0) {
      if (R.left--, R.left === 0 && k.get(g) === R) k.delete(g);
    }
    return Nr("tools/list", void 0, I.tools.length, "complete", "aggregate"), I.tools;
  } catch (M) {
    let k = xl[y];
    if (k === void 0 || !h(M)) {
      if (M instanceof import_chunk_racn22qq.Xa && M.code === import_chunk_racn22qq.Ua.ListPaginationExceeded) Nr("tools/list", void 0, 0, "capped", "aggregate");
      throw M;
    }
    if (gn(e)) throw M;
    if ((0, import_chunk_k449cc64.He)(o, `tools/list failed (${(0, import_chunk_jbjjrhxt.gl)(M, r)}); retrying in ${k}ms`), await (0, import_chunk_5appeerh.K)(k), gn(e)) throw M;
  }
}
var Ln = [1e3, 2e3, 4e3], Rm = 1e4, Am = 5e3, Om = 36e5, Im = 5, Lm = 216e5, Fm = 5e3, Um = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ windowMax: (0, import_chunk_adx6804h.E)().int().min(1).max(100).optional(), parkDelayMinutes: (0, import_chunk_adx6804h.E)().min(1).max(1440).optional() }));
function vi(e, o, r) {
  let h = (0, import_chunk_qdcbcsg7.mt)().listChangedRefetchHandlers, g = h.get(e) ?? {};
  g[o] = r, h.set(e, g);
}
function ai(e, o, r, h) {
  let g = (0, import_chunk_qdcbcsg7.mt)().listChangedRefetchHandlers.get(e);
  if (g === void 0) return;
  let y = [["toolsListChanged", "tools"], ["promptsListChanged", "prompts"], ["resourcesListChanged", "resources"]];
  for (let [M, k] of y) {
    let P = h[M] ? g[k] : void 0;
    if (P === void 0) continue;
    (async () => P(import_chunk_hy0sycbj.SLe))().catch((R) => {
      (0, import_chunk_k449cc64.He)(o, `post-reopen list refetch failed: ${(0, import_chunk_jbjjrhxt.gl)(R, r)}`);
    });
  }
}
function xm(e, o, r, h, g) {
  let y = h ?? e.autoOpenedSubscription;
  if (y === void 0 && e.getProtocolEra?.() !== "modern") return;
  if (y === void 0) (0, import_chunk_k449cc64.He)(o, "no auto-opened subscriptions/listen on a modern connection; running the listen open through the reopen machinery (no-op if the server advertises no listChanged capability)");
  Hm(e, o, r, y, g).catch((M) => {
    (0, import_chunk_k449cc64.He)(o, `subscriptions/listen re-open watcher stopped: ${(0, import_chunk_jbjjrhxt.gl)(M, r)}`);
  });
}
async function Hm(e, o, r, h, g) {
  let y = h, M = 0, k = [], P = h === void 0 ? "connect" : "remote";
  for (; ; ) {
    if (y !== void 0) {
      let I = Date.now(), L = await y.closed;
      if (L === "local") return;
      if (e.transport === void 0) return;
      if (Date.now() - I >= Rm) M = 0;
      P = L, k = k.filter((_e) => Date.now() - _e < Om);
      let z = Um().safeParse((0, import_chunk_865at33z.b)("tengu_mcp_listen_reopen_park_tuning", null)), H = z.success ? z.data : {}, F = H.windowMax ?? Im, ae = H.parkDelayMinutes !== void 0 ? Math.round(H.parkDelayMinutes * 6e4) : Lm;
      if (k.length >= F && M < Ln.length && (0, import_chunk_865at33z.b)("tengu_mcp_listen_reopen_park", true)) {
        (0, import_chunk_k449cc64.He)(o, `subscriptions/listen reopened ${k.length} times in the trailing window (the server keeps killing held streams); parking re-listen`), (0, import_chunk_y53wbr8a.a)("tengu_mcp_listen_reopen", { mcpServerKeyHash: (0, import_chunk_865at33z.z4)(o), outcome: (0, import_chunk_78g0060s.S)("parked"), attempts: k.length, trigger: (0, import_chunk_78g0060s.f)(P), discoverSource: (0, import_chunk_78g0060s.fe)(g) });
        let _e = Date.now() + Math.round(ae * (0.8 + Math.random() * 0.4));
        while (Date.now() < _e) {
          if (await (0, import_chunk_5appeerh.K)(Math.min(Fm, _e - Date.now())), e.transport === void 0) return;
          if (!(0, import_chunk_865at33z.b)("tengu_mcp_listen_reopen_park", true)) break;
        }
        M = 0;
      } else if (L === "graceful") {
        if (M >= Ln.length) (0, import_chunk_k449cc64.He)(o, "subscriptions/listen keeps closing gracefully; giving up on re-listen");
        else if ((0, import_chunk_k449cc64.He)(o, "subscriptions/listen closed gracefully (server shutdown); re-listening after the redeploy grace window"), await (0, import_chunk_5appeerh.K)(Am), e.transport === void 0) return;
      } else (0, import_chunk_k449cc64.He)(o, M >= Ln.length ? "subscriptions/listen stream keeps dropping; giving up on re-listen" : "subscriptions/listen stream dropped (remote); attempting to re-listen");
    }
    let R = await $m(e, o, r, M, P, g);
    if (R === void 0) return;
    k.push(Date.now()), ai(e, o, r, R.filter), y = R.subscription, M = R.delayIndex + 1;
  }
}
function Wl(e) {
  let o = e.getServerCapabilities(), r = { ...o?.tools?.listChanged && { toolsListChanged: true }, ...o?.prompts?.listChanged && { promptsListChanged: true }, ...o?.resources?.listChanged && { resourcesListChanged: true } };
  return Object.keys(r).length === 0 ? void 0 : r;
}
async function $m(e, o, r, h, g, y) {
  let M = Wl(e);
  if (M === void 0) return;
  for (let P = h; P < Ln.length; P++) {
    if (e.transport === void 0) return;
    if (await (0, import_chunk_5appeerh.K)(Ln[P] ?? 0), e.transport === void 0) return;
    try {
      let R = await e.listen(M, { timeout: (0, import_chunk_98tkmkvx.bf)() });
      return (0, import_chunk_k449cc64.He)(o, g === "connect" ? `Opened subscriptions/listen stream from zero (connect-time listen never established; attempt ${P + 1})` : `Re-opened subscriptions/listen stream (attempt ${P + 1})`), (0, import_chunk_y53wbr8a.a)("tengu_mcp_listen_reopen", { mcpServerKeyHash: (0, import_chunk_865at33z.z4)(o), outcome: g === "connect" ? (0, import_chunk_78g0060s.S)("opened_from_zero") : (0, import_chunk_78g0060s.S)("reopened"), attempts: P + 1, trigger: (0, import_chunk_78g0060s.f)(g), discoverSource: (0, import_chunk_78g0060s.fe)(y) }), { subscription: R, delayIndex: P, filter: M };
    } catch (R) {
      (0, import_chunk_k449cc64.He)(o, `subscriptions/listen re-open attempt ${P + 1} failed: ${(0, import_chunk_jbjjrhxt.gl)(R, r)}`);
    }
  }
  if (e.transport === void 0) return;
  let k = Math.max(0, Ln.length - h);
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_listen_reopen", { mcpServerKeyHash: (0, import_chunk_865at33z.z4)(o), outcome: k === 0 ? (0, import_chunk_78g0060s.S)("budget_exhausted") : (0, import_chunk_78g0060s.S)("gave_up"), attempts: k, trigger: (0, import_chunk_78g0060s.f)(g), discoverSource: (0, import_chunk_78g0060s.fe)(y) });
  return;
}
function di(e) {
  let r = (e?.timeout !== void 0 && e.timeout >= 1e3 ? e.timeout : void 0) ?? import_chunk_c203g5kd.s.MCP_TOOL_TIMEOUT ?? vm;
  return Math.min(Math.max(r, 1e3), import_chunk_2567t09g.au);
}
var ci = 3e5, jm = 18e5, zm = /* @__PURE__ */ new Set(["sse-ide", "ws-ide", "sdk"]);
function Vl(e) {
  let o = e?.type ?? "stdio", r = (0, import_chunk_3t7ve0wy.GBl)();
  if (o === "sdk" && r !== void 0) return Math.min(Math.max(r, 1e3), di(e));
  if (zm.has(o)) return 0;
  let h = import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT ?? (o === "stdio" ? jm : ci);
  if (h <= 0) return 0;
  let g = e?.timeout !== void 0 && e.timeout >= 1e3 ? e.timeout : 0;
  return Math.min(Math.max(h, g, 1e3), di(e));
}
var qm = () => require("/$bunfs/root/chunk-w5j6hjqj.js"), Wm = () => require("/$bunfs/root/chunk-wfr5f7f3.js");
var Vm = () => require("/$bunfs/root/chunk-njaa5wpv.js"), il = () => require("/$bunfs/root/chunk-d3fwxng5.js"), Km = () => require("/$bunfs/root/chunk-ga6nahqs.js"), AP = "v2", Ym = 9e5, Jm = 144e5, Xm = 9e4, Qm = 6e4;
async function dl(e, o, r) {
  let g = (await (0, import_chunk_6wgyy4rn.M9o)(r))[e];
  if (!g) return false;
  if (o.type === "claudeai-proxy" && g.id !== o.id) return false;
  if ((o.type === "stdio" || o.type === void 0) && o.pluginSource === void 0) return false;
  if ((o.type === "stdio" || o.type === void 0) && o.pluginSource !== void 0 && g.id !== (0, import_chunk_3bjtjsgp.n4)(o)) return false;
  if ((o.type === "http" || o.type === "sse") && o.pluginSource !== void 0 && g.id !== void 0) return false;
  let y = o.type === "claudeai-proxy" || o.pluginSource !== void 0 && (o.type === "http" || o.type === "sse") && !(0, import_chunk_yz5b8aaa.Oke)(o), M = g.ttlMs ?? (y ? Jm : Ym), k = Date.now() - g.timestamp, P = k > -Qm && k < M, I = P && (0, import_chunk_2mwshd9r.Bct)(o) ? g.lapsedCcrSignInKey : void 0;
  return (0, import_chunk_cwkztn5x.td)().restoreLapsed(I, (0, import_chunk_3bjtjsgp.Uo)(e, o)), P;
}
async function Kl(e, o) {
  let r = await e.write((0, import_chunk_6wgyy4rn.I9o)(), (0, import_chunk_w578pjby._)(o), { publishDiscipline: "inPlace" });
  if (!r.ok) (0, import_chunk_k449cc64.He)("auth-cache", `needs-auth cache v5 write failed: ${(0, import_chunk_7n1spq36.un)(r.error)}`);
  return r.ok;
}
function ki(e, o, r, h, g) {
  let y = (0, import_chunk_qdcbcsg7.mt)();
  y.authCacheWriteChain = y.authCacheWriteChain.then(async () => {
    if ((0, import_chunk_xfj2cwfv.nn)() || (0, import_chunk_w578pjby.c_)() || y.isRunEnding?.() === true) return;
    let M = await (0, import_chunk_6wgyy4rn.M9o)(h);
    if (M[e] = { timestamp: Date.now(), ...o && { id: o }, ...r !== void 0 && { ttlMs: r }, ...g && { lapsedCcrSignInKey: g } }, (0, import_chunk_m15w38ag.ne)() && h !== void 0) {
      if (!await Kl(h, M)) return;
    } else {
      let k = (0, import_chunk_8j3h6yzg.Vn)(), P = (0, import_chunk_6wgyy4rn.hYr)();
      await k.mkdir((0, import_path2.dirname)(P)), await k.write(P, (0, import_chunk_w578pjby._)(M));
    }
    (0, import_chunk_6wgyy4rn.Cri)();
  }).catch(() => {
  });
}
function Ur(e, o) {
  let r = (0, import_chunk_qdcbcsg7.mt)(), h = r.authCacheWriteChain.then(async () => {
    let g = await (0, import_chunk_6wgyy4rn.M9o)(o);
    if (!(e in g)) return;
    if (delete g[e], (0, import_chunk_m15w38ag.ne)() && o !== void 0) {
      if (!await Kl(o, g)) return;
    } else await (0, import_chunk_8j3h6yzg.Vn)().write((0, import_chunk_6wgyy4rn.hYr)(), (0, import_chunk_w578pjby._)(g));
    (0, import_chunk_6wgyy4rn.Cri)();
  }).catch(() => {
  });
  return r.authCacheWriteChain = h, h;
}
function FP(e = /* @__PURE__ */ new Set(), o = true) {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  if (o) (0, import_chunk_yrpmp1hk.eoi)();
  (0, import_chunk_yrpmp1hk.Qri)();
  let r = (h) => {
    if (h) (0, import_chunk_jk26f2gn.c4n)(h, e);
  };
  if (!(0, import_chunk_qdcbcsg7.mt)().holdStaleReauthEntry) (0, import_chunk_cwkztn5x.td)().reauthInFlight.clear();
  (0, import_chunk_cwkztn5x.td)().lapsedCcrSignIns.clear(), (0, import_chunk_cwkztn5x.td)().uncodedCcrRefusals.clear(), r(go.cache), r(nr.cache), r(zr.cache), r(jr.cache), r(rr.cache), Ro.invalidateMcpSkillsExcept(e);
}
function yo(e, o) {
  let r = (0, import_chunk_bzyb60p0.Nie)(e), h = o ? { mcpServerKeyHash: (0, import_chunk_865at33z.z4)(o) } : {};
  if (r) return { mcpServerBaseUrl: r, ...h };
  return h;
}
function Ks(e, o, r) {
  if ((0, import_chunk_f9x2f6cx.st)() && o.type === "http" && (0, import_chunk_2mwshd9r.lRt)(o.url)) return;
  let h = (0, import_chunk_865at33z.vh)(), g = o.pluginSource ? (0, import_chunk_xcgcdx61.uf)(o.pluginSource) : void 0, y = g && ((0, import_chunk_54j6k3fn.Y9e)((0, import_chunk_54j6k3fn.OAe)(g.name, g.marketplace, null)) || h);
  (0, import_chunk_xfr8663h.ql)("mcp_server_connection", { status: r.status, transport_type: o.type ?? "stdio", server_scope: o.scope, duration_ms: String(Math.round(r.durationMs)), is_plugin: g !== void 0, ...g && { plugin_id_hash: (0, import_chunk_54j6k3fn.nM)(g.name, g.marketplace), "plugin.name": y ? g.name : import_chunk_865at33z.bM }, ...r.errorCode && { error_code: String(iu(r.errorCode)) }, ...h && { server_name: e, ...r.error && { error: r.error } } });
}
async function li(e, o, r, h, g, y, M, k, P) {
  dn();
  let R = h instanceof import_chunk_adx6804h.Bz, I = R ? h.issues[0] : void 0, L = I ? `Server OAuth metadata invalid: ${I.path.join(".") || "(root)"} \u2014 ${I.message}` : (0, import_chunk_3fqcfedz.KYr)(o);
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_server_needs_auth", { transportType: (0, import_chunk_78g0060s.f)(r), ...k ?? {}, ...R && { cause: (0, import_chunk_78g0060s.S)("discovery_schema") }, ...yo(o, e) }), (0, import_chunk_k449cc64.He)(e, `Authentication required for ${{ sse: "SSE", http: "HTTP", "claudeai-proxy": "claude.ai proxy" }[r]} server`);
  let H = g && (o.type === "http" || o.type === "sse") && await (0, import_chunk_yz5b8aaa.vXe)(e, o), F = (0, import_chunk_865at33z.b)("tengu_lazy_ladybug", true) && y && (o.type === "http" || o.type === "sse") && !((0, import_chunk_yz5b8aaa.gee)() && o.oauth?.xaa) && !await (0, import_chunk_yz5b8aaa.vXe)(e, o);
  if ((M === void 0 || (0, import_chunk_yrpmp1hk.HY)(M)) && !F && !(0, import_chunk_qdcbcsg7.mt)().refusedRefreshServers.has(e) && !(0, import_chunk_cwkztn5x.td)().uncodedCcrRefusals.has((0, import_chunk_3bjtjsgp.Uo)(e, o))) ki(e, o.type === "claudeai-proxy" ? o.id : void 0, H ? Xm : void 0, P, (0, import_chunk_cwkztn5x.td)().lapsedSignInKey((0, import_chunk_3bjtjsgp.Uo)(e, o)));
  await Gl(e, o, M), (0, import_chunk_cqa9hrgx.l)("mcp_connect", "mcp_connect_needs_auth");
  let _e = h instanceof import_chunk_racn22qq.PO && typeof h.data.text === "string" ? su(h.data.text)?.message : void 0;
  return { name: e, type: "needs-auth", config: o, error: L, serverMessage: _e && (0, import_chunk_271xsh6x.xR)((0, import_chunk_538r8e0n.Nm)(e, o, _e)) };
}
async function Gl(e, o, r) {
  let h = r === void 0 || (0, import_chunk_yrpmp1hk.HY)(r);
  if ((0, import_chunk_sjqze7qg.A5)()) if (h) await (0, import_chunk_yrpmp1hk.Zqe)((0, import_chunk_yrpmp1hk.noi)(e, o));
  else (0, import_chunk_k449cc64.He)(e, "Discovery cache 401/403 purge skipped: identity changed since this connect round started (the current entry belongs to the new principal)");
}
var Zm = { AUTH_HEADER_REJECTED: { severity: "bad", featureErrorCode: "mcp_connect_auth_header_rejected" }, HEADERS_HELPER_AUTH_REJECTED: { severity: "bad", featureErrorCode: "mcp_connect_headers_helper_auth_rejected" }, CLI_OWNED_BEARER_REJECTED: { severity: "bad", featureErrorCode: "mcp_connect_cli_owned_bearer_rejected" }, FIRST_PARTY_AUTH_REJECTED: { severity: "sad", featureErrorCode: "mcp_connect_first_party_auth_rejected" }, POLICY_BLOCKED: { severity: "sad", featureErrorCode: "mcp_connect_proxy_policy_denied" } };
function Lr({ name: e, serverRef: o, transportType: r, errorCode: h, message: g, negotiation: y, displayDetail: M }) {
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_server_connection_failed", { transportType: (0, import_chunk_78g0060s.f)(r), errorCode: (0, import_chunk_78g0060s.f)(h), sdkGeneration: (0, import_chunk_78g0060s.f)((0, import_chunk_sppbt6xz.OG)()), v1Compat: (0, import_chunk_sppbt6xz.s1)(), negotiationMode: y.negotiationMode, probeFellBack: y.probeFellBack, listenSuppressed: y.listenSuppressed, negotiationDenylisted: y.negotiationDenylisted, discoverSource: y.discoverSource, listingPriorBurned: y.listingPriorBurned, toolsListAhead: y.toolsListAhead, ...yo(o, e), ...(0, import_chunk_54j6k3fn.rin)(o) });
  let { severity: k, featureErrorCode: P } = Zm[h];
  if (k === "bad") (0, import_chunk_cqa9hrgx.m)("mcp_connect", P);
  else (0, import_chunk_cqa9hrgx.l)("mcp_connect", P);
  return (0, import_chunk_k449cc64.id)(e, g), { name: e, type: "failed", config: o, error: g, ...M !== void 0 && { displayDetail: M }, errorCode: h };
}
function th(e, o, r, h, g, y) {
  let M = "api.anthropic.com";
  try {
    if ("url" in r) M = new URL(r.url).host;
  } catch {
  }
  let k = `HTTP ${g ?? 401}`, P = Zl(r), R;
  switch (e) {
    case "design_credential":
      R = g === 403 ? `${M} rejected your /design-login credential (HTTP 403). Check that your account has access to Claude Design, or run /design-login to re-authorize it and retry.` : `${M} rejected your /design-login credential (${k}). Run /design-login to re-authorize it and retry.`;
      break;
    case "none":
      R = `${M} needs a claude.ai sign-in and Claude Code had no usable credential to send (${k}). Run ${P ? "/design-login" : "/login"} and retry.`;
      break;
    case "design_scoped_login":
    case "login": {
      if (g === 403 && P) R = e === "design_scoped_login" ? `${M} rejected your claude.ai login for Claude Design (HTTP 403) even though that login already includes Claude Design permissions, so this is most likely an account or project access problem. Check that your account has access to Claude Design; if it does, run /design-login and retry.` : `${M} rejected your claude.ai login for Claude Design (HTTP 403), most likely because a /login token carries no Claude Design access. Run /design-login and retry, or check that your account has access to Claude Design.`;
      else {
        let L = (0, import_chunk_bzyb60p0.Rza)(r, k);
        R = g === 403 ? `${M} rejected your claude.ai login (HTTP 403). Check that your account has access to this server. If it does, your token may be missing a scope \u2014 run ${"/login"} and retry.` : L ?? `${M} rejected your claude.ai login (${k}). Run /login and retry.`;
      }
      break;
    }
    default:
      return e;
  }
  return Lr({ name: o, serverRef: r, transportType: h, errorCode: "FIRST_PARTY_AUTH_REJECTED", message: R, negotiation: y });
}
function Yl(e, o, r) {
  return e instanceof import_chunk_racn22qq.YL || e instanceof import_chunk_adx6804h.Bz && r || o === 401 || o === 403;
}
async function cl({ name: e, serverRef: o, transportType: r, error: h, statusCode: g, sawAuthChallenge: y, lacksHelperHeaders: M, hasUserAuthHeader: k, helperMintsAuthHeader: P, cliOwnedBearer: R, useFirstPartyAuth: I, firstPartyBearer: L, authProvider: z, negotiation: H, roundEpoch: F, storageV5: ae }) {
  if (await (0, import_chunk_vp3hv9ky.V$a)(e, o, z), !Yl(h, g, y)) return;
  if (k) {
    let Ae = (0, import_chunk_271xsh6x.xR)((0, import_chunk_538r8e0n.Nm)(e, o, h instanceof import_chunk_racn22qq.PO && typeof h.data?.text === "string" ? h.data.text : h.message));
    return Lr({ name: e, serverRef: o, transportType: r, negotiation: H, errorCode: "AUTH_HEADER_REJECTED", message: `Server rejected the configured Authorization header (HTTP ${g ?? 401}). Check that the token is valid for this MCP endpoint \u2014 OAuth fallback is disabled when headers.Authorization is set.`, ...Ae !== "" && { displayDetail: `Error detail: ${Ae}` } });
  }
  if (P) {
    let Ae = (0, import_chunk_271xsh6x.xR)((0, import_chunk_538r8e0n.Nm)(e, o, h.message));
    return Lr({ name: e, serverRef: o, transportType: r, negotiation: H, errorCode: "HEADERS_HELPER_AUTH_REJECTED", message: `Server rejected the Authorization header minted by the configured headersHelper (HTTP ${g ?? 401}). Check that the helper command returns a valid credential for this MCP endpoint \u2014 OAuth fallback is disabled when the helper supplies Authorization.`, ...Ae !== "" && { displayDetail: `Error detail: ${Ae}` } });
  }
  if (R) return Lr({ name: e, serverRef: o, transportType: r, negotiation: H, errorCode: "CLI_OWNED_BEARER_REJECTED", message: `Server rejected the session credential (HTTP ${g ?? 401}). It will be retried when the session credential is refreshed.` });
  if (I) return th(L ?? "none", e, o, r, g, H);
  let { refusedRefreshServers: _e } = (0, import_chunk_qdcbcsg7.mt)();
  if (z?.lastRefreshWasRewritten) _e.add(e);
  else _e.delete(e);
  let be = h instanceof import_chunk_racn22qq.YL || g === 401, Q = await (0, import_chunk_vp3hv9ky.K$a)({ name: e, serverRef: o, authProvider: z, isRefreshPath401: be, needsAuth: () => li(e, o, r, h, be, false, F, H, ae) });
  if (Q !== void 0) return await Gl(e, o, F), Q;
  return li(e, o, r, h, be, M, F, H, ae);
}
function Jl(e, o, r, h, g = () => false) {
  return e = br(e), async (y, M) => {
    let k = new Headers(M?.headers);
    if (k.delete(Xl), !k.has("Authorization")) {
      let _e = (0, import_chunk_5rd4zsth.Nc)();
      if (_e) {
        if ((0, import_chunk_rwc528c4.KD)().record(_e), k.set("Authorization", `Bearer ${_e}`), (0, import_chunk_2mwshd9r.a7i)(String(y))) (0, import_chunk_cwkztn5x.td)().putCcrMemoryCallHeaders(k);
      }
    }
    (0, import_chunk_5rd4zsth.LIo)(k);
    let P = (0, import_chunk_xfj2cwfv.tct)();
    if (k.delete(import_chunk_xfj2cwfv.a5i), P) k.set(import_chunk_xfj2cwfv.a5i, P);
    let R = (0, import_chunk_xfj2cwfv.GMl)();
    if (k.delete(import_chunk_xfj2cwfv.l5i), R !== void 0) k.set(import_chunk_xfj2cwfv.l5i, String(R));
    let I = (0, import_chunk_2mwshd9r.Cze)(String(y), false);
    if ((0, import_chunk_cwkztn5x.td)().putCcrSessionTicket(I, k), ec(I, M, k), k.delete(ul), o?.toolUseId !== void 0) {
      let _e = ll(M);
      if (_e === "handshake" || _e === "listing" && o.withListings) k.set(ul, o.toolUseId);
    }
    nc(k, I, M), k.delete(import_chunk_m0xr8k74.MHi);
    let L = k.has(import_chunk_8sy6wsb2.S7r);
    k.delete(import_chunk_8sy6wsb2.S7r);
    let z = k.get("mcp-method");
    if (z === "tools/call" || z === "tools/list") {
      let _e = h?.();
      if (_e !== void 0 && !I) k.set(import_chunk_m0xr8k74.MHi, (0, import_chunk_m0xr8k74.Zfl)(_e, z === "tools/list" ? g() : L));
    }
    let H = M?.redirect === "error" ? "error" : "manual", F = await e(y, { ...M, headers: k, redirect: H }), ae = (0, import_chunk_cwkztn5x.td)();
    if (ae.noteToolPortMarks(y, F), r !== void 0 && ae.mayNoteCcrDialAnswer(r, F) && ll(M) !== void 0) ae.noteCcrDialAnswer(r, F);
    return F;
  };
}
function ll(e) {
  if (e?.method?.toUpperCase() !== "POST" || typeof e.body !== "string") return;
  let o = (0, import_chunk_adx6804h.c)({ method: (0, import_chunk_adx6804h.n)() }).safeParse((0, import_chunk_0jve1fep.et)(e.body, false)).data?.method;
  if (o === "initialize" || o === "notifications/initialized") return "handshake";
  return o === "tools/list" ? "listing" : void 0;
}
var ul = "X-CCR-Dial-Tool-Use-Id", Xl = "ant-internal-authorization";
function oh(e) {
  return (o, r) => {
    let h = new Headers(r?.headers);
    return h.delete(Xl), e(o, { ...r, headers: h });
  };
}
var nh = /^toolu_[A-Za-z0-9_-]{1,64}$/;
function rh(e, o) {
  let r = async (...[h, g]) => {
    let y = { method: (g?.method ?? "GET").toUpperCase(), body: g?.body };
    await (0, import_chunk_qdcbcsg7.gLl)(o, y);
    let M = new Headers(g?.headers), k = null, P = false;
    if (!M.has("Authorization")) {
      let L = await (0, import_chunk_qdcbcsg7.hLl)(o);
      if (L) (0, import_chunk_rwc528c4.KD)().record(L), M.set("Authorization", `Bearer ${L}`), k = (0, import_chunk_myvyhcm0.Zn)(L);
      else {
        P = true;
        let z = (0, import_chunk_qdcbcsg7.pLl)(o);
        if (z !== void 0) throw new import_chunk_jv7av99m.A(z, "CLI-owned MCP request not sent: its bearer was withheld");
      }
    }
    let R = {};
    for (let [L, z] of Object.entries((0, import_chunk_qdcbcsg7._Ll)(o, y))) if (!M.has(L) && L.toLowerCase() !== "authorization" && !(P && (0, import_chunk_qdcbcsg7.c7i)(o, L))) M.set(L, z), R[L] = z;
    let I = await e(h, { ...g, headers: M, redirect: "error" });
    return (0, import_chunk_qdcbcsg7.yLl)(o, { method: y.method, status: I.status, headers: I.headers, requestHeaders: { get: (L) => L.toLowerCase() === "authorization" || (0, import_chunk_qdcbcsg7.c7i)(o, L) ? null : M.get(L) }, bearerFingerprint: k }), { response: I, owned: R };
  };
  return async (h, g) => {
    let { response: y, owned: M } = await r(h, g);
    if (!await (0, import_chunk_qdcbcsg7.u7i)(o, y, M)) return y;
    await y.body?.cancel().catch(() => {
    });
    let k = await r(h, g);
    return (0, import_chunk_qdcbcsg7.u7i)(o, k.response, k.owned), k.response;
  };
}
class ui extends Error {
  code = "CLAUDEAI_BEARER_REJECTED";
  reasonCode = "claudeai_bearer_rejected";
  constructor() {
    super("claude.ai rejected the session token \u2014 it may lack connector scopes or be invalid. Run /login.");
    this.name = "ClaudeAiProxyBearerRejectedError";
  }
}
function sh(e, o) {
  return e = br(e), async (r, h) => {
    let g = async () => {
      await (0, import_chunk_865at33z.od)({ credentials: o });
      let L = (0, import_chunk_m15w38ag.ne)() && o !== void 0 ? await (0, import_chunk_865at33z.pp)(o) : (0, import_chunk_865at33z.tr)();
      if (!L) throw Error("No claude.ai OAuth token available");
      let z = new Headers(h?.headers);
      (0, import_chunk_rwc528c4.KD)().record(L.accessToken), z.set("Authorization", `Bearer ${L.accessToken}`), z.set(import_chunk_865at33z.fNe, (0, import_chunk_f9x2f6cx.W)()), (0, import_chunk_702cfzzh.Vke)("mcp_client", z, () => String(r));
      let H = h?.redirect === "error" ? "error" : "manual";
      return { response: await e(r, { ...h, headers: z, redirect: H }), sentToken: L.accessToken };
    };
    async function y(L) {
      if (L.status >= 400 && L.headers.get("content-type")?.includes("text/event-stream")) {
        let z = await L.text(), H = z.split(`
`).find((F) => F.startsWith("data: "));
        return new Response(H ? H.slice(6) : z, { status: L.status, statusText: L.statusText, headers: L.headers });
      }
      return L;
    }
    let { response: M, sentToken: k } = await g();
    if (M.status !== 401) return y(M);
    let P = M.headers.get("X-Mcp-Error-Code") ?? void 0;
    if (P) return (0, import_chunk_y53wbr8a.a)("tengu_mcp_claudeai_proxy_401", { tokenChanged: false, proxyErrorCode: (0, import_chunk_jv7av99m.VK)(P) }), M;
    let R = await (0, import_chunk_865at33z.UR)(k, o, void 0, { refusedCall: "connector" }).catch(() => false);
    if ((0, import_chunk_y53wbr8a.a)("tengu_mcp_claudeai_proxy_401", { tokenChanged: R }), !R) {
      let L = (0, import_chunk_m15w38ag.ne)() && o !== void 0 ? await (0, import_chunk_865at33z.ECt)(o) : (0, import_chunk_865at33z.tr)()?.accessToken;
      if (!L || L === k) throw new ui();
    }
    let I = (await g()).response;
    if (I.status === 401 && !I.headers.get("X-Mcp-Error-Code")) throw new ui();
    return y(I);
  };
}
async function ih(e, o) {
  if ((0, import_chunk_yz5b8aaa.koe)(e)) {
    let h = await (0, import_chunk_tgj1b0ts.EUa)()?.(o);
    if (h?.ok) {
      if (h.expanded) (0, import_chunk_tgj1b0ts.CUa)("Added user:design:read and user:design:write to your claude.ai login (for the Design MCP connector)."), (0, import_chunk_y53wbr8a.a)("tengu_mcp_first_party_scope_expanded", { pathPrefix: (0, import_chunk_78g0060s.S)("/v1/design/") });
      return { accessToken: h.accessToken, bearer: h.bearer };
    }
  }
  await (0, import_chunk_865at33z.od)({ credentials: o });
  let r = (0, import_chunk_m15w38ag.ne)() && o !== void 0 ? await (0, import_chunk_865at33z.pp)(o) : (0, import_chunk_865at33z.tr)();
  if (!r?.accessToken) return;
  return { accessToken: r.accessToken, bearer: r.scopes?.includes("user:design:read") ? "design_scoped_login" : "login" };
}
async function ah(e) {
  let o = (0, import_chunk_tgj1b0ts.s8o)();
  if (o === null) return null;
  let r;
  try {
    r = await e.clone().json();
  } catch {
    return null;
  }
  if (r == null || typeof r !== "object" || r.error !== "needs_consent") return null;
  let h = r.consent;
  return o.isConsentBit(h) ? h : null;
}
function dh(e, o, r, h) {
  if (!o || !import_chunk_k46cdxhb.qor.has(r)) return;
  let g = h.project_id;
  if (typeof g === "string" && g.length > 0) (0, import_chunk_k46cdxhb.TRn)(e, g), (0, import_chunk_k46cdxhb.QYr)(e, g), (0, import_chunk_k46cdxhb.Yor)(e, g), (0, import_chunk_k46cdxhb.e7r)(e, g);
}
var Ql = /* @__PURE__ */ new Set(["write_files", "create_support_js", "copy_files"]);
function ch(e, o, r) {
  if (!e || !Ql.has(o)) return null;
  let h = r?.plan_token;
  if (typeof h === "string" && h.length > 0) return null;
  return { behavior: "deny", message: `${o}: writing without a plan_token is available only through the native Claude Design tool \u2014 call finalize_plan with writes (and deletes if needed), then pass the returned plan_token.`, decisionReason: { type: "safetyCheck", reason: "tokenless design writes are native-tool-only \u2014 this connector surface has no reserved-path or grant-approval flow", classifierApprovable: false } };
}
var lh = /* @__PURE__ */ new Set([...Ql, "finalize_plan", "delete_files", "put_conversation", ...import_chunk_k46cdxhb.qor]);
function Ys(e, o) {
  return e && lh.has(o);
}
function uh(e, o, r) {
  return { behavior: "ask", message: e, updatedInput: { ...o, __consentNonce: r }, localDisplayOnly: true, decisionReason: { type: "safetyCheck", reason: "design agent consent \u2014 approving records a server-side grant for Claude agents to write your design projects", classifierApprovable: false } };
}
function Zl(e) {
  return (e.type === "sse" || e.type === "http") && (0, import_chunk_yz5b8aaa.koe)(e.url) && !(0, import_chunk_yz5b8aaa._ee)(e);
}
function eu(e) {
  let o = (0, import_chunk_bz1f2qnq.Z)(e);
  return !e.options.isNonInteractiveSession && o.mode !== "bypassPermissions" && !(o.mode === "plan" && o.isBypassPermissionsModeAvailable);
}
function pl(e) {
  let o = (0, import_chunk_bz1f2qnq.Z)(e);
  return o.mode !== "bypassPermissions" && o.mode !== "dontAsk" && !(o.mode === "plan" && o.isBypassPermissionsModeAvailable) && !o.shouldAvoidPermissionPrompts && (0, import_chunk_drk264d0.Z_)(e) === void 0;
}
var ph = 100;
function fh(e, o, r) {
  let h = (0, import_chunk_qdcbcsg7.mt)().firstPartyDesignConsentAsks, g = h.get(e), y = g !== void 0 && g.bit === o, M = y ? g.nonce : (0, import_crypto.randomUUID)();
  h.delete(e), h.set(e, { bit: o, nonce: M, askReachesUser: y ? g.askReachesUser && r : r });
  while (h.size > ph) {
    let k = h.keys().next().value;
    if (k === void 0) break;
    h.delete(k);
  }
  return M;
}
function mh(e, o) {
  if (e === void 0) return null;
  let r = (0, import_chunk_qdcbcsg7.mt)().firstPartyDesignConsentAsks, h = r.get(e) ?? null;
  if (r.delete(e), h === null || o === void 0 || h.nonce !== o) return null;
  return { bit: h.bit, askReachesUser: h.askReachesUser };
}
function hh(e, o) {
  let { designSession: r, approvedConsentBit: h, consentAskReachesUser: g, credentials: y } = o;
  return async (M) => {
    let k = (0, import_chunk_tgj1b0ts.s8o)();
    try {
      let P = await e(M);
      if (h !== null && !M.aborted) k?.seedDesignConsentBit(r, h, true);
      return P;
    } catch (P) {
      if (!(P instanceof import_chunk_tgj1b0ts.t7r) || !k) throw P;
      let R = P.consent;
      if (R !== h) throw k.seedDesignConsentBit(r, R, false), new import_chunk_jv7av99m.A(`${k.consentPromptFor(R)} The user hasn't granted this yet \u2014 ask them to retry (the prompt will show on the next call) or run /design consent.`, "first-party design MCP needs_consent (not shown)");
      if (!g) throw k.seedDesignConsentBit(r, R, false), new import_chunk_jv7av99m.A(`${k.consentPromptFor(R)} The user hasn't granted this \u2014 run /design consent to grant it (it can't be approved automatically in this permission mode).`, "first-party design MCP needs_consent (no prompt)");
      return await k.postDesignConsent(r, R, y), e(M);
    }
  };
}
function Js(e, o, r) {
  return e = br(e), async (h, g) => {
    let y = new Headers(g?.headers), M = g?.redirect === "error" ? "error" : "manual";
    if (y.has("Authorization") || !(0, import_chunk_yz5b8aaa.Mhe)(h) || !(0, import_chunk_zhr7rpv7.jn)()) return await e(h, { ...g, redirect: M });
    let k = async () => {
      let F = await ih(h, o);
      if (r.last = F?.bearer ?? "none", !F) return { response: await e(h, { ...g, redirect: M }), sentToken: void 0 };
      let ae = F.accessToken;
      (0, import_chunk_rwc528c4.KD)().record(ae);
      let _e = { ...Object.fromEntries(new Headers(g?.headers)), Authorization: `Bearer ${ae}` };
      return (0, import_chunk_702cfzzh.Vke)("mcp_client", _e, () => String(h)), { response: await e(h, { ...g, headers: _e, redirect: M }), sentToken: ae };
    }, P = async (F) => {
      if (F.response.status === 403 && F.sentToken && (0, import_chunk_yz5b8aaa.koe)(h)) {
        let ae = await ah(F.response);
        if (ae !== null) throw new import_chunk_tgj1b0ts.t7r(ae);
      }
    }, R = await k();
    await P(R);
    let { response: I, sentToken: L } = R;
    if (I.status !== 401 || !L) return I;
    if (!await (0, import_chunk_865at33z.UR)(L, o, void 0, { refusedCall: "other" }).catch(() => false)) {
      let F = (0, import_chunk_m15w38ag.ne)() && o !== void 0 ? await (0, import_chunk_865at33z.ECt)(o) : (0, import_chunk_865at33z.tr)()?.accessToken;
      if (!F || F === L) return I;
    }
    let H;
    try {
      H = await k();
    } catch {
      return I;
    }
    return await P(H), H.response;
  };
}
function gh(e, o, r) {
  let h = new Headers({ "User-Agent": (0, import_chunk_865at33z.ACt)(), "Accept-Encoding": "identity", ...o });
  new Headers(e).forEach((g, y) => h.set(y, g));
  for (let [g, y] of Object.entries(r)) h.set(g, y);
  return h.set("Accept", "text/event-stream"), h;
}
var _h = /* @__PURE__ */ new Set(["image/jpeg", "image/png", "image/gif", "image/webp"]);
function fl(e) {
  if (!e) return false;
  let o = (0, import_chunk_7cfjrnwy.nt)(e, ";").trim().toLowerCase();
  return _h.has(o === "image/jpg" ? "image/jpeg" : o);
}
var Ch = /* @__PURE__ */ new Set([500, 502, 504]), yh = "Service Unavailable: server draining", ml = 6e4;
function tu(e) {
  let r = (e?.timeout !== void 0 && e.timeout >= 1e3 ? e.timeout : void 0) ?? import_chunk_c203g5kd.s.MCP_TOOL_TIMEOUT;
  return r !== void 0 ? Math.min(Math.max(r, ml), import_chunk_2567t09g.au) : ml;
}
function Pi(e) {
  return Math.max(tu(e), (0, import_chunk_98tkmkvx.bf)());
}
var Sh = "application/json, text/event-stream";
function Xs(e) {
  return async (o, r) => {
    try {
      return await e(o, r);
    } catch (h) {
      (0, import_chunk_jbjjrhxt.ent)(h, o);
    }
  };
}
function Qn(e, o, r) {
  let h = Pi(o), g = Vl(o), y = g > 0 ? Math.min(g, ci) : ci;
  return async (M, k) => {
    if ((k?.method ?? "GET").toUpperCase() === "GET") return await e(M, k);
    let R = new Headers(k?.headers);
    if (!R.has("accept")) R.set("accept", Sh);
    if ((0, import_chunk_zhr7rpv7.hLr)()) {
      let be = (0, import_chunk_z2xw6net.TBt)(String(M));
      if (be && !R.has("traceparent")) R.set("traceparent", be);
    }
    let I = new AbortController(), L = (0, import_chunk_wpyz5pav.eRi)(h, k?.body, y), z = Qa(k?.body), H = false, F = (be) => {
      let Q = z ? Za(r?.(), L) : 0;
      if (Q > 0) {
        H = true, ae = setTimeout(F, Q, be), ae.unref?.();
        return;
      }
      if (be.abort(new DOMException("The operation timed out.", "TimeoutError")), H) (0, import_chunk_cqa9hrgx.l)("mcp_first_byte_wait", "timeout");
    }, ae = setTimeout(F, L, I);
    ae.unref?.();
    let _e = k?.signal ? AbortSignal.any([k.signal, I.signal]) : I.signal;
    try {
      let be = await e(M, { ...k, headers: R, signal: _e, ...tu(o) > 3e5 && { timeout: false }, ...z && { timeout: false } });
      if (H && be.ok) (0, import_chunk_cqa9hrgx.u)("mcp_first_byte_wait");
      return be;
    } finally {
      clearTimeout(ae);
    }
  };
}
function wh() {
  return import_chunk_c203g5kd.s.MCP_SERVER_CONNECTION_BATCH_SIZE ?? 3;
}
function hl() {
  return import_chunk_c203g5kd.s.MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE ?? 20;
}
function _l(e) {
  return !e.type || e.type === "stdio" || e.type === "sdk";
}
var Th = ["mcp__ide__executeCode", "mcp__ide__getDiagnostics"];
function ou(e) {
  return !e.startsWith("mcp__ide__") || Th.includes(e);
}
function Eh(e) {
  return ou(e.name);
}
function ir(e, o, r = []) {
  let h = (0, import_chunk_865at33z.b)(e, (0, import_chunk_pqpxa7em.KG)() ? r : []);
  if (!Array.isArray(h) || h.length === 0) return false;
  if (h.includes("*")) return true;
  if (!("url" in o) || typeof o.url !== "string") return false;
  let g = [URL.canParse(o.url) ? new URL(o.url).hostname.toLowerCase() : void 0, (0, import_chunk_2mwshd9r.nMr)(o.url)].flatMap((y) => y === void 0 ? [] : [y]);
  return h.some((y) => {
    if (typeof y !== "string" || y === "") return false;
    let M = y.toLowerCase();
    return g.some((k) => k === M || k.endsWith(`.${M}`));
  });
}
function Ri(e) {
  return ir("tengu_mcp_legacy_url_elicitation_server_denylist", e);
}
function bh(e) {
  return ir("tengu_mcp_normalize_root_combinators", e, ["*"]);
}
function Mh(e) {
  return ir("tengu_mcp_drop_invalid_tool_schemas", e, ["*"]);
}
function UP(e) {
  if (e) throw Error("setHoldStaleReauthEntryForTest is test-only");
  (0, import_chunk_qdcbcsg7.mt)().holdStaleReauthEntry = e;
}
function xP(e) {
  if (e !== void 0) throw Error("setMcpReauthDecisionSinkForTest is test-only");
  (0, import_chunk_qdcbcsg7.mt)().reauthDecisionSink = e;
}
function kh(e = false) {
  let o = [];
  if (e) try {
    o = [(0, import_chunk_8nvd6fqx.LVt)()];
  } catch (M) {
    (0, import_chunk_w578pjby.t)(`MCP: staging root unavailable, omitted from roots/list: ${(0, import_chunk_jv7av99m.d)(M)}`);
  }
  let r = /* @__PURE__ */ new Set(), h = [], g = (0, import_chunk_f9x2f6cx.VS)(), y = g ? g.directory?.path ?? null : (0, import_chunk_f9x2f6cx.ns)();
  for (let M of [...y === null ? [] : [y], ...(0, import_chunk_0a69wnzr.mkt)(), ...o]) {
    let k = (0, import_url.pathToFileURL)(M).href;
    if (r.has(k)) continue;
    r.add(k), h.push({ uri: k });
  }
  return { roots: h };
}
var Ph = /* @__PURE__ */ new Set(["documents"]);
function Rh(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return false;
  if (!e.pluginSource) return false;
  try {
    return Ph.has((0, import_chunk_xcgcdx61.Kn)(e.pluginSource).name.toLowerCase());
  } catch {
    return false;
  }
}
function pi(e, o) {
  return (0, import_chunk_7625rswd.hU)(o) || (0, import_chunk_bzyb60p0.tMn)(o, e) ? { roots: [] } : kh(Rh(o));
}
function BP() {
  for (let e of (0, import_chunk_cwkztn5x.td)().liveClients) e.sendRootsListChanged().catch((o) => {
    (0, import_chunk_w578pjby.t)(`MCP: failed to send roots/list_changed: ${(0, import_chunk_jbjjrhxt.Qte)(o)}`);
  });
}
var Ah = new Set(Object.values(import_chunk_racn22qq.Ua)), Oh = /* @__PURE__ */ new Set(["http://json-schema.org/draft-04/schema", "https://json-schema.org/draft-04/schema", "http://json-schema.org/draft-06/schema", "https://json-schema.org/draft-06/schema", "http://json-schema.org/draft-07/schema", "https://json-schema.org/draft-07/schema", "http://json-schema.org/draft/2019-09/schema", "https://json-schema.org/draft/2019-09/schema", "http://json-schema.org/schema", "https://json-schema.org/schema"]);
class Ai {
  inner = new import_chunk_racn22qq.$or();
  getValidator(e) {
    let o = e.$schema;
    if (o !== void 0 && Oh.has(o.replace(/#$/, ""))) {
      let { $schema: r, ...h } = e;
      return this.inner.getValidator(h);
    }
    return this.inner.getValidator(e);
  }
}
var Ih = [["ECONNRESET", "Connection reset - server may have crashed or restarted"], ["ETIMEDOUT", "Connection timeout - network issue or server unresponsive"], ["ECONNREFUSED", "Connection refused - server may be down"], ["EPIPE", "Broken pipe - server closed connection unexpectedly"], ["EHOSTUNREACH", "Host unreachable - network connectivity issue"], ["ESRCH", "Process not found - stdio server process terminated"], ["spawn", "Failed to spawn process - check command and permissions"]], Lh = 3e3;
function HP(e) {
  if (e !== void 0) throw Error("setStdioProbeTimeoutMsForTest is test-only");
  (0, import_chunk_qdcbcsg7.mt)().stdioProbeTimeoutMsOverride = e;
}
function fi() {
  return (0, import_chunk_qdcbcsg7.mt)().stdioProbeTimeoutMsOverride ?? Lh;
}
var nu = 5e3, Dh = 5e3, Nh = /* @__PURE__ */ new Set(["http", "claudeai-proxy", "ccr-proxy", "stdio"]);
function Ar(e = Dh) {
  let o = (0, import_chunk_98tkmkvx.bf)();
  return Math.max(o - e, Math.floor(o / 3));
}
function Fh(e, { inProcess: o, ccrProxy: r, ccrToolport: h }) {
  if (o) return "in-process";
  switch (e) {
    case "http":
      return h ? "ccr-toolport" : r ? "ccr-proxy" : "http";
    case "sse":
      return "sse";
    case "ws":
      return "ws";
    case "sse-ide":
    case "ws-ide":
      return "ide";
    case "claudeai-proxy":
      return "claudeai-proxy";
    case "sdk":
      return "sdk-control";
    case "stdio":
    case void 0:
      return "stdio";
  }
}
function Cl(e, o, r) {
  let h = e.send.bind(e);
  e.send = (g, y) => {
    if ((0, import_chunk_racn22qq.Z_e)(g) && g.method === "initialize" && g.params?.capabilities !== void 0) {
      let M = (0, import_chunk_7625rswd.vhs)(o, { denylisted: Ri(o) });
      return h({ ...g, params: { ...g.params, capabilities: r ? (0, import_chunk_7625rswd.Nkt)(M) : M } }, y);
    }
    return h(g, y);
  };
}
function ru(e) {
  return ir("tengu_mcp_negotiation_server_denylist", e);
}
function Uh(e) {
  return ir("tengu_mcp_listen_server_denylist", e);
}
function Br(e, o, r) {
  let h = import_chunk_c203g5kd.s.MCP_PROTOCOL_NEGOTIATION, g = h === "legacy" || h === "auto" ? h : void 0;
  if (h !== void 0 && g === void 0) (0, import_chunk_w578pjby.t)(`MCP_PROTOCOL_NEGOTIATION=${h} is invalid; expected 'legacy' or 'auto' \u2014 ignoring`, { level: "warn" });
  if (g === "legacy" || (0, import_chunk_sppbt6xz.s1)()) return { mode: "legacy" };
  let y = { timeoutMs: Math.min(nu, Math.floor((0, import_chunk_98tkmkvx.bf)() / 3)) }, M = { timeoutMs: Math.min(fi(), Math.floor((0, import_chunk_98tkmkvx.bf)() / 3)) };
  if (g === "auto") {
    if (!Nh.has(e)) return { mode: "legacy" };
    return e === "stdio" ? { mode: "auto", probe: M } : { mode: "auto", probe: y };
  }
  let k = (() => {
    switch (e) {
      case "http":
        return (0, import_chunk_865at33z.b)("tengu_mcp_protocol_negotiation_http", true) === false ? { mode: "legacy" } : { mode: "auto", probe: y };
      case "claudeai-proxy":
        return (0, import_chunk_865at33z.b)("tengu_mcp_protocol_negotiation_claudeai", true) === false ? { mode: "legacy" } : { mode: "auto", probe: y };
      case "stdio":
        return (0, import_chunk_865at33z.b)("tengu_mcp_protocol_negotiation_stdio", true) === false ? { mode: "legacy" } : { mode: "auto", probe: M };
      case "ccr-proxy":
        return (0, import_chunk_865at33z.b)("tengu_mcp_protocol_negotiation_ccr", true) === false ? { mode: "legacy" } : { mode: "auto", probe: y };
      case "sse":
      case "ws":
      case "ide":
      case "ccr-toolport":
      case "in-process":
      case "sdk-control":
        return { mode: "legacy" };
    }
  })();
  if (k.mode === "auto" && o !== void 0 && (r ?? ru(o))) {
    let P = "a url-less server (the '*' entry)";
    if ("url" in o && typeof o.url === "string") {
      try {
        P = new URL(o.url).hostname;
      } catch {
        P = "a server with an unparseable url";
      }
      let R = (0, import_chunk_2mwshd9r.nMr)(o.url);
      if (R !== void 0) P = `the proxy host ${P} or the mcp_url host ${R}`;
    }
    return (0, import_chunk_w578pjby.t)(`MCP era negotiation denylist matched ${P}; the legacy handshake applies`), { mode: "legacy" };
  }
  return k;
}
var xh = /Unrecognized field \\?"(?:form|url)\\?" \(class [\w.$]*ClientCapabilities\$Elicitation\)/, Bh = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.v)("Invalid message format"), stackTrace: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ className: (0, import_chunk_adx6804h.n)() })) })), Hh = 262144, $h = `This server (Java MCP SDK 0.17.0 or older) rejected Claude Code's elicitation capability. Set "bareElicitationCapability": true for it, or upgrade to Java MCP SDK 0.17.1+ (Spring AI 1.0.7+ or 1.1.6+).`;
function er(e, o, r) {
  let h = r instanceof import_chunk_racn22qq.Bor && r.protocolVersion !== void 0;
  return ((e instanceof import_chunk_racn22qq.ef || e instanceof import_chunk_racn22qq.PO) && xh.test(e.message) || e instanceof import_chunk_racn22qq.PO && e.status === 400 && !h && jh(e.data.text)) && (0, import_chunk_7625rswd.vhs)(o, { denylisted: Ri(o) }).elicitation?.url !== void 0;
}
function jh(e) {
  if (typeof e !== "string" || e.length > Hh) return false;
  let o = Bh().safeParse((0, import_chunk_0jve1fep.et)(e, false));
  return o.success && o.data.stackTrace.some((r) => r.className.startsWith("io.modelcontextprotocol.server.transport."));
}
function zh(e) {
  if (!(e instanceof import_chunk_racn22qq.PO)) return false;
  let o = e.status;
  if (!(o >= 400 && o < 500) || o === 401 || o === 403 || o === 429) return false;
  let r = e.data.text;
  if (typeof r !== "string") return true;
  return su(r) === void 0;
}
function su(e) {
  let o = e.split(/\r?\n/).find((g) => g.startsWith("data:")), r = (0, import_chunk_0jve1fep.et)(o === void 0 ? e : o.slice(5), false), h = typeof r === "object" && r !== null && "id" in r && r.id === null ? { ...r, id: void 0 } : r;
  return (0, import_chunk_racn22qq.t4e)(h) ? h.error : void 0;
}
function qh(e) {
  if (e.type !== "claudeai-proxy" || e.stateless === true) return;
  let o = (0, import_chunk_sjqze7qg.Dso)();
  if (o === "off") return;
  if ((0, import_chunk_qdcbcsg7.mt)().burnedListingDiscoverPriors.has(e.id)) return;
  if (e.discoverSupport === "legacy") return { kind: "legacy" };
  if (o !== "all" || e.discoverSupport !== "supported") return;
  let r = ks(e);
  return r === void 0 ? void 0 : { kind: "modern", discover: r };
}
function yl(e, o, r) {
  let h = Yo(e);
  if (h !== void 0) {
    if ((0, import_chunk_qdcbcsg7.mt)().burnedListingDiscoverPriors.add(h), o === "legacy") Jo(e, r);
  }
}
async function Wh(e, o) {
  let r = Yo(e);
  if (r === void 0 || e.type === "claudeai-proxy" && (e.stateless === true || e.discoverSupport === "supported") || (0, import_chunk_865at33z.p6t)(e) && import_chunk_c203g5kd.s.MCP_PROTOCOL_NEGOTIATION === "auto" || (0, import_chunk_qdcbcsg7.mt)().burnedListingDiscoverPriors.has(r)) return;
  return await Td(e, o) ? { kind: "legacy" } : void 0;
}
function On(e) {
  return e === "initialize" || e === "tools/list";
}
function _i(e, o) {
  if (e === import_chunk_racn22qq.ld.UnsupportedProtocolVersion || e === import_chunk_racn22qq.ld.MissingRequiredClientCapability) return "rpc_era";
  if (e === import_chunk_racn22qq.ld.InvalidRequest || e === import_chunk_racn22qq.ld.MethodNotFound && On(o)) return "rpc_session";
  return;
}
function Qs(e, o) {
  if (e instanceof import_chunk_racn22qq.ef) return _i(e.code, o);
  if (e instanceof import_chunk_racn22qq.PO) {
    if (e.status === 400 || (e.status === 404 || e.status === 405) && On(o)) return "http_4xx";
  }
  return;
}
function Vh(e) {
  if (!(e instanceof import_chunk_racn22qq.PO) || e.status !== 400 || typeof e.data.text !== "string") return false;
  let o = vd(e.data.text);
  return o === import_chunk_racn22qq.ld.UnsupportedProtocolVersion || o === import_chunk_racn22qq.ld.MissingRequiredClientCapability;
}
function Dr(e) {
  let o = new import_chunk_jv7av99m.A(e, "MCP connection timeout");
  if ((0, import_chunk_865at33z.b)("tengu_mcp_connect_timeout_retry", true)) return Object.assign(o, { code: "CONNECT_TIMEOUT" });
  return o;
}
function Sl(e, o, r) {
  if ((o.type === "stdio" || o.type === void 0) && o.pluginSource !== void 0) ki(e, (0, import_chunk_3bjtjsgp.n4)(o), void 0, r);
}
async function Kh(e, o, r, h, g, y) {
  let M = o.send, k, P, R;
  function I() {
    let F = performance.now();
    R = new AbortController(), P = e.request({ method: "tools/list" }, y, { timeout: Math.min(2 * (0, import_chunk_98tkmkvx.bf)(), import_chunk_2567t09g.au), signal: R.signal }), P.catch(() => {
    }), h.sentAhead = true, (0, import_chunk_478m53m1.q1a)(h, P, F);
  }
  let L = (F, ae) => {
    if (g && (0, import_chunk_racn22qq.$Yr)(F)) {
      let _e = M.call(o, F, ae);
      return I(), _e;
    }
    if (k !== void 0 || !(0, import_chunk_racn22qq.UYr)(F)) return M.call(o, F, ae);
    if (o.send === L) o.send = M;
    return k = M.call(o, F, ae), k.catch(() => {
    }), Promise.resolve();
  };
  o.send = L;
  let z = e.onerror;
  e.onerror = (F) => {
    (0, import_chunk_478m53m1.bri)(h), z?.(F);
  };
  function H() {
    (0, import_chunk_478m53m1.bri)(h), e.close().catch(() => {
    });
  }
  try {
    if (await e.connect(o, { timeout: r }), k === void 0) return;
    if (g) {
      let F = setTimeout(H, r);
      F.unref?.(), k.catch(H).finally(() => clearTimeout(F));
    } else {
      if (e.getServerCapabilities()?.tools !== void 0) I();
      try {
        await k;
      } catch (F) {
        throw H(), F;
      }
    }
  } finally {
    if (e.onerror = z, o.send === L) o.send = M;
  }
  if (P !== void 0 && R !== void 0) Xh(P, R);
  (0, import_chunk_478m53m1.Y1a)(h);
}
async function Gh(e, o, r, h) {
  let g = o.send, y = (M, k) => {
    if (!(0, import_chunk_racn22qq.UYr)(M)) return g.call(o, M, k);
    let P = new AbortController(), R = g.call(o, M, { ...k, requestSignal: P.signal });
    return R.catch(() => {
    }), h({ answer: R, post: P }), Promise.resolve();
  };
  o.send = y;
  try {
    await e.connect(o, { timeout: r });
  } finally {
    o.send = g;
  }
}
async function Yh({ answer: e, post: o }, r) {
  let h = new AbortController(), g = await Promise.race([e.then(() => "answered", (y) => (0, import_chunk_jv7av99m.Fe)(y) ? "aborted" : y instanceof import_chunk_racn22qq.PO ? "http_error" : "no_response"), (0, import_chunk_5appeerh.K)(r, h.signal, { unref: true }).then(() => "timed_out")]);
  if (h.abort(), g === "timed_out") o.abort();
  return g;
}
function Jh(e) {
  return 2 * (0, import_chunk_98tkmkvx.bf)() <= Pi(e);
}
function Xh(e, o) {
  let r = (0, import_chunk_98tkmkvx.bf)(), h = setTimeout((g, y) => g.abort(new import_chunk_racn22qq.Xa(import_chunk_racn22qq.Ua.RequestTimeout, "Request timed out", { timeout: y })), r, o, r);
  h.unref?.(), e.then(() => clearTimeout(h), () => clearTimeout(h));
}
var Qh = 2e3;
function Zh(e, o, r, h) {
  let g = r.initializedNotificationAnsweredAtMs ?? (r.pendingMethod === "notifications/initialized" ? performance.now() : void 0);
  if (g === void 0) return;
  setTimeout((M, k, P, R) => (0, import_chunk_y53wbr8a.a)("tengu_mcp_message_stream_outcome", { ...R, messageStreamGetOutcome: gn(M) ? (0, import_chunk_78g0060s.S)("client_closed") : (0, import_chunk_78g0060s.f)(P.messageStreamGetOutcome), mcpServerKeyHash: (0, import_chunk_865at33z.z4)(k) }), Math.max(0, g + Qh - performance.now()), e, o, r, h).unref?.();
}
var go = (0, import_chunk_cwkztn5x.oal)(async (e, o, r, h, g, y, M) => {
  Oi();
  let k = Date.now(), P = is(M?.clock ?? import_chunk_5appeerh.Gi), R, I = (0, import_chunk_yrpmp1hk.Zri)(e, o);
  (0, import_chunk_3fqcfedz.KYr)(o);
  let L = (0, import_chunk_qdcbcsg7.Aze)(e, o), z = (0, import_chunk_0a69wnzr.mkt)(), H = o.type ?? "stdio";
  if ((0, import_chunk_42tcgre6.q)("info", "mcp_connect_starting", { transport: H }), (0, import_chunk_3bjtjsgp.eDi)(o)) {
    let Ne = o.configError ?? "No URL configured for this server";
    return (0, import_chunk_k449cc64.He)(e, Ne), (0, import_chunk_42tcgre6.q)("info", "mcp_connect_skipped", { transport: H, reason: "unconfigured" }), { name: e, type: "failed", config: o, error: Ne, errorCode: "UNCONFIGURED" };
  }
  {
    let Ne = o.configError;
    if (!Ne && "url" in o) try {
      new URL(o.url);
    } catch {
      Ne = "'url' is not a valid URL. Update the server's config and reconnect.";
    }
    if (Ne) return (0, import_chunk_y53wbr8a.a)("tengu_mcp_server_config_invalid", { transportType: (0, import_chunk_78g0060s.f)(o.type ?? "stdio"), field: (0, import_chunk_78g0060s.S)("url"), source: (0, import_chunk_78g0060s.S)(o.configError ? "loader" : "connect") }), (0, import_chunk_k449cc64.He)(e, Ne), (0, import_chunk_k449cc64.id)(e, Ne), (0, import_chunk_42tcgre6.q)("warn", "mcp_connect_failed", { transport: H, duration_ms: Date.now() - k, reason: "invalid_config" }), (0, import_chunk_cqa9hrgx.m)("mcp_connect", "mcp_connect_invalid_config"), { name: e, type: "failed", config: o, error: Ne, errorCode: "INVALID_CONFIG" };
  }
  let F, ae, _e = false, be = false, Q, Ae = (0, import_chunk_f9x2f6cx.Y)() ? void 0 : Math.round(process.uptime() * 1e3), Ve, Tt, pt, Ge, At, Ht = false, Et, Wt = false, pe = false, oe, ge, Te, Qe = (Ne) => {
    ge = Ne, Te = (0, import_chunk_78g0060s.fe)(Ne);
  }, Ye = false, Rt = false, Mt = false, ht = () => Rt ? "the remembered legacy verdict" : "the /v1/mcp_servers discover projection", vt = false, De, kt = false, tt, ye, it = Uh(o), Ke = ru(o), Pe = () => {
    if (De?.mode !== "auto" || Et !== void 0) return;
    let Ne = Q?._anthropicProbeLegacyEvidence;
    if (Ne === "id-mismatch") Et = (0, import_chunk_78g0060s.S)("probe_id_mismatch");
    else if (Ne === "malformed") Et = (0, import_chunk_78g0060s.S)("probe_malformed");
    else if (Ne === "stream-end") Et = (0, import_chunk_78g0060s.S)("probe_stream_end");
    if (Et !== void 0) (0, import_chunk_k449cc64.He)(e, `era probe classified the server legacy in-SDK (${String(Ne)}); the 2025 handshake was used for this connect attempt`);
  };
  try {
    let fo = function() {
      let G = Date.now();
      for (let X of xt.activeCallWatchdogs) if (X.armedAt === 0) X.armedAt = G;
    }, Ne = {}, yt = () => Ne.current, xe = (0, import_chunk_2mwshd9r.Wde)(e, o), It = (0, import_chunk_qdcbcsg7.rMr)(o), Ot = (o.type === "sse" || o.type === "http") && (0, import_chunk_yz5b8aaa._ee)(o), se = false, ke = o.type === "sse" || o.type === "http" || o.type === "ws" ? await (0, import_chunk_tgn73pvk.lRn)(e, o, () => {
      se = true;
    }) : {};
    if ((0, import_chunk_bzyb60p0.oro)(e, o, ke) !== void 0) return (0, import_chunk_k449cc64.He)(e, "Skipping connection (the headers to send are under the organization's connector block)"), { name: e, type: "failed", config: o, ...(0, import_chunk_bzyb60p0.iw)("managed-policy", e, o) };
    let ct = (o.type === "sse" || o.type === "http") && !!o.headersHelper && (0, import_chunk_yz5b8aaa.s9i)(ke), bt = (o.type === "sse" || o.type === "http") && !Ot && !ct && !It && !xe && (0, import_chunk_yz5b8aaa.Mhe)(o.url) && (0, import_chunk_zhr7rpv7.jn)() && (!!((0, import_chunk_m15w38ag.ne)() && g !== void 0 ? await (0, import_chunk_865at33z.pp)(g) : (0, import_chunk_865at33z.tr)())?.accessToken || (0, import_chunk_yz5b8aaa.koe)(o.url) && await (0, import_chunk_tgj1b0ts.o4e)(g));
    if (bt) (0, import_chunk_y53wbr8a.a)("tengu_mcp_first_party_auto_auth", { transportType: (0, import_chunk_78g0060s.f)(o.type), ...yo(o, e) });
    let jt = {}, Re = L ? pc(fetch) : void 0, Gt = (0, import_chunk_3fqcfedz.fUa)(o, Re ?? fetch, (G) => (0, import_chunk_bzyb60p0.oro)(e, o, ke, G)), Xe = Gt ?? Re;
    if (o.type === "sse") {
      (0, import_chunk_yrpmp1hk.fRn)(o.headers, ke);
      let G = L || Ot || ct || bt || It ? void 0 : new import_chunk_tgn73pvk.cRn(e, o);
      ae = G;
      let X = await (0, import_chunk_rvw4ecc0.G7r)(o.url, L), ce = tn(Xs((0, import_chunk_racn22qq.fJt)(Xe, X)));
      if (ce = (0, import_chunk_fkbh0xha.o8o)(ce, o.url), G) ce = (0, import_chunk_tgn73pvk.CYr)(ce, G);
      if (ce = Qn(ce, o, yt), bt) ce = Js(ce, g, jt);
      let ve = { authProvider: G, skipIssuerMetadataValidation: true, fetch: ce, requestInit: { ...X, headers: { "User-Agent": (0, import_chunk_865at33z.ACt)(), "Accept-Encoding": "identity", ...ke } } }, ot = (0, import_chunk_fkbh0xha.o8o)(Xs(async (lt, Ee) => {
        let Pt = {}, Ut = await G?.tokens();
        if (Ut) Pt.Authorization = `Bearer ${Ut.access_token}`;
        let Jt = await (0, import_chunk_rvw4ecc0.G7r)(String(lt), L);
        return (Xe ?? fetch)(lt, { ...Ee, ...Jt, headers: gh(Ee?.headers, Pt, ke) });
      }), o.url);
      ve.eventSourceInit = { fetch: tn(G ? (0, import_chunk_tgn73pvk.CYr)(ot, G) : bt ? Js(ot, g, jt) : ot) }, At = () => new import_chunk_racn22qq.BYr(new URL(o.url), ve), Q = At(), (0, import_chunk_k449cc64.He)(e, "SSE transport initialized, awaiting connection");
    } else if (o.type === "sse-ide") {
      (0, import_chunk_k449cc64.He)(e, `Setting up SSE-IDE transport to ${(0, import_chunk_jbjjrhxt.bu)(o.url)}`);
      let G = { fetch: tn(globalThis.fetch), requestInit: { headers: { "User-Agent": (0, import_chunk_865at33z.ACt)(), "Accept-Encoding": "identity" } } };
      Q = new import_chunk_racn22qq.BYr(new URL(o.url), G);
    } else if (o.type === "ws-ide") {
      let G = (0, import_chunk_3jjr3wje.QN)(o.url);
      (0, import_chunk_rwc528c4.KD)().record(o.authToken);
      let X = { "User-Agent": (0, import_chunk_865at33z.ACt)(), ...o.authToken && { "X-Claude-Code-Ide-Authorization": o.authToken } }, ce = new globalThis.WebSocket(o.url, { protocols: ["mcp"], headers: X, proxy: (0, import_chunk_3jjr3wje.Z1)(o.url), tls: G || void 0 });
      Q = new import_chunk_ka9ph908.mYr(ce, (ve) => import_chunk_racn22qq.o0t.parse(ve));
    } else if (o.type === "ws") {
      (0, import_chunk_yrpmp1hk.fRn)(o.headers, ke), (0, import_chunk_k449cc64.He)(e, `Initializing WebSocket transport to ${(0, import_chunk_jbjjrhxt.bu)(o.url)}`);
      let G = (0, import_chunk_3jjr3wje.QN)(o.url), X = xe ? (0, import_chunk_5rd4zsth.Nc)() : null;
      (0, import_chunk_rwc528c4.KD)().record(X ?? void 0);
      let ce = { "User-Agent": (0, import_chunk_865at33z.ACt)(), ...X && { Authorization: `Bearer ${X}` }, ...ke }, ve = (0, import_chunk_jbjjrhxt.rsr)(ce);
      (0, import_chunk_k449cc64.He)(e, `WebSocket transport options: ${(0, import_chunk_w578pjby._)({ url: (0, import_chunk_jbjjrhxt.bu)(o.url), headers: ve, hasSessionAuth: !!X })}`);
      let je = new globalThis.WebSocket(o.url, { protocols: ["mcp"], headers: ce, proxy: (0, import_chunk_3jjr3wje.Z1)(o.url), tls: G || void 0 });
      Q = new import_chunk_ka9ph908.mYr(je, (ot) => import_chunk_racn22qq.o0t.parse(ot));
    } else if (o.type === "http") {
      if ((0, import_chunk_yrpmp1hk.fRn)(o.headers, ke), (0, import_chunk_k449cc64.G0o)()) (0, import_chunk_k449cc64.He)(e, `Initializing HTTP transport to ${(0, import_chunk_jbjjrhxt.bu)(o.url)}`), (0, import_chunk_k449cc64.He)(e, `Node version: ${process.version}, Platform: darwin`), (0, import_chunk_k449cc64.He)(e, `Environment: ${(0, import_chunk_w578pjby._)({ NODE_OPTIONS: import_chunk_c203g5kd.s.NODE_OPTIONS || "not set", UV_THREADPOOL_SIZE: import_chunk_c203g5kd.s.UV_THREADPOOL_SIZE || "default", HTTP_PROXY: (0, import_chunk_sah8dzn4.XA)(import_chunk_c203g5kd.s.HTTP_PROXY || "not set"), HTTPS_PROXY: (0, import_chunk_sah8dzn4.XA)(import_chunk_c203g5kd.s.HTTPS_PROXY || "not set"), NO_PROXY: import_chunk_c203g5kd.s.NO_PROXY || "not set" })}`);
      let G = L || Ot || ct || bt || It || xe ? void 0 : new import_chunk_tgn73pvk.cRn(e, o);
      ae = G;
      let X = await (0, import_chunk_rvw4ecc0.G7r)(o.url, L), ce = tn(Xs((0, import_chunk_racn22qq.fJt)((0, import_chunk_rvw4ecc0.Gsi)(o.url) ?? (xe ? import_chunk_1y3twj4q.y0t : (0, import_chunk_5ft9yxne.tll)(Xe, o)), X)), { refusesCodings: (0, import_chunk_2mwshd9r.Cze)(o.url) });
      ce = (0, import_chunk_fkbh0xha.o8o)(ce, o.url);
      let ve = G && { authProvider: { token: async () => (await G.tokens())?.access_token }, fetch: Qn(ce, o) };
      if (G) ce = (0, import_chunk_tgn73pvk.CYr)(ce, G);
      if (ce = Qn(ce, o, yt), bt) ce = Js(ce, g, jt);
      if (xe) {
        let lt = (0, import_chunk_9r4r85pg.iPi)(), Ee = (0, import_chunk_2mwshd9r.Cze)(o.url) ? ce : $d(bg(ce), (Pt) => tn(Pt, { door: lt() }));
        ce = Ya(Jl(Ee, y, (0, import_chunk_3bjtjsgp.Uo)(e, o), () => re.getServerCapabilities(), () => (0, import_chunk_8sy6wsb2.ssr)(o) !== void 0 && (0, import_chunk_8sy6wsb2.tsi)()), e, o.url);
      } else if ((0, import_chunk_2mwshd9r.Yu)(o.url)) ce = oh(ce);
      if (ce = (0, import_chunk_865at33z.hIl)(ce, o), (0, import_chunk_2mwshd9r.Cze)(o.url)) {
        let lt = ce;
        ce = async (Ee, Pt) => {
          let Ut = Pt?.method === "POST" ? (0, import_chunk_ddfyyyy7.J8e)()?.mark("own") : void 0;
          try {
            return await lt(Ee, Pt);
          } finally {
            Ut?.();
          }
        };
      }
      if (It) ce = rh(ce, o);
      if (Yo(o) !== void 0) ce = ws(ce, () => {
        Mt = true;
      });
      let je = Ts({ mcpUrl: o.url, keepAliveDisabled: X.keepalive === false, getAnsweredLocally: false, statelessGated: false });
      Ve = je, ce = bs(ce, je);
      let ot = { authProvider: G, skipIssuerMetadataValidation: true, fetch: ce, requestInit: { ...X, headers: { "User-Agent": (0, import_chunk_865at33z.ACt)(), "Accept-Encoding": "identity", ...xe ? (0, import_chunk_xcgcdx61.mi)(ke, (lt, Ee) => Ee.toLowerCase() === import_chunk_8sy6wsb2.S7r || Ee.toLowerCase() === import_chunk_th6rswmx.Zor.toLowerCase()) : ke } } };
      if ((0, import_chunk_k449cc64.G0o)()) {
        let lt = ot.requestInit?.headers ? (0, import_chunk_jbjjrhxt.rsr)(ot.requestInit.headers) : void 0;
        (0, import_chunk_k449cc64.He)(e, `HTTP transport options: ${(0, import_chunk_w578pjby._)({ url: (0, import_chunk_jbjjrhxt.bu)(o.url), headers: lt, hasAuthProvider: !!G, timeoutMs: Pi(o) })}`);
      }
      if (Ge = (lt) => (Es(je), new import_chunk_racn22qq.Bor(new URL(o.url), lt?.withoutOAuth ? { ...ot, authProvider: void 0 } : { ...ot, ...lt && ve })), Q = Ge(), (0, import_chunk_k449cc64.He)(e, "HTTP transport created successfully"), !(0, import_chunk_2mwshd9r.Bct)(o) && !(0, import_chunk_yz5b8aaa.Mhe)(o.url) && !It) Tt = ({ postMethodNotAllowed: lt, dialSignal: Ee, dialConnected: Pt }) => {
        let Ut = (Mo) => Pt() ? Mo : { ...Mo, signal: Mo?.signal ? AbortSignal.any([Mo.signal, Ee]) : Ee }, Jt = false, Lo = async (Mo, xo) => {
          let Cn = await ce(Mo, Ut(xo));
          if (!lt && !Jt) {
            if (Cn.status === 401) throw await Cn.body?.cancel().catch(() => {
            }), Error("legacy HTTP+SSE stream GET answered 401 after the initialize POST was not a 405; not starting OAuth against this URL");
            Jt = Cn.ok;
          }
          return Cn;
        }, _n = (Mo, xo) => xo?.body instanceof URLSearchParams && xo.body.has("grant_type") ? ce(Mo, xo) : ce(Mo, Ut(xo));
        return new import_chunk_racn22qq.BYr(new URL(o.url), { authProvider: G, skipIssuerMetadataValidation: true, fetch: _n, eventSourceInit: { fetch: Lo }, requestInit: ot.requestInit });
      };
    } else if (o.type === "sdk") throw Error("SDK servers should be handled in print.ts");
    else if (o.type === "claudeai-proxy") {
      if (!(0, import_chunk_zhr7rpv7.jn)()) throw Error("claude.ai MCP proxy is not available on third-party providers");
      if ((0, import_chunk_k449cc64.He)(e, `Initializing claude.ai proxy transport for server ${o.id}`), !((0, import_chunk_m15w38ag.ne)() && g !== void 0 ? await (0, import_chunk_865at33z.pp)(g) : (0, import_chunk_865at33z.tr)())) throw Error("No claude.ai OAuth token found");
      let X = (0, import_chunk_ephf358x.cn)(), ce = `${X.MCP_PROXY_URL}${X.MCP_PROXY_PATH.replace("{server_id}", o.id)}`;
      (0, import_chunk_k449cc64.He)(e, `Using claude.ai proxy at ${ce}`);
      let ve = (0, import_chunk_3jjr3wje.wl)({ url: ce }), je = sh(tn((0, import_chunk_racn22qq.fJt)(void 0, ve)), g), ot = qa(), lt = ot || on(o);
      if (lt) (0, import_chunk_k449cc64.He)(e, ot ? "GET notification stream disabled for claude.ai connectors; a GET the SDK sends to the proxy URL is answered locally with 405" : "GET notification stream disabled (stateless connector); if the SDK requests it, it gets a local 405");
      let Ee = Ts({ mcpUrl: ce, keepAliveDisabled: ve.keepalive === false, getAnsweredLocally: lt, statelessGated: on(o) });
      Ve = Ee;
      let Ut = { fetch: bs(ws(lt ? Xd(Qn(je, o, yt), ce) : Qn(je, o, yt), () => {
        Mt = true;
      }), Ee), requestInit: { ...ve, headers: { "User-Agent": (0, import_chunk_865at33z.ACt)(), "Accept-Encoding": "identity", "X-Mcp-Client-Session-Id": (0, import_chunk_f9x2f6cx.W)() } } };
      Ge = () => (Es(Ee), new import_chunk_racn22qq.Bor(new URL(ce), Ut)), Q = Ge(), (0, import_chunk_k449cc64.He)(e, "claude.ai proxy transport created successfully");
    } else if ((0, import_chunk_865at33z.p6t)(o) && (0, import_chunk_prn6030k._b)(e)) {
      let { isClaudeInChromeAllowed: G } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-8m2zpkmx.js")));
      if (!G()) return (0, import_chunk_k449cc64.He)(e, "Skipping connection (Claude in Chrome is blocked by org policy)"), { name: e, type: "failed", config: o, ...(0, import_chunk_bzyb60p0.iw)("managed-policy", e, o) };
      let { createChromeContext: X } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-72zr3jp8.js"))), { createChromeSocketClient: ce, createClaudeForChromeMcpServer: ve } = import_chunk_c203g5kd.s.CLAUDE_CODE_CHROME_LATE_MCP_SERVER === true ? await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z36d5ekk.js"))) : await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-pvmvj8sk.js"))), { createLinkedTransportPair: je } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xfd253x4.js"))), { setChromeBinding: ot } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-d11xbzb5.js"))), { registerChromeTabGroupCleanup: lt } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3f5f1zmw.js"))), Ee = X(o.env, { availabilityFunnel: true, credentials: g, bearerGate: async () => G() }), Pt = ce(Ee);
      ot(Ee, Pt), lt(), F = ve(Ee, Pt);
      let [Ut, Jt] = je();
      await F.connect(Jt), Q = Ut, (0, import_chunk_k449cc64.He)(e, "In-process Chrome MCP server started");
    } else if ((0, import_chunk_865at33z.p6t)(o) && (0, import_chunk_xcgcdx61.Zze)(e)) {
      let { createComputerUseMcpServerForCli: G } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ybsv9ymt.js"))), { createLinkedTransportPair: X } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xfd253x4.js")));
      F = await G();
      let [ce, ve] = X();
      await F.connect(ve), Q = ce, (0, import_chunk_k449cc64.He)(e, "In-process Computer Use MCP server started");
    } else if (o.type === "stdio" || !o.type) {
      (0, import_chunk_wn8z7ghn.iC)();
      let G = () => ({ shellPrefix: import_chunk_c203g5kd.s.CLAUDE_CODE_SHELL_PREFIX, baseEnv: (0, import_chunk_r6r2wdsw.e7i)() ? { ...rs(), ...(0, import_chunk_r6r2wdsw.IVt)() } : { ...(0, import_chunk_r6r2wdsw.Hs)() } }), { shellPrefix: X, baseEnv: ce } = (0, import_chunk_q7cfnzfy.U5)(o, G), ve = X || o.command, je = X ? [(0, import_chunk_vh92d4r0.No)([o.command, ...o.args])] : o.args, { command: ot, args: lt, pending: Ee, capped: Pt } = (0, import_chunk_sjqze7qg.o5e)(e) ? { command: ve, args: je, pending: false, capped: false } : (0, import_chunk_9zdrdv25.JUl)("mcp", ve, je);
      _e = Ee, be = Pt;
      let { CLAUDE_CODE_CHILD_SESSION: Ut, CLAUDE_CODE_CHROME_MCP_ORG_DENIED: Jt, ...Lo } = ce, _n = (0, import_chunk_f9x2f6cx.us)(), Mo = (0, import_chunk_f9x2f6cx.hPt)(o), xo = { ...Lo, CLAUDE_PROJECT_DIR: _n ?? (0, import_chunk_f9x2f6cx.Oo)(), CLAUDE_CODE_SESSION_ID: (0, import_chunk_q7cfnzfy.Jne)(), CLAUDECODE: "1", ...o.env, CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS: (0, import_chunk_q7cfnzfy.Jne)(), ...(0, import_chunk_p2s0km69.Vit)((0, import_chunk_q7cfnzfy.Jne)()), ...!(0, import_chunk_2zeyvjwb.hk)("allow_claude_browser_extension") && { CLAUDE_CODE_CHROME_MCP_ORG_DENIED: "1" } };
      (0, import_chunk_1z1bgjzv.Cbe)(o.pluginSource, xo, Lo), (0, import_chunk_r6r2wdsw.t7i)(xo), pt = { command: ot, args: lt, env: xo, stderr: "pipe", ...Mo !== null && { cwd: Mo } }, Q = new uo(pt);
    } else throw Error(`Unsupported server type: ${o.type}`);
    let Ce, wt, we = "", le = () => {
      if (o.type === "stdio" || !o.type) {
        let G = Q;
        if (G.stderr instanceof import_stream2.Readable) wt = G.stderr, Ce = (X) => {
          if (we.length < 67108864) try {
            we += X.toString();
          } catch {
          }
        }, wt.on("data", Ce);
      }
    };
    le();
    let Be = Fh(o.type, { inProcess: F !== void 0, ccrProxy: (0, import_chunk_2mwshd9r.Bct)(o), ccrToolport: o.type === "http" && (0, import_chunk_2mwshd9r.lRt)(o.url) });
    if (De = Br(Be, o, Ke), De.mode === "auto") {
      if (oe = qh(o), oe === void 0) oe = await Wh(o, h), Rt = oe !== void 0;
    }
    let Oe = (0, import_chunk_g9n176jp.a_s)(o), Ue = (G) => {
      let X = Ht ? (0, import_chunk_7625rswd.f1n)() : G.mode === "auto" ? (0, import_chunk_7625rswd.san)() : (0, import_chunk_7625rswd.vhs)(o, { denylisted: Ri(o) }), ce = new import_chunk_racn22qq.X9o({ name: "claude-code", title: "Claude Code", version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION ?? "unknown", description: "Anthropic's agentic coding tool", websiteUrl: import_chunk_d0bewyh8.duo }, { capabilities: Oe ? (0, import_chunk_7625rswd.Nkt)(X) : X, jsonSchemaValidator: (0, import_chunk_2b1wcpvk.eln)() ? Rs : new Ai(), responseCacheStore: Ms(e), versionNegotiation: G, ...it ? {} : { listChanged: { tools: { autoRefresh: false, debounceMs: 0, onChanged: () => (0, import_chunk_478m53m1.wri)(ce) }, prompts: { autoRefresh: false, debounceMs: 0, onChanged: () => {
      } }, resources: { autoRefresh: false, debounceMs: 0, onChanged: () => {
      } } } } });
      if (ce.setRequestHandler("roots/list", async () => ((0, import_chunk_k449cc64.He)(e, "Received ListRoots request from server"), pi(e, o))), Oe) (0, import_chunk_qdcbcsg7.mt)().clientTasksDeclaredBeforeServerList.set(ce, X);
      else if (import_chunk_spnfty7j.$kt in (X.extensions ?? {})) (0, import_chunk_qdcbcsg7.mt)().clientsBuiltWithTasks.set(ce, X);
      return ce;
    }, re = Ue(De);
    if ((0, import_chunk_k449cc64.He)(e, `Starting connection with timeout of ${(0, import_chunk_98tkmkvx.bf)()}ms`), o.type === "http" && (0, import_chunk_k449cc64.G0o)()) {
      (0, import_chunk_k449cc64.He)(e, `Testing basic HTTP connectivity to ${(0, import_chunk_jbjjrhxt.bu)(o.url)}`);
      try {
        let G = new URL(o.url), X = (0, import_chunk_jbjjrhxt.bu)(G.href), ce = URL.canParse(X) ? new URL(X) : void 0;
        if ((0, import_chunk_k449cc64.He)(e, ce ? `Parsed URL: host=${ce.hostname}, port=${ce.port || "default"}, protocol=${ce.protocol}` : `Parsed URL: ${X}`), G.hostname === "127.0.0.1" || G.hostname === "localhost") (0, import_chunk_k449cc64.He)(e, `Using loopback address: ${G.hostname}`);
      } catch {
        (0, import_chunk_k449cc64.He)(e, `Failed to parse URL: ${(0, import_chunk_jbjjrhxt.bu)(o.url)}`);
      }
    }
    let $e = Yd(o), qe = Jd(o);
    if (on(o)) {
      if ((0, import_chunk_k449cc64.He)(e, $e ? "Stateless claudeai-proxy \u2014 resolving MCP initialize from cached projection" : "Stateless claudeai-proxy \u2014 no cached projection; real initialize, GET SSE suppressed"), qe !== void 0) (0, import_chunk_k449cc64.He)(e, qe === "wire" ? "Stateless claudeai-proxy \u2014 file transfers are on, so the server is asked server/discover" : qe === "method-not-found" ? "Stateless claudeai-proxy \u2014 server/discover resolved locally as legacy (method-not-found)" : "Stateless claudeai-proxy \u2014 resolving server/discover from cached projection");
      Ps(Q, $e, qe);
    }
    (0, import_chunk_ze4kt7fs.aSr)({ name: e }, Q), kn(Q);
    let _t = (G) => {
      let X = G instanceof import_chunk_racn22qq.PO ? G.status : void 0;
      return G instanceof import_chunk_racn22qq.YL || G instanceof Error && G.name === "UnauthorizedError" || G instanceof import_chunk_adx6804h.Bz && ae?.sawAuthChallenge === true || G instanceof import_chunk_tgn73pvk.Sie || o.type === "claudeai-proxy" && (0, import_chunk_v6x86eph.Lgt)(G) || X === 401 || X === 403;
    };
    if (De.mode === "auto") Qe(oe !== void 0 ? Rt ? "remembered_legacy" : oe.kind === "modern" ? "listing_body" : "listing_legacy" : on(o) && qe !== "wire" && (qe !== void 0 || $e !== void 0) ? "stateless_local" : "wire");
    let Dt, Nt = async (G, X) => {
      if ((0, import_chunk_k449cc64.He)(e, G.kind === "modern" ? "claude.ai proxy \u2014 adopting the /v1/mcp_servers discover projection (2026-07-28 era; no server/discover round trip)" : Rt ? "remembered as a legacy peer from an earlier connect (its server/discover probe was answered method-not-found or not at all); skipping the probe" : "claude.ai proxy \u2014 /v1/mcp_servers projects a legacy peer; skipping the server/discover probe"), await re.connect(X, { timeout: X instanceof uo ? (0, import_chunk_98tkmkvx.bf)() : Ar(), prior: G }), G.kind !== "modern" || it) return;
      let ce = Wl(re);
      if (ce === void 0) return;
      try {
        let ve = await re.listen(ce, { timeout: Ar() });
        if (re.transport === void 0) return;
        Dt = ve;
      } catch (ve) {
        if (_t(ve) || Qs(ve, "subscriptions/listen") !== void 0) throw ve;
        (0, import_chunk_k449cc64.He)(e, `connect-time subscriptions/listen did not establish (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(ve, o), 200)}); proceeding without it`);
      }
    }, Yt = (G, X, ce) => {
      R ??= is(P.clock);
      let ve = G(), je = new Promise((ot, lt) => {
        let Ee = P.clock.setTimeout(() => {
          if ((0, import_chunk_k449cc64.He)(e, `Connection timeout triggered after ${as(P)} (limit: ${ce}ms)`), F) F.close().catch(() => {
          });
          X.close().catch(() => {
          }), kt = true, lt(Dr(`MCP server "${e}" connection timed out after ${(0, import_chunk_98tkmkvx.bf)()}ms`));
        }, ce);
        ve.then(Ee, Ee);
      });
      return Promise.race([ve, je]);
    }, vo = async (G, X) => {
      if (X.mode === "auto") Cl(G, o, Oe), (0, import_chunk_m0xr8k74._hs)(G, e);
      let ce = false, ve = false, je = M?.toolsListFirst === true, ot = (je || M?.toolsListAhead === true) && e === import_chunk_qdcbcsg7.$n && Be === "ccr-proxy" && X.mode === "legacy" && oe === void 0 && !it && G instanceof import_chunk_racn22qq.Bor ? (0, import_chunk_478m53m1.Sri)(re, Ke) : void 0;
      tt = ot;
      let lt = Be === "ccr-toolport" && (0, import_chunk_865at33z.b)(import_chunk_hy0sycbj.Wkl, false) === true;
      try {
        if (await Yt(() => oe !== void 0 ? Nt(oe, G) : ot !== void 0 && Jh(o) ? Kh(re, G, (0, import_chunk_98tkmkvx.bf)(), ot, je, Su(o)) : lt ? Gh(re, G, (0, import_chunk_98tkmkvx.bf)(), (Ee) => {
          ye = Ee;
        }) : re.connect(G, { timeout: X.mode === "auto" ? Ar(G instanceof uo ? X.probe?.timeoutMs : void 0) : (0, import_chunk_98tkmkvx.bf)() }), G, (0, import_chunk_98tkmkvx.bf)()), G instanceof uo && re.autoOpenedSubscription !== void 0) try {
          await re.discover({ timeout: X.probe?.timeoutMs ?? fi() });
        } catch (Ee) {
          if (Ee instanceof import_chunk_racn22qq.Xa && Ee.code === import_chunk_racn22qq.Ua.RequestTimeout) throw ce = true, Ee;
          if (re.transport === void 0) throw ve = true, Ee;
          (0, import_chunk_k449cc64.He)(e, `server/discover sent after the subscriptions/listen acknowledgement got an error (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Ee, o), 200)}); the server still reads requests, so it is not restarted`);
        }
      } catch (Ee) {
        let Pt = De?.mode === "auto" && Ee instanceof import_chunk_racn22qq.Xa && Ee.code === import_chunk_racn22qq.Ua.EraNegotiationFailed, Ut = !ce && De?.mode === "auto" && Ee instanceof import_chunk_racn22qq.Xa && Ee.code === import_chunk_racn22qq.Ua.RequestTimeout && Q?._anthropicProbeTimedOut === true, Jt = !ve && De?.mode === "auto" && Ee instanceof import_chunk_racn22qq.Xa && Ee.code === import_chunk_racn22qq.Ua.ConnectionClosed && Q instanceof uo && Q._anthropicProbeTimedOut === true, Lo = De?.mode === "auto" && Ee instanceof import_chunk_racn22qq.ef && Q instanceof uo && Q._anthropicProbeTimedOut === true && !er(Ee, o, G), _n = Lo && Ee instanceof import_chunk_racn22qq.ef && Ee.code === import_chunk_racn22qq.ld.UnsupportedProtocolVersion, Mo = Lo ? Q._anthropicRediscoverError : void 0, xo = Q instanceof uo && Q.overflowError !== void 0;
        if (Pt) {
          let ro = Ee.data, to = typeof ro === "object" && ro !== null && "cause" in ro ? ro.cause : Ee.cause;
          if (to instanceof import_chunk_tgn73pvk.Sie) throw Ee;
          if ((0, import_chunk_3fqcfedz.OMe)(to)) throw to;
          if (typeof to === "object" && to !== null && "code" in to && to.code === "ERR_PROXY_TUNNEL" && "status" in to && to.status === 403) throw to;
        }
        let Cn = oe !== void 0 && Ge !== void 0 && !kt && !_t(Ee), Vr = oe !== void 0 && Rt && pt !== void 0 && Ee instanceof import_chunk_racn22qq.ef && !er(Ee, o, G), wn = oe !== void 0 && Rt && pt !== void 0 && !kt && Ee instanceof import_chunk_racn22qq.Xa && Ee.code === import_chunk_racn22qq.Ua.ConnectionClosed, Bn = { mode: "legacy" }, Hn = pt, ar = Hn !== void 0 ? () => new uo(Hn) : Ge ?? At, Fi = (ro, to) => {
          if (Ce && wt) wt.off("data", Ce);
          if (we) (0, import_chunk_k449cc64.He)(e, `${to}: ${we}`), we = "";
          return Q = new uo(ro), le(), Q;
        }, Ui = Ge ?? (Hn !== void 0 ? () => Fi(Hn, "stderr of the stdio server that answered the legacy initialize of the remembered dial with an error, before restarting it") : void 0), xi = async (ro, to) => {
          if (Ht = true, await ro.close().catch(() => {
          }), Ce && wt) wt.off("data", Ce);
          if (we) (0, import_chunk_k449cc64.He)(e, `stderr of the stdio server that refused elicitation form and url, before restarting it: ${we}`), we = "";
          return Q = to(), le(), Q;
        }, Pu = De?.mode === "auto" && Ee instanceof import_chunk_racn22qq.YL && ae?.lastRefreshWasRewritten === true && ae.grantedSdkRefreshCount === 0 && !ae.hasServerAnswered;
        if (oe !== void 0 && (Cn || Vr) && Ui !== void 0) {
          let ro = Qs(Ee, oe.kind === "modern" ? "subscriptions/listen" : "initialize") ?? (Ee instanceof import_chunk_racn22qq.Xa && Ee.code === import_chunk_racn22qq.Ua.EraNegotiationFailed ? "rpc_era" : Vr ? "rpc_other" : void 0), to = (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Ee, o), 200);
          if (ro !== void 0) (0, import_chunk_k449cc64.He)(e, Hn !== void 0 ? `the stdio server answered the initialize of a connect built from ${ht()} with an error (${to}); discarding it and restarting the server once with the server/discover probe` : `the upstream rejected a connect built from ${ht()} (${to}); discarding it for this connector and re-probing server/discover on a fresh transport`), yl(o, oe.kind, h), Ye = true, (0, import_chunk_y53wbr8a.a)("tengu_mcp_listing_prior_rejected", { phase: (0, import_chunk_78g0060s.S)("connect"), priorKind: (0, import_chunk_78g0060s.f)(oe.kind), priorSource: Te, reason: (0, import_chunk_78g0060s.f)(ro), transportType: (0, import_chunk_78g0060s.f)(o.type ?? "stdio"), ...yo(o, e) });
          else (0, import_chunk_k449cc64.He)(e, `connect built from ${ht()} failed (${to}); retrying this dial with a wire probe, prior kept`);
          vt = true, oe = void 0, Qe("wire"), Dt = void 0, Bn = De ?? Bn, await G.close().catch(() => {
          }), Q = Ui();
        } else if ((Pt || Jt || Lo || ce || ve || wn) && (o.type === "stdio" || !o.type) && pt !== void 0 && !xo) (0, import_chunk_k449cc64.He)(e, wn ? "stdio server remembered as a legacy peer exited during initialize, with no probe sent; restarting it once, again without the probe, within the remaining connect budget" : Lo && Ee instanceof import_chunk_racn22qq.ef ? `stdio server rejected initialize with JSON-RPC error ${Ee.code} (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Ee, o), 200)}) after the version negotiation probe timed out (likely a slow-starting server that read the stale probe first), and a second server/discover on the same process ${Mo === void 0 ? "was not attempted (the error named only protocol versions this client lacks)" : `got no usable answer (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Mo, o), 200)})`}; restarting it once without the probe, within the remaining connect budget` : Jt ? "stdio server exited during initialize after the version negotiation probe timed out (likely a slow-starting server that exits on requests before initialize); restarting it once without the probe, within the remaining connect budget" : ce ? `stdio server negotiated ${re.getNegotiatedProtocolVersion()} and acknowledged subscriptions/listen, then did not answer a follow-up server/discover within ${X.probe?.timeoutMs ?? fi()}ms (a server that stops reading requests while it holds the listen, as mark3labs/mcp-go 1.x before 1.1.1 does); restarting it once with the legacy handshake, which sends no listen, within the remaining connect budget` : ve ? `stdio server acknowledged subscriptions/listen and then exited before answering a follow-up server/discover (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Ee, o), 200)}); restarting it once with the legacy handshake, which sends no server/discover and no listen, within the remaining connect budget` : "version negotiation probe closed the stdio server (rmcp-class pre-init hard close); respawning pinned legacy"), Et = wn ? (0, import_chunk_78g0060s.S)("closed_on_remembered_dial") : _n ? (0, import_chunk_78g0060s.S)("era_locked_after_probe_timeout") : Lo ? (0, import_chunk_78g0060s.S)("rejected_after_probe_timeout") : Jt ? (0, import_chunk_78g0060s.S)("closed_after_probe_timeout") : ce ? (0, import_chunk_78g0060s.S)("stalled_after_listen") : ve ? (0, import_chunk_78g0060s.S)("closed_after_listen") : (0, import_chunk_78g0060s.S)("closed"), await G.close().catch(() => {
        }), Wt = Pt || Jt, pe = G instanceof uo && G.answeredProbeLate, Q = Fi(pt, "stderr of the stdio server before restarting it");
        else if ((Pt || Ut || Pu) && Ge !== void 0) {
          if ((0, import_chunk_k449cc64.He)(e, Ut ? `version negotiation probe timed out on the ${o.type ?? "http"} transport; reconnecting pinned legacy within the remaining budget` : `version negotiation probe failed on the ${o.type ?? "http"} transport; reconnecting pinned legacy`), Et = Ut ? (0, import_chunk_78g0060s.S)("probe_timeout") : (0, import_chunk_78g0060s.S)("probe_failed"), await G.close().catch(() => {
          }), Q = Ge(), on(o)) Ps(Q, $e);
        } else if (!_t(Ee) && er(Ee, o, G) && ar !== void 0) (0, import_chunk_k449cc64.He)(e, "server rejected elicitation form and url at initialize (Java MCP SDK 0.17.0 or older); reconnecting once without elicitation form and url"), Q = await xi(G, ar);
        else throw Ee;
        if (re = Ue(Bn), (0, import_chunk_ze4kt7fs.aSr)({ name: e }, Q), kn(Q), Bn.mode === "auto") Cl(Q, o, Oe), (0, import_chunk_m0xr8k74._hs)(Q, e);
        let Kr = Math.max(1e3, (0, import_chunk_98tkmkvx.bf)() - (P.clock.monotonicNow() - P.awakeStart)), Bi = re.connect(Q, { timeout: Bn.mode === "auto" ? Math.min(Kr, Ar()) : Kr }), dr = Q, Hi = false;
        try {
          await Promise.race([Bi, new Promise((ro, to) => {
            let Tn = setTimeout((Gr, Qo, cr) => {
              Hi = true, Gr.close().catch(() => {
              }), Qo(Dr(`MCP server "${cr}" connection timed out after ${(0, import_chunk_98tkmkvx.bf)()}ms`));
            }, Kr, dr, to, e);
            Bi.then(() => clearTimeout(Tn), () => clearTimeout(Tn));
          })]);
        } catch (ro) {
          let to = Hi, Tn = _t(ro);
          if (!Ht && !Tn && !to && ar !== void 0 && er(ro, o, dr)) {
            (0, import_chunk_k449cc64.He)(e, "server rejected elicitation form and url on the reconnect (Java MCP SDK 0.17.0 or older); reconnecting once more without elicitation form and url");
            let Qo = await xi(dr, ar);
            (0, import_chunk_ze4kt7fs.aSr)({ name: e }, Qo), kn(Qo), re = Ue({ mode: "legacy" });
            let cr = Math.max(1e3, (0, import_chunk_98tkmkvx.bf)() - (Date.now() - k));
            kt = false;
            try {
              await Yt(() => re.connect(Qo, { timeout: cr }), Qo, cr);
              return;
            } catch (Yr) {
              if (wn) throw Jo(o, h), Ee;
              if (Ut && !kt && !_t(Yr)) throw (0, import_chunk_k449cc64.He)(e, `the dial without elicitation form and url after the probe timeout failed (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Yr, o), 200)}); keeping the probe timeout as the error so the connect can be retried`), Ee;
              throw Yr;
            }
          }
          if (wn) Jo(o, h);
          if (wn || Vr) throw Ee;
          if (Ut && !Tn && !to) {
            let Qo = (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(ro, o), 200);
            throw (0, import_chunk_k449cc64.He)(e, `pinned-legacy retry after the probe timeout failed typed (${Qo}); preserving the timeout classification so the connect stays ladder-retryable`), Ee;
          }
          let Gr = ro instanceof import_chunk_racn22qq.Xa && ro.code === import_chunk_racn22qq.Ua.RequestTimeout && dr._anthropicProbeTimedOut === true;
          if (vt && !Tn && !to && ro instanceof import_chunk_racn22qq.Xa && (ro.code === import_chunk_racn22qq.Ua.EraNegotiationFailed || Gr)) {
            if (!Ye) throw Ee;
            throw (0, import_chunk_k449cc64.He)(e, `wire probe after discarding ${ht()} failed (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(ro, o), 200)}); booking a retryable connect timeout so the next dial re-probes prior-free with the legacy rescue`), Dr(`MCP server "${e}" connection timed out after ${(0, import_chunk_98tkmkvx.bf)()}ms`);
          }
          throw ro;
        }
      }
    };
    try {
      try {
        await vo(Q, De);
      } catch (X) {
        if (Tt === void 0 || Q instanceof import_chunk_racn22qq.Bor && Q.protocolVersion !== void 0 || !zh(X) || !(0, import_chunk_865at33z.b)("tengu_mcp_legacy_sse_fallback", true)) throw X;
        (0, import_chunk_k449cc64.He)(e, `initialize POST rejected (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(X, o), 200)}); trying legacy HTTP+SSE`);
        let ce = X.status === 405;
        await Q.close().catch(() => {
        });
        let ve = Ve;
        Yn(ve), Ve = void 0;
        let je = new AbortController(), ot = false, lt = Tt({ postMethodNotAllowed: ce, dialSignal: je.signal, dialConnected: () => ot });
        Q = lt, (0, import_chunk_ze4kt7fs.aSr)({ name: e }, lt), kn(lt), re = Ue({ mode: "legacy" });
        let Ee = ae?.sawAuthChallenge === true, Pt = Math.min(nu, Math.max(1e3, (0, import_chunk_98tkmkvx.bf)() - (Date.now() - k)));
        kt = false;
        try {
          await Yt(() => re.connect(lt, { timeout: Pt }), lt, Pt);
        } catch (Ut) {
          await lt.close().catch(() => {
          }), je.abort();
          let Jt = !Ee && ae?.sawAuthChallenge === true, Lo = Yl(Ut, Ut instanceof import_chunk_racn22qq.Uor ? Ut.code : void 0, Jt);
          if (kt && ce && Jt) throw (0, import_chunk_k449cc64.He)(e, "legacy HTTP+SSE stream GET answered with an auth challenge; its auth flow outran the fallback budget, so routing to needs-auth"), new import_chunk_racn22qq.YL(`MCP server "${e}" requires authorization: its legacy HTTP+SSE stream answered with an auth challenge and the authorization flow did not finish within the connect budget`);
          if (nl(Ut) !== void 0) throw Ut;
          if (kt || Ut instanceof import_chunk_racn22qq.Uor && !Lo || Lo && !ce) throw (0, import_chunk_k449cc64.He)(e, `legacy HTTP+SSE not confirmed (${(0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(Ut, o), 200)}); surfacing the POST failure`), Ve = ve, X;
          throw Ut;
        }
        ot = true, (0, import_chunk_k449cc64.He)(e, "connected over legacy HTTP+SSE");
      }
      if (Pe(), De?.mode === "auto" && Et === void 0 && Q instanceof uo && Q._anthropicProbeTimedOut === true && re.getProtocolEra() === "modern") Et = (0, import_chunk_78g0060s.S)("rediscovered_after_probe_timeout"), (0, import_chunk_k449cc64.He)(e, `stdio server rejected initialize after the version negotiation probe timed out, then answered a second server/discover on the same process; connected on ${re.getNegotiatedProtocolVersion()} without restarting it`);
      if (we) (0, import_chunk_k449cc64.id)(e, `Server stderr: ${we}`), we = "";
      if (Ce && wt) wt.off("data", Ce), wt.resume();
      let G = Date.now() - k;
      if ((0, import_chunk_k449cc64.He)(e, `Successfully connected (transport: ${o.type || "stdio"}) in ${G}ms`), it) {
        if (re.getProtocolEra?.() === "modern") (0, import_chunk_k449cc64.He)(e, "subscriptions/listen suppressed by the listen denylist; list_changed delivery is off for this connection");
      } else xm(re, e, o, Dt, ge);
      if ((o.type === "stdio" || !o.type) && Q instanceof uo && Q.pid) {
        if ((0, import_chunk_865at33z.CRo)("mcp_stdio", Q.pid), _e) (0, import_chunk_9zdrdv25.a4n)("mcp", Q.pid, () => (0, import_chunk_sjqze7qg.o5e)(e));
        if (be || _e) (0, import_chunk_sjqze7qg.J7a)(e, Q.pid);
      }
    } catch (G) {
      Pe();
      let X = G;
      if (X instanceof import_chunk_racn22qq.Xa && X.code === import_chunk_racn22qq.Ua.EraNegotiationFailed) {
        let je = X.data, ot = typeof je === "object" && je !== null && "cause" in je ? je.cause : X.cause;
        if (ot != null) X = ot;
      }
      let ce = Date.now() - k, ve = { negotiationMode: (0, import_chunk_78g0060s.fe)(De?.mode), probeFellBack: Et, listenSuppressed: it, negotiationDenylisted: Ke, discoverSource: Te, listingPriorBurned: Ye, ...(0, import_chunk_478m53m1.nRn)(tt) };
      if (Q instanceof uo && Q.overflowError) {
        if ((0, import_chunk_k449cc64.id)(e, Q.overflowError.message), we) (0, import_chunk_k449cc64.id)(e, `Server stderr: ${we}`);
        throw Q.overflowError;
      }
      if (o.type === "sse" && X instanceof Error) {
        (0, import_chunk_k449cc64.He)(e, `SSE Connection failed after ${ce}ms: ${(0, import_chunk_w578pjby._)({ url: (0, import_chunk_jbjjrhxt.bu)(o.url), error: (0, import_chunk_jbjjrhxt.gl)(X, o), errorType: X.constructor.name, stack: (0, import_chunk_jbjjrhxt.y7r)(X, o) === X ? X.stack : void 0 })}`), (0, import_chunk_k449cc64.id)(e, (0, import_chunk_jbjjrhxt.y7r)(X, o));
        let je = await cl({ name: e, serverRef: o, transportType: "sse", error: X, statusCode: X instanceof import_chunk_racn22qq.PO ? X.status : X.code, sawAuthChallenge: ae?.sawAuthChallenge === true, lacksHelperHeaders: se, hasUserAuthHeader: Ot, helperMintsAuthHeader: ct, cliOwnedBearer: It, useFirstPartyAuth: bt, firstPartyBearer: jt.last, authProvider: ae, negotiation: ve, roundEpoch: I, storageV5: h });
        if (je) return je;
      } else if (o.type === "http" && X instanceof Error) {
        let je = X;
        (0, import_chunk_k449cc64.He)(e, `HTTP Connection failed after ${ce}ms: ${(0, import_chunk_jbjjrhxt.gl)(X, o)} (code: ${je.code || "none"}, errno: ${je.errno || "none"})`), (0, import_chunk_k449cc64.id)(e, (0, import_chunk_jbjjrhxt.y7r)(X, o));
        let ot = await cl({ name: e, serverRef: o, transportType: "http", error: X, statusCode: X instanceof import_chunk_racn22qq.PO ? X.status : X.code, sawAuthChallenge: ae?.sawAuthChallenge === true, lacksHelperHeaders: se, hasUserAuthHeader: Ot, helperMintsAuthHeader: ct, cliOwnedBearer: It, useFirstPartyAuth: bt, firstPartyBearer: jt.last, authProvider: ae, negotiation: ve, roundEpoch: I, storageV5: h });
        if (ot) return ot;
      } else if (o.type === "claudeai-proxy" && X instanceof Error) {
        if ((0, import_chunk_k449cc64.He)(e, `claude.ai proxy connection failed after ${ce}ms: ${(0, import_chunk_jbjjrhxt.gl)(X, o)}`), !(0, import_chunk_v6x86eph.Lgt)(X)) (0, import_chunk_k449cc64.id)(e, (0, import_chunk_jbjjrhxt.y7r)(X, o));
        let je = X instanceof import_chunk_racn22qq.PO ? X.status : X.code;
        if ((0, import_chunk_v6x86eph.Lgt)(X)) {
          Yn(Ve), (0, import_chunk_y53wbr8a.a)("tengu_mcp_server_connection_failed", { processUptimeAtConnectStartMs: Ae, ...Tr(Ve), transportType: (0, import_chunk_78g0060s.S)("claudeai-proxy"), errorCode: (0, import_chunk_78g0060s.S)("CLAUDEAI_BEARER_REJECTED"), sdkGeneration: (0, import_chunk_78g0060s.f)((0, import_chunk_sppbt6xz.OG)()), v1Compat: (0, import_chunk_sppbt6xz.s1)(), negotiationMode: ve.negotiationMode, probeFellBack: ve.probeFellBack, listenSuppressed: ve.listenSuppressed, negotiationDenylisted: ve.negotiationDenylisted, discoverSource: ve.discoverSource, listingPriorBurned: ve.listingPriorBurned, ...yo(o, e), ...(0, import_chunk_54j6k3fn.rin)(o) }), (0, import_chunk_cqa9hrgx.l)("mcp_connect", "mcp_connect_claudeai_bearer_rejected");
          let ot = (0, import_chunk_3bjtjsgp.Uo)(e, o), lt = { name: e, type: "failed", config: o, error: X.message, errorCode: "CLAUDEAI_BEARER_REJECTED" }, Ee = (0, import_chunk_cwkztn5x.td)().connections.get(ot);
          if (Ee) Ee.then((Pt) => {
            if (Pt === lt && (0, import_chunk_cwkztn5x.td)().connections.get(ot) === Ee) (0, import_chunk_cwkztn5x.td)().connections.delete(ot);
          }, () => {
          });
          return lt;
        }
        if (je === 401 || je === 403) return li(e, o, "claudeai-proxy", void 0, false, false, I, ve, h);
      } else if (o.type === "sse-ide" || o.type === "ws-ide") (0, import_chunk_y53wbr8a.a)("tengu_mcp_ide_server_connection_failed", { connectionDurationMs: ce });
      if (F) F.close().catch(() => {
      });
      if (Q.close().catch(() => {
      }), we && !(0, import_chunk_w578pjby.c_)()) (0, import_chunk_k449cc64.id)(e, `Server stderr: ${we}`);
      throw X;
    }
    let _o = re.getServerCapabilities(), So = re.getServerVersion(), oo = (0, import_chunk_vfh414sa.RRn)(o), so = (0, import_chunk_vfh414sa.cBa)(oo, e) ?? re.getInstructions(), po = (0, import_chunk_mt7e13yk.hUe)(o), Do = Fl(so, e, po);
    if ((0, import_chunk_k449cc64.He)(e, `Connection established with capabilities: ${(0, import_chunk_w578pjby._)({ hasTools: !!_o?.tools, hasPrompts: !!_o?.prompts, hasResources: !!_o?.resources, hasResourceSubscribe: !!_o?.resources?.subscribe, serverVersion: So || "unknown", protocolEra: re.getProtocolEra(), negotiatedProtocolVersion: re.getNegotiatedProtocolVersion() })}`), (0, import_chunk_w578pjby.t)(`[MCP] Server "${e}" connected with subscribe=${!!_o?.resources?.subscribe}`), re.setRequestHandler("elicitation/create", async (G) => ((0, import_chunk_k449cc64.He)(e, `Elicitation request received during initialization: ${(0, import_chunk_jnzfg7cq.sJt)(G.params)}`), { action: "cancel" })), o.type === "sse-ide" || o.type === "ws-ide") {
      let G = Date.now() - k;
      (0, import_chunk_y53wbr8a.a)("tengu_mcp_ide_server_connection_succeeded", { connectionDurationMs: G, serverVersion: (0, import_chunk_865at33z.Ad)(So?.version) }), (0, import_chunk_bzyb60p0.t3a)(re).catch((X) => {
        (0, import_chunk_k449cc64.id)(e, `Failed to send ide_connected notification: ${(0, import_chunk_jbjjrhxt.gl)(X, o)}`);
      });
    }
    let zt = Date.now(), Vt = false, Ft = re.onerror, no = re.onclose, io = 3, Ao = o.type === "http" && (0, import_chunk_2mwshd9r.lRt)(o.url), xt = { consecutiveErrors: 0, activeCallWatchdogs: /* @__PURE__ */ new Set(), callsInProgress: 0, pendingElicitations: 0, lastElicitationClosedAt: 0, dialledUnder: (0, import_chunk_ddfyyyy7.J8e)() };
    Ne.current = xt;
    let Eo = false, mo = (G) => {
      if (Eo) return;
      Eo = true, xt.closeReason = G, (0, import_chunk_k449cc64.He)(e, `Closing transport (${G})`), re.close().catch((X) => {
        (0, import_chunk_k449cc64.He)(e, `Error during close: ${(0, import_chunk_jbjjrhxt.gl)(X, o)}`);
      });
    }, co = Ge;
    if (Be === "http" && re.getProtocolEra() === "legacy" && co !== void 0) xt.askForNewHandshake = async (G, X) => {
      let ce = () => G() || (xt.callsInProgress ?? 0) > 0 || xt.pendingElicitations > 0 || re.transport === void 0;
      if (ce()) return "busy";
      let ve = Br(Be, o);
      if (ve.mode !== "auto") return "not_now";
      let je;
      try {
        je = new import_chunk_racn22qq.X9o({ name: "claude-code", version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION ?? "unknown" }, { versionNegotiation: { mode: { pin: import_chunk_hy0sycbj.Bre }, probe: ve.probe } }), await je.connect(co({ withoutOAuth: X }));
      } catch {
        return "not_now";
      } finally {
        await je?.close().catch(() => {
        });
      }
      if (ce()) return "not_now";
      if (X && "url" in o) (0, import_chunk_qdcbcsg7.mt)().dialedWithoutOAuth.set(e, o.url);
      return mo("asking for the newer protocol again"), "closed";
    };
    let Vo = oe?.kind, Kt = Vo !== void 0 && Rt, wo = Vo !== void 0, Co = Kt, Io = /* @__PURE__ */ new Map(), Ho = false, lo, Me = () => {
      if (wo = false, Io.clear(), lo !== void 0) clearTimeout(lo), lo = void 0;
    }, St = (G) => Vo === "modern" || G === "rpc_era" ? G : void 0, qt = (G) => {
      if ((xt.callsInProgress ?? 0) > 0) xt.onCallsIdle = () => qt(G);
      else if (re.transport !== void 0) mo(G);
    }, ut = ye !== void 0, eo = "initialized notification failed";
    if (ye !== void 0) Yh(ye, (0, import_chunk_98tkmkvx.bf)()).then((G) => {
      if (ut = false, G === "answered") (0, import_chunk_cqa9hrgx.u)("mcp_tool_port_initialized_notification");
      else if (G !== "aborted") (0, import_chunk_cqa9hrgx.l)("mcp_tool_port_initialized_notification", G), qt(eo);
    });
    let Qt = (G, X, ce, ve = false) => {
      Me(), Co = false, yl(o, Vo, h), (0, import_chunk_k449cc64.He)(e, `${X} on a connection built from ${ht()} was rejected (${ce}); discarding it for this server \u2014 this connection closes once no tool call or background task is using it, and the next dial probes server/discover on the wire`), (0, import_chunk_y53wbr8a.a)("tengu_mcp_listing_prior_rejected", { phase: ve ? (0, import_chunk_78g0060s.S)("post_window") : (0, import_chunk_78g0060s.S)("post_connect"), priorKind: (0, import_chunk_78g0060s.fe)(Vo), priorSource: Te, reason: (0, import_chunk_78g0060s.f)(G), transportType: (0, import_chunk_78g0060s.f)(o.type ?? "stdio"), ...yo(o, e) }), setTimeout(qt, 0, "discover prior rejected");
    }, Bt = () => {
      if (lo !== void 0) clearTimeout(lo);
      lo = setTimeout(() => {
        if (Me(), Kt && Ho && re.transport !== void 0) (0, import_chunk_k449cc64.He)(e, `tools/list on a connection built from ${ht()} got no result in time; forgetting the verdict, so the next dial probes server/discover`), Jo(o, h);
      }, (0, import_chunk_98tkmkvx.bf)()), lo.unref();
    }, bo = (G, X, ce) => {
      if (On(G) && !X) {
        if (Me(), Kt && ce !== void 0) (0, import_chunk_k449cc64.He)(e, `${G} on a connection built from ${ht()} was refused (${ce}); forgetting the verdict, so the next dial probes server/discover`), Jo(o, h);
      }
    };
    if (wo && re.transport) {
      Bt();
      let G = re.transport, X = G.send.bind(G);
      G.send = async (ce, ve) => {
        let je = wo && (0, import_chunk_racn22qq.Z_e)(ce) ? ce : void 0;
        if (je !== void 0) {
          if (Io.set(je.id, je.method), On(je.method)) Ho = true, Bt();
        }
        try {
          await X(ce, ve);
        } catch (ot) {
          if (je !== void 0 && wo) {
            let lt = je.method;
            Io.delete(je.id);
            let Ee = Kt && On(lt) && Vh(ot) ? "rpc_era" : Qs(ot, lt), Pt = St(Ee);
            if (Pt !== void 0) Qt(Pt, lt, (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_jbjjrhxt.gl)(ot, o), 200));
            else bo(lt, ii(ot), Ee);
          }
          throw ot;
        }
      };
    }
    re.onerror = (G) => {
      let X = o.type || "stdio";
      if (X === "stdio" && G instanceof SyntaxError) {
        (0, import_chunk_k449cc64.id)(e, `Ignoring non-JSON line on stdout: ${G.message}`);
        return;
      }
      if (G instanceof import_chunk_tgj1b0ts.t7r) return;
      if (X === "stdio" && G instanceof qn) {
        if ((0, import_chunk_k449cc64.id)(e, G.message), Vt = true, mo("stdout overflow"), Ft) Ft(G);
        return;
      }
      if ((X === "http" || X === "claudeai-proxy") && G instanceof en) {
        if ((0, import_chunk_k449cc64.id)(e, `sent a response larger than ${Math.round(pn / 1024 / 1024)}MB. Claude Code stopped reading it and failed the request it answered; the connection stays open.`), Ft) Ft(G);
        return;
      }
      if ((X === "sse" || X === "sse-ide" || X === "http" || X === "claudeai-proxy") && G.message.includes(ps)) {
        if ((0, import_chunk_k449cc64.id)(e, G.message), Vt = true, mo("http body overflow"), Ft) Ft(G);
        return;
      }
      if ((X === "sse" || X === "http" || X === "claudeai-proxy") && G instanceof SyntaxError) {
        if (Vt = true, fo(), mo(ae?.authChallengeOpen === true && xt.activeCallWatchdogs.size <= 1 ? "malformed message after an auth challenge" : "malformed JSON-RPC message (response truncated)"), Ft) Ft(G);
        return;
      }
      let ce = Date.now() - zt;
      if (Vt = true, (0, import_chunk_k449cc64.He)(e, `${X.toUpperCase()} connection dropped after ${Math.floor(ce / 1e3)}s uptime`), G.message) {
        let ve = Ih.find(([je]) => G.message.includes(je))?.[1];
        (0, import_chunk_k449cc64.He)(e, ve ?? (0, import_chunk_jbjjrhxt.aBa)(G, o));
      }
      if ((X === "http" || X === "claudeai-proxy") && re.transport?.sessionId !== void 0 && Ir(G)) {
        if ((0, import_chunk_k449cc64.He)(e, "MCP session expired (server no longer recognizes session ID), triggering reconnection"), ut) eo = "session expired", xt.closeReason = eo, fo(), qt(eo);
        else mo("session expired");
        if (Ft) Ft(G);
        return;
      }
      if ((X === "http" || X === "claudeai-proxy") && re.transport?.sessionId !== void 0 && G instanceof import_chunk_racn22qq.PO && G.status === 404 && Nl(G)) (0, import_chunk_cqa9hrgx.l)("mcp_session_recovery", "get_stream_404_not_reinit");
      if (X === "sse" || X === "http" || X === "claudeai-proxy") {
        if (G.message.includes("Maximum reconnection attempts")) {
          if ((0, import_chunk_k449cc64.He)(e, "SSE GET-stream reconnection exhausted; leaving transport up (POST still works)"), xt.messageStreamLost = true, xt.messageStreamLostAtMs ??= performance.now(), xt.consecutiveErrors = 0, fo(), Ft) Ft(G);
          return;
        }
        if (Mm(G)) {
          if (xt.consecutiveErrors += Ao ? 0 : 1, fo(), (0, import_chunk_k449cc64.He)(e, `Terminal connection error ${xt.consecutiveErrors}/${io}`), xt.consecutiveErrors >= io) xt.consecutiveErrors = 0, mo("max consecutive terminal errors");
        } else xt.consecutiveErrors = 0;
      }
      if (Ft) Ft(G);
    };
    let $o = o.type === "http" && (0, import_chunk_2mwshd9r.lRt)(o.url);
    if ($o && re.transport) {
      let G = re.transport, X = G.send.bind(G);
      G.send = async (ce, ve) => {
        let je = (0, import_chunk_racn22qq.Z_e)(ce) && ce.method === "tools/call" ? ce.params?._meta : void 0, ot = je?.["claudecode/toolUseId"], lt = je?.[import_chunk_hy0sycbj.Fws], Ee = (0, import_chunk_racn22qq.Z_e)(ce) && je !== void 0 && lt !== void 0 ? { ...ce, params: { ...ce.params, _meta: (0, import_chunk_y8kqnbqt.wE)(je, import_chunk_hy0sycbj.Fws) } } : ce, Pt = ot !== void 0 ? [...xt.activeCallWatchdogs].find((Jt) => Jt.toolUseId === ot) : lt !== void 0 ? [...xt.activeCallWatchdogs].find((Jt) => Jt.mark === lt) : void 0;
        if (!(0, import_chunk_racn22qq.Z_e)(ce) || Pt === void 0) return X(Ee, ve);
        let { id: Ut } = ce;
        Pt.requestSent?.(Ut);
        try {
          await X(Ee, { ...ve, onRequestStreamEnd: () => {
            ve?.onRequestStreamEnd?.(), Pt.answerStreamEnded?.(Ut);
          } });
        } catch (Jt) {
          if (Jt instanceof Error && (Ir(Jt) || import_chunk_ag73x1p3.usr.has((0, import_chunk_jv7av99m.w)(Jt) ?? "") || import_chunk_865at33z.noe.has((0, import_chunk_jv7av99m.w)(Jt) ?? ""))) Pt.requestNotRun?.(Ut);
          throw Jt;
        }
        Pt.requestTaken?.(Ut);
      };
    }
    if ((o.type === "http" || o.type === "claudeai-proxy") && re.transport) xt.toolCallSends = (0, import_chunk_ag73x1p3.wBa)(re.transport, Ir, xt.activeCallWatchdogs);
    if (re.transport) {
      let G = re.transport.onmessage;
      re.transport.onmessage = (X, ce) => {
        if (xt.consecutiveErrors !== 0) xt.consecutiveErrors = 0;
        if ($o && ((0, import_chunk_racn22qq.e4e)(X) || (0, import_chunk_racn22qq.t4e)(X)) && X.id !== void 0) for (let ve of xt.activeCallWatchdogs) ve.requestAnswered?.(X.id);
        if (wo && ((0, import_chunk_racn22qq.e4e)(X) || (0, import_chunk_racn22qq.t4e)(X)) && X.id !== void 0) {
          let ve = Io.get(X.id);
          if (ve !== void 0) if (Io.delete(X.id), (0, import_chunk_racn22qq.e4e)(X)) {
            if (On(ve)) Me();
          } else {
            let je = _i(X.error.code, ve), ot = St(je);
            if (ot !== void 0) {
              G?.(X, ce), Qt(ot, ve, `JSON-RPC ${X.error.code}`);
              return;
            }
            bo(ve, ii(new import_chunk_racn22qq.ef(X.error.code, X.error.message)), je);
          }
        } else if (Co && re.transport !== void 0 && (0, import_chunk_racn22qq.t4e)(X) && X.id !== void 0 && _i(X.error.code, "") === "rpc_era") {
          G?.(X, ce), Qt("rpc_era", "a later request", `JSON-RPC ${X.error.code}`, true);
          return;
        }
        G?.(X, ce);
      };
    }
    re.onclose = () => {
      let G = Date.now() - zt, X = o.type ?? "unknown";
      (0, import_chunk_k449cc64.He)(e, `${X.toUpperCase()} connection closed after ${Math.floor(G / 1e3)}s (${Vt ? "with errors" : "cleanly"})`), Ks(e, o, { status: "disconnected", durationMs: G });
      let ce = (0, import_chunk_3bjtjsgp.Uo)(e, o);
      if ((0, import_chunk_cwkztn5x.td)().liveClients.delete(re), (0, import_chunk_cwkztn5x.td)().toolLists.delete(ce), (0, import_chunk_cwkztn5x.td)().resourceLists.delete(ce), (0, import_chunk_cwkztn5x.td)().resourceTemplateLists.delete(ce), (0, import_chunk_cwkztn5x.td)().commandLists.delete(ce), Ro.invalidateMcpSkillsForServer(ce), (0, import_chunk_cwkztn5x.td)().connections.delete(ce), (0, import_chunk_k449cc64.He)(e, "Cleared connection cache for reconnection"), no) no();
    };
    let jo = async () => {
      if (F) {
        try {
          await F.close();
        } catch (G) {
          (0, import_chunk_k449cc64.He)(e, `Error closing in-process server: ${G}`);
        }
        try {
          await re.close();
        } catch (G) {
          (0, import_chunk_k449cc64.He)(e, `Error closing client: ${(0, import_chunk_jbjjrhxt.gl)(G, o)}`);
        }
        return;
      }
      if (Q instanceof uo) try {
        let G = Q.pid;
        if (Q.serverProcess && (0, import_chunk_cg8dqz0a.x)() === "windows") (0, import_chunk_k449cc64.He)(e, "Closing MCP server stdin"), await ms(Q.serverProcess);
        else if (G) {
          (0, import_chunk_k449cc64.He)(e, "Sending SIGINT to MCP server process");
          try {
            process.kill(G, "SIGINT");
          } catch (X) {
            (0, import_chunk_k449cc64.He)(e, `Error sending SIGINT: ${X}`);
            return;
          }
          await new Promise(async (X) => {
            let ce = false, ve = () => {
              if (ce) return;
              ce = true, clearInterval(ot), clearTimeout(lt), X();
            }, je = (Ee) => {
              try {
                return process.kill(Ee, 0), true;
              } catch {
                return false;
              }
            }, ot = setInterval((Ee, Pt, Ut, Jt) => {
              if (!Ee(Pt)) (0, import_chunk_k449cc64.He)(Ut, "MCP server process exited cleanly"), Jt();
            }, 50, je, G, e, ve), lt = setTimeout((Ee, Pt) => {
              (0, import_chunk_k449cc64.He)(Ee, "Cleanup timeout reached, stopping process monitoring"), Pt();
            }, 600, e, ve);
            try {
              if (await (0, import_chunk_5appeerh.K)(100), !ce) {
                if (!je(G)) {
                  ve();
                  return;
                }
                (0, import_chunk_k449cc64.He)(e, "SIGINT failed, sending SIGTERM to MCP server process");
                try {
                  process.kill(G, "SIGTERM");
                } catch (Ee) {
                  (0, import_chunk_k449cc64.He)(e, `Error sending SIGTERM: ${Ee}`), ve();
                  return;
                }
                if (await (0, import_chunk_5appeerh.K)(400), !ce) if (!je(G)) ve();
                else {
                  (0, import_chunk_k449cc64.He)(e, "SIGTERM failed, sending SIGKILL to MCP server process");
                  try {
                    process.kill(G, "SIGKILL");
                  } catch (Ee) {
                    (0, import_chunk_k449cc64.He)(e, `Error sending SIGKILL: ${Ee}`);
                  }
                }
              }
              ve();
            } catch {
              ve();
            }
          });
        }
      } catch (G) {
        (0, import_chunk_k449cc64.He)(e, `Error terminating process: ${G}`);
      }
      try {
        await re.close();
      } catch (G) {
        (0, import_chunk_k449cc64.He)(e, `Error closing client: ${(0, import_chunk_jbjjrhxt.gl)(G, o)}`);
      }
    }, ko = (0, import_chunk_w578pjby.Ct)(jo);
    if (Q instanceof uo) Q.handOffExitCleanup();
    let zo = async () => {
      (0, import_chunk_cwkztn5x.td)().liveClients.delete(re), ko?.(), await jo();
    };
    if ((0, import_chunk_bzyb60p0.xmi)(e, o, re.transport), (0, import_chunk_cwkztn5x.td)().liveClients.add(re), (0, import_chunk_7625rswd.Spl)(re, e, o, ke, Gt), (0, import_chunk_0a69wnzr.mkt)() !== z) re.sendRootsListChanged().catch(() => {
    });
    let qo = Yo(o);
    if (ge === "wire" && re.getProtocolEra() === "modern") Jo(o, h);
    let Fn = Q instanceof uo && Q._anthropicProbeTimedOut === true, Go = pe || Q instanceof uo && Q.answeredProbeLate;
    if (qo !== void 0 && !(o.type === "claudeai-proxy" && o.stateless === true) && ge === "wire" && (Wt || (Mt || Fn) && Et === void 0) && re.getProtocolEra() === "legacy" && !(0, import_chunk_qdcbcsg7.mt)().burnedListingDiscoverPriors.has(qo)) {
      if (Go) (0, import_chunk_k449cc64.He)(e, "stdio server answered the server/discover probe after its bound, so it was only slow to start and speaks the new protocol; not remembering it as a legacy peer"), Jo(o, h);
      else if (Ss(o, h), Fn && Q instanceof uo) Q.onAnsweredProbeLate = () => {
        (0, import_chunk_k449cc64.He)(e, "stdio server answered the server/discover probe after it had connected legacy; it speaks the new protocol, so forgetting it as a legacy peer"), Jo(o, h);
      };
    }
    (0, import_chunk_qdcbcsg7.mt)().searchRedialFailures.delete(e);
    let Wo = Date.now() - k;
    Ks(e, o, { status: "connected", durationMs: Wo });
    let Ko = so?.length ?? 0;
    if (Yn(Ve), (0, import_chunk_y53wbr8a.a)("tengu_mcp_server_connection_succeeded", { connectionDurationMs: Wo, processUptimeAtConnectStartMs: Ae, ...Tr(Ve), instructionsLength: Ko, instructionsTruncated: Ko > po, transportType: (0, import_chunk_78g0060s.f)(o.type ?? "stdio"), negotiatedLegacySse: o.type === "http" && Q instanceof import_chunk_racn22qq.BYr, sdkGeneration: (0, import_chunk_78g0060s.f)((0, import_chunk_sppbt6xz.OG)()), v1Compat: (0, import_chunk_sppbt6xz.s1)(), negotiationMode: (0, import_chunk_78g0060s.fe)(De?.mode), scope: (0, import_chunk_78g0060s.f)(o.scope), protocolEra: (0, import_chunk_78g0060s.fe)(re.getProtocolEra()), negotiatedProtocolVersion: Lg(re.getNegotiatedProtocolVersion()), probeFellBack: Et, bareElicitationRetry: Ht, discoverSource: Te, listingPriorBurned: Ye, listenSuppressed: it, negotiationDenylisted: Ke, ...(0, import_chunk_478m53m1.nRn)(tt), isPlugin: o.pluginSource !== void 0, ...(0, import_chunk_54j6k3fn.rin)(o), totalServers: r?.totalServers, stdioCount: r?.stdioCount, sseCount: r?.sseCount, httpCount: r?.httpCount, sseIdeCount: r?.sseIdeCount, wsIdeCount: r?.wsIdeCount, ...yo(o, e) }), tt !== void 0 && !(0, import_chunk_qdcbcsg7.mt)().toolsListAhead.has(re)) (0, import_chunk_478m53m1.Sri)(re, Ke);
    if (Ve !== void 0) {
      let G = Ve, X = re.getProtocolEra(), ce = (0, import_chunk_qdcbcsg7.mt)().toolsListAhead.get(re);
      if (Id(re, (ve) => {
        (0, import_chunk_y53wbr8a.a)("tengu_mcp_first_tools_list", { ...ve, messageStreamGetOutcome: (0, import_chunk_78g0060s.f)(G.messageStreamGetOutcome), processUptimeAtConnectStartMs: Ae, keepAliveDisabled: G.keepAliveDisabled, transportType: (0, import_chunk_78g0060s.f)(o.type ?? "stdio"), sdkGeneration: (0, import_chunk_78g0060s.f)((0, import_chunk_sppbt6xz.OG)()), protocolEra: (0, import_chunk_78g0060s.fe)(X), negotiationDenylisted: Ke, ...(0, import_chunk_478m53m1.nRn)(ce), mcpServerKeyHash: (0, import_chunk_865at33z.z4)(e) });
      }), ce !== void 0) Zh(re, e, G, { ...(0, import_chunk_478m53m1.nRn)(ce), negotiationDenylisted: Ke });
    }
    if ((0, import_chunk_cqa9hrgx.u)("mcp_connect"), (0, import_chunk_42tcgre6.q)("info", "mcp_connect_complete", { transport: H, duration_ms: Wo }), ae) (0, import_chunk_qdcbcsg7.mt)().clientAuthProviders.set(re, ae);
    if (L) (0, import_chunk_qdcbcsg7.mt)().unaskedClients.add(re);
    (0, import_chunk_qdcbcsg7.mt)().refusedRefreshServers.delete(e), (0, import_chunk_qdcbcsg7.mt)().clientFirstPartyBearers.set(re, jt);
    let Un = { name: e, client: Dl(re), type: "connected", capabilities: _o ?? {}, serverInfo: So, instructions: Do, negotiatedProtocolVersion: re.getNegotiatedProtocolVersion(), protocolEra: re.getProtocolEra(), config: o, cleanup: zo, transportErrorState: xt };
    (0, import_chunk_yrpmp1hk.xMe)(e);
    try {
      (0, import_chunk_f9x2f6cx.tda)()?.(Un);
    } catch (G) {
      (0, import_chunk_k449cc64.id)(e, `connected-client wiring failed (placeholder retained, adoption will retry): ${(0, import_chunk_jv7av99m.d)(G)}`);
    }
    return Un;
  } catch (Ne) {
    let yt = Date.now() - k;
    if ((0, import_chunk_w578pjby.c_)()) {
      if ((0, import_chunk_k449cc64.He)(e, `Connection abandoned after ${yt}ms (Claude Code is shutting down)`), F) F.close().catch(() => {
      });
      return { name: e, type: "failed", config: o, error: "Claude Code is shutting down", errorCode: "SHUTTING_DOWN" };
    }
    let xe = (0, import_chunk_jbjjrhxt.gl)(Ne, o), It = Ne instanceof Error ? Ne.cause : void 0, Ot = (Ne instanceof import_chunk_racn22qq.PO ? Ne.status : void 0) ?? (Ne && typeof Ne === "object" && "code" in Ne ? Ne.code : void 0) ?? (It && typeof It === "object" && "code" in It ? It.code : void 0), se = Ne instanceof import_chunk_tgn73pvk.Sie ? "ISSUER_ECHO_DENIED" : Ot !== void 0 ? String(Ot) : void 0, ke = nl(Ne);
    if (ke !== void 0) xe = ke;
    if (ke === import_chunk_271xsh6x.Pit) se = "POLICY_BLOCKED";
    if (Ne instanceof import_chunk_racn22qq.Xa && Ne.code === import_chunk_racn22qq.Ua.RequestTimeout && (0, import_chunk_865at33z.b)("tengu_mcp_connect_timeout_retry", true)) se = "CONNECT_TIMEOUT";
    if (o.type === "http" && se === "404" && Q?.sessionId === void 0 && !(0, import_chunk_2mwshd9r.Bct)(o)) se = "ENDPOINT_NOT_FOUND", xe = `MCP endpoint not found at ${(0, import_chunk_538r8e0n.gTe)(e, o, { detail: "origin" }) ?? "(unparseable url)"}. Check the URL in your MCP config.`;
    let ct = se === "CONNECT_TIMEOUT" && R !== void 0 ? Da(e, R) : void 0;
    if (ct !== void 0) se = Zo, xe = ct;
    if (xe = (0, import_chunk_538r8e0n.Nm)(e, o, xe), !Ht && er(Ne, o, Q)) xe = $h;
    Ks(e, o, { status: "failed", durationMs: yt, errorCode: se, error: xe });
    let bt = se === "ENOENT" && (o.type === "stdio" || o.type === void 0) ? "mcp_connect_spawn_enoent" : se === "ENDPOINT_NOT_FOUND" ? "mcp_connect_endpoint_not_found" : void 0;
    if (bt !== void 0) (0, import_chunk_cqa9hrgx.m)("mcp_connect", bt);
    else {
      let Gt = se === "ECONNREFUSED" ? "mcp_connect_refused" : se === Zo ? "mcp_connect_suspended" : xe.includes("timed out") ? "mcp_connect_timeout" : "mcp_connect_failed";
      (0, import_chunk_cqa9hrgx.l)("mcp_connect", `${Gt}_${o.type ?? "stdio"}`);
    }
    if (Yn(Ve), (0, import_chunk_y53wbr8a.a)("tengu_mcp_server_connection_failed", { connectionDurationMs: yt, processUptimeAtConnectStartMs: Ae, ...Tr(Ve), negotiationMode: (0, import_chunk_78g0060s.fe)(De?.mode), listenSuppressed: it, negotiationDenylisted: Ke, probeFellBack: Et, bareElicitationRetry: Ht, v1Compat: (0, import_chunk_sppbt6xz.s1)(), discoverSource: Te, listingPriorBurned: Ye, ...(0, import_chunk_478m53m1.nRn)(tt), errorCode: iu(se), errorClassName: (0, import_chunk_jv7av99m.E3t)(Ne), errorMessageHash: (0, import_chunk_myvyhcm0.Zn)((0, import_chunk_qbrmmydq.xOr)(xe)), totalServers: r?.totalServers || 1, stdioCount: r?.stdioCount || (o.type === "stdio" ? 1 : 0), sseCount: r?.sseCount || (o.type === "sse" ? 1 : 0), httpCount: r?.httpCount || (o.type === "http" ? 1 : 0), sseIdeCount: r?.sseIdeCount || (o.type === "sse-ide" ? 1 : 0), wsIdeCount: r?.wsIdeCount || (o.type === "ws-ide" ? 1 : 0), transportType: (0, import_chunk_78g0060s.f)(o.type ?? "stdio"), sdkGeneration: (0, import_chunk_78g0060s.f)((0, import_chunk_sppbt6xz.OG)()), scope: (0, import_chunk_78g0060s.f)(o.scope), isPlugin: o.pluginSource !== void 0, ...(0, import_chunk_54j6k3fn.rin)(o), ...yo(o, e) }), (0, import_chunk_k449cc64.He)(e, `Connection failed after ${as(P)}${se !== void 0 ? ` (${se})` : ""}: ${xe}`), (0, import_chunk_k449cc64.id)(e, `Connection failed${se !== void 0 ? ` (${se})` : ""}: ${xe}`), (0, import_chunk_42tcgre6.q)("error", "mcp_connect_failed", { transport: H, duration_ms: yt, ...se === "CONNECT_TIMEOUT" && { reason: "timeout" }, ...se === Zo && { reason: "suspended" } }), F) F.close().catch(() => {
    });
    let jt = Yo(o);
    if (jt !== void 0 && De?.mode === "auto" && ge === "wire" && Q instanceof uo && Q._anthropicProbeTimedOut === true && (kt || Ne instanceof import_chunk_racn22qq.Xa && Ne.code === import_chunk_racn22qq.Ua.RequestTimeout) && se !== Zo && !(0, import_chunk_qdcbcsg7.mt)().burnedListingDiscoverPriors.has(jt)) if (Q.answeredProbeLate) (0, import_chunk_k449cc64.He)(e, "stdio server answered the server/discover probe after its bound but not initialize; it speaks the new protocol, so not remembering it as a legacy peer");
    else Ss(o, h);
    if (se !== Zo) Sl(e, o, h);
    let Re = se === "ERR_PROXY_TUNNEL" ? [Ne, It].map((Gt) => Gt && typeof Gt === "object" && "status" in Gt ? Gt.status : void 0).find((Gt) => typeof Gt === "number") : void 0;
    return { name: e, type: "failed", config: o, error: xe, errorCode: se, notForwardedMessage: "url" in o && (0, import_chunk_2mwshd9r.Cze)(o.url) ? (0, import_chunk_538r8e0n.Nm)(e, o, (0, import_chunk_yz5b8aaa.mHl)(Ne) ?? "") || void 0 : void 0, notForwardedReason: "url" in o && (0, import_chunk_2mwshd9r.Cze)(o.url) ? (0, import_chunk_yz5b8aaa.hHl)(Ne) : void 0, ...Re !== void 0 && { proxyConnectStatus: Re }, ...se === void 0 && ae?.sawAuthChallenge === true && await (0, import_chunk_yz5b8aaa.l9i)(e, o, k) };
  }
}, import_chunk_3bjtjsgp.Uo, () => (0, import_chunk_cwkztn5x.td)().connections, (e, o, [r, h, , g]) => (0, import_chunk_vp3hv9ky.q$a)(() => Na(e, o, () => Sl(r, h, g)), o, r, h));
function eg() {
  return Br("http").mode === "auto" ? "modern" : "legacy";
}
function dn() {
  if ((0, import_chunk_22v99jwc.ZDt)(), (0, import_chunk_yrpmp1hk.J$a)(eg), (0, import_chunk_yrpmp1hk.Q$a)()) return;
  (0, import_chunk_yrpmp1hk.X$a)(fc);
}
function Oi() {
  if ((0, import_chunk_f9x2f6cx.vse)()) return;
  (0, import_chunk_f9x2f6cx.eda)(rn);
}
function Ci(e, o) {
  try {
    import_chunk_htn4d0yq.c0t.emit(e, o);
  } catch (r) {
    (0, import_chunk_k449cc64.He)(e, `cached-row adopt subscriber threw: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
}
function Ii(e, o) {
  if (o) (0, import_chunk_cqa9hrgx.l)("mcp_discovery_cache", "lazy_dial_failed");
  (0, import_chunk_cwkztn5x.td)().settledCachedDialFailures.set((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), { failure: e, ownStrike: o });
  try {
    import_chunk_htn4d0yq._Jt.emit(e, o);
  } catch (r) {
    (0, import_chunk_k449cc64.He)(e.name, `cached-row dial-failed subscriber threw: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
}
function $P(e, o) {
  let r = (0, import_chunk_cwkztn5x.td)().settledCachedDialFailures, h = (0, import_chunk_3bjtjsgp.Uo)(e, o), g = r.get(h);
  return r.delete(h), g;
}
async function tg(e, o) {
  let r = go.cache?.get?.((0, import_chunk_3bjtjsgp.Uo)(e, o));
  return r !== void 0 && await ln(r) === void 0;
}
function Hr(e, o, r) {
  let h = (0, import_chunk_3bjtjsgp.Uo)(e, o);
  if ((0, import_chunk_cwkztn5x.td)().refusedCachedRows.has(h)) return;
  if ((0, import_chunk_cwkztn5x.td)().refusedCachedRows.add(h), r === "policy") $r(e, o).catch(() => {
  });
  Ii({ name: e, type: "failed", config: o, ...r === "policy" ? (0, import_chunk_bzyb60p0.iw)("managed-policy", e, o) : { error: import_chunk_271xsh6x.fan, errorCode: "DISABLED" } }, false);
}
async function Tl(e, o) {
  let r = (0, import_chunk_3bjtjsgp.Uo)(e, o), h = (0, import_chunk_cwkztn5x.td)().connections.get(r);
  if (!h) return false;
  if ((await ln(h))?.type !== "connected") return false;
  return !(0, import_chunk_qdcbcsg7.mt)().swrRefreshDialsInFlight.has(h);
}
async function og(e, o) {
  let r = (0, import_chunk_3bjtjsgp.Uo)(e, o), h = (0, import_chunk_cwkztn5x.td)().connections.get(r);
  if (!h) return;
  let g = await ln(h);
  if (g === void 0 || g.type === "connected") return;
  if ((0, import_chunk_cwkztn5x.td)().connections.get(r) === h) (0, import_chunk_cwkztn5x.td)().connections.delete(r);
}
async function ln(e) {
  return (0, import_chunk_5appeerh.me)(e.catch(() => {
    return;
  }), 0);
}
async function Nn(e, o) {
  let r = go.cache?.get?.((0, import_chunk_3bjtjsgp.Uo)(e, o));
  return r === void 0 ? void 0 : ln(r);
}
function Li(e) {
  (0, import_chunk_cwkztn5x.td)().connections.delete(e), (0, import_chunk_cwkztn5x.td)().toolLists.delete(e), (0, import_chunk_cwkztn5x.td)().resourceLists.delete(e), (0, import_chunk_cwkztn5x.td)().resourceTemplateLists.delete(e), (0, import_chunk_cwkztn5x.td)().commandLists.delete(e), Ro.invalidateMcpSkillsForServer(e);
}
async function Xo(e, o, r) {
  dn();
  let h = (0, import_chunk_3bjtjsgp.Uo)(e, o), g = (0, import_chunk_cwkztn5x.td)().connections.get(h);
  if (g) {
    let y = await ln(g);
    if (y === void 0) ng(e, o, g);
    else if (y.type === "connected") {
      if (r !== void 0 && (0, import_chunk_cwkztn5x.td)().connections.get(h) === g && Xt(y.client).transport !== void 0 && (y.transportErrorState?.activeCallWatchdogs.size ?? 0) > 0) {
        r.connection = y;
        return;
      }
      await Po(y);
    }
    let M = (0, import_chunk_cwkztn5x.td)().connections.get(h);
    if (M !== void 0 && M !== g) return;
  }
  Li(h);
}
function Po(e) {
  Xt(e.client).onclose = void 0;
  let o = (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), r = go.cache?.get?.(o);
  if (r !== void 0) ln(r).then((h) => {
    if ((0, import_chunk_2qx36shh.mUe)(h, e) && go.cache?.get?.(o) === r) Li(o);
  });
  return e.cleanup().catch(() => {
  });
}
function ng(e, o, r) {
  dn();
  let h = (0, import_chunk_3bjtjsgp.Uo)(e, o), g = (0, import_chunk_cwkztn5x.td)().connections.get(h);
  if (r !== void 0 && g !== r) return;
  if (g) (0, import_chunk_qdcbcsg7.mt)().supersededDials.add(g);
  if (Li(h), g) g.then((y) => {
    if (y.type !== "connected") return;
    Po(y);
  }, () => {
  });
}
async function $r(e, o) {
  dn(), await (0, import_chunk_yrpmp1hk.noi)(e, o);
}
async function jP(e, o) {
  let r = (0, import_chunk_3bjtjsgp.Uo)(e, o), h = (0, import_chunk_cwkztn5x.td)().connections.get(r);
  if (h !== void 0) {
    let g = await ln(h);
    if (g === void 0 || g.type === "connected") return false;
    if ((0, import_chunk_cwkztn5x.td)().connections.get(r) !== h) return false;
  }
  return (0, import_chunk_cwkztn5x.td)().connections.delete(r), true;
}
function zP(e) {
  let o = (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config);
  (0, import_chunk_cwkztn5x.td)().resourceLists.delete(o), (0, import_chunk_cwkztn5x.td)().resourceTemplateLists.delete(o);
}
function qP(e, o) {
  Xt(e.client).setRequestHandler("elicitation/create", (r, h) => o(r, { signal: h.mcpReq.signal }));
}
function WP(e, o) {
  Xt(e.client).setNotificationHandler("notifications/elicitation/complete", (r) => o(r.params.elicitationId));
}
function VP(e, o) {
  let r = Xt(e.client);
  vi(r, "tools", o);
  let h = wr(e, async (y) => {
    let M = (0, import_chunk_qyhf6bts.eh)(e.config);
    if (M !== void 0 && !(0, import_chunk_tntx4v84.U$)(e) && Fr(r, e.config)) {
      let { toolsListsAfresh: k } = (0, import_chunk_qdcbcsg7.mt)();
      if (!k.has(M)) k.set(M, { left: 1 });
      let P = 1;
      await r.request({ method: "tools/list" }, { ...jl, ...Eu, timeout: km }).catch((I) => {
        P = I instanceof import_chunk_racn22qq.ef && !Mi(I) ? 1 : 2, (0, import_chunk_k449cc64.He)(e.name, `tools/list without uploads declared failed: ${(0, import_chunk_jbjjrhxt.gl)(I, e.config)}`);
      });
      let R = k.get(M)?.left ?? 0;
      if (k.set(M, { left: Math.max(R, P) }), (0, import_chunk_tntx4v84.U$)(e)) return;
    }
    return o(y);
  });
  if (r.setNotificationHandler("notifications/tools/list_changed", (y) => ((0, import_chunk_478m53m1.wri)(r), h(y))), (0, import_chunk_478m53m1.Z1a)(r) && !(0, import_chunk_tntx4v84.U$)(e)) h(import_chunk_hy0sycbj.M2t);
  let g = (0, import_chunk_qyhf6bts.eh)(e.config);
  if (g !== void 0 && ((0, import_chunk_pyawkp3j.x7)() || !(0, import_chunk_ksk52rm1.pN)())) {
    let y = () => queueMicrotask(() => {
      if ((0, import_chunk_tntx4v84.U$)(e)) {
        M();
        return;
      }
      try {
        let { listedDeclarations: k, toolsListsAfresh: P } = (0, import_chunk_qdcbcsg7.mt)(), R = k.get(r), I = (0, import_chunk_w578pjby._)(Wr(r, e.config));
        if (R === void 0 || R === I) return;
        if (k.set(r, I), !P.has(g)) P.set(g, { left: 1 });
        ai(r, e.name, e.config, { toolsListChanged: true });
      } catch (k) {
        (0, import_chunk_k449cc64.He)(e.name, `tools/list could not be asked for again: ${(0, import_chunk_jbjjrhxt.gl)(k, e.config)}`);
      }
    }), M = (0, import_chunk_2nv4wrez.BU)(y);
    y();
  }
  if (g !== void 0 && !(0, import_chunk_ksk52rm1.pN)() && (0, import_chunk_m0xr8k74.w8e)(e)) (0, import_chunk_ksk52rm1.ill)(() => {
    let { listedWithUpload: y, toolsListsAfresh: M } = (0, import_chunk_qdcbcsg7.mt)();
    if (!y.has(r) && Fr(r, e.config) && !(0, import_chunk_tntx4v84.U$)(e)) {
      if (!M.has(g)) M.set(g, { left: 1 });
      ai(r, e.name, e.config, { toolsListChanged: true });
    }
  });
}
function KP(e, o) {
  let r = Xt(e.client);
  vi(r, "prompts", o), r.setNotificationHandler("notifications/prompts/list_changed", wr(e, o));
}
function GP(e, o) {
  let r = Xt(e.client);
  vi(r, "resources", o), r.setNotificationHandler("notifications/resources/list_changed", wr(e, o));
}
function YP(e, o, r) {
  let h = o.shape.method.value, g = Xt(e.client);
  if (g.getProtocolEra?.() === "modern") {
    let y = g.getNegotiatedProtocolVersion?.(), M = y === void 0 ? void 0 : (0, import_chunk_hy0sycbj.D2t)(y);
    (0, import_chunk_w578pjby.t)(`[MCP] ${e.name}: skipping ${h} handler registration \u2014 this connection negotiated ${M ? `protocol revision ${M}` : "a modern-era protocol revision"}, which has no delivery path for unsolicited custom notifications`, { level: "warn" });
    return;
  }
  g.setNotificationHandler(h, { params: o.shape.params }, (y) => r({ method: h, params: y }));
}
function yi(e, o) {
  let { removedNames: r, removedConfigs: h } = (0, import_chunk_cwkztn5x.td)();
  return r.has(e) && h.has(o);
}
function Di(e) {
  if (yi(e.name, e.config)) throw new import_chunk_jv7av99m.A(`MCP server "${e.name}" was not called: it was removed from this session. Continue without it.`, "MCP server removed from the session");
}
async function rn(e, o) {
  if (e.type === "connected" && e.config.type === "sdk" && !(0, import_chunk_bzyb60p0.qcr)(e.name, e.config)) return e;
  if ((0, import_chunk_bzyb60p0.nMn)(e.name, e.config)) throw (0, import_chunk_bzyb60p0.Bns)(e.name, e.config);
  let r = 0;
  if ((0, import_chunk_7625rswd.hU)(e.config)) {
    let P = Date.now();
    await (0, import_chunk_44g93ygc.t4)((0, import_chunk_sjqze7qg.uae)(e.config), { signal: o?.signal, timeoutMs: o?.timeoutMs, serverName: e.name, context: import_chunk_7625rswd.Rbe }), r = Date.now() - P;
  }
  if ((0, import_chunk_bzyb60p0.MO)(e.name, e.config)) {
    if (e.type === "cached") Hr(e.name, e.config, "policy");
    if ((0, import_chunk_bzyb60p0.tMn)(e.config, e.name)) {
      let P = Xo(e.name, e.config).catch(() => {
      }).then(() => e.type === "connected" ? Po(e) : void 0);
      await (0, import_chunk_5appeerh.me)(P.catch(() => {
      }), 1e3);
    }
    if ((0, import_chunk_2mwshd9r.Bde)(e.name, e.config)) throw new import_chunk_jv7av99m.A((0, import_chunk_bzyb60p0.sPn)(e.name), "MCP server refused at a reserved address");
    throw new import_chunk_jv7av99m.A(`MCP server "${e.name}" is blocked by managed policy`, "MCP server blocked by policy");
  }
  if (Di(e), (0, import_chunk_bzyb60p0.gi)(e.name) && (await Nn(e.name, e.config))?.type !== "connected") {
    if (e.type === "cached") Hr(e.name, e.config, "disabled");
    throw new import_chunk_jv7av99m.A(`MCP server "${e.name}" is disabled \u2014 re-enable it via /mcp to use its tools`, "MCP server disabled");
  }
  let h = import_chunk_bzyb60p0.dne.get(e.name) ?? (0, import_chunk_6wgyy4rn.Ktt)(e.name, e.config);
  if (h !== void 0 && (await Nn(e.name, e.config))?.type !== "connected") throw new import_chunk_jv7av99m.A((0, import_chunk_bzyb60p0.yye)(e.name, h), "MCP server held by a hook");
  let g = (0, import_chunk_yrpmp1hk.hi)(), y = e.type === "cached" && o?.toolUseId !== void 0 && nh.test(o.toolUseId) ? { toolUseId: o.toolUseId, withListings: o.toolUseIdWithListingsUntil !== void 0 } : void 0, M = y === void 0 ? go(e.name, e.config) : go(e.name, e.config, void 0, void 0, void 0, y);
  if (y !== void 0) {
    let P = () => {
      y.toolUseId = void 0;
    };
    (o?.toolUseIdWithListingsUntil ?? M).then(P, P);
  }
  if (e.type === "cached") M.then((P) => rg(P, M, g), () => {
  });
  let k = await (0, import_chunk_44g93ygc.t4)(M, { signal: o?.signal, timeoutMs: o?.timeoutMs === void 0 ? void 0 : Math.max(0, o.timeoutMs - r), serverName: e.name, context: o?.context ?? "MCP connection" });
  if (k.type !== "connected") {
    if (k.type === "needs-auth") throw Object.assign(new import_chunk_jv7av99m.A(import_chunk_6wgyy4rn.gUe.dialNeedsAuth(e.name, e.config), "MCP server needs authentication"), { mcpErrorSource: "user_auth" });
    let P = k.type === "failed" ? k.errorCode : void 0;
    throw Object.assign(new import_chunk_jv7av99m.A(import_chunk_6wgyy4rn.gUe.dialNotConnected(e.name, (0, import_chunk_sjqze7qg.U_)() && k.type === "failed" && k.error ? `: ${(0, import_chunk_271xsh6x.Bl)(k.error)}` : ""), "MCP server not connected"), { mcpErrorSource: (0, import_chunk_yz5b8aaa.gz)(Object.assign(Error("MCP dial failed"), { code: P !== void 0 && /^-?\d+$/.test(P) ? Number(P) : P })), mcpDialCode: P, mcpDialNotForwarded: k.type === "failed" ? k.notForwardedMessage : void 0, mcpDialNotForwardedReason: k.type === "failed" ? k.notForwardedReason : void 0 });
  }
  if ((0, import_chunk_bzyb60p0.nMn)(e.name, e.config)) throw await Po(k), (0, import_chunk_bzyb60p0.Bns)(e.name, e.config);
  return k;
}
function hn(e, o, r) {
  let h = go.cache;
  if (!h?.get) return false;
  return h.get((0, import_chunk_3bjtjsgp.Uo)(o, r)) !== e;
}
function To(e) {
  return (0, import_chunk_qdcbcsg7.mt)().supersededDials.has(e);
}
function rg(e, o, r) {
  let h = (0, import_chunk_qdcbcsg7.mt)().cachedFirstDialArmsRan;
  if (h.has(e)) return;
  h.add(e);
  let g = (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), y = (0, import_chunk_cwkztn5x.td)().connections.get(g), M = (0, import_chunk_yrpmp1hk.hi)() !== r, k = y === void 0 && M;
  if (To(o) || y !== void 0 && y !== o || k) {
    if (!To(o) && M && e.type === "connected") Po(e);
    return;
  }
  if (e.type === "connected" || e.type === "needs-auth") {
    Ci(e.name, e.config);
    return;
  }
  if ((0, import_chunk_cwkztn5x.td)().connections.delete(g), e.type === "failed") Ii(e, !(0, import_chunk_qdcbcsg7.mt)().swrRefreshDialsInFlight.has(o));
}
function JP(e, o) {
  return (0, import_chunk_3bjtjsgp.n4)(e) === (0, import_chunk_3bjtjsgp.n4)(o);
}
var sg = ["invalid_request", "invalid_client", "invalid_grant", "unauthorized_client", "access_denied", "unsupported_grant_type", "invalid_scope", "server_error", "temporarily_unavailable", "ENDPOINT_NOT_FOUND", "AUTH_HEADER_REJECTED", "HEADERS_HELPER_AUTH_REJECTED", "CONNECT_TIMEOUT", "CONNECT_SUSPENDED", "CREDENTIAL_STORE_UNAVAILABLE", "ISSUER_ECHO_DENIED", "CLAUDEAI_BEARER_REJECTED", "CLI_OWNED_BEARER_REJECTED", "FIRST_PARTY_AUTH_REJECTED", "INVALID_CONFIG", "UNCONFIGURED", "ENOENT", "EACCES", "EPERM", "EADDRINUSE", "ERR_INVALID_URL", "ABORT_ERR", "UNKNOWN_CERTIFICATE_VERIFICATION_ERROR", "NOT_CONNECTED", "ALREADY_CONNECTED", "NOT_INITIALIZED", "CAPABILITY_NOT_SUPPORTED", "REQUEST_TIMEOUT", "CONNECTION_CLOSED", "SEND_FAILED", "INVALID_RESULT", "UNSUPPORTED_RESULT_TYPE", "INPUT_REQUIRED_ROUNDS_EXCEEDED", "LIST_PAGINATION_EXCEEDED", "METHOD_NOT_SUPPORTED_BY_PROTOCOL_VERSION", "ERA_NEGOTIATION_FAILED", "CLIENT_HTTP_NOT_IMPLEMENTED", "CLIENT_HTTP_AUTHENTICATION", "CLIENT_HTTP_FORBIDDEN", "CLIENT_HTTP_UNEXPECTED_CONTENT", "CLIENT_HTTP_FAILED_TO_OPEN_STREAM", "CLIENT_HTTP_FAILED_TO_TERMINATE_SESSION"];
function iu(e) {
  if (e === void 0) return (0, import_chunk_78g0060s.S)("missing");
  if (/^-?\d+$/.test(e)) return (0, import_chunk_78g0060s.Gs)(Number(e));
  let o = sg.find((r) => r === e);
  if (o !== void 0) return (0, import_chunk_78g0060s.f)(o);
  return (0, import_chunk_865at33z.RCo)(e) ?? (0, import_chunk_78g0060s.S)("other");
}
var du = { [import_chunk_racn22qq.Ua.ConnectionClosed]: "connection_closed", [import_chunk_racn22qq.Ua.RequestTimeout]: "request_timeout", [import_chunk_racn22qq.Ua.ListPaginationExceeded]: "list_pagination_exceeded", [-32e3]: "connection_closed", [-32001]: "request_timeout", [import_chunk_yz5b8aaa.Pke]: "ccr_needs_approval", [import_chunk_racn22qq.ld.ParseError]: "parse_error", [import_chunk_racn22qq.ld.InvalidRequest]: "invalid_request", [import_chunk_racn22qq.ld.MethodNotFound]: "method_not_found", [import_chunk_racn22qq.ld.InvalidParams]: "invalid_params", [import_chunk_racn22qq.ld.InternalError]: "internal_error" };
function cu(e, o) {
  let r = Object.keys(e);
  if (r.length === 0) return o;
  return r.map((h) => {
    let g = e[h], y = typeof g === "object" && g !== null ? JSON.stringify(g) : String(g);
    return `${h}=${y}`;
  }).join(" ");
}
function lu(e) {
  let o = (0, import_chunk_qdcbcsg7.mt)().droppedToolsSeqByConnection, r = o.get(e) ?? { started: 0, applied: 0 };
  return o.set(e, r), r.started += 1, { seq: r.started, state: r };
}
function XP(e) {
  return (0, import_chunk_qdcbcsg7.mt)().toolsListErrorByResult.get(e);
}
function Si(e) {
  return (0, import_chunk_qdcbcsg7.mt)().discoveryFetchErrors.get(e);
}
function uu() {
  dn();
  let e = (0, import_chunk_yrpmp1hk.n0t)();
  return (0, import_chunk_sjqze7qg.zso)(e) ? void 0 : e.token;
}
function QP() {
  let e = (0, import_chunk_qdcbcsg7.mt)();
  if (e.identitySeedAttempted) return;
  e.identitySeedAttempted = true;
  let o = uu();
  if (o !== void 0) e.identityBaseline = o;
}
function ZP() {
  let e = uu(), o = (0, import_chunk_qdcbcsg7.mt)();
  if (e === void 0) return o.identityBaseline = void 0, true;
  if (o.identityBaseline === void 0) return o.identityBaseline = e, true;
  if (o.identityBaseline === e) return false;
  return o.identityBaseline = e, true;
}
function Zs(e, o) {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  let r = (0, import_chunk_qdcbcsg7.mt)();
  r.rawToolsByResult.set(e, o), r.rawFetchedAtByResult.set(e, Date.now());
}
function ei(e, o) {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  let r = (0, import_chunk_qdcbcsg7.mt)();
  r.rawCommandsByResult.set(e, o), r.rawFetchedAtByResult.set(e, Date.now());
}
function or(e, o) {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  let r = (0, import_chunk_qdcbcsg7.mt)();
  r.rawResourcesByResult.set(e, o), r.rawFetchedAtByResult.set(e, Date.now());
}
function eR(e, o) {
  (0, import_chunk_qdcbcsg7.mt)().discoveryFetchErrors.set(e, o);
}
function ig(e) {
  if (e.kind !== "fresh" && e.kind !== "stale") return e;
  let o = e.entry.capabilities;
  if ((0, import_chunk_fpcs74d2.zat)(o)) return { kind: "miss", reason: "skills-capable" };
  if ((0, import_chunk_yf5ktj74.J9o)(o)) return { kind: "miss", reason: "channel-capable" };
  return e;
}
async function wi(e, o) {
  dn();
  let r = (0, import_chunk_qdcbcsg7.mt)();
  if (r.persistedDiscoveryRounds.has(o.tools)) return true;
  if (!(0, import_chunk_yrpmp1hk.HY)(o.identityEpoch)) return true;
  if ((0, import_chunk_qdcbcsg7.UOo)(e)) return true;
  let h = r.rawToolsByResult.get(o.tools), g = r.rawCommandsByResult.get(o.commands), y = r.rawResourcesByResult.get(o.resources);
  if (h === void 0 || g === void 0 || y === void 0 || o.templates === void 0) return false;
  let M = Math.min(r.rawFetchedAtByResult.get(o.tools) ?? Number.POSITIVE_INFINITY, r.rawFetchedAtByResult.get(o.commands) ?? Number.POSITIVE_INFINITY, r.rawFetchedAtByResult.get(o.resources) ?? Number.POSITIVE_INFINITY);
  if (!Number.isFinite(M)) return true;
  let k = M, P = [o.tools, o.commands, o.resources].map((I) => [I, r.rawFetchedAtByResult.get(I)]);
  r.rawToolsByResult.delete(o.tools), r.rawCommandsByResult.delete(o.commands), r.rawResourcesByResult.delete(o.resources), r.rawFetchedAtByResult.delete(o.tools), r.rawFetchedAtByResult.delete(o.commands), r.rawFetchedAtByResult.delete(o.resources), r.persistedDiscoveryRounds.add(o.tools);
  let R = await (0, import_chunk_yrpmp1hk.eUa)(e.name, e.config, { ...e.serverInfo && { serverInfo: { name: e.serverInfo.name, version: e.serverInfo.version } }, ...e.protocolEra !== void 0 && { negotiatedEra: e.protocolEra }, capabilities: e.capabilities, tools: h, commands: g, resources: y, templates: o.templates.map(({ server: I, ...L }) => L) }, { identityEpoch: o.identityEpoch, grantLeg: o.grantLeg, now: k });
  if (R === "terminal") return r.persistedDiscoveryRounds.delete(o.tools), false;
  if (R === "transient") {
    r.rawToolsByResult.set(o.tools, h), r.rawCommandsByResult.set(o.commands, g), r.rawResourcesByResult.set(o.resources, y);
    for (let [I, L] of P) if (L !== void 0) r.rawFetchedAtByResult.set(I, L);
    r.persistedDiscoveryRounds.delete(o.tools);
  }
  return true;
}
async function tR(e, o, r) {
  if (dn(), !(0, import_chunk_yrpmp1hk.HY)(r.identityEpoch) || (0, import_chunk_qdcbcsg7.UOo)(e)) return;
  let h = (0, import_chunk_qdcbcsg7.mt)(), g = h.rawToolsByResult.get(o), y = h.rawFetchedAtByResult.get(o);
  if (g === void 0 || y === void 0) return;
  await (0, import_chunk_yrpmp1hk.tUa)(e.name, e.config, g, { identityEpoch: r.identityEpoch, grantLeg: r.grantLeg, fetchedAt: y });
}
async function ag(e, o) {
  if (!(0, import_chunk_sjqze7qg.U_)() || !(0, import_chunk_yrpmp1hk.oJt)(e.config) || (0, import_chunk_bzyb60p0.gi)(e.name) || (0, import_chunk_bzyb60p0.MO)(e.name, e.config)) return;
  try {
    let r = !!e.capabilities?.resources;
    if (!r) or(o.resources, []);
    let h = r && (0, import_chunk_yrpmp1hk.U9o)(e.config) ? await rr(e) : [];
    if (await Nn(e.name, e.config) !== e || (0, import_chunk_bzyb60p0.gi)(e.name) || (0, import_chunk_bzyb60p0.MO)(e.name, e.config)) return;
    await wi(e, { ...o, templates: Si(h) === void 0 ? h : void 0 });
  } catch (r) {
    (0, import_chunk_k449cc64.He)(e.name, `Discovery cache write-through skipped: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
}
function dg(e) {
  switch (e.reason) {
    case "absent":
    case "expired":
    case "corrupt":
    case "strike-threshold":
    case "no-fingerprint":
    case "unsealed":
      return true;
    case "disabled":
    case "key-unavailable":
    case "transport":
    case "live-connection":
    case "skills-capable":
    case "channel-capable":
      return false;
    default:
      return e.reason;
  }
}
function cg(e) {
  if (e.kind !== "miss") return "live";
  switch (e.reason) {
    case "disabled":
      return "miss_disabled";
    case "key-unavailable":
      return "miss_disabled";
    case "unsealed":
      return "miss_corrupt";
    case "transport":
      return "live";
    case "absent":
      return "live";
    case "expired":
      return "miss_expired";
    case "corrupt":
      return "miss_corrupt";
    case "strike-threshold":
      return "miss_strike";
    case "no-fingerprint":
      return "miss_no_fingerprint";
    case "live-connection":
      return "live";
    case "skills-capable":
      return "live";
    case "channel-capable":
      return "live";
    default:
      return e.reason;
  }
}
function pu(e) {
  let o = e._meta?.["anthropic/maxResultSizeChars"];
  return typeof o === "number" && Number.isFinite(o) && o > 0 ? o : void 0;
}
function El({ serverName: e, scope: o, pluginSource: r, serverType: h, source: g, skipPrefix: y, standardKey: M, denyKey: k, nameKey: P, legacyGrantRefused: R = false, toolNameShared: I = false, legacyGrantRebindable: L = false, serverAlwaysLoad: z, serverDefersAllTools: H = false, effectiveMaxPermission: F, promptOverrides: ae, isFirstPartyDesignServer: _e, maxDescriptionLength: be = (0, import_chunk_bzyb60p0.tfe)(), maxLoadedDescriptionLength: Q = (0, import_chunk_bzyb60p0.tfe)(true), pluginTelemetry: Ae, cliOwned: Ve, accountMemory: Tt = false, accountMemoryServer: pt = false, accountMemoryHeld: Ge = pt, artifactsServer: At = false, addressRegistryId: Ht, dataFlowServerGiven: Et, anthropicAddress: Wt = false, servedForPlugin: pe, hostedChromeServer: oe = false, hostLocalPaneServer: ge = false, posesAsAskTool: Te = false, sdkDocsConnector: Qe = false, displayName: Ye, serverId: Rt, serverIdStamp: Mt, serverProvenance: ht, serverUrl: vt, serverOrigin: De, describedOrigin: kt, describedConnectorId: tt, iconUrl: ye, serverInfoName: it, role: Ke, listed: Pe, listedLive: Ne = false, call: yt, overrides: xe }) {
  let It = (0, import_chunk_px0hhsq7.lr)(e, Pe.name), Ot = pu(Pe), se = Ot !== void 0, ke = Pe._meta?.["anthropic/requiresUserInteraction"] === true, ct = (0, import_chunk_1hg0ytx8.gZa)(Pe._meta), bt = Ne ? (0, import_chunk_qdcbcsg7.vLl)(e, Pe._meta) : void 0, jt = Ne && (0, import_chunk_qdcbcsg7.TLl)(e, Pe._meta), Re = ae?.tools?.[Pe.name] ?? Pe.description ?? "", Gt = si(Re, `Tool "${Pe.name}" description`, e, be), Xe = si(Re, `Tool "${Pe.name}" description`, e, Q), Ce = ae?.search_hints?.[Pe.name] ?? (typeof Pe._meta?.["anthropic/searchHint"] === "string" ? Pe._meta["anthropic/searchHint"] : void 0), wt = Qd(e, Pe.name, yt), we = (0, import_chunk_qyhf6bts.mLe)(e, { scope: o, pluginSource: r }), le = we || R || I, Be = R && !I && L && !ke && F !== "ask" && xe?.suppressesAlwaysAllowRule === void 0 && xe?.requiresUserInteraction === void 0 && !Ys(_e, Pe.name), Oe = le || Ys(_e, Pe.name), Ue = () => we || I || R && !(0, import_chunk_px0hhsq7.fxt)({ serverName: e, serverType: h, serverId: Rt }) || (0, import_chunk_px0hhsq7.y_n)({ serverName: e, serverType: h, serverId: Rt }) || (0, import_chunk_px0hhsq7.uxt)({ serverName: e, serverType: h, serverId: Rt });
  if (le) (0, import_chunk_k449cc64.He)(e, we ? "Allow rules do not apply: this server's name starts like a claude.ai connector's. To use allow rules, the server needs another name, and the rules must use that name." : R ? "Allow rules do not apply: another MCP server already uses this name, or the name could not be recorded in the config file. Give this server a different name and write the rules for that name, or reconnect if the config file was busy." : `Allow rules do not apply to "${Pe.name}": another tool of this server gets the same name in Claude Code. To use allow rules, the server must rename one of them.`);
  return { ...import_chunk_46p8h02m.Cor, name: y ? Pe.name : It, mcpInfo: { serverName: e, scope: o, ...r !== void 0 && { pluginSource: r }, serverType: h, ...g !== void 0 && { source: g }, ...Ae && { pluginTelemetry: Ae }, displayName: Ye, serverId: Rt, ...Mt !== void 0 && { serverIdStamp: Mt }, ...ht !== void 0 && { serverProvenance: ht }, ...vt !== void 0 && { serverUrl: vt }, ...De !== void 0 && { serverOrigin: De }, ...kt !== void 0 && { describedOrigin: kt }, ...tt !== void 0 && { describedConnectorId: tt }, iconUrl: ye, serverInfoName: it, ...Ve && { cliOwned: true }, ...M !== void 0 && { standardKey: M }, ...R && { legacyGrantRefused: R }, ...I && { toolNameShared: I }, ...Be && { legacyGrantRebindable: L }, ...k !== void 0 && { denyKey: k }, ...P !== void 0 && { nameKey: P }, ...Tt && { accountMemory: true }, ...Ge && { accountMemoryHeld: true }, ...pt && { accountMemoryServer: true }, ...At && { artifactsServer: true }, ...Ht !== void 0 && { addressRegistryId: Ht }, ...Et !== void 0 && { dataFlowServerGiven: Et }, ...Wt && { anthropicAddress: true }, ...pe !== void 0 && { servedForPlugin: pe }, ...oe && { hostedChromeServer: true }, ...ge && { hostLocalPaneServer: true }, ...Te && { posesAsAskTool: true }, ...Pe._meta?.["anthropic/delivers"] === true && { listedAsDeliveringFiles: true }, ...Qe && { sdkDocsConnector: true }, toolName: Pe.name, title: Pe.annotations?.title?.replace(/\s+/g, " ").trim() || void 0, execution: Pe.execution, role: Ke, effectiveMaxPermission: F, ...ct && { uiMeta: ct }, ...(0, import_chunk_1hg0ytx8.hZa)(Pe._meta) && { opensMcpApp: true }, ...(0, import_chunk_1hg0ytx8.mZa)(Pe._meta, e, Pe.name) && { hiddenFromModel: true }, ...bt && { linkedPlugin: bt }, ...jt && { runsInVm: true } }, isMcp: true, searchHint: Ce?.replace(/\s+/g, " ").trim() || void 0, alwaysLoad: !H && (z && !(o === "dynamic" && Pe._meta?.["anthropic/alwaysLoad"] === false) || Pe._meta?.["anthropic/alwaysLoad"] === true), async description() {
    return Re;
  }, async prompt({ loadedThroughToolSearch: re }) {
    return re ? Xe : Gt;
  }, isConcurrencySafe() {
    return wt.mayOverlap || (Pe.annotations?.readOnlyHint ?? false);
  }, isReadOnly() {
    return Pe.annotations?.readOnlyHint ?? false;
  }, readOnlyHint: Pe.annotations?.readOnlyHint, openWorldHint: Pe.annotations?.openWorldHint, toAutoClassifierInput(re) {
    return cu(re, Pe.name);
  }, isDestructive() {
    return Pe.annotations?.destructiveHint ?? false;
  }, isOpenWorld() {
    return Pe.annotations?.openWorldHint ?? false;
  }, requiresUserInteraction() {
    return ke;
  }, async validateInput(re, $e) {
    let qe = (0, import_chunk_sjqze7qg.dis)(Ge, Pe.name, $e);
    if (qe === void 0) return { result: true };
    return (0, import_chunk_y53wbr8a.a)("tengu_account_memory_spawned_write_refused", { caller: (0, import_chunk_78g0060s.fe)($e.memoryCaller) ?? (0, import_chunk_78g0060s.S)("unmarked") }), { result: false, message: qe, errorCode: 1 };
  }, suppressesAlwaysAllowRule: (re, $e) => ke || F === "ask" && !$e || Ue() || Ys(_e, Pe.name), ...(le || (0, import_chunk_px0hhsq7.mL)()) && { ignoresWholeToolAllowRule: Ue }, maxResultSizeChars: se ? Math.min(Ot, import_chunk_tt4yhkc0.Dde) : import_chunk_46p8h02m.Cor.maxResultSizeChars, persistenceThresholdCeiling: se ? import_chunk_tt4yhkc0.Dde : void 0, ...Pe.outputSchema !== void 0 && { outputJSONSchema: Pe.outputSchema }, inputJSONSchema: (0, import_chunk_bzyb60p0.Sza)((0, import_chunk_bzyb60p0.yza)((0, import_chunk_vfh414sa.uBa)(Pe.inputSchema, ae?.param_descriptions?.[Pe.name]), It), It), async checkPermissions(re, $e) {
    let qe = ch(_e, Pe.name, re);
    if (qe) return qe;
    if (_e) {
      let _t = (0, import_chunk_tgj1b0ts.s8o)(), Dt = await _t?.wouldNeedDesignConsent($e.toolState.get(import_chunk_k46cdxhb.Nue), $e.credentials) ?? null;
      if (Dt !== null && _t && $e.toolUseId) {
        let Nt = fh($e.toolUseId, Dt, eu($e));
        return uh(_t.consentPromptFor(Dt), re, Nt);
      }
    }
    if (ke) return { behavior: "ask", message: "MCPTool requires permission.", suggestions: [], suppressAlwaysAllowRule: true };
    return { behavior: "passthrough", message: "MCPTool requires permission.", suggestions: Oe ? [] : [{ type: "addRules", rules: [{ toolName: It, ruleContent: void 0 }], behavior: "allow", destination: e === import_chunk_2mwshd9r.Cp && (0, import_chunk_a9pcmp5n.vbe)() ? "session" : "localSettings" }] };
  }, call: wt.call, userFacingName() {
    let re = (Pe.annotations?.title || Pe.name).replace(/\s+/g, " ").trim();
    return `${e} - ${re} (MCP)`;
  }, ...xe };
}
async function bl({ name: e, config: o, capabilities: r, serverInfo: h, savedAt: g, tools: y }) {
  Oi(), await og(e, o);
  let M = { name: e, type: "cached", config: o, capabilities: r, ...h && { serverInfo: { name: h.name, version: h.version } }, cacheSavedAt: g };
  return { client: M, tools: await fu(M, y, Date.now(), "cache", lu(M)) };
}
async function fu(e, o, r, h, g) {
  if (o = (0, import_chunk_865at33z.mIl)(e.config, o), h !== "live" && (0, import_chunk_5ft9yxne.T7)(e.config, o)) (0, import_chunk_5ft9yxne.Q6)(o);
  let y = o.length, M = (0, import_chunk_ttsnbbsg.$ri)(), k = (await (0, import_chunk_vs7p9j3v.JWe)(o, (se) => M(se) ?? [])).flat();
  o = [];
  let P = (0, import_chunk_bzyb60p0.Nie)(e.config), R = yo(e.config, e.name), I = (0, import_chunk_78g0060s.R$)((0, import_chunk_3f4m74y6.xn)(e.name), (0, import_chunk_865at33z.ZV)(e.name, e.config)), L = y - k.length;
  if (L > 0) (0, import_chunk_k449cc64.id)(e.name, (0, import_chunk_ttsnbbsg.wYr)("tools", L, y)), (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_listing_over_limit"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), skippedCount: L, mcpServerName: I, ...R });
  if (y === 0 && h === "live") (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("connected_zero_tools"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), mcpServerName: I, ...R });
  let z = e.config.type === "sdk" && import_chunk_c203g5kd.s.CLAUDE_AGENT_SDK_MCP_NO_PREFIX, H = e.config.type === "claudeai-proxy" || e.config.type === "http" || e.config.type === "sse" ? e.config.toolPermissions : void 0, F = (0, import_chunk_865at33z.yhe)(e.config) ? (0, import_chunk_k2g55agd.Jgl)(H) : H;
  if (F) {
    let se = Object.keys(F).length;
    if (se > 0 && !k.some((ke) => F[ke.name] !== void 0)) (0, import_chunk_w578pjby.t)(`[claudeai-mcp] ${e.name}: toolPermissions has ${se} entries but none matched upstream tool names \u2014 backend name drift?`, { level: "warn" });
  }
  let ae = bh(e.config), _e = Mh(e.config), be = 0, Q = 0, Ae = 0, Ve = 0, Tt = 0, pt = [], Ge = 0, At = 0, Ht = await (0, import_chunk_vs7p9j3v.JWe)(k, (se) => {
    let ke = (0, import_chunk_gjddj128.yri)(se.inputSchema, { normalizeEnabled: ae, apiValidateEnabled: _e });
    if (ke.verdict === "drop" && ke.cause !== "api_invalid") {
      if (ke.cause === "normalize_gated") Q++;
      else Ae++;
      return (0, import_chunk_k449cc64.id)(e.name, `Skipping tool "${se.name}": ${ke.reason}. Other tools from this server remain available.`), [];
    }
    if (ke.normalized) be++, (0, import_chunk_k449cc64.He)(e.name, `Normalized input schema for tool "${se.name}" (flattened top-level ${ke.normalized.combinators.join("/")})`);
    if (ke.verdict === "drop") {
      if (ke.rejection.check === "meta") Ve++;
      else Tt++;
      if (F?.[se.name] !== "blocked" && ou(z ? se.name : (0, import_chunk_px0hhsq7.lr)(e.name, se.name))) pt.push({ toolName: se.name, reason: ke.rejection.detail });
      return (0, import_chunk_k449cc64.id)(e.name, `Skipping tool "${se.name}": its input schema would be rejected by the Anthropic API (${ke.rejection.detail}). Other tools from this server remain available.`), [];
    }
    if (ke.apiWouldReject) {
      if (ke.apiWouldReject.check === "meta") Ge++;
      else At++;
      (0, import_chunk_k449cc64.He)(e.name, `Tool "${se.name}" input schema would be rejected by the Anthropic API (${ke.apiWouldReject.detail}); requests that include it may fail`);
    }
    return ke.normalized ? [{ ...se, inputSchema: ke.normalized.schema, description: (0, import_chunk_syr33dp2.$bs)(ke.normalized.note, se.description) }] : [se];
  }), Et = (0, import_chunk_pbteexar.Ls)(Ht.flat(), "name"), Wt = (0, import_chunk_dwxd9se5.Obe)((0, import_chunk_pbteexar.Ls)(k, "name"), (se) => (0, import_chunk_px0hhsq7.lr)(e.name, se.name));
  if (g.seq > g.state.applied) g.state.applied = g.seq, e.droppedTools = (0, import_chunk_pbteexar.Ls)(pt, "toolName");
  if (be > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_schema_normalized"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), normalizedCount: be, mcpServerName: I, ...R });
  if (Q > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_schema_normalize_gated"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), skippedCount: Q, mcpServerName: I, ...R });
  if (Ae > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_schema_unsupported"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), skippedCount: Ae, mcpServerName: I, ...R });
  if (Ve > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_schema_invalid"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), skippedCount: Ve, mcpServerName: I, ...R });
  if (Tt > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_property_key_invalid"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), skippedCount: Tt, mcpServerName: I, ...R });
  if (Ge > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_schema_invalid_gated"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), keptCount: Ge, mcpServerName: I, ...R });
  if (At > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_property_key_invalid_gated"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), keptCount: At, mcpServerName: I, ...R });
  let pe = () => (0, import_chunk_865at33z.ZV)(e.name, e.config), oe = (0, import_chunk_mt7e13yk.hUe)(e.config), ge = (0, import_chunk_mt7e13yk.hUe)(e.config, true);
  await (0, import_chunk_bzyb60p0.Mza)(Et, e.name, pe(), P, e.instructions);
  let Te = Zl(e.config), Qe = (0, import_chunk_vfh414sa.RRn)(e.config), Ye = e.config.pluginSource ? (0, import_chunk_54j6k3fn.aj)(e.config.pluginSource, (0, import_chunk_vcnr02by.Bg)()) : void 0, Rt = (0, import_chunk_qdcbcsg7.Pl)(e.config), Mt = Rt && e.name === import_chunk_qdcbcsg7.ri, ht = Mt || (0, import_chunk_865at33z.oD)(e.config), vt = false, De = Et, kt = k.some((se) => (0, import_chunk_865at33z.omn)(e, se.name)) || De.some((se) => (0, import_chunk_865at33z.omn)(e, se.name)) || L > 0 && (0, import_chunk_865at33z.Yzn)(e), tt = (0, import_chunk_865at33z.smn)(e), ye = kt || tt, it = (0, import_chunk_1hg0ytx8.Hki)(e), Ke = { serverName: e.name, scope: e.config.scope, pluginSource: e.config.pluginSource, serverType: e.config.type ?? "stdio", sdkDocsConnector: (0, import_chunk_b0n2a2c9.Gri)(e), source: (0, import_chunk_ts09sys6.XH)(e.name, e.config), skipPrefix: z, serverAlwaysLoad: e.config.alwaysLoad === true, serverDefersAllTools: e.config.alwaysLoad === false, promptOverrides: Qe, isFirstPartyDesignServer: Te, maxDescriptionLength: oe, maxLoadedDescriptionLength: ge, pluginTelemetry: Ye, cliOwned: Rt, artifactsServer: ht, addressRegistryId: (0, import_chunk_vhpt9t1j.zus)(e.config), dataFlowServerGiven: e.config.type === "sdk" && (0, import_chunk_ts09sys6.P0)(e.config) ? e.config.dataFlowServer : void 0, anthropicAddress: "url" in e.config && (0, import_chunk_3jjr3wje.nL)(e.config.url), servedForPlugin: (0, import_chunk_1ek4hhs6.myr)(e.config), hostedChromeServer: (0, import_chunk_prn6030k._b)(e.name) && (0, import_chunk_865at33z.uI)(e.config), hostLocalPaneServer: (0, import_chunk_865at33z.Bpn)(e.name, e.config), displayName: (0, import_chunk_tpax7jmw.E7r)(e.config), standardKey: (0, import_chunk_qyhf6bts.w4)() ? (0, import_chunk_qyhf6bts.kvt)(e.name, e.config, Rt === true) : void 0, legacyGrantRefused: (0, import_chunk_qyhf6bts.w4)() && await (0, import_chunk_px0hhsq7.O$l)({ serverName: e.name, serverType: e.config.type ?? "stdio", serverId: (0, import_chunk_qyhf6bts.eh)(e.config) }, (0, import_chunk_qyhf6bts.mLe)(e.name, e.config), (0, import_chunk_qyhf6bts.fcn)(e.name, e.config)), legacyGrantRebindable: (0, import_chunk_qyhf6bts.w4)() && !(0, import_chunk_qyhf6bts.mLe)(e.name, e.config) && (0, import_chunk_qyhf6bts.fcn)(e.name, e.config) && (0, import_chunk_px0hhsq7.M$l)({ serverName: e.name, serverType: e.config.type ?? "stdio", serverId: (0, import_chunk_qyhf6bts.eh)(e.config) }), denyKey: (0, import_chunk_qyhf6bts.qBn)(e.config), nameKey: (0, import_chunk_qyhf6bts.Nvr)(e), serverId: (0, import_chunk_qyhf6bts.eh)(e.config), serverIdStamp: (0, import_chunk_1jfwdjvf.Ugt)(e.name, e.config), ...(0, import_chunk_5qhr9bm2.Bpe)(e), ...(0, import_chunk_1jfwdjvf.Lue)(e.config), iconUrl: "iconUrl" in e.config ? e.config.iconUrl : void 0, serverInfoName: (0, import_chunk_kx2fp6pc.$c)(e.serverInfo?.name ?? "") || void 0, role: "role" in e.config ? e.config.role : void 0 }, Pe = (0, import_chunk_prn6030k._b)(e.name), Ne = (0, import_chunk_b0n2a2c9.EYr)(e), yt = (0, import_chunk_wpyz5pav.JAi)(k), xe = (await (0, import_chunk_vs7p9j3v.JWe)(De, (se) => {
    let ke = (0, import_chunk_px0hhsq7.lr)(e.name, se.name), ct = pu(se) !== void 0, bt = async (we, le, Be) => Dn({ client: await rn(e, { context: "MCP tool call", signal: Be }), tool: we, args: le, signal: Be, resultNotForModel: true, imageLimits: import_chunk_r6fna520.Qv, storageV5: void 0, credentials: void 0, callingModel: void 0, rowConfig: e.config }), jt = { ...Pe && (0, import_chunk_865at33z.p6t)(e.config) && { ...qm().getClaudeInChromeMCPToolOverrides(se.name), builtinRenderFamily: "claude-in-chrome" }, ...Pe && (0, import_chunk_865at33z.uI)(e.config) && { ...Xc(se.name, se._meta, (we, le) => Qc(bt, we, le), (we) => Zc(bt, we)) }, ...e.name === import_chunk_2mwshd9r.Cp && { excludedFromModeBypassAllow: import_chunk_a9pcmp5n.vbe }, ...(0, import_chunk_865at33z.p6t)(e.config) && (0, import_chunk_xcgcdx61.Zze)(e.name) && { ...Wm().getComputerUseMCPToolOverrides(se.name), builtinRenderFamily: "computer-use" }, ...e.config.type === "sdk" && (0, import_chunk_bz1f2qnq.Fat)(e.name) ? (0, import_chunk_bz1f2qnq.Twl)(e.name, se.name, se.inputSchema.properties, cu) : {}, ...(0, import_chunk_14m79r0k.s$a)(se.name) ? (0, import_chunk_14m79r0k.a$a)() : {}, ...{}, ...Mt ? il()?.artifactsMcpLaptopToolOverridesFor(e.config) : {}, ...(0, import_chunk_865at33z.yhe)(e.config) && { skipAggregateToolResultBudget: true } }, Re = El({ ...Ke, accountMemory: (0, import_chunk_865at33z.rPs)(e, se.name, tt), accountMemoryServer: kt, accountMemoryHeld: ye, effectiveMaxPermission: F?.[se.name], posesAsAskTool: (0, import_chunk_1hg0ytx8.fZa)(e, se.name, it), toolNameShared: (0, import_chunk_px0hhsq7.rft)() && (Wt[ke] ?? 0) > 1, listed: se, listedLive: h === "live", overrides: jt, async call(we, le, Be, Oe, Ue, re) {
      let $e = le.toolUseId ?? ni(Oe), qe = (0, import_chunk_8v27xkv5.i8o)(e, le.options.mcpClients), _t = (0, import_chunk_sjqze7qg.dis)(ye, se.name, le);
      if (_t !== void 0) throw new import_chunk_jv7av99m.A(_t, "account memory write from a spawned loop");
      let Dt = (0, import_chunk_7z55j6ad.i7r)(le.permissionPhase, we);
      if (Dt !== void 0) return Dt;
      let Nt = { ...(0, import_chunk_jejz6sfb.yoi)(e.config, le.mcpRequestMeta), ...re?.mcpCallMeta, ...$e && { "claudecode/toolUseId": $e }, ...(0, import_chunk_jejz6sfb.jor)(le.session, le.toolUseId, e.name, e.config), ...(0, import_chunk_prn6030k._b)(e.name) && (0, import_chunk_865at33z.uI)(e.config) && ol(se.name, we, le), ...((0, import_chunk_b0n2a2c9.EYr)(e) || (0, import_chunk_865at33z.Ldt)(e.name, e.config)) && (0, import_chunk_wvxk15ee.MAi)(Oe.requestId), ...(0, import_chunk_865at33z.Ldt)(e.name, e.config) && cc(Oe.requestedModel ?? le.modelFacts.model), ...(0, import_chunk_865at33z.Vzt)(e) && (0, import_chunk_jrzfkd53.lUa)((0, import_chunk_z2xw6net.dfl)()), ...(0, import_chunk_g78kc1rr.AMi)(e, le), ...(0, import_chunk_865at33z.wke)(e) && lc(le.toolState, Oe.message.id) }, Yt = false;
      function vo(Kt) {
        if (!Ue || !$e || Yt) return;
        Ue({ type: "progress", toolUseID: $e, data: Kt });
      }
      function _o(Kt) {
        vo({ type: "mcp_progress", status: "progress", serverName: e.name, toolName: se.name, download: Kt });
      }
      vo({ type: "mcp_progress", status: "started", serverName: e.name, toolName: se.name });
      let So = Date.now(), oo = e, so = false, po = false, Do, zt = null, Vt = typeof we.__consentNonce === "string" ? we.__consentNonce : void 0;
      if ("__consentNonce" in we) {
        let { __consentNonce: Kt, ...wo } = we;
        we = wo;
      }
      (0, import_chunk_jejz6sfb.cUa)(Nt, { client: e, tool: se, args: we, parentMessage: Oe, context: le });
      let Ft = Te ? mh($e, Vt) : null;
      if (Te) dh(le.toolState.get(import_chunk_k46cdxhb.Nue), Te, se.name, we);
      let no, io = (Kt) => {
        if (so = Kt, Kt) {
          if (Do ??= re?.timing?.mark("approval"), !Yt && Re.name !== (0, import_chunk_f9x2f6cx.zS)() && zt === null) zt = (0, import_chunk_wx7ffn80.MV)();
        } else Do?.(), Do = void 0, zt?.(), zt = null;
      }, Ao = true, xt = false, fo = () => "url" in e.config && (0, import_chunk_2mwshd9r.Yu)(e.config.url) && pl(le) && !((0, import_chunk_f9x2f6cx.zS)() && (0, import_chunk_f9x2f6cx.zS)() !== "stdio"), Eo = async (Kt) => {
        let Co = { canUseTool: Be, toolUseContext: le, signal: Kt, backgrounded: () => Yt, onAwaitingUserInput: io, onProgress: Ue && $e ? _o : void 0, serverName: (0, import_chunk_dfyba0ch.PJt)(e), imageLimits: (0, import_chunk_yvba4101.ac)(le.modelFacts.model), authorization: () => Al(e.name, e.config, oo), carrier: Rl(e), toolName: se.name, hostFetch: async (lo, Me) => Mg(e, lo, Me) }, Io = false, Ho;
        for (let lo = 0; ; lo++) try {
          let Me = Ao ? $e : void 0;
          Ao = false;
          let St = re?.timing?.mark(e.config.type === "http" && (0, import_chunk_2mwshd9r.Cze)(e.config.url) ? "own" : "external"), { searchRedial: qt } = (0, import_chunk_qdcbcsg7.mt)();
          if (lo === 0 && qt?.allows(e) && (await Nn(e.name, e.config))?.type !== "connected") {
            let zo = await qt.redial([e], { cause: "tool_call", waitMs: (0, import_chunk_98tkmkvx.Wvt)(), signal: Kt }), qo = (await Nn(e.name, e.config))?.type;
            if (zo.length > 0 && qo !== "connected" && qo !== "needs-auth") throw St?.(), new import_chunk_jv7av99m.A(zo.join(" "), "MCP server not connected");
          }
          let ut = await rn(qe, { context: "MCP tool call", toolUseId: Me }).finally(St);
          oo = ut;
          let eo = ye || (0, import_chunk_865at33z.omn)(ut, se.name) || (0, import_chunk_865at33z.smn)(ut), Qt = (0, import_chunk_sjqze7qg.dis)(eo, se.name, le);
          if (Qt !== void 0) throw new import_chunk_jv7av99m.A(Qt, "account memory write from a spawned loop");
          (0, import_chunk_sjqze7qg.c7a)(Nt, eo, le, ut), Object.assign(Nt, (0, import_chunk_g78kc1rr.AMi)(ut, le)), (0, import_chunk_v3ek5a4a.I$a)(Nt, (0, import_chunk_865at33z.wke)(ut), se.name, le, Oe.message.id);
          let Bt = await Cg({ client: ut, clientConnection: qe, tool: se.name, args: we, meta: Nt, signal: Kt, imageLimits: (0, import_chunk_yvba4101.ac)(le.modelFacts.model), taskRegistry: le.taskRegistry, toolUseId: $e, onProgress: Ue && $e ? vo : void 0, requestDialog: le.requestDialog, endsAtInputRequest: le.endsAtInputRequest, takesSavedFiles: (0, import_chunk_8sy6wsb2.ssr)(e.config) !== void 0 && (0, import_chunk_8sy6wsb2.nsi)(le), storageV5: le.storageV5, credentials: le.credentials, callingModel: le.modelFacts.model, hasResultSizeAnnotation: ct || le.innerCall === true, resultReader: () => (0, import_chunk_am20pvy7.F9o)(Re.mcpInfo?.uiMeta, Yt || (0, import_chunk_xkpc4wvy.fYr)(Re.name, le)), onAwaitingUserInput: io, holdForQuestion: () => (Yt ? void 0 : le.holdForMcpQuestion?.()) ?? (() => {
          }), timing: re?.timing, offCriticalPath: ((0, import_chunk_865at33z.sXe)(le.agentContext) ?? (le.isBackgroundAgent ? le.agentId : void 0)) !== void 0, taskBackground: no && { ...no, ...(0, import_chunk_pyawkp3j.x7)() && (0, import_chunk_m0xr8k74.k8e)(ut.capabilities) && { downloadStep: Co } }, disallowTasks: le.agentId !== void 0 || le.options.isNonInteractiveSession && no === void 0 || (0, import_chunk_prn6030k._b)(e.name) && (0, import_chunk_865at33z.uI)(e.config), ccrNeedsApprovalRetry: fo() ? { canUseTool: Be, tool: Re, fullyQualifiedName: ke, toolUseContext: le, parentMessage: Oe } : void 0 });
          if (Bt.interrupted) throw new import_chunk_jv7av99m.Ie(import_chunk_hy0sycbj.cTr);
          if (vo({ type: "mcp_progress", status: "completed", serverName: e.name, toolName: se.name, elapsedTimeMs: Date.now() - So }), !Bt.isError) {
            if (La(se.name), (0, import_chunk_865at33z.wke)(e)) uc(le.toolState, Oe.message.id, Bt._meta);
            if ((0, import_chunk_prn6030k._b)(e.name) && (0, import_chunk_865at33z.uI)(e.config)) el(Bt.content, le);
            if (!Yt && (0, import_chunk_prn6030k._b)(e.name) && (0, import_chunk_865at33z.uI)(e.config)) (0, import_chunk_cdfjrfzp.C$a)(le), Bt.content = (0, import_chunk_7z55j6ad.UUa)(Bt.content, Bt._meta, le);
          }
          let bo = [];
          if (Bt.downloadOffers !== void 0) {
            po = true;
            try {
              bo = await (0, import_chunk_8sy6wsb2.xRn)(Bt, e.config, Co);
            } finally {
              po = false;
            }
          }
          if (lo > 0) (0, import_chunk_cqa9hrgx.u)("mcp_session_recovery");
          let $o = (0, import_chunk_jejz6sfb.t8o)(e.config, (0, import_chunk_w4dc83v7.PH)(Bt._meta)), jo = (0, import_chunk_507k3c1m.RR)() ? Bo.sdkAgentTaskMeta(Bt._meta) : void 0, ko = $o || jo ? { ...$o, ...jo } : void 0;
          return { data: Ho === void 0 ? Bt.content : Kd(Bt.content, e.name, Ho), ...Bt.urlElicitationDeclined && { urlElicitationDeclined: Bt.urlElicitationDeclined }, ...bo.length > 0 && { connectorFileLines: bo }, ...(ko || Bt.structuredContent || Bt.resourceLinks) && { mcpMeta: { ...ko && { _meta: ko }, ...Bt.structuredContent && { structuredContent: Bt.structuredContent }, ...Bt.resourceLinks && { resourceLinks: Bt.resourceLinks } } } };
        } catch (Me) {
          po = true;
          try {
            await (0, import_chunk_8sy6wsb2.b7r)(Me, e.config, Co);
          } finally {
            po = false;
          }
          if (Ho !== void 0 && Me instanceof import_chunk_yz5b8aaa._v && Me.requestedScope !== void 0 && e.config.type === "http") Vd(e.name, e.config, Ho, Me.requestedScope);
          if (!Io && Me instanceof import_chunk_yz5b8aaa._v && Me.requestedScope !== void 0 && zd() && qe.config.type === "http" && qe.config.oauth?.xaa !== true && qd(qe.config, Me.requestedScope) && !Wd(qe.name, qe.config, Me.requestedScope) && pl(le) && le.agentId === void 0 && Re.name !== (0, import_chunk_f9x2f6cx.zS)() && !le.options.isNonInteractiveSession && !(0, import_chunk_h3t3td58.$U)() && !(0, import_chunk_865at33z.sf)() && (0, import_chunk_f9x2f6cx.np)() === void 0 && !(0, import_chunk_bzyb60p0.gi)(e.name) && !(0, import_chunk_bzyb60p0.Ene)(qe.name, qe.config)) {
            let St = qe.config;
            io(true);
            let qt;
            try {
              qt = await Gd({ serverName: e.name, config: St, requestedScope: Me.requestedScope, canUseTool: Be, toolUseContext: le, signal: Kt, performOAuthFlow: import_chunk_tgn73pvk.zri, reconnect: (ut, eo) => Ti(ut, eo, le.storageV5, le.credentials), discard: (ut, eo) => Xo(ut, eo), isPermitted: (ut, eo) => !(0, import_chunk_bzyb60p0.gi)(ut) && !(0, import_chunk_bzyb60p0.Ene)(ut, eo) });
            } finally {
              io(false);
            }
            if (qt === "reauthenticated") {
              Io = true, Ho = Me.requestedScope, (0, import_chunk_k449cc64.He)(e.name, `Retrying tool '${se.name}' after the consented step-up re-auth`), lo -= 1;
              continue;
            }
          }
          if (!xt && Me instanceof import_chunk_jv7av99m.A && Me.errorClass === import_chunk_hy0sycbj.nji && ad(le) && le.toolUseId !== void 0 && le.lateAnswerFor === void 0 && (0, import_chunk_bzyb60p0.Nnt)(le) && !Yt && oo.type === "connected" && oo.protocolEra === "modern" && !((0, import_chunk_prn6030k._b)(e.name) && (0, import_chunk_865at33z.uI)(e.config)) && fo()) {
            xt = true, io(true);
            let St;
            try {
              St = await dd({ canUseTool: Be, tool: Re, args: we, toolUseContext: le, parentMessage: Oe, toolUseId: le.toolUseId, signal: Kt });
            } finally {
              io(false);
            }
            if (St) {
              (0, import_chunk_jejz6sfb.woi)(Nt, le.session, le.toolUseId, e.name, e.config), lo -= 1;
              continue;
            }
          }
          if (Me instanceof import_chunk_yz5b8aaa.iK && lo < 1 && (!Me.mayHaveRun || Re.isConcurrencySafe(we) || se.annotations?.idempotentHint === true)) {
            (0, import_chunk_cqa9hrgx.l)("mcp_session_recovery", Me.expiryKind), (0, import_chunk_k449cc64.He)(e.name, `Retrying tool '${se.name}' after session recovery`);
            continue;
          }
          if (Me instanceof import_chunk_yz5b8aaa.iK) (0, import_chunk_cqa9hrgx.m)("mcp_session_recovery", lo < 1 ? "may_have_run_no_retry" : "session_retry_exhausted");
          else if (lo > 0 && !Kt.aborted) (0, import_chunk_cqa9hrgx.m)("mcp_session_recovery", "retry_failed_other");
          if (vo({ type: "mcp_progress", status: "failed", serverName: e.name, toolName: se.name, elapsedTimeMs: Date.now() - So }), !Kt.aborted) (0, import_chunk_yv3afk5n.m4e)(e.name, Me);
          if (Me instanceof Error && !(Me instanceof import_chunk_jv7av99m.A)) {
            let St = Me.constructor.name, qt = () => Kt.aborted ? "other" : (0, import_chunk_yz5b8aaa.gz)(Me);
            if (St === "Error") {
              let ut = (0, import_chunk_jbjjrhxt.gl)(Me, e.config);
              throw Object.assign(new import_chunk_jv7av99m.A(ut, ut.slice(0, 200)), { mcpErrorSource: qt() });
            }
            if ("code" in Me && ((St === "McpError" || St === "ProtocolError") && typeof Me.code === "number" || (St === "SdkError" || St === "SdkHttpError") && (typeof Me.code === "number" || typeof Me.code === "string" && Ah.has(Me.code)))) {
              let ut = Object.assign(new import_chunk_jv7av99m.A(Me.message, `${St} ${Me.code}`), { mcpErrorSource: qt() });
              throw _g(Me) ? (0, import_chunk_sjqze7qg.rDe)(ut) : ut;
            }
          }
          throw (0, import_chunk_865at33z.iMl)(Me, e, se.name), Me;
        }
      }, mo = Eo;
      if (Te) mo = hh(Eo, { designSession: le.toolState.get(import_chunk_k46cdxhb.Nue), approvedConsentBit: Ft?.bit ?? null, consentAskReachesUser: (Ft?.askReachesUser ?? false) && eu(le), credentials: le.credentials });
      if (se.name === import_chunk_w8ry7jkt.gsr && (0, import_chunk_w8ry7jkt.psi)(e)) {
        let { withTaskFilesRemembered: Kt } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-t8gjc8md.js")));
        mo = Kt(mo, { client: e, args: we, session: le.session });
      }
      let co = !le.agentId && le.taskRegistry !== import_chunk_z6hn62tj.Ppe && Re.name !== (0, import_chunk_f9x2f6cx.zS)();
      if (an && co) {
        let Kt = an.getMcpAutoBackgroundMs(e.config, { isNonInteractiveSession: le.options.isNonInteractiveSession }), wo = () => (0, import_chunk_8ewjdpbn.Kp)().isMovedCallResultAwaited(Re, we, le), Co = Kt === 0 && an.isMcpCallMovableWithoutTimer(e.config, { serverName: e.name, isNonInteractiveSession: le.options.isNonInteractiveSession, isInnerCall: le.innerCall === true, isResultAwaited: wo });
        if (Kt > 0 || Co) {
          let Io = { becameTask: false };
          if (!Co && (0, import_chunk_507k3c1m.RR)() && !(0, import_chunk_507k3c1m.ZHi)()) no = { share: Io, session: le.session, storageV5: le.storageV5, credentials: le.credentials, onBackgrounded: () => {
            Yt = true;
          } };
          return an.callMcpToolWithAutoBackground({ run: mo, serverName: e.name, toolName: se.name, accountMemoryTool: (0, import_chunk_xfr8663h.QRe)(Re), toolUseId: $e, parentAbortController: le.abortController, taskRegistry: le.taskRegistry, autoBackgroundMs: Co ? null : Kt, storageV5: le.storageV5, credentials: le.credentials, hasPendingElicitation: () => so || ((oo.type === "connected" ? oo.transportErrorState?.pendingElicitations : void 0) ?? 0) > 0, isResultAwaited: wo, holdsAutoBackground: () => po && (0, import_chunk_jg3mepas.Ly)(), scriptWait: le.innerCall ? le.scriptWait : void 0, onBackgrounded: () => {
            Yt = true;
          }, share: Io, foregroundCalls: le.innerCall ? void 0 : import_chunk_bzyb60p0.G_t.of(le.session), noticeGate: (0, import_chunk_bzyb60p0.vGa)({ hookCaller: le.hookCaller, hookServesModel: le.hookServesModel, pluginUnnamed: le.pluginUnnamed }) });
        }
      }
      let Vo = e.type === "connected" && e.hostFollowsTasks === true && !(0, import_chunk_xkpc4wvy.fYr)(Re.name, le);
      if (co && (0, import_chunk_507k3c1m.Apl)(Vo)) no = { share: { becameTask: false }, session: le.session, storageV5: le.storageV5, credentials: le.credentials, onBackgrounded: () => {
        Yt = true;
      } };
      return mo(le.abortController.signal);
    } });
    if (Pe && (se.name === "file_upload" || se.name === "browser_batch")) {
      let we = !(0, import_chunk_865at33z.p6t)(e.config) && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && import_chunk_c203g5kd.s.CLAUDE_CODE_IS_COWORK, le = Re.call;
      if (Re.call = async (Be, Oe, Ue, re, $e, qe) => {
        let { FILE_UPLOAD_MAX_TOTAL_BYTES: _t, passThroughChromeFileUploadInput: Dt, prepareChromeFileUploadInput: Nt } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0c57vp4a.js"))), Yt = we ? await Dt(se.name, Be ?? {}, (0, import_chunk_bz1f2qnq.Z)(Oe)) : await Nt(se.name, Be ?? {}, (0, import_chunk_bz1f2qnq.Z)(Oe), (0, import_chunk_865at33z.uI)(e.config) ? { maxTotalBytes: (0, import_chunk_b3gt63am.Wfo)(se._meta, _t), hosted: { session: Oe.session, signal: Oe.abortController.signal, cardListed: (0, import_chunk_b3gt63am.Bfo)(se._meta) } } : void 0);
        if (Yt.error) throw new import_chunk_jv7av99m.A(Yt.error, "Claude in Chrome file_upload path rejected");
        return le(Yt.input ?? Be, Oe, Ue, re, $e, Yt.callMeta ? { ...qe, mcpCallMeta: Yt.callMeta } : qe);
      }, se.name === "file_upload" && (0, import_chunk_865at33z.uI)(e.config) && (0, import_chunk_b3gt63am.Bfo)(se._meta)) Re.askInputPreparer = async (Be, Oe) => {
        let { chromeUploadCardPreparer: Ue } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-57vexvap.js")));
        return Ue(Be, { readPermissions: () => (0, import_chunk_bz1f2qnq.Z)(Oe), session: Oe.session, signal: Oe.abortController.signal, fromSubagent: Oe.agentId !== void 0 }, se._meta);
      };
    }
    if (e.config.type === "sdk" && (0, import_chunk_bz1f2qnq.Fat)(e.name) && import_chunk_bz1f2qnq.s2t.includes(se.name) && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_2mwshd9r.mK)().status === "absent") {
      let we = import_chunk_c203g5kd.s.CLAUDE_CODE_IS_COWORK, le = se._meta?.[import_chunk_bz1f2qnq.vwl] === true, Be = Re.call;
      if (Re.call = async (Oe, Ue, re, $e, qe, _t) => {
        let Dt = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-h24fjfvb.js"))), Nt = we ? await Dt.paneScreenedUploadCall(Oe, (0, import_chunk_bz1f2qnq.Z)(Ue), Ue.mcpRequestMeta) : await Dt.paneFileUploadCall(Oe, (0, import_chunk_bz1f2qnq.Z)(Ue), Ue.mcpRequestMeta, le, Ue.autoModeClassified === true);
        return Be(Nt.input, { ...Ue, mcpRequestMeta: Nt.mcpRequestMeta }, re, $e, qe, _t && { ..._t, mcpCallMeta: {} });
      }, we) {
        let Oe = Re.validateInput;
        Re.validateInput = async (Ue, re) => {
          let $e = await Oe?.(Ue, re);
          if ($e?.result === false) return $e;
          let qe = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-h24fjfvb.js")));
          return await qe.paneScreenedUploadRefusal(Ue, (0, import_chunk_bz1f2qnq.Z)(re)) ?? $e ?? { result: true };
        };
      }
    }
    if (ic(Re, se._meta, e, r), (0, import_chunk_w8ry7jkt.P7r)(se.name)) {
      let we = se.name, le = Re.validateInput;
      Re.validateInput = async (Ue, re) => {
        let $e = le ? await le(Ue, re) : { result: true };
        if (!$e.result) return $e;
        let { startTaskInputRefusal: qe } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-24qnmrba.js"))), _t = qe(e, we, Ue, Re.inputJSONSchema, re.session);
        return _t === void 0 ? $e : { result: false, message: _t, errorCode: 2 };
      };
      let Be = Re.prompt;
      Re.prompt = async (Ue) => {
        let re = await Be(Ue), $e = await Ue.getToolPermissionContext();
        if ($e.isRemoteMode !== true) return re;
        let { startTaskFilesPromptNote: qe } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-24qnmrba.js"))), _t = qe(e, we, $e);
        return _t === void 0 ? re : `${re}

${_t}`;
      };
      let Oe = Re.call;
      if (Re.call = async (Ue, re, $e, qe, _t, Dt) => {
        let Nt = Ue ?? {};
        if (!Array.isArray(Nt.files) || Nt.files.length === 0) return Oe(Ue, re, $e, qe, _t, Dt);
        let { prepareStartTaskFileInputs: Yt, removeStartTaskUploadsFor: vo, startTaskInputRefusal: _o, startTaskSendRefusal: So } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-24qnmrba.js"))), oo = re.toolUseId, so = (0, import_chunk_sjqze7qg.rbi)(re.session, oo, Nt.files);
        if (so !== void 0 && oo !== void 0) {
          let Vt = So(so.uploadStartedAt, we);
          if (Vt !== void 0) throw await (0, import_chunk_sjqze7qg.mnn)(re.session, so), new import_chunk_jv7av99m.A(Vt, "start_task files not sent after the approval");
          so.state = "sending", (0, import_chunk_sjqze7qg.obi)(re.session, oo, () => So(so.uploadStartedAt, we));
          try {
            return await Oe(Ue, re, $e, qe, _t, Dt);
          } catch (Ft) {
            if ((0, import_chunk_sjqze7qg.QHn)(Ft)) so.state = "pending", await (0, import_chunk_sjqze7qg.mnn)(re.session, so);
            throw Ft;
          } finally {
            (0, import_chunk_sjqze7qg.sbi)(re.session, oo), (0, import_chunk_sjqze7qg.wXa)(re.session, so);
          }
        }
        let po = _o(e, we, Nt, Re.inputJSONSchema, re.session);
        if (po !== void 0) throw new import_chunk_jv7av99m.A(po, "start_task input refused");
        let Do = Date.now(), zt = await Yt(e, we, Nt, (0, import_chunk_bz1f2qnq.Z)(re), re.abortController.signal, re.session);
        if (zt.error) throw new import_chunk_jv7av99m.A(zt.error, "start_task file input rejected");
        if (zt.input === void 0 || oo === void 0) return Oe(zt.input ?? Ue, re, $e, qe, _t, Dt);
        (0, import_chunk_sjqze7qg.obi)(re.session, oo, () => So(Do, we));
        try {
          return await Oe(zt.input, re, $e, qe, _t, Dt);
        } catch (Vt) {
          if ((0, import_chunk_sjqze7qg.QHn)(Vt)) await vo(e, re.session, zt.input.files);
          throw Vt;
        } finally {
          (0, import_chunk_sjqze7qg.sbi)(re.session, oo);
        }
      }, (0, import_chunk_w8ry7jkt.NBa)(e)) Re.askInputPreparer = async (Ue, re, $e) => {
        if (!Array.isArray(Ue.files) || Ue.files.length === 0) return;
        let { startTaskAskInputPreparer: qe, startTaskInputRefusal: _t } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-24qnmrba.js"))), Dt = qe(e, we, Ue, (0, import_chunk_bz1f2qnq.Z)(re), re.abortController.signal, re.session, $e);
        return Dt && { prepare: () => {
          let Nt = _t(e, we, Ue, Re.inputJSONSchema, re.session);
          return Nt === void 0 ? Dt.prepare() : Promise.resolve({ error: Nt });
        } };
      };
    }
    let { validateInput: Gt, call: Xe, askInputPreparer: Ce } = Re;
    if (se._meta?.[import_chunk_q1sh0fgd.s4e] !== void 0) mc(Re, { client: e, name: se.name, meta: se._meta, schema: Re.inputJSONSchema }, (we) => async (le, Be) => {
      let Oe = (0, import_chunk_8v27xkv5.i8o)(e, we.options.mcpClients);
      return (await Dn({ client: await rn(Oe, { context: "MCP tool call" }), tool: le, args: Be, signal: we.abortController.signal, imageLimits: (0, import_chunk_yvba4101.ac)(we.modelFacts.model), hasResultSizeAnnotation: true, storageV5: we.storageV5, credentials: we.credentials, callingModel: void 0, rowConfig: Oe.config })).structuredContent;
    });
    {
      let we = (0, import_chunk_wpyz5pav.L$t)(e, se.name, yt);
      if (we !== void 0) (0, import_chunk_wpyz5pav.ZAi)(Re, we, { validateInput: Gt, call: Xe, askInputPreparer: Ce }, ni, (0, import_chunk_wpyz5pav.QAi)(e));
      if (se.name === import_chunk_pcsags68.pgr) (0, import_chunk_pcsags68.pAi)(Re, e);
    }
    if ((0, import_chunk_wpyz5pav.L$t)(e, se.name) === void 0) Sc(Re, { client: e, name: se.name, meta: se._meta, schema: Re.inputJSONSchema, authorization: () => Al(e.name, e.config), downloadCarrier: Rl(e) }, (we, le) => {
      let Be = (0, import_chunk_81nggker.m8o)(e);
      return async (Oe, Ue) => {
        let re = we.toolUseId ?? ni(le);
        return Dn({ client: await rn(e, { context: "MCP tool call" }), tool: se.name, args: Oe, meta: { ...(0, import_chunk_865at33z.Xzn)((0, import_chunk_jejz6sfb.yoi)(e.config, we.mcpRequestMeta)), ...re && { "claudecode/toolUseId": re }, ...(0, import_chunk_b0n2a2c9.EYr)(e) && (0, import_chunk_wvxk15ee.MAi)(le.requestId) }, filesRound: Ue, downloadsOn: Be, signal: we.abortController.signal, imageLimits: (0, import_chunk_yvba4101.ac)(we.modelFacts.model), hasResultSizeAnnotation: ct || we.innerCall === true, resultReader: (0, import_chunk_am20pvy7.F9o)(Re.mcpInfo?.uiMeta, (0, import_chunk_xkpc4wvy.fYr)(Re.name, we)), toolUseId: re, storageV5: we.storageV5, credentials: we.credentials, callingModel: we.modelFacts.model, rowConfig: e.config });
      };
    }, (0, import_chunk_dfyba0ch.kTe)(e) === void 0 ? void 0 : async (we, le) => (0, import_chunk_dfyba0ch.YBa)(Xt((await rn(e, { context: "MCP tool call" })).client), we, le));
    if (!(0, import_chunk_wpyz5pav.XAi)(e, se.name, yt)) (0, import_chunk_wpyz5pav.ksl)(Re);
    if (Re.mcpInfo !== void 0 && (0, import_chunk_wpyz5pav.WWe)(e, se.name) !== void 0) Re.mcpInfo = { ...Re.mcpInfo, fileReference: true };
    if (Mt || (0, import_chunk_865at33z.yhe)(e.config)) Vm()?.applyArtifactRules(e.config, Re);
    if (ht) il()?.wrapArtifactsMcpLaptopPublishing(e.config, Re);
    if (Ne) Km()?.wrapClaudeDocsCreateWake(Re);
    if (Pe && (0, import_chunk_bzyb60p0.Kcr)(e.name, e.config)) {
      let we = Re.call;
      Re.call = async (le, Be, Oe, Ue, re, $e) => {
        let qe = (0, import_chunk_2zeyvjwb.NPe)("allow_claude_browser_extension", "Claude in Chrome", "is");
        if (qe !== null) throw new import_chunk_jv7av99m.A(qe, "Claude in Chrome call refused by org policy");
        return Di(e), we(le, Be, Oe, Ue, re, $e);
      };
    }
    if ((0, import_chunk_r3kja8v6.ue)() && (0, import_chunk_ze4kt7fs.A7)(e) !== void 0) {
      let we = Re.call;
      Re.call = async (le, Be, ...Oe) => ((0, import_chunk_0s8m8bar._7r)(ke, Be), we(le, Be, ...Oe));
    }
    let wt = Re.call;
    return Re.call = async (we, le, Be, Oe, Ue, re) => {
      if (le.options.activeMcpServer = e.name, le.options.activeMcpTool = se.name, e.config.pluginSource) (0, import_chunk_54j6k3fn.ij)(e.config.pluginSource), (0, import_chunk_bzyb60p0.ZJ)(e.config.pluginSource, "mcp", { kind: "mcp-server", name: e.name });
      let $e = pe();
      if ($e) (0, import_chunk_865at33z.VRo)(e.name);
      let qe = (0, import_chunk_w8ry7jkt.P7r)(se.name) && (0, import_chunk_sjqze7qg.rbi)(le.session, le.toolUseId, we?.files) !== void 0 || (se._meta?.[import_chunk_q1sh0fgd.s4e] !== void 0 ? (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0h7zbgwq.js")))).hasFileGrants(le.session, le.toolUseId) : false) || (0, import_chunk_0a5vv9nr.VBa)(le.permissionPhase);
      return wt(qe ? we : (0, import_chunk_bzyb60p0.Hza)(we, se.name, e.name, $e, (0, import_chunk_865at33z.b)("tengu_mcp_strip_trailing_xml_tags", false), P), le, Be, Oe, Ue, re);
    }, Re;
  })).filter(Eh), It = Et.map((se) => (Qe?.tools?.[se.name] ?? se.description ?? "").length), Ot = It.reduce((se, ke) => se + ke, 0);
  if ((0, import_chunk_y53wbr8a.a)("tengu_mcp_tools_listed", { transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), listDurationMs: Date.now() - r, toolCount: xe.length, alwaysLoadCount: (0, import_chunk_4smdap7r.U)(xe, (se) => se.alwaysLoad === true), descriptionTotalLength: Ot, descriptionMaxLength: It.reduce((se, ke) => Math.max(se, ke), 0), descriptionMeanLength: It.length ? Math.round(Ot / It.length) : 0, descriptionOverLimitCount: (0, import_chunk_4smdap7r.U)(It, (se) => se > oe), discoverySource: (0, import_chunk_78g0060s.f)(h), ...R, mcpServerName: (0, import_chunk_78g0060s.R$)((0, import_chunk_3f4m74y6.xn)(e.name), (0, import_chunk_865at33z.ZV)(e.name, e.config)) }), h === "live") (0, import_chunk_cqa9hrgx.u)("mcp_list_tools");
  if ((0, import_chunk_865at33z.p6t)(e.config) && (0, import_chunk_prn6030k._b)(e.name)) (0, import_chunk_ca9ws28w.BUa)(xe.length, h);
  if ((0, import_chunk_w8ry7jkt.psi)(e)) {
    let { addTaskFileSaves: se } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-t8gjc8md.js")));
    se(xe, { client: e, listed: De, compose: (ke, ct, bt, jt) => El({ ...Ke, accountMemoryServer: kt, effectiveMaxPermission: jt, listed: ke, call: ct, overrides: bt }) });
  }
  return xe;
}
async function lg(e, o) {
  let r = await o.page.then((g) => ({ result: g }), () => {
    return;
  });
  if (r === void 0) return o;
  let h = typeof r.result === "object" && r.result !== null ? (0, import_chunk_qdcbcsg7.Vct)(r.result) : void 0;
  return (0, import_chunk_478m53m1.Q1a)(e, h === "live" ? "used" : h === "stub" ? "dropped_stub" : "dropped_unmarked"), h === "live" ? o : void 0;
}
var nr = (0, import_chunk_cwkztn5x.kfo)(async (e, o, r) => {
  if (e.type !== "connected") return [];
  let h = (0, import_chunk_yrpmp1hk.hi)(), g = lu(e);
  try {
    if (!e.capabilities?.tools) {
      let F = [];
      return Zs(F, []), F;
    }
    let y = Date.now(), M = Xt(e.client), k = gn(M) ? void 0 : (0, import_chunk_478m53m1.X1a)(M), P, R = 0, I = (F) => qr(M, e.name, e.config, "tools/list", Su(e.config), (ae) => (R += ae.invalidLeftOut ?? 0, ae.tools), F, (ae) => {
      R = 0, (0, import_chunk_478m53m1.J1a)(M, ae);
    }), L = await Ld(M, M.getProtocolEra?.() === "modern" ? Pm(M, e.name, e.config) : k === void 0 ? I(void 0) : lg(M, k).then((F) => (P = F, I(F?.page))), () => P?.sentAtMs);
    if (R > 0) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tool_listing_invalid_left_out"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), skippedCount: R, ...yo(e.config, e.name) });
    if ((0, import_chunk_5ft9yxne.T7)(e.config, L)) (0, import_chunk_5ft9yxne.Q6)(L);
    e.toolsListError = void 0, e.discoveryAuthFailure = void 0;
    let z = L;
    if (r === true) {
      let F = [];
      return Zs(F, z), F;
    }
    let H = await fu(e, z, y, "live", g);
    if (g.seq === g.state.started) e.toolsListError = void 0, e.discoveryAuthFailure = void 0;
    return Zs(H, z), H;
  } catch (y) {
    let M = (0, import_chunk_538r8e0n.Nm)(e.name, e.config, (0, import_chunk_jbjjrhxt.gl)(y, e.config));
    if (e.config.type === "claudeai-proxy" && (0, import_chunk_v6x86eph.xor)(y)) {
      if ((0, import_chunk_y53wbr8a.a)("tengu_mcp_server_needs_auth", { transportType: (0, import_chunk_78g0060s.S)("claudeai-proxy"), cause: (0, import_chunk_78g0060s.S)("discovery_tools_list"), ...yo(e.config, e.name) }), (0, import_chunk_yrpmp1hk.HY)(h)) ki(e.name, e.config.id, void 0, o);
      return (0, import_chunk_cqa9hrgx.l)("mcp_list_tools", "mcp_list_tools_needs_auth"), (0, import_chunk_k449cc64.He)(e.name, "tools/list 401/403 on claude.ai proxy \u2014 flagging needs-auth"), e.discoveryAuthFailure = true, e.toolsListTimedOut = false, (0, import_chunk_cwkztn5x.td)().toolLists.delete((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config)), [];
    }
    if ((0, import_chunk_v6x86eph.xor)(y) && (0, import_chunk_6wgyy4rn.rRn)(e.name, e.config)) e.discoveryAuthFailure = true;
    let k = e.config.type === "claudeai-proxy" && (0, import_chunk_v6x86eph.Lgt)(y), P = k ? "mcp_list_tools_claudeai_bearer_rejected" : (y instanceof import_chunk_racn22qq.ef || y instanceof import_chunk_racn22qq.Xa) && !(y instanceof import_chunk_racn22qq.PO) ? `mcp_list_tools_${du[y.code] ?? "mcperr_other"}` : M.includes("timed out") ? "mcp_list_tools_timeout" : "mcp_list_tools_failed";
    if ((0, import_chunk_cqa9hrgx.l)("mcp_list_tools", P), (k ? import_chunk_k449cc64.He : import_chunk_k449cc64.id)(e.name, `Failed to fetch tools: ${M}`), e.toolsListError = M, e.toolsListTimedOut = Mi(y), k) e.discoveryBearerRejected = true;
    e.toolsListUnsupported = (0, import_chunk_akez6ycw.soi)(y);
    let I = [];
    if ((0, import_chunk_qdcbcsg7.mt)().toolsListErrorByResult.set(I, M), !k) {
      let L = yo(e.config, e.name);
      (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("tools_list_failed"), transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), ...L, mcpServerName: (0, import_chunk_78g0060s.R$)((0, import_chunk_3f4m74y6.xn)(e.name), (0, import_chunk_865at33z.ZV)(e.name, e.config)) });
    }
    return (0, import_chunk_cwkztn5x.td)().toolLists.delete((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config)), I;
  }
}, (e) => (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), () => (0, import_chunk_cwkztn5x.td)().toolLists, "tools");
function mu(e, o, r, h, g, y) {
  let M = (0, import_chunk_jbjjrhxt.gl)(o, e.config), k = e.config.type === "claudeai-proxy" && (0, import_chunk_v6x86eph.xor)(o), P = e.config.type === "claudeai-proxy" && (0, import_chunk_v6x86eph.Lgt)(o);
  if (P) e.discoveryBearerRejected = true;
  let R = k ? `${r}_needs_auth` : P ? `${r}_claudeai_bearer_rejected` : (o instanceof import_chunk_racn22qq.ef || o instanceof import_chunk_racn22qq.Xa) && !(o instanceof import_chunk_racn22qq.PO) ? `${r}_${du[o.code] ?? "mcperr_other"}` : M.includes("timed out") ? `${r}_timeout` : `${r}_failed`;
  if (h(R), (k || P ? import_chunk_k449cc64.He : import_chunk_k449cc64.id)(e.name, `Failed to fetch ${y}: ${M}`), !k && !P) (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: g, transportType: (0, import_chunk_78g0060s.f)(e.config.type ?? "stdio"), ...yo(e.config, e.name), mcpServerName: (0, import_chunk_78g0060s.R$)((0, import_chunk_3f4m74y6.xn)(e.name), (0, import_chunk_865at33z.ZV)(e.name, e.config)) });
}
var jr = (0, import_chunk_cwkztn5x.kfo)(async (e) => {
  if (e.type !== "connected") return [];
  try {
    if (!e.capabilities?.resources) {
      let h = [];
      return or(h, []), h;
    }
    let o = await qr(Xt(e.client), e.name, e.config, "resources/list", import_chunk_racn22qq.s0t, (h) => h.resources);
    (0, import_chunk_5ft9yxne.vsn)(e.config, o), (0, import_chunk_cqa9hrgx.u)("mcp_list_resources");
    let r = o.map((h) => ({ ...h, server: e.name }));
    return or(r, o), r;
  } catch (o) {
    mu(e, o, "mcp_list_resources", (h) => (0, import_chunk_cqa9hrgx.l)("mcp_list_resources", h), (0, import_chunk_78g0060s.S)("resources_list_failed"), "resources"), (0, import_chunk_cwkztn5x.td)().resourceLists.delete((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config));
    let r = [];
    if (o instanceof import_chunk_racn22qq.ef && o.code === import_chunk_racn22qq.ld.MethodNotFound) or(r, []);
    else (0, import_chunk_qdcbcsg7.mt)().discoveryFetchErrors.set(r, (0, import_chunk_jv7av99m.D)(o));
    return r;
  }
}, (e) => (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), () => (0, import_chunk_cwkztn5x.td)().resourceLists, "resources"), rr = (0, import_chunk_cwkztn5x.kfo)(async (e) => {
  if (e.type !== "connected") return [];
  try {
    if (!e.capabilities?.resources) return [];
    let o = await qr(Xt(e.client), e.name, e.config, "resources/templates/list", import_chunk_racn22qq.Dor, (r) => r.resourceTemplates);
    return (0, import_chunk_5ft9yxne.vsn)(e.config, o), (0, import_chunk_y53wbr8a.a)("tengu_mcp_resource_templates_fetched", { template_count: o.length }), (0, import_chunk_cqa9hrgx.u)("mcp_list_resource_templates"), o.map((r) => ({ ...r, server: e.name }));
  } catch (o) {
    (0, import_chunk_cwkztn5x.td)().resourceTemplateLists.delete((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config)), (0, import_chunk_k449cc64.He)(e.name, `Failed to fetch resource templates: ${(0, import_chunk_jbjjrhxt.gl)(o, e.config)}`);
    let r = [];
    if (!(o instanceof import_chunk_racn22qq.ef && o.code === import_chunk_racn22qq.ld.MethodNotFound)) (0, import_chunk_qdcbcsg7.mt)().discoveryFetchErrors.set(r, (0, import_chunk_jv7av99m.D)(o));
    return r;
  }
}, (e) => (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), () => (0, import_chunk_cwkztn5x.td)().resourceTemplateLists, "resources");
function oR(e, o) {
  let r = [];
  for (let h of e) {
    if (h.type !== "connected") continue;
    if (h.name in o) continue;
    r.push(rr(h).then((g) => ({ client: h, templates: g })));
  }
  return Promise.all(r);
}
async function nR(e, o, r, h, g) {
  if (!e.capabilities?.completions) return [];
  try {
    let y = await Xt(e.client).complete({ ref: { type: "ref/resource", uri: o }, argument: { name: r, value: h }, context: Object.keys(g).length > 0 ? { arguments: g } : void 0 });
    return (0, import_chunk_cqa9hrgx.u)("mcp_complete_resource_template"), y.completion.values;
  } catch (y) {
    return (0, import_chunk_cqa9hrgx.m)("mcp_complete_resource_template", "mcp_complete_resource_template_failed"), (0, import_chunk_k449cc64.He)(e.name, `Failed to complete resource template: ${(0, import_chunk_jbjjrhxt.gl)(y, e.config)}`), [];
  }
}
var zr = (0, import_chunk_cwkztn5x.kfo)(async (e) => {
  if (e.type !== "connected") return [];
  try {
    if (!e.capabilities?.prompts) {
      let h = [];
      return ei(h, []), h;
    }
    let o = await qr(Xt(e.client), e.name, e.config, "prompts/list", import_chunk_racn22qq.Nor, (h) => h.prompts);
    (0, import_chunk_cqa9hrgx.u)("mcp_list_prompts");
    let r = hu(e, o);
    return ei(r, o), r;
  } catch (o) {
    mu(e, o, "mcp_list_prompts", (h) => (0, import_chunk_cqa9hrgx.l)("mcp_list_prompts", h), (0, import_chunk_78g0060s.S)("prompts_list_failed"), "commands"), (0, import_chunk_cwkztn5x.td)().commandLists.delete((0, import_chunk_3bjtjsgp.Uo)(e.name, e.config));
    let r = [];
    if (o instanceof import_chunk_racn22qq.ef && o.code === import_chunk_racn22qq.ld.MethodNotFound) ei(r, []);
    else (0, import_chunk_qdcbcsg7.mt)().discoveryFetchErrors.set(r, (0, import_chunk_jv7av99m.D)(o));
    return r;
  }
}, (e) => (0, import_chunk_3bjtjsgp.Uo)(e.name, e.config), () => (0, import_chunk_cwkztn5x.td)().commandLists, "prompts");
function hu(e, o) {
  if ((0, import_chunk_5ft9yxne.T7)(e.config, o)) (0, import_chunk_5ft9yxne.Q6)(o);
  let r = (0, import_chunk_ttsnbbsg.$ri)(), h = o.flatMap((R) => r(R) ?? []), g = o.length - h.length;
  if (g > 0) (0, import_chunk_k449cc64.id)(e.name, (0, import_chunk_ttsnbbsg.wYr)("prompts", g, o.length));
  let y = e.config, M = (y.type === "http" || y.type === "sse") && (0, import_chunk_yz5b8aaa.koe)(y.url), k = (0, import_chunk_vfh414sa.RRn)(e.config), P = h.map((R) => {
    let I = Object.values(R.arguments ?? {}), L = I.map((H) => H.name), z = k?.prompts?.[R.name] ?? R.description;
    return { type: "prompt", name: "mcp__" + (0, import_chunk_3f4m74y6.xn)(e.name) + "__" + R.name, description: z ?? "", hasUserSpecifiedDescription: !!z, contentLength: 0, isEnabled: () => true, isHidden: false, isMcp: true, mcpInfo: (0, import_chunk_fpcs74d2.jRe)(e), progressMessage: "running", userFacingName() {
      return M ? R.name : `${e.name}:${R.name} (MCP)`;
    }, aliases: M ? [`${e.name}:${R.name}`, `${e.name}:${R.name} (MCP)`] : void 0, argNames: L, source: "mcp", async getPromptForCommand(H, F) {
      let ae = H.trim(), _e = ae ? ae.split(/\s+/) : [], be = (0, import_chunk_ze4kt7fs.A7)(e);
      if (be) throw be;
      try {
        let Q = I.filter((Ge, At) => Ge.required && _e[At] === void 0).map((Ge) => Ge.name);
        if (Q.length > 0) throw Error(`Missing required ${(0, import_chunk_7cfjrnwy.O)(Q.length, "argument")}: ${Q.join(", ")}. Usage: /mcp__${(0, import_chunk_3f4m74y6.xn)(e.name)}__${R.name} ${L.join(" ")}`);
        let Ae = await rn((0, import_chunk_8v27xkv5.i8o)(e, F.options.mcpClients), { signal: F.abortController.signal, context: "MCP prompt command" }), Ve = await Xt(Ae.client).getPrompt({ name: R.name, arguments: Ia(L, _e) }), Tt = (0, import_chunk_yvba4101.ac)(F.modelFacts.model), pt = await Promise.all(Ve.messages.map((Ge) => Ni(Ge.content, Ae.name, Tt, F.storageV5)));
        return (0, import_chunk_cqa9hrgx.u)("mcp_get_prompt"), (0, import_chunk_1ek4hhs6.LH)((0, import_chunk_px0hhsq7.lr)(e.name, R.name), (0, import_chunk_vhpt9t1j.Px)(Ae)), pt.flat();
      } catch (Q) {
        if (!(0, import_chunk_jv7av99m.Fe)(Q)) if ((0, import_chunk_1ek4hhs6.K9e)((0, import_chunk_vhpt9t1j.Px)(e), void 0), e.config.type === "claudeai-proxy" && (0, import_chunk_v6x86eph.Lgt)(Q)) (0, import_chunk_cqa9hrgx.l)("mcp_get_prompt", "mcp_get_prompt_claudeai_bearer_rejected"), (0, import_chunk_k449cc64.He)(e.name, `Error running command '${R.name}': ${(0, import_chunk_jbjjrhxt.gl)(Q, e.config)}`);
        else (0, import_chunk_cqa9hrgx.m)("mcp_get_prompt", "mcp_get_prompt_failed"), (0, import_chunk_k449cc64.id)(e.name, `Error running command '${R.name}': ${(0, import_chunk_jbjjrhxt.gl)(Q, e.config)}`);
        throw Q;
      }
    } };
  });
  return (0, import_chunk_jnrh77bs.pfo)(P, (R) => (0, import_chunk_k449cc64.He)(e.name, `Prompt '${R.name}' not listed: the server name ${import_chunk_jnrh77bs.URi}. Rename the server in your MCP configuration to list its prompts.`));
}
async function rR(e, o, r) {
  return (await Dn({ client: r, tool: e, args: o, signal: (0, import_chunk_cbnm4p23._r)().signal, imageLimits: import_chunk_r6fna520.Qv, idleTimeoutMs: 0, storageV5: void 0, credentials: void 0, callingModel: void 0 })).content;
}
function _u(e, o) {
  return (0, import_chunk_cqa9hrgx.l)("mcp_reconnect", "mcp_reconnect_identity_changed"), { client: { name: e, type: "failed", config: o, error: "Reconnect cancelled: the account changed while connecting. Choose Reconnect again.", errorCode: "IDENTITY_CHANGED" }, tools: [], commands: [] };
}
async function sR(e, o, r, h) {
  if (!(0, import_chunk_sjqze7qg.A5)()) return Ti(e, o, r, h);
  let g = (0, import_chunk_yrpmp1hk.hi)();
  if (await (0, import_chunk_yrpmp1hk.Zqe)($r(e, o)), (0, import_chunk_yrpmp1hk.qL)(o) && (0, import_chunk_yrpmp1hk.hi)() !== g) return _u(e, o);
  return Ti(e, o, r, h);
}
async function Ti(e, o, r, h, g = {}) {
  let y = (0, import_chunk_yrpmp1hk.hi)(), M = (0, import_chunk_yrpmp1hk.Zri)(e, o), k = (0, import_chunk_yrpmp1hk.qL)(o), P = () => k && (0, import_chunk_yrpmp1hk.hi)() !== y, R = () => _u(e, o);
  try {
    (0, import_chunk_hazyxdac.GPe)();
    let I = g.keepConnectionInUse ? {} : void 0;
    if (await (I === void 0 ? Xo(e, o) : Xo(e, o, I)), P()) return R();
    let L = (0, import_chunk_7625rswd.hU)(o);
    if (L) {
      if (await (0, import_chunk_44g93ygc.t4)((0, import_chunk_sjqze7qg.uae)(o, h), { serverName: e, context: import_chunk_7625rswd.Rbe }), P()) return R();
    }
    if ((0, import_chunk_bzyb60p0.tMn)(o, e) || L && (0, import_chunk_bzyb60p0.MO)(e, o)) {
      if (I?.connection !== void 0) {
        if (await Xo(e, o), P()) return R();
      }
      return { client: { name: e, type: "failed", config: o, ...(0, import_chunk_bzyb60p0.iw)("managed-policy", e, o) }, tools: [], commands: [] };
    }
    let z = go(e, o, void 0, r, h), H = await z;
    if (H.type === "needs-auth" && !(0, import_chunk_qdcbcsg7.mt)().refusedRefreshServers.has(e)) {
      if ((0, import_chunk_k449cc64.He)(e, "Reconnect returned 'needs-auth'; retrying once after cache clear"), P()) return R();
      let pt = (0, import_chunk_3bjtjsgp.Uo)(e, o);
      if ((0, import_chunk_cwkztn5x.td)().connections.get(pt) === z) (0, import_chunk_cwkztn5x.td)().connections.delete(pt);
      H = await go(e, o, void 0, r, h);
    }
    if (P()) {
      if (H.type === "connected") await Po(H);
      return R();
    }
    if (H.type !== "connected") return (0, import_chunk_cqa9hrgx.l)("mcp_reconnect", "mcp_reconnect_not_connected"), (0, import_chunk_8yvg0j99.fq)(o, { client: H, tools: [], commands: [] });
    if (o.type !== "claudeai-proxy") Ur(e, r);
    if (o.type === "http" || o.type === "sse") await (0, import_chunk_tgn73pvk.$9o)(e, o);
    (0, import_chunk_yrpmp1hk.xMe)(e);
    let F;
    if ((0, import_chunk_sjqze7qg.U_)()) F = await (0, import_chunk_yrpmp1hk._Ue)(e, o);
    if (P()) return await Po(H), R();
    let ae = !!H.capabilities?.resources, [_e, be, Q, Ae] = await Promise.all([nr(H, r), zr(H), (0, import_chunk_fpcs74d2.z_)() && ae ? Ro.fetchMcpSkillsForClient(H, r) : Promise.resolve([]), ae ? jr(H) : Promise.resolve([])]);
    if (P()) return await Po(H), R();
    if (H.discoveryAuthFailure) return (0, import_chunk_cqa9hrgx.l)("mcp_reconnect", "mcp_reconnect_needs_auth_discovery"), { client: { name: e, type: "needs-auth", config: o }, tools: [], commands: [] };
    if (o.type === "claudeai-proxy" && !H.discoveryBearerRejected) Ur(e, r);
    if (o.type === "claudeai-proxy" && !H.toolsListError && !H.discoveryBearerRejected) (0, import_chunk_sjqze7qg.wis)(e, r);
    ag(H, { tools: _e, commands: be, resources: Ae, identityEpoch: M, grantLeg: F });
    let Ve = [...be, ...Q], Tt = [];
    if (ae) {
      if (![import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e].some((Ge) => _e.some((At) => (0, import_chunk_4vsz8a99.gt)(At, Ge.name)))) Tt.push(import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e, import_chunk_ttsnbbsg.Qqe);
    }
    if (H.discoveryBearerRejected) (0, import_chunk_cqa9hrgx.l)("mcp_reconnect", "mcp_reconnect_bearer_rejected");
    else if (H.toolsListError) (0, import_chunk_cqa9hrgx.l)("mcp_reconnect", "mcp_reconnect_tools_list_failed");
    else (0, import_chunk_cqa9hrgx.u)("mcp_reconnect");
    return (0, import_chunk_8yvg0j99.fq)(o, { client: H, tools: [..._e, ...Tt], commands: Ve, resources: Ae.length > 0 ? Ae : void 0, resourceTemplates: [], ...I?.connection !== void 0 && H === I.connection && { keptConnectionInUse: true } });
  } catch (I) {
    return (0, import_chunk_cqa9hrgx.m)("mcp_reconnect", "mcp_reconnect_failed"), (0, import_chunk_k449cc64.id)(e, `Error during reconnection: ${(0, import_chunk_jbjjrhxt.gl)(I, o)}`), { client: { name: e, type: "failed", config: o }, tools: [], commands: [] };
  }
}
async function ti(e, o, r) {
  await (0, import_chunk_30a5awzz.Wk)(e, r, { concurrency: o });
}
async function iR(e, o) {
  if (e.length === 0) return 0;
  let r, h = new Promise((g) => {
    r = setTimeout((y) => y("deadline"), o, g);
  });
  try {
    let g = await Promise.all(e.map((y) => Promise.race([y.then(() => "settled", () => "settled"), h])));
    return (0, import_chunk_4smdap7r.U)(g, (y) => y === "deadline");
  } finally {
    clearTimeout(r);
  }
}
async function ug(e, o, r, h, g, y, M, k, P) {
  let R = (0, import_chunk_yrpmp1hk.hi)(), I = (pe) => (0, import_chunk_yrpmp1hk.hi)() !== R && (0, import_chunk_yrpmp1hk.qL)(pe), L = (pe) => {
    if (!I(pe.client.config)) e({ ...pe, attemptEpoch: R });
  };
  dn();
  let z = false, H = Object.entries(o ?? (await (0, import_chunk_bzyb60p0.vne)()).servers), F = [];
  for (let pe of H) if ((0, import_chunk_bzyb60p0.gi)(pe[0])) L({ client: { name: pe[0], type: "disabled", config: pe[1] }, tools: [], commands: [] });
  else F.push(pe);
  (0, import_chunk_qyhf6bts.jwl)(Object.fromEntries(F));
  let ae = F.length, _e = (0, import_chunk_4smdap7r.U)(F, ([pe, oe]) => oe.type === "stdio"), be = (0, import_chunk_4smdap7r.U)(F, ([pe, oe]) => oe.type === "sse"), Q = (0, import_chunk_4smdap7r.U)(F, ([pe, oe]) => oe.type === "http"), Ae = (0, import_chunk_4smdap7r.U)(F, ([pe, oe]) => oe.type === "sse-ide"), Ve = (0, import_chunk_4smdap7r.U)(F, ([pe, oe]) => oe.type === "ws-ide"), Tt = F.filter(([pe, oe]) => _l(oe)), pt = F.filter(([pe, oe]) => !_l(oe)), Ge = { totalServers: ae, stdioCount: _e, sseCount: be, httpCount: Q, sseIdeCount: Ae, wsIdeCount: Ve }, At = [], Ht = /* @__PURE__ */ new Map(), Et = (0, import_chunk_6wgyy4rn.r$a)(), Wt = async ([pe, oe]) => {
    try {
      let ge = () => {
        if ((0, import_chunk_w578pjby.c_)()) return (0, import_chunk_k449cc64.He)(pe, "Skipping connection (Claude Code is shutting down)"), true;
        if ((0, import_chunk_bzyb60p0.gi)(pe)) return L({ client: { name: pe, type: "disabled", config: oe }, tools: [], commands: [] }), true;
        if ((0, import_chunk_bzyb60p0.MO)(pe, oe)) return (0, import_chunk_k449cc64.He)(pe, "Skipping connection (blocked by managed policy)"), L({ client: { name: pe, type: "failed", config: oe, error: (0, import_chunk_bzyb60p0.iw)("managed-policy", pe, oe).error }, tools: [], commands: [] }), true;
        if ((0, import_chunk_bzyb60p0.Omi)(oe)) return (0, import_chunk_k449cc64.He)(pe, "Skipping connection (its plugin is not available now)"), L({ client: { name: pe, type: "failed", config: oe, error: import_chunk_271xsh6x.rDi, errorCode: "DISABLED" }, tools: [], commands: [] }), true;
        return false;
      };
      if (ge()) return;
      let Te = Ht.get(pe);
      if (Te !== void 0) {
        L({ client: { name: pe, type: "failed", config: oe, error: Te }, tools: [], commands: [] });
        return;
      }
      let Qe = await Et.ask(pe, oe, { hasLiveConnection: Tl, hasUnsettledDial: tg });
      if (Qe !== void 0) {
        L((0, import_chunk_6wgyy4rn.Tor)(pe, oe, Qe));
        return;
      }
      if (ge()) return;
      if ((0, import_chunk_qenyadqg.pYr)(oe)) {
        L({ client: { name: pe, type: "needs-auth", config: oe }, tools: (0, import_chunk_6wgyy4rn.Jte)(pe, oe), commands: [] });
        return;
      }
      if ((oe.type === "claudeai-proxy" || oe.type === "http" || oe.type === "sse") && !(0, import_chunk_qdcbcsg7.Pl)(oe) && (await dl(pe, oe, r) || (oe.type === "http" || oe.type === "sse") && (0, import_chunk_vp3hv9ky.RYr)(pe, oe, await (0, import_chunk_yz5b8aaa.aK)({ serverName: pe, serverConfig: oe, challenged: false })))) {
        if (oe.type !== "claudeai-proxy" && oe.pluginSource === void 0) (0, import_chunk_k449cc64.He)(pe, "Skipping connection (cached needs-auth)");
        L({ client: { name: pe, type: "needs-auth", config: oe, ...await (0, import_chunk_yz5b8aaa.l9i)(pe, oe) }, tools: (0, import_chunk_6wgyy4rn.Jte)(pe, oe), commands: [] });
        return;
      }
      if ((oe.type === "stdio" || oe.type === void 0) && oe.pluginSource !== void 0 && await dl(pe, oe, r)) {
        L({ client: { name: pe, type: "failed", config: oe, error: "Skipping connection (recent failure cached; retries automatically in 15 min, or edit the plugin config to retry now)" }, tools: [], commands: [] });
        return;
      }
      let Ye = await Tl(pe, oe), Rt = g !== void 0 && Object.hasOwn(g, pe) ? g[pe] : void 0;
      if (Rt !== void 0 && !Ye) {
        let { client: tt, tools: ye } = await bl({ name: pe, config: oe, capabilities: { tools: {} }, serverInfo: void 0, savedAt: Date.now(), tools: Rt });
        L({ client: tt, tools: ye, commands: [] });
        return;
      }
      let Mt = Ye ? { kind: "miss", reason: "live-connection" } : await (0, import_chunk_yrpmp1hk.Z$a)(pe, oe), ht = ig(Mt);
      if (ht.kind === "fresh" || ht.kind === "stale") {
        let { entry: tt, ageMs: ye } = ht, { client: it, tools: Ke } = await bl({ name: pe, config: oe, capabilities: tt.capabilities, serverInfo: tt.serverInfo, savedAt: tt.savedAt, tools: tt.tools }), Pe = hu(it, tt.commands);
        (0, import_chunk_5ft9yxne.vsn)(oe, tt.resources);
        let Ne = tt.resources.map((se) => ({ ...se, server: pe })), yt = tt.templates ?? [];
        (0, import_chunk_5ft9yxne.vsn)(oe, yt);
        let xe = yt.map((se) => ({ ...se, server: pe })), It = !!tt.capabilities.resources || Ne.length > 0, Ot = [];
        if (It && !z) z = true, Ot.push(import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e, import_chunk_ttsnbbsg.Qqe);
        if ((0, import_chunk_y53wbr8a.a)("tengu_mcp_discovery_source", { source: (0, import_chunk_78g0060s.S)(ht.kind === "fresh" ? "cache_fresh" : "cache_stale"), transportType: (0, import_chunk_78g0060s.f)(oe.type ?? "stdio"), entryAgeMs: ye, ...yo(oe, pe) }), (0, import_chunk_cqa9hrgx.u)("mcp_discovery_cache"), (0, import_chunk_cwkztn5x.td)().settledCachedDialFailures.delete((0, import_chunk_3bjtjsgp.Uo)(pe, oe)), (0, import_chunk_cwkztn5x.td)().refusedCachedRows.delete((0, import_chunk_3bjtjsgp.Uo)(pe, oe)), L({ client: it, tools: [...Ke, ...Ot], commands: Pe, resources: Ne.length > 0 ? Ne : void 0, resourceTemplates: xe.length > 0 ? xe : void 0 }), ht.kind === "stale") (async () => {
          let se = await (0, import_chunk_yrpmp1hk._Ue)(pe, oe), ke, ct = async () => {
            if (ke !== void 0 && To(ke) || (0, import_chunk_yrpmp1hk.hi)() !== R) return;
            (0, import_chunk_cqa9hrgx.l)("mcp_discovery_cache", "strike"), await (0, import_chunk_yrpmp1hk.toi)(pe, oe, { identityEpoch: R, grantLeg: se });
          }, bt = await (0, import_chunk_yrpmp1hk.nUa)(pe, oe);
          if (!bt) return;
          if ((0, import_chunk_bzyb60p0.gi)(pe)) {
            await bt().catch(() => {
            }), Hr(pe, oe, "disabled");
            return;
          }
          if ((0, import_chunk_bzyb60p0.MO)(pe, oe)) {
            await bt().catch(() => {
            }), Hr(pe, oe, "policy");
            return;
          }
          let jt = (Xe) => {
            if (!(!(ke !== void 0 && To(ke)) && (0, import_chunk_yrpmp1hk.hi)() === R)) return;
            if (Xe.type !== "needs-auth") (0, import_chunk_cwkztn5x.td)().connections.delete((0, import_chunk_3bjtjsgp.Uo)(pe, oe));
            let wt = (0, import_chunk_qdcbcsg7.mt)().cachedFirstDialArmsRan;
            if (wt.has(Xe)) return;
            if (wt.add(Xe), Xe.type === "needs-auth") Ci(pe, oe);
            else if (Xe.type === "failed") Ii(Xe, false);
          }, Re = (Xe) => {
            let Ce = (0, import_chunk_qdcbcsg7.mt)().cachedFirstDialArmsRan;
            if (Ce.has(Xe)) return;
            Ce.add(Xe), Ci(pe, oe);
          }, Gt = false;
          try {
            ke = go(pe, oe, Ge, r, h), (0, import_chunk_qdcbcsg7.mt)().swrRefreshDialsInFlight.add(ke), ke.then(() => {
              Gt = true;
            }, () => {
              Gt = true;
            });
            let Xe = await (0, import_chunk_44g93ygc.t4)(ke, { serverName: pe, context: "MCP discovery-cache stale refresh" });
            if (Xe.type !== "connected") {
              jt(Xe), await ct();
              return;
            }
            if (To(ke) || (0, import_chunk_yrpmp1hk.hi)() !== R) return;
            if (tt.negotiatedEra !== void 0 && Xe.protocolEra !== void 0 && Xe.protocolEra !== tt.negotiatedEra) {
              if ((0, import_chunk_k449cc64.He)(pe, "Discovery cache entry dropped: server negotiated a different protocol era on revalidation"), await $r(pe, oe).catch(() => {
              }), !To(ke) && (0, import_chunk_yrpmp1hk.hi)() === R) Re(Xe);
              return;
            }
            let Ce = !!Xe.capabilities?.resources;
            (0, import_chunk_yrpmp1hk.xMe)(pe);
            let wt = await (0, import_chunk_yrpmp1hk._Ue)(pe, oe);
            if (To(ke) || (0, import_chunk_yrpmp1hk.hi)() !== R) return;
            let [we, le, Be, Oe] = await Promise.all([nr(Xe, r), zr(Xe), jr(Xe), Ce && (0, import_chunk_yrpmp1hk.U9o)(oe) ? rr(Xe) : Promise.resolve([])]), Ue = Si(Oe) === void 0 ? Oe : void 0;
            if (To(ke) || hn(ke, pe, oe) || (0, import_chunk_yrpmp1hk.hi)() !== R) return;
            if (!(0, import_chunk_bzyb60p0.gi)(pe) && !(0, import_chunk_bzyb60p0.MO)(pe, oe)) {
              if (!await wi(Xe, { tools: we, commands: le, resources: Be, templates: Ue, identityEpoch: R, grantLeg: wt })) await ct();
            }
            if (!(ke !== void 0 && To(ke)) && !(ke !== void 0 && hn(ke, pe, oe)) && (0, import_chunk_yrpmp1hk.hi)() === R) Re(Xe);
          } catch {
            if (ke !== void 0 && !Gt) {
              let Xe = ke;
              Xe.then((Ce) => {
                if (Ce.type !== "connected") jt(Ce), ct().catch(() => {
                });
                else (0, import_chunk_qdcbcsg7.mt)().swrRefreshDialsInFlight.delete(Xe), (tt.negotiatedEra !== void 0 && Ce.protocolEra !== void 0 && Ce.protocolEra !== tt.negotiatedEra ? $r(pe, oe).catch(() => {
                }) : Promise.resolve()).then(() => {
                  if (!To(Xe) && (0, import_chunk_yrpmp1hk.hi)() === R) Re(Ce);
                });
              }, () => {
                ct().catch(() => {
                });
              });
            } else await ct();
          } finally {
            if (ke !== void 0 && Gt) (0, import_chunk_qdcbcsg7.mt)().swrRefreshDialsInFlight.delete(ke);
            await bt().catch(() => {
            });
          }
        })();
        return;
      }
      let vt = go(pe, oe, Ge, r, h, void 0, k), De = await vt, kt = go.cache?.get?.((0, import_chunk_3bjtjsgp.Uo)(pe, oe)) === vt;
      if ((0, import_chunk_sjqze7qg.U_)() && dg(ht)) (0, import_chunk_y53wbr8a.a)("tengu_mcp_discovery_source", { source: (0, import_chunk_78g0060s.S)(cg(ht)), transportType: (0, import_chunk_78g0060s.f)(oe.type ?? "stdio"), ...yo(oe, pe) });
      if (To(vt)) return;
      if (I(oe)) {
        if (De.type === "connected" && hn(vt, pe, oe)) Po(De);
        return;
      }
      if (De.type !== "connected") {
        L((0, import_chunk_8yvg0j99.fq)(oe, { client: De, tools: De.type === "needs-auth" ? (0, import_chunk_6wgyy4rn.Jte)(pe, oe) : [], commands: [] }));
        return;
      }
      if (De.discoveryBearerRejected = void 0, oe.type !== "claudeai-proxy") Ur(pe, r);
      if (oe.type === "http" || oe.type === "sse") await (0, import_chunk_tgn73pvk.$9o)(pe, oe);
      At.push((async () => {
        let tt = false;
        try {
          let ye = !!De.capabilities?.resources;
          (0, import_chunk_yrpmp1hk.xMe)(pe);
          let it = await (0, import_chunk_yrpmp1hk._Ue)(pe, oe);
          if (To(vt) || I(oe)) {
            if (!To(vt) && hn(vt, pe, oe)) Po(De);
            return;
          }
          let Ke = Promise.all([nr(De, r, M), zr(De), P !== true && (0, import_chunk_fpcs74d2.z_)() && ye ? Ro.fetchMcpSkillsForClient(De, r) : Promise.resolve([])]), Pe = y === true && (oe.type === "claudeai-proxy" ? !!De.capabilities?.tools || !!De.capabilities?.prompts : oe.type === "http" && (0, import_chunk_2mwshd9r.Yu)(oe.url) && !(0, import_chunk_yrpmp1hk.oJt)(oe)), Ne = Promise.all([ye && !Pe ? jr(De) : Promise.resolve([]), ye && (0, import_chunk_yrpmp1hk.U9o)(De.config) ? rr(De) : Promise.resolve([])]), yt = y === true && ye && (oe.type === "http" || oe.type === "sse") && !(0, import_chunk_sjqze7qg.U_)();
          if (yt) Ne.catch(() => {
          });
          let [[xe, It, Ot], se] = await Promise.all([Ke, yt ? void 0 : Ne]);
          if (I(oe)) {
            if (hn(vt, pe, oe)) Po(De);
            return;
          }
          if (To(vt)) return;
          if (kt && hn(vt, pe, oe)) {
            let Ce = Xt(De.client).onclose !== void 0;
            if (!(0, import_chunk_sjqze7qg.U_)()) {
              if (!Ce) return;
            } else {
              if (Ce && go.cache?.get?.((0, import_chunk_3bjtjsgp.Uo)(pe, oe)) === void 0) Po(De), L({ client: { name: pe, type: "failed", config: oe, error: "Connection closed during discovery", errorCode: "ConnectionClosed" }, tools: [], commands: [] });
              return;
            }
          }
          if (De.discoveryAuthFailure) {
            L({ client: { name: pe, type: "needs-auth", config: oe }, tools: (0, import_chunk_6wgyy4rn.Jte)(pe, oe), commands: [] });
            return;
          }
          if (oe.type === "claudeai-proxy" && !De.discoveryBearerRejected) Ur(pe, r);
          if (oe.type === "claudeai-proxy" && !De.toolsListError && !De.discoveryBearerRejected) (0, import_chunk_sjqze7qg.wis)(pe, r);
          let ke = [...It, ...Ot], ct = (Ce) => {
            let wt = [];
            if (ye && !z) z = true, wt.push(import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e, import_chunk_ttsnbbsg.Qqe);
            L((0, import_chunk_8yvg0j99.fq)(oe, { client: De, tools: [...xe, ...wt], commands: ke, resources: Ce.length > 0 ? Ce : void 0, resourceTemplates: void 0 }));
          };
          if (yt) ct([]), tt = true;
          let [bt, jt] = se ?? await Ne;
          if (!ye) or(bt, []);
          let Re = Si(jt) === void 0 ? jt : void 0, Xe = !(0, import_chunk_sjqze7qg.U_)() || To(vt) || hn(vt, pe, oe) || (0, import_chunk_yrpmp1hk.hi)() !== R || (0, import_chunk_bzyb60p0.gi)(pe) || (0, import_chunk_bzyb60p0.MO)(pe, oe) ? void 0 : wi(De, { tools: xe, commands: It, resources: bt, templates: Re, identityEpoch: R, grantLeg: it });
          if (!yt) ct(bt), tt = true;
          await Xe;
        } catch (ye) {
          if ((0, import_chunk_k449cc64.id)(pe, `Error fetching tools/commands/resources: ${(0, import_chunk_jbjjrhxt.gl)(ye, oe)}`), tt) return;
          if (To(vt)) return;
          let it = go.cache?.get?.((0, import_chunk_3bjtjsgp.Uo)(pe, oe));
          if ((0, import_chunk_sjqze7qg.U_)() && kt && it !== void 0 && it !== vt) return;
          let Ke = kt && it !== vt && Xt(De.client).onclose !== void 0;
          Po(De), L({ client: { name: pe, type: "failed", config: oe, ...Ke && { error: "Connection closed during discovery", errorCode: "ConnectionClosed" } }, tools: [], commands: [] });
        }
      })());
    } catch (ge) {
      (0, import_chunk_k449cc64.id)(pe, `Error fetching tools/commands/resources: ${(0, import_chunk_jbjjrhxt.gl)(ge, oe)}`), L({ client: { name: pe, type: "failed", config: oe }, tools: [], commands: [] });
    }
  };
  try {
    let pe = [], oe = [];
    for (let ge of pt) ((0, import_chunk_7625rswd.hU)(ge[1]) ? pe : oe).push(ge);
    await Promise.all([ti(Tt, wh(), Wt), ti(oe, hl(), Wt), Promise.all(pe.map(([ge, Te]) => (0, import_chunk_44g93ygc.t4)((0, import_chunk_sjqze7qg.uae)(Te, h), { serverName: ge, context: import_chunk_7625rswd.Rbe }).catch((Qe) => {
      let Ye = (0, import_chunk_jbjjrhxt.gl)(Qe, Te);
      (0, import_chunk_k449cc64.id)(ge, Ye), Ht.set(ge, Ye);
    }))).then(() => ti(pe, hl(), Wt))]), await Promise.all(At);
  } finally {
    Et.close();
  }
}
function aR(e, o, r) {
  return new Promise((h) => {
    let g = 0, y = 0;
    if (g = Object.keys(e).length, g === 0) {
      h({ clients: [], tools: [], commands: [] });
      return;
    }
    let M = [], k = [], P = [], R = false, I = () => {
      if (R) return;
      R = true;
      let L = P.reduce((z, H) => {
        let F = H.name.length + (H.description ?? "").length + (H.argumentHint ?? "").length;
        return z + F;
      }, 0);
      (0, import_chunk_y53wbr8a.a)("tengu_mcp_tools_commands_loaded", { tools_count: k.length, commands_count: P.length, commands_metadata_length: L }), h({ clients: M, tools: k, commands: P });
    };
    ug((L) => {
      if (M.push(L.client), k.push(...L.tools), P.push(...L.commands), y++, y >= g) I();
    }, e, o, r).then(I).catch((L) => {
      (0, import_chunk_k449cc64.id)("prefetchAllMcpResources", `Failed to get MCP resources: ${(0, import_chunk_jv7av99m.d)(L)}`), h({ clients: [], tools: [], commands: [] });
    });
  });
}
async function Ni(e, o, r, h, g = false, y) {
  switch (e.type) {
    case "text": {
      let M = { type: "text", text: e.text };
      if (g) {
        let k = e._meta;
        if (k) M._meta = k;
      }
      return [M];
    }
    case "audio": {
      let M = e;
      return await oi(Buffer.from(M.data, "base64"), M.mimeType, o, `[Audio from ${o}] `, h);
    }
    case "image": {
      let M = Buffer.from(String(e.data), "base64"), k = (0, import_chunk_d3vfy4gs.F9e)(M, e.mimeType);
      if (fl(k)) return await Ml(M, k, o, r, h, y);
      return await oi(M, k, o, `[Image from ${o}] `, h, y);
    }
    case "resource": {
      let M = e.resource, k = `[Resource from ${o} at ${M.uri}] `;
      if ("text" in M) return [{ type: "text", text: `${k}${M.text}` }];
      else if ("blob" in M) {
        let P = Buffer.from(M.blob, "base64"), R = (0, import_chunk_d3vfy4gs.F9e)(P, M.mimeType);
        if (fl(R)) {
          let I = await Ml(P, R, o, r, h, y), L = [];
          if (k) L.push({ type: "text", text: k });
          return L.push(...I), L;
        } else {
          let I = (0, import_chunk_d3vfy4gs.Qal)(P, R, o);
          if (I) return [I];
          return await oi(P, R, o, k, h, y);
        }
      }
      return [];
    }
    case "resource_link": {
      let M = e, k = `[Resource link: ${M.name}] ${M.uri}`;
      if (M.description) k += ` (${M.description})`;
      return [{ type: "text", text: k }];
    }
    default:
      return [];
  }
}
function Cu(e) {
  return `mcp-${(0, import_chunk_3f4m74y6.xn)(e)}-blob-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
async function Ml(e, o, r, h, g, y) {
  if ((0, import_chunk_7jczpc8b.Kv)() === void 0 && pg()) {
    (0, import_chunk_cqa9hrgx.l)("mcp_image_result_file", "persistence_off");
    let { block: H } = await (0, import_chunk_fbqj9ad4.EA)({ data: e, mediaType: o, limits: h });
    return y?.(H.type === "image" ? "shown" : (0, import_chunk_bzyb60p0.OQr)(), e.length), [H];
  }
  let [{ block: M, dimensions: k }, P] = await Promise.all([(0, import_chunk_fbqj9ad4.EA)({ data: e, mediaType: o, limits: h }), (0, import_chunk_d3vfy4gs.lbe)(e, (0, import_chunk_kzzkh06w.cy)(e) ?? o, Cu(r), void 0, g).catch((H) => ((0, import_chunk_k449cc64.i)(H), { error: "not saved" }))]), R = (0, import_chunk_7jczpc8b.Kv)();
  if ("error" in P) {
    (0, import_chunk_cqa9hrgx.l)("mcp_image_result_file", "not_saved");
    let H = R?.servesTheModelsFiles?.(r) === true ? null : await R?.shrinkUnsaved?.(e), F = H?.block ?? M;
    y?.(F.type === "image" ? "shown" : (0, import_chunk_bzyb60p0.OQr)(), e.length);
    let ae = H ? (0, import_chunk_fbqj9ad4.Yne)(H.dimensions) : null;
    return ae === null ? [F] : [F, { type: "text", text: ae }];
  }
  (0, import_chunk_cqa9hrgx.u)("mcp_image_result_file");
  let L = (M.type === "image" && R?.wantsPictureShrunk?.(e) !== true ? null : await R?.readPicture?.(P.filepath, e)) ?? { block: M, dimensions: k };
  y?.(L.block.type === "image" ? "shown" : "saved", e.length, P.filepath);
  let z = (0, import_chunk_fbqj9ad4.Yne)(L.dimensions ?? {}, P.filepath);
  return z === null ? [L.block] : [L.block, { type: "text", text: z }];
}
function pg() {
  return (0, import_chunk_f9x2f6cx.DI)() || import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_PROMPT_HISTORY;
}
async function oi(e, o, r, h, g, y) {
  let M = await (0, import_chunk_d3vfy4gs.lbe)(e, o, Cu(r), void 0, g, { mayWriteLater: true }).catch((k) => {
    throw y?.((0, import_chunk_bzyb60p0.OQr)(), e.length), k;
  });
  if ("error" in M) {
    if (y?.((0, import_chunk_bzyb60p0.OQr)(), e.length), (0, import_chunk_7jczpc8b.Kv)() !== void 0) return [{ type: "text", text: (0, import_chunk_d3vfy4gs.Ssn)(o, e.length, M.notSavedReason) }];
    return [{ type: "text", text: `${h}Binary content (${o || "unknown type"}, ${e.length} bytes) could not be saved to disk: ${M.error}` }];
  }
  return y?.("saved", e.length, M.filepath), [{ type: "text", text: (0, import_chunk_d3vfy4gs.ysn)(M.filepath, o, M.size, h) }];
}
function sr(e, o = 2) {
  if (e === null) return "null";
  if (Array.isArray(e)) {
    if (e.length === 0) return "[]";
    return `[${sr(e[0], o - 1)}]`;
  }
  if (typeof e === "object") {
    if (o <= 0) return "{...}";
    let h = Object.entries(e).slice(0, 10).map(([y, M]) => `${y}: ${sr(M, o - 1)}`), g = Object.keys(e).length > 10 ? ", ..." : "";
    return `{${h.join(", ")}${g}}`;
  }
  return typeof e;
}
async function vl(e, o, r, h, g) {
  let y = (await Promise.all(e.map((M) => Ni(M, o, r, h, true, g)))).flat();
  return { content: y, type: "contentArray", schema: sr((0, import_chunk_jhasw6a0.EJt)(y)) };
}
async function fg(e, o, r, h, g, y, M = "program") {
  if (e && typeof e === "object") {
    if ("toolResult" in e) return { content: String(e.toolResult), type: "toolResult" };
    if ("structuredContent" in e && e.structuredContent !== void 0) {
      if ("content" in e && Array.isArray(e.content)) {
        let L = await (0, import_chunk_am20pvy7.Wri)({ content: e.content, structuredContent: e.structuredContent, _meta: "_meta" in e ? e._meta : void 0 }, M, (z) => vl(z, r, h, g));
        if (L !== void 0) return L;
      }
      let P = (0, import_chunk_nq3exp5d.bUt)(e.structuredContent), R = P ?? (0, import_chunk_w578pjby._)(e.structuredContent), I = P === void 0 ? sr(e.structuredContent) : void 0;
      if ("content" in e && Array.isArray(e.content)) {
        let L = e.content.filter((z) => z && typeof z === "object" && "type" in z && z.type !== "text");
        if (L.length > 0) {
          let z = (await Promise.all(L.map((H) => Ni(H, r, h, g, true)))).flat();
          if (z.length > 0) {
            let H = [...z, { type: "text", text: R }];
            return { content: H, type: "contentArray", schema: sr((0, import_chunk_jhasw6a0.EJt)(H)) };
          }
        }
      }
      return { content: R, type: "structuredContent", schema: I };
    }
    if ("content" in e && Array.isArray(e.content)) return vl(e.content, r, h, g, y);
  }
  let k = `MCP server "${r}" tool "${o}": unexpected response format`;
  throw (0, import_chunk_k449cc64.id)(r, k), Object.assign(new import_chunk_jv7av99m.A(k, "MCP tool unexpected response format"), { mcpErrorSource: "downstream_error" });
}
function kl(e) {
  if (!e || typeof e === "string") return false;
  return e.some((o) => o.type === "image" || o.type === "document");
}
async function mg(e, o, r, h, g, y, M, k, P, R, I, L, z = "program") {
  if (P && e !== null && typeof e === "object" && !("toolResult" in e) && "content" in e && Array.isArray(e.content)) return e.content;
  let H = await fg(e, o, r, h, y, R, z), { type: F, schema: ae } = H, _e = (0, import_chunk_d3vfy4gs.Zal)(H.content);
  if (r === "ide") return _e;
  if (P || g && !kl(_e)) return (0, import_chunk_qp5chy39.oon)(I, "kept_in_conversation", _e), _e;
  if (!await (0, import_chunk_jhasw6a0.csr)(_e, M, k)) return (0, import_chunk_qp5chy39.oon)(I, "kept_in_conversation", _e), _e;
  let be = (0, import_chunk_jhasw6a0.vJt)(_e);
  if (import_chunk_c203g5kd.s.ENABLE_MCP_LARGE_OUTPUT_FILES === false) return (0, import_chunk_y53wbr8a.a)("tengu_mcp_large_result_handled", { outcome: (0, import_chunk_78g0060s.S)("truncated"), reason: (0, import_chunk_78g0060s.S)("env_disabled"), sizeEstimateTokens: be }), (0, import_chunk_qp5chy39.oon)(I, "cut_not_saved", _e), await (0, import_chunk_jhasw6a0.f0t)(_e, M, k);
  if (!_e) return _e;
  if (kl(_e)) return (0, import_chunk_y53wbr8a.a)("tengu_mcp_large_result_handled", { outcome: (0, import_chunk_78g0060s.S)("truncated"), reason: (0, import_chunk_78g0060s.S)("contains_images"), sizeEstimateTokens: be }), await (0, import_chunk_jhasw6a0.f0t)(_e, M, k);
  if ((0, import_chunk_qp5chy39.Arl)(_e, r, o, L)) return (0, import_chunk_qp5chy39.oon)(I, "kept_in_conversation", _e), _e;
  let Q = `mcp-${(0, import_chunk_3f4m74y6.xn)(r)}-${(0, import_chunk_3f4m74y6.xn)(o)}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, Ae = (0, import_chunk_jhasw6a0.EJt)(_e), Ve = (0, import_chunk_bzyb60p0.pdi)() || (0, import_chunk_865at33z.b)("tengu_mcp_singleton_unwrap", true), Tt = Array.isArray(Ae) ? Ae.length : void 0, pt = Ve && Array.isArray(Ae) && Ae.length === 1 && Ae[0]?.type === "text" && !("annotations" in Ae[0]) && !("_meta" in Ae[0]) ? Ae[0].text : void 0, Ge = typeof Ae === "string" ? Ae : pt ?? (0, import_chunk_w578pjby._)(Ae, null, 2), At = F === "toolResult" || pt !== void 0, Ht = At ? "text" : "json", Et;
  if (At) {
    let oe = Ge.split(`
`);
    if (oe.length > 1 && oe.at(-1) === "") oe.pop();
    let ge = 0;
    for (let Te of oe) if (Te.length > ge) ge = Te.length;
    Et = { count: oe.length, maxLen: ge };
  }
  let Wt = await (0, import_chunk_qp5chy39.Bq)(Ge, Q, (0, import_chunk_mxhw2w5n.C0)(), y, void 0, { mayWriteLater: true });
  if ((0, import_chunk_qp5chy39.Wq)(Wt)) {
    if ((0, import_chunk_7jczpc8b.Kv)() !== void 0) return (0, import_chunk_y53wbr8a.a)("tengu_mcp_large_result_handled", { outcome: (0, import_chunk_78g0060s.S)("truncated"), reason: (0, import_chunk_78g0060s.S)("not_stored"), sizeEstimateTokens: be }), (0, import_chunk_qp5chy39.oon)(I, "cut_not_saved", _e), await (0, import_chunk_jhasw6a0.osi)(_e, k);
    let oe = Ge.length;
    return (0, import_chunk_y53wbr8a.a)("tengu_mcp_large_result_handled", { outcome: (0, import_chunk_78g0060s.S)("truncated"), reason: (0, import_chunk_78g0060s.S)("persist_failed"), sizeEstimateTokens: be }), (0, import_chunk_qp5chy39.oon)(I, "save_failed", _e), `Error: result (${oe.toLocaleString()} characters) exceeds maximum allowed tokens. Failed to save output to file: ${Wt.error}. If this MCP server provides pagination or filtering tools, use them to retrieve specific portions of the data.`;
  }
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_large_result_handled", { outcome: (0, import_chunk_78g0060s.S)("persisted"), reason: (0, import_chunk_78g0060s.S)("file_saved"), sizeEstimateTokens: be, persistedSizeChars: Wt.originalSize, truncatedAtCap: Wt.truncatedAtBytes !== void 0, resultType: (0, import_chunk_78g0060s.f)(F), blockCount: Tt, persistedAs: (0, import_chunk_78g0060s.f)(Ht) }), (0, import_chunk_qp5chy39.oon)(I, "saved_as_text", _e);
  let pe = pt !== void 0 ? (0, import_chunk_bzyb60p0.mdi)("toolResult") : (0, import_chunk_bzyb60p0.mdi)(F, ae);
  return (0, import_chunk_bzyb60p0._za)(Wt.filepath, Wt.originalSize, pe, Et, Wt.truncatedAtBytes, Ge, k);
}
function hg(e) {
  let o = e.data;
  return (o != null && typeof o === "object" && "elicitations" in o && Array.isArray(o.elicitations) ? o.elicitations : []).filter((h) => import_chunk_racn22qq.gRn.safeParse(h).success);
}
function gg({ errorCode: e, message: o, isUnauthorizedError: r, isOAuthShapedAuthError: h, hasHeadersHelper: g, pendingStepUpScope: y }) {
  let M = y !== void 0;
  if (!(e === 401 || r || h || e === 403 && g || M && e === 403)) return;
  return M && e !== 401 && !(h && /^HTTP 401\b/.test(o)) ? "step_up" : "credential_rejected";
}
function _g(e) {
  if ((0, import_chunk_sjqze7qg.QHn)(e) || (0, import_chunk_bzyb60p0.ZQt)(e)) return true;
  return e instanceof Error && "code" in e && e.code === -32e3 && (0, import_chunk_sjqze7qg.kXa)(e.message);
}
async function Cg({ client: e, clientConnection: o, tool: r, args: h, meta: g, signal: y, onProgress: M, callToolFn: k = Dn, requestDialog: P, endsAtInputRequest: R, takesSavedFiles: I, hasResultSizeAnnotation: L = false, resultNotForModel: z = false, resultReader: H = "program", imageLimits: F, taskRegistry: ae, toolUseId: _e, onAwaitingUserInput: be, timing: Q, ccrNeedsApprovalRetry: Ae, storageV5: Ve, credentials: Tt, callingModel: pt, offCriticalPath: Ge, holdForQuestion: At, taskBackground: Ht, disallowTasks: Et }) {
  var _stack = [];
  try {
    let pe = (0, import_chunk_81nggker.m8o)(e), oe = false, ge = (Qe) => (0, import_chunk_bzyb60p0.ZQt)(Qe) && !!Ae && !!_e && !oe && (0, import_chunk_865at33z.b)("tengu_mcp_proxy_needs_approval_retry", true);
    const Te = __using(_stack, (0, import_chunk_ttsnbbsg.N9o)(e.transportErrorState));
    for (let Qe = 0; ; Qe++) try {
      let Ye = () => k({ client: e, tool: r, args: h, meta: g, offCriticalPath: Ge, holdForQuestion: At, signal: y, onProgress: M, hasResultSizeAnnotation: L, resultNotForModel: z, resultReader: H, imageLimits: F, timing: Q, taskRegistry: ae, toolUseId: _e, storageV5: Ve, credentials: Tt, callingModel: pt, requestDialog: P, rowConfig: o.config, taskBackground: Ht, disallowTasks: Et, endsAtInputRequest: R, downloadsOn: pe, takesSavedFiles: I }), Rt;
      if (!(0, import_chunk_z2xw6net.Sit)()) Rt = await Ye();
      else {
        let Mt;
        try {
          Mt = (0, import_chunk_z2xw6net.e4)((0, import_chunk_w578pjby._)(h)).content;
        } catch {
          Mt = void 0;
        }
        let ht = (0, import_chunk_865at33z.rPs)(e, r), vt = (0, import_chunk_wpyz5pav.WWe)(e, r), De = ht || (0, import_chunk_wpyz5pav.dus)(vt, _e), kt = (0, import_chunk_wpyz5pav.yuo)(vt, _e);
        if (De && Mt !== void 0) Mt = (0, import_chunk_xfr8663h.ZRe)(Mt);
        Rt = await (0, import_chunk_z2xw6net._fl)("claude_code.mcp.rpc", { spanType: "mcp.rpc", attrs: { "rpc.system": "mcp", "rpc.service": e.name, "rpc.method": "tools/call", mcp_tool: r, attempt: Qe }, ...Mt !== void 0 && { contentAttrs: { mcp_args: Mt } }, withholdErrorText: (tt) => kt || ht && tt instanceof import_chunk_yz5b8aaa.Bm, isExpectedError: (tt) => tt instanceof import_chunk_racn22qq.ef && (tt.code === import_chunk_racn22qq.ld.UrlElicitationRequired || ge(tt)) }, Ye);
      }
      if (oe) (0, import_chunk_cqa9hrgx.u)("mcp_ccr_needs_approval");
      return Rt;
    } catch (Ye) {
      if (!(Ye instanceof import_chunk_racn22qq.ef)) {
        if (oe && !(Ye instanceof import_chunk_yz5b8aaa.iK)) (0, import_chunk_cqa9hrgx.m)("mcp_ccr_needs_approval", "retry_failed");
        throw Ye;
      }
      if (ge(Ye) && Ae && _e) {
        oe = true;
        let ht = Ye.data, vt = typeof ht === "object" && ht !== null && "tool_name" in ht && typeof ht.tool_name === "string" ? ht.tool_name : void 0, { canUseTool: De, tool: kt, fullyQualifiedName: tt, toolUseContext: ye, parentMessage: it } = Ae, Ke = (0, import_chunk_cdfjrfzp.T$a)(e, Ye.data);
        (0, import_chunk_cdfjrfzp.A$a)(e, ye);
        let Pe = Ke && (0, import_chunk_cdfjrfzp.R$a)(Ke, (0, import_chunk_bz1f2qnq.Z)(ye));
        if (Pe) {
          let yt = Ke?.kind === "unreadable";
          if ((0, import_chunk_k449cc64.He)(e.name, `Tool '${r}' returned -32003 needs_approval ${yt ? "naming a site this session cannot read, and the session has ClaudeInChromeDomain deny rules" : "for a site a ClaudeInChromeDomain deny rule covers"}: failing the call with no approval card`), yt) (0, import_chunk_cqa9hrgx.m)("chrome_permission_prompt", "hosted_site_unreadable");
          else (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", "domain_rule_denied");
          throw await De(kt, h, ye, it, _e, Pe), ye.onPermissionDenial?.(kt, _e, h), (0, import_chunk_sjqze7qg.rDe)(new import_chunk_jv7av99m.A(Pe.message, "ccr_proxy_needs_approval_chrome_site_denied"));
        }
        (0, import_chunk_k449cc64.He)(e.name, `Tool '${r}' returned -32003 needs_approval (tool_name=${vt}) \u2014 surfacing retroactive approval card`), (0, import_chunk_y53wbr8a.a)("tengu_mcp_proxy_needs_approval_retry", { attempt: Qe });
        let Ne = Ke && (0, import_chunk_cdfjrfzp.x$a)(Ke, r, h, ye);
        if (await (0, import_chunk_bzyb60p0.PQr)({ toolUseContext: ye, canUseTool: De, tool: kt, args: h, parentMessage: it, toolUseId: _e, fullyQualifiedName: tt, error: Ye, signal: y, onAwaitingUserInput: be, siteAsk: Ne }), Ke?.kind === "named" && Ne && g) g[import_chunk_cdfjrfzp.k$a] = Ke.site;
        if (g) (0, import_chunk_jejz6sfb.woi)(g, ye.session, ye.toolUseId, e.name, e.config);
        continue;
      }
      if (Ye.code !== import_chunk_racn22qq.ld.UrlElicitationRequired) {
        if (oe) (0, import_chunk_cqa9hrgx.m)("mcp_ccr_needs_approval", "retry_failed");
        else if (Ye.code === import_chunk_yz5b8aaa.Pke && Ae) (0, import_chunk_cqa9hrgx.m)("mcp_ccr_needs_approval", "arm_not_fired");
        throw Ye;
      }
      if ((0, import_chunk_ze4kt7fs.A7)(o) !== void 0) throw Ye;
      if (Qe - (oe ? 1 : 0) >= 3) throw Ye;
      let Rt = hg(Ye), Mt = o.name;
      if (Rt.length === 0) throw (0, import_chunk_k449cc64.He)(Mt, `Tool '${r}' returned -32042 but no valid elicitations in error data`), Ye;
      (0, import_chunk_k449cc64.He)(Mt, `Tool '${r}' requires URL elicitation (error -32042, attempt ${Qe + 1}), processing ${Rt.length} elicitation(s)`);
      for (let ht of Rt) {
        let { elicitationId: vt } = ht, De = (0, import_chunk_bzyb60p0.Gcr)(Mt, e.config, e.client) ?? (0, import_chunk_bzyb60p0.Gcr)(Mt, o.config, e.client);
        if (De !== void 0) throw De;
        if (R) return (0, import_chunk_m0xr8k74.yhs)(r);
        let kt = await (0, import_chunk_4e90ethg.MYr)(Mt, ht, y);
        if (kt) {
          if ((0, import_chunk_k449cc64.He)(Mt, `URL elicitation ${vt} resolved by hook: ${(0, import_chunk_jnzfg7cq.r0t)("url", kt)}`), kt.action !== "accept") return { content: `URL elicitation was ${kt.action === "decline" ? "declined" : kt.action + "ed"} by a hook. The tool "${r}" could not complete because it requires the user to open a URL.`, urlElicitationDeclined: { url: ht.url }, isError: true };
          continue;
        }
        let tt;
        be?.(true);
        let ye = At?.();
        try {
          tt = P && !(0, import_chunk_pyt5z6an.W0e)() ? await P(import_chunk_bzyb60p0.efe, { serverName: Mt, params: ht }, { signal: y }) : { action: "cancel" };
        } finally {
          ye?.(), be?.(false);
        }
        let it = await (0, import_chunk_4e90ethg.HYr)(Mt, tt, y, "url", vt);
        if (it.action !== "accept") return (0, import_chunk_k449cc64.He)(Mt, `User ${it.action === "decline" ? "declined" : it.action + "ed"} URL elicitation ${vt}`), { content: `URL elicitation was ${it.action === "decline" ? "declined" : it.action + "ed"} by the user. The tool "${r}" could not complete because it requires the user to open a URL.`, urlElicitationDeclined: { url: ht.url }, isError: true };
        (0, import_chunk_k449cc64.He)(Mt, `Elicitation ${vt} completed, retrying tool call`);
      }
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function yg(e, o, r, h) {
  if (!e.isError) return;
  let g = "Unknown error";
  if (Array.isArray(e.content) && e.content.length > 0) {
    let k = e.content.flatMap((P) => {
      if (P == null || typeof P !== "object") return [];
      if ("text" in P) return [String(P.text)];
      if (P.type === "resource_link") {
        let R = P, I = `[Resource link: ${R.name}] ${R.uri}`;
        if (R.description) I += ` (${R.description})`;
        return [I];
      }
      return [];
    });
    if (k.length > 0) g = k.join(`
`);
  } else if ("error" in e) g = String(e.error);
  (0, import_chunk_k449cc64.id)(o, r === void 0 ? g : r(g));
  let y = (0, import_chunk_w4dc83v7.PH)(e._meta), M = new import_chunk_yz5b8aaa.Bm(g, "MCP tool returned error", y ? { _meta: y } : void 0);
  throw (0, import_chunk_bzyb60p0.wza)(M, h), M;
}
var yu = (0, import_chunk_2cbgkbm2.p)(() => import_chunk_racn22qq.Xtt.extend({ inputSchema: import_chunk_racn22qq.Xtt.shape.inputSchema.extend({ properties: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() }) })), Sg = (0, import_chunk_2cbgkbm2.p)(() => import_chunk_racn22qq.Ngt.extend({ tools: (0, import_chunk_adx6804h.C)(yu()) }));
function Ei(e) {
  return cd(import_chunk_racn22qq.Ngt.extend({ tools: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()) }), e);
}
function Su(e) {
  let o = e.type === "http" && (0, import_chunk_9r4r85pg.EG)();
  if (_s(e)) return o ? Ei(yu()) : Ei(import_chunk_racn22qq.Xtt);
  return o ? Sg() : import_chunk_racn22qq.Ngt;
}
function dR() {
  return { implementation: import_chunk_racn22qq.aJt, serverCapabilities: import_chunk_racn22qq.pRn, tool: import_chunk_racn22qq.Xtt, prompt: import_chunk_racn22qq.Lor, resource: import_chunk_racn22qq.mRn, resourceTemplate: import_chunk_racn22qq.Hor, contentBlock: import_chunk_racn22qq.hRn.options[0].shape.content.unwrap().element };
}
function cR(e, o, r) {
  let h = Xt(e);
  return h.request({ method: "tools/list", params: $l(h, r) }, _s(r) ? Ei(import_chunk_racn22qq.Xtt) : import_chunk_racn22qq.Ngt, { ...o, cacheMode: "bypass" });
}
function lR(e, o, r, h) {
  return Xt(e).readResource({ uri: o, ...h && { _meta: { "claudecode/toolUseId": h } } }, { ...r, cacheMode: "bypass" });
}
function uR(e, o, r) {
  let h = Xt(e), g = h.getProtocolEra?.() === "modern" ? { ...o, _meta: { ...o._meta, [import_chunk_racn22qq.Q_e]: (0, import_chunk_7625rswd.Nkt)((0, import_chunk_7625rswd.san)()) } } : o;
  return h.callTool(g, r);
}
var wu = 6e4, bi = { allowTask: true }, Eu = { allowInputRequired: true }, wg = { allowUploadRequired: true }, Mu = "asked for input of a kind this client does not serve";
function vu(e, o) {
  let r = o === void 0 ? "it names no method" : `its method ${o.length}${o === import_chunk_m0xr8k74.Kfl ? ", the file-uploads extension's request for uploads" : ""}`;
  return `its key is ${e.length} characters long and ${r}; neither is logged, since the server wrote them`;
}
function Tg(e) {
  if (!(e instanceof import_chunk_racn22qq.Xa) || e.code !== import_chunk_racn22qq.Ua.InvalidResult && e.code !== import_chunk_racn22qq.Ua.CapabilityNotSupported) return;
  let o = e.data;
  if (typeof o !== "object" || o === null || !("key" in o) || typeof o.key !== "string") return;
  let r = "method" in o && typeof o.method === "string" ? o.method : void 0, h = `its answer ${Mu}, so the call was not made again`, g = import_chunk_hcjp5g4r.o7r.find((y) => y === r);
  return { forModel: new import_chunk_jv7av99m.A(h, "MCP server asked for input this client does not serve"), forLog: `${h} (${vu(o.key, r)})`, ...e.code === import_chunk_racn22qq.Ua.CapabilityNotSupported && { noHandler: (y) => new import_chunk_racn22qq.Xa(import_chunk_racn22qq.Ua.CapabilityNotSupported, `MCP server "${y}" asked for input this client could not serve${g === void 0 ? "" : ` (${g})`}, so the call was not made again`) } };
}
function Eg(e, o) {
  let r = (0, import_chunk_qdcbcsg7.mt)().clientTasksDeclaredBeforeServerList.get(e), h = o._meta;
  return r === void 0 || e.getProtocolEra?.() !== "modern" ? o : { ...o, _meta: { ...h, [import_chunk_racn22qq.Q_e]: r } };
}
function bg(e) {
  return async (o, r) => {
    let h = await e(o, r);
    return (0, import_chunk_8sy6wsb2.fBa)(o, h), h;
  };
}
async function Mg({ name: e, config: o }, r, h) {
  return await Jl(tn((0, import_chunk_racn22qq.fJt)((0, import_chunk_rvw4ecc0.Gsi)(r) ?? import_chunk_1y3twj4q.y0t, await (0, import_chunk_rvw4ecc0.G7r)(r, false))))(r, { ...h, headers: { ...o.type === "http" ? await (0, import_chunk_tgn73pvk.lRn)(e, o) : {}, ...h.headers, "accept-encoding": "identity", "user-agent": (0, import_chunk_865at33z.ACt)() }, ...{ timeout: false } });
}
function Rl(e) {
  let o = (0, import_chunk_qt3kq0hf.vsr)(e);
  return o === void 0 ? void 0 : { connectorId: o, connection: async () => Xt((await rn(e, { context: "MCP tool call" })).client) };
}
async function Al(e, o, r) {
  if (o.type !== "http") return;
  let h = Object.entries(await (0, import_chunk_tgn73pvk.lRn)(e, o)).find(([y]) => y.toLowerCase() === "authorization");
  if (h !== void 0) return h[1];
  if ((0, import_chunk_qdcbcsg7.Aze)(e, o) || (0, import_chunk_qdcbcsg7.UOo)(r) || (0, import_chunk_qdcbcsg7.UOo)(await Nn(e, o))) return;
  let g = await new import_chunk_tgn73pvk.cRn(e, o).tokens();
  return g === void 0 ? void 0 : `Bearer ${g.access_token}`;
}
function vg(e, o, r) {
  if (e.getProtocolEra?.() !== "modern") return r;
  let h = r._meta, g = h?.[import_chunk_racn22qq.Q_e] ?? (0, import_chunk_qdcbcsg7.mt)().clientsBuiltWithTasks.get(e) ?? (0, import_chunk_7625rswd.san)(), y = (0, import_chunk_81nggker.kJt)(o), M = (0, import_chunk_m0xr8k74.Nho)(g, { serverAdvertisedDownloads: y !== void 0 && y.via !== "cloud-session" && (0, import_chunk_m0xr8k74.k8e)(e.getServerCapabilities?.()), downloadsOn: (0, import_chunk_pyawkp3j.x7)() });
  return M === g ? r : { ...r, _meta: { ...h, [import_chunk_racn22qq.Q_e]: M } };
}
var kg = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ resultType: (0, import_chunk_adx6804h.v)("task") })), Pg = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().min(1).max(1024).regex(new RegExp("^\\P{Cc}+$", "u")));
function Rg(e, { taskId: o, requestDialog: r, rowConfig: h }) {
  let g = Xt(e.client);
  return { request: (M, k, P) => {
    let R = Eg(g, k);
    return g.request({ method: M, params: M === "tasks/get" ? vg(g, e.config, R) : R }, import_chunk_racn22qq.kW, { ...bi, signal: P.signal, headers: P.headers, timeout: wu });
  }, resolveInputRequest: (M, k, P) => ku({ key: M, inputRequest: k, task: { taskId: o }, connected: e, rowConfig: h, signal: P, requestDialog: r, transportErrorState: void 0 }) };
}
var Ag = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.We)([import_chunk_racn22qq.For, import_chunk_racn22qq.gRn.omit({ elicitationId: true })]));
async function ku({ key: e, inputRequest: o, task: r, connected: h, rowConfig: g, signal: y, requestDialog: M, transportErrorState: k }) {
  let P = h.name;
  switch (o.method) {
    case "elicitation/create": {
      let R = Ag().safeParse(o.params);
      if (!R.success) {
        (0, import_chunk_k449cc64.He)(P, `Task ${r.taskId}: an input request carries invalid elicitation params (${(0, import_chunk_pbteexar.Ls)(R.error.issues.map((L) => L.code), (L) => L).sort().join(", ")})`);
        return;
      }
      if (R.data.mode === "url" && (0, import_chunk_7625rswd.san)().elicitation?.url === void 0) {
        (0, import_chunk_k449cc64.He)(P, `Task ${r.taskId}: an input request asks for URL elicitation, which is switched off (tengu_mcp_url_elicitation); the task will be cancelled`);
        return;
      }
      let I = (0, import_chunk_bzyb60p0.Gcr)(P, h.config, h.client) ?? (g && (0, import_chunk_bzyb60p0.Gcr)(P, g, h.client));
      if (I !== void 0) throw (0, import_chunk_k449cc64.He)(P, `Task ${r.taskId}: an input request is not shown, because the organization's connector settings refuse this server, have yet to judge it or could not be checked; the task is given up, and the gate holds its cancel too`), new Bo.TaskInputRefusedError(I.message);
      if (M && !(0, import_chunk_f9x2f6cx.Se)()) return (0, import_chunk_4e90ethg.roi)({ connected: h, params: R.data, signal: y, requestDialog: M, transportErrorState: k });
      throw (0, import_chunk_k449cc64.He)(P, `Task ${r.taskId}: cannot show an input request (${M ? "this session is non-interactive" : "no dialog was passed to this call"}); the task will be cancelled`), new Bo.TaskInputUnservableError(`task ${r.taskId} asked a question that cannot be surfaced in this session`);
    }
    case "roots/list":
      return g && pi(P, g).roots.length === 0 ? { roots: [] } : pi(P, h.config);
    default:
      (0, import_chunk_k449cc64.He)(P, `Task ${r.taskId} ${Mu} (${vu(e, o.method)}); the task will be cancelled`);
      return;
  }
}
async function Dn({ client: e, tool: o, args: r, meta: h, signal: g, onProgress: y, offCriticalPath: M = false, holdForQuestion: k, hasResultSizeAnnotation: P = false, resultNotForModel: R = false, resultReader: I = "program", imageLimits: L, timing: z, taskRegistry: H, toolUseId: F, idleTimeoutMs: ae, isAuthRetry: _e = false, filesRound: be, endsAtInputRequest: Q, downloadsOn: Ae = (0, import_chunk_81nggker.m8o)(e), takesSavedFiles: Ve = false, storageV5: Tt, credentials: pt, callingModel: Ge, requestDialog: At, rowConfig: Ht, taskBackground: Et, taskToCaller: Wt, disallowTasks: pe }) {
  let { client: oe, name: ge, config: Te, transportErrorState: Qe } = e, Ye = Xt(oe);
  if (be !== void 0 && !(0, import_chunk_dfyba0ch.z7r)(e)) throw new import_chunk_m0xr8k74.Pkt(ge);
  let Rt = be !== void 0 && (0, import_chunk_dfyba0ch.kTe)(e) !== void 0 ? be : void 0, Mt = (0, import_chunk_qt3kq0hf.vsr)(e), ht = Ve && Ye.getProtocolEra?.() === "modern" && (0, import_chunk_m0xr8k74.k8e)(Ye.getServerCapabilities?.()) ? (0, import_chunk_8sy6wsb2.ssr)(Te) : void 0, vt = (0, import_chunk_wpyz5pav.WWe)(e, o), De = (0, import_chunk_wpyz5pav.yuo)(vt, F) ? vt : void 0, kt = (0, import_chunk_865at33z.rPs)(e, o) ? import_chunk_865at33z.sMl : De !== void 0 ? (Ce) => (0, import_chunk_wpyz5pav.cus)(De, Ce) : be !== void 0 ? import_chunk_m0xr8k74.xHi : void 0, tt = Date.now(), ye = (0, import_chunk_bzyb60p0.Fza)(e, o, r), it = (0, import_chunk_yrpmp1hk.hi)(), Ke = Ye.transport?.sessionId === void 0, Pe, Ne = h?.["claudecode/toolUseId"], yt = typeof Ne === "string", xe = { armedAt: 0, offCriticalPath: M, toolUseId: yt ? Ne : void 0, mark: Ne === void 0 && Te.type === "http" && (0, import_chunk_2mwshd9r.lRt)(Te.url) && (0, import_chunk_865at33z.b)("tengu_rippling_map", true) ? (0, import_crypto.randomUUID)() : void 0, ownSends: { started: 0, ranNothing: 0 }, timing: z ?? (0, import_chunk_ddfyyyy7.J8e)() }, It = /* @__PURE__ */ new Set();
  if (k !== void 0) xe.holdForQuestion = () => {
    let Ce = k(), wt = () => {
      if (It.delete(wt)) Ce();
    };
    return It.add(wt), wt;
  };
  let Ot = () => {
    Qe?.activeCallWatchdogs.delete(xe);
    for (let Ce of It) Ce();
  };
  Qe?.activeCallWatchdogs.add(xe);
  let se = Qe?.toolCallSends?.started, ke = (0, import_chunk_qdcbcsg7.mt)().clientAuthProviders.get(Ye), ct = ke?.rewrittenRefusalCount, bt = /* @__PURE__ */ new Map(), jt = yt ? bt : /* @__PURE__ */ new Map(), Re = false, Gt, Xe = "url" in Te && (0, import_chunk_2mwshd9r.Yu)(Te.url) && !(0, import_chunk_2mwshd9r.lRt)(Te.url);
  try {
    (0, import_chunk_ttsnbbsg.Uri)(Qe), (0, import_chunk_k449cc64.He)(ge, `Calling MCP tool: ${o}`);
    let Ce = ae ?? Vl(Te), wt = tt, we, le = new Promise((Me, St) => {
      we = St;
    });
    xe.requestSent = (Me) => {
      jt.set(String(Me), "sent"), Re = false;
    }, xe.requestTaken = (Me) => {
      if (jt.has(String(Me))) jt.set(String(Me), "taken");
    }, xe.requestAnswered = (Me) => {
      jt.delete(String(Me));
    }, xe.requestNotRun = (Me) => {
      jt.delete(String(Me)), Re = yt;
    };
    let Be = (Me) => jt.has(String(Me)) && Qe?.activeCallWatchdogs.has(xe) === true;
    xe.answerStreamEnded = (Me) => {
      if (!Be(Me)) return;
      clearTimeout(Gt), Gt = setTimeout(() => {
        if (!Be(Me)) return;
        (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' aborting: its answer stream ended with no answer`), we(Object.assign(yt ? new import_chunk_jv7av99m.A((0, import_chunk_hy0sycbj.Dko)(ge, o), "MCP answer stream ended mid-call", import_chunk_hy0sycbj.zkl) : new import_chunk_jv7av99m.A(`MCP server "${ge}": the answer stream for tool "${o}" ended with no answer`, "MCP answer stream ended mid-call"), { mcpErrorSource: "downstream_unreachable" }));
      }, import_chunk_hy0sycbj.jkl);
    };
    let Oe = tt;
    Pe = setInterval(() => {
      let Me = Math.floor((Date.now() - tt) / 1e3);
      if ((0, import_chunk_k449cc64.He)(ge, `Tool '${o}' still running (${Me}s elapsed)`), Te.type === "sdk" && Date.now() - Oe > 9e4) (0, import_chunk_k449cc64.He)(ge, `Tool '${o}': a late watchdog tick; the idle limit starts anew`), wt = Date.now();
      if (Oe = Date.now(), xe.armedAt > 0 && Date.now() - xe.armedAt > 9e4) {
        (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' aborting: transport error ${Math.floor((Date.now() - xe.armedAt) / 1e3)}s ago, response presumed lost`);
        let St = bt.size > 0, qt = Xe && (xe.openQuestions ?? 0) === 0, ut = `MCP server "${ge}" transport dropped mid-call; response for tool "${o}" was lost`;
        we(Object.assign(new import_chunk_jv7av99m.A(St ? (0, import_chunk_hy0sycbj.Dko)(ge, o) : qt ? `${ut}. ${import_chunk_hy0sycbj.H2t}` : ut, "MCP transport lost mid-call", St || qt ? import_chunk_hy0sycbj.Dcn : void 0), { mcpErrorSource: "downstream_unreachable" }));
        return;
      }
      if (Qe?.pendingElicitations) wt = Date.now();
      else if (Qe && Qe.lastElicitationClosedAt > wt) wt = Qe.lastElicitationClosedAt;
      if (Ce > 0 && Date.now() - wt > Ce) {
        let St = Math.floor((Date.now() - wt) / 1e3);
        (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' aborting: no response or progress notification for ${St}s (idle timeout ${Math.floor(Ce / 1e3)}s)`);
        let qt = Te.type === "sdk" ? (0, import_chunk_hy0sycbj.Gkl)(ge, o, St) : `MCP server "${ge}" tool "${o}" sent no response or progress for ${St}s; aborting. If this server is configured in your MCP settings, set a per-server "timeout" (ms) to allow longer silent runs for just this server; otherwise set CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT (ms) globally (0 disables).`, ut = bt.size > 0 || Xe;
        we(Object.assign(new import_chunk_jv7av99m.A(ut ? `${qt} ${import_chunk_hy0sycbj.H2t}` : qt, "MCP tool idle timeout", ut ? import_chunk_hy0sycbj.Dcn : void 0), { mcpErrorSource: "downstream_unreachable" }));
      }
    }, 3e4);
    let Ue = di(Te), re, $e, qe = new Promise((Me, St) => {
      $e = St;
    }), _t = (Me, St) => {
      clearTimeout(re), re = setTimeout((qt, ut, eo, Qt, Bt, bo, $o) => {
        let jo = `MCP server "${ut}" tool "${eo}" timed out after ${Math.floor(Qt / 1e3)}s`, ko = (bo.openQuestions ?? 0) > 0, zo = Bt.size > 0 || $o && !ko, qo = [...ko ? [import_chunk_hy0sycbj.Kkl] : [], ...zo ? [import_chunk_hy0sycbj.H2t] : []];
        qt(Object.assign(new import_chunk_jv7av99m.A(qo.length > 0 ? `${jo}. ${qo.join(" ")}` : jo, "MCP tool timeout", zo ? import_chunk_hy0sycbj.Dcn : ko ? import_chunk_hy0sycbj.nji : void 0), { mcpErrorSource: "downstream_unreachable" }));
      }, Me, $e, ge, o, St, bt, xe, Xe);
    };
    _t(Ue, Ue);
    let Dt = ed(Te, Ue), Nt = nd(Te);
    if (Dt || Nt > 0) rd(xe, { inFlight: Qe?.activeCallWatchdogs, timeoutMs: Ue, pauses: Dt, questionBoundMs: Nt, armTimeout: _t, timedOut: qe });
    let Yt = () => {
      if (clearTimeout(Gt), Pe !== void 0) clearInterval(Pe), Pe = void 0;
      Ot();
    }, vo = () => {
      if (re) clearTimeout(re);
      Yt();
    }, _o = pe === true || be !== void 0 || (0, import_chunk_f9x2f6cx.kJ)() || (0, import_chunk_f9x2f6cx.Se)() && Et === void 0 && Wt === void 0, So = (Me, St, qt) => {
      xe.armedAt = 0, wt = Date.now(), y?.({ type: "mcp_progress", status: Me, serverName: ge, toolName: o, progress: qt, progressMessage: St });
    }, oo, so = async () => {
      let Me = (0, import_chunk_507k3c1m.RR)(), St = (0, import_chunk_g9n176jp.a_s)(Te), qt = Me && !_o && !St && Mt === void 0 && ht === void 0;
      if (Me && !_o && St) (0, import_chunk_k449cc64.He)(ge, "Tasks are off for this server: the tengu_gleaming_creek server list shuts it out, so its tool calls run without Tasks");
      let ut = Ye.getProtocolEra?.() === "modern", eo = qt && ut, Qt = eo ? bi : {}, bo = (0, import_chunk_qdcbcsg7.mt)().clientTasksDeclaredBeforeServerList.get(Ye) ?? (0, import_chunk_7625rswd.san)(), $o = !qt && ut ? (0, import_chunk_7625rswd.Nkt)(bo) : bo, jo = { serverAdvertisedDownloads: (0, import_chunk_m0xr8k74.k8e)(Ye.getServerCapabilities?.()), downloadsOn: Ae || ht !== void 0 }, ko = ut ? (0, import_chunk_m0xr8k74.Nho)($o, jo) : $o;
      oo = eo && Et !== void 0 && H !== void 0 && (0, import_chunk_zmjx1k2j.Jor)(Te) ? (0, import_crypto.randomBytes)(16).toString("hex") : void 0;
      let zo = ko !== bo ? { ...h, [import_chunk_racn22qq.Q_e]: ko } : h, qo = Ae && Mt !== void 0, Fn = Rt !== void 0 || be === void 0 && qo ? { ...zo, [import_chunk_dfyba0ch.Vsi]: { files: Rt?.files ?? [], ...qo && { downloads: true }, ...Rt?.repeated === true && { requestState: Rt.requestState } } } : be === void 0 ? zo : { ...zo, [import_chunk_racn22qq.Q_e]: (0, import_chunk_m0xr8k74.Qfl)(jo) }, Go = await Ye.callTool({ name: o, arguments: r, _meta: xe.mark === void 0 ? Fn : { ...Fn, [import_chunk_hy0sycbj.Fws]: xe.mark }, ...be?.repeated === true && Rt === void 0 && { requestState: be.requestState } }, { ...Qt, ...(be !== void 0 || Q) && Eu, ...be !== void 0 && wg, ...oo !== void 0 ? { headers: { [import_chunk_th6rswmx.Zor]: oo } } : void 0, ...ht !== void 0 && { headers: { [import_chunk_8sy6wsb2.S7r]: "1" } }, signal: Dt || Nt > 0 || Te.type === "sdk" && Ce > 0 ? AbortSignal.any([g, Ft.signal]) : fo !== void 0 ? AbortSignal.any([g, Eo.signal]) : g, timeout: Dt ? import_chunk_2567t09g.au : Ue, onprogress: (Wo) => {
        if (xe.armedAt = 0, wt = Date.now(), an?.reportBackgroundProgress(g, Wo), y) y({ type: "mcp_progress", status: "progress", serverName: ge, toolName: o, progress: Wo.progress, total: Wo.total, progressMessage: Wo.message });
      } });
      if (eo) {
        let Wo = (X) => {
          Ye.request({ method: "tasks/cancel", params: { taskId: X } }, import_chunk_racn22qq.kW, { signal: AbortSignal.timeout(import_chunk_507k3c1m.Rje) }).catch(() => {
          });
        }, Ko = Bo.CreateTaskResultSchema().safeParse(Go);
        if (Ko.success) {
          if (Ft.signal.aborted) return Wo(Ko.data.taskId), Go;
          if (Wt) return Wt(Ko.data), po = { content: "" }, Go;
          if (Et && H) {
            let X = await Do(Ko.data, Et, H);
            if ("placeholder" in X) return po = X.placeholder, Go;
            let { outcome: ce } = X;
            if (ce.status === "completed") return import_chunk_racn22qq.hRn.parse(ce.result);
            let ve = sn.boundMcpStatusMessage(ce.message) ?? "";
            return (0, import_chunk_k449cc64.He)(ge, `Task ${Ko.data.taskId} ended without a result: ${ce.code} \u2014 ${ve}`), Vt(ce.status === "cancelled", ve);
          }
          return zt(Ko.data, ko === $o ? void 0 : ko);
        }
        let Un = kg().safeParse(Go);
        if (Un.success) {
          (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' returned a malformed task handle: ${Ko.error.message.slice(0, 200)}`);
          let X = Pg().safeParse(Un.data.taskId);
          if (X.success) Wo(X.data);
          return { content: [{ type: "text", text: `MCP server "${ge}" returned a malformed task handle for tool "${o}", so Claude Code cannot track the task or get its result. ${X.success ? "It tried to cancel the task, but the" : "The"} server may still be running it. Calling the tool again may start another task.` }], isError: true, _meta: void 0, structuredContent: void 0 };
        }
        let G = Bo.parseAgentTaskMeta(Go._meta);
        if (G?.merged === true && G.taskId && H) {
          if (In.noteMergedIntoTask(H, ge, In.mcpTransportFingerprint(e.config), G.taskId)) (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' merged a message into running task ${G.taskId}`);
        }
      }
      return Go;
    }, po, Do = (Me, St, qt) => {
      let ut = (eo, Qt) => Rg(eo, { taskId: Qt, requestDialog: At, rowConfig: Ht });
      return Yt(), In.handOffSep2663TaskAndWait({ callSignal: Ft.signal, atMostMs: Ue - (Date.now() - tt) - 1e3, handOff: { task: Me, handoff: St, taskRegistry: qt, serverName: ge, toolName: o, toolUseId: F, polledBy: (0, import_chunk_zmjx1k2j.hJt)({ serverName: ge, mcpTaskId: Me.taskId }) && (0, import_chunk_zmjx1k2j.n7r)() ? "service" : oo !== void 0 ? (0, import_chunk_zmjx1k2j.Qor)(Me._meta, oo) : void 0, initialBinding: ut(e, Me.taskId), initialConfig: e.config, bindingFactory: ut } });
    }, zt = async (Me, St) => {
      (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' returned task ${Me.taskId} (${Me.status}); polling inline`), So("progress", sn.boundMcpStatusMessage(Me.statusMessage) ?? `Task ${(0, import_chunk_spnfty7j.Oje)(Me.taskId)} ${Me.status}`, 0);
      let qt = 0, ut = await Bo.driveMcpTask({ errorText: (Qt) => (0, import_chunk_jbjjrhxt.gl)(Qt, Te), task: Me, signal: Ft.signal, log: (Qt) => (0, import_chunk_k449cc64.He)(ge, Qt), request: (Qt, Bt, bo) => Ye.request({ method: Qt, params: Qt === "tasks/get" && St !== void 0 ? { ...Bt, _meta: { [import_chunk_racn22qq.Q_e]: St } } : Bt }, import_chunk_racn22qq.kW, { ...bi, signal: bo.signal, headers: bo.headers, timeout: wu }), onStatus: (Qt) => {
        qt += 1, So("progress", sn.boundMcpStatusMessage(Qt.statusMessage) ?? `Task ${(0, import_chunk_spnfty7j.Oje)(Qt.taskId)} ${Qt.status.replace("_", " ")}`, qt);
      }, resolveInputRequest: (Qt, Bt) => ku({ key: Qt, inputRequest: Bt, task: Me, connected: e, rowConfig: Ht, signal: Ft.signal, requestDialog: At, transportErrorState: Qe }) });
      if (ut.status === "completed") return (0, import_chunk_k449cc64.He)(ge, `Task ${Me.taskId} completed`), import_chunk_racn22qq.hRn.parse(ut.result);
      let eo = sn.boundMcpStatusMessage(ut.error.message) ?? "";
      return (0, import_chunk_k449cc64.He)(ge, `Task ${Me.taskId} ended without a result: ${ut.error.kind} \u2014 ${eo}`), Vt(ut.error.kind === "cancelled" || ut.error.kind === "input_unservable", eo);
    }, Vt = (Me, St) => {
      if (g.aborted) throw new import_chunk_jv7av99m.Ie();
      throw new import_chunk_jv7av99m.A(`MCP server "${ge}" task for tool "${o}" ${Me ? "was cancelled" : "failed"}: ${St}`, "MCP task did not complete");
    }, Ft = new AbortController(), no = () => Ft.abort();
    g.addEventListener("abort", no, { once: true }), (0, import_chunk_3fqcfedz.KYr)(Te);
    let io = z?.mark("external"), Ao = new AbortController(), xt = Qe?.toolCallSends, fo = xt !== void 0 && gs() ? { failed: Ao.signal, sends: xt, tool: o } : void 0, Eo = new AbortController();
    qe.catch(() => Eo.abort(new import_chunk_racn22qq.Xa(import_chunk_racn22qq.Ua.RequestTimeout, "Request timed out")));
    let mo = Promise.race([(0, import_chunk_ag73x1p3.SBa)(fo, so), qe, le]);
    mo.catch(() => Ao.abort());
    let co = await mo.finally(() => {
      g.removeEventListener("abort", no), no(), vo(), io?.();
    });
    if (xe.returned?.(), po) return (0, import_chunk_yv3afk5n.m4e)(ge, void 0), po;
    if (be === void 0 && Ae && Mt !== void 0 && ((0, import_chunk_dfyba0ch.qsi)(co) !== void 0 || (0, import_chunk_m0xr8k74.Lho)(co))) return (0, import_chunk_yv3afk5n.m4e)(ge, void 0), { ...(0, import_chunk_m0xr8k74.yhs)(o), content: `The tool "${o}" did not run: the connector asked for files or other input first, which can't be given in this call.` };
    if (Q && (0, import_chunk_m0xr8k74.Lho)(co)) return (0, import_chunk_yv3afk5n.m4e)(ge, void 0), (0, import_chunk_m0xr8k74.yhs)(o);
    let Vo = Rt !== void 0 ? (0, import_chunk_dfyba0ch.qsi)(co) ?? ((0, import_chunk_m0xr8k74.Lho)(co) ? co : void 0) : be !== void 0 && (0, import_chunk_m0xr8k74.Lho)(co) ? co : void 0;
    if (Vo !== void 0) return (0, import_chunk_yv3afk5n.m4e)(ge, void 0), { content: [], inputRequired: Vo };
    let { result: Kt, downloadOffers: wo } = (0, import_chunk_8sy6wsb2.Qoi)(co, e.config, (0, import_chunk_m0xr8k74.k8e)(Ye.getServerCapabilities?.()), Mt, ht);
    yg(Kt, ge, kt, wo);
    let Co = Date.now() - tt, Io = Co < 1e3 ? `${Co}ms` : Co < 6e4 ? `${Math.floor(Co / 1e3)}s` : `${Math.floor(Co / 6e4)}m ${Math.floor(Co % 6e4 / 1e3)}s`;
    (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' completed successfully in ${Io}`);
    let Ho = (0, import_chunk_bzyb60p0.gza)(ge);
    if (Ho) (0, import_chunk_y53wbr8a.a)("tengu_code_indexing_tool_used", { tool: (0, import_chunk_78g0060s.f)(Ho), source: (0, import_chunk_78g0060s.S)("mcp"), success: true });
    let lo = await mg(co, o, ge, L, P, Tt, pt, Ge, R, (0, import_chunk_bzyb60p0.Nza)(e, o) ?? ye?.reportFile, (0, import_chunk_bzyb60p0.Dza)(e, o, F, co), wo === void 0 ? F : void 0, I);
    return (0, import_chunk_bzyb60p0.Lza)(e, o), ye?.replied(lo), (0, import_chunk_yv3afk5n.m4e)(ge, void 0), { content: lo, _meta: Kt._meta, structuredContent: co.structuredContent, resourceLinks: (0, import_chunk_w4dc83v7.Wrn)(co.content), ...wo !== void 0 && { downloadOffers: wo } };
  } catch (Ce) {
    if (!g.aborted) (0, import_chunk_yv3afk5n.m4e)(ge, Ce);
    if (ye?.failed(Ce, { aborted: g.aborted, overflowed: Ce instanceof en, closeReason: Qe?.closeReason }), Pe !== void 0) clearInterval(Pe);
    clearTimeout(Gt), Ot();
    let wt = Date.now() - tt, we = Tg(Ce);
    if (g?.aborted !== true && Ce instanceof Error && Ce.name !== "AbortError") (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' failed after ${Math.floor(wt / 1e3)}s: ${kt !== void 0 && Ce instanceof import_chunk_yz5b8aaa.Bm ? kt(Ce.message) : De !== void 0 ? (0, import_chunk_wpyz5pav.cus)(De, Ce.message, Ce.name) : be !== void 0 ? (0, import_chunk_m0xr8k74.xHi)(Ce.message, Ce.name) : we !== void 0 ? we.forLog : (0, import_chunk_jbjjrhxt.gl)(Ce, Te)}`);
    if (Ce instanceof Error) {
      let Be = Ce instanceof import_chunk_racn22qq.ef ? void 0 : Ce instanceof import_chunk_racn22qq.PO ? Ce.status : "code" in Ce && typeof Ce.code === "number" ? Ce.code : void 0, Oe = (Te.type === "http" || Te.type === "sse" || Te.type === "ws") && !!Te.headersHelper, Ue = (0, import_chunk_qdcbcsg7.rMr)(Te), re = Ce instanceof import_chunk_racn22qq.bie ? Ce.code : "errorCode" in Ce && typeof Ce.errorCode === "string" ? Ce.errorCode : void 0, $e = re !== void 0 && !["invalid_grant", "invalid_client", "unauthorized_client"].includes(re) && /^HTTP 40[13]\b/.test(Ce.message), qe = (0, import_chunk_qdcbcsg7.mt)().clientAuthProviders.get(Xt(oe))?.pendingStepUpScope, _t = gg({ errorCode: Be, message: Ce.message, isUnauthorizedError: Ce instanceof import_chunk_racn22qq.YL, isOAuthShapedAuthError: $e, hasHeadersHelper: Oe, pendingStepUpScope: qe }), Dt = _t === "credential_rejected" && ke?.rewrittenRefusalCount !== ct, Nt = (Te.type === "http" || Te.type === "sse") && !Te.headersHelper && !(0, import_chunk_yz5b8aaa._ee)(Te) ? Te : void 0, Yt = _t === void 0 ? void 0 : (0, import_chunk_3fqcfedz.KYr)(Te, true);
      if (Yt !== void 0 && Nt !== void 0 && await (0, import_chunk_yz5b8aaa.vXe)(ge, Nt)) throw new import_chunk_jv7av99m.A(Yt, "MCP tool call refused: connector block");
      let vo = !_e && _t === "credential_rejected" && !Oe && Nt !== void 0, _o = vo && await (0, import_chunk_yz5b8aaa.vXe)(ge, Nt), So = _o || vo && (0, import_chunk_vp3hv9ky.Aor)() && (0, import_chunk_qdcbcsg7.mt)().clientAuthProviders.get(Xt(oe))?.lastAuthRejection?.status === 401 && (0, import_chunk_qdcbcsg7.mt)().clientAuthProviders.get(Xt(oe))?.lastAuthRejection?.accessToken !== void 0;
      if ((Oe || Ue || Nt !== void 0) && !_e) {
        let zt = (0, import_chunk_3bjtjsgp.Uo)(ge, Te);
        if ((0, import_chunk_yrpmp1hk.hi)() !== it) throw new import_chunk_jv7av99m.A(`MCP tool call to server "${ge}" was aborted: the account changed before re-authentication`, "MCP tool call aborted: account changed before reauth");
        let Vt = (0, import_chunk_cwkztn5x.td)().reauthInFlight, Ft = (0, import_chunk_qdcbcsg7.mt)(), no = Vt.get(zt), io = no !== void 0 && no.epoch === it ? no.promise : void 0;
        Ft.reauthDecisionSink?.(io !== void 0 ? "joined" : no !== void 0 ? "stale_refused" : "started");
        let Ao = io !== void 0 && (Ce instanceof import_chunk_racn22qq.Xa && Ce.code === import_chunk_racn22qq.Ua.ConnectionClosed || Ce instanceof import_chunk_racn22qq.ef && Ce.code === -32e3) && !(0, import_chunk_yz5b8aaa.TOr)(Qe?.closeReason);
        if ((Ao || _t === "credential_rejected" && Oe || _t === "credential_rejected" && Ue || So) && !(0, import_chunk_bzyb60p0.gi)(ge) && !(0, import_chunk_bzyb60p0.MO)(ge, Te) && !yi(ge, Te) && !((Te.type === "http" || Te.type === "sse") && (0, import_chunk_kj84g0v7.B$a)(ge, Te)) && !Dt) {
          if ((0, import_chunk_k449cc64.He)(ge, Oe ? `Tool '${o}' returned ${Be ?? 401}; re-running headersHelper and retrying once` : Ue ? `Tool '${o}' returned ${Be ?? 401}; session credential rejected \u2014 reconnecting and retrying once` : Ao ? `Tool '${o}' failed because a reconnect in progress closed its connection; retrying once on the new connection` : `Tool '${o}' returned ${Be ?? 401}; ${_o ? "refresh token stored" : "stored sign-in rejected, no refresh token"} \u2014 reconnecting and retrying once`), Ao) (0, import_chunk_cqa9hrgx.l)(Oe ? "mcp_headers_helper" : "mcp_oauth_refresh", "collateral_rejoin");
          if (!io) {
            (0, import_chunk_cqa9hrgx.l)(Oe ? "mcp_headers_helper" : So && !_o ? "mcp_signed_out_fallback" : "mcp_oauth_refresh", "reauth_retry"), Ye.onclose = void 0;
            let Eo = it;
            io = (async () => (await Xo(ge, Te), go(ge, Te, void 0, void 0, pt)))();
            let mo = { promise: io, epoch: Eo };
            Vt.set(zt, mo), io.then((co) => {
              if (co.type === "connected" && (0, import_chunk_yrpmp1hk.hi)() === Eo) import_chunk_htn4d0yq.gJt.emit(ge, Te);
            }).finally(() => {
              if (Vt.get(zt) === mo && !Ft.holdStaleReauthEntry) Vt.delete(zt);
            }).catch(() => {
            });
          }
          let fo = await io;
          if ((0, import_chunk_yrpmp1hk.hi)() !== it) {
            if (fo.type === "connected") await Po(fo);
            throw new import_chunk_jv7av99m.A(`MCP tool call to server "${ge}" was aborted: the account changed during re-authentication`, "MCP tool call aborted: account changed during reauth");
          }
          if (fo.type === "connected" && ((0, import_chunk_bzyb60p0.gi)(ge) || (0, import_chunk_bzyb60p0.MO)(ge, Te) || yi(ge, Te))) await Xo(ge, Te);
          else if (fo.type === "connected") return Dn({ client: fo, tool: o, args: r, meta: h, signal: g, onProgress: y, offCriticalPath: M, holdForQuestion: k, hasResultSizeAnnotation: P, resultNotForModel: R, resultReader: I, timing: z, imageLimits: L, taskRegistry: H, requestDialog: At, rowConfig: Ht, taskBackground: Et, taskToCaller: Wt, toolUseId: F, idleTimeoutMs: ae, isAuthRetry: true, filesRound: be, endsAtInputRequest: Q, downloadsOn: Ae, takesSavedFiles: Ve, storageV5: Tt, credentials: pt, callingModel: Ge, disallowTasks: pe });
          if ((0, import_chunk_k449cc64.He)(ge, `Auth reconnect returned '${fo.type}'; the call is not retried`), (0, import_chunk_sjqze7qg.U_)() && fo.type !== "needs-auth") {
            let Eo = go.cache?.get?.(zt);
            if (Eo !== void 0 && await ln(Eo) === fo && go.cache?.get?.(zt) === Eo) (0, import_chunk_cwkztn5x.td)().connections.delete(zt);
          }
        }
      }
      if (_t === "credential_rejected" && Ue) throw await Xo(ge, Te), (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' rejected the session credential (${Be ?? 401}); failing the call and clearing the connection for a fresh retry later`), Object.assign(new import_chunk_jv7av99m.A(import_chunk_6wgyy4rn.gUe.sessionCredentialRejected(ge, Be ?? 401), "MCP server rejected the session credential"), { mcpErrorSource: "other" });
      if (_t !== void 0) {
        Di(e);
        let zt = Te.type === "claudeai-proxy" && Te.eligible === false, Vt = zt ? "not_connected" : _t === "step_up" ? "insufficient_scope" : "token_expired";
        (0, import_chunk_k449cc64.He)(ge, Vt === "insufficient_scope" ? `Tool call returned 403 insufficient_scope (scope: ${(0, import_chunk_jbjjrhxt.STe)("scope", qe ?? "")})` : "Tool call returned 401 Unauthorized - token may have expired");
        let Ft = yo(Te, ge), no = (0, import_chunk_865at33z.ZV)(ge, Te);
        (0, import_chunk_y53wbr8a.a)("tengu_mcp_tool_call_auth_error", { errorCode: (0, import_chunk_78g0060s.Gs)(Be ?? (_t === "step_up" ? 403 : 401)), transportType: (0, import_chunk_78g0060s.f)(Te.type ?? "stdio"), authErrorKind: (0, import_chunk_78g0060s.f)(Vt), ...Ft, mcpServerName: (0, import_chunk_78g0060s.R$)((0, import_chunk_3f4m74y6.xn)(ge), no), mcpToolName: (0, import_chunk_865at33z.jzn)((0, import_chunk_3f4m74y6.xn)(ge), (0, import_chunk_3f4m74y6.xn)(o), no) });
        let io = (Te.type === "http" || Te.type === "sse") && (0, import_chunk_yz5b8aaa._ee)(Te), Ao = Dt && (Te.type === "http" || Te.type === "sse") && await (0, import_chunk_yz5b8aaa.vXe)(ge, Te);
        throw new import_chunk_yz5b8aaa._v(ge, zt ? import_chunk_6wgyy4rn.gUe.notConnected(ge) : Vt === "insufficient_scope" ? import_chunk_6wgyy4rn.gUe.stepUp(ge, qe) : Oe && !Dt ? import_chunk_6wgyy4rn.gUe.helperRejected(ge) : io ? import_chunk_6wgyy4rn.gUe.headerRejected(ge) : import_chunk_6wgyy4rn.gUe.signInAgain(ge, Te), Vt, (0, import_chunk_qdcbcsg7.mt)().clientFirstPartyBearers.get(Xt(oe))?.last, Vt === "insufficient_scope" ? qe : void 0, Ao);
      }
      let so = !(Te.type === "http" && Be === 404 && Ke) && Ir(Ce), po = (Ce instanceof import_chunk_racn22qq.Xa && Ce.code === import_chunk_racn22qq.Ua.ConnectionClosed || Ce instanceof import_chunk_racn22qq.ef && Ce.code === -32e3 && Ce.message.includes("Connection closed")) && (Te.type === "http" || Te.type === "claudeai-proxy");
      if (Ce instanceof en) throw (0, import_chunk_bzyb60p0.Sdi)(e, o, "too_large"), (0, import_chunk_bzyb60p0.ydi)(e, o, "http body overflow"), new import_chunk_yz5b8aaa.RAt(ge, o, { kind: "too_large", capBytes: pn });
      if (po && (0, import_chunk_yz5b8aaa.TOr)(Qe?.closeReason)) throw (0, import_chunk_bzyb60p0.Sdi)(e, o, "connection_closed"), (0, import_chunk_bzyb60p0.ydi)(e, o, Qe?.closeReason), new import_chunk_yz5b8aaa.RAt(ge, o, { kind: "connection_closed" });
      let Do = [...bt.values()];
      if (po && Do.length > 0) throw (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' not sent again: the connection closed before the call was answered`), Object.assign(new import_chunk_jv7av99m.A((0, import_chunk_hy0sycbj.Dko)(ge, o), "MCP call not sent again after connection closed", import_chunk_hy0sycbj.Vkl), { mcpErrorSource: "downstream_unreachable" });
      if (Do.includes("sent") && !so && (Be === void 0 || Ce.name === "TimeoutError" ? !(Ce instanceof import_chunk_racn22qq.Xa || Ce instanceof import_chunk_racn22qq.ef || Ce instanceof import_chunk_jv7av99m.A) : Ch.has(Be))) throw (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' failed: its POST does not show whether the server got the call`), Object.assign(new import_chunk_jv7av99m.A((0, import_chunk_hy0sycbj.Dko)(ge, o), "MCP call went out and got no answer", import_chunk_hy0sycbj.Dcn), { mcpErrorSource: "downstream_unreachable" });
      if (Xe && (xe.ownSends?.failed ?? 0) > 0 && !g.aborted && (Be === void 0 || Ce.name === "TimeoutError" ? !(Ce instanceof import_chunk_racn22qq.Xa || Ce instanceof import_chunk_racn22qq.ef || Ce instanceof import_chunk_jv7av99m.A) : Be >= 500 && (Be !== 503 || Ce.message.includes(yh)))) {
        (0, import_chunk_k449cc64.He)(ge, `Tool '${o}' failed: its POST through the proxy does not show whether the server got the call`);
        let zt = Ce.constructor.name === "Error" ? (0, import_chunk_jbjjrhxt.gl)(Ce, Te) : Ce.message;
        throw Object.assign(new import_chunk_jv7av99m.A(`${zt.trimEnd()}
${import_chunk_hy0sycbj.H2t}`, "MCP call went out and got no answer", import_chunk_hy0sycbj.Dcn), { mcpErrorSource: (0, import_chunk_yz5b8aaa.gz)(Ce) });
      }
      if (so || po) {
        (0, import_chunk_k449cc64.He)(ge, `MCP session expired during tool call (${so ? "stale session" : "connection closed"}), clearing connection cache for re-initialization`);
        let zt = yo(Te, ge), Vt = (0, import_chunk_865at33z.ZV)(ge, Te), Ft = (0, import_chunk_865at33z.jzn)((0, import_chunk_3f4m74y6.xn)(ge), (0, import_chunk_3f4m74y6.xn)(o), Vt);
        (0, import_chunk_y53wbr8a.a)("tengu_mcp_session_expired", { errorCode: Be !== void 0 ? (0, import_chunk_78g0060s.Gs)(Be) : void 0, transportType: (0, import_chunk_78g0060s.f)(Te.type ?? "stdio"), ...zt, mcpServerName: (0, import_chunk_78g0060s.R$)((0, import_chunk_3f4m74y6.xn)(ge), Vt), mcpToolName: Ft }), await Xo(ge, Te);
        let no = (0, import_chunk_ag73x1p3.kBa)(Qe?.toolCallSends, se, xe.ownSends);
        throw new import_chunk_yz5b8aaa.iK(ge, so ? "session_expired_404" : (0, import_chunk_yz5b8aaa.pHl)(Qe?.closeReason) || Qe?.closeReason === "session expired" && no ? "connection_closed_call_refused" : Re || !_e && no ? "connection_closed_call_not_run" : "connection_closed_http");
      }
    }
    if (we !== void 0) {
      if (we.noHandler === void 0) throw new import_chunk_yz5b8aaa.mPo(ge, we.forModel);
      if (g?.aborted !== true) throw we.noHandler(ge);
    }
    let le = Ce;
    if (Ce instanceof import_chunk_racn22qq.Xa && Ce.code === import_chunk_racn22qq.Ua.InvalidResult || Ce instanceof import_chunk_adx6804h.Bz || (le?.name === "ZodError" || le?.name === "$ZodError") && Array.isArray(le?.issues)) throw new import_chunk_yz5b8aaa.mPo(ge, Ce);
    if (!(Ce instanceof Error && Ce.name === "AbortError") && !(g?.aborted === true && Ce instanceof import_chunk_racn22qq.Xa)) {
      if (xe.sentDecline === true && (Ce instanceof import_chunk_yz5b8aaa.Bm || Ce instanceof import_chunk_racn22qq.ef && Ce.code !== import_chunk_yz5b8aaa.Pke && Ce.code !== import_chunk_racn22qq.ld.UrlElicitationRequired)) throw new import_chunk_yz5b8aaa.Bm((0, import_chunk_hy0sycbj.qkl)((0, import_chunk_271xsh6x.Bl)(Ce.message)), "MCP call failed after the server's question was declined", Ce instanceof import_chunk_racn22qq.ef ? void 0 : Ce.mcpMeta, import_chunk_hy0sycbj.Lko);
      throw Ce;
    }
    return { content: import_chunk_hy0sycbj.cTr, interrupted: true, isError: true };
  } finally {
    if (Pe !== void 0) clearInterval(Pe);
    (0, import_chunk_ttsnbbsg.Bri)(Qe);
  }
}
function ni(e) {
  if (e.message.content[0]?.type !== "tool_use") return;
  return e.message.content[0].id;
}
function Og(e, o) {
  if (o === void 0) return;
  let r = import_chunk_racn22qq.lJt.safeParse(o.initializeResult);
  if (!r.success || !import_chunk_racn22qq.iJt.includes(r.data.protocolVersion) || !Ol(o.initializeResult)) {
    (0, import_chunk_k449cc64.He)(e, "Host manifest initializeResult is not a valid InitializeResult for this client \u2014 handshaking over the control channel instead"), (0, import_chunk_cqa9hrgx.l)("mcp_sdk_manifest", "mcp_sdk_manifest_invalid_initialize");
    return;
  }
  if (o.toolsListResult !== void 0 && (!import_chunk_racn22qq.Ngt.safeParse(o.toolsListResult).success || !Ol(o.toolsListResult))) {
    (0, import_chunk_k449cc64.He)(e, "Host manifest toolsListResult is not a valid ListToolsResult \u2014 handshaking over the control channel instead"), (0, import_chunk_cqa9hrgx.l)("mcp_sdk_manifest", "mcp_sdk_manifest_invalid_tools_list");
    return;
  }
  if (o.toolsListResult !== void 0 && o.toolsListResult.nextCursor !== void 0) return (0, import_chunk_k449cc64.He)(e, "Host manifest toolsListResult is paginated (nextCursor) \u2014 replaying initialize only and listing tools over the control channel"), (0, import_chunk_cqa9hrgx.l)("mcp_sdk_manifest", "mcp_sdk_manifest_paginated_tools_list"), { initializeResult: o.initializeResult };
  return o;
}
function Ol(e) {
  return import_chunk_racn22qq.o0t.safeParse({ jsonrpc: "2.0", id: 0, result: e }).success;
}
function Il(e, o) {
  switch (e) {
    case "none":
    case "pending":
      return;
    case "replayed":
      if (o) (0, import_chunk_cqa9hrgx.u)("mcp_sdk_manifest");
      else (0, import_chunk_cqa9hrgx.m)("mcp_sdk_manifest", "mcp_sdk_manifest_replay_failed");
      return;
    case "protocol_version_mismatch":
    case "client_capabilities_declared":
    case "malformed_result":
    case "unexpected_message":
      (0, import_chunk_cqa9hrgx.l)("mcp_sdk_manifest", `mcp_sdk_manifest_${e}`);
      return;
  }
}
function Or(e, o, r) {
  let h = (0, import_chunk_bzyb60p0.Jye)(e, o) === "refused" ? "refused" : r;
  return (0, import_chunk_k449cc64.He)(e, `Skipping connection (Claude in Chrome policy: ${h})`), { client: { type: "failed", name: e, config: o, ...h === "refused" ? (0, import_chunk_bzyb60p0.iw)("managed-policy", e, o) : { error: "Could not read the organization policy for Claude in Chrome - will try again" } }, tools: [], commands: [] };
}
async function pR(e, o, r, h, g = false) {
  let y = [], M = [], k = [];
  Oi();
  let P = await Promise.allSettled(Object.entries(e).map(async ([I, L]) => {
    let z = { ...L, scope: "dynamic", hostRegistered: g || void 0 }, H = (0, import_chunk_bzyb60p0.Jye)(I, z);
    if (H !== "admitted") return Or(I, z, H);
    let F = Og(I, r?.get(I)), ae = F?.modern === true && !(0, import_chunk_sppbt6xz.s1)(), _e = new import_chunk_ttkwnzeb.Nri(I, o, F, ae);
    if (ae) (0, import_chunk_m0xr8k74._hs)(_e, I);
    (0, import_chunk_ze4kt7fs.aSr)({ name: I }, _e), kn(_e);
    let be = (0, import_chunk_bzyb60p0.Imi)(I, z, _e), Q = new import_chunk_racn22qq.X9o({ ...import_chunk_ttkwnzeb.bYr, version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION ?? "unknown" }, { capabilities: ae ? import_chunk_7625rswd.Who : import_chunk_ttkwnzeb.SYr, ...ae && { responseCacheStore: Ms(I) }, jsonSchemaValidator: (0, import_chunk_2b1wcpvk.eln)() ? Rs : new Ai(), versionNegotiation: Br("sdk-control") });
    dc(_e, () => ({ name: I, config: z, capabilities: Q.getServerCapabilities() }));
    let Ae = false;
    try {
      let Ve = Q.connect(_e, { timeout: (0, import_chunk_98tkmkvx.bf)(), ...ae && { prior: { kind: "modern", discover: import_chunk_racn22qq.Ytt.parse({ resultType: "complete", supportedVersions: [import_chunk_hy0sycbj.Bre], capabilities: F.initializeResult.capabilities, instructions: F.initializeResult.instructions, _meta: { [import_chunk_racn22qq.qtt]: F.initializeResult.serverInfo } }) } } });
      if (!await (0, import_chunk_5appeerh.me)(Ve.then(() => true), (0, import_chunk_98tkmkvx.bf)())) throw Ve.catch(() => {
      }), _e.close().catch(() => {
      }), Ae = true, Dr(`SDK MCP server "${I}" connection timed out after ${(0, import_chunk_98tkmkvx.bf)()}ms`);
      let pt = Q.getServerCapabilities(), Ge = Q.getInstructions(), At = Fl(Ge, I), Ht = { type: "connected", serverInfo: Q.getServerVersion(), name: I, capabilities: pt || {}, instructions: At, negotiatedProtocolVersion: Q.getNegotiatedProtocolVersion(), protocolEra: Q.getProtocolEra(), ...F?.followsTasks === true && { hostFollowsTasks: true }, client: Dl(Q), config: z, cleanup: async () => {
        await Q.close();
      } }, Et = (0, import_chunk_3bjtjsgp.Uo)(Ht.name, Ht.config);
      (0, import_chunk_cwkztn5x.td)().toolLists.delete(Et), Ro.invalidateMcpSkillsForServer(Et);
      let Wt = be.held ?? (0, import_chunk_bzyb60p0.Jye)(I, z);
      if (Wt !== "admitted") return Q.close().catch(() => {
      }), Or(I, z, Wt);
      if ((0, import_chunk_cbqbjyfn.gri)(z, pt)) return Q.close().catch(() => {
      }), (0, import_chunk_k449cc64.He)(I, "Skipping connection (disableClaudeAiConnectors)"), (0, import_chunk_cqa9hrgx.u)("mcp_connectors_off_in_desktop"), { client: { type: "failed", name: I, config: z, ...(0, import_chunk_bzyb60p0.iw)("connectors-setting", I, z) }, tools: [], commands: [] };
      let pe = [];
      if (pt?.tools) {
        let Te = await nr(Ht, h);
        pe.push(...Te);
      }
      let oe = (0, import_chunk_fpcs74d2.z_)() && pt?.resources ? await Ro.fetchMcpSkillsForClient(Ht, h) : [], ge = be.held ?? ((0, import_chunk_bzyb60p0.Jye)(I, z) === "refused" ? "refused" : void 0);
      if (ge !== void 0) return Q.close().catch(() => {
      }), Or(I, z, ge);
      return (0, import_chunk_cqa9hrgx.u)("mcp_sdk_connect"), Il(_e.manifestOutcome, true), { client: Ht, tools: pe, commands: oe };
    } catch (Ve) {
      if (be.held !== void 0) return Q.close().catch(() => {
      }), Or(I, z, be.held);
      return (0, import_chunk_cqa9hrgx.m)("mcp_sdk_connect", Ae ? "mcp_sdk_connect_timeout" : "mcp_sdk_connect_failed"), Il(_e.manifestOutcome, false), (0, import_chunk_k449cc64.id)(I, `Failed to connect SDK MCP server: ${Ve}`), { client: { type: "failed", name: I, config: { ...L, scope: "user" } }, tools: [], commands: [] };
    }
  }));
  for (let I of P) if (I.status === "fulfilled") y.push(I.value.client), M.push(...I.value.tools), k.push(...I.value.commands);
  if (y.some((I) => I.type === "connected" && !!I.capabilities?.resources)) {
    if (![import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e].some((L) => M.some((z) => (0, import_chunk_4vsz8a99.gt)(z, L.name)))) M.push(import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e, import_chunk_ttsnbbsg.Qqe);
  }
  return { clients: y, tools: M, commands: k };
}
async function fR(e) {
  await Promise.all(e.map(async (o) => {
    if (o.type !== "connected") return;
    try {
      await o.cleanup();
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`MCP client cleanup failed for ${o.name}: ${r}`, { level: "error" });
    }
  }));
}
var Ig = [import_chunk_hy0sycbj.Bre, import_chunk_hy0sycbj.DYe, "2025-06-18", "2025-03-26", "2024-11-05", "2024-10-07"];
function Lg(e) {
  if (e === void 0) return;
  let o = Ig.find((r) => r === e);
  return o === void 0 ? (0, import_chunk_78g0060s.S)("other") : (0, import_chunk_78g0060s.f)(o);
}
