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
var chunk_3vzjwsvy_exports = {};
__export(chunk_3vzjwsvy_exports, {
  Ajn: () => Ajn
});
module.exports = __toCommonJS(chunk_3vzjwsvy_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6wkvjx00 = require("/$bunfs/root/chunk-6wkvjx00.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var X = 262144, Y = 32, Z = 10, q = 500, B = [["allowedProviders"], ["availableModels"], ["availableModelsMatch"], ["enforceAvailableModels"], ["allowManagedPermissionRulesOnly"], ["sandbox", "filesystem", "allowManagedReadPathsOnly"], ["sandbox", "network", "allowManagedDomainsOnly"], ["sandbox", "enabled"], ["sandbox", "credentials"], ["allowedMarketplaces"], ["strictKnownMarketplaces"], ["skipWebFetchPreflight"]], Q = /^(?!\s*[\\/]{2})(?=.*\S)[^\u0000-\u001f\u007f-\u009f\u2028\u2029]{1,4096}$/, F = [["disabledMcpjsonServers"], ["sandbox", "filesystem", "denyRead"], ["sandbox", "filesystem", "denyWrite"], ["sandbox", "network", "deniedDomains"]], ee = /* @__PURE__ */ new Set(["CLAUDE_CODE_DISABLE_AGENT_VIEW", "CLAUDE_CODE_DISABLE_ARTIFACT", "CLAUDE_CODE_DISABLE_BACKGROUND_TASKS", "CLAUDE_CODE_DISABLE_BUNDLED_SKILLS", "CLAUDE_CODE_DISABLE_CRON", "CLAUDE_CODE_DISABLE_FAST_MODE", "CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY", "CLAUDE_CODE_DISABLE_WORKFLOWS", "DISABLE_BUG_COMMAND", "DISABLE_FEEDBACK_COMMAND"]), ne = /* @__PURE__ */ new Set(["CLAUDE_CODE_ENABLE_TELEMETRY", "OTEL_LOG_ASSISTANT_RESPONSES", "OTEL_LOG_TOOL_CONTENT", "OTEL_LOG_TOOL_DETAILS", "OTEL_LOG_USER_PROMPTS", "OTEL_RESOURCE_INCLUDE_HOST"]), te = /* @__PURE__ */ new Set(["BASH_DEFAULT_TIMEOUT_MS", "BASH_MAX_OUTPUT_LENGTH", "BASH_MAX_TIMEOUT_MS", "CLAUDE_CODE_MAX_OUTPUT_TOKENS", "MAX_MCP_OUTPUT_TOKENS", "MAX_THINKING_TOKENS", "MCP_TIMEOUT", "MCP_TOOL_TIMEOUT"]), j = /^\d{1,9}$/, se = /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028-\u202e\u2060-\u2069\ud800-\udfff\ufeff\u{e0000}-\u{e007f}]/gu, k = [["strictPluginOnlyCustomization"], ["permissions", "deny"], ["permissions", "ask"], ["blockedMarketplaces"], ["deniedMcpServers"], ["deniedModels"], ...F];
function Ajn(n, i, r = X) {
  if (n === void 0 || n === null) return { settings: i, notApplied: { names: [], more: 0 } };
  if (!(0, import_chunk_ma3kja9f.T)(n) || (0, import_chunk_6mfepmbb.PJe)(n, Y) || Number.isFinite(r) && Buffer.byteLength((0, import_chunk_w578pjby._)(n)) > r) return { settings: i, notApplied: { names: [], more: 0, unreadable: true } };
  let f = (0, import_chunk_xcgcdx61.qKt)(n), u = /* @__PURE__ */ new Set([...Object.keys(f ?? {}), ...(0, import_chunk_8hfdvrr1.a$)().map(({ path: e }) => e[0])]), A = V((0, import_chunk_gd77dyw4.Hr)(n, (e, t) => u.has(t)));
  for (let e of B) if (d(A, e) !== void 0) (0, import_chunk_8hfdvrr1.l_)(A, e, void 0);
  let E = (0, import_chunk_6mfepmbb.s2)(A, "claudeCode.settings").settings ?? {}, c = (0, import_chunk_6mfepmbb.xM)({}, f, (0, import_chunk_xcgcdx61.qKt)(E), W);
  for (let e of k) if ((0, import_chunk_f9x2f6cx.bp)(d(c, e), []) && !(0, import_chunk_f9x2f6cx.bp)(d(n, e), [])) (0, import_chunk_8hfdvrr1.l_)(c, e, void 0);
  (0, import_chunk_xcgcdx61.OHo)(c);
  for (let e of B) (0, import_chunk_8hfdvrr1.l_)(c, e, void 0);
  if (Array.isArray(n.companyAnnouncements)) {
    let e = n.companyAnnouncements.filter((t) => typeof t === "string").map((t) => [...t.replace(/[\t\n\r]+/g, " ").replace(se, "")].slice(0, q).join("")).filter((t) => t.trim() !== "").slice(0, Z);
    if (e.length > 0) c.companyAnnouncements = e;
  }
  if (n.includeCoAuthoredBy === false) c.includeCoAuthoredBy = false;
  for (let e of ["commit", "pr"]) if (n.attribution === false || (0, import_chunk_8hfdvrr1.fc)(n, ["attribution", e]) === "") (0, import_chunk_8hfdvrr1.l_)(c, ["attribution", e], "");
  let y = (0, import_chunk_6mfepmbb.s2)(c, "claudeCode.settings"), a = {};
  for (let e of b(c)) {
    let t = d(y.settings, e);
    if (Object.hasOwn((0, import_chunk_xcgcdx61.zut)().shape, e[0]) && H(d(c, e), t)) (0, import_chunk_8hfdvrr1.l_)(a, e, t);
  }
  for (let e of (0, import_chunk_8hfdvrr1.a$)()) {
    let { path: t } = e, o = d(a, t), l = t.join(".");
    if (o !== void 0 && !Array.isArray(o) && !((0, import_chunk_8hfdvrr1.d0r)(e, o) && (o === d(n, t) || o === d(E, t) || l === "allowManagedHooksOnly" && n.disableAllHooks === true || l === "attribution.sessionUrl" && n.attribution === false))) (0, import_chunk_8hfdvrr1.l_)(a, t, void 0);
  }
  for (let e of [E, a]) {
    let t = e.strictPluginOnlyCustomization;
    if (t !== void 0) {
      let o = (0, import_chunk_4smdap7r.M)(t === true ? import_chunk_xcgcdx61.pEe : Array.isArray(t) ? t : []).filter((l) => l !== "agents");
      if (o.length > 0) e.strictPluginOnlyCustomization = o;
      else delete e.strictPluginOnlyCustomization;
    }
  }
  for (let e of F) {
    let t = d(a, e), o = Array.isArray(t) ? t.filter((l) => typeof l === "string" && Q.test(l) && !(0, import_chunk_z6pfqf6e.$r)(l.trim())) : [];
    if (Array.isArray(t) && o.length < t.length) (0, import_chunk_8hfdvrr1.l_)(a, e, o.length > 0 ? o : void 0);
  }
  if ((0, import_chunk_8hfdvrr1.fc)(a, ["sandbox", "filesystem"]) !== void 0) (0, import_chunk_8hfdvrr1.l_)(a, ["sandbox", "filesystem", "disabled"], false);
  if ((a.allowedMcpServers ?? i.allowedMcpServers) === void 0) delete a.allowManagedMcpServersOnly;
  let m = {};
  for (let [e, t] of Object.entries((0, import_chunk_ma3kja9f.T)(n.env) ? n.env : {})) {
    let o = typeof t === "number" || typeof t === "boolean" ? String(t) : t;
    if (typeof o === "string" && e === e.toUpperCase() && ((0, import_chunk_gd77dyw4.lLr)(e, o) || (ee.has(e) && (0, import_chunk_69qhefwa.Ne)(o) || ne.has(e) && (0, import_chunk_69qhefwa.Oi)(o) || te.has(e) && j.test(o)) && (0, import_chunk_gd77dyw4.ROe)(e, o) && !(0, import_chunk_gd77dyw4.LEe)(e))) m[e] = j.test(o) ? o : (0, import_chunk_69qhefwa.Ne)(o) ? "1" : "0";
  }
  if (Object.keys(m).length > 0) a.env = m;
  let O = oe(a, i), { $schema: h, env: S, ...p } = n;
  for (let [e, t] of Object.entries(p)) if (e === "disableAllHooks" && t === true && a.allowManagedHooksOnly || e === "attribution" && t === false) delete p[e];
  let { env: R = {}, ...x } = a, U = C(p, a, (0, import_chunk_xcgcdx61.zut)()), G = C(x, O, (0, import_chunk_xcgcdx61.zut)()), v = (0, import_chunk_ma3kja9f.T)(S) ? Object.keys(S).filter((e) => !Object.hasOwn(R, e) || R[e] !== O.env?.[e]) : S === void 0 ? [] : [""], J = new Set((0, import_chunk_c203g5kd.Tce)(import_chunk_c203g5kd.s)), I = v.filter((e) => /^[A-Z][A-Z0-9_]{0,63}$/.test(e) && ((0, import_chunk_gd77dyw4.LEe)(e) || (0, import_chunk_gd77dyw4.ROe)(e, "1") || (0, import_chunk_gd77dyw4.ROe)(e, "0") || J.has(e))).map((e) => `env.${e}`), z = b(n).map((e) => e.join(".")), N = (0, import_chunk_6wkvjx00.Xle)((0, import_chunk_4smdap7r.M)(b(a).flatMap((e) => {
    let t = d(a, e);
    if (!(0, import_chunk_f9x2f6cx.bp)(t, d(E, e)) || !(0, import_chunk_f9x2f6cx.bp)(t, d(O, e))) return [];
    let o = n, l = 0;
    while (l < e.length && (0, import_chunk_ma3kja9f.T)(o) && Object.hasOwn(o, e[l])) o = o[e[l++]];
    if (l === e.length && H(o, t) || e[0] === "attribution" && o === false || e[0] === "strictPluginOnlyCustomization" && o === true) return [];
    let w = false;
    if (l === e.length && l > 1) {
      let g = (0, import_chunk_xcgcdx61.zut)();
      for (let P of e) {
        let D = g && (0, import_chunk_xcgcdx61.rDr)(g);
        g = D && Object.hasOwn(D.shape, P) ? D.shape[P] : void 0;
      }
      w = (0, import_chunk_f9x2f6cx.bp)(g?.safeParse(o).data, o);
    }
    return [(l === 0 ? e : e.slice(0, w ? -1 : l)).join(".")];
  })), (e) => z.findIndex((t) => t === e || t.startsWith(`${e}.`)));
  return { settings: O, notApplied: { names: [...K((0, import_chunk_4smdap7r.M)([...U.names, ...G.names])), ...I].filter((e) => !N.includes(e)), more: U.more + v.length - I.length, ...N.length > 0 && { atStrictest: K(N) } } };
}
function oe(n, i) {
  let r = (0, import_chunk_6mfepmbb.xM)({}, n, i, W);
  for (let f of k) {
    let [u, A] = [(0, import_chunk_8hfdvrr1.fc)(n, f), (0, import_chunk_8hfdvrr1.fc)(i, f)];
    if (Array.isArray(u) && Array.isArray(A)) (0, import_chunk_8hfdvrr1.l_)(r, f, (0, import_chunk_pbteexar.Ls)([...A, ...u], L));
  }
  return r;
}
function b(n, i = 0) {
  return (0, import_chunk_ma3kja9f.T)(n) && i < 3 ? Object.entries(n).flatMap(([r, f]) => b(f, i + 1).map((u) => [r, ...u])) : [[]];
}
function d(n, i) {
  let r = n;
  for (let f of i) {
    if (!(0, import_chunk_ma3kja9f.T)(r) || !Object.hasOwn(r, f)) return;
    r = r[f];
  }
  return r;
}
function H(n, i) {
  return Array.isArray(n) && Array.isArray(i) ? i.length > 0 || n.length === 0 : (0, import_chunk_f9x2f6cx.bp)(n, i);
}
function L(n) {
  return (0, import_chunk_w578pjby._)((0, import_chunk_xcgcdx61.sF)(n));
}
function C(n, i, r, f = []) {
  let u = { names: [], more: 0 };
  for (let [A, E] of Object.entries(n)) {
    let c = [...f, A], y = d(i, c);
    if (Array.isArray(y) && Array.isArray(E) && k.some((S) => (0, import_chunk_f9x2f6cx.bp)(S, c))) {
      let S = new Set(y.map(L));
      if (E.every((p) => S.has(L(p)))) continue;
    } else if ((0, import_chunk_f9x2f6cx.bp)(y, E)) continue;
    if (!Object.hasOwn(r.shape, A)) {
      u.more++;
      continue;
    }
    let a = c.join("."), m = (0, import_chunk_ma3kja9f.T)(E) && (0, import_chunk_xcgcdx61.cqn)(a) ? E : void 0, O = m && (0, import_chunk_xcgcdx61.rDr)(r.shape[A]);
    if (m === void 0 || O === void 0) {
      u.names.push(a);
      continue;
    }
    let h = C(m, i, O, c);
    u.names.push(...h.names), u.more += h.more;
  }
  return u;
}
function K(n) {
  return (0, import_chunk_6mfepmbb.Wl)(n, (i) => !i.includes(".")).flat();
}
function V(n) {
  return Object.fromEntries(Object.entries(n).filter(([, i]) => i !== null).map(([i, r]) => [i, (0, import_chunk_ma3kja9f.T)(r) ? V(r) : r]));
}
function W(n, i) {
  return Array.isArray(i) ? i : void 0;
}
