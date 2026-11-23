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
var chunk_zhr7rpv7_exports = {};
__export(chunk_zhr7rpv7_exports, {
  Ara: () => Ara,
  CD: () => CD,
  Cra: () => Cra,
  E4n: () => E4n,
  FEe: () => FEe,
  I6e: () => I6e,
  Ora: () => Ora,
  PB: () => PB,
  POe: () => POe,
  Pra: () => Pra,
  RI: () => RI,
  Rnd: () => Rnd,
  Rra: () => Rra,
  SBl: () => SBl,
  Ss: () => Ss,
  T4n: () => T4n,
  Xs: () => Xs,
  ZDo: () => ZDo,
  _Bl: () => _Bl,
  _T: () => _T,
  c1e: () => c1e,
  cLr: () => cLr,
  cQe: () => cQe,
  d1e: () => d1e,
  d4t: () => d4t,
  dLr: () => dLr,
  e0o: () => e0o,
  eyn: () => eyn,
  fLr: () => fLr,
  gBl: () => gBl,
  gm: () => gm,
  hBl: () => hBl,
  hLr: () => hLr,
  i0o: () => i0o,
  iLs: () => iLs,
  jn: () => jn,
  jxt: () => jxt,
  kd: () => kd,
  l4t: () => l4t,
  mBl: () => mBl,
  mLr: () => mLr,
  md: () => md,
  n0o: () => n0o,
  nte: () => nte,
  o0o: () => o0o,
  oLs: () => oLs,
  ose: () => ose,
  p$: () => p$,
  pBl: () => pBl,
  pLr: () => pLr,
  pc: () => pc,
  r0o: () => r0o,
  rLs: () => rLs,
  rc: () => rc,
  s0o: () => s0o,
  s5l: () => s5l,
  sLs: () => sLs,
  t0o: () => t0o,
  tA: () => tA,
  tte: () => tte,
  tx: () => tx,
  uLr: () => uLr,
  v3: () => v3,
  v4n: () => v4n,
  ve: () => ve,
  vr: () => vr,
  xra: () => xra,
  yBl: () => yBl,
  ya: () => ya
});
module.exports = __toCommonJS(chunk_zhr7rpv7_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
(0, import_chunk_adx6804h.B)();
var rLs = { "//": "Hand-maintained baked-in model catalog \u2014 the source of truth for per-model provider IDs and metadata. On model launch add one entry to `models` below; `bun run generate:model-catalog` validates this file against the schema and formats it.", schema_version: 1, pricing_tiers: { tier_2_10: { input: 2, output: 10, cache_write_5m: 2.5, cache_write_1h: 4, cache_read: 0.2, web_search: 0.01 }, tier_2_10_cache_read_0_10: { input: 2, output: 10, cache_write_5m: 2.5, cache_write_1h: 4, cache_read: 0.1, web_search: 0.01 }, tier_3_15: { input: 3, output: 15, cache_write_5m: 3.75, cache_write_1h: 6, cache_read: 0.3, web_search: 0.01 }, tier_5_25: { input: 5, output: 25, cache_write_5m: 6.25, cache_write_1h: 10, cache_read: 0.5, web_search: 0.01 }, tier_15_75: { input: 15, output: 75, cache_write_5m: 18.75, cache_write_1h: 30, cache_read: 1.5, web_search: 0.01 }, tier_10_50: { input: 10, output: 50, cache_write_5m: 12.5, cache_write_1h: 20, cache_read: 1, web_search: 0.01 }, tier_10_50_cache_read_0_25: { input: 10, output: 50, cache_write_5m: 12.5, cache_write_1h: 20, cache_read: 0.25, web_search: 0.01 }, tier_4_20_cache_read_0_20: { input: 4, output: 20, cache_write_5m: 5, cache_write_1h: 8, cache_read: 0.2, web_search: 0.01 }, tier_8_40_cache_read_0_20: { input: 8, output: 40, cache_write_5m: 10, cache_write_1h: 16, cache_read: 0.2, web_search: 0.01 }, haiku_35: { input: 0.8, output: 4, cache_write_5m: 1, cache_write_1h: 1.6, cache_read: 0.08, web_search: 0.01 }, haiku_45: { input: 1, output: 5, cache_write_5m: 1.25, cache_write_1h: 2, cache_read: 0.1, web_search: 0.01 }, haiku_55: { input: 0.1, output: 0.5, cache_write_5m: 0.125, cache_write_1h: 0.2, cache_read: 0.01, web_search: 0.01, long_prompt: { above_prompt_tokens: 1e5, input: 0.5, output: 2.5, cache_write_5m: 0.625, cache_write_1h: 1, cache_read: 0.05 } } }, models: [{ id: "claude-3-5-haiku", family: "haiku", display_name: "Haiku 3.5", provider_ids: { first_party: "claude-3-5-haiku-20241022", bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0", vertex: "claude-3-5-haiku@20241022", foundry: "claude-3-5-haiku", anthropic_aws: "claude-3-5-haiku-20241022", anthropic_google_cloud: null, mantle: null, gateway: "claude-3-5-haiku-20241022" }, eager_input_streaming: { vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_HAIKU", max_output_tokens: { default: 8192, upper: 8192 }, pricing: "haiku_35", capabilities: ["total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-haiku-4-5", family: "haiku", display_name: "Haiku 4.5", knowledge_cutoff: "February 2025", provider_ids: { first_party: "claude-haiku-4-5-20251001", bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0", vertex: "claude-haiku-4-5@20251001", foundry: "claude-haiku-4-5", anthropic_aws: "claude-haiku-4-5-20251001", anthropic_google_cloud: "claude-haiku-4-5-20251001", mantle: "anthropic.claude-haiku-4-5", gateway: "claude-haiku-4-5-20251001" }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_4_5", context: { window: 2e5, supports_1m_suffix: true }, max_output_tokens: { default: 32e3, upper: 64e3 }, pricing: "haiku_45", capabilities: ["context_management", "total_tokens_reminder", "tool_loaded_text"], advisor_rank: 1 }, { id: "claude-haiku-5-5", family: "haiku", display_name: "Haiku 5.5", knowledge_cutoff: "June 2026", provider_ids: { first_party: "claude-haiku-5-5", bedrock: "us.anthropic.claude-haiku-5-5", vertex: "claude-haiku-5-5", foundry: "claude-haiku-5-5", anthropic_aws: "claude-haiku-5-5", anthropic_google_cloud: "claude-haiku-5-5", mantle: "anthropic.claude-haiku-5-5" }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_5_5", fallback_3p: "claude-haiku-4-5", context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 128e3, upper: 128e3 }, pricing: "haiku_55", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "rejects_disabled_thinking", "per_turn_effort", "lean_prompt", "org_locked_thinking", "haiku_5_5_early_stopping_guidance", "total_tokens_reminder", "tool_loaded_text"], default_effort: "medium", effort_cost_index: { low: 0.38, medium: 0.52, high: 1, xhigh: 2.03, max: 4.34 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 4 }, { id: "claude-3-5-sonnet", family: "sonnet", display_name: "Sonnet 3.5", provider_ids: { first_party: "claude-3-5-sonnet-20241022", bedrock: "us.anthropic.claude-3-5-sonnet-20241022-v2:0", vertex: "claude-3-5-sonnet-v2@20241022", foundry: "claude-3-5-sonnet", anthropic_aws: "claude-3-5-sonnet-20241022", anthropic_google_cloud: null, mantle: null, gateway: "claude-3-5-sonnet-20241022" }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_SONNET", max_output_tokens: { default: 8192, upper: 8192 }, pricing: "tier_3_15", capabilities: ["total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-3-7-sonnet", family: "sonnet", display_name: "Sonnet 3.7", provider_ids: { first_party: "claude-3-7-sonnet-20250219", bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0", vertex: "claude-3-7-sonnet@20250219", foundry: "claude-3-7-sonnet", anthropic_aws: "claude-3-7-sonnet-20250219", anthropic_google_cloud: null, mantle: null, gateway: "claude-3-7-sonnet-20250219" }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_7_SONNET", max_output_tokens: { default: 32e3, upper: 64e3 }, pricing: "tier_3_15", capabilities: ["total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-sonnet-4-0", family: "sonnet", display_name: "Sonnet 4", knowledge_cutoff: "January 2025", provider_ids: { first_party: "claude-sonnet-4-20250514", bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0", vertex: "claude-sonnet-4@20250514", foundry: "claude-sonnet-4", anthropic_aws: "claude-sonnet-4-20250514", anthropic_google_cloud: null, mantle: null, gateway: "claude-sonnet-4-20250514" }, eager_input_streaming: { vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_SONNET", context: { window: 2e5, maximum_window: 1e6, supports_1m_beta: true, clamp_long_context_without_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 32e3, upper: 64e3 }, pricing: "tier_3_15", capabilities: ["context_management", "total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-sonnet-4-5", family: "sonnet", display_name: "Sonnet 4.5", knowledge_cutoff: "January 2025", provider_ids: { first_party: "claude-sonnet-4-5-20250929", bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0", vertex: "claude-sonnet-4-5@20250929", foundry: "claude-sonnet-4-5", anthropic_aws: "claude-sonnet-4-5-20250929", anthropic_google_cloud: "claude-sonnet-4-5-20250929", mantle: null, gateway: "claude-sonnet-4-5-20250929" }, eager_input_streaming: { vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_SONNET", fallback_3p: "claude-sonnet-4-0", context: { window: 2e5, maximum_window: 1e6, supports_1m_beta: true, clamp_long_context_without_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 32e3, upper: 64e3 }, pricing: "tier_3_15", capabilities: ["context_management", "total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-sonnet-4-6", family: "sonnet", display_name: "Sonnet 4.6", knowledge_cutoff: "August 2025", provider_ids: { first_party: "claude-sonnet-4-6", bedrock: "us.anthropic.claude-sonnet-4-6", vertex: "claude-sonnet-4-6", foundry: "claude-sonnet-4-6", anthropic_aws: "claude-sonnet-4-6", anthropic_google_cloud: "claude-sonnet-4-6", mantle: null, gateway: "claude-sonnet-4-6" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_SONNET", fallback_3p: "claude-sonnet-4-5", context: { window: 2e5, maximum_window: 1e6, supports_1m_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 32e3, upper: 128e3 }, pricing: "tier_3_15", capabilities: ["effort", "max_effort", "adaptive_thinking", "context_management", "total_tokens_reminder", "tool_loaded_text"], advisor_rank: 2 }, { id: "claude-sonnet-5", family: "sonnet", display_name: "Sonnet 5", knowledge_cutoff: "January 2026", provider_ids: { first_party: "claude-sonnet-5", bedrock: "us.anthropic.claude-sonnet-5", vertex: "claude-sonnet-5", foundry: "claude-sonnet-5", anthropic_aws: "claude-sonnet-5", anthropic_google_cloud: "claude-sonnet-5", mantle: "anthropic.claude-sonnet-5", gateway: "claude-sonnet-5" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_SONNET", fallback_3p: "claude-sonnet-4-6", context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_2_10", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "context_management", "total_tokens_reminder", "tool_loaded_text"], default_effort: "high", effort_cost_index: { low: 0.47, medium: 0.74, high: 1, xhigh: 2.41, max: 5.59 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 4 }, { id: "claude-sonnet-5-5", family: "sonnet", display_name: "Sonnet 5.5", knowledge_cutoff: "June 2026", provider_ids: { first_party: "claude-sonnet-5-5", bedrock: "us.anthropic.claude-sonnet-5-5", vertex: "claude-sonnet-5-5", foundry: "claude-sonnet-5-5", anthropic_aws: "claude-sonnet-5-5", anthropic_google_cloud: "claude-sonnet-5-5", mantle: "anthropic.claude-sonnet-5-5", gateway: "claude-sonnet-5-5" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_SONNET", fallback_3p: "claude-sonnet-5", context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 128e3, upper: 128e3 }, pricing: "tier_2_10_cache_read_0_10", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "rejects_disabled_thinking", "per_turn_effort", "per_turn_timing", "lean_prompt", "refusal_fallback", "silent_turn_reminder", "org_locked_thinking", "tool_loaded_text"], default_effort: "medium", effort_cost_index: { low: 0.49, medium: 0.54, high: 1, xhigh: 1.87, max: 5.5 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 6 }, { id: "claude-opus-4-0", family: "opus", display_name: "Opus 4", knowledge_cutoff: "January 2025", provider_ids: { first_party: "claude-opus-4-20250514", bedrock: "us.anthropic.claude-opus-4-20250514-v1:0", vertex: "claude-opus-4@20250514", foundry: "claude-opus-4", anthropic_aws: "claude-opus-4-20250514", anthropic_google_cloud: null, mantle: null, gateway: "claude-opus-4-20250514" }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_OPUS", context: { window: 2e5, supports_1m_suffix: true }, max_output_tokens: { default: 32e3, upper: 32e3 }, pricing: "tier_15_75", capabilities: ["context_management", "total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-opus-4-1", family: "opus", display_name: "Opus 4.1", knowledge_cutoff: "January 2025", provider_ids: { first_party: "claude-opus-4-1-20250805", bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0", vertex: "claude-opus-4-1@20250805", foundry: "claude-opus-4-1", anthropic_aws: "claude-opus-4-1-20250805", anthropic_google_cloud: null, mantle: null, gateway: "claude-opus-4-1-20250805" }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_1_OPUS", context: { window: 2e5, supports_1m_suffix: true }, max_output_tokens: { default: 32e3, upper: 32e3 }, pricing: "tier_15_75", capabilities: ["context_management", "total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-opus-4-5", family: "opus", display_name: "Opus 4.5", knowledge_cutoff: "May 2025", provider_ids: { first_party: "claude-opus-4-5-20251101", bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0", vertex: "claude-opus-4-5@20251101", foundry: "claude-opus-4-5", anthropic_aws: "claude-opus-4-5-20251101", anthropic_google_cloud: "claude-opus-4-5-20251101", mantle: null, gateway: "claude-opus-4-5-20251101" }, eager_input_streaming: { vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_OPUS", fallback_3p: "claude-opus-4-1", context: { window: 2e5, supports_1m_suffix: true }, max_output_tokens: { default: 32e3, upper: 64e3 }, pricing: "tier_5_25", capabilities: ["context_management", "total_tokens_reminder", "tool_loaded_text"] }, { id: "claude-opus-4-6", family: "opus", display_name: "Opus 4.6", knowledge_cutoff: "May 2025", provider_ids: { first_party: "claude-opus-4-6", bedrock: "us.anthropic.claude-opus-4-6-v1", vertex: "claude-opus-4-6", foundry: "claude-opus-4-6", anthropic_aws: "claude-opus-4-6", anthropic_google_cloud: "claude-opus-4-6", mantle: null, gateway: "claude-opus-4-6" }, eager_input_streaming: { vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_OPUS", fallback_3p: "claude-opus-4-5", context: { window: 2e5, maximum_window: 1e6, supports_1m_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_5_25", capabilities: ["effort", "max_effort", "adaptive_thinking", "context_management", "total_tokens_reminder", "tool_loaded_text"], advisor_rank: 3 }, { id: "claude-opus-4-7", family: "opus", display_name: "Opus 4.7", knowledge_cutoff: "January 2026", provider_ids: { first_party: "claude-opus-4-7", bedrock: "us.anthropic.claude-opus-4-7", vertex: "claude-opus-4-7", foundry: "claude-opus-4-7", anthropic_aws: "claude-opus-4-7", anthropic_google_cloud: "claude-opus-4-7", mantle: "anthropic.claude-opus-4-7", gateway: "claude-opus-4-7" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_7_OPUS", fallback_3p: "claude-opus-4-6", context: { window: 1e6, native_1m: true, supports_1m_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_5_25", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "context_management", "total_tokens_reminder", "tool_loaded_text"], default_effort: "xhigh", image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 5 }, { id: "claude-opus-4-8", family: "opus", display_name: "Opus 4.8", knowledge_cutoff: "January 2026", provider_ids: { first_party: "claude-opus-4-8", bedrock: "us.anthropic.claude-opus-4-8", vertex: "claude-opus-4-8", foundry: "claude-opus-4-8", anthropic_aws: "claude-opus-4-8", anthropic_google_cloud: "claude-opus-4-8", mantle: "anthropic.claude-opus-4-8", gateway: "claude-opus-4-8" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_8_OPUS", fallback_3p: "claude-opus-4-7", context: { window: 1e6, native_1m: true, supports_1m_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_5_25", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "fast_mode", "lean_prompt", "total_tokens_reminder", "tool_loaded_text", "send_user_file_input_whole"], default_effort: "high", effort_cost_index: { low: 0.72, medium: 0.9, high: 1, xhigh: 1.65, max: 1.88 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 5 }, { id: "claude-opus-5", family: "opus", display_name: "Opus 5", knowledge_cutoff: "May 2026", provider_ids: { first_party: "claude-opus-5", bedrock: "us.anthropic.claude-opus-5", vertex: "claude-opus-5", foundry: "claude-opus-5", anthropic_aws: "claude-opus-5", anthropic_google_cloud: "claude-opus-5", mantle: "anthropic.claude-opus-5", gateway: "claude-opus-5" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_OPUS", fallback_3p: "claude-opus-4-8", context: { window: 1e6, native_1m: true, supports_1m_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_5_25", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "mid_conv_tool_change", "context_management", "thinking_disabled_effort_cap", "fast_mode", "lean_prompt", "refusal_fallback", "opus_5_prompt_bundle", "total_tokens_reminder", "tool_loaded_text", "send_user_file_input_whole"], default_effort: "high", effort_cost_index: { low: 0.67, medium: 0.76, high: 1, xhigh: 1.6, max: 1.7 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 7 }, { id: "claude-opus-5-5", family: "opus", display_name: "Opus 5.5", knowledge_cutoff: "June 2026", provider_ids: { first_party: "claude-opus-5-5", bedrock: "us.anthropic.claude-opus-5-5", vertex: "claude-opus-5-5", foundry: "claude-opus-5-5", anthropic_aws: "claude-opus-5-5", anthropic_google_cloud: "claude-opus-5-5", mantle: "anthropic.claude-opus-5-5", gateway: "claude-opus-5-5" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_OPUS", fallback_3p: "claude-opus-5", context: { window: 1e6, native_1m: true, supports_1m_beta: true, supports_1m_suffix: true }, max_output_tokens: { default: 128e3, upper: 128e3 }, pricing: "tier_4_20_cache_read_0_20", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "fast_mode", "lean_prompt", "refusal_fallback", "opus_5_5_prompt_bundle", "tool_loaded_text"], default_effort: "medium", effort_cost_index: { low: 0.48, medium: 0.66, high: 1, xhigh: 1.66, max: 3.44 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 7 }, { id: "claude-fable-5", family: "fable", display_name: "Fable 5", knowledge_cutoff: "January 2026", provider_ids: { first_party: "claude-fable-5", bedrock: "us.anthropic.claude-fable-5", vertex: "claude-fable-5", foundry: "claude-fable-5", anthropic_aws: "claude-fable-5", anthropic_google_cloud: "claude-fable-5", mantle: "anthropic.claude-fable-5", gateway: "claude-fable-5" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5", fallback_3p: "claude-opus-5-5", context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_10_50", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "context_management", "lean_prompt", "fable_5_mitigations", "refusal_fallback", "total_tokens_reminder", "tool_loaded_text"], default_effort: "high", effort_cost_index: { low: 0.6, medium: 0.77, high: 1, xhigh: 1.74, max: 1.91 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 8 }, { id: "claude-fable-5-1", family: "fable", display_name: "Fable 5.1", knowledge_cutoff: "June 2026", provider_ids: { first_party: "claude-fable-5-1", bedrock: "us.anthropic.claude-fable-5-1", vertex: "claude-fable-5-1", foundry: "claude-fable-5-1", anthropic_aws: "claude-fable-5-1", anthropic_google_cloud: "claude-fable-5-1", mantle: "anthropic.claude-fable-5-1", gateway: "claude-fable-5-1" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5_1", fallback_3p: "claude-fable-5", context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_10_50_cache_read_0_25", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "lean_prompt", "fable_5_mitigations", "refusal_fallback", "fable_5_1_prompt_bundle", "total_tokens_reminder", "tool_loaded_text"], default_effort: "high", effort_cost_index: { low: 0.75, medium: 0.86, high: 1, xhigh: 1.38, max: 1.74 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 9 }, { id: "claude-fable-5-2", family: "fable", display_name: "Fable 5.2", knowledge_cutoff: "June 2026", provider_ids: { first_party: "claude-fable-5-2", bedrock: "us.anthropic.claude-fable-5-2", vertex: "claude-fable-5-2", foundry: "claude-fable-5-2", anthropic_aws: "claude-fable-5-2", anthropic_google_cloud: "claude-fable-5-2", mantle: "anthropic.claude-fable-5-2", gateway: "claude-fable-5-2" }, eager_input_streaming: { bedrock: true, vertex: true }, vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5_2", fallback_3p: "claude-fable-5-1", context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 128e3, upper: 128e3 }, pricing: "tier_8_40_cache_read_0_20", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "fast_mode", "vertex_fast_mode", "lean_prompt", "script_output_cost", "refusal_fallback", "org_locked_thinking", "fable_5_2_prompt_bundle"], default_effort: "medium", image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 10 }, { id: "claude-mythos-5", family: "mythos", display_name: "Mythos 5", knowledge_cutoff: "January 2026", provider_ids: { first_party: "claude-mythos-5", bedrock: null, vertex: null, foundry: null, anthropic_aws: null, anthropic_google_cloud: null, mantle: null, gateway: null }, context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_10_50", capabilities: ["total_tokens_reminder", "tool_loaded_text"], image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 8 }, { id: "claude-mythos-5-1", family: "mythos", display_name: "Mythos 5.1", knowledge_cutoff: "June 2026", provider_ids: { first_party: "claude-mythos-5-1", bedrock: null, vertex: null, foundry: null, anthropic_aws: null, anthropic_google_cloud: null, mantle: null, gateway: null }, context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 64e3, upper: 128e3 }, pricing: "tier_10_50_cache_read_0_25", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_timing", "context_management", "lean_prompt", "fable_5_mitigations", "fable_5_1_prompt_bundle", "total_tokens_reminder", "tool_loaded_text"], default_effort: "high", effort_cost_index: { low: 0.75, medium: 0.86, high: 1, xhigh: 1.38, max: 1.74 }, image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 9 }, { id: "claude-mythos-5-2", family: "mythos", display_name: "Mythos 5.2", knowledge_cutoff: "June 2026", provider_ids: { first_party: "claude-mythos-5-2", bedrock: null, vertex: null, foundry: null, anthropic_aws: null, anthropic_google_cloud: null, mantle: null, gateway: null }, context: { window: 1e6, native_1m: true, supports_1m_beta: true }, max_output_tokens: { default: 128e3, upper: 128e3 }, pricing: "tier_8_40_cache_read_0_20", capabilities: ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "fast_mode", "vertex_fast_mode", "lean_prompt", "org_locked_thinking", "fable_5_2_prompt_bundle"], default_effort: "medium", image_limits: { maxWidth: 2576, maxHeight: 2576, maxImageTokens: 4784 }, advisor_rank: 10 }], aliases: { opus: { default: "claude-opus-5-5", per_provider: { bedrock: "claude-opus-5-5", vertex: "claude-opus-5-5", foundry: "claude-opus-4-6", mantle: "claude-opus-5-5", anthropic_aws: "claude-opus-5-5", gateway: "claude-opus-4-7" } }, sonnet: { default: "claude-sonnet-5-5", per_provider: { bedrock: "claude-sonnet-4-5", vertex: "claude-sonnet-4-5", foundry: "claude-sonnet-4-5", mantle: "claude-sonnet-4-5", anthropic_aws: "claude-sonnet-4-6", gateway: "claude-sonnet-4-6" } }, haiku: { default: "claude-haiku-5-5", per_provider: { bedrock: "claude-haiku-4-5", vertex: "claude-haiku-4-5", foundry: "claude-haiku-4-5", mantle: "claude-haiku-4-5", anthropic_aws: "claude-haiku-4-5", anthropic_google_cloud: "claude-haiku-4-5", gateway: "claude-haiku-4-5" } }, fable: { default: "claude-fable-5-2", per_provider: { gateway: "claude-fable-5" } } }, defaults: {}, best: "opus", latest_per_family: { fable: "claude-fable-5-2", opus: "claude-opus-5-5", sonnet: "claude-sonnet-5-5", haiku: "claude-haiku-5-5" }, alias_migration: {} };
function I() {
  return { bakedCatalog: void 0, canonicalNameMemo: /* @__PURE__ */ new Map(), compiledModelMemo: /* @__PURE__ */ new Map(), mainLoopCanonical: void 0, servedCapabilityLookup: void 0, clientDataCapabilityLookup: void 0, mainLoopCanonicalName: void 0, modelKnowledge: void 0 };
}
var _;
function CD() {
  if (_ === void 0) _ = I();
  return _;
}
var D = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ first_party: (0, import_chunk_adx6804h.n)(), bedrock: (0, import_chunk_adx6804h.n)().nullish(), vertex: (0, import_chunk_adx6804h.n)().nullish(), foundry: (0, import_chunk_adx6804h.n)().nullish(), anthropic_aws: (0, import_chunk_adx6804h.n)().nullish(), anthropic_google_cloud: (0, import_chunk_adx6804h.n)().nullish(), mantle: (0, import_chunk_adx6804h.n)().nullish(), gateway: (0, import_chunk_adx6804h.n)().nullish() }).loose()), w = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ input: (0, import_chunk_adx6804h.E)(), output: (0, import_chunk_adx6804h.E)(), cache_write_5m: (0, import_chunk_adx6804h.E)().optional(), cache_write_1h: (0, import_chunk_adx6804h.E)().optional(), cache_read: (0, import_chunk_adx6804h.E)().optional(), web_search: (0, import_chunk_adx6804h.E)().optional(), long_prompt: (0, import_chunk_adx6804h.c)({ above_prompt_tokens: (0, import_chunk_adx6804h.E)().int().positive(), input: (0, import_chunk_adx6804h.E)(), output: (0, import_chunk_adx6804h.E)(), cache_write_5m: (0, import_chunk_adx6804h.E)().optional(), cache_write_1h: (0, import_chunk_adx6804h.E)().optional(), cache_read: (0, import_chunk_adx6804h.E)().optional() }).loose().optional() }).loose()), L = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)(), family: (0, import_chunk_adx6804h.n)(), display_name: (0, import_chunk_adx6804h.n)(), slogan: (0, import_chunk_adx6804h.n)().optional(), knowledge_cutoff: (0, import_chunk_adx6804h.n)().optional(), provider_ids: D(), eager_input_streaming: (0, import_chunk_adx6804h.c)({ bedrock: (0, import_chunk_adx6804h.v)(true).optional(), vertex: (0, import_chunk_adx6804h.v)(true).optional() }).loose().optional(), vertex_region_env_var: (0, import_chunk_adx6804h.n)().optional(), fallback_3p: (0, import_chunk_adx6804h.n)().optional(), context: (0, import_chunk_adx6804h.c)({ window: (0, import_chunk_adx6804h.E)(), maximum_window: (0, import_chunk_adx6804h.E)().optional(), native_1m: (0, import_chunk_adx6804h.P)().optional(), supports_1m_beta: (0, import_chunk_adx6804h.P)().optional(), clamp_long_context_without_beta: (0, import_chunk_adx6804h.P)().optional(), supports_1m_suffix: (0, import_chunk_adx6804h.P)().optional() }).loose().optional(), max_output_tokens: (0, import_chunk_adx6804h.c)({ default: (0, import_chunk_adx6804h.E)(), upper: (0, import_chunk_adx6804h.E)() }).loose().optional(), pricing: (0, import_chunk_adx6804h.We)([(0, import_chunk_adx6804h.n)(), w()]).optional(), capabilities: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).default([]), default_effort: (0, import_chunk_adx6804h.F)(["low", "medium", "high", "xhigh", "max"]).optional(), effort_cost_index: (0, import_chunk_adx6804h.c)({ low: (0, import_chunk_adx6804h.E)().positive().optional(), medium: (0, import_chunk_adx6804h.E)().positive().optional(), high: (0, import_chunk_adx6804h.E)().positive().optional(), xhigh: (0, import_chunk_adx6804h.E)().positive().optional(), max: (0, import_chunk_adx6804h.E)().positive().optional() }).loose().optional(), image_limits: (0, import_chunk_adx6804h.c)({ maxWidth: (0, import_chunk_adx6804h.E)().optional(), maxHeight: (0, import_chunk_adx6804h.E)().optional(), maxImageTokens: (0, import_chunk_adx6804h.E)().optional(), maxBase64Size: (0, import_chunk_adx6804h.E)().optional() }).loose().optional(), advisor_rank: (0, import_chunk_adx6804h.E)().optional(), fallback_chain: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), picker: (0, import_chunk_adx6804h.c)({ section: (0, import_chunk_adx6804h.F)(["main", "overflow", "deprecated"]).optional(), badge: (0, import_chunk_adx6804h.n)().optional(), disabled_reason: (0, import_chunk_adx6804h.n)().optional(), tiers: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).loose().optional(), deprecation: (0, import_chunk_adx6804h.c)({ retirement_dates: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional(), remapped_to: (0, import_chunk_adx6804h.n)().optional() }).loose().optional(), min_cli_version: (0, import_chunk_adx6804h.n)().optional() }).loose()), U = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ default: (0, import_chunk_adx6804h.n)(), per_provider: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).optional() }).loose()), ie = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ schema_version: (0, import_chunk_adx6804h.E)(), pricing_tiers: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), w()).default({}), models: (0, import_chunk_adx6804h.C)(L()), aliases: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), U()).default({}), defaults: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).default({}), best: (0, import_chunk_adx6804h.n)().optional(), latest_per_family: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).default({}), alias_migration: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.n)()).default({}) }).loose());
function T(e) {
  let t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  for (let a of e.models) {
    t.set(a.id, a);
    for (let r of Object.values(a.provider_ids)) {
      if (typeof r !== "string") continue;
      let d = r.toLowerCase(), l = o.get(d);
      if (l !== void 0 && l !== a.id) throw Error("model catalog: provider id collision across distinct entries");
      o.set(d, a.id);
    }
  }
  return { catalog: e, entriesById: t, catalogIdByProviderId: o };
}
function m() {
  let e = CD();
  if (e.bakedCatalog === void 0) e.bakedCatalog = T(rLs);
  return e.bakedCatalog;
}
function I6e() {
  return m().catalog;
}
var tte = I6e;
function nte(e) {
  return m().catalogIdByProviderId.get(e.toLowerCase());
}
function kd(e) {
  return m().entriesById.get(e);
}
function pBl(e) {
  let t = e.pricing;
  if (typeof t !== "string") return t;
  let o = tte().pricing_tiers;
  return Object.hasOwn(o, t) ? o[t] : void 0;
}
var Cra = ["effort", "max_effort", "xhigh_effort", "adaptive_thinking", "rejects_disabled_thinking", "thinking_disabled_effort_cap", "mid_conv_system", "mid_conv_tool_change", "per_turn_effort", "per_turn_timing", "context_management", "fast_mode", "vertex_fast_mode", "lean_prompt", "fable_5_mitigations", "refusal_fallback", "no_refusal_fallback", "opus_5_prompt_bundle", "fable_5_1_prompt_bundle", "opus_5_5_prompt_bundle", "fable_5_2_prompt_bundle", "thrifty_sonic", "turn_updates", "bash_output_audience_note", "silent_turn_reminder", "timed_silent_turn_reminder", "thinking_display_updates", "quizzical_shore", "amber_astrolabe", "bison_cairn", "larch_cistern", "haiku_5_5_early_stopping_guidance", "original_games_guidance", "finishing_work_guidance", "memory_guidance", "org_locked_thinking", "elapsed_time_reminder", "script_output_cost", "total_tokens_reminder", "tool_loaded_text", "bash_edit_diff", "refusal_retry_accepts_stop", "refusal_retry_spares_bio_llm", "send_user_file_input_whole"];
function mBl(e) {
  CD().servedCapabilityLookup = e;
}
function hBl(e, t) {
  CD().clientDataCapabilityLookup = e, CD().mainLoopCanonicalName = t;
}
function _T(e, t, o, a) {
  return ZDo(t, e, o, a) ?? M(e, t, o);
}
function ZDo(e, t, o, a) {
  return dLr(e, t) ?? a ?? CD().clientDataCapabilityLookup?.(e, t, o);
}
function e0o(e, t, o) {
  return M(e, t, o) === true ? true : void 0;
}
function M(e, t, o) {
  return CD().servedCapabilityLookup?.(t, [o, g(e)]) ?? (Ara(e, t) ? true : void 0);
}
function Ara(e, t) {
  return kd(g(e))?.capabilities.includes(t);
}
function dLr(e, t) {
  let o = Rra(t).get(e);
  return e === "per_turn_effort" && o === true && CD().mainLoopCanonicalName?.() !== t ? void 0 : o;
}
function Rra(e) {
  let t = /* @__PURE__ */ new Map(), o = import_chunk_c203g5kd.s.CLAUDE_CODE_MODEL_CAPABILITIES;
  if (o === void 0) return t;
  let a = g(e);
  for (let r of o.split(";")) {
    let d = r.indexOf("=");
    if (d !== -1) {
      let l = r.slice(0, d).trim();
      if (l === "") continue;
      if (!(l.endsWith("*") ? a.startsWith(l.slice(0, -1)) : a === l)) continue;
    }
    for (let l of (d === -1 ? r : r.slice(d + 1)).split(",")) {
      let u = l.trim(), k = !u.startsWith("-");
      t.set(k ? u : u.slice(1), k);
    }
  }
  return t;
}
function g(e) {
  return e.replace(/\[1m\]/gi, "");
}
function d1e(e, t) {
  let o = tte().aliases, a = Object.hasOwn(o, e) ? o[e] : void 0;
  if (!a) return;
  let r = a.per_provider;
  return (r && Object.hasOwn(r, t) ? r[t] : void 0) ?? a.default;
}
function t0o(e) {
  let t = d1e(e, "first_party"), o = t === void 0 ? void 0 : kd(t);
  if (o === void 0) throw Error("model-catalog.json: every aliases entry must name a models[] entry");
  return o.provider_ids.first_party;
}
var z = { "claude-3-5-haiku": "haiku35", "claude-haiku-4-5": "haiku45", "claude-haiku-5-5": "haiku55", "claude-3-5-sonnet": "sonnet35", "claude-3-7-sonnet": "sonnet37", "claude-sonnet-4-0": "sonnet40", "claude-sonnet-4-5": "sonnet45", "claude-sonnet-4-6": "sonnet46", "claude-sonnet-5": "sonnet5", "claude-sonnet-5-5": "sonnet55", "claude-opus-4-0": "opus40", "claude-opus-4-1": "opus41", "claude-opus-4-5": "opus45", "claude-opus-4-6": "opus46", "claude-opus-4-7": "opus47", "claude-opus-4-8": "opus48", "claude-opus-5": "opus5", "claude-opus-5-5": "opus55", "claude-fable-5": "fable5", "claude-fable-5-1": "fable51", "claude-fable-5-2": "fable52" };
function G(e) {
  let t = e.provider_ids, o = { firstParty: t.first_party, bedrock: t.bedrock ?? null, vertex: t.vertex ?? null, foundry: t.foundry ?? null, anthropicAws: t.anthropic_aws ?? null, anthropicGoogleCloud: t.anthropic_google_cloud ?? null, mantle: t.mantle ?? null, gateway: t.gateway ?? t.first_party };
  if (e.eager_input_streaming) o.eagerInputStreaming = e.eager_input_streaming;
  return o;
}
function H() {
  let e = {};
  for (let [t, o] of Object.entries(z)) {
    let a = kd(t);
    if (!a) throw new import_chunk_jv7av99m.A(`model catalog missing entry for '${t}' (CATALOG_ID_TO_KEY key '${o}')`, "model catalog missing entry for CATALOG_ID_TO_KEY id");
    e[o] = G(a);
  }
  return e;
}
var Xs = H();
function i(e) {
  for (let t of ["bedrock", "vertex", "foundry", "anthropicAws"]) if (e[t] === null) throw new import_chunk_jv7av99m.A(`named CLAUDE_*_CONFIG export for '${e.firstParty}' has null ${t}`, "named model config export has null 3P provider id");
  return e;
}
var ue = i(Xs.haiku35), _e = i(Xs.haiku45), ce = i(Xs.sonnet35), pe = i(Xs.sonnet37), fe = i(Xs.sonnet40), me = i(Xs.sonnet45), ge = i(Xs.sonnet46), ye = i(Xs.sonnet5), be = i(Xs.opus40), Ce = i(Xs.opus41), xe = i(Xs.opus45), Ee = i(Xs.opus46), ke = i(Xs.opus47), we = i(Xs.opus48), Ae = i(Xs.opus5), n0o = i(Xs.opus55), eyn = i(Xs.fable5), gBl = i(Xs.fable51), _Bl = { firstParty: "claude-mythos-5", bedrock: "us.anthropic.claude-mythos-5", vertex: "claude-mythos-5", foundry: "claude-mythos-5", anthropicAws: "claude-mythos-5", anthropicGoogleCloud: "claude-mythos-5", mantle: "anthropic.claude-mythos-5", gateway: "claude-mythos-5", eagerInputStreaming: { bedrock: true, vertex: true } }, cLr = ["opus55", "opus5", "opus48", "opus47", "opus46", "opus45"], yBl = Object.values(Xs).map((e) => e.firstParty), p$ = Object.fromEntries(Object.entries(Xs).map(([e, t]) => [t.firstParty, e]));
function PB(e) {
  let t = e.toLowerCase();
  for (let o of Object.values(Xs)) for (let a of Object.values(o)) if (typeof a === "string" && a.toLowerCase() === t) return o;
  return null;
}
var E4n = 6e5;
function xra() {
  let e = vr().providerCache.overturnedEntitlementDenies, t = Date.now();
  for (let [o, a] of e) if (t - a >= E4n) e.delete(o);
}
function Pra() {
  return { validatedModels: /* @__PURE__ */ new Set(), confirmedEntitlementDenies: /* @__PURE__ */ new Map(), overturnedEntitlementDenies: /* @__PURE__ */ new Map(), bedrockInferenceProfiles: void 0, settledBedrockInferenceProfiles: void 0, inferenceProfileBackingModels: /* @__PURE__ */ new Map(), modelConfigs: /* @__PURE__ */ new Map(), clientDataFetches: /* @__PURE__ */ new Map(), clientDataReplacements: /* @__PURE__ */ new WeakSet(), clientDataFetchesRunning: /* @__PURE__ */ new Set(), servedMixRecipe: void 0, capabilityOverrides: /* @__PURE__ */ new Map(), probeResults: /* @__PURE__ */ new Map(), preconnectFired: false };
}
function r0o() {
  return { allModelBetas: /* @__PURE__ */ new Map(), modelBetas: /* @__PURE__ */ new Map(), bedrockExtraBodyParamsBetas: /* @__PURE__ */ new Map(), midConversationSystem: /* @__PURE__ */ new Map() };
}
function v4n(e) {
  let { betas: t, betasCompiledOnly: o } = vr();
  for (let a of [...Object.values(t), ...Object.values(o)]) for (let r of [...a.keys()]) if (e(r)) a.delete(r);
}
function V() {
  return { providerCache: Pra(), fetchesClientData: false, fetchedModelCosts: void 0, waitedForClientData: false, includeUnsupportedModels: false, sessionModelDenyReprobe: { reprobe: void 0, honoredModels: /* @__PURE__ */ new Set(), contestedDenies: /* @__PURE__ */ new Map(), refusedModels: /* @__PURE__ */ new Set(), generation: 0, restricted: (0, import_chunk_69qhefwa.Be)() }, betas: r0o(), betasCompiledOnly: r0o(), usageCreditsOnlyModelFlags: { fableBilling: null, planShare: null, planLists: /* @__PURE__ */ new Map() }, warnedEnforcementMessages: /* @__PURE__ */ new Set(), resolvingBestModel: false, modelCapabilitiesByCachePath: /* @__PURE__ */ new Map(), gatewayModelsByCachePath: /* @__PURE__ */ new Map(), modelCapabilitiesStorageV5: void 0, gatewayModelsStorageV5: void 0, servedCatalogByKey: /* @__PURE__ */ new Map(), servedCatalogRefreshes: /* @__PURE__ */ new Map(), servedCatalogSettledRefreshes: /* @__PURE__ */ new WeakSet(), servedCatalogRefusal: void 0, servedCatalogAsked: false, servedCatalogLooksForModels: /* @__PURE__ */ new Map(), servedCatalogPostLoginRun: void 0, publishedCatalogByKey: /* @__PURE__ */ new Map(), publishedCatalogRefreshes: /* @__PURE__ */ new Map(), publishedCatalogSettledRefreshes: /* @__PURE__ */ new WeakSet(), publishedCatalogFloorMarks: /* @__PURE__ */ new Map(), publishedCatalogFloorRead: void 0, publishedCatalogFloorWrite: void 0, publishedRowNames: void 0, publishedDenyDocuments: [], clientDataUrl: { pending: void 0, document: void 0, assumesFirstPartyBaseUrl: false }, servedCatalogShadowStarted: false, servedCatalogActive: void 0, servedCatalogMaskedIds: /* @__PURE__ */ new Set(), servedCatalogMasksEveryId: false, servedCatalogPublicIds: /* @__PURE__ */ new Map(), servedCatalogMaskHydrated: false, servedCatalogMaskHydration: void 0, servedCatalogMaskRetryAt: 0, servedCatalogPersistedMaskedIds: void 0, servedCatalogMaskWrite: void 0, servedCatalogSuppressDepth: 0, servedCatalogDeactivatedRows: void 0, familySpellingVerdicts: /* @__PURE__ */ new Map(), behavesAsMemo: void 0, publishedWireIds: void 0, unservedModelDrop: void 0, modelMix: void 0, servedCatalogOffBeforeAsking: void 0, catalogDecision: void 0 };
}
var j = new import_chunk_pzzqg6s3.ze(() => V());
function vr() {
  return j.of((0, import_chunk_f9x2f6cx.N)());
}
var tx = { bedrock: "Amazon Bedrock", vertex: "Google Vertex AI", foundry: "Microsoft Foundry", anthropicAws: "Claude Platform on AWS", anthropicGoogleCloud: "Claude Platform on Google Cloud", mantle: "Amazon Bedrock (Mantle)", gateway: "Cloud gateway" }, POe = { bedrock: "CLAUDE_CODE_USE_BEDROCK", foundry: "CLAUDE_CODE_USE_FOUNDRY", anthropicAws: "CLAUDE_CODE_USE_ANTHROPIC_AWS", anthropicGoogleCloud: "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD", mantle: "CLAUDE_CODE_USE_MANTLE", vertex: "CLAUDE_CODE_USE_VERTEX" };
function oLs(e) {
  switch (e) {
    case "firstParty":
      return "anthropic";
    case "bedrock":
      return "bedrock";
    case "vertex":
      return "vertex";
    case "foundry":
      return "foundry";
    case "anthropicAws":
      return "anthropicAws";
    case "anthropicGoogleCloud":
      return "anthropicGoogleCloud";
    case "mantle":
      return "mantle";
    case "gateway":
      return "gateway";
  }
}
function K(e) {
  return e in tx;
}
function uLr(e) {
  switch (e) {
    case "anthropic":
      return "Anthropic API";
    case "customEndpoint":
      return "a custom endpoint (LLM gateway or proxy)";
    default:
      return K(e) ? tx[e] : e;
  }
}
function ve() {
  if ((0, import_chunk_f9x2f6cx.Io)() || (0, import_chunk_f9x2f6cx.xQe)() || (0, import_chunk_f9x2f6cx.kse)()) return "gateway";
  return import_chunk_c203g5kd.s.CLAUDE_CODE_USE_BEDROCK ? "bedrock" : import_chunk_c203g5kd.s.CLAUDE_CODE_USE_FOUNDRY ? "foundry" : import_chunk_c203g5kd.s.CLAUDE_CODE_USE_ANTHROPIC_AWS ? "anthropicAws" : import_chunk_c203g5kd.s.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD ? "anthropicGoogleCloud" : import_chunk_c203g5kd.s.CLAUDE_CODE_USE_MANTLE ? "mantle" : import_chunk_c203g5kd.s.CLAUDE_CODE_USE_VERTEX ? "vertex" : "firstParty";
}
function o0o() {
  return ve() !== "firstParty";
}
function tA() {
  return (0, import_chunk_78g0060s.f)(ve());
}
function jn() {
  return ve() === "firstParty";
}
function sLs() {
  return X(ve()) && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_BEDROCK_AUTH && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_VERTEX_AUTH && !import_chunk_c203g5kd.s.CLAUDE_CODE_SKIP_MANTLE_AUTH && !import_chunk_c203g5kd.s.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST;
}
function X(e) {
  switch (e) {
    case "bedrock":
    case "mantle":
    case "vertex":
      return true;
    case "foundry":
    case "firstParty":
    case "anthropicAws":
    case "anthropicGoogleCloud":
    case "gateway":
      return false;
  }
}
function cQe() {
  if (ve() === "bedrock" && import_chunk_c203g5kd.s.CLAUDE_CODE_USE_MANTLE) return "mantle";
  return null;
}
function l4t(e) {
  let t = cQe();
  return t ? `${tx[e]} + ${tx[t]}` : tx[e];
}
function J(e) {
  return e.startsWith("anthropic.") && !(0, import_chunk_zmb62hr5.wBl)((0, import_chunk_zmb62hr5.Yt)(e));
}
function rc(e) {
  if (e) {
    let t = cQe();
    if (t) {
      if (t === "mantle" && J(e)) return t;
      let o = ve(), a = PB(e);
      if (a && a[o] === null && a[t] !== null) return t;
    }
  }
  return ve();
}
function gm(e = ve()) {
  return e === "firstParty" || RI(e) || e === "gateway";
}
function RI(e = ve()) {
  return e === "anthropicAws" || e === "anthropicGoogleCloud";
}
function c1e() {
  return jn();
}
function ose(e = ve()) {
  return e === "firstParty" || RI(e) || e === "foundry" || e === "mantle";
}
function Ss() {
  return ve() === "firstParty" && ya();
}
function fLr() {
  let e = ve();
  return e === "firstParty" || e === "anthropicAws" && import_chunk_c203g5kd.s.ANTHROPIC_AWS_BASE_URL === void 0;
}
function ya() {
  if (v3()) return true;
  return pc();
}
function v3() {
  return import_chunk_c203g5kd.s._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ?? vr().clientDataUrl.assumesFirstPartyBaseUrl;
}
function pc() {
  let e = process.env.ANTHROPIC_BASE_URL;
  if (!e) return true;
  return md(e);
}
var pLr = [...import_chunk_zmb62hr5.Vy, "CLAUDE_CODE_USE_GATEWAY", "ANTHROPIC_BASE_URL", "_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL"];
function T4n(e) {
  if (import_chunk_zmb62hr5.Vy.some((a) => import_chunk_c203g5kd.R0o[a].parse(e(a)) === true)) return true;
  let t = e("ANTHROPIC_BASE_URL");
  if (!t) return false;
  return !(import_chunk_c203g5kd.Qra.parse(e("_CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL")) ?? vr().clientDataUrl.assumesFirstPartyBaseUrl) && !md(t);
}
function Ora(e) {
  return import_chunk_c203g5kd.Zra.parse(e("CLAUDE_CODE_USE_GATEWAY")) === true;
}
function mLr() {
  return (0, import_chunk_f9x2f6cx.Y)() ? void 0 : !pc();
}
function d4t() {
  if ((0, import_chunk_f9x2f6cx.Y)()) return;
  let e = ve();
  return e === "gateway" || FEe() !== void 0 || s0o(e, (t) => import_chunk_c203g5kd.s[t]).some((t) => !t.variable.startsWith("AWS_ENDPOINT_URL"));
}
function FEe() {
  let e = import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL;
  if ((0, import_chunk_f9x2f6cx.Y)() || ve() !== "firstParty" || !e || import_chunk_c203g5kd.s.ANTHROPIC_UNIX_SOCKET !== void 0 || md(e)) return;
  try {
    return new URL(e).host || void 0;
  } catch {
    return;
  }
}
function md(e) {
  try {
    let t = new URL(e).host;
    return ["api.anthropic.com"].includes(t);
  } catch {
    return false;
  }
}
var O = "[a-z]{2,4}(?:-[a-z]{2,5})?-[a-z]+-\\d+", h = "[a-z]+(?:-[a-z]+\\d+)?", b = "amazonaws\\.com|api\\.aws", x = [{ regions: /^us-gov-/, domains: b }, { regions: /^cn-/, domains: "amazonaws\\.com\\.cn" }, { regions: /^eusc-/, domains: "amazonaws\\.eu" }, { regions: /^us-iso-/, domains: "c2s\\.ic\\.gov" }, { regions: /^us-isob-/, domains: "sc2s\\.sgov\\.gov" }, { regions: /^eu-isoe-/, domains: "cloud\\.adc-e\\.uk" }, { regions: /^us-isof-/, domains: "csp\\.hci\\.ic\\.gov" }, { regions: /^[a-z]{2}-[a-z]+-\d+$/, domains: b }], q = `(?:${x.map((e) => e.domains).join("|")})`, Z = new RegExp(`\\.(?!us-gov-)${O}\\.(?:vpce\\.)?(?:${b})$`);
function s5l(e) {
  return x.findIndex(({ regions: t }) => t.test(e ?? ""));
}
function Rnd(e) {
  let t = new URL(e).hostname.toLowerCase().replace(/\.$/, ""), o = s5l(/^(?:vpce-[a-z0-9-]+\.)?[a-z-]+\.([a-z0-9-]+)\./.exec(t)?.[1]), a = x[o]?.domains;
  return a !== void 0 && new RegExp(`\\.(?:${a})$`).test(t) ? o : -1;
}
function y(e) {
  return new RegExp(`^(?:vpce-[a-z0-9-]+\\.)?${e}(?:-fips)?\\.${O}\\.(?:vpce\\.)?${q}$`);
}
var R = { firstParty: void 0, gateway: void 0, bedrock: { variables: [{ name: "ANTHROPIC_BEDROCK_BASE_URL" }, { name: "AWS_ENDPOINT_URL_BEDROCK_RUNTIME" }, { name: "AWS_ENDPOINT_URL_BEDROCK" }, { name: "AWS_ENDPOINT_URL" }], ownHost: y("bedrock(?:-runtime)?") }, mantle: { variables: [{ name: "ANTHROPIC_BEDROCK_MANTLE_BASE_URL" }], ownHost: y("bedrock-mantle") }, anthropicAws: { variables: [{ name: "ANTHROPIC_AWS_BASE_URL" }], ownHost: y("aws-external-anthropic") }, vertex: { variables: [{ name: "ANTHROPIC_VERTEX_BASE_URL" }], ownHost: new RegExp(`^(?:aiplatform|${h}-aiplatform|aiplatform\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`) }, anthropicGoogleCloud: { variables: [{ name: "ANTHROPIC_GOOGLE_CLOUD_BASE_URL" }], ownHost: new RegExp(`^(?:claude|claude\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`) }, foundry: { variables: [{ name: "ANTHROPIC_FOUNDRY_BASE_URL" }, { name: "ANTHROPIC_FOUNDRY_RESOURCE", urlOf: (e) => `https://${e}.services.ai.azure.com` }], ownHost: /^[a-z0-9-]{2,64}\.(?:services\.ai|cognitiveservices|openai)\.azure\.(?:com|us|cn)$/ } };
function jxt(e) {
  return R[e]?.variables ?? [];
}
function s0o(e, t) {
  let o = [];
  for (let { name: a, urlOf: r } of jxt(e)) {
    let d = t(a);
    if (!d) continue;
    let l = r === void 0 ? d : r(d), u = SBl(e, l);
    if (u !== "own") o.push({ variable: a, url: l, verdict: u });
  }
  return o;
}
function SBl(e, t) {
  let o = R[e], a;
  try {
    a = new URL(t);
  } catch {
    return "unparsable";
  }
  let r = a.hostname.toLowerCase().replace(/\.$/, "");
  if (o === void 0 || !o.ownHost.test(r)) return "foreign";
  return a.protocol === "https:" ? "own" : "insecure";
}
function iLs(e, t) {
  return SBl(e, t) === "own";
}
function i0o() {
  let e = import_chunk_c203g5kd.s.ANTHROPIC_BEDROCK_BASE_URL;
  if (e === void 0) return true;
  return iLs("bedrock", e) && Z.test(new URL(e).hostname.toLowerCase().replace(/\.$/, ""));
}
function hLr() {
  return ya() || import_chunk_c203g5kd.s.CLAUDE_CODE_PROPAGATE_TRACEPARENT;
}
