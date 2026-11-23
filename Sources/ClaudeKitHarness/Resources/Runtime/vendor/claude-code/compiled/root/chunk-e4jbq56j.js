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
var chunk_e4jbq56j_exports = {};
__export(chunk_e4jbq56j_exports, {
  GDa: () => GDa,
  ctt: () => ctt,
  f6: () => f6,
  igt: () => igt,
  jDa: () => jDa,
  zDa: () => zDa,
  zte: () => zte
});
module.exports = __toCommonJS(chunk_e4jbq56j_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var p = ["c4e-ultrareview", "claude-design-command", "claude-security-plugin", "claude-security-review-closing", "content-link-long-sessions", "default-permission-mode-config", "desktop-app", "desktop-contextual", "desktop-ios-simulator", "desktop-shortcut", "explanatory-output-style", "focus-view", "frontend-design-plugin", "ide-upsell-external-terminal", "install-github-app", "install-slack-app", "install-slack-app-mcp", "memory-command", "no-flicker", "permissions", "plugin-disuse-review", "status-line", "team-onboarding-share", "voice-mode", "web-setup-github", "workflow-size-prompting", "workflow-size-prompting-ambient", "you-should-know-plugin", ...[]];
function u(t) {
  return p.includes(t);
}
function ctt(t, i, n) {
  let o = (0, import_chunk_865at33z.ge)().numStartups;
  (0, import_chunk_865at33z.Ke)((e) => {
    let s = e.tipsHistory ?? {};
    if (s[t] === o) return e;
    let r = e.tipLifetimeShownCounts ?? {};
    return { ...e, tipsHistory: { ...s, [t]: o }, tipLifetimeShownCounts: { ...r, [t]: (r[t] ?? 0) + 1 }, ...n !== void 0 && { tipsHistoryByCommand: { ...e.tipsHistoryByCommand, [n]: { tipId: t, numStartups: o } } } };
  }, i);
}
var g = 100;
function igt(t) {
  let i = (0, import_chunk_865at33z.ge)(), n = i.tipsHistoryByCommand?.[t];
  if (typeof n !== "object" || n === null) return {};
  let o = i.numStartups - n.numStartups;
  if (!(o >= 0)) return {};
  return { via_tip: true, tip_launches_ago: Math.min(o, g), ...u(n.tipId) && { tip_id: (0, import_chunk_78g0060s.f)(n.tipId) } };
}
function zte(t) {
  return (0, import_chunk_865at33z.ge)().tipLifetimeShownCounts?.[t] ?? 0;
}
function jDa(t) {
  return (0, import_chunk_865at33z.ge)().pluginSuggestionShownCounts?.[t] ?? 0;
}
function f6(t) {
  let i = (0, import_chunk_865at33z.ge)(), n = i.tipsHistory?.[t];
  if (!n) return 1 / 0;
  return i.numStartups - n;
}
function GDa(t) {
  return (0, import_chunk_865at33z.ge)().pluginSuggestionDiscoverShownCounts?.[t] ?? 0;
}
function zDa(t, i) {
  if (t.length === 0) return;
  (0, import_chunk_865at33z.Ke)((n) => {
    let o = n.pluginSuggestionDiscoverShownCounts ?? {};
    if (t.every((s) => (o[s] ?? 0) > 0)) return n;
    let e = { ...o };
    for (let s of t) e[s] = (e[s] ?? 0) + 1;
    return { ...n, pluginSuggestionDiscoverShownCounts: e };
  }, i);
}
