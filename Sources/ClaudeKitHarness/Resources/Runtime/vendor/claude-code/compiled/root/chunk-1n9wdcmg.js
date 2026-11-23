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
var chunk_1n9wdcmg_exports = {};
__export(chunk_1n9wdcmg_exports, {
  Iy: () => Iy
});
module.exports = __toCommonJS(chunk_1n9wdcmg_exports);
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
function Iy(n, i, o) {
  let g = (0, import_chunk_y8kqnbqt.ldo)(import_chunk_y8kqnbqt.OP), e = (0, import_chunk_y8kqnbqt.K1t)(n, i, g);
  if (e === void 0) {
    let t = `${n}:${i}`, d = import_chunk_y8kqnbqt.OP.loggedShortcutFallbacks;
    if (!d.has(t)) d.add(t), (0, import_chunk_y8kqnbqt.Urn)(n, i, o, "action_not_found");
    return o;
  }
  return e === null ? "" : e;
}
