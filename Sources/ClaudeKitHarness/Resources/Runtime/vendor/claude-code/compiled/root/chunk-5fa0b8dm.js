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
var chunk_5fa0b8dm_exports = {};
__export(chunk_5fa0b8dm_exports, {
  Dzl: () => Dzl,
  H7r: () => H7r,
  Hzl: () => Hzl,
  Lzl: () => Lzl,
  NRn: () => NRn,
  v8o: () => v8o,
  ysr: () => ysr
});
module.exports = __toCommonJS(chunk_5fa0b8dm_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_fwgyarbe = require("/$bunfs/root/chunk-fwgyarbe.js");
var import_chunk_w82axegn = require("/$bunfs/root/chunk-w82axegn.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_yt7wk02j = require("/$bunfs/root/chunk-yt7wk02j.js");
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_chunk_e1ww8aev = require("/$bunfs/root/chunk-e1ww8aev.js");
var import_chunk_shs9e3r5 = require("/$bunfs/root/chunk-shs9e3r5.js");
var import_chunk_d19q7hh0 = require("/$bunfs/root/chunk-d19q7hh0.js");
var import_chunk_w71cxznt = require("/$bunfs/root/chunk-w71cxznt.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var L = /* @__PURE__ */ new Set(["x-upload-token", "content-type"]), z = 4096, q = 12e4, H = 4096, j = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ sha256: (0, import_chunk_adx6804h.n)(), size: (0, import_chunk_adx6804h.E)() })), W = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.v)("already_used") })), I = { 400: "put_hash_mismatch", 403: "put_refused", 409: "put_already_used", 410: "put_expired", 413: "put_size_mismatch", 429: "put_busy", 503: "put_busy" }, Y = 2, J = 2e3, X = 1e4;
async function M(e, r, i, m, u, h) {
  let S = performance.now(), d = (0, import_chunk_865at33z.Odt)(e.url), g = d === void 0 ? void 0 : new URL(e.url);
  if (d === void 0 || g === void 0 || g.search !== "" || g.hash !== "" || !m.endsWith("/") || !g.pathname.startsWith(m) || !/^[A-Za-z0-9_-]{1,256}$/.test(g.pathname.slice(m.length))) return "put_url_refused";
  let R = { "content-type": "application/octet-stream" };
  for (let [o, P] of Object.entries(e.headers)) {
    if (!L.has(o.toLowerCase()) || P.length > z || /[^\x20-\x7e]/.test(P)) return "put_header_refused";
    R[o.toLowerCase()] = P;
  }
  let _, b, O = `/${g.pathname.slice(1)}`, D = { auth: "none", baseUrl: d, headers: R, maxRedirects: 0, maxBodyLength: r.length, maxContentLength: H, timeout: q, signal: u, validateStatus: () => true }, T = { ...D, freshConnection: true };
  try {
    for (let o = 0; ; o++) {
      let P = performance.now();
      b = void 0;
      let f;
      try {
        f = await import_chunk_865at33z.zt.put(O, r, _ === void 0 ? D : T);
      } catch (a) {
        let C = (0, import_chunk_865at33z.rh)(a)?.code ?? "";
        if (_ !== void 0 || u.aborted || !(0, import_chunk_np189awg.gI)(a) || import_chunk_865at33z.D4.has(C) || import_chunk_865at33z.noe.has(C) || (0, import_chunk_jv7av99m.w)(a) === "ECONNABORTED" && a instanceof Error && a.cause === void 0) throw a;
        _ = (0, import_chunk_d19q7hh0.bU)(a, P), (0, import_chunk_w578pjby.t)("[file inputs] upload ended in a transport error: sending it once more on a fresh connection"), f = await import_chunk_865at33z.zt.put(O, r, T);
      }
      if (!f.ok) return f.reason === "essential-traffic-only" ? "essential_traffic" : "egress_blocked";
      if (b = f.status, f.status === 409 && (o > 0 || _ !== void 0) && W().safeParse(f.data).success) return;
      if (f.status === 200) {
        let a = j().safeParse(f.data);
        return a.success && a.data.sha256 === i && a.data.size === r.length ? void 0 : "put_bad_answer";
      }
      let F = I[f.status] ?? "put_failed";
      if (F !== "put_busy" || o === Y) return F;
      let y = (0, import_chunk_865at33z.qp)(f.response.headers["retry-after"]);
      if (await (0, import_chunk_5appeerh.K)(y !== void 0 ? Math.min(y, X) : J, u), u.aborted) return "canceled";
    }
  } catch (o) {
    if (u.aborted) return "canceled";
    return (0, import_chunk_w578pjby.t)(`[file inputs] upload threw (${(0, import_chunk_shs9e3r5.Wae)(o)}); its text is not logged, as it can name the file or the upload address`, { level: "error" }), h?.((0, import_chunk_d19q7hh0.bU)(o, S)), (0, import_chunk_jv7av99m.w)(o) === "ERR_BAD_RESPONSE" ? "put_bad_answer" : "put_network";
  } finally {
    if (_ !== void 0) (0, import_chunk_cqa9hrgx.l)("mcp_file_input_upload", "put_resent", { ..._, ...b !== void 0 && { http_status: b }, ...u.aborted && { cancelled: true } });
  }
}
var te = [import_chunk_6mfepmbb.p3, import_chunk_6mfepmbb.qR, import_chunk_6mfepmbb.iEe.attach, import_chunk_6mfepmbb.iEe.product], re = 8e3, Hzl = Math.min(4, Math.max(1, (0, import_os.availableParallelism)() >> 1)), k = (0, import_chunk_t57w17k7.de)({ notEnded: 0 }, (e) => {
  e.notEnded = 0;
});
function v8o(e) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true ? AbortSignal.any([e, AbortSignal.timeout(re)]) : void 0;
}
async function Dzl(e, r, i) {
  if (!te.some((h) => e.startsWith(`${h}/`))) return;
  let m;
  if (i.aborted) m = "wait_over";
  else if (k.notEnded >= Hzl) m = "earlier_fsyncs_not_ended";
  else {
    k.notEnded++;
    let h = (0, import_chunk_yt7wk02j.tbe)(e, r, (d) => d.sync()).finally(() => {
      k.notEnded--;
    }), S = await (0, import_chunk_5appeerh.Tn)(h, i, () => Error("the wait is over")).catch(() => ({ refusal: i.aborted ? "wait_over" : "threw" }));
    m = "refusal" in S ? S.refusal : void 0;
  }
  let u = i.aborted && i.reason?.name !== "TimeoutError";
  if (m !== void 0 && !u) (0, import_chunk_w578pjby.t)(`[file inputs] did not wait for the file store to take a file on its mount (${m})`, { level: "error" });
}
var ne = 8388608;
function ysr({ screen: e, maxFileBytes: r, maxTotalBytes: i, uploadPathPrefix: m, namesResolvedPaths: u = false, acceptsOwnJobTmp: h = false, putsAtOnce: S = 1, onRejectedPastScreen: d, onPutRequestError: g }) {
  return { async hash(R, _) {
    let b = v8o(_), O = [], D = 0;
    for (let T of R) {
      if (_.aborted) return [...O, { path: T, code: "canceled" }];
      let o = await H7r(T, e, r, { acceptsOwnJobTmp: h, onRejectedPastScreen: d, settleUntil: b });
      if ("code" in o) return [...O, u ? o : { path: T, code: o.code }];
      if (D += o.buf.length, D > i) return [...O, { path: T, code: "too_large_total" }];
      O.push({ path: T, name: o.name, size: o.buf.length, sha256: o.sha256 });
    }
    return O;
  }, async put(R, _) {
    let b = false, O = (0, import_chunk_w71cxznt.kLe)(S), D = (0, import_chunk_w71cxznt.IEl)(S, ne, (y, a) => a.length, async ({ sha256: y, url: a, headers: C }, A) => {
      if (b) return "canceled";
      let x = "put_failed";
      try {
        x = await M({ url: a, headers: C }, A, y, m, _, g);
      } finally {
        b ||= x !== void 0;
      }
      return x;
    }), T = [], o, P = 0;
    try {
      for (let y of R) {
        let { path: a } = y, C = await O.acquire();
        if (b) break;
        if (_.aborted) {
          o = { path: a, code: "canceled" };
          break;
        }
        let A = await H7r(a, e, r, { acceptsOwnJobTmp: h, onRejectedPastScreen: d });
        if ("code" in A) {
          o = A.code === "resolves_elsewhere" ? { path: a, code: "changed" } : A;
          break;
        }
        if (P += A.buf.length, P > i) {
          o = { path: a, code: "too_large_total" };
          break;
        }
        if (A.sha256 !== y.sha256) {
          o = { path: a, code: "changed" };
          break;
        }
        let x = D(y, A.buf).then((U) => U === void 0 ? { path: a, ok: true } : { path: a, code: U }).finally(C);
        x.catch(() => {
        }), T.push(x);
      }
    } finally {
      await Promise.allSettled(T);
    }
    let f = await Promise.all(T), F = f.findIndex((y) => "code" in y);
    return F !== -1 ? f.slice(0, F + 1) : o === void 0 ? f : [...f, o];
  } };
}
function oe(e, r) {
  let i = (0, import_chunk_n2dbhmj2.Fa)(e);
  if (i === null) return true;
  return e !== r && N(i) !== N(r) && !(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && (0, import_chunk_n74jpb9a.KDe)(i, r, { product: import_chunk_6mfepmbb.qR, attach: import_chunk_6mfepmbb.p3 })) && !((0, import_chunk_6e68m1dj.hn)() && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && (0, import_chunk_n74jpb9a.KDe)(i, r, import_chunk_6mfepmbb.iEe));
}
function N(e) {
  return (0, import_chunk_p1ewvgeh.PRe)((0, import_chunk_z6pfqf6e.pn)(e.length > 1 && e.endsWith(import_path.sep) ? e.slice(0, -1) : e)).replace(/^[a-z]:/, (r) => r.toUpperCase());
}
async function NRn(e, r, i = {}) {
  return await Lzl(e, r, i) !== void 0;
}
async function Lzl(e, r, { fromChat: i = false, acceptsOwnJobTmp: m = false } = {}) {
  let u = await (0, import_chunk_w82axegn.J6)(e, r, { readable: (0, import_chunk_e1ww8aev.wsr)(r) || m && (0, import_chunk_p1ewvgeh.VSo)((0, import_path.normalize)(r)) });
  if (u !== void 0 && u !== "named_fork") return u;
  return !i && [e, r].some((h) => (0, import_chunk_w82axegn.c0)(h) || (0, import_chunk_w82axegn.wG)(h)) ? "credential_name" : u;
}
async function H7r(e, r, i, { followsLinks: m = false, acceptsOwnJobTmp: u = false, onRejectedPastScreen: h, settleUntil: S } = {}) {
  let d = await r(e);
  if (d === void 0) return { path: e, code: "path_rejected" };
  if (d.requiredDigest === void 0 && await NRn(e, d.realPath, { fromChat: d.fromChat, acceptsOwnJobTmp: u })) return (0, import_chunk_w578pjby.t)("[file inputs] a path was rejected: a credential, Claude's own, or a named fork"), h?.(e, "credential_or_own_file"), { path: e, code: "path_rejected" };
  if (!m && oe(e, d.realPath) && !(d.requiredDigest !== void 0 && (0, import_chunk_n2dbhmj2.Fa)(e) === (0, import_path.join)((0, import_chunk_fwgyarbe.ov)(), (0, import_path.basename)(d.realPath)))) return { path: e, code: "resolves_elsewhere", resolved: d.realPath };
  let g = await (0, import_chunk_yt7wk02j.ZWe)(d.realPath);
  if (import_chunk_e1ww8aev.h0t.test(g)) return { path: e, code: "name_direction" };
  if (S !== void 0) await Dzl(d.realPath, i, S);
  let R = await (0, import_chunk_yt7wk02j.tbe)(d.realPath, i);
  if (!("buf" in R)) return { path: e, code: R.refusal };
  let _ = (0, import_chunk_ccm69jjy.Je)(R.buf);
  if (d.requiredDigest !== void 0 && _ !== d.requiredDigest) return h?.(e, "attachment_changed"), { path: e, code: "path_rejected" };
  return { buf: R.buf, name: g, sha256: _ };
}
