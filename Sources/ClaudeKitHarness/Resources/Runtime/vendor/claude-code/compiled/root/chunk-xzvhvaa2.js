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
var chunk_xzvhvaa2_exports = {};
__export(chunk_xzvhvaa2_exports, {
  AHr: () => AHr,
  CHr: () => CHr,
  Cnd: () => Cnd,
  DKn: () => DKn,
  Ko: () => Ko,
  PM: () => PM,
  THr: () => THr,
  Ts: () => Ts,
  WA: () => WA,
  Yze: () => Yze,
  b8: () => b8,
  bb: () => bb,
  dEe: () => dEe,
  kMo: () => kMo,
  rn: () => rn,
  tp: () => tp,
  vKt: () => vKt,
  xFe: () => xFe,
  yp: () => yp,
  zFl: () => zFl
});
module.exports = __toCommonJS(chunk_xzvhvaa2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var b8 = "claude.ai sync", a = { advisor: "config", agents: "config", "auto-mode-setup": "config", autocompact: "config", brief: "config", channel: "config", chrome: "config", clawd: "config", "cloud-plugins": "config", color: "config", config: "config", effort: "config", env: "config", experiments: "config", "extra-usage": "config", fast: "config", focus: "config", goal: "config", hooks: "config", ide: "config", "install-github-app": "config", "install-slack-app": "config", issue: "config", keybindings: "config", mcp: "config", memory: "config", model: "config", "output-style": "config", passes: "config", "pause-memory": "config", permissions: "config", plan: "config", plugin: "config", project: "config", powerup: "config", "privacy-settings": "config", "pro-trial-expired": "config", "rate-limit-options": "config", "remote-control": "config", "remote-env": "config", "use-case": "config", sandbox: "config", "scroll-speed": "config", "setup-bedrock": "config", "setup-vertex": "config", "terminal-setup": "config", theme: "config", tui: "config", upgrade: "config", "usage-credits": "config", vim: "config", voice: "config", "web-setup": "config", wellbeing: "config", "add-dir": "action", "ant-trace": "action", artifacts: "action", background: "action", branch: "action", btw: "action", bug: "action", cd: "action", clear: "action", compact: "action", copy: "action", "debug-tool-call": "action", desktop: "action", exit: "action", export: "action", feedback: "action", heapdump: "action", "design-consent": "action", "design-revoke": "action", "design-login": "action", login: "action", logout: "action", "low-priority": "action", "limit-reset": "action", import: "action", "mock-limits": "action", "oauth-refresh": "action", onboarding: "action", "perf-issue": "action", radio: "action", "reload-plugins": "action", "reload-skills": "action", rename: "action", "reset-limits": "action", "settings-review": "config", restart: "action", update: "action", resume: "action", "simulate-usage": "action", rewind: "action", stickers: "action", stop: "action", teleport: "action", thrash: "action", access: "info", context: "info", diff: "info", help: "info", "input-debug": "info", mobile: "info", recap: "info", "release-notes": "info", "render-debug": "info", session: "info", "skill-doctor": "info", skills: "info", status: "info", usage: "info", version: "info", "__remote-workflow": "agent", "workflow-launch-exec": "agent", "autofix-pr": "agent", autopilot: "agent", bugfix: "agent", daemon: "agent", dashboard: "agent", docs: "agent", fork: "agent", subtask: "agent", investigate: "agent", schedule: "agent", "list-agents": "agent", "send-to-project": "agent", tasks: "agent", ultraplan: "agent", ultrareview: "agent", workflows: "agent" };
function zFl(e) {
  if (e.type === "prompt") return "skill";
  return a[e.name] ?? "action";
}
function kMo(e) {
  if (e.type !== "prompt") return "builtin";
  if (e.loadedFrom === "syncedSkills") return "synced";
  switch (e.source) {
    case "builtin":
      return "builtin";
    case "bundled":
      return "bundled";
    case "mcp":
    case "memoryStore":
      return "remote";
    case "plugin":
      return "plugin";
    case "userSettings":
      return "user";
    case "projectSettings":
    case "localSettings":
      return "project";
    case "policySettings":
      return "managed";
    case "flagSettings":
      return "flag";
  }
}
var Ts = ["userSettings", "projectSettings", "localSettings", "flagSettings", "policySettings"];
function PM(e) {
  switch (e) {
    case "userSettings":
      return "user";
    case "projectSettings":
      return "project";
    case "localSettings":
      return "project, gitignored";
    case "flagSettings":
      return "cli flag";
    case "policySettings":
      return "managed";
  }
}
function THr(e) {
  switch (e) {
    case "userSettings":
      return "User";
    case "projectSettings":
      return "Project";
    case "localSettings":
      return "Local";
    case "flagSettings":
      return "Flag";
    case "policySettings":
      return "Managed";
    case "plugin":
      return "Plugin";
    case "built-in":
      return "Built-in";
    case "mcp":
      return "MCP";
    case "memoryStore":
      return "Memory store";
    case "syncedSkills":
      return b8;
  }
}
function bb(e) {
  switch (e) {
    case "userSettings":
      return "user settings";
    case "projectSettings":
      return "shared project settings";
    case "localSettings":
      return "project local settings";
    case "flagSettings":
      return "command line arguments";
    case "policySettings":
      return "enterprise managed settings";
    case "cliArg":
      return "CLI argument";
    case "command":
      return "command configuration";
    case "session":
      return "current session";
    case "toolsNarrowing":
      return "CLI tool narrowing";
    case "mcpServerPolicy":
      return "MCP server policy";
    case "hostCredential":
      return "cloud-session credential guard";
    case "mcpMount":
      return "Remote Control server mount";
  }
}
function vKt(e) {
  return (0, import_chunk_7cfjrnwy.wi)(bb(e));
}
function CHr(e) {
  if (e === "") return [];
  let n = e.split(",").map((o) => o.trim()), t = [];
  for (let o of n) {
    let i = r.find(([c]) => c === o);
    if (!i) {
      let c = r.map(([s]) => s).join(", ");
      throw Error(`Invalid setting source: ${o}. Valid options are: ${c}`);
    }
    t.push(i[1]);
  }
  return t;
}
function g(e) {
  let n = r.filter(([, t]) => e.includes(t)).map(([t]) => t);
  return n.length === r.length ? void 0 : n.join(",");
}
function Yze() {
  if ((0, import_chunk_f9x2f6cx.cC)()) return;
  return g((0, import_chunk_f9x2f6cx.dVe)());
}
function DKn() {
  let e = Yze();
  return e === void 0 ? [] : [`--setting-sources=${e}`];
}
function Ko() {
  let e = (0, import_chunk_f9x2f6cx.wPt)(), n = (0, import_chunk_r3mm3x33.Br)();
  if (n.enabledSources?.allowed === e) return n.enabledSources.result;
  let t = new Set(e);
  t.add("flagSettings"), t.add("policySettings");
  let o = Ts.filter((i) => t.has(i));
  return n.enabledSources = { allowed: e, result: o }, o;
}
function rn(e) {
  return Ko().includes(e);
}
var tp = ["userSettings", "projectSettings", "localSettings"], WA = ["projectSettings", "localSettings"], yp = new Set(WA), u = { userSettings: "user", projectSettings: "project", localSettings: "local" }, r = tp.map((e) => [u[e], e]);
var dEe = ["localSettings", "projectSettings", "userSettings"], AHr = "--settings (inline JSON)", Cnd = ["auto", "bypassPermissions"], xFe = "organizationFreeFormSettings";
