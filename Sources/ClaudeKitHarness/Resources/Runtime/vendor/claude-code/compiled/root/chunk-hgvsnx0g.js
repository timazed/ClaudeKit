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
var chunk_hgvsnx0g_exports = {};
__export(chunk_hgvsnx0g_exports, {
  AbortError: () => import_chunk_jv7av99m.Ie,
  BUN_CONNECTION_CLOSED_MESSAGE_PREFIX: () => import_chunk_jv7av99m.AFr,
  ClaudeError: () => import_chunk_jv7av99m.Ppt,
  CliUserError: () => import_chunk_jv7av99m.aE,
  ConfigParseError: () => import_chunk_jv7av99m.JB,
  DAEMON_EXITED_BEFORE_REACHABLE_PHRASE: () => import_chunk_jv7av99m.k3t,
  DAEMON_UNREACHABLE_TIMEOUT_PHRASE: () => import_chunk_jv7av99m.w3t,
  LANGUAGE_ERROR_NAMES: () => import_chunk_jv7av99m.CFr,
  MalformedCommandError: () => import_chunk_jv7av99m.WE,
  OutsideHostsFoldersAbortError: () => import_chunk_jv7av99m.l5n,
  PERMISSION_DENIED_CODES: () => import_chunk_jv7av99m.Fca,
  RESOURCE_EXHAUSTION_CODES: () => import_chunk_jv7av99m.yVe,
  ShellError: () => import_chunk_jv7av99m.ST,
  StreamClosedAbortError: () => import_chunk_jv7av99m.wp,
  TelemetrySafeError_I_VERIFIED_THIS_IS_NOT_CODE_OR_FILEPATHS: () => import_chunk_jv7av99m.A,
  TeleportOperationError: () => import_chunk_jv7av99m.Wf,
  WireSafeControlError: () => import_chunk_jv7av99m.gr,
  classifyAxiosError: () => import_chunk_jv7av99m.$i,
  errnoShapedCode: () => import_chunk_jv7av99m.wte,
  errorMessage: () => import_chunk_jv7av99m.d,
  errorStackOrMessage: () => import_chunk_jv7av99m.u5n,
  extractErrnoTokens: () => import_chunk_jv7av99m.dNo,
  findInCauseChain: () => import_chunk_jv7av99m.xL,
  getErrnoCode: () => import_chunk_jv7av99m.w,
  getErrnoPath: () => import_chunk_jv7av99m.xFr,
  getTelemetryChildExitStatus: () => import_chunk_jv7av99m.Dca,
  getTelemetryMessage: () => import_chunk_jv7av99m.QB,
  hasExactErrorMessage: () => import_chunk_jv7av99m.MD,
  isAbortError: () => import_chunk_jv7av99m.Fe,
  isDiskFullErrno: () => import_chunk_jv7av99m.nH,
  isE2BIG: () => import_chunk_jv7av99m.$ca,
  isEISDIR: () => import_chunk_jv7av99m.Kz,
  isENOENT: () => import_chunk_jv7av99m.J,
  isEnvFsErrno: () => import_chunk_jv7av99m.Tk,
  isEnvFsErrnoCode: () => import_chunk_jv7av99m.NFs,
  isExpectedApiError: () => import_chunk_jv7av99m.M_,
  isFsInaccessible: () => import_chunk_jv7av99m.fn,
  isFsInaccessibleCode: () => import_chunk_jv7av99m.HD,
  isHttpServerConnReset: () => import_chunk_jv7av99m.Uca,
  isMaxContentLengthError: () => import_chunk_jv7av99m.rH,
  isNonRetryableClientError: () => import_chunk_jv7av99m.CJ,
  isPathAbsent: () => import_chunk_jv7av99m.kn,
  isSadFsErrno: () => import_chunk_jv7av99m.SS,
  isSadFsErrnoCode: () => import_chunk_jv7av99m.p5n,
  isSadResourceErrno: () => import_chunk_jv7av99m.PFr,
  isSyscallError: () => import_chunk_jv7av99m.pa,
  isWin32ReadEbadf: () => import_chunk_jv7av99m.f5n,
  languageErrorNameOf: () => import_chunk_jv7av99m.D1e,
  sanitizeClassName: () => import_chunk_jv7av99m.tH,
  sanitizeErrnoForTelemetry: () => import_chunk_jv7av99m.Cr,
  sanitizeErrnoTokenForTelemetry: () => import_chunk_jv7av99m.Cy,
  sanitizeErrorName: () => import_chunk_jv7av99m.Qu,
  sanitizeTopFrame: () => import_chunk_jv7av99m.c5n,
  sanitizedBackgroundExitCauseForTelemetry: () => import_chunk_jv7av99m.Lca,
  sanitizedClassNameForTelemetry: () => import_chunk_jv7av99m.Nca,
  sanitizedConnectionCodeForTelemetry: () => import_chunk_jv7av99m.H3,
  sanitizedConnectionCodeLowerForTelemetry: () => import_chunk_jv7av99m.d5n,
  sanitizedErrCodeForTelemetry: () => import_chunk_jv7av99m.op,
  sanitizedErrnoLowerForTelemetry: () => import_chunk_jv7av99m.Vz,
  sanitizedErrorClassNameForTelemetry: () => import_chunk_jv7av99m.E3t,
  sanitizedErrorNameForTelemetry: () => import_chunk_jv7av99m.A$,
  sanitizedFeatureErrorCodeForTelemetry: () => import_chunk_jv7av99m.VK,
  sanitizedMachineReasonForTelemetry: () => import_chunk_jv7av99m.dA,
  sanitizedOAuthErrorTypeForTelemetry: () => import_chunk_jv7av99m.RFr,
  storageCauseErrnoCode: () => import_chunk_jv7av99m.kO,
  toError: () => import_chunk_jv7av99m.D,
  withTelemetryChildExitStatus: () => import_chunk_jv7av99m.Hca,
  withTelemetryFacts: () => import_chunk_jv7av99m.M3,
  withTelemetryMessage: () => import_chunk_jv7av99m.Ye
});
module.exports = __toCommonJS(chunk_hgvsnx0g_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
