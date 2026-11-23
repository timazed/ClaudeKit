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
var chunk_dfgwgq6h_exports = {};
__export(chunk_dfgwgq6h_exports, {
  A2o: () => A2o,
  Ava: () => Ava,
  C2o: () => C2o,
  CEn: () => CEn,
  CJn: () => CJn,
  Cva: () => Cva,
  Eva: () => Eva,
  JGr: () => JGr,
  Pva: () => Pva,
  QGr: () => QGr,
  Rva: () => Rva,
  Tva: () => Tva,
  XGr: () => XGr,
  ZGr: () => ZGr,
  cKs: () => cKs,
  dKs: () => dKs,
  det: () => det,
  ezr: () => ezr,
  kva: () => kva,
  lKs: () => lKs,
  nzr: () => nzr,
  tzr: () => tzr,
  vva: () => vva,
  w$e: () => w$e,
  wva: () => wva,
  xva: () => xva
});
module.exports = __toCommonJS(chunk_dfgwgq6h_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_2kw0fwms = require("/$bunfs/root/chunk-2kw0fwms.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_z2xw6net = require("/$bunfs/root/chunk-z2xw6net.js");
var import_chunk_zd24r3fj = require("/$bunfs/root/chunk-zd24r3fj.js");
var import_chunk_2mq2bbe7 = require("/$bunfs/root/chunk-2mq2bbe7.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_mj4h1wdm = require("/$bunfs/root/chunk-mj4h1wdm.js");
function C2o() {
  return (0, import_chunk_3t7ve0wy.ta)() && !(0, import_chunk_865at33z.b)("tengu_melodic_ember", true);
}
function wva(e, r) {
  if (!(0, import_chunk_3t7ve0wy.ta)()) return () => {
  };
  let o = e();
  return (0, import_chunk_865at33z.ys)(() => {
    let t = e(), n = o && !t;
    if (o = t, n) r();
  });
}
function XGr() {
  return (0, import_chunk_865at33z.Lt)("tengu_sdk_mcp_manifests", true);
}
var d = "sdk_mcp_tools_list_changed", A = "sdk_mcp_manifests";
function kva(e) {
  if (!(0, import_chunk_865at33z.b)("tengu_sdk_mcp_manifests", true)) return [];
  return e?.isRemoteTransport() !== true || (0, import_chunk_2kw0fwms.vTe)(e.sessionWriters()) && S() && _() ? [d, A] : [d];
}
function Eva(e) {
  return e.includes("sdkMcpServerManifests") ? p(e, 0) : void 0;
}
var m = ["payload", "request", "sdkMcpServerManifests"];
function p(e, r) {
  return (0, import_chunk_mj4h1wdm.Vdl)(e, (o, t) => {
    if (o !== m[r]) return t;
    return r === m.length - 1 ? "{}" : p(t, r + 1) ?? t;
  });
}
var a = 3e5, CEn = 3e5, T = 9e5;
function vva({ origin: e, frameCreatedAt: r, sessionWriters: o, now: t = Date.now() }) {
  if (e !== "host_per_send") return "no_origin_marker";
  let n = (0, import_chunk_2kw0fwms.Y8o)({ frameCreatedAt: r, sessionWriters: o, maxFrameAgeMs: a, maxStatementAgeMs: T, now: t });
  if (n !== void 0) return n;
  if (!S()) return "not_interactive_cowork_chat";
  return _() ? void 0 : "kill_switch_not_on";
}
function S() {
  return (0, import_chunk_3t7ve0wy.Sa)() && ((0, import_chunk_3t7ve0wy.Gm)() || (0, import_chunk_3t7ve0wy._S)());
}
function _() {
  return (0, import_chunk_865at33z.b)("tengu_sdk_mcp_manifests", false);
}
var M = "ui_", l = "ui_detach", E = "remote_cowork", h = /* @__PURE__ */ new Set([E, "remote_mobile"]), u = "vscode";
function JGr(e) {
  let r = (0, import_chunk_3t7ve0wy.Li)() ?? "";
  return !e.redactsWhatItPersists && (!e.isRemoteTransport || Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) && import_chunk_3t7ve0wy.Ura.has(r) && (import_chunk_f2dee02n.Ql.isSelfHostedRunnerChild || (0, import_chunk_6e68m1dj.hn)() && (h.has(r) || (0, import_chunk_bzyb60p0.Kzl)())));
}
function c() {
  return (0, import_chunk_m3wvjg0t.SE)() && !C2o();
}
function w$e(e) {
  return c() && JGr(e) && (!e.isRemoteTransport || (0, import_chunk_2kw0fwms.vTe)(e.sessionWriters));
}
function Tva(e, r) {
  return e.isRemoteTransport && !r && c() && JGr(e);
}
function lKs() {
  return (0, import_chunk_865at33z.b)("tengu_calm_osprey", true);
}
function det(e) {
  return typeof e === "string" && e.startsWith(M);
}
function Cva(e) {
  try {
    let r = e();
    return r.isRemoteTransport && r.leavesBelowFloor;
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), true;
  }
}
function QGr(e, r) {
  return (0, import_chunk_2kw0fwms.Y8o)({ frameCreatedAt: e.createdAt, sessionWriters: e.sessionWriters, maxFrameAgeMs: a, maxStatementAgeMs: CEn, now: r });
}
function ZGr(e, r, o = Date.now) {
  if (!det(e)) return false;
  try {
    let t = r(), n = !t.isRemoteTransport || (t.isAtFloor || t.leavesBelowFloor && e === l) && QGr(t, o()) === void 0, R = e === l && t.isAnySurfaceAttached;
    return !(JGr(t) && n && (R || c()));
  } catch (t) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(t)), true;
  }
}
function Ava(e, r) {
  return e.isRemoteTransport && r && (0, import_chunk_m3wvjg0t.SE)() && !(0, import_chunk_2kw0fwms.vTe)(e.sessionWriters);
}
function g() {
  try {
    return (0, import_chunk_5zps0wmn.Qi)("prompt.submit", void 0, (0, import_chunk_865at33z.ce)().loadedModules.filter((e) => !(0, import_chunk_59mwkeke.yd)(e)));
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), true;
  }
}
function dKs() {
  return g() || (0, import_chunk_z2xw6net.o1)() || (0, import_chunk_2mq2bbe7.EMt)();
}
function cKs() {
  return dKs() || !f();
}
function Rva() {
  try {
    return f() && !(0, import_chunk_0w2wb7gk.Zle)() && !(0, import_chunk_5zps0wmn.Qi)("prompt.edit") && (0, import_chunk_bzyb60p0.ENt)("ui_prompt_read").length > 0;
  } catch (e) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), false;
  }
}
function f() {
  let e = (0, import_chunk_865at33z.ce)();
  return !e.hookRegistrationOwed && e.hookRegistrationInFlight === void 0 && !(0, import_chunk_zddv3vvj.nZ)();
}
function CJn(e) {
  try {
    let r = e(), o = (0, import_chunk_3t7ve0wy.Li)();
    if (!(w$e(r) && (!r.isRemoteTransport || o === E || (0, import_chunk_bzyb60p0.Q0t)() || import_chunk_f2dee02n.Ql.isSelfHostedRunnerChild && import_chunk_3t7ve0wy.ayn.has(o ?? "")))) return [];
    return cKs() ? [import_chunk_zd24r3fj.gKs, import_chunk_zd24r3fj.Gva] : [import_chunk_zd24r3fj.gKs];
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), [];
  }
}
function ezr(e) {
  return CJn(e).length > 0 ? [import_chunk_zd24r3fj.jva] : [];
}
function tzr(e) {
  return [];
}
function A2o(e, r) {
  let o = (0, import_chunk_sjqze7qg.Nfe)(e);
  return (0, import_chunk_5zps0wmn.Qi)(import_chunk_sjqze7qg.Jw, r === u ? { component: o, surface: r } : { component: o });
}
function xva() {
  try {
    if (!(0, import_chunk_865at33z.ce)().loadedModules.every(import_chunk_59mwkeke.hu)) return;
    return (0, import_chunk_xfj2cwfv.FPs)().options.filter((e) => !A2o(e, "desktop"));
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e));
    return;
  }
}
function Pva(e) {
  return e === u ? (0, import_chunk_865at33z.ce)().hookRegistrationInFlight?.catch(() => {
  }) : void 0;
}
function nzr(e) {
  try {
    if (!(0, import_chunk_3t7ve0wy.ta)() || !w$e(e()) || !f()) return [];
    return [import_chunk_zd24r3fj._Ks, ...(0, import_chunk_xfj2cwfv.FPs)().options.filter((r) => A2o(r, u)).map((r) => `${import_chunk_zd24r3fj._Ks}:${r}`)];
  } catch (r) {
    return (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(r)), [];
  }
}
