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
var chunk_02qcqgas_exports = {};
__export(chunk_02qcqgas_exports, {
  Vtt: () => Vtt,
  ZAn: () => ZAn,
  sYr: () => sYr
});
module.exports = __toCommonJS(chunk_02qcqgas_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_1pan7v6b = require("/$bunfs/root/chunk-1pan7v6b.js");
var import_chunk_2b1wcpvk = require("/$bunfs/root/chunk-2b1wcpvk.js");
var import_chunk_6vnr9m6q = require("/$bunfs/root/chunk-6vnr9m6q.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_path = require("path");
var E = (0, import_chunk_w1d7ygsk.V)(function(z) {
  Object.defineProperty(z, "__esModule", { value: true });
  z.dynamicAnchor = void 0;
  var A = (0, import_chunk_6vnr9m6q.Db)(), Ee = (0, import_chunk_6vnr9m6q.H8e)(), O = (0, import_chunk_6vnr9m6q.g_o)(), G = (0, import_chunk_6vnr9m6q.e_s)(), Fe = { keyword: "$dynamicAnchor", schemaType: "string", code: (e) => U(e, e.schema) };
  function U(e, r) {
    let { gen: a, it: n } = e;
    n.schemaEnv.root.dynamicAnchors[r] = true;
    let o = A._`${Ee.default.dynamicAnchors}${A.getProperty(r)}`, i = n.errSchemaPath === "#" ? n.validateName : Ve(e);
    a.if(A._`!${o}`, () => a.assign(o, i));
  }
  z.dynamicAnchor = U;
  function Ve(e) {
    let { schemaEnv: r, schema: a, self: n } = e.it, { root: o, baseId: i, localRefs: u, meta: m } = r.root, { schemaId: s } = n.opts, p = new O.SchemaEnv({ schema: a, schemaId: s, root: o, baseId: i, localRefs: u, meta: m });
    return O.compileSchema.call(n, p), G.getValidate(e, p);
  }
  z.default = Fe;
});
var F = (0, import_chunk_w1d7ygsk.V)(function(Z) {
  Object.defineProperty(Z, "__esModule", { value: true });
  Z.dynamicRef = void 0;
  var k = (0, import_chunk_6vnr9m6q.Db)(), We = (0, import_chunk_6vnr9m6q.H8e)(), x = (0, import_chunk_6vnr9m6q.e_s)(), He = { keyword: "$dynamicRef", schemaType: "string", code: (e) => Y(e, e.schema) };
  function Y(e, r) {
    let { gen: a, keyword: n, it: o } = e;
    if (r[0] !== "#") throw Error(`"${n}" only supports hash fragment reference`);
    let i = r.slice(1);
    if (o.allErrors) u();
    else {
      let s = a.let("valid", false);
      u(s), e.ok(s);
    }
    function u(s) {
      if (o.schemaEnv.root.dynamicAnchors[i]) {
        let p = a.let("_v", k._`${We.default.dynamicAnchors}${k.getProperty(i)}`);
        a.if(p, m(p, s), m(o.validateName, s));
      } else m(o.validateName, s)();
    }
    function m(s, p) {
      return p ? () => a.block(() => {
        x.callRef(e, s), a.let(p, true);
      }) : () => x.callRef(e, s);
    }
  }
  Z.dynamicRef = Y;
  Z.default = He;
});
var te = (0, import_chunk_w1d7ygsk.V)(function(ee) {
  Object.defineProperty(ee, "__esModule", { value: true });
  var J = E(), Q = (0, import_chunk_6vnr9m6q.CC)(), Ge = { keyword: "$recursiveAnchor", schemaType: "boolean", code(e) {
    if (e.schema) J.dynamicAnchor(e, "");
    else Q.checkStrictMode(e.it, "$recursiveAnchor: false is ignored");
  } };
  ee.default = Ge;
});
var ne = (0, import_chunk_w1d7ygsk.V)(function(ae) {
  Object.defineProperty(ae, "__esModule", { value: true });
  var re = F(), ze = { keyword: "$recursiveRef", schemaType: "string", code: (e) => re.dynamicRef(e, e.schema) };
  ae.default = ze;
});
var se = (0, import_chunk_w1d7ygsk.V)(function(oe) {
  Object.defineProperty(oe, "__esModule", { value: true });
  var Ye = E(), Ze = F(), Be = te(), Je = ne(), Qe = [Ye.default, Ze.default, Be.default, Je.default];
  oe.default = Qe;
});
var ce = (0, import_chunk_w1d7ygsk.V)(function(ie) {
  Object.defineProperty(ie, "__esModule", { value: true });
  var I = (0, import_chunk_6vnr9m6q.t_s)(), tt = { keyword: "dependentRequired", type: "object", schemaType: "object", error: I.error, code: (e) => I.validatePropertyDeps(e) };
  ie.default = tt;
});
var me = (0, import_chunk_w1d7ygsk.V)(function(de) {
  Object.defineProperty(de, "__esModule", { value: true });
  var ue = (0, import_chunk_6vnr9m6q.t_s)(), at = { keyword: "dependentSchemas", type: "object", schemaType: "object", code: (e) => ue.validateSchemaDeps(e) };
  de.default = at;
});
var pe = (0, import_chunk_w1d7ygsk.V)(function(fe) {
  Object.defineProperty(fe, "__esModule", { value: true });
  var le = (0, import_chunk_6vnr9m6q.CC)(), ot = { keyword: ["maxContains", "minContains"], type: "array", schemaType: "number", code({ keyword: e, parentSchema: r, it: a }) {
    if (r.contains === void 0) le.checkStrictMode(a, `"${e}" without "contains" is ignored`);
  } };
  fe.default = ot;
});
var ye = (0, import_chunk_w1d7ygsk.V)(function(he) {
  Object.defineProperty(he, "__esModule", { value: true });
  var it = ce(), ct = me(), ut = pe(), dt = [it.default, ct.default, ut.default];
  he.default = dt;
});
var ge = (0, import_chunk_w1d7ygsk.V)(function($e) {
  Object.defineProperty($e, "__esModule", { value: true });
  var y = (0, import_chunk_6vnr9m6q.Db)(), N = (0, import_chunk_6vnr9m6q.CC)(), lt = (0, import_chunk_6vnr9m6q.H8e)(), ft = { message: "must NOT have unevaluated properties", params: ({ params: e }) => y._`{unevaluatedProperty: ${e.unevaluatedProperty}}` }, pt = { keyword: "unevaluatedProperties", type: "object", schemaType: ["boolean", "object"], trackErrors: true, error: ft, code(e) {
    let { gen: r, schema: a, data: n, errsCount: o, it: i } = e;
    if (!o) throw Error("ajv implementation error");
    let { allErrors: u, props: m } = i;
    if (m instanceof y.Name) r.if(y._`${m} !== true`, () => r.forIn("key", n, (h) => r.if(p(m, h), () => s(h))));
    else if (m !== true) r.forIn("key", n, (h) => m === void 0 ? s(h) : r.if(g(m, h), () => s(h)));
    i.props = true, e.ok(y._`${o} === ${lt.default.errors}`);
    function s(h) {
      if (a === false) {
        if (e.setParams({ unevaluatedProperty: h }), e.error(), !u) r.break();
        return;
      }
      if (!N.alwaysValidSchema(i, a)) {
        let P = r.name("valid");
        if (e.subschema({ keyword: "unevaluatedProperties", dataProp: h, dataPropType: N.Type.Str }, P), !u) r.if(y.not(P), () => r.break());
      }
    }
    function p(h, P) {
      return y._`!${h} || !${h}[${P}]`;
    }
    function g(h, P) {
      let c = [];
      for (let f in h) if (h[f] === true) c.push(y._`${P} !== ${f}`);
      return y.and(...c);
    }
  } };
  $e.default = pt;
});
var ve = (0, import_chunk_w1d7ygsk.V)(function(be) {
  Object.defineProperty(be, "__esModule", { value: true });
  var b = (0, import_chunk_6vnr9m6q.Db)(), T = (0, import_chunk_6vnr9m6q.CC)(), yt = { message: ({ params: { len: e } }) => b.str`must NOT have more than ${e} items`, params: ({ params: { len: e } }) => b._`{limit: ${e}}` }, $t = { keyword: "unevaluatedItems", type: "array", schemaType: ["boolean", "object"], error: yt, code(e) {
    let { gen: r, schema: a, data: n, it: o } = e, i = o.items || 0;
    if (i === true) return;
    let u = r.const("len", b._`${n}.length`);
    if (a === false) e.setParams({ len: i }), e.fail(b._`${u} > ${i}`);
    else if (typeof a == "object" && !T.alwaysValidSchema(o, a)) {
      let s = r.var("valid", b._`${u} <= ${i}`);
      r.if(b.not(s), () => m(s, i)), e.ok(s);
    }
    o.items = true;
    function m(s, p) {
      r.forRange("i", p, u, (g) => {
        if (e.subschema({ keyword: "unevaluatedItems", dataProp: g, dataPropType: T.Type.Num }, s), !o.allErrors) r.if(b.not(s), () => r.break());
      });
    }
  } };
  be.default = $t;
});
var je = (0, import_chunk_w1d7ygsk.V)(function(_e) {
  Object.defineProperty(_e, "__esModule", { value: true });
  var bt = ge(), vt = ve(), _t = [bt.default, vt.default];
  _e.default = _t;
});
var qe = (0, import_chunk_w1d7ygsk.V)(function(Pe) {
  Object.defineProperty(Pe, "__esModule", { value: true });
  var Pt = (0, import_chunk_6vnr9m6q.pLi)(), qt = (0, import_chunk_6vnr9m6q.mLi)(), At = (0, import_chunk_6vnr9m6q.hLi)(), Rt = se(), St = ye(), wt = je(), Ot = (0, import_chunk_6vnr9m6q.gLi)(), C = (0, import_chunk_6vnr9m6q._Li)(), kt = [Rt.default, Pt.default, qt.default, (0, At.default)(true), Ot.default, C.metadataVocabulary, C.contentVocabulary, St.default, wt.default];
  Pe.default = kt;
});
var Ae = (0, import_chunk_w1d7ygsk.V)(function(qr, Mt) {
  Mt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/schema", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true, "https://json-schema.org/draft/2020-12/vocab/applicator": true, "https://json-schema.org/draft/2020-12/vocab/unevaluated": true, "https://json-schema.org/draft/2020-12/vocab/validation": true, "https://json-schema.org/draft/2020-12/vocab/meta-data": true, "https://json-schema.org/draft/2020-12/vocab/format-annotation": true, "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Core and Validation specifications meta-schema", allOf: [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], type: ["object", "boolean"], $comment: "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", properties: { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: true, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: true, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: true }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: true } } };
});
var Re = (0, import_chunk_w1d7ygsk.V)(function(Ar, It) {
  It.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/applicator", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/applicator": true }, $dynamicAnchor: "meta", title: "Applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, $defs: { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } } };
});
var Se = (0, import_chunk_w1d7ygsk.V)(function(Rr, Nt) {
  Nt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/unevaluated", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/unevaluated": true }, $dynamicAnchor: "meta", title: "Unevaluated applicator vocabulary meta-schema", type: ["object", "boolean"], properties: { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } } };
});
var we = (0, import_chunk_w1d7ygsk.V)(function(Sr, Tt) {
  Tt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/content", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/content": true }, $dynamicAnchor: "meta", title: "Content vocabulary meta-schema", type: ["object", "boolean"], properties: { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } } };
});
var Oe = (0, import_chunk_w1d7ygsk.V)(function(wr, Ct) {
  Ct.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/core", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/core": true }, $dynamicAnchor: "meta", title: "Core vocabulary meta-schema", type: ["object", "boolean"], properties: { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, $defs: { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } } };
});
var ke = (0, import_chunk_w1d7ygsk.V)(function(Or, Et) {
  Et.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/format-annotation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/format-annotation": true }, $dynamicAnchor: "meta", title: "Format vocabulary meta-schema for annotation results", type: ["object", "boolean"], properties: { format: { type: "string" } } };
});
var xe = (0, import_chunk_w1d7ygsk.V)(function(kr, Ft) {
  Ft.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/meta-data", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/meta-data": true }, $dynamicAnchor: "meta", title: "Meta-data vocabulary meta-schema", type: ["object", "boolean"], properties: { title: { type: "string" }, description: { type: "string" }, default: true, deprecated: { type: "boolean", default: false }, readOnly: { type: "boolean", default: false }, writeOnly: { type: "boolean", default: false }, examples: { type: "array", items: true } } };
});
var Me = (0, import_chunk_w1d7ygsk.V)(function(xr, Vt) {
  Vt.exports = { $schema: "https://json-schema.org/draft/2020-12/schema", $id: "https://json-schema.org/draft/2020-12/meta/validation", $vocabulary: { "https://json-schema.org/draft/2020-12/vocab/validation": true }, $dynamicAnchor: "meta", title: "Validation vocabulary meta-schema", type: ["object", "boolean"], properties: { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: true }] }, const: true, enum: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, $defs: { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } } };
});
var Ne = (0, import_chunk_w1d7ygsk.V)(function(Ie) {
  Object.defineProperty(Ie, "__esModule", { value: true });
  var Dt = Ae(), Wt = Re(), Lt = Se(), Ht = we(), Kt = Oe(), Gt = ke(), Ut = xe(), zt = Me(), Xt = ["/properties"];
  function Yt(e) {
    return [Dt, Wt, Lt, Ht, Kt, r(this, Gt), Ut, r(this, zt)].forEach((a) => this.addMetaSchema(a, void 0, false)), this;
    function r(a, n) {
      return e ? a.$dataMetaSchema(n, Xt) : n;
    }
  }
  Ie.default = Yt;
});
var Te = (0, import_chunk_w1d7ygsk.V)(function(v, W) {
  Object.defineProperty(v, "__esModule", { value: true });
  v.MissingRefError = v.ValidationError = v.CodeGen = v.Name = v.nil = v.stringify = v.str = v._ = v.KeywordCxt = v.Ajv2020 = void 0;
  var Bt = (0, import_chunk_6vnr9m6q.fLi)(), Jt = qe(), Qt = (0, import_chunk_6vnr9m6q.yLi)(), er = Ne(), D = "https://json-schema.org/draft/2020-12/schema";
  class S extends Bt.default {
    constructor(e = {}) {
      super({ ...e, dynamicRef: true, next: true, unevaluated: true });
    }
    _addVocabularies() {
      if (super._addVocabularies(), Jt.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator) this.addKeyword(Qt.default);
    }
    _addDefaultMetaSchema() {
      super._addDefaultMetaSchema();
      let { $data: e, meta: r } = this.opts;
      if (!r) return;
      er.default.call(this, e), this.refs["http://json-schema.org/schema"] = D;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(D) ? D : void 0);
    }
  }
  v.Ajv2020 = S;
  W.exports = v = S;
  W.exports.Ajv2020 = S;
  Object.defineProperty(v, "__esModule", { value: true });
  v.default = S;
  var tr = (0, import_chunk_6vnr9m6q.Zbr)();
  Object.defineProperty(v, "KeywordCxt", { enumerable: true, get: function() {
    return tr.KeywordCxt;
  } });
  var R = (0, import_chunk_6vnr9m6q.Db)();
  Object.defineProperty(v, "_", { enumerable: true, get: function() {
    return R._;
  } });
  Object.defineProperty(v, "str", { enumerable: true, get: function() {
    return R.str;
  } });
  Object.defineProperty(v, "stringify", { enumerable: true, get: function() {
    return R.stringify;
  } });
  Object.defineProperty(v, "nil", { enumerable: true, get: function() {
    return R.nil;
  } });
  Object.defineProperty(v, "Name", { enumerable: true, get: function() {
    return R.Name;
  } });
  Object.defineProperty(v, "CodeGen", { enumerable: true, get: function() {
    return R.CodeGen;
  } });
  var rr = (0, import_chunk_6vnr9m6q.h_o)();
  Object.defineProperty(v, "ValidationError", { enumerable: true, get: function() {
    return rr.default;
  } });
  var ar = (0, import_chunk_6vnr9m6q.ewr)();
  Object.defineProperty(v, "MissingRefError", { enumerable: true, get: function() {
    return ar.default;
  } });
});
var Ce = "https://json-schema.org/draft/2020-12/schema", L = 5, H = /* @__PURE__ */ new WeakMap();
function sr(e, { tool: r, feature: a }) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return null;
  let n = H.get(e);
  if (n !== void 0) return n;
  if ((0, import_chunk_2b1wcpvk.eln)()) return (0, import_chunk_w578pjby.t)(`[${r}] input schema not checked before the call: sessions that share a process compile no schemas, so the server checks it`), H.set(e, null), null;
  let o = null, i = e.$schema;
  if (i === void 0 || i === Ce || i === `${Ce}#`) try {
    let { Ajv2020: u } = Te();
    o = new u({ allErrors: true, strict: false, validateFormats: false }).compile(e);
  } catch (u) {
    (0, import_chunk_w578pjby.t)(`[${r}] input schema not checked: Ajv could not compile it: ${(0, import_chunk_jv7av99m.d)(u)}`, { level: "warn" });
  }
  else (0, import_chunk_w578pjby.t)(`[${r}] input schema not checked: it declares ${(0, import_chunk_w578pjby._)(i)}, and only draft 2020-12 is checked`, { level: "warn" });
  if (o === null) (0, import_chunk_cqa9hrgx.l)(a, "input_schema_not_checked");
  return H.set(e, o), o;
}
var ir = /* @__PURE__ */ new Set(["allOf", "anyOf", "contains", "if", "oneOf"]), cr = { array: "a list", boolean: "true or false", integer: "a whole number", number: "a number", object: "an object", string: "text" };
function sYr(e, r, a) {
  let n = sr(r, a);
  if (n === null || n(e)) return;
  let o = (0, import_chunk_0jve1fep.Le)(r) && (0, import_chunk_0jve1fep.Le)(r.properties) ? Object.keys(r.properties) : [], i = new Set((0, import_chunk_0jve1fep.Le)(r) && Array.isArray(r.required) ? r.required : []), { ignoreInside: u } = a, m = (n.errors ?? []).filter((c) => u === void 0 || !c.instancePath.startsWith(`/${u}/`) && !(c.instancePath === `/${u}` && ir.has(c.keyword)));
  if (m.length === 0) return;
  let s = m.flatMap((c) => {
    let f = c.params.additionalProperty;
    return c.keyword === "additionalProperties" && c.instancePath === "" && typeof f === "string" ? [f] : [];
  }), p = new Map(s.map((c) => [c, o.find((f) => ur(c, f))])), g = (0, import_chunk_4smdap7r.M)([...s.map((c) => {
    let f = p.get(c);
    return `it has no argument ${(0, import_chunk_1pan7v6b.ZSe)(c)}${f === void 0 ? "" : ` (did you mean ${(0, import_chunk_1pan7v6b.ZSe)(f)}?)`}`;
  }), ...m.flatMap((c) => {
    let f = (0, import_chunk_1pan7v6b.Tal)(c.instancePath), j = c.params;
    switch (c.keyword) {
      case "additionalProperties":
        return f === void 0 ? [] : [`${f} has no field ${(0, import_chunk_1pan7v6b.ZSe)(String(j.additionalProperty))}`];
      case "required": {
        let q = String(j.missingProperty);
        if (f !== void 0) return [`${f} needs the field ${(0, import_chunk_1pan7v6b.ZSe)(q)}`];
        return [...p.values()].includes(q) ? [] : [`the argument ${(0, import_chunk_1pan7v6b.ZSe)(q)} is required`];
      }
      case "type": {
        let q = (Array.isArray(j.type) ? j.type : [j.type]).filter((w) => w !== "null");
        return q.length === 0 ? [] : [`${f ?? "the arguments"} must be ${q.map((w) => cr[String(w)] ?? String(w)).join(" or ")}`];
      }
      case "minLength":
        return [j.limit === 1 ? `${f ?? "the arguments"} must not be empty` : `${f ?? "the arguments"} must be at least ${String(j.limit)} characters`];
      case "maxLength":
        return [`${f ?? "the arguments"} must be at most ${String(j.limit)} characters`];
      case "maxItems":
        return [`${f ?? "the arguments"} must have at most ${String(j.limit)} entries`];
      case "enum":
        if (Array.isArray(j.allowedValues)) return [`${f ?? "the arguments"} must be one of ${j.allowedValues.map((q) => (0, import_chunk_w578pjby._)(q)).join(", ")}`];
        break;
    }
    return [`${f ?? "the arguments"} ${c.message ?? "are not valid"}`];
  })]);
  if (g.length === 0) return;
  let h = g.length > L ? `, and ${g.length - L} more` : "", P = o.map((c) => i.has(c) ? `${c} (required)` : c);
  return { listed: `${g.slice(0, L).join("; ")}${h}`, takes: P.length === 0 ? "" : ` ${a.tool} takes ${P.join(", ")}.` };
}
function ur(e, r) {
  let a = e.toLowerCase(), n = r.toLowerCase();
  return a === n || n.endsWith(`_${a}`) || n.startsWith(`${a}_`) || a.endsWith(`_${n}`) || a.startsWith(`${n}_`);
}
var Vtt = 4096;
function ZAn(e, r) {
  let { tool: a, local: n, ref: o, refWord: i, maxFiles: u, nothingDone: m } = r;
  if (!Array.isArray(e)) return K(r);
  if (e.length > u) return { error: `${a} takes at most ${u} files; this call has ${e.length}. ${m}`, code: "too_many_files" };
  let s = [];
  for (let p of e) {
    if (!(0, import_chunk_0jve1fep.Le)(p)) return K(r);
    if (p[o] !== void 0) return { error: `${a} file entries must give a \`${n}\`; this client uploads the file and fills in the ${i} itself. If these ${i}s came from an approval given before Claude Code restarted, that approval cannot be reused: call ${a} again with paths. ${m}`, code: `model_${o}` };
    let g = p[n];
    if (typeof g !== "string" || g === "" || g.length > Vtt) return K(r);
    if (!(0, import_path.isAbsolute)(g)) return { error: `Cannot attach "${g}": ${a} file paths must be absolute paths as this session sees them. ${m}`, code: "relative_path" };
    s.push(g);
  }
  return s;
}
function K({ tool: e, arg: r, local: a, nothingDone: n }) {
  return { error: `${e} \`${r}\` must be a list of objects, each with a \`${a}\` of at most ${Vtt} characters, such as [{"${a}": "/absolute/path/to/report.csv"}]. ${n}`, code: "bad_entry" };
}
