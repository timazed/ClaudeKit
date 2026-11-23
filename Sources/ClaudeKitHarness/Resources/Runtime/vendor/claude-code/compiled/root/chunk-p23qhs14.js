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
var chunk_p23qhs14_exports = {};
__export(chunk_p23qhs14_exports, {
  PIe: () => PIe
});
module.exports = __toCommonJS(chunk_p23qhs14_exports);
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var r = () => () => {
};
function PIe(n) {
  let { focusManager: e } = (0, import_chunk_bs4h6795.be)(import_chunk_8bkqeb5d.sp);
  return (0, import_chunk_bs4h6795.Ot)(e?.subscribe ?? r, () => {
    let t = n.current, o = e?.activeElement;
    if (!t || !o) return false;
    return (0, import_chunk_8bkqeb5d.Tve)(o, t);
  }, () => false);
}
