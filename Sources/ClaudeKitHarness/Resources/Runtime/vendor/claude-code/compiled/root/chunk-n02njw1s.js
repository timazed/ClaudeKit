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
var chunk_n02njw1s_exports = {};
__export(chunk_n02njw1s_exports, {
  Fqe: () => Fqe,
  NZs: () => NZs,
  R3o: () => R3o,
  nrr: () => nrr,
  trr: () => trr,
  x3o: () => x3o
});
module.exports = __toCommonJS(chunk_n02njw1s_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_9xz0nsgn = require("/$bunfs/root/chunk-9xz0nsgn.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var R = /* @__PURE__ */ new Set(["fetch_error", "unknown", "org_level_disabled_until"]), D = "tengu_eager_thimble", P = 5e3;
function M() {
  return (0, import_chunk_zhr7rpv7.vr)().providerCache.validatedModels;
}
async function R3o(e, o) {
  let r = e.trim();
  if (!r) return { valid: false, error: "Model name cannot be empty" };
  if (!(0, import_chunk_865at33z.wo)(r, o.skipEntitlementDenyOverlay || (0, import_chunk_t7fzcstv.bt)() ? { skipEntitlementDenyOverlay: true } : void 0)) return { valid: false, error: `Model '${(0, import_chunk_865at33z.Mm)(r)}' is not in the list of available models`, notAllowed: true };
  if (!o.forceServerProbe) {
    let y = r.toLowerCase();
    if (import_chunk_zmb62hr5.Ece.includes(y)) return { valid: true };
    if (r === import_chunk_c203g5kd.s.ANTHROPIC_CUSTOM_MODEL_OPTION) return { valid: true };
    if ((0, import_chunk_gq1dr8pm.KIi)(r) && (0, import_chunk_865at33z.M7e)()?.picker.options.some((p) => p.model.trim() === r)) return { valid: true };
    if (M().has(r)) return { valid: true };
  }
  let n = (0, import_chunk_zhr7rpv7.ve)(), c = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL, a = c && URL.canParse(c) ? new URL(c).hostname : void 0, g = (0, import_chunk_zhr7rpv7.ya)() || a !== void 0 && (a === "anthropic.com" || a.endsWith(".anthropic.com") || import_chunk_ephf358x.Jxt.some((y) => new URL(y).hostname === a));
  if (!(n === "gateway" || n === "firstParty" && !g) && /[\s\p{Cc}\p{Cf}]/u.test(r)) return { valid: false, error: `Model '${(0, import_chunk_865at33z.Mm)(r)}' not found`, notFound: true };
  if (o.serverProbe === false || (0, import_chunk_t7fzcstv.bt)()) return { valid: true };
  let f;
  if (!(0, import_chunk_865at33z.b)(D, false)) f = await A(r, o);
  else {
    let y = Date.now(), { result: p, hedged: h } = await (0, import_chunk_865at33z.RCt)({ first: (0, import_chunk_865at33z.X7e)(async (v) => ({ second: false, result: await A(r, o, v) })), send: async (v) => ({ second: true, result: await A(r, o, v) }), isAnswer: (v) => !v.second || v.result.valid, delayMs: P, stillWanted: () => !o.signal?.aborted });
    if (f = p.result, h) {
      let v = { duration_ms: Date.now() - y };
      if (p.second) (0, import_chunk_cqa9hrgx.u)("model_check_second_request", v);
      else if (f.valid) (0, import_chunk_cqa9hrgx.l)("model_check_second_request", "first_accepted", v);
      else (0, import_chunk_cqa9hrgx.m)("model_check_second_request", "none_accepted", v);
    }
  }
  if (f.valid) M().add(r);
  return f;
}
async function A(e, o, r) {
  try {
    let n = () => (0, import_chunk_bzyb60p0.QD)({ model: e, max_tokens: 1, maxRetries: 0, querySource: "model_validation", resendWithoutRefusedContext1m: true, credentials: o.credentials, timeout: o.timeout, signal: o.signal && r ? AbortSignal.any([o.signal, r]) : r ?? o.signal, messages: [{ role: "user", content: [{ type: "text", text: "Hi", cache_control: { type: "ephemeral" } }] }] });
    return await (o.automatic ? n() : (0, import_chunk_xfj2cwfv.Rmn)(n)), { valid: true };
  } catch (n) {
    return k(n, e);
  }
}
var O = 15e3;
async function C(e, o) {
  let r = (0, import_chunk_zhr7rpv7.vr)(), n = r.sessionModelDenyReprobe.generation, c = new AbortController(), a = await (0, import_chunk_5appeerh.me)(R3o(e, { forceServerProbe: o.forceServerProbe, skipEntitlementDenyOverlay: o.skipEntitlementDenyOverlay, automatic: o.automatic, credentials: o.credentials, timeout: o.deadlineMs, signal: c.signal }), o.deadlineMs);
  if (a === void 0) return c.abort(), { probe: void 0, accountChanged: false };
  let g = r.sessionModelDenyReprobe.generation !== n;
  if (g) r.providerCache.validatedModels.delete(e.trim());
  return { probe: a, accountChanged: g };
}
async function NZs(e, o, r) {
  if (r === void 0 || o.serverProbe === false) return R3o(e, o);
  let { probe: n, accountChanged: c } = await C(e, { ...o, deadlineMs: r });
  if (n === void 0 || c) {
    let a = (0, import_chunk_865at33z.zZ)("model");
    return { valid: false, error: `Couldn't confirm model "${(0, import_chunk_865at33z.Mm)(e)}" with the API. ${a ? `Try again, or run ${a} to see available models.` : "Try again."}`, retryable: true, noAnswer: true };
  }
  return n;
}
function Fqe(e) {
  let o = e.toLowerCase().trim();
  return (0, import_chunk_zmb62hr5.H6e)(o);
}
function x3o(e) {
  return Fqe(e) || (0, import_chunk_865at33z.XRr)(e) ? (0, import_chunk_865at33z.jt)(e) : e;
}
async function trr(e, o, r) {
  try {
    if (!(0, import_chunk_865at33z.wo)(e, { skipEntitlementDenyOverlay: true })) return { outcome: "denied_by_policy" };
    if ((0, import_chunk_t7fzcstv.bt)()) {
      if (Fqe(e)) return _("Use a full model ID instead.");
      return S(e), { outcome: "overturned" };
    }
    let n = x3o(e);
    if (Fqe(n)) return { outcome: "denied_by_policy" };
    let c = (0, import_chunk_zhr7rpv7.vr)(), { confirmedEntitlementDenies: a } = c.providerCache, g = (0, import_chunk_865at33z.Bxe)(n), E = a.get(g);
    if (E !== void 0 && Date.now() - E < import_chunk_zhr7rpv7.E4n) return { outcome: "denied_by_server" };
    let { probe: f, accountChanged: y } = await C(n, { credentials: r, deadlineMs: O, forceServerProbe: true, skipEntitlementDenyOverlay: true, automatic: true });
    if (f === void 0) return (0, import_chunk_w578pjby.t)("[model-access] stale-deny re-probe timed out", { level: "warn" }), _();
    if (!f.valid && !f.notFound && !f.permissionDenied) return _(y ? void 0 : f.error);
    if (y) return (0, import_chunk_w578pjby.t)("[model-access] stale-deny re-probe answered after the account changed; recording nothing"), { outcome: f.valid ? "overturned" : "denied_by_server" };
    if (!f.valid) {
      let p = Date.now();
      a.set(g, p);
      for (let h of (0, import_chunk_865at33z.Vxe)()) if ((0, import_chunk_865at33z.KRr)(h, e)) a.set((0, import_chunk_865at33z.Bxe)(h.apiName), p);
      return { outcome: "denied_by_server" };
    }
    a.delete(g), S(e);
    try {
      await F(e, o);
    } catch (p) {
      if ((0, import_chunk_jv7av99m.w)(p) !== void 0) (0, import_chunk_w578pjby.t)(`[model-access] stale-deny eviction failed: ${(0, import_chunk_jv7av99m.d)(p)}`, { level: "warn" });
      else (0, import_chunk_k449cc64.i)(p);
    }
    return (0, import_chunk_9xz0nsgn.h4e)(o, r), { outcome: "overturned" };
  } catch (n) {
    return (0, import_chunk_k449cc64.i)(n), _();
  }
}
function S(e) {
  let { overturnedEntitlementDenies: o } = (0, import_chunk_zhr7rpv7.vr)().providerCache, r = Date.now();
  for (let n of (0, import_chunk_865at33z.Vxe)()) if ((0, import_chunk_865at33z.KRr)(n, e)) o.set((0, import_chunk_865at33z.Bxe)(n.apiName), r);
}
async function nrr(e, o, r) {
  return (await trr(e, o, r)).outcome;
}
async function F(e, o) {
  await (0, import_chunk_865at33z.Ke)((r) => {
    let n = r.modelAccessCache;
    if (!n?.length) return r;
    let c = n.filter((a) => {
      if (a == null || typeof a !== "object" || typeof a.apiName !== "string" || typeof a.entitled !== "boolean") return true;
      return !(0, import_chunk_865at33z.KRr)(a, e);
    });
    return c.length === n.length ? r : { ...r, modelAccessCache: c };
  }, o);
}
function k(e, o) {
  if (e instanceof import_chunk_jv7av99m.NPt) {
    let r = (0, import_chunk_bzyb60p0.oZr)(o), n = r ? `. Try '${(0, import_chunk_865at33z.Mm)(r)}' instead` : "";
    return { valid: false, error: `Model '${(0, import_chunk_865at33z.Mm)(o)}' not found${n}`, notFound: true, ...(0, import_chunk_865at33z.edt)(e) && { serverRefusedModel: true } };
  }
  if (e instanceof import_chunk_jv7av99m.Nt) {
    if (e instanceof import_chunk_jv7av99m.LPt) return { valid: false, error: "Authentication failed. Please check your API credentials.", authFailed: true, ...(0, import_chunk_865at33z.uGn)(e) && { oauthOrgNotAllowed: true } };
    if (e instanceof import_chunk_jv7av99m.em) return { valid: false, error: "Network error. Please check your internet connection.", retryable: true, noAnswer: true };
    let r = e.error;
    if (r && typeof r === "object" && "type" in r && r.type === "not_found_error" && "message" in r && typeof r.message === "string" && r.message.includes("model:")) return { valid: false, error: `Model '${(0, import_chunk_865at33z.Mm)(o)}' not found`, notFound: true, serverRefusedModel: true };
    if ((0, import_chunk_865at33z.k7e)(e)) return { valid: false, error: `Model '${(0, import_chunk_865at33z.Mm)(o)}' isn't available for your account`, permissionDenied: true, serverRefusedModel: true };
    let n = r?.error?.details, c = e.status === 429 && n?.error_code === "credits_required", a = e.headers?.get?.(import_chunk_gq1dr8pm.vin), g = c && !a && !R.has(e.headers?.get?.(import_chunk_gq1dr8pm.a0e) ?? n?.disabled_reason ?? ""), E = (0, import_chunk_kx2fp6pc.$4t)((0, import_chunk_kx2fp6pc.wn)((0, import_chunk_865at33z.Qwe)(e))).replace(/[.!?\u2026]+$/, "");
    if ((0, import_chunk_865at33z.H9)(e) || e.status === 403 && (0, import_chunk_xfj2cwfv.aze)(e.headers?.get?.("x-amzn-errortype") ?? void 0, e.message)) return { valid: false, error: `API error: ${E} \xB7 model not changed`, authFailed: true };
    let f = I(e.status) || e.status === 407 && Boolean((0, import_chunk_3jjr3wje.tEe)()) || e.status === 403 && (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE || (0, import_chunk_zhr7rpv7.jn)() && !(0, import_chunk_865at33z.eg)() && (0, import_chunk_865at33z.U4)());
    return { valid: false, error: `API error: ${E} \xB7 model not changed`, ...f ? { retryable: true } : { rejected: true }, ...(0, import_chunk_865at33z.uGn)(e) && { oauthOrgNotAllowed: true }, ...(e.status === 408 || (e.status ?? 0) >= 500) && { serverError: true }, ...e.status === 429 && { rateLimited: true }, ...c && { creditsRequired: true }, ...e.status === 400 && (0, import_chunk_865at33z._zt)(e) && { sessionModeRefused: true }, ...e.status === 400 && (0, import_chunk_865at33z.eRl)(e) && { needsAutoMode: true }, ...e.status === 429 && !c && (a === "five_hour" || a === "seven_day") && { sharedLimitReached: true }, ...g && { serverRefusedModel: true } };
  }
  return { valid: false, error: `Unable to validate model: ${(0, import_chunk_kx2fp6pc.$4t)((0, import_chunk_kx2fp6pc.wn)((0, import_chunk_jv7av99m.d)(e)))}`, retryable: true };
}
function I(e) {
  return e === void 0 || e === 408 || e === 409 || e === 429 || e >= 500;
}
function _(e = "Try again.") {
  return { outcome: "probe_failed", error: `Couldn't check whether your account can use this model. ${e}` };
}
