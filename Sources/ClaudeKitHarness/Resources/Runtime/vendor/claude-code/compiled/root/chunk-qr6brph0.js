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
var chunk_qr6brph0_exports = {};
__export(chunk_qr6brph0_exports, {
  GHt: () => GHt,
  K4r: () => K4r,
  Str: () => Str,
  Zve: () => Zve
});
module.exports = __toCommonJS(chunk_qr6brph0_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_yg9g0473 = require("/$bunfs/root/chunk-yg9g0473.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
function Zve(e, t) {
  if (t) return e ? `agent:builtin:${e}` : "agent:default";
  return e ? `agent:custom:${e}` : "agent:custom";
}
function GHt() {
  let t = (0, import_chunk_2yx6c1y2.zr)()?.outputStyle ?? import_chunk_bzyb60p0.K$;
  if (t === import_chunk_bzyb60p0.K$) return "repl_main_thread";
  return Object.hasOwn(import_chunk_bzyb60p0.Lye, t) ? `repl_main_thread:outputStyle:${t}` : "repl_main_thread:outputStyle:custom";
}
function u(e, t) {
  let o = e.subagentType === t.agent.agentType ? t.agent : t.agents.find((n) => n.agentType === e.subagentType);
  if (o !== void 0) return { agent: o };
  let r = t.agents.map((n) => n.agentType), g = r.length > 0 ? `available: ${r.join(", ")}` : "none is available";
  return { deny: `a hook's subagentType '${e.subagentType}' names no agent this call can dispatch (${g})` };
}
var f = (e) => ({ tool_use_id: e.tool_use_id, prompt: e.prompt, description: e.description, subagentType: e.agent.agentType, provider: (0, import_chunk_bzyb60p0.EXo)(e.agent), model: e.model, parentModel: e.parentModel, ...e.parentAgentId !== void 0 && { parentAgentId: e.parentAgentId }, permissionMode: e.permissionMode, background: e.background, fork: e.fork, ...e.isTeammate === true && { isTeammate: true }, ...e.workflow !== void 0 && { workflow: e.workflow }, ...e.resume !== void 0 && { resume: e.resume }, name: e.name, cwd: e.cwd });
var m = (e) => ({ started: ({ agentId: t, model: s, teammateId: o }) => e.done({ model: s, agentId: t, ...o !== void 0 && { teammateId: o } }), [Symbol.dispose]: e[Symbol.dispose] });
var K4r = Object.freeze({ started: () => {
  return;
}, [Symbol.dispose]: () => {
  return;
} });
async function Str(e, t) {
  let { agent: s, agents: o, signal: r, origin: g } = e, n = f(e);
  if (!(0, import_chunk_5zps0wmn.Qi)("agent.spawn")) return { spawn: n, agent: s, starting: K4r, isRewritten: false };
  let a = (0, import_chunk_bzyb60p0.car)(import_chunk_bzyb60p0.y6l), c = await (0, import_chunk_bzyb60p0.dar)(a, t({ signal: r, origin: g, core: { "agent.spawn": (0, import_chunk_bzyb60p0.IXo)(a) } }).agent.spawn(n));
  if (!c.arrived) return (0, import_chunk_bzyb60p0.g6l)({ result: c.answered, input: n, signal: r });
  let p = c.arrived;
  (0, import_chunk_bzyb60p0._6l)({ input: n, spawn: p });
  let i = u(p, { agent: s, agents: o });
  if (i.deny !== void 0) return a.failed(new import_chunk_hcg738hf.je(i.deny)), i;
  return { spawn: p, agent: i.agent, starting: m(a), isRewritten: !(0, import_chunk_yg9g0473.gDe)({ input: n }, p) };
}
