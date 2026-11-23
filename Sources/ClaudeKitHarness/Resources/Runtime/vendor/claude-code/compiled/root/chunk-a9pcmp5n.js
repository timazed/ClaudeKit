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
var chunk_a9pcmp5n_exports = {};
__export(chunk_a9pcmp5n_exports, {
  Jul: () => Jul,
  LMi: () => LMi,
  NMi: () => NMi,
  Qul: () => Qul,
  Xul: () => Xul,
  Yul: () => Yul,
  Zul: () => Zul,
  efl: () => efl,
  iV: () => iV,
  kBt: () => kBt,
  vbe: () => vbe
});
module.exports = __toCommonJS(chunk_a9pcmp5n_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_ddznn4yb = require("/$bunfs/root/chunk-ddznn4yb.js");
var import_chunk_0canfdjs = require("/$bunfs/root/chunk-0canfdjs.js");
var import_chunk_84n38n3t = require("/$bunfs/root/chunk-84n38n3t.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var c;
function Yul(e) {
  if (c === void 0) c = new Set(e);
}
function h() {
  if (c === void 0) c = /* @__PURE__ */ new Set();
  return c;
}
var E = Object.freeze([]), _, d = E;
function Xul(e) {
  if (!(0, import_chunk_3t7ve0wy.$ra)() || !T()) return E;
  if (e === _) return d;
  let t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  for (let r of e) if (r.mcpInfo !== void 0 && C(r.mcpInfo) && !(0, import_chunk_0canfdjs.Bin)(r)) t.add(r), o.add((0, import_chunk_px0hhsq7.Rr)(r.mcpInfo.serverName));
  for (let r of e) if (!t.has(r)) {
    let n = `${r.name}_`;
    for (let a of o) if (f(n, a)) o.delete(a);
  }
  return _ = e, d = [...o].sort(), d;
}
function C(e) {
  switch (e.scope) {
    case "user":
      return h().has(e.serverName);
    case "claudeai":
      return e.serverType === "claudeai-proxy" && e.pluginTelemetry === void 0;
    case "managed":
    case "enterprise":
    case "dynamic":
    case "project":
    case "local":
    case "agent":
    case void 0:
      return false;
  }
}
function i(e) {
  return e.toLowerCase().replaceAll(/[-_]+/g, "_").replaceAll("0", "o").replaceAll(/[1i]/g, "l");
}
function f(e, t) {
  let o = i(e), r = i(t);
  if (o.startsWith(r)) return true;
  for (let n = r.length - 2; n <= r.length + 2; n++) if (n > 0 && n <= o.length && (0, import_chunk_xcgcdx61.CK)(o.slice(0, n), r, 2) <= 2) return true;
  return false;
}
function T() {
  return (0, import_chunk_84n38n3t.Ep)().tagConnectorWrites === true;
}
function Jul(e) {
  if (e.length === 0) return "";
  return `

## Claude Tag connector writes

This is a Claude Tag session: its users work with it from Slack, and their requests often reach this agent through delegation, so the request behind an action may not be visible in this transcript. The connectors configured for this session are the MCP tools named ${e.map((o) => `\`${o}*\``).join(", ")}. Those prefixes match byte for byte: a tool whose name differs in case or punctuation (for example \`-\` for \`_\`) belongs to another server and is not covered. A call to one of those tools that creates, writes, or edits content (for example, adding rows to a sheet or inserting text into a doc) is not blocked for lack of a visible user request: for these calls, a missing or delegated request is not by itself a reason to block under the User Intent Rule, scope escalation, External System Writes, or Unrequested Commit in a Connected App. Every other rule still applies in full, including: HARD BLOCK rules; exposing credentials or secrets; moving sensitive or confidential content to a destination or audience it does not belong in; deleting, clearing, or mass-modifying content; other destructive or irreversible changes; changing who can access a file or resource (sharing and permission changes); and sending messages, emails, or notifications to people. This exception covers only the tools named above. A write through any other route (a shell command, curl, a web request, or any other MCP server) is judged by the normal rules.`;
}
var m = (0, import_chunk_px0hhsq7.Rr)(import_chunk_2mwshd9r.Cp), w = 2e3;
function O(e) {
  return import_chunk_ddznn4yb.$re.some((t) => {
    let o = e.startsWith(t) ? e.slice(t.length) : "";
    return !o.includes("__") && import_chunk_prn6030k.Hhn.some((r) => r === o);
  });
}
var y = new Set(import_chunk_2mwshd9r.eMr.map(i)), R = i(m), S = i("browser_");
function v(e) {
  return [...e.matchAll(/[\w-]+/g)].every(([t]) => {
    let o = i(t);
    if (!o.includes(S)) return true;
    let r = o.startsWith(R) ? o.slice(R.length) : o;
    return r === "" || y.has(r);
  });
}
function g() {
  if (!(0, import_chunk_2mwshd9r.tMr)()) return false;
  let { value: e, source: t } = (0, import_chunk_865at33z.gn)(import_chunk_2mwshd9r.s7i, false);
  return e === true && t === "payload" && !(0, import_chunk_865at33z.wf)();
}
function M() {
  let { value: e, source: t } = (0, import_chunk_865at33z.gn)(import_chunk_865at33z.Axl, "");
  if (t !== "payload" || (0, import_chunk_865at33z.wf)()) return;
  let o = typeof e === "string" ? e.trimEnd() : e;
  return typeof o === "string" && o.startsWith("- **") && o.length <= w && /^[\x20-\x7e]*$/.test(o) && !/[<\\]/.test(o) && !o.includes("cc_automode") && v(o) ? `
${o}` : void 0;
}
function Qul(e, t) {
  if (!(0, import_chunk_3t7ve0wy.ph)()) return;
  let o = false;
  for (let r of e) if (r.name.startsWith(m)) {
    if (r.mcpInfo?.serverName !== import_chunk_2mwshd9r.Cp || r.mcpInfo.scope !== "dynamic") return;
    o = true;
  }
  if (!o) return;
  for (let r of e) {
    if (r.name.startsWith(m)) continue;
    let n = r.name.split("__"), a = n.map((l, u) => n.slice(u).join("__"));
    if (f(`${r.name}_`, m) || !O(r.name) && n.some((l) => i(l).includes(S)) || import_chunk_2mwshd9r.eMr.some((l) => a.some((u) => f(`${u}_`, `${l}_`)))) return;
  }
  if (!(0, import_chunk_865at33z.wxs)(t ?? (0, import_chunk_f9x2f6cx.fg)()) || !(import_chunk_c203g5kd.So.CLAUDE_CODE_AUTO_MODE_REMOTE_BROWSER ?? g())) return;
  return M();
}
var p = `
- **Chrome-MCP**:`;
function Zul(e, t) {
  for (let o = e.indexOf(p); o !== -1; o = e.indexOf(p, o + 1)) {
    let r = e.indexOf(`
`, o + 1);
    if (r !== -1 && e.startsWith(t, r)) return true;
  }
  return false;
}
function efl(e, t) {
  let o = t === void 0 ? -1 : e.indexOf(p);
  if (o === -1) return e;
  let r = e.indexOf(`
`, o + 1), n = r === -1 ? e.length : r;
  return e.slice(0, n) + t + e.slice(n);
}
var b = /* @__PURE__ */ new Map([["browser_take_screenshot", /* @__PURE__ */ new Set(["type", "fullPage", "scale", "region"])], ["browser_snapshot", /* @__PURE__ */ new Set(["ref", "depth", "filter", "find", "max_chars", "offset"])], ["browser_wait_for", /* @__PURE__ */ new Set(["time", "text", "textGone"])]]);
function LMi(e, t, o, r) {
  let n = e.mcpInfo;
  if (n?.serverName !== import_chunk_2mwshd9r.Cp || n.scope !== "dynamic") return false;
  let a = b.get(n.toolName);
  if (a === void 0 || typeof t !== "object" || t === null || Array.isArray(t) || !Object.keys(t).every((l) => a.has(l))) return false;
  return o.mode === "auto" && r === "auto" && o.canAutoClassifierRun === true && o.servedCall !== true && !(0, import_chunk_xfj2cwfv.Phe)() && (0, import_chunk_3t7ve0wy.ph)() && (0, import_chunk_865at33z.wxs)((0, import_chunk_f9x2f6cx.fg)()) && g();
}
function vbe() {
  if ((0, import_chunk_f9x2f6cx.st)() && (0, import_chunk_2mwshd9r.MPe)()) return true;
  return (0, import_chunk_3t7ve0wy.ph)() && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && ((0, import_chunk_f9x2f6cx.fg)() ?? []).some(import_chunk_865at33z.sPe) && (0, import_chunk_2mwshd9r.aRt)();
}
function iV(e) {
  return (e.mcpInfo?.serverName ?? (0, import_chunk_px0hhsq7.mr)(e.name)?.serverName) === import_chunk_2mwshd9r.Cp && vbe();
}
var NMi = "Tools of MCP server 'remote-browser' (the cloud browser) can only be called by the model in this session, where each call gets auto mode's safety check or a person's approval; this call would skip both.";
function kBt(e) {
  let t = (0, import_chunk_3f4m74y6.xn)(e);
  return iV({ name: t, mcpInfo: { serverName: t } });
}
