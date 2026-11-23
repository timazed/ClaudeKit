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
var chunk_b9tzkzvd_exports = {};
__export(chunk_b9tzkzvd_exports, {
  isExpectedMcpCallError: () => Ue
});
module.exports = __toCommonJS(chunk_b9tzkzvd_exports);
var import_chunk_hnhsk56h = require("/$bunfs/root/chunk-hnhsk56h.js");
var import_chunk_6d79247d = require("/$bunfs/root/chunk-6d79247d.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var r = (0, import_chunk_adx6804h.L6e)().superRefine((e, o) => {
  if (!URL.canParse(e)) return o.addIssue({ code: import_chunk_adx6804h.fJ.custom, message: "URL must be parseable", fatal: true }), import_chunk_adx6804h.m$;
}).refine((e) => {
  let o = new URL(e);
  return o.protocol !== "javascript:" && o.protocol !== "data:" && o.protocol !== "vbscript:";
}, { message: "URL cannot use javascript:, data:, or vbscript: scheme" }), b = (0, import_chunk_adx6804h.$t)({ resource: (0, import_chunk_adx6804h.n)().url(), authorization_servers: (0, import_chunk_adx6804h.C)(r).optional(), jwks_uri: (0, import_chunk_adx6804h.n)().url().optional(), scopes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), bearer_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), resource_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), resource_name: (0, import_chunk_adx6804h.n)().optional(), resource_documentation: (0, import_chunk_adx6804h.n)().optional(), resource_policy_uri: (0, import_chunk_adx6804h.n)().url().optional(), resource_tos_uri: (0, import_chunk_adx6804h.n)().url().optional(), tls_client_certificate_bound_access_tokens: (0, import_chunk_adx6804h.P)().optional(), authorization_details_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), dpop_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), dpop_bound_access_tokens_required: (0, import_chunk_adx6804h.P)().optional() }), k = (0, import_chunk_adx6804h.$t)({ issuer: (0, import_chunk_adx6804h.n)(), authorization_endpoint: r, token_endpoint: r, registration_endpoint: r.optional(), scopes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), response_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), response_modes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), grant_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), service_documentation: r.optional(), revocation_endpoint: r.optional(), revocation_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), revocation_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), introspection_endpoint: (0, import_chunk_adx6804h.n)().optional(), introspection_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), introspection_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), code_challenge_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), client_id_metadata_document_supported: (0, import_chunk_adx6804h.P)().optional() }), T = (0, import_chunk_adx6804h.$t)({ issuer: (0, import_chunk_adx6804h.n)(), authorization_endpoint: r, token_endpoint: r, userinfo_endpoint: r.optional(), jwks_uri: r, registration_endpoint: r.optional(), scopes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), response_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), response_modes_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), grant_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), acr_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), subject_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), id_token_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), id_token_encryption_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), id_token_encryption_enc_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), userinfo_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), userinfo_encryption_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), userinfo_encryption_enc_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), request_object_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), request_object_encryption_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), request_object_encryption_enc_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_methods_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), token_endpoint_auth_signing_alg_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), display_values_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), claim_types_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), claims_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), service_documentation: (0, import_chunk_adx6804h.n)().optional(), claims_locales_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), ui_locales_supported: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), claims_parameter_supported: (0, import_chunk_adx6804h.P)().optional(), request_parameter_supported: (0, import_chunk_adx6804h.P)().optional(), request_uri_parameter_supported: (0, import_chunk_adx6804h.P)().optional(), require_request_uri_registration: (0, import_chunk_adx6804h.P)().optional(), op_policy_uri: r.optional(), op_tos_uri: r.optional(), client_id_metadata_document_supported: (0, import_chunk_adx6804h.P)().optional() }), O = (0, import_chunk_adx6804h.c)({ ...T.shape, ...k.pick({ code_challenge_methods_supported: true }).shape }), M = (0, import_chunk_adx6804h.c)({ access_token: (0, import_chunk_adx6804h.n)(), id_token: (0, import_chunk_adx6804h.n)().optional(), token_type: (0, import_chunk_adx6804h.n)(), expires_in: (0, import_chunk_adx6804h.Tft)().optional(), scope: (0, import_chunk_adx6804h.n)().optional(), refresh_token: (0, import_chunk_adx6804h.n)().optional() }).strip(), I = (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.n)(), error_description: (0, import_chunk_adx6804h.n)().optional(), error_uri: (0, import_chunk_adx6804h.n)().optional() }), S = r.optional().or((0, import_chunk_adx6804h.v)("").transform(() => {
  return;
})), L = (0, import_chunk_adx6804h.c)({ redirect_uris: (0, import_chunk_adx6804h.C)(r), token_endpoint_auth_method: (0, import_chunk_adx6804h.n)().optional(), grant_types: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), response_types: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), client_name: (0, import_chunk_adx6804h.n)().optional(), client_uri: r.optional(), logo_uri: S, scope: (0, import_chunk_adx6804h.n)().optional(), contacts: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), tos_uri: S, policy_uri: (0, import_chunk_adx6804h.n)().optional(), jwks_uri: r.optional(), jwks: (0, import_chunk_adx6804h.UEe)().optional(), software_id: (0, import_chunk_adx6804h.n)().optional(), software_version: (0, import_chunk_adx6804h.n)().optional(), software_statement: (0, import_chunk_adx6804h.n)().optional() }).strip(), H = (0, import_chunk_adx6804h.c)({ client_id: (0, import_chunk_adx6804h.n)(), client_secret: (0, import_chunk_adx6804h.n)().optional(), client_id_issued_at: (0, import_chunk_adx6804h.E)().optional(), client_secret_expires_at: (0, import_chunk_adx6804h.E)().optional() }).strip(), j = L.merge(H), V = (0, import_chunk_adx6804h.c)({ error: (0, import_chunk_adx6804h.n)(), error_description: (0, import_chunk_adx6804h.n)().optional() }).strip(), Z = (0, import_chunk_adx6804h.c)({ token: (0, import_chunk_adx6804h.n)(), token_type_hint: (0, import_chunk_adx6804h.n)().optional() }).strip();
class t extends Error {
  constructor(e, o) {
    super(e);
    this.errorUri = o, this.name = this.constructor.name;
  }
  toResponseObject() {
    let e = { error: this.errorCode, error_description: this.message };
    if (this.errorUri) e.error_uri = this.errorUri;
    return e;
  }
  get errorCode() {
    return this.constructor.errorCode;
  }
}
class d extends t {
}
d.errorCode = "invalid_request";
class s extends t {
}
s.errorCode = "invalid_client";
class a extends t {
}
a.errorCode = "invalid_grant";
class i extends t {
}
i.errorCode = "unauthorized_client";
class h extends t {
}
h.errorCode = "unsupported_grant_type";
class p extends t {
}
p.errorCode = "invalid_scope";
class _ extends t {
}
_.errorCode = "access_denied";
class u extends t {
}
u.errorCode = "server_error";
class f extends t {
}
f.errorCode = "temporarily_unavailable";
class w extends t {
}
w.errorCode = "unsupported_response_type";
class m extends t {
}
m.errorCode = "unsupported_token_type";
class g extends t {
}
g.errorCode = "invalid_token";
class y extends t {
}
y.errorCode = "method_not_allowed";
class z extends t {
}
z.errorCode = "too_many_requests";
class l extends t {
}
l.errorCode = "invalid_client_metadata";
class R extends t {
}
R.errorCode = "insufficient_scope";
class x extends t {
}
x.errorCode = "invalid_target";
var W = { [d.errorCode]: d, [s.errorCode]: s, [a.errorCode]: a, [i.errorCode]: i, [h.errorCode]: h, [p.errorCode]: p, [_.errorCode]: _, [u.errorCode]: u, [f.errorCode]: f, [w.errorCode]: w, [m.errorCode]: m, [g.errorCode]: g, [y.errorCode]: y, [z.errorCode]: z, [l.errorCode]: l, [R.errorCode]: R, [x.errorCode]: x };
class U extends Error {
  constructor(e, o) {
    super(`Streamable HTTP error: ${o}`);
    this.code = e;
  }
}
var D = /* @__PURE__ */ new Set(["ClaudeAiProxyBearerRejectedError", "McpAuthError", "McpError", "McpResponseSchemaError", "McpToolCallError", "ProtocolError", "SdkError", "SdkHttpError", "StreamableHTTPError", "TelemetrySafeError"]);
function Ue(e) {
  if (e instanceof DOMException) return e.name === "TimeoutError";
  if (!(e instanceof Error)) return false;
  if (e instanceof import_chunk_jv7av99m.A) return true;
  if (e instanceof U) return true;
  if (("errorCode" in e && typeof e.errorCode === "string" || "code" in e && typeof e.code === "string") && /^HTTP 40[13]\b/.test(e.message)) return true;
  let o = e.name !== "Error" ? e.name : e.constructor?.name ?? "";
  return D.has(o);
}
