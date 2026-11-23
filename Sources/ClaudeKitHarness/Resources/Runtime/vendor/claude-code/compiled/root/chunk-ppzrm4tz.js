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
var chunk_ppzrm4tz_exports = {};
__export(chunk_ppzrm4tz_exports, {
  S7l: () => S7l,
  _7l: () => _7l,
  b7l: () => b7l,
  lKo: () => lKo,
  w7l: () => w7l,
  y7l: () => y7l
});
module.exports = __toCommonJS(chunk_ppzrm4tz_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_c9nxg7hk = require("/$bunfs/root/chunk-c9nxg7hk.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_crypto = require("crypto");
(0, import_chunk_adx6804h.B)();
var ee = "workflow_launch_result", W = 4194304, D = "/.workflow/", _7l = "CLAUDE_CODE_WORKFLOW_LAUNCH_SHA256", te = /^(?!\.+$)[A-Za-z0-9._-]{1,128}$/;
function z(e) {
  let t = (h) => ({ ok: false, error: h }), r = e.filestore_path;
  if (typeof r !== "string" || r.length === 0) return t("filestore_path is missing or not a non-empty string");
  if (!r.startsWith(D) || !te.test(r.slice(D.length))) return t(`filestore_path must name one object directly under ${D}`);
  let o = e.artifact_sha256;
  if (typeof o !== "string" || !/^[0-9a-f]{64}$/.test(o)) return t("artifact_sha256 is missing or not 64 lowercase hex chars");
  let i = e.bundle_size_bytes;
  if (typeof i !== "number" || !Number.isSafeInteger(i) || i <= 0) return t("bundle_size_bytes is missing or not a positive integer");
  if (i > W) return t(`bundle_size_bytes exceeds ${W}`);
  let c = typeof e.workflow_name === "string" ? e.workflow_name.replace(/[\x00-\x1f\x7f-\x9f\u2028\u2029]/g, "").slice(0, 200) : "", d = e.session_origin === void 0 ? void 0 : e.session_origin === "review" ? "review" : "other";
  return { ok: true, pointer: { workflowName: c, filestorePath: r, artifactSha256: o, bundleSizeBytes: i, sessionOrigin: d } };
}
function re(e, t) {
  let r = (0, import_crypto.createHash)("sha256").update(e).digest(), o = Buffer.from(t, "hex");
  return o.length === r.length && (0, import_crypto.timingSafeEqual)(r, o);
}
var M = 1;
function ne(e) {
  let t = (d) => ({ ok: false, error: d });
  if (e.length < 1) return t("bundle is empty");
  if (e[0] !== M) return t(`unsupported bundle format version ${e[0]} (expected ${M})`);
  let r = 1, o = (d, h) => {
    if (r + 8 > e.length) return { ok: false, error: `bundle truncated in ${h} length frame` };
    let L = e.readBigUInt64BE(r);
    if (r += 8, L > BigInt(d)) return { ok: false, error: `${h} frame exceeds ${d} bytes` };
    let _ = Number(L);
    if (r + _ > e.length) return { ok: false, error: `bundle truncated in ${h} frame` };
    let w = e.subarray(r, r + _);
    return r += _, { ok: true, buf: w };
  }, i = o(import_chunk_p1ewvgeh.PSo, "script");
  if (!i.ok) return t(i.error);
  if (i.buf.length === 0) return t("script frame is empty");
  let c = o(W, "args_json");
  if (!c.ok) return t(c.error);
  if (r !== e.length) return t(`bundle has ${e.length - r} trailing bytes`);
  return { ok: true, script: i.buf.toString("utf8"), argsJson: c.buf.toString("utf8") };
}
function y7l(e = null) {
  return { ledger: /* @__PURE__ */ new Map(), firstLaunch: null, restoredRecord: e };
}
var H = 2, oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ event_uuid: (0, import_chunk_adx6804h.n)().refine((e) => (0, import_chunk_mzmcvr6c.ht)(e) !== null), dispatched_epoch: (0, import_chunk_adx6804h.E)().int().min(0).max(Number.MAX_SAFE_INTEGER), attempts: (0, import_chunk_adx6804h.E)().int().min(1).max(Number.MAX_SAFE_INTEGER), settled: (0, import_chunk_adx6804h.P)() }));
function S7l(e) {
  let t = oe().safeParse(e);
  if (!t.success) return null;
  let r = z(t.data);
  if (!r.ok) return null;
  return { event_uuid: t.data.event_uuid, filestore_path: r.pointer.filestorePath, artifact_sha256: r.pointer.artifactSha256, bundle_size_bytes: r.pointer.bundleSizeBytes, workflow_name: r.pointer.workflowName, dispatched_epoch: t.data.dispatched_epoch, attempts: t.data.attempts, settled: t.data.settled };
}
class I {
  slots = /* @__PURE__ */ new Map();
  stash(e, t) {
    this.slots.set(e, t);
  }
  take(e) {
    let t = this.slots.get(e);
    return this.slots.delete(e), t;
  }
}
var lKo = new import_chunk_2904xtvq.j(() => new I()), se = 5e3;
async function x(e) {
  return await (0, import_chunk_5appeerh.me)(Promise.resolve().then(() => e.flushRecord()).catch(() => false), e.recordFlushBoundMs ?? se) === true;
}
var ie = [1e3, 3e3], ae = 1e4;
function Y(e, t, r) {
  let o = { type: "system", subtype: ee, artifact_line: t, uuid: (0, import_crypto.randomUUID)(), session_id: e.getSessionId() };
  if (r.launchUuid !== void 0) o.launch_uuid = r.launchUuid;
  if (r.artifactSha256 !== void 0) o.artifact_sha256 = r.artifactSha256;
  e.postEvent(o);
}
function J(e, t, r, o) {
  Y(e, (0, import_chunk_c9nxg7hk.Rer)(t, r), o), (0, import_chunk_42tcgre6.q)("warn", "workflow_launch_failed", { layer: t }), (0, import_chunk_y53wbr8a.a)("tengu_workflow_launch_event", { ok: false, layer: (0, import_chunk_78g0060s.f)(t) });
}
function O(e, t, r, o) {
  J(e, t, r, o), (0, import_chunk_cqa9hrgx.m)("workflow_event_launch", t);
}
function b(e, t, r, o, i) {
  O(e, r, o, i), e.state.ledger.set(t, { eventUuid: t, outcome: "failed-final" }), e.ackProcessed(t);
}
async function U(e, t, r, o, i) {
  let c = t.event_uuid;
  e.state.ledger.set(c, { eventUuid: c, outcome: "failed-final" }), e.persistRecord({ ...t, settled: true }), await x(e), O(e, r, o, i), e.ackProcessed(c);
}
async function X(e, t, r, o, i) {
  let { ledger: c } = e.state, d = t.eventUuid, h = (i?.attempts ?? 0) + 1, L = (g) => ({ event_uuid: d, filestore_path: r.filestorePath, artifact_sha256: r.artifactSha256, bundle_size_bytes: r.bundleSizeBytes, workflow_name: r.workflowName, dispatched_epoch: e.getWorkerEpoch() ?? 0, attempts: h, settled: g }), _ = () => {
    if (e.state.firstLaunch === t) e.state.firstLaunch = null;
  }, w = async (g, C) => {
    if (_(), i) {
      await U(e, i, g, C, o);
      return;
    }
    b(e, d, g, C, o);
  }, S = Date.now(), R = e.fetchRetryWindowMs ?? ae, k = await e.fetchBundle(r.filestorePath), A = 1;
  for (let g of e.fetchRetryDelaysMs ?? ie) {
    if (k.ok || k.gated || Date.now() - S + g >= R) break;
    A++, (0, import_chunk_42tcgre6.q)("warn", "workflow_launch_bundle_fetch_retry", { attempt: A }), await (0, import_chunk_5appeerh.K)(g), k = await e.fetchBundle(r.filestorePath);
  }
  if (!k.ok) {
    if (k.gated) {
      await w("bundle-fetch", `bundle fetch gated: ${k.error}`);
      return;
    }
    if (c.delete(d), _(), i) {
      (0, import_chunk_42tcgre6.q)("warn", "workflow_launch_rescue_fetch_failed", {}), (0, import_chunk_cqa9hrgx.l)("workflow_event_launch", "rescue_fetch_transient");
      return;
    }
    J(e, "bundle-fetch", `bundle fetch failed: ${k.error}`, o), (0, import_chunk_cqa9hrgx.l)("workflow_event_launch", "bundle_fetch_transient");
    return;
  }
  let y = k.buf;
  if (y.byteLength > W || y.byteLength !== r.bundleSizeBytes) {
    await w("payload-digest-mismatch", `staged bundle is ${y.byteLength} bytes, event pinned ${r.bundleSizeBytes}`);
    return;
  }
  if (!re(y, r.artifactSha256)) {
    await w("payload-digest-mismatch", "staged bundle sha256 does not match the artifact_sha256 the event pinned");
    return;
  }
  let v = ne(y);
  if (!v.ok) {
    await w("launch-payload", v.error);
    return;
  }
  let N;
  if (v.argsJson !== "") try {
    N = JSON.parse(v.argsJson);
  } catch (g) {
    await w("args-parse", `args_json is not valid JSON: ${g instanceof Error ? g.message : String(g)}`);
    return;
  }
  e.state.firstLaunch = t, e.persistRecord(L(false));
  let V = await x(e);
  if (i && !V) {
    c.delete(d), _(), (0, import_chunk_42tcgre6.q)("warn", "workflow_launch_rescue_uncounted", {}), (0, import_chunk_cqa9hrgx.l)("workflow_event_launch", "rescue_record_unconfirmed");
    return;
  }
  let F = (0, import_crypto.randomUUID)();
  lKo.of(e.host).stash(F, { script: v.script, args: N, eventSessionOrigin: r.sessionOrigin, postResultLine: (g) => Y(e, g, o), onRunSettled: async (g) => {
    if (t.outcome = g ? "executed" : "run-failed", e.persistRecord(L(true)), !await x(e)) e.persistRecord(L(true));
  } }), e.prependLaunchDispatch(`/workflow-launch-exec ${F}`), e.ackProcessed(d), (0, import_chunk_y53wbr8a.a)("tengu_workflow_launch_event", { ok: true, attempt: h }), (0, import_chunk_cqa9hrgx.u)("workflow_event_launch"), (0, import_chunk_42tcgre6.q)("info", "workflow_launch_dispatched", { attempt: h });
}
function G(e, t) {
  let r = { eventUuid: t.event_uuid, outcome: "failed-final" };
  e.state.ledger.set(t.event_uuid, r), e.state.firstLaunch ??= r, e.persistRecord({ ...t, settled: true }), e.ackProcessed(t.event_uuid), (0, import_chunk_42tcgre6.q)("warn", "workflow_launch_attempts_spent", { attempts: t.attempts }), (0, import_chunk_cqa9hrgx.l)("workflow_event_launch", "attempts_spent");
}
async function b7l(e, t) {
  let r = typeof e.uuid === "string" ? e.uuid : void 0;
  if (!r) {
    O(t, "launch-payload", "event has no uuid", {});
    return;
  }
  let { ledger: o } = t.state, i = o.get(r);
  if (i) {
    if (i.outcome !== "pending") t.ackProcessed(r);
    return;
  }
  if (!t.isRemoteTransport() || !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) {
    O(t, "not-remote-session", "workflow_launch received outside a remote (CCR) session", { launchUuid: r });
    return;
  }
  let c = z(e);
  if (!c.ok) {
    b(t, r, "launch-payload", c.error, { launchUuid: r });
    return;
  }
  let d = c.pointer, h = { launchUuid: r, artifactSha256: d.artifactSha256 }, L = t.state.restoredRecord, _ = L && L.event_uuid === r ? L : null;
  if (_) {
    if (_.settled) {
      let k = { eventUuid: r, outcome: "executed" };
      o.set(r, k), t.state.firstLaunch ??= k, t.ackProcessed(r), (0, import_chunk_42tcgre6.q)("info", "workflow_launch_redelivery_settled", {});
      return;
    }
    if (_.attempts >= H) {
      G(t, _);
      return;
    }
  }
  let w = (0, import_chunk_c9nxg7hk._7t)({ serverAuthoredCarrier: true, eventSessionOrigin: d.sessionOrigin });
  if (w) {
    if (_) {
      await U(t, _, "policy-gate", w, h);
      return;
    }
    b(t, r, "policy-gate", w, h);
    return;
  }
  let { firstLaunch: S } = t.state;
  if (S && S.eventUuid !== r) {
    b(t, r, "launch-protocol", "a second distinct workflow_launch event arrived in this session; at most one launch per session is permitted", h);
    return;
  }
  let R = { eventUuid: r, outcome: "pending" };
  o.set(r, R), t.state.firstLaunch = R, await X(t, R, d, h, _);
}
async function w7l(e) {
  let t = e.state.restoredRecord;
  if (!t) return;
  if (!e.isRemoteTransport() || !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) return;
  if (t.settled) {
    (0, import_chunk_42tcgre6.q)("info", "workflow_launch_resume_skipped", { reason: "settled" });
    return;
  }
  let r = e.getWorkerEpoch();
  if (r === void 0 || t.dispatched_epoch >= r) {
    (0, import_chunk_42tcgre6.q)("info", "workflow_launch_resume_skipped", { reason: "not_a_later_epoch" });
    return;
  }
  let o = e.getDispatchedDigest();
  if (o === void 0 || !/^[0-9a-f]{64}$/.test(o) || o !== t.artifact_sha256) {
    (0, import_chunk_42tcgre6.q)("info", "workflow_launch_resume_skipped", { reason: o === void 0 ? "no_server_digest" : "digest_differs" });
    return;
  }
  let { ledger: i } = e.state;
  if (i.has(t.event_uuid) || e.state.firstLaunch) return;
  if (t.attempts >= H) {
    G(e, t);
    return;
  }
  let c = { launchUuid: t.event_uuid, artifactSha256: t.artifact_sha256 }, d = (0, import_chunk_c9nxg7hk._7t)({ serverAuthoredCarrier: true });
  if (d) {
    if (!e.isAccountLaunchedReview() && (0, import_chunk_6e68m1dj.h3)() && (0, import_chunk_c9nxg7hk._7t)({ serverAuthoredCarrier: true, eventSessionOrigin: "review" }) === null) {
      (0, import_chunk_42tcgre6.q)("info", "workflow_launch_resume_skipped", { reason: "needs_event_origin" });
      return;
    }
    await U(e, t, "policy-gate", d, c);
    return;
  }
  let h = { eventUuid: t.event_uuid, outcome: "pending" };
  i.set(t.event_uuid, h), e.state.firstLaunch = h, (0, import_chunk_42tcgre6.q)("info", "workflow_launch_resuming", { attempt: t.attempts + 1 }), await X(e, h, { workflowName: t.workflow_name, filestorePath: t.filestore_path, artifactSha256: t.artifact_sha256, bundleSizeBytes: t.bundle_size_bytes }, c, t);
}
