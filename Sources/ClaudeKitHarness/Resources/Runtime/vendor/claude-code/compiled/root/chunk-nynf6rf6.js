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
var chunk_nynf6rf6_exports = {};
__export(chunk_nynf6rf6_exports, {
  rI: () => rI
});
module.exports = __toCommonJS(chunk_nynf6rf6_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
class rI extends import_chunk_jv7av99m.gr {
  errorCode;
  constructor(r, o, e, t) {
    super(r, o, t);
    this.errorCode = e;
  }
}
