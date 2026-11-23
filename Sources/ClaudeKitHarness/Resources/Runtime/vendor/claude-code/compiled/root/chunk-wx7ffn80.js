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
var chunk_wx7ffn80_exports = {};
__export(chunk_wx7ffn80_exports, {
  Dvl: () => Dvl,
  E2i: () => E2i,
  Fks: () => Fks,
  Hvl: () => Hvl,
  Ivl: () => Ivl,
  JWn: () => JWn,
  MV: () => MV,
  Mvl: () => Mvl,
  Ovl: () => Ovl,
  Pvl: () => Pvl,
  QWn: () => QWn,
  Vre: () => Vre,
  Zcn: () => Zcn,
  ik: () => ik,
  k2i: () => k2i,
  qYe: () => qYe,
  qle: () => qle,
  sk: () => sk,
  v2i: () => v2i,
  vLe: () => vLe
});
module.exports = __toCommonJS(chunk_wx7ffn80_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_42tcgre6 = require("/$bunfs/root/chunk-42tcgre6.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var d = 3e4;
function f() {
  return { activityCallback: null, refcount: 0, mainLoopRefcount: 0, parkedOnUser: 0, parkGeneration: 0, activeReasons: /* @__PURE__ */ new Map(), oldestActivityStartedAt: null, heartbeatTimer: null, idleTimer: null, cleanupHandle: null };
}
var u = "cli", p = 1e3;
class v {
  activityKey = () => u;
  mainLoopActivityListener = null;
  nestedChainDropListener = null;
  criticalPathWaitListener = null;
  workStarted = (0, import_chunk_69qhefwa.Be)();
  processSlept = (0, import_chunk_69qhefwa.Be)();
  statesByKey = /* @__PURE__ */ new Map();
  evictedKeys = /* @__PURE__ */ new Set();
  setActivityKey(e) {
    this.activityKey = e;
  }
  currentKey() {
    return this.activityKey();
  }
  stateCount() {
    return this.statesByKey.size;
  }
  currentStateOrCreate() {
    let e = this.activityKey();
    if (this.evictedKeys.has(e)) return null;
    let t = this.statesByKey.get(e);
    if (!t) t = f(), this.statesByKey.set(e, t);
    return t;
  }
  currentStateOrNull() {
    return this.statesByKey.get(this.activityKey()) ?? null;
  }
  reset() {
    for (let e of [...this.statesByKey.keys()]) this.evictKey(e);
    this.evictedKeys.clear(), this.activityKey = () => u, this.mainLoopActivityListener = null, this.nestedChainDropListener = null, this.criticalPathWaitListener = null, this.workStarted.clear(), this.processSlept.clear();
  }
  evictKey(e) {
    if (this.evictedKeys.add(e), this.evictedKeys.size > p) {
      let o = this.evictedKeys.values().next().value;
      if (o !== void 0) this.evictedKeys.delete(o);
    }
    let t = this.statesByKey.get(e);
    if (!t) return;
    if (t.heartbeatTimer !== null) clearInterval(t.heartbeatTimer);
    if (t.idleTimer !== null) clearTimeout(t.idleTimer);
    t.cleanupHandle?.(), this.statesByKey.delete(e);
  }
}
var S = new import_chunk_2904xtvq.j(() => new v());
function r() {
  return S.of((0, import_chunk_f9x2f6cx.N)().host);
}
function y(e) {
  c(e), e.heartbeatTimer = setInterval((t) => {
    if (l(t)) {
      (0, import_chunk_42tcgre6.q)("debug", "session_keepalive_parked_on_user", { refcount: t.refcount, parked_on_user: t.parkedOnUser });
      return;
    }
    if ((0, import_chunk_42tcgre6.q)("debug", "session_keepalive_heartbeat", { refcount: t.refcount, main_loop_refcount: t.mainLoopRefcount, active: Object.fromEntries(t.activeReasons) }), import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) t.activityCallback?.();
  }, d, e);
}
function m(e) {
  if (c(e), e.activityCallback === null) return;
  e.idleTimer = setTimeout((t) => {
    (0, import_chunk_42tcgre6.q)("info", "session_idle_30s"), t.idleTimer = null;
  }, d, e);
}
function c(e) {
  if (e.idleTimer !== null) clearTimeout(e.idleTimer), e.idleTimer = null;
}
function Pvl(e) {
  let t = r().currentStateOrCreate();
  if (!t) return;
  if (t.activityCallback = e, t.refcount > 0 && t.heartbeatTimer === null) y(t);
}
function Ovl() {
  let e = r().currentStateOrNull();
  if (!e) return;
  if (e.activityCallback = null, e.heartbeatTimer !== null) clearInterval(e.heartbeatTimer), e.heartbeatTimer = null;
  c(e);
}
function JWn() {
  let e = r().currentStateOrNull();
  if (e && import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES) e.activityCallback?.();
}
function Ivl() {
  return (r().currentStateOrNull()?.activityCallback ?? null) !== null;
}
function k2i(e) {
  r().mainLoopActivityListener = e;
}
function E2i(e) {
  r().nestedChainDropListener = e;
}
function Mvl(e) {
  r().nestedChainDropListener?.(e);
}
function v2i(e) {
  r().criticalPathWaitListener = e;
}
function Fks(e, t) {
  try {
    r().criticalPathWaitListener?.(e, t);
  } catch (o) {
    (0, import_chunk_k449cc64.i)(new import_chunk_jv7av99m.A(`critical-path wait listener threw ${(0, import_chunk_jv7av99m.A$)(o) ?? "a value of unknown class"}`, "critical-path wait listener threw"));
  }
}
function vLe(e) {
  return (r().currentStateOrNull()?.activeReasons.get(e) ?? 0) > 0;
}
function Vre() {
  for (let e of r().statesByKey.values()) if (e.refcount > 0 && !l(e)) return true;
  return false;
}
function Zcn(e) {
  return r().workStarted.subscribe(e);
}
function Hvl(e) {
  return r().processSlept.subscribe(e);
}
function Dvl(e) {
  r().processSlept.emit(e);
}
function qYe() {
  return r().currentStateOrNull()?.mainLoopRefcount ?? 0;
}
function qle() {
  return (0, import_chunk_f9x2f6cx.PPt)() || qYe() > 0;
}
function sk(e, t) {
  let o = r(), n = o.currentStateOrCreate();
  if (!n) return;
  if (n.refcount++, t === void 0) n.mainLoopRefcount++, o.mainLoopActivityListener?.(n.mainLoopRefcount);
  if (n.activeReasons.set(e, (n.activeReasons.get(e) ?? 0) + 1), n.refcount === 1) {
    if (n.oldestActivityStartedAt = Date.now(), n.activityCallback !== null && n.heartbeatTimer === null) y(n);
  }
  if (n.refcount - n.parkedOnUser === 1) o.workStarted.emit();
  if (n.cleanupHandle === null) {
    let a = o.activityKey();
    n.cleanupHandle = (0, import_chunk_w578pjby.Ct)(async () => {
      (0, import_chunk_42tcgre6.q)("info", "session_activity_at_shutdown", { owner_key: a, refcount: n.refcount, active: Object.fromEntries(n.activeReasons), oldest_activity_ms: n.refcount > 0 && n.oldestActivityStartedAt !== null ? Date.now() - n.oldestActivityStartedAt : null });
    });
  }
}
function ik(e, t) {
  let o = r(), n = o.currentStateOrNull();
  if (!n) return;
  if (n.refcount > 0) n.refcount--;
  if (t === void 0) if (n.mainLoopRefcount > 0) n.mainLoopRefcount--, o.mainLoopActivityListener?.(n.mainLoopRefcount);
  else (0, import_chunk_42tcgre6.q)("warn", "session_activity_main_loop_underflow", { reason: e });
  let a = (n.activeReasons.get(e) ?? 0) - 1;
  if (a > 0) n.activeReasons.set(e, a);
  else n.activeReasons.delete(e);
  if (n.refcount === 0) {
    if (n.parkedOnUser > 0) (0, import_chunk_42tcgre6.q)("warn", "session_activity_parked_leaked", { parked_on_user: n.parkedOnUser }), n.parkedOnUser = 0, n.parkGeneration++;
    if (n.heartbeatTimer !== null) clearInterval(n.heartbeatTimer), n.heartbeatTimer = null, m(n);
  }
}
function MV() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE) return () => {
  };
  let e = r(), t = e.currentStateOrNull();
  if (!t) return () => {
  };
  if (t.parkedOnUser >= t.refcount) return (0, import_chunk_42tcgre6.q)("warn", "session_activity_parked_exceeds_refcount", { refcount: t.refcount, parked_on_user: t.parkedOnUser }), () => {
  };
  t.parkedOnUser++;
  let o = t.parkGeneration, n = false;
  return () => {
    if (n) return;
    if (n = true, t.parkGeneration === o && t.parkedOnUser > 0) {
      if (t.parkedOnUser--, t.refcount - t.parkedOnUser === 1) e.workStarted.emit();
    }
  };
}
function QWn() {
  let e = r().currentStateOrNull();
  return e !== null && l(e);
}
function l(e) {
  return !import_chunk_c203g5kd.s.CLAUDE_CODE_DISABLE_AWAITING_USER_IDLE && e.parkedOnUser > 0 && e.refcount - e.parkedOnUser <= 0;
}
