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
var chunk_qesvcmqe_exports = {};
__export(chunk_qesvcmqe_exports, {
  E1: () => E1,
  I0: () => I0,
  KTr: () => KTr,
  Rks: () => Rks,
  Rme: () => Rme,
  k1: () => k1,
  kvl: () => kvl,
  llt: () => llt,
  qTr: () => qTr,
  qWn: () => qWn
});
module.exports = __toCommonJS(chunk_qesvcmqe_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_tp3c5q2s = require("/$bunfs/root/chunk-tp3c5q2s.js");
var import_chunk_myvyhcm0 = require("/$bunfs/root/chunk-myvyhcm0.js");
var i = 2e3, s = ["session_ingress_token", "environment_secret", "access_token", "secret", "token"], g = new RegExp(`"(${s.join("|")})"\\s*:\\s*"[^"]*"`, "g");
function u(e) {
  return e.replace(g, '"$1":"[REDACTED]"');
}
function kvl(e) {
  let r = e.replaceAll(`
`, "\\n");
  if (r.length <= i) return r;
  return r.slice(0, i) + `... (${r.length} chars)`;
}
function Rks(e) {
  let r = typeof e === "string" ? e : (0, import_chunk_w578pjby._)(e), n = u(r);
  if (n.length <= i) return n;
  return n.slice(0, i) + `... (${n.length} chars)`;
}
function Rme(e) {
  return `sha12:${(0, import_chunk_myvyhcm0.Zn)(typeof e === "string" ? e : `${(0, import_chunk_w578pjby._)(e)}`)}`;
}
function qWn(e) {
  return typeof e === "string" && /^[\w.-]{1,64}$/.test(e) ? e : `<${typeof e}>`;
}
function KTr(e) {
  let r = (0, import_chunk_jv7av99m.d)(e);
  if (e && typeof e === "object" && "response" in e) {
    let n = e.response, o = E1(n?.data);
    if (o) return `${r}: ${o}`;
  }
  return r;
}
function k1(e) {
  if (!e || typeof e !== "object") return;
  if ("message" in e && typeof e.message === "string") return e.message;
  if ("error" in e && e.error !== null && typeof e.error === "object" && "message" in e.error && typeof e.error.message === "string") return e.error.message;
  return;
}
function E1(e) {
  let r = k1(e);
  return r ? qTr(r, "error_message") : void 0;
}
function qTr(e, r) {
  if ((0, import_chunk_tp3c5q2s.A_n)(e, 1024)) return e;
  (0, import_chunk_w578pjby.t)(`[error-detail] left the service's text (${r}) out of the error shown: it has ${e.length} UTF-16 units and is not one plain line of at most 1,024 units`), (0, import_chunk_y53wbr8a.a)("tengu_service_error_detail_not_plain", { length: e.length, source: (0, import_chunk_78g0060s.f)(r) });
  return;
}
function llt(e) {
  if (!e || typeof e !== "object" || !("error" in e)) return;
  let r = e.error;
  if (!r || typeof r !== "object" || !("details" in r)) return;
  let n = r.details;
  if (n && typeof n === "object" && "error_code" in n && typeof n.error_code === "string") return n.error_code;
  return;
}
function I0(e, r, n, o) {
  if (r) (0, import_chunk_w578pjby.t)(r);
  (0, import_chunk_y53wbr8a.a)("tengu_bridge_repl_skipped", { reason: (0, import_chunk_78g0060s.f)(e), ...n !== void 0 && { v2: n }, ...o });
}
