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
var chunk_mvszxaxb_exports = {};
__export(chunk_mvszxaxb_exports, {
  Sbe: () => Sbe,
  Zo: () => Zo,
  fin: () => fin
});
module.exports = __toCommonJS(chunk_mvszxaxb_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var y = 2048;
class t {
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Set();
  record(e, n) {
    if (n.msg_id === void 0) return;
    let r = this.#e.get(e);
    if (r === void 0) r = /* @__PURE__ */ new Map(), this.#e.set(e, r);
    if (r.set(n.msg_id, i(n)), !this.#n.has(e)) h(r);
  }
  wrote(e, n) {
    return n.msg_id !== void 0 && this.#e.get(e)?.get(n.msg_id) === i(n);
  }
  retire(e, n) {
    let r = new Set(n);
    this.#r(e, (s) => !r.has(s));
  }
  retain(e, n) {
    this.#n.add(e), this.#r(e, (r) => n.has(r));
  }
  forget(e) {
    this.#e.delete(e);
  }
  #r(e, n) {
    let r = this.#e.get(e);
    if (r === void 0) return;
    for (let s of r.keys()) if (!n(s)) r.delete(s);
    if (r.size === 0) this.#e.delete(e);
  }
}
function h(e) {
  if (e.size <= y) return;
  let [n] = e.keys();
  if (n !== void 0) e.delete(n);
}
function i(e) {
  return (0, import_crypto.createHash)("sha256").update((0, import_chunk_w578pjby._)([e.from, e.timestamp, e.text, e.summary ?? null, e.color ?? null, e.from_plugin ?? null])).digest("hex");
}
class d {
  getCurrentMode = null;
  modeAtUnwire = void 0;
  onPeerHeld = null;
  onPeerHoldReleased = null;
  onPeerHoldDropped = null;
  #e = null;
  servedMessages = /* @__PURE__ */ new Map();
  servedReportsAt = [];
  reportServedOutcome = null;
  get sendPeerReceipt() {
    let e = this.#e, n = this.reportServedOutcome;
    if (n === null) return e;
    return async (r, s, o) => {
      await Promise.all([r.overSocket ? void 0 : n(r.uuid, s, o?.dropReason), e?.(r, s, o)]);
    };
  }
  set sendPeerReceipt(e) {
    this.#e = e;
  }
  recordCorrespondent = null;
  publishAvailability = null;
  unsubscribeAvailabilityRefresh = null;
  shutdownSettleHandle = null;
  shuttingDown = false;
  held = [];
  announced = /* @__PURE__ */ new WeakMap();
  senders = /* @__PURE__ */ new WeakMap();
  alwaysDeliver = void 0;
  waitedForRoom = /* @__PURE__ */ new WeakSet();
  retryRelease = void 0;
  endAlwaysDeliver() {
    this.alwaysDeliver?.stopWatching(), this.alwaysDeliver = void 0;
  }
  reset() {
    this.held.length = 0, this.endAlwaysDeliver(), clearTimeout(this.retryRelease), this.retryRelease = void 0, this.getCurrentMode = null, this.modeAtUnwire = void 0, this.onPeerHeld = null, this.onPeerHoldReleased = null, this.onPeerHoldDropped = null, this.shutdownSettleHandle?.(), this.shutdownSettleHandle = null, this.shuttingDown = false, this.sendPeerReceipt = null, this.servedMessages.clear(), this.servedReportsAt = [], this.reportServedOutcome = null, this.recordCorrespondent = null, this.publishAvailability = null, this.unsubscribeAvailabilityRefresh?.(), this.unsubscribeAvailabilityRefresh = null;
  }
}
class l {
  outstandingSends = [];
  awaitingTerminal = [];
  remoteLooks = /* @__PURE__ */ new Map();
  watchedDrops = /* @__PURE__ */ new Set();
  wokeForHold = /* @__PURE__ */ new Set();
  reset() {
    this.outstandingSends.length = 0, this.awaitingTerminal.length = 0, this.remoteLooks.forEach(clearTimeout), this.remoteLooks.clear(), this.watchedDrops.clear(), this.wokeForHold.clear();
  }
}
class a {
  pacer = null;
  reset() {
    this.pacer = null;
  }
}
class u {
  ownUdsHopToken = void 0;
  ownBridgePeerAddressResolver = void 0;
  messageDropped = (0, import_chunk_69qhefwa.Be)();
  reset() {
    this.ownUdsHopToken = void 0, this.ownBridgePeerAddressResolver = void 0, this.messageDropped.clear();
  }
}
class p {
  pending = /* @__PURE__ */ new Map();
  pendingSandbox = /* @__PURE__ */ new Map();
  pendingPlanApproval = null;
  shownPlans = /* @__PURE__ */ new Map();
  clear() {
    this.pending.clear(), this.pendingSandbox.clear(), this.pendingPlanApproval = null;
  }
}
class m {
  reportedDroppedEntries = /* @__PURE__ */ new Set();
  pendingPrunes = /* @__PURE__ */ new Map();
  ledger = new t();
  leadEntryKeys = /* @__PURE__ */ new Map();
  spentLeadEntries = /* @__PURE__ */ new Set();
}
class g {
  updated = (0, import_chunk_69qhefwa.Be)();
  locks = (0, import_chunk_gjzwg6ck.GS)();
  leaderTeamName = void 0;
  sessionListId = void 0;
  reset() {
    if (this.leaderTeamName === void 0 && this.sessionListId === void 0) return;
    this.leaderTeamName = void 0, this.sessionListId = void 0;
    try {
      this.updated.emit();
    } catch {
    }
  }
}
class c {
  inbound = new d();
  receipts = new l();
  outbound = new a();
  ingress = new u();
  teamPermissions = new p();
  mailbox = new m();
  taskList = new g();
}
var v = new import_chunk_2904xtvq.j(() => new c());
function Zo() {
  return v.of((0, import_chunk_f9x2f6cx.N)().host);
}
var w = 1, S = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function fin(e) {
  return typeof e === "string" && S.test(e);
}
function Sbe() {
  return { msgV: w, msg_id: (0, import_chunk_mzmcvr6c.Fce)() };
}
