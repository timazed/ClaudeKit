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
var chunk_5agyr1mw_exports = {};
__export(chunk_5agyr1mw_exports, {
  FDa: () => FDa,
  H3r: () => H3r,
  KJs: () => KJs,
  M3r: () => M3r,
  VJs: () => VJs,
  nDt: () => nDt
});
module.exports = __toCommonJS(chunk_5agyr1mw_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_tvttgr51 = require("/$bunfs/root/chunk-tvttgr51.js");
var import_chunk_42nfpkzm = require("/$bunfs/root/chunk-42nfpkzm.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_6mhz7ytj = require("/$bunfs/root/chunk-6mhz7ytj.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_path = require("path");
var y = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ action: (0, import_chunk_rnm2beqc.df)(["proceed", "confirm", "blocked"]), billing_note: (0, import_chunk_rnm2beqc.we)().nullable().optional(), github_login: (0, import_chunk_rnm2beqc.we)().nullable().optional(), confirm: (0, import_chunk_rnm2beqc.on)({ title: (0, import_chunk_rnm2beqc.we)().optional(), body: (0, import_chunk_rnm2beqc.we)() }).nullable().optional(), blocked: (0, import_chunk_rnm2beqc.on)({ message: (0, import_chunk_rnm2beqc.we)(), action_url: (0, import_chunk_rnm2beqc.we)().nullable(), reason: (0, import_chunk_rnm2beqc.we)().optional() }).nullable().optional() }));
function d(n, e) {
  return { action: "blocked", blocked: { message: n, action_url: null, reason: e } };
}
async function M3r(n) {
  try {
    let r = await (0, import_chunk_6mhz7ytj.a4o)("preflight", { timeout: 5e3, credentials: n, headers: { [import_chunk_865at33z.fNe]: (0, import_chunk_f9x2f6cx.W)() } });
    if (!r.ok) switch (r.reason) {
      case "essential-traffic-only":
        return d("Ultrareview runs in a cloud session and is unavailable when essential-traffic-only mode is active.", "zdr");
      case "data-residency":
        return d("Ultrareview runs in a cloud session and is unavailable on third-party providers.", "data_residency");
      case "no-auth":
        return d("Ultrareview requires a Claude.ai account. Run /login to authenticate.", "no_oauth_token");
    }
    let i = y().safeParse(r.data);
    if (!i.success) return (0, import_chunk_w578pjby.t)(`fetchUltrareviewPreflight schema mismatch: ${i.error.message}`), (0, import_chunk_cqa9hrgx.l)("api_ultrareview_preflight", "schema_mismatch"), null;
    return (0, import_chunk_cqa9hrgx.u)("api_ultrareview_preflight"), i.data;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`fetchUltrareviewPreflight failed: ${r}`), (0, import_chunk_cqa9hrgx.l)("api_ultrareview_preflight", "request_failed"), null;
  }
}
var VJs = 15e4;
async function H3r(n) {
  let e = (0, import_path.resolve)((0, import_chunk_w578pjby.le)().cwd(), n), r = {}, i = await (0, import_chunk_xfj2cwfv.i5i)(e, VJs - 1, (a) => (r.realPath = a, "ask"));
  if (!i.ok) return r.realPath !== void 0 && !(0, import_chunk_xfj2cwfv.wPs)(e, r.realPath) ? { realPath: r.realPath } : { refused: i.error };
  let o;
  try {
    o = new TextDecoder("utf-8", { fatal: true }).decode(i.content);
  } catch {
    return "not_text";
  }
  if (o.includes("\0")) return "not_text";
  return o.trim() === "" ? "blank" : { path: i.resolvedPath, raw: i.content, sha256: (0, import_chunk_ccm69jjy.Je)(i.content), bytes: i.content.length, text: o };
}
async function nDt(n) {
  let e = await _(n);
  if (e === null) return null;
  return (0, import_chunk_cqa9hrgx.l)("ultrareview_launch", `hooks_blocked_by_${e.replace("env.", "")}`), `Your organization's managed settings (${e}) block the hook that sends a cloud review's findings back. Nothing was launched or billed. Ask your administrator to change that setting. If it was changed just now, try again in a new Claude Code session.`;
}
async function _(n = 1e4) {
  try {
    if ((0, import_chunk_sjqze7qg.ySe)()?.refuse_where_hooks_blocked === false) return null;
    let { kind: e } = (0, import_chunk_42nfpkzm.q2t)();
    if (e !== "org_login" && e !== "login") return null;
    if (await (0, import_chunk_5appeerh.me)((0, import_chunk_tvttgr51.SFe)(), n), !(0, import_chunk_xcgcdx61.nc)() || (0, import_chunk_xcgcdx61.uDr)() !== void 0 || (0, import_chunk_xcgcdx61.Si)() !== null) return null;
    let r = (0, import_chunk_2yx6c1y2.lKt)().settings;
    if (r === null || r.policyHelpers !== void 0) return null;
    if (r.disableAllHooks === true) return "disableAllHooks";
    if (r.allowManagedHooksOnly === true) return "allowManagedHooksOnly";
    let i = r.strictPluginOnlyCustomization;
    if (i === true || Array.isArray(i) && i.includes("hooks")) return "strictPluginOnlyCustomization";
    let o = ["CLAUDE_CODE_SAFE_MODE", "CLAUDE_CODE_SIMPLE"].find((a) => (0, import_chunk_69qhefwa.Ne)(r.env?.[a]));
    return o === void 0 ? null : `env.${o}`;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`ultrareview: the hooks check failed: ${e}`, { level: "error" }), null;
  }
}
var h = 3e3;
function b(n, e) {
  if (!n || !(0, import_chunk_cy0ck7w2.Ltn)(n) || !m(n.currency)) return null;
  if (n.is_enabled !== true) return 0;
  if (e === null || !m(e.currency)) return null;
  let { monthly_limit: r, used_credits: i } = n, o;
  if (r === null) o = 1 / 0;
  else if (typeof r === "number" && typeof i === "number") o = r - i;
  else return null;
  let a = Math.min(o, e.auto_reload_settings?.enabled === true ? 1 / 0 : e.amount);
  return Number.isFinite(a) ? Math.max(0, a) : null;
}
function m(n) {
  return typeof n === "string" && n.toUpperCase() === "USD";
}
async function KJs(n) {
  try {
    if ((0, import_chunk_sjqze7qg.lpr)() === null || (0, import_chunk_865at33z.ozn)() || (0, import_chunk_865at33z.tee)()) return null;
    let [e, r] = await (0, import_chunk_5appeerh.qt)(Promise.all([(0, import_chunk_cy0ck7w2.DO)(n), (0, import_chunk_bzyb60p0.ert)(n)]), h, "ultrareview: usage credits read timed out");
    return b(e?.extra_usage, r);
  } catch {
    return (0, import_chunk_w578pjby.t)("ultrareview: could not read usage credits left"), null;
  }
}
var v = { USD: 1, EUR: 1.176471, GBP: 1.333333, BRL: 0.181818, CAD: 0.714286, AUD: 0.645161, NZD: 0.588235, SGD: 0.769231 };
async function FDa(n) {
  let e = (0, import_chunk_sjqze7qg.lpr)();
  if ((0, import_chunk_865at33z.ozn)() || (0, import_chunk_865at33z.tee)()) {
    let o = "If this review reaches a spend limit set by your organization, it can stop early, with few or no findings, and what it has used stays billed.";
    try {
      let a = e === null ? null : (await (0, import_chunk_5appeerh.qt)((0, import_chunk_cy0ck7w2.DO)(n), h, "ultrareview: spend limit read timed out"))?.extra_usage, s = a?.currency?.toUpperCase() ?? "", c = v[s];
      if (e !== null && a?.is_enabled === true && c !== void 0 && typeof a.monthly_limit === "number" && typeof a.used_credits === "number") {
        let f = Math.max(0, a.monthly_limit - a.used_credits);
        if (f * c < e * 100) o = `${g(f, s)} is left of your monthly spend limit, which an organization admin can raise. A review usually uses about ${(0, import_chunk_bzyb60p0.Ui)(e * 100, "USD", "whole")}${s === "USD" ? "" : " USD"}. At that limit it stops, with few or no findings, and what it has used stays billed.`;
      }
    } catch {
      (0, import_chunk_w578pjby.t)("ultrareview: could not read the spend limit");
    }
    return { text: o, creditsFallShort: false };
  }
  let r = await KJs(n);
  if (e === null || r === null || r >= e * 100) return null;
  let i = (0, import_chunk_bzyb60p0.Ui)(e * 100, "USD", "whole");
  return { text: `${g(r, "USD")} of usage credits left. A review usually uses about ${i} and stops if credits run out.`, creditsFallShort: true };
}
function g(n, e) {
  return n < 100 ? `Less than ${(0, import_chunk_bzyb60p0.Ui)(100, e, "whole")}` : `About ${(0, import_chunk_bzyb60p0.Ui)(Math.floor(n / 100) * 100, e, "whole")}`;
}
