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
var chunk_859v5edd_exports = {};
__export(chunk_859v5edd_exports, {
  D_r: () => D_r,
  F_r: () => F_r,
  GNn: () => GNn,
  L_r: () => L_r,
  N_r: () => N_r,
  Osn: () => Osn,
  Psn: () => Psn,
  TUt: () => TUt,
  U9e: () => U9e,
  XDe: () => XDe,
  cll: () => cll,
  dPi: () => dPi,
  hpe: () => hpe,
  lPi: () => lPi,
  sre: () => sre
});
module.exports = __toCommonJS(chunk_859v5edd_exports);
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var T = /^filter\.(.*)\.(?:clean|smudge|process|required)$/is;
function D_r(e) {
  return e.normalize("NFKD").replace(new RegExp("\\p{M}+", "gu"), "").toLowerCase();
}
function L_r(e) {
  return (0, import_chunk_4smdap7r.M)(Array.from(e).flatMap((n) => {
    let t = T.exec(n)?.[1];
    return t === void 0 ? [] : [t];
  }));
}
function cll(e) {
  return /^(?:hook\..*|core\.unsetenvvars)$/s.test(e);
}
function lPi(e) {
  return e.flatMap((n) => [[`filter.${n}.clean`, ""], [`filter.${n}.smudge`, ""], [`filter.${n}.process`, ""], [`filter.${n}.required`, "false"]]);
}
var m = 1048576, C = 5e3, N_r = Object.fromEntries(["GIT_TRACE", "GIT_TRACE_SETUP", "GIT_TRACE_PACKET", "GIT_TRACE_PACKFILE", "GIT_TRACE_PACK_ACCESS", "GIT_TRACE_PERFORMANCE", "GIT_TRACE_SHALLOW", "GIT_TRACE_CURL", "GIT_TRACE_REFS", "GIT_TRACE_FSMONITOR", "GIT_TRACE_WORKING_TREE_ENCODING", "GIT_TRACE2", "GIT_TRACE2_EVENT", "GIT_TRACE2_PERF"].map((e) => [e, "0"])), F_r = "if that setting is yours, move it to your global git config; if you don't recognize it, remove it from the repository's config, since a tool or checkout you don't trust may have written it";
function XDe(e) {
  switch (e.reason) {
    case "config_unreadable":
      return "git's configuration for the repository could not be read in full";
    case "conditional_include":
      return "the repository's own git config has a conditional include (includeIf), so what a spawn there would load cannot be determined";
    case "unsafe_key":
      return `the repository's own git config sets ${e.lfsKey === void 0 ? e.key : `${e.key}, an entry git-lfs reads as ${e.lfsKey}`}, which names a program git-lfs would run for any LFS path, on checkout and on status alike (${F_r})`;
  }
}
var w = /^includeif\..*\.path$/s, x = /^lfs\.extension\./su, O = new RegExp(`lfs.customtransfer..+?.path|^lfs\\.(?:.*\\.)?standalonetransferagent$|${x.source}`, "su"), I = { head: 60, tail: 40 };
function GNn(e) {
  return (0, import_chunk_tp3c5q2s.Qa)((0, import_chunk_sah8dzn4.Q0o)(e), I);
}
async function sre(e, n = {}) {
  let t = await hpe(e, n);
  return t.ok ? U9e(t.entries) : t;
}
function U9e(e) {
  let n = L_r(e.map(([t]) => t));
  if (n.some((t) => t.includes("=") || t.includes(`
`))) return { ok: false, reason: "filter_name_unrepresentable" };
  return { ok: true, args: lPi(n).flatMap(([t, r]) => ["-c", `${t}=${r}`]) };
}
function dPi(e, n) {
  return (0, import_chunk_7fsmgfxx.ut)((0, import_chunk_w5s307zm.Ht)(), e, { ...n, stdin: "ignore" });
}
async function hpe(e, { repository: n = [], pin: t, envPins: r = {}, base: u, run: c = dPi, timeoutMs: i = C, movesNoLfsObjects: o = false } = {}) {
  let s = { args: n, envPins: r, base: u, pin: n.length > 0 ? void 0 : t ?? (0, import_chunk_kypvvv9j.XN)(e), run: c, timeoutMs: i }, p = await y(e, "--local", s);
  if (p === null) return { ok: false, reason: "config_unreadable" };
  let a = await y(e, "--worktree", s);
  if (a === null) return { ok: false, reason: "config_unreadable" };
  let d = [...p, ...a], f = o ? x : O;
  for (let l of d) {
    let [R] = l;
    if (w.test(D_r(R))) return { ok: false, reason: "conditional_include" };
    for (let E of (0, import_chunk_4smdap7r.M)([R, ...A(l)])) if (f.test(E) || f.test(D_r(E))) return { ok: false, reason: "unsafe_key", key: GNn(R), ...E === R ? {} : { lfsKey: GNn(E) } };
  }
  return { ok: true, entries: d };
}
async function Psn(e, n, { envPins: t, base: r, repository: u, buildInvocation: c = (i, { dir: o, env: s }) => ({ file: (0, import_chunk_w5s307zm.Ht)(), args: [...i], cwd: o, env: s }) }) {
  let i = c([...import_chunk_gd77dyw4.Nn, "config", "--includes", "--null", "--show-scope", "--get-regexp", n], { dir: e, env: (0, import_chunk_gd77dyw4.ms)(t, { base: r, repository: u }) }), o = await (0, import_chunk_7fsmgfxx.ut)(i.file, i.args, { cwd: i.cwd, env: i.env, extendEnv: false, timeout: C, preserveOutputOnError: false, stdin: "ignore" });
  if (o.code !== 0) return (o.exitCode === 1 || o.exitCode === 129) && !o.timedOut && !o.maxBufferExceeded ? [] : null;
  let s = o.stdout.split("\0"), p = [];
  for (let a = 0; a + 1 < s.length; a += 2) {
    let d = s[a], f = s[a + 1] ?? "", l = f.indexOf(`
`);
    if ((d === "system" || d === "global" || d === "command") && l !== -1) p.push([f.slice(0, l), f.slice(l + 1)]);
  }
  return p;
}
async function y(e, n, { args: t, envPins: r, base: u, pin: c, run: i, timeoutMs: o }) {
  let { code: s, stdout: p, stderr: a, maxBufferExceeded: d } = await i([...t, ...import_chunk_gd77dyw4.Nn, "config", n, "--includes", "-z", "--list"], { cwd: e, env: (0, import_chunk_gd77dyw4.ms)({ ...r, ...N_r }, { repository: c, base: u }), ...u !== void 0 && { extendEnv: false }, timeout: o, maxBuffer: m });
  if (d === true || Buffer.byteLength(p) >= m) return null;
  let f = a.replace(/\n+$/, ""), l = f.search(/^fatal: /m), R = l === -1 ? f : f.slice(l);
  if (s === 128 && /^fatal: unable to read config file '[^\n]*config(?:\.worktree)?': No such file or directory$/.test(R)) return [];
  if (n === "--worktree" && s === 128 && /^fatal: --worktree cannot be used with multiple working trees unless the config\nextension worktreeConfig is enabled\. Please read "CONFIGURATION FILE"\nsection in "git help worktree" for details$/.test(R)) return [];
  if (n === "--worktree" && s === 129 && /unknown option `worktree'/.test(a)) return [];
  if (s !== 0) return null;
  let E = p.split("\0").filter((g) => g !== "").map((g) => {
    let _ = g.indexOf(`
`);
    return _ === -1 ? [g, null] : [g.slice(0, _), g.slice(_ + 1)];
  });
  return E.some(([g]) => g.includes("\uFFFD")) ? null : E;
}
function A([e, n]) {
  return (n === null ? e : `${e}=${n}`).split(`
`).flatMap((t) => {
    let r = t.indexOf("=");
    return r === -1 ? [] : [t.slice(0, r).trim()];
  });
}
var TUt = ["CHERRY_PICK_HEAD", "REVERT_HEAD"], k = 2;
async function Osn(e, n, t) {
  let r = /* @__PURE__ */ new Set();
  if (n.length === 0 || !await (0, import_chunk_w5s307zm.aft)(e)) return r;
  let u = await Promise.all(n.map((i) => t(["show-ref", "--exists", i]))), c = false;
  for (let [i, o] of u.entries()) if (o === 0) r.add(n[i]);
  else if (o !== k) c = true;
  return r.size === 0 && c ? null : r;
}
