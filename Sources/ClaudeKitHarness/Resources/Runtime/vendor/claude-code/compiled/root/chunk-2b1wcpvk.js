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
var chunk_2b1wcpvk_exports = {};
__export(chunk_2b1wcpvk_exports, {
  Qbr: () => Qbr,
  Zgs: () => Zgs,
  eln: () => eln,
  ga: () => ga,
  m_o: () => m_o,
  mhl: () => mhl,
  nln: () => nln,
  tln: () => tln,
  uLi: () => uLi
});
module.exports = __toCommonJS(chunk_2b1wcpvk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_6vnr9m6q = require("/$bunfs/root/chunk-6vnr9m6q.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
(0, import_chunk_adx6804h.B)();
function eln() {
  return (0, import_chunk_f9x2f6cx.Y)() || (0, import_chunk_f9x2f6cx.Pd)();
}
var te = 32, ne = 1e5, I = 80, q = /* @__PURE__ */ new Set(["object", "array", "string", "integer", "number", "boolean", "null"]);
function tln(e) {
  if (e.reason === "root_not_object") return "the API only accepts an object-rooted tool input schema, so every request would be rejected";
  return e.scope === "whole" ? "no output can satisfy this schema, so StructuredOutput validation would fail on every attempt" : "one property or item sub-schema admits no value, so any output that fills it in fails validation";
}
function F(e) {
  if (y(e, "type") !== "object") return { ok: false, finding: { reason: "root_not_object", scope: "whole", message: "the root schema must declare type: 'object' (the API rejects any other root type for a tool input schema); wrap arrays or primitives in an object property" } };
  let r = P(e, "", true, te, { remaining: ne });
  return r === void 0 ? { ok: true } : { ok: false, finding: r };
}
function P(e, r, o, s, u) {
  if (s <= 0 || --u.remaining < 0) return;
  if (!(0, import_chunk_ma3kja9f.T)(e) || Object.hasOwn(e, "$ref")) return;
  let d = ie(e), m = re(e, r, d);
  if (m !== void 0) return { ...m, scope: o ? "whole" : "subschema" };
  let l = y(e, "properties");
  if (M(d, "object") && (0, import_chunk_ma3kja9f.T)(l)) {
    let g = y(e, "required"), w = new Set(Array.isArray(g) ? g.filter(E) : []), Q = b(d, "object");
    for (let [x, Z] of Object.entries(l)) {
      if (x === "__proto__") continue;
      let N = P(Z, `${r}/properties/${ae(x)}`, o && Q && w.has(x), s - 1, u);
      if (N !== void 0) return N;
    }
  }
  let h = y(e, "items");
  if (M(d, "array") && (0, import_chunk_ma3kja9f.T)(h)) return P(h, `${r}/items`, false, s - 1, u);
  return;
}
function re(e, r, o) {
  let s = r === "" ? "the root object" : `the sub-schema at ${ce(r)}`, u = y(e, "required");
  if (b(o, "object") && Array.isArray(u) && y(e, "additionalProperties") === false && y(e, "patternProperties") === void 0) {
    let h = y(e, "properties"), g = (0, import_chunk_ma3kja9f.T)(h) ? h : {};
    for (let w of u) if (E(w) && !Object.hasOwn(g, w)) return { reason: "required_property_forbidden", message: `${s} lists "${D(w)}" in required but does not declare it in properties, and additionalProperties is false, so no object can satisfy it \u2014 declare the property or drop it from required` };
  }
  let d = y(e, "enum");
  if (o !== void 0 && Array.isArray(d) && d.length > 0) {
    if (!d.some((h) => C(o, h))) return { reason: "enum_type_mismatch", message: `${s} declares type ${L(o)} but none of its enum values has that type, so no value can satisfy it \u2014 change type to match the enum values or vice versa` };
  }
  let m = y(e, "const");
  if (m !== void 0) {
    if (o !== void 0 && !C(o, m)) return { reason: "const_mismatch", message: `${s} declares type ${L(o)} but its const value does not have that type, so no value can satisfy it` };
    if (Array.isArray(d) && d.length > 0 && ue(m) && !d.some((h) => h === m)) return { reason: "const_mismatch", message: `${s} has a const value that is not one of its enum values, so no value can satisfy it` };
  }
  let l = oe(e, o);
  if (l !== void 0) return { reason: "crossed_bounds", message: `${s} has ${l}, so no value can satisfy it` };
  return;
}
function oe(e, r) {
  if (b(r, "number") || b(r, "integer") || se(r, "number", "integer")) {
    let o = O(y(e, "minimum")), s = O(y(e, "exclusiveMinimum")), u = O(y(e, "maximum")), d = O(y(e, "exclusiveMaximum")), m = s !== void 0 && (o === void 0 || s >= o) ? { value: s, exclusive: true, keyword: "exclusiveMinimum" } : o !== void 0 ? { value: o, exclusive: false, keyword: "minimum" } : void 0, l = d !== void 0 && (u === void 0 || d <= u) ? { value: d, exclusive: true, keyword: "exclusiveMaximum" } : u !== void 0 ? { value: u, exclusive: false, keyword: "maximum" } : void 0;
    if (m !== void 0 && l !== void 0 && (m.value > l.value || m.value === l.value && (m.exclusive || l.exclusive))) return `${m.keyword} ${m.value} and ${l.keyword} ${l.value}, which admit no number`;
  }
  if (b(r, "string")) {
    let o = j(e, "minLength", "maxLength");
    if (o !== void 0) return o;
  }
  if (b(r, "array")) {
    let o = j(e, "minItems", "maxItems");
    if (o !== void 0) return o;
  }
  if (b(r, "object")) {
    let o = j(e, "minProperties", "maxProperties");
    if (o !== void 0) return o;
    let s = O(y(e, "maxProperties")), u = y(e, "required");
    if (s !== void 0 && Array.isArray(u)) {
      let d = (0, import_chunk_4smdap7r.U)(u, E);
      if (d > s) return `${d} required properties but maxProperties ${s}`;
    }
  }
  return;
}
function j(e, r, o) {
  let s = O(y(e, r)), u = O(y(e, o));
  return s !== void 0 && u !== void 0 && s > u ? `${r} ${s} greater than ${o} ${u}` : void 0;
}
function ie(e) {
  let r = y(e, "type"), o;
  if (typeof r === "string" && q.has(r)) o = [r];
  else if (Array.isArray(r) && r.length > 0 && r.every((s) => typeof s === "string" && q.has(s))) o = r.slice();
  else return;
  if (y(e, "nullable") === true && !o.includes("null")) o.push("null");
  return o;
}
function E(e) {
  return typeof e === "string" && !(e in Object.prototype);
}
function M(e, r) {
  return e === void 0 || e.includes(r);
}
function b(e, r) {
  return e !== void 0 && e.length === 1 && e[0] === r;
}
function se(e, r, o) {
  return e !== void 0 && e.length === 2 && (e[0] === r && e[1] === o || e[0] === o && e[1] === r);
}
function C(e, r) {
  return e.some((o) => {
    switch (o) {
      case "null":
        return r === null;
      case "boolean":
        return typeof r === "boolean";
      case "string":
        return typeof r === "string";
      case "number":
        return typeof r === "number" && Number.isFinite(r);
      case "integer":
        return typeof r === "number" && Number.isInteger(r);
      case "array":
        return Array.isArray(r);
      case "object":
        return (0, import_chunk_ma3kja9f.T)(r);
      default:
        return true;
    }
  });
}
function ue(e) {
  return e === null || typeof e === "string" || typeof e === "number" || typeof e === "boolean";
}
function O(e) {
  return typeof e === "number" && Number.isFinite(e) ? e : void 0;
}
function y(e, r) {
  return Object.hasOwn(e, r) ? e[r] : void 0;
}
function L(e) {
  return e.length === 1 ? `'${e[0]}'` : `[${e.map((r) => `'${r}'`).join(", ")}]`;
}
function ae(e) {
  return D(e).replaceAll("~", "~0").replaceAll("/", "~1");
}
var v = 300;
function ce(e) {
  return e.length > v ? `\u2026${(0, import_chunk_7cfjrnwy.qa)(e, v)}` : e;
}
function D(e) {
  let r = (0, import_chunk_7cfjrnwy.lC)(e.replace(/\s+/g, " "));
  return r.length > I ? `${(0, import_chunk_7cfjrnwy.ee)(r, I)}\u2026` : r;
}
var de = /* @__PURE__ */ new Set(["$schema", "type", "description", "title", "properties", "required", "additionalProperties", "items", "enum", "const", "anyOf"]), fe = /* @__PURE__ */ new Set(["$schema", "description", "title"]), H = /* @__PURE__ */ new Set(["object", "array", "string", "integer", "number", "boolean", "null"]), me = 32, pe = 1e5;
function Zgs(e) {
  let r = k(e, me, { remaining: pe });
  if ("reason" in r) return { ok: false, reason: r.reason };
  if (r.node.type !== "object") return { ok: false, reason: "root_not_object" };
  return { ok: true, schema: { ...r.node, type: "object" } };
}
function V(e) {
  return e === null || typeof e === "string" || typeof e === "number" && Number.isFinite(e) || typeof e === "boolean";
}
function k(e, r, o) {
  if (r <= 0) return { reason: "max_depth" };
  if (--o.remaining < 0) return { reason: "max_nodes" };
  if (!(0, import_chunk_ma3kja9f.T)(e)) return { reason: "not_object" };
  for (let d of Object.keys(e)) if (!de.has(d)) return { reason: "unsupported_keyword" };
  let s = {};
  if (e.description !== void 0) {
    if (typeof e.description !== "string") return { reason: "unsupported_keyword" };
    s.description = e.description;
  }
  if (e.title !== void 0) {
    if (typeof e.title !== "string") return { reason: "unsupported_keyword" };
    s.title = e.title;
  }
  if (e.anyOf !== void 0) {
    for (let m of Object.keys(e)) if (m !== "anyOf" && !fe.has(m)) return { reason: "unsupported_keyword" };
    if (!Array.isArray(e.anyOf) || e.anyOf.length === 0) return { reason: "unsupported_keyword" };
    let d = [];
    for (let m of e.anyOf) {
      let l = k(m, r - 1, o);
      if ("reason" in l) return l;
      d.push(l.node);
    }
    return s.anyOf = d, { node: s };
  }
  if (e.const !== void 0) {
    if (!V(e.const)) return { reason: "unsupported_const" };
    s.const = e.const;
  }
  if (e.enum !== void 0) {
    if (!Array.isArray(e.enum) || e.enum.length === 0 || !e.enum.every(V) || new Set(e.enum).size !== e.enum.length) return { reason: "unsupported_enum" };
    s.enum = e.enum.slice();
  }
  let u = e.type;
  if (u !== void 0) if (typeof u === "string") {
    if (!H.has(u)) return { reason: "unsupported_type" };
    s.type = u;
  } else if (Array.isArray(u)) {
    if (u.length === 0 || !u.every((d) => typeof d === "string" && H.has(d) && d !== "object" && d !== "array") || new Set(u).size !== u.length) return { reason: "unsupported_type" };
    s.type = u.slice();
  } else return { reason: "unsupported_type" };
  if (u !== "object" && (e.properties !== void 0 || e.required !== void 0 || e.additionalProperties !== void 0)) return { reason: "mismatched_keywords" };
  if (u !== "array" && e.items !== void 0) return { reason: "mismatched_keywords" };
  if (u === "object") {
    let d = e.properties;
    if (!(0, import_chunk_ma3kja9f.T)(d)) return { reason: "no_properties" };
    if (e.additionalProperties !== void 0 && e.additionalProperties !== false) return { reason: "additional_properties" };
    if (e.required !== void 0) {
      if (!Array.isArray(e.required) || !e.required.every((l) => typeof l === "string" && Object.hasOwn(d, l)) || new Set(e.required).size !== e.required.length) return { reason: "invalid_required" };
      s.required = e.required.slice();
    }
    let m = [];
    for (let [l, h] of Object.entries(d)) {
      let g = k(h, r - 1, o);
      if ("reason" in g) return g;
      m.push([l, g.node]);
    }
    s.properties = Object.fromEntries(m), s.additionalProperties = false;
  } else if (u === "array") {
    let d = e.items;
    if (d === void 0 || Array.isArray(d)) return { reason: "unsupported_items" };
    let m = k(d, r - 1, o);
    if ("reason" in m) return m;
    s.items = m.node;
  } else if (u === void 0 && s.enum === void 0 && !("const" in s)) return { reason: "missing_type" };
  return { node: s };
}
var le = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({}).passthrough()), ye = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.n)().describe("Structured output tool result")), ga = "StructuredOutput";
function mhl(e) {
  return e.isNonInteractiveSession || e.isBgSession === true;
}
function Qbr(e, r) {
  if (e?.type !== "tool_use" || e.name !== ga) return null;
  if (e.id !== void 0 && r.has(e.id)) return null;
  let o = e.input, s = o !== null && typeof o === "object" && "text" in o ? o.text : void 0;
  return typeof s === "string" && s.length > 0 ? s : null;
}
function K(e = {}, r = () => {
}) {
  return (0, import_chunk_4vsz8a99.vn)({ registryToolId: "613fc4d5-e765-50d0-bc48-8defd5589270", ...e, isMcp: false, isEnabled() {
    return true;
  }, isConcurrencySafe() {
    return true;
  }, isReadOnly() {
    return true;
  }, isOpenWorld() {
    return false;
  }, name: ga, searchHint: "return the final response as structured JSON", backgrounding: "never", maxResultSizeChars: 1e5, async description() {
    return "Return structured output in the requested format";
  }, async prompt() {
    return "Use this tool to return your final response in the requested structured format. You MUST call this tool exactly once at the end of your response to provide the structured output.";
  }, get inputSchema() {
    return le();
  }, get outputSchema() {
    return ye();
  }, create() {
    return { async call(o) {
      return r(o), { data: "Structured output provided successfully", structured_output: o, endsTurn: true };
    } };
  }, renderToolUseMessage(o) {
    let s = Object.keys(o);
    if (s.length === 0) return null;
    if (s.length <= 3) return s.map((u) => `${u}: ${(0, import_chunk_w578pjby._)(o[u])}`).join(", ");
    return `${s.length} fields: ${s.slice(0, 3).join(", ")}\u2026`;
  }, mapToolResultToToolResultBlockParam(o, s) {
    return { tool_use_id: s, type: "tool_result", content: o };
  } });
}
var m_o = K(), J = /* @__PURE__ */ new WeakMap();
function nln(e) {
  let r = J.get(e);
  if (r) return r;
  let o = Se(e);
  return J.set(e, o), o;
}
var uLi = 1e5, he = 1e4;
function G(e, r, o) {
  if (--r.n < 0 || o > he) return true;
  if (typeof e !== "object" || e === null) return false;
  for (let s of Object.values(e)) if (G(s, r, o + 1)) return true;
  return false;
}
function ge(e) {
  try {
    if (G(e, { n: uLi }, 0)) return { error: "schema too large" };
    if (Boolean(e.$async)) return { error: "$async schemas are not supported" };
    if (eln()) return { error: "this session compiles no schemas" };
    let { Ajv: r } = (0, import_chunk_6vnr9m6q.__o)(), o = new r({ allErrors: true, validateFormats: false, multipleOfPrecision: 6 });
    if (!o.validateSchema(e)) return { error: o.errorsText(o.errors) };
    let u = o.compile(e);
    return { validate(d) {
      if (u(d)) return;
      let m = u.errors ?? [];
      return { message: m.map((l) => be(l, d)).join(", "), keywords: m.map((l) => l.keyword).join(",") };
    } };
  } catch (r) {
    return { error: r instanceof Error ? r.message : String(r) };
  }
}
function Se(e) {
  try {
    let r = ge(e);
    if ("error" in r) return r;
    let o;
    try {
      let u = Zgs(e);
      if (u.ok) o = u.schema;
      (0, import_chunk_y53wbr8a.a)("tengu_structured_output_strict_schema", { outcome: u.ok ? (0, import_chunk_78g0060s.S)("converted") : (0, import_chunk_78g0060s.S)("fallback"), reason: u.ok ? void 0 : (0, import_chunk_78g0060s.f)(u.reason) });
    } catch (u) {
      (0, import_chunk_w578pjby.t)(`Strict structured-output schema derivation failed, falling back to non-strict: ${u instanceof Error ? u.message : String(u)}`, { level: "error" });
    }
    let s;
    try {
      let u = F(e);
      if (!u.ok) s = u.finding;
      (0, import_chunk_y53wbr8a.a)("tengu_structured_output_schema_lint", { outcome: u.ok ? (0, import_chunk_78g0060s.S)("ok") : (0, import_chunk_78g0060s.S)("unsatisfiable"), reason: u.ok ? void 0 : (0, import_chunk_78g0060s.f)(u.finding.reason), scope: u.ok ? void 0 : (0, import_chunk_78g0060s.f)(u.finding.scope) });
    } catch (u) {
      (0, import_chunk_k449cc64.i)(u);
    }
    return { ...s && { unsatisfiable: s }, tool: K({ inputJSONSchema: e, ...o && { strictInputJSONSchema: o } }, (u) => {
      let d = r.validate(u);
      if (d) throw new import_chunk_jv7av99m.A(`Output does not match required schema: ${d.message}`, `StructuredOutput schema mismatch: ${d.keywords}`);
    }) };
  } catch (r) {
    return { error: r instanceof Error ? r.message : String(r) };
  }
}
var z = 300, X = 80;
function be(e, r) {
  let o = `${e.instancePath || "root"}: ${e.message}`;
  switch (e.keyword) {
    case "additionalProperties": {
      let s = e.params.additionalProperty;
      return typeof s === "string" ? `${o} ('${s.length > X ? (0, import_chunk_7cfjrnwy.ee)(s, X) + "\u2026" : s}' is not allowed)` : o;
    }
    case "minLength":
    case "maxLength": {
      let s = R(r, e.instancePath);
      return typeof s === "string" ? `${o} (got ${[...s].length})` : o;
    }
    case "minItems":
    case "maxItems": {
      let s = R(r, e.instancePath);
      return Array.isArray(s) ? `${o} (got ${s.length})` : o;
    }
    case "minProperties":
    case "maxProperties": {
      let s = R(r, e.instancePath);
      return (0, import_chunk_ma3kja9f.T)(s) ? `${o} (got ${Object.keys(s).length})` : o;
    }
    case "enum": {
      let s = e.params.allowedValues, u = Array.isArray(s) ? W(s) : void 0;
      return u === void 0 ? o : `${o}: ${u}`;
    }
    case "const": {
      let s = "allowedValue" in e.params ? W(e.params.allowedValue) : void 0;
      return s === void 0 ? o : `${o}: ${s}`;
    }
    default:
      return o;
  }
}
function R(e, r) {
  let o = e;
  for (let s of r.split("/").slice(1)) {
    let u = s.replaceAll("~1", "/").replaceAll("~0", "~");
    if (Array.isArray(o)) o = o[Number(u)];
    else if ((0, import_chunk_ma3kja9f.T)(o) && Object.hasOwn(o, u)) o = o[u];
    else return;
  }
  return o;
}
function W(e) {
  let r;
  try {
    r = (0, import_chunk_w578pjby._)(e);
  } catch {
    return;
  }
  if (typeof r !== "string") return;
  return r.length > z ? (0, import_chunk_7cfjrnwy.ee)(r, z) + "\u2026" : r;
}
