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
var chunk_sq76adby_exports = {};
__export(chunk_sq76adby_exports, {
  W2l: () => W2l,
  j2l: () => j2l,
  yzr: () => yzr
});
module.exports = __toCommonJS(chunk_sq76adby_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
function W2l(r, o) {
  return (0, import_chunk_k449cc64.i)(o), r.then(() => {
    throw o;
  });
}
var yzr = () => (0, import_chunk_f9x2f6cx.Se)() && import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL && !(0, import_chunk_2gtmjt3y.Xn)();
var j2l = () => yzr() || (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_2gtmjt3y.as)();
