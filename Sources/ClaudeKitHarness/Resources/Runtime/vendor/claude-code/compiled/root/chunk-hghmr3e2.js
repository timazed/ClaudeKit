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
var chunk_hghmr3e2_exports = {};
__export(chunk_hghmr3e2_exports, {
  Iqe: () => Iqe,
  J0a: () => J0a,
  K4o: () => K4o,
  Q0a: () => Q0a,
  X0a: () => X0a,
  Z0a: () => Z0a,
  _Dt: () => _Dt,
  nZs: () => nZs,
  q4o: () => q4o,
  yDt: () => yDt
});
module.exports = __toCommonJS(chunk_hghmr3e2_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_hq807efw = require("/$bunfs/root/chunk-hq807efw.js");
function nZs() {
  return import_chunk_c203g5kd.s.terminal === "Apple_Terminal";
}
function _Dt() {
  return import_chunk_c203g5kd.s.terminal === "Apple_Terminal";
}
function Iqe() {
  return (0, import_chunk_hq807efw.N$)();
}
function X0a(e) {
  return e === "iTerm.app" || e === "Apple_Terminal";
}
function J0a() {
  return import_chunk_c203g5kd.s.terminal === "WezTerm";
}
function yDt() {
  return import_chunk_c203g5kd.s.terminal === "tmux";
}
function K4o() {
  return n();
}
function q4o() {
  return r();
}
function Q0a() {
  return r();
}
function r() {
  return n() && (import_chunk_c203g5kd.s.CLAUDE_BG_BACKEND === "daemon" || (0, import_chunk_ky5sghtd.yc)().versionReply === void 0);
}
function n() {
  let e = (0, import_chunk_vw137skj.Nne)();
  return !!import_chunk_c203g5kd.s.STY || e === "screen" || e === null && !!import_chunk_c203g5kd.s.TERM?.startsWith("screen");
}
function Z0a() {
  return (0, import_chunk_cg8dqz0a.x)() === "windows" || !!import_chunk_c203g5kd.s.WT_SESSION;
}
