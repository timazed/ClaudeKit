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
var chunk_8hj0hv8t_exports = {};
__export(chunk_8hj0hv8t_exports, {
  loadMermaidBundleJs: () => J
});
module.exports = __toCommonJS(chunk_8hj0hv8t_exports);
var import_chunk_0vw1gz5c = require("/$bunfs/root/chunk-0vw1gz5c.js");
var D = "/$bunfs/root/mermaid.min.js";
var H = `/*! mermaid v11.16.1 | MIT | Copyright (c) 2014 - 2022 Knut Sveidqvist */
`;
async function J() {
  return H + await (0, import_chunk_0vw1gz5c.qln)(D, __dirname);
}
