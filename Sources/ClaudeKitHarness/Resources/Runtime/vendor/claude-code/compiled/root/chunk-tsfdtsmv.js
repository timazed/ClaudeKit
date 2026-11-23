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
var chunk_tsfdtsmv_exports = {};
__export(chunk_tsfdtsmv_exports, {
  Bkt: () => Bkt,
  Lit: () => Lit,
  lgo: () => lgo
});
module.exports = __toCommonJS(chunk_tsfdtsmv_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
function Lit(e) {
  if (!(0, import_chunk_mzmcvr6c.ZB)(e)) return false;
  if ((0, import_chunk_mzmcvr6c.ht)(e)) return true;
  return /^[A-Za-z0-9][A-Za-z0-9_]*$/.test(e) && (0, import_chunk_px0hhsq7.nC)(e) !== void 0;
}
function lgo(e, o = {}) {
  return o.acceptCustomIds ? (0, import_chunk_mzmcvr6c.ZB)(e) : Lit(e);
}
function Bkt(e, o, n = {}) {
  if (o) return { adoptedSessionId: null, effectiveFork: true };
  if (e === void 0) return { adoptedSessionId: null, effectiveFork: false };
  if (lgo(e, n)) return { adoptedSessionId: e, effectiveFork: false };
  return (0, import_chunk_w578pjby.t)(`resume: transcript session id (${typeof e}) rejected by the adoption gate; continuing as a fork under the fresh session id`), (0, import_chunk_cqa9hrgx.l)("session_resume", "unadoptable_session_id"), { adoptedSessionId: null, effectiveFork: true };
}
