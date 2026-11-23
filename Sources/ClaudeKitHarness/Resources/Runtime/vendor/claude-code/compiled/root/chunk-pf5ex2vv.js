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
var chunk_pf5ex2vv_exports = {};
__export(chunk_pf5ex2vv_exports, {
  fnt: () => fnt
});
module.exports = __toCommonJS(chunk_pf5ex2vv_exports);
var import_chunk_7e1w6rv3 = require("/$bunfs/root/chunk-7e1w6rv3.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var { ceil: i, max: a } = Math;
function m(t, e, r) {
  if (r ? (0, import_chunk_6mfepmbb.gut)(t, e, r) : e === void 0) e = 1;
  else e = a((0, import_chunk_7e1w6rv3.GOs)(e), 0);
  var n = t == null ? 0 : t.length;
  if (!n || e < 1) return [];
  var l = 0, f = 0, o = Array(i(n / e));
  while (l < n) o[f++] = (0, import_chunk_qwbhh2k3.Rut)(t, l, l += e);
  return o;
}
var fnt = m;
