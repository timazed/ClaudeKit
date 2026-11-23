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
var chunk_4ssv8fte_exports = {};
__export(chunk_4ssv8fte_exports, {
  bTs: () => bTs,
  ofn: () => ofn,
  vTt: () => vTt
});
module.exports = __toCommonJS(chunk_4ssv8fte_exports);
var vTt = Object.freeze([[1564, 1564], [8234, 8238], [8294, 8297]]), bTs = vTt.map(([E, T]) => `\\u{${E.toString(16)}}` + (T > E ? `-\\u{${T.toString(16)}}` : "")).join(""), ofn = new RegExp(`[${bTs}]`, "gu");
