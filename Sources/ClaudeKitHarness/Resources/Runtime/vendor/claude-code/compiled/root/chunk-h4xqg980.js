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
var chunk_h4xqg980_exports = {};
__export(chunk_h4xqg980_exports, {
  BDr: () => BDr,
  E$l: () => E$l,
  EEe: () => EEe,
  Fta: () => Fta,
  Nta: () => Nta,
  WDr: () => WDr,
  eft: () => eft,
  p_n: () => p_n,
  pqt: () => pqt,
  uF: () => uF,
  zHo: () => zHo
});
module.exports = __toCommonJS(chunk_h4xqg980_exports);
var EEe = ["auto", "iterm2", "terminal_bell", "iterm2_with_bell", "kitty", "ghostty", "notifications_disabled"], E$l = ["permission_prompt", "idle_prompt", "auth_success", "elicitation_dialog", "agent_needs_input", "agent_completed", "elicitation_url_dialog", "worker_permission_prompt", "push_notification", "computer_use_enter", "computer_use_exit", "quota_auto_resume_fired", "quota_auto_resume_stale", "quota_auto_resume_disabled", "model_refusal_fallback", "auth_storage_failure", "plugin_notification"], Nta = ["normal", "vim"], zHo = ["forward", "keep_local"], pqt = ["auto", "12-hour", "24-hour", "24-hour-utc"], BDr = ["auto", "tmux", "iterm2", "in-process"], Fta = ["dark", "light", "light-daltonized", "dark-daltonized", "light-ansi", "dark-ansi"], eft = ["auto", ...Fta], WDr = ["auto", "alwaysAsk", "disabled"], uF = 1e5, p_n = 1e4;
