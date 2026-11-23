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
var chunk_qrpds8jv_exports = {};
__export(chunk_qrpds8jv_exports, {
  $vr: () => $vr,
  $wo: () => $wo,
  Fvr: () => Fvr,
  Gwl: () => Gwl,
  Kwl: () => Kwl,
  Uwo: () => Uwo,
  Vwl: () => Vwl,
  Ywl: () => Ywl,
  _Wi: () => _Wi,
  bwe: () => bwe,
  gWi: () => gWi,
  hWi: () => hWi,
  mWi: () => mWi,
  mws: () => mws,
  qwl: () => qwl,
  t_: () => t_,
  zwl: () => zwl
});
module.exports = __toCommonJS(chunk_qrpds8jv_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var mWi = ["unrestricted", "small", "medium", "large"], a = "medium", u = "small";
function Fvr(e) {
  return mWi.find((o) => o === e);
}
var n = { small: 5, medium: 10, large: 50 };
function c(e) {
  let o = e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
  return o === void 0 ? e : `${e} (aim for <${o} agents)`;
}
function Gwl(e, o) {
  return o && e !== "unrestricted" ? `${e} (default)` : c(e);
}
function zwl(e) {
  return e === "small" || e === "medium" || e === "large" ? n[e] : void 0;
}
function f(e) {
  if (!(e in n)) return e;
  return `${e} \u2014 keep workflows under ${n[e]} agents`;
}
function d() {
  return "This is a guideline, not a hard limit \u2014 follow it unless the user's prompt calls for a different scale.";
}
function Vwl(e, o) {
  let t = o ? "This session has the default workflow size guideline:" : "A workflow size guideline is configured for this session:", r = o ? ' The user can raise or remove it with "Dynamic workflow size" in /config.' : "";
  return `${t} ${f(e)}. ${d()}${r}`;
}
function Kwl(e) {
  if (e === "unrestricted") return "Workflow size is now unrestricted \u2014 no size guideline applies.";
  return `The workflow size guideline for this session changed: ${f(e)}. ${d()}`;
}
function $wo() {
  return mws() || (0, import_chunk_r3mm3x33.vB)()?.settings.disableWorkflows === true;
}
function mws() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_WORKFLOWS;
}
class w {
  cached = void 0;
  resolve() {
    if (this.cached !== void 0) return this.cached;
    return this.cached = W(), this.cached;
  }
}
var p = new import_chunk_2904xtvq.j(() => new w());
function t_() {
  return hWi() === void 0;
}
function hWi() {
  if (!(0, import_chunk_wzdjp7c0.f_)()) return "unsupported_runtime";
  let e = $wo(), o = e && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_WORKFLOWS && (0, import_chunk_8m5q5cts.ll)("disableWorkflows", false).source === "userSettings";
  if (e && !o) return "managed_settings";
  if (!Uwo()) return "org_policy";
  let { available: t, defaultOn: r } = i();
  if (!t) return "unavailable";
  if (!((0, import_chunk_r3mm3x33.vB)()?.settings.enableWorkflows ?? r)) {
    let l = (0, import_chunk_8m5q5cts.ll)("enableWorkflows", r).source;
    return l === "userSettings" || l === "default" ? "user_setting" : "managed_settings";
  }
  return o ? "user_setting" : void 0;
}
function gWi() {
  return i().defaultOn;
}
function bwe() {
  return (0, import_chunk_865at33z.or)() === "pro" ? u : a;
}
function qwl() {
  return Uwo() && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_WORKFLOWS && i().available;
}
function $vr() {
  return (0, import_chunk_r3mm3x33.vB)()?.settings.workflowKeywordTriggerEnabled ?? true;
}
function Uwo() {
  return (0, import_chunk_2nv4wrez.Rn)("allow_workflows");
}
function Ywl() {
  if (!(0, import_chunk_wzdjp7c0.f_)() || $wo() || !Uwo()) return true;
  if ((0, import_chunk_r3mm3x33.vB)()?.settings.enableWorkflows === false) return true;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_WORKFLOWS === false || !(0, import_chunk_865at33z.b)("tengu_workflows_enabled", true);
}
function i() {
  return p.of((0, import_chunk_f9x2f6cx.N)().host).resolve();
}
function W() {
  if (!(0, import_chunk_wzdjp7c0.f_)()) return { available: false, defaultOn: false };
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_WORKFLOWS === true) {
    let o = (0, import_chunk_865at33z.b)("tengu_workflows_enabled", true);
    return { available: o, defaultOn: o };
  }
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_WORKFLOWS === false) return { available: false, defaultOn: false };
  if (!(0, import_chunk_865at33z.b)("tengu_workflows_enabled", true)) return { available: false, defaultOn: false };
  return { available: true, defaultOn: (0, import_chunk_865at33z.or)() !== "pro" };
}
function _Wi() {
  return (0, import_chunk_865at33z.b)("tengu_jade_compass", true);
}
