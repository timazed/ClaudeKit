const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it2) => {
    while (it2 = stack.pop()) {
      try {
        var result = it2[1] && it2[1].call(it2[2]);
        if (it2[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_9e5mdyfk_exports = {};
__export(chunk_9e5mdyfk_exports, {
  $Dn: () => $Dn,
  $nn: () => $nn,
  $ot: () => $ot,
  Aao: () => Aao,
  Aki: () => Aki,
  BDn: () => BDn,
  BW: () => BW,
  Bnn: () => Bnn,
  Bs: () => Bs,
  Cao: () => Cao,
  Cki: () => Cki,
  DCe: () => DCe,
  Eao: () => Eao,
  Ebt: () => Ebt,
  Eki: () => Eki,
  FDn: () => FDn,
  FO: () => FO,
  Fnn: () => Fnn,
  GDn: () => GDn,
  Gnn: () => Gnn,
  Gpr: () => Gpr,
  HCe: () => HCe,
  Hf: () => Hf,
  Hk: () => Hk,
  ICe: () => ICe,
  Iao: () => Iao,
  Iki: () => Iki,
  Is: () => Is,
  Jas: () => Jas,
  Jnn: () => Jnn,
  Jpr: () => Jpr,
  KDn: () => KDn,
  Kas: () => Kas,
  Knn: () => Knn,
  Kpr: () => Kpr,
  L6: () => L6,
  LDn: () => LDn,
  Lu: () => Lu,
  MCe: () => MCe,
  Mki: () => Mki,
  Mq: () => Mq,
  N6: () => N6,
  NDn: () => NDn,
  Oao: () => Oao,
  Oki: () => Oki,
  Pao: () => Pao,
  Pki: () => Pki,
  Qas: () => Qas,
  Qg: () => Qg,
  Qnn: () => Qnn,
  Qpr: () => Qpr,
  Rao: () => Rao,
  Rki: () => Rki,
  S5e: () => S5e,
  Ski: () => Ski,
  TS: () => TS,
  Tao: () => Tao,
  Tki: () => Tki,
  UDn: () => UDn,
  UW: () => UW,
  Unn: () => Unn,
  VDn: () => VDn,
  Vas: () => Vas,
  Vnn: () => Vnn,
  Vpr: () => Vpr,
  WDn: () => WDn,
  Wd: () => Wd,
  Wnn: () => Wnn,
  Xas: () => Xas,
  Xnn: () => Xnn,
  Xpr: () => Xpr,
  YDn: () => YDn,
  Yas: () => Yas,
  Ynn: () => Ynn,
  Ypr: () => Ypr,
  Zas: () => Zas,
  Zpr: () => Zpr,
  _ki: () => _ki,
  a1t: () => a1t,
  aN: () => aN,
  aZa: () => aZa,
  ap: () => ap,
  b5e: () => b5e,
  bbt: () => bbt,
  bki: () => bki,
  c1t: () => c1t,
  cDe: () => cDe,
  d1t: () => d1t,
  dDe: () => dDe,
  emr: () => emr,
  fDe: () => fDe,
  gki: () => gki,
  hki: () => hki,
  i1t: () => i1t,
  iZa: () => iZa,
  jDn: () => jDn,
  jnn: () => jnn,
  jpr: () => jpr,
  jv: () => jv,
  kbt: () => kbt,
  kki: () => kki,
  l1t: () => l1t,
  mki: () => mki,
  n1t: () => n1t,
  nZa: () => nZa,
  o1t: () => o1t,
  oZa: () => oZa,
  pki: () => pki,
  qDn: () => qDn,
  qF: () => qF,
  qas: () => qas,
  qnn: () => qnn,
  qpr: () => qpr,
  r1t: () => r1t,
  rU: () => rU,
  rZa: () => rZa,
  rv: () => rv,
  s1t: () => s1t,
  sZa: () => sZa,
  t1t: () => t1t,
  tZa: () => tZa,
  tmr: () => tmr,
  uDe: () => uDe,
  uWe: () => uWe,
  vao: () => vao,
  vki: () => vki,
  w5e: () => w5e,
  wSe: () => wSe,
  wbt: () => wbt,
  wki: () => wki,
  xao: () => xao,
  xki: () => xki,
  y5e: () => y5e,
  yki: () => yki,
  zDn: () => zDn,
  zas: () => zas,
  znn: () => znn,
  zpr: () => zpr
});
module.exports = __toCommonJS(chunk_9e5mdyfk_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_sdks5h78 = require("/$bunfs/root/chunk-sdks5h78.js");
var import_chunk_r3wrey46 = require("/$bunfs/root/chunk-r3wrey46.js");
var import_chunk_p6a07y1c = require("/$bunfs/root/chunk-p6a07y1c.js");
var import_chunk_d55td748 = require("/$bunfs/root/chunk-d55td748.js");
var import_chunk_bdxa2qdh = require("/$bunfs/root/chunk-bdxa2qdh.js");
var import_chunk_1vgtffrr = require("/$bunfs/root/chunk-1vgtffrr.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var import_path2 = require("path");
var import_promises = require("fs/promises");
var import_path3 = require("path");
var import_promises2 = require("fs/promises");
var import_path4 = require("path");
var import_promises3 = require("fs/promises");
function LDn(e) {
  return /^[A-Za-z0-9._/@#:+-]{1,100}$/.test(e);
}
(0, import_chunk_adx6804h.B)();
var _e = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ madeBy: (0, import_chunk_adx6804h.F)(["core", "mod"]), name: (0, import_chunk_adx6804h.n)(), vcs: (0, import_chunk_adx6804h.n)(), revision: (0, import_chunk_adx6804h.n)().optional(), branch: (0, import_chunk_adx6804h.n)().optional() }));
function KDn(e) {
  return _e().safeParse(e).data;
}
function HCe(e) {
  let r = e?.madeBy === "mod" ? e.branch : void 0;
  return r !== void 0 && LDn(r) ? r : void 0;
}
function Wnn(e) {
  let r = HCe(e);
  return e !== void 0 && (0, import_chunk_1vgtffrr.rfn)(e.vcs) ? { vcs: e.vcs, ...r !== void 0 && { branch: r } } : void 0;
}
var Rao = "work that an agent did in place is still kept in it", Vpr = "an agent may have left work in it before this resume", wki = "parallel agents sharing a checkout can overwrite each other's work. Edit only the files your task requires, re-read a file right before changing it, and do not revert or overwrite changes you did not make.";
function xao() {
  return `Note: you share this working directory with whoever started you and with other agents they run here. You have no separate copy, and ${wki}`;
}
function jnn({ vcs: e, branch: r }) {
  return `The agent worked in place, in the folder it was started from, with no separate copy. Its work is kept under ${e}${r === void 0 ? "" : `, branch ${(0, import_chunk_w578pjby._)(r)}`}.`;
}
function $ot(e) {
  return e?.split("/").some((r) => r.startsWith("-")) === true;
}
var Iao = "CLAUDE_BG_GATEWAY_WITHHELD";
function emr() {
  return (0, import_chunk_865at33z.Qt)() && Boolean(import_chunk_c203g5kd.s.CLAUDE_BG_GATEWAY_WITHHELD) && !import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL;
}
var ut = 1024, ct = /^[\p{L}\p{M}\p{N}/\\._~+@,:=-]+$/u;
function Ie() {
  let e = import_chunk_c203g5kd.s.CLAUDE_BG_GATEWAY_WITHHELD;
  return e && e.length <= ut && (0, import_path.isAbsolute)(e) && ct.test(e) ? (0, import_chunk_n2dbhmj2.os)(e) : void 0;
}
function pt() {
  let e = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR && (0, import_path.basename)(import_chunk_c203g5kd.s.CLAUDE_JOB_DIR);
  return e && /^[A-Za-z0-9_-]{1,64}$/.test(e) ? `\`claude respawn ${e}\`` : "`claude respawn <id>` (the id is in the agents view)";
}
var Te = "No LLM gateway: a gateway set in your shell isn't passed to a session opened from another folder.";
function oZa() {
  let e = Ie() ?? "this session's own folder";
  return `${Te} To fix, run ${pt()} from ${e} in another terminal where your gateway is set, or set ANTHROPIC_BASE_URL and its API key or token in a settings file's env block.`;
}
function xki(e) {
  return e.startsWith(`${Te} To fix, run `);
}
function Pki() {
  return `No LLM gateway: opened from another folder \xB7 respawn from ${Ie() ?? "its own folder"}`;
}
(0, import_chunk_adx6804h.B)();
function y5e(e, r) {
  let o = Math.min(e.length, r.length - 1);
  e: for (let l = o; l > 0; l--) {
    let u = e.length - l;
    for (let m = 0; m < l; m++) if (e[u + m] !== r[m]) continue e;
    return l;
  }
  return 0;
}
var ap = 1, jpr = 1, UW = /^[a-f0-9]{8}$/, nZa = /^[a-f0-9]{32}$/, mt = ["failed", "taken", "ended"], Fnn = /^(?:cse|session)_[A-Za-z0-9_-]{1,128}$/;
function Ne(e) {
  return !import_chunk_7cfjrnwy.Wz.test(e);
}
var ICe = "\x1B_cc-daemon-detach\x1B\\", ae = "\x1B\\", Re = "\x1B_cc-detach-msg;", Eao = "\x1B_cc-daemon-hint\x1B\\";
function $nn(e) {
  return Eao + e + Eao;
}
var ce = "\x1B_cc-d-imark;", gt = Buffer.from(ce, "latin1");
function Kas(e) {
  return ce + (0, import_chunk_w578pjby._)(e) + ae;
}
function mki(e, r, o) {
  let l = o?.maxPayload ?? 512, u = e.length > 0 ? Buffer.concat([e, r]) : r, m = [], g = [], b = 0, y = 0, h = -1, k = false;
  for (; ; ) {
    let T = u.indexOf(ce, y);
    if (T < 0) break;
    let O = T + ce.length, z = k ? -1 : h >= O ? h : h = u.indexOf(ae, O);
    if (z < 0) {
      k = true;
      let R = u.subarray(T);
      if (R.length > ce.length + l) {
        y = O;
        continue;
      }
      let U = false;
      for (let Z = O; Z < u.length; Z++) {
        let M = u[Z];
        if (M === 24 || M === 26 || M === 27 && Z < u.length - 1) {
          U = true;
          break;
        }
      }
      if (U) {
        y = O;
        continue;
      }
      return g.push(u.subarray(b, T)), { marks: m, carry: Buffer.from(R), cleaned: g.length === 1 ? g[0] : Buffer.concat(g) };
    }
    let H = false;
    if (z - O <= l) try {
      let R = (0, import_chunk_w578pjby.te)(u.subarray(O, z).toString("utf8"));
      if (R !== null && typeof R === "object" && (R.kind === "content_paint" || R.kind === "prompt_idle")) {
        if (H = true, o?.requireNonce === void 0 || R.nonce === o.requireNonce) m.push({ kind: R.kind, msgsLoaded: Unn(R.msgsLoaded), msgsInJsonl: Unn(R.msgsInJsonl), msgsRenderedAtFirstPaint: Unn(R.msgsRenderedAtFirstPaint) });
      }
    } catch {
    }
    if (H) g.push(u.subarray(b, T)), b = z + ae.length;
    y = H ? z + ae.length : O;
  }
  let x = u.subarray(y), L = y5e(x, gt);
  return g.push(u.subarray(b, u.length - L)), { marks: m, carry: L > 0 ? Buffer.from(x.subarray(x.length - L)) : Buffer.alloc(0), cleaned: g.length === 1 ? g[0] : Buffer.concat(g) };
}
function Unn(e) {
  return typeof e === "number" && Number.isInteger(e) && e >= 0 && e <= De ? e : void 0;
}
var De = 1e9, se = () => (0, import_chunk_adx6804h.E)().int().nonnegative().max(De).optional(), bt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ kind: (0, import_chunk_adx6804h.F)(["content_paint", "prompt_idle"]), msgsLoaded: se(), msgsInJsonl: se(), msgsRenderedAtFirstPaint: se() })), St = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ kind: (0, import_chunk_adx6804h.F)(["content_paint", "prompt_idle"]), msgsLoaded: se(), msgsInJsonl: se(), msgsRenderedAtFirstPaint: se() }));
function hki(e) {
  let r = St().safeParse(e);
  if (!r.success) return null;
  return { kind: r.data.kind, msgsLoaded: r.data.msgsLoaded, msgsInJsonl: r.data.msgsInJsonl, msgsRenderedAtFirstPaint: r.data.msgsRenderedAtFirstPaint };
}
function dDe(e) {
  if (!e) return ICe;
  return Re + e + ae + ICe;
}
function gki(e) {
  let r = e.indexOf(Re);
  if (r < 0) return;
  let o = r + Re.length, l = e.indexOf(ae, o);
  if (l < 0) return;
  return e.subarray(o, l).toString("utf8");
}
var wt = /* @__PURE__ */ new Set(["CLAUDE_CODE_DISABLE_AGENT_PROGRESS_SUMMARIES", "CLAUDE_CODE_DISABLE_MCP_TASKS", "CLAUDE_CODE_WEBFETCH_MCP_TOOL", "CLAUDE_CODE_WITHHOLD_PRODUCT_EVENTS", "DISABLE_ERROR_REPORTING"]);
function Be(e, r) {
  let o = {};
  for (let [l, u] of Object.entries((0, import_chunk_sdks5h78.jds)(e, r))) {
    if (wt.has(l.toUpperCase()) && u !== "1") continue;
    if (l.toUpperCase() === "ANTHROPIC_PROFILE") {
      if ((0, import_chunk_9b4aq7fb.jX)(u)) o[l] = u;
      continue;
    }
    if (l.toUpperCase() === import_chunk_t8x29mwc.Sg && !(0, import_chunk_t8x29mwc.S0e)(u)) continue;
    if (l.toUpperCase() === "ANTHROPIC_CONFIG_DIR") {
      let m = (0, import_chunk_z6pfqf6e.vF)(u);
      if ((0, import_chunk_sdks5h78.LTi)("ANTHROPIC_CONFIG_DIR", m) === void 0) o[l] = m;
      continue;
    }
    o[l] = l.toUpperCase() === "CLAUDE_CODE_PLUGIN_DIRS" ? u.split(import_path2.delimiter).map((m) => (0, import_chunk_z6pfqf6e.vF)(m.trim())).join(import_path2.delimiter) : u;
  }
  return o;
}
var vao = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ proto: (0, import_chunk_adx6804h.E)().int().min(jpr).max(ap), short: (0, import_chunk_adx6804h.n)().regex(UW), nonce: (0, import_chunk_adx6804h.n)().regex(UW).optional(), sessionId: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), createdAt: (0, import_chunk_adx6804h.E)(), source: (0, import_chunk_adx6804h.F)(import_chunk_r6r2wdsw.jYi).catch("fleet"), dispatchEntrypoint: (0, import_chunk_adx6804h.F)(import_chunk_r6r2wdsw.khn).optional().catch(void 0), cwd: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), launch: (0, import_chunk_adx6804h.zn)("mode", [(0, import_chunk_adx6804h.c)({ mode: (0, import_chunk_adx6804h.v)("prompt"), args: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).transform(import_chunk_sdks5h78.eAe), restoresTranscript: (0, import_chunk_adx6804h.P)().optional() }), (0, import_chunk_adx6804h.c)({ mode: (0, import_chunk_adx6804h.v)("resume"), sessionId: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), transcriptPath: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF).optional(), fork: (0, import_chunk_adx6804h.P)(), flagArgs: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).transform(import_chunk_sdks5h78.eAe), restoresTranscript: (0, import_chunk_adx6804h.P)().optional() }), (0, import_chunk_adx6804h.c)({ mode: (0, import_chunk_adx6804h.v)("exec"), cmd: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), args: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).transform((e) => e.map(import_chunk_z6pfqf6e.vF)) })]), env: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).default({}).transform((e) => Be(e, "the background job's launch request")), reattachEnv: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).transform((e) => Be(e, "the launch request's reattach values")).optional(), worktree: (0, import_chunk_adx6804h.c)({ path: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), ownershipToken: (0, import_chunk_adx6804h.n)() }).optional(), isolation: (0, import_chunk_adx6804h.F)(["none", "worktree"]).default("none"), respawnFlags: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).default([]).transform(import_chunk_sdks5h78.eAe), attachStallRespawns: (0, import_chunk_adx6804h.E)().int().optional(), gatewayRouted: (0, import_chunk_adx6804h.P)().optional(), gatewayMarkUnreadable: (0, import_chunk_adx6804h.n)().optional(), gatewayUnderInstalledService: (0, import_chunk_adx6804h.P)().optional(), firstStart: (0, import_chunk_adx6804h.P)().optional(), gatewayOnWord: (0, import_chunk_adx6804h.P)().optional(), wakes: (0, import_chunk_adx6804h.P)().optional(), fromRoster: (0, import_chunk_adx6804h.P)().optional(), agent: (0, import_chunk_adx6804h.n)().optional(), routine: (0, import_chunk_adx6804h.n)().optional(), seed: (0, import_chunk_adx6804h.c)({ intent: (0, import_chunk_adx6804h.n)(), name: (0, import_chunk_adx6804h.n)().optional() }).optional(), cols: (0, import_chunk_adx6804h.E)().int().positive().max(import_chunk_bdxa2qdh.ust).optional(), rows: (0, import_chunk_adx6804h.E)().int().positive().max(import_chunk_bdxa2qdh.ust).optional() })), $Dn = /ERESPAWNING|ESTARTING/, UDn = /\bE(?:NOENT|CONNREFUSED|CONNRESET)\b|control socket closed/, Bnn = "ERESPAWNING", BDn = "updated Claude Code", n1t = "stalled", Gpr = "legacy", WDn = "EHOSTDEAD", bbt = "terminal host process died \u2014 press Enter to restart", r1t = "This session's terminal host process died (the conversation is saved)", jDn = "terminal host process died \u2014 its output is gone; the command was not run again", o1t = "This command's terminal host process died \u2014 its output is gone and the command was not run again", GDn = /ESTALLED|EUNVERIFIED|EHOSTDEAD/, s1t = /^EKICKED:\s*/, _ki = "Session opened in another window";
function Tao(e, r, o) {
  return r !== void 0 && nZa.test(r) ? `${e}:${r}: ${o}` : `${e}: ${o}`;
}
var zDn = /^E[A-Z]+:/;
function be() {
  return (0, import_chunk_adx6804h.n)().refine(import_chunk_xfj2cwfv.Q4, "remote IPC path");
}
var Fe = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ pid: (0, import_chunk_adx6804h.E)(), procStart: (0, import_chunk_adx6804h.n)().optional(), sessionId: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), rendezvousSock: be(), ptySock: be().optional(), messagingSock: be().optional(), cliVersion: (0, import_chunk_adx6804h.n)().optional(), startedAt: (0, import_chunk_adx6804h.E)(), attempt: (0, import_chunk_adx6804h.E)(), cwd: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), worktreePath: (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF).optional(), dispatch: vao(), pendingRespawn: (0, import_chunk_adx6804h.v)("upgrade").optional(), decModes: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.E)()).optional(), firedInteractiveMarks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).transform((e) => {
  let r = [];
  for (let o of e) {
    let l = bt().safeParse(o);
    if (l.success) r.push(l.data);
  }
  return r.slice(0, 2);
}).optional().catch(void 0), rvAuth: (0, import_chunk_adx6804h.n)().optional(), ptyAuth: (0, import_chunk_adx6804h.n)().optional(), replPid: (0, import_chunk_adx6804h.E)().optional(), replProcStart: (0, import_chunk_adx6804h.n)().optional() }));
function qas(e) {
  let r = Fe().shape, o = {};
  for (let [l, u] of Object.entries(e)) if (!(l in r)) o[l] = u;
  return o;
}
var rZa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.$t)({ proto: (0, import_chunk_adx6804h.E)().int().min(jpr).max(ap), supervisorPid: (0, import_chunk_adx6804h.E)().catch(0), updatedAt: (0, import_chunk_adx6804h.E)().catch(0), workers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)().regex(UW), Fe()) })), yki = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.n)().regex(UW), r = (0, import_chunk_adx6804h.E)().int().min(jpr).max(ap);
  return (0, import_chunk_adx6804h.zn)("op", [(0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("ping") }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("nudge") }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("yield") }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("lease"), client: wbt().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("leases") }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("await-ack"), short: e, nonce: e.optional(), timeoutMs: (0, import_chunk_adx6804h.E)() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("dispatch"), d: vao(), timeoutMs: (0, import_chunk_adx6804h.E)(), auth: (0, import_chunk_adx6804h.n)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("list") }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("has"), short: e }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("check-credential"), pin: (0, import_chunk_adx6804h.n)().max(200), fromSettings: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)().max(64)).max(4).optional(), auth: (0, import_chunk_adx6804h.n)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("kill"), short: e, signal: (0, import_chunk_adx6804h.F)(["SIGTERM", "SIGKILL"]).optional(), handoff: (0, import_chunk_adx6804h.P)().optional(), evict: (0, import_chunk_adx6804h.P)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("retire-if-empty"), short: e, sessionId: (0, import_chunk_adx6804h.n)(), auth: (0, import_chunk_adx6804h.n)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("reply"), short: e, text: (0, import_chunk_adx6804h.n)(), auth: (0, import_chunk_adx6804h.n)().optional(), nextTurn: (0, import_chunk_adx6804h.P)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("subscribe"), short: e, tail: (0, import_chunk_adx6804h.E)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("attach"), short: e, auth: (0, import_chunk_adx6804h.n)().optional(), cols: (0, import_chunk_adx6804h.E)().int().min(1).max(import_chunk_bdxa2qdh.ust), rows: (0, import_chunk_adx6804h.E)().int().min(1).max(import_chunk_bdxa2qdh.ust), attachId: (0, import_chunk_adx6804h.n)().optional(), caps: (0, import_chunk_adx6804h.c)({ imark: (0, import_chunk_adx6804h.P)().optional(), terminal: (0, import_chunk_adx6804h.n)().nullable(), mux: (0, import_chunk_adx6804h.F)(["tmux", "screen", "zellij"]).nullable(), ssh: (0, import_chunk_adx6804h.P)(), wheelFlood: (0, import_chunk_adx6804h.P)().optional(), hyperlinks: (0, import_chunk_adx6804h.P)().optional(), mayWriteHyperlinks: (0, import_chunk_adx6804h.P)().optional(), progressReporting: (0, import_chunk_adx6804h.P)().optional(), printsUnknownSequences: (0, import_chunk_adx6804h.P)().optional(), wtSession: (0, import_chunk_adx6804h.P)().optional(), isVscodeTerm: (0, import_chunk_adx6804h.P)().optional(), isGhosttyXtv: (0, import_chunk_adx6804h.P)().optional(), keyDialect: (0, import_chunk_adx6804h.F)(["st", "rxvt"]).nullable().optional().catch(void 0), browser: (0, import_chunk_adx6804h.n)().nullable().optional(), colorLevel: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.v)(0), (0, import_chunk_adx6804h.v)(1), (0, import_chunk_adx6804h.v)(2), (0, import_chunk_adx6804h.v)(3)]).optional(), syncOutput: (0, import_chunk_adx6804h.P)().optional(), programStatus: (0, import_chunk_adx6804h.P)().optional(), editor: (0, import_chunk_adx6804h.n)().nullable().optional(), systemTheme: (0, import_chunk_adx6804h.F)(["dark", "light"]).optional(), tmuxSocket: be().refine(import_path2.isAbsolute).optional().catch(void 0), sessionTabs: (0, import_chunk_adx6804h.n)().regex(nZa).optional().catch(void 0), cloudTabs: (0, import_chunk_adx6804h.v)(true).optional().catch(void 0), tabsLanding: (0, import_chunk_adx6804h.c)({ why: (0, import_chunk_adx6804h.F)(mt), from: (0, import_chunk_adx6804h.n)().regex(UW) }).optional().catch(void 0) }).optional(), holdingFrame: (0, import_chunk_adx6804h.P)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("resize"), short: e, cols: (0, import_chunk_adx6804h.E)().int().min(1).max(import_chunk_bdxa2qdh.ust), rows: (0, import_chunk_adx6804h.E)().int().min(1).max(import_chunk_bdxa2qdh.ust), attachId: (0, import_chunk_adx6804h.n)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("program-status"), short: e, attachId: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("ensure-spare"), cwd: (0, import_chunk_adx6804h.n)() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("permission-response"), short: e, requestId: (0, import_chunk_adx6804h.n)(), allow: (0, import_chunk_adx6804h.P)(), auth: (0, import_chunk_adx6804h.n)().optional() }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("respawn-stale"), short: e }), (0, import_chunk_adx6804h.c)({ proto: r, op: (0, import_chunk_adx6804h.v)("shutdown"), reapWorkers: (0, import_chunk_adx6804h.P)().optional() })]);
}), wbt = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ label: (0, import_chunk_adx6804h.n)().max(64).refine(Ne), cwd: (0, import_chunk_adx6804h.n)().max(4096).refine(Ne).catch("(not shown)"), pid: (0, import_chunk_adx6804h.E)().int().positive().catch(0), cloudSessionId: (0, import_chunk_adx6804h.n)().regex(Fnn).optional().catch(void 0) })), Ski = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ ok: (0, import_chunk_adx6804h.v)(true), op: (0, import_chunk_adx6804h.v)("lease") })), yt = ["upgrade", "service_recall", "displaced", "yield", "shutdown_op", "idle_exit", "bg_manager_failed", "signal", "unknown"], bki = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ op: (0, import_chunk_adx6804h.v)("lease"), closing: (0, import_chunk_adx6804h.F)(yt) })), i1t = "cloud session", Cao = ["cli-bg-dispatch", "claude agents", i1t];
(0, import_chunk_adx6804h.B)();
function Le(e) {
  if (e === void 0 || !e.kinds.includes("session_cron")) return false;
  let r = e.wake;
  if (r === void 0) return true;
  return r.fires >= 1 && r.keepalive !== true;
}
function t1t(e) {
  if (!e || e.length === 0) return "";
  return e.map((r) => {
    let o = `${r.id ?? r.label}:${r.doneAt ?? "-"}:${r.failed ? "x" : ""}`;
    return r.kind === "todo" ? `${o}:${r.startedAt ?? "-"}` : o;
  }).join("|");
}
function NDn() {
  let { tasks: e, queued: r, kinds: o, drainableMonitors: l, wake: u } = FDn();
  return { tasks: e, queued: r, kinds: o, ...l !== void 0 && { drainableMonitors: l }, ...u !== void 0 && { wake: u } };
}
function pki(e) {
  (0, import_chunk_r3wrey46.Lne)().publishInFlightSnapshot(e);
}
function FDn() {
  let e = (0, import_chunk_r3wrey46.Lne)().inFlightSnapshot, r = (0, import_chunk_f9x2f6cx.eu)().length;
  if (r === 0) return { ...e };
  let o = kt();
  return { ...e, tasks: e.tasks + r, kinds: [...e.kinds, "session_cron"], ...o !== void 0 && { wake: o } };
}
function kt() {
  let e = (0, import_chunk_f9x2f6cx.eu)().find((r) => r.kind === "loop");
  if (e === void 0) return;
  return { at: e.scheduledFor, reason: e.reason, fires: (0, import_chunk_f9x2f6cx.D3n)(), ...e.keepalive && { keepalive: true } };
}
function tZa(e) {
  let r = (0, import_chunk_r3wrey46.Lne)().inFlightSnapshotChanged.subscribe(e), o = (0, import_chunk_f9x2f6cx.bpt)(() => {
    try {
      e();
    } catch {
    }
  });
  return () => {
    r(), o();
  };
}
async function Yas(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return { kind: "proceed" };
  try {
    let r = await (0, import_promises3.lstat)(e);
    return r.isFile() ? { kind: "proceed" } : { kind: "refused", symlink: r.isSymbolicLink() };
  } catch (r) {
    return (0, import_chunk_jv7av99m.J)(r) ? { kind: "proceed" } : { kind: "error", error: r };
  }
}
function Xas(e) {
  return e?.code === "Failed" && (e.telemetryCode === "ENXIO" || e.telemetryCode === "EFBIG" || e.telemetryCode === "ELOOP" || e.telemetryCode === "ENAMETOOLONG");
}
var vt = (0, import_chunk_p6a07y1c.auo)(["proto", "supervisorPid", "updatedAt", "workers", "pid", "procStart", "sessionId", "rendezvousSock", "ptySock", "messagingSock", "rvAuth", "ptyAuth", "replPid", "replProcStart", "cliVersion", "startedAt", "attempt", "cwd", "worktreePath", "dispatch", "pendingRespawn", "decModes", "firedInteractiveMarks", "kind", "msgsLoaded", "msgsInJsonl", "msgsRenderedAtFirstPaint", "short", "restoresTranscript", "nonce", "createdAt", "cols", "rows", "source", "launch", "mode", "args", "fork", "flagArgs", "cmd", "env", "reattachEnv", "worktree", "path", "ownershipToken", "isolation", "respawnFlags", "seed", "intent", "name", "agent", "routine", "attachStallRespawns"]), Oe = 8388608;
function VDn() {
  return import_chunk_hkvzj051.at.daemon(["roster.json"]);
}
function X() {
  return { proto: ap, supervisorPid: process.pid, updatedAt: Date.now(), workers: {} };
}
async function Mq(e, r) {
  if (r) {
    let { roster: l, inspectFailed: u } = await Ge(r, e);
    return u ? { ...l, inspectFailed: true } : l;
  }
  let o;
  try {
    let l = await (0, import_promises2.lstat)((0, import_chunk_d55td748.Gae)());
    if (!l.isFile() || l.size > Oe) {
      if (!e?.silent) if ((0, import_chunk_k449cc64.i)(Error(`roster.json ${l.isFile() ? `too large (${l.size} bytes) \u2014 quarantining` : "is not a regular file \u2014 removing"}`)), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: l.isFile() ? (0, import_chunk_78g0060s.S)("E2BIG") : (0, import_chunk_78g0060s.S)("EFTYPE") }), l.isFile()) await pe(void 0);
      else await (0, import_promises2.rm)((0, import_chunk_d55td748.Gae)(), { recursive: true, force: true }).catch((u) => (0, import_chunk_k449cc64.i)(u));
      return { ...X(), parseFailed: true };
    }
    o = (0, import_chunk_w578pjby.te)(await (0, import_promises2.readFile)((0, import_chunk_d55td748.Gae)(), "utf8"));
  } catch (l) {
    if ((0, import_chunk_jv7av99m.J)(l)) return X();
    if (!e?.silent) (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(l), "bg roster.json read/parse failed")), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: (0, import_chunk_jv7av99m.op)(l) }), await pe(void 0);
    return { ...X(), parseFailed: true };
  }
  return Je(o, e, void 0);
}
async function Je(e, r, o) {
  let l;
  try {
    l = rZa().safeParse(e);
  } catch (u) {
    if (!r?.silent) (0, import_chunk_k449cc64.i)(u), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: $e(e), quarantined: 1, errCode: (0, import_chunk_jv7av99m.op)(u) }), await pe(o);
    return { ...X(), parseFailed: true };
  }
  if (l.success) {
    delete l.data.parseFailed, delete l.data.inspectFailed;
    let u = e, m = ["supervisorPid", "updatedAt"].filter((g) => !Number.isFinite(u[g]));
    if (m.length > 0 && !r?.silent) (0, import_chunk_w578pjby.t)(`[daemon] roster.json stamp field(s) healed on read: ${m.join(", ")}`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: 0, quarantined: 0, issuePath: (0, import_chunk_78g0060s.sl)(m), issueCode: (0, import_chunk_78g0060s.S)("healed_stamp") });
    return l.data;
  }
  if (!r?.silent) {
    let u = $e(e), m = l.error.issues[0];
    (0, import_chunk_k449cc64.i)(Error(`roster.json parse failed at ${je(m?.path) || "<root>"} (orphaning ${u} worker(s)): ${m?.message}`)), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: u, quarantined: 1, issuePath: je(m?.path), issueCode: (0, import_chunk_78g0060s.fe)(m?.code) }), await pe(o);
  }
  return { ...X(), parseFailed: true };
}
async function pe(e) {
  if (!e) {
    await (0, import_promises2.rename)((0, import_chunk_d55td748.Gae)(), `${(0, import_chunk_d55td748.Gae)()}.corrupt.${Date.now()}`).catch((o) => (0, import_chunk_k449cc64.i)(o));
    return;
  }
  let r = await e.move(VDn(), import_chunk_hkvzj051.at.daemon([`roster.json.corrupt.${Date.now()}`])).catch(() => {
    return;
  });
  if (r === void 0 || !r.ok) (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`roster quarantine v5 move failed: ${r === void 0 ? "threw" : (0, import_chunk_7n1spq36.un)(r.error)}`, "roster quarantine v5 move failed"));
}
async function Pt(e) {
  await (0, import_promises2.rm)(e, { recursive: true, force: true }).catch((r) => (0, import_chunk_k449cc64.i)(r));
}
async function Ue(e, r, o, l) {
  if (!r?.silent) (0, import_chunk_k449cc64.i)(o), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: (0, import_chunk_78g0060s.S)(l) }), await It(e);
  return { ...X(), parseFailed: true };
}
async function Ge(e, r) {
  let o = await Yas((0, import_chunk_d55td748.Gae)());
  if (o.kind === "refused") {
    if (!r?.silent) (0, import_chunk_k449cc64.i)(Error("roster.json is not a regular file \u2014 removing")), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: (0, import_chunk_78g0060s.S)("EFTYPE") }), await Pt((0, import_chunk_d55td748.Gae)());
    return { roster: { ...X(), parseFailed: true }, inspectFailed: false };
  }
  if (o.kind === "error") return He(r, (0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(o.error), "bg roster.json read/parse failed"), (0, import_chunk_jv7av99m.op)(o.error));
  return Ct(e, r);
}
function He(e, r, o) {
  if (!e?.silent) (0, import_chunk_k449cc64.i)(r), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 0, errCode: o });
  return { roster: { ...X(), parseFailed: true }, inspectFailed: true };
}
async function Ct(e, r) {
  let o = await e.read([{ key: VDn(), offset: 0, length: Oe + 1 }]).catch(() => {
    return;
  });
  if (o === void 0 || !o.ok) {
    if (o !== void 0 && Xas(o.error)) return { roster: await Ue(e, r, new import_chunk_jv7av99m.A(`bg roster.json v5 read refused: ${o.error.telemetryCode} \u2014 removing`, "bg roster.json v5 read refused \u2014 removing"), "EV5READ"), inspectFailed: false };
    return He(r, new import_chunk_jv7av99m.A(`bg roster.json v5 read failed: ${o?.error.code ?? "threw"}`, "bg roster.json v5 read failed"), (0, import_chunk_78g0060s.S)("EV5READ"));
  }
  let l = o.value.items[0];
  if (!l.found) return { roster: X(), inspectFailed: false };
  if (l.totalBytes > Oe) return { roster: await Ue(e, r, new import_chunk_jv7av99m.A(`roster.json too large (${l.totalBytes} bytes) \u2014 removing`, "roster.json too large \u2014 removing"), "E2BIG"), inspectFailed: false };
  let u;
  try {
    u = (0, import_chunk_w578pjby.te)(Buffer.from(l.value).toString("utf8"));
  } catch (m) {
    if (!r?.silent) (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(m), "bg roster.json read/parse failed")), (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_parse_failed", { orphaned: -1, quarantined: 1, errCode: (0, import_chunk_jv7av99m.op)(m) }), await pe(e);
    return { roster: { ...X(), parseFailed: true }, inspectFailed: false };
  }
  return { roster: await Je(u, r, e), inspectFailed: false };
}
async function It(e) {
  let r = await e.delete(VDn()).catch(() => {
    return;
  });
  if (r === void 0 || !r.ok) (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`roster quarantine v5 delete failed: ${r?.error.code ?? "threw"}`, "roster quarantine v5 delete failed"));
}
function je(e) {
  return (0, import_chunk_p6a07y1c.Ton)(e, () => vt);
}
function FO(e) {
  return UW.test(e) ? (0, import_chunk_78g0060s.Fr)(e) : (0, import_chunk_78g0060s.S)("invalid");
}
function $e(e) {
  let r = e !== null && typeof e === "object" ? e.workers : void 0;
  return r !== null && typeof r === "object" && !Array.isArray(r) ? Object.keys(r).length : 0;
}
async function Tt(e, r) {
  let { parseFailed: o, inspectFailed: l, ...u } = e;
  if (r) {
    let g = await r.write(VDn(), (0, import_chunk_w578pjby._)(u, null, 2), { mode: 384 });
    if (!g.ok) {
      let b = g.error, y = "telemetryCode" in b ? b.telemetryCode : void 0;
      if (y !== void 0 && import_chunk_jv7av99m.yVe.has(y)) {
        (0, import_chunk_w578pjby.t)(`[daemon] roster write failed: ${y}`, { level: "error" });
        return;
      }
      throw new import_chunk_jv7av99m.A(`roster v5 write failed: ${b.code}`, "roster v5 write failed");
    }
    return;
  }
  let m = (0, import_chunk_d55td748.Gae)();
  await (0, import_promises2.mkdir)((0, import_path4.dirname)(m), { recursive: true, mode: 448 }).catch(() => {
  }), await (0, import_chunk_q7qjcthc.yr)(m, (0, import_chunk_w578pjby._)(u, null, 2), 384).catch((g) => {
    let b = (0, import_chunk_jv7av99m.w)(g);
    if (b && import_chunk_jv7av99m.yVe.has(b)) {
      (0, import_chunk_w578pjby.t)(`[daemon] roster write failed: ${b}`, { level: "error" });
      return;
    }
    throw g;
  });
}
var xt = (0, import_chunk_gjzwg6ck.GS)();
function MCe(e, r) {
  return xt.run("roster", async () => {
    let o = await Nt(r), l = e(o) ?? o;
    l.supervisorPid = process.pid, l.updatedAt = Date.now(), await Tt(l, r);
  });
}
async function Nt(e) {
  if (!e) return Mq();
  let r = await Ge(e);
  if (r.inspectFailed) throw new import_chunk_jv7av99m.A("bg roster.json update skipped: the file could not be inspected", "bg roster.json update skipped: the file could not be inspected");
  return r.roster;
}
async function Aao(e, r) {
  if (!(0, import_chunk_v6cdm8tp.Rd)(e)) return "dead_pid";
  if (!await (0, import_chunk_rb36kwbn.GC)(e, r)) return "procstart_mismatch";
  if (await (0, import_chunk_rb36kwbn.sFe)(e)) return "zombie";
  return "live";
}
async function zpr(e, r) {
  return await Aao(e, r) === "live";
}
var L6 = "(ungrouped)", rU = "(earlier)", Bt = 64, Dt = /* @__PURE__ */ new Set(["pinned", "ungrouped", L6, "past", rU]);
function Kpr(e) {
  return Dt.has(e.toLowerCase());
}
function Jas(e) {
  return (0, import_chunk_kx2fp6pc.$c)(e).slice(0, Bt);
}
function Se(e) {
  if (e === void 0) return;
  let r = Jas(e);
  return r && !Kpr(r) ? r : void 0;
}
class Ke {
  #e = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Set();
  #n = /* @__PURE__ */ new Set();
  #r = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Set();
  #i = /* @__PURE__ */ new Set();
  peek(e) {
    return this.#e.get(e);
  }
  invalidate(e) {
    this.#e.delete(e);
  }
  noteAbsent(e) {
    this.#e.delete(e), this.#t.delete(e), this.#n.delete(e);
  }
  noteRejected(e, r) {
    this.#e.set(e, { mtimeKey: r, state: null });
  }
  noteParsed(e, r, o) {
    if (this.#e.size > 1e3) this.#e.clear();
    this.#e.set(e, { mtimeKey: r, state: o }), this.#t.delete(e), this.#n.delete(e);
  }
  noteHit(e) {
    this.#t.delete(e);
  }
  shouldReportTransient(e) {
    if (this.#t.has(e)) return false;
    return this.#t.add(e), true;
  }
  shouldReportRejected(e) {
    if (this.#n.has(e)) return false;
    return this.#n.add(e), true;
  }
  shouldReportRecovered(e) {
    if (this.#r.has(e)) return false;
    return this.#r.add(e), true;
  }
  noteCleanRead(e) {
    this.#r.delete(e);
  }
  shouldReportPruned(e) {
    if (this.#o.has(e)) return false;
    return this.#o.add(e), true;
  }
  notePruneCandidateLive(e) {
    this.#o.delete(e);
  }
  shouldLogSidecarFallback(e) {
    if (this.#i.has(e)) return false;
    return this.#i.add(e), true;
  }
}
var Ve = new import_chunk_2904xtvq.j(() => new Ke());
class qe {
  drafts = /* @__PURE__ */ new Map();
  pins = /* @__PURE__ */ new Map();
}
var zas = new import_chunk_2904xtvq.j(() => new qe());
async function Vas(e, r, { cap: o, screens: l, screenKey: u, heal: m }) {
  if (l.get(u) !== "ok") {
    let y = await e.statMeta(r);
    if (!y.ok) {
      if (y.error.code !== "NotFound") l.set(u, "refused"), await m?.();
      return null;
    }
    if (y.value.size > o) return l.set(u, "refused"), null;
    l.set(u, "ok");
  }
  let g = await e.readText([{ key: r, offset: 0, length: o + 1 }]);
  if (!g.ok) return l.delete(u), await m?.(), null;
  let b = g.value.items[0];
  if (!b.found) return null;
  if (b.totalBytes > o) return l.set(u, "refused"), null;
  return b.value;
}
var de = () => (0, import_chunk_adx6804h.n)().transform(import_chunk_z6pfqf6e.vF), et = /^[a-f0-9]{8}$/, jt = /^(cse_|session_)[A-Za-z0-9_-]{1,128}$/;
function le(e, r) {
  return (o) => {
    if (r(o)) return o;
    (0, import_chunk_w578pjby.t)(`[jobs] dropped malformed ${e} from persisted job state`, { level: "warn" });
    return;
  };
}
var we = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.n)(), detail: (0, import_chunk_adx6804h.n)(), tempo: (0, import_chunk_adx6804h.F)(["active", "idle", "blocked"]).optional().catch(void 0), inFlight: (0, import_chunk_adx6804h.c)({ tasks: (0, import_chunk_adx6804h.E)(), queued: (0, import_chunk_adx6804h.E)(), kinds: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), drainableMonitors: (0, import_chunk_adx6804h.E)().int().nonnegative().optional(), wake: (0, import_chunk_adx6804h.c)({ at: (0, import_chunk_adx6804h.E)().optional(), reason: (0, import_chunk_adx6804h.n)().optional(), fires: (0, import_chunk_adx6804h.E)().int().nonnegative(), keepalive: (0, import_chunk_adx6804h.v)(true).optional() }).optional().catch(void 0) }).optional(), selfWake: (0, import_chunk_adx6804h.P)().optional().catch(void 0), fan: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().optional(), kind: (0, import_chunk_adx6804h.F)(["agent", "workflow", "shell", "monitor", "mcp", "todo"]).optional().catch(void 0), label: (0, import_chunk_adx6804h.n)(), startedAt: (0, import_chunk_adx6804h.E)().optional(), doneAt: (0, import_chunk_adx6804h.E)().optional(), failed: (0, import_chunk_adx6804h.P)().optional(), group: (0, import_chunk_adx6804h.n)().optional() })).optional(), tokens: (0, import_chunk_adx6804h.E)().optional(), needs_you: (0, import_chunk_adx6804h.P)().optional(), needs: (0, import_chunk_adx6804h.n)().optional(), block: (0, import_chunk_adx6804h.c)({ questions: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ question: (0, import_chunk_adx6804h.n)(), options: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ label: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)() })) })) }).optional(), suggestedReply: (0, import_chunk_adx6804h.n)().optional(), needsOverlay: (0, import_chunk_adx6804h.n)().optional(), needsAsk: (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), text: (0, import_chunk_adx6804h.n)() }).optional().catch(void 0), output: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).nullable().default(null), structuredResult: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional(), children: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), href: (0, import_chunk_adx6804h.n)(), kind: (0, import_chunk_adx6804h.F)(["pr", "frame"]).optional().catch(void 0), title: (0, import_chunk_adx6804h.n)().optional().catch(void 0) })).nullable().default(null), linkScanOffset: (0, import_chunk_adx6804h.E)().default(0), linkScanPath: de().transform(le("linkScanPath", (e) => (0, import_path3.isAbsolute)(e) && e.endsWith(".jsonl") && (0, import_chunk_mzmcvr6c.ht)((0, import_path3.basename)(e, ".jsonl")) !== null)).optional(), template: (0, import_chunk_adx6804h.n)(), routine: (0, import_chunk_adx6804h.n)().optional(), respawnFlags: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).default([]).transform((e) => (0, import_chunk_sdks5h78.eAe)((0, import_chunk_sdks5h78.frl)((0, import_chunk_sdks5h78.q5e)(e)))), bgIsolation: (0, import_chunk_adx6804h.F)(["none", "worktree"]).optional().catch(void 0), dispatchEntrypoint: (0, import_chunk_adx6804h.F)(import_chunk_r6r2wdsw.khn).optional().catch(void 0), providerEnv: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).transform((e) => {
  let r = (0, import_chunk_sdks5h78.url)((0, import_chunk_khxw3ng0.er)(e, import_chunk_z6pfqf6e.vF));
  return r && (0, import_chunk_sdks5h78.jds)(r, "the saved job state (state.json providerEnv)");
}).optional(), sessionPermissionRules: (0, import_chunk_adx6804h.c)({ allow: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), deny: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), addDirs: (0, import_chunk_adx6804h.C)(de()).optional(), holdsBypass: (0, import_chunk_adx6804h.v)(true).optional().catch(void 0) }).optional(), memoryToggledOff: (0, import_chunk_adx6804h.P)().optional(), autoMemoryOffThisSession: (0, import_chunk_adx6804h.P)().optional(), forkSourceAlive: (0, import_chunk_adx6804h.P)().optional(), forkBoundaryAt: (0, import_chunk_adx6804h.n)().optional(), forkSessionId: (0, import_chunk_adx6804h.n)().optional(), forkParentSessionId: (0, import_chunk_adx6804h.n)().optional(), interactiveLineage: (0, import_chunk_adx6804h.P)().optional(), intent: (0, import_chunk_adx6804h.n)(), displayIntent: (0, import_chunk_adx6804h.n)().optional(), initialPrompt: (0, import_chunk_adx6804h.n)().optional(), queuedPrompt: (0, import_chunk_adx6804h.n)().optional(), name: (0, import_chunk_adx6804h.n)().optional(), nameSource: (0, import_chunk_adx6804h.F)(["user", "auto", "collision"]).optional().catch(void 0), color: (0, import_chunk_adx6804h.n)().optional(), sessionId: de(), resumeSessionId: (0, import_chunk_adx6804h.n)().transform(le("resumeSessionId", (e) => (0, import_chunk_mzmcvr6c.ht)(e) !== null)).optional(), daemonShort: (0, import_chunk_adx6804h.n)().transform(le("daemonShort", (e) => et.test(e))).optional(), cliVersion: (0, import_chunk_adx6804h.n)().optional(), cwd: de(), createdAt: (0, import_chunk_adx6804h.n)(), updatedAt: (0, import_chunk_adx6804h.n)(), firstTerminalAt: (0, import_chunk_adx6804h.n)().nullable().default(null), lastTerminalAt: (0, import_chunk_adx6804h.n)().optional(), worktreePath: de().optional(), worktreeBranch: (0, import_chunk_adx6804h.n)().optional(), worktreeHookBased: (0, import_chunk_adx6804h.P)().optional(), worktreeCopy: _e().optional().catch(void 0), originCwd: de().optional(), bridgeSessionId: (0, import_chunk_adx6804h.n)().transform(le("bridgeSessionId", (e) => jt.test(e))).optional(), bridgeOwnerAccountUuid: (0, import_chunk_adx6804h.n)().optional(), bridgeOwnerOrganizationUuid: (0, import_chunk_adx6804h.n)().optional(), bridgeNoHistoryBackfill: (0, import_chunk_adx6804h.P)().optional(), bridgeOutboundOnly: (0, import_chunk_adx6804h.P)().optional(), bridgeSessionGroupingId: (0, import_chunk_adx6804h.n)().transform(le("bridgeSessionGroupingId", (e) => /^sgrp_[A-Za-z0-9_]{1,128}$/.test(e))).optional(), bridgeSessionSeq: (0, import_chunk_adx6804h.E)().transform(le("bridgeSessionSeq", (e) => Number.isInteger(e) && e >= 0)).optional(), backend: (0, import_chunk_adx6804h.F)(["daemon", "peer", "remote"]).catch("daemon").default("daemon").transform((e) => {
  if (e === "daemon") return e;
  return (0, import_chunk_w578pjby.t)(`[jobs] coerced persisted backend '${e}' to 'daemon' \u2014 peer/remote rows are never written to disk`, { level: "warn" }), "daemon";
}), sock: (0, import_chunk_adx6804h.n)().optional(), pid: (0, import_chunk_adx6804h.E)().optional(), keptBy: (0, import_chunk_adx6804h.c)({ pid: (0, import_chunk_adx6804h.E)().int().positive(), procStart: (0, import_chunk_adx6804h.n)().max(64).optional() }).optional(), sortOrder: (0, import_chunk_adx6804h.E)().optional(), stateSortOrder: (0, import_chunk_adx6804h.E)().optional(), group: (0, import_chunk_adx6804h.n)().optional(), pinned: (0, import_chunk_adx6804h.P)().optional(), reapedMidWorkAt: (0, import_chunk_adx6804h.n)().optional(), reapedUnsettledAt: (0, import_chunk_adx6804h.n)().optional(), deadEpochReapedAt: (0, import_chunk_adx6804h.n)().optional(), sessionIdTaken: (0, import_chunk_adx6804h.P)().optional().catch(void 0), replayOwed: (0, import_chunk_adx6804h.P)().optional().catch(void 0) }).transform(({ needs_you: e, ...r }) => {
  let o = r.bridgeOwnerAccountUuid !== void 0 && !(0, import_chunk_q3a5dy2r.vct)(r.bridgeOwnerAccountUuid) || r.bridgeOwnerOrganizationUuid !== void 0 && !(0, import_chunk_q3a5dy2r.vct)(r.bridgeOwnerOrganizationUuid), l = r.tempo ?? (e ? "blocked" : "idle");
  return { ...r, ...o && { bridgeOwnerAccountUuid: void 0, bridgeOwnerOrganizationUuid: void 0 }, tempo: l, ...r.lastTerminalAt === void 0 && Hk(r.state) !== null && l !== "active" && { lastTerminalAt: r.firstTerminalAt || r.updatedAt } };
})), re = "state.json", q = 8388608;
function N6() {
  return (0, import_chunk_xfj2cwfv.L6n)();
}
function Bs(e) {
  return (0, import_path3.join)(N6(), e);
}
function TS() {
  let e = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (e) return (0, import_path3.basename)(e);
  let r = (0, import_chunk_rb36kwbn.pk)();
  if (r) return (0, import_path3.basename)(r.jobDir);
  return (0, import_chunk_f9x2f6cx.W)().slice(0, 8);
}
function tt(e, r) {
  return (0, import_chunk_hkvzj051.Ao)(e) ? import_chunk_hkvzj051.at.job(e, r) : void 0;
}
function Gnn(e, r) {
  return (0, import_chunk_xfj2cwfv.sPo)(e, r);
}
function znn(e) {
  return import_chunk_hkvzj051.at.job(e, [re]);
}
function kki(e, r) {
  let o = (0, import_path3.join)(Bs(e), re), l = false, u = Number.NaN;
  function m(k) {
    if (l) return;
    if (Number.isNaN(u)) {
      u = k;
      return;
    }
    if (k === u) return;
    h(), r();
  }
  function g() {
    (0, import_promises.lstat)(o).then((k) => m(k.mtimeMs), () => m(-1));
  }
  g();
  let b = setInterval(g, 200), y = setTimeout(h, 1e4);
  function h() {
    if (l) return;
    l = true, clearInterval(b), clearTimeout(y);
  }
  return h;
}
function Qas() {
  return (0, import_chunk_r3wrey46.Lne)().ownStateWriteDepth > 0;
}
async function Hf(e, r, o) {
  let l = r.inFlight?.kinds.includes("session_cron") === true, u = l && !r.selfWake && Le(r.inFlight) ? { ...r, selfWake: true } : !l && r.selfWake && Wd(r) ? { ...r, selfWake: void 0 } : r, g = Wd(u) ? u.lastTerminalAt ? u : { ...u, lastTerminalAt: u.updatedAt } : u.lastTerminalAt !== void 0 ? { ...u, lastTerminalAt: void 0 } : u, { pinned: b, sortOrder: y, stateSortOrder: h, group: k, ...x } = g, L = o ? Gnn(e, [re]) : void 0, T = (0, import_chunk_r3wrey46.Lne)();
  T.ownStateWriteDepth++;
  try {
    if (o && L) {
      let O = await o.write(L, (0, import_chunk_w578pjby._)(x, null, 2), { mode: 384, parent: "mustExist" });
      if (!O.ok) {
        let z = (0, import_chunk_7n1spq36.Xg)(O.error);
        throw Object.assign(new import_chunk_jv7av99m.A(`[jobs] v5 state write failed: ${(0, import_chunk_7n1spq36.un)(O.error)}`, "[jobs] v5 state write failed"), z !== void 0 ? { code: z } : {});
      }
    } else await (0, import_chunk_q7qjcthc.yr)((0, import_path3.join)(e, re), (0, import_chunk_w578pjby._)(x, null, 2), 384);
  } finally {
    T.ownStateWriteDepth--, Qg(e);
  }
}
function Lu(e) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  if (r && (import_chunk_jv7av99m.yVe.has(r) || r === "ENOENT")) {
    (0, import_chunk_w578pjby.t)(`[jobs] state write failed (${r}): ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" });
    return;
  }
  (0, import_chunk_k449cc64.i)(e);
}
function qpr(e, r) {
  let o = r !== void 0 && r.id === e?.bridgeSessionId;
  return { ownerAccountUuid: o ? r.ownerAccountUuid : void 0, ownerOrganizationUuid: o ? r.ownerOrganizationUuid : void 0, noHistoryBackfill: e?.noHistoryBackfill || (r !== void 0 && !o ? true : r?.noHistoryBackfill) };
}
function cDe(e, r, o, l, u) {
  if (!e) return;
  let m = { CLAUDE_BRIDGE_REATTACH_SESSION: e };
  if (r !== void 0 && r > 0) m.CLAUDE_BRIDGE_REATTACH_SEQ = String(r);
  if (l) m.CLAUDE_BRIDGE_REATTACH_GROUPING = l;
  if (u?.ownerAccountUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT = u.ownerAccountUuid;
  if (u?.ownerOrganizationUuid) m.CLAUDE_BRIDGE_REATTACH_OWNER_ORG = u.ownerOrganizationUuid;
  if (u?.noHistoryBackfill) m.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL = "1";
  if (o !== false) m.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY = "1";
  return m;
}
function I() {
  return Ve.of((0, import_chunk_f9x2f6cx.N)().host);
}
function ye(e, r) {
  return r?.onReadFailure === "null" ? null : e?.state ?? null;
}
var Mt = [15, 45], Jt = /* @__PURE__ */ new Set(["ELOOP", "ENXIO", "EISDIR"]);
function ke(e) {
  if (e.code !== "Failed" || e.telemetryCode === void 0) return;
  if (e.telemetryCode === "EFBIG") return "oversize";
  return Jt.has(e.telemetryCode) ? "non-regular" : void 0;
}
function nt(e) {
  return e.code === "Failed" && e.key !== void 0 && e.key.namespace === "job" && e.key.relPath[0] !== re;
}
var Wt = /* @__PURE__ */ new Set(["invariant", "permission", "environment"]);
function Gt(e) {
  if (e.code === "Unavailable") return true;
  return e.code === "Failed" && !Wt.has(e.failureClass) && ke(e) === void 0 && !nt(e);
}
async function Ht(e, r) {
  let o = await r(), l = 1;
  for (let u of Mt) {
    if (o.ok || !Gt(o.error)) break;
    await (0, import_chunk_5appeerh.K)(u), o = await r(), l++;
  }
  if (o.ok) {
    if (l === 1) I().noteCleanRead(e);
    else if (I().shouldReportRecovered(e)) (0, import_chunk_y53wbr8a.a)("tengu_bg_state_read_recovered", { attempts: l });
  }
  return o;
}
function Xe(e, r, o) {
  let l = I().peek(e);
  if (!(l?.mtimeKey.startsWith("rejected:") && l.state === null)) (0, import_chunk_w578pjby.t)(`[jobs] skipping ${(0, import_path3.basename)(e)}: state.json is ${o}`, { level: "warn" });
  return I().noteRejected(e, `rejected:${r}`), null;
}
function Qg(e) {
  I().invalidate(e);
}
async function Kt(e, r, o) {
  let l = (0, import_path3.basename)(r), u = I().peek(r);
  if (u === void 0 || u.mtimeKey.startsWith("rejected:")) {
    let R = await e.statMeta(znn(l));
    if (!R.ok) {
      if (R.error.code === "NotFound") return Ee(r, o);
      let U = ke(R.error);
      if (U !== void 0) return Xe(r, U, U === "oversize" ? "too large" : "not a regular file");
    } else if (R.value.size > q) {
      let U = `rejected:${R.value.mtimeMs}:${R.value.size}`;
      if (I().peek(r)?.mtimeKey !== U) (0, import_chunk_w578pjby.t)(`[jobs] skipping ${(0, import_path3.basename)(r)}: state.json is too large (${R.value.size} bytes)`, { level: "warn" }), I().noteRejected(r, U);
      return null;
    }
  }
  let m = znn(l), b = await Ht(r, () => e.read([m, import_chunk_hkvzj051.at.job(l, ["order"]), import_chunk_hkvzj051.at.job(l, ["stateOrder"]), import_chunk_hkvzj051.at.job(l, ["group"])]));
  if (!b.ok && nt(b.error)) {
    if (I().shouldLogSidecarFallback(r)) (0, import_chunk_w578pjby.t)(`[jobs] ${(0, import_path3.basename)(r)}: a sidecar could not be read as a regular file; using state.json alone`);
    let R = await e.read([m]);
    b = R.ok ? { ok: true, value: { items: [R.value.items[0], { found: false }, { found: false }, { found: false }] } } : R;
  }
  let y = I().peek(r);
  if (!b.ok) {
    let R = ke(b.error);
    if (R !== void 0) return Xe(r, R, R === "oversize" ? "too large" : "not a regular file");
    if ((0, import_chunk_w578pjby.t)(`[jobs] ${(0, import_path3.basename)(r)}: v5 state read failed \u2014 ${b.error.code}`, { level: "warn" }), I().shouldReportTransient(r)) (0, import_chunk_y53wbr8a.a)("tengu_bg_state_read_transient", { errno: (0, import_chunk_78g0060s.f)(b.error.code), had_cache: y !== void 0 });
    return ye(y, o);
  }
  let [h, k, x, L] = b.value.items;
  if (!h.found) return Ee(r, o);
  if (h.totalBytes > q) {
    let R = `rejected:${h.mtimeMs}:${h.totalBytes}`;
    if (y?.mtimeKey === R) return null;
    return (0, import_chunk_w578pjby.t)(`[jobs] skipping ${(0, import_path3.basename)(r)}: state.json is too large (${h.totalBytes} bytes)`, { level: "warn" }), I().noteRejected(r, R), null;
  }
  let T = (R) => Buffer.from(R.value.buffer, R.value.byteOffset, R.value.byteLength).toString("utf-8"), O = (R) => R.found && R.totalBytes <= q ? T(R) : null, z = (R) => R.found && R.totalBytes <= q ? R.version : 0, H = `v5:${h.version}:${z(k)}:${z(x)}:${z(L)}`;
  if (y?.mtimeKey === H) return I().noteHit(r), y.state;
  return Vt(r, H, T(h), O(k), O(x), O(L), y, o);
}
function Vt(e, r, o, l, u, m, g, b) {
  try {
    let y = (0, import_chunk_w578pjby.te)(o), h = we().safeParse(y);
    if (!h.success) {
      if ((0, import_chunk_w578pjby.t)(`[jobs] skipping ${(0, import_path3.basename)(e)}: state.json schema validation failed \u2014 ${h.error.message}`, { level: "warn" }), I().shouldReportRejected(e)) (0, import_chunk_y53wbr8a.a)("tengu_bg_state_read_rejected", {});
      return I().noteRejected(e, r), null;
    }
    let k = l !== null ? Number(l) : void 0, x = u !== null ? Number(u) : void 0, L = we().in.shape, T = y !== null && typeof y === "object" ? Object.entries(y).filter(([z]) => !Object.hasOwn(L, z)) : [], O = { ...Object.fromEntries(T), ...h.data };
    if (Number.isFinite(k)) O = { ...O, sortOrder: k };
    if (Number.isFinite(x)) O = { ...O, stateSortOrder: x };
    if (m !== null && m.trim()) O = { ...O, group: m.trim() };
    if (O.group !== void 0) O = { ...O, group: Se(O.group) };
    return I().noteParsed(e, r, O), O;
  } catch (y) {
    if ((0, import_chunk_w578pjby.t)(`[jobs] ${(0, import_path3.basename)(e)}: state.json read/parse failed \u2014 ${y instanceof Error ? y.message : String(y)}`, { level: "warn" }), I().shouldReportTransient(e)) (0, import_chunk_y53wbr8a.a)("tengu_bg_state_read_transient", { errno: (0, import_chunk_jv7av99m.Cr)(y) ?? (0, import_chunk_78g0060s.S)("unknown"), had_cache: g !== void 0 });
    return ye(g, b);
  }
}
function Ee(e, r) {
  return I().noteAbsent(e), r?.onAbsent?.(), null;
}
async function Ypr(e, r) {
  return Ae(e, r, { onReadFailure: "null" });
}
async function Is(e, r) {
  return Ae(e, r, void 0);
}
async function kbt(e, r) {
  let o = { absent: false }, l = await Ae(e, r, { onAbsent: () => {
    o.absent = true;
  } });
  return o.absent ? "absent" : l;
}
async function Ae(e, r, o) {
  if (r !== void 0 && Gnn(e, [re]) !== void 0) return Kt(r, e, o);
  let l = (0, import_path3.join)(e, re), u = (0, import_path3.join)(e, "order"), m = (0, import_path3.join)(e, "stateOrder"), g = (0, import_path3.join)(e, "group"), b, y;
  try {
    let [k, x, L, T] = await Promise.all([(0, import_promises.lstat)(l), (0, import_promises.lstat)(u).catch(() => null), (0, import_promises.lstat)(m).catch(() => null), (0, import_promises.lstat)(g).catch(() => null)]);
    if (!k.isFile() || k.size > q) {
      let z = `rejected:${k.mtimeMs}:${k.size}`;
      if (I().peek(e)?.mtimeKey === z) return null;
      return (0, import_chunk_w578pjby.t)(`[jobs] skipping ${(0, import_path3.basename)(e)}: state.json is ${k.isFile() ? `too large (${k.size} bytes)` : "not a regular file"}`, { level: "warn" }), I().noteRejected(e, z), null;
    }
    let O = (z) => z !== null && z.isFile() && z.size <= q;
    y = { order: O(x), stateOrder: O(L), group: O(T) }, b = `${k.mtimeMs}:${y.order ? x.mtimeMs : 0}:${y.stateOrder ? L.mtimeMs : 0}:${y.group ? T.mtimeMs : 0}`;
  } catch (k) {
    if ((0, import_chunk_jv7av99m.J)(k)) return Ee(e, o);
    (0, import_chunk_w578pjby.t)(`[jobs] ${(0, import_path3.basename)(e)}: state.json stat failed \u2014 ${k instanceof Error ? k.message : String(k)}`, { level: "warn" });
    let x = I().peek(e);
    if (I().shouldReportTransient(e)) (0, import_chunk_y53wbr8a.a)("tengu_bg_state_read_transient", { errno: (0, import_chunk_jv7av99m.Cr)(k) ?? (0, import_chunk_78g0060s.S)("unknown"), had_cache: x !== void 0 });
    return ye(x, o);
  }
  let h = I().peek(e);
  if (h?.mtimeKey === b) return I().noteHit(e), h.state;
  try {
    let [k, x, L, T] = await Promise.all([(0, import_promises.readFile)(l, "utf-8"), y.order ? (0, import_promises.readFile)(u, "utf-8").catch(() => null) : Promise.resolve(null), y.stateOrder ? (0, import_promises.readFile)(m, "utf-8").catch(() => null) : Promise.resolve(null), y.group ? (0, import_promises.readFile)(g, "utf-8").catch(() => null) : Promise.resolve(null)]), O = (0, import_chunk_w578pjby.te)(k), z = we().safeParse(O);
    if (!z.success) {
      if ((0, import_chunk_w578pjby.t)(`[jobs] skipping ${(0, import_path3.basename)(e)}: state.json schema validation failed \u2014 ${z.error.message}`, { level: "warn" }), I().shouldReportRejected(e)) (0, import_chunk_y53wbr8a.a)("tengu_bg_state_read_rejected", {});
      return I().noteRejected(e, b), null;
    }
    let H = x !== null ? Number(x) : void 0, R = L !== null ? Number(L) : void 0, U = we().in.shape, Z = O !== null && typeof O === "object" ? Object.entries(O).filter(([st]) => !Object.hasOwn(U, st)) : [], M = { ...Object.fromEntries(Z), ...z.data };
    if (Number.isFinite(H)) M = { ...M, sortOrder: H };
    if (Number.isFinite(R)) M = { ...M, stateSortOrder: R };
    if (T !== null && T.trim()) M = { ...M, group: T.trim() };
    if (M.group !== void 0) M = { ...M, group: Se(M.group) };
    return I().noteParsed(e, b, M), M;
  } catch (k) {
    if ((0, import_chunk_jv7av99m.J)(k)) return Ee(e, o);
    if ((0, import_chunk_w578pjby.t)(`[jobs] ${(0, import_path3.basename)(e)}: state.json read/parse failed \u2014 ${k instanceof Error ? k.message : String(k)}`, { level: "warn" }), I().shouldReportTransient(e)) (0, import_chunk_y53wbr8a.a)("tengu_bg_state_read_transient", { errno: (0, import_chunk_jv7av99m.Cr)(k) ?? (0, import_chunk_78g0060s.S)("unknown"), had_cache: h !== void 0 });
    return ye(h, o);
  }
}
async function Xpr(e, r) {
  Qg(e);
  let o = await Is(e, r).catch(() => null);
  if (o !== null && o.state !== "done" && o.state !== "stopped" && o.state !== "blocked" && o.state !== "failed") await (0, import_chunk_5appeerh.K)(50), Qg(e), o = await Is(e, r).catch(() => null) ?? o;
  return o;
}
function Q() {
  return (0, import_path3.join)(N6(), "pins.json");
}
var qt = 5e3;
async function S5e(e) {
  if (e) return Yt(e);
  try {
    let r = await (0, import_promises.lstat)(Q());
    if (!r.isFile() || r.size > q) {
      if (!r.isFile()) await ge();
      return /* @__PURE__ */ new Set();
    }
    return ze(await (0, import_promises.readFile)(Q(), "utf-8"));
  } catch (r) {
    if ((0, import_chunk_jv7av99m.J)(r)) return await (0, import_chunk_q7qjcthc.yr)(Q(), (0, import_chunk_w578pjby._)([])).catch((o) => {
      if (!(0, import_chunk_jv7av99m.J)(o)) Lu(o);
    }), /* @__PURE__ */ new Set();
    return /* @__PURE__ */ new Set();
  }
}
async function Yt(e) {
  let r = await Vas(e, import_chunk_hkvzj051.at.jobPins(), { cap: q, screens: rt(), screenKey: Q(), heal: ge });
  return ze(r ?? void 0);
}
function rt() {
  return zas.of((0, import_chunk_f9x2f6cx.N)().host).pins;
}
function ze(e) {
  if (e === void 0 || e.length > q) return /* @__PURE__ */ new Set();
  let r;
  try {
    r = (0, import_chunk_w578pjby.te)(e);
  } catch {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(r)) return /* @__PURE__ */ new Set();
  return new Set(r.filter((o) => typeof o === "string"));
}
async function ge(e) {
  let r = await (0, import_promises.lstat)(Q()).catch(() => {
    return;
  });
  if (r === void 0 || r.isFile() && !(e?.evenRegular && r.size > q)) return false;
  return await (0, import_promises.rm)(Q(), { recursive: true, force: true }).catch(() => {
  }), true;
}
async function DCe(e, r, o, l, u) {
  let m = Bs(e), g = await Is(m, l);
  if (!g) return false;
  if (g.name === r) return true;
  return uDe(async () => {
    Qg(m);
    let b = await Is(m, l) ?? g;
    if (b.name === r || o === "auto" && b.name) return true;
    if (!ot(b, u)) return false;
    return Hf(m, { ...b, name: r, nameSource: o, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, l).then(() => true, (y) => {
      if (!(0, import_chunk_jv7av99m.J)(y)) Lu(y);
      return false;
    });
  });
}
async function Jpr(e, r, o) {
  let l = Bs(e), u = await Is(l, o);
  if (!u) return false;
  if (u.color === r) return true;
  Qg(l);
  let m = await Is(l, o) ?? u;
  if (m.color === r) return true;
  return Hf(l, { ...m, color: r, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o).then(() => true, (g) => {
    if (!(0, import_chunk_jv7av99m.J)(g)) Lu(g);
    return false;
  });
}
function Zas() {
  return (0, import_chunk_r3wrey46.Lne)().relocatedCwd;
}
async function Qpr(e, r) {
  let o = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!o || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  (0, import_chunk_r3wrey46.Lne)().relocatedCwd = e, Qg(o);
  let l = await Is(o, r), u = l?.worktreePath ? l.originCwd : e;
  if (!l || l.cwd === e && l.originCwd === u) return;
  Qg(o);
  let m = await Is(o, r) ?? l;
  await Hf(o, { ...m, cwd: e, originCwd: m.worktreePath ? m.originCwd : e, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, r).catch((g) => {
    if (!(0, import_chunk_jv7av99m.J)(g)) Lu(g);
  });
}
async function Eki(e, r, o) {
  let l = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!l || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  Qg(l);
  let u = await Is(l, o);
  if (!u || u.resumeSessionId === e && u.linkScanPath === r) return;
  Qg(l);
  let m = await Is(l, o) ?? u;
  await Hf(l, { ...m, resumeSessionId: e, linkScanPath: r, linkScanOffset: 0, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o).catch((g) => {
    if (!(0, import_chunk_jv7av99m.J)(g)) Lu(g);
  });
}
async function b5e(e, r, { includeSettled: o = false } = {}) {
  let l = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!l || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await uDe(async () => {
    Qg(l);
    let u = await Is(l, r);
    if (!u?.inFlight || Wd(u) && !o || u.tempo === "active") return;
    let m = u.inFlight;
    if (e.count === m.tasks && (e.drainableMonitors ?? 0) === (m.drainableMonitors ?? 0) && e.kinds.length === m.kinds.length && e.kinds.every((g) => m.kinds.includes(g))) return;
    await Hf(l, { ...u, inFlight: { tasks: e.count, queued: m.queued, kinds: [...e.kinds], ...e.drainableMonitors !== void 0 && e.drainableMonitors > 0 && { drainableMonitors: e.drainableMonitors }, ...m.wake !== void 0 && { wake: m.wake } }, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, r).catch((g) => {
      if (!(0, import_chunk_jv7av99m.J)(g)) Lu(g);
    });
  });
}
function ot(e, r) {
  if (r === void 0 || !e.name) return true;
  if (e.nameSource === "auto" || e.nameSource === "collision") return true;
  return r.includes((0, import_chunk_xfj2cwfv.Ba)(e.name));
}
async function BW(e, r, o, l, u, m, g) {
  let b = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!b || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await uDe(async () => {
    Qg(b);
    let y = await Is(b, u);
    if (!y?.respawnFlags) return;
    if (g && !g(y.respawnFlags)) return;
    let h = [e, ...r], k = (z) => {
      let H = [];
      for (let R = 0; R < z.length; R++) {
        let U = z[R];
        if (h.some((Z) => U === Z || U.startsWith(`${Z}=`))) {
          if (U.indexOf("=") === -1 && z[R + 1] !== void 0) R++;
          continue;
        }
        H.push(U);
      }
      if (o === null) return H;
      return [...H, ...(0, import_chunk_dw5px5e0.Pv)(e, o)];
    }, x = k(y.respawnFlags);
    if (x.length === y.respawnFlags.length && x.every((z, H) => z === y.respawnFlags[H])) return;
    Qg(b);
    let L = await Is(b, u) ?? y, T = L.respawnFlags ?? y.respawnFlags;
    if (g && !g(T)) return;
    let O = ot(L, m);
    await Hf(b, { ...L, ...O ? l : {}, respawnFlags: k(T), updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, u).catch((z) => {
      if (!(0, import_chunk_jv7av99m.J)(z)) Lu(z);
    });
  });
}
async function vki(e, r, o) {
  let l = import_chunk_c203g5kd.s.CLAUDE_JOB_DIR;
  if (!l || import_chunk_c203g5kd.s.CLAUDE_CODE_SESSION_KIND !== "bg") return;
  await uDe(async () => {
    Qg(l);
    let u = await Is(l, o);
    if (!u?.respawnFlags) return;
    let m = (0, import_chunk_dw5px5e0.Pv)(e, r);
    for (let b = 0; b <= u.respawnFlags.length - m.length; b++) if (m.every((y, h) => u.respawnFlags[b + h] === y)) return;
    Qg(l);
    let g = await Is(l, o) ?? u;
    await Hf(l, { ...g, respawnFlags: [...g.respawnFlags ?? [], ...m], updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o).catch((b) => {
      if (!(0, import_chunk_jv7av99m.J)(b)) Lu(b);
    });
  });
}
async function ve(e, r) {
  await (0, import_promises.rm)(e, { force: true });
  let o = await (0, import_chunk_q7qjcthc.gL)(e, r);
  try {
    await (0, import_chunk_q7qjcthc.ra)(o, e);
  } catch (l) {
    throw await (0, import_promises.rm)(o, { force: true }).catch(() => {
    }), l;
  }
}
async function Pe(e, r, o) {
  let l = await e.write(r, o, { parent: "mustExist", mode: 438 & ~process.umask() });
  if (!l.ok) {
    let u = (0, import_chunk_7n1spq36.Xg)(l.error);
    throw Object.assign(new import_chunk_jv7av99m.A(`[jobs] v5 sidecar write failed: ${(0, import_chunk_7n1spq36.un)(l.error)}`, "[jobs] v5 sidecar write failed"), u !== void 0 ? { code: u } : {});
  }
}
async function Tki(e, r, o) {
  let l = (0, import_chunk_m15w38ag.ne)() && o ? Gnn(e, ["order"]) : void 0;
  if (o && l) await Pe(o, l, String(r));
  else await ve((0, import_path3.join)(e, "order"), String(r));
  Qg(e);
}
async function Cki(e, r, o) {
  let l = (0, import_chunk_m15w38ag.ne)() && o ? Gnn(e, ["stateOrder"]) : void 0;
  if (o && l) await Pe(o, l, String(r));
  else await ve((0, import_path3.join)(e, "stateOrder"), String(r));
  Qg(e);
}
async function Pao(e, r, o) {
  let l = (0, import_path3.join)(e, "group"), u = Se(r), m = (0, import_chunk_m15w38ag.ne)() && o ? Gnn(e, ["group"]) : void 0;
  if (o && m) if (u) await Pe(o, m, u);
  else {
    let g = await o.delete(m);
    if (!g.ok) throw new import_chunk_jv7av99m.A(`[jobs] v5 sidecar delete failed: ${g.error.code}`, "[jobs] v5 sidecar delete failed");
  }
  else if (u) await ve(l, u);
  else await (0, import_promises.rm)(l, { force: true });
  Qg(e);
}
async function Aki(e) {
  var _stack = [];
  try {
    let r = (0, import_path3.join)(N6(), ".order");
    await (0, import_promises.mkdir)(N6(), { recursive: true });
    const o = __using(_stack, await (0, import_chunk_2yx6c1y2.Rc)(r, { realpath: false, stale: 5e3, retries: { retries: 5, minTimeout: 20 }, onCompromised: (l) => (0, import_chunk_w578pjby.t)(`jobs/.order lock compromised (likely process suspend or slow fs): ${l}`, { level: "error" }) }), true);
    return await e();
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
var it = (0, import_chunk_gjzwg6ck.GS)();
function uDe(e) {
  return it.run("own-state.json", e);
}
function Oao(e, r, o) {
  return it.run("pins.json", async () => {
    var _stack = [];
    try {
      if ((0, import_chunk_m15w38ag.ne)() && o) return Xt(e, r, o);
      let l = Q();
      await (0, import_promises.mkdir)((0, import_path3.dirname)(l), { recursive: true });
      const u = __using(_stack, await (0, import_chunk_2yx6c1y2.Rc)(l, { realpath: false, stale: qt, retries: { retries: 5, minTimeout: 20 }, onCompromised: (g) => (0, import_chunk_w578pjby.t)(`pins.json lock compromised (likely process suspend or slow fs): ${g}`, { level: "error" }) }), true);
      let m = await S5e();
      if (r ? m.has(e) : !m.has(e)) return;
      if (r) m.add(e);
      else m.delete(e), await (0, import_promises.rm)((0, import_path3.join)(Bs(e), "order")).catch((g) => {
        if (!(0, import_chunk_jv7av99m.J)(g)) throw g;
      }), Qg(Bs(e));
      await (0, import_chunk_q7qjcthc.yr)(l, (0, import_chunk_w578pjby._)([...m], null, 2));
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  });
}
async function Xt(e, r, o) {
  let l = (y) => {
    let h = ze(y?.value);
    if (r ? h.has(e) : !h.has(e)) return { skip: true, result: false };
    if (r) h.add(e);
    else h.delete(e);
    return { write: (0, import_chunk_w578pjby._)([...h], null, 2), result: true };
  }, u = rt(), m = await o.statMeta(import_chunk_hkvzj051.at.jobPins());
  if (m.ok && m.value.size > q) await ge({ evenRegular: true }), u.delete(Q());
  else if (!m.ok && ke(m.error) !== void 0) await ge(), u.delete(Q());
  let g = { publishDiscipline: "atomic", mode: 438 & ~process.umask() }, b = await o.updateText(import_chunk_hkvzj051.at.jobPins(), l, g);
  if (!b.ok && await ge()) b = await o.updateText(import_chunk_hkvzj051.at.jobPins(), l, g);
  if (!b.ok) throw new import_chunk_jv7av99m.A(`[jobs] v5 pins update failed: ${b.error.code}`, "[jobs] v5 pins update failed");
  if (!r && b.value.result === true) {
    let y = tt(e, ["order"]);
    if (y) {
      let h = await o.delete(y);
      if (!h.ok) (0, import_chunk_w578pjby.t)(`[jobs] v5 order sidecar release failed after unpin: ${h.error.code}`, { level: "warn" });
    } else await (0, import_promises.rm)((0, import_path3.join)(Bs(e), "order")).catch((h) => {
      if (!(0, import_chunk_jv7av99m.J)(h)) (0, import_chunk_w578pjby.t)(`[jobs] order sidecar release failed after unpin: ${(0, import_chunk_jv7av99m.d)(h)}`, { level: "warn" });
    });
    Qg(Bs(e));
  }
}
async function qF(e, r, o) {
  if (r) return en(r, e, o);
  let l;
  try {
    l = await (0, import_promises.readdir)(N6(), { withFileTypes: true });
  } catch (b) {
    if ((0, import_chunk_6mfepmbb.Rz)((0, import_chunk_jv7av99m.w)(b))) o?.();
    return [];
  }
  let [u, m] = await Promise.all([S5e(), Promise.all(l.filter((b) => b.isDirectory()).map(async (b) => {
    let y = await Is((0, import_path3.join)(N6(), b.name));
    return y ? { id: b.name, state: y } : null;
  }))]), g = m.filter((b) => b !== null).map((b) => u.has(b.id) ? { ...b, state: { ...b.state, pinned: true } } : b);
  return e ? Vnn(g, e) : g;
}
async function Zt(e) {
  let r = [], o;
  do {
    let l = await e.listEntries({ namespace: "job" }, o === void 0 ? { skipScopeStats: true } : { cursor: o, skipScopeStats: true });
    if (!l.ok) return { ok: false, error: l.error };
    for (let u of l.value.items) if (u.kind === "scope" && u.scope.namespace === "job" && u.scope.jobId !== void 0 && u.scope.relPath === void 0 && (0, import_chunk_hkvzj051.Ao)(u.scope.jobId)) r.push(u.scope.jobId);
    o = l.value.cursor;
  } while (o !== void 0);
  return { ok: true, ids: r };
}
async function en(e, r, o) {
  let l = await Zt(e);
  if (!l.ok) {
    if ((0, import_chunk_6mfepmbb.hgn)(l.error)) o?.();
    return [];
  }
  let u = l.ids, [m, g] = await Promise.all([S5e(e), Promise.all(u.map(async (y) => {
    let h = await Is(Bs(y), e);
    return h ? { id: y, state: h } : null;
  }))]), b = g.filter((y) => y !== null).map((y) => m.has(y.id) ? { ...y, state: { ...y.state, pinned: true } } : y);
  return r ? Vnn(b, r) : b;
}
function Vnn(e, r) {
  let o = Date.now();
  return e.map((l) => {
    if (Wd(l.state)) return l;
    if (r.has(l.id)) return l;
    if (l.state.keptBy !== void 0 && on(l.state)) return l;
    if (o - Date.parse(l.state.createdAt) < tn) return l;
    return { ...l, state: nn(l.state) };
  });
}
var tn = 5e3;
function nn(e) {
  if (qnn(e)) return { ...e, tempo: "blocked", inFlight: void 0 };
  return { ...e, state: "failed", tempo: "idle", needs: void 0, block: void 0, inFlight: void 0, detail: (0, import_chunk_7cfjrnwy.Lm)(e.detail, "; respawning") };
}
var uWe = "starting\u2026", jv = "send a prompt to start";
function Knn(e) {
  return e.needs !== void 0 && e.needsOverlay === e.needs;
}
function qDn(e) {
  return e.needs !== void 0 && e.needsAsk?.text === e.needs ? e.needsAsk.id : void 0;
}
var a1t = `(idle \u2014 ${jv})`, Ebt = ["starting", "resuming", "adopted", "crashed"], YDn = 1728e5, rn = "ended while the background service was off";
function w5e(e) {
  let r = (/* @__PURE__ */ new Date()).toISOString();
  return { state: "working", detail: e.detail !== void 0 ? (0, import_chunk_sah8dzn4.As)(e.detail) : uWe, tempo: e.tempo ?? "active", needs: e.needs, inFlight: e.inFlight, output: null, children: null, linkScanOffset: 0, linkScanPath: e.linkScanPath, template: e.template.name, routine: e.routine, respawnFlags: e.respawnFlags ?? [], bgIsolation: e.bgIsolation, dispatchEntrypoint: (0, import_chunk_xfj2cwfv.Sxo)(), providerEnv: e.providerEnv && (0, import_chunk_sdks5h78.crl)(e.providerEnv, e.cwd), sessionPermissionRules: e.sessionPermissionRules, memoryToggledOff: e.memoryToggledOff, autoMemoryOffThisSession: e.autoMemoryOffThisSession, forkSourceAlive: e.forkSourceAlive, forkBoundaryAt: e.forkBoundaryAt, forkSessionId: e.forkSessionId, forkParentSessionId: e.forkParentSessionId, interactiveLineage: e.interactiveLineage, intent: e.intent, displayIntent: e.displayIntent, name: e.name, nameSource: e.nameSource, color: (0, import_chunk_xfj2cwfv.lct)({ userOverride: e.color, agentDefinitionColor: e.template.color }), initialPrompt: e.template.initialPrompt, sessionId: e.sessionId, resumeSessionId: e.sessionId, daemonShort: e.sessionId.slice(0, 8), cwd: e.cwd, createdAt: r, updatedAt: r, firstTerminalAt: null, worktreePath: e.worktreePath, worktreeBranch: e.worktreeBranch, worktreeHookBased: e.worktreeHookBased, worktreeCopy: e.worktreeCopy, originCwd: e.originCwd, backend: "daemon" };
}
async function Rki(e, r, o) {
  if (r.length === 0) return e;
  let l = new Set(e.map((h) => h.id)), u = r.filter((h) => et.test(h.short) && !l.has(h.short) && h.source !== "spare" && !h.dying);
  if (u.length === 0) return e;
  let m = await Mq({ silent: true }, o), g = await Promise.all(u.map((h) => {
    let k = m.workers[h.short];
    return Aao(h.pid, k?.pid === h.pid ? k.procStart : void 0);
  }));
  for (let [h, k] of u.entries()) if (g[h] !== "live") {
    if ((0, import_chunk_w578pjby.t)(`[adoptRosterOrphans] pruned dead record ${k.short} (${g[h]})`), I().shouldReportPruned(k.short)) (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_orphan_pruned", { reason: (0, import_chunk_78g0060s.f)(g[h] ?? "dead_pid") });
  } else I().notePruneCandidateLive(k.short);
  let b = u.filter((h, k) => g[k] === "live");
  if (b.length === 0) return e;
  let y = await Promise.all(b.map(async (h) => {
    let k = { ...w5e({ template: { name: h.agent ?? "bg", description: "" }, routine: h.routine, intent: h.intent, name: h.name, detail: h.detail, ...h.tempo === "active" && (h.state === "running" || Ebt.includes(h.state)) ? h.routine ? { tempo: "idle" } : { tempo: "blocked", needs: jv } : { tempo: h.tempo, needs: h.needs }, sessionId: (0, import_chunk_z6pfqf6e.vF)(h.sessionId), cwd: (0, import_chunk_z6pfqf6e.vF)(h.cwd), worktreePath: h.worktreePath === void 0 ? void 0 : (0, import_chunk_z6pfqf6e.vF)(h.worktreePath) }), dispatchEntrypoint: void 0, createdAt: new Date(h.createdAt ?? h.startedAt).toISOString(), daemonShort: h.short, state: Ebt.includes(h.state) ? "working" : h.state, ...aN(h.state) && { inFlight: { tasks: 0, queued: 0, kinds: [] } } }, x = Bs(h.short), L = o ? tt(h.short, [re]) : void 0, T = false;
    if (o && L) {
      let O = await o.write(L, (0, import_chunk_w578pjby._)(k), { precondition: { type: "ifAbsent" }, mode: 384, parent: "mustExist" }).catch(() => {
        Lu(new import_chunk_jv7av99m.A("[jobs] v5 orphan seed write threw", "[jobs] v5 orphan seed write threw"));
        return;
      });
      if (O?.ok) T = true, (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_orphan_adopted", {});
      else if (O && O.error.code !== "AlreadyExists" && !(0, import_chunk_7n1spq36.U4t)(O.error)) Lu(new import_chunk_jv7av99m.A(`[jobs] v5 orphan seed write failed: ${O.error.code}`, "[jobs] v5 orphan seed write failed"));
    } else try {
      await (0, import_chunk_q7qjcthc.l2)((0, import_path3.join)(x, "state.json"), (0, import_chunk_w578pjby._)(k), 384), T = true, (0, import_chunk_y53wbr8a.a)("tengu_bg_roster_orphan_adopted", {});
    } catch (O) {
      let z = (0, import_chunk_jv7av99m.w)(O);
      if (z !== "EEXIST" && z !== "ENOENT") Lu(O);
    }
    return { id: h.short, state: T ? k : { ...k, updatedAt: k.createdAt } };
  }));
  return [...e, ...y];
}
function Hk(e) {
  if (e === "done") return "success";
  if (e === "failed") return "failure";
  if (e === "stopped") return "stopped";
  return null;
}
function aN(e) {
  return Hk(e) !== null;
}
function Wd(e) {
  return aN(e.state) && e.tempo !== "active";
}
function on(e) {
  return e.intent === "" && e.needs === jv && e.tempo === "blocked" && !Wd(e);
}
function rv(e) {
  return e.template === "exec" && e.respawnFlags.length === 0;
}
function qnn(e) {
  return e.state === "blocked" && !rv(e);
}
function l1t(e) {
  return e.backend === "daemon" && !rv(e);
}
function fDe(e) {
  let r = e.originCwd || (e.cwd.match(/^(.+?)[/\\]\.claude[/\\]worktrees[/\\]/)?.[1] ?? e.cwd);
  return (0, import_chunk_z6pfqf6e.vF)(r);
}
function Zpr(e, r) {
  if (e.backend === "remote") return true;
  let o = (0, import_path3.relative)(r, fDe(e));
  return o.split(/[/\\]/, 1)[0] !== ".." && !(0, import_path3.isAbsolute)(o);
}
function Ynn(e) {
  let r = (o) => o?.trim().toLowerCase().startsWith("/loop") ?? false;
  return r(e.intent) || r(e.initialPrompt);
}
function wSe(e) {
  return e.routine !== void 0 || e.selfWake === true || (e.inFlight?.kinds.includes("session_cron") ?? false) || Ynn(e);
}
function d1t(e, r, o, l, u) {
  let m = Bs(e);
  return Is(m, u).then(async (g) => {
    if (!g || Wd(g) || r === "failed" && qnn(g)) return "none";
    let b = Date.now(), y = new Date(b).toISOString(), h = l?.resumable === "auto-resume" && r === "failed" && !rv(g) && b - Date.parse(g.updatedAt) > YDn;
    return await Hf(m, { ...g, state: h ? "stopped" : r === "crashed" ? "failed" : r, detail: h ? rn : r === "stopped" ? "stopped" : r === "failed" ? (0, import_chunk_7cfjrnwy.Lm)(g.detail || o, "; respawning") : o, tempo: "idle", inFlight: void 0, needs: void 0, updatedAt: y, firstTerminalAt: g.firstTerminalAt ?? (h ? g.updatedAt : y), lastTerminalAt: h ? g.updatedAt : y, ...l?.resumable === "auto-resume" && r === "failed" && (h ? { deadEpochReapedAt: y } : { reapedMidWorkAt: g.updatedAt }), ...l?.resumable === "wake-only" && r === "failed" && { reapedUnsettledAt: g.updatedAt } }, u), h ? "dead-epoch" : "settled";
  }).catch((g) => (Lu(g), "none"));
}
var sn = "To reattach to a cloud session, pass its id: `claude --cloud <session-id>` (find IDs at claude.ai/code).";
function Xnn(e) {
  return (0, import_chunk_mzmcvr6c.ht)(e.trim()) !== null;
}
function Oki(e) {
  return `Error: ${Qnn(e)} is not a cloud session ID.
For a session on this computer, run \`claude --resume ${e.trim()}\`. For a cloud session, pass its ID (session_... or cse_...) or its claude.ai/code URL.`;
}
function sZa() {
  return false;
}
function Iki(e) {
  let r = "Error: ", o = "--cloud", l = `
${sn}`;
  if (e.hasPool || e.hasEnvironmentQuery) {
    let u = c1t(e.isChosenByNoMonorepo === true);
    r = u.prefix, o = u.flag, l = "";
  }
  if (e.loneWordValue !== void 0 && Xnn(e.loneWordValue)) return Oki(e.loneWordValue);
  if (e.print && !e.hasPool && !e.isCloudAttach && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${Qnn(e.loneWordValue)} is not a cloud session ID or URL.
With --print, --cloud sends the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session from a description instead, drop --print.`;
    return `Error: ${o} cannot be combined with --print.
Starting a new cloud session with ${o} is interactive only: drop --print, or drop ${o} to run locally. To message an existing cloud session instead, pass its ID: \`claude -p "message" --cloud <session-id>\` (find IDs at claude.ai/code).`;
  }
  if (e.nonInteractive && !e.hasPool && !e.isCloudAttach && !e.headlessCloud && !e.headlessCloudPrint) {
    if (e.loneWordValue !== void 0) return `Error: --cloud ${Qnn(e.loneWordValue)} is not a cloud session ID or URL.
Without an interactive terminal, --cloud can only send the prompt to an existing cloud session: pass its ID (session_... or cse_...) or its claude.ai/code URL. To start a new cloud session, run in an interactive terminal.`;
    return `Error: ${o} requires an interactive terminal.
Non-interactive runs (piped stdout, --init-only, --sdk-url) run locally and would silently ignore ${o}. Drop ${o}, or run in an interactive terminal.`;
  }
  if (e.continue) return `${r}${o} cannot be combined with --continue.${l}`;
  if (e.hasConnect || e.hasSSH || e.hasTeleport) {
    let u = e.hasConnect ? "a cc:// connect URL" : e.hasSSH ? "`claude ssh`" : "--teleport";
    return `${r}${o} cannot be combined with ${u} \u2014 both choose where the session runs; pick one.`;
  }
  if (e.resume || e.fromPr) {
    let u = e.resume ? "--resume" : "--from-pr";
    return `${r}${o} cannot be combined with ${u}.${l}`;
  }
  return null;
}
function iZa(e) {
  return !e.print && !e.initOnly && e.nonInteractive && !e.hasSdkUrl && e.inputFormat === "stream-json" && e.outputFormat === "stream-json";
}
function aZa(e) {
  return e.print && !e.initOnly && !e.hasSdkUrl && e.outputFormat !== "stream-json";
}
function Mki(e) {
  if (e.some((r) => r === "--environment" || r.startsWith("--environment=") || r === "--pool" || r.startsWith("--pool="))) return "--bg and --environment can't be combined. Use `claude -p '<task>' --environment <id>` directly to start a session on the environment.";
  return "--bg and --cloud can't be combined. Use `claude --cloud '<task>'` directly to start a cloud session.";
}
function c1t(e) {
  return { prefix: "Error: ", flag: "--environment" };
}
function tmr(e) {
  if (e.some((r) => r === "--environment" || r.startsWith("--environment=") || r === "--pool" || r.startsWith("--pool="))) return true;
  return e.some((r) => r === "--cloud" || r.startsWith("--cloud=") || r === "--remote" || r.startsWith("--remote="));
}
function Jnn(e) {
  let r = [];
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    if (l === "--") {
      for (let u = o; u < e.length; u++) r.push(e[u]);
      break;
    }
    if (l.startsWith("--environment=") || l.startsWith("--pool=")) continue;
    if (l === "--environment" || l === "--pool") {
      if (e[o + 1] !== void 0 && !e[o + 1].startsWith("-")) o++;
      continue;
    }
    r.push(l);
  }
  return r;
}
var dn = 100;
function Qnn(e) {
  let r = (0, import_chunk_7cfjrnwy.ee)(e, dn);
  return (0, import_chunk_kx2fp6pc.K8)((0, import_chunk_w578pjby._)(r.length < e.length ? `${r}\u2026` : r));
}
