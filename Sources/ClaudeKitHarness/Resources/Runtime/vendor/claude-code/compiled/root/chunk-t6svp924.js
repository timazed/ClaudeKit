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
var chunk_t6svp924_exports = {};
__export(chunk_t6svp924_exports, {
  Wqr: () => Wqr,
  jIa: () => jIa
});
module.exports = __toCommonJS(chunk_t6svp924_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var c = 256, a = new import_chunk_pzzqg6s3.ze(() => ({ sink: void 0, recorded: void 0 }));
function jIa(r, s, o) {
  if (s === null) return;
  try {
    let e = a.of(r);
    if (e.sink = o, s.readFailed === true) return;
    let n = s.internal?.advisor_pick;
    if (typeof n !== "string") {
      e.recorded = n == null ? null : void 0;
      return;
    }
    if (e.recorded = n, !d(n)) {
      (0, import_chunk_cqa9hrgx.l)("advisor_pick_restore", "refused"), (0, import_chunk_w578pjby.t)("[AdvisorTool] Not restoring this session's saved advisor: /advisor would refuse it here right now. The advisor that settings name, if any, applies; run /advisor to choose again.");
      return;
    }
    if ((0, import_chunk_f9x2f6cx.oE)({ ...(0, import_chunk_f9x2f6cx.Fd)() ?? {}, advisorModel: n }), import_chunk_trq47kfh.Ti.notifyChange("flagSettings"), n === "" || (0, import_chunk_sjqze7qg.eWe)(n)) (0, import_chunk_cqa9hrgx.u)("advisor_pick_restore");
    else (0, import_chunk_cqa9hrgx.l)("advisor_pick_restore", (0, import_chunk_gq1dr8pm.aBt)((0, import_chunk_865at33z.jt)(n)) === "needs_consent" ? "awaits_consent" : "awaits_usage_credits");
  } catch (e) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(e)), (0, import_chunk_cqa9hrgx.m)("advisor_pick_restore", "threw");
  }
}
function Wqr(r, s) {
  try {
    let o = a.peek(r);
    if (o?.sink === void 0) return;
    let e = s !== null && !d(s) ? null : s;
    if (o.recorded === e) return;
    o.sink.notifyInternalMetadataChanged({ advisor_pick: e }), o.recorded = e;
  } catch (o) {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(o));
  }
}
function d(r) {
  return r === "" || r.length <= c && ((0, import_chunk_sjqze7qg.eWe)(r) || (0, import_chunk_sjqze7qg.gSe)(r));
}
