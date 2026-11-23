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
var chunk_0kyr8hth_exports = {};
__export(chunk_0kyr8hth_exports, {
  Ado: () => Ado,
  Cdo: () => Cdo,
  Cds: () => Cds,
  DSe: () => DSe,
  Eae: () => Eae,
  Edo: () => Edo,
  G5e: () => G5e,
  K0n: () => K0n,
  Qvi: () => Qvi,
  Rdo: () => Rdo,
  Tdo: () => Tdo,
  Tds: () => Tds,
  Vbt: () => Vbt,
  Vrn: () => Vrn,
  XCe: () => XCe,
  Y0n: () => Y0n,
  Zvi: () => Zvi,
  _hr: () => _hr,
  eTi: () => eTi,
  hnl: () => hnl,
  j6: () => j6,
  kdo: () => kdo,
  mnl: () => mnl,
  n$t: () => n$t,
  pnl: () => pnl,
  q0n: () => q0n,
  r$t: () => r$t,
  t$t: () => t$t,
  vdo: () => vdo,
  yhr: () => yhr,
  zrn: () => zrn
});
module.exports = __toCommonJS(chunk_0kyr8hth_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_xytxbeb6 = require("/$bunfs/root/chunk-xytxbeb6.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_crypto = require("crypto");
var import_promises = require("fs/promises");
var import_path = require("path");
var C = 256;
var DSe = (e) => typeof e === "string" && e !== "" && e.length <= C && !import_chunk_xcgcdx61.jut.test(e);
var P = [{ min: 0, max: 59 }, { min: 0, max: 23 }, { min: 1, max: 31 }, { min: 1, max: 12 }, { min: 0, max: 6 }];
function E(e, n) {
  let { min: s, max: r } = n, a = /* @__PURE__ */ new Set();
  for (let u of e.split(",")) {
    let d = u.match(/^\*(?:\/(\d+))?$/);
    if (d) {
      let l = d[1] ? parseInt(d[1], 10) : 1;
      if (l < 1) return null;
      for (let m = s; m <= r; m += l) a.add(m);
      continue;
    }
    let o = u.match(/^(\d+)-(\d+)(?:\/(\d+))?$/);
    if (o) {
      let l = parseInt(o[1], 10), m = parseInt(o[2], 10), c = o[3] ? parseInt(o[3], 10) : 1, p = s === 0 && r === 6, g = p ? 7 : r;
      if (l > m || c < 1 || l < s || m > g) return null;
      for (let y = l; y <= m; y += c) a.add(p && y === 7 ? 0 : y);
      continue;
    }
    if (u.match(/^\d+$/)) {
      let l = parseInt(u, 10);
      if (s === 0 && r === 6 && l === 7) l = 0;
      if (l < s || l > r) return null;
      a.add(l);
      continue;
    }
    return null;
  }
  if (a.size === 0) return null;
  return Array.from(a).sort((u, d) => u - d);
}
function XCe(e) {
  let n = e.trim().split(/\s+/);
  if (n.length !== 5) return null;
  let s = [];
  for (let r = 0; r < 5; r++) {
    let a = E(n[r], P[r]);
    if (!a) return null;
    s.push(a);
  }
  return { minute: s[0], hour: s[1], dayOfMonth: s[2], month: s[3], dayOfWeek: s[4] };
}
function F(e) {
  let n = new Date(e.getTime());
  return n.setMinutes(n.getMinutes()), n.getTime() !== e.getTime();
}
function K0n(e, n, { oneShot: s = false } = {}) {
  let r = new Set(e.minute), a = new Set(e.hour), u = new Set(e.dayOfMonth), d = new Set(e.month), o = new Set(e.dayOfWeek), f = e.dayOfMonth.length === 31, l = e.dayOfWeek.length === 7, m = (g) => f && l ? true : f ? o.has(g.getDay()) : l ? u.has(g.getDate()) : u.has(g.getDate()) || o.has(g.getDay()), c = new Date(Math.floor(n.getTime() / 6e4) * 6e4 + 6e4);
  if (Number.isNaN(c.getTime())) return null;
  let p = 527040;
  for (let g = 0; g < p; g++) {
    if (F(c)) {
      if (s && d.has(c.getMonth() + 1) && m(c) && a.has(c.getHours()) && r.has(c.getMinutes())) return c;
      c.setTime(c.getTime() + 6e4);
      continue;
    }
    let y = c.getMonth() + 1;
    if (!d.has(y)) {
      c.setMonth(c.getMonth() + 1, 1), c.setHours(0, 0, 0, 0);
      continue;
    }
    if (!m(c)) {
      c.setDate(c.getDate() + 1), c.setHours(0, 0, 0, 0);
      continue;
    }
    if (!a.has(c.getHours()) || !r.has(c.getMinutes())) {
      if (s) c.setTime(c.getTime() + 6e4);
      else if (!a.has(c.getHours())) c.setHours(c.getHours() + 1, 0, 0, 0);
      else c.setMinutes(c.getMinutes() + 1);
      continue;
    }
    return c;
  }
  return null;
}
var R = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function S(e, n) {
  return new Date(2e3, 0, 1, n, e).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}
function j6(e) {
  let n = e.trim().split(/\s+/);
  if (n.length !== 5) return e;
  let [s, r, a, u, d] = n;
  if (r === "*" && a === "*" && u === "*" && d === "*") {
    if (s === "*") return "Every minute";
    let m = s.match(/^\*\/(\d+)$/);
    if (m) {
      let c = parseInt(m[1], 10);
      return c === 1 ? "Every minute" : `Every ${c} minutes`;
    }
  }
  if (s.match(/^\d+$/) && r === "*" && a === "*" && u === "*" && d === "*") {
    let m = parseInt(s, 10);
    if (m === 0) return "Every hour";
    return `Every hour at :${m.toString().padStart(2, "0")}`;
  }
  let o = r.match(/^\*\/(\d+)$/);
  if (s.match(/^\d+$/) && o && a === "*" && u === "*" && d === "*") {
    let m = parseInt(o[1], 10), c = parseInt(s, 10), p = c === 0 ? "" : ` at :${c.toString().padStart(2, "0")}`;
    return m === 1 ? `Every hour${p}` : `Every ${m} hours${p}`;
  }
  if (!s.match(/^\d+$/) || !r.match(/^\d+$/)) return e;
  let f = parseInt(s, 10), l = parseInt(r, 10);
  if (a === "*" && u === "*" && d === "*") return `Every day at ${S(f, l)}`;
  if (a === "*" && u === "*" && d.match(/^\d$/)) {
    let m = parseInt(d, 10) % 7, c = R[m];
    if (c) return `Every ${c} at ${S(f, l)}`;
  }
  if (a === "*" && u === "*" && d === "1-5") return `Weekdays at ${S(f, l)}`;
  return e;
}
function Vbt(e) {
  let n = e.trim();
  if (n === "") return { error: "required" };
  let s = n.match(/^(\d+)\s*([smhd])$/i);
  if (s) {
    let r = parseInt(s[1], 10), a = s[2].toLowerCase();
    if (r < 1) return { error: "interval must be at least 1" };
    let u;
    switch (a) {
      case "s":
        return { error: "minimum interval is 1 minute" };
      case "m":
        if (r > 59) return { error: "minute interval must be 1\u201359 (use hours instead)" };
        u = r === 1 ? "* * * * *" : `*/${r} * * * *`;
        break;
      case "h":
        if (r > 23) return { error: "hour interval must be 1\u201323 (use days instead)" };
        u = r === 1 ? "0 * * * *" : `0 */${r} * * *`;
        break;
      case "d":
        if (r === 1) {
          u = "0 0 * * *";
          break;
        }
        if (r > 28) return { error: "day interval must be 1\u201328 (use a cron expression)" };
        u = `0 0 */${r} * *`;
        break;
      default:
        return { error: "unknown interval unit" };
    }
    return { cron: u, human: j6(u) };
  }
  if (XCe(n) !== null) return { cron: n, human: j6(n) };
  return { error: "use an interval (5m, 2h, 1d) or 5-field cron (*/5 * * * *)" };
}
var kdo = 3e5, N = /^\*\/\d+ \* \* \* \*$/, O = (0, import_path.join)(".claude", "scheduled_tasks.json"), x = 1048576, v = 16;
function G5e(e) {
  return (0, import_path.join)(e ?? (0, import_chunk_f9x2f6cx.Oo)(), O);
}
function Edo(e) {
  let n = (0, import_chunk_f9x2f6cx.us)();
  return e === void 0 && n !== null && !((0, import_chunk_f9x2f6cx.cpt)() && n === (0, import_chunk_f9x2f6cx.Ed)());
}
function b(e) {
  return !(0, import_chunk_2gtmjt3y.eve)((0, import_path.join)(e ?? (0, import_chunk_f9x2f6cx.Oo)(), ".claude"));
}
var Tds = "The scheduled tasks file (.claude/scheduled_tasks.json) could not be read as a list of tasks, so it was not changed. Check or repair that file, then try again.";
async function Cds(e, n) {
  let s = await vdo(e, n);
  return s === "unreadable" ? [] : s;
}
async function vdo(e, n) {
  if (Edo(e) || e === void 0 && (0, import_chunk_f9x2f6cx.Ed)() === null) return [];
  let s = (0, import_chunk_w578pjby.le)(), r;
  try {
    let o = G5e(e), f = b(e) ? (await (0, import_chunk_w578pjby.EL)(s, o)).resolvedPath : o;
    r = await s.readFile(f, { encoding: "utf-8" });
  } catch (o) {
    if ((0, import_chunk_jv7av99m.kn)(o)) return [];
    if (!(0, import_chunk_jv7av99m.fn)(o) && (0, import_chunk_jv7av99m.w)(o) !== import_chunk_w578pjby.SQe) (0, import_chunk_k449cc64.i)(o);
    return "unreadable";
  }
  if (r.trim() === "") return [];
  let a = (0, import_chunk_0jve1fep.et)(r, false);
  if (!a || typeof a !== "object") return "unreadable";
  let u = a;
  if (!Array.isArray(u.tasks)) return "unreadable";
  let d = [];
  for (let o of u.tasks) {
    let f = o?.plugin !== void 0 && !DSe(o.plugin), l = f ? void 0 : n;
    if (!o || typeof o.id !== "string" || typeof o.cron !== "string" || typeof o.prompt !== "string" || typeof o.createdAt !== "number") {
      (0, import_chunk_w578pjby.t)("[ScheduledTasks] skipping malformed task"), l?.push(o);
      continue;
    }
    if (!XCe(o.cron)) {
      (0, import_chunk_w578pjby.t)(`[ScheduledTasks] skipping task ${o.id} with invalid cron '${o.cron}'`), l?.push(o);
      continue;
    }
    if (f) {
      (0, import_chunk_w578pjby.t)(`[ScheduledTasks] skipping task ${o.id}: its plugin name fails the rule for a stored name`);
      continue;
    }
    d.push({ id: o.id, cron: o.cron, prompt: o.prompt, createdAt: o.createdAt, ...typeof o.lastFiredAt === "number" && { lastFiredAt: o.lastFiredAt }, ...o.recurring && { recurring: true }, ...o.permanent && { permanent: true }, ...typeof o.createdBySessionId === "string" && { createdBySessionId: o.createdBySessionId }, ...typeof o.createdByPid === "number" && { createdByPid: o.createdByPid }, ...typeof o.createdByProcStart === "string" && { createdByProcStart: o.createdByProcStart }, ...typeof o.createdInProject === "string" && { createdInProject: o.createdInProject }, ...o.createdUnderSignIn !== void 0 && { createdUnderSignIn: typeof o.createdUnderSignIn === "string" ? o.createdUnderSignIn : "" }, ...typeof o.plugin === "string" && { plugin: o.plugin }, ...typeof o.maxAgeMs === "number" && { maxAgeMs: o.maxAgeMs } });
  }
  return d;
}
function Qvi(e) {
  return (0, import_chunk_f9x2f6cx.JA)() || (0, import_chunk_f9x2f6cx.xaa)(e ?? (0, import_chunk_f9x2f6cx.Oo)());
}
function Zvi(e) {
  return (0, import_chunk_6mfepmbb.WMs)(e ?? (0, import_chunk_f9x2f6cx.Oo)());
}
function q0n(e) {
  if (Edo(e) || e === void 0 && (0, import_chunk_f9x2f6cx.Ed)() === null) return false;
  if (Qvi(e) || Zvi(e)) return false;
  let n;
  try {
    let a = G5e(e), u = b(e) ? (0, import_chunk_w578pjby.RD)((0, import_chunk_w578pjby.le)(), a).resolvedPath : a;
    n = (0, import_chunk_xytxbeb6.Jze)(u, { maxBytes: x, regularFileOnly: true });
  } catch {
    return false;
  }
  let s = (0, import_chunk_0jve1fep.et)(n, false);
  if (!s || typeof s !== "object") return false;
  let r = s.tasks;
  return Array.isArray(r) && r.length > 0;
}
async function Tdo(e, n, s = []) {
  if (Edo(n)) throw Error("Durable scheduled tasks are unavailable in a session started with --project-config-root");
  let r = n ?? (0, import_chunk_f9x2f6cx.Oo)(), a = !(0, import_chunk_2gtmjt3y.eve)((0, import_path.join)(r, ".claude"));
  if (a) await (0, import_chunk_2yx6c1y2.eKt)(r, (0, import_path.join)(r, ".claude"));
  await (0, import_promises.mkdir)((0, import_path.join)(r, ".claude"), { recursive: true });
  let u = e.map(({ durable: l, ...m }) => m), d = { tasks: [...u, ...s.filter((l) => !(0, import_chunk_6mfepmbb.PJe)(l, v))] }, o = (0, import_chunk_w578pjby._)(d), f = (0, import_chunk_kx2fp6pc.Z0o)(o, 2, x - (Buffer.byteLength(o) - o.length) - 1) ? d : { tasks: u };
  await (0, import_chunk_2yx6c1y2.SI)(G5e(r), (0, import_chunk_w578pjby._)(f, null, 2) + `
`, { encoding: "utf-8", allowSymlink: !a, checkParentDir: a, stagingDir: (0, import_path.join)(r, ".claude", import_chunk_q7qjcthc.ED) });
}
async function pnl(e, n, s, r, a, u = Date.now(), d, o, f) {
  let l = (0, import_chunk_xfj2cwfv.yXe)(d), m = (0, import_crypto.randomUUID)().slice(0, 8), c = { id: m, cron: e, prompt: n, createdAt: u, ...s && { recurring: true }, ...l !== void 0 && { plugin: l }, ...f !== void 0 && { maxAgeMs: f } };
  if (!r) return (0, import_chunk_f9x2f6cx.IQe)({ ...c, ...a && { agentId: a } }), m;
  if (b()) await (0, import_chunk_w578pjby.EL)((0, import_chunk_w578pjby.le)(), G5e());
  let p = [], g = await vdo(void 0, p);
  if (g === "unreadable") throw new import_chunk_jv7av99m.A(Tds, "Scheduled tasks file could not be read for an add");
  return g.push({ ...c, createdBySessionId: (0, import_chunk_f9x2f6cx.W)(), createdByPid: process.pid, createdByProcStart: (0, import_chunk_rb36kwbn.aFe)(), createdInProject: (0, import_chunk_f9x2f6cx.Oo)(), ...o !== void 0 && { createdUnderSignIn: T(o) } }), await Tdo(g, void 0, p), m;
}
var t$t = "none";
function T(e, n = (0, import_crypto.randomUUID)()) {
  return e === t$t ? e : `${n}:${(0, import_chunk_ccm69jjy.Je)(`${n}:${e}`)}`;
}
function Cdo(e, n) {
  return e.createdByPid === process.pid && (e.createdByProcStart === void 0 ? e.createdAt >= performance.timeOrigin : e.createdByProcStart === n);
}
function Ado(e, n, s) {
  return e.createdUnderSignIn === void 0 ? n !== t$t && e.createdBySessionId !== void 0 && !e.permanent && !s : n === null || e.createdUnderSignIn !== T(n, (0, import_chunk_7cfjrnwy.nt)(e.createdUnderSignIn, ":"));
}
async function n$t(e, n) {
  if (e.length === 0) return;
  if (n === void 0 && (0, import_chunk_f9x2f6cx.J8)(e) === e.length) return;
  let s = new Set(e), r = [], a = await vdo(n, r);
  if (a === "unreadable") throw new import_chunk_jv7av99m.A(Tds, "Scheduled tasks file could not be read for a delete");
  let u = a.filter((d) => !s.has(d.id));
  if (u.length === a.length) return;
  await Tdo(u, n, r);
}
function _hr(e) {
  return (0, import_chunk_jv7av99m.QB)(e) ?? (0, import_chunk_jv7av99m.w)(e) ?? (0, import_chunk_jv7av99m.E3t)(e);
}
async function mnl(e, n, s) {
  if (e.length === 0) return;
  let r = new Set(e), a = [], u = await Cds(s, a), d = false;
  for (let o of u) if (r.has(o.id)) o.lastFiredAt = n, d = true;
  if (!d) return;
  await Tdo(u, s, a);
}
async function Rdo(e) {
  let n = await Cds(e);
  if (e !== void 0) return n;
  let s = (0, import_chunk_f9x2f6cx.eu)().map((r) => ({ ...r, durable: false }));
  return [...n, ...s];
}
function Y0n(e, n, s) {
  let r = XCe(e);
  if (!r) return null;
  let a = K0n(r, new Date(n), s);
  return a ? a.getTime() : null;
}
var Eae = { recurringFrac: 0.5, recurringCapMs: 18e5, oneShotMaxMs: 9e4, oneShotFloorMs: 0, oneShotMinuteMod: 30, recurringMaxAgeMs: 2592e6, cacheLeadMs: 15e3 }, B = 6048e5;
function zrn(e, { recurringMaxAgeMs: n }) {
  let { maxAgeMs: s = B } = e;
  return Math.min(s || 1 / 0, n || 1 / 0);
}
function k(e) {
  let n = parseInt(e.slice(0, 8), 16) / 4294967296;
  return Number.isFinite(n) ? n : 0;
}
function yhr(e, n, s, r = Eae) {
  let a = Y0n(e, n);
  if (a === null) return null;
  let u = Y0n(e, a);
  if (u === null) return a;
  let d = u - a;
  if (N.test(e) && r.cacheLeadMs > 0 && r.cacheLeadMs < d && d >= kdo && d - r.cacheLeadMs < kdo) return n + d - r.cacheLeadMs;
  let o = Math.min(k(s) * r.recurringFrac * d, r.recurringCapMs);
  return a + o;
}
function eTi(e, n, s, r = Eae) {
  let a = Y0n(e, n, { oneShot: true });
  if (a === null) return null;
  if (new Date(a).getMinutes() % r.oneShotMinuteMod !== 0) return a;
  let u = r.oneShotFloorMs + k(s) * (r.oneShotMaxMs - r.oneShotFloorMs);
  return Math.max(a - u, n);
}
function r$t(e, n) {
  return e.recurring ? yhr(e.cron, e.lastFiredAt ?? e.createdAt, e.id, n) : eTi(e.cron, e.createdAt, e.id, n);
}
function Vrn(e) {
  return new Date(Math.round(e / 6e4) * 6e4);
}
function hnl(e, n) {
  return e.filter((s) => {
    let r = Y0n(s.cron, s.createdAt, { oneShot: !s.recurring });
    return r !== null && r < n;
  });
}
