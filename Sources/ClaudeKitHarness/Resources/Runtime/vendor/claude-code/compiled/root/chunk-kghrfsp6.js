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
var chunk_kghrfsp6_exports = {};
__export(chunk_kghrfsp6_exports, {
  $et: () => $et
});
module.exports = __toCommonJS(chunk_kghrfsp6_exports);
var import_chunk_9zdrdv25 = require("/$bunfs/root/chunk-9zdrdv25.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
async function $et({ allowNetworkFallbackForOldGh: n }) {
  if (!await (0, import_chunk_c203g5kd.Bf)("gh")) return { status: "not_installed" };
  try {
    let t = await (0, import_chunk_9zdrdv25.gS)("gh", ["auth", "token"], { stdout: "ignore", stderr: "pipe", timeout: 5e3, reject: false });
    if (t.exitCode === 0) return { status: "authenticated", supportsAuthTokenCommand: true };
    if (t.timedOut) return { status: "unknown", error: "`gh auth token` timed out" };
    if (/not logged in|no oauth token/i.test(t.stderr)) return { status: "not_authenticated" };
    if (/unknown command/i.test(t.stderr) || Number.isInteger(t.exitCode) && t.stderr.trim() === "") {
      if (!n) return { status: "unknown", error: "this GitHub CLI version has no `gh auth token`" };
      let e = await (0, import_chunk_9zdrdv25.gS)("gh", ["auth", "status"], { stdout: "ignore", stderr: "pipe", timeout: 5e3, reject: false });
      if (e.exitCode === 0) return { status: "authenticated", supportsAuthTokenCommand: false };
      if (e.timedOut) return { status: "unknown", error: "`gh auth status` timed out" };
      if (/logged in to/i.test(e.stderr)) return { status: "authenticated", supportsAuthTokenCommand: false };
      if (/not logged in/i.test(e.stderr)) return { status: "not_authenticated" };
      return { status: "unknown", error: e.stderr.trim() || "`gh auth status` failed to run" };
    }
    return { status: "unknown", error: t.stderr.trim() || "`gh auth token` failed to run" };
  } catch {
    return { status: "not_installed" };
  }
}
