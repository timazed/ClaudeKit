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
var chunk_z88wr2ke_exports = {};
__export(chunk_z88wr2ke_exports, {
  B9o: () => B9o,
  DYr: () => DYr,
  LYr: () => LYr,
  Por: () => Por,
  W9o: () => W9o,
  _Jl: () => _Jl,
  gJl: () => gJl,
  hJl: () => hJl,
  ioi: () => ioi
});
module.exports = __toCommonJS(chunk_z88wr2ke_exports);
var import_chunk_racn22qq = require("/$bunfs/root/chunk-racn22qq.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_x8rfwr2t = require("/$bunfs/root/chunk-x8rfwr2t.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_r64qzndq = require("/$bunfs/root/chunk-r64qzndq.js");
var import_chunk_fkbh0xha = require("/$bunfs/root/chunk-fkbh0xha.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_crypto = require("crypto");
var import_http = require("http");
var import_url = require("url");
var R = 3e5, L = 3e4, U = 60;
function Por(t) {
  try {
    let e = new URL(t);
    return e.pathname = e.pathname.replace(/\/+$/, ""), e.host = e.host.toLowerCase(), e.toString();
  } catch {
    return t.replace(/\/+$/, "");
  }
}
async function DYr(t) {
  let r = (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpXaaIdp?.[Por(t)];
  if (!r) return;
  if (r.expiresAt - Date.now() <= U * 1e3) return;
  return r.idToken;
}
async function P(t, e, n) {
  await (0, import_chunk_zzrn5zap.Er)().mutate((r) => ({ ...r, mcpXaaIdp: { ...r.mcpXaaIdp, [Por(t)]: { idToken: e, expiresAt: n } } }));
}
async function hJl(t, e) {
  let n = b(e), r = n ? n * 1e3 : Date.now() + 36e5;
  return await P(t, e, r), r;
}
async function B9o(t) {
  let e = Por(t);
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((n) => {
      if (!n.mcpXaaIdp?.[e]) return n;
      let r = { ...n.mcpXaaIdp };
      return delete r[e], { ...n, mcpXaaIdp: r };
    });
  } catch (n) {
    (0, import_chunk_k449cc64.He)("xaa", `clearIdpIdToken(${(0, import_chunk_jbjjrhxt.bu)(e)}) failed: ${(0, import_chunk_jv7av99m.d)(n)}`);
  }
}
async function gJl(t, e) {
  try {
    return await (0, import_chunk_zzrn5zap.Er)().mutate((n) => ({ ...n, mcpXaaIdpConfig: { ...n.mcpXaaIdpConfig, [Por(t)]: { clientSecret: e } } }));
  } catch (n) {
    return { success: false, warning: (0, import_chunk_jv7av99m.d)(n) };
  }
}
async function W9o(t) {
  return (await (0, import_chunk_zzrn5zap.Er)().readAsync())?.mcpXaaIdpConfig?.[Por(t)]?.clientSecret;
}
async function _Jl(t) {
  let e = Por(t);
  try {
    await (0, import_chunk_zzrn5zap.Er)().mutate((n) => {
      if (!n.mcpXaaIdpConfig?.[e]) return n;
      let r = { ...n.mcpXaaIdpConfig };
      return delete r[e], { ...n, mcpXaaIdpConfig: r };
    });
  } catch (n) {
    (0, import_chunk_k449cc64.He)("xaa", `clearIdpClientSecret(${(0, import_chunk_jbjjrhxt.bu)(e)}) failed: ${(0, import_chunk_jv7av99m.d)(n)}`);
  }
}
var F = (0, import_chunk_fkbh0xha.mJt)((t, e) => fetch(t, e));
async function C(t, e) {
  let n = { ...e, ...(0, import_chunk_3jjr3wje.wl)({ url: String(t) }), signal: AbortSignal.timeout(L) };
  try {
    return await F(t, n);
  } catch (r) {
    (0, import_chunk_jbjjrhxt.ent)(r, t);
  }
}
async function LYr(t) {
  let e = t.endsWith("/") ? t : t + "/";
  if (!URL.canParse(".well-known/openid-configuration", e)) throw new import_chunk_jv7av99m.A(`XAA IdP: OIDC discovery failed: issuer is not a valid URL: ${(0, import_chunk_jbjjrhxt.bu)(t)}`, "XAA IdP: OIDC discovery failed: issuer is not a valid URL");
  let n = new URL(".well-known/openid-configuration", e), r = await C(n, { headers: { Accept: "application/json" } });
  if (!r.ok) throw Error(`XAA IdP: OIDC discovery failed: HTTP ${r.status} at ${(0, import_chunk_jbjjrhxt.bu)(n.href)}`);
  let s;
  try {
    s = await r.json();
  } catch {
    throw Error(`XAA IdP: OIDC discovery returned non-JSON at ${(0, import_chunk_jbjjrhxt.bu)(n.href)} (captive portal or proxy?)`);
  }
  let c = import_chunk_racn22qq._Rn.safeParse(s);
  if (!c.success) throw Error(`XAA IdP: invalid OIDC metadata: ${c.error.message}`);
  if (!URL.canParse(c.data.token_endpoint) || new URL(c.data.token_endpoint).protocol !== "https:") throw Error(`XAA IdP: refusing non-HTTPS token endpoint: ${(0, import_chunk_jbjjrhxt.bu)(c.data.token_endpoint)}`);
  return c.data;
}
function b(t) {
  let e = t.split(".");
  if (e.length !== 3) return;
  try {
    let n = (0, import_chunk_w578pjby.te)(Buffer.from(e[1], "base64url").toString("utf-8"));
    return typeof n.exp === "number" ? n.exp : void 0;
  } catch {
    return;
  }
}
function M(t, e, n, r) {
  let s = null, c = null, p = null, g = () => {
    if (s?.removeAllListeners(), s?.on("error", () => {
    }), s?.close(), s = null, c) clearTimeout(c), c = null;
    if (n && p) n.removeEventListener("abort", p), p = null;
  };
  return new Promise((h, I) => {
    let m = false, w = (o, i) => {
      if (m) return;
      m = true, g(), h({ code: o, iss: i });
    }, u = (o) => {
      if (m) return;
      m = true, g(), I(o);
    };
    if (n) {
      if (p = () => u(Error("XAA IdP: login cancelled")), n.aborted) {
        p();
        return;
      }
      n.addEventListener("abort", p, { once: true });
    }
    s = (0, import_http.createServer)((o, i) => {
      let f = (0, import_url.parse)(o.url || "", true);
      if (f.pathname !== "/callback") {
        i.writeHead(404), i.end();
        return;
      }
      let l = f.query.code, E = f.query.state, y = f.query.error, O = (0, import_chunk_r64qzndq.Oor)(f.query.iss);
      if (y) {
        let k = f.query.error_description;
        i.writeHead(400, { "Content-Type": "text/html" }), i.end((0, import_chunk_x8rfwr2t.PMe)({ ok: false, heading: "Sign-in failed", message: "Close this tab and try again from Claude Code.", detail: `${y}: ${k ?? ""}` })), u(Error(`XAA IdP: ${y}${k ? ` \u2014 ${k}` : ""}`));
        return;
      }
      if (E !== e) {
        i.writeHead(400, { "Content-Type": "text/html" }), i.end((0, import_chunk_x8rfwr2t.PMe)({ ok: false, heading: "Sign-in failed", message: "State mismatch. Close this tab and try again." })), u(Error("XAA IdP: state mismatch (possible CSRF)"));
        return;
      }
      if (!l) {
        i.writeHead(400, { "Content-Type": "text/html" }), i.end((0, import_chunk_x8rfwr2t.PMe)({ ok: false, heading: "Sign-in failed", message: "No authorization code received. Close this tab and try again." })), u(Error("XAA IdP: callback missing code"));
        return;
      }
      i.writeHead(200, { "Content-Type": "text/html" }), i.end((0, import_chunk_x8rfwr2t.PMe)({ ok: true, heading: "Sign-in complete", message: "You can close this tab and return to Claude Code." })), w(l, O);
    }), s.on("error", (o) => {
      if (o.code === "EADDRINUSE") {
        let i = (0, import_chunk_cg8dqz0a.x)() === "windows" ? `netstat -ano | findstr :${t}` : `lsof -ti:${t} -sTCP:LISTEN`;
        u(Error(`XAA IdP: callback port ${t} is already in use. Run \`${i}\` to find the holder.`));
      } else u(Error(`XAA IdP: callback server failed: ${o.message}`));
    }), s.listen(t, "127.0.0.1", () => {
      try {
        r();
      } catch (o) {
        u((0, import_chunk_jv7av99m.D)(o));
      }
    }), s.unref(), c = setTimeout((o) => o(Error("XAA IdP: login timed out")), R, u), c.unref();
  });
}
async function ioi(t) {
  return (0, import_chunk_cqa9hrgx.qo)("mcp_xaa_idp_login", async () => {
    let { idpIssuer: e, idpClientId: n } = t, r = await DYr(e);
    if (r) return (0, import_chunk_k449cc64.He)("xaa", `Using cached id_token for ${(0, import_chunk_jbjjrhxt.bu)(e)}`), r;
    (0, import_chunk_k449cc64.He)("xaa", `No cached id_token for ${(0, import_chunk_jbjjrhxt.bu)(e)}; starting OIDC login`);
    let s = await LYr(e), c = t.callbackPort ?? await (0, import_chunk_r64qzndq.NYr)(), p = `http://localhost:${c}/callback`, g = (0, import_crypto.randomBytes)(32).toString("base64url"), h = { client_id: n, ...t.idpClientSecret && { client_secret: t.idpClientSecret } }, { authorizationUrl: I, codeVerifier: m } = await (0, import_chunk_racn22qq.uoi)(e, { metadata: s, clientInformation: h, redirectUrl: p, scope: "openid", state: g }), w = await M(c, g, t.abortSignal, () => {
      if (t.onAuthorizationUrl(I.toString()), !t.skipBrowserOpen) (0, import_chunk_k449cc64.He)("xaa", "Opening browser to IdP authorization endpoint"), (0, import_chunk_h3t3td58.ml)(I.toString());
    }), u = { metadata: s, clientInformation: h, authorizationCode: w.code, codeVerifier: m, redirectUri: p, fetchFn: C }, o;
    try {
      o = await (0, import_chunk_racn22qq.foi)(e, { ...u, iss: w.iss });
    } catch (l) {
      if (!(l instanceof import_chunk_racn22qq.n4e) || l.kind !== "authorization_response" || l.expected === void 0 || !(0, import_chunk_sppbt6xz.s1)()) throw l;
      (0, import_chunk_y53wbr8a.a)("tengu_mcp_oauth_iss_compat", { reason: l.received === void 0 ? (0, import_chunk_78g0060s.S)("absent") : (0, import_chunk_78g0060s.S)("differs"), authMethod: (0, import_chunk_78g0060s.S)("xaa") }), (0, import_chunk_k449cc64.He)("xaa", `Issuer mismatch in the IdP's authorization response (expected ${(0, import_chunk_w578pjby._)((0, import_chunk_jbjjrhxt.bu)(l.expected).slice(0, 100))}, received ${l.received === void 0 ? "no issuer" : (0, import_chunk_w578pjby._)((0, import_chunk_jbjjrhxt.bu)(l.received).slice(0, 100))}). Sign-in continues, because MCP_SDK_GENERATION=v1 turns this check off.`), o = await (0, import_chunk_racn22qq.foi)(e, { ...u, iss: l.expected });
    }
    if (!o.id_token) throw Error("XAA IdP: token response missing id_token (check scope=openid)");
    let i = b(o.id_token), f = i ? i * 1e3 : Date.now() + (o.expires_in ?? 3600) * 1e3;
    try {
      await P(e, o.id_token, f), (0, import_chunk_k449cc64.He)("xaa", `Cached id_token for ${(0, import_chunk_jbjjrhxt.bu)(e)} (expires ${new Date(f).toISOString()})`);
    } catch (l) {
      (0, import_chunk_k449cc64.He)("xaa", `id_token cache write failed: ${(0, import_chunk_jv7av99m.d)(l)}`);
    }
    return o.id_token;
  });
}
