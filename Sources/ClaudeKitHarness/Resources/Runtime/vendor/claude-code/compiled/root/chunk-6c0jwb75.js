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
var chunk_6c0jwb75_exports = {};
__export(chunk_6c0jwb75_exports, {
  Qao: () => Qao,
  Ufe: () => Ufe
});
module.exports = __toCommonJS(chunk_6c0jwb75_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_zddv3vvj = require("/$bunfs/root/chunk-zddv3vvj.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
function Ufe(o) {
  return o.hookCaller === void 0 && o.pluginUnnamed === true && ((0, import_chunk_865at33z.ce)().loadedModules.some((n) => !(0, import_chunk_59mwkeke.yd)(n)) || (0, import_chunk_zddv3vvj.nZ)());
}
var Qao = "A plugin started or resumed this subagent, or the one that spawned it, and that plugin is not known in this session. It cannot schedule work: nothing would hold that work after a Stop.";
