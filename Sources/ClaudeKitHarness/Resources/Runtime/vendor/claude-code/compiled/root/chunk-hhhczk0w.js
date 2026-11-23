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
var chunk_hhhczk0w_exports = {};
__export(chunk_hhhczk0w_exports, {
  D4s: () => D4s,
  H4s: () => H4s,
  Uve: () => Uve,
  czo: () => czo
});
module.exports = __toCommonJS(chunk_hhhczk0w_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
function czo(n) {
  if (!n.startsWith("https://")) return { ok: false, cause: "non_https" };
  let e;
  try {
    e = new URL(n);
  } catch {
    return { ok: false, cause: "unparseable" };
  }
  if (e.protocol !== "https:") return { ok: false, cause: "non_https" };
  if (e.username !== "" || e.password !== "" || e.search !== "" || e.hash !== "" || e.pathname !== "" && e.pathname !== "/") return { ok: false, cause: "origin_extras" };
  return { ok: true, origin: e.origin };
}
var t = /^cse_[A-Za-z0-9_]+$/;
function i() {
  if (!import_chunk_c203g5kd.s.CCR_SESSION_PROFILE) return { ok: false, cause: null };
  let n = import_chunk_c203g5kd.s.SESSION_INGRESS_URL;
  if (!n) return { ok: false, cause: "missing_ingress_url" };
  let e = czo(n);
  if (!e.ok) return { ok: false, cause: `invalid_ingress_origin:${e.cause}` };
  let r = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID;
  if (!r) return { ok: false, cause: "missing_session_id" };
  if (!r.startsWith("cse_")) return { ok: false, cause: "non_cse_session_id" };
  if (!t.test(r)) return { ok: false, cause: "malformed_session_id" };
  if (!(0, import_chunk_zhr7rpv7.jn)()) return { ok: false, cause: "non_first_party" };
  return { ok: true, config: { ingressOrigin: e.origin, remoteSessionId: r } };
}
function Uve() {
  let n = i();
  return n.ok ? n.config : null;
}
function H4s() {
  let n = i();
  return n.ok ? null : n.cause;
}
function D4s() {
  return import_chunk_c203g5kd.s.CCR_SESSION_PROFILE;
}
