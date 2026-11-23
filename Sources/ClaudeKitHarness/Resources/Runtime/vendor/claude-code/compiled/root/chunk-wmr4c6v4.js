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
var chunk_wmr4c6v4_exports = {};
__export(chunk_wmr4c6v4_exports, {
  B1a: () => B1a,
  KXl: () => KXl,
  ari: () => ari,
  lri: () => lri,
  vor: () => vor
});
module.exports = __toCommonJS(chunk_wmr4c6v4_exports);
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_7625rswd = require("/$bunfs/root/chunk-7625rswd.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_4chf71g6 = require("/$bunfs/root/chunk-4chf71g6.js");
var import_chunk_z12zbtvr = require("/$bunfs/root/chunk-z12zbtvr.js");
var import_chunk_rmc00en4 = require("/$bunfs/root/chunk-rmc00en4.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_1s8tg9aq = require("/$bunfs/root/chunk-1s8tg9aq.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var L = /* @__PURE__ */ new Set(["userSettings", "policySettings"]), b = /* @__PURE__ */ new Set([...L, "session"]), A = /* @__PURE__ */ new Set(["user", "local", "enterprise", "managed"]);
function B1a(e, o) {
  let { scope: i, pluginSource: r } = e.mcpInfo ?? {}, { serverName: n, serverType: d, connectorId: p } = o;
  return { name: n, source: (0, import_chunk_ts09sys6.XH)(n, { type: d, scope: i ?? "dynamic", pluginSource: r }), scope: i, pluginSource: r, serverType: d ?? "stdio", serverId: (0, import_chunk_qyhf6bts.eh)({ type: d, scope: i, id: p }) };
}
function ari(e, o, i, r, n) {
  let { serverName: d } = o, p = (0, import_chunk_sxd14zzs.FOi)(d), u = { ...B1a(e, o), serverName: d }, m = (s) => s !== void 0 && s !== d && (0, import_chunk_sxd14zzs.FOi)(s) === p;
  return { askRule: (0, import_chunk_ht27b0vz.Ole)(i, import_chunk_pmryp5f3.Fn, "ask").find(({ ruleValue: { ruleContent: s = "" } }) => s.replace(/^\//, "") === p || n(s)) ?? (0, import_chunk_ht27b0vz.Di)(i, { name: import_chunk_pmryp5f3.Fn }) ?? (0, import_chunk_tfs0ssqe.Pon)(o, (s) => (0, import_chunk_ht27b0vz.Di)(i, s)), serverRule: o.nested || o.found === true || !A.has(e.mcpInfo?.scope ?? "dynamic") || r.commands === void 0 || r.mcpClients === void 0 || (0, import_chunk_qyhf6bts.mLe)(d, u) || (0, import_chunk_px0hhsq7.JHo)(u) && !(0, import_chunk_px0hhsq7.fxt)(u) || (0, import_chunk_px0hhsq7.y_n)(u) || (0, import_chunk_px0hhsq7.uxt)(u) || r.mcpClients.some((s) => m(s.name)) || r.commands.some((s) => m(s.mcpInfo?.serverName) || s.type === "prompt" && s.loadedFrom !== "mcp" && s.isMcp !== true && (0, import_chunk_tfs0ssqe.gus)(p, s.name)) ? void 0 : p };
}
function lri(e, o, i, r, n, { serverRule: d, askRule: p } = {}) {
  let u = (0, import_chunk_7625rswd.p1n)(o);
  if (u === "blocked") return { behavior: "deny", message: `A limit set on the server that serves the skill ${e.name} does not allow its skills.`, decisionReason: { type: "other", reason: "A limit set on the server that serves the skill does not allow its skills" } };
  let m = u === "ask" || u === "unread" ? u : void 0, s = p !== void 0 || m !== void 0, t = (0, import_chunk_sxd14zzs.mje)(e.name, i), f = (0, import_chunk_ht27b0vz.Ole)(n, import_chunk_pmryp5f3.Fn, "allow"), c = f.filter(({ source: h }) => b.has(h)), v = ({ ruleValue: h }) => h.ruleContent === t, k = c.find(v) ?? f.find(({ source: h, ruleValue: O }) => d !== void 0 && L.has(h) && O.ruleContent === d), y = n.mode === "plan", C = (0, import_chunk_rmc00en4.NDe)((0, import_chunk_tfs0ssqe.iRi)(o.serverName), n), I = k === void 0 && c.some(({ ruleValue: h }) => h.ruleContent?.startsWith(`${e.name}@sha256:`)), w = B1a(e, o), R = { serverName: o.serverName, version: i, isChanged: I, isConnector: (0, import_chunk_z12zbtvr.Wgr)(w) }, T = { command: o.description === void 0 ? e : { ...e, description: o.description, hasUserSpecifiedDescription: o.hasUserSpecifiedDescription }, mcpSkill: { server: w, version: i, uri: o.uri, summary: (0, import_chunk_z12zbtvr.mRi)(e.name, R) } };
  if (k !== void 0 && !s && !y && !C) return { behavior: "allow", updatedInput: r, decisionReason: { type: "rule", rule: k }, askMetadata: T };
  let M = (0, import_chunk_mh32mevx.D0)(o.serverName), g = y && !s ? (0, import_chunk_tfs0ssqe.l9e)(e) : void 0, P = (0, import_chunk_xcgcdx61.OM)(n.mode, n.isBypassPermissionsModeAvailable) ? void 0 : g?.message;
  return { behavior: "ask", ...p !== void 0 && { matchedAskRule: p }, wholeToolRuleDoesNotCover: true, ...C && { suppressAlwaysAllowRule: true }, ...g && { decisionReason: g.decisionReason }, ...m !== void 0 && { orgLimit: m, decisionReason: { type: "other", reason: m === "unread" ? import_chunk_z12zbtvr.gRi : import_chunk_z12zbtvr.hRi } }, standsInUnderHookAsk: true, message: P ?? `${(0, import_chunk_z12zbtvr.mRi)(e.name, { ...R, isChanged: false })} This skill needs approval before it loads. A person can approve it in an interactive Claude Code session, where the permission dialog names the skill${M === null ? "" : ` and its ${(0, import_chunk_z12zbtvr.pRi)(R.isConnector)}`}. Do not try to approve it yourself.`, ...M !== null && !s && !y && !C && { suggestions: [{ type: "addRules", rules: [{ toolName: import_chunk_pmryp5f3.Fn, ruleContent: t }], behavior: "allow", destination: import_chunk_sxd14zzs.sin }] }, updatedInput: r, metadata: T };
}
function KXl(e, o, i) {
  let r = (0, import_chunk_sxd14zzs.IAe)(i), n = (0, import_chunk_kx2fp6pc.wn)(o.name), d = o.type === "prompt" ? o.mcpSkillEntry?.() : void 0, p = (0, import_chunk_7625rswd.p1n)(d);
  if (p === "blocked") return `The skill "${e.toolUseId === void 0 ? "/" : ""}${n}" was not loaded, because a limit set on the server that serves it does not allow its skills.`;
  if (e.toolUseId !== void 0) {
    let { checked: t, pipeline: f } = e.permissionPhase ?? {}, c = f?.result;
    if (t?.note === r && (p === "ask" || p === "unread") && !(t.result.behavior === "ask" && (0, import_chunk_1s8tg9aq.zO)({}, t.result)) && !(t.result.behavior === "ask" && c?.behavior === "ask" && c.metadata?.mcpSkill?.version === r)) return `The skill "${n}" was not loaded, because its connector's limit asks for an approval now, or could not be read. Use the ${import_chunk_pmryp5f3.Fn} tool once more. If the skill is refused again, stop and tell the user.`;
    let v = c?.behavior === "allow" && c.decisionReason?.type === "rule" ? c.decisionReason.rule.ruleValue.ruleContent : void 0, k = v === void 0 || !(0, import_chunk_sxd14zzs.rit)(v) || v === (0, import_chunk_sxd14zzs.mje)(o.name, r), y = c === void 0 ? e.allowGivenBy?.toolUseId === e.toolUseId && e.allowGivenBy.approver === "hook" : c.behavior === "ask" ? c.metadata?.mcpSkill?.version === r : true;
    return t?.note === r && k && (t.result.behavior === "allow" || t.result.behavior === "ask" && y) ? void 0 : `The skill "${n}" from an MCP server was not loaded, because Claude Code could not confirm that the version that the server serves now was approved. Use the ${import_chunk_pmryp5f3.Fn} tool once more. If the skill is refused again, stop and tell the user.`;
  }
  let u = (0, import_chunk_bz1f2qnq.Z)(e), m = (0, import_chunk_ht27b0vz.Vs)(u).filter((t) => !import_chunk_ht27b0vz.Ple.includes(t.source)), s = (0, import_chunk_tfs0ssqe.Pon)({ ...i, ...d }, (t) => (0, import_chunk_ht27b0vz.Tr)(u, t, m));
  if (s !== void 0 || (0, import_chunk_ht27b0vz.Tr)(u, { name: import_chunk_pmryp5f3.Fn }, m) !== null || m.some(({ ruleValue: { toolName: t, ruleContent: f } }) => t === import_chunk_pmryp5f3.Fn && f !== void 0 && (0, import_chunk_tfs0ssqe.Dgr)(f, o.name, [o], (0, import_chunk_sxd14zzs.mje)(o.name, r)))) return `The skill "/${n}" was not loaded, because a deny rule for ${s === void 0 ? `the ${import_chunk_pmryp5f3.Fn} tool` : "its MCP server"} applies to it. For a skill from an MCP server, a deny rule also stops a line that the owner of the session types.`;
  if (e.options.modelScheduledOrigin === true || !((0, import_chunk_vhsysgcd.y9e)(e) && (0, import_chunk_vhsysgcd.EC)(e.submittedFromComposer) || (0, import_chunk_vhsysgcd.qWe)(e) || (0, import_chunk_vhsysgcd.Von)(e))) return `The skill "/${n}" comes from an MCP server, and this line did not load it. Type it at the session's own prompt, or ask Claude to use the skill. The ${import_chunk_pmryp5f3.Fn} tool then asks for approval first, unless the permission mode or, outside plan mode, a rule already allows the skill.`;
  return;
}
function vor(e, o, i, r) {
  let n = (0, import_chunk_4chf71g6.Iul)(import_chunk_pmryp5f3.Fn, o, e, r);
  if (n.denyMessage === null) return;
  return (0, import_chunk_cqa9hrgx.l)("skill_invoke", "tool_isolation_denied"), (0, import_chunk_y53wbr8a.a)("tengu_tool_use_isolation_latch_denied", { toolName: (0, import_chunk_78g0060s.S)(import_chunk_pmryp5f3.Fn), toolUseID: (0, import_chunk_49zxha55.Ce)(i), isMcp: false, isolationLatch: (0, import_chunk_78g0060s.fe)(n.activeLatch), isolationClassifiedAs: (0, import_chunk_78g0060s.fe)(n.classifiedAs) }), n.denyMessage;
}
