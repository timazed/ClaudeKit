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
var chunk_8j73rsm0_exports = {};
__export(chunk_8j73rsm0_exports, {
  FXn: () => FXn,
  H2l: () => H2l,
  MKe: () => MKe,
  NXn: () => NXn,
  h2r: () => h2r,
  i6s: () => i6s,
  m2r: () => m2r,
  ojo: () => ojo
});
module.exports = __toCommonJS(chunk_8j73rsm0_exports);
var import_chunk_mf29k4y3 = require("/$bunfs/root/chunk-mf29k4y3.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_t8x29mwc = require("/$bunfs/root/chunk-t8x29mwc.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_7xxwg4th = require("/$bunfs/root/chunk-7xxwg4th.js");
var import_chunk_ch6jxpf8 = require("/$bunfs/root/chunk-ch6jxpf8.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_fbthhpfj = require("/$bunfs/root/chunk-fbthhpfj.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_child_process = require("child_process");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var se = 1e4, B = 250, m2r = 12e4, ie = 1e3, le = 6e5, ce = 1e4, X = /^(.+)\/Caskroom\/[^/]+\/[^/]+\/claude$/, y = "/node_modules/@anthropic-ai/", de = 6e4;
async function i6s(n) {
  try {
    let e = await (0, import_promises.stat)(n);
    if (!e.isFile() || e.size >= import_chunk_fbthhpfj.Zsr) return "present";
    return Date.now() - Math.max(e.mtimeMs, e.ctimeMs) < de ? "fresh_stub" : "stale_stub";
  } catch (e) {
    return (0, import_chunk_jv7av99m.w)(e) === "ENOENT" ? "missing" : "present";
  }
}
var ue = /* @__PURE__ */ new Set(["ENOENT", "EACCES", "ENOEXEC", "EFTYPE", "ETXTBSY", "EBUSY", "EUNKNOWN", "EPERM"]);
async function NXn(n, e, { withoutOAuthTokenEnv: s = false } = {}) {
  let o = (0, import_chunk_d2tjaek4.kg)();
  if (o) return (0, import_chunk_cqa9hrgx.m)("agent_launcher", "invalid_config"), { err: new import_chunk_jv7av99m.A(o, "CLAUDE_CODE_PROCESS_WRAPPER is misconfigured") };
  if (!await (0, import_chunk_d2tjaek4.OV)()) return (0, import_chunk_cqa9hrgx.m)("agent_launcher", "launcher_not_runnable"), { err: new import_chunk_jv7av99m.A(`${import_chunk_d2tjaek4.YP}: launcher \`${(0, import_chunk_d2tjaek4.Wg)()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting); background sessions are not started unwrapped`, "CLAUDE_CODE_PROCESS_WRAPPER launcher is not runnable") };
  let { wrapper: c, invocation: u } = (0, import_chunk_ch6jxpf8.R_)(() => ({ wrapper: (0, import_chunk_d2tjaek4.Wg)(), invocation: (0, import_chunk_66srb2mf.Vf)() })), { cmd: r, prefixArgs: i, target: E } = u, C = [r, ...i, ...n], p = Se({ dropShellOAuthToken: s || await ojo(e) });
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") {
    if ((0, import_chunk_d2tjaek4.fEo)().platformIgnored) (0, import_chunk_cqa9hrgx.l)("agent_launcher", "platform_unsupported");
    let g = await J(C, p);
    if (g.ok) return { err: null };
    (0, import_chunk_w578pjby.t)(`daemon: WMI spawn failed (${g.reason}); falling back to direct spawn \u2014 daemon will not survive SSH/terminal close`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_wmi_fallback", { timeout: g.reason === "timeout", enoent: g.reason === "enoent", no_powershell: g.reason === "no-powershell", rc: g.rc });
  }
  let _ = (0, import_chunk_cg8dqz0a.x)() === "macos" ? await fe() : [], O = await (0, import_promises.mkdtemp)((0, import_path.join)((0, import_os.tmpdir)(), "cc-daemon-")).catch(() => null), h = O ? (0, import_path.join)(O, "stderr.log") : void 0, D = h ? await (0, import_promises.open)(h, "w").catch(() => null) : null;
  try {
    if (c.length > 0) return { ...await _e(n, p, _, D), stderrPath: h };
    let g = await P(await T(_, C), p, D?.fd), { err: R } = g, N = (0, import_chunk_jv7av99m.w)(R), F = false, v;
    if (N !== void 0 && ue.has(N) && FXn(E)) {
      let f = await h2r(E);
      if (F = !f.recovered && f.installInProgressAtEnd, v = f.waitedMs, f.recovered) {
        if ((0, import_chunk_cg8dqz0a.x)() === "windows") g = (await J(C, p)).ok ? { err: null } : await P(C, p, D?.fd);
        else g = await P(await T(_, C), p, D?.fd);
        N = (0, import_chunk_jv7av99m.w)(g.err);
      }
      if ((0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_reinstall_wait", { waited_ms: f.waitedMs, recovered: f.recovered, respawn_ok: f.recovered && g.err === null, extended: f.extended, install_in_progress: f.installInProgressAtEnd, errno: (0, import_chunk_jv7av99m.Cr)(R) ?? (0, import_chunk_78g0060s.S)("unknown"), ...f.recovered && g.err !== null && { respawn_errno: (0, import_chunk_jv7av99m.Cr)(g.err) ?? (0, import_chunk_78g0060s.S)("unknown") } }), f.recovered && g.err === null) return (0, import_chunk_w578pjby.t)(`daemon: ${E} was being reinstalled (exec ${(0, import_chunk_jv7av99m.w)(R)}); started it after ${f.waitedMs}ms`), { ...g, stderrPath: h, recoveredAfterReinstallWait: true, reinstallWaitedMs: v };
      (0, import_chunk_w578pjby.t)(f.recovered ? `daemon: ${E} came back after ${f.waitedMs}ms of an npm reinstall but starting it failed again (exec ${(0, import_chunk_jv7av99m.w)(g.err)})` : `daemon: ${E} not runnable after waiting ${f.waitedMs}ms for an npm reinstall (exec ${(0, import_chunk_jv7av99m.w)(R)}; install ${f.installInProgressAtEnd ? "still in progress" : f.extended ? "ended" : "not seen"})`);
    }
    let I = { gaveUpOnNpmInstallInProgress: F, reinstallWaitedMs: v };
    if (N !== "ENOENT" && N !== "EACCES") return { ...g, stderrPath: h, ...I };
    let b = /* @__PURE__ */ new Set([E]), L = (0, import_chunk_ch6jxpf8.R_)(() => (0, import_chunk_66srb2mf.Vf)({ pinToCurrentBinary: true }));
    if (!b.has(L.target)) {
      b.add(L.target), (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_execpath_fallback", { errno_enoent: N === "ENOENT", errno_eacces: N === "EACCES" });
      let f = await P(await T(_, [L.cmd, ...L.prefixArgs, ...n]), p, D?.fd);
      if ((0, import_chunk_jv7av99m.w)(f.err) !== "ENOENT") return { ...f, stderrPath: h, ...I };
    }
    let { link: U, waitedMs: M } = await q(L.target);
    if (M > 0) I.reinstallWaitedMs = (v ?? 0) + M;
    if (U !== null && !b.has(U)) {
      b.add(U), (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_homebrew_fallback", { errno_enoent: N === "ENOENT", errno_eacces: N === "EACCES", waited_ms: M });
      let f = await P(await T(_, [U, ...n]), p, D?.fd);
      if (f.err === null) return { ...f, stderrPath: h, ...I, recoveredAfterReinstallWait: M > 0 };
    }
    let V = (0, import_chunk_66srb2mf.kAe)();
    if (!b.has(V)) {
      b.add(V), (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_launcher_fallback", { errno_enoent: N === "ENOENT", errno_eacces: N === "EACCES" });
      let f = await P(await T(_, [V, ...n]), p, D?.fd);
      if ((0, import_chunk_jv7av99m.w)(f.err) !== "ENOENT") return { ...f, stderrPath: h, ...I };
    }
    let k = await (0, import_chunk_66srb2mf.NNn)();
    if ((0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_versions_fallback", { found: k !== null }), k !== null && !b.has(k)) return { ...await P(await T(_, [k, ...n]), p, D?.fd), stderrPath: h, ...I };
    return { err: R, stderrPath: h, ...I };
  } finally {
    await D?.close().catch(() => {
    });
  }
}
async function _e(n, e, s, o) {
  let c = async (O) => {
    let h = (0, import_chunk_ch6jxpf8.R_)(() => (0, import_chunk_66srb2mf.Jq)(O));
    return P(await T(s, [h.cmd, ...h.prefixArgs, ...n]), e, o?.fd);
  }, u = (0, import_chunk_66srb2mf.VDe)();
  if (await MKe(u.cmd, { rejectNpmStub: true })) return c(u);
  let r = false, i;
  if (FXn(u.cmd)) {
    let O = await h2r(u.cmd);
    if (i = O.waitedMs, (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_reinstall_wait", { waited_ms: O.waitedMs, recovered: O.recovered, respawn_ok: O.recovered, extended: O.extended, install_in_progress: O.installInProgressAtEnd, probe: true }), O.recovered) return { ...await c(u), recoveredAfterReinstallWait: true, reinstallWaitedMs: i };
    r = O.installInProgressAtEnd;
  }
  let E = (0, import_chunk_66srb2mf.VDe)({ pinToCurrentBinary: true });
  if (E.cmd !== u.cmd && await MKe(E.cmd)) return (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_execpath_fallback", { errno_enoent: false, errno_eacces: false, probe: true }), { ...await c(E), reinstallWaitedMs: i };
  let { link: C, waitedMs: p } = await q(E.cmd);
  if (p > 0) i = (i ?? 0) + p;
  if (C !== null && await MKe(C)) return (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_homebrew_fallback", { errno_enoent: false, errno_eacces: false, probe: true, waited_ms: p }), { ...await c({ cmd: C, prefixArgs: [], target: C }), recoveredAfterReinstallWait: p > 0, reinstallWaitedMs: i };
  let _ = await (0, import_chunk_66srb2mf.NNn)();
  if ((0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_versions_fallback", { found: _ !== null, probe: true }), _ !== null && _ !== E.cmd && await MKe(_)) return { ...await c({ cmd: _, prefixArgs: [], target: _ }), reinstallWaitedMs: i };
  return (0, import_chunk_cqa9hrgx.m)("agent_launcher", "no_runnable_target"), { err: new import_chunk_jv7av99m.A(`no runnable Claude Code binary was found to run through the configured launcher \u2014 last tried: ${_ ?? E.cmd}`, "no runnable claude binary for the configured launcher"), gaveUpOnNpmInstallInProgress: r, reinstallWaitedMs: i };
}
async function MKe(n, e = {}) {
  try {
    let s = await (0, import_promises.stat)(n);
    if (!s.isFile()) return false;
    if (e.rejectNpmStub && s.size < import_chunk_fbthhpfj.Zsr) return false;
    return await (0, import_promises.access)(n, import_fs.constants.X_OK), true;
  } catch {
    return false;
  }
}
function FXn(n) {
  return n.replace(/\\/g, "/").includes(y);
}
async function H2l(n) {
  let e = X.exec(n)?.[1];
  if (e === void 0) return null;
  let s = (0, import_path.join)(e, "bin", "claude"), o = await (0, import_promises.realpath)(s).catch(() => null);
  return o !== null && o !== n && o.startsWith(`${e}/Caskroom/`) ? s : null;
}
async function q(n) {
  for (let e = 0; ; e += B) {
    let s = X.test(n) && await (0, import_promises.stat)(`${(0, import_path.dirname)(n)}.upgrading`).then(() => true, () => false), o = await H2l(n);
    if ((s || e > 0) && o !== null && !await MKe(o)) o = null;
    if (o !== null || !s || e >= ce) {
      if (o === null && e > 0) (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_spawn_homebrew_wait_gave_up", { waited_ms: e });
      return { link: o, waitedMs: e };
    }
    await (0, import_chunk_5appeerh.K)(B);
  }
}
async function j(n) {
  let e = n.replace(/\\/g, "/").indexOf(y);
  if (e === -1) return false;
  let s = n.slice(0, e + y.length - 1), o = n.slice(e + y.length).split(/[\\/]/)[0];
  if (!o) return false;
  let c = `.${o}-`, u;
  try {
    u = await (0, import_promises.readdir)(s, { withFileTypes: true });
  } catch {
    return false;
  }
  for (let r of u) {
    if (!r.isDirectory() || !r.name.startsWith(c)) continue;
    try {
      let i = await (0, import_promises.stat)((0, import_path.join)(s, r.name));
      if (Date.now() - Math.max(i.ctimeMs, i.mtimeMs) < le) return true;
    } catch {
    }
  }
  return false;
}
async function h2r(n) {
  let e = Date.now(), s = e + se;
  while (Date.now() < s) if (await (0, import_chunk_5appeerh.K)(B), await MKe(n, { rejectNpmStub: true })) return { recovered: true, waitedMs: Date.now() - e, extended: false, installInProgressAtEnd: false };
  let o = await j(n);
  if (!o) return { recovered: false, waitedMs: Date.now() - e, extended: false, installInProgressAtEnd: false };
  let c = e + m2r;
  while (Date.now() < c) {
    if (await (0, import_chunk_5appeerh.K)(ie), await MKe(n, { rejectNpmStub: true })) return { recovered: true, waitedMs: Date.now() - e, extended: true, installInProgressAtEnd: o };
    if (!o) break;
    o = await j(n);
  }
  return { recovered: false, waitedMs: Date.now() - e, extended: true, installInProgressAtEnd: o };
}
async function P(n, e, s) {
  let o;
  try {
    o = (0, import_os.homedir)();
  } catch {
    o = void 0;
  }
  let c = await Y(n, e, s, o);
  if (o !== void 0 && c.err) return Y(n, e, s, void 0);
  return c;
}
async function Y(n, e, s, o) {
  let c = null, u;
  try {
    let r = (0, import_child_process.spawn)(n[0], n.slice(1), { detached: true, stdio: ["ignore", "ignore", s ?? "ignore"], windowsHide: true, env: e, ...o !== void 0 && { cwd: o } });
    (0, import_chunk_9zdrdv25.AB)(r.pid), r.once("error", (i) => {
      c = i;
    }), u = { pid: r.pid, exited: new Promise((i) => {
      r.once("exit", (E, C) => i({ code: E, signal: C }));
    }) }, r.unref();
  } catch (r) {
    c = r;
  }
  return await new Promise((r) => setImmediate(r)), c ? { err: c } : { err: null, child: u };
}
async function fe() {
  let n = process.getuid?.();
  if (n === void 0) return [];
  let e = await new Promise((s) => {
    let o = false, c, u = (i) => {
      if (o) return;
      o = true, clearTimeout(r), s(i);
    }, r = setTimeout(() => {
      c.kill(), u(false);
    }, 5e3);
    r.unref();
    try {
      c = (0, import_child_process.spawn)("/bin/launchctl", ["asuser", String(n), "/usr/bin/true"], { stdio: "ignore", windowsHide: true });
    } catch {
      u(false);
      return;
    }
    c.once("error", () => u(false)), c.once("exit", (i) => u(i === 0));
  });
  return (0, import_chunk_y53wbr8a.a)("tengu_bg_daemon_macos_aqua_wrap", { has_gui: e }), e ? ["/bin/launchctl", "asuser", String(n)] : [];
}
async function T(n, e) {
  if (n.length === 0) return e;
  let s = e[0];
  if (!await MKe(s, { rejectNpmStub: FXn(s) })) return e;
  return [...n, ...e];
}
async function J(n, e) {
  let s;
  try {
    s = Ee(me(n));
  } catch (u) {
    return { ok: false, reason: (0, import_chunk_jv7av99m.d)(u) };
  }
  let o = await (0, import_chunk_d775ds6c.e1)();
  if (!o) return { ok: false, reason: "no-powershell" };
  let c = Buffer.from(s, "utf16le").toString("base64");
  return new Promise((u) => {
    let r = false, i, E = (_) => {
      if (r) return;
      r = true, clearTimeout(p), u(_);
    }, C = (_) => E({ ok: false, reason: (0, import_chunk_jv7av99m.w)(_) === "ENOENT" ? "enoent" : (0, import_chunk_jv7av99m.d)(_) }), p = setTimeout(() => {
      i.kill(), E({ ok: false, reason: "timeout" });
    }, 5e3);
    p.unref();
    try {
      i = (0, import_child_process.spawn)(o, ["-NoProfile", "-NonInteractive", "-EncodedCommand", c], { stdio: "ignore", windowsHide: true, env: e });
    } catch (_) {
      C(_);
      return;
    }
    i.once("error", C), i.once("exit", (_) => {
      if (_ === 0) E({ ok: true });
      else E({ ok: false, reason: `Win32_Process.Create rc=${_}`, rc: _ ?? void 0 });
    });
  });
}
function Ee(n) {
  return ['$ErrorActionPreference = "Stop"', '$e = [string[]](Get-ChildItem Env: | ForEach-Object { "$($_.Name)=$($_.Value)" })', "$s = New-CimInstance -ClassName Win32_ProcessStartup -ClientOnly -Property @{ EnvironmentVariables = $e; ShowWindow = [uint16]0; CreateFlags = [uint32]8 }", `$r = Invoke-CimMethod -ClassName Win32_Process -MethodName Create -Arguments @{ CommandLine = ${we(n)}; CurrentDirectory = $env:USERPROFILE; ProcessStartupInformation = $s }`, "exit $r.ReturnValue"].join(`
`);
}
function me(n) {
  return n.map(pe).join(" ");
}
function pe(n) {
  if (n.length > 0 && !/[\s"]/.test(n)) return n;
  let e = '"', s = 0;
  while (s < n.length) {
    let o = 0;
    while (n[s] === "\\") o++, s++;
    if (s === n.length) e += "\\".repeat(o * 2);
    else if (n[s] === '"') e += "\\".repeat(o * 2 + 1) + '"', s++;
    else e += "\\".repeat(o) + n[s], s++;
  }
  return e + '"';
}
function we(n) {
  if (/[\u2018\u2019\u201A\u201B]/.test(n)) throw Error("unsupported Unicode single-quote in command line");
  return `'${n.replaceAll("'", "''")}'`;
}
async function ojo(n) {
  let e = (0, import_chunk_ch6jxpf8.R_)(() => process.env.CLAUDE_CODE_OAUTH_TOKEN);
  if ((0, import_chunk_cg8dqz0a.x)() === "macos" || !e) return false;
  return !!(await (0, import_chunk_zzrn5zap.Er)().readAsync(n))?.claudeAiOauth?.refreshToken;
}
function Se(n) {
  return (0, import_chunk_ch6jxpf8.R_)(() => ge(n));
}
function ge(n) {
  let e = (0, import_chunk_5e3gtsn9.LTr)();
  if (e[import_chunk_t8x29mwc.Sg]) {
    let r = new Set(import_chunk_t8x29mwc.Hpe);
    for (let i of Object.keys(e)) if (r.has(i.toUpperCase())) delete e[i];
  }
  e.INVOCATION_ID = "";
  let s = process.env[import_chunk_d2tjaek4.YP];
  if (s) e[import_chunk_d2tjaek4.YP] = s;
  else delete e[import_chunk_d2tjaek4.YP];
  let o = new Set(["CLAUDE_CODE_OAUTH_TOKEN", (0, import_chunk_gd77dyw4.L8)(e), (0, import_chunk_f9x2f6cx.tVe)() ? (0, import_chunk_gd77dyw4.L8)({ CLAUDE_CODE_HOST_AUTH_ENV_VAR: (0, import_chunk_7xxwg4th.Trn)() }) : void 0].flatMap((r) => r === void 0 ? [] : [r.toUpperCase()]));
  for (let r of Object.keys(e)) {
    if (!o.has(r.toUpperCase())) continue;
    let i = process.env[r];
    if (i === void 0) delete e[r];
    else if (!(0, import_chunk_5e3gtsn9.QH)(r, i)) e[r] = i;
  }
  delete e.CLAUDECODE, delete e.CLAUDE_CODE_SESSION_ID, delete e.CLAUDE_CODE_LAUNCHED_BY_SESSION_IDS, delete e.CLAUDE_CODE_CHILD_NOTES_DIR, delete e.CLAUDE_CODE_CHILD_SESSION, delete e.CLAUDE_CODE_SESSION_ATTENDED, delete e.CLAUDE_CODE_CHROME_MCP_ORG_DENIED, delete e.CLAUDE_CODE_EVAL_INTERVIEW_SESSION, delete e.CLAUDE_CODE_BRIDGE_SESSION_ID, delete e.CLAUDE_CODE_HOST_WORKTREE, delete e.CLAUDE_CODE_HOST_WORKTREE_FENCE, (0, import_chunk_mf29k4y3.hwa)(e);
  for (let r of Object.keys(e)) {
    let i = r.toUpperCase();
    if (i === "CLAUDE_CODE_PLUGIN_DIRS" || i === "CLAUDE_CODE_ATTRIBUTION_PROJECT" || i === "CLAUDE_CODE_SKIP_PLUGIN_LOCAL_MCP_SERVERS" || i === "CLAUDE_CODE_SKIP_PLUGIN_MCP_BUNDLES" || i === "CLAUDE_CODE_PLUGIN_REMOTE_MCP_REACHABLE_HOSTS_HINT") delete e[r];
  }
  (0, import_chunk_mf29k4y3.Ove)(e), (0, import_chunk_mf29k4y3.Vkn)(e), delete e.CLAUDE_BG_SESSION_PERMISSION_RULES, delete e.CLAUDE_BG_MEMORY_TOGGLED_OFF, delete e.CLAUDE_BG_AUTO_MEMORY_OFF, delete e.CLAUDE_BG_GATEWAY_WITHHELD, delete e[import_chunk_gd77dyw4.lQe], delete e.CLAUDE_BG_SESSION_CREDENTIAL, (0, import_chunk_mf29k4y3.v_e)(e);
  let c = new Set(["CLAUDE_BG_AUTH_SNAPSHOT_PATH", ...import_chunk_gd77dyw4.Oge].map((r) => r.toUpperCase()));
  for (let r of Object.keys(e)) if (c.has(r.toUpperCase())) delete e[r];
  let u = (0, import_chunk_gd77dyw4.L8)(e);
  if ((0, import_chunk_69qhefwa.Ne)(e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
    for (let r of [...import_chunk_gd77dyw4.Zee, ...import_chunk_gd77dyw4.D8, ...import_chunk_gd77dyw4.GA]) delete e[r];
    if ((0, import_chunk_gd77dyw4.S4n)(e), u) delete e[u];
    delete e.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST, delete e.CLAUDE_CODE_HOST_AUTH_ENV_VAR, delete e.CLAUDE_CODE_LAUNCHER_RUNS_API_KEY_HELPER, delete e.CLAUDE_CODE_HOST_GATEWAY_LINEAGE;
  }
  if (n.dropShellOAuthToken || (0, import_chunk_865at33z.aoe)()) {
    for (let r of Object.keys(e)) if (r.toUpperCase() === "CLAUDE_CODE_OAUTH_TOKEN") delete e[r];
  }
  return (0, import_chunk_gd77dyw4.qDo)((0, import_chunk_5e3gtsn9.n_)(), e), e;
}
