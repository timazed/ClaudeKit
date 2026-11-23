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
var chunk_vp3hv9ky_exports = {};
__export(chunk_vp3hv9ky_exports, {
  Aor: () => Aor,
  G$a: () => G$a,
  K$a: () => K$a,
  RYr: () => RYr,
  V$a: () => V$a,
  Xri: () => Xri,
  Yri: () => Yri,
  q$a: () => q$a,
  z$a: () => z$a
});
module.exports = __toCommonJS(chunk_vp3hv9ky_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
function Aor() {
  return (0, import_chunk_865at33z.b)("tengu_mcp_signed_out_fallback", true);
}
var y = 6048e5, A = 6e4;
function g(t) {
  if (t === void 0) return false;
  let e = Date.now() - t;
  return e > -A && e <= y;
}
function RYr(t, e, o) {
  if (!(0, import_chunk_yz5b8aaa.q6t)(t, e, o)) return false;
  if (!Aor()) return true;
  let f = (0, import_chunk_yz5b8aaa.kc)(t, e), c = o?.[f]?.discoveryState?.tokenlessRejectedAt;
  if (c !== void 0 && g(c)) return (0, import_chunk_qdcbcsg7.mt)().tokenlessRejections.set(f, c), true;
  return (0, import_chunk_yz5b8aaa.a9i)(t, e, o);
}
function Yri(t) {
  if (t?.tokenlessRejectedAt === void 0) return t;
  let { tokenlessRejectedAt: e, ...o } = t;
  return o;
}
var j = 6e4;
function G$a(t, e) {
  let o = (0, import_chunk_qdcbcsg7.mt)();
  o.rejectedStoredTokens.delete(t), o.tokenlessRejections.delete(t), o.savedAccessTokens.set(t, { accessToken: e, savedAt: Date.now() });
}
function z$a(t, e) {
  if (e?.discoveryState?.tokenlessRejectedAt !== void 0) return e.discoveryState.tokenlessRejectedAt;
  if (e?.accessToken || e?.refreshToken) return;
  let o = (0, import_chunk_qdcbcsg7.mt)().tokenlessRejections.get(t);
  return g(o) ? o : void 0;
}
function Xri(t, e) {
  return Aor() && (0, import_chunk_qdcbcsg7.mt)().rejectedStoredTokens.get(t) === e;
}
async function V$a(t, e, o) {
  let f = o?.lastAuthRejection;
  if (f === void 0 || f.accessToken !== void 0 || e.type !== "http" && e.type !== "sse" || !Aor()) return;
  let c = (0, import_chunk_yz5b8aaa.kc)(t, e), i = Date.now();
  (0, import_chunk_qdcbcsg7.mt)().tokenlessRejections.set(c, i);
  function r(n) {
    return n?.discoveryState !== void 0 && !n.refreshToken && (!n.accessToken || Xri(c, n.accessToken)) && !g(n.discoveryState.tokenlessRejectedAt);
  }
  try {
    if (!r((await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpOAuth?.[c])) return;
    await (0, import_chunk_zzrn5zap.Er)().mutate((n) => {
      let a = n.mcpOAuth?.[c];
      if (a?.discoveryState === void 0 || !r(a)) return n;
      return { ...n, mcpOAuth: { ...n.mcpOAuth, [c]: { ...a, discoveryState: { ...a.discoveryState, tokenlessRejectedAt: i } } } };
    });
  } catch (n) {
    (0, import_chunk_k449cc64.He)(t, `Recording that the server requires a sign-in failed: ${(0, import_chunk_jv7av99m.d)(n)}`);
  }
}
async function K$a({ name: t, serverRef: e, authProvider: o, isRefreshPath401: f, needsAuth: c }) {
  let i = o?.lastAuthRejection, r = i?.accessToken;
  if (i?.status !== 401 || r === void 0 || !f || o?.pendingStepUpScope !== void 0 || e.type !== "http" && e.type !== "sse" || !Aor()) return;
  let n = (0, import_chunk_yz5b8aaa.kc)(t, e), a = (0, import_chunk_qdcbcsg7.mt)(), S = a.savedAccessTokens.get(n);
  if (S?.accessToken === r && Date.now() - S.savedAt < j) return;
  let k = await (0, import_chunk_yz5b8aaa.oB)(), s = k === import_chunk_zzrn5zap.bs ? void 0 : k?.mcpOAuth?.[n];
  if (k === import_chunk_zzrn5zap.bs || s?.refreshToken || g(s?.discoveryState?.tokenlessRejectedAt)) return;
  a.rejectedStoredTokens.set(n, r);
  let p = { name: t, type: "needs-auth", config: e };
  return a.connectsToRedialWithoutToken.set(p, c), p;
}
async function q$a(t, e, o, f) {
  let c = (0, import_chunk_yrpmp1hk.hi)(), i = await t(), r = (0, import_chunk_qdcbcsg7.mt)();
  if (f.type !== "http" && f.type !== "sse") return i;
  let n = (0, import_chunk_yz5b8aaa.kc)(o, f), a = r.connectsToRedialWithoutToken.get(i);
  if (a === void 0) {
    if (i.type === "connected") r.tokenlessRejections.delete(n);
    return i;
  }
  if (!e() || (0, import_chunk_yrpmp1hk.hi)() !== c) return r.rejectedStoredTokens.delete(n), e() ? a() : i;
  (0, import_chunk_k449cc64.He)(o, "The server rejected the stored access token and no refresh token is stored; connecting again without a token");
  let S = await t(), k = r.rejectedStoredTokens.get(n);
  if (S.type !== "connected") {
    r.rejectedStoredTokens.delete(n);
    let s = S.type === "needs-auth" && !r.connectsToRedialWithoutToken.has(S);
    if ((0, import_chunk_cqa9hrgx.l)("mcp_signed_out_fallback", s ? "sign_in_required" : "not_connected"), s) return S;
    return e() ? a() : i;
  }
  (0, import_chunk_k449cc64.He)(o, "Connected without the rejected access token"), (0, import_chunk_cqa9hrgx.u)("mcp_signed_out_fallback"), r.tokenlessRejections.delete(n);
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((s) => {
      let p = s.mcpOAuth?.[n];
      if (p === void 0 || p.refreshToken) return s;
      let h = !!p.accessToken && p.accessToken === k, T = Yri(p.discoveryState);
      if (!h && T === p.discoveryState) return s;
      return { ...s, mcpOAuth: { ...s.mcpOAuth, [n]: { ...p, ...h && { accessToken: "", expiresAt: 0 }, discoveryState: T } } };
    });
  } catch (s) {
    (0, import_chunk_k449cc64.He)(o, `Deleting the rejected access token failed: ${(0, import_chunk_jv7av99m.d)(s)}`);
  }
  return S;
}
