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
var chunk_2kg8bxyd_exports = {};
__export(chunk_2kg8bxyd_exports, {
  Cjr: () => Cjr,
  GGs: () => GGs,
  GIt: () => GIt,
  NIe: () => NIe,
  SKe: () => SKe,
  Tjr: () => Tjr,
  WIt: () => WIt,
  XZe: () => XZe,
  Y9t: () => Y9t,
  YZe: () => YZe,
  a$e: () => a$e,
  cSa: () => cSa,
  cWo: () => cWo,
  dWo: () => dWo,
  fSa: () => fSa,
  jGs: () => jGs,
  jIt: () => jIt,
  oXn: () => oXn,
  q9t: () => q9t,
  rXn: () => rXn,
  uSa: () => uSa,
  wkn: () => wkn,
  zGs: () => zGs,
  zse: () => zse
});
module.exports = __toCommonJS(chunk_2kg8bxyd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_5cey7gvv = require("/$bunfs/root/chunk-5cey7gvv.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_0f2gasyz = require("/$bunfs/root/chunk-0f2gasyz.js");
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_hq807efw = require("/$bunfs/root/chunk-hq807efw.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class c {
  value = void 0;
  get() {
    let e = (0, import_chunk_hq807efw.bDt)(), r = (0, import_chunk_f9x2f6cx.pf)(), i = r?.wheelFlood ?? jGs(), o = r ? import_chunk_c203g5kd.m1e.includes(r.terminal ?? "") : import_chunk_5cey7gvv.wC.isJetBrainsIdeTerminal(), t = r?.wtSession ?? !!import_chunk_c203g5kd.s.WT_SESSION, u = (0, import_chunk_hq807efw.N$)(), l = this.value;
    if (l && l.xtversion === (e ?? "(no reply)") && l.wheelFlood === i && l.jediTerm === o && l.wtSession === t && l.xtermJs === u) return l;
    let n = "darwin";
    return this.value = { useDecayCurve: !i && (u || n === "win32" || t), useAdaptiveDrain: u, base: o ? 2 : R(u, i, t), xtermJs: u, wheelFlood: i, jediTerm: o, termProgram: import_chunk_c203g5kd.s.TERM_PROGRAM ?? "unset", termProgramVersion: import_chunk_c203g5kd.s.TERM_PROGRAM_VERSION ?? "unset", xtversion: e ?? "(no reply)", wtSession: t, scrollSpeedEnv: import_chunk_c203g5kd.s.CLAUDE_CODE_SCROLL_SPEED ?? "unset", platform: n }, this.value;
  }
  invalidate() {
    this.value = void 0;
  }
}
var p = new import_chunk_2904xtvq.j(() => new c());
function zse() {
  return p.of((0, import_chunk_f9x2f6cx.N)().host).get();
}
function jGs() {
  if (process.env.CURSOR_TRACE_ID !== void 0) return true;
  if (import_chunk_c203g5kd.s.VSCODE_GIT_ASKPASS_MAIN?.includes("cursor")) return true;
  if (import_chunk_c203g5kd.s.TERM_PROGRAM === "vscode") {
    let e = _(import_chunk_c203g5kd.s.TERM_PROGRAM_VERSION);
    if (e !== null) return e >= 1092e3 && e < 1105e3;
  }
  return (0, import_chunk_hq807efw.bDt)()?.startsWith("xterm.js") ?? false;
}
function _(e) {
  if (!e) return null;
  let r = /^(\d+)\.(\d+)\.(\d+)/.exec(e);
  if (!r) return null;
  return +r[1] * 1e6 + +r[2] * 1e3 + +r[3];
}
function dWo(e, r, i) {
  return !r && (e || false || i) ? 3 : 1;
}
function R(e, r, i) {
  let o = dWo(e, r, i), t = import_chunk_c203g5kd.s.CLAUDE_CODE_SCROLL_SPEED;
  if (!t) return o;
  let u = parseFloat(t);
  return Number.isNaN(u) || u <= 0 ? o : Math.min(u, 20);
}
function rXn() {
  p.of((0, import_chunk_f9x2f6cx.N)().host).invalidate();
}
var D = (0, import_chunk_0f2gasyz.Jl)(0, "f");
function cSa() {
  return import_chunk_0f2gasyz.YN + import_chunk_0f2gasyz.WDl + import_chunk_0f2gasyz.Xx;
}
function GGs() {
  return import_chunk_0f2gasyz.YN + import_chunk_0f2gasyz.Xx;
}
function SKe(e) {
  return import_chunk_0f2gasyz.Xx + (import_chunk_0f2gasyz.rFe + (0, import_chunk_0f2gasyz.DOs)(1)).repeat(e) + import_chunk_0f2gasyz.Xx;
}
function Tjr(e) {
  let r = (0, import_chunk_0f2gasyz.dVn)() + (0, import_chunk_0f2gasyz.DOs)(1);
  return import_chunk_0f2gasyz.Xx + import_chunk_0f2gasyz.rFe + r.repeat(e) + import_chunk_0f2gasyz.Xx;
}
function uSa() {
  if (import_chunk_c203g5kd.s.TMUX && (0, import_chunk_ky5sghtd.nv)().get("synchronizedOutput").state === "pending") return;
  return YZe();
}
function WIt() {
  return f({ beforeTheAnswer: false });
}
function YZe() {
  return f({ beforeTheAnswer: true });
}
function fSa() {
  return import_chunk_c203g5kd.s.TMUX ? 1024 : 0;
}
function f({ beforeTheAnswer: e }) {
  if (import_chunk_c203g5kd.s.CLAUDE_BG_BACKEND === "daemon") return (0, import_chunk_f9x2f6cx.pf)()?.syncOutput !== false;
  if (!import_chunk_c203g5kd.s.TMUX && import_chunk_c203g5kd.s.CLAUDE_CODE_FORCE_SYNC_OUTPUT) return true;
  let r = (0, import_chunk_ky5sghtd.nv)().get("synchronizedOutput");
  if (r.state === "settled") return r.value;
  return e && r.likely;
}
function m(e = WIt()) {
  if (import_chunk_c203g5kd.s.CLAUDE_BG_BACKEND === "daemon") return false;
  return e && import_chunk_c203g5kd.s.TMUX == null && process.env.ZELLIJ == null && !import_chunk_5cey7gvv.wC.isJetBrainsIdeTerminal() && !(0, import_chunk_hq807efw.N$)() && import_chunk_c203g5kd.s.WT_SESSION == null;
}
function jIt() {
  let e = (0, import_chunk_f9x2f6cx.pf)()?.progressReporting;
  if (e !== void 0) return e;
  if (!process.stdout.isTTY) return false;
  if (import_chunk_c203g5kd.s.WT_SESSION) return false;
  if (import_chunk_c203g5kd.s.ConEmuANSI || import_chunk_c203g5kd.s.ConEmuPID || import_chunk_c203g5kd.s.ConEmuTask) return true;
  let r = (0, import_chunk_tvttgr51.hB)(import_chunk_c203g5kd.s.TERM_PROGRAM_VERSION);
  if (!r) return false;
  if (import_chunk_c203g5kd.s.TERM_PROGRAM === "ghostty") return (0, import_chunk_tvttgr51.Vb)(r.version, "1.2.0");
  if (import_chunk_c203g5kd.s.TERM_PROGRAM === "iTerm.app") return (0, import_chunk_tvttgr51.Vb)(r.version, "3.6.6");
  return false;
}
function E(e) {
  if (e != null) return import_chunk_ky5sghtd.eSi.includes(e);
  return (0, import_chunk_ky5sghtd.nv)().now("extendedKeys");
}
function oXn(e = import_chunk_c203g5kd.s.terminal, r = (0, import_chunk_ky5sghtd.nv)()) {
  if (import_chunk_c203g5kd.s.TMUX || import_chunk_c203g5kd.s.STY || !r.now("extendedKeys")) return false;
  return e === null || !import_chunk_ky5sghtd.OYa.includes(e) || r.confirmed("kittyKeyboard");
}
function XZe() {
  return !(0, import_chunk_vw137skj.Hq)() && (E() || (0, import_chunk_ky5sghtd.nv)().now("kittyKeyboard")) ? import_chunk_0f2gasyz.X8i : "";
}
function q9t() {
  return (0, import_chunk_vw137skj.Hq)() ? "" : import_chunk_0f2gasyz.YDl;
}
function Y9t(e) {
  return E() ? import_chunk_0f2gasyz.X8i + (e?.legacyKitty ? import_chunk_0f2gasyz.KDl : import_chunk_0f2gasyz.VDl) + import_chunk_0f2gasyz.qDl : "";
}
function wkn(e) {
  return import_chunk_mqj2w7ns.Znn + import_chunk_0f2gasyz.YN + import_chunk_0f2gasyz.Xx + Y9t(e);
}
function NIe() {
  return XZe() + import_chunk_mqj2w7ns.u1t + q9t();
}
var Cjr = 5e3;
function a$e() {
  return !!import_chunk_c203g5kd.s.WT_SESSION;
}
var cWo = m(YZe());
function d(e, r, i) {
  let o = performance.now(), t = e.slowestWrite;
  if (t === void 0 || o - r >= t.endedMs - t.startedMs) e.slowestWrite = { startedMs: r, endedMs: o, bytes: i };
}
function GIt(e, r) {
  if (e.stdoutDead) return;
  let i = performance.now(), o = Buffer.byteLength(r);
  try {
    e.stdout.write(r);
  } catch (t) {
    if (e.tolerateDeadStdout && (S(t) === "EIO" || S(t) === "EPIPE")) {
      e.stdoutDead = true, d(e, i, o);
      return;
    }
    throw t;
  }
  d(e, i, o);
}
function zGs(e, r, i = false, o, t = "", u = 0) {
  let l = o !== void 0 && o > 1 ? o - 1 : void 0;
  if (r.length === 0) {
    if (t !== "") GIt(e, t);
    return;
  }
  let n = "";
  for (let a of r) switch (a.type) {
    case "stdout":
      n += a.content;
      break;
    case "clear":
      if (a.count > 0) n += (0, import_chunk_0f2gasyz.shn)(a.count);
      break;
    case "clearTerminal":
      n += a.altScreen ? cSa() : import_chunk_5cey7gvv.wC.hasErasedRowsStayJoinedBug() ? Tjr(a.viewportRows) : SKe(a.viewportRows);
      break;
    case "cursorHide":
      n += import_chunk_mqj2w7ns.IQ;
      break;
    case "cursorShow":
      n += import_chunk_mqj2w7ns.x5;
      break;
    case "cursorMove":
      n += (0, import_chunk_0f2gasyz.o8)(a.x, l !== void 0 ? Math.max(-l, Math.min(l, a.y)) : a.y);
      break;
    case "cursorTo":
      n += (0, import_chunk_0f2gasyz.nFe)(a.col);
      break;
    case "carriageReturn":
      n += "\r";
      break;
    case "hyperlink":
      n += (0, import_chunk_vw137skj.t0n)(a.uri);
      break;
    case "styleStr":
      n += a.str;
      break;
  }
  if (!i && (n.length >= u || Buffer.byteLength(n) >= u)) n = import_chunk_mqj2w7ns.lZa + n + import_chunk_mqj2w7ns.Mao;
  GIt(e, t + n);
}
function S(e) {
  return e && typeof e === "object" && "code" in e ? String(e.code) : void 0;
}
