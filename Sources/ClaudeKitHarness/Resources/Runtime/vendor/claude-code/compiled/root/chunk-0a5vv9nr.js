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
var chunk_0a5vv9nr_exports = {};
__export(chunk_0a5vv9nr_exports, {
  B7r: () => B7r,
  VBa: () => VBa,
  zBa: () => zBa
});
module.exports = __toCommonJS(chunk_0a5vv9nr_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_63s07fe6 = require("/$bunfs/root/chunk-63s07fe6.js");
function B7r() {
  return (0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_63s07fe6.Ere)((0, import_chunk_f9x2f6cx.zS)());
}
var t = "No file is sent unless this call is allowed.";
function zBa(o, e, s, n, r) {
  let i = r ? `${o}
${t}` : o;
  if (e) return { behavior: "ask", message: i, updatedInput: n, suppressAlwaysAllowRule: true, defaultToNo: true, decisionReason: { type: "safetyCheck", reason: i, classifierApprovable: false } };
  return s.behavior === "allow" ? s : { ...s, message: i, updatedInput: n, decisionReason: s.decisionReason ?? { type: "other", reason: i } };
}
function VBa(o) {
  let e = o?.checked?.note;
  return typeof e === "object" && e !== null && "connectorFiles" in e;
}
