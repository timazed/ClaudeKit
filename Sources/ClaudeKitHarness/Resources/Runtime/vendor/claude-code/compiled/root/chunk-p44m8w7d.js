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
var chunk_p44m8w7d_exports = {};
__export(chunk_p44m8w7d_exports, {
  $Sl: () => $Sl,
  BSl: () => BSl,
  FSl: () => FSl,
  GSl: () => GSl,
  KUi: () => KUi,
  Rle: () => Rle,
  Sbs: () => Sbs,
  USl: () => USl,
  VUi: () => VUi,
  WSl: () => WSl,
  Wjt: () => Wjt,
  ZEr: () => ZEr,
  _bs: () => _bs,
  aLe: () => aLe,
  avt: () => avt,
  cM: () => cM,
  evr: () => evr,
  gbs: () => gbs,
  iLe: () => iLe,
  jSl: () => jSl,
  j_: () => j_,
  jjt: () => jjt,
  mbo: () => mbo,
  wYe: () => wYe,
  ybs: () => ybs,
  zUi: () => zUi
});
module.exports = __toCommonJS(chunk_p44m8w7d_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_szvrpg0x = require("/$bunfs/root/chunk-szvrpg0x.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_vyzg3yfa = require("/$bunfs/root/chunk-vyzg3yfa.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var d = "force";
function mbo() {
  try {
    if ((0, import_chunk_xfj2cwfv.fk)()) return false;
    if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return false;
    let e = (0, import_chunk_2yx6c1y2.Hee)("ENABLE_TOOL_SEARCH");
    if (e === d) return true;
    if ((0, import_chunk_2yx6c1y2.kJi)() !== d) return false;
    if ((0, import_chunk_69qhefwa.Ne)((0, import_chunk_2yx6c1y2.Hee)("CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS"))) return false;
    return e === void 0 || !E(e);
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`isToolSearchForceOverride: settings read failed: ${e}`, { level: "error" }), false;
  }
}
function E(e) {
  if (e.startsWith("auto:")) {
    let o = (0, import_chunk_2gtmjt3y.Ch)(e.slice(5));
    return !isNaN(o) && o >= 100;
  }
  return (0, import_chunk_69qhefwa.Oi)(e);
}
function zUi() {
  return !(0, import_chunk_865at33z.cl)() && (0, import_chunk_vyzg3yfa.kYe)();
}
function VUi() {
  try {
    return (0, import_chunk_xfj2cwfv.fk)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS && !(0, import_chunk_f9x2f6cx.G3n)() && (0, import_chunk_2zeyvjwb.Oze)("allow_tool_search") === true && (0, import_chunk_2zeyvjwb.lIo)() && zUi() && ((0, import_chunk_r6r2wdsw.Uy)() === "hosted_worker" ? !(0, import_chunk_6e68m1dj.ny)() && (0, import_chunk_3t7ve0wy.Hge)() : (0, import_chunk_r6r2wdsw.Uy)() === "none" && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE);
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`isToolSearchAllowedUnderCompliance: ${e}`, { level: "error" }), false;
  }
}
function gbs() {
  let e = (0, import_chunk_2zeyvjwb.dIo)(), o = (0, import_chunk_xfj2cwfv.fk)() || ((0, import_chunk_f9x2f6cx.G3n)() || e && !(0, import_chunk_xcgcdx61.PMo)()) && (0, import_chunk_vyzg3yfa._bo)();
  if (o) (0, import_chunk_f9x2f6cx.Sca)();
  return o;
}
function ZEr() {
  return gbs() ? !VUi() : import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS && !mbo();
}
var T = 'ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'.replace(/"$/, ',mcp__claude-in-chrome__browser_batch"');
function p(e) {
  return e.replace('ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"', T);
}
var _ = "Add task-specific tools to the same call when the task obviously needs them: read_console_messages / read_network_requests for debugging, form_input for forms, gif_creator for recordings, javascript_tool for page scripting.", m = `# Claude in Chrome browser automation

You have access to browser automation tools (mcp__claude-in-chrome__*) for interacting with web pages in Chrome. Follow these guidelines for effective browser automation.`, S = `## Loading deferred tools

If the mcp__claude-in-chrome__* tools are deferred (must be loaded via ToolSearch before use), load every tool you expect to need in ONE ToolSearch call \u2014 the select query accepts a comma-separated list \u2014 never one call per tool. Start with the core set:

${'ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"'}

${_}`, h = `## GIF recording

When performing multi-step browser interactions that the user may want to review or share, use mcp__claude-in-chrome__gif_creator to record them.

You must ALWAYS:
* Capture extra frames before and after taking actions to ensure smooth playback
* Name the file meaningfully to help the user identify it later (e.g., "login_process.gif")

## Console log debugging

You can use mcp__claude-in-chrome__read_console_messages to read console output. Console output may be verbose. If you are looking for specific log entries, use the 'pattern' parameter with a regex-compatible pattern. This filters results efficiently and avoids overwhelming output. For example, use pattern: "[MyApp]" to filter for application-specific logs rather than reading all console output.

## Alerts and dialogs

IMPORTANT: Do not trigger JavaScript alerts, confirms, prompts, or browser modal dialogs through your actions. These browser dialogs block all further browser events and will prevent the extension from receiving any subsequent commands. Instead, when possible, use console.log for debugging and then use the mcp__claude-in-chrome__read_console_messages tool to read those log messages. If a page has dialog-triggering elements:
1. Avoid clicking buttons or links that may trigger alerts (e.g., "Delete" buttons with confirmation dialogs)
2. If you must interact with such elements, warn the user first that this may interrupt the session
3. Use mcp__claude-in-chrome__javascript_tool to check for and dismiss any existing dialogs before proceeding

If you accidentally trigger a dialog and lose responsiveness, inform the user they need to manually dismiss it in the browser.

## Avoid rabbit holes and loops

When using browser automation tools, stay focused on the specific task. If you encounter any of the following, stop and ask the user for guidance:
- Unexpected complexity or tangential browser exploration
- Browser tool calls failing or returning errors after 2-3 attempts
- No response from the browser extension
- Page elements not responding to clicks or input
- Pages not loading or timing out
- Unable to complete the browser task despite multiple approaches

Explain what you attempted, what went wrong, and ask how the user would like to proceed. Do not keep retrying the same failing browser action or explore unrelated pages without checking in first.

## Tab context and session startup

IMPORTANT: At the start of each browser automation session, call mcp__claude-in-chrome__tabs_context_mcp first to get information about the user's current browser tabs. Use this context to understand what the user might want to work with before creating new tabs.

Never reuse tab IDs from a previous/other session. Follow these guidelines:
1. Only reuse an existing tab if the user explicitly asks to work with it
2. Otherwise, create a new tab with mcp__claude-in-chrome__tabs_create_mcp
3. If a tool returns an error indicating the tab doesn't exist or is invalid, call tabs_context_mcp to get fresh tab IDs
4. When a tab is closed by the user or a navigation error occurs, call tabs_context_mcp to see what tabs are available`, y = `${m}

${S}

${h}`, O = `${m}

${h}`, FSl = `**IMPORTANT: If the Chrome browser tools are deferred (must be loaded via ToolSearch before use), load them with ToolSearch before calling them, and batch every tool you expect to need into ONE ToolSearch call (the select query accepts a comma-separated list). Do NOT load tools one at a time; each separate ToolSearch call wastes a full round-trip.**

Start a browser task whose tools are not yet loaded with a single call loading the core set:

ToolSearch with query "select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__read_page,mcp__claude-in-chrome__tabs_create_mcp,mcp__claude-in-chrome__tabs_close_mcp"

${_} Only issue a second ToolSearch if the task later needs a tool you did not anticipate.`;
function Wjt(e) {
  return e ? y : O;
}
function _bs(e, o) {
  let r = /^claude-([a-z]+)-(\d+(?:-\d+)*)$/.exec(e), n = r?.[1], l = r?.[2];
  if (!n || !l) return false;
  let a = o.find(([i]) => i === n)?.[1];
  if (!a) return false;
  let u = l.split("-").map(Number);
  for (let i = 0; i < Math.max(u.length, a.length); i++) {
    let f = (u[i] ?? 0) - (a[i] ?? 0);
    if (f !== 0) return f > 0;
  }
  return true;
}
function KUi(e) {
  if (!e.startsWith("auto:")) return null;
  let o = e.slice(5), r = (0, import_chunk_2gtmjt3y.Ch)(o);
  if (isNaN(r)) return (0, import_chunk_w578pjby.t)(`Invalid ENABLE_TOOL_SEARCH value "${e}": expected auto:N where N is a number.`), null;
  return Math.max(0, Math.min(100, r));
}
function w(e) {
  if (!e) return false;
  return e === "auto" || e.startsWith("auto:");
}
function Rle() {
  if (ZEr()) return "standard";
  if (mbo()) return "tst";
  let e = process.env.ENABLE_TOOL_SEARCH, o = e ? KUi(e) : null;
  if (o === 0) return "tst";
  if (o === 100) return "standard";
  if (w(e)) return "tst-auto";
  if ((0, import_chunk_69qhefwa.Ne)(e)) return "tst";
  if ((0, import_chunk_69qhefwa.Oi)(e)) return "standard";
  return "tst";
}
var A = ["claude-3-opus", "claude-3-sonnet", "claude-3-haiku", "claude-3-5-sonnet", "claude-3-5-haiku", "claude-3-7-sonnet"], C = [["opus", [4, 5]], ["sonnet", [4, 5]], ["haiku", [4, 5]]];
function iLe(e) {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "vertex") return false;
  let o = (0, import_chunk_zmb62hr5.ur)(e).replace(/[@-]\d{8}$/, "");
  if (/^claude-3(-|$)/.test(o)) return true;
  return /^claude-(opus|sonnet|haiku)-\d/.test(o) && !_bs(o, C);
}
function R() {
  try {
    let e = (0, import_chunk_865at33z.b)("tengu_tool_search_unsupported_models", null);
    if (Array.isArray(e)) return e;
  } catch {
  }
  return A;
}
var c = [];
function L(e) {
  if (e === null || Array.isArray(e) || typeof e !== "object") return e;
  let o = e, r = (0, import_chunk_f9x2f6cx.ju)(), n = r !== void 0 ? r : (0, import_chunk_f9x2f6cx.BB)();
  if (typeof n === "string") {
    let l = n.toLowerCase();
    for (let a of Object.keys(o)) if (a !== "*" && a.length > 0 && l.includes(a.toLowerCase())) return o[a];
  }
  return o["*"];
}
function cM() {
  let e = /* @__PURE__ */ new Set();
  try {
    let o = L((0, import_chunk_865at33z.b)("tengu_non_deferrable_builtins", null));
    if (Array.isArray(o)) {
      for (let r of o) if (typeof r === "string") e.add(r);
    }
  } catch {
  }
  try {
    let o = (0, import_chunk_865at33z.R6t)("non_deferrable_builtins");
    if (Array.isArray(o)) {
      for (let r of o) if (typeof r === "string") e.add(r);
    }
  } catch {
  }
  if (e.size === 0) return c;
  return [...e];
}
function $Sl() {
  return (0, import_chunk_865at33z.Lt)("tengu_shiny_stardust", false);
}
var g = /* @__PURE__ */ new Map(), x = 400;
function evr() {
  let e = (0, import_chunk_865at33z.Lt)("tengu_snug_nautilus", null);
  if (typeof e !== "object" || e === null || !("whenToUse" in e) || e.whenToUse !== true) return { whenToUse: false, defer: c, sentences: g };
  return { whenToUse: true, defer: "defer" in e && Array.isArray(e.defer) ? e.defer.filter((o) => typeof o === "string") : c, sentences: "sentences" in e && typeof e.sentences === "object" && e.sentences !== null ? new Map(Object.entries(e.sentences).flatMap(([o, r]) => {
    let n = (0, import_chunk_kx2fp6pc.aPt)(r);
    return n !== null && n.length <= x ? [[o, n]] : [];
  })) : g };
}
var v = "tengu_drifting_heron";
function USl() {
  return (0, import_chunk_865at33z.Lt)(v, true) !== false;
}
function BSl(e) {
  return (0, import_chunk_f9x2f6cx.st)() && e((0, import_chunk_f9x2f6cx.ju)());
}
var N = "tengu_fancy_milner";
function ybs() {
  return (0, import_chunk_865at33z.Hc)() && (0, import_chunk_865at33z.Lt)(N, true) !== false;
}
function jjt(e) {
  let o = e.toLowerCase(), r = R();
  for (let n of r) if (o.includes(n.toLowerCase())) return false;
  return true;
}
function aLe(e) {
  if (jjt(e)) return true;
  let o = (0, import_chunk_865at33z.b)("tengu_swift_pelican", null);
  return (0, import_chunk_zhr7rpv7.ve)() === "firstParty" && Array.isArray(o) && (0, import_chunk_2gtmjt3y.zge)(e, o);
}
function wYe(e) {
  let o = p(e);
  return o !== e && (0, import_chunk_865at33z.Lt)("tengu_tranquil_starlight", false) ? o : e;
}
function j_() {
  let e = Rle();
  if (e === "standard") {
    if ((0, import_chunk_szvrpg0x.Wa)().claim("tool_search_optimistic_decision")) (0, import_chunk_w578pjby.t)(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${import_chunk_c203g5kd.s.ENABLE_TOOL_SEARCH}, result=false`);
    return false;
  }
  if ((0, import_chunk_szvrpg0x.Wa)().claim("tool_search_optimistic_decision")) (0, import_chunk_w578pjby.t)(`[ToolSearch:optimistic] mode=${e}, ENABLE_TOOL_SEARCH=${import_chunk_c203g5kd.s.ENABLE_TOOL_SEARCH}, result=true`);
  return true;
}
function Sbs() {
  return (0, import_chunk_865at33z.b)("tengu_surface_failed_mcp_servers", true);
}
function avt() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_SORTED_OTTER;
  if (e !== void 0) return e;
  return (0, import_chunk_865at33z.b)("tengu_sorted_otter", false);
}
var D = "tengu_fizzy_wren";
function WSl() {
  return (0, import_chunk_865at33z.b)(D, false) === true;
}
function jSl() {
  let { value: e, source: o } = (0, import_chunk_865at33z.gn)("tengu_precious_koala", "off"), r = typeof e === "string" ? e.trim().toLowerCase() : e, n = (0, import_chunk_3t7ve0wy.ph)();
  return { inForce: r === "everywhere" || r === "hosted" && n, flagSource: o, coworkSurface: n };
}
function GSl() {
  return (0, import_chunk_865at33z.b)("tengu_modular_marble", false) === true;
}
