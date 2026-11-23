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
var chunk_4fssttte_exports = {};
__export(chunk_4fssttte_exports, {
  v7: () => v7
});
module.exports = __toCommonJS(chunk_4fssttte_exports);
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
function v7(e, o) {
  let r = o.restricted && (0, import_chunk_p1ewvgeh.Cdn)(e);
  return r && !(0, import_chunk_p1ewvgeh.w_)(e, o, r) && (0, import_chunk_p1ewvgeh.E2e)(e, {}, r, { restricted: true }).behavior !== "allow" || (0, import_chunk_p1ewvgeh.sme)(e, o);
}
