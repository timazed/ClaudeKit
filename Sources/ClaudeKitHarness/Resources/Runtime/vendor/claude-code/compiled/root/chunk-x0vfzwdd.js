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
var chunk_x0vfzwdd_exports = {};
__export(chunk_x0vfzwdd_exports, {
  Bxi: () => Bxi,
  Kal: () => Kal,
  Wxi: () => Wxi,
  qal: () => qal,
  uU: () => uU
});
module.exports = __toCommonJS(chunk_x0vfzwdd_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_x7h6xhh4 = require("/$bunfs/root/chunk-x7h6xhh4.js");
var import_child_process = require("child_process");
var import_promises = require("fs/promises");
var import_path = require("path");
var A = "SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths", f = 1e4, P = 5e3;
function S() {
  if (!import_chunk_c203g5kd.s.LOCALAPPDATA) return;
  let e = import_chunk_c203g5kd.s.LOCALAPPDATA.replace(/[\\/]+$/, "");
  return import_path.win32.normalize(`${e}\\Microsoft\\WindowsApps\\`).toLowerCase();
}
function uU() {
  return (0, import_chunk_x7h6xhh4.tOe)(import_chunk_c203g5kd.s.SYSTEMROOT || import_chunk_c203g5kd.s.SystemRoot);
}
function Bxi(e) {
  for (let i of e.split(/\r?\n/)) {
    let r = i.match(/^\s+.+?\s+REG_(?:EXPAND_)?SZ\s+(.+)$/i);
    if (r && r[1]) {
      let o = r[1].trim();
      if (o.length >= 2 && o.startsWith('"') && o.endsWith('"')) o = o.slice(1, -1);
      return o;
    }
  }
  return null;
}
function Wxi(e, i = process.env) {
  let r = /* @__PURE__ */ new Map();
  for (let [o, n] of Object.entries(i)) if (n !== void 0) r.set(o.toLowerCase(), n);
  return e.replace(/%([^%]+)%/g, (o, n) => r.get(n.toLowerCase()) ?? o);
}
async function Kal(e, i = P) {
  let r = uU(), o = `${r}\\System32\\reg.exe`;
  for (let n of ["HKCU", "HKLM"]) {
    let p = await (0, import_chunk_7fsmgfxx.ut)(o, ["query", `${n}\\${A}\\${e}`, "/ve"], { timeout: f, cwd: r });
    if (p.code !== 0) {
      if (p.exitCode === void 0) (0, import_chunk_w578pjby.t)(`[Claude in Chrome] ${n} App Paths query for ${e} did not run to completion: ${p.error ?? `killed at the ${f}ms bound, or reg.exe failed to spawn`}`);
      continue;
    }
    let u = Bxi(p.stdout);
    if (!u) {
      (0, import_chunk_w578pjby.t)(`[Claude in Chrome] ${n} App Paths value for ${e} had no parseable string default; skipping`);
      continue;
    }
    let c = Wxi(u);
    if (!/^(?:[a-zA-Z]:[\\/]|\\\\)/.test(c)) {
      (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: not a fully qualified path`);
      continue;
    }
    try {
      let d = (0, import_promises.lstat)(c);
      d.catch(() => {
      });
      let a = await (0, import_chunk_5appeerh.me)(d, i);
      if (a === void 0) {
        (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: existence check exceeded ${i}ms`);
        continue;
      }
      if (!a.isDirectory()) return (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Resolved ${e} via ${n} App Paths`), c;
      (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: resolves to a directory`);
    } catch (d) {
      let a = (0, import_chunk_jv7av99m.w)(d), l = S();
      if (l !== void 0 && import_path.win32.normalize(c).toLowerCase().startsWith(l) && a !== "ENOENT" && a !== "ENOTDIR") return (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Resolved ${e} via ${n} App Paths (stat-odd: ${a ?? String(d)})`), c;
      (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Skipping ${n} App Paths candidate for ${e}: ${a ?? String(d)}`);
    }
  }
  return null;
}
function qal(e, i) {
  return new Promise((r) => {
    let o;
    try {
      o = (0, import_child_process.spawn)(e, i, { cwd: (0, import_path.dirname)(e), detached: true, stdio: "ignore", windowsHide: false });
    } catch (n) {
      (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Detached launch of ${e} failed: ${(0, import_chunk_jv7av99m.w)(n) ?? String(n)}`, { level: "error" }), r(false);
      return;
    }
    o.once("spawn", () => r(true)), o.once("error", (n) => {
      (0, import_chunk_w578pjby.t)(`[Claude in Chrome] Detached launch of ${e} failed: ${(0, import_chunk_jv7av99m.w)(n) ?? n.message}`, { level: "error" }), r(false);
    }), o.unref();
  });
}
