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
var chunk_9gnrc459_exports = {};
__export(chunk_9gnrc459_exports, {
  Iei: () => Iei
});
module.exports = __toCommonJS(chunk_9gnrc459_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_t9k2xeez = require("/$bunfs/root/chunk-t9k2xeez.js");
var import_chunk_tb222zty = require("/$bunfs/root/chunk-tb222zty.js");
var import_chunk_p2xjsht5 = require("/$bunfs/root/chunk-p2xjsht5.js");
var import_chunk_vq6fy5h3 = require("/$bunfs/root/chunk-vq6fy5h3.js");
var import_chunk_stxr0bw4 = require("/$bunfs/root/chunk-stxr0bw4.js");
var import_chunk_sg5zbskk = require("/$bunfs/root/chunk-sg5zbskk.js");
var import_chunk_k2pr2qmg = require("/$bunfs/root/chunk-k2pr2qmg.js");
var import_chunk_47st811y = require("/$bunfs/root/chunk-47st811y.js");
var import_chunk_x80n00ss = require("/$bunfs/root/chunk-x80n00ss.js");
var import_chunk_ky4xfg57 = require("/$bunfs/root/chunk-ky4xfg57.js");
var import_chunk_e9tagpmb = require("/$bunfs/root/chunk-e9tagpmb.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_s6j0q8ws = require("/$bunfs/root/chunk-s6j0q8ws.js");
var import_chunk_43xh35tx = require("/$bunfs/root/chunk-43xh35tx.js");
var import_chunk_qbdh4xcn = require("/$bunfs/root/chunk-qbdh4xcn.js");
var import_chunk_jafhv8vw = require("/$bunfs/root/chunk-jafhv8vw.js");
var import_chunk_7zd54r6w = require("/$bunfs/root/chunk-7zd54r6w.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var Ge = Buffer.from("anthropic.ccr.session_synced_file_put.v1", "utf8"), qe = Buffer.from("anthropic.ccr.session_synced_file_upload_begin.v1", "utf8"), We = Buffer.from("anthropic.ccr.session_synced_file_upload_commit.v1", "utf8"), Ye = 32;
function Ke({ sessionUuid: e, boundDeviceUuid: r, issuedAtMs: o, contentSha256: s, path: _, ifMatchSha256: g }) {
  if (s.length !== Ye) throw Error("syncedFileRequestSigner: the content hash is not 32 bytes");
  return (0, import_chunk_vq6fy5h3.tAn)(Ge, { sessionUuid: e, boundDeviceUuid: r, issuedAtMs: o, fixed: [s], strings: [_, g ?? ""] });
}
function Ve({ sessionUuid: e, boundDeviceUuid: r, issuedAtMs: o, sizeBytes: s, path: _, ifMatchSha256: g }) {
  if (!Number.isSafeInteger(s) || s < 0) throw Error("syncedFileRequestSigner: the size is not a byte count");
  return (0, import_chunk_vq6fy5h3.tAn)(qe, { sessionUuid: e, boundDeviceUuid: r, issuedAtMs: o, fixed: [(0, import_chunk_vq6fy5h3.Hei)(s)], strings: [_, g ?? ""] });
}
function Xe({ sessionUuid: e, boundDeviceUuid: r, issuedAtMs: o, path: s, uploadPath: _, contentSha256: g, ifMatchSha256: h }) {
  return (0, import_chunk_vq6fy5h3.tAn)(We, { sessionUuid: e, boundDeviceUuid: r, issuedAtMs: o, fixed: [], strings: [s, _, g, h ?? ""] });
}
function Qe({ sessionUuid: e, deviceUuid: r, key: o, now: s = Date.now }) {
  let _ = import_chunk_tb222zty.Ygt + r, g = async (S) => {
    let b = s(), k = await o.sign(S(b));
    return { device_attestation: { kid: _, signature: k.toString("base64") }, device_attestation_issued_at: new Date(b).toISOString() };
  }, h = { sessionUuid: e, boundDeviceUuid: r };
  return { sign: ({ content: S, path: b, ifMatchSha256: k }) => g((R) => Ke({ ...h, issuedAtMs: R, contentSha256: (0, import_crypto.createHash)("sha256").update(S).digest(), path: b, ifMatchSha256: k })), signBegin: ({ path: S, sizeBytes: b, ifMatchSha256: k }) => g((R) => Ve({ ...h, issuedAtMs: R, sizeBytes: b, path: S, ifMatchSha256: k })), signCommit: ({ path: S, uploadPath: b, contentSha256: k, ifMatchSha256: R }) => g((D) => Xe({ ...h, issuedAtMs: D, path: S, uploadPath: b, contentSha256: k, ifMatchSha256: R })), ...{} };
}
async function _e({ sessionId: e, boundDeviceUuid: r, credentials: o, held: s }) {
  let _ = (0, import_chunk_px0hhsq7.nC)(e);
  if (_ === void 0) return Y("bad_session_id");
  let g = await (0, import_chunk_7zd54r6w.Y2)(o).catch(() => {
    return;
  });
  if (g?.status !== "resolved") return Y("no_account");
  let h = r.toLowerCase(), S = await (0, import_chunk_p2xjsht5.S0t)(g.accountUuid, o, s?.rowPk.toLowerCase() === h ? s : void 0);
  if (S.status !== "loaded") return Y(S.status);
  if (S.rowPk.toLowerCase() !== h) return Y("bound_elsewhere");
  return (0, import_chunk_cqa9hrgx.u)("client_request_signer"), Qe({ sessionUuid: _, deviceUuid: h, key: S.key });
}
function Y(e) {
  (0, import_chunk_cqa9hrgx.l)("client_request_signer", e);
  return;
}
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var V = 3e4, be = "synced_file_limit_exceeded", Ze = "synced_file_too_large_inline", te = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)().optional(), reason: (0, import_chunk_adx6804h.n)().optional(), resource: (0, import_chunk_adx6804h.n)().optional(), sub_reason: (0, import_chunk_adx6804h.ie)().optional() }) }));
function Je(e) {
  if (e !== import_path.posix.normalize(e) || e.includes("\\") || e.includes("\0")) return false;
  return !import_path.posix.isAbsolute(e) && (e === import_chunk_k2pr2qmg.cTe || e.startsWith(`${import_chunk_k2pr2qmg.cTe}/`));
}
function ne(e) {
  if (Je(e)) return false;
  return (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`lane path escapes the lane root: ${e}`, "lane path escapes the lane root")), true;
}
function X(e) {
  return `${import_chunk_47st811y.BDt}/${e}`;
}
function re(e) {
  return e >= 200 && e < 300;
}
function oe(e, r) {
  return e.kind === "failed" ? { ...e, status: r } : e;
}
function et(e) {
  return e === "compliance_restricted" || e === "zdr_restricted";
}
function W(e) {
  if (e === "aborted") return { kind: "aborted" };
  if (e === "failed") return { kind: "failed" };
  if (e === "timed_out") return { kind: "failed", timedOut: true };
  if (e === "too_large") return { kind: "failed", tooLarge: true };
  if (e === "gated") return { kind: "lane_unavailable" };
  if (e === "no_auth") return { kind: "unauthorized" };
  if (e === "unsigned") return { kind: "lane_unavailable", cause: "device_key_unavailable" };
  if (e.status === 501 || e.status === 404) return { kind: "lane_unavailable" };
  let r = te().safeParse(e.data).data?.error;
  if (e.status === 400 && r?.reason === import_chunk_47st811y.cti) return { kind: "lane_unavailable", cause: "switched_off_by_anthropic" };
  if (e.status === 400 && r?.reason === Ze) return { kind: "failed", tooLarge: true };
  if (e.status === 403 && et(r?.resource)) return { kind: "lane_unavailable", cause: "compliance_restricted" };
  if (e.status === 403 && r?.resource === "untrusted_device" && r.sub_reason === "synced_file_write_unsigned") return { kind: "unauthorized", cause: "write_signature_refused" };
  if (e.status === 401 || e.status === 403) return { kind: "unauthorized" };
  return { kind: "failed" };
}
var ae = 3;
var nt = 300, rt = 4, ot = 131072, it = 1e5;
function ye(e) {
  let r = ot / rt;
  return Math.min(it, Math.max(V, Math.ceil(e / r * 1e3)));
}
var at = 67108864;
function st(e) {
  return Math.ceil(e * 4 / 3) + 1024;
}
var dt = { beginUpload: async () => ({ kind: "lane_unavailable" }), commitUpload: async () => ({ kind: "lane_unavailable" }), getDownload: async () => ({ kind: "lane_unavailable" }) };
class Q extends Error {
  constructor() {
    super("this machine cannot sign the request as the bound device");
  }
}
var ve = 64, ut = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ content_sha256: (0, import_chunk_adx6804h.n)().length(ve) })), ct = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ content: (0, import_chunk_adx6804h.n)(), content_sha256: (0, import_chunk_adx6804h.n)().length(ve) }));
function ke(e) {
  return typeof e === "object" && e !== null && "code" in e && e.code === "ECONNABORTED";
}
function lt(e, r) {
  if (ne(e)) return "failed";
  if (Array.from(X(e)).length > import_chunk_k2pr2qmg.YNa) return "path_too_long";
  if (r.length > import_chunk_47st811y.Xte) return "too_large";
  return null;
}
function Pe({ sessionId: e, credentials: r, signer: o, signedOnly: s = false }) {
  (0, import_chunk_t39bs2jr.Mw)(e, "seed upload session id");
  let _ = (0, import_chunk_t39bs2jr.Pu)(e), g = null, h;
  function S(E) {
    return g ??= (0, import_chunk_sg5zbskk.RLe)(E).then((v) => {
      if (v !== void 0) h = v;
      return v;
    }, () => {
      return;
    }).finally(() => {
      g = null;
    }), g;
  }
  let b = null, k = false;
  async function R(E) {
    let v = await o?.catch(() => {
      return;
    });
    if (v === void 0) {
      if (s) throw new Q();
      return;
    }
    try {
      return await E(v);
    } catch (H) {
      if (!k) k = true, (0, import_chunk_w578pjby.t)(`lane: request not signed: ${(0, import_chunk_jv7av99m.d)(H)}`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("client_request_signer", "sign_failed");
      if (s) throw new Q();
      return;
    }
  }
  async function D(E, v, H = {}) {
    let L = H.heedsRetryAfter ? b?.trackRequest() : void 0, x = await F(E, v, H, L);
    return L?.noteSettled(x), x;
  }
  async function F(E, v, { retryTimeouts: H = false, attempts: L = ae }, x) {
    let N = false;
    for (let y = 0; ; y++) {
      if ((0, import_chunk_jafhv8vw.g6)(v)) return "aborted";
      h ??= await (0, import_chunk_sg5zbskk.tT)().catch(() => {
        return;
      });
      let M = h, w;
      try {
        w = await E(M === void 0 ? {} : { "X-Trusted-Device-Token": M });
      } catch (T) {
        if (T instanceof Q) return "unsigned";
        if ((0, import_chunk_jafhv8vw.g6)(v)) return "aborted";
        if (await (0, import_chunk_865at33z.$9)(r)) return "no_auth";
        if ((0, import_chunk_jv7av99m.rH)(T)) return (0, import_chunk_w578pjby.t)("lane: the response is larger than this request accepts; not retried", { level: "warn" }), "too_large";
        if ((H || !ke(T)) && y + 1 < L) {
          await (0, import_chunk_5appeerh.K)(Re(y), v);
          continue;
        }
        if (ke(T)) return (0, import_chunk_w578pjby.t)("lane: request timed out", { level: "warn" }), "timed_out";
        return (0, import_chunk_k449cc64.i)(T), "failed";
      }
      if (!w.ok) return w.reason === "no-auth" ? "no_auth" : "gated";
      if ((w.status === 429 || w.status >= 500 && w.status !== 501) && y + 1 < L) {
        let T = Re(y);
        await (0, import_chunk_5appeerh.K)((w.status === 429 ? x?.takeWaitMs(y, w.response?.headers?.["retry-after"], T) : void 0) ?? T, v);
        continue;
      }
      let I = w.status === 403 && !N ? (0, import_chunk_stxr0bw4.Kle)(w.data) : void 0;
      if (I !== void 0 && (0, import_chunk_stxr0bw4.Jcn)(I)) {
        N = true;
        let T = await S(M);
        if (T !== void 0 && T !== M) continue;
      } else if (I !== void 0) (0, import_chunk_sg5zbskk.ALe)("lane:", I), h = void 0, (0, import_chunk_sg5zbskk.C9)();
      return { status: w.status, data: w.data };
    }
  }
  async function q(E, v, { ifMatchSha256: H, signal: L, shouldAttemptOnceIfLong: x = false } = {}) {
    let N = lt(E, v);
    if (N !== null) return { kind: N };
    if (H === "") return { kind: "failed" };
    let y = ye(we(v.length));
    return pt(await P(E, v, H, L, x && y > V ? 1 : ae, y));
  }
  function P(E, v, H, L, x, N) {
    let y = X(E);
    return D(async (M) => import_chunk_865at33z.zt.put(`/v1/code/sessions/${_}/synced_file`, { session_id: _, path: y, content: v.toString("base64"), ...H !== void 0 && { if_match_sha256: H }, ...await R((w) => w.sign({ content: v, path: y, ifMatchSha256: H })) }, { auth: "teleport-org", credentials: r, headers: M, timeout: N, validateStatus: () => true, signal: L, maxBodyLength: at }), L, { attempts: x });
  }
  async function G(E, v, H = 0, L = import_chunk_47st811y.Xte) {
    if (ne(E)) return { kind: "failed" };
    let x = new URLSearchParams({ path: X(E) }), N = ye(we(H)), y = false, M = await D(async (w) => {
      let z = await import_chunk_865at33z.zt.get(`/v1/code/sessions/${_}/file?${x.toString()}`, { auth: "teleport-org", credentials: r, headers: w, timeout: N, validateStatus: () => true, signal: v, maxContentLength: st(L) });
      return y ||= z.ok && z.status === 429, z;
    }, v, { attempts: N > V ? 1 : ae });
    return mt(ft(M, L), y);
  }
  return { putStoreRow: q, getStoreRow: G, ...dt };
}
function ft(e, r) {
  if (typeof e === "string") return W(e);
  if (re(e.status)) {
    let o = ct().safeParse(e.data);
    if (!o.success) return { kind: "failed", status: e.status };
    let s = Buffer.from(o.data.content, "base64");
    return s.length > r ? { kind: "failed", status: e.status, tooLarge: true } : { kind: "ok", content: s, etag: o.data.content_sha256 };
  }
  if (e.status === 404) return { kind: "not_found" };
  return oe(W(e), e.status);
}
function mt(e, r) {
  return r && e.kind === "failed" && e.status !== 429 ? { ...e, hadA429: true } : e;
}
function pt(e) {
  if (typeof e === "string") return W(e);
  if (re(e.status)) {
    let r = ut().safeParse(e.data);
    return r.success ? { kind: "ok", etag: r.data.content_sha256 } : { kind: "failed", status: e.status };
  }
  if (e.status === 409) return { kind: "conflict" };
  if (e.status === 400) {
    let r = te().safeParse(e.data), { type: o, reason: s } = r.success ? r.data.error : { type: void 0, reason: void 0 };
    if ((0, import_chunk_w578pjby.t)(`lane: put rejected (400): type=${o} reason=${s}`), s === be) return { kind: "lane_full" };
  }
  return oe(W(e), e.status);
}
function we(e) {
  return Math.ceil(e / 3) * 4;
}
function Re(e) {
  return nt * 2 ** e * (0.5 + Math.random() / 2);
}
var gt = 1e4;
async function se(e, r) {
  return (0, import_chunk_t9k2xeez.LZ)((0, import_chunk_bzyb60p0.YZt)(e).enabledNow()) && (0, import_chunk_bzyb60p0.grt)(e) && (!(0, import_chunk_bzyb60p0.T6)(e) || await Promise.resolve().then(() => r?.() ?? false).catch(() => false));
}
async function Ee({ client: e, pack: r, generation: o, uploaded: s, status: _, launchConsent: g, isProjectStillSynced: h, signal: S, onReadBack: b, deadlineMs: k = gt }) {
  if (s.kind !== "uploaded" || !kt(s.outcome) || (0, import_chunk_jafhv8vw.g6)(S) || !await se(g, h)) return "skipped";
  let R = new AbortController(), D = () => R.abort();
  S?.addEventListener("abort", D, { once: true });
  try {
    let F, P = await (0, import_chunk_5appeerh.me)(_t({ client: e, pack: r, generation: o, uploaded: s.outcome, signal: R.signal, onRead: (H) => {
      F = H;
    } }), k) ?? F ?? { verdict: "unreadable", heal: "none", got: "deadline", ready: null };
    if ((0, import_chunk_jafhv8vw.g6)(S) || P.got === "aborted") return "skipped";
    let G = bt(P.ready, o, r);
    (0, import_chunk_y53wbr8a.a)("tengu_home_seed_ready_seen", { outcome: (0, import_chunk_78g0060s.f)(P.verdict), got: (0, import_chunk_78g0060s.f)(P.got), heal: (0, import_chunk_78g0060s.f)(P.heal), ready_outcome: (0, import_chunk_78g0060s.f)(P.ready?.outcome ?? "none"), deny_or_ask_rules_missing: G, generation: o });
    let E = P.verdict === "applied_before_first_ask" || P.verdict === "applied_late" ? { verdict: P.verdict, left: wt(P.ready, St(r), G) } : { verdict: P.verdict, left: null };
    b?.(E);
    let v = Rt(P.verdict, s.outcome, E.left, s.settingsRefused !== void 0, G);
    if (v !== null) _.publish(v.text, v.level);
    return P.verdict;
  } catch (F) {
    if ((0, import_chunk_jv7av99m.Fe)(F) || (0, import_chunk_jafhv8vw.g6)(S)) return "skipped";
    return (0, import_chunk_k449cc64.i)(F), "unreadable";
  } finally {
    R.abort(), S?.removeEventListener("abort", D);
  }
}
async function _t({ client: e, pack: r, generation: o, uploaded: s, signal: _, onRead: g }) {
  let h = ht(await e.getStoreRow(import_chunk_k2pr2qmg.HXt, _));
  switch (h.kind) {
    case "aborted":
      return { verdict: "unreadable", got: "aborted", heal: "none", ready: null };
    case "unreadable":
      return { verdict: "unreadable", got: h.got, heal: "none", ready: null };
    case "ready":
      return { verdict: h.ready.generation < o ? s === "deadline" ? "not_seen" : "behind" : h.ready.generation !== o ? "stale" : yt(h.ready) ? "not_applied" : h.ready.appliedBeforeFirstAsk ? "applied_before_first_ask" : "applied_late", got: "ready", heal: "none", ready: h.ready };
    case "absent": {
      if (s === "deadline") return { verdict: "not_seen", got: "absent", heal: "none", ready: null };
      return g({ verdict: "not_seen", got: "absent", heal: "failed", ready: null }), { verdict: "not_seen", got: "absent", heal: (await e.putStoreRow(import_chunk_k2pr2qmg.vMe, r, { signal: _ })).kind === "ok" ? "ok" : "failed", ready: null };
    }
  }
}
function ht(e) {
  switch (e.kind) {
    case "ok": {
      let r = (0, import_chunk_ky4xfg57.O9r)(e.content);
      return r.ok ? { kind: "ready", ready: r.ready } : { kind: "unreadable", got: r.reason };
    }
    case "not_found":
      return { kind: "absent" };
    case "aborted":
      return { kind: "aborted" };
    case "failed":
    case "lane_unavailable":
    case "unauthorized":
      return { kind: "unreadable", got: e.kind };
  }
}
function St(e) {
  let r = (0, import_chunk_x80n00ss.tUe)(e);
  return r.ok && r.pack.settings !== null;
}
function bt(e, r, o) {
  if (e?.generation !== r || e.outcome !== "partial" || e.settingsWritten) return false;
  let s = (0, import_chunk_x80n00ss.tUe)(o);
  return s.ok && s.pack.settings !== null && (0, import_chunk_x80n00ss.Wei)(s.pack.settings) !== null;
}
function yt(e) {
  return e.outcome === "partial" && e.filesApplied === 0 && !e.settingsWritten;
}
function kt(e) {
  switch (e) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "deadline":
      return true;
    case "raced":
    case "not_forwarded_at_create":
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "failed":
    case "aborted":
      return false;
  }
}
function wt(e, r, o) {
  if (e === null || e.outcome !== "partial") return null;
  return !o && e.filesRefused > 0 ? "files" : r && !e.settingsWritten ? "settings" : "part";
}
function Rt(e, r, o, s, _) {
  let g = s ? "the rest of your settings" : "your settings", h = o === null ? "" : ` (${import_chunk_43xh35tx.I9r[o]})`, S = r === "deadline" || _;
  switch (e) {
    case "applied_before_first_ask":
      return { text: `The cloud session applied ${g} before its first reply${h}`, level: S ? "info" : "debug" };
    case "applied_late":
      return { text: `${(0, import_chunk_7cfjrnwy.wi)(g)} reached the cloud session after its first reply${h}; they apply from the next turn (no /clear needed)`, level: o === null || S ? "info" : "debug" };
    case "not_applied":
      return { text: `The cloud session could not apply ${g} (everything it was sent was skipped there)`, level: S ? "warning" : "debug" };
    case "not_seen":
      return r === "deadline" ? { text: `The cloud session has not confirmed ${g} (the upload may not have reached it in time)`, level: "warning" } : { text: `The cloud session has not confirmed ${g} and may be running without them`, level: "info" };
    case "behind":
      return { text: "The cloud session still ran with the settings it had for this reply; the ones just sent apply from the next turn (no /clear needed)", level: "info" };
    case "stale":
      return { text: `The cloud session confirmed a different copy of ${g} than the one just sent`, level: "warning" };
    case "unreadable":
      return { text: `The cloud session's answer about ${g} could not be read`, level: "warning" };
  }
}
var vt = 15e3, Pt = 3e4;
function Iei(e) {
  return Et(e).pendingSeed(Promise.resolve());
}
function Et({ sessionId: e, plan: r, bound: o, boundDeviceUuid: s, held: _, trigger: g, launchConsent: h, isProjectStillSynced: S, signal: b, credentials: k, storageV5: R, client: D, deadlineMs: F = vt, planDeadlineMs: q = Pt }) {
  let P = (0, import_chunk_vq6fy5h3.Cgt)(), G = Promise.resolve(s).catch(() => {
    return;
  }), E = D === void 0 ? void 0 : Promise.resolve(D), v = () => E ??= G.then((y) => Pe({ sessionId: e, credentials: k, ...y !== void 0 && { signer: _e({ sessionId: e, boundDeviceUuid: y, credentials: k, ..._ !== void 0 && { held: _ } }), signedOnly: true } })), H = (0, import_chunk_5appeerh.me)(Promise.resolve(r).catch((y) => {
    if (!(0, import_chunk_jv7av99m.Fe)(y)) (0, import_chunk_k449cc64.i)(y);
    return { kind: "none", reason: (0, import_chunk_jv7av99m.Fe)(y) ? "aborted" : "failed" };
  }), q).then((y) => y ?? { kind: "none", reason: "too_slow" }), L;
  H.then((y) => {
    L = y.kind === "ready" ? y.description : null;
  });
  let x = H.then((y) => y.kind === "ready" ? { plan: y, attempts: At({ sessionId: e, storageV5: R, plan: y, bound: o, trigger: g, signal: b, getStoreClient: v, deadlineMs: F }, () => se(h, S)) } : { plan: y, attempts: null });
  return { ensureUploaded: (y) => x.then(({ attempts: M }) => M?.ensureUploaded(y) ?? "done"), pendingSeed: (y) => {
    let M = x.then(({ plan: w, attempts: z }) => (z === null ? Promise.resolve().then(() => {
      for (let I of Gt(w, g, q)) P.publish(I, jt(w));
      return de(Ut(w.reason, g), g, "plan_"), { outcome: { kind: "none", reason: w.reason, ...Z(w) }, written: null };
    }) : z.endedOnce(y).then((I) => Ht(P, { sessionId: e, plan: w, bound: o, trigger: g }, I))).catch((I) => ((0, import_chunk_k449cc64.i)(I), de({ is: "bad", code: "unexpected" }, g, ""), { outcome: w.kind === "ready" ? { kind: "uploaded", outcome: "failed", summary: w.summary, bound: o, ...Te(w), ...Z(w) } : { kind: "none", reason: w.reason, ...Z(w) }, written: null })));
    return (0, import_chunk_qbdh4xcn.bNa)({ completion: M.then(({ outcome: w }) => w), status: P, description: () => L, afterFirstReply: (w, z) => M.then(({ outcome: I, written: T }) => T === null ? "skipped" : v().then(($e) => Ee({ client: $e, pack: T.pack, generation: T.generation, uploaded: I, status: P, launchConsent: h, isProjectStillSynced: S, signal: w, onReadBack: z }))) });
  } };
}
function At(e, r) {
  let o = Le(e, 1), s = { packUpload: e, mayStillForwardNow: r, ended: Promise.withResolvers(), isEnded: false, attemptsMade: 1, latest: o, call: void 0 };
  return s.ended.promise.catch(() => {
  }), Ue(s, o, null), { endedOnce: (_) => (_.then(() => (s.isEnded = true, s.latest)).then((g) => le(s, g), (g) => pe(s, g)), s.ended.promise), ensureUploaded: (_) => s.call ??= Ot(s, _).finally(() => {
    s.call = void 0;
  }) };
}
function le(e, r) {
  e.isEnded = true, e.ended.resolve(r);
}
function pe(e, r) {
  e.isEnded = true, e.ended.reject(r);
}
function Ue(e, r, o) {
  r.then((s) => {
    if (!De(s)) le(e, Ce(o, s));
  }, (s) => pe(e, s));
}
function Ce(e, r) {
  return e !== null && e.written !== null && r.written === null && r.outcome !== "raced" ? e : r;
}
async function Ot(e, r) {
  try {
    let o = await e.latest;
    if (e.isEnded) return "done";
    let s = await e.mayStillForwardNow().catch((h) => ((0, import_chunk_k449cc64.i)(h), false));
    if (e.isEnded) return "done";
    if (!s) return (0, import_chunk_y53wbr8a.a)("tengu_home_seed_upload_no_longer_allowed", { trigger: (0, import_chunk_78g0060s.f)(e.packUpload.trigger), attempts_made: e.attemptsMade }), le(e, o), "done";
    if (r.aborted) return Ae(o);
    e.attemptsMade += 1;
    let _ = Le({ ...e.packUpload, cut: r }, e.attemptsMade);
    Ue(e, _, o), e.latest = _.then((h) => Ce(o, h)), e.latest.catch(() => {
    });
    let g = await _;
    return De(g) ? Ae(g) : "done";
  } catch (o) {
    return pe(e, o), "done";
  }
}
function Ae({ outcome: e, cause: r, httpStatus: o }) {
  return { kind: "failed", ...o !== void 0 && o >= 400 && { httpStatus: o }, ...e === "unauthorized" && { remedy: r === "write_signature_refused" ? "clock" : "login" } };
}
function De({ outcome: e, cause: r, isRefusedAsSent: o }) {
  switch (e) {
    case "deadline":
    case "unauthorized":
      return true;
    case "unavailable":
      return r === void 0;
    case "failed":
      return o !== true;
    case "sent":
    case "unchanged":
    case "conflict_resolved":
    case "raced":
    case "not_forwarded_at_create":
    case "lane_full":
    case "aborted":
      return false;
  }
}
async function Le({ sessionId: e, storageV5: r, plan: o, bound: s, trigger: _, signal: g, cut: h, getStoreClient: S, deadlineMs: b }, k) {
  let R = Date.now(), D = (k === 1 || _ !== "create") && (0, import_chunk_e9tagpmb.Srr)(e)?.tried === true, F = await Dt(S, o.pack, _, { sessionId: e, storageV5: r }, g, h, b);
  return (0, import_chunk_y53wbr8a.a)("tengu_home_seed_upload", { trigger: (0, import_chunk_78g0060s.f)(_), outcome: (0, import_chunk_78g0060s.f)(F.outcome), attempt: k, bytes: F.written?.pack.length ?? o.pack.length, generation: F.generation, bound: s, row_standing: F.standing === true, allow_rules_cut: F.allowRulesCut ?? 0, allow_rules_recorded: (0, import_chunk_e9tagpmb.Srr)(e)?.allow.length ?? 0, after_failed_create: D, cause: (0, import_chunk_78g0060s.fe)(F.cause), duration_ms: Date.now() - R }), F;
}
function Ht(e, { sessionId: r, plan: o, bound: s, trigger: _ }, { outcome: g, written: h, standing: S, allowRulesCut: b, cause: k }) {
  de(Ct(g, k), _, "");
  let R = (0, import_chunk_e9tagpmb.Srr)(r);
  return Mt(e, o, g, { sessionId: r, trigger: _, bound: s, didCreateCarryAllowRules: (R?.allow.length ?? 0) > 0 }, R?.tried === true && S !== true ? false : S ?? false, b ?? 0, k), { outcome: { kind: "uploaded", outcome: g, summary: o.summary, bound: s, ...Te(o), ...Z(o) }, written: h };
}
function Z(e) {
  if (e.kind === "none") return {};
  let r = (0, import_chunk_s6j0q8ws.q3o)(e.leftBehind), o = (0, import_chunk_s6j0q8ws.Uei)(e.leftBehind);
  return { ...(r.claudeMd || r.others > 0) && { keptForCredential: r }, ...o.names.length > 0 && { keptAsLinks: o } };
}
function Te(e) {
  let r = e.settings;
  return r === "schema_rejected" || r === "settings_too_large" || r === "settings_unreadable" || r === "self_hosted_runner" ? { settingsRefused: r } : {};
}
function Ut(e, r) {
  switch (e) {
    case "failed":
    case "home_unvettable":
    case "rules_unreadable":
      return { is: "bad", code: e };
    case "nothing_to_send":
    case "too_slow":
      return { is: "sad", code: e };
    case "unbound":
    case "flag_off":
    case "no_consent":
    case "user_settings_disabled":
    case "aborted":
    case "self_hosted_runner":
      return null;
    case "no_project_files":
      return null;
  }
}
function Ct(e, r) {
  switch (e) {
    case "sent":
    case "unchanged":
    case "conflict_resolved":
      return { is: "ok" };
    case "aborted":
    case "not_forwarded_at_create":
      return null;
    case "unavailable":
      return { is: "sad", code: r ?? e };
    case "lane_full":
    case "unauthorized":
    case "deadline":
    case "raced":
      return { is: "sad", code: e };
    case "failed":
      return { is: "bad", code: e };
  }
}
function de(e, r, o) {
  if (e === null) return;
  let s = r === "create";
  switch (e.is) {
    case "ok":
      if ((0, import_chunk_cqa9hrgx.u)("ccr_home_seed"), s) (0, import_chunk_cqa9hrgx.u)("ccr_home_seed_create_upload");
      return;
    case "sad":
      if ((0, import_chunk_cqa9hrgx.l)("ccr_home_seed", e.code), s) (0, import_chunk_cqa9hrgx.l)("ccr_home_seed_create_upload", `${o}${e.code}`);
      return;
    case "bad":
      if ((0, import_chunk_cqa9hrgx.m)("ccr_home_seed", e.code), s) (0, import_chunk_cqa9hrgx.m)("ccr_home_seed_create_upload", `${o}${e.code}`);
      return;
  }
}
async function Dt(e, r, o, s, _, g, h) {
  if ((0, import_chunk_jafhv8vw.g6)(_)) return { outcome: "aborted", generation: 0, written: null };
  let S = new AbortController(), b = () => S.abort();
  _?.addEventListener("abort", b, { once: true }), g?.addEventListener("abort", b, { once: true });
  try {
    let k = await (0, import_chunk_5appeerh.me)(e().then((R) => Ft(R, r, o, s, S.signal)), h);
    if (k === void 0 || k.outcome === "aborted") {
      if ((0, import_chunk_jafhv8vw.g6)(_)) return { outcome: "aborted", generation: 0, written: null };
      if (o === "create") return J(s, r, 1, void 0), { outcome: "deadline", generation: 0, written: { pack: r, generation: 1 } };
      return { outcome: "deadline", generation: 0, written: null, standing: "unknown" };
    }
    return k;
  } finally {
    S.abort(), _?.removeEventListener("abort", b), g?.removeEventListener("abort", b);
  }
}
async function Ft(e, r, o, s, _) {
  if (o !== "create") {
    let h = (0, import_chunk_e9tagpmb.Srr)(s.sessionId);
    if (h === void 0) return { outcome: "not_forwarded_at_create", generation: 0, written: null };
    let S = await e.getStoreRow(import_chunk_k2pr2qmg.vMe, _);
    if (S.kind !== "ok" && S.kind !== "not_found") return { outcome: Ie(S), generation: 0, written: null, standing: "unknown", ...ee(S) };
    let b = Lt(r, h), k = (D) => (0, import_chunk_e9tagpmb.z3o)(s.sessionId, { ...h, generation: D, etag: void 0, at: Date.now() }, s.storageV5), R = S.kind === "ok" ? await xe(e, b.pack, S, _, k) : { ...await Oe(e, Be(b.pack, h.generation), _, k), standing: "gone" };
    if (S.kind === "not_found") (0, import_chunk_y53wbr8a.a)("tengu_home_seed_stored_pack_gone", { outcome: (0, import_chunk_78g0060s.f)(R.outcome), generation: R.generation, record_generation: h.generation, after_failed_create: h.tried === true });
    if (R.written !== null) (0, import_chunk_e9tagpmb.z3o)(s.sessionId, { ...h, generation: R.generation, etag: R.etag, at: Date.now() }, s.storageV5);
    return b.cut === 0 ? R : { ...R, allowRulesCut: b.cut };
  }
  let g = await Oe(e, { pack: r, generation: 1 }, _, async (h) => {
    if (h > 1) J(s, r, h, void 0);
  });
  if (g.written !== null) J(s, g.written.pack, g.generation, g.etag);
  else if (g.outcome in ze) J(s, r, 1, void 0, { tried: true });
  return g;
}
async function Oe(e, { pack: r, generation: o }, s, _) {
  await _?.(o);
  let g = await e.putStoreRow(import_chunk_k2pr2qmg.vMe, r, { signal: s });
  if (g.kind !== "conflict") {
    if (g.kind !== "ok") return { outcome: Me(g, "sent"), generation: 0, written: null, ...ee(g) };
    return { outcome: "sent", generation: o, written: { pack: r, generation: o }, etag: g.etag };
  }
  let h = await e.getStoreRow(import_chunk_k2pr2qmg.vMe, s);
  if (h.kind !== "ok") return { outcome: Ie(h), generation: 0, written: null, standing: true, ...ee(h) };
  return xe(e, r, h, s, _);
}
function J(e, r, o, s, _ = {}) {
  let g = (0, import_chunk_x80n00ss.tUe)(r), h = g.ok ? Tt(g.pack.settings) ?? [] : [];
  (0, import_chunk_e9tagpmb.z3o)(e.sessionId, { generation: o, ...s !== void 0 && { etag: s }, ..._, allow: h.map(import_chunk_e9tagpmb.Dei), at: Date.now() }, e.storageV5);
}
async function xe(e, r, o, s, _) {
  let g = Bt(r, o.content);
  await _?.(g.generation);
  let h = await e.putStoreRow(import_chunk_k2pr2qmg.vMe, g.pack, { ifMatchSha256: o.etag, signal: s }), S = h.kind === "conflict" ? "raced" : Me(h, g.unchanged ? "unchanged" : "conflict_resolved");
  return h.kind === "ok" ? { outcome: S, generation: g.generation, written: { pack: g.pack, generation: g.generation }, standing: true, ...h.etag !== void 0 && { etag: h.etag } } : { outcome: S, generation: 0, written: null, standing: true, ...ee(h) };
}
function ee(e) {
  switch (e.kind) {
    case "lane_unavailable":
    case "unauthorized":
      return e.cause !== void 0 ? { cause: e.cause } : {};
    case "path_too_long":
    case "too_large":
      return { isRefusedAsSent: true };
    case "failed":
      return e.status === void 0 ? {} : { httpStatus: e.status, ...e.status >= 400 && e.status < 500 && e.status !== 429 && { isRefusedAsSent: true } };
    default:
      return {};
  }
}
function Lt(e, r) {
  let o = (0, import_chunk_x80n00ss.tUe)(e);
  if (!o.ok) throw Error("the settings pack to re-send does not parse");
  if (o.pack.settings === null || o.pack.settings.permissions === void 0) return { pack: e, cut: 0 };
  let s = ge().safeParse(o.pack.settings.permissions);
  if (!s.success) throw Error("the settings pack to re-send carries permissions of an unknown shape");
  let _ = s.data.allow;
  if (_ === void 0) return { pack: e, cut: 0 };
  let g = new Set(r.allow), h = _.filter((b) => g.has((0, import_chunk_e9tagpmb.Dei)(b))), S = _.length - h.length;
  return S === 0 ? { pack: e, cut: S } : { pack: (0, import_chunk_x80n00ss.EXt)({ ...o.pack, settings: xt(o.pack.settings, h) }), cut: S };
}
var ge = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ allow: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }));
function Tt(e) {
  let r = ge().safeParse(e?.permissions);
  return r.success ? r.data.allow : void 0;
}
function xt(e, r) {
  let o = ge().safeParse(e.permissions);
  return { ...e, permissions: { ...o.success ? o.data : {}, allow: [...r] } };
}
function Bt(e, r) {
  let o = (0, import_chunk_x80n00ss.tUe)(e), s = (0, import_chunk_x80n00ss.tUe)(r);
  if (o.ok && s.ok) {
    if ((0, import_chunk_x80n00ss.EXt)({ ...o.pack, generation: s.pack.generation }).equals(r)) return { pack: r, generation: s.pack.generation, unchanged: true };
  }
  if (r.equals(e)) return { pack: r, generation: 1, unchanged: true };
  return { ...Be(e, (0, import_chunk_x80n00ss.CNa)(r) ?? 0), unchanged: false };
}
function Be(e, r) {
  let o = (0, import_chunk_x80n00ss.tUe)(e);
  if (!o.ok) return { pack: e, generation: 1 };
  let s = Math.min(r + 1, import_chunk_x80n00ss.Y3o);
  return { pack: (0, import_chunk_x80n00ss.EXt)({ ...o.pack, generation: s }), generation: s };
}
function Me(e, r) {
  switch (e.kind) {
    case "ok":
      return r;
    case "conflict":
    case "path_too_long":
    case "too_large":
    case "failed":
      return "failed";
    case "lane_full":
      return "lane_full";
    case "aborted":
      return "aborted";
    case "lane_unavailable":
      return "unavailable";
    case "unauthorized":
      return "unauthorized";
  }
}
function Ie(e) {
  switch (e.kind) {
    case "not_found":
    case "failed":
      return "failed";
    case "aborted":
      return "aborted";
    case "lane_unavailable":
      return "unavailable";
    case "unauthorized":
      return "unauthorized";
  }
}
function Mt(e, r, o, { sessionId: s, trigger: _, bound: g, didCreateCarryAllowRules: h }, S, b, k) {
  let R = o === "unavailable" && k !== "device_key_unavailable" ? "" : ue;
  switch (o) {
    case "sent":
    case "unchanged":
    case "conflict_resolved": {
      if (e.publish(o === "unchanged" && _ !== "create" ? "Settings from this machine are already in this session" : (0, import_chunk_s6j0q8ws.$ei)({ ...r.description, permissionRules: r.description.permissionRules - b }) + (g ? "" : " (this session cannot run commands on this machine)"), "debug"), b > 0) e.publish(`${b} ${(0, import_chunk_7cfjrnwy.O)(b, "permission allow rule")} ${b === 1 ? "stays" : "stay"} on this machine, because ${b === 1 ? "it was" : "they were"} not in the settings prepared when this cloud session was created; a new session takes ${b === 1 ? "it" : "them"}`, "debug");
      let D = (0, import_chunk_s6j0q8ws.K3o)(r, { launch: _ === "create" ? "create" : h ? "reopen_sent" : "reopen_sent_no_allow_recorded", settingsFile: ce(r.configHome) });
      if (D !== null) e.publish(D, Ne(r));
      return;
    }
    case "aborted":
      return;
    case "deadline":
      e.publish(He(S, { ifNoneStood: import_chunk_s6j0q8ws.D9r, otherwise: "The cloud session may not have your latest settings", why: "sending your settings took too long", wayOut: R }), "warning");
      return;
    case "raced":
      e.publish(`${import_chunk_s6j0q8ws.D9r}: another launch of this session, or the session itself, wrote its settings first`, "warning");
      return;
    case "not_forwarded_at_create":
      if (!(0, import_chunk_szvrpg0x.Wa)().claim(`home_seed_not_sent_again:${(0, import_chunk_t39bs2jr.Un)(s)}`)) return;
      e.publish("Settings from this machine were not sent again: this machine has no record of sending them when this session was created (a session started without them, from another machine, by an earlier build, or older than this machine still tracks)", "debug");
      return;
    case "lane_full":
    case "unavailable":
    case "unauthorized":
    case "failed": {
      let D = k === "write_signature_refused" ? It : o === "unavailable" && k !== void 0 ? Nt[k] : ze[o];
      e.publish(He(S, { ifNoneStood: import_chunk_s6j0q8ws.M9r, otherwise: import_chunk_s6j0q8ws.H9r, why: D, wayOut: R }), "warning");
      return;
    }
  }
}
function Ne(e) {
  let r = e.summary.overCap + e.unreadable + (0, import_chunk_4smdap7r.U)(e.leftBehind, (_) => _.reason === "undefusable"), o = e.settings === "schema_rejected" || e.settings === "settings_too_large" || e.settings === "settings_unreadable", s = e.summary.droppedRules.credentialRestrictions > 0;
  return r > 0 || o || s ? "warning" : "debug";
}
var ue = "; start a new cloud session to try again";
function ce(e) {
  return (0, import_chunk_n2dbhmj2.os)((0, import_chunk_2yx6c1y2._n)("userSettings") ?? e);
}
function He(e, { ifNoneStood: r, otherwise: o, why: s, wayOut: _ }) {
  return e === false ? `${r}: ${s}${_}` : `${e === "gone" ? import_chunk_s6j0q8ws.D9r : o}: ${s}`;
}
function j(e, r, o) {
  return [e === "create" ? `${import_chunk_s6j0q8ws.M9r}: ${r}${o}` : `${import_chunk_s6j0q8ws.H9r}: ${r}`];
}
var ze = { lane_full: "the session has reached its limit of uploaded files", unavailable: "sending your settings is not available", unauthorized: import_chunk_qbdh4xcn.brr, failed: "sending your settings failed" }, It = "the cloud could not confirm where your settings came from (this machine's clock may be wrong)", Nt = { device_key_unavailable: "this machine could not prove it is the computer the session is bound to (you are signed out, or its device key is missing or unreadable)", compliance_restricted: "your organization's compliance policy does not allow sending your settings", switched_off_by_anthropic: "sending your settings was turned off by Anthropic for now", direct_sync_off: "sending your settings is turned off for your organization" };
function jt(e) {
  if (e.kind === "empty" && e.reason === "nothing_to_send") return Ne(e);
  return e.reason === "user_settings_disabled" ? "debug" : "warning";
}
function Gt(e, r, o) {
  let s = Math.ceil(o / 1e3);
  switch (e.reason) {
    case "unbound":
      return [];
    case "rules_unreadable": {
      if (e.settings === "settings_unreadable") return j(r, `${ce(e.configHome)} has errors (see /status) or links to a missing file`, "; fix it and start a new cloud session");
      let _ = e.unreadableSettingsFiles.length, g = (0, import_chunk_bzyb60p0.$Qo)(e.unreadableSettingsFiles);
      if ((0, import_chunk_bzyb60p0.UQo)(e.unreadableSettingsFiles)) return j(r, (0, import_chunk_bzyb60p0.Qci)(e.unreadableSettingsFiles), "; start a new cloud session from a folder outside connector-downloads");
      return g === "" ? j(r, (0, import_chunk_bzyb60p0.Qci)([]), "") : j(r, `${g} ${(0, import_chunk_7cfjrnwy.O)(_, "has", "have")} errors`, `; once ${(0, import_chunk_7cfjrnwy.O)(_, "it is", "they are")} fixed, start a new cloud session`);
    }
    case "failed":
      return j(r, "preparing your settings failed (see the debug log)", ue);
    case "too_slow":
      return j(r, `preparing your settings took over ${s} ${(0, import_chunk_7cfjrnwy.O)(s, "second")}`, ue);
    case "home_unvettable":
      return e.cause === "too_many_links" ? j(r, `your memory files and what they @import, or the links under ${(0, import_chunk_n2dbhmj2.os)(e.configHome)}, are too many to check`, "; remove some and start a new cloud session") : j(r, `a link, an unreadable folder or an @import under ${(0, import_chunk_n2dbhmj2.os)(e.configHome)} could not be checked`, "");
    case "nothing_to_send": {
      let _ = e.kind === "empty" ? (0, import_chunk_s6j0q8ws.K3o)(e, { launch: r === "create" ? "create" : "reopen_sent_nothing", settingsFile: ce(e.configHome) }) : null;
      return _ === null ? [] : [_];
    }
    case "user_settings_disabled":
      return ["Settings from this machine were not sent to the cloud session: this launch does not load your user settings (--setting-sources, or an SDK settingSources list, without user)"];
    case "flag_off":
    case "no_consent":
    case "aborted":
    case "no_project_files":
    case "self_hosted_runner":
      return [];
  }
}
