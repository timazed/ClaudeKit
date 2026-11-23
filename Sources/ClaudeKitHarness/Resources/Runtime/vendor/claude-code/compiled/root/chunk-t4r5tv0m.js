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
var chunk_t4r5tv0m_exports = {};
__export(chunk_t4r5tv0m_exports, {
  EWs: () => EWs,
  KOt: () => KOt,
  lmt: () => lmt,
  vWs: () => vWs
});
module.exports = __toCommonJS(chunk_t4r5tv0m_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_5m9vge4h = require("/$bunfs/root/chunk-5m9vge4h.js");
var import_chunk_mmvajxhx = require("/$bunfs/root/chunk-mmvajxhx.js");
function EWs(i) {
  if (i >= 70) return "horizontal";
  return "compact";
}
function lmt(i, r) {
  if ((0, import_chunk_mgh1y10w.oe)(i) <= r) return i;
  let t = "/", n = "\u2026", e = 1, o = 1, a = i.split(t), l = a[0] || "", c = a.at(-1) || "", m = (0, import_chunk_mgh1y10w.oe)(l), d = (0, import_chunk_mgh1y10w.oe)(c);
  if (a.length === 1) return (0, import_chunk_f64qna2j.Tt)(i, r);
  if (l === "" && e + o + d >= r) return `${t}${(0, import_chunk_f64qna2j.Tt)(c, Math.max(1, r - o))}`;
  if (l !== "" && e * 2 + o + d >= r) return `${n}${t}${(0, import_chunk_f64qna2j.Tt)(c, Math.max(1, r - e - o))}`;
  if (a.length === 2) {
    let u = r - e - o - d;
    return `${(0, import_chunk_f64qna2j.uB)(l, u)}${n}${t}${c}`;
  }
  let p = r - m - d - e - 2 * o;
  if (p <= 0) {
    let u = Math.max(0, r - d - e - 2 * o);
    return `${(0, import_chunk_f64qna2j.uB)(l, u)}${t}${n}${t}${c}`;
  }
  let g = [];
  for (let u = a.length - 2; u > 0; u--) {
    let f = a[u];
    if (f && (0, import_chunk_mgh1y10w.oe)(f) + o <= p) g.unshift(f), p -= (0, import_chunk_mgh1y10w.oe)(f) + o;
    else break;
  }
  if (g.length === 0) return `${l}${t}${n}${t}${c}`;
  return `${l}${t}${n}${t}${g.join(t)}${t}${c}`;
}
function KOt() {
  let i = import_chunk_c203g5kd.s.DEMO_VERSION ?? `${{ ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION}${(0, import_chunk_mmvajxhx.Qle)()}${(0, import_chunk_f9x2f6cx.Hn)() ? ` (${import_chunk_mmvajxhx.bvo})` : ""}`, r = (0, import_chunk_f9x2f6cx.sNr)(), t = import_chunk_c203g5kd.s.DEMO_VERSION ? "/code/claude" : (0, import_chunk_f9x2f6cx.Hn)() && ((0, import_chunk_865at33z.Lt)("tengu_violin_wood", false) || (0, import_chunk_865at33z.Lt)(import_chunk_5m9vge4h.wxi, false)) ? (0, import_chunk_n2dbhmj2.os)((0, import_chunk_f9x2f6cx.Te)()) : (0, import_chunk_2yx6c1y2.Po)((0, import_chunk_18rsj2ts.pe)()), n = import_chunk_c203g5kd.s.CLAUDE_CODE_HIDE_CWD ? "" : r ? `${t} in ${r.replace(/^https?:\/\//, "")}` : t, e = (0, import_chunk_zhr7rpv7.ve)(), o = e !== "firstParty" ? import_chunk_zhr7rpv7.tx[e] : (0, import_chunk_865at33z.Rt)() ? (0, import_chunk_865at33z.SRs)() : "API Usage Billing", a = (0, import_chunk_2yx6c1y2.vt)().agent;
  return { version: i, cwd: n, billingType: o, agentName: a };
}
function vWs(i, r, t, n) {
  if ((0, import_chunk_mgh1y10w.oe)(n) + 3 + (0, import_chunk_mgh1y10w.oe)(r) > t) return { shouldSplit: true, truncatedModel: (0, import_chunk_f64qna2j.Us)(i, t), truncatedBilling: (0, import_chunk_f64qna2j.Us)(r, t) };
  return { shouldSplit: false, truncatedModel: (0, import_chunk_f64qna2j.Us)(i, Math.max(t - (0, import_chunk_mgh1y10w.oe)(r) - 3, 10)), truncatedBilling: r };
}
