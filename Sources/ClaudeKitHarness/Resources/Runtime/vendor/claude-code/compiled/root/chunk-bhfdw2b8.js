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
var chunk_bhfdw2b8_exports = {};
__export(chunk_bhfdw2b8_exports, {
  MTl: () => MTl,
  bun: () => bun,
  tvo: () => tvo
});
module.exports = __toCommonJS(chunk_bhfdw2b8_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_1xfq8gx5 = require("/$bunfs/root/chunk-1xfq8gx5.js");
var import_chunk_x95829qm = require("/$bunfs/root/chunk-x95829qm.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_os = require("os");
var import_path = require("path");
var re = 3600, te = 43200, ie = 600, oe = 64, se = 4096, de = { another_organization: "a command, which runs only for the organization whose commands ran first for this user on this computer", lock_unusable: "a command, and Claude Code couldn't record that your organization's commands may run here", desktop_document: "a command, which doesn't run under the settings that Claude Desktop hands to Claude Code" }, K = "inference.customHeaders (a credential)", Y = "inference.baseUrl (an address of its own)", ae = "inference.baseUrl (the allowedProviders list that applies on this computer does not admit that address; it compares addresses character by character)", le = "inference.baseUrl (this computer's managed settings require another sign-in: forceLoginMethod or forceLoginGatewayUrl)", ce = "inference.credential.authFlow (the broker; an owner can allow browser sign-in on the admin console's Claude Code page)", ue = /^[\x21-\x7e]+(?: [\x21-\x7e]+)*$/, X = "inference.customHeaders (a routing header)", fe = /* @__PURE__ */ new Set(["host", "forwarded", "connection", "keep-alive", "transfer-encoding", "te", "trailer", "upgrade", "expect", "content-length", "content-encoding", "x-host", "x-rewrite-url", "x-http-method", "x-http-method-override", "x-method-override"]), pe = ["x-forwarded-", "x-original-", "x-amz-", "x-goog-", "x-ms-", "x-arr-", "proxy-", "x-envoy-"], ge = 1024;
async function MTl(e, { admitCommands: r, commandsMayRun: a, listRefuses: l, anotherSignInForced: c }) {
  if (!(0, import_chunk_ma3kja9f.T)(e) || !y(e, "inference")) return null;
  try {
    let [i, s, p] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-t01makwm.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1)), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-jgc8gd6j.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1)), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-axt253bq.js"))).then((m2) => (0, import_chunk_w1d7ygsk.rt)(m2.default, 1))]), m = { includeInternal: false }, A = s.parseBootstrapConfig({ inference: e.inference, models: e.models }, void 0, void 0, m, { channel: "hybrid" }), { inference: o, models: S } = i.materializeRaw(i.unflattenAll(A.config), m);
    if (o === void 0 || o.provider === "anthropic") {
      let n = e.inference;
      if (P(n, ["baseUrl"])) return { state: "not_taken", settings: [Y] };
      return (0, import_chunk_ma3kja9f.T)(n) && (o?.provider === "anthropic" || !P(n, ["provider"])) ? { state: "anthropic_api" } : { state: "not_taken", settings: ["inference.provider"] };
    }
    let C = o.provider === "gateway" && o.credential?.kind === "interactive" && o.credential.oidc === void 0, L = C && o.gatewayManagedClaudeCode !== true, I = o.provider === "gateway" && o.credential?.kind === "external-idp" ? o.credential : void 0, E = I?.oidc;
    if (I?.authFlow === "broker" && E !== void 0) E = (0, import_chunk_ma3kja9f.T)(e.claudeCode) && e.claudeCode.browserInsteadOfBroker === true ? (0, import_chunk_qwbhh2k3.Pn)(E, "resource") : void 0;
    if (o.provider === "gateway" && o.credential?.kind !== "helper-script" && !L && E === void 0) {
      let n = C ? G(o.baseUrl) : void 0;
      if (n === void 0) return { state: "not_taken", settings: [I?.oidc !== void 0 ? ce : "inference (a gateway)"] };
      let f = (0, import_chunk_ma3kja9f.T)(e.models) ? e.models.list : void 0;
      return { state: "gateway", url: n, notUsed: [...y(e.inference, "customHeaders") ? ["inference.customHeaders"] : [], ...y(e.models, "list") && !(Array.isArray(f) && f.length === 0) ? ["models.list"] : []] };
    }
    let _ = o.provider === "gateway" ? G(o.baseUrl) : void 0;
    if (_ !== void 0 && l(_)) return { state: "not_taken", settings: [ae] };
    if (_ !== void 0 && c()) return { state: "not_taken", settings: [le] };
    if (o.provider !== "gateway" && y(o, "baseUrl")) return { state: "not_taken", settings: [Y] };
    let O = new Set(me.filter((n) => y(e.inference, n) && !y(o, n)).map((n) => `inference.${n}`)), R = [], d = Object.fromEntries(import_chunk_zmb62hr5.Vy.map((n) => [n, ""]));
    for (let n of import_chunk_gd77dyw4.Pge) d[n] = "";
    d.ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION = "";
    for (let [n, f, u, b] of _e(o)) {
      if (u === void 0 ? b !== void 0 : !import_chunk_rpdn91q1.Xze.test(u)) O.add(n);
      d[f] = u ?? "";
    }
    let ne = Ee.filter((n) => P(e.inference, ["credential", ...n]) && !P(o, ["credential", ...n])).map((n) => ["inference.credential", ...n].join(".")), h = Re(o, p, ne), D;
    if (h === null) {
      if (E === void 0) D = he(o);
    } else if (h.unusable.length > 0) R.push(...h.set);
    let U = Object.entries(o.customHeaders ?? {}), B = [];
    if (U.flat().join("").length > ge) O.add("inference.customHeaders"), U.length = 0;
    for (let [n, f] of U) if (!import_chunk_gd77dyw4.aLr.test(n) || !ue.test(f)) O.add("inference.customHeaders");
    else if (i.credentialHeaderEntry(n, f) !== void 0) {
      if (!R.includes(K)) R.push(K);
    } else if (fe.has(n.toLowerCase()) || pe.some((u) => n.toLowerCase().startsWith(u))) {
      if (!R.includes(X)) R.push(X);
    } else B.push(`${n}: ${f}`);
    d.ANTHROPIC_CUSTOM_HEADERS = B.join(`
`);
    let j = (0, import_chunk_ma3kja9f.T)(e.models) ? e.models.list : void 0, k;
    if (y(e.models, "list") && !(Array.isArray(j) && j.length === 0) && S?.list === void 0) R.push("models.list");
    else {
      for (let [u, b] of Object.entries(import_chunk_rpdn91q1.xHr)) {
        let z = S?.list?.filter((F) => F.anthropicFamilyTier === u), w = (z?.find((F) => F.isFamilyDefault) ?? z?.[0])?.name;
        if (w === void 0) continue;
        if (!import_chunk_rpdn91q1.Xze.test(w)) O.add("models.list");
        if (i.TIER_ALIASES.test(w.toLowerCase()) || !i.checkModel(o.provider, w).ok) R.push(`models.list (${u})`);
        else d[b] = w;
      }
      let { provider: n } = o, f = (0, import_chunk_1xfq8gx5.WGi)(S?.list, S?.prefer1mContext === true, (u) => (n === "foundry" || n === "gateway" || !i.TIER_ALIASES.test(u.toLowerCase()) || (0, import_chunk_zmb62hr5.Zb)(u.toLowerCase())) && i.checkModel(n, u).ok);
      if (R.push(...f.leftOut), k = f.settings, d.ANTHROPIC_DEFAULT_HAIKU_MODEL !== void 0) d.ANTHROPIC_SMALL_FAST_MODEL = "";
    }
    if (O.size > 0) return { state: "not_taken", settings: [...O] };
    let g, V = [], H;
    if (h !== null && h.set.length > 0 && h.unusable.length === 0) {
      let n = h.helper, f = n === void 0 ? "admitted" : await a(), u = n !== void 0 && f === "admitted" ? await (0, import_chunk_x95829qm.rvo)(n.command, n.args) : void 0, b = u || f !== "admitted" ? f : await r();
      if (b !== "admitted") V = h.set, H = b;
      else if (n !== void 0 && u) g = { refused: n, reason: u };
      else Object.assign(d, h.env), g = n;
    }
    if (L && d.ANTHROPIC_BASE_URL) g = { gatewaySignIn: true, provider: "firstParty", authScheme: "bearer", silentRefresh: true, url: d.ANTHROPIC_BASE_URL };
    if (E !== void 0 && d.ANTHROPIC_BASE_URL) g = { identityProviderSignIn: true, provider: "firstParty", authScheme: "bearer", silentRefresh: true, url: d.ANTHROPIC_BASE_URL, oidc: E, fetchedAt: Date.now() };
    if (o.provider === "gateway" && (g === void 0 || "refused" in g)) {
      let n = g && (0, import_chunk_x95829qm.kun)(g.reason);
      return { state: "not_taken", settings: [`inference.credential (${n ? `a command that Claude Code doesn't run here: ${n.cause}; ${n.statusHint}` : H === void 0 ? "a value that can't be used" : de[H]})`], ...g !== void 0 && { helper: g } };
    }
    if (d.AWS_PROFILE || d.AWS_CONFIG_FILE || g !== void 0 && (o.provider === "bedrock" || o.provider === "mantle")) d.AWS_BEARER_TOKEN_BEDROCK = "";
    if (d.AWS_CONFIG_FILE && !d.AWS_PROFILE) d.AWS_ACCESS_KEY_ID = "", d.AWS_SECRET_ACCESS_KEY = "", d.AWS_SESSION_TOKEN = "", d.AWS_PROFILE = "default";
    return { state: "taken", env: d, ...k !== void 0 && { modelList: k }, leftOut: R, notRun: V, ...H !== void 0 && { notRunBecause: H }, ...D !== void 0 && { signInTool: D }, ...o.credential?.kind === "interactive" && { ownSignIn: true }, ...g !== void 0 && { helper: g } };
  } catch (i) {
    return (0, import_chunk_w578pjby.t)(`Organization connection: couldn't read the document (${i instanceof Error ? i.name : typeof i})`, { level: "warn" }), { state: "not_taken", settings: ["inference"] };
  }
}
var me = ["baseUrl", "customHeaders", "projectId", "region", "resource", "serviceTier"], Ee = [["command"], ["commandWindows"], ["args"], ["awsEnv", "profile"], ["awsEnv", "awsDir"], ["profile"], ["awsDir"], ["credentialsFile"]];
function P(e, r) {
  let a = e;
  for (let c of r.slice(0, -1)) {
    if (!(0, import_chunk_ma3kja9f.T)(a)) return false;
    a = a[c];
  }
  if (!(0, import_chunk_ma3kja9f.T)(a)) return false;
  let l = a[r.at(-1) ?? ""];
  return l !== void 0 && l !== null && !(typeof l === "string" && l.trim() === "");
}
function y(e, r) {
  return (0, import_chunk_ma3kja9f.T)(e) && e[r] !== void 0 && e[r] !== null;
}
var tvo = { vertex: "vertex", bedrock: "bedrock", mantle: "mantle", foundry: "foundry", gateway: "customEndpoint" }, bun = { vertex: { region: "CLOUD_ML_REGION", projectId: "ANTHROPIC_VERTEX_PROJECT_ID" }, bedrock: { region: "AWS_REGION", profile: "AWS_PROFILE" }, mantle: { region: "AWS_REGION", profile: "AWS_PROFILE" }, foundry: { resource: "ANTHROPIC_FOUNDRY_RESOURCE" }, gateway: {} };
function _e(e) {
  let { baseUrl: r } = e;
  switch (e.provider) {
    case "vertex":
      return [["inference.provider", "CLAUDE_CODE_USE_VERTEX", "1"], ["inference.projectId", bun.vertex.projectId, e.projectId, "required"], ["inference.region", bun.vertex.region, e.region, "required"], ["inference.baseUrl", "ANTHROPIC_VERTEX_BASE_URL", r], ...import_chunk_2gtmjt3y.vpt.map(([, a]) => ["inference.region", a, void 0])];
    case "bedrock":
      return [["inference.provider", "CLAUDE_CODE_USE_BEDROCK", "1"], ["inference.region", bun.bedrock.region, e.region, "required"], ["inference.baseUrl", "ANTHROPIC_BEDROCK_BASE_URL", r], ["inference.serviceTier", "ANTHROPIC_BEDROCK_SERVICE_TIER", e.serviceTier]];
    case "mantle":
      return [["inference.provider", "CLAUDE_CODE_USE_MANTLE", "1"], ["inference.region", bun.mantle.region, e.region, "required"], ["inference.baseUrl", "ANTHROPIC_BEDROCK_MANTLE_BASE_URL", r]];
    case "foundry":
      return [["inference.provider", "CLAUDE_CODE_USE_FOUNDRY", "1"], r === void 0 ? ["inference.resource", bun.foundry.resource, e.resource, "required"] : ["inference.resource", bun.foundry.resource], ["inference.baseUrl", "ANTHROPIC_FOUNDRY_BASE_URL", r]];
    case "gateway":
      return [["inference.baseUrl", "ANTHROPIC_BASE_URL", G(r), "required"], ["inference.provider", "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS", "1"], ...r !== void 0 && (0, import_chunk_zhr7rpv7.md)(r) ? [] : [["inference.provider", "CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP", "1"]]];
  }
}
function Re(e, r, a) {
  let { isValidHelperPath: l } = r, c = (0, import_chunk_cg8dqz0a.x)() === "windows", i = { env: {}, set: [], unusable: [] }, s = e.credential;
  if (a.length > 0 && (s?.kind === "helper-script" || s?.kind === "vendor-profile")) i.set.push(...a), i.unusable.push(...a);
  if (s?.kind === "helper-script") {
    let p = {}, m = c && s.commandWindows !== void 0 ? "inference.credential.commandWindows" : "inference.credential.command", A = c ? s.commandWindows ?? s.command : s.command;
    if (i.set.push(m), A === void 0 || !l(A, { windows: c }) || !ee(A, c) || c && import_path.win32.extname(A) === "") i.unusable.push(m);
    let o = s.args ?? [];
    if (s.args !== void 0) {
      if (i.set.push("inference.credential.args"), o.length > oe || o.some((_) => _.length > se || !r.hasNoHelperBreakoutChars(_))) i.unusable.push("inference.credential.args");
    }
    let { profile: S, awsDir: C, region: L } = s.awsEnv ?? {};
    v(i, p, "inference.credential.awsEnv.profile", S, S !== void 0 && M("AWS_PROFILE", S));
    let I = C !== void 0 && q(C, c, l), E = I ? import_path.win32.relative((0, import_os.homedir)(), I.AWS_CONFIG_FILE) : "";
    if (v(i, p, "inference.credential.awsEnv.awsDir", C, (!c || !E.startsWith("..") && !import_path.win32.isAbsolute(E)) && I), L !== void 0) {
      let _ = M("AWS_REGION", L);
      if (_) Object.assign(p, _);
      else i.unusable.push("inference.credential.awsEnv.region");
    }
    if (i.unusable.length === 0 && A !== void 0) i.helper = { ...e.provider === "gateway" ? { provider: "firstParty", authScheme: "authScheme" in s && s.authScheme === "x-api-key" ? "x-api-key" : "bearer" } : { provider: e.provider }, command: A, args: o, ttlSec: Math.min(J(s.ttlSec) ?? re, te), timeoutSec: Math.min(J(s.timeoutSec) ?? r.DEFAULT_HELPER_TIMEOUT_SEC, ie), silentRefresh: s.silentRefreshEnabled !== false, env: p };
    return i;
  }
  if (e.provider === "vertex" && e.credential?.kind === "vendor-profile") {
    let p = e.credential.credentialsFile, m = p === void 0 ? void 0 : Q(p, c, l);
    return v(i, i.env, "inference.credential.credentialsFile", p, m !== void 0 && { GOOGLE_APPLICATION_CREDENTIALS: m }), i;
  }
  if (e.provider === "bedrock" && e.credential?.kind === "vendor-profile") {
    let { profile: p, awsDir: m } = e.credential;
    return v(i, i.env, "inference.credential.profile", p, p !== void 0 && M("AWS_PROFILE", p)), v(i, i.env, "inference.credential.awsDir", m, m !== void 0 && q(m, c, l)), i;
  }
  return null;
}
function v(e, r, a, l, c) {
  if (l === void 0) return;
  if (e.set.push(a), c) Object.assign(r, c);
  else e.unusable.push(a);
}
function M(e, r) {
  return import_chunk_rpdn91q1.Xze.test(r) && { [e]: r };
}
function q(e, r, a) {
  let l = Q(e, r, a), c = r ? import_path.win32 : import_path.posix;
  return l !== void 0 && { AWS_CONFIG_FILE: c.join(l, "config"), AWS_SHARED_CREDENTIALS_FILE: c.join(l, "credentials") };
}
function Q(e, r, a) {
  let l = r ? import_path.win32 : import_path.posix, i = e === "~" ? (0, import_os.homedir)() : (r ? /^~[\\/]/ : /^~\//).test(e) ? l.join((0, import_os.homedir)(), e.slice(2)) : e, s = l.normalize(i);
  return a(s, { windows: r }) && ee(s, r) ? s : void 0;
}
function ee(e, r) {
  return (!r || /^[A-Za-z]:[\\/]/.test(e)) && !((r || (0, import_chunk_cg8dqz0a.x)() === "wsl") && import_chunk_z6pfqf6e.y3t.test(e)) && !/[*?[\]]/.test(e);
}
function G(e) {
  if (e === void 0 || !import_chunk_rpdn91q1.Xze.test(e)) return;
  let r = URL.parse(e);
  return r !== null && r.protocol === "https:" && r.hostname !== "" && r.username === "" && r.password === "" && !e.includes("?") && !e.includes("#") ? (0, import_chunk_tvttgr51.p8)(r.href) : void 0;
}
function J(e) {
  return e !== void 0 && Number.isFinite(e) && e > 0 ? e : void 0;
}
function he(e) {
  switch (e.credential?.kind) {
    case void 0:
    case "vendor-profile":
    case "helper-script":
      return;
    case "interactive":
      return e.provider === "vertex" ? "the Google Cloud CLI (gcloud auth application-default login)" : e.provider === "foundry" ? "the Azure CLI (az login)" : e.provider === "gateway" ? void 0 : "the AWS CLI (aws sso login)";
    case "workforce":
      return "the Google Cloud CLI and the sign-in file from your administrator (gcloud config set auth/login_config_file FILE, then gcloud auth application-default login)";
    case "external-idp":
      return "your organization's identity provider";
    case "static":
      return "your own key for the provider";
  }
}
