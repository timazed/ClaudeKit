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
var chunk_p51r1nb3_exports = {};
__export(chunk_p51r1nb3_exports, {
  Epe: () => Epe,
  GOi: () => GOi,
  Gps: () => Gps,
  Hyr: () => Hyr,
  Iyr: () => Iyr,
  JOi: () => JOi,
  Jdl: () => Jdl,
  KOi: () => KOi,
  Myr: () => Myr,
  Oyr: () => Oyr,
  Pyr: () => Pyr,
  QOi: () => QOi,
  Qdl: () => Qdl,
  Ryr: () => Ryr,
  Uk: () => Uk,
  VOi: () => VOi,
  Wps: () => Wps,
  XOi: () => XOi,
  XQ: () => XQ,
  Xdl: () => Xdl,
  YOi: () => YOi,
  Yae: () => Yae,
  ZOi: () => ZOi,
  _be: () => _be,
  _mo: () => _mo,
  cin: () => cin,
  din: () => din,
  e8e: () => e8e,
  eBt: () => eBt,
  eIi: () => eIi,
  gFn: () => gFn,
  gmo: () => gmo,
  hFn: () => hFn,
  hmo: () => hmo,
  jps: () => jps,
  lin: () => lin,
  oZl: () => oZl,
  okt: () => okt,
  qOi: () => qOi,
  sZl: () => sZl,
  tIi: () => tIi,
  uin: () => uin,
  vpe: () => vpe,
  xyr: () => xyr,
  ybe: () => ybe,
  zOi: () => zOi,
  zps: () => zps
});
module.exports = __toCommonJS(chunk_p51r1nb3_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_txqh3v33 = require("/$bunfs/root/chunk-txqh3v33.js");
var import_chunk_a9c4wn56 = require("/$bunfs/root/chunk-a9c4wn56.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_net = require("net");
var import_path = require("path");
function U(e, n, r, i, d) {
  let f = Math.max(0, r - n) / 1e3;
  return Math.min(i, e + f * d);
}
function G(e) {
  return e >= 1;
}
function xyr(e, n, r, i, d = () => true) {
  let f = e.get(n);
  if (f !== void 0) return e.delete(n), e.set(n, f), f;
  while (e.size >= Math.max(1, r)) {
    let m;
    for (let [a, o] of e) if (d(o)) {
      m = a;
      break;
    }
    if (m ??= e.keys().next().value, m === void 0) break;
    e.delete(m);
  }
  let g = i();
  return e.set(n, g), g;
}
(0, import_chunk_adx6804h.B)();
var V = { bucketCapacity: 30, refillPerSecond: 0.5, dedupWindowMs: 3e4, maxSelfHops: 10, maxChainLength: 28, maxTrackedSenders: 256 };
function q(e, n) {
  if (!e || n.size === 0) return 0;
  let r = 0;
  for (let i of e) if (n.has(i)) r++;
  return r;
}
function GOi(e = {}, n) {
  let r = { ...V, now: () => Date.now(), ...e }, i = () => n ? { ...r, ...n() } : r, d = /* @__PURE__ */ new Map();
  function f(a, o) {
    return xyr(d, a, o.maxTrackedSenders, () => ({ tokens: o.bucketCapacity, lastRefill: o.now(), lastBody: void 0, lastBodyAt: 0 }));
  }
  function g(a, o) {
    let u = i();
    if (a !== void 0 && a.length > u.maxChainLength) return { admitted: false, reason: "hop-runaway" };
    if (q(a, o) >= u.maxSelfHops) return { admitted: false, reason: "hop-loop" };
    return;
  }
  function m(a) {
    let o = i(), u = o.now(), v = g(a.hopChain, a.ownTokens);
    if (v) return v;
    let k = f(a.senderKey, o);
    if (k.lastBody !== void 0 && k.lastBody === a.body && u - k.lastBodyAt < o.dedupWindowMs) return { admitted: false, reason: "duplicate" };
    if (k.tokens = U(k.tokens, k.lastRefill, u, o.bucketCapacity, o.refillPerSecond), k.lastRefill = u, !G(k.tokens)) return { admitted: false, reason: "rate-limited" };
    return k.tokens -= 1, k.lastBody = a.body, k.lastBodyAt = u, { admitted: true };
  }
  return { admit: m, checkHopChain: g, trackedSenderCount: () => d.size };
}
var De = { "rate-limited": true, duplicate: true, "hop-loop": true, "hop-runaway": true, "queue-full": true };
function Le(e) {
  return typeof e === "string" && Object.hasOwn(De, e);
}
function Jdl(e) {
  return Le(e) ? e : void 0;
}
var zOi = 256, j = 6e4, pe = 256, Oe = 20;
function VOi(e) {
  (0, import_chunk_mvszxaxb.Zo)().ingress.ownUdsHopToken = e === void 0 ? void 0 : (0, import_chunk_txqh3v33.skt)(e);
}
function Pyr(e) {
  (0, import_chunk_mvszxaxb.Zo)().ingress.ownBridgePeerAddressResolver = e;
}
function Wps() {
  let { ownUdsHopToken: e, ownBridgePeerAddressResolver: n } = (0, import_chunk_mvszxaxb.Zo)().ingress, r = /* @__PURE__ */ new Set();
  if (e) r.add(e);
  let i = n?.();
  if (i) r.add((0, import_chunk_txqh3v33.skt)(i));
  let d = (0, import_chunk_a9c4wn56._le)();
  if (d) r.add((0, import_chunk_txqh3v33.skt)((0, import_chunk_xfj2cwfv.BNe)(d)));
  return r;
}
var Te = { "rate-limited": "sender exceeded the peer message rate limit", duplicate: "identical to the previous message from this sender", "hop-loop": "message has already passed through this session (a peer messaging loop)", "hop-runaway": "peer relay chain is too long (runaway forwarding)", "queue-full": "this session has too many undelivered peer messages queued" };
function Z(e) {
  return { from: (0, import_chunk_xfj2cwfv.wOr)(e.from) ? e.from : "(unrenderable sender address)", name: e.name ? (0, import_chunk_xfj2cwfv.UNe)(e.name) : "" };
}
function Qdl(e) {
  let { from: n } = Z(e), { name: r } = Z(e), i = r ? `@${r} (${n})` : n, d = e.suppressed > 0 ? ` (+${e.suppressed} similar ${(0, import_chunk_7cfjrnwy.O)(e.suppressed, "drop")} suppressed)` : "";
  return `Dropped a peer message from ${i}: ${Te[e.reason]}.${d}`;
}
var Ce = 500, Fe = 5e3, Ne = 40;
function Q(e, n) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  let { pending: r, pendingIds: i, pendingSend: d } = e;
  if (e.pending = 0, e.pendingIds = [], e.pendingSend = void 0, r > 0 && d && n()) return d(i);
}
function KOi({ trailMs: e = Fe } = {}) {
  let n = /* @__PURE__ */ new Map(), r = 0, i = 0;
  function d(S = Date.now()) {
    if (S - r >= j) r = S, i = 0;
    if (i >= Ne) return false;
    return i++, true;
  }
  function f(S, R, h, I = Date.now()) {
    let y = n.get(S);
    if (y === void 0) y = { lastImmediateAt: Number.NEGATIVE_INFINITY, pendingIds: [], pending: 0, timer: void 0, pendingSend: void 0 };
    if (n.delete(S), n.set(S, y), n.size > pe) {
      let D = n.keys().next().value;
      if (D !== void 0 && D !== S) {
        let T = n.get(D);
        if (n.delete(D), T !== void 0) Q(T, () => d(I));
      }
    }
    if (I - y.lastImmediateAt >= j && y.pending === 0) {
      if (y.lastImmediateAt = I, d(I)) h([]);
      return;
    }
    if (y.pending++, R !== void 0 && y.pendingIds.length < zOi) y.pendingIds.push(R);
    if (y.pendingSend = h, y.timer === void 0) y.timer = setTimeout(Q, e, y, d), y.timer.unref?.();
  }
  let g = /* @__PURE__ */ new Map(), m = 0, a = 0, o = 0;
  function u(S, R = Date.now()) {
    let h = Z(S);
    (0, import_chunk_w578pjby.t)(`[peer-guard] drop ${S.reason} from ${h.from}${h.name ? ` (@${h.name})` : ""}`);
    let I = `${S.from}\0${S.reason}`, y = g.get(I);
    if (y && R - y.lastReportAt < j) {
      y.suppressed++;
      return;
    }
    if (R - m >= j) m = R, a = 0;
    if (a >= Oe) {
      o++;
      return;
    }
    a++;
    let D = (y?.suppressed ?? 0) + o;
    if (o = 0, g.delete(I), g.set(I, { lastReportAt: R, suppressed: 0 }), g.size > pe) {
      let F = g.keys().next().value;
      if (F !== void 0) g.delete(F);
    }
    let T = { ...S, suppressed: D };
    (0, import_chunk_w578pjby.t)(`[peer-guard] Dropped peer message from ${h.from}${h.name ? ` (@${h.name})` : ""}: ${S.reason}${D > 0 ? ` (+${D} suppressed)` : ""}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("peer_loop_guard", S.reason), (0, import_chunk_mvszxaxb.Zo)().ingress.messageDropped.emit(T);
  }
  async function v(S = Ce) {
    let R = [];
    for (let h of n.values()) if (h.pending > 0) R.push(Q(h, d));
    else if (h.timer !== void 0) clearTimeout(h.timer), h.timer = void 0;
    if (R.length === 0) return;
    await Promise.race([Promise.allSettled(R), (0, import_chunk_5appeerh.K)(S, void 0, { unref: true })]);
  }
  function k() {
    for (let S of n.values()) if (S.timer !== void 0) clearTimeout(S.timer);
    n.clear();
  }
  return { report: u, noteDropForReceipt: f, flushPendingReceipts: v, dispose: k };
}
var Me = 50, re = { ...V, maxQueuedPeerMessages: Me, maxDesktopForwards: 1e5, maxLocalRelays: 1e5, countLocalHops: false }, W = { maxDesktopForwards: 20, maxLocalRelays: 20, countLocalHops: true }, L = re, Ue = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ bucketCapacity: (0, import_chunk_adx6804h.E)().min(5).max(500).catch(L.bucketCapacity), refillPerSecond: (0, import_chunk_adx6804h.E)().min(0.05).max(50).catch(L.refillPerSecond), dedupWindowMs: (0, import_chunk_adx6804h.E)().int().min(0).max(6e5).catch(L.dedupWindowMs), maxSelfHops: (0, import_chunk_adx6804h.E)().int().min(3).max(import_chunk_xfj2cwfv.bOr).catch(L.maxSelfHops), maxChainLength: (0, import_chunk_adx6804h.E)().int().min(8).max(import_chunk_xfj2cwfv.bOr - 1).catch(L.maxChainLength), maxTrackedSenders: (0, import_chunk_adx6804h.E)().int().min(16).max(1e5).catch(L.maxTrackedSenders), maxQueuedPeerMessages: (0, import_chunk_adx6804h.E)().int().min(10).max(5e3).catch(L.maxQueuedPeerMessages), maxDesktopForwards: (0, import_chunk_adx6804h.E)().int().min(1).max(L.maxDesktopForwards).default(L.maxDesktopForwards).catch(W.maxDesktopForwards), maxLocalRelays: (0, import_chunk_adx6804h.E)().int().min(1).max(L.maxLocalRelays).default(L.maxLocalRelays).catch(W.maxLocalRelays), countLocalHops: (0, import_chunk_adx6804h.P)().default(L.countLocalHops).catch(W.countLocalHops) })), He = 3e5;
function Epe() {
  let e = (0, import_chunk_865at33z.yoe)("tengu_harbor_kite_limits", re, He), n = Ue().safeParse(e);
  if (!n.success) return (0, import_chunk_w578pjby.t)("[peer-guard] tengu_harbor_kite_limits is not an object; using fallbacks", { level: "warn" }), { ...re, ...W };
  return n.data;
}
function gmo(e) {
  return e.verifiedLocal === true && !Epe().countLocalHops;
}
function hFn(e) {
  let { maxChainLength: n, maxSelfHops: r } = Epe(), i = (0, import_chunk_xfj2cwfv.F6n)(e);
  return i.length > n || q(i, Wps()) >= r;
}
var Be = /[0-9a-f]{32,}/gi;
function le(e) {
  return e.replace(Be, (n) => `<hex:${(0, import_chunk_myvyhcm0.Zn)(n)}>`);
}
function Uk(e, n = 120) {
  if (/token/i.test(e)) return "(withheld)";
  return (0, import_chunk_7cfjrnwy.Ea)(le(e), n);
}
function XQ(e) {
  if (/token/i.test(e)) return "(redacted: fragment may carry an auth token)";
  return (0, import_chunk_7cfjrnwy.Ea)(le(e), 200);
}
function hmo(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return null;
  let n = fe(e);
  if (n < 0) return null;
  try {
    return Bun.ant.getPeerUid(n);
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`[daemon] peer uid lookup failed: ${r instanceof Error ? r.message : String(r)}`, { level: "warn" }), null;
  }
}
function Xdl(e, n = hmo) {
  let r = process.getuid?.();
  if (r == null) return null;
  let i = n(e);
  if (i == null) return null;
  if (i === r) return null;
  let d = `permission denied: connecting uid ${i} != daemon uid ${r} (retry without sudo, or as the daemon owner)`;
  return (0, import_chunk_w578pjby.t)(`[daemon] rejecting control connection: ${d}`, { level: "error" }), d;
}
function lin(e) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return;
  let n = fe(e);
  try {
    let r = n < 0 ? null : Bun.ant.getPeerPid(n);
    if (r !== null && r > 0) return r;
    (0, import_chunk_w578pjby.t)(`[peer-cred] peer pid unavailable (fd=${n}, got=${r})`, { level: "warn" });
    return;
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[peer-cred] peer pid lookup failed: ${r instanceof Error ? r.message : String(r)}`, { level: "warn" });
    return;
  }
}
function fe(e) {
  let n = e._handle;
  return typeof n?.fd === "number" ? n.fd : -1;
}
var Ryr = 1048576;
function me(e, n = Date.now) {
  let r = /* @__PURE__ */ new Map();
  function i(m, a) {
    let { bucketCapacity: o, refillPerSecond: u, maxTrackedSenders: v } = e(), k = false, S = xyr(r, m, v, () => (k = true, { tokens: o, updatedAt: a, sentInBurst: 0, burstStartedAt: a }), (R) => U(R.tokens, R.updatedAt, a, o, u) >= o);
    if (!k) {
      S.tokens = U(S.tokens, S.updatedAt, a, o, u), S.updatedAt = a;
      let R = o / Math.max(u, 1e-9) * 1e3;
      if (S.tokens >= o || a - S.burstStartedAt > R) S.sentInBurst = 0, S.burstStartedAt = a;
    }
    return S;
  }
  function d(m) {
    let a = i(m, n());
    if (!G(a.tokens)) return { ok: false, sentInBurst: a.sentInBurst };
    a.tokens -= 1, a.sentInBurst += 1;
    let o = a, u = false;
    return { ok: true, refund: () => {
      if (u) return;
      u = true, o.tokens = Math.min(e().bucketCapacity, o.tokens + 1), o.sentInBurst = Math.max(0, o.sentInBurst - 1);
    } };
  }
  function f(m) {
    let a = i(m, n());
    a.tokens = Math.min(e().bucketCapacity, a.tokens + 1), a.sentInBurst = Math.max(0, a.sentInBurst - 1);
  }
  function g(m) {
    let a = i(m, n());
    a.tokens = Math.max(0, a.tokens - 1), a.sentInBurst += 1;
  }
  return { reserve: d, credit: f, debit: g };
}
var ge = "no_live_inbox", Se = "ENOINBOX", be = "message_too_large";
function ye(e, n) {
  return new import_chunk_jv7av99m.A(`Message too large for cross-session delivery: the serialized message is ${e.toLocaleString("en-US")} characters and the limit is ${n.toLocaleString("en-US")}. Shorten the message text \u2014 put bulk content in a file the recipient can read rather than in the message \u2014 or split it into smaller messages.`, "cross-session message exceeds the line cap", be);
}
function din(e) {
  return e instanceof import_chunk_jv7av99m.A && e.errorClass === be;
}
var Pe = "sender_paced";
function we(e) {
  return new import_chunk_jv7av99m.A(`Too many messages to this session just now: ${e} were sent recently and more would be dropped by its rate limit, so this one was not sent. Batch what remains into one message, or wait a little before sending more.`, "cross-session sends to one target outpaced its inbox rate limit", Pe);
}
function cin(e) {
  return e instanceof import_chunk_jv7av99m.A && e.errorClass === Pe;
}
function jps(e) {
  let n = (0, import_chunk_jv7av99m.w)(e);
  return n === "ENOENT" || n === "ECONNREFUSED" || e instanceof import_chunk_jv7av99m.A && e.errorClass === ge;
}
class z extends import_chunk_jv7av99m.A {
  kind;
  constructor(e, n) {
    super(n, "no live inbox registered for the target pipe", ge);
    this.name = "NoLiveInboxError", this.kind = e;
  }
}
function Gps(e) {
  return e instanceof z && e.kind === "unusable";
}
function e8e(e) {
  if (Gps(e)) return "busy";
  if (jps(e)) return "gone";
  let n = (0, import_chunk_jv7av99m.w)(e);
  return n === "EBUSY" || n === "EAGAIN" ? "busy" : "other";
}
function uin(e) {
  return ` \u2014 the peer process may have restarted, so this socket path is stale. Call ${e} to get the current address.`;
}
var qOi = " \u2014 the peer is alive but its pipe is momentarily busy. Retry the same address shortly.", $e = " \u2014 this machine's session registry could not be read just now (a transient local condition). Retry the same address shortly.";
function _mo(e) {
  return Gps(e) ? $e : qOi;
}
class _be extends Error {
  refusal;
  constructor(e, n) {
    super(n);
    this.name = "UdsSendRefusedError", this.refusal = e;
  }
}
function vpe(e) {
  if (e instanceof _be || jps(e) || cin(e) || din(e)) return true;
  let n = (0, import_chunk_jv7av99m.w)(e);
  return n === "EBUSY" || n === "EAGAIN" || n === "EACCES";
}
function Xe(e) {
  if (typeof e !== "object" || e === null) return false;
  let { name: n, until: r, sessionId: i } = e;
  return typeof n === "string" && (0, import_chunk_v6cdm8tp.EVn)(r) && (i === void 0 || typeof i === "string");
}
function Ve(e) {
  if (!Array.isArray(e)) return [];
  return e.filter(Xe).slice(0, import_chunk_865at33z.jxs).map(({ name: n, until: r, sessionId: i }) => ({ name: (0, import_chunk_7cfjrnwy.ee)(n, import_chunk_xfj2cwfv.dD), until: r, ...i !== void 0 && { sessionId: (0, import_chunk_7cfjrnwy.ee)(i, import_chunk_xfj2cwfv.dD) } }));
}
function qe() {
  return (0, import_chunk_mvszxaxb.Zo)().outbound.pacer ??= me(Epe);
}
var Je = { ok: true, refund: () => {
} };
function Ye() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_HARBOR_KITE_PACING_OFF) return false;
  return !(0, import_chunk_865at33z.b)("tengu_harbor_kite_pacing_off", false);
}
function YOi(e) {
  xe(e, (n, r) => n.credit(r));
}
function zps(e) {
  xe(e, (n, r) => n.debit(r));
}
function xe(e, n) {
  let r = (0, import_chunk_mvszxaxb.Zo)().outbound.pacer;
  if (!r) return;
  let { scheme: i, target: d } = (0, import_chunk_xfj2cwfv.Wb)(e);
  if (i !== "uds") return;
  n(r, (0, import_chunk_865at33z.GN)(d) ?? d);
}
async function XOi(e, n, r, i, d, f, g, { trackReceipts: m = true, expectPeerPid: a, expectPeerProcStart: o, fromPlugin: u, recipientName: v } = {}) {
  let k = ybe(), S = k ? (0, import_chunk_xfj2cwfv.Ode)(k) : void 0, R = (0, import_chunk_865at33z.b)("tengu_tidy_fern", true) ? (0, import_chunk_865at33z.Fzn)() : void 0, h = S ? (0, import_chunk_txqh3v33.skt)(S) : void 0, I = (0, import_chunk_xfj2cwfv.lPo)(f && (0, import_chunk_xfj2cwfv.F6n)(f), h), y = h && f && gmo(f) ? f : void 0, D = I;
  if (y) {
    let N = y.hopChain ?? [];
    D = [...y.fullHopChain ? N.slice(0, -1) : N, (0, import_chunk_txqh3v33.skt)(N.join())];
  }
  let T = (0, import_chunk_xfj2cwfv.Lmn)(S, i, (0, import_chunk_865at33z.h6t)(n), R, D, g), F = (0, import_chunk_mvszxaxb.Sbe)(), ce = { ...F, type: "user", message: { role: "user", content: T }, priority: "next", from: S, ...u !== void 0 && { from_plugin: u }, ...y && { local_chain: I?.join() }, ...(d?.length ?? 0) > 0 && { file_attachments: d } }, Ae = Ee(ce), H = (S !== void 0 || (0, import_chunk_cg8dqz0a.x)() !== "windows") && Ye() ? qe().reserve((0, import_chunk_865at33z.GN)(e) ?? e) : Je;
  if (!H.ok) throw (0, import_chunk_w578pjby.t)(`[uds-client] paced: not sending to ${Uk(e)} \u2014 ${H.sentInBurst} sent this burst; its inbox rate limit would drop more`), we(H.sentInBurst);
  if ((0, import_chunk_w578pjby.t)(`[uds-client] Sending ${n.length} chars to ${Uk(e)}`), m) Qe(F.msg_id, (0, import_chunk_xfj2cwfv.Ode)(e), v);
  try {
    await ve(e, ce, r, { noFollowSymlink: true, preflightedJson: Ae, ...a !== void 0 && { expectPeerPid: a }, ...o !== void 0 && { expectPeerProcStart: o } });
  } catch (N) {
    if (vpe(N)) {
      if (H.refund(), m) Ze(F.msg_id);
    }
    throw N;
  }
  return { msgId: F.msg_id };
}
var Ie = 200;
function Qe(e, n, r) {
  let i = (0, import_chunk_mvszxaxb.Zo)().receipts.outstandingSends;
  if (i.length >= Ie) i.shift();
  i.push({ msgId: e, to: n, handle: (0, import_chunk_xfj2cwfv.UNe)(r ?? "", 1 / 0) || void 0 });
}
function Ze(e) {
  let n = (0, import_chunk_mvszxaxb.Zo)().receipts.outstandingSends, r = n.findIndex((i) => i.msgId === e);
  if (r !== -1) n.splice(r, 1);
}
function JOi(e, n) {
  if (typeof e !== "string") return;
  let { outstandingSends: r, awaitingTerminal: i } = (0, import_chunk_mvszxaxb.Zo)().receipts, d = r.findIndex((g) => g.msgId === e);
  if (d !== -1) {
    let [g] = r.splice(d, 1);
    if (!g) return;
    if (n === "held") {
      if (i.length >= Ie) i.shift();
      i.push(g);
    }
    return { sent: g, wasHeld: false };
  }
  let f = i.findIndex((g) => g.msgId === e);
  if (f !== -1 && n !== "held") {
    let [g] = i.splice(f, 1);
    return g ? { sent: g, wasHeld: true } : void 0;
  }
  return;
}
function QOi(e) {
  let n = /* @__PURE__ */ new Map();
  if (e.length === 0) return n;
  let r = new Set(e), { outstandingSends: i, awaitingTerminal: d } = (0, import_chunk_mvszxaxb.Zo)().receipts;
  for (let f of [i, d]) {
    let g = f === d;
    for (let m = 0; m < f.length; ) {
      let a = f[m];
      if (r.delete(a.msgId)) {
        f.splice(m, 1);
        let o = n.get(a.to) ?? { sends: [], wereHeld: 0 };
        if (o.sends.push(a), g) o.wereHeld++;
        n.set(a.to, o);
      } else m++;
    }
  }
  return n;
}
function okt(e, n, r = {}) {
  return gFn(e, n, (0, import_chunk_mvszxaxb.Sbe)(), r).then(() => {
  });
}
async function gFn(e, n, r = (0, import_chunk_mvszxaxb.Sbe)(), { expectPeerPid: i, expectPeerProcStart: d, storageV5: f } = {}) {
  return (0, import_chunk_w578pjby.t)(`[uds-client] Sending control:${n.action} to ${Uk(e)}`), await ve(e, { type: "control", ...n, ...r }, f, { noFollowSymlink: true, ...i !== void 0 && { expectPeerPid: i }, ...d !== void 0 && { expectPeerProcStart: d } }), { msgId: r.msg_id };
}
var en = 150;
async function Oyr(e) {
  let n = (0, import_chunk_865at33z.GN)(e);
  if (n === void 0) return;
  for (let r of await C()) {
    if (!r.sock || (0, import_chunk_865at33z.GN)(r.sock) !== n) continue;
    if (await ie(r)) return { pid: r.pid, features: r.peerFeatures, sessionId: r.sessionId, procStart: r.procStartFt ?? r.procStart };
  }
  return;
}
async function ZOi(e) {
  let n = (0, import_chunk_4smdap7r.M)(e), r = /* @__PURE__ */ new Map();
  if (n.length === 0) return r;
  let i = (0, import_chunk_865at33z.She)(), f = (await Promise.all(n.map((m) => X(i, `${m}.json`)))).filter((m) => m !== null && Boolean(m.sock)), g = await Promise.all(f.map((m) => ie(m)));
  return f.forEach((m, a) => {
    if (g[a] && m.sock) r.set(m.pid, m.sock);
  }), r;
}
async function oZl(e, n) {
  let r = await X((0, import_chunk_865at33z.She)(), `${e}.json`, { rejectTornLiveRecord: true });
  return r?.jobId === n ? r.status : void 0;
}
async function ie(e) {
  let n = e.procStartFt ?? e.procStart;
  if (n === void 0 || (0, import_chunk_rb36kwbn.Wm)(e.pid)) return false;
  return await (0, import_chunk_rb36kwbn.mS)(e.pid, n) === true;
}
function Ee(e) {
  let n = (0, import_chunk_w578pjby._)(e), r = import_chunk_865at33z.IIl + n.length + 1;
  if (r > Ryr) throw ye(r, Ryr);
  return n;
}
async function nn(e) {
  let n = (0, import_chunk_865at33z.GN)(e);
  if (n === void 0) return false;
  for (let r of await C()) {
    if (!r.sock || (0, import_chunk_865at33z.GN)(r.sock) !== n) continue;
    if ((0, import_chunk_rb36kwbn.Wm)(r.pid)) continue;
    if ((r.procStartFt ?? r.procStart) !== void 0) {
      if (await ie(r)) return true;
      continue;
    }
    if ((0, import_chunk_v6cdm8tp.Rd)(r.pid)) return true;
  }
  return false;
}
async function ve(e, n, r, { noFollowSymlink: i = false, expectPeerPid: d, expectPeerProcStart: f, preflightedJson: g } = {}) {
  let m = g ?? Ee(n);
  if (!(0, import_chunk_xfj2cwfv.Q4)(e)) throw new _be("non-local", `Refusing to connect: not a usable local IPC path (remote/UNC host, or a pipe name with extra segments or a trailing dot/space): ${e}`);
  let a = (0, import_chunk_865at33z.rxo)(), o = await (0, import_chunk_865at33z.OIl)(e, r, { requireLiveOwner: a }), u = o.kind === "token" ? o.token : void 0;
  if (a && o.kind !== "token") {
    if (!(o.kind === "no-key" && await nn(e))) throw new z(o.kind, `No running session has registered an inbox at ${e} (${Se}: ${o.kind}) \u2014 refusing to send to an unvouched pipe`);
    u = void 0;
  }
  let v = u !== void 0 ? (0, import_chunk_865at33z.H4i)(u) : "";
  if (i && !((0, import_chunk_cg8dqz0a.x)() === "windows" && (0, import_chunk_xfj2cwfv.kXe)(e) !== void 0)) {
    let S;
    try {
      S = (await (0, import_promises.lstat)(e)).isSymbolicLink();
    } catch (R) {
      if ((0, import_chunk_jv7av99m.J)(R)) throw R;
      throw (0, import_chunk_w578pjby.t)(`[uds-client] reply target unvettable: ${(0, import_chunk_jv7av99m.w)(R) ?? "lstat failed"}`), new _be("unvettable", "Refusing to send: cannot vet reply target");
    }
    if (S) throw new _be("symlink", "Refusing to send: reply target is a symlink");
  }
  let k = v + m + `
`;
  return new Promise((S, R) => {
    let h = (0, import_net.connect)({ path: e }), I = false;
    h.setTimeout(5e3, () => {
      I = true, h.destroy(), R(Error(`Timed out sending to ${e}`));
    }), h.on("error", (y) => {
      I = true, R(y);
    }), h.on("connect", () => {
      if (d !== void 0 && (0, import_chunk_cg8dqz0a.x)() !== "windows") {
        let y = lin(h);
        if (y === void 0) {
          I = true, h.destroy(), R(new _be("endpoint-unverifiable", "Refusing to send: connected endpoint identity could not be read"));
          return;
        }
        if (y !== d) {
          I = true, h.destroy(), (0, import_chunk_w578pjby.t)(`[uds-client] connected endpoint is pid ${y}, expected ${d} \u2014 refusing to write`), R(new _be("wrong-endpoint", "Refusing to send: connected endpoint is not the expected process"));
          return;
        }
        let D = process.getuid?.(), T = hmo(h);
        if (D !== void 0 && T === null) {
          I = true, h.destroy(), R(new _be("endpoint-unverifiable", "Refusing to send: connected endpoint owner could not be read"));
          return;
        }
        if (D !== void 0 && T !== D) {
          I = true, h.destroy(), (0, import_chunk_w578pjby.t)(`[uds-client] connected endpoint is owned by uid ${T}, not ours \u2014 refusing to write`), R(new _be("wrong-endpoint", "Refusing to send: connected endpoint is not owned by this user"));
          return;
        }
        if (f !== void 0 && (0, import_chunk_rb36kwbn.mhn)(y) !== f) {
          I = true, h.destroy(), (0, import_chunk_w578pjby.t)(`[uds-client] connected endpoint pid ${y} is not the process that wrote to us (start token differs \u2014 recycled pid) \u2014 refusing to write`), R(new _be("wrong-endpoint", "Refusing to send: connected endpoint is a different process with the expected pid"));
          return;
        }
      }
      if (h.write(k), (0, import_chunk_cg8dqz0a.x)() === "macos") setTimeout((y) => {
        if (!y.destroyed) y.end();
      }, en, h);
      else h.end();
    }), h.on("close", () => {
      if (!I) (0, import_chunk_w578pjby.t)(`[uds-client] Sent to ${Uk(e)}`);
      S();
    });
  });
}
function se(e) {
  return new Promise((n) => {
    if (!(0, import_chunk_xfj2cwfv.Q4)(e)) {
      n(false);
      return;
    }
    let r = (0, import_net.connect)({ path: e }), i = (d) => {
      r.destroy(), n(d);
    };
    r.on("connect", () => i(true)), r.on("error", (d) => i((0, import_chunk_jv7av99m.w)(d) === "EBUSY")), r.setTimeout(250, () => i(false));
  });
}
class eBt extends Error {
  code;
  constructor(e) {
    super("session records directory unreadable");
    this.code = e;
    this.name = "SessionRecordsUnreadableError";
  }
}
async function C(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return [];
  let n = (0, import_chunk_865at33z.She)(), r;
  try {
    r = await (0, import_promises.readdir)(n);
  } catch (d) {
    if (e?.rejectUnreadable && !(0, import_chunk_jv7av99m.J)(d)) throw new eBt((0, import_chunk_jv7av99m.w)(d));
    return [];
  }
  return (await Promise.all(r.filter((d) => /^\d+\.json$/.test(d)).map((d) => X(n, d, { rejectTornLiveRecord: e?.rejectTornLiveRecord })))).filter((d) => d !== null);
}
async function X(e, n, r) {
  let i = false, d, f = (0, import_path.join)(e, n);
  try {
    let g = (0, import_chunk_v6cdm8tp.D0l)(n);
    if (g === null) return null;
    let { pid: m } = g;
    if (!g.canonical) return (0, import_promises.unlink)(f).catch(() => {
    }), null;
    d = m;
    let a = await (0, import_chunk_xfj2cwfv.Uu)(f, import_chunk_v6cdm8tp.Shn);
    if (a === null) return null;
    i = true;
    let o = (0, import_chunk_w578pjby.te)(a), u = (0, import_chunk_v6cdm8tp.L0l)(o);
    return { sock: typeof o.messagingSocketPath === "string" ? o.messagingSocketPath : "", cwd: u.cwd, startedAt: u.startedAt, ...(0, import_chunk_v6cdm8tp.qIr)(o.nameSince) !== void 0 && { nameSince: (0, import_chunk_v6cdm8tp.qIr)(o.nameSince) }, procStart: u.procStart, ...u.procStartFt !== void 0 && { procStartFt: u.procStartFt }, name: typeof o.name === "string" ? o.name : void 0, nameSource: o.nameSource === "user" || o.nameSource === "peer" || o.nameSource === "derived" || o.nameSource === "collision" || o.nameSource === "auto" || o.nameSource === "hook" ? o.nameSource : void 0, formerNames: Ve(o.formerNames), kind: u.kind, sessionId: u.sessionId, jobId: typeof o.jobId === "string" ? o.jobId : void 0, parkedJobId: typeof o.parkedJobId === "string" ? o.parkedJobId : void 0, spare: o.spare === true, bridgeSessionId: typeof o.bridgeSessionId === "string" ? o.bridgeSessionId : void 0, logPath: typeof o.logPath === "string" ? o.logPath : void 0, status: u.status, waitingFor: typeof o.waitingFor === "string" ? o.waitingFor : void 0, ...{}, updatedAt: (0, import_chunk_v6cdm8tp.qIr)(o.updatedAt), statusUpdatedAt: (0, import_chunk_v6cdm8tp.qIr)(o.statusUpdatedAt), entrypoint: u.entrypoint, ...(0, import_chunk_xfj2cwfv.G6t)(o.hostSessionId) !== void 0 && { hostSessionId: (0, import_chunk_xfj2cwfv.G6t)(o.hostSessionId) }, ...u.pidDomain !== void 0 && { pidDomain: u.pidDomain }, agent: typeof o.agent === "string" ? o.agent : void 0, state: typeof o.state === "string" ? o.state : void 0, detail: typeof o.detail === "string" ? o.detail : void 0, tempo: o.tempo === "active" || o.tempo === "idle" || o.tempo === "blocked" ? o.tempo : void 0, needs: typeof o.needs === "string" ? o.needs : void 0, peerProtocol: typeof o.peerProtocol === "number" ? o.peerProtocol : void 0, ...Array.isArray(o.peerFeatures) && { peerFeatures: tn(o.peerFeatures) }, ...{}, ...(typeof o.asksForConvertedSkills === "boolean" || o.asksForConvertedSkills === null) && { asksForConvertedSkills: o.asksForConvertedSkills }, tmux: typeof o.tmux === "string" ? o.tmux : void 0, pid: m, file: f };
  } catch {
    if (r?.rejectTornLiveRecord && i && d !== void 0 && (0, import_chunk_v6cdm8tp.Rd)(d)) {
      if (!r.isReread) return await (0, import_chunk_5appeerh.K)(import_chunk_865at33z.Dxs), X(e, n, { ...r, isReread: true });
      let [g, m] = await Promise.all([(0, import_promises.stat)(f).then((a) => a.mtimeMs, () => {
        return;
      }), (0, import_chunk_rb36kwbn.lFe)(d)]);
      if (g !== void 0 && m !== null && m > g + 2e3) return null;
      if (m === null && !(0, import_chunk_v6cdm8tp.Rd)(d)) return null;
      throw new eBt("EBADRECORD");
    }
    return null;
  }
}
function de(e, n) {
  return e.pidDomain !== void 0 && e.pidDomain !== n;
}
async function sZl(e, n) {
  let r = await (0, import_chunk_jmxgdf7r.Q0)();
  return e.some((i) => i.sessionId === n && de(i, r));
}
async function Iyr() {
  return (await C({ rejectUnreadable: true })).map(({ file: e, ...n }) => n);
}
async function Myr(e) {
  let n = await C({ rejectUnreadable: true, rejectTornLiveRecord: true }), r = await (0, import_chunk_jmxgdf7r.Q0)();
  for (let { file: i, ...d } of n) if (e(d) && (de(d, r) || (0, import_chunk_v6cdm8tp.Rd)(d.pid) && await (0, import_chunk_rb36kwbn.GC)(d.pid, d.procStartFt ?? d.procStart))) return d;
  return;
}
function oe(e, n, r, i) {
  if ((0, import_chunk_m15w38ag.ne)() && i !== void 0) {
    i.delete(import_chunk_hkvzj051.at.session((0, import_path.basename)(e))).then((d) => d.ok && d.value.existed ? (0, import_chunk_865at33z.Vxs)((0, import_path.dirname)(e), n, r, i) : void 0).catch(() => {
    });
    return;
  }
  (0, import_promises.unlink)(e).then(() => (0, import_chunk_865at33z.Vxs)((0, import_path.dirname)(e), n, r, i)).catch(() => {
  });
}
async function Yae(e, n) {
  let r = await C({ rejectUnreadable: n?.rejectUnreadable === true, rejectTornLiveRecord: n?.rejectUnreadable === true }), i = n?.rejectUnreadable === true ? await (0, import_chunk_jmxgdf7r.Q0)() : void 0, d = (u) => i !== void 0 && de(u, i), f = r.map((u) => d(u) || (0, import_chunk_v6cdm8tp.Rd)(u.pid)), g = await Promise.all(r.map((u, v) => f[v] && (d(u) || (0, import_chunk_rb36kwbn.GC)(u.pid, u.procStartFt ?? u.procStart)))), m = await (0, import_chunk_865at33z.KCt)(), a = m ? await (0, import_chunk_jmxgdf7r.Q0)() : "", o = [];
  for (let u = 0; u < r.length; u++) {
    let { file: v, ...k } = r[u];
    if (g[u]) o.push(k);
    else if (m && (0, import_chunk_865at33z.dxo)(k, a) && (0, import_chunk_rb36kwbn.Wm)(k.pid)) oe(v, k.pid, a, e);
  }
  return o;
}
function ybe() {
  return import_chunk_c203g5kd.zM.CLAUDE_CODE_MESSAGING_SOCKET;
}
async function eIi() {
  let e = ybe();
  if (e === void 0) return false;
  let n = await C(), r = await (0, import_chunk_jmxgdf7r.Q0)(), i = n.filter((f) => f.sock && f.pid !== process.pid && !ue(f) && (0, import_chunk_865at33z._6t)({ sock: f.sock }) && (0, import_chunk_xfj2cwfv.jNe)(f.sock, e));
  return (await Promise.all(i.map(async (f) => await ae(f, r) === "present" && await se(f.sock)))).some(Boolean);
}
async function ae(e, n) {
  if (e.pidDomain !== n) return "present";
  if ((0, import_chunk_rb36kwbn.Wm)(e.pid)) return "gone";
  let r = e.procStartFt ?? e.procStart;
  if (r === void 0) return "present";
  let i = await (0, import_chunk_rb36kwbn.Ef)(e.pid);
  if (i === void 0 || (0, import_chunk_rb36kwbn.JXe)(r, i)) return "present";
  return await (0, import_chunk_rb36kwbn.mS)(e.pid, r) === false ? "recycled" : "present";
}
async function tIi(e) {
  let n = ybe(), r = (await C({ rejectUnreadable: true })).filter((a) => a.sock && !(n && (0, import_chunk_xfj2cwfv.wXe)(a.sock, n)) && !ue(a)), [i, d] = await Promise.all([(0, import_chunk_865at33z.KCt)(), (0, import_chunk_jmxgdf7r.Q0)()]), [f, g] = await Promise.all([Promise.all(r.map((a) => se(a.sock))), Promise.all(r.map((a) => ae(a, d)))]), m = [];
  for (let a = 0; a < r.length; a++) {
    let { file: o, ...u } = r[a];
    if (g[a] === "gone") {
      if (i && (0, import_chunk_rb36kwbn.Wm)(u.pid)) oe(o, u.pid, d, e);
    } else if (g[a] === "recycled") continue;
    else if (f[a]) m.push(u);
    else if (i && (0, import_chunk_865at33z.dxo)(u, d) && (0, import_chunk_rb36kwbn.Wm)(u.pid)) oe(o, u.pid, d, e);
  }
  return m;
}
async function Hyr(e) {
  let n = ybe(), r = await C(), i = (o) => Boolean(o.sock) && !(n && (0, import_chunk_xfj2cwfv.wXe)(o.sock, n)), d = new Set(r.filter((o) => o.sessionId === e && o.parkedJobId !== void 0).map((o) => o.parkedJobId)), f = r.filter((o) => i(o) && !ue(o)), g = f.filter((o) => o.sessionId === e), m = f.filter((o) => o.sessionId !== e && o.jobId !== void 0 && d.has(o.jobId)), a = await (0, import_chunk_jmxgdf7r.Q0)();
  for (let o of g.concat(m)) {
    let { file: u, ...v } = o;
    if (await ae(v, a) === "present" && await se(v.sock)) return v;
  }
  return null;
}
function ue(e) {
  return e.spare === true || e.parkedJobId !== void 0;
}
function tn(e) {
  return (0, import_chunk_4smdap7r.Nr)(e).filter((n) => /^[a-z0-9_]{1,32}$/.test(n)).slice(0, 16);
}
