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
var chunk_1w26p6p9_exports = {};
__export(chunk_1w26p6p9_exports, {
  $Ai: () => $Ai,
  Agr: () => Agr,
  Cgr: () => Cgr,
  DAi: () => DAi,
  FAi: () => FAi,
  LAi: () => LAi,
  NAi: () => NAi,
  Qcs: () => Qcs,
  d0: () => d0,
  g7: () => g7,
  hwt: () => hwt
});
module.exports = __toCommonJS(chunk_1w26p6p9_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var import_chunk_x0vfzwdd = require("/$bunfs/root/chunk-x0vfzwdd.js");
var import_chunk_prn6030k = require("/$bunfs/root/chunk-prn6030k.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var import_path = require("path");
var d0 = `mcp__${import_chunk_prn6030k.Xi}__`, g7 = "ClaudeInChromeDomain", g = { chrome: { name: "Google Chrome", macos: { appName: "Google Chrome", nativeMessagingPath: ["Library", "Application Support", "Google", "Chrome", "NativeMessagingHosts"] }, linux: { binaries: ["google-chrome", "google-chrome-stable"], nativeMessagingPath: [".config", "google-chrome", "NativeMessagingHosts"] }, windows: { dataPath: ["Google", "Chrome", "User Data"], registryKey: "HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts", appPathsExe: "chrome.exe" } }, brave: { name: "Brave", macos: { appName: "Brave Browser", nativeMessagingPath: ["Library", "Application Support", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"] }, linux: { binaries: ["brave-browser", "brave"], nativeMessagingPath: [".config", "BraveSoftware", "Brave-Browser", "NativeMessagingHosts"] }, windows: { dataPath: ["BraveSoftware", "Brave-Browser", "User Data"], registryKey: "HKCU\\Software\\BraveSoftware\\Brave-Browser\\NativeMessagingHosts", appPathsExe: "brave.exe" } }, arc: { name: "Arc", macos: { appName: "Arc", nativeMessagingPath: ["Library", "Application Support", "Arc", "User Data", "NativeMessagingHosts"] }, linux: { binaries: [], nativeMessagingPath: [] }, windows: { dataPath: ["Arc", "User Data"], registryKey: "HKCU\\Software\\ArcBrowser\\Arc\\NativeMessagingHosts" } }, chromium: { name: "Chromium", macos: { appName: "Chromium", nativeMessagingPath: ["Library", "Application Support", "Chromium", "NativeMessagingHosts"] }, linux: { binaries: ["chromium", "chromium-browser"], nativeMessagingPath: [".config", "chromium", "NativeMessagingHosts"] }, windows: { dataPath: ["Chromium", "User Data"], registryKey: "HKCU\\Software\\Chromium\\NativeMessagingHosts" } }, edge: { name: "Microsoft Edge", macos: { appName: "Microsoft Edge", nativeMessagingPath: ["Library", "Application Support", "Microsoft Edge", "NativeMessagingHosts"] }, linux: { binaries: ["microsoft-edge", "microsoft-edge-stable"], nativeMessagingPath: [".config", "microsoft-edge", "NativeMessagingHosts"] }, windows: { dataPath: ["Microsoft", "Edge", "User Data"], registryKey: "HKCU\\Software\\Microsoft\\Edge\\NativeMessagingHosts", appPathsExe: "msedge.exe" } }, vivaldi: { name: "Vivaldi", macos: { appName: "Vivaldi", nativeMessagingPath: ["Library", "Application Support", "Vivaldi", "NativeMessagingHosts"] }, linux: { binaries: ["vivaldi", "vivaldi-stable"], nativeMessagingPath: [".config", "vivaldi", "NativeMessagingHosts"] }, windows: { dataPath: ["Vivaldi", "User Data"], registryKey: "HKCU\\Software\\Vivaldi\\NativeMessagingHosts", appPathsExe: "vivaldi.exe" } }, opera: { name: "Opera", macos: { appName: "Opera", nativeMessagingPath: ["Library", "Application Support", "com.operasoftware.Opera", "NativeMessagingHosts"] }, linux: { binaries: ["opera"], nativeMessagingPath: [".config", "opera", "NativeMessagingHosts"] }, windows: { dataPath: ["Opera Software", "Opera Stable"], registryKey: "HKCU\\Software\\Opera Software\\Opera Stable\\NativeMessagingHosts", useRoaming: true, appPathsExe: "opera.exe" } } }, d = ["chrome", "brave", "arc", "edge", "chromium", "vivaldi", "opera"];
function DAi() {
  let e = (0, import_chunk_cg8dqz0a.x)(), o = (0, import_os.homedir)(), a = [];
  for (let i of d) {
    let r = g[i];
    switch (e) {
      case "macos":
        if (r.macos.nativeMessagingPath.length > 0) a.push({ path: (0, import_path.join)(o, ...r.macos.nativeMessagingPath) });
        break;
      case "linux":
      case "wsl":
        if (r.linux.nativeMessagingPath.length > 0) a.push({ path: (0, import_path.join)(o, ...r.linux.nativeMessagingPath) });
        break;
      case "windows":
        break;
    }
  }
  return a;
}
function LAi() {
  let e = [];
  for (let o of d) {
    let a = g[o];
    if (a.windows.registryKey) e.push({ browser: o, key: a.windows.registryKey });
  }
  return e;
}
async function Qcs() {
  let e = (0, import_chunk_cg8dqz0a.x)();
  for (let o of d) {
    let a = g[o];
    switch (e) {
      case "macos": {
        let i = `/Applications/${a.macos.appName}.app`;
        try {
          if ((await (0, import_promises.stat)(i)).isDirectory()) return (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Detected browser: ${a.name}`), o;
        } catch (r) {
          if (!(0, import_chunk_jv7av99m.fn)(r)) throw r;
        }
        break;
      }
      case "wsl":
      case "linux": {
        for (let i of a.linux.binaries) if (await (0, import_chunk_c203g5kd.Bf)(i).catch(() => null)) return (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Detected browser: ${a.name}`), o;
        break;
      }
      case "windows": {
        let i = (0, import_os.homedir)();
        if (a.windows.dataPath.length > 0) {
          let r = a.windows.useRoaming ? (0, import_path.join)(i, "AppData", "Roaming") : (0, import_path.join)(i, "AppData", "Local"), c = (0, import_path.join)(r, ...a.windows.dataPath);
          try {
            if ((await (0, import_promises.stat)(c)).isDirectory()) return (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Detected browser: ${a.name}`), o;
          } catch (n) {
            if (!(0, import_chunk_jv7av99m.fn)(n)) throw n;
          }
        }
        break;
      }
    }
  }
  return null;
}
var y = 200;
function NAi(e) {
  let o = (0, import_chunk_929j4hj9.Fi)().trackedTabIds;
  if (o.size >= y && !o.has(e)) o.clear();
  o.add(e);
}
function FAi(e) {
  return (0, import_chunk_929j4hj9.Fi)().trackedTabIds.has(e);
}
function l(e) {
  return { exec_exit_code: e.code, exec_failure_kind: e.exitCode !== void 0 ? (0, import_chunk_78g0060s.S)("nonzero_exit") : e.code === 127 ? (0, import_chunk_78g0060s.S)("not_found") : (0, import_chunk_78g0060s.S)("spawn_failed_or_killed") };
}
async function hwt(e) {
  if (!/^https?:\/\//i.test(e)) return (0, import_chunk_cqa9hrgx.m)("chrome_open_url", "invalid_url"), false;
  let o = (0, import_chunk_cg8dqz0a.x)(), a = await Qcs();
  if (!a) return (0, import_chunk_w578pjby.t)("[Claude in Chrome] No compatible browser found"), (0, import_chunk_cqa9hrgx.m)("chrome_open_url", "no_browser"), false;
  let i = g[a];
  switch (o) {
    case "macos": {
      let r = await (0, import_chunk_7fsmgfxx.kt)("open", ["-a", i.macos.appName, e]);
      if (r.code === 0) return (0, import_chunk_cqa9hrgx.u)("chrome_open_url"), true;
      return (0, import_chunk_cqa9hrgx.m)("chrome_open_url", "exec_failed", l(r)), false;
    }
    case "windows": {
      let r = i.windows.appPathsExe, c = false;
      if (r) {
        let h = await (0, import_chunk_x0vfzwdd.Kal)(r);
        if (h) {
          if (await (0, import_chunk_x0vfzwdd.qal)(h, [e])) return (0, import_chunk_cqa9hrgx.u)("chrome_open_url", { open_method: (0, import_chunk_78g0060s.S)("app_paths"), browser: (0, import_chunk_78g0060s.f)(a) }), true;
          c = true;
        }
      }
      let n = await (0, import_chunk_7fsmgfxx.ut)("rundll32", ["url,OpenURL", e], { cwd: (0, import_chunk_x0vfzwdd.uU)() });
      if (n.code === 0) return (0, import_chunk_cqa9hrgx.u)("chrome_open_url", { open_method: c ? (0, import_chunk_78g0060s.S)("rundll32_after_spawn_fail") : r ? (0, import_chunk_78g0060s.S)("rundll32") : (0, import_chunk_78g0060s.S)("rundll32_no_app_paths_support"), browser: (0, import_chunk_78g0060s.f)(a) }), true;
      return (0, import_chunk_cqa9hrgx.m)("chrome_open_url", "exec_failed", { ...l(n), ...c && { app_paths_spawn_failed: true }, browser: (0, import_chunk_78g0060s.f)(a) }), false;
    }
    case "wsl":
    case "linux": {
      let r;
      for (let c of i.linux.binaries) {
        let n = await (0, import_chunk_7fsmgfxx.kt)(c, [e], { useCwd: true, useToolMemoryCgroup: false });
        if (n.code === 0) return (0, import_chunk_cqa9hrgx.u)("chrome_open_url"), true;
        if (r?.exitCode === void 0 || n.exitCode !== void 0) r = n;
      }
      return (0, import_chunk_cqa9hrgx.m)("chrome_open_url", "exec_failed", r ? l(r) : void 0), false;
    }
    default:
      return (0, import_chunk_cqa9hrgx.m)("chrome_open_url", "exec_failed"), false;
  }
}
function Cgr() {
  return `/tmp/claude-mcp-browser-bridge-${C()}`;
}
function Agr() {
  if ((0, import_os.platform)() === "win32") return `\\\\.\\pipe\\${_()}`;
  return (0, import_path.join)(Cgr(), `${process.pid}.sock`);
}
async function $Ai() {
  if ((0, import_os.platform)() === "win32") return [`\\\\.\\pipe\\${_()}`];
  let e = [], o = Cgr();
  try {
    let a = await (0, import_promises.readdir)(o);
    for (let i of a) if (i.endsWith(".sock")) e.push((0, import_path.join)(o, i));
  } catch {
  }
  return e;
}
function _() {
  return `claude-mcp-browser-bridge-${C()}`;
}
function C() {
  try {
    return (0, import_os.userInfo)().username || "default";
  } catch {
    return import_chunk_c203g5kd.s.USER || import_chunk_c203g5kd.s.USERNAME || "default";
  }
}
