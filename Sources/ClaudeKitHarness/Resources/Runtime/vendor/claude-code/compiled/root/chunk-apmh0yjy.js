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
var chunk_apmh0yjy_exports = {};
__export(chunk_apmh0yjy_exports, {
  H9o: () => H9o,
  _Yr: () => _Yr,
  eJt: () => eJt
});
module.exports = __toCommonJS(chunk_apmh0yjy_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var s = /[\x7f-\x9f]/g, o = (e) => e.replace(s, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`), c = /[\x00-\x1f\x7f-\x9f]/g;
function _Yr(e) {
  return e.replace(c, "");
}
function eJt(e, { verbose: n }) {
  if (Object.keys(e).length === 0) return "";
  let r = (0, import_chunk_0jve1fep.yge)(e);
  if (r !== null) return r;
  return Object.entries(e).map(([t, i]) => H9o(t, i, { verbose: n })).join(", ");
}
function H9o(e, n, { verbose: r }) {
  let t = o((0, import_chunk_w578pjby._)(n));
  return `${o((0, import_chunk_w578pjby.cs)(e).slice(1, -1))}: ${t}`;
}
