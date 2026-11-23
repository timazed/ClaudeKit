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
var chunk_x333t3vy_exports = {};
__export(chunk_x333t3vy_exports, {
  C$s: () => C$s,
  V5n: () => V5n,
  mFo: () => mFo,
  pFo: () => pFo
});
module.exports = __toCommonJS(chunk_x333t3vy_exports);
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5w3q7h0v = require("/$bunfs/root/chunk-5w3q7h0v.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_jtppe9b0 = require("/$bunfs/root/chunk-jtppe9b0.js");
var import_chunk_rarmmtqn = require("/$bunfs/root/chunk-rarmmtqn.js");
var import_chunk_yv3afk5n = require("/$bunfs/root/chunk-yv3afk5n.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
var import_chunk_ts42083x = require("/$bunfs/root/chunk-ts42083x.js");
var import_chunk_08m42etc = require("/$bunfs/root/chunk-08m42etc.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
function V5n(i) {
  return i.flatMap((a) => (0, import_chunk_p1ewvgeh.nwe)((0, import_chunk_p1ewvgeh.kZ)([{ type: "addRules", destination: "session", behavior: "allow", rules: [(0, import_chunk_gbskgz33.Um)(a, "allow")] }])).map(import_chunk_qebpc5de.yn));
}
function pFo(i, a) {
  let c = V5n(a);
  if (c.length === 0) return i;
  return (0, import_chunk_w578pjby.t)(`Applying permission update: Adding ${c.length} allow rule(s) to source 'mcpMount': ${(0, import_chunk_w578pjby._)(c)}`), { ...i, alwaysAllowRules: { ...i.alwaysAllowRules, mcpMount: [...i.alwaysAllowRules.mcpMount ?? [], ...c] } };
}
function mFo(i, a, c) {
  let y = i.alwaysAllowRules.mcpMount ?? [], R = V5n(a), o = c === "every" ? y.filter((p) => !R.includes(p)) : [...y];
  if (c === "one") for (let p of R) {
    let g = o.lastIndexOf(p);
    if (g !== -1) o.splice(g, 1);
  }
  if (o.length === y.length) return i;
  return (0, import_chunk_w578pjby.t)(`Applying permission update: Removing ${y.length - o.length} allow rule(s) from source 'mcpMount', of ${(0, import_chunk_w578pjby._)(R)}`), { ...i, alwaysAllowRules: { ...i.alwaysAllowRules, mcpMount: o } };
}
function B() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
var Z = [500, 1500, 4e3, 15e3, 6e4];
function C$s(i) {
  let { getAppState: a, setAppState: c, getDynamicMcpState: y } = i.stores, R = (0, import_chunk_se72nykz.Xj)(c, "toolPermissionContext"), o = null, p = Promise.resolve(), g = false, S = false, k = a().mcp.tools, Y = i.subscribeAppState(() => {
    let e = a().mcp.tools;
    if (e !== k) k = e, v();
  }), P = false, O = false, C = 0, w = null;
  function I() {
    if (S) return false;
    if (w !== null) return true;
    let e = Z[C];
    if (e === void 0) return (0, import_chunk_w578pjby.t)("[bridge:projects] reply mount retries exhausted \u2014 the mount stays as it is until the binding changes", { level: "warn" }), false;
    return C++, w = setTimeout(() => {
      w = null, D("retry");
    }, e), w.unref(), true;
  }
  function M() {
    if (C = 0, w !== null) clearTimeout(w), w = null;
  }
  function D(e) {
    return p = p.then(() => G(e)).catch((r) => {
      (0, import_chunk_w578pjby.t)(`[bridge:projects] converge (${e}) threw: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
    }), p;
  }
  async function G(e) {
    if (S) return;
    if (e === "binding_changed") M();
    let r = await i.readHearthBinding();
    if (S) return;
    if (!r.read) {
      if ((0, import_chunk_w578pjby.t)(`[bridge:projects] binding read did not answer (${e}) \u2014 mount left as is`, { level: "warn" }), !o || x(o)) I();
      return;
    }
    if (!O && (0, import_chunk_jtppe9b0.Tml)(r.spendProject)) P = true;
    let n = (0, import_chunk_rarmmtqn.A$s)({ hearth: r.assertion }, { apiBaseUrl: i.apiBaseUrl, sessionId: i.sessionId });
    if (!n.binding) {
      if (M(), o) {
        (0, import_chunk_w578pjby.t)(`[bridge:projects] binding gone (${n.reason}, ${e}) \u2014 dropping the reply mount`);
        let s = o;
        o = null, await A(s);
      }
      return;
    }
    if (v(), o && o.binding.mountUrl === n.binding.mountUrl) {
      if (x(o)) {
        (0, import_chunk_w578pjby.t)(`[bridge:projects] the reply mount's dial had failed \u2014 dialing again (${e})`);
        let s = o;
        if (o = null, await A(s), S) return;
        await F(n.binding);
        return;
      }
      E(o, n.binding), o.binding = n.binding;
      return;
    }
    (0, import_chunk_w578pjby.t)(`[bridge:projects] joined to a project thread (${e}) \u2014 mounting the reply server`), await F(n.binding);
  }
  async function F(e) {
    if (a().mcp.clients.some((s) => s.name === import_chunk_epy4sc29.bd) || import_chunk_epy4sc29.bd in y().configs || L()) {
      (0, import_chunk_w578pjby.t)(`[bridge:projects] reply mount skipped: a server named ${import_chunk_epy4sc29.bd} is already configured`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("bridge_projects_mcp_mount", "name_taken");
      return;
    }
    let r = (0, import_chunk_qdcbcsg7.Vhe)({ ...(0, import_chunk_epy4sc29.zLl)(e.mountUrl, i.sessionId), scope: "dynamic", role: "comms" }, { getBearerToken: i.getBearerToken }), n = { binding: e, config: r, allowRules: [] };
    o = n, c((s) => (0, import_chunk_08m42etc.uKe)(s, import_chunk_epy4sc29.bd, { client: { name: import_chunk_epy4sc29.bd, type: "pending", config: r }, tools: [], commands: [] })), E(n, e), await q(n);
  }
  async function q(e) {
    let r = (0, import_chunk_yrpmp1hk.hi)(), n;
    try {
      n = { ...await B().reconnectMcpServerImpl(import_chunk_epy4sc29.bd, e.config, i.storageV5, i.credentials), attemptEpoch: r };
    } catch (b) {
      (0, import_chunk_w578pjby.t)(`[bridge:projects] reply mount connect threw: ${(0, import_chunk_jv7av99m.d)(b)}`, { level: "warn" }), n = { client: { name: import_chunk_epy4sc29.bd, type: "failed", config: e.config, error: "Connection failed" }, tools: [], commands: [], attemptEpoch: r };
    }
    if (o !== e) {
      if (n.client.type === "connected") await B().detachAndCloseConnection(n.client);
      return;
    }
    let s = (0, import_chunk_ts42083x.B1e)(i.stores, import_chunk_epy4sc29.bd, n);
    if (s !== "applied") {
      (0, import_chunk_cqa9hrgx.l)("bridge_projects_mcp_mount", s), v();
      return;
    }
    if (n.client.type === "connected") M(), (0, import_chunk_yv3afk5n.m4e)(import_chunk_epy4sc29.bd, void 0), (0, import_chunk_cqa9hrgx.u)("bridge_projects_mcp_mount");
    else if (V(n.client)) if ((0, import_chunk_yv3afk5n.m4e)(import_chunk_epy4sc29.bd, Object.assign(Error("reply mount dial failed"), { mcpErrorSource: "downstream_unreachable" })), I()) (0, import_chunk_cqa9hrgx.l)("bridge_projects_mcp_mount", "settled_failed_retrying");
    else (0, import_chunk_cqa9hrgx.m)("bridge_projects_mcp_mount", "settled_failed");
    else (0, import_chunk_cqa9hrgx.m)("bridge_projects_mcp_mount", n.client.type === "failed" ? `settled_failed_${(n.client.errorCode ?? "answered").toLowerCase()}` : `settled_${n.client.type}`);
  }
  function x(e) {
    let r = a().mcp.clients.find((n) => n.name === import_chunk_epy4sc29.bd);
    return r !== void 0 && r.config === e.config && V(r);
  }
  async function A(e) {
    j(e.allowRules);
    let r = a().mcp.clients.find((s) => s.name === import_chunk_epy4sc29.bd);
    if (r && r.config !== e.config) {
      await U(e.config);
      return;
    }
    let n = (0, import_chunk_px0hhsq7.Rr)(import_chunk_epy4sc29.bd);
    c((s) => {
      let { [import_chunk_epy4sc29.bd]: b, ...T } = s.mcp.resources, { [import_chunk_epy4sc29.bd]: N, ...H } = s.mcp.resourceTemplates;
      return { ...s, mcp: { ...s.mcp, clients: s.mcp.clients.filter((h) => h !== r), tools: s.mcp.tools.filter((h) => !(0, import_chunk_px0hhsq7.Bu)(h, import_chunk_epy4sc29.bd, n)), commands: s.mcp.commands.filter((h) => !(0, import_chunk_bzyb60p0.ZE)(h, import_chunk_epy4sc29.bd)), resources: T, resourceTemplates: H } };
    }), await U(e.config);
  }
  function v() {
    if (!o) return;
    let e = a().mcp.clients.find((n) => n.name === import_chunk_epy4sc29.bd);
    if (e && e.config === o.config && !L()) {
      if (!g) E(o, o.binding);
      return;
    }
    (0, import_chunk_w578pjby.t)("[bridge:projects] the reply mount\u2019s name is no longer held by its own row \u2014 retracting its pre-approvals", { level: "warn" });
    let r = o;
    o = null, A(r);
  }
  function L() {
    return Object.hasOwn(i.sdkHostConfigs(), import_chunk_epy4sc29.bd);
  }
  function z(e) {
    if (!Object.hasOwn(e, import_chunk_epy4sc29.bd)) return;
    if (g = true, !o) return;
    let r = o.allowRules;
    o.allowRules = [], j(r);
  }
  function J() {
    g = false, v();
  }
  function E(e, r) {
    if (g) return;
    let n = a().mcp.tools, s = (0, import_chunk_5w3q7h0v.$fe)(n) && (0, import_chunk_epy4sc29.LPe)(n).postIsAnswer, b = r.autoAllowTools.filter((f) => s || !Object.hasOwn(import_chunk_epy4sc29.Nhn, f)).map((f) => (0, import_chunk_qebpc5de.yn)({ toolName: (0, import_chunk_px0hhsq7.lr)(import_chunk_epy4sc29.bd, f) }));
    if (b.length < r.autoAllowTools.length) (0, import_chunk_w578pjby.t)("[bridge:projects] the listed tools are not a thread\u2019s: holding back the thread-only pre-approvals");
    let T = new Set(b), N = new Set(e.allowRules), H = e.allowRules.filter((f) => !T.has(f));
    if (H.length > 0) j(H);
    let h = e.allowRules.filter((f) => T.has(f)), X = K(b.filter((f) => !N.has(f)));
    e.allowRules = [...h, ...X];
  }
  function K(e) {
    if (S) return [];
    let r = V5n(e);
    return R((n) => pFo(n, r)), r;
  }
  function j(e) {
    R((r) => mFo(r, e, "one"));
  }
  function U(e) {
    return B().clearServerCache(import_chunk_epy4sc29.bd, e).catch((r) => {
      (0, import_chunk_w578pjby.t)(`[bridge:projects] reply mount cleanup failed: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
    });
  }
  function W() {
    if (O = true, P) P = false, (0, import_chunk_jtppe9b0.Cml)();
  }
  function Q() {
    if (S = true, Y(), M(), W(), o) {
      let e = o.allowRules;
      o.allowRules = [], j(e);
    }
    return p = p.then(async () => {
      if (!o) return;
      (0, import_chunk_w578pjby.t)("[bridge:projects] dropping the reply mount");
      let e = o;
      o = null, await A(e);
    }).catch((e) => {
      (0, import_chunk_w578pjby.t)(`[bridge:projects] drop threw: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
    }), p;
  }
  return { sync: D, drop: Q, reassertOwnership: v, suspendAllowsForApply: z, reassertAfterApply: J, retireStatedProject: W, current: () => o?.binding ?? null, projectFilesDoor: () => o ? { channelId: o.binding.channelId, sessionId: i.sessionId, apiBaseUrl: i.apiBaseUrl, getBearerToken: i.getBearerToken, getWorkerEpoch: i.getWorkerEpoch } : null };
}
function V(i) {
  return i.type === "failed" && !ee.has(i.errorCode ?? "");
}
var ee = /* @__PURE__ */ new Set(["CLI_OWNED_BEARER_REJECTED", "POLICY_BLOCKED", "APPROVAL_REQUIRED", "DISABLED", "IDENTITY_CHANGED", "SHUTTING_DOWN"]);
