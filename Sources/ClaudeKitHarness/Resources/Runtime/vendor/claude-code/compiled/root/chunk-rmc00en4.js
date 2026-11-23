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
var chunk_rmc00en4_exports = {};
__export(chunk_rmc00en4_exports, {
  $uo: () => $uo,
  Don: () => Don,
  ERi: () => ERi,
  Fuo: () => Fuo,
  Hon: () => Hon,
  Ius: () => Ius,
  Jsl: () => Jsl,
  Lon: () => Lon,
  Mus: () => Mus,
  NDe: () => NDe,
  Ous: () => Ous,
  Pus: () => Pus,
  Qsl: () => Qsl,
  Rus: () => Rus,
  SRi: () => SRi,
  Xsl: () => Xsl,
  Ysl: () => Ysl,
  Zsl: () => Zsl,
  bRi: () => bRi,
  eil: () => eil,
  j$t: () => j$t,
  jgr: () => jgr,
  kRi: () => kRi,
  oNn: () => oNn,
  qsl: () => qsl,
  rNn: () => rNn,
  sNn: () => sNn,
  til: () => til,
  vRi: () => vRi,
  wRi: () => wRi,
  xus: () => xus,
  yRi: () => yRi
});
module.exports = __toCommonJS(chunk_rmc00en4_exports);
var import_chunk_tnmn1726 = require("/$bunfs/root/chunk-tnmn1726.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_fpcs74d2 = require("/$bunfs/root/chunk-fpcs74d2.js");
var import_chunk_9xt9z453 = require("/$bunfs/root/chunk-9xt9z453.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_c4n202ca = require("/$bunfs/root/chunk-c4n202ca.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var import_crypto = require("crypto");
var A = { ArtifactComments: "Artifact", ArtifactData: "Artifact", ArtifactCheck: "Artifact" }, O = { Artifact: { comments: "ArtifactComments", reply: "ArtifactComments", resolve: "ArtifactComments", watch: "ArtifactComments", unwatch: "ArtifactComments", status: "ArtifactComments", resume_replies: "ArtifactComments", read_db: "ArtifactData", write_db: "ArtifactData", verify: "ArtifactCheck", preview: "ArtifactCheck" } };
function Rus(e) {
  return Object.hasOwn(A, e) ? A[e] : void 0;
}
function P(e, n) {
  if (!Object.hasOwn(O, e)) return;
  let o = n?.action, r = O[e];
  return typeof o === "string" && Object.hasOwn(r, o) ? r[o] : void 0;
}
function xus(e) {
  return typeof e === "object" && e !== null && "command" in e && typeof e.command === "string" && e.command !== "" ? e.command : void 0;
}
function qsl(e) {
  let n = xus(e);
  if (n === void 0) return;
  return typeof e === "object" && e !== null && "description" in e && typeof e.description === "string" ? { command: n, description: e.description } : { command: n };
}
function rNn(e, n) {
  return e === import_chunk_9xt9z453.Xo && xus(n) !== void 0 ? import_chunk_hn3cwwzt.ke : void 0;
}
function Ysl(e, n) {
  return !e || oNn((0, import_chunk_qebpc5de.Gl)(n), e, Don.has("PreToolUse"));
}
function Pus(e) {
  if (!e || e === "*") return;
  let n = g(e, Don.has("PreToolUse"));
  return n === void 0 ? void 0 : (0, import_chunk_4smdap7r.M)(n.flatMap((o) => [o, ...(0, import_chunk_qebpc5de.vEe)(o)]));
}
function g(e, n, o, r = false) {
  if (!(n ? /^[a-zA-Z0-9_|, -]+$/ : /^[a-zA-Z0-9_|]+$/).test(e)) return;
  return e.split(n ? /[|,]/ : "|").map((i) => i.trim()).filter(Boolean).flatMap((i) => r ? [i] : (0, import_chunk_qebpc5de.TEe)((0, import_chunk_qebpc5de.Gl)(i), o));
}
function Xsl(e, n) {
  if (!n || n === "*") return "fits_all";
  let o = jgr(e, n);
  return g(o, Don.has(e)) === void 0 ? { pattern: o } : "names";
}
function yRi(e, n, o) {
  return (r) => oNn(r, jgr(e.hook_event_name, n), Don.has(e.hook_event_name), o, void 0, "tool_input" in e ? e.tool_input : void 0);
}
function jgr(e, n) {
  if (e !== "PreModelSwitch" && e !== "PostModelSwitch") return n;
  let o = n.replace(/\[[12]m\](?=\s*(?:[|,]|$))/gi, "");
  return o.trim() === "" ? n : o;
}
function Hon(e) {
  switch (e.hook_event_name) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionRequest":
    case "PermissionDenied":
      return e.tool_name;
    case "UserPromptExpansion":
      return e.command_name;
    case "SessionStart":
      return e.source;
    case "Setup":
      return e.trigger;
    case "PreCompact":
    case "PostCompact":
      return e.trigger;
    case "PreModelSwitch": {
      let n = (0, import_chunk_865at33z._Ct)(e.to_model);
      return (0, import_chunk_865at33z.opn)(n) ? n : void 0;
    }
    case "PostModelSwitch": {
      let n = (0, import_chunk_865at33z._Ct)(e.to_model);
      return (0, import_chunk_865at33z.opn)(n) ? n : void 0;
    }
    case "Notification":
      return e.notification_type;
    case "SessionEnd":
      return e.reason;
    case "StopFailure":
      return e.error;
    case "SubagentStart":
      return e.agent_type;
    case "SubagentStop":
      return e.agent_type;
    case "TeammateIdle":
    case "TaskCreated":
    case "TaskCompleted":
      return;
    case "Elicitation":
      return e.mcp_server_name;
    case "ElicitationResult":
      return e.mcp_server_name;
    case "ConfigChange":
      return e.source;
    case "DirectoryAdded":
      return e.source;
    case "InstructionsLoaded":
      return e.load_reason;
    case "FileChanged":
      return (0, import_path.basename)(e.file_path);
    default:
      return;
  }
}
var Don = /* @__PURE__ */ new Set(["PreToolUse", "PostToolUse", "PostToolUseFailure", "PermissionRequest", "PermissionDenied", "UserPromptExpansion", "SessionStart", "SessionEnd", "Setup", "PreCompact", "PostCompact", "PreModelSwitch", "PostModelSwitch", "Notification", "SubagentStart", "SubagentStop", "Elicitation", "ElicitationResult", "ConfigChange", "InstructionsLoaded", "DirectoryAdded"]);
function V(e, n) {
  let o = n === void 0 ? void 0 : (0, import_chunk_4vsz8a99.tn)(n, e);
  if (o !== void 0) return o.mcpInfo === void 0 ? o.familyParentToolName : void 0;
  return Rus(e);
}
function Ous(e) {
  return e?.mcpInfo?.cliOwned === true || e?.mcpInfo?.standsInForBuiltIn === true;
}
function SRi(e, n, o) {
  let r = [], a = V(e, n);
  if (a !== void 0) r.push(a);
  let i = n === void 0 ? void 0 : (0, import_chunk_4vsz8a99.tn)(n, e);
  if (i !== void 0) {
    if (i.mcpInfo === void 0 || Ous(i)) r.push(...i.hookMatcherFamilyNames?.(o) ?? []);
  } else {
    let c = P(e, o);
    if (c !== void 0) r.push(c);
  }
  return r;
}
function oNn(e, n, o, r, a, i) {
  if (!n || n === "*") return true;
  let c = g(n, o, r), f = SRi(e, a, i);
  if (c !== void 0) return c.includes(e) || (0, import_chunk_qebpc5de.wqt)(e) && g(n, o, void 0, true)?.includes(e) === true || f.some((l) => c.includes(l));
  try {
    let l = (0, import_chunk_tnmn1726.nfo)(n);
    if (l.test(e)) return true;
    if (import_chunk_c4n202ca.HTo.test(n) && f.some((u) => l.test(u))) return true;
    if (a !== void 0 && Ous((0, import_chunk_4vsz8a99.tn)(a, e)) && (f.length > 2 ? f.some((u) => l.test(u)) : f.length > 0 && l.test(f.at(-1) ?? ""))) return true;
    for (let u of (0, import_chunk_qebpc5de.vEe)(e)) {
      if ((0, import_chunk_qebpc5de.wqt)(u) && !new RegExp(String.raw`(?:\\[bB]|\b)${u}\b`).test(n)) continue;
      if (l.test(u)) return true;
    }
    for (let u of (0, import_chunk_qebpc5de.nJ)(e, r)) if (l.test(u)) return true;
    return false;
  } catch (l) {
    if (l instanceof import_chunk_tnmn1726.ope) throw l;
    return (0, import_chunk_w578pjby.t)(`Invalid regex pattern in hook matcher: ${n}`), false;
  }
}
function bRi(e, n, o, r, a) {
  let i = r.hook_event_name;
  return n === void 0 || !e || oNn(n, jgr(i, e), Don.has(i), a, o, "tool_input" in r ? r.tool_input : void 0);
}
var d = `zzwildcard${(0, import_crypto.randomBytes)(8).toString("hex")}zz`, w = `zzpunycode${(0, import_crypto.randomBytes)(8).toString("hex")}zz`, z = /* @__PURE__ */ new Set(["http:", "https:", "ws:", "wss:", "ftp:", "file:"]);
function Fuo(e, n) {
  let o = L(e.replaceAll("*", d), n), r;
  try {
    r = new URL(o);
  } catch {
    let i = o.replace(new RegExp(`:(?:${d}${n ? `|${n}` : ""})(?=[/?#]|$)`), ":0");
    if (i === o) return null;
    try {
      r = new URL(i);
    } catch {
      return null;
    }
  }
  if (D(r, n)) return null;
  let a = (i) => S(i).replaceAll(d, "*");
  return { protocol: a(r.protocol), hostname: a(r.hostname), username: a(r.username), password: a(r.password), port: a(r.port), pathname: a(r.pathname), search: a(r.search), hash: a(r.hash) };
}
function Lon(e, n) {
  if (n === "*") return true;
  let o;
  try {
    o = new URL(e);
  } catch {
    return false;
  }
  let r = L(n.replaceAll("*", d)), a = false, i;
  try {
    i = new URL(r);
  } catch {
    let p = r.replace(new RegExp(`:${d}(?=[/?#]|$)`), ":0");
    if (p !== r) try {
      i = new URL(p), a = true;
    } catch {
    }
  }
  if (!i || D(i)) {
    let p = `${o.protocol}//${o.host}${o.pathname}${o.search}`;
    return (0, import_chunk_qebpc5de.qDr)(n, p, "/");
  }
  if (i.protocol !== `${d}:` && i.protocol !== o.protocol) return false;
  let c = o.hostname.replace(/\.$/, "").toLowerCase(), l = S(i.hostname).replace(/\.$/, "").toLowerCase().replaceAll(d, "*");
  if (!(0, import_chunk_qebpc5de.pO)(l, c)) return false;
  if (i.port === "" && i.hostname.includes(d)) a = true;
  if (!a && i.port !== o.port) return false;
  if ((i.pathname === "/" || i.pathname === "") && i.search === "" && !r.endsWith("/")) return true;
  let u = S(i.pathname + i.search).replaceAll(d, "*");
  return (0, import_chunk_qebpc5de.pO)(u, o.pathname + o.search);
}
function $uo(e, n) {
  if (Lon(e, n)) return true;
  let o = URL.parse(e);
  if (o === null) return false;
  o.search = "", o.hash = "";
  let r = Fuo(n), a = r !== null && r.search + r.hash === "" && !r.pathname.includes("*") ? r.pathname : "", i = a.slice((0, import_chunk_7cfjrnwy.pP)(a, "/").length), c = (0, import_chunk_7cfjrnwy.pP)(o.href, "/");
  return [o.href, c, `${c}${i}`].some((f) => Lon(f, n));
}
function L(e, n) {
  return e.replace(/[a-z0-9-]+/gi, (o) => /^xn--/i.test(o) && (o.includes(d) || n && o.includes(n)) ? w + o : o);
}
function S(e) {
  return e.replaceAll(w, "");
}
function D(e, n) {
  return z.has(e.protocol) && e.hostname.split(".").some((o) => o.startsWith("xn--") && (o.includes(d) || n && o.includes(n)));
}
var m = "github", E = `mcp__${m}__`;
function C(e) {
  if (typeof e !== "string") return false;
  let n = e.trim(), [o = ""] = n.split("*", 1);
  return n === `mcp__${m}` || n.startsWith(E) || o !== n && E.startsWith(o);
}
var j = ["PreToolUse", "PermissionRequest"], K = /(?:^|[^A-Za-z])[a-z]{2}|_|\[|\(\?(?:<?!|i)/, Y = 300, q = /^\^?mcp__(?!github__)[\w-]+?__[\w.*]*\$?$/;
function X(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return false;
  let { matcher: n, hooks: o } = e, r = typeof n === "string" ? n : "", a = Pus(r);
  return (a === void 0 ? r.length > Y || r.split("|").some((i) => K.test(i) && !q.test(i)) : a.some((i) => i.startsWith(E))) || Array.isArray(o) && o.some((i) => (0, import_chunk_ma3kja9f.T)(i) && C(i.if));
}
function N(e, n) {
  if (!(0, import_chunk_ma3kja9f.T)(e)) return false;
  let { serverName: o, serverUrl: r } = e;
  return o === m || typeof r === "string" && n.some((a) => $uo(a, r));
}
function Z(e) {
  return (0, import_chunk_ma3kja9f.T)(e) && typeof e.serverUrl === "string" && e.serverUrl.includes("${");
}
function J(e, n) {
  if (e === void 0) return false;
  let o = e.flatMap((r) => (0, import_chunk_ma3kja9f.T)(r) && typeof r.serverUrl === "string" ? [r.serverUrl] : []);
  return o.length > 0 ? !o.some((r) => n.some((a) => Lon(a, r))) : !e.some((r) => N(r, n));
}
function Jsl(e, n) {
  return e.some((o) => o?.permissions?.deny?.some(C) || o?.permissions?.ask?.some(C) || j.some((r) => o?.hooks?.[r]?.some(X)) || o?.deniedMcpServers?.some((r) => N(r, n) || Z(r)) || J(o?.allowedMcpServers, n) || o?.disableSideloadFlags === true);
}
var Q = "tengu_buzzing_pelican", ee = /* @__PURE__ */ new Set([import_chunk_qdcbcsg7.gK, import_chunk_qdcbcsg7.zde]), ne = "tengu_deep_dusk", te = "tengu_moored_plover", h = /* @__PURE__ */ new Set([import_chunk_qdcbcsg7.oJe, import_chunk_qdcbcsg7.Ihn, import_chunk_qdcbcsg7.Gct]), oe = [...import_chunk_qdcbcsg7.xze, import_chunk_qdcbcsg7.Pze].map(import_chunk_qdcbcsg7.WX), re = "tengu_linen_heron", se = "tengu_nifty_teapot", I = /* @__PURE__ */ new Set(["actions_get", "actions_list", "download_workflow_run_artifact", "get_check_run", "get_commit", "get_copilot_job_status", "get_file_contents", "get_job_logs", "get_label", "get_latest_release", "get_me", "get_release_by_tag", "get_tag", "get_workflow_run", "get_workflow_run_logs", "get_workflow_run_usage", "issue_read", "list_branches", "list_commits", "list_issue_types", "list_issues", "list_pull_requests", "list_releases", "list_tags", "list_workflow_jobs", "list_workflow_run_artifacts", "list_workflow_runs", "list_workflows", "pull_request_read"]), ie = "tengu_woolly_glacier", x = new Set(import_chunk_epy4sc29.rIo.filter((e) => e !== import_chunk_epy4sc29.$Ll && e !== import_chunk_epy4sc29.Kct)), k = /* @__PURE__ */ new Set([...(import_chunk_2mwshd9r.CVn.get(import_chunk_epy4sc29.a8) ?? []).flatMap((e) => [...x].map((n) => (0, import_chunk_px0hhsq7.lr)(e, n))), (0, import_chunk_px0hhsq7.lr)(import_chunk_epy4sc29.bd, import_chunk_epy4sc29.WLl)]), ae = "tengu_copper_sundial";
function NDe(e, n, o = sNn) {
  if (e.mcpInfo === void 0) return false;
  let r = (0, import_chunk_xcgcdx61.da)(e, n);
  return wRi((0, import_chunk_px0hhsq7.ca)(e), r, n) || kRi(e, n) || ERi(e, n) || vRi(e, n) || o(r, n);
}
function Ius(e, n, o) {
  return e.name === import_chunk_pmryp5f3.Fn && (0, import_chunk_fpcs74d2.z_)() && sNn((0, import_chunk_xcgcdx61.da)((0, import_chunk_xcgcdx61.jA)(e, n), o), o);
}
function wRi(e, n, o) {
  let r = ee.has(e) ? ne : e.startsWith(import_chunk_qdcbcsg7.KOo) ? te : void 0;
  return r !== void 0 && _(n, o) && (0, import_chunk_sghy0qej.Pe)(r, { safe: true });
}
function kRi(e, n) {
  let o = e.mcpInfo;
  return o !== void 0 && h.has(o.toolName) && (o.docsConnector === true || o.serverIdStamp === import_chunk_qdcbcsg7.Pze || U(o.serverName)) && v((0, import_chunk_xcgcdx61.da)(e, n), n);
}
function Qsl(e, n, o) {
  return (0, import_chunk_px0hhsq7.KDr)(e).some((r) => r.toolName !== void 0 && h.has(r.toolName) && U(r.serverName)) && v(n, o);
}
function ERi(e, n) {
  let o = e.mcpInfo;
  return o !== void 0 && o.serverName === m && o.toolName !== "" && !I.has(o.toolName) && H((0, import_chunk_xcgcdx61.da)(e, n), n);
}
function Zsl(e, n, o) {
  return (0, import_chunk_px0hhsq7.KDr)(e).some((r) => r.serverName === m && (r.toolName === void 0 || !I.has(r.toolName))) && H(n, o);
}
function vRi(e, n) {
  let o = e.mcpInfo;
  return o !== void 0 && (k.has((0, import_chunk_px0hhsq7.ca)(e)) || o.serverIdStamp === import_chunk_epy4sc29.a8 && x.has(o.toolName)) && F((0, import_chunk_xcgcdx61.da)(e, n), n);
}
function eil(e, n, o) {
  return k.has(e) && F(n, o);
}
function til(e, n) {
  let o = e.mcpInfo;
  if (o !== void 0 && (0, import_chunk_n5qd9b6p.Aoe)()?.computerToolCalled !== true && (R(o.serverName) || h.has(o.toolName) && n.some((r) => r.type === "assistant" && r.message.content.some((a) => a.type === "tool_use" && R((0, import_chunk_px0hhsq7.mr)(a.name)?.serverName))))) (0, import_chunk_n5qd9b6p.Ar)().computerToolCalled = true;
}
function sNn(e, n) {
  return _(e, n) && (0, import_chunk_865at33z.b)(Q, false);
}
function j$t(e, n) {
  return e.mcpInfo !== void 0 && Mus((0, import_chunk_px0hhsq7.ca)(e), (0, import_chunk_xcgcdx61.da)(e, n), n);
}
function Mus(e, n, o) {
  return e === import_chunk_qebpc5de.C8 && W(n, o);
}
function U(e) {
  let n = (0, import_chunk_qdcbcsg7.WX)(e);
  return oe.some((o) => n.includes(o));
}
function R(e) {
  return e === import_chunk_qdcbcsg7.$n || e === import_chunk_xcgcdx61.iF;
}
function v(e, n) {
  return _(e, n) && (0, import_chunk_sghy0qej.Pe)(re, { safe: true }) && ((0, import_chunk_2hdy50wd.Twe)() || (0, import_chunk_n5qd9b6p.Aoe)()?.computerToolCalled === true || [n.alwaysAllowRules, n.alwaysAskRules, n.strippedDangerousRules ?? {}].some((o) => Object.values(o).some((r) => r?.some((a) => R((0, import_chunk_px0hhsq7.mr)(a)?.serverName)))) || (0, import_chunk_865at33z.b)(se, false) === true);
}
function H(e, n) {
  return _(e, n) && (0, import_chunk_865at33z.b)(ie, false);
}
function F(e, n) {
  return _(e, n) && (0, import_chunk_865at33z.b)(ae, false);
}
function _(e, n) {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && W(e, n);
}
function W(e, n) {
  return (0, import_chunk_xfj2cwfv.Jr)(e, n.servedCall === true) && (0, import_chunk_vc58gmrj.zp)(n.mode) === "arbiter";
}
