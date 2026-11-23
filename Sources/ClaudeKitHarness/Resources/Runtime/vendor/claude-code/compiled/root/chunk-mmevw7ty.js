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
var chunk_mmevw7ty_exports = {};
__export(chunk_mmevw7ty_exports, {
  Cjn: () => Cjn,
  DGi: () => DGi,
  HGi: () => HGi,
  IGi: () => IGi,
  Ime: () => Ime,
  JEo: () => JEo,
  LGi: () => LGi,
  Lwe: () => Lwe,
  MGi: () => MGi,
  NGi: () => NGi,
  NZ: () => NZ,
  OEs: () => OEs,
  OGi: () => OGi,
  PCr: () => PCr,
  PEs: () => PEs,
  PGi: () => PGi,
  QEo: () => QEo,
  RCr: () => RCr,
  Sun: () => Sun,
  T4: () => T4,
  Tjn: () => Tjn,
  Vk: () => Vk,
  ZEo: () => ZEo,
  ZYe: () => ZYe,
  Zvt: () => Zvt,
  dX: () => dX,
  evo: () => evo,
  gGt: () => gGt,
  klt: () => klt,
  vj: () => vj,
  xCr: () => xCr,
  xEs: () => xEs,
  yun: () => yun
});
module.exports = __toCommonJS(chunk_mmevw7ty_exports);
var import_chunk_10dpa5sx = require("/$bunfs/root/chunk-10dpa5sx.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Lwe = (0, import_chunk_w1d7ygsk.V)(function(Gr) {
  Object.defineProperty(Gr, "__esModule", { value: true });
  Gr.itemLine = Gr.replacementOf = Gr.NO_REPLACEMENT = Gr.DEPRECATION_CUTOFF_TIME = Gr.compareCutoff = Gr.isWholeKeyNotice = Gr._test = Gr.DEPRECATION_FINAL_NOTICE_MS = Gr.BATCH_2026_11 = Gr.BATCH_2026_09 = void 0;
  Gr.setDeprecationClock = Qu;
  Gr.deprecationInstant = It;
  Gr.deprecationDatesParse = tp;
  Gr.isDeprecationHonoured = Ls;
  Gr.deprecationApplies = Fr;
  Gr.applyLegacy = np;
  Gr.deprecationPhase = rp;
  Gr.nextDeprecationPhaseChange = ip;
  Gr.groupByCutoff = lp;
  Gr.formatDeprecationDate = Us;
  Gr.consequenceOf = Ds;
  Gr.cutoffHeading = hp;
  Gr.describeDeprecation = fp;
  Gr.deprecationHit = gp;
  Gr.BATCH_2026_09 = { warnFrom: "2026-09-10", supportEnds: "2026-10-07" };
  Gr.BATCH_2026_11 = { warnFrom: "2026-11-03", supportEnds: "2026-11-17" };
  Gr.DEPRECATION_FINAL_NOTICE_MS = 864e5;
  var Br = /^(\d{4})-(\d{2})-(\d{2})$/, Vr = Symbol.for("@ant/managed-config/deprecationClock"), _o = () => {
    var e;
    return ((e = globalThis[Vr]) !== null && e !== void 0 ? e : Date.now)();
  };
  function Qu(e) {
    globalThis[Vr] = e === void 0 ? void 0 : typeof e === "number" ? () => e : e;
  }
  Gr._test = { CLOCK_PIN: Date.parse("2026-08-25T12:00:00Z") };
  var zr = /* @__PURE__ */ new Map();
  function It(e) {
    let t = zr.get(e);
    if (t !== void 0) return t;
    let o = Br.exec(e);
    if (!o) throw Error(`deprecation dates are YYYY-MM-DD, got "${e}"`);
    let [s, n, i] = [Number(o[1]), Number(o[2]), Number(o[3])], u = Date.UTC(s, n - 1, i, 20, 0, 0), p = new Date(u);
    if (Number.isNaN(u) || p.getUTCFullYear() !== s || p.getUTCMonth() !== n - 1 || p.getUTCDate() !== i) throw Error(`deprecation dates are YYYY-MM-DD, got "${e}"`);
    if (ep(s, n - 1, i)) u -= 36e5;
    return zr.set(e, u), u;
  }
  function ep(e, t, o) {
    let s = Date.UTC(e, t, o);
    return s >= Kr(e, 2, 8) && s < Kr(e, 10, 1);
  }
  function Kr(e, t, o) {
    let s = Date.UTC(e, t, o);
    return s + (7 - new Date(s).getUTCDay()) % 7 * 24 * 60 * 60 * 1e3;
  }
  function tp(e) {
    try {
      for (let t of [e.warnFrom, e.supportEnds]) if (t !== void 0) It(t);
      return true;
    } catch (t) {
      return false;
    }
  }
  function Ls(e, t = _o()) {
    return e.supportEnds === void 0 || t < It(e.supportEnds);
  }
  var op = (e) => e === null || e === void 0 || e === "", sp = (e) => e.match === void 0;
  Gr.isWholeKeyNotice = sp;
  function Fr(e, t, o = {}) {
    return e.match === void 0 ? !op(t) : e.match(t, o);
  }
  function np(e, t, o = {}, s = _o()) {
    return e.rewrite !== void 0 && e.match !== void 0 && Ls(e, s) && Fr(e, t, o) ? e.rewrite(t) : t;
  }
  function rp(e, t = _o()) {
    if (e.supportEnds === void 0) return "admin";
    let o = It(e.supportEnds);
    if (t >= o) return "expired";
    if (t >= o - Gr.DEPRECATION_FINAL_NOTICE_MS) return "final";
    if (e.warnFrom !== void 0 && t < It(e.warnFrom)) return "admin";
    return "notice";
  }
  function ip(e, t = _o()) {
    if (e.supportEnds === void 0) return;
    let o = It(e.supportEnds), s = [e.warnFrom !== void 0 ? It(e.warnFrom) : void 0, o - Gr.DEPRECATION_FINAL_NOTICE_MS, o].filter((n) => n !== void 0 && n > t);
    return s.length > 0 ? Math.min(...s) : void 0;
  }
  var ap = (e, t) => e === t ? 0 : e === void 0 ? 1 : t === void 0 ? -1 : e < t ? -1 : 1;
  Gr.compareCutoff = ap;
  function lp(e, t) {
    let o = /* @__PURE__ */ new Map();
    for (let s of e) {
      let n = t(s), i = o.get(n);
      if (i === void 0) o.set(n, [s]);
      else i.push(s);
    }
    return [...o.entries()].sort(([s], [n]) => Gr.compareCutoff(s, n)).map(([s, n]) => ({ supportEnds: s, items: n }));
  }
  var dp = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function Us(e) {
    let t = Br.exec(e), o = t ? dp[Number(t[2]) - 1] : void 0;
    return t && o ? `${o} ${Number(t[3])}, ${t[1]}` : e;
  }
  Gr.DEPRECATION_CUTOFF_TIME = "12:00 PM PT";
  Gr.NO_REPLACEMENT = "no longer needed \u2014 safe to remove";
  var cp = (e) => e.charAt(0).toUpperCase() + e.slice(1), up = (e) => e.use === void 0 ? Gr.NO_REPLACEMENT : `use ${e.use}`;
  Gr.replacementOf = up;
  var pp = (e, t = (o) => o) => e.use === void 0 ? `${t(e.path)}: ${Gr.NO_REPLACEMENT}` : `${t(e.path)} \u2192 ${e.use}`;
  Gr.itemLine = pp;
  function Ds(e, t) {
    let o = e.supportEnds === void 0 ? e.effect : t ? `while it is present, ${e.effect}` : `if it is still present after that, ${e.effect}`;
    return cp(o).replace(/[.]?$/, ".");
  }
  function hp(e, t) {
    if (e === void 0) return "Deprecated with no end date (keeps working)";
    return `${t ? "Stopped" : "Stops"} working ${Us(e)} (${Gr.DEPRECATION_CUTOFF_TIME})`;
  }
  function fp(e, t = _o()) {
    if (e.supportEnds === void 0) return `${e.path} is deprecated; ${Gr.replacementOf(e)}. ${Ds(e, false)}`;
    let o = Us(e.supportEnds), s = !Ls(e, t);
    return `${e.path} ${s ? `has not been accepted since ${o}` : `is deprecated and stops being accepted on ${o}`} (${Gr.DEPRECATION_CUTOFF_TIME}); ${Gr.replacementOf(e)}. ${Ds(e, s)}`;
  }
  function gp(e, t) {
    return { key: e, path: t.path, ...t.use !== void 0 ? { use: t.use } : {}, effect: t.effect, ...t.warnFrom !== void 0 ? { warnFrom: t.warnFrom } : {}, ...t.supportEnds !== void 0 ? { supportEnds: t.supportEnds } : {} };
  }
});
var dX = (0, import_chunk_w1d7ygsk.V)(function(ti) {
  Object.defineProperty(ti, "__esModule", { value: true });
  ti.EGRESS_ENTRY_GRAMMAR = ti.DEPENDENCY_INSTALL_DOMAINS = ti.PYTHON_EXTENSION_RUNTIME_HOSTS = ti.AWS_REGION_RE = ti.GCP_PROJECT_RE = ti.GCP_REGION_RE = ti.EGRESS_NOT_PROBED = ti.CREDENTIAL_FAMILIES = ti.VERTEX_AUTH_HOSTS = ti.DATADOG_INTAKE_HOSTS = ti.GOOGLE_IAMCRED_HOST = ti.GOOGLE_STS_HOST = ti.GOOGLE_OAUTH2_HOST = ti.GOOGLE_ACCOUNTS_HOST = ti.FOUNDRY_RESOURCE_RE = ti.MICROSOFT_LOGIN_HOST = ti.SENTRY_INGEST_HOST = ti.SPELLCHECK_DICTIONARY_WILDCARD = ti.SPELLCHECK_DICTIONARY_HOST = ti.SENTRY_WILDCARD_HOST = ti.ANTHROPIC_ASSETS_HOST = ti.MCP_APP_SANDBOX_BASE_HOST = ti.MCP_APP_SANDBOX_WILDCARD_HOST = ti.FRAME_ARTIFACT_CONTENT_HOSTS = ti.ARTIFACT_IFRAME_HOST = ti.GSTATIC_WILDCARD = ti.FAVICON_PROXY_HOST = ti.PLATFORM_CLAUDE_HOST = ti.GCS_SIGNED_URL_HOST = ti.CLAUDE_AI_HOST = ti.ANTHROPIC_API_HOST = ti.UPDATE_FEED_HOST = ti.VM_BUNDLE_HOST = ti.MINIMAL_EGRESS_DOMAINS = void 0;
  ti.isAnthropicHost = xp;
  ti.isAnthropicFirstPartyHost = Up;
  ti.rawAuthority = Bs;
  ti.credentialFamilyInAuthority = jr;
  ti.safeHostname = zp;
  ti.egressAddress = Kp;
  ti.isEgressNotProbed = Vp;
  ti.egressHostPort = Fp;
  ti.splitEgressAddress = Zr;
  ti.vertexInferenceHost = Gp;
  ti.bedrockRuntimeHost = $r;
  ti.mantleRuntimeHost = Wp;
  ti.foundryResourceHost = qp;
  ti.bedrockControlPlaneHost = Xr;
  ti.awsSsoOidcHost = Jr;
  ti.awsSsoPortalHost = Qr;
  ti.bedrockSsoHosts = ei;
  ti.bedrockHosts = jp;
  ti.parseEgressHostEntry = Gs;
  ti.stripEgressEntryPort = Xp;
  ti.dropPortScopedEgressEntries = Jp;
  ti.MINIMAL_EGRESS_DOMAINS = ["*.anthropic.com", "anthropic.com", "claude.com", "*.claude.com"];
  ti.VM_BUNDLE_HOST = "downloads.claude.ai";
  ti.UPDATE_FEED_HOST = "releases.claude.com";
  ti.ANTHROPIC_API_HOST = "api.anthropic.com";
  ti.CLAUDE_AI_HOST = "claude.ai";
  ti.GCS_SIGNED_URL_HOST = "storage.googleapis.com";
  function xp(e) {
    let t = e.replace(/\.$/, "").toLowerCase();
    return t === "anthropic.com" || t.endsWith(".anthropic.com");
  }
  var Lp = ["anthropic.com", "claude.ai", "claude.com"];
  function Up(e) {
    let t = e.replace(/\.$/, "").toLowerCase();
    return Lp.some((o) => t === o || t.endsWith(`.${o}`));
  }
  ti.PLATFORM_CLAUDE_HOST = "platform.claude.com";
  ti.FAVICON_PROXY_HOST = "www.google.com";
  ti.GSTATIC_WILDCARD = "*.gstatic.com";
  ti.ARTIFACT_IFRAME_HOST = "www.claudeusercontent.com";
  ti.FRAME_ARTIFACT_CONTENT_HOSTS = ["*.frame.claudeusercontent.com", "*.frame.staging.claudeusercontent.com"];
  ti.MCP_APP_SANDBOX_WILDCARD_HOST = "*.claudemcpcontent.com";
  ti.MCP_APP_SANDBOX_BASE_HOST = "sandbox.claudemcpcontent.com";
  ti.ANTHROPIC_ASSETS_HOST = "assets.claude.ai";
  ti.SENTRY_WILDCARD_HOST = "*.sentry.io";
  ti.SPELLCHECK_DICTIONARY_HOST = "redirector.gvt1.com";
  ti.SPELLCHECK_DICTIONARY_WILDCARD = "*.gvt1.com";
  ti.SENTRY_INGEST_HOST = "o1158394.ingest.us.sentry.io";
  ti.MICROSOFT_LOGIN_HOST = "login.microsoftonline.com";
  ti.FOUNDRY_RESOURCE_RE = /^[a-z0-9][a-z0-9-]{0,62}[a-z0-9]$/;
  ti.GOOGLE_ACCOUNTS_HOST = "accounts.google.com";
  ti.GOOGLE_OAUTH2_HOST = "oauth2.googleapis.com";
  ti.GOOGLE_STS_HOST = "sts.googleapis.com";
  ti.GOOGLE_IAMCRED_HOST = "iamcredentials.googleapis.com";
  ti.DATADOG_INTAKE_HOSTS = ["browser-intake-datadoghq.com", "browser-intake-us3-datadoghq.com", "browser-intake-us5-datadoghq.com", "browser-intake-ap1-datadoghq.com", "browser-intake-ap2-datadoghq.com", "browser-intake-datadoghq.eu", "browser-intake-ddog-gov.com"];
  ti.VERTEX_AUTH_HOSTS = [ti.GOOGLE_OAUTH2_HOST, ti.GOOGLE_STS_HOST, ti.GOOGLE_ACCOUNTS_HOST, ti.GOOGLE_IAMCRED_HOST];
  function Bs(e) {
    var t, o;
    let s = e.replace(/[\t\n\r]/g, ""), n = 0, i = s.length;
    while (n < i && s.charCodeAt(n) <= 32) n++;
    while (i > n && s.charCodeAt(i - 1) <= 32) i--;
    let u = s.slice(n, i);
    return (o = (t = /^(?:https?|wss?):[/\\]*([^/?#]*)/i.exec(u)) !== null && t !== void 0 ? t : /^[a-z][a-z0-9+.-]*:\/\/([^/?#]*)/i.exec(u)) === null || o === void 0 ? void 0 : o[1];
  }
  var Je = "(?<![A-Za-z0-9_])", Ks = "(?=[A-Za-z0-9_-]{64})", Pt = "[A-Za-z0-9_-]", Fs = [["anthropic", `${Je}${Ks}sk-ant-`, true], ["openai", `${Je}${Ks}sk-(?:proj|svcacct|admin)-`, true], ["openrouter", `${Je}${Ks}sk-or-v1-`, true], ["slack user", `${Je}(?=[A-Za-z0-9-]{64})xoxp-`, true], ["slack bot", `${Je}xoxb-\\d{10,}-\\d{10,}-[A-Za-z0-9]{24}(?![A-Za-z0-9-])`, true], ["github", `${Je}gh[opusr]_[A-Za-z0-9]{36,}`, true], ["github fine-grained", `${Je}github_pat_[A-Za-z0-9]{22}_[A-Za-z0-9]{59}`, true], ["stripe", `${Je}[sr]k_(?:live|test)_[A-Za-z0-9]{15,}`, true], ["google", `${Je}AIza[0-9A-Za-z_-]{35}(?![0-9A-Za-z_-])`, false], ["signed token", `${Je}eyJ(?:${Pt}{9,60}\\.eyJ${Pt}{7,60}\\.${Pt}{10}|${Pt}{9,60}(?:\\.${Pt}{0,63}){0,3}\\.${Pt}{64}|${Pt}{61})`, false]], Hp = Fs.map(([e, t]) => [e, new RegExp(t)]), Np = Fs.filter(([, , e]) => e).map(([e, t]) => [e, new RegExp(t, "i")]);
  ti.CREDENTIAL_FAMILIES = Fs.map(([e]) => e);
  function jr(e) {
    var t, o;
    let s = Bs(e) === void 0 ? `https://${e}` : e, n = Bs(s);
    if (n === void 0) return;
    let i = (t = Hp.find(([, p]) => p.test(n))) === null || t === void 0 ? void 0 : t[0];
    if (i !== void 0) return i;
    let u;
    try {
      u = new URL(s).hostname;
    } catch (p) {
      return;
    }
    return (o = Np.find(([, p]) => p.test(u))) === null || o === void 0 ? void 0 : o[0];
  }
  function Yr(e) {
    if (typeof e !== "string" || e === "") return;
    let t = /^[a-z][a-z0-9+.-]*:\/\//i.test(e) ? e : `https://${e}`;
    if (jr(t) !== void 0) return;
    try {
      return new URL(t);
    } catch (o) {
      return;
    }
  }
  function zp(e) {
    var t;
    return ((t = Yr(e)) === null || t === void 0 ? void 0 : t.hostname) || void 0;
  }
  var Vs = "http://";
  function Kp(e) {
    let t = Yr(e);
    if (!(t === null || t === void 0 ? void 0 : t.host)) return;
    return t.protocol === "http:" ? `${Vs}${t.host}` : t.host;
  }
  ti.EGRESS_NOT_PROBED = { wildcard: "wildcard", ipLiteral: "ip-literal", plainHttpViaProxy: "plain http via proxy", blockedAddress: "link-local or cloud-metadata address" };
  var Bp = new Set(Object.values(ti.EGRESS_NOT_PROBED));
  function Vp(e) {
    return e !== void 0 && Bp.has(e);
  }
  function Fp(e) {
    let { scheme: t, host: o } = Zr(e);
    return t === "http" && !/:\d+$/.test(o) ? `${o}:80` : o;
  }
  function Zr(e) {
    return e.startsWith(Vs) ? { scheme: "http", host: e.slice(Vs.length) } : { scheme: "https", host: e };
  }
  ti.GCP_REGION_RE = /^([a-z]+-[a-z]+\d{1,2}|global|eu|us)$/;
  ti.GCP_PROJECT_RE = /^[a-z0-9][a-z0-9.:-]*$/;
  function Gp(e) {
    return e === "global" ? "aiplatform.googleapis.com" : e === "eu" || e === "us" ? `aiplatform.${e}.rep.googleapis.com` : `${e}-aiplatform.googleapis.com`;
  }
  function $r(e) {
    return `bedrock-runtime${e.startsWith("us-gov-") ? "-fips" : ""}.${e}.amazonaws.com`;
  }
  function Wp(e) {
    return `bedrock-mantle.${e}.api.aws`;
  }
  function qp(e) {
    return `${e}.services.ai.azure.com`;
  }
  function Xr(e) {
    return `bedrock${e.startsWith("us-gov-") ? "-fips" : ""}.${e}.amazonaws.com`;
  }
  ti.AWS_REGION_RE = /^[a-z]{2,}(-[a-z]+)+-\d{1,2}$/;
  function Jr(e) {
    return `oidc.${e}.amazonaws.com`;
  }
  function Qr(e) {
    return `portal.sso.${e}.amazonaws.com`;
  }
  function ei(e) {
    return [Qr(e), Jr(e)];
  }
  function jp(e, t, o = {}) {
    var s;
    let n = (s = o.inferenceHost) !== null && s !== void 0 ? s : $r(e), i = o.includeControlPlane === false ? [] : [Xr(e)];
    if (t) return [n, ...i];
    return [n, ...i, "sts.amazonaws.com", `sts.${e}.amazonaws.com`, ...ei(e)];
  }
  ti.PYTHON_EXTENSION_RUNTIME_HOSTS = ["github.com", "objects.githubusercontent.com", "pypi.org", "files.pythonhosted.org"];
  ti.DEPENDENCY_INSTALL_DOMAINS = ["registry.npmjs.org", "npmjs.com", "www.npmjs.com", "npmjs.org", "www.npmjs.org", "yarnpkg.com", "registry.yarnpkg.com", "pypi.org", "files.pythonhosted.org", "pythonhosted.org", "github.com", "objects.githubusercontent.com", "archive.ubuntu.com", "security.ubuntu.com", "crates.io", "index.crates.io", "static.crates.io", "playwright.download.prss.microsoft.com", "cdn.playwright.dev"];
  var Yp = /^[a-z0-9_-]+(?:\.[a-z0-9_-]+)*$/i, Zp = /^[1-9][0-9]{0,4}$/;
  function $p(e) {
    if (e === "localhost") return true;
    let t = e.startsWith("*.") ? e.slice(2) : e;
    return Yp.test(t) && t.includes(".");
  }
  ti.EGRESS_ENTRY_GRAMMAR = "`*`, `localhost`, `host[:port]`, or `*.host[:port]` (port 1-65535; no port on bare `*`; no scheme, path, or IPv6 literal)";
  function Gs(e) {
    let t = e, o, s = e.lastIndexOf(":");
    if (s !== -1) {
      let i = e.slice(s + 1);
      if (!Zp.test(i)) return null;
      if (o = Number(i), o > 65535) return null;
      t = e.slice(0, s);
    }
    if (t === "*") return o === void 0 ? { host: t } : null;
    if (!$p(t)) return null;
    let n = t.toLowerCase();
    return o === void 0 ? { host: n } : { host: n, port: o };
  }
  function Xp(e) {
    var t, o;
    return (o = (t = Gs(e)) === null || t === void 0 ? void 0 : t.host) !== null && o !== void 0 ? o : e;
  }
  function Jp(e) {
    return e === null || e === void 0 ? void 0 : e.filter((t) => {
      let o = Gs(t);
      return o ? o.port === void 0 : !t.includes(":");
    });
  }
});
var gGt = (0, import_chunk_w1d7ygsk.V)(function(di) {
  Object.defineProperty(di, "__esModule", { value: true });
  di.SIGN_IN_CREDENTIAL_KINDS = di.KIND_PRECEDENCE = di.INFERENCE_CREDENTIAL_KINDS = di.isAnthropicOAuthToken = di.getProviderLabel = di.DEFAULT_INFERENCE_PROVIDER = di.PROVIDERS = di.PROVIDER_DISPLAY = void 0;
  di.legacyCredentialKindAliases = $h;
  di.legacyCredentialKindAlias = Xh;
  di.PROVIDER_DISPLAY = { gateway: "Gateway", anthropic: "Claude API", bedrock: "Bedrock", mantle: "Bedrock Mantle", vertex: "Vertex AI", foundry: "Foundry" };
  di.PROVIDERS = Object.keys(di.PROVIDER_DISPLAY);
  di.DEFAULT_INFERENCE_PROVIDER = "gateway";
  var Yh = (e) => e ? di.PROVIDER_DISPLAY[e] : "";
  di.getProviderLabel = Yh;
  var Zh = (e) => e.startsWith("sk-ant-oat");
  di.isAnthropicOAuthToken = Zh;
  di.INFERENCE_CREDENTIAL_KINDS = ["static", "helper-script", "interactive", "vendor-profile", "workforce", "external-idp"];
  di.KIND_PRECEDENCE = ["workforce", "external-idp", "interactive", "vendor-profile", "helper-script", "static"];
  di.SIGN_IN_CREDENTIAL_KINDS = ["interactive", "workforce", "external-idp"];
  var li = /* @__PURE__ */ new Map([["oauth", "interactive"]]);
  function $h(e) {
    return e === "vertex" ? li : /* @__PURE__ */ new Map();
  }
  function Xh(e, t) {
    return e === void 0 || e === "vertex" ? li.get(t) : void 0;
  }
});
var Vk = (0, import_chunk_w1d7ygsk.V)(function(ft) {
  Object.defineProperty(ft, "__esModule", { value: true });
  ft.ZodKind = ft.LONG_DESCRIPTION_MAX_LENGTH = ft.SHORT_DESCRIPTION_MAX_LENGTH = ft.TYPED_SLICE_READERS = ft.READER_FACTS = ft.CONFIG_READERS = ft.PROVIDERS = ft.PROVIDER_DISPLAY = ft.KIND_PRECEDENCE = ft.INFERENCE_CREDENTIAL_KINDS = ft.getProviderLabel = ft.DEFAULT_INFERENCE_PROVIDER = void 0;
  ft.inExternalBuild = af;
  ft.readerLegend = lf;
  ft.isRemoteOnly = df;
  ft.intakeReportKeepsValue = cf;
  ft.effectiveVisibility = ui;
  ft.compareDesktopVersions = pi;
  ft.min3pAvailableInVersion = uf;
  ft.isUnreleasedVersion = wo;
  ft.supportEntries = js;
  ft.isFullyUnreleasedSupport = pf;
  ft.isReleasedFor3p = hf;
  ft.presetForItem = ff;
  ft.shortDescription = gf;
  ft.longDescription = mf;
  ft.deriveSubFieldControlType = hi;
  ft.nestedColumnsOf = fi;
  ft.surfaceGrantFor = bf;
  ft.runtimeDefault = vf;
  ft.displayDefault = _f;
  ft.annotate = Vt;
  ft.annotationsOf = Xe;
  ft.filePath = wf;
  ft.folderPath = kf;
  ft.urlString = Cf;
  ft.globPattern = Sf;
  ft.redact = Ef;
  ft.redactPolicyOf = Af;
  ft.maxLengthOf = Of;
  ft.pathKindOf = Mf;
  ft.acceptsWildcard = Tf;
  ft.isUrlString = If;
  ft.isNotGatewayServable = Pf;
  ft.isHybridExcluded = Rf;
  ft.readersOf = mi;
  ft.readersDeclared = Df;
  ft.isReadBy = yi;
  ft.isHybridDerived = xf;
  ft.isHybridLoopback = Lf;
  ft.remotePolicyOf = Uf;
  ft.field = Hf;
  ft.offDeviceExecutionTargets = Nf;
  ft.lazySchema = vi;
  ft.isLazySchema = zf;
  ft.isLazySchemaBuilt = Kf;
  ft.fieldMetaForNode = ko;
  ft.subfield = Bf;
  ft.subfieldMetaForNode = Nt;
  ft.isUnreleasedMember = Vf;
  ft.variantMeta = Ff;
  ft.variantMetaForNode = Gf;
  ft.localExecSubfieldKeys = Wf;
  ft.openEnumItemsOf = qf;
  ft.consentRequiringSubfieldKeys = jf;
  ft.hybridOnlySubfieldKeys = Yf;
  ft.zodKind = de;
  ft.unwrapStep = zt;
  ft.unwrapZod = Ue;
  ft.stripDefaults = Qe;
  ft.pipeSidesOf = $f;
  ft.unionOptionsOf = Lo;
  ft.arrayElementOf = Ft;
  ft.arrayLengthBoundsOf = Xf;
  ft.recordKeyTypeOf = Jf;
  ft.recordValueTypeOf = Qf;
  ft.numberIsInt = eg;
  ft.numberBoundsOf = tg;
  ft.findDefaultValue = og;
  ft.discriminatorArmsOf = ng;
  ft.discriminatorKeyOf = rg;
  ft.literalValueOf = ig;
  ft.dropUndefined = ag;
  ft.enumOptionsOf = Gt;
  ft.recordValueEnumOf = Ci;
  ft.subFieldsOf = Zs;
  var Kt = require("/$bunfs/root/chunk-1sw5dt64.js"), Bt = gGt();
  Object.defineProperty(ft, "DEFAULT_INFERENCE_PROVIDER", { enumerable: true, get: function() {
    return Bt.DEFAULT_INFERENCE_PROVIDER;
  } });
  Object.defineProperty(ft, "getProviderLabel", { enumerable: true, get: function() {
    return Bt.getProviderLabel;
  } });
  Object.defineProperty(ft, "INFERENCE_CREDENTIAL_KINDS", { enumerable: true, get: function() {
    return Bt.INFERENCE_CREDENTIAL_KINDS;
  } });
  Object.defineProperty(ft, "KIND_PRECEDENCE", { enumerable: true, get: function() {
    return Bt.KIND_PRECEDENCE;
  } });
  Object.defineProperty(ft, "PROVIDER_DISPLAY", { enumerable: true, get: function() {
    return Bt.PROVIDER_DISPLAY;
  } });
  Object.defineProperty(ft, "PROVIDERS", { enumerable: true, get: function() {
    return Bt.PROVIDERS;
  } });
  ft.CONFIG_READERS = ["desktop", "m365", "code"];
  ft.READER_FACTS = { desktop: { name: "Claude Desktop", servedSchemaVersion: 2, served: true, readsBootstrap: true }, m365: { name: "the Claude add-in for Microsoft 365", servedSchemaVersion: 2, served: true, readsBootstrap: true, typePrefix: "M365" }, code: { name: "the Claude Code CLI signed in to the organization by itself", servedSchemaVersion: 2, served: false, readsBootstrap: false, typePrefix: "ClaudeCode", inExternalBuild: true } };
  ft.TYPED_SLICE_READERS = ft.CONFIG_READERS.filter((e) => "typePrefix" in ft.READER_FACTS[e]);
  function af(e) {
    return ft.READER_FACTS[e].inExternalBuild === true;
  }
  function lf(e) {
    return e.map((t) => `\`${t}\` = ${ft.READER_FACTS[t].name}`).join(", ");
  }
  var qs = ["desktop"];
  function df(e) {
    var t;
    let o = e.remotePolicy;
    return (o === null || o === void 0 ? void 0 : o.type) === "remote-only" || ((t = o === null || o === void 0 ? void 0 : o.hybrid) === null || t === void 0 ? void 0 : t.scope) === "only" || !yi(e, "desktop");
  }
  function cf(e) {
    return e.kind === "clamp" || e.kind === "unknown" || e.kind === "deprecated";
  }
  function ui(e) {
    var t, o;
    return (o = (t = e.support) === null || t === void 0 ? void 0 : t.visibility) !== null && o !== void 0 ? o : "public";
  }
  function pi(e, t) {
    var o, s;
    let n = (p) => p.split(".").map((y) => {
      let b = Number(y);
      return Number.isFinite(b) ? b : 0;
    }), i = n(e), u = n(t);
    for (let p = 0; p < Math.max(i.length, u.length); p++) {
      let y = ((o = i[p]) !== null && o !== void 0 ? o : 0) - ((s = u[p]) !== null && s !== void 0 ? s : 0);
      if (y !== 0) return y < 0 ? -1 : 1;
    }
    return 0;
  }
  function uf(e) {
    return (Array.isArray(e) ? e : [e]).filter((o) => o.scopes.includes("3p")).map((o) => o.availableInVersion).sort(pi)[0];
  }
  function wo(e) {
    return e === "@next";
  }
  function js(e) {
    let t = e.support.enabled;
    return Array.isArray(t) ? t : [t];
  }
  function pf(e) {
    let t = js(e);
    return t.length > 0 && t.every((o) => wo(o.availableInVersion));
  }
  function hf(e) {
    return js(e).some((t) => t.scopes.includes("3p") && !wo(t.availableInVersion));
  }
  function ff(e, t, o) {
    return e === null || e === void 0 ? void 0 : e.find((s) => Object.entries(s.item).every(([n, i]) => n === o || typeof i === "object" && i !== null || t[n] === i));
  }
  ft.SHORT_DESCRIPTION_MAX_LENGTH = 160;
  ft.LONG_DESCRIPTION_MAX_LENGTH = 2e3;
  function gf(e, t) {
    return { text: e, ...t };
  }
  function mf(e, t) {
    return { text: e, ...t };
  }
  function hi(e, t) {
    if (t.control) return t.control;
    let o = de(Ue(e));
    if (o === ft.ZodKind.ZodBoolean) return "bool";
    if (o === ft.ZodKind.ZodNumber) return "int";
    if (o === ft.ZodKind.ZodEnum || o === ft.ZodKind.ZodLiteral) return "select";
    if (o === ft.ZodKind.ZodRecord) return "record";
    if (o === ft.ZodKind.ZodDiscriminatedUnion) return "union";
    if (o === ft.ZodKind.ZodArray && gi(e)) return "enumArray";
    if (o === ft.ZodKind.ZodArray || o === ft.ZodKind.ZodObject) {
      if (fi(e).length === 0) return "json";
      return o === ft.ZodKind.ZodArray ? "objectList" : "object";
    }
    return "text";
  }
  function fi(e) {
    var t;
    let o = Ue(e);
    return Zs((t = Ft(o)) !== null && t !== void 0 ? t : o);
  }
  function gi(e) {
    let t = Ft(Ue(e));
    return t && Gt(t);
  }
  var yf = { chat: false, fileAnalysis: false, cowork: false };
  function bf(e, t) {
    var o;
    if (t === void 0 || t === null || t === "") return;
    return (o = typeof t === "string" && Object.hasOwn(e, t) ? e[t] : void 0) !== null && o !== void 0 ? o : yf;
  }
  function vf(e) {
    let t = e.default;
    return t === void 0 || typeof t === "object" ? void 0 : t;
  }
  function _f(e) {
    let t = e.default;
    return t !== void 0 && typeof t === "object" ? t.displayOnly : t;
  }
  function Vt(e, t) {
    let o = e;
    return o.__antAnn = { ...o.__antAnn, ...t }, e;
  }
  function Xe(e) {
    let t = {}, o = /* @__PURE__ */ new Set(), s = (n) => {
      if (o.has(n)) return;
      o.add(n);
      let i = n.__antAnn;
      if (i) {
        for (let p of Object.keys(i)) if (t[p] === void 0) t[p] = i[p];
      }
      if (de(n) === ft.ZodKind.ZodPipeline) {
        let p = Ce(n), y = zt(n);
        if (y !== n) s(y);
        for (let b of [p.in, p.out]) if (b && b !== y) s(b);
        return;
      }
      let u = zt(n);
      if (u !== n) s(u);
    };
    return s(e), t;
  }
  function wf(e = Kt.z.string()) {
    return Vt(e, { pathKind: "file" });
  }
  function kf(e = Kt.z.string()) {
    return Vt(e, { pathKind: "folder" });
  }
  function Cf(e) {
    return Vt(e, { url: true });
  }
  function Sf(e) {
    return Vt(e, { glob: true });
  }
  function Ef(e, t = "drop") {
    return Vt(e, { redact: t });
  }
  function Af(e) {
    return Xe(e).redact;
  }
  function Of(e) {
    var t;
    let o = Ue(e);
    if (de(o) !== ft.ZodKind.ZodString) return;
    return (t = o.maxLength) !== null && t !== void 0 ? t : void 0;
  }
  function Mf(e) {
    let t = Xe(e).pathKind;
    if (t) return t;
    let o = Ue(e), s = Ft(o);
    return s ? Xe(s).pathKind : void 0;
  }
  function Tf(e) {
    return Xe(e).glob === true;
  }
  function If(e) {
    return Xe(e).url === true;
  }
  function Pf(e) {
    return Xe(e).gatewayServable === false;
  }
  function Rf(e) {
    var t, o, s, n, i;
    return ((s = (o = (t = ko(e)) === null || t === void 0 ? void 0 : t.remotePolicy) === null || o === void 0 ? void 0 : o.hybrid) === null || s === void 0 ? void 0 : s.scope) === "excluded" || ((i = (n = Xe(e).remotePolicy) === null || n === void 0 ? void 0 : n.hybrid) === null || i === void 0 ? void 0 : i.scope) === "excluded";
  }
  function mi(e) {
    var t;
    return (t = e.readers) !== null && t !== void 0 ? t : qs;
  }
  function Df(e) {
    let t = e.readers;
    return t !== void 0 && !(t.length === qs.length && t.every((o, s) => o === qs[s]));
  }
  function yi(e, t) {
    return t === "all" || mi(e).includes(t);
  }
  function xf(e) {
    var t, o, s;
    return ((s = (o = (t = ko(e)) === null || t === void 0 ? void 0 : t.remotePolicy) === null || o === void 0 ? void 0 : o.hybrid) === null || s === void 0 ? void 0 : s.derived) === true;
  }
  function Lf(e) {
    var t, o, s;
    return ((s = (o = (t = ko(e)) === null || t === void 0 ? void 0 : t.remotePolicy) === null || o === void 0 ? void 0 : o.hybrid) === null || s === void 0 ? void 0 : s.loopback) === true;
  }
  function Uf(e) {
    var t, o, s, n;
    return (n = (o = (t = ko(e)) === null || t === void 0 ? void 0 : t.remotePolicy) !== null && o !== void 0 ? o : (s = Nt(e)) === null || s === void 0 ? void 0 : s.remotePolicy) !== null && n !== void 0 ? n : Xe(e).remotePolicy;
  }
  function Hf(e, t) {
    e.__antFieldMeta = t;
    let o = t.support.executionTarget;
    if (o !== void 0 && o !== "desktop") bi.add(o);
    return e;
  }
  var bi = /* @__PURE__ */ new Set();
  function Nf() {
    return [...bi];
  }
  function vi(e) {
    let t = Kt.z.lazy(() => {
      let o = e();
      return t.__antLazyBuilt = true, o;
    });
    return t;
  }
  function _i(e) {
    let t = e;
    for (; ; ) {
      if (de(t) === ft.ZodKind.ZodLazy) return t;
      let o = ki(t);
      if (o === t) return;
      t = o;
    }
  }
  function zf(e) {
    return _i(e) !== void 0;
  }
  function Kf(e) {
    let t = _i(e);
    return (t === null || t === void 0 ? void 0 : t.__antLazyBuilt) === true;
  }
  function wi(e) {
    return e._zod.innerType;
  }
  function ko(e) {
    return e === null || e === void 0 ? void 0 : e.__antFieldMeta;
  }
  function Bf(e, t) {
    var o, s;
    let { short: n, long: i } = t.description;
    return e.__antSubFieldMeta = { ...t, description: { short: { ...n, docsOnly: (o = n.docsOnly) !== null && o !== void 0 ? o : true }, ...i ? { long: { ...i, docsOnly: (s = i.docsOnly) !== null && s !== void 0 ? s : true } } : {} } }, e;
  }
  function Nt(e) {
    return e === null || e === void 0 ? void 0 : e.__antSubFieldMeta;
  }
  function Vf(e) {
    var t, o;
    if (wo((o = (t = Nt(e)) === null || t === void 0 ? void 0 : t.support) === null || o === void 0 ? void 0 : o.availableInVersion)) return true;
    let s = Ue(e);
    if (de(s) !== ft.ZodKind.ZodObject) return false;
    return Object.values(s.shape).some((n) => {
      var i, u, p, y;
      let b = n;
      return ((i = Gt(b)) === null || i === void 0 ? void 0 : i.length) === 1 && wo((y = (p = (u = Nt(b)) === null || u === void 0 ? void 0 : u.support) === null || p === void 0 ? void 0 : p.availableInVersion) !== null && y !== void 0 ? y : Xe(b).availableInVersion);
    });
  }
  function Ff(e, t) {
    return e.__antVariantMeta = t, e;
  }
  function Gf(e) {
    return e === null || e === void 0 ? void 0 : e.__antVariantMeta;
  }
  function Ys(e, t) {
    let o = /* @__PURE__ */ new Set(), s = (n, i) => {
      var u;
      let p = Ue(n), y = de(p);
      if (y === ft.ZodKind.ZodObject) for (let [b, S] of Object.entries(p.shape)) {
        let M = S, C = i ? `${i}.${b}` : b, x = (u = Nt(M)) === null || u === void 0 ? void 0 : u.remotePolicy;
        if (x && t(x)) o.add(C);
        s(M, C);
      }
      else if (y === ft.ZodKind.ZodUnion || y === ft.ZodKind.ZodDiscriminatedUnion) for (let b of Lo(p)) s(b, i);
      else if (y === ft.ZodKind.ZodArray) {
        let b = Ft(p);
        if (b) s(b, i);
      }
    };
    return s(e, ""), o;
  }
  function Wf(e) {
    return Ys(e, (t) => t.type === "remote-disabled");
  }
  function qf(e) {
    let t = Ft(Ue(e)), o = t ? Xe(t).openEnum : void 0;
    return o ? { anyOf: [{ type: "string", enum: [...o] }, { type: "string" }], description: "Known values are listed; a client ignores a value it does not know, so a newer client's vocabulary is storable as is." } : void 0;
  }
  function jf(e) {
    return Ys(e, (t) => t.requiresUserConsent === true);
  }
  function Yf(e) {
    return Ys(e, (t) => {
      var o;
      return ((o = t.hybrid) === null || o === void 0 ? void 0 : o.scope) === "only";
    });
  }
  ft.ZodKind = { ZodString: "string", ZodNumber: "number", ZodBoolean: "boolean", ZodUndefined: "undefined", ZodNever: "never", ZodLiteral: "literal", ZodEnum: "enum", ZodObject: "object", ZodArray: "array", ZodRecord: "record", ZodUnion: "union", ZodDiscriminatedUnion: "discriminatedUnion", ZodOptional: "optional", ZodDefault: "default", ZodPrefault: "prefault", ZodNullable: "nullable", ZodCatch: "catch", ZodReadonly: "readonly", ZodPipeline: "pipe", ZodTransform: "transform", ZodLazy: "lazy" };
  function Ce(e) {
    return e._zod.def;
  }
  function de(e) {
    var t;
    let o = (t = e === null || e === void 0 ? void 0 : e._zod) === null || t === void 0 ? void 0 : t.def;
    if (!(o === null || o === void 0 ? void 0 : o.type)) return;
    if (o.type === ft.ZodKind.ZodUnion && o.discriminator !== void 0) return ft.ZodKind.ZodDiscriminatedUnion;
    return o.type;
  }
  var Zf = /* @__PURE__ */ new Set([ft.ZodKind.ZodOptional, ft.ZodKind.ZodDefault, ft.ZodKind.ZodPrefault, ft.ZodKind.ZodNullable, ft.ZodKind.ZodCatch, ft.ZodKind.ZodReadonly]);
  function zt(e) {
    if (de(e) === ft.ZodKind.ZodLazy) return wi(e);
    return ki(e);
  }
  function ki(e) {
    var t;
    let o = de(e);
    if (o && Zf.has(o)) return (t = Ce(e).innerType) !== null && t !== void 0 ? t : e;
    if (o === ft.ZodKind.ZodPipeline) {
      let s = Ce(e);
      if (!s.in || !s.out) return e;
      return de(s.out) === ft.ZodKind.ZodTransform ? s.in : s.out;
    }
    return e;
  }
  function Ue(e) {
    let t = e;
    for (; ; ) {
      let o = zt(t);
      if (!o || o === t) return t;
      t = o;
    }
  }
  function Qe(e) {
    let t = Ce(e), o = (s) => e.clone({ ...t, ...s });
    switch (de(e)) {
      case ft.ZodKind.ZodDefault:
      case ft.ZodKind.ZodPrefault:
        return Qe(t.innerType).optional();
      case ft.ZodKind.ZodOptional:
      case ft.ZodKind.ZodNullable:
      case ft.ZodKind.ZodCatch:
      case ft.ZodKind.ZodReadonly:
        return o({ innerType: Qe(t.innerType) });
      case ft.ZodKind.ZodPipeline:
        return o({ in: Qe(t.in), out: Qe(t.out) });
      case ft.ZodKind.ZodObject:
        return o({ shape: Object.fromEntries(Object.entries(t.shape).map(([s, n]) => [s, Qe(n)])) });
      case ft.ZodKind.ZodArray:
        return o({ element: Qe(t.element) });
      case ft.ZodKind.ZodUnion:
      case ft.ZodKind.ZodDiscriminatedUnion:
        return o({ options: t.options.map(Qe) });
      case ft.ZodKind.ZodRecord:
        return o({ valueType: Qe(t.valueType) });
      case ft.ZodKind.ZodLazy:
        return vi(() => Qe(wi(e)));
      default:
        return e;
    }
  }
  function $f(e) {
    if (de(e) !== ft.ZodKind.ZodPipeline) return;
    let t = Ce(e);
    return t.in && t.out ? { in: t.in, out: t.out } : void 0;
  }
  function Lo(e) {
    var t;
    let o = de(e);
    if (o === ft.ZodKind.ZodUnion || o === ft.ZodKind.ZodDiscriminatedUnion) return (t = Ce(e).options) !== null && t !== void 0 ? t : [];
    return [];
  }
  function Ft(e) {
    return de(e) === ft.ZodKind.ZodArray ? Ce(e).element : void 0;
  }
  function Xf(e) {
    var t;
    if (de(e) !== ft.ZodKind.ZodArray) return { min: void 0, max: void 0 };
    let o, s;
    for (let n of (t = Ce(e).checks) !== null && t !== void 0 ? t : []) {
      let i = n._zod.def, u, p;
      switch (i.check) {
        case "min_length":
          u = i.minimum;
          break;
        case "max_length":
          p = i.maximum;
          break;
        case "length_equals":
          u = p = i.length;
          break;
      }
      if (u !== void 0 && (o === void 0 || u > o)) o = u;
      if (p !== void 0 && (s === void 0 || p < s)) s = p;
    }
    return { min: o, max: s };
  }
  function Jf(e) {
    return de(e) === ft.ZodKind.ZodRecord ? Ce(e).keyType : void 0;
  }
  function Qf(e) {
    return de(e) === ft.ZodKind.ZodRecord ? Ce(e).valueType : void 0;
  }
  function eg(e) {
    return de(e) === ft.ZodKind.ZodNumber && e.isInt === true;
  }
  function tg(e) {
    var t;
    if (de(e) !== ft.ZodKind.ZodNumber) return { min: void 0, max: void 0 };
    let o, s;
    for (let n of (t = Ce(e).checks) !== null && t !== void 0 ? t : []) {
      let i = n._zod.def;
      if (typeof i.value !== "number") continue;
      if (i.check === "greater_than") o = { value: i.value, inclusive: i.inclusive === true };
      else if (i.check === "less_than") s = { value: i.value, inclusive: i.inclusive === true };
    }
    return { min: o, max: s };
  }
  function og(e) {
    let t = e;
    for (; ; ) {
      let o = de(t);
      if (o === ft.ZodKind.ZodDefault || o === ft.ZodKind.ZodPrefault) return Ce(t).defaultValue;
      let s = zt(t);
      if (s === t) return;
      t = s;
    }
  }
  function sg(e) {
    let t = e;
    for (; ; ) {
      if (de(t) === ft.ZodKind.ZodOptional) return true;
      let o = zt(t);
      if (o === t) return false;
      t = o;
    }
  }
  function ng(e) {
    var t;
    let o = Ue(e);
    if (de(o) !== ft.ZodKind.ZodDiscriminatedUnion) return [];
    let s = Ce(o).discriminator, n = [];
    if (sg(e)) n.push({ id: "" });
    for (let i of Lo(o)) {
      let u = i.shape[s];
      for (let p of (t = Gt(u)) !== null && t !== void 0 ? t : []) n.push({ id: p, schema: i });
    }
    return n;
  }
  function rg(e) {
    let t = Ue(e);
    return de(t) === ft.ZodKind.ZodDiscriminatedUnion ? Ce(t).discriminator : void 0;
  }
  function ig(e) {
    var t;
    let o = e ? Ue(e) : void 0;
    return o && de(o) === ft.ZodKind.ZodLiteral ? (t = Ce(o).values) === null || t === void 0 ? void 0 : t[0] : void 0;
  }
  function ag(e) {
    let t = { ...e };
    for (let o of Object.keys(t)) if (t[o] === void 0) delete t[o];
    return t;
  }
  function Gt(e) {
    var t, o;
    let s = Ue(e), n = de(s);
    if (n === ft.ZodKind.ZodEnum) return Object.values((t = Ce(s).entries) !== null && t !== void 0 ? t : {});
    if (n === ft.ZodKind.ZodLiteral) return (o = Ce(s).values) !== null && o !== void 0 ? o : [];
    return;
  }
  function Ci(e) {
    let t = Ue(e), o = de(t) === ft.ZodKind.ZodRecord ? Ce(t).valueType : void 0;
    return o ? Gt(o) : void 0;
  }
  function Zs(e) {
    var t, o, s, n, i, u;
    if (!e) return [];
    let p = Ue(e), y = Lo(p);
    if (y.length > 0) {
      let S = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map(), C = false;
      for (let W of y) for (let q of Zs(W)) {
        let X = S.get(q.key);
        if (!X) S.set(q.key, q);
        else {
          let ae = [X.shownByOtherArm, (t = q.predicates) === null || t === void 0 ? void 0 : t.show, q.shownByOtherArm].filter((te) => te !== void 0);
          S.set(q.key, { ...X, ...((o = X.predicates) === null || o === void 0 ? void 0 : o.show) && ae.length > 0 ? { shownByOtherArm: (te) => ae.some((Be) => Be(te)) } : {}, ...q.options && q.options.length > 0 ? { options: [.../* @__PURE__ */ new Set([...(s = X.options) !== null && s !== void 0 ? s : [], ...q.options])] } : {}, ...q.optionLabels ? { optionLabels: { ...q.optionLabels, ...X.optionLabels } } : {} });
        }
        if (ui(q) === "public") {
          let ae = (n = M.get(q.key)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set();
          for (let te of (i = q.options) !== null && i !== void 0 ? i : []) ae.add(te);
          M.set(q.key, ae);
        } else C = true;
      }
      let x = [...S.values()];
      if (!C) return x;
      return x.map((W) => {
        var q;
        let X = M.get(W.key);
        if (!X) return W;
        let ae = (q = W.options) === null || q === void 0 ? void 0 : q.filter((te) => !X.has(te));
        return { ...W, support: void 0, ...(ae === null || ae === void 0 ? void 0 : ae.length) ? { nonPublicOptions: ae } : {} };
      });
    }
    if (de(p) !== ft.ZodKind.ZodObject) return [];
    let b = [];
    for (let [S, M] of Object.entries(p.shape)) {
      let C = M, x = Nt(C);
      if (x) {
        let W = hi(C, x);
        b.push({ key: S, ...x, node: C, type: W, options: W === "enumArray" ? gi(C) : Gt(C), ...W === "record" && { valueOptions: (u = x.optionValues) !== null && u !== void 0 ? u : Ci(C) } });
      }
    }
    return b;
  }
});
var vj = (0, import_chunk_w1d7ygsk.V)(function(Ei) {
  Object.defineProperty(Ei, "__esModule", { value: true });
  Ei.STUB_INTL = Ei.msg = void 0;
  var Pm = (e) => e;
  Ei.msg = Pm;
  Ei.STUB_INTL = { formatMessage: (e) => e.defaultMessage };
});
var T4 = (0, import_chunk_w1d7ygsk.V)(function(Ri) {
  Object.defineProperty(Ri, "__esModule", { value: true });
  Ri.desktopVersionString = Ri.DESKTOP_VERSION_RE = Ri.SHA256_HEX = Ri._test = Ri.HOST_LIST_PLACEHOLDER = Ri.MODELS_GROUP = Ri.HELPER_SCRIPT_GROUP = Ri.singleHostEgress = Ri.credentialHelperCommandOf = Ri.credentialKindOf = Ri.activeCredentialOf = Ri.offDeviceClusterOf = Ri.activeBootstrapOrigin = Ri.unreadableActivators = Ri.hasActiveBootstrap = Ri.urlWithSchemeCoercion = Ri.QUERY_OR_FRAGMENT_URL_MESSAGE = Ri.CREDENTIALED_URL_MESSAGE = Ri.reportUnknownEnumElements = Ri.lenientEnumArray = Ri.kvRecord = Ri.COWORK_3P_DOCS_BASE = Ri.canonicalJson = void 0;
  Ri.legacyKvEncodingNotice = Mi;
  Ri.hasUserinfo = Xs;
  Ri.carriesCredential = zm;
  Ri.refuseCredentials = Ii;
  Ri.hasQueryOrFragment = Km;
  Ri.oidcEgressHosts = Bm;
  Ri.withUnreadableActivators = Gm;
  var ve = require("/$bunfs/root/chunk-cyk4xmps.js"), Wt = Lwe(), et = dX(), qt = Vk(), jt = vj(), Dm = (e, t) => t && typeof t === "object" && !Array.isArray(t) ? Object.fromEntries(Object.entries(t).sort(([o], [s]) => o < s ? -1 : o > s ? 1 : 0)) : t, xm = (e) => JSON.stringify(e, Dm);
  Ri.canonicalJson = xm;
  Ri.COWORK_3P_DOCS_BASE = "https://claude.com/docs/third-party/claude-desktop";
  function Lm(e) {
    let t = {}, o = (s, n) => {
      if (typeof s !== "string") return;
      let i = s.indexOf(n);
      if (i <= 0) return;
      let u = s.slice(0, i).trim(), p = s.slice(i + 1).trim();
      if (u && p) t[u] = p;
    };
    if (Array.isArray(e)) for (let s of e) o(s, ":");
    else if (typeof e === "string") for (let s of e.split(",")) o(s, "=");
    return t;
  }
  function Mi(e, t) {
    return { path: `${e} as a "Name=value,\u2026" string or a ["Name: value", \u2026] list`, use: 'a JSON object such as {"Name": "value"}', effect: `a string or list value will be rejected as malformed and ${t}`, ...Wt.BATCH_2026_09, match: (o) => typeof o === "string" || Array.isArray(o), rewrite: Lm };
  }
  var Um = (e) => ve.z.preprocess((t) => Wt.applyLegacy(e, t), ve.z.record(ve.z.string(), ve.z.string()));
  Ri.kvRecord = Um;
  var Oi = (e) => qt.annotate(ve.z.enum(e).catch(void 0), { openEnum: e }), Hm = (e, t = {}) => (t.min === void 0 ? ve.z.array(Oi(e)) : ve.z.array(Oi(e)).min(t.min)).transform((o) => o.filter((s) => s !== void 0));
  Ri.lenientEnumArray = Hm;
  var Nm = (e) => (t, o) => {
    if (!Array.isArray(t)) return;
    t.forEach((s, n) => {
      if (typeof s !== "string") o(`entry [${String(n)}] dropped \u2014 not a string`);
      else if (!e.includes(s)) o(`entry [${String(n)}] dropped \u2014 not a value this build knows`, "unknown");
    });
  };
  Ri.reportUnknownEnumElements = Nm;
  Ri.CREDENTIALED_URL_MESSAGE = "URL must not contain credentials or a backslash in the authority";
  var Ti = "must not contain what looks like an API key or token in its host, user name or password";
  function Xs(e) {
    let t = et.rawAuthority(e);
    if (t !== void 0 && /[@\\]/.test(t)) return true;
    try {
      let { username: o, password: s } = new URL(e);
      return o !== "" || s !== "";
    } catch (o) {
      return false;
    }
  }
  function zm(e) {
    return Xs(e) || et.credentialFamilyInAuthority(e) !== void 0;
  }
  function Ii(e) {
    return e.refine((t) => !Xs(t), { message: Ri.CREDENTIALED_URL_MESSAGE }).refine((t) => et.credentialFamilyInAuthority(t) === void 0, { message: Ti });
  }
  Ri.QUERY_OR_FRAGMENT_URL_MESSAGE = "must not carry a query string or fragment";
  function Km(e) {
    let t = e.trim();
    try {
      let { search: o, hash: s } = new URL(t);
      return o !== "" || s !== "" || /[?#]$/.test(t);
    } catch (o) {
      return false;
    }
  }
  Ri.urlWithSchemeCoercion = qt.annotate(ve.z.preprocess((e) => typeof e === "string" && e && !/^[a-z][a-z0-9+.-]*:\/\//i.test(e) ? `https://${e}` : e, Ii(ve.z.string().url())), { url: true });
  function Bm(e) {
    let t = e;
    if (typeof t === "string") try {
      t = JSON.parse(t);
    } catch (o) {
      return [];
    }
    if (!t || typeof t !== "object") return [];
    return [t.issuer, t.authorizationUrl, t.tokenUrl].map(et.egressAddress).filter((o) => !!o);
  }
  var Vm = (e) => {
    var t, o;
    return Boolean((t = e.bootstrap) === null || t === void 0 ? void 0 : t.url) && ((o = e.bootstrap) === null || o === void 0 ? void 0 : o.enabled) !== false;
  };
  Ri.hasActiveBootstrap = Vm;
  var $s = Symbol.for("@ant/managed-config/unreadableActivators"), Fm = (e) => {
    var t;
    return (t = e[$s]) !== null && t !== void 0 ? t : [];
  };
  Ri.unreadableActivators = Fm;
  function Gm(e, t) {
    if (t.length > 0) return Object.assign(e, { [$s]: t });
    return delete e[$s], e;
  }
  var Wm = (e) => {
    var t, o, s, n;
    return Ri.hasActiveBootstrap(e) && URL.canParse((o = (t = e.bootstrap) === null || t === void 0 ? void 0 : t.url) !== null && o !== void 0 ? o : "") ? new URL((n = (s = e.bootstrap) === null || s === void 0 ? void 0 : s.url) !== null && n !== void 0 ? n : "").origin : void 0;
  };
  Ri.activeBootstrapOrigin = Wm;
  var qm = (e) => {
    let t = e;
    return qt.offDeviceExecutionTargets().find((o) => t[o] !== void 0);
  };
  Ri.offDeviceClusterOf = qm;
  var jm = (e) => {
    var t;
    let o = Ri.offDeviceClusterOf(e);
    if (o !== void 0) return e[o].credential;
    return (t = e.inference) === null || t === void 0 ? void 0 : t.credential;
  };
  Ri.activeCredentialOf = jm;
  var Ym = (e) => {
    var t;
    return (t = Ri.activeCredentialOf(e)) === null || t === void 0 ? void 0 : t.kind;
  };
  Ri.credentialKindOf = Ym;
  var Zm = (e) => {
    let t = Ri.activeCredentialOf(e);
    return (t === null || t === void 0 ? void 0 : t.kind) === "helper-script" ? t.command : void 0;
  };
  Ri.credentialHelperCommandOf = Zm;
  var $m = (e) => [et.egressAddress(e)].filter((t) => !!t);
  Ri.singleHostEgress = $m;
  Ri.HELPER_SCRIPT_GROUP = jt.msg({ defaultMessage: "Helper script", id: "DnXPcFgmqb" });
  Ri.MODELS_GROUP = jt.msg({ defaultMessage: "Models", id: "blWvagsLt7" });
  Ri.HOST_LIST_PLACEHOLDER = jt.msg({ defaultMessage: "*.corp.example.com", id: "UkBVDCUMyP" });
  var Xm = (e) => Wt.applyLegacy(Mi("key", "nothing is applied"), e);
  Ri._test = { coerceKvRecord: Xm, CREDENTIAL_AS_HOST_MESSAGE: Ti };
  Ri.SHA256_HEX = /^[0-9a-fA-F]{64}$/;
  var Pi = String.raw`(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)`;
  Ri.DESKTOP_VERSION_RE = new RegExp(`^${Pi}$`);
  var Jm = () => ve.z.string().trim().regex(new RegExp(`^[vV]?${Pi}$`), "Must be a version in X.Y.Z form, such as 1.2581.0").transform((e) => e.replace(/^[vV]/, ""));
  Ri.desktopVersionString = Jm;
});
var xCr = (0, import_chunk_w1d7ygsk.V)(function(zi) {
  Object.defineProperty(zi, "__esModule", { value: true });
  zi.credentialHeaderEntry = Hi;
  zi.firstCredentialHeader = Ni;
  zi.credentialHeadersWarn = xy;
  var Ho = vj(), Sy = /^(?:authorization|proxy-authorization|cookie|set-cookie|token|secret|password|api-key|x-api-key|x-auth-token|x-amz-security-token|x-goog-api-key|ocp-apim-subscription-key|x-subscription-token|private-token|x-functions-key|x-honeycomb-team)(?:-?v?\d+)?$|(?:^|-)(?:tokens?|secrets?|password|passwd|signature|credentials?|authorization|(?:api|secret|access|private|signing|auth|license|master|encryption|session|client)-?(?:keys?|secrets?))(?:-?v?\d+)?$|(?:token|apikey|secretkey|accesskey|privatekey|signingkey|licensekey|sessionkey|clientsecret|password|passwd|credentials?)(?:-?v?\d+)?$/, Ey = /[_.\s]+/g, Ay = /^\s*(?:bearer|basic|token|digest)\s+\S/i, Oy = /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/, My = /\b(?:AKIA|ASIA)[A-Z0-9]{16}\b/, Ty = /\b(?:bearer|basic)\s+(?=[A-Za-z._~+/=-]*\d)[A-Za-z0-9._~+/=-]{16,}/i, Iy = /\b(?:sk-[A-Za-z0-9_-]{20,}|GOCSPX-[A-Za-z0-9_-]{20,}|(?:ghp_[0-9a-zA-Z]{36}|gh[ours]_[0-9a-zA-Z]{36}|github_pat_\w{82})\b|glpat-[\w-]{20}(?![\w-])|AIza[\w-]{35}(?![\w-]))/;
  function Py(e) {
    let t = [e];
    for (let o = 0; o < 2 && t[t.length - 1].includes("%"); o++) try {
      let s = decodeURIComponent(t[t.length - 1]);
      if (s === t[t.length - 1]) break;
      t.push(s);
    } catch (s) {
      break;
    }
    return t.flatMap((o) => [o, o.replace(/\+/g, " ")]);
  }
  function Hi(e, t) {
    if (Sy.test(e.trim().replace(Ey, "-").toLowerCase())) return "name";
    return Py(t).some((s) => Ay.test(s) || Oy.test(s) || My.test(s) || Ty.test(s) || Iy.test(s)) ? "value" : void 0;
  }
  function Ni(e) {
    if (!e || typeof e !== "object" || Array.isArray(e)) return;
    for (let [t, o] of Object.entries(e)) if (t.trim() && typeof o === "string" && Hi(t, o) !== void 0) return t;
    return;
  }
  var Ry = Ho.msg({ defaultMessage: "Header \u201C{name}\u201D looks like a credential. Use the headers helper script so the secret isn\u2019t stored in the config file.", id: "HdrCredWarnHeadersHelper" }), Dy = Ho.msg({ defaultMessage: "Header \u201C{name}\u201D looks like a credential. Use the credential helper script (it can print headers) so the secret isn\u2019t stored in the config file.", id: "HdrCredWarnCredentialHelper" });
  function xy(e, t, o) {
    let s = Ni(e);
    if (s === void 0) return null;
    return t.formatMessage(o === "headersHelper" ? Ry : Dy, { name: s });
  }
});
var JEo = (0, import_chunk_w1d7ygsk.V)(function(Ki) {
  Object.defineProperty(Ki, "__esModule", { value: true });
  Ki.normalizeMcpServerName = No;
  Ki.normalizeMcpUrl = Qs;
  Ki.mcpServerNameKey = en;
  Ki.matchMcpServerIdentity = Ny;
  function No(e) {
    return e.replace(/[^a-zA-Z0-9_-]/g, "_");
  }
  function Qs(e) {
    try {
      let t = new URL(e);
      return t.pathname = t.pathname.replace(/\/$/, "") || "/", t.href;
    } catch (t) {
      return e;
    }
  }
  function en(e) {
    return No(e).toLowerCase();
  }
  function Ny(e, t, o = () => true) {
    var s, n;
    if (e.url !== void 0) {
      let b = Qs(e.url), S = t.find((M) => M.url && Qs(M.url) === b);
      if (S) return { match: S, by: "url" };
    }
    let i = en(e.name), u = t.filter((b) => en(b.name) === i && o(b)), p = No(e.name), y = (n = (s = u.find((b) => b.name === e.name)) !== null && s !== void 0 ? s : u.find((b) => No(b.name) === p)) !== null && n !== void 0 ? n : u[0];
    return y ? { match: y, by: "name", named: u } : void 0;
  }
});
var Zvt = (0, import_chunk_w1d7ygsk.V)(function(Gi) {
  Object.defineProperty(Gi, "__esModule", { value: true });
  Gi.memberPath = Gi.namesRefusedMembers = Gi.reportableName = Gi.NOT_RECOGNIZED = Gi.NOT_ACCEPTED = Gi.isPlainObject = Gi.coerceJsonString = void 0;
  Gi.normalizeWinPathJSON = Bi;
  Gi.reportUnread = Yy;
  var D = Vk();
  function Bi(e) {
    return e.replace(/\\(?!["\\/bfnrtu])/g, "\\\\");
  }
  var Fy = (e) => {
    if (typeof e !== "string") return e;
    try {
      return JSON.parse(e);
    } catch (t) {
      try {
        return JSON.parse(Bi(e));
      } catch (o) {
        return e;
      }
    }
  };
  Gi.coerceJsonString = Fy;
  var Gy = (e) => e !== null && typeof e === "object" && !Array.isArray(e);
  Gi.isPlainObject = Gy;
  Gi.NOT_ACCEPTED = "dropped: not an accepted value \u2014 fix the spelling, or upgrade if this value was added in a newer Claude Desktop release";
  Gi.NOT_RECOGNIZED = "ignored: not a recognized sub-key \u2014 check the spelling, or upgrade if it was added in a newer Claude Desktop release";
  var Vi = /^[\w$ .:/@+-]{0,48}$/, Wy = (e) => Vi.test(e) ? e : `<${e.length}-character name>`;
  Gi.reportableName = Wy;
  var qy = (e, t, o = {}) => (s) => {
    var n, i;
    let u = Object.keys(e), p = u.length > 1 ? `${u.slice(0, -1).join(", ")} and ${(n = u.at(-1)) !== null && n !== void 0 ? n : ""}` : (i = u[0]) !== null && i !== void 0 ? i : "no member", y = s.issues.flatMap((b) => {
      var S, M;
      return b.code === "unrecognized_keys" && ((M = (S = b.path) === null || S === void 0 ? void 0 : S.length) !== null && M !== void 0 ? M : 0) === 0 ? b.keys : [];
    });
    for (let b of y) s.issues.push({ code: "custom", input: s.value, path: [Gi.reportableName(b)], message: Object.hasOwn(o, b) ? o[b] : `is not a member of ${t} (${t} has ${p})` });
  };
  Gi.namesRefusedMembers = qy;
  var jy = (e, t) => !Vi.test(t) ? `${e}[${Gi.reportableName(t)}]` : /^[A-Za-z_$][\w$]*$/.test(t) ? e ? `${e}.${t}` : t : `${e}[${JSON.stringify(t)}]`;
  Gi.memberPath = jy;
  var gt = (e) => e._zod.def;
  function Yy(e, t, o, s, n = {}) {
    Co(e, t, o, s, n);
  }
  function tn(e, t, o, s, n, i = false) {
    let u = t, p = o;
    for (; ; ) {
      let y = D.pipeSidesOf(u);
      if (y) {
        if (D.zodKind(y.in) === D.ZodKind.ZodTransform) {
          try {
            let S = gt(y.in).transform;
            p = S(p, { addIssue: () => {
              return;
            }, issues: [], value: p });
          } catch (S) {
            return;
          }
          u = y.out;
        } else u = y.in;
        continue;
      }
      if (D.zodKind(u) === D.ZodKind.ZodCatch) {
        let S = gt(u).innerType, M = i && typeof p === "string" && p.trim() === "";
        if (n.values && s && !M && !S.safeParse(p).success) {
          let C = D.zodKind(Zy(S));
          s(`${e} ${Gi.NOT_ACCEPTED}`, C === D.ZodKind.ZodEnum || C === D.ZodKind.ZodLiteral ? "unknown" : "drop", e);
          return;
        }
        u = S;
        continue;
      }
      let b = D.unwrapStep(u);
      if (b === u) return { node: u, written: p };
      u = b;
    }
  }
  function Zy(e) {
    let t = e;
    for (; ; ) {
      let o = D.pipeSidesOf(t), s = o ? D.zodKind(o.in) === D.ZodKind.ZodTransform ? o.out : o.in : D.zodKind(t) === D.ZodKind.ZodCatch ? gt(t).innerType : D.unwrapStep(t);
      if (s === t) return t;
      t = s;
    }
  }
  function $y(e, t, o, s) {
    let n = D.unionOptionsOf(t).find((u) => u.safeParse(o).success);
    if (n !== void 0 || !Gi.isPlainObject(o)) return n;
    let i = Fi(e, t, o, s).sort((u, p) => p.matched - u.matched);
    return i.length === 1 || i.length > 1 && i[0].matched > i[1].matched ? i[0].arm : void 0;
  }
  function Fi(e, t, o, s) {
    return D.unionOptionsOf(t).flatMap((n) => {
      var i;
      let u = tn(e, n, o, void 0, s), p = D.zodKind(u === null || u === void 0 ? void 0 : u.node);
      if (u === void 0) return [];
      if (p === D.ZodKind.ZodUnion || p === D.ZodKind.ZodDiscriminatedUnion) return Fi(e, u.node, o, s);
      if (p !== D.ZodKind.ZodObject) return [];
      let y = gt(u.node).shape, b = u.written, S = 0;
      for (let [M, C] of Object.entries(y)) {
        let x = (i = tn(e, C, b[M], void 0, s)) === null || i === void 0 ? void 0 : i.node, W = D.zodKind(x) === D.ZodKind.ZodLiteral ? gt(x).values : D.zodKind(x) === D.ZodKind.ZodEnum ? Object.values(gt(x).entries) : void 0;
        if (W === void 0) continue;
        if (b[M] === void 0) {
          if (!C.safeParse(void 0).success) return [];
        } else if (W.includes(b[M])) S++;
        else return [];
      }
      return [{ arm: n, matched: S }];
    });
  }
  function Co(e, t, o, s, n, i = false) {
    let u = tn(e, t, o, s, n, i);
    if (u === void 0) return;
    let { node: p, written: y } = u, b = D.zodKind(p);
    if (b === D.ZodKind.ZodUnion || b === D.ZodKind.ZodDiscriminatedUnion) {
      let C = $y(e, p, y, n);
      if (C !== void 0) Co(e, C, y, s, n);
      return;
    }
    if (b === D.ZodKind.ZodObject) {
      if (!Gi.isPlainObject(y)) return;
      let C = gt(p).shape, x = gt(p).catchall, W = x !== void 0 && D.zodKind(x) !== D.ZodKind.ZodNever;
      for (let [q, X] of Object.entries(y)) {
        let ae = Object.hasOwn(C, q) ? C[q] : void 0;
        if (ae === void 0) {
          if (!W && X !== void 0) {
            let te = Gi.memberPath(e, q);
            s(`${te} ${Gi.NOT_RECOGNIZED}`, "unknown", te);
          }
        } else if (X !== void 0 && X !== null && !(n.stopAtKeys && D.fieldMetaForNode(ae))) Co(Gi.memberPath(e, q), ae, X, s, n, true);
      }
      return;
    }
    let S = D.arrayElementOf(p);
    if (S !== void 0) {
      if (Array.isArray(y)) y.forEach((C, x) => {
        if (C !== void 0 && C !== null) Co(`${e}[${x}]`, S, C, s, n);
      });
      return;
    }
    let M = D.recordValueTypeOf(p);
    if (M !== void 0 && Gi.isPlainObject(y)) {
      for (let [C, x] of Object.entries(y)) if (x !== void 0 && x !== null) Co(Gi.memberPath(e, C), M, x, s, n);
    }
  }
});
var RCr = (0, import_chunk_w1d7ygsk.V)(function(Zi) {
  Object.defineProperty(Zi, "__esModule", { value: true });
  Zi.TOOL_POLICY_EDITOR_VALUES = Zi.TOOL_POLICY_VALUES = void 0;
  Zi.strictestToolPolicy = nn;
  Zi.isApprovalRequiredToolPolicy = tb;
  Zi.toolPolicyKeyGlobMatch = Ko;
  Zi.pluginMcpRulePrefix = Yi;
  Zi.managedToolPatternMatches = sb;
  Zi.lookupMcpToolPolicy = sn;
  Zi.strictestOfToolPolicies = nb;
  Zi.TOOL_POLICY_VALUES = ["allow", "ask", "ask-session", "blocked"];
  Zi.TOOL_POLICY_EDITOR_VALUES = ["allow", "ask", "blocked"];
  var ji = { blocked: 3, ask: 2, "ask-session": 1, allow: 0 };
  function nn(e, t) {
    if (!e) return t;
    if (!t) return e;
    return ji[e] >= ji[t] ? e : t;
  }
  function tb(e) {
    return e === "ask" || e === "ask-session";
  }
  function Ko(e, t) {
    let o = 0, s = 0, n = -1, i = -1;
    while (s < t.length) if (o < e.length && e[o] === "*") n = o, i = s, o++;
    else if (o < e.length && e[o] === t[s]) o++, s++;
    else if (n >= 0) i++, o = n + 1, s = i;
    else return false;
    while (o < e.length && e[o] === "*") o++;
    return o === e.length;
  }
  function Yi(e) {
    return `mcp__plugin_${e}_`;
  }
  var ob = Yi("*");
  function sb(e, t) {
    return e.startsWith(ob) ? Ko(e.toLowerCase(), t.toLowerCase()) : Ko(e, t);
  }
  function sn(e, t) {
    if (!e) return;
    if (Object.hasOwn(e, t)) return e[t];
    let o;
    for (let [s, n] of Object.entries(e)) if (s.includes("*") && Ko(s, t)) o = nn(o, n);
    return o;
  }
  function nb(e, t) {
    if (!e || !t) return e !== null && e !== void 0 ? e : t;
    let o = /* @__PURE__ */ Object.create(null);
    for (let s of /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)])) {
      let n = sn(e, s), i = sn(t, s), u = nn(n, i), p = s.includes("*") && u === "allow" && (n === void 0 || i === void 0);
      if (u && !p) o[s] = u;
    }
    return o;
  }
});
var NZ = (0, import_chunk_w1d7ygsk.V)(function(st) {
  Object.defineProperty(st, "__esModule", { value: true });
  st.MCP_ENTRY_SOURCE = st.MCP_ENTRY_AUTHORITY_HOST = st.MCP_ENTRY_TRANSPORT_BUILTIN = st.MCP_ENTRY_SCOPES_LIST = st.M365_DEFAULT_DELEGATED_SCOPES = st.M365_ADMIN_CONSENT_SCOPES = st.M365_ALWAYS_REQUESTED_SCOPES = st.M365_WRITE_DELEGATED_SCOPES = st.M365_GRANTABLE_DELEGATED_SCOPES = st.AZURE_CLOUD_HOSTS = st.AZURE_CLOUDS = st.WEB_SEARCH_PROVIDER_HOSTS = st.WEB_SEARCH_PROVIDERS = st.BUILTIN_MCP_SERVERS = st.safeHelperArg = st.vendorId = st.configuredHostPath = st.safeWindowsHelperPath = st.safeHelperPath = st.HELPER_PATH_UNSAFE_MESSAGE = st.RemoteDirectMcpServerConfig = st.McpOauth = st.HostedOauth = st.ByoOauth = st.PLUGIN_MCP_TOOL_POLICY_CHANNEL_NOTE = st.MCP_TRANSPORT_POLICY_ONLY = st.ORG_PLUGIN_SETTINGS_PARSE_FAILED = st.OrgPluginSettings = st.ORG_PLUGIN_PERMISSION_ASK_SESSION = st.ORG_PLUGIN_SETTINGS_RECORD_FORM = st.TOOL_POLICY_LABEL = st.TOOL_POLICY_OPTION_LABELS = st.LenientToolPolicy = st.ToolPolicySchema = st.CALLBACK_HOST_OPTIONS = st.audienceIdentifier = st.httpsUrl = st.CLOUD_METADATA_HOSTS = st.CLOUD_METADATA_IPV6 = st.CLOUD_METADATA_IPV4 = st.CLOUD_METADATA_HOST_NAMES = st.LOOPBACK_HOSTS = st.HELPER_ARG_UNSAFE_MESSAGE = st.hasNoHelperBreakoutChars = st.toolPolicyKeyGlobMatch = st.TOOL_POLICY_VALUES = st.TOOL_POLICY_EDITOR_VALUES = st.strictestToolPolicy = st.lookupMcpToolPolicy = st.isApprovalRequiredToolPolicy = void 0;
  st.GatewayOidc = st.BootstrapFetchOidc = st.BootstrapOidc = st.ManagedMcpServers = st.MANAGED_MCP_SERVERS_PARSE_FAILED = st.GITHUB_IRREVERSIBLE_WRITE_TOOLS = st.M365_IRREVERSIBLE_WRITE_TOOLS = st.BUILTIN_DEFAULT_TOOL_POLICY = st.DirectMcpServerConfig = st.MANAGED_MCP_SERVERS_DEPRECATIONS = st.MCP_ENTRY_TOOL_POLICY_ASK_SESSION = st.MCP_ENTRY_TRANSPORT_MISSING = st.MCP_ENTRY_OAUTH_SCOPES_LIST = st.MCP_ENTRY_OAUTH_SCALAR = void 0;
  st.isLoopbackHost = ia;
  st.isLinkLocalOrMetadataHost = mb;
  st.urlSchema = $t;
  st.isOrgPluginSettingsParseFailed = cn;
  st.orgPluginSettingsToPolicyMap = pa;
  st.orgPluginSettingsFromPolicyMap = Cb;
  st.resolveByoAsSelection = _a;
  st.byoAsSelectionUrls = wa;
  st.oauthAsSelectionUrls = Tb;
  st.isSafeMcpCommand = Oa;
  st.isSafeHelperPath = hn;
  st.foldMcpEntryLegacy = bn;
  st.isConnectableMcpEntry = Pa;
  st.connectableMcpServers = Wb;
  st.isBuiltinMcpEntry = bt;
  st.hostsForBuiltinMcpEntry = qb;
  st.findWebSearchBuiltin = jb;
  st.isBuiltinMcpItem = Yb;
  st.resolveEffectiveMcpToolPolicy = jo;
  st.builtinWriteToolCoverageGaps = Da;
  st.unlistedBuiltinWriteTools = Zb;
  st.isPluginMcpToolPolicyUnreadable = $b;
  st.resolvePluginMcpToolPolicy = La;
  st.resolveMcpToolPolicies = Ua;
  st.resolvePluginMcpToolPoliciesByName = e0;
  st.resolveManagedToolPolicy = t0;
  st.adaptPluginMcp = o0;
  st.hasOAuthConfig = n0;
  st.wantsOAuthProvider = r0;
  st.relevantMcpEntryIssues = Ha;
  st.checkManagedMcpServersForDrops = d0;
  st.firstDroppedOrgPluginTool = u0;
  st.checkOrgPluginSettingsForDrops = h0;
  st.resolveOidcEndpointSelection = f0;
  st.oidcEndpointSelectionUrls = g0;
  st.scopesIncludeResourceScope = v0;
  var c = require("/$bunfs/root/chunk-fv8aegzx.js"), Vo = (0, import_chunk_10dpa5sx.OCr)(), K = Lwe(), sa = dX(), a = Vk(), Ve = T4(), r = vj(), ot = JEo(), na = Zvt(), oe = RCr(), Zt = RCr();
  Object.defineProperty(st, "isApprovalRequiredToolPolicy", { enumerable: true, get: function() {
    return Zt.isApprovalRequiredToolPolicy;
  } });
  Object.defineProperty(st, "lookupMcpToolPolicy", { enumerable: true, get: function() {
    return Zt.lookupMcpToolPolicy;
  } });
  Object.defineProperty(st, "strictestToolPolicy", { enumerable: true, get: function() {
    return Zt.strictestToolPolicy;
  } });
  Object.defineProperty(st, "TOOL_POLICY_EDITOR_VALUES", { enumerable: true, get: function() {
    return Zt.TOOL_POLICY_EDITOR_VALUES;
  } });
  Object.defineProperty(st, "TOOL_POLICY_VALUES", { enumerable: true, get: function() {
    return Zt.TOOL_POLICY_VALUES;
  } });
  Object.defineProperty(st, "toolPolicyKeyGlobMatch", { enumerable: true, get: function() {
    return Zt.toolPolicyKeyGlobMatch;
  } });
  var ra = (0, import_chunk_10dpa5sx.OCr)();
  Object.defineProperty(st, "hasNoHelperBreakoutChars", { enumerable: true, get: function() {
    return ra.hasNoHelperBreakoutChars;
  } });
  Object.defineProperty(st, "HELPER_ARG_UNSAFE_MESSAGE", { enumerable: true, get: function() {
    return ra.HELPER_ARG_UNSAFE_MESSAGE;
  } });
  st.LOOPBACK_HOSTS = /* @__PURE__ */ new Set(["127.0.0.1", "localhost", "[::1]"]);
  function ia(e) {
    let t = e.toLowerCase().replace(/\.+$/, "");
    if (t === "localhost" || t.endsWith(".localhost")) return true;
    let o = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.exec(t);
    if (o) return o[1] === "127" || o[1] === "0";
    if (t.startsWith("[") && t.endsWith("]")) {
      let s = t.slice(1, -1);
      if (s === "::1" || s === "::") return true;
      let n = /^::(?:ffff:)?([0-9a-f]{1,4}):([0-9a-f]{1,4})$/.exec(s);
      if (n) {
        let i = parseInt(n[1], 16) >> 8;
        return i === 127 || i === 0;
      }
    }
    return false;
  }
  st.CLOUD_METADATA_HOST_NAMES = ["metadata.google.internal", "metadata.goog", "metadata", "instance-data", "instance-data.ec2.internal"];
  st.CLOUD_METADATA_IPV4 = ["169.254.169.254", "169.254.170.2", "169.254.170.23", "169.254.0.23", "169.254.42.42", "100.100.100.200", "100.96.0.96", "100.80.80.80", "168.63.129.16", "192.0.0.192"];
  st.CLOUD_METADATA_IPV6 = ["[fd00:ec2::254]", "[fd00:ec2::23]", "[fd00:a9fe:a9fe::1]", "[fe80::a9fe:a9fe]"];
  function hb(e) {
    let [t, o, s, n] = e.split(".").map(Number);
    return `[::ffff:${(t << 8 | o).toString(16)}:${(s << 8 | n).toString(16)}]`;
  }
  st.CLOUD_METADATA_HOSTS = /* @__PURE__ */ new Set([...st.CLOUD_METADATA_HOST_NAMES, ...st.CLOUD_METADATA_IPV4, ...st.CLOUD_METADATA_IPV4.map(hb), ...st.CLOUD_METADATA_IPV6]);
  var fb = new Set(st.CLOUD_METADATA_HOST_NAMES), Xi = new Set(st.CLOUD_METADATA_IPV4), gb = new Set(st.CLOUD_METADATA_IPV6);
  function mb(e) {
    var t, o;
    let s = e.toLowerCase().replace(/\.+$/, "");
    if (fb.has(s) || s.startsWith("instance-data.") && s.endsWith(".compute.internal")) return true;
    let n = /^(\d+)\.(\d+)\.\d+\.\d+$/.exec(s);
    if (n) return n[1] === "169" && n[2] === "254" || Xi.has(s);
    if (!(s.startsWith("[") && s.endsWith("]"))) return false;
    if (gb.has(s)) return true;
    let i = s.slice(1, -1);
    if (/^fe[89ab][0-9a-f]:/.test(i) || i.startsWith("fd00:ec2:")) return true;
    if (i.startsWith("64:ff9b:") || i.startsWith("::ffff:0:") || i.startsWith("2001:0:") || i.startsWith("2001::")) return true;
    let u = (t = /^2002:([0-9a-f]{1,4}):([0-9a-f]{1,4})(?::|$)/.exec(i)) !== null && t !== void 0 ? t : /^2002:([0-9a-f]{1,4})::/.exec(i), p = u !== null && u !== void 0 ? u : /^::(?:ffff:)?([0-9a-f]{1,4}):([0-9a-f]{1,4})$/.exec(i);
    if (p) {
      let y = parseInt(p[1], 16), b = parseInt((o = p[2]) !== null && o !== void 0 ? o : "0", 16), S = `${y >> 8}.${y & 255}.${b >> 8}.${b & 255}`;
      return y >> 8 === 169 && (y & 255) === 254 || Xi.has(S);
    }
    return false;
  }
  function $t(e = {}) {
    return a.annotate(c.z.preprocess((t) => {
      if (typeof t !== "string") return t;
      let o = t.trim();
      return o && !e.allowHttp && !/^[a-z][a-z0-9+.-]*:\/\//i.test(o) ? `https://${o}` : o;
    }, Ve.refuseCredentials(c.z.string().trim().url().refine((t) => {
      try {
        let { protocol: o, hostname: s } = new URL(t);
        if (o === "https:") return !e.rejectLoopback || !ia(s);
        return o === "http:" && (!!e.allowHttp || !!e.allowLoopbackHttp && st.LOOPBACK_HOSTS.has(s));
      } catch (o) {
        return false;
      }
    }, { message: e.allowHttp ? "must be an http:// or https:// URL" : e.rejectLoopback ? "must use https with a non-loopback host" : e.allowLoopbackHttp ? "must use https (or http on loopback)" : "must use https" })).refine((t) => !e.rejectQueryAndFragment || !Ve.hasQueryOrFragment(t), { message: Ve.QUERY_OR_FRAGMENT_URL_MESSAGE })), { url: true });
  }
  st.httpsUrl = $t({ allowLoopbackHttp: true });
  st.audienceIdentifier = c.z.preprocess((e) => {
    let t = st.httpsUrl.safeParse(e);
    return t.success ? t.data : typeof e === "string" ? e.trim() : e;
  }, c.z.string().min(1).superRefine((e, t) => {
    let o = st.httpsUrl.safeParse(e);
    if (o.success) return;
    let s = URL.canParse(e) ? new URL(e) : void 0, n = URL.canParse(`https://${e}`);
    if (s && !s.host && !n && !/\s/.test(e)) return;
    let i = /\s/.test(e) ? ["must be one value with no spaces"] : s || n ? o.error.issues.map((u) => u.message) : ["must be an https URL, a host name, or a URI such as urn:\u2026"];
    for (let u of i) t.addIssue({ code: "custom", message: u });
  }));
  st.CALLBACK_HOST_OPTIONS = ["127.0.0.1", "localhost"];
  var yb = new Set(oe.TOOL_POLICY_EDITOR_VALUES);
  function Ao(e) {
    return yb.has(e);
  }
  var Ji = "not an accepted value (expected allow, ask or blocked)", bb = c.z.enum(oe.TOOL_POLICY_VALUES, { error: () => Ji }).refine((e) => Ao(e), { message: Ji });
  st.ToolPolicySchema = c.z.record(c.z.string(), bb);
  var vb = c.z.preprocess((e) => e === void 0 || Ao(e) ? e : "blocked", c.z.enum(oe.TOOL_POLICY_VALUES)), aa = (e) => Object.fromEntries(Object.entries(e).map(([t, o]) => [t, o === "ask-session" ? "ask" : o])), la = (e) => He(e) && Object.values(e).some((t) => t === "ask-session");
  function He(e) {
    return typeof e === "object" && e !== null && !Array.isArray(e);
  }
  st.LenientToolPolicy = c.z.preprocess((e) => {
    if (!e || typeof e !== "object") return e;
    return Object.fromEntries(Object.entries(e).map(([t, o]) => [t, Ao(o) ? o : "blocked"]));
  }, st.ToolPolicySchema);
  st.TOOL_POLICY_OPTION_LABELS = { allow: r.msg({ defaultMessage: "Always allow", id: "yj3vT8BAIa" }), ask: r.msg({ defaultMessage: "Ask each time", id: "IeOHqi8Fbf" }), "ask-session": r.msg({ defaultMessage: "Ask once per session", id: "MBqBb4XNI5" }), blocked: r.msg({ defaultMessage: "Blocked", id: "qqZPUhaHMm" }) };
  st.TOOL_POLICY_LABEL = r.msg({ defaultMessage: "Tool policy", id: "uSQ/bLKBIp" });
  var _b = c.z.object({ toolPolicy: st.LenientToolPolicy.optional() }), da = c.z.object({ mcpServers: c.z.record(c.z.string(), _b.catch({})).optional() });
  function ca(e) {
    var t;
    if (Array.isArray(e)) return e;
    let o = da.safeParse(e);
    if (!o.success) return e;
    return Object.entries((t = o.data.mcpServers) !== null && t !== void 0 ? t : {}).map(([s, n]) => {
      var i;
      return { serverName: s, tools: Object.entries((i = n.toolPolicy) !== null && i !== void 0 ? i : {}).map(([u, p]) => ({ toolName: u, permission: p })) };
    });
  }
  var dn = c.z.object({ toolName: a.subfield(c.z.string().min(1), { label: r.msg({ defaultMessage: "Tool", id: "FWLX0PGi80" }), isPrimaryKey: true, placeholder: r.msg({ defaultMessage: "tool name", id: "rhPs8UtdHq" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "MCP tool name as the server reports it.", id: "+Vug/ETTGA" })) } }), permission: a.subfield(vb, { label: r.msg({ defaultMessage: "Permission", id: "y4JnQ5QsBK" }), support: { values: { "ask-session": { availableInVersion: "1.21459.0" } } }, optionLabels: st.TOOL_POLICY_OPTION_LABELS, optionValues: oe.TOOL_POLICY_EDITOR_VALUES, description: { short: a.shortDescription(r.msg({ defaultMessage: "Approval state locked for this tool. Unlisted tools stay user-controlled.", id: "Kp2V1d9NfA" })) } }) }), ua = c.z.object({ serverName: a.subfield(c.z.string().min(1), { label: r.msg({ defaultMessage: "Server name", id: "SsD9TTwUkB" }), support: { availableInVersion: "1.15200.0" }, isPrimaryKey: true, placeholder: r.msg({ defaultMessage: "server-name", id: "EvwX+qKToR" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Name of the plugin-delivered MCP server this policy applies to.", id: "20oPR1PTqH" })) } }), tools: a.subfield(a.annotate(c.z.array(dn.nullable().catch(null)), { maxItems: 200 }).transform((e) => e.filter((t) => t !== null)).default([]), { label: st.TOOL_POLICY_LABEL, support: { availableInVersion: "1.15200.0" }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Per-tool approval locks for this server.", id: "6haUENrnRB" })) } }) });
  st.ORG_PLUGIN_SETTINGS_RECORD_FORM = { path: 'orgPluginSettings as a {"mcpServers": {\u2026}} record', use: 'the array form [{"serverName": "\u2026", "tools": [{"toolName": "\u2026", "permission": "\u2026"}]}] (read by desktop 1.15200.0 and later; older desktops ignore the array and enforce no tool blocks)', effect: "the record will be rejected as malformed and the key will fail closed: every plugin-delivered MCP tool will be blocked until the value is rewritten", ...K.BATCH_2026_09, match: (e) => typeof e === "object" && e !== null && !Array.isArray(e), rewrite: ca };
  var wb = (e) => He(e) && He(e.mcpServers) ? Object.values(e.mcpServers).flatMap((t) => He(t) && He(t.toolPolicy) ? [t.toolPolicy] : []) : [];
  st.ORG_PLUGIN_PERMISSION_ASK_SESSION = { path: 'orgPluginSettings[].tools[].permission: "ask-session"', use: '"ask"', effect: 'that tool will be treated as "blocked", like any unrecognized permission', ...K.BATCH_2026_09, match: (e) => Array.isArray(e) && e.some((t) => He(t) && Array.isArray(t.tools) && t.tools.some((o) => He(o) && o.permission === "ask-session")) || wb(e).some(la), rewrite: (e) => {
    if (Array.isArray(e)) return e.map((o) => He(o) && Array.isArray(o.tools) ? { ...o, tools: o.tools.map((s) => He(s) && s.permission === "ask-session" ? { ...s, permission: "ask" } : s) } : o);
    let t = e;
    return { ...t, mcpServers: Object.fromEntries(Object.entries(t.mcpServers).map(([o, s]) => [o, He(s) && He(s.toolPolicy) ? { ...s, toolPolicy: aa(s.toolPolicy) } : s])) };
  } };
  function kb(e) {
    return K.applyLegacy(st.ORG_PLUGIN_SETTINGS_RECORD_FORM, K.applyLegacy(st.ORG_PLUGIN_PERMISSION_ASK_SESSION, e));
  }
  st.OrgPluginSettings = c.z.preprocess(kb, a.annotate(c.z.array(ua.nullable().catch(null)), { maxItems: 100 }).transform((e) => e.filter((t) => t !== null)));
  st.ORG_PLUGIN_SETTINGS_PARSE_FAILED = [];
  function cn(e) {
    return e === st.ORG_PLUGIN_SETTINGS_PARSE_FAILED;
  }
  function pa(e) {
    var t;
    let o = /* @__PURE__ */ Object.create(null), s = Array.isArray(e) ? e : ca(e);
    if (!Array.isArray(s)) return o;
    for (let n of s) {
      let i = Object.hasOwn(o, n.serverName) ? o[n.serverName] : /* @__PURE__ */ Object.create(null);
      for (let u of n.tools) i[u.toolName] = (t = oe.strictestToolPolicy(i[u.toolName], u.permission)) !== null && t !== void 0 ? t : u.permission;
      o[n.serverName] = i;
    }
    return o;
  }
  function Cb(e) {
    return Object.entries(e).map(([t, o]) => ({ serverName: t, tools: Object.entries(o).map(([s, n]) => ({ toolName: s, permission: n })) }));
  }
  st.MCP_TRANSPORT_POLICY_ONLY = "policy-only";
  var ut = (e) => e.server !== void 0, Rt = (e) => ut(e) && e.server === "microsoft365", mt = (e) => ut(e) && e.server === "github", Yt = (e) => e.transport === "stdio", Sb = (e) => e.transport === st.MCP_TRANSPORT_POLICY_ONLY, xt = (e) => !Yt(e) && !ut(e) && !Sb(e), un = a.shortDescription(r.msg({ defaultMessage: "How the app connects: Streamable HTTP, legacy SSE, or a local command (stdio). policy-only connects to nothing; it only sets a plugin server\u2019s tool policy.", id: "McpTransportHint2" })), Eb = a.longDescription("An entry with `transport: \"policy-only\"` is not a server: it sets tool permissions for an MCP server that an installed plugin provides, and nothing else. Set `name` to the server's name as the plugin declares it (matched case-insensitively) and `toolPolicy` to the permissions. The plugin keeps launching or connecting to its own server; the app never connects to, launches or lists anything for the entry, so it takes no `url`, `command`, `oauth` or other connection settings (an entry that sets one is rejected). It takes precedence over `orgPluginSettings` for that server in chat, Cowork and Code sessions alike; with no `toolPolicy` the server is left unrestricted. An entry whose name matches no installed plugin server does nothing.\n\nDesktop versions that predate `policy-only` do not recognise it: they drop the entry (listed under Configuration parse errors in the diagnostics report) and apply `orgPluginSettings` to that server instead. If every entry in the list is `policy-only`, those versions cannot read `managedMcpServers` at all: they report a parse error for it and, until they are updated, leave MCP servers that users added themselves, or that a project's `.mcp.json` declares, out of Code sessions. While older versions are still in use, keep the same permissions in `orgPluginSettings` too, and do not deploy a list made only of `policy-only` entries until every desktop has updated."), ha = a.shortDescription(r.msg({ defaultMessage: "Static headers sent on every request \u2014 routing and tenant headers only. No credentials here; use the headers helper script for tokens and rotating values.", id: "McpHeadersHint2" })), fa = a.shortDescription(r.msg({ defaultMessage: "How long the helper\u2019s headers are reused before it runs again, in seconds. Defaults to 300.", id: "HtyK0/oE2w" })), ga = a.shortDescription(r.msg({ defaultMessage: "Seconds before the TTL expires at which the helper re-runs mid-session. Defaults to 60. Keep it larger than the helper\u2019s typical runtime.", id: "zq1cbZBApQ" })), Wo = a.subfield(c.z.string().min(1), { label: r.msg({ defaultMessage: "Name", id: "HAlOn1ZsuY" }), isPrimaryKey: true, placeholder: r.msg({ defaultMessage: "github", id: "Zejj2Gw5fy" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Unique name for this server. Shown to users and used to key tool policy and sign-in state.", id: "40I9DtVbWB" })) } });
  st.PLUGIN_MCP_TOOL_POLICY_CHANNEL_NOTE = `For a plugin server that Claude Code launches or connects to itself (a marketplace plugin's), the permissions travel on Claude Code's managed-settings channel: another Claude Code [managed-settings source](${Ve.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings) on the device replaces them unless that source sets \`parentSettingsBehavior\` to \`"merge"\`. \`blocked\` on a server the app connects to itself holds either way.`;
  var Xt = a.subfield(st.ToolPolicySchema.optional(), { label: st.TOOL_POLICY_LABEL, support: { values: { "ask-session": { availableInVersion: "1.21459.0" } } }, optionValues: oe.TOOL_POLICY_EDITOR_VALUES, placeholder: r.msg({ defaultMessage: "toolName", id: "iFhBHMeCjp" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Lock the approval state for specific tools. Unlisted tools stay user-controlled.", id: "bS7WElxrrh" }), { docsOnly: false }), long: a.longDescription("Also governs the same server when an installed plugin provides it. A plugin's MCP server matches an entry by URL, else by name (case-insensitive; a plugin server that runs locally matches by name only), and then follows that entry's `toolPolicy` alone: `orgPluginSettings` is not consulted for it, even when the entry sets no `toolPolicy`. A built-in entry (one with `server`) is the exception: it applies to a plugin's server of the same name only when a `toolPolicy` is written on it, and then carries that `toolPolicy` and the built-in's rule that its send and other irreversible tools cannot be loosened below `ask`, but not the built-in's other default prompts. An `http`, `sse` or `stdio` entry is also a server the app itself connects to or launches. To set permissions for a server that only a plugin runs, without the app connecting to or launching anything, use an entry with `transport: \"policy-only\"`.\n\n" + st.PLUGIN_MCP_TOOL_POLICY_CHANNEL_NOTE) } }), pn = { server: c.z.never({ error: "server is only valid on built-in entries, which must not set transport/url/command" }).optional() };
  function ma(e) {
    let t = (o) => c.z.never({ error: `${e} must not set ${o}` }).optional();
    return { url: t("url"), command: t("command"), oauth: t("oauth"), headers: t("headers"), headersHelper: t("headersHelper"), headersHelperTtlSec: t("headersHelperTtlSec"), headersHelperRefreshBufferSec: t("headersHelperRefreshBufferSec"), args: t("args"), env: t("env"), envHelper: t("envHelper"), envHelperTtlSec: t("envHelperTtlSec"), startupTimeoutSec: t("startupTimeoutSec") };
  }
  var rn = 'clientId must be a non-empty string (a pre-registered client requires it; for automatic registration use `"oauth": true` or an object with only scope/appendOfflineAccess/additionalRedirectReferrerHosts)', qo = (e) => a.subfield(c.z.string().optional(), { support: e, label: r.msg({ defaultMessage: "Additional redirect referrer hosts", id: "sxWy/sz/Fr" }), mono: true, placeholder: r.msg({ defaultMessage: "(authorization URL host only)", id: "7lyDghlOiR" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Space-separated hostnames also accepted as the referrer of the sign-in callback. Only needed when the IdP completes sign-in from a different host.", id: "kux1XwHSoN" }), { docsOnly: false }), long: a.longDescription("Only needed when the IdP completes sign-in from a host other than the authorization URL\u2019s. When a callback is rejected for a referrer mismatch, the rejected host is named in the app log \u2014 add that hostname here.", { docsOnly: false }) } }), ya = c.z.never({ error: 'write the grant as the space-separated `scope` string (for example "read write") instead of a `scopes` list' }).optional(), ba = c.z.never({ error: () => `scopes: write the grant as the space-separated \`scope\` string (a list of scope-name strings is the legacy form)${yn(st.MCP_ENTRY_SCOPES_LIST)}` }).optional(), Fo = ["common", "organizations", "consumers"], va = () => c.z.array($t()).min(1);
  st.ByoOauth = c.z.object({ clientId: a.subfield(c.z.string().trim().min(1, { error: rn }).optional(), { label: r.msg({ defaultMessage: "Client ID", id: "U5+MBCY8VU" }), mono: true, placeholder: r.msg({ defaultMessage: "From your IdP app registration", id: "UBXsZZ/YgR" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "OAuth client ID from your IdP app registration. Leave unset to auto-register (dynamic client registration) and only narrow scopes.", id: "CasIvHu24B" })) } }), clientSecret: a.subfield(a.annotate(c.z.string().trim().min(1).optional(), { redact: "presence" }), { label: r.msg({ defaultMessage: "Client secret", id: "B7p2EChIPJ" }), mono: true, predicates: { show: (e) => Boolean(e.clientSecret) || !e.clientSecretHelper }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Only for IdPs that require one (e.g. Box). Hosted config can store only a Google Desktop-app secret (GOCSPX-\u2026); for other IdPs use the client secret helper.", id: "zSswKOZPeO" }), { docsOnly: false }) } }), clientSecretHelper: a.subfield(c.z.string().min(1).optional(), { label: r.msg({ defaultMessage: "Client secret helper script", id: "97Wza/xUot" }), support: { availableInVersion: "1.19367.0" }, mono: true, remotePolicy: { requiresUserConsent: true }, predicates: { show: (e) => Boolean(e.clientSecretHelper) || !e.clientSecret }, placeholder: r.msg({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Executable that prints the client secret on stdout as a JSON object with a single clientSecret key; any other output is rejected. Overrides the inline value.", id: "CIKoaKKKI9" }), { docsOnly: false }), long: a.longDescription('Claude runs the executable with no arguments whenever that server connects and whenever its sign-in is refreshed in the background (the result is not cached), and reads **stdout**, which must be exactly one JSON object of the form `{"clientSecret": "\u2026"}`: no other keys, and no banner or log lines before or after it (write those to stderr, which is only logged; keep stdout and stderr together under 64 KB). The helper must exit with code `0` within 30 seconds. Any other output stops that server from connecting, with an error that names its `clientSecretHelper`, instead of sending a wrong value to the identity provider. Use this to pull the secret from Keychain, 1Password CLI, or an internal secret broker instead of writing it into the configuration, and prefer a helper that does not prompt the user, since it also runs during background refreshes.', { docsOnly: false }) } }), authorizationServer: a.subfield(va().optional(), { label: r.msg({ defaultMessage: "Authorization server", id: "la+WYl1g5R" }), mono: true, placeholder: r.msg({ defaultMessage: '["https://api.box.com"]', id: "Kq/aajRMhf" }), predicates: { required: (e) => Boolean(e.clientSecret) || Boolean(e.clientSecretHelper) }, requiredMessage: r.msg({ defaultMessage: 'Required when a client secret is configured. For a Google client use ["https://accounts.google.com"]; for mcp.box.com, ["https://api.box.com"].', id: "shX8X2aUZU" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Issuer URLs the OAuth sign-in may use, as a JSON array. Pre-filled by presets; ask your IdP admin if unsure.", id: "03A87ql5DH" }), { docsOnly: false }) } }), authorizationUrl: a.subfield(st.httpsUrl.optional(), { label: r.msg({ defaultMessage: "Authorization URL", id: "uiL7XCPiaV" }), support: { availableInVersion: "1.24012.0" }, mono: true, predicates: { show: (e) => !e.tenantId && !(Array.isArray(e.authorizationServer) && e.authorizationServer.length > 0) }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Only for IdPs that don\u2019t serve a .well-known discovery document. Set together with Token URL; requires Client ID.", id: "Hf6aQERhbF" }), { docsOnly: false }) } }), tokenUrl: a.subfield(st.httpsUrl.optional(), { label: r.msg({ defaultMessage: "Token URL", id: "PJhe0HJqkm" }), support: { availableInVersion: "1.24012.0" }, mono: true, predicates: { show: (e) => !e.tenantId && !(Array.isArray(e.authorizationServer) && e.authorizationServer.length > 0) }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Only for IdPs that don\u2019t serve a .well-known discovery document. Set together with Authorization URL; requires Client ID.", id: "JZIh/4to9Z" }), { docsOnly: false }) } }), tenantId: a.subfield(c.z.union([c.z.guid(), c.z.enum(Fo)]).optional(), { label: r.msg({ defaultMessage: "Tenant ID", id: "VdfqU5wMCX" }), mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "Required for single-tenant Entra apps. Leave blank for multi-tenant or non-Microsoft IdPs.", id: "SnxeYJYoto" }), { docsOnly: false }) } }), authFlow: a.subfield(c.z.enum(["browser", "broker"]).optional(), { label: r.msg({ defaultMessage: "Sign-in flow", id: "nt5Vq+fIlk" }), support: { availableInVersion: "1.25927.0" }, optionLabels: { browser: r.msg({ defaultMessage: "System browser", id: "H8jfEPcL/x" }), broker: r.msg({ defaultMessage: "OS identity broker (WAM / Company Portal)", id: "dkv7ZXazC0" }) }, predicates: { show: (e) => Boolean(e.tenantId) || Boolean(e.authFlow) }, description: { short: a.shortDescription(r.msg({ defaultMessage: "How Entra sign-in runs for this server: the system browser (default) or the OS identity broker.", id: "GsolzpV43N" }), { docsOnly: false }), long: a.longDescription("- **`browser`** (default) \u2014 opens the system browser for an authorization-code (PKCE) sign-in on the loopback redirect URI.\n- **`broker`** \u2014 signs in through the OS identity broker (Web Account Manager on Windows, the Company Portal SSO extension on macOS), so it can satisfy Conditional Access policies that require a compliant or managed device or token protection. Requires **Tenant ID**, **Client ID**, and **Scope**. The app registration must list the broker redirect URIs `ms-appx-web://Microsoft.AAD.BrokerPlugin/{client-id}` (Windows) and `msauth.com.anthropic.claudefordesktop://auth` (macOS) under the **Mobile and desktop applications** platform, and the device must be Entra-registered (macOS also needs the Company Portal SSO extension). Not supported on Linux. When the broker is not available on a device, sign-in falls back to the system browser.\n\nApp versions that predate this key always use the system browser.", { docsOnly: false }) } }), scope: a.subfield(c.z.string().min(1).optional(), { label: r.msg({ defaultMessage: "Scope", id: "nso3MjkMl+" }), mono: true, placeholder: r.msg({ defaultMessage: "api://\u2026/access_as_user offline_access", id: "1fPbl8sb8U" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Space-separated scopes sent on the authorize request. Leave unset to use the scopes the server advertises. Required when Tenant ID is set.", id: "/Ulx8QgbNP" })) }, predicates: { required: (e) => typeof e.tenantId === "string" && e.tenantId.trim() !== "" }, requiredMessage: r.msg({ defaultMessage: "Scope is required when Tenant ID is set.", id: "EThsmphP7E" }) }), appendOfflineAccess: a.subfield(c.z.boolean().optional(), { label: r.msg({ defaultMessage: "Request offline_access", id: "pQQw6aWtUt" }), support: { availableInVersion: "1.13576.0" }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Adds offline_access to the authorize request so the IdP returns a refresh token for silent renewal.", id: "RI6UfcnlXY" }), { docsOnly: false }), long: a.longDescription("Leave off if Scope already includes `offline_access` or the server rejects it.\n\nWith explicit endpoints (Authorization URL / Token URL, no discovery) this toggle can\u2019t take effect on its own \u2014 the app can\u2019t confirm the AS advertises `offline_access`, so include `offline_access` in **Scope** instead for silent refresh.", { docsOnly: false }) } }), callbackHost: a.subfield(c.z.enum(st.CALLBACK_HOST_OPTIONS).optional(), { label: r.msg({ defaultMessage: "Callback host", id: "P+/GQ+gmAe" }), placeholder: r.msg({ defaultMessage: "127.0.0.1", id: "L4dIq9u0LB" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Use localhost only if your IdP\u2019s registered redirect URI specifies it.", id: "CncIVWXmvt" }), { docsOnly: false }) } }), callbackPort: a.subfield(c.z.number().int().min(1024).max(65535).optional(), { label: r.msg({ defaultMessage: "Callback port", id: "XVLCaBkgOo" }), placeholder: r.msg({ defaultMessage: "53280", id: "RaVP62wW+g" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Only set if your IdP requires an exact-match redirect port. Entra accepts any.", id: "4hrAYpn2S6" }), { docsOnly: false }) } }), additionalRedirectReferrerHosts: qo({ availableInVersion: "1.24012.0" }), scopes: ya });
  function _a(e) {
    if (e.tenantId) return { via: "tenant", tenantId: e.tenantId };
    if (e.authorizationServer && e.authorizationServer.length > 0) return { via: "issuer", authorizationServer: e.authorizationServer };
    if (e.authorizationUrl && e.tokenUrl) return { via: "explicit", authorizationUrl: e.authorizationUrl, tokenUrl: e.tokenUrl };
    return { via: "prm" };
  }
  function wa(e) {
    switch (e.via) {
      case "issuer":
        return e.authorizationServer;
      case "explicit":
        return [e.authorizationUrl, e.tokenUrl];
      case "tenant":
      case "prm":
        return [];
    }
  }
  function Ab(e, t) {
    var o, s, n, i;
    if (e.authFlow === "broker") {
      if (!e.tenantId) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["tenantId"], message: 'tenantId is required when authFlow is "broker" (OS-brokered sign-in targets the tenant-specific Entra authority of the registered app)' });
      if (e.tenantId !== void 0 && Fo.includes(e.tenantId)) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["tenantId"], message: 'authFlow "broker" needs a tenant GUID \u2014 the "common"/"organizations"/"consumers" aliases are not a tenant the OS broker can sign in against' });
    }
    if (e.tenantId && !e.scope) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["scope"], message: "scope is required when tenantId is set (a tenant-pinned app must state its resource scopes explicitly; include offline_access if silent refresh is needed)" });
    if (!e.clientId && (e.clientSecret || e.clientSecretHelper || e.tenantId || e.callbackHost || e.callbackPort !== void 0 || e.authFlow || ((s = (o = e.authorizationServer) === null || o === void 0 ? void 0 : o.length) !== null && s !== void 0 ? s : 0) > 0)) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["clientId"], message: "clientId is required when clientSecret/clientSecretHelper/tenantId/callbackHost/callbackPort/authFlow/authorizationServer is set (only scope/appendOfflineAccess/additionalRedirectReferrerHosts can be configured without a pre-registered client)" });
    if (!e.authorizationUrl !== !e.tokenUrl) t.addIssue({ code: c.z.ZodIssueCode.custom, path: [e.authorizationUrl ? "tokenUrl" : "authorizationUrl"], message: "both authorizationUrl and tokenUrl are required when either is set (explicit endpoints replace .well-known discovery as a pair)" });
    if ((e.authorizationUrl || e.tokenUrl) && !e.clientId) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["clientId"], message: "clientId is required when authorizationUrl/tokenUrl are set (dynamic client registration never runs against manually-configured endpoints)" });
    if ((e.clientSecret || e.clientSecretHelper) && !(((i = (n = e.authorizationServer) === null || n === void 0 ? void 0 : n.length) !== null && i !== void 0 ? i : 0) > 0)) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["authorizationServer"], message: 'authorizationServer is required when a client secret is configured (for a Google client use ["https://accounts.google.com"]; for mcp.box.com, ["https://api.box.com"])' });
  }
  var an = (e) => Array.isArray(e) && e.every((t) => typeof t === "string");
  function ka(e) {
    let { scopes: t, ...o } = e, s = o;
    if (an(s.scope)) s.scope = s.scope.join(" ");
    if (s.scope !== void 0 && s.scope !== null && !(typeof s.scope === "string" && s.scope.trim() === "") || t === void 0 || t === null) return s;
    if (an(t)) {
      let i = t.join(" ");
      return i.trim() === "" ? s : { ...s, scope: i };
    }
    return Array.isArray(t) ? { ...s, scopes: t } : { ...s, scope: t };
  }
  function Ca(e) {
    if (typeof e !== "object" || e === null) return e === false || e === null || e === void 0 ? void 0 : e;
    let t = {};
    for (let [o, s] of Object.entries(e)) if (s !== null && s !== void 0) t[o] = s;
    if (delete t.asSelection, typeof t.scope === "string" && t.scope.trim() === "") delete t.scope;
    if (typeof t.additionalRedirectReferrerHosts === "string" && t.additionalRedirectReferrerHosts.trim() === "") delete t.additionalRedirectReferrerHosts;
    return t;
  }
  var Ob = c.z.strictObject({ scope: st.ByoOauth.shape.scope, appendOfflineAccess: st.ByoOauth.shape.appendOfflineAccess, scopes: st.ByoOauth.shape.scopes, additionalRedirectReferrerHosts: st.ByoOauth.shape.additionalRedirectReferrerHosts }), Mb = st.ByoOauth.extend({ clientId: c.z.string({ error: rn }).trim().min(1, { error: rn }), mode: c.z.never().optional() });
  st.HostedOauth = c.z.object({ clientId: a.subfield($t().optional(), { label: r.msg({ defaultMessage: "Client ID", id: "U5+MBCY8VU" }), support: { availableInVersion: "1.32885.1" }, mono: true, predicates: { show: () => false }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Set by the Claude.ai control plane when it serves this configuration (the URL of Anthropic\u2019s hosted client-metadata document); not authored.", id: "Qo9p3Z8KNm" })) } }), authorizationServer: a.subfield(va(), { label: r.msg({ defaultMessage: "Authorization server", id: "la+WYl1g5R" }), support: { availableInVersion: "1.32885.1" }, mono: true, placeholder: r.msg({ defaultMessage: '["https://auth.example.com"]', id: "QnF5L0LVAM" }), predicates: { required: () => true }, requiredMessage: r.msg({ defaultMessage: "Required: the exact issuer URL(s) this server\u2019s OAuth authorization server advertises. Anthropic signs the client identity only for the servers listed here.", id: "dHFF5sr0w5" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "The exact issuer string(s) the server\u2019s OAuth authorization server advertises in its metadata, as a JSON array \u2014 matched exactly, including path and any trailing slash. Required: Anthropic signs the client identity only for an authorization server listed here.", id: "oU3IPkHXhW" }), { docsOnly: false }) } }), scope: st.ByoOauth.shape.scope, scopes: ya });
  var Sa = c.z.discriminatedUnion("mode", [c.z.strictObject({ mode: a.annotate(c.z.literal("dcr"), { availableInVersion: "1.15200.0" }) }), c.z.object({ mode: a.annotate(c.z.literal("byo"), { availableInVersion: "1.15200.0" }), ...a.unwrapZod(st.ByoOauth).shape }), c.z.object({ mode: a.annotate(c.z.literal("hosted"), { availableInVersion: "1.32885.1" }), ...a.unwrapZod(st.HostedOauth).shape })]).superRefine((e, t) => {
    if (e.mode === "byo") Ab(e, t);
  }), Ea = [c.z.literal(true).transform(() => ({ mode: "dcr" })), Ob.transform((e) => e.scope !== void 0 || e.appendOfflineAccess !== void 0 || e.additionalRedirectReferrerHosts !== void 0 ? { ...e, mode: "byo" } : { mode: "dcr" }), Mb.transform((e) => ({ ...e, mode: "byo" })), Sa];
  st.McpOauth = c.z.preprocess(Ca, c.z.union(Ea).pipe(Sa).transform(Ib).optional());
  function Tb(e) {
    return e !== void 0 && e.mode !== "dcr" ? wa(e.asSelection) : [];
  }
  function Ib(e) {
    return e.mode === "dcr" ? e : { ...e, asSelection: _a(e) };
  }
  st.RemoteDirectMcpServerConfig = c.z.object({ name: Wo, ...pn, transport: a.subfield(c.z.enum(["http", "sse"]), { label: r.msg({ defaultMessage: "Transport", id: "KwHBKRwf8M" }), optionLabels: { http: r.msg({ defaultMessage: "Streamable HTTP", id: "xWvR0pm1jC" }), sse: r.msg({ defaultMessage: "SSE (legacy)", id: "micfwa1L0h" }), stdio: r.msg({ defaultMessage: "Local command (stdio)", id: "JJVljnyegG" }) }, description: { short: un, long: Eb }, predicates: { show: (e) => !ut(e), required: (e) => !ut(e) }, requiredMessage: r.msg({ defaultMessage: "Choose a transport: Streamable HTTP or SSE for a remote server, or a local command (stdio).", id: "NHDyxXOY2g" }) }), url: a.subfield(st.httpsUrl, { label: r.msg({ defaultMessage: "URL", id: "bWjdfaXOzU" }), mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "HTTPS endpoint of the remote MCP server.", id: "0DxirXa2HE" })) }, predicates: { show: xt } }), oauth: a.subfield(st.McpOauth, { label: r.msg({ defaultMessage: "OAuth", id: "Z9SEbF2UCN" }), optionLabels: { "": r.msg({ defaultMessage: "None", id: "450Fty8ldn" }), dcr: r.msg({ defaultMessage: "Auto-register (dynamic client registration)", id: "N5hOiMqiZn" }), byo: r.msg({ defaultMessage: "Bring your own client", id: "SZXkm24sDA" }), hosted: r.msg({ defaultMessage: "Anthropic-hosted client identity (requires Claude.ai sign-in)", id: "a8rtUEBAoL" }) }, description: { short: a.shortDescription(r.msg({ defaultMessage: "OAuth for a remote server: true to auto-register a client, a pre-registered client ID with tenant and scope, or mode \u201Chosted\u201D for an Anthropic-signed identity.", id: "GczcdrMY1b" })), long: a.longDescription("**Auto-register**: Claude registers itself as a client with the MCP server\u2019s authorization server the first time a user connects. **Bring your own client**: for a server whose provider requires an OAuth client that you register. Enter its **Client ID**, and add a **Client secret** and **Authorization server** only when the provider also requires the secret. Leave **None** for a server that needs no sign-in or authenticates with headers.", { docsOnly: false, docsUrl: `${Ve.COWORK_3P_DOCS_BASE}/mcp-sign-in` }) }, predicates: { show: xt } }), headers: a.subfield(a.annotate(c.z.record(c.z.string(), c.z.string()).optional(), { redact: "presence" }), { label: r.msg({ defaultMessage: "Headers", id: "Wm+KUdH7c0" }), placeholder: { key: r.msg({ defaultMessage: "X-Tenant-ID", id: "McpHeadersKeyPh" }), value: r.msg({ defaultMessage: "value", id: "7CyD7ey2Aw" }) }, description: { short: ha }, predicates: { show: xt } }), headersHelper: a.subfield(c.z.string().min(1).optional(), { label: r.msg({ defaultMessage: "Headers helper script", id: "x+MG25XWVf" }), support: { availableInVersion: "1.19367.0" }, placeholder: r.msg({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }), mono: true, remotePolicy: { requiresUserConsent: true }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Absolute path to an executable that prints a JSON object of HTTP headers on stdout. Merged over static headers; the helper wins on conflict.", id: "NM2HHnUt8L" })) }, predicates: { show: xt } }), headersHelperTtlSec: a.subfield(c.z.number().int().positive().optional(), { label: r.msg({ defaultMessage: "Helper cache TTL (sec)", id: "HIjCnaQF93" }), support: { availableInVersion: "1.19367.0" }, placeholder: r.msg({ defaultMessage: "3600", id: "knMPP8lqSe" }), description: { short: fa }, predicates: { show: (e) => Boolean(e.headersHelper) } }), headersHelperRefreshBufferSec: a.subfield(c.z.number().int().positive().optional(), { label: r.msg({ defaultMessage: "Helper refresh buffer (sec)", id: "3p+PBJPMTa" }), support: { availableInVersion: "1.21459.0" }, placeholder: r.msg({ defaultMessage: "60", id: "JjROJwgJI2" }), description: { short: ga }, predicates: { show: (e) => Boolean(e.headersHelper) } }), toolPolicy: Xt });
  var Pb = /^[A-Za-z0-9][A-Za-z0-9._-]*$/, Aa = /(^|\/)\.\.($|\/)/, Rb = /[\t\n\r\0;|`$<>"]/;
  function Oa(e) {
    if (e.length === 0 || e !== e.trim()) return false;
    if (e.startsWith("~")) return false;
    if (Pb.test(e)) return true;
    let t = e.replace(/\\/g, "/");
    if (t.startsWith("//")) return false;
    if (Rb.test(t)) return false;
    if (Aa.test(t)) return false;
    return t.startsWith("/") || /^[A-Za-z]:\//.test(t);
  }
  var Db = /["%\r\n\u0000]/, xb = /[. ]$/;
  function hn(e) {
    if (e !== e.trim() || e.startsWith("~")) return false;
    if (Db.test(e) || xb.test(e)) return false;
    let t = e.replace(/\\/g, "/");
    if (t.startsWith("//") || t.startsWith("/??/")) return false;
    if (Aa.test(t)) return false;
    return t.startsWith("/") || /^[A-Za-z]:\//.test(t);
  }
  st.HELPER_PATH_UNSAFE_MESSAGE = 'must be a local absolute path (Windows: C:/... or C:\\...) with no ~, .., UNC or \\??\\ prefix, not containing " % CR LF NUL, and not ending with a dot or space';
  st.safeHelperPath = c.z.string().trim().min(1).refine(hn, { message: st.HELPER_PATH_UNSAFE_MESSAGE });
  st.safeWindowsHelperPath = st.safeHelperPath.regex(/^[A-Za-z]:[\\/]/, { message: "must be a Windows drive-letter path (C:\\... or C:/...)" });
  st.configuredHostPath = st.safeHelperPath.regex(/^\/.*[^/]$/, { message: "must be a macOS or Linux file path (starts with /, does not end with /)" }).regex(/^[^\p{C}\p{Zl}\p{Zp}]*$/u, { message: "must not contain control, format, private-use or unassigned characters" }).max(4096).brand();
  st.vendorId = c.z.string().trim().regex(/^[a-z0-9][a-z0-9-]{0,31}$/, { message: "must be 1 to 32 lower-case letters, digits or hyphens, not starting with a hyphen" }).brand();
  st.safeHelperArg = c.z.string().max(1024).regex(Vo.HELPER_BREAKOUT_FREE_RE, { message: Vo.HELPER_ARG_UNSAFE_MESSAGE });
  var Lb = c.z.object({ name: Wo, ...pn, transport: a.subfield(c.z.literal("stdio"), { label: r.msg({ defaultMessage: "Transport", id: "KwHBKRwf8M" }), support: { availableInVersion: "1.19367.0" }, description: { short: un } }), command: a.subfield(c.z.string().min(1).refine(Oa, { message: "must be a bare command name (e.g. npx) or a local absolute path (Windows: C:/... or C:\\...); no ~, .., UNC, or control characters" }), { label: r.msg({ defaultMessage: "Command", id: "9WyylR0I6U" }), support: { availableInVersion: "1.19367.0" }, mono: true, placeholder: r.msg({ defaultMessage: "/usr/local/bin/uvx", id: "lKL06F7LOG" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Absolute path to the server executable, run on the user\u2019s machine.", id: "AjJRgsQw1w" }), { docsOnly: false }) }, remotePolicy: { requiresUserConsent: true }, predicates: { show: Yt } }), args: a.subfield(a.annotate(c.z.array(c.z.string()), { maxItems: 100 }).optional(), { label: r.msg({ defaultMessage: "Arguments", id: "nc7BrwYVL+" }), support: { availableInVersion: "1.19367.0" }, mono: true, remotePolicy: { requiresUserConsent: true }, placeholder: r.msg({ defaultMessage: '["mcp-server-fetch"]', id: "xtIyoIFEkB" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Arguments passed to the command, one per entry.", id: "qrGlhlxnhf" })) }, predicates: { show: Yt } }), env: a.subfield(a.annotate(c.z.record(c.z.string(), c.z.string()).optional(), { redact: "drop" }), { label: r.msg({ defaultMessage: "Environment variables", id: "jvB4W9FV2m" }), support: { availableInVersion: "1.19367.0" }, placeholder: { key: r.msg({ defaultMessage: "API_KEY", id: "H/zM1IFCUA" }), value: r.msg({ defaultMessage: "value", id: "7CyD7ey2Aw" }) }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Environment variables set for the command.", id: "TMkJBKoBoR" })) }, remotePolicy: { requiresUserConsent: true }, predicates: { show: Yt } }), envHelper: a.subfield(c.z.string().min(1).refine(hn, { message: st.HELPER_PATH_UNSAFE_MESSAGE }).optional(), { label: r.msg({ defaultMessage: "Environment helper script", id: "bzigWDMKGz" }), support: { availableInVersion: "1.21459.0" }, placeholder: r.msg({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Script that prints environment variables as a JSON object to stdout. Runs when the local server starts (cached for the TTL below).", id: "eFAGgyRLfK" }), { docsOnly: false }), long: a.longDescription('Absolute path to an executable that prints a single JSON object of environment variables to stdout, e.g. `{"API_KEY": "\u2026"}`. The app runs it before spawning the server and merges the result over `env` (the helper wins on conflict). Use this to pull secrets from a secrets manager instead of storing them inline in `env`.\n\n- If the helper fails, the server does not start; the failure names the helper path in the app log and the diagnostics report.\n- A helper with nothing to set must print `{}`. Empty stdout is treated as a failure.\n- A helper-emitted `PATH` replaces the static map\u2019s `PATH` and supports the same `${PATH}` placeholder expansion as a static entry.', { docsOnly: false }) }, mono: true, remotePolicy: { requiresUserConsent: true }, predicates: { show: Yt } }), envHelperTtlSec: a.subfield(c.z.coerce.number().int().positive().optional(), { label: r.msg({ defaultMessage: "Helper cache TTL (sec)", id: "HIjCnaQF93" }), support: { availableInVersion: "1.21459.0" }, default: 300, placeholder: r.msg({ defaultMessage: "300", id: "ady/daA2aj" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Maximum age of a cached helper result, in seconds (default 300). Applies when the server starts or restarts.", id: "3eavQfVJJd" }), { docsOnly: false }), long: a.longDescription("How long the app may reuse the helper's output before running it again. The check happens only when the server process is (re)started. Environment variables are fixed at process creation, and a running server never sees refreshed values until its next restart. Set this at or below your token lifetime: a server that crash-loops because its token expired can be respawned with the same cached environment until the TTL lapses. Default: 300 seconds.", { docsOnly: false }) }, predicates: { show: (e) => Boolean(e.envHelper) } }), startupTimeoutSec: a.subfield(c.z.coerce.number().int().min(5).max(600).optional(), { label: r.msg({ defaultMessage: "Startup timeout", id: "BeAzXifBDP" }), support: { availableInVersion: "1.19367.0" }, suffix: r.msg({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }), default: 120, placeholder: r.msg({ defaultMessage: "120", id: "PbcmBNPg4G" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Maximum wait in seconds for the server to start and list its tools.", id: "msICdyCWVb" })) }, predicates: { show: Yt } }), toolPolicy: Xt }), Ub = c.z.object({ name: Wo, ...pn, transport: a.subfield(c.z.literal(st.MCP_TRANSPORT_POLICY_ONLY), { label: r.msg({ defaultMessage: "Transport", id: "KwHBKRwf8M" }), support: { availableInVersion: "2.110.0" }, optionLabels: { [st.MCP_TRANSPORT_POLICY_ONLY]: r.msg({ defaultMessage: "Tool permissions only (plugin server)", id: "McpPolicyOnlyTransportOpt" }) }, description: { short: un } }), ...ma('entries with transport "policy-only"'), toolPolicy: Xt });
  st.BUILTIN_MCP_SERVERS = ["microsoft365", "websearch", "github"];
  st.WEB_SEARCH_PROVIDERS = ["brave", "tavily", "exa", "custom"];
  st.WEB_SEARCH_PROVIDER_HOSTS = { brave: "api.search.brave.com", tavily: "api.tavily.com", exa: "api.exa.ai" };
  st.AZURE_CLOUDS = ["global", "us-gov-high", "us-gov-dod"];
  st.AZURE_CLOUD_HOSTS = { global: { authority: "login.microsoftonline.com", graph: "graph.microsoft.com" }, "us-gov-high": { authority: "login.microsoftonline.us", graph: "graph.microsoft.us" }, "us-gov-dod": { authority: "login.microsoftonline.us", graph: "dod-graph.microsoft.us" } };
  var Ma = [{ scope: "User.Read", kind: "always" }, { scope: "offline_access", kind: "always" }, { scope: "Mail.Read", kind: "read" }, { scope: "Mail.Read.Shared", kind: "read" }, { scope: "Calendars.Read", kind: "read" }, { scope: "Calendars.Read.Shared", kind: "read" }, { scope: "Files.Read.All", kind: "read" }, { scope: "Sites.Read.All", kind: "read" }, { scope: "Chat.Read", kind: "read" }, { scope: "ChannelMessage.Read.All", kind: "admin" }, { scope: "OnlineMeetings.Read", kind: "read" }, { scope: "OnlineMeetingTranscript.Read.All", kind: "admin" }, { scope: "MailboxSettings.Read", kind: "read" }, { scope: "People.Read", kind: "read" }, { scope: "Team.ReadBasic.All", kind: "read" }, { scope: "Channel.ReadBasic.All", kind: "read" }, { scope: "Mail.Send", kind: "write" }, { scope: "Mail.ReadWrite", kind: "write" }, { scope: "Calendars.ReadWrite", kind: "write" }, { scope: "Files.ReadWrite.All", kind: "write" }, { scope: "Sites.ReadWrite.All", kind: "write" }, { scope: "ChatMessage.Send", kind: "write" }, { scope: "ChannelMessage.Send", kind: "write" }, { scope: "Chat.Create", kind: "write" }, { scope: "MailboxSettings.ReadWrite", kind: "write" }];
  function fn(e) {
    return Ma.filter((t) => t.kind === e).map((t) => t.scope);
  }
  st.M365_GRANTABLE_DELEGATED_SCOPES = Ma.map((e) => e.scope);
  var Qi = new Set(st.M365_GRANTABLE_DELEGATED_SCOPES);
  st.M365_WRITE_DELEGATED_SCOPES = fn("write");
  st.M365_ALWAYS_REQUESTED_SCOPES = fn("always");
  st.M365_ADMIN_CONSENT_SCOPES = fn("admin");
  st.M365_DEFAULT_DELEGATED_SCOPES = ["User.Read", "offline_access", "Mail.Read", "Calendars.Read", "Calendars.Read.Shared", "Files.Read.All", "Sites.Read.All", "Chat.Read", "Mail.Read.Shared", "OnlineMeetings.Read"];
  var gn = { name: Wo, transport: c.z.never({ error: () => `built-in entries (with \`server\`) must not set transport \u2014 built-in is provenance, not a transport ("builtin" is the legacy value)${yn(st.MCP_ENTRY_TRANSPORT_BUILTIN)}` }).optional(), ...ma("built-in entries (with `server`)") };
  function mn(e, t, o) {
    return a.subfield(c.z.literal(e), { label: r.msg({ defaultMessage: "Server", id: "McpBuiltinServerLabel" }), optionLabels: { [e]: t }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Which bundled connector this entry turns on. Set instead of a transport; each built-in server has its own fields.", id: "Y3kHXVbSRV" })) }, predicates: { show: ut, disabled: ut }, support: o });
  }
  function Bo(e) {
    return c.z.preprocess((t) => typeof t === "string" && t.trim() === "" ? void 0 : t, e);
  }
  function ln(e, t, o, s) {
    return (Array.isArray(e) ? e : []).filter((i) => !t(i)).slice(0, 5).map((i) => i.length > o ? `${i.slice(0, s)}\u2026` : i).join(", ");
  }
  var Mo = (e) => typeof e === "object" && e !== null && !Array.isArray(e), Lt = "the entry will be rejected as invalid and that connector will be unavailable until the entry is rewritten", Ta = (e) => xt(e);
  st.MCP_ENTRY_SCOPES_LIST = { path: "managedMcpServers[].scopes", use: 'scope (one space-separated string, for example "Mail.Read Calendars.Read")', effect: Lt, ...K.BATCH_2026_09, match: (e) => (e.server === "microsoft365" || e.server === "github") && an(e.scopes), rewrite: (e) => {
    let { scopes: t, ...o } = e, s = t.join(" ");
    return o.scope !== void 0 || s === "" ? o : { ...o, scope: s };
  } };
  st.MCP_ENTRY_TRANSPORT_BUILTIN = { path: 'managedMcpServers[].transport: "builtin"', effect: Lt, ...K.BATCH_2026_09, match: (e) => e.transport === "builtin" && e.server !== void 0, rewrite: ({ transport: e, ...t }) => t };
  st.MCP_ENTRY_AUTHORITY_HOST = { path: "managedMcpServers[].authorityHost", use: 'azureCloud: "us-gov-high" for a GCC High tenant; otherwise nothing', effect: `${Lt} \u2014 the Microsoft 365 connector will disappear rather than guess a cloud`, ...K.BATCH_2026_09, match: (e) => e.server === "microsoft365" && e.authorityHost !== void 0 && e.authorityHost !== null, rewrite: ({ authorityHost: e, ...t }) => t.azureCloud === void 0 && typeof e === "string" && e.includes("login.microsoftonline.us") ? { ...t, azureCloud: "us-gov-high" } : t };
  st.MCP_ENTRY_SOURCE = { path: "managedMcpServers[].source", effect: "it will be treated as any unrecognised entry member \u2014 ignored by the desktop (the connector still loads; the app assigns each connector's provenance itself) and refused by a customer-run Apps Gateway serving the configuration", ...K.BATCH_2026_09, match: (e) => e.source === "managed" || e.source === "org-plugin" || e.source === "user", rewrite: ({ source: e, ...t }) => t };
  st.MCP_ENTRY_OAUTH_SCALAR = { path: "managedMcpServers[].oauth as a number or string", use: "true (automatic registration) or an oauth object", effect: `it will be treated as any wrong-typed member: ${Lt}`, ...K.BATCH_2026_09, match: (e) => Ta(e) && (typeof e.oauth === "number" || typeof e.oauth === "string"), rewrite: ({ oauth: e, ...t }) => e ? { ...t, oauth: true } : t };
  st.MCP_ENTRY_OAUTH_SCOPES_LIST = { path: "managedMcpServers[].oauth.scopes (or oauth.scope as a list)", use: 'oauth.scope as one space-separated string, for example "read write"', effect: `it will be treated as any wrong-typed member: ${Lt}`, ...K.BATCH_2026_09, match: (e) => Ta(e) && Mo(e.oauth) && (e.oauth.scopes !== void 0 && e.oauth.scopes !== null || Array.isArray(e.oauth.scope)), rewrite: (e) => ({ ...e, oauth: ka(e.oauth) }) };
  st.MCP_ENTRY_TRANSPORT_MISSING = { path: "managedMcpServers[] entry without transport", use: 'transport: "http" (or "sse" / "stdio") on every entry that is not a built-in server', effect: Lt, ...K.BATCH_2026_09, match: (e) => e.server === void 0 && (e.transport === void 0 || e.transport === null), rewrite: (e) => ({ ...e, transport: "http" }) };
  st.MCP_ENTRY_TOOL_POLICY_ASK_SESSION = { path: 'managedMcpServers[].toolPolicy: "ask-session"', use: '"ask"', effect: Lt, ...K.BATCH_2026_09, match: (e) => la(e.toolPolicy), rewrite: (e) => ({ ...e, toolPolicy: aa(e.toolPolicy) }) };
  var Hb = [st.MCP_ENTRY_SCOPES_LIST, st.MCP_ENTRY_TOOL_POLICY_ASK_SESSION, st.MCP_ENTRY_TRANSPORT_BUILTIN, st.MCP_ENTRY_AUTHORITY_HOST, st.MCP_ENTRY_SOURCE, st.MCP_ENTRY_OAUTH_SCALAR, st.MCP_ENTRY_OAUTH_SCOPES_LIST, st.MCP_ENTRY_TRANSPORT_MISSING];
  st.MANAGED_MCP_SERVERS_DEPRECATIONS = Hb.map(({ rewrite: e, match: t, ...o }) => ({ ...o, match: (s) => Array.isArray(s) && s.some((n) => Mo(n) && t !== void 0 && t(n, {})) }));
  function yn(e) {
    if (e.supportEnds === void 0) return "";
    return K.isDeprecationHonoured(e) ? `; the legacy form is accepted only until ${K.formatDeprecationDate(e.supportEnds)}` : "; the legacy form is no longer accepted";
  }
  var Nb = c.z.never({ error: () => `authorityHost was removed: set azureCloud ("us-gov-high" for GCC High) instead${yn(st.MCP_ENTRY_AUTHORITY_HOST)}` }).optional(), zb = c.z.preprocess((e) => {
    if (!Mo(e)) return e;
    if (e.authorityHost === null) {
      let { authorityHost: t, ...o } = e;
      return o;
    }
    return K.applyLegacy(st.MCP_ENTRY_AUTHORITY_HOST, e);
  }, c.z.object({ ...gn, authorityHost: Nb, server: mn("microsoft365", r.msg({ defaultMessage: "Microsoft 365", id: "McpBuiltinServerM365Opt" }), { availableInVersion: "1.19367.0" }), tenantId: a.subfield(c.z.union([c.z.string().trim().guid(), c.z.string().trim().pipe(c.z.enum(Fo)).meta({ enum: [...Fo] })]), { label: r.msg({ defaultMessage: "Tenant ID", id: "McpBuiltinTenantId" }), support: { availableInVersion: "1.19367.0", values: { common: { availableInVersion: "1.22209.0" }, organizations: { availableInVersion: "1.22209.0" }, consumers: { availableInVersion: "1.22209.0" } } }, mono: true, placeholder: r.msg({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "McpBuiltinTenantIdPh" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Your organization\u2019s Microsoft Entra directory (tenant) ID.", id: "McpBuiltinTenantIdHint" })) }, predicates: { show: Rt, required: Rt }, requiredMessage: r.msg({ defaultMessage: "Required for the built-in Microsoft 365 server.", id: "McpBuiltinTenantIdReq" }) }), clientId: a.subfield(c.z.string().trim().min(1), { label: r.msg({ defaultMessage: "Client ID", id: "McpBuiltinClientId" }), support: { availableInVersion: "1.19367.0" }, mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "OAuth app client ID for this built-in server.", id: "McpBuiltinClientIdHint2" })) }, predicates: { show: (e) => Rt(e) || mt(e), required: (e) => Rt(e) || mt(e) }, requiredMessage: r.msg({ defaultMessage: "Required for this built-in server.", id: "McpBuiltinClientIdReq2" }) }), azureCloud: a.subfield(c.z.enum(st.AZURE_CLOUDS).optional(), { label: r.msg({ defaultMessage: "Azure cloud", id: "McpBuiltinAzureCloud" }), support: { availableInVersion: "1.19367.0" }, placeholder: r.msg({ defaultMessage: "global", id: "McpBuiltinAzureCloudPh" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Microsoft cloud for sign-in and Graph. Leave as global for commercial Microsoft 365; US Government clouds require your own app registration (Client ID).", id: "McpBuiltinAzureCloudHint" }), { docsOnly: false }) }, predicates: { show: Rt } }), continuousAccessEvaluation: a.subfield(c.z.preprocess((e) => e === true || e === "true" ? "enabled" : e === false || e === "false" ? "disabled" : e, c.z.enum(["enabled", "disabled"]).optional()), { label: r.msg({ defaultMessage: "Continuous Access Evaluation", id: "McpBuiltinM365Cae" }), support: { availableInVersion: "1.49585.0" }, placeholder: r.msg({ defaultMessage: "enabled", id: "McpBuiltinM365CaePh" }), default: "enabled", description: { short: a.shortDescription(r.msg({ defaultMessage: "Request CAE-capable Microsoft Graph tokens: long-lived (up to about 28 hours) but revocable within minutes. Set \u201Cdisabled\u201D to keep standard one-hour tokens.", id: "McpBuiltinM365CaeHint" }), { docsOnly: false }), long: a.longDescription("With Continuous Access Evaluation the server declares the `cp1` client capability, so Microsoft Entra issues access tokens that live up to about 28 hours and are cut off within minutes by a claims challenge when an administrator revokes sessions, disables the account, or the user\u2019s risk changes \u2014 and, where the tenant enforces an IP named-location or Global Secure Access compliant-network Conditional Access policy, when the token is presented from outside that network. Tenants without such a policy get the longer lifetime and the fast revocation but no network-based replay protection; set `disabled` to keep standard one-hour, non-CAE tokens on every sign-in path. A change applies to tokens issued after the connector respawns with it; an already-cached long-lived token is served until it expires (Disconnect \u2192 Connect signs in afresh).") }, predicates: { show: Rt } }), scope: a.subfield(Bo(c.z.string().trim().transform((e) => e.split(/\s+/)).refine((e) => e.every((t) => Qi.has(t)), { error: (e) => `unknown scope(s) ${ln(e.input, (t) => Qi.has(t), 40, 40)} \u2014 grantable scopes: ${st.M365_GRANTABLE_DELEGATED_SCOPES.join(", ")}` }).transform((e) => e.join(" ")).optional()), { label: r.msg({ defaultMessage: "Access", id: "McpBuiltinScope" }), support: { availableInVersion: "1.19367.0" }, control: "m365Scopes", description: { short: a.shortDescription(r.msg({ defaultMessage: "What the server may request at sign-in. If blank, Desktop\u2019s default read set is used.", id: "McpBuiltinScopeHint" })) }, predicates: { show: Rt } }), toolPolicy: Xt, scopes: ba }).superRefine((e, t) => {
    if (e.azureCloud !== void 0 && e.azureCloud !== "global" && !e.clientId) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["clientId"], message: "clientId is required when azureCloud is a US Government cloud" });
  })), Dt = (e) => ut(e) && e.server === "websearch", Ia = (e) => e !== null && typeof e === "object" && Object.keys(e).length > 0, ea = (e) => Dt(e) && e.provider !== "custom" && !Ia(e.headers) && !e.headersHelper, Kb = c.z.object({ ...gn, server: mn("websearch", r.msg({ defaultMessage: "Web search", id: "McpBuiltinServerWebSearchOpt" }), { availableInVersion: "1.19367.0" }), provider: a.subfield(c.z.enum(st.WEB_SEARCH_PROVIDERS), { label: r.msg({ defaultMessage: "Search provider", id: "McpBuiltinWebSearchProvider" }), support: { availableInVersion: "1.19367.0" }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Runs search from the desktop, for inference providers without native web search. Supply the provider\u2019s API key through the headers helper script below.", id: "McpBuiltinWebSearchProviderHint2" }), { docsOnly: false }), long: a.longDescription(`For inference providers without native web search (Bedrock, custom gateways). On Anthropic API and Vertex, the model\u2019s built-in web search is available without this.

The provider\u2019s API key is a credential \u2014 have the **headers helper script** print its auth header rather than storing it in \`headers\`:
- **Brave** \u2014 \`X-Subscription-Token\`
- **Exa** \u2014 \`x-api-key\`
- **Tavily** \u2014 \`Authorization\` (Bearer \u2026)

To turn web search off entirely, or to require approval for each search, list the bare \`WebSearch\` name in \`disabledBuiltinTools\` or \`builtinToolPolicy\`; it takes no per-host scope.`, { docsOnly: false }) }, predicates: { show: Dt, required: Dt } }), headers: a.subfield(a.annotate(c.z.record(c.z.string(), c.z.string()).optional(), { redact: "presence" }), { label: r.msg({ defaultMessage: "Headers", id: "Wm+KUdH7c0" }), support: { availableInVersion: "1.19367.0" }, placeholder: { key: r.msg({ defaultMessage: "X-Tenant-ID", id: "McpHeadersKeyPh" }), value: r.msg({ defaultMessage: "value", id: "7CyD7ey2Aw" }) }, description: { short: ha }, predicates: { show: (e) => Dt(e) || xt(e), required: ea } }), headersHelper: a.subfield(c.z.string().min(1).optional(), { label: r.msg({ defaultMessage: "Headers helper script", id: "x+MG25XWVf" }), support: { availableInVersion: "1.19367.0" }, placeholder: r.msg({ defaultMessage: "Absolute path", id: "StnRZmM3Xn" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Script that prints the auth header as a JSON object to stdout. Runs before each request (cached for the TTL below).", id: "Qhgv6SfKH6" }), { docsOnly: false }), long: a.longDescription('Absolute path to an executable that prints a single JSON object of request headers to stdout, e.g. `{"X-Subscription-Token": "\u2026"}`. The app runs it before each request and caches the result for the TTL below. Use this to pull the key from a secrets manager instead of storing it inline in `headers`.', { docsOnly: false }) }, mono: true, remotePolicy: { requiresUserConsent: true }, predicates: { show: (e) => Dt(e) || xt(e), required: ea } }), headersHelperTtlSec: a.subfield(c.z.number().int().positive().optional(), { label: r.msg({ defaultMessage: "Helper cache TTL (sec)", id: "HIjCnaQF93" }), support: { availableInVersion: "1.19367.0" }, placeholder: r.msg({ defaultMessage: "3600", id: "knMPP8lqSe" }), description: { short: fa }, predicates: { show: (e) => Boolean(e.headersHelper) } }), headersHelperRefreshBufferSec: a.subfield(c.z.number().int().positive().optional(), { description: { short: ga }, label: r.msg({ defaultMessage: "Helper refresh buffer (sec)", id: "3p+PBJPMTa" }), support: { availableInVersion: "1.21459.0" }, placeholder: r.msg({ defaultMessage: "60", id: "JjROJwgJI2" }), predicates: { show: (e) => Boolean(e.headersHelper) } }), customUrl: a.subfield($t().optional(), { label: r.msg({ defaultMessage: "Custom URL", id: "McpBuiltinWebSearchCustomUrl" }), support: { availableInVersion: "1.19367.0" }, mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "POST endpoint accepting {q} JSON and returning a results[] array. Only used when provider is Custom.", id: "McpBuiltinWebSearchCustomUrlHint" }), { docsOnly: false }) }, predicates: { show: (e) => Dt(e) && e.provider === "custom", required: (e) => Dt(e) && e.provider === "custom" } }), toolPolicy: Xt }).superRefine((e, t) => {
    if (e.provider === "custom" && !e.customUrl) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["customUrl"], message: "customUrl is required when provider is custom" });
    if (e.provider !== "custom" && !Ia(e.headers) && !e.headersHelper) t.addIssue({ code: c.z.ZodIssueCode.custom, path: ["headers"], message: `headers or headersHelper is required for provider "${e.provider}"` });
  }), ta = /^[a-z_]{1,32}(?::[a-z_]{1,32})?$/, oa = /^[a-z][a-z0-9_]{0,31}$/, Bb = /^[A-Za-z0-9._-]{1,36}$/, Vb = c.z.object({ ...gn, server: mn("github", r.msg({ defaultMessage: "GitHub", id: "McpBuiltinServerGithubOpt" }), { availableInVersion: "1.25927.0" }), clientId: a.subfield(c.z.string().trim().refine((e) => Bb.test(e), { error: "clientId must be the GitHub app's client ID (letters, digits, or ._- \u2014 at most 36 characters)" }), { label: r.msg({ defaultMessage: "Client ID", id: "McpBuiltinClientId" }), support: { availableInVersion: "1.25927.0" }, mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "GitHub OAuth app client ID (device flow must be enabled on the app).", id: "McpBuiltinGithubClientIdHint" })) }, predicates: { show: mt, required: mt }, requiredMessage: r.msg({ defaultMessage: "Required for this built-in server.", id: "McpBuiltinClientIdReq2" }) }), host: a.subfield(Bo($t({ rejectLoopback: true }).transform((e, t) => {
    try {
      return new URL(e).origin;
    } catch (o) {
      return t.addIssue("must use https with a non-loopback host"), c.z.NEVER;
    }
  }).optional()), { label: r.msg({ defaultMessage: "GitHub Enterprise Server URL", id: "McpBuiltinGithubHost" }), support: { availableInVersion: "1.25927.0" }, mono: true, placeholder: r.msg({ defaultMessage: "https://github.example.com", id: "McpBuiltinGithubHostPh" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Leave blank for github.com. For GitHub Enterprise Server, your instance\u2019s base URL.", id: "McpBuiltinGithubHostHint" }), { docsOnly: false }) }, predicates: { show: mt } }), scope: a.subfield(Bo(c.z.string().trim().transform((e) => e.split(/\s+/)).refine((e) => e.every((t) => ta.test(t)), { error: (e) => `invalid GitHub scope token(s) ${ln(e.input, (t) => ta.test(t), 20, 12)} \u2014 expected lowercase scope names like "repo read:org"` }).transform((e) => e.join(" ")).optional()), { label: r.msg({ defaultMessage: "Access", id: "McpBuiltinGithubScope" }), support: { availableInVersion: "1.25927.0" }, mono: true, placeholder: r.msg({ defaultMessage: "repo read:org", id: "McpBuiltinGithubScopePh" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Space-separated GitHub OAuth scopes. If blank, Desktop\u2019s default read set is used. Ignored for GitHub Apps (permissions come from the app registration).", id: "McpBuiltinGithubScopeHint" })) }, predicates: { show: mt } }), toolsets: a.subfield(Bo(c.z.string().trim().transform((e) => e.split(",").map((t) => t.trim()).filter((t) => t !== "")).refine((e) => e.length > 0 && e.every((t) => oa.test(t)), { error: (e) => {
    if ((Array.isArray(e.input) ? e.input : []).length === 0) return "toolsets must name at least one toolset (or be omitted)";
    return `invalid toolset token(s) ${ln(e.input, (o) => oa.test(o), 20, 12)} \u2014 expected comma-separated ids like "repos,issues"`;
  } }).transform((e) => e.join(",")).optional()), { label: r.msg({ defaultMessage: "Toolsets", id: "McpBuiltinGithubToolsets" }), support: { availableInVersion: "1.25927.0" }, mono: true, placeholder: r.msg({ defaultMessage: "context,repos,issues,pull_requests", id: "McpBuiltinGithubToolsetsPh" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Comma-separated github-mcp-server toolsets to enable. If blank, the bundled server\u2019s default toolsets are used.", id: "McpBuiltinGithubToolsetsHint" }), { docsOnly: false }) }, predicates: { show: mt } }), readOnly: a.subfield(c.z.preprocess((e) => e === "true" ? true : e === "false" ? false : e, c.z.boolean().optional()), { label: r.msg({ defaultMessage: "Read-only", id: "McpBuiltinGithubReadOnly" }), support: { availableInVersion: "1.25927.0" }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Offer only read tools \u2014 the server registers no write tools at all.", id: "McpBuiltinGithubReadOnlyHint" }), { docsOnly: false }) }, predicates: { show: mt } }), toolPolicy: Xt, scopes: ba }), Fb = c.z.union([zb, Kb, Vb]);
  function Gb(e) {
    let t = K.applyLegacy(st.MCP_ENTRY_OAUTH_SCOPES_LIST, K.applyLegacy(st.MCP_ENTRY_OAUTH_SCALAR, e));
    return K.applyLegacy(st.MCP_ENTRY_TRANSPORT_MISSING, t);
  }
  function bn(e) {
    if (!Mo(e)) return e;
    let t = K.applyLegacy(st.MCP_ENTRY_TRANSPORT_BUILTIN, K.applyLegacy(st.MCP_ENTRY_TOOL_POLICY_ASK_SESSION, K.applyLegacy(st.MCP_ENTRY_SOURCE, e)));
    if (t.server !== void 0) {
      if (t.scope === null || typeof t.scope === "string" && t.scope.trim() === "") {
        let { scope: o, ...s } = t;
        t = s;
      }
      if (t.scopes === null) {
        let { scopes: o, ...s } = t;
        t = s;
      }
      return K.applyLegacy(st.MCP_ENTRY_SCOPES_LIST, t);
    }
    return Gb(t);
  }
  st.DirectMcpServerConfig = c.z.preprocess(bn, c.z.union([Fb, c.z.discriminatedUnion("transport", [st.RemoteDirectMcpServerConfig, Lb, Ub])]));
  function Pa(e) {
    return e.transport !== st.MCP_TRANSPORT_POLICY_ONLY;
  }
  function Wb(e) {
    return (e !== null && e !== void 0 ? e : []).filter(Pa);
  }
  function bt(e) {
    return e.server !== void 0;
  }
  function qb(e) {
    var t;
    switch (e.server) {
      case "microsoft365": {
        let o = st.AZURE_CLOUD_HOSTS[(t = e.azureCloud) !== null && t !== void 0 ? t : "global"];
        return [o.graph, o.authority];
      }
      case "websearch": {
        if (e.provider === "custom") return Ve.singleHostEgress(e.customUrl);
        return [st.WEB_SEARCH_PROVIDER_HOSTS[e.provider]];
      }
      case "github": {
        let o = typeof e.host === "string" ? e.host.trim() : "";
        if (o === "") return ["github.com", "api.github.com"];
        let s = sa.egressAddress(o);
        if (s === void 0) return [];
        return s === "github.com" ? ["github.com", "api.github.com"] : [s];
      }
    }
  }
  function jb(e) {
    return e === null || e === void 0 ? void 0 : e.find((t) => bt(t) && t.server === "websearch");
  }
  function Yb(e) {
    return !!e && ut(e);
  }
  st.BUILTIN_DEFAULT_TOOL_POLICY = { microsoft365: { outlook_send_mail: "ask", outlook_forward_mail: "ask", outlook_send_draft: "ask", outlook_create_draft: "ask", outlook_create_reply_draft: "ask", outlook_create_reply_all_draft: "ask", outlook_update_draft: "ask", outlook_delete_draft: "ask", outlook_batch_delete_messages: "ask", outlook_trash_thread: "ask", outlook_untrash_thread: "ask", outlook_create_event: "ask", outlook_update_event: "ask", outlook_delete_event: "ask", outlook_respond_to_event: "ask", outlook_create_label: "ask", outlook_update_label: "ask", outlook_delete_label: "ask", outlook_modify_labels: "ask", outlook_modify_thread_labels: "ask", outlook_batch_modify_labels: "ask", outlook_create_filter: "ask", outlook_delete_filter: "ask", outlook_set_vacation: "ask", sharepoint_upload_file: "ask", sharepoint_update_file: "ask", sharepoint_create_folder: "ask", sharepoint_rename_item: "ask", sharepoint_move_item: "ask", sharepoint_copy_item: "ask", sharepoint_delete_item: "ask", teams_send_chat_message: "ask", teams_send_channel_message: "ask", teams_reply_channel_message: "ask", teams_create_chat: "ask" }, github: { create_or_update_file: "ask", delete_file: "ask", push_files: "ask", create_repository: "ask", fork_repository: "ask", create_branch: "ask", create_issue: "ask", update_issue: "ask", add_issue_comment: "ask", add_sub_issue: "ask", remove_sub_issue: "ask", reprioritize_sub_issue: "ask", assign_copilot_to_issue: "ask", create_pull_request: "ask", update_pull_request: "ask", update_pull_request_branch: "ask", merge_pull_request: "ask", create_and_submit_pull_request_review: "ask", create_pending_pull_request_review: "ask", add_comment_to_pending_review: "ask", submit_pending_pull_request_review: "ask", delete_pending_pull_request_review: "ask", request_copilot_review: "ask", run_workflow: "ask", rerun_workflow_run: "ask", rerun_failed_jobs: "ask", cancel_workflow_run: "ask", delete_workflow_run_logs: "ask", dismiss_notification: "ask", mark_all_notifications_read: "ask", manage_notification_subscription: "ask", manage_repository_notification_subscription: "ask", create_gist: "ask", update_gist: "ask", add_project_item: "ask", delete_project_item: "ask" } };
  st.M365_IRREVERSIBLE_WRITE_TOOLS = /* @__PURE__ */ new Set(["outlook_send_mail", "outlook_send_draft", "outlook_forward_mail", "outlook_create_event", "outlook_update_event", "teams_send_chat_message", "teams_send_channel_message", "teams_reply_channel_message"]);
  st.GITHUB_IRREVERSIBLE_WRITE_TOOLS = /* @__PURE__ */ new Set(["merge_pull_request", "push_files", "create_or_update_file", "delete_file", "run_workflow", "rerun_workflow_run", "rerun_failed_jobs", "delete_workflow_run_logs"]);
  var Ra = { microsoft365: st.M365_IRREVERSIBLE_WRITE_TOOLS, github: st.GITHUB_IRREVERSIBLE_WRITE_TOOLS };
  function jo(e) {
    var t, o;
    let s = bt(e) ? st.BUILTIN_DEFAULT_TOOL_POLICY[e.server] : void 0, n = bt(e) ? Ra[e.server] : void 0;
    if (!s && !e.toolPolicy) return;
    let i = Object.assign(/* @__PURE__ */ Object.create(null), e.toolPolicy), u = e.toolPolicy !== void 0 && Object.hasOwn(e.toolPolicy, "*");
    for (let [p, y] of Object.entries(s !== null && s !== void 0 ? s : {})) {
      let b = e.toolPolicy !== void 0 && Object.hasOwn(e.toolPolicy, p), S = oe.lookupMcpToolPolicy(e.toolPolicy, p);
      if (n === null || n === void 0 ? void 0 : n.has(p)) {
        let M = (t = oe.strictestToolPolicy(y, S)) !== null && t !== void 0 ? t : y;
        if (b || M !== S) i[p] = M;
      } else if (!b && !u) i[p] = (o = oe.strictestToolPolicy(y, S)) !== null && o !== void 0 ? o : y;
    }
    return i;
  }
  function Da(e, t) {
    var o, s, n;
    let i = [], u = [];
    if (!bt(e)) return { uncovered: i, globAllowOnly: u };
    let p = st.BUILTIN_DEFAULT_TOOL_POLICY[e.server];
    for (let y of t) {
      if (((o = y.annotations) === null || o === void 0 ? void 0 : o.readOnlyHint) === true || Object.hasOwn(p !== null && p !== void 0 ? p : {}, y.name)) continue;
      let b = oe.lookupMcpToolPolicy(e.toolPolicy, y.name);
      if (b === void 0) i.push(y.name);
      else if (b === "allow" && !Object.hasOwn((s = e.toolPolicy) !== null && s !== void 0 ? s : {}, y.name) && !Object.hasOwn((n = e.toolPolicy) !== null && n !== void 0 ? n : {}, "*")) u.push(y.name);
    }
    return { uncovered: i, globAllowOnly: u };
  }
  function Zb(e, t) {
    return Da(e, t).uncovered;
  }
  st.MANAGED_MCP_SERVERS_PARSE_FAILED = [];
  var xa = (e) => e === st.MANAGED_MCP_SERVERS_PARSE_FAILED;
  function $b(e) {
    return xa(e.managedMcpServers) || cn(e.orgPluginSettings);
  }
  var Jt = (e) => e && Object.keys(e).length > 0 ? e : void 0;
  function Xb(e) {
    var t;
    if (cn(e)) return { names: [], policyFor: () => ({ "*": "blocked" }) };
    let o = pa(e), s = /* @__PURE__ */ new Map();
    for (let [n, i] of Object.entries(o)) {
      let u = ot.mcpServerNameKey(n);
      s.set(u, (t = oe.strictestOfToolPolicies(s.get(u), i)) !== null && t !== void 0 ? t : i);
    }
    return { names: Object.keys(o), policyFor: (n) => Jt(s.get(ot.mcpServerNameKey(n))) };
  }
  function vn(e) {
    var t;
    return { managed: ((t = e.managedMcpServers) !== null && t !== void 0 ? t : []).map((o) => ({ name: o.name, url: "url" in o ? o.url : void 0, entry: o })), org: Xb(e.orgPluginSettings), managedUnreadable: xa(e.managedMcpServers) };
  }
  function Jb(e) {
    var t;
    let o = jo(e);
    if (!bt(e) || !o) return o;
    let s = Ra[e.server], n = /* @__PURE__ */ Object.create(null);
    for (let [i, u] of Object.entries(o)) if (Object.hasOwn((t = e.toolPolicy) !== null && t !== void 0 ? t : {}, i) || (s === null || s === void 0 ? void 0 : s.has(i))) n[i] = u;
    return Jt(n);
  }
  var Qb = (e) => !bt(e) || Jt(e.toolPolicy) !== void 0;
  function _n(e, t) {
    if (e.managedUnreadable) return { "*": "blocked" };
    let o = ot.matchMcpServerIdentity(t, e.managed), s = !o ? [] : (o.by === "url" ? [o.match] : o.named).filter((n) => Qb(n.entry));
    if (s.length > 0) return Jt(s.map((n) => Jb(n.entry)).reduce(oe.strictestOfToolPolicies, void 0));
    return e.org.policyFor(t.name);
  }
  function La(e, t) {
    return _n(vn(e), t);
  }
  function Ua(e) {
    var t;
    let o = vn(e), s = new Set(o.managed.map((i) => ot.normalizeMcpServerName(i.name))), n = /* @__PURE__ */ Object.create(null);
    for (let i of o.org.names) {
      if (s.has(ot.normalizeMcpServerName(i))) continue;
      let u = _n(o, { name: i });
      if (u) n[i] = u;
    }
    for (let i of (t = e.managedMcpServers) !== null && t !== void 0 ? t : []) {
      let u = Jt(jo(i));
      if (u) n[i.name] = u;
    }
    return n;
  }
  function e0(e) {
    let t = vn(e), o = /* @__PURE__ */ Object.create(null);
    for (let s of [...t.org.names, ...t.managed.map((n) => n.name)]) {
      let n = _n(t, { name: s });
      if (n) o[s] = n;
    }
    return o;
  }
  function t0(e, t) {
    let { poolConfig: o, freshConfig: s } = t, n = o ? jo(o) : void 0, i = !s ? void 0 : (o === null || o === void 0 ? void 0 : o.origin) === "org-plugin" ? La(s, { name: e, url: "url" in o ? o.url : void 0 }) : Ua(s)[e];
    if (!n && !i) return;
    let u = n !== null && n !== void 0 ? n : {}, p = i !== null && i !== void 0 ? i : {}, y = /* @__PURE__ */ Object.create(null);
    for (let S of /* @__PURE__ */ new Set([...Object.keys(u), ...Object.keys(p)])) {
      if (S === "*") continue;
      let M = oe.strictestToolPolicy(oe.lookupMcpToolPolicy(u, S), oe.lookupMcpToolPolicy(p, S));
      if (M) y[S] = M;
    }
    let b = oe.strictestToolPolicy(u["*"], p["*"]);
    if (b !== void 0 && (b !== "allow" || u["*"] !== void 0)) y["*"] = b;
    return Jt(y);
  }
  function o0(e, t) {
    return { name: t, transport: e.type, url: e.url, headers: e.headers, oauth: s0(e.oauth) };
  }
  function s0(e) {
    if (typeof e === "number" || typeof e === "string") return e ? true : void 0;
    return Mo(e) ? ka(e) : e;
  }
  function n0(e) {
    return (e.transport === "http" || e.transport === "sse") && Boolean(e.oauth);
  }
  function r0(e) {
    var t;
    if (e.transport !== "http" && e.transport !== "sse") return false;
    if (e.oauth) return true;
    if (e.headersHelper) return false;
    return !Object.keys((t = e.headers) !== null && t !== void 0 ? t : {}).some((o) => o.toLowerCase() === "authorization");
  }
  st.ManagedMcpServers = a.annotate(c.z.array(st.DirectMcpServerConfig.nullable().catch(null)), { maxItems: 100 }).transform((e) => e.filter((t) => t !== null)).refine((e) => new Set(e.map((t) => t.name)).size === e.length, { message: "MCP server names must be unique" }).refine((e) => e.filter((t) => bt(t) && t.server === "websearch").length <= 1, { message: "At most one WebSearch built-in entry is allowed" });
  var i0 = /* @__PURE__ */ new Set(["clientId", "clientSecret", "clientSecretHelper", "authorizationServer", "tenantId", "callbackHost", "callbackPort", "authorizationUrl", "tokenUrl"]);
  function a0(e) {
    if (e === null || typeof e !== "object") return 0;
    let t = e;
    if ("mode" in t) return 3;
    return Object.keys(t).some((o) => i0.has(o)) ? 2 : 1;
  }
  function l0(e) {
    let t = Ca(e), o = Ea[a0(t)].safeParse(t);
    return o.success ? [] : o.error.issues;
  }
  function Ha(e, t) {
    let o = t && typeof t === "object" ? t : void 0, s = o !== void 0 && (o.server !== void 0 || o.transport === "builtin"), n = (o === null || o === void 0 ? void 0 : o.server) === "websearch" ? 1 : (o === null || o === void 0 ? void 0 : o.server) === "github" ? 2 : 0, i = (S, M) => S.flatMap((C) => {
      var x, W;
      if (C.code !== c.z.ZodIssueCode.invalid_union) return [C];
      let q = (x = C.errors) !== null && x !== void 0 ? x : [], ae = (W = q[M === 0 ? s ? 0 : 1 : n]) !== null && W !== void 0 ? W : q[0];
      if (!ae) return [C];
      let te = i(ae, M + 1);
      return C.path.length === 0 ? te : te.map((Be) => ({ ...Be, path: [...C.path, ...Be.path] }));
    }), u = i(e.issues, 0), p = u.findIndex((S) => S.path[0] === "oauth");
    if (s || p === -1) return u;
    let y = bn(t), b = i(l0(y !== null && typeof y === "object" ? y.oauth : void 0), 1);
    return b.length === 0 ? u : u.flatMap((S, M) => S.path[0] !== "oauth" ? [S] : M === p ? b.map((C) => ({ ...C, path: ["oauth", ...C.path] })) : []);
  }
  function d0(e, t) {
    if (!Array.isArray(e)) return;
    e.forEach((o, s) => {
      let n = st.DirectMcpServerConfig.safeParse(o);
      if (n.success) return;
      let i = o && typeof o === "object" ? o.name : void 0, u = typeof i === "string" ? `"${i}"` : `[${s}]`, p = Ha(n.error, o).map((y) => `${y.path.join(".") || "."}: ${y.message}`).join("; ");
      t(`managedMcpServers entry ${u} dropped \u2014 ${p}`);
    });
  }
  var c0 = c.z.object({ toolPolicy: st.ToolPolicySchema.optional() }), Na = c.z.object({ serverName: c.z.string().min(1), tools: c.z.array(dn).default([]) });
  function u0(e) {
    var t;
    let o = za(e);
    for (let s of Array.isArray(o) ? o : []) {
      let n = Na.safeParse(s), i = n.success ? void 0 : n.error.issues.find((y) => y.path[0] === "tools"), [, u, p] = (t = i === null || i === void 0 ? void 0 : i.path) !== null && t !== void 0 ? t : [];
      if (typeof u === "number" && (p === "toolName" || p === "permission")) {
        let y = s, b = y.tools[u];
        return { serverName: typeof y.serverName === "string" ? y.serverName : "", tool: u + 1, toolName: typeof (b === null || b === void 0 ? void 0 : b.toolName) === "string" ? b.toolName : "", field: p };
      }
    }
    return;
  }
  function p0(e, t) {
    return `${e}: ${JSON.stringify(t)} is not a recognized permission \u2014 treated as "blocked"`;
  }
  function za(e) {
    return K.applyLegacy(st.ORG_PLUGIN_PERMISSION_ASK_SESSION, e);
  }
  function h0(e, t) {
    let o = za(e), s = (i, u) => t(p0(i, u), "drop");
    if (Array.isArray(o)) {
      o.forEach((i, u) => {
        var p;
        let y = i && typeof i === "object" ? i.serverName : void 0, b = typeof y === "string" && y ? `"${y}"` : `[${u}]`, S = Na.safeParse(i);
        if (!S.success) for (let M of S.error.issues) {
          let C = M.path.join(".");
          t(C ? `orgPluginSettings entry ${b}.${C} dropped \u2014 ${M.message}` : `orgPluginSettings entry ${b} dropped \u2014 ${M.message}`);
        }
        if (!ua.safeParse(i).success) return;
        (p = i.tools) === null || p === void 0 || p.forEach((M, C) => {
          if (He(M) && !Ao(M.permission) && dn.safeParse(M).success) s(`orgPluginSettings entry ${b}.tools.${C}.permission`, M.permission);
        });
      });
      return;
    }
    if (!o || typeof o !== "object") return;
    na.reportUnread("orgPluginSettings", da, o, t);
    let n = o.mcpServers;
    if (!n || typeof n !== "object") return;
    for (let [i, u] of Object.entries(n)) {
      if (He(u) && He(u.toolPolicy)) {
        for (let [y, b] of Object.entries(u.toolPolicy)) if (!Ao(b)) s(`orgPluginSettings.mcpServers["${i}"].toolPolicy.${y}`, b);
      }
      let p = c0.safeParse(u);
      if (p.success) continue;
      for (let y of p.error.issues) {
        if (y.path[0] === "toolPolicy" && y.path.length === 2) continue;
        let b = y.path.join(".");
        if (b) t(`orgPluginSettings.mcpServers["${i}"].${b} dropped \u2014 ${y.message}`);
        else t(`orgPluginSettings.mcpServers["${i}"] reset to {} \u2014 ${y.message}`, "reset");
      }
    }
  }
  var wn = [(e) => !!e.issuer || !!(e.authorizationUrl && e.tokenUrl), { message: "either issuer, or both authorizationUrl and tokenUrl, required" }];
  function f0(e) {
    if (e.issuer) return { via: "issuer", issuer: e.issuer };
    if (e.authorizationUrl && e.tokenUrl) return { via: "explicit", authorizationUrl: e.authorizationUrl, tokenUrl: e.tokenUrl };
    return;
  }
  function g0(e) {
    return e.via === "issuer" ? [e.issuer] : [e.authorizationUrl, e.tokenUrl];
  }
  var m0 = r.msg({ defaultMessage: "https://login.microsoftonline.com/TENANT/v2.0", id: "NUASktdfTk" }), Ka = a.shortDescription(r.msg({ defaultMessage: "HTTPS issuer with OIDC discovery. Set this, or set the authorization and token URLs instead.", id: "DCv1t4qBS8" }), { docsOnly: false }), Eo = { clientId: a.subfield(c.z.string().min(1), { label: r.msg({ defaultMessage: "Client ID", id: "U5+MBCY8VU" }), mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "OAuth client ID of the desktop app registration at your identity provider (public client, PKCE).", id: "sBee1uqc2i" })) } }), issuer: a.subfield(st.httpsUrl.optional(), { label: r.msg({ defaultMessage: "Issuer URL", id: "159pClRrG6" }), mono: true, description: { short: Ka } }), authorizationUrl: a.subfield(st.httpsUrl.optional(), { label: r.msg({ defaultMessage: "Authorization URL", id: "uiL7XCPiaV" }), mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "HTTPS authorization endpoint. Used with the token URL when no issuer is set.", id: "xmuFH0zG0s" })) }, predicates: { show: (e) => !e.issuer } }), tokenUrl: a.subfield(st.httpsUrl.optional(), { label: r.msg({ defaultMessage: "Token URL", id: "PJhe0HJqkm" }), mono: true, description: { short: a.shortDescription(r.msg({ defaultMessage: "HTTPS token endpoint. Used with the authorization URL when no issuer is set.", id: "wbCy7GEMfA" })) }, predicates: { show: (e) => !e.issuer } }) }, Ba = a.subfield(st.httpsUrl.optional(), { label: r.msg({ defaultMessage: "Issuer URL", id: "159pClRrG6" }), mono: true, placeholder: m0, description: { short: Ka } }), kn = a.subfield(c.z.number().int().min(1024).max(65535).optional(), { label: r.msg({ defaultMessage: "Redirect port", id: "A9/lbJqU6I" }), placeholder: r.msg({ defaultMessage: "(ephemeral)", id: "ErCpG12/4F" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Fixed loopback port for the sign-in redirect. Leave unset to use a free port each time.", id: "l8sJgEPNMT" })) } }), Cn = a.subfield(c.z.enum(st.CALLBACK_HOST_OPTIONS).optional(), { label: r.msg({ defaultMessage: "Redirect host", id: "c2ud3LKk3t" }), placeholder: r.msg({ defaultMessage: "127.0.0.1", id: "L4dIq9u0LB" }), support: { availableInVersion: "2.110.0" }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Use localhost only if your IdP\u2019s registered redirect URI specifies it.", id: "CncIVWXmvt" }), { docsOnly: false }) } }), y0 = a.subfield(c.z.boolean().optional(), { label: r.msg({ defaultMessage: "Omit offline_access", id: "rXMEZQ7FqD" }), support: { availableInVersion: "1.17377.1" }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Only enable if your IdP rejects the offline_access scope on this client. Without it the app prompts for sign-in each time the token expires.", id: "pkUlgTwVU2" }), { docsOnly: false }) } });
  st.BootstrapOidc = c.z.object({ ...Eo, scopes: a.subfield(c.z.string().min(1).optional(), { label: r.msg({ defaultMessage: "Scopes", id: "joDyyj/N+j" }), placeholder: r.msg({ defaultMessage: "openid profile email offline_access", id: "TVC7JJ1/zv" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Space-separated scopes. Defaults to openid profile email offline_access.", id: "ljYP8yiNNh" })) } }), redirectPort: kn, redirectHost: Cn, omitOfflineAccess: y0, additionalRedirectReferrerHosts: qo({ availableInVersion: "1.20186.0" }) }).refine(...wn);
  st.BootstrapFetchOidc = c.z.object({ ...Eo, issuer: Ba, scopes: a.subfield(c.z.string().min(1).optional(), { label: r.msg({ defaultMessage: "Scopes", id: "joDyyj/N+j" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Space-separated; the token\u2019s audience must match what your bootstrap server validates.", id: "eWCA/3rEU6" }), { docsOnly: false }) }, placeholder: r.msg({ defaultMessage: "openid offline_access CLIENT_ID/.default", id: "fSKoqI4XSt" }), predicates: { required: (e) => Boolean(e.clientId || e.issuer || e.authorizationUrl || e.tokenUrl) }, requiredMessage: r.msg({ defaultMessage: "Required. Set the scope your bootstrap server accepts as the token audience.", id: "WtkDPX8usa" }) }), redirectPort: kn, redirectHost: Cn, additionalRedirectReferrerHosts: qo({ availableInVersion: "1.20186.0" }) }).refine(...wn).refine((e) => {
    var t;
    return !!((t = e.scopes) === null || t === void 0 ? void 0 : t.trim());
  }, { message: "required", path: ["scopes"] });
  var b0 = /* @__PURE__ */ new Set(["openid", "profile", "email", "address", "phone", "offline_access"]);
  function v0(e) {
    if (typeof e !== "string") return false;
    return e.split(/\s+/).filter(Boolean).some((t) => !b0.has(t));
  }
  var _0 = a.subfield(c.z.string().min(1).optional(), { label: r.msg({ defaultMessage: "Scopes", id: "joDyyj/N+j" }), placeholder: r.msg({ defaultMessage: "openid profile email offline_access", id: "TVC7JJ1/zv" }), description: { short: a.shortDescription(r.msg({ defaultMessage: "Space-separated scopes. Required in access-token mode: set the gateway or proxy API scope. offline_access is appended automatically unless disabled below.", id: "VsPAC2z1YR" })) }, predicates: { required: (e) => e.bearerTokenType === "access_token" }, requiredMessage: r.msg({ defaultMessage: "Required for access-token mode. Set the API scope of the gateway or proxy (e.g. api://gateway/.default). offline_access is appended automatically for silent refresh unless disabled below.", id: "1h3eSFXQWm" }) });
  st.GatewayOidc = c.z.object({ clientId: Eo.clientId, issuer: Ba, authorizationUrl: Eo.authorizationUrl, tokenUrl: Eo.tokenUrl, bearerTokenType: a.subfield(c.z.enum(["id_token", "access_token"]).default("id_token"), { label: r.msg({ defaultMessage: "Bearer token", id: "q3e4cfMU7E" }), optionLabels: { id_token: r.msg({ defaultMessage: "ID token (default)", id: "ECdFElAw3s" }), access_token: r.msg({ defaultMessage: "Access token", id: "uTSSg3isX7" }) }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Which token to send as the bearer. Use access token for a gateway or proxy that validates as an OAuth resource server.", id: "LChYqT/3kH" }), { docsOnly: false }), long: a.longDescription("In **access-token** mode the token's audience must be your gateway or proxy. On IdPs where the requested scopes decide the audience (**Entra ID**), include its API resource scope in `scopes` \u2014 `api://<gateway-app-id>/.default`, or a named delegated scope you exposed via *Expose an API*. With only the standard OIDC scopes (`openid profile email offline_access`) Entra returns a v1.0 Microsoft Graph token whose issuer (`https://sts.windows.net/<tenant>/`) doesn't match the v2.0 issuer configured here, so a gateway that validates `iss` rejects it. On IdPs that set the access-token audience out-of-band (Keycloak audience mapper, Auth0 default audience, Okta custom authorization server), a resource scope in `scopes` isn't required \u2014 the audience comes from the IdP-side configuration.", { docsOnly: false }) } }), scopes: _0, appendOfflineAccess: a.subfield(c.z.boolean().default(true), { label: r.msg({ defaultMessage: "Append offline_access", id: "aZEuarDLlh" }), support: { availableInVersion: "1.11847.0" }, default: true, predicates: { show: (e) => e.bearerTokenType === "access_token" }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Automatically append offline_access to scopes so the IdP returns a refresh token for silent refresh.", id: "ojtzwQNuA9" }), { docsOnly: false }), long: a.longDescription("Turn off only if your authorization server rejects `offline_access` as an unknown scope; include the server\u2019s own refresh-token scope in **Scopes** instead.", { docsOnly: false }) } }), resource: a.subfield(st.audienceIdentifier.optional(), { label: r.msg({ defaultMessage: "Resource indicator (RFC 8707)", id: "GvbH4FD2vl" }), support: { availableInVersion: "1.30096.1" }, mono: true, predicates: { show: (e) => e.bearerTokenType === "access_token" || !!e.resource }, description: { short: a.shortDescription(r.msg({ defaultMessage: "Access-token audience of the gateway or proxy: an https URL or an AD FS relying-party identifier, sent as the RFC 8707 resource. Leave unset for Entra ID.", id: "qEr2KAluiP" })), long: a.longDescription("Set this only for an IdP that implements RFC 8707 resource indicators. The app then sends `resource=<value>` on the authorization, token and refresh requests, so the access token the IdP issues is audience-restricted to the gateway or proxy rather than to the IdP's own APIs. Use it with `bearerTokenType: access_token`; in `id_token` mode the ID token's audience is always `clientId`. Ignored with the OS-broker sign-in flow (the sign-in flow key set to `broker`), which is Entra-only.\n\n**Microsoft Entra ID:** leave unset \u2014 the v2.0 endpoint rejects `resource`; request the API scope in `scopes` instead (`api://<gateway-app-id>/.default`). **AD FS:** enter one of the relying-party trust's identifiers, spelled as it is registered there. A value with no scheme (a host name with or without a port or path, a single name, or a GUID; `name:digits` also reads as a host name with a port) is sent as `https://<value>`; an identifier with a scheme of its own (`urn:\u2026`, or an organization-defined one such as `VENDOR:URI:\u2026`) is sent exactly as written. A trust whose only identifier is a bare name or GUID will not match, because those are sent as `https://<value>`: add an `https://\u2026` or `urn:\u2026` identifier to the trust and enter that one here. With any other identity provider, use an absolute URI without a fragment (RFC 8707 \u2014 the IdP rejects one as `invalid_target`). Changing it signs users in again.") } }), redirectPort: kn, redirectHost: Cn, additionalRedirectReferrerHosts: qo({ availableInVersion: "1.20186.0" }) }).refine(...wn).refine((e) => {
    var t;
    return e.bearerTokenType !== "access_token" || !!((t = e.scopes) === null || t === void 0 ? void 0 : t.trim());
  }, { message: "scopes is required when bearerTokenType is access_token", path: ["scopes"] });
});
var Ime = (0, import_chunk_w1d7ygsk.V)(function(bl) {
  var Nn, zn;
  Object.defineProperty(bl, "__esModule", { value: true });
  bl.inferenceCredentialKindField = bl.providerHasDiscovery = bl.PROVIDER_SELECTOR_ENV_FLAGS = bl.isBedrockFamily = bl.PROVIDER_CLI_FLAG = bl.CREDENTIAL_KINDS_FOR_PROVIDER = bl.PROVIDER_ARMS = bl.InferenceConfig = bl.AwsSigV4Credential = bl.whereIdpKeysExist = bl.GATEWAY_INTERACTIVE_WITH_IDP = bl.GATEWAY_IDP_AUTH_FLOW_KEY = bl.GATEWAY_IDP_OIDC_KEY = bl.IDP_AUTH_FLOW_FLAT_KEY = bl.IDP_OIDC_FLAT_KEY = bl.idpSignInShape = bl.VERTEX_INTERACTIVE_WITH_AUDIENCE = bl.VERTEX_OAUTH_CREDENTIAL_KIND = bl.GATEWAY_AUTH_SCHEME_AUTO = bl.GATEWAY_AUTH_SCHEME_SSO = bl.HelperScriptCreds = bl.helperScriptLeaves = bl.AWS_IAM_ROLE_ARN_RE = void 0;
  bl.editorListsGatewayIdpNotices = xv;
  bl.gatewayIdpMovedKeyPairs = Lv;
  bl.formerGatewayIdpKeyOf = Uv;
  bl.providerCliFlagEnv = Xv;
  bl.kindSupportsDiscovery = yl;
  bl.credentialYieldsBearer = Jv;
  var m = require("/$bunfs/root/chunk-wymn8pmt.js"), al = xCr(), Fe = Lwe(), se = dX(), l = Vk(), A = T4(), d = vj(), _e = NZ(), _t = gGt(), Vn = m.z.string().trim().regex(se.AWS_REGION_RE, "must be a valid AWS region (e.g. us-east-1)"), bv = m.z.string().trim().regex(se.GCP_REGION_RE, "must be a GCP region (e.g. us-east5), a multi-region ('eu'/'us'), or 'global'"), vv = m.z.string().trim().regex(se.FOUNDRY_RESOURCE_RE, "must be an Azure resource name (lowercase letters, digits and hyphens)"), ll = m.z.string().trim().regex(se.GCP_PROJECT_RE, "must be a GCP project ID or number (e.g. my-gcp-project)");
  bl.AWS_IAM_ROLE_ARN_RE = /^arn:aws[a-z-]*:iam::\d{12}:role\/[\w+=,.@/-]+$/;
  var il = A.legacyKvEncodingNotice("inferenceCustomHeaders", "no custom inference headers will be sent"), _v = l.field(l.annotate(A.kvRecord(il).optional(), { redact: "presence" }), { flatKey: "inferenceCustomHeaders", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Custom inference headers", id: "6T78KTXhBM" }), legacyFlatKey: { name: "inferenceGatewayHeaders", effect: "no custom inference headers will be sent", ...Fe.BATCH_2026_09 }, deprecations: [il], category: "connection", order: 80, addLabel: d.msg({ defaultMessage: "Add header", id: "IxbsWX4wj4" }), placeholder: { key: d.msg({ defaultMessage: "X-Header-Name", id: "+gBb3x0fj/" }), value: d.msg({ defaultMessage: "value", id: "7CyD7ey2Aw" }) }, description: { short: l.shortDescription(d.msg({ defaultMessage: "Extra headers on every inference request \u2014 routing and tenant headers only (org IDs, Bedrock Guardrails). No credentials; use the credential helper for tokens.", id: "InfCustomHeadersHint2" })), long: l.longDescription("Sent on every inference and model-discovery request (joined into the CLI's `ANTHROPIC_CUSTOM_HEADERS`).\n\nUse this for fleet-wide, non-secret constants. **Do not put API keys, bearer tokens or other credentials here** \u2014 this map is stored and distributed as plain configuration. For tokens, and for per-user or per-session values, have the **credential helper script** emit JSON with a `headers` field; those are merged over these static entries (helper wins on conflict).") }, predicates: { warn: (e, t, o) => al.credentialHeadersWarn(e, o, "credentialHelper") } }), wv = l.field(m.z.coerce.number().int().positive().optional(), { flatKey: "inferenceSessionLifetimeSec", support: { enabled: { scopes: ["3p"], availableInVersion: "1.14271.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Sign-in session lifetime", id: "InfSessLifetime" }), category: "connection", suffix: d.msg({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }), predicates: { show: (e) => {
    var t, o;
    let s = (o = (t = e.inference) === null || t === void 0 ? void 0 : t.credential) === null || o === void 0 ? void 0 : o.kind;
    return s !== void 0 && _t.SIGN_IN_CREDENTIAL_KINDS.includes(s);
  } }, description: { short: l.shortDescription(d.msg({ defaultMessage: "How long a sign-in stays valid under your IdP\u2019s session policy. Shows a re-authenticate banner before it expires.", id: "InfSessLifeHint" })) } }), eo = { customHeaders: _v, sessionLifetimeSec: wv }, kv = l.field(l.annotate(m.z.string().trim().optional(), { pathKind: "file" }), { flatKey: "inferenceCredentialHelper", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Helper script", id: "DnXPcFgmqb" }), category: "connection", group: A.HELPER_SCRIPT_GROUP, order: -10, predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "/usr/local/bin/corp-cred-helper", id: "19vfTFVJFY" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Absolute path to an executable that prints the credential, optionally with per-request headers.", id: "pBgZotXlmX" })), long: l.longDescription('Claude runs the executable with the entries of **Helper script arguments** as its arguments (none by default) and reads **stdout** (trimmed). Exit code must be `0`; any output on **stderr** is logged but ignored. **Stdout must contain only one of the formats below** (no banners, prompts, or log lines).\n\n**Output format** is either:\n- a single bare token (the API key / bearer token), or\n- a JSON object `{"token": "...", "headers": {"Name": "Value", ...}}` when per-request headers are needed (merged over **Custom inference headers**, helper wins on conflict)\n\nThe helper receives `CLAUDE_HELPER_CONTEXT` in its environment (`interactive`, `mid-session-refresh`, `background`, `scheduled-task`, `setup-test`) so it can decide whether to prompt the user \u2014 see the credential-helper docs for the full contract.\n\nResult is cached for the TTL below. On TTL expiry the helper is re-invoked transparently (no user prompt, no relaunch).\n\n**Expiry and refresh:** the app checks the active credential\'s expiry before each turn and refreshes silently when possible (re-runs the helper, or uses the stored refresh token for interactive sign-in kinds). If the provider returns HTTP 401 mid-turn, the same silent refresh is attempted before surfacing an error. When silent refresh fails, a prompt appears with a provider-specific action (re-sign-in for interactive kinds; admin-contact for static credentials). Applies to all providers, and to both Cowork and Code.\n\n**Typical use:** a shell script that pulls from Keychain, 1Password CLI, or an internal secret broker. Example:\n\n`security find-generic-password -s anthropic-api -w`\n\nIf this field is set, static credential fields (API key, bearer token) are ignored. The helper always wins.') } }), Cv = l.field(m.z.coerce.number().int().positive().optional(), { flatKey: "inferenceCredentialHelperTtlSec", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Helper script TTL", id: "RtLYfLZ2bT" }), default: 3600, category: "connection", group: A.HELPER_SCRIPT_GROUP, order: -9, suffix: d.msg({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Helper output is cached for this many seconds; once it expires the helper re-runs without a relaunch (before the next turn when set above 120).", id: "Iyb8zIzeLu" })) }, predicates: { show: (e) => Boolean(A.credentialHelperCommandOf(e)) } }), Sv = l.field(m.z.coerce.number().int().positive().max(600).optional(), { flatKey: "inferenceCredentialHelperTimeoutSec", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" } }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Credential helper timeout", id: "x8r3+rMaHq" }), default: 60, category: "connection", group: A.HELPER_SCRIPT_GROUP, order: -8, suffix: d.msg({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Maximum wait for the helper executable to finish. Raise this if the helper opens a browser for interactive sign-in.", id: "mWsGjRx48v" })) }, predicates: { show: (e) => Boolean(A.credentialHelperCommandOf(e)) } }), Ev = l.field(m.z.boolean().optional(), { flatKey: "inferenceCredentialHelperSilentRefreshEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Re-run helper for silent refresh", id: "iLlsz1BLkf" }), default: true, failClosedValue: false, category: "connection", group: A.HELPER_SCRIPT_GROUP, order: -7, description: { short: l.shortDescription(d.msg({ defaultMessage: "On credential expiry, re-run the helper (CLAUDE_HELPER_CONTEXT=mid-session-refresh) to recover silently. Turn off if the helper can\u2019t run non-interactively.", id: "8KuyIP86Pe" })) }, predicates: { show: (e) => Boolean(A.credentialHelperCommandOf(e)) } }), Av = l.field(l.annotate(m.z.string().optional(), { redact: "hash" }), { flatKey: "inferenceBedrockProfile", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "AWS profile name", id: "7vTavgWpok" }), category: "connection", placeholder: d.msg({ defaultMessage: "default", id: "FiXNt10l2f" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "AWS named profile to use for Bedrock inference credentials.", id: "InfBedrockProfileHint" }), { docsOnly: true }) } }), Ov = l.field(l.annotate(m.z.string().optional(), { pathKind: "folder" }), { flatKey: "inferenceBedrockAwsDir", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "AWS config directory", id: "+/yYn89HLV" }), category: "connection", placeholder: d.msg({ defaultMessage: "~/.aws", id: "pz/AYYggAV" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Folder with AWS config/credentials. Defaults to ~/.aws when no bearer token is set.", id: "+iG8JNhLmB" })) } }), Mv = l.field(l.annotate(m.z.string().trim().optional(), { pathKind: "file" }), { flatKey: "inferenceBedrockAwsCliPath", support: { enabled: { scopes: ["3p"], availableInVersion: "1.13576.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "AWS CLI path", id: "tiw5Kg3lNu" }), category: "connection", placeholder: d.msg({ defaultMessage: "/usr/local/bin/aws", id: "r5vv3VwyH+" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Absolute path to the aws executable. Leave unset to find it on PATH.", id: "aGOycTUbE0" })) } }), dl = l.field(l.annotate(Vn.optional(), { redact: "keep" }), { flatKey: "inferenceBedrockRegion", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "AWS region", id: "idJaPSX8EP" }), egressRequirements: (e, t) => {
    var o, s, n, i;
    if (!e) return [];
    if (((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "mantle") return [(s = se.egressAddress(t.inference.baseUrl)) !== null && s !== void 0 ? s : se.mantleRuntimeHost(e)];
    if (((n = t.inference) === null || n === void 0 ? void 0 : n.provider) !== "bedrock") return [];
    let u = (i = t.inference.credential) === null || i === void 0 ? void 0 : i.kind;
    return se.bedrockHosts(e, u === "static" || u === "external-idp", { inferenceHost: se.egressAddress(t.inference.baseUrl), includeControlPlane: u !== "external-idp" });
  }, category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "us-west-2", id: "QxWCILUZ/n" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "AWS region for the Bedrock runtime endpoint.", id: "Sijf7QyRi3" })) } }), es = { rejectLoopback: true, hybrid: { loopback: true }, originPinned: { carries: "local-credential" }, requiresUserConsent: true }, cl = l.field(l.annotate(_e.httpsUrl.optional(), { redact: "hostname" }), { flatKey: "inferenceBedrockBaseUrl", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: es, title: d.msg({ defaultMessage: "Bedrock base URL", id: "GzwfABozww" }), category: "connection", placeholder: (e, t) => {
    var o;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "mantle" ? e.formatMessage({ defaultMessage: "https://bedrock-mantle.us-east-1.api.aws/anthropic", id: "LpWFX2Ofrj" }) : e.formatMessage({ defaultMessage: "https://vpce-0123-abcd.bedrock-runtime.us-east-1.vpce.amazonaws.com", id: "pl7XHUmb+2" });
  }, description: { short: l.shortDescription((e, t) => {
    var o;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "mantle" ? e.formatMessage({ defaultMessage: "Full SDK base URL including the /anthropic path (replaces bedrock-mantle.REGION.api.aws/anthropic).", id: "6XeDArE1XW" }) : e.formatMessage({ defaultMessage: "For VPC endpoints or gateway proxies. Host origin only.", id: "k/mN+Jo2Rg" });
  }) } }), Tv = l.field(l.annotate(m.z.string().optional(), { redact: "drop" }), { flatKey: "inferenceBedrockBearerToken", support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "AWS bearer token", id: "6eMQjpT3Y9" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, description: { short: l.shortDescription(d.msg({ defaultMessage: "Static bearer token for inference. For providers that support profile or helper-script credentials, prefer those.", id: "InfBedrockBearerHint" }), { docsOnly: true }) } }), Iv = m.z.object({ profile: l.subfield(m.z.string().optional(), { label: d.msg({ defaultMessage: "AWS profile name", id: "7vTavgWpok" }), flatKey: "inferenceBedrockProfile", readers: ["desktop", "code"], description: { short: l.shortDescription(d.msg({ defaultMessage: "Passed to the helper script as AWS_PROFILE.", id: "6wPhKgqOn6" })) } }), awsDir: l.subfield(m.z.string().optional(), { label: d.msg({ defaultMessage: "AWS config directory", id: "+/yYn89HLV" }), flatKey: "inferenceBedrockAwsDir", readers: ["desktop", "code"], description: { short: l.shortDescription(d.msg({ defaultMessage: "Directory holding the AWS config and credentials files. Passed to the helper script as AWS_CONFIG_FILE and AWS_SHARED_CREDENTIALS_FILE.", id: "L1uzgaNLUf" })) } }), awsCliPath: l.subfield(m.z.string().optional(), { label: d.msg({ defaultMessage: "AWS CLI path", id: "tiw5Kg3lNu" }), flatKey: "inferenceBedrockAwsCliPath", description: { short: l.shortDescription(d.msg({ defaultMessage: "Absolute path to the aws executable, shared with the Bedrock profile setting. Not passed to the helper script.", id: "35P0bh+Emr" })) } }), region: l.subfield(Vn.optional(), { label: d.msg({ defaultMessage: "AWS region", id: "+x+1RE2/ti" }), flatKey: "inferenceBedrockRegion", readers: ["desktop", "code"], description: { short: l.shortDescription(d.msg({ defaultMessage: "Passed to the helper script as AWS_REGION.", id: "f68mUNmj7g" })) } }) });
  bl.helperScriptLeaves = { command: kv, commandWindows: l.field(l.annotate(_e.safeWindowsHelperPath.optional(), { pathKind: "file" }), { flatKey: "inferenceCredentialHelperWindows", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "2.2553.0" } }, platformVariant: { of: "inferenceCredentialHelper", platform: "win32" }, remotePolicy: { requiresUserConsent: true }, selectsConnection: true, title: d.msg({ defaultMessage: "Helper script (Windows)", id: "xUFWSaPP1w" }), category: "connection", group: A.HELPER_SCRIPT_GROUP, order: -9.9, placeholder: d.msg({ defaultMessage: "C:\\Program Files\\Corp\\cred-helper.exe", id: "xUm3tL647e" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Absolute path of the helper executable on Windows devices, used there instead of Helper script. Leave unset to use Helper script on every operating system.", id: "/E7aYcf6cf" })), long: l.longDescription("When one configuration serves both Windows and macOS or Linux devices, set **Helper script** to the macOS/Linux path and this to the Windows path (`C:\\...` or `C:/...`). Windows devices run this executable with the same arguments, timeout, TTL and environment as **Helper script**; macOS and Linux devices ignore it. An invalid value here stops the connection on Windows devices only. Desktop releases that predate this setting ignore it and run **Helper script** on every operating system.") }, predicates: { show: (e) => Boolean(A.credentialHelperCommandOf(e)) } }), args: l.field(l.annotate(m.z.array(_e.safeHelperArg), { maxItems: 32 }).optional(), { flatKey: "inferenceCredentialHelperArgs", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" } }, remotePolicy: { requiresUserConsent: true }, selectsConnection: true, title: d.msg({ defaultMessage: "Helper script arguments", id: "3FLCLSsNxv" }), category: "connection", group: A.HELPER_SCRIPT_GROUP, order: -9.5, mono: true, control: "json", placeholder: d.msg({ defaultMessage: '["--environment", "production"]', id: "ymzVVGWwhS" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Arguments passed to the helper script, one per entry, in order. Leave unset to run it with none.", id: "1gCf5ARH90" })), long: l.longDescription('Each entry reaches the executable as one argument, exactly as written: `["--environment", "production"]` runs `helper --environment production`. Use it to keep one installed script and let the configuration each user receives decide what it does (which environment, tenant or vault to read), instead of packaging a script per case.\n\nEntries may not be empty and may not contain a double quote (`"`), a percent sign (`%`) or control characters, on any platform: a Windows `.cmd`/`.bat` helper receives its arguments through `cmd.exe`, where those characters would change the command. A `.cmd`/`.bat` script sees each argument quoted (`%1` is `"production"`, `%~1` strips the quotes); `.ps1`, `.exe` and POSIX helpers receive them bare. Arguments are visible in the diagnostic report and to other processes on the machine, so do not put secrets in them; the helper exists to fetch the secret.\n\nA changed list takes effect the way a changed path does.') }, predicates: { show: (e) => Boolean(A.credentialHelperCommandOf(e)) } }), ttlSec: Cv, timeoutSec: Sv, silentRefreshEnabled: Ev };
  var ul = { kind: m.z.literal("helper-script"), ...bl.helperScriptLeaves, awsEnv: Iv.optional() };
  bl.HelperScriptCreds = m.z.object(ul);
  var ts = (e) => l.annotate(e, { remotePolicy: { hybrid: { scope: "excluded" } } });
  bl.GATEWAY_AUTH_SCHEME_SSO = { path: 'inferenceGatewayAuthScheme: "sso"', use: 'inferenceCredentialKind: "interactive"', effect: "the original spelling will keep working; no end date has been set", match: (e) => e === "sso", rewrite: () => {
    return;
  } };
  bl.GATEWAY_AUTH_SCHEME_AUTO = { path: 'inferenceGatewayAuthScheme: "auto"', use: '"bearer" (or remove the key \u2014 bearer is the default)', effect: 'the value will be reported as invalid and ignored like any unrecognised scheme; the key will then take its default, "bearer", so the credential will still be sent as an Authorization: Bearer header', ...Fe.BATCH_2026_09, match: (e) => e === "auto", rewrite: () => "bearer" };
  var pl = (e, t) => (e === null || e === void 0 ? void 0 : e.bearerTokenType) === "access_token" && !(e.resource && !t) && !_e.scopesIncludeResourceScope(e.scopes), Pv = (e) => typeof e.inferenceProvider === "string" ? e.inferenceProvider : void 0, vt = (e) => e !== void 0 && e !== null && (typeof e !== "string" || e.trim() !== "");
  bl.VERTEX_OAUTH_CREDENTIAL_KIND = { path: 'inferenceCredentialKind: "oauth" (Vertex AI)', use: '"interactive" \u2014 the same Google sign-in under its new name (in hosted or nested documents, switch once every desktop is on a release that knows the Vertex "interactive" kind)', effect: '"oauth" will no longer be a Vertex AI credential kind: the value will be reported as invalid and ignored \u2014 the device will then derive the kind from the credential fields present (Google sign-in when an OAuth client id is set), and the hosted editor will refuse to save the configuration until the kind is changed', ...Fe.BATCH_2026_09, match: (e, t) => typeof e === "string" && _t.legacyCredentialKindAlias(Pv(t), e) !== void 0 };
  bl.VERTEX_INTERACTIVE_WITH_AUDIENCE = { path: 'inferenceCredentialKind: "interactive" together with inferenceVertexWorkforceAudience (Vertex AI)', use: '"workforce" \u2014 or remove inferenceVertexWorkforceAudience if Google sign-in ("interactive") is what is meant', effect: 'the audience will no longer imply Workforce Identity: the kind will stay "interactive" (Google sign-in), which needs inferenceVertexOAuthClientId \u2014 without it the configuration will be reported as incomplete and inference will not start', ...Fe.BATCH_2026_09, match: (e, t) => t.inferenceProvider === "vertex" && typeof e === "string" && (e === "interactive" || _t.legacyCredentialKindAlias("vertex", e) === "interactive") && vt(t.inferenceVertexWorkforceAudience) && !vt(t.inferenceVertexOAuthClientId) };
  var hl = l.field(m.z.preprocess((e) => Fe.applyLegacy(bl.GATEWAY_AUTH_SCHEME_SSO, Fe.applyLegacy(bl.GATEWAY_AUTH_SCHEME_AUTO, e)), m.z.enum(["bearer", "x-api-key"])).optional(), { flatKey: "inferenceGatewayAuthScheme", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.3036.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Gateway auth scheme", id: "tmwK1KjFte" }), deprecations: [bl.GATEWAY_AUTH_SCHEME_SSO, bl.GATEWAY_AUTH_SCHEME_AUTO], default: "bearer", category: "connection", predicates: { show: (e) => {
    var t, o;
    let s = (o = (t = e.inference) === null || t === void 0 ? void 0 : t.credential) === null || o === void 0 ? void 0 : o.kind;
    return s === "static" || s === "helper-script";
  } }, description: { short: l.shortDescription(d.msg({ defaultMessage: "How the gateway credential is sent on the wire (Authorization: Bearer vs x-api-key header).", id: "WsT/E/qNoC" })) } }), Rv = ts(m.z.object({ kind: m.z.literal("static"), apiKey: l.field(l.annotate(m.z.string().optional(), { redact: "drop" }), { flatKey: "inferenceGatewayApiKey", readers: ["desktop", "m365"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Gateway API key", id: "NA4SBfPMeA" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, description: { short: l.shortDescription(d.msg({ defaultMessage: "API key for the configured inference gateway.", id: "InfGatewayApiKeyHint" }), { docsOnly: true }) } }), authScheme: hl })), Dv = m.z.object({ ...ul, authScheme: hl });
  function Fn(e) {
    let t = e.setupNotesKey !== e.oidcKey;
    return l.longDescription(`- **\`browser\`** (default) \u2014 opens the system browser for an authorization-code (PKCE) sign-in on a loopback redirect URI. See the **IdP setup** notes on \`${e.setupNotesKey}\` for redirect-URI registration${t ? "; the same rules apply here" : ""}.
- **\`broker\`** \u2014 signs in through the OS identity broker (Web Account Manager on Windows, Company Portal on macOS). Requires the ${e.idp} to be **Microsoft Entra ID** \u2014 the \`issuer\` on \`${e.oidcKey}\` must be \`https://login.microsoftonline.com/{tenant-id}/v2.0\`. The broker satisfies Conditional Access policies that require a compliant/managed device or token protection, and needs no loopback redirect. The Entra app registration must include the broker redirect URIs \`ms-appx-web://Microsoft.AAD.BrokerPlugin/{client-id}\` (Windows) and \`msauth.com.anthropic.claudefordesktop://auth\` (macOS) under the **Mobile and desktop applications** platform. Not supported on Linux.` + (e.trailing === void 0 ? "" : `

${e.trailing}`));
  }
  bl.idpSignInShape = { authFlow: l.field(m.z.enum(["browser", "broker"]).optional(), { flatKey: "inferenceIdpAuthFlow", support: { enabled: { scopes: ["3p"], availableInVersion: "2.7032.0" } }, title: d.msg({ defaultMessage: "Identity provider sign-in flow", id: "InfIdpAuthFlow" }), category: "connection", notAPresenceSignal: true, description: { short: l.shortDescription(d.msg({ defaultMessage: "How the identity-provider sign-in runs: system browser (default) or the OS Microsoft Entra broker.", id: "InfIdpAuthFlowShort" })), long: Fn({ oidcKey: "inferenceIdpOidc", setupNotesKey: "inferenceIdpOidc", idp: "IdP", trailing: "Broker mode mints a token in the customer's own Entra tenant with the customer-configured `scopes` and forwards it to the customer's own gateway or proxy; both endpoints of that trust relationship are inside the customer's control." }) } }), oidc: l.field(_e.GatewayOidc.optional(), { flatKey: "inferenceIdpOidc", support: { enabled: { scopes: ["3p"], availableInVersion: "2.7032.0" } }, remotePolicy: { requiresUserConsent: true }, selectsConnection: true, title: d.msg({ defaultMessage: "Identity provider (OIDC)", id: "InfIdpOidc" }), predicates: { required: (e) => !A.hasActiveBootstrap(e), warn: (e, t) => {
    var o;
    return pl(e, t !== void 0 && A.credentialKindOf(t) === "external-idp" && ((o = A.activeCredentialOf(t)) === null || o === void 0 ? void 0 : o.authFlow) === "broker") ? d.msg({ defaultMessage: "No API resource scope set. On IdPs where the requested scopes decide the access-token audience (e.g. Entra ID), this yields a token for the IdP\u2019s own APIs, not your gateway or proxy. Add its API scope (Entra: api://APP_ID/.default). Ignore this if your IdP sets the token audience out-of-band (Keycloak audience mapper, Auth0 default audience, Okta custom-AS audience).", id: "IdpScopeNoResourceWarn" }) : null;
  } }, egressRequirements: (e, t) => A.credentialKindOf(t) === "external-idp" ? A.oidcEgressHosts(e) : [], egressRequirementsLabel: d.msg({ defaultMessage: "Identity provider (OIDC) sign-in hosts", id: "InfIdpOidcEgress" }), category: "connection", description: { short: l.shortDescription(d.msg({ defaultMessage: "Your organization\u2019s OpenID Connect identity provider. The user\u2019s token is sent as the Bearer credential to the gateway or the Bedrock proxy.", id: "InfIdpOidcShort" })), long: l.longDescription('Used with `inferenceCredentialKind: "external-idp"`. The app discovers `<issuer>/.well-known/openid-configuration`, runs an OIDC authorization-code (PKCE) sign-in in the browser with `clientId` (or through the OS broker, see `inferenceIdpAuthFlow`) and sends the token as `Authorization: Bearer` on every inference request: to `inferenceGatewayBaseUrl` on the gateway provider, or on Bedrock to `inferenceBedrockBaseUrl`, which is then required: only a proxy that validates the token accepts it, never Amazon Bedrock itself (to sign in straight to Bedrock use `interactive`, AWS IAM Identity Center). On Bedrock this kind has no model discovery: list the models in `inferenceModels`.\n\n**Bearer token type.** `id_token` (the default) sends the OIDC ID token; the receiver validates signature, `iss` and `aud` (the `clientId` here). `access_token` sends the OAuth access token, for gateways and proxies that validate as an OAuth resource server; `scopes` must then name the registered API scope. Either way the receiver must check `aud`, or it accepts any token from your tenant.\n\n**IdP setup.** The callback is `http://127.0.0.1:<port>/callback` (`localhost` with `redirectHost: "localhost"`); register exactly that. **Entra:** a public-client app with a *Mobile and desktop applications* redirect URI `http://127.0.0.1/callback` (omitting the path fails with `AADSTS50011`); in `access_token` mode also grant the API\'s delegated permission, or sign-in fails with `AADSTS65001`. **Okta:** a *Native* app with `http://127.0.0.1:<port>/callback` and that port in `redirectPort`.\n\n**Refresh.** With `offline_access` the app renews the token silently and asks for a browser sign-in only when refresh fails (Google returns no `id_token` on refresh, so `id_token` mode there re-prompts about hourly).\n\n**Older names.** Gateway configurations written before this key use `inferenceGatewayOidc` / `inferenceGatewayOidcAuthFlow` with the `interactive` kind; they stay readable and mean the same sign-in.', { docsUrl: `${A.COWORK_3P_DOCS_BASE}/configuration#inferenceidpoidc` }) } }) };
  var fl = m.z.object({ kind: m.z.literal("external-idp"), ...bl.idpSignInShape }), Gn = bl.idpSignInShape;
  bl.IDP_OIDC_FLAT_KEY = (Nn = l.fieldMetaForNode(Gn.oidc)) === null || Nn === void 0 ? void 0 : Nn.flatKey;
  bl.IDP_AUTH_FLOW_FLAT_KEY = (zn = l.fieldMetaForNode(Gn.authFlow)) === null || zn === void 0 ? void 0 : zn.flatKey;
  var gl = (e, t) => bl.IDP_OIDC_FLAT_KEY !== void 0 && t.inferenceProvider === "gateway" && vt(e) && (!vt(t.inferenceCredentialKind) || t.inferenceCredentialKind === "interactive" || t.inferenceCredentialKind === "external-idp");
  bl.GATEWAY_IDP_OIDC_KEY = { path: "inferenceGatewayOidc", use: `${bl.IDP_OIDC_FLAT_KEY} with inferenceCredentialKind: "external-idp" once every desktop in the fleet is on a release that reads them`, effect: "the original spelling will keep working; no end date has been set", editorPreserves: true, match: gl };
  bl.GATEWAY_IDP_AUTH_FLOW_KEY = { path: "inferenceGatewayOidcAuthFlow", use: `${bl.IDP_AUTH_FLOW_FLAT_KEY} together with ${bl.IDP_OIDC_FLAT_KEY} once every desktop in the fleet is on a release that reads them`, effect: "the original spelling will keep working; no end date has been set", editorPreserves: true, match: (e, t) => gl(e, t) && (vt(t.inferenceGatewayOidc) || bl.IDP_OIDC_FLAT_KEY !== void 0 && vt(t[bl.IDP_OIDC_FLAT_KEY])) };
  bl.GATEWAY_INTERACTIVE_WITH_IDP = { path: 'inferenceCredentialKind: "interactive" together with inferenceGatewayOidc (gateway)', use: '"external-idp" once every desktop in the fleet is on a release that reads it', effect: 'the original spelling will keep working ("interactive" with inferenceGatewayOidc is read as "external-idp"); no end date has been set', editorPreserves: true, match: (e, t) => bl.IDP_OIDC_FLAT_KEY !== void 0 && t.inferenceProvider === "gateway" && e === "interactive" && (vt(t.inferenceGatewayOidc) || vt(t[bl.IDP_OIDC_FLAT_KEY])) };
  function xv() {
    let e = l.fieldMetaForNode(Gn.oidc);
    return e !== void 0 && l.isReleasedFor3p(e);
  }
  function Lv() {
    return bl.IDP_OIDC_FLAT_KEY === void 0 || bl.IDP_AUTH_FLOW_FLAT_KEY === void 0 ? [] : [[bl.GATEWAY_IDP_OIDC_KEY.path, bl.IDP_OIDC_FLAT_KEY], [bl.GATEWAY_IDP_AUTH_FLOW_KEY.path, bl.IDP_AUTH_FLOW_FLAT_KEY]];
  }
  function Uv(e) {
    if (bl.IDP_OIDC_FLAT_KEY !== void 0 && e === bl.IDP_OIDC_FLAT_KEY) return bl.GATEWAY_IDP_OIDC_KEY.path;
    if (bl.IDP_AUTH_FLOW_FLAT_KEY !== void 0 && e === bl.IDP_AUTH_FLOW_FLAT_KEY) return bl.GATEWAY_IDP_AUTH_FLOW_KEY.path;
    return;
  }
  var Hv = (e) => bl.IDP_OIDC_FLAT_KEY === void 0 ? [] : [e];
  bl.whereIdpKeysExist = Hv;
  var Nv = m.z.discriminatedUnion("kind", [Rv, m.z.object({ kind: m.z.literal("interactive"), authFlow: l.field(m.z.enum(["browser", "broker"]).optional(), { flatKey: "inferenceGatewayOidcAuthFlow", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Gateway sign-in flow", id: "InfGatewayOidcAuthFlow" }), deprecations: bl.whereIdpKeysExist(bl.GATEWAY_IDP_AUTH_FLOW_KEY), category: "connection", notAPresenceSignal: true, description: { short: l.shortDescription(d.msg({ defaultMessage: "How the IdP sign-in runs: system browser (default) or the OS Microsoft Entra broker.", id: "InfGatewayOidcAuthFlowShort" })), long: Fn({ oidcKey: "inferenceGatewayOidc", setupNotesKey: "inferenceGatewayOidc", idp: "IdP", trailing: "Broker mode mints a token in the customer's own Entra tenant with the customer-configured `scopes`, and forwards it to the customer's own gateway; both endpoints of that trust relationship are inside the customer's control. A desktop that has the `external-idp` kind reads this key, together with `inferenceGatewayOidc`, as that kind's sign-in flow; it stays readable." }) } }), oidc: l.field(_e.GatewayOidc.optional(), { flatKey: "inferenceGatewayOidc", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.6889.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, selectsConnection: true, title: d.msg({ defaultMessage: "Gateway SSO IdP (OIDC)", id: "FcISn6aVjf" }), deprecations: bl.whereIdpKeysExist(bl.GATEWAY_IDP_OIDC_KEY), predicates: { warn: (e, t) => {
    var o, s;
    return pl(e, ((o = t === null || t === void 0 ? void 0 : t.inference) === null || o === void 0 ? void 0 : o.provider) === "gateway" && ((s = t.inference.credential) === null || s === void 0 ? void 0 : s.kind) === "interactive" && t.inference.credential.authFlow === "broker") ? d.msg({ defaultMessage: "No API resource scope set. On IdPs where the requested scopes decide the access-token audience (e.g. Entra ID), this yields a token for the IdP\u2019s own APIs \u2014 not your gateway. Add the gateway\u2019s API scope (Entra: api://GATEWAY_APP_ID/.default). Ignore this if your IdP sets the token audience out-of-band (Keycloak audience mapper, Auth0 default audience, Okta custom-AS audience).", id: "GwScopeNoResourceWarn" }) : null;
  } }, egressRequirements: (e, t) => {
    var o, s;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "gateway" && ((s = t.inference.credential) === null || s === void 0 ? void 0 : s.kind) === "interactive" ? A.oidcEgressHosts(e) : [];
  }, egressRequirementsLabel: d.msg({ defaultMessage: "Gateway sign-in (OIDC)", id: "L+geN0DrtO" }), category: "connection", description: { short: l.shortDescription(d.msg({ defaultMessage: "External IdP for gateway sign-in. The user\u2019s token from this issuer is sent to the gateway as the Bearer credential.", id: "pRQIKI2d3D" })), long: l.longDescription("**External IdP mode.** The app discovers `<issuer>/.well-known/openid-configuration`, runs an OIDC authorization-code-with-PKCE sign-in in the system browser with `clientId`, and sends the resulting token as `Authorization: Bearer` on every inference request. Leave this unset for a gateway that hosts its own RFC 8414 metadata at `<baseUrl>/.well-known/oauth-authorization-server`. A desktop that has the `external-idp` kind reads this block as that kind's identity-provider key; it stays readable, so a fleet keeps this spelling until every desktop is on such a release.\n\n**Bearer token type.** `id_token` (the default) sends the OIDC ID token; the gateway validates signature, `iss`, and `aud` (the `clientId` configured here). `access_token` sends the OAuth access token, for gateways that validate as a resource server (Portkey, Kong, Envoy JWT filter, AWS API Gateway authorizers); `scopes` must then name the gateway's registered API scope. Either way the gateway must check `aud`, not just signature and issuer, or it accepts any token from your tenant.\n\n**IdP setup.** The callback is `http://127.0.0.1:<port>/callback` by default (`http://localhost:<port>/callback` with `redirectHost: \"localhost\"`); register exactly the one you use and include `/callback`. **Entra:** a public-client app with a *Mobile and desktop applications* redirect URI of `http://127.0.0.1/callback` (any port; omitting the path fails with `AADSTS50011`); in `access_token` mode also grant the gateway API's delegated permission, or sign-in fails with `AADSTS65001`. **Okta:** a *Native* app with the exact URI `http://127.0.0.1:<port>/callback` and that port in `redirectPort`.\n\n**Refresh.** With `offline_access` the app renews the token silently and prompts a browser sign-in only when refresh fails. Google never returns an `id_token` on refresh, so a Google Workspace-backed gateway in `id_token` mode re-prompts about hourly; `access_token` mode is unaffected.", { docsUrl: `${A.COWORK_3P_DOCS_BASE}/gateway#single-sign-on-with-your-identity-provider` }) } }) }), fl, Dv]), zv = m.z.object({ provider: m.z.literal("gateway"), baseUrl: l.field(l.annotate(_e.httpsUrl.optional(), { redact: "hostname" }), { flatKey: "inferenceGatewayBaseUrl", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: { ...es, originPinned: { carries: "server-issued-credential" } }, title: d.msg({ defaultMessage: "Gateway base URL", id: "JQs8c3pGcl" }), egressRequirements: (e, t) => {
    var o;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "gateway" ? A.singleHostEgress(e) : [];
  }, category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "https://llm-gateway.example.com", id: "we1m4ZIlaP" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Full URL of the inference gateway endpoint.", id: "6cmRKZgiFv" })) } }), streamIdleTimeoutSec: l.field(m.z.coerce.number().int().min(300).max(1800).optional(), { flatKey: "inferenceStreamIdleTimeoutSec", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.44121.1" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Stream idle timeout", id: "1zaCZqzDhD" }), category: "connection", order: 85, suffix: d.msg({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }), placeholder: d.msg({ defaultMessage: "300", id: "ady/daA2aj" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Extra seconds to wait for model output on a streaming response that is sending only keep-alive pings. Gateway provider only. Default 300.", id: "vVjD8kgAio" })), long: l.longDescription("Raises how long Cowork, Chat and Code sessions wait for the next model event on an open streaming response (Claude Code's `CLAUDE_STREAM_IDLE_TIMEOUT_MS`). It only helps when the gateway writes SSE keep-alive `ping` events (or `:` comment lines) into the response while the upstream model is silent \u2014 for example a LiteLLM proxy with keep-alive pings enabled in front of Amazon Bedrock. With pings arriving, Claude Code accepts at least about five minutes of keep-alives and then waits this many seconds more for real model output before abandoning the request. Gateway provider only; the other providers keep Claude Code's defaults.\n\nA response on which nothing at all arrives \u2014 no pings \u2014 still fails after about 5 minutes regardless of this key, because at the device a silent connection cannot be told apart from a dead one. If long generations fail behind a gateway that does not send pings, configure the gateway to send them rather than raising this value. A common case is automatic compaction, in which a session sends its whole conversation in one streaming request and waits for a long summary; when that request fails, the error reads `Prompt is too long \xB7 automatic compaction failed:` followed by the cause. While this key is set, the app's value takes precedence over `CLAUDE_STREAM_IDLE_TIMEOUT_MS` in Claude Code's own managed settings for sessions the app starts; when it is unset, that setting still applies. Values outside 300\u20131800 are rejected at parse time (the error is listed in the diagnostics report) and the default applies.", { docsUrl: `${A.COWORK_3P_DOCS_BASE}/configuration#inferencestreamidletimeoutsec` }) } }), gatewayManagedClaudeCode: l.field(m.z.boolean().optional(), { flatKey: "inferenceGatewayManagedClaudeCode", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "2.9939.2" }, executionTarget: "desktop", visibility: "public-undocumented" }, title: d.msg({ defaultMessage: "Gateway-managed Claude Code", id: "+Mc2p855y7" }), default: false, failClosedValue: false, category: "connection", order: 86, description: { short: l.shortDescription(d.msg({ defaultMessage: "When true, sessions for users signed in through the gateway\u2019s own sign-in run Claude Code in its gateway mode. Gateway provider only. Default false.", id: "YT+I9m2Ho0" })), long: l.longDescription("Set this to `true` to run Claude Code in its gateway mode (`CLAUDE_CODE_USE_GATEWAY`) in Cowork, Chat and Code sessions for users who signed in through the gateway's own sign-in (`inferenceCredentialKind: interactive` with no organization identity provider configured). In gateway mode Claude Code turns off its usage analytics and authenticated calls to Anthropic (the WebFetch tool's hostname-only domain lookup is governed separately by `skipWebFetchPreflight`), and may hide its WebSearch tool. `false` keeps base-URL routing, where those sessions treat the gateway as the Anthropic API at a custom base URL. A change takes effect for sessions started after the next app launch. Other sign-in methods and other providers ignore this key, and in a third-party deployment a `CLAUDE_CODE_USE_GATEWAY` in a user's own environment is ignored for app sessions either way.") } }), ...eo, credential: Nv.optional() }), Kv = m.z.discriminatedUnion("kind", [ts(m.z.object({ kind: m.z.literal("static"), apiKey: l.field(l.annotate(m.z.string().optional(), { redact: "drop" }), { flatKey: "inferenceAnthropicApiKey", support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Claude API key", id: "5ykkZh9itH" }), category: "connection", placeholder: d.msg({ defaultMessage: "sk-ant-\u2026", id: "yWgQU4eQPw" }), predicates: { required: (e) => !A.hasActiveBootstrap(e) }, description: { short: l.shortDescription(d.msg({ defaultMessage: "Leave blank to fetch a key via browser sign-in, or to supply the key via a credential helper.", id: "LqkJ93Y17Y" })) } }) })), m.z.object({ kind: m.z.literal("interactive") }), bl.HelperScriptCreds]), Bv = l.annotate(m.z.object({ provider: m.z.literal("anthropic"), ...eo, credential: Kv.optional() }), { remotePolicy: { hybrid: { scope: "excluded" } } });
  bl.AwsSigV4Credential = m.z.discriminatedUnion("kind", [m.z.object({ kind: m.z.literal("interactive"), ssoStartUrl: l.field(A.urlWithSchemeCoercion.optional(), { flatKey: "inferenceBedrockSsoStartUrl", support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" }, executionTarget: "desktop" }, remotePolicy: { rejectLoopback: true, requiresUserConsent: true }, title: d.msg({ defaultMessage: "AWS SSO start URL", id: "M1ekod7Ohm" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "https://d-1234567890.awsapps.com/start", id: "RFFH1lyEc7" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Enables in-app AWS sign-in (no AWS CLI needed). Set with the three SSO fields below.", id: "Ahe51s8B/N" })) } }), ssoRegion: l.field(Vn.optional(), { flatKey: "inferenceBedrockSsoRegion", support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "AWS SSO region", id: "fVSO74vxG+" }), egressRequirements: (e, t) => {
    var o;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "bedrock" && e ? [...se.bedrockSsoHosts(e)] : [];
  }, category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "us-east-1", id: "TR4NZQsAzg" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "IAM Identity Center home region.", id: "hrhyvgzlp8" })) } }), ssoAccountId: l.field(m.z.string().trim().min(1).optional(), { flatKey: "inferenceBedrockSsoAccountId", support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "AWS SSO account ID", id: "SM396mPAdJ" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "123456789012", id: "UGEnd0JtKP" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "12-digit AWS account ID assigned to users in IAM Identity Center.", id: "5ZymBsxYIf" })) } }), ssoRoleName: l.field(m.z.string().trim().min(1).optional(), { flatKey: "inferenceBedrockSsoRoleName", support: { enabled: { scopes: ["3p"], availableInVersion: "1.6259.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "AWS SSO role name", id: "Us/KWk8ZwZ" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "BedrockInference", id: "vgSQNDrmBi" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "IAM Identity Center permission-set name granting bedrock:InvokeModel* on the account above.", id: "vZ6g+h2+rD" })) } }) }), m.z.object({ kind: m.z.literal("vendor-profile"), profile: Av, awsDir: Ov, awsCliPath: Mv })]);
  var ml = ts(m.z.object({ kind: m.z.literal("static"), bearerToken: Tv })), Vv = m.z.discriminatedUnion("kind", [ml, ...bl.AwsSigV4Credential.options, fl, bl.HelperScriptCreds]), Fv = m.z.object({ provider: m.z.literal("bedrock"), region: dl, baseUrl: cl, serviceTier: l.field(m.z.enum(["flex", "priority"]).optional(), { flatKey: "inferenceBedrockServiceTier", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.5186.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Bedrock service tier", id: "RcMetnFGHz" }), category: "connection", placeholder: d.msg({ defaultMessage: "(on-demand)", id: "7KENh/cIdm" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Sent as the X-Amzn-Bedrock-Service-Tier header. Leave unset for on-demand.", id: "/jpohGWrkJ" })), long: l.longDescription("Tier availability varies by model and region. Reserved capacity uses a provisioned-throughput ARN as the model ID instead of this setting. Older bundled Claude Code CLI versions ignore this key.") } }), ...eo, credential: Vv.optional() }), Gv = m.z.discriminatedUnion("kind", [ml, bl.HelperScriptCreds]), Wv = m.z.object({ provider: m.z.literal("mantle"), region: dl, baseUrl: cl, ...eo, credential: Gv.optional() }), qv = m.z.discriminatedUnion("kind", [m.z.object({ kind: m.z.literal("interactive"), clientId: l.field(m.z.string().trim().min(1).optional(), { flatKey: "inferenceVertexOAuthClientId", support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Vertex OAuth client ID", id: "uV5y1u6H7A" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "NNN.apps.googleusercontent.com", id: "p/4qG0gjyQ" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Desktop-app OAuth client ID. Enables Sign in with Google instead of a credentials file.", id: "uksEExpTuY" })) } }), clientSecret: l.field(l.annotate(m.z.string().trim().min(1).optional(), { redact: "presence" }), { flatKey: "inferenceVertexOAuthClientSecret", support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Vertex OAuth client secret", id: "SM8Ak39Vjh" }), category: "connection", placeholder: d.msg({ defaultMessage: "GOCSPX-...", id: "2pwaqX5iEv" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Secret for the Desktop-app OAuth client above. Google classifies installed-app client secrets as non-confidential, so this may be set from hosted config.", id: "VertexOAuthSecretHint2" })) } }), scopes: l.field(m.z.string().trim().min(1).optional(), { flatKey: "inferenceVertexOAuthScopes", support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Vertex OAuth scopes", id: "Wl626GK45n" }), category: "connection", placeholder: d.msg({ defaultMessage: "openid email https://www.googleapis.com/auth/cloud-platform", id: "1QdLfinpa0" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Override the Google OAuth scopes (space-separated). Leave blank for the default.", id: "6NwjCQmCZB" })) } }), loginHint: l.field(l.annotate(m.z.string().trim().min(1).optional(), { redact: "presence" }), { flatKey: "inferenceVertexOAuthLoginHint", support: { enabled: { scopes: ["3p"], availableInVersion: "1.12603.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Vertex OAuth login hint", id: "HhOWSUTxff" }), category: "connection", placeholder: d.msg({ defaultMessage: "'{username}'@example.com", id: "SiQK5/KBQz" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Pre-fill Google's account chooser and forward to your federated IdP. '{username}' expands to the OS login name.", id: "XLMVwXPbz1" })) } }) }), m.z.object({ kind: m.z.literal("workforce"), audience: l.field(m.z.string().trim().min(1).optional(), { flatKey: "inferenceVertexWorkforceAudience", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Workforce Identity audience", id: "B9l27BNEGU" }), egressRequirements: (e, t) => {
    var o, s;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "vertex" && ((s = t.inference.credential) === null || s === void 0 ? void 0 : s.kind) === "workforce" && e ? [se.GOOGLE_STS_HOST] : [];
  }, egressRequirementsLabel: d.msg({ defaultMessage: "Workforce Identity (STS)", id: "dKEgofbwpe" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "//iam.googleapis.com/locations/global/workforcePools/POOL/providers/PROVIDER", id: "EBQHEgxMx3" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Workforce-pool provider audience. When set, sign-in uses your own IdP plus a GCP STS exchange instead of a Google identity.", id: "cc4tPynCta" })) } }), userProject: l.field(l.annotate(ll.optional(), { redact: "hash" }), { flatKey: "inferenceVertexWorkforceUserProject", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Workforce Identity billing project", id: "T8t7Fu+JhP" }), category: "connection", description: { short: l.shortDescription(d.msg({ defaultMessage: "GCP project for STS billing and quota. Defaults to the Vertex project ID above.", id: "BCq+xoiDzP" })) } }), authFlow: l.field(m.z.enum(["browser", "broker"]).optional(), { flatKey: "inferenceVertexWorkforceAuthFlow", support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Workforce Identity sign-in flow", id: "InfVertexWifAuthFlow" }), category: "connection", notAPresenceSignal: true, description: { short: l.shortDescription(d.msg({ defaultMessage: "How the IdP sign-in runs: system browser (default) or the OS Microsoft Entra broker.", id: "InfVertexWifAuthFlowShort" })), long: Fn({ oidcKey: "inferenceVertexWorkforceOidc", setupNotesKey: "inferenceGatewayOidc", idp: "workforce-pool IdP", trailing: "The GCP STS token-exchange step is unchanged in either flow; only how the Entra id_token is acquired differs." }) } }), oidc: l.field(_e.BootstrapOidc.optional(), { flatKey: "inferenceVertexWorkforceOidc", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, selectsConnection: true, title: d.msg({ defaultMessage: "Workforce Identity IdP (OIDC)", id: "8uN+pRpuBV" }), egressRequirements: (e, t) => {
    var o, s;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "vertex" && ((s = t.inference.credential) === null || s === void 0 ? void 0 : s.kind) === "workforce" ? A.oidcEgressHosts(e) : [];
  }, egressRequirementsLabel: d.msg({ defaultMessage: "Workforce Identity sign-in (OIDC)", id: "YfucG+3eg9" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, description: { short: l.shortDescription(d.msg({ defaultMessage: "Your organization\u2019s OIDC IdP. The app runs an authorization-code-with-PKCE flow against this issuer and exchanges the returned ID token at GCP STS.", id: "GKRkihdCmn" })) } }) }), m.z.object({ kind: m.z.literal("vendor-profile"), credentialsFile: l.field(l.annotate(m.z.string().optional(), { pathKind: "file" }), { flatKey: "inferenceVertexCredentialsFile", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "GCP credentials file path", id: "vr+XA6xjAJ" }), category: "connection", placeholder: d.msg({ defaultMessage: "/etc/claude/vertex-sa.json", id: "p8Z4FQ25gZ" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Absolute path to service-account JSON. Leave blank to fall back to ADC.", id: "g7d9j8Vr7D" })) } }) }), bl.HelperScriptCreds]), jv = m.z.object({ provider: m.z.literal("vertex"), projectId: l.field(l.annotate(ll.optional(), { redact: "hash" }), { flatKey: "inferenceVertexProjectId", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "GCP project ID", id: "725LtLiE2E" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "my-gcp-project", id: "BfHrtKLzKn" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Google Cloud project ID for Vertex AI inference.", id: "InfVertexProjectIdHint" }), { docsOnly: true }) } }), region: l.field(l.annotate(bv.optional(), { redact: "keep" }), { flatKey: "inferenceVertexRegion", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "GCP region", id: "dpoHgMeiUG" }), egressRequirements: (e, t) => {
    var o, s, n;
    if (((o = t.inference) === null || o === void 0 ? void 0 : o.provider) !== "vertex" || !e) return [];
    let i = (s = se.egressAddress(t.inference.baseUrl)) !== null && s !== void 0 ? s : se.vertexInferenceHost(e), u = (n = t.inference.credential) === null || n === void 0 ? void 0 : n.kind;
    return u === "helper-script" || u === "workforce" ? [i] : [i, ...se.VERTEX_AUTH_HOSTS];
  }, category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "us-east5", id: "r8UhFrWBXI" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "GCP region where your Vertex AI Claude models are deployed.", id: "YvJKUek0yj" })) } }), baseUrl: l.field(l.annotate(_e.httpsUrl.optional(), { redact: "hostname" }), { flatKey: "inferenceVertexBaseUrl", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: es, title: d.msg({ defaultMessage: "Vertex AI base URL", id: "TAuycZeIjw" }), category: "connection", placeholder: d.msg({ defaultMessage: "https://REGION-aiplatform-ENDPOINT_ID.p.googleapis.com", id: "NHvtv6jJcx" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "PSC endpoint, if using one.", id: "xHHO70UFYc" })) } }), ...eo, credential: qv.optional() }), Yv = m.z.discriminatedUnion("kind", [ts(m.z.object({ kind: m.z.literal("static"), apiKey: l.field(l.annotate(m.z.string().optional(), { redact: "drop" }), { flatKey: "inferenceFoundryApiKey", readers: ["desktop", "m365"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Azure AI Foundry API key", id: "JqaU0qkb9c" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, description: { short: l.shortDescription(d.msg({ defaultMessage: "API key for Azure AI Foundry inference.", id: "InfFoundryApiKeyHint" }), { docsOnly: true }) } }) })), m.z.object({ kind: m.z.literal("interactive"), tenantId: l.field(m.z.string().trim().min(1).optional(), { flatKey: "inferenceFoundryTenantId", support: { enabled: { scopes: ["3p"], availableInVersion: "1.9255.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Entra ID tenant ID", id: "Ah1hvJZNYr" }), egressRequirements: (e, t) => {
    var o;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "foundry" && e ? [se.MICROSOFT_LOGIN_HOST] : [];
  }, category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "oT3AdLMVZK" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Directory (tenant) ID of the Entra ID app registration that has the Cognitive Services scope.", id: "7sqrf3CZ6B" })) } }), clientId: l.field(m.z.string().trim().min(1).optional(), { flatKey: "inferenceFoundryClientId", support: { enabled: { scopes: ["3p"], availableInVersion: "1.9255.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Entra ID client ID", id: "bLvD/3lRxB" }), category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "11111111-1111-1111-1111-111111111111", id: "Ck5uU8xAnb" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Application (client) ID of the Entra ID app registration. Device-code sign-in requires the app to allow public client flows.", id: "InfFoundryClientIdHint" })) } }), authFlow: l.field(m.z.enum(["device-code", "browser", "broker"]).optional(), { flatKey: "inferenceFoundryAuthFlow", support: { enabled: { scopes: ["3p"], availableInVersion: "1.19367.0" }, values: { broker: { availableInVersion: "1.24012.0" } }, executionTarget: "desktop" }, title: d.msg({ defaultMessage: "Entra ID sign-in flow", id: "InfFoundryAuthFlow" }), category: "connection", placeholder: d.msg({ defaultMessage: "device-code", id: "InfFoundryAuthFlowPh" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "How Entra sign-in runs: device code (default), system browser, or the OS identity broker.", id: "qCKLNhSFcP" })), long: l.longDescription("- **`device-code`** (default) \u2014 shows a code to enter at microsoft.com/devicelogin. The app registration must have **Allow public client flows** enabled.\n- **`browser`** \u2014 opens the system browser for an authorization-code (PKCE) sign-in on a loopback redirect URI. The app registration must include `http://127.0.0.1/callback` under the **Mobile and desktop applications** platform (Entra ignores the loopback port, but not the path). Works with **Allow public client flows** disabled, and is unaffected by Conditional Access policies that block device-code authentication.\n- **`broker`** \u2014 signs in through the OS identity broker (Web Account Manager on Windows, Company Portal on macOS), so it can satisfy Conditional Access policies that require a compliant/managed device or token protection. The app registration must include the broker redirect URIs `ms-appx-web://Microsoft.AAD.BrokerPlugin/{client-id}` (Windows) and `msauth.com.anthropic.claudefordesktop://auth` (macOS) under the **Mobile and desktop applications** platform. Not supported on Linux.\n\nApp versions that predate this key always use device code; versions that predate the broker option treat `broker` as unset and use device code.") } }) }), bl.HelperScriptCreds]), Zv = m.z.object({ provider: m.z.literal("foundry"), resource: l.field(vv.optional(), { flatKey: "inferenceFoundryResource", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, remotePolicy: { requiresUserConsent: true }, title: d.msg({ defaultMessage: "Azure AI Foundry resource name", id: "tdj4b/xhUV" }), egressRequirements: (e, t) => {
    var o, s;
    let n = t.inference && "baseUrl" in t.inference ? t.inference.baseUrl : void 0;
    return ((o = t.inference) === null || o === void 0 ? void 0 : o.provider) === "foundry" && e ? [(s = se.egressAddress(n)) !== null && s !== void 0 ? s : se.foundryResourceHost(e)] : [];
  }, category: "connection", predicates: { required: (e) => !A.hasActiveBootstrap(e) }, placeholder: d.msg({ defaultMessage: "my-foundry-resource", id: "CWxAZo6MyF" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Azure AI Foundry resource name used to construct the endpoint URL.", id: "XfOmm8BNBA" })) } }), baseUrl: l.field(l.annotate(_e.httpsUrl.optional(), { redact: "hostname" }), { flatKey: "inferenceFoundryBaseUrl", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" }, executionTarget: "desktop" }, remotePolicy: es, title: d.msg({ defaultMessage: "Azure AI Foundry base URL", id: "XQ/3430M2Q" }), category: "connection", placeholder: d.msg({ defaultMessage: "https://llm-gateway.example.com/foundry", id: "gatovXuhBm" }), description: { short: l.shortDescription(d.msg({ defaultMessage: "Full base URL for a gateway or proxy in front of Foundry, path included (replaces https://RESOURCE.services.ai.azure.com/anthropic).", id: "CuSbptYP9V" })), long: l.longDescription("Set this only when the app reaches Foundry through a gateway or proxy you run, such as Azure API Management. Requests go to `<value>/v1/messages` instead of `https://<resource>.services.ai.azure.com/anthropic/v1/messages`, carrying the same credential and headers the app would send to Foundry: each user's Entra ID token for the Azure Cognitive Services audience as `Authorization: Bearer` with Entra sign-in, otherwise the API key or the credential helper's output. Claude Code sessions receive the value as `ANTHROPIC_FOUNDRY_BASE_URL`, so use the same value you would give Claude Code in a terminal. `inferenceFoundryResource` is still required and should name the resource behind the gateway; the app sends nothing to the resource directly while this is set. Must be https, or http to a proxy at a loopback address on the device itself (127.0.0.1, localhost or [::1]).") } }), ...eo, credential: Yv.optional() });
  bl.InferenceConfig = m.z.discriminatedUnion("provider", [l.variantMeta(zv, {}), l.variantMeta(Bv, { noBearerFor: ["interactive"] }), l.variantMeta(Fv, { cliFlag: "CLAUDE_CODE_USE_BEDROCK", bedrockFamily: true, noDiscoveryFor: ["interactive", "vendor-profile", "external-idp"], noBearerFor: ["interactive", "vendor-profile"], needsBaseUrlFor: ["external-idp"] }), l.variantMeta(Wv, { cliFlag: "CLAUDE_CODE_USE_MANTLE", bedrockFamily: true, noDiscoveryFor: ["static", "helper-script"] }), l.variantMeta(jv, { cliFlag: "CLAUDE_CODE_USE_VERTEX", noDiscoveryFor: ["interactive", "workforce", "helper-script", "vendor-profile"], noBearerFor: ["interactive", "vendor-profile"] }), l.variantMeta(Zv, { cliFlag: "CLAUDE_CODE_USE_FOUNDRY", noDiscoveryFor: ["static", "helper-script", "interactive"], noBearerFor: ["static", "helper-script"] })]);
  bl.PROVIDER_ARMS = new Map(bl.InferenceConfig.options.map((e) => [e.shape.provider.value, e]));
  var os = (e) => {
    var t;
    return (t = l.variantMetaForNode(bl.PROVIDER_ARMS.get(e))) !== null && t !== void 0 ? t : {};
  };
  bl.CREDENTIAL_KINDS_FOR_PROVIDER = Object.fromEntries(l.PROVIDERS.map((e) => [e, l.discriminatorArmsOf(bl.PROVIDER_ARMS.get(e).shape.credential).filter((t) => t.id).map((t) => t.id)]));
  bl.PROVIDER_CLI_FLAG = Object.fromEntries(l.PROVIDERS.flatMap((e) => {
    let t = os(e).cliFlag;
    return t ? [[e, t]] : [];
  }));
  var $v = (e) => e !== void 0 && os(e).bedrockFamily === true;
  bl.isBedrockFamily = $v;
  bl.PROVIDER_SELECTOR_ENV_FLAGS = [...Object.values(bl.PROVIDER_CLI_FLAG), "CLAUDE_CODE_USE_ANTHROPIC_AWS", "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD", "CLAUDE_CODE_USE_GATEWAY"];
  function Xv(e) {
    let t = {};
    for (let s of bl.PROVIDER_SELECTOR_ENV_FLAGS) t[s] = "";
    let o = e && bl.PROVIDER_CLI_FLAG[e];
    if (o) t[o] = "1";
    return t;
  }
  function yl(e, t) {
    if (!e) return true;
    let o = bl.CREDENTIAL_KINDS_FOR_PROVIDER[e];
    if (o.length === 0) return false;
    let s = os(e).noDiscoveryFor;
    if (t === void 0) return o.some((n) => !(s === null || s === void 0 ? void 0 : s.includes(n)));
    return o.includes(t) && !(s === null || s === void 0 ? void 0 : s.includes(t));
  }
  function Jv(e) {
    var t, o;
    let s = e.credential;
    if (!s) return true;
    if ((t = os(e.provider).noBearerFor) === null || t === void 0 ? void 0 : t.includes(s.kind)) return false;
    if ("authScheme" in s && s.authScheme === "x-api-key") return false;
    if (e.provider === "anthropic" && ((o = e.credential) === null || o === void 0 ? void 0 : o.kind) === "static" && e.credential.apiKey) return _t.isAnthropicOAuthToken(e.credential.apiKey);
    return true;
  }
  var Qv = (e) => {
    var t;
    return yl((t = e.inference) === null || t === void 0 ? void 0 : t.provider, A.credentialKindOf(e));
  };
  bl.providerHasDiscovery = Qv;
  bl.inferenceCredentialKindField = l.field(m.z.enum(l.INFERENCE_CREDENTIAL_KINDS).optional(), { flatKey: "inferenceCredentialKind", readers: ["desktop", "m365", "code"], deprecations: [bl.VERTEX_OAUTH_CREDENTIAL_KIND, bl.VERTEX_INTERACTIVE_WITH_AUDIENCE, ...bl.whereIdpKeysExist(bl.GATEWAY_INTERACTIVE_WITH_IDP)], support: { enabled: { scopes: ["3p"], availableInVersion: "1.8555.0" }, values: { workforce: { availableInVersion: "1.15200.0" }, oauth: { availableInVersion: "1.15200.0" }, "external-idp": { availableInVersion: "2.7032.0" } } }, title: d.msg({ defaultMessage: "Credential kind", id: "g8BMTiGHB6" }), category: "connection", order: 90, predicates: { required: (e) => A.credentialKindOf(e) === void 0 && !A.hasActiveBootstrap(e) }, optionLabels: { static: d.msg({ defaultMessage: "Static API key", id: "kgHEpmxl05" }), "helper-script": d.msg({ defaultMessage: "Helper script", id: "DnXPcFgmqb" }), interactive: d.msg({ defaultMessage: "Interactive sign-in", id: "8c6iN3kiDX" }), "vendor-profile": d.msg({ defaultMessage: "Cloud vendor profile", id: "4ZsAJlUXHL" }), workforce: d.msg({ defaultMessage: "Workforce Identity", id: "VtxWorkforceKind" }), "external-idp": d.msg({ defaultMessage: "Identity provider sign-in (OIDC)", id: "ExtIdpKindLabel" }) }, description: { short: l.shortDescription(d.msg({ defaultMessage: "Selects the credential source. When set, only that source is used (no fallback).", id: "xXr+rGIv+A" })) } });
});
var klt = (0, import_chunk_w1d7ygsk.V)(function(Ml) {
  Object.defineProperty(Ml, "__esModule", { value: true });
  Ml.GROUP_DESCRIPTIONS = Ml.BUILTIN_BROWSER_GROUP = Ml.CODE_SURFACE_GROUP = Ml.UPDATES_GROUP = Ml.BOOTSTRAP_GROUP = Ml.MCP_SERVERS_GROUP = Ml.ANTHROPIC_TELEMETRY_GROUP = Ml.TOOLS_GROUP = Ml.GENERAL_RESTRICTIONS_GROUP = void 0;
  var fe = vj();
  Ml.GENERAL_RESTRICTIONS_GROUP = fe.msg({ defaultMessage: "General restrictions", id: "fHh9zisMLR" });
  Ml.TOOLS_GROUP = fe.msg({ defaultMessage: "Tools", id: "nUT0LvZVOx" });
  Ml.ANTHROPIC_TELEMETRY_GROUP = fe.msg({ defaultMessage: "Anthropic telemetry", id: "auYj3lyf1+" });
  Ml.MCP_SERVERS_GROUP = fe.msg({ defaultMessage: "MCP servers", id: "K9q4XwLJd2" });
  Ml.BOOTSTRAP_GROUP = fe.msg({ defaultMessage: "Bootstrap config URL", id: "MPdK0gXvRA" });
  Ml.UPDATES_GROUP = fe.msg({ defaultMessage: "Updates", id: "recCg9im82" });
  Ml.CODE_SURFACE_GROUP = fe.msg({ defaultMessage: "Code surface", id: "NHwL+4YYfH" });
  Ml.BUILTIN_BROWSER_GROUP = fe.msg({ defaultMessage: "Built-in browser", id: "Yx/kiytXbg" });
  Ml.GROUP_DESCRIPTIONS = { [Ml.GENERAL_RESTRICTIONS_GROUP.id]: fe.msg({ defaultMessage: "These apply regardless of which surfaces are enabled.", id: "kTD7aU+1xd" }), [Ml.TOOLS_GROUP.id]: fe.msg({ defaultMessage: "Built-in tool restrictions and on-demand MCP tool loading.", id: "XVYTn+sJ/a" }), [Ml.CODE_SURFACE_GROUP.id]: fe.msg({ defaultMessage: "Settings for Code sessions. These apply only while Code is enabled.", id: "R0nTUNCSi6" }) };
});
var PEs = (0, import_chunk_w1d7ygsk.V)(function(ql) {
  var Yn;
  Object.defineProperty(ql, "__esModule", { value: true });
  ql.PluginsConfig = ql.AllowedPluginMarketplace = ql.marketplaceRepo = ql.marketplaceUrl = ql.marketplaceRef = ql.MARKETPLACE_CREDENTIAL_KINDS = ql.MARKETPLACE_INSTALL_PREFS = void 0;
  ql.requireHelperForHelperKind = Jn;
  ql.checkAllowedPluginMarketplacesForDrops = Wl;
  var j = require("/$bunfs/root/chunk-2hscyk4w.js"), rs = Lwe(), Kl = dX(), w = Vk(), Se = T4(), E = vj(), we = NZ(), is = klt();
  ql.MARKETPLACE_INSTALL_PREFS = ["available", "auto_install", "required"];
  var Bl = ["anonymous", "userGit", "credentialHelper"];
  ql.MARKETPLACE_CREDENTIAL_KINDS = [...Bl, "inferenceCredential"];
  var f_ = ["anonymous", "credentialHelper", "inferenceCredential"], Vl = /^[^\s/]+\/[^\s/]+$/, g_ = /^[0-9a-f]{40}$/i, To = "Curated by Anthropic", m_ = [{ label: "Cowork plugins", section: To, description: "anthropics/knowledge-work-plugins on GitHub", item: { source: "github", repo: "anthropics/knowledge-work-plugins" } }, { label: "Claude Code plugins", section: To, description: "anthropics/claude-plugins-official on GitHub", item: { source: "github", repo: "anthropics/claude-plugins-official" } }, { label: "Claude for Financial Services", section: To, description: "anthropics/financial-services on GitHub", item: { source: "github", repo: "anthropics/financial-services" } }, { label: "Claude for Legal", section: To, description: "anthropics/claude-for-legal on GitHub", item: { source: "github", repo: "anthropics/claude-for-legal" } }, { label: "Claude for Life Sciences", section: To, description: "anthropics/life-sciences on GitHub", item: { source: "github", repo: "anthropics/life-sciences" } }], Dl = (e) => e.source === "github", Fl = (e) => e.source === "github" || e.source === "git", y_ = (e) => e.source === "url", xl = (e) => e.source === "git" || e.source === "url", Ll = (e) => e.credentialKind === "credentialHelper";
  function Jn(e) {
    return e.refine((t) => {
      var o;
      return ((o = t.credentialKind) !== null && o !== void 0 ? o : "anonymous") === "credentialHelper" === (t.credentialHelper !== void 0);
    }, { message: "Credential helper is required when Auth is credentialHelper, and must be empty otherwise", path: ["credentialHelper"] });
  }
  var Ul = (e) => e.source === "url" ? e.manifestSha256 : e.ref, $n = (e) => {
    var t;
    return e.source === "url" ? e.manifestSha256 !== void 0 : g_.test((t = e.ref) !== null && t !== void 0 ? t : "");
  }, Gl = (e) => {
    var t;
    return ((t = e.installationPreference) !== null && t !== void 0 ? t : "available") !== "available" && !$n(e);
  }, Hl = (e) => !!e && typeof e === "object" && "source" in e && typeof e.source === "string", Nl = (e) => {
    let { [e.source === "url" ? "manifestSha256" : "ref"]: t, ...o } = e;
    return o;
  };
  function b_(e, t) {
    if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return false;
    return e.every((o, s) => {
      let n = t[s];
      return Hl(o) && Hl(n) && Se.canonicalJson(Nl(o)) === Se.canonicalJson(Nl(n)) && (Ul(o) === Ul(n) || $n(o) && $n(n));
    });
  }
  var Qn = { label: E.msg({ defaultMessage: "Auth", id: "JUCpMnAOZ/" }), support: { values: { inferenceCredential: { availableInVersion: "1.32352.0" } } }, description: { short: w.shortDescription(E.msg({ defaultMessage: "How fetches authenticate: anonymously, with the user\u2019s git credentials, via a helper executable, or as the app does to its gateway or bootstrap server (url).", id: "mktCredKd3" })) } }, er = { expectedName: w.subfield(j.z.string().regex(/^[A-Za-z0-9](?:[A-Za-z0-9._-]{0,126}[A-Za-z0-9_-])?$/, "Expected name must start with a letter or number, may contain only letters, numbers, dots, underscores, and hyphens, and must not end with a dot (128 characters max)").optional(), { label: E.msg({ defaultMessage: "Expected name", id: "pMktExpNm1" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "Rejects the marketplace if its manifest name differs.", id: "pMktExpNm3" }), { docsOnly: false }), long: w.longDescription("When set, each fetch or clone is rejected if the marketplace's `manifest.name` differs, so an upstream rename cannot silently replace another configured marketplace.", { docsOnly: false }) } }), installationPreference: w.subfield(j.z.enum(ql.MARKETPLACE_INSTALL_PREFS).optional(), { label: E.msg({ defaultMessage: "Installation", id: "47svuNMHCd" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "Whether users install plugins themselves or get them automatically.", id: "pMktInstD1" }), { docsOnly: false }), long: w.longDescription("`available` (the default) lets users install from the Directory's Organization tab. `auto_install` installs automatically once per pin (the commit SHA, or a `url` source's `manifestSha256`); a plugin the user removes stays removed until the pin changes. `required` reinstalls on every sync, so it cannot stay removed. A change that only moves the pin of existing entries, with nothing else in the configuration changed, reaches running apps without a restart once the app's next two configuration checks both return it; any other change to this list asks for a restart. An `auto_install` or `required` entry without that pin (a full 40-character commit SHA in `ref`, or `manifestSha256` for a `url` source) is treated as `available` and reported as a config warning: the marketplace still lists, but the entry installs nothing. Left at (or treated as) `available`, a `url` marketplace served from your inference gateway's or bootstrap server's own origin may instead mark individual plugins `\"installationPreference\": \"auto_install\"` in its `marketplace.json`: those install automatically with no pin (each such archive needs a `sha256`), and a plugin the user removes stays removed. On any other origin those marks are ignored.", { docsOnly: false }) } }), credentialKind: w.subfield(j.z.enum(Bl).optional(), Qn), credentialHelper: w.subfield(j.z.string().min(1).optional(), { label: E.msg({ defaultMessage: "Credential helper", id: "9bQZ2JN+mX" }), remotePolicy: { requiresUserConsent: true }, description: { short: w.shortDescription(E.msg({ defaultMessage: "Executable that prints an access token for this marketplace.", id: "+x3hZrl+4b" }), { docsOnly: false }), long: w.longDescription('Prints to stdout one of: a bare token (sent as the git password for username `x-access-token`, which GitHub, GitLab and Azure DevOps accept, and as `Authorization: Bearer` for `url` sources); git-credential lines `username=<user>` and `password=<token>` when the host needs a particular username (Bitbucket Data Center project or repository access tokens on 9.3+: `x-token-auth`; GitLab deploy tokens: `gitlab+deploy-token-N`) \u2014 sent as HTTP Basic for `url` sources; `authtype=Bearer` and `credential=<token>` to send `Authorization: Bearer <token>` (Bitbucket Data Center HTTP access tokens on any version); or, for `url` sources only, a JSON object of HTTP headers such as `{"Authorization": "Bearer \u2026", "X-Tenant": "acme"}` (the form an MCP server\'s `headersHelper` prints), all sent on every request to that marketplace \u2014 a `git` source refuses this form. Other keys, blank lines and CRLF are ignored in the line forms; output that opens with `{` must be a valid header object or the fetch is refused.', { docsOnly: false }) }, predicates: { show: Ll, required: Ll } }) };
  ql.marketplaceRef = w.subfield(j.z.string().min(1).optional(), { label: E.msg({ defaultMessage: "Ref", id: "Yz6RnPXq2r" }), placeholder: E.msg({ defaultMessage: "Branch, tag, or commit SHA", id: "r5djcSLDYh" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "Commit SHA, branch, or tag. Leave empty to track the default branch; auto_install and required need a full 40-character commit SHA.", id: "pMktRefDs1" }), { docsOnly: false }) }, predicates: { show: Fl } });
  var zl = { ref: ql.marketplaceRef, path: w.subfield(j.z.string().min(1).optional(), { label: E.msg({ defaultMessage: "Subpath", id: "Hy0W3kYc6J" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "Folder within the repository that contains the marketplace, when it isn\u2019t at the root.", id: "pMktPathD1" }), { docsOnly: false }) }, predicates: { show: Fl } }), ...er }, v_ = { manifestSha256: w.subfield(j.z.string().regex(Se.SHA256_HEX, "Manifest SHA-256 must be a 64-character hex digest").transform((e) => e.toLowerCase()).optional(), { label: E.msg({ defaultMessage: "Manifest SHA-256", id: "pMktMfSha1" }), support: { availableInVersion: "1.32352.0" }, placeholder: E.msg({ defaultMessage: "64-char hex SHA-256 of marketplace.json", id: "pMktMfSha2" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "SHA-256 of the exact marketplace.json to accept. Without it auto_install and required act as available; a served manifest with any other digest is refused.", id: "pMktMfSha3" }), { docsOnly: false }) }, predicates: { show: y_ } }), ...er, credentialKind: w.subfield(j.z.enum(ql.MARKETPLACE_CREDENTIAL_KINDS).optional(), Qn) }, Zn = { label: E.msg({ defaultMessage: "Source", id: "cc9hc4+0K4" }), support: { values: { url: { availableInVersion: "1.32352.0" } } }, optionLabels: { github: E.msg({ defaultMessage: "GitHub", id: "SYEyDpPjNk" }), git: E.msg({ defaultMessage: "Git URL", id: "TpLDdW3nvS" }), url: E.msg({ defaultMessage: "Marketplace URL", id: "PjhC2D2FaO" }) }, description: { short: w.shortDescription(E.msg({ defaultMessage: "Where the marketplace is fetched from: a GitHub repository (set repo), any Git remote (set url), or a hosted marketplace.json file (set url).", id: "l67dEmmDaG" })) }, predicates: { required: () => true } }, __ = `For \`git\` sources, the HTTPS remote the app clones. For \`url\` sources, the HTTPS address of a \`marketplace.json\` whose plugins are \`archive\` entries (a zip \`url\` plus its \`sha256\`; \`ref\` and \`path\` do not apply). Archive URLs must be same-origin with the manifest URL: that origin is the only host to open on the firewall and the only one a credential is sent to. If any archive fails to download or verify, nothing from that fetch is installed and the next sync retries.

When Installation is \`auto_install\` or \`required\`, set \`manifestSha256\` to the SHA-256 of that exact file and give every archive a \`sha256\`: a served manifest with a different digest is refused and unpinned archives are skipped, so publishing a new manifest means updating \`manifestSha256\`; with no \`manifestSha256\` at all the entry is treated as \`available\` (and a config warning says so). A marketplace served from your inference gateway's or bootstrap server's own origin may instead leave Installation at \`available\` and mark individual plugins \`"installationPreference": "auto_install"\` in the manifest (each with a \`sha256\`); those install with no pin and a new manifest is picked up on the periodic re-fetch. On any other origin the per-plugin marks are ignored.

\`credentialKind\` selects what is sent: \`anonymous\` (the default) nothing, \`userGit\` the user's stored git credential for that host as HTTP Basic, \`credentialHelper\` the helper's output as \`Authorization\` (or, for \`url\` sources, as the HTTP headers it prints as a JSON object), and \`inferenceCredential\` (\`url\` sources only) the credential the app already sends your inference gateway or enabled bootstrap server, so the manifest must be on one of those two origins; when there is nothing to send yet, no request is made and the entry reports why. See [Host the marketplace over HTTPS](${Se.COWORK_3P_DOCS_BASE}/extensions#host-the-marketplace-over-https-instead-of-git) for an example manifest and credential details.`;
  ql.marketplaceUrl = w.subfield(we.urlSchema({ allowLoopbackHttp: true }), { label: E.msg({ defaultMessage: "URL", id: "5M+YdqOWGS" }), isPrimaryKey: true, description: { short: w.shortDescription(E.msg({ defaultMessage: "HTTPS Git remote of the marketplace repository (git), or direct HTTPS URL of a hosted marketplace.json file (url).", id: "p6oo8hoZ4V" })), long: w.longDescription(__) }, predicates: { show: xl, required: xl } });
  ql.marketplaceRepo = w.subfield(j.z.string().regex(Vl, "Repository must be in the form owner/repo, e.g. anthropics/skills").transform((e) => e.toLowerCase()), { label: E.msg({ defaultMessage: "Repository", id: "ZHK3DVhcxt" }), isPrimaryKey: true, placeholder: E.msg({ defaultMessage: "owner/repo", id: "3pZ8Ut7zIL" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "GitHub repository in owner/repo form. Case-insensitive.", id: "2cD0skIoWu" })) }, predicates: { show: Dl, required: Dl } });
  ql.AllowedPluginMarketplace = Jn(j.z.discriminatedUnion("source", [j.z.object({ source: w.subfield(j.z.literal("github"), Zn), repo: ql.marketplaceRepo, ...zl }), j.z.object({ source: w.subfield(j.z.literal("git"), Zn), url: ql.marketplaceUrl, ...zl }), j.z.object({ source: w.subfield(j.z.literal("url"), Zn), url: ql.marketplaceUrl, ...v_ })])).transform((e) => Gl(e) ? { ...e, installationPreference: "available" } : e);
  var w_ = w.annotate(j.z.array(ql.AllowedPluginMarketplace.nullable().catch(null)), { maxItems: 100 }).transform((e) => e.filter((t) => t !== null));
  function Wl(e, t) {
    if (!Array.isArray(e)) return;
    e.forEach((o, s) => {
      var n;
      let i = ql.AllowedPluginMarketplace.safeParse(o), u = o && typeof o === "object" ? o : void 0, p = typeof (u === null || u === void 0 ? void 0 : u.repo) === "string" && Vl.test(u.repo) ? `"${u.repo}"` : `[${s}]`;
      if (i.success) {
        let b = u === null || u === void 0 ? void 0 : u.installationPreference;
        if (typeof b === "string" && b !== ((n = i.data.installationPreference) !== null && n !== void 0 ? n : "available")) {
          let S = i.data.source === "url" ? "`manifestSha256`" : "a full 40-character commit SHA in `ref`";
          t(`allowedPluginMarketplaces entry ${p}: ${b} requires ${S}; showing as available instead`, "clamp");
        }
        return;
      }
      let y = i.error.issues.map((b) => `${b.path.join(".") || "."}: ${b.message}`).join("; ");
      t(`allowedPluginMarketplaces entry ${p} dropped \u2014 ${y}`);
    });
  }
  ql.PluginsConfig = j.z.object({ remoteUrl: w.field(w.annotate(we.urlSchema().optional(), { redact: "hostname" }), { flatKey: "organizationPluginsUrl", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" }, visibility: "public-undocumented", executionTarget: "desktop" }, deprecations: [{ path: "organizationPluginsUrl", use: 'an allowedPluginMarketplaces entry with "source": "url"', effect: "plugins will no longer be fetched or updated from that endpoint; the ones it already installed will stay until the key is removed from the configuration, which then retires them", ...rs.BATCH_2026_09 }], remotePolicy: { rejectLoopback: true, originPinned: { carries: "local-credential" } }, title: E.msg({ defaultMessage: "Organization plugins endpoint", id: "OrgPluginsUrl" }), egressRequirements: (e, t) => {
    var o;
    return ((o = t.bootstrap) === null || o === void 0 ? void 0 : o.enabled) === false ? [] : Se.singleHostEgress(e);
  }, egressRequirementsLabel: E.msg({ defaultMessage: "Organization plugins index", id: "OrgPluginsUrlEgress" }), category: "plugins", predicates: { show: (e) => {
    var t;
    return ((t = e.plugins) === null || t === void 0 ? void 0 : t.remoteUrl) !== void 0;
  } }, description: { short: w.shortDescription(E.msg({ defaultMessage: "Typically supplied by your bootstrap server. Ignored when bootstrap is disabled.", id: "0PDitvSoS4" })) } }), settings: w.field(w.annotate(we.OrgPluginSettings.optional(), { redact: "keep" }), { flatKey: "orgPluginSettings", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" } }, title: E.msg({ defaultMessage: "Organization plugin settings", id: "hD0T/0cTEY" }), failClosedValue: we.ORG_PLUGIN_SETTINGS_PARSE_FAILED, unreadableStandIn: true, checkDropped: we.checkOrgPluginSettingsForDrops, deprecations: [we.ORG_PLUGIN_SETTINGS_RECORD_FORM, we.ORG_PLUGIN_PERMISSION_ASK_SESSION], category: "plugins", customRenderer: "orgPluginSettings", description: { short: w.shortDescription(E.msg({ defaultMessage: "Admin policy applied to plugin-delivered MCP servers.", id: "MW4a5sB6yS" })), long: w.longDescription('Locks per-tool permissions on MCP servers provided by any installed plugin \u2014 from the org-plugins directory or a plugin marketplace, remote or run locally \u2014 one entry per server name (compared case-insensitively):\n```json\n[{"serverName": "internal-search", "tools": [{"toolName": "delete_document", "permission": "blocked"}]}]\n```\nThe older record form (`{"mcpServers": {"internal-search": {"toolPolicy": {"delete_document": "blocked"}}}}`) is deprecated and accepted only until ' + rs.formatDeprecationDate((Yn = we.ORG_PLUGIN_SETTINGS_RECORD_FORM.supportEnds) !== null && Yn !== void 0 ? Yn : "") + `. Desktop versions before 1.15200.0 parse only the record form: on those builds an array value is ignored and plugin tool locks are **not enforced**, so update the fleet past 1.15200.0 before deploying the array form.

If a Managed MCP servers entry is for the same server (same URL, else same name), that entry decides alone: its \`toolPolicy\` (if any) applies and the entry here is ignored. A value that cannot be read blocks every tool of every plugin-provided MCP server no Managed MCP servers entry covers.

` + we.PLUGIN_MCP_TOOL_POLICY_CHANNEL_NOTE, { docsUrl: `${Se.COWORK_3P_DOCS_BASE}/configuration#orgpluginsettings` }) } }), marketplaces: w.field(w.annotate(w_.optional(), { redact: "presence" }), { flatKey: "allowedPluginMarketplaces", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.17377.1" } }, checkDropped: Wl, remotePolicy: { marketplaceUrlHygiene: true, hotAppliedWhen: b_ }, title: E.msg({ defaultMessage: "Plugin marketplaces", id: "SbDWhfly4c" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "Git repositories or hosted marketplace.json URLs to surface as plugin marketplaces in the Directory\u2019s Organization tab. The app re-fetches each periodically.", id: "57U/34BfkA" })) }, failClosedValue: [], egressRequirements: (e) => Array.isArray(e) ? e.map((t) => t.source === "github" ? "github.com" : Kl.egressAddress(t.url)).filter((t) => !!t) : [], egressRequirementsLabel: E.msg({ defaultMessage: "Plugin marketplaces", id: "SbDWhfly4c" }), category: "plugins", group: E.msg({ defaultMessage: "Plugin marketplaces", id: "SbDWhfly4c" }), addLabel: E.msg({ defaultMessage: "Add marketplace", id: "u1Y1OE1uGp" }), predicates: { warn: (e, t, o) => Gl(e) ? o.formatMessage(E.msg({ defaultMessage: "Automatic installation needs {source, select, url {a Manifest SHA-256} other {a full 40-character commit SHA in Ref}}. Without one this marketplace is treated as available: it is listed, but this setting installs nothing.", id: "BwpYj08tvc" }), { source: e.source }) : null }, presets: [{ label: "GitHub repo", item: { source: "github", repo: "" } }, { label: "Git URL", item: { source: "git", url: "" } }, { label: "Marketplace URL", item: { source: "url", url: "" } }, ...m_, { label: "Salesforce", section: "From partners", description: "salesforce/salesforce-skills on GitHub", item: { source: "github", repo: "salesforce/salesforce-skills", ref: "claude-prod" } }] }), sharingEndpoint: w.field(w.annotate(Jn(j.z.object({ url: w.subfield(we.urlSchema({ allowLoopbackHttp: true, rejectQueryAndFragment: true }), { label: E.msg({ defaultMessage: "URL", id: "5M+YdqOWGS" }), mono: true, placeholder: E.msg({ defaultMessage: "https://share.example.com/publish", id: "OrgShareUrlPh" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "HTTPS address each published item is POSTed to, with no query or fragment. Plain http on a loopback host is taken only from device management or the local file.", id: "OrgShareUrlHint" }), { docsOnly: false }) }, predicates: { required: () => true } }), credentialKind: w.subfield(j.z.enum(f_).optional(), { label: Qn.label, default: "anonymous", description: { short: w.shortDescription(E.msg({ defaultMessage: "What each request carries: nothing, a helper executable\u2019s output as Authorization, or the credential the app already sends its gateway or bootstrap server.", id: "OrgShareCredKd" }), { docsOnly: false }) } }), credentialHelper: er.credentialHelper })).optional(), { redact: "presence" }), { flatKey: "sharingEndpoint", support: { enabled: { scopes: ["3p"], availableInVersion: "2.9939.2" }, visibility: "public-undocumented" }, betaFeatureKey: "organizationSharing", exportTemplate: "organizationSharingOpenApi", remotePolicy: { rejectLoopback: true, hybrid: { scope: "excluded" } }, title: E.msg({ defaultMessage: "Organization sharing endpoint", id: "OrgShareTitle" }), egressRequirements: (e) => Se.singleHostEgress(e === null || e === void 0 ? void 0 : e.url), category: "plugins", group: E.msg({ defaultMessage: "Plugin marketplaces", id: "SbDWhfly4c" }), description: { short: w.shortDescription(E.msg({ defaultMessage: "HTTPS endpoint that receives the skills and plugins users publish to the organization. When set, users get a Publish to organization action.", id: "OrgShareHint" })), long: w.longDescription("When set, **Publish to organization** appears on a user's own skills and plugins, and each submission is one HTTPS `POST` of the item to `url`, for your organization's own review pipeline to accept or reject. Nothing is installed from this endpoint: approved items reach members through your plugin marketplaces (`allowedPluginMarketplaces`). The request and response contract is documented separately.\n\n`credentialKind` selects what the request carries: `anonymous` (the default) nothing; `credentialHelper` the output of the `credentialHelper` executable, either as `Authorization` or, when it prints a JSON object of HTTP headers, as those headers (the same helper formats a `url` marketplace entry accepts); `inferenceCredential` the credential the app already sends your inference gateway or enabled bootstrap server, so `url` must be on one of those two origins, and when there is nothing to send yet no request is made and the action says why.\n\nThe app follows no redirects from `url`. A loopback or non-`https` value is dropped when a bootstrap server or the hosted console delivers it (device management and the local configuration file may name a loopback host over plain `http`); a `credentialHelper` delivered by a bootstrap server that was not device-managed is held until the user allows it. Unset: no publish action is shown.") } }), userPluginMarketplacesEnabled: w.field(j.z.boolean().optional(), { flatKey: "userPluginMarketplacesEnabled", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" } }, title: E.msg({ defaultMessage: "Allow user-added plugin marketplaces", id: "v/P6I/BbB8" }), default: { displayOnly: true }, failClosedValue: false, category: "sandbox", group: is.GENERAL_RESTRICTIONS_GROUP, order: 6.6, description: { short: w.shortDescription(E.msg({ defaultMessage: "Allow users to add plugin marketplaces. When off, marketplaces your organization did not provision are hidden and the app\u2019s sessions do not load their plugins.", id: "oqdOf+hjLS" })), long: w.longDescription("When on (default), users can add plugin marketplaces from the plugin browser. Set to `false` to restrict plugins to your organization's marketplaces: the add-marketplace surfaces are hidden, and the app refuses adds that still reach it (deep links, stale UI). Any other marketplace present on the device is then hidden in every tab, whether a user added it in the app earlier or something outside the app registered it (for example Claude Code in a terminal, under `~/.claude`): its plugins are not listed, and installs and updates from it are refused. The sessions the app starts load plugins only from your organization's marketplaces, the organization plugins directory, the app's own uploads and the user's own skills folder, enforced through Claude Code's marketplace allowlist (`strictKnownMarketplaces`, passed as the app's managed settings). Nothing is deleted: removing the key or setting it back to `true` restores them. Marketplaces provisioned by your organization (`allowedPluginMarketplaces`) and the organization plugins directory are unaffected, and plugins users uploaded are governed by `userPluginUploadsEnabled`, not this key.\n\nThis is a feature-availability control, not a data boundary. Claude Code in a terminal reads the same `~/.claude` folder and is governed only by its own managed settings, not by this key. Claude Code may ignore this allowlist on a device that deploys its own Claude Code managed settings; restrict marketplaces in those settings as well.\n\nThis key applies only while the app runs in third-party mode. If users could otherwise sign in to Claude.ai on the device, also set `disableDeploymentModeChooser` so the app stays in third-party mode.", { docsUrl: `${Se.COWORK_3P_DOCS_BASE}/configuration#userpluginmarketplacesenabled` }) } }), userPluginUploadsEnabled: w.field(j.z.boolean().optional(), { flatKey: "userPluginUploadsEnabled", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" } }, title: E.msg({ defaultMessage: "Allow user-added plugins", id: "FC6Rd6B6Wv" }), default: { displayOnly: true }, failClosedValue: false, category: "sandbox", group: is.GENERAL_RESTRICTIONS_GROUP, order: 6.7, description: { short: w.shortDescription(E.msg({ defaultMessage: "Allow users to add their own plugins. When off, every in-app option for adding one is hidden and uploads that still reach the app are refused.", id: "7AFPPgSJBu" })), long: w.longDescription("When on (default), users can upload plugin files and create plugins with Claude. Set to `false` to stop users adding plugins of their own: every in-app option for doing so is hidden, and the app refuses uploads that still reach it.\n\nThis is a feature-availability control enforced in the app, not a data boundary: plugins already installed (or placed on disk outside the app) are not removed or blocked by this key. Plugins from organization-provisioned marketplaces and the organization plugins directory are unaffected.\n\nThis key applies only while the app runs in third-party mode. If users could otherwise sign in to Claude.ai on the device, also set `disableDeploymentModeChooser` so the app stays in third-party mode.", { docsUrl: `${Se.COWORK_3P_DOCS_BASE}/configuration#userpluginuploadsenabled` }) } }) });
});
var Cjn = (0, import_chunk_w1d7ygsk.V)(function(pd) {
  Object.defineProperty(pd, "__esModule", { value: true });
  pd.FeatureDiscoveryConfig = pd.AutoUpdateConfig = pd.ExtensionsConfig = pd.SURFACE_GRANT_FIELDS = pd.ChatSurfaceConfig = pd.CodeSurfaceConfig = pd.SSH_CLIENT_UNREADABLE_STAND_IN = pd.CoworkSurfaceConfig = pd.TokenLimitsConfig = pd.DictationConfig = pd.OtlpConfig = pd.OTLP_CONTENT_CATEGORIES = void 0;
  pd.dictationBaseUrl = id;
  pd.websocketCspSource = ir;
  pd.dictationCspSource = A_;
  pd.dictationEndpoints = O_;
  pd.surfaceOptionLock = P_;
  pd.isPlainGitBranchName = ld;
  pd.surfaceGrantOf = lr;
  pd.surfacesOf = rr;
  var T = require("/$bunfs/root/chunk-xz9h69d8.js"), od = xCr(), oo = Lwe(), sd = dX(), f = Vk(), ge = T4(), h = vj(), nd = Ime(), wt = NZ(), Ie = klt(), so = PEs(), pt = h.msg({ defaultMessage: "OpenTelemetry", id: "dYlenA3UP7" });
  pd.OTLP_CONTENT_CATEGORIES = ["userPrompts", "assistantResponses", "toolDetails", "toolContent", "rawApiBodies"];
  function S_(e) {
    if (!e) return false;
    try {
      let { protocol: t, hostname: o } = new URL(e);
      return t === "http:" && !wt.LOOPBACK_HOSTS.has(o);
    } catch (t) {
      return false;
    }
  }
  var Jl = ge.legacyKvEncodingNotice("otlpHeaders", "no exporter headers will be sent"), Ql = ge.legacyKvEncodingNotice("otlpResourceAttributes", "no custom resource attributes will be attached");
  pd.OtlpConfig = T.z.object({ endpoint: f.field(f.annotate(ge.urlWithSchemeCoercion.optional(), { redact: "hostname", gatewayServable: false }), { flatKey: "otlpEndpoint", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, remotePolicy: { rejectLoopback: true }, title: h.msg({ defaultMessage: "OpenTelemetry collector endpoint", id: "xovdJlXIM6" }), egressRequirements: ge.singleHostEgress, category: "telemetry", group: pt, order: 10, placeholder: h.msg({ defaultMessage: "https://otel.example.com", id: "b7vgLij1HS" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Where OpenTelemetry logs and metrics are sent. Leave blank to disable.", id: "Zhe9UuhccO" })) } }), protocol: f.field(f.annotate(T.z.enum(["http/protobuf", "http/json", "grpc"]).optional(), { gatewayServable: false }), { flatKey: "otlpProtocol", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, title: h.msg({ defaultMessage: "OpenTelemetry exporter protocol", id: "jETNRIFigw" }), default: "http/protobuf", category: "telemetry", group: pt, order: 11, description: { short: f.shortDescription(h.msg({ defaultMessage: "Transport protocol for the OpenTelemetry exporters.", id: "OtlpProtocolHint" })), long: f.longDescription("Code sessions export over the protocol set here. Chats and Cowork tasks export over `http/protobuf` instead of `grpc` on Windows, and on other platforms whenever the Claude Code engine is given an HTTP proxy (the operating system's proxy, `egressProxyUrl` or `egressProxyPacUrl`, or `HTTPS_PROXY` / `HTTP_PROXY` in a Claude Code settings file); the application log notes the substitution. The desktop application's own events always go over `http/json` to `<endpoint>/v1/logs`. None of this changes the endpoint, so choose `grpc` only for a collector that also serves OTLP/HTTP at the same address; otherwise keep `http/protobuf` and point `otlpEndpoint` at the collector's OTLP/HTTP receiver (conventionally port 4318).") }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  }, warn: (e) => e === "grpc" ? h.msg({ defaultMessage: "Chats and Cowork tasks on Windows or behind an HTTP proxy, and the app\u2019s own events, export over OTLP/HTTP to this same endpoint. Choose grpc only if the collector also accepts OTLP/HTTP there.", id: "OtlpProtocolGrpcWarn" }) : null } }), headers: f.field(f.annotate(ge.kvRecord(Jl).optional(), { redact: "presence", gatewayServable: false }), { flatKey: "otlpHeaders", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, deprecations: [Jl], title: h.msg({ defaultMessage: "OpenTelemetry exporter headers", id: "fO2poeLmt6" }), category: "telemetry", group: pt, order: 12, placeholder: { key: h.msg({ defaultMessage: "X-Scope-OrgID", id: "OtlpHeadersKeyPh" }), value: h.msg({ defaultMessage: "tenant-a", id: "OtlpHeadersValuePh" }) }, addLabel: h.msg({ defaultMessage: "Add header", id: "IxbsWX4wj4" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Static collector headers \u2014 routing and tenant headers only. No credentials here; use Collector authentication or the headers helper script for tokens.", id: "OtlpHeadersHint2" })) }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  }, warn: (e, t, o) => od.credentialHeadersWarn(e, o, "headersHelper") } }), authMode: f.field(f.annotate(T.z.enum(["none", "inference-credential"]).optional(), { gatewayServable: false }), { flatKey: "otlpAuthMode", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.30096.1" } }, title: h.msg({ defaultMessage: "Collector authentication", id: "OtlpCollectorAuthTitle" }), default: { displayOnly: "none" }, optionLabels: { none: h.msg({ defaultMessage: "None (static headers only)", id: "OtlpCollectorAuthNone" }), "inference-credential": h.msg({ defaultMessage: "Reuse the inference credential", id: "OtlpCollectorAuthReuse" }) }, category: "telemetry", group: pt, order: 12.3, description: { short: f.shortDescription(h.msg({ defaultMessage: "inference-credential sends the user\u2019s inference bearer token to the collector as Authorization: Bearer.", id: "OtlpCollectorAuthHint" })), long: f.longDescription("`inference-credential` adds `Authorization: Bearer <token>` to every export, using the token the app currently holds for the inference provider, with no helper script to deploy. The collector must accept that token as issued: an identity-provider sign-in (`external-idp`, gateway or Bedrock proxy) forwards the identity provider\u2019s token, which carries the audience you registered, Microsoft Entra on Foundry issues the Foundry resource\u2019s token, and Vertex workforce identity forwards a Google Cloud access token; static gateway and Bedrock keys are forwarded as-is. Because the token can also call inference as the user, use this only for a collector you operate; for anything else, use the headers helper script with an ingest-scoped credential. Kinds that never produce a bearer (AWS SigV4 kinds on Bedrock, Google ADC / OAuth files on Vertex, API-key kinds) export without it \u2014 use the helper script instead. Cowork tasks pick up the current token each time they start; a Code session keeps the token it started with for as long as it stays open; the desktop\u2019s own event exporter uses the current token on every flush. Before sign-in, exports go out unauthenticated. An `Authorization` header printed by the headers helper script wins over this.") }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  }, warn: (e, t) => {
    var o, s;
    if (e !== "inference-credential") return null;
    if (S_((o = t.otlp) === null || o === void 0 ? void 0 : o.endpoint)) return h.msg({ defaultMessage: "This sends the user\u2019s inference token over plain http to another host. Use an https collector endpoint.", id: "OtlpCollectorAuthCleartext" });
    if (!((s = t.inference) === null || s === void 0 ? void 0 : s.provider) || nd.credentialYieldsBearer(t.inference)) return null;
    return h.msg({ defaultMessage: "The configured inference credential is not sent as a bearer token, so telemetry will export without it. Use the headers helper script instead.", id: "OtlpCollectorAuthNoBearer" });
  } } }), headersHelper: f.field(f.annotate(wt.safeHelperPath.optional(), { pathKind: "file", gatewayServable: false }), { flatKey: "otlpHeadersHelper", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.30096.1" } }, remotePolicy: { requiresUserConsent: true }, title: h.msg({ defaultMessage: "OpenTelemetry headers helper script", id: "OtlpHeadersHelperTitle" }), category: "telemetry", group: pt, order: 12.6, placeholder: h.msg({ defaultMessage: "/usr/local/bin/otel-headers-helper", id: "OtlpHeadersHelperPlaceholder" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Absolute path to an executable that prints a JSON object of collector headers. Merged over the static headers and Collector authentication; the helper wins.", id: "OtlpHeadersHelperHint" })), long: f.longDescription('Absolute path to an executable that prints a single JSON object of HTTP headers on stdout, e.g. `{"Authorization": "Bearer \u2026"}`. The desktop runs it (no arguments; output cached for a few minutes, and a failure is not retried for 30 seconds) whenever it needs collector headers and merges the result over **OpenTelemetry exporter headers** and the **Collector authentication** header (the helper wins on conflict). Cowork tasks get the current output when they start; Code and Cowork sessions are also given the script as Claude Code\u2019s own `otelHeadersHelper`, so an open session re-runs it as tokens rotate (on Windows this applies to `.exe`, `.cmd` and `.bat` helpers; a `.ps1` helper applies at session start only); the desktop\u2019s own event exporter re-runs it per flush. Session start waits at most two seconds for a slow helper and otherwise proceeds without its headers until it finishes. Use this when the collector needs a credential the inference sign-in cannot provide, when the collector token rotates, or when the config comes from a hosted admin console, which cannot store header values. If the helper fails, telemetry is sent without its headers \u2014 check the app log.') }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  } } }), resourceAttributes: f.field(f.annotate(ge.kvRecord(Ql).optional(), { redact: "presence", gatewayServable: false }), { flatKey: "otlpResourceAttributes", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.5354.0" } }, deprecations: [Ql], title: h.msg({ defaultMessage: "OpenTelemetry resource attributes", id: "JgRwRuBWFK" }), category: "telemetry", group: pt, order: 13, placeholder: { key: h.msg({ defaultMessage: "enduser.id", id: "QkbhtcTa4t" }), value: h.msg({ defaultMessage: "alice@example.com", id: "KER1zNW5fX" }) }, addLabel: h.msg({ defaultMessage: "Add attribute", id: "fkzH83T+V/" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Extra resource attributes to attach to every span/metric. A static enduser.id set here always wins over the runtime identity.", id: "avoHZ0YdKZ" })), long: f.longDescription("Extra resource attributes to attach to every span, metric, and log sent to your collector. When End-user attribution is on and no `enduser.id` is set here, the desktop fills it with the signed-in user's runtime identity; a value you set here always wins. `process.owner` (the OS login name) is always emitted; set it here to override.") }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  } } }), desktopLogLevel: f.field(T.z.enum(["off", "error", "warn", "info", "debug"]).optional(), { flatKey: "otlpDesktopLogLevel", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.9255.0" } }, title: h.msg({ defaultMessage: "Desktop telemetry export level", id: "TcONUV0eiZ" }), default: "error", category: "telemetry", group: pt, order: 14, description: { short: f.shortDescription(h.msg({ defaultMessage: "Controls the Claude Desktop application\u2019s events, separate from Cowork and Code sessions. Defaults to error.", id: "wkZUOJzo5S" })) }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  } } }), contentCapture: f.field(f.annotate(ge.lenientEnumArray(pd.OTLP_CONTENT_CATEGORIES).optional(), { redact: "keep" }), { flatKey: "otlpContentCapture", readers: ["desktop", "m365", "code"], failClosedValue: [], support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.15962.0" } }, title: h.msg({ defaultMessage: "Content capture categories", id: "OtlpContentCaptureTitle" }), category: "telemetry", group: pt, order: 15, description: { short: f.shortDescription(h.msg({ defaultMessage: "Content categories the desktop exporter sends unredacted to your collector. Leave empty to redact all content (default).", id: "OtlpContentCaptureHint" })), long: f.longDescription(`Each category enables a class of raw content in OpenTelemetry events sent to your collector (this data never reaches Anthropic):
- \`userPrompts\` \u2014 user-typed prompt text
- \`assistantResponses\` \u2014 assistant message text
- \`toolDetails\` \u2014 tool input arguments, e.g. the web-search query string
- \`toolContent\` \u2014 tool output content, e.g. fetched page text or command stdout
- \`rawApiBodies\` \u2014 inference API request and response bodies, each cut at 61,440 characters by default

These mirror Claude Code's \`OTEL_LOG_*\` env vars; see the [Claude Code monitoring docs](https://code.claude.com/docs/en/monitoring-usage).`) }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  } } }), tracesEnabled: f.field(T.z.boolean().optional(), { flatKey: "otlpTracesEnabled", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.22209.0" } }, title: h.msg({ defaultMessage: "Export traces", id: "bKPAH/MBRZ" }), category: "telemetry", group: pt, order: 16, description: { short: f.shortDescription(h.msg({ defaultMessage: "Also export OpenTelemetry traces from Cowork tasks and Code sessions. Uses Claude Code\u2019s session tracing.", id: "eW1UlMFTJB" })), long: f.longDescription("Enables Claude Code's session tracing (`CLAUDE_CODE_ENHANCED_TELEMETRY_BETA=1` + `OTEL_TRACES_EXPORTER=otlp`) in spawned Cowork tasks and Code sessions. Each user interaction exports a trace whose spans and events carry `trace_id`/`span_id`, enabling end-to-end correlation in your observability backend (metrics do not carry trace context; correlate those via `session.id`). Traces go to the collector endpoint and protocol configured above. When `otlpEndpoint` is set, this key alone decides whether those sessions export traces: leaving it unset or `false` keeps traces off even if Claude Code's own settings or managed settings (for example a `managed-settings.json` on the device) turn tracing on. Without `otlpEndpoint` it has no effect. The span structure may evolve between Claude Code releases; see the [Claude Code monitoring docs](https://code.claude.com/docs/en/monitoring-usage).") }, predicates: { show: (e) => {
    var t;
    return ((t = e.otlp) === null || t === void 0 ? void 0 : t.endpoint) !== void 0;
  } } }) });
  pd.DictationConfig = T.z.object({ enabled: f.field(T.z.boolean().optional(), { flatKey: "dictationEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.44121.1" }, executionTarget: "desktop", visibility: "public-undocumented" }, remotePolicy: { hybrid: { scope: "excluded" }, hotApplied: true }, title: h.msg({ defaultMessage: "Dictation", id: "DictationEnabled" }), category: "connection", predicates: { show: (e) => {
    var t;
    return ((t = e.dictation) === null || t === void 0 ? void 0 : t.enabled) !== void 0;
  } }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Typically supplied by your bootstrap server when the gateway offers dictation.", id: "DictationEnabledDesc" })) } }) });
  var E_ = "user/dictation";
  function rd(e) {
    let t = e.inference;
    if ((t === null || t === void 0 ? void 0 : t.provider) !== "gateway" || !t.baseUrl) return null;
    let o;
    try {
      o = new URL(t.baseUrl);
    } catch (i) {
      return null;
    }
    if (o.protocol !== "https:" && !wt.LOOPBACK_HOSTS.has(o.hostname)) return null;
    if (o.hostname.startsWith("[")) return null;
    let s = t.credential;
    if ((s === null || s === void 0 ? void 0 : s.kind) !== "interactive") return null;
    let n = s.oidc;
    if ((n === null || n === void 0 ? void 0 : n.issuer) || (n === null || n === void 0 ? void 0 : n.tokenUrl)) return null;
    return t.baseUrl;
  }
  function id(e) {
    var t;
    if (!((t = e.dictation) === null || t === void 0 ? void 0 : t.enabled)) return null;
    let o = rd(e);
    if (o === null) return null;
    let s = new URL(o);
    if (!s.pathname.endsWith("/")) s.pathname += "/";
    return new URL(E_, s).href;
  }
  function ir(e) {
    let t = new URL(e);
    return { host: t.host, scheme: t.protocol === "http:" ? "ws://" : "wss://" };
  }
  function A_(e) {
    let t = rd(e);
    return t === null ? null : ir(t);
  }
  function O_(e) {
    let t = id(e);
    if (t === null) return null;
    let o = new URL(`${t}/`), s = new URL("stream", o);
    return s.protocol = ir(t).scheme.slice(0, -2), { ticketUrl: new URL("ticket", o).href, streamUrl: s.href };
  }
  var ed = (e) => {
    var t;
    return ((t = e.tokenLimits) === null || t === void 0 ? void 0 : t.maxPerWindow) !== void 0;
  };
  pd.TokenLimitsConfig = T.z.object({ maxPerWindow: f.field(T.z.coerce.number().int().positive().optional(), { flatKey: "inferenceMaxTokensPerWindow", readers: ["desktop", "code"], remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: h.msg({ defaultMessage: "Max tokens per window", id: "aTTY7rU6Bh" }), category: "limits", suffix: h.msg({ defaultMessage: "tokens", id: "ZON8uMn14w" }), placeholder: h.msg({ defaultMessage: "5000000", id: "1yRrT11eFX" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Per-user soft cap, counted client-side over the token cap window. Not a server-enforced quota.", id: "DJ6DrJYlMf" })), long: f.longDescription("Requires `inferenceTokenWindowHours` to also be set \u2014 without a window length the cap is inert and no limit is enforced.") } }), windowHours: f.field(T.z.coerce.number().int().positive().lte(720).optional(), { flatKey: "inferenceTokenWindowHours", readers: ["desktop", "code"], remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: h.msg({ defaultMessage: "Token cap window", id: "FSyyISlTnS" }), category: "limits", suffix: h.msg({ defaultMessage: "hours", id: "4MengK4xQ/" }), placeholder: h.msg({ defaultMessage: "24", id: "wAM7X1pIFa" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Tumbling window length for the token cap. Max 720 hours (30 days).", id: "3iLLaW8pc5" })), long: f.longDescription("Required when `inferenceMaxTokensPerWindow` is set \u2014 the cap only takes effect once both are configured.") }, predicates: { show: ed, required: ed } }) });
  var ls = h.msg({ defaultMessage: "Allowed surfaces", id: "XhBz9JhRHE" }), M_ = h.msg({ defaultMessage: "Chat restrictions", id: "Ztk/Zc3utE" }), as = { coworkSurface: (e) => rr(e).cowork, codeSurface: (e) => {
    var t;
    return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  }, chatSurface: (e) => rr(e).chat }, T_ = h.msg({ defaultMessage: "At least one surface must remain enabled.", id: "LastSurfaceReason" }), I_ = h.msg({ defaultMessage: "This choice would leave no surface on. Turn on Code first.", description: "\u201CCode\u201D is a product name \u2014 keep it untranslated in Latin script; translate the rest naturally.", id: "LastSurfaceOptionReason" });
  function ar(e, t) {
    let o = t === "codeSurface" ? void 0 : ud(e);
    if (o) return o;
    if (!as[t](e)) return false;
    for (let s of Object.keys(as)) if (s !== t && as[s](e)) return false;
    return T_;
  }
  function nr(e) {
    return lr(e) === void 0;
  }
  function P_(e, t, o) {
    var s;
    if (!e.surfaceGrants || as.codeSurface(o)) return false;
    let n = (s = t === void 0 ? void 0 : f.surfaceGrantFor(e.surfaceGrants, t)) !== null && s !== void 0 ? s : cd(o);
    return n.chat || n.cowork ? false : I_;
  }
  pd.CoworkSurfaceConfig = T.z.object({ enabled: f.field(T.z.boolean().optional(), { flatKey: "coworkTabEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.9659.0" } }, title: h.msg({ defaultMessage: "Allow Cowork", description: "\u201CCowork\u201D is a product name \u2014 keep it untranslated in Latin script; translate the rest of the sentence naturally.", id: "pq8krELyA1" }), default: true, failClosedValue: false, remotePolicy: { applyUnverified: false }, category: "sandbox", group: ls, label: h.msg({ defaultMessage: "Cowork", description: "[no-translate] Product name; must remain exactly \u201CCowork\u201D in every locale.", id: "+MH0VdRCHz" }), order: 0, predicates: { show: nr, disabled: (e) => ar(e, "coworkSurface") }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Enable Cowork. Claude works on longer tasks like research, analysis, and documents.", description: "\u201CCowork\u201D is a product name \u2014 keep it untranslated in Latin script; translate the rest of the sentence naturally.", id: "N8nKVnjFDF" })) } }) });
  pd.SSH_CLIENT_UNREADABLE_STAND_IN = "/dev/null/unreadable-ssh-client";
  var R_ = /^[A-Za-z0-9][A-Za-z0-9._/-]{0,199}$/, ad = /^[A-Za-z0-9][A-Za-z0-9._-]{0,99}\/[A-Za-z0-9][A-Za-z0-9._-]{0,99}$/, or = 2048, D_ = /^https:\/\/[^@?#\s]+$/, x_ = /https?:\/\/[^/]+\/([^/]+\/[^/]+?)(?:\.git)?$/;
  function L_(e) {
    return R_.test(e) && !e.includes("..") && !e.includes("/-");
  }
  function ld(e) {
    return e !== "HEAD" && !e.endsWith(".") && !/^[0-9a-f]{40}$/i.test(e) && !e.startsWith("refs/") && L_(`refs/heads/${e}`) && e.split("/").every((t) => t !== "" && !t.startsWith(".") && !t.endsWith(".lock"));
  }
  function U_(e) {
    var t;
    let o = { refused: `Must be at most ${or} characters` };
    if (!/^https:\/\//i.test(e)) return { refused: "Must be an https:// address" };
    if (e.length > or) return o;
    let s;
    try {
      s = new URL(e);
    } catch (p) {
      return { refused: "Not a valid URL" };
    }
    if (/[?#]/.test(e)) return { refused: "Must not carry a query string or fragment" };
    let n = s.pathname.replace(/\/+$/, "");
    if (n === "") return { refused: "Must name a repository after the host" };
    if (/%(?!20)/.test(n)) return { refused: "The path may hold no percent-escape but %20" };
    let i = `https://${s.host}${n}`;
    if (!D_.test(i)) return { refused: "The path must not hold an @" };
    if (i.length > or) return o;
    let u = (t = x_.exec(i)) === null || t === void 0 ? void 0 : t[1];
    if (u !== void 0 && `/${u}` !== n.replace(/\.git$/, "")) return { refused: "An owner/repo may only be the whole path" };
    if (u !== void 0 && !ad.test(u)) return { refused: "A two-part path is an owner and a repository: letters, numbers and . _ - (100 characters each), starting with a letter or number" };
    return { url: i };
  }
  pd.CodeSurfaceConfig = T.z.object({ enabled: f.field(T.z.boolean().optional(), { flatKey: "isClaudeCodeForDesktopEnabled", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } }, title: h.msg({ defaultMessage: "Allow Code", id: "5fWJP5tZx6" }), default: true, failClosedValue: false, remotePolicy: { applyUnverified: false }, category: "sandbox", group: ls, label: h.msg({ defaultMessage: "Code", id: "h2vipunVVd" }), order: 1, predicates: { disabled: (e) => ar(e, "codeSurface") }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Enable Code. Claude writes and runs code.", id: "/vs1W12TA0" })) } }), sshHostAllowlist: f.field(f.annotate(T.z.array(T.z.string().trim().min(1)).optional(), { glob: true }), { flatKey: "sshHostAllowlist", support: { enabled: { scopes: ["3p"], availableInVersion: "1.40609.0" }, executionTarget: "desktop" }, betaFeatureKey: "sshRemoteSessions", title: h.msg({ defaultMessage: "SSH host allowlist", id: "t3bJrMvGzZ" }), failClosedValue: [], category: "sandbox", group: Ie.CODE_SURFACE_GROUP, order: 16, placeholder: h.msg({ defaultMessage: "*.dev.example.com", id: "KWUwe1EqgP" }), predicates: { show: (e) => {
    var t;
    return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } }, description: { short: f.shortDescription(h.msg({ defaultMessage: "SSH hosts users may connect to for Code sessions. Empty or unset: off unless the device\u2019s Claude Code managed-settings allowlist applies. * allows any host.", id: "KXzmrLfnUT" })), long: f.longDescription("When off, the SSH option is hidden and any connection attempt is refused.\n\nEntries are exact hostnames (`build01.corp.example.com`) or `*.` wildcards (`*.corp.example.com` matches the apex and subdomains at any depth); matching is case-insensitive and ignores a `user@` prefix. The list is compared with the `HostName` that the user's SSH configuration (`~/.ssh/config`) gives for the host they entered, or with the entered host itself when the configuration has no entry for it or cannot be evaluated. So an alias is allowed when the host it points to is listed, whatever the alias is called, and refused when it is not. `ProxyCommand` is permitted when the resolved host matches (this key governs which hosts the app offers, not network egress); `ProxyJump` is permitted likewise on the system-OpenSSH engine (the default on macOS and Linux; see `sshTransport`) and refused, with a message suggesting `ProxyCommand`, by the built-in SSH library.\n\nThis is opt-in because a remote session runs Claude Code on the SSH host and the app forwards the session's inference credential to it, plus your OTLP collector endpoint and auth headers when `otlpEndpoint` is set. List only hosts you trust with those. Token-based credentials are forwarded. File-based credentials (Bedrock IAM Identity Center sign-in or AWS profile, Vertex Google sign-in or a credentials file) are never forwarded, and a session that needs one from the device is refused.\n\nIf this key is unset, an `sshHostAllowlist` in Claude Code's own managed-settings file on the device still applies; when both are set, this key wins where the app's configuration is admin-managed (MDM, the admin console, or a device-managed bootstrap URL) and otherwise applies only while that file sets none. `allowedWorkspaceFolders` still applies on the remote host. Claude Code's managed settings on a host replace the sandbox, network, permission, and MCP rules this app sends unless they set `parentSettingsBehavior` to `\"merge\"`.", { docsUrl: `${ge.COWORK_3P_DOCS_BASE}/ssh-remote-sessions` }) } }), sshClientPath: f.field(f.annotate(wt.safeHelperPath.optional(), { pathKind: "file" }), { flatKey: "sshClientPath", support: { enabled: { scopes: ["3p"], availableInVersion: "1.46388.1" }, executionTarget: "desktop" }, betaFeatureKey: "sshRemoteSessions", remotePolicy: { requiresUserConsent: true }, failClosedValue: pd.SSH_CLIENT_UNREADABLE_STAND_IN, unreadableStandIn: true, title: h.msg({ defaultMessage: "SSH client program", id: "TnZHycC4Xk" }), category: "sandbox", group: Ie.CODE_SURFACE_GROUP, order: 16.5, placeholder: h.msg({ defaultMessage: "/opt/openssh/bin/ssh", id: "matzhaiItp" }), predicates: { show: (e) => {
    var t;
    return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Absolute path to the OpenSSH ssh program the app runs for SSH sessions. Unset: the first ssh on the user\u2019s PATH.", id: "CkU2BFhxiC" })), long: f.longDescription("Pins which OpenSSH client the app runs wherever it starts `ssh`: evaluating the user's SSH configuration (`ssh -G`), making the SSH connection and its channels, and the Code tab's terminal. `ssh-keygen` and `ssh-add` are taken from the same directory when they exist there, otherwise from PATH. The program must be OpenSSH 7.6 or newer (on Windows, Win32-OpenSSH 9.4 or newer to carry the connection); on macOS and Linux a wrapper script that ends in one is accepted, on Windows it must be a native `.exe` (not a .cmd, .bat or .ps1 script). When this key is set and the program is missing, cannot be run, or is too old, SSH sessions fail with an error telling the user to ask their IT administrator (the configured path is in its details) \u2014 the app never falls back to another ssh. The connection itself runs through this program on the system-OpenSSH engine, which the SSH connection engine setting's `system-openssh` value selects on every platform, including Windows; when the app's built-in SSH library makes the connection instead, this key still governs configuration evaluation (`ssh -G`), host-key lookups (`ssh-keygen`) and the terminal.", { docsUrl: `${ge.COWORK_3P_DOCS_BASE}/ssh-remote-sessions` }) } }), sshTransport: f.field(T.z.enum(["auto", "system-openssh", "builtin"]).optional(), { flatKey: "sshTransport", support: { enabled: { scopes: ["3p"], availableInVersion: "1.52386.0" }, executionTarget: "desktop" }, betaFeatureKey: "sshRemoteSessions", title: h.msg({ defaultMessage: "SSH connection engine", id: "SshTransportTitle" }), default: { displayOnly: "auto" }, optionLabels: { auto: h.msg({ defaultMessage: "Automatic (the build\u2019s default)", id: "SshTransportAuto" }), "system-openssh": h.msg({ defaultMessage: "System OpenSSH client", id: "SshTransportSystemOpenSsh" }), builtin: h.msg({ defaultMessage: "Built-in SSH library", id: "SshTransportBuiltin" }) }, category: "sandbox", group: Ie.CODE_SURFACE_GROUP, order: 16.7, predicates: { show: (e) => {
    var t;
    return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Which SSH engine carries Code sessions: the OpenSSH ssh program on the device, or the app\u2019s built-in SSH library. Unset or auto: the build\u2019s default.", id: "SshTransportHint" })), long: f.longDescription("`system-openssh`: the app makes every SSH connection by running an OpenSSH `ssh` program \u2014 the one `sshClientPath` names, otherwise the first `ssh` on the user's PATH (on Windows, a Win32-OpenSSH `ssh.exe`: the PATH one, else the in-box or Microsoft-installed client) \u2014 so the organization's own OpenSSH build, with its Kerberos/GSSAPI, certificate and `ssh_config` support, is what authenticates. The program must be OpenSSH 7.6 or newer (Windows: Win32-OpenSSH 9.4 or newer). When `sshClientPath` is set and that program cannot be used, sessions fail with an error telling the user to ask their IT administrator rather than falling back; when it is unset and Windows has no usable client, the built-in library is used.\n\n`builtin`: the app's built-in SSH library makes the connection, whatever the build's default.\n\n`auto` or unset: the build's default engine.\n\nAn explicit value applies to new connections (sessions already connected keep their engine) and overrides the build's default in both directions, including any remote switch-off Anthropic ships for the OpenSSH engine \u2014 so with `system-openssh` set, switching back is done here, by setting `builtin`.", { docsUrl: `${ge.COWORK_3P_DOCS_BASE}/ssh-remote-sessions` }) } }), allowedRepositories: f.field(f.annotate((() => {
    let e = (i) => i.source === "github", t = (i) => i.source === "git", o = { label: h.msg({ defaultMessage: "Source", id: "cc9hc4+0K4" }), optionLabels: { github: h.msg({ defaultMessage: "GitHub", id: "SYEyDpPjNk" }), git: h.msg({ defaultMessage: "Git URL", id: "TpLDdW3nvS" }) }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Where the repository lives: GitHub (set repo) or any other Git host (set url).", id: "CodeRepoSourceHint" })) }, predicates: { required: () => true } }, s = { ref: f.subfield(so.marketplaceRef.transform((i, u) => {
      if (i === void 0) return;
      let p = i.trim().replace(/^refs\/heads\//, "");
      if (!ld(p)) return u.addIssue("Branch names can only use letters, numbers, and . _ / -"), T.z.NEVER;
      return p;
    }), { label: h.msg({ defaultMessage: "Branch", id: "CodeRepoBranch" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Branch a session starts from. Leave it out for the repository\u2019s default branch. The person starting a session may type another.", id: "CodeRepoBranchHint" }), { docsOnly: false }) } }), name: f.subfield(T.z.string().trim().min(1).max(64).optional(), { label: h.msg({ defaultMessage: "Name", id: "CodeRepoName" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Shown in the repository list in place of the address. Up to 64 characters.", id: "CodeRepoNameHint" }), { docsOnly: false }) } }) }, n = T.z.discriminatedUnion("source", [T.z.object({ source: f.subfield(T.z.literal("github"), o), repo: f.subfield(so.marketplaceRepo.refine((i) => ad.test(i), "Owner and repository names can only use letters, numbers, and . _ - (100 characters each)"), { label: h.msg({ defaultMessage: "Repository", id: "ZHK3DVhcxt" }), isPrimaryKey: true, placeholder: h.msg({ defaultMessage: "owner/repo", id: "3pZ8Ut7zIL" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "GitHub repository in owner/repo form. Case-insensitive.", id: "2cD0skIoWu" })) }, predicates: { show: e, required: e } }), ...s }), T.z.object({ source: f.subfield(T.z.literal("git"), o), url: f.subfield(so.marketplaceUrl.transform((i, u) => {
      let p = U_(i);
      if ("refused" in p) return u.addIssue(p.refused), T.z.NEVER;
      return p.url;
    }), { label: h.msg({ defaultMessage: "URL", id: "5M+YdqOWGS" }), isPrimaryKey: true, description: { short: f.shortDescription(h.msg({ defaultMessage: "HTTPS clone URL of the repository, with no user name, password, query string or fragment.", id: "CodeRepoUrlHint" })) }, predicates: { show: t, required: t } }), ...s })]);
    return f.annotate(T.z.array(n.nullable().catch(null)), { maxItems: 100 }).transform((i) => i.filter((u) => u !== null));
  })().optional(), { redact: "presence" }), { flatKey: "codeAllowedRepositories", support: { enabled: { scopes: ["3p"], availableInVersion: "2.16120.0" }, visibility: "public-undocumented" }, betaFeatureKey: "selfHostedSessions", remotePolicy: { hybrid: { scope: "excluded" } }, title: h.msg({ defaultMessage: "Allowed repositories", id: "CodeReposTitle" }), failClosedValue: [], emptyListIsAuthored: true, checkDropped: (e, t) => {
    var o;
    let s = f.unwrapZod(pd.CodeSurfaceConfig.shape.allowedRepositories), n = f.unwrapZod((o = f.arrayElementOf(s)) !== null && o !== void 0 ? o : s);
    (Array.isArray(e) ? e : []).forEach((i, u) => {
      let p = n.safeParse(i);
      if (!p.success) {
        let y = p.error.issues.map((b) => `${b.path.join(".") || "."}: ${b.message}`).join("; ");
        t(`codeAllowedRepositories[${u}] dropped: ${y}`);
      }
    });
  }, category: "sandbox", group: Ie.CODE_SURFACE_GROUP, order: 17, predicates: { show: (e) => {
    var t;
    return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } }, addLabel: h.msg({ defaultMessage: "Add repository", id: "CodeReposAdd" }), presets: [{ label: "GitHub repo", item: { source: "github", repo: "" } }, { label: "Git URL", item: { source: "git", url: "" } }], description: { short: f.shortDescription(h.msg({ defaultMessage: "Git repositories Claude Code may work in.", id: "CodeReposHint" })), long: f.longDescription('The git repositories Claude Code may work in on this install, in the two git forms a plugin marketplace entry takes: `{"source": "github", "repo": "owner/repo"}`, or `{"source": "git", "url": "https://git.example.com/group/project.git"}` for another Git host. Either may add `ref`, the branch a session starts from (a branch name, not a tag or commit; leave it out for the default branch; a person may type another), and `name`, a label shown for the address (up to 64 characters). A `url` is `https://` with no user name, password, query string or fragment (Azure DevOps shows a clone URL with a user name: leave it out); an address written without a scheme is read as `https://`.\n\nBeta. Today: where Code sessions run on a self-hosted session host, people pick a session\'s repository from this list and cannot type an address; with no list, or an empty one, none is offered and a session starts in the environment\'s own workspace. The session host still applies its own policy to what it clones. Where sessions run on the device, the key is accepted and has no effect yet: limiting local folders to those whose `origin` is listed, alongside `allowedWorkspaceFolders`, is planned.\n\nEntries are held to what a session host, the only reader so far, accepts: owner and repository names of letters, numbers and `. _ -` (100 characters each) that must start with a letter or number, a branch name both it and git accept, an address of at most 2048 characters whose path has no percent-escape but `%20`.\n\nUnset: there is no list. Empty, or a value that cannot be read as a list: there are no repositories, so none can be chosen; an unreadable value, or a list with no readable entry, is reported and never treated as unset; an empty list an admin writes stays an empty list on every surface. An entry that cannot be read is left out and reported by its position (the first is 0), with the reason; the other entries, and the rest of the configuration, stand.') } }) });
  pd.ChatSurfaceConfig = T.z.object({ enabled: f.field(T.z.boolean().optional(), { flatKey: "chatTabEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.13576.0" }, executionTarget: "desktop" }, title: h.msg({ defaultMessage: "Allow Chat", id: "0Cc9oG2J04" }), category: "sandbox", group: ls, label: h.msg({ defaultMessage: "Chat", id: "WTrOy36sdu" }), order: 2, predicates: { show: nr, disabled: (e) => ar(e, "chatSurface") }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Enable Chat. Quick questions and drafting.", id: "z2x73mCBZ9" })) } }), advancedFileAnalysis: f.field(T.z.boolean().optional(), { flatKey: "chatAdvancedFileAnalysisEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.14271.0" }, executionTarget: "desktop" }, title: h.msg({ defaultMessage: "Advanced file analysis", id: "ChatAdvancedFileAnalysisEnabled" }), category: "sandbox", group: M_, order: 20, predicates: { show: (e) => {
    var t;
    return nr(e) && ((t = e.chatSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  }, disabled: (e) => {
    var t;
    return (t = ud(e)) !== null && t !== void 0 ? t : false;
  } }, description: { short: f.shortDescription(h.msg({ defaultMessage: "Allow Claude to run code in a local sandbox to analyze attached files it can\u2019t read natively \u2014 like Excel and PowerPoint. Off by default.", id: "EC49vAdH1s" })), long: f.longDescription("Also enables inline data analysis. Of the user's own files, the sandbox can read only those attached to the conversation, plus folders added to the chat's project through the app (read-only). By default it has no network access. Project folders are not available in the sandbox of a chat started while a rule on `Read`, `Grep` or `Glob` is set: in `disabledBuiltinTools`, in `builtinToolPolicy` with a value other than `allow`, or as a deny or ask rule in Claude Code's own managed settings on the device, whether or not the rule covers the folder. They are not available either where those managed settings cannot be read, or where Claude Code takes its managed settings from a gateway. Claude's file tools still read what the rules allow.") } }), desktopHome: f.field(T.z.enum(["standard", "simple", "no-vm", "off"]).optional(), { flatKey: "desktopHome", support: { enabled: { scopes: ["3p"], availableInVersion: "1.52386.0" }, values: { "no-vm": { availableInVersion: "2.2553.0" } } }, optionValues: ["standard", "off"], failClosedValue: "off", remotePolicy: { applyUnverified: false }, title: h.msg({ defaultMessage: "Desktop home", id: "DesktopHome" }), surfaceGrants: { standard: { chat: true, fileAnalysis: true, cowork: true }, simple: { chat: true, fileAnalysis: true, cowork: false }, "no-vm": { chat: true, fileAnalysis: false, cowork: false }, off: { chat: false, fileAnalysis: false, cowork: false } }, surfaceGrantsReason: h.msg({ defaultMessage: "Desktop home decides this while it is set.", description: "\u201CDesktop home\u201D is the title of another setting on this page; use the same translation as that title.", id: "DesktopHomeDecides" }), optionLabels: { standard: h.msg({ defaultMessage: "Standard", id: "DesktopHomeStandard" }), simple: h.msg({ defaultMessage: "Simple: Chat with file analysis", description: "\u201CChat\u201D is a product name \u2014 keep it untranslated in Latin script; translate the rest naturally.", id: "DesktopHomeSimple" }), "no-vm": h.msg({ defaultMessage: "No VM: Chat without file analysis", description: "\u201CChat\u201D is a product name and \u201CVM\u201D abbreviates virtual machine \u2014 keep \u201CChat\u201D untranslated in Latin script; translate the rest naturally.", id: "DesktopHomeNoVm" }), off: h.msg({ defaultMessage: "Off: Code only", description: "\u201CCode\u201D is a product name \u2014 keep it untranslated in Latin script; translate the rest naturally.", id: "DesktopHomeOff" }) }, category: "sandbox", group: ls, order: 3, description: { short: f.shortDescription(h.msg({ defaultMessage: "Unifies Chat and Cowork into one home. When set, it replaces Allow Chat, Advanced file analysis, and Allow Cowork. Leave unset to keep those.", description: "\u201CChat\u201D and \u201CCowork\u201D are product names \u2014 keep them untranslated in Latin script; translate the rest naturally.", id: "DesktopHomeDesc" })), long: f.longDescription("`standard` turns on Chat, file analysis, and Cowork together in one home. `off` turns all three off. `isClaudeCodeForDesktopEnabled` still decides Code. Remove the key to hand control back to `chatTabEnabled`, `chatAdvancedFileAnalysisEnabled`, and `coworkTabEnabled`. Values are case-sensitive, so `Standard` is not recognized. A value that the app does not recognize is read as `off`, so update the app on devices before you deploy a value added in a later version.") } }) });
  pd.SURFACE_GRANT_FIELDS = Object.entries(pd.ChatSurfaceConfig.shape).flatMap(([e, t]) => {
    let o = f.fieldMetaForNode(t);
    return (o === null || o === void 0 ? void 0 : o.surfaceGrants) && o.flatKey ? [{ key: e, flatKey: o.flatKey, grants: o.surfaceGrants, reason: o.surfaceGrantsReason }] : [];
  });
  function dd(e) {
    var t;
    let o = (t = e.chatSurface) !== null && t !== void 0 ? t : {};
    for (let s of pd.SURFACE_GRANT_FIELDS) {
      let n = f.surfaceGrantFor(s.grants, o[s.key]);
      if (n) return { field: s, grant: n };
    }
    return;
  }
  function lr(e) {
    var t;
    return (t = dd(e)) === null || t === void 0 ? void 0 : t.grant;
  }
  function cd(e) {
    var t, o, s;
    return { chat: ((t = e.chatSurface) === null || t === void 0 ? void 0 : t.enabled) === true, fileAnalysis: ((o = e.chatSurface) === null || o === void 0 ? void 0 : o.advancedFileAnalysis) === true, cowork: ((s = e.coworkSurface) === null || s === void 0 ? void 0 : s.enabled) !== false };
  }
  function rr(e) {
    var t;
    return (t = lr(e)) !== null && t !== void 0 ? t : cd(e);
  }
  function ud(e) {
    var t;
    return (t = dd(e)) === null || t === void 0 ? void 0 : t.field.reason;
  }
  var sr = h.msg({ defaultMessage: "Extensions", id: "nb2FlN/G2m" });
  pd.ExtensionsConfig = T.z.object({ enabled: f.field(T.z.boolean().optional(), { flatKey: "isDesktopExtensionEnabled", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: h.msg({ defaultMessage: "Allow desktop extensions", id: "knHnvzpkOf" }), default: false, legacyFlatKey: { name: "isDxtEnabled", effect: "the old name will be reported as unreadable and the key will read as false: desktop extensions will be disabled until the name is updated", ...oo.BATCH_2026_09 }, failClosedValue: false, egressRequirements: (e) => e === false ? [] : sd.PYTHON_EXTENSION_RUNTIME_HOSTS, egressRequirementsLabel: h.msg({ defaultMessage: "Desktop extensions (Python runtime)", id: "8Jc9WEC0S8" }), category: "connectors", group: sr, order: 11, description: { short: f.shortDescription(h.msg({ defaultMessage: ".dxt and .mcpb installs.", id: "2IB0Hxh1vO" })), long: f.longDescription("1P builds default to enabled at runtime unless this is explicitly set. In 3P, enabling this allows loading extensions; local install additionally requires an org policy backend.") } }), directoryEnabled: f.field(T.z.boolean().optional(), { flatKey: "isDesktopExtensionDirectoryEnabled", support: { enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" } }, title: h.msg({ defaultMessage: "Show extension directory", id: "bqOLf0vLQm" }), default: { displayOnly: true }, legacyFlatKey: { name: "isDxtDirectoryEnabled", effect: "the old name will be reported as unreadable and not read, leaving the key unset: the extension directory will show and no directory-only install restriction will apply until the name is updated", ...oo.BATCH_2026_09 }, category: "connectors", group: sr, order: 12, description: { short: f.shortDescription(h.msg({ defaultMessage: "The in-app catalogue of installable extensions. Hide to allow sideload only.", id: "g8s4jWgsLf" })) }, predicates: { show: (e) => {
    var t;
    return ((t = e.extensions) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } } }), signatureRequired: f.field(T.z.boolean().optional(), { flatKey: "isDesktopExtensionSignatureRequired", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: h.msg({ defaultMessage: "Require signed extensions", id: "bmP92ZCban" }), default: false, legacyFlatKey: { name: "isDxtSignatureRequired", effect: "the old name will be reported as unreadable and the key will read as true: only signed extensions will load until the name is updated", ...oo.BATCH_2026_09 }, failClosedValue: true, category: "connectors", group: sr, order: 13, description: { short: f.shortDescription(h.msg({ defaultMessage: "Reject desktop extensions that are not signed by a trusted publisher.", id: "DY0aw7svrD" })) }, predicates: { show: (e) => {
    var t;
    return ((t = e.extensions) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } } }) });
  pd.AutoUpdateConfig = T.z.object({ disabled: f.field(T.z.boolean().optional(), { flatKey: "disableAutoUpdates", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } }, appBehaviorOnly: true, title: h.msg({ defaultMessage: "Block auto-updates", id: "OX1+jdVwLL" }), default: false, category: "telemetry", group: Ie.UPDATES_GROUP, order: 20, description: { short: f.shortDescription(h.msg({ defaultMessage: "Stop Claude Desktop from fetching updates entirely (no time limit). You\u2019ll need to push new versions yourself.", id: "t/LNoeQ72j" })), long: f.longDescription("In third-party deployments this also keeps Cowork's workspace image and tools from being fetched ahead of use; they are then fetched when a task first needs them.") }, predicates: { warn: (e) => e === true ? h.msg({ defaultMessage: "Security and compatibility fixes will not install automatically. Make sure IT has another distribution path.", id: "1oztgcYddf" }) : null } }), enforcementHours: f.field(T.z.coerce.number().int().gt(0).lte(72).optional(), { flatKey: "autoUpdaterEnforcementHours", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } }, appBehaviorOnly: true, title: h.msg({ defaultMessage: "Auto-update enforcement window", id: "jJz20QocAd" }), category: "telemetry", group: Ie.UPDATES_GROUP, order: 21, suffix: h.msg({ defaultMessage: "hours", id: "4MengK4xQ/" }), description: { short: f.shortDescription(h.msg({ defaultMessage: "Hours before a downloaded update force-installs. Only applies when auto-updates are enabled. Blank = 72-hour default.", id: "VyqfjIW6Iv" })), long: f.longDescription("Has no effect when `disableAutoUpdates` is in place at launch: the updater never starts, so nothing is downloaded and this timer never arms. If the policy reaches an already-running app after an update has downloaded, that one staged update still installs on this timer; no further updates are fetched.\n\nLeaving it blank uses the 72-hour default *and* then waits for the machine to be idle (10+ minutes without input) before restarting; setting any explicit value (including 72) restarts once the window elapses regardless of user activity. In both cases the restart holds off while Claude is mid-task.") }, predicates: { show: (e) => {
    var t;
    return ((t = e.autoUpdate) === null || t === void 0 ? void 0 : t.disabled) !== true;
  } } }), viaUpdatesHost: f.field(T.z.boolean().optional(), { flatKey: "updateViaUpdatesHost", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.26832.0" } }, appBehaviorOnly: true, title: h.msg({ defaultMessage: "Check for updates on releases.claude.com", id: "UpdateViaUpdatesHost" }), default: false, category: "telemetry", group: Ie.UPDATES_GROUP, order: 22, description: { short: f.shortDescription(h.msg({ defaultMessage: "Read the update feed from releases.claude.com so api.anthropic.com can stay blocked.", id: "UpdateViaUpdatesHostShort" })), long: f.longDescription("By default the app asks `api.anthropic.com` which version to install. That host also serves the model APIs, so organizations that block un-approved LLM endpoints at the network edge end up blocking updates too.\n\nTurn this on to read the same feed from `releases.claude.com`, a hostname that carries no model API. `api.anthropic.com` can then stay blocked without breaking auto-update. Rollout behavior is unchanged; the installer download still comes from `downloads.claude.ai` as before.") }, predicates: { show: (e) => {
    var t;
    return ((t = e.autoUpdate) === null || t === void 0 ? void 0 : t.disabled) !== true;
  } } }), dangerousMaxVersion: f.field(ge.desktopVersionString().optional(), { flatKey: "dangerousMaxVersion", support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" }, visibility: "public-undocumented" }, appBehaviorOnly: true, title: h.msg({ defaultMessage: "Maximum version", id: "DangerousMaxVersion" }), category: "telemetry", group: Ie.UPDATES_GROUP, order: 22.5, description: { short: f.shortDescription(h.msg({ defaultMessage: "Third-party deployments only. Auto-update stops at this version (X.Y.Z) and devices on newer versions cannot open Claude. Delays security fixes; leave unset.", id: "DangerousMaxVersionShort" })), long: f.longDescription("Third-party deployments only. Caps the Claude version your devices run. Update checks take the newest release at or below this version and nothing newer. Devices on a version from before this setting existed don't send the cap, so they update past it and are then blocked: move your fleet onto a version that supports this setting, or turn off auto-updates, before you set a cap below the latest release. Use `X.Y.Z` form, e.g. `1.2581.0`; `v1.2581.0` also works.\n\nA device on a newer version, including a fresh install of one, cannot open Claude. It shows a message that names both versions and asks the person to contact their admin, and the only option is to quit. Only a cap your organization delivers blocks: a device-management profile or machine policy, the admin console, or a bootstrap server. A cap set only in the local Setup UI, or in a per-user Windows policy, caps updates but does not block. When a profile that configures the connection also names a configuration server, the served configuration is authoritative once fetched and must restate the cap; the profile's value blocks only while the server can't be reached, and before sign-in it caps updates without blocking. A profile that sets only app-behavior keys wins over a served value. The cap never downgrades or rolls back a device. An update that finished downloading before the cap reached a device can still install, and that device is then blocked too.\n\nWhile it is set, security and compatibility fixes in newer releases do not install, so Anthropic recommends leaving it unset. If you use it, raise it as you approve each new version: devices below the new value update to it on their next update check, and `autoUpdaterEnforcementHours` still restarts them within its window.\n\n`disableAutoUpdates` takes precedence for updates: with both set, nothing updates, and devices on a newer version are still blocked. On Linux, where the package manager (apt) delivers updates, it caps nothing but still blocks newer versions.") }, predicates: { warn: (e) => e ? h.msg({ defaultMessage: "Devices on a newer version cannot open Claude, and security fixes in newer releases do not install, until you raise or remove this cap.", id: "DangerousMaxVersionWarn" }) : null } }) });
  var H_ = h.msg({ defaultMessage: "Feature announcements", id: "FeatureAnnouncementsGroup" });
  pd.FeatureDiscoveryConfig = T.z.object({ disabled: f.field(T.z.boolean().optional(), { flatKey: "disableFeatureDiscovery", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.21459.0" } }, title: h.msg({ defaultMessage: "Hide feature announcements", id: "DisableFeatureDiscoveryTitle" }), default: false, failClosedValue: true, category: "appearance", group: H_, order: 10, description: { short: f.shortDescription(h.msg({ defaultMessage: "Suppress unprompted feature-announcement UI: the post-update \u201CWhat\u2019s new\u201D nudge and new-feature tips. Users can still open release notes themselves.", id: "DisableFeatureDiscoveryHint" })), long: f.longDescription(`Covers the version-shipped announcement UI baked into each release: the **What's new** button that appears on its own after an update, and the one-time **New feature** tips (coach-marks) that point out newly shipped capabilities. Useful when your organization gates feature availability and doesn't want the app advertising capabilities you haven't rolled out.

User-initiated surfaces stay: the What's-new menu item and header button still open the release notes on demand. Auto-update behavior is unaffected \u2014 that is governed by \`disableAutoUpdates\` and \`autoUpdaterEnforcementHours\`.`) } }) });
});
var yun = (0, import_chunk_w1d7ygsk.V)(function(Ld) {
  Object.defineProperty(Ld, "__esModule", { value: true });
  Ld.WorkspaceConfig = Ld.BUILTIN_TOOL_POLICY_ASK_SESSION = Ld.BUILTIN_ASK_POLICY_VALUES = Ld.BUILTIN_TOOL_NAMES = void 0;
  Ld.builtinToolScope = sw;
  Ld.scanRuleList = Ed;
  Ld.parseBuiltinRule = ao;
  Ld.builtinRuleToolName = cr;
  Ld.canonicalBuiltinRule = Ut;
  Ld.isScopedBuiltinRule = rw;
  Ld.checkBuiltinToolPolicyForDrops = Td;
  Ld.checkDisabledBuiltinToolsForDrops = Id;
  Ld.builtinRuleWarnings = aw;
  Ld.checkEgressHostsForDrops = Pd;
  Ld.resolveDisabledBuiltinTools = ur;
  Ld.isChatTabEnabled = dw;
  Ld.isCoworkSurfaceEnabled = cw;
  Ld.isSkillCreationEnabled = uw;
  Ld.autoModeSurfaces = pw;
  Ld.isChatAdvancedFileAnalysisEnabled = hw;
  Ld.resolveBuiltinAskTools = Dd;
  Ld.toolsCoveredByScopedRule = xd;
  Ld.resolveBuiltinAskToolNames = fw;
  var R = require("/$bunfs/root/chunk-2p0wmpsd.js"), kt = Lwe(), rt = dX(), g = Vk(), Y = T4(), v = vj(), us = Ime(), nt = NZ(), pE = Zvt(), ne = klt(), io = Cjn(), bd = v.msg({ defaultMessage: "Network proxy", id: "wER6775GSj" }), J_ = v.msg({ defaultMessage: "Workspace VM network", id: "ko4KhGaz+7" }), vd = v.msg({ defaultMessage: "End-user attribution", id: "enduserAttrTtl" }), Q_ = R.z.object({ path: g.subfield(g.annotate(R.z.string().min(1), { pathKind: "folder" }), { label: v.msg({ defaultMessage: "Path", id: "P6LP7JosNq" }), support: { availableInVersion: "1.14271.0" }, isPrimaryKey: true, mono: true, placeholder: v.msg({ defaultMessage: "~/Documents/work", id: "/dk65J5QxC" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "Absolute folder path. May start with ~ or one of the listed %VAR% tokens, expanded per user. Subfolders are included.", id: "tFB6xfvwBv" })) } }), isDefaultSelected: g.subfield(R.z.boolean().optional(), { label: v.msg({ defaultMessage: "Pre-select on new task", id: "Dk3pnI8vXq" }), support: { availableInVersion: "1.14271.0" }, description: { short: g.shortDescription(v.msg({ defaultMessage: "Shows as a folder chip on the new-task page and skips the trust prompt. Users can remove it.", id: "P3a+4xY9Hb" }), { docsOnly: false }) } }), mode: g.subfield(R.z.enum(["rw", "ro"]).optional(), { label: v.msg({ defaultMessage: "Access mode", id: "Dt4A+S9duA" }), support: { availableInVersion: "1.26832.0" }, description: { short: g.shortDescription(v.msg({ defaultMessage: "Read-only folders can be viewed and searched but not modified in Cowork. In Code, applies to file tools only. Over SSH, also to Bash in its sandbox.", id: "4W27f1A7Ah" }), { docsOnly: false }), long: g.longDescription(`Read-only folders can be viewed and searched but not modified in Cowork (by Claude or via the UI). Bash runs in Cowork's isolated workspace where the folder is mounted read-only at the OS level; file-tool writes (Edit, Write) are blocked in-process by Claude Desktop.

In local Code sessions, read-only applies to Claude's file tools only; Bash does **not** yet enforce it.

In SSH sessions (earlier versions ignore the mode on the host), read-only is enforced by Claude Code's own permission rules: its file tools cannot modify the folder. A writable folder inside a read-only one is read-only too. Shell commands are stopped only where Claude Code's sandbox runs (Linux needs bubblewrap and socat), and only as far as that sandbox goes: keep read-only folders outside writable ones, and use the operating system's permissions where a folder must not change. The sandbox does not cover a path with \`* ? [ ] ( ) { } | +\` or a double quote. List each folder by its real path: shell commands may not be stopped in a folder listed through a link. Not enforced on Windows hosts, nor on a host with Claude Code managed settings of its own unless they set \`parentSettingsBehavior\` to \`merge\`. Not covered: MCP servers, hooks, the terminal, commands in \`sandbox.excludedCommands\`, and git worktrees, which Claude Desktop and Claude Code still create inside the folder.

A read-only folder that contains Claude's own data directory (for example the home folder; over SSH, \`~/.claude\` on the host) is enforced in Cowork only. Configure narrower folders for Code coverage. Over SSH, keep a Claude Code config folder moved by \`CLAUDE_CONFIG_DIR\` outside read-only folders.`, { docsOnly: false }) } }) });
  Ld.BUILTIN_TOOL_NAMES = ["Bash", "Read", "Write", "Edit", "Glob", "Grep", "NotebookEdit", "WebFetch", "WebSearch", "Task", "TodoWrite", "TaskCreate", "TaskUpdate", "TaskGet", "TaskList", "TaskStop", "Skill", "REPL", "JavaScript", "AskUserQuestion", "ToolSearch", "SendUserMessage"];
  var ds = ["WebSearch", "WebFetch"], _d = ["WebFetch"], ew = "a scoped entry reaches Code sessions only, never Cowork; allow specific hosts with the egress host settings (coworkEgressAllowedHosts), one list for Cowork and Code", no = { Read: ["Read", "Grep", "Glob"], Edit: ["Edit", "Write", "NotebookEdit"] }, wd = new Map(Object.entries(no).flatMap(([e, t]) => t.filter((o) => o !== e).map((o) => [o, e]))), kd = "\\((\\S[^\\r\\n]*)\\)", tw = { Bash: ["curl *"], Read: ["//etc/**", "//**/secrets/**"], Edit: ["//**/*.env", "//etc/**"] }, ow = ["Bash", "Task", "Skill"];
  function sw(e) {
    let t = tw[e];
    if (t !== void 0) return { examples: t };
    let o = wd.get(e);
    if (o !== void 0) return { via: o };
    return _d.includes(e) ? { hostsViaEgress: true } : void 0;
  }
  var Cd = new RegExp(`^(?:(${Ld.BUILTIN_TOOL_NAMES.filter((e) => !ds.includes(e)).join("|")})(?:${kd})?|(${ds.join("|")}))$`), Sd = new RegExp(`^([^\\s()]+)(?:${kd})?$`);
  function Ed(e) {
    let t = (i, u) => {
      let p = e.indexOf(e[i], i + 1);
      for (let y = i + 1, b = u; y < p; y++) {
        let S = e[y];
        if (S === "(") b++;
        else if (S === ")" && b > 0) b--;
        else if (S === "," && b === 0) return -1;
      }
      return p;
    }, o = [], s = 0, n = "";
    for (let i = 0; i < e.length; i++) {
      let u = e[i];
      if (u === '"' || u === "'") {
        let p = t(i, s);
        if (p !== -1) {
          n += e.slice(i, p + 1), i = p;
          continue;
        }
      } else if (u === "(") s++;
      else if (u === ")" && s > 0) s--;
      else if (u === "," && s === 0) {
        o.push(n), n = "";
        continue;
      }
      n += u;
    }
    return o.push(n), { segments: o, open: s > 0 };
  }
  function Ad(e) {
    return Ed(e).segments.length > 1;
  }
  var nw = /^[a-z_][a-z0-9_]+:/, Od = new Map(Ld.BUILTIN_TOOL_NAMES.map((e) => [e.toLowerCase(), e]));
  function ao(e) {
    let t = Cd.exec(e);
    if (t === null || Ad(e)) return;
    return t[3] !== void 0 ? { tool: t[3] } : { tool: t[1], ...t[2] !== void 0 && { content: t[2] } };
  }
  function cr(e) {
    var t;
    return (t = ao(e)) === null || t === void 0 ? void 0 : t.tool;
  }
  function Ut(e) {
    let t = Sd.exec(e);
    if (t === null || Od.get(t[1].toLowerCase()) !== t[1]) return e;
    return t[2] === "*" || t[2] === "**" && t[1] === "Bash" ? t[1] : e;
  }
  function rw(e) {
    var t;
    return ((t = ao(e)) === null || t === void 0 ? void 0 : t.content) !== void 0;
  }
  function Md(e) {
    var t;
    let o = ao(e);
    if (o !== void 0) {
      let { tool: i, content: u } = o;
      if (u === void 0) return;
      if (Ut(e) !== e) return `"(${u})" means every call; it is applied as the bare name "${i}"`;
      if (nw.test(u)) return;
      let p = wd.get(i);
      if (p !== void 0) return `Claude Code matches file-path patterns only on ${p}(\u2026) rules, which cover ${no[p].join("/")}; use "${p}(${u})"`;
      if (!(i in no) && !ow.includes(i)) return `${i} matches rule content only in Claude Code's ${i}(<field>:<pattern>) form; use the bare name "${i}" to cover every call`;
      return;
    }
    if (Ad(e)) return "looks like several rules joined by commas; use one entry per rule";
    let s = (t = Sd.exec(e)) === null || t === void 0 ? void 0 : t[1];
    if (s === void 0) return "malformed rule; expected Tool or Tool(pattern) on one line";
    let n = Od.get(s.toLowerCase());
    if (n === void 0) return;
    if (n !== s) return `tool names are case-sensitive; use "${n}"`;
    return _d.includes(n) ? `${n} takes the bare name only \u2014 ${ew}` : `${n} takes the bare name only`;
  }
  var iw = `Each entry is a Claude Code tool name (\`${Ld.BUILTIN_TOOL_NAMES.join("`, `")}\`) or an argument-scoped [permission rule](https://code.claude.com/docs/en/permissions#permission-rule-syntax) such as \`Bash(curl *)\` or \`Edit(//**/*.env)\`. A bare name covers every call (a bare \`Bash\` entry also covers the \`PowerShell\` tool); a scoped rule covers matching calls in every permission mode, including Auto and bypass. Scopes are matched for \`Bash(\u2026)\` (a command pattern) and for file paths written as \`Read(\u2026)\` (covers \`${no.Read.join("`, `")}\`) or \`Edit(\u2026)\` (covers \`${no.Edit.join("`, `")}\`); other tools take \`Tool(<field>:<pattern>)\`. \`${ds.join("` and `")}\` are bare-name only: per-host web access is \`coworkEgressAllowedHosts\`.

Scoped \`Bash(\u2026)\` rules apply in Code sessions only; Cowork's shell follows only a bare \`Bash\` entry. Start absolute file paths with \`//\`, not \`/\`: a relative pattern such as \`Read(**/.env)\` covers only a Code session's project folder and none of Cowork's connected folders. Scoped rules need fleet-wide build support (\`disableAutoUpdates\` pins builds): an older build passes a scoped entry to Claude Code unchecked. An entry whose pattern contains \`)\` followed by a space or comma is enforced only through Claude Code's managed-settings channel, so another Claude Code [managed-settings source](${Y.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings) replaces it unless that source sets \`parentSettingsBehavior\` to \`"merge"\`; every other entry is enforced either way.

An unusable entry (a lowercase tool name, an unbalanced parenthesis, a scoped \`${ds.join("(\u2026)` or `")}(\u2026)\`) is kept, because the deny list is served exactly as written, and raises a configuration warning.`;
  Ld.BUILTIN_ASK_POLICY_VALUES = ["allow", "ask"];
  Ld.BUILTIN_TOOL_POLICY_ASK_SESSION = { path: 'builtinToolPolicy: "ask-session"', use: '"ask"', effect: 'the entry will be read as "ask" (approval on every call), like any unrecognized value', ...kt.BATCH_2026_09, match: (e) => typeof e === "object" && e !== null && !Array.isArray(e) && Object.values(e).some((t) => t === "ask-session"), rewrite: (e) => Object.fromEntries(Object.entries(e).map(([t, o]) => [t, o === "ask-session" ? "ask" : o])) };
  function Td(e, t) {
    var o;
    let s = kt.applyLegacy(Ld.BUILTIN_TOOL_POLICY_ASK_SESSION, e);
    if (!s || typeof s !== "object") return;
    for (let [n, i] of Object.entries(s)) {
      let u = Ut(n);
      if (u !== n) t(`builtinToolPolicy["${n}"]: "${n.slice(u.length)}" means every call; applied as the bare name "${u}"`, "clamp");
      if (cr(u) === void 0) t(`builtinToolPolicy["${n}"] dropped: ${(o = Md(n)) !== null && o !== void 0 ? o : "unknown built-in tool"}`, "drop");
      else if (i === "blocked") t(`builtinToolPolicy["${n}"]: "blocked" is not a built-in tool policy; treated as "ask" (use disabledBuiltinTools to remove the tool)`, "drop");
      else if (i !== "allow" && i !== "ask") t(`builtinToolPolicy["${n}"]: unrecognized policy ${JSON.stringify(i)}; treated as "ask"`, "drop");
    }
  }
  function Id(e, t) {
    if (!Array.isArray(e)) return;
    e.forEach((o, s) => {
      if (typeof o !== "string") {
        t(`disabledBuiltinTools[${s}] dropped: entries must be strings (got ${o === null ? "null" : Array.isArray(o) ? "array" : typeof o})`, "drop");
        return;
      }
      let n = Ut(o);
      if (n !== o) t(`disabledBuiltinTools entry ${JSON.stringify(o)}: "${o.slice(n.length)}" means every call; applied as the bare name "${n}"`, "clamp");
    });
  }
  function aw(e, t) {
    return t.flatMap((o) => {
      let s = Md(o);
      return s === void 0 ? [] : [`${e} entry ${JSON.stringify(o)} is not enforced as written: ${s}`];
    });
  }
  function Pd(e, t) {
    if (!Array.isArray(e)) return;
    for (let o of e) if (typeof o !== "string" || rt.parseEgressHostEntry(o) === null) t(`coworkEgressAllowedHosts entry ${JSON.stringify(o)} dropped: must be ${rt.EGRESS_ENTRY_GRAMMAR}`);
  }
  Ld.WorkspaceConfig = R.z.object({ disabledBuiltinTools: g.field(R.z.preprocess((e) => Array.isArray(e) ? [...new Set(e.filter((t) => typeof t === "string").map(Ut))] : e, g.annotate(R.z.array(R.z.string()), { maxItems: 100 })).optional(), { flatKey: "disabledBuiltinTools", readers: ["desktop", "code"], failClosedValue: [...Ld.BUILTIN_TOOL_NAMES], checkDropped: Id, support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Disabled built-in tools", id: "iGPHC9Tm20" }), category: "sandbox", group: ne.TOOLS_GROUP, order: 4, customRenderer: "builtinToolRules", placeholder: v.msg({ defaultMessage: "WebSearch or Bash(curl *)", id: "KHWonN3qfv" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "Built-in tools, or argument-scoped permission rules such as Read(//**/.env), denied in Cowork and Code.", id: "kMVrXfFbvZ" })), long: g.longDescription(iw) }, predicates: { locked: [{ when: (e) => {
    var t;
    return us.isBedrockFamily((t = e.inference) === null || t === void 0 ? void 0 : t.provider);
  }, append: ["WebSearch"] }] } }), disableBundledSkills: g.field(R.z.boolean().optional(), { flatKey: "disableBundledSkills", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.15962.0" }, executionTarget: "desktop" }, failClosedValue: true, title: v.msg({ defaultMessage: "Disable bundled skills and workflows", id: "kpCOjtwfPF" }), category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 6, description: { short: g.shortDescription(v.msg({ defaultMessage: "Disables Claude Code\u2019s bundled skills and workflows (deep-research and similar). Use where WebFetch/WebSearch aren\u2019t available.", id: "Q90IY9SGu1" })) } }), skillCreationEnabled: g.field(R.z.boolean().optional(), { flatKey: "skillCreationEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" } }, title: v.msg({ defaultMessage: "Allow user-created skills", id: "y486fMBVj/" }), default: { displayOnly: true }, failClosedValue: false, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 6.5, description: { short: g.shortDescription(v.msg({ defaultMessage: "Allow users to create and upload their own skills. When off, the creation and upload surfaces are hidden and the agent\u2019s skill-creation tools are disabled.", id: "Cpqtiix6lD" })), long: g.longDescription("When on (default), users can create new skills and upload skill files in the app. Set to `false` to block user skill creation: the skill-creation and upload surfaces are hidden (the `skill_creation` feature is served as blocked by the organization), and the agent's skill-creation tools (saving skills from a conversation, skill proposals) are not offered in sessions \u2014 the same effect as turning off the **User-created skills** organization setting available to claude.ai enterprise admins.\n\nThis is a feature-availability control enforced in the app's UI, not a data boundary: skills are files on the user's machine, and files already present there (or placed there outside the app) are not removed or blocked by this key. Skills themselves remain usable; organization-distributed plugins and bundled skills are unaffected (to disable bundled skills, use `disableBundledSkills`).", { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/configuration#skillcreationenabled` }) } }), scheduledTasksEnabled: g.field(R.z.boolean().optional(), { flatKey: "scheduledTasksEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" } }, title: v.msg({ defaultMessage: "Allow scheduled tasks", id: "scheduledTasksEnabledTitle" }), default: { displayOnly: true }, failClosedValue: false, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 6.8, description: { short: g.shortDescription(v.msg({ defaultMessage: "Allow scheduled tasks in Cowork and Code. When off, the Scheduled page is hidden, existing tasks stop running, and Claude cannot create new ones.", id: "scheduledTasksEnabledShort" })), long: g.longDescription("When on (default), users can schedule Cowork tasks and Code sessions to run later or on a recurring schedule, and Claude can create such schedules when asked.\n\nSet to `false` to turn scheduled tasks off for every user. The Scheduled section in Cowork and the routines list in the Code tab are hidden, together with every other place a schedule can be created. Tasks that already exist on a device no longer run; they are kept, not deleted, and run again once the key is removed or set to `true`. Claude is not offered the tools that create, change or run these tasks, and sessions start without Claude Code's own in-session scheduling tools (the `/loop` command, its cron tools and its wake-up timer).\n\nIt does not remove task files already on the user's machine. A change takes effect at the next app launch.", { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/configuration#scheduledtasksenabled` }) } }), keepAwakeEnabled: g.field(R.z.boolean().optional(), { flatKey: "keepAwakeEnabled", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "2.7032.0" } }, title: v.msg({ defaultMessage: "Allow keep awake", id: "keepAwakeEnabledTitle" }), default: { displayOnly: true }, failClosedValue: false, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 6.9, description: { short: g.shortDescription(v.msg({ defaultMessage: "Let Claude keep the computer awake. When off, Claude never prevents sleep and hides the keep-awake switches in Settings, the Scheduled page and the Code tab.", id: "keepAwakeEnabledShort" })), long: g.longDescription("When on (default), users can turn on **Keep computer awake** (Settings \u2192 This computer \u2192 System, also shown as **Keep awake** on the Scheduled page in Cowork and the Routines page in Code) so the computer does not idle-sleep while Claude is open and scheduled tasks keep running on an idle machine. The Code tab can also keep the computer awake while a session is working (**Keep computer awake while Claude works** in Settings \u2192 Claude Code, and a session's **Keep computer awake** menu item).\n\nSet to `false` to make sure Claude never prevents the computer from sleeping: those switches are hidden and no part of the app keeps the computer awake. Users' saved choices are kept but ignored, and apply again once the key is removed or set to `true`. Scheduled tasks are unaffected and still run only while the computer is awake and the app is open.\n\nA change takes effect on a running app.", { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/configuration#keepawakeenabled` }) } }), builtinToolPolicy: g.field(g.annotate(R.z.preprocess((e) => {
    let t = kt.applyLegacy(Ld.BUILTIN_TOOL_POLICY_ASK_SESSION, e);
    return t && typeof t === "object" && !Array.isArray(t) ? Object.entries(t).filter(([o]) => cr(Ut(o)) !== void 0).reduce((o, [s, n]) => {
      let i = Ut(s), u = n === "allow" ? "allow" : "ask";
      return o[i] = o[i] === "ask" ? "ask" : u, o;
    }, {}) : t;
  }, R.z.record(R.z.string().regex(Cd), R.z.enum(Ld.BUILTIN_ASK_POLICY_VALUES))).optional(), { redact: "toolRules" }), { flatKey: "builtinToolPolicy", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.8089.0" }, values: { "ask-session": { availableInVersion: "1.40609.0" } } }, title: v.msg({ defaultMessage: "Built-in tool policy", id: "hhKxQ3MtxT" }), failClosedValue: Object.fromEntries(Ld.BUILTIN_TOOL_NAMES.map((e) => [e, "ask"])), deprecations: [Ld.BUILTIN_TOOL_POLICY_ASK_SESSION], checkDropped: Td, category: "sandbox", group: ne.TOOLS_GROUP, order: 3, customRenderer: "builtinToolRules", placeholder: v.msg({ defaultMessage: "WebFetch or Bash(curl *)", id: "tQLBe0W6Km" }), addLabel: v.msg({ defaultMessage: "Add policy", id: "6TgDeF8iRs" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "Approval policy per built-in tool or argument-scoped rule such as Bash(curl *). \u201Cask\u201D requires user approval before each matching call; \u201Callow\u201D is the default.", id: "H4Ea6XAuEf" })), long: g.longDescription("Keys use the same tool names and argument-scoped rule syntax as **Disabled built-in tools** (`disabledBuiltinTools`), and scopes apply in the same sessions. A bare `Bash` key also governs Claude Code's `PowerShell` tool (its shell on Windows PCs without Git for Windows); argument-scoped `Bash(\u2026)` keys do not. Scoped **ask** rules reach sessions only through Claude Code's managed-settings channel, so another Claude Code managed-settings source replaces them unless it sets `parentSettingsBehavior` to `\"merge\"` (bare names hold either way). They need the same fleet-wide build support, and an older build drops a scoped **ask** entry as a configuration error (which also blocks WSL sessions on Windows until that client updates), so the tool runs unprompted.\n\nAn **ask** entry, bare or scoped, also turns off the app's remembered \u201Calways allow\u201D choices for that tool, so each prompted call is confirmed individually. **ask** on a file tool (`Read`, `Write`, `Edit`, `Glob`, `Grep`) prompts in Cowork, Chat and Code sessions. Calls that Cowork and Chat always refuse are still refused without a prompt: paths outside the session's connected folders (in Chat, outside its scratch directory and its project's folders) and protected or sensitive files inside them. A scheduled task in Cowork waits at the prompt, which appears in the task's session and, when that session is not in view, as a desktop notification. Code side chats cannot prompt, so they block matching calls. An unusable entry is dropped and recorded as a configuration error; a value other than `allow` or `ask` is treated as `ask` and reported. To remove a tool or deny a rule outright, use **Disabled built-in tools** instead.") } }), autoModeEnabled: g.field(R.z.boolean().optional(), { flatKey: "autoModeEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } }, title: v.msg({ defaultMessage: "Allow Auto mode", id: "0QsHlMb8HD" }), default: { displayOnly: true }, failClosedValue: false, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 5, description: { short: g.shortDescription(v.msg({ defaultMessage: "Offer Auto mode in the Code permission selector (on unless set to false); set to true to also offer it in Cowork. Claude decides which actions need approval.", id: "94/7dcRsyP" })), long: g.longDescription(`Left unset, users can select **Auto mode** in Code and new Code sessions start in it; a mode the user already chose, or a Claude Code settings file's \`permissions.defaultMode\`, takes precedence, and Cowork does not offer it. Set to \`true\` to also offer **Automatically approve** in Cowork (Cowork sessions still start by asking before each action until the user picks it). Set to \`false\` to remove the option from both tabs. In Auto mode Claude runs a safety classifier on each action and only prompts for approval on actions it judges risky, instead of following the static per-tool policy.

Requires a model that supports the safety classifier \u2014 which models qualify depends on the deployment's provider and the app version. With a model that lacks support the option is greyed out and Code sessions do not start in it. \`builtinToolPolicy\` and this key may both be set; Auto mode is a user-selectable option alongside the default policy, not a replacement for it.

In Code sessions, a separately deployed Claude Code [managed-settings](${Y.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings) file that sets \`disableAutoMode\` to \`"disable"\` also keeps Auto mode hidden and off, whatever this key says.`, { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/configuration#automodeenabled` }) } }), disableBypassPermissionsMode: g.field(R.z.boolean().optional(), { flatKey: "disableBypassPermissionsMode", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.46388.1" } }, title: v.msg({ defaultMessage: "Disable bypass permissions mode", id: "CIeOvXouGu" }), default: { displayOnly: false }, failClosedValue: true, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 5.5, description: { short: g.shortDescription(v.msg({ defaultMessage: "Remove the bypass permissions mode from Code sessions and Cowork tasks, so Claude always follows the permission policy. Off by default.", id: "eXwx/L4TgM" })), long: g.longDescription(`When set to \`true\`, sessions cannot run in bypass permissions mode: the app stops offering the mode in Code and Cowork, and a session that requests it anyway is downgraded. This is the \`disableBypassPermissionsMode\` setting from the \`permissions\` section of Claude Code's [managed settings](${Y.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings); a separately deployed Claude Code managed-settings file that sets it to \`"disable"\` also removes the mode, whichever source sets it.

Unset (default): users the deployment otherwise allows can choose bypass permissions mode.`, { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/configuration#disablebypasspermissionsmode` }) } }), toolSearchEnabled: g.field(R.z.boolean().optional(), { flatKey: "toolSearchEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.21459.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Enable tool search", id: "3b6nGnLx6b" }), default: false, category: "sandbox", group: ne.TOOLS_GROUP, order: 5, description: { short: g.shortDescription(v.msg({ defaultMessage: "Load MCP tool schemas on demand (tool search) instead of inlining every schema into context.", id: "jPPLehrZ3d" })), long: g.longDescription("When enabled, Cowork, Code, and Chat sessions place only tool names in context up front, and Claude fetches a tool's full schema the first time it needs it. Use this when many MCP tools are configured and their inlined schemas crowd out the context window. If your endpoint does not accept the request shape it then receives, requests fail with HTTP 400.\n\n- **Claude API, Vertex AI, Bedrock, or Bedrock Mantle with no custom base URL**: not needed. The app leaves Claude Code's experimental betas on there, as terminal Claude Code does, so tool search is on by default (on Vertex AI, for Claude 4.5 and newer models). To turn it off in Code, Cowork, and Chat, set `ENABLE_TOOL_SEARCH` to `false` in the `env` block of OS-level Claude Code managed settings (with `parentSettingsBehavior: \"merge\"`). Earlier app versions treat these like the last case.\n- **Gateway provider, app versions bundling Claude Code 2.1.247 or later**: requests add only the tool-search shape (the `tool-search-tool-2025-10-19` `anthropic-beta` value, deferred tool loading, `tool_reference` content blocks); every other experimental Claude Code beta stays suppressed. OS-level Claude Code managed settings that keep that suppression or turn `ENABLE_TOOL_SEARCH` off still win; set `ENABLE_TOOL_SEARCH` to `force` there instead (with `parentSettingsBehavior: \"merge\"`). Sessions the app runs in Claude Code's gateway mode (an opt-in for users on the gateway's own sign-in) get its gateway-safe tool-search shape instead.\n- **Foundry, a custom base URL, and earlier app versions**: the app suppresses Claude Code's experimental betas for the session and the key lifts that, so requests carry the tool-search shape together with Claude Code's other experimental betas for that provider. On Vertex with app versions bundling Claude Code older than 2.1.221, leave this unset while any model older than Claude 4.5 is in use; those engines send the header regardless of model and Vertex's pre-4.5 stacks reject it.", { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/gateway#mcp-tool-search` }) } }), skipWebFetchPreflight: g.field(R.z.boolean().optional(), { flatKey: "skipWebFetchPreflight", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Skip WebFetch domain check", id: "N2lNsOXNuF" }), default: { displayOnly: false }, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 11, egressRequirements: (e, t) => {
    var o;
    return e === true || ((o = t.codeSurface) === null || o === void 0 ? void 0 : o.enabled) === false ? [] : [rt.ANTHROPIC_API_HOST];
  }, egressRequirementsLabel: v.msg({ defaultMessage: "WebFetch domain check", id: "nZmPQiUhiY" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "Skip Claude Code\u2019s WebFetch domain lookup against api.anthropic.com in Code sessions. Off by default; turn on when that host is blocked.", id: "3dSlpHs3f5" })), long: g.longDescription(`Before fetching a page, Claude Code's WebFetch tool asks \`api.anthropic.com\` whether the domain is on Anthropic's content blocklist, and refuses the fetch if that lookup cannot complete. Third-party deployments route inference elsewhere and often block \`api.anthropic.com\` at the firewall; with the lookup on, every WebFetch in Code sessions then fails with "Unable to verify if domain \u2026 is safe to fetch", and where the host is reachable, every fetched hostname is sent to Anthropic. (Cowork sessions fetch through the app's own allowlisted fetch and never run this lookup.)

Off (default): the lookup runs as it does today, so \`api.anthropic.com\` must be reachable from users' machines for Code-session WebFetch to work (listed under Egress Requirements). Set to \`true\` when users' machines cannot reach \`api.anthropic.com\` (corporate firewall, government network) or you do not want fetched hostnames sent there: Code sessions then fetch without the lookup and never contact that host for it. This is the same \`skipWebFetchPreflight\` setting Claude Code reads from its own [managed-settings](${Y.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings) file; the app passes it to every session it starts. To restrict which domains Claude may fetch, use \`coworkEgressAllowedHosts\` or \`builtinToolPolicy\` instead.`) } }), allowedFolders: g.field(g.annotate(g.annotate(R.z.array(R.z.union([R.z.string().min(1), Q_])), { maxItems: 200 }).transform((e) => e.map((t) => typeof t === "string" ? { path: t } : t)).optional(), { pathKind: "folder" }), { flatKey: "allowedWorkspaceFolders", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } }, title: v.msg({ defaultMessage: "Allowed workspace folders", id: "y3gym+4SMI" }), failClosedValue: [], emptyListIsAuthored: true, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 2, addLabel: v.msg({ defaultMessage: "Add folder", id: "kjqTjJbwtK" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "Folders where Claude may work. Applies to Cowork and Code sessions and to the project folders a chat reads. Leave unset for unrestricted access.", id: "5BMPzic821" })), long: g.longDescription("Paths can reference `~` and these environment variables, expanded per user: `%OneDrive%`, `%OneDriveCommercial%`, `%OneDriveConsumer%`, `%APPDATA%`, `%LOCALAPPDATA%`, `%USERNAME%`, `%XDG_DOCUMENTS_DIR%`. The set is fixed; an entry that references any other `%VAR%`, or one that is unset on the device, is ignored.\n\nEach folder is interpreted on the machine the session runs on. For a Code session on an SSH host, `~` means the remote user's home, an entry that references a `%VAR%` is ignored there (environment variables belong to the machine that defines them), and the session's working directory must fall inside one of the folders as they exist on that host. One list serves every machine: `[\"~/work\", \"/srv/work\"]` governs `~/work` for each user, on a managed Mac or a Linux host, and `/srv/work` on a host that has it. A folder that names nothing real on a given machine simply allows nothing there. An empty list allows no folder at all; unset leaves access unrestricted.\n\nA listed folder is one Claude may write as well as read, unless the entry's `mode` (Access mode in Setup) makes it read-only; that field's own description says how far read-only reaches. A Code session can reach every listed folder, not only the one it was opened in. Setting this key also turns on Claude Code's sandbox where it runs (macOS, or Linux and SSH hosts with bubblewrap): there a shell command normally writes in the listed folders without an approval prompt, and its writes to most other places, such as a package cache in the home directory, are refused. A home directory holds shell start-up files and SSH keys, so list work folders, not a whole home directory.\n\nThe list also limits which folders of a project a chat reads.", { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/configuration#allowedworkspacefolders` }) } }), blockReadsOutsideWorkingDirectories: g.field(R.z.boolean().optional(), { flatKey: "blockReadsOutsideWorkingDirectories", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.46388.1" }, executionTarget: "desktop" }, failClosedValue: true, title: v.msg({ defaultMessage: "Block reads outside working directories", id: "GQrrmfzD4R" }), default: { displayOnly: false }, category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 2.5, description: { short: g.shortDescription(v.msg({ defaultMessage: "Keep Claude from reading files outside a Code session\u2019s working directories. File tools refuse such reads; sandboxed shell commands lose the home directory.", id: "vSpvldmS33" })), long: g.longDescription(`When set to \`true\`, Code sessions refuse reads outside their working directories (the session folder plus any \`allowedWorkspaceFolders\`). The file tools (Read, Grep, Glob) refuse them in every permission mode; where Claude Code's sandbox runs (macOS, or Linux and SSH hosts with bubblewrap, once \`allowedWorkspaceFolders\` is set or an egress allowlist applies: in third-party deployments one applies unless \`coworkEgressAllowedHosts\` contains \`*\`, in first-party deployments none does) shell commands cannot see the home directory and other user folders (\`/Users\`, \`/home\`, mounted volumes) and a read there is refused with no prompt; elsewhere (Windows, Linux without bubblewrap, or neither folders nor an egress allowlist in effect) such shell reads prompt for approval. The app keeps the user's git configuration files (which may themselves embed credentials such as URL tokens; a symlinked one stays hidden), its own Claude Code installation, and the session's plugin and attachment folders readable (not on a Windows SSH host, where plugin files and attachments stay out of the file tools' reach under the block). An allowed folder that is or contains the home directory leaves it readable.

Users can re-open folders (even their whole home) in their own Claude Code settings with \`sandbox.filesystem.allowRead\` or \`permissions.additionalDirectories\`; settings files tracked in a git repository cannot. The key travels on Claude Code's managed-settings channel: another Claude Code managed-settings source replaces it unless that source sets \`parentSettingsBehavior\` to \`"merge"\`, and one that sets \`sandbox.filesystem.allowManagedReadPathsOnly\` reduces it to approval prompts. This is \`permissions.blockReadsOutsideWorkingDirectories\` in Claude Code's [managed settings](${Y.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings).

Unset (default): nothing changes.`, { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/configuration#blockreadsoutsideworkingdirectories` }) } }), disableWslSessions: g.field(R.z.boolean().optional(), { flatKey: "disableWslSessions", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.19367.0" }, visibility: "public-undocumented", executionTarget: "desktop" }, appBehaviorOnly: true, title: v.msg({ defaultMessage: "Block WSL sessions", id: "DpHm4YbvWC" }), category: "sandbox", group: ne.CODE_SURFACE_GROUP, order: 15, predicates: { show: (e) => {
    var t;
    return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } }, description: { short: g.shortDescription(v.msg({ defaultMessage: "Block Code sessions that run inside a WSL distro. Windows endpoint policy does not reach inside WSL.", id: "722/v6Am9J" })), long: g.longDescription("Sessions started inside a WSL distro run Claude Code where Windows host endpoint policy (this managed configuration, and Claude Code's own managed-settings.json) does not apply. On a device with any managed configuration present, WSL sessions are blocked unless this key is explicitly set to `false`. Set to `true` to block WSL sessions unconditionally; set to `false` to allow them on managed devices; leave unset to block whenever the device is managed.\n\nThis key is honored only when deployed through machine-scoped management \u2014 MDM on macOS, the HKLM policy hive on Windows, the root-owned `/etc` file on Linux \u2014 never via the in-app Setup panel or user-writable stores; in particular, an explicit `false` written to the user-writable HKCU hive is ignored (and its presence still marks the device as managed). Because the key is grouped with the other app-behavior keys, deploying it claims that whole group: the auto-update keys (`disableAutoUpdates`, `autoUpdaterEnforcementHours`, \u2026) are then resolved from the managed tier alone, and any local- or remote-tier values for them stop applying.") } }), claudeCodeProcessWrapperEnabled: g.field(R.z.boolean().optional(), { flatKey: "claudeCodeProcessWrapperEnabled", support: { enabled: [{ scopes: ["3p"], availableInVersion: "2.7032.0" }, { scopes: ["1p"], availableInVersion: "2.16120.0" }], visibility: "public-undocumented", executionTarget: "desktop" }, remotePolicy: { hotApplied: true }, appBehaviorOnly: true, title: v.msg({ defaultMessage: "Use Claude Code\u2019s corporate launcher", id: "ClaudeCodeProcessWrapperEnabledTitle" }), default: { displayOnly: false }, failClosedValue: true, category: "sandbox", group: ne.CODE_SURFACE_GROUP, order: 15.5, predicates: { show: (e) => {
    var t;
    return ((t = e.codeSurface) === null || t === void 0 ? void 0 : t.enabled) !== false;
  } }, description: { short: g.shortDescription(v.msg({ defaultMessage: "Start Claude Code through the launcher in Claude Code\u2019s managed settings (processWrapper) \u2014 this device\u2019s, and an SSH host\u2019s for SSH sessions. Off by default.", id: "ClaudeCodeProcessWrapperEnabledHint" })), long: g.longDescription("When `true` and Claude Code's managed settings name a corporate launcher in `processWrapper` or `env.CLAUDE_CODE_PROCESS_WRAPPER`, the Code tab starts the app's Claude Code through it: on this device (managed-settings file or MDM profile, never server-managed), and, for an SSH session, through the one in the host's managed-settings files (`/etc/claude-code`; `/Library/Application Support/ClaudeCode` on macOS). Either way it is handed none of the app's inference credential (claude.ai sign-in, provider key, token, auth header or credential file) and reads no stored login or ambient cloud credential of this device (over SSH, the host account's own environment still applies); the launcher must put one in its environment \u2014 `ANTHROPIC_BASE_URL` with `ANTHROPIC_AUTH_TOKEN` or `ANTHROPIC_API_KEY`, or, for the Bedrock, Vertex or Foundry routing the app leaves set (`CLAUDE_CODE_USE_*`; override to switch), that provider's keys or credential file \u2014 or the start fails; it makes no non-essential Anthropic calls. The third-party connection test and title generation start directly. An unusable launcher, an unreadable host settings file or another Claude Code version refuses or ends the session with an error. Device launcher: macOS and Linux (ignored on Windows); SSH hosts: Linux or macOS, from any device; never WSL or Cowork; both deployment modes.\n\nUnset or `false` (default): the app never reads that setting and starts Claude Code directly, with its own credential. A change applies at the next Claude Code start on third party (a served value once fetched) and at the next app launch on a claude.ai install (profile or local configuration file).\n\nThe key is in the app-behavior group (`disableAutoUpdates`, \u2026): a profile that sets any group key is the only source read for all of them \u2014 set it in the profile, with every group key you need, when the profile sets any of them or the launcher must hold against the device's own user; else in the admin console or configuration server.") } }), relocateUncUserData: g.field(R.z.boolean().optional(), { flatKey: "relocateUncUserData", support: { enabled: { scopes: ["1p"], availableInVersion: "1.32352.0" } }, appBehaviorOnly: true, title: v.msg({ defaultMessage: "Move app data off network shares", id: "hnH9BhZfMz" }), category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 7.5, description: { short: g.shortDescription(v.msg({ defaultMessage: "Store app data in local AppData on Windows devices where Roaming AppData is redirected to a network share, which Cowork tasks cannot run from.", id: "3SHQ+DxHRI" })), long: g.longDescription("AD Folder Redirection can point %APPDATA% at a network (UNC) share, where Cowork tasks fail to start. The sandbox cannot mount a network path. With this key set to `true`, the app stores its data in a product-specific `<ProductName>-Data` folder under %LOCALAPPDATA% on such devices instead. The key only takes effect when %APPDATA% actually resolves to a UNC path, so it is a no-op on devices with a local profile and does not move a healthy install.\n\nBecause the key is grouped with the other app-behavior keys, deploying it claims that whole group: the auto-update keys (`disableAutoUpdates`, `autoUpdaterEnforcementHours`, \u2026) are then resolved from the managed tier alone, and any local- or remote-tier values for them stop applying. Deploy it together with any auto-update keys you rely on in the same managed (MDM / HKLM `Policies\\Claude`) tier.\n\nThe relocation is a fresh start, not a move: nothing is carried over from the share. The new local folder begins empty, so users sign in again and re-enter their settings, preferences, and MCP server configuration after the move. Nothing is deleted from the share either; removing the key returns the app to the share with its previous contents (including the previous sign-in state) intact, so the rollback path keeps working.") } }), allowedEgressHosts: g.field(g.annotate(R.z.preprocess((e) => Array.isArray(e) ? e.filter((t) => typeof t === "string" && rt.parseEgressHostEntry(t) !== null) : e, g.annotate(R.z.array(R.z.string().min(1)), { maxItems: 500 }).optional()), { glob: true }), { checkDropped: Pd, flatKey: "coworkEgressAllowedHosts", readers: ["desktop", "code"], failClosedValue: [], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Allowed egress hosts", id: "5oTa1gWQsk" }), egressRequirements: (e) => !Array.isArray(e) ? [] : e.includes("*") ? rt.DEPENDENCY_INSTALL_DOMAINS : e, egressRequirementsLabel: v.msg({ defaultMessage: "Tool egress (Cowork, Code and Chat)", id: "pcNPpyq4F7" }), category: "sandbox", group: ne.GENERAL_RESTRICTIONS_GROUP, order: 1, placeholder: Y.HOST_LIST_PLACEHOLDER, description: { short: g.shortDescription(v.msg({ defaultMessage: "Hostnames the agent\u2019s tools may reach from Cowork, Code and Chat. Also surfaced under Egress Requirements.", id: "JNR06VQqQI" })), long: g.longDescription(`Applies only to **tool calls**, in Cowork, Code and Chat. In Cowork it covers the sandbox's web fetch, shell commands and package installs. In Chat it covers web fetch, and the file-analysis sandbox only if you open its network. In Code it's [translated into Claude Code's network sandbox allowlist](${Y.COWORK_3P_DOCS_BASE}/code#applied-as-managed-policy), and by default a separately deployed Claude Code managed-settings file takes precedence. It does **not** cover Web Search (which runs at your inference provider), inference, or MCP traffic. A list other than \`*\` also bounds where Claude may browse in the built-in browser. When unset, only the inference endpoint is reachable from the sandbox, so the agent's package installs and web fetches fail with a 403.

Entries are exact hostnames (\`api.github.com\`), wildcards (\`*.corp.com\` matches subdomains at any depth, not \`corp.com\` itself), or \`*\` to allow all. IP addresses match only when listed exactly. Web fetch always blocks \`localhost\` and private-network addresses. Shell commands and package installs run in a network sandbox that can reach only the listed hosts plus, outside Chat, your inference provider. With \`*\`, that sandbox is disabled and web fetch still blocks private addresses.

Any entry except bare \`*\` may carry a \`:port\` suffix (\`*.corp.com:8443\`) restricting it to that port. IPv6 literals are not supported. Invalid entries are dropped with a log warning and the rest still work. An unreadable value counts as an empty list. Ports are enforced for the Cowork sandbox's web fetch, shell, and package-install egress; plugin CLIs ignore port-scoped entries for now, and the Code translation treats them as the bare host. Only deploy port-scoped entries once your whole fleet supports them (\`disableAutoUpdates\` pins builds). On an older build, a single one invalidates the session's whole shell and package-install allowlist.

Open listed hosts on your network firewall too.`, { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/web-tools#web-fetch` }) } }), egressProxyUrl: g.field(g.annotate(nt.urlSchema({ allowHttp: true }).optional(), { redact: "hostname" }), { flatKey: "egressProxyUrl", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.44121.1" } }, appBehaviorOnly: true, remotePolicy: { type: "remote-disabled" }, title: v.msg({ defaultMessage: "Proxy server URL", id: "A/z9Ko1sje" }), egressRequirements: Y.singleHostEgress, egressRequirementsLabel: v.msg({ defaultMessage: "Proxy server", id: "B/iAs+tICD" }), category: "connection", group: bd, order: 1, placeholder: v.msg({ defaultMessage: "http://proxy.example.com:8080", id: "F8dd6JjEQu" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "Send the app\u2019s and the agent\u2019s traffic through this HTTP proxy instead of the operating system\u2019s proxy settings.", id: "XX6zi7GmwV" })), long: g.longDescription("Pins the app (sign-in, the connection test, model discovery, MCP servers, plugins), the Claude Code engine behind Chat, Cowork, and Code, and on macOS and Windows the Cowork workspace VM (the agent's shell, package-install, `git`, and plugin commands) to one HTTP proxy. Use it when your gateway or the internet is reachable only through a corporate proxy and you cannot rely on the system proxy. It is a reachability setting, not an egress control.\n\nThe value is an `http://` or `https://` URL, usually with a port. SOCKS proxies and embedded credentials (`user:pass@`) are rejected. Give a local forwarding proxy on the device as `http://127.0.0.1:port`; an `https://` loopback address cannot be verified from inside the Cowork workspace VM. Requests to `localhost`, `127.0.0.1`, `[::1]`, and `*.local` names bypass the proxy so local MCP servers keep working; everything else goes through it, and if the proxy is unreachable requests fail rather than connect directly. The engine receives it as `HTTPS_PROXY` and `HTTP_PROXY` with a matching `NO_PROXY`; if Claude Code managed settings on the device set those variables, they win for the engine on the host. Traffic that never uses this proxy: the Cowork workspace VM on Linux, credential and header helper scripts, the update download, the Windows sign-in broker, and pages opened in the system browser.\n\nRead once at launch from device management (MDM) or the local configuration file only; a configuration server cannot deliver it, because the app may need the proxy to reach that server. A profile that sets only this key (or only the other app-behavior keys, such as `disableAutoUpdates`) does not take over a connection users set up in the app, but those keys are read from one source as a group, so put the proxy in the same profile as your update settings. Changes apply at the next app start. When `egressProxyPacUrl` is also set, the PAC file wins and this key is ignored.", { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/network-proxy` }) } }), egressProxyPacUrl: g.field(g.annotate(nt.urlSchema({ allowHttp: true }).optional(), { redact: "hostname" }), { flatKey: "egressProxyPacUrl", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.44121.1" } }, appBehaviorOnly: true, remotePolicy: { type: "remote-disabled" }, title: v.msg({ defaultMessage: "Proxy auto-config (PAC) URL", id: "0DhMVtlmyQ" }), egressRequirements: Y.singleHostEgress, egressRequirementsLabel: v.msg({ defaultMessage: "Proxy auto-config file", id: "Gqm6SFn9I2" }), category: "connection", group: bd, order: 2, placeholder: v.msg({ defaultMessage: "http://wpad.example.com/proxy.pac", id: "E7zJ/trntg" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "URL of a PAC file that decides the proxy per request. Wins over the proxy server URL when both are set.", id: "dRsQ1NgKdo" })), long: g.longDescription("At launch the app downloads the PAC script and asks it which proxy to use for each request, as a browser would, instead of following the operating system's proxy settings. Same value rules, coverage, exclusions, and delivery as `egressProxyUrl`, except that bypassing is the script's decision: `localhost`, `127.0.0.1`, and `[::1]` still never use a proxy, but `*.local` names and everything else follow whatever it returns. If the PAC file cannot be downloaded, the app connects directly rather than failing.\n\nOn macOS and Windows the Cowork workspace VM is handed a copy of the script when it starts and evaluates it for each request itself; there `myIpAddress()` returns the VM's internal address rather than the device's, so a script that chooses by client subnet gives the VM its off-network answer (if that download fails, the VM connects directly). The Claude Code engine behind Chat, Cowork, and Code cannot evaluate a PAC file, so the app hands it one proxy (whichever the script returns for your inference endpoint) plus a bypass for loopback and `*.local` names. If the script answers `DIRECT` or only `SOCKS` for that endpoint, the engine uses no proxy at all, so have it return an HTTP `PROXY host:port` entry there; if the engine needs different rules, set `HTTPS_PROXY` and `NO_PROXY` in Claude Code managed settings, which win for the engine on the host.", { docsUrl: `${Y.COWORK_3P_DOCS_BASE}/network-proxy` }) } }), edrExtension: g.field(nt.configuredHostPath.optional(), { flatKey: "coworkEDRIntegration", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "2.16120.0" }, visibility: "public-undocumented", executionTarget: "desktop" }, remotePolicy: { type: "remote-disabled" }, appBehaviorOnly: true, title: v.msg({ defaultMessage: "EDR Integration package path", id: "IBdsVeIXWe" }), category: "sandbox", predicates: { show: () => false }, description: { short: g.shortDescription(v.msg({ defaultMessage: "Path on the user\u2019s computer to the signed package an endpoint security (EDR) vendor supplies for the Cowork workspace VM. Read from device management only.", id: "rhY1Zx/tks" })), long: g.longDescription("The path on the user's computer of the signed package your endpoint security (EDR) vendor supplies for the Cowork workspace VM. Put its signature file beside the file this path points to, named as that file plus `.sig`. Keep both, and every folder above them, where ordinary users cannot write. Each time the workspace VM starts, it checks that signature and, only if it is from the vendor named in `coworkEDRIntegrationVendor`, which you must also set, runs the package's `install.sh` as root to install or update the sensor. The signature covers only the package file, `install.sh` included; what the sensor downloads afterwards, including its own updates, is the vendor's and is not checked by Claude. macOS only.\n\nClaude reads this key only from configuration that only an administrator can install: an MDM profile on macOS, or the root-owned file under `/etc/claude-desktop` on Linux. It ignores the key in the in-app Setup panel, in any file the user can edit, and from a configuration server. It is one of the app-behavior keys (`disableAutoUpdates`, `relaunchEnforcementHours`, `egressProxyUrl`, \u2026), which Claude takes as a set: once your profile sets any of them, values for the others from a local file or a configuration server stop applying, so put every one you use in the same profile.\n\nUnset (default): no vendor package is installed in the workspace VM. Removing this key only stops later runs of the package. It does not remove or stop a sensor already installed, which stays on the workspace VM's disk until that VM is deleted or replaced.\n\nNetwork access: `install.sh` and whatever it installs run as root in the workspace VM and are not part of any session, so the network egress allowlist, the proxy keys (`egressProxyUrl`, `egressProxyPacUrl`) and the device's proxy settings do not apply to them. Claude does not otherwise limit which internet hosts they can reach; their connections are ordinary traffic from the device, subject to your own network-layer controls.") } }), edrExtensionVendor: g.field(nt.vendorId.optional(), { flatKey: "coworkEDRIntegrationVendor", support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "2.16120.0" }, visibility: "public-undocumented", executionTarget: "desktop" }, remotePolicy: { type: "remote-disabled" }, appBehaviorOnly: true, title: v.msg({ defaultMessage: "EDR Integration vendor ID", id: "/BHf6muvcS" }), category: "sandbox", predicates: { show: () => false }, description: { short: g.shortDescription(v.msg({ defaultMessage: "The ID of the vendor that signed the package coworkEDRIntegration points to. Required with that key, or nothing is installed. Read from device management only.", id: "HBPYbmIcrk" })), long: g.longDescription("The ID of the endpoint security (EDR) vendor that signed the package `coworkEDRIntegration` points to: 1 to 32 characters from a to z, 0 to 9 and the hyphen, not starting with a hyphen, for example `example-vendor`. It must be an ID this release of Claude accepts; ask your vendor which ID to use. Required whenever `coworkEDRIntegration` is set. The workspace VM runs the package only if this vendor signed it; a package signed by anyone else is refused, even another vendor this release of Claude accepts. The signature the VM checks is the `.sig` file described under `coworkEDRIntegration`. macOS only.\n\nClaude reads this key only from the configuration described under `coworkEDRIntegration`, and ignores a value from anywhere else. It is one of the app-behavior keys (see `coworkEDRIntegration`), so put it in the same profile as every other app-behavior key you use.\n\nUnset (default): if `coworkEDRIntegration` is set, nothing is installed, and each time the workspace VM starts `cowork_vm_node.log` in the app's logs folder records the reason, `vendor_not_named`. It records `config_invalid` for a value not of the form above and `vendor_unknown` for an ID this release of Claude does not accept; neither installs anything. To turn the feature off without these entries, remove `coworkEDRIntegration`, not this key. Removing either key only stops later runs: a sensor already installed stays on the workspace VM's disk until that VM is deleted or replaced.") } }), vmIpv6Enabled: g.field(R.z.boolean().optional(), { flatKey: "coworkVmIpv6Enabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.52386.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Enable IPv6 in the workspace VM", id: "JHTnwZf+m3" }), default: { displayOnly: false }, category: "connection", group: J_, order: 1, description: { short: g.shortDescription(v.msg({ defaultMessage: "Give the Cowork workspace VM an IPv6 address and route so the agent\u2019s tools can reach IPv6-only hosts through the device. macOS and Windows; off by default.", id: "v9YS8eHay0" })), long: g.longDescription("When set to `true`, the Cowork workspace VM on macOS and Windows gets a static IPv6 address (a unique local `fd\u2026` address) and an IPv6 default route on its virtual network next to its IPv4 address, and the VM's gateway forwards that traffic over the device's own IPv6 connectivity, as it already does for IPv4. Use it when the tools the agent runs in the VM (shell commands, package installs, `git`, and plugin commands) must reach IPv6-only destinations. The VM's resolver then also returns IPv6 (AAAA) answers. A connection the VM makes over IPv6 succeeds only where the device's own IPv6 does; on a device without working IPv6, destinations that have both keep working over IPv4 and IPv6-only destinations stay unreachable. Because the VM's address is unique-local, most tools in it keep preferring IPv4 for destinations that have both, so IPv6 mostly carries traffic to IPv6-only destinations.\n\nThis is a reachability setting, not an egress control: `coworkEgressAllowedHosts` keeps deciding which hostnames the agent's tools may reach, by name, over either protocol, and IPv6 literals are still not accepted there. Hosts your policies allow must also be reachable, and filtered the way you intend, over IPv6 on your network.\n\nUnset (default): the VM is IPv4-only and its resolver returns no IPv6 answers. A change takes effect the next time the workspace VM starts, typically at the next app launch. Does not apply to the Cowork workspace VM on Linux or to Code sessions, which use the device's own network stack.") } }), secureVmEnabled: g.field(R.z.boolean().optional(), { flatKey: "secureVmFeaturesEnabled", support: { enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, failClosedValue: false, title: v.msg({ defaultMessage: "Secure VM features", id: "+AQagzW8cG" }), category: "sandbox", description: { short: g.shortDescription(v.msg({ defaultMessage: "Enable additional VM-level isolation for the Cowork sandbox.", id: "SecureVmFeaturesHint" }), { docsOnly: true }) } }), hardwareBuddyEnabled: g.field(R.z.boolean().optional(), { flatKey: "hardwareBuddyEnabled", support: { enabled: { scopes: ["1p"], availableInVersion: "1.18286.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Allow Hardware Buddy devices", id: "HardwareBuddyEnabled" }), default: true, failClosedValue: false, category: "connectors", description: { short: g.shortDescription(v.msg({ defaultMessage: "Allow pairing Hardware Buddy Bluetooth devices in Cowork.", id: "HardwareBuddyHint" }), { docsOnly: true }) } }), quickWriteEnabled: g.field(R.z.boolean().optional(), { flatKey: "quickWriteEnabled", support: { enabled: { scopes: ["1p"], availableInVersion: "2.26454.0" }, visibility: "public-undocumented" }, appBehaviorOnly: true, title: v.msg({ defaultMessage: "Allow Quick Write", id: "ae+sNvqJZe" }), category: "sandbox", description: { short: g.shortDescription(v.msg({ defaultMessage: "Off on a managed computer until set to true.", id: "ui6EQvL97l" })) } }), requireFullVmSandbox: g.field(R.z.boolean().optional(), { flatKey: "requireCoworkFullVmSandbox", support: { enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" }, deprecated: { scopes: ["3p"], availableInVersion: "1.2581.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Require full VM sandbox", id: "wQRUBw9rk7" }), default: false, failClosedValue: true, category: "sandbox", description: { short: g.shortDescription(v.msg({ defaultMessage: "Runs tools inside an isolated VM instead of the host. Stronger isolation; slower file access and no host-process tools.", id: "LVgbWJo83E" })) }, predicates: { warn: (e) => e === true ? v.msg({ defaultMessage: "The default host-native mode starts faster and works behind restricted networks. Shell commands run inside the VM; file tools run on the host with path-based access control. Enable this only if your security review requires the agent loop itself to run in the VM.", id: "05sWumUU1+" }) : null } }), endUserAttribution: g.field(R.z.boolean().optional(), { flatKey: "endUserAttribution", readers: ["desktop", "code"], legacyFlatKey: { name: "enduserAttribution", effect: "the key will read as false (its fail-closed value): end-user attribution will stay off \u2014 no identity shown, no enduser.id emitted \u2014 whatever the old name said", ...kt.BATCH_2026_09 }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.25927.0" } }, failClosedValue: false, remotePolicy: { applyUnverified: false }, default: { displayOnly: true }, title: vd, category: "appearance", group: vd, description: { short: g.shortDescription(v.msg({ defaultMessage: "Show the signed-in user\u2019s identity-provider identity in the sidebar and account menu, and emit it as the OpenTelemetry enduser.id resource attribute.", id: "enduserAttrHnt" })), long: g.longDescription("When on (default), the app resolves the signed-in user's identity from the configured credential source (the identity provider claim, or the OS login name when no claim is available) and shows it in the sidebar footer, the account menu, and the Code session greeting. If an OpenTelemetry collector is configured, the same identity is also emitted as the `enduser.id` resource attribute on every span, metric, and log sent to your collector \u2014 unless you have set a static `enduser.id` under OpenTelemetry resource attributes, in which case your static value is kept and the runtime identity is not emitted. When off, no identity is shown in the app and no runtime `enduser.id` is emitted; a static `enduser.id` under OpenTelemetry resource attributes still passes through unchanged. This setting does not gate the `process.owner` resource attribute (the OS login name), which is standard OpenTelemetry process metadata and is always emitted \u2014 set a static `process.owner` under OpenTelemetry resource attributes to override it. Applies to both Cowork tasks and Code sessions.") } }), userContentRendererUrl: g.field(nt.urlSchema({ rejectLoopback: true }).optional(), { flatKey: "userContentRendererUrl", support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.0" } }, remotePolicy: { rejectLoopback: true }, title: v.msg({ defaultMessage: "Artifact preview iframe origin", id: "ucrUrlTitle" }), category: "connection", egressRequirements: Y.singleHostEgress, egressRequirementsLabel: v.msg({ defaultMessage: "Artifact preview iframe", id: "ucrUrlEgrs" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "HTTPS origin of the user-content-renderer deployment used for artifact and file previews. Defaults to the commercial host when unset.", id: "ucrUrlHint" })) } }), organizationInstructions: g.field(R.z.string().trim().min(1).max(3e3).optional(), { flatKey: "organizationInstructions", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" }, executionTarget: "desktop" }, title: v.msg({ defaultMessage: "Organization instructions", id: "t2ElSZR3Hy" }), category: "sandbox", group: v.msg({ defaultMessage: "Organization instructions", id: "t2ElSZR3Hy" }), multiline: true, placeholder: v.msg({ defaultMessage: "Always answer in British English. Never include customer account numbers in a response.", id: "tevwj/1wDb" }), description: { short: g.shortDescription(v.msg({ defaultMessage: "Appended to Claude\u2019s system prompt in Chat, Cowork, and Code. Guidance the model follows, not an enforced control. Up to 3,000 characters.", id: "1h3TR2uKST" })), long: g.longDescription(`Free-text instructions from your organization that Claude Desktop appends, in a clearly delimited block, after its own system prompt in **Chat**, **Cowork**, and **Code** (every chat, task, and Code session, including the sub-agents they spawn): for example house style, data-handling rules, or topics to decline. The model is told these instructions come from the organization's administrator and take priority over a user's personal preferences.

This is guidance the model follows, not an enforced control: like any system-prompt text it steers the model's behavior and is usually honored, but it does not guarantee an outcome and is not a substitute for the restriction keys (tool policy, egress allowlist, folder allowlist). The app's own system prompt is never replaced or shortened by this key; in Code sessions it is added after Claude Code's own prompt and any \`CLAUDE.md\` instructions still apply.

Read from the app's loaded configuration when a session starts; a changed value generally takes effect for sessions started after the next app launch. Leading and trailing whitespace is trimmed; an empty string is treated as unset. Maximum 3,000 characters; a longer value is rejected (the key is ignored with a configuration error) rather than truncated. Line breaks are preserved when the value is delivered as JSON, a bootstrap response, a \`.mobileconfig\` profile, or a \`.reg\` file; the Group Policy (ADMX) and Intune text box for this setting is single-line.`) } }) });
  var dr = { Bash: "mcp__workspace__bash", WebFetch: "mcp__workspace__web_fetch" }, lw = { Bash: [dr.Bash, "PowerShell"], WebFetch: [dr.WebFetch] };
  function Rd(e) {
    for (let [t, o] of Object.entries(lw)) if (e.has(t)) for (let s of o) e.add(s);
    return [...e];
  }
  function ur(e) {
    var t, o, s;
    let n = new Set((o = (t = e.workspace) === null || t === void 0 ? void 0 : t.disabledBuiltinTools) !== null && o !== void 0 ? o : []);
    if (us.isBedrockFamily((s = e.inference) === null || s === void 0 ? void 0 : s.provider)) n.add("WebSearch");
    return Rd(n);
  }
  function dw(e) {
    return io.surfacesOf(e).chat;
  }
  function cw(e) {
    return io.surfacesOf(e).cowork;
  }
  function uw(e) {
    var t;
    return ((t = e.workspace) === null || t === void 0 ? void 0 : t.skillCreationEnabled) !== false;
  }
  function pw(e) {
    var t;
    let o = (t = e.workspace) === null || t === void 0 ? void 0 : t.autoModeEnabled;
    return { code: o !== false, cowork: o === true };
  }
  function hw(e) {
    let t = io.surfacesOf(e);
    return t.chat && t.fileAnalysis && !ur(e).includes(dr.Bash);
  }
  function Dd(e) {
    var t, o;
    let s = new Set(ur(e)), n = /* @__PURE__ */ new Set();
    for (let [i, u] of Object.entries((o = (t = e.workspace) === null || t === void 0 ? void 0 : t.builtinToolPolicy) !== null && o !== void 0 ? o : {})) if (u !== "allow" && ao(i) !== void 0) n.add(i);
    return Rd(n).filter((i) => !s.has(i));
  }
  function xd(e) {
    var t;
    return (t = no[e]) !== null && t !== void 0 ? t : [e];
  }
  function fw(e) {
    let t = /* @__PURE__ */ new Set();
    for (let o of Dd(e)) {
      let s = ao(o);
      if ((s === null || s === void 0 ? void 0 : s.content) === void 0) t.add(o);
      else for (let n of xd(s.tool)) t.add(n);
    }
    return [...t];
  }
});
var Tjn = (0, import_chunk_w1d7ygsk.V)(function(Nd) {
  Object.defineProperty(Nd, "__esModule", { value: true });
  Nd.TIER_DESCRIPTIONS = Nd.EFFORT_LEVELS = Nd.ANTHROPIC_TIER_NAMES = void 0;
  Nd.ANTHROPIC_TIER_NAMES = ["sonnet", "opus", "haiku", "fable", "mythos"];
  Nd.EFFORT_LEVELS = ["low", "medium", "high", "xhigh", "max"];
  Nd.TIER_DESCRIPTIONS = { haiku: "Fastest for quick answers", sonnet: "Most efficient for everyday tasks", opus: "Most capable for ambitious work", fable: "For your toughest challenges" };
});
var PGi = (0, import_chunk_w1d7ygsk.V)(function(qd) {
  Object.defineProperty(qd, "__esModule", { value: true });
  qd._test = qd.TIER_ALIASES = void 0;
  qd.isDefinitelyNotAnthropicModel = Uw;
  qd.containsAnthropicToken = Hw;
  qd.isLikelyAnthropicModelId = hs;
  qd.verdictToFallbackReason = zw;
  qd.checkModel = Bw;
  var ps = Tjn();
  qd.TIER_ALIASES = new RegExp(`^(${ps.ANTHROPIC_TIER_NAMES.join("|")})(-[\\d.]+)?$`);
  var Kd = ["claude", ...ps.ANTHROPIC_TIER_NAMES, "anthropic"], Bd = /ark-code|astron|command-r|deepseek|doubao|gemini|gemma|glm|gpt|grok|hermes|hy3|kimi|lfm|\bling\b|llama|longcat|mimo|minimax|mistral|mixtral|moonshot|nemotron|openai|phi-|qianfan|qwen|tc-code|\bunic\b|yi-|stepfun|step-3|seed-|bytedance|hunyuan|granite|amazon\.nova|nova-|devstral|ministral|ernie|codex|arcee|trinity|abab|phi\d|\bk2\.|\bm2\.|jamba|arctic|solar|mercury|zamba|kat-coder|\bds-|dpsk/;
  function Uw(e) {
    return Bd.test(e.toLowerCase());
  }
  function Hw(e) {
    let t = e.toLowerCase();
    return Kd.some((o) => t.includes(o));
  }
  function hs(e) {
    let t = e.toLowerCase();
    if (Bd.test(t)) return false;
    return qd.TIER_ALIASES.test(t) || Kd.some((o) => t.includes(o));
  }
  var Nw = ["not_in_allowed_models", "model_restricted", "desktop_update_required"];
  function zw(e) {
    var t;
    return (t = Nw.find((o) => o === e.reason)) !== null && t !== void 0 ? t : "fails_anthropic_model_check";
  }
  function Vd(e) {
    let t = e.toLowerCase();
    if (/(?:^|\.)anthropic\./.test(t)) return { ok: true };
    if (/^arn:aws[a-z-]*:bedrock:/.test(t) && t.includes("/anthropic.")) return { ok: true };
    if (t.includes(":application-inference-profile/")) return { ok: true, warn: `Bedrock model "${e}" is an application inference profile; underlying model not verified.` };
    if (t.includes(":provisioned-model/")) return { ok: true, warn: `Bedrock model "${e}" is a provisioned-throughput ARN; underlying model not verified.` };
    return { ok: false, reason: 'expected a Bedrock model ID with the "anthropic." vendor prefix (e.g. anthropic.claude-sonnet-4-5-v1:0) or an inference-profile ARN' };
  }
  function Fd(e) {
    if (/[/\\?#%\s]/.test(e)) return { ok: false, reason: "Vertex model IDs cannot contain '/', '\\', '?', '#', '%' or whitespace" };
    if (e.toLowerCase().startsWith("claude-")) return { ok: true };
    return { ok: false, reason: 'expected a Vertex Model Garden ID starting with "claude-" (e.g. claude-sonnet-4-5@20250929)' };
  }
  function Gd(e) {
    if (hs(e)) return { ok: true };
    return { ok: false, reason: "expected a Foundry deployment name referencing an Anthropic model (e.g. claude-sonnet-4-5). Name deployments to match the underlying model." };
  }
  function Kw(e) {
    if (hs(e)) return { ok: true };
    return { ok: false, reason: "expected an Anthropic model ID (e.g. claude-sonnet-4-5)" };
  }
  function Wd(e) {
    if (hs(e)) return { ok: true };
    return { ok: false, reason: "expected a gateway model route referencing an Anthropic model (e.g. claude-sonnet-4-5, anthropic/claude-*). Name routes to match the underlying model." };
  }
  function Bw(e, t) {
    if (e === void 0) return { ok: true };
    if (qd.TIER_ALIASES.test(t.toLowerCase())) return { ok: true };
    switch (e) {
      case "anthropic":
        return Kw(t);
      case "bedrock":
        return Vd(t);
      case "vertex":
        return Fd(t);
      case "foundry":
        return Gd(t);
      case "gateway":
      case "mantle":
        return Wd(t);
    }
  }
  qd._test = { isBedrockAnthropicModel: Vd, isVertexAnthropicModel: Fd, isFoundryAnthropicModel: Gd, isGatewayAnthropicModel: Wd };
});
var QEo = (0, import_chunk_w1d7ygsk.V)(function(Zd) {
  Object.defineProperty(Zd, "__esModule", { value: true });
  Zd.ModelsConfig = Zd.MODEL_CATALOG_LOCATION_UNREADABLE_STAND_IN = Zd.InferenceModel = void 0;
  Zd.isBelowMinDesktopVersion = jw;
  Zd.modelDiscoveryUrlHint = fr;
  Zd.usageCostEstimateEnabled = ys;
  Zd.effectiveModelPricing = $w;
  Zd.dropNonAnthropicModels = Xw;
  Zd.droppedModelMessage = Jw;
  Zd.nonAnthropicModelText = Yd;
  var B = require("/$bunfs/root/chunk-gx4ehpac.js"), bs = PGi(), lo = dX(), _ = Vk(), N = T4(), k = vj(), Ct = Ime(), ms = NZ(), it = Tjn();
  function gs(e) {
    let t = e.match(/^(.+?)\[1m\]$/i);
    return t ? t[1].trim() : e;
  }
  function hr(e) {
    return B.z.preprocess((t) => typeof t === "string" ? t.trim().toLowerCase() : t, B.z.enum(e));
  }
  function jw(e, t) {
    return t !== void 0 && N.DESKTOP_VERSION_RE.test(t) && N.DESKTOP_VERSION_RE.test(e) && _.compareDesktopVersions(e, t) < 0;
  }
  Zd.InferenceModel = B.z.object({ name: _.subfield(B.z.string().trim().min(1), { label: k.msg({ defaultMessage: "Model ID", id: "/m0q/Dre6A" }), isPrimaryKey: true, mono: true, placeholder: k.msg({ defaultMessage: "claude-opus-4", id: "s+j6yEtVLW" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "Model ID exactly as the provider expects it. The first entry is the default model.", id: "1tZVf88rjp" })) } }), labelOverride: _.subfield(B.z.string().trim().transform((e) => e || void 0).optional(), { label: k.msg({ defaultMessage: "Display name", id: "dOQCL8n7dZ" }), placeholder: k.msg({ defaultMessage: "Claude Opus 4", id: "c1LGvG2F3D" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "Shown in the model picker. Leave blank to auto-format from the ID.", id: "y8c8KzJEws" }), { docsOnly: false }) } }), supports1m: _.subfield(B.z.boolean().optional().catch(void 0), { label: k.msg({ defaultMessage: "Offer 1M-context variant", id: "a87VTwtQw3" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "Adds a 1M-context variant of this model to the picker. Set only if the deployment accepts 1M-token context for it.", id: "Dr5ZeQOODs" }), { docsOnly: false }) } }), prefer1m: _.subfield(B.z.boolean().optional().catch(void 0), { label: k.msg({ defaultMessage: "Only show the 1M option", id: "MiULGAn5+H" }), support: { availableInVersion: "1.21459.0" }, description: { short: _.shortDescription(k.msg({ defaultMessage: "Shows one option for this model and requests 1M from your provider. Does nothing unless the entry offers 1M.", id: "Sv+taooA73" }), { docsOnly: false }) }, predicates: { show: (e) => Boolean(e.supports1m) } }), anthropicFamilyTier: _.subfield(hr(it.ANTHROPIC_TIER_NAMES).optional().catch(void 0), { label: k.msg({ defaultMessage: "Tier alias", id: "y8qYHNqpeo" }), support: { availableInVersion: "1.13576.0" }, description: { short: _.shortDescription(k.msg({ defaultMessage: "Which Claude tier this model stands in for. Pins the bare alias (e.g. \u2018opus\u2019) and, for opus/fable, the refusal fallback.", id: "AJudB3RUvn" }), { docsOnly: false }) } }), isFamilyDefault: _.subfield(B.z.boolean().optional().catch(void 0), { label: k.msg({ defaultMessage: "Default for tier", id: "0yJnYjaXIK" }), support: { availableInVersion: "1.13576.0" }, description: { short: _.shortDescription(k.msg({ defaultMessage: "When several models share a tier alias, marks this one as the model the alias resolves to. Otherwise the first listed wins.", id: "trBeCWLw48" })) }, predicates: { show: (e) => Boolean(e.anthropicFamilyTier) } }), maxEffort: _.subfield(hr(it.EFFORT_LEVELS).optional().catch("low"), { label: k.msg({ defaultMessage: "Max effort", id: "6cacFh6uvE" }), support: { availableInVersion: "2.110.0" }, description: { short: _.shortDescription(k.msg({ defaultMessage: "Highest effort level offered for this model; higher levels are hidden and never requested by Claude Desktop. An unrecognized value caps the model at low.", id: "NsfxwZEink" }), { docsOnly: false }) } }), minDesktopVersion: _.subfield(N.desktopVersionString().optional().catch(void 0), { label: k.msg({ defaultMessage: "Minimum app version", id: "UGoWM49v6Y" }), support: { availableInVersion: "2.19675.0", visibility: "public-undocumented" }, predicates: { show: (e) => e.minDesktopVersion !== void 0 }, description: { short: _.shortDescription(k.msg({ defaultMessage: "Oldest Claude Desktop version that can use this model, as three numbers like 2.2553.0. Older apps that read this setting grey the model out and ask to update.", id: "xkocyM6Lej" }), { docsOnly: false }) } }) });
  function Yw(e) {
    var t;
    let o = e.map((p) => typeof p === "string" ? { name: p } : p), s = /* @__PURE__ */ new Map();
    for (let p of o) if (gs(p.name) === p.name && !s.has(p.name)) s.set(p.name, p);
    let n = (p) => p.anthropicFamilyTier !== void 0 || p.isFamilyDefault === true, i = /* @__PURE__ */ new Map();
    for (let p of o) {
      let y = gs(p.name), b = y === p.name ? void 0 : s.get(y);
      if (b && !n(b) && !n(p)) {
        let S = (t = i.get(b)) !== null && t !== void 0 ? t : { plain: b, spellings: [] };
        S.spellings.push(p), i.set(b, S).set(p, S);
      }
    }
    let u = /* @__PURE__ */ new Set();
    return o.flatMap((p) => {
      let y = i.get(p);
      if (!y) {
        let C = gs(p.name);
        return [C === p.name ? p : { ...p, name: C, supports1m: true }];
      }
      if (u.has(y)) return [];
      u.add(y);
      let b = y.plain.prefer1m === void 0 && y.spellings.some((C) => C.prefer1m === true), S = [y.plain, ...y.spellings].map((C) => C.maxEffort).filter((C) => C !== void 0).sort((C, x) => it.EFFORT_LEVELS.indexOf(C) - it.EFFORT_LEVELS.indexOf(x))[0], M = [y.plain, ...y.spellings].map((C) => C.minDesktopVersion).filter((C) => C !== void 0).sort(_.compareDesktopVersions).at(-1);
      return [{ ...y.plain, supports1m: true, ...b && { prefer1m: b }, ...S && { maxEffort: S }, ...M && { minDesktopVersion: M } }];
    });
  }
  var Zw = (e) => {
    var t;
    return ((t = e.inference) === null || t === void 0 ? void 0 : t.provider) !== void 0 && !Ct.PROVIDER_CLI_FLAG[e.inference.provider];
  };
  function fr(e, t) {
    let o = t.inference;
    switch (o === null || o === void 0 ? void 0 : o.provider) {
      case "anthropic":
        return `https://${lo.ANTHROPIC_API_HOST}/v1/models`;
      case "gateway":
        return o.baseUrl ? `${o.baseUrl.replace(/\/+$/, "")}/v1/models` : "/v1/models";
      case "bedrock":
        return o.region ? lo.bedrockControlPlaneHost(o.region) : e.formatMessage({ defaultMessage: "the Bedrock control-plane", id: "+aUKGm2IHp" });
      default:
        return e.formatMessage({ defaultMessage: "the provider", id: "QL5gWJ5JBl" });
    }
  }
  var fs = () => B.z.number().min(0).max(1e4);
  Zd.MODEL_CATALOG_LOCATION_UNREADABLE_STAND_IN = "https://model-catalog.invalid/unreadable";
  Zd.ModelsConfig = B.z.object({ discoveryEnabled: _.field(B.z.boolean().optional(), { flatKey: "modelDiscoveryEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.8089.0" }, executionTarget: "desktop" }, default: { displayOnly: true }, title: k.msg({ defaultMessage: "Model discovery", id: "jU4z+3Uk7+" }), category: "connection", group: N.MODELS_GROUP, order: -1, predicates: { show: (e) => Ct.providerHasDiscovery(e) }, description: { short: _.shortDescription((e, t) => Zw(t) ? e.formatMessage({ defaultMessage: "Auto-populate the model picker from {url} at launch; when this key isn\u2019t set in the config, discovery is skipped if the model list below makes it unnecessary.", id: "b/YbjgdGIX" }, { url: fr(e, t) }) : e.formatMessage({ defaultMessage: "Auto-populate the model picker from {url} at launch.", id: "xWiIy0pAlB" }, { url: fr(e, t) })), long: _.longDescription("Auto-populate the model picker from the provider's model-list endpoint at launch. For gateway and Anthropic providers, a config that doesn't set this key skips discovery automatically when the model list below already makes it unnecessary; the toggle here only sets it explicitly on or off. Turn off if the endpoint isn't reachable from your network, or to use a fixed list. When off, the model list below is required and must use full model IDs (aliases like sonnet/opus are resolved via discovery).", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }), prefer1mContext: _.field(B.z.boolean().optional(), { flatKey: "modelPrefer1mContext", readers: ["desktop", "code"], remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.28929.0" } }, default: { displayOnly: false }, title: k.msg({ defaultMessage: "Use 1M wherever it\u2019s available", id: "FhHsMUG/nO" }), category: "connection", group: N.MODELS_GROUP, order: -0.5, description: { short: _.shortDescription(k.msg({ defaultMessage: "Every model that offers 1M, in your list or from your gateway, shows one option and requests 1M.", id: "XbCo6omBCD" })), long: _.longDescription("Every model that offers a 1M-token context window shows one option in the model picker, and sessions on it request 1M from your provider. A model offers 1M when its `inferenceModels` entry sets `supports1m` or, under discovery, when your gateway's model list marks it. Equivalent to setting `prefer1m` on each of those entries, but also applies under dynamic discovery. To leave one listed model out, remove its `supports1m`. Beside a model list in which no entry sets `supports1m`, this setting does nothing. Older Claude Desktop versions show both options and only start the default model on its 1M option.", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }), list: _.field(_.annotate(_.annotate(B.z.array(B.z.union([B.z.string().trim().min(1), Zd.InferenceModel])).min(1), { maxItems: 200 }).transform(Yw).optional(), { redact: "hash", gatewayServable: false }), { flatKey: "inferenceModels", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, title: k.msg({ defaultMessage: "Model list", id: "hv0F38ESRM" }), groupOverride: "nameSubset", category: "connection", group: N.MODELS_GROUP, order: 0, addLabel: k.msg({ defaultMessage: "Add model", id: "zUO6Ii5EAT" }), description: { short: _.shortDescription((e, t) => {
    var o;
    return ((o = t.models) === null || o === void 0 ? void 0 : o.discoveryEnabled) === false || !Ct.providerHasDiscovery(t) ? e.formatMessage({ defaultMessage: "Models to show in the picker. First entry is the default.", id: "i8fSuvZDK/" }) : e.formatMessage({ defaultMessage: "Override the auto-discovered model list. First entry is the default.", id: "G/QQvx0Tsd" });
  }), long: _.longDescription('Use the **provider\'s exact model ID**: Vertex publisher IDs (`claude-sonnet-5`), Bedrock inference-profile IDs (`us.anthropic.claude-sonnet-5`), or Foundry deployment names. Entries may be plain ID strings or objects.\n\n**Gateway:** the `name` must be the exact ID your gateway\'s `/v1/models` endpoint returns. If you set `supports1m` on an alias (`sonnet`) but discovery returns the full ID, the variant won\'t appear.\n\n**Extended context** (`supports1m`) is a capability assertion you make about your deployment; only set it for models you\'ve confirmed support the 1M-token window:\n```json\n[{"name": "claude-sonnet-5", "supports1m": true}, "claude-opus-4-8"]\n```\n`"claude-sonnet-5[1m]"` is shorthand for the same entry. When an ID is listed both bare and with `[1m]` (as a gateway lists it), the picker shows one model with a 1M variant; put `labelOverride` on the bare entry (a label on the `[1m]` spelling is ignored there); tier-tagged entries are not folded. `prefer1m: true` (no effect without `supports1m`) shows only the 1M variant of the model. Under dynamic discovery (no explicit list), set `modelPrefer1mContext` instead.\n\n**Display label** (`labelOverride`) is for IDs the picker can\'t derive a friendly name from (Bedrock ARNs, gateway routing aliases). Display-only; `name` is still what the app sends:\n```json\n[{"name": "arn:aws:bedrock:us-east-1:123:application-inference-profile/abc", "labelOverride": "Claude Opus (Prod)"}]\n```\n\n**Tier mapping** (`anthropicFamilyTier`) tells the app which Claude tier (`haiku`/`sonnet`/`opus`/`fable`/`mythos`) an entry stands in for, so bare tier aliases (e.g. in Code sessions) resolve to your model. `isFamilyDefault: true` picks the winner when several entries share a tier:\n```json\n[{"name": "us.anthropic.claude-opus-4-8", "anthropicFamilyTier": "opus"}]\n```', { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) }, predicates: { required: (e) => {
    var t;
    return !N.hasActiveBootstrap(e) && (((t = e.models) === null || t === void 0 ? void 0 : t.discoveryEnabled) === false || !Ct.providerHasDiscovery(e));
  }, warn: (e, t, o) => Qw(e.name, t, o) } }), defaultEffort: _.field(hr(it.EFFORT_LEVELS).optional(), { flatKey: "defaultModelEffort", readers: ["desktop", "code"], remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" } }, title: k.msg({ defaultMessage: "Default model effort", id: "63NOuwomJM" }), category: "connection", group: N.MODELS_GROUP, order: 0.2, description: { short: _.shortDescription(k.msg({ defaultMessage: "Effort level the default model (the first listed model) starts at, instead of Anthropic\u2019s recommended level: low, medium, high, xhigh or max.", id: "SBjuzIVQAJ" })), long: _.longDescription("The effort level the default model (the first `inferenceModels` entry, or the first model your endpoint returns under discovery) starts at in Chat, Cowork and Code, in place of Anthropic's recommended level for that model: one of `low`, `medium`, `high`, `xhigh`, `max`. It is a starting point, not a lock: a person's own effort choice for that model still applies unless `alwaysStartWithDefaultModel` is on, and other models keep their recommended level. A level the model doesn't offer falls to the nearest level it offers below it (its lowest level when none is lower), and it never exceeds that model's `maxEffort`. In Code sessions a `CLAUDE_CODE_EFFORT_LEVEL` environment variable or an `effortLevel` in Claude Code's own settings still takes precedence, as it does over any picker default.", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }), alwaysStartWithDefault: _.field(B.z.boolean().optional(), { flatKey: "alwaysStartWithDefaultModel", readers: ["desktop", "code"], remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" } }, default: { displayOnly: false }, failClosedValue: true, title: k.msg({ defaultMessage: "Always start with the default model", id: "IJXGYyxFSQ" }), category: "connection", group: N.MODELS_GROUP, order: 0.3, description: { short: _.shortDescription(k.msg({ defaultMessage: "When true, each new conversation or task starts on the default model, and a person\u2019s model and effort changes are no longer saved as their default.", id: "dayANLBel0" })), long: _.longDescription("When `true`, each new conversation or task in Chat, Cowork and Code starts on the default model (the first `inferenceModels` entry), and the model and effort choices a person makes are no longer saved as their defaults. When unset or `false`, a person's last model and effort choice is remembered per tab, as before. Choices saved before the setting was turned on are kept and apply again if it is turned off.", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }), pricing: B.z.object({ enabled: _.field(B.z.boolean().optional(), { flatKey: "inferenceModelPricingEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" }, executionTarget: "desktop" }, default: { displayOnly: false }, title: k.msg({ defaultMessage: "Show estimated cost", id: "dqCubkxbYK" }), category: "connection", group: N.MODELS_GROUP, order: 1, description: { short: _.shortDescription(k.msg({ defaultMessage: "Show an estimated cost on the Usage page at Anthropic list price; turn on to set a multiplier or per-model rates.", id: "O20EMso86S" })), long: _.longDescription("Off unless set: the Usage page shows token counts only, since the app cannot know your negotiated provider rates. `true` turns on a USD estimate priced at Anthropic's published list price and is the only switch that does: `inferenceModelPricingMultiplier` and `inferenceModelPricing` refine the estimate while this is on and are ignored otherwise; turning this off hides them in the config editors without clearing them. Claude Code performs the calculation, so the same figures appear in its own cost reporting for Code sessions. Model IDs Claude Code cannot map to a Claude model (an opaque gateway alias, an inference-profile ARN it cannot resolve) are left out of the estimate until `inferenceModelPricing` gives them a rate. A machine-level Claude Code managed `modelPricing` (MDM / managed-settings.json / server-managed) takes precedence over all three keys.", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }), multiplier: _.field(_.annotate(B.z.coerce.number().gt(0).lte(1).optional(), { redact: "presence" }), { flatKey: "inferenceModelPricingMultiplier", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" }, executionTarget: "desktop" }, title: k.msg({ defaultMessage: "Price multiplier", id: "BvuzkKM8Bk" }), category: "connection", group: N.MODELS_GROUP, order: 1.1, predicates: { show: ys }, placeholder: k.msg({ defaultMessage: "0.85", id: "SyOzaH65Yu" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "Scales every estimated cost (0.85 = 85% of the price); between 0 and 1.", id: "g06VJdp+L7" })), long: _.longDescription("Mirrors Claude Code's managed `modelPricing.multiplier`: a number in (0, 1] applied to every computed cost, whether the model was priced at Anthropic list price or by an `inferenceModelPricing` row; use it for a flat contracted discount. Applies only while `inferenceModelPricingEnabled` is `true`; on its own it does not turn the estimate on. Ignored when a machine-level Claude Code managed `modelPricing` is present.", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }), models: _.field(_.annotate(B.z.array(B.z.object({ name: _.subfield(B.z.string().trim().min(1), { label: k.msg({ defaultMessage: "Model ID", id: "/m0q/Dre6A" }), isPrimaryKey: true, mono: true, placeholder: k.msg({ defaultMessage: "claude-opus-4", id: "s+j6yEtVLW" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "A model ID from the list above, or any other ID or alias your provider serves. A built-in Claude ID also covers its dated and provider forms.", id: "usJ91EFnHr" }), { docsOnly: false }) } }), inputPerMtok: _.subfield(fs(), { label: k.msg({ defaultMessage: "Input", id: "it6Ligcq3B" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "USD per million input tokens.", id: "nQMe9gkLHr" })) } }), outputPerMtok: _.subfield(fs(), { label: k.msg({ defaultMessage: "Output", id: "fio5opLcOZ" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "USD per million output tokens.", id: "NPC4I65XQU" })) } }), cacheReadPerMtok: _.subfield(fs(), { label: k.msg({ defaultMessage: "Cache read", id: "M4uIq3kw9y" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "USD per million prompt-cache read tokens.", id: "T5SCPPfeMB" })) } }), cacheWritePerMtok: _.subfield(fs(), { label: k.msg({ defaultMessage: "Cache write", id: "tV/UHxu+ec" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "USD per million prompt-cache write tokens (5-minute and 1-hour writes alike).", id: "295mSyLyL7" })) } }) })).optional(), { redact: "presence" }), { flatKey: "inferenceModelPricing", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" }, executionTarget: "desktop" }, title: k.msg({ defaultMessage: "Model pricing", id: "Em5X7PlTGI" }), category: "connection", group: N.MODELS_GROUP, order: 1.2, predicates: { show: ys }, addLabel: k.msg({ defaultMessage: "Add price", id: "Gk+NyPXeVe" }), description: { short: _.shortDescription(k.msg({ defaultMessage: "Per-model rates replacing Anthropic list price in the Usage page\u2019s estimate.", id: "5Ho1RhYUiz" })), long: _.longDescription('Each row replaces Anthropic list price for one model in the Usage page\'s estimate, in USD per million tokens (`inputPerMtok`, `outputPerMtok`, `cacheReadPerMtok`, `cacheWritePerMtok`, all four required; `cacheWritePerMtok` prices both 5-minute and 1-hour cache writes); rows apply only while `inferenceModelPricingEnabled` is `true` and do not turn the estimate on by themselves. Mirrors Claude Code\'s managed `modelPricing.overrides`, and `name` is matched the same way: a built-in Claude model ID (e.g. `claude-sonnet-4-6`, or its Bedrock, Vertex, or Foundry ID) covers every dated and provider spelling of that model; any other value (a gateway alias, an inference-profile ARN) matches that exact ID only (case-insensitive) and wins over a built-in row. An ID Claude Code cannot map to a Claude model at all gets no estimate until a row here prices it. `inferenceModelPricingMultiplier` still applies on top of a row.\n```json\n{"inferenceModelPricingEnabled": true, "inferenceModelPricingMultiplier": 0.9, "inferenceModelPricing": [{"name": "claude-sonnet-4-6", "inputPerMtok": 2.4, "outputPerMtok": 12, "cacheReadPerMtok": 0.24, "cacheWritePerMtok": 3}]}\n```\nThese are estimates for visibility, not an invoice; your provider bills at its own rates. A machine-level Claude Code managed `modelPricing` (MDM / managed-settings.json / server-managed) takes precedence over this table.', { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }) }).optional(), catalogEnabled: _.field(B.z.boolean().optional(), { flatKey: "modelCatalogEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" } }, remotePolicy: { hybrid: { scope: "excluded" } }, default: { displayOnly: true }, failClosedValue: false, title: k.msg({ defaultMessage: "Model catalog metadata", id: "go+bdjd1f9" }), category: "connection", group: N.MODELS_GROUP, order: 2, description: { short: _.shortDescription(k.msg({ defaultMessage: "Label and describe the model picker\u2019s entries from the published Claude Code model catalog, instead of the app\u2019s built-in table.", id: "sikjjWW3Tp" })), long: _.longDescription("When on (the default), the app reads the model catalog Anthropic publishes for Claude Code (a signed document fetched from `downloads.claude.ai`, or from `modelCatalogUrl` when that is set, and verified against a key built into the app; a copy bundled with the app is used until one has been fetched, or when the host is unreachable) and uses it to fill in each picker entry's display name, description, and thinking/effort options in the Chat, Cowork, and Code tabs. It never changes which models are offered, their order, or the default model (the first `inferenceModels` entry): those, 1M-context variants, and `labelOverride` still come from `inferenceModels` / discovery, and a model the catalog does not list keeps the built-in label. Set `modelCatalogEnabled: false` to keep the built-in labels and make no catalog fetch. Applies to deployments configured on the device or by a bootstrap server; an install managed from the Claude admin console takes its model names and options from the console's settings and never fetches the catalog.", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }), catalogUrl: _.field(_.annotate(ms.httpsUrl.optional(), { redact: "hostname" }), { flatKey: "modelCatalogUrl", support: { enabled: { scopes: ["3p"], availableInVersion: "2.110.0" } }, remotePolicy: { hybrid: { scope: "excluded" }, rejectLoopback: true, applyUnverified: true, hotApplied: true }, failClosedValue: Zd.MODEL_CATALOG_LOCATION_UNREADABLE_STAND_IN, unreadableStandIn: true, title: k.msg({ defaultMessage: "Model catalog URL", id: "7QWnJvdV6y" }), egressRequirements: (e, t) => {
    var o;
    if (((o = t.models) === null || o === void 0 ? void 0 : o.catalogEnabled) === false || e === Zd.MODEL_CATALOG_LOCATION_UNREADABLE_STAND_IN) return [];
    let s = lo.safeHostname(e);
    return s && !ms.isLinkLocalOrMetadataHost(s) ? N.singleHostEgress(e) : [];
  }, egressRequirementsLabel: k.msg({ defaultMessage: "Model catalog mirror", id: "a9epb+yGXN" }), category: "connection", group: N.MODELS_GROUP, order: 2.1, placeholder: k.msg({ defaultMessage: "https://mirror.example.com/model-catalog/v1/catalog.json", id: "o9MdHULcKp" }), predicates: { show: (e) => {
    var t;
    return ((t = e.models) === null || t === void 0 ? void 0 : t.catalogEnabled) !== false;
  } }, description: { short: _.shortDescription(k.msg({ defaultMessage: "Fetch the model catalog and its signature file from this URL (a mirror inside your network serving Anthropic\u2019s published files) instead of downloads.claude.ai.", id: "sFZOQNiiWa" })), long: _.longDescription("When set, the app fetches the catalog document and its signature file (the same URL with `.raw-sig.json` appended to the path) from this URL instead of `https://downloads.claude.ai/model-catalog/v1/catalog.json`, for a gateway or mirror inside your network serving Anthropic's two published files byte-for-byte. The document is still verified against the key built into the app, so an edited or re-signed copy is refused and the app keeps its last verified copy (or the bundled one); there is no key to configure. `https://` is required (`http://` only to a loopback address, and only when set on the device itself; a bootstrap server may not deliver a loopback or non-`https://` value); the server must answer the GET directly (redirects are not followed) and may honor `If-None-Match` with `304`, and must serve a document at least as new as the one the install last accepted (or the bundled seed) \u2014 an older one is refused and re-fetched on the retry interval until the mirror catches up. Ignored when `modelCatalogEnabled` is `false`, and on an install managed from the Claude admin console (which never fetches the catalog). A value that is not a valid URL, names a link-local or cloud-metadata host (e.g. `169.254.169.254`, `metadata.google.internal`), or is a loopback / non-`https://` value a bootstrap server delivers, turns the catalog fetch off (no fallback to `downloads.claude.ai`); the last fetched or bundled copy keeps labelling the pickers. On an install configured for a bootstrap server, the default location is not fetched until the server's configuration applies after sign-in, so a device does not poll `downloads.claude.ai` while the server may yet name a mirror; a mirror URL set on the device, cached earlier, or served in a pre-sign-in subset still fetches. Diagnostics report the location only as `hosted`, `custom`, `invalid` or `pending`; the value itself is treated like `bootstrapUrl`: host name only in telemetry, printed in full in the diagnostics bundle.", { docsUrl: `${N.COWORK_3P_DOCS_BASE}/configuration#models` }) } }) });
  function ys(e) {
    var t, o;
    return ((o = (t = e.models) === null || t === void 0 ? void 0 : t.pricing) === null || o === void 0 ? void 0 : o.enabled) === true;
  }
  function $w(e) {
    var t;
    let o = (t = e.models) === null || t === void 0 ? void 0 : t.pricing;
    if (!o || !ys(e)) return;
    let { enabled: s, ...n } = o;
    return n;
  }
  function Xw(e, t, o) {
    let { inferenceProvider: s, inferenceModels: n } = e;
    if (!s || !Array.isArray(n)) return e;
    let i = n.filter((u) => {
      let p = bs.checkModel(s, u.name);
      if (!p.ok) t(u.name, p.reason);
      else if ("warn" in p && p.warn) o === null || o === void 0 || o(p.warn);
      return p.ok;
    });
    if (i.length !== n.length && i.length > 0) e.inferenceModels = i;
    return e;
  }
  function Jw(e, t) {
    return `inferenceModels: "${e}" is not an Anthropic model and was removed from the list \u2014 ${t}`;
  }
  function Qw(e, t, o) {
    var s;
    let n = typeof e === "string" ? gs(e.trim()) : "";
    if (!n || !((s = t.inference) === null || s === void 0 ? void 0 : s.provider)) return null;
    let i = bs.checkModel(t.inference.provider, n);
    return i.ok ? null : Yd(o, i.reason);
  }
  function Yd(e, t) {
    return e.formatMessage({ defaultMessage: "Doesn\u2019t look like an Anthropic model: {reason}", id: "3RoY+bkhPc" }, { reason: t });
  }
});
var ZEo = (0, import_chunk_w1d7ygsk.V)(function(tc) {
  Object.defineProperty(tc, "__esModule", { value: true });
  tc.AuthenticationConfig = tc.ORG_UUID_VALUE = void 0;
  tc.forceLoginOrgUUIDList = ec;
  var pe = require("/$bunfs/root/chunk-k5gg9rsv.js"), Jd = Lwe(), z = Vk(), F = vj(), vs = NZ(), St = klt(), mr = pe.z.guid();
  function Qd(e) {
    let t = e.trim();
    if (t === "") return [];
    let o;
    try {
      o = t.startsWith("[") ? JSON.parse(t) : [t];
    } catch (s) {
      return;
    }
    return Array.isArray(o) && o.every((s) => typeof s === "string") ? o.map((s) => s.trim().toLowerCase()) : void 0;
  }
  function ec(e) {
    var t;
    let o = (t = Qd(e)) === null || t === void 0 ? void 0 : t.filter((s) => mr.safeParse(s).success);
    return o !== void 0 && o.length > 0 ? o : void 0;
  }
  var ak = pe.z.string().refine((e) => e.trim() === "" || ec(e) !== void 0, { message: 'expected a UUID, or a JSON array of UUIDs such as ["<uuid>","<uuid>"]' }).optional();
  function lk(e, t) {
    let o = typeof e === "string" ? Qd(e) : [];
    for (let s of o !== null && o !== void 0 ? o : []) if (!mr.safeParse(s).success) t(`forceLoginOrgUUID entry ${JSON.stringify(s)} is not a UUID and admits no organization`);
  }
  tc.ORG_UUID_VALUE = pe.z.string().trim().toLowerCase().refine((e) => mr.safeParse(e).success, { message: "expected an organization UUID" });
  var dk = tc.ORG_UUID_VALUE.optional();
  tc.AuthenticationConfig = pe.z.object({ disableClaudeAiSignIn: z.field(pe.z.boolean().optional(), { flatKey: "disableDeploymentModeChooser", support: { enabled: { scopes: ["3p"], availableInVersion: "1.3834.0" } }, remotePolicy: { hybrid: { scope: "excluded" }, applyUnverified: true }, failClosedValue: true, title: F.msg({ defaultMessage: "Disable Claude.ai sign-in", id: "DHdnIxD7G9" }), default: false, category: "sandbox", group: St.GENERAL_RESTRICTIONS_GROUP, order: 8, description: { short: z.shortDescription(F.msg({ defaultMessage: "Users see only this provider at the login screen. The option to sign in to Claude.ai is hidden.", id: "hesC0E8eFo" })) } }), forceLoginOrgUUID: z.field(ak, { flatKey: "forceLoginOrgUUID", support: { enabled: { scopes: ["1p"], availableInVersion: "1.2581.0" } }, failClosedValue: "[]", checkDropped: lk, title: F.msg({ defaultMessage: "Required organization", id: "b6/n7wQhfO" }), category: "connection", description: { short: z.shortDescription(F.msg({ defaultMessage: "Restricts login to specific org UUID(s). Single UUID string or JSON array.", id: "Rio+Mmk17s" })) }, placeholder: F.msg({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "oT3AdLMVZK" }) }), disableMultiAccount: z.field(pe.z.boolean().optional(), { flatKey: "disableMultiAccount", support: { enabled: { scopes: ["1p"], availableInVersion: "1.46388.1" }, visibility: "public-undocumented" }, failClosedValue: true, title: F.msg({ defaultMessage: "Single account only", id: "kgqT50kiPY" }), default: false, category: "connection", description: { short: z.shortDescription(F.msg({ defaultMessage: "Keep Claude Desktop signed in to one account at a time.", id: "Q6M73CMjXz" })) } }), ssoOrgDomain: z.field(pe.z.string().optional(), { flatKey: "loginSsoOrgDomain", support: { enabled: { scopes: ["1p"], availableInVersion: "1.10628.0" } }, title: F.msg({ defaultMessage: "SSO login domain", id: "RyA8yzgAlp" }), category: "connection", description: { short: z.shortDescription(F.msg({ defaultMessage: "Surfaces one-click SSO for this email domain on the login screen, without restricting login.", id: "1fy7qkmmCd" })) }, placeholder: F.msg({ defaultMessage: "example.com", id: "YKl6sxhgrC" }) }), importThirdPartyHistoryIntoOrgUUID: z.field(dk, { flatKey: "importThirdPartyHistoryIntoOrgUUID", support: { enabled: { scopes: ["1p"], availableInVersion: "2.2553.0" }, visibility: "public-undocumented" }, title: F.msg({ defaultMessage: "Import earlier third-party sessions into this organization", id: "x7AG7nw4s/" }), category: "connection", description: { short: z.shortDescription(F.msg({ defaultMessage: "After sign-in to this organization, copies this computer\u2019s earlier third-party sessions into the user\u2019s local first-party profile, once per account and org.", id: "VVXfXFMXOB" })), long: z.longDescription("Set through your device management (MDM or machine policy) to the UUID of the organization your users sign in to; a value in a user's own configuration file is ignored. After a user signs in to that organization in Claude Desktop on a computer where an earlier third-party configuration of Claude Desktop left chats, Cowork tasks or Code sessions, the app copies them into the user's first-party profile on the same computer; once the user resumes a copied session it behaves like any other first-party session. The copy also uploads the skills the user saved in that third-party configuration (under this organization or none) to their own skills in the organization, only where the organization lets members create skills and scans uploaded skills; otherwise nothing is uploaded. A skill whose SKILL.md declares hooks or tool permissions, or whose folder holds plugin files, is never uploaded. Where that configuration has local MCP servers, the app shows one notification offering to review them in Settings \u203A Import; no server is added without the user's confirmation there. If Anthropic has enabled memory import, that configuration's Cowork memory notes come too, unless the user had paused memory: used at once without review, never overwriting a note, synced like other Cowork memory. Chats, tasks and sessions themselves are not uploaded. The copy runs in the background, once per account and organization, and leaves the originals in place. Without this key, the organization's own setting (Admin settings in claude.ai) decides, and a deployed key takes precedence over it. A value that is not a UUID is reported as a configuration error and copies nothing; one that names a different organization than the one signed in copies nothing and is noted in the app's log. Like other first-party keys, deploying it puts the app's configuration under management, so a third-party connection a user set up in the app's own settings no longer applies. Anthropic can switch the copy off remotely.") }, placeholder: F.msg({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "oT3AdLMVZK" }) }), disableDeepLinks: z.field(pe.z.boolean().optional(), { flatKey: "disableDeepLinkRegistration", support: { enabled: { scopes: ["3p"], availableInVersion: "1.6889.0" } }, failClosedValue: true, title: F.msg({ defaultMessage: "Disable claude:// deep-link handling", id: "CCUxBOb3va" }), default: false, category: "sandbox", group: St.GENERAL_RESTRICTIONS_GROUP, order: 9, description: { short: z.shortDescription(F.msg({ defaultMessage: "Stop external apps and websites from opening Claude Desktop via claude:// links.", id: "0I38l/TM7C" })) } }), disableConnectorSignInInApp: z.field(pe.z.boolean().optional(), { flatKey: "disableConnectorSignInInApp", support: { enabled: { scopes: ["1p"], availableInVersion: "2.26454.0" }, visibility: "public-undocumented" }, failClosedValue: true, appBehaviorOnly: true, title: F.msg({ defaultMessage: "Keep connector sign-in in the browser", id: "QjCp+5pd3a" }), default: false, category: "connectors", description: { short: z.shortDescription(F.msg({ defaultMessage: "Finish claude.ai connector (MCP) sign-ins in the browser rather than letting the app finish them from a claude:// link.", id: "hPVthk75/t" })), long: z.longDescription("When true, a claude.ai connector's (remote MCP server's) OAuth sign-in started from Claude Desktop runs and completes in the system browser, and the claude:// link that then reopens the app only reports the outcome. When false (the default), on accounts where finishing in the app is available (a server-side rollout, not a setting in this configuration), the browser opens only the connector's own sign-in page and the app finishes the sign-in itself. Other claude:// links (chats, projects, Claude Code sessions) are unaffected; in third-party deployments `disableDeepLinkRegistration` turns those off. Set it through device management (MDM or machine policy); it applies from the app's next launch, and a value that cannot be read as true or false counts as true. An app-behavior key like `disableAutoUpdates`: a profile that sets any of them becomes the only source for all of them, so deploy them together; a profile that sets only such keys leaves the rest of the user's configuration in effect.") } }), microsoftAuthBroker: z.field(pe.z.enum(["auto", "disabled", "required"]).optional(), { flatKey: "microsoftAuthBroker", support: { enabled: [{ scopes: ["3p"], availableInVersion: "1.19367.0" }, { scopes: ["1p"], availableInVersion: "1.24012.11" }], values: { required: { availableInVersion: "1.49585.0" } } }, failClosedValue: "disabled", remotePolicy: { applyUnverified: true }, title: F.msg({ defaultMessage: "Microsoft 365 native sign-in broker", id: "1r8dFJPLbj" }), default: "auto", category: "connectors", group: St.MCP_SERVERS_GROUP, order: 2, predicates: { show: (e) => {
    var t, o;
    return ((o = (t = e.mcp) === null || t === void 0 ? void 0 : t.managedServers) !== null && o !== void 0 ? o : []).some((s) => vs.isBuiltinMcpEntry(s) && s.server === "microsoft365");
  } }, description: { short: z.shortDescription(F.msg({ defaultMessage: "\u201Cdisabled\u201D forces browser-based Microsoft 365 sign-in; \u201Crequired\u201D fails sign-in when the OS broker is unavailable, so the refresh token stays broker-held.", id: "MicrosoftAuthBrokerHint" })), long: z.longDescription("`auto` (default): use the OS sign-in broker where available (WAM on Windows, the Company Portal SSO extension on macOS) and fall back to a browser sign-in otherwise. `disabled`: always use the browser sign-in. `required`: fail sign-in when the broker is unavailable rather than falling back to the browser, so the refresh token stays broker-held. Linux has no broker, so `required` is not supported there. Desktop builds older than the version that introduced `required` treat it as `disabled` (browser-only sign-in) \u2014 the opposite posture \u2014 so gate rollout on client version.") } }), microsoftAuthDefaultAccount: z.field(pe.z.enum(["enabled", "disabled"]).optional(), { flatKey: "microsoftAuthDefaultAccount", support: { enabled: { scopes: ["3p"], availableInVersion: "2.26454.0" } }, failClosedValue: "disabled", title: F.msg({ defaultMessage: "Microsoft 365 sign-in with the Windows account", id: "q3TlGsQ/DF" }), default: "disabled", category: "connectors", group: St.MCP_SERVERS_GROUP, order: 3, predicates: { show: (e) => {
    var t, o;
    return ((o = (t = e.mcp) === null || t === void 0 ? void 0 : t.managedServers) !== null && o !== void 0 ? o : []).some((s) => vs.isBuiltinMcpEntry(s) && s.server === "microsoft365");
  } }, description: { short: z.shortDescription(F.msg({ defaultMessage: "\u201Cenabled\u201D: when a user clicks Connect on Windows, Microsoft 365 signs in with the work account already signed in to Windows, without the account picker.", id: "ng6kkd2GLe" })), long: z.longDescription("`disabled` (default): Connect shows the account picker when no account is connected. `enabled`: on Windows, when `microsoftAuthBroker` is not `disabled`, Connect first signs in silently with the account Windows already uses. The `tenantId` on the `microsoft365` entry in managed MCP servers must be a tenant GUID. With `common`, `organizations` or `consumers`, users always get the picker. Users also get the picker for accounts from another tenant, guest accounts and personal Microsoft accounts, when the silent sign-in fails, and when the computer cannot store credentials securely. A user who already signed in to Microsoft 365 through the browser keeps that account. After a user disconnects Microsoft 365, or a different person signs in to Claude on this computer, Connect always shows the picker for that connector on this computer, including for a disconnect that happened before this setting was turned on. Turning this setting off stops new silent sign-ins and signs nobody out: users already connected keep their account until they disconnect. macOS and Linux are not affected. Third-party deployments only: first-party installs ignore this setting.") } }), allowOptionalClientAuth: z.field(pe.z.boolean().optional(), { flatKey: "allowOptionalClientAuth", support: { enabled: { scopes: ["3p"], availableInVersion: "1.17377.1" }, visibility: "public-undocumented" }, deprecations: [{ path: "allowOptionalClientAuth", use: "Claude Desktop 1.49585.0 or later on every device, then remove the key", effect: "the value will be reported as an unreadable setting and the managed configuration will count as degraded until the key is removed; 1.46388 is the last release that reads it (later releases present TLS client certificates natively through Electron 44)", ...Jd.BATCH_2026_11 }], description: { short: z.shortDescription(F.msg({ defaultMessage: "Allow optional client-certificate fallback for mTLS endpoints.", id: "AllowOptionalClientAuthHint" }), { docsOnly: true }) }, title: F.msg({ defaultMessage: "Allow optional client-certificate fallback", id: "AllowOptionalClientAuthTitle" }), category: "connection" }) });
});
var OEs = (0, import_chunk_w1d7ygsk.V)(function(rc) {
  Object.defineProperty(rc, "__esModule", { value: true });
  rc.CREDENTIAL_SPEC = rc.isFieldSet = void 0;
  rc.credentialSpecCell = nc;
  rc.kindIsPresent = br;
  rc.deriveInferenceCredentialKind = hk;
  rc.presentCredentialKinds = fk;
  var Ge = Vk(), co = Ime(), uk = (e) => typeof e === "string" ? e.trim().length > 0 : e !== void 0 && e !== null;
  rc.isFieldSet = uk;
  function pk() {
    var e, t, o, s, n, i, u, p;
    let y = {};
    for (let b of co.InferenceConfig.options) {
      let S = b.shape.provider.value, M = (t = (e = Ge.variantMetaForNode(b)) === null || e === void 0 ? void 0 : e.needsBaseUrlFor) !== null && t !== void 0 ? t : [], C = "baseUrl" in b.shape ? (o = Ge.fieldMetaForNode(b.shape.baseUrl)) === null || o === void 0 ? void 0 : o.flatKey : void 0;
      if (M.length > 0 && !C) throw Error(`${S}: needsBaseUrlFor is set but the arm has no baseUrl leaf`);
      let x = {}, W = {};
      for (let X of Ge.discriminatorArmsOf(b.shape.credential)) {
        let ae = X.id;
        if (!ae || !X.schema) continue;
        let te = (s = x[ae]) !== null && s !== void 0 ? s : x[ae] = /* @__PURE__ */ new Set(), Be = (n = W[ae]) !== null && n !== void 0 ? n : W[ae] = /* @__PURE__ */ new Set();
        for (let Ju of Object.values(X.schema.shape)) {
          let vo = Ge.fieldMetaForNode(Ju);
          if (!vo || vo.notAPresenceSignal) continue;
          if (Be.add(vo.flatKey), (i = vo.predicates) === null || i === void 0 ? void 0 : i.required) te.add(vo.flatKey);
        }
      }
      let q = {};
      for (let X of co.CREDENTIAL_KINDS_FOR_PROVIDER[S]) {
        let ae = co.kindSupportsDiscovery(S, X);
        q[X] = { requiredLeaves: [...(u = x[X]) !== null && u !== void 0 ? u : []], presenceLeaves: [...(p = W[X]) !== null && p !== void 0 ? p : []], ...C && M.includes(X) && { extraRequiredLeaves: [C] }, ...ae === false && { supportsDiscovery: false } };
      }
      y[S] = q;
    }
    return y;
  }
  rc.CREDENTIAL_SPEC = pk();
  function nc(e, t) {
    let o = rc.CREDENTIAL_SPEC[e];
    return o === null || o === void 0 ? void 0 : o[t];
  }
  function br(e, t, o) {
    let s = nc(t, o);
    if (!s) return false;
    return s.requiredLeaves.length > 0 ? s.requiredLeaves.every((n) => rc.isFieldSet(e[n])) : s.presenceLeaves.some((n) => rc.isFieldSet(e[n]));
  }
  function hk(e) {
    let t = e.inferenceProvider;
    if (!t) return;
    for (let o of Ge.KIND_PRECEDENCE) if (br(e, t, o)) return o;
    if (t === "vertex") {
      if (e.inferenceVertexWorkforceAudience !== void 0) return "workforce";
      if (e.inferenceVertexOAuthClientId !== void 0) return "interactive";
      return "vendor-profile";
    }
    if (t === "anthropic") return "interactive";
    return;
  }
  function fk(e) {
    let t = e.inferenceProvider;
    if (!t) return [];
    return Ge.KIND_PRECEDENCE.filter((o) => br(e, t, o));
  }
});
var LGi = (0, import_chunk_w1d7ygsk.V)(function(ac) {
  Object.defineProperty(ac, "__esModule", { value: true });
  ac.AppearanceConfig = void 0;
  var Et = require("/$bunfs/root/chunk-kdmqxmys.js"), me = Vk(), Pe = vj(), ic = Pe.msg({ defaultMessage: "Deployment identity", id: "dplIdntGrp" }), vk = Pe.msg({ defaultMessage: "Configuration notices", id: "qg0hZsga3q" });
  ac.AppearanceConfig = Et.z.object({ deploymentDisplayName: me.field(me.annotate(Et.z.string().trim().min(1).max(60).optional(), { redact: "keep" }), { flatKey: "deploymentDisplayName", support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.0" } }, remotePolicy: { hybrid: { derived: true }, hotApplied: true }, title: Pe.msg({ defaultMessage: "Deployment display name", id: "dplDsNmTtl" }), category: "appearance", group: ic, description: { short: me.shortDescription(Pe.msg({ defaultMessage: "Overrides the provider label shown in the sidebar footer, user-menu header, and connection-error banner.", id: "dplDsNmHnt" })), long: me.longDescription('Set this to the name users should see for this deployment (for example, "Claude for Government"). When unset, the desktop shows the default provider label. Maximum 60 characters.') } }), deploymentDisplaySubtitle: me.field(me.annotate(Et.z.string().trim().min(1).max(60).optional(), { redact: "keep" }), { flatKey: "deploymentDisplaySubtitle", support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.0" } }, remotePolicy: { hybrid: { scope: "excluded" }, hotApplied: true }, title: Pe.msg({ defaultMessage: "Deployment display subtitle", id: "dplDsSbTtl" }), category: "appearance", group: ic, description: { short: me.shortDescription(Pe.msg({ defaultMessage: "Optional detail shown after the deployment display name in the account-menu header.", id: "dplDsSbHn2" })), long: me.longDescription('Optional detail shown after the deployment display name in the account-menu header (for example, "Claude for Veterans Affairs \xB7 Claude for Government"). Shown only when the display name is also set. Maximum 60 characters.') }, predicates: { show: (e) => {
    var t, o;
    return ((o = (t = e.appearance) === null || t === void 0 ? void 0 : t.deploymentDisplayName) !== null && o !== void 0 ? o : "").trim().length > 0;
  } } }), disableConfigDeprecationWarnings: me.field(Et.z.boolean().optional(), { flatKey: "disableConfigDeprecationWarnings", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.40609.0" } }, title: Pe.msg({ defaultMessage: "Hide configuration deprecation warnings", id: "8SscF6CJAT" }), default: { displayOnly: false }, category: "appearance", group: vk, description: { short: me.shortDescription(Pe.msg({ defaultMessage: "Don\u2019t show users the in-app warning that this configuration uses a deprecated field. The final reminder in the 24 hours before the cut-off still appears.", id: "84H2bDOPZR" })), long: me.longDescription("When the organization's configuration uses a field that is deprecated \u2014 a renamed key, or a legacy value or entry form \u2014 the app shows every user a dismissable warning naming the field, what to use instead, and the date support ends (each field's cut-off is listed in the configuration changelog and takes effect at 12:00 PM Pacific Time on that date). The warning shows from the field's announced warning date until dismissed, and once more in the 24 hours before the cut-off. Set this to `true` to suppress the first showing for your users while you migrate; the final 24-hour reminder is always shown, and the deprecation stays listed in the diagnostic report (Help \u2192 Troubleshooting) and the hosted configuration editor regardless.") } }) });
});
var OGi = (0, import_chunk_w1d7ygsk.V)(function(uc) {
  Object.defineProperty(uc, "__esModule", { value: true });
  uc.BootstrapConfig = void 0;
  var uo = require("/$bunfs/root/chunk-cx1thet0.js"), cc = Lwe(), Q = Vk(), Ne = T4(), J = vj(), po = NZ(), We = klt(), Io = (e) => {
    var t;
    return Boolean((t = e.bootstrap) === null || t === void 0 ? void 0 : t.url);
  }, dc = Ne.legacyKvEncodingNotice("bootstrapHeaders", "no bootstrap request headers will be sent (the fetch may then fail to authenticate)");
  uc.BootstrapConfig = uo.z.object({ enabled: Q.field(uo.z.boolean().optional(), { flatKey: "bootstrapEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } }, remotePolicy: { type: "remote-disabled" }, title: J.msg({ defaultMessage: "Use bootstrap config", id: "Q6zr1vGzlF" }), default: true, category: "source", group: We.BOOTSTRAP_GROUP, description: { short: Q.shortDescription(J.msg({ defaultMessage: "Fetch and apply the URL above at launch. Turn off to keep the URL saved but skip the fetch.", id: "0Nsvk4xG6E" })) }, predicates: { show: Io } }), url: Q.field(Q.annotate(po.httpsUrl.optional(), { redact: "hostname" }), { flatKey: "bootstrapUrl", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } }, remotePolicy: { type: "remote-disabled" }, activatesThirdPartyMode: (e, t) => {
    var o, s;
    return (t || Boolean((o = e.bootstrap) === null || o === void 0 ? void 0 : o.url)) && ((s = e.bootstrap) === null || s === void 0 ? void 0 : s.enabled) !== false;
  }, title: J.msg({ defaultMessage: "Bootstrap config URL", id: "MPdK0gXvRA" }), egressRequirements: (e, t) => {
    var o;
    return ((o = t.bootstrap) === null || o === void 0 ? void 0 : o.enabled) === false ? [] : Ne.singleHostEgress(e);
  }, egressRequirementsLabel: J.msg({ defaultMessage: "Bootstrap config server", id: "qjMZL1XFnR" }), category: "source", group: We.BOOTSTRAP_GROUP, placeholder: J.msg({ defaultMessage: "https://config.example.com/claude-desktop", id: "IHENczwSR2" }), description: { short: Q.shortDescription(J.msg({ defaultMessage: "HTTPS endpoint that returns a per-user JSON config overlay. Values from the response override local settings and become read-only.", id: "5SJ4ZG3Kp2" })) } }), oidc: Q.field(po.BootstrapFetchOidc.optional(), { flatKey: "bootstrapOidc", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } }, remotePolicy: { type: "remote-disabled" }, title: J.msg({ defaultMessage: "Bootstrap OIDC parameters", id: "zS5yI0rzXy" }), egressRequirements: (e, t) => {
    var o;
    return ((o = t.bootstrap) === null || o === void 0 ? void 0 : o.enabled) === false ? [] : Ne.oidcEgressHosts(e);
  }, egressRequirementsLabel: J.msg({ defaultMessage: "Bootstrap sign-in (OIDC)", id: "q2PtfeOums" }), category: "source", group: We.BOOTSTRAP_GROUP, description: { short: Q.shortDescription(J.msg({ defaultMessage: "When set, the bootstrap request sends a Bearer token from a browser sign-in (authorization-code-with-PKCE).", id: "USlfHdFqDQ" })), long: Q.longDescription("Set this to use a separate identity provider (Microsoft Entra ID, Okta, Ping, or any compliant OIDC provider) for the bootstrap sign-in. The app runs an authorization-code-with-PKCE flow in the system browser. Omit to use device-code mode against the bootstrap server's own origin.\n\nThis is an **object-typed key** \u2014 in an MDM profile it is a single JSON-string value, not separate keys with dotted names like `bootstrapOidc.clientId`. Writing the sub-fields as separate registry values causes the app to silently fall through to device-code mode.", { docsUrl: `${Ne.COWORK_3P_DOCS_BASE}/bootstrap` }) }, predicates: { show: Io } }), headers: Q.field(Q.annotate(Ne.kvRecord(dc).optional(), { redact: "presence" }), { flatKey: "bootstrapHeaders", support: { enabled: { scopes: ["3p"], availableInVersion: "1.32885.1" } }, deprecations: [dc], remotePolicy: { type: "remote-disabled" }, title: J.msg({ defaultMessage: "Bootstrap request headers", id: "BootstrapHeadersTitle" }), category: "source", group: We.BOOTSTRAP_GROUP, placeholder: { key: J.msg({ defaultMessage: "Authorization", id: "BootstrapHdrKeyPh" }), value: J.msg({ defaultMessage: "Basic \u2026", id: "BootstrapHdrValPh" }) }, addLabel: J.msg({ defaultMessage: "Add header", id: "IxbsWX4wj4" }), description: { short: Q.shortDescription(J.msg({ defaultMessage: "HTTP headers sent on every bootstrap config fetch. Use this instead of embedding user:pass@ in the URL.", id: "BootstrapHeadersHint" })), long: Q.longDescription('Static headers sent on every request to the bootstrap config URL \u2014 for a service-account credential (`Authorization: Basic \u2026`, an API key header) or a routing/tenant header. When either this or the headers helper script is set and no separate `bootstrapOidc` provider is configured, the app treats the headers as sufficient auth and does not require a per-user sign-in for the bootstrap fetch. These headers (and the helper script\'s below) also accompany requests to a plugin marketplace this server hosts on its own origin (`allowedPluginMarketplaces` with `credentialKind: "inferenceCredential"`). Header values are masked in diagnostics and telemetry. For a rotating token, use the headers helper script instead.', { docsUrl: `${Ne.COWORK_3P_DOCS_BASE}/bootstrap` }) }, predicates: { show: Io } }), headersHelper: Q.field(Q.annotate(po.safeHelperPath.optional(), { pathKind: "file" }), { flatKey: "bootstrapHeadersHelper", support: { enabled: { scopes: ["3p"], availableInVersion: "1.32885.1" } }, remotePolicy: { type: "remote-disabled" }, title: J.msg({ defaultMessage: "Bootstrap headers helper script", id: "BootstrapHeadersHelperTitle" }), category: "source", group: We.BOOTSTRAP_GROUP, placeholder: J.msg({ defaultMessage: "/usr/local/bin/bootstrap-headers-helper", id: "BootstrapHeadersHelperPh" }), mono: true, description: { short: Q.shortDescription(J.msg({ defaultMessage: "Absolute path to an executable that prints a JSON object of bootstrap request headers. Merged over the static headers; the helper wins.", id: "BootstrapHeadersHelperHint" })), long: Q.longDescription('Absolute path to an executable that prints a single JSON object of HTTP headers on stdout, e.g. `{"Authorization": "Bearer \u2026"}`. The app runs it (no arguments; output cached for a few minutes) before each bootstrap config fetch and merges the result over **Bootstrap request headers** (the helper wins on conflict). Use this instead of embedding `user:pass@` in the bootstrap URL, or when the bootstrap server needs a rotating token from a secrets manager. When either this or the static headers are set and no separate `bootstrapOidc` provider is configured, the app treats them as sufficient auth and does not require a per-user sign-in for the bootstrap fetch. If a per-user sign-in also runs (`bootstrapOidc` or the server\u2019s own device-code flow), that Bearer token wins on `Authorization`.', { docsUrl: `${Ne.COWORK_3P_DOCS_BASE}/bootstrap` }) }, predicates: { show: Io } }), trustBootstrapDelivery: Q.field(uo.z.boolean().optional(), { flatKey: "trustBootstrapDelivery", legacyFlatKey: { name: "trustBootstrapLocalExec", effect: "the key will read as false (its fail-closed value): each user will be asked to consent to bootstrap-delivered sign-in targets, endpoints, helper scripts and connectors, even when the bootstrap URL came from a device-managed profile", ...cc.BATCH_2026_09 }, support: { enabled: { scopes: ["3p"], availableInVersion: "1.26832.0" } }, failClosedValue: false, title: J.msg({ defaultMessage: "Trust bootstrap-delivered settings", id: "vRHCNG9xkY" }), default: false, category: "source", group: We.BOOTSTRAP_GROUP, remotePolicy: { type: "remote-disabled" }, description: { short: Q.shortDescription(J.msg({ defaultMessage: "Skip the per-user consent prompt for sign-in targets, inference endpoints, helper scripts, and connectors the bootstrap server delivers.", id: "f6Kz1NkBdU" })) }, predicates: { show: Io } }) });
});
var bc = (0, import_chunk_w1d7ygsk.V)(function(mc) {
  Object.defineProperty(mc, "__esModule", { value: true });
  mc.BuiltinBrowserConfig = void 0;
  var qe = require("/$bunfs/root/chunk-mqwzwc27.js"), at = dX(), ce = Vk(), ze = T4(), ye = vj(), At = klt(), _r = (e) => {
    var t;
    return ((t = e.builtinBrowser) === null || t === void 0 ? void 0 : t.enabled) === true;
  };
  function gc(e, t) {
    if (typeof t !== "string" || t === "") return { kind: "drop", why: "dropped: entries must be non-empty strings" };
    if (e === "allowed" && t === "*") return { kind: "drop", why: 'dropped: set builtinBrowserDefaultDomainPolicy to "allow" to let Claude open every site' };
    let o = at.parseEgressHostEntry(t);
    if (o === null) return { kind: "unknown", why: `matches nothing as written: must be ${at.EGRESS_ENTRY_GRAMMAR}` };
    if (o.host === "localhost") return { kind: "unknown", why: "matches nothing: localhost dev servers are never blocked in the built-in browser" };
    return;
  }
  function hc(e) {
    return (t, o) => {
      if (!Array.isArray(t)) return;
      for (let s of t) {
        let n = gc(e, s);
        if (n) o(`built-in browser ${e}-sites entry ${JSON.stringify(s)} ${n.why}`, n.kind);
      }
    };
  }
  var fc = (e) => qe.z.preprocess((t) => Array.isArray(t) ? t.filter((o) => {
    var s;
    return ((s = gc(e, o)) === null || s === void 0 ? void 0 : s.kind) !== "drop";
  }) : t, ce.annotate(qe.z.array(qe.z.string().min(1)), { maxItems: 500 })).optional();
  mc.BuiltinBrowserConfig = qe.z.object({ enabled: ce.field(qe.z.boolean().optional(), { flatKey: "builtinBrowserEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "2.2553.0" }, executionTarget: "desktop" }, title: ye.msg({ defaultMessage: "Allow the built-in browser", id: "WpkucDWuLT" }), default: false, remotePolicy: { hybrid: { derived: true } }, egressRequirements: (e) => e === true ? [at.UPDATE_FEED_HOST] : [], egressRequirementsLabel: ye.msg({ defaultMessage: "Built-in browser (site safety check)", id: "cDGoOjcr2/" }), category: "sandbox", group: At.BUILTIN_BROWSER_GROUP, order: 12, description: { short: ce.shortDescription(ye.msg({ defaultMessage: "Offer the built-in browser in Cowork and Code sessions so users and Claude can open and work with web pages. Site sign-ins stay on the device until cleared.", id: "GP16g9tMfY" })), long: ce.longDescription(`When enabled, Cowork and Code sessions get a built-in browser pane. Users can open any site in it; Claude can open, read, and act on pages with its browser tools once the user approves each site (private-network hosts ask again per action unless the user always allows the host). Pages load directly from the user's machine, so your network controls apply; the pane's sign-ins and cookies stay in the app's browser profile on the device until cleared.

Off (default): no browser pane; Code sessions keep the localhost-only dev-server preview. With \`bootstrapUrl\` set, put this key in the served configuration: a device-profile value alone leaves the browser off. On an install managed from the Claude admin console this follows the console's Built-in browser switch.

When a public site opens or is framed in the pane, and before Claude works with it, the app checks its address (query removed) against Anthropic's site safety list on \`${at.UPDATE_FEED_HOST}\`, signed out, with no account, organization, or device identifier (Claude admin console installs: as the signed-in member on \`api.anthropic.com\`). A site it blocks stays blocked to Claude under every key below. Private addresses, names resolving to them, and internal-suffix or single-label names are never sent (a name under a public domain is checked even if only your VPN resolves it). Allow \`${at.UPDATE_FEED_HOST}\` through your firewall: if a check fails, users can browse but Claude's page tools stay off for that site.

\`builtinBrowserDefaultDomainPolicy\` and its two site lists restrict where Claude may browse. A separately deployed Claude Code [managed-settings](${ze.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings) file still applies: \`disableBrowserExternalNavigation: true\` keeps the browser off even with this key on, and \`browserExternalPageTools: "disabled"\` keeps the pane but turns Claude's page tools off for external sites. Takes effect after the app restarts.`, { docsUrl: `${ze.COWORK_3P_DOCS_BASE}/configuration#builtinbrowserenabled` }) } }), defaultDomainPolicy: ce.field(qe.z.enum(["allow", "block"]).optional(), { flatKey: "builtinBrowserDefaultDomainPolicy", support: { enabled: { scopes: ["3p"], availableInVersion: "2.2553.0" }, executionTarget: "desktop" }, title: ye.msg({ defaultMessage: "Default site policy in the built-in browser", id: "UoPPb2U8EW" }), default: "allow", failClosedValue: "block", remotePolicy: { hybrid: { derived: true }, hotApplied: true }, predicates: { show: _r }, optionLabels: { allow: ye.msg({ defaultMessage: "Allow all sites except blocked sites", id: "QKY/9Ra51f" }), block: ye.msg({ defaultMessage: "Block all sites except allowed sites", id: "SyVfZ0jYvT" }) }, category: "sandbox", group: At.BUILTIN_BROWSER_GROUP, order: 12.2, description: { short: ce.shortDescription(ye.msg({ defaultMessage: "Whether Claude may open sites in the built-in browser by default; the allowed or blocked list is the exception. Mirrors the Claude in Chrome site policy.", id: "+Xd6SuBz42" })), long: ce.longDescription("Applies when `builtinBrowserEnabled` is on, in both Cowork and Code sessions, and decides which sites Claude may open, read, or act on with its browser tools; users can still view any site themselves. `allow` (default): every site except entries in `builtinBrowserBlockedDomains`. `block`: no site except entries in `builtinBrowserAllowedDomains`. Under either policy `coworkEgressAllowedHosts`, when set to anything but `*`, is an outer bound: sites outside it are refused to Claude in the browser too. A site Anthropic's site safety list blocks stays blocked to Claude under either policy (see `builtinBrowserEnabled`); for a site the list only flags for confirmation, Claude asks the user before each of its actions under `allow`, and skips that confirmation only when the site matches a `builtinBrowserAllowedDomains` entry under `block`. A value that cannot be read is treated as `block` until it is fixed.\n\nThe policy also limits what pages load: a page in the pane, including one a user opened, cannot load frames, scripts, images, or other content from a site the policy does not admit (a blocked page a user opens still loads content from its own site). Under `block`, or with a `coworkEgressAllowedHosts` list, include the CDN and API hosts your allowed sites depend on.\n\nThis key and the two site lists work the same way as the Claude in Chrome site policy in the admin console. They are set separately here, except on an install managed from the Claude admin console, where they follow your organization's browser site permissions there.", { docsUrl: `${ze.COWORK_3P_DOCS_BASE}/configuration#builtinbrowserdefaultdomainpolicy` }) } }), allowedDomains: ce.field(fc("allowed"), { flatKey: "builtinBrowserAllowedDomains", support: { enabled: { scopes: ["3p"], availableInVersion: "2.2553.0" }, executionTarget: "desktop" }, title: ye.msg({ defaultMessage: "Allowed sites in the built-in browser", id: "N0mmi7Llpp" }), failClosedValue: [], checkDropped: hc("allowed"), remotePolicy: { hybrid: { derived: true }, hotApplied: true }, predicates: { show: _r }, category: "sandbox", group: At.BUILTIN_BROWSER_GROUP, order: 12.4, placeholder: ze.HOST_LIST_PLACEHOLDER, description: { short: ce.shortDescription(ye.msg({ defaultMessage: "Sites Claude may open, read, and act on in the built-in browser when the default site policy is block. Users can still view other sites.", id: "Jno9aeMAe8" })), long: ce.longDescription("Used when `builtinBrowserDefaultDomainPolicy` is `block`; ignored under `allow`. A site matching an entry is one Claude may open and work with using its browser tools; every other external site is treated as blocked by your organization: Claude cannot open it, cannot read or act on it, and frames, popups, and redirects into it from a page Claude is working on are refused. A user can still type its address and view it themselves. Listing a site here never unblocks a site Anthropic's site safety list blocks (see `builtinBrowserEnabled`); for a site that list only flags for confirmation, an entry here is your organization vouching for it, so Claude works with it without asking before each action.\n\nEntries use the same grammar as `coworkEgressAllowedHosts`, except that bare `*` is dropped: as in Claude in Chrome, no allowed-sites entry opens every site. Set the policy to `allow` for that. A wildcard whose base is a public suffix (`*.co.uk`, `*.github.io`) is likewise ignored so an entry can never open a whole shared registry. Any other entry outside that grammar is kept but matches nothing (the app log and the editor name it); a value that cannot be read at all allows nothing until it is fixed. A plain hostname entry (`example.com`) also covers its `www.` form, and a `www.` entry covers the bare name, but no other subdomain. `localhost` dev servers are always reachable, so listing them changes nothing.\n\nEmpty or unset (default): under `block`, Claude may open no external site. On an install managed from the Claude admin console this follows your organization's browser site permissions there.", { docsUrl: `${ze.COWORK_3P_DOCS_BASE}/configuration#builtinbrowseralloweddomains` }) } }), blockedDomains: ce.field(fc("blocked"), { flatKey: "builtinBrowserBlockedDomains", support: { enabled: { scopes: ["3p"], availableInVersion: "2.2553.0" }, executionTarget: "desktop" }, title: ye.msg({ defaultMessage: "Blocked sites in the built-in browser", id: "BcwtcpU/GS" }), failClosedValue: ["*"], checkDropped: hc("blocked"), remotePolicy: { hybrid: { derived: true }, hotApplied: true }, predicates: { show: _r }, category: "sandbox", group: At.BUILTIN_BROWSER_GROUP, order: 12.6, placeholder: ze.HOST_LIST_PLACEHOLDER, description: { short: ce.shortDescription(ye.msg({ defaultMessage: "Sites Claude may not open, read, or act on in the built-in browser when the default site policy is allow. Users can still view them.", id: "FQzOgmWpx1" })), long: ce.longDescription("Used when `builtinBrowserDefaultDomainPolicy` is `allow` (the default); ignored under `block`. A site matching an entry is treated as blocked by your organization: Claude cannot open it, cannot read or act on it with its browser tools, and frames, popups, and redirects into it from a page Claude is working on are refused. A user can still type its address and view it themselves: the pane shows a \"blocked by your organization's policy\" banner and Claude's tools stay off there. To take the external browser away from users as well, deploy Claude Code's `disableBrowserExternalNavigation` managed setting instead. A blocked site is refused before the site safety check, so its address is never sent to Anthropic.\n\nEntries use the same grammar as `coworkEgressAllowedHosts`; `*` blocks every external site. An entry outside that grammar is kept but matches nothing (the app log and the editor name it); a value that cannot be read at all blocks every external site until it is fixed. As in Claude in Chrome, a plain hostname entry (`example.com`) also covers its `www.` form, and a `www.` entry covers the bare name, but no other subdomain. `localhost` dev servers are never affected.\n\nUse this key for exceptions inside an allowed egress wildcard or when egress is open. Empty or unset (default): no sites beyond the egress list are blocked. On an install managed from the Claude admin console this follows your organization's browser site permissions there.", { docsUrl: `${ze.COWORK_3P_DOCS_BASE}/configuration#builtinbrowserblockeddomains` }) } }) });
});
var IGi = (0, import_chunk_w1d7ygsk.V)(function(kc) {
  Object.defineProperty(kc, "__esModule", { value: true });
  kc.LifecycleConfig = kc.RELAUNCH_ENFORCEMENT_DEFAULT_HOURS = kc.CONFIG_RELAUNCH_IDLE_MINUTES = void 0;
  var lt = require("/$bunfs/root/chunk-mda76mxh.js"), Ee = Vk(), Re = vj(), ho = klt();
  kc.CONFIG_RELAUNCH_IDLE_MINUTES = 2;
  kc.RELAUNCH_ENFORCEMENT_DEFAULT_HOURS = 24;
  var vc = 10, _c = 2, wc = 30;
  kc.LifecycleConfig = lt.z.object({ relaunchEnforcementHours: Ee.field(lt.z.preprocess((e) => typeof e === "string" && e.trim() !== "" ? Number(e) : e, lt.z.number().int().min(0).lte(336).optional()), { flatKey: "relaunchEnforcementHours", support: { enabled: { scopes: ["3p"], availableInVersion: "1.40609.0" } }, appBehaviorOnly: true, remotePolicy: { hotApplied: true }, title: Re.msg({ defaultMessage: "Configuration relaunch window", id: "RelaunchEnforcementHoursTitle" }), default: kc.RELAUNCH_ENFORCEMENT_DEFAULT_HOURS, category: "telemetry", group: ho.UPDATES_GROUP, order: 23, suffix: Re.msg({ defaultMessage: "hours", id: "4MengK4xQ/" }), description: { short: Ee.shortDescription(Re.msg({ defaultMessage: "Hours a user may keep working on the old configuration after a managed-configuration change is detected. 0 = restart required at once. Blank = 24 hours.", id: "RelaunchEnforcementHoursShort" })), long: Ee.longDescription(`Set it via MDM (plist, registry, or file) or serve it from your configuration endpoint (remote bootstrap configuration). When the running app observes a managed-configuration change it cannot apply without restarting, it shows the sidebar relaunch card and starts this window. The window starts at the running app\u2019s next configuration re-check (the re-check interval beside it), so allow up to one re-check interval on top of this value between saving a change and the restart dialog. When the window ends the app blocks with a restart dialog and restarts on its own after ${kc.CONFIG_RELAUNCH_IDLE_MINUTES} minutes with no activity (no running Claude task and no keyboard or pointer input); the user can also restart right away. Defaults to ${kc.RELAUNCH_ENFORCEMENT_DEFAULT_HOURS} hours. Set a larger value (up to 336 = 14 days) to give users longer; \`0\` shows the dialog at the first observation.

A served value is read from the newest served configuration, so tightening or loosening the window takes effect without a restart once two re-checks in a row have served it, and a change to this key alone never asks for one. Like the update keys beside it, a value from a device-management profile that sets only app-behavior keys applies without making the rest of the configuration device-managed, and takes precedence over a served one. Because the key is grouped with the other app-behavior keys, a profile that sets any of them claims the whole group: set this key in the same profile as the update keys you deploy, or a served value is ignored on those devices and the ${kc.RELAUNCH_ENFORCEMENT_DEFAULT_HOURS}-hour default applies.`) } }), configRecheckIntervalMinutes: Ee.field(lt.z.coerce.number().int().gte(_c).lte(wc).optional(), { flatKey: "configRecheckIntervalMinutes", support: { enabled: { scopes: ["3p"], availableInVersion: "1.46388.1" } }, appBehaviorOnly: true, remotePolicy: { hotApplied: true }, title: Re.msg({ defaultMessage: "Configuration re-check interval", id: "ConfigRecheckIntervalMinutesTitle" }), default: vc, category: "telemetry", group: ho.UPDATES_GROUP, order: 24, suffix: Re.msg({ defaultMessage: "minutes", id: "ConfigRecheckIntervalMinutesSuffix" }), description: { short: Ee.shortDescription(Re.msg({ defaultMessage: "Minutes between the running app\u2019s checks for a changed managed configuration. Blank = 10 minutes.", id: "ConfigRecheckIntervalMinutesShort" })), long: Ee.longDescription(`How often the running app re-checks its managed configuration for changes: it re-polls your configuration endpoint with a conditional request, so an unchanged configuration costs one \`304\` round-trip. A detected change shows the sidebar relaunch card and starts the \`relaunchEnforcementHours\` window, so a saved change reaches a running app within roughly one interval. Defaults to ${vc} minutes; each wait is jittered by \xB110% so a fleet does not poll in lockstep. Values outside ${_c}\u2013${wc} are rejected with a parse error and the default applies.

Applied without a restart: a new served value re-arms the timer once two checks in a row have served it, and a change to this key alone never asks for a relaunch. Set it via MDM or serve it from your configuration endpoint; like the update keys beside it, a value from a device-management profile that sets only app-behavior keys applies without making the rest of the configuration device-managed, and takes precedence over a served one. Because the key is grouped with the other app-behavior keys, a profile that sets any of them claims the whole group, and every key in it is then read from that profile alone: deploy this key in the same profile as the update keys (\`disableAutoUpdates\`, \`autoUpdaterEnforcementHours\`, \u2026). A profile that sets the update keys without it ignores a served interval and the default applies; a profile that sets only this key ignores served update settings, so a served \`disableAutoUpdates\` no longer holds on those devices. A profile that also manages the connection itself (sets \`bootstrapUrl\` or the provider keys) follows the normal tier order instead: once a served configuration is in hand it, not the profile, supplies this key.`) } }), disableLocalConfigCache: Ee.field(lt.z.boolean().optional(), { flatKey: "disableLocalConfigCache", support: { enabled: { scopes: ["3p"], availableInVersion: "2.7032.0" } }, failClosedValue: true, remotePolicy: { applyUnverified: false, hotApplied: true, hybrid: { scope: "only" } }, title: Re.msg({ defaultMessage: "Keep only your organization ID and restrictions on disk", id: "DisableLocalConfigCacheTitle" }), default: false, category: "telemetry", group: ho.UPDATES_GROUP, order: 25, description: { short: Ee.shortDescription(Re.msg({ defaultMessage: "Don\u2019t keep your organization\u2019s name or any permissive setting on disk between launches; only your organization ID and the restrictions you turn on are kept.", id: "DisableLocalConfigCacheShort" })), long: Ee.longDescription(`By default the app keeps on disk, from the last configuration the admin console served, your organization\u2019s ID and name and the few settings a launch applies before the console answers (the telemetry switches, the Microsoft 365 sign-in broker setting, and any restriction you have turned on). When this is on, it keeps only your organization ID and those restrictions (for example telemetry blocked, or local MCP servers off), never the name or anything you have allowed, and cuts an earlier copy down at the next launch that reaches the console, or at once when a running app confirms the change; signing out deletes the kept copy too. While on: crash and performance reports to Anthropic do not start on these devices, and the sign-in screen and account switcher cannot show your organization\u2019s name before the console answers.

A running app picks up a change to this setting once two configuration checks in a row have served it; changing it alone never asks for a relaunch. It applies only to organizations managed from the Claude admin console; the setting is ignored when a customer configuration server or a device profile sends it.`) } }) });
});
var HGi = (0, import_chunk_w1d7ygsk.V)(function(Ac) {
  Object.defineProperty(Ac, "__esModule", { value: true });
  Ac.MANAGED_MCP_PRESETS = void 0;
  Ac.isAnthropicM365ConnectorUrl = Ec;
  Ac.isAnthropicM365Connector = kk;
  var _k = "07c030f6-5743-41b7-ba00-0a6e85f37c17", wk = [".claude.com", ".fedstart.com"];
  function Ec(e) {
    if (!e) return false;
    if (!wk.some((t) => e.hostname.endsWith(t))) return false;
    return e.hostname.startsWith("microsoft365.mcp.") || e.pathname.includes("/m365/");
  }
  function kk(e) {
    if (!(e === null || e === void 0 ? void 0 : e.url) || e.custom_oauth_client_id) return false;
    try {
      return Ec(new URL(e.url));
    } catch (t) {
      return false;
    }
  }
  Ac.MANAGED_MCP_PRESETS = [{ label: "Microsoft 365", item: { name: "m365", url: "https://microsoft365.mcp.claude.com/mcp", transport: "http", oauth: { scope: `api://${_k}/access_as_user offline_access` } } }, { label: "Box", item: { name: "box", url: "https://mcp.box.com", transport: "http", oauth: { authorizationServer: ["https://api.box.com"] } } }, { label: "Microsoft 365", kind: "builtin", item: { name: "Microsoft 365", server: "microsoft365" } }, { label: "Web search", kind: "builtin", item: { name: "Web search", server: "websearch", provider: "brave" } }, { label: "GitHub", kind: "builtin", item: { name: "GitHub", server: "github" } }];
});
var DGi = (0, import_chunk_w1d7ygsk.V)(function(Rc) {
  Object.defineProperty(Rc, "__esModule", { value: true });
  Rc.McpConfig = void 0;
  Rc.isMcpPersistentAlwaysAllowEnabled = Ak;
  var he = require("/$bunfs/root/chunk-fszjrdd4.js"), Ic = xCr(), fo = dX(), U = Vk(), De = T4(), H = vj(), Pc = HGi(), Ae = NZ(), Oe = klt();
  function Ek(e, t) {
    var o;
    let s = typeof t.url === "string" ? t.url.trim() : "", n = t.headers && typeof t.headers === "object" ? t.headers : void 0, i = [], u;
    try {
      u = s ? new URL(s) : void 0;
    } catch (b) {
    }
    if ((u === null || u === void 0 ? void 0 : u.protocol) === "http:") {
      let b = u.hostname;
      if (b !== "localhost" && b !== "127.0.0.1") i.push(e.formatMessage({ defaultMessage: "Endpoint is plain HTTP; auth credentials travel in cleartext.", id: "sqfi+II5M9" }));
    }
    let p = Ic.credentialHeadersWarn(n, e, "headersHelper");
    if (p !== null) i.push(p);
    let y = n ? (o = Object.entries(n).find(([b]) => b.toLowerCase() === "authorization")) === null || o === void 0 ? void 0 : o[1] : void 0;
    if (typeof y === "string" && /^Bearer\s+\S{12,}$/i.test(y)) i.push(e.formatMessage({ defaultMessage: "Shared bearer token: every org member authenticates as the same identity.", id: "y4dl3eyfcO" }));
    return i.length > 0 ? i.join(" ") : null;
  }
  function Mc(e) {
    let t = typeof e.serverUrl === "string" ? e.serverUrl.trim() : "";
    if (t === "" || t === "*" || t.startsWith("*://") || /^(?:https?|wss?):/i.test(t)) return null;
    return H.msg({ defaultMessage: "Start the pattern with a scheme such as https://, or *:// for any scheme: Claude Code compares a pattern with the server\u2019s full address.", id: "itOI+H+YoF" });
  }
  function Tc(e) {
    return he.z.strictObject({ serverUrl: U.subfield(he.z.string().trim().min(1), { label: H.msg({ defaultMessage: "Server URL pattern", id: "ruFvKwQ1V2" }), description: { short: U.shortDescription(e) } }) });
  }
  Rc.McpConfig = he.z.object({ managedServers: U.field(U.annotate(Ae.ManagedMcpServers.optional(), { redact: "presence" }), { flatKey: "managedMcpServers", readers: ["desktop", "m365", "code"], groupOverride: "nameSubset", groupItemOverride: ["toolPolicy"], support: { enabled: [{ scopes: ["3p"], availableInVersion: "1.2581.0" }, { scopes: ["1p"], availableInVersion: "1.24012.11" }] }, remotePolicy: { mcpUrlHygiene: true }, title: H.msg({ defaultMessage: "Managed MCP servers", id: "DC+lIM7C8k" }), checkDropped: Ae.checkManagedMcpServersForDrops, deprecations: Ae.MANAGED_MCP_SERVERS_DEPRECATIONS, failClosedValue: Ae.MANAGED_MCP_SERVERS_PARSE_FAILED, unreadableStandIn: true, egressRequirements: (e) => Array.isArray(e) ? e.flatMap((t) => {
    if (Ae.isBuiltinMcpEntry(t)) return [...Ae.hostsForBuiltinMcpEntry(t)];
    if (t.transport === "stdio" || t.transport === Ae.MCP_TRANSPORT_POLICY_ONLY) return [];
    let o = [fo.egressAddress(t.url)];
    if (t.oauth && t.oauth.mode !== "dcr") {
      let s = Ae.resolveByoAsSelection(t.oauth);
      if (s.via === "tenant") o.push("login.microsoftonline.com");
      o.push(...Ae.byoAsSelectionUrls(s).map(fo.egressAddress));
    }
    return o;
  }).filter((t) => !!t) : [], category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 0, addLabel: H.msg({ defaultMessage: "Add server", id: "pOeEMxHCXp" }), customRenderer: "mcpProbe", description: { short: U.shortDescription(H.msg({ defaultMessage: "Org-pushed MCP servers: remote (HTTP/SSE) or local (stdio command). May embed bearer tokens.", id: "wG2dpZSzTk" })), long: U.longDescription('For OAuth-authenticated entries, the app builds the redirect URI as `http://<callbackHost>:<callbackPort>/callback`; register that exact value with the OAuth provider. Tokens refresh automatically during a session.\n\n`toolPolicy` locks the per-tool approval state, keyed by tool name: `"blocked"` removes the tool from the session and labels it admin-blocked, `"ask"` requires approval on every call (Allow once / Deny only; no persistent always-allow; a scheduled Cowork task waits at that prompt), `"allow"` pre-approves. Tools **not listed** follow the user\'s choice: the prompt offers a persistent Always allow, except for tools that can modify data, which show a session-scoped **Allow for this task** alongside **Allow for all tasks** with a malicious-instruction warning. In Code sessions, `blocked` and `ask` are forwarded as Claude Code permission rules; `allow` is not.\n\nKeys may contain `*` wildcards (`"read_*"` matches every tool whose name starts with `read_`; anchored, and `*` is the only wildcard). When several wildcard keys match, the strictest applies (blocked > ask > allow). An exact-name key wins over matching wildcards, with two exceptions in the stricter direction: in Code sessions a wildcard `ask`, or a wildcard `blocked` other than the bare `"*"`, beats a less strict exact key (so `"*": "blocked"` plus exact `"allow"` entries still works as deny-by-default there); and in chat approval prompts and always-allow persistence a wildcard `ask` keeps every matching tool behind a per-call prompt even when a more permissive exact key matches, while direct tool invocations such as artifact or widget calls follow the exact key.\n\nFor the bundled Microsoft 365 connector, the send tools (`outlook_send_mail`, `outlook_send_draft`, `outlook_forward_mail`, `outlook_create_event`, `outlook_update_event`, `teams_send_chat_message`, `teams_send_channel_message`, `teams_reply_channel_message`) cannot be loosened below `ask`; an `allow` setting resolves to `ask`.', { docsUrl: `${De.COWORK_3P_DOCS_BASE}/configuration#managedmcpservers` }) }, presets: Pc.MANAGED_MCP_PRESETS, blankItem: { transport: "http" }, predicates: { warn: (e, t, o) => Ek(o, e) } }), persistentAlwaysAllowEnabled: U.field(he.z.boolean().optional(), { flatKey: "mcpPersistentAlwaysAllowEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.24012.9" } }, title: H.msg({ defaultMessage: "Allow persistent tool approvals", id: "OmQqCV/O12" }), default: true, failClosedValue: false, category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 1, description: { short: U.shortDescription(H.msg({ defaultMessage: "Offer the persistent \u201CAlways allow\u201D approval options for MCP tools. Disable to keep tool approvals per-call or session-scoped only.", id: "GXMHY2UvCF" })), long: U.longDescription("When enabled (the default), approval prompts for tools without a `toolPolicy` entry offer a persistent grant \u2014 **Always allow**, or **Allow for all tasks** for tools that can modify data \u2014 the Tool permissions picker in Connector settings lets users pre-approve tools, and those grants persist across sessions with no expiry.\n\nWhen disabled, the persistent options are hidden from approval prompts and from the Connector settings picker, and previously stored persistent grants stop being honored. Scheduled-task runs also stop offering, recording and replaying the **Allow for all scheduled runs** approval, unless a scheduled-task approval lifetime of one day or more is set. Users can still approve each call. Outside scheduled-task runs they can also choose **Allow for this task**, except for read-only tools on servers they added themselves.\n\nA per-tool `toolPolicy` entry on `managedMcpServers` always takes precedence over this key: `blocked`, `ask`, and `allow` behave exactly as documented there whether this key is enabled or not.\n\nThis key governs the chat and Cowork surfaces. Code sessions use a separate permission path this key does not cover \u2014 govern Code tool approvals with per-tool `toolPolicy` entries, whose `blocked` and `ask` values are forwarded there.", { docsUrl: `${De.COWORK_3P_DOCS_BASE}/configuration#mcppersistentalwaysallowenabled` }) } }), scheduledTaskApprovalLifetimeDays: U.field(he.z.preprocess((e) => typeof e === "string" && e.trim() !== "" ? Number(e) : e, he.z.number().int().gte(0).lte(3650).optional()), { flatKey: "mcpScheduledTaskApprovalLifetimeDays", support: { enabled: { scopes: ["3p"], availableInVersion: "2.7032.0" } }, title: H.msg({ defaultMessage: "Scheduled-task tool approval lifetime", id: "yqgGAUV4YP" }), failClosedValue: 0, remotePolicy: { applyUnverified: "asFailClosed" }, category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 1.5, suffix: H.msg({ defaultMessage: "days", id: "Bc20laBenW" }), placeholder: H.msg({ defaultMessage: "30", id: "HMv/M+VWJ6" }), description: { short: U.shortDescription(H.msg({ defaultMessage: "How many days a scheduled task may reuse a lasting MCP-tool approval before it asks again. 0 removes the lasting option.", id: "au5x3V9PvH" })), long: U.longDescription("On a scheduled task, the approval prompt for an MCP tool can offer a lasting approval, so later runs use that tool without asking: **Allow for all scheduled runs** in Cowork, **Always allow** in the Code tab. This setting limits how long that approval lasts. With a limit, the button reads **Allow for N days**. Once an approval is older than that, the next run asks again, and approving again renews it. `0` removes the lasting option, and approvals already stored stop being reused. Leave it blank to change nothing. Choose a number comfortably longer than the gap between runs.\n\nThe limit covers MCP tools only, and a `toolPolicy` entry on `managedMcpServers` still takes precedence. If a configuration server delivers the setting, then after each launch scheduled tasks ask instead of reusing stored approvals (as at `0`) until the app has fetched the configuration again.\n\nCowork: if `mcpPersistentAlwaysAllowEnabled` is off, this setting brings the lasting option back for scheduled tasks only, with the time limit.\n\nCode tab: `mcpPersistentAlwaysAllowEnabled` has no effect. The limit covers only lasting approvals given after this setting took effect. An earlier one was usually saved as an allow rule in Claude Code's own settings: for a scheduled task, the project's `.claude/settings.local.json`, under `permissions.allow`. Any allow rule in Claude Code's settings, including one written by hand or by **Always allow** in an ordinary Code session in the same project, keeps allowing the tool without asking, even at `0`, until that entry is removed.", { docsUrl: `${De.COWORK_3P_DOCS_BASE}/configuration#mcpscheduledtaskapprovallifetimedays` }) } }), claudeInChromeEnabled: U.field(he.z.boolean().optional(), { flatKey: "claudeInChromeEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "1.34493.0" }, executionTarget: "desktop", visibility: "public-undocumented" }, remotePolicy: { hybrid: { scope: "only", derived: true } }, predicates: { show: () => false }, title: H.msg({ defaultMessage: "Enable Claude in Chrome", id: "q3VdR8mZpL" }), category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 3, description: { short: U.shortDescription(H.msg({ defaultMessage: "Set by the control plane from the organization\u2019s Claude in Chrome admin setting; not editable here. Lets sessions drive the user\u2019s browser via the extension.", id: "Hn7tK2cWqs" })), long: U.longDescription(`Server-derived: the Claude.ai control plane sets this key, each time it serves the configuration, from the organization's Claude in Chrome setting (Admin settings \u2192 Claude in Chrome \u2014 the same switch, site allowlist/blocklist, and per-role access that govern the extension itself) and the signed-in member's role. It is not authored in any form, MDM profile, or bootstrap server, and a value stored anywhere else is ignored.

When on, Cowork and Code sessions can use the Claude in Chrome browser tools (navigate, read page, click, type, screenshot) in the user's Google Chrome or Microsoft Edge. Tool calls travel over the browser's local native-messaging connection between the app and the extension and are encrypted end to end between the two; page content is never relayed through Anthropic servers, and inference stays on the configured provider; the extension's hosted URL-safety check stays on, so the address of each page the agent acts on is checked against the Anthropic API. macOS and Windows only.

Before any tool call, Claude Desktop and the extension each obtain a short-lived signed identity statement from the Anthropic API and pair only when both belong to the same account in your organization, so those two small requests do go to Anthropic. Installed from the Chrome Web Store, the extension runs in third-party mode on its own for members of a hybrid organization \u2014 nothing runs that does not arrive over the verified pairing, and per-site permission prompts are delegated to Claude Desktop \u2014 so no separate Chrome policy is needed. Chrome managed policy stays optional for locked-down fleets: \`forceLoginOrgUUID\` may name the organization(s) allowed to take control of the extension wherever the policy reaches (a Claude Desktop from any other organization is refused), and \`blockedUrlPatterns\` may be added and applies on top of the hosted URL-safety check. Requires \`isLocalDevMcpEnabled\` to remain enabled. Off unless the organization's Claude in Chrome setting is on.`) } }), claudeInChromePasswordManagersEnabled: U.field(he.z.boolean().optional(), { flatKey: "claudeInChromePasswordManagersEnabled", support: { enabled: { scopes: ["3p"], availableInVersion: "2.9939.2" }, executionTarget: "desktop", visibility: "public-undocumented" }, remotePolicy: { hybrid: { scope: "only", derived: true }, hotApplied: true }, predicates: { show: () => false }, title: H.msg({ defaultMessage: "Enable password managers in Claude in Chrome", id: "il2qeFDuRY" }), category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 3.1, description: { short: U.shortDescription(H.msg({ defaultMessage: "Set by the control plane from the organization\u2019s Password managers setting under Claude in Chrome; not editable here. Lets a password manager fill sign-ins.", id: "y41oE2cG9U" })), long: U.longDescription(`Server-derived: the Claude.ai control plane sets this key, each time it serves the configuration, from the organization's Password managers setting (Admin settings \u2192 Claude in Chrome \u2192 Password managers, off until an admin turns it on) and the signed-in member's access. It is not authored in any form, MDM profile, or bootstrap server, and a value stored anywhere else is ignored.

When on, and Claude in Chrome is on, a member on macOS can connect a supported password manager's desktop app in Claude Desktop; sessions that can use Claude in Chrome can then ask that password manager to fill a sign-in form in the user's browser through the Claude in Chrome extension and the password manager's own extension. The user approves each request in the password manager and Claude never receives the credential itself: it passes on the device between the password manager, its browser extension and the page. The app's usage telemetry for the integration (outcomes only; no sites, credentials or item names) follows \`disableNonessentialTelemetry\`, and Claude in Chrome's own checks apply to the page as for any of its actions. A change takes effect without a relaunch once two configuration syncs in a row have served it. Off unless the organization's setting is on; requires \`claudeInChromeEnabled\`.`) } }), localStdioEnabled: U.field(he.z.boolean().optional(), { flatKey: "isLocalDevMcpEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p", "1p"], availableInVersion: "1.2581.0" } }, title: H.msg({ defaultMessage: "Allow user-added MCP servers", id: "1QKV7FS8FM" }), default: true, failClosedValue: false, egressRequirements: (e) => e === false ? [] : fo.PYTHON_EXTENSION_RUNTIME_HOSTS, egressRequirementsLabel: H.msg({ defaultMessage: "User-added MCP (Python runtime)", id: "O0zxaLsWs9" }), category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 2, description: { short: U.shortDescription(H.msg({ defaultMessage: "Local stdio servers added via the Developer settings. Remote servers come from the managed list above or organization plugins.", id: "1NMgra1xGv" })) } }), allowedPluginServers: U.field(U.annotate(he.z.array(Tc(H.msg({ defaultMessage: "URL pattern a plugin\u2019s remote server must match, with * wildcards.", id: "ERRP/7Z11f" })).nullable().catch(null)), { maxItems: 100 }).transform((e) => e.filter((t) => t !== null)).optional(), { flatKey: "allowedPluginMcpServers", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "2.2553.0" } }, title: H.msg({ defaultMessage: "Allowed plugin MCP servers", id: "vUSpcWJDNG" }), failClosedValue: [], emptyListIsAuthored: true, predicates: { warn: Mc }, category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 2.5, description: { short: U.shortDescription(H.msg({ defaultMessage: "Servers plugins may connect in sessions, beyond the managed list above and organization plugins. An empty list allows none; unset keeps today\u2019s rules.", id: "y4jySlHrtX" })), long: U.longDescription(`Unset (default): with managed servers listed, sessions take MCP servers only from plugins and the desktop; with no managed servers listed, nothing is restricted.

When set, Cowork, Chat and Code sessions connect the managed list above and the servers the desktop serves from the administrator's org-plugins directory, plus only servers declared by other plugins (user-installed or marketplace) that match an entry. An entry in the managed list above with \`transport: "policy-only"\` sets a plugin server's tool permissions but does not admit it; to admit that server, list the server's own URL here. Claude Code configuration-file servers (\`~/.claude.json\`, a project's \`.mcp.json\`, \`claude mcp add\`) are never connected. With the key set, the desktop starts no plugin server on the computer itself, whatever the entries say. The one exception is the MCP servers it serves to sessions from the org-plugins directory. Each entry is a URL pattern in Claude Code's form, \`{"serverUrl": "https://*.example.com/*"}\` (\`*\` wildcards; a host \`*\` spans \`a.b\`): a plugin's remote server connects when its URL matches an entry. No entry admits a plugin's local (stdio) server, and an empty list admits no plugin server. Other shapes, the \`serverName\` and \`serverCommand\` forms included, are dropped and reported; a value that is not a list, or has no readable entry, locks sessions to the managed list and the org-plugins directory's servers, and stops every other desktop-started plugin server. User-added local servers and extensions keep their own keys.

Coexistence with another Claude Code managed-settings source on the device: see [managed settings](${De.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings).`, { docsUrl: `${De.COWORK_3P_DOCS_BASE}/configuration#allowedpluginmcpservers` }) } }), deniedPluginServers: U.field(U.annotate(he.z.array(Tc(H.msg({ defaultMessage: "URL pattern of the remote servers to block, with * wildcards.", id: "/Glsg+l7xY" }))), { maxItems: 100 }).optional(), { flatKey: "deniedPluginMcpServers", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "2.16120.0" } }, title: H.msg({ defaultMessage: "Blocked plugin MCP servers", id: "nNohigULem" }), failClosedValue: [{ serverUrl: "*" }], predicates: { warn: Mc }, category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 2.6, description: { short: U.shortDescription(H.msg({ defaultMessage: "Remote servers plugins may not connect, even if the allowed list admits them; in Code sessions, configuration-file servers too. Unset or empty blocks none.", id: "PHP5kjRTiq" })), long: U.longDescription(`Unset (default) or an empty list: nothing is blocked.

When set, Cowork, Chat and Code sessions do not connect a plugin's remote server whose URL matches an entry. The key works with or without \`allowedPluginMcpServers\`; a server that matches both lists stays blocked. In a Code session that reads Claude Code configuration-file servers (\`~/.claude.json\`, a project's \`.mcp.json\`, \`claude mcp add\`), a matching remote server from those files is refused as well. The managed list above, the servers the desktop serves from the administrator's org-plugins directory, user-added local servers and extensions are not affected: remove those at their own keys. Each entry is a URL pattern in Claude Code's form, \`{"serverUrl": "https://*.example.com/*"}\` (\`*\` wildcards; a host \`*\` spans \`a.b\`). An entry matches an address, not a server: the same server under another host name or an IP address, or behind a plugin's local (stdio) server, which has no URL, is not matched. \`https://*.example.com/*\` does not match \`http://\`, \`wss://\` or the bare \`example.com\`; a pattern such as \`example.com/*\`, which names no scheme, matches nothing, and a lone \`*\` matches every URL. To keep a plugin's servers out whatever address they use, set \`allowedPluginMcpServers\`, which admits only the servers it lists. The desktop reads no other shape, the \`serverName\` and \`serverCommand\` forms included: a value that is not a list, or that holds any entry the desktop cannot read, is reported and blocks every plugin's remote server (and those configuration-file remote servers), because skipping an entry of a block list would let its server connect. The servers named above as not affected still connect.

Coexistence with another Claude Code managed-settings source on the device: see [managed settings](${De.COWORK_3P_DOCS_BASE}/code#interaction-with-claude-code%E2%80%99s-own-managed-settings).`, { docsUrl: `${De.COWORK_3P_DOCS_BASE}/configuration#deniedpluginmcpservers` }) } }), toolTimeoutSec: U.field(he.z.coerce.number().int().min(60).max(3600).optional(), { flatKey: "mcpToolTimeoutSec", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.37937.0" }, executionTarget: "desktop" }, title: H.msg({ defaultMessage: "MCP tool call timeout", id: "yfZOCQ8bcU" }), category: "connectors", group: Oe.MCP_SERVERS_GROUP, order: 4, suffix: H.msg({ defaultMessage: "seconds", id: "8TQoLRh7Ea" }), placeholder: H.msg({ defaultMessage: "180", id: "H3SKnBW98K" }), description: { short: U.shortDescription(H.msg({ defaultMessage: "Per-call timeout for MCP tool calls, in seconds. Default 180 (3 minutes).", id: "TKg4Ha2DBx" })), long: U.longDescription("Sets the per-call timeout the agent applies to every MCP tool call; a call that runs longer fails with a timeout error the model can see. Cowork and chat sessions default to 180 seconds. Code sessions have no desktop-imposed MCP tool timeout today, so setting this key introduces one there as well. The desktop's own request deadlines toward MCP servers \u2014 the managed servers above and, where `isLocalDevMcpEnabled` permits them, user-added local servers \u2014 follow this value so they never cut a call short first; while the key is unset, calls to user-added local servers are additionally limited to 60 seconds by the desktop. Values outside 60\u20133600 are rejected at parse time (the error is listed in the diagnostics report) and the defaults apply.\n\nThe timeout is global (there is no per-server or per-tool form), so size it for the slowest tool you need to complete: long-running tools on one server extend the window during which a stuck call on any server holds its turn. Cowork's built-in shell tool runs under the same cap: a single command's `timeout_ms` (itself limited to 600 seconds) cannot exceed this value.", { docsUrl: `${De.COWORK_3P_DOCS_BASE}/configuration#mcptooltimeoutsec` }) } }) });
  function Ak(e) {
    var t;
    return ((t = e.mcp) === null || t === void 0 ? void 0 : t.persistentAlwaysAllowEnabled) !== false;
  }
});
var evo = (0, import_chunk_w1d7ygsk.V)(function(Uc) {
  Object.defineProperty(Uc, "__esModule", { value: true });
  Uc.MAX_BANNER_TEXT_CHARS = Uc.BANNER_DEFAULT_TEXT_COLOR = Uc.BANNER_DEFAULT_BACKGROUND_COLOR = void 0;
  Uc.isValidBannerHexColor = wr;
  Uc.isValidBannerLinkUrl = Lc;
  Uc.resolveBannerConfig = Tk;
  Uc.toRenderableBannerConfig = Ik;
  var xc = T4();
  Uc.BANNER_DEFAULT_BACKGROUND_COLOR = "#F5F5F5";
  Uc.BANNER_DEFAULT_TEXT_COLOR = "#000000";
  Uc.MAX_BANNER_TEXT_CHARS = 200;
  var Mk = /^#[0-9A-Fa-f]{6}$/;
  function wr(e) {
    return typeof e === "string" && Mk.test(e);
  }
  function Lc(e) {
    if (typeof e !== "string") return false;
    if (!e.startsWith("https://")) return false;
    if (xc.carriesCredential(e)) return false;
    try {
      return new URL(e), true;
    } catch (t) {
      return false;
    }
  }
  function Tk(e) {
    var t, o;
    if (!e || Object.keys(e).length === 0) return { renders: false, reason: "absent" };
    if (e.enabled !== true) return { renders: false, reason: "disabled" };
    let s = typeof e.text === "string" ? e.text.trim() : "";
    if (s.length === 0 || s.length > Uc.MAX_BANNER_TEXT_CHARS) return { renders: false, reason: "invalid", field: "text" };
    let n = (t = e.backgroundColor) !== null && t !== void 0 ? t : Uc.BANNER_DEFAULT_BACKGROUND_COLOR;
    if (!wr(n)) return { renders: false, reason: "invalid", field: "backgroundColor" };
    let i = (o = e.textColor) !== null && o !== void 0 ? o : Uc.BANNER_DEFAULT_TEXT_COLOR;
    if (!wr(i)) return { renders: false, reason: "invalid", field: "textColor" };
    let u = { renders: true, text: s, backgroundColor: n.toUpperCase(), textColor: i.toUpperCase() };
    if (Lc(e.linkUrl)) u.linkUrl = e.linkUrl;
    return u;
  }
  function Ik(e) {
    if (!e.renders) return null;
    return { text: e.text, backgroundColor: e.backgroundColor, textColor: e.textColor, linkUrl: e.linkUrl };
  }
});
var NGi = (0, import_chunk_w1d7ygsk.V)(function(Bc) {
  Object.defineProperty(Bc, "__esModule", { value: true });
  Bc.PASSTHROUGH_FIELDS = Bc.BannerConfig = void 0;
  Bc.claudeAiImportWizardSources = Hk;
  Bc.claudeAiImportAdmits = Nk;
  Bc.resolveClaudeAiImportArm = Kc;
  var ie = require("/$bunfs/root/chunk-ryd9mwdn.js"), ks = evo(), je = dX(), P = Vk(), I = vj(), Cs = NZ(), zc = ZEo(), Po = (e) => e.enabled === true;
  Bc.BannerConfig = ie.z.object({ enabled: P.subfield(ie.z.boolean().optional(), { label: I.msg({ defaultMessage: "Show banner", id: "+zZ6KeQPTP" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "Turns the banner on. When false or unset, the other banner fields are ignored.", id: "MdEs38x1uM" })) } }), text: P.subfield(ie.z.string().optional(), { label: I.msg({ defaultMessage: "Banner text", id: "Wfk3Mut5XF" }), placeholder: I.msg({ defaultMessage: "Internal use only", id: "xg5Va4c/VJ" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "Single line, truncated on overflow. Maximum 200 characters.", id: "47aHGyWFid" }), { docsOnly: false }) }, predicates: { show: Po, required: Po } }), backgroundColor: P.subfield(ie.z.string().optional(), { label: I.msg({ defaultMessage: "Background color", id: "CMansqNBPw" }), control: "color", default: ks.BANNER_DEFAULT_BACKGROUND_COLOR, placeholder: I.msg({ defaultMessage: "#F5F5F5", description: "Default hex color value \u2014 DO NOT TRANSLATE", id: "oqBUnTcd78" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "Six-digit hex (#RRGGBB). Applied exactly as configured; not theme-adapted.", id: "WbM+LbvT9p" }), { docsOnly: false }) }, predicates: { show: Po } }), textColor: P.subfield(ie.z.string().optional(), { label: I.msg({ defaultMessage: "Text color", id: "jGi3Y4Pu/z" }), control: "color", default: ks.BANNER_DEFAULT_TEXT_COLOR, placeholder: I.msg({ defaultMessage: "#000000", description: "Default hex color value \u2014 DO NOT TRANSLATE", id: "mMxRbpUjV1" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "Six-digit hex (#RRGGBB). Applied exactly as configured; not theme-adapted.", id: "WbM+LbvT9p" }), { docsOnly: false }) }, predicates: { show: Po } }), linkUrl: P.subfield(ie.z.string().optional(), { label: I.msg({ defaultMessage: "Link URL", id: "1e9zwhbnvk" }), placeholder: I.msg({ defaultMessage: "https://intranet.example.com/usage-policy", id: "7U5OZwbVj5" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "Optional HTTPS URL. The banner text becomes a link when set.", id: "HuIg1+BeMP" }), { docsOnly: false }) }, mono: true, predicates: { show: Po } }) });
  var Lk = (e) => Boolean(e.url || e.oauthIssuer || e.oauthClientId), ws = { show: () => false }, Cr = { requiresUserConsent: true }, Uk = zc.ORG_UUID_VALUE.catch(void 0);
  function Hk(e) {
    return (e === null || e === void 0 ? void 0 : e.enabled) === true && e.allowedOrganizationUuids === void 0;
  }
  function Nk(e, t) {
    let o = e === null || e === void 0 ? void 0 : e.allowedOrganizationUuids;
    return o === void 0 || t !== void 0 && o.includes(t.toLowerCase());
  }
  function Kc(e) {
    if ((e === null || e === void 0 ? void 0 : e.url) && e.oauthIssuer && e.oauthClientId) {
      let t = je.safeHostname(e.oauthIssuer);
      if (!t || je.isAnthropicFirstPartyHost(t)) return;
      return { arm: "configured", url: e.url, oauthIssuer: e.oauthIssuer, oauthClientId: e.oauthClientId };
    }
    return (e === null || e === void 0 ? void 0 : e.enabled) ? { arm: "direct" } : void 0;
  }
  var zk = { url: P.subfield(Cs.urlSchema({ allowLoopbackHttp: true }).optional(), { label: I.msg({ defaultMessage: "Export URL", id: "c4gImpUrl0" }), support: { visibility: "public-undocumented" }, remotePolicy: Cr, mono: true, description: { short: P.shortDescription(I.msg({ defaultMessage: "Endpoint that returns a signed-in user\u2019s Claude.ai conversation history. Only needed for importing directly from Claude.ai.", id: "QJZ9eQ3fBa" })) }, predicates: ws }), oauthIssuer: P.subfield(Cs.urlSchema({ allowLoopbackHttp: true }).optional(), { label: I.msg({ defaultMessage: "OAuth issuer", id: "c4gImpIss0" }), support: { visibility: "public-undocumented" }, remotePolicy: Cr, mono: true, description: { short: P.shortDescription(I.msg({ defaultMessage: "OAuth server users sign in to before importing directly from Claude.ai. Set with the export URL and client ID, or leave all three empty.", id: "Pzy8Q9OzN1" })) }, predicates: ws }), oauthClientId: P.subfield(ie.z.string().trim().min(1).optional(), { label: I.msg({ defaultMessage: "OAuth client ID", id: "c4gImpCli0" }), support: { visibility: "public-undocumented" }, remotePolicy: Cr, description: { short: P.shortDescription(I.msg({ defaultMessage: "OAuth client ID this app presents to the OAuth issuer. Set with the export URL and OAuth issuer, or leave all three empty.", id: "3lg1cVoMQs" })) }, predicates: ws }), enabled: P.subfield(ie.z.boolean().default(false), { label: I.msg({ defaultMessage: "Enable import", id: "c4gImpEnbl" }), support: { availableInVersion: "1.28929.0" }, description: { short: P.shortDescription(I.msg({ defaultMessage: "Lets users import a Claude.ai data export and earlier Claude sessions on this computer from Settings \u2192 Import. Doesn\u2019t affect a provisioned sign-in import.", id: "OIB3Xj6IhR" }), { docsOnly: false }) } }), allowedOrganizationUuids: P.subfield(ie.z.preprocess((e) => e === null || typeof e === "string" && e.trim() === "" ? void 0 : e, P.annotate(ie.z.array(Uk), { maxItems: 100 }).transform((e) => e.filter((t) => t !== void 0)).optional().catch([])), { label: I.msg({ defaultMessage: "Organizations users may import from", id: "JWDj9FZ3tB" }), support: { availableInVersion: "2.26454.0" }, placeholder: I.msg({ defaultMessage: '["00000000-0000-0000-0000-000000000000"]', id: "v2GKYTjwD3" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "When set, users import by sign-in only, and only from the Claude.ai organizations with these IDs.", id: "YIm8r9KgW7" }), { docsOnly: false }), long: P.longDescription("A list of Claude.ai organization IDs (UUIDs). When set, users can import only by signing in to Claude.ai, and only from an organization on the list: a sign-in to any other organization, or to a personal account, is refused before anything is downloaded. Importing from a file and from earlier sessions on this computer is turned off. The list narrows `enabled` and turns nothing on by itself; `automatic3pImport` is not affected. An entry that is not a UUID allows nothing and is reported. An empty list, or one that cannot be read, allows no organization, so no import is offered; a null or blank value is read as not set. A provisioned sign-in import names no organization, so it is not offered while the list is set. Each import is reported to your OpenTelemetry collector as the event `desktop_claude_ai_import`, with the ID of the organization it came from. It is an info-level event: set `otlpDesktopLogLevel` to `info` to receive it.", { docsOnly: false }) } }), automatic3pImport: P.subfield(ie.z.boolean().optional(), { label: I.msg({ defaultMessage: "Automatically import earlier third-party sessions", id: "c4gImpAuto" }), support: { availableInVersion: "1.40609.0" }, description: { short: P.shortDescription(I.msg({ defaultMessage: "Copy this computer\u2019s earlier third-party sessions into the app once, in the background. Independent of `enabled`.", id: "dVIH5Gg6O5" }), { docsOnly: false }), long: P.longDescription("Under device-delivered configuration (device management, a configuration file or a bootstrap URL) this runs only when set to `true`; for organizations managed from the Claude admin console (the hosted configuration) it is on unless an admin turns it off there. When the app launches under this organization, it copies this computer's earlier third-party sessions into its session store in the background, with Settings \u2192 Import's importer (originals stay in place). It lists the earlier configuration's Cowork artifacts in this organization. Optional plugins the user had on come back if still offered: those from the organization plugins directory are switched on, and those from an optional `allowedPluginMarketplaces` entry on the gateway's or bootstrap server's own origin are installed again without asking. Plugins the user uploaded (unless `userPluginUploadsEnabled` is off; they can run programs on this computer) and skills they saved (unless `skillCreationEnabled` is off) are installed again without asking, on or off as they were; a skill that declares tools, hooks, metadata or unknown settings arrives off. Other marketplaces' plugins stay behind. Earlier Cowork projects are added, their instructions held until the user accepts them. The user's Cowork memory and global instructions are copied and used at once, unreviewed (no memory if it was paused). Earlier scheduled tasks are added, each on or off as it was: one that was on runs at its next scheduled time. Runs at most once per device under device-delivered configuration and once more after it joins the hosted configuration. Under the hosted configuration it takes sessions from any earlier device configuration (including ones a console sign-in created) but never those stored under another organization's hosted configuration; under device-delivered configuration, only those stored while no organization ID was configured, and only once one is. Turn on `enabled` too so users can import sessions it leaves out by hand.", { docsOnly: false }) } }), exportEnabled: P.subfield(ie.z.boolean().default(false), { label: I.msg({ defaultMessage: "Enable session export", id: "c4gImpExEn" }), support: { availableInVersion: "1.32352.0" }, description: { short: P.shortDescription(I.msg({ defaultMessage: "Lets users export this computer\u2019s chats, Cowork tasks, and Code sessions as a zip another install can import. No effect unless `enabled` is true.", id: "c4gImpExSh" }), { docsOnly: false }), long: P.longDescription("Allows users to write this computer's chats, Cowork tasks, and Code sessions to a portable zip that another install can import from Settings > Import. Transcripts contain conversation content including tool outputs; only session-record metadata is projected to a fixed field allowlist. Treat exported zips as sensitive data.", { docsOnly: false }) } }), bannerBehavior: P.subfield(ie.z.enum(["off", "detect", "show"]).optional().catch(void 0), { label: I.msg({ defaultMessage: "Import prompt banner", id: "c4gImpBnr0" }), support: { availableInVersion: "1.28929.0" }, description: { short: P.shortDescription(I.msg({ defaultMessage: "Prompt to import on a new chat or task. Off if unset. `show`: always; needs `enabled` or a sign-in import. `detect`: if `enabled` finds earlier Claude sessions.", id: "H9VdpjJA2h" }), { docsOnly: false }) } }), bannerMaxDismissals: P.subfield(ie.z.number().int().min(1).max(10).optional().catch(void 0), { label: I.msg({ defaultMessage: "Import prompt skip limit", id: "qYSrEYqrpG" }), support: { visibility: "public-undocumented", availableInVersion: "2.16120.0" }, description: { short: P.shortDescription(I.msg({ defaultMessage: "Skips allowed before the import prompt stays hidden: 1 to 10, 1 if unset. It returns 3 days after each skip except the last. An import hides it for good.", id: "IUTVtr/gtN" })) }, predicates: ws }) };
  Bc.PASSTHROUGH_FIELDS = { claudeAiImport: P.field(ie.z.object(zk).refine((e) => !Lk(e) || Boolean(e.url && e.oauthIssuer && e.oauthClientId), { message: "url, oauthIssuer and oauthClientId are required together (an import endpoint is unusable without all three)" }).optional(), { flatKey: "claudeAiImport", support: { enabled: { scopes: ["3p"], availableInVersion: "1.10628.0" } }, title: I.msg({ defaultMessage: "Claude.ai data import", id: "c4gImpTitl" }), egressRequirements: (e) => {
    let t = Kc(e);
    if (!t) return [];
    if (t.arm === "configured") return [t.url, t.oauthIssuer].map(je.egressAddress).filter((o) => !!o);
    return [je.CLAUDE_AI_HOST, je.ANTHROPIC_API_HOST, je.GCS_SIGNED_URL_HOST];
  }, egressRequirementsLabel: I.msg({ defaultMessage: "Claude.ai data import", id: "c4gImpEgrs" }), category: "connectors", group: I.msg({ defaultMessage: "Claude.ai data import", id: "c4gImpTitl" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "Lets users import Claude.ai chats and projects, plus earlier Claude sessions on this computer, when `enabled` is true. `automatic3pImport` is a separate switch.", id: "nsQDRMwvNu" })) } }), banner: P.field(P.annotate(Bc.BannerConfig.optional(), { redact: "keep" }), { flatKey: "banner", remotePolicy: { hotApplied: true }, support: { enabled: { scopes: ["1p", "3p"], availableInVersion: "1.7196.0" } }, title: I.msg({ defaultMessage: "Organization banner", id: "bU34Yscprn" }), category: "appearance", group: I.msg({ defaultMessage: "Organization banner", id: "bU34Yscprn" }), description: { short: P.shortDescription(I.msg({ defaultMessage: "A persistent banner across the top of the app window after sign-in.", id: "UQLzOZq7h3" })), long: P.longDescription("Use this for compliance notices, an internal-support link, or to identify the deployment. The banner is shown on every page after sign-in and cannot be dismissed by the user. Colors are six-digit hex (`#RRGGBB`); when `linkUrl` is set the banner text becomes an HTTPS link.") } }) };
});
var xEs = (0, import_chunk_w1d7ygsk.V)(function(Yc) {
  Object.defineProperty(Yc, "__esModule", { value: true });
  Yc.SelfHostedConfig = Yc.SELF_HOSTED_CREDENTIAL_KINDS = void 0;
  Yc.isSelfHostedExecutionConfigured = Gk;
  Yc.isSelfHostedOnly = jc;
  var Me = require("/$bunfs/root/chunk-09f3hy01.js"), xe = Vk(), Wc = T4(), Ye = vj(), Ss = Ime(), qc = NZ(), Sr = Ye.msg({ defaultMessage: "Self-hosted execution", id: "SelfHostedGroup" });
  function Gk(e) {
    var t;
    return Boolean((t = e.selfHosted) === null || t === void 0 ? void 0 : t.url);
  }
  function jc(e) {
    return e.selfHosted !== void 0;
  }
  Yc.SELF_HOSTED_CREDENTIAL_KINDS = ["static", "helper-script", "external-idp"];
  var Gc = (e) => (t) => {
    var o, s;
    return ((s = (o = t.selfHosted) === null || o === void 0 ? void 0 : o.credential) === null || s === void 0 ? void 0 : s.kind) === e;
  }, Wk = Me.z.object({ kind: Me.z.literal("static"), bearerToken: xe.field(xe.annotate(Me.z.string().trim().min(1).optional(), { redact: "drop" }), { flatKey: "selfHostedToken", support: { enabled: { scopes: ["3p"], availableInVersion: "2.16120.0" }, visibility: "public-undocumented", executionTarget: "selfHosted" }, betaFeatureKey: "selfHostedSessions", remotePolicy: { hybrid: { scope: "excluded" } }, title: Ye.msg({ defaultMessage: "Self-hosted bearer token", id: "SelfHostedToken" }), category: "connection", group: Sr, predicates: { show: Gc("static"), required: Gc("static") }, description: { short: xe.shortDescription(Ye.msg({ defaultMessage: "Static token sent as Authorization: Bearer. Prefer a helper script or sign-in.", id: "SelfHostedTokenHint" })) } }) }), qk = Me.z.object({ kind: Me.z.literal("helper-script"), ...Ss.helperScriptLeaves }), jk = Me.z.object({ kind: Me.z.literal("external-idp"), ...Ss.idpSignInShape }), Yk = Me.z.discriminatedUnion("kind", [Wk, qk, jk]), Zk = qc.urlSchema({ allowLoopbackHttp: true, rejectQueryAndFragment: true });
  Yc.SelfHostedConfig = xe.annotate(Me.z.object({ url: xe.field(xe.annotate(Zk.optional(), { redact: "hostname" }), { flatKey: "selfHostedUrl", support: { enabled: { scopes: ["3p"], availableInVersion: "2.16120.0" }, visibility: "public-undocumented", executionTarget: "selfHosted" }, betaFeatureKey: "selfHostedSessions", remotePolicy: { hybrid: { scope: "excluded" }, rejectLoopback: true, requiresUserConsent: true }, predicates: { required: jc }, title: Ye.msg({ defaultMessage: "Self-hosted execution URL", id: "SelfHostedUrlTitle" }), egressRequirements: Wc.singleHostEgress, egressRequirementsLabel: Sr, category: "connection", group: Sr, placeholder: Ye.msg({ defaultMessage: "https://claude-sessions.example.com", id: "SelfHostedUrlPlaceholder" }), description: { short: xe.shortDescription(Ye.msg({ defaultMessage: "HTTPS endpoint of the self-hosted session host (beta).", id: "SelfHostedUrlHint" })), long: xe.longDescription("Beta. The app sends its session API to this endpoint with the configured credential, and the block's presence makes the whole install self-hosted: no session runs on the device, though the local MCP servers on it (the person's own and the organization's) still start on the device and serve the host's sessions (built-in and remote servers do not; of a plugin's servers, only the local (stdio) MCP servers of a plugin in the organization plugins directory do, unless a managed server has the same name), an inference provider configured beside it is ignored, and every key that only configures on-device sessions (marked `x-executionTarget: desktop`) stops applying \u2014 that policy belongs to the infrastructure the sessions run on. The credential is the inference credential keys, read for the endpoint instead: `inferenceCredentialKind` (`external-idp` with `inferenceIdpOidc` and `inferenceIdpAuthFlow`; `helper-script` with `inferenceCredentialHelper` and its leaves; `static` with `selfHostedToken`). Must be `https://` (plain `http://` is read only for a loopback host, from device management or the local configuration file; a settings server may not name a loopback host), with no query string or fragment. While essential telemetry is not blocked, crash and error reports from this install can carry a mark that its sessions run off the device, and true-or-false values and counts that describe what this endpoint offers. The app counts its starts and its failures by kind (crashes, errors, and failures to read settings, sign in, connect to local tools or update). It hands the numbers to this endpoint, if it accepts them, with words from a fixed list, the app's version, and the operating system's name, version and processor. The numbers hold no message, name, path, address or ID. The endpoint can tell whose app sent them. It adds totals to its usage report for Anthropic, if you set one up; what it passes on names nobody. Blocking essential telemetry stops the counting.") } }), credential: Yk.optional() }), { remotePolicy: { hybrid: { scope: "excluded" } } });
});
var Jc = (0, import_chunk_w1d7ygsk.V)(function($c) {
  Object.defineProperty($c, "__esModule", { value: true });
  $c.SessionRetentionConfig = void 0;
  var Ot = require("/$bunfs/root/chunk-8hvnwnsr.js"), ke = Vk(), ue = vj(), Es = ue.msg({ defaultMessage: "Session retention", id: "3Pm9sCaKFE" }), Er = ue.msg({ defaultMessage: "days", id: "Bc20laBenW" }), Ar = () => Ot.z.preprocess((e) => typeof e === "string" && e.trim() !== "" ? Number(e) : e, Ot.z.number().int().gte(1).lte(3650).optional()), Or = ke.longDescription("The app deletes whole sessions in the background shortly after it fetches this configuration (at launch and on each re-poll), or some minutes after launch and then daily when the configuration comes from device management alone. Idle time runs from the session's last activity; viewing an old Code session counts as activity, viewing an old chat or Cowork task without continuing it does not durably. A session that is running or open on screen is skipped and checked again on the next pass, as is a chat or Cowork task whose folder changed on disk within the period. Pinned sessions are not exempt. Minimum 1 day; a value that cannot be read as a whole number of days deletes nothing. Set through the served configuration or in the device-management profile that carries the rest of the configuration. What it does not reach: another account's sessions on the device (evaluated when that account signs in), Code sessions on a remote machine (SSH/WSL), Cowork background (dispatch) tasks the sidebar does not list, a chat or Cowork task whose folder cannot be located, and Claude Code files not named by a session id (prompt history, plans, shell snapshots), which keep Claude Code's own retention. Honored only by Claude Desktop configured for a third-party model provider.");
  $c.SessionRetentionConfig = Ot.z.object({ chatDays: ke.field(Ar(), { flatKey: "chatSessionRetentionDays", support: { enabled: { scopes: ["3p"], availableInVersion: "1.52386.0" } }, title: ue.msg({ defaultMessage: "Chat retention period", id: "Qmc45WB3Fw" }), category: "limits", group: Es, order: 0, suffix: Er, placeholder: ue.msg({ defaultMessage: "90", id: "YrCav22fKE" }), description: { short: ke.shortDescription(ue.msg({ defaultMessage: "Delete chats, with their files, after this many days without activity. Unset: kept until the user deletes them. Projects and memory stay.", id: "rtyAcXYbBI" })), long: Or } }), coworkDays: ke.field(Ar(), { flatKey: "coworkSessionRetentionDays", support: { enabled: { scopes: ["3p"], availableInVersion: "1.52386.0" } }, title: ue.msg({ defaultMessage: "Cowork retention period", id: "94H0hll7CE" }), category: "limits", group: Es, order: 1, suffix: Er, placeholder: ue.msg({ defaultMessage: "90", id: "YrCav22fKE" }), description: { short: ke.shortDescription(ue.msg({ defaultMessage: "Delete Cowork tasks, with their uploads and outputs, after this many days without activity. Unset: kept until the user deletes them. Spaces and memory stay.", id: "XMgSZ82SVH" })), long: Or } }), codeDays: ke.field(Ar(), { flatKey: "codeSessionRetentionDays", support: { enabled: { scopes: ["3p"], availableInVersion: "1.52386.0" } }, title: ue.msg({ defaultMessage: "Code retention period", id: "n8pR7uBR/o" }), category: "limits", group: Es, order: 2, suffix: Er, placeholder: ue.msg({ defaultMessage: "90", id: "YrCav22fKE" }), description: { short: ke.shortDescription(ue.msg({ defaultMessage: "Delete Code sessions, conversation included, after this many days without activity. Unset: kept until the user deletes them. Uncommitted work stays on disk.", id: "v1o1JWREP7" })), long: Or } }), legalHold: ke.field(Ot.z.boolean().optional(), { flatKey: "sessionRetentionHold", support: { enabled: { scopes: ["3p"], availableInVersion: "1.52386.0" } }, title: ue.msg({ defaultMessage: "Suspend session deletion", id: "Mm7TNf2YCM" }), failClosedValue: true, category: "limits", group: Es, order: 3, description: { short: ke.shortDescription(ue.msg({ defaultMessage: "Suspend all automatic session deletion for these users (legal hold). While on, the retention periods above delete nothing.", id: "l86egk4Pyb" })), long: ke.longDescription("Meant to be set per user or group, through the served configuration's group overrides or in the same device-management profile that carries the rest of the configuration (a profile carrying only this key makes the device profile-managed, like any policy key); a hold in the device's profile also counts when the served configuration does not restate it. Deletion stops at the first configuration fetch that carries this value, before it takes effect as configuration at the next relaunch; a device that cannot reach its configuration server deletes nothing.") } }) });
});
var MGi = (0, import_chunk_w1d7ygsk.V)(function(Qc) {
  Object.defineProperty(Qc, "__esModule", { value: true });
  Qc.TelemetryConfig = void 0;
  var Ze = require("/$bunfs/root/chunk-7a3242vz.js"), re = Vk(), As = T4(), le = vj(), dt = klt();
  Qc.TelemetryConfig = Ze.z.object({ orgUuid: re.field(re.annotate(Ze.z.string().optional(), { redact: "keep" }), { flatKey: "deploymentOrganizationUuid", support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, remotePolicy: { hybrid: { derived: true }, applyUnverified: true }, title: le.msg({ defaultMessage: "Organization UUID", id: "EATQrlttOw" }), category: "telemetry", group: dt.ANTHROPIC_TELEMETRY_GROUP, order: -1, placeholder: le.msg({ defaultMessage: "00000000-0000-0000-0000-000000000000", id: "oT3AdLMVZK" }), description: { short: re.shortDescription(le.msg({ defaultMessage: "A UUID you generate. Tags telemetry so Anthropic support can locate your fleet\u2019s events, and namespaces each user\u2019s local data. Not used for auth.", id: "gvBRfDvKmN" })), long: re.longDescription("If unset, the app uses the organization of your Anthropic sign-in, where the connection has one. Otherwise, telemetry is tagged with a value the app derives from your connection settings. Where it cannot derive one, telemetry is tagged with a placeholder UUID shared with other unconfigured deployments. In the last two cases, local data is stored under the placeholder. **Changing this value orphans data** stored under the previous value (sessions, skills, plugins).") } }), disableEssential: re.field(Ze.z.boolean().optional(), { flatKey: "disableEssentialTelemetry", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, remotePolicy: { default: true, applyUnverified: true }, failClosedValue: true, title: le.msg({ defaultMessage: "Block essential telemetry", id: "rdKIIOydC8" }), default: false, category: "telemetry", group: dt.ANTHROPIC_TELEMETRY_GROUP, order: 0, description: { short: re.shortDescription(le.msg({ defaultMessage: "Crash and performance reports to Anthropic.", id: "EGOuVJosgc" })), long: re.longDescription(`"Essential" means the signals Anthropic needs to keep your deployment working: **crash stacks**, **startup failure reasons**, **version/OS metadata**, and **crash dumps** (each an unfiltered copy of part of the app's memory). Reports carry a random install ID and an organization ID. The organization ID is the one you set, one the app takes from your Anthropic sign-in or derives from your connection settings, or a placeholder shared with other unconfigured deployments. Reports can also include a summary of your settings, the host names of addresses you configured, text you set for display (such as the display name, subtitle, and banner text and link), and a one-way digest of a session ID.

**What you lose when this is on:** when a Claude Desktop build hits a bug that only reproduces on your OS version or locale, Anthropic can't see it unless a user manually reports. Fixes ship slower.

**Why this is discouraged, not blocked:** some air-gapped environments require zero outbound telemetry as a matter of policy. The switch exists for them. If you don't have that constraint, leave it off.`, { docsUrl: `${As.COWORK_3P_DOCS_BASE}/telemetry#essential-telemetry` }) }, predicates: { warn: (e) => e === true ? le.msg({ defaultMessage: "Crash and error reports are how we diagnose failures specific to your inference setup. Support turnaround will be slower without them.", id: "ek/rdG0G9V" }) : null } }), disableNonessential: re.field(Ze.z.boolean().optional(), { flatKey: "disableNonessentialTelemetry", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, remotePolicy: { default: true, applyUnverified: true }, failClosedValue: true, title: le.msg({ defaultMessage: "Block nonessential telemetry", id: "oo4Av05fBn" }), default: false, category: "telemetry", group: dt.ANTHROPIC_TELEMETRY_GROUP, order: 1, description: { short: re.shortDescription(le.msg({ defaultMessage: "Product-usage analytics and diagnostic-report uploads. No message content.", id: "0X/lTj2Hvv" })), long: re.longDescription(`"Nonessential" covers two things: **product-usage analytics** (which features get used, navigation patterns; no prompts or completions) and the **Send** action in Help \u2192 Generate Diagnostic Report. Turning this on stops both.

Destinations are listed under Egress Requirements \u2192 Nonessential telemetry.`, { docsUrl: `${As.COWORK_3P_DOCS_BASE}/telemetry#non-essential-telemetry` }) }, predicates: { warn: (e) => e === true ? le.msg({ defaultMessage: "Usage analytics help us prioritize improvements for third-party inference. Diagnostic-report uploads will also be blocked. No message content is included in either.", id: "XtXm3euW3d" }) : null } }), disableNonessentialServices: re.field(Ze.z.boolean().optional(), { flatKey: "disableNonessentialServices", support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" } }, failClosedValue: true, title: le.msg({ defaultMessage: "Block nonessential services", id: "HA2UIzGsaT" }), default: false, category: "telemetry", group: dt.ANTHROPIC_TELEMETRY_GROUP, order: 2, description: { short: re.shortDescription(le.msg({ defaultMessage: "Connector favicons, artifact-preview and MCP Apps iframes, and the Linux spellcheck dictionary. Connector widgets fall back to text; spellcheck is off on Linux.", id: "iwXupWG0F3" })), long: re.longDescription(`"Nonessential services" covers these outbound fetches the app runs without: **connector favicons** (the icon proxy), the **artifact-preview** iframe origin, the **MCP Apps widget** iframe origin (\`*.claudemcpcontent.com\`), and the **spellcheck dictionary** the built-in spellchecker downloads on Linux. Turning this on blocks all of them. (macOS and Windows use the system spellchecker. Windows still downloads a dictionary for a language it cannot check natively; this key does not stop that download.)

**What you lose when this is on:** connectors show without icons, the hosted artifact preview frame does not load (artifacts still render locally, without the CDN chart libraries they can otherwise load), connectors that return MCP Apps show the text tool result instead of the widget, Excel files in the Code tab preview only through Claude\u2019s workspace (the local VM) instead of that frame, and spellcheck underlines are off on Linux.

Destinations are listed under Egress Requirements \u2192 Nonessential services.`) }, predicates: { warn: (e) => e === true ? le.msg({ defaultMessage: "This disables connector icons, hosted artifact previews and MCP Apps widgets, and also turns spellcheck off on Linux. Artifacts still render locally, without CDN libraries; connectors that return MCP Apps show the text tool result instead of the widget.", id: "VinFqhloIq" }) : null } }), usageMetrics: re.field(Ze.z.boolean().optional(), { flatKey: "usageMetricsEnabled", readers: ["desktop", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.46388.1" }, visibility: "public-undocumented" }, remotePolicy: { hybrid: { scope: "only", derived: true }, hotApplied: true }, predicates: { show: () => false }, title: le.msg({ defaultMessage: "Report usage metrics to your Claude.ai organization", id: "hFaw5XYgDV" }), category: "telemetry", group: dt.ANTHROPIC_TELEMETRY_GROUP, order: 3, description: { short: re.shortDescription(le.msg({ defaultMessage: "Set by the control plane from the organization\u2019s Claude Code analytics setting; not editable here. Reports per-user token, cost and session counts (no content).", id: "6k4DCNJe7b" })), long: re.longDescription(`Server-derived: the Claude.ai control plane sets this key, each time it serves the configuration, from the organization's Claude Code analytics setting in Admin settings; it is off until an admin turns that setting on, and off for organizations under HIPAA or customer-managed encryption keys. It is not authored in any form, MDM profile, or bootstrap server, and a value stored anywhere else is ignored.

When on, each signed-in desktop periodically reports usage counters to your Claude.ai organization: per-member **token counts** (input, output, cache read, cache write) by model, the desktop's **cost estimate** for those tokens, and **session counts**, tagged with the member's account, the model name, the app surface (Chat, Cowork or Code), an opaque per-session and per-install identifier, and the app version, operating system and architecture. No prompts, responses, file contents, tool inputs or outputs are included. Sessions and the cost estimate appear in your organization's Claude.ai analytics (Analytics \u2192 Claude Code); the Admin API Claude Code usage report carries those plus per-member, per-model token counts.

This is independent of **Block essential telemetry** and **Block nonessential telemetry**: those govern diagnostics sent to Anthropic, this one populates your own organization's dashboard, and either can be on without the other. Reports go to the same Claude.ai endpoint the desktop fetches its configuration from, so no additional firewall entry is needed. A change takes effect without a relaunch once two configuration syncs in a row have served it.`) } }) });
});
var Sun = (0, import_chunk_w1d7ygsk.V)(function(fu) {
  Object.defineProperty(fu, "__esModule", { value: true });
  fu.ManagedConfig = fu.DISCRIMINATORS = void 0;
  var Ms = require("/$bunfs/root/chunk-jf7e1nay.js"), Os = dX(), ct = Vk(), go = vj(), Ts = Ime(), tu = LGi(), ou = ZEo(), su = OGi(), nu = bc(), ru = IGi(), iu = DGi(), au = QEo(), lu = NGi(), du = PEs(), cu = xEs(), uu = Jc(), Te = Cjn(), pu = MGi(), hu = yun(), Qk = ct.field(Ms.z.enum(ct.PROVIDERS).optional(), { flatKey: "inferenceProvider", readers: ["desktop", "m365", "code"], support: { enabled: { scopes: ["3p"], availableInVersion: "1.2581.0" }, values: { mantle: { availableInVersion: "1.13576.0" } }, executionTarget: "desktop" }, activatesThirdPartyMode: (e, t) => t || e.inference !== void 0, title: go.msg({ defaultMessage: "Inference provider", id: "QQpUrtO7kr" }), egressRequirements: (e) => e === "anthropic" ? [Os.ANTHROPIC_API_HOST, Os.PLATFORM_CLAUDE_HOST] : [], egressRequirementsLabel: go.msg({ defaultMessage: "Claude API", id: "Fo2tzWOJzu" }), category: "connection", customRenderer: "providerSelect", description: { short: ct.shortDescription(go.msg({ defaultMessage: "Selects the inference backend. Setting this key activates third-party mode.", id: "aRuqK/KXrl" })), long: ct.longDescription("Setting this key asks for 3P mode. The app opens in 3P mode unless the user chose to sign in to Claude.ai at the login screen, a choice `disableDeploymentModeChooser` removes. In 3P mode, if the selected provider's required credential keys are missing or invalid, the app shows a configuration error. A value the app cannot read (a misspelt, wrongly cased or unknown provider, or a value of the wrong type) still counts as set when machine-wide device management sent it: a macOS configuration profile, Windows policy under `HKLM`, or the root-owned policy file on Linux. The app then asks for 3P mode and, in 3P mode, shows a configuration error whose details name this key. An unreadable `bootstrapUrl` from the same sources counts the same way unless `bootstrapEnabled` is `false`. An unreadable value does not count where the user can write it: the local configuration file, or Windows policy under `HKCU`. Neither does an empty value (a value of only spaces is unreadable, not empty), or a Windows value of type `REG_BINARY`, `REG_MULTI_SZ` or `REG_QWORD`. Each of those reads as not set. When this key is not set, the app launches in standard mode unless another setting asks for 3P mode, such as a `bootstrapUrl` that `bootstrapEnabled` has not turned off. Keys for providers other than the selected one are ignored. Each provider's required keys are documented on its dedicated page under Inference providers.") } });
  fu.DISCRIMINATORS = { inferenceProvider: { node: Qk, nestedPath: ["inference", "provider"], discriminates: "provider" }, inferenceCredentialKind: { node: Ts.inferenceCredentialKindField, nestedPath: ["inference", "credential", "kind"], discriminates: "credentialKind" } };
  fu.ManagedConfig = Ms.z.object({ inference: ct.annotate(Ts.InferenceConfig.optional(), { gatewayServable: false }), selfHosted: cu.SelfHostedConfig.optional(), otlp: Te.OtlpConfig.optional(), dictation: Te.DictationConfig.optional(), tokenLimits: Te.TokenLimitsConfig.optional(), coworkSurface: Te.CoworkSurfaceConfig.optional(), codeSurface: Te.CodeSurfaceConfig.optional(), chatSurface: Te.ChatSurfaceConfig.optional(), sessionRetention: uu.SessionRetentionConfig.optional(), extensions: Te.ExtensionsConfig.optional(), autoUpdate: Te.AutoUpdateConfig.optional(), featureDiscovery: Te.FeatureDiscoveryConfig.optional(), bootstrap: su.BootstrapConfig.optional(), lifecycle: ru.LifecycleConfig.optional(), models: au.ModelsConfig.optional(), plugins: du.PluginsConfig.optional(), telemetry: pu.TelemetryConfig.optional(), mcp: iu.McpConfig.optional(), workspace: hu.WorkspaceConfig.optional(), builtinBrowser: nu.BuiltinBrowserConfig.optional(), authentication: ou.AuthenticationConfig.optional(), appearance: tu.AppearanceConfig.optional(), ...lu.PASSTHROUGH_FIELDS });
});
var ZYe = (0, import_chunk_w1d7ygsk.V)(function(Iu) {
  Object.defineProperty(Iu, "__esModule", { value: true });
  Iu.isStaticTier3pKey = Iu.staticTierKeys = Iu.nonBootstrapableKeys = Iu.bootstrapableKeys = Iu.isBootstrapable = Iu.isBootstrapableMeta = Iu.isInferenceConnectionKey = Iu.isPublished3pKey = Iu.allKeys = Iu.FlatManagedConfig = Iu.FLAT_KEY_TO_NESTED_PATH = Iu.fieldProviders = Iu.INFERENCE_LEAF_MEMBERSHIP = Iu.FORMER_NESTED_PATHS = Iu.RETIRED_FLAT_KEYS = Iu.FLAT_KEYS = void 0;
  Iu.retiredFlatKeyEffect = sC;
  Iu.requiredProviderLeaves = rC;
  Iu.assertFieldMetaCoverageBuilt = lC;
  Iu.getFieldMeta = Le;
  Iu.tryGetFieldMeta = Is;
  Iu.keepsAuthoredEmptyList = dC;
  Iu.flatConfigKeys = ht;
  Iu.enabledScopes = Ps;
  Iu.deprecatedScopes = Au;
  Iu.activatesThirdPartyMode = pC;
  Iu.materializeDefaults = fC;
  Iu.defaultedFlatKeys = gC;
  Iu.keysWithRemotePolicy = yC;
  Iu.platformVariantKeys = Ou;
  Iu.applyPlatformVariants = Mr;
  Iu.changedKeysNeedingRestart = bC;
  Iu.layHotAppliedKeys = vC;
  Iu.applyUnverifiedKeys = _C;
  Iu.unverifiedCacheValue = Tu;
  Iu.unverifiedCacheAdmits = wC;
  Iu.appliesUnverifiedAsFailClosed = kC;
  Iu.isFailClosedStandIn = CC;
  Iu.flatKeysForExecutionTarget = SC;
  Iu.appBehaviorMdmKeys = EC;
  Iu.remotePolicyDefaults = IC;
  var vu = require("/$bunfs/root/chunk-dcfn2xh5.js"), O = Vk(), Mt = T4(), $e = Sun(), _u = xEs(), wu = OEs();
  function tC(e) {
    let t = /* @__PURE__ */ new Map(), o = (s, n, i) => {
      var u, p, y;
      let b = O.fieldMetaForNode(s);
      if (b) {
        let C = (u = t.get(b.flatKey)) !== null && u !== void 0 ? u : t.set(b.flatKey, { node: s, path: n, providers: /* @__PURE__ */ new Set(), credentialKinds: /* @__PURE__ */ new Set(), kindAgnostic: false }).get(b.flatKey);
        if (i === null || i === void 0 ? void 0 : i.provider) if (C.providers.add(i.provider), i.kind) C.credentialKinds.add(i.kind);
        else C.kindAgnostic = true;
        return;
      }
      let S = O.unwrapZod(s), M = O.zodKind(S);
      if (M === O.ZodKind.ZodObject) {
        let C = S.shape, x = (p = O.literalValueOf(C.provider)) !== null && p !== void 0 ? p : i === null || i === void 0 ? void 0 : i.provider, W = (y = O.literalValueOf(C.kind)) !== null && y !== void 0 ? y : i === null || i === void 0 ? void 0 : i.kind, q = x || W ? { provider: x, kind: W } : i;
        for (let [X, ae] of Object.entries(C)) o(ae, [...n, X], q);
      } else if (M === O.ZodKind.ZodDiscriminatedUnion || M === O.ZodKind.ZodUnion) for (let C of O.unionOptionsOf(S)) o(C, n, i);
    };
    return o(e, []), new Map([...t].map(([s, n]) => [s, { node: n.node, path: n.path, armContext: n.providers.size > 0 ? { providers: [...n.providers], credentialKinds: n.kindAgnostic ? [] : [...n.credentialKinds] } : void 0 }]));
  }
  var Do = tC($e.ManagedConfig);
  Iu.FLAT_KEYS = [...Do.keys(), ...Object.keys($e.DISCRIMINATORS)];
  var oC = { workspace: [{ name: "disableMobileSimulatorTools", nestedPath: "workspace.disableMobileSimulatorTools", effect: "it is now read from Claude Code managed settings under the same name \u2014 deploy the replacement there" }, { name: "coworkVmWindowsShareFallbackEnabled", nestedPath: "workspace.vmWindowsShareFallbackEnabled", effect: "the Windows VM file-share fallback it switched was removed once Microsoft fixed the underlying Windows regression (KB5129195); nothing replaces it" }], selfHosted: [{ name: "deviceToolsEnabled", nestedPath: "workspace.deviceToolsEnabled", effect: "the session host no longer reads it: a session there gets the tools the person's Claude Desktop serves whenever the organization's policy can be read, and a single tool, or every bridged server, is turned off with a managedMcpServers deny rule (the policy-only remote-devices row), while what the computer itself runs stays governed by isLocalDevMcpEnabled and the plugin server lists, except the local (stdio) MCP servers of plugins in the organization plugins directory, which start while the plugin is switched on unless a managed server has the same name; a session host older than that still reads it and treats absent as off, so remove it only once the session host has updated; nothing replaces it" }, { name: "selfHostedOidcTokenStorage", nestedPath: "selfHosted.credential.tokenStorage", effect: "the session host sign-in is always kept in the operating system's secure storage; nothing replaces it" }, ...[["selfHostedCredentialKind", 'inferenceCredentialKind instead (where this was "interactive", write "external-idp")'], ["selfHostedOidc", "inferenceIdpOidc instead"], ["selfHostedOidcAuthFlow", "inferenceIdpAuthFlow instead"], ["selfHostedCredentialHelper", "inferenceCredentialHelper instead"], ["selfHostedCredentialHelperTtlSec", "inferenceCredentialHelperTtlSec instead"], ["selfHostedCredentialHelperTimeoutSec", "inferenceCredentialHelperTimeoutSec instead"], ["selfHostedCredentialHelperSilentRefreshEnabled", "inferenceCredentialHelperSilentRefreshEnabled instead"]].map(([e, t]) => ({ name: e, effect: `the session host's credential is now read from the inference credential keys: set ${t}` }))] }, ku = Object.values(oC).flat();
  Iu.RETIRED_FLAT_KEYS = ku.map((e) => e.name);
  function sC(e) {
    var t;
    let o = e.toLowerCase();
    return (t = ku.find((s) => {
      var n;
      return s.name.toLowerCase() === o || ((n = s.nestedPath) === null || n === void 0 ? void 0 : n.toLowerCase()) === o;
    })) === null || t === void 0 ? void 0 : t.effect;
  }
  Iu.FORMER_NESTED_PATHS = [];
  var Cu = Object.fromEntries(Iu.FLAT_KEYS.map((e) => {
    var t, o;
    return [e, (o = (t = $e.DISCRIMINATORS[e]) === null || t === void 0 ? void 0 : t.node) !== null && o !== void 0 ? o : Do.get(e).node];
  }));
  Iu.INFERENCE_LEAF_MEMBERSHIP = new Map([...Do].filter(([, e]) => e.armContext).map(([e, t]) => [e, t.armContext]));
  var nC = (e) => {
    var t, o;
    let s = (o = (t = Iu.INFERENCE_LEAF_MEMBERSHIP.get(e)) === null || t === void 0 ? void 0 : t.providers) !== null && o !== void 0 ? o : [];
    return s.length === O.PROVIDERS.length ? [] : s;
  };
  Iu.fieldProviders = nC;
  function rC(e) {
    var t;
    let o = [];
    for (let [s, n] of Iu.INFERENCE_LEAF_MEMBERSHIP) {
      let i = Le(s);
      if (n.credentialKinds.length === 0 && n.providers.includes(e) && O.isReadBy(i, "desktop") && ((t = i.predicates) === null || t === void 0 ? void 0 : t.required)) o.push(s);
    }
    return o;
  }
  Iu.FLAT_KEY_TO_NESTED_PATH = new Map([...[...Do].map(([e, t]) => [e, t.path]), ...Object.entries($e.DISCRIMINATORS).map(([e, t]) => [e, t.nestedPath])]);
  function iC() {
    for (let e of Object.keys($e.DISCRIMINATORS)) if (Do.has(e)) throw Error(`flat schema drift: discriminator "${e}" is also a canonical leaf`);
    for (let [e, t] of Object.entries(Cu)) {
      let o = O.fieldMetaForNode(t);
      if ((o === null || o === void 0 ? void 0 : o.flatKey) !== e) throw Error(`flat schema drift: "${e}" flatKey is "${o === null || o === void 0 ? void 0 : o.flatKey}"`);
    }
  }
  iC();
  function aC() {
    Su({ buildLazy: false });
  }
  function lC() {
    return Su({ buildLazy: true });
  }
  function Su(e) {
    let t = [], o = /* @__PURE__ */ new Set([O.ZodKind.ZodLiteral, O.ZodKind.ZodUndefined, O.ZodKind.ZodNever]), s = /* @__PURE__ */ new Set([O.ZodKind.ZodObject, O.ZodKind.ZodArray, O.ZodKind.ZodUnion, O.ZodKind.ZodDiscriminatedUnion]), n = (i, u, p) => {
      if (O.isLazySchema(i)) {
        if (!e.buildLazy) throw Error(`field coverage drift: "${u}" is a lazy schema below an eager node \u2014 make the enclosing field()/subfield() value type the lazy one, or keep this node eager`);
        t.push(u);
      }
      let y = O.unwrapZod(i), b = O.zodKind(y);
      if (b === O.ZodKind.ZodArray) {
        let S = O.arrayElementOf(y);
        if (S) n(S, `${u}[]`, p);
        return;
      }
      if (b === O.ZodKind.ZodUnion || b === O.ZodKind.ZodDiscriminatedUnion) {
        for (let S of O.unionOptionsOf(y)) n(S, u, p);
        return;
      }
      if (b !== O.ZodKind.ZodObject) return;
      for (let [S, M] of Object.entries(y.shape)) {
        let C = M, x = `${u}.${S}`, W = O.fieldMetaForNode(C) !== void 0, q = O.subfieldMetaForNode(C) !== void 0;
        if (O.isLazySchema(C) && !e.buildLazy) {
          if (!W && !q) throw Error(`field coverage drift: "${x}" is a lazy schema with no field()/subfield() metadata`);
          continue;
        }
        let X = O.zodKind(O.unwrapZod(C));
        if (p) {
          if (!q && !o.has(X)) throw Error(`subfield coverage drift: "${x}" lacks subfield() metadata`);
        } else if (!W && !q && !o.has(X) && !s.has(X)) throw Error(`field coverage drift: "${x}" is a primitive leaf with no field()/subfield() metadata`);
        n(C, x, p || W);
      }
    };
    return n($e.ManagedConfig, "ManagedConfig", false), t;
  }
  aC();
  Iu.FlatManagedConfig = vu.z.object(Cu);
  Iu.allKeys = Object.keys(Iu.FlatManagedConfig.shape);
  var mo = new Map(Iu.allKeys.map((e) => {
    let t = O.fieldMetaForNode(Iu.FlatManagedConfig.shape[e]);
    if (!t) throw Error(`No field() metadata for key: ${e}`);
    return [e, t];
  }));
  function Le(e) {
    let t = mo.get(e);
    if (!t) throw Error(`No field() metadata for key: ${String(e)}`);
    return t;
  }
  function Is(e) {
    return mo.get(e);
  }
  function dC(e) {
    var t;
    return ((t = Is(e)) === null || t === void 0 ? void 0 : t.emptyListIsAuthored) === true;
  }
  var cC = Iu.allKeys.filter((e) => O.effectiveVisibility(mo.get(e)) !== "internal-only"), mu = /* @__PURE__ */ new Map();
  function ht(e) {
    var t;
    let o = (t = e.reader) !== null && t !== void 0 ? t : "desktop", s = `${String(e.includeInternal)}:${o}`, n = mu.get(s);
    if (n === void 0) n = (e.includeInternal ? Iu.allKeys : cC).filter((i) => O.isReadBy(mo.get(i), o)), mu.set(s, n);
    return n;
  }
  var uC = (e) => e === void 0 ? [] : "scopes" in e ? [e] : e, Eu = (e) => uC(e).flatMap((t) => t.scopes);
  function Ps(e) {
    return Eu(e.support.enabled);
  }
  function Au(e) {
    return Eu(e.support.deprecated);
  }
  var Ro;
  function pC(e) {
    return Ro !== null && Ro !== void 0 || (Ro = [...mo.values()].flatMap((t) => {
      var o;
      return (o = t.activatesThirdPartyMode) !== null && o !== void 0 ? o : [];
    })), Ro.some((t) => t(e, false)) || _u.isSelfHostedOnly(e) || Mt.unreadableActivators(e).length > 0;
  }
  var hC = (e) => O.effectiveVisibility(e) === "public" && (Ps(e).includes("3p") || Au(e).includes("3p"));
  Iu.isPublished3pKey = hC;
  function fC(e, t) {
    for (let o of ht({ ...t, includeInternal: true })) {
      if (e[o] !== void 0 || Iu.INFERENCE_LEAF_MEMBERSHIP.has(o)) continue;
      let s = O.runtimeDefault(Le(o));
      if (s !== void 0) e[o] = s;
    }
    return e;
  }
  function gC(e) {
    return ht({ ...e, includeInternal: true }).filter((t) => !Iu.INFERENCE_LEAF_MEMBERSHIP.has(t) && O.runtimeDefault(Le(t)) !== void 0);
  }
  var mC = (e) => {
    var t;
    return ((t = Iu.FLAT_KEY_TO_NESTED_PATH.get(e)) === null || t === void 0 ? void 0 : t[0]) === "inference";
  };
  Iu.isInferenceConnectionKey = mC;
  function yC(e) {
    let t = typeof e === "function" ? e : (o) => Boolean(o[e]);
    return Iu.allKeys.filter((o) => {
      let s = Le(o).remotePolicy;
      return s !== void 0 && t(s);
    });
  }
  var yu = /* @__PURE__ */ new Map();
  function Ou(e) {
    let t = yu.get(e);
    if (!t) t = Iu.allKeys.flatMap((o) => {
      let s = Le(o).platformVariant;
      return (s === null || s === void 0 ? void 0 : s.platform) === e ? [[o, s.of]] : [];
    }), yu.set(e, t);
    return t;
  }
  function Mr(e, t) {
    let o = { ...e };
    for (let [s, n] of Ou(t)) if (wu.isFieldSet(o[s])) o[n] = o[s];
    return o;
  }
  function Mu(e, t, o) {
    var s, n, i;
    let u = (s = Is(e)) === null || s === void 0 ? void 0 : s.remotePolicy;
    return (u === null || u === void 0 ? void 0 : u.hotApplied) === true || ((i = (n = u === null || u === void 0 ? void 0 : u.hotAppliedWhen) === null || n === void 0 ? void 0 : n.call(u, t, o)) !== null && i !== void 0 ? i : false);
  }
  function bC(e, t, o) {
    var s;
    let [n, i] = o === void 0 ? [e, t] : [Mr(e, o), Mr(t, o)], u = [];
    for (let p of /* @__PURE__ */ new Set([...Object.keys(n), ...Object.keys(i)])) {
      if (Mu(p, n[p], i[p]) || o !== void 0 && ((s = Is(p)) === null || s === void 0 ? void 0 : s.platformVariant)) continue;
      if (Mt.canonicalJson(n[p]) !== Mt.canonicalJson(i[p])) u.push(p);
    }
    return u;
  }
  function vC(e, t, o = {}) {
    let s = Iu.allKeys.filter((y) => {
      var b;
      return o.unconditionalOnly ? ((b = Le(y).remotePolicy) === null || b === void 0 ? void 0 : b.hotApplied) === true : Mu(y, e.config[y], t.config[y]);
    }), n = new Set(s), i = (y, b) => Mt.canonicalJson([y.config[b], y.reports.filter((S) => S.key === b)]), u = s.filter((y) => i(e, y) !== i(t, y)), p = { ...e.config };
    for (let y of u) if (t.config[y] === void 0) delete p[y];
    else p[y] = t.config[y];
    return { config: p, reports: [...e.reports.filter((y) => !n.has(y.key)), ...t.reports.filter((y) => n.has(y.key))], moved: u };
  }
  function _C(e) {
    return Iu.bootstrapableKeys(e).filter((t) => {
      var o, s;
      let n = Le(t), i = (o = n.remotePolicy) === null || o === void 0 ? void 0 : o.applyUnverified;
      if (((s = n.remotePolicy) === null || s === void 0 ? void 0 : s.requiresUserConsent) || i === false) return false;
      return i === true || Tr(n.failClosedValue);
    });
  }
  function Tu(e, t) {
    var o;
    let s = Le(e), n = (o = s.remotePolicy) === null || o === void 0 ? void 0 : o.applyUnverified;
    if (n === true) return t;
    if (!Tr(s.failClosedValue) || n === false) return;
    return n === "asFailClosed" || t === s.failClosedValue ? s.failClosedValue : void 0;
  }
  function wC(e, t) {
    return Tu(e, t) !== void 0;
  }
  function kC(e) {
    var t;
    return ((t = Le(e).remotePolicy) === null || t === void 0 ? void 0 : t.applyUnverified) === "asFailClosed";
  }
  function CC(e, t) {
    let o = Le(e);
    return Tr(o.failClosedValue) && t === o.failClosedValue;
  }
  var Tr = (e) => e !== void 0 && e !== null && typeof e !== "object", bu = /* @__PURE__ */ new Map();
  function SC(e, t) {
    var o;
    let s = `${e}:${String(t.includeInternal)}:${(o = t.reader) !== null && o !== void 0 ? o : "desktop"}`, n = bu.get(s);
    if (n === void 0) n = ht(t).filter((i) => mo.get(i).support.executionTarget === e), bu.set(s, n);
    return n;
  }
  function EC(e) {
    return new Set(ht(e).filter((t) => Le(t).appBehaviorOnly));
  }
  var AC = (e) => {
    var t;
    return Ps(e).includes("3p") && ((t = e.remotePolicy) === null || t === void 0 ? void 0 : t.type) !== "remote-disabled";
  };
  Iu.isBootstrapableMeta = AC;
  var OC = (e) => Iu.isBootstrapableMeta(Le(e));
  Iu.isBootstrapable = OC;
  var MC = (e) => ht(e).filter(Iu.isBootstrapable);
  Iu.bootstrapableKeys = MC;
  var TC = (e) => ht(e).filter((t) => !Iu.isBootstrapable(t));
  Iu.nonBootstrapableKeys = TC;
  function IC(e) {
    var t;
    let o = {};
    for (let s of ht(e)) {
      let n = (t = Le(s).remotePolicy) === null || t === void 0 ? void 0 : t.default;
      if (n !== void 0) o[s] = n;
    }
    return o;
  }
  var PC = (e) => ht(e).filter((t) => !O.isRemoteOnly(Le(t)));
  Iu.staticTierKeys = PC;
  var RC = (e) => {
    let t = Le(e);
    return Ps(t).includes("3p") && !O.isRemoteOnly(t);
  };
  Iu.isStaticTier3pKey = RC;
});
var PCr = (0, import_chunk_w1d7ygsk.V)(function($u) {
  Object.defineProperty($u, "__esModule", { value: true });
  $u._test = void 0;
  $u.toBoolean = Lr;
  $u.coerceRawValue = Ur;
  $u.standInFailClosed = Hr;
  $u.assignParsedKey = Fu;
  $u.legacyNameNotice = Nr;
  $u.resolveLegacyFlatKeys = Gu;
  $u.detectDeprecations = hS;
  $u.wholeKeyNotice = Wu;
  $u.hybridOnlyDropMessage = qu;
  $u.stripHybridOnlySubfieldPaths = ju;
  $u.parseConfigRecord = gS;
  $u.stripEmptyKeys = mS;
  $u.parseForceLoginOrgUUIDs = yS;
  $u.enforceConfigurationValues = bS;
  $u.configurationWarnings = _S;
  $u.keyedConfigurationWarnings = Zu;
  var ee = Lwe(), Hu = dX(), be = Vk(), Nu = T4(), G = Ime(), zu = gGt(), Ku = Tjn(), Bu = ZEo(), Vu = Cjn(), Rs = yun(), yo = OEs(), Z = ZYe(), bo = Zvt(), xr = () => Z.flatConfigKeys({ includeInternal: true });
  function Lr(e) {
    if (e === null || e === void 0) return;
    if (typeof e === "boolean") return e;
    if (typeof e === "number") {
      if (e === 1) return true;
      if (e === 0) return false;
      return;
    }
    if (typeof e !== "string") return;
    let t = e.trim().replace(/\r/g, "").toLowerCase();
    if (t === "true" || t === "1") return true;
    if (t === "false" || t === "0") return false;
    return;
  }
  function uS(e) {
    var t, o, s;
    if (e.code === "invalid_value") return ((o = (t = e.values) === null || t === void 0 ? void 0 : t.length) !== null && o !== void 0 ? o : 0) === 1 ? "invalid_literal" : "invalid_enum_value";
    if (e.code === "invalid_format") return "invalid_string";
    if (e.code === "invalid_union" && e.discriminator !== void 0) return "invalid_union_discriminator";
    return (s = e.code) !== null && s !== void 0 ? s : "unknown";
  }
  function pS(e) {
    return e.code === "custom" || e.code === "invalid_format" && e.format === "regex";
  }
  function Ur(e, t) {
    return be.zodKind(e) === be.ZodKind.ZodString || be.zodKind(e) === be.ZodKind.ZodEnum ? t : bo.coerceJsonString(t);
  }
  function Hr(e, t, o) {
    let s = Z.getFieldMeta(t);
    if ("failClosedValue" in s) e[t] = s.failClosedValue, o === null || o === void 0 || o();
  }
  function Fu(e, t, o, s, n = {}) {
    var i, u, p, y;
    if (o === null || o === void 0) return;
    if (o === "") return;
    let b = (i = n.def) !== null && i !== void 0 ? i : Z.FlatManagedConfig.shape[t], S = () => Hr(e, t, n.onFailClosed), M = be.unwrapZod(b);
    if (be.zodKind(M) === be.ZodKind.ZodBoolean) {
      let te = Lr(o);
      if (te !== void 0) e[t] = te;
      else s(`Managed config "${t}" is not a valid boolean`), S();
      return;
    }
    let C = Ur(M, o);
    if (C instanceof Date || C instanceof Map || C instanceof Set) {
      s(`Failed to parse managed config "${t}": .: invalid_type`), S();
      return;
    }
    let x = b.safeParse(C), W = Z.getFieldMeta(t), q = (te, Be) => s(te, Be !== null && Be !== void 0 ? Be : "drop"), X = () => bo.reportUnread(t, b, C, q, { values: x.success && !W.checkDropped });
    if (x.success) {
      if (e[t] = x.data, X(), n.channel !== "hybrid") ju(x.data, fS(t), (Be) => s(qu(t, Be), "drop"));
      (u = W.checkDropped) === null || u === void 0 || u.call(W, C, q);
      let te = Uu(C);
      if ("failClosedValue" in W && te > 0 && Array.isArray(C) === Array.isArray(x.data) && Uu(x.data) === 0) s(`Failed to parse managed config "${t}": none of its ${te} entries could be read`), S();
      return;
    }
    let ae = x.error.issues.map((te) => pS(te) ? `${te.path.join(".") || "."}: ${te.message}` : `${te.path.join(".") || "."}: ${uS(te)}`).join("; ");
    (p = n.onIssues) === null || p === void 0 || p.call(n, x.error.issues.map((te) => ({ path: te.path, message: te.message }))), s(`Failed to parse managed config "${t}": ${ae}`), S(), X(), (y = W.checkDropped) === null || y === void 0 || y.call(W, C, q);
  }
  var Tt = (e) => e === null || e === void 0 || e === "";
  function Uu(e) {
    if (Array.isArray(e)) return e.length;
    return e !== null && typeof e === "object" && Object.getPrototypeOf(e) === Object.prototype ? Object.keys(e).length : -1;
  }
  function Nr(e, t = Z.getFieldMeta(e)) {
    if (t.legacyFlatKey === void 0) return;
    let { name: o, ...s } = t.legacyFlatKey;
    return { path: o, use: e, ...s };
  }
  function Gu(e, t, o = {}) {
    let s = { ...e }, n = s.inferenceCredentialKind === "external-idp" || G.IDP_OIDC_FLAT_KEY !== void 0 && !Tt(s[G.IDP_OIDC_FLAT_KEY]) || G.IDP_AUTH_FLOW_FLAT_KEY !== void 0 && !Tt(s[G.IDP_AUTH_FLOW_FLAT_KEY]), i = (y) => o.editor === true && y.editorPreserves === true && !n, u = (y) => !i(y) && ee.isDeprecationHonoured(y);
    for (let y of Z.allKeys) {
      let b = Z.getFieldMeta(y).legacyFlatKey;
      if (b === void 0 || !(b.name in s)) continue;
      if (s[y] === void 0 && !Tt(s[b.name])) if (ee.isDeprecationHonoured(b)) s[y] = s[b.name];
      else t === null || t === void 0 || t(y, ee.describeDeprecation(Nr(y)));
      delete s[b.name];
    }
    if (ee.isDeprecationHonoured(G.GATEWAY_AUTH_SCHEME_SSO) && ee.deprecationApplies(G.GATEWAY_AUTH_SCHEME_SSO, s.inferenceGatewayAuthScheme, s)) {
      if (s.inferenceProvider === "gateway" && s.inferenceCredentialKind === void 0) s.inferenceCredentialKind = "interactive";
      delete s.inferenceGatewayAuthScheme;
    }
    let p = typeof s.inferenceProvider === "string" ? s.inferenceProvider : void 0;
    if (ee.isDeprecationHonoured(G.VERTEX_OAUTH_CREDENTIAL_KIND) && ee.deprecationApplies(G.VERTEX_OAUTH_CREDENTIAL_KIND, s.inferenceCredentialKind, s)) s.inferenceCredentialKind = zu.legacyCredentialKindAlias(p, s.inferenceCredentialKind);
    if (ee.isDeprecationHonoured(G.VERTEX_INTERACTIVE_WITH_AUDIENCE) && ee.deprecationApplies(G.VERTEX_INTERACTIVE_WITH_AUDIENCE, s.inferenceCredentialKind, s)) s.inferenceCredentialKind = "workforce";
    if (G.IDP_OIDC_FLAT_KEY !== void 0 && u(G.GATEWAY_IDP_OIDC_KEY) && ee.deprecationApplies(G.GATEWAY_IDP_OIDC_KEY, s.inferenceGatewayOidc, s)) {
      if (Tt(s[G.IDP_OIDC_FLAT_KEY])) s[G.IDP_OIDC_FLAT_KEY] = s.inferenceGatewayOidc;
      s.inferenceCredentialKind = "external-idp", delete s.inferenceGatewayOidc;
    }
    if (G.IDP_AUTH_FLOW_FLAT_KEY !== void 0 && u(G.GATEWAY_IDP_AUTH_FLOW_KEY) && ee.deprecationApplies(G.GATEWAY_IDP_AUTH_FLOW_KEY, s.inferenceGatewayOidcAuthFlow, s)) {
      if (Tt(s[G.IDP_AUTH_FLOW_FLAT_KEY])) s[G.IDP_AUTH_FLOW_FLAT_KEY] = s.inferenceGatewayOidcAuthFlow;
      delete s.inferenceGatewayOidcAuthFlow;
    }
    if (u(G.GATEWAY_INTERACTIVE_WITH_IDP) && ee.deprecationApplies(G.GATEWAY_INTERACTIVE_WITH_IDP, s.inferenceCredentialKind, s)) s.inferenceCredentialKind = "external-idp";
    return s;
  }
  function hS(e, t = {}) {
    var o;
    let s = [];
    for (let n of (o = t.keys) !== null && o !== void 0 ? o : xr()) {
      let i = Z.getFieldMeta(n), u = i.legacyFlatKey, p = u !== void 0 && e[n] === void 0 && Object.hasOwn(e, u.name) && !Tt(e[u.name]);
      if (p) s.push(ee.deprecationHit(n, Nr(n, i)));
      if (!i.deprecations) continue;
      let y = p ? e[u.name] : e[n];
      if (Tt(y)) continue;
      let b = Ur(be.unwrapZod(Z.FlatManagedConfig.shape[n]), y);
      for (let S of i.deprecations) {
        if (t.editor && S.editorPreserves && !G.editorListsGatewayIdpNotices()) continue;
        if (ee.deprecationApplies(S, b, e)) s.push(ee.deprecationHit(n, S));
      }
    }
    return s;
  }
  function Wu(e) {
    var t;
    return (t = e.deprecations) === null || t === void 0 ? void 0 : t.find(ee.isWholeKeyNotice);
  }
  function qu(e, t) {
    return `Managed config "${e}.${t}" dropped: "${t}" is only honored when delivered by the Anthropic-hosted control plane`;
  }
  var Rr = /* @__PURE__ */ new Map();
  function fS(e) {
    let t = Rr.get(e);
    if (!t) t = be.hybridOnlySubfieldKeys(Z.FlatManagedConfig.shape[e]), Rr.set(e, t);
    return t;
  }
  function Dr(e, t) {
    if (Array.isArray(e)) {
      let i = false;
      for (let u of e) i = Dr(u, t) || i;
      return i;
    }
    if (e === null || typeof e !== "object" || t.length === 0) return false;
    let o = e, [s, ...n] = t;
    if (n.length === 0) {
      if (o[s] === void 0) return false;
      return delete o[s], true;
    }
    return Dr(o[s], n);
  }
  function ju(e, t, o) {
    for (let s of t) if (Dr(e, s.split("."))) o(s);
  }
  function gS(e, t) {
    var o, s, n;
    let i = (o = t === null || t === void 0 ? void 0 : t.allowedKeys) !== null && o !== void 0 ? o : xr(), u = new Set(i), p = /* @__PURE__ */ new Set(), y = Gu(e, (M, C) => {
      var x;
      if (u.has(M)) (x = t === null || t === void 0 ? void 0 : t.onInvalid) === null || x === void 0 || x.call(t, M, C), p.add(M);
    }, { editor: t === null || t === void 0 ? void 0 : t.editor }), b = {}, S = (M) => Hr(b, M, () => {
      var C;
      return (C = t === null || t === void 0 ? void 0 : t.onFailClosed) === null || C === void 0 ? void 0 : C.call(t, M);
    });
    for (let M of i) {
      if (p.has(M)) {
        S(M);
        continue;
      }
      let C = Wu(Z.getFieldMeta(M));
      if (C !== void 0 && !ee.isDeprecationHonoured(C) && !Tt(y[M])) {
        (s = t === null || t === void 0 ? void 0 : t.onInvalid) === null || s === void 0 || s.call(t, M, ee.describeDeprecation(C)), S(M);
        continue;
      }
      Fu(b, M, y[M], (x, W) => {
        var q, X;
        return W === void 0 ? (q = t === null || t === void 0 ? void 0 : t.onInvalid) === null || q === void 0 ? void 0 : q.call(t, M, x) : (X = t === null || t === void 0 ? void 0 : t.onInvalid) === null || X === void 0 ? void 0 : X.call(t, M, x, W);
      }, { def: (n = t === null || t === void 0 ? void 0 : t.schemaFor) === null || n === void 0 ? void 0 : n.call(t, M), onFailClosed: () => {
        var x;
        return (x = t === null || t === void 0 ? void 0 : t.onFailClosed) === null || x === void 0 ? void 0 : x.call(t, M);
      }, onIssues: (x) => {
        var W;
        return (W = t === null || t === void 0 ? void 0 : t.onIssues) === null || W === void 0 ? void 0 : W.call(t, M, x);
      }, channel: t === null || t === void 0 ? void 0 : t.channel });
    }
    return b;
  }
  function mS(e, t) {
    let o = {};
    for (let s of xr()) {
      if (t === null || t === void 0 ? void 0 : t.scope) {
        let i = Z.getFieldMeta(s);
        if (!Z.enabledScopes(i).includes(t.scope)) continue;
        if (be.isRemoteOnly(i)) continue;
      }
      let n = e[s];
      if (n === void 0 || n === null || n === "") continue;
      if (Array.isArray(n)) {
        if (n.length === 0 && !Z.keepsAuthoredEmptyList(s)) continue;
      } else if (typeof n === "object" && Object.keys(n).length === 0) continue;
      o[s] = n;
    }
    return o;
  }
  function yS(e) {
    var t;
    if (e === void 0 || e.trim() === "") return null;
    return (t = Bu.forceLoginOrgUUIDList(e)) !== null && t !== void 0 ? t : [];
  }
  function bS(e, t) {
    let o = { ...e };
    if (t === null || t === void 0 ? void 0 : t.mode) {
      for (let n of Z.allKeys) if (Z.deprecatedScopes(Z.getFieldMeta(n)).includes(t.mode) && o[n] !== void 0) delete o[n];
    }
    let s = Yu(o, t);
    if (s && "reenable" in s) o[s.reenable] = true;
    return o;
  }
  function vS(e) {
    for (let t of Vu.SURFACE_GRANT_FIELDS) {
      let o = t.flatKey, s = be.surfaceGrantFor(t.grants, e[o]);
      if (s) return { key: o, grant: s };
    }
    return;
  }
  function Yu(e, t) {
    var o, s;
    if ((t === null || t === void 0 ? void 0 : t.mode) === "1p" || e.isClaudeCodeForDesktopEnabled !== false) return;
    let n = vS(e);
    if (n !== void 0) {
      if (n.grant.chat || n.grant.cowork) return;
      return ((o = t === null || t === void 0 ? void 0 : t.stoodIn) === null || o === void 0 ? void 0 : o.has("isClaudeCodeForDesktopEnabled")) && !t.stoodIn.has(n.key) ? { reenable: "isClaudeCodeForDesktopEnabled" } : { noSurface: true };
    }
    if (e.coworkTabEnabled !== false || e.chatTabEnabled === true) return;
    return { reenable: ((s = t === null || t === void 0 ? void 0 : t.stoodIn) === null || s === void 0 ? void 0 : s.has("isClaudeCodeForDesktopEnabled")) && !t.stoodIn.has("coworkTabEnabled") ? "isClaudeCodeForDesktopEnabled" : "coworkTabEnabled" };
  }
  function _S(e, t) {
    return Zu(e, t).map((o) => o.msg);
  }
  function Zu(e, t) {
    var o, s, n;
    let i = [], u = (b, S) => {
      i.push({ key: b, msg: S });
    }, p = { ...e };
    if (t === null || t === void 0 ? void 0 : t.mode) {
      for (let b of Z.allKeys) if (Z.deprecatedScopes(Z.getFieldMeta(b)).includes(t.mode) && p[b] !== void 0) u(b, `${b} is deprecated for ${t.mode} mode and is being ignored. Remove it from your configuration.`), delete p[b];
    }
    for (let b of Rs.builtinRuleWarnings("disabledBuiltinTools", (o = p.disabledBuiltinTools) !== null && o !== void 0 ? o : [])) u("disabledBuiltinTools", b);
    for (let b of Rs.builtinRuleWarnings("builtinToolPolicy", Object.keys((s = p.builtinToolPolicy) !== null && s !== void 0 ? s : {}))) u("builtinToolPolicy", b);
    if (p.modelDiscoveryEnabled === false && ((n = p.inferenceModels) === null || n === void 0 ? void 0 : n.some((b) => typeof (b === null || b === void 0 ? void 0 : b.name) === "string" && Ku.ANTHROPIC_TIER_NAMES.some((S) => S === b.name.toLowerCase())))) u("inferenceModels", "Aliases like 'sonnet' are resolved via model discovery. Use the full model ID.");
    if (p.inferenceCredentialKind && p.inferenceProvider && yo.credentialSpecCell(p.inferenceProvider, p.inferenceCredentialKind) === void 0) u("inferenceCredentialKind", `inferenceCredentialKind "${p.inferenceCredentialKind}" is not supported for provider "${p.inferenceProvider}" and is being ignored.`);
    if (!p.inferenceCredentialKind && p.inferenceProvider) {
      let b = yo.presentCredentialKinds(p);
      if (b.length > 1) {
        let S = yo.deriveInferenceCredentialKind(p);
        u("inferenceCredentialKind", `Multiple credential methods configured (${b.join(", ")}); using ${S}. Clear unused fields or set Credential kind explicitly to avoid ambiguity.`);
      }
    }
    if (p.inferenceProvider === "gateway" && p.inferenceGatewayAuthScheme !== "x-api-key" && p.inferenceGatewayBaseUrl) try {
      if (Hu.isAnthropicHost(new URL(p.inferenceGatewayBaseUrl).hostname)) u("inferenceGatewayBaseUrl", "Gateway baseUrl is an anthropic.com host but authScheme is not x-api-key. Consider switching to inferenceProvider: anthropic");
    } catch (b) {
    }
    let y = Yu(p, t);
    if (y && "reenable" in y) u(y.reenable, `At least one surface must remain enabled; ${y.reenable === "coworkTabEnabled" ? "Cowork" : "Code"} has been re-enabled.`);
    else if (y) u("isClaudeCodeForDesktopEnabled", "No surface is enabled, so the app has nothing to open. Turn on at least one surface.");
    return i;
  }
  $u._test = { toBoolean: Lr, normalizeWinPathJSON: bo.normalizeWinPathJSON, coerceKvRecord: Nu._test.coerceKvRecord, hybridOnlySubfieldPathsMemo: Rr };
});
