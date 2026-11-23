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
var chunk_0pb268nk_exports = {};
__export(chunk_0pb268nk_exports, {
  Lr: () => Lr,
  xN: () => xN
});
module.exports = __toCommonJS(chunk_0pb268nk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var l = { claudeMd: true, skills: true, workflows: false, plugins: true, pluginMonitors: false, themes: false, hljsLanguages: true, hooks: true, statusLine: false, fileSuggestion: false, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: true, agents: true, outputStyles: false, lspServers: true, keybindings: false }, a = { claudeMd: false, skills: false, workflows: false, plugins: false, pluginMonitors: false, themes: false, hljsLanguages: false, hooks: true, statusLine: true, fileSuggestion: true, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: false, agents: false, outputStyles: false, lspServers: false, keybindings: false }, o = { claudeMd: false, skills: false, workflows: false, plugins: false, pluginMonitors: false, themes: false, hljsLanguages: false, hooks: false, statusLine: true, fileSuggestion: true, mcpAutoDiscovered: false, mcpClaudeAi: false, mcpAgentFrontmatter: false, agents: false, outputStyles: false, lspServers: false, keybindings: true };
function Lr(e, t) {
  if (o[e] && (0, import_chunk_f9x2f6cx.Y)()) return true;
  if ((0, import_chunk_2gtmjt3y.as)() && !a[e]) return true;
  if ((0, import_chunk_2gtmjt3y.Xn)() && !t?.explicitlyRequested) return l[e];
  return false;
}
function xN() {
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_CLAUDE_MDS || Lr("claudeMd", { explicitlyRequested: (0, import_chunk_f9x2f6cx.tu)().length > 0 }));
}
