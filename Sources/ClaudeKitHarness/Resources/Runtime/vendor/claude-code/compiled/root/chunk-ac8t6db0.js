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
var chunk_ac8t6db0_exports = {};
__export(chunk_ac8t6db0_exports, {
  $ln: () => $ln,
  Ays: () => Ays,
  Bln: () => Bln,
  Cys: () => Cys,
  Eys: () => Eys,
  G0e: () => G0e,
  GWt: () => GWt,
  Gbe: () => Gbe,
  Gyo: () => Gyo,
  Jpe: () => Jpe,
  P1i: () => P1i,
  PEt: () => PEt,
  R1i: () => R1i,
  REt: () => REt,
  Rys: () => Rys,
  SN: () => SN,
  Skr: () => Skr,
  Tys: () => Tys,
  Uln: () => Uln,
  VWt: () => VWt,
  Vyo: () => Vyo,
  Wln: () => Wln,
  Xpe: () => Xpe,
  _Z: () => _Z,
  bkr: () => bkr,
  eYe: () => eYe,
  gRe: () => gRe,
  gV: () => gV,
  gZ: () => gZ,
  hRe: () => hRe,
  hZ: () => hZ,
  hle: () => hle,
  im: () => im,
  kkr: () => kkr,
  mj: () => mj,
  mle: () => mle,
  nUn: () => nUn,
  r9: () => r9,
  rUn: () => rUn,
  vys: () => vys,
  wkr: () => wkr,
  x1i: () => x1i,
  xEt: () => xEt,
  xys: () => xys,
  ykr: () => ykr,
  zWt: () => zWt,
  zbe: () => zbe,
  zyo: () => zyo
});
module.exports = __toCommonJS(chunk_ac8t6db0_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_kmbc34js = require("/$bunfs/root/chunk-kmbc34js.js");
var import_chunk_d19q7hh0 = require("/$bunfs/root/chunk-d19q7hh0.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_http = require("http");
var Fe = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/, Ae = /^(?:0x[0-9a-f]*|[0-9]+)$/;
function Oe(e) {
  if (e === void 0) return;
  let n;
  for (let r of e.split(",")) {
    let a = r.trim().toLowerCase();
    if (a === "") continue;
    let d = a.split(".");
    if (a.length > 253 || !d.every((y) => Fe.test(y)) || d.every((y) => Ae.test(y))) return;
    n ??= a;
  }
  return n;
}
function ee(e) {
  if ((0, import_chunk_3jjr3wje.gD)(e) !== void 0) return true;
  return (0, import_chunk_jv7av99m.xL)(e, (n) => {
    let r = (0, import_chunk_jv7av99m.w)(n);
    return r === "ECONNREFUSED" || r === "ConnectionRefused" || r !== void 0 && import_chunk_865at33z.noe.has(r);
  }) !== void 0;
}
class te {
  builtFor = void 0;
  agent = void 0;
  warnedMalformed = void 0;
  agentFor(e) {
    if (this.agent === void 0 || this.builtFor !== e) {
      let n = new import_chunk_3jjr3wje.Yhn(e.proxyUrl, { ca: e.gatewayCa });
      n.options = { ...n.options, ca: e.gatewayCa }, this.builtFor = e, this.agent = n;
    }
    return this.agent;
  }
  warnMalformedOnce(e) {
    if (this.warnedMalformed === e) return;
    this.warnedMalformed = e, (0, import_chunk_w578pjby.t)("[frame-tunnel] CCR_AGENT_PROXY_FRAME_HOSTS is malformed; keeping the gateway routes", { level: "warn" });
  }
}
var Pe = new import_chunk_2904xtvq.j(() => new te());
function ne() {
  if (!(0, import_chunk_6e68m1dj.hn)()) return;
  let e = import_chunk_c203g5kd.s.CCR_AGENT_PROXY_FRAME_HOSTS;
  if (e === void 0) return;
  let n = Pe.of((0, import_chunk_f9x2f6cx.N)().host), r = Oe(e);
  if (r === void 0) {
    n.warnMalformedOnce(e);
    return;
  }
  let a = (0, import_chunk_kmbc34js.k_l)();
  if (a === void 0 || (0, import_chunk_3jjr3wje.DE)() !== void 0) return;
  return { host: r, agent: n.agentFor(a) };
}
var H = 60, ke = 180, xe = 32768, ve = 1048576, re = 262144, De = 1.25, oe = { "Content-Encoding": "gzip", "Content-Type": "application/json" };
function Eys(e) {
  if (e === void 0 || e <= 0) return H;
  return Math.min(ke, H + Math.floor(e / xe));
}
function Me(e, n) {
  return n * Eys(e) <= e * H;
}
async function Le({ url: e, body: n, storageV5: r }) {
  let a = (0, import_chunk_w578pjby._)(n), d = a.length, y = (0, import_chunk_kmbc34js.oUn)(e, a, r, "frame_publish");
  if (y === void 0) return { gzipped: null, encoding: void 0, jsonChars: d };
  let p = Buffer.byteLength(a), R = (h) => ({ gzipped: null, jsonChars: d, encoding: { json_bytes: p, wire_bytes: p, body_gzip: false, gzip_skip: h } });
  if (!y.gzip) return R(y.reason);
  let c = Eys(p) / H;
  if (p >= ve) {
    let h = a.slice(0, re), P = Buffer.byteLength(h) / (await (0, import_chunk_865at33z.POl)(h)).length;
    if (P * De < c) return (0, import_chunk_w578pjby.t)(`[artifact] publish body sent uncompressed: its first ${re} characters compress only ${P.toFixed(2)}x, and a body of ${p} bytes needs ${c.toFixed(2)}x to finish inside the server's 60-second read limit for a compressed upload`), R("deadline_ratio");
  }
  let g = await (0, import_chunk_865at33z.OOl)(a);
  if (!Me(p, g.length)) return (0, import_chunk_w578pjby.t)(`[artifact] publish body sent uncompressed: gzip only got ${p} bytes down to ${g.length}, too little to finish inside the server's 60-second read limit for a compressed upload`), R("deadline_ratio");
  return { gzipped: g, jsonChars: d, encoding: { json_bytes: p, wire_bytes: g.length, body_gzip: true } };
}
function Ce(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return false;
  let n = Object.getPrototypeOf(e);
  return n === Object.prototype || n === null;
}
function Be(e) {
  if (!e.ok) return { status: 0, header: () => {
    return;
  }, bodyText: async () => "" };
  return { status: e.status, header: (n) => {
    let r = e.response?.headers?.[n];
    return typeof r === "string" ? r : void 0;
  }, bodyText: async () => typeof e.data === "string" ? e.data : e.data === void 0 ? "" : (0, import_chunk_w578pjby._)(e.data) };
}
async function ae({ url: e, body: n, storageV5: r, signal: a, send: d, onEncoding: y }) {
  if (!Ce(n)) return d(null);
  let { gzipped: p, encoding: R, jsonChars: c } = await Le({ url: e, body: n, storageV5: r });
  if (R !== void 0) y?.(R);
  if (p === null || R === void 0) return d(null);
  (0, import_chunk_kmbc34js.vkr)("frame_publish");
  let g = await d(p);
  return (0, import_chunk_kmbc34js.E_l)({ answer: g, facts: Be, resendIdentity: () => (y?.({ json_bytes: R.json_bytes, wire_bytes: R.json_bytes, body_gzip: false, gzip_fallback_status: g.ok ? g.status : 0 }), d(null)), aborted: () => a?.aborted === true, bodyChars: c, storageV5: r, rollout: "frame_publish" });
}
function Ue(e) {
  if (!(0, import_chunk_np189awg.gI)(e) || !(0, import_chunk_3jjr3wje.fd)(e)) return false;
  return (0, import_chunk_tvttgr51.fIo)((0, import_chunk_865at33z.rh)(e)?.code) && (0, import_chunk_ma3kja9f.T)(e.request) && e.request.reusedSocket === true;
}
function Ie(e) {
  if (!(0, import_chunk_3jjr3wje.fd)(e) || !(0, import_chunk_ma3kja9f.T)(e.request)) return;
  let { agent: n } = e.request, r = URL.parse(e.config?.url ?? "", e.config?.baseURL);
  if (!(n instanceof import_http.Agent) || r === null) return;
  let a = r.port || (r.protocol === "https:" ? "443" : "80"), y = `${r.hostname.replace(/^\[(.*)\]$/, "$1")}:${a}:`;
  for (let [p, R] of Object.entries(n.freeSockets)) if (p.startsWith(y)) for (let c of R?.slice() ?? []) c.destroy();
}
async function ie({ isRead: e, send: n, signal: r, timeoutMs: a }) {
  let d = performance.now();
  try {
    return await n(false);
  } catch (y) {
    if (!Ue(y)) throw y;
    try {
      Ie(y);
    } catch (c) {
      (0, import_chunk_k449cc64.i)(c);
    }
    let p = (0, import_chunk_d19q7hh0.bU)(y, d);
    if (!e || r?.aborted) throw (0, import_chunk_cqa9hrgx.l)("artifact_stale_socket", e ? "read_cancelled" : "write_not_resent", p), y;
    let R = a === void 0 || !Number.isFinite(a) || a <= 0 ? void 0 : a - (performance.now() - d);
    if (R !== void 0 && R < 1) throw (0, import_chunk_cqa9hrgx.m)("artifact_stale_socket", "no_time_to_resend", p), y;
    (0, import_chunk_w578pjby.t)("[artifact] a read-only request failed because the server had already closed its reused connection \u2014 sending it once more on a new connection");
    try {
      let c = await n(true, R === void 0 ? void 0 : Math.floor(R));
      return (0, import_chunk_cqa9hrgx.u)("artifact_stale_socket", p), c;
    } catch (c) {
      if (!(0, import_chunk_3jjr3wje.wd)(c)) (0, import_chunk_cqa9hrgx.m)("artifact_stale_socket", "resend_failed", (0, import_chunk_d19q7hh0.bU)(c, d));
      throw c;
    }
  }
}
function REt(e) {
  return !e.ok && (e.reason === "relay-unavailable" || e.reason === "relay-not-served");
}
var Ne = "x-ccr-relay-upstream", Ye = "x-ccr-sandbox-egress", ze = /* @__PURE__ */ new Set(["disabled", "restricted", "unrestricted"]);
function R1i(e) {
  if (!e.ok || e.route !== "relay" || !hle(e)) return;
  let n = e.response.headers?.[Ye];
  return typeof n === "string" && ze.has(n) ? n : void 0;
}
var hZ = "forbidden: CCR agent tokens", je = "Artifacts can't accept a person's own sign-in from an Anthropic-hosted sandbox";
function mle(e, n) {
  return e === 403 && typeof n === "string" && n.trimStart().startsWith(je);
}
var gZ = "Artifacts refused this sign-in because Claude Code is using a person's own login or token inside an Anthropic-hosted sandbox with restricted network access. That doesn't show whether any artifact exists or who can open it. The user can remove the login or token they added and let the cloud session make the call under its own sign-in, or run Claude Code outside the sandbox. Tell the user, and don't retry or try another way from this session";
function Xpe(e) {
  if (typeof e === "string") return e.trim() === "not found";
  return typeof e === "object" && e !== null && e.error === "not_found";
}
function x1i(e) {
  return typeof e === "string" && e.trim() === "no version";
}
var He = /* @__PURE__ */ new Set([401, 403, 404, 413]), $e = /* @__PURE__ */ new Set(["organization network policy denies artifact storage reads for this session", "organization network policy could not be determined for this session; artifact storage reads denied"]), We = /* @__PURE__ */ new Set(["organization network policy denies artifact storage writes for this session", "organization network policy could not be determined for this session; artifact storage writes denied"]);
function le(e) {
  if (!e.ok || hle(e) || e.status !== 403 || typeof e.data !== "string") return false;
  let n = e.data.trim();
  return $e.has(n) || gV() && We.has(n);
}
var Ve = "relay approval required: this change was not approved by the person for this session";
function ue(e) {
  return e.ok && !hle(e) && e.status === 403 && typeof e.data === "string" && e.data.trim() === Ve;
}
var qe = /* @__PURE__ */ new Set(["organization network policy denies artifact reads for this session", "organization network policy could not be determined for this session"]), GWt = "this cloud session's network access is turned off for the organization, or could not be confirmed, so the session gateway does not serve artifact pages or files to it";
function zWt(e, n) {
  return e === 403 && n !== void 0 && n.byteLength <= 256 && qe.has(Buffer.from(n).toString("utf8").trim());
}
var W = 3e5, Xe = 15e3, Ke = 65536, ye = /* @__PURE__ */ new WeakSet(), Ze = /^(?:x-frame-[a-z0-9-]+|x-ccr-relay-[a-z0-9-]+|accept|if-match)$/i;
function Je(e) {
  if (!e) return e;
  return (0, import_chunk_gd77dyw4.Hr)(e, (n, r) => Ze.test(r));
}
var Gyo = (0, import_chunk_78g0060s.S)("boot"), _Z = (0, import_chunk_78g0060s.S)("blobs"), nUn = (0, import_chunk_78g0060s.S)("comments"), ykr = (0, import_chunk_78g0060s.S)("subscriptions"), pe = (0, import_chunk_78g0060s.S)("types"), me = (0, import_chunk_78g0060s.S)("type_files"), Skr = (0, import_chunk_78g0060s.S)("type_create"), ge = (0, import_chunk_78g0060s.S)("db"), vys = (0, import_chunk_78g0060s.S)("sharing"), Re = (0, import_chunk_78g0060s.S)("publish"), _e = (0, import_chunk_78g0060s.S)("frames_external"), Qe = (0, import_chunk_78g0060s.S)("artifacts_listing"), et = /* @__PURE__ */ new Set([nUn, ykr, Gyo, _e, pe, me, Skr, ge, Re, _Z]), tt = "tengu_cobalt_plinth_burnet", nt = [...O(Gyo, ["GET /{slug}", "GET /versions/{slug}", "GET /frames", "POST /track"]), ...O(_e, ["GET /frames/external"]), ...O(Qe, ["GET /artifacts"]), ...O(Re, ["POST /deploy/direct", "POST /deploy/prepare", "POST /upload", "GET /contract/latest", "GET /contract/{v}", "GET /contract/{v}/{file}", "GET /contract/{v}/prompt", "GET /read/{slug}"]), ...O(nUn, ["GET /comments/{slug}", "POST /comments/{slug}/{thread}", "POST /comments/{slug}/{thread}/resolve", "POST /comments/{slug}/{thread}/summon-status"]), ...O(ge, ["POST /db/agent"]), ...O(pe, ["GET /types", "GET /types/{slug}"]), ...O(Skr, ["POST /types/{slug}/create"]), ...O((0, import_chunk_78g0060s.S)("type_instances"), ["GET /types/{slug}/instances"]), ...O(me, ["GET /types/{slug}/files/{a}", "GET /types/{slug}/files/{a}/{b}", "GET /types/{slug}/files/{a}/{b}/{c}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}", "GET /types/{slug}/files/{a}/{b}/{c}/{d}/{e}"]), ...O(ykr, ["POST /subscribe/{slug}", "POST /unsubscribe/{slug}"]), ...O((0, import_chunk_78g0060s.S)("delete"), ["DELETE /{slug}"]), ...O(vys, ["GET /perm/{slug}", "PATCH /perm/{slug}"]), ...O((0, import_chunk_78g0060s.S)("favorites"), ["POST /favorite/{slug}", "DELETE /favorite/{slug}"]), ...[]].sort((e, n) => fe(e) - fe(n));
function O(e, n) {
  return n.map((r) => {
    let [a, d] = r.split(" ");
    return { method: a, pattern: d.split("/"), family: e };
  });
}
function fe(e) {
  return (0, import_chunk_4smdap7r.U)(e.pattern, (n) => n.startsWith("{"));
}
function $ln(e, n) {
  let r = n.slice(10).replace(/[?#].*$/s, "").split("/");
  return nt.find((d) => d.method === e && d.pattern.length === r.length && d.pattern.every((y, p) => y.startsWith("{") ? r[p] !== "" : y === r[p]))?.family ?? null;
}
var Tys = "tengu_cobalt_plinth_madder";
function Jpe() {
  if (!(0, import_chunk_6e68m1dj.fT)()) return false;
  if ((0, import_chunk_865at33z.Idt)() !== void 0) return false;
  if (!(0, import_chunk_865at33z.b)("tengu_cobalt_plinth_sorrel", true)) return false;
  if (!(0, import_chunk_6e68m1dj.hn)() && !(0, import_chunk_865at33z.b)(Tys, true)) return false;
  return (0, import_chunk_865at33z.bRl)();
}
function gV() {
  return (0, import_chunk_f9x2f6cx.Y)();
}
function mj(e = null) {
  return Jpe() && !he(e);
}
function he(e) {
  if (!(0, import_chunk_865at33z.wzt)() && !be()) return false;
  if (e !== null && Bln(e)) return false;
  let n = (0, import_chunk_0rkwgmhx.se)().frameRelay;
  if (!n.botContextNoted) n.botContextNoted = true, (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "bot_context_not_served", { hosted: (0, import_chunk_6e68m1dj.hn)() });
  return true;
}
function Gbe() {
  return (0, import_chunk_6e68m1dj.hn)() && Jpe();
}
var rt = "tengu_cobalt_plinth_medlar";
function be() {
  return (0, import_chunk_6e68m1dj.Ru)() && (0, import_chunk_865at33z.b)(rt, false) && (0, import_chunk_865at33z.iAs)();
}
function Uln() {
  if ((0, import_chunk_6e68m1dj.hn)()) return (0, import_chunk_865at33z.wzt)() && (0, import_chunk_865at33z.wGn)();
  return be();
}
function xEt() {
  return (0, import_chunk_6e68m1dj.fT)() && (0, import_chunk_865at33z.b)("tengu_cobalt_plinth_fennel", false) && Uln();
}
var ot = "tengu_cobalt_plinth_comfrey";
function bkr() {
  return (0, import_chunk_6e68m1dj.Ru)() && (0, import_chunk_865at33z.b)(ot, false) && xEt();
}
function Bln(e) {
  return et.has(e) && (0, import_chunk_6e68m1dj.hn)() && (0, import_chunk_865at33z.b)(tt, false) && (0, import_chunk_865at33z.kRl)();
}
function r9(e) {
  return ((0, import_chunk_0rkwgmhx.se)().frameRelay.declinedUntil.get(e) ?? 0) > Date.now();
}
function zbe(e, n = false) {
  let r = (0, import_chunk_0rkwgmhx.se)().frameRelay, a = Date.now() + W;
  if (r.declinedUntil.set(e, a), n) r.hopFailedUntil.set(e, a);
  else r.hopFailedUntil.delete(e);
}
function Cys(e) {
  return ((0, import_chunk_0rkwgmhx.se)().frameRelay.hopFailedUntil.get(e) ?? 0) > Date.now();
}
function Wln(e) {
  return ((0, import_chunk_0rkwgmhx.se)().frameRelay.servedUntil.get(e) ?? 0) > Date.now();
}
function hRe(e) {
  let n = (0, import_chunk_0rkwgmhx.se)().frameRelay;
  n.declinedUntil.delete(e), n.servedUntil.set(e, Date.now() + W), n.vouched.add(e);
}
function PEt(e) {
  return (0, import_chunk_0rkwgmhx.se)().frameRelay.vouched.has(e);
}
function Ays(e) {
  (0, import_chunk_0rkwgmhx.se)().frameRelay.vouched.delete(e);
}
function at(e) {
  return ((0, import_chunk_0rkwgmhx.se)().frameRelay.directRefusedUntil.get(e) ?? 0) > Date.now();
}
function wkr(e) {
  return e.ok && e.status === 403 && Rys(e.data);
}
function Rys(e) {
  return typeof e === "string" && e.trimStart().startsWith(hZ);
}
function de(e, n) {
  if (!n.ok) return;
  let { directRefusedUntil: r } = (0, import_chunk_0rkwgmhx.se)().frameRelay;
  if (wkr(n)) r.set(e, Date.now() + W);
  else r.delete(e);
}
function VWt(e) {
  if (Gbe() || !(e === 401 || e === 403 || e === 404)) return false;
  if (PEt(import_chunk_865at33z.FN)) {
    if (e !== 404) Ays(import_chunk_865at33z.FN);
    return false;
  }
  return zbe(import_chunk_865at33z.FN), true;
}
function eYe(e) {
  if (Gbe() || PEt(import_chunk_865at33z.FN)) return;
  if (e === void 0 || e === 499) zbe(import_chunk_865at33z.FN, true);
}
var Se = () => true;
function V(e, n, r) {
  (0, import_chunk_0rkwgmhx.se)().frameRelay.tunnelDeclinedUntil.set(e, Date.now() + W), (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "tunnel_declined", { family: e, cause: (0, import_chunk_78g0060s.f)(n), status: r });
}
var Te = /* @__PURE__ */ new WeakSet();
function ce(e) {
  return typeof e === "object" && e !== null && Te.has(e);
}
async function zyo(e, n, r, a, d) {
  let p = ((0, import_chunk_0rkwgmhx.se)().frameRelay.tunnelDeclinedUntil.get(d) ?? 0) > Date.now() ? void 0 : ne();
  if (p !== void 0) {
    let c = 0;
    try {
      let g = await C(e, n, r, { ...a, host: "frame", auth: "session-jwt", frameTunnel: p, maxRedirects: 0 });
      if (!g.ok || hle(g)) return { res: g, tunnelled: true };
      if (c = g.status, c >= 500 || c === 499) return V(d, "hop_failed", c), { res: g, tunnelled: true };
    } catch (g) {
      if ((0, import_chunk_3jjr3wje.wd)(g)) throw g;
      if (!ee(g)) {
        if (V(d, "threw", 0), typeof g === "object" && g !== null) Te.add(g);
        throw g;
      }
    }
    V(d, c === 0 ? "never_opened" : "refused", c);
  }
  return { res: await C(e, (0, import_chunk_865at33z.vRl)(n), r, { ...a, host: "ccr-gateway", auth: "session-jwt", maxRedirects: 0 }), tunnelled: false };
}
function C(e, n, r, a) {
  switch (e) {
    case "GET":
      return import_chunk_865at33z.zt.get(n, a);
    case "POST":
      return import_chunk_865at33z.zt.post(n, r, a);
    case "PATCH":
      return import_chunk_865at33z.zt.patch(n, r, a);
    case "DELETE":
      return import_chunk_865at33z.zt.delete(n, r, a);
  }
}
function st(e, n, r, a) {
  if (gV()) throw Error("frameApi: this session may not make the direct call");
  let { recoverOAuth401: d, gzipBody: y, ...p } = a, R = { ...p, host: "frame", auth: "claude-ai-oauth", maxRedirects: 0, validateStatus: Se, ...d && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID && { recoverOAuth401: d } }, { streamUpload: c } = p;
  return ie({ isRead: e === "GET", signal: p.signal, timeoutMs: R.timeout ?? import_chunk_865at33z.w4i, send: (g, h) => {
    let P = { ...R, ...g && { freshConnection: g }, ...h !== void 0 && { timeout: h } };
    if (e !== "POST" || y === void 0 || c === void 0) return C(e, n, r, P);
    return ae({ url: `${(0, import_chunk_865at33z.jRo)()}${n}`, body: r, storageV5: p.storageV5, signal: p.signal, onEncoding: y.onEncoding, send: (D) => D === null ? C(e, n, r, P) : C(e, n, D, { ...P, headers: { ...P.headers, ...oe }, streamUpload: { ...c, tailFloorMs: () => y.tailFloorMs } }) });
  } });
}
function it() {
  return (0, import_chunk_865at33z.Idt)() !== void 0 ? import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACTS_API_TOKEN : void 0;
}
function Vyo() {
  let e = it();
  if (e) return (0, import_chunk_865at33z.Mdt)(`Bearer ${e}`);
  return (0, import_chunk_865at33z.GRo)();
}
async function P1i(e) {
  if (!(0, import_chunk_865at33z.W0)()) return;
  try {
    await (0, import_chunk_865at33z.od)({ credentials: e });
  } catch {
  }
}
function hle(e) {
  return e.ok && e.response.headers?.[Ne] !== void 0;
}
function q(e) {
  return e.ok && !hle(e) && He.has(e.status);
}
function xys(e) {
  return { refused: q(e), vouched: hle(e) || e.ok && e.status < 300 };
}
function rUn() {
  return Jpe() && !(0, import_chunk_6e68m1dj.hn)();
}
function Ee(e, n, r, a = false) {
  let d = r !== "fallback", y = r === "strict" && (0, import_chunk_6e68m1dj.fT)(), p = gV(), R = Jpe(), c = R ? $ln(e, n) : null;
  if (R && he(c)) return p || y || r === "only" && (0, import_chunk_6e68m1dj.hn)() ? { leg: "not-served", relaying: false, family: null } : { leg: "direct", relaying: false, family: null };
  let g = R;
  if (c === null) return { leg: p || y || d && (0, import_chunk_6e68m1dj.hn)() && g ? "unsent" : "direct", relaying: g, family: c };
  let h = (r === "fallback" || r === "bound" && !we(c)) && !(a && (0, import_chunk_6e68m1dj.hn)() && at(c));
  if (!p && r9(c) && (h || !(0, import_chunk_6e68m1dj.hn)() && !y && Cys(c))) return { leg: "direct", relaying: g, family: c };
  return { leg: "relay", relaying: true, family: c };
}
function we(e) {
  return gV() || (0, import_chunk_6e68m1dj.hn)() && (e === null || !Bln(e));
}
function lt(e, n) {
  switch (e) {
    case "strict":
      return (0, import_chunk_6e68m1dj.fT)();
    case "only":
      return (0, import_chunk_6e68m1dj.hn)();
    case "bound":
      return we(n);
    case "fallback":
      return false;
  }
}
function kkr(e, n, r = "fallback") {
  return gV() || Ee(e, n, r).leg === "relay" ? "relay" : "direct";
}
async function k(e, n, r, a, d = "fallback") {
  let y = gV() || lt(d, $ln(e, n)), { relayProbe: p, relayOnCredentialRefusal: R, ...c } = a, g = async () => ({ ...await st(e, n, r, c), route: "direct", fromFrame: true }), h = Ee(e, n, d, R), P = h.relaying && !(0, import_chunk_6e68m1dj.hn)(), D = (o, A) => d === "fallback" ? { ok: false, reason: "no-auth", detail: `its artifact connection did not carry the request${A ? ` (HTTP ${A})` : ""}, so nothing was sent${o === "relay-unavailable" ? "; one retry is safe" : ""}`, route: "relay", fromFrame: false } : { ok: false, reason: o, status: A, route: "relay", fromFrame: false }, M = (o, A) => ((0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "relay_only_unavailable", { ...h.family !== null && { family: h.family }, status: o, probed: A, ...P && { runner: true } }), D("relay-unavailable", o));
  if (h.leg === "not-served") return D("relay-not-served", 0);
  if (h.leg === "unsent") return M(0, false);
  let B, F;
  if (h.leg === "relay") F = h.family;
  else {
    let o = await g();
    if (h.family === null || !(0, import_chunk_6e68m1dj.hn)()) return o;
    if (de(h.family, o), !o.ok || !wkr(o)) return o;
    if ((0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "direct_refused", { family: h.family, status: o.status, reoffered: R === true }), !R) return o;
    F = h.family, B = o;
  }
  let G = false, x = () => ({ ...P && { runner: true }, ...G && { tunnel: true }, ...B !== void 0 && { reoffered: true } }), I = async () => {
    if (B !== void 0) return B;
    let o = await g();
    if (!P) {
      if (de(F, o), o.ok && wkr(o)) (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "direct_refused", { family: F, status: o.status, reoffered: false });
    }
    return o;
  }, { refreshOAuth: ut, isBackground: ft, credentials: dt, recoverOAuth401: ct, gzipBody: yt, ...X } = c, K = async (o, A, L, v) => {
    let Q = await zyo(o, A, L, { ...v, headers: Je(v.headers), validateStatus: Se }, F);
    return G = Q.tunnelled, Q.res;
  }, z = async (o, A) => {
    if (zbe(F, o === 0 || o >= 500), y) return M(o, A);
    let L;
    try {
      let v = await I();
      return L = v.ok ? v.status : void 0, { ...v, gatewayDeclined: o };
    } finally {
      (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "relay_unavailable", { family: F, status: o, probed: A, ...L !== void 0 && { direct_status: L }, ...x() });
    }
  };
  if (p !== void 0 && !Wln(F)) {
    let o;
    try {
      o = await K("GET", p, void 0, { signal: X.signal, timeout: Xe, maxContentLength: Ke });
    } catch (A) {
      if ((0, import_chunk_3jjr3wje.wd)(A)) throw A;
      return G = ce(A), z(0, true);
    }
    if (!o.ok) return y ? M(0, true) : I();
    if (le(o)) (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "relay_policy_refused", { family: F, status: o.status, probed: true, ...x() });
    else if (q(o) || !hle(o) && (o.status >= 500 || o.status === 499)) return z(o.status, true);
    else if (!hle(o) && o.status >= 300) return y ? M(o.status, true) : I();
    hRe(F);
  }
  let E;
  try {
    E = await K(e, n, r, X);
  } catch (o) {
    if (!(0, import_chunk_3jjr3wje.wd)(o)) {
      if (G = ce(o), (0, import_chunk_3jjr3wje.gD)(o) !== void 0) return z(0, false);
      if (zbe(F, true), (0, import_chunk_cqa9hrgx.m)("artifact_frame_relay", "request_error", { family: F, ...x() }), typeof o === "object" && o !== null) ye.add(o);
    }
    throw o;
  }
  if (!E.ok) return y ? M(0, false) : I();
  if (le(E) || ue(E)) {
    let o = ue(E);
    return hRe(F), (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", o ? "relay_approval_refused" : "relay_policy_refused", { family: F, status: E.status, ...x() }), { ...E, route: "relay", fromFrame: false, gatewayPolicy: o ? "unapproved" : "network-off" };
  }
  if (q(E)) return z(E.status, false);
  let Z = hle(E), J = Z || E.status < 300;
  if (J) hRe(F), (0, import_chunk_cqa9hrgx.u)("artifact_frame_relay", { family: F, status: E.status, upstream: Z, ...x() });
  else if (E.status >= 500 || E.status === 499) {
    let o = d !== "fallback" && E.status === 503 ? (0, import_chunk_865at33z.qp)(E.response.headers?.["retry-after"]) : void 0;
    if (o !== void 0) return (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "relay_busy", { family: F, status: E.status, retry_after_ms: o, ...x() }), { ...E, route: "relay", fromFrame: false, gatewayRetryAfterMs: o };
    zbe(F, true), (0, import_chunk_cqa9hrgx.m)("artifact_frame_relay", "relay_error", { family: F, status: E.status, ...x() });
  } else (0, import_chunk_cqa9hrgx.l)("artifact_frame_relay", "relay_refused", { family: F, status: E.status, ...x() });
  return { ...E, route: "relay", fromFrame: J };
}
function SN(e) {
  return typeof e === "object" && e !== null && ye.has(e);
}
function gRe(e) {
  return e.route === "relay" ? (0, import_chunk_78g0060s.S)("relay") : (0, import_chunk_78g0060s.S)("http");
}
function G0e(e) {
  return SN(e) ? (0, import_chunk_78g0060s.S)("relay") : (0, import_chunk_78g0060s.S)("http");
}
var im = { get(e, n) {
  return k("GET", e, void 0, n);
}, post(e, n, r) {
  return k("POST", e, n, r);
}, postRelayOnly(e, n, r) {
  return k("POST", e, n, r, "only");
}, postRelayStrict(e, n, r) {
  return k("POST", e, n, r, "strict");
}, getRelayOnly(e, n) {
  return k("GET", e, void 0, n, "only");
}, postRelayBound(e, n, r) {
  return k("POST", e, n, r, "bound");
}, getRelayBound(e, n) {
  return k("GET", e, void 0, n, "bound");
}, patchRelayOnly(e, n, r) {
  return k("PATCH", e, n, r, "only");
}, deleteRelayOnly(e, n) {
  return k("DELETE", e, void 0, n, "only");
} };
