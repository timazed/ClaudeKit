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
var chunk_dqanqm2x_exports = {};
__export(chunk_dqanqm2x_exports, {
  EMo: () => EMo,
  FKn: () => FKn,
  KFl: () => KFl,
  LKn: () => LKn,
  NKn: () => NKn,
  RHr: () => RHr,
  TKt: () => TKt,
  URt: () => URt,
  VFl: () => VFl,
  XFl: () => XFl,
  YFl: () => YFl,
  fHs: () => fHs,
  jQi: () => jQi,
  pHs: () => pHs,
  qFl: () => qFl,
  wI: () => wI
});
module.exports = __toCommonJS(chunk_dqanqm2x_exports);
var import_chunk_jwbpjwas = require("/$bunfs/root/chunk-jwbpjwas.js");
var import_chunk_khzksv0v = require("/$bunfs/root/chunk-khzksv0v.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_os = require("os");
var t = "com.anthropic.claudecode", TKt = "HKLM\\SOFTWARE\\Policies\\ClaudeCode", EMo = "HKCU\\SOFTWARE\\Policies\\ClaudeCode", LKn = "Settings", jQi = "/usr/bin/plutil", VFl = ["-convert", "json", "-o", "-", "--"], KFl = ["-lint", "-s", "--"], RHr = 5e3, fHs = 6e4, pHs = 2097152, URt = "/mnt/c/Windows/System32/reg.exe";
var qFl = "unable to find the specified registry key or value", wI = "/mnt/c/Program Files/ClaudeCode", r = (0, import_chunk_t57w17k7.de)({ isCoworkCloud: void 0 }, (e) => {
  e.isCoworkCloud = void 0;
});
function NKn() {
  if (r.isCoworkCloud === void 0) {
    let e = process.env.CLAUDE_CODE_ENTRYPOINT;
    r.isCoworkCloud = import_chunk_jwbpjwas.kLr.some((o) => o === e);
  }
  return r.isCoworkCloud;
}
function YFl() {
  r.isCoworkCloud = void 0, NKn();
}
function FKn() {
  return false;
}
var s = "per-user managed preferences";
function XFl() {
  let e = "";
  try {
    e = (0, import_os.userInfo)().username;
  } catch {
  }
  let o = [];
  if (e) o.push({ path: `/Library/Managed Preferences/${e}/${t}.plist`, label: s });
  return o.push({ path: `/Library/Managed Preferences/${t}.plist`, label: "device-level managed preferences" }), o;
}
