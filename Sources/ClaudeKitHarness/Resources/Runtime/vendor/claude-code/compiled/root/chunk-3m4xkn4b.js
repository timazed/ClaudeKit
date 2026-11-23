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
var chunk_3m4xkn4b_exports = {};
__export(chunk_3m4xkn4b_exports, {
  $0e: () => $0e,
  BFi: () => BFi,
  Q_s: () => Q_s,
  Sgl: () => Sgl,
  Z_s: () => Z_s
});
module.exports = __toCommonJS(chunk_3m4xkn4b_exports);
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_ac8t6db0 = require("/$bunfs/root/chunk-ac8t6db0.js");
var import_chunk_ww0784kh = require("/$bunfs/root/chunk-ww0784kh.js");
function Q_s(e) {
  return `This cloud session's network access follows the "Allow network egress" setting for Cowork in claude.ai, not an environment allowlist. To allow direct artifact reads here, an organization admin (or the user, on an individual plan) can turn that setting on and either allow all domains or add ${e} to its additional allowed domains.`;
}
class n {
  availability = () => false;
  register(e) {
    this.availability = e;
  }
  isAvailable() {
    return this.availability();
  }
}
var Z_s = new n();
function Sgl(e) {
  Z_s.register(e);
}
function BFi() {
  return Z_s.isAvailable() ? `read it with the ${import_chunk_r8478wtb.Vt} tool (action: "read", url)` : `${import_chunk_ww0784kh.Gn} the url`;
}
function $0e() {
  let e = BFi(), o = (0, import_chunk_r8478wtb.Ws)(), i = (0, import_chunk_0rkwgmhx.se)().contentHostEgressDenied.has(o) && !((0, import_chunk_ac8t6db0.Jpe)() && !(0, import_chunk_ac8t6db0.r9)(import_chunk_865at33z.FN)), t = o === "staging" ? "*.frame.staging.claudeusercontent.com" : "*.frame.claudeusercontent.com";
  return { readRemedy: e, forceAdvisory: " force:true discards that newer version \u2014 someone's save from the page itself, or another session's publish \u2014 so use it only when the user explicitly asks to overwrite.", contentReadsBlocked: i ? (0, import_chunk_3t7ve0wy.MB)() ? `The artifact content host is blocked from this session, so the live version can be neither read nor handed over here. ${Q_s(t)} Tell the user, and publish again only once you can build on the live version.` : `This environment's network allowlist blocks the artifact content host, so the live version can be neither read nor handed over here until ${t} is added at environment settings \u2192 Code \u2192 Network access \u2192 Custom \u2192 Allowed domains. An admin can add the same entry to a shared environment from admin settings \u2192 Cloud environments; sessions that run in that environment get the access. Tell the user, and publish again only once you can build on the live version.` : null };
}
