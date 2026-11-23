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
var chunk_rpdn91q1_exports = {};
__export(chunk_rpdn91q1_exports, {
  JFl: () => JFl,
  QFl: () => QFl,
  TMo: () => TMo,
  Tgn: () => Tgn,
  UKn: () => UKn,
  Xze: () => Xze,
  ZFl: () => ZFl,
  e1l: () => e1l,
  vgn: () => vgn,
  wHs: () => wHs,
  xHr: () => xHr
});
module.exports = __toCommonJS(chunk_rpdn91q1_exports);
var import_chunk_gd77dyw4 = require("/$bunfs/root/chunk-gd77dyw4.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_zmb62hr5 = require("/$bunfs/root/chunk-zmb62hr5.js");
var xHr = { opus: "ANTHROPIC_DEFAULT_OPUS_MODEL", sonnet: "ANTHROPIC_DEFAULT_SONNET_MODEL", haiku: "ANTHROPIC_DEFAULT_HAIKU_MODEL", fable: "ANTHROPIC_DEFAULT_FABLE_MODEL" }, s = ["ANTHROPIC_BEDROCK_BASE_URL", "ANTHROPIC_BEDROCK_MANTLE_BASE_URL", "ANTHROPIC_VERTEX_BASE_URL", "ANTHROPIC_FOUNDRY_BASE_URL"], i = [...import_chunk_zmb62hr5.Vy, "ANTHROPIC_BASE_URL", "CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS", "CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP", "AWS_REGION", "AWS_PROFILE", ...s, "AWS_BEARER_TOKEN_BEDROCK", ...import_chunk_gd77dyw4.Pge, "ANTHROPIC_VERTEX_PROJECT_ID", "CLOUD_ML_REGION", "ANTHROPIC_FOUNDRY_RESOURCE"], JFl = [...import_chunk_zmb62hr5.Vy, ...s, "ANTHROPIC_BASE_URL", "AWS_REGION", "AWS_DEFAULT_REGION", "AWS_PROFILE", "CLOUD_ML_REGION", "ANTHROPIC_VERTEX_PROJECT_ID", "ANTHROPIC_FOUNDRY_RESOURCE", "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION", ...import_chunk_2gtmjt3y.vpt.map(([, S]) => S)], QFl = [...i, "AWS_ENDPOINT_URL_BEDROCK_RUNTIME", "AWS_ENDPOINT_URL_BEDROCK", "AWS_ENDPOINT_URL", "AWS_ENDPOINT_URL_STS", "AWS_ENDPOINT_URL_SSO", "AWS_ENDPOINT_URL_SSO_OIDC", "AWS_ENDPOINT_URL_SIGNIN", "ANTHROPIC_BEDROCK_REGION_PREFIX", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", ...import_chunk_gd77dyw4.n4t], ZFl = ["AWS_BEARER_TOKEN_BEDROCK", "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "GOOGLE_APPLICATION_CREDENTIALS", "ANTHROPIC_BEDROCK_SERVICE_TIER"], D = ["ANTHROPIC_BEDROCK_BASE_URL", "ANTHROPIC_BEDROCK_MANTLE_BASE_URL"], a = ["AWS_REGION", "AWS_DEFAULT_REGION", "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION"];
function wHs(S, e) {
  {
    let { awsPartitionOfRegion: R, awsPartitionOfServiceUrl: E, classifyProviderEndpoint: n, providerEndpointVariables: A } = require("/$bunfs/root/chunk-1h13dc6g.js"), O = R(e);
    for (let [N, t] of Object.entries(S ?? {})) {
      let _ = N.toUpperCase(), I = t.trim();
      if (I === "") continue;
      if (a.includes(_)) {
        if (O < 0 || R(I) !== O) return _;
        continue;
      }
      let r = ["bedrock", "mantle"].find((T) => A(T).some((L) => L.name === _));
      if (r === void 0) continue;
      if (n(r, I) !== "own" || O < 0 || E(I) !== O) return _;
    }
  }
  return;
}
function e1l(S, e) {
  let R = new Map(Object.entries(S).map(([_, I]) => [_.toUpperCase(), I])), E = new Set(Object.entries(e ?? {}).filter(([, _]) => _.trim() !== "").map(([_]) => _.toUpperCase())), n = wHs(e, R.get("AWS_REGION")) !== void 0 && D.some((_) => R.get(_) === "") ? ["AWS_BEARER_TOKEN_BEDROCK"] : [], A = Boolean(R.get("AWS_CONFIG_FILE")) && R.get("AWS_ACCESS_KEY_ID") === "", O = E.has("AWS_PROFILE") || E.has("AWS_ACCESS_KEY_ID"), N = E.has("AWS_CONFIG_FILE") || E.has("AWS_SHARED_CREDENTIALS_FILE"), t = E.has("AWS_ACCESS_KEY_ID");
  if (!(N || t)) return { dropped: [], cleared: n };
  return { dropped: ["AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", ...A || t || E.has("AWS_PROFILE") ? ["AWS_PROFILE"] : [], ...A && !O ? ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_BEARER_TOKEN_BEDROCK"] : []], cleared: [...n, ...t && !R.has("AWS_SESSION_TOKEN") && !E.has("AWS_SESSION_TOKEN") ? ["AWS_SESSION_TOKEN"] : []] };
}
var vgn = [...i, "AWS_CONFIG_FILE", "AWS_SHARED_CREDENTIALS_FILE", "GOOGLE_APPLICATION_CREDENTIALS", "AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "ANTHROPIC_BEDROCK_SERVICE_TIER", ...Object.values(xHr), "ANTHROPIC_DEFAULT_MODEL", "ANTHROPIC_SMALL_FAST_MODEL", "ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION", ...import_chunk_2gtmjt3y.vpt.map(([, S]) => S), "ANTHROPIC_CUSTOM_HEADERS"], Tgn = ["availableModels", "availableModelsMatch", "modelPicker"], Xze = /^[\x21-\x7e]{1,512}$/, C = ["AWS_BEARER_TOKEN_BEDROCK", "AWS_PROFILE", "AWS_ACCESS_KEY_ID"], UKn = ["ANTHROPIC_FOUNDRY_API_KEY", "ANTHROPIC_FOUNDRY_AUTH_TOKEN"], o = { bedrock: C, mantle: C, vertex: ["GOOGLE_APPLICATION_CREDENTIALS"], foundry: UKn };
function TMo(S, e, R, E) {
  let n = new Set(Object.entries(e ?? {}).filter(([, A]) => A.trim() !== "").map(([A]) => A.toUpperCase()));
  return o[S]?.find((A) => n.has(A) && !(A === "AWS_BEARER_TOKEN_BEDROCK" && wHs(e, E) !== void 0)) ?? (o[S] === C && R?.trim() ? "awsCredentialExport" : void 0);
}
