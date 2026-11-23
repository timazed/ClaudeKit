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
var chunk_jeh6zx5j_exports = {};
__export(chunk_jeh6zx5j_exports, {
  OVe: () => OVe,
  Oma: () => Oma,
  V$r: () => V$r,
  z$r: () => z$r
});
module.exports = __toCommonJS(chunk_jeh6zx5j_exports);
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
function OVe(e) {
  return false;
}
function z$r({ model: e, modelCli: o, agent: t, agentSelectedByCli: i, agents: n, effectiveModel: r, initialMainLoopModel: c, restrictedModel: p }) {
  let l = o === "default" || r === void 0 && c === null;
  if (E() && (p !== void 0 && !OVe(p) || l && ((0, import_chunk_865at33z.tke)().attribution === "enforced" || O()))) return "allowlist";
  if (l && (0, import_chunk_865at33z.tke)().attribution === "env" && R("ANTHROPIC_DEFAULT_MODEL", e)) return "settings_env_default";
  let d = C(e) ? "remap" : void 0;
  if (o) return d;
  if (r !== void 0 && t?.model && t.model !== "inherit") {
    let s = (0, import_chunk_2yx6c1y2.kv)("agent"), D = !i && (s === null || a(s));
    return g(t) || D ? "agent" : d;
  }
  if (r !== void 0) return d;
  let w = !i && a((0, import_chunk_2yx6c1y2.kv)("agent")) && (0, import_chunk_xzvhvaa2.Ko)().some((s) => !a(s) && (0, import_chunk_2yx6c1y2._e)(s)?.agent !== void 0), b = t !== void 0 && g(t) && n.some((s) => s.agentType === t.agentType && !g(s) && Boolean(s.model) && s.model !== "inherit");
  if (w || b) return "agent";
  if (h("ANTHROPIC_MODEL")) return "settings_env";
  if (!l && process.env.ANTHROPIC_MODEL) return d;
  return a((0, import_chunk_2yx6c1y2.kv)("model")) ? "settings" : d;
}
function Oma(e) {
  return e || false;
}
function V$r(e) {
  let o = A(e), t = A({ ...e, settingsModeForwardable: false }), i = o.permissionMode !== t.permissionMode, n = o.permissionMode, r = n === "default" ? import_chunk_pbteexar.T8 : n;
  return { decision: o, isModeFromSettings: i, ...i && n !== void 0 && { noticeOnRunner: { level: n === "plan" ? "warning" : "notice", text: `This session runs on a self-hosted runner, where your settings' default permission mode (${r}) doesn't apply. To start in ${r} mode, relaunch with --permission-mode ${r}.`, short: n === "plan" ? "Type /plan: your default mode doesn't apply on a self-hosted runner." : `Your settings' default mode (${r}) doesn't apply on a self-hosted runner.` } } };
}
function A({ model: e, internal: o, explicitMode: t, droppedMode: i = false, pinnedDefault: n = false, settingsMode: r, settingsModeForwardable: c, autoSeedable: p, storedDefaultBar: l, otherChoiceTyped: d, carriedPlanHolds: w, repositoryModel: b, trustedPlanDisplaced: s, settingsNeverForwarded: D = false }) {
  let S = !i && (t === void 0 || n && t === "default");
  return { permissionMode: S ? c ? S ? r : void 0 : void 0 : t, action: "none" };
}
var N = import_chunk_gd77dyw4.t4t.filter((e) => /^ANTHROPIC_DEFAULT_[A-Z]+_MODEL$/.test(e));
function C(e) {
  return f().some((o) => {
    let t = (0, import_chunk_2yx6c1y2._e)(o), i = M(o);
    return [...Object.values(t?.modelOverrides ?? {}), ...N.filter((n) => h(n)).flatMap((n) => y(i, n))].some((n) => _(n, e));
  });
}
function R(e, o) {
  return h(e) && f().some((t) => y(M(t), e).some((i) => _(i, o)));
}
function _(e, o) {
  return u(e) === u(o) || u((0, import_chunk_865at33z.jt)(e)) === u((0, import_chunk_865at33z.jt)(o));
}
function u(e) {
  return (0, import_chunk_zmb62hr5.Yt)(e.trim().toLowerCase()).trim();
}
function O() {
  return (0, import_chunk_xzvhvaa2.Ko)().some((e) => e !== "policySettings" && (0, import_chunk_2yx6c1y2._e)(e)?.enforceAvailableModels === true);
}
function E() {
  return (0, import_chunk_2yx6c1y2._e)("policySettings")?.availableModels === void 0 && f().some((e) => {
    let o = (0, import_chunk_2yx6c1y2._e)(e);
    return o?.availableModels !== void 0 || o?.enforceAvailableModels !== void 0;
  });
}
function h(e) {
  return f().some((o) => m(o, e)) && !m("flagSettings", e) && !m("policySettings", e);
}
function m(e, o) {
  return y(M(e), o).length > 0;
}
function M(e) {
  return (0, import_chunk_5e3gtsn9.Gle)((0, import_chunk_2yx6c1y2._e)(e)?.env, e);
}
function y(e, o) {
  return Object.entries(e).filter(([t]) => t.toUpperCase() === o).map(([, t]) => t);
}
function g(e) {
  return a(e.source) || e.source === "plugin" || e.fromAdditionalDirectory === true;
}
function f() {
  return (0, import_chunk_xzvhvaa2.Ko)().filter(a);
}
function a(e) {
  return e === "localSettings" || e === "projectSettings" && !(0, import_chunk_2yx6c1y2.vm)();
}
