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
var chunk_0djtvg5h_exports = {};
__export(chunk_0djtvg5h_exports, {
  Bwo: () => Bwo,
  CV: () => CV,
  Evt: () => Evt,
  Vat: () => Vat,
  Xwl: () => Xwl
});
module.exports = __toCommonJS(chunk_0djtvg5h_exports);
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
function CV(o, n) {
  let e = (0, import_chunk_zhr7rpv7._T)(o, "fable_5_mitigations", n);
  if (e !== void 0) return e;
  if (o === "claude-mythos-5") return true;
  return false;
}
function Vat(o) {
  return !(0, import_chunk_3t7ve0wy.M4n)() && (0, import_chunk_zhr7rpv7._T)(o, "fable_5_1_prompt_bundle") === true;
}
function Evt(o) {
  return o.startsWith("claude-fable-");
}
function Xwl(o) {
  return o.startsWith("claude-mythos-");
}
function Bwo(o) {
  return false;
}
