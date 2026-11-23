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
var chunk_xkpc4wvy_exports = {};
__export(chunk_xkpc4wvy_exports, {
  fYr: () => fYr
});
module.exports = __toCommonJS(chunk_xkpc4wvy_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
function fYr(e, o) {
  return o.innerCall === true || o.agentId !== void 0 || (0, import_chunk_drk264d0.Z_)(o) !== void 0 || e === (0, import_chunk_f9x2f6cx.zS)();
}
