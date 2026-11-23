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
var chunk_enp65fg7_exports = {};
__export(chunk_enp65fg7_exports, {
  gIe: () => gIe,
  h8n: () => h8n,
  uZe: () => uZe
});
module.exports = __toCommonJS(chunk_enp65fg7_exports);
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_5rd4zsth = require("/$bunfs/root/chunk-5rd4zsth.js");
var o = "tengu_toasty_zephyr";
function uZe() {
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty" || (0, import_chunk_k449cc64.wt)() || (0, import_chunk_5rd4zsth._B)() || !(0, import_chunk_865at33z.BR)() || (0, import_chunk_865at33z.xa)().source !== "claude.ai" || !(0, import_chunk_865at33z.Qf)() || !(0, import_chunk_865at33z.pRs)()) return null;
  let e = (0, import_chunk_865at33z.Sn)(), n = (0, import_chunk_mzmcvr6c.ht)(e?.accountUuid), t = (0, import_chunk_mzmcvr6c.ht)(e?.organizationUuid);
  return n === null || t === null ? null : { key: `${n}/${t}`, accountUuid: n, organizationUuid: t };
}
function h8n() {
  return (0, import_chunk_865at33z.xa)().source === "claude.ai" && !(0, import_chunk_k449cc64.wt)() && !(0, import_chunk_5rd4zsth._B)() && !(0, import_chunk_865at33z.pRs)() && (0, import_chunk_ephf358x.cn)().PRIVACY_CONSENTS_SCOPE_REGISTERED;
}
function gIe() {
  if (!(0, import_chunk_865at33z.b)(o, false)) return "accountSettings";
  return uZe() === null ? "claudeAi" : "consentService";
}
