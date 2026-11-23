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
var chunk_ewedch47_exports = {};
__export(chunk_ewedch47_exports, {
  P6r: () => P6r,
  QAa: () => QAa,
  VMt: () => VMt,
  X4s: () => X4s,
  Y4s: () => Y4s,
  ZAa: () => ZAa,
  cGl: () => cGl,
  dGl: () => dGl,
  lGl: () => lGl,
  x6r: () => x6r
});
module.exports = __toCommonJS(chunk_ewedch47_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cee6q0wn = require("/$bunfs/root/chunk-cee6q0wn.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_37zqqqnw = require("/$bunfs/root/chunk-37zqqqnw.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_x9aavfmb = require("/$bunfs/root/chunk-x9aavfmb.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var te = 200, se = 1e3, oe = 8, Y = 2, ie = 5e3;
function re(e) {
  if (e.head === "ended_by_hook" || e.hasFoldTakenPrompt || !e.isLocalTurnActive) return { action: "stand_by" };
  if (e.isHeldByDialog) return { action: "wait", reason: "held_by_dialog" };
  if (e.head === "not_ready" || !e.isLocalTurnRunning) return { action: "wait", reason: "not_ready" };
  if (e.head === "behind_earlier") return { action: "wait", reason: "behind_earlier" };
  if (e.holderCount > e.unmovableHolderCount) return { action: "background" };
  if (e.isCompacting) return { action: "wait", reason: "compacting" };
  if (e.isAwaitingMovedResult) return { action: "wait", reason: "moved_result" };
  if (e.holderCount > 0 || e.isExecuting) {
    if (!e.isUnmovableGraceOver) return { action: "wait", reason: "unmovable_grace" };
    return e.isBackgroundingDisabled ? { action: "cancel" } : { action: "interrupt" };
  }
  if (!e.isMainRequestInFlight) return { action: "wait", reason: "not_sampling" };
  return { action: "interrupt" };
}
function P6r(e) {
  let s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  for (let o = e.length - 1; o >= 0; o--) {
    let d = e[o];
    if (d.type === "assistant") {
      for (let a of d.message.content) if (a.type === "tool_use") s.set(a.id, a.name);
      continue;
    }
    if (d.type !== "user") continue;
    let h = d.message.content;
    if (!(0, import_chunk_wzzzxdne.SG)(h)) {
      if (d.isMeta !== true) break;
      continue;
    }
    for (let a of h) if (typeof a !== "string" && a.type === "tool_result") r.add(a.tool_use_id);
  }
  for (let o of r) s.delete(o);
  return s;
}
function V(e, s, r, o, d = false) {
  let h = e.findIndex((y) => y.uuid !== void 0 && s.has(y.uuid) && y.priority !== "now"), a = e[h], g = a?.uuid;
  if (a === void 0 || g === void 0) return null;
  let f = a.priority === "later" ? "later" : "next";
  if (a.drainOnly === true && a.promptSubmitted !== void 0) return { head: "ended_by_hook", uuid: g, priority: f };
  let b = e.slice(0, h);
  if (e.some((y) => y.screeningPending === true && y.agentId === o) || r.isFoldInFlight(g) || r.isMidTurnFoldSuspended() || b.some((y) => y.priority === "now" && y.agentId === o)) return { head: "not_ready", uuid: g, priority: f };
  if (!d && b.some((y) => y.agentId === o && (y.mode === "prompt" || y.mode === "bash"))) return { head: "behind_earlier", uuid: g, priority: f };
  return { head: "deliverable", uuid: g, priority: f };
}
class VMt {
  #n;
  #e = /* @__PURE__ */ new Map();
  #s = null;
  #h = [];
  #y = false;
  #S = "";
  #m = false;
  #o = 0;
  #a = null;
  #d = false;
  #i = /* @__PURE__ */ new Set();
  #b = 0;
  #f = 0;
  #t = null;
  #l = false;
  #p = 0;
  #v = false;
  constructor(e) {
    this.#n = e;
  }
  sendQueuedNow = () => (this.#t = null, this.#_(import_chunk_bzyb60p0.PP));
  sendNow(e) {
    let s = false;
    return this.#r(() => {
      let { transcript: r, taskRegistry: o } = this.#n, d = P6r(r.getSnapshot()), h = ae(Object.values(o.all()), d);
      if ((0, import_chunk_jg3mepas.uxe)() && !(0, import_chunk_bzyb60p0.f7o)() && [...d.keys()].some((f) => !h.includes(f))) return;
      this.#t = e, this.#M();
      let a = this.#e.size === 0, g = e();
      if (s = this.#_((f) => g.has(f)), s && a) h.forEach((f) => this.#i.add(f));
    }), s;
  }
  isSendingQueued() {
    let e = this.#d || this.#m;
    return this.#t === null && this.#n.messageQueue.getCommandQueueSnapshot().some(({ uuid: s, priority: r }) => s !== void 0 && this.#e.has(s) && (!e || r === "now"));
  }
  sendAgentMessageNow() {
    if (this.#l = true, this.#p = 0, this.#_(() => true)) this.#s?.(), this.#x();
    return this.#p;
  }
  #k(e, s) {
    let r = H(this.#n.turn.agentId);
    for (let o of e) if (o.uuid !== void 0 && o.agentId === r && o.mode === "prompt" && s(o) && !this.#e.has(o.uuid)) this.#e.set(o.uuid, { outcome: "undecided", raisedFrom: null });
  }
  #_(e) {
    let s = false;
    return this.#r(() => {
      if (this.#v) return;
      let { messageQueue: r, turn: o } = this.#n;
      if (!o.guard.isRunning && !o.guard.isDispatchingForModel) {
        this.#c();
        return;
      }
      let d = H(o.agentId);
      if (this.#k(r.getCommandQueueSnapshot(), e), this.#e.size === 0) return;
      let h = V(r.getCommandQueue(), this.#e, r, d, this.#t !== null)?.head;
      if (h === "behind_earlier" || h === "ended_by_hook") {
        this.#c();
        return;
      }
      if (s = true, this.#m = false, this.#d = false, this.#h.length === 0) this.#h = [r.subscribe(this.#L), o.guard.subscribe(this.#R)];
      if (this.#s === null) this.#T(0), this.#a?.(), this.#a = this.#n.clock.setTimeout(() => {
        this.#a = null;
      }, ie);
    }), s;
  }
  moveHolders() {
    this.#r(() => {
      let { turn: e, transcript: s, taskRegistry: r } = this.#n;
      if (this.#v || !ee(e) || (0, import_chunk_jg3mepas.th)()) return;
      let o = P6r(s.getSnapshot()), d = Object.values(r.all());
      Z(X(d, o, e.agentId), J(d, o, e.agentId).filter((h) => j(o, h)), r);
    });
  }
  dispose() {
    this.#v = true, this.#r(() => this.#c());
  }
  #T(e) {
    this.#s?.(), this.#s = this.#n.clock.setTimeout(this.#x, e);
  }
  #u() {
    this.#s?.(), this.#s = null, this.#a?.(), this.#a = null, this.#o = 0, this.#i.clear(), this.#b = 0, this.#f = 0;
  }
  #c() {
    this.#u();
    for (let e of this.#h.splice(0)) e();
    this.#I(), this.#e.clear(), this.#t = null, this.#y = false, this.#S = "", this.#m = false, this.#d = false;
  }
  #g() {
    if (this.#e.size > 0) this.#T(this.#l ? se : te);
  }
  #I() {
    for (let [e, s] of this.#e) if (s.raisedFrom !== null) {
      let r = s.raisedFrom;
      s.raisedFrom = null, this.#n.messageQueue.demoteFromNow(e, r);
    }
  }
  #M() {
    let e = new Map(this.#n.messageQueue.getCommandQueueSnapshot().map((r) => [r.uuid, r])), s = this.#t?.();
    for (let [r, o] of this.#e) {
      let d = e.get(r);
      if (d !== void 0) {
        if (o.raisedFrom === null && s?.has(d) === false) this.#e.delete(r);
        continue;
      }
      if (this.#e.delete(r), this.#n.messageQueue.isFoldInFlight(r)) this.#d = true;
      if (o.outcome !== "undecided" && o.outcome !== "delivered_early") (0, import_chunk_cqa9hrgx.l)(this.#n.featureName, o.outcome);
    }
  }
  #L = () => {
    this.#r(() => {
      let [e] = this.#e.keys();
      if (this.#M(), this.#e.size === 0) {
        this.#c();
        return;
      }
      if (this.#d) {
        this.#u();
        return;
      }
      let [s] = this.#e.keys();
      if (s !== e && (this.#s !== null || this.#n.turn.guard.isActive)) this.#T(0);
    });
  };
  #R = () => {
    this.#r(() => {
      let { guard: e } = this.#n.turn;
      if (!e.isActive) {
        this.#m = true, this.#u();
        return;
      }
      if (this.#m) this.#c();
    });
  };
  #x = () => {
    this.#s = null, this.#r(() => {
      this.#E();
    });
  };
  #r(e) {
    try {
      e();
    } catch (s) {
      if ((0, import_chunk_k449cc64.i)(s), this.#p = null, !this.#y) this.#y = true, (0, import_chunk_cqa9hrgx.m)(this.#n.featureName, "check_threw");
    }
  }
  #E() {
    let { messageQueue: e, turn: s, transcript: r, session: o, taskRegistry: d } = this.#n;
    if (this.#M(), this.#e.size === 0) {
      this.#c();
      return;
    }
    if (this.#t !== null) {
      let S = this.#t(), _ = e.getCommandQueueSnapshot(), M = _.findLastIndex(({ uuid: k }) => k !== void 0 && this.#e.has(k));
      this.#k(_.slice(0, M), (k) => S.has(k));
    }
    let h = V(e.getCommandQueue(), this.#e, e, H(s.agentId), this.#t !== null), a = h === null ? void 0 : this.#e.get(h.uuid), g = r.getSnapshot(), f = P6r(g), b = Object.values(d.all()), y = X(b, f, s.agentId), w = s.guard.isActive && [...this.#e.values()].some((S) => S.raisedFrom !== null);
    if (w && !(0, import_chunk_jg3mepas.th)()) {
      if ((0, import_chunk_bzyb60p0.Fos)(y, d), this.#f = f.size > 0 ? this.#f + 1 : 0, (s.endsUnmovableShells || this.#t !== null) && this.#f > Y) for (let S of de(b, f, y, s.agentId)) (0, import_chunk_bzyb60p0.l5)(S.id, d);
    }
    if (h === null || a === void 0) {
      if (w) this.#g();
      else this.#u();
      return;
    }
    let { head: I, uuid: L, priority: N } = h, R = J(b, f, s.agentId), E = (import_chunk_bzyb60p0.G_t.peek(o)?.list() ?? []).filter((S) => C(f, S.toolUseId)), x = (0, import_chunk_jg3mepas.th)(), A = x ? [] : y.filter((S) => {
      if (!this.#l) return true;
      let _ = G(S), M = _ === void 0 ? void 0 : (0, import_chunk_trwykz8a.mn)().exclusiveCallQueuedBehind.get(_);
      return (0, import_chunk_bzyb60p0.S_i)(S, s.agentId) && !M?.isQueued() && !M?.mayYetBeQueued();
    }), K = x || this.#l && (0, import_chunk_f9x2f6cx.Se)() ? [] : R.filter((S) => j(f, S) && !(this.#l && (0, import_chunk_bzyb60p0.Jlr)(S))), O = s.readEvidence(this.#t !== null), Q = g.at(-1);
    for (let S of this.#i) if (!f.has(S)) this.#i.delete(S);
    let W = y.length + R.length + E.length, q = y.length - A.length + (R.length - K.length), P = { head: I, hasFoldTakenPrompt: this.#d, isLocalTurnActive: s.guard.isActive, isLocalTurnRunning: ee(s), isHeldByDialog: O.isHeldByDialog, holderCount: W, unmovableHolderCount: this.#l && q > 0 ? W : q, isExecuting: O.isToolCallStarting || f.size > 0, isAwaitingMovedResult: this.#i.size > 0, isBackgroundingDisabled: x, isCompacting: O.isCompacting, isUnmovableGraceOver: this.#o >= Y && !(this.#a !== null && f.size > 0 && [...f.values()].every((S) => S === import_chunk_cee6q0wn.Yd)), isMainRequestInFlight: O.isMainRequestAnnounced && !(Q?.type === "assistant" && (Q.message.stop_reason !== null || Q.isApiErrorMessage === true)) && (0, import_chunk_wx7ffn80.vLe)("api_call") && (0, import_chunk_wx7ffn80.qYe)() > 0 }, T = re(P), z = `${T.action}${T.action === "wait" ? ` ${T.reason}` : ""} head=${I} holders=${P.holderCount} executing=${P.isExecuting}`;
    if (z !== this.#S) this.#S = z, (0, import_chunk_w578pjby.t)(`[low-latency-submit] ${z} agent=${s.agentId ?? "main"}`);
    switch (T.action) {
      case "stand_by":
        this.#u();
        return;
      case "wait":
        if (this.#o = T.reason === "unmovable_grace" ? this.#o + 1 : 0, T.reason === "moved_result" && ++this.#b >= oe) this.#i.clear();
        if (T.reason !== "not_ready" && a.outcome === "undecided") a.outcome = T.reason;
        this.#g();
        return;
      case "background": {
        let S = a.outcome;
        a.outcome = "delivered_early";
        let _ = Z(A, K, d), M = _.length, k = (0, import_chunk_bzyb60p0.bza)(E);
        if (M += k, this.#p = M, k > 0) _.push(...E.map((D) => D.toolUseId));
        if (this.#e.size > 0) {
          this.#b = 0;
          for (let D of _) if (D !== void 0) this.#i.add(D);
        }
        if (M === 0) {
          if (a.outcome = S === "undecided" ? "nothing_moved" : S, P.isUnmovableGraceOver) {
            if (x) this.#A(a);
            else this.#w(a, L, N);
            return;
          }
          if (this.#e.size > 0) this.#o++;
        } else if (this.#o = 0, S !== "delivered_early") (0, import_chunk_cqa9hrgx.u)(this.#n.featureName);
        this.#g();
        return;
      }
      case "interrupt":
        this.#w(a, L, N);
        return;
      case "cancel":
        this.#A(a);
    }
  }
  #A(e) {
    let { interruptForSubmit: s } = this.#n.turn;
    if (s === void 0) {
      if (e.outcome === "undecided") e.outcome = "nothing_moved";
    } else {
      if (e.outcome !== "delivered_early") e.outcome = "fell_back_to_cancel";
      s();
    }
    this.#u();
  }
  #w(e, s, r) {
    if (this.#o = 0, this.#f = 0, e.raisedFrom = r, !this.#n.messageQueue.promoteToNow(s)) e.raisedFrom = null;
    else if (e.outcome !== "delivered_early") e.outcome = "delivered_early", (0, import_chunk_cqa9hrgx.u)(this.#n.featureName);
    this.#g();
  }
}
function H(e) {
  return e ?? (0, import_chunk_f9x2f6cx.ot)();
}
function X(e, s, r) {
  return e.filter((o) => (0, import_chunk_bzyb60p0.Los)(o, r)).filter((o) => o.status === "running" && (o.caller === "inner" && o.toolUseId?.includes(import_chunk_37zqqqnw.Zbt) === true || (0, import_chunk_bzyb60p0.Nos)(o, r)) && C(s, G(o)));
}
function J(e, s, r) {
  return e.filter((o) => (0, import_chunk_4yjj7pjs.$ss)(o, r)).filter((o) => C(s, o.toolUseId));
}
function j(e, { toolUseId: s, forkedSkillName: r }) {
  let o = s === void 0 ? void 0 : e.get(s);
  return o === import_chunk_060xwhvh._t || o === import_chunk_060xwhvh.Df || o === import_chunk_pmryp5f3.Fn && r !== void 0;
}
function ae(e, s) {
  return e.filter(import_chunk_4yjj7pjs.An).filter((r) => r.isBackgrounded && j(s, r)).flatMap(({ toolUseId: r }) => r ?? []);
}
function Z(e, s, r) {
  return [...(0, import_chunk_bzyb60p0.Fos)(e, r).map(G), ...s.filter((o) => (0, import_chunk_bzyb60p0.ZTe)(o.id, r)).map((o) => o.toolUseId)];
}
function ee(e) {
  return e.guard.isRunning && e.abortController?.signal.aborted === false;
}
function G(e) {
  return e.toolUseId === void 0 ? void 0 : (0, import_chunk_37zqqqnw.f$t)(e.toolUseId);
}
function de(e, s, r, o) {
  let d = [...s.values()].some(import_chunk_h4t4qfaq.Lb), h = e.filter(import_chunk_4yjj7pjs.An).filter((g) => g.status === "running" && !g.isBackgrounded), a = new Set(h.filter((g) => g.parentAgentId === o && (d || C(s, g.toolUseId))).map((g) => g.agentId));
  for (let g = -1; g !== a.size; ) {
    g = a.size;
    for (let f of h) if (f.parentAgentId !== void 0 && a.has(f.parentAgentId)) a.add(f.agentId);
  }
  return e.filter(import_chunk_sjqze7qg.If).filter((g) => {
    let f = (0, import_chunk_bzyb60p0.Nos)(g, o) || r.includes(g), b = (0, import_chunk_bzyb60p0.Qur)(g);
    if (g.status !== "running" || !b || f) return false;
    if (g.agentId !== o) return g.agentId !== void 0 && a.has(g.agentId);
    let { toolUseId: y } = g;
    return d || y !== void 0 && C(s, (0, import_chunk_7cfjrnwy.nt)(y, ":"));
  });
}
function C(e, s) {
  return s !== void 0 && e.has(s);
}
var X4s = Object.freeze({ delivered: () => {
  return;
}, refused: () => {
  return;
}, [Symbol.dispose]: () => {
  return;
} });
function ue() {
  let e = (0, import_chunk_865at33z.Yl)();
  return { setSessionSendRunner: e.set, runSessionSend: (s) => {
    let r = e.get();
    return r ? r(s) : Promise.resolve({ send: s.raised, delivering: X4s });
  } };
}
var U = ue();
var lGl = U.runSessionSend;
var dGl = "Delivered by a plugin hook; nothing else was sent.";
var cGl = U.setSessionSendRunner;
(0, import_chunk_adx6804h.B)();
async function QAa({ session: e, to: s, message: r, resolved: o, appState: d, agentLifecycle: h, storageV5: a, credentials: g }) {
  if (typeof r !== "string") return { kind: "proceed", pin: void 0 };
  let f = ve(o);
  if (f === null) return { kind: "proceed", pin: void 0 };
  let b = (0, import_chunk_865at33z.$s)(f.name), y = Object.hasOwn(d.sendMessagePins, b) ? d.sendMessagePins[b] : void 0;
  if (y !== void 0 && y.id === f.id) return { kind: "proceed", pin: y };
  if (y !== void 0) {
    let I = (0, import_chunk_865at33z.yde)(s) !== null;
    if (!I && s === f.name && s !== y.name) return { kind: "proceed", pin: void 0 };
    if (!I) {
      let L = (0, import_chunk_wtm85h0y.Nf)(d.teamContext), [N, R, E] = await Promise.all([L ? (0, import_chunk_jgsh7w3m.$k)(L, a) : null, (0, import_chunk_bzyb60p0.$Xo)(), (0, import_chunk_x9aavfmb.Nbt)(e, g)]), x = (0, import_chunk_865at33z.moe)(d, { teamFile: N, sessions: R, cloud: E.sessions, bridge: (0, import_chunk_bzyb60p0.rdi)(e) }), A = (0, import_chunk_865at33z.Qpn)(x.byName, b);
      return { kind: "rebound", name: f.name, previous: y, next: A?.kind === "one" && A.candidate.id === f.id ? A.candidate : void 0 };
    }
  }
  let w = { id: f.id, name: f.name, ref: (0, import_chunk_865at33z.S6t)(f.kind, f.id) };
  return h.setSendMessagePin(b, w), { kind: "proceed", pin: w };
}
function ve(e) {
  switch (e.kind) {
    case "main":
    case "not-found":
    case "ambiguous":
    case "agent-stopped-by-user":
    case "mailbox":
    case "local-session":
    case "cloud-session":
      return null;
    case "agent-live":
    case "agent-stopped":
    case "agent-evicted":
      return { kind: "subagent", id: e.agentId, name: e.agentName };
  }
}
var _e = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ success: (0, import_chunk_adx6804h.v)(true), pin: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().min(1).max(import_chunk_xfj2cwfv.dD), id: (0, import_chunk_adx6804h.n)().max(1024).refine((e) => (0, import_chunk_mzmcvr6c.tm)(e) !== null), ref: (0, import_chunk_adx6804h.n)().regex(new RegExp(`^${import_chunk_865at33z.Udt}$`)) }) }));
function Y4s(e) {
  let s = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
  for (let o of e) if (o.type === "assistant") {
    let d = o.message.content;
    if (!Array.isArray(d)) continue;
    for (let h of d) if (h.type === "tool_use" && h.name === import_chunk_bne5t4g3.Ln) r.add(h.id);
  } else if (o.type === "user") {
    let d = o.message.content;
    if (!Array.isArray(d)) continue;
    if (d.find((g) => g.type === "tool_result" && !g.is_error && r.has(g.tool_use_id)) === void 0) continue;
    let a = _e().safeParse(o.toolUseResult);
    if (!a.success) continue;
    s.set((0, import_chunk_865at33z.$s)(a.data.pin.name), { id: a.data.pin.id, name: a.data.pin.name, ref: a.data.pin.ref });
  }
  return Object.fromEntries(s);
}
function ZAa(e, s) {
  let r = Y4s(e);
  return (0, import_chunk_z688m88d.Zt)(r, s) ? null : r;
}
var Te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)().regex(import_chunk_bzyb60p0.v_t).refine((e) => !(0, import_chunk_865at33z.$j)(e)) })), Me = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ status: (0, import_chunk_adx6804h.F)(["async_launched", "completed"]), agentId: (0, import_chunk_adx6804h.n)() }));
function x6r(e, s) {
  let r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (let d of e) if (d.type === "assistant" && Array.isArray(d.message.content)) {
    for (let h of d.message.content) if (h.type === "tool_use" && (h.name === import_chunk_060xwhvh._t || h.name === import_chunk_060xwhvh.Df)) {
      let a = Te().safeParse(h.input);
      if (a.success && !s.has(a.data.name)) r.set(h.id, a.data.name);
    }
  } else if (d.type === "user" && Array.isArray(d.message.content)) {
    let [h, ...a] = d.message.content.filter((y) => y.type === "tool_result"), g = h !== void 0 && a.length === 0 && !h.is_error ? r.get(h.tool_use_id) : void 0;
    if (g === void 0) continue;
    let f = Me().safeParse(d.toolUseResult), b = f.success ? (0, import_chunk_mzmcvr6c.tm)(f.data.agentId) : null;
    if (b !== null) o.set(g, b);
  }
  return o.size > 0 ? new Map([...s, ...o]) : null;
}
