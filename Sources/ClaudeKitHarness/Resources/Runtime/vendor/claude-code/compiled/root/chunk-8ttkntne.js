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
var chunk_8ttkntne_exports = {};
__export(chunk_8ttkntne_exports, {
  CCr: () => CCr
});
module.exports = __toCommonJS(chunk_8ttkntne_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var CCr = (0, import_chunk_w1d7ygsk.V)(function(s) {
  Object.defineProperty(s, "__esModule", { value: true });
  s.execAsync = void 0;
  var e = (0, import_chunk_w1d7ygsk.ft)("child_process"), r = (0, import_chunk_w1d7ygsk.ft)("util");
  s.execAsync = r.promisify(e.exec);
});
