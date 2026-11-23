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
var chunk_pyt5z6an_exports = {};
__export(chunk_pyt5z6an_exports, {
  Ayo: () => Ayo,
  F7: () => F7,
  W0e: () => W0e,
  l1i: () => l1i
});
module.exports = __toCommonJS(chunk_pyt5z6an_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_63s07fe6 = require("/$bunfs/root/chunk-63s07fe6.js");
function W0e() {
  if ((0, import_chunk_f9x2f6cx.st)()) return false;
  return (0, import_chunk_xzvhvaa2.Ko)().some((e) => !import_chunk_xzvhvaa2.yp.has(e) && (0, import_chunk_2yx6c1y2._e)(e)?.permissions?.denyInsteadOfPrompting === true) || (0, import_chunk_2yx6c1y2.kK)().some((e) => e.permissions?.denyInsteadOfPrompting === true);
}
function Ayo(e) {
  let o = W0e();
  if (o === (e.denyInsteadOfPrompting === true)) return e;
  return { ...e, denyInsteadOfPrompting: o, shouldAvoidPermissionPrompts: o || e.avoidsPromptsByNature === true };
}
function l1i() {
  if ((0, import_chunk_f9x2f6cx.iE)().length > 0 && (0, import_chunk_f9x2f6cx.Se)()) return false;
  if ((0, import_chunk_f9x2f6cx.Se)() && !(0, import_chunk_63s07fe6.Ere)((0, import_chunk_f9x2f6cx.zS)())) return false;
  return true;
}
function F7() {
  return !W0e() && l1i();
}
