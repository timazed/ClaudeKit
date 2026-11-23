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
var chunk_3f2ytgjw_exports = {};
__export(chunk_3f2ytgjw_exports, {
  AEs: () => AEs,
  AGi: () => AGi,
  CGi: () => CGi,
  Dwe: () => Dwe,
  EGi: () => EGi,
  Ejn: () => Ejn,
  Hwe: () => Hwe,
  IN: () => IN,
  OTl: () => OTl,
  PTl: () => PTl,
  Qvt: () => Qvt,
  TCr: () => TCr,
  TGi: () => TGi,
  _ed: () => _ed,
  cGe: () => cGe,
  jT: () => jT,
  qEo: () => qEo,
  uGe: () => uGe,
  vGi: () => vGi,
  vjn: () => vjn,
  xTl: () => xTl
});
module.exports = __toCommonJS(chunk_3f2ytgjw_exports);
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_path2 = require("path");
var IN = "0.128.0";
var xTl = () => typeof window < "u" && typeof window.document < "u" && typeof navigator < "u";
function ae() {
  if (typeof Deno < "u" && Deno.build != null) return "deno";
  if (typeof EdgeRuntime < "u") return "edge";
  if (Object.prototype.toString.call(typeof globalThis.process < "u" ? globalThis.process : 0) === "[object process]") return "node";
  return "unknown";
}
var ce = () => {
  let e = ae();
  if (e === "deno") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": IN, "X-Stainless-OS": L(Deno.build.os), "X-Stainless-Arch": W(Deno.build.arch), "X-Stainless-Runtime": "deno", "X-Stainless-Runtime-Version": typeof Deno.version === "string" ? Deno.version : Deno.version?.deno ?? "unknown" };
  if (typeof EdgeRuntime < "u") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": IN, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": `other:${EdgeRuntime}`, "X-Stainless-Runtime": "edge", "X-Stainless-Runtime-Version": globalThis.process?.version ?? "unknown" };
  if (e === "node") return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": IN, "X-Stainless-OS": L(globalThis.process.platform ?? "unknown"), "X-Stainless-Arch": W(globalThis.process.arch ?? "unknown"), "X-Stainless-Runtime": "node", "X-Stainless-Runtime-Version": globalThis.process.version ?? "unknown" };
  let n = de();
  if (n) return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": IN, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": "unknown", "X-Stainless-Runtime": `browser:${n.browser}`, "X-Stainless-Runtime-Version": n.version };
  return { "X-Stainless-Lang": "js", "X-Stainless-Package-Version": IN, "X-Stainless-OS": "Unknown", "X-Stainless-Arch": "unknown", "X-Stainless-Runtime": "unknown", "X-Stainless-Runtime-Version": "unknown" };
};
function de() {
  if (typeof navigator > "u" || !navigator) return null;
  let e = [{ key: "edge", pattern: /Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "ie", pattern: /MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "ie", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ }, { key: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ }];
  for (let { key: n, pattern: c } of e) {
    let r = c.exec(navigator.userAgent);
    if (r) {
      let o = r[1] || 0, l = r[2] || 0, h = r[3] || 0;
      return { browser: n, version: `${o}.${l}.${h}` };
    }
  }
  return null;
}
var W = (e) => {
  if (e === "x32") return "x32";
  if (e === "x86_64" || e === "x64") return "x64";
  if (e === "arm") return "arm";
  if (e === "aarch64" || e === "arm64") return "arm64";
  if (e) return `other:${e}`;
  return "unknown";
}, L = (e) => {
  if (e = e.toLowerCase(), e.includes("ios")) return "iOS";
  if (e === "android") return "Android";
  if (e === "darwin") return "MacOS";
  if (e === "win32") return "Windows";
  if (e === "freebsd") return "FreeBSD";
  if (e === "openbsd") return "OpenBSD";
  if (e === "linux") return "Linux";
  if (e) return `Other:${e}`;
  return "Unknown";
}, U, qEo = () => U ?? (U = ce());
function I() {
  return Math.floor(Date.now() / 1e3);
}
class Ejn {
  constructor(e, n) {
    this.cached = null, this.pendingRefresh = null, this.nextForce = false, this.lastAdvisoryError = 0, this.provider = e, this.onAdvisoryRefreshError = n;
  }
  async getToken() {
    let e = this.nextForce;
    this.nextForce = false;
    let n = this.cached;
    if (e || n == null) return (await this.refresh(e)).token;
    if (n.expiresAt == null) return n.token;
    let c = n.expiresAt - I();
    if (c > import_chunk_9b4aq7fb.mNl) return n.token;
    if (c > import_chunk_9b4aq7fb.Bhn) return this.backgroundRefresh(), n.token;
    return (await this.refresh()).token;
  }
  invalidate() {
    this.cached = null, this.nextForce = true;
  }
  refresh(e = false) {
    if (this.pendingRefresh && !e) return this.pendingRefresh;
    return this.doRefresh(e);
  }
  backgroundRefresh() {
    if (this.pendingRefresh) return;
    if (I() - this.lastAdvisoryError < import_chunk_9b4aq7fb.hNl) return;
    this.doRefresh().catch((e) => {
      this.lastAdvisoryError = I(), this.onAdvisoryRefreshError?.(e);
    });
  }
  doRefresh(e = false) {
    return this.pendingRefresh = this.provider(e ? { forceRefresh: true } : void 0).then((n) => (this.cached = n, this.pendingRefresh = null, n), (n) => {
      throw this.pendingRefresh = null, n;
    }), this.pendingRefresh;
  }
}
var jT = (e) => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var PTl = "1.0", TCr = "1.0", le = /^[A-Za-z0-9_.-]+$/;
function X(e) {
  if (!e) throw Error("profile name is empty");
  if (e === "." || e === "..") throw Error(`profile name "${e}" is not allowed`);
  if (e.includes("/") || e.includes("\\")) throw Error(`profile name "${e}" must not contain path separators`);
  if (!le.test(e)) throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`);
}
var V = async (e) => (await P(e))?.config ?? null, P = async (e) => {
  var n, c;
  let r = await v();
  if (r === null) return null;
  let o = e ?? await z();
  if (o === null) return null;
  X(o);
  let { fs: l, path: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js"))), p = h.join(r, "configs", `${o}.json`), _;
  try {
    _ = await l.promises.readFile(p, "utf-8");
  } catch (y) {
    if (y?.code !== "ENOENT") throw Error(`failed to read config file ${p}: ${y}`);
    _ = null;
  }
  if (_ === null) {
    let y = jT("ANTHROPIC_ORGANIZATION_ID"), T = jT("ANTHROPIC_IDENTITY_TOKEN_FILE"), E = jT("ANTHROPIC_FEDERATION_RULE_ID");
    if (E && y) return { fromFile: false, config: { organization_id: y, workspace_id: jT("ANTHROPIC_WORKSPACE_ID"), base_url: jT("ANTHROPIC_BASE_URL"), authentication: { type: "oidc_federation", federation_rule_id: E, service_account_id: jT("ANTHROPIC_SERVICE_ACCOUNT_ID"), identity_token: T ? { source: "file", path: T } : void 0, scope: jT("ANTHROPIC_SCOPE") } } };
    return null;
  }
  let k;
  try {
    k = JSON.parse(_);
  } catch (y) {
    throw Error(`failed to parse config file ${p}: ${y}`);
  }
  if (!k.authentication) throw Error(`config file ${p} is missing "authentication"`);
  let g = k.authentication.type;
  if (g !== "oidc_federation" && g !== "user_oauth") throw Error(`authentication.type "${g}" is not a known authentication type`);
  if (k.organization_id ?? (k.organization_id = jT("ANTHROPIC_ORGANIZATION_ID")), k.workspace_id ?? (k.workspace_id = jT("ANTHROPIC_WORKSPACE_ID")), k.base_url ?? (k.base_url = jT("ANTHROPIC_BASE_URL")), (n = k.authentication).scope ?? (n.scope = jT("ANTHROPIC_SCOPE")), k.authentication.type === "oidc_federation") {
    if (!k.authentication.identity_token) {
      let y = jT("ANTHROPIC_IDENTITY_TOKEN_FILE");
      if (y) k.authentication.identity_token = { source: "file", path: y };
    }
    if (!k.authentication.federation_rule_id) k.authentication.federation_rule_id = jT("ANTHROPIC_FEDERATION_RULE_ID") ?? "";
    (c = k.authentication).service_account_id ?? (c.service_account_id = jT("ANTHROPIC_SERVICE_ACCOUNT_ID"));
  }
  return { config: k, fromFile: true };
};
var C = async (e, n) => {
  if (e?.authentication.credentials_path) return e.authentication.credentials_path;
  let c = await v();
  if (!c) return null;
  let r = n ?? await z();
  if (!r) return null;
  X(r);
  let { path: o } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js")));
  return o.join(c, "credentials", `${r}.json`);
}, v = async () => {
  if (!ue()) return null;
  let { path: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js"))), n = jT("ANTHROPIC_CONFIG_DIR");
  if (n) return n;
  if (qEo()["X-Stainless-OS"] === "Windows") {
    let l = jT("APPDATA");
    if (l) return e.join(l, "Anthropic");
    let h = jT("USERPROFILE");
    if (h) return e.join(h, "AppData", "Roaming", "Anthropic");
    return null;
  }
  let r = jT("XDG_CONFIG_HOME");
  if (r) return e.join(r, "anthropic");
  let o = jT("HOME");
  if (o) return e.join(o, ".config", "anthropic");
  return null;
}, ue = () => {
  let e = qEo()["X-Stainless-Runtime"];
  return e === "node" || e === "deno";
}, z = async () => {
  let e = await v();
  if (!e) return null;
  let n = jT("ANTHROPIC_PROFILE");
  if (n) return n;
  let { fs: c, path: r } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js"))), o = r.join(e, "active_config");
  try {
    return (await c.promises.readFile(o, "utf-8")).trim() || "default";
  } catch (l) {
    if (l?.code !== "ENOENT") throw Error(`failed to read ${o}: ${l}`);
    return "default";
  }
};
function F(e) {
  if (!e) throw new import_chunk_jv7av99m.Mo("Identity token file path is empty");
  return async () => {
    let { fs: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js"))), c;
    try {
      c = await n.promises.readFile(e, "utf-8");
    } catch (o) {
      throw new import_chunk_jv7av99m.Mo(`Failed to read identity token file at ${e}: ${o}`);
    }
    let r = c.trim();
    if (!r) throw new import_chunk_jv7av99m.Mo(`Identity token file at ${e} is empty`);
    return r;
  };
}
function B(e) {
  if (!e) throw new import_chunk_jv7av99m.Mo("Identity token value is empty");
  return () => e;
}
function q(e) {
  return async () => {
    (0, import_chunk_9b4aq7fb.vIs)(e.baseURL);
    let n = await e.identityTokenProvider();
    if (n.length > 16384) throw new import_chunk_9b4aq7fb.og(`Identity token is ${Math.ceil(n.length / 1024)} KiB, exceeds the 16 KiB assertion limit`);
    let c = { grant_type: import_chunk_9b4aq7fb.uNl, assertion: n, federation_rule_id: e.federationRuleId, organization_id: e.organizationId };
    if (e.serviceAccountId) c.service_account_id = e.serviceAccountId;
    if (e.workspaceId) c.workspace_id = e.workspaceId;
    let r = `${e.baseURL}${import_chunk_9b4aq7fb.EIs}`, o;
    try {
      o = await e.fetch(r, { method: "POST", headers: { "Content-Type": "application/json", "anthropic-beta": `${import_chunk_9b4aq7fb.Uhn},${import_chunk_9b4aq7fb.pNl}`, "User-Agent": e.userAgent || `anthropic-sdk-typescript/${IN} oidcFederationProvider` }, body: JSON.stringify(c) });
    } catch (_) {
      throw new import_chunk_9b4aq7fb.og(`Failed to reach token endpoint ${r}: ${_}`);
    }
    let l = o.headers.get("Request-Id");
    if (!o.ok) {
      let _ = await o.text().catch(() => ""), k = (0, import_chunk_9b4aq7fb.mFe)(_), g = "";
      if (o.status === 401) g = ` Ensure your federation rule matches your identity token. ${e.workspaceId ? "" : "If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`;
      throw new import_chunk_9b4aq7fb.og(`Token exchange failed with status ${o.status}${l ? ` (request-id ${l})` : ""}: ${k}${g}`, o.status, k, l);
    }
    let h = await (0, import_chunk_9b4aq7fb.TIs)(o, l), p = Number(h.expires_in);
    if (!Number.isFinite(p)) throw new import_chunk_9b4aq7fb.og(`Token endpoint response missing required fields: ${JSON.stringify((0, import_chunk_9b4aq7fb.mFe)(h))}`, o.status, (0, import_chunk_9b4aq7fb.mFe)(h), l);
    return { token: h.access_token, expiresAt: I() + p };
  };
}
function M(e) {
  return async (n) => {
    let { fs: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js")));
    await (0, import_chunk_9b4aq7fb.yMr)(e.credentialsPath, e.onSafetyWarning);
    let r;
    try {
      r = await c.promises.readFile(e.credentialsPath, "utf-8");
    } catch (A) {
      throw new import_chunk_9b4aq7fb.og(`Credentials file not found at ${e.credentialsPath}: ${A}`);
    }
    let o;
    try {
      o = JSON.parse(r);
    } catch (A) {
      throw new import_chunk_9b4aq7fb.og(`Credentials file at ${e.credentialsPath} is not valid JSON: ${A}`);
    }
    let l = o.access_token;
    if (!l) throw new import_chunk_9b4aq7fb.og(`Credentials file at ${e.credentialsPath} must include 'access_token'`);
    let h = o.expires_at;
    if (!n?.forceRefresh && (h == null || I() < h - import_chunk_9b4aq7fb.Bhn)) return { token: l, expiresAt: h ?? null };
    let p = o.refresh_token;
    if (!e.clientId || !p) throw new import_chunk_9b4aq7fb.og(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId ? "set" : "empty"}, refresh_token ${p ? "set" : "empty"})`);
    (0, import_chunk_9b4aq7fb.vIs)(e.baseURL);
    let _ = { grant_type: import_chunk_9b4aq7fb.fNl, refresh_token: p, client_id: e.clientId }, k = `${e.baseURL}${import_chunk_9b4aq7fb.EIs}`, g;
    try {
      g = await e.fetch(k, { method: "POST", headers: { "Content-Type": "application/json", "anthropic-beta": import_chunk_9b4aq7fb.Uhn, "User-Agent": e.userAgent || `anthropic-sdk-typescript/${IN} userOAuthProvider` }, body: JSON.stringify(_) });
    } catch (A) {
      throw new import_chunk_9b4aq7fb.og(`User OAuth refresh failed to reach token endpoint: ${A}`);
    }
    let y = g.headers.get("Request-Id");
    if (!g.ok) {
      let A = await g.text().catch(() => "");
      throw new import_chunk_9b4aq7fb.og(`User OAuth refresh failed (HTTP ${g.status}): ${(0, import_chunk_9b4aq7fb.mFe)(A)}`, g.status, (0, import_chunk_9b4aq7fb.mFe)(A), y);
    }
    let T = await (0, import_chunk_9b4aq7fb.TIs)(g, y), E = Number(T.expires_in);
    if (!Number.isFinite(E)) throw new import_chunk_9b4aq7fb.og(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify((0, import_chunk_9b4aq7fb.mFe)(T))}`, g.status, (0, import_chunk_9b4aq7fb.mFe)(T), y);
    let O = I() + E, se = T.refresh_token || p;
    return await (0, import_chunk_9b4aq7fb.dRt)(e.credentialsPath, { ...o, version: TCr, type: "oauth_token", access_token: T.access_token, expires_at: O, refresh_token: se }), { token: T.access_token, expiresAt: O };
  };
}
function vjn(e, n) {
  let c = e.authentication.credentials_path ?? null, r = (e.base_url || n.baseURL).replace(/\/+$/, ""), o = fe(e, c, r, n), l = {};
  if (e.workspace_id && e.authentication.type === "user_oauth") l["anthropic-workspace-id"] = e.workspace_id;
  return { provider: o, extraHeaders: l, baseURL: e.base_url || void 0 };
}
async function OTl(e, n) {
  let c = await P(n);
  if (!c) return null;
  let { config: r, fromFile: o } = c, l = r.authentication.credentials_path || !o ? r : { ...r, authentication: { ...r.authentication, credentials_path: await C(r, n) ?? void 0 } };
  return vjn(l, e);
}
function fe(e, n, c, r) {
  switch (e.authentication.type) {
    case "oidc_federation": {
      let o = e.authentication, l = he(o);
      if (!l) throw new import_chunk_9b4aq7fb.og("oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)");
      if (!o.federation_rule_id) throw new import_chunk_9b4aq7fb.og("oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).");
      if (!e.organization_id) throw new import_chunk_9b4aq7fb.og("oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)");
      let h = q({ identityTokenProvider: l, federationRuleId: o.federation_rule_id, organizationId: e.organization_id, serviceAccountId: o.service_account_id, workspaceId: e.workspace_id, baseURL: c, fetch: r.fetch, userAgent: r.userAgent });
      if (n) return pe(h, n, r.onCacheWriteError, r.onSafetyWarning);
      return h;
    }
    case "user_oauth": {
      if (!n) throw new import_chunk_9b4aq7fb.og("user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)");
      return M({ credentialsPath: n, clientId: e.authentication.client_id, baseURL: c, fetch: r.fetch, userAgent: r.userAgent, onSafetyWarning: r.onSafetyWarning });
    }
    default: {
      let o = e.authentication.type;
      throw new import_chunk_9b4aq7fb.og(`authentication.type "${o}" is not a known authentication type`);
    }
  }
}
function he(e) {
  if (e.identity_token) {
    let r = e.identity_token.source;
    if (r !== "file") throw new import_chunk_9b4aq7fb.og(`identity_token.source "${r}" is not supported by this SDK version (only "file")`);
    if (!e.identity_token.path) throw new import_chunk_9b4aq7fb.og('identity_token.source "file" requires a non-empty path');
    return F(e.identity_token.path);
  }
  let n = jT("ANTHROPIC_IDENTITY_TOKEN_FILE");
  if (n) return F(n);
  let c = jT("ANTHROPIC_IDENTITY_TOKEN");
  if (c) return B(c);
  return null;
}
function pe(e, n, c, r) {
  return async (o) => {
    let { fs: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-65n8xf8m.js")));
    await (0, import_chunk_9b4aq7fb.yMr)(n, r);
    let h;
    try {
      let _ = await l.promises.readFile(n, "utf-8");
      h = JSON.parse(_);
      let k = h?.access_token;
      if (k && !o?.forceRefresh) {
        let g = h?.expires_at;
        if (g == null || I() < g - import_chunk_9b4aq7fb.Bhn) return { token: k, expiresAt: g ?? null };
      }
    } catch (_) {
      if (_?.code !== "ENOENT" && !(_ instanceof SyntaxError)) c?.(_);
    }
    let p = await e(o);
    try {
      await (0, import_chunk_9b4aq7fb.dRt)(n, { ...h ?? {}, version: TCr, type: "oauth_token", access_token: p.token, expires_at: p.expiresAt });
    } catch (_) {
      c?.(_);
    }
    return p;
  };
}
var we = { "fail-closed": 5, "fail-open": 15 };
function x(e, n, c) {
  return (r) => G(n, () => e(r), c);
}
function EGi(e, n) {
  return G((0, import_path2.dirname)(e), n, "fail-closed");
}
async function G(e, n, c) {
  let r = we[c], o;
  try {
    o = await me(e, r, c);
  } catch (h) {
    if (c === "fail-closed" || h instanceof import_chunk_9b4aq7fb.og) throw h;
    return (0, import_chunk_w578pjby.t)(`wif: credentials lock unavailable at ${e} (${(0, import_chunk_jv7av99m.d)(h)}); refreshing without cross-process serialization`), n();
  }
  let l = (0, import_chunk_r9kxf52b.TYi)();
  try {
    return (0, import_chunk_y53wbr8a.a)("tengu_wif_user_oauth_lock_acquired", { mode: (0, import_chunk_78g0060s.f)(c) }), await n();
  } finally {
    try {
      await o();
    } catch (h) {
      if ((0, import_chunk_jv7av99m.pa)(h)) (0, import_chunk_w578pjby.t)(`wif: lock release failed: ${h}`);
      else (0, import_chunk_k449cc64.i)(h);
    } finally {
      l();
    }
    (0, import_chunk_y53wbr8a.a)("tengu_wif_user_oauth_lock_released", { mode: (0, import_chunk_78g0060s.f)(c) });
  }
}
async function me(e, n, c) {
  let r = (0, import_chunk_xfj2cwfv.QPr)(`${e}.lock`), o;
  for (let l = 0; ; l++) try {
    return await (0, import_chunk_2yx6c1y2.Rc)(e, { stale: 6e4, update: 5e3, onCompromised: (h) => (0, import_chunk_w578pjby.t)(`WIF credentials lock compromised: ${h}`, { level: "error" }), ...r });
  } catch (h) {
    let p = h.code;
    if (p !== "ELOCKED") {
      if (r === void 0 || p === "ENOENT") throw o ?? h;
      o = h, r = void 0, (0, import_chunk_y53wbr8a.a)("tengu_wif_user_oauth_lock_shared_fs", { error_code: (0, import_chunk_jv7av99m.Cr)(h), mode: (0, import_chunk_78g0060s.f)(c) }), l--;
      continue;
    }
    if (l >= n) {
      (0, import_chunk_y53wbr8a.a)("tengu_wif_user_oauth_lock_retry_limit", { attempt: l, mode: (0, import_chunk_78g0060s.f)(c) });
      let _ = new import_chunk_9b4aq7fb.og(`Could not acquire credentials lock at ${e} after ${n} retries`);
      throw _.cause = Object.assign(Error("credentials lock busy"), { code: "ELOCKED" }), _;
    }
    (0, import_chunk_y53wbr8a.a)("tengu_wif_user_oauth_lock_retry", { attempt: l, mode: (0, import_chunk_78g0060s.f)(c) }), await (0, import_chunk_5appeerh.K)(1e3 + Math.random() * 1e3);
  }
}
class ne {
  generation = 0;
  credentialsPromise = void 0;
  tokenCachePromise = void 0;
  resolvedBaseUrlSnapshot = void 0;
  selection = void 0;
  refuses = void 0;
  renewsToken = true;
  failedAccessTokens = /* @__PURE__ */ new Set();
  reset() {
    this.generation += 1, this.credentialsPromise = void 0, this.tokenCachePromise = void 0, this.resolvedBaseUrlSnapshot = void 0, this.selection = void 0, this.failedAccessTokens.clear();
  }
}
var Te = new import_chunk_2904xtvq.j(() => new ne());
function R() {
  return Te.of((0, import_chunk_f9x2f6cx.N)().host);
}
var Ie = 20;
function Hwe() {
  return R().resolvedBaseUrlSnapshot;
}
function AEs(e) {
  if ((0, import_chunk_9b4aq7fb.i3)() !== "user_oauth") return true;
  let n = Dwe();
  return n !== void 0 && (0, import_chunk_9b4aq7fb.G7i)(n.dir, n.profile) === e;
}
function vGi() {
  R().tokenCachePromise = void 0;
}
function Dwe() {
  let e = (0, import_chunk_9b4aq7fb.FA)();
  return R().selection ?? (e === null ? void 0 : re(e));
}
function re(e) {
  let n = (0, import_path.resolve)(e), c = (0, import_chunk_9b4aq7fb.BVt)(n), r;
  try {
    r = (0, import_chunk_9b4aq7fb.uRt)(n, c)?.organizationUuid;
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`The profile's credentials file could not be read: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "warn" });
  }
  return { dir: n, profile: c, organization: r };
}
function cGe() {
  return b(R());
}
function b(e) {
  if (e.credentialsPromise === void 0) {
    let { generation: n } = e;
    e.credentialsPromise = (0, import_chunk_cqa9hrgx.qo)("wif_credentials_resolve", async () => {
      let c = (0, import_chunk_9b4aq7fb.FA)();
      e.selection = c === null || (0, import_chunk_9b4aq7fb.gk)() === "env-quad" ? void 0 : re(c);
      let r = await Oe();
      if (e.generation !== n) return J(e);
      if (r === null) return e.resolvedBaseUrlSnapshot = null, null;
      let o = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL || r.base_url, l = o || "https://api.anthropic.com";
      if ((0, import_chunk_xfj2cwfv.OMl)(l)) return (0, import_chunk_w578pjby.t)("wif: no credential resolved: the exchange would go to the gateway of an organization sign-in"), e.resolvedBaseUrlSnapshot = l, null;
      let p = (0, import_chunk_9b4aq7fb.gk)() === "env-quad" ? await Ce(r, l) : await C(r), _ = { ...r, base_url: o, ...r.authentication.credentials_path || p === null ? {} : { authentication: { ...r.authentication, credentials_path: p } } }, [{ getUserAgent: k }, { getTLSFetchOptions: g }, { getProxyFetchOptions: y }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ypkh7yzw.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vs30n4sv.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cydghwmm.js")))]), T = vjn(_, { baseURL: l, fetch: (E, O) => fetch(E, { ...O, ...y({ forAnthropicAPI: true, url: String(E) }), ...g(void 0), signal: AbortSignal.timeout(1e4) }), userAgent: k(), onSafetyWarning: (E) => (0, import_chunk_w578pjby.t)(E, { level: "warn" }), onCacheWriteError: (E) => (0, import_chunk_w578pjby.t)(String(E), { level: "warn" }) });
      if (p) switch (r.authentication.type) {
        case "user_oauth":
          T.provider = Z(x(Q(Re(T.provider, p), p, "after-recorded-401", e.failedAccessTokens), (0, import_path.dirname)(p), "fail-closed"), p, e);
          break;
        case "oidc_federation": {
          let E = (0, import_chunk_r6r2wdsw.xVt)();
          if (E === null) break;
          await (0, import_promises.mkdir)(E, { recursive: true, mode: 448 }).catch((O) => (0, import_chunk_w578pjby.t)(`wif: cannot create ${E} (${(0, import_chunk_jv7av99m.d)(O)}); the credentials lock may be unavailable`, { level: "warn" })), T.provider = Z(x(Q(T.provider, p, "always", e.failedAccessTokens), E, "fail-open"), p, e);
          break;
        }
      }
      if (e.generation !== n) return J(e);
      return e.resolvedBaseUrlSnapshot = T.baseURL ?? null, T;
    }).catch((c) => {
      throw (0, import_chunk_w578pjby.t)(`WIF credential resolution failed: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "error" }), c instanceof import_chunk_9b4aq7fb.og ? c : new import_chunk_9b4aq7fb.og((0, import_chunk_jv7av99m.d)(c));
    });
  }
  return e.credentialsPromise;
}
function J(e) {
  return (0, import_chunk_w578pjby.t)("wif: sign-in state was reset during this lookup; looking it up again"), b(e);
}
async function TGi(e) {
  let n = R(), c = await ie(n).catch(() => null);
  if (c === null) return;
  if (e) {
    if (n.failedAccessTokens.add(e), n.failedAccessTokens.size > Ie) for (let r of n.failedAccessTokens) {
      n.failedAccessTokens.delete(r);
      break;
    }
  }
  c.invalidate();
}
function CGi() {
  R().renewsToken = false;
}
class H extends import_chunk_9b4aq7fb.og {
}
function AGi(e) {
  R().refuses = e;
}
function uGe() {
  return ie(R());
}
function ie(e) {
  return e.tokenCachePromise ??= b(e).then((n) => {
    if (n === null) return null;
    let c = async (r) => {
      try {
        let o = await n.provider(r);
        return (0, import_chunk_cqa9hrgx.u)("wif_token_exchange"), o;
      } catch (o) {
        let l = o instanceof import_chunk_9b4aq7fb.og ? o : new import_chunk_9b4aq7fb.og(o instanceof Error ? o.message : String(o), null);
        if (l !== o) l.cause = o;
        if (!(l instanceof H)) (0, import_chunk_cqa9hrgx.m)("wif_token_exchange", Se(l));
        throw l;
      }
    };
    return new Ejn(async (r) => {
      let o = await c(r), l = e.refuses?.();
      if (l !== void 0) throw l;
      return o;
    }, (r) => (0, import_chunk_w578pjby.t)(String(r), { level: "warn" }));
  }), e.tokenCachePromise;
}
async function oe(e, n) {
  await (0, import_chunk_9b4aq7fb.yMr)(e, (l) => (0, import_chunk_w578pjby.t)(l, { level: "warn" }));
  let c = JSON.parse(await (0, import_promises.readFile)(e, "utf-8")), r = c.access_token, o = c.expires_at == null ? null : Number(c.expires_at);
  return typeof r === "string" && r && !n.has(r) && (o === null || Date.now() / 1e3 < o - import_chunk_9b4aq7fb.Bhn) ? { token: r, expiresAt: o } : null;
}
function Z(e, n, c) {
  return async (r) => {
    if (!r?.forceRefresh) try {
      let o = await oe(n, c.failedAccessTokens);
      if (o !== null) return o;
    } catch {
    }
    if (!c.renewsToken) throw new H("The saved sign-in token has expired, was refused or cannot be read. This command does not renew it; a session does.");
    return e(r);
  };
}
function Q(e, n, c, r) {
  return async (o) => {
    if (!o?.forceRefresh) return e(o);
    if (c === "always" || r.size > 0) try {
      let l = await oe(n, r);
      if (l !== null) {
        let { logEvent: h } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ss4ft2hs.js"))), { fromEnum: p } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-b12bqts4.js")));
        return h("tengu_wif_user_oauth_refresh_race_resolved", { mode: p(c) }), (0, import_chunk_w578pjby.t)("wif: adopting sibling-rotated access token from credentials file; skipping refresh grant"), l;
      }
    } catch (l) {
      (0, import_chunk_w578pjby.t)(`wif: rotated-token adoption check failed: ${(0, import_chunk_jv7av99m.d)(l)}`);
    }
    return e(o);
  };
}
function Re(e, n) {
  let c = async () => {
    try {
      let r = await Promise.resolve().then(() => __toESM(require("fs")));
      return JSON.parse(await r.promises.readFile(n, "utf-8"));
    } catch {
      return null;
    }
  };
  return async (r) => {
    let l = (await c())?.refresh_token;
    try {
      return await e(r);
    } catch (h) {
      if (h instanceof import_chunk_9b4aq7fb.og && (h.statusCode === 400 || h.statusCode === 401) && typeof h.body === "string" && h.body.includes('"invalid_grant"') && (0, import_chunk_9b4aq7fb.cRt)(h) === null && typeof l === "string" && l) try {
        let p = await c();
        if (p && p.refresh_token === l) {
          let { logEvent: _ } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-ss4ft2hs.js")));
          if (await (0, import_chunk_9b4aq7fb.dRt)(n, { ...p, refresh_token: void 0 }), !h.body.includes(import_chunk_9b4aq7fb.Jct)) (0, import_chunk_9b4aq7fb.$7i)(h);
          _("tengu_wif_user_oauth_refresh_token_cleared", {});
        }
      } catch (p) {
        if ((0, import_chunk_jv7av99m.fn)(p)) (0, import_chunk_w578pjby.t)(`wif: refresh-token cleanup write failed: ${p}`);
        else (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(p), "WIF: failed to clear stale user_oauth refresh_token"));
      }
      throw h;
    }
  };
}
function _ed(e) {
  if (e instanceof import_chunk_9b4aq7fb.og && typeof e.statusCode === "number") return e.statusCode >= 500 || e.statusCode === 429 || e.statusCode === 408;
  let n = e;
  for (let c = 0; c < 4 && n instanceof Error; c++) {
    if (n.name === "TimeoutError" || Ae(n)) return true;
    n = n.cause;
  }
  return false;
}
function Ae(e) {
  let n = (0, import_chunk_jv7av99m.w)(e);
  return (0, import_chunk_tvttgr51.jVt)(n, ["unresolved", "unreachable"]) || n === "UND_ERR_CONNECT_TIMEOUT" || n === "Timeout" || n === "ELOCKED";
}
function Se(e) {
  if ((0, import_chunk_9b4aq7fb.jhn)(e)) return "no_refresh_available";
  if ((0, import_chunk_9b4aq7fb.cRt)(e)) return "account_on_hold";
  if (typeof e.body === "string" && e.body.includes('"invalid_grant"')) return "invalid_grant";
  if (typeof e.statusCode === "number") {
    if (e.statusCode >= 500) return "http_5xx";
    if (e.statusCode >= 400) return "http_4xx";
  }
  let n = e.message.toLowerCase();
  if (n.includes("parse") || n.includes("json")) return "parse_failed";
  return "network_error";
}
function Qvt() {
  R().reset(), (0, import_chunk_9b4aq7fb.j7i)();
}
var S = (e) => process.env[e]?.trim() || void 0;
async function Oe() {
  if ((0, import_chunk_9b4aq7fb.gk)() === "env-quad") {
    let e = S("ANTHROPIC_FEDERATION_RULE_ID"), n = S("ANTHROPIC_ORGANIZATION_ID");
    if (e && n) {
      let c = S("ANTHROPIC_IDENTITY_TOKEN_FILE");
      if (c && (0, import_chunk_f9x2f6cx.Y)()) return null;
      return { organization_id: n, workspace_id: S("ANTHROPIC_WORKSPACE_ID"), base_url: S("ANTHROPIC_BASE_URL"), authentication: { type: "oidc_federation", federation_rule_id: e, service_account_id: S("ANTHROPIC_SERVICE_ACCOUNT_ID"), identity_token: c ? { source: "file", path: c } : void 0, scope: S("ANTHROPIC_SCOPE") } };
    }
  }
  if ((0, import_chunk_f9x2f6cx.Y)()) return null;
  return V();
}
async function Ce(e, n) {
  if (e.authentication.type !== "oidc_federation") return null;
  let c = e.authentication.identity_token?.path, r;
  if (c) try {
    r = (await (0, import_promises.readFile)(c, "utf-8")).trim();
  } catch (h) {
    return (0, import_chunk_w578pjby.t)(`wif: cannot read identity token at ${c} (${(0, import_chunk_jv7av99m.d)(h)}); federation token cache disabled`), null;
  }
  else r = S("ANTHROPIC_IDENTITY_TOKEN");
  if (!r) return (0, import_chunk_w578pjby.t)("wif: no identity token; federation token cache disabled"), null;
  let o = (0, import_chunk_r6r2wdsw.xVt)();
  if (o === null) return (0, import_chunk_w578pjby.t)("wif: no config directory, or a diskless session; federation token cache disabled"), null;
  try {
    await (0, import_promises.mkdir)(o, { recursive: true, mode: 448 });
    {
      let h = await (0, import_promises.stat)(o), p = h.mode & 511;
      if (p & 63) return (0, import_chunk_w578pjby.t)(`wif: ${o} is mode 0o${p.toString(8)} (filesystem ignores modes, or directory pre-existed shared); federation token cache disabled`), null;
      let _ = process.getuid?.();
      if (_ !== void 0 && h.uid !== _) return (0, import_chunk_w578pjby.t)(`wif: ${o} is owned by uid ${h.uid}, not ${_}; federation token cache disabled`), null;
    }
  } catch (h) {
    return (0, import_chunk_w578pjby.t)(`wif: cannot prepare ${o} (${(0, import_chunk_jv7av99m.d)(h)}); federation token cache disabled`), null;
  }
  let l = (0, import_chunk_ccm69jjy.Je)(JSON.stringify([e.authentication.federation_rule_id, e.organization_id, e.workspace_id ?? "", e.authentication.service_account_id ?? "", e.authentication.scope ?? "", n, (0, import_chunk_ccm69jjy.Je)(r)]));
  return (0, import_path.join)(o, `${l}.json`);
}
