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
var chunk_gygwqn6z_exports = {};
__export(chunk_gygwqn6z_exports, {
  BYs: () => BYs,
  EIa: () => EIa,
  _qr: () => _qr,
  gqr: () => gqr,
  iKo: () => iKo,
  kIa: () => kIa
});
module.exports = __toCommonJS(chunk_gygwqn6z_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_mqj2w7ns = require("/$bunfs/root/chunk-mqj2w7ns.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_tty = require("tty");
var Q = 4194304, L = 25, D = Buffer.from("\x1B[0m" + import_chunk_mqj2w7ns.k5e), s = /* @__PURE__ */ new WeakMap(), v = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Set(), (e) => e.clear());
function BYs(e = 1) {
  if (!(e === 1 ? process.stdout.isTTY : (0, import_tty.isatty)(e))) return { reason: "not_a_tty" };
  let n;
  switch ((0, import_chunk_cg8dqz0a.x)()) {
    case "linux":
    case "wsl":
      n = `/proc/self/fd/${e}`;
      break;
    case "macos": {
      let d = I(e);
      if (d === void 0) return { reason: "ttyname_unavailable" };
      n = d;
      break;
    }
    default:
      return { reason: "unsupported_platform" };
  }
  let o;
  try {
    o = (0, import_fs.openSync)(n, import_fs.constants.O_WRONLY | import_fs.constants.O_NONBLOCK | import_fs.constants.O_NOCTTY | import_chunk_jxja0v0z.cr);
  } catch (d) {
    return { reason: "open_failed", errno: (0, import_chunk_jv7av99m.w)(d) };
  }
  let r = { reason: "not_same_tty" };
  try {
    let d = (0, import_fs.fstatSync)(o), p = (0, import_fs.fstatSync)(e);
    if (d.rdev === p.rdev && d.ino === p.ino) return { fd: o };
  } catch (d) {
    r = { reason: "fstat_failed", errno: (0, import_chunk_jv7av99m.w)(d) };
  }
  try {
    (0, import_fs.closeSync)(o);
  } catch {
  }
  return r;
}
function S(e, n, o) {
  if ((0, import_chunk_y53wbr8a.a)("tengu_nonblocking_stdout", { result: (0, import_chunk_78g0060s.f)(e), reason: n === void 0 ? void 0 : (0, import_chunk_78g0060s.f)(n), errno: o }), e === "installed") (0, import_chunk_cqa9hrgx.u)("terminal_nonblocking_stdout");
  else if (n !== "not_a_tty" && n !== "unsupported_platform") (0, import_chunk_cqa9hrgx.l)("terminal_nonblocking_stdout", n ?? "write_failed", o === void 0 ? void 0 : { errno: o });
}
function I(e) {
  try {
    return Bun.ant.ttyName(e) ?? void 0;
  } catch {
    return;
  }
}
function kIa(e, n = BYs) {
  let o = s.get(process.stdout);
  if (o?.installedWrite !== void 0) return o.onEpisodeEnd = e, b(o);
  let r = n();
  if (r.fd === void 0) {
    if ((0, import_chunk_w578pjby.t)(`nonBlockingStdout: not installed (${r.reason}${r.errno ? `, ${r.errno}` : ""})`), !v.has(r.reason)) v.add(r.reason), S("skipped", r.reason, (0, import_chunk_jv7av99m.Cy)(r.errno));
    return null;
  }
  let d = { fd: r.fd, originalWrite: process.stdout.write, installedWrite: void 0, queue: [], queuedBytes: 0, dropping: false, timer: void 0, retryMs: 0, episode: { startedMs: 0, peakQueuedBytes: 0, droppedBytes: 0 }, onEpisodeEnd: e, onExit: () => m(d) }, p = (c, y, R) => {
    let _ = typeof y === "string" ? y : void 0, q = typeof y === "function" ? y : R;
    if (d.installedWrite === void 0) return d.originalWrite.call(process.stdout, c, _, q);
    return P(d, typeof c === "string" ? Buffer.from(c, _) : Buffer.from(c)), q?.(), true;
  };
  return d.installedWrite = p, process.stdout.write = p, s.set(process.stdout, d), process.on("exit", d.onExit), (0, import_chunk_w578pjby.t)("nonBlockingStdout: active"), S("installed"), b(d);
}
function b(e) {
  return { flush: () => m(e), restore: () => h(e), isActive: () => e.installedWrite !== void 0, queuedBytes: () => e.queuedBytes };
}
function EIa({ envOverride: e, isAnt: n, remoteFlag: o }) {
  return e ?? (n || o());
}
function gqr() {
  return s.get(process.stdout)?.installedWrite !== void 0;
}
function _qr() {
  let e = s.get(process.stdout);
  if (e?.installedWrite !== void 0) h(e);
}
function iKo() {
  let e = s.get(process.stdout);
  if (e?.installedWrite !== void 0) m(e);
}
function W(e, n) {
  try {
    return (0, import_fs.writeSync)(e, n);
  } catch (o) {
    if ((0, import_chunk_jv7av99m.w)(o) === "EAGAIN") return 0;
    throw o;
  }
}
function P(e, n) {
  if (n.length === 0) return;
  if (e.queue.length === 0) {
    let o;
    try {
      o = W(e.fd, n);
    } catch (r) {
      k(e, r), process.stdout.write(n);
      return;
    }
    if (o === n.length) return;
    e.episode = { startedMs: performance.now(), peakQueuedBytes: 0, droppedBytes: 0 }, B(e, n.subarray(o)), T(e, o > 0);
    return;
  }
  if (e.dropping) {
    e.episode.droppedBytes += n.length;
    return;
  }
  if (e.queuedBytes + n.length > Q) {
    e.episode.droppedBytes += e.queuedBytes + n.length, e.queue = [], e.queuedBytes = 0, e.dropping = true, (0, import_chunk_w578pjby.t)(`nonBlockingStdout: terminal stopped reading; dropped ${e.episode.droppedBytes} queued bytes, will repaint when it resumes`, { level: "warn" }), B(e, D);
    return;
  }
  B(e, n);
}
function B(e, n) {
  if (e.queue.push(n), e.queuedBytes += n.length, e.queuedBytes > e.episode.peakQueuedBytes) e.episode.peakQueuedBytes = e.queuedBytes;
}
function T(e, n) {
  e.retryMs = n ? 0 : Math.min(Math.max(1, e.retryMs * 2), L), e.timer = setTimeout(U, e.retryMs, e), e.timer.unref();
}
function U(e) {
  e.timer = void 0;
  let n = false;
  try {
    while (e.queue.length > 0) {
      if (n && e.queue.length > 1) e.queue = [Buffer.concat(e.queue, e.queuedBytes)];
      let o = e.queue[0], r = W(e.fd, o);
      if (r === 0) {
        T(e, n);
        return;
      }
      if (n = true, e.queuedBytes -= r, r < o.length) e.queue[0] = o.subarray(r);
      else e.queue.shift();
    }
  } catch (o) {
    k(e, o);
    return;
  }
  M(e, "drain");
}
function M(e, n) {
  e.dropping = false, e.retryMs = 0;
  try {
    e.onEpisodeEnd({ durationMs: Math.round(performance.now() - e.episode.startedMs), peakQueuedBytes: e.episode.peakQueuedBytes, droppedBytes: e.episode.droppedBytes, endedBy: n });
  } catch (o) {
    (0, import_chunk_k449cc64.i)(o);
  }
}
function m(e) {
  if (e.timer !== void 0) clearTimeout(e.timer), e.timer = void 0;
  if (e.queue.length === 0) return;
  let n = e.queue;
  e.queue = [], e.queuedBytes = 0;
  try {
    for (let o of n) e.originalWrite.call(process.stdout, o);
  } catch (o) {
    k(e, o);
    return;
  }
  M(e, "flush");
}
function k(e, n) {
  (0, import_chunk_w578pjby.t)(`nonBlockingStdout: uninstalling (${n})`), e.queue = [], e.queuedBytes = 0, h(e), S("abandoned", void 0, (0, import_chunk_jv7av99m.Cr)(n));
}
function h(e) {
  if (e.installedWrite === void 0) return;
  if (process.stdout.write === e.installedWrite) process.stdout.write = e.originalWrite;
  e.installedWrite = void 0, s.delete(process.stdout), process.off("exit", e.onExit);
  try {
    (0, import_fs.closeSync)(e.fd);
  } catch {
  }
  m(e);
}
