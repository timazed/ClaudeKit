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
var chunk_y6h5d62w_exports = {};
__export(chunk_y6h5d62w_exports, {
  D0t: () => D0t,
  EYo: () => EYo,
  H0t: () => H0t,
  JJt: () => JJt,
  JWa: () => JWa,
  KXr: () => KXr,
  L0t: () => L0t,
  M0t: () => M0t,
  QJt: () => QJt,
  QWa: () => QWa,
  Qsr: () => Qsr,
  SYo: () => SYo,
  XJt: () => XJt,
  XWa: () => XWa,
  YJt: () => YJt,
  YXr: () => YXr,
  ZJt: () => ZJt,
  ZWa: () => ZWa,
  _ai: () => _ai,
  a_t: () => a_t,
  bYo: () => bYo,
  eja: () => eja,
  kYo: () => kYo,
  l_t: () => l_t,
  qXr: () => qXr,
  wYo: () => wYo,
  yai: () => yai
});
module.exports = __toCommonJS(chunk_y6h5d62w_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_q7qjcthc = require("/$bunfs/root/chunk-q7qjcthc.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_2mwkxzk6 = require("/$bunfs/root/chunk-2mwkxzk6.js");
var import_chunk_chstxdde = require("/$bunfs/root/chunk-chstxdde.js");
var import_chunk_mpk68jst = require("/$bunfs/root/chunk-mpk68jst.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_fbthhpfj = require("/$bunfs/root/chunk-fbthhpfj.js");
var import_chunk_tps03s5j = require("/$bunfs/root/chunk-tps03s5j.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_fs2 = require("fs");
var import_promises2 = require("fs/promises");
var import_os2 = require("os");
var import_path2 = require("path");
var import_promises3 = require("fs/promises");
var import_path3 = require("path");
function We(e) {
  return (0, import_chunk_2mwkxzk6.m1t)(e) ? e.over.promise : Promise.resolve();
}
var ue = 2e3;
var L = () => Math.max(ue - (Date.now() - (0, import_chunk_f9x2f6cx.ug)()), 0);
var de = () => L() > 0 || (0, import_chunk_2mwkxzk6.Rbt)();
var pe = 1e3;
var fe = () => (0, import_chunk_2mwkxzk6.Rbt)() ? Math.max(L(), pe) : L();
async function me() {
  while (de()) await (0, import_chunk_5appeerh.K)(fe());
}
async function ge(e) {
  if (await me(), (0, import_chunk_xfj2cwfv.nn)()) return;
  e.say(), await e.shutDown().catch((n) => (0, import_chunk_w578pjby.t)(`refusal after the flag fetch hold failed (${(0, import_chunk_jv7av99m.d)(n)})`, { level: "error" })), e.hard();
}
function et(e, r, n) {
  return e.hasHeld && !(0, import_chunk_f9x2f6cx.Se)() ? void ge(n) : r();
}
var tt = (e) => e;
var ye = 1;
async function SYo(e, r) {
  let n;
  for (let o = 1; o <= r.attempts; o++) try {
    return await e(AbortSignal.timeout(r.timeoutMs));
  } catch (c) {
    if (n = c, o >= r.attempts) break;
    r.onRetry?.(o, c);
    let p = 500 * 3 ** (o - 1);
    await (0, import_chunk_5appeerh.K)(p * (0.75 + Math.random() * 0.5));
  }
  throw n;
}
function G() {
  return (0, import_path3.join)((0, import_chunk_2gtmjt3y.Ze)(), "local");
}
function xe() {
  return (0, import_path3.join)(G(), "claude");
}
function XWa() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}
async function ve(e, r, n) {
  try {
    return await (0, import_promises3.writeFile)(e, r, { encoding: "utf8", flag: "wx", mode: n }), true;
  } catch (o) {
    if ((0, import_chunk_jv7av99m.w)(o) === "EEXIST") return false;
    throw o;
  }
}
async function it() {
  try {
    let e = G();
    await (0, import_chunk_w578pjby.le)().mkdir(e), await ve((0, import_path3.join)(e, "package.json"), (0, import_chunk_w578pjby._)({ name: "claude-local", version: "0.0.1", private: true }, null, 2));
    let r = (0, import_path3.join)(e, "claude");
    if (await ve(r, `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`, 493)) await (0, import_promises3.chmod)(r, 493);
    return true;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Failed to set up local package environment: ${e}`, { level: "error" }), false;
  }
}
async function YJt(e, r, n) {
  try {
    if (!await it()) return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_env_setup_failed"), "install_failed";
    let o = r ? r : e === "stable" ? "stable" : "latest", c = await (0, import_chunk_7fsmgfxx.ut)("npm", ["install", `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}@${o}`], { cwd: G(), maxBuffer: 1e6, useToolMemoryCgroup: false });
    if (c.code !== 0) return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_local_npm_failed"), (0, import_chunk_w578pjby.t)(`Failed to install Claude CLI package: ${c.stderr}`, { level: "error" }), c.code === 190 ? "in_progress" : "install_failed";
    return await (0, import_chunk_865at33z.Ke)((p) => ({ ...p, installMethod: "local" }), n), (0, import_chunk_cqa9hrgx.u)("update_apply"), "success";
  } catch (o) {
    return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_local_exception"), (0, import_chunk_k449cc64.i)(o), "install_failed";
  }
}
async function a_t() {
  try {
    return await (0, import_promises3.access)((0, import_path3.join)(G(), "node_modules", ".bin", "claude")), true;
  } catch {
    return false;
  }
}
function KXr() {
  let e = import_chunk_c203g5kd.s.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown";
}
var Pe = /^\s*alias\s+claude\s*=/;
function M0t(e) {
  let r = e?.homedir ?? (0, import_os2.homedir)(), n = e?.env ?? process.env, o = e?.platform ?? "darwin", c = e?.fileExists ?? import_fs2.existsSync, p = n.ZDOTDIR || r, C = o === "darwin" ? [".bash_profile", ".bash_login", ".profile"].find((g) => c((0, import_path2.join)(r, g))) ?? ".bash_profile" : ".bashrc";
  return { zsh: (0, import_path2.join)(p, ".zshrc"), bash: (0, import_path2.join)(r, C), ...o === "darwin" && { bashrc: (0, import_path2.join)(r, ".bashrc") }, fish: (0, import_path2.join)(r, ".config/fish/config.fish") };
}
function bYo(e) {
  let r = false;
  return { filtered: e.filter((o) => {
    if (Pe.test(o)) {
      let c = o.match(/alias\s+claude\s*=\s*["']([^"']+)["']/);
      if (!c) c = o.match(/alias\s+claude\s*=\s*([^#\n]+)/);
      if (c && c[1]) {
        if (c[1].trim() === xe()) return r = true, false;
      }
    }
    return true;
  }), hadAlias: r };
}
async function qXr(e) {
  try {
    return (await (0, import_promises2.readFile)(e, { encoding: "utf8" })).split(`
`);
  } catch (r) {
    if ((0, import_chunk_jv7av99m.fn)(r)) return null;
    if ((0, import_chunk_jv7av99m.Kz)(r)) return (0, import_chunk_w578pjby.t)(`Skipping ${e}: path is a directory`, { level: "warn" }), null;
    throw r;
  }
}
async function wYo(e, r) {
  let n = await (0, import_promises2.open)(e, "w");
  try {
    await n.writeFile(r.join(`
`), { encoding: "utf8" }), await n.datasync();
  } finally {
    await n.close();
  }
}
var pt = /* @__PURE__ */ new Set(["EBUSY", "EOPNOTSUPP", "ENOTSUP", "ENOMEM", "ERR_FS_FILE_TOO_LARGE", "ENOTCONN", "EHOSTDOWN", "EHOSTUNREACH", "ETIMEDOUT"]);
async function _ai(e) {
  let r = M0t(e);
  for (let n of Object.values(r)) {
    let o = await qXr(n).catch((c) => {
      if ((0, import_chunk_jv7av99m.SS)(c) || (0, import_chunk_jv7av99m.Tk)(c) || pt.has((0, import_chunk_jv7av99m.w)(c) ?? "")) return (0, import_chunk_w578pjby.t)(`Skipping unreadable shell config ${n} during alias scan: ${(0, import_chunk_jv7av99m.d)(c)}`, { level: "warn" }), null;
      throw c;
    });
    if (!o) continue;
    for (let c of o) if (Pe.test(c)) {
      let p = c.match(/alias\s+claude=["']?([^"'\s]+)/);
      if (p && p[1]) return p[1];
    }
  }
  return null;
}
async function JWa(e) {
  let r = await _ai(e);
  if (!r) return null;
  let n = e?.homedir ?? (0, import_os2.homedir)(), o = r.startsWith("~") ? r.replace("~", n) : r;
  try {
    let c = await (0, import_promises2.stat)(o);
    if (c.isFile() || c.isSymbolicLink()) return r;
  } catch {
  }
  return null;
}
var gt = "https://downloads.claude.ai/claude-code-releases";
class Oe extends import_chunk_jv7av99m.Ppt {
}
function XJt(e) {
  switch (e) {
    case "windows_running_exe_lock":
      return "update_apply_exe_locked";
    case "native_binary_missing":
      return "update_apply_native_binary_missing";
    case "registry_session_refused":
      return "update_session_refused";
    case void 0:
      return null;
  }
}
async function QWa() {
  try {
    let e = (0, import_chunk_2mwkxzk6.Fne)();
    await We(e);
    let r = await (0, import_chunk_865at33z.dee)("tengu_version_config", { minVersion: "0.0.0" });
    if (r.minVersion && (0, import_chunk_tvttgr51._I)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, r.minVersion)) {
      let n = Ie({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, r.minVersion);
      et(e, () => ht(r.minVersion), tt({ say: () => {
        (0, import_chunk_xfj2cwfv.Soe)(), (0, import_chunk_bzyb60p0.Q2)(n);
      }, shutDown: () => (0, import_chunk_bzyb60p0.Yr)(ye), hard: import_chunk_mpk68jst.Bn }));
    }
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function ht(e) {
  let r = Ie({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, e);
  if (console.error(`
${r}
`), (0, import_chunk_chstxdde.pGe)() && (0, import_chunk_chstxdde.Wjn)()) try {
    (0, import_chunk_ndrgvsn7.es)((0, import_chunk_w578pjby._)((0, import_chunk_chstxdde.Tlt)({ sessionId: (0, import_chunk_f9x2f6cx.W)(), message: r, reason: "cli_version_too_old", resultIndex: null })) + `
`);
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`[assertMinVersion] startup failure result not written: ${(0, import_chunk_jv7av99m.d)(n)}`, { level: "error" });
  }
  (0, import_chunk_bzyb60p0.Da)(ye);
}
function Ie(e, r) {
  return `It looks like your version of Claude Code (${e}) needs an update.
A newer version (${r} or higher) is required to continue.

To update, please run:
    claude update

This will ensure you have access to the latest features and improvements.`;
}
var _t = 3e5;
class Ue {
  lastAutoUpdateCheckAt = 0;
  updateRestoreFailure = null;
  mintedPreservedInodes = /* @__PURE__ */ new Set();
}
var yt = new import_chunk_2904xtvq.j(() => new Ue());
function te() {
  return yt.of((0, import_chunk_f9x2f6cx.N)().host);
}
var bt = 1e4;
function yai() {
  return Math.max(0, bt - process.uptime() * 1e3);
}
function JJt() {
  let e = te(), r = Date.now();
  if (r - e.lastAutoUpdateCheckAt < _t) return (0, import_chunk_w578pjby.t)(`auto-update check throttled (last check ${Math.round((r - e.lastAutoUpdateCheckAt) / 1e3)}s ago)`), true;
  return e.lastAutoUpdateCheckAt = r, false;
}
async function YXr() {
  return (await l_t()).maxVersion;
}
async function l_t() {
  let e = await Le(), r = false, n = e.external || void 0, o = n ? (0, import_chunk_tvttgr51.$A)(n)?.version ?? void 0 : void 0;
  if (n && !o) (0, import_chunk_w578pjby.t)(`tengu_max_version_config has invalid version '${n}' \u2014 ignoring`, { level: "error" }), (0, import_chunk_y53wbr8a.a)("tengu_max_version_config_invalid", { raw_value: (0, import_chunk_865at33z.Ad)(n) });
  return { maxVersion: o, forceDowngradeEnabled: e.external_force_downgrade === true };
}
function H0t(e, r, n) {
  let o = n === "native_update" ? "Native installer" : "AutoUpdater", c = (0, import_chunk_tvttgr51.$A)(e);
  if (c && c.compare(r) > 0) return (0, import_chunk_w578pjby.t)(`${o}: force-downgrade active \u2014 moving from ${e} to ${r}`), true;
  return (0, import_chunk_w578pjby.t)(`${o}: force-downgrade flag set but current ${e} is not above ${r} \u2014 taking normal upgrade path`), false;
}
async function ZWa() {
  return (await Le()).external_message || void 0;
}
async function Le() {
  try {
    return await (0, import_chunk_865at33z.dee)("tengu_max_version_config", {});
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), {};
  }
}
function kYo(e) {
  if (!(0, import_chunk_tvttgr51.$A)(e)) return (0, import_chunk_w578pjby.t)("update target is not a valid semver version \u2014 skip checks constrain nothing", { level: "error" }), (0, import_chunk_w578pjby.t)(`update target (first 300 chars, JSON-encoded): ${(0, import_chunk_kx2fp6pc.y$)(JSON.stringify(e.slice(0, 300)))}`), null;
  let r = (0, import_chunk_2yx6c1y2.vt)()?.minimumVersion;
  if (r) {
    let o = (0, import_chunk_tvttgr51.$A)(r)?.version;
    if (!o) (0, import_chunk_w578pjby.t)(`minimumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${(0, import_chunk_kx2fp6pc.y$)(JSON.stringify(r.slice(0, 300)))}`, { level: "error" });
    else if (!(0, import_chunk_tvttgr51.Vb)(e, o)) return `below your minimumVersion setting (${r})`;
  }
  let n = (0, import_chunk_2yx6c1y2._e)("policySettings")?.requiredMaximumVersion;
  if (n) {
    let o = (0, import_chunk_tvttgr51.$A)(n)?.version;
    if (!o) (0, import_chunk_w578pjby.t)(`requiredMaximumVersion is not a valid semver version \u2014 ignoring. Value (first 300 chars, JSON-encoded): ${(0, import_chunk_kx2fp6pc.y$)(JSON.stringify(n.slice(0, 300)))}`, { level: "error" });
    else if (!(0, import_chunk_tvttgr51.Qct)(e, o)) return `above your organization's requiredMaximumVersion (${n})`;
  }
  return null;
}
function D0t(e) {
  let r = kYo(e);
  if (r) (0, import_chunk_w578pjby.t)(`Skipping update to ${e}: ${r}`);
  return r !== null;
}
var z = 3e5;
function Ne() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), ".update.lock");
}
function Q() {
  return import_chunk_hkvzj051.at.state("update-lock");
}
async function xt(e) {
  let r = Q(), n = await e.statMeta(r);
  if (n.ok) {
    if (Date.now() - n.value.mtimeMs < z) return false;
    let p = await e.statMeta(r);
    if (p.ok) {
      if (Date.now() - p.value.mtimeMs < z) return false;
      let C = await e.delete(r);
      if (!C.ok) return (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to remove stale update lock: ${C.error.code}`, { level: "error" }), false;
    } else if (p.error.code !== "NotFound") return (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to re-stat stale update lock: ${p.error.code}`, { level: "error" }), false;
  } else if (n.error.code !== "NotFound") return (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to stat update lock: ${n.error.code}`, { level: "error" }), false;
  let o = await e.write(r, `${process.pid}`, { precondition: { type: "ifAbsent" }, mode: 438 & ~process.umask() });
  if (o.ok) return true;
  if (o.error.code === "AlreadyExists") return false;
  return (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to create update lock: ${o.error.code}`, { level: "error" }), false;
}
async function Et(e) {
  if ((0, import_chunk_m15w38ag.ne)() && e) return xt(e);
  let r = (0, import_chunk_w578pjby.le)(), n = Ne();
  try {
    let o = await r.stat(n);
    if (Date.now() - o.mtimeMs < z) return false;
    try {
      let p = await r.stat(n);
      if (Date.now() - p.mtimeMs < z) return false;
      await r.unlink(n);
    } catch (p) {
      if (!(0, import_chunk_jv7av99m.J)(p)) return (0, import_chunk_k449cc64.i)(p), false;
    }
  } catch (o) {
    if (!(0, import_chunk_jv7av99m.J)(o)) return (0, import_chunk_k449cc64.i)(o), false;
  }
  try {
    return await (0, import_promises.writeFile)(n, `${process.pid}`, { encoding: "utf8", flag: "wx" }), true;
  } catch (o) {
    let c = (0, import_chunk_jv7av99m.w)(o);
    if (c === "EEXIST") return false;
    if (c === "ENOENT") try {
      return await r.mkdir((0, import_chunk_2gtmjt3y.Ze)()), await (0, import_promises.writeFile)(n, `${process.pid}`, { encoding: "utf8", flag: "wx" }), true;
    } catch (p) {
      if ((0, import_chunk_jv7av99m.w)(p) === "EEXIST") return false;
      return (0, import_chunk_w578pjby.t)(`Failed to create config dir or update lock file: ${p}`, { level: "error" }), false;
    }
    return (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to create update lock file ${n}: ${o}`, { level: "error" }), false;
  }
}
async function Pt(e) {
  if ((0, import_chunk_m15w38ag.ne)() && e) {
    let o = await e.read([Q()]);
    if (!o.ok) {
      (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to release update lock: ${o.error.code}`, { level: "error" });
      return;
    }
    let c = o.value.items[0];
    if (!c.found) return;
    if (Buffer.from(c.value).toString("utf8") === `${process.pid}`) {
      let p = await e.delete(Q());
      if (!p.ok) (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to release update lock: ${p.error.code}`, { level: "error" });
    }
    return;
  }
  let r = (0, import_chunk_w578pjby.le)(), n = Ne();
  try {
    if (await r.readFile(n, { encoding: "utf8" }) === `${process.pid}`) await r.unlink(n);
  } catch (o) {
    if ((0, import_chunk_jv7av99m.J)(o)) return;
    (0, import_chunk_w578pjby.t)(`AutoUpdater: failed to release update lock file ${n}: ${o}`, { level: "error" });
  }
}
function re() {
  let e = process.execPath.replace(/\\/g, "/"), r = (import_chunk_c203g5kd.s.BUN_INSTALL ?? "").replace(/\\/g, "/").replace(/\/+$/, "");
  if (e.includes("/.bun/install/global/") || r && e.startsWith(r + "/install/global/")) return "bun";
  return import_chunk_c203g5kd.s.isRunningWithBun() && !(0, import_chunk_wzdjp7c0.dg)() ? "bun" : "npm";
}
async function De() {
  let e = re() === "bun", r = null;
  if (e) r = await (0, import_chunk_7fsmgfxx.ut)("bun", ["pm", "bin", "-g"], { cwd: (0, import_os.homedir)(), useToolMemoryCgroup: false });
  else r = await (0, import_chunk_7fsmgfxx.ut)("npm", ["-g", "config", "get", "prefix"], { cwd: (0, import_os.homedir)(), useToolMemoryCgroup: false });
  if (r.code !== 0) return (0, import_chunk_w578pjby.t)(`Failed to check ${e ? "bun" : "npm"} permissions (exit ${r.code}): ${r.stderr.trim()}`, { level: "error" }), null;
  return r.stdout.trim() || null;
}
async function St() {
  let e = await De();
  if (!e) return null;
  if (re() === "bun") {
    let n = (0, import_path.join)(e, "claude");
    return { execPaths: [n], imagePath: n };
  }
  if ((0, import_chunk_cg8dqz0a.x)() === "windows") return { execPaths: [(0, import_path.join)(e, "claude.cmd"), (0, import_path.join)(e, "claude.exe")], imagePath: (0, import_path.join)(e, "node_modules", { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL, "bin", "claude.exe") };
  let r = (0, import_path.join)(e, "bin", "claude");
  return { execPaths: [r], imagePath: r };
}
async function Ce(e) {
  let r = Date.now(), n = await St(), o = e ? (0, import_chunk_tvttgr51.$A)(e)?.version : void 0, c = false, p = false;
  for (let g of n?.execPaths ?? []) {
    let y = await (0, import_chunk_7fsmgfxx.ut)(g, ["--version"], { abortSignal: AbortSignal.timeout(45e3), cwd: (0, import_os.homedir)(), useToolMemoryCgroup: false }), P = (0, import_chunk_tvttgr51.$A)(y.stdout.trim().split(/\s+/)[0])?.version;
    if (y.code === 0 && P != null && (o != null ? P === o : (0, import_chunk_tvttgr51.cT)(P, { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION))) return { outcome: "landed", version: P, durationMs: Date.now() - r };
    if (y.code !== 0) c = true, p ||= `${y.stdout}
${y.stderr}`.includes(import_chunk_fbthhpfj.eir);
  }
  return { outcome: p || c && n !== null && await (0, import_promises.stat)(n.imagePath).then((g) => g.isFile() && g.size < import_chunk_fbthhpfj.Zsr, () => false) ? "placeholder_stub" : "inconclusive", durationMs: Date.now() - r };
}
async function eja() {
  try {
    let e = await De();
    if (!e) return { hasPermissions: false, npmPrefix: null };
    try {
      return await (0, import_promises.access)(e, import_fs.constants.W_OK), { hasPermissions: true, npmPrefix: e };
    } catch {
      return (0, import_chunk_w578pjby.t)("Insufficient permissions for global npm install.", { level: "error" }), { hasPermissions: false, npmPrefix: e };
    }
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), { hasPermissions: false, npmPrefix: null };
  }
}
async function QJt(e) {
  let r = e === "stable" ? "stable" : "latest", n = await (0, import_chunk_7fsmgfxx.ut)("npm", ["view", `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}@${r}`, "version", "--prefer-online"], { abortSignal: AbortSignal.timeout(5e3), cwd: (0, import_os.homedir)(), useToolMemoryCgroup: false });
  if (n.code !== 0) {
    let c = n.stdout.trim();
    if (c && (0, import_chunk_tvttgr51.$A)(c)) {
      if ((0, import_chunk_cqa9hrgx.l)("update_check", "update_check_npm_view_stderr_warning"), (0, import_chunk_w578pjby.t)(`npm view exited ${n.code} but printed a valid version (${c}) \u2014 treating stderr as a warning`), n.stderr) (0, import_chunk_w578pjby.t)(`npm stderr: ${n.stderr.trim()}`);
      return c;
    }
    if ((0, import_chunk_cqa9hrgx.m)("update_check", "update_check_npm_view_failed"), (0, import_chunk_w578pjby.t)(`npm view failed with code ${n.code}`), n.stderr) (0, import_chunk_w578pjby.t)(`npm stderr: ${n.stderr.trim()}`);
    else (0, import_chunk_w578pjby.t)("npm stderr: (empty)");
    if (n.stdout) (0, import_chunk_w578pjby.t)(`npm stdout (first 300 chars, JSON-encoded): ${(0, import_chunk_kx2fp6pc.y$)(JSON.stringify(n.stdout.trim().slice(0, 300)))}`);
    return null;
  }
  let o = n.stdout.trim();
  if (o && !(0, import_chunk_tvttgr51.$A)(o)) return (0, import_chunk_cqa9hrgx.m)("update_check", "update_check_npm_view_invalid_stdout"), (0, import_chunk_w578pjby.t)("npm view exited 0 but stdout is not a valid semver version \u2014 treating as no result"), (0, import_chunk_w578pjby.t)(`npm stdout (first 300 chars, JSON-encoded): ${(0, import_chunk_kx2fp6pc.y$)(JSON.stringify(o.slice(0, 300)))}`), null;
  return (0, import_chunk_cqa9hrgx.u)("update_check"), o || null;
}
var Fe = 5e3, Ae = 3;
async function EYo(e) {
  if ((0, import_chunk_k449cc64.wt)()) return null;
  let r = 0;
  try {
    let o = (await SYo((c) => (r++, import_chunk_tps03s5j.tle.get(`${gt}/${e}`, { timeout: Fe, responseType: "text", signal: c })), { attempts: Ae, timeoutMs: Fe, onRetry: (c, p) => {
      (0, import_chunk_w578pjby.t)(`Failed to fetch ${e} from GCS on attempt ${c}/${Ae}, retrying: ${p}`);
    } })).data.trim();
    if (!(0, import_chunk_tvttgr51.$A)(o)) return (0, import_chunk_cqa9hrgx.m)("update_check", "update_check_gcs_invalid_response"), (0, import_chunk_w578pjby.t)(`GCS ${e} version response is not a valid semver version \u2014 treating as no result`), (0, import_chunk_w578pjby.t)(`GCS response body (first 300 chars, JSON-encoded): ${(0, import_chunk_kx2fp6pc.y$)(JSON.stringify(o.slice(0, 300)))}`), null;
    if (r > 1) (0, import_chunk_cqa9hrgx.l)("update_check", "update_check_gcs_retry");
    else (0, import_chunk_cqa9hrgx.u)("update_check");
    return o;
  } catch (n) {
    return (0, import_chunk_cqa9hrgx.m)("update_check", "update_check_gcs_failed"), (0, import_chunk_w578pjby.t)(`Failed to fetch ${e} from GCS after ${r} attempt(s): ${n}`), null;
  }
}
async function Rt(e) {
  if ((0, import_chunk_k449cc64.wt)()) return null;
  try {
    let r = await import_chunk_np189awg.Xd.get(`https://formulae.brew.sh/api/cask/${e}.json`, { timeout: 5e3, responseType: "json" }), n = r.data?.version, o = typeof n === "string" ? n.trim() : null;
    if (!o || !(0, import_chunk_tvttgr51.$A)(o)) {
      (0, import_chunk_cqa9hrgx.m)("update_check", "update_check_homebrew_invalid_version"), (0, import_chunk_w578pjby.t)(`formulae.brew.sh ${e} version is not a valid semver version \u2014 treating as no result`);
      let c = typeof r.data === "string" ? r.data : String((0, import_chunk_w578pjby._)(r.data));
      return (0, import_chunk_w578pjby.t)(`brew response (first 300 chars, JSON-encoded): ${(0, import_chunk_kx2fp6pc.y$)(JSON.stringify(c.slice(0, 300)))}`), null;
    }
    return (0, import_chunk_cqa9hrgx.u)("update_check"), o;
  } catch (r) {
    return (0, import_chunk_cqa9hrgx.m)("update_check", "update_check_homebrew_failed"), (0, import_chunk_w578pjby.t)(`Failed to fetch ${e} from formulae.brew.sh: ${r}`), null;
  }
}
async function Qsr(e, r) {
  let [n, o] = await Promise.all([Rt(e), EYo(r)]);
  return n ?? o;
}
function L0t() {
  return te().updateRestoreFailure;
}
async function kt(e) {
  if (!e.updateRestoreFailure) return;
  if (await oe(e.updateRestoreFailure.originalPath)) {
    e.updateRestoreFailure = null;
    return;
  }
  if (e.updateRestoreFailure.preservedPath !== null) e.updateRestoreFailure = { originalPath: e.updateRestoreFailure.originalPath, preservedPath: await Be(e, e.updateRestoreFailure.preservedPath) };
}
function oe(e) {
  return (0, import_promises.access)(e, import_fs.constants.F_OK).then(() => true, () => false);
}
function He() {
  let e = (0, import_path.join)((0, import_path.dirname)(process.execPath), "..", "..");
  return [(0, import_path.join)(e, ".."), e];
}
async function Ve() {
  return (await Promise.all(He().map((r) => (0, import_promises.readdir)(r, { withFileTypes: true }).then((n) => n.filter((o) => o.isDirectory() && o.name.startsWith(".")).map((o) => (0, import_path.join)(r, o.name))).catch(() => [])))).flat();
}
async function Z(e, r) {
  let n = await (0, import_promises.stat)(r, { bigint: true }).then((o) => o.ino, () => 0n);
  return n !== 0n && e.mintedPreservedInodes.has(n);
}
async function Be(e, r) {
  if (await Z(e, r)) return r;
  let n = (0, import_path.basename)(r), o = (await Ve()).flatMap((c) => [(0, import_path.join)(c, n), (0, import_path.join)(c, "bin", n)]);
  for (let c of o) if (await Z(e, c)) return c;
  return null;
}
async function ee(e, r) {
  await (0, import_chunk_w578pjby.le)().mkdir((0, import_path.dirname)(r));
  try {
    let o = (0, import_path.dirname)(r), c = `${(0, import_path.basename)(r)}.restoring.`;
    for (let p of await (0, import_promises.readdir)(o)) if (p.startsWith(c)) await (0, import_promises.unlink)((0, import_path.join)(o, p)).catch(() => {
    });
  } catch {
  }
  let n = `${r}.restoring.${(0, import_crypto.randomBytes)(4).toString("hex")}`;
  try {
    await (0, import_promises.copyFile)(e, n);
    try {
      await (0, import_chunk_q7qjcthc.ra)(n, r);
    } catch (o) {
      let c = (0, import_chunk_jv7av99m.w)(o);
      if (c === void 0 || !import_chunk_q7qjcthc.mF.has(c)) throw o;
      if (!await oe(r)) throw o;
      try {
        await (0, import_promises.copyFile)(n, r);
      } catch (p) {
        if (import_chunk_q7qjcthc.ana.has((0, import_chunk_jv7av99m.w)(p) ?? "")) await (0, import_promises.unlink)(r).catch(() => {
        });
        throw p;
      }
      await (0, import_promises.unlink)(n).catch(() => {
      });
    }
  } catch (o) {
    throw await (0, import_promises.unlink)(n).catch(() => {
    }), o;
  }
}
async function $t(e, r) {
  let n = (0, import_path.basename)(process.execPath).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), o = new RegExp(`^${n}\\.old\\.(\\d+)$`), c = (await Promise.all(r.flatMap((g) => [g, (0, import_path.join)(g, "bin")].map(async (y) => (await (0, import_promises.readdir)(y).catch(() => [])).map((P) => o.exec(P)).filter((P) => P !== null).map((P) => ({ path: (0, import_path.join)(y, P[0]), ts: Number(P[1]) })))))).flat(), C = (await Promise.all(c.map(async (g) => await Z(e, g.path) ? [g] : []))).flat().reduce((g, y) => g === null || y.ts > g.ts ? y : g, null);
  if (!C) {
    (0, import_chunk_w578pjby.t)(`No preserved ${(0, import_path.basename)(process.execPath)}.old.<ts> found in ${r.length} retired dir(s) \u2014 sweep restore skipped`);
    return;
  }
  try {
    await ee(C.path, process.execPath), (0, import_chunk_cqa9hrgx.u)("update_apply_heal", { heal_kind: (0, import_chunk_78g0060s.S)("sweep") }), (0, import_chunk_w578pjby.t)(`Restored missing ${process.execPath} from preserved copy ${C.path} before update attempt`);
  } catch (g) {
    let y = (0, import_chunk_jv7av99m.op)(g);
    (0, import_chunk_cqa9hrgx.m)("update_apply_heal", "sweep_restore_failed", { ...y && { err_code: y }, heal_kind: (0, import_chunk_78g0060s.S)("sweep") }), (0, import_chunk_w578pjby.t)(`Failed to restore missing ${process.execPath} from preserved copy ${C.path}: ${g}`);
  }
}
async function ZJt(e, r) {
  let n = te();
  if (!await Et(r)) return (0, import_chunk_cqa9hrgx.l)("update_apply", "update_apply_lock_contention"), (0, import_chunk_w578pjby.t)("Another process is currently installing an update", { level: "error" }), (0, import_chunk_y53wbr8a.a)("tengu_auto_updater_lock_contention", { pid: process.pid, currentVersion: (0, import_chunk_865at33z.Ad)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) }), { status: "in_progress" };
  let o = n.updateRestoreFailure;
  try {
    await Ct();
    let c = re();
    if (c === "npm" && import_chunk_c203g5kd.s.isNpmFromWindowsPath()) return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_wsl_windows_npm"), (0, import_chunk_w578pjby.t)("Windows NPM detected in WSL environment", { level: "error" }), (0, import_chunk_y53wbr8a.a)("tengu_auto_updater_windows_npm_in_wsl", { currentVersion: (0, import_chunk_865at33z.Ad)({ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION) }), console.error(`
Error: Windows npm found in WSL

You're running Claude Code in WSL but using the Windows npm installation from /mnt/c/, which can't be updated.

To fix this:
  1. Install Node.js within your Linux distribution: e.g. sudo apt install nodejs npm
  2. Make sure Linux npm is in your PATH before the Windows version
  3. Try updating again with 'claude update'
`), { status: "install_failed" };
    let p = e ? `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL}@${e}` : { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.PACKAGE_URL, C = (0, import_chunk_cg8dqz0a.x)() === "windows" && (0, import_chunk_wzdjp7c0.dg)() && process.execPath.replace(/\\/g, "/").includes("/node_modules/@anthropic-ai/"), g = [];
    if (C) {
      let [, b] = He(), v = (await Promise.all((await Ve()).map(async (h) => await Promise.all([(0, import_promises.readdir)(h).catch(() => []), (0, import_promises.readdir)((0, import_path.join)(h, "bin")).catch(() => [])]).then(([M, A]) => [...M, ...A].some((O) => /\.exe\.old\.\d+$/.test(O))) ? [h] : []))).flat();
      if (v.length > 0) if (await oe(process.execPath)) await Promise.all(v.map((h) => (0, import_promises.rm)(h, { recursive: true, force: true }).catch((R) => (0, import_chunk_w578pjby.t)(`retired-dir cleanup failed: ${R}`))));
      else await $t(n, v);
      let F = Date.now(), T = await (0, import_promises.stat)(process.execPath, { bigint: true }).then((h) => h.ino).catch(() => 0n), k = [process.execPath];
      for (let h of await (0, import_promises.readdir)(b).catch(() => [])) for (let R of ["claude.exe", "cli.exe"]) {
        let M = (0, import_path.join)(b, h, R);
        if (M === process.execPath) continue;
        let A = await (0, import_promises.stat)(M, { bigint: true }).then((O) => O.ino).catch(() => -1n);
        if (T && A === T) k.push(M);
      }
      for (let h of k) {
        let R = `${h}.old.${F}`;
        try {
          await (0, import_promises.rename)(h, R);
        } catch {
          continue;
        }
        g.push([h, R]);
        let M = await (0, import_promises.stat)(R, { bigint: true }).then((A) => A.ino, () => 0n);
        if (M !== 0n) n.mintedPreservedInodes.add(M);
      }
    }
    let y = await (0, import_chunk_7fsmgfxx.ut)(c, ["install", "-g", p], { cwd: (0, import_os.homedir)(), useToolMemoryCgroup: false }), P = 0, ie = 0, q = [];
    if (g.length && y.code !== 0) {
      for (let [v, F] of g) try {
        await (0, import_promises.rename)(F, v);
      } catch (T) {
        try {
          await ee(F, v), (0, import_chunk_w578pjby.t)(`Restored ${v} by copy after rename failed: ${T}`), await (0, import_promises.unlink)(F).catch((k) => (0, import_chunk_w578pjby.t)(`Failed to remove ${F} after copy-restore: ${k}`));
        } catch (k) {
          let h = await Be(n, F), R;
          if (h !== null && h !== F) try {
            await ee(h, v), ie++, (0, import_chunk_w578pjby.t)(`Restored ${v} from retired-dir copy ${h} after rename (${T}) and copy (${k}) both failed`);
            continue;
          } catch (A) {
            R = A, (0, import_chunk_w578pjby.t)(`Failed to restore ${v} from retired-dir copy ${h}: ${A}`);
          }
          let M = h === null ? (0, import_chunk_78g0060s.S)("gone") : h === F ? (0, import_chunk_78g0060s.S)("original_dir") : (0, import_chunk_78g0060s.S)("retired_dir");
          if (P++, q.length === 0) {
            let A = (0, import_chunk_jv7av99m.op)(T), O = (0, import_chunk_jv7av99m.op)(k), se = R === void 0 ? void 0 : (0, import_chunk_jv7av99m.op)(R);
            (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_restore_failed", { ...A && { rename_err_code: A }, ...O && { copy_err_code: O }, ...se && { relocate_err_code: se }, preserved_state: M });
          }
          q.push({ originalPath: v, preservedPath: h }), (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)(new Oe(`Failed to restore ${v} after install failure: rename: ${T}; copy: ${k}; preserved copy: ${h ?? "not found"}`), `Failed to restore executable after install failure: rename=${(0, import_chunk_jv7av99m.Cr)(T) ?? "unknown"} copy=${(0, import_chunk_jv7av99m.Cr)(k) ?? "unknown"} relocate=${R === void 0 ? h === null ? "not_found" : "skipped" : (0, import_chunk_jv7av99m.Cr)(R) ?? "unknown"}`));
        }
      }
      if (ie > 0 && P === 0) (0, import_chunk_cqa9hrgx.u)("update_apply_heal", { heal_kind: (0, import_chunk_78g0060s.S)("relocate") });
      let b = new Set(g.map(([v]) => v));
      n.updateRestoreFailure = q[0] ?? (n.updateRestoreFailure && !b.has(n.updateRestoreFailure.originalPath) ? n.updateRestoreFailure : null);
    }
    if (y.code !== 0) {
      let b = `${y.stdout} ${y.stderr}`, v = Ft(b), F = g.length === 0 ? "not_attempted" : P === 0 ? "restored" : "partial";
      if (v === "warning_only") {
        let k = await Ce(e);
        if (k.outcome === "landed") return await (0, import_chunk_865at33z.Ke)((h) => ({ ...h, installMethod: "global" }), r), n.updateRestoreFailure = null, (0, import_chunk_cqa9hrgx.l)("update_apply", "update_apply_npm_install_stderr_warning"), (0, import_chunk_w578pjby.t)(`npm/bun exited ${y.code} with only warnings on stderr but the install-prefix re-probe confirms the install landed (now ${k.version}): ${b}`), { status: "success", probeDurationMs: k.durationMs };
      }
      if ((0, import_chunk_y53wbr8a.a)("tengu_auto_updater_npm_failure", { npm_exit_code: y.code, package_manager: (0, import_chunk_78g0060s.f)(c), is_bundled_mode: (0, import_chunk_wzdjp7c0.dg)(), platform: (0, import_chunk_865at33z._oe)((0, import_chunk_cg8dqz0a.x)()), windows_self_rename: (0, import_chunk_78g0060s.f)(F), stderr_signature: (0, import_chunk_78g0060s.f)(v), npm_error_code: At(b) ?? (0, import_chunk_78g0060s.S)("none") }), (0, import_chunk_cg8dqz0a.x)() === "windows" && /\b(?:claude|cli)\.exe\b/i.test(b) && (/\bEBUSY\b|resource busy or locked/i.test(b) || /\bEPERM\b|operation not permitted/i.test(b) && (g.length > 0 || /\b(?:rename|copyfile|unlink)\b[^\r\n]*\b(?:claude|cli)\.exe\b/i.test(b)))) return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_exe_locked"), (0, import_chunk_w578pjby.t)(`Failed to install new version of claude (running executable is locked): ${b}`, { level: "error" }), { status: "install_failed", failureHint: "windows_running_exe_lock" };
      if (/\b(EACCES|EPERM|permission denied)\b/i.test(b)) return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_no_permissions"), (0, import_chunk_w578pjby.t)("Insufficient permissions for global npm install.", { level: "error" }), { status: "no_permissions" };
      if (v === "native_package_missing") return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_native_binary_missing"), (0, import_chunk_w578pjby.t)(`Failed to install new version of claude (platform-native package missing; npm should have restored the previous version): ${b}`, { level: "error" }), { status: "install_failed", failureHint: "native_binary_missing" };
      if (v === "warning_only") return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_npm_install_stderr_warning"), (0, import_chunk_w578pjby.t)(`npm/bun exited ${y.code} with only warnings on stderr but the re-probe did not confirm an advance: ${b}`, { level: "error" }), { status: "install_failed" };
      return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_npm_install_failed"), (0, import_chunk_w578pjby.t)(`Failed to install new version of claude: ${b}`, { level: "error" }), { status: "install_failed" };
    }
    let ae = await Ce(e);
    switch (ae.outcome) {
      case "placeholder_stub": {
        let b = c === "npm" ? await (0, import_chunk_7fsmgfxx.ut)("npm", ["config", "get", "ignore-scripts"], { abortSignal: AbortSignal.timeout(1e4), cwd: (0, import_os.homedir)(), useToolMemoryCgroup: false }) : null;
        if (b?.code === 0 && b.stdout.trim() === "true") {
          (0, import_chunk_w578pjby.t)(`${c} exited 0 and the installed claude is the placeholder stub, but npm install scripts are disabled on purpose; trusting the exit code`);
          break;
        }
        return (0, import_chunk_cqa9hrgx.m)("update_apply", "update_apply_native_binary_missing"), (0, import_chunk_w578pjby.t)(`${c} exited 0 but the installed claude is still the placeholder stub: the platform-native package was not installed`, { level: "error" }), { status: "install_failed", failureHint: "native_binary_missing" };
      }
      case "inconclusive":
        (0, import_chunk_w578pjby.t)(`${c} exited 0; the install-prefix --version probe was inconclusive, trusting the exit code`);
        break;
      case "landed":
        break;
    }
    return await (0, import_chunk_865at33z.Ke)((b) => ({ ...b, installMethod: "global" }), r), n.updateRestoreFailure = null, (0, import_chunk_cqa9hrgx.u)("update_apply"), { status: "success", probeDurationMs: ae.durationMs };
  } finally {
    if (n.updateRestoreFailure !== null && n.updateRestoreFailure === o) await kt(n);
    await Pt(r);
  }
}
async function Ct() {
  let e = M0t();
  for (let [, r] of Object.entries(e)) try {
    let n = await qXr(r);
    if (!n) continue;
    let { filtered: o, hadAlias: c } = bYo(n);
    if (c) await wYo(r, o), (0, import_chunk_w578pjby.t)(`Removed claude alias from ${r}`);
  } catch (n) {
    (0, import_chunk_w578pjby.t)(`Failed to remove alias from ${r}: ${n}`, { level: "error" });
  }
}
function Ft(e) {
  if (/\b(EACCES|EPERM|permission denied)\b/i.test(e)) return "eacces_eperm";
  if (/postinstall\] Native package "[^"]*" not found/.test(e)) return "native_package_missing";
  if (/\bENOTEMPTY\b/i.test(e)) return "enotempty";
  if (/\bETARGET\b/i.test(e)) return "etarget";
  if (/\bE403\b/i.test(e) || /\b403 forbidden\b/i.test(e)) return "e403_forbidden";
  if (/\bENOENT\b/i.test(e)) return "enoent";
  if (/\bE5\d\d\b/i.test(e) || /\b5\d\d\s+(internal server error|bad gateway|service unavailable|gateway time-?out)\b/i.test(e)) return "registry_5xx";
  if (/\b(ETIMEDOUT|ESOCKETTIMEDOUT)\b/i.test(e) || /\btimed[\s-]?out\b/i.test(e) || /\btimeout\b/i.test(e)) return "network_timeout";
  if (/\bENOSPC\b/i.test(e)) return "disk_full";
  if (/\bEBUSY\b/i.test(e) || /\bresource busy or locked\b/i.test(e)) return "ebusy";
  let r = /npm warn/i.test(e) || /unknown user config/i.test(e) || /npm notice/i.test(e), n = /npm err/i.test(e) || /\b(EACCES|EPERM|ETARGET)\b/i.test(e) || /code E/i.test(e);
  if (r && !n) return "warning_only";
  return "unknown";
}
function At(e) {
  let r = /\bnpm (?:ERR!|error) code\s+([A-Z][A-Z0-9_]{1,29})(?![A-Za-z0-9_])/.exec(e)?.[1];
  return r === void 0 ? void 0 : (0, import_chunk_78g0060s.Fr)(r);
}
