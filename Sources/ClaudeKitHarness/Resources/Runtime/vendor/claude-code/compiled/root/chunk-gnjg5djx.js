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
var chunk_gnjg5djx_exports = {};
__export(chunk_gnjg5djx_exports, {
  Uht: () => Uht
});
module.exports = __toCommonJS(chunk_gnjg5djx_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_pmryp5f3 = require("/$bunfs/root/chunk-pmryp5f3.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_5nf47kr4 = require("/$bunfs/root/chunk-5nf47kr4.js");
function Uht(o) {
  return i() && !(0, import_chunk_5nf47kr4.Jre)(import_chunk_nwk8fexj.mV) && (o === void 0 || l(o));
}
function i() {
  if (!(0, import_chunk_qrpds8jv.t_)()) return false;
  if ((0, import_chunk_5nf47kr4.Xre)() || (0, import_chunk_f9x2f6cx.gh)()) return false;
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "local-agent") return false;
  let o = (0, import_chunk_2yx6c1y2.vt)().skillOverrides?.[import_chunk_nwk8fexj.mV];
  if (o === "off" || o === "user-invocable-only") return false;
  let e = (0, import_chunk_f9x2f6cx.Q8)();
  if (e !== void 0 && !e.includes(import_chunk_nwk8fexj.mV)) return false;
  return true;
}
function l(o) {
  return o.some((e) => (0, import_chunk_4vsz8a99.gt)(e, import_chunk_pmryp5f3.Fn));
}
