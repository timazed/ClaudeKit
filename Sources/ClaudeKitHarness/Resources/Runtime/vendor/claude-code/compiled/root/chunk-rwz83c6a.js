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
var chunk_rwz83c6a_exports = {};
__export(chunk_rwz83c6a_exports, {
  createDeviceHookTemplateStore: () => f
});
module.exports = __toCommonJS(chunk_rwz83c6a_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_q61tyrt3 = require("/$bunfs/root/chunk-q61tyrt3.js");
var import_crypto = require("crypto");
function f(d = { byId: import_chunk_q61tyrt3.O5t }) {
  let t = /* @__PURE__ */ new Map();
  return { accept({ template: r, digest: e, contentBase64: s }) {
    let o = d.byId(r);
    if (o === void 0) return { ok: false, kind: "refused", error: "template_refused: unknown_template" };
    if (!o.digests.some((i) => i.sha256 === e)) return { ok: false, kind: "refused", error: "template_refused: version_mismatch" };
    if (!import_chunk_xfj2cwfv.B5i.test(s) || s.length % 4 === 1) return { ok: false, kind: "invalid", error: "invalid_upload: bad_base64" };
    let a = Buffer.from(s, "base64");
    if (a.length > o.maxBytes) return { ok: false, kind: "refused", error: "template_refused: too_large" };
    if ((0, import_crypto.createHash)("sha256").update(a).digest("hex") !== e) return { ok: false, kind: "refused", error: "template_refused: digest_mismatch" };
    if (t.has(e)) return { ok: true, status: "already_stored", template: o, bytes: a.length };
    return t.set(e, a), { ok: true, status: "stored", template: o, bytes: a.length };
  }, bytesFor: (r) => {
    let e = t.get(r);
    return e === void 0 ? void 0 : Buffer.from(e);
  }, template: (r) => d.byId(r), size: () => t.size, clear: () => t.clear() };
}
