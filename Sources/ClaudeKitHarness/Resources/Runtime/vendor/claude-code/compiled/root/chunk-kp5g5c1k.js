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
var chunk_kp5g5c1k_exports = {};
__export(chunk_kp5g5c1k_exports, {
  B6r: () => B6r,
  cYt: () => cYt
});
module.exports = __toCommonJS(chunk_kp5g5c1k_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
function cYt(s) {
  return s.type === "assistant" && s.message.model !== import_chunk_bp9b0hd8.xs && s.isMeta !== true && s.isVirtual !== true;
}
function B6r(s, t) {
  let e = s.supersedesUuids;
  if (e === void 0 || e.length === 0) return false;
  if (e.includes(t.uuid)) return true;
  return (0, import_chunk_bzyb60p0.Mg)([t]).some((i) => e.includes(i.uuid));
}
