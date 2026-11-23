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
var chunk_np189awg_exports = {};
__export(chunk_np189awg_exports, {
  $0l: () => $0l,
  $Yi: () => $Yi,
  AOo: () => AOo,
  AVt: () => AVt,
  COo: () => COo,
  F0l: () => F0l,
  FYi: () => FYi,
  IPe: () => IPe,
  JOs: () => JOs,
  LYi: () => LYi,
  NYi: () => NYi,
  QOs: () => QOs,
  TOo: () => TOo,
  U0l: () => U0l,
  UYi: () => UYi,
  XIr: () => XIr,
  Xd: () => Xd,
  YIr: () => YIr,
  Z0: () => Z0,
  ZOs: () => ZOs,
  ZXe: () => ZXe,
  bhn: () => bhn,
  gI: () => gI,
  hD: () => hD,
  o3: () => o3,
  qke: () => qke,
  vOo: () => vOo,
  vVn: () => vVn,
  whn: () => whn
});
module.exports = __toCommonJS(chunk_np189awg_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_fzp6hh55 = require("/$bunfs/root/chunk-fzp6hh55.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
function Q(e) {
  if (e < 6e4) return `${Math.round(e / 1e3)}s`;
  let n = Math.floor(e / 6e4), r = Math.round(e % 6e4 / 1e3);
  return r > 0 ? `${n}m ${r}s` : `${n}m`;
}
function hD(e) {
  let r = (e.startsWith("sk-ant-si-") ? e.slice(10) : e).split(".");
  if (r.length !== 3 || !r[1]) return null;
  try {
    return (0, import_chunk_w578pjby.te)(Buffer.from(r[1], "base64url").toString("utf8"));
  } catch {
    return null;
  }
}
function AVt(e) {
  let n = e ? hD(e) : null, r = n !== null && typeof n === "object" && "aud" in n ? n.aud : void 0;
  return r === "claude-gateway" || Array.isArray(r) && r.includes("claude-gateway");
}
function bhn(e) {
  let n = hD(e);
  return n !== null && typeof n === "object" && "session_id" in n && typeof n.session_id === "string" ? n.session_id : void 0;
}
function Z0(e) {
  let n = hD(e);
  if (n !== null && typeof n === "object" && "exp" in n && typeof n.exp === "number") return n.exp;
  return null;
}
var Z = 3e5, vOo = 18e5, ee = 3, F = 6e4;
function whn({ getAccessToken: e, onRefresh: n, onExhausted: r, label: o, refreshBufferMs: i = Z, maxFailures: c = ee, adaptiveBuffer: l = false, rescheduleFromNewToken: f = false, decodeExpiry: m = Z0, formatDelay: A = Q }) {
  let y = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map();
  function k(u) {
    let g = (R.get(u) ?? 0) + 1;
    return R.set(u, g), g;
  }
  function D(u, g, E = 0, T = false) {
    let h = m(g);
    if (!h) {
      (0, import_chunk_w578pjby.t)(`[${o}:token] Could not decode JWT expiry for sessionId=${u}, token prefix=${g.slice(0, 15)}\u2026, keeping existing timer`);
      return;
    }
    let v = y.get(u);
    if (v) clearTimeout(v);
    let P = k(u), L = new Date(h * 1e3).toISOString(), x = hD(g), O = x !== null && typeof x === "object" && "iat" in x && typeof x.iat === "number" && x.iat < h ? (h - x.iat) * 1e3 : 1 / 0, M = Math.min(h * 1e3 - Date.now(), O - E), I = l ? Math.min(i, Math.max(1e3, Math.floor(M * 0.2))) : i, G = M - I, S = Math.max(G, 0);
    if (T && O < 1 / 0) {
      let N = G > 0 ? F : i;
      S = Math.max(G, Math.min(N, O * 0.2));
    } else if (T && G <= 0) S = F;
    if (G <= 0) (0, import_chunk_w578pjby.t)(`[${o}:token] Token for sessionId=${u} expires=${L} (past or within buffer), ${S > 0 ? `refreshing in ${A(S)} (new token already due; pausing to avoid a loop)` : "refreshing immediately"}`);
    else {
      let N = l ? Math.round(I / 1e3) : i / 1e3;
      (0, import_chunk_w578pjby.t)(`[${o}:token] Scheduled token refresh for sessionId=${u} in ${A(S)} (expires=${L}, buffer=${N}s)`);
    }
    U(u, Date.now() + S, P);
  }
  let B = 6e4;
  function U(u, g, E) {
    _.delete(u);
    let T = performance.now() + g - Date.now();
    function h() {
      if (R.get(u) !== E) return;
      let v = Math.ceil(Math.min(g - Date.now(), T - performance.now()));
      if (v <= 0) {
        C(u, E);
        return;
      }
      let P = setTimeout(h, Math.min(v, B));
      y.set(u, P);
    }
    h();
  }
  function Y(u, g) {
    let E = y.get(u);
    if (E) clearTimeout(E);
    let T = k(u), h = Math.max(g * 1e3 - i, 3e4);
    (0, import_chunk_w578pjby.t)(`[${o}:token] Scheduled token refresh for sessionId=${u} in ${A(h)} (expires_in=${g}s, buffer=${i / 1e3}s)`), U(u, Date.now() + h, T);
  }
  function z(u) {
    let g = y.get(u);
    if (g) clearTimeout(g);
    let E = k(u);
    (0, import_chunk_w578pjby.t)(`[${o}:token] Immediate token refresh requested for sessionId=${u}`), C(u, E);
  }
  async function C(u, g) {
    let E;
    try {
      E = await e();
    } catch (h) {
      (0, import_chunk_w578pjby.t)(`[${o}:token] getAccessToken threw for sessionId=${u}: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "error" });
    }
    if (R.get(u) !== g) {
      (0, import_chunk_w578pjby.t)(`[${o}:token] doRefresh for sessionId=${u} stale (gen ${g} vs ${R.get(u)}), skipping`);
      return;
    }
    if (!E) {
      let h = (_.get(u) ?? 0) + 1;
      if (_.set(u, h), (0, import_chunk_w578pjby.t)(`[${o}:token] No OAuth token available for refresh, sessionId=${u} (failure ${h}${Number.isFinite(c) ? `/${c}` : ""})`, { level: "error" }), (0, import_chunk_42tcgre6.q)("error", "bridge_token_refresh_no_oauth"), h < c) {
        let v = setTimeout(C, F, u, g);
        y.set(u, v);
        return;
      }
      (0, import_chunk_w578pjby.t)(`[${o}:token] Refresh chain exhausted for sessionId=${u} after ${h} consecutive failures`, { level: "error" }), (0, import_chunk_42tcgre6.q)("error", "bridge_token_refresh_exhausted"), r?.(u, "no_oauth_token");
      return;
    }
    if (_.delete(u), (0, import_chunk_w578pjby.t)(`[${o}:token] Refreshing token for sessionId=${u}: new token prefix=${E.slice(0, 15)}\u2026`), (0, import_chunk_y53wbr8a.a)("tengu_bridge_token_refreshed", {}), n(u, E), f && m(E)) {
      D(u, E, 0, true);
      return;
    }
    let T = setTimeout(C, vOo, u, g);
    y.set(u, T), (0, import_chunk_w578pjby.t)(f ? `[${o}:token] Non-JWT token \u2014 scheduled fallback refresh for sessionId=${u} in ${A(vOo)}` : `[${o}:token] Scheduled follow-up refresh for sessionId=${u} in ${A(vOo)}`);
  }
  function J(u) {
    k(u);
    let g = y.get(u);
    if (g) clearTimeout(g), y.delete(u);
    _.delete(u);
  }
  function X() {
    for (let u of R.keys()) k(u);
    for (let u of y.values()) clearTimeout(u);
    y.clear(), _.clear();
  }
  return { schedule: D, scheduleFromExpiresIn: Y, refreshNow: z, cancel: J, cancelAll: X };
}
var ne = globalThis.fetch;
function IPe(e, n) {
  if (e instanceof Request) return { method: (n?.method ?? e.method).toUpperCase(), url: e.url };
  return { method: (n?.method ?? "GET").toUpperCase(), url: String(e) };
}
function ZXe() {
}
function LYi(e, n, r) {
}
function NYi(e, n, r) {
}
function TOo(e, n, r) {
}
function COo(e, n) {
}
async function AOo(e, n, r) {
  let o = globalThis.fetch, { method: i, url: c } = IPe(e, n);
  LYi(o, i, c);
  let f = await (r && o === ne ? r : o)(e, n);
  return NYi(o, i, f), f;
}
var re = /* @__PURE__ */ new Set(["ERR_BAD_OPTION", "ERR_BAD_OPTION_VALUE", "ERR_BAD_REQUEST", "ERR_BAD_RESPONSE", "ERR_CANCELED", "ERR_DEPRECATED", "ERR_FORM_DATA_DEPTH_EXCEEDED", "ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_INVALID_URL", "ERR_NOT_SUPPORT", "ERR_STREAM_WRITE_AFTER_END"]);
function gI(e) {
  return (0, import_chunk_3jjr3wje.fd)(e) && e.response === void 0 && !re.has(e.code ?? "");
}
function b(e, n) {
  for (let r of [e, n?.baseURL]) if (r && (0, import_chunk_3jjr3wje.nL)(r)) throw Error(`externalHttp: ${r} is Anthropic-operated. Use firstPartyApi from src/services/http/firstParty \u2014 it enforces the 3P data-residency gate.`);
}
var Xd = { get(e, n) {
  return b(e, n), ZXe(), import_chunk_3jjr3wje.bn.get(e, n);
}, head(e, n) {
  return b(e, n), ZXe(), import_chunk_3jjr3wje.bn.head(e, n);
}, post(e, n, r) {
  return b(e, r), ZXe(), import_chunk_3jjr3wje.bn.post(e, n, r);
}, put(e, n, r) {
  return b(e, r), ZXe(), import_chunk_3jjr3wje.bn.put(e, n, r);
}, patch(e, n, r) {
  return b(e, r), ZXe(), import_chunk_3jjr3wje.bn.patch(e, n, r);
}, delete(e, n) {
  return b(e, n), ZXe(), import_chunk_3jjr3wje.bn.delete(e, n);
} };
var FYi = 3e5, qke = { held: () => (0, import_chunk_f9x2f6cx.Io)(), hold: (e) => (0, import_chunk_f9x2f6cx.jOe)(e), refreshInFlight: () => (0, import_chunk_f9x2f6cx.bPt)(), setRefreshInFlight: (e) => (0, import_chunk_f9x2f6cx.pla)(e), storageKey: "enterpriseGateway" }, $Yi = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ access_token: (0, import_chunk_rnm2beqc.we)(), expires_in: (0, import_chunk_rnm2beqc.nr)(), refresh_token: (0, import_chunk_rnm2beqc.we)().nullish(), email: (0, import_chunk_rnm2beqc.we)().nullish().catch(void 0) })), oe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ revocation_endpoint: (0, import_chunk_rnm2beqc.we)().nullish().catch(void 0) }));
function JOs(e, n) {
  if (!n) return;
  try {
    if (new URL(n).origin === new URL(e).origin) return n;
  } catch {
  }
  return;
}
function o3(e, { force: n = false } = {}, r = qke) {
  if (r === qke && vVn()) QOs();
  let o = r.held();
  if (!o?.idpRefreshToken || !n && o.expiresAt - Date.now() >= FYi) return Promise.resolve();
  let i = r.refreshInFlight();
  if (i) return i;
  let c = ie(o, o.idpRefreshToken, e, r).finally(() => r.setRefreshInFlight(null));
  return r.setRefreshInFlight(c), c;
}
function QOs() {
  {
    if (!import_chunk_c203g5kd.s.CLAUDE_CODE_USE_GATEWAY) return false;
    let e = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL, n = import_chunk_c203g5kd.s.ANTHROPIC_AUTH_TOKEN || (0, import_chunk_fzp6hh55.ZVt)();
    if (!e || !n) return (0, import_chunk_w578pjby.t)(`CLAUDE_CODE_USE_GATEWAY is set but ${!e ? "ANTHROPIC_BASE_URL is missing" : "no ANTHROPIC_AUTH_TOKEN and no token on a gateway descriptor / snapshot"}; ignoring`, { level: "warn" }), false;
    let r = (0, import_chunk_f9x2f6cx.Io)();
    if ((0, import_chunk_f9x2f6cx.iA)(r) || r?.jwt === n) return true;
    let o = r?.url;
    if (!o) try {
      o = (0, import_chunk_tvttgr51.p8)(e);
    } catch (c) {
      throw new import_chunk_jv7av99m.aE(`CLAUDE_CODE_USE_GATEWAY is set but ANTHROPIC_BASE_URL is invalid: ${(0, import_chunk_jv7av99m.d)(c)}`);
    }
    let i = Z0(n);
    return (0, import_chunk_f9x2f6cx.jOe)({ url: o, jwt: n, expiresAt: i !== null ? i * 1e3 : Number.MAX_SAFE_INTEGER, unpinned: true, ...r?.hostVerdict && { hostVerdict: r.hostVerdict } }), true;
  }
  return false;
}
function vVn() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && (0, import_chunk_f9x2f6cx.Io)()?.unpinned === true;
}
async function ie(e, n, r, o) {
  try {
    let i = e.tokenEndpoint ?? `${e.url}/oauth/token`, c = (0, import_chunk_tvttgr51.Xhe)(o === qke ? await (0, import_chunk_tvttgr51.Mze)((0, import_chunk_tvttgr51.gB)(new URL(i)), r) : void 0, i), { data: l } = await Xd.post(i, new URLSearchParams({ grant_type: "refresh_token", refresh_token: n }).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, timeout: 1e4, maxRedirects: 0, ...c && { httpsAgent: c } }), f = $Yi().safeParse(l);
    if (!f.success) {
      (0, import_chunk_w578pjby.t)("[gateway-refresh] malformed response; will retry later");
      return;
    }
    if (o.held() !== e) {
      (0, import_chunk_w578pjby.t)("[gateway-refresh] auth changed mid-refresh; discarding");
      return;
    }
    await H(e, n, () => ({ url: e.url, jwt: f.data.access_token, expiresAt: Date.now() + f.data.expires_in * 1e3, idpRefreshToken: f.data.refresh_token ?? e.idpRefreshToken, ...e.tokenEndpoint && { tokenEndpoint: e.tokenEndpoint }, ...e.revocationEndpoint && { revocationEndpoint: e.revocationEndpoint }, ...e.email && { email: e.email }, ...e.vouchedAtLogin !== void 0 && { vouchedAtLogin: e.vouchedAtLogin }, ...e.organizationUuid !== void 0 && { organizationUuid: e.organizationUuid } }), r, o), (0, import_chunk_w578pjby.t)("[gateway-refresh] refreshed gateway JWT");
  } catch (i) {
    if (ZOs(i) === "invalid_grant") {
      if (o.held() !== e) {
        (0, import_chunk_w578pjby.t)("[gateway-refresh] auth changed mid-refresh; discarding invalid_grant");
        return;
      }
      (0, import_chunk_w578pjby.t)("[gateway-refresh] IdP rejected refresh token; clearing it", { level: "warn" });
      try {
        await H(e, n, (c) => ({ ...c, idpRefreshToken: void 0 }), r, o);
      } catch (c) {
        (0, import_chunk_w578pjby.t)(`[gateway-refresh] secureStorage write failed: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "warn" });
      }
    } else {
      let c = se(i);
      if (c) (0, import_chunk_w578pjby.t)(`[gateway-refresh] ${c}: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "warn" });
      else (0, import_chunk_w578pjby.t)(`[gateway-refresh] transient failure: ${(0, import_chunk_jv7av99m.d)(i)}`);
    }
  }
}
function se(e) {
  if ((0, import_chunk_tvttgr51.Ghn)(e) !== void 0) return "certificate changed since sign-in";
  if ((0, import_chunk_jv7av99m.d)(e).includes(import_chunk_tvttgr51.VVt)) return "pin store is a symlink and was refused";
  return;
}
async function H(e, n, r, o, i) {
  let c = r(e);
  if (c.jwt !== e.jwt) i.replacedTokens?.().add(e.jwt);
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((l) => {
      let f = l?.[i.storageKey];
      if (!f) return l;
      let m = i.replacedTokens?.().has(f.jwt) === true;
      if (f.idpRefreshToken !== n && !m) return c = f, l;
      if (i.held() !== e) return l;
      return c = r(m ? e : f), { ...l, [i.storageKey]: c };
    }, o);
  } catch (l) {
    (0, import_chunk_w578pjby.t)(`[gateway-refresh] secureStorage write failed; applying refreshed credential in-memory only: ${(0, import_chunk_jv7av99m.d)(l)}`, { level: "warn" });
  }
  if (i.held() !== e) {
    (0, import_chunk_w578pjby.t)("[gateway-refresh] auth changed during persist; discarding outcome");
    return;
  }
  i.hold(c);
}
function ZOs(e) {
  if (!e || typeof e !== "object" || !("isAxiosError" in e) || !e.isAxiosError) return;
  let n = e.response?.data;
  if (typeof n === "object" && n !== null && "error" in n) {
    let r = n.error;
    return typeof r === "string" ? r : void 0;
  }
  return;
}
async function F0l(e, n, r = qke) {
  if (!e) return;
  let o = (i) => i?.url === e.url && i.jwt === e.jwt;
  if (o(r.held())) r.hold(null);
  try {
    let i = await (0, import_chunk_zzrn5zap.Er)().mutate((c) => {
      if (!o(c[r.storageKey])) return c;
      let l = { ...c };
      return delete l[r.storageKey], l;
    }, n);
    if (!i.success) (0, import_chunk_w578pjby.t)(`[gateway-login] could not remove the discarded credential from secure storage${i.warning ? `: ${i.warning}` : ""}`, { level: "warn" });
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`[gateway-login] could not remove the discarded credential from secure storage: ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "warn" });
  }
}
function YIr(e, n) {
  return e?.url === n.url && e.tokenEndpoint === n.tokenEndpoint && e.email === n.email;
}
function j(e, n, r) {
  let { [n]: o, ...i } = e ?? {}, c = r === void 0 ? i : { ...i, [n]: r };
  return Object.keys(c).length > 0 ? { gatewayAllowlistEntries: c } : {};
}
async function $0l(e, n, r, o, i = qke) {
  if (YIr(i.held(), e)) i.hold(n);
  if (o.outcome === "untouched") return;
  let c = (0, import_chunk_zzrn5zap.Er)();
  try {
    let l = await c.mutate((f) => {
      if (!YIr(f[i.storageKey], e)) return f;
      let { [i.storageKey]: m, ...A } = f, y = o.replaced && { [i.storageKey]: o.replaced };
      if (i !== qke) return { ...A, ...y };
      let { gatewayAllowlistEntries: _, ...R } = A;
      return { ...R, ...y, ...j(_, (0, import_chunk_tvttgr51.gB)(new URL(e.url)), o.replacedAllowlistEntry) };
    }, r);
    if (!l.success) (0, import_chunk_w578pjby.t)(`[gateway-login] could not put the previous credential back in secure storage${l.warning ? `: ${l.warning}` : ""}`, { level: "warn" });
  } catch (l) {
    (0, import_chunk_w578pjby.t)(`[gateway-login] could not put the previous credential back in secure storage: ${(0, import_chunk_jv7av99m.d)(l)}`, { level: "warn" });
  }
  try {
    await (0, import_chunk_aj8wb2xh.JIr)(c, (l) => {
      let f = l[i.storageKey];
      if (f?.url !== e.url || f.jwt !== e.jwt) return l;
      let { [i.storageKey]: m, ...A } = l;
      return A;
    }, r);
  } catch (l) {
    (0, import_chunk_w578pjby.t)(`[gateway-login] could not remove the undone credential from every credential store: ${(0, import_chunk_jv7av99m.d)(l)}`, { level: "warn" });
  }
}
async function UYi(e, n, r, o, i = true) {
  if (YIr(n, e) || o.outcome !== "untouched" && YIr(o.replaced, e)) {
    (0, import_chunk_w578pjby.t)("[gateway-login] the undone sign-in is for the account still signed in at this gateway; not revoking it", { level: "info" });
    return;
  }
  await XIr(e, r, i);
}
async function XIr(e, n, r = true) {
  try {
    let o = (0, import_chunk_tvttgr51.Xhe)(r ? await (0, import_chunk_tvttgr51.Mze)((0, import_chunk_tvttgr51.gB)(new URL(e.url)), n) : void 0, e.url), i = e.revocationEndpoint ?? await ae(e.url, o);
    if (!i) {
      (0, import_chunk_w578pjby.t)("[gateway-logout] no revocation endpoint known for this gateway; sign-out ends the session on this machine only", { level: "info" });
      return;
    }
    let c = JOs(e.url, i);
    if (!c) {
      (0, import_chunk_w578pjby.t)("[gateway-logout] revocation endpoint is not on the gateway host; skipping the revoke", { level: "warn" });
      return;
    }
    await Promise.all([W(c, { token: e.jwt }, o, "session"), ...e.idpRefreshToken ? [W(c, { token: e.idpRefreshToken, token_type_hint: "refresh_token" }, o, "refresh token")] : []]);
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`[gateway-logout] gateway revoke skipped: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
  }
}
function K(e) {
  return { timeout: 5e3, signal: AbortSignal.timeout(5e3), maxRedirects: 0, ...e && { httpsAgent: e } };
}
function V(e) {
  let n = (0, import_chunk_jv7av99m.w)(e), { kind: r, status: o } = (0, import_chunk_jv7av99m.$i)(e);
  return `${n === "ERR_CANCELED" ? "timeout" : r}, code=${n ?? "none"}, status=${o ?? "none"}`;
}
async function ae(e, n) {
  try {
    let { data: r } = await Xd.get(`${e}/.well-known/oauth-authorization-server`, { headers: { "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, ...K(n) }), o = oe().safeParse(r);
    return o.success ? o.data.revocation_endpoint ?? void 0 : void 0;
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[gateway-logout] gateway metadata read failed (${V(r)}); continuing with local logout`, { level: "warn" });
    return;
  }
}
async function W(e, n, r, o) {
  try {
    await Xd.post(e, new URLSearchParams(n).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, ...K(r) }), (0, import_chunk_w578pjby.t)(`[gateway-logout] revoked the gateway ${o}`);
  } catch (i) {
    (0, import_chunk_w578pjby.t)(`[gateway-logout] gateway ${o} revoke failed (${V(i)}); continuing with local logout`, { level: "warn" });
  }
}
async function U0l(e, n, r, o = qke) {
  o.hold(e);
  let i = false, c, l, f = (m) => i ? { outcome: "failed", replaced: c, replacedAllowlistEntry: l, message: m } : { outcome: "untouched", message: m };
  try {
    let m = await (0, import_chunk_zzrn5zap.Er)().mutate((A) => {
      let y = (0, import_chunk_tvttgr51.gB)(new URL(e.url)), { [o.storageKey]: _, ...R } = A;
      if (c = _, i = true, o !== qke) return { ...R, [o.storageKey]: e };
      let { gatewayAllowlistEntries: k, ...D } = R;
      return l = k?.[y], { ...D, [o.storageKey]: e, ...j(k, y, r) };
    }, n);
    if (!m.success) return f(`Failed to persist gateway credential${m.warning ? `: ${m.warning}` : ""}`);
  } catch (m) {
    return f((0, import_chunk_jv7av99m.d)(m));
  }
  return { outcome: "saved", replaced: c, replacedAllowlistEntry: l };
}
