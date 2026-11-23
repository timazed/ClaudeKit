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
var chunk_9xz0nsgn_exports = {};
__export(chunk_9xz0nsgn_exports, {
  $Jt: () => $Jt,
  Hsr: () => Hsr,
  J8o: () => J8o,
  MJl: () => MJl,
  g4e: () => g4e,
  h4e: () => h4e,
  xii: () => xii,
  yXr: () => yXr
});
module.exports = __toCommonJS(chunk_9xz0nsgn_exports);
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_ephf358x = require("/$bunfs/root/chunk-ephf358x.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_h4xqg980 = require("/$bunfs/root/chunk-h4xqg980.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_np189awg = require("/$bunfs/root/chunk-np189awg.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_trq47kfh = require("/$bunfs/root/chunk-trq47kfh.js");
var import_chunk_ge3qft6b = require("/$bunfs/root/chunk-ge3qft6b.js");
var import_chunk_n69k58aw = require("/$bunfs/root/chunk-n69k58aw.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_3v09xgvh = require("/$bunfs/root/chunk-3v09xgvh.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_rnm2beqc = require("/$bunfs/root/chunk-rnm2beqc.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_tb84sczh = require("/$bunfs/root/chunk-tb84sczh.js");
var oe = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_rnm2beqc.nr)().nonnegative().max(import_chunk_h4xqg980.p_n);
  return (0, import_chunk_rnm2beqc.on)({ input_tokens: e, output_tokens: e, prompt_cache_write_tokens: e, prompt_cache_write_1h_tokens: e, prompt_cache_read_tokens: e });
});
function ne(e) {
  return { inputTokens: e.input_tokens, outputTokens: e.output_tokens, promptCacheWriteTokens: e.prompt_cache_write_tokens, promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens, promptCacheReadTokens: e.prompt_cache_read_tokens };
}
var J8o = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ client_data: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.vf)()).nullish(), additional_model_options: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ model: (0, import_chunk_rnm2beqc.we)(), name: (0, import_chunk_rnm2beqc.we)(), description: (0, import_chunk_rnm2beqc.we)(), disabled_reason: (0, import_chunk_rnm2beqc.we)().nullish() }).transform(({ model: e, name: o, description: n, disabled_reason: c }) => {
  let g = (0, import_chunk_zhr7rpv7.PB)((0, import_chunk_zmb62hr5.ur)(e)), r = g ? (0, import_chunk_865at33z.Y_)(e) : null, h = n;
  if (g && r && c == null) {
    let d = n ? n.startsWith(r) ? n : `${r} \xB7 ${n}` : r, S = (0, import_chunk_865at33z.XCo)(e);
    h = S && !(0, import_chunk_865at33z.Rt)() && !d.includes("per Mtok") ? `${d} \xB7 ${S}` : d;
  }
  return { value: e, label: c != null ? `${o} (disabled)` : o, description: c ? h ? `${h} \xB7 ${c}` : c : h, ...c != null && { disabled: true } };
})).nullish(), additional_model_costs: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.on)({ input_tokens: (0, import_chunk_rnm2beqc.nr)(), output_tokens: (0, import_chunk_rnm2beqc.nr)(), prompt_cache_write_tokens: (0, import_chunk_rnm2beqc.nr)(), prompt_cache_write_1h_tokens: (0, import_chunk_rnm2beqc.nr)().nullish(), prompt_cache_read_tokens: (0, import_chunk_rnm2beqc.nr)(), web_search_requests: (0, import_chunk_rnm2beqc.nr)().nullish(), long_prompt: oe().extend({ above_prompt_tokens: (0, import_chunk_rnm2beqc.nr)().int().positive().safe() }).nullish().catch(void 0), fast: oe().nullish().catch(void 0) }).transform((e) => ({ inputTokens: e.input_tokens, outputTokens: e.output_tokens, promptCacheWriteTokens: e.prompt_cache_write_tokens, ...e.prompt_cache_write_1h_tokens != null && { promptCacheWrite1hTokens: e.prompt_cache_write_1h_tokens }, promptCacheReadTokens: e.prompt_cache_read_tokens, ...e.web_search_requests != null && { webSearchRequests: e.web_search_requests }, ...e.long_prompt != null && { longPrompt: { abovePromptTokens: e.long_prompt.above_prompt_tokens, ...ne(e.long_prompt) } }, ...e.fast != null && { fast: ne(e.fast) } }))).nullish(), model_access: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ api_name: (0, import_chunk_rnm2beqc.we)(), entitled: (0, import_chunk_rnm2beqc.Ci)(), max_effort_level: (0, import_chunk_rnm2beqc.we)().nullish() }).transform(({ api_name: e, entitled: o, max_effort_level: n }) => ({ apiName: e, entitled: o, ...n != null && { maxEffortLevel: n } }))).nullish(), org_model_default: (0, import_chunk_rnm2beqc.on)({ name: (0, import_chunk_rnm2beqc.we)(), updated_at: (0, import_chunk_rnm2beqc.we)(), data_source: (0, import_chunk_rnm2beqc.we)(), override_user_selection: (0, import_chunk_rnm2beqc.Ci)(), default_effort_level: (0, import_chunk_rnm2beqc.we)().nullish(), override_user_effort: (0, import_chunk_rnm2beqc.Ci)().nullish() }).nullish(), oauth_account: (0, import_chunk_rnm2beqc.on)({ account_uuid: (0, import_chunk_rnm2beqc.we)().nullish(), account_email: (0, import_chunk_rnm2beqc.we)().nullish(), organization_uuid: (0, import_chunk_rnm2beqc.we)().nullish(), organization_name: (0, import_chunk_rnm2beqc.we)().nullish(), organization_type: (0, import_chunk_rnm2beqc.we)().nullish(), organization_rate_limit_tier: (0, import_chunk_rnm2beqc.we)().nullish(), user_rate_limit_tier: (0, import_chunk_rnm2beqc.we)().nullish(), seat_tier: (0, import_chunk_rnm2beqc.we)().nullish() }).passthrough().nullish(), auto_compact_windows: (0, import_chunk_rnm2beqc.mk)((0, import_chunk_rnm2beqc.we)(), (0, import_chunk_rnm2beqc.vf)()).nullish(), organization_type: (0, import_chunk_rnm2beqc.we)().nullish().catch(void 0), organization_uuid: (0, import_chunk_rnm2beqc.we)().nullish().catch(void 0), narrowed: (0, import_chunk_rnm2beqc.Ci)().nullish(), program_use_case_id: (0, import_chunk_rnm2beqc.we)().nullish(), program_use_cases: (0, import_chunk_rnm2beqc.vf)().optional(), program_use_case_choice: (0, import_chunk_rnm2beqc.vf)().optional(), program_use_case_default_id: (0, import_chunk_rnm2beqc.we)().nullish().catch(null) }));
function $Jt(e = (0, import_chunk_865at33z.dt)()) {
  return { entrypoint: ((0, import_chunk_zhr7rpv7.vr)().fetchesClientData && (0, import_chunk_3t7ve0wy.Lw)() ? (0, import_chunk_f9x2f6cx.Ese)() : void 0) ?? (0, import_chunk_3t7ve0wy.fh)(), model: (0, import_chunk_zmb62hr5.ur)((0, import_chunk_zmb62hr5.gF)(e)), ccVersion: { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, organizationUuid: (0, import_chunk_865at33z.ge)().oauthAccount?.organizationUuid ?? null };
}
function de(e, o) {
  if (e === o) return true;
  let n = (0, import_chunk_zmb62hr5.ur)(e);
  if (n === (0, import_chunk_zmb62hr5.ur)(o)) return true;
  let c = (0, import_chunk_865at33z.mCt)({ permissionMode: "plan", setting: (0, import_chunk_865at33z.Ld)(), mainLoopModel: o }).model;
  if (n === (0, import_chunk_zmb62hr5.ur)(c)) return true;
  return [o, c].some((g) => {
    let r = (0, import_chunk_ge3qft6b._bl)(g);
    return r !== void 0 && n === (0, import_chunk_zmb62hr5.ur)(r);
  });
}
function ae(e) {
  let o = (0, import_chunk_865at33z.dt)();
  return e === void 0 || de(e, o) ? o : e;
}
function pe() {
  (0, import_chunk_865at33z.M3i)((e) => {
    try {
      return (0, import_chunk_865at33z.hxo)($Jt(ae(e)));
    } catch (o) {
      return (0, import_chunk_k449cc64.i)(o), import_chunk_865at33z.iPs;
    }
  });
}
pe();
function L() {
  return (0, import_chunk_zhr7rpv7.fLr)();
}
function fe(e) {
  return e;
}
function Hsr() {
  try {
    (0, import_chunk_865at33z.D3i)(() => {
      try {
        return L();
      } catch (e) {
        return (0, import_chunk_k449cc64.i)(e), true;
      }
    }), (0, import_chunk_865at33z.L3i)(() => {
      try {
        return L();
      } catch (e) {
        return (0, import_chunk_k449cc64.i)(e), false;
      }
    }), (0, import_chunk_865at33z.N3i)((e, o) => {
      let n = e;
      try {
        n = (0, import_chunk_n69k58aw.DWa)(e, o);
      } catch (c) {
        (0, import_chunk_k449cc64.i)(c);
      }
      return fe(n);
    }, (e) => {
      try {
        return (0, import_chunk_n69k58aw.LWa)(e);
      } catch (o) {
        return (0, import_chunk_k449cc64.i)(o), true;
      }
    }), (0, import_chunk_865at33z.$3i)(() => {
      try {
        if (!L()) return null;
        let e = $Jt();
        return { entrypoint: e.entrypoint ?? null, model: e.model, org: e.organizationUuid };
      } catch (e) {
        return (0, import_chunk_k449cc64.i)(e), null;
      }
    }), (0, import_chunk_xfj2cwfv.b5i)((e) => yXr() ? g4e(e.storageV5, e.credentials, { keepRenderCaches: true }) : Promise.resolve(false));
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function he(e) {
  return { params: { entrypoint: e.entrypoint, model: e.model }, userAgent: `claude-code/${e.ccVersion}` };
}
function N(e, o) {
  if (!e || !o) return e;
  if (o.account_uuid != null && o.account_uuid !== e.accountUuid) return e;
  let n = { organizationType: o.organization_type ?? null, organizationRateLimitTier: o.organization_rate_limit_tier ?? null, userRateLimitTier: o.user_rate_limit_tier ?? null, seatTier: o.seat_tier ?? null };
  if (o.account_email != null) n.emailAddress = o.account_email;
  if (o.organization_uuid != null) n.organizationUuid = o.organization_uuid;
  if (o.organization_name != null) n.organizationName = o.organization_name;
  return { ...e, ...n };
}
function _e(e) {
  if (!e?.account_uuid) return;
  (0, import_chunk_f9x2f6cx.SPt)({ accountUuid: e.account_uuid, emailAddress: (0, import_chunk_f9x2f6cx.Y)() ? void 0 : e.account_email ?? void 0, organizationUuid: e.organization_uuid ?? void 0, seatTier: e.seat_tier });
}
function me(e) {
  let o = e.oauth_account;
  return e.narrowed !== true && o?.account_uuid && o.organization_type ? import_chunk_865at33z.FCo.get(o.organization_type) : void 0;
}
function re(e) {
  let o = e.oauth_account, n = e.narrowed !== true && o?.account_uuid ? { type: o.organization_type, organization: o.organization_uuid } : { type: e.organization_type, organization: e.organization_uuid };
  return { plan: n.type === "claude_free" ? "free" : n.type ? import_chunk_865at33z.FCo.get(n.type) : void 0, organization: n.organization ?? void 0 };
}
function Ae(e, o, n) {
  if (!n) {
    let r = (0, import_chunk_vcnr02by.j2e)(), h = re(e);
    if ((0, import_chunk_vcnr02by.bws)(o, h.plan, h.organization), (0, import_chunk_vcnr02by.j2e)() !== r) import_chunk_trq47kfh.Ti.notifyChange("policySettings");
  }
  if (o !== null && o !== (0, import_chunk_865at33z.Xxe)()) return;
  let c = e.oauth_account, g = me(e);
  (0, import_chunk_f9x2f6cx.lla)(o === null ? null : { bearerSha256: o, answeredAtMs: Date.now(), named: c?.organization_uuid && g !== void 0 ? { organizationUuid: c.organization_uuid, subscriptionType: g } : null });
}
async function ie(e, o, n) {
  if ((0, import_chunk_zhr7rpv7.ve)() === "gateway") {
    if (!import_chunk_c203g5kd.s.CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY) return (0, import_chunk_w578pjby.t)("[Bootstrap] Skipped gateway /v1/models (CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY not set)"), { response: { additional_model_options: [] }, viaScopelessOAuth: false, oauthBearerSha256: null, wasEndpointMovedAtSend: false, viaOAuth: false, fetchedFromAnthropic: false };
    let _ = await ye(n);
    return _ && { response: _, viaScopelessOAuth: false, oauthBearerSha256: null, wasEndpointMovedAtSend: false, viaOAuth: false, fetchedFromAnthropic: false };
  }
  if ((0, import_chunk_k449cc64.wt)()) return (0, import_chunk_w578pjby.t)("[Bootstrap] Skipped: Nonessential traffic disabled"), null;
  if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return (0, import_chunk_w578pjby.t)("[Bootstrap] Skipped: 3P provider"), null;
  let { params: c, userAgent: g } = he(e), r = async (_, w) => {
    (0, import_chunk_w578pjby.t)("[Bootstrap] Fetching");
    let f = `${_}/api/claude_cli/bootstrap`, A = { headers: { "Content-Type": "application/json", "User-Agent": g, ...(0, import_chunk_gq1dr8pm.LFn)(), ...w }, params: c, timeout: 5e3, ...o !== void 0 && { httpsAgent: o } }, D = (0, import_chunk_xcgcdx61.cm)() ? await (0, import_chunk_xfj2cwfv.VN)(A.timeout, (v) => import_chunk_3jjr3wje.bn.get(f, { ...A, ...v, proxy: false, maxRedirects: 0, adapter: "http" })) : await import_chunk_3jjr3wje.bn.get(f, A), R = J8o().safeParse(D.data);
    if (!R.success) return (0, import_chunk_w578pjby.t)(`[Bootstrap] Response failed validation: ${R.error.message}`), (0, import_chunk_cqa9hrgx.l)("api_bootstrap_fetch", "parse_failed"), null;
    return (0, import_chunk_w578pjby.t)("[Bootstrap] Fetch ok"), R.data;
  }, h = (0, import_chunk_865at33z.FR)();
  if (!h && (0, import_chunk_865at33z.cl)()) try {
    let [_, w] = await Promise.all([(0, import_chunk_3f2ytgjw.uGe)(), (0, import_chunk_3f2ytgjw.cGe)()]);
    if (_ !== null) {
      let f = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL || w?.baseURL, A = await r(f || (0, import_chunk_ephf358x.cn)().BASE_API_URL, { ...w?.extraHeaders, Authorization: `Bearer ${await _.getToken()}`, "anthropic-beta": import_chunk_ephf358x.ff });
      return A && { response: A, viaScopelessOAuth: false, oauthBearerSha256: null, wasEndpointMovedAtSend: false, viaOAuth: false, fetchedFromAnthropic: !f || (0, import_chunk_zhr7rpv7.md)(f) };
    }
  } catch (_) {
    return (0, import_chunk_w578pjby.t)(`[Bootstrap] WIF fetch failed: ${import_chunk_3jjr3wje.bn.isAxiosError(_) ? _.response?.status ?? _.code : _ instanceof Error ? _.constructor.name : "unknown"}`), (0, import_chunk_cqa9hrgx.l)("api_bootstrap_fetch", "wif_unavailable"), null;
  }
  let d = (0, import_chunk_865at33z.Yme)(h);
  if (!(0, import_chunk_865at33z.tr)()?.accessToken && !d) return (0, import_chunk_w578pjby.t)("[Bootstrap] Skipped: no usable OAuth, WIF, or API key"), null;
  if (import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET) return (0, import_chunk_w578pjby.t)("[Bootstrap] Skipped: unix-socket-proxied session"), (0, import_chunk_cqa9hrgx.l)("api_bootstrap_fetch", "unix_socket_skip"), null;
  let y = false, b = null, B = false, E = false;
  try {
    let _ = await (0, import_chunk_865at33z.jx)(async () => {
      let w = (0, import_chunk_865at33z.tr)()?.accessToken, f = (0, import_chunk_865at33z.Qf)(), A;
      if (w && (f || !d)) y = !f && !d, b = (0, import_chunk_ccm69jjy.Je)(w), E = true, A = { Authorization: `Bearer ${w}`, "anthropic-beta": import_chunk_ephf358x.ff };
      else if (d) y = false, b = null, E = false, A = { "x-api-key": d };
      else return (0, import_chunk_w578pjby.t)("[Bootstrap] No auth available on retry, aborting"), null;
      return B = (0, import_chunk_xcgcdx61.cm)() && (0, import_chunk_3v09xgvh.eun)(), r((0, import_chunk_ephf358x.cn)().BASE_API_URL, A);
    }, { gateToSessionOAuthCredential: (0, import_chunk_f9x2f6cx.Y)(), credentials: n });
    return _ && { response: _, viaScopelessOAuth: y, oauthBearerSha256: b, wasEndpointMovedAtSend: B, viaOAuth: E, fetchedFromAnthropic: !B };
  } catch (_) {
    let w = import_chunk_3jjr3wje.bn.isAxiosError(_) ? _.response?.status : void 0;
    if (y && w === 403) return (0, import_chunk_w578pjby.t)("[Bootstrap] Skipped: 403 for OAuth token without profile scope"), (0, import_chunk_cqa9hrgx.l)("api_bootstrap_fetch", "no_profile_scope_403"), null;
    throw (0, import_chunk_w578pjby.t)(`[Bootstrap] Fetch failed: ${import_chunk_3jjr3wje.bn.isAxiosError(_) ? _.response?.status ?? _.code : "unknown"}`), (0, import_chunk_cqa9hrgx.m)("api_bootstrap_fetch", "request_failed"), _;
  }
}
function yXr() {
  if (import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET) return false;
  return Boolean((0, import_chunk_865at33z.Yme)((0, import_chunk_865at33z.FR)())) || Boolean((0, import_chunk_865at33z.tr)()?.accessToken) && (0, import_chunk_865at33z.Qf)();
}
async function h4e(e, o) {
  await g4e(e, o);
}
async function g4e(e, o, { keepRenderCaches: n = false, renderedClientData: c, httpsAgent: g } = {}) {
  Hsr();
  try {
    let r = (0, import_chunk_zhr7rpv7.ve)() === "firstParty";
    if (!r) (0, import_chunk_865at33z.YV)(), (0, import_chunk_865at33z.ZZ)();
    let h = $Jt(), d = (0, import_chunk_f9x2f6cx.CL)(), S = (0, import_chunk_zhr7rpv7.vr)().providerCache, y = await ie(h, g, o);
    if (!y) return false;
    if (d !== (0, import_chunk_f9x2f6cx.CL)()) return (0, import_chunk_w578pjby.t)("[Bootstrap] Discarding response fetched under a superseded credential"), (0, import_chunk_cqa9hrgx.l)("api_bootstrap_fetch", "superseded_credential"), (0, import_chunk_xfj2cwfv.w5i)({ storageV5: e, credentials: o }), false;
    return (0, import_chunk_cqa9hrgx.u)("api_bootstrap_fetch", (0, import_chunk_xcgcdx61.cm)() ? { bearer_plan_named: re(y.response).plan !== void 0 } : void 0), await le(y, { inputs: h, writeClientDataSlot: r, providerCacheAtRequest: S, identityEpochAtRequest: d, storageV5: e, keepRenderCaches: n, renderedClientData: c });
  } catch (r) {
    return se(r), false;
  } finally {
    (0, import_chunk_865at33z.pxo)();
  }
}
async function MJl(e, o, n) {
  Hsr();
  try {
    if ((0, import_chunk_zhr7rpv7.ve)() !== "firstParty") return;
    let c = $Jt(ae(e)), g = (0, import_chunk_f9x2f6cx.CL)(), r = await ie(c, void 0, n);
    if (!r) return;
    let h = false;
    if (await (0, import_chunk_865at33z.Ke)((d) => {
      let S = r.response.oauth_account;
      if (g !== (0, import_chunk_f9x2f6cx.CL)() && (!S?.account_uuid || S.account_uuid !== (0, import_chunk_f9x2f6cx.PQe)()?.accountUuid)) return h = true, d;
      let y = N(d.oauthAccount, S)?.organizationUuid ?? null, b = (0, import_chunk_865at33z.hxo)({ ...c, organizationUuid: y });
      if ((0, import_chunk_865at33z.gxo)(d.clientDataCacheSlots, b)) return d;
      return { ...d, clientDataCacheSlots: (0, import_chunk_865at33z._3i)(d.clientDataCacheSlots, b, { data: r.response.client_data ?? null, at: Date.now(), entrypoint: c.entrypoint ?? null, model: c.model, org: y }) };
    }, o), h) (0, import_chunk_cqa9hrgx.l)("api_bootstrap_fetch", "superseded_credential");
    else (0, import_chunk_cqa9hrgx.u)("api_bootstrap_fetch");
  } catch (c) {
    se(c);
  } finally {
    (0, import_chunk_865at33z.pxo)();
  }
}
function se(e) {
  if ((0, import_chunk_jv7av99m.M_)(e)) (0, import_chunk_w578pjby.t)(`[Bootstrap] fetch failed: ${e}`, { level: "error" });
  else (0, import_chunk_k449cc64.i)(e);
}
async function le({ response: e, viaScopelessOAuth: o, viaOAuth: n, oauthBearerSha256: c, wasEndpointMovedAtSend: g, fetchedFromAnthropic: r }, { inputs: h, writeClientDataSlot: d, providerCacheAtRequest: S, identityEpochAtRequest: y, storageV5: b, keepRenderCaches: B = false, renderedClientData: E, answeredAt: _, recordMixRecipe: w = true }) {
  let f = (0, import_chunk_865at33z.ge)(), A = e.narrowed ?? o, D = A && e.additional_model_options == null, R = A && e.additional_model_costs == null, v = A && e.model_access == null, H = A && e.org_model_default == null, W = A && e.auto_compact_windows == null, O = e.client_data ?? null, z = D ? f.additionalModelOptionsCache ?? [] : e.additional_model_options ?? [], G = R ? f.additionalModelCostsCache ?? {} : (0, import_chunk_khxw3ng0.er)(e.additional_model_costs ?? {}, (C) => {
    let k = C.webSearchRequests ?? import_chunk_865at33z.ldt.webSearchRequests;
    return { ...C, webSearchRequests: k, ...C.longPrompt && { longPrompt: { ...C.longPrompt, webSearchRequests: k } } };
  }), U = v ? f.modelAccessCache ?? [] : e.model_access ?? [], q = W ? f.autoCompactWindowsCache ?? null : e.auto_compact_windows ?? null;
  if (_e(e.oauth_account), d && w) S.servedMixRecipe = { model: h.model, recipe: g ? void 0 : O?.tengu_zesty_horizon, accountEpoch: (0, import_chunk_f9x2f6cx.CL)() };
  if (r && !R) {
    let C = e.additional_model_costs ?? {};
    (0, import_chunk_zhr7rpv7.vr)().fetchedModelCosts = C;
    let k = Object.keys(C).length;
    if (k > 0) (0, import_chunk_cqa9hrgx.u)("api_served_list_prices", { count: k });
  }
  if (!A) {
    let C = !n || (0, import_chunk_865at33z.wa)(), k = !(n && C) ? [] : e.program_use_cases === void 0 || e.program_use_cases === null ? null : (0, import_chunk_gq1dr8pm.Icl)(e.program_use_cases), x = (0, import_chunk_f9x2f6cx.OQe)(), T = (0, import_chunk_gq1dr8pm.Hcl)({ serverNamed: C ? e.program_use_case_id || null : null, serverDefault: e.program_use_case_default_id ?? null, offered: k, mode: (0, import_chunk_gq1dr8pm.Mcl)(e.program_use_case_choice, k ?? []) });
    if ((0, import_chunk_f9x2f6cx.gpt)(T), T !== null) (0, import_chunk_cqa9hrgx.u)("api_program_use_case");
    if (T !== null && T !== x) (0, import_chunk_f9x2f6cx.z3n)(import_chunk_xfj2cwfv.aD);
    (0, import_chunk_xfj2cwfv.S5i)();
  }
  let j = (0, import_chunk_f9x2f6cx.CL)();
  Ae(e, c, g);
  let P = N(f.oauthAccount, e.oauth_account), K = e.org_model_default ? { ...e.org_model_default, ...P?.organizationUuid && { orgUuid: P.organizationUuid } } : H ? f.orgModelDefaultCache ?? null : null, I = (0, import_chunk_865at33z.hxo)({ ...h, organizationUuid: P?.organizationUuid ?? h.organizationUuid }), V = f.clientDataCacheSlots?.[I], M = (0, import_chunk_865at33z.v6t)(V) ? V : void 0, X = M !== void 0, ue = (0, import_chunk_z688m88d.Zt)(P, f.oauthAccount);
  if (j !== y || !(0, import_chunk_z688m88d.Zt)(f.modelAccessCache ?? [], U)) (0, import_chunk_f9x2f6cx.FQe)().clear();
  let J = d && M !== void 0 && Date.now() - M.at > import_chunk_865at33z.h3i, Q = d && (M === void 0 || !(0, import_chunk_z688m88d.Zt)(M.data ?? null, O)), F = d && (E !== void 0 ? !(0, import_chunk_z688m88d.Zt)(E, O) : Q);
  (0, import_chunk_y53wbr8a.a)("tengu_client_data_cache_key", { slot_hit: X, slot_changed: F, legacy_fallback: !X && f.clientDataCache != null, slot_stale: J });
  let Z = d, ee = typeof f.additionalModelOptionsAnsweredAt === "number", ce = D || (Z ? Array.isArray(f.additionalModelOptionsCache) && ee && (0, import_chunk_z688m88d.Zt)(f.additionalModelOptionsCache, z) : !ee && (0, import_chunk_z688m88d.Zt)(f.additionalModelOptionsCache ?? [], z));
  if (!Q && !F && !J && ce && (0, import_chunk_z688m88d.Zt)(f.additionalModelCostsCache ?? {}, G) && (0, import_chunk_z688m88d.Zt)(f.modelAccessCache ?? [], U) && (0, import_chunk_z688m88d.Zt)(f.orgModelDefaultCache ?? null, K) && (!d || (0, import_chunk_z688m88d.Zt)(f.autoCompactWindowsCache ?? null, q)) && ue) {
    if ((0, import_chunk_w578pjby.t)("[Bootstrap] Cache unchanged, skipping write"), (0, import_chunk_865at33z.s6n)(I), !v) (0, import_chunk_zhr7rpv7.xra)();
    return true;
  }
  (0, import_chunk_w578pjby.t)("[Bootstrap] Cache updated, persisting to disk");
  let te = false;
  if (await (0, import_chunk_865at33z.Ke)((C) => {
    if (j !== (0, import_chunk_f9x2f6cx.CL)()) return te = true, C;
    let k = N(C.oauthAccount, e.oauth_account), x = (0, import_chunk_865at33z.hxo)({ ...h, organizationUuid: k?.organizationUuid ?? null });
    return { ...C, clientDataCacheSlots: d ? (0, import_chunk_865at33z._3i)(C.clientDataCacheSlots, x, { data: O, at: _ ?? Date.now(), entrypoint: h.entrypoint ?? null, model: h.model, org: k?.organizationUuid ?? null }) : C.clientDataCacheSlots, ...D ? {} : { additionalModelOptionsCache: z, additionalModelOptionsAnsweredAt: Z ? Date.now() : void 0 }, ...R ? {} : { additionalModelCostsCache: G }, ...v ? {} : { modelAccessCache: U }, ...H ? {} : { orgModelDefaultCache: K }, autoCompactWindowsCache: d && !W ? q : C.autoCompactWindowsCache ?? null, oauthAccount: k };
  }, b), (0, import_chunk_865at33z.s6n)(I), te) return false;
  if (!v) (0, import_chunk_zhr7rpv7.xra)();
  if (F && !B) (0, import_chunk_865at33z.YV)(), (0, import_chunk_865at33z.ZZ)();
  return true;
}
function xii(e, o, n) {
  if (!(0, import_chunk_865at33z.tr)()?.accessToken || !(0, import_chunk_865at33z.Qf)()) return false;
  Hsr();
  let { oauth_account: c, ...g } = e;
  return le({ response: g, viaScopelessOAuth: false, viaOAuth: true, oauthBearerSha256: null, wasEndpointMovedAtSend: false, fetchedFromAnthropic: false }, { inputs: $Jt(), writeClientDataSlot: true, providerCacheAtRequest: (0, import_chunk_zhr7rpv7.vr)().providerCache, identityEpochAtRequest: (0, import_chunk_f9x2f6cx.CL)(), storageV5: n, answeredAt: o, keepRenderCaches: true, recordMixRecipe: false }).catch((r) => (0, import_chunk_k449cc64.i)(r)).finally(import_chunk_865at33z.pxo), (0, import_chunk_865at33z.YV)(), (0, import_chunk_865at33z.ZZ)(), true;
}
var Ce = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_rnm2beqc.on)({ data: (0, import_chunk_rnm2beqc._o)((0, import_chunk_rnm2beqc.on)({ id: (0, import_chunk_rnm2beqc.we)(), display_name: (0, import_chunk_rnm2beqc.we)().nullish(), description: (0, import_chunk_rnm2beqc.we)().nullish() })) }));
async function ye(e) {
  await (0, import_chunk_np189awg.o3)(e);
  let o = (0, import_chunk_f9x2f6cx.Io)();
  if (!o) return null;
  try {
    let n = await import_chunk_3jjr3wje.bn.get(`${o.url}/v1/models`, { headers: { Authorization: `Bearer ${o.jwt}`, "anthropic-version": "2023-06-01", "User-Agent": (0, import_chunk_tb84sczh.Ri)() }, params: { limit: 1e3 }, timeout: 5e3 }), c = Ce().safeParse(n.data);
    if (!c.success) return (0, import_chunk_w578pjby.t)(`[Bootstrap] Gateway /v1/models failed validation: ${c.error.message}`), null;
    let g = c.data.data.filter((r) => /(claude|anthropic)/i.test(r.id)).filter((r) => {
      let h = (0, import_chunk_zhr7rpv7.PB)(r.id);
      return h === null || (0, import_chunk_865at33z.uCt)((0, import_chunk_865at33z.zg)(h.firstParty));
    }).map((r) => ({ value: r.id, label: (0, import_chunk_kx2fp6pc.Ek)(r.display_name ?? "") || (0, import_chunk_kx2fp6pc.Ek)(r.id), description: (0, import_chunk_kx2fp6pc.hse)(r.description ?? "") }));
    return (0, import_chunk_w578pjby.t)(`[Bootstrap] Gateway /v1/models \u2192 ${g.length} custom options`), { additional_model_options: g };
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[Bootstrap] Gateway /v1/models fetch failed: ${import_chunk_3jjr3wje.bn.isAxiosError(n) ? n.response?.status ?? n.code : "unknown"}`), null;
  }
}
