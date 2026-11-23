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
var chunk_cgeyzrew_exports = {};
__export(chunk_cgeyzrew_exports, {
  S2s: () => S2s,
  TWr: () => TWr
});
module.exports = __toCommonJS(chunk_cgeyzrew_exports);
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_s3qtr6en = require("/$bunfs/root/chunk-s3qtr6en.js");
function S2s(s, r = true) {
  let o = s.at(-1), a = r && o?.type === "assistant" && o.message.stop_reason === null;
  return (0, import_chunk_865at33z.Or)(a ? s.slice(0, -1) : [...s]);
}
async function TWr({ question: s, history: r, image: o, parentController: a, onProgress: l, getLiveMessages: i, isTurnInProgress: p, buildFallbackParams: u }) {
  let c = p?.() ?? true, n = (0, import_chunk_bzyb60p0.Ex)(), m = n ? { ...n, toolUseContext: { ...n.toolUseContext, abortController: (0, import_chunk_cbnm4p23._r)() }, ...i && { forkContextMessages: S2s(i(), c), advisorModel: n.toolUseContext.getAdvisorSetting() } } : u ? await u() : null;
  if (m === null) return { cancelled: false, response: { response: null, synthetic: false } };
  l({ status: "started" });
  let e = await (0, import_chunk_s3qtr6en.m9n)({ question: s, cacheSafeParams: m, parentController: a, onRetry: (t) => l({ status: "api_retry", attempt: t.retryAttempt, max_retries: t.maxRetries, retry_delay_ms: t.retryInMs, error_status: t.status ?? null }), threadHistory: false, turnInProgress: c, ...o && { image: { type: "image", source: { type: "base64", ...o } } }, ...r?.length && { history: r.map((t) => ({ question: t.question, response: t.response, ...t.fallback_notice && { fallbackNotice: t.fallback_notice } })) } });
  if (e.aborted || a.signal.aborted) return { cancelled: true };
  return { cancelled: false, response: { response: e.response && (0, import_chunk_p1ewvgeh.b_)(e.response), synthetic: e.synthetic, ...e.imageShown !== void 0 && { image_shown: e.imageShown }, ...e.refusalFallback && { refusal_fallback: { original_model: e.refusalFallback.originalModel, fallback_model: e.refusalFallback.fallbackModel, content: e.refusalFallback.content } } } };
}
