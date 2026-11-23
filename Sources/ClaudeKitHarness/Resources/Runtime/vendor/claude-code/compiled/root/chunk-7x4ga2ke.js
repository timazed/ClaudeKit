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
var chunk_7x4ga2ke_exports = {};
__export(chunk_7x4ga2ke_exports, {
  LJt: () => LJt
});
module.exports = __toCommonJS(chunk_7x4ga2ke_exports);
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
function LJt() {
  let { namespace: e, cluster: t } = (0, import_chunk_2gtmjt3y.mjl)();
  return { ...e && { cooNamespace: (0, import_chunk_7fsmgfxx.e4n)(e) }, ...t && { cooCluster: (0, import_chunk_7fsmgfxx.e4n)(t) } };
}
