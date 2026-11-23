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
var chunk_3qfhffks_exports = {};
__export(chunk_3qfhffks_exports, {
  a7t: () => a7t,
  aMe: () => aMe,
  her: () => her,
  pqe: () => pqe,
  vHt: () => vHt
});
module.exports = __toCommonJS(chunk_3qfhffks_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_jaq5v1tn = require("/$bunfs/root/chunk-jaq5v1tn.js");
var import_crypto = require("crypto");
var o = "You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";
function aMe() {
  return (0, import_chunk_865at33z.Rt)() && (0, import_chunk_865at33z.Sn)()?.billingType !== "usage_based" && (0, import_chunk_zhr7rpv7.Ss)() && (0, import_chunk_f9x2f6cx.Cl)() && !(0, import_chunk_f9x2f6cx.Hn)() && !(0, import_chunk_865at33z.Qt)();
}
function vHt(e) {
  return aMe() && (0, import_chunk_bzyb60p0.wx)(e) && e.rateLimitType === "five_hour";
}
var i = ["five_hour", "seven_day", "seven_day_overage_included", "seven_day_opus", "seven_day_sonnet"];
function her(e) {
  return aMe() && (0, import_chunk_bzyb60p0.wx)(e) && e.rateLimitType !== void 0 && i.includes(e.rateLimitType);
}
function pqe() {
  return (0, import_chunk_jaq5v1tn.oqr)((0, import_chunk_865at33z.or)(), (0, import_chunk_865at33z.LC)());
}
function a7t() {
  (0, import_chunk_bzyb60p0.HO)({ agentId: (0, import_chunk_f9x2f6cx.ot)(), mode: "prompt", priority: "later", value: o, uuid: (0, import_crypto.randomUUID)(), origin: { kind: "auto-continuation" }, isMeta: true, skipSlashCommands: true });
}
