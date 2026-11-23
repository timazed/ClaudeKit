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
var chunk_8agmqaw6_exports = {};
__export(chunk_8agmqaw6_exports, {
  KPa: () => KPa,
  _Vo: () => _Vo,
  g8s: () => g8s,
  h8s: () => h8s,
  qPa: () => qPa
});
module.exports = __toCommonJS(chunk_8agmqaw6_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_os = require("os");
var import_path = require("path");
var _Vo = "1.1.9669";
function y() {
  let e = [process.argv[1] || "", process.execPath || ""].map((o) => o.replaceAll("\\", "/")), n = ["/build-ant/", "/build-ant-native/", "/build-external/", "/build-external-native/"];
  return e.some((o) => n.some((r) => o.includes(r)));
}
function f(e, n, o = {}) {
  let r = new URL(`${e}://${n}`);
  for (let [a, s] of Object.entries(o)) r.searchParams.set(a, s);
  return r.toString();
}
function S(e, n) {
  switch (e.kind) {
    case "resume":
      return f(n, "resume", { session: e.sessionId });
    case "new-session":
      return `${f(n, "code/new")}?folder=${encodeURIComponent(e.folder)}`;
  }
}
var x = "com.anthropic.claudefordesktop", i = { appPath: "/Applications/Claude.app", openByPath: false };
async function D() {
  let e = { appPath: (0, import_path.join)((0, import_os.homedir)(), "Applications", "Claude.app"), openByPath: false };
  return await (0, import_chunk_2yx6c1y2.ep)(e.appPath) && await p(e, "CFBundleIdentifier", { timeout: 5e3 }) === x ? e : null;
}
async function l() {
  return i;
}
async function p(e, n, o) {
  let { code: r, stdout: a } = await (0, import_chunk_7fsmgfxx.kt)("defaults", ["read", `${e.appPath}/Contents/Info.plist`, n], o);
  if (r !== 0) return null;
  let s = a.trim();
  return s.length > 0 ? s : null;
}
function h(e) {
  let n = (0, import_chunk_tvttgr51.hB)(e);
  return n !== null && (0, import_chunk_tvttgr51.Vb)(n.version, _Vo);
}
async function C() {
  let e = await p(i, "CFBundleShortVersionString"), n = e === null && !await (0, import_chunk_2yx6c1y2.ep)(i.appPath) ? await D() : null;
  return n === null ? { app: i, version: e } : { app: n, version: await p(n, "CFBundleShortVersionString") };
}
async function O() {
  let e = await l();
  if (!e.openByPath) return C();
  let n = await p(e, "CFBundleShortVersionString");
  if (n !== null && h(n)) return { app: e, version: n };
  let o = await p(i, "CFBundleShortVersionString");
  return o === null ? null : { app: { appPath: i.appPath, openByPath: true }, version: o };
}
async function _(e) {
  return false;
}
var k = 'application id "com.github.Electron"';
async function w() {
  if (y()) {
    if ((await (0, import_chunk_7fsmgfxx.kt)("osascript", ["-e", `${k} is running`], { timeout: 5e3 })).stdout.trim() === "true") return "claude-dev";
  }
  return await b() ? "claude" : null;
}
async function KPa() {
  return await w() !== null;
}
async function b() {
  {
    let e = await l();
    return e.openByPath || await (0, import_chunk_2yx6c1y2.ep)(e.appPath) || await D() !== null;
  }
  return _("claude");
}
var I = 40;
async function h8s() {
  let e = await w();
  if (e === null) return { status: "not-installed" };
  if (e === "claude-dev") return { status: "ready", version: "unknown", scheme: e };
  let n, o;
  try {
    {
      let r = await O();
      if (!r) return { status: "not-installed" };
      ({ app: o, version: n } = r);
    }
  } catch {
    return { status: "ready", version: "unknown", scheme: e };
  }
  if (!n) return { status: "ready", version: "unknown", scheme: e, macApp: o };
  if (!h(n)) return { status: "version-too-old", version: (0, import_chunk_tp3c5q2s.Ft)(n, I) };
  return { status: "ready", version: n, scheme: e, macApp: o };
}
var B = 200;
function m(e, n) {
  let { code: o, exitCode: r, stderr: a, error: s, timedOut: g, maxBufferExceeded: v } = n;
  if (o === 0) return { opened: true };
  let u = a || s;
  if ((0, import_chunk_w578pjby.t)(`Deep link opener ${e} failed: code ${o}, exitCode ${r ?? "undefined"}${u ? `: ${u}` : ""}`), g) return { opened: false, detail: `\`${e}\` timed out` };
  if (v) return { opened: false, detail: `\`${e}\` printed too much output` };
  let c = r === void 0 ? `\`${e}\` failed` : `\`${e}\` exited ${r}`, d = (0, import_chunk_tp3c5q2s.Ft)((0, import_chunk_7cfjrnwy.Ir)(a.trim()) || (r === void 0 ? s : "") || "", B).replace(/\.+$/, "");
  return { opened: false, detail: d.length === 0 ? c : `${c}: ${d}` };
}
async function E(e, n) {
  (0, import_chunk_w578pjby.t)(`Opening deep link: ${e}`);
  {
    if (e.startsWith("claude-dev:")) return m("osascript", await (0, import_chunk_7fsmgfxx.kt)("osascript", ["-e", "on run argv", "-e", `tell ${k} to open location (item 1 of argv)`, "-e", "end run", e]));
    let r = n ?? await l();
    return m("open", await (0, import_chunk_7fsmgfxx.kt)("open", r.openByPath ? ["-a", r.appPath, e] : [e]));
  }
  return { opened: false, detail: "no deep link opener for darwin" };
}
async function g8s(e) {
  let n = await h8s();
  if (n.status === "not-installed") return { success: false, reason: "not_installed", error: "Claude Desktop is not installed. Install it from https://claude.ai/download" };
  if (n.status === "version-too-old") return { success: false, reason: "outdated", error: `Claude Desktop ${n.version} is too old. Update to ${_Vo} or later.` };
  let o = S(e, n.scheme), r = await E(o, n.macApp);
  if (!r.opened) return { success: false, reason: "open_failed", error: `Couldn't open Claude Desktop (${r.detail}). Open Claude Desktop and try again.` };
  return { success: true };
}
async function qPa() {
  return g8s({ kind: "resume", sessionId: (0, import_chunk_f9x2f6cx.W)() });
}
