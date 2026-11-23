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
var chunk_hq807efw_exports = {};
__export(chunk_hq807efw_exports, {
  N$: () => N$,
  bDt: () => bDt,
  lXt: () => lXt,
  r3o: () => r3o,
  sLa: () => sLa
});
module.exports = __toCommonJS(chunk_hq807efw_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ky5sghtd = require("/$bunfs/root/chunk-ky5sghtd.js");
function sLa(t) {
  (0, import_chunk_ky5sghtd.yc)().xtversionName = t;
}
function bDt() {
  return (0, import_chunk_ky5sghtd.yc)().xtversionName;
}
function N$() {
  if ((0, import_chunk_f9x2f6cx.pf)()?.isVscodeTerm) return true;
  if (import_chunk_c203g5kd.s.TERM_PROGRAM === "vscode") return true;
  return (0, import_chunk_ky5sghtd.yc)().xtversionName?.startsWith("xterm.js") ?? false;
}
function r3o() {
  let t = (0, import_chunk_ky5sghtd.yc)().xtversionName?.toLowerCase();
  return t !== void 0 && (t.startsWith("iterm2") || t.startsWith("tmux "));
}
function lXt() {
  if ((0, import_chunk_f9x2f6cx.pf)()?.isGhosttyXtv) return true;
  return (0, import_chunk_ky5sghtd.yc)().xtversionName?.toLowerCase().startsWith("ghostty") ?? false;
}
