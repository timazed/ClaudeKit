const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_ag2pf657_exports = {};
__export(chunk_ag2pf657_exports, {
  H5r: () => H5r,
  J4o: () => J4o,
  K_e: () => K_e,
  M5r: () => M5r,
  Nnr: () => Nnr,
  OCn: () => OCn,
  PCn: () => PCn,
  Q4o: () => Q4o,
  SDt: () => SDt,
  X4o: () => X4o,
  Z4o: () => Z4o,
  _gt: () => _gt,
  aZs: () => aZs,
  e3o: () => e3o,
  fie: () => fie,
  ggt: () => ggt,
  iXt: () => iXt,
  iZs: () => iZs,
  xCn: () => xCn,
  zJ: () => zJ
});
module.exports = __toCommonJS(chunk_ag2pf657_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_kc209sah = require("/$bunfs/root/chunk-kc209sah.js");
var import_chunk_mh32mevx = require("/$bunfs/root/chunk-mh32mevx.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_os = require("os");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
function zJ(e) {
  return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}
var M5r = 1, H5r = "unattended-serving:v1:auto-arm-classifier", D = "unattended-serving-consent.json", T = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ version: (0, import_chunk_adx6804h.v)(M5r), choice: (0, import_chunk_adx6804h.F)(["accepted", "declined"]), terms: (0, import_chunk_adx6804h.n)(), decidedAt: (0, import_chunk_adx6804h.n)(), hostname: (0, import_chunk_adx6804h.n)() }));
function m() {
  return (0, import_path.join)((0, import_os.homedir)(), ".claude", "state", D);
}
function xCn(e = (0, import_os.hostname)()) {
  return (0, import_chunk_mh32mevx.oGe)(zJ(e));
}
function X4o() {
  return `change it in /config, or delete ${(0, import_chunk_n2dbhmj2.os)(m())} to be asked again`;
}
function b() {
  return { readText: async () => {
    try {
      return await (0, import_chunk_8j3h6yzg.Vn)().read(m());
    } catch (e) {
      if ((0, import_chunk_jv7av99m.J)(e)) return;
      throw e;
    }
  }, writeText: async (e) => {
    let r = m();
    await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_path.dirname)(r), 448), await (0, import_chunk_8j3h6yzg.Vn)().atomicWrite(r, e, 384);
  }, now: () => /* @__PURE__ */ new Date(), hostname: import_os.hostname };
}
async function ggt(e) {
  let r = e === void 0 ? i() : void 0, o = Date.now(), a = r?.writes, { choice: s, unreadable: g, staleYes: l } = await E(e ?? b()), f = r !== void 0 && (0, import_chunk_2yx6c1y2.yB)() && await (0, import_chunk_kc209sah.lZs)((0, import_chunk_3t7ve0wy.jBl)()), S = f && (await e3o({ start: true })).confined;
  if (r !== void 0 && a === r.writes && (r.view === void 0 || !u(r) || o >= r.view.readAt)) {
    if (r.view = { choice: s, readAt: o, unreadable: g, staleYes: l === true, hostAllows: S, grantOutsideSandbox: f && !S }, u(r)) r.staleUnresolved = false;
  }
  return s;
}
async function E(e) {
  let r;
  try {
    r = await e.readText();
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`unattended-serving consent: store unreadable (${(0, import_chunk_jv7av99m.d)(o)})`, { level: "warn" }), { choice: "unset", unreadable: true };
  }
  if (r === void 0) return { choice: "unset", unreadable: false };
  try {
    let o = T().safeParse((0, import_chunk_w578pjby.te)(r));
    if (!o.success) return { choice: "unset", unreadable: true };
    let a = o.data.choice === "declined" || zJ(o.data.hostname) === zJ(e.hostname()) && o.data.terms === H5r;
    return { choice: a ? o.data.choice : "unset", unreadable: false, staleYes: !a && o.data.choice === "accepted" };
  } catch {
    return { choice: "unset", unreadable: true };
  }
}
async function _gt(e, r) {
  if (e === "accepted" && fie()) return (0, import_chunk_w578pjby.t)("unattended-serving consent: a Yes while settings turn unattended serving off is not stored", { level: "warn" }), false;
  let o = r === void 0 ? i() : void 0, a = r ?? b();
  try {
    if (await a.writeText((0, import_chunk_w578pjby._)({ version: M5r, choice: e, terms: H5r, decidedAt: a.now().toISOString(), hostname: zJ(a.hostname()) }, null, 2) + `
`), o !== void 0) o.writes += 1, o.view = { choice: e, readAt: Date.now(), unreadable: false, staleYes: false, hostAllows: o.view?.hostAllows === true, grantOutsideSandbox: o.view?.grantOutsideSandbox === true }, o.staleUnresolved = false;
    return true;
  } catch (s) {
    return (0, import_chunk_w578pjby.t)(`unattended-serving consent: answer not saved (${(0, import_chunk_jv7av99m.d)(s)})`, { level: "warn" }), false;
  }
}
var N = 3e3, M = new import_chunk_2904xtvq.j(() => ({ view: void 0, refresh: void 0, refreshStartedAt: void 0, abandoned: void 0, staleUnresolved: false, writes: 0 }));
function i() {
  return (0, import_chunk_f9x2f6cx.kr)(M);
}
function K_e() {
  let e = i();
  if (!u(e)) C(e);
  return e.view?.choice ?? "unset";
}
function u(e, r = Date.now()) {
  if (e.view === void 0) return false;
  let o = r - e.view.readAt;
  return o >= 0 && o <= N;
}
function iXt(e = Date.now()) {
  return u(i(), e);
}
var w = 1500;
async function PCn(e) {
  let r = i();
  if (u(r)) return;
  let o = C(r), a, s, g = e?.aborted === true ? Promise.resolve("gave_up") : new Promise((l) => {
    a = setTimeout((f) => f("gave_up"), w, l), s = () => l("gave_up"), e?.addEventListener("abort", s, { once: true });
  });
  if (await Promise.race([o, g]), clearTimeout(a), s !== void 0) e?.removeEventListener("abort", s);
  if (!u(r)) r.staleUnresolved = true, x(r, o);
}
function x(e, r) {
  if (e.refresh !== r || e.abandoned !== void 0) return false;
  return e.refresh = void 0, e.refreshStartedAt = void 0, e.abandoned = r, r.finally(() => {
    if (e.abandoned === r) e.abandoned = void 0;
  }), true;
}
function C(e) {
  if (e.refresh !== void 0) {
    if (e.refreshStartedAt !== void 0 && performance.now() - e.refreshStartedAt <= w || !x(e, e.refresh)) return e.refresh;
  }
  e.refreshStartedAt = performance.now();
  let r = ggt().catch(() => {
    return;
  }).finally(() => {
    if (e.refresh === r) e.refresh = void 0, e.refreshStartedAt = void 0;
  });
  return e.refresh = r, r;
}
function J4o() {
  return K_e() === "accepted";
}
function fie() {
  return Q4o() !== void 0;
}
function Q4o() {
  let e = (r) => r?.remoteTools?.allowUnattendedServing === false;
  return (0, import_chunk_2yx6c1y2.Rp)().some(e) || (0, import_chunk_2yx6c1y2.kK)().some(e) || e((0, import_chunk_2yx6c1y2._e)("policySettings")) ? "managed" : e((0, import_chunk_2yx6c1y2.vl)("userSettings")) ? "user" : void 0;
}
function Nnr() {
  K_e();
}
function Z4o() {
  let { view: e } = i();
  return e?.unreadable === true || e?.staleYes === true;
}
function iZs() {
  return i().view?.unreadable === true;
}
async function e3o({ start: e }) {
  try {
    let { classifyDeviceSandboxPosture: r, ensureDeviceSandboxPosture: o, readDeviceSandboxSnapshot: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-pjw6bdsz.js")));
    return e ? await o() : r(a(), { requireStarted: false });
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`unattended-serving consent: command sandbox could not be asked, taken as not confining (${(0, import_chunk_jv7av99m.d)(r)})`, { level: "warn" }), { confined: false, reason: "sandbox_failed_to_start" };
  }
}
function O() {
  return i().view?.hostAllows === true;
}
function aZs() {
  let e = i();
  return !e.staleUnresolved && e.view?.grantOutsideSandbox === true;
}
function U(e, r) {
  return r && e.view !== void 0 && e.view.choice === "unset" && !e.view.unreadable;
}
function SDt() {
  try {
    let e = i();
    return !fie() && !e.staleUnresolved && U(e, e.view?.hostAllows === true);
  } catch {
    return false;
  }
}
function OCn(e) {
  try {
    let r = J4o(), o = i();
    return fie() || o.staleUnresolved || !r && !U(o, e ?? O());
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`unattended-serving consent: read failed, call treated as unconsented (${(0, import_chunk_jv7av99m.d)(r)})`, { level: "warn" }), true;
  }
}
