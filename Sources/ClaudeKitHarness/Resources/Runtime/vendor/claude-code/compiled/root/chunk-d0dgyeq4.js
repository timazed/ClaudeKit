const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
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
var chunk_d0dgyeq4_exports = {};
__export(chunk_d0dgyeq4_exports, {
  F5l: () => F5l,
  RNo: () => RNo,
  o1r: () => o1r
});
module.exports = __toCommonJS(chunk_d0dgyeq4_exports);
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_hemc71zd = require("/$bunfs/root/chunk-hemc71zd.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_jg3mepas = require("/$bunfs/root/chunk-jg3mepas.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_4f4ysf31 = require("/$bunfs/root/chunk-4f4ysf31.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_q7cfnzfy = require("/$bunfs/root/chunk-q7cfnzfy.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_b83x8d52 = require("/$bunfs/root/chunk-b83x8d52.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_339n78pp = require("/$bunfs/root/chunk-339n78pp.js");
var import_chunk_539hrhrd = require("/$bunfs/root/chunk-539hrhrd.js");
var import_chunk_tteqedwm = require("/$bunfs/root/chunk-tteqedwm.js");
var import_chunk_k5r71ad2 = require("/$bunfs/root/chunk-k5r71ad2.js");
var import_chunk_dhf55fzk = require("/$bunfs/root/chunk-dhf55fzk.js");
var import_chunk_a5v5cv8j = require("/$bunfs/root/chunk-a5v5cv8j.js");
var import_chunk_ykcxdh1p = require("/$bunfs/root/chunk-ykcxdh1p.js");
var import_chunk_aw5nczax = require("/$bunfs/root/chunk-aw5nczax.js");
var import_chunk_f2cpz56c = require("/$bunfs/root/chunk-f2cpz56c.js");
var import_chunk_jf04cjm6 = require("/$bunfs/root/chunk-jf04cjm6.js");
var import_chunk_0jwky18t = require("/$bunfs/root/chunk-0jwky18t.js");
var import_chunk_s8g3yq9x = require("/$bunfs/root/chunk-s8g3yq9x.js");
var import_chunk_2d2p2t02 = require("/$bunfs/root/chunk-2d2p2t02.js");
var import_chunk_6t6nqmb1 = require("/$bunfs/root/chunk-6t6nqmb1.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var Fe = 3e4;
function Z(g, M, p = Fe) {
  if (g === void 0) return { report: void 0, [Symbol.dispose]() {
  } };
  let U = 0, b = 0, F = (w, T) => (b = w > b ? w : b + 1e-3, M({ method: "notifications/progress", params: { progressToken: g, progress: b, message: T } })), H = setInterval(() => {
    U += 1;
    let w = U * p / 1e3;
    F(w, `Running for ${w}s`).catch((T) => {
      (0, import_chunk_w578pjby.t)(`MCP server: progress heartbeat not sent: ${(0, import_chunk_jv7av99m.d)(T)}`);
    });
  }, p);
  return H.unref?.(), { report: (w) => F(0, w), [Symbol.dispose]() {
    clearInterval(H);
  } };
}
var Ae = "anthropic/errexitHonored", Ve = new import_chunk_2904xtvq.j(() => ({ isSaid: false }));
function xe(g) {
  (0, import_chunk_f9x2f6cx.kr)(Ve).isSaid = g === "1";
}
function qe(g) {
  return "closeSSEStream" in g;
}
var o1r = "callerGone";
async function F5l(g, M, p, U, b, F) {
  (0, import_chunk_bzyb60p0.nS)(g);
  let H = RNo(M, p, (0, import_chunk_f9x2f6cx.N)(), "stdio", U, b, F), w = new import_chunk_a5v5cv8j.Bht(import_chunk_w578pjby.Cs, import_chunk_w578pjby.fP);
  await H.connect(w), (0, import_chunk_w578pjby.Ct)(() => H.close());
}
class Oe extends import_chunk_sjqze7qg.Oq {
  #e;
  constructor(g) {
    super();
    this.#e = g;
  }
  get(g) {
    return this.#e.get(g);
  }
}
function RNo(g, M, p, U, b, F = "raw", H = { kind: "absent" }, w) {
  let T = H.kind === "parsed" ? H.context : void 0, Ee = (0, import_chunk_f2cpz56c.JH)(b), n = U === "http";
  (0, import_chunk_865at33z.PPr)(p.host, import_chunk_865at33z.Bzn);
  let J = { isNew: true, isFetchedFor: false }, V = (0, import_chunk_8ewjdpbn.Kp)();
  if (V.disableBackgroundAgentLaunch(), V.disableRemoteAgentIsolation(), V.disableBackgroundDeadline(), V.disableForkSubagent(), V.disableViewImages(), V.disableUnsandboxedCommands(), n) (0, import_chunk_0jwky18t.l$s)(V);
  else V.disableBackgroundCompletionNotice();
  if ((0, import_chunk_bzyb60p0.U9a)((0, import_chunk_bzyb60p0.v_i)()), (0, import_chunk_tfs0ssqe.ZF)(), (0, import_chunk_f9x2f6cx.gP)()) (0, import_chunk_539hrhrd.z2r)(b).catch(import_chunk_k449cc64.i);
  if ((0, import_chunk_jhdsf4g3.y7)(), (0, import_chunk_f9x2f6cx.X8)()) (0, import_chunk_bzyb60p0.oQr)().catch(import_chunk_k449cc64.i);
  let Me = (0, import_chunk_5sjwf92x.iv)(import_chunk_5sjwf92x.JO, void 0, n), He = new import_chunk_sjqze7qg.Oq(), le = { activeAgents: [], allAgents: [] }, ve = n ? Promise.resolve() : (0, import_chunk_bzyb60p0.XD)((0, import_chunk_18rsj2ts.pe)(), b).then((o) => {
    le = (0, import_chunk_bzyb60p0.nQ)(o, o.allAgents.filter((S) => {
      if ((0, import_chunk_zddv3vvj._8e)(S)) return true;
      return (0, import_chunk_zddv3vvj.y8e)(S, "subagent", "definition"), false;
    }));
  }).catch((o) => {
    (0, import_chunk_k449cc64.i)(o);
  }), R = new import_chunk_dhf55fzk.Lht({ name: "claude/tengu", version: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION }, { capabilities: { tools: { listChanged: true } } }), Re = (0, import_chunk_cbnm4p23._r)(), q = () => (0, import_chunk_0jwky18t.$pt)(n);
  if (n) {
    let { toolOutputServerCapabilities: o } = require("/$bunfs/root/chunk-c4bj48f4.js"), S = o(q, T);
    if (S !== void 0) {
      if (R.registerCapabilities(S), !(0, import_chunk_jg3mepas.cxe)()) {
        let { backgroundCommands: k, keepsBackgroundCommandsCapability: x } = require("/$bunfs/root/chunk-05ekjbh0.js");
        R.registerCapabilities(x(k.of(p.host).life));
      }
    }
    if (T !== void 0) {
      let { holdsSafetyAsksCapability: k } = require("/$bunfs/root/chunk-9r7wegdb.js");
      R.registerCapabilities(k());
      let { rendersUnderSessionRulesCapability: x } = require("/$bunfs/root/chunk-nwhmbyhr.js");
      R.registerCapabilities(x());
    }
    let { interfaceVersionCapability: r } = require("/$bunfs/root/chunk-62e2s8wc.js");
    R.registerCapabilities(r());
    let { checksPlainCallsCapability: v } = require("/$bunfs/root/chunk-9r7wegdb.js");
    R.registerCapabilities(v());
  }
  let B = null, Ie = () => {
    if (B === null) return;
    let o = q().map((r) => r.name).join(`
`);
    if (o === B) return;
    let S = B;
    B = o, R.sendToolListChanged().catch((r) => {
      if (B === o) B = S;
      (0, import_chunk_w578pjby.t)(`mcp serve: tools/list_changed not sent: ${(0, import_chunk_jv7av99m.d)(r)}`);
    });
  }, he = false, De = (0, import_chunk_2nv4wrez.UU)(() => {
    queueMicrotask(() => {
      if (he) return;
      try {
        Ie();
      } catch (o) {
        (0, import_chunk_w578pjby.t)(`mcp serve: tool re-list on policy verdict failed: ${(0, import_chunk_jv7av99m.d)(o)}`, { level: "error" });
      }
    });
  }), de = () => R.sendToolListChanged();
  R.oninitialized = () => {
    (0, import_chunk_ykcxdh1p.Vua)(p.host, de);
  }, R.onclose = () => {
    (0, import_chunk_ykcxdh1p.Kua)(p.host, de), he = true, De(), Re.abort((0, import_chunk_cbnm4p23.hl)("shutdown"));
  }, R.setRequestHandler("tools/list", async () => {
    await ve;
    let o = await (0, import_chunk_0jwky18t.Gfa)(U, { agentDefinitions: le });
    return B = o.map((S) => S.name).join(`
`), { tools: o };
  });
  let Ne = { session: p, run: (o) => o(), bind: (o) => o, [Symbol.dispose]: () => {
  } };
  function Q(o, S, r, v = T) {
    let k = (0, import_chunk_cbnm4p23.sd)(Re), x = () => k.abort((0, import_chunk_cbnm4p23.hl)("remote-cancel"));
    if (o.aborted) x();
    else o.addEventListener("abort", x, { once: true });
    let ee = new Oe(He), P, Y = () => {
      if (P ??= { ...(0, import_chunk_0jwky18t.sIe)(), ...v !== void 0 && { toolPermissionContext: v } }, !n) return P;
      return { ...P, toolPermissionContext: (0, import_chunk_s8g3yq9x.Upt)(P.toolPermissionContext) };
    };
    return { toolUseContext: { abortController: k, messageQueue: (0, import_chunk_bzyb60p0.Hg)(), session: r, agentContext: { agentType: "main", agentId: (0, import_chunk_mzmcvr6c.qS)() }, options: { commands: [], tools: S, toolCatalog: import_chunk_aw5nczax.Nte, mainLoopModel: (0, import_chunk_865at33z.dt)(), thinkingConfig: { type: "disabled", mechanical: true }, mcpClients: [], mcpResources: {}, isNonInteractiveSession: true, runQuery: import_chunk_k5r71ad2.t6, getPlanModeSetting: void 0, debug: g, verbose: M, agentDefinitions: le }, getAppState: Y, setAppState: () => {
    }, markPrResolvedThisSession: () => {
    }, isUltrareviewOverageConfirmed: () => false, markUltrareviewOverageConfirmed: () => {
    }, getAdvisorSetting: () => Y().advisorModel, getMcp: () => Y().mcp, getProactivityLevel: () => Y().proactivityLevel, getWebBrowser: () => Y().webBrowser, setToolPermissionContext: () => {
    }, setSessionToolPermissionContext: () => {
    }, taskRegistry: import_chunk_z6hn62tj.Ppe, queuedNotificationsRegistry: import_chunk_tteqedwm.f7t, sessionHooksRegistry: import_chunk_2d2p2t02.a8t, setWebBrowserSlice: () => {
    }, setArtifactReadVersion: () => {
    }, getArtifactReadObservation: (0, import_chunk_f2vegtjy.K8e)(Y), artifactRegistries: (0, import_chunk_hemc71zd.d7t)(), setArtifactContractTarget: () => {
    }, getArtifactContractTarget: () => ({ targetSlug: void 0, pins: {} }), enqueuePendingMemoryUpdate: () => {
    }, agentLifecycle: import_chunk_6t6nqmb1.SXt, teammateColors: import_chunk_hemc71zd.c7t, rootToolSurface: { tools: S, mainLoopModel: (0, import_chunk_865at33z.dt)() }, messages: [], turnStartIndex: 0, modelFacts: (0, import_chunk_bzyb60p0.Il)((0, import_chunk_865at33z.dt)()), loopModel: (0, import_chunk_865at33z.dt)(), readFileState: Me, toolState: ee, toolDecisions: /* @__PURE__ */ new Map(), permissionRelays: import_chunk_hemc71zd.lMe, getFileHistoryState: () => {
      return;
    }, applyFileHistoryOp: () => {
    }, applyAttributionOp: () => {
    }, storageV5: b, credentials: Ee }, toolState: ee };
  }
  return (0, import_chunk_ykcxdh1p.qua)(R, n, p.host, async ({ params: { name: o, arguments: S, _meta: r } }, { signal: v, sendNotification: k, authInfo: x, requestId: ee }) => {
    var _stack3 = [];
    try {
      let { transport: P } = R;
      const Y = __using(_stack3, n ? require("/$bunfs/root/chunk-0s7m5bj4.js").servingCall(p.host) : void 0);
      let G = async (e) => {
        if (n) {
          let a = require("/$bunfs/root/chunk-0s7m5bj4.js"), [c, f] = await Promise.all([a.lookAtOtherPrograms(p.host, r), a.lookAtDiskFree(p.host, r)]);
          return a.withCpuReport(e, p.host, r, c, f);
        }
        return e;
      }, ue = n && P !== void 0 && (0, import_chunk_865at33z.PPr)(p.host, r?.[import_chunk_865at33z.qxs]);
      if (n && P !== void 0) {
        let e = r?.[import_chunk_865at33z.BIl];
        if (J.isNew && e === void 0) (0, import_chunk_q7cfnzfy.UAi)(p.host);
        let a = (0, import_chunk_865at33z.ce)(), c = a.refusedByCaller, f = (0, import_chunk_865at33z.jIl)(r?.[import_chunk_865at33z.WIl]) ?? (J.isNew ? { ...c, ids: "" } : c);
        if (f.writer !== c.writer || f.nth >= c.nth) a.refusedByCaller = f, a.isPluginBinCheckOwed ||= f.ids !== c.ids;
        J.isNew = false, (0, import_chunk_q7cfnzfy.qol)(p.host, e);
      }
      let ye = () => {
        if (P !== void 0 && qe(P)) P.closeSSEStream(ee);
      };
      if (v.aborted) ye();
      else v.addEventListener("abort", ye, { once: true });
      if (await ve, n) {
        let { refuseCallerInterface: e } = require("/$bunfs/root/chunk-62e2s8wc.js"), { bringsToolHostPermissionRequest: a } = require("/$bunfs/root/chunk-c4bj48f4.js"), c = a(r) ? void 0 : e(o, r);
        if (c !== void 0) return c;
      }
      if (H.kind === "unreadable") {
        let e = `${o} was not run: this server could not read its launch settings (CLAUDE_CODE_MCP_SERVE_SETTINGS), so it runs nothing.`;
        return (0, import_chunk_w578pjby.t)(`MCP server: ${e}`, { level: "error" }), { isError: true, content: [{ type: "text", text: e }] };
      }
      if (n && P !== void 0) {
        let { takeSessionEndHooks: e } = require("/$bunfs/root/chunk-94pr6tmc.js");
        e(r?.[import_chunk_865at33z.cxo], { session: p, storageV5: b, credentials: Ee });
      }
      if (n && T !== void 0) {
        let { takeShellDirectoryHeld: e } = require("/$bunfs/root/chunk-cbp9vdbq.js");
        e(r?.[import_chunk_jf04cjm6._1r], p);
      }
      if (n && P !== void 0) xe(r?.[Ae]), (0, import_chunk_r6r2wdsw.V0l)(r?.[import_chunk_r6r2wdsw.z0l]);
      if (n && P !== void 0 && r?.[import_chunk_865at33z.z4i] !== void 0) {
        let { takeModEnv: e } = require("/$bunfs/root/chunk-3y47qjvy.js");
        await e(r[import_chunk_865at33z.z4i]);
      }
      if (n && o !== (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-9kzv7n2p.js")))).RUN_MONITOR_COMMAND_CALL) {
        let { bringsToolHostPermissionRequest: e, refusedResult: a } = require("/$bunfs/root/chunk-c4bj48f4.js");
        if (e(r)) {
          let { handleToolHostPermissionRequest: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-qb9t3crq.js"))), f = await c({ name: o, args: S, meta: r, servedTools: q, launchPermissionContext: T, newCall: () => {
            let L = Q(import_chunk_0jwky18t.Fpt.has(o) ? Le(v, x) : v, q(), p);
            return { toolUseContext: L.toolUseContext, release: () => ae(L.toolState) };
          }, startHeartbeat: () => Z(r?.progressToken, k), callerLogsSharedEvents: ue });
          return await G(f ?? a({ code: "unsupported_protocol", message: `${o} was not run: this server gave no answer to the permission request sent with it. Retrying won't help.` }));
        }
      }
      let Pe = S?.deny_rules;
      const h = __using(_stack3, T === void 0 && !(Array.isArray(Pe) && Pe.length > 0) ? Ne : (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-1pf4y8p0.js")))).ownCallDirectory(p, v));
      if (n) {
        let { countedUnlessRepeated: e, SERVED_FILE_CALLS: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5bvdqegv.js"))), { fetchWhereAFileTurnsHooksOff: c } = require("/$bunfs/root/chunk-2gyfdv8e.js");
        J.isFetchedFor ||= c();
        let f = a.get(o);
        if (f) {
          var _stack = [];
          try {
            const L = __using(_stack, Z(r?.progressToken, k));
            let A, y = x?.extra?.[o1r];
            try {
              let { summary: I, output: s } = await e(o, h.bind(() => f(S, v, { tellToolListChanged: de, toolUseContext: () => (A ??= Q(v, q(), h.session)).toolUseContext, session: h.session, launchPermissionContext: T, workspaceRoot: w, ...ue && { callerLogsSharedEvents: true }, reportProgress: L.report, callerGone: y instanceof AbortSignal ? y : void 0, meta: r, checkAsServedTool: async (K, ge, Ce) => {
                let ie = (0, import_chunk_4vsz8a99.tn)(q(), K);
                if (!ie?.isEnabled()) return { rejection: `${o} was not run: this server does not serve ${K}.` };
                let ne = (0, import_chunk_4vsz8a99.lv)(ie, ge);
                if (!ne.success) return { rejection: `${o} was not run: its input is not valid for ${K}: ${ne.error.message}` };
                let { toolUseContext: _e } = A ??= Q(v, q(), h.session), Te = await ie.validateInput?.(ne.data, _e);
                if (Te && !Te.result) return { rejection: `${o} was not run: ${K} refused its input: ${Te.message}` };
                let we = T && (0, import_chunk_s8g3yq9x.Upt)(T), ke = Ce.length === 0 ? we : (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-zs0wm5bw.js")))).withDenyRulesOfOneCall(we, Ce);
                if (Ce.length > 0 && ke === void 0) return { rejection: `${o} was not run: one of the deny rules sent with it could not be read. Retrying won't help.` };
                let { checkPlainCall: Ue } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-c4bj48f4.js")));
                return Ue(ie, ne.data, _e, ke, r);
              } }))), { encodeServedOutput: O } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-sy1m2fh2.js")));
              return await G(h.run(() => O(I, s)));
            } catch (I) {
              let { ServedCallError: s } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-stfrygs3.js")));
              return await G({ isError: true, content: [{ type: "text", text: (0, import_chunk_jv7av99m.d)(I) }], ...I instanceof s && I.meta !== void 0 && { _meta: I.meta } });
            } finally {
              if (A) ae(A.toolState);
            }
          } catch (_2) {
            var _error = _2, _hasError = true;
          } finally {
            __callDispose(_stack, _error, _hasError);
          }
        }
      }
      let te = q(), z = n && import_chunk_0jwky18t.Fpt.has(o), be = ue;
      if (n && !z) {
        let { answerToolOutputRequest: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-c4bj48f4.js"))), a = await h.run(() => e({ name: o, args: S, meta: r, tools: te, launchPermissionContext: T, newCall: () => {
          let c = Q(v, te, h.session);
          return { toolUseContext: c.toolUseContext, release: () => ae(c.toolState) };
        }, startHeartbeat: () => Z(r?.progressToken, k) }));
        if (a !== void 0) return a;
      }
      let W, me, fe = false;
      {
        let { CHECK_PLAIN_CALL: e, checkPlainCallArgs: a, INPUT_REFUSED_KEY: c, MOD_OWN_CALL_KEY: f } = require("/$bunfs/root/chunk-9r7wegdb.js");
        if (n && o === e) W = a().parse(S), me = { _meta: { [c]: true } };
        fe = n && !z && r?.[f] === "1";
      }
      let oe = fe && T !== void 0 ? { ...T, alwaysDenyRules: {} } : T, X = W?.tool ?? o, E = z ? (0, import_chunk_b83x8d52.Dh)((0, import_chunk_aw5nczax.$v)(), o) : (0, import_chunk_b83x8d52.Dh)(te, X);
      if (!E) {
        let e = `Tool ${X} not found`;
        if (W !== void 0) return { isError: true, content: [{ type: "text", text: e }] };
        throw Error(e);
      }
      let { toolUseContext: Se, toolState: je } = Q(z ? Le(v, x) : v, te, h.session, oe), re = { ...W?.input ?? S }, se = (0, import_chunk_0jwky18t.a$s)(U).filter((e) => e in re);
      try {
        var _stack2 = [];
        try {
          if (!E.isEnabled()) {
            let s = `Tool ${X} is not enabled`;
            return (0, import_chunk_w578pjby.t)(`MCP server: ${s}`, { level: "error" }), { isError: true, content: [{ type: "text", text: s }] };
          }
          let e = n ? (0, import_chunk_0jwky18t.H3t)(E, re) : (0, import_chunk_4vsz8a99.lv)(E, (0, import_chunk_qwbhh2k3.Pn)(re, se));
          if (!e.success) {
            let s = `Tool ${X} arguments failed schema validation: ${e.error.message}`;
            return (0, import_chunk_w578pjby.t)(`MCP server: ${s}`, { level: "error" }), { isError: true, content: [{ type: "text", text: s }], ...me };
          }
          let a = await h.run(() => E.validateInput?.(e.data, Se));
          if (a && !a.result) {
            let s = `Tool ${X} input is invalid: ${a.message}`;
            return (0, import_chunk_w578pjby.t)(`MCP server: ${s}`, { level: "error" }), { isError: true, content: [{ type: "text", text: s }], ...!a.deniedByPermissionRule && me };
          }
          let c = false;
          if (n && F === "rendered") {
            let { asksForEditResult: s } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5jcnjhxn.js")));
            c = s(E.name, r);
          }
          let f = await h.run(async () => (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-c4bj48f4.js")))).checkPlainCall(E, e.data, Se, n && oe !== void 0 ? (0, import_chunk_s8g3yq9x.Upt)(oe) : oe, r, W !== void 0, fe));
          if ("rejection" in f) return (0, import_chunk_w578pjby.t)(`MCP server: ${f.rejection}`, { level: "error" }), { isError: true, content: [{ type: "text", text: f.rejection }], ...f.meta !== void 0 && { _meta: f.meta } };
          if (W !== void 0) {
            let { NOT_REFUSED: s } = require("/$bunfs/root/chunk-9r7wegdb.js"), { encodeServedOutput: O } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-sy1m2fh2.js")));
            return await G(h.run(() => O(s, s)));
          }
          const L = __using(_stack2, Z(r?.progressToken, k));
          let A = await h.run(() => E.call(e.data, { ...f.toolUseContext, permissionPhase: f.toolUseContext.permissionPhase ?? {} }, import_chunk_bzyb60p0.xk, (0, import_chunk_bzyb60p0.La)({ content: [] }), void 0, F === "raw" ? { gitDiffRead: true } : c ? { smallResultAsked: true } : void 0)), y, I = false;
          if (z) {
            let { encodeUnlistedToolResult: s } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-sy1m2fh2.js")));
            y = h.run(() => s(E, A));
          } else if (F === "rendered") {
            let { renderToolResultForMCP: s, withinAnswerLimit: O } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-rk151eh3.js"))), { answer: K, tooLarge: ge } = O(E, await h.run(() => s(E, A, Se)));
            y = c ? await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-5jcnjhxn.js")))).withEditResult(K, A) : K, I = ge;
          }
          if (y === void 0) {
            let s = A.data, O = typeof s === "object" && s !== null && "backgroundTaskId" in s && typeof s.backgroundTaskId === "string" ? { ...s, backgroundOutputPath: (0, import_chunk_4f4ysf31.cp)(s.backgroundTaskId) } : s;
            y = { content: [{ type: "text", text: (0, import_chunk_w578pjby._)(O) }] };
          }
          if (se.length > 0) {
            let s = (0, import_chunk_0jwky18t.D3t)(se), O = y.content.at(-1);
            if (n && O?.type === "text") O.text += `
${s}`;
            else y.content.push({ type: "text", text: s });
          }
          if (!be) if (I) (0, import_chunk_cqa9hrgx.l)((0, import_chunk_bzyb60p0.nIn)(E.name), "result_too_large");
          else (0, import_chunk_cqa9hrgx.u)((0, import_chunk_bzyb60p0.nIn)(E.name));
          return await G(y);
        } catch (_3) {
          var _error2 = _3, _hasError2 = true;
        } finally {
          __callDispose(_stack2, _error2, _hasError2);
        }
      } catch (e) {
        let c = (e instanceof Error ? (0, import_chunk_339n78pp.xgr)(e) : [String(e)]).filter(Boolean).join(`
`).trim() || "Error";
        if ((0, import_chunk_bzyb60p0.Crt)(e)) (0, import_chunk_w578pjby.t)(`MCP server tool call '${o}' aborted`);
        else {
          let { code: L, isSad: A } = (0, import_chunk_bzyb60p0.rIn)(e);
          if (A) {
            if ((0, import_chunk_w578pjby.t)(`MCP server tool call '${o}' failed: ${c}`, { level: "error" }), !be) (0, import_chunk_cqa9hrgx.l)((0, import_chunk_bzyb60p0.nIn)(E.name), L);
          } else {
            let y = (0, import_chunk_jv7av99m.D)(e);
            (0, import_chunk_k449cc64.i)("telemetryMessage" in y ? y : (0, import_chunk_jv7av99m.Ye)(y, `mcp server tool '${E.name}' threw`)), (0, import_chunk_cqa9hrgx.m)((0, import_chunk_bzyb60p0.nIn)(E.name), L);
          }
        }
        let f = [c];
        if (!n && e instanceof import_chunk_jv7av99m.ST && e.sandboxed && (se.length > 0 || (0, import_chunk_bzyb60p0.SQo)(String(re.command), E.name === import_chunk_rb36kwbn.yt ? "powershell" : "bash"))) f.push("[serve-mode] This command ran in the sandbox. claude mcp serve cannot ask for approval, so it ignores dangerouslyDisableSandbox and sandbox.excludedCommands. If the sandbox blocked the command, tell the user: they can change the sandbox settings or run it themselves.");
        return await G({ isError: true, content: f.map((L) => ({ type: "text", text: L })) });
      } finally {
        ae(je);
      }
    } catch (_4) {
      var _error3 = _4, _hasError3 = true;
    } finally {
      __callDispose(_stack3, _error3, _hasError3);
    }
  }), R;
}
function ae(g) {
}
function Le(g, M) {
  let p = M?.extra?.[o1r];
  return p instanceof AbortSignal ? AbortSignal.any([g, p]) : g;
}
