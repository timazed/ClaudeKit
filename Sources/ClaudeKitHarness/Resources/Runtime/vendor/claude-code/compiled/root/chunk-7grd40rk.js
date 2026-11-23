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
var chunk_7grd40rk_exports = {};
__export(chunk_7grd40rk_exports, {
  V6o: () => V6o,
  qYl: () => qYl
});
module.exports = __toCommonJS(chunk_7grd40rk_exports);
var import_chunk_jar84hn9 = require("/$bunfs/root/chunk-jar84hn9.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_z2gzpw6w = require("/$bunfs/root/chunk-z2gzpw6w.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
function V6o() {
  return [{ type: "text", text: (0, import_chunk_z2gzpw6w.I9s)() }];
}
function qYl() {
  (0, import_chunk_qvjn7dva.dc)({ name: import_chunk_nwk8fexj.mV, description: `Reference for writing a ${import_chunk_jar84hn9.xc} tool script (script API and gotchas, resume, quality patterns, worked examples). Load before authoring a script for a workflow the user already opted into; it does not itself authorize running one.`, menuDescription: "Load the reference for writing Workflow tool scripts", userInvocable: true, isEnabled: () => (0, import_chunk_qrpds8jv.t_)(), async getPromptForCommand() {
    return V6o();
  } });
}
