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
var chunk_478yxt5w_exports = {};
__export(chunk_478yxt5w_exports, {
  KAe: () => KAe,
  O7: () => O7,
  Tje: () => Tje
});
module.exports = __toCommonJS(chunk_478yxt5w_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
function KAe(e, r = false, d = false) {
  let l = true;
  try {
    if ((0, import_chunk_865at33z.qU)(e ?? import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL)) return true;
    if ((0, import_chunk_f9x2f6cx.Y)()) return false;
    let { machine: S, slot: c } = (0, import_chunk_tvttgr51.EIo)(), a = (0, import_chunk_xcgcdx61.sxt)(S);
    l = a !== null;
    let h = a === null && ((0, import_chunk_2yx6c1y2.Kb)() === "helper" && !(0, import_chunk_2yx6c1y2.sKt)() || (0, import_chunk_xcgcdx61.pta)() && (e !== void 0 || (0, import_chunk_xcgcdx61.sxt)(c ?? null) === null)), u = a ?? (h ? null : (0, import_chunk_xcgcdx61.fta)());
    if (l = u !== null, u === null) return false;
    let g = u.env ?? {}, m = (0, import_chunk_zhr7rpv7.T4n)((A) => A === "ANTHROPIC_BASE_URL" ? void 0 : (0, import_chunk_khxw3ng0.Zi)(g, A)), o = e ?? import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL, t = o && !(0, import_chunk_tvttgr51.mJe)(o) ? o : R(c?.env ?? {}, d) || (m ? void 0 : R(g, d) || o);
    if (t ? (0, import_chunk_tvttgr51.mJe)(t) : !m) return false;
    let p = (0, import_chunk_ephf358x.cn)(), f = URL.parse(p.BASE_API_URL)?.origin;
    if (p.OAUTH_FILE_SUFFIX !== "-local-oauth" && f && f !== "null" && t && t === o && URL.parse(t)?.origin === f) return false;
    let { source: n } = (0, import_chunk_865at33z.xa)(), _ = n === "CLAUDE_CODE_OAUTH_TOKEN" && (0, import_chunk_865at33z.$R)() !== "env";
    if (!r && !_ && !(0, import_chunk_f9x2f6cx.QM)() && !(0, import_chunk_865at33z.aoe)() && n !== "claude.ai" && n !== "apiKeyHelper" && n !== "none" || (0, import_chunk_865at33z.$7e)() || (0, import_chunk_865at33z.cc)()) return false;
    return (0, import_chunk_42nfpkzm.Mp)(), (0, import_chunk_xcgcdx61.Si)() === null;
  } catch {
    return (0, import_chunk_k449cc64.i)(Error("Stored login check failed")), l;
  }
}
function Tje(e = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL) {
  try {
    if ((0, import_chunk_xcgcdx61.sxt)((0, import_chunk_tvttgr51.EIo)().machine) !== null) return "admin";
    return (0, import_chunk_865at33z.qU)(e) ? "organization_gateway" : (0, import_chunk_xcgcdx61.mta)() ?? "admin";
  } catch {
    return (0, import_chunk_k449cc64.i)(Error("Stored login refusal reason failed")), "admin";
  }
}
async function E(e) {
  try {
    await (0, import_chunk_5appeerh.Tn)((0, import_chunk_tvttgr51.SFe)(), e, () => Error("Stored login settle aborted"));
  } catch (r) {
    if (!e.aborted) throw r;
  }
}
async function O7(e) {
  try {
    let r = e?.url ?? (e?.isFilesDial ? (0, import_chunk_ephf358x.cn)().BASE_API_URL : void 0);
    if (KAe(r, true, e?.isFilesDial ?? false) && !(0, import_chunk_xcgcdx61.nc)() && (e !== void 0 || (0, import_chunk_865at33z.Rt)())) await (e?.signal ? E(e.signal) : (0, import_chunk_tvttgr51.SFe)());
  } catch {
    (0, import_chunk_k449cc64.i)(Error("Stored login settle failed"));
  }
}
function R(e, r) {
  return (0, import_chunk_khxw3ng0.Zi)(e, "ANTHROPIC_BASE_URL")?.trim() || (r ? (0, import_chunk_khxw3ng0.Zi)(e, "CLAUDE_CODE_API_BASE_URL")?.trim() : void 0);
}
