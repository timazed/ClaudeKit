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
var chunk_wnbnyt4a_exports = {};
__export(chunk_wnbnyt4a_exports, {
  check: () => ce,
  heldDirectoriesForTesting: () => ae,
  lock: () => ie,
  lockSync: () => re,
  unlock: () => se
});
module.exports = __toCommonJS(chunk_wnbnyt4a_exports);
var import_chunk_4pgkmw1e = require("/$bunfs/root/chunk-4pgkmw1e.js");
var import_events = require("events");
var import_fs = require("fs");
var import_path = require("path");
var p = Symbol(), D = "__signal_exit_emitter__", E = "SIGABRT SIGALRM SIGHUP SIGINT SIGTERM SIGIOT SIGQUIT SIGSYS SIGUSR2 SIGVTALRM SIGXCPU SIGXFSZ".split(" "), T = { mkdir: import_fs.mkdir, realpath: import_fs.realpath, rmdir: import_fs.rmdir, rmdirSync: import_fs.rmdirSync, stat: import_fs.stat, utimes: import_fs.utimes }, u = /* @__PURE__ */ new Map(), I = false;
function ie(e, n = {}) {
  return m((t) => x(e, { fs: T, ...n }, t)).then((t) => () => m(t));
}
function re(e, n) {
  let t = { mkdir: (i, r) => l(() => (0, import_fs.mkdirSync)(i), r), rmdir: (i, r) => l(() => (0, import_fs.rmdirSync)(i), r), stat: (i, r) => l(() => (0, import_fs.statSync)(i), r), utimes: (i, r, s, c) => l(() => (0, import_fs.utimesSync)(i, r, s), c), rmdirSync: import_fs.rmdirSync }, o = L((i) => x(e, { ...n, fs: t }, i));
  return () => L(o);
}
function se(e, n = {}) {
  return m((t) => G(e, { fs: T, ...n }, t));
}
function ce(e, n = {}) {
  let t = { fs: T, ...n };
  return m((o) => v(e, t, o, (i, r) => t.fs.stat(r, (s, c) => s ? o(f(s) === "ENOENT" ? null : s, false) : o(null, !N(c, t)))));
}
function ae() {
  return Array.from(u.values(), (e) => e.claim.directory);
}
function x(e, n, t) {
  let { retries: o } = n;
  if (!I) V();
  v(e, n, t, (i, r) => C({ path: i, directory: r, options: n }, Z(typeof o === "object" ? o : { retries: o || 0 }), [], t));
}
function C(e, n, t, o) {
  let { path: i, options: r } = e;
  k(e, true, (s, c) => {
    if (s) {
      let a = n[t.push(s) - 1];
      if (a === void 0) return o(z(t));
      setTimeout(C.bind(null, e, n, t, o), a);
      return;
    }
    u.set(i, c), S(i, r), o(null, (a) => c.isReleased ? a(Object.assign(Error("Lock is already released"), { code: "ERELEASED" })) : G(i, { ...r, realpath: false }, a));
  });
}
function k(e, n, t) {
  let { path: o, directory: i, options: r } = e;
  r.fs.mkdir(i, (s) => {
    if (!s) return q(e, t);
    if (f(s) !== "EEXIST") return t(s);
    let c = Object.assign(Error("Lock file is already being held"), { code: "ELOCKED", file: o });
    if (!n) return t(c);
    r.fs.stat(i, (a, P) => {
      if (a) return f(a) === "ENOENT" ? k(e, false, t) : t(a);
      if (!N(P, r)) return t(c);
      A(i, r.fs, (y) => y ? t(y) : k(e, false, t));
    });
  });
}
function q(e, n) {
  let { fs: t } = e.options, o = t[p];
  if (o !== void 0) return h(e, o, n);
  let i = new Date(Math.ceil(Date.now() / 1e3) * 1e3 + 5);
  t.utimes(e.directory, i, i, (r) => r ? R(e, r, n) : h(e, o, n));
}
function h(e, n, t) {
  let { fs: o } = e.options;
  o.stat(e.directory, (i, r) => {
    if (i) return R(e, i, t);
    let s = r.mtime.getTime(), c = n ?? s % 1e3 !== 0;
    if (o[p] === void 0) Reflect.defineProperty(o, p, { value: c });
    t(null, { claim: e, keepsMilliseconds: c, mtime: s, touchedAt: Date.now(), delay: 0 });
  });
}
function R(e, n, t) {
  e.options.fs.rmdir(e.directory, () => {
  }), t(n);
}
function G(e, n, t) {
  v(e, n, t, (o, i) => {
    let r = u.get(o);
    if (!r || r.isReleased) return t(Object.assign(Error("Lock is not acquired/owned by you"), { code: "ENOTACQUIRED" }));
    if (clearTimeout(r.timer), r.isReleased = true, r.afterLook) r.afterLook.push(w.bind(null, r, i, n.fs, t));
    else w(r, i, n.fs, t);
  });
}
function w(e, n, t, o) {
  if (u.get(e.claim.path) === e) u.delete(e.claim.path);
  A(n, t, o);
}
function v(e, { fs: n, lockfilePath: t, ...o }, i, r) {
  if ("realpath" in o && !o.realpath) {
    let s = (0, import_path.resolve)(e);
    return r(s, t || `${s}.lock`);
  }
  n.realpath(e, (s, c) => s ? i(s) : r(c, t || `${c}.lock`));
}
function S(e, n) {
  let t = u.get(e);
  if (!t || t.timer || t.afterLook) return;
  t.delay ||= Math.max(Math.min(n.update ?? 1 / 0, b(n) / 2) || 0, 1e3), t.timer = setTimeout(J.bind(null, t, n), t.delay).unref();
}
function J(e, n) {
  let { path: t, directory: o } = e.claim;
  e.timer = void 0, e.afterLook = [], n.fs.stat(o, (i, r) => {
    if (e.afterLook.forEach((a) => a()), e.afterLook = void 0, i) return O(e, n, i);
    if (r.mtime.getTime() !== e.mtime) return M(e, Error("Unable to update lock within the stale threshold"));
    if (e.isReleased) return;
    let s = Date.now(), c = new Date(e.keepsMilliseconds ? s : Math.ceil(s / 1e3) * 1e3);
    n.fs.utimes(o, c, c, (a) => {
      if (e.isReleased) return;
      if (a) return O(e, n, a);
      e.mtime = c.getTime(), e.touchedAt = Date.now(), e.delay = 0, S(t, n);
    });
  });
}
function O(e, n, t) {
  if (f(t) === "ENOENT" || e.touchedAt + b(n) < Date.now()) return M(e, t);
  e.delay = 1e3, S(e.claim.path, n);
}
function M(e, n) {
  let { path: t, options: o } = e.claim;
  if (e.isReleased = true, clearTimeout(e.timer), u.get(t) === e) u.delete(t);
  let i = Object.assign(Object(n), { code: "ECOMPROMISED" });
  if (!o.onCompromised) throw i;
  o.onCompromised(i);
}
function V() {
  I = true;
  for (let t of ["reallyExit", "emit"]) {
    let o = Reflect.get(process, t);
    Reflect.set(process, t, (...i) => {
      if (t === "reallyExit") g();
      let r = o.apply(process, i);
      if (i[0] === "exit") g();
      return r;
    });
  }
  let e = Reflect.get(process, D) ?? Object.assign(new import_events.EventEmitter(), { count: 0, emitted: {} });
  Reflect.set(process, D, e), e.count++;
  let n = W.bind(null, e, () => E.forEach((t) => process.off(t, n)));
  for (let t of E) try {
    process.on(t, n);
  } catch {
  }
}
function W(e, n, t) {
  if (process.listenerCount(t) === e.count) n(), e.count--, g(), process.kill(process.pid, t);
}
function g() {
  let e = [...u.values()];
  u.clear();
  for (let { claim: n } of e) try {
    n.options.fs.rmdirSync(n.directory);
  } catch {
  }
}
function A(e, n, t) {
  n.rmdir(e, (o) => t(f(o) === "ENOENT" ? void 0 : o));
}
function b(e) {
  return "stale" in e ? Math.max(e.stale || 0, 2e3) : 1e4;
}
function N(e, n) {
  return e.mtime.getTime() < Date.now() - b(n);
}
function Z({ retries: e, factor: n, minTimeout: t = 1e3, maxTimeout: o }) {
  return Array.from({ length: e }, (i, r) => Math.round((0, import_chunk_4pgkmw1e.Id)({ attempt: r + 1, baseMs: t, capMs: o, factor: n, jitter: { kind: "none" } })));
}
function z(e) {
  let n = /* @__PURE__ */ new Map(), t = 0, o = e[0];
  for (let i of e) {
    let r = Reflect.get(Object(i), "message"), s = (n.get(r) ?? 0) + 1;
    if (n.set(r, s), s >= t) t = s, o = i;
  }
  return o;
}
function f(e) {
  return Reflect.get(Object(e), "code");
}
function m(e) {
  return new Promise((n, t) => e((o, i) => o ? t(o) : n(i)));
}
function L(e) {
  let n, t;
  if (e((o, i) => {
    t = o, n = i;
  }), t) throw t;
  return n;
}
function l(e, n) {
  let t;
  try {
    t = e();
  } catch (o) {
    return n(o);
  }
  n(null, t);
}
