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
var chunk_bne5t4g3_exports = {};
__export(chunk_bne5t4g3_exports, {
  Fhn: () => Fhn,
  Ln: () => Ln,
  NVn: () => NVn,
  O7i: () => O7i,
  Xct: () => Xct,
  bIs: () => bIs,
  cJe: () => cJe,
  qLl: () => qLl
});
module.exports = __toCommonJS(chunk_bne5t4g3_exports);
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var Ln = "SendMessage", Xct = "ccd_session_mgmt", qLl = "list_sessions", cJe = "send_message", Fhn = 200, bIs = ["type", "recipient", "recipient_kind", "content", "request_id", "approve"];
function O7i(e) {
  return "to" in e && ("message" in e || "notify_when_idle" in e);
}
function NVn(e) {
  if (!(0, import_chunk_ma3kja9f.T)(e) || !O7i(e) || !bIs.some((n) => n in e)) return;
  let o = { ...e };
  for (let n of bIs) delete o[n];
  return o;
}
