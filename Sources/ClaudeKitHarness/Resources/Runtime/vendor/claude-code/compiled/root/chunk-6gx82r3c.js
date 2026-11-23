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
var chunk_6gx82r3c_exports = {};
__export(chunk_6gx82r3c_exports, {
  Aer: () => Aer,
  GYs: () => GYs,
  N$e: () => N$e,
  VYs: () => VYs,
  zYs: () => zYs
});
module.exports = __toCommonJS(chunk_6gx82r3c_exports);
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
function GYs(n, e) {
  return e && !n.restricted ? { ...n, restricted: true } : n;
}
function N$e(n) {
  return (0, import_chunk_2gtmjt3y.as)() || (0, import_chunk_2gtmjt3y.YOe)() || [n.permissionMode, n.inheritPermissionMode, n.model, n.fallbackModel, n.clientDataUrl, n.allowOtherModels, n.effort, n.agent, n.agents, n.settings, n.projectConfigRoot, n.appendSystemPrompt, n.appendSystemPromptFile, n.systemPrompt, n.systemPromptFile, n.systemPromptSnapshot, n.replyOnResume, n.permissionPromptTool, n.settingSources, n.managedSettings].some((e) => e !== void 0) || Boolean(n.disableSlashCommands) || Boolean(n.includeUnsupportedModels) || n.sessionPersistence === false || Boolean(n.dangerouslySkipPermissions) || Boolean(n.allowDangerouslySkipPermissions) || Boolean(n.allowBypass) || Boolean(n.restricted) || Boolean(n.ide) || Boolean(n.strictMcpConfig) || (n.allowedTools ?? []).length > 0 || (n.disallowedTools ?? []).length > 0 || (n.tools ?? []).length > 0 || (n.mcpConfig ?? []).length > 0 || (n.addDir ?? []).length > 0 || (n.pluginDir ?? []).length > 0 || (n.pluginDirNoMcp ?? []).length > 0;
}
function zYs(n, e) {
  return (e.runsOnAnotherMachine || e.resumeInCloud !== null) && n.model !== void 0 && !N$e({ ...n, model: void 0 });
}
function VYs(n) {
  return [n.systemPrompt, n.systemPromptFile, n.appendSystemPromptFile, n.permissionPromptTool, n.settingSources, n.managedSettings, n.projectConfigRoot].some((e) => e !== void 0) || (n.tools ?? []).some((e) => e !== "default");
}
var Aer = "a custom system prompt, a tool allowlist, or restricted settings";
