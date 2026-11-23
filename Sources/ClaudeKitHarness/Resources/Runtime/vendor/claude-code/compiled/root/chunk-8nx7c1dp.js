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
var chunk_8nx7c1dp_exports = {};
__export(chunk_8nx7c1dp_exports, {
  aTn: () => aTn
});
module.exports = __toCommonJS(chunk_8nx7c1dp_exports);
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
function aTn(e) {
  if (Array.isArray(e)) {
    let n = e.map(aTn);
    return n.length > 0 && n.every((r) => r !== void 0) ? n.flatMap((r) => r ?? []) : void 0;
  }
  return (0, import_chunk_0w2wb7gk.qun)(e, "door");
}
