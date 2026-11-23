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
var chunk_2tqq6ycx_exports = {};
__export(chunk_2tqq6ycx_exports, {
  Nq: () => Nq,
  elo: () => elo,
  r0: () => r0
});
module.exports = __toCommonJS(chunk_2tqq6ycx_exports);
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
function Nq(n, e, t, r) {
  return u(n, e, t) ?? c((0, import_chunk_w578pjby.gJ)(e), t, r);
}
async function elo(n, e, t) {
  return u(n, e, t) ?? c(await (0, import_chunk_w578pjby.osa)(e), t);
}
function u(n, e, t) {
  let r = n.trim(), s = r === e ? [e] : [r, e];
  for (let i of s) {
    let o = a(i, t);
    if (o !== void 0) return o;
  }
  return;
}
function c({ paths: n, vetted: e, linkTextClimbs: t }, r, s) {
  if (!e) return { ok: false, reason: "unvettable_chain" };
  for (let i of n) {
    let o = a(i, r);
    if (o !== void 0) return o;
  }
  if (t && !s?.allowLinkTextClimbs) return { ok: false, reason: "link_text_climbs" };
  return { ok: true, pathsToCheck: n };
}
function r0(n, e) {
  return a(n, e)?.reason;
}
function a(n, e) {
  if ((0, import_chunk_z6pfqf6e.xv)(n)) return { ok: false, reason: "nt_namespace" };
  if ((0, import_chunk_p1ewvgeh.nLe)(n, e)) return { ok: false, reason: "untrusted_unc" };
  if ((0, import_chunk_p1ewvgeh.y2e)(n, e)) return { ok: false, reason: "untrusted_automount" };
  let t = (0, import_chunk_p1ewvgeh.QUn)(n, e);
  if (t !== void 0) return { ok: false, reason: "suspicious_windows_spelling", spelling: t };
  return;
}
