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
var chunk_7625rswd_exports = {};
__export(chunk_7625rswd_exports, {
  $Bt: () => $Bt,
  Aje: () => Aje,
  Epl: () => Epl,
  FBt: () => FBt,
  GHi: () => GHi,
  Gho: () => Gho,
  JHi: () => JHi,
  KHi: () => KHi,
  Nkt: () => Nkt,
  Rbe: () => Rbe,
  Spl: () => Spl,
  VHi: () => VHi,
  Who: () => Who,
  XHi: () => XHi,
  YHi: () => YHi,
  _pl: () => _pl,
  b0e: () => b0e,
  bpl: () => bpl,
  c1n: () => c1n,
  f1n: () => f1n,
  gpl: () => gpl,
  hU: () => hU,
  hpl: () => hpl,
  ian: () => ian,
  jHi: () => jHi,
  jho: () => jho,
  kpl: () => kpl,
  m1n: () => m1n,
  mpl: () => mpl,
  p1n: () => p1n,
  ppl: () => ppl,
  qAe: () => qAe,
  qHi: () => qHi,
  san: () => san,
  u1n: () => u1n,
  vhs: () => vhs,
  vpl: () => vpl,
  wpl: () => wpl,
  xbe: () => xbe,
  xit: () => xit,
  ypl: () => ypl,
  zHi: () => zHi
});
module.exports = __toCommonJS(chunk_7625rswd_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_507k3c1m = require("/$bunfs/root/chunk-507k3c1m.js");
var import_chunk_sppbt6xz = require("/$bunfs/root/chunk-sppbt6xz.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_0zqda2sj = require("/$bunfs/root/chunk-0zqda2sj.js");
var import_chunk_spnfty7j = require("/$bunfs/root/chunk-spnfty7j.js");
var import_chunk_qyhf6bts = require("/$bunfs/root/chunk-qyhf6bts.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
function g() {
  return (0, import_chunk_865at33z.b)("tengu_mcp_url_elicitation", true);
}
function x() {
  return (0, import_chunk_865at33z.b)("tengu_mcp_legacy_url_elicitation", true) === true;
}
var T = "io.modelcontextprotocol/ui", O = "text/html;profile=mcp-app";
function c1n() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_APPS_HOST === true;
}
function u1n() {
  return c1n() && import_chunk_c203g5kd.s.CLAUDE_CODE_MCP_APPS_NO_TOOL_ROUTE === true;
}
function w() {
  return { roots: { listChanged: true }, elicitation: {}, ...c1n() && { extensions: { [T]: { mimeTypes: [O] } } } };
}
function Nkt(n) {
  let { tasks: e, extensions: o, ...t } = n;
  if (o === void 0 || !(import_chunk_spnfty7j.$kt in o)) return o === void 0 ? t : { ...t, extensions: o };
  let { [import_chunk_spnfty7j.$kt]: r, ...c } = o;
  return Object.keys(c).length > 0 ? { ...t, extensions: c } : t;
}
function f1n() {
  let n = w();
  return (0, import_chunk_sppbt6xz.OG)() === "v2" && !(0, import_chunk_sppbt6xz.s1)() ? I(n) : n;
}
var y = { [import_chunk_spnfty7j.$kt]: {} };
function I(n) {
  return ((0, import_chunk_j4z7srhg.ec)() ? (0, import_chunk_qdcbcsg7.mt)().sessionFollowsTasks : (0, import_chunk_507k3c1m.RR)()) ? { ...n, extensions: { ...n.extensions, ...y } } : n;
}
var Who = { extensions: y };
function san() {
  let n = f1n();
  if (!g()) return n;
  return { ...n, elicitation: { form: {}, url: {} } };
}
function vhs(n, { denylisted: e }) {
  let o = (n.type === void 0 || n.type === "stdio" || n.type === "sse" || n.type === "http" || n.type === "ws") && !(0, import_chunk_2mwshd9r.Bct)(n), r = x() && !e && o && !("bareElicitationCapability" in n && n.bareElicitationCapability === true) ? san() : f1n();
  return o ? Nkt(r) : r;
}
function ian(n) {
  if (n === void 0) return;
  let e = (0, import_chunk_xcgcdx61.MFe)().safeParse(n);
  return e.success ? e.data : "blocked";
}
var h = ["blocked", "ask", "allow", void 0];
function jHi(n, e) {
  return h.indexOf(n) <= h.indexOf(e) ? n : e;
}
function jho(n) {
  if ((n.blocked_by_organization ?? void 0) !== void 0) return n.blocked_by_organization !== false;
  return (ian(n.default_max_permission) ?? "blocked") === "blocked";
}
function ppl(n, e = false, o = false) {
  let t = o || n.some((c) => (c.blocked_by_organization ?? c.default_max_permission ?? void 0) !== void 0), r = n.length > 0 && !t;
  return { addresses: (0, import_chunk_0zqda2sj.Hpl)((r ? [] : n).map((c) => ({ url: c.url, blocked: jho(c) }))), cut: e, sendsTheFields: t, noAnswer: r, counted: /* @__PURE__ */ new Set() };
}
function GHi(n) {
  return (n.blocked_by_organization ?? false) !== false ? "blocked" : ian(n.default_max_permission);
}
function zHi(n) {
  if (n === void 0) return;
  let e = (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockRows, o = e.find((r) => (0, import_chunk_qyhf6bts.TV)(r.id) === n);
  if (o === void 0) return "unread";
  let t = FBt(o.url);
  return e.filter(({ url: r }) => FBt(r) === t).map(GHi).reduce(jHi);
}
function FBt(n) {
  try {
    return (0, import_chunk_7cfjrnwy.pP)(new URL(n).href, "/");
  } catch {
    return n;
  }
}
function p1n({ connectorId: n, orgMaxPermission: e } = {}) {
  let o = e !== "allow" ? ian(e) : void 0;
  if (n === void 0 || o === "blocked") return o;
  let t = zHi(n);
  return t === "blocked" || t === "unread" ? t : o ?? t;
}
function mpl(n) {
  let { claudeAiConnectorBlockIndex: e, claudeAiConnectorBlockRows: o } = (0, import_chunk_qdcbcsg7.mt)(), t = o.find((r) => r.id === n);
  return e?.sendsTheFields === true && t !== void 0 && jho(t);
}
function hpl() {
  return (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockIndex !== void 0;
}
function gpl() {
  return (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockIndex;
}
function VHi() {
  return (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorListStatus === "pending";
}
function KHi() {
  return (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorListSkippedBySwitch;
}
function Aje() {
  let n = (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockIndex;
  return n !== void 0 && (0, import_chunk_0zqda2sj.Dpl)(n.addresses);
}
function $Bt(n) {
  let e = (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockIndex;
  return e === void 0 ? void 0 : (0, import_chunk_0zqda2sj.Fpl)(e.addresses, n);
}
function _pl(n) {
  let e = (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockIndex;
  return e !== void 0 && (0, import_chunk_0zqda2sj.Lpl)(e.addresses, n);
}
function v() {
  return (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockIndex?.cut === true;
}
function Gho(n) {
  return n === "host" && v();
}
var P = "require_connector_block_on_plugin_servers", L = "require_connector_block_on_plugin_servers_count_only", C = { off: 0, fault: 0, unattributed: 0, count_only: 1, on: 2 };
function b0e() {
  let n = U();
  try {
    let e = (0, import_chunk_qdcbcsg7.mt)();
    if (e.connectorBlockHeld === void 0 && C[n] === 0) return n;
    let o = R(e.connectorBlockHeld?.account);
    if (o !== e.connectorBlockHeld?.account) e.connectorBlockHeld = void 0;
    if (n !== "fault" && n !== "unattributed" && (0, import_chunk_2zeyvjwb.$hn)()) return e.connectorBlockHeld = n === "off" || o === void 0 ? void 0 : { position: n, account: o }, n;
    let t = e.connectorBlockHeld?.position;
    return t !== void 0 && C[t] > C[n] ? t : n;
  } catch (e) {
    if (C[n] > 0) S(e);
    return n;
  }
}
function S(n) {
  try {
    let e = true;
    try {
      let o = (0, import_chunk_qdcbcsg7.mt)().connectorBlockFaultsNoted;
      e = !o.has("position"), o.add("position");
    } catch {
    }
    if (e) xit("The connector block's position could not be read", n);
  } catch {
  }
}
function R(n) {
  try {
    let e = (0, import_chunk_865at33z.xa)().source === "claude.ai" ? (0, import_chunk_865at33z.Sn)() : void 0;
    return e?.organizationUuid ? `${e.accountUuid} ${e.organizationUuid}` : void 0;
  } catch {
    return n;
  }
}
function U() {
  let n = false;
  try {
    let e = (0, import_chunk_2zeyvjwb.Oze)(P), o = e === false ? (0, import_chunk_2zeyvjwb.Oze)(L) : e;
    if (o === void 0) return "fault";
    if (!o) return "off";
    if (n = true, (0, import_chunk_2zeyvjwb.pFe)()) return "unattributed";
    return e ? "on" : "count_only";
  } catch (e) {
    if (!n) return "fault";
    return S(e), "unattributed";
  }
}
function qAe() {
  return b0e() === "on";
}
var Rbe = "Connector list check";
function xbe(n) {
  return (0, import_chunk_xcgcdx61.jl)(n) || n.agentSource === "plugin";
}
function hU(n) {
  return (VHi() || KHi() || (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorListCutWhileOff) && xbe(n) && "url" in n && qAe();
}
function ypl(n, e) {
  let o = (0, import_chunk_qdcbcsg7.mt)().claudeAiConnectorBlockIndex;
  if (o === void 0) return;
  let { counted: t } = o, r = [...e].filter(([d]) => !t.has(d));
  if (r.length === 0) return;
  let c = { unreadable: 0, address: 0, host: 0, opaque: 0, service: 0 };
  for (let [d, _] of r) if (t.add(d), _ !== void 0) c[_] += 1;
  let p = { mode: (0, import_chunk_78g0060s.f)(n), count: r.length };
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_plugin_connector_check", p), (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_check", p);
  for (let d of import_chunk_0zqda2sj.Npl) if (c[d] > 0) {
    let _ = { mode: (0, import_chunk_78g0060s.f)(n), reason: (0, import_chunk_78g0060s.f)(d), count: c[d] };
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_plugin_connector_block", _), (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_block", _);
  }
  if (c.unreadable > 0) k(n, "unreadable", c.unreadable);
  if (o.cut) k(n, "more_pages", r.length);
  if (o.noAnswer) k(n, "no_ceiling", r.length);
  if (o.addresses.blockedRowUnread) k(n, "unreadable_row", r.length);
}
function Spl(n, e, o, t, r) {
  if (!("url" in o) || !xbe(o)) return;
  try {
    let c;
    try {
      c = (0, import_chunk_4smdap7r.M)((0, import_chunk_0zqda2sj.Jho)(t, o.url, u1n())).slice(0, import_chunk_0zqda2sj.lDi + 3);
    } catch {
    }
    (0, import_chunk_qdcbcsg7.mt)().connectionCache?.namesSentByLiveClient.set(n, { serverName: e, url: (0, import_chunk_3bjtjsgp.Ths)(o.url), names: c, hops: r && (0, import_chunk_qdcbcsg7.mt)().connectorBlockHopsOfDial.get(r) });
  } catch {
  }
}
function qHi(n, e) {
  return B(n, e).flatMap((o) => {
    if (o.names === void 0) throw Error("The names that an open connection sent were not read");
    return o.names;
  });
}
function B(n, e) {
  let o = (0, import_chunk_qdcbcsg7.mt)().connectionCache;
  if (!o?.liveClients.size || !("url" in e) || !xbe(e)) return [];
  let t = (0, import_chunk_3bjtjsgp.Ths)(e.url);
  return [...o.liveClients].flatMap((r) => {
    let c = o.namesSentByLiveClient.get(r);
    return c?.serverName === n && c.url === t ? [c] : [];
  });
}
var H = 16;
function bpl(n, e) {
  (0, import_chunk_qdcbcsg7.mt)().connectorBlockHopsOfDial.set(n, e);
}
function wpl(n, e, o) {
  if (n.taken === null || o === "" || URL.parse(o)?.href === URL.parse(e)?.href) return;
  if (n.taken.has(o) || n.taken.size < H) n.taken.add(o);
  else n.taken = null;
}
function E(n) {
  return n.some((e) => e?.taken === null) ? "unknown" : (0, import_chunk_4smdap7r.M)(n.flatMap((e) => [...e?.taken ?? []]));
}
function YHi(n, e) {
  return E(B(n, e).map((o) => o.hops));
}
function kpl(n) {
  return E([(0, import_chunk_qdcbcsg7.mt)().connectionCache?.namesSentByLiveClient.get(n)?.hops]);
}
function Epl(n) {
  let e = (0, import_chunk_qdcbcsg7.mt)().connectionCache?.namesSentByLiveClient.get(n);
  if (e !== void 0 && e.names === void 0) throw Error("The names that a connection sent were not read");
  return e?.names ?? [];
}
function XHi(n, e, o) {
  let t = (0, import_chunk_qdcbcsg7.mt)().connectorBlocksAsSentCounted;
  if (t.has(e)) return;
  t.add(e);
  let r = { mode: (0, import_chunk_78g0060s.f)(n), reason: (0, import_chunk_78g0060s.f)(o), count: 1 };
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_plugin_connector_block", r), (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_block", r);
}
function vpl(n, e, o) {
  let t = (0, import_chunk_qdcbcsg7.mt)().connectorBlockMissesCounted, r = o.filter((p) => !t.has(p));
  if (r.length === 0) return;
  for (let p of r) t.add(p);
  let c = { mode: (0, import_chunk_78g0060s.f)(n), count: r.length };
  if ((0, import_chunk_y53wbr8a.a)("tengu_mcp_plugin_connector_miss", { ...c, reason: (0, import_chunk_78g0060s.f)(e) }), e === "env_var" || e === "setting") (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_list_off", { ...c, reason: (0, import_chunk_78g0060s.f)(e) });
  else if (e === "no_list") (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_no_list", c);
  else (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_local_command", c);
}
function JHi(n) {
  try {
    let e = (0, import_chunk_qdcbcsg7.mt)().connectorBlockFaultsNoted, o = `unread ${n}`;
    if (e.has(o)) return;
    if (e.add(o), n === "fault") (0, import_chunk_cqa9hrgx.l)("mcp_plugin_connector_switch_unread", "read_failed");
    else (0, import_chunk_cqa9hrgx.u)("mcp_plugin_connector_switch_unread");
  } catch (e) {
    xit("The connector block's count of an unread switch failed", e);
  }
}
function xit(n, e) {
  (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`${n}: ${e instanceof Error ? e.name : typeof e}`, "The connector block's check or count failed"));
}
function m1n(n, e, o) {
  let t = n === "on" && e === "check_failed" && Aje(), r = (0, import_chunk_qdcbcsg7.mt)().connectorBlockFaultsNoted, c = `${e} ${t}`;
  if (r.has(c)) return;
  if (r.add(c), xit(`The connector block's ${e === "check_failed" ? "check" : "count"} failed (mode: ${n})`, o), t) (0, import_chunk_cqa9hrgx.m)("mcp_plugin_connector_check", e, { mode: (0, import_chunk_78g0060s.f)(n) });
  else (0, import_chunk_cqa9hrgx.l)("mcp_plugin_connector_check", e, { mode: (0, import_chunk_78g0060s.f)(n) });
}
function k(n, e, o) {
  let t = { mode: (0, import_chunk_78g0060s.f)(n), count: o };
  (0, import_chunk_y53wbr8a.a)("tengu_mcp_plugin_connector_miss", { ...t, reason: (0, import_chunk_78g0060s.f)(e) }), (0, import_chunk_cqa9hrgx.l)("mcp_plugin_connector_check", e, t);
}
