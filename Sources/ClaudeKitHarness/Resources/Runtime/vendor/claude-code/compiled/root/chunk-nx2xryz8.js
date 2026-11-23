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
var chunk_nx2xryz8_exports = {};
__export(chunk_nx2xryz8_exports, {
  J1s: () => J1s,
  Y5l: () => Y5l
});
module.exports = __toCommonJS(chunk_nx2xryz8_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_qaaqd1gd = require("/$bunfs/root/chunk-qaaqd1gd.js");
var import_chunk_b18a27zs = require("/$bunfs/root/chunk-b18a27zs.js");
var import_chunk_s8g3yq9x = require("/$bunfs/root/chunk-s8g3yq9x.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var r = "anthropic/renderUnderSessionRules";
function Y5l() {
  return { experimental: { [r]: { v: 1 } } };
}
var w = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ experimental: (0, import_chunk_adx6804h.c)({ [r]: (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1) }) }) }));
var a = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ v: (0, import_chunk_adx6804h.v)(1), permissionContext: (0, import_chunk_qaaqd1gd.AY)(), offersHandOff: (0, import_chunk_adx6804h.P)(), classifiesEveryCall: (0, import_chunk_adx6804h.P)(), grantsApply: (0, import_chunk_adx6804h.P)() }));
function J1s(n, i, t) {
  let e = (0, import_chunk_qaaqd1gd.J3)(n) ? void 0 : a().safeParse(n).data;
  if (e === void 0 || i === void 0) return;
  let { mode: o, ...s } = e.permissionContext;
  if (!(o === "default" || o === "dontAsk" || o === "acceptEdits" || o === "auto" && e.offersHandOff) || Object.values(s.alwaysAllowRules).some((l) => l.length > 0) || s.strippedDangerousRules !== void 0 || s.additionalWorkingDirectories.$map.length > 0 || s.trustedNetworkDirectories !== void 0) return;
  return { offersHandOff: e.offersHandOff, classifiesEveryCall: e.classifiesEveryCall, toolPermissionContext: { ...(0, import_chunk_s8g3yq9x.Upt)((0, import_chunk_b18a27zs.D3)(e.permissionContext, i, (0, import_chunk_f9x2f6cx.Te)(), t)), ...!e.grantsApply && { pollEventDeliveryGuard: true } } };
}
