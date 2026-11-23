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
var chunk_mw2v4wks_exports = {};
__export(chunk_mw2v4wks_exports, {
  CR: () => CR,
  NUt: () => NUt,
  Qwt: () => Qwt,
  V5: () => V5,
  V9e: () => V9e,
  lyr: () => lyr,
  sj: () => sj,
  t1: () => t1,
  vps: () => vps,
  z9e: () => z9e
});
module.exports = __toCommonJS(chunk_mw2v4wks_exports);
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_702cfzzh = require("/$bunfs/root/chunk-702cfzzh.js");
var import_chunk_n25gt70y = require("/$bunfs/root/chunk-n25gt70y.js");
var import_chunk_97tvwnfb = require("/$bunfs/root/chunk-97tvwnfb.js");
var import_chunk_478yxt5w = require("/$bunfs/root/chunk-478yxt5w.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_os = require("os");
function CR() {
  return;
}
function NUt(e = (0, import_chunk_702cfzzh.Fde)(), n) {
  if (CR() !== void 0) return false;
  return (0, import_chunk_478yxt5w.KAe)(e) || n !== void 0 && n !== (0, import_chunk_865at33z.tr)()?.accessToken && (0, import_chunk_478yxt5w.KAe)(e, true);
}
function V5() {
  let e = CR();
  if (e !== void 0) return e;
  if (!(0, import_chunk_zhr7rpv7.jn)() || !(0, import_chunk_865at33z.Rt)() || (0, import_chunk_97tvwnfb.P7)()) return;
  return (0, import_chunk_n25gt70y.Poe)((0, import_chunk_865at33z.tr)())?.accessToken;
}
async function t1(e) {
  if (!((0, import_chunk_m15w38ag.ne)() && e !== void 0)) return V5();
  let n = CR();
  if (n !== void 0) return n;
  if (!(0, import_chunk_zhr7rpv7.jn)() || !await (0, import_chunk_865at33z.vCt)(e) || (0, import_chunk_97tvwnfb.P7)()) return;
  return (0, import_chunk_n25gt70y.Poe)(await (0, import_chunk_865at33z.pp)(e))?.accessToken;
}
function z9e() {
  let e = V5();
  if (e === void 0 || CR() !== void 0) return e;
  return (0, import_chunk_xfj2cwfv.I6t)() ?? e;
}
async function V9e(e) {
  let n = await t1(e);
  if (n === void 0 || CR() !== void 0) return n;
  return await (0, import_chunk_xfj2cwfv.eB)() ?? n;
}
async function vps() {
  if (CR() !== void 0) return;
  if (await (0, import_chunk_xfj2cwfv.eB)() === null) await (0, import_chunk_xfj2cwfv.eB)();
}
async function lyr(e, n, r = false) {
  if (await (0, import_chunk_xfj2cwfv.Vx)(e, r ? "withheld" : "refused") === "not_held") return;
  return V9e(n);
}
function sj() {
  return (0, import_chunk_702cfzzh.Fde)() ?? (0, import_chunk_ephf358x.cn)().BASE_API_URL;
}
function Qwt() {
  let e = process.env.CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX || (0, import_os.hostname)();
  return t(e) || "remote-control";
}
function t(e) {
  return e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
