const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_4ymnd9qx_exports = {};
__export(chunk_4ymnd9qx_exports, {
  DZn: () => DZn,
  IPa: () => IPa,
  MPa: () => MPa
});
module.exports = __toCommonJS(chunk_4ymnd9qx_exports);
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f2vegtjy = require("/$bunfs/root/chunk-f2vegtjy.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_zfx767v7 = require("/$bunfs/root/chunk-zfx767v7.js");
var import_crypto = require("crypto");
var f = "<!-- dataviz-callout -->", u = "tengu_tingly_petal", g = 16, e = () => "", o;
function IPa(t) {
  e = t;
}
async function DZn(t, i = (0, import_crypto.randomUUID)()) {
  if (t !== void 0 && (0, import_chunk_865at33z.exr)(t) && (0, import_chunk_865at33z.b)(u, false) === true) {
    let { CONTRACT_MD: s, dealDesignGuide: d } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-v8rvzaxg.js"))), l = (0, import_chunk_f2vegtjy.dle)() ? `Thumbnail (optional): ${import_chunk_zfx767v7.SAn}

` : "", r = `${s}
${l}${d(i)}`, { drawnDesignBodies: n } = (0, import_chunk_0rkwgmhx.se)();
    n.set(i, r);
    for (let m of [...n.keys()].slice(0, -g)) n.delete(m);
    return r;
  }
  let { SKILL_MD: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-w3n5np54.js")));
  return o = (0, import_chunk_zfx767v7.hFa)((0, import_chunk_p1ewvgeh.zd)(a).content.trimStart().replace(f, () => e())), o;
}
function MPa(t) {
  return (0, import_chunk_0rkwgmhx.se)().drawnDesignBodies.get(t ?? "") ?? o;
}
