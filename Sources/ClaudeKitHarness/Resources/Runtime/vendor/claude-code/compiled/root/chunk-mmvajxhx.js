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
var chunk_mmvajxhx_exports = {};
__export(chunk_mmvajxhx_exports, {
  GLe: () => GLe,
  Iun: () => Iun,
  Oun: () => Oun,
  Ozi: () => Ozi,
  Qle: () => Qle,
  UCr: () => UCr,
  bvo: () => bvo,
  kvo: () => kvo,
  wvo: () => wvo,
  zTl: () => zTl
});
module.exports = __toCommonJS(chunk_mmvajxhx_exports);
function Oun(t) {
  let e = false, r, n = { addDir: [], pluginDir: [], pluginDirNoMcp: [], settings: void 0, managedSettings: void 0, mcpConfig: [], strictMcpConfig: false, restricted: false }, g = [], d = { "--cwd": (i) => {
    r = i;
  }, "--settings": (i) => {
    n.settings = i;
  }, "--managed-settings": (i) => {
    n.managedSettings = i;
  }, "--setting-sources": () => {
  }, "--add-dir": (i) => n.addDir.push(i), "--plugin-dir": (i) => n.pluginDir.push(i), "--plugin-dir-no-mcp": (i) => n.pluginDirNoMcp.push(i), "--mcp-config": (i) => n.mcpConfig.push(i) };
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    if (s === "agents" && !e) {
      e = true;
      continue;
    }
    if (s === "--strict-mcp-config") {
      n.strictMcpConfig = true;
      continue;
    }
    if (s === "--restricted") {
      n.restricted = true;
      continue;
    }
    let o = s.indexOf("="), l = o === -1 ? s : s.slice(0, o), a = Object.hasOwn(d, l) ? d[l] : void 0;
    if (a) {
      if (o !== -1) a(s.slice(o + 1));
      else if (i + 1 < t.length) a(t[++i]);
      else g.push(s);
      continue;
    }
    g.push(s);
  }
  return { hasAgentsPositional: e, cwdFilter: r, config: n, rest: g };
}
function UCr(t) {
  let e = t.trim();
  return e === "~" || e.startsWith("~/");
}
function Iun(t, e) {
  let r = (n, g) => n === "" || g && n.trimStart().startsWith("{") ? n : e(n);
  return { settings: t.settings === void 0 ? void 0 : r(t.settings, true), managedSettings: t.managedSettings, pluginDir: t.pluginDir.map((n) => r(n, false)), pluginDirNoMcp: t.pluginDirNoMcp.map((n) => r(n, false)), addDir: t.addDir.map((n) => UCr(n) ? n : r(n, false)), mcpConfig: t.mcpConfig.map((n) => r(n, true)), strictMcpConfig: t.strictMcpConfig, restricted: t.restricted, settingSources: t.settingSources };
}
function Ozi() {
  return false;
}
function GLe(t) {
  return [...t.settings ? ["--settings", t.settings] : [], ...t.managedSettings ? ["--managed-settings", t.managedSettings] : [], ...t.managedSettings === "" && Ozi() ? ["--managed-settings="] : [], ...t.pluginDir.flatMap((e) => ["--plugin-dir", e]), ...t.pluginDirNoMcp.flatMap((e) => ["--plugin-dir-no-mcp", e]), ...t.addDir.flatMap((e) => ["--add-dir", e]), ...t.mcpConfig.flatMap((e) => ["--mcp-config", e]), ...t.settingSources !== void 0 ? [`--setting-sources=${t.settingSources}`] : [], ...t.strictMcpConfig ? ["--strict-mcp-config"] : [], ...t.restricted ? ["--restricted"] : []];
}
function zTl(t) {
  let e = 0;
  while (t[e] === "--dangerously-skip-permissions" || t[e] === "--allow-dangerously-skip-permissions") e++;
  return t[e] === "daemon" ? t.slice(e + 1) : null;
}
function Qle(t = { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.BUILD_REF_NAME) {
  return "";
}
var bvo = "this terminal", u = /^[0-9A-Za-z][0-9A-Za-z.+-]{0,63}$/;
function wvo(t) {
  return typeof t === "string" && u.test(t) ? t : void 0;
}
var f = "0.3.280";
function kvo() {
  return { version: `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${Qle()}`, buildTime: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.BUILD_TIME, oldestDesktopSdk: f };
}
