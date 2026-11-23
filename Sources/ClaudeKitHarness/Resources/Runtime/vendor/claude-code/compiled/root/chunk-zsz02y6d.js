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
var chunk_zsz02y6d_exports = {};
__export(chunk_zsz02y6d_exports, {
  DSl: () => DSl,
  GUi: () => GUi,
  I2e: () => I2e,
  LSl: () => LSl,
  PC: () => PC,
  QEr: () => QEr,
  Ug: () => Ug,
  fbo: () => fbo,
  hbs: () => hbs,
  jUi: () => jUi,
  pbo: () => pbo
});
module.exports = __toCommonJS(chunk_zsz02y6d_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_8nvd6fqx = require("/$bunfs/root/chunk-8nvd6fqx.js");
var import_chunk_fbnv54pa = require("/$bunfs/root/chunk-fbnv54pa.js");
var import_chunk_a3fb7pa2 = require("/$bunfs/root/chunk-a3fb7pa2.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_path = require("path");
function Ug() {
  let e = (0, import_chunk_a3fb7pa2.gy)();
  if (e.claudeTempDir !== void 0 && !(0, import_chunk_f9x2f6cx.Y)()) return e.claudeTempDir;
  let t = (0, import_chunk_8nvd6fqx.ih)(), n = (0, import_chunk_w578pjby.le)(), r = t;
  try {
    r = n.realpathSync(t);
  } catch {
  }
  return e.claudeTempDir = r + import_path.sep, e.claudeTempDir;
}
function fbo() {
  return (0, import_path.join)((0, import_path.dirname)(Ug().replace(/[\\/]+$/, "")), `${import_chunk_8nvd6fqx.R7i}${process.getuid?.() ?? 0}`);
}
function I2e() {
  let e = (0, import_chunk_a3fb7pa2.gy)();
  if (e.childProcessTmpDir !== void 0 && !(0, import_chunk_f9x2f6cx.Y)()) return e.childProcessTmpDir;
  let t = (0, import_chunk_8nvd6fqx.lJe)(), n = (0, import_chunk_w578pjby.le)(), r = t;
  try {
    r = n.realpathSync(t);
  } catch {
  }
  return e.childProcessTmpDir = r + import_path.sep, e.childProcessTmpDir;
}
function PC() {
  return QEr((0, import_chunk_f9x2f6cx.Te)());
}
function QEr(e) {
  return (0, import_path.join)(Ug(), (0, import_chunk_8nvd6fqx.mMr)((0, import_chunk_q3a5dy2r.qN)(e))) + import_path.sep;
}
var jUi = "scratchpad", u = /^(session|cse)(_(vrtx|bdrk))?(_(local|staging))?_01[1-9a-z]{22}$/, hbs = ".artifact-work";
function GUi() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_SCRATCHPAD_DIR;
  return e && (0, import_chunk_3t7ve0wy.ate)() && (0, import_path.isAbsolute)(e) && (0, import_path.normalize)(e) === e && !e.endsWith(import_path.sep) && (0, import_path.basename)(e) === hbs && !(0, import_chunk_z6pfqf6e.vFr)(e) ? e : void 0;
}
function DSl(e) {
  return e.split(/[\\/]/).slice(0, -1).map(import_chunk_fbnv54pa.za).includes(hbs);
}
function LSl(e) {
  let t = e.split(/[\\/]/).map(import_chunk_fbnv54pa.za);
  return t.slice(0, -1).some((n, r) => {
    let i = t[r - 1] ?? "";
    return n === jUi && ((0, import_chunk_mzmcvr6c.ht)(i) !== null || u.test(i) || i === (0, import_chunk_fbnv54pa.za)((0, import_chunk_f9x2f6cx.W)())) && /^claude(-\d+)?$/.test(t[r - 3] ?? "");
  });
}
function pbo(e) {
  if ((0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.vd)(e) || (0, import_chunk_w578pjby.ig)(import_chunk_w578pjby.Cv, e, (0, import_chunk_w578pjby.Ace)()) !== void 0) return e;
  let t = (0, import_chunk_w578pjby.le)();
  try {
    return t.realpathSync(e);
  } catch {
    return e;
  }
}
