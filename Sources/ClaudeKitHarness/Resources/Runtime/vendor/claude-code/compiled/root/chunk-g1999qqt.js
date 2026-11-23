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
var chunk_g1999qqt_exports = {};
__export(chunk_g1999qqt_exports, {
  l8n: () => l8n
});
module.exports = __toCommonJS(chunk_g1999qqt_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_0tkterak = require("/$bunfs/root/chunk-0tkterak.js");
var import_chunk_yw8k626q = require("/$bunfs/root/chunk-yw8k626q.js");
var import_chunk_2sgfg267 = require("/$bunfs/root/chunk-2sgfg267.js");
var import_chunk_v6ez7m15 = require("/$bunfs/root/chunk-v6ez7m15.js");
var import_chunk_01eypw0a = require("/$bunfs/root/chunk-01eypw0a.js");
var import_chunk_5sjwf92x = require("/$bunfs/root/chunk-5sjwf92x.js");
var import_chunk_ch6321bk = require("/$bunfs/root/chunk-ch6321bk.js");
function l8n(e, o, a, p) {
  (0, import_chunk_0tkterak.PY)("conversation_reset"), (0, import_chunk_gq1dr8pm.q5)("conversation_reset"), (0, import_chunk_bzyb60p0.rS)(import_chunk_bzyb60p0.EQ), (0, import_chunk_0rkwgmhx.BEt)(), (0, import_chunk_0rkwgmhx.ldn)(), (0, import_chunk_0rkwgmhx.adn)(), (0, import_chunk_qvjn7dva.ujt)();
  let r = (0, import_chunk_f9x2f6cx.W)();
  for (let t of (0, import_chunk_ch6321bk.TYe)(e.sessionHooksRegistry, r)) e.sessionHooksRegistry.remove(r, "Stop", t);
  a(), (0, import_chunk_bzyb60p0.Z4e)(), e.markConversationRemote?.(), (0, import_chunk_5sjwf92x.yYe)(e.readFileState), (0, import_chunk_bzyb60p0.$ie)(e.memorySelector), (0, import_chunk_f9x2f6cx.V4t)(), (0, import_chunk_bzyb60p0.vrt)(o);
  let i = (0, import_chunk_865at33z.aRo)(o);
  if (i) (0, import_chunk_cqa9hrgx.l)("teleport_resume_history", "summarized_rows_absent");
  else (0, import_chunk_cqa9hrgx.u)("teleport_resume_history");
  let m = i ? [(0, import_chunk_bzyb60p0.Pt)(import_chunk_865at33z.iRo, "warning")] : [];
  (0, import_chunk_2sgfg267.DUr)(p, r, [...o, ...m].map((t) => t.uuid)), e.applyMessageOp({ type: "replace-all", messages: [...(0, import_chunk_bzyb60p0.DLt)(o), ...m] }), (0, import_chunk_yw8k626q.Jse)(true), (0, import_chunk_f9x2f6cx.en)().markIncomplete(void 0, import_chunk_f9x2f6cx.Y6e);
  let s = (0, import_chunk_v6ez7m15.n_o)(o);
  if (s !== void 0 && s !== r) (0, import_chunk_f9x2f6cx.en)().recordDerivedFrom([(0, import_chunk_01eypw0a._U)(s, "teleport")]);
}
