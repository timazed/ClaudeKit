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
var chunk_x98x5a0q_exports = {};
__export(chunk_x98x5a0q_exports, {
  uYr: () => uYr
});
module.exports = __toCommonJS(chunk_x98x5a0q_exports);
var e = /[\0-\x1f\x7f\\\u201b\u2400-\u2421\uff0e\uff0f\ufffd]/;
function uYr(f) {
  return e.test(f) || f.normalize("NFC") !== f.normalize("NFD");
}
