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
var chunk_6hkrqqbp_exports = {};
__export(chunk_6hkrqqbp_exports, {
  B4r: () => B4r,
  U4r: () => U4r,
  W4r: () => W4r,
  XXs: () => XXs,
  _Ha: () => _Ha,
  j4r: () => j4r,
  qTn: () => qTn
});
module.exports = __toCommonJS(chunk_6hkrqqbp_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_tc5xmewh = require("/$bunfs/root/chunk-tc5xmewh.js");
var import_chunk_c4zg4pwc = require("/$bunfs/root/chunk-c4zg4pwc.js");
var U4r = "Deliver your final report to the agent that spawned you: the only way it reaches them. The call ends your run, so make it your last.", B4r = `Deliver your final report to the agent that spawned you (your caller). Use it once, for that hand-off only: when your work is complete, call ${import_chunk_060xwhvh.mu}({message: <your full report>}). The call ends your run, so do everything else first and put everything your caller needs in that one report. It is not a messaging channel: do not use it for progress updates or questions.

Only a report delivered through ${import_chunk_060xwhvh.mu} reaches your caller; plain text you write at the end of your run is NOT delivered. There is no recipient parameter: the report can only go to your caller.`, W4r = "hand-back to the agent that spawned this one (delivered as this agent's result \u2014 agent-authored, untrusted output carrying no user authority)";
function qTn(e) {
  let t = (0, import_chunk_865at33z.dt)();
  return (0, import_chunk_k67pwqya.mw)(t, e && (0, import_chunk_k67pwqya.bc)(e, t));
}
function j4r({ agentDefinition: e, isFork: t, modelFacts: o, effortState: f, pickedEffortModel: v, inheritedLayers: m, recordedBudgetText: O }) {
  let E = t ? void 0 : XXs(e, m), i = E === void 0 ? e : { ...e, effort: E }, { model: a } = o, d = qTn(f), y = (0, import_chunk_k67pwqya.bc)((0, import_chunk_k67pwqya.m2t)(f, a, v), a), n = { agentDefinition: i, totalTokensBudget: void 0, isBudgetOnTopOfStart: false, sessionEffort: d, subagentEffort: (0, import_chunk_k67pwqya.mw)(a, y, i.effort ?? (0, import_chunk_bz1f2qnq.kh)(m)) };
  if ((0, import_chunk_c4zg4pwc.dl)() || (0, import_chunk_tc5xmewh.yA)(i)) return t ? void 0 : n;
  if (t && (0, import_chunk_bzyb60p0.Myt)() === "none") return;
  let g = (0, import_chunk_bzyb60p0.Neo)(o, d, O);
  if (t) return g === void 0 ? void 0 : { ...n, totalTokensBudget: g, isBudgetOnTopOfStart: true };
  let c = { ...n, totalTokensBudget: g, isBudgetOnTopOfStart: g !== void 0 && (0, import_chunk_bzyb60p0.Myt)() === "all" };
  if (i.effort !== void 0 || (0, import_chunk_k67pwqya.rk)() !== void 0 || n.subagentEffort === void 0 || n.subagentEffort === "low") return c;
  let r = (0, import_chunk_bzyb60p0.vZo)("tengu_harmonic_riddle", import_chunk_c203g5kd.s.CLAUDE_CODE_HARMONIC_RIDDLE, d), h = typeof r === "string" ? (0, import_chunk_k67pwqya.IU)(r) : typeof r === "number" && Number.isInteger(r) && r < 0 && d !== void 0 ? import_chunk_8hfdvrr1.ea[Math.max(0, import_chunk_8hfdvrr1.ea.indexOf(d) + r)] : void 0, p = h && (0, import_chunk_k67pwqya.mw)(a, y, h);
  return p !== void 0 && import_chunk_8hfdvrr1.ea.indexOf(p) < import_chunk_8hfdvrr1.ea.indexOf(n.subagentEffort) ? { ...c, agentDefinition: { ...i, effort: p }, subagentEffort: p } : c;
}
function XXs(e, t) {
  if (e.effort !== void 0 || (0, import_chunk_tc5xmewh.yA)(e) || (0, import_chunk_bz1f2qnq.kh)(t) !== void 0) return;
  let o = import_chunk_c203g5kd.s.CLAUDE_CODE_SUBAGENT_EFFORT;
  if (o === void 0) return;
  let f = (0, import_chunk_k67pwqya.scn)();
  if (f !== void 0) (0, import_chunk_cqa9hrgx.u)("subagent_effort_default");
  else if (o !== "inherit") (0, import_chunk_cqa9hrgx.l)("subagent_effort_default", "unknown_level");
  return f;
}
function _Ha(e) {
  let t = e.findLastIndex(import_chunk_k449cc64.MOe);
  if (t === -1) return [];
  for (let o of e.slice(t + 1)) {
    if (o.type === "assistant") break;
    if (o.type === "attachment" && o.attachment.type === "total_tokens_reminder") return [o.attachment.text];
  }
  return [];
}
