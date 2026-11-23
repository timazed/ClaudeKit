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
var chunk_g9ztbtfd_exports = {};
__export(chunk_g9ztbtfd_exports, {
  ti: () => ti
});
module.exports = __toCommonJS(chunk_g9ztbtfd_exports);
var import_path = require("path");
function ti(r, i, e) {
  let t = (0, import_path.relative)(r, i);
  if (t === "") return e;
  return t !== ".." && !t.startsWith(`..${import_path.sep}`) && !(0, import_path.isAbsolute)(t);
}
