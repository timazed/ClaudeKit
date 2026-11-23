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
var chunk_3t7ve0wy_exports = {};
__export(chunk_3t7ve0wy_exports, {
  $6e: () => $6e,
  $Bl: () => $Bl,
  $ra: () => $ra,
  ABl: () => ABl,
  Aft: () => Aft,
  BBl: () => BBl,
  Bra: () => Bra,
  D4n: () => D4n,
  DBl: () => DBl,
  Dm: () => Dm,
  Dw: () => Dw,
  E0o: () => E0o,
  F6e: () => F6e,
  FBl: () => FBl,
  GBl: () => GBl,
  GM: () => GM,
  Gm: () => Gm,
  Gra: () => Gra,
  H4n: () => H4n,
  HBl: () => HBl,
  Hge: () => Hge,
  I4n: () => I4n,
  IB: () => IB,
  IBl: () => IBl,
  KA: () => KA,
  Kxt: () => Kxt,
  LBl: () => LBl,
  Li: () => Li,
  Lw: () => Lw,
  M4n: () => M4n,
  MB: () => MB,
  MBl: () => MBl,
  NBl: () => NBl,
  Nw: () => Nw,
  OB: () => OB,
  OBl: () => OBl,
  OOe: () => OOe,
  Ol: () => Ol,
  PBl: () => PBl,
  RBl: () => RBl,
  Rft: () => Rft,
  S0o: () => S0o,
  SLs: () => SLs,
  Sa: () => Sa,
  T0o: () => T0o,
  U6e: () => U6e,
  UBl: () => UBl,
  Ura: () => Ura,
  Vra: () => Vra,
  Vxt: () => Vxt,
  WBl: () => WBl,
  Wra: () => Wra,
  Wu: () => Wu,
  Yg: () => Yg,
  _0o: () => _0o,
  _4t: () => _4t,
  _F: () => _F,
  _Ls: () => _Ls,
  _S: () => _S,
  ate: () => ate,
  ayn: () => ayn,
  b0o: () => b0o,
  bLr: () => bLr,
  bLs: () => bLs,
  fh: () => fh,
  g0o: () => g0o,
  g4t: () => g4t,
  gLs: () => gLs,
  h0o: () => h0o,
  h4t: () => h4t,
  ite: () => ite,
  iyn: () => iyn,
  jBl: () => jBl,
  jra: () => jra,
  k0o: () => k0o,
  kb: () => kb,
  kk: () => kk,
  kl: () => kl,
  lse: () => lse,
  lyn: () => lyn,
  m4t: () => m4t,
  nA: () => nA,
  nx: () => nx,
  oyn: () => oyn,
  p4t: () => p4t,
  ph: () => ph,
  qxt: () => qxt,
  ste: () => ste,
  syn: () => syn,
  ta: () => ta,
  v0o: () => v0o,
  vce: () => vce,
  w0o: () => w0o,
  wLr: () => wLr,
  xBl: () => xBl,
  xft: () => xft,
  y0o: () => y0o,
  y4t: () => y4t,
  yLs: () => yLs,
  zBl: () => zBl,
  zra: () => zra,
  zxt: () => zxt
});
module.exports = __toCommonJS(chunk_3t7ve0wy_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_jwbpjwas = require("/$bunfs/root/chunk-jwbpjwas.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_path = require("path");
var Aft = "CLAUDE_CODE_HOST_SKILL_CATALOG";
var gLs = { cli: true, mcp: true, "sdk-cli": true, "sdk-ts": true, "sdk-py": true, bench: true, "claude-vscode": true, "claude-code-github-action": true, "local-agent": true, local_agent: true, "claude-desktop": true, remote: true, remote_baku: true, remote_cowork: true, remote_trigger: true, remote_cowork_trigger: true, remote_desktop: true, remote_mobile: true, remote_projects: true, claude_in_slack: true, "claude-in-slack": true, "claude-in-teams": true, "claude-desktop-3p": true, "claude-security": true, "ssh-remote": true, "claude-coworker": true, "claude-coworker-terminal": true }, h0o = /* @__PURE__ */ new Set(["remote", "remote_baku", "remote_cowork", "remote_trigger", "remote_cowork_trigger", "remote_desktop", "remote_mobile", "remote_projects", "claude_in_slack", "claude-in-slack", "claude-in-teams"]), I4n = /* @__PURE__ */ new Set(["remote_trigger", "remote_cowork_trigger"]), zxt = ["remote", "remote_desktop", "remote_mobile"], oyn = "cli";
function ABl(e) {
  return /^(?!sdk)[a-z][a-z0-9_-]{0,31}$/.test(e);
}
function p4t() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_OWNER_ACCOUNT_UUID;
  return e ? { accountUuid: e, organizationUuid: import_chunk_c203g5kd.s.CLAUDE_CODE_BRIDGE_OWNER_ORG_UUID || void 0 } : void 0;
}
function _() {
  let e = p4t(), t = (0, import_chunk_mzmcvr6c.ht)(e?.accountUuid), o = (0, import_chunk_mzmcvr6c.ht)(e?.organizationUuid);
  return t && o ? { accountUuid: t, organizationUuid: o } : void 0;
}
function GM() {
  return null;
}
function l() {
  return false;
}
var _Ls = new Set(Object.keys(gLs));
function A(e) {
  return _Ls.has(e);
}
function fh() {
  return yLs(import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT);
}
function yLs(e) {
  return e && A(e) ? e : void 0;
}
function RBl() {
  return (0, import_chunk_f9x2f6cx.st)() ? yLs((0, import_chunk_f9x2f6cx.GB)()) : fh();
}
var r = /* @__PURE__ */ new Set(["claude-desktop", "claude-desktop-3p", "local-agent"]);
function Ol() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && r.has(e);
}
function syn() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e === "claude-desktop" || e === "local-agent" ? import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_APP_VERSION?.trim() || void 0 : void 0;
}
function SLs() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && (e === "claude-desktop-3p" || e === "local-agent" && import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_APP_VERSION === "");
}
function g0o() {
  return SLs() && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !(0, import_chunk_c203g5kd.kLs)();
}
var m = /* @__PURE__ */ new Set(["claude-desktop-3p", "local-agent"]);
function Vxt() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && m.has(e);
}
function m4t(e) {
  return r.has(e === "local_agent" ? "local-agent" : e);
}
function xBl(e) {
  return e !== void 0 && (r.has(e) || e === "claude-vscode" || e.startsWith("sdk-"));
}
var F6e = /* @__PURE__ */ new Set(["claude-desktop", "claude-desktop-3p"]);
function OB() {
  let e = Li();
  return e !== void 0 && F6e.has(e) && !n().childSession;
}
function Dw() {
  return OB() && !kk();
}
function PBl() {
  return false;
}
function Rft() {
  let e = Li();
  return e !== void 0 && r.has(e);
}
function OBl() {
  return Rft() || Li() === "claude-vscode";
}
function nA() {
  let e = (0, import_chunk_f9x2f6cx.st)() ? (0, import_chunk_f9x2f6cx.Ese)() : import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && I4n.has(e);
}
function IB() {
  {
    let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
    return import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && import_chunk_c203g5kd.s.CLAUDE_CODE_USE_GATEWAY && (e !== void 0 && F6e.has(e) || p());
  }
  return false;
}
function _0o() {
  return IB() && p();
}
function p() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_GATEWAY_LINEAGE && !!import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_CREDS_FILE;
}
var y0o = "claude-desktop-3p";
function Gm() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "remote_cowork";
}
function _S() {
  return (0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_f9x2f6cx.Ese)() === "remote_cowork";
}
var i = new Set(import_chunk_jwbpjwas.kLr);
function MB() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && i.has(e);
}
function _F() {
  let e = Li();
  return e !== void 0 && i.has(e);
}
function Lw() {
  let e = (0, import_chunk_f9x2f6cx.st)() ? (0, import_chunk_f9x2f6cx.Ese)() : void 0;
  return e !== void 0 && i.has(e);
}
function ph() {
  return _F() || Lw();
}
function S0o() {
  return MB() || ph() || Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_SKILL_PROPOSALS);
}
function M4n() {
  return Kxt() || Lw();
}
function Sa() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_ORIGIN === "claude_ai_chat";
}
function Hge() {
  let e = (0, import_chunk_f9x2f6cx.st)() ? (0, import_chunk_f9x2f6cx.Fla)() : Li();
  return zxt.some((t) => t === e) && !Sa() && !import_chunk_c203g5kd.s.CCR_SESSION_PROFILE;
}
function IBl() {
  return ((0, import_chunk_f9x2f6cx.st)() ? (0, import_chunk_f9x2f6cx.GB)() : Li()) === "remote_trigger" && !Sa() && !import_chunk_c203g5kd.s.CCR_SESSION_PROFILE;
}
function Dm() {
  return Sa() && ph();
}
function kl() {
  return Sa() && (Lw() || OOe());
}
function b0o() {
  return !Sa() && S("remote_cowork");
}
function w0o() {
  return S("remote_projects");
}
function S(e) {
  return (0, import_chunk_f9x2f6cx.st)() ? (0, import_chunk_f9x2f6cx.Ese)() === e : Li() === e && ite();
}
function lse() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && O.has(e);
}
var O = /* @__PURE__ */ new Set(["claude_in_slack", "claude-in-slack"]);
function $ra() {
  let e = Li();
  return e !== void 0 && O.has(e);
}
function h4t() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "claude-in-teams";
}
function $6e() {
  return lse() || h4t();
}
function MBl() {
  return $ra() || Li() === "claude-in-teams";
}
function xft() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e !== void 0 && h0o.has(e);
}
function g4t() {
  return H4n(import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT);
}
function H4n(e) {
  return e?.startsWith("remote") === true;
}
var L = /* @__PURE__ */ new Set(["remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);
function HBl() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) && e !== void 0 && L.has(e);
}
var k = /* @__PURE__ */ new Set(["claude_in_slack", "claude-in-slack", "claude-in-teams", "remote_trigger", "remote_cowork_trigger", "remote_cowork", "remote_baku"]);
function iyn() {
  if ((0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_HIDE_SETTINGS_HINT)) return false;
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e === void 0 || !k.has(e);
}
function ste() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT;
  return e === "sdk-ts" || e === "sdk-py" || e === "sdk-cli";
}
class D {
  entrypoint = void 0;
  interactive = false;
  spawnedByAttendedSession = void 0;
  childSession = false;
  hasRemoteSessionOrContainerId = false;
  claudecode = false;
  hostManagedRunnerChild = false;
  coworkFrameArtifacts = false;
  hostScheduledRun = false;
  desktopSkillSwitches = false;
  desktopConnectorNames = false;
  desktopWorkflowLimitWait = false;
  desktopModeFromRecord = false;
  desktopMessageCard = false;
  hostReadsNoBashEditDiff = false;
  desktopResultFirst = false;
  desktopPluginInstallFrames = false;
  hostUnattendedGrant = void 0;
  sdkMcpToolIdleTimeoutMs = void 0;
  desktopAppHostMark = false;
  chromeTabGroupKey = void 0;
  hostAssignedGroup = void 0;
  hostGuest = void 0;
  hostTestVm = void 0;
  hostSkillCatalog = void 0;
  shownPluginsDir = void 0;
  desktopSkillsPluginDir = void 0;
  remoteControlOwnerDeclared = false;
  remoteRelayMark = void 0;
  offPersonsMachine = false;
  setEntrypoint(e) {
    this.entrypoint = e;
  }
  setInteractive(e) {
    this.interactive = e;
  }
  setSpawnedByAttendedSession(e) {
    this.spawnedByAttendedSession = e;
  }
  setChildSession(e) {
    this.childSession = e;
  }
  setHasRemoteSessionOrContainerId(e) {
    this.hasRemoteSessionOrContainerId = e;
  }
  setClaudecode(e) {
    this.claudecode = e;
  }
  setHostManagedRunnerChild(e) {
    this.hostManagedRunnerChild = e;
  }
  setDesktopAppHostMark(e) {
    this.desktopAppHostMark = e;
  }
  setCoworkFrameArtifacts(e) {
    this.coworkFrameArtifacts = e;
  }
  setHostScheduledRun(e) {
    this.hostScheduledRun = e;
  }
  setDesktopSkillSwitches(e) {
    this.desktopSkillSwitches = e;
  }
  setDesktopConnectorNames(e) {
    this.desktopConnectorNames = e;
  }
  setDesktopWorkflowLimitWait(e) {
    this.desktopWorkflowLimitWait = e;
  }
  setHostReadsNoBashEditDiff(e) {
    this.hostReadsNoBashEditDiff = e;
  }
  setDesktopModeFromRecord(e) {
    this.desktopModeFromRecord = e;
  }
  setDesktopMessageCard(e) {
    this.desktopMessageCard = e;
  }
  setDesktopResultFirst(e) {
    this.desktopResultFirst = e;
  }
  setDesktopPluginInstallFrames(e) {
    this.desktopPluginInstallFrames = e;
  }
  setHostUnattendedGrant(e) {
    this.hostUnattendedGrant = e;
  }
  setSdkMcpToolIdleTimeoutMs(e) {
    this.sdkMcpToolIdleTimeoutMs = e;
  }
  setChromeTabGroupKey(e) {
    this.chromeTabGroupKey = e;
  }
  setHostSkillCatalog(e) {
    this.hostSkillCatalog = e;
  }
  setShownPluginsDir(e) {
    this.shownPluginsDir = e;
  }
  setDesktopSkillsPluginDir(e) {
    this.desktopSkillsPluginDir = e;
  }
  setRemoteControlOwnerDeclared(e) {
    this.remoteControlOwnerDeclared = e;
  }
  setRemoteRelayMark(e) {
    this.remoteRelayMark = this.remoteRelayMark === true || e;
  }
  setOffPersonsMachine(e) {
    this.offPersonsMachine ||= e;
  }
  setHostGuest(e) {
    this.hostGuest = e;
  }
  setHostTestVm(e) {
    this.hostTestVm = e;
  }
  setHostAssignedGroup(e) {
    this.hostAssignedGroup = e;
  }
}
var h = new import_chunk_2904xtvq.j(() => new D());
function n() {
  return h.of((0, import_chunk_f9x2f6cx.N)().host);
}
function Li() {
  return n().entrypoint;
}
var C = /* @__PURE__ */ new Set(["claude-vscode", "claude-desktop", "claude-desktop-3p", "local-agent", "local_agent", "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_cowork", "ssh-remote", "claude-in-slack", "claude_in_slack", "claude-in-teams", "claude-coworker", "claude-coworker-terminal"]), Ura = new Set([...C].filter(H4n)), ayn = new Set([...Ura].filter((e) => e !== "remote_cowork" && e !== "remote_mobile"));
function Bra() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND;
  return e === "bg" || e === "daemon" || e === "daemon-worker" || (0, import_chunk_f9x2f6cx.np)() !== void 0;
}
function KA() {
  if (Bra()) return false;
  let e = n();
  if (e.interactive) return true;
  return !e.childSession && e.entrypoint !== void 0 && C.has(e.entrypoint);
}
function DBl() {
  return n().spawnedByAttendedSession === true;
}
function Yg() {
  return n().childSession;
}
function Wu() {
  return Rft() && !n().childSession;
}
function Kxt() {
  let e = n();
  return ate() || e.entrypoint !== void 0 && i.has(e.entrypoint) && !e.childSession;
}
function OOe() {
  return _F() && ite();
}
var g = /* @__PURE__ */ new Set([...import_chunk_jwbpjwas.kLr, "remote", "remote_desktop", "remote_mobile", "remote_projects", "remote_trigger"]);
function _4t() {
  return n().hasRemoteSessionOrContainerId;
}
function ite() {
  let e = n();
  return e.entrypoint !== void 0 && g.has(e.entrypoint) && e.hasRemoteSessionOrContainerId && !e.childSession && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function ate() {
  let e = n();
  return (e.entrypoint === "local-agent" || e.entrypoint === "local_agent") && !e.childSession;
}
var I = /* @__PURE__ */ new Set(["remote", "remote_projects", "remote_desktop", "remote_mobile", "ssh-remote"]);
function lyn() {
  let e = n();
  return e.entrypoint !== void 0 && I.has(e.entrypoint) && !e.childSession && !e.claudecode;
}
function k0o() {
  let e = n();
  return e.remoteRelayMark !== false || e.entrypoint === "ssh-remote" || import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "ssh-remote" || (0, import_chunk_c203g5kd.kLs)();
}
function Nw() {
  return n().offPersonsMachine || import_chunk_c203g5kd.s.CLAUDE_CODE_OFF_PERSONS_MACHINE || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (import_chunk_c203g5kd.s.CLAUDE_SSH_DAEMON_CHILD !== void 0 || import_chunk_c203g5kd.s.CLAUDE_SSH_RUN_DIR !== void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "ssh-remote") && !import_chunk_c203g5kd.s.isWslEnvironment();
}
function y4t() {
  let e = n();
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && !import_chunk_c203g5kd.s.CLAUDE_CODE_OFF_PERSONS_MACHINE && e.remoteRelayMark !== true && e.entrypoint !== "ssh-remote";
}
var U = /* @__PURE__ */ new Set(["remote", "remote_desktop", "remote_mobile"]);
function U6e() {
  let e = n();
  return e.entrypoint !== void 0 && U.has(e.entrypoint) && !e.interactive && !e.childSession && !e.claudecode;
}
function E0o() {
  let { entrypoint: e, interactive: t } = n();
  return e !== void 0 && !t && (h0o.has(e) || e.startsWith("remote"));
}
function vce() {
  return ta() || Dw();
}
function ta() {
  let e = n();
  return e.entrypoint === "claude-vscode" && !e.childSession && !e.claudecode;
}
function LBl() {
  return f(n().entrypoint) && T();
}
function f(e) {
  return e === "sdk-ts" || e === "sdk-py" || e === "sdk-cli";
}
function T() {
  let e = n();
  return !e.childSession && !e.claudecode && !k0o();
}
function NBl() {
  let { entrypoint: e } = n();
  return e !== void 0 && (f(e) || !_Ls.has(e)) && T();
}
function v0o() {
  let e = n();
  return kb() && process.env.CLAUDE_AGENT_SDK_VERSION !== void 0 && e.entrypoint !== "sdk-cli" && !e.childSession && !e.claudecode && !k0o();
}
function kb(e = (0, import_chunk_f9x2f6cx.Se)()) {
  let t = Wu() && !n().claudecode;
  return e && !t && !ta();
}
function kk() {
  return n().claudecode;
}
function Wra() {
  return n().coworkFrameArtifacts;
}
function bLr() {
  return n().desktopAppHostMark;
}
function nx() {
  return n().hostScheduledRun;
}
function FBl() {
  return n().desktopSkillSwitches;
}
function wLr() {
  return n().desktopWorkflowLimitWait;
}
function jra() {
  return n().desktopModeFromRecord;
}
function $Bl() {
  return n().desktopMessageCard;
}
function bLs() {
  return n().hostReadsNoBashEditDiff;
}
function UBl() {
  return n().desktopResultFirst;
}
function BBl() {
  return n().desktopPluginInstallFrames;
}
function WBl() {
  return n().desktopConnectorNames;
}
function jBl() {
  return n().hostUnattendedGrant;
}
function GBl() {
  return n().sdkMcpToolIdleTimeoutMs;
}
function Gra() {
  return n().chromeTabGroupKey;
}
function D4n() {
  return n().hostSkillCatalog;
}
function qxt() {
  return n().shownPluginsDir;
}
function zra() {
  return n().desktopSkillsPluginDir;
}
function zBl(e) {
  y(e);
  let t = n();
  t.setInteractive(!e), t.setSpawnedByAttendedSession(import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_ATTENDED), t.setEntrypoint(import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT), t.setRemoteRelayMark((0, import_chunk_c203g5kd.kLs)()), t.setOffPersonsMachine(Nw() || GM() !== null && !l()), t.setChildSession(Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION)), t.setHasRemoteSessionOrContainerId(Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID || import_chunk_c203g5kd.s.CLAUDE_CODE_CONTAINER_ID)), t.setClaudecode(Boolean(import_chunk_c203g5kd.s.CLAUDECODE)), t.setHostManagedRunnerChild(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted" && import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST && import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL !== void 0), t.setCoworkFrameArtifacts(import_chunk_c203g5kd.s.CLAUDE_CODE_COWORK_FRAME_ARTIFACTS), t.setHostScheduledRun(import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_SCHEDULED_RUN), t.setDesktopSkillSwitches(import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_SKILL_SWITCHES), t.setHostUnattendedGrant(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_REMOTE_TOOLS_HOST_ALLOWS_UNATTENDED"), t.setSdkMcpToolIdleTimeoutMs(import_chunk_c203g5kd.s.CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_SDK_MCP_TOOL_IDLE_TIMEOUT"), t.setDesktopAppHostMark(OOe() && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST === "1"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_REMOTE_TOOLS_DESKTOP_APP_HOST"), t.setChromeTabGroupKey(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID ? import_chunk_c203g5kd.s.CLAUDE_CHROME_TAB_GROUP_KEY : void 0);
  let o = OOe() && Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID);
  if (t.setHostSkillCatalog(o ? import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_SKILL_CATALOG : void 0), import_chunk_c203g5kd.s.unset("CLAUDE_CHROME_TAB_GROUP_KEY"), o) import_chunk_c203g5kd.s.unset(Aft);
  let a = import_chunk_c203g5kd.s.CLAUDE_CODE_SHOWN_PLUGINS_DIR;
  t.setShownPluginsDir(ite() && a !== void 0 && (0, import_path.isAbsolute)(a) ? a : void 0), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_SHOWN_PLUGINS_DIR");
  let d = Wu();
  t.setDesktopSkillsPluginDir(d ? import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR : void 0), t.setDesktopWorkflowLimitWait(Dw() && import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_WORKFLOW_LIMIT_WAIT), t.setDesktopModeFromRecord(Dw() && import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_MODE_FROM_RECORD);
  let u = Dw() && !(import_chunk_c203g5kd.s.CLAUDE_BRIDGE_REATTACH_SESSION && _() !== void 0);
  if (t.setDesktopMessageCard(u && import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_MESSAGE_CARD), t.setDesktopResultFirst(u && import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_RESULT_FIRST), t.setHostReadsNoBashEditDiff((u || ta()) && import_chunk_c203g5kd.s.CLAUDE_CODE_HOST_READS_NO_BASH_EDIT_DIFF), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_HOST_READS_NO_BASH_EDIT_DIFF"), t.setDesktopPluginInstallFrames(d && import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_PLUGIN_INSTALL_FRAMES), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_DESKTOP_PLUGIN_INSTALL_FRAMES"), d) import_chunk_c203g5kd.s.unset("CLAUDE_CODE_DESKTOP_SKILLS_PLUGIN_DIR"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_DESKTOP_WORKFLOW_LIMIT_WAIT"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_DESKTOP_MODE_FROM_RECORD"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_DESKTOP_MESSAGE_CARD"), import_chunk_c203g5kd.s.unset("CLAUDE_CODE_DESKTOP_RESULT_FIRST");
  let E = Rft();
  if (t.setDesktopConnectorNames(E && import_chunk_c203g5kd.s.CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES), E) import_chunk_c203g5kd.s.unset("CLAUDE_CODE_DESKTOP_CONNECTOR_NAMES");
}
function y(e) {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT) {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "local_agent") import_chunk_c203g5kd.s.set("CLAUDE_CODE_ENTRYPOINT", "local-agent");
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "cli" && e) import_chunk_c203g5kd.s.set("CLAUDE_CODE_ENTRYPOINT", "sdk-cli");
    return;
  }
  let t = process.argv.slice(2), o = t.indexOf("mcp");
  if (o !== -1 && t[o + 1] === "serve") {
    import_chunk_c203g5kd.s.set("CLAUDE_CODE_ENTRYPOINT", "mcp");
    return;
  }
  if ((0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_ACTION)) {
    import_chunk_c203g5kd.s.set("CLAUDE_CODE_ENTRYPOINT", "claude-code-github-action");
    return;
  }
  import_chunk_c203g5kd.s.set("CLAUDE_CODE_ENTRYPOINT", e ? "sdk-cli" : "cli");
}
function Vra(e) {
  let t = e.indexOf("--");
  return t === -1 ? e : e.slice(0, t);
}
function T0o(e) {
  let t = Vra(e);
  if (t.includes("-r") || t.includes("--resume") || t.includes("--from-pr") || t.some((o) => o.startsWith("--resume=") || o.startsWith("--from-pr="))) return "resume";
  if (t.includes("-c") || t.includes("--continue")) return "continue";
  return "fresh";
}
