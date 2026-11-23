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
var chunk_x9aavfmb_exports = {};
__export(chunk_x9aavfmb_exports, {
  $bt: () => $bt,
  $lo: () => $lo,
  A0n: () => A0n,
  Arn: () => Arn,
  Blo: () => Blo,
  C0n: () => C0n,
  Crn: () => Crn,
  D1t: () => D1t,
  DEi: () => DEi,
  Fbt: () => Fbt,
  Flo: () => Flo,
  Gmr: () => Gmr,
  HEi: () => HEi,
  IEi: () => IEi,
  LEi: () => LEi,
  MEi: () => MEi,
  Nbt: () => Nbt,
  Rrn: () => Rrn,
  T0n: () => T0n,
  Ulo: () => Ulo,
  Wlo: () => Wlo,
  Zls: () => Zls,
  jlo: () => jlo,
  jmr: () => jmr,
  kel: () => kel,
  v0n: () => v0n,
  wel: () => wel,
  zmr: () => zmr
});
module.exports = __toCommonJS(chunk_x9aavfmb_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_qesvcmqe = require("/$bunfs/root/chunk-qesvcmqe.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_r3e8vdzv = require("/$bunfs/root/chunk-r3e8vdzv.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var Zls = "Remote Control";
function IEi(e) {
  return (0, import_chunk_865at33z.$dt)(e) ? "cloud" : Zls;
}
var L = 3e5, Flo = 5e3;
class A {
  listed = void 0;
  inFlight = void 0;
  record(e, r, n) {
    this.listed = { at: Date.now(), listed: e, identityKey: r, truncated: n };
  }
  forget() {
    this.listed = void 0;
  }
  begin(e) {
    this.inFlight = e;
  }
  settle(e) {
    if (this.inFlight === e) this.inFlight = void 0;
  }
}
var R = new import_chunk_pzzqg6s3.ze(() => new A());
async function Crn(e = { refresh: true }) {
  {
    let { primePeerIdentityOwner: r } = require("/$bunfs/root/chunk-eetwe4hr.js");
    await r(e);
  }
}
function C() {
  let { getPeerBridgeIdentity: e } = require("/$bunfs/root/chunk-eetwe4hr.js"), r = e();
  return r?.live ? r.key : null;
}
async function jmr(e, r) {
  {
    let n = C();
    if (!n) return { rows: [], failed: false, identityKey: null };
    let i = R.of(e), o = i.inFlight;
    if (o !== void 0 && o.identityKey === n) return o.promise;
    let { listBridgePeerSessions: a } = require("/$bunfs/root/chunk-k120jpb4.js"), c = { record: void 0 }, y = Date.now(), g = (async () => {
      try {
        let p = { failed: false, truncated: false }, S;
        try {
          S = await a(p, r);
        } catch (w) {
          return (0, import_chunk_w578pjby.t)(`[bridge:population] fetch threw: ${(0, import_chunk_jv7av99m.d)(w)} \u2014 treated as failed`, { level: "warn" }), { rows: [], failed: true, identityKey: n };
        }
        return (0, import_chunk_w578pjby.t)(`[bridge:population] fetched ${S.length} rows in ${Date.now() - y}ms${p.failed ? " (FAILED \u2014 not recordable)" : ""}${p.truncated ? " (truncated at page budget)" : ""}`), { rows: S, failed: p.failed, ...p.truncated && { truncated: true }, identityKey: n };
      } finally {
        i.settle(c.record);
      }
    })();
    return c.record = { identityKey: n, promise: g }, i.begin(c.record), g;
  }
  return { rows: [], failed: false, identityKey: null };
}
function $lo(e) {
  {
    let r = C();
    return r !== null && e.identityKey === r;
  }
  return false;
}
function v0n(e, r, n) {
  {
    let i = C();
    if (!i) return;
    if (r.identityKey !== i) {
      (0, import_chunk_w578pjby.t)("[bridge:population] walk ran under a previous identity \u2014 ignoring its outcome for the current one");
      return;
    }
    let o = R.of(e);
    if (r.failed) {
      let a = o.listed;
      if (a !== void 0 && a.identityKey === i) o.forget(), (0, import_chunk_w578pjby.t)("[bridge:population] failed walk \u2014 cleared the printed set (going cold, never sticky)");
      return;
    }
    o.record(n, i, r.truncated === true), (0, import_chunk_w578pjby.t)(`[bridge:population] recorded ${n.length} bridge rows (cloud-deduped)`);
  }
}
function Ulo(e, r) {
  {
    let n = C();
    if (!n || r.identityKey !== n) return;
    let i = R.of(e), o = i.listed;
    if (o !== void 0 && o.identityKey === n) i.forget(), (0, import_chunk_w578pjby.t)("[bridge:population] forgot the recorded set (an unrecordable listing superseded it)");
  }
}
function Gmr(e) {
  return MEi(e)?.rows;
}
function MEi(e) {
  {
    let r = C(), n = R.of(e).listed;
    if (!r || n === void 0 || n.identityKey !== r) return;
    let i = Date.now() - n.at;
    if (i >= 0 && i < L) return (0, import_chunk_w578pjby.t)(`[bridge:population] warm recorded set: ${n.listed.length} rows (age ${i}ms)`), { rows: n.listed, truncated: n.truncated, recent: i < Flo };
  }
  return;
}
function HEi(e, r, n) {
  let i = (0, import_chunk_865at33z.Nzn)(r), o = new Set(n.filter((a) => !(0, import_chunk_865at33z.CPr)(r, a.id)).map((a) => (0, import_chunk_t39bs2jr.Un)(a.id)));
  return e.filter((a) => {
    let c = (0, import_chunk_t39bs2jr.Un)(a.id);
    return !i.has(c) && !o.has(c);
  });
}
function T0n(e, r) {
  return HEi(e, [], r);
}
function Arn(e) {
  return e === "timeout" || e === "fetch_failed";
}
var M = 3e4, D = 5e3, N = 1e3, j = 36e5, T = 10, q = 12e4, U = 5e3, K = 6e4, H = 6e5;
class k {
  memo = void 0;
  inFlight = void 0;
  refused = void 0;
  rereadAfterMiss = { at: 0, wait: 0 };
  requests = [];
  lastReadRequests = 1;
  failed = void 0;
  record(e, r, n) {
    if (n !== B()) return;
    this.memo = { at: Date.now(), sessions: e, truncated: r, credential: n };
  }
  requestsLeft() {
    return this.requests = this.requests.filter((e) => Math.abs(Date.now() - e) < 6e4), T - this.requests.length;
  }
  begin(e, r) {
    this.inFlight = { promise: e, credential: r };
  }
  settle(e) {
    if (this.inFlight?.promise === e) this.inFlight = void 0;
  }
  warm(e) {
    let r = this.memo;
    if (r === void 0 || r.credential !== e) return;
    let n = Date.now() - r.at;
    return n >= 0 && n < M ? r : void 0;
  }
}
function B() {
  let { walkCredentialKey: e } = require("/$bunfs/root/chunk-eetwe4hr.js");
  return e();
}
var Blo = new import_chunk_pzzqg6s3.ze(() => new k());
async function Nbt(e, r, n) {
  {
    let { hasCloudPeerAccess: i } = require("/$bunfs/root/chunk-4h7ssxnk.js");
    if (!i()) return { sessions: [], unavailable: "gate_off" };
    let { walkCcrSessionList: o } = require("/$bunfs/root/chunk-c7rq3tw8.js"), a = Blo.of(e), c = B(), y = a.warm(c), g = y && { sessions: y.sessions, unavailable: void 0, ...y.truncated && { truncated: true } };
    if (g && !(n === "recent" && DEi(e))) return g;
    let { memo: p, refused: S, failed: w } = a;
    if (S?.credential === c && Math.abs(Date.now() - S.at) < H) return g ?? { sessions: [], unavailable: "gate_off" };
    let { getPeerBridgeIdentity: E } = require("/$bunfs/root/chunk-eetwe4hr.js"), f = p?.credential === c ? { sessions: p.sessions, unavailable: void 0, ...p.truncated && { truncated: true } } : void 0, h = f ?? { sessions: [], unavailable: "gate_off" }, _ = g;
    if ((n === "first-send" || n === "repeat-send" || n === "no-fetch") && !E()?.live) {
      if (n === "repeat-send") return h;
      if (_ = { ...h, truncated: true }, n === "no-fetch") return f ? _ : h;
    }
    if (w?.credential === c && (0, import_chunk_znn7ks07.z0e)() && Math.abs(Date.now() - w.at) < w.wait) return _ ?? { sessions: [], unavailable: "fetch_failed" };
    let v = a.inFlight;
    if (v?.credential !== c && a.requestsLeft() < a.lastReadRequests) return _ ?? (f && p && !w && Math.abs(Date.now() - p.at) < q ? { ...f, truncated: true } : { sessions: [], unavailable: "fetch_failed" });
    let F = v !== void 0 && v.credential === c ? v.promise : W(a, o, c, r), I = await (0, import_chunk_5appeerh.me)(F, _ ? N : D);
    if (_ && (!I || I.unavailable !== void 0) && c === B()) return _;
    if (I === void 0) return (0, import_chunk_w578pjby.t)(`[agents:cloud] session list not ready within ${D}ms \u2014 not searched this call, disclosing`, { level: "warn" }), { sessions: [], unavailable: "timeout" };
    if (c !== B()) return (0, import_chunk_w578pjby.t)("[agents:cloud] session list walk ran under a superseded credential \u2014 not served, disclosing", { level: "warn" }), { sessions: [], unavailable: "fetch_failed" };
    return I;
  }
  return { sessions: [], unavailable: void 0 };
}
function W(e, r, n, i) {
  let o = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true, a = o ? (0, import_chunk_t39bs2jr.Un)(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID ?? "") : "";
  if (a === "") {
    let { getPeerBridgeIdentity: y } = require("/$bunfs/root/chunk-eetwe4hr.js"), g = y()?.bridgeSessionId;
    a = typeof g === "string" ? (0, import_chunk_t39bs2jr.Un)(g) : "";
  }
  let c = (async () => {
    let y, g = { truncated: false, pages: 0 }, p = Date.now();
    try {
      y = await r({ status: g, throwOnError: true, exhaustive: true, includeBridgeKind: o, keepUntitledSince: (0, import_chunk_znn7ks07.z0e)() ? Date.now() - j : void 0, statuses: ["active", "paused"], pageSize: 200, takeRequest: () => e.requestsLeft() > 0 && e.requests.push(Date.now()) > 0, requestReason: "agent_resolver", credentials: i });
    } catch (f) {
      (0, import_chunk_w578pjby.t)(`[agents:cloud] session list threw: ${f instanceof TypeError ? "malformed session-list response \u2014 " : ""}${(0, import_chunk_qesvcmqe.KTr)(f)}`, { level: "error" });
      let h = { duration_ms: Date.now() - p };
      if (!o && (0, import_chunk_qesvcmqe.KTr)(f).endsWith("OAuth token lacks a scope this endpoint accepts")) return e.refused = { credential: n, at: Date.now() }, (0, import_chunk_cqa9hrgx.l)("send_message_cloud_list", "scope_refused", h), { sessions: [], unavailable: "gate_off" };
      (0, import_chunk_cqa9hrgx.m)("send_message_cloud_list", "fetch_failed", h);
      let _ = e.failed;
      return e.failed = { credential: n, at: Date.now(), wait: _?.credential === n ? Math.min(2 * _.wait || U, K) : 0 }, { sessions: [], unavailable: "fetch_failed" };
    }
    e.failed = void 0, e.lastReadRequests = g.truncated ? T : g.pages, (0, import_chunk_cqa9hrgx.u)("send_message_cloud_list", { duration_ms: Date.now() - p, page_count: g.pages, search_truncated: g.truncated });
    let S = false;
    if (o) {
      let { isRemoteControlPeerUnreachableFromHere: f } = require("/$bunfs/root/chunk-y8vskpae.js");
      S = f();
    }
    let E = (a === "" ? y : y.filter((f) => (0, import_chunk_t39bs2jr.Un)(f.id) !== a)).map((f) => {
      let h = Date.parse(f.last_event_at ?? f.created_at ?? "");
      return { id: f.id, title: f.title ?? null, lastActive: Number.isNaN(h) ? void 0 : h, workerStatus: f.worker_status === "running" || f.worker_status === "idle" || f.worker_status === "requires_action" ? f.worker_status : void 0, remoteControl: f.environment_kind === "bridge", unreachableFromHere: S && f.environment_kind === "bridge", ...(0, import_chunk_r3e8vdzv.zsn)(f.external_metadata), ...f.environment_kind === "bridge" && f.connection_status === "disconnected" && { offline: true } };
    });
    return e.record(E, g.truncated, n), { sessions: E, unavailable: void 0, ...g.truncated && { truncated: true } };
  })();
  return e.begin(c, n), c.finally(() => e.settle(c)), c;
}
function DEi(e) {
  let r = Blo.of(e).memo?.at;
  return Fbt(e) !== void 0 && r !== void 0 && Date.now() - r >= Flo;
}
function Fbt(e) {
  {
    let { hasCloudPeerAccess: r } = require("/$bunfs/root/chunk-4h7ssxnk.js");
    if (!r()) return;
    return Blo.of(e).warm(B())?.sessions;
  }
  return;
}
var C0n = "target is an elevated-security session unreachable from a cloud session", A0n = "target session reports it cannot receive cross-session messages";
function LEi(e) {
  if (e.reason !== "denied") return "handler_rewrite";
  if (e.decisionReason?.type === "other") {
    if (e.decisionReason.reason === C0n) return "bridge_auth";
    if (e.decisionReason.reason === A0n) return "recipient_gate_off";
  }
  return "permission_denied";
}
function Rrn(e, r, n, i) {
  try {
    let o = Fbt(e)?.find((y) => (0, import_chunk_t39bs2jr.Un)(y.id) === (0, import_chunk_t39bs2jr.Un)(r));
    if (!o?.unreachableFromHere) return;
    let { formatUnreachableElevatedRefusal: a } = require("/$bunfs/root/chunk-y8vskpae.js"), c;
    try {
      c = o.acceptsPeerMessages === false ? void 0 : i?.();
    } catch {
      c = void 0;
    }
    return a(n, c === void 0 ? void 0 : { sendTool: c, sessionId: o.id });
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[agents:cloud] warm unreachable lookup failed (${(0, import_chunk_tp3c5q2s.Xb)((0, import_chunk_jv7av99m.d)(o))}) \u2014 treating as not known unreachable`, { level: "warn" });
    return;
  }
}
var zmr = "can't receive cross-session messages (off in that session)";
function $bt(e, r, n) {
  try {
    let i = (0, import_chunk_t39bs2jr.Un)(r);
    if (!(Fbt(e)?.some((a) => (0, import_chunk_t39bs2jr.Un)(a.id) === i && a.acceptsPeerMessages === false) === true || Gmr(e)?.some((a) => (0, import_chunk_t39bs2jr.Un)(a.id) === i && a.acceptsPeerMessages === false) === true)) return;
    return `Not sent: '${n}' ${zmr} \u2014 its Claude would never see the message. That session is set not to accept cross-session messages (the feature is off on its platform, or a setting or policy there refuses them); reach that machine another way, or ask its user to enable it (listings refresh within a few minutes \u2014 re-run ListAgents after they do).`;
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`[agents:cloud] warm cannot-receive lookup failed (${(0, import_chunk_tp3c5q2s.Xb)((0, import_chunk_jv7av99m.d)(i))}) \u2014 treating as unknown`, { level: "warn" });
    return;
  }
}
function wel(e, r) {
  try {
    let n = (0, import_chunk_t39bs2jr.Un)(r);
    return Fbt(e)?.some((i) => (0, import_chunk_t39bs2jr.Un)(i.id) === n && i.remoteControl) === true || Gmr(e)?.some((i) => (0, import_chunk_t39bs2jr.Un)(i.id) === n && !(0, import_chunk_865at33z.$dt)(i)) === true;
  } catch {
    return false;
  }
}
function Wlo(e, r) {
  try {
    let n = (0, import_chunk_t39bs2jr.Un)(r), i = Fbt(e)?.find((a) => (0, import_chunk_t39bs2jr.Un)(a.id) === n), o = Gmr(e)?.find((a) => (0, import_chunk_t39bs2jr.Un)(a.id) === n);
    if (i !== void 0 && !i.remoteControl || o !== void 0 && (0, import_chunk_865at33z.$dt)(o)) return false;
    if (o?.inboundReportUnavailable && i?.acceptsPeerMessages === void 0) return false;
    return !(i?.acceptsPeerMessages === true || o?.acceptsPeerMessages === true);
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[agents:cloud] warm inbound-report lookup failed (${(0, import_chunk_tp3c5q2s.Xb)((0, import_chunk_jv7av99m.d)(n))}) \u2014 treating as unreported`, { level: "warn" }), true;
  }
}
function D1t(e) {
  switch (e) {
    case 429:
      return "Rate limited";
    case 529:
      return "API overloaded";
    case 401:
    case 403:
      return "Authentication failed";
    default:
      return "API error";
  }
}
var x = 6e4, X = 5e3;
function kel(e, r, n) {
  switch (r.type) {
    case "system": {
      if (r.subtype !== "api_error") return e;
      let i = e?.kind === "api_retry", o = n + r.retryInMs;
      return i && e.attempt === r.retryAttempt && e.status === r.error.status && Math.abs(e.nextTryAt - o) < X ? e : { kind: "api_retry", since: i ? e.since : n, attempt: r.retryAttempt, status: r.error.status, nextTryAt: o };
    }
    case "sdk_status":
      if (r.status === "compacting") return e?.kind === "compacting" ? e : { kind: "compacting", since: n };
      return r.status === null && e?.kind === "compacting" ? void 0 : e;
    case "stream_event":
      return r.event.type === "message_start" ? void 0 : e;
    case "assistant":
    case "query_model_change":
      return;
    default:
      return e;
  }
}
function jlo(e, r) {
  let { wait: n } = e;
  if (n === void 0 || e.status !== "running" || r - n.since < x || !(0, import_chunk_865at33z.b)("tengu_eager_hare", false)) return;
  let i = (0, import_chunk_f64qna2j.Cn)(r - n.since, { mostSignificantOnly: true });
  if (n.kind === "compacting") return `compacting its conversation for ${i}`;
  let o = n.nextTryAt - r;
  if (-o >= x) return `API requests failing for ${i} (${D1t(n.status)}); the retry was due ${(0, import_chunk_f64qna2j.Cn)(-o, { mostSignificantOnly: true })} ago`;
  let a = o > 0 ? `, next try in ${(0, import_chunk_f64qna2j.Cn)(o, { mostSignificantOnly: true })}` : "";
  return `retrying its API request for ${i} (${D1t(n.status)}, attempt ${n.attempt}${a})`;
}
