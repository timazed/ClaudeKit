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
var chunk_z12zbtvr_exports = {};
__export(chunk_z12zbtvr_exports, {
  Aus: () => Aus,
  Cus: () => Cus,
  Ksl: () => Ksl,
  Luo: () => Luo,
  Nuo: () => Nuo,
  S7: () => S7,
  Tus: () => Tus,
  Wgr: () => Wgr,
  _Ri: () => _Ri,
  gRi: () => gRi,
  hRi: () => hRi,
  mRi: () => mRi,
  pAe: () => pAe,
  pRi: () => pRi
});
module.exports = __toCommonJS(chunk_z12zbtvr_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q2a93xh8 = require("/$bunfs/root/chunk-q2a93xh8.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_sxd14zzs = require("/$bunfs/root/chunk-sxd14zzs.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var a = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.F)(["allow", "deny", "ask"])), m = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ toolName: (0, import_chunk_adx6804h.n)(), ruleContent: (0, import_chunk_adx6804h.n)().optional() }));
var l = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.F)(["userSettings", "projectSettings", "localSettings", "session", "cliArg"])), S7 = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.zn)("type", [(0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("addRules"), rules: (0, import_chunk_adx6804h.C)(m()), behavior: a(), destination: l() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("replaceRules"), rules: (0, import_chunk_adx6804h.C)(m()), behavior: a(), destination: l() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("removeRules"), rules: (0, import_chunk_adx6804h.C)(m()), behavior: a(), destination: l() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("setMode"), mode: (0, import_chunk_xcgcdx61.VMo)(), destination: l() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("addDirectories"), directories: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), destination: l() }), (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("removeDirectories"), directories: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), destination: l() })]));
(0, import_chunk_adx6804h.B)();
function pAe(e) {
  if (e?.mcpSkill === void 0) return;
  let { command: r, mcpSkill: i } = e;
  return { tool_kind: "mcp_skill", mcp_server: { name: i.server.name, source: i.server.source }, mcp_skill: { name: r.name, version: i.version, uri: i.uri, ...r.hasUserSpecifiedDescription === true && { server_description: r.description } } };
}
function Tus(e) {
  let r = (0, import_chunk_mh32mevx.D0)(e);
  if (r === null) return null;
  return (0, import_chunk_xfj2cwfv.Pi)((0, import_chunk_q2a93xh8.rdn)(e, import_chunk_mh32mevx.C1));
}
function Wgr(e) {
  return e.serverId !== void 0;
}
function pRi(e) {
  return e ? "connector" : "MCP server";
}
function Cus(e, r) {
  {
    let i = Tus(e), s = pRi(r);
    return i === null ? `${r ? "a" : "an"} ${s} whose name cannot be shown` : `the ${s} "${i}"`;
  }
  return "";
}
function Luo(e) {
  return e ? `${import_chunk_sxd14zzs.X9e} ` : "";
}
function S(e) {
  return `Its version is ${(0, import_chunk_sxd14zzs.wyr)(e.version)} and it comes from ${Cus(e.serverName, e.isConnector)}.`;
}
function mRi(e, r) {
  return `${Luo(r.isChanged)}Load skill "${e}". It can direct Claude to run code. ${S(r)}`;
}
function Nuo({ server: e, version: r, summary: i }) {
  {
    let s = i.startsWith(`${import_chunk_sxd14zzs.X9e} `);
    return `${Luo(s)}This skill can direct Claude to run code. ${S({ serverName: e.name, version: r, isChanged: s, isConnector: Wgr(e) })}`;
  }
  return "";
}
var hRi = "A limit set on the server that serves this skill requires approval", gRi = "Claude Code could not read whether your organization limits this connector, so this skill needs approval";
function _Ri(e, r) {
  {
    let i = /\((\d+ files?)\)/.exec(e)?.[1];
    return i !== void 0 && e === `${Luo(r.isChanged)}An approval is for this version only (${(0, import_chunk_sxd14zzs.wyr)(r.version)}). This skill (${i}) comes from ${Cus(r.serverName, false)}.${r.isChanged ? ` ${import_chunk_sxd14zzs.Bdl}` : ""}`;
  }
  return false;
}
function Ksl(e, r) {
  return e === "" || e === hRi || e === "Your organization requires approval for this skill" || e === gRi || _Ri(e, r);
}
var g = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ mcp_server: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)() }).optional().catch(void 0), permission_suggestions: (0, import_chunk_adx6804h.C)(S7()).optional().catch(void 0), mcp_skill: (0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.n)(), version: (0, import_chunk_adx6804h.n)(), server_description: (0, import_chunk_adx6804h.n)().optional() }) }));
function Aus(e, { savesOffer: r = false } = {}) {
  if (e.tool_kind !== "mcp_skill" && e.mcp_skill === void 0) return;
  let i = typeof e.description === "string" && e.description.startsWith(`${import_chunk_sxd14zzs.X9e} `), s = g().safeParse(e);
  if (!s.success) return { isChanged: i };
  let { mcp_server: f, mcp_skill: t, permission_suggestions: _ } = s.data, d = (0, import_chunk_sxd14zzs.mje)(t.name, t.version);
  return { isChanged: i, name: t.name, serverName: f?.name, version: t.version, ...t.server_description !== void 0 && { description: (0, import_chunk_xfj2cwfv.Pi)(t.server_description) }, ...r && (0, import_chunk_sxd14zzs.kyr)({ suggestions: _ }) === d && { versionRule: d } };
}
