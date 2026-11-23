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
var chunk_ck1j8c5c_exports = {};
__export(chunk_ck1j8c5c_exports, {
  BUs: () => BUs,
  WUs: () => WUs,
  jUs: () => jUs
});
module.exports = __toCommonJS(chunk_ck1j8c5c_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_7d2qr9z5 = require("/$bunfs/root/chunk-7d2qr9z5.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_stxr0bw4 = require("/$bunfs/root/chunk-stxr0bw4.js");
var import_chunk_4ntck6s3 = require("/$bunfs/root/chunk-4ntck6s3.js");
var import_chunk_p90h0hwy = require("/$bunfs/root/chunk-p90h0hwy.js");
var import_crypto = require("crypto");
var g = 200;
async function BUs(o, r, e, i, s, a) {
  let p = (0, import_chunk_4ntck6s3.F8o)(r.filter(import_chunk_53snsm3k.dxe), g), c = (0, import_chunk_r3kja8v6.ue)() && a !== void 0 ? require("/$bunfs/root/chunk-3nynygsg.js").forkHistoryTools(a) : void 0, m = (0, import_chunk_4ntck6s3.URn)({ mode: import_chunk_4ntck6s3.BRn, placeAccountMemoryTool: (0, import_chunk_xfr8663h.Ej)(() => a), accountMemoryInPlay: () => (0, import_chunk_p90h0hwy.cht)(s) });
  m.note(r);
  let u = m.redact((0, import_chunk_wx3ay5nf.ZTn)(m.withoutMemoryCallAttachments(p), c)).flatMap((f) => typeof f.uuid === "string" ? [{ ...f, uuid: f.uuid, session_id: o, [import_chunk_53snsm3k.pGi]: true }] : []);
  if (u.length === 0) return null;
  let n = await (0, import_chunk_865at33z.fxs)((0, import_chunk_t39bs2jr.Pu)(o), u, e);
  if (!n.ok || n.droppedEvents === u.length) return (0, import_chunk_w578pjby.t)(`[rc-fork] History upload to ${o} failed: ${n.ok ? "every event refused" : n.reason}`, { level: "error" }), "history_upload_failed";
  if (n.droppedEvents > 0) (0, import_chunk_cqa9hrgx.l)(i, "history_events_dropped");
  return null;
}
var v = "This forked session could not be started. Fork the conversation again to retry.";
async function WUs(o, r) {
  try {
    let e = await (0, import_chunk_865at33z.fxs)((0, import_chunk_t39bs2jr.Pu)(o), [{ type: "system", subtype: "informational", content: v, level: "warning", uuid: (0, import_crypto.randomUUID)(), session_id: o, [import_chunk_53snsm3k.pGi]: true }], r);
    if (!e.ok || e.droppedEvents > 0) (0, import_chunk_w578pjby.t)(`[rc-fork] Could not post the failure notice to ${o}: ${e.ok ? "event refused" : e.reason}`, { level: "warn" });
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[rc-fork] Could not post the failure notice to ${o}: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
  }
}
async function jUs(o, r) {
  try {
    let { accessToken: e, orgUUID: i } = await (0, import_chunk_865at33z.B0)(r), s = await (0, import_chunk_stxr0bw4.VTr)((0, import_chunk_ephf358x.cn)().BASE_API_URL, e, o, 1e4, { useV2: (0, import_chunk_7d2qr9z5.K5)(), orgUUID: i, trustedDeviceToken: (await (0, import_chunk_865at33z.YU)())["X-Trusted-Device-Token"] });
    if (s !== 200 && s !== 409) (0, import_chunk_w578pjby.t)(`[rc-fork] Could not archive abandoned fork session ${o}: ${s}`, { level: "warn" });
  } catch (e) {
    (0, import_chunk_w578pjby.t)(`[rc-fork] Could not archive abandoned fork session ${o}: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "warn" });
  }
}
