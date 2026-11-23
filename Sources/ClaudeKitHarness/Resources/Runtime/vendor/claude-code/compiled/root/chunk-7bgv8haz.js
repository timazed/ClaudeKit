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
var chunk_7bgv8haz_exports = {};
__export(chunk_7bgv8haz_exports, {
  Eka: () => Eka,
  kka: () => kka,
  nGr: () => nGr
});
module.exports = __toCommonJS(chunk_7bgv8haz_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var l = 256;
function kka(e) {
  let n = new Set((0, import_chunk_4smdap7r.Nr)((0, import_chunk_865at33z.ge)().seenSecurityWarnings));
  return e.filter((r) => r.seenKey === void 0 || !n.has(r.seenKey));
}
function Eka(e, n) {
  if (e.length === 0) return;
  (0, import_chunk_865at33z.Ke)((r) => {
    let t = (0, import_chunk_4smdap7r.Nr)(r.seenSecurityWarnings), s = new Set(t), o = (0, import_chunk_4smdap7r.M)(e).filter((a) => !s.has(a));
    if (o.length === 0) return r;
    return { ...r, seenSecurityWarnings: [...t, ...o].slice(-l) };
  }, n);
}
async function nGr() {
  try {
    let [{ getAllBaseTools: e }, { collectPermissionRuleAdvisories: n }, { loadAllPermissionRulesFromDisk: r }] = await Promise.all([Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-y8qengw9.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-6n47jape.js"))), Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-r6q3qqsa.js")))]);
    return (0, import_chunk_4smdap7r.M)(n(r(), e).map((t) => t.line));
  } catch (e) {
    return (0, import_chunk_k449cc64.i)(e), [];
  }
}
