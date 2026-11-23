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
var chunk_7j8he8m3_exports = {};
__export(chunk_7j8he8m3_exports, {
  CUn: () => CUn,
  TE: () => TE,
  cjt: () => cjt,
  djt: () => djt,
  hat: () => hat,
  sdn: () => sdn,
  ySo: () => ySo
});
module.exports = __toCommonJS(chunk_7j8he8m3_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function djt(e) {
  return e ? `this session holds no gateway credential (${e})` : "this session holds no gateway credential";
}
function hat() {
  return (0, import_chunk_865at33z.Rt)() || n();
}
function n() {
  if ((0, import_chunk_9b4aq7fb.gk)() !== "env-quad") return false;
  try {
    return (0, import_chunk_865at33z.yM)() && (0, import_chunk_865at33z.L1)();
  } catch {
    return false;
  }
}
function CUn() {
  return !(0, import_chunk_865at33z.Rt)() && n();
}
function sdn() {
  let { info: e, storeBearerOnly: t } = ySo();
  if (!t || e === void 0) return e;
  return (0, import_chunk_865at33z.$R)() === "store" ? e : void 0;
}
function ySo() {
  let e = (0, import_chunk_865at33z.Sn)();
  if (e !== void 0) return { info: e, storeBearerOnly: false };
  return CUn() ? { info: (0, import_chunk_865at33z.Dc)(), storeBearerOnly: true } : { info: void 0, storeBearerOnly: false };
}
async function cjt(e) {
  let { info: t, storeBearerOnly: r } = ySo();
  if (!r || t === void 0) return t;
  return await (0, import_chunk_865at33z.v_)(e) === "store" ? t : void 0;
}
function TE(e) {
  return (0, import_chunk_f9x2f6cx.Y)() ? `This session could not reach Artifacts: ${e}` : `Not authenticated \u2014 run /login (${e})`;
}
