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
var chunk_pkz4wjtb_exports = {};
__export(chunk_pkz4wjtb_exports, {
  $Wa: () => $Wa,
  Dsr: () => Dsr,
  KRn: () => KRn,
  Oii: () => Oii,
  Pii: () => Pii,
  SXr: () => SXr,
  T0t: () => T0t
});
module.exports = __toCommonJS(chunk_pkz4wjtb_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_akwvpp7y = require("/$bunfs/root/chunk-akwvpp7y.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_h70wj3wp = require("/$bunfs/root/chunk-h70wj3wp.js");
var import_chunk_tps03s5j = require("/$bunfs/root/chunk-tps03s5j.js");
var import_crypto = require("crypto");
var import_url = require("url");
var b = "https://downloads.claude.ai/model-catalog/v1/catalog.json", g = ".raw-sig.json";
function h() {
  return { url: void 0, publicKey: void 0 };
}
function S() {
  let { url: e, publicKey: r } = h();
  if (e === void 0 && r === void 0) return { url: void 0, publicKey: void 0 };
  let n = (0, import_chunk_2yx6c1y2.Kb)();
  if (!(0, import_chunk_6mfepmbb.ZX)(n) && !(n === "remote" && (0, import_chunk_xcgcdx61.nc)())) return (0, import_chunk_w578pjby.t)(`[publishedCatalog] ignoring managed model-catalog source settings from a non-admin policy origin (${n ?? "none"}${n === "remote" ? ", unconfirmed by the server" : ""})`), { url: void 0, publicKey: void 0 };
  return { url: e, publicKey: r };
}
function Dsr() {
  let { url: e, publicKey: r } = h();
  if (e === void 0 && r === void 0) return false;
  return (0, import_chunk_2yx6c1y2.Kb)() === "remote" && !(0, import_chunk_xcgcdx61.nc)();
}
function $Wa() {
  if (!Dsr()) return false;
  let { url: e } = h();
  if (e === void 0) return false;
  try {
    return m(new URL(e)) === "file";
  } catch {
    return false;
  }
}
function C(e = S()) {
  return e.url ?? L(import_chunk_c203g5kd.s.CLAUDE_CODE_MODEL_CATALOG_URL);
}
function Pii() {
  let e = C();
  if (e === void 0) return false;
  try {
    return m(new URL(e)) === "file";
  } catch {
    return false;
  }
}
function L(e) {
  let r = e?.trim();
  return r ? r : void 0;
}
function T0t({ ignoreEnvUrl: e = false } = {}) {
  let r = S(), n = (e ? r.url : C(r)) ?? b, o;
  try {
    o = new URL(n);
  } catch {
    return (0, import_chunk_w578pjby.t)("[publishedCatalog] configured catalog URL is not a URL; published path off"), { ok: false, reason: "invalid_url" };
  }
  let i = m(o);
  if (i === void 0) return (0, import_chunk_w578pjby.t)(`[publishedCatalog] configured catalog URL has unsupported scheme ${o.protocol}; published path off`), { ok: false, reason: "invalid_url" };
  if (i !== "file" && (0, import_chunk_akwvpp7y.pF)(o.hostname)) return (0, import_chunk_w578pjby.t)("[publishedCatalog] configured catalog URL names a loopback or metadata host; published path off"), { ok: false, reason: "invalid_url" };
  let a = o.toString();
  return { ok: true, source: { kind: i, url: a, trust: x(i, r), cacheKey: Oii(a) } };
}
function m(e) {
  if (e.protocol === "file:") return e.hostname === "" || e.hostname === "localhost" ? "file" : void 0;
  if (e.protocol !== "https:" && e.protocol !== "http:") return;
  return e.toString() === b ? "hosted" : "custom_url";
}
function x(e, r) {
  if (e === "hosted" || r.publicKey === void 0) return { kind: "compiled_roots", roots: import_chunk_h70wj3wp.Sin };
  if (r.url === void 0) return (0, import_chunk_w578pjby.t)("[publishedCatalog] a managed catalog public key is set but no managed catalog URL is; the env-named URL verifies against the compiled roots only"), { kind: "compiled_roots", roots: import_chunk_h70wj3wp.Sin };
  let n = (0, import_chunk_h70wj3wp.ncl)(r.publicKey);
  if (!n.ok) return (0, import_chunk_w578pjby.t)(`[publishedCatalog] the managed catalog public key is not a PEM SPKI RSA public key of at least ${import_chunk_h70wj3wp.RIi} bits (${n.reason}); custom source refused`), { kind: "untrusted", reason: "invalid_public_key" };
  return { kind: "managed_key", roots: [...import_chunk_h70wj3wp.Sin, { id: import_chunk_h70wj3wp.Uyr, spkiBase64: Buffer.from(n.der).toString("base64") }] };
}
function Oii(e) {
  return (0, import_crypto.createHash)("sha256").update(e).digest("hex").slice(0, 32);
}
function _(e) {
  return (0, import_url.fileURLToPath)(e.url);
}
var P = 1e4;
async function SXr(e, { etag: r, noCache: n = false } = {}) {
  try {
    return e.kind === "file" ? await O(e) : await T(e, { etag: r, noCache: n });
  } catch (o) {
    let { kind: i, status: a } = (0, import_chunk_jv7av99m.$i)(o);
    switch ((0, import_chunk_w578pjby.t)(`[publishedCatalog] fetch failed: ${i}${a !== void 0 ? ` ${a}` : ""}`), i) {
      case "timeout":
        return { status: "error", reason: "timeout" };
      case "network":
        return { status: "error", reason: "network" };
      case "auth":
      case "http":
        return a === void 0 ? { status: "error", reason: H(o) ? "too_large" : "network" } : { status: "error", reason: "http_status", httpStatus: a };
      case "other":
        return { status: "error", reason: "exception" };
    }
  }
}
async function T(e, { etag: r, noCache: n }) {
  let o = B(e.url), i = n ? { "Cache-Control": "no-cache", Pragma: "no-cache" } : void 0, a = await k(e.url, { responseType: "arraybuffer", timeout: P, maxContentLength: import_chunk_865at33z.w7e, maxBodyLength: import_chunk_865at33z.w7e, validateStatus: () => true, beforeRedirect: o, ...(r !== void 0 || i !== void 0) && { headers: { ...i, ...r !== void 0 && { "If-None-Match": r } } } }), u = a.status;
  if (u === 304 && r !== void 0) return (0, import_chunk_w578pjby.t)("[publishedCatalog] fetch: not modified"), { status: "not_modified", httpStatus: u };
  if (u < 200 || u >= 300) return (0, import_chunk_w578pjby.t)(`[publishedCatalog] fetch: HTTP ${u}`), { status: "error", reason: "http_status", httpStatus: u };
  let l = R(a.data);
  if (l.length > import_chunk_865at33z.w7e) return { status: "error", reason: "too_large", httpStatus: u };
  let f = void 0, c = false, d = await k(v(e.url), { responseType: "arraybuffer", timeout: P, maxContentLength: import_chunk_865at33z.fzt, maxBodyLength: import_chunk_865at33z.fzt, validateStatus: () => true, beforeRedirect: o, ...i !== void 0 && { headers: i } });
  if (d.status >= 200 && d.status < 300) {
    let p = R(d.data);
    if (p.length <= import_chunk_865at33z.fzt) c = true, f = (0, import_chunk_0jve1fep.et)(Buffer.from(p).toString("utf8"), false);
  } else (0, import_chunk_w578pjby.t)(`[publishedCatalog] sidecar fetch: HTTP ${d.status}`);
  return (0, import_chunk_w578pjby.t)(`[publishedCatalog] fetch ok: ${l.length} bytes${c ? ", sidecar present" : ", no sidecar"}`), { status: "ok", documentBytes: l, sidecar: f, hasSidecar: c, sidecarHttpStatus: d.status, etag: F(a.headers), httpStatus: u };
}
async function O(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return (0, import_chunk_w578pjby.t)("[publishedCatalog] file not read: a diskless session"), { status: "error", reason: "read_failed" };
  let r = _(e), n = (0, import_chunk_w578pjby.le)(), o;
  try {
    o = await n.readFileBytes(r, import_chunk_865at33z.w7e + 1);
  } catch (u) {
    return (0, import_chunk_w578pjby.t)(`[publishedCatalog] file read failed${(0, import_chunk_jv7av99m.J)(u) ? " (no such file)" : ""}`), { status: "error", reason: "read_failed" };
  }
  if (o.length > import_chunk_865at33z.w7e) return { status: "error", reason: "too_large" };
  let i = void 0, a = false;
  try {
    let u = await n.readFileBytes(`${r}${g}`, import_chunk_865at33z.fzt + 1);
    if (u.length <= import_chunk_865at33z.fzt) a = true, i = (0, import_chunk_0jve1fep.et)(u.toString("utf8"), false);
  } catch (u) {
    if (!(0, import_chunk_jv7av99m.J)(u)) (0, import_chunk_w578pjby.t)("[publishedCatalog] sidecar read failed");
  }
  return (0, import_chunk_w578pjby.t)(`[publishedCatalog] file read ok: ${o.length} bytes${a ? ", sidecar present" : ", no sidecar"}`), { status: "ok", documentBytes: new Uint8Array(o), sidecar: i, hasSidecar: a, sidecarHttpStatus: void 0, etag: void 0, httpStatus: void 0 };
}
function k(e, r) {
  return (0, import_chunk_3jjr3wje.Pee)(e) ? import_chunk_tps03s5j.tle.get(e, r) : import_chunk_np189awg.Xd.get(e, r);
}
function B(e) {
  let r = (0, import_chunk_3jjr3wje.Pee)(e), n = e.toLowerCase().startsWith("https:");
  return (o) => {
    let i = (0, import_chunk_akwvpp7y.Koe)(o), a = K(i), u = D(i), l = (0, import_chunk_akwvpp7y.a2)(e, i), f = n ? u === "https:" : l || u === "https:";
    if (!(a !== "" && (r ? (0, import_chunk_3jjr3wje.Pee)(a) : !(0, import_chunk_3jjr3wje.nL)(a)) && f && (l || !(0, import_chunk_akwvpp7y.pF)(a)))) throw Error("[publishedCatalog] redirect refused: a hop left the host the request was pinned to");
  };
}
function K(e) {
  try {
    return new URL(e).hostname.toLowerCase();
  } catch {
    return "";
  }
}
function D(e) {
  try {
    return new URL(e).protocol.toLowerCase();
  } catch {
    return "";
  }
}
function v(e) {
  let r = new URL(e);
  return r.pathname += g, r.toString();
}
function R(e) {
  if (e instanceof Uint8Array) return e;
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  if (typeof e === "string") return new TextEncoder().encode(e);
  return new Uint8Array(0);
}
function H(e) {
  return typeof e === "object" && e !== null && "code" in e && (e.code === "ERR_FR_MAX_BODY_LENGTH_EXCEEDED" || e.code === "ERR_BAD_RESPONSE");
}
function F(e) {
  let r = e?.etag;
  return (0, import_chunk_865at33z.Dxe)(r) ? r : void 0;
}
var U = "claude-code-model-catalog-v1\0", A = { name: "RSASSA-PKCS1-v1_5", hash: "SHA-512" };
async function KRn({ documentBytes: e, sidecar: r, roots: n, context: o = U }) {
  let i = (0, import_chunk_865at33z.HAl)().safeParse(r);
  if (!i.success) return { ok: false, reason: "sidecar_invalid" };
  let a = Buffer.from(i.data.signature, "base64");
  if (a.length === 0 || a.toString("base64") !== i.data.signature) return { ok: false, reason: "sidecar_invalid" };
  let u, l;
  for (let d of n) {
    let p = y((0, import_chunk_h70wj3wp.rcl)(d));
    if (await M(p) === i.data.publicKeySha256) {
      u = d, l = p;
      break;
    }
  }
  if (u === void 0 || l === void 0) return { ok: false, reason: "unknown_key" };
  let f;
  try {
    f = await crypto.subtle.importKey("spki", l, A, false, ["verify"]);
  } catch (d) {
    return (0, import_chunk_w578pjby.t)(`[publishedCatalog] trust root ${u.id} is not an importable RSA key: ${d instanceof Error ? d.name : "error"}`), { ok: false, reason: "key_unusable" };
  }
  let c;
  try {
    c = await crypto.subtle.verify(A.name, f, y(a), I(e, o));
  } catch {
    c = false;
  }
  return c ? { ok: true, rootId: u.id } : { ok: false, reason: "bad_signature" };
}
function I(e, r = U) {
  let n = new TextEncoder().encode(r), o = new Uint8Array(n.length + e.length);
  return o.set(n), o.set(e, n.length), o;
}
async function M(e) {
  let r = await crypto.subtle.digest("SHA-256", y(e));
  return Buffer.from(r).toString("hex");
}
function y(e) {
  let r = new Uint8Array(e.byteLength);
  return r.set(e), r;
}
