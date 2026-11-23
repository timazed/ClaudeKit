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
var chunk_hrmqj4hy_exports = {};
__export(chunk_hrmqj4hy_exports, {
  IBi: () => IBi,
  IBn: () => IBn,
  Jdn: () => Jdn,
  MBi: () => MBi,
  MBn: () => MBn,
  OBi: () => OBi,
  PBi: () => PBi,
  RBi: () => RBi,
  Xdn: () => Xdn,
  bvr: () => bvr,
  bwl: () => bwl,
  cvt: () => cvt,
  eX: () => eX,
  fvt: () => fvt,
  kwl: () => kwl,
  mwo: () => mwo,
  o2t: () => o2t,
  pwo: () => pwo,
  qbs: () => qbs,
  tX: () => tX,
  uvt: () => uvt,
  wvr: () => wvr,
  wwl: () => wwl,
  xBi: () => xBi,
  zP: () => zP
});
module.exports = __toCommonJS(chunk_hrmqj4hy_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_gftn60qp = require("/$bunfs/root/chunk-gftn60qp.js");
var bwl = Symbol("plainOutputIsContext"), f = Symbol("onAModsServer");
class RBi extends Error {
  name = "NoAnswerInTimeError";
}
class xBi extends Error {
  name = "InputTooLargeToSendError";
}
var c = ["projectSettings", "flagSettings", "policySettings"];
function eX(o) {
  let e = (0, import_chunk_f9x2f6cx.mf)();
  if (e === void 0) return;
  let t = "settingsSource" in o ? c.find((n) => n === o.settingsSource) : void 0;
  if (t !== void 0) return { settingsSource: t };
  return "pluginId" in o && typeof o.pluginId === "string" && e.holds(o.pluginId) ? { pluginId: o.pluginId } : void 0;
}
function u(o) {
  return o.type === "command" || o.type === "prompt";
}
function PBi(o) {
  return o.if === void 0 || (0, import_chunk_qebpc5de.Ur)(o.if).ruleContent === void 0;
}
function OBi(o, e) {
  return o.settingsSource === "projectSettings" || !PBi(e);
}
function cvt(o, e) {
  return u(e) || (e.type === "http" || e.type === "prompt" || e.type === "agent" || e.type === "mcp_tool") && o.settingsSource === "projectSettings" || e.type === "mcp_tool" && o.pluginId !== void 0 && f in e || e.type === "agent" && o.pluginId !== void 0 || e.type === "http" && (o.pluginId !== void 0 || o.settingsSource === "policySettings");
}
function o2t(o) {
  let e = (0, import_chunk_f9x2f6cx.mf)();
  if (e === void 0 || (0, import_chunk_6zh1j84y.Qh)()) return [];
  let t = (0, import_chunk_6zh1j84y.lko)();
  return c.flatMap((n) => (n === "projectSettings" ? (0, import_chunk_6zh1j84y.NWi)() && e.holdsPluginsBesideRepos?.() !== true : t && n !== "policySettings") ? [] : e.settingsHooks(n, o));
}
function pwo(o) {
  return (0, import_chunk_w578pjby._)([o.server, o.tool, o.input ?? {}]);
}
var IBn = "a cloud session does not run command, script, HTTP or MCP tool hooks from the shared server it runs on", S = /* @__PURE__ */ new Set(["prompt", "agent", "callback", "function"]);
function y(o) {
  return S.has(o.type);
}
function mwo(o) {
  if (!(0, import_chunk_f9x2f6cx.Y)()) return o;
  return o.flatMap((e) => {
    let t = eX(e), n = e.hooks.filter((i) => y(i) || t !== void 0 && cvt(t, i));
    return n.length > 0 ? [{ ...e, hooks: n }] : [];
  });
}
var h = { command: "command", script: "script", http: "HTTP", mcp_tool: "MCP tool" };
function qbs(o) {
  return { permissionRequestResult: { behavior: "deny", message: `The PermissionRequest ${h[o.type] ?? o.type} hook can't run in this cloud session, so this permission request is denied.` }, outcome: "blocking", hook: o };
}
function bvr() {
  let o = (0, import_chunk_r6r2wdsw.Uy)();
  return (o === "tool_container_daemon" || o === "hosted_worker") && !(0, import_chunk_6e68m1dj.ny)();
}
function MBn() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REQUIRED_PLUGINS_HOLD === true && bvr();
}
function zP(o, e) {
  return mwo(b(o, e?.withoutCheckoutHooks === true));
}
function b(o, e) {
  let t = (0, import_chunk_0pb268nk.Lr)("hooks"), n = ((0, import_chunk_f9x2f6cx.sE)()?.[o] ?? []).filter((r) => !("pluginRoot" in r && ((0, import_chunk_f9x2f6cx.Q4t)() === "plugins" || o === "SessionEnd" && (0, import_chunk_f9x2f6cx.Tla)(r.pluginRoot))));
  if ((0, import_chunk_6zh1j84y.Qh)()) return t ? (0, import_chunk_gftn60qp.sWn)(o) : n.filter((r) => !("pluginRoot" in r) && !("deviceOwner" in r));
  let i = a();
  if (t) return [...(0, import_chunk_gftn60qp.sWn)(o), ...n.filter((r) => "pluginRoot" in r && d(r.pluginId, i) && k(r, i.managedPluginIds) !== false)];
  let { managedOnly: l, managedPluginIds: m } = i, H = (0, import_chunk_6zh1j84y.lko)(), g = (0, import_chunk_6zh1j84y.y1)()?.[o] ?? [];
  return [...e ? (0, import_chunk_6zh1j84y.Vvr)(g, o) : g, ...o2t(o), ...l ? [] : (0, import_chunk_f9x2f6cx.I3)()?.[o] ?? [], ...n.filter((r) => k(r, m) ?? ((!("pluginRoot" in r) || d(r.pluginId, i, r.organizationRequires)) && !(H && "deviceOwner" in r)))];
}
function k(o, e) {
  let t = (0, import_chunk_f9x2f6cx.mf)();
  if (!E(o) || t?.holds(o.pluginId) !== true) return;
  return !t.standsDown(o.pluginId) && !((0, import_chunk_6zh1j84y.v2t)() && !e?.has(o.pluginId)) && !((0, import_chunk_gftn60qp._cn)() && t.isPersonsOwn?.({ pluginId: o.pluginId }) !== false);
}
var p = /* @__PURE__ */ new WeakMap();
function wwl(o, e) {
  p.set(o, e);
}
function IBi(o) {
  return p.get(o)?.() === true;
}
function uvt(o) {
  return p.has(o);
}
function MBi(o) {
  return (0, import_chunk_f9x2f6cx.mf)()?.standsDown(o) === false && !(0, import_chunk_6zh1j84y.Qh)() && !(0, import_chunk_6zh1j84y.v2t)();
}
function kwl(o, e) {
  let t = (0, import_chunk_f9x2f6cx.mf)();
  return mwo(o.flatMap((n) => {
    if (n.skillRoot === void 0 || t?.holds(n.skillRoot) !== true) {
      if (!e) return [n];
      let i = n.hooks.filter((l) => l.type === "prompt" && IBi(l));
      return i.length > 0 ? [{ ...n, hooks: i }] : [];
    }
    return n.hooks.every((i) => u(i) || i.type === "http") && MBi(n.skillRoot) ? [{ ...n, pluginId: n.skillRoot }] : [];
  }));
}
function E(o) {
  return "pluginRoot" in o && o.hooks.every((e) => cvt(o, e));
}
function Xdn(o) {
  return (0, import_chunk_vcnr02by.kwe)(o);
}
function a(o = (0, import_chunk_6zh1j84y.ub)() || (0, import_chunk_0pb268nk.Lr)("hooks")) {
  return { managedOnly: o, managedPluginIds: o ? (0, import_chunk_vcnr02by.AN)() : null, keepsRequiredPlugins: o && wvr() };
}
function wvr() {
  return MBn() && !(0, import_chunk_0pb268nk.Lr)("hooks") && !(0, import_chunk_6zh1j84y.v2t)() && !(0, import_chunk_6zh1j84y.Tws)();
}
function d(o, { managedOnly: e, managedPluginIds: t, keepsRequiredPlugins: n }, i = false) {
  return !e || t?.has(o) === true || i && n;
}
function fvt(o) {
  return d(o, a(true));
}
function Jdn(o, e = false) {
  return tX() && !(0, import_chunk_6zh1j84y.yy)() && d(o, a(), e);
}
function tX() {
  let o = (0, import_chunk_2gtmjt3y.as)() || (0, import_chunk_0pb268nk.Lr)("hooks");
  return !(0, import_chunk_6zh1j84y.Qh)() && (!o || (0, import_chunk_vcnr02by.AN)() !== null);
}
