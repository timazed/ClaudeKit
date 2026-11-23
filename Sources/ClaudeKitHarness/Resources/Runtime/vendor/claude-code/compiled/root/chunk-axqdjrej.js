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
var chunk_axqdjrej_exports = {};
__export(chunk_axqdjrej_exports, {
  BEn: () => BEn,
  Qse: () => Qse
});
module.exports = __toCommonJS(chunk_axqdjrej_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var n = /* @__PURE__ */ new Set(["starting", "running", "resuming", "adopted", "crashed", "working", "blocked", "done", "stopped", "failed", "busy", "shell", "idle", "waiting"]);
function Qse(e) {
  if (e === void 0) return;
  return (0, import_chunk_78g0060s.Fr)(n.has(e) ? e : "other");
}
var t = /* @__PURE__ */ new Set(["cold", "spare", "adopted"]);
function BEn(e) {
  return typeof e === "string" && t.has(e) ? e : void 0;
}
