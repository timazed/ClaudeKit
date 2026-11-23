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
var chunk_qbmek7xb_exports = {};
__export(chunk_qbmek7xb_exports, {
  R8l: () => R8l,
  djo: () => djo
});
module.exports = __toCommonJS(chunk_qbmek7xb_exports);
var import_chunk_h3s25p5k = require("/$bunfs/root/chunk-h3s25p5k.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_0yc3wy8b = require("/$bunfs/root/chunk-0yc3wy8b.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_gygwqn6z = require("/$bunfs/root/chunk-gygwqn6z.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_12s0qmhg = require("/$bunfs/root/chunk-12s0qmhg.js");
var import_chunk_aeefyj9w = require("/$bunfs/root/chunk-aeefyj9w.js");
var import_chunk_hjheyj7y = require("/$bunfs/root/chunk-hjheyj7y.js");
var import_chunk_esqsx0j3 = require("/$bunfs/root/chunk-esqsx0j3.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_child_process = require("child_process");
var import_fs = require("fs");
var import_os = require("os");
var import_tty = require("tty");
function djo() {
  for (let r = 0; r < 32; r++) {
    if (r === 1 || r === 2) continue;
    try {
      if ((0, import_tty.isatty)(r)) (0, import_fs.closeSync)(r), S(r);
    } catch {
    }
  }
}
function S(r) {
  let i = -1;
  while (i < r) i = (0, import_fs.openSync)("/dev/null", "r+");
}
async function R8l({ proactivity: r, pinToCurrentBinary: i } = {}) {
  if ((0, import_chunk_wn8z7ghn.iC)(), await new Promise((o) => setImmediate(o)), !await (0, import_chunk_d2tjaek4.OV)()) return await (0, import_chunk_cqa9hrgx.Gt)("agent_launcher", "relaunch_launcher_not_runnable"), process.stderr.write(`
${(0, import_chunk_d2tjaek4.kg)() ?? `${import_chunk_d2tjaek4.YP}: launcher \`${(0, import_chunk_d2tjaek4.Wg)()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`), (0, import_chunk_mpk68jst.Lo)(1);
  let a = (0, import_chunk_ch6jxpf8.R_)(() => ({ invocation: (0, import_chunk_66srb2mf.Vf)({ pinToCurrentBinary: i }), env: { ...process.env } })), { cmd: c, prefixArgs: l } = a.invocation, t = process.argv.slice(2), m = (0, import_chunk_rb36kwbn.ui)()?.vcsCopy?.madeBy === "mod" && (0, import_chunk_dw5px5e0.IFr)(t).some((o) => /^(-[a-z]*w|--worktree\b)/.test(o)) && import_chunk_h3s25p5k.qge || void 0, e = (0, import_chunk_5e3gtsn9.PV)((0, import_chunk_1z1bgjzv.Tit)(a.env));
  (0, import_chunk_12s0qmhg.mqr)(e), delete e[import_chunk_esqsx0j3.exn], Object.assign(e, (0, import_chunk_esqsx0j3.OXr)()), delete e[import_chunk_ha393e1n.MNn], Object.assign(e, import_chunk_ha393e1n.Ue.rootMoveHoldEnv()), (0, import_chunk_aeefyj9w.hqr)(e, t), (0, import_chunk_12s0qmhg.fqr)(e, t, { isSameLaunch: true });
  let u = (0, import_chunk_bzyb60p0.Air)();
  if (u !== void 0) e[import_chunk_aeefyj9w.Eer] = u;
  if (delete e[import_chunk_hjheyj7y.jnr], delete e[import_chunk_hjheyj7y.NCn], delete e[import_chunk_hjheyj7y.znr], delete e[import_chunk_hjheyj7y.Gnr], r) {
    if (Object.assign(e, (0, import_chunk_hjheyj7y.Y5r)(r)), (0, import_chunk_hjheyj7y._La)(t)) Object.assign(e, (0, import_chunk_hjheyj7y.q5r)(r), (0, import_chunk_hjheyj7y.gLa)(r));
  }
  if ((0, import_chunk_gygwqn6z._qr)(), (0, import_chunk_cg8dqz0a.x)() === "windows") {
    for (let n of ["SIGINT", "SIGTERM", "SIGHUP", "SIGBREAK"]) process.removeAllListeners(n), process.on(n, () => {
    });
    await Promise.all([(0, import_chunk_5appeerh.qt)((0, import_chunk_0yc3wy8b.AM)(), 2e3, "write queue drain timeout (relaunch)").catch(() => {
    }), (0, import_chunk_mpk68jst.IV)()]), (0, import_chunk_12s0qmhg.pqr)();
    let o = (0, import_child_process.spawnSync)(c, [...l, ...t], { cwd: m, stdio: "inherit", env: e });
    if (o.error) process.stderr.write(`Failed to relaunch Claude Code: ${o.error.message}
`), (0, import_chunk_ndrgvsn7.ix)("relaunch_child_error");
    process.exit(o.status ?? 1);
  }
  let s = (0, import_child_process.spawn)(c, [...l, ...t], { cwd: m, stdio: "inherit", env: e });
  (0, import_chunk_bzyb60p0.M4e)(), djo();
  let d = ["SIGINT", "SIGTERM", "SIGHUP"];
  for (let o of d) process.on(o, () => {
    try {
      s.kill(o);
    } catch {
    }
  });
  return new Promise(() => {
    s.on("close", (o, n) => {
      let f = n ? 128 + (import_os.constants.signals[n] ?? 0) : 0;
      process.exit(o ?? f);
    }), s.on("error", (o) => {
      try {
        (0, import_fs.writeSync)(2, `Failed to relaunch Claude Code: ${o.message}
`);
      } catch {
      }
      (0, import_chunk_ndrgvsn7.ix)("relaunch_child_error"), process.exit(1);
    });
  });
}
