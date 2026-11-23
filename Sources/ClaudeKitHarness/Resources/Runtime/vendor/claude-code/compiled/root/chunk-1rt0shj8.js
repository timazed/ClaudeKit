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
var chunk_1rt0shj8_exports = {};
__export(chunk_1rt0shj8_exports, {
  Ip: () => Ip,
  snr: () => snr
});
module.exports = __toCommonJS(chunk_1rt0shj8_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
function Ip(e, o, r = {}, u = "debug") {
  let n = e === void 0 ? "[remote-tools]" : `[remote-tools call=${e}]`, g = Object.entries(r).flatMap(([l, i]) => i === void 0 ? [] : [`${l}=${i}`]).join(" ");
  (0, import_chunk_w578pjby.t)(g === "" ? `${n} ${o}` : `${n} ${o} ${g}`, { level: u });
}
function snr(e) {
  return e === "outcome_of" ? "verbose" : "debug";
}
