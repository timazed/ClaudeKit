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
var chunk_35bhf5yw_exports = {};
__export(chunk_35bhf5yw_exports, {
  $8n: () => $8n,
  D8n: () => D8n,
  Dbn: () => Dbn,
  F8n: () => F8n,
  H8n: () => H8n,
  I8n: () => I8n,
  L8n: () => L8n,
  M8n: () => M8n,
  N8n: () => N8n,
  U8n: () => U8n
});
module.exports = __toCommonJS(chunk_35bhf5yw_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_q3zwm6gk = require("/$bunfs/root/chunk-q3zwm6gk.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var O = "urn:ietf:params:oauth:grant-type:device_code", k = "claude_code", U = /* @__PURE__ */ new Set(["UNABLE_TO_VERIFY_LEAF_SIGNATURE", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "CERT_UNTRUSTED"]), _ = 254, b = "Sign-in timed out while waiting for you to continue. Try again.", I8n = "Gateway login is required by your organization's policy, but no gateway URL is configured. Contact your IT administrator.", M8n = "You haven't connected to this gateway before. Once trusted, it can push settings to this machine that execute commands and change your environment. Only continue if this is your organization's gateway.", H8n = "The TLS certificate for this gateway has changed since you last connected. Only continue if your administrator has confirmed a certificate rotation.", D8n = "Certificate fingerprint (SHA-256):", L8n = "Yes, trust this gateway", N8n = "A browser window should have opened. After signing in with your identity provider, confirm this code on the verification page:", F8n = "Browser didn't open? Visit:", $8n = "Continue only if this is your account; that organization's settings will then apply to this machine. Otherwise go back: nothing is saved, and you can sign in again.", U8n = "Yes, continue", G = "The gateway's TLS certificate changed during sign-in: it no longer matches the one you trusted. Aborting without storing credentials; start the sign-in again to review the new certificate.";
function y(e) {
  let { kind: n, status: i, message: o } = (0, import_chunk_jv7av99m.$i)(e);
  if ((0, import_chunk_w578pjby.t)(`[gateway-login] ${o}`), o.includes(import_chunk_tvttgr51.VVt)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) is a symlink, which it does not follow. Replace the link with the file itself and try again.";
  if (o.includes(import_chunk_tvttgr51.JVn)) return "Claude Code's credentials file (where a gateway's TLS pin is kept) could not be read. Try again; if it keeps failing, check the file.";
  if ((0, import_chunk_tvttgr51.Ghn)(e) !== void 0) return G;
  if (i !== void 0) return `The gateway answered HTTP ${i}.${i >= 500 ? " Wait a few minutes and try again." : ""}`;
  if (n === "network" || n === "timeout") return "Couldn't connect to the gateway. Check that you're on your organization's network, then try again.";
  return o;
}
function E(e) {
  let n = e?.response?.data;
  if (typeof n !== "object" || n === null) return;
  let i = n.error_description;
  if (typeof i !== "string") return;
  return (0, import_chunk_7cfjrnwy.ee)((0, import_chunk_7cfjrnwy.I_)(i), 300).trim() || void 0;
}
function D(e) {
  let n = (0, import_chunk_jv7av99m.w)(e) ?? (0, import_chunk_jv7av99m.w)(e?.cause), i = (0, import_chunk_jv7av99m.d)(e);
  if ((0, import_chunk_tvttgr51.XVn)(n, i)) return `Could not verify the gateway's TLS certificate. ${(0, import_chunk_tvttgr51.GVt)()}`;
  if (!(n !== void 0 && U.has(n) || /self[- ]?signed certificate|unable to (verify the first|get (local )?issuer) certificate|certificate not trusted/i.test(i))) return null;
  return "Could not verify the gateway's TLS certificate. If your gateway uses a private CA or self-signed certificate: Claude Code reads your OS trust store by default on the native binary and Node \u226522.15, so if the CA is already installed there, upgrade to a current runtime. Otherwise set NODE_EXTRA_CA_CERTS to the CA certificate PEM file before starting \u2014 e.g. `export NODE_EXTRA_CA_CERTS=/path/to/ca.pem` \u2014 or add it under `env.NODE_EXTRA_CA_CERTS` in your user settings (~/.claude/settings.json).";
}
var L = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ device_authorization_endpoint: (0, import_chunk_rnm2beqc.we)().optional(), token_endpoint: (0, import_chunk_rnm2beqc.we)().optional(), revocation_endpoint: (0, import_chunk_rnm2beqc.we)().nullish().catch(void 0) }));
function S(e, n, i) {
  let o = (0, import_chunk_np189awg.JOs)(e, n);
  if (o) return o;
  if (n) (0, import_chunk_w578pjby.t)(`[gateway-login] ignoring advertised endpoint ${n} (not same-origin with ${e}); using ${i}`);
  return `${e}${i}`;
}
var z = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ device_code: (0, import_chunk_rnm2beqc.we)(), user_code: (0, import_chunk_rnm2beqc.we)(), verification_uri: (0, import_chunk_rnm2beqc.we)(), verification_uri_complete: (0, import_chunk_rnm2beqc.we)().optional(), expires_in: (0, import_chunk_rnm2beqc.nr)(), interval: (0, import_chunk_rnm2beqc.nr)().optional(), login_notice: (0, import_chunk_rnm2beqc.we)().optional().catch(void 0) })), m = "Your organization's settings no longer offer this gateway's sign-in. Run /status for details.";
function C(e, n) {
  return e !== void 0 && ((0, import_chunk_xcgcdx61.nxt)(e) === null || n && (0, import_chunk_xcgcdx61.S3)());
}
class Dbn {
  credentials;
  openPage;
  store = (0, import_chunk_se72nykz.ps)({ state: "url_input" });
  status = this.store;
  generation = 0;
  vouchedAtLogin = false;
  organizationUuid;
  slot = import_chunk_np189awg.qke;
  revoking = Promise.resolve();
  constructor(e, n) {
    this.credentials = e;
    this.openPage = n;
  }
  moveTo(e) {
    this.store.setState(() => e);
  }
  restart() {
    let { state: e } = this.store.getState();
    if (e === "saving" || e === "done" || e === "cancelled") return;
    this.generation += 1, this.moveTo({ state: "url_input" });
  }
  cancel() {
    if (this.store.getState().state === "done") return;
    this.generation += 1, this.moveTo({ state: "cancelled" });
  }
  trust() {
    let e = this.store.getState();
    if (e.state !== "trust_prompt") return;
    let n = this.generation;
    (0, import_chunk_tvttgr51.xNl)(e.hostname, e.fingerprint, this.credentials).then(() => {
      if (n !== this.generation) return;
      return this.startDeviceAuth(e.url, e.endpoints, e.fingerprint, e.allowlistEntry);
    }).catch((i) => {
      if (n !== this.generation) return;
      this.moveTo({ state: "error", message: (0, import_chunk_jv7av99m.d)(i) });
    });
  }
  confirmAccount() {
    let e = this.store.getState();
    if (e.state !== "confirm_account") return;
    if (e.auth.expiresAt <= Date.now() && !e.auth.idpRefreshToken) {
      this.moveTo({ state: "error", message: b });
      return;
    }
    this.completeLogin(e.auth, e.allowlistEntry, this.generation);
  }
  async connect(e) {
    if (this.store.getState().state !== "url_input") return;
    let n = ++this.generation;
    if (e.namedBy === "organization" && C(e.organizationUuid, e.keepsOrganizationSettings === true)) {
      this.moveTo({ state: "error", message: m });
      return;
    }
    this.moveTo({ state: "connecting" });
    try {
      let i = (0, import_chunk_tvttgr51.p8)(e.url);
      if (this.slot = import_chunk_np189awg.qke, e.keepsOrganizationSettings) {
        let T = require("/$bunfs/root/chunk-hxqzwt88.js");
        this.slot = T.HYBRID_GATEWAY_AUTH_SLOT;
      }
      let o = this.slot === import_chunk_np189awg.qke ? await (0, import_chunk_tvttgr51.RNl)(i, e.internalNetworks, e.namedBy) : void 0;
      if (n !== this.generation) return;
      this.vouchedAtLogin = o?.basis === "vouched", this.organizationUuid = e.namedBy === "organization" ? e.organizationUuid : void 0;
      let r = o?.basis === "network" ? o.network : void 0, a = o?.basis === "allowlisted" ? o.entry : void 0, l = o?.basis === "allowlisted" ? o.judged : r ? await (0, import_chunk_tvttgr51.zVt)(i, 1e4, r) : void 0;
      if (n !== this.generation) return;
      let g = await import_chunk_np189awg.Xd.get(`${i}/.well-known/oauth-authorization-server`, { headers: { "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, timeout: 1e4, ...o?.basis === "allowlisted" && { httpsAgent: (0, import_chunk_tvttgr51.Xhe)(o.judged.fingerprint, i, true), maxRedirects: 0 }, ...o === void 0 && { maxRedirects: 0 } });
      if (n !== this.generation) return;
      let s = L().safeParse(g.data), c = s.success ? s.data : void 0, u = (0, import_chunk_np189awg.JOs)(i, c?.revocation_endpoint);
      if (c?.revocation_endpoint && !u) (0, import_chunk_w578pjby.t)(`[gateway-login] ignoring advertised revocation endpoint ${c.revocation_endpoint} (not same-origin with ${i}); sign-out will not revoke`);
      let h = { deviceAuthorizationEndpoint: S(i, c?.device_authorization_endpoint, "/oauth/device_authorization"), tokenEndpoint: S(i, c?.token_endpoint, "/oauth/token"), ...u && { revocationEndpoint: u } };
      if (o === void 0) {
        await this.startDeviceAuth(i, h, void 0, void 0);
        return;
      }
      let { hostname: f, fingerprint: v, localAddress: I, remoteAddress: N } = l ?? await (0, import_chunk_tvttgr51.zVt)(i);
      if (n !== this.generation) return;
      let A = await (0, import_chunk_tvttgr51.Mze)(f, this.credentials);
      if (n !== this.generation) return;
      if (A === v) await this.startDeviceAuth(i, h, v, a);
      else this.moveTo({ state: "trust_prompt", url: i, hostname: f, fingerprint: v, previouslyPinned: A, endpoints: h, allowlistEntry: a, ...r && { route: `from ${I} to ${N}, both inside declared ${r}` } });
    } catch (i) {
      if (n !== this.generation) return;
      let o = D(i);
      this.moveTo(o ? { state: "error", message: o, detail: (0, import_chunk_jv7av99m.d)(i) } : { state: "error", message: y(i) });
    }
  }
  async startDeviceAuth(e, n, i, o) {
    let r = ++this.generation;
    this.moveTo({ state: "connecting" });
    try {
      let a = (0, import_chunk_tvttgr51.Xhe)(i, n.deviceAuthorizationEndpoint), { data: l } = await import_chunk_np189awg.Xd.post(n.deviceAuthorizationEndpoint, new URLSearchParams({ surface: k }).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, timeout: 1e4, maxRedirects: 0, ...a && { httpsAgent: a } });
      if (r !== this.generation) return;
      let g = z().safeParse(l);
      if (!g.success) throw Error("gateway device authorization endpoint returned malformed response");
      let s = g.data, c = s.verification_uri_complete ?? s.verification_uri;
      this.openPage(c), this.moveTo({ state: "polling", url: e, userCode: s.user_code, verificationUri: s.verification_uri, browserUrl: c, loginNotice: s.login_notice ? (0, import_chunk_tp3c5q2s.Ft)(s.login_notice, import_chunk_q3zwm6gk.pBr) : void 0 }), await this.pollForToken(e, n, s.device_code, s.interval ?? 5, r, i, o);
    } catch (a) {
      if (r !== this.generation) return;
      if ((0, import_chunk_np189awg.ZOs)(a) === "slow_down") {
        this.moveTo({ state: "error", message: "The gateway is limiting sign-in attempts right now. Wait a few minutes and try again.", detail: E(a) });
        return;
      }
      this.moveTo({ state: "error", message: y(a), detail: E(a) });
    }
  }
  async pollForToken(e, n, i, o, r, a, l) {
    let { tokenEndpoint: g } = n, s = Math.max(1, o);
    while (r === this.generation) {
      if (await (0, import_chunk_5appeerh.K)(s * 1e3), r !== this.generation) return;
      try {
        let c = (0, import_chunk_tvttgr51.Xhe)(a, g), { data: u } = await import_chunk_np189awg.Xd.post(g, new URLSearchParams({ grant_type: O, device_code: i }).toString(), { headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, timeout: 1e4, maxRedirects: 0, ...c && { httpsAgent: c } });
        if (r !== this.generation) return;
        let h = (0, import_chunk_np189awg.$Yi)().safeParse(u);
        if (!h.success) throw Error("gateway token endpoint returned malformed response");
        await this.finishLogin(e, n, h.data, r, l);
        return;
      } catch (c) {
        if (r !== this.generation) return;
        let u = (0, import_chunk_np189awg.ZOs)(c);
        if (u === "authorization_pending") continue;
        if (u === "slow_down") {
          s += 5;
          continue;
        }
        if (u === "expired_token") {
          this.moveTo({ state: "error", message: "Sign-in timed out before the browser flow completed. Try again." });
          return;
        }
        if (u === "access_denied") {
          this.moveTo({ state: "error", message: "Sign-in was denied in the browser." });
          return;
        }
        this.moveTo({ state: "error", message: y(c), detail: E(c) });
        return;
      }
    }
  }
  async finishLogin(e, n, i, o, r) {
    let a = i.email ?? "", l = (0, import_chunk_7cfjrnwy.ee)(a, 16 * _), g = (0, import_chunk_7cfjrnwy.el)(l), s = l.length < a.length || g.length > _ ? `${(0, import_chunk_7cfjrnwy.ee)(g, _)}\u2026` : g, c = { url: e, jwt: i.access_token, expiresAt: Date.now() + i.expires_in * 1e3, tokenEndpoint: n.tokenEndpoint, ...n.revocationEndpoint && { revocationEndpoint: n.revocationEndpoint }, ...i.refresh_token && { idpRefreshToken: i.refresh_token }, ...s && { email: s }, vouchedAtLogin: this.vouchedAtLogin, ...this.organizationUuid !== void 0 && { organizationUuid: this.organizationUuid } };
    if (this.slot === import_chunk_np189awg.qke) {
      let { hostname: u, fingerprint: h } = await (0, import_chunk_tvttgr51.zVt)(e);
      if (o !== this.generation) return;
      let f = await (0, import_chunk_tvttgr51.Mze)(u, this.credentials);
      if (o !== this.generation) return;
      if (f !== h) {
        this.moveTo({ state: "error", message: G });
        return;
      }
    }
    if (s) {
      this.moveTo({ state: "confirm_account", auth: c, allowlistEntry: r, email: s });
      return;
    }
    await this.completeLogin(c, r, o);
  }
  isWithdrawn() {
    return C(this.organizationUuid, this.slot !== import_chunk_np189awg.qke);
  }
  async completeLogin(e, n, i) {
    if (this.isWithdrawn()) {
      this.revoking = (0, import_chunk_np189awg.UYi)(e, this.slot.held(), this.credentials, { outcome: "untouched", message: m }, this.slot === import_chunk_np189awg.qke), this.moveTo({ state: "error", message: m });
      return;
    }
    this.moveTo({ state: "saving", email: e.email });
    let o = this.slot.held(), r = await (0, import_chunk_np189awg.U0l)(e, this.credentials, n, this.slot), a = this.isWithdrawn();
    if (r.outcome !== "saved" || i !== this.generation || a) {
      if (await (0, import_chunk_np189awg.$0l)(e, o, this.credentials, r, this.slot), this.revoking = (0, import_chunk_np189awg.UYi)(e, o, this.credentials, r, this.slot === import_chunk_np189awg.qke), r.outcome !== "saved" && i === this.generation) (0, import_chunk_w578pjby.t)(`[gateway-login] secureStorage write failed: ${r.message}`, { level: "error" }), this.moveTo({ state: "error", message: r.message });
      else if (a && i === this.generation) this.moveTo({ state: "error", message: m });
      return;
    }
    (0, import_chunk_xfr8663h.wLe)({ action: "login", success: true, authMethod: "oauth" }), this.moveTo({ state: "done", email: e.email });
  }
}
