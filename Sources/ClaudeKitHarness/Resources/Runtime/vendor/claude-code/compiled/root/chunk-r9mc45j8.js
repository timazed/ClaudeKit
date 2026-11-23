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
var chunk_r9mc45j8_exports = {};
__export(chunk_r9mc45j8_exports, {
  E0i: () => E0i,
  Mgs: () => Mgs,
  Xgo: () => Xgo,
  Z5: () => Z5,
  jit: () => jit,
  k0i: () => k0i,
  kZl: () => kZl,
  v0i: () => v0i
});
module.exports = __toCommonJS(chunk_r9mc45j8_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_6e68m1dj = require("/$bunfs/root/chunk-6e68m1dj.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var import_fs = require("fs");
var import_path2 = require("path");
function T() {
  switch ("darwin") {
    case "darwin":
      return ["Google Chrome.app/Contents/MacOS/Google Chrome", "Chromium.app/Contents/MacOS/Chromium", "Microsoft Edge.app/Contents/MacOS/Microsoft Edge", "Brave Browser.app/Contents/MacOS/Brave Browser"].flatMap((r) => [(0, import_path.join)("/Applications", r), (0, import_path.join)((0, import_os.homedir)(), "Applications", r)]);
    case "win32":
      return ["C:\\Program Files", "C:\\Program Files (x86)", (0, import_path.join)((0, import_os.homedir)(), "AppData", "Local")].flatMap((r) => [(0, import_path.join)(r, "Google", "Chrome", "Application", "chrome.exe"), (0, import_path.join)(r, "Chromium", "Application", "chrome.exe"), (0, import_path.join)(r, "Microsoft", "Edge", "Application", "msedge.exe")]);
    default:
      return ["/usr/bin/google-chrome-stable", "/usr/bin/google-chrome", "/usr/bin/chromium-browser", "/usr/bin/chromium", "/usr/local/bin/chromium", "/opt/google/chrome/chrome"];
  }
}
async function O(e, r) {
  try {
    let o = await (0, import_promises.stat)(e);
    return o.isFile() && (o.mode & 73) !== 0;
  } catch (o) {
    if (r && !(0, import_chunk_jv7av99m.kn)(o)) throw o;
    return false;
  }
}
async function h(e) {
  let r = [];
  for (let o of T()) {
    if ((0, import_chunk_z6pfqf6e.ja)(o)) continue;
    if (await O(o, e?.strict === true)) r.push(o);
  }
  return r;
}
var S = "/mnt/skills", D = "examples/artifact-emulator", k0i = "scripts/bootstrap.py", I = "tengu_cobalt_plinth_hornbeam", c = { base: S, ownerUid: 0 };
function Xgo() {
  return (0, import_path2.join)(c.base, D);
}
function E0i(e) {
  let r = (0, import_path2.relative)(c.base, e);
  if (r === "" || r === ".." || r.startsWith(`..${import_path2.sep}`) || (0, import_path2.isAbsolute)(r)) return "outside_mount";
  let o = r.split(import_path2.sep), m = c.base;
  for (let u = 0; u <= o.length; u++) {
    if (u > 0) m = (0, import_path2.join)(m, o[u - 1]);
    let i;
    try {
      i = (0, import_fs.lstatSync)(m);
    } catch (A) {
      let E = (0, import_chunk_jv7av99m.w)(A);
      return E === "ENOENT" || E === "ENOTDIR" ? "missing" : "unreadable";
    }
    if (i.isSymbolicLink()) return "link";
    if (u === o.length ? !i.isFile() : !i.isDirectory()) return "wrong_type";
    if (i.uid !== c.ownerUid) return "wrong_owner";
    if ((i.mode & 18) !== 0) return "writable";
  }
  return;
}
function L() {
  if (!(0, import_chunk_6e68m1dj.hn)()) return "not_hosted";
  return E0i((0, import_path2.join)(Xgo(), k0i));
}
function P() {
  return U().on;
}
function U() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  if (e.artifactPreviewEmulator === void 0) e.artifactPreviewEmulator = F(), (0, import_chunk_y53wbr8a.a)("tengu_artifact_preview_emulator_gate", { on: e.artifactPreviewEmulator.on, reason: (0, import_chunk_78g0060s.f)(e.artifactPreviewEmulator.reason) });
  return e.artifactPreviewEmulator;
}
function F() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PREVIEW_EMULATOR;
  if (e === false) return { on: false, reason: "pinned_off" };
  let r;
  try {
    r = L();
  } catch (o) {
    (0, import_chunk_w578pjby.t)(`Artifact preview: could not check the emulator skill's files, so the emulator stays off: ${(0, import_chunk_jv7av99m.d)(o)}`), r = "unreadable";
  }
  if (r !== void 0) return { on: false, reason: r };
  if (e === true) return { on: true, reason: "pinned_on" };
  return (0, import_chunk_865at33z.b)(I, false) === true ? { on: true, reason: "flag_on" } : { on: false, reason: "flag_off" };
}
var n = null;
function g() {
  return n !== null && true;
}
function jit() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PREVIEW === false) return false;
  if (Z5() === "emulator") return true;
  if (!V()) return false;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PREVIEW === true) return true;
  return W() !== "none" || n?.pinnedChromeInstall() !== void 0;
}
var k = { on: false };
function Z5() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  return e.artifactPreviewEngine ??= import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PREVIEW !== false && k.on && H() ? "emulator" : "local_chrome", e.artifactPreviewEngine;
}
function H() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && P();
}
function V() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || !g()) return false;
  return import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PREVIEW ?? (0, import_chunk_865at33z.b)("tengu_cobalt_plinth_aspen", false);
}
function Mgs() {
  if (n === null) throw Error("artifact preview is not compiled into this build");
  let { findPlaywrightChromes: e } = n, r = async (o) => import_chunk_c203g5kd.s.BUN_CHROME_PATH ? [import_chunk_c203g5kd.s.BUN_CHROME_PATH] : (0, import_chunk_4smdap7r.M)([...await e(o), ...await h(o)]);
  return { chromeCandidates: r, resolveChrome: async () => (await r())[0], noSandbox: n.needsNoSandbox, installHint: n.chromeInstallHint, installDir: n.chromeInstallDir, pinnedInstall: n.pinnedChromeInstall };
}
function C() {
  return `${import_chunk_c203g5kd.s.BUN_CHROME_PATH ?? ""}
${import_chunk_c203g5kd.s.PLAYWRIGHT_BROWSERS_PATH ?? ""}`;
}
async function kZl() {
  let e;
  try {
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_ARTIFACT_PREVIEW !== void 0 || import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || !g()) return;
    let r = (0, import_chunk_n5qd9b6p.Ar)();
    if (r.artifactPreviewBrowserSearch !== void 0) return;
    e = { env: C(), state: "pending" }, r.artifactPreviewBrowserSearch = e;
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`Artifact preview: could not start the browser search: ${(0, import_chunk_jv7av99m.d)(r)}`);
    return;
  }
  try {
    let r = await Mgs().chromeCandidates({ strict: true });
    e.state = r.length > 0 ? "found" : "none";
  } catch (r) {
    e.state = "error", (0, import_chunk_w578pjby.t)(`Artifact preview: the startup browser search failed: ${(0, import_chunk_jv7av99m.d)(r)}`);
  }
}
function W() {
  let e = (0, import_chunk_n5qd9b6p.Ar)();
  if (e.artifactPreviewBrowser === void 0) e.artifactPreviewBrowser = G(e.artifactPreviewBrowserSearch), (0, import_chunk_y53wbr8a.a)("tengu_artifact_preview_browser", { verdict: (0, import_chunk_78g0060s.f)(e.artifactPreviewBrowser.verdict), source: (0, import_chunk_78g0060s.f)(e.artifactPreviewBrowser.source) });
  return e.artifactPreviewBrowser.verdict;
}
function v0i() {
  return (0, import_chunk_n5qd9b6p.Ar)().artifactPreviewBrowser;
}
function G(e) {
  if (e === void 0) return { verdict: "unknown", source: "not_started" };
  if (e.env !== C()) return { verdict: "unknown", source: "stale_env" };
  if (e.state === "pending" || e.state === "error") return { verdict: "unknown", source: e.state };
  return { verdict: e.state, source: "session" };
}
