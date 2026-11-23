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
var chunk_6mhz7ytj_exports = {};
__export(chunk_6mhz7ytj_exports, {
  $Da: () => $Da,
  BDa: () => BDa,
  D3r: () => D3r,
  UDa: () => UDa,
  WDa: () => WDa,
  XJs: () => XJs,
  YJs: () => YJs,
  a4o: () => a4o,
  l4o: () => l4o,
  qJs: () => qJs
});
module.exports = __toCommonJS(chunk_6mhz7ytj_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_e4jbq56j = require("/$bunfs/root/chunk-e4jbq56j.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_nwk8fexj = require("/$bunfs/root/chunk-nwk8fexj.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
function s() {
  return (0, import_chunk_865at33z.b)("tengu_ancient_pudding", false);
}
async function a4o(e, r) {
  if (s()) {
    let n = await import_chunk_865at33z.zt.get(`/v1/code/ultrareview/${e}`, { ...r, auth: "teleport-org", validateStatus: (o) => o === 200 || o === 404 });
    if (!n.ok || n.status === 200) return n;
  }
  return import_chunk_865at33z.zt.get(`/v1/ultrareview/${e}`, { ...r, auth: "teleport-org" });
}
var g = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ reviews_used: (0, import_chunk_rnm2beqc.nr)(), reviews_limit: (0, import_chunk_rnm2beqc.nr)(), reviews_remaining: (0, import_chunk_rnm2beqc.nr)(), is_overage: (0, import_chunk_rnm2beqc.Ci)() }));
async function _(e) {
  if (s() && (0, import_chunk_865at33z.ake)()) return null;
  try {
    let n = await a4o("quota", { timeout: 3e3, credentials: e });
    if (!n.ok) return (0, import_chunk_cqa9hrgx.l)("api_ultrareview_quota", "request_failed"), null;
    let o = g().safeParse(n.data);
    if (!o.success) return (0, import_chunk_w578pjby.t)(`fetchUltrareviewQuota schema mismatch: ${o.error.message}`), (0, import_chunk_cqa9hrgx.l)("api_ultrareview_quota", "schema_mismatch"), null;
    return (0, import_chunk_cqa9hrgx.u)("api_ultrareview_quota"), o.data;
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`fetchUltrareviewQuota failed: ${n}`), (0, import_chunk_cqa9hrgx.l)("api_ultrareview_quota", "request_failed"), null;
  }
}
class c {
  quota = void 0;
  fetch = void 0;
}
var S = new import_chunk_2904xtvq.j(() => new c());
function m() {
  return S.of((0, import_chunk_f9x2f6cx.N)().host);
}
async function qJs(e) {
  let r = m();
  r.fetch ??= _(e), r.quota = await r.fetch;
}
function D3r(e) {
  let r = m();
  if (r.quota === void 0) return qJs(e), null;
  return r.quota;
}
var h = "tengu_ultrareview_awareness";
function R() {
  return (0, import_chunk_865at33z.b)(h, null) ?? {};
}
function l4o(e) {
  if (!(0, import_chunk_sjqze7qg.D6)()) return false;
  if (!(0, import_chunk_2nv4wrez.Rn)("allow_remote_sessions")) return false;
  return R()[e] === true;
}
function YJs() {
  return (0, import_chunk_865at33z.ge)().hasRunUltrareview === true;
}
function $Da(e) {
  (0, import_chunk_865at33z.Ke)((r) => r.hasRunUltrareview ? r : { ...r, hasRunUltrareview: true }, e);
}
function E(e) {
  (0, import_chunk_y53wbr8a.a)("tengu_ultrareview_awareness_shown", { surface: (0, import_chunk_78g0060s.f)(e) });
}
function XJs(e) {
  return `${e} free ${e === 1 ? "review" : "reviews"} left`;
}
function UDa(e) {
  if (e !== "ultrareview" && e !== import_chunk_nwk8fexj.oM) return "";
  if (!l4o("slash_menu")) return "";
  let r = D3r();
  if (r === null || r.reviews_remaining <= 0) return "";
  let n = r.reviews_remaining;
  return e === "ultrareview" ? `${n} free left \xB7 ` : `${n} free /ultrareview \xB7 `;
}
var U = "ultrareview-prose-pointer", C = "ultrareview-post-commit", y = 5;
function d(e, r, n, o, w) {
  if (!l4o(e)) return null;
  if (YJs()) return null;
  if ((0, import_chunk_e4jbq56j.zte)(r) >= y) return null;
  if ((0, import_chunk_e4jbq56j.f6)(r) === 0) return null;
  (0, import_chunk_e4jbq56j.ctt)(r, o), E(e);
  let i = D3r(w), v = i !== null && i.reviews_remaining > 0 ? ` \u2014 ${XJs(i.reviews_remaining)}` : "";
  return n(v);
}
function BDa(e, r) {
  return d("prose_pointer", U, (n) => `Tip: For a deeper cloud-based review, try /ultrareview next time${n}.`, e, r);
}
function WDa(e) {
  return d("post_commit", C, (r) => `Tip: Run /ultrareview before you push to catch bugs with a cloud-based multi-agent review${r}.`, e, void 0);
}
