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
var chunk_0qa0x0py_exports = {};
__export(chunk_0qa0x0py_exports, {
  GUr: () => GUr,
  zUr: () => zUr
});
module.exports = __toCommonJS(chunk_0qa0x0py_exports);
var import_chunk_ha393e1n = require("/$bunfs/root/chunk-ha393e1n.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_3jer9ns5 = require("/$bunfs/root/chunk-3jer9ns5.js");
var import_chunk_x0vfzwdd = require("/$bunfs/root/chunk-x0vfzwdd.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
(0, import_chunk_adx6804h.B)();
var F = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ egress_probe: (0, import_chunk_adx6804h.n)().refine((a) => a !== "not-run") }));
async function I(a, b) {
  let { exe: s, prependArgs: w } = (0, import_chunk_ha393e1n.rj)(), o = Math.floor(a), r = Date.now(), { exitCode: x, timedOut: g, stdout: e, stderr: S, error: h } = await (0, import_chunk_7fsmgfxx.kt)(s, [...w, "wfp", "verify", "--target", "127.0.0.1:9", ...b ? ["--allow-loopback"] : [], "--write-restricted-token"], { timeout: o, stdin: "ignore", cwd: (0, import_chunk_x0vfzwdd.uU)(), maxBuffer: 1e5 }), f = Math.max(0, Date.now() - r), _ = Math.max(1, Math.round(f / 1e3));
  (0, import_chunk_w578pjby.t)(`[sandbox] starting the sandbox account: ${g ? "stopped at the time limit" : `exit ${x ?? "none"}`} after ${_}s (limit ${a} ms): ${S || e || h || (x === void 0 && !g ? "srt-win never ran, or something other than the limit ended it" : "no output")}`);
  let k = { duration_ms: f, exit_code: x ?? -1 };
  if (F().safeParse((0, import_chunk_0jve1fep.et)(e, false)).success) return (0, import_chunk_cqa9hrgx.u)("sandbox_windows_first_start", k), { outcome: "started", seconds: _ };
  let i = g ? "timed_out" : "not_started";
  return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_first_start", i, k), { outcome: i, seconds: _ };
}
var GUr = "Setting up the Windows sandbox. Approve the administrator prompt if Windows shows one. After that, set-up can take a few minutes.";
class D {
  inFlight = void 0;
  run(a) {
    return this.inFlight ??= a().finally(() => {
      this.inFlight = void 0;
    }), this.inFlight;
  }
}
var E = new import_chunk_2904xtvq.j(() => new D());
function zUr(a, b = () => {
}, s = 1 / 0) {
  return E.of(a).run(() => M(b, s));
}
async function M(a, b) {
  let s = [], w = (0, import_chunk_ha393e1n.rj)(), o = (0, import_chunk_ha393e1n.b_r)(), r = await (0, import_chunk_ha393e1n.rbe)({ srtWin: w }).catch(() => {
    return;
  }), x = r !== void 0 && r.user.provisioned && r.wfp.state !== "absent" && r.wfp.allowLoopback !== o, g = (0, import_chunk_3jer9ns5.GXr)(r?.user);
  if (g !== void 0 && r?.user.provisioned && r.user.credPresent && (0, import_chunk_ha393e1n.Gfo)(r.user) === void 0 && (r.wfp.state === "installed" || r.wfp.state === "cannot-read") && !x) {
    let e = await import_chunk_ha393e1n.Ue.checkDependenciesAsync().catch(() => {
      return;
    });
    if (e?.errors.length === 1 && e.errors[0] === g) return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "secondary_logon_unusable"), { status: "partial", message: `Set-up changed nothing. Run it again once this is fixed: ${g}` };
  }
  if (x) s.push(`The sandbox on this machine was set up with local connections ${o ? "off" : "on"}, and sandbox.network.allowLocalBinding asks for them ${o ? "on" : "off"}: this set-up replaces its network filters.`);
  if (o) s.push(`Local connections are on (sandbox.network.allowLocalBinding). ${import_chunk_ha393e1n.bfs} To keep sandboxed commands off local ports, remove that setting and run /sandbox install again.`);
  for (let e of s) a(e);
  try {
    let e = await (0, import_chunk_ha393e1n.wfs)({ sandboxUser: import_chunk_ha393e1n.dUt, allowLoopback: o, force: x, onProfileGrantStart: (i) => a(`${i.replace(/\s*Skip with[\s\S]*$/, "")} ${L} This needs no further elevation and can take a few minutes. ${(0, import_chunk_ha393e1n.S_r)()}`), onProfileGrantProgress: a, srtWin: w });
    if (e.cancelled) {
      if (e.user.provisioned && e.user.credPresent) {
        let i = (0, import_chunk_3jer9ns5.GXr)(e.user);
        if (i === void 0 && (0, import_chunk_ha393e1n.M9e)().source === "managed" && (0, import_chunk_ha393e1n.Fwt)()) {
          import_chunk_ha393e1n.Ue.invalidateDependencyCache();
          let v = await P(e.user);
          if (await import_chunk_ha393e1n.Ue.checkDependenciesAsync(), v !== null) return v;
          return (0, import_chunk_cqa9hrgx.u)("sandbox_windows_install"), { status: "ok", message: "Install was cancelled at the elevation prompt, but the sandbox user is already provisioned \u2014 the sandbox TLS inspection CA is now set up and trusted for the sandbox user. Network filters can't be verified from a non-elevated process; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt." + A() };
        }
        return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "uac_cancelled_provisioned"), import_chunk_ha393e1n.Ue.invalidateDependencyCache(), await import_chunk_ha393e1n.Ue.checkDependenciesAsync(), { status: "cancelled", message: `Install was cancelled at the elevation prompt, but the sandbox user is already provisioned. Network filters can't be verified from a non-elevated process${import_chunk_ha393e1n.Ue.areSandboxSettingsLockedByPolicy() ? "" : " \u2014 run /sandbox to check the current status"}; if sandboxing doesn't start, run /sandbox install again and approve the elevation prompt. If you don't have administrator rights, ask your administrator to run the sandbox set-up.${i === void 0 ? "" : ` ${i}`}` };
      }
      return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "uac_cancelled"), { status: "cancelled", message: "Install was cancelled at the elevation prompt. Run /sandbox install again and approve the prompt to set up the sandbox user and network filters. If you don't have administrator rights, ask your administrator to install the network filters." };
    }
    let S = e.user.provisioned && e.user.credPresent && (e.wfp.state === "installed" || e.wfp.state === "cannot-read"), h = (0, import_chunk_3jer9ns5.GXr)(e.user), f;
    if (S && h === void 0 && !((0, import_chunk_ha393e1n.M9e)().source === "managed" && (0, import_chunk_ha393e1n.Fwt)())) {
      await (0, import_chunk_ha393e1n.Yfo)({ exePath: process.execPath, previous: void 0, getUserStatus: () => Promise.resolve(e.user) });
      let i = Math.min(15e4, b - Date.now());
      if (i >= 1e4) f = await I(i, o);
      else (0, import_chunk_cqa9hrgx.l)("sandbox_windows_first_start", "no_time_left"), f = "no_time_left";
    }
    if (import_chunk_ha393e1n.Ue.invalidateDependencyCache(), await import_chunk_ha393e1n.Ue.checkDependenciesAsync(), S) {
      if (h === void 0 && (0, import_chunk_ha393e1n.M9e)().source === "managed" && (0, import_chunk_ha393e1n.Fwt)()) {
        let T = await P(e.user);
        if (T !== null) return T;
      }
      let i = e.profileGrant?.applied === true ? e.profileGrant.result.unprotected : [];
      if (i.length > 0) return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "profile_exclusion_unprotected"), { status: "partial", message: `WARNING: the sandbox is installed, but ${i.length} credential store(s) that set-up excludes could not be closed, and sandboxed commands CAN READ ${i.length === 1 ? "it" : "them"}: ${i.slice(0, 10).map((T) => `${(0, import_chunk_ha393e1n.FP)(T.path)} (${(0, import_chunk_ha393e1n.PNn)(T.reason)})`).join("; ")}${i.length > 10 ? "; \u2026" : ""}. Only the owner of such a path or an administrator can close it; run /sandbox install again afterwards.${C(e.profileGrant)}${y(o, s)}${A()}${h === void 0 ? "" : ` ${h}`}` };
      let v = e.wfp.state === "installed" ? "Sandbox user and network filters installed" : "Sandbox user and network filters installed (filters can't be verified from a non-elevated process)";
      if (h !== void 0) return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "secondary_logon_unusable"), { status: "partial", message: `${v}.${A()}${y(o, s)}${C(e.profileGrant)} ${h}` };
      (0, import_chunk_cqa9hrgx.u)("sandbox_windows_install");
      let R = f === void 0 || f === "no_time_left" ? "" : `${f.seconds} ${(0, import_chunk_7cfjrnwy.O)(f.seconds, "second")}`, W = f === void 0 ? "" : { started: ` Windows signed in the sandbox user in ${R}.`, timed_out: ` The sandbox user had not finished signing in after ${R}. If the sandbox fails to start, restart Claude Code. If it fails again, run /sandbox install again.`, not_started: " Claude Code couldn't sign in the sandbox user. It will try again the next time it starts the sandbox, and show the reason if that fails too.", no_time_left: " Set-up ran out of time before it could sign in the sandbox user, so the sandbox may fail to start the first time. If it does, restart Claude Code. If it fails again, run /sandbox install again." }[f === "no_time_left" ? f : f.outcome];
      if (import_chunk_ha393e1n.Ue.isSandboxingEnabled()) return { status: "ok", message: `${v} and active.${A()}${y(o, s)}${C(e.profileGrant)}${W}` };
      let N = import_chunk_ha393e1n.Ue.isSandboxEnabledInSettings() ? import_chunk_ha393e1n.Ue.areSandboxSettingsLockedByPolicy() ? "Run `claude sandbox status` in a terminal and check `installed` and `enabled` in its JSON output." : "Run /sandbox to check the current status." : import_chunk_ha393e1n.Ue.areSandboxSettingsLockedByPolicy() ? "The sandbox is off in your settings, and /sandbox cannot turn it on here, because a --settings file or managed settings control the sandbox settings. Set sandbox.enabled to true in your settings, or ask whoever manages those settings." : "Run /sandbox to choose a sandbox mode and turn it on.";
      return { status: "ok", message: `${v}. ${N}${A()}${y(o, s)}${C(e.profileGrant)}${W}` };
    }
    let _ = !e.user.provisioned ? "user_not_provisioned" : !e.user.credPresent ? "cred_not_readable" : "wfp_not_installed";
    return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", _), { status: "partial", message: `Install completed (sandbox user: ${{ user_not_provisioned: "not provisioned", cred_not_readable: "provisioned, credential not readable", wfp_not_installed: "provisioned" }[_]}, filters: ${e.wfp.state}). Run /sandbox install again to retry.` };
  } catch (e) {
    import_chunk_ha393e1n.Ue.invalidateDependencyCache();
    let S = (0, import_chunk_jv7av99m.d)(e);
    (0, import_chunk_w578pjby.t)(`/sandbox install failed: ${S}`, { level: "error" });
    let h = (0, import_chunk_ha393e1n.VQ)(S, { omitCcRemedy: true }).replace(/\.$/, "");
    if (e instanceof import_chunk_ha393e1n.Ml && e.code === "install_timeout") return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "uac_timeout"), { status: "error", message: `The install timed out after 2 minutes: ${h}. If an elevation prompt was showing, run /sandbox install again and respond to the prompt. If no prompt appeared, the installer may be blocked on this machine${import_chunk_ha393e1n.Ue.areSandboxSettingsLockedByPolicy() ? "" : " \u2014 run /sandbox to check the current status"}.` };
    if (e instanceof import_chunk_ha393e1n.Ml && e.code === "profile_grant_blocked_by_session") return await import_chunk_ha393e1n.Ue.checkDependenciesAsync(), (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "profile_grant_blocked"), { status: "partial", message: "The sandbox account and network filters are installed, but the read access to your user profile was left as it was: it is changed only while no sandboxed session or command is running on this machine, and one is (another Claude Code window, or this one if it has run a sandboxed command). Close the sessions that use the sandbox, then run `claude sandbox install` in a terminal, or /sandbox install in a new session." + y(o, s) };
    if (e instanceof import_chunk_ha393e1n.Ml && e.code === "profile_operation_in_progress") return await import_chunk_ha393e1n.Ue.checkDependenciesAsync(), (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "profile_operation_in_progress"), { status: "partial", message: "The sandbox account and network filters are installed, but the read access to your user profile was left as it was: another sandbox set-up step on this profile is still running (a /sandbox install in another window, or the removal of that access). Wait for it to finish, then run /sandbox install again." + y(o, s) };
    if (e instanceof import_chunk_ha393e1n.Ml && e.code === "profile_grant_failed") {
      await import_chunk_ha393e1n.Ue.checkDependenciesAsync(), (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "profile_grant_failed");
      let f = e.message.includes("read grant on your user profile did not finish in time"), _ = /(?:did not finish in time|could not be applied): ([\s\S]*?)(?:\s*No session starts until it is complete[\s\S]*)?$/.exec(e.message)?.[1]?.trim(), k = f ? "" : /^srt-win profile grant exited (?:\d+|null):\s*([\s\S]*)$/.exec(_ ?? "")?.[1]?.trim() ?? _ ?? "", i = k === "" ? "" : (0, import_chunk_ha393e1n.PNn)(k);
      return { status: "partial", message: `The sandbox account and network filters are installed, but the tool directories of your user profile could not be made readable to sandboxed commands: the grant ${f ? "did not finish in time" : "failed"}. Sandboxed commands will not start until that step completes. Run /sandbox install again to retry.${i ? ` (Details: ${i})` : ""}${y(o, s)}` };
    }
    if (e instanceof import_chunk_ha393e1n.Ml && e.code === "install_config_conflict") return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "config_conflict"), { status: "error", message: "A sandbox network-filter set is already installed with a different configuration: under a different sandbox account name, or with the other setting for local connections (sandbox.network.allowLocalBinding) while its state could not be read. Run /sandbox install again; if it is refused again, close every Claude Code session and run claude sandbox uninstall in a terminal, then run /sandbox install." };
    if (/^srt-win (status|wfp|user)[ :]/.test(S)) return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "status_probe_failed"), { status: "error", message: `The installer ran, but the sandbox status couldn't be read back afterwards: ${h}. ${import_chunk_ha393e1n.Ue.areSandboxSettingsLockedByPolicy() ? "Restart Claude Code to check again." : "Run /sandbox to check the current status."}` };
    return (0, import_chunk_cqa9hrgx.m)("sandbox_windows_install", "install_threw"), { status: "error", message: `Couldn't install the sandbox user and network filters: ${h}. Run /sandbox install again to retry.` };
  }
}
var L = "The sandbox account is one per machine: where other people use this machine, their sandboxed commands can read the same tool directories of your profile too.";
function C(a) {
  if (a === void 0) return "";
  if (!a.applied) return ` Your user profile was not made readable to sandboxed commands (${a.reason.replace(/\.$/, "")}), so they can read nothing in it; run /sandbox install again, as the user who starts sessions, to apply that.`;
  let { profile: b, granted: s, denied: w, notGranted: o, staleAllow: r } = a.result, x = r.length > 0 ? `Credential stores are denied, but ${r.length} path(s) that set-up no longer means to open may still be read through an entry it could not remove: ${r.slice(0, 10).map((g) => `${(0, import_chunk_ha393e1n.FP)(g.path)} (${(0, import_chunk_ha393e1n.PNn)(g.reason)})`).join("; ")}${r.length > 10 ? "; \u2026" : ""}; a session start tries local paths again.` : "The rest of the profile stays unreadable unless added to sandbox.filesystem.allowRead, and credential stores are denied.";
  return ` Sandboxed commands can now read the tool directories of your user profile (${b}), including package-manager configuration that can hold feed tokens (.npmrc, pip.ini, NuGet.Config, Maven settings.xml, gradle.properties, .gitconfig): ${s} folders made readable, ${w} excluded${o.length > 0 ? `, ${o.length} left unreadable because their permissions could not be changed` : ""}. ${x} ${L} ${(0, import_chunk_ha393e1n.S_r)()}`;
}
function y(a, b) {
  let s = import_chunk_ha393e1n.Ue.untilRestart();
  return `${b.map((w) => ` ${w}`).join("")}${s === void 0 ? "" : ` This session started with local connections ${a ? "off" : "on"} and keeps that until it ends, so its sandbox ${s === "refused" ? "cannot run" : "is off"} now. ${s === "refused" ? import_chunk_ha393e1n.spo : import_chunk_ha393e1n.opo}.`}`;
}
async function P(a) {
  let b = await (0, import_chunk_ha393e1n.Yfo)({ exePath: process.execPath, previous: void 0, getUserStatus: () => Promise.resolve(a) });
  try {
    await (0, import_chunk_ha393e1n.g_r)({ status: a, srtWin: (0, import_chunk_ha393e1n.rj)() });
  } catch (s) {
    let w = (0, import_chunk_jv7av99m.d)(s);
    (0, import_chunk_w578pjby.t)(`/sandbox install: managed sandbox CA step failed: ${w}`, { level: "error" });
    let o = (0, import_chunk_ha393e1n.VQ)(w, { omitCcRemedy: true, programPermissionAdded: b?.added }).replace(/\.$/, "");
    if (s instanceof import_chunk_ha393e1n.Ml && (s.code === "trust_ca_failed" || s.code === "spawn_failed" || s.code === "srt_win_timeout")) return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "trust_ca_failed"), { status: "partial", message: `The sandbox TLS inspection CA couldn't be trusted for the sandbox user: ${o}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.` };
    return (0, import_chunk_cqa9hrgx.l)("sandbox_windows_install", "persistent_ca_failed"), { status: "partial", message: `The sandbox TLS inspection CA couldn't be created: ${o}. Sandboxed HTTPS won't work \u2014 run /sandbox install again to retry.` };
  }
  return null;
}
function A() {
  return (0, import_chunk_ha393e1n.Fwt)() && import_chunk_ha393e1n.Ue.needsRestartForTlsTerminate() ? " Restart Claude Code to enable TLS inspection for this session." : "";
}
