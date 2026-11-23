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
var chunk_69q893ed_exports = {};
__export(chunk_69q893ed_exports, {
  yW: () => yW
});
module.exports = __toCommonJS(chunk_69q893ed_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_0kyr8hth = require("/$bunfs/root/chunk-0kyr8hth.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var o = 6e4, r = 18e5, t = 2592e6, i = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ recurringFrac: (0, import_chunk_adx6804h.E)().min(0).max(1), recurringCapMs: (0, import_chunk_adx6804h.E)().int().min(0).max(r), oneShotMaxMs: (0, import_chunk_adx6804h.E)().int().min(0).max(r), oneShotFloorMs: (0, import_chunk_adx6804h.E)().int().min(0).max(r), oneShotMinuteMod: (0, import_chunk_adx6804h.E)().int().min(1).max(60), recurringMaxAgeMs: (0, import_chunk_adx6804h.E)().int().min(0).max(t).default(import_chunk_0kyr8hth.Eae.recurringMaxAgeMs), cacheLeadMs: (0, import_chunk_adx6804h.E)().int().min(0).max(6e4).default(import_chunk_0kyr8hth.Eae.cacheLeadMs) }).refine((n) => n.oneShotFloorMs <= n.oneShotMaxMs));
function yW() {
  let n = (0, import_chunk_865at33z.yoe)("tengu_kairos_cron_config", import_chunk_0kyr8hth.Eae, o), e = i().safeParse(n);
  return e.success ? e.data : import_chunk_0kyr8hth.Eae;
}
