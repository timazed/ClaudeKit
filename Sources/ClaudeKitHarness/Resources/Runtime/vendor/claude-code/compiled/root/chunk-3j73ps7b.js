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
var chunk_3j73ps7b_exports = {};
__export(chunk_3j73ps7b_exports, {
  Ab: () => Ab,
  UZe: () => UZe,
  qwn: () => qwn
});
module.exports = __toCommonJS(chunk_3j73ps7b_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function l(o, n, e) {
  return o.isWindowActivation || c(n, e);
}
var UZe = (0, import_chunk_bs4h6795.an)(null);
function Ab() {
  let o = (0, import_chunk_8bkqeb5d.ir)(), [n] = (0, import_chunk_bs4h6795.y)(() => o.now()), e = (0, import_chunk_bs4h6795.be)(UZe);
  return (0, import_chunk_bs4h6795.ye)((r) => {
    if (e !== null) return e(), r.dropAsStray(), true;
    let i = o.now();
    if (!l(r, n, i)) return false;
    let u = r.isWindowActivation ? (0, import_chunk_78g0060s.S)("window_activation") : (0, import_chunk_78g0060s.S)("mount_settle");
    return (0, import_chunk_w578pjby.t)(`Select: dropped stray click (${r.isWindowActivation ? "window-activation click" : `${i - n}ms after mount`})`), (0, import_chunk_y53wbr8a.a)("tengu_select_stray_click_dropped", { reason: u }), r.dropAsStray(), true;
  }, [o, n, e]);
}
function qwn() {
  let o = (0, import_chunk_8bkqeb5d.ir)(), [n] = (0, import_chunk_bs4h6795.y)(() => o.now()), e = (0, import_chunk_bs4h6795.be)(UZe) !== null;
  return (0, import_chunk_bs4h6795.ye)(() => e || c(n, o.now()), [o, n, e]);
}
function c(o, n) {
  return n - o < import_chunk_8bkqeb5d.W9t;
}
