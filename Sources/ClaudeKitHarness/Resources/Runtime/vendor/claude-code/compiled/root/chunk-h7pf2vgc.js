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
var chunk_h7pf2vgc_exports = {};
__export(chunk_h7pf2vgc_exports, {
  _Kr: () => _Kr,
  gKr: () => gKr,
  jPa: () => jPa,
  p8s: () => p8s
});
module.exports = __toCommonJS(chunk_h7pf2vgc_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_d4d5q2mn = require("/$bunfs/root/chunk-d4d5q2mn.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var p8s = (o) => o.find((m) => m !== false) || void 0;
function d() {
  let { source: o } = (0, import_chunk_865at33z.xa)();
  return o === "CLAUDE_CODE_OAUTH_TOKEN" || o === "CLAUDE_CODE_OAUTH_TOKEN_FILE_DESCRIPTOR";
}
var p = () => (0, import_chunk_865at33z.xa)().source === "CCR_OAUTH_TOKEN_FILE" && (0, import_chunk_f9x2f6cx.QM)() && (0, import_chunk_865at33z.cc)();
var u = () => (0, import_chunk_3t7ve0wy.ate)() && !(0, import_chunk_3t7ve0wy.kk)() && (0, import_chunk_865at33z.cc)() && (d() || p());
var gKr = () => (0, import_chunk_865at33z.eee)() && !(0, import_chunk_f9x2f6cx.Hn)() && ((0, import_chunk_3t7ve0wy.Dw)() && (0, import_chunk_865at33z.xa)().source === "CLAUDE_CODE_OAUTH_TOKEN" || u());
var l = () => (0, import_chunk_jhdsf4g3.W$t)() || gKr();
var jPa = () => import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE ? "cloud-session" : "signed-out";
var _Kr = () => p8s([(0, import_chunk_zhr7rpv7.ve)() !== "firstParty" && "third-party", (0, import_chunk_2gtmjt3y.Xn)() && "bare", (0, import_chunk_k449cc64.wt)() && "traffic-off", !(0, import_chunk_2nv4wrez.Rn)(import_chunk_d4d5q2mn.eTn) && "policy", !l() && jPa()]);
