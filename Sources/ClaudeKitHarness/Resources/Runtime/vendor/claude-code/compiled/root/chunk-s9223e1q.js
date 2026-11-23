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
var chunk_s9223e1q_exports = {};
__export(chunk_s9223e1q_exports, {
  AEn: () => AEn,
  BL: () => BL,
  Jva: () => Jva,
  yKs: () => yKs
});
module.exports = __toCommonJS(chunk_s9223e1q_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
function Jva() {
  return (0, import_chunk_f9x2f6cx.Iia)() && (0, import_chunk_865at33z.b)("tengu_zippy_spindle", false);
}
class yKs {
  messageQueue;
  drain;
  enabled;
  isSentNow;
  emit;
  judged = /* @__PURE__ */ new WeakSet();
  turnRunning = false;
  turn;
  held;
  preemptedBy;
  constructor({ messageQueue: e, drain: t, enabled: n, isSentNow: r, emit: o }) {
    this.messageQueue = e, this.drain = t, this.enabled = n, this.isSentNow = r, this.emit = o;
  }
  install() {
    return this.takeArrivingFollowup(), this.messageQueue.subscribe(() => BL(() => this.onQueueChanged()));
  }
  noteTurnStart({ command: e, members: t }) {
    let n = this.preemptedBy, r = n !== void 0 && t.some((o) => o.uuid === n);
    if (n !== void 0 && (r || !this.messageQueue.getCommandQueueSnapshot().some((o) => o.uuid === n))) this.preemptedBy = void 0;
    if (this.turnRunning = true, this.turn = e.mode === "prompt" && !e.isMeta && e.shouldQuery !== false && !d(e) && !t.some((o) => o.priority === "now" || o.bridgeOrigin === true) && !r ? { messageUuids: t.map((o) => o.uuid).filter((o) => o !== void 0), compacting: false, open: false } : void 0, this.turn === void 0) this.held = void 0;
  }
  noteFrame(e) {
    let t = this.turn;
    if (t === void 0) return;
    if (e.type === "system" && e.subtype === "status") {
      if (e.status !== "requesting") t.compacting = e.status === "compacting";
    } else if (e.type === "result" || (e.type === "assistant" || e.type === "user" && !("isReplay" in e) || e.type === "stream_event" && (e.event.type === "content_block_start" || e.event.type === "content_block_delta")) && e.parent_tool_use_id === null) this.turn = void 0, this.held = void 0;
    else if (e.type === "system" && e.subtype === "init") {
      t.open = true;
      let n = this.held;
      if (this.held = void 0, n === void 0) return;
      let r = this.messageQueue.getCommandQueueSnapshot();
      if (s(r) === n && AEn(n) && !r.some((o) => o.priority === "now" && (0, import_chunk_tjdnrbvx.Kl)(o))) BL(() => this.preempt(n));
    }
  }
  noteTurnEnd() {
    this.turnRunning = false, this.turn = void 0, this.held = void 0;
  }
  onQueueChanged() {
    let e = this.takeArrivingFollowup();
    if (e === void 0 || e.uuid === void 0 || !this.enabled() || !AEn(e) || this.isSentNow(e)) return;
    if (this.turn?.open) this.preempt(e);
    else if (this.turn !== void 0 || !this.turnRunning) this.held = e;
  }
  preempt(e) {
    let t = e.uuid, n = this.turn, r = this.drain.abortController;
    if (t === void 0 || n === void 0 || !n.open || n.compacting || r === void 0 || r.signal.aborted || this.drain.endSessionRequested || (0, import_chunk_xfj2cwfv.nn)()) return;
    this.emit({ type: "system", subtype: "turn_preempted", reason: "rapid_followup", preempted_by_uuid: t, preempted_message_uuids: n.messageUuids }), this.preemptedBy = t, (0, import_chunk_cqa9hrgx.u)("print_rapid_followup_preempt"), r.abort((0, import_chunk_cbnm4p23.hl)("interrupt"));
  }
  takeArrivingFollowup() {
    let e = this.messageQueue.getCommandQueueSnapshot(), t = s(e), n = t !== void 0 && !this.judged.has(t);
    for (let r of e) this.judged.add(r);
    return n ? t : void 0;
  }
}
function AEn(e, t) {
  return (0, import_chunk_bzyb60p0.Pne)(e) && (0, import_chunk_865at33z._a)(e.origin) && e.verifiedSlackHumanTurn !== true && e.bridgeOrigin !== true && e.priority === "next" && !e.wait && (!d(e) || t?.(e) === true);
}
function BL(e) {
  try {
    e();
  } catch (t) {
    (0, import_chunk_k449cc64.i)(t);
  }
}
function s(e) {
  return e.find((t) => (0, import_chunk_tjdnrbvx.Kl)(t) && (t.mode === "prompt" || t.mode === "orphaned-permission" || t.priority !== "later"));
}
function d(e) {
  return (0, import_chunk_tjdnrbvx.wg)(e.value);
}
