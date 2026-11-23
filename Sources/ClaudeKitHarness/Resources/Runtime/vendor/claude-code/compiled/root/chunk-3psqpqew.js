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
var chunk_3psqpqew_exports = {};
__export(chunk_3psqpqew_exports, {
  ALLOW_RULE_SET_ASIDE_REASON: () => import_chunk_pbteexar.NDs,
  AUTO_MODE_UNAVAILABLE_STOP_REASON: () => import_chunk_pbteexar.$Ho,
  BASH_COMMAND_CLAMP_CRASH_REASON: () => import_chunk_pbteexar.LDr,
  BASH_COMMAND_CLAMP_DENY_REASON: () => import_chunk_pbteexar.d_n,
  CANCELLED_AT_AUTO_MODE_END_OFFER_REASON: () => import_chunk_pbteexar.GHo,
  CANCELLED_AT_CLASSIFIER_NOTICE_REASON: () => import_chunk_pbteexar.jHo,
  CAN_USE_TOOL_ABORTED_DENY_REASON: () => import_chunk_pbteexar.c6e,
  CAN_USE_TOOL_ABORTED_REASON: () => import_chunk_pbteexar.f_n,
  CAN_USE_TOOL_HELD_FOR_MESSAGE_DENY_REASON: () => import_chunk_pbteexar.Lta,
  CAN_USE_TOOL_HELD_FOR_MESSAGE_REASON: () => import_chunk_pbteexar.UDr,
  CAN_USE_TOOL_INVALID_RESULT_DENY_REASON: () => import_chunk_pbteexar.fqt,
  CAN_USE_TOOL_INVALID_RESULT_REASON: () => import_chunk_pbteexar.cxt,
  CAN_USE_TOOL_NOT_SHOWN_DENY_REASON: () => import_chunk_pbteexar.Dta,
  CAN_USE_TOOL_NOT_SHOWN_REASON: () => import_chunk_pbteexar.UDs,
  CAN_USE_TOOL_PROMPT_TOOL_GONE_DENY_REASON: () => import_chunk_pbteexar.Mta,
  CAN_USE_TOOL_PROMPT_TOOL_GONE_REASON: () => import_chunk_pbteexar.BDs,
  CAN_USE_TOOL_PROMPT_TOOL_IS_CLOUD_BROWSER_DENY_REASON: () => import_chunk_pbteexar.Hta,
  CAN_USE_TOOL_PROMPT_TOOL_IS_CLOUD_BROWSER_REASON: () => import_chunk_pbteexar.WDs,
  CAN_USE_TOOL_REQUEST_FAILED_DENY_REASON: () => import_chunk_pbteexar.Mqn,
  CAN_USE_TOOL_REQUEST_FAILED_REASON: () => import_chunk_pbteexar.XFe,
  CAN_USE_TOOL_STREAM_CLOSED_DENY_REASON: () => import_chunk_pbteexar.Ita,
  CAN_USE_TOOL_STREAM_CLOSED_REASON: () => import_chunk_pbteexar.uqt,
  CCR_SUPPORTED_DEFAULT_MODES: () => import_chunk_pbteexar.xqn,
  CIRCUIT_BREAKER_TRAITS: () => import_chunk_pbteexar.Qut,
  CLASSIFIER_PARSE_FAILURE_REASON_STEM: () => import_chunk_pbteexar.kta,
  CLASSIFIER_SWITCHED_OFF_KIND: () => import_chunk_pbteexar.Goe,
  CLASSIFIER_TOO_LONG_COMPACTING_REASON: () => import_chunk_pbteexar.UHo,
  CLASSIFIER_TRANSCRIPT_TOO_LONG_PROMPT: () => import_chunk_pbteexar.Eta,
  CLASSIFIER_TRANSCRIPT_TOO_LONG_REASON: () => import_chunk_pbteexar.wEe,
  CLASSIFIER_UNAVAILABLE_REASON: () => import_chunk_pbteexar.bEe,
  DECISION_REASON_CODES: () => import_chunk_pbteexar.WHo,
  EXTERNAL_PERMISSION_MODES: () => import_chunk_pbteexar.cF,
  HOOK_ALLOW_FLAGGED_HEADLESS_DENY_REASON: () => import_chunk_pbteexar.$Ds,
  HOOK_REWRITE_HEADLESS_DENY_REASON: () => import_chunk_pbteexar.FDr,
  HOOK_REWRITTEN_INPUT_ASK_REASON: () => import_chunk_pbteexar.FDs,
  HOOK_REWROTE_INPUT_REVIEW_REASON: () => import_chunk_pbteexar.LDs,
  INLINE_CODE_FLAGS: () => import_chunk_pbteexar.Oqn,
  MCP_ASK_FOR_TOOLS_MAX: () => import_chunk_pbteexar.Pqn,
  MCP_ASK_FOR_TOOLS_NAME: () => import_chunk_pbteexar.RDr,
  MEMORY_PAUSED_MESSAGE: () => import_chunk_pbteexar.u_n,
  MEMORY_TOGGLED_OFF_REASON: () => import_chunk_pbteexar.BHo,
  NO_APPROVAL_SURFACE_DENY_REASON: () => import_chunk_pbteexar.Tta,
  NO_APPROVAL_SURFACE_REASON: () => import_chunk_pbteexar.$Dr,
  NO_CONFIG_HOME_DENY_REASON: () => import_chunk_pbteexar.lqt,
  NO_PROJECT_DIRECTORY_DENY_REASON: () => import_chunk_pbteexar.FHo,
  NO_PROMPT_SURFACE_DENY_REASON: () => import_chunk_pbteexar.Cta,
  OTHER_REASON_LABELS: () => import_chunk_pbteexar.Ota,
  OUTSIDE_FILE_TOOL_READS_BLOCKED_DENY_REASON: () => import_chunk_pbteexar.SEe,
  OUTSIDE_READS_BLOCKED_DENY_REASON: () => import_chunk_pbteexar.Hz,
  OUTSIDE_WORKING_DIRECTORIES_ASK_REASON: () => import_chunk_pbteexar.MDr,
  OUTSIDE_WRITES_BLOCKED_DENY_REASON: () => import_chunk_pbteexar.a_n,
  PERMISSION_DECISION_REASON_TYPES: () => import_chunk_pbteexar.i_n,
  PERMISSION_MODES: () => import_chunk_pbteexar.LE,
  PERMISSION_MODE_MANUAL_ALIAS: () => import_chunk_pbteexar.T8,
  PERMISSION_REQUEST_TOOL_KINDS: () => import_chunk_pbteexar.wta,
  POWERSHELL_COMPOUND_READ_ONLY_PART_REASON: () => import_chunk_pbteexar.ODr,
  POWERSHELL_READ_ONLY_ALLOW_REASON: () => import_chunk_pbteexar.PDr,
  PROMPT_TOOL_ALLOW_FLAGGED_MCP_DENY_REASON: () => import_chunk_pbteexar.Ata,
  PROMPT_TOOL_ALLOW_IMITATOR_DENY_REASON: () => import_chunk_pbteexar.Rta,
  PROMPT_TOOL_ALLOW_REFUSED_GRANT_DENY_REASON: () => import_chunk_pbteexar.Pta,
  PROMPT_TOOL_ALLOW_SHARED_NAME_DENY_REASON: () => import_chunk_pbteexar.xta,
  READ_ONLY_AUTO_ALLOW_REASON: () => import_chunk_pbteexar.YFe,
  RESTRICTED_MODE_DENY_REASON: () => import_chunk_pbteexar.HDr,
  SANDBOX_AUTO_ALLOW_REASON: () => import_chunk_pbteexar.pOe,
  SERVER_CLASSIFIER_NO_EXPLANATION_REASON: () => import_chunk_pbteexar.NDr,
  SERVER_HOLDS_SHELL_ALLOW_REASON: () => import_chunk_pbteexar.IDr,
  SETTINGS_WRITES_BLOCKED_DENY_REASON: () => import_chunk_pbteexar.l_n,
  SUSPICIOUS_WINDOWS_PATH_READ_REASON: () => import_chunk_pbteexar.yta,
  TOOL_HOST_ALLOW_IS_CLASSIFIED_REASON: () => import_chunk_pbteexar.NHo,
  UNRECOGNIZED_PERMISSION_MODE_ERROR: () => import_chunk_pbteexar.l6e,
  avoidsPromptsApartFromSetting: () => import_chunk_pbteexar.EI,
  carriesPersonsAsk: () => import_chunk_pbteexar._ta,
  classifierDenyKind: () => import_chunk_pbteexar.c_n,
  classifierWrittenReason: () => import_chunk_pbteexar.vta,
  decisionReasonCode: () => import_chunk_pbteexar.kEe,
  decisionReasonTypeOnWire: () => import_chunk_pbteexar.cqt,
  fileToolReadsBlocked: () => import_chunk_pbteexar.jS,
  isAutoModeDenyCircuitBreaker: () => import_chunk_pbteexar.mce,
  isBypassImmuneCircuitBreaker: () => import_chunk_pbteexar.MK,
  isClassifierRoutedCircuitBreaker: () => import_chunk_pbteexar.i$,
  isHostPersonOnlyCircuitBreaker: () => import_chunk_pbteexar.HK,
  isInvalidInputDeny: () => import_chunk_pbteexar.yEe,
  isLocalProjectionOnlyCircuitBreaker: () => import_chunk_pbteexar.Sta,
  isOutsideReadsBlockedAsk: () => import_chunk_pbteexar.IM,
  isPreAskDeny: () => import_chunk_pbteexar.bta,
  isRecordableDenial: () => import_chunk_pbteexar.dxt,
  isSandboxOverrideUnderReadBlock: () => import_chunk_pbteexar.dqt,
  isServedUnplaceableCircuitBreaker: () => import_chunk_pbteexar.xDr,
  isUnwaivableBypassImmuneCircuitBreaker: () => import_chunk_pbteexar.LHo,
  mustBeLeftToAPerson: () => import_chunk_pbteexar.d6e,
  normalizePermissionModeAlias: () => import_chunk_pbteexar.NE,
  outsideReadsRuntimePathAsk: () => import_chunk_pbteexar.pT,
  outsideReadsSedScriptAsk: () => import_chunk_pbteexar.DDr,
  outsideReadsTooComplexAsk: () => import_chunk_pbteexar.joe,
  parsePermissionMode: () => import_chunk_pbteexar.a_,
  readBlockSettingsOn: () => import_chunk_pbteexar.Zut,
  refusedAskOf: () => import_chunk_pbteexar.Iqn
});
module.exports = __toCommonJS(chunk_3psqpqew_exports);
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
