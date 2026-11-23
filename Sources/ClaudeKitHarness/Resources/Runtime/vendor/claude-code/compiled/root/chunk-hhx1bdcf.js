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
var chunk_hhx1bdcf_exports = {};
__export(chunk_hhx1bdcf_exports, {
  C8s: () => C8s,
  E8s: () => E8s,
  RKr: () => RKr,
  SOa: () => SOa,
  T8s: () => T8s,
  _Oa: () => _Oa,
  aOa: () => aOa,
  cOa: () => cOa,
  dOa: () => dOa,
  fOa: () => fOa,
  gOa: () => gOa,
  hOa: () => hOa,
  iOa: () => iOa,
  k8s: () => k8s,
  lOa: () => lOa,
  mOa: () => mOa,
  pOa: () => pOa,
  uOa: () => uOa,
  v8s: () => v8s,
  xKr: () => xKr,
  yOa: () => yOa
});
module.exports = __toCommonJS(chunk_hhx1bdcf_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_rnad4hj1 = require("/$bunfs/root/chunk-rnad4hj1.js");
var import_chunk_18je167n = require("/$bunfs/root/chunk-18je167n.js");
var f = 3, g = 3, iOa = 20, aOa = "Your Claude Code session is ready \u2014 continue from your phone anytime.";
function lOa() {
  if (import_chunk_c203g5kd.So.CLAUDE_CODE_FORCE_RC_LONG_TURN_NUDGE) return { thresholdSec: 5, probability: 1, maxImpressions: -1, impressionKey: "force", dayStartHour: 0, dayEndHour: 24 };
  let e = (0, import_chunk_865at33z.b)("tengu_rc_long_turn_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.thresholdSec === "number" && Number.isFinite(e.thresholdSec) ? Math.min(3600, Math.max(5, e.thresholdSec)) : 90, n = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1, r = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 3, t = typeof e.impressionKey === "string" ? e.impressionKey : "", m = (i, c) => typeof i === "number" && Number.isFinite(i) ? Math.min(24, Math.max(0, Math.trunc(i))) : c, p = m(e.dayStartHour, 7), d = m(e.dayEndHour, 21);
  return { thresholdSec: o, probability: n, maxImpressions: r, impressionKey: t, dayStartHour: p, dayEndHour: d };
}
function dOa(e, o = /* @__PURE__ */ new Date()) {
  if (e.dayStartHour >= e.dayEndHour) return true;
  let n = o.getHours();
  return n >= e.dayStartHour && n < e.dayEndHour;
}
function l(e, o) {
  let n = ((0, import_chunk_865at33z.ge)()[e] ?? 0) + 1;
  (0, import_chunk_865at33z.Ke)((r) => (r[e] ?? 0) >= n ? r : { ...r, [e]: n }, o);
}
var s = { afterPromptCount: 5, probability: 0, maxImpressions: 3 };
function cOa() {
  let e, o = import_chunk_c203g5kd.So.CLAUDE_CODE_RC_PERMISSION_NUDGE;
  if (o) try {
    e = (0, import_chunk_w578pjby.te)(o);
  } catch {
    e = void 0;
  }
  e ??= (0, import_chunk_865at33z.b)("tengu_rc_permission_nudge", s);
  let n = (r, t) => typeof r === "number" && Number.isFinite(r) ? r : t;
  return { afterPromptCount: Math.max(1, n(e?.afterPromptCount, s.afterPromptCount)), probability: n(e?.probability, s.probability), maxImpressions: n(e?.maxImpressions, s.maxImpressions) };
}
function k8s() {
  if (!(0, import_chunk_7d2qr9z5.Xae)()) return false;
  let e = (0, import_chunk_865at33z.ge)();
  return !e.hasUsedRemoteControl && !(0, import_chunk_7d2qr9z5.Cpe)() && (e.remoteControlUpsellSeenCount ?? 0) < f;
}
function uOa(e) {
  l("remoteControlUpsellSeenCount", e), (0, import_chunk_cqa9hrgx.u)("tips_rc_upsell_show");
}
function E8s() {
  return (0, import_chunk_865at33z.ge)().hasUsedRemoteControl === true || (0, import_chunk_7d2qr9z5.Cpe)();
}
function v8s() {
  return T8s() && ((0, import_chunk_865at33z.ge)().pushNotifUpsellSeenCount ?? 0) < g;
}
function T8s() {
  return (0, import_chunk_7d2qr9z5.Xae)() && E8s() && (0, import_chunk_8m5q5cts.ll)("agentPushNotifEnabled", false).value !== true && (0, import_chunk_18je167n.dXt)();
}
function fOa(e) {
  l("pushNotifUpsellSeenCount", e), (0, import_chunk_cqa9hrgx.u)("tips_push_upsell_show");
}
function pOa(e) {
  if (!(0, import_chunk_7d2qr9z5.mN)()) return false;
  if (e.maxImpressions === 0) return false;
  if (e.maxImpressions < 0) return true;
  let o = (0, import_chunk_865at33z.ge)();
  return ((o.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey ? o.rcLongTurnNudgeSeenCount ?? 0 : 0) < e.maxImpressions;
}
function mOa(e, o) {
  if (e.maxImpressions >= 0) (0, import_chunk_865at33z.Ke)((n) => {
    let r = (n.rcLongTurnNudgeSeenKey ?? "") === e.impressionKey;
    return { ...n, rcLongTurnNudgeSeenCount: r ? (n.rcLongTurnNudgeSeenCount ?? 0) + 1 : 1, rcLongTurnNudgeSeenKey: e.impressionKey };
  }, o);
  (0, import_chunk_cqa9hrgx.u)("tips_rc_long_turn_show");
}
function hOa(e) {
  if (!(0, import_chunk_7d2qr9z5.mN)()) return false;
  return ((0, import_chunk_865at33z.ge)().rcPermissionNudgeSeenCount ?? 0) < e;
}
function gOa(e) {
  (0, import_chunk_865at33z.Ke)((o) => ({ ...o, rcPermissionNudgeSeenCount: (o.rcPermissionNudgeSeenCount ?? 0) + 1 }), e), (0, import_chunk_cqa9hrgx.u)("tips_rc_permission_nudge_show");
}
function _Oa() {
  if (!(0, import_chunk_rnad4hj1.K5e)()) return null;
  let e = (0, import_chunk_865at33z.b)("tengu_kairos_ready_nudge", null);
  if (e === null || typeof e !== "object") return null;
  let o = typeof e.probability === "number" && Number.isFinite(e.probability) ? Math.min(1, Math.max(0, e.probability)) : 1, n = typeof e.maxImpressions === "number" && Number.isFinite(e.maxImpressions) ? Math.trunc(e.maxImpressions) : 5, r = typeof e.impressionKey === "string" ? e.impressionKey : "";
  return { probability: o, maxImpressions: n, impressionKey: r };
}
function yOa(e, o, n) {
  if (!o || n) return false;
  if ((0, import_chunk_865at33z.Qt)() || (0, import_chunk_wtm85h0y.iB)() != null) return false;
  if (e.maxImpressions === 0) return false;
  if (e.maxImpressions < 0) return true;
  let r = (0, import_chunk_865at33z.ge)();
  return ((r.remoteControlReadyPushKey ?? "") === e.impressionKey ? r.remoteControlReadyPushCount ?? 0 : 0) < e.maxImpressions;
}
function SOa(e, o) {
  if (e.maxImpressions >= 0) (0, import_chunk_865at33z.Ke)((n) => {
    let r = (n.remoteControlReadyPushKey ?? "") === e.impressionKey;
    return { ...n, remoteControlReadyPushCount: r ? (n.remoteControlReadyPushCount ?? 0) + 1 : 1, remoteControlReadyPushKey: e.impressionKey };
  }, o);
  (0, import_chunk_cqa9hrgx.u)("tips_rc_ready_push_send");
}
function RKr(e) {
  if ((0, import_chunk_865at33z.ge)().hasUsedRemoteControl) return;
  (0, import_chunk_865at33z.Ke)((o) => o.hasUsedRemoteControl ? o : { ...o, hasUsedRemoteControl: true }, e);
}
var C = ["mobile", "web", "desktop"];
function y(e) {
  switch (e) {
    case "ios":
    case "android":
      return "mobile";
    case "web_claude_ai":
      return "web";
    case "desktop_app":
      return "desktop";
    default:
      return;
  }
}
function xKr(e, o) {
  let n = y(e);
  if (!n) return;
  if (a((0, import_chunk_865at33z.ge)()).includes(n)) return;
  (0, import_chunk_865at33z.Ke)((r) => {
    let t = a(r);
    if (t.includes(n)) return r;
    return { ...r, remoteControlSurfacesSeen: [...t, n] };
  }, o);
}
function C8s() {
  let e = a((0, import_chunk_865at33z.ge)()), o = e.includes("mobile"), n = e.includes("web");
  if (o === n) return;
  return o ? "web" : "mobile";
}
function a(e) {
  let o = e.remoteControlSurfacesSeen;
  return Array.isArray(o) ? o.filter((n) => C.some((r) => r === n)) : [];
}
