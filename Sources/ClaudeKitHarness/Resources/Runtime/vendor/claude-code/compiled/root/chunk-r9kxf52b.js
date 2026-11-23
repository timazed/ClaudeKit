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
var chunk_r9kxf52b_exports = {};
__export(chunk_r9kxf52b_exports, {
  Cee: () => Cee,
  EYi: () => EYi,
  KOs: () => KOs,
  TYi: () => TYi,
  eRt: () => eRt,
  vVt: () => vVt,
  vYi: () => vYi
});
module.exports = __toCommonJS(chunk_r9kxf52b_exports);
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
class i {
  wait = null;
  beginLockHold = null;
}
var t = new i();
class o {
  untilDeadline = null;
  exitBeganAtMs = null;
}
var n = (0, import_chunk_t57w17k7.de)(new o(), (e) => {
  e.untilDeadline = null, e.exitBeganAtMs = null;
});
function Cee(e = true) {
  n.untilDeadline = e && n.untilDeadline !== false;
}
function KOs() {
  return n.untilDeadline === true;
}
function vVt() {
  let e = KOs();
  if (e) n.exitBeganAtMs ??= Date.now();
  return e;
}
function EYi() {
  let { exitBeganAtMs: e } = n;
  return e === null ? 0 : Date.now() - e;
}
function vYi(e, l) {
  let r = t.wait;
  return t.wait = e, t.beginLockHold ??= l ?? null, r;
}
function TYi() {
  return t.beginLockHold?.() ?? (() => {
  });
}
async function eRt(e) {
  try {
    await t.wait?.(e);
  } catch {
  }
}
