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
var chunk_z4h87xh8_exports = {};
__export(chunk_z4h87xh8_exports, {
  BUr: () => BUr,
  D9l: () => D9l,
  WUr: () => WUr,
  u2l: () => u2l
});
module.exports = __toCommonJS(chunk_z4h87xh8_exports);
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_n7e3hgnx = require("/$bunfs/root/chunk-n7e3hgnx.js");
var import_chunk_enp65fg7 = require("/$bunfs/root/chunk-enp65fg7.js");
var BUr = "https://claude.ai/settings/data-privacy-controls";
function WUr() {
  let e = (0, import_chunk_bzyb60p0.uLt)();
  return e === void 0 ? void 0 : (0, import_chunk_xcgcdx61.dh)(e);
}
async function u2l({ credentials: e, storageV5: o }) {
  if (!(0, import_chunk_865at33z.BR)() || !(0, import_chunk_865at33z.Bzt)() || await (0, import_chunk_n7e3hgnx.gnr)(e)) return false;
  let [r, n] = await Promise.all([(0, import_chunk_n7e3hgnx.dq)(e), (0, import_chunk_n7e3hgnx.Kte)(e)]);
  if (!r.success) return false;
  return (0, import_chunk_n7e3hgnx.ECn)(r.data, o, e), r.data.grove_enabled === null && n.success && !n.data.notice_is_grace_period;
}
async function D9l(e) {
  if (!await u2l(e)) return;
  (0, import_chunk_y53wbr8a.a)("tengu_grove_print_viewed", { dismissable: false });
  let o = WUr();
  (0, import_chunk_ndrgvsn7.$E)((0, import_chunk_enp65fg7.gIe)() === "consentService" ? `
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You must run \`claude\` to review the updated terms.

` : `
[ACTION REQUIRED] We've updated our Consumer Terms and Privacy Policy. You'll need to accept them at ${BUr}${o === void 0 ? "" : ` as ${o}`} to continue.

`), await (0, import_chunk_bzyb60p0.Yr)(1);
}
