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
var chunk_3t4aqnax_exports = {};
__export(chunk_3t4aqnax_exports, {
  FWs: () => FWs,
  Xbn: () => Xbn,
  Ybn: () => Ybn,
  nYn: () => nYn
});
module.exports = __toCommonJS(chunk_3t4aqnax_exports);
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
(0, import_chunk_bs4h6795.G)();
var n = "script:", Ybn = (0, import_chunk_bs4h6795.an)(null);
function nYn(t) {
  return `${n}${t}`;
}
function FWs(t) {
  return t.startsWith(n);
}
function Xbn(t) {
  return (0, import_chunk_0jve1fep.Le)(t) && typeof t.code === "string" && t.code.trim() !== "" ? t.code : void 0;
}
