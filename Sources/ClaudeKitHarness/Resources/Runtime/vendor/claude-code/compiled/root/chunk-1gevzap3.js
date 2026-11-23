const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_1gevzap3_exports = {};
__export(chunk_1gevzap3_exports, {
  JKr: () => JKr,
  hYs: () => hYs,
  rer: () => rer
});
module.exports = __toCommonJS(chunk_1gevzap3_exports);
var import_chunk_tzhcnzkd = require("/$bunfs/root/chunk-tzhcnzkd.js");
var import_chunk_rg2p81t1 = require("/$bunfs/root/chunk-rg2p81t1.js");
var import_ws = __toESM(require("ws"));
function E(e) {
  return { on: (t, i) => {
    e.on(t, i);
  }, removeAllListeners: () => e.removeAllListeners(), send: (t) => e.send(t), close: (t, i) => {
    if (e.readyState === import_ws.default.OPEN) e.close(t, i);
    else e.terminate();
  }, get readyState() {
    return e.readyState;
  } };
}
var A = 3e4, C = 9e4, M = { persisted: "the last-picked", only: "the only connected", local: "this computer's" }, N = /* @__PURE__ */ new Set(["external_message", "external_message_result", "external_config"]), B = /* @__PURE__ */ new Set(["paired", "waiting", "extensions_list", "peer_connected", "peer_disconnected", "ping", "pong", "tool_result", "routing_ack", "external_message_result", "permission_request"]), x = 3e4;
function _(e, t) {
  if (typeof e !== "string") return;
  let i = e.replace(/[\r\n\t\u0000-\u001f]/g, " ").trim();
  return i.length > t ? `${i.slice(0, t)}\u2026` : i;
}
function q(e) {
  if (typeof e.deviceId !== "string" || !import_chunk_tzhcnzkd.OAn.test(e.deviceId)) return;
  return { deviceId: e.deviceId, name: _(e.name, 50), osPlatform: _(e.osPlatform, 30), connectedAt: typeof e.connectedAt === "number" ? e.connectedAt : 0 };
}
function O(e) {
  if (!Array.isArray(e)) return;
  let t = e, i = null;
  for (let n of t) {
    let s = typeof n === "object" && n !== null && "closed_ms_ago" in n ? n.closed_ms_ago : void 0;
    if (typeof s !== "number" || !Number.isFinite(s) || s < 0) return;
    i = i === null ? s : Math.min(i, s);
  }
  return i;
}
var b = (e) => new import_chunk_tzhcnzkd.RMe("Chrome extension disconnected mid-call", { routingAckReceived: e.routingAckReceived ?? false });
class hYs {
  ws = null;
  connected = false;
  authenticated = false;
  connecting = false;
  connectEpoch = 0;
  socketUserId;
  hostHasAnswered = false;
  mismatchWaivedLogged = false;
  reconnectTimer = null;
  handshakeTimer = null;
  reconnectAttempts = 0;
  pendingCalls = /* @__PURE__ */ new Map();
  timedOutCalls = /* @__PURE__ */ new Map();
  notificationHandler = null;
  context;
  permissionMode = "ask";
  allowedDomains;
  connectionStartTime = null;
  connectionEstablishedTime = null;
  selectedDeviceId;
  discoveryComplete = false;
  multiBrowserPendingSelection = false;
  discoveryPromise = null;
  pendingDiscovery = null;
  listExtensionsPromise = null;
  previousSelectedDeviceId;
  lastSelectedDeviceId;
  previousSelectedLeftAt;
  lastBrowserLeftAt;
  peerConnectedWaiters = [];
  pendingPairingRequestId;
  pairingInProgress = false;
  persistedDeviceId;
  pendingSwitchResolve = null;
  pairingPromptAbort = null;
  pairingPromptTimeout = null;
  keepAliveInterval = null;
  lastPongReceived = 0;
  externalRelays = new import_chunk_tzhcnzkd.I8r();
  constructor(e) {
    if (this.context = e, e.initialPermissionMode) this.permissionMode = e.initialPermissionMode;
  }
  identity(e = this.socketUserId) {
    let t = this.context.getCurrentUserId;
    if (!t || this.context.bridgeConfig?.devUserId) return "ok";
    let i;
    try {
      i = t();
    } catch {
      i = null;
    }
    if (i === void 0) {
      if (!this.hostHasAnswered) return "ok";
      i = null;
    }
    if (this.hostHasAnswered = true, i === null) return "signed_out";
    if (e === void 0 || i.toLowerCase() === e.toLowerCase()) return "ok";
    let n = true;
    try {
      n = this.context.isAccountMismatchEnforced?.() !== false;
    } catch {
    }
    if (n) return "other";
    if (!this.mismatchWaivedLogged) this.mismatchWaivedLogged = true, this.context.logger.warn(`[${this.context.serverName}] Using a relay connection made for a different account from the one signed in: the host has switched off the check that refuses it`);
    return "ok";
  }
  canWrite() {
    return this.ws?.readyState === import_ws.default.OPEN && this.identity() === "ok";
  }
  closedSince(e) {
    return this.context.getCurrentUserId !== void 0 && e !== this.connectEpoch;
  }
  sendFrame(e) {
    if (!this.ws || this.identity() !== "ok") return false;
    return this.ws.send(e), true;
  }
  closeForOtherAccount(e) {
    let { logger: t, serverName: i, trackEvent: n } = this.context;
    t.info(`[${i}] Closing the bridge socket: it connected as a different account from the one signed in`), n?.("chrome_bridge_identity_mismatch", { phase: e }), this.cleanup();
  }
  refusedForIdentity(e) {
    let t = this.identity(e);
    if (t === "ok") return false;
    let { logger: i, serverName: n, trackEvent: s } = this.context;
    if (i.info(`[${n}] Not connecting: ${t === "other" ? "this connection was for a different account from the one signed in" : "nobody is signed in"}`), this.connecting = false, this.handshakeTimer) clearTimeout(this.handshakeTimer), this.handshakeTimer = null;
    if (t === "other") s?.("chrome_bridge_identity_mismatch", { phase: "connect" }), this.scheduleReconnect();
    return true;
  }
  reconcileIdentity() {
    if (this.identity() === "other") this.closeForOtherAccount("use");
  }
  async ensureConnected() {
    let { logger: e, serverName: t } = this.context;
    e.info(`[${t}] ensureConnected called, connected=${this.connected}, authenticated=${this.authenticated}, wsState=${this.ws?.readyState}`);
    let i = this.identity();
    if (i === "signed_out") return e.info(`[${t}] Not connecting: nobody is signed in`), false;
    if (i === "other") this.closeForOtherAccount("use");
    if (this.connected && this.authenticated && this.ws?.readyState === import_ws.default.OPEN) return e.info(`[${t}] Already connected and authenticated`), true;
    if (!this.connecting && !this.reconnectTimer) e.info(`[${t}] Not connecting, starting connection...`), await this.connect();
    else e.info(`[${t}] Connect in progress or reconnect scheduled, waiting...`);
    return new Promise((n) => {
      let s = null, o = setTimeout(() => {
        if (s) clearTimeout(s);
        e.info(`[${t}] Connection timeout, connected=${this.connected}, authenticated=${this.authenticated}`), n(false);
      }, 1e4), r = () => {
        if (this.connected && this.authenticated) e.info(`[${t}] Connection successful`), clearTimeout(o), n(true);
        else if (!this.connecting && !this.reconnectTimer) e.info(`[${t}] No longer connecting, giving up`), clearTimeout(o), n(false);
        else s = setTimeout(r, 200);
      };
      r();
    });
  }
  async callTool(e, t, i, n) {
    let { logger: s, serverName: o, trackEvent: r } = this.context;
    if (!this.canWrite()) throw new import_chunk_tzhcnzkd.CP(`[${o}] Bridge not connected`);
    let d = this.connectEpoch;
    if (this.assertTargetAllowed(e, i, n), n?.requireDeviceId !== void 0) {
      if (await this.reselectIfBack(n.requireDeviceId), !this.canWrite() || this.closedSince(d)) throw new import_chunk_tzhcnzkd.CP(`[${o}] Bridge not connected`);
    }
    if (this.assertRequiredDevice(e, n), n?.targetDeviceId === void 0 && !this.selectedDeviceId && (!this.discoveryComplete || this.multiBrowserPendingSelection)) {
      if (this.discoveryPromise ??= this.discoverAndSelectExtension().finally(() => {
        this.discoveryPromise = null;
      }), await this.discoveryPromise, this.identity() !== "ok" || this.closedSince(d) || !this.discoveryComplete && !this.selectedDeviceId) throw new import_chunk_tzhcnzkd.CP(`[${o}] Bridge not connected`);
    }
    if (n?.targetDeviceId === void 0 && this.discoveryComplete && !this.selectedDeviceId && !this.pairingInProgress && !this.multiBrowserPendingSelection) throw new import_chunk_tzhcnzkd.$tt(`[${o}] No Chrome extension connected after discovery`);
    let a = i?.sessionScope?.sessionId, c = i?.sessionScope?.userMessageUuid, l = this.context.browserActivityObserver?.onBeforeToolCall;
    if (l) {
      let p = this.selectedDeviceId;
      try {
        await l({ sessionId: a, toolName: e, args: t });
      } catch {
        s.debug(`[${o}] browser activity observer threw`);
      }
      if (!this.canWrite() || this.closedSince(d)) throw new import_chunk_tzhcnzkd.CP(`[${o}] Bridge disconnected before tool call was sent`);
      if (p !== void 0 && this.selectedDeviceId === void 0 && (n?.targetDeviceId ?? p) === p) throw new import_chunk_tzhcnzkd.RMe("Chrome extension disconnected mid-call");
    }
    this.assertRequiredDevice(e, n);
    let u = n?.targetDeviceId ?? this.selectedDeviceId, m = { ...i, permissionMode: i?.permissionMode ?? this.permissionMode, allowedDomains: i?.allowedDomains ?? this.allowedDomains }, g = this.context.localRoad?.(u) ?? "off";
    if (typeof g !== "string") {
      let p = await g.callTool(e, t, m, { timeoutMs: n?.timeoutMs });
      return this.observeToolResult({ sessionId: a, toolName: e, args: t }, p), p;
    }
    let f = crypto.randomUUID(), D = Date.now(), v = n?.timeoutMs ?? this.context.getToolCallTimeoutMs?.(e) ?? import_chunk_rg2p81t1.Ggt, w = { type: "tool_call", tool_use_id: f, client_type: this.context.clientTypeId, tool: e, args: t, ...(0, import_chunk_tzhcnzkd.e9o)(true) };
    if (u) w.target_device_id = u;
    Object.assign(w, (0, import_chunk_tzhcnzkd.Z5o)(m));
    let I = JSON.stringify(w);
    return r?.("chrome_bridge_tool_call_started", { tool_name: `browser:${e}`, tool_use_id: f, session_id: a, user_message_uuid: c, timeout_ms: v, transport: "bridge", ...g !== "off" && { local_road: g }, request_bytes: Buffer.byteLength(I, "utf-8") }), new Promise((p, P) => {
      let k = this.createTimeoutTimer(f, v);
      if (this.pendingCalls.set(f, { resolve: p, reject: P, timer: k, onPermissionRequest: i?.onPermissionRequest, startTime: D, toolName: e, timeoutMs: v, sessionId: a, userMessageUuid: c, args: t, targetDeviceId: n?.targetDeviceId }), s.debug(`[${o}] Sending tool_call: ${(0, import_chunk_tzhcnzkd.XJ)(e)} (${f.slice(0, 8)})`), !this.sendFrame(I)) clearTimeout(k), this.pendingCalls.delete(f), P(new import_chunk_tzhcnzkd.CP(`[${o}] Bridge not connected`));
    });
  }
  sendExternalMessage(e, t, i) {
    let { serverName: n } = this.context, s = i?.requireDeviceId;
    return (0, import_chunk_tzhcnzkd.J5o)({ assertOpen: () => {
      if (!this.ws || this.ws.readyState !== import_ws.default.OPEN) throw new import_chunk_tzhcnzkd.CP(`[${n}] Bridge not connected`);
    }, refuse: () => s !== void 0 && this.selectedDeviceId !== s ? { error: "no_target", reason: "its browser is no longer selected", detail: "not_sent" } : !this.selectedDeviceId ? { error: "no_target", reason: "no extension selected", detail: "no_selection" } : void 0, pushConfig: () => {
      this.pushExternalConfig();
    }, prepare: ({ requestId: r, extensionIds: d, payload: a, timeoutMs: c }) => JSON.stringify({ type: "external_message", requestId: r, extensionIds: d, payload: a, timeoutMs: c, target_device_id: this.selectedDeviceId }), send: (r) => {
      if (!this.sendFrame(r)) throw new import_chunk_tzhcnzkd.lor("the bridge socket belongs to a different account, or nobody is signed in");
    } }, this.externalRelays, this.context, e, t, i);
  }
  pushExternalConfig(e) {
    if (this.selectedDeviceId === void 0) return false;
    return this.pushExternalConfigToPeer(this.selectedDeviceId, e);
  }
  pushExternalConfigToPeer(e, t) {
    if (this.ws?.readyState !== import_ws.default.OPEN) return false;
    let i = (0, import_chunk_tzhcnzkd.O8r)(this.context, t);
    if (!i) return false;
    return this.sendFrame(JSON.stringify({ type: "external_config", extensionIds: i.extensionIds, ...i.hooks !== void 0 && { hooks: i.hooks }, target_device_id: e }));
  }
  async pushExternalConfigToAllPeers(e) {
    if (this.ws?.readyState !== import_ws.default.OPEN) return 0;
    if (!(0, import_chunk_tzhcnzkd.O8r)(this.context, e)) return 0;
    let t = await this.queryBridgeExtensions(), i = 0;
    for (let n of t) if (this.pushExternalConfigToPeer(n.deviceId, e)) i++;
    return i;
  }
  isConnected() {
    return this.socketUp() && this.identity() === "ok";
  }
  socketUp() {
    return this.connected && this.authenticated && this.ws?.readyState === import_ws.default.OPEN;
  }
  disconnect() {
    this.cleanup();
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
  }
  async discoverAndSelectExtension() {
    let { logger: e, serverName: t } = this.context;
    this.persistedDeviceId = this.context.getPersistedDeviceId?.();
    let i = this.connectEpoch, n = () => this.identity() !== "ok" || this.closedSince(i), s = await this.queryBridgeExtensions();
    if (s.length === 0 && await this.waitForFirstPeer()) s = await this.queryBridgeExtensions();
    if (n()) return;
    if (this.context.getRequirePairedDevice?.()) {
      if (!this.persistedDeviceId) {
        e.info(`[${t}] requirePairedDevice set but no persistedDeviceId; refusing to auto-select`), this.discoveryComplete = true;
        return;
      }
      let a = this.persistedDeviceId, c = s.find((l) => l.deviceId === a);
      if (!c) {
        if (e.info(`[${t}] requirePairedDevice: persisted ${a.slice(0, 8)} not connected (${s.length} other(s) visible); waiting`), await this.waitForPeerConnected(import_chunk_rg2p81t1.m7r)) s = await this.queryBridgeExtensions(), c = s.find((l) => l.deviceId === a);
        if (n()) return;
      }
      if (this.discoveryComplete = true, c) this.selectExtension(c.deviceId);
      else e.info(`[${t}] requirePairedDevice: persisted device never arrived; refusing to auto-select`);
      return;
    }
    let o = await this.awaitPreviousBrowser();
    if (n()) return;
    if (o) return this.selectedDeviceId ? void 0 : this.discoverAndSelectExtension();
    let r = s.length > 1 && !s.some((a) => a.deviceId === this.persistedDeviceId) ? await (0, import_chunk_tzhcnzkd.zXt)(this.context.getLocalDeviceIds) : void 0;
    if (n()) return;
    if (this.discoveryComplete = true, this.selectedDeviceId) return;
    let d = (0, import_chunk_tzhcnzkd.MAn)(s, this.persistedDeviceId, r);
    if (d.kind === "none") {
      e.info(`[${t}] No extensions found after waiting`), this.multiBrowserPendingSelection = false;
      return;
    }
    if (d.kind === "select") {
      let { extension: a, reason: c } = d;
      if (e.info(`[${t}] Auto-connecting to ${M[c]} extension: ${a.name || a.deviceId.slice(0, 8)}`), c === "only" && !this.isLocalExtension(a)) this.context.onRemoteExtensionWarning?.(a);
      this.selectExtension(a.deviceId), this.reportBrowserSelected(c, s, r);
      return;
    }
    if (!this.multiBrowserPendingSelection) this.reportBrowserSelected("ask", s, r);
    if (this.context.askUserToolName) {
      this.multiBrowserPendingSelection = true;
      return;
    }
    if (!this.broadcastPairingRequest()) return;
    this.pairingInProgress = true, this.firePairingPrompt();
  }
  reportBrowserSelected(e, t, i) {
    this.context.trackEvent?.("chrome_bridge_browser_selected", { outcome: e, connected_count: t.length, local_count: i === void 0 ? null : t.filter((n) => i.has(n.deviceId)).length });
  }
  queryBridgeExtensions() {
    if (this.listExtensionsPromise) return this.listExtensionsPromise;
    let e = new Promise((t) => {
      let i = setTimeout(() => {
        this.pendingDiscovery = null, t([]);
      }, import_chunk_rg2p81t1.l8o);
      if (this.pendingDiscovery = { resolve: t, timeout: i }, this.lastBrowserLeftAt = void 0, !this.sendFrame(JSON.stringify({ type: "list_extensions" })) && this.identity() !== "ok") clearTimeout(i), this.pendingDiscovery = null, t([]);
    }).then((t) => {
      let i = /* @__PURE__ */ new Map();
      for (let n of t) {
        let s = i.get(n.deviceId);
        if (!s || n.connectedAt > s.connectedAt) i.set(n.deviceId, n);
      }
      return [...i.values()].map(q).filter((n) => n !== void 0);
    });
    return this.listExtensionsPromise = e, e.finally(() => {
      if (this.listExtensionsPromise === e) this.listExtensionsPromise = null;
    }), e;
  }
  async reselectIfBack(e) {
    let t = () => this.selectedDeviceId === void 0 && this.previousSelectedDeviceId === e && !this.pendingSwitchResolve;
    if (!t()) return;
    let i = await this.queryBridgeExtensions();
    if (t() && i.some((n) => n.deviceId === e)) this.selectExtension(e);
  }
  assertTargetAllowed(e, t, i) {
    let n = i?.targetDeviceId;
    if (n === void 0) return;
    let { serverName: s } = this.context;
    if (t?.onPermissionRequest) throw Error(`[${s}] ${(0, import_chunk_tzhcnzkd.XJ)(e)} not sent: a targeted call cannot raise a permission prompt`);
    if (this.context.getRequirePairedDevice?.() && n !== this.context.getPersistedDeviceId?.()) throw new import_chunk_tzhcnzkd.Hgt(`[${s}] ${(0, import_chunk_tzhcnzkd.XJ)(e)} not sent: only the paired browser may be used`);
  }
  assertRequiredDevice(e, t) {
    let i = t?.requireDeviceId;
    if (i !== void 0 && this.selectedDeviceId !== i) throw new import_chunk_tzhcnzkd.Hgt(`[${this.context.serverName}] ${(0, import_chunk_tzhcnzkd.XJ)(e)} not sent: its browser is no longer selected`);
  }
  getSelectedDeviceId() {
    if (this.identity() !== "ok") return;
    return this.selectedDeviceId ?? this.context.getPersistedDeviceId?.();
  }
  hasActiveSelection() {
    return this.selectedDeviceId !== void 0 && this.identity() === "ok";
  }
  async awaitPreviousBrowser() {
    let { logger: e, serverName: t } = this.context, i = Math.min(this.browserReturnWaitMs() ?? 1 / 0, (this.previousSelectedLeftAt ?? -1 / 0) + import_chunk_rg2p81t1.JUa - Date.now());
    if (!this.previousSelectedDeviceId || i <= 0 || this.pendingSwitchResolve || this.context.getRequirePairedDevice?.()) return false;
    if (e.info(`[${t}] Waiting up to ${i}ms for the previously selected extension to return`), await this.waitForPeerConnected(i), !this.connected) throw new import_chunk_tzhcnzkd.CP(`[${t}] Bridge disconnected while waiting for the selected browser`);
    return true;
  }
  async peekTargetBrowser() {
    if (this.identity() !== "ok") return;
    let e = this.socketUserId, t = this.connectEpoch;
    if (this.selectedDeviceId !== void 0) return this.selectedDeviceId;
    let i = this.context.getPersistedDeviceId?.(), n = await this.queryBridgeExtensions();
    if (n.length === 0 && await this.waitForFirstPeer()) n = await this.queryBridgeExtensions();
    if (await this.awaitPreviousBrowser()) return this.peekTargetBrowser();
    let s = n.length > 1 && !n.some((d) => d.deviceId === i) ? await (0, import_chunk_tzhcnzkd.zXt)(this.context.getLocalDeviceIds) : void 0;
    if (this.identity(e) !== "ok" || this.closedSince(t)) return;
    if (this.selectedDeviceId !== void 0) return this.selectedDeviceId;
    let o = (0, import_chunk_tzhcnzkd.MAn)(n, i, s), r = this.lastSelectedDeviceId || i;
    return o.kind === "select" && (o.reason === "persisted" || !this.context.getRequirePairedDevice?.()) && (!r || o.extension.deviceId === r) ? o.extension.deviceId : void 0;
  }
  clearSelection() {
    this.selectedDeviceId = void 0, this.lastSelectedDeviceId = void 0, this.previousSelectedDeviceId = void 0, this.previousSelectedLeftAt = void 0, this.discoveryComplete = false, this.multiBrowserPendingSelection = false, this.pairingInProgress = false, this.abortPairingPrompt();
  }
  selectExtension(e) {
    let { logger: t, serverName: i } = this.context;
    this.selectedDeviceId = e, this.lastSelectedDeviceId = e, this.previousSelectedDeviceId = void 0, this.previousSelectedLeftAt = void 0, this.multiBrowserPendingSelection = false, t.info(`[${i}] Selected Chrome extension: ${e.slice(0, 8)}...`), this.pushExternalConfig();
  }
  async clearSelectionIfGone(e) {
    let { logger: t, serverName: i } = this.context, n = await this.queryBridgeExtensions();
    if (this.selectedDeviceId !== e) return;
    if (n.some((s) => s.deviceId === e)) return;
    t.info(`[${i}] Selected extension ${e.slice(0, 8)} absent from bridge roster after error; clearing selection`), this.selectedDeviceId = void 0, this.discoveryComplete = false;
  }
  async rejectTargetedCallsIfGone() {
    let e = (i) => i.targetDeviceId !== void 0;
    if (![...this.pendingCalls.values()].some(e)) return;
    let t = await this.queryBridgeExtensions();
    this.rejectPendingCalls(b, (i) => e(i) && !t.some((n) => n.deviceId === i.targetDeviceId));
  }
  async listConnectedExtensions() {
    if (!await this.ensureConnected()) return [];
    let e = this.socketUserId, t = this.connectEpoch, i = await this.queryBridgeExtensions();
    if (this.identity() !== "ok") return [];
    let n = i.length > 1 ? await (0, import_chunk_tzhcnzkd.zXt)(this.context.getLocalDeviceIds) : void 0;
    if (this.identity(e) !== "ok" || this.closedSince(t)) return [];
    if (i.length > 0 && !this.selectedDeviceId && !this.pairingInProgress && !this.multiBrowserPendingSelection && !this.context.getRequirePairedDevice?.()) this.discoveryComplete = false;
    let s = (0, import_chunk_tzhcnzkd.XFa)(i, n);
    return i.map((o) => ({ ...o, isLocal: this.isLocalExtension(o), ...s.has(o.deviceId) && { onThisComputer: true } }));
  }
  connectedUserId() {
    return this.context.bridgeConfig?.devUserId ? void 0 : this.socketUserId;
  }
  async connectedDeviceIds() {
    if (this.ws?.readyState !== import_ws.default.OPEN) return [];
    let e = await this.queryBridgeExtensions();
    if (this.identity() !== "ok") return [];
    let t = e.map((i) => i.deviceId);
    return this.context.getRequirePairedDevice?.() ? t.filter((i) => i === this.context.getPersistedDeviceId?.()) : t;
  }
  selectExtensionById(e, t) {
    if (this.discoveryComplete = true, this.pairingInProgress = false, this.pendingPairingRequestId = void 0, this.selectExtension(e), this.context.onExtensionPaired?.(e, t), this.pendingSwitchResolve) this.pendingSwitchResolve({ deviceId: e, name: t });
    this.abortPairingPrompt();
  }
  firePairingPrompt() {
    if (this.abortPairingPrompt(), !this.context.onPairingPrompted) return;
    let e = new AbortController();
    this.pairingPromptAbort = e, this.pairingPromptTimeout = setTimeout(() => this.abortPairingPrompt(), 12e4), this.context.onPairingPrompted(e.signal);
  }
  abortPairingPrompt() {
    if (this.pairingPromptTimeout) clearTimeout(this.pairingPromptTimeout), this.pairingPromptTimeout = null;
    if (this.pairingPromptAbort) this.pairingPromptAbort.abort(), this.pairingPromptAbort = null;
  }
  isLocalExtension(e) {
    if (!e.osPlatform) return false;
    return e.osPlatform === (0, import_chunk_tzhcnzkd.X5o)(this.context.getHostPlatform?.() ?? "darwin");
  }
  browserReturnWaitMs() {
    let e = this.context.getBrowserReturnWindowMs?.(), t = this.lastBrowserLeftAt;
    if (typeof e !== "number" || !(e >= 0 && e <= import_chunk_rg2p81t1.XUa) || t === void 0) return;
    return t === null ? 0 : Math.max(0, t + e - Date.now());
  }
  async waitForFirstPeer() {
    let { logger: e, serverName: t, trackEvent: i } = this.context, n = this.lastBrowserLeftAt, s = Date.now(), o = this.browserReturnWaitMs() ?? import_chunk_rg2p81t1.m7r;
    e.info(`[${t}] No extensions connected, waiting up to ${o}ms for peer_connected`);
    let r = await this.waitForPeerConnected(o);
    return i?.("chrome_bridge_peer_wait", { wait_ms: Date.now() - s, timeout_ms: o, landed: r, ...n !== void 0 && { ageMs: n === null ? -1 : s - n } }), r;
  }
  waitForPeerConnected(e) {
    return new Promise((t) => {
      let i = setTimeout(() => {
        this.peerConnectedWaiters = this.peerConnectedWaiters.filter((s) => s !== n), t(false);
      }, e), n = (s) => {
        clearTimeout(i), t(s);
      };
      this.peerConnectedWaiters.push(n);
    });
  }
  broadcastPairingRequest() {
    if (this.identity() !== "ok") return false;
    let e = crypto.randomUUID();
    return this.pendingPairingRequestId = e, this.sendFrame(JSON.stringify({ type: "pairing_request", request_id: e, client_type: this.context.clientTypeId })), true;
  }
  async switchBrowser() {
    let e = await this.queryBridgeExtensions(), t = this.selectedDeviceId ?? this.previousSelectedDeviceId;
    if (e.length === 0 || e.length === 1 && (!t || e[0].deviceId === t)) return "no_other_browsers";
    this.previousSelectedDeviceId = this.selectedDeviceId, this.selectedDeviceId = void 0, this.discoveryComplete = false, this.pairingInProgress = false;
    let i = crypto.randomUUID();
    if (this.pendingPairingRequestId = i, !this.canWrite()) return null;
    if (this.sendFrame(JSON.stringify({ type: "pairing_request", request_id: i, client_type: this.context.clientTypeId })), this.firePairingPrompt(), this.pendingSwitchResolve) this.pendingSwitchResolve(null);
    return new Promise((n) => {
      let s = setTimeout(() => {
        if (this.pendingPairingRequestId === i) this.pendingPairingRequestId = void 0;
        this.pendingSwitchResolve = null, this.abortPairingPrompt(), n(null);
      }, 12e4);
      this.pendingSwitchResolve = (o) => {
        clearTimeout(s), this.pendingSwitchResolve = null, n(o);
      };
    });
  }
  async connect() {
    let { logger: e, serverName: t, bridgeConfig: i, trackEvent: n } = this.context;
    if (!i) {
      e.error(`[${t}] No bridge config provided`);
      return;
    }
    if (this.connecting) return;
    this.connecting = true;
    let s = this.connectEpoch, o = () => s !== this.connectEpoch;
    this.authenticated = false, this.connectionStartTime = Date.now(), this.closeSocket(), this.handshakeTimer = setTimeout(() => {
      if (this.handshakeTimer = null, !this.connecting) return;
      let c = this.ws?.readyState;
      if (e.warn(`[${t}] Bridge connect stuck after ${x}ms (ws_state=${c})`), n?.("chrome_bridge_handshake_timeout", { duration_ms: Date.now() - (this.connectionStartTime ?? 0), ws_state: c }), c === void 0) return;
      this.connecting = false, this.closeSocket(), this.scheduleReconnect();
    }, x);
    let r, d;
    if (i.devUserId) r = i.devUserId, e.debug(`[${t}] Using dev user ID for bridge connection`);
    else {
      e.debug(`[${t}] Fetching user ID for bridge connection`);
      let c, l;
      if (i.getUserIdResult) {
        let u = await i.getUserIdResult();
        if (o()) return;
        if (u.ok) l = u.userId;
        else c = u.error;
      } else if (l = await i.getUserId(), o()) return;
      if (!l) {
        let u = Date.now() - this.connectionStartTime;
        e.error(`[${t}] No user ID available after ${u}ms`), n?.("chrome_bridge_connection_failed", { duration_ms: u, error_type: "no_user_id", error_detail: c, reconnect_attempt: this.reconnectAttempts }), this.connecting = false, this.scheduleReconnect();
        return;
      }
      if (r = l, e.debug(`[${t}] Fetching OAuth token for bridge connection`), d = await i.getOAuthToken(), o()) return;
      if (!d) {
        let u = Date.now() - this.connectionStartTime;
        e.error(`[${t}] No OAuth token available after ${u}ms`), n?.("chrome_bridge_connection_failed", { duration_ms: u, error_type: "no_oauth_token", reconnect_attempt: this.reconnectAttempts }), this.connecting = false, this.scheduleReconnect();
        return;
      }
    }
    if (this.refusedForIdentity(r)) return;
    let a = `${i.url}/chrome/${r}`;
    e.info(`[${t}] Connecting to bridge: ${a}`), n?.("chrome_bridge_connection_started", { bridge_url: a });
    try {
      if (i.createWebSocket) {
        let c = await i.createWebSocket(a);
        if (o()) {
          c.on("error", () => {
          }), c.close();
          return;
        }
        this.ws = c;
      } else {
        let c = await i.getWsOptions?.() ?? i.wsOptions;
        if (o()) return;
        this.ws = E(new import_ws.default(a, c ? { ...c, tls: c } : void 0));
      }
    } catch (c) {
      if (o()) return;
      let l = Date.now() - this.connectionStartTime;
      e.error(`[${t}] Failed to create WebSocket after ${l}ms:`, c), n?.("chrome_bridge_connection_failed", { duration_ms: l, error_type: "websocket_error", error_code: c?.code, reconnect_attempt: this.reconnectAttempts }), this.connecting = false, this.scheduleReconnect();
      return;
    }
    this.socketUserId = r, this.ws.on("open", () => {
      if (this.refusedForIdentity(r)) {
        this.closeSocket();
        return;
      }
      e.info(`[${t}] WebSocket connected, sending connect message`);
      let c = { type: "connect", client_type: this.context.clientTypeId };
      if (i.devUserId) c.dev_user_id = i.devUserId;
      else c.oauth_token = d;
      this.ws?.send(JSON.stringify(c));
    }), this.ws.on("message", (c) => {
      try {
        let l = c.toString(), u = JSON.parse(l);
        if (N.has(u.type)) e.debug(`[${t}] Bridge received: ${String(u.type)} (ok=${String(u.ok)})`);
        else if (e.isDebugEnabled?.() ?? true) e.debug(`[${t}] Bridge received: ${JSON.stringify(u)}`);
        this.handleMessage(u, Buffer.byteLength(l, "utf-8"));
      } catch (l) {
        e.error(`[${t}] Failed to parse bridge message:`, l);
      }
    }), this.ws.on("close", (c) => {
      let l = this.connectionEstablishedTime ? Date.now() - this.connectionEstablishedTime : 0;
      if (e.info(`[${t}] Bridge connection closed (code: ${c}, duration: ${l}ms)`), n?.("chrome_bridge_disconnected", { close_code: c, duration_since_connect_ms: l, reconnect_attempt: this.reconnectAttempts + 1 }), this.connected = false, this.authenticated = false, this.connecting = false, this.socketUserId = void 0, this.connectionEstablishedTime = null, this.selectedDeviceId) this.previousSelectedLeftAt = Date.now();
      this.losePendingCalls("Bridge connection closed mid-call"), this.scheduleReconnect();
    }), this.ws.on("error", (c) => {
      let l = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
      e.error(`[${t}] Bridge WebSocket error after ${l}ms: ${c.message}`), n?.("chrome_bridge_connection_failed", { duration_ms: l, error_type: "websocket_error", error_code: c.code, reconnect_attempt: this.reconnectAttempts }), this.connected = false, this.authenticated = false, this.connecting = false, this.losePendingCalls(`Bridge connection error: ${c.message}`);
    });
  }
  handleMessage(e, t) {
    let { logger: i, serverName: n, trackEvent: s } = this.context, o = this.identity();
    if (o === "other") {
      this.closeForOtherAccount("use");
      return;
    }
    if (o === "signed_out" && !B.has(String(e.type))) return;
    switch (e.type) {
      case "paired": {
        let r = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
        if (i.info(`[${n}] Paired with Chrome extension (duration: ${r}ms)`), this.connected = true, this.authenticated = true, this.connecting = false, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), this.startKeepAlive(), s?.("chrome_bridge_connection_succeeded", { duration_ms: r, status: "paired" }), this.pushExternalConfigToAllPeers(), this.previousSelectedDeviceId && !this.context.getRequirePairedDevice?.()) this.reselectIfBack(this.previousSelectedDeviceId);
        this.context.onPeerRosterChanged?.();
        break;
      }
      case "waiting": {
        let r = this.connectionStartTime ? Date.now() - this.connectionStartTime : 0;
        i.info(`[${n}] Waiting for Chrome extension to connect (duration: ${r}ms)`), this.connected = true, this.authenticated = true, this.connecting = false, this.reconnectAttempts = 0, this.connectionEstablishedTime = Date.now(), this.startKeepAlive(), s?.("chrome_bridge_connection_succeeded", { duration_ms: r, status: "waiting" });
        break;
      }
      case "peer_connected":
        if (i.info(`[${n}] Chrome extension connected to bridge`), s?.("chrome_bridge_peer_connected", null), !this.selectedDeviceId) this.discoveryComplete = false;
        if (this.previousSelectedDeviceId && e.deviceId === this.previousSelectedDeviceId && !this.pendingSwitchResolve) i.info(`[${n}] Previously selected extension reconnected, auto-reselecting`), this.selectExtension(this.previousSelectedDeviceId), this.previousSelectedDeviceId = void 0;
        if (this.peerConnectedWaiters.length > 0) {
          let r = this.peerConnectedWaiters;
          this.peerConnectedWaiters = [];
          for (let d of r) d(true);
        }
        if (typeof e.deviceId === "string" && import_chunk_tzhcnzkd.OAn.test(e.deviceId)) this.pushExternalConfigToPeer(e.deviceId);
        else this.pushExternalConfig();
        this.context.onPeerRosterChanged?.();
        break;
      case "peer_disconnected": {
        this.lastBrowserLeftAt = void 0;
        let r = e.deviceId;
        if (i.info(`[${n}] Chrome extension disconnected from bridge (deviceId=${r ?? "none"}, selected=${this.selectedDeviceId ?? "none"})`), s?.("chrome_bridge_peer_disconnected", { disconnected_device_id: r ?? null, selected_device_id: this.selectedDeviceId ?? null, had_match: r !== null && r !== void 0 && r === this.selectedDeviceId, pending_calls: this.pendingCalls.size }), this.context.onPeerDisconnected?.({ deviceId: r, wasSelected: r !== null && r !== void 0 && r === this.selectedDeviceId }), e.deviceId && e.deviceId === this.selectedDeviceId) i.info(`[${n}] Selected extension disconnected, clearing selection`), this.previousSelectedDeviceId = this.selectedDeviceId, this.previousSelectedLeftAt = Date.now(), this.selectedDeviceId = void 0, this.discoveryComplete = false, this.rejectPendingCalls(b, (d) => d.targetDeviceId === void 0);
        else if (!this.selectedDeviceId && this.multiBrowserPendingSelection) this.discoveryComplete = false, this.multiBrowserPendingSelection = false;
        this.rejectPendingCalls(b, (d) => d.targetDeviceId !== void 0 && d.targetDeviceId === r), this.context.onPeerRosterChanged?.();
        break;
      }
      case "routing_ack": {
        s?.("chrome_bridge_routing_ack", { tool_use_id: e.tool_use_id ?? null, routed_to: e.routed_to ?? null, target_connected_at: e.target_connected_at ?? null, target_pong_age_ms: e.target_pong_age_ms ?? null, extension_sockets: e.extension_sockets ?? null, mcp_sockets: e.mcp_sockets ?? null });
        let r = this.pendingCalls.get(e.tool_use_id ?? "");
        if (r) r.routingAckReceived = true, r.routingAckPongAgeMs = e.target_pong_age_ms ?? null;
        break;
      }
      case "extensions_list":
        if (this.pendingDiscovery) {
          let r = O(e.recently_closed);
          this.lastBrowserLeftAt = typeof r === "number" ? Date.now() - r : r, clearTimeout(this.pendingDiscovery.timeout), this.pendingDiscovery.resolve(e.extensions ?? []), this.pendingDiscovery = null;
        }
        break;
      case "pairing_response": {
        if (this.pendingPairingRequestId === void 0 || e.request_id !== this.pendingPairingRequestId) break;
        if (e.dismissed === true) {
          i.info(`[${n}] Pairing prompt dismissed in extension`), this.abortPairingPrompt();
          break;
        }
        let r = typeof e.device_id === "string" && import_chunk_tzhcnzkd.OAn.test(e.device_id) ? e.device_id : void 0, d = _(e.name, 50);
        if (r && d) {
          if (this.pendingPairingRequestId = void 0, this.pairingInProgress = false, this.selectExtension(r), this.context.onExtensionPaired?.(r, d), this.abortPairingPrompt(), i.info(`[${n}] Paired with "${d}" (${r.slice(0, 8)})`), this.pendingSwitchResolve) this.pendingSwitchResolve({ deviceId: r, name: d }), this.pendingSwitchResolve = null;
        }
        break;
      }
      case "ping":
        this.ws?.send(JSON.stringify({ type: "pong" }));
        break;
      case "pong":
        this.lastPongReceived = Date.now();
        break;
      case "tool_result":
        this.handleToolResult(e, t);
        break;
      case "external_message_result": {
        let r = typeof e.requestId === "string" ? e.requestId : void 0;
        if (!r || !this.externalRelays.settle(r, e)) i.debug(`[${n}] external_message_result for unknown request: ${r?.slice(0, 8) ?? "none"}`);
        break;
      }
      case "external_message":
      case "external_config":
        break;
      case "permission_request":
        this.handlePermissionRequest(e).catch((r) => {
          i.error(`[${n}] Error handling permission_request:`, r);
        });
        break;
      case "notification":
        if (typeof e.method !== "string") i.warn(`[${n}] Dropped a notification whose method is not a string`);
        else this.notificationHandler?.({ method: e.method, params: e.params });
        break;
      case "error":
        if (i.warn(`[${n}] Bridge error: ${e.error}`), this.selectedDeviceId) this.clearSelectionIfGone(this.selectedDeviceId);
        this.rejectTargetedCallsIfGone();
        break;
      default:
        i.warn(`[${n}] Unrecognized bridge message type: ${e.type}`);
    }
  }
  async handlePermissionRequest(e) {
    let { logger: t, serverName: i } = this.context, { tool_use_id: n, request_id: s } = e;
    if (typeof n !== "string" || typeof s !== "string") {
      t.warn(`[${i}] permission_request missing tool_use_id or request_id`);
      return;
    }
    let o = this.pendingCalls.get(n);
    if (!o?.onPermissionRequest) {
      t.debug(`[${i}] Ignoring permission_request for unknown tool_use_id ${n.slice(0, 8)} (not our call)`);
      return;
    }
    if (this.identity() !== "ok") {
      this.endUnanswerable(n, o);
      return;
    }
    let r = (0, import_chunk_tzhcnzkd.Q5o)(e, { toolUseId: n, requestId: s });
    clearTimeout(o.timer), o.permissionPaused = true;
    let d;
    try {
      let c = await o.onPermissionRequest(r);
      d = this.sendPermissionResponse(s, c);
    } catch (c) {
      t.error(`[${i}] Error handling permission request:`, c), d = this.sendPermissionResponse(s, false);
    }
    if (!d && this.identity() !== "ok") {
      this.endUnanswerable(n, o);
      return;
    }
    let a = this.pendingCalls.get(n);
    if (a) a.timer = this.createTimeoutTimer(n, a.timeoutMs);
  }
  endUnanswerable(e, t) {
    if (!this.pendingCalls.delete(e)) return;
    clearTimeout(t.timer), t.reject(new import_chunk_tzhcnzkd.Ftt(`[${this.context.serverName}] ${t.toolName} was stopped: it needed a permission, and no answer could be sent because nobody is signed in, or a different account is`));
  }
  sendPermissionResponse(e, t) {
    if (this.ws?.readyState !== import_ws.default.OPEN) return false;
    let i = { type: "permission_response", request_id: e, allowed: t };
    if (this.selectedDeviceId) i.target_device_id = this.selectedDeviceId;
    return this.sendFrame(JSON.stringify(i));
  }
  observeToolResult(e, t) {
    let { error: i, result: n } = t ?? {};
    try {
      this.context.browserActivityObserver?.onToolResult?.({ sessionId: e.sessionId, toolName: e.toolName, args: e.args, ok: i === void 0, resultContent: i === void 0 ? n?.content : void 0 });
    } catch {
      this.context.logger.debug(`[${this.context.serverName}] browser activity observer threw`);
    }
  }
  handleToolResult(e, t) {
    let { logger: i, serverName: n, trackEvent: s } = this.context, o = e.tool_use_id;
    if (typeof o !== "string") {
      i.warn(`[${n}] Received tool_result without tool_use_id`);
      return;
    }
    let r = this.pendingCalls.get(o);
    if (!r) {
      i.debug(`[${n}] Received tool_result for unknown call: ${o.slice(0, 8)}`);
      let l = this.timedOutCalls.get(o);
      if (s?.("chrome_bridge_tool_call_late_result", { tool_use_id: o, gap_from_timeout_ms: l ? Date.now() - l : null, reason: l ? "post_timeout" : "unknown", is_error: typeof e.is_error === "boolean" ? e.is_error : null }), l) this.timedOutCalls.delete(o);
      return;
    }
    let d = Date.now() - r.startTime, a = this.normalizeBridgeResponse(e), c = Boolean(e.is_error) || "error" in a;
    if (clearTimeout(r.timer), this.pendingCalls.delete(o), this.observeToolResult(r, c ? { error: true } : a), c) {
      let l = (0, import_chunk_tzhcnzkd.PAn)(a.error).slice(0, 200);
      i.warn(`[${n}] Tool call error: ${r.toolName} (${o.slice(0, 8)}) after ${d}ms`);
      let u = (0, import_chunk_tzhcnzkd.Y5o)(r.toolName, l, e.error_code);
      if (s?.("chrome_bridge_tool_call_error", { tool_name: `browser:${r.toolName}`, tool_use_id: o, duration_ms: d, error_type: u, session_id: r.sessionId, user_message_uuid: r.userMessageUuid, transport: "bridge" }), r.targetDeviceId === void 0 && !this.selectedDeviceId && !this.pairingInProgress) {
        this.discoveryComplete = false, r.reject(new import_chunk_tzhcnzkd.RMe(`[${n}] Extension disconnected during tool call: ${r.toolName}`, { routingAckReceived: r.routingAckReceived ?? false }));
        return;
      }
    } else i.debug(`[${n}] Tool call completed: ${r.toolName} (${o.slice(0, 8)}) in ${d}ms`), s?.("chrome_bridge_tool_call_completed", { tool_name: `browser:${r.toolName}`, tool_use_id: o, duration_ms: d, session_id: r.sessionId, user_message_uuid: r.userMessageUuid, transport: "bridge", response_bytes: t });
    r.resolve(a);
  }
  normalizeBridgeResponse(e) {
    let { notices: t, error_code: i, ...n } = e, s = (0, import_chunk_tzhcnzkd.t9o)(t, (r) => this.context.logger.warn(`[${this.context.serverName}] ${r}`)), o = s ? { notices: s } : void 0;
    if (n.result || n.error) return o ? { ...n, ...o } : n;
    if (n.content) {
      if (n.is_error) return { error: { content: n.content }, ...o };
      return { result: { content: n.content }, ...o };
    }
    return o ? { ...n, ...o } : n;
  }
  getTimeoutDiagnostics() {
    let e = -1;
    try {
      let i = process.getSystemMemoryInfo(), n = i.free + (i.fileBacked ?? 0);
      e = i.total > 0 ? Math.round(n / i.total * 1e3) / 10 : -1;
    } catch {
    }
    let t = this.lastPongReceived > 0 ? Date.now() - this.lastPongReceived : void 0;
    return { free_mem_pct: e, pong_age_ms: t };
  }
  createTimeoutTimer(e, t) {
    let { logger: i, serverName: n, trackEvent: s } = this.context;
    return setTimeout(() => {
      let o = this.pendingCalls.get(e);
      if (!o) return;
      if (this.timedOutCalls.set(e, Date.now()), this.timedOutCalls.size > 200) {
        let c = this.timedOutCalls.keys().next().value;
        if (c) this.timedOutCalls.delete(c);
      }
      this.pendingCalls.delete(e);
      let r = Date.now() - o.startTime, d = this.getTimeoutDiagnostics(), a = o.routingAckReceived ?? false;
      if (i.warn(`[${n}] Tool call timeout: ${o.toolName} (${e.slice(0, 8)}) after ${r}ms, pending calls: ${this.pendingCalls.size}`), s?.("chrome_bridge_tool_call_timeout", { tool_name: `browser:${o.toolName}`, tool_use_id: e, duration_ms: r, timeout_ms: t, session_id: o.sessionId, user_message_uuid: o.userMessageUuid, transport: "bridge", routing_ack_received: a, routing_ack_pong_age_ms: o.routingAckPongAgeMs ?? null, permission_paused: o.permissionPaused ?? false, ...d }), this.socketUp()) o.reject(new import_chunk_tzhcnzkd.Utt(`[${n}] Tool call timed out: ${o.toolName}`, { routingAckReceived: a }));
      else o.reject(new import_chunk_tzhcnzkd.Ftt(`[${n}] Tool call timed out with bridge disconnected: ${o.toolName}`));
    }, t);
  }
  scheduleReconnect() {
    let { logger: e, serverName: t, trackEvent: i } = this.context;
    if (this.reconnectTimer) return;
    if (this.identity() === "signed_out") return;
    if (this.reconnectAttempts++, this.reconnectAttempts > 100) {
      e.warn(`[${t}] Giving up bridge reconnection after 100 attempts`), i?.("chrome_bridge_reconnect_exhausted", { total_attempts: 100 }), this.reconnectAttempts = 0;
      return;
    }
    let n = Math.min(2e3 * Math.pow(1.5, this.reconnectAttempts - 1), 3e4);
    if (this.reconnectAttempts <= 10 || this.reconnectAttempts % 10 === 0) e.info(`[${t}] Bridge reconnecting in ${Math.round(n)}ms (attempt ${this.reconnectAttempts})`);
    this.reconnectTimer = setTimeout(() => {
      this.reconnectTimer = null, this.connect();
    }, n);
  }
  startKeepAlive() {
    this.stopKeepAlive(), this.lastPongReceived = Date.now();
    let { logger: e, serverName: t } = this.context;
    this.keepAliveInterval = setInterval(() => {
      let i = this.identity();
      if (i === "other") {
        this.closeForOtherAccount("use");
        return;
      }
      if (i === "signed_out" && this.context.isSignOutSettled?.()) {
        this.cleanup();
        return;
      }
      if (this.ws?.readyState === import_ws.default.OPEN) this.ws.send(JSON.stringify({ type: "ping" }));
      if (this.lastPongReceived > 0 && Date.now() - this.lastPongReceived > C) e.warn(`[${t}] No pong received in ${C}ms, closing dead connection`), this.losePendingCalls("Bridge keepalive timeout \u2014 connection dead"), this.closeSocket(), this.scheduleReconnect();
    }, A);
  }
  stopKeepAlive() {
    if (this.keepAliveInterval) clearInterval(this.keepAliveInterval), this.keepAliveInterval = null;
    this.lastPongReceived = 0;
  }
  closeSocket() {
    if (this.socketUserId = void 0, this.stopKeepAlive(), this.handshakeTimer) clearTimeout(this.handshakeTimer), this.handshakeTimer = null;
    if (this.ws) this.ws.removeAllListeners(), this.ws.on("error", () => {
    }), this.ws.close(), this.ws = null;
    if (this.connected = false, this.authenticated = false, this.selectedDeviceId) this.previousSelectedDeviceId = this.selectedDeviceId, this.previousSelectedLeftAt ??= Date.now();
    if (this.selectedDeviceId = void 0, this.discoveryComplete = false, this.multiBrowserPendingSelection = false, this.pendingPairingRequestId = void 0, this.pairingInProgress = false, this.abortPairingPrompt(), this.pendingSwitchResolve) this.pendingSwitchResolve(null), this.pendingSwitchResolve = null;
    if (this.pendingDiscovery) clearTimeout(this.pendingDiscovery.timeout), this.pendingDiscovery.resolve([]), this.pendingDiscovery = null;
    if (this.lastBrowserLeftAt = void 0, this.peerConnectedWaiters.length > 0) {
      let e = this.peerConnectedWaiters;
      this.peerConnectedWaiters = [];
      for (let t of e) t(false);
    }
    this.context.onPeerRosterChanged?.();
  }
  rejectPendingCalls(e, t = () => true) {
    for (let [i, n] of this.pendingCalls) if (t(n)) clearTimeout(n.timer), this.pendingCalls.delete(i), n.reject(e(n));
  }
  losePendingCalls(e) {
    for (let [t, i] of this.pendingCalls) this.context.trackEvent?.("chrome_bridge_tool_call_lost", { tool_name: `browser:${i.toolName}`, tool_use_id: t, duration_ms: Date.now() - i.startTime, session_id: i.sessionId, user_message_uuid: i.userMessageUuid, transport: "bridge", routing_ack_received: i.routingAckReceived ?? false });
    this.rejectPendingCalls(() => new import_chunk_tzhcnzkd.Ftt(e));
  }
  drainExternalRelays() {
    this.externalRelays.drain("send_failed");
  }
  cleanup() {
    if (this.connectEpoch++, this.connecting = false, this.reconnectTimer) clearTimeout(this.reconnectTimer), this.reconnectTimer = null;
    this.losePendingCalls("Bridge client disconnected"), this.drainExternalRelays(), this.closeSocket(), this.reconnectAttempts = 0;
  }
}
function rer(e) {
  return new hYs(e);
}
var U = 300, W = 1e3, F = 3e4, L = 10, J = { steps: [[2e3, 30]], thenMs: 1e4 }, j = { steps: [[2e3, 30]], thenMs: 6e4 }, H = { steps: [[3e3, 100]], thenMs: 1e4 }, G = (e, t, i) => Math.min(e * 1.5 ** (t - 1), i);
function y({ steps: e, thenMs: t }, i) {
  let n = 0;
  for (let [s, o] of e) if (n += o, i <= n) return s;
  return t;
}
function z(e, t) {
  switch (e) {
    case "transport":
      return G(W, t, F);
    case "mismatch":
      return y(H, t);
    case "not_ready":
      return y(J, t);
    case "token":
      return y(j, t);
  }
}
var K = { peer_not_ready: "not_ready", awaits_token: "token", peer_may_move: "mismatch", retry: "transport" }, S = (e) => ({ attempts: 0, timer: null, wanted: false, cadence: e });
function T(e) {
  return e.replace(/</g, "\\u003c").replace(/>/g, "\\u003e").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0085/g, "\\u0085");
}
function V(e, t) {
  let i = (o) => T(JSON.stringify(o)), n = e.map((o) => {
    let r = o;
    return `  \u2022 tabId ${r.tabId}: ${i(r.title)} (${i(r.url)})`;
  }).join(`
`), s = { availableTabs: e };
  if (t !== void 0) s.tabGroupId = t;
  return { result: { content: [{ type: "text", text: T(JSON.stringify(s)) }, { type: "text", text: `

Tab Context:
- Available tabs:
${n}` }] } };
}
class R {
  clients = /* @__PURE__ */ new Map();
  stragglers = /* @__PURE__ */ new WeakSet();
  tabRoutes = /* @__PURE__ */ new Map();
  ambiguousTabs = /* @__PURE__ */ new Set();
  lookedUp = /* @__PURE__ */ new Set();
  context;
  notificationHandler = null;
  refreshPromise = null;
  generation = 0;
  unwatchSockets = null;
  scanTimer = null;
  dialing = /* @__PURE__ */ new WeakSet();
  parked = /* @__PURE__ */ new WeakSet();
  redials = /* @__PURE__ */ new WeakMap();
  orphaned = /* @__PURE__ */ new WeakSet();
  constructor(e) {
    this.context = e;
  }
  startProactivePairing() {
    let { localPairing: e, watchSocketPaths: t } = this.context;
    if (!e || !t) return;
    if (!this.unwatchSockets) this.unwatchSockets = t(() => this.scheduleScan());
    this.parked = /* @__PURE__ */ new WeakSet(), this.scheduleScan();
  }
  scheduleScan() {
    if (this.scanTimer) return;
    this.scanTimer = setTimeout(() => {
      this.scanTimer = null, this.dialAvailable();
    }, U), this.scanTimer.unref?.();
  }
  async dialAvailable() {
    if (!this.unwatchSockets || this.context.isDisabled?.()) return;
    let e = this.generation;
    if (this.refreshPromise) await this.refreshPromise;
    if (await this.refreshClients(), e !== this.generation || !this.unwatchSockets) return;
    for (let [t, i] of this.clients.entries()) {
      if (i.isConnected()) {
        this.clearRedial(i);
        continue;
      }
      if (this.parked.has(i) || this.dialing.has(i) || this.redials.get(i)?.timer) continue;
      this.clearRedial(i), this.dial(t, i);
    }
  }
  dial(e, t) {
    this.dialing.add(t);
    let i = this.redials.get(t);
    if (i) i.wanted = false;
    let n = (s) => {
      if (this.dialing.delete(t), this.clients.get(e) !== t || this.redials.get(t)?.cadence === "dead") return;
      if (s) {
        this.clearRedial(t);
        return;
      }
      if (this.redials.get(t)?.wanted || t.isConnecting()) {
        this.onRedialWanted(e, t);
        return;
      }
      let o = t.lastPairingRefuseCode(), r = o === void 0 ? "durable" : (0, import_chunk_tzhcnzkd.YFa)(o, t.lastPairingRefusePeerReported());
      if (r === "durable") this.parked.add(t);
      else this.onRedialWanted(e, t, K[r]);
    };
    t.ensureConnected().then(n, () => n(false));
  }
  onRedialWanted(e, t, i = "transport") {
    if (!this.unwatchSockets || this.clients.get(e) !== t) return;
    if (this.orphaned.has(t)) {
      this.removeClient(e, t);
      return;
    }
    let n = this.redials.get(t) ?? S(i);
    if (n.wanted = true, n.cadence !== i) n.attempts = 0, n.cadence = i;
    if (this.redials.set(t, n), n.timer) return;
    if (i === "transport" && n.attempts >= L) {
      this.context.logger.info(`[${this.context.serverName}] Giving up on ${e} after ${n.attempts} proactive redials`);
      return;
    }
    n.attempts += 1;
    let s = z(i, n.attempts);
    n.timer = setTimeout(() => {
      if (n.timer = null, this.unwatchSockets && this.clients.get(e) === t && !this.context.isDisabled?.() && !t.isConnected() && !this.dialing.has(t)) this.dial(e, t);
    }, s), n.timer.unref?.();
  }
  onSocketDead(e, t) {
    if (!this.unwatchSockets || this.clients.get(e) !== t) return;
    this.clearRedial(t), this.redials.set(t, S("dead")), this.refreshClients();
  }
  clearRedial(e) {
    let t = this.redials.get(e);
    if (t?.timer) clearTimeout(t.timer);
    this.redials.delete(e);
  }
  removeClient(e, t) {
    this.context.logger.info(`[${this.context.serverName}] Removing stale socket from pool: ${e}`), this.clearRedial(t), this.orphaned.delete(t), t.disconnect(), this.clients.delete(e);
    for (let [i, n] of this.tabRoutes.entries()) if (n === e) this.tabRoutes.delete(i);
  }
  setNotificationHandler(e) {
    this.notificationHandler = e;
    for (let t of this.clients.values()) t.setNotificationHandler(e);
  }
  async ensureConnected() {
    let { logger: e, serverName: t } = this.context;
    await this.refreshClients();
    let i = [], n = [];
    for (let o of this.clients.values()) {
      if (o.isConnected()) {
        this.stragglers.delete(o);
        continue;
      }
      let r = this.stragglers.has(o), d = o.ensureConnected().then((a) => {
        if (a) this.stragglers.delete(o);
        else this.stragglers.add(o);
        return a;
      }, () => (this.stragglers.add(o), false));
      (r ? n : i).push(d);
    }
    if (await Promise.all(i), this.getConnectedClients().length === 0) await Promise.all(n);
    let s = this.getConnectedClients().length;
    if (s === 0) return e.info(`[${t}] No connected sockets in pool`), false;
    return e.info(`[${t}] Socket pool: ${s} connected`), true;
  }
  async callTool(e, t, i, n) {
    let { browserActivityObserver: s, logger: o, serverName: r } = this.context, d = { sessionId: i?.sessionScope?.sessionId, toolName: e, args: t };
    try {
      await s?.onBeforeToolCall?.(d);
    } catch {
      o.debug(`[${r}] browser activity observer threw`);
    }
    let a = await this.routeTool(e, t, i, n), { error: c, result: l } = a ?? {};
    try {
      s?.onToolResult?.({ ...d, ok: c === void 0, resultContent: c === void 0 ? l?.content : void 0 });
    } catch {
      o.debug(`[${r}] browser activity observer threw`);
    }
    return a;
  }
  async routeTool(e, t, i, n) {
    if (e === "tabs_context_mcp") return this.callTabsContext(t, i);
    if (n?.singleBrowser || n?.requireDeviceId !== void 0) {
      let r = typeof t.tabId === "number" ? t.tabId : void 0, d = r !== void 0 ? this.browserOfTab(r) : void 0, a = n.requireDeviceId;
      if (!(a !== void 0 ? d === a : d !== void 0)) throw new import_chunk_tzhcnzkd.Hgt(`[${this.context.serverName}] ${e} not sent: its tab's browser can't be confirmed`);
    }
    let s = t.tabId;
    if (s !== void 0) {
      let r = this.tabRoutes.get(s);
      if (r) {
        let d = this.clients.get(r);
        if (d?.isConnected()) return d.callTool(e, t, i);
      }
    }
    let o = this.getConnectedClients();
    if (o.length === 0) throw new import_chunk_tzhcnzkd.CP(`[${this.context.serverName}] No connected sockets available`);
    return o[0].callTool(e, t, i);
  }
  isConnected() {
    return this.getConnectedClients().length > 0;
  }
  browserOfTab(e) {
    let t = this.tabRoutes.get(e);
    if (t === void 0) {
      let i = this.getConnectedClients();
      return i.length === 1 ? this.getSocketPathForClient(i[0]) : void 0;
    }
    return this.lookedUp.has(t) && !this.ambiguousTabs.has(e) && this.clients.get(t)?.isConnected() === true ? t : void 0;
  }
  hasActiveSelection() {
    return this.isConnected();
  }
  hasCallInFlight() {
    return this.getConnectedClients().some((e) => e.hasCallInFlight());
  }
  onPairingEnded(e) {
    this.context.onPeerDisconnected?.({ deviceId: e, wasSelected: !this.isConnected() });
  }
  sendExternalMessage(e, t, i) {
    let { logger: n, serverName: s } = this.context, o = this.getConnectedClients();
    if (o.length === 1) {
      if (i?.requireDeviceId !== void 0 && this.getSocketPathForClient(o[0]) !== i.requireDeviceId) return n.info(`[${s}] external_message refused: the paired browser is not the tab's`), Promise.resolve({ ok: false, error: "no_target", detail: "not_sent" });
      return o[0].sendExternalMessage(e, t, { ...i?.timeoutMs !== void 0 && { timeoutMs: i.timeoutMs } });
    }
    if (o.length === 0) return Promise.reject(new import_chunk_tzhcnzkd.CP(`[${s}] Cannot relay: no paired browser`));
    return n.info(`[${s}] external_message refused: ${o.length} browsers are paired; relays go only to a single paired browser`), Promise.resolve({ ok: false, error: "no_target", detail: "multiple_browsers" });
  }
  pairedClientAt(e) {
    let t = this.clients.get(e);
    return t?.isConnected() === true ? t : void 0;
  }
  onlyPaired() {
    let e = this.getConnectedClients();
    return e.length === 1 ? e[0] : void 0;
  }
  peerAdvertises(e) {
    return this.onlyPaired()?.peerAdvertises(e) === true;
  }
  sendSealedCall(e, t, i) {
    let n = this.onlyPaired();
    return n !== void 0 && (i.requireDeviceId === void 0 || this.getSocketPathForClient(n) === i.requireDeviceId) ? n.sendSealedCall(e, t, { mark: i.mark, timeoutMs: i.timeoutMs }) : Promise.resolve({ sent: false });
  }
  pushExternalConfigToAllPeers(e) {
    let t = 0;
    for (let i of this.getConnectedClients()) if (i.pushExternalConfig(e)) t += 1;
    return Promise.resolve(t);
  }
  disconnect() {
    if (this.generation += 1, this.refreshPromise = null, this.unwatchSockets?.(), this.unwatchSockets = null, this.scanTimer) clearTimeout(this.scanTimer), this.scanTimer = null;
    for (let e of this.clients.values()) this.clearRedial(e), e.disconnect();
    this.clients.clear(), this.tabRoutes.clear(), this.ambiguousTabs.clear(), this.lookedUp.clear();
  }
  getConnectedClients() {
    return [...this.clients.values()].filter((e) => e.isConnected());
  }
  async callTabsContext(e, t) {
    let { logger: i, serverName: n } = this.context, s = this.getConnectedClients();
    if (s.length === 0) throw new import_chunk_tzhcnzkd.CP(`[${n}] No connected sockets available`);
    if (s.length === 1) {
      let a = await s[0].callTool("tabs_context_mcp", e, t);
      return this.ambiguousTabs.clear(), this.lookedUp = /* @__PURE__ */ new Set([this.getSocketPathForClient(s[0])]), this.updateTabRoutes(a, this.getSocketPathForClient(s[0])), a;
    }
    let o = await Promise.allSettled(s.map(async (a) => {
      let c = await a.callTool("tabs_context_mcp", e, t), l = this.getSocketPathForClient(a);
      return { result: c, socketPath: l };
    })), r = [], d;
    this.tabRoutes.clear(), this.ambiguousTabs.clear(), this.lookedUp = new Set(s.map((a) => this.getSocketPathForClient(a)));
    for (let a of o) {
      if (a.status !== "fulfilled") {
        i.info(`[${n}] tabs_context_mcp failed on one socket: ${a.reason}`);
        continue;
      }
      let { result: c, socketPath: l } = a.value, u = this.extractTabs(c);
      for (let m of u ?? []) {
        let g = m?.tabId, f = typeof g === "number" ? this.tabRoutes.get(g) : void 0;
        if (f !== void 0 && f !== l) this.ambiguousTabs.add(g);
      }
      if (this.updateTabRoutes(c, l), u) for (let m of u) r.push(m);
      if (d === void 0) d = this.extractTabGroupId(c);
    }
    if (r.length > 0) return V(r, d);
    for (let a of o) if (a.status === "fulfilled") return a.value.result;
    throw new import_chunk_tzhcnzkd.CP(`[${n}] All sockets failed for tabs_context_mcp`);
  }
  updateTabRoutes(e, t) {
    let i = this.extractTabs(e);
    if (!i) return;
    for (let n of i) if (typeof n === "object" && n !== null && "tabId" in n) {
      let s = n.tabId;
      this.tabRoutes.set(s, t);
    }
  }
  extractTabs(e) {
    if (!e || typeof e !== "object") return null;
    let i = e.result?.content;
    if (!i || !Array.isArray(i)) return null;
    for (let n of i) if (n.type === "text" && n.text) try {
      let s = JSON.parse(n.text);
      if (Array.isArray(s)) return s;
      let o = s;
      if (o && Array.isArray(o.availableTabs)) return o.availableTabs;
    } catch {
    }
    return null;
  }
  extractTabGroupId(e) {
    if (!e || typeof e !== "object") return;
    let i = e.result?.content;
    if (!i || !Array.isArray(i)) return;
    for (let n of i) if (n.type === "text" && n.text) try {
      let s = JSON.parse(n.text);
      if (typeof s.tabGroupId === "number") return s.tabGroupId;
    } catch {
    }
    return;
  }
  getSocketPathForClient(e) {
    for (let [t, i] of this.clients.entries()) if (i === e) return t;
    return "";
  }
  refreshClients() {
    if (!this.refreshPromise) {
      let e = this.doRefreshClients().finally(() => {
        if (this.refreshPromise === e) this.refreshPromise = null;
      });
      this.refreshPromise = e;
    }
    return this.refreshPromise;
  }
  async doRefreshClients() {
    let { logger: e, serverName: t } = this.context, i = this.generation, n;
    try {
      n = await this.context.getSocketPaths?.() ?? [];
    } catch (s) {
      e.info(`[${t}] Socket scan failed:`, s);
      return;
    }
    if (i !== this.generation) return;
    for (let s of n) if (!this.clients.has(s)) {
      e.info(`[${t}] Adding socket to pool: ${s}`);
      let o = { ...this.context, socketPath: s, getSocketPath: void 0, getSocketPaths: void 0, onPeerDisconnected: () => this.onPairingEnded(s) }, r = (0, import_chunk_tzhcnzkd.Dgt)(o);
      if (r.disableAutoReconnect = true, r.onRedialWanted = (d) => d === "dead" ? this.onSocketDead(s, r) : this.onRedialWanted(s, r, d === "peer_dropped" ? "not_ready" : "transport"), this.notificationHandler) r.setNotificationHandler(this.notificationHandler);
      this.clients.set(s, r);
    }
    for (let [s, o] of this.clients.entries()) if (n.includes(s)) this.orphaned.delete(o);
    else if (o.isConnected()) this.orphaned.add(o);
    else this.removeClient(s, o);
  }
}
function JKr(e) {
  return new R(e);
}
