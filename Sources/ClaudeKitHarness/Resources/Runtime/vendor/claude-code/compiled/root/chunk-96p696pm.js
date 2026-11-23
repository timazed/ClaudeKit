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
var chunk_96p696pm_exports = {};
__export(chunk_96p696pm_exports, {
  KSa: () => KSa,
  Vmt: () => Vmt,
  _Xn: () => _Xn,
  e8t: () => e8t,
  gXn: () => gXn,
  n8t: () => n8t,
  t8t: () => t8t
});
module.exports = __toCommonJS(chunk_96p696pm_exports);
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var l = ["dev", "engine", "aot"];
function e8t(n) {
  return l.find((e) => n.includes(`-${e}.`)) ?? null;
}
function gXn(n) {
  return e8t(n) !== null;
}
function t8t(n, e) {
  if (!n) return false;
  let t = e8t(n), r = e8t(e);
  return t !== null && r !== null && t !== r;
}
var u = new RegExp(`-(?:${l.join("|")})\\.(\\d{8})\\.t(\\d{6})(?:\\.|$)`, "g");
function n8t(n) {
  let e;
  for (let i of n.matchAll(u)) e = i;
  let t = e?.[1], r = e?.[2];
  if (!t || !r) return null;
  let s = Date.UTC(Number(t.slice(0, 4)), Number(t.slice(4, 6)) - 1, Number(t.slice(6, 8)), Number(r.slice(0, 2)), Number(r.slice(2, 4)), Number(r.slice(4, 6)));
  return new Date(s).toISOString().slice(0, 19).replace(/[-:]/g, "").replace("T", "t") === `${t}t${r}` ? s : null;
}
function KSa(n, e) {
  let t = n8t(n), r = n8t(e);
  return t !== null && r !== null && r < t;
}
function Vmt(n, e) {
  let t = n8t(n), r = n8t(e);
  if (t !== null && r !== null) {
    if (e8t(n) !== e8t(e)) return false;
    return t > r;
  }
  if (gXn(n) || gXn(e)) return false;
  return (0, import_chunk_tvttgr51.VR)(n) !== null && (0, import_chunk_tvttgr51.VR)(e) !== null && (0, import_chunk_tvttgr51.gFe)(n, e);
}
function _Xn(n, e, t) {
  if (!n) return false;
  if (n === t) return true;
  let r = n8t(n);
  if (r !== null) return r >= e.commitMs;
  if (gXn(n)) return false;
  return (0, import_chunk_tvttgr51.VR)(n) !== null && (0, import_chunk_tvttgr51.gIo)(n, e.release);
}
