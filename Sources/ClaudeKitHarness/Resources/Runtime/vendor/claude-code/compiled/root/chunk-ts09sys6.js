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
var chunk_ts09sys6_exports = {};
__export(chunk_ts09sys6_exports, {
  Mvt: () => Mvt,
  P0: () => P0,
  Wle: () => Wle,
  XH: () => XH,
  fTr: () => fTr,
  kme: () => kme,
  pTr: () => pTr,
  sji: () => sji
});
module.exports = __toCommonJS(chunk_ts09sys6_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_1kh4zp5v = require("/$bunfs/root/chunk-1kh4zp5v.js");
function P0(e) {
  return e !== void 0 && (0, import_chunk_xcgcdx61.Ogn)(e.type) && e.scope !== "project" && e.relayed !== true && !(0, import_chunk_xcgcdx61.jl)(e);
}
function XH(e, r) {
  if (r.type === "sdk" && P0(r)) return "sdk";
  if ((0, import_chunk_xcgcdx61.jl)(r) || c(e, r.scope)) return "plugin";
  return r.scope;
}
function Mvt(e) {
  return { name: e.serverName, source: e.source ?? (e.pluginTelemetry !== void 0 || c(e.serverName, e.scope ?? "dynamic") ? "plugin" : e.serverType === "sdk" ? "sdk" : e.scope ?? "dynamic") };
}
function c(e, r) {
  return r === "dynamic" && import_chunk_1kh4zp5v.pM.ownerOfKey(e) !== void 0;
}
var fTr = "anthropic/claudeAiConnector";
function pTr({ config: e, name: r }) {
  return (e.type === "sdk" ? e.connectorId : void 0) ?? r;
}
function sji({ config: e, capabilities: r }) {
  let n = r?.experimental?.[fTr];
  return e.type === "sdk" && P0(e) && !(0, import_chunk_f9x2f6cx.Y)() && !import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && !import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND && (0, import_chunk_3t7ve0wy.Wu)() && typeof n === "object" && n !== null ? n : void 0;
}
function d(e, r) {
  return e.protocol === "https:" && e.username === "" && e.password === "" && (0, import_chunk_zhr7rpv7.md)(e.href) && e.pathname === r;
}
function kme(e, { path: r, serverId: n }) {
  try {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc") return false;
    let t = e.config, o = (0, import_chunk_qdcbcsg7.nJe)(t);
    if (o !== void 0) {
      let a = o === import_chunk_qdcbcsg7.aO && (0, import_chunk_6e68m1dj.hn)();
      if (o !== n || t.type !== "http" || (0, import_chunk_f9x2f6cx.Y)() || !a && (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND)) return false;
      let p = new URL(t.url);
      return p.search === "" && d(p, r);
    }
    if (t.type === "claudeai-proxy") {
      if (!(0, import_chunk_xcgcdx61.g3)(t)) return false;
      return d(new URL(t.url), r);
    }
    if (t.type === "sdk") return Wle(e)?.serverId === n;
    let i = import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND;
    return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && (!i || i === "anthropic_cloud") && t.type === "http" && t.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(t) && (0, import_chunk_qdcbcsg7.Moe)(t) === n;
  } catch {
    return false;
  }
}
function Wle(e) {
  try {
    let r = sji(e), n = pTr(e);
    return r?.serverId === n ? { ...r, serverId: n } : void 0;
  } catch {
    return;
  }
}
