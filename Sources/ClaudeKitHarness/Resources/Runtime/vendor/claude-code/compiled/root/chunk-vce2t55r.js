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
var chunk_vce2t55r_exports = {};
__export(chunk_vce2t55r_exports, {
  nEt: () => nEt,
  rRe: () => rRe
});
module.exports = __toCommonJS(chunk_vce2t55r_exports);
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var nEt = "lost";
function rRe(e) {
  return (0, import_chunk_r3kja8v6.ue)() && e.mode === "poll-event" && e.pollEvent?.kind === import_chunk_qf73a9we.kE;
}
