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
var chunk_yd1dj09f_exports = {};
__export(chunk_yd1dj09f_exports, {
  E1r: () => E1r
});
module.exports = __toCommonJS(chunk_yd1dj09f_exports);
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
function E1r(o, { toDesktop: e } = { toDesktop: false }) {
  return `Every session you can continue here is archived. ${e || (0, import_chunk_zwfq7wpn._R)() && (0, import_chunk_zwfq7wpn.AFt)() ? `Run \`claude ${e ? "--desktop " : ""}--resume ${o}\` to open the most recent one.` : "Run `claude --resume` and press Ctrl+S to show them."}`;
}
