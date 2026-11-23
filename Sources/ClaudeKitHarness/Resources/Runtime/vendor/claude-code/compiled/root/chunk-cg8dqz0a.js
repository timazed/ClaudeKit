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
var chunk_cg8dqz0a_exports = {};
__export(chunk_cg8dqz0a_exports, {
  CLs: () => CLs,
  H0o: () => H0o,
  JBl: () => JBl,
  M0o: () => M0o,
  Nft: () => Nft,
  Qxt: () => Qxt,
  XBl: () => XBl,
  noa: () => noa,
  x: () => x
});
module.exports = __toCommonJS(chunk_cg8dqz0a_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_khzksv0v = require("/$bunfs/root/chunk-khzksv0v.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_promises = require("fs/promises");
var import_os = require("os");
var d = (0, import_chunk_t57w17k7.de)({ value: false }, (e) => {
  e.value = false;
});
function f() {
  return d.value;
}
function CLs() {
  if (f()) return;
  try {
    return (0, import_chunk_w578pjby.le)().readFileSync("/proc/version", { encoding: "utf8" }).toLowerCase();
  } catch {
    return;
  }
}
var noa = ["macos", "wsl"];
class u {
  sources;
  primedProcVersion;
  fallbackProcVersion;
  fallbackProcVersionRead = false;
  platform;
  wslVersion = null;
  macOSMajorVersion = null;
  linuxDistroInfo;
  constructor(e) {
    this.sources = e;
  }
  kernelString() {
    if (this.primedProcVersion !== void 0) return this.primedProcVersion;
    if (!this.fallbackProcVersionRead) this.fallbackProcVersion = this.sources.readProcVersionSync(), this.fallbackProcVersionRead = true;
    return this.fallbackProcVersion;
  }
  getPlatform() {
    if (this.platform !== void 0) return this.platform;
    try {
      if (this.sources.platform === "darwin") this.platform = "macos";
      else if (this.sources.platform === "win32") this.platform = "windows";
      else if (this.sources.platform === "linux") if (this.sources.env.WSL_DISTRO_NAME || this.sources.env.WSL_INTEROP) this.platform = "wsl";
      else {
        let e = this.kernelString();
        this.platform = e !== void 0 && (0, import_chunk_khzksv0v.cyn)(e) ? "wsl" : "linux";
      }
      else this.platform = "unknown";
    } catch (e) {
      (0, import_chunk_k449cc64.i)(e), this.platform = "unknown";
    }
    return this.platform;
  }
  getWslVersion() {
    if (this.wslVersion !== null) return this.wslVersion;
    if (this.sources.platform !== "linux") {
      this.wslVersion = void 0;
      return;
    }
    let e = this.kernelString();
    if (e === void 0) {
      this.wslVersion = void 0;
      return;
    }
    let r = e.match(/wsl(\d+)/);
    if (r && r[1]) this.wslVersion = r[1];
    else if (e.includes("microsoft")) this.wslVersion = "1";
    else this.wslVersion = void 0;
    return this.wslVersion;
  }
  getMacOSMajorVersion() {
    if (this.macOSMajorVersion !== null) return this.macOSMajorVersion;
    if (this.sources.platform !== "darwin") {
      this.macOSMajorVersion = void 0;
      return;
    }
    let e = this.sources.osRelease().match(/^(\d+)\./);
    if (!e || !e[1]) {
      this.macOSMajorVersion = void 0;
      return;
    }
    let r = parseInt(e[1], 10);
    return this.macOSMajorVersion = r <= 24 ? r - 9 : Math.max(r, 26), this.macOSMajorVersion;
  }
  getLinuxDistroInfo() {
    return this.linuxDistroInfo ??= this.readLinuxDistroInfo();
  }
  async readLinuxDistroInfo() {
    if (this.sources.platform !== "linux") return;
    let e = { linuxKernel: this.sources.osRelease() };
    try {
      let r = await this.sources.readOsRelease();
      for (let a of r.split(`
`)) {
        let n = a.match(/^(ID|VERSION_ID)=(.*)$/);
        if (n && n[1] && n[2]) {
          let o = n[2].replace(/^"|"$/g, "");
          if (n[1] === "ID") e.linuxDistroId = o;
          else e.linuxDistroVersion = o;
        }
      }
    } catch {
    }
    return e;
  }
  async prime() {
    if (this.primedProcVersion !== void 0 || this.sources.platform !== "linux") return;
    try {
      let e = await this.sources.readProcVersion();
      this.primedProcVersion = e.toLowerCase();
    } catch (e) {
      (0, import_chunk_w578pjby.t)(`Failed to read /proc/version for WSL detection: ${e}`, { level: "error" });
      return;
    }
    this.platform = void 0, this.wslVersion = null;
  }
}
var h;
function s() {
  return h ??= new u({ platform: "darwin", env: process.env, readProcVersionSync: CLs, readProcVersion: () => (0, import_promises.readFile)("/proc/version", { encoding: "utf8" }), osRelease: import_os.release, readOsRelease: () => (0, import_promises.readFile)("/etc/os-release", "utf8") });
}
function XBl() {
  return s().prime();
}
function x() {
  return s().getPlatform();
}
function Nft(e) {
  switch (e) {
    case "darwin":
      return "macOS";
    case "win32":
      return "Windows";
    case "linux":
      return "Linux";
    default:
      return e;
  }
}
function Qxt() {
  return s().getWslVersion();
}
function M0o() {
  return s().getLinuxDistroInfo();
}
function JBl() {
  return s().getMacOSMajorVersion();
}
var g = [[".git", "git"], [".hg", "mercurial"], [".svn", "svn"], [".p4config", "perforce"], ["$tf", "tfs"], [".tfvc", "tfs"], [".jj", "jujutsu"], [".sl", "sapling"]];
async function H0o(e) {
  let r = /* @__PURE__ */ new Set();
  if (process.env.P4PORT) r.add("perforce");
  try {
    let a = e ?? (0, import_chunk_w578pjby.le)().cwd(), n = new Set(await (0, import_promises.readdir)(a));
    for (let [o, c] of g) if (n.has(o)) r.add(c);
  } catch {
  }
  return [...r];
}
