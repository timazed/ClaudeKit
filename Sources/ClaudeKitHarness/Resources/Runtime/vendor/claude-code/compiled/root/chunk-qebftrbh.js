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
var chunk_qebftrbh_exports = {};
__export(chunk_qebftrbh_exports, {
  Bzs: () => Bzs,
  KWo: () => KWo,
  M2l: () => M2l,
  VWo: () => VWo,
  Wzs: () => Wzs,
  g8l: () => g8l,
  h8l: () => h8l,
  m8l: () => m8l,
  vba: () => vba
});
module.exports = __toCommonJS(chunk_qebftrbh_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_8j3h6yzg = require("/$bunfs/root/chunk-8j3h6yzg.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
var Bzs = /^[A-Za-z0-9]{1,64}$/, z = /^background-[A-Za-z0-9]{1,64}\.jsonl$/, _ = 80, k = 64, C = 8192, D = 256, S = 32, A = 250, T = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1), id: (0, import_chunk_adx6804h.n)().regex(Bzs), owner: (0, import_chunk_adx6804h.Zc)().positive().max(2147483647), owner_start: (0, import_chunk_adx6804h.n)().min(1).max(64).optional(), pid: (0, import_chunk_adx6804h.Zc)().positive().max(2147483647).optional(), pid_start: (0, import_chunk_adx6804h.n)().min(1).max(64).optional(), pids_in: (0, import_chunk_adx6804h.n)().min(1).max(1024).optional(), started_at: (0, import_chunk_adx6804h.E)().nonnegative(), command: (0, import_chunk_adx6804h.n)().max(4 * _), caller: (0, import_chunk_adx6804h.n)().max(4 * k), folder: (0, import_chunk_adx6804h.n)().min(1).max(4096) }));
async function Wzs(e) {
  if (!Bzs.test(e.id)) return;
  try {
    let r = { v: 1, id: e.id, owner: process.pid, owner_start: await (0, import_chunk_rb36kwbn.HE)(), pid: e.pid, pid_start: e.pid === void 0 ? void 0 : await (0, import_chunk_rb36kwbn.Ef)(e.pid, { skipCache: true }), pids_in: await b(), started_at: Date.now(), command: u(e.command, _), caller: u(e.caller, k), folder: e.folder };
    await (0, import_chunk_8j3h6yzg.Vn)().mkdir((0, import_chunk_sjqze7qg.PQ)(), 448), await (0, import_chunk_8j3h6yzg.Vn)().writeExclusive(m(e.id), (0, import_chunk_w578pjby.fP)(r), 384), await vba();
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[remote-tools] background command record not written: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" });
  }
}
async function VWo(e) {
  await f(l(e)), await f(m(e));
}
function KWo(e) {
  return f(l(e));
}
async function vba() {
  let e = [];
  try {
    let r = await (0, import_chunk_8j3h6yzg.Vn)().list((0, import_chunk_sjqze7qg.PQ)());
    for (let i of r.filter((o) => z.test(o)).slice(0, D)) {
      let o = await M2l(i.slice(11, -6));
      if (o !== void 0 && o !== "ended") e.push(o);
    }
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`served background records: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
  return e.sort((r, i) => r.folder.localeCompare(i.folder) || r.caller.localeCompare(i.caller) || r.started_at - i.started_at || r.id.localeCompare(i.id));
}
async function M2l(e) {
  if (!Bzs.test(e)) return;
  try {
    let r = await (0, import_chunk_8j3h6yzg.Vn)().readTail(m(e), C, { noFollow: true }), i = T().safeParse((0, import_chunk_w578pjby.Cs)(r.toString("utf8").trim()));
    if (!i.success || i.data.id !== e) return;
    let o = i.data, a = o.owner === process.pid && o.owner_start !== void 0 && o.owner_start === await (0, import_chunk_rb36kwbn.HE)() || await h(o.owner, o.owner_start);
    if (a || await h(o.pid, o.pid_start)) return { ...o, ownerGone: !a };
    if (await M(o)) return await VWo(e), "ended";
  } catch {
  }
  return;
}
async function m8l(e) {
  return (0, import_chunk_4smdap7r.U)(await vba(), (r) => !r.ownerGone && e.includes(r.folder));
}
async function h8l(e, r = 1e4) {
  let i = (0, import_chunk_8j3h6yzg.Vn)();
  try {
    await i.writeExclusive(l(e), `{}
`, 384);
  } catch (a) {
    if ((0, import_chunk_jv7av99m.w)(a) !== "EEXIST") return "not_asked";
  }
  let o = Date.now() + r;
  while (Date.now() < o) if (await (0, import_chunk_5appeerh.K)(A), await i.lstat(m(e)).catch(() => null) === void 0) return await KWo(e), "stopped";
  return await f(l(e)) ? "unanswered" : "pending";
}
function g8l(e, { now: r, stopHint: i }) {
  if (e.length === 0) return [];
  let o = ["background commands started by cloud sessions:"], a;
  for (let s of e.slice(0, S)) {
    let g = `  in ${u(s.folder, 200)}, cloud session ${u(s.caller, k + 1)}:`;
    if (g !== a) a = g, o.push(g);
    let R = s.pid === void 0 ? "pid unknown" : `pid ${s.pid}`, L = (0, import_chunk_f64qna2j.vy)(Math.max(0, r - s.started_at));
    o.push(`    ${s.id}  ${R}  running ${L}  ${u(s.command, _ + 1)}${s.ownerGone ? "  (its serving process is gone: nothing here will stop it)" : ""}`);
  }
  if (e.length > S) o.push(`  and ${e.length - S} more`);
  if (i) o.push("  stop one: claude daemon remote-control stop-shell <id>");
  return o;
}
function m(e) {
  return (0, import_path.join)((0, import_chunk_sjqze7qg.PQ)(), `background-${e}.jsonl`);
}
function l(e) {
  return (0, import_path.join)((0, import_chunk_sjqze7qg.PQ)(), `background-${e}.stop.jsonl`);
}
async function h(e, r) {
  return e !== void 0 && (0, import_chunk_v6cdm8tp.Rd)(e) && (r === void 0 || await (0, import_chunk_rb36kwbn.mS)(e, r) !== false);
}
async function M(e) {
  if (e.pids_in === void 0 || e.pids_in !== await b() || !await (0, import_chunk_rb36kwbn.Lct)() || !await y(e.owner, e.owner_start)) return false;
  let { pid: r } = e;
  if (r === void 0 || !await y(r, e.pid_start)) return false;
  if (!(0, import_chunk_rb36kwbn.Wm)(r) || (0, import_chunk_cg8dqz0a.x)() === "windows") return true;
  try {
    return process.kill(-r, 0), false;
  } catch (i) {
    return (0, import_chunk_jv7av99m.w)(i) === "ESRCH";
  }
}
async function y(e, r) {
  return (0, import_chunk_rb36kwbn.Wm)(e) || r !== void 0 && await (0, import_chunk_rb36kwbn.mS)(e, r) === false;
}
async function b() {
  try {
    return `${await (0, import_chunk_jmxgdf7r.Q0)()} ${(0, import_chunk_jmxgdf7r.Ghe)()}`;
  } catch {
    return;
  }
}
async function f(e) {
  try {
    return await (0, import_chunk_8j3h6yzg.Vn)().delete(e), true;
  } catch {
    return false;
  }
}
function u(e, r) {
  return (0, import_chunk_tp3c5q2s.kge)((0, import_chunk_7cfjrnwy.el)(e), r);
}
