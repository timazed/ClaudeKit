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
var chunk_thchq5z2_exports = {};
__export(chunk_thchq5z2_exports, {
  Bvt: () => Bvt,
  GYe: () => GYe,
  Tme: () => Tme,
  UTr: () => UTr,
  fvl: () => fvl
});
module.exports = __toCommonJS(chunk_thchq5z2_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_os = require("os");
var import_path = require("path");
function r(e) {
  return { env: e?.env ?? process.env, home: e?.homedir ?? import_chunk_c203g5kd.s.HOME ?? (0, import_os.homedir)() };
}
function fvl(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_STATE_HOME ?? (0, import_path.join)(t, ".local", "state");
}
function m(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_CACHE_HOME ?? (0, import_path.join)(t, ".cache");
}
function Bvt(e) {
  let { env: n, home: t } = r(e);
  return n.XDG_DATA_HOME ?? (0, import_path.join)(t, ".local", "share");
}
function GYe(e) {
  return (0, import_path.join)(Bvt(e), "claude", "versions");
}
function UTr(e) {
  let n = m(e), { home: t } = r(e);
  return (0, import_path.join)((0, import_path.isAbsolute)(n) ? n : (0, import_path.join)(t, ".cache"), "claude", "staging");
}
function Tme(e) {
  let { home: n } = r(e);
  return (0, import_path.join)(n, ".local", "bin");
}
