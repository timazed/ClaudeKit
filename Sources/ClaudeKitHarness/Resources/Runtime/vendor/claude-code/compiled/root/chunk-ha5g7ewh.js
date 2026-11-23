const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_ha5g7ewh_exports = {};
__export(chunk_ha5g7ewh_exports, {
  ATn: () => ATn,
  MGl: () => MGl,
  Sue: () => Sue,
  Uqr: () => Uqr,
  Yve: () => Yve,
  _7s: () => _7s,
  c6: () => c6,
  xHt: () => xHt
});
module.exports = __toCommonJS(chunk_ha5g7ewh_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_mgntjepj = require("/$bunfs/root/chunk-mgntjepj.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_fraf4m31 = require("/$bunfs/root/chunk-fraf4m31.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_p44m8w7d = require("/$bunfs/root/chunk-p44m8w7d.js");
var import_chunk_8fkaxt3d = require("/$bunfs/root/chunk-8fkaxt3d.js");
var import_chunk_yf5ktj74 = require("/$bunfs/root/chunk-yf5ktj74.js");
var import_chunk_hh28vxtr = require("/$bunfs/root/chunk-hh28vxtr.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
function Q(n, e) {
  if (e.pluginSource !== void 0 && (0, import_chunk_xcgcdx61.Iw)(e.pluginSource) === import_chunk_xcgcdx61.$p) return true;
  let r = (0, import_chunk_yf5ktj74.SUe)(n, (0, import_chunk_f9x2f6cx.iE)());
  if (r === void 0) return false;
  return r.kind === "server" || (0, import_chunk_yf5ktj74.Z9o)(e.pluginSource, r);
}
function Yve() {
  return (0, import_chunk_2gtmjt3y.Xn)() ? Q : void 0;
}
var G = (n) => Object.entries(n ?? {}).filter(([, e]) => e.pluginSource !== void 0).map(([e]) => e);
async function Uqr(n, e) {
  return 0;
}
async function MGl(n, e) {
  let r = (0, import_chunk_865at33z.ce)().listedCopyHashes;
  if (!(0, import_chunk_hh28vxtr.Ver)() || (0, import_chunk_2gtmjt3y.Xn)() || r.size === 0) return;
  try {
    let u = (/* @__PURE__ */ new Date()).toISOString();
    for (let [f, { foldedId: h, hash: c }] of r) {
      let o = n.find((p) => (0, import_chunk_xcgcdx61.Kt)((0, import_chunk_yg9g0473.ku)(p)) === h);
      if (o === void 0) continue;
      let g = (0, import_chunk_yg9g0473.ku)(o), { plugins: l } = await (0, import_chunk_bzyb60p0.Sf)(e);
      if (!(0, import_chunk_fraf4m31.Wre)(g) && ((l[g]?.[0]?.version ?? o.manifest.version) === void 0 || (o.extractedFrom ?? o.path) !== f) || l[g]?.some((p) => p.installPath === f && p.copyHash === c)) continue;
      await (0, import_chunk_bzyb60p0.KIn)(g, { ...l[g]?.[0], version: (0, import_path.basename)(f).replace(/\.zip$/, ""), resolvedVersion: void 0, installedAt: u, lastUpdated: u, installPath: f, gitCommitSha: o.gitCommitSha ?? l[g]?.[0]?.gitCommitSha }, "managed", void 0, e);
    }
    (0, import_chunk_bzyb60p0.Nrt)();
  } catch (u) {
    (0, import_chunk_w578pjby.t)(`A listed mod's copy has no install record, so the next session will not prove it: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "warn" });
  }
}
async function c6(n, e, r, u = {}) {
  var _stack = [];
  try {
    let f = u.applyStagedInstalls ?? true, h = (0, import_chunk_865at33z.ce)();
    h.partsBeingRebuilt += 1;
    let c = (0, import_chunk_xhqwsnqh.zwe)();
    const o = __using(_stack, { [Symbol.dispose]: () => {
      h.partsBeingRebuilt -= 1, (0, import_chunk_bzyb60p0._4a)(c);
    } });
    let g = (0, import_chunk_f9x2f6cx.eH)(), { changesLanded: l, holdsSet: p } = g;
    const k = __using(_stack, { [Symbol.dispose]: () => {
      g.endHoldSetBefore(p);
    } });
    let m = (0, import_chunk_865at33z.ce)().organizationAsk, F = f && (0, import_chunk_wj4me9k5.cv)() !== "unanswered" ? m.heldReresolve : null;
    if (F) m.heldReresolve = null, await F().catch(import_chunk_k449cc64.i);
    if ((0, import_chunk_w578pjby.t)("refreshActivePlugins: clearing all plugin caches"), f) (0, import_chunk_hazyxdac.wFe)(), (0, import_chunk_bzyb60p0.Nrt)();
    let _ = import_chunk_c203g5kd.s.CLAUDE_CODE_CCR_ONE_PLUGIN_LOAD_PER_RELOAD && !import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL && !(0, import_chunk_bzyb60p0.QIn)() && (0, import_chunk_865at33z.ce)().pluginLoadsRunning === 0;
    if ((0, import_chunk_bzyb60p0.Hd)(e, r, _ ? "caller" : "clear"), f) (0, import_chunk_bzyb60p0.Zza)();
    if (_) (0, import_chunk_bzyb60p0.Yen)(e, r).catch(import_chunk_k449cc64.i);
    let S;
    if (_) {
      let y = (0, import_chunk_bzyb60p0.pi)(e, r), P = await y.catch((C) => {
        (0, import_chunk_k449cc64.i)(C);
        return;
      });
      if ((0, import_chunk_865at33z.ce)().pluginLoadCacheOnly === y && !(0, import_chunk_bzyb60p0.QIn)()) S = P;
    }
    S ??= await (0, import_chunk_bzyb60p0.Ok)(e, r), await MGl(S.enabled, e), (0, import_chunk_bzyb60p0.Jen)();
    let O = (0, import_chunk_865at33z.ce)().pluginLoadCacheOnly;
    await (0, import_chunk_bzyb60p0.oos)(e), import_chunk_ha393e1n.Ue.refreshConfig();
    let A = false;
    try {
      await (0, import_chunk_bzyb60p0.n7)(e, r);
    } catch (y) {
      A = true, (0, import_chunk_k449cc64.i)(y), (0, import_chunk_w578pjby.t)(`refreshActivePlugins: loadPluginHooks failed: ${(0, import_chunk_jv7av99m.d)(y)}`);
    }
    c = (0, import_chunk_xhqwsnqh.zwe)(), (0, import_chunk_bzyb60p0.Jen)();
    let [L, I, J] = await Promise.all([(0, import_chunk_bzyb60p0.lfe)(e), (0, import_chunk_bzyb60p0.eBe)(e), H(e)]), { enabled: w, disabled: D, errors: K, warnings: X } = await (0, import_chunk_xhqwsnqh.ZG)(S), R = [], v = [], { mcp_count: B, lsp_count: M } = await z(w, R, v, e);
    await Uqr(w.filter((y) => !(0, import_chunk_bzyb60p0.k6)(y)), R);
    let x = [...X, ...v, ...(0, import_chunk_bzyb60p0.Tar)(w)], E = [...K, ...R], b = W(n, J);
    if (n.applyRefresh({ enabled: w, disabled: D, commands: L, errors: E, warnings: x, agentDefinitions: b }, u.keepsConnectorList), (0, import_chunk_bzyb60p0.Car)(e, r), !A) await (0, import_chunk_bzyb60p0.$cr)(w, e).catch(import_chunk_k449cc64.i), g.reloaded(l);
    let N = w.reduce((y, P) => {
      if (!P.hooksConfig) return y;
      return y + Object.values(P.hooksConfig).reduce((C, Y) => C + (Y?.reduce((q, Z) => q + Z.hooks.length, 0) ?? 0), 0);
    }, 0), T = (0, import_chunk_865at33z.to)();
    T.isAnnouncingFreshLoad = O !== void 0 && (0, import_chunk_865at33z.ce)().pluginLoadCacheOnly === O;
    try {
      import_chunk_bzyb60p0.rQ.emit();
    } finally {
      T.isAnnouncingFreshLoad = false;
    }
    return (0, import_chunk_w578pjby.t)(`refreshActivePlugins: ${w.length} enabled, ${L.length} commands, ${I.length} skills, ${b.allAgents.length} agents, ${N} hooks, ${B} MCP, ${M} LSP`), { enabled_count: (0, import_chunk_4smdap7r.U)(w, (y) => y.isBuiltin !== true), disabled_count: (0, import_chunk_4smdap7r.U)(D, (y) => y.isBuiltin !== true), command_count: L.length, skill_count: I.length, agent_count: b.allAgents.length, hook_count: N, mcp_count: B, lsp_count: M, error_count: E.length + (A ? 1 : 0), errors: E, warnings: x, agentDefinitions: b };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function z(n, e, r, u) {
  let [f, h] = await Promise.all([Promise.all(n.map(async (c) => {
    let o = await (0, import_chunk_bzyb60p0.DQt)(c, e, u, { warnings: r });
    return o ? Object.keys(o).length : 0;
  })), Promise.all(n.map(async (c) => {
    if (c.lspServers) return Object.keys(c.lspServers).length;
    let o = await (0, import_chunk_bzyb60p0.Bnt)(c, e, u);
    if (o) c.lspServers = o;
    return o ? Object.keys(o).length : 0;
  }))]);
  return { mcp_count: f.reduce((c, o) => c + o, 0), lsp_count: h.reduce((c, o) => c + o, 0) };
}
async function _7s(n, e, r) {
  (0, import_chunk_bzyb60p0.Jen)();
  let [{ enabled: u, disabled: f, errors: h, warnings: c }, o, g] = await Promise.all([(0, import_chunk_bzyb60p0.pi)(e, r).then(import_chunk_xhqwsnqh.ZG), (0, import_chunk_bzyb60p0.lfe)(e), H(e)]), l = [], p = [], { mcp_count: k, lsp_count: m } = await z(u.filter(import_chunk_xhqwsnqh.tzt), l, p, e);
  if (await Uqr(u.filter((j) => !(0, import_chunk_bzyb60p0.k6)(j)), l), n.applyJoin({ enabled: u, disabled: f, commands: o, errors: [...h, ...l], warnings: [...c, ...p, ...(0, import_chunk_bzyb60p0.Tar)(u)], agentDefinitions: W(n, g) }, k > 0), m > 0) (0, import_chunk_bzyb60p0.Car)(e, r);
}
async function H(n) {
  return (0, import_chunk_bzyb60p0.XD)((0, import_chunk_rb36kwbn.zC)(), n);
}
function W(n, e) {
  let r = n.flagAgents();
  return r.length === 0 ? e : (0, import_chunk_bzyb60p0.nQ)(e, [...e.allAgents, ...r]);
}
function xHt({ error_count: n, errors: e }) {
  return n - e.length + (0, import_chunk_4smdap7r.U)(e, import_chunk_mgntjepj._X);
}
async function Sue(n) {
  let e = new Set(n.mcpClients.filter((m) => m.config.pluginSource !== void 0).map((m) => m.name)), r, u = () => r ??= (0, import_chunk_bzyb60p0.Q$)(n.storageV5), f = await (0, import_chunk_bzyb60p0.Lmi)(n.dynamicMcpConfig ?? {}, n.storageV5, u, Yve());
  for (let m of G(n.dynamicMcpConfig)) f.add(m);
  let h = [...f].filter((m) => !e.has(m)).sort(), c = [...e].filter((m) => !f.has(m)).sort(), o = h.length > 0 || c.length > 0, g = (0, import_chunk_p44m8w7d.j_)() && (0, import_chunk_p44m8w7d.aLe)(n.model) && !(0, import_chunk_p44m8w7d.iLe)(n.model), l = (0, import_chunk_f9x2f6cx.rw)() > 0, p = null;
  if ((0, import_chunk_8fkaxt3d.Gbt)() && !g && l && !(0, import_chunk_0pb268nk.Lr)("lspServers")) {
    let m = (0, import_chunk_bzyb60p0.Cdi)() ? { hasServers: false, loaderFailed: false, loaderFailedApplyHealable: false, derivationFailed: false } : await ee(u, n.storageV5, n.credentials);
    if (!(0, import_chunk_bzyb60p0.K_t)()) {
      if (m.hasServers) p = "adds";
      else if (m.loaderFailedApplyHealable) p = "may-add";
    } else if (!m.hasServers && !m.derivationFailed) {
      if (m.loaderFailedApplyHealable) p = "may-remove";
      else if (!m.loaderFailed) p = "removes";
    }
  }
  return { mcpServersAdded: h, mcpServersRemoved: c, toolSearchEnabled: g, lspToolChange: p, wouldInvalidateCache: (o || p !== null) && !g && l };
}
async function ee(n, e, r) {
  let { enabled: u, errors: f } = await n(), h = false, c = f.some(import_chunk_mgntjepj.Pxe), o = f.some((l) => (0, import_chunk_mgntjepj.Pxe)(l) && !(l.type === "plugin-not-installed" && l.registryReadFailed !== true && l.loadsOnFullLoad !== true) && !(l.type === "marketplace-not-found" && l.registryReadFailed !== true) && l.type !== "dependency-version-unsatisfied" && !(l.type === "dependency-unsatisfied" && l.reason !== "not-found")), g = false;
  for (let l of u) {
    let p = [];
    try {
      let k = await (0, import_chunk_bzyb60p0.tJo)(l, p, e, r);
      if (k !== void 0 && Object.keys(k).length > 0) h = true;
    } catch {
      g = true;
    }
    if (p.length > 0) g = true;
  }
  return { hasServers: h, loaderFailed: c, loaderFailedApplyHealable: o, derivationFailed: g };
}
function ATn(n, e) {
  (0, import_chunk_y53wbr8a.a)("tengu_reload_plugins_cache_impact", { mcp_changed: n.mcpServersAdded.length > 0 || n.mcpServersRemoved.length > 0, lsp_changed: n.lspToolChange !== null, tool_search_on: n.toolSearchEnabled, warned: e.warned, forced: e.forced });
}
