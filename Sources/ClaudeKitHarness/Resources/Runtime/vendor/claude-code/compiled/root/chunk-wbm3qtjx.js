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
var chunk_wbm3qtjx_exports = {};
__export(chunk_wbm3qtjx_exports, {
  bJt: () => bJt
});
module.exports = __toCommonJS(chunk_wbm3qtjx_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_q1sh0fgd = require("/$bunfs/root/chunk-q1sh0fgd.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var t = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().regex(/^[A-Za-z_][A-Za-z0-9_]{0,31}$/).refine((r) => !(r in Object.prototype))), i = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.Ae)({ arg: t(), local: t(), ref: t() })).length(1));
function bJt(r) {
  let a = i().safeParse(r?.[import_chunk_q1sh0fgd.s4e]);
  if (!a.success) return;
  let [e] = a.data;
  return e !== void 0 && e.local !== e.ref ? e : void 0;
}
