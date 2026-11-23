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
var chunk_qyhf6bts_exports = {};
__export(chunk_qyhf6bts_exports, {
  Bwl: () => Bwl,
  Fle: () => Fle,
  KBn: () => KBn,
  Lvr: () => Lvr,
  Nvr: () => Nvr,
  TV: () => TV,
  Wwl: () => Wwl,
  _2t: () => _2t,
  eh: () => eh,
  fWi: () => fWi,
  fcn: () => fcn,
  g2t: () => g2t,
  jwl: () => jwl,
  kvt: () => kvt,
  mLe: () => mLe,
  pWi: () => pWi,
  qBn: () => qBn,
  w4: () => w4
});
module.exports = __toCommonJS(chunk_qyhf6bts_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_1kh4zp5v = require("/$bunfs/root/chunk-1kh4zp5v.js");
var import_chunk_ts09sys6 = require("/$bunfs/root/chunk-ts09sys6.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
function TV(e) {
  return typeof e === "string" && e.startsWith("mcprs") ? `mcpsrv${e.slice(5)}` : e;
}
function eh(e) {
  return e.type === "claudeai-proxy" && e.scope === "claudeai" && e.id ? TV(e.id) : void 0;
}
function g2t(e) {
  return e?.type === "claudeai-proxy" || e?.type === "sdk";
}
var c = { pluginMintedName(e) {
  return import_chunk_1kh4zp5v.pM.minted(e);
}, grantsEnforced() {
  return (0, import_chunk_px0hhsq7.rft)();
}, legacyGrantHeld(e) {
  return (0, import_chunk_px0hhsq7.fxt)(e);
}, legacyGrantHeldByAnother(e) {
  return (0, import_chunk_px0hhsq7.y_n)(e);
}, nameSpellsAnotherServersKey(e) {
  return (0, import_chunk_px0hhsq7.uxt)(e);
} };
function mLe(e, r, n = c) {
  return (0, import_chunk_3f4m74y6.xn)(e).startsWith(import_chunk_3f4m74y6.A8) && r.scope !== "claudeai" && !Lvr(e, r, n);
}
function Fle(e, r = c) {
  return e.mcpInfo !== void 0 && e.mcpInfo.isAuthStub !== true && (e.mcpInfo.toolNameShared === true || r.grantsEnforced() && (e.mcpInfo.legacyGrantRefused === true && !r.legacyGrantHeld(e.mcpInfo) || r.legacyGrantHeldByAnother(e.mcpInfo) || r.nameSpellsAnotherServersKey(e.mcpInfo)) && (e.mcpInfo.source === "plugin" || !Lvr(e.mcpInfo.serverName, e.mcpInfo, r)) || mLe(e.mcpInfo.serverName, e.mcpInfo, r));
}
function Bwl(e) {
  if (e.mcpInfo !== void 0 && mLe(e.mcpInfo.serverName, e.mcpInfo)) return import_chunk_pbteexar.Rta;
  return e.mcpInfo?.toolNameShared === true ? import_chunk_pbteexar.xta : import_chunk_pbteexar.Pta;
}
function Lvr(e, r, n = c) {
  return r.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(r) && !n.pluginMintedName(e);
}
var f = "tengu_marlin_thicket", fWi = "bot_protected_tengu_dapper_blum", g = "ide", _ = new import_chunk_pzzqg6s3.ze(() => ({ read: false }));
function m(e, r) {
  return e && Object.hasOwn(e, r) ? e[r] : void 0;
}
async function S(e, r, n = false) {
  let a;
  if (!await (0, import_chunk_865at33z.ww)((o) => (a = n ? r : m(o.mcpLegacyKeyOwners, e) ?? r, { ...o, mcpLegacyKeyOwners: { ...o.mcpLegacyKeyOwners, [e]: a } }))) {
    (0, import_chunk_cqa9hrgx.l)("mcp_standard_key", "owner_not_saved");
    return;
  }
  return a;
}
function w4() {
  let e = _.of((0, import_chunk_f9x2f6cx.N)());
  if (!e.read) {
    if (e.read = true, (0, import_chunk_865at33z.b)(f, false)) (0, import_chunk_px0hhsq7.C$l)({ enforcesGrants: (0, import_chunk_865at33z.b)(fWi, false) === true, read: (r) => (0, import_chunk_f9x2f6cx.Y)() ? void 0 : m((0, import_chunk_865at33z.ge)().mcpLegacyKeyOwners, r), claim: (0, import_chunk_f9x2f6cx.Y)() ? async (r, n) => n : S });
  }
  return (0, import_chunk_px0hhsq7.mL)();
}
function KBn(e) {
  try {
    return (0, import_chunk_2mwshd9r.Yu)(e) || new URL(e).host === new URL((0, import_chunk_ephf358x.cn)().MCP_PROXY_URL).host;
  } catch {
    return true;
  }
}
function u(e) {
  let r = KBn(e) ? void 0 : (0, import_chunk_px0hhsq7.jDs)(e);
  return r === void 0 ? void 0 : { key: r, pinned: false };
}
function h(e) {
  if (e.type !== "http" && e.type !== "sse" && e.type !== "claudeai-proxy" || !URL.canParse(e.url) || KBn(e.url)) return;
  let r = (0, import_chunk_px0hhsq7.jDs)(new URL(e.url).origin);
  return r === (0, import_chunk_px0hhsq7.jDs)(e.url) ? void 0 : r;
}
var s = 128;
function qBn(e) {
  if (e.type === "sdk" && (0, import_chunk_ts09sys6.P0)(e)) {
    let r = e.connectorId;
    if (r !== void 0) {
      let n = (0, import_chunk_3f4m74y6.xn)(r);
      if (n.length <= s && !n.includes("__")) return n;
      (0, import_chunk_w578pjby.t)(`MCP server "${e.name}": deny and ask rules written with its connectorId will not apply to it, because the id is longer than ${s} characters or holds "__" once characters other than letters, digits and "-" are read as "_"`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("mcp_connector_other_key", n.length > s ? "id_too_long" : "id_holds_separator");
      return;
    }
  }
  return w4() ? h(e) : void 0;
}
function O(e) {
  try {
    let r = e.capabilities?.experimental?.[import_chunk_ts09sys6.fTr];
    return e.config.type === "sdk" && (0, import_chunk_ts09sys6.P0)(e.config) && !(0, import_chunk_f9x2f6cx.Y)() && (0, import_chunk_3t7ve0wy.Rft)() && typeof r === "object" && r !== null && "serverId" in r && r.serverId === e.name && (0, import_chunk_ts09sys6.pTr)(e) === e.name;
  } catch {
    return false;
  }
}
function Nvr(e) {
  let r = e.serverInfo?.name;
  if (!r || !O(e)) return;
  let n = (0, import_chunk_3f4m74y6.xn)(`${import_chunk_3f4m74y6.oJ}${r}`);
  if (n.startsWith(import_chunk_3f4m74y6.A8) && n.length <= s) return n;
  (0, import_chunk_w578pjby.t)(`MCP server "${e.name}": deny and ask rules written with its claude.ai name will not apply to it, because "claude_ai_" and the name are together longer than ${s} characters, or the name has no letter, digit or "-"`, { level: "warn" }), (0, import_chunk_cqa9hrgx.l)("mcp_connector_other_key", n.length > s ? "name_too_long" : "name_gives_no_key");
  return;
}
function _2t(e, r) {
  return r.filter((n) => n.name === e).flatMap((n) => [w4() ? kvt(n.name, n.config, (0, import_chunk_qdcbcsg7.Pl)(n.config))?.key : void 0, qBn(n.config), (0, import_chunk_px0hhsq7.zDs)() ? Nvr(n) : void 0]).filter((n) => n !== void 0);
}
function pWi(e) {
  let r = e.mcpInfo;
  return r?.legacyGrantRebindable === true && fcn(r.serverName, r) && !mLe(r.serverName, r) && !(0, import_chunk_px0hhsq7.uxt)(r) && !(0, import_chunk_px0hhsq7.fxt)(r);
}
function Wwl(e, r, n) {
  let { mcpInfo: a } = e;
  if (a === void 0 || !pWi(e)) return;
  let p = (o) => o.toolName === (0, import_chunk_px0hhsq7.ca)(e) && o.ruleContent === void 0;
  for (let o of r) if (o.type === "addRules" && o.behavior === "allow" && o.rules.some(p)) {
    (0, import_chunk_px0hhsq7.I$l)(a).then((y) => {
      if (y) n({ ...o, rules: o.rules.filter(p) });
      else (0, import_chunk_w578pjby.t)(`MCP server "${a.serverName}": could not make it the owner of its name, so "don't ask again" was not kept. You will be asked again.`);
    }).catch(import_chunk_k449cc64.i);
    return;
  }
}
function jwl(e) {
  try {
    if (w4()) (0, import_chunk_px0hhsq7.H$l)(Object.entries(e).map(([r, n]) => ({ server: { serverName: r, serverType: n.type ?? "stdio", serverId: eh(n) }, standardKey: kvt(r, n, (0, import_chunk_qdcbcsg7.Pl)(n)), denyKey: qBn(n), mayRecordOwner: fcn(r, n) })));
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`Could not register configured MCP servers; will retry when their tools load: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
  }
}
function fcn(e, r) {
  return r.scope !== "project" && r.scope !== "agent" && r.source !== "plugin" && !(0, import_chunk_xcgcdx61.jl)(r) && (r.scope !== "dynamic" || Lvr(e, r));
}
function kvt(e, r, n) {
  if (n || (0, import_chunk_865at33z.foe)(e)) return { key: (0, import_chunk_3f4m74y6.xn)(e), pinned: true };
  switch (r.type) {
    case "sse-ide":
    case "ws-ide":
      return { key: g, pinned: true };
    case "http":
    case "sse":
      return u(r.url);
    case "claudeai-proxy":
      return eh(r) === void 0 ? void 0 : u(r.url);
    case "stdio":
    case void 0:
      return { key: (0, import_chunk_3f4m74y6.xn)(e), pinned: false };
    default:
      return;
  }
}
