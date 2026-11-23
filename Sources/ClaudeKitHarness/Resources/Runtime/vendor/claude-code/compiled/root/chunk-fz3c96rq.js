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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
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
var chunk_fz3c96rq_exports = {};
__export(chunk_fz3c96rq_exports, {
  OGr: () => OGr,
  g2o: () => g2o,
  h2o: () => h2o,
  nht: () => nht
});
module.exports = __toCommonJS(chunk_fz3c96rq_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_psvbzxg2 = require("/$bunfs/root/chunk-psvbzxg2.js");
var import_chunk_pqb914sj = require("/$bunfs/root/chunk-pqb914sj.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_jg286npj = require("/$bunfs/root/chunk-jg286npj.js");
var import_chunk_nynf6rf6 = require("/$bunfs/root/chunk-nynf6rf6.js");
var import_chunk_ayyyz8kh = require("/$bunfs/root/chunk-ayyyz8kh.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_buffer = require("buffer");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
var import_fs2 = require("fs");
var import_promises2 = require("fs/promises");
var import_path4 = require("path");
var import_path5 = require("path");
var import_path6 = require("path");
var je = 512, Be = 4096;
function fe(e) {
  return Array.isArray(e) && e.length > 0 && e.length <= je && e.every(Ke) ? e : void 0;
}
function Ke(e) {
  return typeof e === "string" && e.length <= Be && !e.includes("\0") && (0, import_chunk_n2dbhmj2.Fee)(e) && (0, import_path2.normalize)(e) === e;
}
function ce(e, n) {
  return e.some((i) => {
    let o = i.endsWith(import_path2.sep) && (0, import_path2.parse)(i).root !== i ? i.slice(0, -import_path2.sep.length) : i;
    return n === o || n.startsWith(o + import_path2.sep);
  });
}
var G = 32, ze = 4096;
async function ge(e, { directories: n, unprobedDirectories: i = [], gate: o, heldFiles: r, filesEndingIn: m }) {
  try {
    if (e === "" || e !== e.trim() || e.length > ze || e.includes("\0") || /^~(?:\/|$)/.test(e) || (0, import_path5.parse)(e).root !== "" && !(0, import_chunk_n2dbhmj2.Fee)(e)) return { path: null, why: "unfit_text" };
    let c = n.filter((g) => (0, import_chunk_n2dbhmj2.Fee)(g)), s = i.filter((g) => (0, import_chunk_n2dbhmj2.Fee)(g)), p = new Set(((0, import_path5.isAbsolute)(e) ? [e] : c).map((g) => (0, import_chunk_n2dbhmj2.xw)(e, g))), d = await ne([...p], e, o);
    if (d === null) return { path: null, why: "too_many" };
    let h = new Set(r()), F = new Set(d.flat());
    if ([...p, ...s.map((g) => (0, import_chunk_n2dbhmj2.xw)(e, g))].some((g) => h.has(g) && !F.has(g))) return { path: null, why: "held_file_unreadable" };
    let R = d.filter((g) => g.some((S) => h.has(S)));
    if (d.length > 0) return ie(R.length > 0 ? R : d, "directories");
    let _ = (0, import_path5.normalize)(e);
    if (c.length === 0 || (0, import_path5.isAbsolute)(e) || _.length !== e.length || _.split(import_path5.sep).some((g) => ["", ".", ".."].includes(g))) return { path: null, why: "no_file" };
    let b = oe(import_path5.sep + _, h, c), y = new Set(b);
    if (oe(import_path5.sep + _, h, s).some((g) => !y.has(g))) return { path: null, why: "held_file_unreadable" };
    if (b.length === 0) {
      if (m === void 0) return { path: null, why: "needs_file_search" };
      if ([...h].some((S) => S.endsWith(import_path5.sep + _))) return { path: null, why: "held_file_unreadable" };
      let g = await m(_);
      if (g === null) return { path: null, why: "search_incomplete" };
      return g.length > G ? { path: null, why: "too_many" } : ie(await ne(oe(import_path5.sep + _, g, c), e, o), "file_search");
    }
    let k = await ne(b, e, o);
    return k !== null && k.flat().length < b.length ? { path: null, why: "held_file_unreadable" } : ie(k, "file_state");
  } catch (c) {
    if (c instanceof import_chunk_n2dbhmj2.oce) return { path: null, why: "unfit_text" };
    try {
      let s = (0, import_chunk_jv7av99m.w)(c), p = c instanceof Error ? c.name : typeof c;
      (0, import_chunk_w578pjby.t)(`resolveAsWrittenPath failed: ${s === void 0 ? p : `${p}/${s}`}`, { level: "error" });
    } catch {
    }
    return { path: null, why: "fault" };
  }
}
async function ne(e, n, i) {
  if (e.length > G) return null;
  let o = /* @__PURE__ */ new Map();
  for (let r of e) {
    let m = await i(r, n);
    if (m !== null) o.set(m, [...o.get(m) ?? [], r]);
  }
  return [...o.values()];
}
function ie(e, n) {
  if (e === null) return { path: null, why: "too_many" };
  let i = e[0]?.[0];
  return i === void 0 ? { path: null, why: "no_file" } : e.length > 1 ? { path: null, why: "tie" } : { path: i, step: n };
}
function oe(e, n, i) {
  let o = /* @__PURE__ */ new Set();
  for (let r of n) if (r.endsWith(e) && (0, import_chunk_n2dbhmj2.Fee)(r) && (0, import_path5.normalize)(r) === r && i.some((m) => (0, import_chunk_g9ztbtfd.ti)(m, r, false))) o.add(r);
  return [...o];
}
var Ze = 2e4, qe = 64, et = 1024, tt = 4096, Fe = 16, nt = /* @__PURE__ */ new Set([".git", "node_modules"]), it = import_chunk_jxja0v0z.mO | import_fs2.constants.O_NOFOLLOW | import_chunk_jxja0v0z.cr;
class Q extends Error {
  constructor() {
    super("searchFilesEndingIn: its time ran out before the search ended");
    this.name = "SearchCutShort";
  }
}
function O(e, n) {
  if (e.isOver()) throw new Q();
  return e.counted(n());
}
async function re(e, n) {
  if (e.work += n, e.work >= tt) {
    if (e.work = 0, await (0, import_chunk_ayyyz8kh.Kd)(), e.isOver()) throw new Q();
  }
}
function se(e, n, i) {
  return e.length > et || (0, import_chunk_2tqq6ycx.r0)(e, n.trustedNetworkDirectories) !== void 0 || !(0, import_chunk_pqb914sj.cpe)(e, n, "read", (0, import_chunk_w578pjby.Yft)(e)).allowed || (i ? (0, import_chunk_psvbzxg2.vEn)(e, n) : (0, import_chunk_psvbzxg2.kMt)(e, n, false));
}
async function Re(e, n, i, o) {
  if (e.directoriesRead.size >= e.maxDirectories) return e.isWhole = false, false;
  e.directoriesRead.add(i);
  let r = `/proc/self/fd/${n.fd}`, m = await O(e, () => (0, import_promises2.readdir)(r, { withFileTypes: true })).catch((s) => {
    if ((0, import_chunk_jv7av99m.fn)(s)) return [];
    throw s;
  }), c = [];
  for (let s of m) {
    await re(e, 1);
    let { name: p } = s;
    if (["", ".", ".."].includes(p) || /[/\0]/.test(p)) continue;
    if (s.isDirectory()) {
      c.push(p);
      continue;
    }
    let d = s.isFile();
    if (s.isFIFO() || s.isSocket() || s.isBlockDevice() || s.isCharacterDevice() || (d || s.isSymbolicLink()) && !e.names.has(p)) continue;
    await re(e, Fe);
    let h = (0, import_path4.join)(i, p);
    if (se(h, e.rules, !d)) continue;
    let F = s;
    if (!d && !s.isSymbolicLink()) {
      if (p.includes("\uFFFD")) return e.isWhole = false, false;
      try {
        F = await O(e, () => (0, import_promises2.lstat)(`${r}/${p}`));
      } catch (R) {
        if ((0, import_chunk_jv7av99m.fn)(R)) continue;
        throw R;
      }
    }
    if (F.isDirectory()) c.push(p);
    else if (F.isFile() && h.endsWith(e.suffix)) {
      if (e.found.add(h), e.found.size > G) return false;
    } else if (F.isSymbolicLink() && e.leadingRuns.some((R) => h.endsWith(R))) return e.isWhole = false, false;
  }
  m.length = 0;
  for (let s of c) {
    var _stack = [];
    try {
      await re(e, Fe);
      let p = (0, import_path4.join)(i, s);
      if (nt.has(s) || o >= qe || e.directoriesRead.has(p) || se(p, e.rules, true)) continue;
      if (s.includes("\uFFFD")) return e.isWhole = false, false;
      let d;
      try {
        d = await O(e, () => (0, import_promises2.open)(`${r}/${s}`, it));
      } catch (R) {
        if ((0, import_chunk_jv7av99m.w)(R) === "ENOENT") await O(e, () => (0, import_promises2.lstat)(r));
        if ((0, import_chunk_jv7av99m.fn)(R)) continue;
        throw R;
      }
      const h = __using(_stack, d, true);
      let F = await O(e, () => h.stat({ bigint: true }));
      if (F.isDirectory() && F.dev === e.device && !await Re(e, h, p, o + 1)) return false;
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  }
  return true;
}
async function Se(e, { roots: n, rules: i, counted: o, isOver: r, maxDirectories: m = Ze }) {
  if ((0, import_chunk_psvbzxg2.EEn)(i)) return [];
  if (e.includes("\uFFFD")) return null;
  let c = e.split(import_path4.sep), s = { rules: i, counted: o, isOver: r, maxDirectories: m, suffix: import_path4.sep + e, leadingRuns: c.map((p, d) => import_path4.sep + c.slice(0, d + 1).join(import_path4.sep)), names: new Set(c), found: /* @__PURE__ */ new Set(), directoriesRead: /* @__PURE__ */ new Set(), device: 0n, isWhole: true, work: 0 };
  try {
    for (let p of n) {
      var _stack = [];
      try {
        let d = p.replace(/\/+$/, "") || import_path4.sep;
        if (!(0, import_chunk_n2dbhmj2.Fee)(p) || d !== (0, import_path4.normalize)(d) || s.directoriesRead.has(d) || se(d, i, true)) continue;
        let h;
        try {
          h = await O(s, () => (0, import_chunk_psvbzxg2._2o)(d, d));
        } catch (_2) {
          let b = (0, import_chunk_psvbzxg2.oht)(_2);
          if (b === "symlink_in_path" || b === "path_not_canonical" || b === void 0 && (0, import_chunk_jv7av99m.fn)(_2)) continue;
          throw _2;
        }
        const F = __using(_stack, h, true);
        if (!(await O(s, () => (0, import_promises2.readlink)(`/proc/self/fd/${F.fd}`, { encoding: "buffer" }))).equals(Buffer.from(d))) continue;
        if (s.device = (await O(s, () => F.stat({ bigint: true }))).dev, !await Re(s, F, d, 0)) break;
      } catch (_) {
        var _error = _, _hasError = true;
      } finally {
        var _promise = __callDispose(_stack, _error, _hasError);
        _promise && await _promise;
      }
    }
  } catch (p) {
    if (p instanceof Q) return null;
    throw p;
  }
  return s.isWhole ? [...s.found] : null;
}
var rt = 1e3;
async function st(e, n, i) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return null;
  let o = (0, import_path3.resolve)(e);
  if (n.unresolved || n.landing !== (0, import_chunk_z6pfqf6e.pn)(o)) return null;
  let r = (0, import_chunk_w578pjby.le)();
  for (let m = o; !i(); m = (0, import_path3.dirname)(m)) {
    let c = await r.lstat((0, import_path3.join)(m, ".git")).catch(() => {
      return;
    });
    if (c?.isDirectory() === true || c?.isFile() === true || c?.isSymbolicLink() === true) return (0, import_chunk_z6pfqf6e.pn)(m);
    if ((0, import_path3.dirname)(m) === m) return null;
  }
  return null;
}
async function ke(e, { heldFiles: n, search: i, timeLimitMs: o, stranded: r, whyNotBegin: m }, c, s) {
  if (r.probes > 0) return { path: null, why: "stranded" };
  let p = m();
  if (p !== void 0) return { path: null, why: p };
  let d = (0, import_chunk_18rsj2ts.pe)(), h = (S) => (0, import_chunk_2tqq6ycx.r0)(S, c.trustedNetworkDirectories) === void 0, F = performance.now() + o, R = false, _ = () => R || performance.now() >= F, b = 0, y = (S) => (b++, S.finally(() => {
    b--, r.probes -= R ? 1 : 0;
  })), k = { path: null, why: "no_file" }, g = async () => {
    let S = null;
    if (h(d)) {
      let T = await y((0, import_chunk_w578pjby.sx)((0, import_path3.resolve)(d)));
      if (_()) return k;
      S = await y(st(d, T, _));
    }
    if (_()) return k;
    let v = [...(0, import_chunk_p1ewvgeh.sv)(c)], L = (0, import_chunk_4smdap7r.M)([d, S ?? d, ...v]), I = L.filter(h);
    for (let T of I) {
      if (_()) return k;
      if (T !== d) await y((0, import_chunk_w578pjby.sx)(T));
    }
    if (_()) return k;
    return ge(e, { directories: I, unprobedDirectories: L.filter((T) => !h(T)), gate: (T, D) => _() ? Promise.resolve(null) : y(s(T, D, c)), heldFiles: n, ...i?.isOn() === true && (0, import_chunk_cg8dqz0a.x)() === "linux" && !(0, import_chunk_f9x2f6cx.Y)() && { filesEndingIn: (T) => {
      let D = Math.min(performance.now() + i.limitMs, F - rt);
      return Se(T, { roots: v.filter(h), rules: c, counted: y, isOver: () => _() || performance.now() >= D });
    } } });
  };
  try {
    let S = await (0, import_chunk_5appeerh.me)((0, import_chunk_18rsj2ts.uh)(d, g), o);
    return S === void 0 || _() ? { path: null, why: "time_limit" } : S;
  } finally {
    R = true, r.probes += b;
  }
}
function V(e, n) {
  return z(e.spelled, n) !== void 0 || z(e.resolved, n) !== void 0;
}
function Te(e, n) {
  let [i, o] = z(e.spelled, n) !== void 0 ? [e.spelled, e.resolved] : [e.resolved, e.spelled], r = z(i, n);
  return r === void 0 || i === o ? void 0 : (0, import_path6.join)(o, r);
}
function We(e, n, i) {
  let o = z(e.resolved, i);
  return o !== void 0 && (n === (0, import_path6.join)(e.spelled, o) || n === (0, import_path6.join)(e.resolved, o));
}
function z(e, n) {
  let i = (0, import_path6.relative)(e, n), o = i.split(import_path6.sep);
  return o.length >= 2 && !(0, import_path6.isAbsolute)(i) && o.every((r) => r !== "" && !r.startsWith(".")) ? i : void 0;
}
var ht = 1e6, _t = /* @__PURE__ */ new Set([40864, 1650812274, 1684170528]), h2o = import_fs.constants.O_RDONLY | (import_fs.constants.O_NONBLOCK ?? 0) | (import_fs.constants.O_NOCTTY ?? 0) | import_chunk_jxja0v0z.cr, Oe = { realpath: import_promises.realpath, lstat: import_promises.lstat, readlink: import_promises.readlink }, g2o = 1e7, gt = new import_chunk_2904xtvq.j(() => ({ promise: void 0 }));
function yt() {
  let e = (0, import_chunk_f9x2f6cx.kr)(gt);
  return e.promise ??= Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-69gbpcnv.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-vcjxnd18.js")))]).then(([n, i]) => [...n.FIXED_USER_DATA_ROOTS, i.SYNCED_FILE_ROOT]).catch((n) => {
    throw e.promise = void 0, n;
  }), e.promise;
}
function wt(e, n) {
  if (!n || n.size === 0) return false;
  for (let i of n.values()) if (i.includes(e)) return true;
  return false;
}
async function OGr(e, n) {
  let i = [];
  try {
    i = await yt();
  } catch {
  }
  for (let o of (0, import_chunk_p1ewvgeh.sv)(n)) {
    if (n.additionalWorkingDirectories.has(o) && !wt(o, n.trustedNetworkDirectories) && await (0, import_chunk_w578pjby.yQe)(o, (0, import_chunk_f9x2f6cx.mte)())) continue;
    let r;
    try {
      r = (0, import_chunk_p1ewvgeh.QEt)(o) ? o : await (0, import_promises.realpath)(o);
    } catch {
      continue;
    }
    if ((0, import_chunk_z6pfqf6e.Z3n)(o, r, (0, import_chunk_f9x2f6cx.mte)())) continue;
    if ((0, import_chunk_p1ewvgeh.Sc)(e, r, { caseFold: false, skipPrivateAlias: true, uncShapeParity: true })) return true;
  }
  for (let o of i) if ((0, import_chunk_p1ewvgeh.Sc)(e, o, { caseFold: false, skipPrivateAlias: true, uncShapeParity: true })) return true;
  return (0, import_chunk_p1ewvgeh.E2e)(e, {}, [e], { remoteSurface: true }).behavior === "allow";
}
var Ft = { nt_namespace: "read_file: NT-namespace path rejected before filesystem access", untrusted_unc: "read_file: untrusted UNC path rejected before filesystem access", untrusted_automount: "read_file: automount path rejected before filesystem access", unvettable_chain: "read_file: unvettable path ancestry rejected before filesystem access", link_text_climbs: 'read_file: path through a symlink whose target has ".." past its leading "../" segments rejected', suspicious_windows_spelling_nt_device_namespace: "read_file: suspicious Windows path spelling rejected (NT device namespace)", suspicious_windows_spelling_colon_past_drive_position: "read_file: suspicious Windows path spelling rejected (colon past the drive-letter position)", suspicious_windows_spelling_tilde_digit: "read_file: suspicious Windows path spelling rejected (tilde followed by a digit)", suspicious_windows_spelling_device_path_prefix: "read_file: suspicious Windows path spelling rejected (device-path prefix)", suspicious_windows_spelling_trailing_dot_or_whitespace: "read_file: suspicious Windows path spelling rejected (trailing dot or whitespace in a segment)", suspicious_windows_spelling_dos_device_suffix: "read_file: suspicious Windows path spelling rejected (DOS device-name suffix)", suspicious_windows_spelling_dot_run_segment: "read_file: suspicious Windows path spelling rejected (dot-run segment)", suspicious_windows_spelling_unc_or_webdav_form: "read_file: suspicious Windows path spelling rejected (UNC-like form: doubled or mixed separators, embedded NT root, or WebDAV marker)" };
function W(e, n = "remote read denied", i) {
  let o = `read denied: ${(0, import_chunk_kx2fp6pc.wn)(e)}`;
  return i === void 0 ? new import_chunk_jv7av99m.gr(o, n) : new import_chunk_nynf6rf6.rI(o, n, i);
}
var N = { refused: true, telemetryMessage: void 0, unsettled: false, openFailure: void 0 }, Ae = { ...N, unsettled: true };
async function Ne(e, n, i, o, r, m, c) {
  let s = m ? await (0, import_chunk_2tqq6ycx.elo)(e, n, i.trustedNetworkDirectories) : (0, import_chunk_2tqq6ycx.Nq)(e, n, i.trustedNetworkDirectories);
  if (!s.ok) {
    let d = s.reason === "suspicious_windows_spelling" ? `suspicious_windows_spelling_${s.spelling}` : s.reason;
    return { ...N, telemetryMessage: Ft[d] };
  }
  for (let d of s.pathsToCheck) if (Pe(d, i, c)) return N;
  let p;
  try {
    p = await (0, import_promises.open)(n, h2o);
  } catch (d) {
    return { ...N, openFailure: { error: d } };
  }
  try {
    let d = await p.stat({ bigint: true });
    if (!d.isFile()) return N;
    let h;
    try {
      h = await o.realpath(n);
    } catch {
      return Ae;
    }
    let F = await (0, import_chunk_xfj2cwfv.g6n)(p, d, h, o);
    if (F === void 0) return Ae;
    if (h = F, Pe(h, i, c)) return N;
    if ((0, import_chunk_2tqq6ycx.r0)(h, i.trustedNetworkDirectories) !== void 0) return N;
    if (c !== void 0 && V(c, n) ? !We(c, n, h) : !await OGr(h, i)) return N;
    return { refused: false, value: await r({ handle: p, openedStat: d, canonicalPath: h }) };
  } finally {
    await p.close();
  }
}
function Pe(e, n, i) {
  let o = (0, import_chunk_pqb914sj.cpe)(e, n, "read"), r = o.allowed || i !== void 0 && n.restricted !== true && !(0, import_chunk_pbteexar.jS)(n) && (0, import_chunk_pqb914sj.A9e)(o) && V(i, e), m = i && Te(i, e);
  return !r || (0, import_chunk_xfj2cwfv.wmn)(e, e) !== void 0 || (0, import_chunk_p1ewvgeh.Ia)(e, n, "read", "ask") !== null || m !== void 0 && ["deny", "ask"].some((c) => (0, import_chunk_p1ewvgeh.Ia)(m, n, "read", c) !== null);
}
function ve(e) {
  return e === void 0 ? void 0 : (0, import_chunk_78g0060s.f)(e);
}
async function nht(e, n, i, { encoding: o = "utf-8", anchor: r, offset: m, telemetrySource: c, containmentFs: s = Oe, asWrittenSources: p, syncedSkillsFolder: d, forUpload: h } = {}) {
  let F = Math.min(n && n > 0 ? n : ht, g2o), R = r?.kind === "as_written", _ = R ? "not_served" : void 0, b = false;
  try {
    if (m !== void 0 && !Number.isSafeInteger(m)) throw W(e);
    let y = r === void 0 || R ? void 0 : await (await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-bne5xtxh.js")))).resolveAnchoredReadPath(e, r);
    if (y === null) throw W(e);
    if (y === "stale_root_id") throw W(e, void 0, "stale_root_id");
    let k = () => {
      let P = p?.whyNotServed();
      if (P !== void 0) throw _ = P, W(e);
    }, g;
    if (R) {
      if (p === void 0) throw W(e);
      k();
      let P = fe(r.within);
      if (P === void 0) throw _ = "unfit_within", W(e);
      _ = "fault";
      let E = await ke(e, p, typeof i === "function" ? i() : i, (Z, C, B) => Rt(Z, C, B, s));
      if (_ = E.path === null ? E.why : E.step, E.path === null) throw W(e);
      if (!ce(P, E.path)) throw _ = "outside", W(e);
      g = E.path;
    }
    let S = y?.absPath ?? g ?? (0, import_chunk_n2dbhmj2.xt)(e), v = r === void 0 ? (0, import_chunk_hsqa3g9e.$Ui)(S) : S, L = v === S ? void 0 : await (0, import_chunk_w578pjby.sx)(S), I = typeof i === "function" ? i() : i;
    if (L !== void 0 && (L.unresolved || L.spellings.some((P) => ["deny", "ask"].some((E) => (0, import_chunk_p1ewvgeh.Ia)(P, I, "read", E) !== null)))) throw W(e);
    let T = r === void 0 ? d?.() : void 0, D = T !== void 0 && (0, import_chunk_p1ewvgeh.rwe)(I) ? void 0 : T;
    b = D !== void 0 && V(D, v);
    let H = await Ne(e, v, I, s, async ({ handle: P, openedStat: E, canonicalPath: Z }) => {
      if (h === true) {
        let { takenByPathRefusal: Me } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-4734yq73.js"))), ee = await Me(v, Z);
        if (ee !== void 0) throw W(e, void 0, ee === "credential_name" ? ee : void 0);
      }
      let C = Number(E.size), B = typeof m === "number" ? m : 0, ue = B < 0 ? Math.max(C + B, 0) : Math.min(B, C), q = ue !== 0 && ["linux", "wsl"].includes((0, import_chunk_cg8dqz0a.x)()) && _t.has(await (0, import_chunk_jg286npj.x_r)(`/proc/self/fd/${P.fd}`)) ? 0 : ue;
      return { size: C, etag: (0, import_chunk_ccm69jjy.Je)(`${E.dev}:${E.ino}:${C}:${E.mtimeNs}:${E.ctimeNs}`), start: q, ...await (0, import_chunk_xfj2cwfv.IE)(P, F, C - q, q) };
    }, R, D);
    if (H.refused) throw H.openFailure === void 0 ? W(e, H.telemetryMessage) : H.openFailure.error;
    let { bytes: U, overLimit: J, size: Ce, start: Le, etag: Ie } = H.value;
    if (g !== void 0) k();
    if (b && d?.() === void 0) throw W(e);
    if (c) (0, import_chunk_y53wbr8a.a)("tengu_bridge_read_file_served", { success: true, source: (0, import_chunk_78g0060s.f)(c), size_bytes: U.length, requested_max_bytes: F, truncated: J, ext: (0, import_chunk_865at33z.z9)(v), as_written_lookup: ve(_) });
    if (b) (0, import_chunk_cqa9hrgx.u)("remote_read_synced_skills");
    return { contents: U.toString(o === "base64" ? "base64" : "utf-8"), absPath: S, ...J && { truncated: J }, ...o === "base64" ? { encoding: o } : { lossy: !(0, import_buffer.isUtf8)(U) }, ...y !== void 0 && { anchor: y.kind }, ...g !== void 0 && { anchor: "as_written" }, ...m !== void 0 && { offset: Le, read_bytes: U.length, total_bytes: Ce, etag: Ie }, ...h === true && { upload_screened: h } };
  } catch (y) {
    try {
      let k = y instanceof Error ? "code" in y && typeof y.code === "string" ? `${y.name}/${y.code}` : y.name : typeof y;
      (0, import_chunk_w578pjby.t)(`readFileForRemote failed pre-deny: ${k}${_ === void 0 ? "" : `, as_written look-up: ${_}`}`, { level: "error" });
    } catch {
    }
    try {
      if (c) (0, import_chunk_y53wbr8a.a)("tengu_bridge_read_file_served", { success: false, source: (0, import_chunk_78g0060s.f)(c), as_written_lookup: ve(_) });
      if (b) (0, import_chunk_cqa9hrgx.l)("remote_read_synced_skills", "not_served");
    } catch {
    }
    try {
      if (_ !== void 0) p?.onRefusal(_);
    } catch {
    }
    if (y instanceof import_chunk_jv7av99m.A && y.message.startsWith("read denied: ")) throw y;
    throw W(e);
  }
}
class De extends Error {
  constructor() {
    super("probeFileForRemote: cannot tell whether the path names a file");
    this.name = "UnsettledRemoteFileError";
  }
}
async function Rt(e, n, i, o = Oe) {
  if (!(0, import_chunk_n2dbhmj2.Fee)(e) || (0, import_path.normalize)(e) !== e) return null;
  let r = await Ne(n, e, i, o, ({ canonicalPath: m }) => Promise.resolve(m), true, void 0);
  if (!r.refused) return r.value;
  if (r.openFailure !== void 0) {
    let { error: m } = r.openFailure;
    if ((0, import_chunk_jv7av99m.fn)(m) || ["EISDIR", "ENXIO", "ENOTSUP", "EOPNOTSUPP"].includes((0, import_chunk_jv7av99m.w)(m) ?? "")) return null;
    throw m;
  }
  if (r.unsettled) throw new De();
  return null;
}
