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
var chunk_kj84g0v7_exports = {};
__export(chunk_kj84g0v7_exports, {
  B$a: () => B$a,
  Kri: () => Kri,
  U$a: () => U$a,
  Vri: () => Vri,
  W$a: () => W$a,
  j$a: () => j$a,
  nJt: () => nJt,
  qri: () => qri,
  uRn: () => uRn
});
module.exports = __toCommonJS(chunk_kj84g0v7_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_path = require("path");
function nJt(e) {
  return (0, import_chunk_qdcbcsg7.mt)().signInClears.get(e) ?? 0;
}
function u(e) {
  (0, import_chunk_qdcbcsg7.mt)().signInClears.set(e, nJt(e) + 1);
}
function U$a(e) {
  let { signInClearsAsked: n } = (0, import_chunk_qdcbcsg7.mt)();
  return n.set(e, (n.get(e) ?? 0) + 1), { [Symbol.dispose]() {
    n.set(e, (n.get(e) ?? 0) - 1);
  } };
}
function B$a(e, n) {
  let { signInClearsAsked: t, signInClearsUnderWay: s } = (0, import_chunk_qdcbcsg7.mt)(), r = (0, import_chunk_yz5b8aaa.kc)(e, n);
  return (t.get(r) ?? 0) > 0 || (s.get(r) ?? 0) > 0;
}
function Vri(e) {
  let { signInClearsUnderWay: n } = (0, import_chunk_qdcbcsg7.mt)();
  return n.set(e, (n.get(e) ?? 0) + 1), { [Symbol.dispose]() {
    u(e), n.set(e, (n.get(e) ?? 0) - 1);
  } };
}
function uRn(e, n) {
  return n !== void 0 && (nJt(e) !== n || ((0, import_chunk_qdcbcsg7.mt)().signInClearsUnderWay.get(e) ?? 0) > 0);
}
function Kri(e, n) {
  let t = n.replace(/[^a-zA-Z0-9]/g, "_");
  return (0, import_path.join)(e, `mcp-refresh-${t}.lock`);
}
async function W$a(e, n) {
  let t = (0, import_chunk_hazyxdac.qde)();
  for (let s = 0; s < 20 && t !== null; s++) try {
    let r = await (0, import_chunk_2yx6c1y2.Rc)(Kri(t, n), { realpath: false, stale: 6e4, update: 5e3, onCompromised: () => (0, import_chunk_k449cc64.He)(e, "Refresh lock was compromised in a clear") }), o = () => (0, import_chunk_2yx6c1y2.Kg)(r, "MCP refresh lock"), i = setTimeout(o, 3e4);
    return { async [Symbol.asyncDispose]() {
      clearTimeout(i), await o();
    } };
  } catch (r) {
    let o = (0, import_chunk_jv7av99m.w)(r);
    if (o !== "ELOCKED") {
      (0, import_chunk_k449cc64.He)(e, `Clearing without the refresh lock: ${o}`);
      return;
    }
    await (0, import_chunk_5appeerh.K)(250);
  }
  return;
}
var g = 16;
class qri {
  clearsOf = /* @__PURE__ */ new Map();
  clearsOfLast;
  served(e, ...n) {
    this.clearsOfLast = e, this.granted(e, ...n);
  }
  granted(e, ...n) {
    for (let t of n) this.keep(e, t);
  }
  clearsAt(...e) {
    for (let n of e) {
      let t = this.clearsOf.get(n ?? "");
      if (t !== void 0) return t;
    }
    return this.clearsOfLast;
  }
  async send(e, n) {
    let t = e?.body instanceof URLSearchParams && e.body.get("grant_type") === "refresh_token" ? e.body.get("refresh_token") : null;
    if (t === null) return await n();
    let s = this.clearsAt(t), r = await n();
    if (!r.ok) return r;
    let o = await r.clone().json().catch(() => null);
    for (let i of [o?.access_token, o?.refresh_token]) if (typeof i === "string") this.granted(s, i);
    return r;
  }
  keep(e, n) {
    if (e === void 0 || !n) return;
    let t = this.clearsOf.get(n);
    this.clearsOf.delete(n), this.clearsOf.set(n, Math.max(e, t ?? e));
    for (let s of this.clearsOf.keys()) {
      if (this.clearsOf.size <= g) break;
      this.clearsOf.delete(s);
    }
  }
}
async function j$a(e, n, t, s) {
  let r = (0, import_chunk_zzrn5zap.Er)();
  if (t === void 0) return r.mutate(s);
  let o = (0, import_chunk_yz5b8aaa.kc)(e, n), i = () => uRn(o, t), c = false, l = await r.mutate((a) => {
    let f = a.mcpOAuth?.[o];
    return c = !f?.accessToken && !f?.refreshToken && f?.expiresAt === void 0, c || i() ? a : s(a);
  });
  if (c && !i()) if (await (0, import_chunk_yz5b8aaa.Nmn)(e, n) === false) u(o);
  else l = await r.mutate((a) => i() ? a : s(a));
  if (i()) {
    (0, import_chunk_k449cc64.He)(e, "Not saving tokens for a sign-in that was cleared");
    return;
  }
  return l;
}
