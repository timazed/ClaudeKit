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
var chunk_6e68m1dj_exports = {};
__export(chunk_6e68m1dj_exports, {
  AMo: () => AMo,
  Agn: () => Agn,
  GKn: () => GKn,
  HHr: () => HHr,
  KQi: () => KQi,
  MHr: () => MHr,
  Qp: () => Qp,
  RMo: () => RMo,
  Ru: () => Ru,
  cEe: () => cEe,
  f1l: () => f1l,
  fT: () => fT,
  g1l: () => g1l,
  h1l: () => h1l,
  h3: () => h3,
  hn: () => hn,
  jKn: () => jKn,
  jm: () => jm,
  m1l: () => m1l,
  ny: () => ny,
  p1l: () => p1l,
  qQi: () => qQi,
  qg: () => qg,
  r$: () => r$,
  u1l: () => u1l,
  uL: () => uL,
  xKt: () => xKt
});
module.exports = __toCommonJS(chunk_6e68m1dj_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_path = require("path");
function jKn(e) {
  if (!/^[A-Za-z]:[\\/]/.test(e)) return [];
  let r = (0, import_chunk_z6pfqf6e.zh)(e.slice(0, 3));
  if (r == null || !(0, import_chunk_z6pfqf6e.$r)(r)) return [];
  let n = (0, import_chunk_z6pfqf6e.zh)(e);
  if (n == null || !(0, import_chunk_z6pfqf6e.$r)(n)) return [];
  let t = (0, import_chunk_z6pfqf6e.RL)(r), o = (0, import_chunk_z6pfqf6e.RL)(n);
  if (t == null || o == null || t !== o) return [];
  return [e, n];
}
function ny() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}
function hn() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === void 0;
}
function Qp() {
  return (hn() || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") && !ny();
}
function AMo() {
  return hn() || false;
}
function MHr() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && !(0, import_chunk_f9x2f6cx.st)();
}
function Ru() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc";
}
function fT() {
  return hn() || Ru();
}
function qg() {
  return Ru() && ny();
}
function xKt() {
  return false;
}
function u1l(e) {
  return qg() && e === void 0 ? ["memory"] : void 0;
}
function f1l(e, r) {
  return !(e && qg() && Boolean(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID) && !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_WORKING_SYNC) ? "not_admitted" : r === import_chunk_h3s25p5k.x2 ? "admitted" : "moved_directory";
}
function cEe() {
  return Ru() && (0, import_chunk_f9x2f6cx.Daa)();
}
function p1l() {
  return KQi() && !import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION;
}
function KQi() {
  return qg() && (0, import_chunk_f9x2f6cx.INs)() !== false;
}
function m1l() {
  return (0, import_chunk_f9x2f6cx.INs)() === "default";
}
function Agn() {
  return import_chunk_h3s25p5k.x2;
}
var i = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear()), d = 6e4;
function HHr(e) {
  let r = i.get(e);
  if (r !== void 0 && (r.share !== void 0 || Date.now() - r.askedAt < d)) return r.share ?? e;
  let n = jKn(e)[1];
  return i.set(e, { share: n, askedAt: Date.now() }), n ?? e;
}
function GKn(e, r) {
  return (0, import_path.isAbsolute)(e) && !(0, import_chunk_z6pfqf6e.rp)(e) && !(0, import_chunk_z6pfqf6e.fa)(e, r);
}
function h1l() {
  return Ru() && (0, import_chunk_f9x2f6cx.Laa)();
}
function jm() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
}
function r$() {
  return jm() && !(0, import_chunk_3t7ve0wy.Yg)();
}
function RMo(e) {
  return e.hostedWorker || jm() && e.transportPersists !== false;
}
function h3() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ORIGIN === "review";
}
function uL() {
  return qg() && h3();
}
function qQi() {
  return uL() ? ["CLAUDE_CODE_SESSION_ACCESS_TOKEN", "CLAUDE_SESSION_INGRESS_TOKEN_FILE"] : [];
}
function g1l(e, r) {
  if (!uL()) return false;
  if (e === "CLAUDE_CODE_SESSION_ACCESS_TOKEN") {
    if (r !== "") (0, import_chunk_f9x2f6cx.iVe)(r);
    return true;
  }
  if (e === "CLAUDE_CODE_OAUTH_TOKEN") {
    if (r !== "") (0, import_chunk_f9x2f6cx.w2)(r);
    return true;
  }
  return false;
}
