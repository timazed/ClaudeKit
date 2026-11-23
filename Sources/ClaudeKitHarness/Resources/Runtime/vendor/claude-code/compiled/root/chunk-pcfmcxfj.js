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
var chunk_pcfmcxfj_exports = {};
__export(chunk_pcfmcxfj_exports, {
  C8l: () => C8l,
  HKe: () => HKe
});
module.exports = __toCommonJS(chunk_pcfmcxfj_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
async function HKe(e, t, i, r = true) {
  let a = t ?? await (0, import_chunk_865at33z.SM)(e, void 0, void 0, i);
  if (a.valid) return null;
  if (r) {
    let { sendOrgValidationRefusal: n } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-z0mhdzdx.js")));
    await n(a);
  }
  return a;
}
function C8l(e) {
  return e.reason === "org_verify_failed" || e.policyUnreadable === true;
}
