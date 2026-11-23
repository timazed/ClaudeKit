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
var chunk_060xwhvh_exports = {};
__export(chunk_060xwhvh_exports, {
  $kl: () => $kl,
  Ako: () => Ako,
  Bkl: () => Bkl,
  CWn: () => CWn,
  Cko: () => Cko,
  Df: () => Df,
  Dkl: () => Dkl,
  EWn: () => EWn,
  Eko: () => Eko,
  Fkl: () => Fkl,
  Hcn: () => Hcn,
  Hkl: () => Hkl,
  Iko: () => Iko,
  Lkl: () => Lkl,
  Lws: () => Lws,
  Nkl: () => Nkl,
  Nws: () => Nws,
  Oko: () => Oko,
  Pko: () => Pko,
  Rko: () => Rko,
  TWn: () => TWn,
  Tko: () => Tko,
  Ukl: () => Ukl,
  _t: () => _t,
  dTr: () => dTr,
  eji: () => eji,
  kko: () => kko,
  mu: () => mu,
  nlt: () => nlt,
  pv: () => pv,
  tji: () => tji,
  vWn: () => vWn,
  vko: () => vko,
  xko: () => xko
});
module.exports = __toCommonJS(chunk_060xwhvh_exports);
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var mu = "SubagentHandback";
var _t = "Agent", Hkl = "tengu_quizzical_piglet", Dkl = "Launch a new agent to handle complex, multi-step tasks", Lkl = "The task for the agent to perform", Nkl = "A short (3-5 word) description of the task", Fkl = ["sonnet", "opus", "haiku", "fable"], eji = "Name for the spawned agent.", $kl = `${eji} Makes it addressable via ${import_chunk_bne5t4g3.Ln}({to: name}) while running.`, pv = "fork", Ukl = `agent:builtin:${pv}`, dTr = 200, Bkl = 5, Df = "Task", Hcn = 1e5, EWn = /* @__PURE__ */ new Set(["Explore", "Plan"]), nlt = "NOTE: this agent stopped at its ", Lws = "harness", Nws = "subagent", kko = "system-reminder", Eko = `; ${import_chunk_bne5t4g3.Ln} to task-id to continue`, vko = ` Send the agent a message (${import_chunk_bne5t4g3.Ln}) to let it continue from where it stopped.`, Tko = "Hand in your final report from a script", Cko = `The subagent ended without delivering a report through ${mu}, so no report was delivered.`, Ako = ` Send the agent a message (${import_chunk_bne5t4g3.Ln}) to ask it to deliver its report.`, Rko = `This agent called ${mu} again after`, vWn = `If it has not messaged you since, send it a message (${import_chunk_bne5t4g3.Ln}`, xko = `${Rko} that report and was refused (one report per result), so anything new in that call has not reached you through it.`, Pko = ` ${vWn}) to ask for it.`, Oko = `This agent ran again after its ${mu} report`, TWn = `${Oko}. Anything it wrote at the end of that run was not delivered, because it gets one report until its background work ends. So the report does not answer the message you sent it.`, CWn = { report: ` ${vWn}) to ask again.`, message: ` ${vWn}) asking it to answer with ${import_chunk_bne5t4g3.Ln}.`, wait: " It cannot answer sooner: ask again after the notification that it finished." }, tji = ` Once its requests are accepted again, send the agent a message (${import_chunk_bne5t4g3.Ln}) to let it continue from where it stopped instead of starting a new agent.`, Iko = "subagent_type is required: the general-purpose agent is not available in this session";
