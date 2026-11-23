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
var chunk_kmbc34js_exports = {};
__export(chunk_kmbc34js_exports, {
  E_l: () => E_l,
  Ekr: () => Ekr,
  I1i: () => I1i,
  KWt: () => KWt,
  Kyo: () => Kyo,
  O1i: () => O1i,
  Oys: () => Oys,
  Pys: () => Pys,
  T_l: () => T_l,
  Tkr: () => Tkr,
  Xyo: () => Xyo,
  Yyo: () => Yyo,
  _Re: () => _Re,
  jln: () => jln,
  k_l: () => k_l,
  oUn: () => oUn,
  qyo: () => qyo,
  sUn: () => sUn,
  v_l: () => v_l,
  vkr: () => vkr
});
module.exports = __toCommonJS(chunk_kmbc34js_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class w {
  endpoint = void 0;
  set(e) {
    this.endpoint = e;
  }
}
var H = new import_chunk_2904xtvq.j(() => new w());
function x() {
  return H.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Kyo(e) {
  x().set(e);
}
function k_l() {
  return x().endpoint;
}
async function _Re(e, r, { signal: o, keepOnError: i, wholeChunks: d } = {}) {
  let y = e?.getReader(), z = () => void y?.cancel().catch(() => {
  }), g = [], _ = 0;
  o?.addEventListener("abort", z, { once: true });
  try {
    while (y !== void 0 && _ < r) {
      o?.throwIfAborted();
      let { done: m, value: k } = await y.read();
      if (o?.throwIfAborted(), m) break;
      let q = d ? k : k.subarray(0, r - _);
      g.push(q), _ += q.length;
    }
  } catch (m) {
    if (!i) throw m;
  } finally {
    o?.removeEventListener("abort", z), z();
  }
  let R = new Uint8Array(_), h = 0;
  for (let m of g) R.set(m, h), h += m.length;
  return R;
}
(0, import_chunk_adx6804h.B)();
var Y = "tengu_gentle_hammock", J = "tengu_wild_brooks", K = "tengu_golden_popcorn", Q = 4096, Z = 1024, V = 6048e5, X = 8192;
function Pys() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_GZIP_REQUEST_BODY_LEVEL ?? (0, import_chunk_865at33z.b)(K, 0);
  return Number.isInteger(e) && e >= 1 && e <= 9 ? e : void 0;
}
function S(e) {
  return e === "ccr_worker" ? import_chunk_c203g5kd.s.CLAUDE_CODE_GZIP_CCR_REQUEST_BODIES : import_chunk_c203g5kd.s.CLAUDE_CODE_GZIP_REQUEST_BODIES;
}
function P(e) {
  return e === "ccr_worker" ? Z : Q;
}
function ee(e, r) {
  if (import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET) return "unix_socket";
  if ((0, import_chunk_3jjr3wje.YX)(e) !== void 0) return "proxy";
  let o = (0, import_chunk_3jjr3wje.vM)();
  if (o?.cert !== void 0 || o?.key !== void 0) return "mtls";
  if (import_chunk_c203g5kd.s.NODE_EXTRA_CA_CERTS) {
    let i = (0, import_chunk_5e3gtsn9.Gc)();
    if (!((0, import_chunk_6e68m1dj.hn)() || r && (0, import_chunk_865at33z.b)(J, true) !== false || import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "local-agent" && (i === void 0 || i.NODE_EXTRA_CA_CERTS !== void 0))) return "custom_ca";
  }
  return;
}
function KWt(e) {
  return Buffer.isBuffer(e) && (0, import_chunk_30a5awzz.eo)().gzipRequestBody.serialisedBodies.has(e.buffer);
}
function L(e) {
  return Buffer.isBuffer(e) ? (0, import_chunk_30a5awzz.eo)().gzipRequestBody.serialisedBodies.get(e.buffer) : void 0;
}
function Oys(e) {
  let r = L(e);
  return r === void 0 ? {} : { requestBodyReusedChars: r.keptChars, requestBodyComparedWithSdk: r.checked };
}
function Ekr(e) {
  return typeof e === "string" ? e.length : L(e)?.chars;
}
function oUn(e, r, o, i = "api", d = false) {
  return (0, import_chunk_zhr7rpv7.md)(e) ? D(e, Ekr(r), o, i, d) : void 0;
}
function qyo(e, r, o) {
  return (0, import_chunk_zhr7rpv7.md)(e) && D(e, 1 / 0, r, o).gzip;
}
function D(e, r, o, i, d = false) {
  let y = S(i);
  if (y === false) return { gzip: false, reason: "env_off", bodyChars: r };
  if (!(0, import_chunk_wzdjp7c0.f_)()) return { gzip: false, reason: "not_bun_runtime", bodyChars: r };
  if (r === void 0) return { gzip: false, reason: "non_string_body", bodyChars: r };
  if (r < P(i)) return { gzip: false, reason: "below_min_size", bodyChars: r };
  if (y === true) return (0, import_chunk_30a5awzz.eo)().gzipRequestBody.rejectedThisProcess ? { gzip: false, reason: "latched_off", bodyChars: r } : { gzip: true, bodyChars: r };
  let z = ee(e, d);
  if (z !== void 0) return { gzip: false, reason: z, bodyChars: r };
  if (i === "ccr_worker" && !(0, import_chunk_865at33z.b)(Y, false)) return { gzip: false, reason: "flag_off", bodyChars: r };
  if (pe(o)) return { gzip: false, reason: "latched_off", bodyChars: r };
  return { gzip: true, bodyChars: r };
}
var ne = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("error"), error: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)(), message: (0, import_chunk_adx6804h.n)() }) })), U = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ latchedAt: (0, import_chunk_adx6804h.E)().finite(), status: (0, import_chunk_adx6804h.E)() })), re = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.n)(), reason: (0, import_chunk_adx6804h.n)() })), oe = ["The request body is not valid JSON", "Failed to parse request: could not parse request body as JSON"], F = /^bad json: (?:invalid character |unexpected EOF$|unexpected end of JSON input$|EOF$)/;
function G(e) {
  return { status: e.status, header: (r) => e.headers.get(r) ?? void 0, bodyText: () => ie(e) };
}
function se(e) {
  return (e.header("request-id")?.startsWith("req_") ?? false) || e.header("cf-ray") !== void 0;
}
async function ie(e) {
  return new TextDecoder().decode(await _Re(e.clone().body, X, { keepOnError: true }), { stream: true });
}
function de(e) {
  let r;
  try {
    r = (0, import_chunk_w578pjby.te)(e);
  } catch {
    return F.test(e.trimEnd());
  }
  let o = ne().safeParse(r);
  if (o.success) return oe.some((d) => o.data.error.message.startsWith(d));
  let i = re().safeParse(r);
  return i.success && i.data.reason === "bad_json" && F.test(i.data.error);
}
async function C(e) {
  if (e.status !== 400 && e.status !== 403 && e.status !== 415) return null;
  if (!se(e)) return "non_anthropic_rejection";
  if (e.status === 400 && de(await e.bodyText())) return "invalid_json_at_origin";
  return null;
}
async function Yyo(e) {
  if (e.ok) return null;
  return C(G(e));
}
async function ue(e) {
  if (await C(e) !== null) return "same_rejection";
  return e.header("request-id")?.startsWith("req_") ? "api_response" : "not_api_response";
}
function ae() {
  let e;
  try {
    e = (0, import_chunk_865at33z.ge)().gzipRequestBodiesLatchedOff;
  } catch {
    return "unavailable";
  }
  if (e === void 0) return;
  let r = U().safeParse(e);
  return r.success ? r.data : "malformed";
}
function O(e, r) {
  (0, import_chunk_865at33z.Ke)((o) => {
    let i = U().safeParse(o.gzipRequestBodiesLatchedOff);
    return (i.success ? i.data.latchedAt === e : o.gzipRequestBodiesLatchedOff !== void 0) ? { ...o, gzipRequestBodiesLatchedOff: void 0 } : o;
  }, r);
}
function pe(e) {
  let r = (0, import_chunk_30a5awzz.eo)().gzipRequestBody;
  if (r.latchedOff) return true;
  if (r.persistedLatchChecked) return false;
  let o = ae();
  if (o === "unavailable") return false;
  if (r.persistedLatchChecked = true, o === void 0) return false;
  if (o === "malformed") return O(void 0, e), (0, import_chunk_y53wbr8a.a)("tengu_gzip_request_body_latch_cleared", { reason: (0, import_chunk_78g0060s.f)("malformed") }), false;
  let i = Date.now() - o.latchedAt;
  if (i >= 0 && i < V) return r.latchedOff = true, r.persistedLatchInEffect = true, true;
  return O(o.latchedAt, e), (0, import_chunk_y53wbr8a.a)("tengu_gzip_request_body_latch_cleared", { reason: i < 0 ? (0, import_chunk_78g0060s.f)("malformed") : (0, import_chunk_78g0060s.f)("expired"), latchedStatus: o.status, latchedAgeHours: Math.max(0, Math.round(i / 36e5)) }), false;
}
function A() {
  let e = (0, import_chunk_30a5awzz.eo)().gzipRequestBody;
  e.latchedOff = true, e.rejectedThisProcess = true, e.persistedLatchChecked = true;
}
function T({ persist: e, status: r, storageV5: o, rollout: i = "api" }) {
  A();
  let d = (0, import_chunk_30a5awzz.eo)().gzipRequestBody;
  if (e && !d.persistedLatchInEffect && S(i) !== true) d.persistedLatchInEffect = true, (0, import_chunk_865at33z.Ke)((y) => ({ ...y, gzipRequestBodiesLatchedOff: { latchedAt: Date.now(), status: r } }), o);
  return d.persistedLatchInEffect ? "persisted" : "process";
}
function W(e, r) {
  switch (e) {
    case "api":
      if (r === "fell_back") (0, import_chunk_cqa9hrgx.l)("api_gzip_request_body", "fell_back");
      else if ((0, import_chunk_30a5awzz.eo)().once("gzip_request_body_ok")) (0, import_chunk_cqa9hrgx.u)("api_gzip_request_body");
      return;
    case "ccr_worker":
      if (r === "fell_back") (0, import_chunk_cqa9hrgx.l)("ccr_worker_gzip_request_body", "fell_back");
      else if ((0, import_chunk_30a5awzz.eo)().once("ccr_worker_gzip_request_body_ok")) (0, import_chunk_cqa9hrgx.u)("ccr_worker_gzip_request_body");
      return;
    case "frame_publish":
      if (r === "fell_back") (0, import_chunk_cqa9hrgx.l)("artifact_publish_gzip_request_body", "fell_back");
      else if ((0, import_chunk_30a5awzz.eo)().once("artifact_publish_gzip_request_body_ok")) (0, import_chunk_cqa9hrgx.u)("artifact_publish_gzip_request_body");
      return;
  }
}
function vkr(e = "api") {
  W(e, "sent");
}
function ce(e, r) {
  if (e !== "ccr_worker") return;
  let o = (0, import_chunk_30a5awzz.eo)().gzipRequestBody.ccrWorkerSkipReasonsLogged;
  if (o.has(r.reason)) return;
  o.add(r.reason), (0, import_chunk_y53wbr8a.a)("tengu_gzip_request_body_skipped", { rollout: (0, import_chunk_78g0060s.f)(e), reason: (0, import_chunk_78g0060s.f)(r.reason), requestBodyChars: r.bodyChars });
}
function I({ rejection: e, status: r, viaCloudflare: o, retryOutcome: i, retryStatus: d, latched: y, bodyChars: z, rollout: g = "api" }) {
  W(g, "fell_back"), (0, import_chunk_w578pjby.t)(`[API REQUEST] gzip request body rejected (rollout=${g} status=${r} kind=${e}); re-sent uncompressed \u2192 ${i}${d !== void 0 ? ` status=${d}` : ""}; gzip latched off: ${y}`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_gzip_request_body_fallback", { rollout: (0, import_chunk_78g0060s.f)(g), rejection: (0, import_chunk_78g0060s.f)(e), status: r, viaCloudflare: o, retryOutcome: (0, import_chunk_78g0060s.f)(i), retryStatus: d, latched: (0, import_chunk_78g0060s.f)(y), requestBodyChars: z });
}
async function M({ rejection: e, first: r, resend: o, facts: i, aborted: d, bodyChars: y, storageV5: z, rollout: g }) {
  let _ = { rejection: e, status: r.status, viaCloudflare: r.header("cf-ray") !== void 0, bodyChars: y, rollout: g }, R;
  try {
    R = await o();
  } catch (q) {
    throw I({ ..._, retryOutcome: d() ? "aborted" : "network_error", retryStatus: void 0, latched: T({ persist: false, status: r.status, storageV5: z, rollout: g }) }), q;
  }
  let h = i(R), m = await ue(h), k = T({ persist: g !== "ccr_worker" && e === "non_anthropic_rejection" && m === "api_response", status: r.status, storageV5: z, rollout: g });
  return I({ ..._, retryOutcome: m, retryStatus: h.status, latched: k }), R;
}
async function O1i({ res: e, dispatch: r, finalInit: o, identityBody: i, clientRequestId: d, storageV5: y, rollout: z = "api" }) {
  let g = await Yyo(e);
  if (g === null) return e;
  A(), e.body?.cancel().catch(() => {
  });
  let { compress: _, ...R } = o, h = { ...R, body: i };
  if (d !== void 0) {
    let m = (0, import_chunk_30a5awzz.eo)().gzipRequestBody.telemetryByClientRequestId.get(d);
    I1i(d, { requestBodyEncoding: "identity", requestBodyChars: Ekr(i) ?? i.length, gzipFallbackStatus: e.status, ...m !== void 0 && "gzipBlocks" in m && { gzipBlocks: m.gzipBlocks }, ...Oys(i) });
  }
  return M({ rejection: g, first: G(e), resend: () => r(h), facts: G, aborted: () => o.signal?.aborted === true, bodyChars: Ekr(i) ?? i.length, storageV5: y, rollout: z });
}
async function E_l({ answer: e, facts: r, resendIdentity: o, aborted: i, bodyChars: d, storageV5: y, rollout: z }) {
  let g = r(e), _ = await C(g);
  if (_ === null) return e;
  return A(), M({ rejection: _, first: g, resend: o, facts: r, aborted: i, bodyChars: d, storageV5: y, rollout: z });
}
function jln(e, r) {
  return async (o, i, d) => {
    let y = Ekr(i.body);
    if (y !== void 0 && y < P(e) && S(e) !== false && (0, import_chunk_30a5awzz.eo)().gzipRequestBody.ccrWorkerSkipReasonsLogged.has("below_min_size")) return d(i);
    let z = oUn(o, i.body, r, e);
    if (!z?.gzip) {
      if (z !== void 0) ce(e, z);
      return d(i);
    }
    vkr(e);
    let g = { ...i, compress: "gzip", body: (0, import_chunk_865at33z.mke)(i.body) }, _ = await d(g);
    return O1i({ res: _, dispatch: d, finalInit: g, identityBody: i.body, clientRequestId: void 0, storageV5: r, rollout: e });
  };
}
function I1i(e, r) {
  (0, import_chunk_30a5awzz.eo)().gzipRequestBody.telemetryByClientRequestId.set(e, r);
}
function Tkr(e, r) {
  if (e === null) return;
  let o = (0, import_chunk_30a5awzz.eo)().gzipRequestBody.telemetryByClientRequestId, i = o.get(e);
  if (i?.requestBodyEncoding !== "gzip") return;
  o.set(e, { ...i, gzipBlocks: i.gzipBlocks?.outcome === "as_blocks" ? { ...i.gzipBlocks, outcome: "rejected" } : r });
}
function v_l(e, r) {
  (0, import_chunk_30a5awzz.eo)().gzipRequestBody.dispatchAtByClientRequestId.set(e, r);
}
function T_l(e) {
  if (e === void 0) return;
  let r = (0, import_chunk_30a5awzz.eo)().gzipRequestBody.dispatchAtByClientRequestId, o = r.get(e);
  return r.delete(e), o;
}
function sUn(e) {
  if (e === void 0) return;
  let r = (0, import_chunk_30a5awzz.eo)().gzipRequestBody.telemetryByClientRequestId, o = r.get(e);
  return r.delete(e), o;
}
function fe() {
  let e = (0, import_chunk_30a5awzz.eo)().gzipRequestBody.selfChecks;
  if (e.started === 0 && e.passed === 0 && e.failed === 0) return {};
  let r = { requestBodyGzipSelfChecksStarted: e.started, requestBodyGzipSelfChecksPassed: e.passed, requestBodyGzipSelfChecksFailed: e.failed };
  return e.started = 0, e.passed = 0, e.failed = 0, r;
}
function Xyo(e) {
  if (e === void 0) return {};
  return { requestBodyEncoding: (0, import_chunk_78g0060s.f)(e.requestBodyEncoding), requestBodyChars: e.requestBodyChars, ...fe(), ...e.requestBodyEncoding === "gzip" && e.requestBodyGzipLevel !== void 0 && { requestBodyGzipLevel: e.requestBodyGzipLevel }, ..."requestBodyReusedChars" in e && e.requestBodyReusedChars !== void 0 && { requestBodyReusedChars: e.requestBodyReusedChars }, ..."requestBodyComparedWithSdk" in e && e.requestBodyComparedWithSdk !== void 0 && { requestBodyComparedWithSdk: e.requestBodyComparedWithSdk }, ..."gzipBlocks" in e && e.gzipBlocks !== void 0 && { requestBodyGzipBlocksMode: e.gzipBlocks.mode, requestBodyGzipBlocksOutcome: (0, import_chunk_78g0060s.f)(e.gzipBlocks.outcome), ...e.gzipBlocks.planned !== void 0 && { requestBodyGzipBlockCount: e.gzipBlocks.planned.blockCount, requestBodyGzipReusedBlockCount: e.gzipBlocks.planned.reusedBlockCount, requestBodyGzipReusedBytes: e.gzipBlocks.planned.reusedBytes, requestBodyGzipBlocksMs: e.gzipBlocks.planned.spentMs, ...e.gzipBlocks.planned.gzippedBytes !== void 0 && { requestBodyGzippedBytes: e.gzipBlocks.planned.gzippedBytes }, requestBodyGzipStoredBytes: e.gzipBlocks.planned.storedBytes, requestBodyGzipEvictedBlockCount: e.gzipBlocks.planned.evictedForSpaceCount } }, ..."gzipSkipReason" in e && { gzipSkipReason: (0, import_chunk_78g0060s.f)(e.gzipSkipReason) }, ..."gzipFallbackStatus" in e && { gzipFallback: true, gzipFallbackStatus: e.gzipFallbackStatus } };
}
(0, import_chunk_865at33z.IOl)(oUn);
