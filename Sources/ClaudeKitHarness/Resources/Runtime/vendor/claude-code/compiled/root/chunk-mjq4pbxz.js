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
var chunk_mjq4pbxz_exports = {};
__export(chunk_mjq4pbxz_exports, {
  Mun: () => Mun,
  zjn: () => zjn
});
module.exports = __toCommonJS(chunk_mjq4pbxz_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var zjn = (r, e) => (0, import_chunk_0w2wb7gk.$me)(r, (o) => o instanceof import_chunk_jv7av99m.wp) === true || (0, import_chunk_0w2wb7gk.Hlt)(r, e);
var Mun = (r, e) => r.catch((o) => (0, import_chunk_0w2wb7gk.Hlt)(o, e) ? void 0 : Promise.reject(o));
