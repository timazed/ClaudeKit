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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_08bv0y93_exports = {};
__export(chunk_08bv0y93_exports, {
  $Vs: () => $Vs,
  AGr: () => AGr,
  B2l: () => B2l,
  BEa: () => BEa,
  BKe: () => BKe,
  BVs: () => BVs,
  C8t: () => C8t,
  CGr: () => CGr,
  DVs: () => DVs,
  FVs: () => FVs,
  LVs: () => LVs,
  Lve: () => Lve,
  NVs: () => NVs,
  PGr: () => PGr,
  RGr: () => RGr,
  SEn: () => SEn,
  TGr: () => TGr,
  UKe: () => UKe,
  UVs: () => UVs,
  WEa: () => WEa,
  _En: () => _En,
  _Jn: () => _Jn,
  bEn: () => bEn,
  c2o: () => c2o,
  d2o: () => d2o,
  f2o: () => f2o,
  gEn: () => gEn,
  gJn: () => gJn,
  iet: () => iet,
  jEa: () => jEa,
  l2o: () => l2o,
  lue: () => lue,
  m2o: () => m2o,
  p2o: () => p2o,
  set: () => set,
  u2o: () => u2o,
  xGr: () => xGr,
  yEn: () => yEn
});
module.exports = __toCommonJS(chunk_08bv0y93_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_m20gh621 = require("/$bunfs/root/chunk-m20gh621.js");
var import_chunk_bq31aqv6 = require("/$bunfs/root/chunk-bq31aqv6.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_wzzzxdne = require("/$bunfs/root/chunk-wzzzxdne.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_zjhyjv3y = require("/$bunfs/root/chunk-zjhyjv3y.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_zsqk76p8 = require("/$bunfs/root/chunk-zsqk76p8.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_fbqj9ad4 = require("/$bunfs/root/chunk-fbqj9ad4.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_qanr9g0g = require("/$bunfs/root/chunk-qanr9g0g.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_w2hrk3t1 = require("/$bunfs/root/chunk-w2hrk3t1.js");
var import_chunk_xqa844xs = require("/$bunfs/root/chunk-xqa844xs.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_7h77vtaa = require("/$bunfs/root/chunk-7h77vtaa.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_759mf2n7 = require("/$bunfs/root/chunk-759mf2n7.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_zd24r3fj = require("/$bunfs/root/chunk-zd24r3fj.js");
var import_chunk_g5qq9mjy = require("/$bunfs/root/chunk-g5qq9mjy.js");
var import_chunk_z2c6pmpw = require("/$bunfs/root/chunk-z2c6pmpw.js");
var import_chunk_k5r71ad2 = require("/$bunfs/root/chunk-k5r71ad2.js");
var import_chunk_fz3c96rq = require("/$bunfs/root/chunk-fz3c96rq.js");
var import_chunk_qmyc67pd = require("/$bunfs/root/chunk-qmyc67pd.js");
var import_chunk_fkcy40pm = require("/$bunfs/root/chunk-fkcy40pm.js");
var import_chunk_bnrdpyky = require("/$bunfs/root/chunk-bnrdpyky.js");
var import_chunk_p90h0hwy = require("/$bunfs/root/chunk-p90h0hwy.js");
var import_chunk_kb3nnh8q = require("/$bunfs/root/chunk-kb3nnh8q.js");
var import_chunk_2efh61g1 = require("/$bunfs/root/chunk-2efh61g1.js");
var import_chunk_43cax88x = require("/$bunfs/root/chunk-43cax88x.js");
var import_chunk_vcq8ssd5 = require("/$bunfs/root/chunk-vcq8ssd5.js");
var import_chunk_qzhs2fs3 = require("/$bunfs/root/chunk-qzhs2fs3.js");
var import_chunk_be4a2jph = require("/$bunfs/root/chunk-be4a2jph.js");
var import_chunk_4cwth1j2 = require("/$bunfs/root/chunk-4cwth1j2.js");
var import_chunk_thj6vbn4 = require("/$bunfs/root/chunk-thj6vbn4.js");
var import_chunk_anfdrvmv = require("/$bunfs/root/chunk-anfdrvmv.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_yvba4101 = require("/$bunfs/root/chunk-yvba4101.js");
var import_chunk_ve5qgcmh = require("/$bunfs/root/chunk-ve5qgcmh.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_ksk52rm1 = require("/$bunfs/root/chunk-ksk52rm1.js");
var import_chunk_2jnfj492 = require("/$bunfs/root/chunk-2jnfj492.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_587zek71 = require("/$bunfs/root/chunk-587zek71.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_3b9jqhjk = require("/$bunfs/root/chunk-3b9jqhjk.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_xrav2tvh = require("/$bunfs/root/chunk-xrav2tvh.js");
var import_chunk_hym6yzrf = require("/$bunfs/root/chunk-hym6yzrf.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_rwa52046 = require("/$bunfs/root/chunk-rwa52046.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_crypto2 = require("crypto");
var import_crypto3 = require("crypto");
var import_events = require("events");
var import_fs = require("fs");
var import_promises2 = require("fs/promises");
var import_path = require("path");
var import_promises3 = require("fs/promises");
var import_path2 = require("path");
var import_crypto4 = require("crypto");
var import_crypto5 = require("crypto");
var import_crypto6 = require("crypto");
var import_promises4 = require("fs/promises");
var import_path3 = require("path");
var import_crypto7 = require("crypto");
function TGr(e, r) {
  if (e.type !== "result") return e;
  let o = r.subagentStats !== void 0 ? { subagent_stats: r.subagentStats } : {}, y = e.safety_stops !== void 0 ? { safety_stops: Math.max(e.safety_stops, r.safetyStops) } : {};
  if (e.total_cost_usd !== void 0 && r.totalCostUsd < e.total_cost_usd) return { ...e, ...o, ...y };
  return { ...e, total_cost_usd: r.totalCostUsd, duration_api_ms: e.duration_api_ms === 0 ? e.duration_api_ms : r.durationApiMs, modelUsage: r.modelUsage, ...r.usage !== void 0 && { usage: r.usage }, ...o, ...y };
}
function BEa(e) {
  let r = e.toLowerCase().replace(/[^a-z]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 64).replace(/_+$/, "");
  return r === "" ? "custom" : r;
}
function lue({ startedAt: e, common: r, variant: o }) {
  let y = { type: "result", duration_ms: Math.max(0, Math.round(performance.now() - e)), uuid: (0, import_crypto2.randomUUID)() };
  return { ...r, ...o, ...y };
}
class vs {
  chunks = [];
  static encoder = new TextEncoder();
  push(e) {
    if (e.length > 0) this.chunks.push(vs.encoder.encode(e));
  }
  toBuffer() {
    return Buffer.concat(this.chunks);
  }
}
function _En(e, r, o, y) {
  let g = new vs(), k = (E) => {
    if (E.length > 0) g.push((0, import_chunk_w578pjby._)(E).slice(1, -1));
  };
  g.push('{"content":"'), k("{");
  let T = true, R = (E) => {
    if (!T) k(",");
    T = false, k((0, import_chunk_w578pjby._)(E) + ":");
  };
  for (let [E, A] of Object.entries(e)) {
    if (A === void 0) continue;
    if (r.has(E) && Array.isArray(A)) {
      R(E), k("[");
      for (let x = 0; x < A.length; x++) {
        if (x > 0) k(",");
        k((0, import_chunk_w578pjby._)(A[x]));
      }
      k("]");
    } else if (o.has(E) && A !== null && typeof A === "object") {
      R(E), k("{");
      let x = Object.entries(A);
      for (let C = 0; C < x.length; C++) {
        let [O, D] = x[C] ?? ["", void 0];
        if (C > 0) k(",");
        if (k((0, import_chunk_w578pjby._)(O) + ":["), Array.isArray(D)) for (let Y = 0; Y < D.length; Y++) {
          if (Y > 0) k(",");
          k((0, import_chunk_w578pjby._)(D[Y]));
        }
        k("]");
      }
      k("}");
    } else R(E), k((0, import_chunk_w578pjby._)(A));
  }
  k("}"), g.push('"');
  let P = y?.extraOuterFields;
  if (P) for (let [E, A] of Object.entries(P)) g.push(`,${(0, import_chunk_w578pjby._)(E)}:${(0, import_chunk_w578pjby._)(A)}`);
  return g.push("}"), g.toBuffer();
}
(0, import_chunk_adx6804h.B)();
var jr = "Feedback has not been enabled for your organization.", qr = "Feedback containing third-party provider content cannot be submitted.", Kr = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.n)().optional().catch(void 0), message: (0, import_chunk_adx6804h.n)().optional().catch(void 0), details: (0, import_chunk_adx6804h.c)({ error_code: (0, import_chunk_adx6804h.n)().optional().catch(void 0) }).nullish().catch(void 0) }) }));
function Ys(e, r) {
  let o = Kr().safeParse(r), y = o.success ? o.data.error : void 0, g = y?.details?.error_code, k = y?.message, T = (0, import_chunk_cy0ck7w2.Vi)(k);
  if (g === "feedback_retention_blocked" || g === void 0 && e === 403 && y?.type === "permission_error" && k?.includes("Custom data retention settings")) return { success: false, isZdrOrg: true, failureReason: "zdr_org", statusCode: e, refusal: { kind: "org", serverMessage: T } };
  if (g === "feedback_disabled" || g === "feedback_third_party_blocked" || g === void 0 && e === 403 && (k === jr || k === import_chunk_gq1dr8pm.Nmo)) return { success: false, failureReason: "org_refused", statusCode: e, refusal: { kind: "org", serverMessage: T, ...g === "feedback_third_party_blocked" && { thirdParty: true }, ...g === "feedback_third_party_blocked" && k === qr && { reportContent: true } } };
  if (g === "oauth_scope_insufficient" || e === 401) return { success: false, failureReason: g === "oauth_scope_insufficient" ? "scope_refused" : "auth_refused", statusCode: e, refusal: { kind: "credential", serverMessage: T } };
  let R = g === "feedback_check_unavailable" || e === 408 || e === 429 || e >= 500;
  return { success: false, failureReason: "http_error", statusCode: e, refusal: { kind: R ? "transient" : "other", serverMessage: T } };
}
var Wr = "Feedback collection is not available for organizations with custom data retention policies.";
function UKe(e) {
  if (e.isZdrOrg) return Wr;
  if (e.refusal?.kind !== "org") return;
  return e.refusal.serverMessage ?? "Your organization does not accept feedback.";
}
function gJn(e) {
  let r = UKe(e);
  return r === void 0 ? void 0 : (0, import_chunk_gq1dr8pm.jIi)(`Couldn't send feedback: ${r}`, r);
}
function _Jn(e) {
  if (e.refusal?.kind !== "credential") return;
  let r = yEn(e) ?? "";
  return e.failureReason === "scope_refused" ? `Couldn't send feedback: the sign-in this session uses is not allowed to send feedback${r}.` : `Couldn't send feedback: the server did not accept the credentials this session uses${r}.`;
}
function yEn(e) {
  if (!e.statusCode) return;
  let r = e.refusal?.serverMessage?.replace(/\.$/, "");
  return ` (server returned ${e.statusCode}${r === void 0 ? "" : `: ${r}`})`;
}
var Js = { day: 864e5, week: 6048e5 }, Ss = 1048576;
async function Yr({ transcriptPath: e, scope: r = "session", maxRawTranscriptBytes: o, excludeThirdPartyTranscripts: y = false, host: g }, k) {
  let [T, R] = await Promise.all([NVs(e, o, k), Zr(e, r, y, k)]), P = T, E = false;
  if (y && P !== null) if ((0, import_chunk_bzyb60p0.VMe)(P)) P = null, E = true, (0, import_chunk_w578pjby.t)("rawTranscriptJsonl withheld from session history: contains_3p_transcript_markers");
  else P = (0, import_chunk_bzyb60p0.C_t)(P);
  return { rawTranscriptJsonl: P === null ? null : (0, import_chunk_p90h0hwy.GKe)(P, { host: g }).jsonl, recentSessionTranscripts: R.transcripts && (0, import_chunk_khxw3ng0.er)(R.transcripts, (A) => (0, import_chunk_p90h0hwy.GKe)(A, { host: void 0 }).jsonl), thirdPartyExclusions: { rawTranscript: E, recentSessions: R.droppedThirdParty } };
}
async function Zs({ messages: e, backgroundTasks: r = {}, transcripts: o = {}, diskSubagentTranscripts: y, scope: g = "session", maxRawTranscriptBytes: k, excludeThirdPartyTranscripts: T = false, host: R }, P) {
  let E = (0, import_chunk_hsqa3g9e.wh)(), A = (0, import_chunk_t7fzcstv.bt)(), [x, C, O, D] = await Promise.all([y, Yr({ transcriptPath: E, scope: A ? "session" : g, maxRawTranscriptBytes: k, excludeThirdPartyTranscripts: T, host: R }, P), A ? false : (0, import_chunk_w5s307zm.l$)(), A ? "" : (0, import_chunk_w5s307zm.Jqn)()]), Y = (0, import_chunk_hsqa3g9e.WUi)(r, o), ae = { ...x, ...Y }, ge = new Set(Object.keys(Y)), xe = 0;
  if (T) {
    for (let [me, Se] of Object.entries(ae)) if ((0, import_chunk_bzyb60p0.T_t)(Se)) delete ae[me], xe++, (0, import_chunk_w578pjby.t)(`subagent transcript ${me} withheld: contains_3p_transcript_markers`);
  }
  let le = (0, import_chunk_khxw3ng0.er)(ae, (me) => (0, import_chunk_p90h0hwy.P_e)(me, { host: R })), re = (0, import_chunk_bzyb60p0.xW)(e);
  return { transcriptPath: E, rawTranscriptJsonl: C.rawTranscriptJsonl, recentSessionTranscripts: C.recentSessionTranscripts, subagentTranscripts: le, teammateIds: ge, isGit: O, commitSha: D || null, remoteWorkspace: A, remoteSessionId: A ? (0, import_chunk_t7fzcstv.br)()?.sessionId ?? null : null, workingDirectory: (0, import_chunk_f9x2f6cx.Te)(), platform: import_chunk_c203g5kd.s.platform, terminal: import_chunk_c203g5kd.s.terminal, version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, latestAssistantMessageId: re?.requestId ?? null, latestAssistantAPIMessageId: re?.message.id ?? null, thirdPartyExclusions: { ...C.thirdPartyExclusions, subagents: xe } };
}
async function NVs(e, r, o) {
  if (r === void 0) return null;
  if (o !== void 0) {
    let y = (0, import_chunk_bzyb60p0.lli)(e);
    if (y !== void 0) return Jr(o, y, r);
  }
  try {
    let { content: y, bytesRead: g, bytesTotal: k } = await (0, import_chunk_w578pjby.LB)(e, r), T = y;
    if (g < k) {
      let R = y.indexOf(`
`);
      T = R >= 0 ? y.slice(R + 1) : "";
    }
    return T.trim().length > 0 ? T : null;
  } catch {
    return null;
  }
}
async function Jr(e, r, o) {
  let y = await e.readRecords(r, { order: "backward", maxBytes: o });
  if (!y.ok) return null;
  let g = y.value.items, k = g.reduce((P, E) => P + E.data.byteLength, 0), T = g.length;
  if (y.value.nextSeq !== void 0 || k > o) {
    T = 0;
    let P = 0;
    for (let E of g) {
      if (P += E.data.byteLength, P >= o) break;
      T += 1;
    }
  }
  let R = Buffer.concat(g.slice(0, T).reverse().map((P) => P.data)).toString("utf8");
  return R.trim().length > 0 ? R : null;
}
async function Zr(e, r, o, y) {
  if (r === "session") return { transcripts: void 0, droppedThirdParty: 0 };
  if (y !== void 0) {
    let C = (0, import_chunk_bzyb60p0.lli)(e);
    if (C !== void 0) return Xr(y, C, r, o);
  }
  let g = (0, import_path2.dirname)(e), k = (0, import_path2.basename)(e), T = Date.now() - Js[r], R;
  try {
    R = await (0, import_promises3.readdir)(g);
  } catch {
    return { transcripts: void 0, droppedThirdParty: 0 };
  }
  let P = [];
  await Promise.all(R.filter((C) => C.endsWith(".jsonl") && C !== k).map(async (C) => {
    let O = (0, import_path2.join)(g, C);
    try {
      let D = await (0, import_promises3.stat)(O);
      if (D.isFile() && D.mtimeMs >= T) P.push({ path: O, sessionId: C.slice(0, -6), mtimeMs: D.mtimeMs, size: D.size });
    } catch {
    }
  })), P.sort((C, O) => O.mtimeMs - C.mtimeMs);
  let E = {}, A = 0, x = 0;
  for (let C of P) {
    if (C.size === 0 || A + C.size > Ss) continue;
    try {
      let { content: O, bytesRead: D, bytesTotal: Y } = await (0, import_chunk_w578pjby.LB)(C.path, Ss);
      if (!O || D < Y) continue;
      if (o && (0, import_chunk_bzyb60p0.VMe)(O)) {
        x++, (0, import_chunk_w578pjby.t)(`recent session ${C.sessionId} withheld: contains_3p_transcript_markers`);
        continue;
      }
      if (o && !(0, import_chunk_bzyb60p0.kdr)(O.split(`
`))) {
        (0, import_chunk_w578pjby.t)(`recent session ${C.sessionId} withheld: not_recorded_by_current_account`);
        continue;
      }
      E[C.sessionId] = o ? (0, import_chunk_bzyb60p0.C_t)(O) : O, A += C.size;
    } catch {
    }
  }
  return { transcripts: Object.keys(E).length > 0 ? E : void 0, droppedThirdParty: x };
}
async function Xr(e, r, o, y) {
  let g = Date.now() - Js[o], k = [], T = 0, R = await (0, import_chunk_hnt4bwpe.Nd)((x) => e.listEntries({ namespace: "transcript", projectKey: r.projectKey }, { skipScopeStats: true, ...x !== void 0 && { cursor: x } }), (x) => {
    T++;
    for (let C of x) {
      if (C.kind !== "key" || C.key.namespace !== "transcript") continue;
      if (C.key.agentId !== void 0 || C.key.journal === true) continue;
      if (C.key.projectKey !== r.projectKey) continue;
      if (C.key.sessionId === r.sessionId) continue;
      if (!(0, import_chunk_hkvzj051.Ao)(C.key.sessionId) || (0, import_chunk_fp3vnecp.db)(C.key) !== void 0) continue;
      if ((C.mtimeMs ?? 0) >= g) k.push({ key: C.key, sessionId: C.key.sessionId, mtimeMs: C.mtimeMs ?? 0, size: C.size ?? 0 });
    }
  });
  if (R.status === "error" && T === 0) return { transcripts: void 0, droppedThirdParty: 0 };
  if (R.status === "capped") (0, import_chunk_w578pjby.t)(`recent sessions: listing cut short after ${import_chunk_hnt4bwpe.pS} pages; keeping what was listed`);
  k.sort((x, C) => C.mtimeMs - x.mtimeMs);
  let P = {}, E = 0, A = 0;
  for (let x of k) {
    if (x.size === 0 || E + x.size > Ss) continue;
    let C = await e.read([{ key: x.key, tail: Ss }]);
    if (!C.ok) continue;
    let O = C.value.items[0];
    if (!O.found || O.value.byteLength === 0 || O.value.byteLength < O.totalBytes) continue;
    let D = Buffer.from(O.value).toString("utf8");
    if (y && (0, import_chunk_bzyb60p0.VMe)(D)) {
      A++, (0, import_chunk_w578pjby.t)(`recent session ${x.sessionId} withheld: contains_3p_transcript_markers`);
      continue;
    }
    if (y && !(0, import_chunk_bzyb60p0.kdr)(D.split(`
`))) {
      (0, import_chunk_w578pjby.t)(`recent session ${x.sessionId} withheld: not_recorded_by_current_account`);
      continue;
    }
    P[x.sessionId] = y ? (0, import_chunk_bzyb60p0.C_t)(D) : D, E += x.size;
  }
  return { transcripts: Object.keys(P).length > 0 ? P : void 0, droppedThirdParty: A };
}
var tr = "https://github.com/anthropics/claude-code/issues", FVs = "/feedback cannot send a report: this conversation or this Claude Code process ran under an organization sign-in (not a claude.ai login), or Claude Code could not check that. In the terminal, /feedback saves the report in a local file.", un = "tengu_humming_wave", sr = { bedrock: "Amazon Bedrock", vertex: "Vertex AI", foundry: "Microsoft Foundry", anthropicAws: "Claude Platform on AWS", anthropicGoogleCloud: "Claude Platform on Google Cloud", mantle: "Amazon Bedrock (Mantle)", gateway: "an API gateway" };
function Lve(e = "/feedback") {
  let r = (0, import_chunk_gq1dr8pm.JQ)(e);
  if (r !== null) return rr(e) && true && (0, import_chunk_gq1dr8pm.bbe)() ? { kind: "bundle", cause: "share_switch" } : { kind: "disabled", reason: r };
  if ((0, import_chunk_vcq8ssd5.Bte)()) return { kind: "bundle", cause: "hybrid_organization" };
  let o = (0, import_chunk_zhr7rpv7.ve)();
  if (o !== "firstParty") return { kind: "bundle", cause: "provider", label: sr[o] };
  let y = (0, import_chunk_4cwth1j2.O5r)();
  if (y !== null) return { kind: "bundle", cause: y, label: y === "gateway" ? sr.gateway : "no Anthropic credentials" };
  if (rr(e)) return { kind: "bundle", cause: "share_switch" };
  return { kind: "post" };
}
function rr(e) {
  return e === "/share" && (Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_SHARE_BUNDLE) || (0, import_chunk_865at33z.X_)()?.[un] === true);
}
var Us = /* @__PURE__ */ new Set(["transcript"]), Os = /* @__PURE__ */ new Set(["subagentTranscripts"]), SEn = 4194304, dn = 2097152, BKe = 8388608, ln = 2097152, mn = ["model", "system", "tools", "tool_choice", "betas", "max_tokens", "thinking", "temperature", "context_management", "output_config"];
function $Vs(e) {
  let r = {};
  for (let o of mn) if (e[o] !== void 0) Object.assign(r, { [o]: e[o] });
  return r;
}
function AGr(e) {
  return _En(e, Us, Os).length;
}
function WEa() {
  let e = Lve();
  if (e.kind === "disabled" && !(0, import_chunk_gq1dr8pm.Tcl)()) return;
  return { kind: e.kind };
}
async function c2o({ messages: e, description: r, surface: o, storageV5: y, host: g }) {
  let k = Lve();
  if (k.kind === "disabled" && !(0, import_chunk_gq1dr8pm.bbe)()) return { feedback_id: null, unavailable_reason: k.reason };
  let T = await m2o({ messages: e, description: r, surface: o, storageV5: y, host: g });
  if (!T.success) return { feedback_id: null, failure_reason: "bundle_write_failed" };
  return { feedback_id: T.bundleId, bundle_path: T.zipPath };
}
function set() {
  let e = Lve();
  switch (e.kind) {
    case "post":
    case "share":
      return null;
    case "disabled":
      return e.reason;
    case "bundle":
      switch (e.cause) {
        case "no_creds":
          return `/feedback requires Anthropic credentials (OAuth or API key). Report issues at ${tr}`;
        case "provider":
        case "gateway":
          return `/feedback is not available when using ${e.label}. Report issues at ${tr}`;
        case "hybrid_organization":
          return FVs;
        case "share_switch":
          return null;
      }
  }
}
function cn() {
  return (0, import_chunk_k449cc64._1e)().map((e) => {
    let r = { ...e };
    if (r && typeof r.error === "string") r.error = (0, import_chunk_sah8dzn4.As)(r.error);
    return r;
  });
}
function pn(e, r, o) {
  if (!e) return [];
  let y = e.split(`
`), g = [], k = [], T = /* @__PURE__ */ new Set(), R = -1;
  for (let x of y) {
    if (!x) continue;
    let C;
    try {
      C = (0, import_chunk_w578pjby.te)(x);
    } catch {
      continue;
    }
    if (typeof C !== "object" || C === null) continue;
    if (C.type === "system" && C.subtype === "compact_boundary") {
      R = g.length;
      continue;
    }
    if (C.type !== "user" && C.type !== "assistant") continue;
    if (typeof C.uuid !== "string" || typeof C.timestamp !== "string" || C.isSidechain === true || !C.message) continue;
    if (o.has(C.uuid) || T.has(C.uuid)) continue;
    T.add(C.uuid), g.push(C.type === "user" ? { type: "user", uuid: C.uuid, timestamp: C.timestamp, message: C.message, ...C.isMeta === true && { isMeta: true }, ...C.toolUseResult !== void 0 && { toolUseResult: C.toolUseResult }, ...C.isCompactSummary === true && { isCompactSummary: true }, ...C.repeatsCompactSummary === true && { repeatsCompactSummary: true } } : { type: "assistant", uuid: C.uuid, timestamp: C.timestamp, message: C.message, requestId: C.requestId }), k.push(Buffer.byteLength(x));
  }
  if (R <= 0) return [];
  let { start: P, oversized: E } = u2o(k, r, R), A = g.slice(P, R);
  return E.size === 0 ? A : A.filter((x, C) => !E.has(P + C));
}
function u2o(e, r, o = e.length) {
  let y = 0, g = o, k = /* @__PURE__ */ new Set();
  while (g > 0) {
    let T = e[g - 1];
    if (T === void 0) break;
    if (T > r) {
      k.add(g - 1), g--;
      continue;
    }
    if (y + T > r) break;
    y += T, g--;
  }
  return { start: g, keptBytes: y, oversized: k };
}
function gn(e, r) {
  let o;
  for (let R of e) {
    if (R.type === "user" && R.isCompactSummary === true) continue;
    if (o === void 0 || R.timestamp < o) o = R.timestamp;
  }
  let y = [], g = [];
  for (let R of r) if (o === void 0 || R.timestamp < o) y.push(R);
  else g.push(R);
  if (g.length === 0) return [...y, ...e];
  let k = e.findLastIndex((R) => R.type === "user" && R.isCompactSummary === true), T = k === -1 ? e.length : k;
  return [...y, ...e.slice(0, T), ...g, ...e.slice(T)];
}
async function _n() {
  let e = (0, import_chunk_w578pjby.j8)();
  if (!e) return null;
  try {
    await (0, import_chunk_w578pjby._Qe)();
    let { content: r, bytesRead: o, bytesTotal: y } = await (0, import_chunk_w578pjby.LB)(e, dn), g = r;
    if (o < y) g = g.slice(g.indexOf(`
`) + 1), g = `[debug log truncated to last ${o} of ${y} bytes]
${g}`;
    return (0, import_chunk_sah8dzn4.As)(g);
  } catch {
    return null;
  }
}
async function dr({ messages: e, description: r, surface: o, scope: y = "session", backgroundTasks: g = {}, transcripts: k = {}, surveyFeedbackSource: T, excludeThirdPartyTranscripts: R, storageV5: P, host: E }) {
  let [A, x] = await Promise.all([Zs({ messages: e, backgroundTasks: g, transcripts: k, diskSubagentTranscripts: (0, import_chunk_bzyb60p0.ogi)(P), scope: y, maxRawTranscriptBytes: SEn, excludeThirdPartyTranscripts: R, host: E }), _n()]), C = (0, import_chunk_865at33z.nPe)(e) === -1 ? [] : (0, import_chunk_p90h0hwy.P_e)(pn(A.rawTranscriptJsonl, ln, new Set(e.map((me) => me.uuid))), { host: E }), O = (0, import_chunk_p90h0hwy.P_e)(e, { host: E }), D = e.length - O.length, Y = (0, import_chunk_bzyb60p0.tv)(O), ae = C.length === 0 ? Y : gn(Y, C), ge = (0, import_chunk_f9x2f6cx.BNr)(), xe = (0, import_chunk_3t7ve0wy.GM)(), le = { latestAssistantMessageId: A.latestAssistantMessageId, latestAssistantAPIMessageId: A.latestAssistantAPIMessageId, lastInterruptedAssistantAPIMessageId: (0, import_chunk_f9x2f6cx.ypt)(), message_count: e.length, datetime: (/* @__PURE__ */ new Date()).toISOString(), description: r, surface: o, scope: A.remoteWorkspace ? "session" : y, platform: A.platform, gitRepo: A.isGit, commitSha: A.commitSha, ...A.remoteWorkspace && { remoteWorkspace: true }, ...A.remoteSessionId && { remoteSessionId: A.remoteSessionId }, terminal: A.terminal, version: A.version, ...false, ...(0, import_chunk_r3kja8v6.Voe)() ? { replMode: true } : {}, transcript: ae, errors: cn(), lastApiRequest: ge ? $Vs(ge) : null, ...Object.keys(A.subagentTranscripts).length > 0 && { subagentTranscripts: A.subagentTranscripts }, ...A.rawTranscriptJsonl && { rawTranscriptJsonl: A.rawTranscriptJsonl }, ...A.recentSessionTranscripts && { recentSessionTranscripts: A.recentSessionTranscripts }, ...x && { debugLog: x }, ...T && { survey_appearance_id: T.appearanceId, survey_response: T.response, survey_type: T.surveyType } }, re = A.thirdPartyExclusions.recentSessions + A.thirdPartyExclusions.subagents + (A.thirdPartyExclusions.rawTranscript ? 1 : 0);
  if (C.length > 0) {
    if (AGr(le) > BKe) return (0, import_chunk_cqa9hrgx.l)("feedback_precompact", "over_payload_cap"), { payload: { ...le, transcript: Y }, thirdPartyDroppedCount: re, laptopMemoryDroppedCount: D };
    (0, import_chunk_cqa9hrgx.u)("feedback_precompact");
  } else if ((0, import_chunk_865at33z.nPe)(e) !== -1 && !A.thirdPartyExclusions.rawTranscript) (0, import_chunk_cqa9hrgx.l)("feedback_precompact", "empty_recovery");
  return { payload: le, thirdPartyDroppedCount: re, laptopMemoryDroppedCount: D };
}
function Ds(e) {
  if (e instanceof Error) {
    let r = Error((0, import_chunk_sah8dzn4.As)(e.message));
    if (e.stack) r.stack = (0, import_chunk_sah8dzn4.As)(e.stack);
    (0, import_chunk_k449cc64.i)(r);
  } else {
    let r = (0, import_chunk_sah8dzn4.As)(String(e));
    (0, import_chunk_k449cc64.i)(Error(r));
  }
}
function bn(e, r) {
  if (!e || r === null) return;
  let o = e.split(`
`);
  for (let y = o.length - 1; y >= 0; y--) {
    let g = o[y];
    if (!g) continue;
    let k;
    try {
      k = (0, import_chunk_w578pjby.te)(g);
    } catch {
      continue;
    }
    if (typeof k !== "object" || k === null || k.type !== "assistant" || k.message.id !== r) continue;
    let T = (0, import_chunk_zsqk76p8.CFt)(k);
    return T !== void 0 && (0, import_chunk_q3a5dy2r.vct)(T) ? T : void 0;
  }
  return;
}
function nr(e) {
  let r = e?.["request-id"];
  return (0, import_chunk_rwa52046.yO)(r) ? r : void 0;
}
async function bEn(e, r, o, y) {
  if ((0, import_chunk_k449cc64.wt)()) return { success: false };
  if (!(0, import_chunk_2nv4wrez.Rn)("allow_product_feedback")) return { success: false, failureReason: "policy_blocked" };
  let g = (0, import_chunk_2nv4wrez.clt)();
  try {
    let k = _En(e, Us, Os, o === void 0 ? void 0 : { extraOuterFields: { session_id: o } });
    if (k.length > BKe) return { success: false, payloadTooLarge: true, failureReason: "payload_too_large_precheck" };
    let T = await (0, import_chunk_865at33z.jx)(() => import_chunk_865at33z.zt.post("/api/claude_cli_feedback", k, { headers: { "Content-Type": "application/json" }, timeout: 3e4, signal: r, credentials: y, validateStatus: (E) => E !== 401 }), { gateToSessionOAuthCredential: true, credentials: y });
    if (!T.ok) switch (T.reason) {
      case "essential-traffic-only":
        return { success: false };
      case "data-residency":
        return { success: false, failureReason: "data_residency" };
      case "no-auth":
        return { success: false, failureReason: "auth_error" };
    }
    if (T.status === 200 && T.data?.feedback_id) return { success: true, feedbackId: T.data.feedback_id };
    let R = nr(T.response.headers);
    if (T.status === 200) return Ds(Error("Failed to submit feedback: request did not return feedback_id")), { success: false, failureReason: "missing_feedback_id", requestId: R };
    if (T.status === 413) return { success: false, payloadTooLarge: true, failureReason: "payload_too_large_413", statusCode: 413, requestId: R };
    let P = "Failed to submit feedback:" + T.status;
    if (T.status === 401 || T.status === 403 || T.status === 429) (0, import_chunk_w578pjby.t)(P);
    else Ds(Error(P));
    return { ...RGr(T.status, T.data, g), requestId: R };
  } catch (k) {
    if ((0, import_chunk_3jjr3wje.wd)(k)) return { success: false };
    if (k instanceof RangeError) return { success: false, payloadTooLarge: true, failureReason: "payload_too_large_range_error" };
    if ((0, import_chunk_jv7av99m.M_)(k)) (0, import_chunk_w578pjby.t)((0, import_chunk_sah8dzn4.As)((0, import_chunk_jv7av99m.d)(k)));
    else Ds(k);
    if ((0, import_chunk_3jjr3wje.fd)(k) && k.response) return { ...RGr(k.response.status, k.response.data, g), requestId: nr(k.response.headers) };
    return { success: false, failureReason: (0, import_chunk_3jjr3wje.fd)(k) && k.code === "ECONNABORTED" ? "timeout" : "network_error" };
  }
}
function RGr(e, r, o) {
  let y = Ys(e, r);
  if (y.refusal?.kind === "org" && !y.refusal.thirdParty && y.refusal.serverMessage !== import_chunk_gq1dr8pm.Nmo) (0, import_chunk_2efh61g1.n6r)(o);
  return y;
}
function f2o() {
  let e = (0, import_chunk_gq1dr8pm.mU)() && (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && (0, import_chunk_4cwth1j2.O5r)() === null;
  if (e) (0, import_chunk_aw5nczax.tq)();
  return e;
}
var hn = /* @__PURE__ */ new Set(["latestAssistantMessageId", "latestAssistantAPIMessageId", "lastInterruptedAssistantAPIMessageId", "message_count", "datetime", "description", "surface", "platform", "gitRepo", "commitSha", "remoteWorkspace", "remoteSessionId", "version", "hostEnvironment", "replMode", "transcript", "subagentTranscripts", "rawTranscriptJsonl", "recentSessionTranscripts", "debugLog"]);
async function p2o({ description: e, messages: r, lastInterruptedAssistantAPIMessageId: o, fields: y, maxDescriptionChars: g, signal: k, credentials: T }) {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return { success: false, failureReason: "not_first_party" };
  let R = (0, import_chunk_bzyb60p0.xW)(r), P = (0, import_chunk_sah8dzn4.As)(e), E = { latestAssistantMessageId: R?.requestId ?? null, latestAssistantAPIMessageId: R?.message.id ?? null, lastInterruptedAssistantAPIMessageId: o, message_count: r.length, datetime: (/* @__PURE__ */ new Date()).toISOString(), description: g === void 0 ? P : (0, import_chunk_7cfjrnwy.ee)(P, g), surface: "cli", platform: import_chunk_c203g5kd.s.platform, gitRepo: false, commitSha: null, version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, transcript: [], ...(0, import_chunk_xcgcdx61.mi)(y, (A, x) => hn.has(x)) };
  return bEn(E, k, void 0, T);
}
async function jEa({ description: e, appearanceId: r, surveyResponse: o, surveyType: y, messages: g, lastInterruptedAssistantAPIMessageId: k, credentials: T }) {
  let R = await p2o({ description: e, messages: g, lastInterruptedAssistantAPIMessageId: k, fields: { survey_followup: true, survey_appearance_id: r, survey_response: o, survey_type: y }, credentials: T });
  if (R.success) (0, import_chunk_cqa9hrgx.u)("feedback_survey_followup");
  else (0, import_chunk_cqa9hrgx.m)("feedback_survey_followup", R.failureReason ?? "unknown");
  return R;
}
function or(e, r) {
  return !e.success && e.failureReason === "timeout" && AGr(r) > BKe / 8;
}
async function iet({ messages: e, description: r, surface: o, scope: y = "session", backgroundTasks: g, transcripts: k, signal: T, surveyFeedbackSource: R, storageV5: P, credentials: E, host: A }) {
  await (0, import_chunk_aw5nczax.tq)();
  let { payload: x, thirdPartyDroppedCount: C, laptopMemoryDroppedCount: O } = await dr({ messages: e, description: r, surface: o, scope: y, backgroundTasks: g, transcripts: k, surveyFeedbackSource: R, excludeThirdPartyTranscripts: true, storageV5: P, host: A }), D = x.latestAssistantMessageId, Y = bn(x.rawTranscriptJsonl, x.latestAssistantAPIMessageId), ae = await bEn(x, T, Y, E), { transcript: ge, subagentTranscripts: xe, lastApiRequest: le, recentSessionTranscripts: re, rawTranscriptJsonl: me, debugLog: Se, ...qe } = x, we = { ...qe, transcript: [] }, ce = ae, Le = 0;
  if (!ce.success && ce.payloadTooLarge) {
    Le = 1;
    let Ge = { ...qe, transcript: [], ...me && { rawTranscriptJsonl: me }, ...Se && { debugLog: Se } };
    if (ce = await bEn(Ge, T, Y, E), !ce.success && ce.payloadTooLarge || or(ce, Ge)) Le = 2, ce = await bEn(we, T, Y, E);
  } else if (or(ce, x)) Le = 2, ce = await bEn(we, T, Y, E);
  if (ce.success) {
    (0, import_chunk_y53wbr8a.a)("tengu_bug_report_submitted", { surface: (0, import_chunk_78g0060s.f)(o), remote_workspace: (0, import_chunk_78g0060s.S)(x.remoteWorkspace ? "true" : "false"), retried_after_too_large: !ae.success && ae.payloadTooLarge === true, strip_level: (0, import_chunk_78g0060s.Gs)(Le), third_party_transcripts_dropped: (0, import_chunk_78g0060s.Gs)(C), laptop_memory_rows_dropped: (0, import_chunk_78g0060s.Gs)(O), feedback_id: (0, import_chunk_49zxha55.Ce)(ce.feedbackId), last_assistant_message_id: (0, import_chunk_49zxha55.Ce)(D), last_assistant_api_message_id: (0, import_chunk_49zxha55.Ce)(x.latestAssistantAPIMessageId), last_interrupted_assistant_api_message_id: (0, import_chunk_49zxha55.Ce)(x.lastInterruptedAssistantAPIMessageId), ...R && { survey_appearance_id: (0, import_chunk_49zxha55.Ce)(R.appearanceId), survey_response: (0, import_chunk_78g0060s.f)(R.response), survey_type: (0, import_chunk_78g0060s.f)(R.surveyType) } }), (0, import_chunk_865at33z.zzn)("tengu_bug_report_description", { feedback_id: (0, import_chunk_49zxha55.Ce)(ce.feedbackId), descriptionLength: r.length });
    let Ge = !ae.success && ae.payloadTooLarge === true;
    if (Le > 0) (0, import_chunk_cqa9hrgx.l)("feedback_submit", "payload_stripped");
    else (0, import_chunk_cqa9hrgx.u)("feedback_submit");
    return { success: true, feedbackId: ce.feedbackId, retriedAfterTooLarge: Ge };
  }
  if (ce.failureReason) (0, import_chunk_cqa9hrgx.m)("feedback_submit", ce.failureReason), (0, import_chunk_y53wbr8a.a)("tengu_bug_report_failed", { surface: (0, import_chunk_78g0060s.f)(o), remote_workspace: (0, import_chunk_78g0060s.S)(x.remoteWorkspace ? "true" : "false"), reason: (0, import_chunk_78g0060s.f)(ce.failureReason), status_code: (0, import_chunk_78g0060s.ove)(ce.statusCode) ?? (0, import_chunk_78g0060s.S)(""), first_attempt_too_large: !ae.success && ae.payloadTooLarge === true });
  return { success: false, isZdrOrg: ce.isZdrOrg, failureReason: ce.failureReason, statusCode: ce.statusCode, refusal: ce.refusal };
}
var ir = { success: false, error: "Cancelled" }, Sn = 262144, Tn = 3758096384;
async function UVs(e, r = "feedback.json", o, y) {
  if (o?.aborted) return ir;
  let T = `cc-${(/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").replace("T", "-").slice(0, 15)}-${(0, import_crypto3.randomBytes)(3).toString("hex")}`, R = (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "feedback-bundles"), P = (0, import_path.join)(R, `${T}.zip`);
  try {
    await (0, import_promises2.mkdir)(R, { recursive: true, mode: 448 });
    let { Zip: E, ZipDeflate: A } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-zvmbp0fh.js"))), x = (0, import_fs.createWriteStream)(P, { mode: 384 }), C;
    if (await new Promise((O, D) => {
      let Y = false, ae = (re) => {
        Y = true, x.destroy(), D(re);
      };
      x.on("error", ae);
      let ge = new E((re, me, Se) => {
        if (re) return ae(re);
        if (x.write(me), Se) x.end((qe) => qe ? ae(qe) : O());
      }), xe = new A(r);
      if (ge.add(xe), xe.push(e, true), y === void 0) {
        ge.end();
        return;
      }
      let le = Pn(y.path, y.inPlay, (re) => {
        C = re;
      });
      (async () => {
        try {
          let re;
          for await (let me of le) {
            if (Y || o?.aborted) break;
            if (re === void 0) re = new A("transcript.jsonl"), ge.add(re);
            if (re.push(me, false), x.writableNeedDrain) await (0, import_events.once)(x, "drain");
          }
          if (Y) return;
          re?.push(new Uint8Array(0), true), ge.end();
        } catch (re) {
          ae(re);
        }
      })();
    }), o?.aborted) return await (0, import_chunk_q7qjcthc.ZR)(() => (0, import_promises2.unlink)(P)).catch(() => {
    }), ir;
    if (C === void 0) (0, import_chunk_cqa9hrgx.u)("feedback_bundle");
    else (0, import_chunk_cqa9hrgx.l)("feedback_bundle", C);
    return { success: true, bundleId: T, zipPath: P, ...C !== void 0 && { transcriptProblem: C } };
  } catch (E) {
    return await (0, import_promises2.rm)(P, { force: true }).catch(() => {
    }), (0, import_chunk_k449cc64.i)(E), (0, import_chunk_cqa9hrgx.m)("feedback_bundle", "write_failed"), { success: false, error: (0, import_chunk_jv7av99m.d)(E) };
  }
}
var ar = /* @__PURE__ */ new Set(["type", "description", "title"]);
function ur(e) {
  return typeof e === "string" || e !== null && typeof e === "object" ? "[REDACTED]" : e;
}
var wn = /(?<![0-9a-f])[0-9a-f]{64}(?![0-9a-f])/g;
function Ts(e, r) {
  return r.includes("api-request") ? e.replace(wn, "[REDACTED]") : e;
}
function ws(e, r = "data") {
  if (typeof e === "string") return Ts((0, import_chunk_sah8dzn4.As)(e), e);
  if (Array.isArray(e)) return e.map((g) => ws(g));
  if (e === null || typeof e !== "object") return e;
  let o = "type" in e && e.type === "object", y = /* @__PURE__ */ Object.create(null);
  for (let [g, k] of Object.entries(e)) {
    let T = k !== null && typeof k === "object" && !Array.isArray(k), R = false, P = "data";
    if (r === "credentialProperty") if (T && (g === "items" || g === "properties" && o)) P = g === "items" ? "credentialProperty" : "credentialPropertyNames";
    else if (ar.has(g) && Array.isArray(k)) {
      y[(0, import_chunk_sah8dzn4.As)(g)] = k.map((E) => typeof E === "string" ? (0, import_chunk_sah8dzn4.As)(E) : ur(E));
      continue;
    } else R = !ar.has(g) || T;
    else if (r === "credentialPropertyNames") R = !T, P = "credentialProperty";
    else if (r === "propertyNames" && T) P = (0, import_chunk_sah8dzn4.NLr)({ [g]: "" })[g] === "[REDACTED]" ? "credentialProperty" : "data";
    else if (g === "properties" && T && o) P = "propertyNames";
    else R = (0, import_chunk_sah8dzn4.NLr)({ [g]: "" })[g] === "[REDACTED]";
    if (R) y[(0, import_chunk_sah8dzn4.As)(g)] = ur(k);
    else if (typeof k === "string") y[(0, import_chunk_sah8dzn4.As)(g)] = Ts((0, import_chunk_sah8dzn4.csa)(g, k), k);
    else y[(0, import_chunk_sah8dzn4.As)(g)] = ws(k, P);
  }
  return y;
}
function xGr(e) {
  return ws(e);
}
function Cn(e) {
  return e.split(`
`).map((r) => {
    if (!r) return r;
    let o = (0, import_chunk_0jve1fep.et)(r, false);
    if (o === null) return Ts((0, import_chunk_sah8dzn4.As)(r), r);
    try {
      return (0, import_chunk_w578pjby._)(ws(o));
    } catch {
      return Ts((0, import_chunk_sah8dzn4.As)(r), r);
    }
  }).join(`
`);
}
async function* Pn(e, r, o, y = Tn) {
  let g = (0, import_chunk_w578pjby.LLr)(e), k, T = [], R = 0, P = 0;
  try {
    for (; ; ) {
      let A = await g.next().catch((C) => {
        k = { error: C };
        return;
      }), x = A === void 0 || A.done === true;
      if (A !== void 0 && A.done !== true) T.push(A.value.toString("utf8")), R += A.value.byteLength;
      if (x ? T.length > 0 : R >= Sn) {
        let C = PGr((0, import_chunk_p90h0hwy.GKe)(T.join(`
`), r).jsonl), O = Buffer.from(C === "" ? "" : `${C}
`);
        if (P + O.byteLength > y) {
          o("transcript_over_zip_limit");
          return;
        }
        yield O, P += O.byteLength, T = [], R = 0;
      }
      if (x) break;
    }
  } catch (A) {
    (0, import_chunk_k449cc64.i)(A), o("transcript_incomplete");
    return;
  } finally {
    await g.return();
  }
  if (k === void 0) return;
  let { error: E } = k;
  if ((0, import_chunk_jv7av99m.kn)(E)) {
    o("transcript_missing");
    return;
  }
  if ((0, import_chunk_jv7av99m.fn)(E) || (0, import_chunk_jv7av99m.Kz)(E)) (0, import_chunk_w578pjby.t)(`Feedback bundle: session transcript unreadable (${(0, import_chunk_jv7av99m.w)(E)})`, { level: "error" });
  else (0, import_chunk_k449cc64.i)(E);
  o("transcript_incomplete");
}
function PGr(e) {
  return Cn((0, import_chunk_bzyb60p0.C_t)(e));
}
async function m2o({ messages: e, description: r, surface: o, scope: y = "session", backgroundTasks: g, transcripts: k, signal: T, surveyFeedbackSource: R, wholeTranscript: P = false, storageV5: E, host: A }) {
  let x, C;
  try {
    if (P) {
      let re = (0, import_chunk_bzyb60p0.Bc)();
      C = { path: re !== null && (0, import_chunk_bzyb60p0.BHe)((0, import_chunk_f9x2f6cx.W)(), re) ? re : (0, import_chunk_hsqa3g9e.wh)(), inPlay: { host: A } };
    }
    let { payload: O } = await dr({ messages: e, description: r, surface: o, scope: y, backgroundTasks: g, transcripts: k, surveyFeedbackSource: R, excludeThirdPartyTranscripts: false, storageV5: E, host: A }), { rawTranscriptJsonl: D, recentSessionTranscripts: Y, transcript: ae, subagentTranscripts: ge, ...xe } = O, le = { ...(0, import_chunk_sah8dzn4.yJ)(xe), transcript: xGr(ae), ...ge !== void 0 && { subagentTranscripts: (0, import_chunk_khxw3ng0.er)(ge, xGr) }, ...D !== void 0 && { rawTranscriptJsonl: PGr(D) }, ...Y !== void 0 && { recentSessionTranscripts: (0, import_chunk_khxw3ng0.er)(Y, PGr) } };
    x = _En(le, Us, Os);
  } catch (O) {
    return (0, import_chunk_k449cc64.i)(O), (0, import_chunk_cqa9hrgx.m)("feedback_bundle", "write_failed"), { success: false, error: (0, import_chunk_jv7av99m.d)(O) };
  }
  return UVs(x, void 0, T, C);
}
function lr(e) {
  return { commands: e.commands ?? [], agents: e.agents ?? [], output_style: e.outputStyle ?? "default", available_output_styles: e.availableOutputStyles ?? ["default"], models: e.models ?? [], ...e.unavailableModels && e.unavailableModels.length > 0 && { unavailable_models: e.unavailableModels }, account: e.account ?? { apiProvider: "firstParty" }, pid: e.pid ?? process.pid, claude_code_version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION };
}
function mr(e) {
  if (e.length === 0) return;
  return { type: "system", subtype: "memory_recall", mode: "select", memories: e.map((r) => ({ path: r.path, scope: (0, import_chunk_bzyb60p0.t2a)(r.path) ?? "personal" })), uuid: (0, import_crypto4.randomUUID)(), session_id: (0, import_chunk_f9x2f6cx.W)() };
}
function DVs(e, r, o) {
  let y = !o && (0, import_chunk_fkcy40pm.b$e)(e) === void 0;
  return (0, import_chunk_865at33z.$u)(r) && y;
}
var l2o = (e) => (0, import_chunk_sjqze7qg.Of)(() => {
  let { uuid: r, origin: o, isHidden: y, isStopped: g, input: k } = e, T = import_chunk_bzyb60p0.Oie.get()?.sentBefore, R = r !== void 0 && T?.has(r) === true, P = !e.isRelayed && e.foreignWord === void 0 && !R && DVs(k, o, y), E = e.ownWordUuids?.some((C) => C !== void 0 && T?.has(C) !== true) ?? P, A = import_chunk_bzyb60p0.Oie.get()?.session.deref();
  if (A !== void 0 && A === (0, import_chunk_bzyb60p0.Uc)() && !g && E) (0, import_chunk_bzyb60p0.uXo)();
  else if (!g && E) import_chunk_bzyb60p0.lLt.set(void 0), (0, import_chunk_bzyb60p0.Hli)();
});
function cr() {
  let e = /* @__PURE__ */ new Map();
  return { get: (r) => e.get(r), set: (r, o) => {
    e.set(r, o);
  }, delete: (r) => {
    e.delete(r);
  }, has: (r) => e.has(r), get size() {
    return e.size;
  }, clear: () => {
    e.clear();
  } };
}
var ms = (0, import_chunk_t57w17k7.de)(cr(), (e) => {
  e.clear();
});
function B2l(e) {
  for (let r of e) {
    if (r.type !== "user") continue;
    let o = ms.get(r.uuid);
    if (!o) continue;
    ms.delete(r.uuid);
    for (let y of o) y.resolve();
  }
}
function pr(e, r) {
  let o = r.filter((g) => g.type === "user"), y = o.find((g) => g.promptSource !== void 0) ?? o[0];
  return y ? e.awaitEntry(y.uuid) : Promise.resolve();
}
var fr = "prompt.submit: the prompt did not enter the session (its batch ended before its turn)";
function LVs() {
  let e = /* @__PURE__ */ new Map(), r = false;
  return { awaitEntry(o) {
    let y = Promise.withResolvers(), g = ms.get(o) ?? /* @__PURE__ */ new Set();
    return g.add(y), ms.set(o, g), e.set(y, o), y.promise;
  }, handedOff() {
    r = true;
  }, [Symbol.dispose]() {
    for (let [o, y] of e) {
      let g = ms.get(y);
      if (!g || !g.delete(o)) continue;
      if (g.size === 0) ms.delete(y);
      r ? o.resolve() : o.reject(new import_chunk_hcg738hf.je(fr));
    }
    e.clear();
  } };
}
var jn = /[ ()[\]{},+=@#]/g;
function qn(e) {
  let r = e.split(/[\\/]/).at(-1) ?? "", o = (0, import_chunk_fwgyarbe.h_r)(r);
  if (r.length > 200) return o;
  let y = r.normalize("NFC").replace(new RegExp("\\p{Zs}", "gu"), " ").trim();
  return y.replace(jn, "_") === o && !y.endsWith(".") ? y : o;
}
async function _r(e, r, o) {
  if (!Array.isArray(e.message.content) || (0, import_chunk_ksk52rm1.pN)() || (0, import_chunk_ksk52rm1.hpo)() || (0, import_chunk_2nv4wrez.ba)(import_chunk_anfdrvmv.ont) !== null || !(0, import_chunk_bnrdpyky.N2o)() || (0, import_chunk_f9x2f6cx.HI)() !== null || o.restricted || (0, import_chunk_pbteexar.jS)(o) || (0, import_chunk_ht27b0vz.Tr)(o, { name: import_chunk_k883m4fq.De }) !== null || (0, import_chunk_ht27b0vz.Di)(o, { name: import_chunk_k883m4fq.De }) !== null) return;
  let y = (0, import_chunk_fwgyarbe.ov)(), g = [];
  for (let k of e.message.content) {
    if (k.type !== "document" || !k.title) continue;
    try {
      let { source: T, title: R } = k, P = qn(R);
      if (T.type !== "base64" && T.type !== "text" || [R, P].some((O) => (0, import_chunk_w82axegn.CA)((0, import_path3.join)(y, O)) || (0, import_chunk_w82axegn.c0)(O))) continue;
      if (T.type === "text" && /[\0\ufffd]/.test(T.data)) {
        g.push(`${import_chunk_ve5qgcmh.wgr}none, since ${P} is not text in UTF-8: the file itself is not here to send]`);
        continue;
      }
      let E = Buffer.from(T.data, T.type === "base64" ? "base64" : "utf8"), A = (0, import_chunk_fwgyarbe.Mwt)((0, import_crypto6.randomUUID)().slice(0, 8), P), x = await (0, import_chunk_w2hrk3t1.oAe)(y);
      try {
        await (0, import_chunk_q7qjcthc.yr)((0, import_path3.join)(x.at, A), E, 384);
      } finally {
        await x.release();
      }
      let C = (0, import_path3.join)(y, A);
      (0, import_chunk_fwgyarbe.$fo)(await (0, import_promises4.realpath)(C), (0, import_chunk_ccm69jjy.Je)(E)), (0, import_chunk_cqa9hrgx.u)("input_document_block"), g.push(`${import_chunk_ve5qgcmh.wgr}${C}${T.type === "text" ? ", its text in UTF-8" : ""}]`);
    } catch (T) {
      (0, import_chunk_w578pjby.t)(`Failed to save a prompt's document: ${T}`), (0, import_chunk_cqa9hrgx.l)("input_document_block", "save_failed");
    }
  }
  if (g.length > 0) r.push((0, import_chunk_bzyb60p0.Me)({ content: g.map((k) => ({ type: "text", text: k })), isMeta: true, turnCompanion: true }));
}
var hr = 3e3, Sr = "auth warm timed out", Kn = 6e4, Wn = 6e4, zn = 2e3, as = (0, import_chunk_t57w17k7.de)({ inFlight: false, backOffUntil: 0, scheduled: void 0 }, (e) => {
  e.inFlight = false, e.backOffUntil = 0, clearTimeout(e.scheduled), e.scheduled = void 0;
}), $n = (0, import_chunk_69qhefwa.Be)();
function kr(e) {
  try {
    $n.emit(e);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[apiAuthWarm] a subscriber to authWarmReported threw; the request is unaffected: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
}
function Vn(e, r) {
  as.scheduled = void 0, Ls(e, r, "lapse_timer");
}
function Ls(e, r, o = "turn_start") {
  try {
    let y = Date.now(), g = (P, E) => kr({ kind: "decided", trigger: o, verdict: P, at: y, lastFullCheckAt: E }), k = (0, import_chunk_gq1dr8pm.mMi)();
    if (k === void 0 || (0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || (0, import_chunk_865at33z.qT)() === "gateway" || (0, import_chunk_865at33z.CCt)() || (0, import_chunk_k449cc64.wt)() || !(0, import_chunk_2nv4wrez.Rn)("allow_api_auth_warm") || !(0, import_chunk_865at33z.Rt)()) {
      g("off");
      return;
    }
    let T = (0, import_chunk_gq1dr8pm.uul)(y);
    if (as.inFlight) {
      g("in_flight", T);
      return;
    }
    if (y < as.backOffUntil) {
      g("paused", T);
      return;
    }
    let R = (0, import_chunk_gq1dr8pm.Oms)(y);
    if (R !== void 0 && R < k) {
      let P = k - R;
      if (o !== "owner_present" || P > Wn) {
        g("fresh", T);
        return;
      }
      if (as.scheduled === void 0) as.scheduled = setTimeout(Vn, P + zn, e, r), as.scheduled.unref?.();
      g("scheduled", T);
      return;
    }
    (0, import_chunk_gq1dr8pm.hMi)(y, k), as.inFlight = true, g("fired", T), Gn(y, R, o, e, r).finally(() => {
      as.inFlight = false;
    }).catch(() => {
    });
  } catch (y) {
    (0, import_chunk_w578pjby.t)(`[apiAuthWarm] gate check threw, no warm: ${(0, import_chunk_jv7av99m.d)(y)}`);
  }
}
async function Gn(e, r, o, y, g) {
  let k = performance.now(), T = AbortSignal.timeout(hr), R, P;
  try {
    await (0, import_chunk_5appeerh.qt)((0, import_chunk_gq1dr8pm.hN)({ maxRetries: 0, agentContext: (0, import_chunk_865at33z.Cu)(), credentials: y, storageV5: g }).then((D) => (R = Math.round(performance.now() - k), T.throwIfAborted(), D.get("/v1/me", { signal: T, headers: { "anthropic-beta": import_chunk_ephf358x.ff } }))), hr, Sr);
  } catch (D) {
    if (T.aborted || D instanceof import_chunk_jv7av99m.CF || D instanceof import_chunk_jv7av99m.yu || D instanceof Error && D.message === Sr) P = "timeout";
    else if (D instanceof import_chunk_jv7av99m.Nt && D.status !== void 0) P = `http_${D.status}`;
    else if (D instanceof import_chunk_jv7av99m.em || D instanceof TypeError) P = "connection";
    else if (D instanceof import_chunk_gq1dr8pm.gBt || D instanceof import_chunk_9b4aq7fb.Ize || D instanceof import_chunk_587zek71.RA || D instanceof import_chunk_865at33z.FCt) P = "auth";
    else P = "other", (0, import_chunk_k449cc64.i)(D);
  }
  let E = Math.round(performance.now() - k), A = ((0, import_chunk_f9x2f6cx.A1e)() ?? 0) > e, x = { total_ms: E, ...R !== void 0 && { client_build_ms: R }, ...r !== void 0 && { since_full_auth_check_s: Math.round(r / 1e3) }, model_call_during_warm: A, trigger: (0, import_chunk_78g0060s.f)(o) }, C = P === void 0 || P === "http_404", O = Date.now();
  if (C) (0, import_chunk_gq1dr8pm.ful)(e, O);
  else if (o !== "turn_start" && !A) (0, import_chunk_gq1dr8pm.pul)(e);
  if (kr({ kind: "settled", sentAt: e, answeredAt: O, totalMs: E, checked: C, modelCallDuringWarm: A }), P === void 0) (0, import_chunk_cqa9hrgx.u)("api_auth_warm", x);
  else if (P === "http_404") (0, import_chunk_cqa9hrgx.l)("api_auth_warm", P, x);
  else as.backOffUntil = Date.now() + Kn, (0, import_chunk_cqa9hrgx.m)("api_auth_warm", P, x);
}
var Qn = new import_chunk_pzzqg6s3.ze(() => ({ noticed: false, countedClear: false, countedStop: false, countedNotice: false, countedHostOff: false }));
function wr(e, r) {
  let o = (0, import_chunk_bzyb60p0.nKa)(), y = Qn.of(r);
  if (o.kind === "clear" && (0, import_chunk_wx2mpa0f.fb)() && !y.countedClear) y.countedClear = true, (0, import_chunk_cqa9hrgx.u)("hooks_personal_load_check");
  if (o.kind === "stop" && !y.countedStop) y.countedStop = true, (0, import_chunk_cqa9hrgx.m)("hooks_personal_load_check", "stopped");
  if (o.kind === "notice" && !y.countedNotice) y.countedNotice = true, (0, import_chunk_cqa9hrgx.l)("hooks_personal_load_check", "notice");
  if (o.kind === "host_off" && !y.countedHostOff) y.countedHostOff = true, (0, import_chunk_cqa9hrgx.l)("hooks_personal_load_check", "host_off");
  if (o.kind === "stop") return e.messages = [...e.messages, (0, import_chunk_z2c6pmpw.s3o)(o.text), (0, import_chunk_z2c6pmpw.o3o)(o.text, { kind: "no_verdict", noVerdictKind: "personal_config_refused" })], e.shouldQuery = false, e.resultText = o.text, e.allowedTools = void 0, true;
  if ((o.kind === "notice" || o.kind === "host_off") && !y.noticed) {
    y.noticed = true;
    let g = o.text === void 0 ? [] : [(0, import_chunk_bzyb60p0.Ut)({ type: "hook_system_message", content: o.text, hookName: "Claude Code", toolUseID: `personal-hooks-${r.id}`, hookEvent: "UserPromptSubmit" })], k = o.kind === "host_off" && o.forClaude !== void 0 ? [(0, import_chunk_z2c6pmpw.ICn)([o.forClaude])] : [];
    e.messages = [...e.messages, ...g, ...k];
  }
  return false;
}
function Rr(e, r, o, y, g, k, T, R, P, E, A, x, C, O, D, Y, ae, ge, xe) {
  let le = k || (0, import_crypto7.randomUUID)(), re = (0, import_chunk_k5r71ad2.TEn)(e), me = xe ?? re, Se = (0, import_chunk_wzzzxdne.SG)(e) ? void 0 : g;
  if (me) (0, import_chunk_be4a2jph.IHt)({ text: me, attributes: { ...Se && { "prompt.id": Se }, "message.uuid": le }, origin: A }, D);
  let qe = (0, import_chunk_k5r71ad2.nva)(me), we = (0, import_chunk_k5r71ad2.rva)(me), ce = (0, import_chunk_k5r71ad2.iva)(me), Le = R ? null : (0, import_chunk_f9x2f6cx.ypt)(), Ge = R ? void 0 : (0, import_chunk_f9x2f6cx.vca)(), Ke = (0, import_chunk_bzyb60p0.Rir)({ wakeupSource: x, hostInitiator: C, artifactCommentTurn: O, inboundOrigin: Y });
  if ((0, import_chunk_y53wbr8a.a)("tengu_input_prompt", { is_negative: qe, is_keep_going: we, is_wakeup: ce, ...false, prompt_index: Ge, prompt_length: re.length, ...E && { prompt_source: (0, import_chunk_78g0060s.f)(E) }, ...P && { effort_level: (0, import_chunk_78g0060s.f)(P) }, turn_origin: (0, import_chunk_78g0060s.f)((0, import_chunk_bzyb60p0.WBe)(A)), ...Ke, ...(0, import_chunk_w50zedgp.yWt)(), ...Ke.artifact_comment_turn && Se && { turn_prompt_id: (0, import_chunk_49zxha55.Ce)(Se) }, ...Le && { interrupted_message_id: (0, import_chunk_49zxha55.Ce)(Le) } }), (0, import_chunk_1ek4hhs6.eit)(A), ae !== void 0) (0, import_chunk_f9x2f6cx.en)().noteDelivered(le, ae);
  let jt = ae === void 0 ? void 0 : (0, import_chunk_bzyb60p0.lQt)(ae, ge ?? [], "notice"), Mt = jt === void 0 ? [] : [(0, import_chunk_bzyb60p0.lNt)((0, import_chunk_bzyb60p0.Me)((0, import_chunk_bzyb60p0._Jr)(jt)))], Ne = e;
  if (r.length > 0) Ne = [...typeof e === "string" ? e.trim() ? [{ type: "text", text: e }] : [] : e, ...r];
  let He = (0, import_chunk_bzyb60p0.Me)({ content: Ne, uuid: le, imagePasteIds: o.length > 0 ? o : void 0, permissionMode: T, isMeta: R || void 0, promptSource: E, promptId: Se, origin: A }), kt = (0, import_chunk_qzhs2fs3.xTn)(Ne);
  if (A) (0, import_chunk_bzyb60p0.XMn)(He, A);
  return { messages: [...Mt, He, ...y], shouldQuery: true, promptRow: { message: He, unframed: kt } };
}
var Cr = "Blank prompt \u2014 the message was only whitespace, so nothing was sent to the model.", Jn = "tengu_luminous_trinket";
function Xt(e) {
  (0, import_chunk_w4dc83v7.B0n)("process_user_input", e);
}
function vt(e) {
  (0, import_chunk_w4dc83v7.W0n)("process_user_input", e);
}
var Cs = () => require("/$bunfs/root/chunk-d39h1zmc.js"), Zn = () => require("/$bunfs/root/chunk-pyvarp1z.js");
class vr {
  state = void 0;
}
var Xn = new import_chunk_2904xtvq.j(() => new vr());
function Pr(e) {
  let r = Xn.of(e.session.host);
  if (r.state === void 0) r.state = Cs?.().createClassifierJobState(e) ?? null;
  return r.state;
}
async function gEn(e) {
  let { input: r } = e, o = false, y = (0, import_chunk_thj6vbn4.h6)(), g = e.uuid === void 0 ? void 0 : import_chunk_bzyb60p0.qxn.get(e.uuid)?.reading, k = g === void 0 ? y : { ...g, wasUnknown: g.wasUnknown || y.wasUnknown }, T = await (0, import_chunk_k5r71ad2.k2o)(typeof r === "string" ? r : (0, import_chunk_bzyb60p0.Go)(r, `
`), (R) => (o = R === void 0, eo(R === void 0 ? { ...e, readAtDispatch: k } : { ...e, readAtDispatch: k, userPromptRecording: R })), { prompt: e.interactionPrompt, reading: k });
  if (T.noVerdict && o) T.wasUnscreenedAtDispatch = true;
  return T;
}
async function eo({ input: e, preExpansionInput: r, suppressWorkflowKeyword: o, mode: y, context: g, pastedContents: k, ideSelection: T, messages: R, setUserInputOnProcessing: P, onQueryCommitted: E, uuid: A, isAlreadyProcessing: x, querySource: C, canUseTool: O, skipSlashCommands: D, bridgeOrigin: Y, clientBashCommand: ae, clientBashCommandCwd: ge, localStdinOrigin: xe, sessionChannelPersonTyped: le, ultrathinkTyped: re, carriedOnPromptId: me, ownWordUuids: Se, composerEnter: qe, hostInitiator: we, inboundOrigin: ce, toolsUsed: Le, mergedTypedText: Ge, fromConnector: Ke, fromAnotherSession: jt, modelScheduledOrigin: Mt, wakeupSource: Ne, artifactCommentTurn: He, foreignWord: kt, scheduledTaskId: Xe, scheduledFireId: Kt, isMeta: J, skipAttachments: Tt, skipSubmissionHooks: Dt, aheadOfSessionStart: ts, pollEventDelivery: ps, pollEventProvenance: ne, pollEventDeclared: Wt, pollEventRows: It, skipSkillPermissionReset: us, shouldQuery: tt, queryHeldForNextTurn: Ot, promptSource: fe, origin: ye, verifiedSlackHumanTurn: Ie, textNotTyped: Et, ownFilePaths: ss, noPersonArrived: Ft, inlinedImagePaths: dt, inlinedImageNames: $t, stampThreadState: ds, widgetViews: rs, promptSubmitted: Re, onScreened: lt, wait: fs = false, entries: ot, userPromptRecording: mt, readAtDispatch: he }) {
  var _stack = [];
  try {
    const Ct = __using(_stack, (0, import_chunk_z2c6pmpw.qGl)((0, import_chunk_bzyb60p0.r6l)(A)));
    l2o({ uuid: A, origin: ye, isHidden: J === true, isStopped: g.abortController.signal.aborted, isRelayed: Ie === true, foreignWord: kt, ownWordUuids: Se, input: e }), (0, import_chunk_bzyb60p0.h3a)(g, { origin: ye, value: e, isPollDelivery: us === true });
    let ct = typeof e === "string" ? e : null;
    if (y === "prompt" && ct !== null && !J) P?.(ct, ye);
    (0, import_chunk_bzyb60p0.QS)("query_process_user_input_base_start");
    let We = tt === false && J && Ot !== true ? void 0 : (0, import_chunk_bzyb60p0.xQt)({ isNonInteractive: g.options.isNonInteractiveSession, isMeta: J, callerSource: fe ?? ((0, import_chunk_865at33z.$u)(ye) ? void 0 : "system") });
    if (We !== void 0 && !(0, import_chunk_43cax88x.N6r)({ isMeta: J, origin: ye, content: e })) (0, import_chunk_g5qq9mjy.uRa)(g.toolState, ye);
    let Vt = Se ? Se.length > 0 : Ie !== true && kt === void 0;
    if (We !== void 0 && We !== "system" && Ft !== true) {
      if ((0, import_chunk_bzyb60p0._Ka)(g.setAppState), Vt) (0, import_chunk_g5qq9mjy.u3s)(g.toolState);
    }
    let ns = Tt ?? (ye?.kind === "plugin" ? "all" : void 0), I = [...g.nestedMemoryAttachmentTriggers ?? []];
    g.consumedNestedMemoryTriggers = [];
    let F = (0, import_chunk_bzyb60p0.wu)(e) || "", N, z = false, V = false, pe = false, Qe = he, st = async ({ submission: q, result: oe, enter: be, queued: Ae }, Jt) => {
      if (oe.shouldQuery && tt !== false) E?.();
      Qe = (0, import_chunk_thj6vbn4.h6)();
      let rt = Re === void 0 ? void 0 : so(g);
      if (Re === void 0 || rt === void 0 || q.command !== void 0 && q.text !== F && (Re.stopped === void 0 || (0, import_chunk_z2c6pmpw.L5r)(Re.under, rt)) || (0, import_chunk_z2c6pmpw.KGl)(Re.under, rt)) return (0, import_chunk_z2c6pmpw.N5r)({ submission: q, origin: ye, bridgeOrigin: Y, mode: y, shouldWait: fs, context: g, result: oe, promptSource: Jt, wakeupSource: Ne, composerEnter: qe, queued: Ae, isStartInput: ts === true || (0, import_chunk_kb3nnh8q.VKe)(A), enter: be, bound: () => {
        Qe = (0, import_chunk_thj6vbn4.h6)();
      } });
      if ((0, import_chunk_z2c6pmpw.L5r)(Re.under, rt)) {
        let Ht = await (0, import_chunk_z2c6pmpw.i3o)({ text: q.command === void 0 ? Re.text : q.text, typed: q.text, context: g, result: oe, promptSource: Jt, wakeupSource: Ne, composerEnter: qe, tiers: import_chunk_bzyb60p0.YNt }), ls = Ht.blocked !== void 0 ? Ht : await (0, import_chunk_z2c6pmpw.i3o)({ text: Re.text, typed: q.text, context: g, result: oe, promptSource: Jt, wakeupSource: Ne, composerEnter: qe, tiers: { managedHooksExcluded: true } }), gs = Ht.wasCancelled === true || ls.wasCancelled === true;
        return ls.blocked !== void 0 && !(gs && ls.stopped !== void 0) ? { ended: ls.blocked, stopped: ls.stopped } : gs ? import_chunk_z2c6pmpw.HCn : { proceeds: { text: Re.text, context: Re.context, sessionTitle: ls.sessionTitle ?? Ht.sessionTitle } };
      }
      if (oe.messages.push(...Re.messages), Re.stopped !== void 0) return oe.shouldQuery = false, oe.resultText = Re.stopped, { ended: oe, stopped: Re.stopped };
      return { proceeds: { text: Re.text, context: Re.context, sessionTitle: Re.sessionTitle } };
    }, $e = Promise.withResolvers(), os = tt === false && Ot !== true || Dt === true || We === void 0 ? void 0 : async (q) => {
      let oe = { messages: [], shouldQuery: true };
      if ((0, import_chunk_bzyb60p0.wQo)().kind === "stop") return { ran: q, rows: oe, outcome: void 0 };
      let be = await st({ submission: { text: Hs(F, q) ?? F, input: e, pastedContents: k, command: { name: q.name, args: q.argsRanWith }, ...J === true && { isMeta: true } }, result: oe, enter: ot && (() => $e.promise.then(({ messages: Ae }) => pr(ot, Ae))), queued: { ...Ct, settleWhen: (Ae) => Ct.settleWhen(Promise.all([Ae, $e.promise]).then(([Jt, { queries: rt }]) => rt ? Jt : Promise.reject(Error("no query")))) } }, We).catch((Ae) => ((0, import_chunk_k449cc64.i)(Ae), { error: Ae }));
      return "error" in be ? { ran: q, rows: oe, outcome: void 0, threw: be } : { ran: q, rows: oe, outcome: be };
    };
    if ((0, import_chunk_bzyb60p0.Uts)(typeof e === "string" ? e : (0, import_chunk_bzyb60p0.Go)(e, `
`)), Ke) (0, import_chunk_1ek4hhs6.LH)(import_chunk_pmryp5f3.vu);
    if (jt) (0, import_chunk_1ek4hhs6.TG)();
    if (y === "prompt") (0, import_chunk_bzyb60p0.h7o)(F);
    let v = await oo(e, y, g, We, k, T, R, A, x, C, O, (0, import_chunk_bz1f2qnq.Z)(g).mode, D, Y, Mt, J, ns, r, o, ye, tt, dt, $t, Re !== void 0, Ie, xe, le, qe, ds, Ne, we, He, Et === true, Ft === true, ss, mt?.hold, { forked: () => {
      z = js({ recording: mt, onScreened: lt, screened: ys({}, N), isRunReached: pe, since: he });
    }, ranAs: (q) => {
      pe = true, N = Hs(F, q);
    }, withheld: () => {
      V = true;
    }, isUnknownSinceDispatch: () => (0, import_chunk_thj6vbn4.K2)(he), isHeldForOrganization: () => Ps({ since: he, isRunReached: pe }), passed: () => {
      if ((0, import_chunk_thj6vbn4.K2)(he)) {
        V = true;
        return;
      }
      z = true, mt?.settled(ys({}, N)), lt?.(ys({}, N));
    } }, os, ce, ae === true, ge, Le, re === true, me, Ke === true, Ge).catch((q) => {
      throw $e.resolve({ messages: [], queries: false }), q;
    });
    $e.resolve({ messages: v.messages, queries: v.shouldQuery });
    let { promptRow: it, ranCommand: Pe, lineCheck: H } = v;
    if (delete v.promptRow, delete v.ranCommand, delete v.lineCheck, H?.threw !== void 0) throw H.threw.error;
    let L = Hs(F, Pe), X = v.ambientAttachmentsOwed === true;
    delete v.ambientAttachmentsOwed;
    let ue = v.shouldQuery ? (0, import_chunk_q2404y26.WQ)(g, g.options.tools) : void 0;
    if (ue !== void 0) await ue;
    let G = (0, import_chunk_bzyb60p0.FXo)(rs, { queries: v.shouldQuery && tt !== false, tools: (0, import_chunk_q2404y26.Ob)(g) });
    if (G !== void 0) v.messages.push((0, import_chunk_bzyb60p0.Ut)({ type: "widget_context_hint", views: G.views, ...G.more > 0 && { moreViews: G.more } }));
    if ((0, import_chunk_865at33z._a)(ye) && !J && Ie !== true) {
      let q = v.messages.findLast((oe) => oe.type === "user" && !oe.isMeta && (0, import_chunk_865at33z.s_)(oe));
      if (q) (0, import_chunk_f9x2f6cx.pFr)(q.uuid, q.timestamp, g.options.messageClientPlatform);
    }
    (0, import_chunk_bzyb60p0.a4a)(v.messages, Ne);
    let Ve = v.messages.filter((q) => q.type === "user"), Ue = Ve.find((q) => q.promptSource !== void 0) ?? Ve[0];
    if (Xe !== void 0 && Ue) {
      if (Ue.scheduledTaskId = Xe, Kt !== void 0) Ue.scheduledFireId = Kt;
    }
    if (Ke && Ue) Ue.fromConnector = true;
    if (jt && Ue) Ue.fromAnotherSession = true;
    try {
      let oe = We !== void 0 && v.shouldQuery && (tt !== false || Ot === true) ? (0, import_chunk_bzyb60p0.lSe)(v.messages) : -1, be = oe === -1 ? void 0 : v.messages[oe];
      if (be?.type === "user" && be.turnOrigin === void 0) {
        if (be.turnOrigin = (0, import_chunk_bzyb60p0.$2a)({ origin: ye, isMeta: J, wakeupSource: Ne, promptSource: We, hostInitiator: we }), be.promptId === void 0 && (0, import_chunk_865at33z.b)(Jn, false)) be.promptId = (0, import_chunk_f9x2f6cx.QA)() ?? void 0;
        if (be.promptId !== void 0 && (0, import_chunk_865at33z.b)(import_chunk_bzyb60p0.wos, false)) be.turnPromptId = be.promptId;
        let Ae = tt === false ? void 0 : (0, import_chunk_wzzzxdne.fuo)(R ?? g.messages, be.turnOrigin);
        if (Ae !== void 0) be.turnPosition = Ae;
      }
    } catch (q) {
      (0, import_chunk_k449cc64.i)(q);
    }
    let pt = (0, import_chunk_bzyb60p0.VJr)({ origin: ye, ownWord: Se !== void 0 && Se.length > 0, clientBashCommand: ae, isMeta: J, wakeupSource: Ne, hostInitiator: we, foreignWord: kt, textNotTyped: Et, noPersonArrived: Ft });
    if (pt) (0, import_chunk_bzyb60p0.FNt)(() => v.messages.map((q) => (0, import_chunk_zsqk76p8.dSi)(q, true)).findLast((q) => q !== void 0), g.storageV5);
    if ((0, import_chunk_bzyb60p0.QS)("query_process_user_input_base_end"), ps === true && v.messages.length > 0) v.messages.push((0, import_chunk_bzyb60p0.Ut)({ type: "poll_events", deliveredVia: "value_dispatch", envelopes: [], kinds: [], remainingWakeCount: 0, ...ne !== void 0 && { provenance: ne }, ...Wt !== void 0 && { declared: Wt }, ...It !== void 0 && { rows: It } }));
    if (!x && us !== true) (0, import_chunk_qanr9g0g.O$t)(g.setToolPermissionContext, v.disallowedTools ?? []);
    let at = Ot === true && v.shouldQuery;
    if (tt === false) v.shouldQuery = false;
    if ((v.shouldQuery || at) && wr(v, g.session)) {
      if (!z && (V || !js({ recording: mt, onScreened: lt, screened: ys({}, N), isRunReached: pe, since: he }))) v.noVerdict = true;
      return v;
    }
    let Ee = () => (0, import_chunk_thj6vbn4.K2)(Qe) || (Pe !== void 0 || pe) && (0, import_chunk_thj6vbn4.K2)(he), Oe = (q, oe) => Pe !== void 0 && J !== true && it?.message.isMeta !== true && q !== oe && !(ye?.kind === "plugin" && ye.asUser !== true && q === (0, import_chunk_bzyb60p0.YMn)(oe, ye.name, { midTurn: false }));
    if (!v.shouldQuery && !at || y === "bash" || v.forkDispatched || v.queriesAfterRun === true || Dt === true || We === void 0) {
      if (L !== void 0 && v.screened?.dropped !== true) v.screened = { rewritten: L };
      let q = v.screened?.dropped === true, oe = Ps({ since: he, isRunReached: pe });
      if (!z && oe && v.ownPassCutShort && !q) return Fr(v, g, Ct.origin !== void 0);
      let Ae = V ? void 0 : H?.outcome?.proceeds, Jt = ys(v.screened ?? {}, N);
      if (!z && Ae !== void 0) {
        let Ht = !q && Oe(Ae.text, L ?? F);
        qs({ result: v, screened: Ht ? { rewritten: Ae.text } : Jt, isUnknown: Ee(), recording: mt, onScreened: lt });
      } else if (!z && (V && !q || !js({ recording: mt, onScreened: lt, screened: Jt, isRunReached: pe, since: he }))) v.noVerdict = true;
      if (oe && q && g.abortController.signal.aborted) v.endedUnderAbort = true;
      if (v.noVerdict && v.engineDeferredSlash !== void 0) mt?.handedOn();
      if (X) await Er({ result: v, context: g, history: R, querySource: C });
      return await Ar(v, R, (0, import_chunk_q2404y26.Ob)(g)), v;
    }
    let is = v.screened?.dropped === true;
    if (is) delete v.screened;
    let Gt = is && Ps({ since: he, isRunReached: pe });
    (0, import_chunk_bzyb60p0.QS)("query_hooks_start"), Xt("input_hooks");
    let ut = v.expandedInput ?? e, _e = L ?? ((0, import_chunk_bzyb60p0.wu)(ut) || ""), Yt = J === true || it?.message.isMeta === true, Bt = it === void 0 && Pe === void 0, ft = performance.now(), se;
    if (H?.outcome !== void 0) {
      if (se = H.outcome, se.ended !== void 0 && se.stopped !== void 0) se = { ...se, ended: { ...v, ...se.ended, messages: [...v.messages, ...se.ended.messages] } };
      else if (se.proceeds !== void 0) v.messages.push(...H.rows.messages);
    } else se = await st({ submission: { text: _e, input: ut, pastedContents: k, ...Pe !== void 0 && { command: { name: Pe.name, args: Pe.argsRanWith } }, ...Yt && { isMeta: true }, ...Bt && { unplaceable: `Prompt not sent: ${Ur()} changed it, and Claude Code has no place to put the change.` } }, result: v, enter: ot === void 0 ? void 0 : () => pr(ot, v.messages), queued: Ct }, We);
    if (se.ended !== void 0) {
      vt("input_hooks");
      let q = se.stopped === void 0 ? void 0 : se.text ?? Re?.text, oe = (0, import_chunk_bq31aqv6.L0n)(_e, q !== void 0 && ye?.kind === "plugin" && ye.asUser !== true ? (0, import_chunk_bzyb60p0.YMn)(q, ye.name, { midTurn: false }) : q), be = oe === void 0 ? void 0 : Mr(it, ut, oe);
      if (be !== void 0) {
        be.promptRewritten = true;
        let Ae = (0, import_chunk_bzyb60p0.ioo)(be);
        if (Ae !== void 0) be.pluginPrompt = Ae;
      }
      if ((0, import_chunk_z2c6pmpw.a3o)()) {
        let Ae = Br(se.stopped === void 0 ? v.messages : se.ended.messages, g.readFileState);
        if (se.stopped !== void 0) se.ended.messages = Ae.kept;
      }
      if (se.stopped !== void 0 && Pe !== void 0 && !Yt && q !== void 0 && q !== _e) se.ended.messages.push(...Ir(R ?? g.messages));
      if (se.ended.screened = se.stopped === void 0 ? { dropped: true } : { rewritten: be !== void 0 || Pe !== void 0 ? oe ?? L : void 0 }, qs({ result: se.ended, screened: se.ended.screened, isUnknown: Ee(), recording: mt, onScreened: lt }), !g.abortController.signal.aborted) return se.ended;
      return { ...se.ended, messages: se.stopped === void 0 ? [...CGr(v.messages, g), ...se.ended.messages] : se.ended.messages, endedUnderAbort: true };
    }
    if (se.proceeds === void 0) return vt("input_hooks"), Fr(v, g, Ct.origin !== void 0);
    let gt = se.proceeds.text, ht = gt === _e ? void 0 : Mr(it, ut, gt);
    if (ht !== void 0) {
      ht.promptRewritten = true;
      let q = (0, import_chunk_bzyb60p0.ioo)(ht);
      if (q !== void 0) ht.pluginPrompt = q;
    }
    let Lt = Oe(gt, _e);
    if (ht !== void 0 || Lt) v.screened = { rewritten: gt };
    else if (L !== void 0) v.screened = { rewritten: L };
    if (ht === void 0 && gt !== _e) (0, import_chunk_w578pjby.t)("prompt.submit: the chain left another text and no row takes it (a slash command's typed line, or a hidden prompt); it stands as it came");
    if (Gt) v.noVerdict = true;
    else qs({ result: v, screened: v.screened ?? {}, isUnknown: Ee(), recording: mt, onScreened: lt });
    if (Lt) v.messages.push(...Ir(R ?? g.messages));
    let cs = await (0, import_chunk_sjqze7qg.Ann)(se.proceeds.context ?? [], "prompt.submit", g.storageV5);
    if (cs.length > 0) v.messages.push((0, import_chunk_z2c6pmpw.ICn)(cs, "prompt.submit"));
    if (ht !== void 0 && ns === void 0 && Et !== true) v.messages = await no({ messages: v.messages, prompt: ht, rewritten: gt, input: e, preExpansionInput: r, readTriggers: I, context: { ...g, submittedFromComposer: qe, submittedLineAsShown: r }, history: R, querySource: C, fromConnector: Ke === true });
    if ((0, import_chunk_zjhyjv3y.zo)("prompt_submit_hooks_ms", performance.now() - ft, ft), se.proceeds.sessionTitle) await (0, import_chunk_bzyb60p0.PMn)(g.session.id, se.proceeds.sessionTitle, g.storageV5, g.credentials);
    if (vt("input_hooks"), (0, import_chunk_bzyb60p0.QS)("query_hooks_end"), X) await Er({ result: v, context: g, history: R, querySource: C });
    if (ns === "all" && ye?.kind === "task-notification") v.messages.push(...(0, import_chunk_bzyb60p0.w3a)(g, C));
    if (await Ar(v, R, (0, import_chunk_q2404y26.Ob)(g)), it !== void 0 && (0, import_chunk_865at33z._a)(ye) && pt && Vt && Ie !== true && Ke !== true) await _r(it.message, v.messages, (0, import_chunk_bz1f2qnq.Z)(g));
    return v;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function d2o(e) {
  return e.type === "attachment" && !Or.has(e.attachment.type) && !ro.has(e.attachment.type) && !to(e.attachment);
}
function to(e) {
  return "hookEvent" in e && e.hookEvent === "UserPromptSubmit" && e.type !== "async_hook_response";
}
function CGr(e, { readFileState: r }) {
  for (let o of e) if (o.type === "attachment") Dr(o.attachment, r);
  return e.filter(d2o);
}
function Dr(e, r) {
  if (e.type === "file") r.delete(e.filename);
  if (e.type === "nested_memory") r.delete(e.path);
}
async function Ar(e, r, o) {
  if (!e.shouldQuery) return;
  try {
    let { getWorkflowAuthoringAutoloadMessages: y } = require("/$bunfs/root/chunk-17395xm4.js");
    e.messages.push(...await y(e.messages, r, o));
  } catch (y) {
    (0, import_chunk_k449cc64.i)(y);
  }
}
function Ns(e, r, o) {
  let y = { ...e, message: { ...e.message, content: (0, import_chunk_qzhs2fs3.xTn)(o) } };
  return (0, import_chunk_bzyb60p0.XMn)(y, r), y.message.content;
}
function Mr(e, r, o) {
  if (e === void 0 || e.message.isMeta) return;
  let { message: y, unframed: g } = e, { origin: k } = y, T = k !== void 0 && Ns(y, k, " ") !== " " ? k : void 0;
  if (typeof g === "string") return y.message.content = T === void 0 ? (0, import_chunk_bzyb60p0.bno)(g, o) : Ns(y, T, o), y;
  let R = g.filter((x, C) => x.type === "text" && (typeof r === "string" ? C > 0 || r.trim() === "" : r[C]?.type !== "text")), P = g.filter((x) => !R.includes(x));
  if (!P.some((x) => x.type === "text") && (P.length === 0 || (0, import_chunk_wzzzxdne.SG)(P))) return;
  if (T !== void 0) return y.message.content = Ns(y, T, [{ type: "text", text: o }, ...R, ...P.filter((x) => x.type !== "text")]), y;
  let A = (0, import_chunk_bzyb60p0.bno)(P, o);
  return y.message.content = R.length === 0 ? A : [...typeof A === "string" ? [] : A, ...R], y;
}
function so(e) {
  try {
    return (0, import_chunk_z2c6pmpw.wDt)(e);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`the drain could not read what screens a prompt now: ${r}`, { level: "error" });
    return;
  }
}
function Hs(e, r) {
  if (r === void 0 || r.argsRanWith === r.args) return;
  return r.args !== "" && e.endsWith(r.args) ? e.slice(0, e.length - r.args.length) + r.argsRanWith : `/${r.name} ${r.argsRanWith}`;
}
function Ir(e) {
  let r = `prompt.submit: ${Ur()} changed a slash command's typed line. That change is never applied: its arguments are changed at command.run, a skill body at skill.prompt.`;
  return e.some((y) => y.type === "system" && y.subtype === "informational" && y.content === r) ? [] : [(0, import_chunk_bzyb60p0.Pt)(r, "warning")];
}
function Ur() {
  let e = (0, import_chunk_m20gh621.dFn)("prompt.submit"), r = e.filter((y) => y.tier !== "builtin"), o = new Set((r.length > 0 ? r : e).map((y) => (0, import_chunk_bzyb60p0.iG)(y.plugin)));
  return o.size > 0 ? `a mod hooked on prompt.submit (${[...o].join(", ")})` : "a hook";
}
var Or = /* @__PURE__ */ new Set(["file", "already_read_file", "at_mention_reference", "pdf_reference", "directory", "mcp_resource", "agent_mention", "peer_mention", "skill_mention", "nested_memory", "withheld_memory"]), ro = /* @__PURE__ */ new Set(["ultrathink_effort", "workflow_keyword_request", "unknown_command_fallback", "selected_lines_in_ide", "selected_lines_in_diff", "opened_file_in_ide", "inlined_image_paths", "thread_state", "widget_context_hint"]);
async function Er({ result: e, context: r, history: o, querySource: y }) {
  Xt("input_attachments");
  let g = await (0, import_chunk_bzyb60p0.dBe)((0, import_chunk_bzyb60p0.MHe)(null, r, null, [], { now: () => (/* @__PURE__ */ new Date()).toISOString(), uuid: () => (0, import_crypto5.randomUUID)() }, o, y, { deliveredTurnStart: true }));
  vt("input_attachments");
  let k = e.messages.findIndex((T) => T.type === "user" && T.turnCompanion !== true);
  e.messages.splice(k === -1 ? 1 : k + 1, 0, ...g);
}
function Br(e, r) {
  let o = [], y = false;
  for (let g of e) {
    if (g.type === "attachment" && g.attachment.type === "hook_additional_context" && g.attachment.hookName === "prompt.mention") continue;
    if (g.type !== "attachment" || !Or.has(g.attachment.type)) {
      o.push(g);
      continue;
    }
    Dr(g.attachment, r), y ||= g.attachment.type === "peer_mention";
  }
  return { kept: o, peerMinted: y };
}
async function no({ messages: e, prompt: r, rewritten: o, input: y, preExpansionInput: g, readTriggers: k, context: T, history: R, querySource: P, fromConnector: E }) {
  let A = (0, import_chunk_k5r71ad2.UGr)(o, (0, import_chunk_bzyb60p0.wu)(y) || ""), x = g === void 0 ? void 0 : (0, import_chunk_k5r71ad2.UGr)(o, g), C = [...k, ...T.consumedNestedMemoryTriggers ?? []], { kept: O, peerMinted: D } = Br(e, T.readFileState);
  T.nestedMemoryAttachmentTriggers?.push(...C);
  let Y = await (0, import_chunk_bzyb60p0.dBe)((0, import_chunk_bzyb60p0.MHe)(A, T, null, [], { now: () => (/* @__PURE__ */ new Date()).toISOString(), uuid: import_crypto5.randomUUID }, R, P, { inputMentionsOnly: true, fromConnector: E, isHumanTypedPrompt: D, preExpansionInput: D ? x : void 0 }));
  return O.splice(O.indexOf(r) + 1, 0, ...Y), O;
}
async function oo(e, r, o, y, g, k, T, R, P, E, A, x, C, O, D, Y, ae, ge, xe, le, re, me, Se, qe, we, ce, Le, Ge, Ke, jt, Mt, Ne, He = false, kt = false, Xe, Kt, J, Tt, Dt, ts = false, ps, ne, Wt = false, It, us = false, tt) {
  let Ot = It ?? (0, import_crypto5.randomUUID)();
  if (!(0, import_chunk_wzzzxdne.SG)(e)) {
    if ((0, import_chunk_f9x2f6cx.RPt)(Ot), y !== void 0) Ls(o.credentials, o.storageV5);
  }
  if (r === "prompt" && typeof e === "string" && e !== "" && e.trim() === "" && o.options.isNonInteractiveSession && !Y && re !== false) return (0, import_chunk_cqa9hrgx.u)("prompt_submit_empty"), { messages: [(0, import_chunk_bzyb60p0.Pt)(Cr, "warning")], shouldQuery: false, resultText: Cr };
  let fe = null, ye = [], Ie = [], Et = [], ss = {}, Ft = (0, import_chunk_yvba4101.ac)(o.modelFacts.model), dt = e;
  if (typeof e === "string") fe = e;
  else if (e.length > 0) {
    (0, import_chunk_bzyb60p0.QS)("query_image_processing_start");
    let H = [], L = !me?.length && (0, import_chunk_bnrdpyky.N2o)(), X = e.some((ue) => ue.type === "image");
    if (X) Xt("input_images");
    if (L && X) (0, import_chunk_bzyb60p0.ken)(await (0, import_chunk_bnrdpyky.Szr)());
    for (let ue of e) {
      if (ue.type !== "image") {
        H.push(ue);
        continue;
      }
      let G = await (0, import_chunk_fbqj9ad4.kon)(ue, Ft);
      if (H.push(G.block), G.block.type !== "image") continue;
      if (!L) {
        let Ue = (0, import_chunk_fbqj9ad4.Yne)(G.dimensions ?? {});
        if (Ue) Ie.push(Ue);
        continue;
      }
      let Ve = (0, import_chunk_bzyb60p0.eN)((0, import_chunk_bzyb60p0.wu)(e) ?? void 0, g);
      if (Et.push(Ve), ue.source.type === "base64") ss[Ve] = { id: Ve, type: "image", content: ue.source.data, dimensions: G.dimensions };
    }
    dt = H, vt("input_images"), (0, import_chunk_bzyb60p0.QS)("query_image_processing_end"), fe = (0, import_chunk_tjdnrbvx.fv)(H), ye = fe === null ? H : H.slice(0, -1);
  }
  if (fe === null && r !== "prompt") throw Error(`Mode: ${r} requires a string input.`);
  let $t = g ? Object.values(g).filter(import_chunk_7f901c6t.Ibt) : [];
  if ($t.length > 0 || Object.keys(ss).length > 0) Xt("input_images");
  let ds = await (0, import_chunk_bnrdpyky.tTa)({ ...g, ...ss }, (0, import_chunk_se72nykz.Xj)(o.setAppState, "storedImagePaths")), rs = Object.values(ss);
  for (let { id: H, dimensions: L } of rs) {
    let X = (0, import_chunk_fbqj9ad4.Yne)(L ?? {}, ds.get(H));
    if (X) Ie.push(X);
  }
  if (rs.length > 0) {
    let H = (0, import_chunk_4smdap7r.U)(rs, (L) => !ds.has(L.id));
    if (H === 0) (0, import_chunk_cqa9hrgx.u)("input_image_block", { images: rs.length });
    else (0, import_chunk_cqa9hrgx.l)("input_image_block", "store_failed", { unstored: H });
  }
  (0, import_chunk_bzyb60p0.QS)("query_pasted_image_processing_start");
  let Re = await Promise.all($t.map(async (H) => {
    (0, import_chunk_y53wbr8a.a)("tengu_pasted_image_resize_attempt", { original_size_bytes: H.content.length });
    let L = await (0, import_chunk_fbqj9ad4.EA)({ data: H.content, mediaType: H.mediaType, limits: Ft });
    return L.block.type, { id: H.id, resized: L, originalDimensions: H.dimensions, sourcePath: H.sourcePath ?? ds.get(H.id) };
  })), lt = [];
  for (let { id: H, resized: L, originalDimensions: X, sourcePath: ue } of Re) {
    if (lt.push(L.block), L.block.type !== "image") continue;
    if (Et.push(H), L.dimensions) {
      let G = (0, import_chunk_fbqj9ad4.Yne)(L.dimensions, ue);
      if (G) Ie.push(G);
    } else if (X) {
      let G = (0, import_chunk_fbqj9ad4.Yne)(X, ue);
      if (G) Ie.push(G);
    } else if (ue) Ie.push(`${import_chunk_ve5qgcmh.xst}${ue}]`);
  }
  vt("input_images"), (0, import_chunk_bzyb60p0.QS)("query_pasted_image_processing_end");
  let fs = r === "prompt", ot = C || He, mt = o, he = fe, Ct;
  if (O && !He && fe !== null && fe.startsWith("/")) {
    Xt("input_command");
    let { resolveBridgeSlashOverride: H } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kjnvtpt7.js"))), L = H({ inputString: fe, context: o, uuid: R, origin: le, verifiedSlackHumanTurn: we });
    if (vt("input_command"), L.kind === "blocked") return L.result;
    if (L.kind === "updated") ot = L.effectiveSkipSlash, he = L.effectiveInput, Ct = L.bridgeRewrite, mt = { ...L.effectiveContext, dispatchedOverBridge: true };
  }
  if (we === true && !O && !ot && fe !== null && fe.startsWith("/")) {
    Xt("input_command");
    let { resolveRelaySlashRefusal: H } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kjnvtpt7.js"))), L = H({ inputString: fe, context: o, uuid: R, origin: le, inboundOrigin: Dt });
    if (vt("input_command"), L.kind === "blocked") return L.result;
  }
  let ct;
  if ((we === true || O === true || le?.kind === "task-notification") && fe !== null) {
    let H = { origin: le, relayAuthored: we === true, inboundOrigin: Dt, bridgeCarried: O === true, bridgeRewrite: Ct }, L = fe;
    ct = async (X, ue, G) => {
      let { relayDispatchRefusal: Ve } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kjnvtpt7.js")));
      return Ve({ cmd: X, commandName: ue, args: G, inputString: L, uuid: R, author: H });
    };
  }
  let We = [], Vt = [], ns;
  if (D && !O && !He && fe !== null && fe.startsWith("/")) {
    let { isStackable: H, peelStackedPromptCommands: L } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3xpfc1vh.js"))), { scheduledRunNeedsSkillTool: X, skillNameReservedOnTimers: ue } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-14q97dj6.js"))), G = (0, import_chunk_be4a2jph.Ww)(fe), Ve = G === null ? void 0 : ue(G.commandName, G.args);
    if (Ve !== void 0) Vt = [Ve];
    let Ue = G ? (0, import_chunk_8704k7wd.zs)(G.commandName, o.options.commands) : void 0, pt = G?.args ?? "";
    if (!Ue && G && !G.isMcp && pt.trim()) {
      let at = pt.trimStart(), Ee = at.search(/\s/), Oe = Ee === -1 ? at : at.slice(0, Ee), is = (0, import_chunk_8704k7wd.zs)(`${G.commandName}:${Oe}`, o.options.commands);
      if (is) Ue = is, pt = Ee === -1 ? "" : at.slice(Ee + 1).trimStart();
    }
    if (Ue) {
      let at = (0, import_chunk_tfs0ssqe.vA)(Ue) ? void 0 : (0, import_chunk_be4a2jph.zet)(Ue, pt), Ee = at ? (0, import_chunk_8704k7wd.zs)(at.targetName, o.options.commands) : void 0, [Oe, is] = at && Ee && (0, import_chunk_vhsysgcd.yl)(Ee) ? [Ee, at.remainingArgs] : [Ue, pt], Gt = (_e) => Ve !== void 0 && (_e.type !== "prompt" || _e.source !== "builtin" && _e.source !== "bundled");
      Vt = Gt(Oe) ? [...Vt, Oe.name] : [];
      let ut = (_e) => Gt(_e) || (0, import_chunk_tfs0ssqe.kwt)(_e, { commandName: _e.name, userTypedThisTurn: false, isMainSession: true, permissionContext: (0, import_chunk_bz1f2qnq.Z)(o) }) !== null;
      if (!ut(Oe)) {
        let _e = (ft) => X(ft, (0, import_chunk_bz1f2qnq.Z)(o), o), { stacked: Yt } = L(H(Oe) ? is : "", void 0, o.options.commands, ut), Bt = [Oe, ...Yt];
        if (Bt.some(_e)) We = Bt, (0, import_chunk_cqa9hrgx.l)("skill_scheduled_fire", "left_to_skill_tool");
        else ot = false, ns = (ft) => ut(ft) || _e(ft), (0, import_chunk_cqa9hrgx.u)("skill_scheduled_fire");
      }
    }
  }
  let I = ao({ querySource: E, context: o });
  if ((0, import_chunk_bzyb60p0.Vie)() && r === "prompt" && !o.options.isNonInteractiveSession && fe !== null && !ot && !fe.startsWith("/") && !o.options.ultraplanSessionUrl && !o.getAppState().ultraplanLaunching && qe !== true && !Y && (0, import_chunk_865at33z._a)(le) && (0, import_chunk_bq31aqv6.nhr)(ge ?? fe, g)) {
    (0, import_chunk_y53wbr8a.a)("tengu_ultraplan_keyword", {});
    let H = (0, import_chunk_bq31aqv6.tdo)(fe).trim(), { processSlashCommand: L } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3xpfc1vh.js"))), { ROW_COMMIT: X } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-nwm6xw8c.js"))), ue = await L(`/ultraplan ${H}`, ye, lt, [], { ...o, rowCommit: X, dispatchedByKeyword: true, submissionVerifiedSlackHumanTurn: we, submittedOnLocalStdin: ce, userPromptHold: Kt, userPromptLine: J }, R, P, A, y, void 0, void 0, void 0, I, { executeUserPromptSubmitHooks: import_chunk_bzyb60p0.gtn, getUserPromptSubmitHookBlockingMessage: import_chunk_bzyb60p0.UBe, executeStopHooks: import_chunk_bzyb60p0.FBe, getStopHookMessage: import_chunk_bzyb60p0.IMn }, le, me, Se, void 0, void 0, void 0, void 0, void 0, void 0, Dt, ct, Et);
    return Rs(ue, Ie);
  }
  if (fe !== null && r === "bash") {
    Xt("input_command");
    let { processBashCommand: H } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-rev8gknt.js"))), L = await H(fe, ye, o, { markOutputAsPasted: ts, sentForDirectory: ps });
    return vt("input_command"), Rs(L, Ie);
  }
  let F = ae !== "all" && (ot || !fe?.startsWith("/")), N = ae === void 0, z = fs && !Y && re !== false, V = z && (0, import_chunk_865at33z._a)(le) && !He;
  if ((0, import_chunk_bzyb60p0.QS)("query_attachment_loading_start"), F && N) Xt("input_attachments");
  let pe = F && N ? await (0, import_chunk_bzyb60p0.dBe)((0, import_chunk_bzyb60p0.MHe)(He ? null : fe, { ...o, submittedFromComposer: Ge, submittedLineAsShown: ge }, k ?? null, [], { now: () => (/* @__PURE__ */ new Date()).toISOString(), uuid: () => (0, import_crypto5.randomUUID)() }, T, E, { isRegularUserPrompt: z, isHumanTypedPrompt: V, ownFilePaths: He ? Xe : void 0, fromConnector: us, preExpansionInput: ge, pastedContents: g, suppressWorkflowKeyword: xe, heldAppend: re === false && !Y && we !== true && (le === void 0 || le.kind === "human") })) : [];
  vt("input_attachments");
  let Qe = me && me.length > 0 ? (0, import_chunk_bzyb60p0.Ut)({ type: "inlined_image_paths", paths: me, names: Se }) : null, st = Ke ? (0, import_chunk_bzyb60p0.A9a)() : void 0, $e = st ? (0, import_chunk_bzyb60p0.Ut)({ type: "thread_state", ...st }) : null;
  if ((0, import_chunk_bzyb60p0.QS)("query_attachment_loading_end"), he !== null && !ot && he.startsWith("/")) {
    Xt("input_command");
    let { processSlashCommand: H } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-3xpfc1vh.js"))), { ROW_COMMIT: L } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-nwm6xw8c.js"))), X = await H(he, ye, lt, pe, { ...mt, rowCommit: L, submissionVerifiedSlackHumanTurn: we, submittedOnLocalStdin: ce, submittedBySessionChannelPerson: Le, submittedFromComposer: Ge, submittedLineAsShown: ge, userPromptHold: Kt, userPromptLine: J }, R, P, A, y, D, ns, D ? void 0 : ge, I, { executeUserPromptSubmitHooks: import_chunk_bzyb60p0.gtn, getUserPromptSubmitHookBlockingMessage: import_chunk_bzyb60p0.UBe, executeStopHooks: import_chunk_bzyb60p0.FBe, getStopHookMessage: import_chunk_bzyb60p0.IMn }, le, me, Se, k?.source === "diff" ? void 0 : k, Y, x, jt, Mt, Tt, Dt, ct, Et);
    if (vt("input_command"), r === "prompt" && !Y && re !== false && (0, import_chunk_865at33z._a)(le) && !D && X.shouldQuery && !o.abortController.signal.aborted) (0, import_chunk_k5r71ad2.GGr)({ ownWords: we !== true }), (0, import_chunk_k5r71ad2.WGr)(o.setAppState, o.session.sessionScratch), (0, import_chunk_bzyb60p0.$Zt)();
    if (X.extractPromptAttachments && !F && ae === void 0) {
      Xt("input_attachments");
      let ue = await (0, import_chunk_bzyb60p0.dBe)((0, import_chunk_bzyb60p0.MHe)(he, o, k?.source === "diff" ? null : k ?? null, [], { now: () => (/* @__PURE__ */ new Date()).toISOString(), uuid: () => (0, import_crypto5.randomUUID)() }, T, E, { isRegularUserPrompt: z, isHumanTypedPrompt: V, fromConnector: us, preExpansionInput: ge, pastedContents: g, suppressWorkflowKeyword: xe }));
      vt("input_attachments"), X.messages.splice(1, 0, ...ue);
    }
    if (X.extractPromptAttachments && !F && ae === "mentions") X.ambientAttachmentsOwed = true;
    if (Qe) X.messages.push(Qe);
    if ($e) X.messages.push($e);
    return Rs(X, Ie);
  }
  if (Qe) pe.push(Qe);
  if ($e) pe.push($e);
  if (fe !== null && r === "prompt") {
    let H = fe.trim(), L = pe.find((X) => X.attachment.type === "agent_mention");
    if (L) {
      let X = `@agent-${L.attachment.agentType}`, ue = H === X, G = H.startsWith(X) && !ue;
      (0, import_chunk_y53wbr8a.a)("tengu_subagent_at_mention", { is_subagent_only: ue, is_prefix: G });
    }
  }
  if (z && (0, import_chunk_865at33z._a)(le) && !kt && !o.abortController.signal.aborted) (0, import_chunk_k5r71ad2.GGr)({ ownWords: we !== true && !He }), (0, import_chunk_k5r71ad2.WGr)(o.setAppState, o.session.sessionScratch), (0, import_chunk_bzyb60p0.$Zt)();
  let os, v;
  if (z && !He && (0, import_chunk_865at33z.$u)(le)) {
    let H = typeof dt === "string" ? dt : (0, import_chunk_bzyb60p0.Go)(dt, `
`);
    if (V && N && we !== true && qe !== true) {
      let L = await (0, import_chunk_bzyb60p0.TGa)(H, o.credentials, o.abortController.signal);
      if (L) {
        let X = (0, import_chunk_tjdnrbvx.qP)() ? (0, import_chunk_bzyb60p0.cye)(L) : `

${L}`;
        if (typeof dt === "string") v = `${dt}${X}`;
        else {
          let ue = dt.findLast((G) => G.type === "text");
          v = dt.map((G) => G === ue && G.type === "text" ? { ...G, text: `${G.text}${X}` } : G);
        }
        os = (0, import_chunk_bzyb60p0.CGa)();
      }
    }
    (0, import_chunk_bzyb60p0.mXo)(H, o.credentials, o.storageV5, o.appendSystemMessage);
  }
  let it = V && (Wt || (0, import_chunk_k5r71ad2.E2o)({ composerEnter: Ge, preExpansion: ge, localStdinOrigin: ce, input: e })) && (0, import_chunk_k67pwqya.Hwo)(o.modelFacts, (0, import_chunk_bz1f2qnq.e_)(o), Wt) ? "xhigh" : void 0;
  if (it) (0, import_chunk_cqa9hrgx.u)("ultrathink_boost");
  let Pe = Rs({ ...Rr(v ?? dt, lt, Et, pe, Ot, R, x, Y, (0, import_chunk_k67pwqya.mw)(o.modelFacts.model, (0, import_chunk_bz1f2qnq.e_)(o), it ?? (0, import_chunk_bz1f2qnq.kh)(o.permissionLayers)), y, le, jt, Mt, Ne, Kt, Dt, ne, T, tt), ...it && { effort: it }, ...F && !N && { ambientAttachmentsOwed: true } }, Ie);
  if (v) Pe.expandedInput = v;
  if (os) Pe.messages.push(os);
  if (We.length > 0) {
    let H = We.map((L) => `"${(0, import_chunk_271xsh6x.xr)(L.name, 200)}"`);
    Pe.disallowedTools = (0, import_chunk_qebpc5de.$f)(We.flatMap((L) => L.type === "prompt" ? L.disallowedTools ?? [] : [])).filter((L) => {
      let { toolName: X, ruleContent: ue } = (0, import_chunk_gbskgz33.Um)(L, "deny");
      return X !== import_chunk_pmryp5f3.Fn || ue !== void 0 && (0, import_chunk_ht27b0vz.iwe)(ue)?.key !== "args" && !We.some((G) => (0, import_chunk_tfs0ssqe.B$t)(ue, G.name, G));
    }), Pe.messages.push((0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Qs)(`This scheduled prompt has not run yet, because it may need the user's approval. To run it, call the ${import_chunk_pmryp5f3.Fn} tool for ${H.join(", then for ")}, with the prompt's arguments. If the call is refused, do not do the skill's work another way.`), isMeta: true, turnCompanion: true }));
  }
  if (Vt.length > 0) Pe.disallowedTools = (0, import_chunk_4smdap7r.M)(Vt).map((H) => (0, import_chunk_qebpc5de.yn)({ toolName: import_chunk_pmryp5f3.Fn, ruleContent: H })), (0, import_chunk_qanr9g0g.O$t)(o.setToolPermissionContext, Pe.disallowedTools, "union"), Pe.messages.push((0, import_chunk_bzyb60p0.Me)({ content: (0, import_chunk_bzyb60p0.Qs)("This scheduled prompt ran nothing: this line is reserved for a skill built into Claude Code, which did not run here, and a timer runs no other command in its place. Do not do the work another way, and do not schedule this prompt again. Tell the user in one line that it was skipped and why, and that they can cancel the timer if it repeats. If it is a command of their own, say that it needs another name to run on a timer."), isMeta: true, turnCompanion: true }));
  if (ot) io(Pe.messages);
  return Pe;
}
function io(e) {
  for (let r of e) if (r.type === "user") r.queueSkipSlashCommands = true;
}
function ao({ querySource: e, context: r }) {
  if (Cs) {
    let o = () => (0, import_chunk_865at33z.Kc)() && e?.startsWith("repl_main_thread") === true && !r.agentId;
    return { markTurnActive: (y) => {
      try {
        if (o()) {
          let g = Pr(r);
          Cs().markTurnActive(g, (0, import_chunk_9e5mdyfk.TS)(), { userText: y, isTurnStart: true }), g.kicked = false;
        }
      } catch (g) {
        if ((0, import_chunk_jv7av99m.Fe)(g)) return;
        (0, import_chunk_k449cc64.i)(g);
      }
    }, settleTurnEnd: async (y) => {
      try {
        if (!o()) return;
        let g = Cs(), k = Pr(r), T = (0, import_chunk_9e5mdyfk.TS)();
        if (y) {
          let R = Zn(), P = R.detectSurfaces(false), E = R.engineFor(R.sinksFor(P));
          if (E) {
            let A = g.findLatestRealUserAsk([...r.messages, ...y]);
            if (A) g.captureLatestAsk(k, A);
            let x = (0, import_chunk_f9x2f6cx.vb)(), C = x ? r.options.agentDefinitions.activeAgents.find((D) => D.agentType === x) : void 0, O = g.classifyAndPush(k, T, C, "", y.filter((D) => D.type === "assistant"), (0, import_chunk_ed372ykp.Lq)(r.taskRegistry.all()), E, P, false, false).catch((D) => {
              (0, import_chunk_w578pjby.t)(`[classifier] error: ${(0, import_chunk_jv7av99m.d)(D)}`, { level: "error" });
            });
            if ((0, import_chunk_865at33z.Qt)()) await (0, import_chunk_5appeerh.qt)(O, 6e4, "classifier write timed out").catch(() => {
            });
            return;
          }
        }
        g.markTurnAborted(k, T);
      } catch (g) {
        if ((0, import_chunk_jv7av99m.Fe)(g)) return;
        (0, import_chunk_k449cc64.i)(g);
      }
    } };
  }
  return;
}
function Rs(e, r) {
  if (r.length > 0) e.messages.push((0, import_chunk_bzyb60p0.Me)({ content: r.map((o) => ({ type: "text", text: o })), isMeta: true, turnCompanion: true }));
  return e;
}
function Lr(e, r) {
  return e.dropped !== true && r;
}
function Ps({ since: e, isRunReached: r }) {
  return (0, import_chunk_thj6vbn4.K2)(e) || (0, import_chunk_thj6vbn4.kDt)({ isRunReached: r });
}
function js({ recording: e, onScreened: r, screened: o, isRunReached: y, since: g }) {
  let k = Ps({ since: g, isRunReached: y });
  if (Lr(o, k)) return false;
  return e?.settled(o), r?.(o), true;
}
function ys(e, r) {
  return e.dropped === true || e.rewritten !== void 0 || r === void 0 ? e : { rewritten: r };
}
function qs({ result: e, screened: r, isUnknown: o, recording: y, onScreened: g }) {
  if (Lr(r, o)) {
    e.noVerdict = true;
    return;
  }
  y?.settled(r), g?.(r);
}
function Fr(e, r, o) {
  let { signal: y } = r.abortController, g = CGr(e.messages, r), k = (0, import_chunk_bzyb60p0.CXo)({ signal: y, typed: [], marker: (0, import_chunk_bzyb60p0.hR)({ toolUse: false }), isQueuedByPlugin: o }), T = (0, import_chunk_cbnm4p23.Ai)(y.reason) === "shutdown";
  return { ...k, messages: T ? [] : [...g, ...k.messages], interrupted: true };
}
function Nr(e, r) {
  if (r.type === "content_block_start") return { estimate: 0, emission: null };
  if (r.type !== "content_block_delta") return { estimate: e, emission: null };
  let { delta: o } = r;
  if (o.type === "thinking_delta") {
    let y;
    if ("estimated_tokens" in o && typeof o.estimated_tokens === "number") y = o.estimated_tokens;
    else if (typeof o.thinking === "string" && o.thinking.length > 0) y = (0, import_chunk_bzyb60p0.Zgi)(o.thinking);
    if (y === void 0) return { estimate: e, emission: null };
    let g = e + y;
    return { estimate: g, emission: { estimatedTokens: g, estimatedTokensDelta: y } };
  }
  if (o.type === "signature_delta" && e > 0) {
    let y = Math.ceil((0, import_chunk_bzyb60p0.Zro)(o.signature.length) / 4);
    if (y > e) return { estimate: y, emission: { estimatedTokens: y, estimatedTokensDelta: y - e } };
  }
  return { estimate: e, emission: null };
}
var es = { level: "verbose" }, co = 1e3, po = [import_chunk_zd24r3fj.fKs, import_chunk_zd24r3fj.pKs, import_chunk_zd24r3fj.xJn];
function BVs(e) {
  return e === "remote" ? void 0 : { scope: "turn-cancel" };
}
async function* fo(e, r, o) {
  let y = r.messages.filter((P) => P.uuid !== e.messageUuid), { messages: g } = await gEn({ input: e.text, mode: "prompt", context: { ...r.toolUseContext, abortController: o, messages: y, canUseTool: r.canUseTool, setMessages: () => {
  }, applyMessageOp: () => {
  }, onChangeAPIKey: () => {
  }, options: { ...r.toolUseContext.options, ideInstallationStatus: null, theme: "dark" } }, messages: y, uuid: e.messageUuid, querySource: r.querySource, origin: e.origin, onScreened: e.lineScreened, interactionPrompt: e.interactionPrompt, ownWordUuids: [] }), T = g.find(import_chunk_865at33z.On)?.compactMetadata.preservedMessages, R = new Set(T?.allUuids ?? T?.uuids ?? []);
  for (let P of g) if (!R.has(P.uuid)) yield P;
  return { reason: "completed" };
}
function C8t({ run: e, queryParams: r, commands: o = [], models: y = [], unavailableModels: g = [], agents: k = [], account: T = {}, outputStyle: R, availableOutputStyles: P, mcpServers: E = () => [], excludeDynamicSections: A, ambient: x, tools: C = [], skills: O = [], plugins: D = [], initialModel: Y, initialPermissionMode: ae, fastModeState: ge, fastModeDisabledReason: xe, hostOwnsPermissionMode: le = false, hostOwnsModel: re = false, sdkResultVerdict: me = false, onCommandLifecycle: Se, onTurnThrow: qe }) {
  let we = lr({ commands: typeof o === "function" ? o() : o, models: typeof y === "function" ? y() : y, unavailableModels: typeof g === "function" ? g() : g, agents: typeof k === "function" ? k() : k, account: T, outputStyle: R, availableOutputStyles: P }), ce = new import_chunk_zsqk76p8.vH(), Le = [], Ge = 0, Ke = null, jt = () => (Ke && !Ke.signal.aborted ? Ke : new AbortController()).signal, Mt = null, Ne = null, He = null, kt = null, Xe = (0, import_chunk_f9x2f6cx.W)(), Kt = (0, import_chunk_865at33z.aKi)();
  if (Kt !== Xe && Kt !== import_chunk_865at33z.dAs) (0, import_chunk_w578pjby.t)(`[engine] sdkEventQueue push key '${Kt}' \u2260 engine sessionId '${Xe}' \u2014 host ALS wiring likely incorrect; enqueued SdkEvents will not drain here`);
  let J = (I) => ({ ...I, session_id: Xe, uuid: "uuid" in I && typeof I.uuid === "string" ? I.uuid : (0, import_crypto.randomUUID)() }), Tt = (I) => typeof I === "function" ? I() : I, Dt = () => {
    let I = Tt(x);
    if (!I) return null;
    let F = typeof o === "function" ? o() : o, N = typeof k === "function" ? k() : k;
    return (0, import_chunk_zd24r3fj.H8t)({ ...I, sessionId: Xe, tools: C, mcpClients: E().map((z) => ({ name: z.name, type: z.status, source: z.source })), model: Mt ?? Tt(Y) ?? "", permissionMode: Ne ?? Tt(ae) ?? "default", commands: F, agents: N.map((z) => ({ agentType: z.name })), skills: O, plugins: D, pluginErrors: [], pluginWarnings: [], mcpServerErrors: [], additionalDirectories: void 0, syncedSkillsPath: void 0, fastModeState: Tt(ge) ?? "off", fastModeDisabledReason: Tt(xe), capabilities: po });
  }, ts = false, ps = 0, ne = null, Wt = (0, import_chunk_5sjwf92x.iv)(import_chunk_5sjwf92x.JO), It = [], us = false, tt = [], Ot = false, fe = (I) => {
    if (It.length >= co) {
      if (It.shift(), !us) us = true, (0, import_chunk_k449cc64.i)(Error("[engine] pendingDenialFrames buffer is full; dropping oldest permission_denied advisory frames"));
    }
    It.push(I);
  };
  function* ye() {
    while (It.length > 0) {
      let I = It.shift();
      (0, import_chunk_w578pjby.t)(`[engine] yield ${I.type}/${I.subtype}`, es), yield J(I);
    }
  }
  let Ie = [];
  function Et(I, F) {
    try {
      Se?.(I, F);
    } catch (N) {
      (0, import_chunk_k449cc64.i)(N);
    }
  }
  function ss(I) {
    try {
      qe?.({ error: I });
    } catch (F) {
      (0, import_chunk_k449cc64.i)(F);
    }
  }
  function Ft(I, F) {
    return Et(I, F), { type: "command_lifecycle", command_uuid: I, state: F };
  }
  function* dt() {
    while (Ie.length > 0) {
      let I = Ie.shift();
      (0, import_chunk_w578pjby.t)(`[engine] yield command_lifecycle/${I.state}`, es), yield J(I);
    }
  }
  function* $t() {
    yield* ye(), yield* dt();
    for (let I of (0, import_chunk_865at33z.lKi)(Xe)) (0, import_chunk_w578pjby.t)(`[engine] yield sdk-queue system/${I.subtype}`, es), yield J(I);
  }
  function* ds() {
    while (tt.length > 0) yield TGr(tt.shift(), { totalCostUsd: (0, import_chunk_f9x2f6cx.Eb)(), durationApiMs: (0, import_chunk_f9x2f6cx.WK)(), modelUsage: (0, import_chunk_f9x2f6cx.k$)(), usage: Ms(), subagentStats: (0, import_chunk_759mf2n7.q_e)(ne?.toolUseContext?.session), safetyStops: (0, import_chunk_f9x2f6cx.Sse)() });
  }
  let rs = () => {
    if (!Ot) return false;
    let I = ne?.toolUseContext?.getAppState;
    return I !== void 0 && (0, import_chunk_4yjj7pjs.dae)(I()).some((F) => (0, import_chunk_z6hn62tj.ZQ)(F) && (0, import_chunk_z6hn62tj.uy)(F));
  };
  function* Re(I, F) {
    if (rs()) tt.push(I);
    else yield* ds(), yield I;
    if (F) yield J(F);
  }
  async function* lt() {
    ts = false;
    let I = Dt();
    if (I) (0, import_chunk_w578pjby.t)("[engine] yield system/init (first)"), yield J(I);
    for await (let F of ce) {
      if (ts) {
        ts = false;
        let ie = Dt();
        if (ie) (0, import_chunk_w578pjby.t)("[engine] yield system/init (re-emit)"), yield J(ie);
      }
      yield* $t(), (0, import_chunk_865at33z.qCo)();
      let N = performance.now(), z = { parent_tool_use_id: F.parent_tool_use_id, priority: F.priority, shouldQuery: F.shouldQuery, timestamp: F.timestamp }, V;
      try {
        V = await r(F);
      } catch (ie) {
        (0, import_chunk_k449cc64.i)(ie), ss(ie), Le.shift();
        let h = F.uuid !== void 0 ? Ft(F.uuid, "cancelled") : void 0;
        if (me) (0, import_chunk_f9x2f6cx.j3n)(void 0);
        yield* $t();
        let Q = { ...lue({ startedAt: N, common: { is_error: true, duration_api_ms: 0, num_turns: 0, stop_reason: null, session_id: Xe, total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), usage: Ms(), modelUsage: (0, import_chunk_f9x2f6cx.k$)(), permission_denials: [], terminal_reason: "turn_setup_failed", fast_mode_state: Tt(ge), fast_mode_disabled_reason: Tt(xe), origin: F.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(ne?.toolUseContext?.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, variant: { subtype: "error_during_execution", errors: [`queryParams builder failed: ${(0, import_chunk_jv7av99m.d)(ie)}`], user_message_uuid: void 0 } }), ...z };
        yield* Re(Q, h);
        continue;
      }
      Ge++, ne = V;
      let pe = new AbortController();
      Ke = pe;
      let Qe = Le[0];
      if (Qe !== void 0) Qe.status = "armed";
      if (F.uuid !== void 0) Ie.push(Ft(F.uuid, "started"));
      let st = V.toolUseContext?.abortController?.signal, $e = () => pe.abort(st?.reason);
      if (st?.aborted) pe.abort(st.reason);
      else st?.addEventListener("abort", $e, { once: true });
      let os = V.toolUseContext?.abortController, v = () => {
        if ((0, import_chunk_cbnm4p23.Ai)(pe.signal.reason) === "refusal-fallback-edit" && os && !os.signal.aborted) os.abort(pe.signal.reason);
      };
      pe.signal.addEventListener("abort", v, { once: true }), (0, import_chunk_w578pjby.t)(`[engine] turn ${Ge} start`);
      let it = (0, import_chunk_w578pjby.O4t)() === "verbose", Pe = [], H = (ie, h, Q) => {
        if (Pe.some((At) => At.tool_use_id === h)) return;
        let Ye = (0, import_chunk_bzyb60p0.FUe)(ie.name, (0, import_chunk_bzyb60p0.Xro)(ie, h, Q));
        Pe.push({ tool_name: (0, import_chunk_zd24r3fj.AJn)(Ye.name), tool_use_id: h, tool_input: Ye.input });
      }, L = V.canUseTool, X = async (ie, h, Q, Ye, At, Zt) => {
        let nt = await L(ie, h, Q, Ye, At, Zt);
        if ((0, import_chunk_pbteexar.dxt)(nt, Zt) && !(0, import_chunk_cbnm4p23.XT)(Q.abortController.signal)) H(ie, At, (0, import_chunk_bzyb60p0.QNt)(ie, At, h, Ye, import_chunk_vc58gmrj.w7));
        if (nt.behavior === "deny" && (0, import_chunk_pbteexar.bta)(nt) && !(0, import_chunk_pbteexar.yEe)(nt)) fe({ type: "system", subtype: "permission_denied", tool_name: ie.name, tool_use_id: At, agent_id: Q.agentId, decision_reason_type: nt.decisionReason?.type, decision_reason_code: (0, import_chunk_pbteexar.kEe)(nt.decisionReason), decision_reason: (0, import_chunk_bzyb60p0.y_t)(nt.decisionReason), message: nt.message });
        return nt;
      };
      if (Wt.size > 0 && V.toolUseContext?.readFileState) {
        for (let [ie, h] of Wt.entries()) {
          let Q = V.toolUseContext.readFileState.get(ie);
          if (!Q || h.timestamp > Q.timestamp) V.toolUseContext.readFileState.set(ie, h);
        }
        Wt.clear();
      }
      let ue, G = V.engineDeferredSlash ? fo(V.engineDeferredSlash, V, pe) : e({ ...V, canUseTool: X, keepPartialMessageOnAbort: true, takePlainDelta: V.takePlainDelta === void 0 || V.toolUseContext?.options?.maxBudgetUsd !== void 0 ? void 0 : (0, import_chunk_bzyb60p0.AIn)("engine", () => It.length === 0 && Ie.length === 0 && !((ue ??= (0, import_chunk_865at33z.aKi)() === Xe) && (0, import_chunk_865at33z.RRl)(Xe)), V.takePlainDelta), toolUseContext: { ...V.toolUseContext, abortController: pe, onPermissionDenial: H, permissionLayers: !re && Mt !== null || !le && Ne !== null || He !== null || kt !== null ? [...V.toolUseContext?.permissionLayers ?? [], ...!re && Mt !== null ? [{ kind: "model", mainLoopModel: Mt }] : [], ...!le && Ne !== null ? [{ kind: "permission_mode", mode: Ne }] : [], ...He !== null ? [{ kind: "max_thinking_tokens", maxThinkingTokens: He }] : [], ...kt !== null ? [{ kind: "flag_settings", settings: kt }] : []] : V.toolUseContext?.permissionLayers } }), Ve = null, Ue = false, pt = V.engineDeferredSlash ? 0 : 1, at = (0, import_chunk_w50zedgp.Ng)(), Ee = null, Oe = [], is = new import_chunk_bzyb60p0.sHe(V.toolUseContext?.agentId), Gt, ut = "", _e = false, Yt = null, Bt, ft, se, gt, ht = "", Lt = [], cs = /* @__PURE__ */ new Set(), q = null, oe, be, Ae = V.toolUseContext?.options?.maxBudgetUsd, Jt = (0, import_chunk_k449cc64._1e)().at(-1), rt;
      try {
        let ie = await G.next();
        while (!ie.done) {
          let h = ie.value;
          if (h.type === "user") {
            if (!V.engineDeferredSlash && !(at && h.isVirtual === true)) pt++;
            if (Oe.push(h), is.hasNews()) (0, import_chunk_bzyb60p0.iHe)(Oe, V.toolUseContext?.agentId);
            if (h.isCompactSummary !== true) ut = "";
            _e = false, Yt = null, Bt = void 0, ft = void 0, se = void 0, gt = void 0, ht = "";
          } else if (h.type === "tombstone") {
            {
              let Q = h.message?.uuid, Ye = Q !== void 0 ? Oe.findLastIndex((At) => At.uuid === Q) : Oe.length - 1;
              if (Ye >= 0) Oe.splice(Ye, 1);
            }
            {
              let Q = h.message;
              if (Q?.type === "assistant") {
                let Ye = Q.message.content, At = Array.isArray(Ye) ? Ye.flatMap((Zt) => Zt.type === "tool_use" && Zt.name === import_chunk_2b1wcpvk.ga ? [Zt.id] : []) : [];
                if (At.length > 0) {
                  for (let nt of At) cs.add(nt);
                  let Zt = (nt) => nt.toolUseID === void 0 || At.includes(nt.toolUseID);
                  Lt = Lt.filter((nt) => !Zt(nt));
                }
              }
            }
            ut = "", _e = false, Yt = null, Bt = void 0, ft = void 0, se = void 0, gt = void 0, ht = "";
          } else if (h.type === "assistant" && !(0, import_chunk_bzyb60p0.Uen)(h)) {
            if (q ??= performance.now(), Oe.push(h), h.message.stop_reason != null && !(at && h.isVirtual === true)) Ee = h.message.stop_reason;
            _e = h.isApiErrorMessage === true, Yt = h.apiErrorStatus ?? null, Bt = h.apiErrorCode, ft = h.apiErrorType, se = h[import_chunk_865at33z.TNe], gt = _e ? h.apiError : void 0;
            let Q = (0, import_chunk_qwbhh2k3.lL)(h.message.content), Ye = Q?.type === "text" ? Q.text : "";
            if (_e) ht = import_chunk_0ha8wex8.XNe.has(Ye) ? "" : (0, import_chunk_p1ewvgeh.b_)(Ye), ut = "";
            else ut = import_chunk_0ha8wex8.XNe.has(Ye) ? "" : (0, import_chunk_p1ewvgeh.b_)(Ye);
          } else if (h.type === "stream_event" && h.event.type === "message_delta" && h.event.delta.stop_reason != null) Ee = h.event.delta.stop_reason;
          else if (h.type === "attachment" && h.attachment.type === "structured_output") {
            if (!(h.attachment.toolUseID !== void 0 ? cs.has(h.attachment.toolUseID) : cs.size > 0)) Lt = [...Lt, { toolUseID: h.attachment.toolUseID, data: h.attachment.data }];
          } else if (h.type === "attachment" && h.attachment.type === "max_turns_reached") Gt = { turnCount: h.attachment.turnCount, maxTurns: h.attachment.maxTurns };
          else if (h.type === "attachment" && h.attachment.type === "hook_deferred_tool") oe = { id: h.attachment.toolUseID, name: h.attachment.toolName, input: h.attachment.toolInput };
          if (It.length > 0) yield* ye();
          if (Ie.length > 0) yield* dt();
          if (be = (0, import_chunk_bzyb60p0.P4a)(be, h), h.type === "stream_event") {
            let Q = Nr(ps, h.event);
            if (ps = Q.estimate, Q.emission) {
              if (yield J({ type: "system", subtype: "thinking_tokens", estimated_tokens: Q.emission.estimatedTokens, estimated_tokens_delta: Q.emission.estimatedTokensDelta }), it) (0, import_chunk_w578pjby.t)("[engine] yield-twin system/thinking_tokens", es);
            }
          }
          if (it) (0, import_chunk_w578pjby.t)(`[engine] yield ${h.type}/${"subtype" in h ? h.subtype : "-"}`, es);
          if (h.type === "command_lifecycle") yield J(Ft(h.uuid, h.state));
          else if (h.type === "notification") {
            let Q = h.notification;
            yield J({ type: "system", subtype: "notification", key: Q.key, text: Q.text, priority: Q.priority, ...Q.color !== void 0 && { color: Q.color }, ...Q.timeoutMs !== void 0 && { timeout_ms: Q.timeoutMs } });
          } else if (h.type === "sdk_status") yield J({ type: "system", subtype: "status", status: h.status, ...be !== void 0 && { compact_output_chars: be }, ...h.metadata?.compactResult !== void 0 && { compact_result: h.metadata.compactResult }, ...h.metadata?.compactError !== void 0 && { compact_error: h.metadata.compactError } });
          else if (h.type === "stream_request_start") yield J({ type: "system", subtype: "status", status: "requesting" });
          else if (h.type === "system" && h.subtype === "compact_boundary") yield J({ type: "system", subtype: "compact_boundary", uuid: h.uuid, compact_metadata: (0, import_chunk_wx3ay5nf.xtr)(h.compactMetadata), ...h.logicalParentUuid !== void 0 && { logical_parent_uuid: h.logicalParentUuid } });
          else if (h.type === "system" && h.subtype === "model_refusal_fallback") yield J({ type: "system", subtype: "model_refusal_fallback", uuid: h.uuid, trigger: h.trigger, direction: h.direction, ...h.scope !== void 0 && { scope: h.scope }, original_model: h.originalModel, fallback_model: h.fallbackModel, request_id: h.requestId, api_refusal_category: h.apiRefusalCategory ?? null, api_refusal_explanation: h.apiRefusalExplanation ?? null, ...h.apiRefusalCyberVerification !== void 0 && { api_refusal_cyber_verification: h.apiRefusalCyberVerification }, ...h.retractedMessageUuids !== void 0 && { retracted_message_uuids: h.retractedMessageUuids }, refused_user_message_uuid: h.refusedUserMessageUuid ?? null, content: h.content, ...h.sawCyberRefusal && { saw_cyber_refusal: true }, ...h.provisional && { provisional: h.provisional } });
          else if (h.type === "system" && h.subtype === "model_refusal_no_fallback") yield J({ type: "system", subtype: "model_refusal_no_fallback", uuid: h.uuid, original_model: h.originalModel, request_id: h.requestId, api_refusal_category: h.apiRefusalCategory ?? null, api_refusal_explanation: h.apiRefusalExplanation ?? null, refused_user_message_uuid: h.refusedUserMessageUuid ?? null, content: h.content });
          else if (h.type === "system" && h.subtype === "model_fallback") yield J({ type: "system", subtype: "model_fallback", uuid: h.uuid, trigger: h.trigger, original_model: h.originalModel, fallback_model: h.fallbackModel, content: h.content });
          else if (h.type === "system" && h.subtype === "model_consent_fallback") yield J({ ...(0, import_chunk_wx3ay5nf.OHa)(h), uuid: h.uuid });
          else if (h.type === "tool_use_summary") yield J({ ...(0, import_chunk_wx3ay5nf.IHa)(h), uuid: h.uuid });
          else if (h.type === "system" && h.subtype === "read_divider") ;
          else yield J(h);
          if (h.type === "system" && h.subtype === "api_error") yield J({ type: "system", subtype: "api_retry", attempt: h.retryAttempt, max_retries: h.maxRetries, retry_delay_ms: h.retryInMs, error_status: h.error.status ?? null, error: (0, import_chunk_bzyb60p0.yZt)(h.error), ...h.error.noResponse && { no_response: { waited_ms: h.error.noResponse.waitedMs, retry_wait_ms: h.error.noResponse.retryWaitMs } } });
          if (h.type === "attachment" && h.attachment.type === "relevant_memories") {
            let Q = mr(h.attachment.memories);
            if (Q) {
              let { uuid: Ye, session_id: At, ...Zt } = Q;
              yield J(Zt);
            }
          }
          if (h.type === "system" && h.subtype === "local_command" && typeof h.content === "string" && (h.content.includes(`<${import_chunk_k449cc64.Tf}>`) || h.content.includes(`<${import_chunk_k449cc64.Ky}>`))) {
            let Q = (0, import_chunk_wx3ay5nf.Itr)(h.content, h.uuid, h.timestamp, h.contextUsage, h.commandRun, h.usageReport, h.commandOutcome);
            if (Q) yield J(Q), (0, import_chunk_w578pjby.t)("[engine] yield-twin assistant (local_command)", es);
          }
          if (h.type === "progress" && (h.data.type === "bash_progress" || h.data.type === "powershell_progress")) yield J({ type: "tool_progress", tool_use_id: h.toolUseID, tool_name: h.data.type === "bash_progress" ? import_chunk_hn3cwwzt.ke : import_chunk_rb36kwbn.yt, parent_tool_use_id: h.parentToolUseID || null, elapsed_time_seconds: h.data.elapsedTimeSeconds, task_id: h.data.taskId }), (0, import_chunk_w578pjby.t)("[engine] yield-twin tool_progress", es);
          if (h.type === "progress" && h.data.type === "tool_heartbeat") yield J({ type: "tool_progress", tool_use_id: h.toolUseID, tool_name: h.data.toolName, parent_tool_use_id: h.parentToolUseID || null, elapsed_time_seconds: h.data.elapsedTimeSeconds, heartbeat: true }), (0, import_chunk_w578pjby.t)("[engine] yield-twin tool_progress heartbeat", es);
          if (h.type === "progress" && h.data.type === "agent_api_retry") yield J({ type: "tool_progress", tool_use_id: h.toolUseID, tool_name: import_chunk_060xwhvh._t, parent_tool_use_id: h.parentToolUseID || null, elapsed_time_seconds: 0, subagent_type: h.data.agentType, ...h.data.resolved !== true && { subagent_retry: { agent_id: h.data.agentId, attempt: h.data.attempt, max_retries: h.data.maxRetries, retry_delay_ms: h.data.retryDelayMs, error_status: h.data.errorStatus ?? null, error_category: h.data.errorCategory } } }), (0, import_chunk_w578pjby.t)("[engine] yield-twin tool_progress subagent_retry", es);
          for (let Q of (0, import_chunk_865at33z.lKi)(Xe)) (0, import_chunk_w578pjby.t)(`[engine] yield sdk-queue system/${Q.subtype}`, es), yield J(Q);
          if (Gt === void 0 && h.type !== "sdk_status" && h.type !== "compact_progress" && h.type !== "stream_mode" && h.type !== "response_length" && !(0, import_chunk_gq1dr8pm.$Ae)() && (0, import_chunk_bzyb60p0.BF)(Ae)) {
            rt = "budget_exhausted";
            break;
          }
          ie = await G.next();
        }
        if ((0, import_chunk_cqa9hrgx.u)("shoji_engine"), ie.done) rt = ie.value ? ie.value.reason : void 0;
      } catch (ie) {
        Ve = (0, import_chunk_jv7av99m.d)(ie), ss(ie);
      } finally {
        if (Ue = pe.signal.aborted, rt === "budget_exhausted" && (0, import_chunk_w50zedgp.Ng)()) pe.abort((0, import_chunk_cbnm4p23.hl)("remote-cancel"));
        await G.return(void 0).catch(() => {
        }), st?.removeEventListener("abort", $e), pe.signal.removeEventListener("abort", v);
        let ie = Ms();
        (0, import_chunk_w578pjby.t)(`[engine] turn ${Ge} end (turns=${pt} usage in=${ie.input_tokens} out=${ie.output_tokens} cost=$${(0, import_chunk_f9x2f6cx.Eb)().toFixed(4)} api=${(0, import_chunk_f9x2f6cx.WK)()}ms stop=${Ee} resultLen=${ut.length})`);
      }
      let Ht = Oe.findLast((ie) => !go(ie)) ?? Oe.at(-1) ?? { type: "user", message: F.message }, ls = me ? V.engineDeferredSlash === void 0 : (0, import_chunk_xrav2tvh.WT)(rt), gs = (0, import_chunk_cbnm4p23.Ai)(pe.signal.reason) === "permission-stop" && !(0, import_chunk_gq1dr8pm.$Ae)(), _s = gs ? (0, import_chunk_bzyb60p0.pVa)() ?? (0, import_chunk_bzyb60p0.SKa)() ?? (0, import_chunk_vc58gmrj.xRi)((0, import_chunk_bzyb60p0.irt)()) : void 0, Ws = Ve !== null ? [Ve] : me && _s !== void 0 ? [(0, import_chunk_wx3ay5nf.SJs)(Ht, Ee), _s] : ls && oe === void 0 && !(0, import_chunk_wx3ay5nf.FHa)(Ht, Ee) ? (0, import_chunk_wx3ay5nf.BHa)(Ht, Ee, Jt) : null, Is = Ee === "refusal" && Lt.length > 0, Es = Is ? void 0 : Lt.at(-1)?.data;
      try {
        if (_e && (0, import_chunk_wx3ay5nf.$Ha)({ trailing: Ht, preceding: Oe.at(-2), terminalReason: rt, retractionExhausted: Lt.length === 0 && cs.size > 0 })) _e = false, Yt = null, Bt = void 0, ft = void 0, se = void 0, gt = void 0, ht = "", Ee = "tool_use", (0, import_chunk_y53wbr8a.a)("tengu_trailing_api_error_notice_skipped", { engine: (0, import_chunk_78g0060s.S)("session_engine"), has_structured_output: Lt.length > 0 });
      } catch (ie) {
        (0, import_chunk_k449cc64.i)(ie);
      }
      let xs = _e ? ht : ut;
      if (xs === "" && Es !== void 0) xs = JSON.stringify(Es);
      let hs = { duration_api_ms: (0, import_chunk_f9x2f6cx.WK)(), stop_reason: Ee, session_id: Xe, total_cost_usd: (0, import_chunk_f9x2f6cx.Eb)(), usage: Ms(), modelUsage: (0, import_chunk_f9x2f6cx.k$)(), permission_denials: Pe, terminal_reason: rt, ...gs && { stopped_by_permission_check: true }, fast_mode_state: Tt(ge), fast_mode_disabled_reason: Tt(xe), origin: F.origin, subagent_stats: (0, import_chunk_759mf2n7.q_e)(V.toolUseContext?.session), safety_stops: (0, import_chunk_f9x2f6cx.Sse)() }, Fs = rt === "budget_exhausted" ? { ...lue({ startedAt: N, common: { ...hs, is_error: true, num_turns: pt }, variant: { subtype: "error_max_budget_usd", errors: [(0, import_chunk_bzyb60p0.T6a)(Ae)], user_message_uuid: void 0 } }), ...z } : Ve === null && oe === void 0 && Gt ? { ...lue({ startedAt: N, common: { ...hs, is_error: true, num_turns: Gt.turnCount }, variant: { subtype: "error_max_turns", errors: [`Reached maximum number of turns (${Gt.maxTurns})`], user_message_uuid: void 0 } }), ...z } : Ws !== null ? { ...lue({ startedAt: N, common: { ...hs, is_error: true, num_turns: pt }, variant: { subtype: "error_during_execution", errors: Ws, user_message_uuid: void 0 } }), ...z } : { ...lue({ startedAt: N, common: { ...hs, ...oe !== void 0 && { stop_reason: "tool_deferred" }, is_error: _e || Is, num_turns: pt }, variant: { subtype: "success", api_error_status: Yt, ...Bt !== void 0 && { api_error_code: Bt }, ...ft !== void 0 && { api_error_type: ft }, ...se !== void 0 && { api_error_origin: se }, ...gt !== void 0 && { api_error: gt }, result: xs, structured_output: Es, ttft_ms: !_e && q !== null ? Math.max(0, Math.round(q - N)) : void 0, deferred_tool_use: oe } }), ...z }, $s = (0, import_chunk_gq1dr8pm.xms)();
      if ($s !== void 0 && Fs.subtype === "success" && gt === "safety_monitor_blocked") $s.isReported = true;
      if (Is && Fs.subtype === "success") try {
        (0, import_chunk_y53wbr8a.a)("tengu_structured_output_refusal_dropped", { api_error_latched: _e });
      } catch (ie) {
        (0, import_chunk_k449cc64.i)(ie);
      }
      let Vs;
      if (F.uuid !== void 0) Vs = Ft(F.uuid, Ve !== null ? "cancelled" : (0, import_chunk_2jnfj492.Ypo)(rt, Ue));
      if (Le.shift(), me) (0, import_chunk_f9x2f6cx.j3n)(_s);
      else if (_s !== void 0) yield J((0, import_chunk_bzyb60p0.Pt)(_s, "warning"));
      yield* $t(), yield* Re(Fs, Vs);
    }
    while (tt.length > 0 && !Ke?.signal.aborted && rs()) yield* $t(), await (0, import_chunk_5appeerh.K)(100);
    if (tt.length > 0 && Ke?.signal.aborted && ne?.toolUseContext?.taskRegistry) {
      let { taskRegistry: F, setAppState: N, storageV5: z } = ne.toolUseContext;
      (0, import_chunk_aw5nczax.uue)({ taskRegistry: F, setAppState: N, storageV5: z });
    }
    await (0, import_chunk_sjqze7qg.Enn)(), yield* $t(), yield* ds();
  }
  function fs() {
    try {
      Ct();
      for (let { intent: I, status: F } of Le.splice(0)) if (I.uuid !== void 0) Et(I.uuid, F === "armed" ? "cancelled" : "discarded");
    } catch (I) {
      (0, import_chunk_k449cc64.i)(Error("[engine] abandonment sweep failed", { cause: I }));
    }
  }
  let ot = false;
  async function* mt() {
    ot = true;
    try {
      yield* lt();
    } finally {
      fs();
    }
  }
  function he(I) {
    switch (I.type) {
      case "turn":
        if (Ot) {
          (0, import_chunk_w578pjby.t)("[engine] dropped turn intent received after close()", { level: "warn" });
          break;
        }
        if (Le.push({ intent: I, status: "queued" }), I.uuid !== void 0) Ie.push(Ft(I.uuid, "queued"));
        ce.enqueue(I);
        break;
      case "interrupt": {
        if (Ke?.abort(I.reason !== void 0 ? new DOMException(I.reason, "AbortError") : void 0), I.scope !== "turn-cancel") {
          let F = ne?.toolUseContext?.taskRegistry, N = 0;
          if (ne?.toolUseContext !== void 0 && F !== void 0) {
            N = (0, import_chunk_7h77vtaa.yqe)(F, { durable: false });
            let { setAppState: V } = ne.toolUseContext;
            (0, import_chunk_aw5nczax.qJn)({ taskRegistry: F, setAppState: V });
          }
          let z = (0, import_chunk_6d4w1614.vqe)((0, import_chunk_bzyb60p0.Hg)(), { leaveArtifactRooms: true });
          (0, import_chunk_6d4w1614.kue)(N, z);
        }
        break;
      }
      case "set_model":
        Mt = I.model ?? null, ts = true, (0, import_chunk_w578pjby.t)(`[engine] send set_model model=${I.model}`);
        break;
      case "set_permission_mode": {
        let F = (0, import_chunk_pbteexar.a_)(I.mode);
        if (F === void 0) {
          (0, import_chunk_w578pjby.t)("[engine] set_permission_mode rejected \u2014 unrecognized mode");
          break;
        }
        if (F === "bypassPermissions" && (0, import_chunk_3b9jqhjk.OC)()) {
          (0, import_chunk_w578pjby.t)("[engine] set_permission_mode:bypassPermissions rejected \u2014 disabled by settings");
          break;
        }
        if (F === "auto" && !(0, import_chunk_bzyb60p0.JS)()) {
          (0, import_chunk_w578pjby.t)("[engine] set_permission_mode:auto rejected \u2014 gate not enabled");
          break;
        }
        Ne = F, ts = true;
        break;
      }
      case "set_max_thinking_tokens":
        He = I.max_thinking_tokens, (0, import_chunk_w578pjby.t)(`[engine] send set_max_thinking_tokens max=${I.max_thinking_tokens}`);
        break;
      case "apply_flag_settings":
        kt = { ...kt ?? {}, ...I.settings }, (0, import_chunk_w578pjby.t)(`[engine] send apply_flag_settings keys=${Object.keys(I.settings).join(",")}`);
        break;
      case "seed_read_state":
        Wt.set(I.path, I.seed), (0, import_chunk_w578pjby.t)(`[engine] send seed_read_state path=${I.path}`);
        break;
    }
  }
  function Ct() {
    Ot = true, ce.done();
  }
  let ct = mt(), We = ct.return.bind(ct), Vt = ct.throw.bind(ct);
  function ns() {
    if (Ct(), !ot) fs();
  }
  return ct.return = (I) => (ns(), We(I)), ct.throw = (I) => (ns(), Vt(I)), Object.assign(ct, { interrupt: async (I, F) => (he({ type: "interrupt", reason: I, scope: F?.scope }), { still_queued: Le.flatMap(({ intent: N, status: z }) => z === "queued" && N.uuid !== void 0 ? [N.uuid] : []) }), setModel: async (I) => he({ type: "set_model", model: I }), setPermissionMode: async (I) => he({ type: "set_permission_mode", mode: I }), setMaxThinkingTokens: async (I) => he({ type: "set_max_thinking_tokens", max_thinking_tokens: I }), applyFlagSettings: (I) => (he({ type: "apply_flag_settings", settings: I }), Promise.resolve()), seedReadState: async (I, F, N) => {
    try {
      let z = (0, import_chunk_n2dbhmj2.xt)(I);
      if (N !== void 0) {
        if (N.length <= 10485760) he({ type: "seed_read_state", path: z, seed: { content: (0, import_chunk_5sjwf92x.eT)(N), timestamp: F, offset: void 0, limit: void 0, contentNotInModelContext: true } });
        return;
      }
      let V = await (0, import_promises.stat)(z);
      if (V.size > 10485760) return;
      let pe = Math.floor(V.mtimeMs);
      if (pe <= F) {
        let Qe = await (0, import_promises.readFile)(z, "utf-8"), st = (0, import_chunk_5sjwf92x.eT)(Qe);
        he({ type: "seed_read_state", path: z, seed: { content: st, timestamp: pe, offset: void 0, limit: void 0, contentNotInModelContext: true } });
      }
    } catch {
    }
  }, turnCount: () => Ge, initializationResult: () => Promise.resolve(we), supportedModels: () => Promise.resolve(typeof y === "function" ? y() : we.models), supportedCommands: () => Promise.resolve(typeof o === "function" ? o() : we.commands), supportedAgents: () => Promise.resolve(typeof k === "function" ? k() : we.agents), mcpServerStatus: () => Promise.resolve(E()), getContextUsage: async (I) => {
    if (ne === null) throw Error("getContextUsage: no turn received yet");
    let { messages: F, toolUseContext: N } = ne;
    return await (0, import_chunk_xqa844xs.Q$e)({ session: N.session, messages: F, getAppState: N.getAppState, getMcp: N.getMcp, storageV5: N.storageV5, credentials: N.credentials, agentId: N.agentId, stickyBetas: N.stickyBetas, options: { mainLoopModel: N.options.mainLoopModel, tools: N.options.tools, agentDefinitions: N.options.agentDefinitions, customSystemPrompt: N.options.customSystemPrompt, appendSystemPrompt: N.options.appendSystemPrompt, systemPromptSnapshot: N.options.systemPromptSnapshot, excludeDynamicSections: A, mcpClients: N.options.mcpClients }, detail: I?.detail });
  }, requestSessionTitle: (I, F) => (0, import_chunk_qmyc67pd.pnr)(I, jt(), F?.credentials), rewindFiles: async (I, F) => {
    if (ne === null) return { canRewind: false, error: "rewindFiles: no turn received yet" };
    let { fileHistoryEnabled: N, fileHistoryCanRestore: z, fileHistoryGetDiffStats: V, fileHistoryRewind: pe } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-mewrpyvc.js"))), Qe = ne.toolUseContext.getAppState();
    if (!N()) return { canRewind: false, error: "File rewinding is not enabled." };
    if (!z(Qe.fileHistory, I)) return { canRewind: false, error: "No file checkpoint found for this message." };
    if (F?.dryRun ?? false) {
      let $e = await V(Qe.fileHistory, I);
      return { canRewind: true, filesChanged: $e?.filesChanged, insertions: $e?.insertions, deletions: $e?.deletions };
    }
    let st;
    try {
      st = await pe(() => Qe.fileHistory, I);
    } catch ($e) {
      return { canRewind: false, error: `Failed to rewind: ${(0, import_chunk_jv7av99m.d)($e)}` };
    }
    return { canRewind: true, skippedLinks: st?.skippedLinks };
  }, submitFeedback: async (I, F) => {
    if (F?.draft_id == null) {
      if (ne === null) return { feedback_id: null, unavailable_reason: (Lve().kind === "disabled" ? set() : null) ?? "no turn received yet" };
      if (F?.save_locally === true) return c2o({ messages: ne.messages, description: I, surface: F?.surface ?? "sdk", storageV5: ne.toolUseContext.storageV5, host: ne.toolUseContext.session?.host });
    }
    await (0, import_chunk_aw5nczax.tq)();
    let N = set();
    if (N) return { feedback_id: null, unavailable_reason: N };
    if (F?.draft_id != null) {
      let { submitDraftFromRequest: V } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-kc0mxb3e.js")));
      return V({ draftId: F.draft_id, description: I, type: F.type, title: F.title, area: F.area, attachTranscript: F.attach_transcript, surface: F.surface, messages: ne?.messages ?? [], storageV5: ne?.toolUseContext.storageV5, host: ne?.toolUseContext.session?.host, credentials: ne?.toolUseContext.credentials });
    }
    if (ne === null) return { feedback_id: null, unavailable_reason: "no turn received yet" };
    let z = await iet({ messages: ne.messages, description: I, surface: F?.surface ?? "sdk", storageV5: ne.toolUseContext.storageV5, host: ne.toolUseContext.session?.host, credentials: ne.toolUseContext.credentials });
    return z.success ? { feedback_id: z.feedbackId } : { feedback_id: null, is_zdr_org: z.isZdrOrg, failure_reason: z.failureReason, status_code: z.statusCode, unavailable_reason: UKe(z) };
  }, submitSurveyFeedback: async (I) => {
    if (ne === null) return { feedback_id: null, unavailable_reason: "no turn received yet" };
    let { submitSurveyFeedbackForSdk: F } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bq37ne9k.js")));
    return F({ request: I, messages: ne.messages, storageV5: ne.toolUseContext.storageV5, host: ne.toolUseContext.session?.host, credentials: ne.toolUseContext.credentials });
  }, streamInput: async (I) => {
    try {
      for await (let F of I) {
        let { type: N, ...z } = F;
        he({ type: "turn", ...z });
      }
    } finally {
      Ct();
    }
  }, readFile: async (I, F) => {
    if (ne === null) return null;
    try {
      return await (0, import_chunk_fz3c96rq.nht)(I, F?.maxBytes, ne.toolUseContext.getAppState().toolPermissionContext, { encoding: F?.encoding });
    } catch {
      return null;
    }
  }, close: Ct });
}
function Ms() {
  let e = Object.values((0, import_chunk_f9x2f6cx.k$)()), r = (o) => e.reduce((y, g) => y + o(g), 0);
  return { ...import_chunk_hym6yzrf.Eg, input_tokens: r((o) => o.inputTokens), output_tokens: r((o) => o.outputTokens), output_tokens_details: { thinking_tokens: r((o) => o.thinkingTokens ?? 0) }, cache_read_input_tokens: r((o) => o.cacheReadInputTokens), cache_creation_input_tokens: r((o) => o.cacheCreationInputTokens), cache_creation: { ephemeral_5m_input_tokens: r((o) => o.cacheCreationEphemeral5mInputTokens ?? 0), ephemeral_1h_input_tokens: r((o) => o.cacheCreationEphemeral1hInputTokens ?? 0) }, server_tool_use: { ...import_chunk_hym6yzrf.Eg.server_tool_use, web_search_requests: r((o) => o.webSearchRequests) } };
}
function go(e) {
  if ((0, import_chunk_0ha8wex8.q1)(e)) return true;
  if (e.type !== "user" || e.turnCompanion !== true) return false;
  let r = e.message.content;
  return !(Array.isArray(r) && r.length > 0 && r.every((o) => o.type === "tool_result"));
}
