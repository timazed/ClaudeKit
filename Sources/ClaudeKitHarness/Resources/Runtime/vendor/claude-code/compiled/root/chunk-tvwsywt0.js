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
var chunk_tvwsywt0_exports = {};
__export(chunk_tvwsywt0_exports, {
  g7l: () => g7l,
  rKo: () => rKo
});
module.exports = __toCommonJS(chunk_tvwsywt0_exports);
var import_chunk_d57v19zt = require("/$bunfs/root/chunk-d57v19zt.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_wddxyb00 = require("/$bunfs/root/chunk-wddxyb00.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_1z1bgjzv = require("/$bunfs/root/chunk-1z1bgjzv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_4wtfvxk7 = require("/$bunfs/root/chunk-4wtfvxk7.js");
var import_chunk_hn8k40x7 = require("/$bunfs/root/chunk-hn8k40x7.js");
var import_chunk_gjgbprt5 = require("/$bunfs/root/chunk-gjgbprt5.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_wn8z7ghn = require("/$bunfs/root/chunk-wn8z7ghn.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_child_process = require("child_process");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
async function rKo() {
  let r = await (0, import_chunk_c203g5kd.Bf)("claude"), e = (0, import_chunk_d2tjaek4.Wg)()[0], [n, p] = await Promise.all([r ? (0, import_promises.realpath)(r).catch(() => r) : null, e ? (0, import_promises.realpath)(e).catch(() => e) : null]);
  if (r && (p === null || n !== p)) return (0, import_chunk_66srb2mf.Jq)({ cmd: r, prefixArgs: [], target: r });
  return (0, import_chunk_66srb2mf.Vf)();
}
var J = Symbol("staff, over Remote Control");
function q(r) {
  if ((0, import_chunk_vhsysgcd.G5)(r)) return "not_owner";
  let e = r.submittedFromComposer;
  return (0, import_chunk_vhsysgcd.EC)(e) ? e : "not_typed";
}
function z(r, ...e) {
  if (r !== J && !(0, import_chunk_vhsysgcd.EC)(r)) throw Error("Can't restart automatically. Type /restart at the prompt.");
  return (0, import_chunk_4wtfvxk7.Get)(...e);
}
var M = (r) => ({ type: "system", subtype: "local_command", content: r, level: "info", timestamp: (/* @__PURE__ */ new Date()).toISOString(), uuid: (0, import_crypto.randomUUID)(), isMeta: false }), P = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (r) => r.clear());
function K(r, e) {
  let n = (u, l) => ((0, import_chunk_y53wbr8a.a)("tengu_update_refused", { foreground: (0, import_chunk_78g0060s.f)(u) }), l), p = "To use the installed version, exit and start Claude Code again";
  if ((0, import_chunk_4wtfvxk7.AHt)(r) !== void 0) {
    let l = (0, import_chunk_bzyb60p0.El)(), c = (0, import_chunk_bzyb60p0.Bc)();
    if (l || c === null) return n(l ? "saving_off" : "not_written", "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session.");
    if ((0, import_chunk_bzyb60p0.gQ)() !== 0) return n("write_failed", "Couldn't save this session to disk, so nothing was restarted. If you exit now, you may not be able to resume all of it.");
    if (e === void 0) {
      let m = P.get(c);
      if (m === void 0) try {
        m = (0, import_fs.statSync)(c).size > 0 ? void 0 : "empty";
      } catch {
        m = "missing";
      }
      if (m !== void 0) return P.set(c, m), n("gone", m === "empty" ? "Can't restart this session. It isn't saved to disk, so a restart would lose it. Nothing was changed. To use the installed version, exit and start Claude Code again. You may not be able to resume this session." : "Can't restart this session. Its saved file can't be found and may have been moved or deleted. You can keep working here, or run /export to save a copy of the conversation before you exit.");
    }
  }
  let v = (0, import_chunk_4wtfvxk7.h7t)();
  if (!(0, import_fs.existsSync)(v)) return n("no_folder", `Can't restart this session here. Its folder, ${(0, import_chunk_xfj2cwfv.hv)((0, import_chunk_n2dbhmj2.os)(v))}, can't be found. Nothing was changed. To use the installed version, exit and start Claude Code in the folder you want to work in, then run /resume and press Ctrl+A to show all projects.`);
  let w = (0, import_chunk_f9x2f6cx.b2)().map((u) => u.trim()), C = w.find((u, l) => {
    let c = w[l - 1];
    if (c !== "--settings" && c !== "--mcp-config" || u === "" || u.startsWith("{")) return false;
    try {
      let m = c === "--settings" && !(0, import_chunk_6mfepmbb.qC)(u) ? (0, import_chunk_w578pjby.RD)((0, import_chunk_w578pjby.le)(), u).resolvedPath : u;
      return !(0, import_fs.statSync)(m).isFile();
    } catch {
      return true;
    }
  });
  if (C !== void 0) return (0, import_chunk_y53wbr8a.a)("tengu_update_refused_launch_file", {}), n("launch_file", `Can't restart this session. It was started with ${(0, import_chunk_xfj2cwfv.hv)((0, import_chunk_n2dbhmj2.os)(C))}, which can't be read now. Nothing was changed. To use the installed version, exit and start Claude Code again, then run /resume.`);
  if ((0, import_chunk_r60bafc1.Pc)()?.bridgeSessionId) return n("remote_control", "Can't restart while Remote Control is connected. To use the installed version, exit and start Claude Code again, then run /resume.");
  if (!(0, import_fs.existsSync)((0, import_chunk_66srb2mf.Vf)().target)) return n("no_launcher", "Can't restart. The installed version wasn't found. To check your installs, run /doctor.");
  let S = (0, import_chunk_bzyb60p0.Jto)(import_chunk_bzyb60p0.Xto);
  if (S !== void 0) return n("above_max_version", `Can't restart on the installed version. Version ${S} is on hold, so this session is staying on ${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}. Nothing was changed.`);
  return;
}
var g7l = async (r, e) => {
  if ((0, import_chunk_wn8z7ghn.ZC)()) return { type: "text", value: "/restart isn't available in this environment." };
  let n = q(e);
  if (n === "not_owner") return (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { not_owner: true }), (0, import_chunk_y53wbr8a.a)("tengu_update_refused_not_owner", {}), { type: "text", value: "/restart isn't available over Remote Control." };
  let p = (0, import_chunk_865at33z.Qt)() ? import_chunk_c203g5kd.s.CLAUDE_JOB_DIR : void 0;
  if ((0, import_chunk_865at33z.Qt)() && (!(0, import_chunk_865at33z.yke)() || !p)) {
    (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { bg_session: true });
    let t = (0, import_chunk_865at33z.yke)() ? null : (0, import_chunk_9e5mdyfk.TS)();
    return { type: "text", value: t ? `This is a background session \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` : "This is a background session \u2014 press \u2190 to detach, then run `claude respawn <id>` to restart it on the latest build (the id is in the agents view)." };
  }
  if (!p) {
    let t = (0, import_chunk_bzyb60p0.Bc)(), b = (0, import_path.join)((0, import_chunk_hsqa3g9e.Dy)((0, import_chunk_4wtfvxk7.h7t)()), `${(0, import_chunk_f9x2f6cx.W)()}.jsonl`);
    if (t && t !== b) {
      (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { transcript_path_drift: true });
      let y = (0, import_chunk_xfj2cwfv.hv)((0, import_chunk_n2dbhmj2.os)((0, import_chunk_4wtfvxk7.h7t)())), A = (0, import_path.dirname)(t), g = await (0, import_chunk_q3a5dy2r.Nhe)(t), o = g && ((0, import_chunk_q3a5dy2r.NX)(g.tail, "relocated", "relocatedCwd") ?? (0, import_chunk_q3a5dy2r.Dhe)(g.head, "cwd"));
      return { type: "text", value: `Can't restart from here \u2014 ${o && (0, import_chunk_hsqa3g9e.Dy)(o) === A ? `this session belongs to ${(0, import_chunk_xfj2cwfv.hv)((0, import_chunk_n2dbhmj2.os)(o))} but is running in ${y}` : `this session is running in ${y} but its transcript is in ${(0, import_chunk_xfj2cwfv.hv)((0, import_chunk_n2dbhmj2.os)(A))}`}. Restart manually with --resume to continue on the latest version.` };
    }
  }
  let v = (t) => {
    if (!(0, import_chunk_hn8k40x7.$_e)(e.taskRegistry.all())) return;
    return (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { active_tasks: true, ...t && { deferred: t } }), "Can't restart while work is running in the background. Wait for it to finish or stop it in /tasks, then try again.";
  }, w = (t) => {
    let b = (0, import_chunk_gjgbprt5.sie)((0, import_chunk_bz1f2qnq.Z)(e), (0, import_chunk_f9x2f6cx.S2)());
    if (b.length === 0) return v(t);
    (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { uncarriable: true });
    let y = (0, import_chunk_bzyb60p0.El)() ? "" : " (add --continue to return to this conversation)";
    return `Can't switch to the new version from inside this session \u2014 it has restrictions a restart can't carry over (${b.join("; ")}). Nothing was changed; exit and start claude again for the new version${y}.`;
  }, C = p ? v() : w();
  if (C !== void 0) return { type: "text", value: C };
  if (p) {
    let t = (0, import_path.basename)(p);
    if (await (0, import_chunk_4wtfvxk7.oq)(e.messages, e.storageV5), !await (0, import_chunk_5appeerh.qt)((0, import_chunk_bzyb60p0.Pf)(), 3e4, "session flush").then(() => true, () => false)) return (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { bg_flush_failed: true }), { type: "text", value: "Couldn't save the session, so nothing restarted. Try /restart again in a moment." };
    let y = await rKo(), A = v(true);
    if (A !== void 0) return { type: "text", value: A };
    let g = (0, import_chunk_5e3gtsn9.PV)((0, import_chunk_1z1bgjzv.Tit)({ ...process.env }));
    for (let o of import_chunk_r6r2wdsw.OVt) delete g[o];
    delete g.CLAUDE_JOB_DIR;
    for (let o of Object.keys(g)) if (o.startsWith("CLAUDE_BG_")) delete g[o];
    (0, import_chunk_y53wbr8a.a)("tengu_update_bg_respawn", { carried_comment_monitor: (0, import_chunk_hn8k40x7.NYs)() && (0, import_chunk_hn8k40x7.hIa)(e.taskRegistry.all()) });
    try {
      let o = (0, import_child_process.spawn)(y.cmd, [...y.prefixArgs, "respawn", t], { detached: true, stdio: "ignore", windowsHide: true, env: g, cwd: (0, import_os.homedir)() });
      (0, import_chunk_9zdrdv25.AB)(o.pid), o.on("error", (I) => {
        (0, import_chunk_k449cc64.i)(I);
      }), o.unref();
    } catch (o) {
      return (0, import_chunk_k449cc64.i)(o), (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { bg_spawn_failed: true }), { type: "text", value: `Couldn't restart automatically \u2014 press \u2190 to detach, then run \`claude respawn ${t}\` to restart it on the latest build.` };
    }
    return { type: "text", value: `Restarting this session on the latest version\u2026 If it doesn't come back within a minute, run \`claude respawn ${t}\` from a terminal.` };
  }
  if (n === "not_typed") return (0, import_chunk_y53wbr8a.a)("tengu_update_refused", { foreground: (0, import_chunk_78g0060s.f)(n) }), (0, import_chunk_y53wbr8a.a)("tengu_update_refused_not_typed", {}), { type: "text", value: "Can't restart automatically. Type /restart at the prompt." };
  let S = K(e.messages, e.storageV5);
  if (S !== void 0) return { type: "text", value: S };
  await (0, import_chunk_4wtfvxk7.oq)(e.messages, e.storageV5);
  let u = w(true);
  if (u !== void 0) return { type: "text", value: u };
  let l = (0, import_chunk_bz1f2qnq.Z)(e), c = [...(0, import_chunk_gjgbprt5.D$e)(l, (0, import_chunk_bz1f2qnq.URe)(e)), ...(0, import_chunk_gjgbprt5.L$e)(l, (0, import_chunk_f9x2f6cx.zEe)())], m = (0, import_chunk_wtm85h0y.Yc)() ? void 0 : e.getAppState().teamContext?.teamName;
  await (0, import_chunk_4wtfvxk7.qve)();
  let O = w(true);
  if (O !== void 0) return { type: "text", value: O };
  let h = (0, import_chunk_r60bafc1.Pc)(), k = h?.bridgeSessionId, D = h?.getLastSequenceNum(), F = h?.outboundOnly, V = h?.sessionGroupingId;
  if (k) e.setAppState((t) => t.replBridgeSkipNextArchive ? t : { ...t, replBridgeSkipNextArchive: true }), h.writeSdkMessages([(0, import_chunk_53snsm3k._Es)("Switching to latest Claude Code\u2026 reconnecting", (0, import_chunk_f9x2f6cx.W)())]), await (0, import_chunk_5appeerh.qt)(h.flush(), 2e3, "bridge flush").catch(() => {
  }), await h.teardown({ skipArchive: true });
  let _ = {};
  if (m) {
    _.CLAUDE_INTERNAL_ASSISTANT_TEAM_NAME = m;
    let { sessionListId: t } = (0, import_chunk_mvszxaxb.Zo)().taskList;
    if (t) _.CLAUDE_INTERNAL_SESSION_TASK_LIST_ID = t;
  }
  Object.assign(_, (0, import_chunk_qbrmmydq.Z9)()), Object.assign(_, (0, import_chunk_gjgbprt5.g7t)(l.additionalWorkingDirectories)), Object.assign(_, (0, import_chunk_9e5mdyfk.cDe)(k, D, F, V, (0, import_chunk_9e5mdyfk.qpr)(h, (0, import_chunk_bzyb60p0._Q)())) ?? {});
  let E = (0, import_chunk_66srb2mf.Vf)(), T = await (0, import_chunk_4wtfvxk7.Wte)(e.messages, "relaunch", {}, e.storageV5), R = (0, import_chunk_4wtfvxk7.AHt)(e.messages) !== void 0;
  if (R && !T) {
    try {
      await (0, import_chunk_bzyb60p0._E)([...e.messages, M(`<${import_chunk_k449cc64.xp}>/restart</${import_chunk_k449cc64.xp}>
<${import_chunk_k449cc64.ew}>restart</${import_chunk_k449cc64.ew}>
<${import_chunk_k449cc64.SF}></${import_chunk_k449cc64.SF}>`), M(`<${import_chunk_k449cc64.Tf}>${(0, import_chunk_bzyb60p0.y4a)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, (0, import_chunk_bzyb60p0.eSt)(E.target))}</${import_chunk_k449cc64.Tf}>`)], void 0, void 0, void 0, e.storageV5);
    } catch (t) {
      (0, import_chunk_k449cc64.i)(t);
    }
    await (0, import_chunk_4wtfvxk7.oq)(e.messages, e.storageV5);
  }
  (0, import_chunk_y53wbr8a.a)(R ? "tengu_update_relaunch" : "tengu_update_relaunch_fresh", { from_version: (0, import_chunk_865at33z.Ad)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION), target_version: (0, import_chunk_865at33z.Ad)((0, import_chunk_bzyb60p0.Xto)(E.target)), native_install: (0, import_chunk_66srb2mf.ibe)() });
  try {
    return await z(n, T, { launcher: E, freshIfNoTranscript: !R, extraArgs: c, proactivity: { proactivityLevel: e.getProactivityLevel(), toolPermissionContext: l }, env: Object.keys(_).length > 0 ? _ : void 0, preSpawn: () => {
      process.stdout.write(R && (0, import_chunk_bzyb60p0.gQ)() !== 0 ? import_chunk_d57v19zt.Re.dim(`
Claude's last response couldn't be saved, so it may be missing.

`) : `
`);
    } }, e.storageV5);
  } catch (t) {
    if (!T) throw t;
    return (0, import_chunk_k449cc64.i)(t), { type: "text", value: (0, import_chunk_wddxyb00.vs)(e.session) ? (0, import_chunk_4wtfvxk7.gqe)("Couldn't restart Claude Code (detail withheld on this connection).", (0, import_chunk_jv7av99m.d)(t)) : `Couldn't restart Claude Code: ${(0, import_chunk_jv7av99m.d)(t)}.` };
  }
};
