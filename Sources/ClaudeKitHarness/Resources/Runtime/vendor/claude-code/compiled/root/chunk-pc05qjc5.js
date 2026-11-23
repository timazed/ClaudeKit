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
var chunk_pc05qjc5_exports = {};
__export(chunk_pc05qjc5_exports, {
  $ha: () => $ha,
  y5t: () => y5t
});
module.exports = __toCommonJS(chunk_pc05qjc5_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_1rt0shj8 = require("/$bunfs/root/chunk-1rt0shj8.js");
var import_chunk_1ksp50wj = require("/$bunfs/root/chunk-1ksp50wj.js");
var import_chunk_wwft95x8 = require("/$bunfs/root/chunk-wwft95x8.js");
var a = 256, $ha = { prompt: "user", host_prompt: "user", hook: "hook", classifier: "classifier" };
class o {
  callId;
  toolName;
  hostName;
  dispatchEpoch;
  issuedAt;
  claimedMode;
  inputFieldsCut;
  card;
  #e;
  #i;
  #h;
  #a;
  #l = false;
  #s;
  #u;
  #m;
  #n;
  #d;
  #r = "none";
  #c;
  #k;
  #f = 0;
  #y = 0;
  #w = 0;
  #g;
  #A = false;
  #b = /* @__PURE__ */ new Map();
  #v = /* @__PURE__ */ new Map();
  #o;
  #t;
  constructor(e) {
    this.callId = e.callId, this.toolName = e.toolName, this.hostName = e.hostName, this.dispatchEpoch = e.dispatchEpoch, this.#k = e.onAskEnded, this.#t = e.now, this.issuedAt = e.now();
  }
  get phase() {
    if (this.#o !== void 0) return "settled";
    if (this.#n !== void 0) return "asking";
    return this.#s === void 0 ? "pending" : "sent";
  }
  get instanceId() {
    return this.#e;
  }
  get sentUnderEpoch() {
    return this.#i ?? this.dispatchEpoch;
  }
  get carryingRequestId() {
    return this.#h;
  }
  get inheritedRequestId() {
    return this.#a?.requestId;
  }
  get inheritedWithdrawn() {
    return this.#l;
  }
  inherit(e, t) {
    this.#a = { requestId: e, withdraw: t };
  }
  withdrawInherited() {
    if (this.#a === void 0 || this.#l) return false;
    return this.#l = true, (0, import_chunk_1rt0shj8.Ip)(this.callId, "inherited standing request withdrawn", { host_inst: this.#e }), this.#a.withdraw(), true;
  }
  get ask() {
    return this.#n;
  }
  get askEnded() {
    return this.#d;
  }
  get askOutstanding() {
    return this.#r === "raised" || this.#r === "asking";
  }
  get elapsedMs() {
    return (this.#o?.at ?? this.#t()) - this.issuedAt;
  }
  get queuedMs() {
    return this.#y;
  }
  get askSeatWaitMs() {
    return this.#w;
  }
  get reconnectHoldMs() {
    return this.#g;
  }
  get sentWithoutAskSeat() {
    return this.#A;
  }
  noteSentWithoutAskSeat() {
    this.#A = true;
  }
  get askingMs() {
    return this.#n === void 0 ? this.#f : this.#f + (this.#t() - this.#n.since);
  }
  get settled() {
    return this.#o;
  }
  get wireName() {
    return this.#s?.wireName;
  }
  get fingerprint() {
    if (this.#u === void 0 && this.#s !== void 0) this.#u = (0, import_chunk_1ksp50wj.Oae)(this.#s.wireName, this.#s.input);
    return this.#u;
  }
  get askedAboutKey() {
    if (this.#s === void 0) return;
    return import_chunk_wwft95x8.dp.includes(this.toolName) ? (0, import_chunk_1ksp50wj.Oae)(this.#s.wireName, { command: this.#s.input.command }) : this.fingerprint;
  }
  sent(e) {
    this.#s = e, this.#u = void 0;
  }
  questionRaised() {
    this.#r = "raised";
  }
  answeredWithoutPrompt() {
    this.#r = this.#d === void 0 ? "answered" : "none";
  }
  get approvedBy() {
    return this.#c;
  }
  recordApprovedBy(e) {
    this.#c = e;
  }
  recordAddressee(e, t, n) {
    if (this.#e !== void 0 && this.#e !== e) this.#d = void 0;
    this.#e = e, this.#i ??= t, this.#h = n ?? this.#h;
  }
  beginQueuedWait() {
    let e = this.#t(), t = false;
    return () => {
      if (t) return;
      t = true, this.#y += this.#t() - e;
    };
  }
  beginAskSeatWait() {
    let e = this.#t(), t = false;
    return () => {
      if (t) return;
      t = true, this.#w += this.#t() - e;
    };
  }
  beginReconnectHold() {
    let e = this.#t();
    return this.#g = 0, () => {
      this.#g = this.#t() - e;
    };
  }
  legTransit(e) {
    return this.#b.get(e);
  }
  recordLegTransit(e, t) {
    this.#b.set(e, t);
  }
  sentFormat(e) {
    return this.#v.get(e);
  }
  recordSentFormat(e, t) {
    this.#v.set(e, t);
  }
  get held() {
    return this.#m;
  }
  hold(e) {
    this.#m = e;
  }
  async whileAsking(e, t, n) {
    if (this.#p(), this.#r = "asking", this.#n = { ...e, since: this.#t() }, this.#d !== void 0) e.end?.(this.#d);
    let s = new AbortController(), i, d = () => {
      if (n === void 0 || s.signal.aborted) return;
      i?.abort();
      let r = new AbortController();
      i = r, (0, import_chunk_5appeerh.K)(n.afterMs, r.signal).then(() => {
        if (!r.signal.aborted && !s.signal.aborted) (0, import_chunk_1rt0shj8.Ip)(this.callId, "ask lapsed unanswered", { ask_id: e.askId, after_ms: n.afterMs }), this.endAsk(n.reason);
      });
    };
    d();
    try {
      return await t({ hold: () => i?.abort(), resume: d });
    } finally {
      s.abort(), i?.abort(), this.#r = this.#d === void 0 ? "answered" : "none", this.#p();
    }
  }
  endAsk(e) {
    if (this.#d !== void 0) return;
    this.#d = e, (0, import_chunk_1rt0shj8.Ip)(this.callId, "ask ended without an answer", { reason: e, ask_id: this.#n?.askId, host_inst: this.#e, showing: this.#n?.end !== void 0 }), this.#n?.end?.(e), this.#k?.(e);
  }
  #p() {
    if (this.#n === void 0) return;
    this.#f += this.#t() - this.#n.since, this.#n = void 0;
  }
  markSettled(e) {
    if (this.#o !== void 0) return;
    return this.#p(), this.#o = { outcome: e.kind === "completed" ? { kind: "completed", disposition: e.disposition } : { kind: "error", code: e.code }, at: this.#t() }, this.#o;
  }
}
class y5t {
  now = Date.now;
  #e = /* @__PURE__ */ new Map();
  #i = [];
  begin(e) {
    let t = new o({ ...e, now: this.now });
    return this.#e.set(e.callId, t), t;
  }
  settle(e, t) {
    let n = e.markSettled(t);
    if (n === void 0) return;
    if (this.#e.get(e.callId) === e) this.#e.delete(e.callId);
    this.remember({ callId: e.callId, toolName: e.toolName, hostName: e.hostName, fingerprint: e.fingerprint, asked: e.card !== void 0, askedAboutKey: e.askedAboutKey, ...n });
  }
  get(e) {
    return this.#e.get(e);
  }
  addressedTo(e) {
    let t = [];
    for (let n of this.#e.values()) if (n.instanceId === e) t.push(n);
    return t;
  }
  recentByFingerprint(e, t) {
    let n = [], s = this.now();
    for (let i = this.#i.length - 1; i >= 0; i -= 1) {
      let d = this.#i[i];
      if (s - d.at > t) break;
      if (d.fingerprint === e) n.push(d);
    }
    return n;
  }
  askedAboutBefore(e) {
    let t = e.askedAboutKey;
    return t !== void 0 && this.#i.some((n) => n.asked && n.askedAboutKey === t && n.callId !== e.callId);
  }
  remember(e) {
    let t = { ...e, at: Math.min(e.at, this.now()) }, n = this.#i.findLastIndex((s) => s.at <= t.at);
    if (this.#i.splice(n + 1, 0, t), this.#i.length > a) this.#i.shift();
  }
}
