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
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
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
var chunk_v9sje2yc_exports = {};
__export(chunk_v9sje2yc_exports, {
  $bn: () => $bn
});
module.exports = __toCommonJS(chunk_v9sje2yc_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_b15sr8av = require("/$bunfs/root/chunk-b15sr8av.js");
var import_chunk_g7bgdraj = require("/$bunfs/root/chunk-g7bgdraj.js");
var import_chunk_s73318k8 = require("/$bunfs/root/chunk-s73318k8.js");
var import_chunk_yss9hm8r = require("/$bunfs/root/chunk-yss9hm8r.js");
var import_chunk_sxscgpaq = require("/$bunfs/root/chunk-sxscgpaq.js");
var import_chunk_7a5j4de6 = require("/$bunfs/root/chunk-7a5j4de6.js");
var import_chunk_ee10yhqw = require("/$bunfs/root/chunk-ee10yhqw.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_z3ydstra = require("/$bunfs/root/chunk-z3ydstra.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_bs4h6795.G)();
var Ae = [{ type: "text", key: "accessKeyId", label: "Access key ID", placeholder: "AKIA\u2026", required: true }, { type: "text", key: "secretAccessKey", label: "Secret access key", mask: "*", required: true }, { type: "text", key: "sessionToken", label: "Session token", mask: "*", hint: () => "Only needed for temporary credentials from STS. Leave empty for long-lived keys." }];
function Z() {
  let u = (0, import_chunk_sng02qpc.k)(16), { goBack: t, goNext: n, updateWizardData: i, wizardData: d, title: p } = (0, import_chunk_b15sr8av.xh)();
  const c = d.accessKeyId ?? "", l = d.secretAccessKey ?? "", m = d.sessionToken ?? "";
  let C;
  if (u[0] !== c || u[1] !== l || u[2] !== m) C = { accessKeyId: c, secretAccessKey: l, sessionToken: m }, u[0] = c, u[1] = l, u[2] = m, u[3] = C;
  else C = u[3];
  let [f, g] = (0, import_chunk_bs4h6795.y)(C), h;
  if (u[4] !== n || u[5] !== i || u[6] !== f.accessKeyId || u[7] !== f.secretAccessKey || u[8] !== f.sessionToken) h = () => {
    i({ accessKeyId: f.accessKeyId.trim(), secretAccessKey: f.secretAccessKey.trim(), sessionToken: f.sessionToken.trim() || void 0 }), n();
  }, u[4] = n, u[5] = i, u[6] = f.accessKeyId, u[7] = f.secretAccessKey, u[8] = f.sessionToken, u[9] = h;
  else h = u[9];
  let S = h;
  const E = p ?? "Set up Amazon Bedrock";
  let D;
  if (u[10] === import_chunk_w1d7ygsk.R) D = (j, x) => g((N) => ({ ...N, [j]: x })), u[10] = D;
  else D = u[10];
  let F;
  if (u[11] !== t || u[12] !== S || u[13] !== E || u[14] !== f) F = (0, import_chunk_a46xeenj.e)(import_chunk_g7bgdraj.Ite, { title: E, subtitle: "AWS access keys", fields: Ae, values: f, onChange: D, onSubmit: S, onCancel: t, submitLabel: "Continue" }), u[11] = t, u[12] = S, u[13] = E, u[14] = f, u[15] = F;
  else F = u[15];
  return F;
}
var A = { AUTH_METHOD: 0, PROFILE: 1, BEARER: 2, ACCESS_KEY_ID: 3, REGION: 4, VERIFY: 5, PIN_MODELS: 6, CONFIRM: 7 };
function ee() {
  let d = (0, import_chunk_sng02qpc.k)(9), { goBack: t, goToStep: n, updateWizardData: i } = (0, import_chunk_b15sr8av.xh)(), p;
  if (d[0] === import_chunk_w1d7ygsk.R) p = [{ label: "AWS profile (SSO or named profile)", value: "profile" }, { label: "Bedrock API key (bearer token)", value: "bearer" }, { label: "Access key + secret", value: "accessKey" }, { label: "Use credentials already in my environment", value: "environment" }], d[0] = p;
  else p = d[0];
  let c = p, l;
  if (d[1] === import_chunk_w1d7ygsk.R) l = { profile: A.PROFILE, bearer: A.BEARER, accessKey: A.ACCESS_KEY_ID, environment: A.REGION }, d[1] = l;
  else l = d[1];
  let m = l, u;
  if (d[2] !== n || d[3] !== i) u = (C) => {
    let f = C;
    i({ authMethod: f }), n(m[f]);
  }, d[2] = n, d[3] = i, d[4] = u;
  else u = d[4];
  let g = u, h;
  if (d[5] === import_chunk_w1d7ygsk.R) h = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Claude Code uses the standard AWS credential chain. Pick the method you already use with the AWS CLI." }), d[5] = h;
  else h = d[5];
  let S;
  if (d[6] !== t || d[7] !== g) S = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "How do you authenticate to AWS?", children: [h, (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: c, onChange: g, onCancel: t })] }), d[6] = t, d[7] = g, d[8] = S;
  else S = d[8];
  return S;
}
(0, import_chunk_bs4h6795.G)();
function oe() {
  let m = (0, import_chunk_sng02qpc.k)(10), { goToStep: t, updateWizardData: n, wizardData: i } = (0, import_chunk_b15sr8av.xh)(), [d, p] = (0, import_chunk_bs4h6795.y)(i.bearerToken ?? ""), [c, l] = (0, import_chunk_bs4h6795.y)(null), u;
  if (m[0] !== t || m[1] !== n || m[2] !== d) u = () => {
    let C = d.trim();
    if (!C) {
      l("API key is required");
      return;
    }
    l(null), n({ bearerToken: C }), t(A.REGION);
  }, m[0] = t, m[1] = n, m[2] = d, m[3] = u;
  else u = m[3];
  let f = u, g;
  if (m[4] === import_chunk_w1d7ygsk.R) g = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Generate a key in the AWS console under Bedrock \u2192 API keys." }), m[4] = g;
  else g = m[4];
  let h;
  if (m[5] === import_chunk_w1d7ygsk.R) h = (S) => {
    l(null), p(S);
  }, m[5] = h;
  else h = m[5];
  let E;
  if (m[6] !== c || m[7] !== f || m[8] !== d) E = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "Bedrock API key", enterAction: "continue", takesEscape: true, children: [g, (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { label: "API key", value: d, onChange: h, onSubmit: f, placeholder: "bedrock-api-key-\u2026", mask: "*", error: c })] }), m[6] = c, m[7] = f, m[8] = d, m[9] = E;
  else E = m[9];
  return E;
}
(0, import_chunk_bs4h6795.G)();
function Wr(x) {
  return x[1] !== void 0;
}
function Br(t) {
  let [N, F] = t;
  return [N, Te.has(N) ? (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "(hidden)" }) : F];
}
function we(t) {
  let n = { CLAUDE_CODE_USE_BEDROCK: "1", CLAUDE_CODE_USE_VERTEX: void 0, CLAUDE_CODE_USE_FOUNDRY: void 0, CLAUDE_CODE_USE_ANTHROPIC_AWS: void 0, CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD: void 0, AWS_REGION: t.region, AWS_PROFILE: void 0, AWS_BEARER_TOKEN_BEDROCK: void 0, AWS_ACCESS_KEY_ID: void 0, AWS_SECRET_ACCESS_KEY: void 0, AWS_SESSION_TOKEN: void 0, ANTHROPIC_DEFAULT_SONNET_MODEL: void 0, ANTHROPIC_DEFAULT_OPUS_MODEL: void 0, ANTHROPIC_DEFAULT_HAIKU_MODEL: void 0, ANTHROPIC_DEFAULT_FABLE_MODEL: void 0, ANTHROPIC_SMALL_FAST_MODEL: void 0 };
  switch (t.authMethod) {
    case "profile":
      n.AWS_PROFILE = t.awsProfile;
      break;
    case "bearer":
      n.AWS_BEARER_TOKEN_BEDROCK = t.bearerToken;
      break;
    case "accessKey":
      if (n.AWS_ACCESS_KEY_ID = t.accessKeyId, n.AWS_SECRET_ACCESS_KEY = t.secretAccessKey, t.sessionToken) n.AWS_SESSION_TOKEN = t.sessionToken;
      break;
    case "environment":
    case void 0:
      break;
  }
  if (t.pinSonnet) n.ANTHROPIC_DEFAULT_SONNET_MODEL = t.pinSonnet;
  if (t.pinOpus) n.ANTHROPIC_DEFAULT_OPUS_MODEL = t.pinOpus;
  if (t.pinFable) n.ANTHROPIC_DEFAULT_FABLE_MODEL = t.pinFable;
  if (t.pinHaiku) n.ANTHROPIC_DEFAULT_HAIKU_MODEL = t.pinHaiku;
  return n;
}
var Te = /* @__PURE__ */ new Set(["AWS_BEARER_TOKEN_BEDROCK", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN"]);
function ie(t) {
  let l = (0, import_chunk_sng02qpc.k)(7), { onComplete: n } = t, { storageV5: i } = (0, import_chunk_3jkk3v3z.Ve)(), { wizardData: d } = (0, import_chunk_b15sr8av.xh)(), [p, c] = (0, import_chunk_bs4h6795.y)(null), m;
  if (l[0] === import_chunk_w1d7ygsk.R) m = (0, import_chunk_n2dbhmj2.os)((0, import_chunk_2yx6c1y2._n)("userSettings") ?? "~/.claude/settings.json"), l[0] = m;
  else m = l[0];
  let u = m, C = we(d), f = Object.entries(C).filter(Wr), g = (0, import_chunk_bs4h6795.I)(false), S = async () => {
    if (g.current) {
      return;
    }
    g.current = true;
    let { error: h } = await (0, import_chunk_2yx6c1y2.Mr)("userSettings", { env: C }, void 0, i);
    if (h) {
      g.current = false, c(h.message);
      return;
    }
    (0, import_chunk_y53wbr8a.a)("tengu_bedrock_setup_complete", { auth_method: (0, import_chunk_78g0060s.fe)(d.authMethod), pinned_models: Boolean(d.pinSonnet || d.pinOpus || d.pinFable || d.pinHaiku), verified: Boolean(d.verifiedIdentity) }), n(`Bedrock configuration saved to ${u}.${d.authMethod === "profile" ? ` When your SSO session expires (typically 8 hours), run \`aws sso login --profile ${d.awsProfile}\` \u2014 Claude Code picks up refreshed credentials automatically.` : ""}`);
  };
  const E = import_chunk_b15sr8av.R5t, D = f.map(Br);
  let j;
  if (l[1] !== E || l[2] !== S || l[3] !== p || l[4] !== D || l[5] !== d.verifiedIdentity) j = (0, import_chunk_a46xeenj.e)(E, { settingsPath: u, entries: D, verifiedIdentity: d.verifiedIdentity, saveError: p, onSave: S }), l[1] = E, l[2] = S, l[3] = p, l[4] = D, l[5] = d.verifiedIdentity, l[6] = j;
  else j = l[6];
  return j;
}
var We = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_z3ydstra.O6e)(), 1);
var L = "Bedrock setup verification timed out";
function ne(t) {
  let n = (0, import_chunk_865at33z.GTt)(t), i = (d) => {
    let p = import_chunk_zhr7rpv7.Xs[d].bedrock;
    if (p === null) throw Error("A DEFAULT_3P_*_KEY points at a model config with bedrock: null \u2014 Bedrock setup has no fallback id for that tier");
    return { needle: import_chunk_zhr7rpv7.Xs[d].firstParty, fallback: (0, import_chunk_865at33z.Qlt)(p, n) };
  };
  return { sonnet: i(import_chunk_865at33z.zU), opus: i(import_chunk_865at33z.JRr), haiku: i(import_chunk_865at33z.I7e), fable: i(import_chunk_865at33z.ZRr) };
}
async function se(t) {
  if (t.authMethod === "bearer") return zr(t);
  let n = (0, import_chunk_xfj2cwfv.wxo)();
  try {
    let i = await Be(t) ?? (t.authMethod === "environment" && (0, import_chunk_ch6jxpf8.dL)().profile !== void 0 ? await de(t, void 0) : void 0), p = { ...await (0, import_chunk_3jjr3wje.bRt)({ url: `https://bedrock.${t.region}.amazonaws.com`, region: t.region, requestTimeoutMs: import_chunk_865at33z.wCt }), region: t.region, ...i && { credentials: i } }, { STSClient: c, GetCallerIdentityCommand: l } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-r2g6pc1c.js"))), m = await (0, import_chunk_5appeerh.qt)(new c(p).send(new l({})), n, L), u = m.Arn ?? m.UserId ?? "(unknown)", { BedrockClient: C, ListInferenceProfilesCommand: f } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5phf6gtf.js"))), g = new C(p), h = [], S;
    do {
      let E = await (0, import_chunk_5appeerh.qt)(g.send(new f({ ...S && { nextToken: S }, typeEquals: "SYSTEM_DEFINED" })), n, L);
      for (let D of E.inferenceProfileSummaries ?? []) if (D.inferenceProfileId?.includes("anthropic")) h.push(D.inferenceProfileId);
      S = E.nextToken;
    } while (S);
    return { status: "ok", identity: u, profiles: h };
  } catch (i) {
    return { status: "error", ...Nr(i, t, n) };
  }
}
async function ae(t, n) {
  return (0, import_chunk_b15sr8av.mBr)(() => Ir(t), n, (i) => i instanceof Error && (i.message === L || Ie(i)) ? "network" : "auth");
}
async function Ir(t) {
  let [{ AnthropicBedrock: n }, { getProxyFetchOptions: i }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-drfb6rw5.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cydghwmm.js")))]), d = { awsRegion: t.region, maxRetries: 0, fetchOptions: i({ url: import_chunk_c203g5kd.s.ANTHROPIC_BEDROCK_BASE_URL || `https://bedrock-runtime.${t.region}.amazonaws.com` }) }, p = await Or(t), c = (0, import_chunk_gq1dr8pm.c0e)(), l = { authToken: null, defaultHeaders: { ...c, ...(0, import_chunk_xfj2cwfv.YT)(), ...(0, import_chunk_xfj2cwfv.Y9)(), Authorization: null, ...!(0, import_chunk_xfj2cwfv.BS)() && { "X-Api-Key": null } }, ...import_chunk_xfj2cwfv.jj };
  switch (p.kind) {
    case "bearer":
      return new n({ ...d, apiKey: p.token, defaultHeaders: { ...c, ...(0, import_chunk_xfj2cwfv.YT)(), ...(0, import_chunk_xfj2cwfv.Y9)(), Authorization: `Bearer ${p.token}`, ...!(0, import_chunk_xfj2cwfv.BS)() && { "X-Api-Key": null } } });
    case "sigv4":
      return new n({ ...d, ...l, awsAccessKey: p.accessKeyId, awsSecretKey: p.secretAccessKey, awsSessionToken: p.sessionToken });
    case "default": {
      let m = import_chunk_c203g5kd.s.AWS_BEARER_TOKEN_BEDROCK;
      if (m) return new n({ ...d, apiKey: m, defaultHeaders: { ...c, ...(0, import_chunk_xfj2cwfv.YT)(), ...(0, import_chunk_xfj2cwfv.Y9)(), Authorization: `Bearer ${m}`, ...!(0, import_chunk_xfj2cwfv.BS)() && { "X-Api-Key": null } } });
      return new n({ ...d, ...l, providerChainResolver: () => de(t, void 0) });
    }
  }
}
async function Or(t) {
  if (t.authMethod === "bearer") return { kind: "bearer", token: t.bearerToken };
  let n = await Be(t);
  if (!n) return { kind: "default" };
  let i = await n();
  return { kind: "sigv4", accessKeyId: i.accessKeyId, secretAccessKey: i.secretAccessKey, sessionToken: i.sessionToken };
}
async function zr(t) {
  let n = ne(t.region).haiku.fallback, i = await ae(t, n);
  if (i.ok) return { status: "ok", identity: "Bedrock API key", profiles: [], note: `Test request to ${n} succeeded.` };
  switch (i.reason) {
    case "auth":
      return { status: "error", error: "Bedrock didn't accept this API key. Check the key and try again." };
    case "permission":
      return { status: "error", error: "API key was rejected. Your IAM policy may be missing bedrock:CallWithBearerToken or bedrock:InvokeModel." };
    case "model":
      return { status: "ok", identity: "Bedrock API key", profiles: [], note: `The key works, but ${n} is not enabled in your account. Pin a model you have access to on the next step.` };
    case "network":
      return { status: "error", error: `Couldn't reach Bedrock in region "${t.region}". Check the region name and your network.` };
    case "other":
      return { status: "error", error: "The test request didn't work. Check the key and region." };
  }
}
async function Be(t) {
  switch (t.authMethod) {
    case "profile":
      return de(t, t.awsProfile);
    case "accessKey":
      return async () => ({ accessKeyId: t.accessKeyId, secretAccessKey: t.secretAccessKey, ...t.sessionToken && { sessionToken: t.sessionToken } });
    case "environment":
      return;
    default:
      return;
  }
}
async function de(t, n) {
  let [{ fromNodeProviderChain: i }, d] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1y7278ds.js"))), (0, import_chunk_3jjr3wje.nEe)({ url: (0, import_chunk_3jjr3wje.SRt)(String(t.region)), requestTimeoutMs: import_chunk_865at33z.wCt })]), p = d ?? new We.FetchHttpHandler({ requestTimeout: import_chunk_865at33z.wCt }), c = i({ profile: n, ignoreCache: true, parentClientConfig: { region: t.region, requestHandler: p }, clientConfig: { requestHandler: p } });
  return (l) => (0, import_chunk_5appeerh.qt)(c(l), (0, import_chunk_xfj2cwfv.wxo)(), L);
}
function Ie(t) {
  return t?.name === "TimeoutError" || t?.name === "CredentialsProviderError" && (t.message ?? "").startsWith("TimeoutError:");
}
function Nr(t, n, i) {
  let d = t, p = d?.name ?? "Error", c = d?.message ?? String(t);
  if (c === L) return { error: `Timed out after ${Math.ceil(i / 1e3)}s waiting for AWS. Check your network and proxy settings; if a credential helper needs longer to prompt you, raise CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS.` };
  if (Ie(d)) return { error: "A request to AWS timed out. Check your network and proxy settings, then try again." };
  let l = n.authMethod === "profile" ? `aws sso login --profile ${n.awsProfile}` : void 0;
  switch (p) {
    case "CredentialsProviderError":
      return n.authMethod === "profile" ? { error: `Couldn't load credentials for profile "${n.awsProfile}". If this is an SSO profile, run:`, command: l } : { error: `No AWS credentials found. ${c}` };
    case "ExpiredTokenException":
    case "TokenRefreshRequired":
      return n.authMethod === "profile" ? { error: "SSO session expired. Run:", command: l } : { error: `Credentials expired. ${c}` };
    case "ForbiddenException":
      return n.authMethod === "profile" ? { error: `SSO portal denied access to the role for profile "${n.awsProfile}". The permission set may have been revoked \u2014 check your AWS access portal.` } : { error: `Forbidden. ${c}` };
    case "AccessDeniedException":
      return { error: `Access denied. Your IAM role needs bedrock:ListInferenceProfiles permission. ${c}` };
    case "UnrecognizedClientException":
    case "InvalidSignatureException":
      return { error: `AWS didn't accept these credentials. ${c}` };
    case "UnknownEndpoint":
    case "ENOTFOUND":
      return { error: `Couldn't reach AWS in region "${n.region}". Check the region name and your network.` };
    default:
      return { error: `${p}: ${c}` };
  }
}
function Oe(t, n) {
  return (t.discoveredProfiles ?? []).filter((i) => i.toLowerCase().includes(n));
}
var ze = { reasonLabel: { auth: "auth failed", permission: "no InvokeModel permission", model: "not enabled in this account", network: "unreachable", other: "request failed" }, intro: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it \u2014 Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have.", resolveTierDefaults: (t) => {
  let n = ne(t.region), i = (0, import_chunk_865at33z.GTt)(t.region);
  return Object.fromEntries(import_chunk_b15sr8av.B3.map((d) => [d, { auto: (0, import_chunk_865at33z.Tfn)(t.discoveredProfiles ?? [], n[d].needle, i) ?? void 0, fallback: n[d].fallback }]));
}, listTierCandidates: (t, n) => Oe(n, t).sort().reverse(), pickerSubtitle: (t, n) => {
  let i = Oe(n, t).length;
  return i > 0 ? `${i} ${import_chunk_sxscgpaq.vW[t]} ${(0, import_chunk_7cfjrnwy.O)(i, "profile")} in your account \xB7 each tested with a one-token request.` : `No ${import_chunk_sxscgpaq.vW[t]} profiles found in your account.`;
}, probe: (t, n) => ae(t, n) };
function ce() {
  let n = (0, import_chunk_sng02qpc.k)(2), { updateWizardData: t } = (0, import_chunk_b15sr8av.xh)(), i;
  if (n[0] !== t) i = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.x5t, { provider: ze, onPins: t }), n[0] = t, n[1] = i;
  else i = n[1];
  return i;
}
(0, import_chunk_bs4h6795.G)();
async function le() {
  let t = /* @__PURE__ */ new Set(), n = (0, import_os.homedir)();
  for (let { path: i, re: d } of [{ path: (0, import_path.join)(n, ".aws", "config"), re: /^\[(?:profile\s+)?([^\]]+)\]/gm }, { path: (0, import_path.join)(n, ".aws", "credentials"), re: /^\[([^\]]+)\]/gm }]) try {
    for (let p of (await (0, import_promises.readFile)(i, "utf8")).matchAll(d)) {
      let c = p[1]?.trim();
      if (c && !c.startsWith("sso-session ")) t.add(c);
    }
  } catch {
  }
  return [...t].sort();
}
function oo() {
  return [];
}
function ro() {
  return le().catch(oo);
}
function to(Eo) {
  return Eo.toLowerCase().includes("bedrock");
}
function io(Ze) {
  return { label: Ze, value: Ze };
}
var q = "__manual__", Ne = 12;
function he() {
  let n = (0, import_chunk_sng02qpc.k)(3), [t] = (0, import_chunk_bs4h6795.y)(ro), i;
  if (n[0] === import_chunk_w1d7ygsk.R) i = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.D_, { subtitle: "AWS profile", takesEscape: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: "Reading ~/.aws/config\u2026" }) }), n[0] = i;
  else i = n[0];
  let d;
  if (n[1] !== t) d = (0, import_chunk_a46xeenj.e)(import_chunk_bs4h6795.ai, { fallback: i, children: (0, import_chunk_a46xeenj.e)(ye, { profilesPromise: t }) }), n[1] = t, n[2] = d;
  else d = n[2];
  return d;
}
function ye(t) {
  let u = (0, import_chunk_sng02qpc.k)(49), { profilesPromise: n } = t, i = (0, import_chunk_bs4h6795.Ms)(n), { goBack: d, goToStep: p, updateWizardData: c, wizardData: l } = (0, import_chunk_b15sr8av.xh)(), m = i.length > Ne, C;
  if (u[0] !== i || u[1] !== l.awsProfile) C = l.awsProfile && !i.includes(l.awsProfile), u[0] = i, u[1] = l.awsProfile, u[2] = C;
  else C = u[2];
  let f = Boolean(C), [g, h] = (0, import_chunk_bs4h6795.y)(i.length === 0 || m || f), S;
  if (u[3] !== i || u[4] !== m) S = m ? i.find(to) : void 0, u[3] = i, u[4] = m, u[5] = S;
  else S = u[5];
  let E = S, [D, j] = (0, import_chunk_bs4h6795.y)(l.awsProfile ?? E ?? ""), [x, N] = (0, import_chunk_bs4h6795.y)(null), F;
  if (u[6] !== p || u[7] !== c) F = (ko) => {
    c({ awsProfile: ko }), p(A.REGION);
  }, u[6] = p, u[7] = c, u[8] = F;
  else F = u[8];
  let K = F;
  if (!g) {
    const X2 = i.length;
    let B2;
    if (u[9] !== i.length) B2 = (0, import_chunk_7cfjrnwy.O)(i.length, "profile"), u[9] = i.length, u[10] = B2;
    else B2 = u[10];
    let v2;
    if (u[11] !== i.length || u[12] !== B2) v2 = (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Found ", X2, " ", B2, " in ~/.aws/config and ~/.aws/credentials."] }), u[11] = i.length, u[12] = B2, u[13] = v2;
    else v2 = u[13];
    let z2;
    if (u[14] !== i) {
      const _3 = i.map(io);
      let T3;
      if (u[16] === import_chunk_w1d7ygsk.R) T3 = { label: "Type a different name\u2026", value: q }, u[16] = T3;
      else T3 = u[16];
      z2 = [..._3, T3];
      u[14] = i, u[15] = z2;
    } else z2 = u[15];
    let _2;
    if (u[17] !== i || u[18] !== l.awsProfile) _2 = l.awsProfile && i.includes(l.awsProfile) ? l.awsProfile : void 0, u[17] = i, u[18] = l.awsProfile, u[19] = _2;
    else _2 = u[19];
    let T2;
    if (u[20] !== K) T2 = (Qe) => {
      if (Qe === q) h(true);
      else K(Qe);
    }, u[20] = K, u[21] = T2;
    else T2 = u[21];
    let b2;
    if (u[22] !== d || u[23] !== z2 || u[24] !== _2 || u[25] !== T2) b2 = (0, import_chunk_a46xeenj.e)(import_chunk_s73318k8.ct, { options: z2, defaultValue: _2, onChange: T2, onCancel: d }), u[22] = d, u[23] = z2, u[24] = _2, u[25] = T2, u[26] = b2;
    else b2 = u[26];
    let U2;
    if (u[27] !== b2 || u[28] !== v2) U2 = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "AWS profile", children: [v2, b2] }), u[27] = b2, u[28] = v2, u[29] = U2;
    else U2 = u[29];
    return U2;
  }
  let X;
  if (u[30] !== K || u[31] !== D) X = () => {
    let Je = D.trim();
    if (!Je) {
      N("Profile name is required");
      return;
    }
    N(null), K(Je);
  }, u[30] = K, u[31] = D, u[32] = X;
  else X = u[32];
  let Se = X, B;
  if (u[33] === import_chunk_w1d7ygsk.R) B = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "The name from ~/.aws/config (after [profile \u2026])." }), u[33] = B;
  else B = u[33];
  let v;
  if (u[34] !== E || u[35] !== i.length || u[36] !== m) v = m && (0, import_chunk_a46xeenj.o)(import_chunk_8bkqeb5d.r, { dimColor: true, children: ["Found ", i.length, " profiles \u2014 too many to list.", E && ` Filled in with "${E}".`] }), u[34] = E, u[35] = i.length, u[36] = m, u[37] = v;
  else v = u[37];
  let z;
  if (u[38] === import_chunk_w1d7ygsk.R) z = (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "If this is an SSO profile, run `aws sso login --profile NAME` first." }), u[38] = z;
  else z = u[38];
  let _;
  if (u[39] !== v) _ = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [B, v, z] }), u[39] = v, u[40] = _;
  else _ = u[40];
  let T;
  if (u[41] === import_chunk_w1d7ygsk.R) T = (go) => {
    N(null), j(go);
  }, u[41] = T;
  else T = u[41];
  let b;
  if (u[42] !== x || u[43] !== Se || u[44] !== D) b = (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { label: "Profile name", value: D, onChange: T, onSubmit: Se, placeholder: "my-bedrock-profile", error: x }), u[42] = x, u[43] = Se, u[44] = D, u[45] = b;
  else b = u[45];
  let U;
  if (u[46] !== b || u[47] !== _) U = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "AWS profile name", enterAction: "continue", takesEscape: true, children: [_, b] }), u[46] = b, u[47] = _, u[48] = U;
  else U = u[48];
  return U;
}
(0, import_chunk_bs4h6795.G)();
function ge() {
  let m = (0, import_chunk_sng02qpc.k)(10), { goNext: t, updateWizardData: n, wizardData: i } = (0, import_chunk_b15sr8av.xh)(), [d, p] = (0, import_chunk_bs4h6795.y)(i.region ?? "us-east-1"), [c, l] = (0, import_chunk_bs4h6795.y)(null), u;
  if (m[0] !== t || m[1] !== n || m[2] !== d) u = () => {
    let C = d.trim();
    if (!C) {
      l("Region is required");
      return;
    }
    l(null), n({ region: C }), t();
  }, m[0] = t, m[1] = n, m[2] = d, m[3] = u;
  else u = m[3];
  let f = u, g;
  if (m[4] === import_chunk_w1d7ygsk.R) g = (0, import_chunk_a46xeenj.o)(import_chunk_ee10yhqw.Q, { compact: true, children: [(0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { children: "Where your Bedrock models are enabled." }), (0, import_chunk_a46xeenj.e)(import_chunk_8bkqeb5d.r, { dimColor: true, children: "Claude Code reads this from AWS_REGION, not ~/.aws/config \u2014 set it explicitly even if your profile has a region." })] }), m[4] = g;
  else g = m[4];
  let h;
  if (m[5] === import_chunk_w1d7ygsk.R) h = (S) => {
    l(null), p(S);
  }, m[5] = h;
  else h = m[5];
  let E;
  if (m[6] !== c || m[7] !== f || m[8] !== d) E = (0, import_chunk_a46xeenj.o)(import_chunk_b15sr8av.D_, { subtitle: "AWS region", enterAction: "continue", takesEscape: true, children: [g, (0, import_chunk_a46xeenj.e)(import_chunk_yss9hm8r.hd, { label: "Region", value: d, onChange: h, onSubmit: f, placeholder: "us-east-1", error: c })] }), m[6] = c, m[7] = f, m[8] = d, m[9] = E;
  else E = m[9];
  return E;
}
(0, import_chunk_bs4h6795.G)();
function Ee() {
  let i = (0, import_chunk_sng02qpc.k)(11), { updateWizardData: t, wizardData: n } = (0, import_chunk_b15sr8av.xh)(), d;
  if (i[0] === import_chunk_w1d7ygsk.R) d = { phase: "checking" }, i[0] = d;
  else d = i[0];
  let [p, c] = (0, import_chunk_bs4h6795.y)(d), l;
  if (i[1] !== t || i[2] !== n) l = () => {
    let m = false;
    return se(n).then((u) => {
      if (m) {
        return;
      }
      if (u.status === "ok") t({ verifiedIdentity: u.identity, discoveredProfiles: u.profiles });
      else t({ verifiedIdentity: void 0, discoveredProfiles: void 0 });
      c({ phase: "done", result: u });
    }), () => {
      m = true;
    };
  }, i[1] = t, i[2] = n, i[3] = l;
  else l = i[3];
  let C;
  if (i[4] === import_chunk_w1d7ygsk.R) C = [], i[4] = C;
  else C = i[4];
  if ((0, import_chunk_bs4h6795.H)(l, C), p.phase === "checking") {
    const f2 = n.authMethod === "bearer" ? "Sending a test request to Bedrock\u2026" : "Calling AWS STS and Bedrock\u2026";
    let g2;
    if (i[5] !== f2) g2 = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.D_, { subtitle: "Verifying credentials", takesEscape: true, children: (0, import_chunk_a46xeenj.e)(import_chunk_7a5j4de6.Et, { message: f2, subtitle: "This may take a few seconds." }) }), i[5] = f2, i[6] = g2;
    else g2 = i[6];
    return g2;
  }
  let { result: h } = p, f;
  if (i[7] !== h) f = h.status === "ok" ? { ...h, note: h.note ?? (h.profiles.length > 0 ? `Found ${h.profiles.length} Anthropic inference ${(0, import_chunk_7cfjrnwy.O)(h.profiles.length, "profile")} in this region.` : "No Anthropic inference profiles found in this region. You can still continue with the built-in model IDs.") } : h, i[7] = h, i[8] = f;
  else f = i[8];
  let g;
  if (i[9] !== f) g = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.A5t, { result: f }), i[9] = f, i[10] = g;
  else g = i[10];
  return g;
}
var Xe = [ee, he, oe, Z, ge, Ee, ce, ie];
function $bn(t) {
  let p = (0, import_chunk_sng02qpc.k)(6), { onComplete: n, onCancel: i, exitOnCtrlCD: d } = t, c;
  if (p[0] !== n) c = { onComplete: n }, p[0] = n, p[1] = c;
  else c = p[1];
  let l;
  if (p[2] !== d || p[3] !== i || p[4] !== c) l = (0, import_chunk_a46xeenj.e)(import_chunk_b15sr8av.FOt, { steps: Xe, stepProps: c, onCancel: i, exitOnCtrlCD: d, title: "Set up Amazon Bedrock" }), p[2] = d, p[3] = i, p[4] = c, p[5] = l;
  else l = p[5];
  return l;
}
