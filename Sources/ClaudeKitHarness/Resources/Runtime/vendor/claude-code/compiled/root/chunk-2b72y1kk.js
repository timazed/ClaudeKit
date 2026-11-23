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
var chunk_2b72y1kk_exports = {};
__export(chunk_2b72y1kk_exports, {
  Pet: () => Pet
});
module.exports = __toCommonJS(chunk_2b72y1kk_exports);
var import_chunk_s0zsg6za = require("/$bunfs/root/chunk-s0zsg6za.js");
function Pet(e, r) {
  return e.toLocaleString("en-US", { month: "short", day: "numeric", ...r?.includeYear && { year: "numeric" }, hour: "numeric", minute: "2-digit", timeZone: (0, import_chunk_s0zsg6za.Cbo)() }).replace(/,? at |, (?=\d{1,2}:)/, " ").replace(/[ \u202f]([AP]M)/i, (o, t) => t.toLowerCase());
}
