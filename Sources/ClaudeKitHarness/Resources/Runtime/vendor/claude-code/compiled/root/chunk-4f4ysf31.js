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
var chunk_4f4ysf31_exports = {};
__export(chunk_4f4ysf31_exports, {
  Bhs: () => Bhs,
  CDi: () => CDi,
  Dit: () => Dit,
  EDi: () => EDi,
  Ean: () => Ean,
  Ije: () => Ije,
  JBt: () => JBt,
  Lg: () => Lg,
  Mje: () => Mje,
  QBt: () => QBt,
  R1n: () => R1n,
  SDi: () => SDi,
  TDi: () => TDi,
  Uhs: () => Uhs,
  Ukt: () => Ukt,
  XBt: () => XBt,
  abr: () => abr,
  ago: () => ago,
  bDi: () => bDi,
  cp: () => cp,
  fZl: () => fZl,
  ibr: () => ibr,
  igo: () => igo,
  kDi: () => kDi,
  kan: () => kan,
  nbr: () => nbr,
  o4: () => o4,
  obr: () => obr,
  ogo: () => ogo,
  ole: () => ole,
  rbr: () => rbr,
  sbr: () => sbr,
  sgo: () => sgo,
  v8e: () => v8e,
  vDi: () => vDi,
  van: () => van,
  wDi: () => wDi,
  wan: () => wan,
  x1n: () => x1n
});
module.exports = __toCommonJS(chunk_4f4ysf31_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_tsfdtsmv = require("/$bunfs/root/chunk-tsfdtsmv.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var B = Math.max(...import_chunk_trwykz8a.Th.map((e) => Buffer.byteLength(e))) - 1;
class XBt {
  found = /* @__PURE__ */ new Set();
  tail = Buffer.alloc(0);
  add(e) {
    let n = Buffer.concat([this.tail, e.subarray(0, B)]);
    for (let r of import_chunk_trwykz8a.Th) if (n.includes(r) || e.includes(r)) this.found.add(r);
    this.tail = e.length >= B ? Buffer.from(e.subarray(-B)) : Buffer.concat([this.tail, e]).subarray(-B);
  }
  async addFrom(e, n) {
    let r = Buffer.alloc(Math.min(n, 1048576));
    for (let a = 0; a < n; ) {
      let { bytesRead: s } = await e.read(r, 0, Math.min(r.length, n - a), a);
      if (s === 0) break;
      this.add(r.subarray(0, s)), a += s;
    }
  }
  markers() {
    return import_chunk_trwykz8a.Th.filter((e) => this.found.has(e));
  }
}
var _ = import_fs.constants.O_NOFOLLOW ?? 0, bt = 8388608, ole = 5368709120, Uhs = "5GB", o4 = 67108864;
function SDi() {
  return (0, import_chunk_zsz02y6d.Ug)();
}
function R1n() {
  let e = (0, import_chunk_rb36kwbn.pk)()?.adoptShellOutputRoot;
  if (e !== void 0) return (0, import_path.join)(e, (0, import_chunk_f9x2f6cx.W)(), "tasks");
  let n = (0, import_chunk_trwykz8a.mn)();
  if (n.outputDir === void 0 || (0, import_chunk_f9x2f6cx.Y)()) n.outputDir = (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), (0, import_chunk_f9x2f6cx.W)(), "tasks");
  return n.outputDir;
}
function bDi(e) {
  return (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), e, "tasks");
}
function nbr() {
  return (0, import_chunk_rb36kwbn.pk)()?.adoptShellOutputRoot !== void 0 ? R1n() : ((0, import_chunk_f9x2f6cx.Y)() ? void 0 : (0, import_chunk_trwykz8a.mn)().outputDir) ?? (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), (0, import_chunk_f9x2f6cx.W)(), "tasks");
}
function vt() {
  let e = (0, import_chunk_trwykz8a.mn)();
  if (e.outputDir === void 0) {
    if ((0, import_chunk_rb36kwbn.pk)() !== null) return (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), (0, import_chunk_f9x2f6cx.W)(), "tasks");
    e.outputDir = (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), (0, import_chunk_f9x2f6cx.W)(), "tasks");
  }
  return e.outputDir;
}
function rbr(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("Task output is not written to disk in a diskless session");
  let n = (0, import_chunk_trwykz8a.mn)().outputPathBindings.get(e);
  if (n !== void 0) return n;
  let r = ogo(e);
  return (0, import_chunk_trwykz8a.mn)().outputPathBindings.set(e, r), r;
}
function ogo(e) {
  return (0, import_path.join)(R1n(), `${e}.output`);
}
function cp(e) {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("Task output has no file in a diskless session");
  let n = (0, import_chunk_trwykz8a.mn)().outputPathBindings.get(e);
  if (n !== void 0) return n;
  return (0, import_path.join)(vt(), `${e}.output`);
}
function x1n(e) {
  let n = (0, import_chunk_trwykz8a.mn)().pendingOutputOps;
  return n.add(e), e.finally(() => n.delete(e)).catch(() => {
  }), e;
}
var St = 16777216, I = `
[output omitted: it could not be written to disk]
`, Q = [50, 100, 200, 400, 800, 1600], G = Q.reduce((e, n) => e + n, 0);
class sgo {
  #p;
  #n = null;
  #t = [];
  #w = 0;
  #a = false;
  #e = 0;
  #r = 0;
  #i = false;
  #u = /* @__PURE__ */ new Set();
  #c = false;
  #s = null;
  #o = null;
  #l = null;
  #d = null;
  constructor(e, n) {
    this.#p = n ?? rbr(e);
  }
  append(e) {
    if (this.#a) return;
    if (this.#w += e.length, this.#w > ole) this.#a = true;
    let n = this.#a ? `
[output truncated: exceeded ${Uhs} disk cap]
` : e;
    if (this.#t.push(n), this.#e += n.length, !this.#l) this.#l = new Promise((r) => {
      this.#d = r;
    }), x1n(this.#O());
  }
  appendTrailer(e, n) {
    if (!this.#a) this.#s = n;
    this.append(e);
  }
  flush() {
    return this.#l ?? Promise.resolve();
  }
  get failing() {
    return this.#i;
  }
  get lostOutput() {
    return this.#c;
  }
  get unwrittenChars() {
    return this.#e;
  }
  cancel() {
    this.#r += 1, this.#t.length = 0, this.#e = 0, this.#s = null, this.#o?.abort(), this.#o = null;
  }
  async #f() {
    while (true) {
      try {
        if (!this.#n) this.#n = await QBt(this.#p);
        while (true) {
          let e = this.#r;
          try {
            await this.#m();
          } catch (n) {
            if (this.#r === e) this.#c = true, this.#t.unshift(I), this.#e += I.length;
            throw n;
          }
          if (this.#t.length === 0) break;
        }
      } finally {
        if (this.#n) {
          let e = this.#n;
          this.#n = null, await e.close();
        }
      }
      if (this.#t.length) continue;
      break;
    }
  }
  #m() {
    return this.#n.appendFile(this.#y());
  }
  #y() {
    let e = this.#t.splice(0, this.#t.length);
    this.#e = 0, this.#s = null;
    let n = 0;
    for (let s of e) n += Buffer.byteLength(s, "utf8");
    let r = Buffer.allocUnsafe(n), a = 0;
    for (let s of e) a += r.write(s, a, "utf8");
    return r;
  }
  async #O() {
    try {
      await this.#f(), this.#h();
    } catch (e) {
      if (this.#g(e) !== null) {
        if (!this.#i) this.#i = true, (0, import_chunk_w578pjby.t)(`Task output closing line delayed: its file is busy (EBUSY); trying again for up to ${G} ms`);
        for (let [n, r] of Q.entries()) {
          if (this.#o ??= new AbortController(), await (0, import_chunk_5appeerh.K)(r, this.#o.signal), this.#t.length === 0) return;
          let a = this.#r;
          try {
            await this.#f(), this.#h();
            return;
          } catch (s) {
            if (this.#t.length === 0 && this.#r !== a) return;
            let o = this.#g(s);
            if (o === null || n === Q.length - 1) {
              this.#k(s, o);
              return;
            }
          }
        }
        return;
      }
      if (!this.#i) this.#i = true, (0, import_chunk_w578pjby.t)(`Task output drain failed (will retry once): ${e}`, { level: "error" });
      if (this.#t.length > 0) try {
        await this.#f(), this.#h();
      } catch (n) {
        this.#k(n, null);
      }
    } finally {
      let e = this.#d;
      this.#l = null, this.#d = null, e();
    }
  }
  #h() {
    this.#i = false, this.#u.clear();
  }
  #g(e) {
    return (0, import_chunk_cg8dqz0a.x)() === "windows" && (0, import_chunk_jv7av99m.w)(e) === "EBUSY" ? this.#s : null;
  }
  #k(e, n) {
    let r = (0, import_chunk_jv7av99m.w)(e), a = r !== void 0 && import_chunk_jv7av99m.yVe.has(r) ? "exhaustion" : n ?? "unexpected", s = `${a}:${r ?? "no errno"}`;
    if (!this.#u.has(s)) switch (this.#u.add(s), a) {
      case "exhaustion":
        (0, import_chunk_w578pjby.t)(`Task output drain retry failed (${r}): ${e}`, { level: "error" });
        break;
      case "exited":
        (0, import_chunk_w578pjby.t)(`Task output closing line not written (EBUSY): the file was still busy after ${G} ms`, { level: "warn" });
        break;
      case "killed":
        (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(e, `closing line of a stopped shell command not written: output file still busy after ${G} ms`));
        break;
      case "unexpected":
        (0, import_chunk_k449cc64.i)(e);
        break;
    }
    if (this.#e > St) (0, import_chunk_w578pjby.t)(`Task output still cannot be written (${r ?? "no errno"}); dropped ${this.#e} chars of unwritten output`, { level: "error" }), this.#c = true, this.#t.length = 0, this.#t.push(I), this.#e = I.length, this.#s = null;
  }
}
function ht(e) {
  let n = (0, import_chunk_trwykz8a.mn)().diskOutputs.get(e);
  if (!n) n = new sgo(e), (0, import_chunk_trwykz8a.mn)().diskOutputs.set(e, n);
  return n;
}
function Dit(e, n) {
  ht(e).append(n);
}
function wan(e, n) {
  let r = ht(e);
  if (n === "killed") r.appendTrailer(`
[killed]
`, "killed");
  else r.appendTrailer(`
[exited with code ${n.exitCode ?? "unknown"}]
`, "exited");
}
async function wDi(e) {
  let n = (0, import_chunk_trwykz8a.mn)().diskOutputs.get(e);
  if (n) await n.flush();
}
function Lg(e) {
  return x1n((async () => {
    let n = (0, import_chunk_trwykz8a.mn)(), r = n.diskOutputs.get(e);
    if (r) {
      if (await r.flush(), r.failing && r.unwrittenChars > 0) (0, import_chunk_w578pjby.t)(`Task output writer evicted while failing; discarded ${r.unwrittenChars} chars of unwritten output`, { level: "error" });
      n.diskOutputs.delete(e);
    }
    obr(e);
  })());
}
function obr(e) {
  let n = (0, import_chunk_trwykz8a.mn)().outputPathBindings.get(e);
  if (n !== void 0 && (0, import_chunk_rb36kwbn.pk)() === null && n === (0, import_path.join)(R1n(), `${e}.output`)) (0, import_chunk_trwykz8a.mn)().outputPathBindings.delete(e);
}
async function kDi(e, n, r = bt) {
  try {
    let a = await v8e(cp(e));
    if (!a) return { content: "", newOffset: n };
    let s;
    try {
      s = await (0, import_chunk_w578pjby.oPt)(a, n, r);
    } finally {
      await a.close();
    }
    if (!s) return { content: "", newOffset: n };
    return { content: s.content, newOffset: n + s.bytesRead };
  } catch (a) {
    let s = (0, import_chunk_jv7av99m.w)(a);
    if (s === "ENOENT" || Ukt(a)) return { content: "", newOffset: n };
    if (s && import_chunk_jv7av99m.yVe.has(s)) (0, import_chunk_w578pjby.t)(`getTaskOutputDelta failed (${s}): ${a}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(a);
    return { content: "", newOffset: n };
  }
}
async function kan(e) {
  try {
    let n = await v8e(cp(e));
    if (!n) return 0;
    try {
      return (await n.stat()).size;
    } finally {
      await n.close();
    }
  } catch (n) {
    if (Ukt(n)) throw n;
    let r = (0, import_chunk_jv7av99m.w)(n);
    if (r === "ENOENT") return 0;
    if (r === "EACCES" || r === "EPERM") {
      let a = await (0, import_promises.lstat)(cp(e)).catch(() => null);
      if (a !== null && a.isFile() && (a.mode & 256) === 0) return a.size;
      k(cp(e), `output no longer measurable (${r})`);
    }
    if (r && import_chunk_jv7av99m.yVe.has(r)) (0, import_chunk_w578pjby.t)(`getTaskOutputSize failed (${r}): ${n}`, { level: "error" });
    else (0, import_chunk_k449cc64.i)(n);
    return 0;
  }
}
async function fZl(e, n) {
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  let r = (0, import_chunk_trwykz8a.mn)(), a = (0, import_chunk_4smdap7r.M)([...r.outputDir !== void 0 ? [r.outputDir] : [], ...[...r.outputPathBindings.values()].map((o) => (0, import_path.dirname)(o))]);
  if (a.length === 0) return;
  let s = e + import_path.sep;
  for (let o of a) {
    let l;
    try {
      l = await (0, import_promises.readdir)(o);
    } catch (u) {
      let f = (0, import_chunk_jv7av99m.w)(u);
      if (f !== "ENOENT") if (f && import_chunk_jv7av99m.yVe.has(f)) (0, import_chunk_w578pjby.t)(`repointTaskOutputSymlinks readdir failed (${f}): ${u}`, { level: "error" });
      else (0, import_chunk_k449cc64.i)(u);
      continue;
    }
    await Pt(o, l, s, e, n);
  }
}
async function Pt(e, n, r, a, s) {
  let o = (0, import_chunk_trwykz8a.mn)().linkedOutputs;
  for (let l of n) {
    if (!l.endsWith(".output")) continue;
    let u = (0, import_path.join)(e, l), f = o.get(u), c;
    try {
      c = (0, import_chunk_cg8dqz0a.x)() === "windows" ? void 0 : await N(u, { replaceLeaf: true });
      let h = c?.ioPath ?? u;
      if (f === void 0 && e === (0, import_chunk_trwykz8a.mn)().outputDir) f = await (0, import_promises.readlink)(h).then((g) => pt(u, h, g)).catch(() => {
        return;
      });
      if (f === void 0 || !f.startsWith(r)) continue;
      let p = s + f.slice(a.length), m = await et(h);
      if (m === null) continue;
      if (m !== f) k(u, "output symlink was re-pointed");
      if (await c?.recheckBeforeWrite(), await (0, import_promises.unlink)(h), o.get(u) === f) await rt(u, p);
      try {
        await c?.recheckBeforeWrite(), await (0, import_promises.symlink)(p, h).catch(async (g) => {
          if ((0, import_chunk_jv7av99m.w)(g) !== "EEXIST") throw g;
          let b = await (0, import_promises.readlink)(h).catch(() => {
            return;
          });
          if (b !== p && b !== o.get(u)) throw g;
        });
      } catch (g) {
        if (o.get(u) === p) o.delete(u);
        throw g;
      }
      if (await (0, import_promises.readlink)(h).catch(() => {
        return;
      }) === p) o.set(u, p);
    } catch (h) {
      if ((0, import_chunk_jv7av99m.w)(h) !== "ENOENT" && !Ukt(h)) (0, import_chunk_k449cc64.i)(h);
    } finally {
      await c?.close();
    }
  }
}
async function R(e, n, r = 0) {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("Task output is not written to disk in a diskless session");
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return await (0, import_promises.mkdir)((0, import_path.dirname)(e), { recursive: true }), (0, import_promises.open)(e, n.windowsFlags);
  let a = await N(e, { replaceLeaf: true });
  try {
    let s = await nt(a.ioPath);
    if (s?.isSymbolicLink()) {
      let u = await tt(e, a.ioPath);
      if (u === null) {
        if (n.relooked) k(e, "output leaf changed during open");
        return await a.close(), R(e, { ...n, relooked: true }, r);
      }
      if (n.exclusive || r > 0 || !F(u)) k(e, "output link is not appendable");
      return await R(u, { exclusive: n.exclusive, windowsFlags: n.windowsFlags }, r + 1);
    }
    if (s !== null && (!s.isFile() || s.nlink !== 1 && r === 0)) k(e, "existing output is not a plain file");
    await a.recheckBeforeWrite();
    let o = n.exclusive || s === null, l;
    try {
      l = await (0, import_chunk_865at33z.dz)(a.ioPath, import_fs.constants.O_WRONLY | import_fs.constants.O_APPEND | (o ? import_fs.constants.O_CREAT | import_fs.constants.O_EXCL : 0) | _ | (import_fs.constants.O_NONBLOCK ?? 0), (0, import_chunk_cg8dqz0a.x)());
    } catch (u) {
      if (!n.exclusive && (0, import_chunk_jv7av99m.w)(u) === "EEXIST" && !n.retried) return await a.close(), R(e, { ...n, retried: true }, r);
      throw u;
    }
    if (r > 0 && s === null) {
      let u = await l.stat();
      j.set(e, { dev: u.dev, ino: u.ino });
    }
    try {
      await it(l, s, e, { registeredIdentity: r > 0 ? wt(e) : void 0 });
    } catch (u) {
      throw await l.close().catch(() => {
      }), u;
    }
    return l;
  } catch (s) {
    throw q(s, e);
  } finally {
    await a.close();
  }
}
async function v8e(e, n = 0, r = false) {
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    let s = await nt(e);
    if (s === null) return null;
    if (s.isSymbolicLink()) {
      let l = await tt(e, e);
      if (l === null) {
        if (r) k(e, "output leaf changed during open");
        return v8e(e, n, true);
      }
      return ct(l, n, e);
    }
    if (!s.isFile()) k(e, "not a regular file");
    let o = await (0, import_promises.open)(e, "r");
    return await it(o, s, e, { anyLinkCount: true }), o;
  }
  let a;
  try {
    a = await N(e, { replaceLeaf: true, create: false });
  } catch (s) {
    if ((0, import_chunk_jv7av99m.w)(s) === "ENOENT") return null;
    throw s;
  }
  try {
    let s = await nt(a.ioPath);
    if (s === null) return null;
    if (s.isSymbolicLink()) {
      let l = await tt(e, a.ioPath);
      if (l === null) {
        if (r) k(e, "output leaf changed during open");
        return await a.close(), v8e(e, n, true);
      }
      return await ct(l, n, e);
    }
    if (n === 0 && s.isFile() && s.nlink === 0) return null;
    if (!s.isFile() || s.nlink !== 1 && n === 0) k(e, "not a regular nlink-1 file");
    await a.recheckBeforeWrite();
    let o = await (0, import_chunk_865at33z.dz)(a.ioPath, import_fs.constants.O_RDONLY | _ | (import_fs.constants.O_NONBLOCK ?? 0), (0, import_chunk_cg8dqz0a.x)());
    try {
      if (await it(o, s, e, { registeredIdentity: n > 0 ? wt(e) : void 0, unlinkedIsGone: n === 0 }) === "gone") return null;
    } catch (l) {
      throw await o.close().catch(() => {
      }), l;
    }
    return o;
  } catch (s) {
    if ((0, import_chunk_jv7av99m.w)(s) === "ENOENT") return null;
    throw q(s, e);
  } finally {
    await a.close();
  }
}
async function pt(e, n, r) {
  let a = (0, import_path.isAbsolute)(r) && (0, import_path.resolve)(r).startsWith((0, import_path.resolve)((0, import_chunk_hsqa3g9e.bh)()) + import_path.sep);
  if (!(0, import_path.isAbsolute)(r) || !F(r) && !a) return k(e, "output is an unregistered symlink of a shape this session does not create");
  let s = await (0, import_promises.lstat)(n);
  if (!s.isSymbolicLink() || s.ctimeMs >= (0, import_chunk_trwykz8a.mn)().linksInheritedBeforeFor((0, import_path.dirname)(e))) return k(e, "output is an unregistered symlink made during this session");
  return await rt(e, r), r;
}
async function tt(e, n) {
  let r = (0, import_chunk_trwykz8a.mn)().linkedOutputs.get(e);
  if (r === void 0) {
    if (!sbr(e)) return k(e, "output is an unregistered symlink outside any tasks directory");
    let s = await et(n);
    if (s === null) return null;
    r = await pt(e, n, s);
  }
  let a = await et(n);
  if (a === null) return null;
  if (a !== r) return k(e, "output symlink was re-pointed");
  return r;
}
async function et(e) {
  try {
    return await (0, import_promises.readlink)(e);
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) === "EINVAL") return null;
    throw n;
  }
}
async function ct(e, n, r) {
  if (F(e)) {
    if (n > 0) return k(r, "output links chain");
    return v8e(e, n + 1);
  }
  let a, s;
  try {
    let o = await (0, import_promises.realpath)(e);
    if (F(o)) return k(r, "output link leads back into the tasks tree");
    s = await (0, import_promises.lstat)(o), a = await (0, import_chunk_865at33z.dz)(o, import_fs.constants.O_RDONLY | _ | (import_fs.constants.O_NONBLOCK ?? 0), (0, import_chunk_cg8dqz0a.x)());
  } catch (o) {
    if (Ukt(o)) throw o;
    if ((0, import_chunk_jv7av99m.w)(o) === "ENOENT") return null;
    throw q(o, r);
  }
  try {
    let o = await a.stat();
    if (!o.isFile() || o.ino !== s.ino || o.dev !== s.dev) k(r, "link target is not a regular file");
  } catch (o) {
    throw await a.close().catch(() => {
    }), o;
  }
  return a;
}
function F(e) {
  let n = (0, import_chunk_zsz02y6d.Ug)();
  return e === n || e.startsWith(n.endsWith(import_path.sep) ? n : n + import_path.sep);
}
async function nt(e) {
  try {
    return await (0, import_promises.lstat)(e);
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) === "ENOENT") return null;
    throw n;
  }
}
var j = /* @__PURE__ */ new Map();
function wt(e) {
  let n = j.get(e);
  if (n === void 0) return k(e, "link target identity was never recorded");
  return n;
}
async function rt(e, n) {
  if (F(n)) await gt(n);
  (0, import_chunk_trwykz8a.mn)().linkedOutputs.set(e, n);
}
async function gt(e) {
  let n = await N(e, { replaceLeaf: true, create: false });
  try {
    let r = await (0, import_chunk_865at33z.dz)(n.ioPath, import_fs.constants.O_RDONLY | _ | (import_fs.constants.O_NONBLOCK ?? 0), (0, import_chunk_cg8dqz0a.x)()).catch((a) => {
      throw q(a, e);
    });
    try {
      let a = await r.stat();
      if (!a.isFile() || a.nlink !== 1) k(e, "link target is not a regular single-link file");
      j.set(e, { dev: a.dev, ino: a.ino });
    } finally {
      await r.close();
    }
  } finally {
    await n.close();
  }
}
async function it(e, n, r, a) {
  try {
    let s = await e.stat(), o = a?.registeredIdentity;
    if (a?.unlinkedIsGone && o === void 0 && !a.anyLinkCount && n !== null && s.isFile() && s.nlink === 0 && s.ino === n.ino && s.dev === n.dev) return await e.close().catch(() => {
    }), "gone";
    if (!s.isFile() || (o !== void 0 ? s.ino !== o.ino || s.dev !== o.dev : !a?.anyLinkCount && s.nlink !== 1) || n !== null && (s.ino !== n.ino || s.dev !== n.dev)) k(r, "output file identity changed");
    return "same";
  } catch (s) {
    throw await e.close().catch(() => {
    }), s;
  }
}
function q(e, n) {
  let r = (0, import_chunk_jv7av99m.w)(e);
  if (r === "ELOOP" || r === "EISDIR" || r === "ENOTDIR" || r === "ENXIO" || r === "EOPNOTSUPP" || r === "ENOTSUP") try {
    k(n, `open refused a swapped leaf (${r})`);
  } catch (a) {
    return a;
  }
  return e;
}
function Rt(e) {
  let n = st(), r = (0, import_path.resolve)(e);
  if (r.startsWith(n + import_path.sep)) return r;
  let a = (0, import_chunk_w578pjby.le)(), s = (0, import_path.dirname)((0, import_path.dirname)((0, import_path.dirname)((0, import_path.dirname)(r)))), { resolvedPath: o } = (0, import_chunk_w578pjby.no)(a, s);
  return (0, import_chunk_p1ewvgeh.Yo)(o) === (0, import_chunk_p1ewvgeh.Yo)(n) ? (0, import_path.join)(n, r.slice(s.length + 1)) : r;
}
function st() {
  return (0, import_path.dirname)((0, import_path.dirname)((0, import_path.dirname)((0, import_path.resolve)(R1n()))));
}
function sbr(e) {
  let n = st(), r = (0, import_chunk_w578pjby.le)(), a = new Set([n, (0, import_chunk_w578pjby.no)(r, n).resolvedPath].map((s) => (0, import_chunk_p1ewvgeh.Yo)(s)));
  return (0, import_chunk_w578pjby.Ei)(e).some((s) => {
    let o = (0, import_path.dirname)((0, import_path.resolve)(s));
    return (0, import_chunk_p1ewvgeh.Yo)((0, import_path.basename)(o)) === "tasks" && kt((0, import_path.basename)((0, import_path.dirname)(o))) && a.has((0, import_chunk_p1ewvgeh.Yo)((0, import_path.dirname)((0, import_path.dirname)((0, import_path.dirname)(o)))));
  });
}
function V() {
  let e = ["????????-????-????-????-????????????", "session_*", "cse_*"], n = (0, import_chunk_f9x2f6cx.W)();
  if (!(0, import_chunk_tsfdtsmv.Lit)(n) && /^[A-Za-z0-9._-]+$/.test(n)) e.push(n);
  return e;
}
function kt(e) {
  return (0, import_chunk_tsfdtsmv.Lit)(e) || e === (0, import_chunk_f9x2f6cx.W)();
}
function EDi(e) {
  let n = st(), r = (0, import_chunk_w578pjby.le)(), a = (0, import_chunk_4smdap7r.M)([n, (0, import_chunk_w578pjby.no)(r, n).resolvedPath]), s = /* @__PURE__ */ new Set(), o = (u, f) => {
    let c = u.endsWith(import_path.sep) ? u : u + import_path.sep;
    return (0, import_chunk_p1ewvgeh.Yo)(f).startsWith((0, import_chunk_p1ewvgeh.Yo)(c)) ? f.slice(c.length) : null;
  }, l = (u) => u.replaceAll("\\", "/");
  for (let u of (0, import_chunk_w578pjby.Ei)(e)) {
    let f = (0, import_path.resolve)(u);
    for (let c of a) {
      let h = (0, import_path.basename)(c);
      if ((0, import_chunk_p1ewvgeh.Yo)(f) === (0, import_chunk_p1ewvgeh.Yo)(c)) {
        for (let g of V()) s.add(`!/*/${g}/tasks/**`), s.add(`!**/${h}/*/${g}/tasks/**`);
        continue;
      }
      let p = o(f, c);
      if (p !== null) {
        for (let g of V()) s.add(`!/${l(p)}/*/${g}/tasks/**`), s.add(`!**/${h}/*/${g}/tasks/**`);
        continue;
      }
      let m = o(c, f);
      if (m !== null) {
        let g = m.split(import_path.sep);
        if (g.length === 1) for (let b of V()) s.add(`!/${b}/tasks/**`), s.add(`!**/${h}/${l(m)}/${b}/tasks/**`);
        else if (!kt(g[1] ?? "")) ;
        else if (g.length === 2) s.add("!/tasks/**"), s.add(`!**/${h}/${l(m)}/tasks/**`);
        else if ((0, import_chunk_p1ewvgeh.Yo)(g[2] ?? "") === "tasks") s.add("!**");
      }
    }
  }
  return [...s];
}
async function igo(e) {
  e = Rt(e);
  let n = await v8e(e);
  if (n === null) throw await (0, import_promises.lstat)(e), new import_chunk_jv7av99m.A(`task output ${e} is no longer available (the file it pointed to was removed)`, "task output link target removed");
  let r = (0, import_chunk_cg8dqz0a.x)();
  return { ioPath: (r === "linux" || r === "wsl") && await (0, import_promises.readlink)(`/proc/self/fd/${n.fd}`).then(() => true, () => false) ? (0, import_chunk_865at33z.phe)(n.fd) : r === "macos" ? `/dev/fd/${n.fd}` : e, canonicalPath: e, handle: n, close: () => n.close() };
}
var Bhs = 8192;
async function JBt(e) {
  return Ije(cp(e), Bhs);
}
async function Ije(e, n) {
  let r = await v8e(e);
  if (r === null) return { content: "", bytesRead: 0, bytesTotal: 0 };
  try {
    return await (0, import_chunk_w578pjby.LB)(r, n);
  } finally {
    await r.close();
  }
}
async function Ean(e) {
  let n = (0, import_chunk_trwykz8a.mn)().linkedOutputs.get(e);
  if ((0, import_chunk_trwykz8a.mn)().linkedOutputs.delete(e), n !== void 0) j.delete(n);
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    await (0, import_promises.unlink)(e);
    return;
  }
  let r;
  try {
    r = await N(e, { replaceLeaf: true, create: false });
  } catch (a) {
    if ((0, import_chunk_jv7av99m.w)(a) === "ENOENT") return;
    throw a;
  }
  try {
    await r.recheckBeforeWrite(), await (0, import_promises.unlink)(r.ioPath);
  } finally {
    await r.close();
  }
}
var $t = new Uint8Array([10]);
async function vDi(e) {
  let n = `${e}.${(0, import_crypto.randomBytes)(6).toString("hex")}.probe`;
  try {
    let r;
    try {
      r = await R(n, { exclusive: true, windowsFlags: "wx" });
    } catch {
      return null;
    }
    try {
      await r.write($t);
    } finally {
      await r.close();
    }
    return null;
  } catch (r) {
    return (0, import_chunk_jv7av99m.w)(r) ?? null;
  } finally {
    await Ean(n).catch((r) => {
      (0, import_chunk_w578pjby.t)(`probeTaskOutputWrite: could not delete ${n}: ${(0, import_chunk_jv7av99m.d)(r)}`);
    });
  }
}
async function TDi(e, n) {
  let r = await R(e, { exclusive: false, windowsFlags: "w" });
  try {
    await r.truncate(0), await r.writeFile(n);
  } finally {
    await r.close();
  }
}
async function dt(e, n) {
  try {
    return await (0, import_chunk_865at33z.NC)(e, [e], { createParents: n?.create ?? true, ...n?.replaceLeaf && { leaf: "replace" } });
  } catch (r) {
    if (r instanceof import_chunk_2yx6c1y2.C_) {
      if (!await Ft()) {
        if (n?.create ?? true) await (0, import_promises.mkdir)((0, import_path.dirname)(e), { recursive: true, mode: 448 });
        return { ioPath: e, canonicalPath: e, readExisting: () => Promise.resolve(null), recheckBeforeWrite: () => {
        }, close: async () => {
        } };
      }
      (0, import_chunk_w578pjby.t)(`task output: pin of ${(0, import_path.dirname)(e)} refused: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" }), k(e, "tasks dir moved or linked", `restart Claude Code with CLAUDE_CODE_TMPDIR set to a fresh directory; or, if ${(0, import_chunk_zsz02y6d.PC)().replace(/[\\/]+$/, "")} is a stray directory or a symbolic link that should not be there, remove that entry itself (not what it points to) and restart`);
    }
    throw r;
  }
}
async function N(e, n) {
  let r = (0, import_path.dirname)(e), a = (0, import_path.basename)(e), s = T.get(r);
  if (s !== void 0) {
    let c = await s.catch(() => null);
    if (c !== null) {
      let p = await Promise.all([c.handleStat(), (0, import_promises.lstat)(r)]).then(([m, g]) => m.nlink > 0 && g.isDirectory() && g.ino === m.ino && g.dev === m.dev, () => false) ? c.viewFor(a) : null;
      if (p !== null) return p;
      if (T.get(r) === s) T.delete(r);
      await c.release();
    } else {
      if (T.get(r) === s) T.delete(r);
      return dt(e, n);
    }
  }
  let o = T.get(r);
  if (o !== void 0 && o !== s) return N(e, n);
  let l = (async () => {
    let c = await dt(e, n), h = /^\/proc\/self\/fd\/(\d+)\//.exec(c.ioPath);
    if (h === null) return c;
    let p = c.ioPath.slice(0, c.ioPath.length - a.length - 1), m = Number(h[1]), g = 0, b = false, at = false, ot = async () => {
      if (b && g === 0 && !at) at = true, await c.close();
    };
    return { handleStat: () => xt(m), release: () => (b = true, ot()), viewFor: (C) => {
      if (b) return null;
      g++;
      let lt = false;
      return { ioPath: `${p}/${C}`, canonicalPath: (0, import_path.join)(r, C), readExisting: (yt) => (0, import_chunk_865at33z.Xzt)(`${p}/${C}`, (0, import_path.join)(r, C), (0, import_chunk_cg8dqz0a.x)(), yt), recheckBeforeWrite: () => {
      }, close: async () => {
        if (!lt) lt = true, g--, await ot();
      } };
    } };
  })(), u = l.then((c) => "viewFor" in c ? c : Promise.reject(Error("not held")));
  u.catch(() => {
  }), T.set(r, u);
  let f;
  try {
    f = await l;
  } catch (c) {
    if (T.get(r) === u) T.delete(r);
    throw c;
  }
  if (!("viewFor" in f)) {
    if (T.get(r) === u) T.delete(r);
    return f;
  }
  if (T.size > Nt) {
    for (let [c, h] of T) if (c !== r) {
      T.delete(c), h.then((p) => p.release(), () => {
      });
      break;
    }
  }
  return f.viewFor(a) ?? Promise.reject(Error("unreachable: fresh hold retired"));
}
var Z;
async function Ft() {
  let e = (0, import_chunk_zsz02y6d.Ug)();
  if (Z?.root === e) return Z.ok;
  let n = await (0, import_promises.realpath)(e).then(() => true, (r) => (0, import_chunk_jv7av99m.w)(r) !== "EPERM");
  if (n) Z = { root: e, ok: Promise.resolve(true) };
  return n;
}
var T = /* @__PURE__ */ new Map();
function xt(e) {
  return new Promise((n, r) => (0, import_fs.fstat)(e, (a, s) => a ? r(a) : n(s)));
}
var Nt = 8;
function QBt(e, n = "a") {
  return R(e, { exclusive: false, windowsFlags: n });
}
function van(e) {
  return x1n((async () => {
    let n = rbr(e);
    return await (await R(n, { exclusive: true, windowsFlags: "wx" })).close(), n;
  })());
}
var mt = Symbol("taskOutputSwapRefused");
function Ukt(e) {
  return e instanceof Error && mt in e;
}
function k(e, n, r) {
  let a = `task output swap refused (${n}): ${e}` + (r === void 0 ? "" : `. To recover: ${r}.`), s = Object.assign(new import_chunk_jv7av99m.A(a, `task output swap refused (${n})`), { [mt]: true });
  (0, import_chunk_w578pjby.t)(a, { level: "error" });
  let o = `${n}\0${e}`;
  if (!U.has(o)) {
    if (U.size >= Lt) U.clear();
    U.add(o), (0, import_chunk_k449cc64.i)(s);
  }
  throw s;
}
var U = /* @__PURE__ */ new Set(), Lt = 256;
async function ago(e, n) {
  let r;
  try {
    r = await (0, import_promises.lstat)(e);
  } catch (l) {
    let u = (0, import_chunk_jv7av99m.w)(l);
    if (u === "ELOOP" || u === "ENOTDIR") k(e, `lstat refused a swapped path (${u})`);
    throw l;
  }
  if (!r.isFile() || r.nlink !== 1) k(e, "not a regular nlink-1 file");
  let a = false, s = r.size > n, o;
  try {
    o = await (0, import_promises.open)(e, a ? s ? "r+" : "r" : (s ? import_fs.constants.O_RDWR : import_fs.constants.O_RDONLY) | _ | (import_fs.constants.O_NONBLOCK ?? 0));
  } catch (l) {
    let u = (0, import_chunk_jv7av99m.w)(l);
    if (u === "ELOOP" || u === "EISDIR" || u === "ENOTDIR" || u === "ENXIO" || u === "EOPNOTSUPP" || u === "ENOTSUP") k(e, `open refused a swapped path (${u})`);
    throw l;
  }
  try {
    let l = await o.stat();
    if (!l.isFile() || l.dev !== r.dev || l.ino !== r.ino || l.nlink !== 1) k(e, "file changed between lstat and open");
    if (s && l.size > n) await o.truncate(n);
    return { handle: o, size: l.size };
  } catch (l) {
    throw await o.close(), l;
  }
}
async function Mje(e, n, r = ole, a = ole, s) {
  let o;
  try {
    o = await ago(cp(e), a);
  } catch (f) {
    if ((0, import_chunk_jv7av99m.w)(f) === "ENOENT") return { content: "", omittedBytes: 0 };
    throw f;
  }
  let { handle: l } = o, u = Math.min(o.size, ole, a, r);
  try {
    let f = Math.max(0, u - n), c = Buffer.allocUnsafe(u - f), h = 0;
    while (h < c.length) {
      let { bytesRead: m } = await l.read(c, h, c.length - h, f + h);
      if (m === 0) break;
      h += m;
    }
    await s?.addFrom(l, Math.min(f, o4)), s?.add(c.subarray(0, h));
    let p = 0;
    while (f > 0 && p < h && (c[p] & 192) === 128) p++;
    return { content: c.toString("utf8", p, h), omittedBytes: f + p };
  } finally {
    await l.close();
  }
}
async function ibr(e, n) {
  let r = new XBt(), a = await Mje(e, n, ole, ole, r);
  return { ...a, content: `${(0, import_chunk_trwykz8a.Lf)(r.markers(), a.content)}${a.content}` };
}
async function CDi(e, n, r, a) {
  let { handle: o, size: l } = await ago(e, r);
  try {
    let u = await (0, import_promises.open)(n, import_fs.constants.O_WRONLY | import_fs.constants.O_CREAT | import_fs.constants.O_TRUNC | _);
    try {
      let f = Buffer.alloc(1048576), c = 0;
      while (c < r) {
        let h = Math.min(f.length, r - c), { bytesRead: p } = await o.read(f, 0, h, c);
        if (p === 0) break;
        a.add(f.subarray(0, p));
        let m = 0;
        while (m < p) {
          let { bytesWritten: g } = await u.write(f, m, p - m, c + m);
          m += g;
        }
        c += p;
      }
    } finally {
      await u.close();
    }
    return l;
  } finally {
    await o.close();
  }
}
async function _t(e, n, r = e) {
  if (e === n) return true;
  try {
    if (!(await (0, import_promises.lstat)(r)).isFile()) return false;
    return await (0, import_promises.realpath)(r) === await (0, import_promises.realpath)(n);
  } catch {
    return false;
  }
}
function abr(e, n, r) {
  return x1n((async () => {
    try {
      let a = rbr(e), s = await N(a, { replaceLeaf: true });
      try {
        if (await _t(a, n, s.ioPath)) {
          let l = await (0, import_promises.readlink)(s.ioPath).catch(() => n);
          return await rt(a, F(l) ? l : n), r?.("noop"), a;
        }
        if (F(n)) await gt(n);
        let o = (0, import_chunk_trwykz8a.mn)().linkedOutputs;
        await s.recheckBeforeWrite(), await (0, import_promises.unlink)(s.ioPath).catch((l) => {
          if ((0, import_chunk_jv7av99m.w)(l) !== "ENOENT") throw l;
        }), o.set(a, n);
        try {
          try {
            await s.recheckBeforeWrite(), await (0, import_promises.symlink)(n, s.ioPath);
          } catch (l) {
            if ((0, import_chunk_jv7av99m.w)(l) !== "EEXIST") throw l;
            await s.recheckBeforeWrite(), await (0, import_promises.unlink)(s.ioPath).catch((u) => {
              if ((0, import_chunk_jv7av99m.w)(u) !== "ENOENT") throw u;
            }), await s.recheckBeforeWrite(), await (0, import_promises.symlink)(n, s.ioPath);
          }
        } catch (l) {
          if (o.get(a) === n) o.delete(a);
          throw l;
        }
        if (await (0, import_promises.readlink)(s.ioPath).catch(() => {
          return;
        }) === n) o.set(a, n);
      } finally {
        await s.close();
      }
      return r?.("symlink"), a;
    } catch (a) {
      let s = (0, import_chunk_jv7av99m.w)(a);
      if (s && import_chunk_jv7av99m.yVe.has(s) || s === "EROFS") (0, import_chunk_w578pjby.t)(`initTaskOutputAsSymlink failed (${s}): ${a}`, { level: "error" });
      else if (!Ukt(a)) (0, import_chunk_k449cc64.i)(a);
      return van(e);
    }
  })());
}
