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
var chunk_ndrgvsn7_exports = {};
__export(chunk_ndrgvsn7_exports, {
  $E: () => $E,
  Esa: () => Esa,
  KLr: () => KLr,
  KLs: () => KLs,
  Oce: () => Oce,
  Tsa: () => Tsa,
  XLr: () => XLr,
  YLr: () => YLr,
  YLs: () => YLs,
  a3n: () => a3n,
  bsa: () => bsa,
  d3n: () => d3n,
  es: () => es,
  fLo: () => fLo,
  ix: () => ix,
  kQe: () => kQe,
  ksa: () => ksa,
  l3n: () => l3n,
  q6e: () => q6e,
  qLr: () => qLr,
  qLs: () => qLs,
  uLo: () => uLo,
  vsa: () => vsa,
  wsa: () => wsa
});
module.exports = __toCommonJS(chunk_ndrgvsn7_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_psw95195 = require("/$bunfs/root/chunk-psw95195.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_path = require("path");
var f = "exit-cause", KLr = "session_in_use", qLr = "sign_in_unavailable", p = "exit-detail", _ = 2e4;
function ix(e, t) {
  let n = t ?? process.env.CLAUDE_JOB_DIR;
  if (!n) return;
  try {
    y((0, import_path.join)(n, f), e);
  } catch {
  }
}
function KLs(e, t, n) {
  let r = n ?? process.env.CLAUDE_JOB_DIR, o = t.trim();
  if (!r || !o || o.length > _) return;
  try {
    y((0, import_path.join)(r, p), `${e}
${o}`);
  } catch {
  }
}
function y(e, t) {
  (0, import_fs.rmSync)(e, { force: true }), (0, import_fs.writeFileSync)(e, t, { mode: 384, flag: "wx" });
}
function a3n(e) {
  a((0, import_path.join)(e, f)), a((0, import_path.join)(e, p));
}
function bsa(e) {
  return a((0, import_path.join)(e, f));
}
function wsa(e, t) {
  let n = a((0, import_path.join)(e, p));
  if (!n) return;
  let r = n.indexOf(`
`);
  return r !== -1 && n.slice(0, r) === t ? n.slice(r + 1) : void 0;
}
function a(e) {
  try {
    let t = (0, import_fs.lstatSync)(e);
    if (!t.isFile() || t.size > 65536) {
      try {
        (0, import_fs.rmSync)(e, { recursive: true, force: true });
      } catch {
      }
      return;
    }
    let n = (0, import_fs.readFileSync)(e, "utf8");
    return (0, import_fs.unlinkSync)(e), n;
  } catch {
    return;
  }
}
var uLo = /* @__PURE__ */ new Set(["EPIPE", "EIO", "ENXIO", "EBADF"]), P = /* @__PURE__ */ new Set(["EISDIR", "ENOTCONN", "ECONNRESET"]);
function l3n(e) {
  let t = e !== null && typeof e === "object" && "code" in e && typeof e.code === "string" ? e.code : void 0;
  return t !== void 0 && (P.has(t) || uLo.has(t));
}
function q6e(e, t) {
  e.on("error", (n) => {
    if (n.code !== void 0 && uLo.has(n.code)) {
      try {
        e.destroy?.();
      } catch {
      }
      t?.(n.code);
    }
  });
}
function ksa(e) {
  q6e(process.stdin, (t) => e("stdin", t)), q6e(process.stdout, (t) => e("stdout", t)), process.stdout.on("error", (t) => {
    i.markErrored(t.code);
  }), q6e(process.stderr), process.stderr.on("error", () => {
    m.giveUpOnUnflushed();
  });
}
function fLo(e, t, n) {
  if (e.destroyed || e.writableEnded) return "dropped";
  return e.write(t, n) === false ? "backed-up" : "accepted";
}
class h {
  everWritten = false;
  drainPromise = void 0;
  bytesQueued = 0;
  bytesFlushed = 0;
  notifyFlushProgress = void 0;
  notifyExternallyClocked = void 0;
  externallyClockedPromise = void 0;
  externallyClocked = false;
  errored = false;
  fullDiskCode = void 0;
  flushConfirmedPromise = void 0;
  flushCloseListener = void 0;
  markEverWritten() {
    this.everWritten = true;
  }
  recordQueued(e) {
    this.bytesQueued += e;
  }
  recordFlushed(e) {
    this.bytesFlushed += e, this.notifyFlushProgress?.();
  }
  markErrored(e) {
    if (this.errored = true, e === "ENOSPC" || e === "EDQUOT") this.fullDiskCode ??= e;
    this.notifyFlushProgress?.();
  }
  getFullDiskCode() {
    return this.fullDiskCode;
  }
  outstandingBytes() {
    return process.stdout.destroyed || this.errored ? 0 : this.bytesQueued - this.bytesFlushed;
  }
  endStdoutOnce() {
    if (this.drainPromise === void 0) {
      let e = process.stdout;
      if (e.isTTY || e.destroyed || e.writableEnded || !this.everWritten) return;
      this.drainPromise = new Promise((t) => e.end(t));
    }
    return this.drainPromise;
  }
  fullyFlushed() {
    if (this.flushConfirmedPromise === void 0) this.flushConfirmedPromise = new Promise((e) => {
      let t = () => {
        if (this.outstandingBytes() <= 0) this.notifyFlushProgress = void 0, e();
      };
      this.notifyFlushProgress = t, this.flushCloseListener = t, process.stdout.once("close", t), t();
    });
    return this.flushConfirmedPromise;
  }
  isExternallyClocked() {
    return this.externallyClocked;
  }
  ensureExternallyClockedPromise() {
    return this.externallyClockedPromise ??= new Promise((e) => {
      this.notifyExternallyClocked = e;
    });
  }
  markExternallyClocked() {
    this.externallyClocked = true, this.ensureExternallyClockedPromise(), this.notifyExternallyClocked?.(), this.notifyExternallyClocked = void 0;
  }
  reset() {
    if (this.flushCloseListener !== void 0) process.stdout.removeListener("close", this.flushCloseListener);
    Object.assign(this, new h());
  }
}
var i = new h();
function es(e) {
  i.markEverWritten();
  let t = Buffer.byteLength(e);
  if (fLo(process.stdout, e, () => {
    i.recordFlushed(t);
  }) !== "dropped") i.recordQueued(t);
}
async function d3n(e = 2e3, { scaleBudgetToQueue: t = true } = {}) {
  let n = i.endStdoutOnce();
  if (n === void 0) return;
  let r = Promise.all([n, i.fullyFlushed()]);
  await (0, import_chunk_5appeerh.qt)(t ? Promise.race([r, b(e)]) : r, t ? YLs(e) : e, "stdout drain timeout (exit)").catch(() => {
  });
}
function Oce() {
  i.markExternallyClocked();
}
function Esa() {
  return i.isExternallyClocked();
}
function b(e) {
  return i.ensureExternallyClockedPromise().then(() => (0, import_chunk_5appeerh.K)(e));
}
var T = 262144, w = 3e4;
function qLs() {
  return i.outstandingBytes();
}
function vsa() {
  return i.getFullDiskCode();
}
function YLs(e = 2e3) {
  return Math.min(w, Math.max(e, Math.ceil(qLs() * 1e3 / T)));
}
var C = 1048576, O = 1e4, A = (0, import_chunk_69qhefwa.$ce)((e) => e());
class E {
  unflushed = { length: 0, since: 0 };
  droppedCount = 0;
  droppedTotal = 0;
  write(e, t) {
    let n = this.unflushed;
    if (t && n.length >= C && (this.droppedCount > 0 || Date.now() - n.since >= O)) {
      this.droppedCount++, this.droppedTotal++;
      return;
    }
    let r = "writing", o = () => {
      let d = r === "unflushed";
      if (r = "flushed", d) n.length -= e.length, this.reportDropped();
    };
    if (A(() => fLo(process.stderr, e, o)) === "backed-up" && r === "writing") {
      if (r = "unflushed", n.length === 0) n.since = Date.now();
      n.length += e.length;
    }
  }
  giveUpOnUnflushed() {
    this.unflushed = { length: 0, since: 0 }, this.reportDropped();
  }
  getDroppedTotal() {
    return this.droppedTotal;
  }
  reset() {
    Object.assign(this, new E());
  }
  reportDropped() {
    if (this.droppedCount > 0 && this.unflushed.length < C) {
      let e = this.droppedCount;
      this.droppedCount = 0, this.write(`[stderr messages dropped before this line: ${e}. Whatever reads this stderr had not caught up for over 10 s and 1 MiB of output.]
`, false);
    }
  }
}
var m = (0, import_chunk_t57w17k7.de)(new E(), (e) => e.reset());
function $E(e, { mayDrop: t = false } = {}) {
  m.write(e, t);
}
function Tsa() {
  return m.getDroppedTotal();
}
function kQe(e, t = 1) {
  if (console.error(e), !(0, import_chunk_psw95195.xjl)()) ix("exit_with_error");
  process.exit(t);
}
function YLr(e, t) {
  let n = e;
  if (n.readableEnded || n.destroyed) return Promise.resolve(false);
  return new Promise((r) => {
    let o = (l) => {
      clearTimeout(c), e.off("end", s), e.off("close", s), e.off("data", d), r(l);
    }, s = () => o(false), d = () => {
      if (clearTimeout(c), n.readableEnded || n.destroyed) o(false);
    }, c = setTimeout(o, t, true);
    e.once("end", s), e.once("close", s), e.once("data", d);
  });
}
async function* XLr(e) {
  if (e.readableEnded || e.destroyed) return;
  let t = Symbol("stream-closed"), n = false, r = null, o = () => {
    n = true, r?.();
  };
  e.once("close", o);
  let s = e[Symbol.asyncIterator]();
  try {
    while (!n) {
      let d = s.next();
      d.catch(() => {
      });
      let c = new Promise((g) => {
        r = () => g(t);
      }), l = await Promise.race([d, c]);
      if (r = null, l === t || l.done) return;
      yield String(l.value);
    }
  } finally {
    e.off("close", o), s.return?.().catch(() => {
    });
  }
}
