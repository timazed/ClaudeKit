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
var chunk_y2w54s9d_exports = {};
__export(chunk_y2w54s9d_exports, {
  pluginLockRulesByUrl: () => A,
  readHybridPluginLocks: () => _
});
module.exports = __toCommonJS(chunk_y2w54s9d_exports);
var import_chunk_9pgc3hhk = require("/$bunfs/root/chunk-9pgc3hhk.js");
var import_chunk_qm5s85q5 = require("/$bunfs/root/chunk-qm5s85q5.js");
var import_chunk_8xs3r4c8 = require("/$bunfs/root/chunk-8xs3r4c8.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_kr68f0mb = require("/$bunfs/root/chunk-kr68f0mb.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var k = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_9pgc3hhk.xGi)(), 1), r = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_qm5s85q5.ACr)(), 1), h = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_8xs3r4c8._un)(), 1);
function _(s, i, d) {
  let a = { includeInternal: false }, t = (0, import_chunk_8hfdvrr1.fc)(s, ["mcp"]), n = t === void 0 ? void 0 : h.parseBootstrapConfig({ mcp: t }, void 0, void 0, a, { channel: "hybrid" }), o = n && r.materializeRaw(r.unflattenAll(n.config), a).mcp?.managedServers, c = [r.isPluginMcpToolPolicyUnreadable({ orgPluginSettings: i }) && "Organization plugin settings", r.isPluginMcpToolPolicyUnreadable({ managedMcpServers: o }) && "Managed MCP servers"].filter((e) => e !== false), f = (0, import_chunk_8hfdvrr1.fc)(t, ["managedServers"]), S = (0, import_chunk_8hfdvrr1.fc)(s, ["plugins", "settings"]), m = (c.length > 0 ? [] : [...P(f, "name", o?.map((e) => [e.name, 1 / 0])), ...P(S, "serverName", i?.map((e) => [e.serverName, e.tools.length]))]).map((e) => ({ name: e, transport: "policy-only", toolPolicy: { "*": "blocked" } })), M = c.length > 0 || !Array.isArray(f) ? [] : f.flatMap((e) => h.parseBootstrapConfig({ mcp: { managedServers: [e] } }, void 0, void 0, a, { channel: "hybrid" }).config.managedMcpServers?.length === 1 ? [] : r.ManagedMcpServers.safeParse([{ name: "unread entry", transport: "http", url: (0, import_chunk_8hfdvrr1.fc)(e, ["url"]), toolPolicy: { "*": "blocked" } }]).data ?? []), { deny: g, ask: p } = k.pluginMcpToolPermissionRules({ thirdParty: true }, { managedMcpServers: m.length > 0 ? [...m, ...o ?? []] : o, orgPluginSettings: i }, [{ plugin: void 0 }]), y = [...M, ...o ?? []].flatMap((e) => "url" in e ? [{ name: e.name, transport: e.transport, url: e.url, toolPolicy: e.toolPolicy }] : []);
  if (c.length > 0) return (0, import_chunk_cqa9hrgx.l)("hybrid_plugin_tool_locks", "unreadable"), { deny: g, ask: p, byUrl: y, couldNotRead: `this version of Claude Code couldn't read the ${c.join(" and the ")} from the admin console, so all tools of plugins' MCP servers are blocked, including plugins you added yourself. ${b}` };
  let v = [d && "Organization plugin settings", n?.keyedParseErrors.some((e) => e.key === "managedMcpServers" && !r.intakeReportKeepsValue(e)) && "Managed MCP servers"].filter((e) => typeof e === "string");
  if (v.length > 0) {
    (0, import_chunk_cqa9hrgx.l)("hybrid_plugin_tool_locks", "partly_read");
    let e = m.length + M.length > 0 && g.length + p.length > 0;
    return { deny: g, ask: p, byUrl: y, couldNotRead: `this version of Claude Code couldn't read every entry of the ${v.join(" and the ")} from the admin console, so some locks on the tools of plugins' MCP servers may not apply.${e ? " Where it could still read the name or a valid URL of such an entry, all tools of plugins' MCP servers with that name or URL are blocked." : ""} ${b}` };
  }
  if (g.length + p.length > 0) (0, import_chunk_cqa9hrgx.u)("hybrid_plugin_tool_locks");
  return { deny: g, ask: p, byUrl: y, couldNotRead: null };
}
function P(s, i, d) {
  if (!Array.isArray(s) || d === void 0) return [];
  let a = /* @__PURE__ */ new Map();
  for (let [t, n] of d) {
    let o = a.get(t);
    if (o) o.push(n);
    else a.set(t, [n]);
  }
  return s.flatMap((t) => {
    let n = (0, import_chunk_8hfdvrr1.fc)(t, [i]);
    if (typeof n !== "string") return [];
    let o = a.get(n)?.shift(), c = (0, import_chunk_8hfdvrr1.fc)(t, ["tools"]);
    return o === void 0 || Array.isArray(c) && c.length > o ? [n] : [];
  });
}
function A(s, i) {
  let d = s.flatMap((n) => r.ManagedMcpServers.safeParse([n]).data ?? []), { deny: a, ask: t } = k.pluginMcpToolPermissionRules({ thirdParty: true }, { managedMcpServers: d }, i.filter((n) => r.matchMcpServerIdentity(n, d)?.by === "url"));
  return { deny: a, ask: t };
}
var b = "An administrator can correct those settings, or a newer Claude Code may read them";
