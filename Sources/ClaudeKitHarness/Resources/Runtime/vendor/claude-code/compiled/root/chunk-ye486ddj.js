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
var chunk_ye486ddj_exports = {};
__export(chunk_ye486ddj_exports, {
  EW: () => EW
});
module.exports = __toCommonJS(chunk_ye486ddj_exports);
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_271f5kxt = require("/$bunfs/root/chunk-271f5kxt.js");
function EW(e) {
  try {
    (0, import_chunk_271f5kxt.tUt)((0, import_chunk_ephf358x.cn)().BASE_API_URL, e);
  } catch {
    return "egress_blocked";
  }
  if ((0, import_chunk_2zeyvjwb.uo)("zdr")) return "egress_blocked";
  return (0, import_chunk_k449cc64.wt)() ? "essential_traffic" : void 0;
}
