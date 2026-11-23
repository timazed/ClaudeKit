const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_8wnd1hkr_exports = {};
__export(chunk_8wnd1hkr_exports, {
  default: () => hr
});
module.exports = __toCommonJS(chunk_8wnd1hkr_exports);
var import_process = __toESM(require("process"));
var import_buffer = require("buffer");
var import_path = __toESM(require("path"));
var import_url = require("url");
var import_util = require("util");
var import_child_process = __toESM(require("child_process"));
var import_promises = __toESM(require("fs/promises"));
var import_process2 = __toESM(require("process"));
var import_promises2 = __toESM(require("fs/promises"));
var import_process3 = __toESM(require("process"));
var import_os = __toESM(require("os"));
var import_fs = __toESM(require("fs"));
var import_fs2 = __toESM(require("fs"));
var import_fs3 = __toESM(require("fs"));
var import_util2 = require("util");
var import_process4 = __toESM(require("process"));
var import_child_process2 = require("child_process");
var import_util3 = require("util");
var import_process5 = __toESM(require("process"));
var import_child_process3 = require("child_process");
var import_process6 = __toESM(require("process"));
var import_util4 = require("util");
var import_child_process4 = require("child_process");
var import_util5 = require("util");
var import_child_process5 = require("child_process");
var h;
function G() {
  try {
    return import_fs3.default.statSync("/.dockerenv"), true;
  } catch {
    return false;
  }
}
function X() {
  try {
    return import_fs3.default.readFileSync("/proc/self/cgroup", "utf8").includes("docker");
  } catch {
    return false;
  }
}
function x() {
  if (h === void 0) h = G() || X();
  return h;
}
var y, q = () => {
  try {
    return import_fs2.default.statSync("/run/.containerenv"), true;
  } catch {
    return false;
  }
};
function p() {
  if (y === void 0) y = q() || x();
  return y;
}
var L = () => {
  if (import_process3.default.platform !== "linux") return false;
  if (import_os.default.release().toLowerCase().includes("microsoft")) {
    if (p()) return false;
    return true;
  }
  try {
    return import_fs.default.readFileSync("/proc/version", "utf8").toLowerCase().includes("microsoft") ? !p() : false;
  } catch {
    return false;
  }
}, c = import_process3.default.env.__IS_WSL_TEST__ ? L : L();
var Q = /* @__PURE__ */ (() => {
  let r;
  return async function() {
    if (r) return r;
    let o = "/etc/wsl.conf", n = false;
    try {
      await import_promises2.default.access(o, import_promises2.constants.F_OK), n = true;
    } catch {
    }
    if (!n) return "/mnt/";
    let t = await import_promises2.default.readFile(o, { encoding: "utf8" }), s = /(?<!#.*)root\s*=\s*(?<mountPoint>.*)/g.exec(t);
    if (!s) return "/mnt/";
    return r = s.groups.mountPoint.trim(), r = r.endsWith("/") ? r : `${r}/`, r;
  };
})(), V = async () => `${await Q()}c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe`, v = async () => {
  if (c) return V();
  return `${import_process2.default.env.SYSTEMROOT || import_process2.default.env.windir || String.raw`C:\Windows`}\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`;
};
function m(e, r, o) {
  let n = (t) => Object.defineProperty(e, r, { value: t, enumerable: true, writable: true });
  return Object.defineProperty(e, r, { configurable: true, enumerable: true, get() {
    let t = o();
    return n(t), t;
  }, set(t) {
    n(t);
  } }), e;
}
var oe = (0, import_util3.promisify)(import_child_process3.execFile);
async function S() {
  if (import_process5.default.platform !== "darwin") throw Error("macOS only");
  let { stdout: e } = await oe("defaults", ["read", "com.apple.LaunchServices/com.apple.launchservices.secure", "LSHandlers"]);
  return /LSHandlerRoleAll = "(?!-)(?<id>[^"]+?)";\s+?LSHandlerURLScheme = (?:http|https);/.exec(e)?.groups.id ?? "com.apple.Safari";
}
var se = (0, import_util4.promisify)(import_child_process4.execFile);
async function W(e, { humanReadableOutput: r = true, signal: o } = {}) {
  if (import_process6.default.platform !== "darwin") throw Error("macOS only");
  let n = r ? [] : ["-ss"], t = {};
  if (o) t.signal = o;
  let { stdout: s } = await se("osascript", ["-e", e, n], t);
  return s.trim();
}
async function P(e) {
  return W(`tell application "Finder" to set app_path to application file id "${e}" as string
tell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")`);
}
var me = (0, import_util5.promisify)(import_child_process5.execFile), fe = { AppXq0fevzme2pys62n3e0fbqa7peapykr8v: { name: "Edge", id: "com.microsoft.edge.old" }, MSEdgeDHTML: { name: "Edge", id: "com.microsoft.edge" }, MSEdgeHTM: { name: "Edge", id: "com.microsoft.edge" }, "IE.HTTP": { name: "Internet Explorer", id: "com.microsoft.ie" }, FirefoxURL: { name: "Firefox", id: "org.mozilla.firefox" }, ChromeHTML: { name: "Chrome", id: "com.google.chrome" }, BraveHTML: { name: "Brave", id: "com.brave.Browser" }, BraveBHTML: { name: "Brave Beta", id: "com.brave.Browser.beta" }, BraveSSHTM: { name: "Brave Nightly", id: "com.brave.Browser.nightly" } };
class b extends Error {
}
async function A(e = me) {
  let { stdout: r } = await e("reg", ["QUERY", " HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice", "/v", "ProgId"]), o = /ProgId\s*REG_SZ\s*(?<id>\S+)/.exec(r);
  if (!o) throw new b(`Cannot find Windows browser in stdout: ${JSON.stringify(r)}`);
  let { id: n } = o.groups, t = fe[n];
  if (!t) throw new b(`Unknown browser ID: ${n}`);
  return t;
}
var ue = (0, import_util2.promisify)(import_child_process2.execFile), de = (e) => e.toLowerCase().replaceAll(/(?:^|\s|-)\S/g, (r) => r.toUpperCase());
async function B() {
  if (import_process4.default.platform === "darwin") {
    let e = await S();
    return { name: await P(e), id: e };
  }
  if (import_process4.default.platform === "linux") {
    let { stdout: e } = await ue("xdg-mime", ["query", "default", "x-scheme-handler/http"]), r = e.trim();
    return { name: de(r.replace(/.desktop$/, "").replace("-", " ")), id: r };
  }
  if (import_process4.default.platform === "win32") return A();
  throw Error("Only macOS, Linux, and Windows are supported");
}
var ye = (0, import_util.promisify)(import_child_process.default.execFile), F = import_path.default.dirname((0, import_url.fileURLToPath)(__prototypeModuleURL)), k = import_path.default.join(F, "xdg-open"), { platform: u, arch: H } = import_process.default;
async function ve() {
  let e = await v(), r = String.raw`(Get-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\Shell\Associations\UrlAssociations\http\UserChoice").ProgId`, o = import_buffer.Buffer.from(r, "utf16le").toString("base64"), { stdout: n } = await ye(e, ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", o], { encoding: "utf8" }), t = n.trim(), s = { ChromeHTML: "com.google.chrome", BraveHTML: "com.brave.Browser", MSEdgeHTM: "com.microsoft.edge", FirefoxURL: "org.mozilla.firefox" };
  return s[t] ? { id: s[t] } : {};
}
var _ = async (e, r) => {
  let o;
  for (let n of e) try {
    return await r(n);
  } catch (t) {
    o = t;
  }
  throw o;
}, w = async (e) => {
  if (e = { wait: false, background: false, newInstance: false, allowNonzeroExitCode: false, ...e }, Array.isArray(e.app)) return _(e.app, (i) => w({ ...e, app: i }));
  let { name: r, arguments: o = [] } = e.app ?? {};
  if (o = [...o], Array.isArray(r)) return _(r, (i) => w({ ...e, app: { name: i, arguments: o } }));
  if (r === "browser" || r === "browserPrivate") {
    let i = { "com.google.chrome": "chrome", "google-chrome.desktop": "chrome", "com.brave.Browser": "brave", "org.mozilla.firefox": "firefox", "firefox.desktop": "firefox", "com.microsoft.msedge": "edge", "com.microsoft.edge": "edge", "com.microsoft.edgemac": "edge", "microsoft-edge.desktop": "edge" }, a = { chrome: "--incognito", brave: "--incognito", firefox: "--private-window", edge: "--inPrivate" }, f = c ? await ve() : await B();
    if (f.id in i) {
      let C = i[f.id];
      if (r === "browserPrivate") o.push(a[C]);
      return w({ ...e, app: { name: l[C], arguments: o } });
    }
    throw Error(`${f.name} is not supported as a default browser`);
  }
  let n, t = [], s = {};
  if (u === "darwin") {
    if (n = "open", e.wait) t.push("--wait-apps");
    if (e.background) t.push("--background");
    if (e.newInstance) t.push("--new");
    if (r) t.push("-a", r);
  } else if (u === "win32" || c && !p() && !r) {
    if (n = await v(), t.push("-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand"), !c) s.windowsVerbatimArguments = true;
    let i = ["Start"];
    if (e.wait) i.push("-Wait");
    if (r) {
      if (i.push(`"\`"${r}\`""`), e.target) o.push(e.target);
    } else if (e.target) i.push(`"${e.target}"`);
    if (o.length > 0) o = o.map((a) => `"\`"${a}\`""`), i.push("-ArgumentList", o.join(","));
    e.target = import_buffer.Buffer.from(i.join(" "), "utf16le").toString("base64");
  } else {
    if (r) n = r;
    else {
      let i = !F || F === "/", a = false;
      try {
        await import_promises.default.access(k, import_promises.constants.X_OK), a = true;
      } catch {
      }
      n = import_process.default.versions.electron ?? (u === "android" || i || !a) ? "xdg-open" : k;
    }
    if (o.length > 0) t.push(...o);
    if (!e.wait) s.stdio = "ignore", s.detached = true;
  }
  if (u === "darwin" && o.length > 0) t.push("--args", ...o);
  if (e.target) t.push(e.target);
  let d = import_child_process.default.spawn(n, t, s);
  if (e.wait) return new Promise((i, a) => {
    d.once("error", a), d.once("close", (f) => {
      if (!e.allowNonzeroExitCode && f > 0) {
        a(Error(`Exited with code ${f}`));
        return;
      }
      i(d);
    });
  });
  return d.unref(), d;
}, Se = (e, r) => {
  if (typeof e !== "string") throw TypeError("Expected a `target`");
  return w({ ...r, target: e });
};
function U(e) {
  if (typeof e === "string" || Array.isArray(e)) return e;
  let { [H]: r } = e;
  if (!r) throw Error(`${H} is not supported`);
  return r;
}
function g({ [u]: e }, { wsl: r }) {
  if (r && c) return U(r);
  if (!e) throw Error(`${u} is not supported`);
  return U(e);
}
var l = {};
m(l, "chrome", () => g({ darwin: "google chrome", win32: "chrome", linux: ["google-chrome", "google-chrome-stable", "chromium"] }, { wsl: { ia32: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe", x64: ["/mnt/c/Program Files/Google/Chrome/Application/chrome.exe", "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe"] } }));
m(l, "brave", () => g({ darwin: "brave browser", win32: "brave", linux: ["brave-browser", "brave"] }, { wsl: { ia32: "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe", x64: ["/mnt/c/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe", "/mnt/c/Program Files (x86)/BraveSoftware/Brave-Browser/Application/brave.exe"] } }));
m(l, "firefox", () => g({ darwin: "firefox", win32: String.raw`C:\Program Files\Mozilla Firefox\firefox.exe`, linux: "firefox" }, { wsl: "/mnt/c/Program Files/Mozilla Firefox/firefox.exe" }));
m(l, "edge", () => g({ darwin: "microsoft edge", win32: "msedge", linux: ["microsoft-edge", "microsoft-edge-dev"] }, { wsl: "/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe" }));
m(l, "browser", () => "browser");
m(l, "browserPrivate", () => "browserPrivate");
var hr = Se;
