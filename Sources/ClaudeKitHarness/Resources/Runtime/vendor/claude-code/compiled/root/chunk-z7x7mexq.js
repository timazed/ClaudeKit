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
var chunk_z7x7mexq_exports = {};
__export(chunk_z7x7mexq_exports, {
  EBr: () => EBr,
  zbn: () => zbn
});
module.exports = __toCommonJS(chunk_z7x7mexq_exports);
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var r = 864e5, n = 3 * r;
function EBr() {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || !(0, import_chunk_865at33z.wa)()) return null;
  let e = (0, import_chunk_865at33z.tr)();
  if (!e?.refreshToken || !(0, import_chunk_865at33z.OAo)(e.refreshTokenExpiresAt)) return null;
  let t = e.refreshTokenExpiresAt;
  if (typeof e.expiresAt === "number" && e.expiresAt > t + n) return null;
  return new Date(t);
}
function zbn() {
  let e = EBr();
  if (e === null) return null;
  let t = e.getTime() - Date.now();
  if (t > n || t <= 0) return null;
  return { daysLeft: Math.ceil(t / r) };
}
