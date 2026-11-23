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
var chunk_kbsax5x5_exports = {};
__export(chunk_kbsax5x5_exports, {
  GIs: () => GIs,
  OMr: () => OMr,
  hnd: () => hnd,
  mXi: () => mXi,
  mnd: () => mnd,
  pXi: () => pXi,
  pnd: () => pnd,
  zIs: () => zIs
});
module.exports = __toCommonJS(chunk_kbsax5x5_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_hazyxdac = require("/$bunfs/root/chunk-hazyxdac.js");
var import_child_process = require("child_process");
var u = 1e4, pXi = 250, p = [44, 36], i = null, f;
function pnd() {
  return f === true;
}
function mnd() {
  return (0, import_chunk_hazyxdac.h8)().lastKnown;
}
function hnd(e) {
  (0, import_chunk_hazyxdac.h8)().lastKnown = e;
}
function s(e, n = false) {
  return new Promise((o) => {
    try {
      (0, import_child_process.execFile)("security", ["find-generic-password", "-a", (0, import_chunk_hazyxdac.J1)(), "-w", "-s", e], { encoding: "utf-8", timeout: u, windowsHide: true }, (t, a) => {
        let r = Boolean(t && "killed" in t && t.killed), c = !n || !t || p.includes(t.code);
        o(r || !c ? null : { stdout: t ? null : a?.trim() || null });
      });
    } catch {
      o(null);
    }
  });
}
function mXi() {
  let e = (0, import_chunk_2gtmjt3y.Xn)();
  if (i || e) return;
  let n = (0, import_chunk_hazyxdac.h8)(), o = n.generation;
  n.legacyApiKeyPrefetch = "pending";
  let t = s((0, import_chunk_hazyxdac.m8)(import_chunk_hazyxdac.Lze), true).then((r) => {
    if (r?.stdout) (0, import_chunk_hazyxdac.IMr)(n, true, o);
    if (r) (0, import_chunk_hazyxdac.FNl)(r.stdout, o, n);
  }), a = s((0, import_chunk_hazyxdac.m8)()).then((r) => {
    if (r && n.legacyApiKeyPrefetch === "pending") n.legacyApiKeyPrefetch = r;
  });
  i = Promise.all([t, a]).then(() => {
  });
}
async function OMr(e) {
  if (!i) return;
  await (e === void 0 ? i : (0, import_chunk_5appeerh.me)(i, e));
}
function GIs() {
  let e = (0, import_chunk_hazyxdac.h8)().legacyApiKeyPrefetch;
  return e === "pending" ? null : e;
}
function zIs() {
  (0, import_chunk_hazyxdac.h8)().legacyApiKeyPrefetch = null;
}
