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
var chunk_zc7mq9x0_exports = {};
__export(chunk_zc7mq9x0_exports, {
  BTr: () => BTr,
  _vl: () => _vl,
  gvl: () => gvl,
  slt: () => slt,
  t2i: () => t2i
});
module.exports = __toCommonJS(chunk_zc7mq9x0_exports);
var n = null, r = null, t = null;
function gvl(e, o) {
  n = e, r = o;
}
function t2i(e) {
  return n?.(e) ?? null;
}
function slt(e) {
  return r?.(e) ?? null;
}
function _vl(e) {
  t = e;
}
function BTr() {
  t?.();
}
