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
var chunk_8jsh3ct2_exports = {};
__export(chunk_8jsh3ct2_exports, {
  Y0r: () => Y0r,
  ex: () => ex
});
module.exports = __toCommonJS(chunk_8jsh3ct2_exports);
function Y0r(t, e) {
  return t.value === !e && t.source === "payload" && t.defaultHost ? !e : e;
}
class ex {
  reader = null;
  register(t) {
    let e = this.reader;
    return this.reader = t, e;
  }
  read(t, e) {
    let r = this.reader;
    if (!r) return e;
    try {
      return Y0r(r(t, e), e);
    } catch {
      return e;
    }
  }
}
