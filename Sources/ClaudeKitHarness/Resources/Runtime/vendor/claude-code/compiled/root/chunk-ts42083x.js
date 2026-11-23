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
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
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
var chunk_ts42083x_exports = {};
__export(chunk_ts42083x_exports, {
  B1e: () => B1e,
  Sha: () => Sha,
  _Ot: () => _Ot,
  _ha: () => _ha,
  bha: () => bha,
  fBs: () => fBs,
  gha: () => gha,
  hha: () => hha,
  mBs: () => mBs,
  mUr: () => mUr,
  pBs: () => pBs,
  pUr: () => pUr,
  v1o: () => v1o,
  yha: () => yha
});
module.exports = __toCommonJS(chunk_ts42083x_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_m0xr8k74 = require("/$bunfs/root/chunk-m0xr8k74.js");
var import_chunk_gz6chcf8 = require("/$bunfs/root/chunk-gz6chcf8.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
var import_chunk_y8s4362z = require("/$bunfs/root/chunk-y8s4362z.js");
var import_chunk_vfrxshmx = require("/$bunfs/root/chunk-vfrxshmx.js");
var import_chunk_6wgyy4rn = require("/$bunfs/root/chunk-6wgyy4rn.js");
var import_chunk_bmzkpe8r = require("/$bunfs/root/chunk-bmzkpe8r.js");
var import_chunk_q8r3eqnc = require("/$bunfs/root/chunk-q8r3eqnc.js");
var import_chunk_08m42etc = require("/$bunfs/root/chunk-08m42etc.js");
var import_chunk_478m53m1 = require("/$bunfs/root/chunk-478m53m1.js");
var import_chunk_2qx36shh = require("/$bunfs/root/chunk-2qx36shh.js");
var import_chunk_8yvg0j99 = require("/$bunfs/root/chunk-8yvg0j99.js");
var import_chunk_538r8e0n = require("/$bunfs/root/chunk-538r8e0n.js");
var import_chunk_tntx4v84 = require("/$bunfs/root/chunk-tntx4v84.js");
var import_chunk_8v27xkv5 = require("/$bunfs/root/chunk-8v27xkv5.js");
var import_chunk_81nggker = require("/$bunfs/root/chunk-81nggker.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_hy0sycbj = require("/$bunfs/root/chunk-hy0sycbj.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function Y() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
function hha(e, n) {
  return { ...n, clients: (0, import_chunk_4smdap7r.Xy)(n.clients, e.clients) ? e.clients : n.clients, tools: (0, import_chunk_4smdap7r.Xy)(n.tools, e.tools) ? e.tools : n.tools };
}
function fBs(e, n, o, f) {
  if (Object.hasOwn(n, e)) return n[e];
  if (o && !import_chunk_bzyb60p0.hQ.has(o.scope)) return o;
  return f ? f(e) : o ?? null;
}
function gha(e, n) {
  if (!e.clients.some((o) => o.name === n)) return e;
  return { ...e, clients: e.clients.map((o) => o.name === n ? { name: n, type: "disabled", config: o.config } : o), tools: (0, import_chunk_bzyb60p0.nfe)(e.tools, n) };
}
function pUr(e) {
  return e.client.type === "needs-auth" ? { ...e, tools: (0, import_chunk_6wgyy4rn.Jte)(e.client.name, e.client.config) } : e;
}
function v1o(e, n) {
  let o = (0, import_chunk_px0hhsq7.Rr)(n);
  return { tools: e.tools.filter((f) => (0, import_chunk_px0hhsq7.Bu)(f, n, o)), commands: e.commands.filter((f) => (0, import_chunk_bzyb60p0.ZE)(f, n)), resources: e.resources[n], resourceTemplates: e.resourceTemplates[n] };
}
function _Ot(e, n) {
  let o = n.type !== "failed" ? (0, import_chunk_bzyb60p0.zu)(e, n.config) : void 0;
  if (o === "managed-policy") return ee(e, n.config, o);
  if ((0, import_chunk_bzyb60p0.gi)(e) && !(0, import_chunk_bzyb60p0.VUe)(n)) return { name: e, type: "disabled", config: n.config };
  return o ? ee(e, n.config, o) : void 0;
}
function ee(e, n, o) {
  return { name: e, type: "failed", config: n, ...(0, import_chunk_bzyb60p0.iw)(o, e, n) };
}
function ae(e, n) {
  return n.asked || e === void 0 || (0, import_chunk_8v27xkv5.t5)(n.client, e.config) === n.client ? n : (0, import_chunk_8yvg0j99.fq)(e.config, n);
}
function me(e, n, o) {
  let { incoming: f, result: w, outcome: A } = o;
  if (A === "refused") {
    let g = f.asked ? w.client : (0, import_chunk_q8r3eqnc.Jwn)(w.client, n.config);
    return g === w.client ? w : { ...w, client: g };
  }
  if ((0, import_chunk_8v27xkv5.t5)(w.client, n.config) === w.client) return w;
  let i = ae(n, f);
  if (i.client.type === "disabled") return i;
  let R = _Ot(e, i.client);
  return R ? { ...i, client: R, tools: [], commands: [] } : i;
}
function B1e(e, n, o) {
  let { getAppState: f, setAppState: w, getDynamicMcpState: A, setDynamicMcpState: i } = e, R = () => {
    if (o.client.type === "connected") Y().detachAndCloseConnection(o.client).catch(() => {
    });
  }, g = f().mcp.clients.find((M) => M.name === n), C = A().clients.find((M) => M.name === n);
  if (!g && !C) return R(), "dropped";
  let r = (0, import_chunk_3bjtjsgp.Uo)(n, o.client.config), _ = (M) => M !== void 0 && (0, import_chunk_3bjtjsgp.Uo)(n, M.config) !== r;
  if (_(g) || _(C)) return (0, import_chunk_w578pjby.t)(`[MCP] ${n}: dropping a settlement whose slot config changed mid-flight`), R(), "dropped";
  if ((0, import_chunk_yrpmp1hk.rJt)(o.client.config, o.attemptEpoch)) return (0, import_chunk_w578pjby.t)(`[MCP] ${n}: settlement superseded by an account switch \u2014 closed, not installed (the identity boundary owns the row)`), R(), "superseded";
  let T = ae(g ?? C, o), v = T, P = "applied";
  if (T.client.type !== "disabled") {
    let M = _Ot(n, T.client);
    if (M) {
      if (R(), M.type === "failed") Y().dropDiscoveryEntry(n, T.client.config).catch(() => {
      });
      v = { client: M, tools: [], commands: [], resources: [], attemptEpoch: o.attemptEpoch }, P = "refused";
    }
  }
  if (w((M) => {
    let k = (0, import_chunk_08m42etc.uKe)(M, n, v, { appendIfAbsent: v.client.config.type !== "sdk" }), L = !!v.resources && v.resources.length > 0, F = !!v.resourceTemplates && v.resourceTemplates.length > 0;
    return L && F ? k : { ...k, mcp: { ...k.mcp, resources: L ? k.mcp.resources : (0, import_chunk_y8kqnbqt.wE)(k.mcp.resources, n), resourceTemplates: F ? k.mcp.resourceTemplates : (0, import_chunk_y8kqnbqt.wE)(k.mcp.resourceTemplates, n) } };
  }), !C) return P;
  let s = (0, import_chunk_px0hhsq7.Rr)(n), h = A(), I = g === void 0 ? v : me(n, C, { incoming: o, result: v, outcome: P });
  return i({ ...h, clients: h.clients.map((M) => M.name === n ? I.client : M), tools: [...h.tools.filter((M) => !(0, import_chunk_px0hhsq7.Bu)(M, n, s)), ...I.tools] }), P;
}
function le({ getAppState: e, setAppState: n, getDynamicMcpState: o, setDynamicMcpState: f }) {
  return { getClients: () => e().mcp.clients, getSuppressedPluginServers: () => e().mcp.suppressedPluginMcpServers ?? [], applyMcpUpdate: (w) => {
    let A = /* @__PURE__ */ new Set();
    if (n((g) => {
      let C = w(g.mcp), r = new Set(C.clients.map((_) => _.name));
      return A = new Set(g.mcp.clients.filter((_) => !r.has(_.name)).map((_) => _.name)), { ...g, mcp: C };
    }), A.size === 0) return;
    let i = o();
    if (!i.clients.some((g) => A.has(g.name))) return;
    let R = [...A].map((g) => [g, (0, import_chunk_px0hhsq7.Rr)(g)]);
    f({ ...i, clients: i.clients.filter((g) => !A.has(g.name)), tools: i.tools.filter((g) => !R.some(([C, r]) => (0, import_chunk_px0hhsq7.Bu)(g, C, r))) });
  } };
}
function _ha(e) {
  let n = (0, import_chunk_qdcbcsg7.mt)(), o = Promise.all([n.headlessConnectorMountInFlight, n.headlessConnectorsAtStart]).then(() => {
    if (!(0, import_chunk_bzyb60p0.HNt)()) throw new import_chunk_jv7av99m.gr("This session does not load claude.ai connectors.");
    return (0, import_chunk_6wgyy4rn.Jqe)(e.storageV5), (0, import_chunk_vfrxshmx._Bs)(le(e), e.storageV5, e.credentials, true);
  }), f = o.then((w) => w.settled).catch(() => {
  }).finally(() => {
    if (n.headlessConnectorMountInFlight === f) n.headlessConnectorMountInFlight = void 0;
  });
  return n.headlessConnectorMountInFlight = f, o.then((w) => w.mounted).then(() => {
  });
}
function mUr(e) {
  if (!(0, import_chunk_sjqze7qg.U_)()) return;
  let { getAppState: n, setAppState: o, getDynamicMcpState: f, setDynamicMcpState: w, storageV5: A, credentials: i, force: R = false, spareUnchangedFrom: g } = e;
  (0, import_chunk_6wgyy4rn.Jqe)(A);
  let C = Y(), r = (0, import_chunk_qdcbcsg7.mt)();
  if (!C.mcpIdentityChangedSinceLastCheck() && !R) return r.headlessConnectorMountInFlight;
  let _ = !R || !(0, import_chunk_sjqze7qg.zso)((0, import_chunk_yrpmp1hk.n0t)()), T = f(), v = [...n().mcp.clients, ...T.clients], P = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
  if (g) {
    for (let c of v) I.add(c.name);
    for (let c of v) if (!g.has(c) || c.type === "pending") I.delete(c.name);
  }
  for (let c of v) {
    if (!(0, import_chunk_yrpmp1hk.qL)(c.config) || I.has(c.name)) {
      h.add((0, import_chunk_3bjtjsgp.Uo)(c.name, c.config));
      continue;
    }
    if (C.disposeServerConnectionDetached(c.name, c.config), c.config.scope === "claudeai") {
      s.add(c.name);
      continue;
    }
    if (c.type !== "disabled") P.add(c.name);
  }
  C.evictAllMcpMemosOnIdentityChange(h, (0, import_chunk_yrpmp1hk.OYr)(v)), (0, import_chunk_gz6chcf8.cU)().clear();
  let M = /* @__PURE__ */ Object.create(null), k = /* @__PURE__ */ new Set(), L = e.getHostOwnedConfigs?.() ?? T.configs;
  for (let c of v) {
    if (!P.has(c.name) || !_) continue;
    let b = M[c.name] ?? fBs(c.name, L, c.config, import_chunk_bzyb60p0.xP);
    if (!b) {
      k.add(c.name);
      continue;
    }
    let D = M[c.name] ??= b;
    if (D !== c.config && (0, import_chunk_3bjtjsgp.Uo)(c.name, D) !== (0, import_chunk_3bjtjsgp.Uo)(c.name, c.config)) (0, import_chunk_w578pjby.t)(`[MCP] ${c.name}: appState and dynamic-store rows disagree on config at the identity boundary \u2014 converging both under the ${Object.hasOwn(L, c.name) ? "host's" : "appState row's"} config and re-dialing it`, { level: "warn" });
  }
  let F = /* @__PURE__ */ new Map(), W = (0, import_chunk_bzyb60p0.HNt)() && _, B = /* @__PURE__ */ Object.create(null);
  for (let [c, b] of Object.entries(M)) {
    if (W && (0, import_chunk_bzyb60p0.Uns)(b)) {
      B[c] = b, delete M[c];
      continue;
    }
    let D = (0, import_chunk_bzyb60p0.zu)(c, b);
    if (D) F.set(c, ee(c, b, D)), delete M[c];
  }
  let x = [...P, ...s];
  if (x.length > 0) {
    let c = x.map((y) => [y, (0, import_chunk_px0hhsq7.Rr)(y)]), b = (y) => c.some(([U, Z]) => (0, import_chunk_px0hhsq7.Bu)(y, U, Z)), D = (y) => s.has(y.name) ? [] : P.has(y.name) ? [!_ || k.has(y.name) ? (0, import_chunk_yrpmp1hk.Ror)(y.name, y.config) : F.get(y.name) ?? { name: y.name, type: "pending", config: M[y.name] ?? B[y.name] ?? y.config }] : [y];
    o((y) => ({ ...y, mcp: { ...y.mcp, clients: y.mcp.clients.flatMap(D), tools: (0, import_chunk_08m42etc.V3)(y.mcp.tools, b), commands: (0, import_chunk_08m42etc.V3)(y.mcp.commands, (U) => x.some((Z) => (0, import_chunk_bzyb60p0.ZE)(U, Z))), resources: (0, import_chunk_y8kqnbqt.wE)(y.mcp.resources, x), resourceTemplates: (0, import_chunk_y8kqnbqt.wE)(y.mcp.resourceTemplates, x) } })), w({ ...T, clients: T.clients.flatMap(D), tools: T.tools.filter((y) => !b(y)) });
  }
  let z, J;
  if (W) {
    let c = (0, import_chunk_vfrxshmx._Bs)(le(e), A, i);
    c.settled.catch(() => {
    }), J = c.mounted.catch(() => "mounted");
    let b = c.mounted.then(() => {
    }, (D) => (0, import_chunk_w578pjby.t)(`MCP connector refetch after account switch failed: ${(0, import_chunk_jv7av99m.d)(D)}`, { level: "warn" })).finally(() => {
      if (r.headlessConnectorMountInFlight === b) r.headlessConnectorMountInFlight = void 0;
    });
    r.headlessConnectorMountInFlight = z = b;
  }
  if (P.size === 0 || !_) return z;
  let X = (c) => {
    B1e(e, c.client.name, c);
  }, q = { getClients: () => [...n().mcp.clients, ...f().clients], getSuppressedPluginServers: () => n().mcp.suppressedPluginMcpServers ?? [], applyMcpUpdate: (c) => o((b) => ({ ...b, mcp: c(b.mcp) })) }, p = (c) => {
    C.getMcpToolsCommandsAndResources(X, c, A, i).catch((b) => (0, import_chunk_w578pjby.t)(`MCP re-dial after account switch failed: ${(0, import_chunk_jv7av99m.d)(b)}`, { level: "warn" })).finally(() => {
      (0, import_chunk_vfrxshmx.z9n)(c, q, A, X).catch((b) => (0, import_chunk_w578pjby.t)(`MCP re-dial retry after account switch failed: ${(0, import_chunk_jv7av99m.d)(b)}`, { level: "warn" }));
    });
  };
  if (p(M), Object.keys(B).length === 0 || !J) return z;
  let E = (0, import_chunk_yrpmp1hk.hi)(), Q = J.then((c) => {
    if (c === "superseded" || !(0, import_chunk_yrpmp1hk.HY)(E)) return;
    let b = /* @__PURE__ */ Object.create(null);
    for (let [D, y] of Object.entries(B)) {
      let U = (0, import_chunk_bzyb60p0.zu)(D, y);
      if (U) X({ client: ee(D, y, U), tools: [], commands: [], attemptEpoch: E });
      else b[D] = y;
    }
    if (Object.keys(b).length > 0) p(b);
  }).catch((c) => (0, import_chunk_w578pjby.t)(`MCP re-dial of held claude.ai proxy entries after account switch failed: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "warn" })), G = Promise.all([z, Q]).then(() => {
  }).finally(() => {
    if (r.headlessConnectorMountInFlight === G) r.headlessConnectorMountInFlight = void 0;
  });
  return r.headlessConnectorMountInFlight = G, G;
}
function pBs(e, n, o, f) {
  let w = o?.type === "connected" && o.client === e.client, A = o !== void 0 && o.type !== "disabled" && (0, import_chunk_3bjtjsgp.Uo)(e.name, o.config) === (0, import_chunk_3bjtjsgp.Uo)(e.name, n);
  return !w && (!f || !A);
}
var fe = 5, ue = 1e3;
function yha(e) {
  let { getAppState: n, getDynamicMcpState: o, now: f = Date.now, random: w = Math.random } = e, A = /* @__PURE__ */ new WeakSet(), i = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), g = (C, r, _) => {
    let T = r > 1 ? (0, import_chunk_hy0sycbj.AWn)(r - 1, w) - _ : 0, v = [...n().mcp.clients, ...o().clients].some((P) => P.type === "connected" && P.client === C.client);
    if (T <= 0 || !v || e.isControlReconnectInFlight(C.name)) return 0;
    try {
      e.onHeldOff?.(r, T);
    } catch (P) {
      (0, import_chunk_w578pjby.t)(`MCP reconnect hold-off observer failed for ${C.name}: ${(0, import_chunk_jv7av99m.d)(P)}`, { level: "warn" });
    }
    return (0, import_chunk_k449cc64.He)(C.name, `${C.config.type} transport closed again soon after it connected: reconnecting in ${T}ms`), T;
  };
  return (C) => {
    for (let r of C) {
      if (r.type === "connected") R.set(r.client, r);
      if (r.type !== "connected" || A.has(r.client) || !ge(r.config)) continue;
      A.add(r.client);
      let _ = f(), T = (v) => {
        if ((0, import_chunk_bzyb60p0.Zr)() || e.isRunEnding()) return;
        r.cleanup().catch(() => {
        });
        let P = Math.max(0, f() - _), s = P < import_chunk_hy0sycbj.Xkl ? (i.get(r.client) ?? 0) + 1 : 0;
        (async () => {
          let h = g(r, s, P), I = e.sleep ?? de;
          if (h > 0) await I(h);
          let M = () => R.get(r.client) ?? r;
          for (let k = 0; h > 0 && k < fe && await Y().hasUnsettledDial(M().name, M().config); k++) await I(ue);
          await Se(e, M(), v, s, h > 0, (k, L) => i.set(k.client, L));
        })().catch((h) => (0, import_chunk_w578pjby.t)(`MCP reconnect after close failed for ${r.name}: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "warn" }));
      };
      if ((0, import_chunk_gvzh3pxp.jil)(r, () => T(false)), (0, import_chunk_tntx4v84.U$)(r)) setImmediate(T, true);
    }
  };
}
function de(e) {
  return (0, import_chunk_5appeerh.K)(e, void 0, { unref: true });
}
function ge(e) {
  return e.type !== void 0 && e.type !== "stdio" && e.type !== "sdk";
}
async function Se(e, n, o, f, w, A) {
  let { getAppState: i, getDynamicMcpState: R, storageV5: g, credentials: C, isControlReconnectInFlight: r, isRunEnding: _, onReconnected: T, sleep: v = de, random: P = Math.random } = e, { name: s, config: h } = n, I = (0, import_chunk_yrpmp1hk.hi)(), M = () => (0, import_chunk_bzyb60p0.Zr)() || _() || (0, import_chunk_yrpmp1hk.hi)() !== I && (0, import_chunk_yrpmp1hk.qL)(h), k = () => i().mcp.clients.find((p) => p.name === s) ?? R().clients.find((p) => p.name === s), L = n, F = () => k() === L, W = (p) => {
    B1e(e, s, p);
  }, B = Y(), x = n, z = import_chunk_hy0sycbj.Ble + import_chunk_hy0sycbj.Jkl, J = import_chunk_hy0sycbj.Ble + import_chunk_hy0sycbj.RWn, X = true, q = (p) => p <= z || p <= J && X && (0, import_chunk_bmzkpe8r.w5t)(x);
  for (let p = 1; q(p); p++) {
    var _stack = [];
    try {
      let E = p - import_chunk_hy0sycbj.Ble, Q = p > z, G = Q && p < J ? "no_longer_allowed" : "gave_up";
      if (p > 1) {
        let H = (0, import_chunk_vfrxshmx.r5t)().jitter;
        await v(Q ? (0, import_chunk_hy0sycbj.$ko)(E, P) : E > 0 ? (0, import_chunk_5appeerh.LI)({ baseMs: import_chunk_hy0sycbj.oji, capMs: import_chunk_hy0sycbj.Qkl, floorMs: import_chunk_hy0sycbj.oji / 2, attempt: E - 1, random: P }) : (0, import_chunk_hy0sycbj.AWn)(p - 1, P, H > 0 ? { kind: "proportional", ratio: H } : void 0));
      }
      const c = __using(_stack, E > 0 ? (0, import_chunk_vfrxshmx.G9n)([s]) : void 0);
      if (M() || !F()) return;
      let b = (0, import_chunk_yrpmp1hk.hi)(), D = { name: s, type: "pending", config: h };
      if (E > 0) {
        if (_Ot(s, D)) {
          W({ client: D, tools: [], commands: [], attemptEpoch: b });
          return;
        }
        if ((0, import_chunk_bmzkpe8r.w5t)(x)) X = await (0, import_chunk_bmzkpe8r.rWs)(x);
        let H = await B.hasUnsettledDial(s, h);
        if (H && q(p + 1)) {
          (0, import_chunk_k449cc64.He)(s, `Background reconnect attempt ${E} skipped: another reconnect to this server is in progress; will try again at the next attempt`);
          continue;
        }
        if (M() || !F() || r(s)) return;
        if (H || !q(p)) {
          (0, import_chunk_k449cc64.He)(s, `Reconnect gave up after ${p} attempts${H ? ": another reconnect to this server is still in progress; leaving it to finish" : ""}`), (0, import_chunk_cqa9hrgx.m)("mcp_slow_reconnect", G, { attempts: p, found_closed: o });
          return;
        }
      } else {
        let H = { ...D, reconnectAttempt: p, maxReconnectAttempts: import_chunk_hy0sycbj.Ble };
        W({ client: H, ...v1o(i().mcp, s), attemptEpoch: b }), L = H;
      }
      if (!F() || r(s)) return;
      (0, import_chunk_k449cc64.He)(s, p === 1 ? `${h.type} transport ${o ? "had already closed when wired" : "closed"} \u2014 reconnecting (attempt 1/${import_chunk_hy0sycbj.Ble})` : E > 0 ? `Background reconnect attempt ${E}` : `Reconnect attempt ${p}/${import_chunk_hy0sycbj.Ble}`);
      let y = w && p === 1 ? await B.peekSettledConnection(s, h) : void 0, U = y?.type === "connected" && !(0, import_chunk_tntx4v84.U$)(y) ? (0, import_chunk_8v27xkv5.t5)(y, h) : void 0, Z = async () => Q && (!await (0, import_chunk_bmzkpe8r.oBr)(x) || await B.hasUnsettledDial(s, h)) || M() || !F() || _Ot(s, D) !== void 0, V = { ...U !== void 0 ? { client: U, ...v1o(i().mcp, s) } : await (0, import_chunk_6wgyy4rn.Hue)(B, s, h, async () => E > 0 && await Z() ? { client: x, tools: [], commands: [] } : B.reconnectMcpServerImpl(s, h, g, C, { keepConnectionInUse: true })).catch((H) => ({ client: { name: s, type: "failed", config: h, error: (0, import_chunk_538r8e0n.Nm)(s, h, (0, import_chunk_jv7av99m.d)(H)) }, tools: [], commands: [] })), attemptEpoch: b };
      if (V.client.type === "disabled" && V.client.heldBy) {
        if (!M() && F()) W(V);
        return;
      }
      let O = V.client.type === "connected" ? V.client : void 0, ce = O !== void 0 && (0, import_chunk_2qx36shh.mUe)(await B.peekSettledConnection(s, h), O), se = () => {
        if (O && pBs(O, h, k(), ce && !_())) B.detachAndCloseConnection(O).catch(() => {
        });
      };
      if (M() || !F() || r(s)) {
        se();
        return;
      }
      let re = V.keptConnectionInUse === true && O?.toolsListError !== void 0 && _Ot(s, O) === void 0;
      if (O && ce && !re) {
        if (A(O, f + p - 1), W(V), k() === O) {
          if (O === U) (0, import_chunk_y8s4362z.FJ)(O, (H, pe) => {
            oe(e, H, pe, O.config);
          }, g).catch((H) => (0, import_chunk_w578pjby.t)(`MCP tools refresh over a kept connection failed for ${s}: ${(0, import_chunk_jv7av99m.d)(H)}`, { level: "warn" }));
          (0, import_chunk_k449cc64.He)(s, `Reconnected (attempt ${p})`), (0, import_chunk_cqa9hrgx.u)(E > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", { attempts: p, found_closed: o, young_closes: f }), T(O);
        }
        return;
      }
      se();
      let te = O && { name: s, type: "failed", config: h, error: re ? "Its tools could not be listed" : "Connection closed again while reconnecting" }, j = te ?? V.client, ie = te ? { ...te, errorCode: "ConnectionClosed" } : j, N = (0, import_chunk_bzyb60p0.tHe)(ie);
      if (x = ie, p === import_chunk_hy0sycbj.Ble || (0, import_chunk_bzyb60p0.VUe)(j) || E > 0 && (!N || !q(p + 1))) {
        if ((0, import_chunk_k449cc64.He)(s, E <= 0 && N ? `Still failing after ${p} attempts` : `Reconnect gave up after ${p} attempts: ${j.type}`), W({ client: j, tools: j.type === "needs-auth" ? (0, import_chunk_6wgyy4rn.Jte)(s, h) : [], commands: [], attemptEpoch: b }), k() !== j) return;
        if ((0, import_chunk_bzyb60p0.VUe)(j)) return;
        if (j.type === "needs-auth") {
          (0, import_chunk_cqa9hrgx.l)(E > 0 ? "mcp_slow_reconnect" : "mcp_auto_reconnect", "needs_auth", { attempts: p, found_closed: o, young_closes: f });
          return;
        }
        if (E > 0) {
          (0, import_chunk_cqa9hrgx.m)("mcp_slow_reconnect", N ? G : "not_retryable", { attempts: p, found_closed: o });
          return;
        }
        if ((0, import_chunk_cqa9hrgx.m)("mcp_auto_reconnect", "exhausted", { attempts: p, found_closed: o, young_closes: f, goes_slow: N }), !N) return;
        L = j, (0, import_chunk_k449cc64.He)(s, "Reconnect attempts spent; retrying in the background");
        continue;
      }
      (0, import_chunk_k449cc64.He)(s, E > 0 ? `Background reconnect attempt ${E} did not connect (${j.type})` : `Reconnect attempt ${p} did not connect (${j.type})`);
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }
}
var ne = /* @__PURE__ */ new WeakMap();
function Sha(e) {
  return ne.get(e);
}
function oe(e, n, o, f) {
  let { setAppState: w, getDynamicMcpState: A, setDynamicMcpState: i } = e, R = false, g = false, C;
  w((v) => {
    let P = v.mcp.clients.find((I) => I.name === n), s = (0, import_chunk_08m42etc.MIt)(P, o, f);
    if (s === void 0) return g = true, v;
    let h = (0, import_chunk_08m42etc.M9t)(v, n, s);
    return R = h !== v, C = R && P !== void 0 ? { row: P, tools: s } : void 0, h;
  });
  let r = A(), _ = r.clients.find((v) => v.name === n), T = (0, import_chunk_08m42etc.MIt)(_, o, f);
  if (T === void 0) g = true;
  else {
    let v = (0, import_chunk_08m42etc.qya)(r, n, T);
    if (v !== r) i(v), R = true;
  }
  if (C !== void 0) if (_?.type === "pending") ne.set(C.row, C.tools);
  else ne.delete(C.row);
  if (g) (0, import_chunk_k449cc64.He)(n, "A re-queried tool list was not applied: another server holds the name");
  return R;
}
function mBs(e) {
  return (n, o, f) => oe(e, n, o, f);
}
function bha(e) {
  let { getAppState: n, getDynamicMcpState: o } = e.stores, f = /* @__PURE__ */ new WeakSet(), w = /* @__PURE__ */ new WeakMap();
  return (A) => {
    for (let i of A) {
      if (i.type === "connected") w.set(i.client, i);
      if (i.type !== "connected" || f.has(i.client)) continue;
      if (f.add(i.client), !i.capabilities?.tools?.listChanged && !(0, import_chunk_81nggker.w7r)(i) && !((0, import_chunk_qyhf6bts.eh)(i.config) !== void 0 && (0, import_chunk_m0xr8k74.w8e)(i))) continue;
      let R = i.name;
      Y().onMcpToolListChanged(i, async (g) => {
        (0, import_chunk_k449cc64.He)(R, g === import_chunk_hy0sycbj.SLe ? "Synthesized tools refetch after listen-stream reopen (no notification received)" : g === import_chunk_hy0sycbj.M2t ? "Refreshing tools for a tools/list_changed notification received before this handler was registered" : "Received tools/list_changed notification, refreshing tools");
        let C = n().mcp.clients.find((s) => s.name === R) ?? o().clients.find((s) => s.name === R), r = w.get(i.client) ?? i, _ = C !== void 0 && (0, import_chunk_3bjtjsgp.Uo)(R, C.config) === (0, import_chunk_3bjtjsgp.Uo)(R, r.config) ? (0, import_chunk_8v27xkv5.t5)(r, C.config) : r;
        w.set(i.client, _);
        let T = await (0, import_chunk_y8s4362z.FJ)(_, (s, h) => {
          oe(e.stores, s, h, _.config);
        }, e.storageV5);
        if (T.status === "kept-previous") {
          (0, import_chunk_k449cc64.He)(R, "tools/list failed after list_changed \u2014 keeping previous tool set");
          return;
        }
        let v = T.newTools.length, P = (s) => (0, import_chunk_y53wbr8a.a)("tengu_mcp_list_changed", { mcpServerKeyHash: (0, import_chunk_865at33z.z4)(R), type: (0, import_chunk_78g0060s.S)("tools"), cause: (0, import_chunk_bzyb60p0.V_t)(g), previousCount: s, newCount: v, ...(0, import_chunk_478m53m1.e$a)(i) });
        if (T.previousToolsPromise) T.previousToolsPromise.then((s) => P(s.length), () => P());
        else P();
      });
    }
  };
}
