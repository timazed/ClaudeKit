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
var chunk_dzf5h538_exports = {};
__export(chunk_dzf5h538_exports, {
  ZO: () => ZO
});
module.exports = __toCommonJS(chunk_dzf5h538_exports);
var import_events = require("events");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_promises2 = require("timers/promises");
var import_fs2 = require("fs");
var import_promises3 = require("fs/promises");
var import_path2 = require("path");
var M = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
class N {
  subscribers;
  #i;
  #t;
  constructor(t, e, s) {
    this.subscribers = [s], this.#i = e, this.#t = (0, import_fs2.watch)(t, { persistent: e !== void 0 }, (i, n) => {
      if (T(this, t), n && n !== t) {
        let r = M.get((0, import_path2.resolve)(t, n));
        if (r) T(r, (0, import_path2.join)(t, n));
      }
    }).on("error", (i) => void this.#e(t, i));
  }
  drop(t) {
    if (this.subscribers = this.subscribers.filter((e) => e !== t), this.subscribers.length === 0 && this.#t) {
      if (this.#t.close(), this.#t = void 0, this.#i !== void 0) M.delete(this.#i);
    }
  }
  async #e(t, e) {
    for (let s of I(this)) s.report(e);
  }
}
class _ {
  subscribers;
  persistent;
  interval;
  #i;
  #t;
  #e;
  #n = true;
  constructor(t, e, s, { persistent: i, interval: n }, r) {
    this.subscribers = [s], this.persistent = i, this.interval = n, this.#i = t, this.#t = e, this.#e = r, (0, import_fs2.watchFile)(e, { persistent: i, interval: n }, this.#s);
  }
  drop(t) {
    if (this.subscribers = this.subscribers.filter((e) => e !== t), this.subscribers.length === 0 && this.#n) this.#n = false, k.delete(this.#t), (0, import_fs2.unwatchFile)(this.#t, this.#s);
    else if (this.#n) try {
      this.retune();
    } catch {
    }
  }
  retune(t = true) {
    let e = [...I(this)].map((n) => n.options), s = e.some((n) => n.persistent), i = Math.min(...e.map((n) => n.interval));
    if (s === this.persistent && i === this.interval) return;
    (0, import_fs2.unwatchFile)(this.#t, this.#s);
    try {
      (0, import_fs2.watchFile)(this.#t, { persistent: s, interval: i }, this.#s);
    } catch (n) {
      throw (0, import_fs2.watchFile)(this.#t, { persistent: this.persistent, interval: this.interval }, this.#s), n;
    }
    this.persistent = s, this.interval = i, this.#a(t);
  }
  async #a(t) {
    if (this.#e === void 0 && !t) return;
    let e = await (0, import_promises3.stat)(this.#t).catch(() => {
      return;
    });
    if (!e || !this.#n) return;
    if (this.#e === void 0) {
      for (let s of this.subscribers) if (s.watched.mtimeMs !== e.mtimeMs) s.notify(this.#i, e);
    } else if (P(e) !== this.#e) this.#e = P(e), T(this, this.#i, e);
  }
  #s = (t, e) => {
    if (t.size !== e.size || t.mtimeMs > e.mtimeMs || t.mtimeMs === 0) {
      if (this.#e !== void 0) this.#e = P(t);
      T(this, this.#i, t);
    }
  };
}
function U(t, e, s) {
  if (!s) return new N(t, void 0, e);
  let i = (0, import_path2.resolve)(t), n = M.get(i);
  if (n) n.subscribers = [...n.subscribers, e];
  else n = new N(t, i, e), M.set(i, n);
  return n;
}
function H(t, e, s, i) {
  let n = (0, import_path2.resolve)(t), r = k.get(n);
  if (!r) return r = new _(t, n, e, s, i && P(i)), k.set(n, r), r;
  r.subscribers = [...r.subscribers, e];
  try {
    r.retune();
  } catch (o) {
    throw r.drop(e), o;
  }
  return r;
}
function K(t) {
  for (let e of k.values()) {
    let s = I(e);
    if (s.has(t)) e.retune(s.size > 1);
  }
}
function I({ subscribers: t }) {
  return new Set(t.map((e) => e.owner));
}
function T({ subscribers: t }, e, s) {
  for (let i of t) i.notify(e, s);
}
function P({ mtimeMs: t, ctimeMs: e }) {
  return `${t}:${e}`;
}
var nt = /\..*\.sw[px]$|~$|\.subl.*\.tmp/, rt = 100, ot = 64, B = 1e3, x = 1024;
class z {
  owner;
  watched;
  source;
  constructor(t, e) {
    this.owner = t;
    this.watched = e;
  }
  notify(t, e) {
    this.owner.heard(this, t, e);
  }
}
class J extends import_events.EventEmitter {
  options;
  closed = false;
  #i = /* @__PURE__ */ new Map();
  #t = /* @__PURE__ */ new Map();
  #e = /* @__PURE__ */ new Map();
  #n = /* @__PURE__ */ new Map();
  #a = /* @__PURE__ */ new Map();
  #s = /* @__PURE__ */ new Map();
  #u = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Map();
  #l = false;
  #f = 0;
  #T = 0;
  constructor(t) {
    super();
    let { CHOKIDAR_USEPOLLING: e, CHOKIDAR_INTERVAL: s } = process.env;
    this.options = { persistent: true, followSymlinks: true, atomic: true, ...t, usePolling: e === void 0 ? (0, import_os.type)() === "OS400" || (t.usePolling ?? false) : !["", "0", "false"].includes(e.toLowerCase()), interval: s ? Number.parseInt(s, 10) : t.interval ?? 100 };
  }
  add(t) {
    if (!this.closed) this.#p([t].flat(), true);
    return this;
  }
  unwatch(t) {
    if (this.closed) return;
    let e = O(t);
    if (!(0, import_path.isAbsolute)(e) && !this.#t.has(e)) e = (0, import_path.resolve)(e);
    this.#k(e), this.#a.set(e, this.#i.has(e) ? "withContents" : "alone");
  }
  close() {
    if (!this.closed) {
      this.closed = true, this.removeAllListeners();
      for (let t of this.#t.keys()) this.#S(t);
      this.#i.clear(), this.#e.clear(), this.#n.clear();
    }
    return Promise.resolve();
  }
  getWatched() {
    let t = {};
    for (let [e, s] of this.#i) t[e] = [...s].sort();
    return t;
  }
  setPollInterval(t) {
    if (this.options = { ...this.options, interval: t }, this.options.usePolling) K(this);
  }
  report(t) {
    let e = A(t);
    if (e !== "ENOENT" && e !== "ENOTDIR" && !(this.options.ignorePermissionErrors && (e === "EPERM" || e === "EACCES")) && this.listenerCount("error") > 0) this.emit("error", t);
  }
  heard(t, e, s) {
    let { watched: i } = t;
    if (this.closed) return;
    if ("depth" in i) {
      if (s?.mtimeMs !== 0) this.#m(i, e, false);
    } else if (this.#c(`watch:${i.path}`, 5)) {
      if (!s || s.mtimeMs === 0) this.#N(t, i);
      else if (i.siblings.has((0, import_path.basename)(i.path))) this.#P(i, s);
    }
  }
  async #p(t, e, s) {
    let i = t.map(O);
    for (let r of i) this.#a.delete(r);
    this.#f += i.length;
    let n = await Promise.all(i.map(async (r) => {
      let o = await this.#E(r, e, 0, 0, s);
      if (o === "unreadable" && !this.#l) this.#y();
      return o;
    }));
    if (this.closed || n.includes("abandoned")) return;
    for (let [r, o] of i.entries()) if (n[r] === "unreadable") this.#p([(0, import_path.dirname)(o)], true, (0, import_path.basename)(s || o));
  }
  async #E(t, e, s, i, n) {
    let r = !this.#l, o = this.#d(t), a = "scanned";
    try {
      if (!o && !await this.#O(t, e, s, i, n)) return "abandoned";
    } catch (c) {
      this.report(c), a = "unreadable";
    }
    if (r) this.#y();
    return a;
  }
  async #O(t, e, s, i, n) {
    let { followSymlinks: r, ignoreInitial: o } = this.options, a = await (r ? import_promises.stat : import_promises.lstat)(t);
    if (this.closed) return false;
    if (this.#d(t, a)) return true;
    let c = e && o, m = a.isSymbolicLink();
    if (!m && !a.isDirectory()) {
      let d = this.#r((0, import_path.dirname)(t));
      if (!d.has((0, import_path.basename)(t))) {
        let { mtimeMs: w, ino: E } = a;
        if (this.#v(t, new z(this, { path: t, siblings: d, mtimeMs: w, ino: E })), !c && this.#c(`add:${t}`, 0)) this.#h("add", t, a);
      }
      return true;
    }
    let v = (0, import_path.resolve)(t), h = r ? await (0, import_promises.realpath)(t) : t;
    if (this.closed) return false;
    let l = { path: m ? (0, import_path.dirname)(t) : t, knownAs: t, depth: s, linksCrossed: i, awaited: m ? t : n };
    if (m) this.#w(l.path, t), this.#h("add", t, a);
    let f = (0, import_path.basename)(l.path);
    if (!c && !l.awaited && !this.#r((0, import_path.dirname)(l.path)).has(f)) this.#h("addDir", l.path, a);
    this.#w((0, import_path.dirname)(l.path), f), this.#r(l.path);
    let u = this.#n.get(h);
    if (s <= (this.options.depth ?? s) && !this.#e.has(h) && (i < 2 || (u?.size ?? 0) < ot)) {
      if (i >= 2) this.#n.set(h, (u ?? /* @__PURE__ */ new Set()).add(v));
      if (!l.awaited && !await this.#m(l, l.path, e)) return false;
      this.#v(t, new z(this, l), a);
    }
    if (m || h !== v) this.#e.set(v, h);
    return true;
  }
  async #m(t, e, s) {
    let i = (0, import_path.join)(e, ""), n = `list:${i}`;
    if (!this.#c(n, B)) return true;
    let { followSymlinks: r, ignorePermissionErrors: o } = this.options;
    s ||= t.retryMs !== void 0;
    let a = this.#r(t.knownAs), c = (0, import_path.resolve)(i), m = /* @__PURE__ */ new Set();
    try {
      let h = await (0, import_promises.readdir)(c).catch(D) ?? [];
      if (h instanceof Error) throw h;
      let l = [];
      for (let [f, u] of h.entries()) {
        if (f % x === 0) {
          if (f > 0) await (0, import_promises2.setImmediate)();
          l = await Promise.all(h.slice(f, f + x).map((S) => (0, import_promises.lstat)((0, import_path.join)(c, S)).catch(D)));
        }
        let d = l[f % x], w = !(d instanceof Error) && d?.isSymbolicLink();
        if (w) {
          let S = await (0, import_promises.realpath)((0, import_path.join)(c, u)).then(import_promises.lstat).catch(D);
          if (S instanceof Error && A(S) !== "ENOTDIR") d = S;
        }
        if (this.closed) return false;
        if (d instanceof Error) {
          this.report(d), m.add(u);
          continue;
        }
        let E = (0, import_path.join)(t.path, u);
        if (!d || this.#d(E, d) || !(o || w || d.isDirectory() || d.mode & 256)) continue;
        if (m.add(u), w && !r) {
          this.#F(i, u, d);
          continue;
        }
        if (w) {
          if (this.#e.has((0, import_path.join)(c, u))) continue;
          this.#e.set((0, import_path.join)(c, u), true);
        }
        if (t.awaited ? u === t.awaited : !a.has(u)) this.#f++, this.#E(E, s, t.depth + 1, t.linksCrossed + (w ? 1 : 0));
      }
    } catch (h) {
      if (this.report(h), s && A(h) !== "ENOTDIR") t.retryMs = (t.retryMs ?? B / 2) * 2, setTimeout((l, f) => l.#A(f), t.retryMs, this, t).unref();
      return !this.closed;
    }
    if (t.retryMs = void 0, this.closed) return false;
    let v = this.#s.get(n);
    clearTimeout(v?.timer), this.#s.delete(n);
    for (let h of [...a]) if (h !== i && !m.has(h)) this.#g(i, h);
    if (v?.asked) this.#m(t, i, false);
    return true;
  }
  #A(t) {
    if (t.retryMs !== void 0 && this.#i.has((0, import_path.resolve)(t.knownAs)) && !this.#d(t.path)) this.#m(t, t.path, true);
  }
  async #F(t, e, s) {
    let i = (0, import_path.join)(t, e), n = (0, import_path.resolve)(i), r = this.#r(t);
    this.#f++;
    let o = await (0, import_promises.realpath)(i).catch(() => {
      return;
    });
    if (this.closed) return;
    if (o !== void 0) {
      let a = r.has(e);
      if (!a || this.#e.get(n) !== o) r.add(e), this.#e.set(n, o), this.#h(a ? "change" : "add", i, s);
    }
    if (!this.#l) this.#y();
  }
  async #N(t, e) {
    let s = await (0, import_promises.stat)(e.path).catch(() => {
      return;
    });
    if (this.closed) return;
    if (!s) {
      this.#g((0, import_path.dirname)(e.path), (0, import_path.basename)(e.path));
      return;
    }
    let i = s.ino !== e.ino;
    if (this.#P(e, s), i && ["darwin", "linux", "freebsd"].includes("darwin")) this.#S(e.path), this.#v(e.path, t);
  }
  #P(t, e) {
    let { atimeMs: s, mtimeMs: i } = e;
    if (!s || s <= i || i !== t.mtimeMs) this.#h("change", t.path, e);
    t.mtimeMs = i, t.ino = e.ino;
  }
  #g(t, e) {
    let s = [{ folder: t, name: e, isFolder: false, isOpened: false }];
    for (let i = s.at(-1); i; i = s.at(-1)) {
      let n = (0, import_path.join)(i.folder, i.name), r = (0, import_path.resolve)(n);
      if (!i.isOpened) {
        if (i.isOpened = true, i.isFolder = this.#i.has(r), !this.#c(`remove:${n}`, 100)) {
          s.pop();
          continue;
        }
        if (!i.isFolder && this.#i.size === 1) this.#p([i.folder], false, i.name);
        for (let c of [...this.#r(n)].reverse()) s.push({ folder: n, name: c, isFolder: false, isOpened: false });
        continue;
      }
      s.pop();
      let o = this.#r(i.folder).has(i.name);
      this.#M(i.folder, i.name), this.#n.get(String(this.#e.get(r)))?.delete(r), this.#e.delete(r);
      let a = this.#o.get(n);
      if (a) {
        if (this.#o.delete(n), clearTimeout(a.timer), a.event === "add") continue;
      }
      if (this.#i.delete(r), o && !this.#d(n)) this.#h(i.isFolder ? "unlinkDir" : "unlink", n);
      this.#k(n);
    }
  }
  async #h(t, e, s) {
    if (this.closed) return;
    let i = e, n = this.#o.get(i);
    if (n) {
      if (n.changedAt = Date.now(), !n.timer) this.#b(i, n);
      return;
    }
    let r = t;
    if (this.options.atomic) {
      if (t === "unlink") {
        this.#u.add(i), setTimeout((o) => o.#W(), rt, this);
        return;
      }
      if (t === "add" && this.#u.delete(i)) r = "change";
    }
    if (this.options.awaitWriteFinish && this.#l && (r === "add" || r === "change")) {
      let o = { event: r, changedAt: Date.now() };
      this.#o.set(i, o), this.#b(i, o);
    } else if (r !== "change" || this.#c(`change:${i}`, 50)) if (s) this.emit(r, i, s);
    else this.emit(r, i);
  }
  #W() {
    for (let t of this.#u) this.emit("unlink", t), this.#u.delete(t);
  }
  #b(t, e) {
    clearTimeout(e.timer), e.timer = setTimeout((s, i, n) => s.#I(i, n), this.options.awaitWriteFinish?.pollInterval ?? 100, this, t, e);
  }
  #I(t, e) {
    e.timer = void 0, (0, import_fs.stat)(t, (s, i) => {
      let n = this.#o.get(t);
      if (this.closed) return;
      if (s) {
        if (s.code === "ENOENT") return;
        if (this.listenerCount("error") > 0) this.emit("error", s);
        else this.#o.delete(t);
        return;
      }
      if (!n) return;
      let r = Date.now();
      if (e.size !== void 0 && e.size !== i.size) n.changedAt = r;
      if (e.size = i.size, r - n.changedAt >= (this.options.awaitWriteFinish?.stabilityThreshold ?? 0)) this.#o.delete(t), clearTimeout(n.timer), this.emit(e.event, t, i);
      else this.#b(t, e);
    });
  }
  #y() {
    if (++this.#T >= this.#f) this.#l = true, process.nextTick(() => this.emit("ready"));
  }
  #d(t, e) {
    let { atomic: s, ignored: i } = this.options;
    if (s && nt.test(t)) return true;
    if (!i && this.#a.size === 0) return false;
    let n = O(t);
    for (let [r, o] of this.#a) {
      let a = o === "alone" ? "" : (0, import_path.relative)(r, n);
      if (n === O(r) || a && !a.startsWith("..") && !(0, import_path.isAbsolute)(a)) return true;
    }
    return i?.(n, e) ?? false;
  }
  #c(t, e) {
    let s = this.#s.get(t);
    if (s) return s.asked++, false;
    return this.#s.set(t, { asked: 0, timer: setTimeout((i, n) => i.delete(n), e, this.#s, t) }), true;
  }
  #r(t) {
    let e = (0, import_path.resolve)(t), s = this.#i.get(e);
    if (!s) s = /* @__PURE__ */ new Set(), this.#i.set(e, s);
    return s;
  }
  #w(t, e) {
    let s = this.#r(t);
    if (e !== "." && e !== "..") s.add(e);
  }
  async #M(t, e) {
    let s = this.#r(t);
    if (s.delete(e), s.size > 0) return;
    let i = (0, import_path.resolve)(t);
    try {
      await (0, import_promises.readdir)(i);
    } catch {
      if (!this.closed) this.#g((0, import_path.dirname)(i), (0, import_path.basename)(i));
    }
  }
  #v(t, e, s) {
    if (this.closed) return;
    let { path: i } = e.watched;
    this.#w((0, import_path.dirname)(i), (0, import_path.basename)(i));
    try {
      e.source = this.options.usePolling ? H(i, e, this.options, s) : U(i, e, this.options.persistent);
    } catch (r) {
      this.report(r);
      return;
    }
    let n = this.#t.get(t);
    this.#t.set(t, n ? [...n, e] : [e]);
  }
  #S(t) {
    for (let e of this.#t.get(t) ?? []) e.source?.drop(e);
    this.#t.delete(t);
  }
  #k(t) {
    this.#S(t), this.#M((0, import_path.dirname)(t), (0, import_path.basename)(t));
  }
}
var ZO = { watch(t, e) {
  return new J(e).add(t);
} };
function O(t) {
  let e = t.replaceAll("\\", "/").replace(/^\/{3,}/, "//");
  return (0, import_path.normalize)(e).replaceAll("\\", "/");
}
function A(t) {
  return t instanceof Error && "code" in t ? t.code : void 0;
}
function D(t) {
  return ["ENOENT", "EPERM", "EACCES", "ELOOP"].includes(String(A(t))) ? void 0 : t;
}
