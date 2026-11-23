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
var chunk_qz95tvns_exports = {};
__export(chunk_qz95tvns_exports, {
  d8l: () => d8l,
  hXn: () => hXn
});
module.exports = __toCommonJS(chunk_qz95tvns_exports);
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_t3er6wbx = require("/$bunfs/root/chunk-t3er6wbx.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
function hXn(n) {
  return n.replace("Run /sandbox install, or see https://code.claude.com/docs/en/sandboxing.", "See https://code.claude.com/docs/en/sandboxing.");
}
async function d8l() {
  (0, import_chunk_r3mm3x33.pr)();
  let n = (0, import_chunk_cg8dqz0a.x)(), s = import_chunk_ha393e1n.Ue.isSupportedPlatform(), g = import_chunk_ha393e1n.Ue.isPlatformInEnabledList(), a = s && g, t = a ? void 0 : !s ? n === "wsl" ? "wsl1" : "platform" : "excluded_platform", d = import_chunk_ha393e1n.Ue.isSandboxEnabledInSettings(), r = import_chunk_ha393e1n.Ue.passesCheapSandboxGates() ? await import_chunk_ha393e1n.Ue.checkDependenciesAsync() : { errors: [], warnings: [] }, l = import_chunk_ha393e1n.Ue.isSandboxingEnabled(), i = import_chunk_ha393e1n.Ue.getSandboxUnavailableReason(), c = import_chunk_ha393e1n.Ue.areSandboxSettingsLockedByPolicy(), b = c || import_chunk_ha393e1n.Ue.areUnsandboxedCommandsForbiddenByPolicy() || import_chunk_ha393e1n.Ue.isUnsandboxedFallbackClosedByTrustedTier(), w = import_chunk_ha393e1n.Ue.isAutoAllowBashIfSandboxedEnabled(), f = !d ? "disabled" : w ? "auto-allow" : "regular", o = (0, import_chunk_2yx6c1y2.zr)()?.sandbox, u = import_chunk_ha393e1n.Ue.getConfiguredNetworkAllowances(), m = import_chunk_ha393e1n.Ue.getConfiguredFilesystemGrants(), e = [], { composes: p } = (0, import_chunk_2yx6c1y2.dKt)();
  switch (p) {
    case "tier":
      e.push("helper");
      break;
    case "remoteSlot":
      break;
    case "none":
      break;
    default:
  }
  if (e.push(...(0, import_chunk_2yx6c1y2.rHr)().sources), !e.includes("hkcu") && (0, import_chunk_2yx6c1y2.nHr)().includes("hkcu")) e.push("hkcu");
  if (!e.includes("remote") && (0, import_chunk_t3er6wbx.WAt)()) e.push("remote_unknown");
  if ((0, import_chunk_2yx6c1y2.e$)()) e.push("unreadable");
  return { supported: a, ...t !== void 0 && { unsupported_reason: t }, locked: c, overrides_locked: b, policy_origins: e, enabled: l, enabled_in_settings: d, ...i !== void 0 && { unavailable_reason: hXn(i) }, mode: f, auto_allow_available: import_chunk_ha393e1n.Ue.isAutoAllowSupported(), no_sandbox_allowed: !(0, import_chunk_ha393e1n.sbe)(), unsandboxed_fallback: import_chunk_ha393e1n.Ue.areUnsandboxedCommandsAllowed(), dependencies: { errors: r.errors.map(hXn), warnings: r.warnings.map(hXn) }, excluded_commands: import_chunk_ha393e1n.Ue.getExcludedCommands(), restrictions: { fs_deny_read: o?.filesystem?.denyRead ?? [], fs_allow_read: m.allowRead, fs_allow_write: m.allowWrite, fs_deny_write: o?.filesystem?.denyWrite ?? [], network_allowed_domains: o?.network?.allowedDomains ?? [], network_denied_domains: o?.network?.deniedDomains ?? [], network_managed: (0, import_chunk_ha393e1n.obe)(), unix_sockets: n === "linux" || n === "wsl" ? [] : u.allowUnixSockets ?? [], allow_all_unix_sockets: u.allowAllUnixSockets === true, ignored_glob_patterns: l ? import_chunk_ha393e1n.Ue.getLinuxGlobPatternWarnings() : [], ignored_unix_sockets: import_chunk_ha393e1n.Ue.getLinuxIgnoredUnixSockets() } };
}
