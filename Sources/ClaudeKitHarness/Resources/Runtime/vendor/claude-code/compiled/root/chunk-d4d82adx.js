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
var chunk_d4d82adx_exports = {};
__export(chunk_d4d82adx_exports, {
  sY: () => sY
});
module.exports = __toCommonJS(chunk_d4d82adx_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_qbrmmydq = require("/$bunfs/root/chunk-qbrmmydq.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_f3ymc800 = require("/$bunfs/root/chunk-f3ymc800.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function sY(s = () => true, u = true) {
  (0, import_chunk_f3ymc800.OF)(u);
  let i = (0, import_chunk_z8dyhx9v.Zu)(), e = (0, import_chunk_bs4h6795.I)(Date.now() + (0, import_chunk_qbrmmydq.yPo)()), t = (0, import_chunk_8bkqeb5d.si)(), a = (0, import_chunk_8bkqeb5d.Xe)(), { refusedWithin: f, noteRefused: c } = (0, import_chunk_z8dyhx9v.po)(), { refusedWithin: m, noteRefused: p } = (0, import_chunk_z8dyhx9v.po)();
  function d(n = false, l = false, R = import_chunk_2t5dst6n.vve) {
    let r = Date.now() < e.current;
    if (r) e.current = Date.now();
    let h = Math.max(i(), e.current), o = r && (n || a) || (0, import_chunk_2t5dst6n.TGs)(t, import_chunk_2t5dst6n.vve) || (0, import_chunk_2t5dst6n.Ha)(t, h, R);
    if (o || l || !s() || f() || m(import_chunk_2t5dst6n.K3)) {
      if (c(), o || n) p();
      return true;
    }
    return false;
  }
  return { refuseInput: d };
}
