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
var chunk_2hdy50wd_exports = {};
__export(chunk_2hdy50wd_exports, {
  Ccn: () => Ccn,
  O2t: () => O2t,
  Twe: () => Twe,
  Xf: () => Xf,
  elt: () => elt,
  qWi: () => qWi,
  wj: () => wj,
  xV: () => xV
});
module.exports = __toCommonJS(chunk_2hdy50wd_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
function Twe() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_TOOLS_FORWARD === true || (0, import_chunk_3t7ve0wy.bLr)();
}
function Xf() {
  return (0, import_chunk_3t7ve0wy.bLr)() || (0, import_chunk_f9x2f6cx.$la)();
}
function O2t() {
  return (0, import_chunk_n5qd9b6p.Aoe)()?.desktopAppTakenAway === true;
}
function qWi(e = true) {
  if (e !== O2t()) (0, import_chunk_n5qd9b6p.Ar)().desktopAppTakenAway = e || void 0;
}
function elt() {
  return Twe() && !Xf();
}
function wj() {
  return Twe() && !Xf() && !Ccn();
}
function Ccn() {
  return (0, import_chunk_n5qd9b6p.Aoe)()?.takesMachinesMcpToolsAlone === true;
}
function xV() {
  return wj();
}
