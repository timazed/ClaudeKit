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
var chunk_8yvg0j99_exports = {};
__export(chunk_8yvg0j99_exports, {
  fq: () => fq
});
module.exports = __toCommonJS(chunk_8yvg0j99_exports);
var import_chunk_1jfwdjvf = require("/$bunfs/root/chunk-1jfwdjvf.js");
var import_chunk_8v27xkv5 = require("/$bunfs/root/chunk-8v27xkv5.js");
var import_chunk_924etrq7 = require("/$bunfs/root/chunk-924etrq7.js");
function fq(o, e) {
  let t = { name: e.client.name, config: o };
  return { ...e, client: (0, import_chunk_8v27xkv5.t5)(e.client, o), ...e.tools !== void 0 && { tools: (0, import_chunk_1jfwdjvf.eye)(t, e.tools) }, ...e.commands !== void 0 && { commands: (0, import_chunk_924etrq7.$ue)(t, e.commands) } };
}
