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
var chunk_3dxkbe9d_exports = {};
__export(chunk_3dxkbe9d_exports, {
  $e: () => $e,
  tWo: () => tWo
});
module.exports = __toCommonJS(chunk_3dxkbe9d_exports);
var import_chunk_aw136kab = require("/$bunfs/root/chunk-aw136kab.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var tWo = () => a, a = () => {
}, c = () => {
  return;
};
function $e(t, i) {
  let n = (0, import_chunk_bs4h6795.be)(import_chunk_aw136kab.HJ), r = (0, import_chunk_bs4h6795.I)(null);
  if (r.current === null) r.current = { select: i, last: null, source: null, get: c, notifier: n, subscribe: tWo };
  let e = r.current;
  if (e.select = i, e.source !== t || e.notifier !== n) e.notifier = n, e.subscribe = t ? n?.paced(t.subscribe) ?? t.subscribe : tWo;
  if (e.source !== t) e.source = t, e.last = null, e.get = t ? () => {
    let s = t.getSnapshot(), o = e.select;
    if (!o) return s;
    let u = e.last;
    if (u !== null && u.snapshot === s && u.select === o) return u.selected;
    let l = o(s);
    return e.last = { snapshot: s, select: o, selected: l }, l;
  } : c;
  return (0, import_chunk_bs4h6795.Ot)(e.subscribe, e.get, e.get);
}
