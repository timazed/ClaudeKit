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
var chunk_vcq9tvvq_exports = {};
__export(chunk_vcq9tvvq_exports, {
  AnthropicGoogleCloud: () => W
});
module.exports = __toCommonJS(chunk_vcq9tvvq_exports);
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_ee5vb8kd = require("/$bunfs/root/chunk-ee5vb8kd.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var M = /^[a-z][a-z0-9+.-]*:/i, D = (e) => M.test(e), y = (e) => (y = Array.isArray, y(e)), C = y;
var U = Symbol.for("brand.privateNullableHeaders");
function* q(e) {
  if (!e) return;
  if (U in e) {
    let { values: r, nulls: n } = e;
    yield* r.entries();
    for (let s of n) yield [s, null];
    return;
  }
  let t = false, o;
  if (e instanceof Headers) o = e.entries();
  else if (C(e)) o = e;
  else t = true, o = Object.entries(e ?? {});
  for (let r of o) {
    let n = r[0];
    if (typeof n !== "string") throw TypeError("expected header name to be a string");
    let s = C(r[1]) ? r[1] : [r[1]], i = false;
    for (let l of s) {
      if (l === void 0) continue;
      if (t && !i) i = true, yield [n, _];
      yield [n, l];
    }
  }
}
var _ = Symbol("clear"), J = /* @__PURE__ */ new Set(["x-stainless-helper"]), V = (e, t) => {
  let o = e ? e.split(",").map((r) => r.trim()).filter(Boolean) : [];
  for (let r of t.split(",").map((n) => n.trim())) if (r && !o.includes(r)) o.push(r);
  return o.join(", ");
}, R = (e) => {
  let t = new Headers(), o = /* @__PURE__ */ new Set();
  for (let r of e) {
    let n = /* @__PURE__ */ new Set();
    for (let [s, i] of q(r)) {
      let l = s.toLowerCase();
      if (J.has(l)) {
        if (i === _) continue;
        if (i === null) t.delete(s), o.add(l);
        else t.set(s, V(t.get(s), i)), o.delete(l);
        continue;
      }
      if (i === _ || !n.has(l)) {
        if (t.delete(s), n.add(l), i === _) continue;
      }
      if (i === null) t.delete(s), o.add(l);
      else t.append(s, i), o.delete(l);
    }
  }
  return { [U]: true, values: t, nulls: o };
};
var u = (e) => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
var I = "0.2.0";
var L = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_ee5vb8kd.nvo)(), 1), a = function(e, t, o, r, n) {
  if (r === "m") throw TypeError("Private method is not writable");
  if (r === "a" && !n) throw TypeError("Private accessor was defined without a setter");
  if (typeof t === "function" ? e !== t || !n : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
  return r === "a" ? n.call(e, o) : n ? n.value = o : t.set(e, o), o;
}, f = function(e, t, o, r) {
  if (o === "a" && !r) throw TypeError("Private accessor was defined without a getter");
  if (typeof t === "function" ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
  return o === "m" ? r : o === "a" ? r.call(e) : r ? r.value : t.get(e);
}, c, p, O, E, d, b, m, g, T, B, P = "https://www.googleapis.com/auth/cloud-platform", X = "global", z = (e, t) => `https://claude.googleapis.com/v1/projects/${e}/locations/${t}`, N = (e, t, o) => `${z(e, t)}/workspaces/${o}/invoke`, G = (e, t) => `${z(e, t)}/claudeOrganization/invoke`, Z = "/v1/organizations/", F = "https://unresolved.invalid", H = "Set `project` or the `ANTHROPIC_GOOGLE_CLOUD_PROJECT` environment variable (or provide `baseURL`).", Y = ["apiKey", "authToken", "credentials", "config", "profile"];
class W extends import_chunk_gq1dr8pm.yje {
  _instrumentationScope() {
    return { platform: "google-cloud", version: I };
  }
  get completions() {
    throw new import_chunk_jv7av99m.Mo("The deprecated text Completions API is not available on Claude Platform on Google Cloud");
  }
  set completions(e) {
  }
  constructor({ baseURL: e = u("ANTHROPIC_GOOGLE_CLOUD_BASE_URL"), project: t = u("ANTHROPIC_GOOGLE_CLOUD_PROJECT") ?? u("GOOGLE_CLOUD_PROJECT"), location: o = u("ANTHROPIC_GOOGLE_CLOUD_LOCATION"), workspaceId: r = u("ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID"), bearerTokenProvider: n, googleAuth: s, authClient: i, skipAuth: l = false, ...k } = {}) {
    if (i && s) throw new import_chunk_jv7av99m.Mo("The `authClient` and `googleAuth` arguments are mutually exclusive; only one can be passed at a time.");
    if (l && (n || s || i)) throw new import_chunk_jv7av99m.Mo("The `skipAuth` option is mutually exclusive with `bearerTokenProvider`, `googleAuth`, and `authClient`; `skipAuth` disables authentication entirely.");
    for (let x of Y) if (k[x] != null) throw new import_chunk_jv7av99m.Mo(`The \`${x}\` option is not supported by AnthropicGoogleCloud; authentication uses a Google bearer token (\`bearerTokenProvider\`, \`googleAuth\`/\`authClient\`, or Application Default Credentials).`);
    o = o || X;
    let w = e, S = false;
    if (!w) if (t) {
      if (r) w = N(t, o, r);
    } else if (l) throw new import_chunk_jv7av99m.Mo(`No project was given. ${H}`);
    else S = true;
    super({ baseURL: w ?? null, ...k, apiKey: null, authToken: null, ...{ __auth: { provider: null, tokenCache: null, resolution: null, error: null, extraHeaders: {} } } });
    if (c.add(this), p.set(this, void 0), O.set(this, void 0), E.set(this, void 0), d.set(this, void 0), b.set(this, void 0), m.set(this, F), this.project = t ?? null, this.location = o ?? null, this.workspaceId = r, this.skipAuth = l, a(this, p, n, "f"), a(this, O, s ?? null, "f"), a(this, E, i ?? null, "f"), !e) {
      if (a(this, b, this.baseURL = w ?? F, "f"), t) a(this, m, G(t, o), "f");
    }
    let A;
    if (!l && !n) if (i) a(this, d, Promise.resolve(i), "f");
    else A = s ?? new L.GoogleAuth({ scopes: P }), a(this, d, A.getClient(), "f"), f(this, d, "f").catch(() => {
    });
    if (!S) this.ready = Promise.resolve();
    else {
      let x = A ?? s ?? new L.GoogleAuth({ scopes: P, ...i ? { authClient: i } : {} }), v = o;
      this.ready = x.getProjectId().then((h) => {
        if (this.project = h, f(this, c, "m", g).call(this)) return;
        if (a(this, m, G(h, v), "f"), r) a(this, b, this.baseURL = N(h, v, r), "f");
      }, (h) => {
        let j = new import_chunk_jv7av99m.Mo(`No project was given and it could not be resolved from Google credentials. ${H}`);
        throw j.cause = h, j;
      }), this.ready.catch(() => {
      });
    }
  }
  withOptions(e) {
    return super.withOptions({ project: this.project ?? void 0, location: this.location ?? void 0, workspaceId: this.workspaceId, bearerTokenProvider: f(this, p, "f"), googleAuth: f(this, O, "f") ?? void 0, authClient: f(this, E, "f") ?? void 0, skipAuth: this.skipAuth, baseURL: f(this, c, "m", g).call(this) ? this.baseURL : void 0, ...e });
  }
  buildURL(e, t, o) {
    if (f(this, c, "m", g).call(this) || D(e)) return super.buildURL(e, t, o);
    if (e.startsWith(Z)) return super.buildURL(f(this, m, "f") + e, t, o);
    if (!this.workspaceId) throw new import_chunk_jv7av99m.Mo("No workspace ID found. Set `workspaceId` in the constructor or the `ANTHROPIC_GOOGLE_CLOUD_WORKSPACE_ID` environment variable.");
    return super.buildURL(e, t, o);
  }
  async prepareOptions(e) {
    await super.prepareOptions(e), await f(this, c, "m", T).call(this);
  }
  async buildRequest(e, t = {}) {
    return await f(this, c, "m", T).call(this), await super.buildRequest(e, t);
  }
  async authHeaders(e) {
    if (this.skipAuth) return;
    let t = R([this._options.defaultHeaders, e.headers]);
    if (t.values.get("authorization") || t.nulls.has("authorization")) return;
    let o = await f(this, c, "m", B).call(this);
    return R([{ Authorization: `Bearer ${o}` }]);
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicGoogleCloud/JS ${import_chunk_3f2ytgjw.IN}`;
  }
}
p = /* @__PURE__ */ new WeakMap(), O = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakSet(), g = function() {
  return this.baseURL !== f(this, b, "f");
}, T = async function() {
  if (!f(this, c, "m", g).call(this)) await this.ready;
}, B = async function() {
  if (f(this, p, "f")) return await f(this, p, "f").call(this);
  let t = await f(this, d, "f"), { token: o } = await t.getAccessToken();
  if (!o) throw new import_chunk_jv7av99m.Mo("Failed to obtain a Google access token from Application Default Credentials.");
  return o;
};
