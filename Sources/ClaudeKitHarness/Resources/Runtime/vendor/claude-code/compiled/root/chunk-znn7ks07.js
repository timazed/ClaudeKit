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
var chunk_znn7ks07_exports = {};
__export(chunk_znn7ks07_exports, {
  Akr: () => Akr,
  Hl: () => Hl,
  yRe: () => yRe,
  z0e: () => z0e
});
module.exports = __toCommonJS(chunk_znn7ks07_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_8ewjdpbn = require("/$bunfs/root/chunk-8ewjdpbn.js");
var import_chunk_pqpxa7em = require("/$bunfs/root/chunk-pqpxa7em.js");
function Hl(e = "send") {
  if (e === "send" && (0, import_chunk_8ewjdpbn.Kp)().messagingBeyondOwnAgentsDisabled) return false;
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_HARBOR_KITE;
  if (r !== void 0) return (0, import_chunk_69qhefwa.Ne)(r);
  if ((0, import_chunk_cg8dqz0a.x)() === "windows" && !(0, import_chunk_865at33z.b)("tengu_harbor_kite_win", true)) return false;
  return (0, import_chunk_865at33z.b)("tengu_harbor_kite", true);
}
function yRe(e) {
  if ((0, import_chunk_865at33z.J7e)("tengu_cuddly_willow", true)) return false;
  if (e?.flagsSettled === false && !((0, import_chunk_865at33z.Wxr)("tengu_cuddly_willow") === true && (0, import_chunk_pqpxa7em.KG)()) && (0, import_chunk_865at33z.gn)("tengu_cuddly_willow", true).source === "fallback") return false;
  return (0, import_chunk_865at33z.b)("tengu_cuddly_willow", true);
}
var Akr = "Cross-session messaging is not available in this session.";
function z0e() {
  return (0, import_chunk_865at33z.b)("tengu_ethereal_curry", true);
}
