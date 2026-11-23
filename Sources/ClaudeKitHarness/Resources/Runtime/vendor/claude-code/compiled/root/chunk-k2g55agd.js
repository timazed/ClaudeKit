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
var chunk_k2g55agd_exports = {};
__export(chunk_k2g55agd_exports, {
  Jgl: () => Jgl,
  s1i: () => s1i
});
module.exports = __toCommonJS(chunk_k2g55agd_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var s1i = { delete_asset: "ask", delete_artifact: "ask", read_shared_artifact: "blocked", ...{} };
function Jgl(e) {
  return { ...e, ...(0, import_chunk_xcgcdx61.mi)(s1i, (s, r) => e?.[r] === "blocked") };
}
