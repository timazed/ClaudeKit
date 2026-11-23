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
var chunk_tpn2kte3_exports = {};
__export(chunk_tpn2kte3_exports, {
  uQe: () => uQe
});
module.exports = __toCommonJS(chunk_tpn2kte3_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var uQe = (0, import_chunk_w1d7ygsk.V)(function(m) {
  m.HttpAuthLocation = void 0;
  (function(t) {
    t.HEADER = "header", t.QUERY = "query";
  })(m.HttpAuthLocation || (m.HttpAuthLocation = {}));
  m.HttpApiKeyAuthLocation = void 0;
  (function(t) {
    t.HEADER = "header", t.QUERY = "query";
  })(m.HttpApiKeyAuthLocation || (m.HttpApiKeyAuthLocation = {}));
  m.EndpointURLScheme = void 0;
  (function(t) {
    t.HTTP = "http", t.HTTPS = "https";
  })(m.EndpointURLScheme || (m.EndpointURLScheme = {}));
  m.AlgorithmId = void 0;
  (function(t) {
    t.MD5 = "md5", t.CRC32 = "crc32", t.CRC32C = "crc32c", t.SHA1 = "sha1", t.SHA256 = "sha256";
  })(m.AlgorithmId || (m.AlgorithmId = {}));
  var h = (t) => {
    let o = [];
    if (t.sha256 !== void 0) o.push({ algorithmId: () => m.AlgorithmId.SHA256, checksumConstructor: () => t.sha256 });
    if (t.md5 != null) o.push({ algorithmId: () => m.AlgorithmId.MD5, checksumConstructor: () => t.md5 });
    return { addChecksumAlgorithm(s) {
      o.push(s);
    }, checksumAlgorithms() {
      return o;
    } };
  }, x = (t) => {
    let o = {};
    return t.checksumAlgorithms().forEach((s) => {
      o[s.algorithmId()] = s.checksumConstructor();
    }), o;
  }, d = (t) => h(t), a = (t) => x(t);
  m.FieldPosition = void 0;
  (function(t) {
    t[t.HEADER = 0] = "HEADER", t[t.TRAILER = 1] = "TRAILER";
  })(m.FieldPosition || (m.FieldPosition = {}));
  var E = "__smithy_context";
  m.IniSectionType = void 0;
  (function(t) {
    t.PROFILE = "profile", t.SSO_SESSION = "sso-session", t.SERVICES = "services";
  })(m.IniSectionType || (m.IniSectionType = {}));
  m.RequestHandlerProtocol = void 0;
  (function(t) {
    t.HTTP_0_9 = "http/0.9", t.HTTP_1_0 = "http/1.0", t.TDS_8_0 = "tds/8.0";
  })(m.RequestHandlerProtocol || (m.RequestHandlerProtocol = {}));
  m.SMITHY_CONTEXT_KEY = E;
  m.getDefaultClientConfiguration = d;
  m.resolveDefaultRuntimeConfig = a;
});
