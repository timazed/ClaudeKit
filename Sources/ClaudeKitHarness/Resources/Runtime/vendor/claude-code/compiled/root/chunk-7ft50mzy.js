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
var chunk_7ft50mzy_exports = {};
__export(chunk_7ft50mzy_exports, {
  Jve: () => Jve
});
module.exports = __toCommonJS(chunk_7ft50mzy_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var e = /[\p{Cc}\p{Cf}\p{Cs}\p{Mn}\p{Me}\p{Default_Ignorable_Code_Point}\u2028\u2029]/u;
function Jve(t, n) {
  if (typeof t !== "string") return "";
  let r = (0, import_chunk_7cfjrnwy.Ir)(t).replace(/\r$/, "");
  if (e.test(r)) return "";
  if (n !== void 0) return r.trim() === "" ? "" : (0, import_chunk_sah8dzn4.x3)(r, n).trim();
  return r.trim() === "" ? "" : (0, import_chunk_sah8dzn4.R3)(r).trim();
}
