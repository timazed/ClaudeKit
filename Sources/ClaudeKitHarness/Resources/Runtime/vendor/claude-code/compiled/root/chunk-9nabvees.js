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
var chunk_9nabvees_exports = {};
__export(chunk_9nabvees_exports, {
  Ijo: () => Ijo,
  Z2r: () => Z2r,
  eGr: () => eGr,
  oJn: () => oJn,
  sJn: () => sJn,
  tGr: () => tGr
});
module.exports = __toCommonJS(chunk_9nabvees_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_pkz4wjtb = require("/$bunfs/root/chunk-pkz4wjtb.js");
function Z2r() {
  let e = (0, import_chunk_bzyb60p0.UPn)();
  if (e === "essential_traffic" && (0, import_chunk_pkz4wjtb.Pii)()) {
    let a = (0, import_chunk_bzyb60p0.UPn)({ skipEssentialTrafficGate: true });
    return r(a);
  }
  return r(e);
}
function Ijo(e) {
  return e.source === "fallback" && e.credential !== void 0 && n(e.credential);
}
function l(e) {
  return e !== null && n((0, import_chunk_bzyb60p0.X4e)(e));
}
function n(e) {
  switch (e) {
    case "oauth":
      return false;
    case "api_key":
    case "profile":
    case "federation":
      return true;
  }
}
function r(e) {
  switch (e) {
    case "env_off":
    case "bare":
    case "essential_traffic":
    case "unix_socket":
    case "policy":
      return e;
    case "not_first_party":
      return i();
    case "not_claude_ai_auth":
    case "api_key_helper":
      return (0, import_chunk_2nv4wrez.Rn)("allow_model_catalog") ? null : "policy";
    case "no_org":
    case "no_account":
      return "served_applies";
    case null:
      if (l((0, import_chunk_bzyb60p0.tQ)())) return (0, import_chunk_865at33z.b7e)()?.source === "served" ? "served_applies" : null;
      return "served_applies";
  }
}
function i() {
  let e = (0, import_chunk_zhr7rpv7.ve)();
  if (e === "gateway") return "cloud_gateway";
  let a = (0, import_chunk_zhr7rpv7.RI)(e), o = !a && (0, import_chunk_zhr7rpv7.jn)(), t = a ? "platform_flag_off" : o && !(0, import_chunk_pkz4wjtb.Pii)() ? "gateway_flag_off" : null;
  if (t !== null && (0, import_chunk_bzyb60p0.mZr)("published") === "off") return t;
  if ((a || o) && !(0, import_chunk_865at33z.xVi)()) return "release_off";
  if ((0, import_chunk_865at33z.dzt)(e) && !d(e)) return "release_off";
  return null;
}
function d(e) {
  return (0, import_chunk_865at33z.SAl)().includes(e) || (0, import_chunk_69qhefwa.Ne)(import_chunk_c203g5kd.s.CLAUDE_CODE_MODEL_CATALOG);
}
function oJn() {
  return Z2r() === null;
}
function eGr() {
  return (0, import_chunk_zhr7rpv7.Ss)() && !(0, import_chunk_f9x2f6cx.Y)() && (0, import_chunk_bzyb60p0.mZr)("published") !== "off";
}
function tGr() {
  return (0, import_chunk_zhr7rpv7.jn)() || (0, import_chunk_zhr7rpv7.RI)() ? (0, import_chunk_bzyb60p0.mZr)("published") : "primary";
}
function sJn() {
  if (!oJn()) return "off";
  return tGr();
}
