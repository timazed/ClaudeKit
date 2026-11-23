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
var chunk_spjmqhhj_exports = {};
__export(chunk_spjmqhhj_exports, {
  F3t: () => F3t,
  G5n: () => G5n,
  T1r: () => T1r,
  k$s: () => k$s,
  w$s: () => w$s
});
module.exports = __toCommonJS(chunk_spjmqhhj_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var w$s = { is_cwd: "sad", already_registered: "sad", outside_scope: "bad_reported", not_directory: "bad", too_many: "bad", expansion_failed: "bad", resolve_failed: "bad", stat_failed: "bad", screened_nt_namespace: "bad_reported", screened_untrusted_unc: "bad_reported", screened_untrusted_automount: "bad_reported", screened_suspicious_windows_spelling: "bad_reported", screened_unvettable_chain: "bad_reported", screened_link_text_climbs: "bad_reported" };
function p(e) {
  return `screened_${e}`;
}
function g(e) {
  return Object.hasOwn(w$s, e);
}
function F3t(e) {
  try {
    return e instanceof import_chunk_jv7av99m.A && e.telemetryMessage.startsWith("register_repo_root:") && e.errorClass !== void 0 && g(e.errorClass) ? e.errorClass : void 0;
  } catch {
    return;
  }
}
function G5n(e, o, l, d) {
  let r = { caseFold: false, skipPrivateAlias: true, uncShapeParity: true }, s = (0, import_path.isAbsolute)(o) && (0, import_chunk_p1ewvgeh.Sc)(e, o, r);
  if (s && (0, import_chunk_p1ewvgeh.Sc)(o, e, r)) return { allowed: false, code: "is_cwd", reason: "is the session's working directory, which is already registered; pass the cloned repo's own directory instead" };
  if (d.includes(e)) return { allowed: false, code: "already_registered", reason: "is already a registered working directory" };
  let c = l.some((i) => e !== i && (0, import_chunk_p1ewvgeh.Sc)(e, i, r));
  if (!s && !c) return { allowed: false, code: "outside_scope", reason: "is not a subdirectory of the session's working directory or of a launch-time --add-dir root that still leads where it first did" };
  return { allowed: true };
}
async function f(e) {
  return Promise.all([...e.values()].map(async (o) => ({ path: o.path, source: o.source, resolved: await (0, import_chunk_p1ewvgeh.nUi)(o) })));
}
async function h(e) {
  return (await (0, import_promises.stat)(e)).isDirectory() ? { allowed: true } : { allowed: false, code: "not_directory", reason: "is not a directory" };
}
var m = { nt_namespace: "register_repo_root: NT-namespace path rejected before filesystem access", untrusted_unc: "register_repo_root: UNC path rejected before filesystem access", untrusted_automount: "register_repo_root: automount path rejected before filesystem access", suspicious_windows_spelling: "register_repo_root: suspicious Windows path spelling rejected", unvettable_chain: "register_repo_root: unvettable path ancestry rejected before filesystem access", link_text_climbs: 'register_repo_root: path through a symlink whose target has ".." past its leading "../" segments rejected' };
async function k$s(e, o, l) {
  let d, r;
  try {
    d = (0, import_chunk_n2dbhmj2.xt)(e, l);
  } catch {
    throw new import_chunk_jv7av99m.A("register_repo_root: target path could not be resolved", "register_repo_root: path expansion failed", "expansion_failed");
  }
  let s = (0, import_chunk_2tqq6ycx.Nq)(e, d, o().trustedNetworkDirectories, { allowLinkTextClimbs: true });
  if (!s.ok) throw new import_chunk_jv7av99m.A("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", m[s.reason], p(s.reason));
  try {
    r = await (0, import_promises.realpath)(d);
  } catch (a) {
    throw new import_chunk_jv7av99m.A("register_repo_root: target path could not be resolved", "register_repo_root: path resolution failed", (0, import_chunk_jv7av99m.SS)(a) || (0, import_chunk_jv7av99m.Tk)(a) ? "resolve_failed" : void 0);
  }
  let c = (0, import_chunk_2tqq6ycx.r0)(r, o().trustedNetworkDirectories);
  if (c !== void 0) throw new import_chunk_jv7av99m.A("register_repo_root: target is a network path, an obfuscated spelling, or a path whose directories and symbolic links could not all be examined, which cannot be registered", "register_repo_root: resolved path rejected by the spelling screen", p(c));
  let i;
  try {
    i = await h(r);
  } catch (a) {
    throw new import_chunk_jv7av99m.A("register_repo_root: target path could not be resolved", "register_repo_root: target stat failed", (0, import_chunk_jv7av99m.SS)(a) || (0, import_chunk_jv7av99m.Tk)(a) ? "stat_failed" : void 0);
  }
  if (!i.allowed) throw new import_chunk_jv7av99m.A(`register_repo_root: ${(0, import_chunk_kx2fp6pc.wn)(e)} ${i.reason}`, "register_repo_root: target is not a directory", i.code);
  return r;
}
async function T1r(e, o, l, d = false) {
  let r = await k$s(e, o, l), s = await f(o().additionalWorkingDirectories), c = (0, import_chunk_a3fb7pa2.gy)().launchRootsAsFirstResolved, i = (await Promise.all(s.filter((n) => n.source === "cliArg").map(async (n) => {
    if (d || await c.get(n.path) === n.resolved) return n.resolved;
    (0, import_chunk_w578pjby.t)("register_repo_root: a launch-time --add-dir root no longer leads where it first did, so it anchors nothing", { level: "warn" });
    return;
  }))).filter((n) => n !== void 0), a = G5n(r, (0, import_chunk_f9x2f6cx.Te)(), i, s.map((n) => n.resolved));
  if (!a.allowed) throw new import_chunk_jv7av99m.A(`register_repo_root: ${(0, import_chunk_kx2fp6pc.wn)(e)} ${a.reason}`, "register_repo_root: directory is outside the allowed registration scope", a.code);
  return r;
}
