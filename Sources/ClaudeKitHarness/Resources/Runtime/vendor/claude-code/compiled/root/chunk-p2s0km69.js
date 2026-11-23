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
var chunk_p2s0km69_exports = {};
__export(chunk_p2s0km69_exports, {
  Bgs: () => Bgs,
  Nbr: () => Nbr,
  U0i: () => U0i,
  Vit: () => Vit,
  Wgs: () => Wgs,
  Yan: () => Yan,
  qan: () => qan
});
module.exports = __toCommonJS(chunk_p2s0km69_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_5e3gtsn9 = require("/$bunfs/root/chunk-5e3gtsn9.js");
var import_chunk_zsz02y6d = require("/$bunfs/root/chunk-zsz02y6d.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_fs = require("fs");
var import_path = require("path");
var n = "started", U0i = 128, e = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (t) => t.clear());
function Bgs(t) {
  return (0, import_path.join)((0, import_chunk_zsz02y6d.PC)(), t, n);
}
function qan(t) {
  return [(0, import_path.dirname)((0, import_path.dirname)(t)), (0, import_path.dirname)(t), t];
}
function Wgs(t) {
  e.set(t, false);
  try {
    let r = (0, import_path.dirname)(qan(t)[0]);
    (0, import_fs.mkdirSync)(r, { recursive: true, mode: 448 }), (0, import_chunk_8nvd6fqx._K)(r);
    for (let i of qan(t)) {
      try {
        (0, import_fs.mkdirSync)(i, { mode: 448 });
      } catch (a) {
        if ((0, import_chunk_jv7av99m.w)(a) !== "EEXIST") throw a;
      }
      if (!(0, import_fs.lstatSync)(i).isDirectory()) return;
    }
    e.set(t, true);
  } catch {
  }
}
function Yan() {
  return e;
}
function Vit(t) {
  try {
    if ((0, import_chunk_f9x2f6cx.st)() || (0, import_chunk_mzmcvr6c.ht)(t) === null || import_chunk_865at33z.pRo.reader?.("tengu_valiant_honey", true) === false && !(0, import_chunk_865at33z.Sy)()) return {};
    let r = Bgs(t);
    if (!e.has(r)) {
      if (e.size >= U0i) return {};
      Wgs(r);
    }
    return e.get(r) ? { CLAUDE_CODE_CHILD_NOTES_DIR: r } : {};
  } catch {
    return {};
  }
}
function Nbr() {
  let t = ((0, import_chunk_5e3gtsn9.Gc)() ?? import_chunk_c203g5kd.s).CLAUDE_CODE_CHILD_NOTES_DIR;
  return t !== void 0 && (0, import_path.isAbsolute)(t) && t.endsWith(n) && (0, import_path.basename)(t) === n && (0, import_chunk_mzmcvr6c.ht)((0, import_path.basename)((0, import_path.dirname)(t))) !== null && !(0, import_chunk_z6pfqf6e.pg)(t) && !(0, import_chunk_z6pfqf6e.ja)(t) && !(0, import_chunk_z6pfqf6e.vd)(t) ? t : void 0;
}
