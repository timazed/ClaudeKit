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
var chunk_w75z2tn8_exports = {};
__export(chunk_w75z2tn8_exports, {
  Km: () => Km,
  XZs: () => XZs,
  p9r: () => p9r
});
module.exports = __toCommonJS(chunk_w75z2tn8_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_h485hv2e = require("/$bunfs/root/chunk-h485hv2e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var Km = (0, import_chunk_h485hv2e.ds)({ kind: "local_jsx", payload: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ nodeId: (0, import_chunk_adx6804h.n)(), commandName: (0, import_chunk_adx6804h.n)(), immediate: (0, import_chunk_adx6804h.P)(), hidesPrompt: (0, import_chunk_adx6804h.P)(), holdsQueue: (0, import_chunk_adx6804h.P)().optional() })), result: (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.O_)()), default: null, userInvoked: true, hideWhile: [] }), a = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ holdsQueue: (0, import_chunk_adx6804h.P)().optional() }));
function p9r(e) {
  return e.open.some((o) => o.kind === Km.kind && a().safeParse(o.payload).data?.holdsQueue !== false);
}
var XZs = /* @__PURE__ */ new Set(["rate-limit-options", "pro-trial-expired"]);
