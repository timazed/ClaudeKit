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
var chunk_xm6zq75j_exports = {};
__export(chunk_xm6zq75j_exports, {
  yGt: () => yGt
});
module.exports = __toCommonJS(chunk_xm6zq75j_exports);
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
function n() {
  return { "": "c3f71dda-0569-4c4c-8f90-b299477e9f37", "-staging-oauth": void 0, "-local-oauth": void 0, "-custom-oauth": void 0 }[(0, import_chunk_ephf358x.PI)()];
}
function yGt(e) {
  if (e.oauthEnvironment === void 0) return e.clientId === n();
  return e.oauthEnvironment === (0, import_chunk_ephf358x.PI)();
}
