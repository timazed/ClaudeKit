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
var chunk_jnzfg7cq_exports = {};
__export(chunk_jnzfg7cq_exports, {
  r0t: () => r0t,
  sJt: () => sJt
});
module.exports = __toCommonJS(chunk_jnzfg7cq_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var i = 100, s = 100;
function sJt(o) {
  let t = (0, import_chunk_0jve1fep.Le)(o) ? o : {}, n = t.requestedSchema;
  return `mode=${t.mode === "url" ? "url" : "form"} fields=${c((0, import_chunk_0jve1fep.Le)(n) ? n.properties : void 0)}`;
}
function r0t(o, t) {
  let { action: n } = t;
  return `action=${n === "accept" || n === "decline" || n === "cancel" ? n : "other"} mode=${o} fields=${c(t.content)}`;
}
function c(o) {
  if (!(0, import_chunk_0jve1fep.Le)(o)) return "[]";
  let t = Object.keys(o), n = t.slice(0, i).map((r) => r.length > s ? `[name too long to show: ${r.length} characters]` : r), e = t.length - n.length;
  return e > 0 ? `${(0, import_chunk_w578pjby._)(n)} and ${e} more` : (0, import_chunk_w578pjby._)(n);
}
