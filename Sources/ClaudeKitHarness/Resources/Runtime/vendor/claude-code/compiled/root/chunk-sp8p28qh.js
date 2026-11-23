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
var chunk_sp8p28qh_exports = {};
__export(chunk_sp8p28qh_exports, {
  DAn: () => DAn,
  JFa: () => JFa,
  M8r: () => M8r,
  QFa: () => QFa,
  ZFa: () => ZFa,
  e1a: () => e1a
});
module.exports = __toCommonJS(chunk_sp8p28qh_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_81q3wevd = require("/$bunfs/root/chunk-81q3wevd.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_52ckkfmm = require("/$bunfs/root/chunk-52ckkfmm.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var q = "computer-use.lock", f = { kind: "acquired", fresh: true }, k = { kind: "acquired", fresh: false };
function b() {
  if ((0, import_chunk_f9x2f6cx.Y)()) throw Error("Computer use is not available in a session without a disk.");
}
function h(e) {
  if (typeof e !== "object" || e === null) return false;
  return "sessionId" in e && typeof e.sessionId === "string" && "pid" in e && typeof e.pid === "number";
}
function i() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), q);
}
function c() {
  return import_chunk_hkvzj051.at.state("computer-use-lock");
}
async function s(e) {
  if (e) {
    let r = await e.read([c()]);
    if (!r.ok) return;
    let o = r.value.items[0];
    if (!o.found) return;
    try {
      let n = (0, import_chunk_w578pjby.te)(Buffer.from(o.value).toString("utf8"));
      return h(n) ? n : void 0;
    } catch {
      return;
    }
  }
  try {
    let r = await (0, import_promises.readFile)(i(), "utf8"), o = (0, import_chunk_w578pjby.te)(r);
    return h(o) ? o : void 0;
  } catch {
    return;
  }
}
function C(e) {
  try {
    return process.kill(e, 0), true;
  } catch {
    return false;
  }
}
async function v() {
  try {
    return !(await (0, import_promises.lstat)(i())).isFile();
  } catch (e) {
    return (0, import_chunk_jv7av99m.w)(e) === "ENOENT";
  }
}
async function p(e, r) {
  if ((0, import_chunk_m15w38ag.ne)() && r !== void 0) {
    let o = await r.write(c(), (0, import_chunk_w578pjby._)(e), { precondition: { type: "ifAbsent" }, mode: 438 & ~process.umask() });
    if (o.ok) return true;
    if (o.error.code === "AlreadyExists" || o.error.code === "Failed" && (0, import_chunk_81q3wevd._7)("telemetryCode" in o.error ? o.error.telemetryCode : void 0) && await v()) return false;
    throw new import_chunk_jv7av99m.A(`failed to create computer-use lock: ${o.error.code}`, "computer-use lock v5 create failed");
  }
  try {
    return await (0, import_promises.writeFile)(i(), (0, import_chunk_w578pjby._)(e), { flag: "wx" }), true;
  } catch (o) {
    if ((0, import_chunk_jv7av99m.w)(o) === "EEXIST") return false;
    throw o;
  }
}
function y(e) {
  let r = (0, import_chunk_52ckkfmm.Fh)();
  r.unregisterLockCleanup?.(), r.unregisterLockCleanup = (0, import_chunk_w578pjby.Ct)(async () => {
    await R(e);
  });
}
async function JFa(e) {
  b();
  let r = await s(e);
  if (!r) return { kind: "free" };
  if (DAn()) return { kind: "held_by_self" };
  if (r.sessionId === (0, import_chunk_f9x2f6cx.W)()) return { kind: "held_by_self" };
  if (C(r.pid)) return { kind: "blocked", by: r.sessionId };
  if ((0, import_chunk_w578pjby.t)(`Recovering stale computer-use lock from session ${r.sessionId} (PID ${r.pid})`), e) await e.delete(c());
  else await (0, import_promises.unlink)(i()).catch(() => {
  });
  return { kind: "free" };
}
function DAn() {
  return (0, import_chunk_52ckkfmm.Fh)().unregisterLockCleanup !== void 0;
}
async function QFa(e) {
  b();
  let r = (0, import_chunk_f9x2f6cx.W)(), o = { sessionId: r, pid: process.pid, acquiredAt: Date.now() };
  if (!e) await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_chunk_2gtmjt3y.Ze)());
  if (e && DAn()) {
    if (await s(e) && DAn()) return (0, import_chunk_cqa9hrgx.u)("computeruse_lock_acquire"), k;
  }
  if (await p(o, e)) return y(e), (0, import_chunk_cqa9hrgx.u)("computeruse_lock_acquire"), f;
  let n = await s(e);
  if (!n) {
    if (e) await e.delete(c());
    else await (0, import_promises.unlink)(i()).catch(() => {
    });
    if (await p(o, e)) return y(e), (0, import_chunk_cqa9hrgx.l)("computeruse_lock_acquire", "stale_recovered"), f;
    return (0, import_chunk_cqa9hrgx.m)("computeruse_lock_acquire", "lock_held"), { kind: "blocked", by: (await s(e))?.sessionId ?? "unknown" };
  }
  if (DAn()) return (0, import_chunk_cqa9hrgx.u)("computeruse_lock_acquire"), k;
  if (n.sessionId === r) return (0, import_chunk_cqa9hrgx.u)("computeruse_lock_acquire"), k;
  if (C(n.pid)) return (0, import_chunk_cqa9hrgx.m)("computeruse_lock_acquire", "lock_held"), { kind: "blocked", by: n.sessionId };
  if ((0, import_chunk_w578pjby.t)(`Recovering stale computer-use lock from session ${n.sessionId} (PID ${n.pid})`), e) await e.delete(c());
  else await (0, import_promises.unlink)(i()).catch(() => {
  });
  if (await p(o, e)) return y(e), (0, import_chunk_cqa9hrgx.l)("computeruse_lock_acquire", "stale_recovered"), f;
  return (0, import_chunk_cqa9hrgx.m)("computeruse_lock_acquire", "lock_held"), { kind: "blocked", by: (await s(e))?.sessionId ?? "unknown" };
}
async function R(e) {
  let r = DAn(), o = (0, import_chunk_52ckkfmm.Fh)();
  if (o.unregisterLockCleanup?.(), o.unregisterLockCleanup = void 0, (0, import_chunk_f9x2f6cx.Y)()) return false;
  let n = await s(e);
  if (!n || !r && n.sessionId !== (0, import_chunk_f9x2f6cx.W)()) return false;
  if (e) {
    let d = await e.delete(c());
    if (d.ok && d.value.existed) return (0, import_chunk_w578pjby.t)("Released computer-use lock"), true;
    return false;
  }
  try {
    return await (0, import_promises.unlink)(i()), (0, import_chunk_w578pjby.t)("Released computer-use lock"), true;
  } catch {
    return false;
  }
}
function M8r() {
  return (0, import_chunk_52ckkfmm.Fh)().activeThisTurn;
}
function ZFa() {
  if ((0, import_chunk_52ckkfmm.Fh)().activeThisTurn) return false;
  return (0, import_chunk_52ckkfmm.Fh)().activeThisTurn = true, true;
}
function e1a() {
  (0, import_chunk_52ckkfmm.Fh)().activeThisTurn = false;
}
