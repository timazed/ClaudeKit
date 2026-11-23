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
var chunk_g9abhc4p_exports = {};
__export(chunk_g9abhc4p_exports, {
  qZn: () => qZn
});
module.exports = __toCommonJS(chunk_g9abhc4p_exports);
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
async function qZn({ toolUseContext: e, forkContextMessages: o, mainThreadAgentDefinition: t }) {
  await (0, import_chunk_q2404y26.bst)(e);
  let { systemPrompt: s, userContext: m, systemContext: r } = (0, import_chunk_bzyb60p0.sts)() ?? await a(e, t);
  return { systemPrompt: s, userContext: m, systemContext: r, toolUseContext: e.modelFacts.model === e.loopModel ? e : { ...e, modelFacts: (0, import_chunk_bzyb60p0.Il)(e.loopModel) }, forkContextMessages: o, advisorModel: e.getAdvisorSetting() };
}
async function a(e, o) {
  let [t, s, m] = await Promise.all([e.renderedSystemPrompt ?? i(e, o), (0, import_chunk_bzyb60p0.$F)(e.session, e.storageV5, e.credentials), (0, import_chunk_bzyb60p0.Mie)(e.session, e.options.cacheBreakerPhrase)]);
  return { systemPrompt: t, userContext: s, systemContext: m };
}
async function i(e, o) {
  let t = await (0, import_chunk_bzyb60p0.eG)((0, import_chunk_q2404y26.wA)(e), e.modelFacts.model);
  return (0, import_chunk_bzyb60p0.Nye)({ mainThreadAgentDefinition: o, toolUseContext: e, customSystemPrompt: e.options.customSystemPrompt, defaultSystemPrompt: t, appendSystemPrompt: e.options.appendSystemPrompt, model: e.modelFacts.model });
}
