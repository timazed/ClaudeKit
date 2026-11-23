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
var chunk_h31qgf9a_exports = {};
__export(chunk_h31qgf9a_exports, {
  xma: () => xma,
  zUs: () => zUs
});
module.exports = __toCommonJS(chunk_h31qgf9a_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_jmm1stqj = require("/$bunfs/root/chunk-jmm1stqj.js");
var import_chunk_66srb2mf = require("/$bunfs/root/chunk-66srb2mf.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_fs = require("fs");
var h = __toESM(require("os"));
var o = __toESM(require("path"));
var zUs = "com.anthropic.claude-code-url-handler", f = "Claude Code URL Handler", k = "claude-code-url-handler.desktop", D = "Claude Code URL Handler.app", c = o.join(h.homedir(), "Applications", D), l = o.join(c, "Contents", "MacOS", "claude");
function d() {
  return o.join((0, import_chunk_thchq5z2.Bvt)(), "applications", k);
}
var p = `HKEY_CURRENT_USER\\Software\\Classes\\${import_chunk_jmm1stqj.MLe}`, y = `${p}\\shell\\open\\command`, g = 864e5;
function C(e) {
  return `Exec="${e}" --handle-uri %u`;
}
function E(e) {
  return `"${e}" --handle-uri "%1"`;
}
async function _(e) {
  let r = o.join(c, "Contents");
  try {
    await import_fs.promises.rm(c, { recursive: true });
  } catch (s) {
    if ((0, import_chunk_jv7av99m.w)(s) !== "ENOENT") throw s;
  }
  await import_fs.promises.mkdir(o.dirname(l), { recursive: true });
  let i = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${zUs}</string>
  <key>CFBundleName</key>
  <string>${f}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${import_chunk_jmm1stqj.MLe}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
  await import_fs.promises.writeFile(o.join(r, "Info.plist"), i), await import_fs.promises.symlink(e, l), await (0, import_chunk_7fsmgfxx.kt)("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister", ["-R", c], { useCwd: false }), (0, import_chunk_w578pjby.t)(`Registered ${import_chunk_jmm1stqj.MLe}:// protocol handler at ${c}`);
}
async function F(e) {
  await import_fs.promises.mkdir(o.dirname(d()), { recursive: true });
  let r = `[Desktop Entry]
Name=${f}
Comment=Handle ${import_chunk_jmm1stqj.MLe}:// deep links for Claude Code
${C(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${import_chunk_jmm1stqj.MLe};
`;
  await import_fs.promises.writeFile(d(), r);
  let i = await (0, import_chunk_c203g5kd.Bf)("xdg-mime");
  if (i) {
    let { code: a } = await (0, import_chunk_7fsmgfxx.kt)(i, ["default", k, `x-scheme-handler/${import_chunk_jmm1stqj.MLe}`], { useCwd: false });
    if (a !== 0) throw Object.assign(Error(`xdg-mime exited with code ${a}`), { code: "XDG_MIME_FAILED" });
  }
  (0, import_chunk_w578pjby.t)(`Registered ${import_chunk_jmm1stqj.MLe}:// protocol handler at ${d()}`);
}
async function L(e) {
  for (let r of [["add", p, "/ve", "/d", `URL:${f}`, "/f"], ["add", p, "/v", "URL Protocol", "/d", "", "/f"], ["add", y, "/ve", "/d", E(e), "/f"]]) {
    let { code: i } = await (0, import_chunk_7fsmgfxx.kt)("reg", r, { useCwd: false });
    if (i !== 0) throw Object.assign(Error(`reg add exited with code ${i}`), { code: "REG_FAILED" });
  }
  (0, import_chunk_w578pjby.t)(`Registered ${import_chunk_jmm1stqj.MLe}:// protocol handler in Windows registry`);
}
async function S(e) {
  let r = e ?? await P();
  switch ("darwin") {
    case "darwin":
      await _(r);
      break;
    case "linux":
      await F(r);
      break;
    case "win32":
      await L(r);
      break;
    default:
      throw Error("Unsupported platform: darwin");
  }
}
async function P() {
  let e = (0, import_chunk_66srb2mf.kAe)();
  try {
    return await import_fs.promises.realpath(e), e;
  } catch {
    return process.execPath;
  }
}
async function x(e) {
  try {
    switch ("darwin") {
      case "darwin":
        return await import_fs.promises.readlink(l) === e;
      case "linux":
        return (await import_fs.promises.readFile(d(), "utf8")).includes(C(e));
      case "win32": {
        let { stdout: r, code: i } = await (0, import_chunk_7fsmgfxx.kt)("reg", ["query", y, "/ve"], { useCwd: false });
        return i === 0 && r.includes(E(e));
      }
      default:
        return false;
    }
  } catch {
    return false;
  }
}
async function xma(e) {
  if ((0, import_chunk_2yx6c1y2.vt)().disableDeepLinkRegistration === "disable") return;
  if (!["darwin", "linux", "win32"].includes("darwin")) return;
  let r = await P();
  if (await x(r)) return;
  let i = o.join((0, import_chunk_2gtmjt3y.Ze)(), ".deep-link-register-failed");
  if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) {
    let a = await e.stat(import_chunk_hkvzj051.at.state("deep-link-register-failed"));
    if (a.ok && Date.now() - a.value.mtimeMs < g) return;
  } else try {
    let a = await import_fs.promises.stat(i);
    if (Date.now() - a.mtimeMs < g) return;
  } catch {
  }
  try {
    if (await S(r), (0, import_chunk_cqa9hrgx.u)("deep_link_register"), (0, import_chunk_w578pjby.t)("Auto-registered claude-cli:// deep link protocol handler"), (0, import_chunk_m15w38ag.ne)() && e !== void 0) await e.delete(import_chunk_hkvzj051.at.state("deep-link-register-failed"));
    else await import_fs.promises.rm(i, { force: true }).catch(() => {
    });
  } catch (a) {
    let s = (0, import_chunk_jv7av99m.Cr)(a);
    if ((0, import_chunk_cqa9hrgx.m)("deep_link_register", s ?? "register_failed"), (0, import_chunk_w578pjby.t)(`Failed to auto-register deep link protocol handler: ${a instanceof Error ? a.message : String(a)}`, { level: "warn" }), s === "EACCES" || s === "ENOSPC") if ((0, import_chunk_m15w38ag.ne)() && e !== void 0) await e.write(import_chunk_hkvzj051.at.state("deep-link-register-failed"), "", { publishDiscipline: "inPlace" });
    else await import_fs.promises.writeFile(i, "").catch(() => {
    });
  }
}
