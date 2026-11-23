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
var chunk_47st811y_exports = {};
__export(chunk_47st811y_exports, {
  BDt: () => BDt,
  EXl: () => EXl,
  Itt: () => Itt,
  Lrr: () => Lrr,
  Xte: () => Xte,
  Y9r: () => Y9r,
  aUe: () => aUe,
  azl: () => azl,
  cti: () => cti,
  f5o: () => f5o,
  fti: () => fti,
  hAn: () => hAn,
  izl: () => izl,
  mAn: () => mAn,
  p5o: () => p5o,
  uti: () => uti,
  vXl: () => vXl
});
module.exports = __toCommonJS(chunk_47st811y_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k2pr2qmg = require("/$bunfs/root/chunk-k2pr2qmg.js");
var import_chunk_3vy81xdp = require("/$bunfs/root/chunk-3vy81xdp.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var f5o = 384;
var { basename: re, dirname: U, isAbsolute: Fe, join: X, normalize: Ze, relative: oe, sep: fe } = import_path.posix, Lrr = "/mnt/user-data/working", BDt = "/working", Y9r = `${BDt}/${import_chunk_k2pr2qmg.cTe} is reserved`, Xte = 26214400, Le = 4096, et = 4, Ie = 3e4, Z = 5e3, tt = 6e4, Me = 1e3, nt = 12, rt = 12e4, st = 5, ot = 2e3, it = 3, ue = 6e5, xe = 36e5, at = Le;
class Ae {
  seenState = /* @__PURE__ */ new Map();
  evictedEtag = /* @__PURE__ */ new Map();
  lastSeenMtime = /* @__PURE__ */ new Map();
  terminalRejects = /* @__PURE__ */ new Map();
  sessionFullUntilMs = 0;
  sessionFullSuppressed = 0;
  sessionFullNextOfferMs = 0;
  inFlight = (0, import_chunk_gjzwg6ck.GS)();
  retryableTransportFailures = 0;
  sessionTerminalRejects = 0;
  syncer = null;
  lateStartRoot = null;
  startInFlight = null;
  recordSeen(e, r, t) {
    this.seenState.set(e, { etag: r, localHash: t }), this.evictedEtag.delete(e);
  }
  forgetSeen(e) {
    this.seenState.delete(e), this.evictedEtag.delete(e);
  }
  recordEvictedEtag(e, r) {
    if (r === void 0) return;
    if (this.evictedEtag.delete(e), this.evictedEtag.set(e, r), this.evictedEtag.size > at) {
      let t = this.evictedEtag.keys().next().value;
      if (t !== void 0) this.evictedEtag.delete(t);
    }
  }
  evictDeleted(e) {
    this.recordEvictedEtag(e, this.seenState.get(e)?.etag), this.seenState.delete(e);
  }
  recordSettledMtime(e, r) {
    this.lastSeenMtime.set(e, r);
  }
  reopenMtimeGate(e) {
    this.lastSeenMtime.delete(e);
  }
  recordTerminalReject(e, r = false) {
    let t = this.terminalRejects.get(e) ?? { consecutive: 0, latchedUntilMs: 0, suppressed: 0, heldWhileFull: false };
    if (t.consecutive++, t.heldWhileFull ||= r, this.terminalRejects.set(e, t), t.consecutive >= it) t.latchedUntilMs = Date.now() + ue, (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "push_parked_terminal", { consecutive_rejects: t.consecutive, suppressed_pushes: t.suppressed, held_while_full: t.heldWhileFull }), t.suppressed = 0, (0, import_chunk_42tcgre6.q)("warn", "working_push_parked", { consecutive: t.consecutive });
  }
  resetTerminalRejectStreak(e) {
    let r = this.terminalRejects.get(e);
    if (r === void 0) return;
    if (r.suppressed === 0) {
      this.terminalRejects.delete(e);
      return;
    }
    r.consecutive = 0, r.latchedUntilMs = 0, r.heldWhileFull = false;
  }
  forgetTerminalReject(e) {
    this.terminalRejects.delete(e);
  }
  sessionFullGate() {
    if (this.sessionFullUntilMs === 0) return "open";
    let e = Date.now();
    if (e < this.sessionFullUntilMs) return this.sessionFullSuppressed++, "skip";
    return this.sessionFullUntilMs = e + ue, "probe";
  }
  recordSessionFull() {
    let e = this.sessionFullUntilMs !== 0, r = Date.now();
    if (this.sessionFullUntilMs = r + ue, this.sessionFullNextOfferMs = r + xe, e && this.sessionFullSuppressed === 0) return;
    (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "push_parked_session_full", { suppressed_pushes: this.sessionFullSuppressed }), (0, import_chunk_42tcgre6.q)("warn", "working_session_full", { suppressed_pushes: this.sessionFullSuppressed }), this.sessionFullSuppressed = 0;
  }
  clearSessionFull() {
    this.sessionFullUntilMs = 0;
  }
  sessionFullReprobeNow() {
    if (this.sessionFullUntilMs !== 0) this.sessionFullUntilMs = Date.now();
  }
  releaseSessionFullHold(e) {
    let r = this.terminalRejects.get(e);
    if (r === void 0 || !r.heldWhileFull) return;
    if (this.sessionFullUntilMs !== 0) {
      let t = Date.now();
      if (t < this.sessionFullUntilMs + Z || t < this.sessionFullNextOfferMs || r.latchedUntilMs !== 0) return;
      this.sessionFullNextOfferMs = t + xe;
    }
    r.heldWhileFull = false, this.resetTerminalRejectStreak(e), this.reopenMtimeGate(e);
  }
  get transportFailureSeq() {
    return this.retryableTransportFailures;
  }
  get sessionTerminalRejectSeq() {
    return this.sessionTerminalRejects;
  }
  noteRetryableTransportFailure() {
    if (this.retryableTransportFailures++, this.sessionFullUntilMs !== 0) this.sessionFullNextOfferMs = Math.max(this.sessionFullNextOfferMs, Date.now() + ue);
  }
  noteSessionTerminalReject() {
    this.sessionTerminalRejects++;
  }
  get activeSyncer() {
    return this.syncer;
  }
  syncerStarted(e) {
    this.syncer = e;
  }
  syncerStopped(e) {
    if (this.syncer === e) this.syncer = null;
  }
  armLateStart(e) {
    this.lateStartRoot = e;
  }
  async flush() {
    if (this.syncer === null) {
      if (this.lateStartRoot !== null && this.startInFlight === null) {
        let e = azl(this.lateStartRoot);
        this.startInFlight = e, e.finally(() => {
          if (this.startInFlight === e) this.startInFlight = null;
        }).catch(() => {
        });
      }
      await this.startInFlight?.catch(() => {
      });
    }
    await this.syncer?.flush();
  }
  sessionFullStateForTest() {
    return { armed: this.sessionFullUntilMs !== 0, suppressed: this.sessionFullSuppressed };
  }
}
var ct = new import_chunk_2904xtvq.j(() => new Ae());
function I() {
  return ct.of((0, import_chunk_f9x2f6cx.N)().host);
}
function ee(e, r, t) {
  I().recordSeen(e, r, t);
}
function Ee(e) {
  return I().seenState.get(e);
}
function be(e, r) {
  return I().inFlight.run(e, r);
}
function p5o(e, r) {
  if (!Fe(e)) throw Error("syncDir must be absolute");
  if (r.includes("\0")) throw Error("path contains null bytes");
  if (!Fe(r)) throw Error("path must be absolute");
  let t = oe(e, Ze(r));
  if (t === "" || t === "." || _e(t)) throw Error("path must be under the working sync dir");
  return t;
}
function _e(e) {
  return Fe(e) || e.split(fe).includes("..");
}
function aUe(e) {
  for (let r of e.split(fe)) if (r.startsWith(".") || r.endsWith("~") || r.endsWith(".swp") || r.endsWith(".tmp")) return true;
  return false;
}
var Pe = "synced_file_limit_exceeded", cti = "synced_file_lane_denied", lt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ reason: (0, import_chunk_adx6804h.n)().optional(), resource: (0, import_chunk_adx6804h.n)().optional() }) })), dt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)().optional(), resource_type: (0, import_chunk_adx6804h.n)().optional() }) }));
function ut(e, r) {
  if (e === "timeout" || e === "network") return true;
  if (e === "auth" || e === "other") return false;
  if (r === void 0) return true;
  return r === 408 || r === 429 || r >= 500;
}
function je(e, r) {
  let t = I(), { kind: d, status: i } = (0, import_chunk_jv7av99m.$i)(r), f = ut(d, i);
  if (f) t.noteRetryableTransportFailure();
  else if (d === "auth") t.noteSessionTerminalReject();
  let a = i === 400 || i === 403 ? ft(r) : void 0, h = i === 400 ? a?.reason : void 0, g = i === 403 ? a?.resource : void 0;
  return { kind: "error", message: `${e} failed: ${d}${i ? ` ${i}` : ""}`, retryable: f, errorKind: d, status: i, ...h !== void 0 && { laneReason: h }, ...g !== void 0 && { refusedResource: g } };
}
function ft(e) {
  let r = e?.response?.data;
  return lt().safeParse(r).data?.error;
}
function _t(e) {
  if (e.errorKind === "gated") return `put_gated_${(e.gateReason ?? "unknown").replaceAll("-", "_")}`;
  return e.status !== void 0 ? `put_rejected_${e.status}` : `put_rejected_${e.errorKind}`;
}
async function mAn(e, r, t) {
  let d = I();
  try {
    let i = await import_chunk_865at33z.zt.put("/worker/synced_file", { path: `${BDt}/${e}`, content: r.toString("base64"), ...t && { if_match_sha256: t }, worker_epoch: import_chunk_c203g5kd.s.CLAUDE_CODE_WORKER_EPOCH ?? 0 }, { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, timeout: Ie, validateStatus: (f) => f >= 200 && f < 300 || f === 409, maxBodyLength: Math.ceil(Xte * 4 / 3) + 1024 });
    if (!i.ok) return d.noteSessionTerminalReject(), { kind: "error", message: `put gated: ${i.reason}`, retryable: false, errorKind: "gated", status: void 0, gateReason: i.reason };
    if (i.status === 409) return { kind: "conflict" };
    return { kind: "ok", content_sha256: i.data.content_sha256 };
  } catch (i) {
    return je("put", i);
  }
}
async function Itt(e) {
  let r = I();
  try {
    let t = await import_chunk_865at33z.zt.get(`/worker/synced_file?path=${encodeURIComponent(`${BDt}/${e}`)}`, { auth: "session-jwt", host: "ccr-session", headers: { "anthropic-version": "2023-06-01" }, timeout: Ie, maxContentLength: Math.ceil(Xte * 4 / 3) + 1024, validateStatus: (d) => d >= 200 && d < 300 || d === 404 });
    if (!t.ok) return r.noteSessionTerminalReject(), { kind: "error", message: `get gated: ${t.reason}`, retryable: false, errorKind: "gated", status: void 0, gateReason: t.reason };
    if (t.status === 404) {
      let d = dt().safeParse(t.data);
      return { kind: "not_found", ...d.success && { body: d.data.error } };
    }
    return { kind: "ok", buf: Buffer.from(t.data.content, "base64"), content_sha256: t.data.content_sha256 };
  } catch (t) {
    return je("get", t);
  }
}
async function ve(e, r) {
  Be(e, r);
  let t = await (0, import_promises.realpath)(e), d = await (0, import_promises.realpath)(U(r)), i = oe(t, d);
  if (_e(i)) {
    let a = Error("dest parent escaped working sync dir");
    throw a.code = "WORKING_PARENT_ESCAPE", a;
  }
  let f = i === "" ? re(r) : X(i, re(r));
  if (aUe(f)) {
    let a = Error("dest resolves into an ignored path");
    throw a.code = "WORKING_DEST_IGNORED", a;
  }
  try {
    if ((await (0, import_promises.lstat)(r)).isSymbolicLink()) {
      let h = Error("dest is a symlink");
      throw h.code = "WORKING_DEST_SYMLINK", h;
    }
  } catch (a) {
    if (!(0, import_chunk_jv7av99m.J)(a)) throw a;
  }
}
function Be(e, r) {
  if ((0, import_chunk_z6pfqf6e.rp)(e) || (0, import_chunk_z6pfqf6e.rp)(U(r))) {
    let t = Error("a folder on the way to dest has a backslash in its name");
    throw t.code = "WORKING_PATH_MISREAD", t;
  }
}
async function hAn(e, r, t) {
  Be(e, r), await (0, import_promises.mkdir)(e).catch((a) => {
    if ((0, import_chunk_jv7av99m.w)(a) !== "EEXIST") throw a;
  });
  let d = await (0, import_promises.realpath)(e), i = U(r);
  for (; ; ) try {
    let a = await (0, import_promises.realpath)(i), h = oe(d, a);
    if (_e(h)) {
      let g = Error("dest ancestor escaped working sync dir");
      throw g.code = "WORKING_PARENT_ESCAPE", g;
    }
    if (aUe(h)) {
      let g = Error("dest ancestor resolves into an ignored path");
      throw g.code = "WORKING_DEST_IGNORED", g;
    }
    break;
  } catch (a) {
    if (!(0, import_chunk_jv7av99m.J)(a)) throw a;
    let h = U(i);
    if (h === i) break;
    i = h;
  }
  await (0, import_promises.mkdir)(U(r), { recursive: true }), await ve(e, r);
  let f = `${r}.${process.hrtime.bigint().toString(36)}.tmp`;
  try {
    await (0, import_chunk_q7qjcthc.vI)(f);
  } catch (a) {
    throw We(a), a;
  }
  try {
    await (0, import_promises.writeFile)(f, t, { mode: f5o, flag: "wx" });
  } catch (a) {
    throw We(a), await (0, import_promises.unlink)(f).catch(() => {
    }), a;
  }
  try {
    await (0, import_promises.rename)(f, r);
  } catch (a) {
    throw await (0, import_promises.unlink)(f).catch(() => {
    }), a;
  }
}
function We(e) {
  if ((0, import_chunk_jv7av99m.w)(e) !== "EEXIST") return;
  let r = Error("sibling tempfile name already taken", { cause: e });
  throw r.code = "WORKING_TMP_TAKEN", r;
}
async function EXl(e, r, t) {
  let d;
  try {
    d = p5o(t, e.mount_path);
  } catch (f) {
    return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "bad_mount_path"), { ok: false, error: f instanceof Error ? f.message : String(f) };
  }
  if ((0, import_chunk_k2pr2qmg.WDt)(d)) return import_chunk_3vy81xdp.MXt.emit(d, "stored"), { ok: true, noop: "dir_sync_lane_row" };
  if (aUe(d)) return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "ignored_path"), { ok: false, error: "mount_path is an ignored path" };
  let i = X(t, d);
  return be(d, async () => {
    let f, a;
    try {
      try {
        await ve(t, i);
      } catch (o) {
        if (!(0, import_chunk_jv7av99m.J)(o)) return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", (0, import_chunk_jv7av99m.w)(o) === "WORKING_PATH_MISREAD" ? "backslash_in_path" : "containment_failed"), { ok: false, error: `mount_path failed containment: ${(0, import_chunk_jv7av99m.w)(o) ?? "unknown"}` };
      }
      let h = null;
      try {
        let o = await (0, import_promises.open)(i, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK);
        try {
          let _ = await o.stat();
          if (_.isFile()) {
            if (_.size > Xte) return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "too_large"), { ok: false, error: "local file too large to reconcile" };
            h = await o.readFile();
          }
        } finally {
          await o.close();
        }
      } catch (o) {
        let _ = (0, import_chunk_jv7av99m.w)(o);
        if (_ !== "ENOENT" && _ !== "ELOOP" && _ !== "EMLINK") throw o;
      }
      let g = h ? (0, import_chunk_ccm69jjy.Je)(h) : void 0, k = Ee(i);
      if (g && k && k.localHash === g && e.content_sha256 !== void 0 && k.etag === e.content_sha256) return (0, import_chunk_cqa9hrgx.u)("ccr_synced_file_stage"), { ok: true, noop: "already_present" };
      let R = e.expected_local_sha256 || void 0, T = k && k.localHash === g && (R === void 0 || k.etag === R);
      if (h && !T) {
        let o = await mAn(d, h, R);
        if (o.kind === "error") return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "push_failed"), { ok: false, error: o.message };
        let _ = await Itt(d);
        if (_.kind !== "ok") return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "reget_failed"), { ok: false, error: _.kind === "error" ? _.message : "get not_found after put" };
        f = _.buf, a = _.content_sha256, (0, import_chunk_42tcgre6.q)("info", "working_stage_reconciled", { conflict: o.kind === "conflict" });
      } else {
        let o = await r(e.filestore_path);
        if (!o.ok) return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "fetch_failed"), { ok: false, error: o.error };
        if (o.buf.length > Xte) return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "too_large"), { ok: false, error: "staged content too large" };
        f = o.buf, a = e.content_sha256;
      }
      let F = null;
      try {
        let o = await (0, import_promises.open)(i, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK);
        try {
          let _ = await o.stat();
          if (_.isFile()) {
            if (_.size > Xte) return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "too_large"), { ok: false, error: "local file too large to reconcile" };
            F = await o.readFile();
          }
        } finally {
          await o.close();
        }
      } catch (o) {
        let _ = (0, import_chunk_jv7av99m.w)(o);
        if (_ !== "ENOENT" && _ !== "ELOOP" && _ !== "EMLINK") throw o;
      }
      if (F && (0, import_chunk_ccm69jjy.Je)(F) !== g) {
        let o = await mAn(d, F, a);
        if (o.kind === "error") return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "push_failed"), { ok: false, error: o.message };
        let _ = await Itt(d);
        if (_.kind !== "ok") return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "reget_failed"), { ok: false, error: _.kind === "error" ? _.message : "get not_found after put" };
        f = _.buf, a = _.content_sha256, (0, import_chunk_42tcgre6.q)("info", "working_stage_reconciled", { conflict: o.kind === "conflict", mid_window: true });
      }
    } catch (h) {
      return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "reconcile_threw"), { ok: false, error: `reconcile failed: ${(0, import_chunk_jv7av99m.w)(h) ?? "unknown"}` };
    }
    try {
      await hAn(t, i, f);
    } catch (h) {
      return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_stage", "write_failed"), { ok: false, error: `write failed: ${(0, import_chunk_jv7av99m.w)(h) ?? "unknown"}` };
    }
    return ee(i, a, (0, import_chunk_ccm69jjy.Je)(f)), (0, import_chunk_cqa9hrgx.u)("ccr_synced_file_stage"), (0, import_chunk_42tcgre6.q)("info", "working_stage_ok", { bytes: f.length }), { ok: true };
  });
}
async function pt(e, r) {
  let t = I();
  if ((0, import_chunk_k2pr2qmg.WDt)(r)) return (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "lane_path_reserved"), true;
  let d = t.terminalRejects.get(r);
  if (d !== void 0 && d.latchedUntilMs !== 0) {
    if (Date.now() < d.latchedUntilMs) return d.suppressed++, true;
    d.latchedUntilMs = 0;
  }
  let i = X(e, r);
  if ((0, import_chunk_z6pfqf6e.rp)(i)) return (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "backslash_in_path"), true;
  let f;
  try {
    f = await (0, import_promises.realpath)(i);
  } catch (y) {
    if ((0, import_chunk_jv7av99m.J)(y)) return true;
    throw y;
  }
  let a;
  try {
    a = await (0, import_promises.realpath)(e);
  } catch {
    return false;
  }
  let h = oe(a, f);
  if (h !== r && (h === "" || _e(h))) return (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "symlink_escape"), true;
  let g;
  try {
    let y = await (0, import_promises.open)(i, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK);
    try {
      let W = await y.stat();
      if (!W.isFile()) return true;
      if (W.size > Xte) return (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "too_large"), true;
      g = await y.readFile();
    } finally {
      await y.close();
    }
  } catch (y) {
    let W = (0, import_chunk_jv7av99m.w)(y);
    if (W === "ELOOP" || W === "EMLINK") return (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "symlink_escape"), true;
    return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "read_failed"), false;
  }
  let k = (0, import_chunk_ccm69jjy.Je)(g), R = Ee(i);
  if (k === R?.localHash) return true;
  let T = R === void 0 ? t.evictedEtag.get(i) : void 0, F = "open";
  if (R === void 0 && T === void 0) {
    let y = await Itt(r);
    if (y.kind === "error") {
      if ((0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "seed_get_failed"), !y.retryable) t.recordTerminalReject(r);
      return !y.retryable;
    }
    if (y.kind === "ok") {
      t.resetTerminalRejectStreak(r);
      let W = (0, import_chunk_ccm69jjy.Je)(y.buf);
      if (W === k) return ee(i, y.content_sha256, k), true;
      try {
        await hAn(e, i, y.buf);
      } catch {
        return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "write_failed"), false;
      }
      return ee(i, y.content_sha256, W), (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "cold_renderer_wins"), true;
    }
    if (F = t.sessionFullGate(), F === "skip") return t.recordTerminalReject(r, true), true;
  }
  let o = await mAn(r, g, R?.etag ?? T);
  if (F === "probe") {
    if (o.kind === "ok") t.clearSessionFull();
    else if (o.kind === "conflict" || o.laneReason !== Pe) t.sessionFullReprobeNow();
  }
  if (o.kind === "ok") return t.resetTerminalRejectStreak(r), ee(i, o.content_sha256, k), (0, import_chunk_cqa9hrgx.u)("ccr_synced_file_push"), true;
  if (o.kind === "error") {
    if (o.retryable) t.resetTerminalRejectStreak(r), (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "put_failed");
    else {
      (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", _t(o));
      let y = o.laneReason === Pe;
      if (t.recordTerminalReject(r, y), y) t.recordSessionFull();
    }
    return (0, import_chunk_42tcgre6.q)("warn", "working_push_failed", { reason: o.message, retryable: o.retryable }), !o.retryable;
  }
  t.resetTerminalRejectStreak(r);
  let _ = await Itt(r);
  if (_.kind === "error") {
    if ((0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "reget_failed"), !_.retryable) t.recordTerminalReject(r);
    return !_.retryable;
  }
  if (_.kind === "not_found") return t.forgetSeen(i), t.sessionFullReprobeNow(), (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "reget_failed"), false;
  try {
    await hAn(e, i, _.buf);
  } catch {
    return (0, import_chunk_cqa9hrgx.m)("ccr_synced_file_push", "write_failed"), false;
  }
  return ee(i, _.content_sha256, (0, import_chunk_ccm69jjy.Je)(_.buf)), (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "conflict_overwritten"), true;
}
function izl() {
  return I().flush();
}
async function vXl() {
  let e = I();
  await izl();
  for (; ; ) {
    if (e.inFlight.size === 0 && (e.activeSyncer?.pendingCount() ?? 0) === 0) return;
    await e.inFlight.settle(), await new Promise((r) => setImmediate(r));
  }
}
async function azl(e, r = (0, import_chunk_cg8dqz0a.x)() === "linux" && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_WORKING_SYNC_WATCH ? import_fs.watch : null) {
  let t = I();
  t.armLateStart(null);
  for (let E = 1; ; E++) try {
    await (0, import_promises.mkdir)(e);
    break;
  } catch (P) {
    let v = (0, import_chunk_jv7av99m.w)(P);
    if (v === "EEXIST") break;
    if (v === "ENOENT") {
      if (E < st) {
        await (0, import_chunk_5appeerh.K)(ot);
        continue;
      }
      return (0, import_chunk_42tcgre6.q)("info", "working_sync_parent_absent", {}), t.armLateStart(e), null;
    }
    return (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "sync_start_failed"), (0, import_chunk_42tcgre6.q)("warn", "working_sync_start_failed", { code: v ?? "unknown" }), null;
  }
  let d = 0, i = [], f = () => d < et ? (d++, Promise.resolve()) : new Promise((E) => i.push(E)), a = () => {
    let E = i.shift();
    if (E) E();
    else d--;
  }, h = /* @__PURE__ */ new Set(), g = false, k = false, R = 0, T = 0, F = r, o, _ = 0, y = 0, W = false, ne, ie = /* @__PURE__ */ new Set(), ae = 0, G = false, Oe = /* @__PURE__ */ new Set(), z = (E, P, v = {}) => {
    let A = [P, ...Object.values(v)].join(" ");
    if (!g && !Oe.has(A)) Oe.add(A), (0, import_chunk_42tcgre6.q)(E, P, v);
  }, H, De = Date.now(), pe = (E) => {
    clearInterval(H), H = setInterval(Te, E), H.unref?.();
  }, Ce = () => {
    pe(Z), Te();
  }, C = () => {
    if (o?.close(), o = void 0, G) G = false, clearInterval(H), H = setTimeout(Ce, Z - Math.abs(Date.now() - De) % Z), H.unref?.();
  }, Ue = () => {
    (0, import_chunk_42tcgre6.q)("warn", "working_sync_watch_errored", {}), F = null, C();
  }, Ke = async (E) => {
    ae++;
    let P = [], v = { close: () => {
      for (let S of P) S.close();
    } }, A = () => o === v, ce = (S, L, D) => {
      P.push(E(L, { persistent: false }, (we, V) => {
        if (!A() || !D(V)) return;
        if (!(we === "change" && V === re(e) && ie.delete(S))) C();
      }));
    };
    try {
      ce("root", e, () => true), ce("parent", U(e), (S) => typeof S !== "string" || S === "" || S === re(e) || S === re(U(e)));
    } catch (S) {
      v.close(), z("warn", "working_sync_watch_open_failed", { code: (0, import_chunk_jv7av99m.w)(S) ?? "unknown", watch: P.length === 0 ? "root" : "parent" });
      return;
    }
    o = v, y = _, ne = void 0, ie = /* @__PURE__ */ new Set(["root", "parent"]), W = true;
    let le = "parent";
    try {
      for (let L of P) L.on("error", () => {
        if (A()) Ue();
      });
      if ((await (0, import_promises.lstat)(U(e))).isSymbolicLink()) z("info", "working_sync_watch_test_skipped", { code: "parent_is_link" }), F = null, C();
      if (!A()) return;
      le = "root";
      let S = await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW);
      try {
        let { mode: L, gid: D } = await S.stat();
        if ((L & 1024) !== 0 && D !== process.getegid?.() && !process.getgroups?.().includes(D)) z("info", "working_sync_watch_test_skipped", { code: "setgid_folder" }), C();
        else if (A()) await S.chmod(L & 4095);
      } finally {
        await S.close();
      }
      ne = Date.now();
    } catch (S) {
      z("warn", "working_sync_watch_test_failed", { code: (0, import_chunk_jv7av99m.w)(S) ?? "unknown", watch: le }), C();
    } finally {
      W = false;
    }
  }, Ge = async () => {
    let E = [], P = [""], v = /* @__PURE__ */ new Set(), A = [...t.seenState.keys()], { transportFailureSeq: ce, sessionTerminalRejectSeq: le } = t, S = ++_, L = false, D = false, we = 0, V = false, de = false;
    e: while (P.length && !g) {
      let Y = P.shift(), M;
      try {
        M = await (0, import_promises.readdir)(X(e, Y), { withFileTypes: true });
      } catch (Q) {
        (0, import_chunk_42tcgre6.q)("warn", "working_scan_readdir_failed", { code: (0, import_chunk_jv7av99m.w)(Q) ?? "unknown" }), de = true;
        continue;
      }
      for (let Q of M) {
        if (++we > Le) {
          if (V = true, !k) (0, import_chunk_cqa9hrgx.l)("ccr_synced_file_push", "scan_cap_reached"), k = true;
          break e;
        }
        let b = Y ? X(Y, Q.name) : Q.name;
        if (v.add(b), aUe(b) || (0, import_chunk_k2pr2qmg.WDt)(b)) continue;
        if (Q.isDirectory()) {
          D = true, P.push(b);
          continue;
        }
        if (!Q.isFile()) continue;
        L = true;
        let me;
        try {
          me = (await (0, import_promises.lstat)(X(e, b))).mtimeMs;
        } catch {
          continue;
        }
        let ke = t.terminalRejects.get(b);
        if (ke !== void 0 && ke.latchedUntilMs !== 0 && Date.now() >= ke.latchedUntilMs) t.reopenMtimeGate(b);
        if (t.releaseSessionFullHold(b), me === t.lastSeenMtime.get(b)) continue;
        if (h.has(b) || t.inFlight.has(b)) continue;
        h.add(b), E.push((async () => {
          await f();
          try {
            if (await be(b, () => pt(e, b))) t.recordSettledMtime(b, me);
          } finally {
            h.delete(b), a();
          }
        })().catch((He) => (0, import_chunk_42tcgre6.q)("warn", "working_push_threw", { code: (0, import_chunk_jv7av99m.w)(He) ?? "unknown" })));
      }
    }
    if (!V && !de && !g) {
      for (let M of t.lastSeenMtime.keys()) if (!v.has(M)) t.reopenMtimeGate(M);
      for (let M of t.terminalRejects.keys()) if (!v.has(M)) t.forgetTerminalReject(M);
      let Y = e.endsWith(fe) ? e : e + fe;
      for (let M of A) if (M.startsWith(Y) && !v.has(oe(e, M))) t.evictDeleted(M);
    }
    if (V || de || g || L || D || t.inFlight.size > 0 || F === null) {
      if (L || D) ae = 0;
      if (G && (L || D)) {
        let Y = await (0, import_promises.stat)(e).then((M) => M.mtimeMs, () => Date.now());
        if (G && S > y && Date.now() - Y > Me) (0, import_chunk_42tcgre6.q)("warn", "working_sync_watch_missed_change", {}), F = null;
      }
      C();
    } else if (o === void 0) {
      if (ae >= nt) z("warn", "working_sync_watch_attempts_used_up");
      else if (!W) Ke(F);
    } else if (ie.size > 0) {
      if (ne !== void 0 && Date.now() - ne > Me) z("warn", "working_sync_watch_test_unheard", { watch: [...ie].join("+") }), F = null, C();
    } else if (S > y && !G) G = true, ae = 0, pe(tt), z("info", "working_sync_waiting_for_file_events");
    if (await Promise.allSettled(E), t.transportFailureSeq > ce || t.sessionTerminalRejectSeq > le) R = R === 0 ? 2 * Z : Math.min(R * 2, rt), T = Date.now() + R;
    else if (h.size === 0) R = 0, T = 0;
  }, he = 0, ge = async () => {
    he++;
    try {
      await Ge();
    } finally {
      he--;
    }
  }, Te = () => {
    if (he > 0 || Date.now() < T) return;
    ge().catch((E) => (0, import_chunk_42tcgre6.q)("warn", "working_push_threw", { code: (0, import_chunk_jv7av99m.w)(E) ?? "unknown" }));
  }, ze = ge();
  pe(Z), (0, import_chunk_42tcgre6.q)("info", "working_sync_started", {});
  let ye = { initialReconcile: ze, flush: ge, pendingCount: () => h.size, pollBackoffUntilForTest: () => T, reliesOnRootWatchForTest: () => G, hasTestedRootWatchForTest: () => ne !== void 0, stop() {
    g = true, C(), clearInterval(H), t.syncerStopped(ye);
  } };
  return t.syncerStarted(ye), ye;
}
async function uti(e) {
  if ((0, import_chunk_k2pr2qmg.WDt)(e)) return { kind: "error", message: Y9r, retryable: false, errorKind: "other", status: void 0 };
  return Itt(e);
}
async function fti(e, r, t, d) {
  let i = I();
  if ((0, import_chunk_k2pr2qmg.WDt)(r)) return { ok: false, reason: "put_failed", error: Y9r, retryable: false };
  if (t.length > Xte) return { ok: false, reason: "too_large", error: "content too large" };
  if (d !== void 0 && d.length === 0) return { ok: false, reason: "put_failed", error: "empty if_match", retryable: false };
  return be(r, async () => {
    let f = await mAn(r, t, d);
    if (f.kind === "conflict") {
      if (d !== void 0) return { ok: false, reason: "conflict", error: "lane row changed since if_match", retryable: false };
      return { ok: false, reason: "put_failed", error: "put rejected (409 without if_match)", retryable: true };
    }
    if (f.kind === "error") return { ok: false, reason: "put_failed", error: f.message, retryable: f.retryable };
    if (!aUe(r)) {
      let a = X(e, r), h = Ee(a), g = false;
      try {
        await ve(e, a);
        let k = await (0, import_promises.open)(a, import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK);
        try {
          let R = await k.stat();
          if (R.isFile() && R.size <= Xte && h !== void 0) {
            let T = Number(R.size), F = Buffer.allocUnsafe(T + 1), o = 0;
            for (; ; ) {
              let { bytesRead: _ } = await k.read(F, o, T + 1 - o, o);
              if (_ === 0) break;
              if (o += _, o > T) break;
            }
            g = o <= T && h.localHash === (0, import_chunk_ccm69jjy.Je)(F.subarray(0, o));
          }
        } finally {
          await k.close();
        }
      } catch (k) {
        g = (0, import_chunk_jv7av99m.J)(k);
      }
      if (!g) return i.recordEvictedEtag(a, f.content_sha256), (0, import_chunk_42tcgre6.q)("info", "worker_lane_mirror_skipped"), { ok: true, etag: f.content_sha256 };
      try {
        await hAn(e, a, t);
      } catch (k) {
        return i.recordEvictedEtag(a, f.content_sha256), (0, import_chunk_42tcgre6.q)("warn", "worker_lane_mirror_skipped", { code: (0, import_chunk_jv7av99m.w)(k) ?? "unknown" }), { ok: true, etag: f.content_sha256 };
      }
      ee(a, f.content_sha256, (0, import_chunk_ccm69jjy.Je)(t));
    }
    return { ok: true, etag: f.content_sha256 };
  });
}
