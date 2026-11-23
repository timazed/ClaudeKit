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
var chunk_wtm85h0y_exports = {};
__export(chunk_wtm85h0y_exports, {
  G6n: () => G6n,
  IHl: () => IHl,
  MHl: () => MHl,
  Nf: () => Nf,
  PXe: () => PXe,
  S3l: () => S3l,
  S9i: () => S9i,
  X6t: () => X6t,
  Y0: () => Y0,
  Yc: () => Yc,
  Z4: () => Z4,
  _9i: () => _9i,
  _z: () => _z,
  cD: () => cD,
  iB: () => iB,
  j1: () => j1,
  jR: () => jR,
  lK: () => lK,
  lT: () => lT,
  nnd: () => nnd,
  ond: () => ond,
  rnd: () => rnd,
  snd: () => snd,
  xXe: () => xXe,
  y3l: () => y3l,
  y9i: () => y9i,
  yz: () => yz,
  z6n: () => z6n
});
module.exports = __toCommonJS(chunk_wtm85h0y_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ds5wjsjg = require("/$bunfs/root/chunk-ds5wjsjg.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_async_hooks = require("async_hooks");
var import_child_process = require("child_process");
var u = new import_async_hooks.AsyncLocalStorage();
function j1() {
  return u.getStore();
}
function IHl(e, t) {
  return u.run(e, t);
}
function _z() {
  return u.getStore() !== void 0;
}
function MHl(e) {
  return { ...e, isInProcess: true };
}
function cD() {
  let e = j1();
  if (e) return e.parentSessionId;
  let t = r();
  return t.dynamicTeamContext?.parentSessionId ?? t.cliParentSessionId;
}
class g {
  cliParentSessionId = void 0;
  dynamicTeamContext = null;
  ambientMarkerProbe = f(C);
  isChildSessionMarkerAmbientInTmux = () => this.ambientMarkerProbe() === "ambient";
  setCliParentSessionId(e) {
    this.cliParentSessionId = e;
  }
  setDynamicTeamContext(e) {
    this.dynamicTeamContext = e;
  }
  setAmbientMarkerProbe(e) {
    this.ambientMarkerProbe = f(e);
  }
}
var y3l = new import_chunk_2904xtvq.j(() => new g());
function r() {
  return y3l.of((0, import_chunk_f9x2f6cx.N)().host);
}
function nnd(e) {
  r().setCliParentSessionId(e);
}
function rnd(e) {
  r().setDynamicTeamContext(e);
}
function G6n() {
  let e = r(), t = e.dynamicTeamContext?.parentSessionId;
  if (t !== void 0 && t !== "") return { sessionId: t, via: "teammate" };
  let n = e.cliParentSessionId;
  return n !== void 0 && n !== "" ? { sessionId: n, via: "launch" } : void 0;
}
function ond() {
  r().setDynamicTeamContext(null);
}
function lT() {
  return r().dynamicTeamContext;
}
function iB() {
  let e = j1();
  if (e) return e.agentId;
  return r().dynamicTeamContext?.agentId;
}
function jR() {
  let e = j1();
  if (e) return e.agentName;
  return r().dynamicTeamContext?.agentName;
}
function Nf(e) {
  let t = j1();
  if (t) return t.teamName;
  let { dynamicTeamContext: n } = r();
  if (n?.teamName) return n.teamName;
  return e?.teamName;
}
function Yc() {
  if (j1()) return true;
  let { dynamicTeamContext: t } = r();
  return !!(t?.agentId && t?.teamName);
}
function yz(e) {
  return e !== void 0 || Yc() || import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION;
}
function X6t() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_FORCE_SESSION_PERSISTENCE) return false;
  if (!(import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION && (0, import_chunk_f9x2f6cx.Cl)() && !Yc())) return false;
  return !r().isChildSessionMarkerAmbientInTmux();
}
function _9i() {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION) return false;
  if (process.stdin.isTTY || process.stdout.isTTY) return false;
  if (!(0, import_chunk_3t7ve0wy.DBl)()) return false;
  return r().ambientMarkerProbe() === "absent";
}
function lK() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_CHILD_SESSION) return true;
  if (!import_chunk_c203g5kd.s.CLAUDECODE) return false;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_PROMPT_HISTORY || !process.stdin.isTTY && !process.stdout.isTTY;
}
function snd(e) {
  r().setAmbientMarkerProbe(e === null ? C : () => {
    let t = e();
    return t === true ? "ambient" : t === false ? "absent" : t;
  });
}
function f(e) {
  let t = null;
  return () => {
    if (t === null) try {
      t = e();
    } catch {
      t = "unknown";
    }
    return t;
  };
}
function C() {
  if (!import_chunk_c203g5kd.s.TMUX) return "absent";
  let e = (0, import_chunk_ds5wjsjg.m2)("tmux");
  if (e === null) return "unknown";
  let t;
  try {
    t = (0, import_child_process.spawnSync)(e, ["show-environment", "-g"], { encoding: "utf8", timeout: 250, stdio: ["ignore", "pipe", "ignore"], cwd: void 0, env: (0, import_chunk_r6r2wdsw.Hs)(), windowsHide: true });
  } catch {
    return "unknown";
  }
  if (t.status !== 0) return "unknown";
  return S3l(t.stdout) ? "ambient" : "absent";
}
function S3l(e) {
  return e.split(`
`).some((t) => t.startsWith("CLAUDE_CODE_CHILD_SESSION="));
}
function Y0() {
  let e = j1();
  if (e) return e.color;
  return r().dynamicTeamContext?.color;
}
function y9i() {
  let e = j1();
  if (e) return e.planModeRequired;
  let { dynamicTeamContext: t } = r();
  if (t !== null) return t.planModeRequired;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_PLAN_MODE_REQUIRED;
}
function xXe(e) {
  if (!e) return false;
  let { leadAgentId: t, teammates: n } = e;
  return Object.keys(n).some((a) => a !== t);
}
function Z4(e) {
  if (!e?.leadAgentId) return false;
  let t = iB(), n = e.leadAgentId;
  if (t === n) return true;
  if (!t) return true;
  return false;
}
function PXe(e) {
  for (let t of Object.values(e.tasks)) if (t.type === "in_process_teammate" && t.status === "running") return true;
  return false;
}
function z6n(e) {
  for (let t of Object.values(e.tasks)) if (t.type === "in_process_teammate" && t.status === "running" && !t.isIdle) return true;
  return false;
}
function S9i(e, t) {
  let n = [];
  for (let [a, o] of Object.entries(t.tasks)) if (o.type === "in_process_teammate" && o.status === "running" && !o.isIdle) n.push(a);
  if (n.length === 0) return Promise.resolve();
  return new Promise((a) => {
    let o = n.length, d = () => {
      if (o--, o === 0) a();
    };
    e((l) => {
      let m = { ...l.tasks };
      for (let c of n) {
        let i = m[c];
        if (i && i.type === "in_process_teammate") if (i.isIdle) d();
        else m[c] = { ...i, onIdleCallbacks: [...i.onIdleCallbacks ?? [], d] };
      }
      return { ...l, tasks: m };
    });
  });
}
