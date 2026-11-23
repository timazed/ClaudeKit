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
var chunk_ca9ws28w_exports = {};
__export(chunk_ca9ws28w_exports, {
  BUa: () => BUa,
  GUa: () => GUa,
  KUa: () => KUa,
  VUa: () => VUa,
  WUa: () => WUa,
  a7r: () => a7r,
  jUa: () => jUa,
  l7r: () => l7r,
  zUa: () => zUa
});
module.exports = __toCommonJS(chunk_ca9ws28w_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k5jn5rx9 = require("/$bunfs/root/chunk-k5jn5rx9.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_r9ecxfn9 = require("/$bunfs/root/chunk-r9ecxfn9.js");
function m() {
  let e = (0, import_chunk_f9x2f6cx.fda)(), n = e === void 0 ? (0, import_chunk_k5jn5rx9.C4n)() : void 0, [t, o] = e !== void 0 ? [Math.max(0, Date.now() - e), "session_switch"] : n !== void 0 ? [Math.max(0, Date.now() - n), "spawn_stamp"] : [(0, import_chunk_f9x2f6cx.Y)() ? void 0 : Math.round(process.uptime() * 1e3), "process_start"];
  return { msSinceSessionStart: t, startAnchor: (0, import_chunk_78g0060s.f)(o), isRemoteSession: Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) };
}
function p(e) {
  let n = (0, import_chunk_f9x2f6cx.Vyn)();
  if (n.has(e)) return false;
  return n.add(e), true;
}
function BUa(e, n) {
  if (e === 0 || !p("tools_added")) return;
  (0, import_chunk_y53wbr8a.a)("tengu_chrome_tools_added", { ...m(), toolCount: e, discoverySource: (0, import_chunk_78g0060s.f)(n) });
}
function a7r(e) {
  if (!p("tool_attempted")) return;
  (0, import_chunk_y53wbr8a.a)("tengu_chrome_tool_attempted", { ...m(), ...e && { messageClientPlatform: (0, import_chunk_r9ecxfn9.qW)(e) } });
}
function WUa(e) {
  if (!p("bridge_connected")) return;
  (0, import_chunk_y53wbr8a.a)("tengu_chrome_bridge_connected", { ...m(), bridgeStatus: (0, import_chunk_78g0060s.fe)(e) });
}
function jUa() {
  if (!p("extension_connected")) return;
  (0, import_chunk_y53wbr8a.a)("tengu_chrome_extension_connected", m());
}
function l7r(e) {
  (0, import_chunk_y53wbr8a.a)("tengu_chrome_tool_call_disconnected", { ...m(), tokenAccountMismatch: e });
}
var M = 5e3, x = 4e3, _ = 1e3, S = 4e3, y = 1e3, R = 250;
function GUa(e) {
  e.browserRosterVersion++, e.browserRosterChanged.emit();
}
async function zUa(e) {
  let n = (0, import_chunk_929j4hj9.Fi)(), t = n.bridgeBinding, o = t?.socketClient;
  if (t === void 0 || o?.listConnectedExtensions === void 0 || o.hasActiveSelection?.() === true || !(0, import_chunk_865at33z.b)("tengu_hushed_lantern", true)) return false;
  if (!(Boolean(t.context.getPersistedDeviceId?.()) || ((await (0, import_chunk_5appeerh.me)(Promise.resolve().then(() => t.context.getLocalDeviceIds?.()), _).catch(() => {
    return;
  }))?.size ?? 0) > 0)) return false;
  if (n.relayConnectFailed === o && !o.isConnected()) return false;
  let w = o.listConnectedExtensions.bind(o), u = import_chunk_5appeerh.Gi.monotonicNow(), c = n.noBrowserFound?.client === o && n.noBrowserFound.rosterVersion === n.browserRosterVersion, r = c ? "none_cached" : await (0, import_chunk_5appeerh.Tn)(B(n, o, w), e, () => new import_chunk_jv7av99m.Ie()).catch((h) => {
    if (e.aborted) return "aborted";
    return (0, import_chunk_k449cc64.i)(h), "failed";
  });
  if (r !== "present" && r !== "roster_changed" && !c) (0, import_chunk_cqa9hrgx.l)("chrome_permission_prompt", `browser_check_${r}`, { elapsed_ms: Math.round(import_chunk_5appeerh.Gi.monotonicNow() - u) });
  return r === "none" || r === "none_short_wait" || r === "none_cached";
}
async function VUa() {
  let e = (0, import_chunk_929j4hj9.Fi)().bridgeBinding?.socketClient;
  if (e?.listConnectedExtensions === void 0) return false;
  let n = await C(e, e.listConnectedExtensions.bind(e), _).catch((t) => ((0, import_chunk_k449cc64.i)(t), "failed"));
  if (n !== "none" && n !== "present") (0, import_chunk_cqa9hrgx.l)("chrome_setup_card_answer", `browser_check_${n}`);
  return n === "none";
}
function KUa(e) {
  let n = (0, import_chunk_929j4hj9.Fi)().bridgeBinding?.socketClient;
  return (0, import_chunk_5appeerh.Tn)((0, import_chunk_5appeerh.me)(Promise.resolve(n?.isConnected() === true ? n.peekTargetBrowser?.() : void 0), _), e, () => new import_chunk_jv7av99m.Ie()).catch(() => {
    return;
  });
}
async function B(e, n, t) {
  let o = import_chunk_5appeerh.Gi.now() + M;
  if (await (0, import_chunk_5appeerh.me)(n.ensureConnected(), x) !== true) return e.relayConnectFailed = n, "connect_failed";
  e.relayConnectFailed = void 0;
  let d = e.browserRosterVersion, w = import_chunk_5appeerh.Gi.now(), u = await C(n, t, _);
  if (u !== "none" || e.browserRosterVersion !== d) return u === "none" ? "roster_changed" : u;
  let c = n.browserReturnWaitMs?.(), r = c ?? Math.min(S, o - import_chunk_5appeerh.Gi.now() - R);
  if (c === void 0 && r < y) return "no_time_to_wait";
  let h = () => {
  }, A = new Promise((E) => {
    h = e.browserRosterChanged.subscribe(E);
  });
  if (await (0, import_chunk_5appeerh.me)(A, r).finally(() => h()), e.browserRosterVersion !== d) return "roster_changed";
  let g = await C(n, t, _);
  if (g !== "none" || e.browserRosterVersion !== d) return g === "none" ? "roster_changed" : g;
  if (c === void 0 && import_chunk_5appeerh.Gi.now() - w < S) return "none_short_wait";
  return e.noBrowserFound = { client: n, rosterVersion: d }, "none";
}
async function C(e, n, t) {
  let o = await (0, import_chunk_5appeerh.me)(n(), t);
  if (!e.isConnected()) return "connection_lost";
  if (o === void 0) return "list_timeout";
  return o.length > 0 ? "present" : "none";
}
