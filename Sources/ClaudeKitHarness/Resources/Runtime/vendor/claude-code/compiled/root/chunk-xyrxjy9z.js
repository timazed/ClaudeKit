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
var chunk_xyrxjy9z_exports = {};
__export(chunk_xyrxjy9z_exports, {
  Gjl: () => Gjl,
  S5n: () => S5n,
  ZFs: () => ZFs,
  c5l: () => c5l,
  cSn: () => cSn,
  d5l: () => d5l,
  eIe: () => eIe,
  f5l: () => f5l,
  g5l: () => g5l,
  h5l: () => h5l,
  l5l: () => l5l,
  m5l: () => m5l,
  p5l: () => p5l,
  u5l: () => u5l,
  wNo: () => wNo,
  zFr: () => zFr,
  zjl: () => zjl
});
module.exports = __toCommonJS(chunk_xyrxjy9z_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_xynazqe9 = require("/$bunfs/root/chunk-xynazqe9.js");
var import_child_process = require("child_process");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_util = require("util");
var b = (0, import_util.promisify)(import_child_process.execFile), re = /^[a-zA-Z0-9_-]+$/, U = [2, 34];
function cSn(e) {
  let n = /git version (\d+)\.(\d+)/.exec(e);
  if (!n) return null;
  return [Number(n[1]), Number(n[2])];
}
function ae(e) {
  let n = cSn(e);
  if (n === null) return null;
  let [t, o] = n, [i, r] = U;
  return t > i || t === i && o >= r;
}
async function l5l(e, n = M) {
  let t;
  try {
    t = await K(n);
  } catch (i) {
    if (!(i instanceof import_chunk_xynazqe9.qJ)) throw i;
    return `\`git --version\` did not answer within ${n / 1e3} s. Check for a git wrapper that waits, or a mount that hangs`;
  }
  let o = ae(t);
  if (o === null) e(`[runner:git] --configure-git: could not parse git version from "${t.trim()}"; proceeding without version check`);
  else if (!o) {
    let [i, r] = U;
    return `--configure-git requires git >= ${i}.${r} for SSH commit signing (found: ${t.trim()}). Upgrade git in your runner image, or omit --configure-git and manage git identity yourself`;
  }
  return;
}
async function d5l(e) {
  let n = (0, import_path.join)(e.baseDir, ".runner");
  await (0, import_promises.mkdir)(n, { recursive: true });
  let t = (0, import_path.join)(n, "code-sign"), o = (0, import_path.join)(n, "commit_signing_key.pub"), i = L(e.execPath);
  await (0, import_promises.writeFile)(t, i, { mode: 493 }), await (0, import_promises.chmod)(t, 493), await (0, import_promises.writeFile)(o, "");
  let r = [["user.name", "Claude"], ["user.email", "noreply@anthropic.com"], ["gpg.format", "ssh"], ["gpg.ssh.program", t], ["user.signingkey", o], ["commit.gpgsign", "true"], ["tag.gpgsign", "true"], ["push.negotiate", "true"]], a = e.gitConfigPath ? ["--file", e.gitConfigPath] : ["--global"];
  for (let [h, f] of r) await b("git", ["config", ...a, "--replace-all", h, f], { windowsHide: true });
  e.onStatus(`[runner:git] --configure-git: identity=Claude <noreply@anthropic.com>, gpg.ssh.program=${t}`);
  let u = await de(n, a, e.onStatus);
  return u.installed ? { shimPath: t } : { shimPath: t, operatorHooksPath: u.existingHooksPath };
}
function L(e) {
  return `#!/bin/sh
BIN="$CLAUDE_RUNNER_CLAUDE_BIN"
[ -n "$BIN" ] || BIN='${Q(e)}'
exec "$BIN" self-hosted-runner code-sign "$@"
`;
}
function c5l(e, n) {
  let t = (0, import_path.join)(e, ".runner");
  return [{ path: (0, import_path.join)(t, "code-sign"), content: L(n), mode: 493 }, { path: (0, import_path.join)(t, "commit_signing_key.pub"), content: "", mode: 420 }];
}
function ZFs(e) {
  return zFr((0, import_path.join)(e, ".runner"));
}
function zFr(e) {
  return [["user.name", "Claude"], ["user.email", "noreply@anthropic.com"], ["user.signingkey", (0, import_path.join)(e, "commit_signing_key.pub")], ["gpg.format", "ssh"], ["gpg.ssh.program", (0, import_path.join)(e, "code-sign")], ["commit.gpgsign", "true"], ["tag.gpgsign", "true"], ["push.negotiate", "true"], ["core.hooksPath", (0, import_path.join)(e, "git-hooks")]];
}
function wNo(e, n, t) {
  let o = (0, import_path.join)(n, ".runner") + import_path.sep;
  return e.map((i) => {
    if (!i.path.startsWith(o)) throw Error("relocateConfigureGitArtifacts: artifact path is not under {baseDir}/.runner/");
    return { ...i, path: (0, import_path.join)(t, i.path.slice(o.length)) };
  });
}
var M = 15e3;
function K(e) {
  return (0, import_chunk_xynazqe9.Hi)(b("git", ["--version"], { windowsHide: true, timeout: e, killSignal: "SIGKILL" }).then(({ stdout: n }) => n), e, "git --version");
}
async function S5n(e = M) {
  try {
    return await K(e);
  } catch {
    return "";
  }
}
var Gjl = `#!/bin/sh
test "$1" = get || exit 0
printf "username=unused\\npassword=%s\\n" "$CLAUDE_CODE_SESSION_ACCESS_TOKEN"
`;
function zjl(e) {
  return (0, import_path.join)(e, ".runner", "git-proxy-cred");
}
function u5l(e) {
  let n = (0, import_path.join)(e, ".runner", "git-hooks");
  return [...q.map((t) => ({ path: (0, import_path.join)(n, t), content: z })), ...["commit-msg", "prepare-commit-msg"].map((t) => ({ path: (0, import_path.join)(n, t), content: X }))];
}
async function f5l(e) {
  let n = e.apiBaseUrl.replace(/\/+$/, ""), t;
  try {
    t = new URL(n).host;
  } catch {
    throw Error(`--use-anthropic-git-proxy: apiBaseUrl is not a valid URL: ${n}`);
  }
  let o = (0, import_path.join)(e.baseDir, ".runner");
  await (0, import_promises.mkdir)(o, { recursive: true });
  let i = zjl(e.baseDir);
  await (0, import_promises.writeFile)(i, Gjl, { mode: 448 }), await (0, import_promises.chmod)(i, 448);
  let r = e.gitConfigPath ? ["--file", e.gitConfigPath] : ["--global"], a = [[`credential.https://${t}.helper`, `!'${Q(i)}'`], [`credential.https://${t}.useHttpPath`, "false"], [`credential.https://${t}.username`, "unused"], [`http.https://${t}/.proactiveAuth`, "basic"]];
  for (let [u, h] of a) await b("git", ["config", ...r, "--replace-all", u, h], { windowsHide: true });
  return e.onStatus(`[runner:git] --use-anthropic-git-proxy: credential helper registered for https://${t} (${i})`), n;
}
var R = 1e4;
function j(e, n, t) {
  return b("git", ["config", ...e, "--includes", "--type=path", "--get", n], { windowsHide: true, timeout: R, ...t && { env: t } }).then((o) => o.stdout.trim(), () => "");
}
async function F(e, n) {
  let [t, o] = await Promise.all([ue(["--system"], e, n), j(["--global"], e, n)]);
  return { ...t.value !== "" && { system: t.value }, ...t.origin !== void 0 && { systemOrigin: t.origin }, ...o !== "" && { global: o } };
}
async function ce(e, n) {
  let { system: t, global: o } = await F(e, n);
  return [...t !== void 0 ? ["system"] : [], ...o !== void 0 ? ["global"] : []];
}
async function ue(e, n, t) {
  let o = await b("git", ["config", ...e, "--includes", "--show-origin", "-z", "--type=path", "--get", n], { cwd: "/", windowsHide: true, timeout: R, ...t && { env: t } }).then((r) => r.stdout, () => ""), i = o.indexOf("\0");
  if (i < 0) return { value: o.trim() };
  return { value: o.slice(i + 1).replace(/\0$/, "").trim(), origin: B(o.slice(0, i)) };
}
var B = (e) => e.startsWith("file:") ? e.slice(5) : e, V = (e) => e.length > 1 ? e.replace(/[\\/]+$/, "") : e, I = (e) => (0, import_path.isAbsolute)(e) && (0, import_path.resolve)(e) === V(e);
async function ge(e) {
  let n;
  try {
    n = (await b("git", ["config", "--system", "--includes", "--show-origin", "-z", "--list"], { cwd: "/", windowsHide: true, timeout: R, maxBuffer: 4194304, ...e && { env: e } })).stdout;
  } catch (i) {
    let r = i, a = (0, import_chunk_jv7av99m.w)(i) ?? (r !== null && typeof r === "object" ? typeof r.signal === "string" ? `killed by ${r.signal}${r.killed === true ? ", timed out" : ""}` : r.code !== void 0 ? `exit ${String(r.code)}` : "error" : "error");
    return { files: [], unverifiable: `the system configuration could not be listed (${a})` };
  }
  let t = n.split("\0"), o = [];
  for (let i = 0; i + 1 < t.length; i += 2) {
    let r = B(t[i]);
    if (!t[i].startsWith("file:") || !I(r)) return { files: o, unverifiable: `git reports a source that is not a plainly spelled absolute file path (${eIe(r)}; write [include] paths absolute, without '.' or '..' components)` };
    if (!o.includes(r)) o.push(r);
  }
  return { files: o };
}
async function W(e) {
  let n = e;
  for (; ; ) try {
    return await (0, import_promises.access)(n, import_fs.constants.W_OK), true;
  } catch (t) {
    if ((0, import_chunk_jv7av99m.J)(t)) {
      let i = (0, import_path.dirname)(n);
      if (i === n) return false;
      n = i;
      continue;
    }
    let o = process.getuid?.();
    if (o !== void 0 && o !== 0) try {
      if ((await (0, import_promises.lstat)(n)).uid === o) return true;
    } catch {
    }
    return false;
  }
}
var v = (e, n) => n !== void 0 && n !== "" && ((0, import_path.resolve)(e) === (0, import_path.resolve)(n) || (0, import_path.resolve)(e).startsWith((0, import_path.resolve)(n) + import_path.sep));
async function p5l(e) {
  let n = e?.sessionReachable ?? W, t = e?.env ? e.env.HOME : import_chunk_c203g5kd.s.HOME, o = e?.env ? e.env.PATH : import_chunk_c203g5kd.s.PATH, i = [], r = (o ?? "").split(import_path.delimiter).filter((l) => {
    if (l === "" || !(0, import_path.isAbsolute)(l)) return false;
    if (v(l, t) || v(l, e?.baseDir)) return i.push(l), false;
    return true;
  }), a = async (l) => {
    for (let d of r) {
      let g = (0, import_path.join)(d, l);
      try {
        await (0, import_promises.access)(g, import_fs.constants.X_OK);
      } catch {
        continue;
      }
      if (await p(g, n) !== void 0 || await p(d, n) !== void 0) {
        i.push(g);
        continue;
      }
      return g;
    }
    return;
  }, u = "/nonexistent-gpg";
  for (let l of ["/bin/false", "/usr/bin/false"]) {
    try {
      await (0, import_promises.access)(l, import_fs.constants.X_OK);
    } catch {
      continue;
    }
    if (await p(l, n) === void 0 && await p((0, import_path.dirname)(l), n) === void 0) {
      u = l;
      break;
    }
  }
  let [h, f, y] = await Promise.all([a("gpg"), a("gpgsm"), a("ssh-keygen")]);
  return { gpg: h ?? u, gpgsm: f ?? u, sshKeygen: y ?? u, inert: u, skipped: i };
}
function Y(e, n) {
  let t = (o) => (0, import_path.resolve)(o).replace(/[\\/]+$/, "");
  return n !== void 0 && t(e) === t(n) || t(e).endsWith((0, import_path.join)(import_path.sep + ".runner", "git-hooks"));
}
async function m5l(e) {
  let n = e?.sessionReachable ?? W, t = e?.systemConfigFiles ?? ge, o = e?.env ? e.env.HOME : import_chunk_c203g5kd.s.HOME;
  function i(g) {
    return e?.lifecycleHooks ? ce(g, e.env) : [];
  }
  let [{ system: r, systemOrigin: a, global: u }, h, f, y] = await Promise.all([F("core.hooksPath", e?.env), i("core.sshCommand"), i("core.askPass"), i("filter.lfs.clean")]), l = (g) => g !== void 0 && !Y(g), d = { ...l(u) && { ignoredGlobalHooksPath: u }, ...h.length > 0 && { sshCommandScopes: h }, ...f.length > 0 && { askPassScopes: f }, ...y.length > 0 && { lfsFilterScopes: y } };
  if (l(r)) {
    let g;
    if (a === void 0 || !I(a)) g = `git does not report a plainly spelled absolute file path as its origin (${eIe(a ?? "")}) \u2014 cannot verify it is out of the sessions' reach`;
    else {
      let S = await t(e?.env);
      if (S.unverifiable !== void 0) g = `${S.unverifiable} \u2014 cannot verify it is out of the sessions' reach`;
      else if (!S.files.includes(a)) g = `the system configuration changed while it was being read (${eIe(a)} is no longer among its files) \u2014 cannot verify it is out of the sessions' reach`;
      else for (let E of S.files) {
        let D = await (0, import_promises.lstat)(E).then(() => {
          return;
        }, (Z) => (0, import_chunk_jv7av99m.w)(Z) ?? "error"), C = D !== void 0 ? `is listed by git but cannot be found as reported (${D}) \u2014 cannot verify it is out of the sessions' reach` : await p(E, n);
        if (C !== void 0) {
          g = E === a ? `it comes from ${eIe(E)}, which ${C}` : `one of the files the system configuration reads, ${eIe(E)}, ${C}`;
          break;
        }
      }
    }
    if (g === void 0) if (!(0, import_path.isAbsolute)(r)) g = "it is relative (git would resolve it inside each repository)";
    else if (!I(r)) g = `it is not spelled as a plain absolute path (${eIe(r)}) \u2014 write it without '.' or '..' components`;
    else if (v(r, o) || v(r, e?.baseDir)) g = "it points under the runner HOME / --base-dir, which sessions can write";
    else {
      let S = await p(r, n);
      g = S !== void 0 ? `its target directory ${S}` : await he(r, n);
    }
    if (g === void 0) d.hooksPath = r;
    else d.ignoredSystemHooksPath = { value: r, reason: g };
  }
  return d;
}
var le = 32;
async function he(e, n) {
  let t;
  try {
    t = (await (0, import_promises.readdir)(e)).sort();
  } catch (o) {
    return (0, import_chunk_jv7av99m.J)(o) ? "its target directory does not exist" : `its target directory cannot be listed (${(0, import_chunk_jv7av99m.w)(o) ?? "error"})`;
  }
  for (let o of t) {
    let i = await p((0, import_path.join)(e, o), n);
    if (i !== void 0) return `${eIe(o)} in it ${i}`;
  }
  return;
}
async function p(e, n, t = { hops: le }) {
  let o = V(e), i = o;
  for (; ; ) {
    if (await n(i)) return i === o ? "is writable by (or belongs to) this runner's user" : `resolves to ${eIe(i)}, which this runner's user can write or owns`;
    let r;
    try {
      r = (await (0, import_promises.lstat)(i)).isSymbolicLink();
    } catch (h) {
      if (i === o) {
        if ((0, import_chunk_jv7av99m.J)(h)) return;
        return `cannot be examined (${(0, import_chunk_jv7av99m.w)(h) ?? "error"})`;
      }
      return `is a link that does not resolve (${eIe(i)})`;
    }
    if (!r) return;
    if (t.hops <= 0) return "is a link with too many levels of indirection";
    t.hops--;
    let a;
    try {
      a = await (0, import_promises.readlink)(i);
    } catch (h) {
      return `is a link that cannot be read (${(0, import_chunk_jv7av99m.w)(h) ?? "error"})`;
    }
    i = (0, import_path.resolve)((0, import_path.dirname)(i), a);
    let u = await p((0, import_path.dirname)(i), n, t);
    if (u !== void 0) return t.hops <= 0 ? `is a link with too many levels of indirection (through ${eIe((0, import_path.dirname)(i))})` : `resolves into ${eIe((0, import_path.dirname)(i))}, a directory that ${u} (the target could be replaced)`;
  }
}
var fe = new RegExp("^\\p{Cf}$", "u");
function eIe(e) {
  let n = (0, import_chunk_w578pjby._)(e), t = "";
  for (let o of n) {
    let i = o.codePointAt(0);
    if (i >= 127 && i <= 159 || i === 8232 || i === 8233 || fe.test(o)) for (let r = 0; r < o.length; r++) t += `\\u${o.charCodeAt(r).toString(16).padStart(4, "0")}`;
    else t += o;
  }
  return t;
}
function h5l(e, { isRoot: n, operatorSshInEnv: t = false, askpassSource: o = "none", postSessionHook: i = false, envHooksPath: r = false }) {
  let a = [];
  if (e.ignoredSystemHooksPath !== void 0) {
    let u = e.ignoredSystemHooksPath;
    a.push(`[runner:warn] the system git config sets core.hooksPath=${eIe(u.value)}, which is NOT applied inside lifecycle hooks because ${u.reason}. ` + (n ? "This runner runs as root, so no configuration file is out of the sessions' reach: export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment instead \u2014 and run the runner as an unprivileged user." : "Use an absolute path outside the runner's HOME/--base-dir in a root-owned file, naming a directory whose hook files are root-owned too (or export it as a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment)."));
  }
  if (e.ignoredGlobalHooksPath !== void 0) a.push(`[runner:warn] the global git config sets core.hooksPath=${eIe(e.ignoredGlobalHooksPath)}, which is NOT applied inside lifecycle hooks (checkout / post-session): every session this runner hosts can write that file. Git run by those hooks takes core.hooksPath only from the system git config (git config --system) or from a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair exported in the runner's own environment; move it there if your hooks need it. The session's own git is unaffected.`);
  if (e.sshCommandScopes !== void 0 && !t) a.push(`[runner:warn] core.sshCommand is set in the ${e.sshCommandScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks uses plain ssh unless the runner's own environment sets GIT_SSH_COMMAND (or GIT_SSH). If your hooks reach git remotes over ssh and need that command (a deploy key, a jump host), copy its value into GIT_SSH_COMMAND in the runner's environment; if they do not, no action is needed. ` + (e.sshCommandScopes.includes("global") ? "Copy only a command you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.askPassScopes !== void 0 && o !== "own") a.push(`[runner:warn] core.askPass is set in the ${e.askPassScopes.join(" and ")} git config but is NOT used inside lifecycle hooks (checkout / post-session): git run by those hooks takes a credential-prompt program only from the runner's own environment, as GIT_ASKPASS (an SSH_ASKPASS there is handed on as GIT_ASKPASS) or as a core.askPass GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair. ` + (o === "handedOn" ? "Here hook git will use the SSH_ASKPASS program from the runner's environment in its place. " : "") + "If your hooks get https credentials from the program core.askPass names, copy its path into GIT_ASKPASS in the runner's environment; if they do not, no action is needed. " + (e.askPassScopes.includes("global") ? "Copy only a path you set yourself: every session this runner hosts can write the global file. " : "") + "The session's own git is unaffected.");
  if (e.lfsFilterScopes !== void 0 && i && e.hooksPath === void 0 && !r) a.push(`[runner:warn] git-lfs is set up in the ${e.lfsFilterScopes.join(" and ")} git config and this runner has a post-session hook. Git run inside the runner's lifecycle hooks runs no repository or global git hooks, so git-lfs's pre-push hook does not run there and a plain "git push" from the post-session hook sends LFS pointers WITHOUT their objects. The runner cannot see whether your hook already handles this: in it, run "git-lfs push <remote> <branch>" BEFORE "git push" (or "git-lfs push --all <remote> <branch>" after it), or point core.hooksPath, ${n ? "as" : "in the system git config or as"} a GIT_CONFIG_KEY_n/GIT_CONFIG_VALUE_n pair in the runner's environment, at a root-owned directory that holds git-lfs's pre-push hook. The session's own git is unaffected.`);
  return a;
}
async function de(e, n, t) {
  let o = (0, import_path.join)(e, "git-hooks"), i;
  if (n[0] === "--file") i = await j(n, "core.hooksPath");
  else {
    let r = await F("core.hooksPath");
    i = r.global ?? r.system ?? "";
  }
  if (i !== "" && !Y(i, o)) return t(`[runner:git] --configure-git: core.hooksPath already set (${eIe(i)}); skipping Co-authored-by hook install so existing hooks keep running for the session's own git (lifecycle hooks follow the system config / runner environment only \u2014 see the lifecycle-hooks status line)`), { installed: false, existingHooksPath: i };
  await (0, import_promises.mkdir)(o, { recursive: true });
  for (let r of q) {
    let a = (0, import_path.join)(o, r);
    await (0, import_promises.writeFile)(a, z, { mode: 493 }), await (0, import_promises.chmod)(a, 493);
  }
  for (let r of ["commit-msg", "prepare-commit-msg"]) {
    let a = (0, import_path.join)(o, r);
    await (0, import_promises.writeFile)(a, X, { mode: 493 }), await (0, import_promises.chmod)(a, 493);
  }
  return await b("git", ["config", ...n, "--replace-all", "core.hooksPath", o], { windowsHide: true }), t(`[runner:git] --configure-git: core.hooksPath=${o}`), { installed: true };
}
var q = ["applypatch-msg", "pre-applypatch", "post-applypatch", "pre-commit", "pre-merge-commit", "post-commit", "pre-rebase", "post-checkout", "post-merge", "pre-push", "reference-transaction", "fsmonitor-watchman", "pre-auto-gc", "post-rewrite", "sendemail-validate", "post-index-change"], z = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
[ -x "$local_hook" ] && exec "$local_hook" "$@"
exit 0
`, X = `#!/bin/sh
common_dir=$(git rev-parse --git-common-dir 2>/dev/null) || common_dir=.git
local_hook="$common_dir/hooks/$(basename "$0")"
if [ -x "$local_hook" ]; then
  "$local_hook" "$@" || exit $?
fi
email="$CCR_SESSION_ACCOUNT_EMAIL"
nl='
'
case "$email" in
  ''|*'<'*|*'>'*|*"$nl"*) email='' ;;
esac
if [ -n "$email" ] && printf %s "$email" | LC_ALL=C grep -q '[^ -~]'; then
  email=''
fi
if [ -n "$email" ]; then
  name="\${email%%@*}"
  git interpret-trailers --in-place \\
    --if-exists addIfDifferent \\
    --trailer "Co-authored-by: $name <$email>" "$1"
fi
exit 0
`;
function Q(e) {
  return e.replace(/'/g, "'\\''");
}
function me(e) {
  let n = false, t, o, i;
  for (let r = 0; r < e.length; r++) {
    let a = e[r];
    if (a === "-Y" && e[r + 1] === "sign") n = true, r++;
    else if (a === "-n") t = e[++r];
    else if (a === "-f") o = e[++r];
    else if (a.startsWith("-")) {
      if (e[r + 1] !== void 0 && !e[r + 1].startsWith("-")) r++;
    } else if (i === void 0) i = a;
  }
  if (!n) throw Error(`code-sign: only SSH-style signing (-Y sign) is supported; got: ${e.join(" ")}`);
  if (!i) throw Error("code-sign: no file specified to sign");
  return { bufferFile: (0, import_path.resolve)(i), namespace: t, keyFile: o };
}
async function pe(e, n) {
  let t = n.env.CLAUDE_CODE_REMOTE_SESSION_ID || n.env.CLAUDE_RUNNER_SESSION_ID?.replace(/^session_/, "cse_"), o = n.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN, i = (n.env.SESSION_INGRESS_URL || n.env.ANTHROPIC_BASE_URL || n.env.CLAUDE_RUNNER_API_BASE_URL || "").replace(/\/+$/, "");
  if (!t || !re.test(t)) throw Error("code-sign: CLAUDE_CODE_REMOTE_SESSION_ID (child) / CLAUDE_RUNNER_SESSION_ID (lifecycle hook) is unset or malformed \u2014 is this process a descendant of a runner-spawned session or hook?");
  if (!o) throw Error("code-sign: CLAUDE_CODE_SESSION_ACCESS_TOKEN is unset");
  if (!i) throw Error("code-sign: ANTHROPIC_BASE_URL (child) / CLAUDE_RUNNER_API_BASE_URL (lifecycle hook) is unset");
  let r = await (0, import_promises.readFile)(e.bufferFile, "utf8"), a = await ye(), u = JSON.stringify({ contents: r, source: { type: "git_repository" }, git_object_format: a }), h = `${i}/v1/code/sessions/${t}/sign-commit`, f = await n.fetchFn(h, { method: "POST", headers: { "content-type": "application/json", "anthropic-version": "2023-06-01", "x-environment-runner-version": `shr-${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}`, authorization: `Bearer ${o}` }, body: u, ...(0, import_chunk_3jjr3wje.wl)({ url: h }), ...(0, import_chunk_3jjr3wje.lO)(void 0), signal: AbortSignal.timeout(3e4) });
  if (!f.ok) {
    let d = await f.text().catch(() => "");
    throw Error(`code-sign: sign-commit returned HTTP ${f.status}` + (d ? `: ${Se(d, 200)}` : ""));
  }
  let y = await f.json();
  if (!y.signature) throw Error("code-sign: response missing signature");
  let l = `${e.bufferFile}.sig`;
  return await (0, import_promises.writeFile)(l, y.signature), l;
}
async function ye() {
  let { stdout: e, code: n } = await (0, import_chunk_7fsmgfxx.kt)("git", ["rev-parse", "--show-object-format"], { useCwd: false, stdin: "ignore", stderr: "ignore", maxBuffer: 1048576 });
  return n === 0 && e.trim() === "sha256" ? "sha256" : "sha1";
}
function Se(e, n) {
  return e.length > n ? e.slice(0, n) + "\u2026" : e;
}
async function g5l(e) {
  try {
    let n = me(e);
    await pe(n, { env: process.env, fetchFn: fetch }), process.exit(0);
  } catch (n) {
    process.stderr.write(`${n instanceof Error ? n.message : String(n)}
`), process.exit(1);
  }
}
