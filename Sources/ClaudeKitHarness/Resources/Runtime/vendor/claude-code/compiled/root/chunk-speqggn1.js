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
var chunk_speqggn1_exports = {};
__export(chunk_speqggn1_exports, {
  Hht: () => Hht,
  L$: () => L$,
  cVo: () => cVo,
  f8s: () => f8s,
  sqe: () => sqe,
  u8s: () => u8s
});
module.exports = __toCommonJS(chunk_speqggn1_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_path = require("path");
var cVo = "CLAUDE_CODE_PLUGIN_DIRS", u8s = "Unset CLAUDE_CODE_PLUGIN_DIRS (in the environment, or in the settings `env` block that sets it) to run without those folders.";
function Hht() {
  let n = (import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_DIRS ?? "").split(import_path.delimiter).map((e) => (0, import_chunk_z6pfqf6e.Pp)(e.trim())).filter((e) => e !== ""), i = n.filter((e) => !l(e));
  if (i.length > 0) (0, import_chunk_w578pjby.t)(`${cVo}: skipped ${i.join(", ")}: a plugin folder here is an absolute local path or starts with ~`, { level: "warn" });
  return n.filter(l).map((e) => (0, import_path.resolve)(e));
}
function f8s() {
  let n = Hht();
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_PLUGIN_DIRS !== void 0) import_chunk_c203g5kd.s.set("CLAUDE_CODE_PLUGIN_DIRS", n.join(import_path.delimiter));
  return n;
}
function L$(...n) {
  let i = /* @__PURE__ */ new Map();
  for (let e of n.flat()) {
    let r = (0, import_path.resolve)(e);
    if (!i.has(r)) i.set(r, e);
  }
  return [...i.values()];
}
function sqe(n, i) {
  let e = new Set(i.map((r) => (0, import_path.resolve)(r)));
  return n.filter((r) => !e.has((0, import_path.resolve)(r)));
}
function l(n) {
  return (0, import_path.isAbsolute)(n) && !(0, import_chunk_z6pfqf6e.C2)(n) && !(0, import_chunk_z6pfqf6e.Fl)(n) && !(0, import_chunk_z6pfqf6e.eR)(n);
}
