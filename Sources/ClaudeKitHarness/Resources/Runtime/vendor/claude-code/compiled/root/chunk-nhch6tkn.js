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
var chunk_nhch6tkn_exports = {};
__export(chunk_nhch6tkn_exports, {
  J5n: () => J5n
});
module.exports = __toCommonJS(chunk_nhch6tkn_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_sg5zbskk = require("/$bunfs/root/chunk-sg5zbskk.js");
var import_chunk_9mhdzhnn = require("/$bunfs/root/chunk-9mhdzhnn.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_rts2v6y0 = require("/$bunfs/root/chunk-rts2v6y0.js");
var import_chunk_67x4acbe = require("/$bunfs/root/chunk-67x4acbe.js");
var import_chunk_w41hvvf2 = require("/$bunfs/root/chunk-w41hvvf2.js");
var import_chunk_d1nhs44g = require("/$bunfs/root/chunk-d1nhs44g.js");
var import_chunk_35rmjae5 = require("/$bunfs/root/chunk-35rmjae5.js");
var import_chunk_7zd54r6w = require("/$bunfs/root/chunk-7zd54r6w.js");
var import_chunk_sak3f2zv = require("/$bunfs/root/chunk-sak3f2zv.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_dvkg7v5x = require("/$bunfs/root/chunk-dvkg7v5x.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
class ee {
  transport;
  announced;
  now;
  random;
  onEvent;
  onTransportEvent;
  started = false;
  stopping = false;
  timers = (0, import_chunk_syr33dp2.pBi)(import_chunk_syr33dp2.fBi);
  lastAckAt = 0;
  reconnectAttempts = 0;
  consecutiveSlotContention = 0;
  lastFailureWasContention = false;
  contentionBackoffNotified = false;
  consecutivePongTimeouts = 0;
  keepaliveTimer;
  reconnectTimer;
  stableTimer;
  reannounce = { phase: "idle" };
  constructor(e) {
    this.transport = e.transport, this.announced = e.announced, this.onEvent = e.onEvent, this.onTransportEvent = e.onTransportEvent, this.now = e.now ?? Date.now, this.random = e.random ?? Math.random, this.transport.onevent = this.handleTransportEvent;
  }
  start() {
    if (this.started) return;
    this.started = true, this.openConnection();
  }
  async stop() {
    this.stopping = true, this.clearReconnectTimer(), this.clearConnectionTimers(), this.cancelReannounce(), await this.transport.close();
  }
  requestReannounce(e) {
    if (!this.started || this.stopping) return;
    let r = import_chunk_syr33dp2.Fbo[e];
    switch (this.reannounce.phase) {
      case "draining":
      case "rotating":
        return;
      case "coalescing":
        if (this.reannounce.fireAt <= this.now() + r) return;
        clearTimeout(this.reannounce.timer);
        break;
      case "idle":
        break;
    }
    this.reannounce = { phase: "coalescing", reason: e, fireAt: this.now() + r, timer: setTimeout(this.beginReannounce, r) };
  }
  getReconnectAttempts() {
    return this.reconnectAttempts;
  }
  getConsecutiveSlotContention() {
    return this.consecutiveSlotContention;
  }
  getConsecutivePongTimeouts() {
    return this.consecutivePongTimeouts;
  }
  handleTransportEvent = (e) => {
    switch (this.notifyTransportListener(e), e.kind) {
      case "authenticated":
        this.handleAuthenticated(e.protocolVersion, e.timings);
        return;
      case "hb_ack":
        this.handleAck();
        return;
      case "rejected": {
        let r = this.endRotation(), o = r !== void 0 && e.reason === "duplicate_device_id";
        if (o) this.emit({ kind: "reannounce_contended", reason: r });
        else if (e.slotContention) this.lastFailureWasContention = true;
        this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect(o);
        return;
      }
      case "closed":
        if (e.superseded) this.lastFailureWasContention = true;
        this.endRotation(), this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect();
        return;
      case "handshake_timeout":
      case "dial_failed":
      case "token_unavailable":
        this.endRotation(), this.cancelDrain(), this.clearConnectionTimers(), this.scheduleReconnect();
        return;
      case "transport_closed":
        this.stopping = true, this.clearReconnectTimer(), this.clearConnectionTimers(), this.cancelReannounce();
        return;
      case "connecting":
      case "socket_error":
      case "inbound_unknown":
      case "inbound_invalid":
      case "outbound_dropped":
        return;
    }
  };
  async openConnection() {
    if (this.stopping) return;
    try {
      await this.transport.openConnection();
    } catch (e) {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] open connection failed: ${(0, import_chunk_jv7av99m.D)(e).message}`), this.endRotation(), this.scheduleReconnect();
    }
  }
  handleAuthenticated(e, r) {
    if (this.stopping) return;
    if (this.timers = (0, import_chunk_syr33dp2.pBi)(r), this.lastAckAt = this.now(), this.clearKeepaliveTimer(), this.endRotation() === void 0 || this.stableTimer === void 0) this.clearStableTimer(), this.stableTimer = setTimeout(this.markStable, import_chunk_syr33dp2.Ybl);
    if (this.announced.hasUnservedChange()) this.requestReannounce("connected_stale");
    if (e < 1) {
      this.consecutivePongTimeouts = 0, this.emit({ kind: "heartbeat_unsupported", protocolVersion: e });
      return;
    }
    this.keepaliveTimer = setInterval(this.keepaliveTick, this.timers.keepaliveIntervalMs), this.sendHeartbeat();
  }
  handleAck() {
    if (this.lastAckAt = this.now(), this.consecutivePongTimeouts > 0) this.consecutivePongTimeouts = 0, this.reconnectAttempts = 0;
  }
  keepaliveTick = () => {
    if (!this.transport.isAuthenticated()) return;
    if (this.now() - this.lastAckAt > this.timers.pongTimeoutMs) {
      this.consecutivePongTimeouts++, this.emit({ kind: "pong_timeout", consecutive: this.consecutivePongTimeouts }), this.cancelDrain(), this.clearConnectionTimers(), this.transport.disconnect(), this.scheduleReconnect();
      return;
    }
    this.sendHeartbeat();
  };
  sendHeartbeat() {
    this.transport.sendRaw(import_chunk_syr33dp2.Kbl);
  }
  markStable = () => {
    if (this.stableTimer = void 0, this.consecutiveSlotContention = 0, this.contentionBackoffNotified = false, this.consecutivePongTimeouts === 0) this.reconnectAttempts = 0;
    this.emit({ kind: "stabilized" });
  };
  scheduleReconnect(e = false) {
    if (this.stopping || !this.started || this.reconnectTimer !== void 0) return;
    let r = this.nextDelayMs(e);
    if (this.stopping) return;
    this.reconnectTimer = setTimeout(this.reconnect, r), this.emit({ kind: "reconnect_scheduled", delayMs: r, attempt: this.reconnectAttempts, slotContention: this.consecutiveSlotContention > 0 });
  }
  nextDelayMs(e) {
    let r = this.lastFailureWasContention;
    if (this.lastFailureWasContention = false, e) return (0, import_chunk_syr33dp2.Abs)(0, 1, this.timers.slotContentionFastAttempts, this.random);
    if (r) {
      if (this.consecutiveSlotContention++, this.consecutiveSlotContention > this.timers.slotContentionFastAttempts && !this.contentionBackoffNotified) this.contentionBackoffNotified = true, this.emit({ kind: "slot_contention_backoff", consecutive: this.consecutiveSlotContention });
      return (0, import_chunk_syr33dp2.Abs)(0, this.consecutiveSlotContention, this.timers.slotContentionFastAttempts, this.random);
    }
    if (this.consecutiveSlotContention = 0, this.contentionBackoffNotified = false, this.reconnectAttempts >= import_chunk_syr33dp2.qbl) {
      this.reconnectAttempts = 0, this.emit({ kind: "reconnect_exhausted" });
      try {
        this.transport.onerror?.(Error("Bridge unreachable"));
      } catch (s) {
        (0, import_chunk_w578pjby.t)(`[deviceBridge] transport onerror listener threw: ${(0, import_chunk_jv7av99m.D)(s).message}`);
      }
    }
    let o = (0, import_chunk_syr33dp2.Abs)(this.reconnectAttempts, 0, this.timers.slotContentionFastAttempts, this.random);
    return this.reconnectAttempts++, o;
  }
  reconnect = () => {
    this.reconnectTimer = void 0, this.openConnection();
  };
  beginReannounce = () => {
    if (this.reannounce.phase !== "coalescing") return;
    let { reason: e } = this.reannounce;
    if (this.reannounce = { phase: "idle" }, this.stopping) return;
    let r = this.announced.inFlightCalls(), o = this.reannounceSkipOutcome();
    if (o !== void 0) {
      this.emit({ kind: "reannounce", reason: e, outcome: o, inFlightAtStart: r, drainedMs: 0, drainTimedOut: false });
      return;
    }
    let s = { phase: "draining", reason: e, startedAt: this.now(), inFlightAtStart: r, timer: setTimeout(this.handleDrainTimeout, this.timers.rotateDrainMaxMs) };
    this.reannounce = s, this.announced.whenIdle().then(() => this.rotate(s, false), () => this.rotate(s, false));
  };
  handleDrainTimeout = () => {
    if (this.reannounce.phase === "draining") this.rotate(this.reannounce, true);
  };
  rotate(e, r) {
    if (this.reannounce !== e) return;
    if (clearTimeout(e.timer), this.reannounce = { phase: "idle" }, this.stopping) return;
    let o = this.reannounceSkipOutcome() ?? "rotated";
    if (o === "rotated") this.reannounce = { phase: "rotating", reason: e.reason };
    if (this.emit({ kind: "reannounce", reason: e.reason, outcome: o, inFlightAtStart: e.inFlightAtStart, drainedMs: this.now() - e.startedAt, drainTimedOut: r }), this.reannounce.phase !== "rotating" || this.stopping) return;
    this.clearKeepaliveTimer(), this.transport.disconnect(), this.openConnection();
  }
  reannounceSkipOutcome() {
    if (!this.announced.hasUnservedChange()) return "already_served";
    if (!this.transport.isAuthenticated()) return "not_connected";
    return;
  }
  endRotation() {
    if (this.reannounce.phase !== "rotating") return;
    let { reason: e } = this.reannounce;
    return this.reannounce = { phase: "idle" }, e;
  }
  cancelDrain() {
    if (this.reannounce.phase !== "draining") return;
    let e = this.reannounce;
    clearTimeout(e.timer), this.reannounce = { phase: "idle" }, this.emit({ kind: "reannounce", reason: e.reason, outcome: "not_connected", inFlightAtStart: e.inFlightAtStart, drainedMs: this.now() - e.startedAt, drainTimedOut: false });
  }
  cancelReannounce() {
    switch (this.reannounce.phase) {
      case "coalescing":
      case "draining":
        clearTimeout(this.reannounce.timer);
        break;
      case "rotating":
      case "idle":
        break;
    }
    this.reannounce = { phase: "idle" };
  }
  emit(e) {
    try {
      this.onEvent?.(e);
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] liveness event listener threw: ${(0, import_chunk_jv7av99m.D)(r).message}`);
    }
  }
  notifyTransportListener(e) {
    try {
      this.onTransportEvent?.(e);
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] transport event listener threw: ${(0, import_chunk_jv7av99m.D)(r).message}`);
    }
  }
  clearReconnectTimer() {
    if (this.reconnectTimer === void 0) return;
    clearTimeout(this.reconnectTimer), this.reconnectTimer = void 0;
  }
  clearConnectionTimers() {
    this.clearKeepaliveTimer(), this.clearStableTimer();
  }
  clearKeepaliveTimer() {
    if (this.keepaliveTimer !== void 0) clearInterval(this.keepaliveTimer), this.keepaliveTimer = void 0;
  }
  clearStableTimer() {
    if (this.stableTimer !== void 0) clearTimeout(this.stableTimer), this.stableTimer = void 0;
  }
}
function de() {
  let e = /* @__PURE__ */ new Map(), r = (0, import_chunk_69qhefwa.Be)(), o = ae(e), s;
  return { get: (d) => o.byName.get(d), setGroup(d, h, k = "tools_changed") {
    e.set(d, [...h]);
    let y = ae(e), P = o;
    if (o = y, y.dropped.length > 0 && (0, import_chunk_w578pjby._)(y.dropped) !== (0, import_chunk_w578pjby._)(P.dropped)) (0, import_chunk_w578pjby.t)(`[deviceBridge] duplicate device tool names not announced: ${(0, import_chunk_w578pjby._)(y.dropped)}`);
    if (y.hash === P.hash) return;
    try {
      r.emit(k);
    } catch (g) {
      for (let R of g instanceof AggregateError ? g.errors : [g]) (0, import_chunk_k449cc64.i)(R);
    }
  }, definitions: () => o.definitions, definitionsOf: (d) => (e.get(d) ?? []).flatMap((h) => o.byName.get(h.definition.name) === h ? [h.definition] : []), serve() {
    return s = o.hash, o.definitions;
  }, hasUnservedChange: () => s !== o.hash, subscribe: r.subscribe };
}
function ae(e) {
  let { byName: r, dropped: o } = [...e.values()].flat().reduce((d, h) => {
    let k = h.definition.name;
    if (d.byName.has(k)) d.dropped.push(k);
    else d.byName.set(k, h);
    return d;
  }, { byName: /* @__PURE__ */ new Map(), dropped: [] }), s = [...r.values()].map((d) => d.definition);
  return { byName: r, definitions: s, dropped: o, hash: (0, import_chunk_ghnve1xk.AD)((0, import_chunk_w578pjby._)(s)) };
}
(0, import_chunk_adx6804h.B)();
var Ae = 0, K = 1, Oe = -32603, ce = Symbol("device-bridge-token-deadline"), ue = "__synthetic_init__", V = 33554432;
function Pe(e) {
  let r = new globalThis.WebSocket(e, { proxy: (0, import_chunk_3jjr3wje.Z1)(e), tls: (0, import_chunk_3jjr3wje.QN)(void 0) || void 0 });
  return r.binaryType = "arraybuffer", r;
}
class te {
  options;
  onclose;
  onerror;
  onmessage;
  onevent;
  started = false;
  closing = false;
  ws;
  pendingToken;
  authenticated = false;
  connectGeneration = 0;
  handshakeTimer;
  negotiated;
  constructor(e) {
    this.options = e;
  }
  async start() {
    if (this.started) throw Error("DeviceBridgeTransport start can only be called once.");
    this.started = true;
  }
  async close() {
    if (this.closing) return;
    this.closing = true, this.disconnect(), this.emit({ kind: "transport_closed" }), this.onclose?.();
  }
  async send(e) {
    if (Me(e)) return;
    let r = this.ws;
    if (!r || !this.authenticated || r.readyState !== K) {
      this.emit({ kind: "outbound_dropped", messageType: ne(e) === void 0 ? "other" : "request" });
      return;
    }
    try {
      r.send((0, import_chunk_w578pjby._)(e));
    } catch (o) {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] outbound send failed: ${(0, import_chunk_jv7av99m.D)(o).message}`), this.emit({ kind: "outbound_dropped", messageType: ne(e) === void 0 ? "other" : "request" });
    }
  }
  sendRaw(e) {
    let r = this.ws;
    if (!r || r.readyState !== K) return false;
    try {
      r.send(e);
    } catch (o) {
      return (0, import_chunk_w578pjby.t)(`[deviceBridge] raw send failed: ${(0, import_chunk_jv7av99m.D)(o).message}`), false;
    }
    return true;
  }
  isAuthenticated() {
    return this.authenticated;
  }
  isConnected() {
    return this.ws !== void 0;
  }
  getNegotiated() {
    return this.negotiated;
  }
  async openConnection() {
    if (this.closing || this.ws) return;
    let e = ++this.connectGeneration, r = await this.resolveAccessToken();
    if (e !== this.connectGeneration || this.closing || this.ws !== void 0) return;
    if (!r) {
      this.emit({ kind: "token_unavailable" });
      return;
    }
    let o, s;
    try {
      o = this.options.getUrl(), s = (this.options.isAllowedUrl ?? import_chunk_2mwshd9r.dIs)(o);
    } catch (h) {
      this.emit({ kind: "dial_failed", error: (0, import_chunk_jv7av99m.D)(h) });
      return;
    }
    if (!s) {
      (0, import_chunk_w578pjby.t)("[deviceBridge] refusing dial: bridge URL failed validation"), this.emit({ kind: "dial_failed", error: Error("bridge URL failed validation") });
      return;
    }
    let d;
    try {
      d = (this.options.createSocket ?? Pe)(o);
    } catch (h) {
      this.emit({ kind: "dial_failed", error: (0, import_chunk_jv7av99m.D)(h) });
      return;
    }
    if (this.ws = d, this.pendingToken = r, this.handshakeTimer = setTimeout(this.handleHandshakeTimeout, import_chunk_syr33dp2.uBi), d.addEventListener("open", this.handleOpen), d.addEventListener("message", this.handleMessage), d.addEventListener("close", this.handleClose), d.addEventListener("error", this.handleSocketError), this.emit({ kind: "connecting" }), this.closing || this.ws !== d) return;
    if (d.readyState === K) this.handleOpen();
  }
  async resolveAccessToken() {
    let e;
    try {
      let r = await Promise.race([Promise.resolve(this.options.getAccessToken()), new Promise((o) => {
        e = setTimeout((s) => s(ce), import_chunk_syr33dp2.uBi, o);
      })]);
      if (r === ce) {
        (0, import_chunk_w578pjby.t)("[deviceBridge] access token resolution timed out");
        return;
      }
      if (r !== void 0 && (0, import_chunk_n25gt70y.Mct)(r)) {
        (0, import_chunk_w578pjby.t)("[deviceBridge] the desktop app's sign-in is not sent to the bridge");
        return;
      }
      return r;
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] access token resolution failed: ${(0, import_chunk_jv7av99m.D)(r).message}`);
      return;
    } finally {
      if (e !== void 0) clearTimeout(e);
    }
  }
  disconnect() {
    this.connectGeneration++, this.clearHandshakeTimer(), this.pendingToken = void 0, this.authenticated = false, this.negotiated = void 0;
    let e = this.ws;
    if (!e) return;
    if (this.ws = void 0, e.removeEventListener("open", this.handleOpen), e.removeEventListener("message", this.handleMessage), e.removeEventListener("close", this.handleClose), e.removeEventListener("error", this.handleSocketError), e.readyState === K || e.readyState === Ae) try {
      e.close();
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] socket close failed: ${(0, import_chunk_jv7av99m.D)(r).message}`);
    }
  }
  emit(e) {
    try {
      this.onevent?.(e);
    } catch (r) {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] transport event listener threw: ${(0, import_chunk_jv7av99m.D)(r).message}`);
    }
  }
  clearHandshakeTimer() {
    if (this.handshakeTimer === void 0) return;
    clearTimeout(this.handshakeTimer), this.handshakeTimer = void 0;
  }
  handleHandshakeTimeout = () => {
    if (this.handshakeTimer = void 0, !this.ws || this.authenticated) return;
    this.disconnect(), this.emit({ kind: "handshake_timeout" });
  };
  handleOpen = () => {
    let e = this.ws, r = this.pendingToken;
    if (!e || r === void 0) return;
    this.pendingToken = void 0;
    try {
      e.send((0, import_chunk_w578pjby._)((0, import_chunk_syr33dp2.Qbl)({ oauthToken: r, tools: this.options.getTools(), deviceId: this.options.getDeviceId?.(), sessionId: this.options.getSessionId() })));
    } catch (o) {
      this.disconnect(), this.emit({ kind: "dial_failed", error: (0, import_chunk_jv7av99m.D)(o) });
    }
  };
  handleMessage = (e) => {
    let r = xe(e.data);
    if (r.kind === "unsupported") {
      (0, import_chunk_w578pjby.t)("[deviceBridge] dropping unsupported inbound payload type"), this.emit({ kind: "inbound_invalid", error: Error("unsupported inbound payload type") });
      return;
    }
    if (r.kind === "oversize") {
      (0, import_chunk_w578pjby.t)(`[deviceBridge] dropping ${r.size}-unit inbound frame (cap ${V})`), this.emit({ kind: "inbound_invalid", error: Error("inbound frame exceeded the device bridge size cap") });
      return;
    }
    let o = (0, import_chunk_syr33dp2.Zbl)(r.text);
    switch (o.kind) {
      case "ignored":
        if (this.authenticated) (0, import_chunk_w578pjby.t)("[deviceBridge] dropping unparseable inbound frame"), this.emit({ kind: "inbound_invalid", error: Error("unparseable inbound frame") });
        return;
      case "hb_ack":
        this.emit({ kind: "hb_ack" });
        return;
      case "error":
        this.handleReject(o.reason, o.status, o.detail);
        return;
      case "connected":
        this.authenticate(o.protocolVersion, o.timings);
        return;
      case "unknown":
        this.emit({ kind: "inbound_unknown", frameType: o.frameType });
        return;
      case "rpc":
        this.deliver(o.message);
        return;
    }
  };
  authenticate(e, r) {
    if (this.authenticated) return;
    if (this.clearHandshakeTimer(), this.authenticated = true, this.negotiated = { protocolVersion: e, timings: r }, this.emit({ kind: "authenticated", protocolVersion: e, timings: r }), this.closing || this.ws === void 0) return;
    this.injectSyntheticInitialize();
  }
  injectSyntheticInitialize() {
    let e;
    try {
      e = this.options.parseMessage(Ie());
    } catch (r) {
      this.emit({ kind: "inbound_invalid", error: (0, import_chunk_jv7av99m.D)(r) });
      return;
    }
    try {
      this.onmessage?.(e);
    } catch (r) {
      this.emit({ kind: "inbound_invalid", error: (0, import_chunk_jv7av99m.D)(r) });
    }
  }
  handleReject(e, r, o) {
    let s = !this.authenticated;
    this.disconnect(), this.emit({ kind: "rejected", phase: s ? "pre_auth" : "post_auth", reason: e, status: r, detail: o, slotContention: s && (0, import_chunk_syr33dp2.Jbl)(e) });
  }
  deliver(e) {
    if (!this.authenticated) return;
    let r;
    try {
      r = this.options.parseMessage(e);
    } catch (o) {
      this.emit({ kind: "inbound_invalid", error: (0, import_chunk_jv7av99m.D)(o) }), this.replyInternalError(e);
      return;
    }
    try {
      this.onmessage?.(r);
    } catch (o) {
      this.emit({ kind: "inbound_invalid", error: (0, import_chunk_jv7av99m.D)(o) }), this.replyInternalError(e);
    }
  }
  replyInternalError(e) {
    let r = ne(e);
    if (r === void 0) return;
    this.sendRaw((0, import_chunk_w578pjby._)({ jsonrpc: "2.0", id: r, error: { code: Oe, message: "internal error" } }));
  }
  handleClose = (e) => {
    let r = this.authenticated ? "post_auth" : "pre_auth", o = typeof e.code === "number" ? e.code : void 0, s = typeof e.reason === "string" ? e.reason : void 0;
    this.disconnect(), this.emit({ kind: "closed", phase: r, code: o, reason: s, superseded: o === import_chunk_syr33dp2.Xbl });
  };
  handleSocketError = () => {
    this.emit({ kind: "socket_error" });
  };
}
function Ie() {
  return { jsonrpc: "2.0", id: ue, method: "initialize", params: { protocolVersion: "2024-11-05", capabilities: {}, clientInfo: { name: "remote-tools-bridge", version: "1.0.0" } } };
}
function Me(e) {
  return "id" in e && e.id === ue && ("result" in e || "error" in e);
}
var Le = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ jsonrpc: (0, import_chunk_adx6804h.v)("2.0"), id: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.E)()]), method: (0, import_chunk_adx6804h.n)(), result: (0, import_chunk_adx6804h.VA)().optional(), error: (0, import_chunk_adx6804h.VA)().optional() }));
function ne(e) {
  let r = Le().safeParse(e);
  return r.success ? r.data.id : void 0;
}
function xe(e) {
  if (typeof e === "string") return e.length > V ? { kind: "oversize", size: e.length } : { kind: "text", text: e };
  if (e instanceof ArrayBuffer) return e.byteLength > V ? { kind: "oversize", size: e.byteLength } : { kind: "text", text: Buffer.from(e).toString("utf8") };
  if (ArrayBuffer.isView(e)) return e.byteLength > V ? { kind: "oversize", size: e.byteLength } : { kind: "text", text: Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") };
  return { kind: "unsupported" };
}
function pe(e) {
  return { policy: e.policy, get description() {
    return e.description;
  }, onRedescribed: e.onRedescribed, heldServedCall: e.heldServedCall, mcpTaskAsk: e.mcpTaskAsk, ensureSettingsHeld: e.ensureSettingsHeld, deps: e.deps };
}
function he(e) {
  let r = () => (0, import_chunk_w578pjby._)([e.definitionsOf(import_chunk_w41hvvf2.Nkn), e.definitionsOf(import_chunk_w41hvvf2.eMt)]);
  return { native: () => e.definitionsOf(import_chunk_w41hvvf2.Nkn).flatMap(Ne), passthrough: () => e.definitionsOf(import_chunk_w41hvvf2.eMt).flatMap(le), localNameFor: (o) => e.definitionsOf(import_chunk_w41hvvf2.eMt).filter((s) => s.name === o).flatMap(le)[0]?.local_name, subscribe: (o) => {
    let s = r();
    return e.subscribe((d) => {
      let h = r();
      if (h !== s) s = h, o(d);
    });
  } };
}
function Ne(e) {
  let r = (0, import_chunk_syr33dp2.awo)(e._meta?.[import_chunk_syr33dp2._4]);
  return r === void 0 ? [] : [{ name: e.name, refused_input_fields: r.refused_input_fields, protocol_versions: r.protocol_versions ?? [import_chunk_syr33dp2.Zm], description: e.description, input_schema: e.inputSchema }];
}
function le(e) {
  let r = (0, import_chunk_rts2v6y0.dnr)(e._meta?.[import_chunk_rts2v6y0.Pqe]);
  if (r === void 0) return [];
  let o = Ue(e.annotations ?? {}), s = Fe(e._meta ?? {});
  return [{ name: e.name, local_name: r.tool, description: e.description, input_schema: e.inputSchema, ...o !== void 0 && { annotations: o }, ...s !== void 0 && { hints: s } }];
}
function Ue({ title: e, readOnlyHint: r, destructiveHint: o, openWorldHint: s }) {
  let d = { ...e !== void 0 && { title: e }, ...r !== void 0 && { readOnlyHint: r }, ...o !== void 0 && { destructiveHint: o }, ...s !== void 0 && { openWorldHint: s } };
  return Object.keys(d).length > 0 ? d : void 0;
}
function Fe(e) {
  let r = e[import_chunk_syr33dp2.J7.searchHint], o = e[import_chunk_syr33dp2.J7.alwaysLoad], s = e[import_chunk_syr33dp2.J7.maxResultSizeChars], d = e[import_chunk_syr33dp2.J7.requiresUserInteraction], h = { ...typeof r === "string" && { search_hint: r }, ...o === true && { always_load: true }, ...typeof s === "number" && { max_result_size_chars: s }, ...d === true && { requires_user_interaction: true }, ...e[import_chunk_syr33dp2.J7.reportsUploads] === true && { reports_uploads: true } };
  return Object.keys(h).length > 0 ? h : void 0;
}
var He = "wss://bridge.claudeusercontent.com", $e = "wss://bridge-staging.claudeusercontent.com", ve = 8, ze = "served-bridge-trusted-devices", me = typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" } < "u" ? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION : "unknown";
function Ke(e, r) {
  let o = (0, import_chunk_syr33dp2.Wdn)(e), s = (0, import_chunk_syr33dp2.$bo)((0, import_chunk_t39bs2jr.Un)(r).slice(-ve), ve);
  return s ? `${o}-cc-${s}` : o;
}
function Ve(e, r, o, s) {
  return `${e}/devices/${encodeURIComponent(r)}_${encodeURIComponent(o)}/${encodeURIComponent(s)}/bridge`;
}
function qe(e, r) {
  let o, s;
  try {
    o = new URL(e), s = new URL(r);
  } catch {
    return false;
  }
  let d = (0, import_chunk_dvkg7v5x.DM)(o.hostname);
  return o.origin === s.origin && o.username === "" && o.password === "" && (o.protocol === "wss:" || o.protocol === "ws:" && d);
}
function Ye() {
  if (import_chunk_c203g5kd.So.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0) return import_chunk_c203g5kd.So.CLAUDE_REMOTE_TOOLS_BRIDGE_URL;
  switch ((0, import_chunk_ephf358x.PI)()) {
    case "":
      return He;
    case "-staging-oauth":
      return $e;
    default:
      return;
  }
}
function J5n(e) {
  let r = e.transport ?? ((0, import_chunk_d775ds6c.z5)() ? "bridge" : "auto"), o = false, s, d, h, k, y = false, P = false, g = false, R = /* @__PURE__ */ new Set(), x = false, w, C, b = { current: void 0 }, A, M = (l) => k ??= q(l), q = async (l) => {
    if (o = true, d?.(), d = void 0, y) await I.catch(() => false);
    s?.(), s = void 0, h?.(), h = void 0, b.current?.kit.dispose();
    let T = A?.dispose();
    A = void 0, await G(l), await T;
  }, G = async (l) => {
    let T = w;
    if (T === void 0) return;
    if (w = void 0, await T.stop(), P) (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_stopped", { reason: (0, import_chunk_78g0060s.f)(l) });
  }, Y = async () => {
    let l = e.readiness ?? (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qw6jtfym.js")))).createServingReadiness(), T = performance.now();
    await l.whenReady();
    let Q = Math.round(performance.now() - T), { cloudClient: H } = e, X = await (e.isEnabled ?? (() => (0, import_chunk_9mhdzhnn.t6s)({ cloudClient: H })))();
    if (y = true, !X) return false;
    let F = e.isEgressAllowed ?? import_chunk_sak3f2zv.c4e;
    if (!F()) return (0, import_chunk_w578pjby.t)("[deviceBridge] skipped: non-essential egress disabled, non-first-party provider, or remote sessions policy-denied"), false;
    if (o) return false;
    if (r === "bridge" && (e.isBridgeRefused ?? import_chunk_sg5zbskk.aGi)()) return (0, import_chunk_w578pjby.t)("[deviceBridge] skipped: the bridge cannot check a device proof and trusted devices are required or unknown"), g = true, (0, import_chunk_cqa9hrgx.m)("device_bridge_register", "trusted_devices_required_or_unknown"), e.onNotice?.(ze, import_chunk_r9ecxfn9._l["serving_off.bridge_trusted_devices"]), false;
    let L = await (e.getAccount ?? import_chunk_7zd54r6w.Y2)(), W = e.orgUuid;
    if (!W || L.status !== "resolved") return (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_skipped", { missing_org: W === void 0, missing_account: L.status === "missing", account_mismatch: L.status === "mismatch" }), (0, import_chunk_w578pjby.t)(`[deviceBridge] skipped: ${W ? `account ${L.status}` : "no org"}`), false;
    let { accountUuid: _e } = L, be = (0, import_chunk_w41hvvf2.n2r)(import_chunk_w41hvvf2.t2r);
    if (C = de(), C.setGroup(import_chunk_w41hvvf2.XWo, []), await (0, import_chunk_d775ds6c.nje)(), o) return false;
    let z = (0, import_chunk_d775ds6c.jae)(void 0, { ignoringMute: true });
    if (z === void 0) {
      if (await (0, import_chunk_67x4acbe.Mkn)(), o) return false;
    }
    let ie = z === void 0 && (0, import_chunk_35rmjae5.u8t)() ? await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3yr0h2e0.js"))).then((S) => S.gatherHostInventory((0, import_chunk_f9x2f6cx.Te)())).catch((S) => {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(S));
      return;
    }) : void 0;
    if (o) return false;
    let tn = void 0, rn = void 0, ye = e.toolGroupProviders ?? await Ze(z);
    if (o) return false;
    let Z = [];
    h = en(ye, { registry: C, holdStartUntil: (S) => Z.push(S), sessionId: e.sessionId, serving: { offReason: z }, getDeviceId: e.getDeviceId ?? (() => {
      return;
    }), limiter: be, storageV5: e.storageV5, servedSettingsChanged: e.servedSettingsChanged, ...e.deviceMcpQuestion && { deviceMcpQuestion: e.deviceMcpQuestion }, servingKit: b, transport: r, readiness: l, ...ie !== void 0 && { hostInventory: ie }, ...A !== void 0 && { execution: A.execution }, sandboxRequiredNow: import_chunk_d775ds6c.B9e, ...e.dirSync !== void 0 && { dirSync: e.dirSync }, ...e.folderRelation !== void 0 && { folderRelation: e.folderRelation }, onNotice: e.onNotice ?? ((S, Ce) => {
      (0, import_chunk_w578pjby.t)(`[remote-tools] ${S}: ${Ce}`);
    }) }), (0, import_chunk_w578pjby.t)(`[deviceBridge] start-up held on ${Z.length} reads of its tool groups`);
    let Se = performance.now();
    await Promise.allSettled(Z);
    let re = Math.round(performance.now() - Se);
    if ((0, import_chunk_w578pjby.t)(`[deviceBridge] start-up released after ${re} ms`), o) return false;
    let Re = C;
    if (r === "bridge") {
      if (w = await Je({ options: e, orgUuid: W, accountUuid: _e, registry: Re, isEgressAllowed: F, isStopped: () => o, onLivenessEvent: j, onTransportEvent: N }), w === void 0 || o) return await w?.stop(), w = void 0, false;
    }
    let oe = () => {
      if (!F()) M("egress_denied");
    }, Ee = e.isStillEnabled ?? (() => (0, import_chunk_9mhdzhnn.qmt)({ cloudClient: H }) === void 0), se = () => {
      if (!Ee()) (0, import_chunk_w578pjby.t)("[deviceBridge] stopping: the gate turned off"), M("gate_off");
    }, De = (e.onEgressGateChange ?? import_chunk_2zeyvjwb.s3)(oe), we = (e.onEnabledChange ?? import_chunk_865at33z.ys)(se);
    if (d = () => {
      De(), we();
    }, oe(), se(), o) return false;
    if (P = true, (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_started", { account_source: (0, import_chunk_78g0060s.f)(L.source), transport: (0, import_chunk_78g0060s.f)(r), redial: false, readiness_wait_ms: Q, held_ms: re }), r === "auto" && !g) g = true, (0, import_chunk_cqa9hrgx.u)("device_bridge_register");
    return w?.start(), true;
  }, N = (l) => {
    if (l.kind === "authenticated") {
      if (R.clear(), x = false, !g) g = true, (0, import_chunk_cqa9hrgx.u)("device_bridge_register");
      ge(l);
      return;
    }
    let T = Qe(l);
    if (T === void 0) return;
    if (R.has(T)) return;
    R.add(T), ge(l);
  }, j = (l) => {
    if (l.kind === "reconnect_exhausted") {
      if (!g) g = true, (0, import_chunk_cqa9hrgx.m)("device_bridge_register", "reconnect_exhausted");
      if (x) return;
      x = true;
    }
    Xe(l);
  };
  s = (e.registerExitCleanup ?? import_chunk_w578pjby.Ct)(() => M("exit"));
  let I = Y().catch((l) => {
    if ((0, import_chunk_w578pjby.t)(`[deviceBridge] registration failed: ${(0, import_chunk_jv7av99m.D)(l).message}`), (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_start_failed", {}), !g) g = true, (0, import_chunk_cqa9hrgx.m)("device_bridge_register", "start_failed");
    return false;
  }), J = I.then((l) => l && C !== void 0 && b.current !== void 0 ? { kit: pe(b.current.kit), source: he(C) } : void 0);
  return I.then((l) => {
    if (!l && !o) s?.(), s = void 0, h?.(), h = void 0, b.current?.kit.dispose(), A?.dispose(), A = void 0;
  }), { started: I, announceSettled: (l) => {
    if (l.kind === "announced" && b.current !== void 0) b.current.kit.workerReads = l.workerCapabilities ?? [];
  }, serving: J, stop: () => M("attach_ended"), heldServedCall: (l) => o || b.current === void 0 ? import_chunk_d1nhs44g.Kse : b.current.kit.heldServedCall(l) };
}
async function Je({ options: e, orgUuid: r, accountUuid: o, registry: s, isEgressAllowed: d, isStopped: h, onLivenessEvent: k, onTransportEvent: y }) {
  let P = Ke((e.getHostname ?? import_os.hostname)(), e.sessionId), g = e.getBridgeBaseUrl !== void 0 || import_chunk_c203g5kd.So.CLAUDE_REMOTE_TOOLS_BRIDGE_URL !== void 0, R = (e.getBridgeBaseUrl ?? Ye)();
  if (R === void 0) {
    (0, import_chunk_w578pjby.t)("[deviceBridge] skipped: no device bridge for this OAuth environment");
    return;
  }
  let x = Ve(R, r, o, P), { createDeviceMcpServer: w, deviceInfoProbeTool: C, parseJsonRpcMessage: b } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bv6hpry6.js")));
  if (h()) return;
  let A = { getDeviceName: () => P, version: me }, M = C(A), q = C({ ...A, idle: true }), G = (O) => {
    let X = s.definitions().every((F) => F.name === M.definition.name);
    s.setGroup(import_chunk_w41hvvf2.XWo, [X ? q : M], O);
  };
  G();
  let Y = s.subscribe(G), N = () => {
    Y(), s.setGroup(import_chunk_w41hvvf2.XWo, []);
  }, j = new te({ getUrl: () => x, getAccessToken: () => e.getAccessToken(), getTools: () => nn(s), getDeviceId: e.getDeviceId, getSessionId: () => (0, import_chunk_t39bs2jr.Pu)(e.sessionId), parseMessage: b, createSocket: e.createSocket, isAllowedUrl: (O) => d() && ((0, import_chunk_2mwshd9r.dIs)(O) || g && qe(O, R)) }), { server: I, inFlightCalls: J, whenIdle: l } = w({ registry: s, version: me, sessionId: e.sessionId });
  try {
    await I.connect(j);
  } catch (O) {
    throw N(), O;
  }
  if (h()) {
    N(), await I.close();
    return;
  }
  let T = new ee({ transport: j, announced: { hasUnservedChange: s.hasUnservedChange, inFlightCalls: J, whenIdle: l }, onEvent: k, onTransportEvent: y }), Q = s.subscribe((O) => T.requestReannounce(O)), H;
  return { start: () => T.start(), stop: () => H ??= (async () => {
    Q(), N(), await Promise.allSettled([T.stop(), I.close()]);
  })() };
}
function Qe(e) {
  switch (e.kind) {
    case "rejected":
      return `rejected:${e.phase}:${e.reason ?? ""}:${e.status ?? ""}`;
    case "closed":
      return `closed:${e.phase}:${e.code ?? ""}:${e.superseded}`;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
    case "dial_failed":
      return e.kind;
    default:
      return;
  }
}
function ge(e) {
  switch (e.kind) {
    case "authenticated":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_connected", { protocol_version: e.protocolVersion, hb_interval_ms: e.timings.hbIntervalMs, staleness_ms: e.timings.stalenessMs, rpc_timeout_ms: e.timings.rpcTimeoutMs });
      return;
    case "rejected":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_rejected", { phase: (0, import_chunk_78g0060s.f)(e.phase), reason: (0, import_chunk_78g0060s.fe)(e.reason), status: (0, import_chunk_78g0060s.ove)(e.status), slot_contention: e.slotContention });
      return;
    case "closed":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_closed", { phase: (0, import_chunk_78g0060s.f)(e.phase), code: (0, import_chunk_78g0060s.ove)(e.code), superseded: e.superseded });
      return;
    case "token_unavailable":
    case "handshake_timeout":
    case "socket_error":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_connect_failed", { cause: (0, import_chunk_78g0060s.f)(e.kind) });
      return;
    case "dial_failed":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_connect_failed", { cause: (0, import_chunk_78g0060s.f)("dial_failed") });
      return;
    default:
      return;
  }
}
function Xe(e) {
  switch (e.kind) {
    case "pong_timeout":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_pong_timeout", { consecutive: e.consecutive });
      return;
    case "reconnect_exhausted":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_reconnect_exhausted", {});
      return;
    case "heartbeat_unsupported":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_heartbeat_unsupported", { protocol_version: (0, import_chunk_78g0060s.Gs)(e.protocolVersion) });
      return;
    case "reannounce":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_reannounce", { reason: (0, import_chunk_78g0060s.f)(e.reason), outcome: (0, import_chunk_78g0060s.f)(e.outcome), inflight_at_start: e.inFlightAtStart, drained_ms: e.drainedMs, drain_timed_out: e.drainTimedOut });
      return;
    case "reannounce_contended":
      (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_reannounce_contended", { reason: (0, import_chunk_78g0060s.f)(e.reason) });
      return;
    default:
      return;
  }
}
async function Ze(e) {
  if (e === void 0 || (0, import_chunk_d775ds6c.Vwt)(e)) try {
    let [{ remoteToolServingGroupProvider: r }, { passthroughServingGroupProvider: o }, s] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xvz6491w.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-b842mtj4.js"))), void 0]);
    return e === void 0 ? [r(), o(), ...[]] : [r()];
  } catch (r) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r));
  }
  return [];
}
function en(e, r) {
  let o = e.flatMap((s) => {
    try {
      let d = s(r);
      return d ? [d] : [];
    } catch (d) {
      return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(d)), [];
    }
  });
  return () => o.forEach((s) => {
    try {
      s();
    } catch (d) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(d));
    }
  });
}
function nn(e) {
  let r = e.hasUnservedChange(), o = e.serve();
  if (!r) return o;
  let s = o.map((d) => d.name);
  return (0, import_chunk_w578pjby.t)(`[deviceBridge] connect frame announces ${o.length} tools: ${s.slice(0, 12).join(", ")}${s.length > 12 ? ", \u2026" : ""}`), (0, import_chunk_y53wbr8a.a)("tengu_device_bridge_connect_frame", { tool_count: o.length, serves_bash: s.includes(import_chunk_hn3cwwzt.ke), serves_powershell: s.includes(import_chunk_rb36kwbn.yt), mcp_tool_count: (0, import_chunk_4smdap7r.U)(s, (d) => d.includes("__")) }), o;
}
