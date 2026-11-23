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
var chunk_1dd5bdvs_exports = {};
__export(chunk_1dd5bdvs_exports, {
  JXt: () => JXt,
  V8r: () => V8r,
  jtt: () => jtt
});
module.exports = __toCommonJS(chunk_1dd5bdvs_exports);
var import_chunk_mha8pjbc = require("/$bunfs/root/chunk-mha8pjbc.js");
var import_chunk_qtg8rez4 = require("/$bunfs/root/chunk-qtg8rez4.js");
var import_chunk_s12kntv9 = require("/$bunfs/root/chunk-s12kntv9.js");
async function jtt(t, i, a, s) {
  let e = await (0, import_chunk_mha8pjbc.l1)(t, i, a, { gatePublicRead: false, credentials: s });
  if (e.err !== null) {
    if (e.errorCode === "boot_404") return { ok: false, reason: (0, import_chunk_mha8pjbc.IWt)(e) ? "never_published" : "not_found" };
    if ((0, import_chunk_mha8pjbc.a4)(e)) return { ok: false, reason: "other_org", err: e.err };
    return { ok: false, reason: "failed", err: e.err, errorCode: e.errorCode };
  }
  if (e.assetToken === void 0) return { ok: false, reason: "public_outside_org" };
  let r = typeof e.data.title === "string" ? e.data.title : void 0, o = r !== void 0 ? (0, import_chunk_s12kntv9.S_)(r) ?? void 0 : void 0, n = (0, import_chunk_qtg8rez4.eme)({ role: (0, import_chunk_qtg8rez4.Zln)(e.data.perm?.role) });
  return { ok: true, ...o !== void 0 && { title: o }, ...n !== void 0 && { owned: n } };
}
var JXt = 15e3;
function V8r(t) {
  switch (t.reason) {
    case "public_outside_org":
      return "Couldn't open that artifact. It's public and from outside your organization.";
    case "other_org":
      return "Couldn't open that artifact. It's in another organization. Run /login if it's one of yours.";
    case "never_published":
      return "Couldn't open that artifact. Nothing has been published to it yet.";
    case "not_found":
      return "Couldn't open that artifact. It may have been deleted, or it isn't shared with you.";
    case "failed":
      return t.errorCode === void 0 || t.errorCode === "boot_request_error" ? "Couldn't check that artifact, so it wasn't opened. Try again." : "Couldn't check that artifact, so it wasn't opened.";
  }
}
