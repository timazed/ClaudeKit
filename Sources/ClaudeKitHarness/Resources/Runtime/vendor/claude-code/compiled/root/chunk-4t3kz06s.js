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
var chunk_4t3kz06s_exports = {};
__export(chunk_4t3kz06s_exports, {
  T3t: () => T3t,
  Vjl: () => Vjl
});
module.exports = __toCommonJS(chunk_4t3kz06s_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_t9fn978c = require("/$bunfs/root/chunk-t9fn978c.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_08bv0y93 = require("/$bunfs/root/chunk-08bv0y93.js");
var import_chunk_zd24r3fj = require("/$bunfs/root/chunk-zd24r3fj.js");
var import_chunk_k5r71ad2 = require("/$bunfs/root/chunk-k5r71ad2.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_96p3dgap = require("/$bunfs/root/chunk-96p3dgap.js");
var import_chunk_f0sbddj1 = require("/$bunfs/root/chunk-f0sbddj1.js");
var import_chunk_wtre73q2 = require("/$bunfs/root/chunk-wtre73q2.js");
var import_chunk_n224j7gb = require("/$bunfs/root/chunk-n224j7gb.js");
var import_chunk_d0aj71bz = require("/$bunfs/root/chunk-d0aj71bz.js");
var import_chunk_1g0cz451 = require("/$bunfs/root/chunk-1g0cz451.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_fwhva0e1 = require("/$bunfs/root/chunk-fwhva0e1.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function T3t(...n) {
  let { mode: t } = n[1].initialState.toolPermissionContext;
  if ((0, import_chunk_t9fn978c.Win)(t), (0, import_chunk_r3kja8v6.ue)()) {
    let { remoteSessionConfig: m, directConnectConfig: p, sshSession: c } = n[2];
    if (!m && !p && !c) (0, import_chunk_w50zedgp.Vbr)(t);
  }
  return Vjl(...n);
}
async function Vjl(n, t, m, p) {
  let { AppRoot: c } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-q5vbvm42.js"))), { REPL: g } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-cv0f26fa.js")));
  function S(s) {
    let a = (0, import_chunk_74h6kcya.lo)();
    (0, import_chunk_96p3dgap.FUr)();
    let d = (0, import_chunk_bs4h6795.I)(s.commands), M = (0, import_chunk_bs4h6795.ye)((r) => {
      d.current = r;
    }, []), f = (0, import_chunk_bs4h6795.I)(() => {
      throw Error("engine: queryParams called before REPL registered builder");
    }), h = (0, import_chunk_bs4h6795.ye)((r) => {
      f.current = r;
    }, []), [l] = (0, import_chunk_bs4h6795.y)(() => (0, import_chunk_08bv0y93.C8t)({ run: import_chunk_k5r71ad2.t6, queryParams: async (r) => f.current(), commands: () => (0, import_chunk_bzyb60p0.jye)(d.current), models: () => (0, import_chunk_gq1dr8pm.l0e)((0, import_chunk_gq1dr8pm.wbe)()), unavailableModels: () => (0, import_chunk_gq1dr8pm.l0e)((0, import_chunk_gq1dr8pm.Fmo)()), agents: () => (0, import_chunk_bzyb60p0.Qar)(a.getState().agentDefinitions.activeAgents), account: (0, import_chunk_865at33z.Uxr)(), outputStyle: (0, import_chunk_bzyb60p0.$yt)(), mcpServers: () => (0, import_chunk_fwhva0e1.uzr)(a.getState().mcp.clients), ambient: import_chunk_zd24r3fj.PJn, initialModel: () => {
      let r = a.getState();
      return (0, import_chunk_865at33z.jt)(r.mainLoopModelForSession ?? r.mainLoopModel ?? (0, import_chunk_865at33z.xE)());
    }, initialPermissionMode: () => (0, import_chunk_xcgcdx61.Qc)(a.getState().toolPermissionContext.mode), hostOwnsPermissionMode: true, hostOwnsModel: true }));
    return (0, import_chunk_bs4h6795.H)(() => () => l.close(), [l]), (0, import_chunk_a46xeenj.e)(g, { ...s, engine: l, onCommandsChange: M, onQueryParamsChange: h });
  }
  let { session: i, storageV5: o, credentials: u, fleetNudgeStore: P = new import_chunk_f0sbddj1.LIt({ storageV5: o }) } = t, R = (0, import_chunk_d0aj71bz.N3t)(o);
  await (0, import_chunk_wtre73q2.zPa)({ onHealthy: () => (0, import_chunk_96p3dgap.zha)(o), storageV5: o });
  let C = (0, import_chunk_n224j7gb.w1r)(i, t.initialState, (s) => (0, import_chunk_1g0cz451.hIe)(s, i, o, u));
  try {
    await p(n, (0, import_chunk_a46xeenj.e)(c, { session: i, storageV5: o, messageQueue: R, store: C, fleetNudgeStore: P, sessionHooks: t.sessionHooks, writesExitHandoff: true, getFpsMetrics: t.getFpsMetrics, stats: t.stats, keybindings: false, children: (0, import_chunk_a46xeenj.e)(S, { ...m }) }), i, o, u);
  } catch (s) {
    throw await (0, import_chunk_wtre73q2.bKr)().catch(() => false), s;
  }
}
