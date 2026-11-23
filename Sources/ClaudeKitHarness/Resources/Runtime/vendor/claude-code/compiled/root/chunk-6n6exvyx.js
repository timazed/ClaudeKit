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
var chunk_6n6exvyx_exports = {};
__export(chunk_6n6exvyx_exports, {
  Qo: () => Qo,
  Rb: () => Rb,
  kve: () => kve,
  qe: () => qe,
  rR: () => rR,
  rl: () => rl
});
module.exports = __toCommonJS(chunk_6n6exvyx_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var Rb = (0, import_chunk_bs4h6795.an)(null);
function rl() {
  return (0, import_chunk_bs4h6795.be)(Rb) !== null;
}
function Qo(r) {
  let t = (0, import_chunk_sng02qpc.k)(3), o = (0, import_chunk_bs4h6795.be)(Rb), n;
  if (t[0] !== o || t[1] !== r) n = o ? { rows: o.rows, columns: o.columns } : r, t[0] = o, t[1] = r, t[2] = n;
  else n = t[2];
  return n;
}
function rR() {
  return (0, import_chunk_bs4h6795.be)(Rb)?.scrollViewport ?? null;
}
function kve() {
  return (0, import_chunk_bs4h6795.be)(Rb)?.claimScrollBox ?? null;
}
(0, import_chunk_bs4h6795.G)();
function qe() {
  let r = (0, import_chunk_bs4h6795.be)(import_chunk_3jkk3v3z.ay);
  if (!r) throw Error("useTerminalSize must be used within an Ink App component");
  return r;
}
