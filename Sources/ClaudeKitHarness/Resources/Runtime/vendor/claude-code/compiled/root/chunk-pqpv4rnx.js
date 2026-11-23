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
var chunk_pqpv4rnx_exports = {};
__export(chunk_pqpv4rnx_exports, {
  NYe: () => NYe,
  Wko: () => Wko,
  aEl: () => aEl,
  y9: () => y9,
  yTr: () => yTr
});
module.exports = __toCommonJS(chunk_pqpv4rnx_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_6recsekb = require("/$bunfs/root/chunk-6recsekb.js");
var import_chunk_h3t3td58 = require("/$bunfs/root/chunk-h3t3td58.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_http = require("http");
var O = 200, k = "Sign-in was canceled or failed. You can close this window.";
class A {
  localServer;
  port = 0;
  promiseResolver = null;
  promiseRejecter = null;
  expectedState = null;
  pendingResponse = null;
  callbackPath;
  codeReceived = false;
  constructor(e = "/callback") {
    this.localServer = (0, import_http.createServer)(), this.callbackPath = e;
  }
  async start(e) {
    return new Promise((r, o) => {
      this.localServer.once("error", (s) => {
        (0, import_chunk_cqa9hrgx.m)("oauth_callback_listener", "oauth_callback_server_start_failed"), o(Error(`Failed to start OAuth callback server: ${s.message}`, { cause: s }));
      }), this.localServer.listen(e ?? 0, "127.0.0.1", () => {
        let s = this.localServer.address();
        this.port = s.port, r(this.port);
      });
    });
  }
  getPort() {
    return this.port;
  }
  hasPendingResponse() {
    return this.pendingResponse !== null;
  }
  async waitForAuthorization(e, r) {
    return new Promise((o, s) => {
      this.promiseResolver = o, this.promiseRejecter = s, this.expectedState = e, this.startLocalListener(r);
    });
  }
  handleSuccessRedirect(e, r) {
    if (!this.pendingResponse) return;
    if (r) {
      r(this.pendingResponse, e), this.pendingResponse = null, (0, import_chunk_y53wbr8a.a)("tengu_oauth_automatic_redirect", { custom_handler: true });
      return;
    }
    let o = (0, import_chunk_865at33z.L4)(e) ? (0, import_chunk_ephf358x.cn)().CLAUDEAI_SUCCESS_URL : (0, import_chunk_ephf358x.cn)().CONSOLE_SUCCESS_URL;
    this.pendingResponse.writeHead(302, { Location: o }), this.pendingResponse.end(), this.pendingResponse = null, (0, import_chunk_y53wbr8a.a)("tengu_oauth_automatic_redirect", {});
  }
  handleErrorRedirect() {
    if (!this.pendingResponse) return;
    this.pendingResponse.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }), this.pendingResponse.end(k), this.pendingResponse = null, (0, import_chunk_y53wbr8a.a)("tengu_oauth_automatic_redirect_error", {});
  }
  startLocalListener(e) {
    this.localServer.on("request", this.handleRedirect.bind(this)), this.localServer.on("error", this.handleError.bind(this)), e();
  }
  handleRedirect(e, r) {
    let o = new URL(e.url || "", `http://${e.headers.host || "localhost"}`);
    if (o.pathname !== this.callbackPath) {
      r.writeHead(404), r.end();
      return;
    }
    let s = o.searchParams.get("code") ?? void 0, n = o.searchParams.get("state") ?? void 0, c = o.searchParams.get("error") ?? void 0;
    if (!s && c && (0, import_chunk_9b4aq7fb.BVn)()) {
      this.respondToErrorCallback({ error: c, errorDescription: o.searchParams.get("error_description") ?? void 0, errorUri: o.searchParams.get("error_uri") ?? void 0, state: n, res: r });
      return;
    }
    this.validateAndRespond(s, n, r);
  }
  validateAndRespond(e, r, o) {
    if (r === this.expectedState && this.answerIfCodeReceived(o)) return;
    if (!e) {
      (0, import_chunk_cqa9hrgx.m)("oauth_callback_listener", "oauth_callback_no_code"), o.writeHead(400), o.end("Authorization code not found"), this.reject(Error("No authorization code received"));
      return;
    }
    if (this.rejectOnStateMismatch(r, o)) return;
    this.codeReceived = true, this.pendingResponse = o, (0, import_chunk_cqa9hrgx.u)("oauth_callback_listener"), this.resolve(e);
  }
  respondToErrorCallback({ error: e, errorDescription: r, errorUri: o, state: s, res: n }) {
    if (this.rejectOnStateMismatch(s, n)) return;
    if (this.answerIfCodeReceived(n)) return;
    let c = r === import_chunk_9b4aq7fb.Jct;
    (0, import_chunk_cqa9hrgx.m)("oauth_callback_listener", c ? "oauth_callback_account_on_hold" : "oauth_callback_authorize_error");
    let f = c ? (0, import_chunk_9b4aq7fb.uJe)(o) : void 0, g = f && (0, import_chunk_9b4aq7fb.CIs)(f), C = g ? `

Reference: ${g}` : "";
    n.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }), n.end(c ? `Your account is on hold. You can close this window.${C}` : k), this.reject(new import_chunk_9b4aq7fb.Qke(E(e), r === void 0 ? void 0 : E(r), f));
  }
  answerIfCodeReceived(e) {
    if (!this.codeReceived) return false;
    return e.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" }), e.end("Sign-in is already finishing. You can close this window."), true;
  }
  rejectOnStateMismatch(e, r) {
    if (e === this.expectedState) return false;
    return (0, import_chunk_cqa9hrgx.m)("oauth_callback_listener", "oauth_callback_state_mismatch"), r.writeHead(400), r.end("Invalid state parameter"), this.reject(Error("Invalid state parameter")), true;
  }
  handleError(e) {
    (0, import_chunk_cqa9hrgx.m)("oauth_callback_listener", "oauth_callback_server_error"), (0, import_chunk_k449cc64.i)(e), this.close(), this.reject(e);
  }
  resolve(e) {
    if (this.promiseResolver) this.promiseResolver(e), this.promiseResolver = null, this.promiseRejecter = null;
  }
  reject(e) {
    if (this.promiseRejecter) this.promiseRejecter(e), this.promiseResolver = null, this.promiseRejecter = null;
  }
  close() {
    if (this.pendingResponse) this.handleErrorRedirect();
    if (this.localServer) this.localServer.removeAllListeners(), this.localServer.close();
  }
  [Symbol.dispose]() {
    this.close();
  }
}
function E(e) {
  return (0, import_chunk_7cfjrnwy.ee)(e.replace(/[\p{Cc}\p{Cf}\p{Cs}\u2028\u2029]/gu, ""), O);
}
class NYe extends Error {
  constructor() {
    super("That code wasn't accepted. It may be incomplete, expired, already used, or from an earlier sign-in attempt. Sign in again to get a new code.");
    this.name = "AuthCodeRefusedError";
  }
}
class Wko extends Error {
  constructor(e) {
    super("Couldn't start the local listener that receives the browser sign-in. Try again.", { cause: e });
    this.name = "CallbackListenerUnavailableError";
  }
}
var yTr = "The browser can't return the sign-in to Claude Code automatically. After you sign in, paste the code shown.", aEl = "Paste code here > ";
class y9 {
  codeVerifier;
  authCodeListener = null;
  manualAuthCodeResolver = null;
  authorizationCodeReceived = (0, import_chunk_se72nykz.ps)(false);
  constructor() {
    this.codeVerifier = (0, import_chunk_6recsekb.jko)();
  }
  async startOAuthFlow(e, r) {
    this.authorizationCodeReceived.setState(() => false);
    let o = null;
    this.authCodeListener = new A();
    try {
      o = await this.authCodeListener.start();
    } catch (h) {
      this.authCodeListener = null, (0, import_chunk_w578pjby.t)(`OAuth callback listener could not start: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "error" });
      let p = h instanceof Error ? (0, import_chunk_jv7av99m.w)(h.cause) : void 0;
      if (!r?.onCallbackListenerUnavailable || p === "EMFILE" || p === "ENFILE") throw new Wko(h);
      r.onCallbackListenerUnavailable();
    }
    let s = (0, import_chunk_6recsekb.Gko)(this.codeVerifier), n = (0, import_chunk_6recsekb.zko)(), c = { codeChallenge: s, state: n, port: o ?? 0, loginWithClaudeAi: r?.loginWithClaudeAi, inferenceOnly: r?.inferenceOnly, orgUUID: r?.orgUUID, loginHint: r?.loginHint, loginMethod: r?.loginMethod, oauthClient: r?.oauthClient, alsoRequestScope: r?.settingsOnlyGrant?.scope }, f = (0, import_chunk_865at33z.QCs)({ ...c, isManual: true }), g = o === null ? void 0 : (0, import_chunk_865at33z.QCs)({ ...c, isManual: false }), C = await this.waitForAuthorizationCode(n, async () => {
      if (g === void 0) await e(f);
      else if (r?.skipBrowserOpen) await e(f, g);
      else await e(f), await (0, import_chunk_h3t3td58.ml)(g);
    }), v = this.authCodeListener?.hasPendingResponse() ?? false;
    (0, import_chunk_y53wbr8a.a)("tengu_oauth_auth_code_received", { automatic: v });
    try {
      let h = await (0, import_chunk_865at33z.JVi)(C, { state: n, codeVerifier: this.codeVerifier, port: c.port, useManualRedirect: !v, expiresIn: r?.expiresIn, clientId: r?.oauthClient?.clientId });
      if (v) {
        let R = (0, import_chunk_865at33z.LCo)(h.scope), _ = r?.settingsOnlyGrant, b = _ && R.includes(_.scope) && !(0, import_chunk_865at33z.L4)(R) ? _.successRedirectUrl : r?.successRedirectUrl;
        if (b) this.authCodeListener?.handleSuccessRedirect(R, (S) => {
          S.writeHead(302, { Location: b }), S.end();
        });
        else this.authCodeListener?.handleSuccessRedirect(R);
      }
      let p = r?.skipProfileFetch ? null : await (0, import_chunk_865at33z._Gn)(h.access_token);
      if (o === null) (0, import_chunk_cqa9hrgx.l)("oauth_login", "callback_listener_unavailable");
      else (0, import_chunk_cqa9hrgx.u)("oauth_login");
      return this.formatTokens(h, { subscriptionType: p?.subscriptionType ?? null, unconfirmedPlan: p?.originStamped !== true, rateLimitTier: p?.rateLimitTier ?? null, profile: p?.rawProfile, clientId: r?.oauthClient?.clientId });
    } catch (h) {
      let p = !v && (0, import_chunk_865at33z.N4)(h);
      if ((0, import_chunk_cqa9hrgx.m)("oauth_login", p ? "oauth_pasted_code_refused" : "oauth_login_failed"), v) this.authCodeListener?.handleErrorRedirect();
      if (!r?.inferenceOnly && !r?.oauthClient) (0, import_chunk_xfr8663h.wLe)({ action: "login", success: false, authMethod: "oauth", error: h });
      throw p ? new NYe() : h;
    } finally {
      this.authCodeListener?.close();
    }
  }
  async waitForAuthorizationCode(e, r) {
    return new Promise((o, s) => {
      if (this.manualAuthCodeResolver = o, !this.authCodeListener) {
        r().catch((n) => {
          this.manualAuthCodeResolver = null, s(n);
        });
        return;
      }
      this.authCodeListener.waitForAuthorization(e, r).then((n) => {
        this.manualAuthCodeResolver = null, this.authorizationCodeReceived.setState(() => true), o(n);
      }).catch((n) => {
        this.manualAuthCodeResolver = null, s(n);
      });
    });
  }
  handleManualAuthCodeInput(e) {
    if (this.manualAuthCodeResolver) this.authorizationCodeReceived.setState(() => true), this.manualAuthCodeResolver(e.authorizationCode), this.manualAuthCodeResolver = null, this.authCodeListener?.close();
  }
  formatTokens(e, { subscriptionType: r, unconfirmedPlan: o, rateLimitTier: s, profile: n, clientId: c }) {
    return { accessToken: e.access_token, refreshToken: e.refresh_token, expiresAt: Date.now() + e.expires_in * 1e3, refreshTokenExpiresAt: (0, import_chunk_865at33z.JCs)(e.refresh_token_expires_in, true), scopes: (0, import_chunk_865at33z.LCo)(e.scope), subscriptionType: r, ...r !== null && { subscriptionTypeSource: o ? "profile" : "sign_in" }, rateLimitTier: s, profile: n, clientId: c, tokenAccount: e.account ? { uuid: e.account.uuid, emailAddress: e.account.email_address, organizationUuid: e.organization?.uuid, organizationName: e.organization?.name, workspaceId: e.workspace?.id, workspaceName: e.workspace?.name } : void 0 };
  }
  hasReceivedAuthorizationCode() {
    return this.authorizationCodeReceived.getSnapshot();
  }
  get codeReceived() {
    return this.authorizationCodeReceived;
  }
  cleanup() {
    this.authCodeListener?.close(), this.manualAuthCodeResolver = null;
  }
}
