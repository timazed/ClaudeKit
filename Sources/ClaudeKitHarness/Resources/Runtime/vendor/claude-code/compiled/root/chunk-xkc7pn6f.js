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
var chunk_xkc7pn6f_exports = {};
__export(chunk_xkc7pn6f_exports, {
  $J: () => $J,
  AO: () => AO,
  BVr: () => BVr,
  CZn: () => CZn,
  DYt: () => DYt,
  G2: () => G2,
  P6o: () => P6o,
  TZn: () => TZn,
  WVr: () => WVr,
  aPa: () => aPa,
  cHt: () => cHt,
  dHt: () => dHt,
  iPa: () => iPa,
  jVr: () => jVr,
  jvn: () => jvn,
  nPa: () => nPa,
  oPa: () => oPa,
  rPa: () => rPa,
  sPa: () => sPa,
  x6o: () => x6o,
  xht: () => xht
});
module.exports = __toCommonJS(chunk_xkc7pn6f_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_81q3wevd = require("/$bunfs/root/chunk-81q3wevd.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
async function dHt(e, r = {}) {
  if (!(0, import_chunk_rb36kwbn.Aee)(e)) return "eperm";
  try {
    process.kill(e, r.signal ?? "SIGTERM");
  } catch (n) {
    if ((0, import_chunk_jv7av99m.w)(n) === "EPERM") return "eperm";
    return "exited";
  }
  let o = Date.now() + (r.gracefulMs ?? 2e3);
  while (true) {
    let n = Date.now() >= o;
    try {
      process.kill(e, 0);
    } catch {
      return "exited";
    }
    if (await (0, import_chunk_rb36kwbn.sFe)(e)) return "exited";
    if (n) return "timed-out";
    await (0, import_chunk_5appeerh.K)(50);
  }
}
var L = "daemon.lock";
function G2() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), L);
}
function cHt() {
  return import_chunk_hkvzj051.at.state("daemon-lock");
}
function D(e) {
  return e === "EISDIR" || e === "ENXIO";
}
class g {
  logged = false;
  markLogged() {
    if (this.logged) return false;
    return this.logged = true, true;
  }
}
var S = new import_chunk_2904xtvq.j(() => new g());
function I() {
  return S.of((0, import_chunk_f9x2f6cx.N)().host);
}
async function E() {
  let e = await (0, import_promises.lstat)(G2()).catch(() => {
    return;
  });
  return e !== void 0 && e.isSymbolicLink();
}
async function y(e) {
  let r = G2(), o = await (0, import_promises.lstat)(r).catch(() => {
    return;
  });
  if (o === void 0 || o.isFile()) return;
  let n = o.isDirectory() ? "directory" : o.isFIFO() ? "fifo" : o.isSocket() ? "socket" : o.isSymbolicLink() ? "symlink" : "other non-regular node";
  if (I().markLogged()) (0, import_chunk_w578pjby.t)(`[DaemonLock] ${n} at the lock path (${e}) \u2014 removing it as the legacy path does`, { level: "warn" });
  await (0, import_promises.rm)(r, { recursive: true, force: true }).catch(() => {
  });
}
var C = 65536;
async function nPa(e, r) {
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0) {
    let o = () => r.write(cHt(), (0, import_chunk_w578pjby._)(e, null, 2), { precondition: { type: "ifAbsent" }, mode: 438 & ~process.umask() }), n = await o();
    for (let i of [0, 1]) {
      if (n.ok) return true;
      if (n.error.code === "AlreadyExists") return false;
      let a = "telemetryCode" in n.error ? n.error.telemetryCode : void 0;
      if (n.error.code !== "Failed" || !(0, import_chunk_81q3wevd._7)(a)) break;
      if (a === "ELOOP") {
        if (await E()) return false;
        break;
      }
      if (i === 1) break;
      await y(a), n = await o();
    }
    if (n.ok) return true;
    throw new import_chunk_jv7av99m.A(`[DaemonLock] Failed to acquire daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 acquire write failed");
  }
  try {
    return await (0, import_chunk_q7qjcthc.l2)(G2(), (0, import_chunk_w578pjby._)(e, null, 2)), true;
  } catch (o) {
    if ((0, import_chunk_jv7av99m.w)(o) === "EEXIST") return false;
    throw o;
  }
}
async function rPa(e, r) {
  let o = await $J(r);
  if (!o || o.pid !== e.pid || o.startedAt !== e.startedAt) return;
  await x6o({ ...o, bgDisabled: true }, r);
}
async function $J(e) {
  let r;
  if (e) {
    let n = await e.read([cHt()]);
    if (!n.ok) {
      if (!(n.error.code === "Failed" && (n.error.telemetryCode === "ENXIO" || n.error.telemetryCode === "EFBIG" || n.error.telemetryCode === "ELOOP" || n.error.telemetryCode === "ENAMETOOLONG"))) throw new import_chunk_jv7av99m.A(`[DaemonLock] Failed to read daemon lock: ${n.error.code}${"telemetryCode" in n.error && n.error.telemetryCode ? ` (${n.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock read failed");
      let s = await e.delete(cHt());
      if (!s.ok && s.error.code === "Failed") {
        let m = "telemetryCode" in s.error ? s.error.telemetryCode : void 0;
        if (D(m)) await y(m);
      }
      return null;
    }
    let i = n.value.items[0];
    if (!i.found) return null;
    if (i.totalBytes > C) return await e.delete(cHt()), null;
    r = Buffer.from(i.value).toString("utf8");
    let a = (0, import_chunk_0jve1fep.et)(r, false);
    if (a && typeof a === "object") {
      let c = a;
      if (typeof c.pid === "number" && typeof c.version === "string") return a;
    }
    return null;
  }
  try {
    let n = await (0, import_promises.lstat)(G2());
    if (!n.isFile() || n.size > 65536) return await (0, import_promises.rm)(G2(), { recursive: true, force: true }).catch(() => {
    }), null;
    r = await (0, import_promises.readFile)(G2(), "utf8");
  } catch (n) {
    if ((0, import_chunk_jv7av99m.J)(n)) return null;
    throw n;
  }
  let o = (0, import_chunk_0jve1fep.et)(r, false);
  if (o && typeof o === "object") {
    let n = o;
    if (typeof n.pid === "number" && typeof n.version === "string") return o;
  }
  return null;
}
async function x6o(e, r) {
  if (r) {
    let i = await r.write(cHt(), (0, import_chunk_w578pjby._)(e, null, 2), { mode: 438 & ~process.umask() });
    if (!i.ok) {
      let c = "telemetryCode" in i.error ? i.error.telemetryCode : void 0;
      if (c === "LockContended" || c === "LockSuspect") {
        let s = await $J(r);
        if (s?.pid !== e.pid || s?.startedAt !== e.startedAt) return false;
        i = await r.write(cHt(), (0, import_chunk_w578pjby._)(e, null, 2), { mode: 438 & ~process.umask() });
      }
      if (!i.ok) throw new import_chunk_jv7av99m.A(`[DaemonLock] Failed to replace daemon lock: ${i.error.code}${"telemetryCode" in i.error && i.error.telemetryCode ? ` (${i.error.telemetryCode})` : ""}`, "[DaemonLock] v5 replace write failed");
    }
    let a = await $J(r);
    return a?.pid === e.pid && a?.startedAt === e.startedAt;
  }
  let o = await (0, import_chunk_q7qjcthc.gL)(G2(), (0, import_chunk_w578pjby._)(e, null, 2));
  try {
    await (0, import_promises.rename)(o, G2());
  } catch (i) {
    let a = (0, import_chunk_jv7av99m.w)(i);
    if (a === "EEXIST" || a === "EPERM") {
      await (0, import_promises.unlink)(G2()).catch(() => {
      });
      try {
        await (0, import_promises.rename)(o, G2());
      } catch (c) {
        await (0, import_promises.unlink)(o).catch(() => {
        });
        let s = (0, import_chunk_jv7av99m.w)(c);
        if (s === "EEXIST" || s === "EPERM") return false;
        throw c;
      }
    } else throw await (0, import_promises.unlink)(o).catch(() => {
    }), i;
  }
  let n = await $J(r);
  return n?.pid === e.pid && n?.startedAt === e.startedAt;
}
async function oPa(e) {
  if (e) {
    let r = await e.delete(cHt());
    if (!r.ok) throw new import_chunk_jv7av99m.A(`[DaemonLock] Failed to remove daemon lock: ${r.error.code}${"telemetryCode" in r.error && r.error.telemetryCode ? ` (${r.error.telemetryCode})` : ""}`, "[DaemonLock] v5 lock delete failed");
    return;
  }
  try {
    await (0, import_promises.unlink)(G2());
  } catch (r) {
    if (!(0, import_chunk_jv7av99m.J)(r)) throw r;
  }
}
async function BVr(e) {
  let r;
  try {
    r = await (0, import_promises.readFile)(`/proc/${e}/cmdline`, "utf8");
  } catch {
    return true;
  }
  let o = r.split("\0");
  return o[0] === "claude daemon" || o.slice(1, 4).includes("daemon");
}
function p(e) {
  return e !== void 0 && (/(^|\/)claude(\.exe)?$|\/claude-code\/cli\.js$|\/claude\/versions\/[^/\s]+$/.test(e) || e === (0, import_chunk_66srb2mf.Vf)().target);
}
async function sPa(e) {
  let r = await (0, import_chunk_5appeerh.me)((0, import_promises.readFile)(`/proc/${e}/cmdline`, "utf8").catch(() => {
    return;
  }), 1e3);
  if (r !== void 0) {
    let n = r.split("\0"), i = /(^|\/)(node|bun)$/.test(n[0]) ? 1 : 0;
    return n[0] === "claude daemon" || p(n[i]) && /^daemon\0(run\0|--json-path\0[^\0]+\0--log-file\0[^\0]+\0--origin\0service\0$)/.test(n.slice(i + 1).join("\0"));
  }
  let o = await (0, import_chunk_7fsmgfxx.kt)("ps", ["-ww", "-o", "args=", "-p", String(e)], { timeout: 1e3, useCwd: false });
  return p(/^(?:(?:\S*\/)?(?:node|bun)\s+)?(\/\S+)\sdaemon\s(?:run(?:\s|$)|--json-path\s\S+\s--log-file\s\S+\s--origin\sservice\s*$)/.exec(o.code === 0 ? o.stdout : "")?.[1]);
}
var DYt = 2, P6o = 250;
async function TZn(e, r, o) {
  if (r === void 0) return true;
  for (let n = 0; n < o; n++) {
    if (n > 0) await (0, import_chunk_5appeerh.K)(P6o);
    let i = await (0, import_chunk_rb36kwbn.Ef)(e, { skipCache: n > 0 });
    if (i !== void 0) return i === r;
  }
  return false;
}
var v = 12e4;
function x(e, r = Date.now(), o = (0, import_os.uptime)()) {
  return e.startedAt < r - o * 1e3 - v;
}
async function WVr(e) {
  let r = (0, import_chunk_rb36kwbn.fK)(e);
  if (r !== void 0) {
    let o = await (0, import_chunk_rb36kwbn.mS)(e.pid, r);
    if (o === true) return null;
    if (o === false) return "pid_recycled";
  }
  return x(e) ? "predates_boot" : null;
}
function jvn(e) {
  return (0, import_chunk_rb36kwbn.fK)(e) !== void 0;
}
function iPa() {
  return `Stop it with \`claude daemon stop --any\` (a graceful, socket-based stop); if nothing is running at that pid, delete ${G2()}`;
}
async function AO(e = 1, r) {
  let o = await $J(r);
  if (!o) return null;
  try {
    process.kill(o.pid, 0);
  } catch {
    return null;
  }
  if (!await BVr(o.pid)) return null;
  if (!await TZn(o.pid, (0, import_chunk_rb36kwbn.fK)(o), e)) return null;
  return o;
}
async function CZn(e) {
  let r = await AO(1, e).catch(() => null);
  if (!r) return { kind: "none" };
  switch (r.origin) {
    case "service":
      return { kind: "service", lock: r };
    case "foreground":
      return { kind: "foreground", lock: r };
    case "transient":
    case void 0: {
      if (!jvn(r)) return { kind: "not-stopped", pid: r.pid, outcome: "unverified" };
      let o = await dHt(r.pid);
      return o === "exited" ? { kind: "stopped", pid: r.pid } : { kind: "not-stopped", pid: r.pid, outcome: o };
    }
    default:
      return r.origin, { kind: "unknown-origin", lock: r };
  }
}
function xht(e) {
  switch (e.outcome) {
    case "eperm":
      return `the daemon holding the lock (pid ${e.pid}) is owned by another user and cannot be signalled from this session`;
    case "unverified":
      return `pid ${e.pid} is holding the daemon lock but could not be verified as the daemon, so it was not signalled`;
    case "timed-out":
      return `the daemon holding the lock (pid ${e.pid}) was asked to stop but has not exited yet`;
  }
}
function jVr(e) {
  return `a background daemon with an unrecognized origin (pid ${e}) holds the daemon lock \u2014 it may have been started by a newer Claude Code, so it was left untouched`;
}
async function aPa(e, r) {
  let o = await AO(1, r).catch(() => null);
  return !!o && o.version !== e;
}
