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
var chunk_wb4bmq3s_exports = {};
__export(chunk_wb4bmq3s_exports, {
  J5t: () => J5t,
  Q5t: () => Q5t
});
module.exports = __toCommonJS(chunk_wb4bmq3s_exports);
var import_chunk_c7hg08xn = require("/$bunfs/root/chunk-c7hg08xn.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
function J5t() {
  return (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { oneRow: true, children: "Waiting\u2026" });
}
function Q5t() {
  return (0, import_chunk_a46xeenj.e)(import_chunk_c7hg08xn.At, { oneRow: true, children: "Running\u2026" });
}
