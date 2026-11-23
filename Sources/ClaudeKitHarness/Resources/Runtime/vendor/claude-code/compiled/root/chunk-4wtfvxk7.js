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
var chunk_4wtfvxk7_exports = {};
__export(chunk_4wtfvxk7_exports, {
  AHt: () => AHt,
  EY: () => EY,
  FYs: () => FYs,
  Get: () => Get,
  Wte: () => Wte,
  _Ia: () => _Ia,
  gqe: () => gqe,
  h7t: () => h7t,
  hqe: () => hqe,
  jte: () => jte,
  oKo: () => oKo,
  oq: () => oq,
  qve: () => qve,
  sKo: () => sKo,
  yTn: () => yTn
});
module.exports = __toCommonJS(chunk_4wtfvxk7_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_r9kxf52b = require("/$bunfs/root/chunk-r9kxf52b.js");
var import_chunk_gygwqn6z = require("/$bunfs/root/chunk-gygwqn6z.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_12s0qmhg = require("/$bunfs/root/chunk-12s0qmhg.js");
var import_chunk_aeefyj9w = require("/$bunfs/root/chunk-aeefyj9w.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_53ejxms6 = require("/$bunfs/root/chunk-53ejxms6.js");
var import_chunk_kbrc7tnt = require("/$bunfs/root/chunk-kbrc7tnt.js");
var import_chunk_7kv2gx33 = require("/$bunfs/root/chunk-7kv2gx33.js");
var import_chunk_gjgbprt5 = require("/$bunfs/root/chunk-gjgbprt5.js");
var import_chunk_hjheyj7y = require("/$bunfs/root/chunk-hjheyj7y.js");
var import_chunk_esqsx0j3 = require("/$bunfs/root/chunk-esqsx0j3.js");
var import_chunk_nbyg4q5d = require("/$bunfs/root/chunk-nbyg4q5d.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_child_process = require("child_process");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_path2 = require("path");
var import_os2 = require("os");
function w(e, r, a, n) {
  if ((0, import_chunk_wn8z7ghn.iC)(), (0, import_chunk_cg8dqz0a.x)() === "windows" || !(0, import_path2.isAbsolute)(e)) return;
  let c, u;
  try {
    if (n) u = process.cwd(), (0, import_chunk_w578pjby.u_)(n);
    process.execve(e, r, (0, import_chunk_kbrc7tnt.uqr)(a)), (0, import_chunk_w578pjby.t)(`execve(${e}) returned \u2014 handing back to the caller`, { level: "warn" });
  } catch (f) {
    c = (0, import_chunk_jv7av99m.D)(f), (0, import_chunk_w578pjby.t)(`execReplaceProcess: ${(0, import_chunk_jv7av99m.d)(f)} \u2014 handing the error back to the caller`, { level: "warn" });
  } finally {
    if (u !== void 0) try {
      (0, import_chunk_w578pjby.u_)(u);
    } catch {
    }
  }
  return c;
}
var g = "CLAUDE_CODE_RELAUNCH_HOME_TRUST";
async function O() {
  let e = await (0, import_chunk_rb36kwbn.Ef)(process.pid);
  if (e === void 0) return {};
  return { [g]: `${process.pid}:${e}` };
}
async function _Ia() {
  let e = /^(\d{1,10}):(.{1,64})$/.exec(import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_HOME_TRUST ?? "");
  if (!e) return false;
  let r = (0, import_chunk_cg8dqz0a.x)() === "windows" ? process.ppid : process.pid;
  if (Number(e[1]) !== r) return false;
  if (!(0, import_chunk_z6pfqf6e.Lce)((0, import_chunk_f9x2f6cx.Te)(), (0, import_os2.homedir)())) return false;
  let a = await (0, import_chunk_rb36kwbn.Ef)(r, { skipCache: true });
  return a !== void 0 && a === e[2];
}
async function yTn(e) {
  let r = (0, import_chunk_bzyb60p0.Bc)();
  if (!r) return false;
  return b(r, e);
}
async function b(e, r) {
  if (await (0, import_promises.stat)(e).then((c) => c.size > 0, () => false)) return true;
  let n = (0, import_chunk_nbyg4q5d.B_)(e, r);
  if (n === void 0) return false;
  try {
    let c = await n.backend.statMeta(n.key);
    if (!c.ok && c.error.code !== "NotFound") (0, import_chunk_w578pjby.t)(`transcriptHasBytes: backend statMeta failed: ${c.error.code}`);
    return c.ok && c.value.size > 0;
  } catch (c) {
    return (0, import_chunk_k449cc64.i)(c), false;
  }
}
async function Wte(e, r, { responseStreaming: a = false } = {}, n) {
  let c = (0, import_chunk_0tkterak.o9r)(r);
  if (!c || a) return c;
  try {
    if (await (0, import_chunk_bzyb60p0._E)([...e, (0, import_chunk_bzyb60p0.Pt)(import_chunk_0tkterak.r9r[r], "warning")], void 0, void 0, void 0, n), r === "relaunch") await oq(e, n);
  } catch (u) {
    throw (0, import_chunk_0tkterak.Egt)(), u;
  }
  return true;
}
async function oKo(e, { responseStreaming: r = false } = {}, a) {
  try {
    await Wte(e, "process_exit", { responseStreaming: r }, a);
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  }
}
async function hqe(e, r = {}, a, n) {
  await oKo(e, r, a), await (0, import_chunk_bzyb60p0.Yr)(0, "prompt_input_exit", n);
}
var E = "the automatic continue at the usage-limit reset was cancelled (/rate-limit-options to wait again)", R = `${E.charAt(0).toUpperCase()}${E.slice(1)}.`, sKo = "Automatic continue at the usage-limit reset was cancelled.";
function gqe(e, r) {
  return r.includes(E) || r.includes(R) || r.includes(sKo) ? `${e} ${R}` : e;
}
function jte(e, r, { as: a = "sentence", exitsAfterward: n = false } = {}) {
  if ((0, import_chunk_0tkterak.Egt)(), !r) return e;
  if (a === "clause") return `${e} \u2014 ${E}`;
  return `${e}
${n ? sKo : R}`;
}
function Get(e, r, a) {
  return EY(r, a).catch((n) => {
    if (n instanceof Error) n.message = jte(n.message, e, { as: "clause" });
    else (0, import_chunk_0tkterak.Egt)();
    throw n;
  });
}
async function oq(e, r) {
  let a = AHt(e)?.uuid;
  try {
    if (a) await (0, import_chunk_bzyb60p0.cMn)(a, void 0, r);
    else if ((0, import_chunk_bzyb60p0.ehi)() && await yTn(r)) await (0, import_chunk_bzyb60p0.cMn)(null, void 0, r);
  } catch (n) {
    (0, import_chunk_k449cc64.i)(n);
  }
}
function AHt(e) {
  return e.findLast((r) => (r.type === "user" || r.type === "assistant") && (0, import_chunk_bzyb60p0.Pb)(r) && !(0, import_chunk_bzyb60p0.J2)(r.uuid));
}
var FYs = "Claude Code couldn't restart. Your conversation is saved. Start Claude Code again and run /resume to pick it up.", k = "Claude Code couldn't restart. Start Claude Code again.";
async function qve() {
  if (await (0, import_chunk_d2tjaek4.OV)()) return;
  throw (0, import_chunk_cqa9hrgx.m)("agent_launcher", "relaunch_launcher_not_runnable"), new import_chunk_jv7av99m.A((0, import_chunk_d2tjaek4.kg)() ?? `${import_chunk_d2tjaek4.YP}: launcher \`${(0, import_chunk_d2tjaek4.Wg)()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry; this session was left running`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable");
}
async function EY(e = {}, r) {
  (0, import_chunk_wn8z7ghn.iC)();
  let { cmd: a, prefixArgs: n } = (0, import_chunk_ch6jxpf8.R_)(() => (0, import_chunk_66srb2mf.Jq)(e.launcher ?? (0, import_chunk_66srb2mf.Vf)()));
  await qve();
  let c = e.extraArgs ?? [], u;
  if (e.args) u = e.args;
  else if (e.freshIfNoTranscript && !await yTn(r)) u = c;
  else u = ["--resume", (0, import_chunk_f9x2f6cx.W)(), ...c];
  let f = u[0] === "--resume" && !e.args, _ = e.failedLine ?? (f ? FYs : k), I = (0, import_chunk_bzyb60p0.Zr)();
  if ((0, import_chunk_bzyb60p0.M4e)(), !I) e.onShutdownClaimed?.();
  (0, import_chunk_bzyb60p0.I4e)(), (0, import_chunk_bzyb60p0.O7o)(), await Promise.all([(0, import_chunk_5appeerh.qt)((0, import_chunk_bzyb60p0.Pf)(), 3e4, "flush timeout (relaunch)").catch(() => {
  }), (0, import_chunk_5appeerh.qt)((0, import_chunk_w578pjby.Vft)(), import_chunk_w578pjby.FK, "cleanup timeout").catch(() => {
  }).then(() => (0, import_chunk_5appeerh.qt)((0, import_chunk_bzyb60p0.R_t)(), 1e3, "analytics flush timeout").catch(() => {
  }))]), e.preSpawn?.();
  let o = (0, import_chunk_5e3gtsn9.PV)((0, import_chunk_1z1bgjzv.Tit)((0, import_chunk_ch6jxpf8.R_)(() => ({ ...process.env }))));
  if ((0, import_chunk_12s0qmhg.mqr)(o), delete o.CLAUDE_CODE_TUI_JUST_SWITCHED, delete o.CLAUDE_CODE_TUI_ASKED, delete o.CLAUDE_CODE_TUI_TRIAL, delete o.CLAUDE_CODE_TELEPORT_MOVE, delete o.CLAUDE_BRIDGE_REATTACH_SESSION, delete o.CLAUDE_BRIDGE_REATTACH_SEQ, delete o.CLAUDE_BRIDGE_REATTACH_OUTBOUND_ONLY, delete o.CLAUDE_BRIDGE_REATTACH_GROUPING, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ACCT, delete o.CLAUDE_BRIDGE_REATTACH_OWNER_ORG, delete o.CLAUDE_BRIDGE_REATTACH_NO_BACKFILL, delete o[import_chunk_gjgbprt5.jYs], delete o.CLAUDE_BG_WORKSPACE_TRUSTED, delete o.CLAUDE_BG_CARRIED_PROMPTS_SHA256, delete o[g], (0, import_chunk_f9x2f6cx.XM)() && (0, import_chunk_f9x2f6cx.HQe)()) o.CLAUDE_BG_WORKSPACE_TRUSTED = "1", Object.assign(o, await O());
  if (delete o[import_chunk_ha393e1n.MNn], !e.args) Object.assign(o, import_chunk_ha393e1n.Ue.rootMoveHoldEnv());
  delete o[import_chunk_esqsx0j3.exn], delete o[import_chunk_aeefyj9w.Eer];
  let h = (0, import_chunk_bzyb60p0.Air)();
  if (!e.args && h !== void 0) o[import_chunk_aeefyj9w.Eer] = h;
  if ((0, import_chunk_aeefyj9w.hqr)(o, u), delete o[import_chunk_7kv2gx33.$Ys], !e.args) Object.assign(o, await (0, import_chunk_7kv2gx33.yIa)(e.proactivity?.toolPermissionContext));
  if ((0, import_chunk_12s0qmhg.fqr)(o, u, { isSameLaunch: false }), delete o[import_chunk_hjheyj7y.jnr], delete o[import_chunk_hjheyj7y.NCn], delete o[import_chunk_hjheyj7y.znr], delete o[import_chunk_hjheyj7y.Gnr], e.proactivity && !e.args) Object.assign(o, (0, import_chunk_hjheyj7y.q5r)(e.proactivity), (0, import_chunk_hjheyj7y.Y5r)(e.proactivity));
  Object.assign(o, e.env);
  for (let p of e.dropEnv ?? []) delete o[p];
  await (0, import_chunk_r9kxf52b.eRt)(), Object.assign(o, (0, import_chunk_esqsx0j3.OXr)());
  let S = h7t();
  await (0, import_chunk_53ejxms6.RHt)(), (0, import_chunk_gygwqn6z._qr)();
  let C = y(e.refuseAtSpawn, _);
  if (C !== void 0) return L(C);
  w(a, [a, ...n, ...u], o, S);
  for (let p of ["SIGINT", "SIGTERM", "SIGHUP"]) process.removeAllListeners(p), process.on(p, () => {
  });
  await (0, import_chunk_53ejxms6.RHt)();
  let T = y(e.refuseAtSpawn, _);
  if (T !== void 0) return L(T);
  (0, import_chunk_12s0qmhg.pqr)();
  let l = (0, import_child_process.spawnSync)(a, [...n, ...u], { stdio: "inherit", env: o, cwd: S });
  if (process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), l.error) (0, import_chunk_w578pjby.t)(`Failed to relaunch: ${l.error.message}`, { level: "error" }), await (0, import_chunk_53ejxms6.RHt)(), (0, import_chunk_bzyb60p0.Q2)(_), (0, import_chunk_ndrgvsn7.ix)("relaunch_spawn_error"), process.exit(1);
  if (l.signal) process.removeAllListeners(l.signal), process.kill(process.pid, l.signal), process.exit(128 + (import_os.constants.signals[l.signal] ?? 0));
  process.exit(l.status ?? (l.signal ? 1 : 0));
}
function y(e, r) {
  try {
    return e?.();
  } catch (a) {
    return (0, import_chunk_k449cc64.i)(a), r;
  }
}
async function L(e) {
  process.removeAllListeners("beforeExit"), process.removeAllListeners("exit"), await (0, import_chunk_53ejxms6.RHt)(), (0, import_chunk_bzyb60p0.Q2)(e), process.exit(1);
}
function h7t() {
  let e = (0, import_chunk_bzyb60p0.Bc)(), r = (0, import_chunk_f9x2f6cx.Te)();
  if (e && (0, import_path.dirname)(e) === (0, import_chunk_hsqa3g9e.Dy)(r)) return r;
  return (0, import_chunk_f9x2f6cx.Oo)();
}
