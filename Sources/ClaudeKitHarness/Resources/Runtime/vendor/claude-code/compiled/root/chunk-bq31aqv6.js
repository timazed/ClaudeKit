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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s2, _2;
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
var chunk_bq31aqv6_exports = {};
__export(chunk_bq31aqv6_exports, {
  $5e: () => $5e,
  $el: () => $el,
  $rn: () => $rn,
  AKl: () => AKl,
  B1t: () => B1t,
  Bel: () => Bel,
  CKl: () => CKl,
  D0n: () => D0n,
  Drn: () => Drn,
  EKl: () => EKl,
  Evi: () => Evi,
  F5e: () => F5e,
  Fel: () => Fel,
  Frn: () => Frn,
  G1t: () => G1t,
  Gel: () => Gel,
  H0n: () => H0n,
  Hrn: () => Hrn,
  I0n: () => I0n,
  Jel: () => Jel,
  Kel: () => Kel,
  L0n: () => L0n,
  Lrn: () => Lrn,
  M0n: () => M0n,
  Mrn: () => Mrn,
  N0n: () => N0n,
  Nrn: () => Nrn,
  Nu: () => Nu,
  OSe: () => OSe,
  Qel: () => Qel,
  Svi: () => Svi,
  TKl: () => TKl,
  U1t: () => U1t,
  U5e: () => U5e,
  Uel: () => Uel,
  V1t: () => V1t,
  Vel: () => Vel,
  W1t: () => W1t,
  WCe: () => WCe,
  Wel: () => Wel,
  XF: () => XF,
  Xel: () => Xel,
  Yel: () => Yel,
  Zel: () => Zel,
  Zmr: () => Zmr,
  _vi: () => _vi,
  ado: () => ado,
  ads: () => ads,
  avi: () => avi,
  bWe: () => bWe,
  bae: () => bae,
  bvi: () => bvi,
  cds: () => cds,
  cvi: () => cvi,
  dds: () => dds,
  dvi: () => dvi,
  ehr: () => ehr,
  etl: () => etl,
  f7: () => f7,
  fds: () => fds,
  fvi: () => fvi,
  gvi: () => gvi,
  hvi: () => hvi,
  iU: () => iU,
  ido: () => ido,
  ivi: () => ivi,
  j1t: () => j1t,
  jCe: () => jCe,
  jel: () => jel,
  kKl: () => kKl,
  kWe: () => kWe,
  kvi: () => kvi,
  lds: () => lds,
  lvi: () => lvi,
  mvi: () => mvi,
  ndo: () => ndo,
  nhr: () => nhr,
  nvi: () => nvi,
  odo: () => odo,
  ovi: () => ovi,
  pds: () => pds,
  pvi: () => pvi,
  qel: () => qel,
  rdo: () => rdo,
  rhr: () => rhr,
  rvi: () => rvi,
  sdo: () => sdo,
  sst: () => sst,
  svi: () => svi,
  tdo: () => tdo,
  thr: () => thr,
  u7: () => u7,
  uds: () => uds,
  uvi: () => uvi,
  vKl: () => vKl,
  wDe: () => wDe,
  wKl: () => wKl,
  wWe: () => wWe,
  wvi: () => wvi,
  yvi: () => yvi,
  z1t: () => z1t,
  zW: () => zW,
  zel: () => zel,
  zfe: () => zfe
});
module.exports = __toCommonJS(chunk_bq31aqv6_exports);
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_8hfdvrr1 = require("/$bunfs/root/chunk-8hfdvrr1.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_gbskgz33 = require("/$bunfs/root/chunk-gbskgz33.js");
var import_chunk_ht27b0vz = require("/$bunfs/root/chunk-ht27b0vz.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_pjgajh0r = require("/$bunfs/root/chunk-pjgajh0r.js");
var import_chunk_e09cft3a = require("/$bunfs/root/chunk-e09cft3a.js");
var import_chunk_qg858gb7 = require("/$bunfs/root/chunk-qg858gb7.js");
var import_chunk_drtv8e2x = require("/$bunfs/root/chunk-drtv8e2x.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_k883m4fq = require("/$bunfs/root/chunk-k883m4fq.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_gjzwg6ck = require("/$bunfs/root/chunk-gjzwg6ck.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_ghnve1xk = require("/$bunfs/root/chunk-ghnve1xk.js");
var import_chunk_wbk1hf21 = require("/$bunfs/root/chunk-wbk1hf21.js");
var import_chunk_7n1spq36 = require("/$bunfs/root/chunk-7n1spq36.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
var import_path4 = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_crypto = require("crypto");
var import_promises2 = require("timers/promises");
var import_path5 = require("path");
var import_crypto2 = require("crypto");
var import_fs2 = require("fs");
var import_promises3 = require("fs/promises");
var import_crypto3 = require("crypto");
var import_path6 = require("path");
var import_path7 = require("path");
var import_path8 = require("path");
var import_path9 = require("path");
var import_path10 = require("path");
var import_path11 = require("path");
var import_promises4 = require("timers/promises");
var import_path12 = require("path");
var import_os = require("os");
var V = (e) => (0, import_chunk_z6pfqf6e.KS)(e.replace(/^\/{2,}/, "/")) || (0, import_chunk_cg8dqz0a.x)() === "windows" && (0, import_chunk_z6pfqf6e.sa)(e);
var B1t = 1e3;
var We = 50;
var $e = 40;
var qt = 32;
async function pe(e, r) {
  return e.unresolved && e.reason === "unexamined" && (0, import_chunk_z6pfqf6e.mc)(e.requested) && (0, import_path3.dirname)(e.stoppedAt) === (0, import_path3.parse)(e.stoppedAt).root ? (0, import_chunk_5appeerh.Tn)((0, import_chunk_w578pjby.le)().lstat((0, import_path3.parse)(e.stoppedAt).root).then(() => true, (a) => !(0, import_chunk_jv7av99m.kn)(a)), r, () => Error("cut short")).catch(() => true) : e.unresolved;
}
async function Je(e, r) {
  let o = await (0, import_chunk_w578pjby.sx)(e, r);
  return await pe(o, r) ? void 0 : o.unresolved ? e : o.landing;
}
var ae = (e, r) => (0, import_chunk_5appeerh.Tn)(e, r, () => Error("cut short"));
async function de(e) {
  try {
    return (await (0, import_chunk_w578pjby.le)().lstat(e)).isSymbolicLink();
  } catch (r) {
    if (!(!(0, import_chunk_jv7av99m.kn)(r) && await (0, import_chunk_w578pjby.le)().openDirNoFollow(e).then(() => true, () => false))) throw r;
    return false;
  }
}
var Ae = (e) => e.split("/").filter((r) => r !== "" && r !== ".");
async function ce(e, r) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return Je(e, r);
  let o = Ae(e), a = "/", d = 0;
  try {
    while (o.length > 0 && d <= $e) {
      r.throwIfAborted();
      let [f = "", ...g] = o, y = f === "..", h = y ? (0, import_path4.dirname)(a) : (0, import_path4.join)(a, f);
      if (V(h)) return g.includes("..") ? void 0 : (0, import_path4.join)(h, ...g);
      let b = !y && await ae(de(h), r), P = b ? await ae((0, import_chunk_w578pjby.le)().readlink(h), r).catch(() => {
        return;
      }) : "";
      if (P === void 0) return;
      let R = P.startsWith("/");
      o = [...Ae(P), ...g], d += b ? 1 : 0, a = R ? "/" : b ? a : h;
    }
    return d > $e ? void 0 : a;
  } catch (f) {
    let [, ...g] = o;
    return (0, import_chunk_jv7av99m.kn)(f) && !g.includes("..") ? (0, import_path4.join)(a, ...o) : void 0;
  }
}
async function M0n(e, r) {
  let o = (0, import_path2.isAbsolute)(e) ? e : (0, import_chunk_n2dbhmj2.xt)(e), a = /* @__PURE__ */ new Set([o]);
  for (let d of a) {
    let f = await (0, import_chunk_w578pjby.sx)(d, r);
    if (r.aborted || await pe(f, r)) return;
    f.spellings.forEach((b) => a.add(b)), a.add(f.unresolved ? d : f.landing);
    let y = d === o && a.size > 1 && (0, import_chunk_cg8dqz0a.x)() !== "windows" ? await ce(o, r) : d;
    if (y === void 0 || a.size > qt) return;
    a.add(y);
  }
  return Array.from(a);
}
async function ze(e, r, o) {
  let a = await M0n(e, o);
  return a?.length === r.length && a.every((d, f) => d === r[f]);
}
var Ke = async (e, r, o) => await ce(e, o) === (0, import_path.resolve)(e) && ze(e, r, o);
async function ke(e, r) {
  let o = !V(e);
  if (o && await de(e).catch(() => true)) return;
  let d = await r(e);
  return o && await de(e).catch(() => true) ? void 0 : d;
}
function Ye(e) {
  if (!["ELOOP", "ENOTDIR"].includes((0, import_chunk_jv7av99m.w)(e) ?? "")) throw e;
  return;
}
async function Xe(e, r, o) {
  var _stack = [];
  try {
    if (!["linux", "wsl"].includes((0, import_chunk_cg8dqz0a.x)())) return ke(e, o);
    const d = __using(_stack, await (0, import_promises.open)(e, import_fs.constants.O_RDONLY | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW | import_chunk_jxja0v0z.cr).catch(Ye), true);
    if (d === void 0) return;
    let g = `/proc/self/fd/${d.fd}`, y = await (0, import_chunk_865at33z.yzn)(d.fd).catch(() => null), h = y === void 0, b = typeof y === "string" && r.includes(y);
    return h ? ke(e, o) : b ? await o(g) : void 0;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
var qe = (e) => function(o) {
  if (!e.aborted) throw o;
  return;
};
async function wKl(e, r, o) {
  let a = AbortSignal.timeout(B1t), d = await ce(e, a);
  if (!(d !== void 0 && r.includes(d))) return;
  let g = await ae(Xe(d, r, o), a).catch(qe(a));
  return await ze(e, r, a) ? g : void 0;
}
async function lvi(e, r, o) {
  let a = (0, import_chunk_cg8dqz0a.x)() === "macos";
  return (0, import_chunk_865at33z.Edt)((0, import_chunk_n2dbhmj2.xw)(e), r, o, a ? await (0, import_chunk_865at33z.mhe)(r) : void 0, "refused");
}
var dvi = (e, r, o) => async function(d) {
  let f = await lvi(e, r, o).catch(() => {
    return;
  });
  if (f === void 0) return;
  try {
    let y = await f.handle.stat({ bigint: true }), h = y.isFile() ? await d(f, y) : void 0;
    return ((0, import_chunk_kpby9tcv.ia)(y.ino) ? await Ke(e, r, o) : (0, import_chunk_drtv8e2x.ipo)(y, await (0, import_chunk_w578pjby.le)().statBigint(f.canonicalPath))) ? h : void 0;
  } catch {
    return;
  } finally {
    await f.close().catch(() => {
    });
  }
};
async function cvi(e, r, o) {
  let a = `attached-read-${(0, import_crypto.randomUUID)()}`, d = (0, import_chunk_n2dbhmj2.xw)(e), f = (0, import_chunk_cg8dqz0a.x)() === "macos", g = f ? await (0, import_chunk_865at33z.mhe)(r) : null;
  if (o.session.writePermissionStash.stash(a, d, r, "read"), f) o.session.writePermissionStash.stashIdentity(a, d, g);
  return { ...o, toolUseId: a };
}
var uvi = (e, r) => e.some((o) => (0, import_chunk_p1ewvgeh.Ia)(o, r, "read", "deny", { isDirectory: true }) !== null);
var rdo = (e, r) => e.some((o) => (0, import_chunk_p1ewvgeh.Cjt)(o, r, "read") !== null) || (0, import_chunk_p1ewvgeh._j)(e.at(0) ?? "", r, e);
function Uel() {
  let e = 0, r = Promise.resolve(), o = [];
  return async function() {
    if (e > 0 && e % We === 0) r = Promise.all([r, ...o]).then(() => (0, import_promises2.setImmediate)()), o = [];
    e += 1;
    let f = Promise.withResolvers();
    return o = [...o, f.promise], await r, f.resolve;
  };
}
function pvi(e) {
  let { isCaretCell: r, tintBeneath: o, start: a, end: d } = e;
  if (r !== true) return [e];
  return o === void 0 ? [] : [{ ...o, start: a, end: d, shimmerColor: void 0 }];
}
var XF = Object.freeze([]);
var mvi = (e, r) => e.spans.reduce((o, a) => o - Math.max(0, Math.min(r, a.end) - a.start), r);
function lds(e, r, o) {
  let a = e === void 0 ? { ...o, color: void 0, priority: 0 } : { ...e, ...o };
  if (r === void 0) return a;
  let d = (0, import_chunk_e09cft3a.w1t)(r.color), f = (0, import_chunk_e09cft3a.w1t)(r.backgroundColor);
  return { ...a, tintBeneath: a, ...d !== void 0 && { color: d, shimmerColor: void 0 }, ...f !== void 0 && { backgroundColor: f }, ...r.dimColor !== void 0 && { dimColor: r.dimColor }, ...r.bold !== void 0 && { bold: r.bold }, ...r.italic !== void 0 && { italic: r.italic }, ...r.underline !== void 0 && { underline: r.underline }, ...r.strikethrough !== void 0 && { strikethrough: r.strikethrough } };
}
function Hrn(e, r, o) {
  return o === void 0 || o.start === o.end || o.end <= e.start || o.start >= e.end ? [e] : [...o.start > e.start ? [{ ...e, end: o.start }] : [], { ...e, start: Math.max(e.start, o.start), end: Math.min(e.end, o.end), isCaretCell: true, tintBeneath: r }, ...o.end < e.end ? [{ ...e, start: o.end }] : []];
}
function hvi(e, r, o) {
  let a = (0, import_chunk_wbk1hf21.Dr)(r).split(`
`).map((g) => g.length), d = [], f = 0;
  for (let [g, y] of o.entries()) {
    let h = a[g] ?? 0;
    d.push({ textStart: y, renderedStart: f, length: h }), f += h + 1;
  }
  return e.map((g) => ({ ...g, start: Qe(d, g.start, false), end: Qe(d, g.end, true) })).filter((g) => g.end > g.start);
}
function Qe(e, r, o) {
  let a = 0, d = e.length;
  while (a < d) {
    let g = a + d >>> 1, y = e[g].textStart;
    if (o ? y < r : y <= r) a = g + 1;
    else d = g;
  }
  let f = e[a - 1];
  return f ? f.renderedStart + Math.min(r - f.textStart, f.length) : 0;
}
function gvi(e, r) {
  if (r.length === 0) return [{ text: e, start: 0 }];
  return new et(e).segment(odo(r));
}
function odo(e) {
  let r = [...e].sort((d, f) => {
    if (d.start !== f.start) return d.start - f.start;
    return f.priority - d.priority;
  }), o = [], a = -1 / 0;
  for (let d of r) {
    if (d.start === d.end) continue;
    if (d.start >= a) o.push(d), a = Math.max(a, d.end);
  }
  return o;
}
class et {
  text;
  tokens;
  visiblePos = 0;
  stringPos = 0;
  tokenIdx = 0;
  charIdx = 0;
  codes = [];
  constructor(e) {
    this.text = e;
    this.tokens = (0, import_chunk_pjgajh0r.Byi)(e);
  }
  segment(e) {
    let r = [];
    for (let a of e) {
      let d = this.segmentTo(a.start);
      if (d) r.push(d);
      let f = this.segmentTo(a.end);
      if (f) f.highlight = a, r.push(f);
    }
    let o = this.segmentTo(1 / 0);
    if (o) r.push(o);
    return r;
  }
  segmentTo(e) {
    if (this.tokenIdx >= this.tokens.length || e <= this.visiblePos) return null;
    let r = this.visiblePos;
    while (this.tokenIdx < this.tokens.length) {
      let h = this.tokens[this.tokenIdx];
      if (h.type !== "ansi") break;
      this.codes.push(h), this.stringPos += this.sourceLength(h), this.tokenIdx++;
    }
    let o = this.stringPos, a = [...this.codes];
    while (this.visiblePos < e && this.tokenIdx < this.tokens.length) {
      let h = this.tokens[this.tokenIdx];
      if (h.type === "ansi") this.codes.push(h), this.stringPos += this.sourceLength(h), this.tokenIdx++;
      else {
        let b = e - this.visiblePos, P = h.value.length - this.charIdx, S = Math.min(b, P);
        if (this.stringPos += S, this.visiblePos += S, this.charIdx += S, this.charIdx >= h.value.length) this.tokenIdx++, this.charIdx = 0;
      }
    }
    if (this.stringPos === o) return null;
    let d = Ve(a), f = Ve(this.codes);
    this.codes = f;
    let g = (0, import_chunk_pjgajh0r.OHn)(d), y = (0, import_chunk_pjgajh0r.OHn)((0, import_chunk_pjgajh0r.Wss)(f));
    return { text: g + this.text.substring(o, this.stringPos) + y, start: r };
  }
  sourceLength({ code: e }) {
    let r = this.text.charCodeAt(this.stringPos);
    return r === 27 || r === 155 ? e.length : e.length - 2;
  }
}
function Ve(e) {
  return (0, import_chunk_pjgajh0r.sso)(e).filter((r) => r.code !== r.endCode);
}
function $5e(e, r) {
  let o = e.length === 0, a = e.map((d) => ({ ...d, start: d.start + r, end: d.end + r }));
  return o ? XF : a;
}
var j1t = (e, r, o) => e.spans.filter((a) => o === "after" ? a.run.start <= r : a.run.start < r).reduce((a, d) => a + d.end - d.start, r);
var _vi = (e, r) => odo(e).flatMap((o) => {
  let a = j1t(r, o.start, "after"), d = j1t(r, o.end, "before"), f = [a, ...r.spans.filter((g) => g.start >= a && g.end <= d).flatMap((g) => [g.start, g.end]), d];
  return f.flatMap((g, y) => {
    let h = f[y + 1] ?? g;
    return y % 2 === 0 && h > g ? [{ ...o, start: g, end: h }] : [];
  });
});
function ehr(e, r) {
  let o = 0, a = r.map((d) => {
    let f = d.start + o;
    return o += (d.virtualText ?? "").length, { start: f, end: d.start + o, run: d };
  });
  return { draft: e, text: r.map((d, f) => e.slice(r[f - 1]?.start ?? 0, d.start) + (d.virtualText ?? "")).join("") + e.slice(r.at(-1)?.start ?? 0), spans: a };
}
var yvi = (e, r) => e.spans.flatMap((o) => Hrn(lds(void 0, o.run, { start: o.start, end: o.end }), void 0, r));
var iU = ["exit", "quit", ":q", ":q!", ":wq", ":wq!"];
(0, import_chunk_adx6804h.B)();
function Bel(e, { matched: r, sentByPerson: o, takenUnknown: a = false, candidates: d }) {
  return;
}
var Drn = "\u3002\u3001\uFF1F\uFF01", u7 = String.raw`[\s${"\u3002\u3001\uFF1F\uFF01"}]`, tt = /@\[[^[\]\n]{1,200}\]\((?:claude-ref:[A-Za-z0-9:_.=;-]{0,161} "[^"\n]{1,200}"|https:\/\/docs\.google\.com\/(?:document|spreadsheets|presentation)\/d\/[\w-]{16,})\)/uy;
function zW(e) {
  if (!e.includes("@[")) return e;
  let r = [], o = -1, a = -1, d = 0, f = 0, g = -1, y = -1, h = -1, b = false, P = -1, S = 0;
  while (S < e.length) {
    let A = e[S];
    if (A === `
`) {
      g = f > 0 ? se(g, o) : -1, o = -1, h = -1, P = -1, a = -1, d = 0, S++;
      continue;
    }
    let T = e[S + 1];
    if (A === "\\" && (T === "(" || T === ")" || T === "\\" || T === "[" || T === "]" && e[S + 2] !== "(")) {
      if (T === "]" && g !== -1) Q(r, g, S + 2, true);
      if (T === "]" && P !== -1) Q(r, P, S + 2, true), P = -1;
      S += 2;
      continue;
    }
    if (A === "@" && T === "[") {
      y = se(y, S), tt.lastIndex = S;
      let L = tt.exec(e), H = se(g, o);
      if (L !== null && H === -1) {
        Q(r, y, S + L[0].length, true), a = se(a, S), b = true, S += L[0].length;
        continue;
      }
      if (L !== null) {
        S = ve(e, S), Q(r, y, S, false), b = true;
        continue;
      }
      if (o === -1 && g === -1) o = y, h = S;
      P = S, f++, S += 2;
      continue;
    }
    if (A === "[" && f > 0) f++;
    else if (A === "]" && f > 0) {
      if (f--, g !== -1 && T !== "(") Q(r, g, S + 1, true);
      if (P !== -1 && T !== "(" && !nt(e, P + 2, S)) Q(r, P, S + 1, true);
      if (P = -1, f === 0 && T !== "(") {
        if (h !== -1 && !nt(e, h + 2, S)) Q(r, h, S + 1, true);
        o = -1, g = -1, h = -1;
      }
    }
    let C = A === "]" && e.startsWith("](claude-ref:", S);
    if (y !== -1 && (C || A === "]" && e.startsWith("](https://docs.google.com/", S))) {
      let L = e.indexOf(C ? '")' : ")", S);
      S = ve(e, L === -1 ? e.length : L), Q(r, y, S, false), b = true;
      continue;
    }
    let O = A === ")" && d === 0;
    if (A === "]" && T === "(" || A === '"' && T === ")" || O) {
      let L = se(se(g, o), O ? -1 : a);
      if (L === -1 && b && A === '"') L = y;
      if (L !== -1) {
        let H = S;
        if (S = ve(e, S), Q(r, L, S, false), e.slice(H, S).includes("](claude-ref:")) b = true;
        continue;
      }
    }
    if (A === "(") d++;
    else if (A === ")" && d > 0) d--;
    S++;
  }
  let R = "", v = 0;
  for (let { start: A, end: T, closed: C } of r) {
    let O = e.slice(A + 1, C ? T - 1 : T).replace(/[^\n]/g, " ");
    R += e.slice(v, A) + "@" + O + (C ? e[T - 1] : ""), v = T;
  }
  return R + e.slice(v);
}
function Q(e, r, o, a) {
  while ((e.at(-1)?.start ?? -1) >= r) e.pop();
  let d = e.at(-1);
  if (d !== void 0 && d.end > r) {
    if (o > d.end) d.end = o, d.closed = a;
    return;
  }
  e.push({ start: r, end: o, closed: a });
}
function nt(e, r, o) {
  let a = e[o + 1];
  return !/\s/.test(e.slice(r, o)) && (a === "/" || a === "." && Lrn(e, o + 2));
}
function se(e, r) {
  return e === -1 ? r : r === -1 ? e : Math.min(e, r);
}
function ve(e, r) {
  let o = e.indexOf(`
`, r);
  return o === -1 ? e.length : o;
}
function Lrn(e, r) {
  let o = e.charCodeAt(r);
  return o >= 48 && o <= 57 || o >= 65 && o <= 90 || o === 95 || o >= 97 && o <= 122;
}
function F5e(e) {
  return { [Symbol.asyncDispose]: () => e.close().catch(() => {
  }) };
}
var U1t = { stale: 1e4, retries: { retries: 3, minTimeout: 50 } };
function rvi(e) {
  return e.split("\r").flatMap((r) => {
    if (!/[\u2028\u2029]/.test(r)) return [r];
    try {
      return JSON.parse(r), [r];
    } catch {
      return r.split(/[\u2028\u2029]/);
    }
  });
}
async function* ovi(e) {
  for await (let r of (0, import_chunk_qg858gb7.ist)(e)) yield* rvi(r);
}
async function svi(e, r, o, { fileMode: a = "default", beforeWrite: d } = {}) {
  let f = [], g = 0;
  try {
    var _stack = [];
    try {
      let h = await (0, import_promises3.open)(e, "r");
      const b = __using(_stack, F5e(h), true);
      for await (let P of ovi(h)) if (r(P)) g++;
      else if (o === "filter") f.push(P);
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (h) {
    if ((0, import_chunk_jv7av99m.J)(h)) return 0;
    throw h;
  }
  if (o !== "filter" || g === 0) return g;
  d?.();
  let y = a === "preserve" ? (await (0, import_promises3.stat)(e)).mode & 511 : void 0;
  return await (0, import_chunk_q7qjcthc.FM)(e, f.length ? `${f.join(`
`)}
` : "", { exactMode: y }), g;
}
class I0n extends Error {
}
var it = 4194304;
async function ivi(e, r, { start: o, end: a, tail: d, expect: f, verifiedHead: g, residueBytes: y = 0 }) {
  let h = [], b = 0, P = (k) => {
    let D = k.endsWith("\r") ? k.slice(0, -1) : k;
    if (r(D)) b++;
    else h.push(D);
  }, S = true, R = false, v = (k) => {
    S = false;
    let D = k.toString("utf8"), z = D.endsWith("\r") ? D.slice(0, -1) : D;
    if (y <= 0 || k.length <= y || !r(z)) {
      P(D);
      return;
    }
    R = true, P(k.subarray(0, y).toString("utf8")), P(k.subarray(y).toString("utf8"));
  }, A = 0, T = Buffer.alloc(0), C = (0, import_crypto2.createHash)("sha256"), O;
  try {
    O = await (0, import_promises3.open)(e, import_fs2.constants.O_RDONLY | import_fs2.constants.O_NOFOLLOW | import_chunk_q7qjcthc.Ege);
  } catch (k) {
    let D = (0, import_chunk_jv7av99m.w)(k);
    if (D === "ELOOP" || D === "ENXIO") throw new I0n("history.jsonl is not a regular file at open");
    throw k;
  }
  try {
    let k = await O.stat();
    if (!k.isFile() || f !== void 0 && (f.ino !== 0 && k.ino !== f.ino || k.birthtimeMs !== f.birthtimeMs)) throw new I0n("history.jsonl changed between its screen and the scan");
    if (g !== void 0) {
      let z = (0, import_crypto2.createHash)("sha256"), I = 0;
      while (I < g.bytes) {
        let U = Buffer.alloc(Math.min(it, g.bytes - I)), { bytesRead: X } = await O.read(U, 0, U.length, I);
        if (X === 0) break;
        z.update(U.subarray(0, X)), I += X;
      }
      if (I !== g.bytes || z.digest("hex") !== g.digest) throw new I0n("history.jsonl was rewritten under the head an earlier scan judged");
    }
    let D = Math.max(0, a - o);
    while (A < D) {
      let z = Buffer.alloc(Math.min(it, D - A)), I = 0;
      while (I < z.length) {
        let { bytesRead: Z } = await O.read(z, I, z.length - I, o + A + I);
        if (Z === 0) break;
        I += Z;
      }
      if (I === 0) break;
      A += I;
      let U = T.length ? Buffer.concat([T, z.subarray(0, I)]) : z.subarray(0, I), X = U.lastIndexOf(10);
      if (X === -1) {
        T = U;
        continue;
      }
      C.update(U.subarray(0, X + 1));
      let Ue = 0;
      if (S) {
        let Z = U.indexOf(10);
        v(U.subarray(0, Z)), Ue = Z + 1;
      }
      let Be = U.toString("utf8", Ue, X + 1).split(`
`);
      Be.pop();
      for (let Z of Be) P(Z);
      T = U.subarray(X + 1);
    }
  } finally {
    await O.close();
  }
  let L = T.length === 0, H = A - T.length;
  if (d === "judge" && T.length > 0) {
    if (C.update(T), S) v(T);
    else P(T.toString("utf8"));
    H = A;
  }
  return { kept: h, dropped: b, consumed: o + H, digest: C.digest("hex"), terminated: L, split: R };
}
var Pn = /[\p{L}\p{N}_@#./\\]/u;
function Le(e, r, o, a, d, f, g) {
  if (!f) {
    let h = r - 1;
    while (h >= a && import_chunk_ghnve1xk.Woa.test(e[h])) h = h <= g.openersTo && h >= g.openersFrom ? g.openersFrom - 1 : h - 1;
    if (r - 1 >= a && h < r - 1) g.openersFrom = Math.max(h + 1, a), g.openersTo = r - 1;
    if (h >= a && Pn.test(e[h])) return false;
  }
  let y = o;
  while (y < d && import_chunk_ghnve1xk.joa.test(e[y])) y = y >= g.closersFrom && y < g.closersTo ? g.closersTo : y + 1;
  if (y = Math.min(y, d), y > o) g.closersFrom = o, g.closersTo = y;
  return y >= d || /\s/.test(e[y]);
}
function dt() {
  return { openersFrom: 0, openersTo: -1, closersFrom: 0, closersTo: 0 };
}
function D0n(e, r, o = (0, import_chunk_tjdnrbvx.I2t)(e)) {
  let a = He(e, r, o, true, "anyCopy");
  return ge([...a.spans, ...He(e, r, o, false, "anyCopy").spans, ...a.skipped ? He(e, r, o, true, "standingCopy").spans : []]);
}
function He(e, r, o, a, d) {
  let f = [], g = [], y = false, h = (0, import_chunk_4smdap7r.M)(r).filter((b) => b !== "").sort((b, P) => P.length - b.length);
  for (let b of h) {
    let P = o(b), S = [], R = [], v = dt(), A = 0, T = 0, C = f[0]?.from ?? e.length, O = 0, L = 0;
    for (; ; ) {
      let H = P(O);
      if (H === -1) break;
      let k = H + b.length;
      if (k > C || H < T) {
        while (A < f.length && H >= f[A].from) T = f[A].to, A++;
        if (C = f[A]?.from ?? e.length, k <= T) {
          O = T - b.length + 1;
          continue;
        }
        let D = H >= T && k <= C, z = false;
        if (!D && Le(e, H, k, T, C, H === L, v)) {
          let I = H < T ? P(T) : -1, U = I !== -1 && I < Math.min(k, C);
          if (U && d === "standingCopy") {
            let X = T;
            while (X < I && /\s/.test(e[X])) X++;
            U = X === I && Le(e, I, I + b.length, T, C, I === T, dt());
          }
          if (U) y = true;
          else R.push({ from: H, to: k }), z = true;
        }
        if (H >= T && k > C) T = f[A].to, A++, C = f[A]?.from ?? e.length, O = k;
        else O = Math.max(H, T);
        L = a && z ? Math.max(k, T) : T;
        continue;
      }
      if (Le(e, H, k, T, C, H === L, v)) S.push({ from: H, to: k }), L = k;
      O = k;
    }
    if (a) {
      if (S.length > 0 || R.length > 0) f = ge([...f, ...S, ...R]);
      continue;
    }
    if (S.length > 0) f = [...f, ...S].sort((H, k) => H.from - k.from);
    if (R.length > 0) g = ge([...g, ...R]);
  }
  return { spans: g.length === 0 ? f : ge([...f, ...g]), skipped: y };
}
function ge(e) {
  let r = [];
  for (let o of e.sort((a, d) => a.from - d.from)) {
    let a = r.at(-1);
    if (a !== void 0 && o.from < a.to) a.to = Math.max(a.to, o.to);
    else r.push({ ...o });
  }
  return r;
}
function Svi(e) {
  let r = [];
  for (let o of [...e].sort((a, d) => a.from - d.from)) {
    let a = r.at(-1);
    if (a !== void 0 && o.from <= a.to) a.to = Math.max(a.to, o.to);
    else r.push({ ...o });
  }
  return r;
}
function wn(e, r) {
  let o = (0, import_chunk_tjdnrbvx.YWi)(r);
  if (o.at(-1) === 0) return;
  let a = [];
  for (let d = 0, f = 0; d < e.length; d++) {
    while (f > 0 && e[d] !== r[f]) f = o[f - 1];
    if (e[d] === r[f]) f++;
    if (f === r.length) {
      let g = d + 1 - r.length, y = a.at(-1);
      if (y !== void 0 && g <= y.to) y.to = d + 1;
      else a.push({ from: g, to: d + 1 });
      f = o[f - 1];
    }
  }
  return a;
}
function Wel(e, r, o = (0, import_chunk_tjdnrbvx.I2t)(e)) {
  let a = [], d;
  for (let f of (0, import_chunk_4smdap7r.M)(r)) {
    if (f === "") continue;
    let g = o(f), y = f.includes("<") && g(0) !== -1 ? wn(d ??= (0, import_chunk_tjdnrbvx.Sko)(e), (0, import_chunk_tjdnrbvx.Sko)(f)) : void 0;
    if (y !== void 0) {
      for (let h of y) a.push(h);
      continue;
    }
    for (let h = g(0); h !== -1; h = g(h + f.length)) a.push({ from: h, to: h + f.length });
  }
  return Svi(a);
}
function Rn(e) {
  let r = [];
  for (let [o, a] of [[import_chunk_ghnve1xk.x4t, true], [import_chunk_ghnve1xk.z0o, false]]) for (let d = e.indexOf(o); d !== -1; d = e.indexOf(o, d + 1)) {
    let f = d + o.length, g = e.slice(f, f + import_chunk_ghnve1xk.MLr), y = f + import_chunk_ghnve1xk.MLr;
    if (!(0, import_chunk_ghnve1xk.Boa)(g)) continue;
    if (a) {
      if (e.startsWith(import_chunk_ghnve1xk.Uoa, y)) r.push({ at: d, end: y + import_chunk_ghnve1xk.Uoa.length, id: g, opens: a });
    } else if (e.startsWith('">', y) && (d === 0 || e[d - 1] === `
`)) r.push({ at: d, end: y + 2, id: g, opens: a });
  }
  return r.sort((o, a) => o.at - a.at);
}
function jel(e, r = [], o = []) {
  let a = Rn(e), d = (h) => o.some((b) => b !== "" && e.slice(Math.max(0, h.at - b.length + 1), h.end + b.length - 1).includes(b)), f = Array(a.length + 1).fill(a.length);
  for (let h = a.length - 1; h >= 0; h--) {
    let b = a[h];
    f[h] = En(r, b.at, b.end) === -1 && !d(b) ? h : f[h + 1];
  }
  let g = /* @__PURE__ */ new Map();
  a.forEach((h, b) => {
    if (!h.opens) {
      let P = g.get(h.id);
      if (P === void 0) g.set(h.id, [b]);
      else P.push(b);
    }
  });
  let y = [];
  return a.forEach((h, b) => {
    if (!h.opens) return;
    let P = g.get(h.id) ?? [], S = f[b + 1], R = 0, v = P.length;
    while (R < v) {
      let C = R + v >> 1;
      if (P[C] <= S) R = C + 1;
      else v = C;
    }
    let A = P[R - 1];
    if (A === void 0 || A <= b || a[A].at < h.end) return;
    let T = a[A];
    y.push({ from: h.at, to: e[T.end] === `
` ? T.end + 1 : T.end, bodyFrom: h.end, bodyTo: Math.max(h.end, T.at - 1) });
  }), y;
}
function En(e, r, o) {
  let a = 0, d = e.length;
  while (a < d) {
    let f = a + d >> 1;
    if (e[f].to <= r) a = f + 1;
    else d = f;
  }
  return a < e.length && e[a].from < o ? a : -1;
}
function Gel(e, r) {
  let o = [...r, ...e.map((d) => ({ ...d, bodyFrom: d.from, bodyTo: d.to }))].sort((d, f) => d.from - f.from || f.to - d.to), a = [];
  for (let d of o) {
    let f = a.at(-1);
    if (f !== void 0 && d.from < f.to) {
      if (d.to > f.to) f.to = d.to, f.bodyTo = d.bodyTo;
    } else a.push({ ...d });
  }
  return a;
}
function zel(e, r, o, a) {
  let d = [], f = 0, g = true, y = (S) => {
    if (S === "") return;
    d.push(S), g = false;
    let R = 0;
    while (R < S.length && S[S.length - 1 - R] === `
`) R++;
    f = R === S.length ? f + R : R;
  }, h = 0, b = false, P = (S) => {
    let R = a(e.slice(h, S));
    if (R !== "") y((b ? `
` : "") + R);
  };
  for (let S of r) {
    let R = S.from;
    while (R > h && e[R - 1] === `
`) R--;
    P(R);
    let v = o(e.slice(S.bodyFrom, S.bodyTo));
    y(g || f === 0 ? `

` : f === 1 ? `
` : ""), y(`${v.opener}${v.body}
${v.closer}`), h = S.to;
    while (e[h] === `
`) h++;
    b = true;
  }
  return P(e.length), d.join("");
}
var G1t = (e) => e.promptSubmitted === void 0 && (e.screeningPending === true || e.screeningOwed === true);
var L0n = (e, r) => r === e ? void 0 : r;
function lt(e, r, o) {
  let { screened: a, unanswered: d } = o, f = e.historyEntry, g = a?.dropped === true || d === "skipped" && a === void 0 && G1t(e);
  if (f === void 0 || g) return;
  let y = a === void 0 ? L0n(e.value, e.promptSubmitted?.text) : a.rewritten;
  return y === void 0 ? f : r(f, y);
}
var ft = "paste-cache", ut = 1e7;
class pt {
  inFlight = /* @__PURE__ */ new Map();
  retainedFailed = /* @__PURE__ */ new Map();
  retainedFailedChars = 0;
  retainedCap = ut;
  markInFlight(e, r) {
    this.inFlight.set(e, r);
  }
  settle(e) {
    this.inFlight.delete(e);
    let r = this.retainedFailed.get(e);
    if (r !== void 0) this.retainedFailedChars -= r.length, this.retainedFailed.delete(e);
  }
  retainFailed(e, r) {
    this.inFlight.delete(e);
    let o = this.retainedFailed.get(e);
    if (o !== void 0) this.retainedFailedChars -= o.length, this.retainedFailed.delete(e);
    if (r.length > this.retainedCap) return;
    this.retainedFailed.set(e, r), this.retainedFailedChars += r.length;
    while (this.retainedFailedChars > this.retainedCap) {
      let a = this.retainedFailed.keys().next().value;
      this.retainedFailedChars -= this.retainedFailed.get(a).length, this.retainedFailed.delete(a);
    }
  }
  get(e) {
    return this.inFlight.get(e) ?? this.retainedFailed.get(e);
  }
  clear() {
    this.inFlight.clear(), this.retainedFailed.clear(), this.retainedFailedChars = 0, this.retainedCap = ut;
  }
}
var Cn = new import_chunk_2904xtvq.j(() => new pt());
function ct() {
  return Cn.of((0, import_chunk_f9x2f6cx.N)().host);
}
function ye() {
  return (0, import_path6.join)((0, import_chunk_2gtmjt3y.Ze)(), ft);
}
function mt(e) {
  return (0, import_crypto3.createHash)("sha256").update(e).digest("hex").slice(0, 16);
}
var _n = /^[0-9a-f]{16}$/;
function Ie(e) {
  if (!_n.test(e)) throw Error("invalid paste-content hash");
}
function Oe(e) {
  return Ie(e), (0, import_path6.join)(ye(), `${e}.txt`);
}
function gt(e) {
  return Ie(e), import_chunk_hkvzj051.at.paste(e);
}
function ht(e, r, o) {
  let a = ct();
  return a.markInFlight(e, r), vn(e, r, o, a);
}
async function vn(e, r, o, a) {
  try {
    if ((0, import_chunk_865at33z.vde)(o)) {
      Ie(e), a.retainFailed(e, r), (0, import_chunk_2yx6c1y2.ZN)("paste", (0, import_path6.join)(ft, `${e}.txt`)), (0, import_chunk_cqa9hrgx.l)("paste_store", "diskless_skipped");
      return;
    }
    let d = !(0, import_chunk_f9x2f6cx.Y)(), f = (0, import_chunk_8j3h6yzg.Vn)();
    if (d) await f.mkdir(ye());
    if ((0, import_chunk_m15w38ag.ne)() && o) {
      let y = await o.write(gt(e), r, { publishDiscipline: "inPlace", mode: 384 });
      if (!y.ok) throw (0, import_chunk_w578pjby.t)(`Paste write refused: ${(0, import_chunk_7n1spq36.un)(y.error)}`), Error("paste write refused by the storage backend");
    } else await f.write(Oe(e), r, 384);
    a.settle(e);
    let g = d ? `to ${Oe(e)}` : "in the storage backend";
    (0, import_chunk_w578pjby.t)(`Stored paste ${e} ${g}`), (0, import_chunk_cqa9hrgx.u)("paste_store");
  } catch (d) {
    a.retainFailed(e, r), (0, import_chunk_w578pjby.t)(`Failed to store paste: ${d}`), (0, import_chunk_cqa9hrgx.l)("paste_store", "paste_store_write_failed");
  }
}
async function yt(e, r) {
  let o = ct().get(e);
  if (o !== void 0) return o;
  try {
    if (r) {
      let d = await r.read([gt(e)]);
      if (!d.ok) return (0, import_chunk_w578pjby.t)(`Failed to retrieve paste ${e}: ${(0, import_chunk_7n1spq36.un)(d.error)}`), null;
      let f = d.value.items[0];
      return f.found ? Buffer.from(f.value).toString("utf8") : null;
    }
    let a = Oe(e);
    return await (0, import_chunk_8j3h6yzg.Vn)().read(a);
  } catch (a) {
    if (!(0, import_chunk_jv7av99m.J)(a)) (0, import_chunk_w578pjby.t)(`Failed to retrieve paste ${e}: ${a}`);
    return null;
  }
}
async function $el(e, r) {
  if (r !== void 0) return Ln(r, e.getTime());
  let o = (0, import_chunk_8j3h6yzg.Vn)(), a = ye(), d;
  try {
    d = await o.list(a);
  } catch {
    return;
  }
  let f = e.getTime();
  for (let g of d) {
    if (!g.endsWith(".txt") && !g.includes(".txt.tmp.")) continue;
    let y = (0, import_path6.join)(a, g);
    try {
      if ((await o.stat(y)).mtimeMs < f) await o.delete(y), (0, import_chunk_w578pjby.t)(`Cleaned up old paste: ${y}`);
    } catch {
    }
  }
}
async function Ln(e, r) {
  let o = [];
  if ((await (0, import_chunk_hnt4bwpe.Nd)((d) => e.listEntries({ namespace: "paste" }, d !== void 0 ? { cursor: d } : void 0), (d) => {
    for (let f of d) if (f.kind === "key" && f.key.namespace === "paste" && f.mtimeMs !== void 0 && f.mtimeMs < r) o.push(f.key);
  })).status !== "error") {
    for (let d of o) if ((await e.delete(d)).ok) (0, import_chunk_w578pjby.t)(`Cleaned up old paste: ${d.id}`);
  }
  await Hn(ye(), r);
}
async function Hn(e, r) {
  let o = (0, import_chunk_8j3h6yzg.Vn)(), a;
  try {
    a = await o.list(e);
  } catch {
    return;
  }
  for (let d of a) {
    if (!d.includes(".txt.tmp.")) continue;
    let f = (0, import_path6.join)(e, d);
    try {
      if ((await o.stat(f)).mtimeMs < r) await o.delete(f), (0, import_chunk_w578pjby.t)(`Cleaned up old paste staging file: ${f}`);
    } catch {
    }
  }
}
var bt = { "`": "`", '"': '"', "<": ">", "{": "}", "[": "]", "(": ")", "'": "'" };
function xe(e, r) {
  if (!new RegExp(r, "i").test(e)) return [];
  if (e.startsWith("/")) return [];
  let a = [], d = null, f = 0, g = (P) => !!P && /[\p{L}\p{N}_]/u.test(P);
  for (let P = 0; P < e.length; P++) {
    let S = e[P];
    if (d) {
      if (d === "[" && S === "[") {
        f = P;
        continue;
      }
      if (S !== bt[d]) continue;
      if (d === "'" && g(e[P + 1])) continue;
      a.push({ start: f, end: P + 1 }), d = null;
    } else if (S === "<" && P + 1 < e.length && /[a-zA-Z/]/.test(e[P + 1]) || S === "'" && !g(e[P - 1]) || S !== "<" && S !== "'" && S in bt) d = S, f = P;
  }
  let y = [], h = new RegExp(`\\b${r}\\b`, "gi"), b = e.matchAll(h);
  for (let P of b) {
    if (P.index === void 0) continue;
    let S = P.index, R = S + P[0].length;
    if (a.some((T) => S >= T.start && S < T.end)) continue;
    let v = e[S - 1], A = e[R];
    if (v === "/" || v === "\\" || v === "-") continue;
    if (A === "/" || A === "\\" || A === "-" || A === "?") continue;
    if (A === "." && g(e[R + 1])) continue;
    y.push({ word: P[0], start: S, end: R });
  }
  return y;
}
function Fe(e) {
  return xe(e, "ultraplan");
}
function nvi(e) {
  return xe(e, "ultrareview");
}
function WCe(e) {
  return xe(e, "ultrathink");
}
function Mrn(e) {
  return xe(e, "ultracode");
}
function Fel(e) {
  return Mrn(e).length > 0;
}
function bWe(e) {
  return e.replace(/(ultra)(code|plan|review|think)/gi, "$1-$2");
}
function tdo(e) {
  let [r] = Fe(e);
  if (!r) return e;
  let o = e.slice(0, r.start), a = e.slice(r.end);
  if (!(o + a).trim()) return "";
  return o = o.replace(/\b(a)n(\s+)$/i, "$1$2"), o + r.word.slice(5) + a;
}
var je = 100;
var On = 10, Nn = 1e7, In = 1024, Dn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.E)(), type: (0, import_chunk_adx6804h.F)(["text", "image"]), content: (0, import_chunk_adx6804h.n)().optional(), contentHash: (0, import_chunk_adx6804h.n)().optional(), mediaType: (0, import_chunk_adx6804h.n)().optional(), filename: (0, import_chunk_adx6804h.n)().optional() }));
function f7(e) {
  return (e.match(/\r\n|\r|\n/g) || []).length;
}
function jCe(e, r, o = "Pasted text") {
  if (r === 0) return `[${o} #${e}]`;
  return `[${o} #${e} +${r} lines]`;
}
function bae(e) {
  return `[Image #${e}]`;
}
function Nu(e) {
  if (!e) return [];
  return [...e.matchAll(import_chunk_8704k7wd.Ouo)].map((o) => ({ id: parseInt(o[2] || "0"), match: o[0], index: o.index })).filter((o) => o.id > 0);
}
function thr(e) {
  return Number.isInteger(e) && e > 0 && e < 4294967296;
}
function sdo(e, r) {
  let o = Nu(e);
  if (o.length === 0) return e;
  let a = e;
  for (let f = o.length - 1; f >= 0; f--) {
    let g = o[f];
    a = a.slice(0, g.index) + g.match.replace(`#${g.id}`, "#_") + a.slice(g.index + g.match.length);
  }
  let d = o.map((f) => {
    let g = r?.[f.id];
    if (!g) return `literal:${f.id}`;
    if (g.unavailable) return "dead";
    return g.contentHash !== void 0 ? `hash:${g.contentHash}` : `inline:${g.content ?? ""}`;
  });
  return `${a}\0${d.join("")}`;
}
function OSe(e, r, o, a) {
  return Et(Rt(e, Nu(e), r, false, o), a, o, wDe(r));
}
var Fn = /^[\p{M}\u1161-\u1175\u11A8-\u11C2\u{16D67}\u{16D68}]+/u;
function N0n(e) {
  let r = e.normalize("NFC"), o = r.replace(Fn, "").trimStart();
  return (0, import_chunk_4smdap7r.M)([e, r, o]).filter((a) => a !== "");
}
function wDe(e, r = false) {
  let o = /* @__PURE__ */ new Set();
  for (let a of Object.values(e)) if (a.type === "text" && a.inline && a.content !== "" && (r || !a.slashNameOnly)) for (let d of N0n(a.content)) o.add(d);
  return [...o].sort((a, d) => d.length - a.length);
}
function bvi(e, r, o = false) {
  if (r === void 0) return [];
  let a = wDe(r, o);
  if (a.length === 0) return [];
  let d = [], f = (h, b) => {
    let P = h;
    for (let [S, R] of [...d].sort((v, A) => v[0] - A[0])) {
      if (R <= P || S >= b) continue;
      if (S > P) d.push([P, S]);
      P = Math.max(P, R);
    }
    if (P < b) d.push([P, b]);
  }, g = (h, b) => {
    let P = e.slice(h, b);
    for (let S of a) {
      let R = P.indexOf(S);
      while (R !== -1) f(h + R, h + R + S.length), R = P.indexOf(S, R + 1);
    }
  }, y = 0;
  for (let h of Nu(e)) {
    if (r[h.id] === void 0) continue;
    g(y, h.index), y = h.index + h.match.length;
  }
  return g(y, e.length), d.sort((h, b) => h[0] - b[0]);
}
function ido(e, r) {
  if (r === void 0) return e;
  let o = "", a = 0;
  for (let d of Nu(e)) {
    let f = r[d.id];
    if (f?.type === "text" && !f.inline && d.match.startsWith("[...Truncated text")) o += e.slice(a, d.index) + f.content, a = d.index + d.match.length;
  }
  return o + e.slice(a);
}
function dds(e, r) {
  let o = wDe(r ?? {}), a = Fe(zW(e));
  if (o.length === 0) return a;
  if (o.some((f) => /ultraplan/i.test(f) && !e.includes(f))) return [];
  let d = bvi(e, r);
  return a.filter((f) => !jn(f.start, f.end, d));
}
function nhr(e, r) {
  return dds(e, r).length > 0;
}
function jn(e, r, o) {
  return o.some(([a, d]) => e < d && r > a);
}
function wt(e) {
  return e.startsWith("[Pasted text") || e.startsWith(`[${import_chunk_8704k7wd.Hst}`);
}
function Vel(e, r) {
  return Nu(e).flatMap((o) => {
    let a = r[o.id];
    return a?.type === "text" && a.unavailable !== true && wt(o.match) ? [a.content] : [];
  });
}
function Rt(e, r, o, a, d) {
  let f = [], g = e.length;
  for (let y = r.length - 1; y >= 0; y--) {
    let h = r[y];
    f.unshift({ text: e.slice(h.index + h.match.length, g), typed: true }), g = h.index;
    let b = o[h.id];
    if (b?.unavailable === true) {
      if (!a || h.match.startsWith("[Image")) f.unshift({ text: h.match, typed: true });
      continue;
    }
    if (b?.type !== "text") {
      f.unshift({ text: h.match, typed: true });
      continue;
    }
    if (!wt(h.match) || !d) {
      f.unshift({ text: b.content, typed: true });
      continue;
    }
    f.unshift({ text: d(b.content), typed: false });
  }
  return f.unshift({ text: e.slice(0, g), typed: true }), f;
}
function Et(e, r, o, a = []) {
  if (!r && !o) return e.map((b) => b.text).join("");
  let d = r ?? ((b) => b), f = [], g = "", y = () => {
    if (g === "") return;
    if (o && a.length > 0) f.push(...Mn(g, a, o).map((b) => b.typed ? { text: d(b.text), typed: true } : b));
    else f.push({ text: d(g), typed: true });
    g = "";
  };
  for (let b of e) {
    if (b.typed) {
      g += b.text;
      continue;
    }
    y(), f.push(b);
  }
  y();
  let h = "";
  for (let b = 0; b < f.length; b++) {
    let P = f[b];
    h += P.text;
    let S = f[b + 1]?.text ?? "";
    if (!P.typed && S !== "" && !S.startsWith(`
`)) h += `
`;
  }
  return h;
}
function Mn(e, r, o) {
  let a = [], d = 0;
  for (let f of D0n(e, r)) {
    if (f.from > d) a.push({ text: e.slice(d, f.from), typed: true });
    a.push({ text: o(e.slice(f.from, f.to)), typed: false }), d = f.to;
  }
  if (d < e.length || a.length === 0) a.push({ text: e.slice(d), typed: true });
  return a;
}
function Un(e, r) {
  let { stripped: o, removed: a } = At(e, r);
  return { input: o, removed: a };
}
function At(e, r, o, a) {
  let d = Nu(e), f = [], g = e;
  for (let h = d.length - 1; h >= 0; h--) {
    let b = d[h];
    if (!b.match.startsWith("[Image") && r[b.id]?.unavailable === true) g = g.slice(0, b.index) + g.slice(b.index + b.match.length), f.unshift({ id: b.id, label: b.match.startsWith("[...Truncated text") ? "Truncated text" : "Pasted text" });
  }
  let y = Et(Rt(e, d, r, true, o), a, o, wDe(r));
  return { stripped: g, expanded: y, removed: f };
}
function ado(e, r, o, a) {
  return At(e, r, o, a);
}
function St(e, r) {
  if (!r) return [];
  let o = new Set(Nu(e).map((a) => a.id));
  return Object.entries(r).filter((a) => a[1].type === "text" && !a[1].unavailable && o.has(Number(a[0])));
}
function cds(e) {
  let r = kt(e), o = r.join(", ");
  return r.length === 1 ? `${o} is no longer available and was removed from the prompt` : `${o} are no longer available and were removed from the prompt`;
}
function Kel(e) {
  let r = kt(e);
  return `Not sent: ${r.join(", ")} ${r.length === 1 ? "is" : "are"} no longer available. Put that text back in place of its placeholder and send again.`;
}
function kt(e) {
  return (0, import_chunk_4smdap7r.M)(e.map((r) => `${r.label} #${r.id}`));
}
var z1t = 1e5;
function rhr(e, r) {
  let o = null;
  for (let d of Nu(e)) {
    let f = r[d.id];
    if (f?.type !== "text" || f.unavailable) continue;
    if (!o || d.id > o.id) o = d;
  }
  if (!o) return null;
  let a = r[o.id].content;
  if (a.length > z1t) return null;
  return { expanded: e.slice(0, o.index) + a + e.slice(o.index + o.match.length), id: o.id, cursorOffset: o.index + a.length };
}
var Bn = 200, Wn = 262144;
async function* $n(e, r) {
  let o, a = r;
  for (; ; ) {
    let d = await e.readRecords(import_chunk_hkvzj051.at.history(), { order: "backward", ...o === void 0 ? { limit: Bn } : { maxBytes: Wn, fromSeq: o } });
    if (!d.ok) {
      if (d.error.code === "NotFound") return;
      throw Error("history readRecords failed", { cause: d.error });
    }
    for (let g of d.value.items) {
      if (a -= g.data.byteLength, a < 0) return;
      let y = Buffer.from(g.data.buffer, g.data.byteOffset, g.data.byteLength).toString("utf8"), h = y.endsWith(`
`) ? y.slice(0, -1) : y;
      if (h) yield h;
    }
    let f = d.value.nextSeq;
    if (f === void 0) return;
    if (o !== void 0 && f >= o) throw Error("history readRecords cursor failed to advance", { cause: { fromSeq: o, nextSeq: f } });
    o = f;
  }
}
function Gn(e, r = 1 / 0) {
  return e ? $n(e, r) : (0, import_chunk_w578pjby.sPt)((0, import_path5.join)((0, import_chunk_2gtmjt3y.Ze)(), "history.jsonl"), void 0, { strict: false, maxBytes: r });
}
var Jn = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ display: (0, import_chunk_adx6804h.n)(), pastedContents: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).catch({}).transform((e) => Object.fromEntries(Object.entries(e).flatMap(([r, o]) => {
  let a = Dn().safeParse(o);
  if (a.success) return [[r, a.data]];
  return (0, import_chunk_w578pjby.t)(`Dropping a malformed paste record from a history line (${_t(a.error)})`), [];
}))), timestamp: (0, import_chunk_adx6804h.E)(), project: (0, import_chunk_adx6804h.n)(), sessionId: (0, import_chunk_adx6804h.n)().optional().catch(void 0) }));
function _t(e) {
  return e.issues.map((r) => `${r.path.join(".") || "value"}: ${r.message}`).join("; ");
}
function zn(e) {
  try {
    let r = (0, import_chunk_w578pjby.Cs)(e), o = Jn().safeParse(r);
    if (o.success) return { entry: o.data, droppedPasteRecords: Kn(r, o.data) };
    return (0, import_chunk_w578pjby.t)(`Skipping malformed history line (${_t(o.error)})`), { rejection: "shape_rejected" };
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`Failed to parse history line: ${r}`), { rejection: "parse_failed" };
  }
}
function Kn(e, r) {
  if (typeof e !== "object" || e === null || !("pastedContents" in e)) return false;
  let o = e.pastedContents;
  if (o === null) return false;
  if (typeof o !== "object" || Array.isArray(o)) return true;
  return Object.keys(o).length > Object.keys(r.pastedContents).length;
}
function Yn(e) {
  return Object.values(e).reduce((r, o) => r + (o.content?.length ?? 0), 0);
}
var Xn = 32768, qn = 4194304;
function wvi(e, r) {
  let o = {};
  for (let [a, d] of Object.entries(r)) o[Number(a)] = d.type === "text" ? { ...d, content: (0, import_chunk_7cfjrnwy.ee)(d.content, Xn) } : d;
  return OSe(e, o);
}
var uds = ["session", "project", "everywhere"];
function Pt(e) {
  let { prev: r, next: o, project: a, sessionId: d } = e;
  if (!r || r.display !== o.display) return false;
  if (r.project !== a || r.sessionId !== d) return false;
  return !(Object.keys(r.pastedContents).length > 0) && !o.hasPastes;
}
class vt {
  getSensitiveCommands = null;
  pendingEntries = [];
  isWriting = false;
  currentFlushPromise = null;
  exitFlushHandle = null;
  lastAddedEntry = null;
  lastStoredEntry = null;
  lastAssignedTimestamp = 0;
  storedEntryGeneration = 0;
  lastAddWasDeduped = false;
  skippedKeys = /* @__PURE__ */ new Set();
  pendingPasteWrites = /* @__PURE__ */ new Set();
  pendingPasteContents = /* @__PURE__ */ new Map();
  inFlightFlushEntries = null;
  reportedLostPasteHashes = /* @__PURE__ */ new Set();
  clearedDrafts = [];
  immediateFlush = (0, import_chunk_gjzwg6ck.gO)((e) => this.flushEntriesToDisk(e));
  async *readLogEntries(e) {
    let r = this.pendingEntries.slice(), o = new Set(r.map((y) => `${y.timestamp}\0${y.sessionId ?? ""}`));
    for (let y = r.length - 1; y >= 0; y--) yield r[y];
    let a = false, d = false, f = false, g = false;
    try {
      for await (let h of Gn(e)) {
        let b = zn(h);
        if (!b.entry) {
          if (b.rejection === "parse_failed") a = true;
          else d = true;
          continue;
        }
        if (b.droppedPasteRecords) f = true;
        let P = b.entry, S = `${P.timestamp}\0${P.sessionId ?? ""}`;
        if (this.skippedKeys.has(S) || o.has(S)) continue;
        g = true, yield P;
      }
      let y = a ? "history_load_parse_failed" : d ? "history_load_shape_rejected" : f ? "history_load_paste_record_dropped" : void 0;
      if (y) (0, import_chunk_cqa9hrgx.l)("history_load", y, { parse_failed: a, shape_rejected: d, paste_record_dropped: f });
      else (0, import_chunk_cqa9hrgx.u)("history_load");
    } catch (y) {
      if ((0, import_chunk_jv7av99m.w)(y) === "ENOENT") {
        (0, import_chunk_cqa9hrgx.u)("history_load");
        return;
      }
      if (g || r.length > 0) (0, import_chunk_cqa9hrgx.l)("history_load", "history_load_read_interrupted");
      else (0, import_chunk_cqa9hrgx.m)("history_load", "history_load_read_failed");
      throw y;
    }
  }
  async *readEntries(e) {
    for await (let r of this.readLogEntries(e)) yield await this.toHistoryEntry(r, e);
  }
  async *readTimestamped(e = "project", r) {
    let o = (0, import_chunk_f9x2f6cx.Oo)(), a = (0, import_chunk_f9x2f6cx.W)(), d = /* @__PURE__ */ new Set(), f = 0;
    for await (let g of this.readLogEntries(r)) {
      if (e === "project" && g.project !== o) continue;
      if (e === "session" && g.sessionId !== a) continue;
      let y = sdo(g.display, g.pastedContents);
      if (d.has(y)) continue;
      d.add(y);
      let h = {};
      if (f < qn) for (let [P, S] of Object.entries(g.pastedContents)) {
        let R = S.type === "text" ? await this.resolveStoredPastedContent(S, r) : null;
        if (R) h[Number(P)] = R;
      }
      let b = wvi(g.display, h);
      if (b !== g.display) f += b.length;
      yield { display: g.display, expandedDisplay: b, timestamp: g.timestamp, textLength: g.display.length + (b === g.display ? Yn(g.pastedContents) : b.length), resolve: () => this.toHistoryEntry(g, r) };
    }
  }
  async countForProject(e, r) {
    let o = (0, import_chunk_f9x2f6cx.Oo)(), a = 0, d = 0;
    try {
      for await (let g of this.readLogEntries(r)) {
        if (g.project !== o) continue;
        if (a++, !e || e(g.display)) d++;
        if (a >= je) break;
      }
    } catch {
      return null;
    }
    let f = (0, import_chunk_f9x2f6cx.W)();
    for (let { entry: g, project: y, sessionId: h } of this.clearedDrafts) if (y === o && h === f && (!e || e(g.display))) d++;
    return d;
  }
  async *readForProject(e, { withClearedDrafts: r = false } = {}) {
    let o = (0, import_chunk_f9x2f6cx.Oo)(), a = (0, import_chunk_f9x2f6cx.W)(), d = [], f = 0, g = r ? this.clearedDrafts.filter((h) => h.project === o && h.sessionId === a) : [], y = g.length - 1;
    for await (let h of this.readLogEntries(e)) {
      if (h.project !== o) continue;
      if (h.sessionId === a) {
        for (; y >= 0 && g[y].timestamp >= h.timestamp; y--) yield g[y].entry;
        yield await this.toHistoryEntry(h, e), f++;
      } else d.push(h);
      if (f + d.length >= je) break;
    }
    for (; y >= 0; y--) yield g[y].entry;
    for (let h of d) {
      if (f >= je) return;
      yield await this.toHistoryEntry(h, e), f++;
    }
  }
  async resolveStoredPastedContent(e, r) {
    if (e.content) return { id: e.id, type: e.type, content: e.content, mediaType: e.mediaType, filename: e.filename };
    if (e.contentHash) {
      let o = await this.resolvePastedTextByHash(e.contentHash, r);
      if (o) return { id: e.id, type: e.type, content: o, mediaType: e.mediaType, filename: e.filename };
    }
    return null;
  }
  reportLostPasteContent(e) {
    let r = e ?? "missing-hash";
    if (this.reportedLostPasteHashes.has(r)) return;
    this.reportedLostPasteHashes.add(r), (0, import_chunk_cqa9hrgx.l)("paste_store", "paste_store_content_lost");
  }
  async resolvePastedTextByHash(e, r) {
    return this.pendingPasteContents.get(e) ?? await yt(e, r);
  }
  registerPastedTextForRecall(e, r) {
    let o = mt(e);
    this.pendingPasteContents.set(o, e);
    let a = ht(o, e, r);
    return this.pendingPasteWrites.add(a), a.then(() => this.pendingPasteContents.delete(o)).finally(() => this.pendingPasteWrites.delete(a)), o;
  }
  async toHistoryEntry(e, r) {
    let o = {};
    for (let [a, d] of Object.entries(e.pastedContents)) {
      let f = await this.resolveStoredPastedContent(d, r);
      if (!f && d.type === "text") this.reportLostPasteContent(d.contentHash);
      o[Number(a)] = f ?? { id: d.id, type: d.type, content: "", unavailable: true };
    }
    return { display: e.display, pastedContents: o };
  }
  async flushEntriesToDisk(e) {
    if (this.pendingEntries.length === 0) return true;
    let r = this.pendingEntries.slice();
    this.inFlightFlushEntries = new Set(r);
    while (this.pendingPasteWrites.size > 0) await Promise.all(this.pendingPasteWrites);
    if (e) try {
      let a = await e.append(import_chunk_hkvzj051.at.history(), r.map((f) => ({ data: (0, import_chunk_w578pjby._)(f) + `
` })));
      if (!a.ok) {
        (0, import_chunk_w578pjby.t)(`Failed to write prompt history: ${a.error.code}`);
        let f = "telemetryCode" in a.error && (a.error.telemetryCode === "LockContended" || a.error.telemetryCode === "LockAcquireFailed");
        return (0, import_chunk_cqa9hrgx.l)("history_save", f ? "history_save_lock_failed" : "history_save_write_failed"), false;
      }
      let d = new Set(r);
      return this.pendingEntries = this.pendingEntries.filter((f) => !d.has(f)), (0, import_chunk_cqa9hrgx.u)("history_save"), true;
    } catch (a) {
      return (0, import_chunk_w578pjby.t)(`Failed to write prompt history: ${a}`), (0, import_chunk_cqa9hrgx.l)("history_save", "history_save_write_failed"), false;
    } finally {
      this.inFlightFlushEntries = null;
    }
    let o;
    try {
      let a = (0, import_path5.join)((0, import_chunk_2gtmjt3y.Ze)(), "history.jsonl");
      await (0, import_chunk_8j3h6yzg.Vn)().append(a, "", 384), o = await (0, import_chunk_2yx6c1y2.Rc)(a, { ...U1t, onCompromised: (g) => (0, import_chunk_w578pjby.t)(`History lock compromised: ${g}`, { level: "error" }) });
      let d = r.map((g) => (0, import_chunk_w578pjby._)(g) + `
`);
      await (0, import_chunk_8j3h6yzg.Vn)().append(a, d.join(""), 384);
      let f = new Set(r);
      return this.pendingEntries = this.pendingEntries.filter((g) => !f.has(g)), (0, import_chunk_cqa9hrgx.u)("history_save"), true;
    } catch (a) {
      if ((0, import_chunk_w578pjby.t)(`Failed to write prompt history: ${a}`), o) (0, import_chunk_cqa9hrgx.l)("history_save", "history_save_write_failed");
      else (0, import_chunk_cqa9hrgx.l)("history_save", "history_save_lock_failed");
      return false;
    } finally {
      if (this.inFlightFlushEntries = null, o) await o().catch(import_chunk_k449cc64.i);
    }
  }
  async flushWithRetries(e, r) {
    if (this.isWriting || this.pendingEntries.length === 0) return;
    if (e > 5) return;
    this.isWriting = true;
    let o = false;
    try {
      o = await this.immediateFlush(r);
    } finally {
      if (this.isWriting = false, this.pendingEntries.length > 0) await (0, import_chunk_5appeerh.K)(500), this.currentFlushPromise = this.flushWithRetries(o ? 0 : e + 1, r);
    }
  }
  async addEntry(e, r, o, a = true) {
    let d = typeof e === "string" ? { display: e, pastedContents: {} } : e, { input: f, removed: g } = Un(d.display, d.pastedContents ?? {}), y = f.trim();
    if (g.length > 0 && y === "") return;
    if (g.length > 0 && d.display.trimStart().startsWith("!")) {
      if (a && o !== void 0 && o !== "bash") this.lastAddWasDeduped = true;
      return;
    }
    if (g.length > 0 && d.display.trimStart().startsWith("/")) return;
    if (g.length > 0) {
      let T = d.display.trimStart();
      if (y.startsWith("/") && !T.startsWith("/") || y.startsWith("!") && !T.startsWith("!") || y.startsWith("@") && !T.startsWith("@")) {
        if (a) this.lastAddWasDeduped = true;
        return;
      }
    }
    if (g.length > 0) {
      let T = /* @__PURE__ */ new Map();
      for (let L of Nu(d.display)) T.set(L.id, (T.get(L.id) ?? 0) + 1);
      let C = /* @__PURE__ */ new Map();
      for (let L of Nu(f)) C.set(L.id, (C.get(L.id) ?? 0) + 1);
      let O = false;
      for (let [L, H] of C) {
        if (H <= (T.get(L) ?? 0)) continue;
        let k = d.pastedContents?.[L];
        if (k !== void 0 && k.type !== "image" && !k.unavailable) {
          O = true;
          break;
        }
      }
      if (O) {
        if (a) this.lastAddWasDeduped = true;
        return;
      }
    }
    let h = g.length > 0 ? { ...d, display: f } : d, b = (0, import_chunk_f9x2f6cx.Oo)(), P = (0, import_chunk_f9x2f6cx.W)(), S = St(h.display, h.pastedContents);
    if (Pt({ prev: this.lastStoredEntry, next: { display: h.display, hasPastes: S.length > 0 }, project: b, sessionId: P })) {
      if (a) this.lastAddWasDeduped = true;
      return;
    }
    let R = {};
    for (let [T, C] of S) if (C.content.length <= In) R[Number(T)] = { id: C.id, type: C.type, content: C.content, mediaType: C.mediaType, filename: C.filename };
    else R[Number(T)] = { id: C.id, type: C.type, contentHash: this.registerPastedTextForRecall(C.content, r), mediaType: C.mediaType, filename: C.filename };
    let v = Math.max(Date.now(), this.lastAssignedTimestamp + 1);
    this.lastAssignedTimestamp = v;
    let A = { ...h, pastedContents: R, timestamp: v, project: b, sessionId: P };
    if (this.pendingEntries.push(A), this.lastStoredEntry = A, this.storedEntryGeneration++, this.dropClearedDraftCopies(h, b, P), a) this.lastAddedEntry = A, this.lastAddWasDeduped = false;
    this.currentFlushPromise = this.flushWithRetries(0, r), this.currentFlushPromise;
  }
  async flushOnExit(e) {
    let r = null;
    while (this.currentFlushPromise && this.currentFlushPromise !== r) r = this.currentFlushPromise, await r;
    if (this.pendingEntries.length > 0) {
      if (!await this.immediateFlush(e)) (0, import_chunk_cqa9hrgx.m)("history_save", "history_save_exit_flush_failed");
    }
    while (this.pendingPasteWrites.size > 0) await Promise.all(this.pendingPasteWrites);
  }
  add(e, r, o) {
    if ((0, import_chunk_69qhefwa.Ne)(process.env.CLAUDE_CODE_SKIP_PROMPT_HISTORY) || (0, import_chunk_wtm85h0y.X6t)()) return;
    if (typeof e !== "string" && e.isNotSaved || this.isSensitive(typeof e === "string" ? { display: e, pastedContents: {} } : e)) {
      if (o?.armUndo !== false) this.lastAddWasDeduped = true;
      return;
    }
    this.registerExitFlush(r), this.addEntry(e, r, o?.submitMode, o?.armUndo).catch(import_chunk_k449cc64.i);
  }
  registerExitFlush(e) {
    if (this.exitFlushHandle) return;
    this.exitFlushHandle = (0, import_chunk_w578pjby.Ct)(() => this.flushOnExit(e));
  }
  registerSensitiveCommands(e) {
    this.getSensitiveCommands = e;
  }
  keepClearedDraft(e, r) {
    let o = (0, import_chunk_f9x2f6cx.Oo)(), a = (0, import_chunk_f9x2f6cx.W)();
    if (this.isSensitive(e) || false || Pt({ prev: this.lastStoredEntry, next: { display: e.display, hasPastes: Object.keys(e.pastedContents).length > 0 }, project: o, sessionId: a })) return;
    this.dropClearedDraftCopies(e, o, a), this.clearedDrafts.push({ entry: e, timestamp: r, project: o, sessionId: a, length: Object.values(e.pastedContents).reduce((f, g) => f + g.content.length, e.display.length) });
    let d = this.clearedDrafts.reduce((f, g) => f + g.length, 0);
    while (this.clearedDrafts.length > On || d > Nn) d -= this.clearedDrafts.shift().length;
    this.storedEntryGeneration++;
  }
  dropClearedDraftCopies({ display: e, pastedContents: r }, o, a) {
    if (this.clearedDrafts.length === 0) return;
    let d = sdo(e, r);
    this.clearedDrafts = this.clearedDrafts.filter((f) => f.project !== o || f.sessionId !== a || sdo(f.entry.display, f.entry.pastedContents) !== d);
  }
  isSensitive({ display: e, pastedContents: r }) {
    return (0, import_chunk_8704k7wd.nNn)(e, (this.getSensitiveCommands ?? Ht().get)(), { pastedTexts: St(e, r).map(([, o]) => o.content) });
  }
  getGeneration() {
    return this.storedEntryGeneration;
  }
  clearPending() {
    this.pendingEntries = [], this.clearedDrafts = [], this.lastAddedEntry = null, this.lastStoredEntry = null, this.lastAddWasDeduped = false, this.getSensitiveCommands = () => [], this.skippedKeys.clear(), this.pendingPasteContents.clear(), this.exitFlushHandle?.(), this.exitFlushHandle = null;
  }
  disarmUndo() {
    this.lastAddedEntry = null, this.lastAddWasDeduped = false;
  }
  removeLast() {
    if (this.lastAddWasDeduped) {
      this.lastAddWasDeduped = false;
      return;
    }
    if (!this.lastAddedEntry) return;
    let e = this.lastAddedEntry;
    if (this.lastAddedEntry = null, this.lastStoredEntry === e) this.lastStoredEntry = null;
    this.storedEntryGeneration++;
    let r = this.pendingEntries.lastIndexOf(e);
    if (r !== -1) {
      if (this.pendingEntries.splice(r, 1), this.inFlightFlushEntries?.has(e)) this.skippedKeys.add(`${e.timestamp}\0${e.sessionId ?? ""}`);
    } else this.skippedKeys.add(`${e.timestamp}\0${e.sessionId ?? ""}`);
  }
}
var Qn = new import_chunk_2904xtvq.j(() => new vt());
function q() {
  return Qn.of((0, import_chunk_f9x2f6cx.N)().host);
}
class Lt {
  get = () => [];
}
var Zn = new import_chunk_2904xtvq.j(() => new Lt());
function Ht() {
  return Zn.of((0, import_chunk_f9x2f6cx.N)().host);
}
function kvi(e) {
  return q().readEntries(e);
}
function fds(e) {
  if (e instanceof import_chunk_w578pjby.Xft) return true;
  let r = e instanceof Error ? e.cause : void 0;
  if ((0, import_chunk_7n1spq36.wQe)(r) && r.code === "Unavailable" && (0, import_chunk_jv7av99m.wte)(r.telemetryCode) === void 0) return true;
  let o = (0, import_chunk_jv7av99m.w)(e) ?? (0, import_chunk_jv7av99m.kO)(e);
  return (0, import_chunk_jv7av99m.p5n)(o) || (0, import_chunk_jv7av99m.NFs)(o);
}
function qel(e = "project", r) {
  return q().readTimestamped(e, r);
}
function Yel(e, r) {
  return q().countForProject(e, r);
}
function pds(e, r) {
  return q().readForProject(e, r);
}
function wWe(e, r, o) {
  q().add(e, r, o);
}
function kWe(e, r, o) {
  let a = false;
  for (let d of e) try {
    let f = lt(d, o.placed, { screened: o.screened?.get(d), unanswered: o.unanswered ?? "skipped" });
    if (!f) continue;
    a = true, wWe(f, r, { submitMode: d.mode, armUndo: o.armUndo });
  } catch (f) {
    (0, import_chunk_k449cc64.i)(f);
  }
  if (!a && o.armUndo !== false && o.screened === void 0) q().disarmUndo();
}
function Nrn(e, r, o) {
  wWe(e, r, { submitMode: o, armUndo: false });
}
function Xel(e) {
  q().registerExitFlush(e);
}
function Jel(e) {
  Ht().get = e;
}
function Qel(e, r) {
  q().keepClearedDraft(e, r);
}
function Frn() {
  return q().getGeneration();
}
function Zel() {
  q().removeLast();
}
var sst = [];
function avi(e) {
  return sst.map((r) => (0, import_path7.join)(e, r));
}
function ndo(e, r) {
  if (r.managedInstructionsOnly) return e.filter((o) => o.type === "Managed");
  return e;
}
var be = async (e, r) => !V(e) && await (0, import_chunk_5appeerh.Tn)(de(e), r, () => Error("cut short")).then(() => false, import_chunk_jv7av99m.kn);
async function Nt(e, r) {
  let o = e.slice((0, import_path8.parse)(e).root.length).split(import_path8.sep).filter((f) => f !== ""), a = (0, import_path8.parse)(e).root, d = [a];
  for (let [f, g] of o.entries()) {
    if (!(d !== void 0 && !d.some(V))) return;
    if (await be((0, import_path8.join)(a, g), r)) {
      let h = (0, import_path8.join)(...o.slice(f));
      return d?.map((b) => (0, import_path8.join)(b, h));
    }
    a = (0, import_path8.join)(a, g), d = await M0n(a, r);
  }
  return;
}
var Pe = async (e, r) => await M0n(e, r) ?? Nt(e, r);
async function It(e, r, o) {
  let d = !e.split(/[\\/]/).includes("..") && !r.some(V) && await be((0, import_chunk_n2dbhmj2.xt)(e), o) ? await Pe((0, import_chunk_n2dbhmj2.xt)(e), o) : void 0;
  return d?.length === r.length && d.every((f, g) => f === r[g]);
}
var Te = (e, r, o) => r.some((a) => o.some((d) => (0, import_chunk_p1ewvgeh.Sc)(e, (0, import_path9.join)(a, ...d), { caseFold: false, uncShapeParity: true })));
var we = (e, r, o) => ({ ...e, isHeldOutside: (a, d) => e.isHeldOutside(a, d) && !Te(a, (0, import_chunk_p1ewvgeh.AEr)(r), o) });
var W1t = 3e4;
var Dt = (e) => e.folders.filter((r) => (0, import_path10.isAbsolute)(r)).concat((0, import_chunk_p1ewvgeh.vjt)(e.context));
function Ft(e, r) {
  let o = e.get(r);
  if (o !== void 0) return o;
  let d = (0, import_chunk_p1ewvgeh.AEr)(r);
  return e.set(r, d), d;
}
var jt = [[]];
function Mt(e, r) {
  if (e === void 0) return "unsettled";
  let a = Dt(r), d = /* @__PURE__ */ new Map();
  return e.some((g) => !a.some((y) => Te(g, Ft(d, y), jt))) ? "outside" : void 0;
}
var Re = (e, r) => async function(a, d) {
  let f = AbortSignal.timeout(r), g = await M0n(a, f), y = e(g), h = g !== void 0 && y === void 0 && await (0, import_chunk_5appeerh.me)((0, import_chunk_w578pjby.le)().stat(a).catch(() => null), r), b = g !== void 0 && h && h.isFile() && h.size <= d && await dvi(a, g, f)(async (S, R) => R.size > d ? void 0 : S.handle.readFile()), P = h === void 0 || b === void 0 && f.aborted;
  return b ? { text: b.toString("utf8"), why: void 0 } : { text: void 0, why: P ? "unsettled" : y };
};
var Ut = (e) => (0, import_chunk_p1ewvgeh.rBn)(e) && "denied" || (0, import_chunk_ht27b0vz.Ole)(e, import_chunk_k883m4fq.De, "deny").length > 0 && "unjudged" || void 0;
var Bt = (e) => (0, import_chunk_5appeerh.me)((0, import_chunk_w578pjby.le)().lstat(e).then((r) => !r.isDirectory(), () => false), B1t);
var te = (e, r) => async function(a, d) {
  let f = await e(a, d), g = f.why !== void 0 && await Bt(a) !== false;
  return r(a, g ? f.why : void 0), f.text;
};
function kKl(e, r) {
  let o = Ut(e.context), a = o !== void 0;
  if (!a && e.context.restricted !== true && !(0, import_chunk_pbteexar.jS)(e.context)) return;
  let f = te(a ? async () => ({ text: void 0, why: o }) : Re((g) => Mt(g, e), W1t), r);
  return { within: f, above: () => f };
}
function Wt(e, r) {
  let o = e !== void 0 && rdo(e, r.context), a = e !== void 0 && !o && e.some((d) => r.isHeldOutside(d, r.context));
  return e === void 0 && "unsettled" || o && "denied" || a && "outside" || void 0;
}
var re = (e, r) => Re((o) => Wt(o, e), r);
var fvi = (e, r = B1t) => async (o, a) => (await re(e, r)(o, a)).text;
var Me = (e, r) => r === void 0 ? fvi(e, W1t) : te(re(e, W1t), r);
var ads = (e, r) => rdo(e, r.context) || e.some((o) => r.isHeldOutside(o, r.context));
async function Zmr(e, r, o) {
  let a = await M0n(e, o);
  return a === void 0 || ads(a, r) ? void 0 : a;
}
var $t = [...sst.map((e) => [e]), ["CLAUDE.md"], ["CLAUDE.local.md"], ["AGENTS.md"], [".claude", "CLAUDE.md"], [".claude", "AGENTS.md"], [".claude", "rules"]];
var EKl = (e, r) => ({ within: te(re(e, W1t), r), above: (o) => te(re(we(e, o, $t), W1t), r) });
var Gt = [[".claude", "rules"]];
var vKl = (e, r) => ({ within: Me(e, r), above: (o) => Me(we(e, o, Gt), r) });
var zfe = (e) => (0, import_chunk_p1ewvgeh.hYe)(e) || e.restricted === true || (0, import_chunk_pbteexar.jS)(e);
async function Jt(e, r, o) {
  let a = r.spellings.map((h) => (0, import_path11.join)(h, e.name)), [d] = a;
  if (d === void 0 || r.isDenied(d, r.context)) return true;
  let y = !e.isFile() && !e.isDirectory() && zfe(r.context) ? await Zmr(d, r, o) : a;
  return y === void 0 || rdo(y, r.context) || !e.isFile() && uvi(y, r.context);
}
var zt = 1e4;
var Kt = 1e3;
async function TKl(e, r, o) {
  let a = zfe(r.context), d = [], f = Math.min(e.length, zt), g = 0;
  while (g < f && d.length < Kt) {
    if (a && g > 0 && g % We === 0) await (0, import_promises4.setImmediate)();
    let b = e[g], P = b === void 0 || await Jt(b, r, o).catch(() => true);
    if (a && o.aborted) break;
    if (g++, b !== void 0 && !P) d.push(b.name);
  }
  return g < e.length ? [...d, `\u2026 and ${e.length - g} more entries`] : d;
}
async function Yt(e, r) {
  let o = await dvi((0, import_chunk_n2dbhmj2.xt)(e), r, AbortSignal.timeout(B1t))((f) => f.handle.readFile()), d = o === void 0 && await It(e, r, AbortSignal.timeout(B1t)) ? "absent" : "refused";
  if (o === void 0) (0, import_chunk_w578pjby.t)(`Pasted path is not read where it lands: ${d}`, { level: "warn" });
  return o ?? d;
}
var Ee = (e) => e.split(/[\\/]/).includes("..") ? (0, import_chunk_n2dbhmj2.xt)(e) : e;
async function Xt(e, r, o) {
  let a = (0, import_chunk_n2dbhmj2.xt)(e), d = r();
  if (d.length === 0 || d.some((v) => o(e, v) !== void 0)) return "refused";
  if (V(a) && !d.some(zfe)) return "unexamined";
  let y = AbortSignal.timeout(B1t), h = await Promise.all((0, import_chunk_4smdap7r.M)([a, (0, import_path12.resolve)(Ee(e))]).map((v) => Pe(v, y))), [b] = h, P = r(), S = !h.includes(void 0) && P.length > 0 && !P.some((v) => [e, ...h.flatMap((A) => A ?? [])].some((A) => o(A, v) !== void 0 || (0, import_chunk_p1ewvgeh.y2e)(A, v.trustedNetworkDirectories))), R = P.some(zfe) ? b : "unexamined";
  return S && R !== void 0 ? R : "refused";
}
async function CKl(e, r, o) {
  let a = await Xt(e, r, o).catch(() => "refused");
  if (a === "refused") return (0, import_chunk_w578pjby.t)("Pasted path is not read: the read is refused", { level: "warn" }), "refused";
  return a === "unexamined" ? (0, import_chunk_w578pjby.le)().readFileBytes(Ee(e)) : Yt(e, a).catch(() => "refused");
}
var H0n = (e) => {
  let r = /* @__PURE__ */ new Map();
  for (let { ruleBehavior: a, ruleValue: d, source: f } of (0, import_chunk_gbskgz33.eI)({ strictPersistedTrust: true })) {
    if (a !== "deny") continue;
    let g = (0, import_chunk_qebpc5de.yn)(d), y = r.get(f) ?? { holds: new Set(e.alwaysDenyRules[f]), gained: [] };
    if (r.set(f, y), !y.holds.has(g)) y.holds.add(g), y.gained.push(g);
  }
  let o = Array.from(r).flatMap(([a, { gained: d }]) => {
    if (d.length === 0) return [];
    let f = e.alwaysDenyRules[a] ?? [];
    if (f.length === 0) return [[a, d]];
    return [[a, [...d.filter((g) => import_chunk_8hfdvrr1.hT.test(g)), ...f, ...d.filter((g) => !import_chunk_8hfdvrr1.hT.test(g))]]];
  });
  return { ...e, ...(0, import_chunk_trq47kfh.b2t)() && { blockReadsOutsideWorkingDirectories: true }, ...(0, import_chunk_trq47kfh.m9)() && { blockFileToolReadsOutsideWorkingDirectories: true }, ...o.length > 0 && { alwaysDenyRules: { ...e.alwaysDenyRules, ...Object.fromEntries(o) } } };
};
var AKl = (e) => H0n({ ...e, alwaysDenyRules: {} });
function V1t() {
  return (0, import_os.platform)() === "darwin" && import_chunk_c203g5kd.s.terminal === "Apple_Terminal" || import_chunk_c203g5kd.s.terminal === "vscode" || import_chunk_c203g5kd.s.terminal === "cursor" || import_chunk_c203g5kd.s.terminal === "windsurf" || import_chunk_c203g5kd.s.terminal === "alacritty" || import_chunk_c203g5kd.s.terminal === "zed";
}
var etl = { shiftEnter: "Shift+Enter for newlines", scrolling: "Faster scrolling", gpuOff: "GPU acceleration off to prevent garbled text" };
function $rn() {
  return import_chunk_c203g5kd.s.terminal === "vscode" || import_chunk_c203g5kd.s.terminal === "cursor" || import_chunk_c203g5kd.s.terminal === "windsurf" ? ["shiftEnter", "scrolling", "gpuOff"] : ["shiftEnter"];
}
function U5e() {
  return ((0, import_chunk_cg8dqz0a.JBl)() ?? 0) < 27;
}
function Evi() {
  return import_chunk_c203g5kd.s.terminal === "Apple_Terminal" && !U5e();
}
