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
var chunk_6zh1j84y_exports = {};
__export(chunk_6zh1j84y_exports, {
  $Wi: () => $Wi,
  Ewe: () => Ewe,
  FWi: () => FWi,
  KRe: () => KRe,
  Kvr: () => Kvr,
  LWi: () => LWi,
  NWi: () => NWi,
  Qh: () => Qh,
  T2t: () => T2t,
  Tws: () => Tws,
  UWi: () => UWi,
  Vvr: () => Vvr,
  _kl: () => _kl,
  ako: () => ako,
  bme: () => bme,
  cWn: () => cWn,
  iko: () => iko,
  lko: () => lko,
  uWn: () => uWn,
  ub: () => ub,
  v2t: () => v2t,
  y1: () => y1,
  ykl: () => ykl,
  yy: () => yy
});
module.exports = __toCommonJS(chunk_6zh1j84y_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_57sd0ak5 = require("/$bunfs/root/chunk-57sd0ak5.js");
var import_chunk_gt0vfa7p = require("/$bunfs/root/chunk-gt0vfa7p.js");
var import_chunk_wx2mpa0f = require("/$bunfs/root/chunk-wx2mpa0f.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
function c(o) {
  return o;
}
function _kl() {
  return null;
}
function ykl(o) {
  return false;
}
function iko(o) {
  return null;
}
var g = "cli";
class f {
  snapshotKey = () => g;
  snapshotsBySessionId = /* @__PURE__ */ new Map();
  setSnapshotKey(o) {
    this.snapshotKey = o;
  }
  current() {
    let o = this.snapshotKey(), t = this.snapshotsBySessionId.get(o);
    if (!t) t = { initialHooksConfig: null }, this.snapshotsBySessionId.set(o, t);
    return t;
  }
  store(o) {
    let t = this.current();
    if (t.initialHooksConfig = o, (0, import_chunk_wx2mpa0f.fb)() || (0, import_chunk_6e68m1dj.MHr)()) t.userHooksConfig = (0, import_chunk_2yx6c1y2._e)("userSettings")?.hooks ?? {};
    else delete t.userHooksConfig;
    try {
      t.policyHooksConfig = (0, import_chunk_2yx6c1y2._e)("policySettings")?.hooks ?? {};
    } catch {
      t.policyHooksConfig = "unreadable";
    }
  }
  evict(o) {
    if (o === g) return;
    this.snapshotsBySessionId.delete(o);
  }
}
var h = new import_chunk_2904xtvq.j(() => new f());
function e() {
  return (0, import_chunk_f9x2f6cx.kr)(h);
}
function r() {
  let o = (0, import_chunk_2yx6c1y2._e)("policySettings");
  if (o?.disableAllHooks === true) return {};
  if (o?.allowManagedHooksOnly === true || (0, import_chunk_2gtmjt3y.as)()) return o?.hooks ?? {};
  if ((0, import_chunk_57sd0ak5.Dl)("hooks")) return o?.hooks ?? {};
  let t = (0, import_chunk_2yx6c1y2.zr)();
  if (t.disableAllHooks === true) {
    if (!ako()) return o?.hooks ?? {};
    return l();
  }
  if ((0, import_chunk_2yx6c1y2.QX)()) return l();
  return c(t.hooks ?? {});
}
var d = ["userSettings", "flagSettings", "policySettings"];
function l() {
  return m(d.filter(import_chunk_xzvhvaa2.rn).map((o) => (0, import_chunk_2yx6c1y2._e)(o)?.hooks));
}
function Vvr(o, t) {
  let n = new Set((l()[t] ?? []).map(import_chunk_wgyw76w5.di));
  return o.filter((s) => n.has((0, import_chunk_wgyw76w5.di)(s)));
}
function m(o) {
  let t = {};
  for (let n of o) for (let [s, a] of Object.entries(n ?? {})) {
    let i = s;
    t[i] = [...t[i] ?? [], ...a ?? []];
  }
  return t;
}
function ako() {
  return S() && !yy();
}
function LWi() {
  return S() && yy();
}
function S() {
  if (!((0, import_chunk_wx2mpa0f.fb)() || (0, import_chunk_6e68m1dj.MHr)()) || (0, import_chunk_2gtmjt3y.as)() || (0, import_chunk_57sd0ak5.Dl)("hooks") || (0, import_chunk_2yx6c1y2.zr)().disableAllHooks !== true) return false;
  return (0, import_chunk_2yx6c1y2._e)("policySettings")?.allowManagedHooksOnly !== true && !Tws();
}
function Tws() {
  return d.filter(import_chunk_xzvhvaa2.rn).some((o) => (0, import_chunk_2yx6c1y2._e)(o)?.disableAllHooks === true);
}
function ub(o = (0, import_chunk_2yx6c1y2.zr)().disableAllHooks) {
  return (0, import_chunk_2gtmjt3y.as)() || Ewe(o);
}
function Ewe(o = (0, import_chunk_2yx6c1y2.zr)().disableAllHooks) {
  let t = (0, import_chunk_2yx6c1y2._e)("policySettings");
  if (t?.allowManagedHooksOnly === true) return true;
  if (o === true && t?.disableAllHooks !== true) return true;
  return false;
}
function v2t() {
  return k() || yy();
}
function k() {
  return (0, import_chunk_2gtmjt3y.as)() || (0, import_chunk_2yx6c1y2._e)("policySettings")?.allowManagedHooksOnly === true;
}
function NWi() {
  return Qh() || k() || (0, import_chunk_57sd0ak5.Dl)("hooks");
}
function H() {
  return (0, import_chunk_2yx6c1y2.vl)("userSettings");
}
function FWi() {
  let o = H();
  return o?.disableAllHooks === true || o === null && (0, import_chunk_2yx6c1y2.QT)("userSettings").length > 0;
}
function yy() {
  return (0, import_chunk_2yx6c1y2.QPe)((0, import_chunk_2yx6c1y2.Rw)()).length > 0 || (0, import_chunk_f9x2f6cx.EJ)() && (0, import_chunk_2yx6c1y2.TJe)();
}
function lko() {
  return v2t() || (0, import_chunk_57sd0ak5.Dl)("hooks");
}
function Qh() {
  return (0, import_chunk_865at33z.GZ)() || (0, import_chunk_2yx6c1y2._e)("policySettings")?.disableAllHooks === true;
}
function bme() {
  return Qh() || Ewe();
}
function $Wi() {
  e().store(r()), (0, import_chunk_f9x2f6cx.Gge)();
}
function KRe(o) {
  (0, import_chunk_r3mm3x33.pr)(o), e().store(r()), (0, import_chunk_f9x2f6cx.Gge)();
}
async function Kvr() {
  if (KRe(), await (0, import_chunk_865at33z.ioe)()) (0, import_chunk_xcgcdx61.pge)(), e().store(r()), (0, import_chunk_f9x2f6cx.Gge)();
}
async function cWn(o) {
  let t = await (0, import_chunk_gt0vfa7p.xTr)(o);
  try {
    if (await (0, import_chunk_865at33z.ioe)()) (0, import_chunk_xcgcdx61.pge)();
    e().store(r()), (0, import_chunk_f9x2f6cx.Gge)();
  } finally {
    t?.();
  }
}
function* UWi() {
  for (let o of e().snapshotsBySessionId.values()) if (o.initialHooksConfig !== null) yield o.initialHooksConfig;
}
function y1() {
  let o = e().current();
  if (o.initialHooksConfig === null) (0, import_chunk_r3mm3x33.pr)(), e().store(r()), (0, import_chunk_f9x2f6cx.Gge)();
  return o.initialHooksConfig;
}
function T2t() {
  return y1(), e().current().policyHooksConfig ?? "unreadable";
}
function uWn() {
  return y1(), e().current().userHooksConfig ?? ((0, import_chunk_wx2mpa0f.fb)() ? (0, import_chunk_2yx6c1y2._e)("userSettings")?.hooks ?? {} : {});
}
