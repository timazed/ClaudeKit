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
var chunk_8hfdvrr1_exports = {};
__export(chunk_8hfdvrr1_exports, {
  Cqt: () => Cqt,
  Yoe: () => Yoe,
  _Ul: () => _Ul,
  _ce: () => _ce,
  a$: () => a$,
  aJ: () => aJ,
  d0r: () => d0r,
  ea: () => ea,
  f6e: () => f6e,
  fc: () => fc,
  hT: () => hT,
  l_: () => l_,
  yDo: () => yDo,
  yUl: () => yUl
});
module.exports = __toCommonJS(chunk_8hfdvrr1_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
function _Ul(e) {
  let t = e?.trim().toLowerCase();
  if (t === void 0 || t === "") return;
  switch (t) {
    case "on":
    case "1":
    case "true":
    case "yes":
    case "enabled":
      return "on";
    case "read-only":
    case "read_only":
    case "readonly":
      return "read_only";
    default:
      return "off";
  }
}
var ea = ["low", "medium", "high", "xhigh", "max"];
function f6e(e, t) {
  return ea.indexOf(e) > ea.indexOf(t);
}
var aJ = "May use excessive tokens resulting in long response times or overthinking. Use sparingly for the hardest tasks.";
var hT = /^(?:Read|Edit)\((?:\.\/)?!/;
function yDo(e) {
  return hT.test(`Edit(${e}`);
}
function Cqt(e) {
  return e === void 0 || e === false ? e : true;
}
var a$ = (0, import_chunk_2cbgkbm2.p)(() => [{ path: ["allowManagedPermissionRulesOnly"], restrictive: true }, { path: ["allowManagedHooksOnly"], restrictive: true }, { path: ["allowManagedMcpServersOnly"], restrictive: true }, { path: ["enforceAvailableModels"], restrictive: true }, { path: ["disableAllHooks"], restrictive: true }, { path: ["disableClaudeAiConnectors"], restrictive: true }, { path: ["disableCommandPluginSources"], restrictive: true }, { path: ["disableSideloadFlags"], restrictive: true }, { path: ["disableSkillShellExecution"], restrictive: true }, { path: ["disableWindowsBashCommandSplit"], restrictive: true }, { path: ["disableRemoteControl"], restrictive: true }, { path: ["disableAgentView"], restrictive: true }, { path: ["disableWorkflows"], restrictive: true }, { path: ["disableArtifact"], restrictive: true }, { path: ["disableBundledSkills"], restrictive: true }, { path: ["disableDirectMcpSkills"], restrictive: true }, { path: ["fastModePerSessionOptIn"], restrictive: true }, { path: ["isolatePeerMachines"], restrictive: true }, { path: ["strictPluginOnlyCustomization"], restrictive: true }, { path: ["disableAutoMode"], restrictive: "disable" }, { path: ["disableDeepLinkRegistration"], restrictive: "disable" }, { path: ["permissions", "disableBypassPermissionsMode"], restrictive: "disable" }, { path: ["permissions", "disableAutoMode"], restrictive: "disable" }, { path: ["permissions", "blockReadsOutsideWorkingDirectories"], restrictive: true }, { path: ["permissions", "blockWritesOutsideWorkingDirectories"], restrictive: true }, { path: ["permissions", "denyInsteadOfPrompting"], restrictive: true }, { path: ["autoMode", "classifyAllShell"], restrictive: true }, { path: ["worktree", "bgIsolation"], restrictive: "worktree" }, { path: ["enableArtifact"], restrictive: false }, { path: ["enableWorkflows"], restrictive: false }, { path: ["syncClaudeAiSkills"], restrictive: false }, { path: ["syncClaudeAiPlugins"], restrictive: false }, { path: ["useAutoModeDuringPlan"], restrictive: false }, { path: ["skipDangerousModePermissionPrompt"], restrictive: false }, { path: ["skipAutoPermissionPrompt"], restrictive: false }, { path: ["enableAllProjectMcpServers"], restrictive: false }, { path: ["channelsEnabled"], restrictive: false }, { path: ["skipWebFetchPreflight"], restrictive: false }, { path: ["skipWorkflowUsageWarning"], restrictive: false }, { path: ["autoUploadSessions"], restrictive: false }, { path: ["remoteControlAtStartup"], restrictive: false }, { path: ["remoteMessageReceipts"], restrictive: ["off", "on"] }, { path: ["remoteTools", "allowUnattendedServing"], restrictive: false }, { path: ["autoContinueAtUsageLimit"], restrictive: false }, { path: ["responseComparisonEnabled"], restrictive: false }, { path: ["disablePluginDirectory"], restrictive: true, normalize: Cqt }, { path: ["attribution", "sessionUrl"], restrictive: false }, { path: ["crossSessionInbound"], restrictive: ["refuse", "hold"] }, { path: ["remoteControl", "shareHostProfile"], restrictive: ["off", "basic"] }, { path: ["modelProposedGoals"], restrictive: ["disabled", "alwaysAsk"] }, { path: ["maxEffortLevel"], restrictive: ea }, { path: ["feedbackDrafts"], restrictive: "off" }, { path: ["availableModelsMatch"], restrictive: "exact" }, { path: ["askUserQuestionTimeout"], restrictive: "never" }, { path: ["dialogExpiry"], restrictive: "never" }, { path: ["sandbox", "enabled"], restrictive: true }, { path: ["sandbox", "failIfUnavailable"], restrictive: true }, { path: ["sandbox", "autoAllowBashIfSandboxed"], restrictive: false }, { path: ["sandbox", "allowUnsandboxedCommands"], restrictive: false }, { path: ["sandbox", "enableWeakerNestedSandbox"], restrictive: false }, { path: ["sandbox", "enableWeakerNetworkIsolation"], restrictive: false }, { path: ["sandbox", "allowAppleEvents"], restrictive: false }, { path: ["sandbox", "allowNestedUserNamespaces"], restrictive: false }, { path: ["sandbox", "network", "allowManagedDomainsOnly"], restrictive: true }, { path: ["sandbox", "network", "strictAllowlist"], restrictive: true }, { path: ["sandbox", "network", "allowAllUnixSockets"], restrictive: false }, { path: ["sandbox", "network", "allowLocalBinding"], restrictive: false }, { path: ["sandbox", "windows", "backend"], restrictive: "sandboxuser" }, { path: ["sandbox", "filesystem", "allowManagedReadPathsOnly"], restrictive: true }, { path: ["sandbox", "filesystem", "disabled"], restrictive: false }, { path: ["sandbox", "credentials", "allowPlaintextInject"], restrictive: false }, { path: ["sandbox", "credentials", "sigv4", "streaming"], restrictive: "deny" }, { path: ["sandbox", "credentials", "sigv4", "presigned"], restrictive: "deny" }, { path: ["sandbox", "credentials", "sigv4", "sigv4a"], restrictive: "deny" }, { path: ["isolation", "required"], restrictive: true }, { path: ["isolation", "persistHome"], restrictive: false }]), yUl = (0, import_chunk_2cbgkbm2.p)(() => /* @__PURE__ */ new Set(["askUserQuestionTimeout", "autoContinueAtUsageLimit", ...[], "autoMode.classifyAllShell", "autoUploadSessions", "channelsEnabled", "crossSessionInbound", "dialogExpiry", "disableBundledSkills", "disableDeepLinkRegistration", "enableAllProjectMcpServers", ...[], "fastModePerSessionOptIn", "feedbackDrafts", "isolatePeerMachines", "maxEffortLevel", "modelProposedGoals", "remoteControlAtStartup", "remoteMessageReceipts", "responseComparisonEnabled", "skipAutoPermissionPrompt", "skipDangerousModePermissionPrompt", "skipWorkflowUsageWarning", "useAutoModeDuringPlan", "worktree.bgIsolation"]));
function _ce(e) {
  return Array.isArray(e) ? e : [e];
}
function fc(e, t) {
  let r = e;
  for (let i of t) {
    if (r === null || typeof r !== "object") return;
    r = r[i];
  }
  return r;
}
function l_(e, t, r) {
  let i = [e], n = e;
  for (let o of t.slice(0, -1)) {
    let l = { ...n[o] };
    n[o] = l, n = l, i.push(n);
  }
  let a = t.at(-1);
  if (r !== void 0) {
    n[a] = r;
    return;
  }
  delete n[a];
  for (let o = i.length - 1; o > 0; o--) {
    if (Object.keys(i[o]).length > 0) break;
    delete i[o - 1][t[o - 1]];
  }
}
function d0r(e, t) {
  let r = _ce(e.restrictive);
  return e.path[0] === "maxEffortLevel" ? r.some((i) => i === t) : t === r[0];
}
function Yoe(e, t) {
  let r = fc(t, e.path);
  return e.normalize === void 0 ? r : e.normalize(r);
}
