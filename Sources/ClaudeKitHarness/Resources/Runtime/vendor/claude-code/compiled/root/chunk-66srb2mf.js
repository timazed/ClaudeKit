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
var chunk_66srb2mf_exports = {};
__export(chunk_66srb2mf_exports, {
  Jq: () => Jq,
  NNn: () => NNn,
  VDe: () => VDe,
  Vf: () => Vf,
  ibe: () => ibe,
  kAe: () => kAe
});
module.exports = __toCommonJS(chunk_66srb2mf_exports);
var import_chunk_d2tjaek4 = require("/$bunfs/root/chunk-d2tjaek4.js");
var import_chunk_thchq5z2 = require("/$bunfs/root/chunk-thchq5z2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_wzdjp7c0 = require("/$bunfs/root/chunk-wzdjp7c0.js");
var import_promises = require("fs/promises");
var import_path = require("path");
function ibe() {
  if (!(0, import_chunk_wzdjp7c0.dg)()) return false;
  let r = (0, import_chunk_thchq5z2.GYe)() + import_path.sep;
  return process.execPath.startsWith(r);
}
function Vf(r = {}) {
  return Jq(VDe(r));
}
function VDe(r = {}) {
  if (!r.pinToCurrentBinary && ibe()) {
    let t = kAe();
    return { cmd: t, prefixArgs: [], target: t };
  }
  if ((0, import_chunk_wzdjp7c0.dg)()) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  let e = process.argv[1];
  if (!e) return { cmd: process.execPath, prefixArgs: [], target: process.execPath };
  return { cmd: process.execPath, prefixArgs: [e], target: e };
}
function kAe() {
  return (0, import_path.join)((0, import_chunk_thchq5z2.Tme)(), "claude");
}
function Jq(r) {
  let e = (0, import_chunk_d2tjaek4.Wg)();
  if (e.length === 0 || r.cmd === e[0]) return r;
  return { cmd: e[0], prefixArgs: [...e.slice(1), r.cmd, ...r.prefixArgs], target: r.target };
}
async function NNn() {
  let r = (0, import_chunk_thchq5z2.GYe)(), e;
  try {
    e = await (0, import_promises.readdir)(r);
  } catch {
    return null;
  }
  let t = e.filter((n) => !/\.tmp\.\d+\.\d+(\.\d+)?$/.test(n) && (0, import_chunk_tvttgr51.VR)(n)).sort(import_chunk_tvttgr51.hIo);
  for (let n of t) {
    let o = (0, import_path.join)(r, n);
    try {
      let i = await (0, import_promises.stat)(o);
      if (i.isFile() && i.size > 0) return o;
    } catch {
    }
  }
  return null;
}
