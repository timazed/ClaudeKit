const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
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
var chunk_w578pjby_exports = {};
__export(chunk_w578pjby_exports, {
  $K: () => $K,
  Ace: () => Ace,
  Cs: () => Cs,
  Ct: () => Ct,
  Cv: () => Cv,
  DLr: () => DLr,
  DLs: () => DLs,
  DOe: () => DOe,
  EL: () => EL,
  Ei: () => Ei,
  FK: () => FK,
  G8: () => G8,
  HLr: () => HLr,
  HLs: () => HLs,
  I4t: () => I4t,
  II: () => II,
  J0o: () => J0o,
  Joa: () => Joa,
  K0o: () => K0o,
  KM: () => KM,
  Ka: () => Ka,
  Kft: () => Kft,
  Koa: () => Koa,
  LB: () => LB,
  LLr: () => LLr,
  LLs: () => LLs,
  M4t: () => M4t,
  MLs: () => MLs,
  NLs: () => NLs,
  O4t: () => O4t,
  Pg: () => Pg,
  Qoa: () => Qoa,
  RD: () => RD,
  Rce: () => Rce,
  SQe: () => SQe,
  V0o: () => V0o,
  Vft: () => Vft,
  Voa: () => Voa,
  X0o: () => X0o,
  Xft: () => Xft,
  Xoa: () => Xoa,
  Y0o: () => Y0o,
  Yft: () => Yft,
  Yoa: () => Yoa,
  Z4n: () => Z4n,
  Zoa: () => Zoa,
  Zp: () => Zp,
  _: () => _,
  _$: () => _$,
  _Qe: () => _Qe,
  _yn: () => _yn,
  cWl: () => cWl,
  c_: () => c_,
  cs: () => cs,
  cte: () => cte,
  dte: () => dte,
  esa: () => esa,
  fP: () => fP,
  fWl: () => fWl,
  g$: () => g$,
  gJ: () => gJ,
  hJ: () => hJ,
  ig: () => ig,
  j8: () => j8,
  kL: () => kL,
  le: () => le,
  mJ: () => mJ,
  mse: () => mse,
  no: () => no,
  nsa: () => nsa,
  oA: () => oA,
  oPt: () => oPt,
  osa: () => osa,
  oy: () => oy,
  pWl: () => pWl,
  pse: () => pse,
  q0o: () => q0o,
  qft: () => qft,
  qoa: () => qoa,
  rsa: () => rsa,
  sPt: () => sPt,
  ssa: () => ssa,
  sx: () => sx,
  sy: () => sy,
  t: () => t,
  te: () => te,
  tsa: () => tsa,
  tw: () => tw,
  uWl: () => uWl,
  u_: () => u_,
  ua: () => ua,
  y1e: () => y1e,
  yQe: () => yQe,
  yS: () => yS,
  zoa: () => zoa
});
module.exports = __toCommonJS(chunk_w578pjby_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_xppq9kzc = require("/$bunfs/root/chunk-xppq9kzc.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var h = __toESM(require("fs"));
var import_promises2 = require("fs/promises");
var import_os = require("os");
var u = __toESM(require("path"));
var import_fs = require("fs");
var import_fs2 = require("fs");
function oy(e) {
  return { ok: true, value: e };
}
function Zp(e) {
  return { ok: false, error: e };
}
class Be extends Error {
  constructor(e) {
    super("Result was an error (see .error)");
    this.name = "ResultError", Object.defineProperty(this, "error", { value: e, enumerable: false });
  }
}
function cWl(e) {
  if (e.ok) return e.value;
  throw new Be(e.error);
}
var yS = { home: (e) => ({ space: "home", path: e }), workspace: (e) => ({ space: "workspace", path: e }), system: (e) => ({ space: "system", path: e }), userNamed: (e) => ({ space: "userNamed", path: e }) };
function zoa(e) {
  if (typeof e !== "object" || e === null) return false;
  let n = Reflect.get(e, "code"), r = Reflect.get(e, "telemetryCode");
  return n === "Failed" && typeof r === "string" && ((0, import_chunk_jv7av99m.wte)(r) !== void 0 || /^ERR_[A-Z0-9_]+$/.test(r));
}
function uWl(e) {
  if (zoa(e)) {
    if (e.cause instanceof Error) return e.cause;
    return Object.assign(new import_chunk_jv7av99m.A((0, import_chunk_7n1spq36.un)(e), "host file operation refused by the storage backend"), { code: e.telemetryCode, cause: e });
  }
  return Object.assign(new import_chunk_jv7av99m.A((0, import_chunk_7n1spq36.un)(e), "host file operation could not be performed by the storage backend"), { cause: e });
}
var Se = globalThis.process?.getBuiltinModule?.("async_hooks"), We = Se !== void 0, ve = Se ? new Se.AsyncLocalStorage() : { run: (e, n) => n(), getStore: () => {
  return;
} };
function xe({ writeBatch: e, sizeOf: n, flushIntervalMs: r = 1e3, maxBufferSize: i = 100, maxBufferBytes: s = 1 / 0, immediateMode: o = false }) {
  let l = [], a = 0, c = null, f = null;
  function d() {
    if (c) clearTimeout(c), c = null;
  }
  function v(E) {
    try {
      e(E);
    } catch {
    }
  }
  function p() {
    if (f) v(f), f = null;
    if (l.length === 0) return;
    v(l), l = [], a = 0, d();
  }
  function m() {
    if (!c) c = setTimeout(p, r);
  }
  function F() {
    if (f) {
      f.push(...l), l = [], a = 0, d();
      return;
    }
    let E = l;
    l = [], a = 0, d(), f = E, setImmediate(() => {
      let b = f;
      if (f = null, b) v(b);
    });
  }
  return { write(E) {
    if (o) {
      v([E]);
      return;
    }
    if (l.push(E), a += n(E), m(), l.length >= i || a >= s) F();
  }, flush: p, dispose() {
    p();
  } };
}
function fWl({ writeFn: e, flushIntervalMs: n, maxBufferSize: r, maxBufferBytes: i, immediateMode: s }) {
  return xe({ writeBatch: (o) => e(o.join("")), sizeOf: (o) => o.length, flushIntervalMs: n, maxBufferSize: r, maxBufferBytes: i, immediateMode: s });
}
function Rt(e) {
  if (typeof e === "function") return e;
  if (Symbol.asyncDispose in e) return () => e[Symbol.asyncDispose]();
  return () => e[Symbol.dispose]();
}
class fe {
  #e = /* @__PURE__ */ new Set();
  #t = false;
  get drainStarted() {
    return this.#t;
  }
  register(e) {
    let n = Rt(e);
    this.#e.add(n);
    let r = () => {
      this.#e.delete(n);
    };
    return Object.assign(r, { [Symbol.dispose]: r });
  }
  async drain() {
    this.#t = true;
    let e = Array.from(this.#e);
    this.#e.clear();
    let r = (await Promise.allSettled(e.map(async (i) => i()))).find((i) => i.status === "rejected");
    if (r !== void 0) throw r.reason;
  }
  async [Symbol.asyncDispose]() {
    await this.drain();
  }
  get sizeForTesting() {
    return this.#e.size;
  }
}
class Me {
  cleanup = new fe();
  preExitFlush = new fe();
  preExitFlushWaits = /* @__PURE__ */ new Map();
}
var Dt = new import_chunk_2904xtvq.j(() => new Me());
function z() {
  return (0, import_chunk_f9x2f6cx.kr)(Dt);
}
var FK = 2e3;
function Ct(e) {
  return z().cleanup.register(e);
}
async function Vft() {
  await z().cleanup.drain();
}
function c_() {
  return z().cleanup.drainStarted;
}
function oA(e, n) {
  let { preExitFlush: r, preExitFlushWaits: i } = z(), s = r.register(e);
  if (n !== void 0) i.set(e, { mayWaitMs: n, unregister: s });
  let o = () => {
    i.delete(e), s();
  };
  return Object.assign(o, { [Symbol.dispose]: o });
}
function Voa() {
  return Math.max(0, ...Array.from(z().preExitFlushWaits.values(), (e) => e.mayWaitMs));
}
async function pWl() {
  let { preExitFlushWaits: e } = z(), n = new fe();
  e.forEach(({ unregister: r }, i) => {
    r(), n.register(i);
  }), e.clear(), await n.drain();
}
async function q0o() {
  let { preExitFlush: e, preExitFlushWaits: n } = z();
  n.clear(), await e.drain();
}
class Ue {
  parsed = /* @__PURE__ */ new Map();
  lookup(e) {
    return this.parsed.get(e);
  }
  remember(e, n) {
    this.parsed.set(e, n);
  }
  reset() {
    this.parsed.clear();
  }
}
var je = new Ue();
function Ve(e) {
  let n = je.lookup(e);
  if (n !== void 0) return n;
  let r = At(e);
  return je.remember(e, r), r;
}
function At(e) {
  if (!e || e.trim() === "") return null;
  let n = e.split(",").map((o) => o.trim()).filter(Boolean);
  if (n.length === 0) return null;
  let r = n.some((o) => o.startsWith("!")), i = n.some((o) => !o.startsWith("!"));
  if (r && i) return null;
  let s = n.map((o) => o.replace(/^!/, "").toLowerCase());
  return { include: r ? [] : s, exclude: r ? s : [], isExclusive: r };
}
function Tt(e) {
  let n = [], r = e.match(/^MCP server ["']([^"']+)["']/);
  if (r && r[1]) n.push("mcp"), n.push(r[1].toLowerCase());
  else {
    let o = e.match(/^([^:[]+):/);
    if (o && o[1]) n.push(o[1].trim().toLowerCase());
  }
  let i = e.match(/^\[([^\]]+)]/);
  if (i && i[1]) n.push(i[1].trim().toLowerCase());
  if (e.toLowerCase().includes("1p event:")) n.push("1p");
  let s = e.match(/:\s*([^:]+?)(?:\s+(?:type|mode|status|event))?:/);
  if (s && s[1]) {
    let o = s[1].trim().toLowerCase();
    if (o.length < 30 && !o.includes(" ")) n.push(o);
  }
  return Array.from(new Set(n));
}
function Nt(e, n) {
  if (!n) return true;
  if (e.length === 0) return false;
  if (n.isExclusive) return !e.some((r) => n.exclude.includes(r));
  else return e.some((r) => n.include.includes(r));
}
function Ge(e, n) {
  if (!n) return true;
  let r = Tt(e);
  return Nt(r, n);
}
var It = (e) => new Promise((n, r) => {
  (0, import_fs.realpath)(e, (i, s) => i === null ? n(s) : r(i));
});
var Ee = [];
function V0o() {
  return Ee.pop() ?? Buffer.allocUnsafeSlow(65536);
}
function K0o(e, n) {
  if (e.fill(0, 0, Math.min(n, e.length)), Ee.length < 2) Ee.push(e);
}
var Jn = (() => {
  let e = process.env.CLAUDE_CODE_SLOW_OPERATION_THRESHOLD_MS;
  if (e !== void 0) {
    let n = Number(e);
    if (!Number.isNaN(n) && n >= 0) return n;
  }
  return 1 / 0;
})();
var Wt = { [Symbol.dispose]() {
} };
function Mt() {
  return Wt;
}
var tw = Mt;
function _(e, n, r) {
  return JSON.stringify(e, n, r);
}
function fP(e) {
  return JSON.stringify(e) + `
`;
}
function cs(e) {
  return JSON.stringify(e);
}
function HLr(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`jsonlJoin(${e.length})`);
    let r = "";
    for (let i = 0; i < e.length; i++) r += JSON.stringify(e[i]) + `
`;
    return r;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
var te = (e, n) => {
  var _stack = [];
  try {
    const r = __using(_stack, tw`JSON.parse(${Pe(e)})`);
    return typeof n > "u" ? JSON.parse(e) : JSON.parse(e, n);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
};
function Cs(e) {
  return JSON.parse(e);
}
function Ka(e, n) {
  var _stack = [];
  try {
    const r = __using(_stack, tw`structuredClone(${Pe(e)})`);
    return structuredClone(e, n);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function I4t(e, n, r) {
  var _stack = [];
  try {
    const i = __using(_stack, tw`fs.writeFileSync(${e}, ${Pe(n)})`);
    (0, import_fs2.writeFileSync)(e, n, r);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function Pe(e) {
  return typeof e === "string" ? e.length : e;
}
var Qt = "\u2192";
function Zt() {
  return h.constants.O_NOFOLLOW | h.constants.O_NONBLOCK;
}
function G8() {
  return h.constants.O_RDONLY | h.constants.O_NONBLOCK | h.constants.O_NOCTTY;
}
var ee = /\/+/;
function Z4n(e, n) {
  let r = (a) => a.split(ee).filter(Boolean), i = u.resolve(e), s = u.resolve(n), o = r(i), l = r(s);
  return u.parse(i).root === u.parse(s).root && o.length < l.length && o.every((a, c) => a === l[c]);
}
function qe(e) {
  let n = "";
  for (let i of e.split(/([\\/]+)/)) {
    if (i === "." || i === "..") break;
    n += i;
  }
  let r = n.replace(/(?<=[^\\/])[\\/]+$/, "");
  return r === "" ? e : r;
}
function nt(e, n) {
  if (n?.surfaceNetworkRaw === true || !(0, import_chunk_wzdjp7c0.f_)() || e.includes("\uFFFD")) return e;
  let r = [];
  for (let i of e.split(u.sep)) {
    if (i === ".." && r.length > 1) break;
    if (i === "..") r.pop();
    else if (i !== "" && i !== ".") r.push(i);
  }
  return u.sep + r.join(u.sep);
}
function en(e) {
  if (e.startsWith("\\\\")) return qe(e);
  let n = e.replace(/^\/+/, "/"), r = (0, import_chunk_z6pfqf6e.H1e)(n);
  if (r !== null) return r;
  return qe(e);
}
var rt = en;
function pe(e, n, r) {
  let i = (0, import_chunk_z6pfqf6e.ad)(e);
  if (n.length === 0 || i || n.some((s) => s === "." || s === "..")) {
    if (r !== void 0 && (n.length > 0 || i)) r(u.join(e, ...n));
    return i ? rt(e) : e;
  }
  return u.join(e, ...n);
}
var Pg = "\0unverified-ancestry", II = "\0opaque-link-text";
function Oe(e) {
  return (0, import_chunk_z6pfqf6e.pg)(u.isAbsolute(e) ? e : e.replace(/^(?:\.\.(?:[\\/]+|$))+/, ""));
}
function X0o(e, n = false, r = true) {
  return e.includes("\uFFFD") || Oe(e) || n && (/^(?:[A-Za-z]:(?![\\/])|[\\/](?![\\/]))/.test(e) || /^[\\/]{2}\?[\\/]/.test(e) && !/^[\\/]{2}\?[\\/](?:[A-Za-z]:[\\/]|UNC[\\/])/i.test(e) || e.split(/[\\/]/).some((i) => i !== "." && i !== ".." && (/[. ]$/.test(i) || r && (0, import_chunk_z6pfqf6e.gjl)(i))));
}
function esa(e) {
  return e !== void 0 && e !== Pg;
}
function J0o(e) {
  return Object.assign(Error("ELOOP: symbolic link chain too long to vet"), { code: "ELOOP", path: e });
}
function Ye(e, n, r = false, i = false, s = false) {
  if (n?.unreadableAncestry !== "unverified") return;
  let o = e !== void 0 && typeof e === "object" && "errno" in e ? e.errno : void 0;
  if (o === "ENOENT" || o === "ENOTDIR") return;
  if (o === "ENAMETOOLONG" && !r && !i && !s) return;
  return Pg;
}
function ue(e) {
  return (0, import_chunk_z6pfqf6e.EF)(e);
}
function ge(e, n) {
  return n !== void 0 && n.some((r) => (0, import_chunk_z6pfqf6e.EF)(r) && !(0, import_chunk_z6pfqf6e.zz)(e, r) && (Re(e, r) || (0, import_chunk_z6pfqf6e.Fl)(e)));
}
function Xe(e, n) {
  return n !== void 0 && n.some((r) => (0, import_chunk_z6pfqf6e.EF)(r) && Re(r, e));
}
function Re(e, n) {
  let r = (o) => o.length > 1 ? o.replace(/\/+$/, "") : o, [i, s] = [r(e), r(n)];
  return i === s || i.startsWith(s === "/" ? s : s + "/");
}
function q(e, n) {
  return n === void 0 || n.every((r) => (0, import_chunk_z6pfqf6e.zz)(e, r));
}
function he(e, n) {
  return n === void 0 || n.every((r) => (0, import_chunk_z6pfqf6e.Dce)(e, r));
}
function Qe(e, n, r) {
  let i = (0, import_chunk_z6pfqf6e.Fl)(e) ? (0, import_chunk_z6pfqf6e.H1e)(e) : null;
  if (i === null || !q(i, n)) return;
  let s = u.join(e);
  if ((0, import_chunk_z6pfqf6e.Fl)(s) && (0, import_chunk_z6pfqf6e.vJ)(s) === (0, import_chunk_z6pfqf6e.vJ)(i)) return s;
  return pe(e, [], r);
}
function it(e) {
  if (e?.anchors !== void 0 && e.anchors.length > 0) return e.anchors;
  return e?.anchor !== void 0 ? [e.anchor] : void 0;
}
function g$(e, n = {}) {
  if ((0, import_chunk_z6pfqf6e.pg)(e) || (0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e) || (0, import_chunk_z6pfqf6e.dx)(e)) return true;
  let r = ig(Cv, e, Ace());
  if (r === II && n.opaqueLinkText === "throw") throw Object.assign(Error("ELOOP: symbolic link on the way cannot be checked without following it"), { code: "ELOOP", path: e });
  return r !== void 0;
}
async function qft(e) {
  return (0, import_chunk_z6pfqf6e.pg)(e) || (0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e) || (0, import_chunk_z6pfqf6e.dx)(e) || await _$(Cv, e, Ace()) !== void 0;
}
function M4t(e, n = Cv) {
  return st(e, n, sy());
}
function tsa(e, n = Cv) {
  return st(e, n, { surfaceNetworkRaw: true, unreadableAncestry: "unverified" });
}
function st(e, n, r) {
  return (0, import_chunk_z6pfqf6e.pg)(e) || (0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e) || (0, import_chunk_z6pfqf6e.dx)(e) || ig(n, e, r) !== void 0;
}
async function dte(e, n = Cv) {
  return (0, import_chunk_z6pfqf6e.pg)(e) || (0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e) || (0, import_chunk_z6pfqf6e.dx)(e) || await _$(n, e, sy()) !== void 0;
}
async function yQe(e, n, r = Cv) {
  if ((0, import_chunk_z6pfqf6e.pg)(e)) return true;
  if ((0, import_chunk_z6pfqf6e.sa)(e)) return true;
  if ((0, import_chunk_z6pfqf6e.vd)(e)) {
    let i = (0, import_chunk_z6pfqf6e.vJ)(e);
    if (i === null || n === null || i !== (0, import_chunk_z6pfqf6e.vJ)(n)) return true;
  }
  if ((0, import_chunk_z6pfqf6e.dx)(e)) return true;
  return (await MLs(e, n, { fsImpl: r })).verdict !== "clean";
}
async function MLs(e, n, { fsImpl: r = Cv, signal: i } = {}) {
  let s = await _$(r, e, { ...n === null ? {} : { anchor: n }, ...sy() }, i);
  if (s === void 0) return { verdict: "clean" };
  if (s === Pg || s === II) return { verdict: "unverified" };
  return { verdict: "network", reaches: s };
}
function sy() {
  return { surfaceNetworkRaw: true, unreadableAncestry: "unverified", ...Ace() };
}
function Ace() {
  return { literalLinkText: "undecodable" };
}
function ig(e, n, r) {
  return ot(ye(n, r), (i) => {
    if (i.kind === "lstat") return e.lstatSync(i.path);
    if (i.kind === "opendirNofollow") return e.openDirNoFollowSync(i.path), "ok";
    return e.readlinkSync(i.path);
  });
}
function _$(e, n, r, i, s) {
  return tn(ye(n, r), i, async (o) => {
    if (o.kind === "lstat") {
      if (s === void 0) return e.lstat(o.path);
      let l;
      try {
        l = await e.lstatBigint(o.path);
      } catch (a) {
        throw s(o.path, void 0), a;
      }
      return s(o.path, l), l;
    }
    if (o.kind === "opendirNofollow") return await e.openDirNoFollow(o.path), "ok";
    return e.readlink(o.path);
  });
}
function ot(e, n) {
  let r;
  for (; ; ) {
    let i = e.next(r);
    if (i.done) return i.value;
    try {
      r = n(i.value);
    } catch (s) {
      r = { errno: (0, import_chunk_jv7av99m.w)(s) };
    }
  }
}
async function tn(e, n, r) {
  let i;
  for (; ; ) {
    let s = e.next(i);
    if (s.done) return s.value;
    if (n?.aborted === true) return Pg;
    try {
      i = await r(s.value);
    } catch (o) {
      i = { errno: (0, import_chunk_jv7av99m.w)(o) };
    }
  }
}
async function nn(e, n, r, i, s) {
  let o = Symbol("cut short"), l, a = n === void 0 ? void 0 : new Promise((f) => {
    l = () => f(o), n.addEventListener("abort", l, { once: true });
  }), c;
  try {
    for (; ; ) {
      let f = e.next(c);
      if (f.done) return f.value;
      if (n?.aborted === true || r?.(f.value) === false) return s;
      let d = i(f.value).catch((p) => ({ errno: (0, import_chunk_jv7av99m.w)(p) })), v = await (a === void 0 ? d : Promise.race([d, a]));
      if (v === o) return s;
      c = v;
    }
  } finally {
    if (l !== void 0) n?.removeEventListener("abort", l);
  }
}
function* ye(e, n) {
  let r = it(n), i = (g) => ue(g) && (n?.surfaceNetworkRaw === true || r !== void 0 || (0, import_chunk_z6pfqf6e.eR)(g) || (0, import_chunk_z6pfqf6e.Fl)(g));
  if (i(e) && !ge(e, r)) return e;
  if ((0, import_chunk_z6pfqf6e.$r)(e) && !(0, import_chunk_z6pfqf6e.mc)(e) && he(e, r) || (0, import_chunk_z6pfqf6e.Fl)(e) && q(e, r)) return;
  let s = u.resolve(e), o = u.parse(s).root, l = o, a = s.slice(o.length).split(ee).filter(Boolean), c = 0, f, d = a.length, v = false, p = false, m, F = 64, E = () => a.some((g) => (0, import_chunk_z6pfqf6e.ad)(g)), b = () => /[. ]$/.test(a[0]);
  while (a.length > 0 && c < F) {
    if (v && (0, import_chunk_z6pfqf6e.ad)(a[0])) return Pg;
    let g = u.join(l, a[0]);
    if ((0, import_chunk_z6pfqf6e.Fl)(g) && q(g, r) || i(g) && !(ge(g, r) || Xe(g, r))) return pe(g, a.slice(1), n?.onCollapsedLanding);
    if ((0, import_chunk_z6pfqf6e.$w)(g)) {
      if (n?.surfaceNetworkRaw === true || n?.unreadableAncestry === "unverified") return Pg;
      return pe(g, a.slice(1), n?.onCollapsedLanding);
    }
    let P = g !== "/dev/fd" && Re(g, "/dev/fd");
    if (P && u.dirname(g) === "/dev/fd" && a.some((N, K) => K > 0 && (N === ".." || N === "."))) {
      a.shift();
      while (a[0] === "." && a.length > 1) a.shift();
      l = g;
      continue;
    }
    let x = P ? { errno: "ENOENT" } : yield { kind: "lstat", path: g };
    if (x === void 0 || typeof x === "string" || "errno" in x) {
      if (typeof x === "object" && "errno" in x && x.errno !== void 0 && x.errno !== "ENOENT" && x.errno !== "ENOTDIR" && x.errno !== "ENAMETOOLONG") {
        if (typeof (yield { kind: "opendirNofollow", path: g }) === "string") {
          p = true, a.shift(), l = g;
          continue;
        }
      }
      if (n?.launchAncestry && !p && typeof x === "object" && "errno" in x && (x.errno === "EPERM" || x.errno === "EACCES") && Z4n(g, n.launchAncestry)) {
        v = true, a.shift(), l = g;
        continue;
      }
      if (typeof x === "object" && "errno" in x && (x.errno === "ENOENT" || x.errno === "ENOTDIR")) n?.onOutcome?.({ kind: "absent", at: l, remaining: [...a], fromLinkTarget: a.length > d, ...x.errno === "ENOTDIR" && { notAFolder: true } });
      return Ye(x, n, c > 0, E(), b());
    }
    let D = x;
    if (p = true, !D.isSymbolicLink()) {
      a.shift(), l = g;
      continue;
    }
    c++;
    let T = g + "\0" + a.join("\0");
    if ((m ??= /* @__PURE__ */ new Set()).has(T)) return;
    m.add(T);
    let C = yield { kind: "readlink", path: g };
    if (typeof C !== "string") return Ye(C, n, c > 0, E(), b());
    let O = C;
    if (n?.literalLinkText !== void 0 && (n.literalLinkText === "undecodable" ? O.includes("\uFFFD") : X0o(O, void 0, n.literalLinkText === "opaque"))) return II;
    if (f !== void 0 && O.includes("\uFFFD")) return f;
    if (!u.isAbsolute(O)) {
      let N = O.split(ee).filter(Boolean);
      if (n?.surfaceNetworkRaw === true) {
        let K = Qe((l.endsWith(u.sep) ? l : l + u.sep) + [...N, ...a.slice(1)].join(u.sep), r, n?.onCollapsedLanding);
        if (K !== void 0) return K;
      }
      a.shift(), n?.onHop?.({ composed: u.resolve(l, O, ...a), leaf: a.length === 0, text: O }), d = Math.min(d, a.length), a = [...N, ...a];
      continue;
    }
    let k = O;
    if (n?.surfaceNetworkRaw === true && a.length > 1 && (0, import_chunk_z6pfqf6e.dx)(k)) {
      let N = Qe([k, ...a.slice(1)].join(u.sep), r, n?.onCollapsedLanding);
      if (N !== void 0) return N;
    }
    if ((0, import_chunk_z6pfqf6e.$r)(k) && !(0, import_chunk_z6pfqf6e.mc)(k) && he(k, r) || (0, import_chunk_z6pfqf6e.Fl)(nt(k, n)) && q(k, r) || !(0, import_chunk_z6pfqf6e.ad)(k) && i(k) && !(ge(k, r) || a.length > 1 && Xe(k, r))) return a.shift(), pe(k, a, n?.onCollapsedLanding);
    if ((0, import_chunk_z6pfqf6e.Fl)(k) || ue(k)) n?.onCollapsedLanding?.(u.join(k, ...a.slice(1)));
    if ((0, import_chunk_z6pfqf6e.Fl)(k) && q(k, r)) f ??= rt(k);
    else if ((0, import_chunk_z6pfqf6e.eR)(k)) f ??= "/Network";
    if (f !== void 0 && O.includes("\uFFFD")) return f;
    if (n?.surfaceNetworkRaw === true && (0, import_chunk_z6pfqf6e.ad)(k) && ((0, import_chunk_z6pfqf6e.$r)(k) || (0, import_chunk_z6pfqf6e.vd)(k) || (0, import_chunk_z6pfqf6e.EF)(k) || (0, import_chunk_z6pfqf6e.dx)(k))) return a.shift(), a.length === 0 ? k : k + u.sep + a.join(u.sep);
    a.shift();
    let X = u.parse(k).root || u.sep, Q = u.parse(g).root, ie = /^[\\/]$/.test(X) && Q !== "" && !/^[\\/]$/.test(Q);
    if (ie && (n?.surfaceNetworkRaw === true || n?.unreadableAncestry === "unverified")) return Pg;
    n?.onHop?.({ composed: a.length === 0 ? k : u.resolve(k, ...a), leaf: a.length === 0, text: O }), l = ie ? Q : X, p = false, d = Math.min(d, a.length), a = [...k.slice(X.length).split(ee).filter(Boolean), ...a];
  }
  if (a.length > 0 && (n?.literalLinkText === "opaque" || n?.literalLinkText === "opaque-except-devices")) return II;
  if (a.length > 0) return Pg;
  if (c > 0 && (0, import_chunk_z6pfqf6e.dx)(l)) return l;
  if (i(l) && !ge(l, r)) return l;
  n?.onOutcome?.({ kind: "resolved", path: l });
  return;
}
function no(e, n) {
  if ((0, import_chunk_z6pfqf6e.$r)(n) && !(0, import_chunk_z6pfqf6e.mc)(n) || (0, import_chunk_z6pfqf6e.Fl)(n) || (0, import_chunk_z6pfqf6e.eR)(n)) return { resolvedPath: n, isSymlink: false, isCanonical: false };
  let r = ig(e, n);
  if (r === Pg) return { resolvedPath: n, isSymlink: false, isCanonical: false };
  if (r !== void 0) return { resolvedPath: r, isSymlink: true, isCanonical: false };
  try {
    let i = mse(e, n);
    return { resolvedPath: i, isSymlink: i !== n, isCanonical: true };
  } catch (i) {
    return { resolvedPath: n, isSymlink: false, isCanonical: false };
  }
}
function kL(e) {
  let n = (0, import_chunk_h3s25p5k.GQe)();
  if (n === null) return null;
  try {
    let r = u.resolve(n), i = u.resolve(e.cwd()), s = u.parse(r).root;
    if (s !== u.parse(i).root) return null;
    let o = r.slice(s.length).split(ee).filter(Boolean), l = i.slice(s.length).split(ee).filter(Boolean), a = 0;
    while (a < o.length && a < l.length && o[a] === l[a]) a++;
    return a > 0 ? u.join(s, ...o.slice(0, a)) : null;
  } catch {
    return null;
  }
}
function mse(e, n) {
  try {
    return e.realpathSync(n);
  } catch (r) {
    let i = (0, import_chunk_jv7av99m.w)(r);
    if (i !== "EPERM" && i !== "EACCES") throw r;
    let s, o = kL(e);
    if (ig(e, n, { ...sy(), launchAncestry: o, onOutcome: (a) => {
      s = a;
    } }) !== void 0 || s === void 0) throw r;
    if (s.kind === "absent") throw Object.assign(Error("ENOENT: no such file or directory"), { code: "ENOENT", syscall: "realpath", path: n });
    return (0, import_chunk_z6pfqf6e.pn)(s.path);
  }
}
var SQe = "ERR_SYMLINK_TO_NETWORK_PATH";
function RD(e, n, r) {
  let { asWritten: i, opts: s } = ut(e, n, r), o, l;
  return ct(ig(e, i, { ...s, onOutcome: (a) => {
    o = at(a), l = lt(a);
  } }), n, i), { ...dt(i), linksResolvedPath: o, absentAt: l };
}
async function EL(e, n, r) {
  let { asWritten: i, opts: s, ownHost: o } = ut(e, n, r), l, a, c, f, d = !o, v = false, p, m = [], F = { ...s, onOutcome: (E) => {
    v = true, l = at(E), a = lt(E);
    let b = p, g = E.kind === "resolved" && b?.path === E.path;
    d = !g, f = g ? b.stats : void 0, c = g && !(0, import_chunk_kpby9tcv.ia)(b.stats.ino) ? { dev: b.stats.dev, ino: b.stats.ino, ctimeNs: b.stats.ctimeNs } : void 0;
  } };
  if (ct(await _$(e, i, F, void 0, r?.fileIdentity === true ? (E, b) => {
    if (p = b === void 0 ? void 0 : { path: E, stats: b }, b?.isSymbolicLink() === true) m.push(b);
  } : void 0), n, i), !v && p?.stats.isSymbolicLink() === true) d = true;
  return { ...dt(i), linksResolvedPath: l, absentAt: a, ...c !== void 0 && { identity: c }, ...f !== void 0 && { endStats: f }, ...r?.fileIdentity === true && { linksFollowed: m }, ...r?.fileIdentity === true && d && { noFileSeen: true } };
}
function at(e) {
  return e.kind === "resolved" ? (0, import_chunk_z6pfqf6e.pn)(e.path) : void 0;
}
function lt(e) {
  return e.kind === "absent" ? { at: e.at, remaining: e.remaining, fromLinkTarget: e.fromLinkTarget, ...e.notAFolder && { notAFolder: true } } : void 0;
}
function ut(e, n, r) {
  let i = (0, import_chunk_z6pfqf6e.uC)(n);
  if ((0, import_chunk_z6pfqf6e.bO)(i) || (0, import_chunk_z6pfqf6e.xv)(i)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), { code: SQe, path: n, reason: "unexamined" });
  let s = u.isAbsolute(i) ? u.resolve(i) : u.resolve(process.cwd(), i), o = (0, import_chunk_z6pfqf6e.uC)(s);
  if ((0, import_chunk_z6pfqf6e.bO)(o) || (0, import_chunk_z6pfqf6e.xv)(o)) throw Object.assign(Error("Refusing to read a file whose path could not be vetted (a device-namespace spelling; use the plain drive or share path)"), { code: SQe, path: n, reason: "unexamined" });
  let l = ue(o) || (0, import_chunk_z6pfqf6e.Fl)(o) || (0, import_chunk_z6pfqf6e.$r)(o) && !(0, import_chunk_z6pfqf6e.mc)(o);
  return { asWritten: o, ownHost: l, opts: { ...l && { anchors: [o] }, surfaceNetworkRaw: true, ...Ace(), ...(!l || r?.failClosed) && { unreadableAncestry: "unverified", launchAncestry: kL(e) } } };
}
function dt(e) {
  return { resolvedPath: e, isSymlink: false, isCanonical: false };
}
function ct(e, n, r) {
  if (e === void 0) return;
  let i = (o) => Object.assign(Error("Refusing to read a file whose path could not be vetted (a component that could not be examined, or a symbolic link chain too long to follow)"), { code: SQe, path: n, reason: o });
  if (e === Pg) throw i("unexamined");
  if (e === II) throw Object.assign(Error('Refusing to read a file whose path could not be vetted: a symbolic link on its path has a target that may lead to a different folder than the one that was checked (such as a target that is not valid UTF-8, or, on Windows, one with ".." after a folder name), or the path runs through too many links. Replace that link, or the chain of links, with a regular folder or file.'), { code: SQe, path: n, reason: "unexamined" });
  if (ue(r) && e === r) return;
  if (!((0, import_chunk_z6pfqf6e.$r)(e) || (0, import_chunk_z6pfqf6e.vd)(e) || ue(e) || (0, import_chunk_z6pfqf6e.dx)(e))) throw i("unexamined");
  throw Object.assign(Error("Refusing to read a file through a symbolic link that leads onto a network share or automount path; replace the link with a regular file to use it"), { code: SQe, path: n, reason: "network" });
}
function HLs(e) {
  return (0, import_chunk_jv7av99m.w)(e) === SQe;
}
function nsa(e) {
  if (!HLs(e)) return;
  let n = e.reason;
  return n === "network" || n === "unexamined" ? n : void 0;
}
function y1e(e, n, r) {
  let { resolvedPath: i } = no(e, n);
  if (r.has(i)) return true;
  return r.add(i), false;
}
var Fe = /(^|[\\/])\.\.([\\/]|$)/;
function rn(e, n = "darwin") {
  let r = e.replace(n === "win32" ? /[\\/]\.(?=[\\/]|$)/g : /\/\.(?=\/|$)/g, "");
  if (r === "") return e[0];
  if (n === "win32" && /^[A-Za-z]:$/.test(r)) return r + e[2];
  return r;
}
function $K(e, n, r) {
  let i = it(r);
  if ((0, import_chunk_z6pfqf6e.$r)(n) && !(0, import_chunk_z6pfqf6e.mc)(n) || (0, import_chunk_z6pfqf6e.Fl)(n) || (0, import_chunk_z6pfqf6e.eR)(n)) {
    if (i !== void 0 && ((0, import_chunk_z6pfqf6e.Fl)(n) && !q(n, i) || (0, import_chunk_z6pfqf6e.$r)(n) && !(0, import_chunk_z6pfqf6e.mc)(n) && !he(n, i))) {
      let d = ig(e, n, { anchors: i, surfaceNetworkRaw: r?.surfaceNetworkRaw });
      if (d === Pg && r?.surfaceNetworkRaw !== true) {
        if (r?.surfaceDotDotTargets === true) throw J0o(n);
        return n;
      }
      return d;
    }
    return n;
  }
  let s, o = ig(e, n, r?.surfaceNetworkRaw === true ? { surfaceNetworkRaw: true, anchors: i } : { onOutcome: (d) => {
    if (d.kind === "absent" && !d.remaining.some(import_chunk_z6pfqf6e.YB)) s = u.join(d.at, ...d.remaining);
  } });
  if (o === Pg && r?.surfaceNetworkRaw !== true) {
    if (r?.surfaceDotDotTargets === true) throw J0o(n);
    return;
  }
  if (o !== void 0) return r?.liveRoutesOnly === true ? void 0 : o;
  let l = n, a = [], c = r?.surfaceDotDotTargets === true, f = (d) => a.length === 0 ? d : c && Fe.test(d) ? [d, ...a].join(u.sep) : u.join(d, ...a);
  while (l !== u.dirname(l)) {
    let d, v;
    try {
      d = e.readlinkSync(l);
    } catch (p) {
      v = (0, import_chunk_jv7av99m.w)(p);
    }
    if (d !== void 0) {
      if (c && Fe.test(d)) return f(u.isAbsolute(d) ? d : u.dirname(l) + u.sep + d);
      let p = u.isAbsolute(d) ? d : u.resolve(u.dirname(l), d);
      if ((0, import_chunk_z6pfqf6e.$r)(p) && !(0, import_chunk_z6pfqf6e.mc)(p) || (0, import_chunk_z6pfqf6e.Fl)(nt(p, r)) || !(0, import_chunk_z6pfqf6e.ad)(p) && ((0, import_chunk_z6pfqf6e.eR)(p) || (0, import_chunk_z6pfqf6e.$w)(p)) || r?.surfaceNetworkRaw === true && (0, import_chunk_z6pfqf6e.ad)(p)) {
        if (r?.liveRoutesOnly === true) return;
        return r?.surfaceNetworkRaw === true && a.length > 0 ? p + u.sep + a.join(u.sep) : f(p);
      }
      try {
        let m = mse(e, l);
        return f(m);
      } catch {
        if (r?.liveRoutesOnly === true) return;
        if (s !== void 0 && true && !c && !(0, import_chunk_z6pfqf6e.YB)(n)) return s;
        let m = l, F = 0, E = 64;
        while (F < E) {
          let b;
          try {
            b = e.readlinkSync(m);
          } catch {
            break;
          }
          if (c && Fe.test(b)) {
            m = u.isAbsolute(b) ? b : u.dirname(m) + u.sep + b;
            break;
          }
          let g = u.isAbsolute(b) ? c ? rn(b) : b : u.resolve(u.dirname(m), b);
          if ((0, import_chunk_z6pfqf6e.$r)(g) && !(0, import_chunk_z6pfqf6e.mc)(g) && he(g, i) || (0, import_chunk_z6pfqf6e.Fl)(g) && q(g, i) || (0, import_chunk_z6pfqf6e.eR)(g) || (0, import_chunk_z6pfqf6e.$w)(g) || r?.surfaceNetworkRaw === true && (0, import_chunk_z6pfqf6e.ad)(g)) {
            m = g;
            break;
          }
          let P;
          try {
            P = e.lstatSync(g);
          } catch {
            m = g;
            break;
          }
          if (!P.isSymbolicLink()) {
            m = g;
            break;
          }
          m = g, F++;
        }
        if (F >= E && r?.surfaceNetworkRaw === true) return Pg;
        return r?.surfaceNetworkRaw === true && a.length > 0 && ((0, import_chunk_z6pfqf6e.$r)(m) && !(0, import_chunk_z6pfqf6e.mc)(m) || (0, import_chunk_z6pfqf6e.Fl)(m) || (0, import_chunk_z6pfqf6e.eR)(m) || (0, import_chunk_z6pfqf6e.$w)(m) || (0, import_chunk_z6pfqf6e.ad)(m)) ? m + u.sep + a.join(u.sep) : f(m);
      }
    }
    if (v === "ENOENT") {
      a.unshift(u.basename(l)), l = u.dirname(l);
      continue;
    }
    try {
      let p = mse(e, l);
      if (p !== l) return f(p);
    } catch (p) {
      if (c) throw p;
    }
    return;
  }
  return;
}
function et(e) {
  return (0, import_chunk_z6pfqf6e.$r)(e) && !(0, import_chunk_z6pfqf6e.mc)(e) || (0, import_chunk_z6pfqf6e.vd)(e) || (0, import_chunk_z6pfqf6e.bO)(e);
}
function _yn(e) {
  return ft(e, false) ?? e;
}
function rsa(e) {
  return ft(e, true);
}
function ft(e, n) {
  if (et(e)) return e;
  let r = e, i = "";
  for (; ; ) {
    if (!(0, import_chunk_z6pfqf6e.ad)(r)) {
      let o = (0, import_chunk_z6pfqf6e.TF)(r);
      if (o !== null) {
        let l = i === "" ? o : o.endsWith(u.sep) ? o + i : o + u.sep + i;
        if (et(l)) return n ? l : e;
        return l;
      }
      if (n) try {
        return h.lstatSync(r), null;
      } catch (l) {
        if (!(0, import_chunk_jv7av99m.J)(l)) return null;
      }
    }
    let s = u.dirname(r);
    if (s === r) return e;
    i = i === "" ? u.basename(r) : u.basename(r) + u.sep + i, r = s;
  }
}
function ua(e) {
  return De(e, "permission");
}
function sx(e, n, r) {
  return gt(e, "permission", n, r);
}
function gt(e, n, r, i) {
  let s = le();
  return nn(Ae(e, n), r, i === void 0 ? void 0 : (o) => i(o.path), async (o) => {
    switch (o.kind) {
      case "lstat":
        return s.lstat(o.path);
      case "opendirNofollow":
        return await s.openDirNoFollow(o.path), "ok";
      case "readlink":
        return s.readlink(o.path);
      case "realpath":
        return s === Cv ? (0, import_chunk_z6pfqf6e.pn)(await It(o.path)) : s.realpath(o.path);
    }
  }, { unresolved: true, requested: e, spellings: [e], stoppedAt: e, leafIsSymlink: false, reason: "cut-short" });
}
function gJ(e) {
  return pt(De(e, "screen"));
}
function pt(e) {
  return { paths: e.spellings, vetted: !e.unresolved, ...!e.unresolved && e.linkTextClimbs && { linkTextClimbs: e.linkTextClimbs } };
}
async function osa(e) {
  return pt(await gt(e, "screen", void 0));
}
function De(e, n) {
  let r = le();
  return ot(Ae(e, n), (i) => {
    switch (i.kind) {
      case "lstat":
        return r.lstatSync(i.path);
      case "opendirNofollow":
        return r.openDirNoFollowSync(i.path), "ok";
      case "readlink":
        return r.readlinkSync(i.path);
      case "realpath":
        return r.realpathSync(i.path);
    }
  });
}
var tt = /^\/(?:dev\/fd|proc\/(?:self|thread-self|\d+)(?:\/task\/\d+)?\/(?:root|cwd|exe|fd|map_files))(?:\/|$)/i;
function* Ae(e, n) {
  let r = e, i = n === "root" || n === "root-alias";
  if (r === "~") r = (0, import_os.homedir)().normalize("NFC");
  else if (r.startsWith("~/")) r = u.join((0, import_os.homedir)().normalize("NFC"), r.slice(2));
  let s = /* @__PURE__ */ new Set([r]), o = false, l = (S, y = false, L = false) => ({ unresolved: false, requested: r, spellings: Array.from(s), landing: S, leafIsSymlink: y, ...L && { endsUnexamined: L }, ...o && { linkTextClimbs: o } });
  if ((0, import_chunk_z6pfqf6e.$r)(r) && !(0, import_chunk_z6pfqf6e.mc)(r) || (0, import_chunk_z6pfqf6e.Fl)(r) || (0, import_chunk_z6pfqf6e.eR)(r)) return l(r, false, true);
  if (i && (r.includes("\uFFFD") || tt.test(r.replaceAll("\\", "/")))) return { unresolved: true, requested: r, spellings: [r], stoppedAt: r, leafIsSymlink: false, reason: "unexamined" };
  let a = le(), c = kL(a), f = [], d, v = false, p = false, m = false, F = [], E = false, b = false, g = [], P = /* @__PURE__ */ new Set(), x = (S) => {
    let y = u.resolve(S);
    if (!P.has(y)) P.add(y), g.push(S);
  }, D = r, T, C = 32, O = 0, k = false, be = false, X = false, Q = () => O > C || k || X, ie = function* (S) {
    let y;
    for (; ; ) {
      let L = S.next(y);
      if (L.done) return L.value;
      let H = L.value;
      if (k ||= be, X ||= tt.test(H.path.replaceAll("\\", "/")), D = H.path, H.kind === "readlink") p = true, O++;
      else T = void 0;
      if (y = yield H, m ||= typeof y === "string" && y.includes("\uFFFD"), typeof y === "object" && "errno" in y) if (H.kind === "readlink") E = true;
      else T = y.errno, b ||= H.kind === "opendirNofollow" && y.errno === "ELOOP";
      else if (H.kind === "lstat" && typeof y === "object" && y !== null && "isSymbolicLink" in y && !y.isSymbolicLink() && typeof y.isDirectory === "function" && !y.isDirectory()) be = true;
    }
  }, I = yield* ie(ye(r, { unreadableAncestry: "unverified", launchAncestry: c, ...n === "screen" ? { literalLinkText: "undecodable" } : {}, onCollapsedLanding: (S) => {
    f.push(S);
  }, onOutcome: (S) => {
    d = S;
  }, onHop: ({ composed: S, leaf: y, text: L }) => {
    if (y) {
      if (i) F.push(S);
      else s.add(S);
      v = true;
    }
    if (n === "screen" && Oe(L)) o = true, x(S);
  } })), N = n !== "screen" && !p && (T === "ENAMETOOLONG" || (T === "EACCES" || T === "EPERM")), K = () => {
    let S = (0, import_chunk_z6pfqf6e.pn)(r);
    return s.add(S), l(S);
  }, B = () => N ? K() : { unresolved: true, requested: r, spellings: i ? [r] : (0, import_chunk_4smdap7r.M)([r, ...f, ...s]), stoppedAt: D, leafIsSymlink: v, reason: p || b ? "past-a-link" : "unexamined" }, Ft = 8, ke = function* () {
    for (let S = 0; S < g.length; S++) {
      if (S >= Ft) return false;
      let y = g[S];
      if ((0, import_chunk_z6pfqf6e.$r)(y) && !(0, import_chunk_z6pfqf6e.mc)(y) || (0, import_chunk_z6pfqf6e.Fl)(y) || (0, import_chunk_z6pfqf6e.eR)(y)) {
        s.add(y);
        continue;
      }
      let L = yield* ie(ye(y, { unreadableAncestry: "unverified", launchAncestry: c, onHop: ({ composed: H, text: Ot }) => {
        if (Oe(Ot)) x(H);
      } }));
      if (L === Pg || E) return false;
      if (L !== void 0) s.add(L);
    }
    return true;
  };
  if (I === Pg || I === II || i && m) return B();
  if (I !== void 0) {
    if (i && Q()) return { ...l(I, v), spellings: [r] };
    if (n === "screen" && !(yield* ke())) return B();
    if (!i) f.forEach((S) => s.add(S));
    if (s.delete(I), !i || f.length === 0 && !(0, import_chunk_z6pfqf6e.$r)(I)) s.add(I);
    return m ? B() : l(I, v, true);
  }
  if (d === void 0) {
    if (n === "screen" && !E) return (yield* ke()) && !m ? K() : B();
    return B();
  }
  if (d.kind === "absent" && (n === "screen" ? d.remaining.some((S) => (0, import_chunk_z6pfqf6e.ad)(S)) : p && d.remaining.some((S) => (0, import_chunk_z6pfqf6e.YB)(S)))) return B();
  let Z = d.kind === "absent" ? d.at : d.path, we = d.kind === "absent" ? d.remaining.join(u.sep) : "", U = (0, import_chunk_z6pfqf6e.pn)(we === "" ? Z : u.join(Z, we));
  if (p || Z !== u.parse(Z).root) s.add(U);
  let se = sn(yield { kind: "realpath", path: Z }, Z, we);
  if (se !== void 0 && se !== U) s.delete(se), s.add(se);
  if (i && Q()) return { ...l(U, v), spellings: [r] };
  if (n === "root") {
    let S = [];
    for (let y of F.slice(0, 8)) {
      if (y === r || y === U || y === se || (0, import_chunk_z6pfqf6e.ad)(y)) continue;
      let L = yield* Ae(y, "root-alias");
      if (!L.unresolved && L.landing === U && L.spellings.includes(U)) S.push(y);
    }
    if (S.length > 0) {
      let y = [...s].filter((L) => L !== r);
      return { ...l(U, v), spellings: [r, ...S, ...y] };
    }
  }
  if (n === "screen" && !(yield* ke())) return B();
  return m ? B() : l(U, v);
}
function sn(e, n, r) {
  if (typeof e !== "string" || e === n) return;
  return r === "" ? e : u.join(e, r);
}
function Yft(e) {
  return { unresolved: false, requested: e, spellings: [e], landing: e, leafIsSymlink: false };
}
function Ei(e) {
  return cte(ua(e));
}
function Rce(e) {
  return De(e, "root").spellings;
}
function cte(e) {
  if (!e.unresolved) return e.spellings;
  let { resolvedPath: n, isCanonical: r, isSymlink: i } = no(le(), e.requested);
  return (r || i) && !e.spellings.includes(n) ? [...e.spellings, n] : e.spellings;
}
var Cv = { cwd() {
  return process.cwd();
}, existsSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.existsSync(${e})`);
    return h.existsSync(e);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, async stat(e) {
  return (0, import_promises2.stat)(e);
}, async lstat(e) {
  return (0, import_promises2.lstat)(e);
}, async openDirNoFollow(e) {
  await (await (0, import_promises2.open)(e, h.constants.O_DIRECTORY | h.constants.O_NOFOLLOW)).close();
}, openDirNoFollowSync(e) {
  let n = h.openSync(e, h.constants.O_DIRECTORY | h.constants.O_NOFOLLOW);
  h.closeSync(n);
}, async lstatBigint(e) {
  return (0, import_promises2.lstat)(e, { bigint: true });
}, async statBigint(e) {
  return (0, import_promises2.stat)(e, { bigint: true });
}, async readdir(e) {
  return (0, import_promises2.readdir)(e, { withFileTypes: true });
}, async unlink(e) {
  return (0, import_promises2.unlink)(e);
}, async rmdir(e) {
  return (0, import_promises2.rmdir)(e);
}, async rm(e, n) {
  return (0, import_promises2.rm)(e, n);
}, async mkdir(e, n) {
  try {
    await (0, import_promises2.mkdir)(e, { recursive: true, ...n });
  } catch (r) {
    if ((0, import_chunk_jv7av99m.w)(r) !== "EEXIST") throw r;
  }
}, async readFile(e, n) {
  return (0, import_promises2.readFile)(e, { encoding: n.encoding });
}, async rename(e, n) {
  return (0, import_promises2.rename)(e, n);
}, async realpath(e) {
  return (0, import_chunk_z6pfqf6e.pn)(await (0, import_promises2.realpath)(e));
}, async readlink(e) {
  return (0, import_promises2.readlink)(e);
}, async copyFile(e, n) {
  return (0, import_promises2.copyFile)(e, n);
}, async appendFile(e, n, r) {
  if (r?.mode !== void 0) try {
    let i = await (0, import_promises2.open)(e, "ax", r.mode);
    try {
      await i.appendFile(n);
    } finally {
      await i.close();
    }
    return;
  } catch (i) {
    if ((0, import_chunk_jv7av99m.w)(i) !== "EEXIST") throw i;
  }
  return (0, import_promises2.appendFile)(e, n);
}, async link(e, n) {
  return (0, import_promises2.link)(e, n);
}, statSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.statSync(${e})`);
    return h.statSync(e);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, lstatSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.lstatSync(${e})`);
    return h.lstatSync(e);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, lstatBigintSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.lstatSync(${e})`);
    return h.lstatSync(e, { bigint: true });
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, readFileSync(e, n) {
  var _stack = [];
  try {
    const r = __using(_stack, tw`fs.readFileSync(${e})`);
    return h.readFileSync(e, { encoding: n.encoding });
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, readSync(e, n) {
  var _stack = [];
  try {
    const r = __using(_stack, tw`fs.readSync(${e}, ${n.length} bytes)`);
    let i = h.openSync(e, "r");
    try {
      let s = LLs(i, n.length, "file");
      return { buffer: s, bytesRead: s.length };
    } finally {
      h.closeSync(i);
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, appendFileSync(e, n, r) {
  var _stack = [];
  try {
    const i = __using(_stack, tw`fs.appendFileSync(${e}, ${n.length} chars)`);
    if (r?.mode !== void 0) try {
      let s = h.openSync(e, "ax", r.mode);
      try {
        h.appendFileSync(s, n);
      } finally {
        h.closeSync(s);
      }
      return;
    } catch (s) {
      if ((0, import_chunk_jv7av99m.w)(s) !== "EEXIST") throw s;
    }
    h.appendFileSync(e, n);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, unlinkSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.unlinkSync(${e})`);
    h.unlinkSync(e);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, renameSync(e, n) {
  var _stack = [];
  try {
    const r = __using(_stack, tw`fs.renameSync(${e} ${Qt} ${n})`);
    h.renameSync(e, n);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, readlinkSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.readlinkSync(${e})`);
    return h.readlinkSync(e);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, realpathSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.realpathSync(${e})`);
    return (0, import_chunk_z6pfqf6e.pn)(h.realpathSync(e));
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, mkdirSync(e, n) {
  var _stack = [];
  try {
    const r = __using(_stack, tw`fs.mkdirSync(${e})`);
    let i = { recursive: true };
    if (n?.mode !== void 0) i.mode = n.mode;
    try {
      h.mkdirSync(e, i);
    } catch (s) {
      if ((0, import_chunk_jv7av99m.w)(s) !== "EEXIST") throw s;
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, readdirSync(e) {
  var _stack = [];
  try {
    const n = __using(_stack, tw`fs.readdirSync(${e})`);
    return h.readdirSync(e, { withFileTypes: true });
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, rmSync(e, n) {
  var _stack = [];
  try {
    const r = __using(_stack, tw`fs.rmSync(${e})`);
    h.rmSync(e, n);
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}, createWriteStream(e) {
  return h.createWriteStream(e);
}, async readFileBytes(e, n) {
  if (n === void 0) return (0, import_promises2.readFile)(e);
  let r = await (0, import_promises2.open)(e, G8());
  try {
    if (!(await r.stat()).isFile()) return Buffer.alloc(0);
    return await KM(r, n, "file");
  } finally {
    await r.close();
  }
}, async readFileFdGated(e, n) {
  try {
    let r = Zt();
    if (r === 0) {
      if (!(await (0, import_promises2.lstat)(e)).isFile()) return null;
    }
    let i = await (0, import_promises2.open)(e, h.constants.O_RDONLY | r);
    try {
      let s = await i.stat();
      if (!s.isFile() || s.size > n) return null;
      let o = Number(s.size), l = Buffer.allocUnsafe(o), a = 0;
      while (a < o) {
        let { bytesRead: c } = await i.read(l, a, o - a, a);
        if (c === 0) break;
        a += c;
      }
      return { content: (a < o ? l.subarray(0, a) : l).toString("utf8"), stats: s };
    } finally {
      await i.close();
    }
  } catch {
    return null;
  }
} };
function le() {
  return Cv;
}
var ae = (0, import_chunk_t57w17k7.de)({ hasThrown: false }, (e) => {
  e.hasThrown = false;
}), ht = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear());
function ssa(e) {
  ht.add(e);
}
function DLs() {
  return ae.hasThrown;
}
function DLr(e) {
  return !(e instanceof Error && "syscall" in e && e.syscall === "chdir");
}
function u_(e) {
  let n;
  try {
    n = process.cwd();
  } catch {
  }
  ae.hasThrown = true, process.chdir(e), ae.hasThrown = false;
  let r;
  try {
    r = process.cwd();
  } catch {
    r = e;
  }
  for (let i of ht) i();
  if (!(0, import_chunk_wzdjp7c0.Ssa)(r)) return;
  if (n !== void 0) try {
    ae.hasThrown = true, process.chdir(n), ae.hasThrown = false, process.cwd();
  } catch {
  }
  throw Object.assign(new import_chunk_jv7av99m.A(`ENOENT: no such file or directory, chdir '${e}'`, "ENOENT: no such file or directory"), { code: "ENOENT", syscall: "chdir", path: e });
}
async function oPt(e, n, r) {
  var _stack = [];
  try {
    const i = __using(_stack, typeof e === "string" ? await (0, import_promises2.open)(e, "r") : null, true);
    let s = typeof e === "string" ? i : e, o = (await s.stat()).size;
    if (o <= n) return null;
    let l = Math.min(o - n, r), a = Buffer.allocUnsafe(l), c = 0;
    while (c < l) {
      let { bytesRead: f } = await s.read(a, c, l - c, n + c);
      if (f === 0) break;
      c += f;
    }
    return { content: a.toString("utf8", 0, c), bytesRead: c, bytesTotal: o };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function KM(e, n, r) {
  let i = r !== void 0 ? r === "file" : (await e.stat()).isFile(), s = [], o = 0, l = V0o();
  try {
    while (o < n) {
      let a = l.subarray(0, n - o), { bytesRead: c } = await e.read(a, 0, a.length, i ? o : null);
      if (c === 0) break;
      s.push(Buffer.from(a.subarray(0, c))), o += c;
    }
  } finally {
    K0o(l, o);
  }
  return Buffer.concat(s, o);
}
function LLs(e, n, r) {
  let i = [], s = 0, o = V0o();
  try {
    while (s < n) {
      let l = o.subarray(0, n - s), a = h.readSync(e, l, 0, l.length, r === "file" ? s : null);
      if (a === 0) break;
      i.push(Buffer.from(l.subarray(0, a))), s += a;
    }
  } finally {
    K0o(o, s);
  }
  return Buffer.concat(i, s);
}
async function LB(e, n) {
  let { bytes: r, bytesTotal: i } = await NLs(e, n);
  return { content: r.toString("utf8"), bytesRead: r.length, bytesTotal: i };
}
async function NLs(e, n) {
  var _stack = [];
  try {
    const r = __using(_stack, typeof e === "string" ? await (0, import_promises2.open)(e, "r") : null, true);
    let i = typeof e === "string" ? r : e, s = (await i.stat()).size;
    if (s === 0) return { bytes: Buffer.alloc(0), bytesTotal: 0 };
    let o = Math.max(0, s - n), l = s - o, a = Buffer.allocUnsafe(l), c = 0;
    while (c < l) {
      let { bytesRead: f } = await i.read(a, c, l - c, o + c);
      if (f === 0) break;
      c += f;
    }
    return { bytes: a.subarray(0, c), bytesTotal: s };
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function* LLr(e, n = 65536) {
  let r = await (0, import_promises2.open)(e, "r"), i = Buffer.alloc(n), s = 0, o = [], l = 0;
  try {
    while (true) {
      let { bytesRead: a } = await r.read(i, 0, n, s);
      if (a === 0) break;
      s += a;
      let c = i.subarray(0, a), f = 0;
      while (f < a) {
        let d = c.indexOf(10, f);
        if (d === -1) {
          o.push(Buffer.from(c.subarray(f))), l += a - f;
          break;
        }
        if (l === 0) yield c.subarray(f, d);
        else yield Buffer.concat([...o, c.subarray(f, d)], l + (d - f)), o = [], l = 0;
        f = d + 1;
      }
    }
  } finally {
    await r.close();
  }
  if (l > 0) yield o.length === 1 ? o[0] : Buffer.concat(o, l);
}
var oe = 256;
class Xft extends Error {
  partialRead;
  constructor(e = false) {
    super("A file changed while it was being read, so the lines read from it may not be its current lines");
    this.partialRead = e;
    this.name = "FileChangedDuringReadError";
  }
}
async function* sPt(e, n = 65536, { onOpen: r, strict: i = true, maxBytes: s = 1 / 0 } = {}) {
  let o = await (0, import_promises2.open)(e, G8());
  try {
    let { size: l } = await o.stat();
    r?.(l);
    let a = Buffer.allocUnsafe(Math.min(n + oe, l)), c = Buffer.allocUnsafe(Math.min(oe, l)), f = 0, d = l, v = Math.max(0, l - s), p = 0, m = l, F, E = async (g, P, x) => {
      let D = 0;
      while (D < P) {
        let C = await o.read(g, D, P - D, x + D);
        if (C.bytesRead === 0 || i && C.bytesRead < P - D) throw new Xft(C.bytesRead > 0);
        D += C.bytesRead;
      }
      let T = d + p - x;
      if (!g.subarray(T, T + f).equals(c.subarray(0, f))) throw new Xft();
    }, b = async (g) => {
      let P = Math.max(m, d + p + f) - g, x = Buffer.allocUnsafe(P);
      return await E(x, P, g), x.toString("utf8", 0, m - g);
    };
    while (d > v) {
      if (f = Math.min(oe, p), a.copy(c, 0, 0, f), p = Math.min(n, d - v, i && d === l ? oe : 1 / 0), d -= p, await E(a, p + f, d), i) F ??= Buffer.from(a.subarray(Math.max(0, p - oe), p));
      let g = a.lastIndexOf(10, p - 1);
      while (g !== -1) {
        let P = d + g + 1;
        if (P < m) yield m <= d + p ? a.toString("utf8", g + 1, m - d) : await b(P);
        m = d + g, g = g === 0 ? -1 : a.lastIndexOf(10, g - 1);
      }
    }
    if (m > 0 && v === 0) yield m <= p ? a.toString("utf8", 0, m) : await b(0);
    if (F !== void 0) d = l - F.length, p = 0, f = F.copy(c), await E(a, f, d);
  } finally {
    await o.close();
  }
}
var Ie = { verbose: 0, debug: 1, info: 2, warn: 3, error: 4 }, fn = new RegExp(`(?!\\t)[${import_chunk_kx2fp6pc.nw}]`, "gu"), gn = 10485760, bt = 1048576, hn = 1e4, mn = 262144, yn = 5e3, kt = 100, bn = (0, import_chunk_69qhefwa.$ce)((e) => e());
function kn(e) {
  return Object.hasOwn(Ie, e);
}
function wt(e) {
  return (0, import_chunk_z6pfqf6e.C2)(e) ? null : (0, import_path.resolve)(e);
}
function St() {
}
var wn = { arm: "v5", target: null };
function Sn(e, n) {
  e.stuck = e.appendSince === n ? "yes" : "no";
}
var vn = { sessionId: "", fromBackend: false };
function vt(e, n, r, i) {
  let s = (0, import_path.join)(n, "debug"), o = (0, import_path.join)(s, `${e.sessionId}.txt`), l;
  if (r === null) l = o;
  else if (i !== null && r === i) l = (0, import_path.join)(i, `${e.sessionId}.txt`);
  else l = r;
  let a = !e.fromBackend && l === o ? "v5" : "raw";
  return { target: l, arm: a, configHome: n, rotate: a === "raw" && !((0, import_path.dirname)(l) === s && l.endsWith(".txt")), pointLatest: a === "raw" && l !== o };
}
function _e(e) {
  return yS.userNamed((0, import_path.isAbsolute)(e) ? e : (0, import_path.resolve)(e));
}
function xn(e) {
  return e.code === "Failed" && e.telemetryCode === "ENOENT";
}
function En(e, n = We) {
  return n ? e : void 0;
}
async function xt(e, n, r, i) {
  let s = { namespace: "log", sessionId: n, channel: "debug" }, o = await ve.run(true, () => e.append(s, [{ data: r }], i ? { markLatest: true } : void 0));
  if (o.ok) return "landed";
  return i && o.error.code === "InvalidArgument" && o.error.argument === "opts.markLatest" ? "refused" : "dropped";
}
class Pt {
  deps;
  minLevel;
  filter;
  toStderr;
  filePath;
  runtimeDebugEnabled = false;
  hasFormattedOutput = false;
  debugFromLaunch;
  storageV5;
  writer = null;
  redirect = null;
  unflushedChunks = [];
  backlog = { chain: Promise.resolve(), length: 0, appendSince: 0, stuck: "no", droppedCount: 0, droppedTotal: 0 };
  appendOldest = this.appendOldestChunks.bind(this);
  backendLinesLogged = 0;
  exiting = false;
  exitHandlerRegistered = false;
  successor = null;
  writtenBytes = -1;
  rotating = false;
  resolvedLogPath = null;
  overrideDirectory = null;
  rotationTarget = null;
  latestMarked = false;
  latestRefused = false;
  constructor(e) {
    this.deps = e;
    if (this.storageV5 = En(e.storageV5), e.launchIdentity !== void 0) {
      this.minLevel = e.launchIdentity.minLevel, this.filter = e.launchIdentity.filter, this.toStderr = e.launchIdentity.toStderr, this.filePath = e.launchIdentity.filePath, this.debugFromLaunch = e.launchIdentity.debugFromLaunch;
      return;
    }
    let n = Array.isArray(e.argv) ? e.argv : [], r = (0, import_chunk_xppq9kzc.jca)(), i;
    if (r !== void 0) i = r(n);
    else {
      let a = n.indexOf("--");
      i = a === -1 ? n : n.slice(0, a);
    }
    let s = e.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
    this.minLevel = s && kn(s) ? s : "debug";
    let o = i.find((a) => a.startsWith("--debug="));
    this.filter = o ? Ve(o.substring(8)) : null, this.toStderr = i.includes("--debug-to-stderr") || i.includes("-d2e");
    let l = null;
    for (let a = 0; a < i.length; a++) {
      let c = i[a];
      if (c.startsWith("--debug-file=")) {
        l = wt(c.substring(13));
        break;
      }
      if (c === "--debug-file" && a + 1 < i.length) {
        l = wt(i[a + 1]);
        break;
      }
    }
    this.filePath = l, this.debugFromLaunch = (0, import_chunk_69qhefwa.Ne)(e.env.DEBUG) || (0, import_chunk_69qhefwa.Ne)(e.env.DEBUG_SDK) || i.includes("--debug") || i.includes("-d") || this.toStderr || o !== void 0 || this.filePath !== null;
  }
  isDebugMode() {
    return this.runtimeDebugEnabled || this.debugFromLaunch;
  }
  mayWrite(e) {
    return this.takesLevel(e) && (this.deps.isAnt || this.isDebugMode());
  }
  drainsSyncAtExit() {
    return !((0, import_chunk_m15w38ag.ne)() && this.storageV5 !== void 0 && this.deps.syncExitDrain === false);
  }
  launchIdentity() {
    return { minLevel: this.minLevel, filter: this.filter, toStderr: this.toStderr, filePath: this.filePath, debugFromLaunch: this.debugFromLaunch, isAnt: this.deps.isAnt, isTestEnvironment: this.deps.isTestEnvironment };
  }
  enableDebugLogging() {
    let e = this.isDebugMode() || this.deps.isAnt;
    return this.runtimeDebugEnabled = true, e;
  }
  logPath() {
    return this.filePath ?? (this.overrideDirectory !== null && this.overrideDirectory === this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ? (0, import_path.join)(this.overrideDirectory, `${this.deps.sessionId()}.txt`) : null) ?? this.resolvedLogPath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? this.defaultLogPath();
  }
  defaultLogPath(e = this.deps.sessionId()) {
    return (0, import_path.join)(this.deps.configHomeDir(), "debug", `${e}.txt`);
  }
  learnedOverrideDirectory() {
    return this.overrideDirectory;
  }
  isArmed() {
    return this.storageV5 !== void 0;
  }
  takesLevel(e) {
    return Ie[e] >= Ie[this.minLevel];
  }
  log(e, { level: n } = { level: "debug" }) {
    if (!this.takesLevel(n)) return;
    let r = this.deps.limits?.();
    if (r === void 0) {
      this.emit(e, n);
      return;
    }
    let i = e.length > r.maxMessageLength ? `debug message not logged: it has ${e.length} characters, over this log's fixed limit of ${r.maxMessageLength} per message` : e, { admitted: s, leftOutBefore: o } = r.admit(i.length);
    if (!s) return;
    r.timed(() => {
      if (o > 0) this.emit(`debug messages not logged: ${o} since this log's last line, over its fixed limit on how much it logs at a time`, n);
      this.emit(i, n);
    });
  }
  emit(e, n) {
    if (!this.shouldLog(e)) return;
    let r = (0, import_chunk_sah8dzn4.As)(e.trim());
    r = r.includes(`
`) ? (0, import_chunk_kx2fp6pc.y$)(_(r)) : r.replace(fn, import_chunk_kx2fp6pc.O3);
    let s = `${(/* @__PURE__ */ new Date()).toISOString()} [${n.toUpperCase()}] ${r}
`;
    if (this.toStderr) {
      this.deps.writeToStderr(s);
      return;
    }
    this.write(s);
  }
  write(e) {
    let n = this.getWriter(), r = vn;
    if (this.storageV5 !== void 0) {
      if (r = { sessionId: this.deps.sessionId(), fromBackend: ve.getStore() === true }, r.fromBackend) this.backendLinesLogged++;
    }
    if (n.write({ origin: r, content: e }), this.exiting) n.flush();
  }
  async flush() {
    let e = this.backendLinesLogged;
    if (this.writer?.flush(), await this.drained(), this.storageV5 !== void 0 && this.successor) return this.successor.flush();
    for (let n = 0; this.backendLinesLogged !== e && n < 3; n++) e = this.backendLinesLogged, this.writer?.flush(), await this.drained();
    if (this.backlog.droppedCount > 0 && this.backlog.length === 0 && !this.successor) this.write(""), this.writer?.flush(), await this.drained();
  }
  async drained() {
    if (this.isAppendStuck()) return;
    let e = this.backlog.chain.then(() => true);
    do
      if (await (0, import_chunk_5appeerh.me)(e, kt)) return;
    while (!this.isAppendStuck());
  }
  isAppendStuck() {
    let e = this.backlog, { appendSince: n } = e;
    if (e.stuck === "no" && n !== 0 && Date.now() - n >= yn) e.stuck = "suspected", setTimeout(Sn, kt, e, n).unref();
    return e.stuck === "yes";
  }
  dispose(e) {
    this.redirect = e;
    try {
      this.writer?.dispose();
    } finally {
      this.redirect = null, this.writer = null;
    }
  }
  succeed(e) {
    this.runtimeDebugEnabled = e.runtimeDebugEnabled, this.hasFormattedOutput = e.hasFormattedOutput, this.unflushedChunks = e.unflushedChunks, this.backlog = e.backlog, this.exitHandlerRegistered = e.exitHandlerRegistered, e.successor = this, e.dispose((n) => {
      this.write(n);
    });
  }
  handleExit() {
    if (this.successor) {
      this.successor.handleExit();
      return;
    }
    if (this.exiting = true, this.backlog.droppedCount > 0) try {
      this.write("");
    } catch {
    }
    this.writer?.flush(), this.drainSync();
  }
  async maybeRotate(e, n, r = gn) {
    let i = (0, import_chunk_m15w38ag.ne)() && this.storageV5 !== void 0 ? this.storageV5.hostFiles : void 0;
    if (this.writtenBytes < 0) if (i) {
      let s = await i.stat(_e(e));
      this.writtenBytes = s.ok && s.value.kind !== "absent" ? s.value.size : 0;
    } else this.writtenBytes = await (0, import_promises.stat)(e).then((s) => s.size).catch(() => 0);
    else this.writtenBytes += n;
    if (this.writtenBytes <= r || this.rotating) return;
    this.rotating = true;
    try {
      let s = e.endsWith(".txt") ? `${e.slice(0, -4)}.1.txt` : `${e}.1`;
      if (i) {
        let o = _e(e), l = _e(s), a = await i.rename(o, l);
        if (!a.ok && !xn(a.error)) {
          if (await i.delete(l, { missingOk: true }), !(await i.rename(o, l)).ok) await i.delete(o, { missingOk: true });
        }
      } else try {
        await (0, import_promises.rename)(e, s);
      } catch (o) {
        if (!(0, import_chunk_jv7av99m.J)(o)) await (0, import_promises.unlink)(s).catch(() => {
        }), await (0, import_promises.rename)(e, s).catch(() => (0, import_promises.unlink)(e).catch(() => {
        }));
      }
      this.writtenBytes = 0;
    } finally {
      this.rotating = false;
    }
  }
  shouldLog(e) {
    if (this.deps.isTestEnvironment && !this.toStderr && this.filePath === null) return false;
    if (!this.deps.isAnt && !this.isDebugMode()) return false;
    if (typeof process > "u" || typeof process.versions > "u" || typeof process.versions.node > "u") return false;
    return Ge(e, this.filter);
  }
  resolveDirToFile(e) {
    return this.resolvedLogPath = (0, import_path.join)(e, `${this.deps.sessionId()}.txt`), this.resolvedLogPath;
  }
  async appendGroup(e, n, r, i) {
    if (this.storageV5 !== void 0 && e.arm === "v5") {
      await this.appendV5AndMark(this.storageV5, n, r);
      return;
    }
    if (e.target === null || !this.writesFiles()) return;
    if (i) await (0, import_promises.mkdir)((0, import_path.dirname)(e.target), { recursive: true }).catch(() => {
    });
    let s = e;
    try {
      await (0, import_promises.appendFile)(e.target, r);
    } catch (o) {
      if (!(0, import_chunk_jv7av99m.Kz)(o)) throw o;
      if (this.storageV5 === void 0) s = { ...e, target: this.resolveDirToFile(e.target) }, await (0, import_promises.appendFile)(s.target, r);
      else {
        if (this.overrideDirectory = e.target, s = vt(n, e.configHome, e.target, e.target), s.arm === "v5") {
          await this.appendV5AndMark(this.storageV5, n, r);
          return;
        }
        await (0, import_promises.mkdir)((0, import_path.dirname)(s.target), { recursive: true }).catch(() => {
        });
        try {
          await (0, import_promises.appendFile)(s.target, r);
        } catch {
          return;
        }
      }
    }
    if (s.rotate) {
      if (this.storageV5 !== void 0 && s.target !== this.rotationTarget) this.rotationTarget = s.target, this.writtenBytes = -1;
      await this.maybeRotate(s.target, Buffer.byteLength(r)).catch(St);
    }
    if (s.pointLatest) this.markLatestSymlink();
  }
  async appendV5AndMark(e, n, r) {
    let i = (0, import_chunk_m15w38ag.ne)(), s = i && !this.latestMarked && !this.latestRefused, o = await xt(e, n.sessionId, r, s);
    if (o === "refused") this.latestRefused = true, o = await xt(e, n.sessionId, r, false), this.log("debug log: the storage backend refused markLatest; <debug folder>/latest is not pointed in this process", { level: "warn" });
    if (o !== "landed") return;
    if (s && !this.latestRefused) this.latestMarked = true;
    else if (!i) this.markLatestSymlink();
  }
  markLatestSymlink() {
    if (!this.latestMarked && this.writesFiles()) this.latestMarked = true, this.updateLatestSymlink();
  }
  isSessionDiskless() {
    try {
      return this.deps.diskless?.() === true;
    } catch {
      return true;
    }
  }
  writesFiles() {
    if (this.isSessionDiskless()) return false;
    try {
      return this.deps.defaultFile?.() !== false || this.filePath !== null || this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR !== void 0;
    } catch {
      return false;
    }
  }
  async appendOldestChunks() {
    let e = this.backlog, n = this.unflushedChunks[0], r = n?.queued;
    if (r === void 0) return;
    let i = 0, s = 0, o = false;
    for (let { content: l, queued: a } of this.unflushedChunks) {
      if (a === void 0 || a.owner !== r.owner || a.decision.arm !== r.decision.arm || a.decision.target !== r.decision.target || a.origin.sessionId !== r.origin.sessionId || a.origin.fromBackend !== r.origin.fromBackend || i > 0 && s + l.length > mn) break;
      i++, s += l.length, o ||= a.needMkdir;
    }
    if (e.appendSince = Date.now(), await r.owner.appendGroup(r.decision, r.origin, this.unflushedChunks.slice(0, i).map((l) => l.content).join(""), o).catch(St), e.appendSince = 0, e.stuck = "no", this.unflushedChunks[0] === n) this.unflushedChunks.splice(0, i), e.length -= s;
  }
  drainSync() {
    if (this.unflushedChunks.length === 0) return;
    if (this.backlog.length = 0, !this.drainsSyncAtExit() || !this.writesFiles() || this.isAppendStuck()) {
      this.unflushedChunks.length = 0;
      return;
    }
    let e = [];
    for (let n of this.unflushedChunks.splice(0)) {
      if (n.target === null) continue;
      let r = e.at(-1);
      if (r !== void 0 && r.armed === n.armed && (!n.armed || r.target === n.target)) r.parts.push(n);
      else e.push({ target: n.target, armed: n.armed, parts: [n] });
    }
    for (let { target: n, armed: r, parts: i } of e) {
      let s = r ? n : this.logPath(), o = i.map((l) => l.content).join("");
      try {
        le().mkdirSync((0, import_path.dirname)(s));
      } catch {
      }
      try {
        le().appendFileSync(s, o);
      } catch (l) {
        if ((0, import_chunk_jv7av99m.Kz)(l)) try {
          if (!r) le().appendFileSync(this.resolveDirToFile(s), o);
          else {
            let a = (d, v) => {
              try {
                le().appendFileSync((0, import_path.join)(s, `${d}.txt`), v);
              } catch {
              }
            }, c = i[0]?.sessionId, f = "";
            for (let d of i) {
              if (d.sessionId !== c) a(c, f), c = d.sessionId, f = "";
              f += d.content;
            }
            a(c, f);
          }
        } catch {
        }
      }
    }
  }
  droppedLineTotal() {
    return this.backlog.droppedTotal;
  }
  takeDroppedNote() {
    let { droppedCount: e } = this.backlog;
    if (e === 0) return "";
    return this.backlog.droppedCount = 0, `${(/* @__PURE__ */ new Date()).toISOString()} [WARN] debug messages not logged: ${e} since the line above, because writes to this log were over 10 s behind, with over 1 MiB waiting
`;
  }
  groupLines(e) {
    let n = e[0];
    if (n === void 0) return [];
    let r = this.filePath ?? this.deps.env.CLAUDE_CODE_DEBUG_LOGS_DIR ?? null, i = this.isSessionDiskless();
    if (i && (this.storageV5 === void 0 || r !== null)) return [];
    if (this.storageV5 === void 0) return [{ decision: { target: this.logPath(), arm: "raw", configHome: "", rotate: true, pointLatest: true }, origin: n.origin, lines: e }];
    let s = [];
    for (let o of e) {
      if (i && o.origin.fromBackend) continue;
      let l = s.at(-1);
      if (l !== void 0 && l.origin.sessionId === o.origin.sessionId && l.origin.fromBackend === o.origin.fromBackend) l.lines.push(o);
      else s.push({ decision: i ? wn : vt(o.origin, this.deps.configHomeDir(), r, this.overrideDirectory), origin: o.origin, lines: [o] });
    }
    return s;
  }
  getWriter() {
    if (this.writer) return this.writer;
    let e = null, n = this.storageV5 !== void 0;
    if (this.writer = xe({ writeBatch: (r) => {
      if (this.redirect) {
        this.redirect(r.map((o) => o.content).join(""));
        return;
      }
      if (this.exiting) {
        for (let o of this.groupLines(r)) this.unflushedChunks.push({ target: o.decision.target, sessionId: o.origin.sessionId, armed: n, content: this.takeDroppedNote() + o.lines.map((l) => l.content).join("") });
        this.drainSync();
        return;
      }
      let i = this.writesFiles(), s = this.backlog;
      this.isAppendStuck();
      for (let o of this.groupLines(r)) {
        if (o.decision.arm === "raw" && !i) continue;
        if (s.droppedCount > 0 ? s.length >= bt / 2 : s.length >= bt && Date.now() - (this.unflushedChunks[0]?.queued?.at ?? 1 / 0) >= hn) {
          s.droppedCount += o.lines.length, s.droppedTotal += o.lines.length;
          continue;
        }
        let l = this.takeDroppedNote() + o.lines.map((f) => f.content).join("");
        if (l === "") continue;
        let a = o.decision.arm === "raw" ? (0, import_path.dirname)(o.decision.target) : null, c = a !== null && (o.origin.fromBackend || e !== a);
        if (a !== null) e = a;
        this.unflushedChunks.push({ target: o.decision.target, sessionId: o.origin.sessionId, armed: n, content: l, queued: { at: Date.now(), owner: this, decision: o.decision, origin: o.origin, needMkdir: c } }), s.length += l.length, s.chain = bn(() => s.chain.then(this.appendOldest));
      }
    }, sizeOf: (r) => r.content.length, flushIntervalMs: 1e3, maxBufferSize: 100, immediateMode: this.isDebugMode() }), this.deps.registerCleanup(async () => {
      this.writer?.dispose(), await this.drained();
    }), !this.exitHandlerRegistered) this.exitHandlerRegistered = true, this.deps.onExit(this.handleExit.bind(this));
    return this.writer;
  }
  async updateLatestSymlink() {
    try {
      let e = this.logPath();
      if ((0, import_path.basename)(e).toLowerCase() === "latest") return;
      let n = (0, import_path.join)((0, import_path.dirname)(e), "latest");
      if ((await (0, import_promises.lstat)(n).catch(() => null))?.isSymbolicLink()) await (0, import_promises.unlink)(n).catch(() => {
      });
      await (0, import_promises.symlink)(e, n);
    } catch {
    }
  }
}
class Lt {
  instance = void 0;
  init = {};
  defaultFile = true;
  limits = void 0;
  setInstance(e) {
    this.instance = e;
  }
  setInit(e) {
    this.init = e;
  }
  disableDefaultFile() {
    this.defaultFile = false;
  }
  setLimits(e) {
    this.limits = e;
  }
}
var Pn = new import_chunk_2904xtvq.j(() => new Lt());
function ce() {
  return (0, import_chunk_f9x2f6cx.kr)(Pn);
}
function He(e, n) {
  return new Pt({ argv: process.argv, env: process.env, sessionId: () => (0, import_chunk_f9x2f6cx.W)(), configHomeDir: () => (0, import_chunk_2gtmjt3y.Ze)(), onExit: (r) => {
    process.on("exit", r);
  }, registerCleanup: (r) => {
    Ct(r);
  }, writeToStderr: (r) => {
    (0, import_chunk_ndrgvsn7.$E)(r, { mayDrop: true });
  }, isAnt: n?.isAnt ?? false, isTestEnvironment: n?.isTestEnvironment ?? false, launchIdentity: n, storageV5: e.init.storageV5 !== void 0 && e.init.configHome === (0, import_chunk_2gtmjt3y.Nl)() ? e.init.storageV5 : void 0, syncExitDrain: e.init.syncExitDrain, diskless: () => (0, import_chunk_f9x2f6cx.Y)(), defaultFile: () => e.defaultFile, limits: () => e.limits });
}
function mJ(e) {
  let n = ce();
  n.setInit({ storageV5: e.storageV5, configHome: (0, import_chunk_2gtmjt3y.Nl)(), syncExitDrain: e.syncExitDrain });
  let r = n.instance;
  if (r) {
    let i = He(n, r.launchIdentity());
    n.setInstance(i), i.succeed(r);
  }
  if (e.syncExitDrain === false && !R().drainsSyncAtExit()) t("Sync exit drain off for this process: debug lines still queued at exit are dropped, so this log may end short");
}
function R() {
  let e = ce(), n = e.instance;
  if (n) return n;
  let r = He(e);
  return e.setInstance(r), r;
}
function O4t() {
  return R().minLevel;
}
function Koa(e) {
  return R().takesLevel(e);
}
function pse() {
  return R().isDebugMode();
}
function qoa() {
  return R().mayWrite("debug");
}
function hJ() {
  return R().toStderr;
}
function Yoa() {
  return R().filePath;
}
function Xoa() {
  return R().enableDebugLogging();
}
function Joa() {
  let e = ce(), n = e.instance;
  if (!n) return;
  let r = He(e);
  e.setInstance(r), r.succeed(n);
}
function Kft(e) {
  R().hasFormattedOutput = e;
}
function Qoa() {
  return R().hasFormattedOutput;
}
async function _Qe() {
  await ce().instance?.flush();
}
function Y0o() {
  return (0, import_chunk_f9x2f6cx.Y)() ? {} : { debug_stderr_dropped_total: (0, import_chunk_ndrgvsn7.Tsa)(), debug_file_dropped_total: ce().instance?.droppedLineTotal() ?? 0 };
}
function t(e, n = { level: "debug" }) {
  R().log(e, n);
}
function j8() {
  return R().logPath();
}
function Zoa(e, n) {
  return e === R().defaultLogPath(n);
}
function DOe(e, n) {
  return;
}
