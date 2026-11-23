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
var chunk_43cax88x_exports = {};
__export(chunk_43cax88x_exports, {
  N6r: () => N6r,
  XMt: () => XMt
});
module.exports = __toCommonJS(chunk_43cax88x_exports);
var import_chunk_8jqz7q9z = require("/$bunfs/root/chunk-8jqz7q9z.js");
var XMt = "[Cross-session delivery notice]";
function N6r(e) {
  let n = Array.isArray(e.content) ? e.content[0]?.text : e.content;
  return e.isMeta === true && e.origin === void 0 && typeof n === "string" && n.startsWith(XMt) && (0, import_chunk_8jqz7q9z.v0t)();
}
