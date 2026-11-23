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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
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
var chunk_bagkgwh8_exports = {};
__export(chunk_bagkgwh8_exports, {
  $4s: () => $4s,
  $Yl: () => $Yl,
  BYl: () => BYl,
  F4s: () => F4s,
  FYl: () => FYl,
  JAa: () => JAa,
  NYl: () => NYl,
  UYl: () => UYl,
  WYl: () => WYl,
  XAa: () => XAa,
  YAa: () => YAa,
  aGl: () => aGl,
  fzo: () => fzo,
  hzo: () => hzo,
  iGl: () => iGl,
  jYl: () => jYl,
  mzo: () => mzo,
  pzo: () => pzo,
  sGl: () => sGl,
  uzo: () => uzo
});
module.exports = __toCommonJS(chunk_bagkgwh8_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_89bjmq9y = require("/$bunfs/root/chunk-89bjmq9y.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_f7aa6t06 = require("/$bunfs/root/chunk-f7aa6t06.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_c0frdpwg = require("/$bunfs/root/chunk-c0frdpwg.js");
var import_chunk_6gdq9za5 = require("/$bunfs/root/chunk-6gdq9za5.js");
var import_chunk_mvbpsqbk = require("/$bunfs/root/chunk-mvbpsqbk.js");
var import_chunk_kas3c2bm = require("/$bunfs/root/chunk-kas3c2bm.js");
var import_chunk_vh92d4r0 = require("/$bunfs/root/chunk-vh92d4r0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_net = require("net");
var import_path = require("path");
var Fe = 500, Ne = 32;
class we {
  verdicts = /* @__PURE__ */ new Map();
  lookup(e) {
    let n = this.verdicts.get(e);
    if (n !== void 0) this.verdicts.delete(e), this.verdicts.set(e, n);
    return n;
  }
  remember(e, n) {
    if (this.verdicts.size >= Fe) {
      let r = this.verdicts.keys().next().value;
      if (r !== void 0) this.verdicts.delete(r);
    }
    this.verdicts.set(e, n);
  }
}
var Le = new import_chunk_2904xtvq.j(() => new we()), Ke = { readAncestors: async (e) => {
  let { ancestors: n, readFailed: r, truncated: c } = await (0, import_chunk_rb36kwbn.hOo)(e);
  if (c && !r && !n.includes(process.pid)) ({ ancestors: n, readFailed: r, truncated: c } = await (0, import_chunk_rb36kwbn.hOo)(e, Ne));
  if (!n.includes(process.pid)) {
    if (r) throw Error("ancestry walk failed");
    if (c) throw Error("ancestry walk truncated (maxDepth) above the prefix");
  }
  return n;
}, readStartToken: (e) => (0, import_chunk_rb36kwbn.Ef)(e, { skipCache: true }) };
function We(e, n = process.pid) {
  if (n === 1) return false;
  return Array.isArray(e) && e.includes(n);
}
async function qe(e, n = Ke) {
  if (e === void 0 || !Number.isInteger(e) || e <= 0) return "no-evidence";
  let r;
  try {
    r = await n.readStartToken(e);
  } catch {
    r = void 0;
  }
  if (r === void 0) return "no-evidence";
  let c = `${e}:${r}`, f = Le.of((0, import_chunk_f9x2f6cx.N)().host), o = f.lookup(c);
  if (o !== void 0) return o ? "self" : "not-self";
  let p;
  try {
    p = await n.readAncestors(e);
  } catch {
    return "no-evidence";
  }
  let S;
  try {
    S = await n.readStartToken(e);
  } catch {
    S = void 0;
  }
  if (S !== r) return "no-evidence";
  let b = process.pid !== 1 && p.includes(process.pid);
  return f.remember(c, b), b ? "self" : "not-self";
}
async function Se(e) {
  let n = e.selfPid ?? process.pid;
  if (e.selfSentAncestry !== void 0 && n !== 1) return We(e.selfSentAncestry, n);
  if (!e.needsVerdict) return false;
  if (n === 1 || e.platform === "windows") return e.childTokenPresented;
  if (e.platform !== "macos") return false;
  let r = await (e.verdictOf ?? qe)(e.verifiedPeerPid);
  return r === "self" || r === "no-evidence" && e.childTokenPresented;
}
function a() {
  return import_chunk_865at33z.Vpn.of((0, import_chunk_f9x2f6cx.N)().host);
}
function NYl() {
  return a().lastStartFailureCause;
}
function FYl() {
  return a().lastStartDegradedCause;
}
async function $Yl() {
  return a().keyPublish;
}
function le(e) {
  let n = a();
  if (e === "key_publish_failed" && n.lastStartDegradedCause === "primary_dir_refused_fell_back") return;
  n.lastStartDegradedCause = e;
}
function uzo() {
  return (0, import_chunk_865at33z.YRo)(a());
}
function fzo() {
  return (0, import_chunk_865at33z.yIl)(a());
}
function he(e) {
  if (typeof e !== "object" || e === null) return false;
  if (!("type" in e)) return false;
  return typeof e.type === "string";
}
function pzo(e) {
  a().onRename = e;
}
function UYl(e) {
  a().onEnableRemoteControl = e;
}
function Ee(e) {
  return (0, import_chunk_mvszxaxb.fin)(e) ? e : e === void 0 ? "(none)" : "(malformed)";
}
function ze(e) {
  if (!Array.isArray(e)) return [];
  let n = [];
  for (let r of e) {
    if (n.length >= import_chunk_p51r1nb3.zOi) break;
    if ((0, import_chunk_mvszxaxb.fin)(r)) n.push(r);
  }
  return n;
}
function mzo(e) {
  a().onPeerMessageStatus = e;
}
function F4s() {
  return a().onPeerMessageStatus !== null;
}
function $4s(e) {
  a().onPeerMessageStatus?.(e);
}
function BYl(e) {
  a().onEnqueue = e;
}
function xe(e) {
  if (e.session_id !== void 0 && e.session_id !== (0, import_chunk_f9x2f6cx.W)()) return (0, import_chunk_w578pjby.t)(`[uds-messaging] Dropping ${(0, import_chunk_p51r1nb3.Uk)(e.type)} message: session_id mismatch (got "${(0, import_chunk_p51r1nb3.Uk)(String(e.session_id))}", expected "${(0, import_chunk_f9x2f6cx.W)()}")`, { level: "warn" }), false;
  return true;
}
async function Qe(e, n, r, c, f) {
  var _stack = [];
  try {
    let o = e.message?.content;
    if (typeof o !== "string" || o.length === 0) {
      (0, import_chunk_w578pjby.t)("[uds-messaging] Ignoring user message with missing or non-string content", { level: "warn" });
      return;
    }
    if (!xe(e)) return;
    let p = a().hostNamedSocket ? (0, import_chunk_mzmcvr6c.ht)(e.uuid) : null;
    if (p === null && e.uuid !== void 0) (0, import_chunk_w578pjby.t)("[uds-messaging] The line's uuid was not kept; this session minted the message's id (a well-formed uuid is kept only with --messaging-socket-path)");
    let S = p ?? (0, import_crypto.randomUUID)(), b = (0, import_chunk_6gdq9za5.bvn)();
    if (b !== void 0) {
      (0, import_chunk_6gdq9za5.Tet)("uds: dropped before attachment materialization", b), (0, import_chunk_6gdq9za5.fRa)({ kind: "peer", from: e.from ?? "unknown", ...n !== void 0 && { verifiedPeerPid: n }, ...(0, import_chunk_mvszxaxb.fin)(e.msg_id) && { msg_id: e.msg_id } }, "refused");
      return;
    }
    let h = (0, import_chunk_7f901c6t.irn)(e.priority) ?? "next", y = (0, import_chunk_c0frdpwg.CWa)(o), k = (0, import_chunk_xfj2cwfv.uze)(e.from_plugin), P = await (0, import_chunk_bzyb60p0.qQt)({ origin: { kind: "peer", ...k !== void 0 && { plugin: k } }, content: y });
    if (P.consumed !== void 0) return;
    const _ = __using(_stack, P.queueing);
    let v = typeof P.content === "string" ? P.content : y, A = v;
    if (e.file_attachments !== void 0 && (0, import_chunk_f7aa6t06.mwt)()) try {
      let { emitPeerFileReceiveTelemetry: C, injectPeerFilePrefix: D, materializeLocalPeerFiles: T } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-xqn91f3g.js"))), G = await T(e.file_attachments);
      if (G.received > 0) A = D(v, G.prefix), C("uds", G.received, G.verified);
    } catch (C) {
      (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to materialize file_attachments: ${(0, import_chunk_p51r1nb3.XQ)(String(C))}`, { level: "warn" });
    }
    let E = await pe(n, c, f), I = f === "peer" && (0, import_chunk_xfj2cwfv.wOr)(e.from ?? "") && (n !== void 0 || a().authRequired), R = typeof e.local_chain === "string" && import_chunk_xfj2cwfv.BPs.test(e.local_chain) ? e.local_chain.split(",") : void 0, O = (0, import_chunk_xfj2cwfv.Ide)({ kind: "peer", from: e.from ?? "unknown", ...n !== void 0 && { verifiedPeerPid: n }, ...r !== void 0 && { verifiedPeerProcStart: r }, ...E && { selfSent: E }, ...(0, import_chunk_mvszxaxb.fin)(e.msg_id) && { msg_id: e.msg_id }, ...k !== void 0 && { plugin: k }, ...(0, import_chunk_xfj2cwfv.pze)(o), ...I && { verifiedLocal: true }, ...I && R !== void 0 && ((0, import_chunk_p51r1nb3.Epe)().countLocalHops ? { hopChain: R } : { fullHopChain: R }) }, A, o), g = { mode: "prompt", agentId: (0, import_chunk_f9x2f6cx.ot)(), value: A, uuid: S, priority: h, origin: O, skipSlashCommands: true, isMeta: true, skipAttachments: true, overSocket: true };
    if ((0, import_chunk_6gdq9za5.UQn)(g, I ? "mine" : "other") !== "accept") return;
    (0, import_chunk_bzyb60p0.HO)(g), _.queued(), (0, import_chunk_w578pjby.t)(`[uds-messaging] Routed user message to queue (priority=${h}): ${(0, import_chunk_p51r1nb3.Uk)(A, 80)}`), a().onEnqueue?.(), Pe(g);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function Pe(e) {
  let n = e.origin?.kind === "peer" ? e.origin : void 0, r = a().activeSocketPath;
  if (n !== void 0 && n.selfSent !== true && n.verifiedPeerPid !== void 0 && typeof n.from === "string" && r !== void 0 && hzo(n.from, r, n.verifiedPeerPid) !== void 0) (0, import_chunk_89bjmq9y.FEi)(n.from, n.verifiedPeerPid, n.verifiedPeerProcStart);
}
function hzo(e, n, r) {
  if (!e.startsWith("uds:") || !(0, import_chunk_xfj2cwfv.WNe)(e)) return;
  let c = (0, import_chunk_xfj2cwfv.Wb)(e).target;
  return c && (0, import_chunk_xfj2cwfv.r9i)(c, n, { verifiedPeerPid: r, ownerUids: a().peerDirOwnerUids }) ? c : void 0;
}
async function ke(e, n, r, c, f) {
  if (!he(e)) {
    (0, import_chunk_w578pjby.t)("[uds-messaging] Ignoring message without valid type field", { level: "warn" });
    return;
  }
  if (e.type === "user") await Qe(e, n, r, c, f);
  else if (e.type === "control") {
    if (!xe(e)) return;
    if (e.action === "rename" && typeof e.name === "string") a().onRename?.(e.name);
    else if (e.action === "peer_message_status" && (e.status === "held" || e.status === "denied" || e.status === "expired" || e.status === "delivered" || e.status === "refused" || e.status === "dropped")) {
      let o = e.status === "expired" && e.status_detail === "refused" ? "refused" : e.status, p = (0, import_chunk_p51r1nb3.JOi)(e.orig_msg_id, o);
      if (o === "dropped") {
        let S = (0, import_chunk_p51r1nb3.Jdl)(e.drop_reason), b = (0, import_chunk_p51r1nb3.QOi)(ze(e.dropped_msg_ids));
        if (p !== void 0) {
          let h = b.get(p.sent.to) ?? { sends: [], wereHeld: 0 };
          if (h.sends.push(p.sent), p.wasHeld) h.wereHeld++;
          b.set(p.sent.to, h);
        }
        if (S === "queue-full") for (let [h, { wereHeld: y }] of b) for (let k = 0; k < y; k++) (0, import_chunk_p51r1nb3.zps)(h);
        if (b.size === 0) (0, import_chunk_w578pjby.t)(`[uds-messaging] peer_message_status dropped: neither orig_msg_id=${Ee(e.orig_msg_id)} nor any named id matches an outstanding send`);
        for (let { sends: h } of b.values()) a().onPeerMessageStatus?.({ status: o, sends: h, dropReason: S });
      } else if (p === void 0) (0, import_chunk_w578pjby.t)(`[uds-messaging] peer_message_status dropped: no outstanding send matches orig_msg_id=${Ee(e.orig_msg_id)}`);
      else {
        if (o === "held") (0, import_chunk_p51r1nb3.YOi)(p.sent.to);
        else if (o === "delivered" && p.wasHeld) (0, import_chunk_p51r1nb3.zps)(p.sent.to);
        a().onPeerMessageStatus?.({ status: o, sent: p.sent });
      }
    } else if (e.action === "notify_when_idle") {
      let o = (0, import_chunk_kas3c2bm.U4s)().safeParse(e);
      if (!o.success) {
        (0, import_chunk_w578pjby.t)("[uds-messaging] notify_when_idle dropped: malformed frame"), (0, import_chunk_cqa9hrgx.l)("cross_session_notify_idle", "malformed_frame");
        return;
      }
      let p = a().activeSocketPath, S = o.data.from, b = p !== void 0 ? hzo(S, p, n) : void 0;
      if (p === void 0) (0, import_chunk_w578pjby.t)("[uds-messaging] notify_when_idle dropped: own inbox not bound (shutting down)"), (0, import_chunk_cqa9hrgx.l)("cross_session_notify_idle", "own_inbox_unbound");
      else if (b === void 0) (0, import_chunk_w578pjby.t)(`[uds-messaging] notify_when_idle dropped: reply address unshaped or outside our socket namespace (${(0, import_chunk_p51r1nb3.Uk)(S)})`), (0, import_chunk_cqa9hrgx.l)("cross_session_notify_idle", "unvettable_reply_target");
      else if ((0, import_chunk_865at33z.GN)(b) === (0, import_chunk_865at33z.GN)(p)) (0, import_chunk_w578pjby.t)("[uds-messaging] notify_when_idle dropped: reply target is this session (self-target)"), (0, import_chunk_cqa9hrgx.l)("cross_session_notify_idle", "self_target_frame");
      else {
        let h = await pe(n, c, f), y = (0, import_chunk_kas3c2bm.W4s)(S, b, o.data.msg_id, n, r, f === "peer", Ie(o.data.from_mode), h);
        if ((0, import_chunk_w578pjby.t)(`[uds-messaging] notify_when_idle from ${(0, import_chunk_p51r1nb3.Uk)(S)}: ${y}`), y === "full") (0, import_chunk_kas3c2bm.A6r)(b, o.data.msg_id, n, f === "peer", r);
      }
    } else if (e.action === "peer_idle_notice") {
      let o = (0, import_chunk_kas3c2bm.B4s)().safeParse(e);
      if (!o.success) {
        (0, import_chunk_w578pjby.t)("[uds-messaging] peer_idle_notice dropped: malformed frame"), (0, import_chunk_cqa9hrgx.l)("cross_session_notify_idle", "malformed_notice");
        return;
      }
      if (!(0, import_chunk_kas3c2bm.AQn)(o.data.orig_msg_id)) {
        (0, import_chunk_w578pjby.t)("[uds-messaging] peer_idle_notice: dropped (uncorrelated / already delivered / expired)");
        return;
      }
      let p = await pe(n, c, f);
      if (!(0, import_chunk_kas3c2bm.G4s)(o.data.orig_msg_id, o.data.state, o.data.finished_at, o.data.detail, Ie(o.data.from_mode), p)) (0, import_chunk_w578pjby.t)(`[uds-messaging] peer_idle_notice not admitted: subscription for orig_msg_id=${(0, import_chunk_p51r1nb3.Uk)(o.data.orig_msg_id)} was already consumed`);
    } else if (e.action === "yield_artifact_replies") {
      let o = (0, import_chunk_mvbpsqbk.$Ma)().safeParse(e);
      if (!o.success) {
        (0, import_chunk_w578pjby.t)("[uds-messaging] yield_artifact_replies dropped: malformed frame"), (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_malformed_frame");
        return;
      }
      let p = a().activeSocketPath, S = p !== void 0 ? hzo(o.data.from, p, n) : void 0;
      if (p === void 0 || S === void 0) {
        (0, import_chunk_w578pjby.t)(`[uds-messaging] yield_artifact_replies dropped: ${p === void 0 ? "own inbox not bound" : "reply address unshaped or outside our socket namespace"} (${(0, import_chunk_p51r1nb3.Uk)(o.data.from)})`), (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_unvettable_target");
        return;
      }
      if ((0, import_chunk_865at33z.GN)(S) === (0, import_chunk_865at33z.GN)(p)) {
        (0, import_chunk_w578pjby.t)("[uds-messaging] yield_artifact_replies dropped: reply target is this session");
        return;
      }
      let b = await (0, import_chunk_p51r1nb3.Oyr)(S);
      if (b === void 0 || b.sessionId !== (0, import_chunk_f9x2f6cx.W)() || n !== void 0 && b.pid !== n) {
        (0, import_chunk_w578pjby.t)(`[uds-messaging] yield_artifact_replies refused: requester is not a verified live session of this conversation (${(0, import_chunk_p51r1nb3.Uk)(o.data.from)})`), (0, import_chunk_cqa9hrgx.l)("artifact_comments_autoreact", "yield_requester_unverified"), (0, import_chunk_mvbpsqbk.TXs)(o.data, S, n === void 0 ? void 0 : { pid: n, writeToken: r }, Date.now(), { refuse: true });
        return;
      }
      (0, import_chunk_mvbpsqbk.TXs)(o.data, S, { pid: n ?? b.pid, procStart: n === void 0 || n === b.pid ? b.procStart : void 0, writeToken: r }, Date.now());
    } else if (e.action === "unyield_artifact_replies") {
      let o = (0, import_chunk_mvbpsqbk.BMa)().safeParse(e);
      if (!o.success || !(0, import_chunk_mvbpsqbk.YMa)(o.data, n)) (0, import_chunk_w578pjby.t)("[uds-messaging] unyield_artifact_replies dropped: malformed, uncorrelated or already handed back");
    } else if (e.action === "artifact_replies_yielded") {
      let o = (0, import_chunk_mvbpsqbk.UMa)().safeParse(e);
      if (!o.success) {
        (0, import_chunk_w578pjby.t)("[uds-messaging] artifact_replies_yielded dropped: malformed frame"), (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "yield_malformed_answer");
        return;
      }
      if (!(0, import_chunk_mvbpsqbk.zMa)(o.data.orig_msg_id)) {
        (0, import_chunk_w578pjby.t)("[uds-messaging] artifact_replies_yielded dropped: uncorrelated or already settled");
        return;
      }
      (0, import_chunk_mvbpsqbk.VMa)(o.data, n);
    } else (0, import_chunk_w578pjby.t)(`[uds-messaging] Unhandled control action: ${(0, import_chunk_p51r1nb3.Uk)(String(e.action))}`);
  } else (0, import_chunk_w578pjby.t)(`[uds-messaging] Received unhandled message type: ${(0, import_chunk_p51r1nb3.Uk)(e.type)}`);
}
function Je(e, n, r, c, f) {
  if (he(e) && (e.type === "control" && e.action !== "notify_when_idle" || e.type === "user" && e.priority === "now" && e.file_attachments === void 0)) {
    ke(e, n, r, c, f).catch((o) => {
      (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to process message: ${o}`, { level: "warn" });
    });
    return;
  }
  a().processingChain = a().processingChain.then(() => ke(e, n, r, c, f)).catch((o) => {
    (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to process message: ${o}`, { level: "warn" });
  });
}
var Ze = 3e3;
function en(e = 3e3) {
  return Promise.race([a().processingChain, (0, import_chunk_5appeerh.K)(e, void 0, { unref: true })]);
}
function nn(e) {
  e.setEncoding("utf8");
  let n = a().firstLineDeadlineMs, r = setTimeout(() => {
    r = void 0;
    try {
      if ((0, import_chunk_w578pjby.t)(`[uds-messaging] Closing a connection that sent no complete line within ${n} ms`), !a().silentDropReported) a().silentDropReported = true, (0, import_chunk_cqa9hrgx.l)("cross_session_inbox_auth", "silent_connection_deadline");
      e.destroy();
    } catch (E) {
      (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to close a silent connection: ${E}`, { level: "warn" });
    }
  }, n);
  r.unref();
  let c = () => {
    if (r !== void 0) clearTimeout(r), r = void 0;
  };
  e.once("close", c), e.once("error", c);
  let f, o, p = false, S, b, h = process.pid !== 1 && (0, import_chunk_6gdq9za5._3s)();
  if (h) {
    let E = (0, import_chunk_p51r1nb3.lin)(e), I = E !== void 0 ? (0, import_chunk_rb36kwbn.mhn)(E) : void 0;
    if (E !== void 0 && I !== void 0) b = { pid: E, token: I };
  }
  let y = "", k, P = false, _ = (E) => {
    if ((0, import_chunk_w578pjby.t)(`[uds-messaging] Dropped ${E} from a connection that did not authenticate; closing it`, { level: "warn" }), !a().authDropReported) a().authDropReported = true, (0, import_chunk_cqa9hrgx.m)("cross_session_inbox_auth", "unauthed_drop");
    e.destroy();
  }, v = (E) => {
    let I = !P;
    if (P = true, (0, import_chunk_865at33z.MIl)(E)) {
      if (I) {
        if (k = (0, import_chunk_865at33z.HIl)(E.token, a().activeTokens), k !== void 0 && !a().authOkReported) a().authOkReported = true, (0, import_chunk_cqa9hrgx.u)("cross_session_inbox_auth");
        if (k === void 0 && a().authRequired) _("a bad auth frame");
      }
      return;
    }
    if (a().authRequired && k === void 0) {
      _(he(E) ? `a '${(0, import_chunk_p51r1nb3.Uk)(E.type)}' line` : "a line");
      return;
    }
    if (!p) {
      if (f = (0, import_chunk_p51r1nb3.lin)(e), o = f === void 0 ? void 0 : b !== void 0 ? b.pid === f ? b.token : void 0 : (0, import_chunk_rb36kwbn.mhn)(f), p = true, f !== void 0 && h) S = b !== void 0 && b.pid === f && (0, import_chunk_rb36kwbn.mhn)(f) === b.token ? (0, import_chunk_rb36kwbn.AYi)(f) : void 0;
    }
    Je(E, f, o, S, k);
  }, A = (E) => {
    try {
      v(E);
    } catch (I) {
      (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to handle line: ${I}`, { level: "warn" });
    }
  };
  e.on("data", (E) => {
    if (y += E, y.length > import_chunk_p51r1nb3.Ryr) {
      (0, import_chunk_w578pjby.t)(`[uds-messaging] Line exceeded ${import_chunk_p51r1nb3.Ryr} chars; dropping connection`, { level: "warn" }), e.destroy(), y = "";
      return;
    }
    let I;
    while ((I = y.indexOf(`
`)) !== -1) {
      let R = y.slice(0, I);
      if (y = y.slice(I + 1), c(), !R.trim()) {
        if (a().authRequired && k === void 0) {
          P = true, _("a blank line"), y = "";
          return;
        }
        continue;
      }
      let O;
      try {
        O = (0, import_chunk_w578pjby.Cs)(R);
      } catch {
        if ((0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to parse JSON line: ${(0, import_chunk_p51r1nb3.XQ)(R)}`, { level: "warn" }), a().authRequired && k === void 0) {
          P = true, _("an unparseable line"), y = "";
          return;
        }
        continue;
      }
      if (A(O), e.destroyed) {
        y = "";
        return;
      }
    }
  }), e.on("end", () => {
    if (y.trim() && !e.destroyed) {
      let E, I = false;
      try {
        E = (0, import_chunk_w578pjby.Cs)(y), I = true;
      } catch {
        if ((0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to parse final buffer: ${(0, import_chunk_p51r1nb3.XQ)(y)}`, { level: "warn" }), a().authRequired && k === void 0) _("an unparseable final fragment");
      }
      if (I) A(E);
    }
    e.end();
  }), e.on("error", (E) => {
    (0, import_chunk_w578pjby.t)(`[uds-messaging] Connection error: ${E.message}`, { level: "warn" });
  });
}
function WYl() {
  return a().activeSocketPath;
}
var Z = 103;
function sGl() {
  let e = import_chunk_c203g5kd.s.XDG_RUNTIME_DIR || (0, import_chunk_8nvd6fqx.Fp)(), n = (0, import_path.resolve)((0, import_path.join)(e, "cc-socks", `${process.pid}.sock`));
  if (Buffer.byteLength(n) <= Z) return n;
  return YAa();
}
function YAa(e = process.getuid?.() ?? 0) {
  let n = import_chunk_c203g5kd.s.TERMUX_VERSION ? import_chunk_c203g5kd.s.PREFIX : void 0, r = n ? (0, import_path.join)(n, "tmp") : "/tmp";
  return (0, import_path.join)(r, `cc-socks-${e}`, `${process.pid}.sock`);
}
async function z(e, n, r, { settleHeld: c = true } = {}) {
  for (let S of a().connectedClients) S.destroy();
  if (a().connectedClients.clear(), e.close(), c) (0, import_chunk_kas3c2bm.K4s)();
  let f = c ? (0, import_chunk_6gdq9za5.DQn)() : void 0;
  await en();
  let o = c ? (0, import_chunk_5appeerh.me)((0, import_chunk_kas3c2bm._zo)("exited"), Ze) : void 0;
  if (await f, await o, c) await (0, import_chunk_bzyb60p0.__i)();
  try {
    await (0, import_promises.unlink)(n);
  } catch {
  }
  let p = a();
  if (p.keyPublish !== void 0) await (0, import_chunk_5appeerh.me)(p.keyPublish.catch(() => {
  }), p.keyPublishSettleTimeoutMs);
  if (p.activeKeyFile !== void 0) await (0, import_chunk_865at33z.M4i)(p.activeKeyFile, r), p.activeKeyFile = void 0;
  Q();
}
function Q() {
  a().activeSocketPath = void 0, a().hostNamedSocket = false, a().activeTokens = void 0, import_chunk_c203g5kd.zM.unset("CLAUDE_CODE_MESSAGING_SOCKET"), import_chunk_c203g5kd.zM.unset("CLAUDE_CODE_MESSAGING_TOKEN"), (0, import_chunk_p51r1nb3.VOi)(void 0), (0, import_chunk_6gdq9za5.f3s)(null), (0, import_chunk_6gdq9za5.p3s)(null), (0, import_chunk_kas3c2bm.bzo)(null), (0, import_chunk_mvbpsqbk.vXs)(null), (0, import_chunk_kas3c2bm.kzo)(null), (0, import_chunk_89bjmq9y.xH)().senderMode = null;
}
function tn(e, n, r, c) {
  return async () => {
    await z(e, n, r), c();
  };
}
function ye(e) {
  return new Promise((n) => {
    let r = new import_net.Socket(), c = (f) => {
      r.destroy(), n(f);
    };
    r.on("connect", () => c("live")), r.on("error", () => c("dead")), r.setTimeout(250, () => c("dead")), r.connect({ path: e });
  });
}
function ie(e, n) {
  return new Promise((r, c) => {
    function f(o) {
      if ((0, import_chunk_jv7av99m.w)(o) === "EADDRINUSE") r(false);
      else c(o);
    }
    e.once("error", f), e.listen(n, () => {
      e.removeListener("error", f), r(true);
    });
  });
}
function sn(e) {
  let n = `${e.replace(/\.sock$/, "")}-${(0, import_crypto.randomBytes)(4).toString("hex")}.sock`;
  if (Buffer.byteLength(n) <= Z) return n;
  let r = (0, import_path.join)(e, ".."), c = Z - Buffer.byteLength((0, import_path.join)(r, ".sock"));
  return (0, import_path.join)(r, `${(0, import_crypto.randomBytes)(8).toString("hex").slice(0, Math.max(1, c))}.sock`);
}
async function rn(e) {
  let n = `${(0, import_path.basename)(e).replace(/\.sock$/, "")}-`, r;
  try {
    r = await (0, import_promises.readdir)((0, import_path.dirname)(e));
  } catch {
    return;
  }
  for (let c of r) {
    if (!c.startsWith(n) || !/^[0-9a-f]{8}\.sock$/.test(c.slice(n.length))) continue;
    let f = (0, import_path.join)((0, import_path.dirname)(e), c);
    if (await ye(f) === "live") continue;
    try {
      await (0, import_promises.unlink)(f), (0, import_chunk_w578pjby.t)(`[uds-messaging] Reaped stale moved-aside socket ${f}`);
    } catch {
    }
  }
}
async function on(e, n) {
  if (await rn(n), await ie(e, n)) return n;
  if (await ye(n) !== "live") {
    try {
      await (0, import_promises.unlink)(n);
    } catch {
    }
    if (await ie(e, n)) return n;
  }
  for (let r = 0; r < 3; r++) {
    let c = sn(n);
    if ((0, import_chunk_w578pjby.t)(`[uds-messaging] Auto socket path ${n} is another session's live socket (sibling pid namespace?); binding at ${c} instead`, { level: "warn" }), await ie(e, c)) return c;
  }
  throw Error("listen EADDRINUSE on the auto socket path and its moved-aside siblings");
}
function jYl(e, n, r = {}) {
  return aGl(e ?? sGl(), n, { isExplicit: e !== void 0, profileStartup: r.profileStartup });
}
function B() {
  import_chunk_c203g5kd.zM.unset("CLAUDE_CODE_MESSAGING_SOCKET"), import_chunk_c203g5kd.zM.unset("CLAUDE_CODE_MESSAGING_TOKEN");
}
var an = ["directory_rule", "foreign_owner", "leaf_shape", "dangling_link", "raced", "not_directory", "symlink_loop", "uid_collapse", "internal"];
function L(e, n, r) {
  return Object.assign(n, { socketsDirVetKind: e, ...r && { refusedComponent: r } });
}
function dn(e) {
  if (!(e instanceof Error) || !("refusedComponent" in e)) return;
  let n = e.refusedComponent;
  return typeof n === "object" && n !== null && "path" in n && typeof n.path === "string" && "uid" in n && typeof n.uid === "number" && "gid" in n && typeof n.gid === "number" && "mode" in n && typeof n.mode === "number" ? { path: n.path, uid: n.uid, gid: n.gid, mode: n.mode, ownerRefused: "ownerRefused" in n && typeof n.ownerRefused === "boolean" ? n.ownerRefused : void 0 } : void 0;
}
function H(e, n, r) {
  return { path: e, uid: n.uid, gid: n.gid, mode: n.mode & 4095, ...r !== void 0 && { ownerRefused: r } };
}
function Te(e) {
  if (oe(e) === "uid_collapse") return "this process runs in a user namespace without a uid mapping, so file ownership cannot be verified \u2014 start it with a uid map (e.g. unshare -Ur), or pass --messaging-socket-path";
  let n = dn(e);
  if (n === void 0) return;
  let r = n.mode.toString(8).padStart(4, "0"), c = `(owner ${n.uid}:${n.gid}, mode ${r})`, f = "or pass --messaging-socket-path", o = (0, import_chunk_tp3c5q2s.Ft)(n.path), p = o === n.path, S = `'${Array.from(o, (y) => {
    if (un.test(y)) return y;
    return p = false, "?";
  }).join("")}'`, b = p, h = (y, k) => b ? `chmod ${y} ${(0, import_chunk_vh92d4r0.No)([n.path])}${k}` : `clear its ${y === "o-w" ? "other" : "group"}-write bit${k}`;
  switch (oe(e)) {
    case "directory_rule": {
      if (n.ownerRefused === true) return `${S} is not owned by you or root ${c} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${f}`;
      let y = (n.mode & 512) !== 0;
      if (!y && (n.mode & 2) !== 0) return `${S} is world-writable without the sticky bit ${c} \u2014 ${h("o-w", " (or chmod +t)")}, ${f}`;
      if (!y && (n.mode & 16) !== 0) return `${S} is group-writable without the sticky bit ${c} \u2014 ${h("g-w", "")}, ${f}`;
      return `${S} is not owned by you or root ${c} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${f}`;
    }
    case "foreign_owner":
      return `${S} is owned by another user ${c} \u2014 use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${f}`;
    case "not_directory":
    case "leaf_shape":
      return `${S} is not a directory ${c} \u2014 remove it or use a private directory (XDG_RUNTIME_DIR / CLAUDE_CODE_TMPDIR), ${f}`;
    case "dangling_link":
    case "raced":
    case "symlink_loop":
    case "uid_collapse":
    case "internal":
    case void 0:
      return;
  }
}
var un = /^[A-Za-z0-9._\/ ~+=:@,#%-]$/, cn = /* @__PURE__ */ new Set(["EACCES", "EPERM", "EROFS", "ENOSPC", "EDQUOT", "ENOTDIR"]);
function ln(e) {
  switch (oe(e)) {
    case "directory_rule":
    case "foreign_owner":
    case "leaf_shape":
    case "not_directory":
      return true;
    case "dangling_link":
    case "symlink_loop":
    case "raced":
    case "uid_collapse":
    case "internal":
      return false;
    case void 0:
      break;
  }
  let n = (0, import_chunk_jv7av99m.w)(e);
  return n !== void 0 && cn.has(n);
}
function oe(e) {
  if (!(e instanceof Error) || !("socketsDirVetKind" in e)) return;
  let n = e.socketsDirVetKind;
  return an.find((r) => r === n);
}
function ve() {
  return L("dangling_link", Error("a component of the sockets path is a symlink whose target does not exist \u2014 create the target (0700) or repoint the link"));
}
var Y = "Point XDG_RUNTIME_DIR or CLAUDE_CODE_TMPDIR at a private (0700) directory you own to use a different location.", Re = `A component of the sockets path is not a directory (a regular file is in the way). ${Y}`, De = `The sockets path runs through a symlink loop. ${Y}`, fn = "This process runs in a user namespace without a uid mapping (its own uid reads as the kernel overflow uid), so file ownership cannot be verified. Start it with a uid map (e.g. `unshare -Ur` / `--map-current-user`), or pass --messaging-socket-path.";
function $e(e) {
  switch (oe(e)) {
    case "directory_rule":
      return `A directory on the sockets path is shared (world- or group-writable without the sticky bit, e.g. a container volume mounted at /tmp) or not owned by you or root. ${Y}`;
    case "foreign_owner":
    case "leaf_shape":
      return Y;
    case "not_directory":
      return Re;
    case "symlink_loop":
      return De;
    case "uid_collapse":
      return fn;
    case "dangling_link":
    case "raced":
    case "internal":
      return "";
    case void 0:
      break;
  }
  switch ((0, import_chunk_jv7av99m.w)(e)) {
    case "ENOTDIR":
      return Re;
    case "ELOOP":
      return De;
    case "EACCES":
    case "EPERM":
      return `This user lacks permission on part of the sockets path (an ancestor is not searchable, or the parent is not writable). ${Y}`;
    case "ENOENT":
      return `An ancestor of the sockets path does not exist. ${Y}`;
    default:
      return "";
  }
}
function Ce(e, n, r) {
  a().lastStartFailureCause = "socket_dir_refused";
  let c = Te(n);
  a().lastStartFailureDetail = c, Q(), (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to set up sockets directory ${e} (refusing to bind \u2014 cross-session messaging is OFF for this session): ${(0, import_chunk_jv7av99m.d)(n)}.${c ? ` Refused component: ${c}.` : ""}${r ? ` ${r}` : ""}`, { level: "error" }), B();
  return;
}
async function Ae(e) {
  if (!(0, import_path.isAbsolute)(e)) throw L("internal", Error("sockets directory must be absolute here"));
  let n = process.getuid?.(), r = (g) => {
    if (g.isSymbolicLink()) throw L("leaf_shape", Error("sockets directory is a symlink \u2014 refusing to use it"), H(e, g));
    if (!g.isDirectory()) throw L("leaf_shape", Error("sockets directory exists but is not a directory"), H(e, g));
    if (n !== void 0 && !c(g.uid)) throw L("foreign_owner", Error("sockets directory is owned by another user \u2014 refusing to use it"), H(e, g));
  }, c = (g) => g === n, f = process.getgid?.(), o = await (0, import_chunk_d55td748.wll)();
  if (o?.uidCollapses) throw L("uid_collapse", Error("this process reads as the kernel overflow uid (user namespace without a uid mapping) \u2014 ownership cannot be verified; refusing to use the sockets directory"));
  c = (g) => g === n && !o?.uidCollapses;
  let p = (0, import_chunk_d55td748.bll)(), S = async (g, C) => {
    try {
      let D = C.isSymbolicLink() ? (0, import_path.join)(await (0, import_promises.realpath)((0, import_path.dirname)(g)), (0, import_path.basename)(g)) : await (0, import_promises.realpath)(g), T = await (0, import_promises.lstat)(D);
      return T.dev === C.dev && T.ino === C.ino ? D : void 0;
    } catch {
      return;
    }
  }, b = (g) => o !== void 0 && (o.unmappedOwnerUid !== void 0 && g === o.unmappedOwnerUid || g === 0 && o.rootUidAmbiguous), h = b, y = (g) => g !== void 0 && p.has(g), k = (g, C, D) => n === void 0 || c(g) || !C && (b(g) ? y(D) : g === 0), P = (g, C, D) => {
    if (!k(g.uid, C, D)) return false;
    if ((g.mode & 512) !== 0) return true;
    if ((g.mode & 2) !== 0) return false;
    if ((g.mode & 16) !== 0) return false;
    return true;
  }, _ = import_chunk_c203g5kd.s.TERMUX_VERSION && import_chunk_c203g5kd.s.PREFIX ? (0, import_path.dirname)((0, import_path.dirname)(import_chunk_c203g5kd.s.PREFIX)) : void 0, v = (g) => (0, import_path.dirname)(g) === g || g === _, A = async (g, C, D = 0) => {
    if (D > 16) throw L("symlink_loop", Error("sockets-directory chain: too many levels of symlinks"));
    let T = false, G, _e = false;
    for (let F = g, ee = true; ; F = (0, import_path.dirname)(F), ee = false) {
      let U;
      try {
        U = await (0, import_promises.lstat)(F);
      } catch (V) {
        if (!(0, import_chunk_jv7av99m.J)(V)) throw V;
      }
      if (U !== void 0) {
        G ??= F;
        let V = ee && C;
        if (U.isSymbolicLink()) {
          _e = true;
          let ne = h(U.uid) ? await S(F, U) : void 0;
          if (!k(U.uid, false, ne)) throw L("foreign_owner", Error("a sockets-directory component is a symlink owned by another user \u2014 refusing to use it"), H(F, U));
          let te = (await (0, import_promises.readlink)(F)).replace(/\/{2,}/g, "/"), de = te.length > 1 && te.endsWith("/") ? te.slice(0, -1) : te, Me = (0, import_path.isAbsolute)(de) ? de : `${await (0, import_promises.realpath)((0, import_path.dirname)(F))}/${de}`, { startExists: Ue } = await A(Me, V, D + 1);
          if (ee) T = Ue;
        } else {
          if (!U.isDirectory()) throw L("not_directory", Error("a sockets-directory component exists but is not a directory \u2014 refusing to use it"), H(F, U));
          let ne = h(U.uid) ? await S(F, U) : void 0;
          if (!P(U, V, ne)) throw L("directory_rule", Error("a sockets-directory component is not a private-or-sticky directory owned by us or root \u2014 refusing to use it"), H(F, U, !k(U.uid, V, ne)));
          if (ee) T = true;
        }
      }
      if (v(F)) break;
    }
    return { startExists: T, deepestExisting: G, sawSymlink: _e };
  }, E = (0, import_path.dirname)(e), I = await A(E, false), R = !I.startExists, O;
  try {
    O = await (0, import_promises.lstat)(e);
  } catch (g) {
    if (!(0, import_chunk_jv7av99m.J)(g)) throw g;
  }
  if (R && I.deepestExisting === E) throw ve();
  if (R) {
    let g = [], C = (D) => {
      if (!D.isDirectory() || n !== void 0 && !c(D.uid)) throw L("raced", Error("a sockets-directory component appeared while being created and is not our directory \u2014 refusing to use it"));
    };
    for (let D = E; D !== I.deepestExisting && !v(D); D = (0, import_path.dirname)(D)) g.unshift(D);
    for (let D of g) try {
      await (0, import_promises.mkdir)(D, { mode: 448 });
    } catch (T) {
      if ((0, import_chunk_jv7av99m.J)(T) && I.sawSymlink) throw ve();
      if ((0, import_chunk_jv7av99m.w)(T) !== "EEXIST") throw T;
      C(await (0, import_promises.lstat)(D));
    }
    if (!(await A(E, true)).startExists) throw L("raced", Error("sockets base directory vanished while being set up"));
  }
  if (O === void 0) {
    try {
      await (0, import_promises.mkdir)(e, { mode: 448 });
    } catch (g) {
      if ((0, import_chunk_jv7av99m.w)(g) !== "EEXIST") throw g;
    }
    O = await (0, import_promises.lstat)(e);
  }
  if (r(O), (O.mode & 511) !== 448) await (0, import_promises.chmod)(e, 448);
}
async function iGl(e) {
  if (!(0, import_path.isAbsolute)(e)) throw new import_chunk_jv7av99m.aE(e === "" ? "--messaging-socket-path was given an empty value (an unset shell variable?). Pass an absolute socket path." : `--messaging-socket-path must be an absolute path, got: ${e}`);
  if (e.split("/").includes("..")) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path must not contain '..' segments, got: ${e}`);
  let r = e.split("/").at(-1);
  if (r === "" || r === ".") throw new import_chunk_jv7av99m.aE(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
  let c = (0, import_path.normalize)(e).replace(/\/+$/, "");
  if (c === "" || !c.startsWith("/") || (0, import_path.basename)(c) === "") throw new import_chunk_jv7av99m.aE(`--messaging-socket-path must name a socket file inside a directory, got: ${e}`);
  if (!(0, import_chunk_xfj2cwfv.Q4)(c) || !(0, import_chunk_xfj2cwfv.Q4)(e)) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path must be a local socket path, got: ${e}`);
  if (Buffer.byteLength(c) > Z) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path is too long for a Unix socket (${Buffer.byteLength(c)} bytes, max ${Z}): ${c}. Choose a shorter path, e.g. under $XDG_RUNTIME_DIR or /tmp/<private-dir>.`);
  let f = (0, import_path.dirname)(c), o = "Use a private directory you own that only you use, e.g. mkdir -m 700 <dir> (or chmod 700 an existing one).", p = (_) => {
    if (_.isSymbolicLink()) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path directory must be a real directory, not a symlink: ${f}. ${o}`);
    if (!_.isDirectory()) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path parent is not a directory: ${f}.`);
    let v = process.getuid?.();
    if (v !== void 0 && _.uid !== v) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path directory ${f} is not owned by you (uid ${_.uid}). ${o}`);
    if ((_.mode & 63) !== 0) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path directory ${f} is not private (mode ${(_.mode & 4095).toString(8)}); the socket directory must be mode 0700 so no other user or group can reach or replace the socket. ${o}`);
  }, S = async () => {
    try {
      return await (0, import_promises.lstat)(f);
    } catch (_) {
      let v = (0, import_chunk_jv7av99m.w)(_);
      if ((0, import_chunk_jv7av99m.J)(_)) return;
      if (v === "ENOTDIR" || v === "EACCES" || v === "ELOOP" || v === "ENAMETOOLONG") throw new import_chunk_jv7av99m.aE(`--messaging-socket-path directory is not usable: ${f} (${v}). Fix the path or its permissions, or choose another path. ${o}`);
      throw new import_chunk_jv7av99m.aE(`--messaging-socket-path directory could not be examined: ${f} (${v ?? String(_)}). ${o}`);
    }
  }, b = await S();
  if (b !== void 0) return p(b), c;
  let h = process.getuid?.(), y = [];
  for (let _ = (0, import_path.dirname)(f); ; _ = (0, import_path.dirname)(_)) {
    let v;
    try {
      v = await (0, import_promises.lstat)(_);
    } catch (A) {
      if (!(0, import_chunk_jv7av99m.J)(A)) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path: cannot inspect ${_} (${(0, import_chunk_jv7av99m.w)(A) ?? A}). ${o}`);
      y.unshift(_);
    }
    if (v !== void 0) {
      if (h !== void 0 && v.uid !== h && v.uid !== 0) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path: ${_} ${v.isSymbolicLink() ? "is a symlink" : "is a directory"} owned by another user \u2014 refusing to create your sockets directory ${v.isSymbolicLink() ? "through" : "inside"} it. ${o}`);
      break;
    }
    if ((0, import_path.dirname)(_) === _) break;
  }
  let k = false;
  try {
    for (let _ of y) try {
      await (0, import_promises.mkdir)(_, { mode: 448 });
    } catch (v) {
      if ((0, import_chunk_jv7av99m.w)(v) !== "EEXIST") throw v;
      let A = await (0, import_promises.lstat)(_);
      if (!A.isDirectory() || h !== void 0 && A.uid !== h) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path: ${_} appeared while your sockets directory was being created and is not a directory you own \u2014 refusing to use it. ${o}`);
    }
    try {
      await (0, import_promises.mkdir)(f, { mode: 448 }), k = true;
    } catch (_) {
      if ((0, import_chunk_jv7av99m.w)(_) !== "EEXIST") throw _;
    }
  } catch (_) {
    if (_ instanceof import_chunk_jv7av99m.aE) throw _;
    throw new import_chunk_jv7av99m.aE(`--messaging-socket-path directory ${f} does not exist and could not be created (${(0, import_chunk_jv7av99m.w)(_) ?? _}). ${o}`);
  }
  let P = await S();
  if (P === void 0) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path directory ${f} vanished while being set up. ${o}`);
  if (!k) return p(P), c;
  return p(P), c;
}
async function aGl(e, n, r = {}) {
  a().startInFlight = true;
  try {
    return await mn(e, n, r);
  } finally {
    a().startInFlight = false;
  }
}
async function mn(e, n, r = {}) {
  let f = r.profileStartup ? performance.now() : void 0, o = (h) => {
    if (f === void 0) return;
    let y = performance.now();
    (0, import_chunk_zjhyjv3y.zo)(h, y - f, f), f = y;
  };
  if (a().lastStartFailureCause = "bind_failed", a().lastStartDegradedCause = void 0, !(0, import_chunk_xfj2cwfv.Q4)(e)) {
    if ((0, import_chunk_w578pjby.t)(`[uds-messaging] Refusing socket path \u2014 ${"not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space)"}: ${e}`, { level: "error" }), B(), a().lastStartFailureCause = "path_refused", r.isExplicit) throw new import_chunk_jv7av99m.aE(`--messaging-socket-path ${e} is not a usable local socket address (a remote/UNC path, or a pipe name with extra segments or a trailing dot/space).`);
    return;
  }
  if (!r.isExplicit && true && !(0, import_path.isAbsolute)(e)) e = (0, import_path.resolve)(e);
  if (r.isExplicit) {
    if (e = await iGl(e), await ye(e) === "live") throw new import_chunk_jv7av99m.aE(`--messaging-socket-path points to a live socket: ${e}. Another process is listening there. Remove it or choose a different path.`);
  } else {
    let h = (0, import_path.dirname)(e);
    try {
      await Ae(h);
    } catch (y) {
      let k = ln(y) ? await (0, import_chunk_d55td748.V_r)() : void 0, P = k === void 0 ? void 0 : (0, import_path.resolve)(YAa(k)), _ = P === void 0 ? void 0 : (0, import_path.join)(P, "..");
      if (P === void 0 || _ === void 0 || _ === h) return Ce(h, y, $e(y));
      let v = Te(y);
      (0, import_chunk_w578pjby.t)(`[uds-messaging] sockets directory ${h} refused (${(0, import_chunk_jv7av99m.d)(y)}${v ? `; refused component: ${v}` : ""}); trying the per-uid fallback ${_}`, { level: "warn" });
      try {
        await Ae(_);
      } catch (A) {
        return Ce(_, A, $e(A));
      }
      e = P, le("primary_dir_refused_fell_back");
    }
  }
  if (r.isExplicit) try {
    await (0, import_promises.unlink)(e);
  } catch {
  }
  if (a().activeSocketPath = e, a().hostNamedSocket = r.isExplicit === true, r.profileStartup) (0, import_chunk_k5jn5rx9.ts)("uds_inbox_dir_ready");
  o("setup_uds_dir_ms");
  let p, S;
  try {
    p = (0, import_net.createServer)({ allowHalfOpen: true }, (h) => {
      a().connectedClients.add(h), (0, import_chunk_w578pjby.t)("[uds-messaging] Client connected"), nn(h), h.on("close", () => {
        a().connectedClients.delete(h), (0, import_chunk_w578pjby.t)("[uds-messaging] Client disconnected");
      });
    });
  } catch (h) {
    Q(), (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to create server: ${String(h)}`, { level: "error" }), B();
    return;
  }
  p.on("error", (h) => {
    (0, import_chunk_w578pjby.t)(`[uds-messaging] Server error: ${h.message}`, { level: "error" });
  }), a().authRequired = r.requireAuth ?? (0, import_chunk_865at33z.rxo)(), a().firstLineDeadlineMs = r.firstLineDeadlineMs ?? import_chunk_865at33z.Oxs;
  let b = (0, import_chunk_865at33z.xIl)();
  a().activeTokens = b;
  try {
    if (r.isExplicit) {
      if (!await ie(p, e)) throw Error("listen EADDRINUSE on the requested socket path");
    } else e = await on(p, e), a().activeSocketPath = e;
    if (r.profileStartup) (0, import_chunk_k5jn5rx9.ts)("uds_inbox_listening");
    o("setup_uds_listen_ms");
    {
      let R = await (0, import_chunk_d55td748.V_r)(), O = process.getuid?.();
      a().peerDirOwnerUids = [...O !== void 0 ? [O] : [], ...R !== void 0 && R !== O ? [R] : []];
    }
    p.unref();
    let h = (0, import_chunk_w578pjby.Ct)(async () => {
      (0, import_chunk_w578pjby.t)("[uds-messaging] Shutting down"), await z(p, e, n);
    });
    S = h, await (0, import_promises.chmod)(e, 384);
    let y = void 0, k = performance.now(), P = a().keyPublish, _ = () => a().activeTokens === b, v = () => {
      if (performance.now() - k > a().keyPublishRegisterWaitMs && !(0, import_chunk_bzyb60p0.Zr)()) (0, import_chunk_865at33z.U4i)(e, n).catch(import_chunk_k449cc64.i);
    }, A = (async () => {
      try {
        await P?.catch(() => {
        }), a().pendingKeyFile = (0, import_path.join)((0, import_chunk_865at33z.She)(), (0, import_chunk_865at33z.Lxs)(process.pid, e)), hn();
        let R = await (0, import_chunk_865at33z.PIl)(e, b.peerToken, n, { sweepPermitted: await (0, import_chunk_865at33z.KCt)(), profileStartup: r.profileStartup, stillWanted: _ });
        if (!_()) return await (0, import_chunk_865at33z.M4i)(R, n), "published";
        return a().activeKeyFile = R, v(), "published";
      } catch (R) {
        if (y = R, !_()) return "published";
        if (a().authRequired) return (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to publish the inbox auth key: no other session can authenticate, so this inbox is not advertised to them; this session's own children still reach it: ${(0, import_chunk_p51r1nb3.XQ)((0, import_chunk_jv7av99m.d)(R))}`, { level: "error" }), le("key_publish_failed"), "unadvertised";
        return (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to publish the inbox auth key; peers will send unauthenticated (accepted: auth is optional on this platform): ${(0, import_chunk_p51r1nb3.XQ)((0, import_chunk_jv7av99m.d)(R))}`, { level: "warn" }), le("key_publish_failed"), v(), "degraded";
      } finally {
        if (a().pendingKeyFile = void 0, r.profileStartup) (0, import_chunk_k5jn5rx9.ts)("uds_inbox_key_published");
      }
    })();
    if (a().keyPublish = A, r.isExplicit) {
      let R = await A;
      if (!_()) return;
      if (R === "unadvertised") throw a().lastStartFailureCause = "key_publish_failed", await z(p, e, n, { settleHeld: false }), h(), B(), new import_chunk_jv7av99m.aE(`--messaging-socket-path: bound ${e} but could not publish its auth key (${(0, import_chunk_jv7av99m.w)(y) ?? y}); peers could not authenticate, so the inbox was closed. Check that the session registry directory is writable by you.`);
    }
    o("setup_uds_publish_ms"), import_chunk_c203g5kd.zM.set("CLAUDE_CODE_MESSAGING_SOCKET", e), import_chunk_c203g5kd.zM.set("CLAUDE_CODE_MESSAGING_TOKEN", b.childToken), (0, import_chunk_p51r1nb3.VOi)((0, import_chunk_xfj2cwfv.Ode)(e));
    let E = (0, import_chunk_xfj2cwfv.Ode)(e);
    return (0, import_chunk_6gdq9za5.p3s)(Pe), (0, import_chunk_89bjmq9y.xH)().senderMode = XAa, (0, import_chunk_kas3c2bm.bzo)((R, O, g, C, D) => (0, import_chunk_p51r1nb3.okt)(R, { action: "peer_idle_notice", ...O, from: E, ...C ? gn() : {} }, { ...g !== void 0 && { expectPeerPid: g }, ...D !== void 0 && { expectPeerProcStart: D }, storageV5: n })), (0, import_chunk_mvbpsqbk.vXs)((R, O, g, C) => (0, import_chunk_p51r1nb3.okt)(R, { action: "artifact_replies_yielded", ...O, from: E }, { ...g !== void 0 && { expectPeerPid: g }, ...C !== void 0 && { expectPeerProcStart: C }, storageV5: n }), E), (0, import_chunk_kas3c2bm.kzo)((R) => (0, import_chunk_p51r1nb3.ZOi)(R)), (0, import_chunk_6gdq9za5.f3s)((R, O, g) => {
      let C = R.origin?.kind === "peer" ? R.origin : void 0, D = C?.from;
      if (typeof D !== "string") return;
      let T = hzo(D, e, C?.verifiedPeerPid);
      if (T === void 0) {
        (0, import_chunk_w578pjby.t)(`[uds-messaging] hold-receipt skipped: reply address unshaped or outside our socket namespace (${(0, import_chunk_p51r1nb3.Uk)(D)})`);
        return;
      }
      return (0, import_chunk_p51r1nb3.okt)(T, { action: "peer_message_status", ...O === "refused" ? { status: "expired", status_detail: "refused" } : { status: O }, reason: pn(O), from: E, ...typeof C?.msg_id === "string" && { orig_msg_id: C.msg_id }, ...O === "dropped" && g !== void 0 && { drop_reason: g.dropReason, dropped_msg_ids: g.droppedMsgIds } }, { ...C?.verifiedPeerPid !== void 0 && { expectPeerPid: C.verifiedPeerPid }, ...C?.verifiedPeerProcStart !== void 0 && { expectPeerProcStart: C.verifiedPeerProcStart }, storageV5: n }).catch((G) => (0, import_chunk_w578pjby.t)(`[uds-messaging] hold-receipt send failed to ${(0, import_chunk_p51r1nb3.Uk)(D)}: ${(0, import_chunk_p51r1nb3.XQ)(String(G))}`));
    }), (0, import_chunk_w578pjby.t)(`[uds-messaging] Listening: ${e}`, { level: "info" }), (0, import_chunk_w578pjby.t)(`[uds-messaging] Inject messages (auth line ${a().authRequired ? "REQUIRED" : "optional"} here): { echo '{"type":"auth","token":"'"$CLAUDE_CODE_MESSAGING_TOKEN"'"}'; echo '{"type":"user","message":{"role":"user","content":"hello"}}'; } | socat - UNIX-CONNECT:${e}`), (0, import_chunk_w578pjby.t)(`[uds-messaging] Connect when the data is ready (e.g. out=$(cmd); printf '%s\\n' "$out" | ${"nc -U"} "$CLAUDE_CODE_MESSAGING_SOCKET" \u2014 or the socat form above): a connection that sends no complete line within ${a().firstLineDeadlineMs} ms is closed`), a().lastStartFailureCause = void 0, tn(p, e, n, h);
  } catch (h) {
    if (h instanceof import_chunk_jv7av99m.aE) throw h;
    if (r.isExplicit) {
      let y = (0, import_chunk_jv7av99m.w)(h);
      if (S !== void 0) throw await z(p, e, n, { settleHeld: false }), S(), B(), a().lastStartFailureCause = "post_bind_setup_failed", new import_chunk_jv7av99m.aE(`--messaging-socket-path: bound ${e} but could not finish setting the socket up (${y ?? String(h)}); the inbox was closed. The filesystem there may not support socket permissions \u2014 choose another directory.`);
      Q(), B();
      let k = y === "ENAMETOOLONG" ? "the path is too long for a Unix socket (max ~104 bytes); choose a shorter one" : y === "EADDRINUSE" ? "something already exists at that path and could not be replaced; remove it or choose another path" : y === "EACCES" || y === "EPERM" ? "permission denied in that directory" : "the socket could not be created there";
      throw new import_chunk_jv7av99m.aE(`--messaging-socket-path: cannot bind at ${e} (${y ?? String(h)}): ${k}.`);
    }
    if (S !== void 0) await z(p, e, n, { settleHeld: false }), S(), a().lastStartFailureCause = "post_bind_setup_failed";
    if ((0, import_chunk_jv7av99m.w)(h) === "ENAMETOOLONG") (0, import_chunk_w578pjby.t)(`[uds-messaging] Socket path too long (${e.length} bytes, max ~104): ${e}. Try a shorter --messaging-socket-path, or set CLAUDE_CODE_TMPDIR or $XDG_RUNTIME_DIR to a shorter directory.`, { level: "error" });
    else (0, import_chunk_w578pjby.t)(`[uds-messaging] Failed to start: ${h}`, { level: "error" });
    Q(), B();
    return;
  }
}
function pn(e) {
  switch (e) {
    case "held":
      return "Your message is held for the recipient user's approval before it reaches their Claude session (permission-mode parity).";
    case "denied":
      return "The recipient user declined your message; it was not delivered to their Claude session.";
    case "expired":
      return "Your held message expired without approval and was not delivered to the recipient's Claude session.";
    case "delivered":
      return "Your previously-held message was approved and released to the recipient's Claude session.";
    case "refused":
      return "The recipient session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); your message was not delivered to its Claude.";
    case "dropped":
      return "The recipient's session dropped your message at its inbox (rate limit, duplicate, relay loop, or full queue); it was not delivered and will not be.";
  }
}
function gn() {
  let e = XAa();
  return e === void 0 ? {} : { from_mode: e };
}
function XAa() {
  if (!(0, import_chunk_6gdq9za5._vn)()) return;
  let e = (0, import_chunk_mvszxaxb.Zo)().inbound.getCurrentMode;
  if (e) try {
    return (0, import_chunk_6gdq9za5.aYt)(e());
  } catch {
    return;
  }
  let n = (0, import_chunk_mvszxaxb.Zo)().inbound.modeAtUnwire;
  return n !== void 0 ? (0, import_chunk_6gdq9za5.aYt)(n) : void 0;
}
function Ie(e) {
  return (0, import_chunk_xfj2cwfv.iHl)(e) ? e : void 0;
}
function pe(e, n, r) {
  return Se({ selfSentAncestry: n, verifiedPeerPid: e, childTokenPresented: r === "child", needsVerdict: (0, import_chunk_6gdq9za5._3s)(), platform: (0, import_chunk_cg8dqz0a.x)() });
}
function hn() {
  if (!process.listeners("exit").includes(JAa)) process.on("exit", JAa);
}
function JAa() {
  try {
    let { activeKeyFile: e, pendingKeyFile: n } = a();
    for (let r of /* @__PURE__ */ new Set([e, n])) {
      if (r === void 0) continue;
      try {
        (0, import_fs.unlinkSync)(r);
      } catch {
      }
    }
  } catch {
  }
}
