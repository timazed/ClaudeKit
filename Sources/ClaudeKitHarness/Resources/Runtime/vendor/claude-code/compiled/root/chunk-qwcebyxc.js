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
var chunk_qwcebyxc_exports = {};
__export(chunk_qwcebyxc_exports, {
  ELi: () => ELi,
  IG: () => IG,
  S_o: () => S_o,
  Shl: () => Shl,
  TLi: () => TLi,
  _hl: () => _hl,
  bLi: () => bLi,
  b_o: () => b_o,
  bhl: () => bhl,
  g$n: () => g$n,
  ghl: () => ghl,
  hhl: () => hhl,
  iEt: () => iEt,
  kLi: () => kLi,
  n_s: () => n_s,
  sRe: () => sRe,
  vLi: () => vLi,
  wLi: () => wLi,
  whl: () => whl,
  y_o: () => y_o,
  yhl: () => yhl
});
module.exports = __toCommonJS(chunk_qwcebyxc_exports);
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
function bLi() {
  return (0, import_chunk_cg8dqz0a.x)() !== "windows";
}
function sRe(e, o, r = "command") {
  {
    let s = o === void 0 ? "claude" : `claude ${o}`;
    return bLi() ? `${r === "step" ? "run " : ""}${import_chunk_gd77dyw4.eA}=${e} ${s}` : `set the environment variable ${import_chunk_gd77dyw4.eA} to ${e}, then run ${s}`;
  }
  return "";
}
var t = (0, import_chunk_t57w17k7.de)({ settled: void 0, open: false, foresee: void 0, veto: void 0 }, (e) => {
  e.veto = void 0, e.settled = void 0, e.open = false, e.foresee = void 0;
});
function IG() {
  return t.settled ?? { state: "not_asked" };
}
function y_o(e) {
  if (t.settled !== void 0) return;
  if (t.settled = e, t.open = false, e.state === "on") (0, import_chunk_r3kja8v6.rna)(true);
}
function wLi(e) {
  if (t.settled?.state !== "on") return false;
  return t.settled = { state: "refused", why: e }, (0, import_chunk_r3kja8v6.rna)(false), true;
}
function hhl() {
  t.open = t.settled === void 0;
}
function n_s() {
  return t.open;
}
function g$n() {
  return t.settled === void 0 || t.settled.state === "on";
}
function ghl(e) {
  t.foresee = e;
}
function kLi() {
  try {
    return t.foresee === void 0 || t.settled === void 0 ? "unknown" : t.foresee();
  } catch {
    return "unknown";
  }
  return "unknown";
}
function _hl(e) {
  t.veto = e;
}
function yhl() {
  {
    let e = t.veto?.();
    return e === void 0 ? void 0 : `Nothing ran. ${import_chunk_gd77dyw4.Qb} is no longer allowed in this session: ${S_o(e)}. Start a new session to continue.`;
  }
  return;
}
function S_o(e) {
  switch (e) {
    case "bad_value":
      return `${import_chunk_gd77dyw4.eA} must be 1 to turn it on`;
    case "own_settings":
      return `it has to be turned on in ~/.claude/settings.json (in its env block) or with --settings, because managed settings or ~/.claude.json also set ${import_chunk_gd77dyw4.eA}`;
    case "admin":
      return "your organization's settings don't allow it";
    case "admin_unread":
      return "Claude Code couldn't read your organization's settings or policy (starting Claude Code again may help)";
    case "credential_changed":
      return "Claude Code checked your organization's policy with a different credential than the one it now uses (starting Claude Code again will check it with this one)";
    case "compliance":
      return "it isn't offered yet to organizations under HIPAA";
    case "otel":
      return `OpenTelemetry tracing is on (CLAUDE_CODE_ENHANCED_TELEMETRY_BETA, ENABLE_ENHANCED_TELEMETRY_BETA or ENABLE_BETA_TRACING_DETAILED, set by you or your organization), and ${import_chunk_gd77dyw4.d_} doesn't yet send it a span for each tool call`;
    case "runtime":
      return "it needs Claude Code's native build (see code.claude.com/docs/en/setup)";
    case "engine":
      return `this version of Claude Code didn't pass a check that only ${import_chunk_gd77dyw4.d_} needs (updating Claude Code may help)`;
    case "no_bash":
      return "for now it needs Git for Windows (Bash) on Windows";
    case "entrypoint":
      return "for now it only works in the terminal, with claude -p, and in Agent SDK apps, and not in cloud, remote, or prewarmed sessions";
    case "not_passed":
      return `claude -p and Agent SDK apps get it only when ${import_chunk_gd77dyw4.eA} is in the env block of --settings (the SDK's settings option)`;
    case "turned_off":
      return `${import_chunk_gd77dyw4.eA} has an off value in the environment, in ~/.claude/settings.json, or in ~/.claude.json, which overrides --settings`;
    case "headless_provider":
      return "for now claude -p and Agent SDK apps get it only on the Anthropic API, not through a cloud provider or a gateway";
    case "unprefixed_tools":
      return "CLAUDE_AGENT_SDK_MCP_NO_PREFIX is set, so the app's own tools could take the names of the functions that scripts use";
    case "unattended":
      return "for now it doesn't work in background jobs, in teammates' panes or with Remote Control";
    case "no_setup":
      return "Claude Code skipped the start-up steps that check for it (it skips them while IS_DEMO is set)";
    case "tools":
      return "this launch's tool options (--restricted, --tools, --disallowedTools or a deny rule) leave it out";
    case "credentials":
      return "for now it doesn't work with an API key helper, ANTHROPIC_AUTH_TOKEN or custom auth headers";
    case "provider":
      return "for now it only works directly with the Anthropic API (not through a cloud provider such as Bedrock, a gateway or another address in ANTHROPIC_BASE_URL)";
    case "model":
      return "for now it only works with Opus 5.5, Sonnet 5.5 and later models";
    case "gate":
      return "Anthropic has turned it off for now (updating Claude Code, or starting it again later, may help)";
    case "declined":
      return "you chose not to turn it on";
    case "unsaved":
      return "Claude Code couldn't save your answer in ~/.claude.json";
  }
  return "";
}
function b_o(e) {
  if (e === "declined") return `${import_chunk_gd77dyw4.Qb} is off for this session, as you chose. To stop being asked, remove ${import_chunk_gd77dyw4.eA} from your shell or settings.json.`;
  return `${import_chunk_gd77dyw4.Qb} isn't available: ${S_o(e)}. Starting with the ordinary tools.`;
}
function Shl() {
  return `${import_chunk_gd77dyw4.Qb} is on \xB7 this session can be resumed only with ${import_chunk_gd77dyw4.d_} on`;
}
function iEt() {
  return `This session is in ${import_chunk_gd77dyw4.Qb}, which background sessions can't use yet, so it can't be moved or copied to the background.`;
}
function ELi() {
  return `To use Remote Control, quit Claude Code and start it again with ${import_chunk_gd77dyw4.eA} set to 0.`;
}
function bhl() {
  return `Remote Control isn't available in ${import_chunk_gd77dyw4.Qb} yet, so this session isn't connected. ${ELi()}`;
}
function vLi() {
  return `Signed in. Restarting Claude Code to check ${import_chunk_gd77dyw4.Qb} for this account\u2026`;
}
function TLi(e) {
  return `Signed in. Claude Code has to restart to check ${import_chunk_gd77dyw4.Qb} for this account, and ${e}, so this session is ending instead. Your sign-in is saved. To go on with this conversation, ${sRe(1, "--resume", "step")} and choose it.`;
}
function i(e) {
  switch (e) {
    case "shell":
      return "the shell environment";
    case "userSettings":
      return "user settings";
    case "flagSettings":
      return "--settings";
  }
  return "";
}
function whl(e) {
  {
    let o = IG();
    switch (o.state) {
      case "on":
        return `${e ? "on (experimental)" : "on (experimental), but this session uses the ordinary tools"} \xB7 ${import_chunk_gd77dyw4.eA} in ${i(o.source)}`;
      case "refused":
        return `off \xB7 ${S_o(o.why)}`;
      case "not_asked":
        return;
    }
  }
  return;
}
