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
var chunk_jp3c197c_exports = {};
__export(chunk_jp3c197c_exports, {
  KFa: () => KFa,
  qFa: () => qFa
});
module.exports = __toCommonJS(chunk_jp3c197c_exports);
var r = null;
function KFa(e) {
  r = e;
}
async function qFa() {
  if (r === null) return;
  let e = await r();
  return Array.isArray(e) ? e.filter((n) => typeof n?.tabId === "number" && typeof n?.url === "string") : void 0;
}
