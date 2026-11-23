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
var chunk_21y9ek9j_exports = {};
__export(chunk_21y9ek9j_exports, {
  $H: () => $H,
  RG: () => RG
});
module.exports = __toCommonJS(chunk_21y9ek9j_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_hz25f5zd = require("/$bunfs/root/chunk-hz25f5zd.js");
var n = "tengu_org_policy_denied";
function r(i, o) {
  let e = (0, import_chunk_2zeyvjwb.zR)(i);
  if (e === null || e === "unregistered") return null;
  return { org_policy_key: (0, import_chunk_78g0060s.f)(i), org_policy_deny_kind: (0, import_chunk_78g0060s.f)(e), org_policy_taint_named: (0, import_chunk_hz25f5zd.RPe)((0, import_chunk_2zeyvjwb.eL)()).length > 0, surface: (0, import_chunk_78g0060s.f)(o) };
}
function $H(i, o) {
  let e = r(i, o);
  if (e) (0, import_chunk_y53wbr8a.a)(n, e);
}
async function RG(i, o) {
  let e = r(i, o);
  if (e) await (0, import_chunk_y53wbr8a.Ma)(n, e);
}
