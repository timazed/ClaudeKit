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
var chunk_j2nb09zj_exports = {};
__export(chunk_j2nb09zj_exports, {
  JVo: () => JVo,
  QVo: () => QVo,
  xYs: () => xYs
});
module.exports = __toCommonJS(chunk_j2nb09zj_exports);
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_4mh8nmh5 = require("/$bunfs/root/chunk-4mh8nmh5.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_tteqedwm = require("/$bunfs/root/chunk-tteqedwm.js");
var import_chunk_hemc71zd = require("/$bunfs/root/chunk-hemc71zd.js");
var import_chunk_ata1yp21 = require("/$bunfs/root/chunk-ata1yp21.js");
var import_chunk_tfgxeb6k = require("/$bunfs/root/chunk-tfgxeb6k.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
async function JVo({ tools: e, mainLoopModel: d, customSystemPrompt: t, excludeDynamicSections: s, analysisOnly: r }) {
  return t !== void 0 ? [] : (0, import_chunk_bzyb60p0.eG)(e, d, { excludeDynamicSections: s, analysisOnly: r });
}
async function QVo({ session: e, tools: d, mainLoopModel: t, customSystemPrompt: s, excludeDynamicSections: r, cacheBreakerPhrase: f, analysisOnly: i, sectionsInView: g, storageV5: p, credentials: u }) {
  let [c, o, n, a] = await Promise.all([JVo({ tools: d, mainLoopModel: t, customSystemPrompt: s, excludeDynamicSections: r, analysisOnly: i }), (0, import_chunk_bzyb60p0.$F)(e, p, u), s !== void 0 ? Promise.resolve({}) : (0, import_chunk_bzyb60p0.Mie)(e, f), r && s === void 0 ? (0, import_chunk_ata1yp21.nIa)(e, (0, import_chunk_bzyb60p0._qa)(t, { analysisOnly: i }), g) : Promise.resolve({})]);
  if (r) return { defaultSystemPrompt: c, userContext: { ...n, ...o, ...a }, systemContext: {} };
  return { defaultSystemPrompt: c, userContext: o, systemContext: n };
}
async function xYs({ session: e, messageQueue: d, tools: t, toolCatalog: s, commands: r, mcpClients: f, messages: i, turnInProgress: g, readFileState: p, toolState: u, sessionHooks: c, getAppState: o, setAppState: n, customSystemPrompt: a, appendSystemPrompt: y, excludeDynamicSections: k, thinkingConfig: M, agents: T, storageV5: C, credentials: S, runQuery: b, leavesContextUnbuilt: v }) {
  let m = o(), l = (0, import_chunk_865at33z.lI)({ permissionMode: m.toolPermissionContext.mode, setting: (0, import_chunk_865at33z.Ld)(), mainLoopModel: (0, import_chunk_865at33z.dt)() }), x = (0, import_chunk_q2404y26.kLn)({ messages: i }, t), { defaultSystemPrompt: j, userContext: R, systemContext: H } = v === true ? { defaultSystemPrompt: [], userContext: {}, systemContext: {} } : await QVo({ session: e, tools: x, mainLoopModel: l, customSystemPrompt: a, excludeDynamicSections: k, cacheBreakerPhrase: m.cacheBreakerPhrase, analysisOnly: true, storageV5: C, credentials: S }), B = (0, import_chunk_4mh8nmh5.Sl)((0, import_chunk_sjqze7qg.dbt)((0, import_chunk_4mh8nmh5.KBt)(a, j), { model: l, tools: x, mcpClients: f, appendSystemPrompt: y, analysisOnly: true })), P = i.at(-1), h = g && P?.type === "assistant" && P.message.stop_reason === null ? i.slice(0, -1) : i, F = { messageQueue: d, session: e, storageV5: C, credentials: S, agentContext: (0, import_chunk_865at33z.Cu)(), options: { commands: r, debug: false, mainLoopModel: l, tools: t, toolCatalog: s, verbose: false, thinkingConfig: M ?? ((0, import_chunk_865at33z.ahe)() !== false ? { type: "adaptive" } : { type: "disabled" }), mcpClients: f, mcpResources: {}, isNonInteractiveSession: true, runQuery: b, getPlanModeSetting: void 0, agentDefinitions: { activeAgents: T, allAgents: [] }, customSystemPrompt: a, ...a !== void 0 && { omitGitStatus: true }, appendSystemPrompt: y, autoCompactWindow: m.autoCompactWindow, fastMode: m.fastMode, cacheBreakerPhrase: m.cacheBreakerPhrase }, abortController: (0, import_chunk_cbnm4p23._r)(), readFileState: p, toolState: u, toolDecisions: /* @__PURE__ */ new Map(), permissionRelays: import_chunk_hemc71zd.lMe, getAppState: o, setAppState: n, ...(0, import_chunk_tfgxeb6k.l7t)(o, n), queuedNotificationsRegistry: (0, import_chunk_tteqedwm.u7t)(o, n, e), taskRegistry: (0, import_chunk_4yjj7pjs.Py)(o, n), sessionHooksRegistry: c, teammateColors: (0, import_chunk_hemc71zd.THt)((0, import_chunk_se72nykz.qXe)(o, n, "teammateColors")), rootToolSurface: { tools: t, mainLoopModel: l }, messages: h, turnStartIndex: 0, modelFacts: (0, import_chunk_bzyb60p0.Il)(l), loopModel: l, getFileHistoryState: () => {
    return;
  }, applyFileHistoryOp: () => {
  }, applyAttributionOp: () => {
  } };
  return { systemPrompt: B, userContext: R, systemContext: H, toolUseContext: F, forkContextMessages: h, advisorModel: m.advisorModel };
}
