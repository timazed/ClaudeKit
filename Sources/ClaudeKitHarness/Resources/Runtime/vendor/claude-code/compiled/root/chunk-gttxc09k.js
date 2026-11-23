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
var chunk_gttxc09k_exports = {};
__export(chunk_gttxc09k_exports, {
  FKe: () => FKe,
  Mve: () => Mve,
  Ska: () => Ska,
  _ka: () => _ka,
  bka: () => bka,
  gka: () => gka,
  hka: () => hka,
  mka: () => mka,
  oEn: () => oEn,
  rEn: () => rEn,
  rJn: () => rJn,
  sEn: () => sEn,
  yka: () => yka
});
module.exports = __toCommonJS(chunk_gttxc09k_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_zc7mq9x0 = require("/$bunfs/root/chunk-zc7mq9x0.js");
function Mve(e) {
  let n = import_chunk_gd77dyw4.AOe.filter((t) => t.selection !== void 0 && (0, import_chunk_69qhefwa.Ne)(e[t.selection]));
  if (n.length > 0) return n.every((t) => !!e[t.endpoint]);
  let s = e.ANTHROPIC_BASE_URL;
  return !!s && !(0, import_chunk_zhr7rpv7.md)(s);
}
function FKe() {
  return (0, import_chunk_865at33z.b)("tengu_bg_gateway_mark", true);
}
function c(e) {
  return (0, import_chunk_69qhefwa.Ne)(e[import_chunk_gd77dyw4.lQe]) && !Mve(e);
}
function rEn() {
  return c(process.env) && (0, import_chunk_zhr7rpv7.ve)() !== "gateway";
}
function mka(e = process.env, n = (0, import_chunk_zc7mq9x0.slt)(import_chunk_gd77dyw4.AOe.flatMap((s) => [s.endpoint, ...s.selection === void 0 ? [] : [s.selection]]))) {
  if (n === null || (0, import_chunk_69qhefwa.Ne)(e.CLAUDE_CODE_USE_GATEWAY)) return false;
  let s = import_chunk_gd77dyw4.AOe.flatMap((t) => t.selection === void 0 ? [] : [{ is: (0, import_chunk_69qhefwa.Ne)(e[t.selection]), was: (0, import_chunk_69qhefwa.Ne)(n(t.selection)), lostItsEndpoint: !e[t.endpoint] && !!n(t.endpoint) }]);
  return s.some((t) => t.is !== t.was) || (s.some((t) => t.is) ? s.some((t) => t.is && t.lostItsEndpoint) : n("ANTHROPIC_BASE_URL") !== e.ANTHROPIC_BASE_URL);
}
var rJn = "gateway_lost", oEn = "gateway_unconfirmed", sEn = "gateway_set_aside", u = "No LLM gateway", o = `${u}: session stopped.`, a = "No model request was sent.", r = "your gateway's variables", d = `${r} (e.g. ANTHROPIC_BASE_URL)`, i = "moves your other sessions to the gateway too, open ones and past turns included", hka = `${o} ${a}`, gka = "Waiting for your organization's managed settings\u2026";
function _ka(e) {
  return (0, import_chunk_t8x29mwc.Cje)(e?.[import_chunk_t8x29mwc.Sg] ?? "") === "env-oauth" && !import_chunk_gd77dyw4.AOe.some((n) => n.selection !== void 0 && (0, import_chunk_69qhefwa.Ne)(e?.[n.selection]));
}
function yka(e, n, s) {
  let t = `in ${n.settingsFile}'s env block`;
  if (e.kind === "mark_unreadable") return `${o} It may need one: ${e.dir} can't be read (${e.code}). Fix access to that folder and reopen. ${a}`;
  if (s) return `${o} Keep it out of the background: run \`claude ${s.conversation ? "--resume" : '"<your task>"'}\` in a shell with ${r} and CLAUDE_CODE_OAUTH_TOKEN, from ${s.cwd}. In the background it may send a saved claude.ai login to the gateway in place of that token.${e.kind === "settings_set_it_aside" ? " A setting (ANTHROPIC_BASE_URL, *_BASE_URL or CLAUDE_CODE_USE_*) took this session off the gateway; it may be in that folder's settings, your own, your organization's, a plugin or --settings. A terminal there reads the same settings files: remove the setting before you run that command to stay on the gateway, or keep it to go on without the gateway." : ""} ${a}`;
  if (e.kind === "settings_set_it_aside") {
    let l = n.installedService ? `remove that setting, put ${r} ${t} and reopen` : e.daemonLacksIt ? "remove that setting, run `claude daemon stop --any --keep-workers` and reopen from a gateway shell" : "remove that setting and reopen from a gateway shell";
    return `${o} A setting took it off the gateway. To stay on the gateway, ${l}.${n.installedService ? ` That ${i}.` : ""}${e.promptKept ? " Its prompt is kept on this row for that." : ""} The setting (ANTHROPIC_BASE_URL, *_BASE_URL or CLAUDE_CODE_USE_*) may be in this folder's settings, your own, your organization's, a plugin or --settings (which stays with this session: start a new one). To go without the gateway, use a shell without ${r}: there ${e.conversation ? "`claude --resume` in its folder picks up this conversation" : 'start the task anew with `claude --bg "<task>"`'}. Sessions from a gateway shell stop rather than quietly run without one. ${a}`;
  }
  if (n.installedService) return `${o} Set ${d} ${t}, then reopen. That ${i}. The installed background service doesn't see your shell's variables. ${a}`;
  switch (e.kind) {
    case "none_carried":
      return `${o} Reopen from ${e.cwd} in a shell that sets ${d}. The other way ${i}: set ${r} ${t}. ${a}`;
    case "daemon_lacks_it":
      return `${o} Run \`claude daemon stop --any --keep-workers\` and reopen from a shell that sets ${r}: the background service lacks the gateway. The other way ${i}: set ${r} ${t}. ${a}`;
    case "settings_unconfirmed":
      return `${o} Set ${r} ${t}, then reopen. That ${i}. The background service lacks the gateway, and your organization's managed settings couldn't be loaded. ${a}`;
  }
}
function Ska(e) {
  return e.startsWith(u) || e.includes(` \xB7 ${o}`);
}
function bka(e, n) {
  let s = `run \`claude respawn ${e.id}\``;
  if (e.unreadableMark) return `Not restarted: this session may need an LLM gateway: ${e.unreadableMark.dir} can't be read (${e.unreadableMark.code}). It is still running. Fix access to that folder, then ${s}.`;
  let t = `It is still running. Set ${d} in ${n.settingsFile}'s env block, then ${s}. Setting them there ${i}.`;
  return n.installedService ? `Not restarted: this session runs through an LLM gateway, and the installed background service doesn't see your shell's variables. ${t}` : `Not restarted: this session runs through an LLM gateway, and a restart from here wouldn't bring one. ${t} Without that, a restart from ${e.cwd} in a shell that sets them keeps the gateway only if the background service was started from such a shell too; otherwise it ends the session.`;
}
