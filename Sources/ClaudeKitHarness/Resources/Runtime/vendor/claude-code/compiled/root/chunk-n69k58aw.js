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
var chunk_n69k58aw_exports = {};
__export(chunk_n69k58aw_exports, {
  DWa: () => DWa,
  FWa: () => FWa,
  HWa: () => HWa,
  IWa: () => IWa,
  LWa: () => LWa,
  MWa: () => MWa,
  NWa: () => NWa,
  OWa: () => OWa
});
module.exports = __toCommonJS(chunk_n69k58aw_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_7q6ee47s = require("/$bunfs/root/chunk-7q6ee47s.js");
var import_chunk_nydsr46r = require("/$bunfs/root/chunk-nydsr46r.js");
var import_chunk_pkz4wjtb = require("/$bunfs/root/chunk-pkz4wjtb.js");
var import_chunk_h70wj3wp = require("/$bunfs/root/chunk-h70wj3wp.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_util = require("util");
function f(e) {
  return `Error: --client-data-url: ${e}. Claude Code does not start without the configuration it was given; to start without it, remove the flag, or remove CLAUDE_CODE_CLIENT_DATA_URL from your environment or settings.`;
}
function m(e, { httpStatus: n, minClaudeCodeVersion: r, buildVersion: o } = {}) {
  switch (e) {
    case "invalid_url":
      return "the URL must be the https://downloads.claude.ai/ address Anthropic gave you, exactly as given";
    case "remote_session":
      return "it cannot be used in a cloud, remote-environment or ssh session, which runs Claude Code on another machine";
    case "third_party_provider":
      return "it only works when Claude Code talks to the Anthropic API directly, not through a cloud provider such as Bedrock, Vertex or Foundry, or a cloud gateway";
    case "policy_denied":
      return "your organization's policy does not allow it";
    case "not_found":
      return "there is nothing at that URL; it may have been withdrawn, so ask Anthropic for a new one";
    case "http_status":
    case "timeout":
    case "network":
    case "read_failed":
      return `Claude Code could not fetch the document from downloads.claude.ai (${e === "http_status" ? `HTTP ${n ?? "error"}` : e}); check that your network or proxy allows https://downloads.claude.ai`;
    case "too_large":
      return "the server returned something too large to be a configuration document; try again, and if it keeps happening ask Anthropic";
    case "unsigned":
    case "sidecar_invalid":
    case "bad_signature":
    case "parse_failed":
      return `the document or its signature is not valid (${e}); ask Anthropic for a new URL`;
    case "unknown_key":
    case "key_unusable":
    case "unsupported_schema":
      return `this version of Claude Code cannot read the document (${e}); update Claude Code`;
    case "replayed_version":
      return "the server returned an older document than one already accepted on this machine; a proxy on your network may be serving an old copy; if not, ask Anthropic for a new URL";
    case "below_minimum_version":
      return `the document requires Claude Code ${r} or newer and this build is ${o}; run claude update`;
    case "exception":
      return "Claude Code hit an internal error loading it; run with --debug for details";
  }
}
function A(e, n) {
  let r = v(e);
  return r === "" ? "Error: --client-data-url: the document has nothing for any model (its publisher switched it off). Remove --client-data-url or CLAUDE_CODE_CLIENT_DATA_URL, or pass --allow-other-models (CLAUDE_CODE_ALLOW_OTHER_MODELS=1) to start without applying it." : `Error: --client-data-url: the document has no entry for ${p(n)}; it has entries for models matching ${r}. Pass a matching --model, or --allow-other-models (CLAUDE_CODE_ALLOW_OTHER_MODELS=1) to start without applying it.`;
}
function E(e, n, r) {
  let o = v(e), a = (0, import_chunk_865at33z.aRr)(e, n) !== null ? `applied to ${p(n)} (document v${e.version})` : o === "" ? `loaded (document v${e.version}), nothing in it for any model (its publisher switched it off)` : `loaded (document v${e.version}), nothing in it for ${p(n)}; it has entries for models matching ${o}`;
  return r ? `${a}; base URL treated as the Anthropic API` : a;
}
function v(e) {
  return p(e.entries.map((n) => n.pattern.source).join(", "));
}
function p(e) {
  return (0, import_chunk_kx2fp6pc.Yn)((0, import_util.stripVTControlCharacters)(e));
}
var S = { id: "claude-code-settings-signing-key", spkiBase64: "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAt2ZHa0wHHzgqYgrHv/904Y4nYl675njJ2z8KPoGfQeFdhXErljNEEctLwCkgFqClT6dukctpzQ2YHmhmPEu1zYO1yo7D1tuCH8McGNY0bejSN8mE42NoVqgqMHWKShpGAE4mcEq6w0Rq/1KmmISgbUtqieOdv3ONzrHkMqhn3v6b+m3oCLYL3GRtkK/Ft8yDm4BqPY+PO27uoQH0HQ2ovIZc1hPMuWYL+q/2lhCRIM0DeC36HT6r1qmNsxj9sfdCIMnp0874v5esI3eZjdi2+v6YYZ10stRX5xoRxlTKsnbjfLzr/G9D3dc2hIivqNoZ0wyRWV0ngjv69+cyVLfUqekfQpMw4997URjXdDl7gdePgmS/qMEeDVc1BiqgkopsuG9KElJh53/xokoQVAfMpWn2r5sNXT2eeyx/nMhikqsNb1t1+birL5/hrv0QsN4d19giOqyzSjrjs4yUDe5J5J7If/zuui8vtinQg2Sm2/XsqYsIE1fkOtrvY4KeBO3l7E5aZdW/sPS3lFanjALyMr1Om7nXTtM6gpHcCjcIUH4IX6hU8m5v4H7bG9bXgUFDFZpRxNIq18POp7eApiUsKxnerhS/vO2uGMLGbBfTc4z3+IwJU6fi6wrmeMw9eooAT1TulaSkeTZ1uHJBST9UzPyp6/FCbO31bj0Lak7wzzMCAwEAAQ==" }, b = [...import_chunk_h70wj3wp.Sin, S], T = "/claude-code-releases/eap/settings-";
function R(e) {
  return e.startsWith(T) ? b : import_chunk_h70wj3wp.Sin;
}
function C() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_CLIENT_DATA_URL?.trim();
  if (!e) return { kind: "unset" };
  let n;
  try {
    n = new URL(e);
  } catch {
    return { kind: "invalid_url" };
  }
  if (n.protocol !== "https:" || n.username !== "" || n.password !== "" || n.port !== "" || !(0, import_chunk_3jjr3wje.Pee)(n.hostname) || /[?#]/.test(e) || !import_chunk_865at33z.PAl.test(n.pathname)) return { kind: "invalid_url" };
  return { kind: "ok", source: { url: n.toString(), signingContext: (0, import_chunk_865at33z.OAl)(n.pathname), cacheKey: (0, import_chunk_pkz4wjtb.Oii)(n.pathname), roots: R(n.pathname) } };
}
function u() {
  return (0, import_chunk_zhr7rpv7.vr)().clientDataUrl;
}
function OWa({ flagUrl: e, runsOnAnotherMachine: n = false, buildVersion: r = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION } = {}) {
  try {
    if (e !== void 0) import_chunk_c203g5kd.s.set("CLAUDE_CODE_CLIENT_DATA_URL", e);
    let o = C();
    if (o.kind === "unset" || !P() || U(o, n) !== void 0) return;
    let a = D(o, n, r);
    a.catch(() => {
    }), u().pending = { resolution: o, loaded: a };
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
async function IWa() {
  try {
    let e = u().pending;
    if (e === void 0) return false;
    let n = await e.loaded;
    return "document" in n && w(n.document);
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), false;
  }
}
async function MWa({ runsOnAnotherMachine: e = false, buildVersion: n = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION } = {}) {
  try {
    let r = C(), o = u().pending;
    u().pending = void 0;
    let a = o !== void 0 && F(o.resolution, r) ? o : void 0;
    if (r.kind === "unset") {
      L();
      return;
    }
    let l = U(r, e);
    if (l !== void 0 || o !== void 0 && a === void 0) L();
    if (l === void 0 && a === void 0 && !(0, import_chunk_2nv4wrez.Rn)("allow_model_catalog")) return f(m("policy_denied"));
    let d = l !== void 0 ? { failure: l } : a !== void 0 ? await a.loaded : await D(r, e, n);
    if (a !== void 0 && "failure" in d && O.has(d.failure)) d = await D(r, e, n);
    if ("failure" in d) return f(m(d.failure, d));
    if (a !== void 0 && !(0, import_chunk_2nv4wrez.Rn)("allow_model_catalog")) return f(m("policy_denied"));
    if (w(d.document)) (0, import_chunk_7q6ee47s.zvt)();
    if (r.kind === "ok") await (0, import_chunk_nydsr46r.qRn)(r.source.cacheKey, d.document);
    u().document = d.document, (0, import_chunk_w578pjby.t)(`[clientDataUrl] loaded document v${d.document.version} covering ${d.document.entries.length} model pattern(s)`);
    return;
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), f(m("exception"));
  }
}
function w(e) {
  if (u().assumesFirstPartyBaseUrl) return false;
  let n = e.entries.find((r) => r.clientData.assume_first_party_base_url === true);
  if (n === void 0 || (0, import_chunk_zhr7rpv7.pc)()) return false;
  if (import_chunk_c203g5kd.s._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL !== void 0 || y()) return (0, import_chunk_w578pjby.t)(`[clientDataUrl] assume_first_party_base_url in the document not applied: ${y() ? "the host manages the provider" : "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL is already set"}`), false;
  return u().assumesFirstPartyBaseUrl = true, (0, import_chunk_865at33z.YV)(), (0, import_chunk_865at33z.ZZ)(), (0, import_chunk_w578pjby.t)(`[clientDataUrl] assume_first_party_base_url applied (entry ${n.pattern.source}): the base URL is treated as the Anthropic API from here on`), true;
}
function HWa() {
  let { document: e } = u();
  if (e === void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_ALLOW_OTHER_MODELS) return;
  let n = (0, import_chunk_zmb62hr5.ur)((0, import_chunk_865at33z.dt)());
  return (0, import_chunk_865at33z.aRr)(e, n) === null ? A(e, n) : void 0;
}
function DWa(e, n) {
  let { document: r } = u();
  if (r === void 0) return e;
  let o = (0, import_chunk_865at33z.aRr)(r, (0, import_chunk_zmb62hr5.ur)(n ?? (0, import_chunk_865at33z.dt)()));
  return o === null ? e : { ...e, ...o };
}
function LWa(e) {
  return u().document?.entries.some((n) => n.clientData[e] !== void 0) ?? false;
}
function NWa(e) {
  let { document: n } = u();
  return n !== void 0 && n.entries.length > 0 && (0, import_chunk_865at33z.aRr)(n, (0, import_chunk_zmb62hr5.ur)(e ?? (0, import_chunk_865at33z.dt)())) === null;
}
function FWa() {
  let { document: e } = u();
  return e === void 0 ? void 0 : E(e, (0, import_chunk_zmb62hr5.ur)((0, import_chunk_865at33z.dt)()), u().assumesFirstPartyBaseUrl);
}
async function D(e, n, r) {
  let o = U(e, n);
  if (o !== void 0 || e.kind !== "ok") return { failure: o ?? "invalid_url" };
  let { source: a } = e, l = await (0, import_chunk_pkz4wjtb.SXr)({ kind: "hosted", url: a.url, trust: { kind: "compiled_roots", roots: a.roots }, cacheKey: a.cacheKey }, { noCache: true });
  if (l.status !== "ok") {
    let { httpStatus: c } = l;
    if (c === 404 || c === 410) return { failure: "not_found" };
    return { failure: l.status === "error" ? l.reason : "http_status", httpStatus: c };
  }
  if (!l.hasSidecar) {
    let { sidecarHttpStatus: c } = l;
    if (c === void 0 || c === 404 || c === 410) return { failure: "unsigned" };
    return c >= 200 && c < 300 ? { failure: "too_large" } : { failure: "http_status", httpStatus: c };
  }
  let d = await (0, import_chunk_pkz4wjtb.KRn)({ documentBytes: l.documentBytes, sidecar: l.sidecar, roots: a.roots, context: a.signingContext });
  if (!d.ok) return { failure: d.reason };
  let h = (0, import_chunk_865at33z.IAl)(l.documentBytes);
  if (!h.ok) return { failure: h.reason };
  let { document: _ } = h;
  if (_.version < await (0, import_chunk_nydsr46r.bXr)(a.cacheKey)) return { failure: "replayed_version" };
  let { minClaudeCodeVersion: g } = _;
  if (g !== void 0 && (0, import_chunk_tvttgr51._I)((0, import_chunk_tvttgr51.Zke)(r), g)) return { failure: "below_minimum_version", minClaudeCodeVersion: g, buildVersion: r };
  return { document: _ };
}
function U(e, n) {
  if (e.kind === "invalid_url") return "invalid_url";
  if (n) return "remote_session";
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return "third_party_provider";
  return;
}
function y() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST || import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_AUTH_ENV_VAR !== void 0;
}
function P() {
  return (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && !(0, import_chunk_zhr7rpv7.pc)() && import_chunk_c203g5kd.s._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL === void 0 && !y();
}
var O = /* @__PURE__ */ new Set(["network", "http_status", "read_failed"]);
function F(e, n) {
  return e.kind === "ok" ? n.kind === "ok" && e.source.url === n.source.url : n.kind === "invalid_url";
}
function L() {
  if (!u().assumesFirstPartyBaseUrl) return;
  u().assumesFirstPartyBaseUrl = false, (0, import_chunk_865at33z.YV)(), (0, import_chunk_865at33z.ZZ)(), (0, import_chunk_w578pjby.t)("[clientDataUrl] assume_first_party_base_url withdrawn: the launch does not use the document it came from");
}
