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
var chunk_n3pcfpje_exports = {};
__export(chunk_n3pcfpje_exports, {
  Ajs: () => Ajs
});
module.exports = __toCommonJS(chunk_n3pcfpje_exports);
var import_chunk_r0jt20hr = require("/$bunfs/root/chunk-r0jt20hr.js");
var import_chunk_sc2p4kky = require("/$bunfs/root/chunk-sc2p4kky.js");
var import_chunk_p506epsn = require("/$bunfs/root/chunk-p506epsn.js");
async function Ajs(e, a) {
  e();
  let o = (0, import_chunk_r0jt20hr.xrn)();
  if (o !== null) return o.close(), null;
  return await (0, import_chunk_p506epsn.eqr)("stop_command", a.storageV5, (0, import_chunk_sc2p4kky.p_e)()), null;
}
