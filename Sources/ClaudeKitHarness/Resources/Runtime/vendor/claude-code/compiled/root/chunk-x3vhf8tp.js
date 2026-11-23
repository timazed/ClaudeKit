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
var chunk_x3vhf8tp_exports = {};
__export(chunk_x3vhf8tp_exports, {
  Anr: () => Anr,
  JQs: () => JQs,
  K0a: () => K0a,
  KQs: () => KQs,
  QQs: () => QQs,
  V0a: () => V0a,
  VQs: () => VQs,
  XQs: () => XQs,
  YQs: () => YQs,
  ZQs: () => ZQs,
  qQs: () => qQs,
  zQs: () => zQs
});
module.exports = __toCommonJS(chunk_x3vhf8tp_exports);
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var zQs = "So far, how have you used AI?", VQs = "This tells Claude how much help to offer for your first five sessions.", KQs = { new: "Not much yet", chat: "Autocomplete or chat", tried: "Agents, still learning", agents: "Agents, very comfortable" }, qQs = "How do you want to work with Claude at first?", YQs = "This tells Claude when to check with you for your first five sessions.", r = { own: { label: "Let Claude work on its own", description: "Works through your task and shows you what changed" }, check: { label: "Check in on bigger changes", description: "Asks Claude to share its plan and wait on multi-file or risky work" }, step: { label: "Review each step", description: "Asks Claude to stop after each step and show you the change" } };
function XQs(t) {
  let s = t === void 0 || t === "agents";
  return import_chunk_sjqze7qg.ebt.map((e) => {
    let { label: n, description: o } = r[e];
    return { pace: e, label: n, description: e === "own" && s ? `The default. ${o}` : o };
  });
}
var JQs = { check: "When you started, you set Claude to ask before big changes. Keep this on?", step: "When you started, you set Claude to stop after each step. Keep this on?", help: "When you started, you set Claude to confirm what you mean and suggest next steps. Keep this on?", check_and_help: "When you started, you set Claude to ask before big changes and confirm what you mean. Keep this on?", step_and_help: "When you started, you set Claude to stop after each step and confirm what you mean. Keep this on?" }, QQs = "Turns off unless you keep it.", ZQs = "Keep", V0a = "How Claude works with you at first", Anr = "Turn off", K0a = "You can\u2019t turn this on again here.";
