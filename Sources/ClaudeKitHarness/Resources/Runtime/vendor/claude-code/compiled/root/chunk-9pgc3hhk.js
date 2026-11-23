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
var chunk_9pgc3hhk_exports = {};
__export(chunk_9pgc3hhk_exports, {
  xGi: () => xGi
});
module.exports = __toCommonJS(chunk_9pgc3hhk_exports);
var import_chunk_t2enjxg6 = require("/$bunfs/root/chunk-t2enjxg6.js");
var import_chunk_mmevw7ty = require("/$bunfs/root/chunk-mmevw7ty.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var N = (0, import_chunk_w1d7ygsk.V)(function(H) {
  Object.defineProperty(H, "__esModule", { value: true });
  H.claudeCodeToolSearchMapping = U;
  H.claudeCodeAutoModeDisabled = te;
  H.managedMcpToolTimeoutMs = j;
  H.claudeCodePolicyEnv = ie;
  var D = (0, import_chunk_mmevw7ty.yun)(), ne = /* @__PURE__ */ new Set(["anthropic", "vertex", "bedrock", "mantle"]);
  function le(e) {
    let o = e.inference;
    if (!o || !ne.has(o.provider)) return true;
    return "baseUrl" in o && Boolean(o.baseUrl);
  }
  function U(e, o) {
    var n, l;
    if (o.thirdParty && !le(e)) return "unpinned";
    if (!o.thirdParty || !e.workspace.toolSearchEnabled) return "off";
    return ((n = e.inference) === null || n === void 0 ? void 0 : n.provider) === "gateway" && ((l = o.honorsHostToolSearch) === null || l === void 0 ? void 0 : l.call(o)) === true ? "host" : "legacy";
  }
  function te(e, o, n) {
    return o.thirdParty && !D.autoModeSurfaces(e)[n];
  }
  function j(e) {
    let o = e.mcp.toolTimeoutSec;
    return o === void 0 ? void 0 : o * 1e3;
  }
  function ie(e, o, n) {
    let { thirdParty: l } = o, t = j(e), i = e.inference, r = (i === null || i === void 0 ? void 0 : i.provider) === "gateway" ? i.streamIdleTimeoutSec : void 0, a = (i === null || i === void 0 ? void 0 : i.provider) === "gateway" && n.authEnvVar === "ANTHROPIC_API_KEY", u = U(e, o);
    return { ...e.workspace.disableBundledSkills && { CLAUDE_CODE_DISABLE_BUNDLED_SKILLS: "1" }, ...l && { CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL: "1" }, ...o.managesProviderRouting && { CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST: "1" }, ...n.authEnvVar && { CLAUDE_CODE_HOST_AUTH_ENV_VAR: n.authEnvVar }, ...n.skillSwitches && { CLAUDE_CODE_DESKTOP_SKILL_SWITCHES: "1" }, ...l && { DISABLE_GROWTHBOOK: "1", ...o.managesProviderRouting && { CLAUDE_CODE_MODEL_CATALOG: "0" }, DISABLE_TELEMETRY: e.telemetry.disableNonessential ? "1" : "", ...(e.telemetry.disableNonessential || a) && { CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: "1" }, DISABLE_FEEDBACK_COMMAND: "1", ...u !== "unpinned" && { CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS: u === "legacy" ? "" : "1" }, CLAUDE_CODE_DISABLE_FAST_MODE: "1", DISABLE_ERROR_REPORTING: e.telemetry.disableEssential ? "1" : "", ...n.diagnosticsFile !== void 0 && { CLAUDE_CODE_DIAGNOSTICS_FILE: n.diagnosticsFile }, CLAUDE_CODE_ENABLE_AUTO_MODE: D.autoModeSurfaces(e)[n.surface] ? "1" : "", ...u === "legacy" && { ENABLE_TOOL_SEARCH: "true" }, ...t !== void 0 && { MCP_TOOL_TIMEOUT: String(t) }, ...r !== void 0 && { CLAUDE_STREAM_IDLE_TIMEOUT_MS: String(r * 1e3) } } };
  }
});
var x = (0, import_chunk_w1d7ygsk.V)(function(q) {
  Object.defineProperty(q, "__esModule", { value: true });
  q.mcpToolSegment = I;
  q.mcpToolRule = A;
  q.mcpToolPoliciesBySlug = F;
  q.pluginSpelledToolPolicies = z;
  q.appendHostMcpToolRules = ue;
  q.pluginMcpToolPermissionRules = ce;
  var b = (0, import_chunk_mmevw7ty.NZ)(), g = (0, import_chunk_mmevw7ty.JEo)(), M = (0, import_chunk_mmevw7ty.RCr)();
  function I(e) {
    return e.split("*").map(g.normalizeMcpServerName).join("*");
  }
  function A(e, o) {
    let n = I(o);
    return n === "*" && !e.includes("__") ? `mcp__${e}` : `mcp__${e}__${n}`;
  }
  function F(e, o) {
    var n, l, t;
    let i = /* @__PURE__ */ new Map();
    for (let [r, a] of Object.entries(e)) {
      let u = g.normalizeMcpServerName(r);
      if (o === null || o === void 0 ? void 0 : o.configNames) {
        let d = (n = o.configNames.get(u)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set();
        d.add(r), o.configNames.set(u, d);
      }
      let s = i.get(u);
      if (!s) {
        i.set(u, { ...a });
        continue;
      }
      (l = o === null || o === void 0 ? void 0 : o.collisions) === null || l === void 0 || l.add(u), (t = o === null || o === void 0 ? void 0 : o.onCollision) === null || t === void 0 || t.call(o, r, u);
      for (let [d, v] of Object.entries(a)) {
        let m = M.strictestToolPolicy(s[d], v);
        if (m) s[d] = m;
      }
    }
    return i;
  }
  function z(e, o) {
    return Object.entries(e).flatMap(([n, l]) => Object.entries(l).map(([t, i]) => ({ rule: `${M.pluginMcpRulePrefix(o)}${g.normalizeMcpServerName(n)}__${I(t)}`, policy: i })));
  }
  function ue(e, o) {
    var n, l, t, i, r;
    let a = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map(), s = F(b.resolveMcpToolPolicies(o.policy), { onCollision: o.onNameCollision, collisions: a, configNames: u }), d = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
    for (let m of o.servers) {
      let f = g.normalizeMcpServerName(m.name), P = (n = v.get(f)) !== null && n !== void 0 ? n : /* @__PURE__ */ new Set();
      P.add(m.name), v.set(f, P);
      let y = (l = d.get(f)) !== null && l !== void 0 ? l : /* @__PURE__ */ new Set();
      for (let c of m.tools) y.add(c);
      d.set(f, y);
    }
    for (let [m, f] of s) {
      let P = Object.keys(f).some((E) => !E.includes("*")), y = v.get(m), c = (y === null || y === void 0 ? void 0 : y.size) === 1 ? [...y][0] : void 0, S = P && !a.has(m) && c !== void 0 && ((t = u.get(m)) === null || t === void 0 ? void 0 : t.has(c)) ? d.get(m) : void 0;
      for (let [E, _] of Object.entries(f)) {
        if (_ === "allow") continue;
        let w = _ === "blocked" ? "deny" : "ask";
        if (E === "*" && w === "deny" && (S === null || S === void 0 ? void 0 : S.size)) {
          for (let B of [...S].sort()) if (!Object.hasOwn(f, B) && M.lookupMcpToolPolicy(f, B) === "blocked") ((i = e.deny) !== null && i !== void 0 ? i : e.deny = []).push(A(m, B));
          continue;
        }
        ((r = e[w]) !== null && r !== void 0 ? r : e[w] = []).push(A(m, E));
      }
    }
  }
  function ce(e, o, n) {
    var l;
    if (!e.thirdParty) return { deny: [], ask: [], listedServers: 0, unlistedPlugins: 0 };
    let t = { deny: /* @__PURE__ */ new Set(), ask: /* @__PURE__ */ new Set() }, i = (s, d) => {
      if (d !== "allow") t[d === "blocked" ? "deny" : "ask"].add(s);
    }, r = [], a = /* @__PURE__ */ new Set();
    for (let s of n) if ("key" in s) r.push(s);
    else a.add(s.plugin === void 0 ? "*" : g.normalizeMcpServerName(s.plugin));
    r.sort((s, d) => s.key < d.key ? -1 : s.key > d.key ? 1 : 0);
    for (let s of r) {
      let d = g.normalizeMcpServerName(s.key);
      for (let [v, m] of Object.entries((l = b.resolvePluginMcpToolPolicy(o, s)) !== null && l !== void 0 ? l : {})) i(A(d, v), m);
    }
    let u = a.size > 0 ? b.resolvePluginMcpToolPoliciesByName(o) : {};
    for (let s of a.has("*") ? ["*"] : [...a].sort()) {
      for (let { rule: d, policy: v } of z(u, s)) i(d, v);
      if (b.isPluginMcpToolPolicyUnreadable(o)) t.deny.add(`${M.pluginMcpRulePrefix(s)}*`);
    }
    return { deny: [...t.deny], ask: [...t.ask], listedServers: r.length, unlistedPlugins: a.size };
  }
});
var oe = (0, import_chunk_w1d7ygsk.V)(function(ee) {
  Object.defineProperty(ee, "__esModule", { value: true });
  ee.claudeCodeModelSettings = J;
  ee.claudeCodeBypassPermissionsModeDisabled = Q;
  ee.claudeCodeManagedSettings = Pe;
  ee.isWebSearchExplicitlyAsk = Z;
  ee.claudeCodeOtelHeadersHelper = Te;
  ee.claudeCodePolicyFlagSettings = Oe;
  var h = (0, import_chunk_mmevw7ty.dX)(), W = (0, import_chunk_t2enjxg6.XEo)(), K = (0, import_chunk_mmevw7ty.NZ)(), G = (0, import_chunk_mmevw7ty.QEo)(), k = (0, import_chunk_mmevw7ty.yun)(), Y = (0, import_chunk_mmevw7ty.PCr)(), L = (0, import_chunk_mmevw7ty.Tjn)(), T = N(), X = x();
  function ye(e, o) {
    var n;
    let l = (n = e === null || e === void 0 ? void 0 : e.models) === null || n === void 0 ? void 0 : n.filter((t) => !o(t.name));
    if ((e === null || e === void 0 ? void 0 : e.multiplier) === void 0 && !(l === null || l === void 0 ? void 0 : l.length)) return;
    return { ...(e === null || e === void 0 ? void 0 : e.multiplier) !== void 0 && { multiplier: e.multiplier }, ...(l === null || l === void 0 ? void 0 : l.length) && { overrides: l.reduceRight((t, i) => ({ ...t, [i.name]: { input: i.inputPerMtok, output: i.outputPerMtok, cacheRead: i.cacheReadPerMtok, cacheWrite: i.cacheWritePerMtok } }), {}) } };
  }
  function J(e, o) {
    var n, l, t, i;
    if (!o.managesProviderRouting) return {};
    let { isRestrictedModel: r } = o, a = (n = o.modelNamesNeedingUpdate) === null || n === void 0 ? void 0 : n.call(o, (l = e.models) === null || l === void 0 ? void 0 : l.list), u = (i = (t = e.models) === null || t === void 0 ? void 0 : t.list) === null || i === void 0 ? void 0 : i.filter((d) => !r(d.name) && !(a === null || a === void 0 ? void 0 : a.has(d.name))).map((d) => d.name), s = ye(G.effectiveModelPricing(e), r);
    return { ...(u === null || u === void 0 ? void 0 : u.length) && { availableModels: u, enforceAvailableModels: false }, ...s && { modelPricing: s } };
  }
  function Q(e, o) {
    return o.thirdParty && e.workspace.disableBypassPermissionsMode === true;
  }
  function _e(e, o) {
    return o.thirdParty && (K.connectableMcpServers(e.mcp.managedServers).length > 0 || o.isConfigValueStoodIn("managedMcpServers"));
  }
  function be(e, o) {
    let n = o.thirdParty ? e.mcp.allowedPluginServers : void 0;
    if (n) return { strictPluginOnlyCustomization: ["mcp"], allowedMcpServers: n.map((l) => ({ serverUrl: l.serverUrl })), allowManagedMcpServersOnly: true };
    if (!_e(e, o)) return {};
    return { strictPluginOnlyCustomization: ["mcp"], ...!e.mcp.localStdioEnabled && { allowedMcpServers: [{ serverUrl: "*" }], allowManagedMcpServersOnly: true } };
  }
  function Me(e, o) {
    let n = o.thirdParty ? e.mcp.deniedPluginServers : void 0;
    return (n === null || n === void 0 ? void 0 : n.length) ? { deniedMcpServers: n.map(({ serverUrl: l }) => ({ serverUrl: l })) } : {};
  }
  function Pe(e, o, n) {
    var l, t, i, r, a, u;
    let s = J(e, o), d = o.thirdParty || o.managesProviderRouting ? null : Y.parseForceLoginOrgUUIDs(e.authentication.forceLoginOrgUUID), v = n.egressAllowedDomains, f = v && !v.includes("*") ? [...new Set(v.map(h.stripEgressEntryPort))] : void 0, P = h.safeHostname(e.otlp.endpoint), y = f ? [.../* @__PURE__ */ new Set([...f, ...P ? [P] : [], ...W.subprocessHostsForServices(e)])] : void 0, c = {};
    if (f) c.allow = f.map((_) => `WebFetch(domain:${_})`);
    if (Q(e, o)) c.disableBypassPermissionsMode = "disable";
    if (n.hostMcpServers) X.appendHostMcpToolRules(c, n.hostMcpServers);
    for (let _ of k.resolveBuiltinAskTools(e)) ((l = c.ask) !== null && l !== void 0 ? l : c.ask = []).push(_);
    for (let _ of (i = (t = e.workspace) === null || t === void 0 ? void 0 : t.disabledBuiltinTools) !== null && i !== void 0 ? i : []) if (k.isScopedBuiltinRule(_)) ((r = c.deny) !== null && r !== void 0 ? r : c.deny = []).push(_);
    if (o.thirdParty && n.webSearchBuiltinToolName && Z(e)) ((a = c.ask) !== null && a !== void 0 ? a : c.ask = []).push(n.webSearchBuiltinToolName);
    if (n.readOnlyFolderDenyRules.length > 0) ((u = c.deny) !== null && u !== void 0 ? u : c.deny = []).push(...n.readOnlyFolderDenyRules);
    let S = {};
    if (y) S.network = { allowedDomains: y, allowManagedDomainsOnly: true };
    if (n.allowedFolders) S.filesystem = { allowRead: [...n.allowedFolders], allowManagedReadPathsOnly: true };
    if (S.network || S.filesystem) {
      if (S.enabled = true, !n.shellSandboxUnavailable) S.allowUnsandboxedCommands = false;
    }
    let E = { ...T.claudeCodeToolSearchMapping(e, o) === "host" && { env: { ENABLE_TOOL_SEARCH: "force" } }, ...s, ...d && { forceLoginOrgUUID: d }, ...Object.keys(c).length > 0 && { permissions: c }, ...Object.keys(S).length > 0 && { sandbox: S }, ...T.claudeCodeAutoModeDisabled(e, o, n.surface) && { disableAutoMode: "disable" }, ...be(e, o), ...Me(e, o) };
    return Object.keys(E).length > 0 ? E : void 0;
  }
  function Z(e) {
    var o, n, l, t;
    return ((n = (o = e.workspace) === null || o === void 0 ? void 0 : o.builtinToolPolicy) === null || n === void 0 ? void 0 : n.WebSearch) === "ask" && !((t = (l = e.workspace) === null || l === void 0 ? void 0 : l.disabledBuiltinTools) === null || t === void 0 ? void 0 : t.includes("WebSearch"));
  }
  function Ee(e, o) {
    var n, l;
    if (!o.thirdParty) return;
    let t = /* @__PURE__ */ new Map();
    for (let i of (l = (n = e.models) === null || n === void 0 ? void 0 : n.list) !== null && l !== void 0 ? l : []) {
      let r = i.maxEffort;
      if (r === void 0 || r === "max") continue;
      let a = t.get(i.name);
      if (a === void 0 || L.EFFORT_LEVELS.indexOf(r) < L.EFFORT_LEVELS.indexOf(a)) t.set(i.name, r);
    }
    if (t.size === 0) return;
    return Object.fromEntries([...t].map(([i, r]) => [i, { maxEffortLevel: r }]));
  }
  function Te(e, o) {
    if (!o) return e;
    return /\.ps1$/i.test(e) ? void 0 : `"${e}"`;
  }
  function Oe(e, o, n) {
    let l = Ee(e, o), t = { ...T.claudeCodeAutoModeDisabled(e, o, n.surface) && { disableAutoMode: "disable" }, ...o.thirdParty && e.workspace.skipWebFetchPreflight === true && { skipWebFetchPreflight: true }, ...n.otelHeadersHelper && { otelHeadersHelper: n.otelHeadersHelper }, ...l && { modelSettings: l } };
    return Object.keys(t).length > 0 ? t : void 0;
  }
});
var xGi = (0, import_chunk_w1d7ygsk.V)(function(p) {
  Object.defineProperty(p, "__esModule", { value: true });
  p.isWebSearchExplicitlyAsk = p.claudeCodePolicyFlagSettings = p.claudeCodeOtelHeadersHelper = p.claudeCodeModelSettings = p.claudeCodeManagedSettings = p.claudeCodeBypassPermissionsModeDisabled = p.pluginSpelledToolPolicies = p.pluginMcpToolPermissionRules = p.mcpToolSegment = p.mcpToolRule = p.mcpToolPoliciesBySlug = p.managedMcpToolTimeoutMs = p.claudeCodeToolSearchMapping = p.claudeCodePolicyEnv = p.claudeCodeAutoModeDisabled = void 0;
  var R = N();
  Object.defineProperty(p, "claudeCodeAutoModeDisabled", { enumerable: true, get: function() {
    return R.claudeCodeAutoModeDisabled;
  } });
  Object.defineProperty(p, "claudeCodePolicyEnv", { enumerable: true, get: function() {
    return R.claudeCodePolicyEnv;
  } });
  Object.defineProperty(p, "claudeCodeToolSearchMapping", { enumerable: true, get: function() {
    return R.claudeCodeToolSearchMapping;
  } });
  Object.defineProperty(p, "managedMcpToolTimeoutMs", { enumerable: true, get: function() {
    return R.managedMcpToolTimeoutMs;
  } });
  var C = x();
  Object.defineProperty(p, "mcpToolPoliciesBySlug", { enumerable: true, get: function() {
    return C.mcpToolPoliciesBySlug;
  } });
  Object.defineProperty(p, "mcpToolRule", { enumerable: true, get: function() {
    return C.mcpToolRule;
  } });
  Object.defineProperty(p, "mcpToolSegment", { enumerable: true, get: function() {
    return C.mcpToolSegment;
  } });
  Object.defineProperty(p, "pluginMcpToolPermissionRules", { enumerable: true, get: function() {
    return C.pluginMcpToolPermissionRules;
  } });
  Object.defineProperty(p, "pluginSpelledToolPolicies", { enumerable: true, get: function() {
    return C.pluginSpelledToolPolicies;
  } });
  var O = oe();
  Object.defineProperty(p, "claudeCodeBypassPermissionsModeDisabled", { enumerable: true, get: function() {
    return O.claudeCodeBypassPermissionsModeDisabled;
  } });
  Object.defineProperty(p, "claudeCodeManagedSettings", { enumerable: true, get: function() {
    return O.claudeCodeManagedSettings;
  } });
  Object.defineProperty(p, "claudeCodeModelSettings", { enumerable: true, get: function() {
    return O.claudeCodeModelSettings;
  } });
  Object.defineProperty(p, "claudeCodeOtelHeadersHelper", { enumerable: true, get: function() {
    return O.claudeCodeOtelHeadersHelper;
  } });
  Object.defineProperty(p, "claudeCodePolicyFlagSettings", { enumerable: true, get: function() {
    return O.claudeCodePolicyFlagSettings;
  } });
  Object.defineProperty(p, "isWebSearchExplicitlyAsk", { enumerable: true, get: function() {
    return O.isWebSearchExplicitlyAsk;
  } });
});
