const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_9rhbtt44_exports = {};
__export(chunk_9rhbtt44_exports, {
  Dqs: () => Dqs,
  Hqs: () => Hqs,
  QEn: () => QEn,
  ZEn: () => ZEn,
  fYl: () => fYl,
  gY: () => gY,
  q2l: () => q2l,
  uYl: () => uYl
});
module.exports = __toCommonJS(chunk_9rhbtt44_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_x8rfwr2t = require("/$bunfs/root/chunk-x8rfwr2t.js");
var import_chunk_6recsekb = require("/$bunfs/root/chunk-6recsekb.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_http = require("http");
(0, import_chunk_adx6804h.B)();
var v = ["openid", "profile", "email", "offline_access"], R = 1e4, P = 3e4, O = 3e5, L = 36e5, U = 2592e6, I = "/gateway-sign-in/callback", QEn = `If the page in your browser says that the redirect address is not registered, ask your administrator to add the address that ends in ${I} at your organization's identity provider.`;
function ZEn(e) {
  if (!(0, import_chunk_h3t3td58.$U)()) return;
  let r = new URL(e).searchParams.get("redirect_uri");
  if (r === null) return;
  let { hostname: i, port: o } = new URL(r), s = o || "80";
  return `Your browser must reach port ${s} on this computer. If you work over SSH, forward the port first, from the computer that has the browser: ssh -N -L ${s}:${i}:${s} <this computer>`;
}
var T = "[gateway-idp]", C = { maxRedirects: 0, adapter: "http", maxContentLength: 1e6, proxy: false }, q2l = /^[\x21-\x7e]+$/, D = /* @__PURE__ */ new Set(["server_error", "temporarily_unavailable", "authorization_pending", "slow_down"]), z = "Your organization's identity provider did not send its sign-in details. Ask your administrator to check the issuer address in your organization's sign-in settings.";
class gY extends import_chunk_jv7av99m.A {
  failure;
  constructor(e, r) {
    super(r, "Gateway identity-provider sign-in failed", e);
    this.failure = e;
  }
}
var G = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ authorization_endpoint: (0, import_chunk_adx6804h.n)(), token_endpoint: (0, import_chunk_adx6804h.n)(), authorization_response_iss_parameter_supported: (0, import_chunk_adx6804h.ie)().optional() })), H = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ access_token: (0, import_chunk_adx6804h.n)().min(1), id_token: (0, import_chunk_adx6804h.n)().nullish(), refresh_token: (0, import_chunk_adx6804h.n)().nullish(), expires_in: (0, import_chunk_adx6804h.ie)().optional(), scope: (0, import_chunk_adx6804h.n)().nullish() })), N = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.n)().regex(/^[a-z_]{1,64}$/) }));
async function Hqs(e) {
  let { resolveOidcEndpointSelection: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-t01makwm.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1)), i = r(e), o;
  switch (i?.via) {
    case "issuer": {
      let s = new URL(".well-known/openid-configuration", `${i.issuer.replace(/\/+$/, "")}/`);
      m(s.href), w(s.href);
      let d;
      try {
        d = (await (0, import_chunk_xfj2cwfv.VN)(R, (a) => import_chunk_np189awg.Xd.get(s.href, { ...a, ...C, responseType: "json", headers: { Accept: "application/json" } }))).data;
      } catch (u) {
        (0, import_chunk_w578pjby.t)(`${T} discovery failed: ${b(u)}`, { level: "warn" });
        let a = (0, import_chunk_3jjr3wje.fd)(u) ? u.response?.status : void 0;
        throw new gY("discovery", (0, import_chunk_np189awg.gI)(u) ? "Claude Code could not connect to your organization's identity provider. Check your network. Then try again." : a !== void 0 && (a >= 500 || a === 429) ? "Your organization's identity provider is not available now. Try again later." : z);
      }
      let g = G().safeParse(d);
      if (!g.success) throw new gY("discovery", z);
      o = { authorizationEndpoint: g.data.authorization_endpoint, tokenEndpoint: g.data.token_endpoint, issuer: i.issuer, ...g.data.authorization_response_iss_parameter_supported === true && { sendsIssuer: true } };
      break;
    }
    case "explicit":
      o = { authorizationEndpoint: i.authorizationUrl, tokenEndpoint: i.tokenUrl };
      break;
    case void 0:
      throw new gY("discovery", "Your organization's sign-in settings do not name an identity provider. Ask your administrator.");
  }
  return m(o.authorizationEndpoint), m(o.tokenEndpoint), w(o.authorizationEndpoint), w(o.tokenEndpoint), o;
}
function S(e) {
  let r = e.scopes?.split(/\s+/).filter(Boolean) ?? [];
  if (r.length === 0) return v;
  if (e.bearerTokenType === "access_token") return e.appendOfflineAccess !== false && !r.includes("offline_access") ? [...r, "offline_access"] : r;
  return r.includes("openid") ? r : ["openid", ...r];
}
function F(e, r) {
  if (e.bearerTokenType === "access_token") return r !== void 0 && r.length > 0 ? [...r] : void 0;
  let i = r !== void 0 && r.length > 0 ? r : S(e).filter((o) => o !== "offline_access");
  return (0, import_chunk_4smdap7r.M)([...i, "openid"]);
}
function uYl(e, r, i) {
  let o = e.bearerTokenType === "access_token", s = o ? r.accessToken : r.idToken;
  if (s === void 0 || !q2l.test(s)) return;
  let d = o ? null : (0, import_chunk_np189awg.Z0)(s), g = o ? r.expiresIn !== void 0 ? i + r.expiresIn * 1e3 : void 0 : d !== null ? d * 1e3 : void 0, u = g !== void 0 && !Number.isNaN(g) ? Math.min(g, i + U) : r.refreshToken !== void 0 ? i + L : void 0;
  return u === void 0 ? void 0 : { bearer: s, expiresAt: u };
}
async function Dqs(e, r) {
  let i = e.redirectHost ?? "127.0.0.1", o = (0, import_chunk_6recsekb.zko)(), s = (0, import_chunk_6recsekb.jko)(), d = (0, import_http.createServer)(), g = await Y(d, i, e.redirectPort ?? 0), u = `http://${i}:${g}${I}`, a = new URL(r.authorizationEndpoint), l = a.searchParams;
  if (l.set("response_type", "code"), l.set("client_id", e.clientId), l.set("redirect_uri", u), l.set("state", o), l.set("code_challenge", (0, import_chunk_6recsekb.Gko)(s)), l.set("code_challenge_method", "S256"), l.set("scope", S(e).join(" ")), e.resource !== void 0) l.set("resource", e.resource);
  if (e.bearerTokenType === "access_token" && a.hostname === "accounts.google.com") l.set("access_type", "offline"), l.set("prompt", "consent");
  let f = q(d, `${i}:${g}`, o, r);
  return { authorizationUrl: a.href, tokens: f.then((h) => E(r.tokenEndpoint, { grant_type: "authorization_code", code: h, redirect_uri: u, client_id: e.clientId, code_verifier: s, ...e.resource !== void 0 && { resource: e.resource } })), cancel() {
    d.emit("gateway-idp-cancel");
  } };
}
async function fYl(e, r, i, o) {
  m(r), w(r);
  let s = F(e, o), d = await E(r, { grant_type: "refresh_token", refresh_token: i, client_id: e.clientId, ...s !== void 0 && { scope: s.join(" ") }, ...e.resource !== void 0 && { resource: e.resource } });
  return { ...d, refreshToken: d.refreshToken ?? i };
}
async function E(e, r) {
  let i = r.grant_type === "refresh_token", o, s;
  try {
    let a = await (0, import_chunk_xfj2cwfv.VN)(P, (l) => import_chunk_np189awg.Xd.post(e, new URLSearchParams(r), { ...l, ...C, responseType: "json", headers: { Accept: "application/json" }, validateStatus: () => true }));
    o = a.status, s = a.data;
  } catch (a) {
    throw (0, import_chunk_w578pjby.t)(`${T} token request failed: ${b(a)}`, { level: "warn" }), new gY("transport", "Claude Code could not connect to your organization's identity provider. Check your network. Then try again.");
  }
  if (o === 200) {
    let a = H().safeParse(s);
    if (a.success) {
      let { id_token: l, refresh_token: f, expires_in: h, scope: y } = a.data, _ = typeof h === "number" && h > 0 ? h : void 0;
      return { accessToken: a.data.access_token, ...l && { idToken: l }, ...f && { refreshToken: f }, ..._ !== void 0 && { expiresIn: _ }, ...y && { grantedScopes: y.split(/\s+/).filter(Boolean) } };
    }
  }
  let d = N().safeParse(s), g = d.success ? d.data.error : "unknown";
  (0, import_chunk_w578pjby.t)(`${T} token endpoint answered ${o} (${g})`, { level: "warn" });
  let u = i && o >= 400 && o < 500 && o !== 408 && o !== 429;
  if (u && g === "invalid_grant") throw new gY("invalid_grant", "Your sign-in to your organization's gateway has ended.");
  if (u && o !== 407 && !D.has(g)) throw new gY("renewal_refused", "The request to renew your sign-in to your organization's gateway was refused.");
  throw new gY("token_refused", "Claude Code could not get a token from your organization's identity provider after you signed in. You can try again or ask your administrator.");
}
function m(e) {
  if (!URL.canParse(e) || new URL(e).protocol !== "https:") throw new gY("endpoint_not_https", "Your organization's identity provider does not use an https address. Ask your administrator.");
}
function w(e) {
  if ((0, import_chunk_3jjr3wje.nL)(e)) throw new gY("endpoint_on_anthropic_host", "Your organization's sign-in settings name an Anthropic address as the identity provider. Ask your administrator.");
}
function b(e) {
  return (0, import_chunk_3jjr3wje.fd)(e) ? `${e.code ?? "error"} ${e.response?.status ?? ""}`.trim() : "error";
}
function Y(e, r, i) {
  return new Promise((o, s) => {
    e.once("error", (d) => {
      s(d.code === "EADDRINUSE" ? new gY("port_busy", `Another program is using port ${i}, and the gateway sign-in needs this port. Close that program. Then try again.`) : new gY("listener", `Claude Code could not listen on ${r}${i === 0 ? "" : `:${i}`} to receive the sign-in. You can try again or ask your administrator.`));
    }), e.listen(i, r, () => {
      let d = e.address();
      o(d !== null && typeof d === "object" ? d.port : i);
    });
  });
}
function j(e) {
  e.emit("gateway-idp-end", new gY("timed_out", "The sign-in took too long. Try again."));
}
function q(e, r, i, o) {
  let s = setTimeout(j, O, e);
  return new Promise((d, g) => {
    e.once("gateway-idp-end", (u) => {
      if (clearTimeout(s), e.close(), typeof u === "string") d(u);
      else g(u);
    }), e.once("error", () => e.emit("gateway-idp-end", new gY("listener", "Claude Code can no longer receive the sign-in on this computer. Try again."))), e.once("gateway-idp-cancel", () => e.emit("gateway-idp-end", new gY("cancelled", "The sign-in was cancelled."))), e.on("request", (u, a) => {
      if (u.headers.host !== r || !URL.canParse(u.url ?? "/", `http://${r}`)) {
        a.writeHead(400, { Connection: "close" }).end();
        return;
      }
      let l = new URL(u.url ?? "/", `http://${r}`);
      if (l.pathname !== I) {
        a.writeHead(404, { Connection: "close" }).end();
        return;
      }
      if (l.searchParams.get("state") !== i) {
        a.writeHead(400, { Connection: "close" }).end();
        return;
      }
      let [f, ...h] = l.searchParams.getAll("iss"), y = h.length > 0 || (f === void 0 ? o.sendsIssuer === true && !l.searchParams.has("error") : (0, import_chunk_3jjr3wje.nL)(f) || o.issuer !== void 0 && f.replace(/\/+$/, "") !== o.issuer.replace(/\/+$/, "")), _ = l.searchParams.get("code"), k = y || l.searchParams.has("error") || !_;
      a.writeHead(k ? 400 : 200, { "Content-Type": "text/html", Connection: "close" }), a.end((0, import_chunk_x8rfwr2t.PMe)(k ? { ok: false, heading: "Sign-in not finished", message: "Close this tab. Then try again from Claude Code." } : { ok: true, heading: "Return to Claude Code", message: "Close this tab. Claude Code finishes the sign-in." })), e.emit("gateway-idp-end", y ? new gY("wrong_issuer", "The answer in your browser did not come from your organization's identity provider, so Claude Code stopped the sign-in. Tell your administrator.") : k ? new gY("denied", "Your organization's identity provider stopped the sign-in in your browser. You can try again or ask your administrator.") : _);
    });
  });
}
