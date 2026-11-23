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
var chunk_gjddj128_exports = {};
__export(chunk_gjddj128_exports, {
  yri: () => yri
});
module.exports = __toCommonJS(chunk_gjddj128_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var A = 32, p = /* @__PURE__ */ new Set(["array", "boolean", "integer", "null", "number", "object", "string"]), g = /^[A-Za-z_][-A-Za-z0-9._]*$/u, v = /^[^#]*#?$/u;
function u(n, o = 0) {
  if (typeof n === "boolean") return true;
  if (!(0, import_chunk_ma3kja9f.T)(n) || o > A) return false;
  for (let s in n) {
    let e = n[s];
    switch (s) {
      case "type":
        if (p.has(e)) break;
        if (!Array.isArray(e) || e.length === 0 || new Set(e).size !== e.length) return false;
        for (let r of e) if (!p.has(r)) return false;
        break;
      case "title":
      case "description":
      case "format":
      case "pattern":
      case "$comment":
      case "$schema":
      case "$ref":
      case "$dynamicRef":
      case "$recursiveRef":
      case "contentEncoding":
      case "contentMediaType":
        if (typeof e !== "string") return false;
        break;
      case "$id":
        if (typeof e !== "string" || !v.test(e)) return false;
        break;
      case "$anchor":
      case "$dynamicAnchor":
      case "$recursiveAnchor":
        if (typeof e !== "string" || !g.test(e)) return false;
        break;
      case "properties":
      case "patternProperties":
      case "dependentSchemas":
      case "$defs":
      case "definitions":
        if (!(0, import_chunk_ma3kja9f.T)(e)) return false;
        for (let r in e) if (!u(e[r], o + 1)) return false;
        break;
      case "items":
      case "contains":
      case "additionalProperties":
      case "propertyNames":
      case "if":
      case "then":
      case "else":
      case "not":
      case "unevaluatedItems":
      case "unevaluatedProperties":
      case "contentSchema":
        if (!u(e, o + 1)) return false;
        break;
      case "prefixItems":
      case "allOf":
      case "anyOf":
      case "oneOf":
        if (!Array.isArray(e) || e.length === 0) return false;
        for (let r of e) if (!u(r, o + 1)) return false;
        break;
      case "required":
        if (!Array.isArray(e) || new Set(e).size !== e.length) return false;
        for (let r of e) if (typeof r !== "string") return false;
        break;
      case "enum":
      case "examples":
        if (!Array.isArray(e)) return false;
        break;
      case "minimum":
      case "maximum":
      case "exclusiveMinimum":
      case "exclusiveMaximum":
        if (!Number.isFinite(e)) return false;
        break;
      case "maxLength":
      case "minLength":
      case "maxItems":
      case "minItems":
      case "maxContains":
      case "minContains":
      case "maxProperties":
      case "minProperties":
        if (!Number.isInteger(e) || Number(e) < 0) return false;
        break;
      case "uniqueItems":
      case "deprecated":
      case "readOnly":
      case "writeOnly":
        if (typeof e !== "boolean") return false;
        break;
      case "const":
      case "default":
        break;
      case "multipleOf":
        if (!Number.isFinite(e) || Number(e) <= 0) return false;
        break;
      case "dependentRequired":
      case "dependencies":
      case "$vocabulary":
        return false;
      default:
        break;
    }
  }
  return true;
}
var b = "https://json-schema.org/draft/2020-12/schema", f;
function k() {
  if (f === void 0) {
    try {
      let n = require("/$bunfs/root/chunk-fq2gfaww.js");
      f = typeof n.default === "function" ? n.default : null;
    } catch {
      f = null;
    }
    if (f === null) (0, import_chunk_w578pjby.t)("MCP: draft 2020-12 meta-validator unavailable \u2014 tool schema checks fail open", { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_mcp_degraded", { reason: (0, import_chunk_78g0060s.S)("schema_validator_unavailable") });
  }
  return f;
}
function E(n) {
  if (!(0, import_chunk_ma3kja9f.T)(n) || !(0, import_chunk_ma3kja9f.T)(n.properties)) return null;
  for (let o of Object.keys(n.properties)) if (!import_chunk_syr33dp2.Fbs.test(o)) return o;
  return null;
}
function y(n) {
  return j(k, n, false);
}
function j(n, o, s) {
  let e = E(o);
  if (e !== null) return { valid: false, check: "propertyKey", detail: `property key ${(0, import_chunk_w578pjby._)(e.slice(0, 80))} does not match ${import_chunk_syr33dp2.Fbs}` };
  let r = o;
  if ((0, import_chunk_ma3kja9f.T)(o)) {
    let i = Object.entries(o);
    if (i.some(([, l]) => l === null)) i = i.filter(([, l]) => l !== null), r = Object.fromEntries(i);
    let c = r.$schema;
    if (c !== void 0) if (s) {
      let { $schema: l, ...d } = r;
      r = d;
    } else if (typeof c === "string" && (c === b || c === `${b}#`)) ;
    else return { valid: true };
  }
  try {
    if (u(r)) return { valid: true };
    let i = n();
    if (i === null) return { valid: true };
    if (i(r)) return { valid: true };
    let c = i.errors?.[0];
    return { valid: false, check: "meta", detail: c ? `schema${c.instancePath} ${c.message ?? "is invalid"}` : "schema is invalid" };
  } catch (i) {
    return { valid: false, check: "meta", detail: `validation threw: ${i instanceof Error ? i.message : String(i)}` };
  }
}
var R = 64;
function yri(n, o) {
  let s = (0, import_chunk_ma3kja9f.T)(n) && ("anyOf" in n || "oneOf" in n), e = h(n, o, s);
  return s && (e.verdict === "drop" || e.apiWouldReject !== void 0 || w(e.normalized?.schema)) ? h(n, o, false) : e;
}
function w(n) {
  let o = (r) => Array.isArray(r) && r.length >= 2 && !r.every((i) => typeof i === "string"), s = (r, i) => r === "required" || r === "type" ? o(i) : (r === "dependencies" || r === "dependentRequired") && (0, import_chunk_ma3kja9f.T)(i) && Object.values(i).some(o), e = n ? [[n, 1]] : [];
  for (let r = e.pop(); r !== void 0; r = e.pop()) {
    let [i, c] = r;
    if (c > R) return true;
    let l = (d) => {
      if (typeof d === "object" && d !== null) e.push([d, c + 1]);
    };
    if (Array.isArray(i)) {
      i.forEach(l);
      continue;
    }
    for (let [d, m] of Object.entries(i)) {
      if (s(d, m)) return true;
      l(m);
    }
  }
  return false;
}
function h(n, o, s) {
  let e = (0, import_chunk_syr33dp2.iwl)(n, { everyBranch: s });
  if (e.outcome === "drop") return { verdict: "drop", cause: "schema_unsupported", reason: e.reason };
  if (e.outcome === "normalized" && !o.normalizeEnabled) return { verdict: "drop", cause: "normalize_gated", reason: `its input schema uses top-level ${e.combinators.join("/")}, which the Anthropic API does not accept` };
  let r = e.outcome === "normalized" ? { schema: e.schema, note: e.note, combinators: e.combinators } : void 0, i = y(r?.schema ?? n);
  if (i.valid) return { verdict: "send", normalized: r, apiWouldReject: void 0 };
  if (!o.apiValidateEnabled) return { verdict: "send", normalized: r, apiWouldReject: i };
  return { verdict: "drop", cause: "api_invalid", normalized: r, rejection: i };
}
