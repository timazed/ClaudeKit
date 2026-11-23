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
var chunk_4chf71g6_exports = {};
__export(chunk_4chf71g6_exports, {
  Hin: () => Hin,
  Iul: () => Iul,
  Oul: () => Oul,
  Pul: () => Pul,
  Qae: () => Qae,
  _kt: () => _kt,
  aho: () => aho,
  are: () => are,
  iho: () => iho,
  lho: () => lho,
  nSr: () => nSr,
  oSr: () => oSr,
  rSr: () => rSr,
  tSr: () => tSr
});
module.exports = __toCommonJS(chunk_4chf71g6_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_0vvtfqck = require("/$bunfs/root/chunk-0vvtfqck.js");
var import_chunk_cvv9kfq3 = require("/$bunfs/root/chunk-cvv9kfq3.js");
var import_chunk_hpk6rak3 = require("/$bunfs/root/chunk-hpk6rak3.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var Hin = ["cowork", "workspace", "session-info", "mcp-registry", "plugins", "scheduled-tasks", "dispatch", "ide"], R = /^claude[-_](?:for|in)[-_]chrome$/i;
var b = "places_search", T = "places_map_display_v0", v = "places_map_display_v1";
var tSr = "Your organization's web search / connector isolation policy keeps connector data and the internet apart, so web search, web fetch and browser tools are refused while files downloaded from claude.ai connectors may be within this session's reach. Meanwhile, do not reach external addresses any other way either (a shell command such as curl, a browser, or any other tool besides the connectors), and do not send connector data, or anything taken from it, to any external address.", iho = "Your organization's web search / connector isolation policy: a later check found no files downloaded from claude.ai connectors within this session's reach, so the earlier reminder about them no longer applies. Web search, web fetch and browser tools are no longer refused for that reason.";
function aho(e) {
  let n;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    if (o.type !== "attachment" || o.attachment?.type !== "critical_system_reminder") continue;
    if (o.attachment.content === "Your organization's web search / connector isolation policy: a later check found no files downloaded from claude.ai connectors within this session's reach, so the earlier reminder about them no longer applies. Web search, web fetch and browser tools are no longer refused for that reason.") break;
    if (o.attachment.content === "Your organization's web search / connector isolation policy keeps connector data and the internet apart, so web search, web fetch and browser tools are refused while files downloaded from claude.ai connectors may be within this session's reach. Meanwhile, do not reach external addresses any other way either (a shell command such as curl, a browser, or any other tool besides the connectors), and do not send connector data, or anything taken from it, to any external address.") {
      if (!o.attachment.connectorDownloadsUnchecked) return "found";
      n = "unchecked";
    }
  }
  return n;
}
var y = "enforce_web_search_mcp_isolation", H = "tengu_doorbell_agave";
function _kt(e = null, n) {
  if (e) n?.(e);
  return { current: e, onLatch: n };
}
function A() {
  let { value: e, source: n } = (0, import_chunk_865at33z.gn)(H, true);
  return e === false && (0, import_chunk_865at33z.km)(n);
}
function p() {
  return !A() && (0, import_chunk_2nv4wrez.iun)(y);
}
function V() {
  return !A() && ((0, import_chunk_2nv4wrez.iun)(y) || (0, import_chunk_2nv4wrez.hw)());
}
function are() {
  return p() || (0, import_chunk_f9x2f6cx.en)().lastingConnectorDownloads() === "held" && V();
}
function Pul(e, n) {
  if (n.length === 0) return;
  let r = [...e.exemptServers ?? Hin];
  for (let o of n) {
    let t = (0, import_chunk_3f4m74y6.xn)(o);
    if (!r.includes(t)) r.push(t);
  }
  e.exemptServers = r;
}
var Y = /* @__PURE__ */ new Set(["web_fetch", "web_search"]), M = ["product_carousel_display_v0", "featured_card_display_v0", "places_list_display_v0", "recipe_display_v0"], U = /* @__PURE__ */ new Set(["image_search", "web_search", "web_search_fast", "web_fetch", "us_election_info", ...M]), G = /* @__PURE__ */ new Set(["image_annotation", "generate_image", "conversation_search", "recent_chats", "read_conversation", "end_conversation", "welfare_tool", "enterprise_analytics", "current_time", "animate", "approximate_location", "show_plan_tip", "show_recommendation_cards", "read_research_report", import_chunk_0vvtfqck.IMi]), z = new Set(M), K = /* @__PURE__ */ new Set(["weather_fetch", b, T, v, "fetch_sports_data", "comparison_card_display_v0", "options_card_display_v0", "general_options_card_display_v0", "step_card_display_v0", "itinerary_display_v0", "link_preview_display_v0", "message_compose_v1", "quiz_display_v0", "translation_display_v0", "chart_display_v0", "offer_next_step_v0", "offer_schedule_v0", "starter_tasks_display_v0", "claude_code_install_display_v0", "approved_connectors_display_v0", "role_select_display_v0"]);
function w(e) {
  return e && import_chunk_qdcbcsg7.Ohn.peek(e)?.read?.();
}
function N(e, n, r, o, t) {
  return e?.some((a) => {
    if (a.name !== r || a.config.scope !== "dynamic" || a.config.type !== "http") return false;
    let i = (0, import_chunk_qdcbcsg7.Moe)(a.config) ?? n?.[r];
    return i === void 0 ? t : i === o;
  }) ?? false;
}
var j = [{ name: import_chunk_qdcbcsg7.Qx, isGenuine: import_chunk_2mwshd9r.Ahn, tools: /* @__PURE__ */ new Set(["memory_read", "memory_list", "memory_search", "memory_write", "memory_str_replace", "memory_append", "memory_delete"]) }, { name: import_chunk_qdcbcsg7.ri, isGenuine: import_chunk_865at33z.Ldt, tools: import_chunk_865at33z._ke }];
function m(e, n) {
  let r = N(e, n, import_chunk_qdcbcsg7.mB, import_chunk_qdcbcsg7.DVt, true);
  return { claudeAi: r, widgets: import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && N(e, n, import_chunk_qdcbcsg7.Khe, import_chunk_qdcbcsg7.jct, false), remoteBrowser: import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (e ?? []).some((o) => o.name === import_chunk_2mwshd9r.Cp) && (e ?? []).every((o) => o.name !== import_chunk_2mwshd9r.Cp || o.config.scope === "dynamic" && (0, import_chunk_865at33z.mPr)(o.config)) && (0, import_chunk_2mwshd9r.aRt)(), neitherSide: j.filter(({ name: o, isGenuine: t }) => {
    let a = (e ?? []).filter((l) => l.name === o);
    if (!(0, import_chunk_f9x2f6cx.st)() || !r || a.length === 0 || !a.every((l) => t(l.name, l.config))) return false;
    let { value: i, source: c } = (0, import_chunk_865at33z.gn)("tengu_groovy_dongarra", []);
    return Array.isArray(i) && i.includes(o) && (0, import_chunk_865at33z.km)(c);
  }) };
}
var X = /* @__PURE__ */ new Set(["Claude_Preview", "Claude_Browser"]), q = ["Claude_Browser__", "claude-in-chrome__", "Claude_in_Chrome__"], E = "web-without-latching", J = "launch_extended_search_task";
function u(e, n, r, o) {
  if (e === import_chunk_ht27b0vz.Wc || e === import_chunk_ww0784kh.Gn) return "web";
  if (e === import_chunk_pmryp5f3.vu || e === import_chunk_pmryp5f3.b1 || e === import_chunk_hpk6rak3.xU) return "connectors";
  if (e === import_chunk_ht27b0vz.A0 && n === void 0) return null;
  if (n) {
    let t = (0, import_chunk_3f4m74y6.xn)(n), a = r.includes(t), i = (0, import_chunk_px0hhsq7.mr)(e)?.toolName ?? e;
    if (R.test(t) || X.has(t) || t === import_chunk_qdcbcsg7.$n && q.some((c) => i.startsWith(c)) || t === import_chunk_xcgcdx61.iF && i.startsWith(import_chunk_xcgcdx61.qHr) && !i.includes("__")) return "web";
    if (o.remoteBrowser && t === import_chunk_2mwshd9r.Cp) return "web";
    if (o.neitherSide.some((c) => c.name === n && c.tools.has(i))) return null;
    if (o.claudeAi && t === import_chunk_qdcbcsg7.mB) {
      if (e === import_chunk_ht27b0vz.A0) return null;
      if (U.has(i)) return "web";
      if (G.has(i)) return null;
      if (i === J) return E;
    }
    if (o.widgets && t === import_chunk_qdcbcsg7.Khe) {
      if (e === import_chunk_ht27b0vz.A0) return null;
      if (z.has(i)) return "web";
      if (K.has(i)) return null;
    }
    if (a && Y.has(i)) return "web";
    if (!a) return "connectors";
  }
  return null;
}
function Q(e, n = Hin, r = (0, import_chunk_f9x2f6cx.fg)(), o) {
  return g(e, n, m(r, o));
}
function g(e, n, r) {
  return u((0, import_chunk_4vsz8a99.GP)(e) ? e.underlyingV1ToolName : e.name, (0, import_chunk_cvv9kfq3.Bul)(e), n, L(r, e.mcpInfo));
}
function L(e, n) {
  let r = n?.serverType === "http" && n.scope === "dynamic" ? n.serverName : void 0;
  return { ...e, remoteBrowser: e.remoteBrowser && r === import_chunk_2mwshd9r.Cp, neitherSide: e.neitherSide.filter((o) => o.name === r) };
}
function nSr(e, n, r = Hin, o = (0, import_chunk_f9x2f6cx.fg)(), t) {
  if (A() || !(0, import_chunk_2nv4wrez.MS)() || (0, import_chunk_2nv4wrez.v9)() && !(0, import_chunk_2nv4wrez.iun)(y)) return null;
  let a = new Map(n.map((l) => [l.name, l])), i = w(t), c = { ...m(o, i), remoteBrowser: false, neitherSide: [] };
  for (let l of e) {
    if (l.type !== "assistant") continue;
    let _ = l.message?.content;
    if (!Array.isArray(_)) continue;
    for (let d of _) {
      if (d === null || typeof d !== "object" || d.type !== "tool_use" || typeof d.name !== "string") continue;
      let f = a.get(d.name), h = d.name === import_chunk_ht27b0vz.A0 ? x(d.input) : void 0, I = d.name === import_chunk_pmryp5f3.Fn ? re(d.input) : void 0, O = I ? u(import_chunk_pmryp5f3.Fn, I, r, c) === "connectors" ? "connectors" : null : h ? h.kind === "named" ? u(import_chunk_ht27b0vz.A0, h.server, r, c) : null : f ? g(f, r, c) : u(d.name, Z(d.name, r), r, c), S = O === null && f?.isMcp !== true && (0, import_chunk_px0hhsq7.mr)(d.name) === null && ((0, import_chunk_syr33dp2.Ic)(d.input) || f !== void 0 && (0, import_chunk_cvv9kfq3.m0)(f)) ? "connectors" : O;
      if (S !== null && S !== E) return S;
    }
  }
  return null;
}
function Z(e, n) {
  let r = (0, import_chunk_px0hhsq7.KDr)(e).map((o) => o.serverName);
  return r.find((o) => !n.includes((0, import_chunk_3f4m74y6.xn)(o))) ?? r[0];
}
var D = "Web search, web fetch, and browser tools are unavailable in this session under your organization's web search / connector isolation policy, because a folder this session works in holds files downloaded from claude.ai connectors (a connector-downloads folder). Web tools are available in a session whose folders, and the top folders of their git repositories, hold no connector-downloads folder.", P = "Web search, web fetch, and browser tools are unavailable for now under your organization's web search / connector isolation policy, because Claude Code could not check whether a folder this session works in holds files downloaded from claude.ai connectors (a folder's drive did not answer in time, or the check failed). Web tools come back once a check can tell.", k = "Web search, web fetch, and browser tools are unavailable under your organization's web search / connector isolation policy, because Claude Code could not read this session's stored record, which says whether a file from a claude.ai connector may have reached it. Start a new session to use web tools.", F = "Web search, web fetch, and browser tools are unavailable in this session under your organization's web search / connector isolation policy, because this conversation holds connector data: files downloaded from claude.ai connectors were within this session's reach earlier. Start a new session to use web tools.", W = "Web search, web fetch, and browser tools are unavailable in this session under your organization's web search / connector isolation policy, because a file from a claude.ai connector may have reached this session. Start a new session to use web tools.", ee = "Web search, web fetch, and browser tools are unavailable for now: this session holds, or may hold, files downloaded from claude.ai connectors, and Claude Code has not yet learned whether your organization keeps web search and connector data apart. Try again later, or start a new session to use web tools right away.", ne = "Connectors are unavailable for now: this session has used web tools, and Claude Code has not yet learned whether your organization keeps web search and connector data apart. Try again later, or start a new session to use connectors right away.";
function Oul(e) {
  if (e === D || e === F || e === W) return "found";
  if (e === P || e === k) return "unchecked";
  return;
}
function oe(e) {
  return e === "web" ? "Connectors are unavailable in this session under your organization's web search / connector isolation policy. Start a new session to use connectors." : "Web search, web fetch, and browser tools are unavailable in this session under your organization's web search / connector isolation policy. Do not attempt to reach any external URL via another tool (curl, bash, the browser, or otherwise) \u2014 this policy blocks all outbound web access while connector data is in context. Start a new session to use web tools.";
}
var C = { denyMessage: null, classifiedAs: null, activeLatch: null };
function x(e) {
  if (e === null || typeof e !== "object" || Array.isArray(e)) return { kind: "malformed" };
  let n = "server" in e ? e.server : void 0;
  if (n === void 0 || n === "") return { kind: "all" };
  if (typeof n !== "string") return { kind: "malformed" };
  return { kind: "named", server: n };
}
function re(e) {
  if (e === null || typeof e !== "object") return;
  let n = e.skill;
  if (typeof n !== "string") return;
  let r = n.trim();
  return (0, import_chunk_pmryp5f3.Icn)(r.startsWith("/") ? r.slice(1) : r)?.server;
}
function te(e, n, r, o = Hin) {
  let t = n ?? (0, import_chunk_f9x2f6cx.fg)(), a = m(t, r), i = x(e);
  if (i.kind === "malformed") return null;
  if (i.kind === "named") {
    if (t !== void 0) {
      if ((0, import_chunk_ze4kt7fs.wje)(t, i.server).filter((_) => _.type === "connected").length === 0) return null;
    }
    return u(import_chunk_ht27b0vz.A0, i.server, o, a);
  }
  if (t === void 0) return "connectors";
  let c = false;
  for (let l of t) {
    if (l.type !== "connected") continue;
    let _ = u(import_chunk_ht27b0vz.A0, l.name, o, a);
    if (_ === "connectors") return "connectors";
    if (_ === "web") c = true;
  }
  return c ? "web" : null;
}
function rSr(e, n, r, o) {
  let t = w(n.session), a = e.name === import_chunk_ht27b0vz.A0 ? te(o, n.options?.mcpClients, t, r.exemptServers) : Q(e, r.exemptServers, n.options?.mcpClients ?? (0, import_chunk_f9x2f6cx.fg)(), t);
  return a === null && e.isMcp !== true && ((0, import_chunk_syr33dp2.Ic)(o) || (0, import_chunk_cvv9kfq3.m0)(e)) ? "connectors" : a;
}
function oSr(e, n, r, o) {
  let t = n.isolationLatch;
  if (!t || !are()) return C;
  let a = rSr(e, n, t, r);
  return B(t, a, o);
}
function Iul(e, n, r, o) {
  let t = r.isolationLatch;
  if (!t || !are()) return C;
  return B(t, u(e, n.serverName, t.exemptServers ?? Hin, L(m(r.options?.mcpClients ?? (0, import_chunk_f9x2f6cx.fg)(), w(r.session)), n)), o);
}
function B(e, n, r) {
  if (!n) return C;
  let o = n === E ? "web" : n;
  if (o === "web") {
    let a = (0, import_chunk_f9x2f6cx.en)(), i = a.connectorDownloadsInReach(), c = i === "found" ? "found" : r ?? i, l = a.lastingConnectorDownloads() === "held";
    if (c === "found" || a.connectorDataFromEarlierDownload() || l) {
      if (!e.current && n !== E) e.current = "connectors", e.onLatch?.("connectors");
      let _ = ee;
      if (p()) if (c === "found") _ = D;
      else _ = l ? W : F;
      return { denyMessage: _, classifiedAs: o, activeLatch: e.current };
    }
    if (c === "unknown" && e.current !== "connectors") return { denyMessage: a.lastingConnectorDownloads() === "unread" ? k : P, classifiedAs: o, activeLatch: e.current };
  }
  let t = e.current;
  if (t && t !== o) return { denyMessage: p() ? oe(t) : ne, classifiedAs: o, activeLatch: t };
  if (!t && n !== E) e.current = o, e.onLatch?.(o);
  return { denyMessage: null, classifiedAs: o, activeLatch: e.current };
}
function lho(e) {
  if (e !== void 0 && e.current === null && are()) e.current = "connectors", e.onLatch?.("connectors");
}
function Qae() {
  return p();
}
