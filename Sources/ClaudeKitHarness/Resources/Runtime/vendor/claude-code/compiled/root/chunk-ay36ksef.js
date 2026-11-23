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
var chunk_ay36ksef_exports = {};
__export(chunk_ay36ksef_exports, {
  D8i: () => D8i,
  EIr: () => EIr,
  H8i: () => H8i,
  IOs: () => IOs,
  JPo: () => JPo,
  L8i: () => L8i,
  M8i: () => M8i,
  OOs: () => OOs,
  SDl: () => SDl,
  VAt: () => VAt,
  _Dl: () => _Dl,
  cDl: () => cDl,
  fDl: () => fDl,
  gDl: () => gDl,
  hDl: () => hDl,
  mDl: () => mDl,
  pDl: () => pDl,
  r8: () => r8,
  thn: () => thn,
  uDl: () => uDl,
  yDl: () => yDl
});
module.exports = __toCommonJS(chunk_ay36ksef_exports);
var import_chunk_8jsh3ct2 = require("/$bunfs/root/chunk-8jsh3ct2.js");
var import_async_hooks = require("async_hooks");
var import_async_hooks2 = require("async_hooks");
var o = new import_async_hooks.AsyncLocalStorage();
async function M8i(e, r) {
  let a = { accepted: e, refused: false };
  return { result: await o.run(a, r), refused: a.refused };
}
function OOs(e) {
  return o.run({ accepted: true, refused: false }, e);
}
function r8() {
  let e = o.getStore();
  if (e === void 0) return true;
  return e.refused = true, !e.accepted;
}
var b = "bot_protected_tengu_reflective_ember", n = new import_chunk_8jsh3ct2.ex();
function cDl(e) {
  return n.register(e);
}
function H8i() {
  return n.read(b, true);
}
function VAt() {
  return H8i() && r8();
}
class d {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var s = new d();
function uDl(e) {
  return s.register(e);
}
function h() {
  let e = s.reader;
  if (!e) return true;
  try {
    let { value: r, source: a, defaultHost: t } = e("tengu_warm_sunrise", true);
    return r !== false || a !== "payload" || !t;
  } catch {
    return true;
  }
}
function JPo(e) {
  return e !== "-rm" || h();
}
class l {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var i = new l();
function fDl(e) {
  return i.register(e);
}
function c(e) {
  let r = i.reader;
  if (!r) return true;
  try {
    let { value: a, source: t, defaultHost: F } = r(e, true);
    return a !== false || t !== "payload" || !F;
  } catch {
    return true;
  }
}
function pDl() {
  return c("tengu_vast_puddle");
}
function mDl() {
  return c("tengu_snappy_tower");
}
class p {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var f = new p();
function hDl(e) {
  return f.register(e);
}
function EIr() {
  let e = f.reader;
  if (!e) return true;
  try {
    let { value: r, source: a, defaultHost: t } = e("tengu_staged_pumpkin", true);
    return r !== false || a !== "payload" || !t;
  } catch {
    return true;
  }
}
var _ = "tengu_nested_ripple";
class R {
  reader = null;
  register(e) {
    let r = this.reader;
    return this.reader = e, r;
  }
}
var g = new R();
function gDl(e) {
  return g.register(e);
}
function _Dl() {
  let e = g.reader;
  if (!e) return true;
  try {
    let { value: r, source: a, defaultHost: t } = e(_, true);
    return r !== false || a !== "payload" || !t;
  } catch {
    return true;
  }
}
var u = new import_async_hooks2.AsyncLocalStorage();
async function D8i(e) {
  let r = u.getStore() ?? { reading: "refuse", refusals: 0 }, a = r.refusals;
  return [await u.run(r, e), r.refusals > a ? r.firstReason : void 0];
}
function yDl(e) {
  let r = u.getStore();
  if (r !== void 0 && r.reading === "refuse") r.refusals += 1, r.firstReason ??= e;
}
function thn(e) {
  return u.run({ reading: "rule off", refusals: 0 }, e);
}
function L8i(e) {
  return u.run({ reading: "as bash reads it", refusals: 0 }, e);
}
function SDl() {
  let e = u.getStore()?.reading;
  return e === "rule off" || e === "as bash reads it";
}
function IOs() {
  return u.getStore()?.reading === "as bash reads it";
}
