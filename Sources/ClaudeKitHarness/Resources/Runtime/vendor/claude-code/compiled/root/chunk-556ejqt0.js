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
var chunk_556ejqt0_exports = {};
__export(chunk_556ejqt0_exports, {
  U8t: () => U8t,
  q3: () => q3
});
module.exports = __toCommonJS(chunk_556ejqt0_exports);
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class o {
  restored = false;
  markRestored() {
    this.restored = true;
  }
}
var r = new import_chunk_2904xtvq.j(() => new o());
function U8t(t) {
  r.of(t).markRestored();
}
function q3(t) {
  return r.of(t).restored;
}
