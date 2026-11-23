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
var chunk_s12gh88k_exports = {};
__export(chunk_s12gh88k_exports, {
  K$n: () => K$n,
  Qwr: () => Qwr,
  WFi: () => WFi,
  bgl: () => bgl,
  eys: () => eys,
  fyo: () => fyo,
  pyo: () => pyo,
  tys: () => tys,
  uyo: () => uyo
});
module.exports = __toCommonJS(chunk_s12gh88k_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_ddfyyyy7 = require("/$bunfs/root/chunk-ddfyyyy7.js");
function K$n() {
  let n = (0, import_chunk_3t7ve0wy.fh)();
  return n ? { entrypoint: n.toLowerCase().slice(0, 64) } : {};
}
function eys() {
  let n = (0, import_chunk_ddfyyyy7.h1i)();
  return n && !(0, import_chunk_3t7ve0wy.nA)() ? { session_id: n } : {};
}
var WFi = 36e5;
function uyo() {
  let n = (0, import_chunk_0rkwgmhx.se)().sessionHintsRefusedAt;
  if (n !== void 0 && Date.now() - n < WFi) return {};
  return { ...K$n(), ...eys() };
}
function fyo() {
  (0, import_chunk_0rkwgmhx.se)().sessionHintsRefusedAt = Date.now();
}
var tys = ["entrypoint", "session_id", "request_id"], u = new Set(tys);
function pyo(n, s, i) {
  let o = tys.filter((t) => i[t] !== void 0);
  if (n !== 400 || o.length === 0) return [];
  let e = (0, import_chunk_ddfyyyy7.U7)(s);
  if (!import_chunk_ddfyyyy7.e2e.test(e)) return [];
  let r = o.filter((t) => (0, import_chunk_ddfyyyy7.Fln)(e, t));
  if (r.length > 0) return r;
  return Object.keys(i).some((t) => !u.has(t) && (0, import_chunk_ddfyyyy7.Fln)(e, t)) ? [] : o;
}
function Qwr(n) {
  return n.includes("entrypoint") || n.includes("session_id");
}
function bgl(n) {
  let { entrypoint: s, session_id: i, request_id: o, ...e } = n;
  return e;
}
