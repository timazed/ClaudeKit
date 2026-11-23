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
var chunk_gcpgg8e2_exports = {};
__export(chunk_gcpgg8e2_exports, {
  uUs: () => uUs,
  zpa: () => zpa
});
module.exports = __toCommonJS(chunk_gcpgg8e2_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_ndrgvsn7 = require("/$bunfs/root/chunk-ndrgvsn7.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_vyzg3yfa = require("/$bunfs/root/chunk-vyzg3yfa.js");
async function uUs(r) {
  try {
    if (!(0, import_chunk_9b4aq7fb.c8)() || (0, import_chunk_865at33z.pde)() || (0, import_chunk_xfj2cwfv.BS)() || !(0, import_chunk_865at33z.b)("tengu_memoized_newt", true)) return null;
    let e = await (0, import_chunk_865at33z.$9)(r);
    if (!(0, import_chunk_865at33z.cl)() || !(0, import_chunk_865at33z.yM)() || !(0, import_chunk_vyzg3yfa.QO)()) return null;
    let o = (0, import_chunk_9b4aq7fb.tL)();
    if (o?.createdBy === import_chunk_9b4aq7fb.GX.created_by) return null;
    return { reason: e ? "login_ended" : "no_login", organization: (0, import_chunk_bzyb60p0.Kdi)(o) };
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`Could not tell whether an Anthropic profile is billed: ${(0, import_chunk_jv7av99m.d)(e)}`, { level: "error" }), null;
  }
}
function zpa(r, e) {
  let o = false;
  async function n() {
    let l = await uUs(e);
    if (o || l?.reason !== "login_ended") return;
    o = true;
    try {
      (0, import_chunk_ndrgvsn7.$E)(`Warning: the claude.ai login on this machine has ended. This run uses the sign-in from ant auth login instead, and its usage is billed to ${l.organization}. Run claude auth login to sign in again. To keep using the sign-in from ant auth login without this warning, run claude auth logout. That removes the ended login and the other credentials Claude Code has saved, such as MCP server logins and plugin secrets.
`), (0, import_chunk_cqa9hrgx.u)("auth_profile_billing_notice", { reason: (0, import_chunk_78g0060s.S)("login_ended") });
    } catch (a) {
      (0, import_chunk_k449cc64.i)(a);
    }
  }
  n(), (0, import_chunk_865at33z.ypn)(r, () => void n());
}
