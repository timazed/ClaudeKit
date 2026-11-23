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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_nfz758rv_exports = {};
__export(chunk_nfz758rv_exports, {
  E1o: () => E1o,
  Jma: () => Jma,
  Qma: () => Qma,
  Xma: () => Xma,
  Yma: () => Yma,
  Zma: () => Zma,
  aha: () => aha,
  cBs: () => cBs,
  cUr: () => cUr,
  cha: () => cha,
  dBs: () => dBs,
  dUr: () => dUr,
  dha: () => dha,
  eha: () => eha,
  fUr: () => fUr,
  fha: () => fha,
  iha: () => iha,
  k1o: () => k1o,
  lBs: () => lBs,
  lha: () => lha,
  mha: () => mha,
  nha: () => nha,
  oha: () => oha,
  pha: () => pha,
  rha: () => rha,
  sha: () => sha,
  tha: () => tha,
  uBs: () => uBs,
  uUr: () => uUr,
  uha: () => uha,
  w1o: () => w1o
});
module.exports = __toCommonJS(chunk_nfz758rv_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_jbjjrhxt = require("/$bunfs/root/chunk-jbjjrhxt.js");
var import_chunk_44g93ygc = require("/$bunfs/root/chunk-44g93ygc.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_1ek4hhs6 = require("/$bunfs/root/chunk-1ek4hhs6.js");
var import_chunk_30a5awzz = require("/$bunfs/root/chunk-30a5awzz.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_w4dc83v7 = require("/$bunfs/root/chunk-w4dc83v7.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_89bjmq9y = require("/$bunfs/root/chunk-89bjmq9y.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
var import_chunk_vfrxshmx = require("/$bunfs/root/chunk-vfrxshmx.js");
var import_chunk_9vbqjvhj = require("/$bunfs/root/chunk-9vbqjvhj.js");
var import_chunk_6wgyy4rn = require("/$bunfs/root/chunk-6wgyy4rn.js");
var import_chunk_ts42083x = require("/$bunfs/root/chunk-ts42083x.js");
var import_chunk_htn4d0yq = require("/$bunfs/root/chunk-htn4d0yq.js");
var import_chunk_0rtj0bmp = require("/$bunfs/root/chunk-0rtj0bmp.js");
var import_chunk_ttsnbbsg = require("/$bunfs/root/chunk-ttsnbbsg.js");
var import_chunk_xqa844xs = require("/$bunfs/root/chunk-xqa844xs.js");
var import_chunk_ga36k9j5 = require("/$bunfs/root/chunk-ga36k9j5.js");
var import_chunk_s3qtr6en = require("/$bunfs/root/chunk-s3qtr6en.js");
var import_chunk_fcwndvnw = require("/$bunfs/root/chunk-fcwndvnw.js");
var import_chunk_tjr3fy8z = require("/$bunfs/root/chunk-tjr3fy8z.js");
var import_chunk_h8v51dgb = require("/$bunfs/root/chunk-h8v51dgb.js");
var import_chunk_at8q9dqk = require("/$bunfs/root/chunk-at8q9dqk.js");
var import_chunk_qmyc67pd = require("/$bunfs/root/chunk-qmyc67pd.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_2ms4sey3 = require("/$bunfs/root/chunk-2ms4sey3.js");
var import_chunk_d1r21263 = require("/$bunfs/root/chunk-d1r21263.js");
var import_chunk_85cn4tkc = require("/$bunfs/root/chunk-85cn4tkc.js");
var import_chunk_08m42etc = require("/$bunfs/root/chunk-08m42etc.js");
var import_chunk_awaxe5q7 = require("/$bunfs/root/chunk-awaxe5q7.js");
var import_chunk_2d3wkrwb = require("/$bunfs/root/chunk-2d3wkrwb.js");
var import_chunk_dfgwgq6h = require("/$bunfs/root/chunk-dfgwgq6h.js");
var import_chunk_fwhva0e1 = require("/$bunfs/root/chunk-fwhva0e1.js");
var import_chunk_2mm785sn = require("/$bunfs/root/chunk-2mm785sn.js");
var import_chunk_tteqedwm = require("/$bunfs/root/chunk-tteqedwm.js");
var import_chunk_s3d8sr7p = require("/$bunfs/root/chunk-s3d8sr7p.js");
var import_chunk_rz37yzbd = require("/$bunfs/root/chunk-rz37yzbd.js");
var import_chunk_rejrcjng = require("/$bunfs/root/chunk-rejrcjng.js");
var import_chunk_2qx36shh = require("/$bunfs/root/chunk-2qx36shh.js");
var import_chunk_8yvg0j99 = require("/$bunfs/root/chunk-8yvg0j99.js");
var import_chunk_538r8e0n = require("/$bunfs/root/chunk-538r8e0n.js");
var import_chunk_3fqcfedz = require("/$bunfs/root/chunk-3fqcfedz.js");
var import_chunk_tntx4v84 = require("/$bunfs/root/chunk-tntx4v84.js");
var import_chunk_8v27xkv5 = require("/$bunfs/root/chunk-8v27xkv5.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_cwkztn5x = require("/$bunfs/root/chunk-cwkztn5x.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_98tkmkvx = require("/$bunfs/root/chunk-98tkmkvx.js");
var import_chunk_snmsx2fv = require("/$bunfs/root/chunk-snmsx2fv.js");
var import_chunk_nynf6rf6 = require("/$bunfs/root/chunk-nynf6rf6.js");
var import_chunk_mmvajxhx = require("/$bunfs/root/chunk-mmvajxhx.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_util = require("util");
function De() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
function yn() {
  return require("/$bunfs/root/chunk-f7m7jxed.js");
}
function lBs(e, n, o) {
  let c = De();
  return { tools: c.getToolsListErrorForResult(o.tools) ? lt(e, n) : o.tools, prompts: c.getDiscoveryFetchError(o.prompts) ? e.commands.filter((r) => (0, import_chunk_bzyb60p0.ZE)(r, n) && r.loadedFrom !== "mcp") : o.prompts, resources: c.getDiscoveryFetchError(o.resources) ? e.resources[n] : o.resources };
}
function Yma(e) {
  let { getAppState: n, storageV5: o, credentials: c, isControlReconnectInFlight: r, ownsCachedRow: g = () => true, isRunEnding: y = () => false, reuseServedSchemas: v = false, keepListsOnNeedsAuth: h = false, onRetryRejected: b, sleep: I = import_chunk_5appeerh.K } = e, H = (C, O) => (0, import_chunk_ts42083x.B1e)(e, C, O), R = (C) => C?.type === "cached" || C?.type === "needs-auth" && (h || Ke(n().mcp, C.name)), Y = (C, O) => {
    if (!Ke(n().mcp, C)) return false;
    return De().clearServerCache(C, O).catch(() => {
    }), true;
  }, le = (C, O) => {
    if (!g(C)) return;
    (async () => {
      let M = (0, import_chunk_yrpmp1hk.hi)();
      try {
        let k = n().mcp.clients.find((Q) => Q.name === C);
        if (!R(k) || (0, import_chunk_3bjtjsgp.Uo)(C, k.config) !== (0, import_chunk_3bjtjsgp.Uo)(C, O)) return;
        let x = De(), G = (0, import_chunk_bzyb60p0.zu)(C, O), fe = G === "managed-policy" ? { name: C, type: "failed", config: O, ...(0, import_chunk_bzyb60p0.iw)(G, C, O) } : (0, import_chunk_bzyb60p0.gi)(C) ? { name: C, type: "disabled", config: O } : G ? { name: C, type: "failed", config: O, ...(0, import_chunk_bzyb60p0.iw)(G, C, O) } : void 0;
        if (fe) {
          if (x.clearServerCache(C, O).catch(() => {
          }), G) x.dropDiscoveryEntry(C, O).catch(() => {
          });
          H(C, { client: fe, tools: [], commands: [], attemptEpoch: M });
          return;
        }
        let B = await x.connectToServer(C, O, void 0, o, c);
        if ((0, import_chunk_yrpmp1hk.hi)() !== M) {
          if (B.type === "connected") x.detachAndCloseConnection(B).catch(() => {
          });
          return;
        }
        if (y()) return;
        if ((0, import_chunk_bzyb60p0.gi)(C)) {
          H(C, { client: B, tools: [], commands: [], attemptEpoch: M });
          return;
        }
        if (B.type === "needs-auth") {
          if (k.type === "needs-auth") return;
          H(C, { client: (0, import_chunk_xcgcdx61.M1l)(n().mcp.clients.find((Q) => Q.name === C), (0, import_chunk_8v27xkv5.t5)(B, k.config)), ...h ? (0, import_chunk_ts42083x.v1o)(n().mcp, C) : { tools: (0, import_chunk_6wgyy4rn.Jte)(C, k.config), commands: [] }, attemptEpoch: M });
          return;
        }
        if (B.type !== "connected") return;
        (0, import_chunk_yrpmp1hk.xMe)(C);
        let Ce = await (0, import_chunk_yrpmp1hk._Ue)(C, O);
        if ((0, import_chunk_yrpmp1hk.hi)() !== M) {
          x.detachAndCloseConnection(B).catch(() => {
          });
          return;
        }
        let ae = !!B.capabilities?.resources, [ge, Me, Re, z] = await Promise.all([x.fetchToolsForClient(B, o), x.fetchCommandsForClient(B), (0, import_chunk_fpcs74d2.z_)() && ae ? yn().fetchMcpSkillsForClient(B, o) : Promise.resolve([]), ae ? x.fetchResourcesForClient(B) : Promise.resolve([])]);
        if (await x.peekSettledConnection(C, O) !== B) return;
        let ne = n().mcp.clients.find((Q) => Q.name === C);
        if (ne?.type !== "cached" && !((h || k.type === "needs-auth") && (ne === k || (0, import_chunk_2qx36shh.mUe)(ne, B))) || y()) {
          Y(C, O);
          return;
        }
        let ye = n().mcp;
        if (x.getToolsListErrorForResult(ge) !== void 0 && Y(C, O)) return;
        let re = lBs(ye, C, { tools: ge, prompts: Me, resources: z }), ue = v && re.tools === ge ? new Map(lt(ye, C).map((Q) => [Q.name, Q.inputJSONSchema])) : void 0;
        if (H(C, (0, import_chunk_8yvg0j99.fq)(k.config, { client: B, tools: ue === void 0 ? re.tools : ge.map((Q) => {
          let Se = ue.get(Q.name);
          return Se !== void 0 && (0, import_util.isDeepStrictEqual)(Se, Q.inputJSONSchema) ? { ...Q, inputJSONSchema: Se } : Q;
        }), commands: [...re.prompts, ...Re], resources: re.resources, attemptEpoch: M })) !== "applied") return;
        if (k.type === "needs-auth") x.removeMcpAuthCacheEntry(C, o);
        x.persistLiveListing(B, { tools: ge, commands: Me, resources: z, identityEpoch: M, grantLeg: Ce });
      } catch (k) {
        (0, import_chunk_w578pjby.t)(`Failed to adopt cached MCP server ${C} after lazy connect: ${(0, import_chunk_jv7av99m.d)(k)}`, { level: "warn" }), Y(C, O);
      }
    })();
  }, pe = async (C, O, M, k, x, G, fe) => {
    let B = n().mcp.clients.find((se) => se.name === C);
    if (k() || (0, import_chunk_yrpmp1hk.hi)() !== M || B === void 0 || B.type !== "failed" && B !== x || (0, import_chunk_bzyb60p0.gi)(C)) return "not_dialed";
    if (r(C)) return "not_dialed";
    if (B.type === "failed" && G?.(B)) return "not_yet";
    let Ce = (0, import_chunk_bzyb60p0.zu)(C, O);
    if (Ce) return H(C, { client: { name: C, type: "failed", config: O, ...(0, import_chunk_bzyb60p0.iw)(Ce, C, O) }, tools: [], commands: [], attemptEpoch: M }), "not_dialed";
    let ae = De(), ge = () => (0, import_chunk_cwkztn5x.td)().connections.get((0, import_chunk_3bjtjsgp.Uo)(C, O)), Me = ge(), Re = () => !k() && n().mcp.clients.includes(B) && !r(C) && !(x && (0, import_chunk_qdcbcsg7.mt)().transientRetryPasses.has(C)) && !(x && ge() !== Me) && !(0, import_chunk_bzyb60p0.gi)(C) && !(0, import_chunk_bzyb60p0.zu)(C, O) && fe?.() !== false, z = await (0, import_chunk_6wgyy4rn.Hue)(ae, C, O, async () => Re() ? ae.reconnectMcpServerImpl(C, O, o, c, { keepConnectionInUse: true }) : "not_dialed").catch(() => {
      return;
    });
    if (z === void 0 || z === "not_dialed") return z ?? "other";
    let ne = z.client.type === "connected" && (0, import_chunk_2qx36shh.mUe)(await ae.peekSettledConnection(C, O), z.client), ye = z.client.type === "connected" && (k() || r(C) || !ne), re = n().mcp.clients.find((se) => se.name === C), ue = z.keptConnectionInUse === true && (0, import_chunk_ts42083x._Ot)(C, z.client) === void 0, ce = ue && z.client.type === "connected" && z.client.toolsListError !== void 0;
    if (ye || ce || k() || re === void 0 || re.type !== "failed" && re !== x || !ae.areMcpConfigsEqual(re.config, O) || x !== void 0 && re !== x) {
      if (z.client.type === "connected" && (0, import_chunk_ts42083x.pBs)(z.client, O, re, ne && (ue || !k()))) ae.detachAndCloseConnection(z.client).catch(() => {
      });
      if (!ue) return "dropped";
      return ce || !ne ? "not_yet" : "not_dialed";
    }
    let Q = x && (0, import_chunk_85cn4tkc.oWs)(z.client);
    if (re.type === "needs-auth" && !(0, import_chunk_85cn4tkc.R8n)(z.client)) {
      if (z.client.type === "connected" && !ue) ae.clearServerCache(C, O).catch(() => {
      });
      return Q ?? "other";
    }
    if (x !== void 0 && (0, import_chunk_bzyb60p0.tHe)(z.client)) return "transient";
    let Se = H(C, { ...(0, import_chunk_ts42083x.pUr)(z), attemptEpoch: M });
    if (Se === "superseded" || x !== void 0 && Se !== "applied") return ue ? "not_dialed" : "dropped";
    if (z.client.type === "disabled") return "not_dialed";
    if (Q && z.client.type !== "connected") return Q;
    if (z.client.type === "connected") return z.client.toolsListError || z.client.discoveryBearerRejected ? "degraded" : "connected";
    if ((0, import_chunk_bzyb60p0.har)(z.client)) return "transient";
    return (0, import_chunk_bzyb60p0.qUe)(z.client) ? "rate_limited" : "other";
  }, oe = async (C, O) => {
    var _stack = [];
    try {
      const M = __using(_stack, (0, import_chunk_vfrxshmx.G9n)([C]));
      let k = (0, import_chunk_yrpmp1hk.hi)(), x = (0, import_chunk_vfrxshmx.r5t)(), G = x.delaysMs ?? import_chunk_vfrxshmx.A1o;
      for (let [fe, B] of G.entries()) {
        if ((0, import_chunk_vfrxshmx.T1o)(n().mcp.clients.find((ae) => ae.name === C))) return;
        await I((0, import_chunk_vfrxshmx.hUr)(B, x.jitter));
        let Ce = await pe(C, O, k, y, void 0, (ae) => ae.proxyConnectStatus === 403 && (fe < G.length - 1 || !(0, import_chunk_bzyb60p0.z_t)(ae)));
        if (Ce !== "transient" && Ce !== "not_yet") return;
      }
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      __callDispose(_stack, _error, _hasError);
    }
  }, V = async (C, O, M) => {
    if (await De().hasUnsettledDial(C.name, C.config)) return "not_dialed";
    if ((0, import_chunk_qdcbcsg7.mt)().transientRetryPasses.has(C.name)) return "not_dialed";
    let k = (0, import_chunk_yrpmp1hk.hi)();
    if (n().mcp.clients.find((G) => G.name === C.name) !== C) return "not_dialed";
    let x = await pe(C.name, C.config, k, () => {
      try {
        return y() || O();
      } catch (G) {
        return (0, import_chunk_w578pjby.t)(`[MCP] Could not tell whether retrying ${C.name} is still allowed, so it is stopped: ${(0, import_chunk_jv7av99m.d)(G)}`, { level: "warn" }), true;
      }
    }, C, void 0, M);
    return x === "not_yet" ? "not_dialed" : x;
  }, j = (C, O) => {
    let { name: M, config: k } = C;
    if (!g(M)) return;
    let x = n().mcp.clients.find((G) => G.name === M);
    if (!R(x) || (0, import_chunk_3bjtjsgp.Uo)(M, x.config) !== (0, import_chunk_3bjtjsgp.Uo)(M, k)) return;
    if (O && Ke(n().mcp, M)) return;
    if (H(M, { client: C, tools: [], commands: [], attemptEpoch: (0, import_chunk_yrpmp1hk.hi)() }), (0, import_chunk_bzyb60p0.har)(C)) {
      let G = oe(M, k);
      b && G.catch((fe) => b(M, fe));
    }
    if (O) (0, import_chunk_yrpmp1hk.IYr)(M, k);
  };
  return { onCachedAdopt: le, onCachedDialFailed: j, redialFailedRow: V, subscribe: () => {
    let C = import_chunk_htn4d0yq.c0t.subscribe(le), O = import_chunk_htn4d0yq._Jt.subscribe((M, k) => {
      De().takeSettledCachedDialFailure(M.name, M.config), j(M, k);
    });
    return () => {
      C(), O();
    };
  }, catchUp: () => {
    let C = n().mcp.clients.filter((O) => O.type === "cached" && g(O.name));
    if (C.length === 0) return;
    (async () => {
      let O = De();
      for (let M of C) {
        if (y()) return;
        let k = O.takeSettledCachedDialFailure(M.name, M.config), x = await O.peekSettledConnection(M.name, M.config);
        if (x?.type === "connected" || x?.type === "needs-auth") {
          import_chunk_htn4d0yq.c0t.emit(M.name, M.config);
          continue;
        }
        if (k && !await O.hasUnsettledDial(M.name, M.config) && !y()) j(k.failure, k.ownStrike);
      }
    })().catch(() => {
    });
  } };
}
function Ke(e, n) {
  return lt(e, n).some((o) => o.mcpInfo?.isAuthStub);
}
function lt(e, n) {
  let o = (0, import_chunk_px0hhsq7.Rr)(n);
  return e.tools.filter((c) => (0, import_chunk_px0hhsq7.Bu)(c, n, o));
}
var Ae = require("/$bunfs/root/chunk-nj5px52b.js");
function de() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
function We(e) {
  if (e.type === "disabled" && e.heldBy !== void 0) return (0, import_chunk_bzyb60p0.yye)(e.name, e.heldBy);
  return e.type === "failed" ? e.error ?? "Connection failed" : `Server status: ${e.type}`;
}
function yt(e, n, o) {
  let c = new Map(n.clients.map((M) => [M.name, M])), r = new Map((o ?? []).map((M) => [M.name, M])), g = new Set(n.names), y = (0, import_chunk_yrpmp1hk.hi)(), v = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), H = (M, k) => {
    let x = r.get(M.name);
    if (!x) {
      I.add(M.name);
      return;
    }
    if (x !== k && x.type !== "pending" && de().areMcpConfigsEqual(x.config, M.config)) return b.add(M.name), x;
    return M;
  }, R = e.clients.flatMap((M) => {
    if (M.type !== "pending") return [M];
    let k = c.get(M.name);
    if (!k) {
      if (!g.has(M.name) || o === void 0) return [M];
      return H(M, void 0) ?? [];
    }
    if (!de().areMcpConfigsEqual(M.config, k.config)) return [M];
    if (o !== void 0 && r.get(M.name) === k) {
      v.add(M.name);
      let x = (0, import_chunk_ts42083x.Sha)(k);
      if (x !== void 0) h.set(M.name, x);
      return [k];
    }
    if (n.dialEpochs[M.name] !== y && (0, import_chunk_yrpmp1hk.qL)(M.config)) return o === void 0 ? [M] : H(M, k) ?? [];
    if (o === void 0) return v.add(M.name), [k];
    return H(M, k) ?? [];
  });
  if (v.size === 0 && b.size === 0 && I.size === 0) return e;
  let Y = [...v].map((M) => [M, (0, import_chunk_px0hhsq7.Rr)(M)]), le = n.clients.map((M) => [M.name, (0, import_chunk_px0hhsq7.Rr)(M.name)]), pe = (M, k) => k.some(([x, G]) => (0, import_chunk_px0hhsq7.Bu)(M, x, G)), oe = [...I].map((M) => [M, (0, import_chunk_px0hhsq7.Rr)(M)]), V = [...h.keys()].map((M) => [M, (0, import_chunk_px0hhsq7.Rr)(M)]), j = (M) => V.find(([k, x]) => (0, import_chunk_px0hhsq7.Bu)(M, k, x))?.[0], te = /* @__PURE__ */ new Map();
  for (let M of n.tools) {
    let k = j(M);
    if (k !== void 0) te.set(k, (te.get(k) ?? /* @__PURE__ */ new Set()).add(M.name));
  }
  let ie = /* @__PURE__ */ new Set(), C = n.tools.flatMap((M) => {
    let k = j(M);
    if (k !== void 0) {
      if (ie.has(k)) return [];
      ie.add(k);
      let x = te.get(k);
      return (h.get(k) ?? []).filter((G) => x?.has(G.name));
    }
    return pe(M, Y) || v.size > 0 && !pe(M, le) ? [M] : [];
  }), O = [...h].flatMap(([M, k]) => k.filter((x) => !te.get(M)?.has(x.name)));
  return { ...e, clients: R, tools: (0, import_chunk_pbteexar.Ls)([...e.tools.filter((M) => !pe(M, oe)), ...C, ...O], "name") };
}
var w1o = "Builtin server is CLI-owned; ignored", dUr = "Blocked by enterprise policy (allowedMcpServers/deniedMcpServers)", _t = "Ignored in hermetic mode (not declared in user config)", pt = "Ignored: an enterprise MCP config (managed-mcp.json) is present and has exclusive control over MCP servers", tt = "Ignored: managed setting disableSideloadFlags forbids server-delivered MCP servers on this machine", wt = "Ignored in a Remote Control session: MCP servers are loaded only from the verified startup config on this machine", Mt = "Ignored: IDE transports are registered by the CLI itself, not mcp_set_servers", _n = "Not admitted: a pushed server must be an http server on this session's MCP proxy route, with a URL of at most 4,096 characters (a non-ASCII character counts as its percent-encoded bytes)", Mn = "Not admitted: this name is reserved for a first-party server, and this entry cannot be added after session start", vn = "Not connected: this worker could not take all of this server's per-tool limits; the next worker that the session moves to reads the entry again", Rn = "Not connected: this worker's start did not take this server, so the worker takes no push of it; the next worker that the session moves to reads the entry again", kn = "Change to a running server is applied at the next re-dispatch", bn = "Not applied: this session applies no per-tool permission_policy to a client-hosted MCP server, so no always_ask or always_deny in this entry takes effect; the server is otherwise unchanged", Tn = "Not applied: in this session, servers are turned on or off by changing the session's server set", On = "The session's tool container did not confirm the change, so the server may be on or off. Check its status before trying again", En = "Saved. The server stays off for now and will be connected the next time this session starts after being idle. There is nothing more to do", ut = "not dialed: a newer server set replaced it", Dn = /* @__PURE__ */ new Set([w1o, import_chunk_0rtj0bmp.D6s, dUr, _t, pt, tt, wt, Mt, _n, Mn, vn, Rn, kn, bn, Tn, On, En, import_chunk_271xsh6x.BBt, import_chunk_271xsh6x.can, import_chunk_271xsh6x.Pit, import_chunk_3fqcfedz.n8o, import_chunk_271xsh6x.YSr, import_chunk_271xsh6x.nDi, import_chunk_271xsh6x.uan, import_chunk_271xsh6x.Kho, import_chunk_271xsh6x.WBt, import_chunk_271xsh6x.fan, import_chunk_271xsh6x.pan, import_chunk_271xsh6x.man, import_chunk_271xsh6x.qho, ut, import_chunk_271xsh6x.Opl, ...Ae !== null ? [Ae.CCR_ARTIFACTS_WITHHELD, Ae.CCR_ARTIFACTS_WITHHELD_ON_A_RUNNER] : []]), An = /* @__PURE__ */ new Set(["synced-file staging not supported on this runner kind", "CLAUDE_CODE_REMOTE_SESSION_ID unset", "list returned incomplete credential", "a /connector-downloads/ mount_path must be a UUID folder, then a name of 1 to 80 letters, digits, dots, underscores and hyphens that starts with neither a dot nor a hyphen, then a dot and 2 to 5 lower-case letters or digits", "a /connector-downloads/ mount_path must be a UUID folder, then download-, eight hex digits and an extension"]);
function Xma(e) {
  if (An.has(e)) return e;
  if (/^(list|read) gated: [a-z-]{2,32}$/.test(e) || /^(list|read|write|mkdir) failed: (http \d{3}|[A-Za-z_-]{2,24}|-?\d{1,5})$/.test(e) || /^connector download not placed: [a-z_]{2,32}$/.test(e) || /^browser download not placed: [a-z_]{2,32}$/.test(e) || /^read truncated: got \d{1,16} of \d{1,16} bytes$/.test(e) || /^read stalled: no bytes for \d{1,16}ms$/.test(e)) return e;
  return;
}
function xn(e) {
  if (e.match(/^Server status: ([a-z][a-z-]{0,31})$/) !== null) return e;
  if (e.match(/^Server not found: ([A-Za-z0-9 _.-]{1,64})$/) !== null) return e;
  return;
}
function Ge(e, n = "Connection failed") {
  return Dn.has(e) ? e : xn(e) ?? n;
}
var Jma = "mcp_set_servers: servers must be an object of config objects";
function Qma(e, n) {
  let o = e, c = /* @__PURE__ */ Object.create(null);
  for (let [r, g] of Object.entries(n)) {
    let y = o ? (0, import_chunk_kx2fp6pc.wn)(r) : r;
    if (o && Object.hasOwn(c, y)) {
      let v = 2;
      while (Object.hasOwn(c, `${y}#${v}`)) v++;
      y = `${y}#${v}`;
    }
    c[y] = !e || (0, import_chunk_xcgcdx61.Boe)(r) && g === (0, import_chunk_bzyb60p0.H3e)(r) ? g : Ge(g, "connection failed");
  }
  return c;
}
function Zma(e, { scope: n, strictMcpConfig: o }) {
  let c = (0, import_chunk_bzyb60p0.RT)();
  if (o) return c;
  for (let [r, g] of Object.entries(e)) if (vt(n, r, g)) c[r] = g;
  return c;
}
function eha(e, n, o) {
  return new Set(Object.entries(e).filter(([c, r]) => !n || r.pluginSource === void 0 || o.has(c)).map(([c]) => c));
}
function vt(e, n, o) {
  if (e === "configured") return true;
  if (e === "account_plugins") return (0, import_chunk_xcgcdx61.NJe)(o);
  return (0, import_chunk_xcgcdx61.jl)(o) && (0, import_chunk_z688m88d.Zt)(o, e.copies.get(n));
}
function tha(e, n) {
  let o = (0, import_chunk_bzyb60p0.RT)();
  for (let [c, r] of Object.entries(e)) if (!vt(n, c, r)) o[c] = r;
  return o;
}
function xe(e) {
  try {
    let n = (0, import_chunk_bzyb60p0.RP)(e, { includeEnv: false });
    return n === null ? null : (0, import_chunk_bzyb60p0.Bcr)(n);
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[MCP] a server's URL or command could not be read, so it is not compared: ${(0, import_chunk_jv7av99m.d)(n)}`), null;
  }
}
function In(e) {
  switch (e.type) {
    case "disabled":
      return false;
    case "connected":
    case "failed":
    case "needs-auth":
    case "pending":
    case "cached":
      return true;
    default:
      return e;
  }
}
function Ln(e) {
  switch (e.type) {
    case "connected":
      return "working";
    case "cached":
    case "pending":
      return "mayWork";
    case "disabled":
    case "failed":
    case "needs-auth":
      return "unusable";
    default:
      return e;
  }
}
function nha(e, n, o) {
  let c = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Set();
  for (let v of n) {
    if (!c.has(v.name)) c.set(v.name, v);
    if (!(0, import_chunk_xcgcdx61.jl)(v.config)) continue;
    let h = xe(v.config);
    if (h === null) continue;
    if (!o.has(v.name)) {
      if (In(v) && !(0, import_chunk_bzyb60p0.gi)(v.name) && (0, import_chunk_bzyb60p0.gC)(v.name, v.config)) r.add(h);
    } else if (v.type === "connected") g.add(h);
  }
  let y = (0, import_chunk_bzyb60p0.RT)();
  for (let [v, h] of Object.entries(e)) {
    let b = c.get(v), I = xe(h);
    if (b === void 0 || I === null || (0, import_chunk_xcgcdx61.jl)(h) || (0, import_chunk_bzyb60p0.gi)(v) || !(0, import_chunk_bzyb60p0.gC)(v, h) || r.has(I) || xe(b.config) !== I) continue;
    let H = Ln(b);
    if (H === "working" || H === "mayWork" && !g.has(I)) y[v] = h;
  }
  return y;
}
function rha(e, n, o) {
  let c = /* @__PURE__ */ new Map();
  for (let [r, { host: g, config: y }] of e) {
    let v = o.find((b) => b.name === g), h = Object.hasOwn(n, g) ? n[g] : void 0;
    if ((0, import_chunk_bzyb60p0.gi)(g) || h !== void 0 && !(0, import_chunk_bzyb60p0.gC)(g, h)) continue;
    if (h === void 0 || v === void 0 || xe(h) !== xe(y) || v.type === "failed" || v.type === "needs-auth") c.set(r, y);
  }
  return c;
}
function dBs(e, n, o, c = /* @__PURE__ */ new Set()) {
  let r = /* @__PURE__ */ new Map();
  for (let [h, b] of Object.entries(o)) {
    let I = xe(b);
    if (I !== null && !r.has(I)) r.set(I, h);
  }
  let g = [];
  for (let [h, b] of Object.entries(n)) {
    if (!(0, import_chunk_xcgcdx61.jl)(b) || !Object.hasOwn(e, h) || e[h] !== b || c.has(h) || (0, import_chunk_bzyb60p0.gi)(h) || !(0, import_chunk_bzyb60p0.gC)(h, b)) continue;
    let I = xe(b), H = I === null ? void 0 : r.get(I);
    if (H !== void 0) g.push({ name: h, duplicateOf: H });
  }
  if (g.length === 0) return { servers: e, twins: g };
  let y = new Set(g.map((h) => h.name)), v = /* @__PURE__ */ Object.create(null);
  for (let [h, b] of Object.entries(e)) if (!y.has(h)) v[h] = b;
  return { servers: v, twins: g };
}
function oha(e, n, o, c) {
  let r = /* @__PURE__ */ new Set([...c, ...o.map((h) => h.name)]), g = (0, import_chunk_bzyb60p0.RT)();
  for (let [h, b] of Object.entries(e)) if (!r.has(h)) g[h] = b;
  let y = /* @__PURE__ */ new Map(), { twins: v } = dBs(e, g, n);
  for (let { name: h, duplicateOf: b } of v) {
    let I = g[h];
    if ((0, import_chunk_bzyb60p0.RP)(I, { includeEnv: false }) !== (0, import_chunk_bzyb60p0.RP)(n[b], { includeEnv: false })) y.set(h, { host: b, config: I });
  }
  return y;
}
var Fn = /* @__PURE__ */ new Set(["plugin_install_diff", "plugins_sync", "reload_plugins", "plugin_copy_recheck", "late_plugin_install", "set_cwd", "claim_session"]);
function Rt(e) {
  return (0, import_chunk_khxw3ng0.er)(e, (n) => (0, import_chunk_qwbhh2k3.Pn)(n, ["scope", "pluginSource", "pluginPath", "relayed", "hostRegistered", "pluginEndpointTemplated", "pluginOfficialSourceVouched", "heldForClaim", "agentSource", "declaredIn", "readFrom", "configError", "configErrorReason", "expandedFromEnv", "configuredCommand", "redialToRelearnRegistration"]));
}
var Hn = /* @__PURE__ */ new Set(), kt = /* @__PURE__ */ new Set(), bt = Object.freeze(/* @__PURE__ */ Object.create(null));
function Tt(e, n) {
  return (0, import_chunk_qyhf6bts.w4)() && n?.configuredCommand !== void 0 && "command" in e && "command" in n && e.command === n.command && (0, import_chunk_z688m88d.Zt)(e.args ?? [], n.args ?? []) ? { ...e, configuredCommand: n.configuredCommand } : e;
}
async function jn(e, n, o, c, r, g, y, v = false, h = false, b, I, H, R, Y, le = Hn) {
  if (h && (Object.hasOwn(e, import_chunk_epy4sc29.Ll) || Object.hasOwn(e, import_chunk_epy4sc29.bd))) await (0, import_chunk_awaxe5q7.j2)({ hasDynamicMcpConfig: true });
  let pe = !h ? e : (0, import_chunk_khxw3ng0.er)(Rt(e), (L, F) => {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) (0, import_chunk_ht27b0vz.rvr)(F, L);
    return (0, import_chunk_865at33z.hPr)(F, (0, import_chunk_865at33z.Txs)(e[F], Tt(L, o.configs[F])), import_chunk_0rtj0bmp.YXn);
  }), oe = new Set((g?.()?.mcp.clients ?? []).filter((L) => (0, import_chunk_bzyb60p0.kSt)(L.name) && !Object.hasOwn(o.configs, L.name)).map((L) => L.name)), V = /* @__PURE__ */ Object.create(null), j = /* @__PURE__ */ Object.create(null);
  for (let [L, F] of Object.entries(pe)) {
    let J = F.type;
    if (oe.has(L)) V[L] = w1o;
    else if (J === "sse-ide" || J === "ws-ide") V[L] = Mt;
    else if ((0, import_chunk_bzyb60p0.ltn)(L) && J === "sdk") V[L] = (0, import_chunk_w50zedgp.Ubr)();
    else j[L] = F;
  }
  let te = new Set([...le].map(import_chunk_px0hhsq7.rC)), ie = /* @__PURE__ */ Object.create(null), C = /* @__PURE__ */ Object.create(null);
  for (let [L, F] of Object.entries(j)) if (!Object.hasOwn(o.configs, L) && te.has((0, import_chunk_px0hhsq7.rC)(L))) ie[L] = import_chunk_0rtj0bmp.D6s;
  else C[L] = F;
  if (Object.values(C).some((L) => L.type !== "sdk")) await (0, import_chunk_awaxe5q7.j2)({ hasDynamicMcpConfig: true });
  let { allowed: O, blocked: M } = (0, import_chunk_bzyb60p0.SH)(C), k = /* @__PURE__ */ Object.create(null);
  for (let L of M) k[L] = dUr;
  let x = y === "plugin_install_diff" || y === "plugins_sync" || y === "reload_plugins" || y === "plugin_copy_recheck" || y === "set_cwd" || y === "claim_session" || y === "tool_register" || y === "plugin_connect", G = O, fe = /* @__PURE__ */ new Set(), B = x ? void 0 : (0, import_chunk_snmsx2fv.ZH)() ? _t : import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_bzyb60p0.yh)() ? pt : import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_wj4me9k5.RN)() ? tt : import_chunk_f2dee02n.Ql.isBridgeCarrierChild ? wt : void 0;
  if (B !== void 0) {
    let L = !import_chunk_f2dee02n.Ql.isBridgeCarrierChild && (B === pt || B === tt), F = /* @__PURE__ */ Object.create(null);
    for (let [J, X] of Object.entries(O)) if ((0, import_chunk_0rtj0bmp.L6s)(X, L, L && B === tt)) F[J] = X;
    G = F;
    for (let J of Object.keys(O)) if (!Object.hasOwn(G, J)) fe.add(J), k[J] = B;
  }
  let Ce = R?.getOwnedConfigs, ae = Ce;
  if (Ae !== null) {
    let { withoutWithheldCcrArtifactsEntry: L } = Ae, { kept: F, dropped: J, error: X } = L(G, g?.().toolPermissionContext.alwaysDenyRules);
    G = F;
    for (let Z of J) k[Z] = X;
    if (Ce !== void 0) {
      let Z = /* @__PURE__ */ new WeakMap();
      ae = () => {
        let Te = Ce(), be = Z.get(Te) ?? L(Te, g?.().toolPermissionContext.alwaysDenyRules).kept;
        return Z.set(Te, be), be;
      };
    }
  }
  let ge = /* @__PURE__ */ Object.create(null), Me = /* @__PURE__ */ Object.create(null);
  for (let [L, F] of Object.entries(G)) if (F.type === "sdk") ge[L] = F;
  else Me[L] = F;
  let Re = new Set(Object.keys(n.configs)), z = new Set(Object.keys(ge)), ne = [], ye = [], re = [], ue = Object.freeze(Object.assign(/* @__PURE__ */ Object.create(null), n.configs)), ce = Object.assign(/* @__PURE__ */ Object.create(null), ue), Q = [...n.clients], Se = [...n.tools], se = [...n.commands], je = () => bt;
  if (h) {
    let L = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && z.size === 0;
    if (L && Re.size > 0) (0, import_chunk_w578pjby.t)(`mcp_set_servers: payload names no SDK server; keeping ${Re.size} registered SDK server(s)`);
    je = L ? () => n.configs : () => {
      let F = n.configs, J = Object.assign(/* @__PURE__ */ Object.create(null), (0, import_chunk_y8kqnbqt.wE)(F, ye));
      for (let X of ne) {
        let Z = ce[X];
        if (Z !== void 0 && !Object.hasOwn(F, X)) J[X] = Z;
      }
      for (let X of re) {
        let Z = ce[X];
        if (Z !== void 0 && Object.hasOwn(F, X) && F[X] === ue[X]) J[X] = Z;
      }
      return J;
    };
    for (let F of L ? [] : Re) if (!z.has(F)) {
      let J = Q.find((Z) => Z.name === F);
      await Promise.all([J?.type === "connected" ? J.cleanup() : void 0, R?.closeReplacedSdkClients?.(F)]), Q = Q.filter((Z) => Z.name !== F);
      let X = (0, import_chunk_px0hhsq7.Rr)(F);
      Se = Se.filter((Z) => !(0, import_chunk_px0hhsq7.Bu)(Z, F, X)), se = se.filter((Z) => !(0, import_chunk_bzyb60p0.ZE)(Z, F)), delete ce[F], ye.push(F);
    }
    for (let [F, J] of Object.entries(ge)) {
      let { tools: X, connectorId: Z, autoModeVerdictTools: Te, remoteControlMetaKeys: be, dataFlowServer: ve, onPersonsMachine: Be } = (0, import_chunk_px0hhsq7.hqt)(J).settings, qe = (0, import_chunk_px0hhsq7.gqt)(J);
      if (qe) (0, import_chunk_w578pjby.t)(`mcp_set_servers: SDK MCP server '${F}': ${(0, import_chunk_px0hhsq7.w_n)(qe)}`);
      if (!Re.has(F)) {
        let { tools: Ne, connectorId: Le, autoModeVerdictTools: st, remoteControlMetaKeys: Je, dataFlowServer: Pe, ...Xe } = J, $e = { ...Xe, ...X !== void 0 && { tools: X }, ...Z !== void 0 && { connectorId: Z }, ...Te !== void 0 && { autoModeVerdictTools: Te }, ...be !== void 0 && { remoteControlMetaKeys: be }, ...ve !== void 0 && { dataFlowServer: ve }, ...Be !== void 0 && { onPersonsMachine: Be } };
        ce[F] = $e;
        let it = { type: "pending", name: F, config: { ...$e, scope: "dynamic" } };
        Q = [...Q, it], ne.push(F);
        continue;
      }
      let Ee = ce[F];
      if ((0, import_chunk_1ek4hhs6.hyr)(F, Ee?.dataFlowServer, ve), Ee && !(0, import_chunk_px0hhsq7.tDo)(Ee.tools, X)) {
        let { tools: Ne, ...Le } = Ee;
        ce[F] = X === void 0 ? Le : { ...Le, tools: X }, re.push(F);
      }
    }
  }
  let ke = await Ot(Me, o, c, r, g, y, v, h, new Set(Object.keys(e).filter((L) => (!Object.hasOwn(ge, L) || (0, import_chunk_xcgcdx61.jl)(o.configs[L])) && (!fe.has(L) || !(0, import_chunk_xcgcdx61.jl)(o.configs[L])))), b, I, H, R?.wantsDial, R?.signal, Y, ae, R?.operatorToolPolicyConfigs, je, h ? new Set(Object.keys(ge)) : kt, R?.keepsRunningOnOwnerMove, R?.keepsRunningWhenOmitted);
  for (let L of ne) (0, import_chunk_1ek4hhs6.hyr)(L, n.configs[L]?.dataFlowServer, ce[L]?.dataFlowServer);
  let Ue = (L) => `[${L.map(import_chunk_kx2fp6pc.wn).join(", ")}]`;
  return (0, import_chunk_w578pjby.t)(`[MCP] ${y ?? "unknown"} applied: ${Object.keys(e).length} servers requested; added=${Ue([...ne, ...ke.response.added])} removed=${Ue([...ye, ...ke.response.removed])} ignored (operator-owned)=${Ue(Object.keys(ie))} refused=${Object.keys(V).length + Object.keys(k).length}`), { response: { added: [...ne, ...ke.response.added], removed: [...ye, ...ke.response.removed], errors: { ...V, ...ie, ...k, ...ke.response.errors } }, newSdkState: { configs: ce, clients: Q, tools: Se, commands: se }, newDynamicState: ke.newState, sdkServersAdded: ne, sdkServersRemoved: ye, sdkServersUpdated: re, sdkConfigsAtSnapshot: ue, sdkServersChanged: ne.length > 0 || ye.length > 0, deferredSettle: ke.deferredSettle };
}
async function Un(e, n) {
  let o = (y) => y.mcp.clients.find((v) => v.name === n);
  if (!await (0, import_chunk_bzyb60p0._fe)(e, (y) => o(y)?.type !== "pending", { timeoutMs: (0, import_chunk_98tkmkvx.bf)() })) {
    (0, import_chunk_k449cc64.He)(n, "Still connecting when the wait after the sign-in hint ended, so it is not dialed again");
    return;
  }
  let r = e.getState(), g = o(r);
  if (g?.type !== "needs-auth" || !Ke(r.mcp, n)) return;
  try {
    await (0, import_chunk_6wgyy4rn.Tri)(de(), n, g.config, { context: "MCP server set" });
  } catch (y) {
    (0, import_chunk_k449cc64.He)(n, `Could not connect after mcp_set_servers: ${(0, import_chunk_jbjjrhxt.gl)(y, g.config)}`);
  }
}
async function sha(e, { payload: n, desired: o }, { authoritative: c, caller: r, deferConnect: g, dialOptions: y, deniedTools: v, signInHint: h }) {
  let { stores: b } = e, { getAppState: I, setAppState: H, getDynamicMcpState: R, setDynamicMcpState: Y } = b;
  if (v !== void 0) H((V) => {
    let j = (0, import_chunk_px0hhsq7.j$l)(V.toolPermissionContext, v);
    return j === V.toolPermissionContext ? V : { ...V, toolPermissionContext: j };
  });
  let le = { ...R(), configs: { ...e.getOwnedConfigs(), ...R().configs } };
  if (c) {
    (0, import_chunk_rejrcjng.uri)(e.getOwnedConfigs(), n);
    let V = /* @__PURE__ */ Object.create(null);
    for (let [j, te] of Object.entries(e.getOwnedConfigs())) if (Object.hasOwn(n, j)) V[j] = te;
    e.setOwnedConfigs(V);
  } else if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) (0, import_chunk_rejrcjng.uri)(le.configs, o);
  let pe = e.sdkState(), oe = await jn(o, pe, le, H, e.redactsPersistedLane(), I, r, g, c, e.storageV5, e.credentials, b, e, y, e.operatorOwnedMcpConfigNames);
  if (c) {
    let V = new Set(Object.keys(oe.newDynamicState.configs));
    e.setOwnedConfigs(Object.fromEntries(Object.entries(Rt(n)).filter(([j, te]) => te.type !== "sdk" && V.has(j) && !(0, import_chunk_xcgcdx61.jl)(oe.newDynamicState.configs[j])).flatMap(([j, te]) => {
      let ie = (0, import_chunk_865at33z.hPr)(j, (0, import_chunk_865at33z.Txs)(n[j], { ...Tt(te, oe.newDynamicState.configs[j]), scope: "dynamic" }), import_chunk_0rtj0bmp.YXn);
      return (0, import_chunk_865at33z.Rxs)(ie) === (0, import_chunk_865at33z.Rxs)(oe.newDynamicState.configs[j]) ? [[j, ie]] : [];
    })));
  }
  if (Y((0, import_chunk_08m42etc.Yya)((0, import_chunk_sjqze7qg.U_)() ? le : R(), R(), oe.newDynamicState)), h && (0, import_chunk_6wgyy4rn.vri)()) {
    for (let V of I().mcp.clients) if (Object.hasOwn(n, V.name) && Object.hasOwn(oe.newDynamicState.configs, V.name) && !oe.response.added.includes(V.name)) Un({ getState: I, subscribe: h.subscribeAppState }, V.name);
  }
  if (oe.deferredSettle) oe.deferredSettle.then((V) => {
    e.enqueueSettleMerge(() => {
      Y(yt(R(), V, I().mcp.clients));
    });
  });
  return oe;
}
async function Ot(e, n, o, c, r, g = "unknown", y = false, v = false, h, b, I, H, R, Y, le, pe, oe, V = () => bt, j = kt, te, ie) {
  let C = new Set(Object.keys(n.configs)), O = new Set(Object.keys(e)), M = !v && Fn.has(g), k = (p, E) => M ? (0, import_chunk_2mm785sn.XTa)(p, E) : (0, import_chunk_2mm785sn.J8t)(p, E), x = v ? (0, import_chunk_f9x2f6cx.ns)() : null, G = v ? [...C].filter((p) => {
    let E = n.configs[p];
    return !O.has(p) && !h?.has(p) && ((0, import_chunk_xcgcdx61.jl)(E) || E?.declaredIn === x || E?.declaredIn !== void 0 && (0, import_chunk_f9x2f6cx.BOe)(E) !== void 0);
  }) : [...C].filter((p) => !O.has(p) && !h?.has(p) && ie?.(p) === true), fe = new Set(G.length > 0 ? Object.keys((0, import_chunk_bzyb60p0.SH)((0, import_chunk_6mfepmbb.cf)(n.configs, G)).allowed) : []), B = [...C].filter((p) => !O.has(p) && !fe.has(p)), Ce = [...O].filter((p) => !C.has(p)), ae = [...C].filter((p) => O.has(p)), ge = new Set([...n.clients, ...r?.().mcp.clients ?? []].filter((p) => p.type === "failed" && p.error === ut).map((p) => p.name)), Me = (p) => {
    let E = pe?.() ?? {}, P = Object.hasOwn(E, p) ? E[p] : void 0, A = Object.hasOwn(e, p) ? e[p] : void 0;
    if (P === void 0 || A === void 0) return false;
    let { scope: N, ...me } = P;
    return (0, import_chunk_bzyb60p0.G4e)(me) && de().areMcpConfigsEqual((0, import_chunk_2mm785sn.J8t)(me), (0, import_chunk_2mm785sn.J8t)(A));
  }, Re = new Set(v ? [] : [...n.clients, ...r?.().mcp.clients ?? []].filter((p) => !Me(p.name) && !(0, import_chunk_bzyb60p0.R3e)(p) && p.type === "disabled" !== (0, import_chunk_bzyb60p0.gi)(p.name)).map((p) => p.name)), z = new Set([...n.clients, ...r?.().mcp.clients ?? []].filter((p) => p.type === "pending").map((p) => p.name)), ne = ae.filter((p) => {
    let E = n.configs[p], P = e[p];
    if (!E || !P || ge.has(p) || Re.has(p)) return true;
    let A = k(P), N = !z.has(p) && (0, import_chunk_bzyb60p0.UTe)(E) && E.declaredIn !== void 0 && A.declaredIn !== void 0 && ((0, import_chunk_f9x2f6cx.hPt)(E) ?? E.declaredIn) !== ((0, import_chunk_f9x2f6cx.hPt)(A) ?? A.declaredIn), me = !v && !z.has(p) && !Me(p) && te?.(p) !== true && E.pluginSource !== A.pluginSource, he = (0, import_chunk_f9x2f6cx.BOe)(A) !== void 0 && E.readFrom !== A.readFrom;
    if (N || me || he || !de().areMcpConfigsEqual(E, A)) return (0, import_chunk_k449cc64.He)(p, `reconcileMcpServers: ${he ? "origin" : "config, folder or owning plugin"} changed, will replace (caller=${g})`), true;
    return false;
  }), ye = (0, import_chunk_4smdap7r.U)([...fe], (p) => (0, import_chunk_xcgcdx61.jl)(n.configs[p]));
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_reconcile", { caller: (0, import_chunk_78g0060s.f)(g), desiredCount: O.size, currentCount: C.size, toRemoveCount: B.length, toAddCount: Ce.length, toReplaceCount: ne.length, retainedPluginCount: ye, retainedFolderServerCount: fe.size - ye, retainedNamedAsSdkCount: (0, import_chunk_4smdap7r.U)([...fe], (p) => j.has(p)) });
  let re = [], ue = [], ce = /* @__PURE__ */ Object.create(null), Q = [...n.clients], Se = [...n.tools];
  for (let p of [...B, ...ne]) {
    let E = Q.find((N) => N.name === p) ?? r?.().mcp.clients.find((N) => N.name === p);
    if (B.includes(p)) {
      (0, import_chunk_cwkztn5x.td)().removedNames.add(p);
      for (let N of [...Q, ...r?.().mcp.clients ?? []]) if (N.name === p) (0, import_chunk_cwkztn5x.td)().removedConfigs.add(N.config);
    }
    let P = n.configs[p];
    if (P) {
      if (E?.type === "connected") {
        (0, import_chunk_gvzh3pxp.zWe)(E, void 0);
        try {
          await E.cleanup();
        } catch (N) {
          (0, import_chunk_w578pjby.t)(`MCP client cleanup failed for ${p}: ${N}`, { level: "error" });
        }
      }
      await de().clearServerCache(p, P);
    }
    let A = (0, import_chunk_px0hhsq7.Rr)(p);
    if (Se = Se.filter((N) => !(0, import_chunk_px0hhsq7.Bu)(N, p, A)), Q = Q.filter((N) => N.name !== p), B.includes(p)) re.push(p);
  }
  let se = [...Ce, ...ne];
  await Promise.allSettled(se.map((p) => de().evictStaleFailedConnectMemoForServe(p, k(e[p]))));
  let je = new Set(se), ke = [import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e].some((p) => Se.some((E) => (0, import_chunk_4vsz8a99.gt)(E, p.name)) || (r?.().mcp.tools ?? []).some((E) => (0, import_chunk_4vsz8a99.gt)(E, p.name))), Ue = (p, E, P, A) => {
    if (A.type === "connected") de().detachAndCloseConnection(A).catch(() => {
    });
    let N = (0, import_chunk_yrpmp1hk.Ror)(p, E);
    return { name: p, client: N, tools: [], error: N.error, fetched: null, dialEpoch: P };
  }, L = async (p) => {
    let E = e[p];
    if (!E) return null;
    let P = (0, import_chunk_yrpmp1hk.hi)();
    if (E.type === "sdk") return { name: p, client: null, tools: [], error: null, fetched: null, dialEpoch: P };
    if (R !== void 0 && !R(p, E)) return { name: p, client: null, tools: [], error: ut, fetched: null, dialEpoch: P };
    let A = k(E), N = () => !v && !Me(p) && (0, import_chunk_bzyb60p0.gi)(p), me = { name: p, client: { name: p, type: "disabled", config: A }, tools: [], error: null, fetched: null, dialEpoch: P };
    if (N()) return me;
    let he = import_chunk_bzyb60p0.dne.get(p) ?? (0, import_chunk_6wgyy4rn.Ktt)(p, A);
    if (he !== void 0) return { ...me, client: { ...me.client, heldBy: he } };
    let _e = () => (0, import_chunk_yrpmp1hk.hi)() !== P && (0, import_chunk_yrpmp1hk.qL)(A), Fe = (Oe) => Ue(p, A, P, Oe), Ze = (Oe) => {
      let ee = (0, import_chunk_bzyb60p0.iw)(Oe, p, A);
      return { name: p, client: { name: p, type: "failed", config: A, ...ee }, tools: [], error: ee.error, fetched: null, dialEpoch: P };
    };
    try {
      if ((0, import_chunk_7625rswd.hU)(A)) {
        if (await (0, import_chunk_44g93ygc.t4)((0, import_chunk_sjqze7qg.uae)(A, I), { serverName: p, context: import_chunk_7625rswd.Rbe }), _e()) return Fe((0, import_chunk_yrpmp1hk.Ror)(p, A));
      }
      let Oe = (0, import_chunk_bzyb60p0.zu)(p, A);
      if (Oe) return Ze(Oe);
      let ee = await de().connectToServer(p, A, void 0, b, I, void 0, le);
      if (_e()) return Fe(ee);
      let ze = [], Ve = null;
      if (ee.type === "connected") {
        ze = await de().fetchToolsForClient(ee, b);
        try {
          let [ct, mn, gn] = await Promise.all([de().fetchCommandsForClient(ee), (0, import_chunk_fpcs74d2.zat)(ee.capabilities) && !_e() ? require("/$bunfs/root/chunk-f7m7jxed.js").fetchMcpSkillsForClient(ee, b) : Promise.resolve([]), de().fetchResourcesForClient(ee)]);
          Ve = { name: p, cmds: [...ct, ...mn], res: gn };
        } catch (ct) {
          (0, import_chunk_tteqedwm.vP)(c, `${g}: mcp listing`, ct);
        }
      } else if (ee.type === "needs-auth") ze = (0, import_chunk_6wgyy4rn.Jte)(p, A);
      if (_e()) return Fe(ee);
      let at = (0, import_chunk_sjqze7qg.U_)() || ee.type === "failed" ? null : (0, import_chunk_bzyb60p0.zu)(p, A);
      if (at || !(0, import_chunk_sjqze7qg.U_)() && N()) {
        if (ee.type === "connected") de().detachAndCloseConnection(ee).catch(() => {
        });
        return at ? Ze(at) : me;
      }
      if (ee.type === "connected" && ee.discoveryAuthFailure && (0, import_chunk_6wgyy4rn.rRn)(p, A)) return { name: p, client: { name: p, type: "needs-auth", config: A }, tools: (0, import_chunk_6wgyy4rn.Jte)(p, A), error: null, fetched: null, dialEpoch: P };
      if (ee.type === "connected" && ee.capabilities?.resources && !ke && !(0, import_chunk_bzyb60p0.gi)(p)) ke = true, ze = [...ze, import_chunk_ttsnbbsg.hTe, import_chunk_ttsnbbsg.J_e, import_chunk_ttsnbbsg.Qqe];
      let un = ee.type === "failed" ? ee.error || "Connection failed" : null, et = (0, import_chunk_8yvg0j99.fq)(A, { client: ee, tools: ze, commands: Ve?.cmds });
      return { name: p, client: et.client, tools: et.tools, error: un, fetched: Ve !== null && et.commands !== void 0 ? { ...Ve, cmds: et.commands } : Ve, dialEpoch: P };
    } catch (Oe) {
      let ee = (0, import_chunk_jv7av99m.D)(Oe);
      return (0, import_chunk_tteqedwm.vP)(c, `${g}: mcp dial`, ee), { name: p, client: null, tools: [], error: ee.message, fetched: null, dialEpoch: P };
    }
  }, F = (p) => {
    let E = e[p];
    return !E || de().isLocalMcpServer(k(E));
  }, J = Object.fromEntries(se.map((p) => [p, k(e[p])])), X = se.map((p) => ({ type: "pending", name: p, config: J[p] }));
  Q.push(...X);
  let Z = (0, import_chunk_bzyb60p0.RT)();
  for (let p of O) {
    (0, import_chunk_cwkztn5x.td)().removedNames.delete(p);
    let E = e[p];
    if (E) {
      let P = n.configs[p], A = k(E, ne.includes(p) ? void 0 : P?.readFrom);
      if (v && P !== void 0 && (0, import_chunk_xcgcdx61.jl)(P)) {
        if (A.pluginSource = P.pluginSource, P.pluginPath !== void 0) A.pluginPath = P.pluginPath;
        if (P.pluginOfficialSourceVouched !== void 0) A.pluginOfficialSourceVouched = P.pluginOfficialSourceVouched;
        if (ne.includes(p)) A.pluginEndpointTemplated = true;
        else if (P.pluginEndpointTemplated !== void 0) A.pluginEndpointTemplated = P.pluginEndpointTemplated;
      }
      Z[p] = A;
    }
  }
  for (let p of fe) {
    let E = n.configs[p];
    if (E) Z[p] = E;
  }
  let Te = () => (0, import_chunk_px0hhsq7.yqt)({ ...e, ...oe }, V()), be = { clients: Q, tools: Se, configs: Z }, ve = /* @__PURE__ */ new Set([...B, ...ne, ...se]), Be = [...ve].map((p) => [p, (0, import_chunk_px0hhsq7.Rr)(p)]);
  if (o((p) => {
    let E = p.mcp.tools.filter((he) => !Be.some(([_e, Fe]) => (0, import_chunk_px0hhsq7.Bu)(he, _e, Fe))), P = p.mcp.clients.filter((he) => !ve.has(he.name)), A = p.mcp.commands.filter((he) => {
      for (let _e of ve) if ((0, import_chunk_bzyb60p0.ZE)(he, _e)) return false;
      return true;
    }), N = p.toolPermissionContext, me = v ? (0, import_chunk_px0hhsq7.Fqn)((0, import_chunk_2ms4sey3.h3r)(N), Te(), "replace") : N;
    if (ve.size === 0 && me === N) return p;
    return { ...p, mcp: { ...p.mcp, tools: E, clients: [...P, ...X], commands: A, resources: (0, import_chunk_y8kqnbqt.wE)(p.mcp.resources, [...ve]), resourceTemplates: (0, import_chunk_y8kqnbqt.wE)(p.mcp.resourceTemplates, [...ve]) }, toolPermissionContext: me };
  }), se.length === 0) return { response: { added: ue, removed: re, errors: ce }, newState: be };
  let qe = () => {
  }, Ee = new Promise((p) => {
    qe = p;
  }), Ne = [], Le = [], st = /* @__PURE__ */ Object.create(null), Je = /* @__PURE__ */ Object.create(null), Pe = { signal: Y, getClients: () => r?.().mcp.clients ?? [], getSuppressedPluginServers: () => r?.().mcp.suppressedPluginMcpServers ?? [], applyMcpUpdate: (p) => o((E) => {
    let P = p(E.mcp);
    return P === E.mcp ? E : { ...E, mcp: P };
  }) }, Xe = async (p) => {
    let E = (0, import_chunk_yrpmp1hk.hi)(), P = await L(p), A = J[p], N = P?.client ?? { type: "failed", name: p, config: A, error: P?.error ?? "Connection failed" }, me;
    try {
      me = (0, import_chunk_vfrxshmx.R1o)(Pe, { client: N, tools: P?.tools ?? [], commands: P?.fetched?.cmds ?? [], attemptEpoch: P?.dialEpoch ?? E });
    } catch (he) {
      if (N.type === "connected") de().detachAndCloseConnection(N).catch(() => {
      });
      throw he;
    }
    if (Je[p] = { outcome: me, client: N, refusedAs: me === "refused" ? (0, import_chunk_ts42083x._Ot)(p, N) : void 0 }, P?.fetched) {
      let he = P.fetched.res;
      Pe.applyMcpUpdate((_e) => {
        if (_e.clients.find((Ze) => Ze.name === p) !== N) return _e;
        return { ..._e, resources: { ..._e.resources, [p]: he } };
      });
    }
    if (me === "superseded") return;
    Ne.push(N), Le.push(...P?.tools ?? []), st[p] = P?.dialEpoch ?? E;
  }, $e = () => {
    Promise.all([(0, import_chunk_30a5awzz.Wk)(se.filter(F), Xe, { concurrency: de().getMcpServerConnectionBatchSize() }), (0, import_chunk_30a5awzz.Wk)(se.filter((p) => !F(p)), Xe, { concurrency: de().getRemoteMcpServerConnectionBatchSize() })]).catch((p) => {
      (0, import_chunk_tteqedwm.vP)(c, `${g}: mcp connect`, p);
      let E = (0, import_chunk_jv7av99m.d)(p);
      for (let P of se) Je[P] ??= { outcome: "applied", client: { type: "failed", name: P, config: J[P], error: E } };
      Pe.applyMcpUpdate((P) => ({ ...P, clients: P.clients.map((A) => A.type === "pending" && je.has(A.name) && de().areMcpConfigsEqual(A.config, J[A.name]) ? { type: "failed", name: A.name, config: A.config, error: E } : A) }));
    }).finally(() => {
      qe({ names: [...je], clients: Ne, tools: Le, dialEpochs: st });
      for (let p of Ne) (0, import_chunk_vfrxshmx.x1o)(p, Pe, b);
      if ((0, import_chunk_vfrxshmx.gUr)(J, Pe).length > 0) (0, import_chunk_vfrxshmx.z9n)(J, Pe, b).catch((p) => (0, import_chunk_tteqedwm.vP)(c, `${g}: mcp retry`, p));
    });
  };
  if (y) return ue.push(...se), setImmediate($e), { response: { added: ue, removed: re, errors: ce }, newState: be, deferredSettle: Ee };
  if (H) {
    let p = H.getDynamicMcpState(), E = { ...p, clients: [...p.clients.filter((P) => !ve.has(P.name)), ...X], tools: p.tools.filter((P) => !Be.some(([A, N]) => (0, import_chunk_px0hhsq7.Bu)(P, A, N))), configs: Z };
    H.setDynamicMcpState(E);
  }
  $e();
  let it = await Ee;
  ue.push(...se);
  for (let p of se) {
    let E = Je[p];
    if (!E) continue;
    if (E.outcome === "refused") {
      if (E.refusedAs) ce[p] = We(E.refusedAs);
    } else if (E.outcome === "applied" && E.client.type === "failed") ce[p] = We(E.client);
    else if (E.outcome === "superseded") {
      let P = r?.().mcp.clients.find((A) => A.name === p);
      if (P?.type === "failed" && P.errorCode === "IDENTITY_CHANGED" && de().areMcpConfigsEqual(P.config, J[p])) ce[p] = We(P);
    }
  }
  return { response: { added: ue, removed: re, errors: ce }, newState: yt(be, it, r?.().mcp.clients) };
}
async function iha(e, n, o, c, r, g, y, v, h, b, I = false) {
  let H = /* @__PURE__ */ Object.create(null), R = /* @__PURE__ */ Object.create(null);
  if (n !== void 0) {
    if (!I) await (0, import_chunk_awaxe5q7.j2)({ hasDynamicMcpConfig: true });
    let j = /* @__PURE__ */ Object.create(null);
    if (j[e] = n, Object.hasOwn((0, import_chunk_bzyb60p0.SH)(j).allowed, e)) H[e] = n;
    else R[e] = dUr;
  }
  let Y = (0, import_chunk_px0hhsq7.Rr)(e), le = (j) => (0, import_chunk_px0hhsq7.Bu)(j, e, Y), pe = (j) => {
    let te = (0, import_chunk_bzyb60p0.RT)(), ie = j.configs[e];
    if (Object.hasOwn(j.configs, e) && ie !== void 0) te[e] = ie;
    return { configs: te, clients: j.clients.filter((C) => C.name === e), tools: j.tools.filter(le) };
  }, oe = (j) => {
    let te = c.getDynamicMcpState(), ie = (0, import_chunk_bzyb60p0.RT)();
    for (let [O, M] of Object.entries(te.configs)) if (O !== e) ie[O] = M;
    let C = j.configs[e];
    if (Object.hasOwn(j.configs, e) && C !== void 0) ie[e] = C;
    c.setDynamicMcpState({ configs: ie, clients: [...te.clients.filter((O) => O.name !== e), ...j.clients], tools: [...te.tools.filter((O) => !le(O)), ...j.tools] });
  }, V = await Ot(H, pe(c.getDynamicMcpState()), r, y, g, o, false, false, void 0, v, h, { getDynamicMcpState: () => pe(c.getDynamicMcpState()), setDynamicMcpState: oe }, void 0, void 0, void 0, b, void 0, void 0, void 0, () => true);
  return oe(V.newState), { ...V.response, errors: { ...R, ...V.response.errors } };
}
function Bn(e, n) {
  return n = typeof n == "function" ? n : void 0, e && e.length ? (0, import_chunk_pbteexar.lxt)(e, void 0, n) : [];
}
var Et = Bn;
function Ie(e) {
  return new import_chunk_nynf6rf6.rI(e === void 0 ? import_chunk_2d3wkrwb.aue : `${import_chunk_2d3wkrwb.aue}: ${e}`, import_chunk_2d3wkrwb.aue, "unsupported_request");
}
var qn = require("/$bunfs/root/chunk-1z40fq3p.js"), Nn = require("/$bunfs/root/chunk-gjd6m6ps.js");
function Ye() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
var At = (e, n) => {
  let o = It(n);
  o.resolveDeferredPluginStartup();
  let { serverName: c } = e;
  if (typeof c !== "string") throw new import_chunk_jv7av99m.gr("mcp_reconnect: serverName must be a string");
  let r = o.pendingManualExchange(c);
  if (r) return $n(r, n, o, c);
  return Lt(n, o, c);
}, xt = (e, n) => {
  let o = It(n);
  o.resolveDeferredPluginStartup();
  let c = n.engineState(), { serverName: r, enabled: g } = e;
  if (typeof r !== "string") throw new import_chunk_jv7av99m.gr("mcp_toggle: serverName must be a string");
  if (typeof g !== "boolean") throw new import_chunk_jv7av99m.gr("mcp_toggle: enabled must be a boolean");
  if ((0, import_chunk_prn6030k._b)(r) && qn?.getTeleportRelayEnvConfig()) Nn?.noteChromeSwitch(g);
  let y = c.mcp.clients.find((R) => R.name === r) ?? o.dynamicClients().find((R) => R.name === r), v = ft(o, c, r), h = v ? o.registeredSdkServer(r) : o.ownerConfig(r) ?? o.sdkClients().find((R) => R.name === r)?.config ?? (g ? null : y?.config ?? null), b = h ? (0, import_chunk_bzyb60p0.zu)(r, h) : null;
  if (!h) {
    if (g && (0, import_chunk_prn6030k._b)(r)) nt(n, o, r, true);
    throw new import_chunk_jv7av99m.gr(`Server not found: ${(0, import_chunk_kx2fp6pc.wn)(r)}`);
  }
  if (!g) return v ? Vn(n, o, r, h) : zn(n, o, r, h, c);
  if (b) throw b === "managed-policy" ? (0, import_chunk_bzyb60p0.eHe)(r, b, h, `MCP server ${(0, import_chunk_kx2fp6pc.wn)(r)} is blocked by enterprise managed policy`) : new import_chunk_jv7av99m.gr((0, import_chunk_bzyb60p0.QQt)(r, "enabling"));
  let I = [...c.mcp.clients, ...o.dynamicClients(), ...o.sdkClients()].filter((R) => R.name === r), H = h.type !== "sdk" && !(0, import_chunk_bzyb60p0.gi)(r) && o.pendingManualExchange(r) === void 0 && !o.postOAuthReconnectPending.has(r) && I.length > 0 && I.every((R) => R.type === "connected" && !(0, import_chunk_tntx4v84.U$)(R) && (R.transportErrorState?.consecutiveErrors ?? 0) === 0 && R.toolsListError === void 0 && !R.discoveryBearerRejected && !R.discoveryAuthFailure && !R.capabilities?.prompts && !R.capabilities?.resources && Ye().areMcpConfigsEqual(R.config, h));
  if (nt(n, o, r, true), v) return Kn(n, o, r, h);
  if (H) {
    (0, import_chunk_42tcgre6.q)("info", "cli_mcp_toggle_unchanged");
    return;
  }
  return Ft(n, o, r, h, false);
};
function ft(e, n, o) {
  return !(0, import_chunk_prn6030k._b)(o) && e.registeredSdkServer(o) !== null && e.ownerConfig(o) === null && !n.mcp.clients.some((c) => c.name === o) && !e.dynamicClients().some((c) => c.name === o);
}
function It(e) {
  if (e.mcpControlLanes === null) throw Ie();
  return e.mcpControlLanes;
}
function nt(e, n, o, c) {
  (0, import_chunk_bzyb60p0.sMn)(o, c, e.storageV5), n.switchSaved(o, c);
}
async function $n(e, n, o, c) {
  return await e.catch(() => {
  }), Lt(n, o, c);
}
function Lt(e, n, o) {
  let c = e.engineState(), r = n.ownerConfig(o) ?? n.sdkClients().find((h) => h.name === o)?.config ?? null, g = r ? (0, import_chunk_bzyb60p0.zu)(o, r) : null;
  if (!r) throw new import_chunk_jv7av99m.gr(`Server not found: ${(0, import_chunk_kx2fp6pc.wn)(o)}`);
  if (g === "managed-policy") throw (0, import_chunk_bzyb60p0.eHe)(o, g, r, `MCP server ${(0, import_chunk_kx2fp6pc.wn)(o)} is blocked by enterprise managed policy`);
  if ((0, import_chunk_bzyb60p0.gi)(o)) throw new import_chunk_jv7av99m.gr((0, import_chunk_bzyb60p0.oPn)(o, "reconnecting"));
  if (g) throw new import_chunk_jv7av99m.gr((0, import_chunk_bzyb60p0.QQt)(o, "reconnecting"));
  let y = c.mcp.clients.find((h) => h.name === o) ?? n.dynamicClients().find((h) => h.name === o), v = !(0, import_chunk_s3qtr6en.M$r)(n.postOAuthReconnectPending, o) && y !== void 0 && y.type !== "cached" && y.type !== "pending";
  return Ft(e, n, o, r, v);
}
async function Ft(e, n, o, c, r) {
  n.seedControlDialSlot(o, c);
  let g = (0, import_chunk_qdcbcsg7.tJe)(o, c), y = await n.reconnectForControlRequest(o, c, { distrust: r || g }), v = (0, import_chunk_z688m88d.Zt)(n.ownerConfig(o), c);
  Qe(e, Ht((0, import_chunk_wddxyb00.Ubt)(e), n.landControlResult(o, v ? { ...y, asked: true } : y)));
}
function Qe(e, n) {
  if (e.replyNow !== null) e.replyNow(n);
  if (n.subtype === "error") throw new import_chunk_tteqedwm.oie(n.error);
}
function Ht(e, n) {
  if (n.type === "connected") return { subtype: "success" };
  if (n.type === "failed") {
    if (e) (0, import_chunk_w578pjby.t)(`mcp reconnect/toggle failed for ${(0, import_chunk_kx2fp6pc.wn)(n.name)}: ${n.error ?? "(no detail)"}`, { level: "error" });
    let o = n.error ?? "Connection failed";
    return { subtype: "error", error: e ? Ge(o) : o };
  }
  return { subtype: "error", error: We(n) };
}
function zn(e, n, o, c, r) {
  return nt(e, n, o, false), cBs(e, n, o, c, r);
}
function cBs(e, n, o, c, r, g) {
  let y = [...n.startupClients(), ...n.sdkClients(), ...n.dynamicClients(), ...r.mcp.clients].filter((h) => h.name === o), v = y.filter((h) => h.type === "connected");
  if (v.length > 0) {
    let h = Ye();
    return Et([c, ...v.map((b) => b.config)], h.areMcpConfigsEqual).reduce((b, I) => b.then(() => h.clearServerCache(o, I)), Promise.resolve()).then(() => Pt(e, n, o, c, v.at(-1), g));
  }
  return Pt(e, n, o, c, y[0], g);
}
async function Vn(e, n, o, c) {
  nt(e, n, o, false), await n.disableSdkServer(o), cUr(e, n, o), Qe(e, { subtype: "success" });
}
async function Kn(e, n, o, c) {
  let r = await n.enableSdkServer(o);
  Qe(e, Ht((0, import_chunk_wddxyb00.Ubt)(e), r ?? { name: o, type: "failed", config: c, error: `Server not found: ${(0, import_chunk_kx2fp6pc.wn)(o)}` }));
}
function Pt(e, n, o, c, r, g = () => true) {
  if (!g()) return;
  let y = e.engineState().mcp.clients.find((h) => h.name === o) ?? n.dynamicClients().find((h) => h.name === o) ?? r;
  if (y?.type === "cached" || y?.type === "connected" && y !== r || (0, import_chunk_sjqze7qg.A5)()) return Wn(o, y?.config ?? c, y, r).then(() => {
    if (!g()) return;
    cUr(e, n, o), Qe(e, { subtype: "success" });
  });
  cUr(e, n, o), Qe(e, { subtype: "success" });
}
async function Wn(e, n, o, c) {
  if (o?.type === "cached") Ye().disposeServerConnectionDetached(e, o.config);
  else if (o?.type === "connected" && o !== c) await Ye().clearServerCache(e, o.config);
  if (!(0, import_chunk_sjqze7qg.A5)()) return;
  await (0, import_chunk_yrpmp1hk.Zqe)(Ye().dropDiscoveryEntry(e, n));
}
function cUr(e, n, o) {
  n.markDynamicServerDisabled(o);
  let c = (0, import_chunk_px0hhsq7.Rr)(o);
  e.setEngineState((r) => ({ ...r, mcp: { ...r.mcp, clients: r.mcp.clients.map((g) => g.name === o ? { name: o, type: "disabled", config: g.config } : g), tools: (0, import_chunk_08m42etc.V3)(r.mcp.tools, (g) => (0, import_chunk_px0hhsq7.Bu)(g, o, c)), commands: (0, import_chunk_08m42etc.V3)(r.mcp.commands, (g) => (0, import_chunk_bzyb60p0.ZE)(g, o)), resources: (0, import_chunk_y8kqnbqt.wE)(r.mcp.resources, o), resourceTemplates: (0, import_chunk_y8kqnbqt.wE)(r.mcp.resourceTemplates, o) } }));
}
var jt = (e, n) => {
  let o = k1o(n);
  return { mcpServers: e.liveReply === true && import_chunk_wddxyb00.Yh.of(n.session).transportPersists === true ? Yn(o) : o };
}, Gn = 256;
function Yn(e) {
  if (Buffer.byteLength((0, import_chunk_w578pjby._)(e)) <= import_chunk_53snsm3k._lt - Gn) return e;
  return e.map(({ tools: n, serverInfo: o, capabilities: c, ...r }) => ({ ...r, ...n && { toolCount: n.length } }));
}
function k1o(e) {
  let n = Jn(e.mcpConnections());
  if (!(0, import_chunk_wddxyb00.Ubt)(e)) return n;
  if (e.redactsPersistedLane()) return n.map(({ name: o, status: c }) => ({ name: o, status: c }));
  return n.map((o) => ({ name: o.name, status: o.status, serverInfo: o.serverInfo, error: o.error === void 0 ? void 0 : Ge(o.error), error_code: o.error_code, config: void 0, transport: o.transport, sessionProxied: o.sessionProxied, cloudServiceProvided: o.cloudServiceProvided, urlHost: (0, import_chunk_6e68m1dj.hn)() ? o.urlHost : void 0, scope: o.scope, source: o.source, tools: o.tools, toolCount: o.toolCount, capabilities: o.capabilities }));
}
var Ut = () => (0, import_chunk_mmvajxhx.kvo)(), Bt = async (e, n) => {
  if (e.detail != null && e.detail !== "summary" && e.detail !== "full") throw new import_chunk_jv7av99m.gr("get_context_usage: detail must be 'summary' or 'full'");
  let o = await Qn(n, e.detail, ot(n)), c = null;
  if (ot(n)) try {
    c = (0, import_chunk_f9x2f6cx.tjl)(n.session.precompute) ? null : (0, import_chunk_s3qtr6en.Qpa)(o.model);
  } catch (r) {
    (0, import_chunk_k449cc64.i)(r);
  }
  return { ...o, ...c !== null && { coldResumeQuota: c }, memoryFiles: n.redactsPersistedLane() ? [] : o.memoryFiles, ...!ot(n) && (0, import_chunk_53snsm3k.fEs)(o) };
};
function Qn(e, n, o) {
  let { messages: c, mainLoopModel: r = (0, import_chunk_865at33z.dt)(), ...g } = e.contextUsageInputs();
  return (0, import_chunk_xqa844xs.Q$e)({ session: e.session, messages: c, getAppState: e.engineState, getMcp: () => e.engineState().mcp, storageV5: e.storageV5, credentials: e.credentials, options: { mainLoopModel: r, ...g }, detail: n, localPaths: o });
}
var qt = () => ({ models: (0, import_chunk_gq1dr8pm.l0e)((0, import_chunk_gq1dr8pm.GIi)((0, import_chunk_gq1dr8pm.dit)())) }), Nt = () => ({ text: (0, import_chunk_wbk1hf21.Dr)((0, import_chunk_bzyb60p0.K4e)()) }), $t = async (e, n) => {
  (0, import_chunk_bzyb60p0.uen)(), (0, import_chunk_bzyb60p0.fen)();
  let o = await (0, import_chunk_bzyb60p0.d5)((0, import_chunk_18rsj2ts.oa)(), n.storageV5);
  return { available_output_styles: Object.keys(o) };
}, zt = async (e, n) => {
  if (e.skip_behaviors != null && typeof e.skip_behaviors !== "boolean") throw new import_chunk_jv7av99m.gr("get_usage: skip_behaviors must be a boolean");
  if (e.detached != null && typeof e.detached !== "boolean") throw new import_chunk_jv7av99m.gr("get_usage: detached must be a boolean");
  let o = await (0, import_chunk_rz37yzbd.L3r)({ storageV5: n.storageV5, credentials: n.credentials, live: (0, import_chunk_ga36k9j5.sDt)((0, import_chunk_865at33z.dt)(), (0, import_chunk_k67pwqya.bc)(n.engineState()), n.engineState().ultracode), includeBehaviors: !n.redactsPersistedLane() && e.skip_behaviors !== true }), c = ot(n);
  if (!o.behaviors || c && !(0, import_chunk_wddxyb00.vs)(n.session)) return o;
  let r = { fix: void 0, ...!c && { recommendations: void 0 } }, { day: g, week: y } = o.behaviors;
  return { ...o, behaviors: { day: { ...g, ...r }, week: { ...y, ...r } } };
};
function Jn({ connections: e, tools: n }) {
  let o = (0, import_chunk_pbteexar.Ls)(n, "name");
  return e.filter((r) => !(0, import_chunk_271xsh6x.X5)(r) && !(0, import_chunk_271xsh6x.fre)(r)).map((r) => {
    let g = (0, import_chunk_2mwshd9r.Wde)(r.name, r.config) || (0, import_chunk_xcgcdx61.g3)(r.config), y = (0, import_chunk_ts09sys6.XH)(r.name, r.config), v, h, b = false;
    if (r.config.type === "sse" || r.config.type === "http") {
      let R = URL.parse(r.config.url);
      if (b = g && y === "dynamic" && R !== null && (0, import_chunk_2mwshd9r.nLl)(R), v = (0, import_chunk_fwhva0e1.vMt)({ type: r.config.type, url: r.config.url, headers: r.config.headers, oauth: r.config.oauth }, r.config.scope), !g && import_chunk_bzyb60p0.hQ.has(r.config.scope)) {
        let Y = (0, import_chunk_538r8e0n.gTe)(r.name, r.config, { detail: "origin" });
        try {
          h = Y === void 0 || Y.includes("${") ? void 0 : new URL(Y).host || void 0;
        } catch {
          h = void 0;
        }
      }
    } else if (r.config.type === "claudeai-proxy") v = { type: "claudeai-proxy", url: r.config.url, id: r.config.id };
    else if (r.config.type === "stdio" || r.config.type === void 0) v = { type: "stdio", command: r.config.command, args: r.config.args };
    let I = (0, import_chunk_xcgcdx61.ji)(r) ? (0, import_chunk_bzyb60p0.nHe)(o, r.name).map((R) => ({ name: R.mcpInfo?.toolName ?? R.name, annotations: { readOnly: R.isReadOnly({}) || void 0, destructive: R.isDestructive?.({}) || void 0, openWorld: R.isOpenWorld?.({}) || void 0 }, ...R.mcpInfo?.uiMeta && { _meta: R.mcpInfo.uiMeta } })) : void 0, H;
    if ((0, import_chunk_xcgcdx61.ji)(r) && r.capabilities.experimental) {
      let R = { ...r.capabilities.experimental };
      if ("claude/channel" in R && (!(0, import_chunk_fcwndvnw.GRn)(r.capabilities, "claude/channel") || !(0, import_chunk_9vbqjvhj.LY)() || !(0, import_chunk_9vbqjvhj.Wor)(r.config.pluginSource) || r.type === "connected" && r.protocolEra === "modern")) delete R["claude/channel"];
      if (Object.keys(R).length > 0) H = { experimental: R };
    }
    return { name: r.name, status: (0, import_chunk_fwhva0e1.D8t)(r.type), serverInfo: (0, import_chunk_xcgcdx61.ji)(r) ? r.serverInfo : void 0, error: r.type === "failed" ? r.error : void 0, error_code: (0, import_chunk_xfj2cwfv.$xo)(r), config: v, transport: r.config.type ?? "stdio", ...g ? { sessionProxied: g, ...b && { cloudServiceProvided: b } } : h && { urlHost: h }, scope: r.config.scope, source: y, tools: I, capabilities: H };
  });
}
function ot(e) {
  return !e.redactsPersistedLane() && !(0, import_chunk_wddxyb00.SDe)(e.session);
}
function Xn(e) {
  let { serverName: n, mode: o } = e;
  if (typeof n !== "string") throw new import_chunk_jv7av99m.gr("set_mcp_permission_mode_override: serverName must be a string");
  let c = o === null ? null : (0, import_chunk_pbteexar.a_)(o);
  if (c === void 0) throw new import_chunk_jv7av99m.gr(import_chunk_pbteexar.l6e);
  let r = (0, import_chunk_xcgcdx61.z1l)(c);
  if (!r.ok) throw (0, import_chunk_w578pjby.t)(`set_mcp_permission_mode_override: rejected mode='${r.rejected}' for ${(0, import_chunk_kx2fp6pc.wn)(n)} (tighten-only)`, { level: "warn" }), new import_chunk_jv7av99m.gr(`Permission mode override over the control channel is tighten-only ('default', 'auto', or null); rejected '${r.rejected}'`);
  if (r.override === "auto" && !(0, import_chunk_bzyb60p0.JS)()) {
    let g = (0, import_chunk_bzyb60p0.gH)();
    throw new import_chunk_jv7av99m.gr(g ? `Cannot pin MCP server '${(0, import_chunk_kx2fp6pc.wn)(n)}' to auto: ${(0, import_chunk_bzyb60p0.rfe)(g)}` : `Cannot pin MCP server '${(0, import_chunk_kx2fp6pc.wn)(n)}' to auto`);
  }
  return { serverName: n, override: r.override };
}
var Vt = `set_mcp_permission_mode_override: askForTools must be a list of at most ${import_chunk_pbteexar.Pqn} {name} entries, each name 1 to 64 letters, digits, underscores or hyphens`;
function Zn(e, n) {
  let o = e.askForTools;
  if (o === void 0 || o === null) return;
  if (!Array.isArray(o) || o.length > import_chunk_pbteexar.Pqn) throw new import_chunk_jv7av99m.gr(Vt);
  let c = (0, import_chunk_px0hhsq7.Rr)(n), r = /* @__PURE__ */ new Set();
  for (let g of o) {
    let y = typeof g === "object" && g !== null && !Array.isArray(g) ? g.name : void 0;
    if (typeof y !== "string" || !import_chunk_pbteexar.RDr.test(y)) throw new import_chunk_jv7av99m.gr(Vt);
    let v = y.startsWith(c) ? y.slice(c.length) : y;
    if (v !== "") r.add(v);
  }
  return r.size > 0 ? [...r] : void 0;
}
var Kt = (e, n) => {
  let { serverName: o, override: c } = Xn(e), r = Zn(e, o), g = c === "default" ? r : void 0, y = false;
  if (n.setEngineState((v) => {
    let h = v.toolPermissionContext.mcpPermissionModeOverrides, b = v.toolPermissionContext.mcpAskForTools ?? {};
    if (y = Object.hasOwn(h, o), (y ? h[o] === c : c === void 0) && (0, import_chunk_z688m88d.Zt)((0, import_chunk_xcgcdx61.ko)(b, o), g)) return v;
    let I = g === void 0 ? (0, import_chunk_y8kqnbqt.wE)(b, o) : { ...b, [o]: g };
    return { ...v, toolPermissionContext: { ...v.toolPermissionContext, mcpPermissionModeOverrides: c === void 0 ? (0, import_chunk_y8kqnbqt.wE)(h, o) : { ...h, [o]: c }, mcpAskForTools: I } };
  }), n.isKnownMcpServer(o)) return;
  return { warning: c === void 0 ? y ? `MCP server '${(0, import_chunk_kx2fp6pc.wn)(o)}' is not known; its stored override was cleared.` : `MCP server '${(0, import_chunk_kx2fp6pc.wn)(o)}' is not known; no override was present to clear.` : `MCP server '${(0, import_chunk_kx2fp6pc.wn)(o)}' is not yet known; override stored but will not apply until a server with that exact name connects.` };
};
var uUr = 10485760, eo = "ui://";
function Wt() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js");
}
function we(e, n) {
  throw (0, import_chunk_cqa9hrgx.m)("mcp_read_resource", e), new import_chunk_jv7av99m.gr(n);
}
var Gt = async (e, n) => {
  if (n.redactsPersistedLane()) we("redacting_lane", "mcp_read_resource is not available on this connection");
  let { serverName: o, uri: c } = e;
  if (typeof o !== "string") we("bad_request", "mcp_read_resource: serverName must be a string");
  if (typeof c !== "string") we("bad_request", "mcp_read_resource: uri must be a string");
  if (!c.startsWith(eo)) we("not_ui_uri", "mcp_read_resource: uri must use the ui:// scheme");
  let r = n.mcpConnections().connections.find((R) => R.name === o);
  if (!r) {
    if (n.isKnownMcpServer(o)) we("not_connected", `MCP server ${(0, import_chunk_kx2fp6pc.wn)(o)} is not connected`);
    we("server_not_found", `Server not found: ${(0, import_chunk_kx2fp6pc.wn)(o)}`);
  }
  let g = (0, import_chunk_bzyb60p0.zu)(r.name, r.config);
  if (g === "managed-policy") throw (0, import_chunk_cqa9hrgx.m)("mcp_read_resource", (0, import_chunk_2mwshd9r.Bde)(o, r.config) ? "reserved_address" : "policy_blocked"), (0, import_chunk_bzyb60p0.eHe)(o, g, r.config, `MCP server ${(0, import_chunk_kx2fp6pc.wn)(o)} is blocked by enterprise managed policy`);
  if (r.type === "disabled" || (0, import_chunk_bzyb60p0.gi)(r.name)) we("disabled", (0, import_chunk_bzyb60p0.oPn)(o, "reading"));
  if (g) we("approval_required", (0, import_chunk_bzyb60p0.QQt)(o, "reading"));
  if (!(0, import_chunk_xcgcdx61.ji)(r)) we("not_connected", `MCP server ${(0, import_chunk_kx2fp6pc.wn)(o)} is not connected (status: ${(0, import_chunk_fwhva0e1.D8t)(r.type)})`);
  if (r.config.type === "sdk") we("sdk_server", "mcp_read_resource does not support SDK MCP servers: the caller hosts them and can read them directly");
  let y = (0, import_chunk_ze4kt7fs.A7)(r);
  if (y) we("hosted_desktop", y.message);
  if ((0, import_chunk_ze4kt7fs.FFn)(r.name)) we("users_machine", "mcp_read_resource: in a cloud session, resources on the user's computer or browser cannot be read");
  let v = { transport: (0, import_chunk_78g0060s.f)(r.config.type ?? "stdio"), row_type: (0, import_chunk_78g0060s.f)(r.type) }, h = Date.now(), b = (0, import_chunk_78g0060s.S)("connect"), I;
  try {
    let R = await Wt().mcpClientModule().ensureConnectedClient(r, { context: "mcp_read_resource" });
    b = (0, import_chunk_78g0060s.S)("read"), I = await (0, import_chunk_gvzh3pxp._9e)(R, c, { timeout: (0, import_chunk_98tkmkvx.bf)() });
  } catch (R) {
    let Y = Wt(), le = Y.mcpSdkErrorClassificationModule().getMcpErrorCode(R), pe = (0, import_chunk_jv7av99m.w)(R);
    throw (0, import_chunk_cqa9hrgx.m)("mcp_read_resource", "read_failed", { ...v, elapsed_ms: Date.now() - h, phase: b, error_source: (0, import_chunk_78g0060s.f)((0, import_chunk_yz5b8aaa.gz)(R)), ...le !== void 0 && { rpc_code: le }, ...pe !== void 0 && { local_code: Y.mcpClientModule().sanitizeConnectErrorCodeForTelemetry(pe) }, ...R instanceof Error && "status" in R && typeof R.status === "number" && { http_status: (0, import_chunk_78g0060s.Gs)(R.status) } }), (0, import_chunk_w578pjby.t)(`mcp_read_resource: resources/read on "${r.name}" failed (${(0, import_chunk_jv7av99m.Qu)(R) ?? "unknown"})`, { level: "warn" }), new import_chunk_tteqedwm.oie((0, import_chunk_wddxyb00.Ubt)(n) ? "mcp_read_resource: could not read the resource" : (0, import_chunk_kx2fp6pc.wn)(`mcp_read_resource: ${(0, import_chunk_jv7av99m.d)(R)}`));
  }
  let H = I.contents.map((R) => ({ uri: R.uri, mimeType: R.mimeType, text: "text" in R ? R.text : void 0, blob: "blob" in R ? R.blob : void 0, _meta: (0, import_chunk_w4dc83v7.PH)(R._meta) }));
  if ((0, import_chunk_w578pjby._)(H).length > uUr) we("too_large", `mcp_read_resource: the resource exceeds the ${uUr}-character limit`);
  return (0, import_chunk_cqa9hrgx.u)("mcp_read_resource", { ...v, elapsed_ms: Date.now() - h }), { contents: H };
};
var Yt = () => {
};
var to = 16, no = "prefetch_attachments: files must be a list of at most 16 { file_uuid: UUID, file_size?: number }, issued_at a number (epoch milliseconds), and only_these, if present, a boolean", Jt = (e, n) => {
  let o = oo(e, n.credentials, false);
  if (o === void 0) throw new import_chunk_tteqedwm.oie(no);
  return { accepted: o };
};
function oo(e, n, o) {
  let c = (0, import_chunk_ma3kja9f.T)(e) ? e : void 0, r = c?.files, g = c?.issued_at, y = c?.only_these;
  if (!Array.isArray(r) || r.length > to || typeof g !== "number" || y !== void 0 && y !== null && typeof y !== "boolean") return Qt(o);
  let v = [];
  for (let h of r) {
    let b = (0, import_chunk_mzmcvr6c.ht)((0, import_chunk_ma3kja9f.T)(h) ? h.file_uuid : void 0), I = (0, import_chunk_ma3kja9f.T)(h) ? h.file_size : void 0;
    if (b === null || I !== void 0 && typeof I !== "number") return Qt(o);
    v.push({ file_uuid: b, ...I !== void 0 && { file_size: I }, ...(0, import_chunk_ma3kja9f.T)(h) && h.is_image === true && { is_image: true } });
  }
  return (0, import_chunk_tjr3fy8z.gti)(v, { issuedAt: g, credentials: n, onlyThese: y === true, isUnstoredFrame: o });
}
function Qt(e) {
  (0, import_chunk_cqa9hrgx.l)("bridge_attachment_prefetch", "invalid_request", e ? { lane: (0, import_chunk_78g0060s.S)("stream") } : void 0), (0, import_chunk_tjr3fy8z.Mtt)("bridge_attachment_prefetch_invalid_request", {});
}
var Xt = (e, { session: n }) => {
  let o = e.project_uuid, c = (0, import_chunk_mzmcvr6c.ht)(o);
  if (o !== null && c === null) throw new import_chunk_jv7av99m.gr("set_attached_project: project_uuid must be a UUID or null");
  if (!(0, import_chunk_at8q9dqk.hq)()) throw new import_chunk_jv7av99m.gr("set_attached_project: this session does not read its Project through the service that hosts it");
  if (c === null) {
    if (import_chunk_c203g5kd.s.CLAUDE_PROJECT_UUID === void 0) return;
    import_chunk_c203g5kd.s.unset("CLAUDE_PROJECT_UUID");
  } else import_chunk_c203g5kd.s.set("CLAUDE_PROJECT_UUID", c);
  (0, import_chunk_h8v51dgb.S4e)(), (0, import_chunk_bzyb60p0.AP)(n, c === null ? "project_left" : "project_changed");
};
function aha(e) {
  return { latched: e, attempted: e, pending: void 0, fallback: void 0, owed: false };
}
function lha(e, n) {
  e.latched = n, e.attempted = n;
}
function nn(e, n, o) {
  let { titles: c } = n, r = (0, import_chunk_f9x2f6cx.W)();
  if (c.pending?.sessionId === r) return c.pending.title;
  let g = (0, import_chunk_bzyb60p0.Bc)() !== null, y = { settled: false, retracted: false }, v = (0, import_chunk_qmyc67pd.pnr)(e, new AbortController().signal, n.credentials).then((b) => {
    if (y.settled = true, y.retracted) return null;
    let I = b;
    if (b.kind === "titled") {
      let Y = (0, import_chunk_xfj2cwfv.Ba)(b.title);
      I = Y ? { kind: "titled", title: Y } : { kind: "unusable" };
    }
    if (c.fallback?.sessionId === r) {
      let Y = (0, import_chunk_qmyc67pd.q3r)(c.fallback.fallback, I);
      c.fallback = Y ? { sessionId: r, fallback: Y } : void 0;
    }
    if (I.kind !== "titled") return c.attempted = c.latched, null;
    c.attempted = true;
    let { title: H } = I, R = () => {
      try {
        (0, import_chunk_bzyb60p0.RSt)(r, H, n.storageV5);
      } catch (Y) {
        if ((0, import_chunk_jv7av99m.fn)(Y)) (0, import_chunk_w578pjby.t)(`saveAiGeneratedTitle failed: ${Y}`);
        else rt(n, Y);
      }
    };
    if (r !== (0, import_chunk_f9x2f6cx.W)()) {
      if (g) R();
      return H;
    }
    if (!(0, import_chunk_bzyb60p0.LW)(r)) {
      if ((0, import_chunk_bzyb60p0.Bc)()) R();
      else (0, import_chunk_bzyb60p0.zhi)(H);
      (0, import_chunk_r60bafc1.NT)()?.adoptLocalAiTitle?.(), (0, import_chunk_qmyc67pd.h0a)(H);
    }
    return H;
  }).catch((b) => (y.settled = true, c.attempted = c.latched, rt(n, b), null)), h = { sessionId: r, title: v, promptUuid: o, call: y };
  return c.pending = h, v.then((b) => {
    if (b === null && c.pending === h) c.pending = void 0;
  }), v;
}
function on(e, n, o) {
  let { titles: c } = n;
  if (c.attempted) return;
  let r = (0, import_chunk_f9x2f6cx.W)(), g = (0, import_chunk_qmyc67pd.K3r)({ prose: e, isContinuationTurn: false, fallback: c.fallback?.sessionId === r ? c.fallback.fallback : void 0 });
  if (!g) return;
  if (c.attempted = true, c.fallback = { sessionId: r, fallback: g }, !(0, import_chunk_bzyb60p0.LW)(r)) nn(g.text, n, o);
}
function fUr(e) {
  if (e.fallback = void 0, e.pending?.sessionId === (0, import_chunk_f9x2f6cx.W)() && !e.pending.call.settled) e.pending.call.retracted = true, e.pending = void 0, e.attempted = e.latched;
}
function dha(e, n) {
  let o = e.pending?.promptUuid;
  if (o !== void 0 && n.includes(o)) fUr(e);
}
function cha(e, n) {
  if (n.titles.attempted || e.shouldQuery === false || e.peerFrom || e.isSynthetic || !(0, import_chunk_865at33z.$u)(e.origin)) return;
  let o;
  try {
    o = (0, import_chunk_qmyc67pd.k4o)({ content: e.content, origin: e.queuedOrigin, commands: n.dispatchCommands(), dispatchesSlashCommands: e.dispatchesSlashCommands });
  } catch (c) {
    rt(n, c);
    return;
  }
  if (o === null) return;
  if ((0, import_chunk_z2xw6net.o1)() || (0, import_chunk_dfgwgq6h.cKs)() || (0, import_chunk_5zps0wmn.Qi)("session.append")) {
    n.titles.owed = true;
    return;
  }
  on(o, n, e.uuid);
}
function uha(e) {
  try {
    if (!e.titles.owed) return;
    let n = e.conversation().findLast((r) => en(r) !== void 0), o = n && en(n), c = o && (0, import_chunk_qmyc67pd.V3r)({ ...o, commands: e.dispatchCommands() });
    if (c) e.titles.owed = false, on(c, e);
  } catch (n) {
    rt(e, n);
  }
}
function en(e) {
  if ((0, import_chunk_865at33z.uhe)(e)) return (0, import_chunk_bzyb60p0.wH)(e) ? void 0 : { content: e.message.content, origin: e.origin, queueSkipSlashCommands: e.queueSkipSlashCommands };
  if (e.type !== "attachment" || e.attachment.type !== "queued_command") return;
  let n = (0, import_chunk_s3d8sr7p.stt)(e.attachment, e.uuid);
  return n && !n.isMeta && (0, import_chunk_865at33z.$u)(n.origin) ? { content: n.content, origin: n.origin, queueSkipSlashCommands: void 0 } : void 0;
}
async function rn(e, n) {
  let o = an(n);
  if ("recordRename" in o) throw Ie();
  let { description: c, persist: r } = e;
  if (typeof c !== "string") throw new import_chunk_jv7av99m.gr("generate_session_title: description must be a string");
  if (r != null && typeof r !== "boolean") throw new import_chunk_jv7av99m.gr("generate_session_title: persist must be a boolean");
  if (!r) return { title: await (0, import_chunk_qmyc67pd.X3r)(c, o.turnAbortSignal(), o.credentials) };
  let g = (0, import_chunk_f9x2f6cx.W)(), y = (0, import_chunk_qmyc67pd.k4o)({ content: c, origin: void 0, commands: o.dispatchCommands(), dispatchesSlashCommands: true }), { titles: v } = o, h = (0, import_chunk_bzyb60p0.eS)(g) ?? (0, import_chunk_bzyb60p0.rSe)(g) ?? (y !== null ? await nn(y, o) : v.pending?.sessionId === g ? await v.pending.title : null);
  return { title: (0, import_chunk_bzyb60p0.eS)(g) ?? h };
}
function fha() {
  let e = () => {
    let n = (0, import_chunk_xfj2cwfv.Ba)((0, import_chunk_bzyb60p0.eS)((0, import_chunk_f9x2f6cx.W)()) ?? "");
    if (n) (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "session_title_changed", title: n });
  };
  return e(), (0, import_chunk_bzyb60p0.zNt)(e);
}
async function uBs(e) {
  if (e.sdkUrl) return;
  await (0, import_chunk_865at33z.zCt)();
  let n = (0, import_chunk_bzyb60p0.eS)((0, import_chunk_f9x2f6cx.W)());
  await (0, import_chunk_89bjmq9y.$Ce)(n || (0, import_chunk_bzyb60p0.pCe)(), e.storageV5, { autoOnly: !n, source: "auto", keepLaunchName: true });
}
function sn(e, n) {
  let o = an(n);
  if (typeof e.title !== "string") throw new import_chunk_jv7av99m.gr("rename_session: title must be a string");
  if (e.source != null && e.source !== "remote" && e.source !== "host") throw new import_chunk_jv7av99m.gr("rename_session: source must be 'remote' or 'host'");
  if (e.names_chrome_tab_group !== void 0 && typeof e.names_chrome_tab_group !== "boolean") throw new import_chunk_jv7av99m.gr("rename_session: names_chrome_tab_group must be a boolean");
  if (e.names_chrome_tab_group === false) (0, import_chunk_929j4hj9.Fi)().chromeTabGroupTitle = void 0;
  let c = (0, import_chunk_xfj2cwfv.Ba)(e.title);
  if (!c) throw new import_chunk_jv7av99m.gr("title must be non-empty");
  if (e.session_id !== void 0 && e.session_id !== (0, import_chunk_f9x2f6cx.W)()) throw new import_chunk_jv7av99m.gr("session_id is not the current session");
  let r = e.source === "host" ? "user" : "remote", g = (0, import_chunk_f9x2f6cx.W)();
  if ("recordRename" in o) {
    (0, import_chunk_bzyb60p0.s7)(c);
    let h = (0, import_chunk_bzyb60p0.Bc)();
    if (h !== null) (0, import_chunk_bzyb60p0.rN)(h, { type: "custom-title", customTitle: c, sessionId: g }, n.storageV5);
    return o.recordRename(c, g);
  }
  let y = e.source === "host", v = e.names_chrome_tab_group === true;
  if ((0, import_chunk_bzyb60p0.Bc)()) return (0, import_chunk_bzyb60p0.tae)(g, c, void 0, r, o.storageV5).then(() => tn(o, c, g, y, v));
  (0, import_chunk_bzyb60p0.s7)(c), tn(o, c, g, y, v);
}
function tn(e, n, o, c, r) {
  if (e.titles.attempted = true, c && (0, import_chunk_f9x2f6cx.W)() === o) e.pushHostRenameToBridge(n, o);
  if (r && (0, import_chunk_f9x2f6cx.W)() === o) (0, import_chunk_929j4hj9.Fi)().chromeTabGroupTitle = n;
  e.applyRenamedSessionName(n);
}
function an(e) {
  if (e.sessionTitles === null) throw Ie();
  return e.sessionTitles;
}
function rt(e, n) {
  if (e.redactsPersistedLane()) {
    (0, import_chunk_tteqedwm.mqe)(true, "auto_title", n);
    return;
  }
  (0, import_chunk_k449cc64.i)(n);
}
var cn = (e, n) => {
  let o = e.task_id;
  if (typeof o !== "string") throw (0, import_chunk_cqa9hrgx.m)("task_stop_user", "invalid_task_id"), new import_chunk_tteqedwm.oie("stop_task: task_id must be a string");
  return (0, import_chunk_aw5nczax.get)(o, { taskRegistry: (0, import_chunk_4yjj7pjs.Py)(n.engineState, n.setEngineState), setAppState: n.setEngineState, session: n.session, getAppState: n.engineState, source: "client", storageV5: n.storageV5 }).then(() => ({}), (r) => {
    throw new import_chunk_tteqedwm.oie((0, import_chunk_tteqedwm.mqe)(n.redactsPersistedLane(), "stop_task", r).error);
  });
}, dn = (e, n) => {
  let o = (0, import_chunk_53snsm3k.cEs)(e.tool_use_id);
  if (!o.valid) throw (0, import_chunk_cqa9hrgx.m)("task_local_shell_background_all", "invalid_tool_use_id"), new import_chunk_tteqedwm.oie(import_chunk_53snsm3k.uEs);
  if ((0, import_chunk_jg3mepas.th)()) throw (0, import_chunk_cqa9hrgx.m)("task_local_shell_background_all", "disabled"), new import_chunk_tteqedwm.oie(import_chunk_53snsm3k.mun);
  let c = (0, import_chunk_4yjj7pjs.Py)(n.engineState, n.setEngineState);
  if (o.toolUseId !== void 0) return { backgrounded: (0, import_chunk_bzyb60p0._oo)(o.toolUseId, c) };
  return (0, import_chunk_bzyb60p0.GBe)(c), {};
}, ln = (e, n) => {
  if (n.redactsPersistedLane()) throw (0, import_chunk_cqa9hrgx.m)("task_output_read", "persisted_lane"), new import_chunk_tteqedwm.oie("get_task_output is not available on this connection");
  let o = e.task_id;
  if (typeof o !== "string") throw (0, import_chunk_cqa9hrgx.m)("task_output_read", "invalid_task_id"), new import_chunk_tteqedwm.oie("get_task_output: task_id must be a string");
  let c = (0, import_chunk_4yjj7pjs.Py)(n.engineState, n.setEngineState).get(o);
  if (!((0, import_chunk_sjqze7qg.If)(c) && !c.elsewhere) && !(c === void 0 && (0, import_chunk_ed372ykp.uG)("local_bash", o))) throw (0, import_chunk_cqa9hrgx.m)("task_output_read", "not_found"), new import_chunk_tteqedwm.oie("get_task_output: no shell or Monitor task with that task_id in this session");
  return (0, import_chunk_4f4ysf31.JBt)(o).then(({ content: r, bytesRead: g, bytesTotal: y }) => ({ output: r, total_bytes: y, truncated: g < y }), (r) => {
    throw (0, import_chunk_cqa9hrgx.m)("task_output_read", "read_failed"), r;
  });
}, pn = (e, n) => {
  throw Ie("send_task_message");
};
var St = { mcp_status: jt, get_context_usage: Bt, get_usage: zt, get_session_cost: Nt, list_models: qt, get_binary_version: Ut, reload_output_styles: $t, set_max_thinking_tokens: import_chunk_d1r21263.EGr, set_mcp_permission_mode_override: Kt, generate_session_title: rn, rename_session: sn, mcp_reconnect: At, mcp_toggle: xt, mcp_read_resource: Gt, stop_task: cn, background_tasks: dn, get_task_output: ln, send_task_message: pn, prefetch_attachments: Jt, mcp_tasks_changed: Yt, set_attached_project: Xt }, ro = /* @__PURE__ */ new Set(["generate_session_title", "get_context_usage", "mcp_read_resource", "get_task_output"]);
function pha(e, n) {
  if (ro.has(e.subtype)) return true;
  if (e.subtype === "get_usage") return e.detached === true && e.skip_behaviors === true;
  if (e.subtype === "send_task_message") try {
    return n.resumeUntrackedAgent !== null && typeof e.task_id === "string" && !Object.hasOwn(n.engineState().tasks, e.task_id);
  } catch {
    return false;
  }
  if (e.subtype !== "mcp_toggle" || e.enabled !== true || typeof e.serverName !== "string" || n.mcpControlLanes === null) return false;
  try {
    return ft(n.mcpControlLanes, n.engineState(), e.serverName);
  } catch {
    return false;
  }
}
function mha(e) {
  return Object.hasOwn(St, e.subtype);
}
function E1o(e, n) {
  let o = St[e.subtype];
  return (0, import_chunk_s3qtr6en.I$r)(o, e, n);
}
