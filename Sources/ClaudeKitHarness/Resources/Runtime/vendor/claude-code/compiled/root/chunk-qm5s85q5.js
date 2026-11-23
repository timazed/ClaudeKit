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
var chunk_qm5s85q5_exports = {};
__export(chunk_qm5s85q5_exports, {
  ACr: () => ACr,
  RGi: () => RGi
});
module.exports = __toCommonJS(chunk_qm5s85q5_exports);
var import_chunk_8xs3r4c8 = require("/$bunfs/root/chunk-8xs3r4c8.js");
var import_chunk_t2enjxg6 = require("/$bunfs/root/chunk-t2enjxg6.js");
var import_chunk_mmevw7ty = require("/$bunfs/root/chunk-mmevw7ty.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var je = (0, import_chunk_w1d7ygsk.V)(function(Nr) {
  Object.defineProperty(Nr, "__esModule", { value: true });
  Nr.refuseForHybrid = ei;
  var me = (0, import_chunk_mmevw7ty.Vk)(), jr = (0, import_chunk_mmevw7ty.ZYe)();
  function ei(t) {
    let r = me.fieldMetaForNode(t);
    return me.redactPolicyOf(t) === "drop" || r !== void 0 && (!jr.isBootstrapableMeta(r) || me.effectiveVisibility(r) === "internal-only") || me.isHybridExcluded(t);
  }
});
var dt = (0, import_chunk_w1d7ygsk.V)(function(Fr) {
  Object.defineProperty(Fr, "__esModule", { value: true });
  Fr.FLAT_LIFTED_CLUSTER = void 0;
  Fr.effectiveGroupOverride = ni;
  var at = (0, import_chunk_mmevw7ty.Vk)(), ut = (0, import_chunk_mmevw7ty.ZYe)(), Mr = je();
  Fr.FLAT_LIFTED_CLUSTER = "models";
  function ri(t, r) {
    var n;
    let o = (n = ut.FLAT_KEY_TO_NESTED_PATH.get(r.flatKey)) === null || n === void 0 ? void 0 : n[0];
    return Mr.refuseForHybrid(t) || at.isHybridDerived(t) || o === "inference" || o === Fr.FLAT_LIFTED_CLUSTER && r.groupOverride !== "nameSubset";
  }
  function ni(t) {
    var r;
    let n = at.fieldMetaForNode(t);
    if (!n) return;
    let o = n.groupOverride;
    if (n.groupItemOverride !== void 0 && (o !== "nameSubset" || ((r = ut.FLAT_KEY_TO_NESTED_PATH.get(n.flatKey)) === null || r === void 0 ? void 0 : r[0]) === Fr.FLAT_LIFTED_CLUSTER)) throw Error(`group-override: "${n.flatKey}" sets groupItemOverride, which only a nameSubset list outside the flat-lifted ${Fr.FLAT_LIFTED_CLUSTER} cluster can carry; drop it or fix groupOverride`);
    if (ri(t, n)) {
      if (o !== void 0) throw Error(`group-override drift: "${n.flatKey}" sets groupOverride but can never be a group entry (refused for hybrid, control-plane derived, an inference leaf, or a sibling of the flat-lifted ${Fr.FLAT_LIFTED_CLUSTER} list)`);
      return;
    }
    if (typeof o === "object") {
      if (!o.orgOnly.trim()) throw Error(`group-override: "${n.flatKey}" is marked orgOnly without a reason \u2014 state why a per-group value is mechanically meaningless ("it is a restriction" is not one)`);
      return;
    }
    return o !== null && o !== void 0 ? o : "verbatim";
  }
});
var et = (0, import_chunk_w1d7ygsk.V)(function(wr) {
  Object.defineProperty(wr, "__esModule", { value: true });
  wr.pruneSchema = ii;
  wr.emitTypeSource = Me;
  wr.leafPaths = lt;
  wr.setRequiredFromRuntime = ai;
  var J = require("/$bunfs/root/chunk-9tvfvvaq.js"), m = (0, import_chunk_mmevw7ty.Vk)();
  function ii(t, r, n) {
    var o;
    return (o = ct(t, r, n)) !== null && o !== void 0 ? o : J.z.object({});
  }
  function ct(t, r, n) {
    var o;
    let i = n === null || n === void 0 ? void 0 : n(t);
    if (i !== void 0) return Qe(t, i);
    if (r(t)) return;
    let s = m.unwrapZod(t);
    if (s !== t && r(s)) return;
    let a = m.zodKind(s);
    if (a === m.ZodKind.ZodObject) {
      let u = s.shape, d = {};
      for (let [l, c] of Object.entries(u)) {
        let f = ct(c, r, n);
        if (f !== void 0) d[l] = f;
      }
      if (Object.keys(d).length === 0 && Object.keys(u).length > 0) return;
      return Qe(t, J.z.object(d));
    }
    if (a === m.ZodKind.ZodDiscriminatedUnion || a === m.ZodKind.ZodUnion) {
      let u = m.discriminatorKeyOf(s), d = [], l = /* @__PURE__ */ new Set();
      for (let f of m.unionOptionsOf(s)) {
        let p = ct(f, r, n);
        if (p !== void 0) d.push(p);
        else if (u) for (let h of (o = m.enumOptionsOf(f.shape[u])) !== null && o !== void 0 ? o : []) l.add(h);
      }
      if (d.length === 0) return;
      let c = u && d.length > 1 ? J.z.discriminatedUnion(u, d) : d.length === 1 ? d[0] : J.z.union(d);
      return Qe(t, si(c, u, l, t));
    }
    if (a === m.ZodKind.ZodArray) {
      let u = m.arrayElementOf(s), d = u ? ct(u, r, n) : void 0;
      if (d === void 0) return;
      let l = kr(s, J.z.array(d)), { min: c, max: f } = m.arrayLengthBoundsOf(s), p = m.annotationsOf(l);
      if (c !== void 0 && p.minItems === void 0) m.annotate(l, { minItems: c });
      if (f !== void 0 && p.maxItems === void 0) m.annotate(l, { maxItems: f });
      return Qe(t, l);
    }
    return m.findDefaultValue(t) !== void 0 ? Qe(t, m.stripDefaults(t)) : t;
  }
  function si(t, r, n, o) {
    if (!r || n.size === 0 || !ft(o)) return t;
    let i = (s) => typeof s === "object" && s !== null && n.has(s[r]);
    return J.z.preprocess((s) => i(s) ? void 0 : s, t.optional());
  }
  function Qe(t, r) {
    let n = ft(t) && !ft(r) ? r.optional() : r;
    return kr(t, n);
  }
  function kr(t, r) {
    let n = t, o = r;
    for (let i of ["__antAnn", "__antFieldMeta", "__antSubFieldMeta", "__antVariantMeta"]) if (n[i] !== void 0) o[i] = n[i];
    return r;
  }
  function ft(t) {
    return J.z.object({ k: t }).safeParse({}).success;
  }
  function Me(t, r = 0) {
    var n;
    let o = "  ".repeat(r), i = m.unwrapZod(t);
    switch (m.zodKind(i)) {
      case m.ZodKind.ZodString:
        return "string";
      case m.ZodKind.ZodNumber:
        return "number";
      case m.ZodKind.ZodBoolean:
        return "boolean";
      case m.ZodKind.ZodNever:
        return "never";
      case m.ZodKind.ZodUndefined:
        return "undefined";
      case m.ZodKind.ZodLiteral:
        return JSON.stringify(m.literalValueOf(i));
      case m.ZodKind.ZodEnum:
        return ((n = m.enumOptionsOf(i)) !== null && n !== void 0 ? n : []).map((u) => JSON.stringify(u)).join(" | ") || "never";
      case m.ZodKind.ZodRecord: {
        let a = m.recordKeyTypeOf(i), u = m.recordValueTypeOf(i), d = a ? Me(a, r) : "string", l = u ? Me(u, r) : "unknown";
        return a && m.zodKind(m.unwrapZod(a)) === m.ZodKind.ZodEnum ? `Partial<Record<${d}, ${l}>>` : `Record<${d}, ${l}>`;
      }
      case m.ZodKind.ZodArray: {
        let a = m.arrayElementOf(i);
        return `ReadonlyArray<${a ? Me(a, r) : "unknown"}>`;
      }
      case m.ZodKind.ZodObject: {
        let a = i.shape, u = Object.entries(a);
        if (u.length === 0) return "Record<string, never>";
        return `{
${u.map(([l, c]) => {
          let f = c, p = ft(f) ? "?" : "";
          return `${o}  readonly ${JSON.stringify(l)}${p}: ${Me(f, r + 1)};`;
        }).join(`
`)}
${o}}`;
      }
      case m.ZodKind.ZodDiscriminatedUnion:
      case m.ZodKind.ZodUnion: {
        let a = m.unionOptionsOf(i).map((u) => Me(u, r + 2));
        return `(
${o}    | ${a.join(`
${o}    | `)}
${o}  )`;
      }
      default:
        return "unknown";
    }
  }
  function lt(t, r = []) {
    let n = m.unwrapZod(t), o = m.zodKind(n);
    if (o === m.ZodKind.ZodObject) return Object.entries(n.shape).flatMap(([i, s]) => lt(s, [...r, i]));
    if (o === m.ZodKind.ZodDiscriminatedUnion || o === m.ZodKind.ZodUnion) {
      let i = m.discriminatorKeyOf(n);
      return m.unionOptionsOf(n).flatMap((s) => {
        let a = i ? m.literalValueOf(s.shape[i]) : void 0;
        return lt(s, typeof a === "string" ? [...r, `<${a}>`] : r);
      });
    }
    if (o === m.ZodKind.ZodArray) {
      let i = m.arrayElementOf(n);
      return i ? lt(i, [...r, "[]"]) : [r.join(".")];
    }
    return o === m.ZodKind.ZodNever ? [] : [r.join(".")];
  }
  function ai(t, r) {
    let n = Object.entries(t).filter(([o, i]) => {
      var s;
      return ((s = r.properties) === null || s === void 0 ? void 0 : s[o]) !== void 0 && !J.z.object({ k: i }).safeParse({}).success;
    }).map(([o]) => o);
    if (n.length > 0) r.required = n;
    else delete r.required;
  }
});
var Yt = (0, import_chunk_w1d7ygsk.V)(function(xr) {
  Object.defineProperty(xr, "__esModule", { value: true });
  xr.GroupSettings = xr.GroupServableConfig = void 0;
  xr.groupItemOverrideSchema = Br;
  xr.buildGroupServableSchema = Hr;
  xr.isDeclaredInGroupEntry = yi;
  var K = require("/$bunfs/root/chunk-76d32np8.js"), N = (0, import_chunk_mmevw7ty.Vk)(), Kr = (0, import_chunk_mmevw7ty.Sun)(), pt = dt(), ye = je(), Fe = et(), fi = /* @__PURE__ */ new Set([N.ZodKind.ZodObject, N.ZodKind.ZodUnion, N.ZodKind.ZodDiscriminatedUnion, N.ZodKind.ZodArray]), pi = (t) => {
    var r;
    return !fi.has((r = N.zodKind(N.unwrapZod(t))) !== null && r !== void 0 ? r : "");
  }, Ur = (t) => N.zodKind(t) === N.ZodKind.ZodOptional ? Ur(N.unwrapStep(t)) : t, Vr = (t) => N.subFieldsOf(N.arrayElementOf(N.unwrapZod(t)));
  function Br(t) {
    var r, n;
    let o = N.fieldMetaForNode(t), i = o === null || o === void 0 ? void 0 : o.groupItemOverride;
    if (!o || !i) return;
    let s = (l) => {
      throw Error(`group-override: "${o.flatKey}" groupItemOverride ${l}`);
    }, a = Vr(t), u = (n = (r = a.find((l) => l.isPrimaryKey)) === null || r === void 0 ? void 0 : r.key) !== null && n !== void 0 ? n : s("needs the list's element to declare a primary-key (isPrimaryKey) sub-field");
    if (i.length === 0) s("names no members");
    let d = [u, ...i].map((l) => {
      var c;
      let f = (c = a.find((p) => p.key === l)) !== null && c !== void 0 ? c : s(`names "${l}", which is not a sub-field of the list's element`);
      if (ye.refuseForHybrid(f.node) || ye.refuseForHybrid(N.unwrapZod(f.node))) s(`names "${l}", which the hosted store refuses`);
      return [l, Ur(Fe.pruneSchema(f.node, ye.refuseForHybrid))];
    });
    return K.z.object(Object.fromEntries(d)).strict();
  }
  function bi(t) {
    var r, n;
    let o = (n = (r = Vr(t).find((s) => s.isPrimaryKey)) === null || r === void 0 ? void 0 : r.key) !== null && n !== void 0 ? n : "", i = (s) => typeof s === "string" ? s : s[o];
    return (s) => new Set(s.map(i)).size === s.length;
  }
  var mi = (t) => {
    switch (pt.effectiveGroupOverride(t)) {
      case "verbatim":
        return Fe.pruneSchema(t, ye.refuseForHybrid);
      case "nameSubset": {
        let r = Br(t), n = K.z.string().min(1);
        return K.z.array(r ? K.z.union([n, r]) : n).max(200).refine(bi(t), { message: "A group names each entry at most once" });
      }
      default:
        return;
    }
  };
  function Hr() {
    return Fe.pruneSchema(Kr.ManagedConfig, pi, mi).extend({ [pt.FLAT_LIFTED_CLUSTER]: K.z.array(K.z.string()).min(1).max(200).optional(), tokenLimits: K.z.object({ maxPerWindow: K.z.number().int().positive(), windowHours: K.z.number().int().min(1).max(720) }).optional() }).refine((r) => Object.keys(r).length > 0, { message: "A group override must state at least one cluster" });
  }
  xr.GroupServableConfig = N.lazySchema(Hr);
  function yi(t) {
    let r = xr.GroupServableConfig;
    for (let n of t) {
      let o = N.unwrapZod(r);
      if (N.zodKind(o) !== N.ZodKind.ZodObject) return true;
      let i = o.shape, s = Object.hasOwn(i, n) ? i[n] : void 0;
      if (s === void 0) return false;
      r = s;
    }
    return true;
  }
  xr.GroupSettings = K.z.object({ entries: K.z.array(K.z.object({ group_id: K.z.string().uuid(), config: xr.GroupServableConfig })).max(100) });
});
var Wt = (0, import_chunk_w1d7ygsk.V)(function(zr) {
  Object.defineProperty(zr, "__esModule", { value: true });
  zr.admitLegacyCredentialKinds = _i;
  var bt = (0, import_chunk_mmevw7ty.Vk)(), ge = (0, import_chunk_mmevw7ty.Ime)(), mt = (0, import_chunk_mmevw7ty.gGt)(), re = (t) => typeof t === "object" && t !== null && !Array.isArray(t);
  function qr(t) {
    return t === "vertex" ? ge.VERTEX_OAUTH_CREDENTIAL_KIND : void 0;
  }
  var Zr = /* @__PURE__ */ new Map([["vertex", /* @__PURE__ */ new Set([ge.VERTEX_OAUTH_CREDENTIAL_KIND.path, ge.VERTEX_INTERACTIVE_WITH_AUDIENCE.path])], ["gateway", /* @__PURE__ */ new Set([ge.GATEWAY_INTERACTIVE_WITH_IDP.path])]]), hi = new Set([...Zr.values()].flatMap((t) => [...t]));
  function _i(t) {
    let r = (n) => {
      if (Array.isArray(n)) {
        n.forEach(r);
        return;
      }
      if (!re(n)) return;
      let o = re(n.properties) ? n.properties : void 0;
      if (o) vi(o);
      let i = o && re(o.provider) ? o.provider.const : void 0;
      if (typeof i === "string" && bt.PROVIDERS.includes(i)) Si(i, o);
      for (let s of Object.values(n)) r(s);
    };
    r(t);
  }
  function vi(t) {
    let r = t.inferenceCredentialKind;
    if (!re(r) || !Array.isArray(r.enum)) return;
    let n = r.enum, o = [];
    for (let i of bt.PROVIDERS) {
      let s = qr(i);
      if (!s) continue;
      for (let [a, u] of mt.legacyCredentialKindAliases(i)) {
        if (!n.includes(u)) continue;
        if (!n.includes(a)) n.push(a);
        o.push($r(a, u, s, { provider: i }));
      }
    }
    if (o.length > 0) r["x-deprecatedValues"] = o;
  }
  function $r(t, r, n, o = {}) {
    return { value: t, use: r, ...o, ...n.warnFrom !== void 0 ? { warnFrom: n.warnFrom } : {}, ...n.supportEnds !== void 0 ? { supportEnds: n.supportEnds } : {} };
  }
  function Si(t, r) {
    var n;
    let o = r.credential;
    Pi(t, o);
    let i = qr(t), s = mt.legacyCredentialKindAliases(t);
    if (!i || s.size === 0) return;
    let a = re(o) ? (n = o.oneOf) !== null && n !== void 0 ? n : o.anyOf : void 0;
    if (!Array.isArray(a)) return;
    for (let u of a) {
      let d = re(u) && re(u.properties) && re(u.properties.kind) ? u.properties.kind : void 0;
      if (!d || typeof d.const !== "string") continue;
      let l = [...s].filter(([, f]) => f === d.const).map(([f]) => f);
      if (l.length === 0) continue;
      let c = d.const;
      delete d.const, d.enum = [c, ...l], d["x-deprecatedValues"] = l.map((f) => $r(f, c, i));
    }
  }
  function Pi(t, r) {
    var n, o;
    let i = re(r) ? (n = r.oneOf) !== null && n !== void 0 ? n : r.anyOf : void 0;
    if (!Array.isArray(i)) return;
    let s = (o = Zr.get(t)) !== null && o !== void 0 ? o : /* @__PURE__ */ new Set();
    for (let a of i) {
      let u = re(a) && re(a.properties) && re(a.properties.kind) ? a.properties.kind : void 0, d = u === null || u === void 0 ? void 0 : u["x-deprecations"];
      if (!u || !Array.isArray(d)) continue;
      let l = d.filter((c) => !re(c) || typeof c.path !== "string" || !hi.has(c.path) || s.has(c.path));
      if (l.length === 0) delete u["x-deprecations"];
      else u["x-deprecations"] = l;
    }
  }
});
var Jt = (0, import_chunk_w1d7ygsk.V)(function(Wr) {
  Object.defineProperty(Wr, "__esModule", { value: true });
  Wr.admitLegacyToolPolicyValues = Ti;
  var Yr = (0, import_chunk_mmevw7ty.NZ)(), yt = (t) => typeof t === "object" && t !== null && !Array.isArray(t), gt = "ask-session";
  function Ai(t) {
    let r = yt(t.builtinToolPolicy) ? t.builtinToolPolicy.additionalProperties : void 0;
    if (yt(r) && Array.isArray(r.enum) && !r.enum.includes(gt)) r.enum = [...r.enum, gt];
  }
  function Ti(t) {
    let { warnFrom: r, supportEnds: n, use: o } = Yr.MCP_ENTRY_TOOL_POLICY_ASK_SESSION, i = (s) => {
      if (Array.isArray(s)) {
        s.forEach(i);
        return;
      }
      if (!yt(s)) return;
      if (yt(s.properties)) Ai(s.properties);
      if (Array.isArray(s.enum) && s.enum.includes(gt)) s["x-deprecatedValues"] = [{ value: gt, use: o === void 0 ? "ask" : JSON.parse(o), ...r !== void 0 ? { warnFrom: r } : {}, ...n !== void 0 ? { supportEnds: n } : {} }];
      for (let a of Object.values(s)) i(a);
    };
    i(t);
  }
});
var rr = (0, import_chunk_w1d7ygsk.V)(function(sn) {
  Object.defineProperty(sn, "__esModule", { value: true });
  sn.HYBRID_MAX_ITEMS_DEFAULT = sn.HYBRID_SERVABLE_PROVIDERS = sn.HYBRID_SERVABLE_CREDENTIAL_KINDS = void 0;
  sn.buildHybridServableSchema = Xt;
  sn.releasedHybridCredentialKinds = Di;
  sn.emitHybridServableConfigSource = ji;
  sn.hybridArrayBoundViolations = Ni;
  sn.buildHybridServableJsonSchema = Qt;
  sn.emitHybridServableJsonSchemaSource = Fi;
  sn.emitHybridServablePathLedgerSource = wi;
  var Jr = require("/$bunfs/root/chunk-8r4nkdh4.js"), O = (0, import_chunk_mmevw7ty.Vk)(), ke = (0, import_chunk_mmevw7ty.Ime)(), Xr = (0, import_chunk_mmevw7ty.NZ)(), we = (0, import_chunk_mmevw7ty.Sun)(), Ot = (0, import_chunk_mmevw7ty.ZYe)(), Qr = dt(), Et = Yt(), Ke = je(), en = Wt(), tn = Jt(), Oe = et();
  function Xt(t = /* @__PURE__ */ new Set()) {
    return Oe.pruneSchema(we.ManagedConfig, (r) => {
      var n;
      let o = (n = O.fieldMetaForNode(r)) === null || n === void 0 ? void 0 : n.flatKey;
      return o !== void 0 && t.has(o) || Ke.refuseForHybrid(r);
    });
  }
  function Ci(t) {
    return O.discriminatorArmsOf(t).filter((r) => r.schema !== void 0 && !Ke.refuseForHybrid(r.schema)).map((r) => r.id);
  }
  sn.HYBRID_SERVABLE_CREDENTIAL_KINDS = (() => {
    var t;
    let r = (t = O.discriminatorKeyOf(ke.InferenceConfig)) !== null && t !== void 0 ? t : "provider", n = {};
    for (let o of O.unionOptionsOf(ke.InferenceConfig)) {
      let i = o.shape, s = O.literalValueOf(i[r]);
      if (Ke.refuseForHybrid(o)) continue;
      let a = Ci(i.credential);
      if (a.length > 0) n[s] = a;
    }
    return n;
  })();
  sn.HYBRID_SERVABLE_PROVIDERS = Object.keys(sn.HYBRID_SERVABLE_CREDENTIAL_KINDS);
  function Di(t, r) {
    var n, o;
    if (r === void 0) r = (n = O.fieldMetaForNode(we.DISCRIMINATORS.inferenceCredentialKind.node)) === null || n === void 0 ? void 0 : n.support.values;
    let i = O.discriminatorArmsOf(ke.PROVIDER_ARMS.get(t).shape.credential);
    return ((o = sn.HYBRID_SERVABLE_CREDENTIAL_KINDS[t]) !== null && o !== void 0 ? o : []).filter((s) => {
      var a;
      return !O.isUnreleasedVersion((a = r === null || r === void 0 ? void 0 : r[s]) === null || a === void 0 ? void 0 : a.availableInVersion) && !i.some((u) => u.id === s && u.schema !== void 0 && O.isUnreleasedMember(u.schema));
    });
  }
  var Li = `// GENERATED \u2014 do not edit. Run \`yarn workspace @ant/managed-config gen:hybrid-servable\` to regenerate.
// Type only \u2014 for runtime validation use buildHybridServableSchema() from @ant/managed-config/desktop.

`;
  function ji() {
    let t = Oe.emitTypeSource(Xt()), r = Oe.emitTypeSource(Et.buildGroupServableSchema());
    return `${Li}export type HybridServableConfig = ${t};

export type GroupServableConfig = ${r};
`;
  }
  sn.HYBRID_MAX_ITEMS_DEFAULT = 500;
  var rn = (t) => {
    var r;
    return (r = O.annotationsOf(t).maxItems) !== null && r !== void 0 ? r : sn.HYBRID_MAX_ITEMS_DEFAULT;
  };
  function Ni(t, r) {
    let n = [], o = /* @__PURE__ */ new Set(), i = (s, a, u) => {
      let d = O.unwrapZod(s), l = O.zodKind(d);
      if (l === O.ZodKind.ZodArray) {
        if (!Array.isArray(a)) return;
        let c = rn(s);
        if (a.length > c && !o.has(u)) o.add(u), n.push({ path: u, length: a.length, max: c });
        let f = O.arrayElementOf(d);
        if (f) a.forEach((p, h) => i(f, p, `${u}[${h}]`));
        return;
      }
      if (a === null || typeof a !== "object" || Array.isArray(a)) return;
      if (l === O.ZodKind.ZodObject) {
        let c = d.shape;
        for (let [f, p] of Object.entries(c)) {
          let h = a[f];
          if (h !== void 0) i(p, h, u ? `${u}.${f}` : f);
        }
        return;
      }
      if (l === O.ZodKind.ZodUnion || l === O.ZodKind.ZodDiscriminatedUnion) for (let c of O.unionOptionsOf(d)) i(c, a, u);
    };
    return i(Ot.FlatManagedConfig.shape[t], r, ""), n;
  }
  var Mi = `The subset of Claude Desktop managed configuration an Anthropic-hosted (hybrid) config server may store \u2014 generated from buildHybridServableSchema(); regenerate with \`yarn workspace @ant/managed-config gen:hybrid-servable\`, never hand-edit. Structural contract only: objects are closed (unknown keys rejected), except a node marked \`x-opaque: true\`, whose members its reading client judges (a store keeps that subtree as JSON, not as a string map, and is the only check for a credential in it: none of the rules below reach inside it); enums/union arms are exact, and every array carries the store's \`maxItems\` bound (a storage limit the device parse does not apply), but string-hygiene checks the runtime schema applies through refinements \u2014 URLs carrying userinfo, unsafe helper-script paths, secret-shaped values, the loopback/https rules beyond the one marker below \u2014 are NOT expressible here and are enforced by the consumers (the desktop intake and the admin form). Credentials at rest, 1P-only keys and trust roots are absent by construction. A \`format: uri\` leaf marked \`x-hybridLoopback\` may also point at the member's own machine, as it may from a device-managed tier: a URL whose host, as written in the URL's authority, is literally one of its \`hosts\` (RFC 3986 host; names compared case-insensitively, an IPv6 literal in its brackets), over https or plain http, is applied. Spellings a URL parser merely canonicalises to one of them (a trailing dot, IPv4 shorthand such as \`127.1\`, decimal or hex, IPv4-mapped IPv6) are outside this contract: a store refuses them even though a device may still apply some. Any other loopback host, and plain http anywhere else, is dropped, and every other URL leaf stays https to a non-loopback host. A leaf marked \`x-hybridDerived: true\` is computed by the control plane from the organization and stamped on every serve; the server drops an authored value on write and reads this set from the artifact. A leaf marked \`x-groupOverride\` may also appear in a per-group override entry: \`verbatim\` with this node's own schema (scalars and arrays replace the organization's value for its members; object-valued settings merge key by key, so a group can add or override keys but not remove one), \`nameSubset\` as an array naming a subset of the organization's list at this node, each entry at most once: an element is an entry's name, or, where the node also carries \`x-groupItemOverride\` (an object schema: the entry's name plus the item fields a group may restate), an object of that schema, whose restated fields are laid over the selected entry's own the way a \`verbatim\` leaf is laid over the organization's value (an object-valued field such as \`toolPolicy\` merges key by key: the group adds or changes a key and cannot remove one). \`x-readers\` names the clients that read a leaf (${O.readerLegend(O.CONFIG_READERS)}); a leaf without it is read by the desktop only. The marker is per key: which providers or credential arms a client supports is that client's own list (a leaf shared by several arms is marked on each, and so is the \`provider\` or \`kind\` constant that selects each arm). \`generated/hybridReaderSlice.<reader>.schema.json\` is this schema projected on those marks, with the envelope each client is served. \`x-formerPaths\` lists the dotted paths a hosted schema declared and this one no longer does; a store drops a value at one of them from a write instead of refusing the write. \`x-executionTarget\` names the only execution target a leaf applies under (\`desktop\` = the app runs sessions on the device; any other value names the cluster that configures that target); a leaf without it applies under every target.`;
  function nn(t) {
    return Jr.z.toJSONSchema(t, { target: "draft-2020-12", io: "input", reused: "inline", override: (r) => {
      var n;
      if (r.zodSchema._zod.def.type === "catch") delete r.jsonSchema.default;
      if (O.isHybridDerived(r.zodSchema)) r.jsonSchema["x-hybridDerived"] = true;
      if (O.isHybridLoopback(r.zodSchema)) r.jsonSchema["x-hybridLoopback"] = { hosts: [...Xr.LOOPBACK_HOSTS] };
      let o = Qr.effectiveGroupOverride(r.zodSchema);
      if (o) {
        r.jsonSchema["x-groupOverride"] = o;
        let c = Et.groupItemOverrideSchema(r.zodSchema);
        if (c) {
          let { $schema: f, ...p } = nn(c);
          r.jsonSchema["x-groupItemOverride"] = p;
        }
      }
      let i = O.fieldMetaForNode(r.zodSchema), s = i !== null && i !== void 0 ? i : O.subfieldMetaForNode(r.zodSchema);
      if (s && O.readersDeclared(s)) r.jsonSchema["x-readers"] = [...O.readersOf(s)];
      if (i && O.annotationsOf(r.zodSchema).opaque) r.jsonSchema["x-opaque"] = true;
      if (i === null || i === void 0 ? void 0 : i.support.executionTarget) r.jsonSchema["x-executionTarget"] = i.support.executionTarget;
      let a = r.zodSchema._zod.def, u = r.jsonSchema;
      if (u.type === "string" && ((n = u.minLength) !== null && n !== void 0 ? n : 0) >= 1 && u.pattern === void 0 && u.allOf === void 0) u.pattern = "\\S";
      let d = r.jsonSchema;
      if (a.type === "array") {
        let c = r.zodSchema;
        if (d.maxItems === void 0) d.maxItems = rn(c);
        let f = O.openEnumItemsOf(c);
        if (f) r.jsonSchema.items = f;
        let p = O.annotationsOf(c).minItems;
        if (d.minItems === void 0 && p !== void 0 && p > 0) d.minItems = p;
      }
      if (a.type !== "object" || !a.shape) return;
      let l = r.jsonSchema;
      if (l.additionalProperties === void 0) l.additionalProperties = false;
      Oe.setRequiredFromRuntime(a.shape, l);
    } });
  }
  function Qt(t = /* @__PURE__ */ new Set()) {
    let r = nn(Xt(t));
    en.admitLegacyCredentialKinds(r), tn.admitLegacyToolPolicyValues(r);
    for (let { node: i, nestedPath: s } of Object.values(we.DISCRIMINATORS)) {
      let a = O.fieldMetaForNode(i);
      if (a && O.readersDeclared(a)) on(r, s, O.readersOf(a));
    }
    let { $schema: n, ...o } = r;
    return { $schema: n, title: "HybridServableConfig", description: Mi, "x-formerPaths": Ot.FORMER_NESTED_PATHS.map((i) => i.join(".")).sort(), ...o };
  }
  function on(t, r, n) {
    var o, i;
    if (typeof t !== "object" || t === null) return;
    let s = t, [a, ...u] = r;
    if (a === void 0) {
      s["x-readers"] = [...n];
      return;
    }
    for (let d of [s, ...(o = s.oneOf) !== null && o !== void 0 ? o : []]) on((i = d.properties) === null || i === void 0 ? void 0 : i[a], u, n);
  }
  function Fi() {
    return `${JSON.stringify(Qt(), null, 2)}
`;
  }
  var ki = "Written by `yarn workspace @ant/managed-config gen:hybrid-servable`, which never removes a path: each path that hybridServableConfig.schema.json has declared through `properties`, in every `oneOf` and `anyOf` variant too. FORMER_NESTED_PATHS (schema/flat.ts) must hold exactly the paths here that the schema no longer declares. The rules, the hand edits and the limits are in packages/managed-config/CLAUDE.md, under 'A moved or removed hosted path'.";
  function wi(t) {
    let r, n = "";
    try {
      r = JSON.parse(t);
    } catch (u) {
      n = ` (${String(u)})`;
    }
    let o = r === null || r === void 0 ? void 0 : r.paths;
    if (!Array.isArray(o) || !o.every((u) => typeof u === "string")) throw Error('packages/managed-config/src/desktop/generated/hybridServablePathLedger.json must be JSON with a "paths" list of strings. If it has merge-conflict markers, keep the paths from both sides and delete the markers. Then run `yarn workspace @ant/managed-config gen:hybrid-servable`.' + n);
    let i = new Set(o), s = (u, d) => {
      let { properties: l, oneOf: c, anyOf: f } = u;
      for (let [p, h] of Object.entries(l !== null && l !== void 0 ? l : {})) {
        let g = d === "" ? p : `${d}.${p}`;
        i.add(g), s(h, g);
      }
      for (let p of [...c !== null && c !== void 0 ? c : [], ...f !== null && f !== void 0 ? f : []]) s(p, d);
    };
    s(Qt(), "");
    let a = { $comment: ki, paths: [...i].sort() };
    return `${JSON.stringify(a, null, 2)}
`;
  }
});
var nt = (0, import_chunk_w1d7ygsk.V)(function(nr) {
  Object.defineProperty(nr, "__esModule", { value: true });
  nr.appliesUnder = nr.runsSessionsOffDevice = nr.FORM_FIELD_BY_ID = nr.FORM_FIELDS = nr.subFieldsOf = void 0;
  nr.targetCluster = tt;
  nr.setInferenceProvider = Yi;
  nr.setInferenceCredentialKind = Wi;
  nr.credentialKindsOffered = Ji;
  nr.isFormFieldVisible = fn;
  nr.formFieldsForReader = Qi;
  nr.isFieldRequired = ns;
  nr.withoutInapplicable = is;
  nr.getFormField = ss;
  nr.elementOf = bn;
  nr.objectColumnsOf = mn;
  nr.itemColumnsOf = yn;
  nr.storageTypeOf = as;
  nr.optionValuesOf = us;
  nr.recordValueOptionsOf = ds;
  nr.controlTypeOf = cs;
  var y = (0, import_chunk_mmevw7ty.Vk)();
  Object.defineProperty(nr, "subFieldsOf", { enumerable: true, get: function() {
    return y.subFieldsOf;
  } });
  var ue = (0, import_chunk_mmevw7ty.T4)(), U = (0, import_chunk_8xs3r4c8.wlt)(), un = (0, import_chunk_mmevw7ty.Ime)(), ee = (0, import_chunk_8xs3r4c8.ILe)(), dn = dt(), Zi = new Map([...ee.FLAT_KEY_TO_NESTED_PATH].filter(([, t]) => t[0] !== void 0 && t[0] in U.CLUSTER_REGISTRY).map(([t, r]) => [t, r[0]])), cn = new Map(Object.values(U.CLUSTER_REGISTRY).filter((t) => t.rebuild === void 0).flatMap((t) => {
    var r;
    return Object.entries((r = t.propMap) !== null && r !== void 0 ? r : {}).map(([n, o]) => [o, n.split(".")]);
  }));
  function tt(t) {
    let r = ue.offDeviceClusterOf(t);
    return r === void 0 ? void 0 : { name: r, entry: U.CLUSTER_REGISTRY[r] };
  }
  var ht = (t, r) => {
    var n, o;
    return (o = (n = tt(t)) === null || n === void 0 ? void 0 : n.entry.leaves) === null || o === void 0 ? void 0 : o.get(r);
  };
  function ln(t, r) {
    var n;
    return ht(t, r) === void 0 ? Zi.get(r) : (n = tt(t)) === null || n === void 0 ? void 0 : n.name;
  }
  function $i(t, r) {
    let n = ln(t, r);
    if (n === void 0) return t[r];
    let o = t[n];
    if (o === void 0) return;
    let i = cn.get(r);
    if (i) return U.getAtPath(o, i);
    return U.CLUSTER_REGISTRY[n].flatten(o)[r];
  }
  function zi(t, r, n) {
    var o, i, s;
    let a = ln(t, r);
    if (a === void 0) return { ...t, [r]: n };
    let u = cn.get(r);
    if (u) {
      let g = t[a];
      return { ...t, [a]: (o = U.setAtPath(g, u, n)) !== null && o !== void 0 ? o : {} };
    }
    let d = U.CLUSTER_REGISTRY[a], l = t[a], f = { ...l === void 0 && d.leaves !== void 0 && t.inference !== void 0 ? Object.fromEntries(Object.entries(U.flattenInference(t.inference)).filter(([g]) => {
      var A, I;
      return g === "inferenceProvider" || ((I = (A = d.leaves) === null || A === void 0 ? void 0 : A.get(g)) === null || I === void 0 ? void 0 : I.own) === false;
    })) : {}, ...l !== void 0 ? d.flatten(l) : {}, [r]: n }, p = y.dropUndefined({ ...t, [a]: ((i = d.rebuild) !== null && i !== void 0 ? i : d.unflatten)(f) });
    if (!(a !== "inference" && p.inference !== void 0 && ((s = ht(t, r)) === null || s === void 0 ? void 0 : s.own) === false) || p.inference === void 0) return p;
    return y.dropUndefined({ ...p, inference: U.unflattenInference({ ...U.flattenInference(p.inference), [r]: n }) });
  }
  function Yi(t, r) {
    if (r === void 0) return y.dropUndefined({ ...t, inference: void 0 });
    let n = t.inference !== void 0 ? U.flattenInference(t.inference) : {};
    return y.dropUndefined({ ...t, inference: U.unflattenInference({ ...n, inferenceProvider: r }) });
  }
  function Wi(t, r) {
    var n;
    let o = tt(t);
    if (o !== void 0) {
      let s = t, a = Object.fromEntries(Object.entries(o.entry.flatten(s[o.name])).filter(([d]) => {
        var l, c;
        return ((c = (l = o.entry.leaves) === null || l === void 0 ? void 0 : l.get(d)) === null || c === void 0 ? void 0 : c.kinds) === void 0;
      })), u = y.dropUndefined({ ...t, [o.name]: ((n = o.entry.rebuild) !== null && n !== void 0 ? n : o.entry.unflatten)({ ...a, inferenceCredentialKind: r }) });
      return u.inference === void 0 ? u : { ...u, inference: y.dropUndefined({ ...u.inference, credential: r === void 0 ? void 0 : { kind: r } }) };
    }
    if (!t.inference) return t;
    let i = r === void 0 ? void 0 : { kind: r };
    return { ...t, inference: y.dropUndefined({ ...t.inference, credential: i }) };
  }
  function Ji(t) {
    var r, n;
    let o = (r = tt(t)) === null || r === void 0 ? void 0 : r.entry.credentialKinds;
    if (o !== void 0) return o;
    let i = (n = t.inference) === null || n === void 0 ? void 0 : n.provider;
    return i === void 0 ? [] : un.CREDENTIAL_KINDS_FOR_PROVIDER[i];
  }
  function fn(t, r) {
    var n, o, i;
    let s = ht(r, t.id);
    if (s !== void 0) {
      if (s.kinds !== void 0 && !s.kinds.includes(ue.credentialKindOf(r))) return false;
      let d = (n = t.meta.predicates) === null || n === void 0 ? void 0 : n.show;
      return !d || d(r);
    }
    if (t.providers.length > 0 && t.providers.length < y.PROVIDERS.length && !t.providers.includes((o = r.inference) === null || o === void 0 ? void 0 : o.provider)) return false;
    let a = ue.credentialKindOf(r);
    if (t.credentialKinds.length > 0 && !t.credentialKinds.includes(a)) return false;
    let u = (i = t.meta.predicates) === null || i === void 0 ? void 0 : i.show;
    return !u || u(r);
  }
  function Xi(t, r, n) {
    var o, i, s;
    let a = ee.INFERENCE_LEAF_MEMBERSHIP.get(t), u = (o = ee.DISCRIMINATORS[t]) === null || o === void 0 ? void 0 : o.discriminates, d = dn.effectiveGroupOverride(r);
    return { id: t, meta: n, node: r, providers: (i = a === null || a === void 0 ? void 0 : a.providers) !== null && i !== void 0 ? i : [], credentialKinds: (s = a === null || a === void 0 ? void 0 : a.credentialKinds) !== null && s !== void 0 ? s : [], ...u && { discriminates: u }, ...d && { groupOverride: d }, get: (l) => $i(l, t), set: (l, c) => zi(l, t, c) };
  }
  function pn(t) {
    let r = ee.FlatManagedConfig.shape[t], n = y.fieldMetaForNode(r);
    if (!n) throw Error(`FORM_FIELDS: no meta for ${t}`);
    return Xi(t, r, n);
  }
  nr.FORM_FIELDS = ee.flatConfigKeys({ includeInternal: true }).map(pn);
  var an = /* @__PURE__ */ new Map([["desktop", nr.FORM_FIELDS]]);
  function Qi(t) {
    let r = an.get(t);
    if (r === void 0) r = ee.flatConfigKeys({ includeInternal: true, reader: t }).map(pn), an.set(t, r);
    return r;
  }
  nr.FORM_FIELD_BY_ID = new Map(nr.FORM_FIELDS.map((t) => [t.id, t]));
  var es = y.offDeviceExecutionTargets(), ts = (t) => {
    let r = t;
    return es.some((n) => r[n] !== void 0);
  };
  nr.runsSessionsOffDevice = ts;
  var rs = (t, r) => {
    let { executionTarget: n, appliesOffDeviceOnly: o } = t.meta.support, i = nr.runsSessionsOffDevice(r);
    return o === true ? i : n !== "desktop" || !i;
  };
  nr.appliesUnder = rs;
  function ns(t, r) {
    var n, o, i, s, a;
    if (!fn(t, r) || !nr.appliesUnder(t, r) || t.meta.support.executionTarget === void 0 && nr.runsSessionsOffDevice(r) && ht(r, t.id) === void 0) return false;
    if ((o = (n = t.meta.predicates) === null || n === void 0 ? void 0 : n.required) === null || o === void 0 ? void 0 : o.call(n, r)) return true;
    let u = (i = r.inference) === null || i === void 0 ? void 0 : i.provider, d = ue.credentialKindOf(r);
    return u !== void 0 && d !== void 0 && !ue.hasActiveBootstrap(r) && ((a = (s = ee.credentialSpecCell(u, d)) === null || s === void 0 ? void 0 : s.extraRequiredLeaves) !== null && a !== void 0 ? a : []).includes(t.id);
  }
  var os = nr.FORM_FIELDS.filter((t) => t.meta.support.appliesOffDeviceOnly === true);
  function is(t) {
    return (nr.runsSessionsOffDevice(t) ? nr.FORM_FIELDS : os).reduce((n, o) => nr.appliesUnder(o, n) || o.get(n) === void 0 ? n : o.set(n, void 0), t);
  }
  function ss(t) {
    let r = nr.FORM_FIELD_BY_ID.get(t);
    if (!r) throw Error(`unknown form field: ${t}`);
    return r;
  }
  function bn(t) {
    let r = y.unwrapZod(t);
    return y.arrayElementOf(r);
  }
  function mn(t) {
    return y.subFieldsOf(t.node);
  }
  function yn(t) {
    return y.subFieldsOf(bn(t.node));
  }
  function as(t) {
    let r = y.unwrapZod(t), n = y.zodKind(r);
    if (n === y.ZodKind.ZodBoolean) return "boolean";
    if (n === y.ZodKind.ZodNumber) return y.numberIsInt(r) ? "integer" : "real";
    return "string";
  }
  function us(t, r) {
    let n = t.meta.optionValues;
    if (n) {
      let u = y.enumOptionsOf(t.node);
      return typeof r === "string" && !n.includes(r) && (u === null || u === void 0 ? void 0 : u.includes(r)) ? u.filter((d) => n.includes(d) || d === r) : n;
    }
    let o = y.unwrapZod(t.node), i = y.zodKind(o), s = i === y.ZodKind.ZodArray ? y.arrayElementOf(o) : void 0, a = i === y.ZodKind.ZodRecord ? y.recordKeyTypeOf(o) : void 0;
    return (i === y.ZodKind.ZodArray ? s && y.enumOptionsOf(s) : i === y.ZodKind.ZodRecord ? a && y.enumOptionsOf(a) : y.enumOptionsOf(t.node)) || void 0;
  }
  function ds(t) {
    var r;
    return (r = t.meta.optionValues) !== null && r !== void 0 ? r : y.recordValueEnumOf(t.node);
  }
  function cs(t) {
    if (t.meta.control) return t.meta.control;
    let r = y.zodKind(y.unwrapZod(t.node));
    if (r === y.ZodKind.ZodArray) return yn(t).length > 0 ? "objectList" : "stringArray";
    if (r === y.ZodKind.ZodObject) return mn(t).length > 0 ? "object" : "json";
    if (r === y.ZodKind.ZodEnum) return "enum";
    if (r === y.ZodKind.ZodRecord) return "record";
    if (r === y.ZodKind.ZodBoolean) return "boolean";
    if (r === y.ZodKind.ZodNumber) return "number";
    return t.meta.multiline ? "textarea" : "string";
  }
});
var Pt = (0, import_chunk_w1d7ygsk.V)(function(hn) {
  Object.defineProperty(hn, "__esModule", { value: true });
  hn.isEmptyRowValue = hn.isEmptyValue = hn.isEmptySubValue = hn.CONFIGURATION_CATEGORIES = void 0;
  hn.stripHiddenSubFields = Ts;
  hn.missingSubFields = Ls;
  var Y = nt(), F = (0, import_chunk_mmevw7ty.vj)(), St = (0, import_chunk_8xs3r4c8.ILe)();
  hn.CONFIGURATION_CATEGORIES = { connection: { title: F.msg({ defaultMessage: "Connection", id: "KtZV9pULgo" }), description: F.msg({ defaultMessage: "Choose where Claude Desktop sends inference requests.", id: "Amxb69AvfR" }) }, sandbox: { title: F.msg({ defaultMessage: "Capabilities", description: "Title of the Claude Desktop deployment settings page that holds what the desktop app may do on the device (tools, built-in browser, coding, files): an entry under Desktop 3P in the organization admin settings navigation, a section of the Desktop setup window, and a heading in the configuration reference. Noun. Use the same word as the organization-wide Capabilities settings page.", id: "tJF62KpQGK" }) }, connectors: { title: F.msg({ defaultMessage: "Connectors", id: "2mMJRvsAg1" }) }, telemetry: { title: F.msg({ defaultMessage: "Telemetry & updates", id: "Ba3MtjwP5h" }), banner: F.msg({ defaultMessage: "Prompts, completions, and your data are never sent to Anthropic. Telemetry covers crash and usage signals only.", id: "enn6AdQzxk" }) }, limits: { title: F.msg({ defaultMessage: "Limits", id: "TDrunp5flH" }) }, appearance: { title: F.msg({ defaultMessage: "Appearance", description: "Title of the Claude Desktop deployment settings page for how the deployed app presents itself to its users (display name and subtitle, an organization banner, in-app notices): an entry under Desktop 3P in the organization admin settings navigation, a section of the Desktop setup window, and a heading in the configuration reference. Noun meaning look or presentation; not visibility and not a person\u2019s looks.", id: "wF3XRBJOtl" }) }, plugins: { title: F.msg({ defaultMessage: "Plugins", id: "GVkVQAl/Q1" }), mountPath: { mac: "/Library/Application Support/Claude/org-plugins", win: "%ProgramFiles%\\Claude\\org-plugins" } }, egress: { title: F.msg({ defaultMessage: "Egress", id: "tUQQ2GOXCS" }), description: F.msg({ defaultMessage: "Hosts your network firewall must allow, derived from your current settings. This list is read-only and updates as you make changes. Traffic is HTTPS on port 443 unless an entry shows a port or starts with http://.", id: "mdvoDuAMkh" }), derived: true }, source: { title: F.msg({ defaultMessage: "Source", id: "aH4De2Y20k" }), description: F.msg({ defaultMessage: "Point this configuration at a bootstrap URL to have your organization manage these settings remotely.", id: "tQVvCrCxZY" }), descriptionWhenConfigured: F.msg({ defaultMessage: "This configuration is fetched from a bootstrap URL at launch. Fields it provides are locked below.", id: "JOFb1Tb7WF" }) } };
  function On(t, r) {
    var n;
    let o;
    for (let i of t) if (((n = i.predicates) === null || n === void 0 ? void 0 : n.show) && !i.predicates.show(r) && i.key in r) o !== null && o !== void 0 || (o = { ...r }), delete o[i.key];
    return o;
  }
  function Ts(t) {
    let r = t;
    for (let n of Y.FORM_FIELDS) {
      if (!St.enabledScopes(n.meta).includes("3p")) continue;
      let o = n.get(r);
      if (o === void 0) continue;
      if (!Y.isFormFieldVisible(n, t)) {
        r = n.set(r, void 0);
        continue;
      }
      if (!o || typeof o !== "object") continue;
      let i = Y.objectColumnsOf(n);
      if (i.length > 0 && !Array.isArray(o)) {
        let a = On(i, o);
        if (a) r = n.set(r, Object.keys(a).length === 0 ? void 0 : a);
        continue;
      }
      let s = Y.itemColumnsOf(n);
      if (s.length > 0 && Array.isArray(o)) {
        let a = false, u = o.map((d) => {
          if (!d || typeof d !== "object") return d;
          let l = On(s, d);
          if (l) a = true;
          return l !== null && l !== void 0 ? l : d;
        });
        if (a) r = n.set(r, u);
      }
    }
    return r;
  }
  var Is = (t) => t === void 0 || t === null || typeof t === "string" && t.trim() === "";
  hn.isEmptySubValue = Is;
  var Cs = (t) => t === void 0 || t === null || t === "" || Array.isArray(t) && t.length === 0 || typeof t === "object" && Object.keys(t).length === 0;
  hn.isEmptyValue = Cs;
  var Ds = (t, r) => Array.isArray(r) && r.length === 0 ? !St.keepsAuthoredEmptyList(t) : hn.isEmptyValue(r);
  hn.isEmptyRowValue = Ds;
  function En(t, r, n, o) {
    let i = typeof t === "string" ? Y.FORM_FIELD_BY_ID.get(t) : t;
    if (!i) return [];
    let s = n(i);
    if (s.length === 0 || !Y.isFormFieldVisible(i, r) || !Y.appliesUnder(i, r)) return [];
    return o(i.get(r)).flatMap((a) => {
      let u = a && typeof a === "object" ? a : {};
      return s.filter((d) => {
        var l, c, f;
        return (!((l = d.predicates) === null || l === void 0 ? void 0 : l.show) || d.predicates.show(u)) && ((f = (c = d.predicates) === null || c === void 0 ? void 0 : c.required) === null || f === void 0 ? void 0 : f.call(c, u)) && hn.isEmptySubValue(u[d.key]);
      });
    });
  }
  function Ls(t, r) {
    return [...En(t, r, Y.objectColumnsOf, (n) => n === void 0 || n === null ? [] : [n]), ...En(t, r, Y.itemColumnsOf, (n) => Array.isArray(n) ? n : [])];
  }
});
var Mn = (0, import_chunk_w1d7ygsk.V)(function(jn) {
  Object.defineProperty(jn, "__esModule", { value: true });
  jn.STORE_REFUSAL_KINDS = jn.DEVICE_DROP_KINDS = void 0;
  jn.evaluateConfig = ks;
  jn.issuesToFieldErrors = Zs;
  var An = (0, import_chunk_8xs3r4c8._un)(), Tn = (0, import_chunk_mmevw7ty.xCr)(), de = (0, import_chunk_mmevw7ty.Vk)(), Ct = (0, import_chunk_mmevw7ty.T4)(), ce = (0, import_chunk_8xs3r4c8.wlt)(), Rt = nt(), In = (0, import_chunk_8xs3r4c8.REs)(), Cn = (0, import_chunk_8xs3r4c8.YEo)(), D = (0, import_chunk_8xs3r4c8.ILe)(), At = (0, import_chunk_mmevw7ty.ZYe)(), Dt = je(), Ue = rr(), Tt = Pt();
  jn.DEVICE_DROP_KINDS = /* @__PURE__ */ new Set(["invalid", "narrowed", "refused", "model"]);
  jn.STORE_REFUSAL_KINDS = /* @__PURE__ */ new Set(["credential-header", "client-secret", "bare-url", "array-bound"]);
  var Dn = /^(?:Failed to parse managed config "[^"]+": (?:\.: )?|Bootstrap intake dropped "[^"]+": |Managed config "[^"]+" dropped: |Managed config "[^"]+" is (?=not ))/, or;
  function It() {
    if (!or) {
      let t = D.bootstrapableKeys({ includeInternal: false, reader: "all" }).filter((r) => !Dt.refuseForHybrid(D.FlatManagedConfig.shape[r]));
      or = { schema: Ue.buildHybridServableSchema(), keys: t, storable: new Set(t), lenient: new Map(t.map((r) => [r, de.stripDefaults(D.FlatManagedConfig.shape[r])])) };
    }
    return or;
  }
  function Pn(t) {
    var r, n;
    let o = { includeInternal: (r = t.includeInternal) !== null && r !== void 0 ? r : false, reader: (n = t.reader) !== null && n !== void 0 ? n : "desktop" };
    switch (t.channel) {
      case "mdm":
      case "local":
        return D.staticTierKeys(o);
      case "bootstrap":
      case "hybrid":
        return D.bootstrapableKeys(o);
    }
  }
  function Ln(t, r) {
    let n = t.filter((o) => typeof o === "string");
    return r.filter((o) => {
      var i;
      let s = (i = D.FLAT_KEY_TO_NESTED_PATH.get(o)) !== null && i !== void 0 ? i : [o], a = Math.min(n.length, s.length);
      return n.slice(0, a).every((u, d) => s[d] === u);
    });
  }
  function Fs(t, r, n) {
    let o = t.msg.replace(Dn, "");
    if (t.kind === "deprecated") return { key: t.key, kind: "advisory", severity: "warn", msg: o, ...t.deprecation ? { deprecation: t.deprecation } : {} };
    if (t.kind) {
      let i = t.kind === "clamp" || t.kind === "unknown" && !n;
      return { key: t.key, kind: "narrowed", severity: i ? "warn" : "error", msg: o };
    }
    return { key: t.key, kind: "invalid", severity: "error", msg: o, ...r ? { issues: r } : {}, ...t.cluster ? { cluster: t.cluster } : {} };
  }
  function ks(t, r) {
    var n, o, i;
    let s = r.channel === "hybrid", a = (n = r.reader) !== null && n !== void 0 ? n : "desktop", u = Pn(r), d = new Set(u), l = s ? Pn({ ...r, reader: "all" }) : u, c = (_) => a === "all" || !Object.hasOwn(D.FlatManagedConfig.shape, _) || de.isReadBy(D.getFieldMeta(_), a), f = /* @__PURE__ */ new Set(), p = [], { config: h, keyedParseErrors: g, sentKeys: A, issueDetails: I } = An.parseBootstrapConfig(t, s ? void 0 : r.trustedOrigin, void 0, { includeInternal: (o = r.includeInternal) !== null && o !== void 0 ? o : false, reader: a }, { allowedKeys: l, channel: r.channel, allowLoopbackResponseUrls: r.packaged === false, ...s ? { schemaFor: (_) => It().lenient.get(_) } : {}, editor: r.editor, onFailClosed: (_) => f.add(_) }), C = h;
    delete C.expiresAt, D.dropNonAnthropicModels(C, (_, z) => {
      if (c("inferenceModels")) p.push({ key: "inferenceModels", kind: "model", severity: "error", msg: `"${_}" is not an Anthropic model for this provider \u2014 ${z}`, model: { name: _, reason: z } });
    });
    let j = Object.fromEntries(Object.entries(C).filter(([_]) => c(_))), B = new Set([...f].filter(c));
    for (let _ of g) {
      if (D.tryGetFieldMeta(_.key) === void 0) {
        if (a !== "all" && Ks(_.key, a)) {
          if (s) p.push({ key: _.key, kind: "other-reader", severity: "warn", msg: "a name under another client's settings that this build does not know (left out of this build's copy)" });
          continue;
        }
        p.push({ key: _.key, kind: "not-accepted", severity: s ? "error" : "warn", msg: _.msg.replace(Dn, "") });
        continue;
      }
      if (!d.has(_.key)) continue;
      if (s && de.isHybridDerived(D.FlatManagedConfig.shape[_.key])) continue;
      p.push(Fs(_, I.get(_.key), s));
    }
    if (s) {
      for (let _ of A) if (Object.hasOwn(D.FlatManagedConfig.shape, _) && c(_) && de.isHybridDerived(D.FlatManagedConfig.shape[_])) p.push({ key: _, kind: "derived", severity: "warn", msg: "set by the hosted control plane from your organization; the configured value is ignored" });
    }
    for (let _ of A) if (!d.has(_) && Object.hasOwn(D.FlatManagedConfig.shape, _) && c(_)) p.push({ key: _, kind: "not-accepted", severity: s ? "error" : "warn", msg: s ? "not storable by the hosted control plane" : "not accepted from this configuration source" });
    if (s) {
      let { storable: _ } = It();
      for (let Xe of Object.keys(j)) if (!_.has(Xe)) p.push({ key: Xe, kind: "refused", severity: "error", msg: "not storable by the hosted control plane" });
      let { inferenceProvider: z, inferenceCredentialKind: Ie } = j, Je = z ? Ue.HYBRID_SERVABLE_CREDENTIAL_KINDS[z] : void 0;
      if (z && Je === void 0) p.push({ key: "inferenceProvider", kind: "refused", severity: "error", msg: `provider "${z}" is not storable by the hosted control plane` });
      else if (Je && Ie && !Je.includes(Ie)) p.push({ key: "inferenceCredentialKind", kind: "refused", severity: "error", msg: `credential kind "${Ie}" is not storable by the hosted control plane` });
    }
    for (let _ of D.keyedConfigurationWarnings(j, { mode: "3p", stoodIn: B })) p.push({ key: _.key, kind: "advisory", severity: "warn", msg: _.msg });
    let w = ce.unflattenAll(j);
    if (r.requiredFields) p.push(...ws(r.requiredFields, w, p));
    let T = [...B].filter((_) => j[_] !== void 0), H = s ? Us(t, C, f, new Set(g.map((_) => _.key)), A, c, T, p) : void 0, x = H, be = In.evaluateInference(x !== null && x !== void 0 ? x : w, { keyedErrors: g, remoteApplied: (i = r.remoteApplied) !== null && i !== void 0 ? i : true });
    if (be && !be.ok) for (let _ of be.issues) p.push({ key: _.key, kind: "inference", severity: "error", msg: _.msg, inference: { reason: _.reason } });
    if (p.push(...Bs(w, s)), s) {
      p.push(...xs(w));
      for (let _ of qs(w)) for (let z of Ln(_, u)) if (j[z] !== void 0) p.push({ key: z, kind: "bare-url", severity: "error", msg: Ct.QUERY_OR_FRAGMENT_URL_MESSAGE });
      for (let _ of Object.keys(j)) for (let z of Ue.hybridArrayBoundViolations(_, j[_])) p.push({ key: _, kind: "array-bound", severity: "error", msg: `${z.path ? `${z.path}: ` : ""}${z.length} entries; the hosted configuration allows at most ${z.max}` });
    }
    return { config: j, issues: p, blocking: p.filter((_) => _.severity === "error"), inference: be, failClosed: T, ...s ? { hosted: H } : {} };
  }
  function ws(t, r, n) {
    let o = [];
    for (let i of t) {
      if (!Rt.isFormFieldVisible(i, r) || n.some((a) => a.key === i.id && a.severity === "error")) continue;
      let s = Tt.missingSubFields(i, r);
      if (s.length > 0) o.push({ key: i.id, kind: "required", severity: "error", msg: `${s.map((a) => a.key).join(", ")} required` });
      else if (Rt.isFieldRequired(i, r) && Tt.isEmptyRowValue(i.id, i.get(r))) o.push({ key: i.id, kind: "required", severity: "error", msg: "required" });
    }
    return o;
  }
  function Ks(t, r) {
    var n, o;
    let i = t.indexOf(".");
    if (i <= 0) return false;
    let s = Object.values((o = (n = ce.CLUSTER_REGISTRY[t.slice(0, i)]) === null || n === void 0 ? void 0 : n.propMap) !== null && o !== void 0 ? o : {});
    return s.length > 0 && s.every((a) => !de.isReadBy(D.getFieldMeta(a), r));
  }
  function Us(t, r, n, o, i, s, a, u) {
    var d, l, c;
    let { storable: f } = It(), p = Object.fromEntries(Object.entries(r).filter(([T]) => s(T) || !n.has(T))), h = [], g = [...a], A = Vs(p, g, h);
    for (let T of h) if (s(T.key)) u.push(T);
    for (let T of g) if (s(T) && !a.includes(T)) a.push(T);
    let I = r.inferenceProvider, C = (T) => {
      let H = At.INFERENCE_LEAF_MEMBERSHIP.get(T);
      return H === void 0 || I !== void 0 && H.providers.includes(I);
    }, j = i.filter((T) => f.has(T) && !s(T) && C(T));
    for (let T of i) if (Object.hasOwn(D.FlatManagedConfig.shape, T) && !C(T)) {
      let H = At.INFERENCE_LEAF_MEMBERSHIP.get(T);
      u.push({ key: T, kind: "advisory", severity: "warn", msg: `written for provider ${((d = H === null || H === void 0 ? void 0 : H.providers) !== null && d !== void 0 ? d : []).join("/")}, but the document's provider is ${I !== null && I !== void 0 ? I : "unset"}; not part of the document` });
    }
    for (let T of i) if (Object.hasOwn(D.FlatManagedConfig.shape, T) && !s(T) && C(T) && Dt.refuseForHybrid(D.FlatManagedConfig.shape[T])) u.push({ key: T, kind: "refused", severity: "warn", msg: "read by another client and not storable by the hosted control plane; left out" });
    if (j.length === 0) return A;
    let B = ce.flattenAll(A), w = Cn.normalize(t).flat;
    for (let T of j) {
      let H = w[T];
      if (H === void 0 || H === null || H === "") continue;
      if (o.has(T) || n.has(T) || r[T] === void 0 || B[T] === void 0) A = (c = ce.setAtPath(A, (l = D.FLAT_KEY_TO_NESTED_PATH.get(T)) !== null && l !== void 0 ? l : [T], H)) !== null && c !== void 0 ? c : {}, u.push({ key: T, kind: "other-reader", severity: "warn", msg: "read by another client, which could not apply it as stored; kept unchanged" });
    }
    return A;
  }
  function Vs(t, r, n) {
    let { schema: o, keys: i } = It(), s = {};
    for (let a of i) if (t[a] !== void 0 && !r.includes(a)) s[a] = t[a];
    for (let a = 0; a <= i.length; a++) {
      let u = o.safeParse(ce.unflattenAll(s));
      if (u.success) return Object.fromEntries(Object.entries(u.data).filter(([, c]) => c !== void 0));
      let d = i.filter((c) => s[c] !== void 0), l = new Set(u.error.issues.flatMap((c) => {
        let f = Ln(c.path, d);
        if (f.length === 0) {
          let p = c.path.find((g) => typeof g === "string"), h = d.filter((g) => {
            var A;
            return ((A = D.FLAT_KEY_TO_NESTED_PATH.get(g)) !== null && A !== void 0 ? A : [g])[0] === p;
          });
          f = h.length > 0 ? h : d;
        }
        for (let p of f) n.push({ key: p, kind: "refused", severity: "error", msg: c.message });
        return f;
      }));
      if (l.size === 0) break;
      for (let c of l) if (delete s[c], "failClosedValue" in D.getFieldMeta(c)) r.push(c);
    }
    return {};
  }
  function Bs(t, r) {
    var n, o, i, s;
    let a = [], u = (d, l, c) => {
      let f = Tn.firstCredentialHeader(l);
      if (f !== void 0) a.push({ key: d, kind: "credential-header", severity: r ? "error" : "warn", msg: `header "${f}" looks like a credential; use the helper script so the secret isn't stored in the configuration`, header: c === void 0 ? { name: f } : { name: f, serverName: c } });
    };
    u("inferenceCustomHeaders", (n = t.inference) === null || n === void 0 ? void 0 : n.customHeaders), u("otlpHeaders", (o = t.otlp) === null || o === void 0 ? void 0 : o.headers);
    for (let d of (s = (i = t.mcp) === null || i === void 0 ? void 0 : i.managedServers) !== null && s !== void 0 ? s : []) if (d && typeof d === "object" && "headers" in d) u("managedMcpServers", d.headers, d.name);
    return a;
  }
  var Rn = "https://accounts.google.com", Hs = /^GOCSPX-[A-Za-z0-9_-]{20,}$/;
  function xs(t) {
    var r, n;
    let o = [];
    for (let i of (n = (r = t.mcp) === null || r === void 0 ? void 0 : r.managedServers) !== null && n !== void 0 ? n : []) {
      let s = i && typeof i === "object" && "oauth" in i ? i.oauth : void 0;
      if (!s || typeof s !== "object") continue;
      let a = s, u = a.clientSecret;
      if (typeof u !== "string") continue;
      let d = a.authorizationServer, c = !(Array.isArray(d) && d.length === 1 && d[0] === Rn && a.tenantId === void 0 && a.authorizationUrl === void 0 && a.tokenUrl === void 0) ? "provider" : !Hs.test(u) ? "shape" : void 0;
      if (c === void 0) continue;
      o.push({ key: "managedMcpServers", kind: "client-secret", severity: "error", msg: c === "provider" ? `server "${i.name}": a client secret is stored only for a Google OAuth client (oauth.authorizationServer exactly ["${Rn}"], no tenantId, authorizationUrl or tokenUrl); for any other identity provider use oauth.clientSecretHelper` : `server "${i.name}": oauth.clientSecret must be a Google Desktop-app OAuth client secret (GOCSPX-\u2026); for any other client secret use oauth.clientSecretHelper`, clientSecret: { serverName: i.name, reason: c } });
    }
    return o;
  }
  var Gs = [["inference", "baseUrl"], ["workspace", "userContentRendererUrl"]];
  function qs(t) {
    let r = [];
    for (let n of Gs) {
      let o = t;
      for (let i of n) o = o && typeof o === "object" ? o[i] : void 0;
      if (typeof o === "string" && Ct.hasQueryOrFragment(o)) r.push(n);
    }
    return r;
  }
  function Zs(t, r = (n) => n.msg) {
    var n, o;
    let i = {};
    for (let s of t) (n = i[o = s.key]) !== null && n !== void 0 || (i[o] = r(s));
    return i;
  }
});
var kn = (0, import_chunk_w1d7ygsk.V)(function(Fn) {
  Object.defineProperty(Fn, "__esModule", { value: true });
  Fn.readHybridStoredConfig = Ws;
  var Lt = Mn();
  function Ws(t, r = "desktop") {
    var n;
    let o = Lt.evaluateConfig(t, { channel: "hybrid", editor: true, reader: r }), i = {};
    for (let s of o.issues) if (Lt.DEVICE_DROP_KINDS.has(s.kind) && s.severity === "error") i[s.key] = i[s.key] === void 0 ? s.msg : `${i[s.key]}; ${s.msg}`;
    return { config: (n = o.hosted) !== null && n !== void 0 ? n : {}, errors: i, failClosed: o.failClosed };
  }
});
var xn = (0, import_chunk_w1d7ygsk.V)(function(Bn) {
  Object.defineProperty(Bn, "__esModule", { value: true });
  Bn.STORED_HEADER_VALUE_PLACEHOLDER = Bn._test = void 0;
  Bn.preserveUnreadNames = ea;
  Bn.withoutFormerNames = ta;
  Bn.withoutNames = ra;
  Bn.withoutNulledNames = na;
  var k = (0, import_chunk_mmevw7ty.Vk)(), le = (0, import_chunk_8xs3r4c8.wlt)(), wn = (0, import_chunk_8xs3r4c8.YEo)(), oe = (0, import_chunk_8xs3r4c8.ILe)(), G = (0, import_chunk_mmevw7ty.Zvt)(), Xs = /* @__PURE__ */ new Set([...le.CLUSTER_NAMES, ...oe.allKeys, ...oe.allKeys.flatMap((t) => {
    let r = oe.getFieldMeta(t).legacyFlatKey;
    return r ? [r.name] : [];
  }), ...oe.RETIRED_FLAT_KEYS, ...wn.CONFIG_DOCUMENT_META_NAMES, "expiresAt"]), Qs = new Set(oe.FORMER_NESTED_PATHS.map((t) => t.join("."))), ar = (t) => t.reduce((r, n) => G.memberPath(r, n), "");
  function jt(t, r, n) {
    if (!t) return;
    if (G.isPlainObject(n) && Object.keys(n).length > 0) {
      for (let [o, i] of Object.entries(n)) if (i !== void 0) jt(t, [...r, o], i);
      return;
    }
    t(ar(r), n);
  }
  function ea(t, r, n, o) {
    return Kn(t, r, { former: Qs, onKept: n, onDropped: o });
  }
  function Kn(t, r, n) {
    var o;
    if (!G.isPlainObject(t)) return r;
    let i = { ...r };
    for (let [s, a] of Object.entries(t)) {
      if (a === void 0) continue;
      if (n.former.has(s)) {
        jt(n.onDropped, [s], a);
        continue;
      }
      let u = Object.hasOwn(le.CLUSTER_REGISTRY, s) ? le.CLUSTER_REGISTRY[s] : void 0;
      if (u) {
        let d = ir(u.schema, a, i[s], [s], n);
        if (d !== void 0) Ee(i, s, d);
      } else if (!Xs.has(s) && !Object.hasOwn(i, s)) Ee(i, s, a), (o = n.onKept) === null || o === void 0 || o.call(n, ar([s]), a);
    }
    return i;
  }
  var Un = (t) => {
    var r;
    return k.fieldMetaForNode(t) !== void 0 || ((r = k.subfieldMetaForNode(t)) === null || r === void 0 ? void 0 : r.flatKey) !== void 0;
  };
  function ir(t, r, n, o, i) {
    var s;
    if (!G.isPlainObject(r) || n !== void 0 && !G.isPlainObject(n)) return n;
    let a = k.unwrapZod(t), u = k.zodKind(a);
    if (u === k.ZodKind.ZodDiscriminatedUnion) {
      let c = k.discriminatorKeyOf(a);
      if (n === void 0 || c === void 0 || r[c] !== n[c]) return n;
      let f = k.discriminatorArmsOf(a).find((p) => p.id === n[c]);
      return (f === null || f === void 0 ? void 0 : f.schema) ? ir(f.schema, r, n, o, i) : n;
    }
    if (u !== k.ZodKind.ZodObject) return n;
    let d = a.shape, l = { ...n };
    for (let [c, f] of Object.entries(r)) {
      let p = [...o, c];
      if (f === void 0) continue;
      if (i.former.has(p.join("."))) {
        jt(i.onDropped, p, f);
        continue;
      }
      let h = Object.hasOwn(d, c) ? d[c] : void 0;
      if (h === void 0) {
        if (!Object.hasOwn(l, c)) Ee(l, c, f), (s = i.onKept) === null || s === void 0 || s.call(i, ar(p), f);
      } else if (!Un(h)) {
        let g = ir(h, f, Object.hasOwn(l, c) ? l[c] : void 0, p, i);
        if (g !== void 0) Ee(l, c, g);
      }
    }
    return n === void 0 && Object.keys(l).length === 0 ? void 0 : l;
  }
  function Ee(t, r, n) {
    Object.defineProperty(t, r, { value: n, enumerable: true, writable: true, configurable: true });
  }
  function ta(t, r) {
    return ur(t, oe.FORMER_NESTED_PATHS, r);
  }
  function ra(t, r) {
    return ur(t, r);
  }
  function ur(t, r, n) {
    let o = t;
    for (let i of r) if (o = Vn(o, i, n, []), o === void 0) return;
    return o;
  }
  function Vn(t, r, n, o) {
    let [i, ...s] = r;
    if (i === void 0 || !Object.hasOwn(t, i)) return t;
    let a;
    if (s.length > 0) {
      let d = t[i];
      if (!G.isPlainObject(d)) return t;
      if (a = Vn(d, s, n, [...o, i]), a === d) return t;
    } else jt(n, [...o, i], t[i]);
    let u = {};
    for (let [d, l] of Object.entries(t)) if (d !== i) Ee(u, d, l);
    else if (a !== void 0) Ee(u, d, a);
    return Object.keys(u).length === 0 ? void 0 : u;
  }
  function na(t, r) {
    if (!G.isPlainObject(t)) return;
    let n = { ...t };
    if (!G.isPlainObject(r)) return n;
    for (let [o, i] of Object.entries(r)) {
      if (!Object.hasOwn(n, o)) continue;
      if (i === null) {
        delete n[o];
        continue;
      }
      let s = Object.hasOwn(le.CLUSTER_REGISTRY, o) ? le.CLUSTER_REGISTRY[o] : void 0, a = s && sr(s.schema, n[o], i);
      if (a) Ee(n, o, a);
    }
    return n;
  }
  function sr(t, r, n) {
    let o = G.coerceJsonString(n);
    if (!G.isPlainObject(r) || !G.isPlainObject(o)) return;
    let i = k.unwrapZod(t), s = k.zodKind(i);
    if (s === k.ZodKind.ZodDiscriminatedUnion) {
      let d = k.discriminatorKeyOf(i), l = d === void 0 ? void 0 : k.discriminatorArmsOf(i).find((c) => c.id === r[d]);
      return (l === null || l === void 0 ? void 0 : l.schema) ? sr(l.schema, r, o) : void 0;
    }
    if (s !== k.ZodKind.ZodObject) return;
    let a = i.shape, u = { ...r };
    for (let [d, l] of Object.entries(o)) {
      if (!Object.hasOwn(u, d)) continue;
      if (l === null) {
        delete u[d];
        continue;
      }
      let c = Object.hasOwn(a, d) ? a[d] : void 0, f = c && !Un(c) && sr(c, u[d], l);
      if (f) Ee(u, d, f);
    }
    return u;
  }
  Bn._test = { withoutFormerNamesAt: (t) => (r) => ur(r, t), preserveUnreadNamesWithFormer: (t) => (r, n, o, i) => Kn(r, n, { former: t, onKept: o, onDropped: i }) };
  Bn.STORED_HEADER_VALUE_PLACEHOLDER = "[stored on server - enter a new value to replace]";
});
var RGi = (0, import_chunk_w1d7ygsk.V)(function(zn) {
  Object.defineProperty(zn, "__esModule", { value: true });
  zn.gatewayOverlayDropChecks = da;
  zn.gatewayRefusedPathPrefixes = Zn;
  zn.gatewayServableKeys = $n;
  var X = (0, import_chunk_mmevw7ty.Vk)(), Gn = (0, import_chunk_mmevw7ty.Sun)(), he = (0, import_chunk_mmevw7ty.ZYe)(), qn = (0, import_chunk_mmevw7ty.Zvt)();
  function da(t = { includeInternal: false }) {
    let r = {};
    for (let n of $n(t)) {
      let o = he.getFieldMeta(n).checkDropped;
      if (o) r[n] = (i, s) => o(qn.coerceJsonString(i), s);
    }
    return r;
  }
  function Zn() {
    let t = /* @__PURE__ */ new Set(), r = (n, o) => {
      if (X.isNotGatewayServable(n)) {
        t.add(o.join("."));
        return;
      }
      let i = X.unwrapZod(n), s = X.zodKind(i);
      if (s === X.ZodKind.ZodObject) for (let [a, u] of Object.entries(i.shape)) r(u, [...o, a]);
      else if (s === X.ZodKind.ZodUnion || s === X.ZodKind.ZodDiscriminatedUnion) for (let a of X.unionOptionsOf(i)) r(a, o);
    };
    return r(Gn.ManagedConfig, []), [...t];
  }
  function $n(t) {
    let r = Zn(), n = (o) => r.some((i) => o === i || o.startsWith(`${i}.`));
    return he.bootstrapableKeys(t).filter((o) => {
      var i;
      if (!X.isReleasedFor3p(he.getFieldMeta(o))) return false;
      let s = (i = he.FLAT_KEY_TO_NESTED_PATH.get(o)) === null || i === void 0 ? void 0 : i.join(".");
      return s !== void 0 && !n(s);
    });
  }
});
var Xn = (0, import_chunk_w1d7ygsk.V)(function(Jn) {
  Object.defineProperty(Jn, "__esModule", { value: true });
  Jn.asksForExecutionTarget = pa;
  Jn.asksForThirdPartyMode = ba;
  Jn.holdCluster = ma;
  Jn.mergeTiers = ya;
  Jn.materializeRaw = ga;
  var Ve = (0, import_chunk_mmevw7ty.Vk)(), te = (0, import_chunk_mmevw7ty.T4)(), Q = (0, import_chunk_8xs3r4c8.wlt)(), P = (0, import_chunk_8xs3r4c8.ILe)(), dr = (t) => Object.keys(t), lr = (t) => {
    var r, n;
    return new Set(Object.values((n = (r = Q.CLUSTER_REGISTRY[t]) === null || r === void 0 ? void 0 : r.propMap) !== null && n !== void 0 ? n : {}));
  };
  function Yn(t, r, n, o) {
    var i, s;
    let a, u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), l = (p) => {
      var h;
      let g = d.get(p);
      if (g === void 0) g = n !== void 0 && ((h = Q.CLUSTER_REGISTRY[p]) === null || h === void 0 ? void 0 : h.unflatten(n)) !== void 0, d.set(p, g);
      return g;
    }, c = (p) => o === void 0 || p.platformVariant === void 0 || p.platformVariant.platform === o, f = (p) => Ve.offDeviceExecutionTargets().find((h) => lr(h).has(p) && l(h));
    for (let p of t) {
      if (Ve.intakeReportKeepsValue(p)) continue;
      a !== null && a !== void 0 || (a = new Set(P.flatConfigKeys(r)));
      let h = a.has(p.key) ? P.tryGetFieldMeta(p.key) : void 0, g = (i = h === null || h === void 0 ? void 0 : h.support.executionTarget) !== null && i !== void 0 ? i : h === void 0 || !c(h) ? void 0 : f(p.key);
      if (h === void 0 || g === void 0 || g === "desktop") continue;
      let A = (s = u.get(g)) !== null && s !== void 0 ? s : { scopes: /* @__PURE__ */ new Set(), reports: [] };
      for (let I of P.enabledScopes(h)) A.scopes.add(I);
      A.reports.push(p), u.set(g, A);
    }
    return u;
  }
  function pa(t, r, n, o) {
    return Yn(t, r, n, o).size > 0;
  }
  function cr(t, r) {
    var n, o;
    for (let i of r) (n = (o = t)[i]) !== null && n !== void 0 || (o[i] = {});
    return t;
  }
  function Wn(t, r, n) {
    let o = /* @__PURE__ */ new Set();
    for (let s of t) if (!Ve.intakeReportKeepsValue(s)) o.add(s.key);
    if (o.size === 0) return [];
    let i = Q.unflattenAll(n);
    return P.flatConfigKeys(r).filter((s) => {
      var a, u;
      return o.has(s) && n[s] === void 0 && ((u = (a = P.getFieldMeta(s)).activatesThirdPartyMode) === null || u === void 0 ? void 0 : u.call(a, i, true)) === true;
    });
  }
  function ba(t, r, n = {}) {
    return Wn(t, r, n).length > 0;
  }
  function ma(t, r, n) {
    t[n] = r[n];
    let o = lr(n);
    return te.withUnreadableActivators(t, [...te.unreadableActivators(t).filter((i) => !o.has(i)), ...te.unreadableActivators(r).filter((i) => o.has(i))]);
  }
  function ya(t, r, n, o) {
    var i, s, a;
    let { keyEnumOpts: u, resolveMode: d, platform: l, bootstrapFallback: c, stoodIn: f, dropped: p, staticTierIsDevicePolicy: h, onWarn: g } = o, A = {}, I = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Map(), j = (v, q, Le = dr(q)) => {
      var $t;
      for (let Ce of Le) {
        if (q[Ce] === void 0) continue;
        if (A[Ce] = q[Ce], C.set(Ce, v), ($t = f === null || f === void 0 ? void 0 : f[v]) === null || $t === void 0 ? void 0 : $t.has(Ce)) I.add(Ce);
        else I.delete(Ce);
      }
    };
    if (r) j("remoteTier", r), j("staticTier", t, P.nonBootstrapableKeys(u));
    else j("staticTier", t);
    let B = Yn((i = r ? p === null || p === void 0 ? void 0 : p.remoteTier : p === null || p === void 0 ? void 0 : p.staticTier) !== null && i !== void 0 ? i : [], u, r !== null && r !== void 0 ? r : t, l), w = new Set([...B.keys()].flatMap((v) => [...lr(v)]));
    for (let v of dr(A)) {
      let q = (s = P.tryGetFieldMeta(v)) === null || s === void 0 ? void 0 : s.support.executionTarget;
      if (q !== void 0 && B.has(q) || w.has(v)) delete A[v], C.delete(v), I.delete(v);
    }
    let T = [], H = P.appBehaviorMdmKeys(u);
    if (n !== void 0) {
      for (let v of H) {
        if (A[v] !== void 0) {
          if (T.push(v), n[v] === void 0) g === null || g === void 0 || g(`${v} from the local or server configuration is ignored: a device-management profile sets app-behavior keys (${dr(n).join(", ") || "none readable"}), and those keys are read from that profile as a group. Add ${v} to the profile.`);
        }
        delete A[v], I.delete(v), C.delete(v);
      }
      j("managedOverlay", n);
    }
    let x = h ? Wn((a = p === null || p === void 0 ? void 0 : p.staticTier) !== null && a !== void 0 ? a : [], u, A).filter((v) => r === void 0 || !P.isBootstrapable(v)) : [], be = te.withUnreadableActivators(cr(Q.unflattenAll(A), B.keys()), x), _ = d(be), z = _ === "3p" && c !== void 0, Ie = z && r === void 0, Je = Ie;
    if (Ie && typeof c === "object") for (let [v, q] of Object.entries(c.applied)) {
      if (n !== void 0 && H.has(v)) continue;
      A[v] = q, I.add(v), C.set(v, "remoteTier");
    }
    let Xe = l ? P.applyPlatformVariants(A, l) : A, Dr = { mode: _, stoodIn: I };
    if (g) for (let v of P.configurationWarnings(Xe, Dr)) g(v);
    let ae = P.enforceConfigurationValues(Xe, Dr);
    P.dropNonAnthropicModels(ae, (v, q) => g === null || g === void 0 ? void 0 : g(P.droppedModelMessage(v, q)), g);
    for (let v of P.flatConfigKeys(u)) if (ae[v] !== void 0 && !P.enabledScopes(P.getFieldMeta(v)).includes(_)) delete ae[v];
    for (let v of I) if (ae[v] === void 0 || ae[v] !== A[v]) I.delete(v);
    for (let v of C.keys()) if (ae[v] === void 0) C.delete(v);
    if (l) for (let [v, q] of P.platformVariantKeys(l)) {
      let Le = C.get(v);
      if (Le !== void 0 && P.isFieldSet(ae[v])) if (C.set(q, Le), I.has(v)) I.add(q);
      else I.delete(q);
    }
    let Lr = /* @__PURE__ */ new Set();
    if (Ie) {
      for (let [v, q] of C) if (q === "staticTier" && P.isBootstrapable(v)) Lr.add(v);
    }
    if (z) {
      let v = P.remotePolicyDefaults(u);
      for (let [q, Le] of Object.entries(v)) if (ae[q] === void 0) ae[q] = Le;
    }
    P.materializeDefaults(ae, u);
    let Qo = [...B].flatMap(([v, { scopes: q }]) => q.has(_) ? [v] : []);
    return { config: te.withUnreadableActivators(cr(Q.unflattenAll(ae), Qo), x.filter((v) => P.enabledScopes(P.getFieldMeta(v)).includes(_))), raw: be, stoodIn: I, groupClaimed: T, tierOf: C, pendingServed: Lr, awaitingFirstServedBody: Je, refused: [...B.values()].flatMap((v) => v.reports) };
  }
  function ga(t, r) {
    return te.withUnreadableActivators(cr(Q.unflattenAll(P.materializeDefaults(Q.flattenAll(t), r)), Q.CLUSTER_NAMES.filter((n) => t[n] !== void 0)), te.unreadableActivators(t));
  }
});
var lo = (0, import_chunk_w1d7ygsk.V)(function(uo) {
  Object.defineProperty(uo, "__esModule", { value: true });
  uo._test = uo.VALUE_VERSIONS = uo.VALUE_OVERRIDES = uo.OVERRIDE = uo.VALUE_STAMPS = uo.STAMP = void 0;
  uo.walkMembers = xe;
  uo.resolveMemberVersions = Aa;
  uo.compactMemberVersions = Ta;
  uo.expandMemberVersions = io;
  uo.memberSites = so;
  uo.publishedMemberStamps = Ia;
  uo.settleStamp = ao;
  uo.reconcileMemberStamps = Ca;
  uo.STAMP = "x-availableInVersion";
  uo.VALUE_STAMPS = "x-valueAvailableInVersion";
  uo.OVERRIDE = "x-availableInVersionOverride";
  uo.VALUE_OVERRIDES = "x-valueAvailableInVersionOverride";
  uo.VALUE_VERSIONS = "__valueVersions";
  var Sa = /* @__PURE__ */ new Set(["default", "const", "enum", "examples", "required"]), _e = (t) => t !== null && typeof t === "object" && !Array.isArray(t), ro = (t) => _e(t.not) && Object.keys(t.not).length === 0, He = (t) => Array.isArray(t.enum) ? t.enum : "const" in t ? [t.const] : null, Ft = (t) => Array.isArray(t[uo.VALUE_STAMPS]) ? t[uo.VALUE_STAMPS] : [], no = (t) => Array.isArray(t[uo.VALUE_OVERRIDES]) ? t[uo.VALUE_OVERRIDES] : [], oo = (t, r) => `${t}=${JSON.stringify(r)}`, Nt = (t) => typeof t["x-flatKey"] === "string", Qn = "@next", eo = (t) => t.split(".").map((r) => Number.isFinite(Number(r)) ? Number(r) : 0), pr = (t, r) => {
    var n, o;
    if (t === r || r === Qn) return false;
    if (t === Qn) return true;
    let i = eo(t), s = eo(r);
    for (let a = 0; a < Math.max(i.length, s.length); a++) {
      let u = ((n = i[a]) !== null && n !== void 0 ? n : 0) - ((o = s[a]) !== null && o !== void 0 ? o : 0);
      if (u !== 0) return u > 0;
    }
    return false;
  }, br = (t, r) => typeof t !== "string" ? r : r !== void 0 && !pr(t, r) ? r : t, mr = (t, r) => Nt(t) && typeof t[uo.STAMP] === "string" ? t[uo.STAMP] : br(t[uo.STAMP], r), Pa = (t) => t === "additionalProperties" ? ["*"] : t === "items" ? [] : [t], Ra = (t) => {
    if (!_e(t) || !_e(t.properties)) return [];
    let r = Object.entries(t.properties).flatMap(([n, o]) => {
      let i = _e(o) ? He(o) : null;
      return (i === null || i === void 0 ? void 0 : i.length) === 1 ? [`${n}=${JSON.stringify(i[0])}`] : [];
    }).sort();
    return r.length > 0 ? [`[${r.join("&")}]`] : [];
  };
  function xe(t, r, n) {
    let o = (i, s, a, u, d) => {
      if (!_e(i)) return;
      let l = s === null ? d : n({ id: `${s}|${a.join(".")}`, node: i, isProperty: u }, d);
      for (let [c, f] of Object.entries(i)) {
        if (Sa.has(c) || c.startsWith("x-")) continue;
        if (c === "properties") for (let [p, h] of Object.entries(_e(f) ? f : {})) {
          if (!_e(h) || ro(h)) continue;
          let g = h["x-flatKey"];
          if (typeof g === "string") o(h, g, [], true, l);
          else o(h, s, [...a, p], true, l);
        }
        else if (c === "anyOf" || c === "oneOf") for (let p of Array.isArray(f) ? f : []) o(p, s, [...a, ...Ra(p)], false, l);
        else if (_e(f)) o(f, s, [...a, ...Pa(c)], false, l);
      }
    };
    o(t, null, [], false, r);
  }
  function Aa(t) {
    xe(t, {}, ({ node: r, isProperty: n }, { version: o, values: i }) => {
      let s = mr(r, o);
      if (n && s !== void 0) r[uo.STAMP] = s;
      let a = r[uo.VALUE_VERSIONS];
      delete r[uo.VALUE_VERSIONS];
      let u = a !== null && a !== void 0 ? a : i, d = He(r);
      if (d && s !== void 0) r[uo.VALUE_STAMPS] = d.map((l) => {
        var c;
        return { value: l, availableInVersion: br(typeof l === "string" ? (c = u === null || u === void 0 ? void 0 : u[l]) === null || c === void 0 ? void 0 : c.availableInVersion : void 0, s) };
      });
      return { version: s, values: u };
    });
  }
  var to = (t, r, n) => {
    if (delete t[r], n !== void 0) t[r] = n;
  };
  function Ta(t) {
    io(t), xe(t, void 0, ({ node: r, isProperty: n }, o) => {
      let i = mr(r, o);
      if (!Nt(r)) delete r[uo.STAMP], to(r, uo.OVERRIDE, n && i !== o ? i : void 0);
      let s = He(r);
      if (s) {
        let a = Ft(r).filter((u) => s.includes(u.value) && (i === void 0 || pr(u.availableInVersion, i)));
        delete r[uo.VALUE_STAMPS], to(r, uo.VALUE_OVERRIDES, a.length > 0 ? a : void 0);
      }
      return i;
    });
  }
  function io(t) {
    xe(t, void 0, ({ node: r, isProperty: n }, o) => {
      let i = r[uo.OVERRIDE];
      if (delete r[uo.OVERRIDE], typeof i === "string" && !Nt(r)) r[uo.STAMP] = i;
      let s = mr(r, o);
      if (n && !Nt(r) && s !== void 0) r[uo.STAMP] = s;
      let a = no(r), u = uo.VALUE_OVERRIDES in r;
      delete r[uo.VALUE_OVERRIDES];
      let d = He(r);
      if (d && s !== void 0 && (u || r[uo.VALUE_STAMPS] === void 0)) r[uo.VALUE_STAMPS] = d.map((l) => {
        var c;
        return { value: l, availableInVersion: br((c = a.find((f) => f.value === l)) === null || c === void 0 ? void 0 : c.availableInVersion, s) };
      });
      return s;
    });
  }
  function so(t) {
    let r = [];
    return xe(t, void 0, (n) => {
      r.push(n);
      return;
    }), r;
  }
  function Ia(t) {
    let r = /* @__PURE__ */ new Map(), n = (o, i) => {
      if (typeof i !== "string") return;
      let s = r.get(o);
      r.set(o, s === void 0 || s === i ? i : null);
    };
    for (let { id: o, node: i, isProperty: s } of so(t)) {
      if (s) n(o, i[uo.STAMP]);
      for (let a of Ft(i)) n(oo(o, a.value), a.availableInVersion);
    }
    return r;
  }
  function ao(t, r, n, o) {
    var i;
    if (t === void 0) return typeof r === "string" ? r : (i = r === null ? o : void 0) !== null && i !== void 0 ? i : n;
    if (t === n && typeof r === "string" && pr(n, r)) return r;
    return typeof t === "string" ? t : void 0;
  }
  function Ca(t, r, n) {
    let o = [], i = (s, a, u) => {
      let d = ao(a, r.get(s), n, u);
      if (a === n && d !== a) o.push(`${s} (v${String(d)}, not v${n})`);
      return d;
    };
    return xe(t, void 0, ({ id: s, node: a, isProperty: u }, d) => {
      var l;
      if (u) a[uo.STAMP] = (l = i(s, a[uo.STAMP], d)) !== null && l !== void 0 ? l : a[uo.STAMP];
      let c = a[uo.STAMP], f = typeof c === "string" ? c : d, p = He(a);
      if (p) {
        let h = Ft(a);
        a[uo.VALUE_STAMPS] = p.flatMap((g) => {
          var A;
          let I = i(oo(s, g), (A = h.find((C) => C.value === g)) === null || A === void 0 ? void 0 : A.availableInVersion, f);
          return I === void 0 ? [] : [{ value: g, availableInVersion: I }];
        });
      }
      return f;
    }), o;
  }
  uo._test = { isNeverGuard: ro, membersOf: He, valueStampsOf: Ft, valueOverridesOf: no };
});
var Mo = (0, import_chunk_w1d7ygsk.V)(function(Lo) {
  Object.defineProperty(Lo, "__esModule", { value: true });
  Lo._test = Lo.BOOTSTRAP_RESPONSE_ENVELOPE = Lo.bootstrapJsonSchemaId = Lo.BOOTSTRAP_SCHEMA_VERSIONS = void 0;
  Lo.bootstrapSchemaKeys = gr;
  Lo.publishedKeys = Or;
  Lo.availabilityOf = Er;
  Lo.availableInVersionOf = mo;
  Lo.executionTargetPublished = yo;
  Lo.executionTargetAxisPublished = hr;
  Lo.executionTargetOf = go;
  Lo.adminFacts = Oo;
  Lo.docsDeprecationsOf = Eo;
  Lo.renderHint = Kt;
  Lo.buildBootstrapJsonSchema = Do;
  Lo.buildFlatBootstrapJsonSchema = za;
  Lo.buildStructuralSnapshot = Ya;
  var ie = require("/$bunfs/root/chunk-wt3z1zqs.js"), S = (0, import_chunk_mmevw7ty.Vk)(), wt = (0, import_chunk_8xs3r4c8.wlt)(), Ge = (0, import_chunk_mmevw7ty.vj)(), W = lo(), M = (0, import_chunk_8xs3r4c8.ILe)(), fo = Wt(), po = Jt(), bo = et();
  Lo.BOOTSTRAP_SCHEMA_VERSIONS = [1, 2];
  function gr({ reader: t = "desktop" } = {}) {
    return M.bootstrapableKeys({ includeInternal: false, reader: t }).filter((r) => {
      let n = M.getFieldMeta(r);
      return S.effectiveVisibility(n) === "public" && Er(n) !== "hybrid-only" && !S.isUnreleasedVersion(S.min3pAvailableInVersion(n.support.enabled));
    });
  }
  function Or() {
    return M.flatConfigKeys({ includeInternal: false }).filter((t) => M.isPublished3pKey(M.getFieldMeta(t)));
  }
  function Er(t) {
    var r, n, o;
    if (((n = (r = t.remotePolicy) === null || r === void 0 ? void 0 : r.hybrid) === null || n === void 0 ? void 0 : n.scope) === "only") return "hybrid-only";
    if (S.isRemoteOnly(t)) return "bootstrap-only";
    if (((o = t.remotePolicy) === null || o === void 0 ? void 0 : o.type) === "remote-disabled") return "mdm-only";
    return "both";
  }
  function mo(t) {
    for (let r of [t.support.enabled, t.support.deprecated]) {
      let n = r === void 0 ? [] : Array.isArray(r) ? r : [r];
      if (n.some((o) => o.scopes.includes("3p"))) return S.min3pAvailableInVersion(n);
    }
    return null;
  }
  function yo(t) {
    for (let r of t) {
      let n = r.support.executionTarget;
      if (n !== void 0 && n !== "desktop") return true;
    }
    return false;
  }
  var kt;
  function hr() {
    return kt !== null && kt !== void 0 ? kt : kt = yo(Or().map(M.getFieldMeta));
  }
  function go(t) {
    return hr() ? t.support.executionTarget : void 0;
  }
  function Oo(t) {
    var r, n, o, i;
    let s = Eo(t);
    return { availableInVersion: mo(t), availability: Er(t), deprecated: M.deprecatedScopes(t).includes("3p"), beta: t.betaFeatureKey !== void 0, consentRequired: ((r = t.remotePolicy) === null || r === void 0 ? void 0 : r.requiresUserConsent) === true, originPinned: (i = (o = (n = t.remotePolicy) === null || n === void 0 ? void 0 : n.originPinned) === null || o === void 0 ? void 0 : o.carries) !== null && i !== void 0 ? i : false, ...t.legacyFlatKey ? { legacyFlatKey: t.legacyFlatKey.name } : {}, ...s.length > 0 ? { deprecations: s } : {} };
  }
  function Eo(t) {
    var r;
    let n = ({ match: i, rewrite: s, editorPreserves: a, ...u }) => u, o = t.flatKey !== void 0 ? M.legacyNameNotice(t.flatKey, t) : void 0;
    return [...o ? [n(o)] : [], ...((r = t.deprecations) !== null && r !== void 0 ? r : []).map(n)];
  }
  var Ka = (t) => `https://claude.com/docs/cowork/3p/schemas/bootstrap-config-v${t}.schema.json`;
  Lo.bootstrapJsonSchemaId = Ka;
  function yr(t) {
    if (t === null || typeof t !== "object") return;
    if (Array.isArray(t)) {
      for (let n of t) yr(n);
      return;
    }
    let r = t;
    if (r.additionalProperties === false) delete r.additionalProperties;
    for (let n of Object.values(r)) yr(n);
  }
  Lo.BOOTSTRAP_RESPONSE_ENVELOPE = { $schemaVersion: { node: ie.z.literal(2).optional(), hint: "Wire-format marker: `2` for the nested format (bootstrap-config-v2, what the app's own JSON export writes), `1` for the flat format (bootstrap-config-v1). Optional: the client infers the format from the document shape; set it to state the format explicitly.", helpBody: "Omitted \u2192 the client infers the version from the document shape (any cluster key present \u2192 2, otherwise 1)." }, expiresAt: { node: ie.z.number().positive().optional(), hint: "Unix epoch (seconds or milliseconds) after which the client should re-fetch this document. Optional; when absent the client uses its default refresh interval.", helpBody: `Omitted \u2192 cache for 1 hour. A number \u2265 10\xB9\xB2 is read as Unix epoch **milliseconds**; below that, **seconds**.

A failed re-fetch keeps the last good response from the current session and retries; the app only enters the degraded state when there has never been a usable response this session.` } };
  var Ua = { 1: "Marks the flat format. Optional: a response with no cluster key is read as flat regardless; set it to state the format explicitly.", 2: "Marks the nested format. Optional: a response carrying any cluster key is read as nested regardless; set it to state the format explicitly." };
  function ho(t) {
    return Object.fromEntries(Object.entries(Lo.BOOTSTRAP_RESPONSE_ENVELOPE).map(([r, n]) => [r, r === "$schemaVersion" ? ie.z.literal(t).optional().describe(Ua[t]) : n.node.describe(n.hint)]));
  }
  function _o(t, r, n) {
    var o;
    let i = {}, s = (a) => {
      var u, d;
      let l = (u = S.fieldMetaForNode(a)) === null || u === void 0 ? void 0 : u.flatKey;
      return l !== void 0 && n.has(l) && ((d = M.FLAT_KEY_TO_NESTED_PATH.get(l)) === null || d === void 0 ? void 0 : d[0]) === t;
    };
    for (let [a, u] of Object.entries(r.shape)) {
      let d = u, l = (o = S.fieldMetaForNode(d)) === null || o === void 0 ? void 0 : o.flatKey;
      if (l !== void 0) {
        if (n.has(l)) i[a] = d;
        continue;
      }
      let c = S.unwrapZod(d);
      if (S.zodKind(c) === S.ZodKind.ZodObject) {
        let f = _o(t, c, n);
        if (f) i[a] = f;
      } else if (S.zodKind(c) === S.ZodKind.ZodDiscriminatedUnion && S.unionOptionsOf(c).some((f) => Object.values(f.shape).some((p) => s(p)))) i[a] = d;
    }
    return Object.keys(i).length > 0 ? ie.z.object(i).optional() : void 0;
  }
  function vo(t) {
    var r;
    let n = ho(2);
    for (let [o, i] of Object.entries(M.ManagedConfig.shape)) {
      let s = i, a = S.fieldMetaForNode(s);
      if (a) {
        if (t.has(a.flatKey)) n[o] = s;
        continue;
      }
      if ((r = wt.CLUSTER_REGISTRY[o]) === null || r === void 0 ? void 0 : r.propMap) {
        let u = _o(o, S.unwrapZod(s), t);
        if (u) n[o] = u;
        continue;
      }
      if (o in wt.CLUSTER_REGISTRY) n[o] = s;
    }
    return n;
  }
  function So(t) {
    let r = ho(1);
    for (let n of /* @__PURE__ */ new Set([...Object.keys(M.DISCRIMINATORS), ...Object.keys(M.FlatManagedConfig.shape)])) if (t.has(n)) r[n] = M.FlatManagedConfig.shape[n];
    return r;
  }
  var Va = {};
  function Kt(t, r) {
    let n = t === null || t === void 0 ? void 0 : t.text;
    if (!n) return "";
    return typeof n === "function" ? n(r, Va) : r.formatMessage(n);
  }
  function Ba(t, r, n) {
    var o, i;
    let s = r.title.defaultMessage;
    if (typeof s === "string") t.title = s;
    let a = Kt((o = r.description) === null || o === void 0 ? void 0 : o.short, n);
    if (a) t.description = a;
    let u = S.runtimeDefault(r);
    if (u !== void 0 && t.default === void 0 && t.const === void 0) t.default = u;
    t["x-flatKey"] = r.flatKey;
    let d = Ro(r);
    if (d) t["x-readers"] = d;
    let l = go(r);
    if (l) t["x-executionTarget"] = l;
    if ("failClosedValue" in r) t["x-whenUnreadable"] = r.unreadableStandIn ? { unusable: true } : { applies: r.failClosedValue };
    for (let [c, f] of Object.entries(Oo(r))) t[`x-${c}`] = f;
    t[W.VALUE_VERSIONS] = (i = r.support.values) !== null && i !== void 0 ? i : {};
  }
  function Ha(t, r, n) {
    var o, i, s, a, u;
    let d = r.label.defaultMessage;
    if (typeof d === "string") t.title = d;
    let l = Kt((o = r.description) === null || o === void 0 ? void 0 : o.short, n);
    if (l) t.description = l;
    if (r.default !== void 0 && t.default === void 0) t.default = r.default;
    if (t["x-consentRequired"] = ((i = r.remotePolicy) === null || i === void 0 ? void 0 : i.requiresUserConsent) === true, ((s = r.support) === null || s === void 0 ? void 0 : s.availableInVersion) !== void 0) t[W.STAMP] = r.support.availableInVersion;
    t[W.VALUE_VERSIONS] = (u = (a = r.support) === null || a === void 0 ? void 0 : a.values) !== null && u !== void 0 ? u : {};
  }
  var xa = (() => {
    var t;
    let r = /* @__PURE__ */ new Map();
    for (let [n, o] of M.FLAT_KEY_TO_NESTED_PATH) {
      let i = o.join(".");
      r.set(i, [...(t = r.get(i)) !== null && t !== void 0 ? t : [], n]);
    }
    return new Map([...r].flatMap(([n, o]) => o.length === 1 ? [[n, o[0]]] : []));
  })();
  function Ga(t) {
    let r = [];
    for (let n = 0; n < t.length; n++) if (t[n] === "properties" && typeof t[n + 1] === "string") r.push(t[++n]);
    return r;
  }
  function qa(t, r) {
    var n, o;
    let i = (n = M.FLAT_KEY_TO_NESTED_PATH.get(r)) !== null && n !== void 0 ? n : [r], s = t;
    for (let a of i) if (s = (o = s === null || s === void 0 ? void 0 : s.properties) === null || o === void 0 ? void 0 : o[a], !s) return;
    return s;
  }
  function _r(t, r, n) {
    let o = ie.z.toJSONSchema(ie.z.object(t), { target: "draft-7", io: "input", reused: "inline", override: (s) => {
      var a, u, d, l, c, f;
      let p = s.zodSchema._zod.def;
      if (p.type === "catch") {
        delete s.jsonSchema.default;
        return;
      }
      if (p.type === "array") {
        let g = S.openEnumItemsOf(s.zodSchema);
        if (g) s.jsonSchema.items = g;
        return;
      }
      if (p.type !== "object" || !p.shape) return;
      let h = s.jsonSchema;
      for (let [g, A] of Object.entries(p.shape)) {
        let I = S.fieldMetaForNode(A), C = S.subfieldMetaForNode(A);
        if (!I && C && S.effectiveVisibility(C) !== "public") {
          (a = h.properties) === null || a === void 0 || delete a[g];
          continue;
        }
        let j = (u = h.properties) === null || u === void 0 ? void 0 : u[g];
        if (!j) continue;
        let B = (l = (d = I === null || I === void 0 ? void 0 : I.flatKey) !== null && d !== void 0 ? d : C === null || C === void 0 ? void 0 : C.flatKey) !== null && l !== void 0 ? l : C ? void 0 : xa.get([...Ga(s.path), g].join("."));
        if (B === void 0) {
          if (C) Ha(j, C, n);
          else {
            let w = S.annotationsOf(A).availableInVersion;
            if (w !== void 0) j[W.STAMP] = w;
          }
          continue;
        }
        if (!r.has(B)) {
          (c = h.properties) === null || c === void 0 || delete c[g];
          continue;
        }
        if (Ba(j, I !== null && I !== void 0 ? I : M.getFieldMeta(B), n), !I && C) {
          let w = Ro(C);
          if (w) j["x-readers"] = w;
          else delete j["x-readers"];
          let T = Kt((f = C.description) === null || f === void 0 ? void 0 : f.short, n);
          if (T) j.description = T;
          j["x-alias"] = true;
        }
      }
      bo.setRequiredFromRuntime(p.shape, h);
    } });
    delete o.$schema;
    let i = { $ref: "#/definitions/BootstrapConfig", definitions: { BootstrapConfig: o } };
    return yr(i), fo.admitLegacyCredentialKinds(i.definitions.BootstrapConfig), po.admitLegacyToolPolicyValues(i.definitions.BootstrapConfig), W.resolveMemberVersions(i.definitions.BootstrapConfig), W.compactMemberVersions(i.definitions.BootstrapConfig), i;
  }
  var Po = S.CONFIG_READERS.filter((t) => S.READER_FACTS[t].readsBootstrap);
  function Ro(t) {
    let r = S.readersOf(t).filter((n) => Po.includes(n));
    return S.readersDeclared({ readers: r }) ? r : void 0;
  }
  var Za = `A node marked \`x-readers\` is read by the clients it names (${S.readerLegend(Po)}); an unmarked node is read by Claude Desktop only. The marker is per key; which providers a client supports is that client's own list.`, $a = " A key node marked `x-executionTarget` applies only while the desktop's sessions run on that target (`desktop` = the app runs them on the device; any other value names the cluster that configures that target); an unmarked key applies under every target.", Ao = () => Za + (hr() ? $a : ""), To = `Each key node's \`x-availableInVersion\` is the first Claude Desktop release that reads the key; the app names its version as \`Claude/<version>\` in the User-Agent of the request, so a server can leave out keys the requesting build does not read yet. Below a key, releases are stated by exception: a property node carries \`${W.OVERRIDE}\` only when it is first read by a later release than the node above it, and an \`enum\` or \`const\` node's \`${W.VALUE_OVERRIDES}\` lists \`{value, availableInVersion}\` only for the values first read by a later release than the node. The release from which a location in a document is read is the newest one stated on the path from the root to it: the key's \`${W.STAMP}\`, any override on a property node along the way (array items, map values and union alternatives add no level of their own), the value's own entry, and \u2014 inside a union alternative (a managed MCP server, OAuth, marketplace or inference-provider variant) \u2014 the release stated on that alternative's discriminator property (\`server\`, \`mode\`, \`transport\`, \`source\`, \`provider\`, \u2026): its override, or the entry for its value; the alternative's other properties and any key repeated inside it are read no earlier than that. A node with \`x-legacyFlatKey\` was renamed: builds older than its release may read the setting under that earlier name, whose acceptance dates are in \`x-deprecations\`.`, Io = "Structural reference for editor autocomplete \u2014 the client applies further validation that this schema does not express (https-only and non-loopback URLs, origin-pinning under gateway SSO). Unrecognised keys are ignored.", Co = ' A key node\'s `x-whenUnreadable` says what Claude Desktop does when the key is present but its value is invalid (wrong type, malformed, or no usable entry; `null` and a blank string count as not set): `{"applies": value}` means it applies that value; `{"unusable": true}` means it treats the key as set but unusable (an invalid managed MCP server list keeps plugin-provided servers\' tools blocked rather than allowing them), and a server that mirrors the app should do the same. A key node without it is treated as not set in that case.';
  function Do({ keys: t = gr(), intl: r = Ge.STUB_INTL } = {}) {
    let n = new Set(t), o = _r(vo(n), n, r), i = o.definitions.BootstrapConfig;
    if (i.properties) i.description = `Per-user bootstrap configuration response in the nested format (\`$schemaVersion\` 2): a subset of managed configuration grouped into cluster objects (bootstrapable keys only). ${Io} The flat key names of bootstrap-config-v1 are also accepted at top level beside clusters. ${Ao()}${Co} ${To}`;
    return { $schema: "http://json-schema.org/draft-07/schema#", $id: Lo.bootstrapJsonSchemaId(2), ...o };
  }
  function za({ keys: t = gr(), intl: r = Ge.STUB_INTL } = {}) {
    let n = new Set(t), o = _r(So(n), n, r), i = o.definitions.BootstrapConfig;
    return delete i.required, i.description = `Per-user bootstrap configuration response in the flat format (\`$schemaVersion\` 1): bootstrapable keys by their managed-configuration key names at top level. ${Io} ${Ao()}${Co} ${To}`, { $schema: "http://json-schema.org/draft-07/schema#", $id: Lo.bootstrapJsonSchemaId(1), ...o };
  }
  function Ya(t = Ge.STUB_INTL) {
    return Do({ keys: Or(), intl: t });
  }
  Lo._test = { nestedBootstrapShape: vo, flatBootstrapShape: So, nodeAtNestedPath: qa, emitDocument: _r };
});
var qo = (0, import_chunk_w1d7ygsk.V)(function(Bo) {
  Object.defineProperty(Bo, "__esModule", { value: true });
  Bo._test = Bo.DOCS_GROUPS = Bo.configReferenceUrl = Bo.CONFIG_REFERENCE_URL = Bo.anchorSlug = void 0;
  Bo.typeStringOf = Ze;
  Bo.docsTableRows = Vo;
  Bo.buildConfigReferenceData = bu;
  var pe = Mo(), fe = (0, import_chunk_mmevw7ty.Lwe)(), R = (0, import_chunk_mmevw7ty.Vk)(), ko = (0, import_chunk_mmevw7ty.T4)(), Pe = nt(), Ut = (0, import_chunk_mmevw7ty.vj)(), Se = (0, import_chunk_8xs3r4c8.ILe)(), wo = Pt(), cu = (t) => t.toLowerCase();
  Bo.anchorSlug = cu;
  Bo.CONFIG_REFERENCE_URL = `${ko.COWORK_3P_DOCS_BASE}/configuration`;
  var lu = (t) => Se.isPublished3pKey(t) && R.isReadBy(t, "desktop") ? `${Bo.CONFIG_REFERENCE_URL}#${Bo.anchorSlug(t.flatKey)}` : void 0;
  Bo.configReferenceUrl = lu;
  function Ze(t) {
    let r = R.unwrapZod(t), n = R.zodKind(r);
    if (n === R.ZodKind.ZodBoolean) return "boolean";
    if (n === R.ZodKind.ZodNumber) return R.numberIsInt(r) ? "integer" : "number";
    if (n === R.ZodKind.ZodEnum) return "enum";
    if (n === R.ZodKind.ZodLiteral) {
      let o = R.literalValueOf(r);
      if (typeof o === "boolean") return "boolean";
      if (typeof o === "number") return Number.isInteger(o) ? "integer" : "number";
      return "string";
    }
    if (n === R.ZodKind.ZodArray) {
      let o = Pe.elementOf(t);
      return `${o ? Ze(o) : "unknown"}[]`;
    }
    if (n === R.ZodKind.ZodObject || n === R.ZodKind.ZodRecord) return "object";
    if (n === R.ZodKind.ZodUnion || n === R.ZodKind.ZodDiscriminatedUnion) return R.unionOptionsOf(r).map(Ze).every((s) => s === "string" || s === "enum") ? "string" : "object";
    return "string";
  }
  function Ko(t) {
    return R.findDefaultValue(t);
  }
  function Fo(t, r) {
    let n = R.unwrapZod(t), o = R.numberBoundsOf(n)[r];
    if (!o) return;
    if (!o.inclusive && R.numberIsInt(n)) return r === "min" ? o.value + 1 : o.value - 1;
    return o.value;
  }
  var qe = (t) => `\`${String(t)}\``;
  function Sr(t, r, n = "", o = 0) {
    var i;
    let s = (i = Pe.elementOf(t)) !== null && i !== void 0 ? i : t;
    return R.subFieldsOf(s).flatMap((a) => {
      var u, d, l, c, f, p;
      if (R.effectiveVisibility(a) !== "public") return [];
      let h = n + a.key, g = [], A = (d = (u = a.description) === null || u === void 0 ? void 0 : u.short) === null || d === void 0 ? void 0 : d.text;
      if (A) g.push(r.formatMessage(A));
      let I = a.nonPublicOptions, C = (I === null || I === void 0 ? void 0 : I.length) ? (l = a.options) === null || l === void 0 ? void 0 : l.filter((x) => !I.includes(x)) : a.options;
      if (C === null || C === void 0 ? void 0 : C.length) g.push(`One of: ${C.map(qe).join(", ")}.`);
      let j = (c = a.default) !== null && c !== void 0 ? c : Ko(a.node), B = j === void 0 || typeof j === "object" ? null : String(j), w = (f = a.description) === null || f === void 0 ? void 0 : f.long, T = { name: h, typeString: Ze(a.node), defaultString: B, description: g.join(" "), ...(w === null || w === void 0 ? void 0 : w.text) ? { helpBody: w.text } : {}, ...(w === null || w === void 0 ? void 0 : w.docsUrl) ? { docsUrl: w.docsUrl } : {}, ...(C === null || C === void 0 ? void 0 : C.length) ? { enumValues: C } : {}, ...((p = a.remotePolicy) === null || p === void 0 ? void 0 : p.requiresUserConsent) ? { consentRequired: true } : {}, ...a.betaFeatureKey ? { beta: true } : {} }, H = o < 1 ? Sr(a.node, r, `${h}.`, o + 1) : [];
      return [T, ...H];
    });
  }
  Bo.DOCS_GROUPS = { connection: { inference: { group: "connection", groupLabel: null }, workspace: { group: "connection", groupLabel: null }, dictation: { group: "connection", groupLabel: null }, models: { group: "connection.models", groupLabel: "Models" }, authentication: { group: "connection.authentication", groupLabel: "Authentication" }, gateway: { group: "connection.gateway", groupLabel: "Gateway" }, selfHosted: { group: "connection.selfHosted", groupLabel: "Self-hosted execution" }, anthropic: { group: "connection.anthropic", groupLabel: "Anthropic" }, bedrock: { group: "connection.bedrock", groupLabel: "Bedrock" }, mantle: { group: "connection.mantle", groupLabel: "Mantle" }, vertex: { group: "connection.vertex", groupLabel: "Vertex" }, foundry: { group: "connection.foundry", groupLabel: "Foundry" } }, sandbox: { coworkSurface: { group: "sandbox.coworkSurface", groupLabel: "Cowork surface" }, codeSurface: { group: "sandbox.codeSurface", groupLabel: "Code surface" }, chatSurface: { group: "sandbox.chatSurface", groupLabel: "Chat surface" }, workspace: { group: "sandbox.workspace", groupLabel: "Workspace" }, builtinBrowser: { group: "sandbox.builtinBrowser", groupLabel: "Built-in browser" }, plugins: { group: "sandbox.workspace", groupLabel: "Workspace" }, authentication: { group: "sandbox.authentication", groupLabel: "Authentication" } }, connectors: { extensions: { group: "connectors.extensions", groupLabel: "Extensions" }, mcp: { group: "connectors.mcp", groupLabel: "MCP" }, workspace: { group: "connectors.workspace", groupLabel: "Workspace" }, authentication: { group: "connectors.authentication", groupLabel: "Authentication" } }, telemetry: { telemetry: { group: "telemetry", groupLabel: null }, otlp: { group: "telemetry.otlp", groupLabel: "OTLP" }, autoUpdate: { group: "telemetry.autoUpdate", groupLabel: "Auto update" }, lifecycle: { group: "telemetry.configUpdates", groupLabel: "Configuration updates" } }, limits: { tokenLimits: { group: "limits.tokenLimits", groupLabel: "Token limits" }, sessionRetention: { group: "limits.sessionRetention", groupLabel: "Session retention" } }, appearance: { appearance: { group: "appearance", groupLabel: null }, featureDiscovery: { group: "appearance.featureDiscovery", groupLabel: "Feature discovery" }, workspace: { group: "appearance", groupLabel: null } }, plugins: { plugins: { group: "plugins", groupLabel: null } }, source: { bootstrap: { group: "source.bootstrap", groupLabel: "Bootstrap" } } };
  function Uo(t) {
    var r;
    let n = Se.FLAT_KEY_TO_NESTED_PATH.get(t.flatKey);
    return (r = Se.fieldProviders(t.flatKey)[0]) !== null && r !== void 0 ? r : n !== void 0 && n.length > 1 ? n[0] : void 0;
  }
  function fu(t) {
    let r = Uo(t), n = r === void 0 ? void 0 : Bo.DOCS_GROUPS[t.category][r];
    return n !== null && n !== void 0 ? n : { group: t.category, groupLabel: null };
  }
  function pu(t, r) {
    var n, o, i, s, a, u, d, l;
    let { meta: c, node: f } = t, p = [], h = pe.renderHint((n = c.description) === null || n === void 0 ? void 0 : n.short, r);
    if (h) p.push(h);
    let g = Pe.elementOf(f), A = g ? R.enumOptionsOf(g) : R.enumOptionsOf(f);
    if (A) p.push(`One of: ${A.map(qe).join(", ")}.`);
    let I = (o = R.runtimeDefault(c)) !== null && o !== void 0 ? o : Ko(f), C = I === void 0 ? null : String(I);
    if (C !== null) p.push(`Defaults to ${qe(C)}.`);
    let j = Fo(f, "min"), B = Fo(f, "max");
    if (j !== void 0 && B !== void 0) p.push(`Range: ${j}\u2013${B}.`);
    let w = j !== void 0 || B !== void 0 ? { ...j !== void 0 ? { min: j } : {}, ...B !== void 0 ? { max: B } : {} } : void 0;
    if (c.legacyFlatKey) {
      let x = c.legacyFlatKey;
      p.push(x.supportEnds === void 0 ? `Previously named ${qe(x.name)}.` : `Previously named ${qe(x.name)} (the old name is accepted until ${fe.formatDeprecationDate(x.supportEnds)}). ${fe.consequenceOf(x, false)}`);
    }
    for (let x of pe.docsDeprecationsOf(c)) {
      if (x.path === ((i = c.legacyFlatKey) === null || i === void 0 ? void 0 : i.name)) continue;
      let be = x.supportEnds === void 0 ? "" : ` (accepted until ${fe.formatDeprecationDate(x.supportEnds)})`;
      p.push(`Deprecated: ${qe(x.path)}${be}; ${fe.replacementOf(x)}. ${fe.consequenceOf(x, false)}`);
    }
    let T = Sr(f, r), H = pe.executionTargetOf(c);
    return { mdmKey: c.flatKey, label: r.formatMessage(c.title), anchor: Bo.anchorSlug(c.flatKey), ...fu(c), typeString: Ze(f), defaultString: C, description: p.join(" "), helpBody: (u = (a = (s = c.description) === null || s === void 0 ? void 0 : s.long) === null || a === void 0 ? void 0 : a.text) !== null && u !== void 0 ? u : null, ...((l = (d = c.description) === null || d === void 0 ? void 0 : d.long) === null || l === void 0 ? void 0 : l.docsUrl) ? { docsUrl: c.description.long.docsUrl } : {}, ...pe.adminFacts(c), ...H ? { executionTarget: H } : {}, ...A ? { enumValues: A } : {}, ...w ? { range: w } : {}, ...T.length > 0 ? { subfields: T } : {} };
  }
  function Vo(t, r = Ut.STUB_INTL) {
    return Pe.FORM_FIELDS.filter((n) => n.meta.category === t && Se.isPublished3pKey(n.meta)).map((n) => pu(n, r));
  }
  function bu(t = Ut.STUB_INTL) {
    let r = Object.entries(wo.CONFIGURATION_CATEGORIES).filter(([, i]) => !i.derived).map(([i, s]) => ({ id: i, label: t.formatMessage(s.title) })), n = r.flatMap(({ id: i }) => Vo(i, t)).filter((i) => !R.isUnreleasedVersion(i.availableInVersion)), o = Object.entries(pe.BOOTSTRAP_RESPONSE_ENVELOPE).map(([i, s]) => ({ name: i, typeString: Ze(s.node), hint: s.hint, helpBody: s.helpBody }));
    return { categoryOrder: r, rows: n, bootstrapResponse: o };
  }
  Bo._test = { clusterOf: Uo, subfieldRowsOf: Sr };
});
var Yo = (0, import_chunk_w1d7ygsk.V)(function(zo) {
  Object.defineProperty(zo, "__esModule", { value: true });
  zo.computeEgressRequirements = hu;
  zo.egressRequirementLabel = _u;
  var Zo = (0, import_chunk_mmevw7ty.dX)(), Vt = (0, import_chunk_t2enjxg6.XEo)(), $o = (0, import_chunk_8xs3r4c8.wlt)(), Re = (0, import_chunk_8xs3r4c8.ILe)(), Eu = "claude.ai";
  function hu(t, r, n = Eu, o) {
    var i, s;
    let a = /* @__PURE__ */ new Set(), u = [], d = (c, f) => {
      if (!c || a.has(c)) return;
      a.add(c), u.push({ host: c, fieldKey: f });
    };
    for (let { host: c, toggleKey: f } of Vt.firewallHostsForServices(t, { anthropicHost: n, artifactIframeHost: Zo.egressAddress((i = t.workspace) === null || i === void 0 ? void 0 : i.userContentRendererUrl), updateViaUpdatesHost: (s = t.autoUpdate) === null || s === void 0 ? void 0 : s.viaUpdatesHost, platform: o })) d(c, f !== null && f !== void 0 ? f : "core");
    let l = $o.flattenAll(t);
    for (let c of Re.flatConfigKeys(r)) {
      let f = Re.getFieldMeta(c);
      if (!Re.enabledScopes(f).includes("3p") || !f.egressRequirements) continue;
      let p = typeof f.egressRequirements === "function" ? f.egressRequirements(l[c], t) : f.egressRequirements;
      for (let h of p) d(h, c);
    }
    return u;
  }
  function _u(t, r) {
    var n;
    let o = Vt.serviceLabelForToggleKey(r === "core" ? null : r);
    if (o) return t.formatMessage(o);
    let i = Re.getFieldMeta(r);
    return t.formatMessage((n = i.egressRequirementsLabel) !== null && n !== void 0 ? n : i.title);
  }
});
var ACr = (0, import_chunk_w1d7ygsk.V)(function(e) {
  var Pu = e && e.__createBinding || (Object.create ? function(t, r, n, o) {
    if (o === void 0) o = n;
    var i = Object.getOwnPropertyDescriptor(r, n);
    if (!i || ("get" in i ? !r.__esModule : i.writable || i.configurable)) i = { enumerable: true, get: function() {
      return r[n];
    } };
    Object.defineProperty(t, o, i);
  } : function(t, r, n, o) {
    if (o === void 0) o = n;
    t[o] = r[n];
  }), Wo = e && e.__exportStar || function(t, r) {
    for (var n in t) if (n !== "default" && !Object.prototype.hasOwnProperty.call(r, n)) Pu(r, t, n);
  };
  Object.defineProperty(e, "__esModule", { value: true });
  e.ManagedMcpServers = e.M365_WRITE_DELEGATED_SCOPES = e.M365_GRANTABLE_DELEGATED_SCOPES = e.M365_DEFAULT_DELEGATED_SCOPES = e.M365_ALWAYS_REQUESTED_SCOPES = e.M365_ADMIN_CONSENT_SCOPES = e.LOOPBACK_HOSTS = e.isLoopbackHost = e.CLOUD_METADATA_IPV6 = e.CLOUD_METADATA_IPV4 = e.CLOUD_METADATA_HOSTS = e.CLOUD_METADATA_HOST_NAMES = e.isLinkLocalOrMetadataHost = e.isSafeMcpCommand = e.HELPER_ARG_UNSAFE_MESSAGE = e.hasNoHelperBreakoutChars = e.isPluginMcpToolPolicyUnreadable = e.isOrgPluginSettingsParseFailed = e.isConnectableMcpEntry = e.isBuiltinMcpItem = e.isBuiltinMcpEntry = e.wantsOAuthProvider = e.httpsUrl = e.hasOAuthConfig = e.DirectMcpServerConfig = e.connectableMcpServers = e.configuredHostPath = e.relevantMcpEntryIssues = e.CALLBACK_HOST_OPTIONS = e.WEB_SEARCH_PROVIDER_HOSTS = e.WEB_SEARCH_PROVIDERS = e.hostsForBuiltinMcpEntry = e.findWebSearchBuiltin = e.BUILTIN_MCP_SERVERS = e.BUILTIN_DEFAULT_TOOL_POLICY = e.GatewayOidc = e.BootstrapFetchOidc = e.BootstrapOidc = e.AZURE_CLOUD_HOSTS = e.foldMcpEntryLegacy = e.adaptPluginMcp = e.TIER_DESCRIPTIONS = e.EFFORT_LEVELS = e.ANTHROPIC_TIER_NAMES = e.verdictToFallbackReason = e.TIER_ALIASES = e.isLikelyAnthropicModelId = e.isDefinitelyNotAnthropicModel = e.containsAnthropicToken = e.checkModel = void 0;
  e.kindSupportsDiscovery = e.credentialSpecCell = e.CREDENTIAL_SPEC = e.isSensitiveDropped = e.isRedactedInExports = e.keepsAuthoredEmptyList = e.tryGetFieldMeta = e.getFieldMeta = e.deprecatedScopes = e.enabledScopes = e.ManagedConfig = e.retiredFlatKeyEffect = e.RETIRED_FLAT_KEYS = e.FLAT_KEY_TO_NESTED_PATH = e.flatConfigKeys = e.FlatManagedConfig = e.BannerConfig = e.assignParsedKey = e.MARKETPLACE_INSTALL_PREFS = e.MARKETPLACE_CREDENTIAL_KINDS = e.AllowedPluginMarketplace = e.surfaceOptionLock = e.surfaceGrantOf = e.SSH_CLIENT_UNREADABLE_STAND_IN = e.isPlainGitBranchName = e.SELF_HOSTED_CREDENTIAL_KINDS = e.isSelfHostedOnly = e.isSelfHostedExecutionConfigured = e.normalizeMcpUrl = e.normalizeMcpServerName = e.matchMcpServerIdentity = e.unlistedBuiltinWriteTools = e.builtinWriteToolCoverageGaps = e.vendorId = e.TOOL_POLICY_LABEL = e.resolvePluginMcpToolPolicy = e.resolvePluginMcpToolPoliciesByName = e.resolveMcpToolPolicies = e.resolveManagedToolPolicy = e.resolveEffectiveMcpToolPolicy = e.RemoteDirectMcpServerConfig = e.orgPluginSettingsToPolicyMap = e.orgPluginSettingsFromPolicyMap = e.firstDroppedOrgPluginTool = e.oidcEndpointSelectionUrls = e.resolveOidcEndpointSelection = e.oauthAsSelectionUrls = e.byoAsSelectionUrls = e.resolveByoAsSelection = e.MCP_TRANSPORT_POLICY_ONLY = void 0;
  e.providerCliFlagEnv = e.PROVIDER_SELECTOR_ENV_FLAGS = e.PROVIDER_CLI_FLAG = e.requiredProviderLeaves = e.fieldProviders = e.isBedrockFamily = e.parseForceLoginOrgUUIDs = e.resolveLegacyFlatKeys = e.legacyNameNotice = e.detectDeprecations = e.standInFailClosed = e.parseConfigRecord = e.resolveRedactPolicy = e.autoModeSurfaces = e.isSkillCreationEnabled = e.isMcpPersistentAlwaysAllowEnabled = e.websocketCspSource = e.dictationEndpoints = e.dictationCspSource = e.dictationBaseUrl = e.isCoworkSurfaceEnabled = e.isChatTabEnabled = e.isChatAdvancedFileAnalysisEnabled = e.resolveDisabledBuiltinTools = e.checkBuiltinToolPolicyForDrops = e.BUILTIN_ASK_POLICY_VALUES = e.toolsCoveredByScopedRule = e.scanRuleList = e.parseBuiltinRule = e.isScopedBuiltinRule = e.checkDisabledBuiltinToolsForDrops = e.canonicalBuiltinRule = e.builtinToolScope = e.builtinRuleToolName = e.BUILTIN_TOOL_NAMES = e.resolveBuiltinAskToolNames = e.resolveBuiltinAskTools = e.reducedSnapshot = e.redactedSnapshot = e.nonAnthropicModelText = e.materializeDefaults = e.keyedConfigurationWarnings = e.applyPlatformVariants = e.enforceConfigurationValues = e.configurationWarnings = e.isBelowMinDesktopVersion = e.presentCredentialKinds = e.kindIsPresent = e.deriveInferenceCredentialKind = e.CREDENTIAL_KINDS_FOR_PROVIDER = void 0;
  e.preserveUnreadNames = e.readHybridStoredConfig = e.evaluateInference = e.droppedKeyIssue = e.ABSENT_INFERENCE_REASONS = e.releasedHybridCredentialKinds = e.HYBRID_SERVABLE_PROVIDERS = e.HYBRID_SERVABLE_CREDENTIAL_KINDS = e.buildHybridServableSchema = e.refuseForHybrid = e.isDeclaredInGroupEntry = e.GroupSettings = e.GroupServableConfig = e.buildGroupServableSchema = e.InferenceConfig = e.HelperScriptCreds = e.gatewayIdpMovedKeyPairs = e.editorListsGatewayIdpNotices = e.RELAUNCH_ENFORCEMENT_DEFAULT_HOURS = e.CONFIG_RELAUNCH_IDLE_MINUTES = e.OTLP_CONTENT_CATEGORIES = e.GROUP_DESCRIPTIONS = e.flatKeysForExecutionTarget = e.activatesThirdPartyMode = e.appBehaviorMdmKeys = e.isFailClosedStandIn = e.unverifiedCacheValue = e.unverifiedCacheAdmits = e.appliesUnverifiedAsFailClosed = e.applyUnverifiedKeys = e.layHotAppliedKeys = e.changedKeysNeedingRestart = e.canonicalJson = e.keysWithRemotePolicy = e.isStaticTier3pKey = e.staticTierKeys = e.remotePolicyDefaults = e.nonBootstrapableKeys = e.isInferenceConnectionKey = e.isBootstrapableMeta = e.bootstrapableKeys = e.stripEmptyKeys = e.resolveClaudeAiImportArm = e.claudeAiImportWizardSources = e.claudeAiImportAdmits = e.redactSensitiveKeys = e.REDACTED = e.usageCostEstimateEnabled = e.MODEL_CATALOG_LOCATION_UNREADABLE_STAND_IN = e.effectiveModelPricing = void 0;
  e.toRenderableBannerConfig = e.resolveBannerConfig = e.isValidBannerLinkUrl = e.isValidBannerHexColor = e.BANNER_DEFAULT_TEXT_COLOR = e.BANNER_DEFAULT_BACKGROUND_COLOR = e.withoutInapplicable = e.targetCluster = e.subFieldsOf = e.setInferenceProvider = e.setInferenceCredentialKind = e.runsSessionsOffDevice = e.recordValueOptionsOf = e.optionValuesOf = e.objectColumnsOf = e.itemColumnsOf = e.isFormFieldVisible = e.isFieldRequired = e.getFormField = e.formFieldsForReader = e.FORM_FIELDS = e.FORM_FIELD_BY_ID = e.credentialKindsOffered = e.controlTypeOf = e.appliesUnder = e.normalizeVersionedConfig = e.CONFIG_DOCUMENT_META_NAMES = e.mergeTiers = e.materializeRaw = e.holdCluster = e.asksForThirdPartyMode = e.asksForExecutionTarget = e.unflattenInference = e.unflattenAll = e.flattenInference = e.flattenAll = e.CLUSTER_REGISTRY = e.pruneSchema = e.reportUnread = e.reportableName = e.NOT_RECOGNIZED = e.NOT_ACCEPTED = e.gatewayServableKeys = e.gatewayRefusedPathPrefixes = e.gatewayOverlayDropChecks = e.credentialHeaderEntry = e.withoutNulledNames = e.withoutNames = e.withoutFormerNames = e.STORED_HEADER_VALUE_PLACEHOLDER = void 0;
  e.activeBootstrapOrigin = e.urlString = e.intakeReportKeepsValue = e.subfield = e.shortDescription = e.SHORT_DESCRIPTION_MAX_LENGTH = e.runtimeDefault = e.remotePolicyOf = e.redactPolicyOf = e.redact = e.readersOf = e.readersDeclared = e.presetForItem = e.pathKindOf = e.nestedColumnsOf = e.maxLengthOf = e.longDescription = e.LONG_DESCRIPTION_MAX_LENGTH = e.isUrlString = e.isUnreleasedMember = e.isRemoteOnly = e.isReleasedFor3p = e.isReadBy = e.isHybridLoopback = e.isHybridExcluded = e.isHybridDerived = e.globPattern = e.folderPath = e.filePath = e.fieldMetaForNode = e.field = e.effectiveVisibility = e.displayDefault = e.discriminatorKeyOf = e.discriminatorArmsOf = e.READER_FACTS = e.CONFIG_READERS = e.annotationsOf = e.annotate = e.acceptsWildcard = e.stripHiddenSubFields = e.missingSubFields = e.isEmptyValue = e.isEmptySubValue = e.isEmptyRowValue = e.CONFIGURATION_CATEGORIES = e.docsTableRows = e.configReferenceUrl = e.CONFIG_REFERENCE_URL = e.anchorSlug = void 0;
  e.setDeprecationClock = e.nextDeprecationPhaseChange = e.isDeprecationHonoured = e.formatDeprecationDate = e.describeDeprecation = e.deprecationPhase = e.deprecationInstant = e.deprecationHit = e.deprecationApplies = e.DEPRECATION_FINAL_NOTICE_MS = e.BATCH_2026_09 = e.applyLegacy = e.toolPolicyKeyGlobMatch = e.TOOL_POLICY_VALUES = e.TOOL_POLICY_EDITOR_VALUES = e.strictestToolPolicy = e.pluginMcpRulePrefix = e.managedToolPatternMatches = e.lookupMcpToolPolicy = e.isApprovalRequiredToolPolicy = e.SIGN_IN_CREDENTIAL_KINDS = e.PROVIDERS = e.PROVIDER_DISPLAY = e.KIND_PRECEDENCE = e.isAnthropicOAuthToken = e.INFERENCE_CREDENTIAL_KINDS = e.getProviderLabel = e.DEFAULT_INFERENCE_PROVIDER = e.resolveEndpoints = e.subprocessHostsForServices = e.rendererEgressRules = e.hostsForService = e.enabledServicesFromConfig = e.egressServiceKeys = e.EGRESS_SERVICES = e.egressRequirementLabel = e.computeEgressRequirements = e.providerHasDiscovery = e.MODELS_GROUP = e.HELPER_SCRIPT_GROUP = e.hasUserinfo = e.hasActiveBootstrap = e.CREDENTIALED_URL_MESSAGE = void 0;
  var $e = (0, import_chunk_mmevw7ty.PGi)();
  Object.defineProperty(e, "checkModel", { enumerable: true, get: function() {
    return $e.checkModel;
  } });
  Object.defineProperty(e, "containsAnthropicToken", { enumerable: true, get: function() {
    return $e.containsAnthropicToken;
  } });
  Object.defineProperty(e, "isDefinitelyNotAnthropicModel", { enumerable: true, get: function() {
    return $e.isDefinitelyNotAnthropicModel;
  } });
  Object.defineProperty(e, "isLikelyAnthropicModelId", { enumerable: true, get: function() {
    return $e.isLikelyAnthropicModelId;
  } });
  Object.defineProperty(e, "TIER_ALIASES", { enumerable: true, get: function() {
    return $e.TIER_ALIASES;
  } });
  Object.defineProperty(e, "verdictToFallbackReason", { enumerable: true, get: function() {
    return $e.verdictToFallbackReason;
  } });
  var Rr = (0, import_chunk_mmevw7ty.Tjn)();
  Object.defineProperty(e, "ANTHROPIC_TIER_NAMES", { enumerable: true, get: function() {
    return Rr.ANTHROPIC_TIER_NAMES;
  } });
  Object.defineProperty(e, "EFFORT_LEVELS", { enumerable: true, get: function() {
    return Rr.EFFORT_LEVELS;
  } });
  Object.defineProperty(e, "TIER_DESCRIPTIONS", { enumerable: true, get: function() {
    return Rr.TIER_DESCRIPTIONS;
  } });
  var E = (0, import_chunk_mmevw7ty.NZ)();
  Object.defineProperty(e, "adaptPluginMcp", { enumerable: true, get: function() {
    return E.adaptPluginMcp;
  } });
  Object.defineProperty(e, "foldMcpEntryLegacy", { enumerable: true, get: function() {
    return E.foldMcpEntryLegacy;
  } });
  Object.defineProperty(e, "AZURE_CLOUD_HOSTS", { enumerable: true, get: function() {
    return E.AZURE_CLOUD_HOSTS;
  } });
  Object.defineProperty(e, "BootstrapOidc", { enumerable: true, get: function() {
    return E.BootstrapOidc;
  } });
  Object.defineProperty(e, "BootstrapFetchOidc", { enumerable: true, get: function() {
    return E.BootstrapFetchOidc;
  } });
  Object.defineProperty(e, "GatewayOidc", { enumerable: true, get: function() {
    return E.GatewayOidc;
  } });
  Object.defineProperty(e, "BUILTIN_DEFAULT_TOOL_POLICY", { enumerable: true, get: function() {
    return E.BUILTIN_DEFAULT_TOOL_POLICY;
  } });
  Object.defineProperty(e, "BUILTIN_MCP_SERVERS", { enumerable: true, get: function() {
    return E.BUILTIN_MCP_SERVERS;
  } });
  Object.defineProperty(e, "findWebSearchBuiltin", { enumerable: true, get: function() {
    return E.findWebSearchBuiltin;
  } });
  Object.defineProperty(e, "hostsForBuiltinMcpEntry", { enumerable: true, get: function() {
    return E.hostsForBuiltinMcpEntry;
  } });
  Object.defineProperty(e, "WEB_SEARCH_PROVIDERS", { enumerable: true, get: function() {
    return E.WEB_SEARCH_PROVIDERS;
  } });
  Object.defineProperty(e, "WEB_SEARCH_PROVIDER_HOSTS", { enumerable: true, get: function() {
    return E.WEB_SEARCH_PROVIDER_HOSTS;
  } });
  Object.defineProperty(e, "CALLBACK_HOST_OPTIONS", { enumerable: true, get: function() {
    return E.CALLBACK_HOST_OPTIONS;
  } });
  Object.defineProperty(e, "relevantMcpEntryIssues", { enumerable: true, get: function() {
    return E.relevantMcpEntryIssues;
  } });
  Object.defineProperty(e, "configuredHostPath", { enumerable: true, get: function() {
    return E.configuredHostPath;
  } });
  Object.defineProperty(e, "connectableMcpServers", { enumerable: true, get: function() {
    return E.connectableMcpServers;
  } });
  Object.defineProperty(e, "DirectMcpServerConfig", { enumerable: true, get: function() {
    return E.DirectMcpServerConfig;
  } });
  Object.defineProperty(e, "hasOAuthConfig", { enumerable: true, get: function() {
    return E.hasOAuthConfig;
  } });
  Object.defineProperty(e, "httpsUrl", { enumerable: true, get: function() {
    return E.httpsUrl;
  } });
  Object.defineProperty(e, "wantsOAuthProvider", { enumerable: true, get: function() {
    return E.wantsOAuthProvider;
  } });
  Object.defineProperty(e, "isBuiltinMcpEntry", { enumerable: true, get: function() {
    return E.isBuiltinMcpEntry;
  } });
  Object.defineProperty(e, "isBuiltinMcpItem", { enumerable: true, get: function() {
    return E.isBuiltinMcpItem;
  } });
  Object.defineProperty(e, "isConnectableMcpEntry", { enumerable: true, get: function() {
    return E.isConnectableMcpEntry;
  } });
  Object.defineProperty(e, "isOrgPluginSettingsParseFailed", { enumerable: true, get: function() {
    return E.isOrgPluginSettingsParseFailed;
  } });
  Object.defineProperty(e, "isPluginMcpToolPolicyUnreadable", { enumerable: true, get: function() {
    return E.isPluginMcpToolPolicyUnreadable;
  } });
  Object.defineProperty(e, "hasNoHelperBreakoutChars", { enumerable: true, get: function() {
    return E.hasNoHelperBreakoutChars;
  } });
  Object.defineProperty(e, "HELPER_ARG_UNSAFE_MESSAGE", { enumerable: true, get: function() {
    return E.HELPER_ARG_UNSAFE_MESSAGE;
  } });
  Object.defineProperty(e, "isSafeMcpCommand", { enumerable: true, get: function() {
    return E.isSafeMcpCommand;
  } });
  Object.defineProperty(e, "isLinkLocalOrMetadataHost", { enumerable: true, get: function() {
    return E.isLinkLocalOrMetadataHost;
  } });
  Object.defineProperty(e, "CLOUD_METADATA_HOST_NAMES", { enumerable: true, get: function() {
    return E.CLOUD_METADATA_HOST_NAMES;
  } });
  Object.defineProperty(e, "CLOUD_METADATA_HOSTS", { enumerable: true, get: function() {
    return E.CLOUD_METADATA_HOSTS;
  } });
  Object.defineProperty(e, "CLOUD_METADATA_IPV4", { enumerable: true, get: function() {
    return E.CLOUD_METADATA_IPV4;
  } });
  Object.defineProperty(e, "CLOUD_METADATA_IPV6", { enumerable: true, get: function() {
    return E.CLOUD_METADATA_IPV6;
  } });
  Object.defineProperty(e, "isLoopbackHost", { enumerable: true, get: function() {
    return E.isLoopbackHost;
  } });
  Object.defineProperty(e, "LOOPBACK_HOSTS", { enumerable: true, get: function() {
    return E.LOOPBACK_HOSTS;
  } });
  Object.defineProperty(e, "M365_ADMIN_CONSENT_SCOPES", { enumerable: true, get: function() {
    return E.M365_ADMIN_CONSENT_SCOPES;
  } });
  Object.defineProperty(e, "M365_ALWAYS_REQUESTED_SCOPES", { enumerable: true, get: function() {
    return E.M365_ALWAYS_REQUESTED_SCOPES;
  } });
  Object.defineProperty(e, "M365_DEFAULT_DELEGATED_SCOPES", { enumerable: true, get: function() {
    return E.M365_DEFAULT_DELEGATED_SCOPES;
  } });
  Object.defineProperty(e, "M365_GRANTABLE_DELEGATED_SCOPES", { enumerable: true, get: function() {
    return E.M365_GRANTABLE_DELEGATED_SCOPES;
  } });
  Object.defineProperty(e, "M365_WRITE_DELEGATED_SCOPES", { enumerable: true, get: function() {
    return E.M365_WRITE_DELEGATED_SCOPES;
  } });
  Object.defineProperty(e, "ManagedMcpServers", { enumerable: true, get: function() {
    return E.ManagedMcpServers;
  } });
  Object.defineProperty(e, "MCP_TRANSPORT_POLICY_ONLY", { enumerable: true, get: function() {
    return E.MCP_TRANSPORT_POLICY_ONLY;
  } });
  Object.defineProperty(e, "resolveByoAsSelection", { enumerable: true, get: function() {
    return E.resolveByoAsSelection;
  } });
  Object.defineProperty(e, "byoAsSelectionUrls", { enumerable: true, get: function() {
    return E.byoAsSelectionUrls;
  } });
  Object.defineProperty(e, "oauthAsSelectionUrls", { enumerable: true, get: function() {
    return E.oauthAsSelectionUrls;
  } });
  Object.defineProperty(e, "resolveOidcEndpointSelection", { enumerable: true, get: function() {
    return E.resolveOidcEndpointSelection;
  } });
  Object.defineProperty(e, "oidcEndpointSelectionUrls", { enumerable: true, get: function() {
    return E.oidcEndpointSelectionUrls;
  } });
  Object.defineProperty(e, "firstDroppedOrgPluginTool", { enumerable: true, get: function() {
    return E.firstDroppedOrgPluginTool;
  } });
  Object.defineProperty(e, "orgPluginSettingsFromPolicyMap", { enumerable: true, get: function() {
    return E.orgPluginSettingsFromPolicyMap;
  } });
  Object.defineProperty(e, "orgPluginSettingsToPolicyMap", { enumerable: true, get: function() {
    return E.orgPluginSettingsToPolicyMap;
  } });
  Object.defineProperty(e, "RemoteDirectMcpServerConfig", { enumerable: true, get: function() {
    return E.RemoteDirectMcpServerConfig;
  } });
  Object.defineProperty(e, "resolveEffectiveMcpToolPolicy", { enumerable: true, get: function() {
    return E.resolveEffectiveMcpToolPolicy;
  } });
  Object.defineProperty(e, "resolveManagedToolPolicy", { enumerable: true, get: function() {
    return E.resolveManagedToolPolicy;
  } });
  Object.defineProperty(e, "resolveMcpToolPolicies", { enumerable: true, get: function() {
    return E.resolveMcpToolPolicies;
  } });
  Object.defineProperty(e, "resolvePluginMcpToolPoliciesByName", { enumerable: true, get: function() {
    return E.resolvePluginMcpToolPoliciesByName;
  } });
  Object.defineProperty(e, "resolvePluginMcpToolPolicy", { enumerable: true, get: function() {
    return E.resolvePluginMcpToolPolicy;
  } });
  Object.defineProperty(e, "TOOL_POLICY_LABEL", { enumerable: true, get: function() {
    return E.TOOL_POLICY_LABEL;
  } });
  Object.defineProperty(e, "vendorId", { enumerable: true, get: function() {
    return E.vendorId;
  } });
  Object.defineProperty(e, "builtinWriteToolCoverageGaps", { enumerable: true, get: function() {
    return E.builtinWriteToolCoverageGaps;
  } });
  Object.defineProperty(e, "unlistedBuiltinWriteTools", { enumerable: true, get: function() {
    return E.unlistedBuiltinWriteTools;
  } });
  var Ar = (0, import_chunk_mmevw7ty.JEo)();
  Object.defineProperty(e, "matchMcpServerIdentity", { enumerable: true, get: function() {
    return Ar.matchMcpServerIdentity;
  } });
  Object.defineProperty(e, "normalizeMcpServerName", { enumerable: true, get: function() {
    return Ar.normalizeMcpServerName;
  } });
  Object.defineProperty(e, "normalizeMcpUrl", { enumerable: true, get: function() {
    return Ar.normalizeMcpUrl;
  } });
  var Tr = (0, import_chunk_mmevw7ty.xEs)();
  Object.defineProperty(e, "isSelfHostedExecutionConfigured", { enumerable: true, get: function() {
    return Tr.isSelfHostedExecutionConfigured;
  } });
  Object.defineProperty(e, "isSelfHostedOnly", { enumerable: true, get: function() {
    return Tr.isSelfHostedOnly;
  } });
  Object.defineProperty(e, "SELF_HOSTED_CREDENTIAL_KINDS", { enumerable: true, get: function() {
    return Tr.SELF_HOSTED_CREDENTIAL_KINDS;
  } });
  var Bt = (0, import_chunk_mmevw7ty.Cjn)();
  Object.defineProperty(e, "isPlainGitBranchName", { enumerable: true, get: function() {
    return Bt.isPlainGitBranchName;
  } });
  Object.defineProperty(e, "SSH_CLIENT_UNREADABLE_STAND_IN", { enumerable: true, get: function() {
    return Bt.SSH_CLIENT_UNREADABLE_STAND_IN;
  } });
  Object.defineProperty(e, "surfaceGrantOf", { enumerable: true, get: function() {
    return Bt.surfaceGrantOf;
  } });
  Object.defineProperty(e, "surfaceOptionLock", { enumerable: true, get: function() {
    return Bt.surfaceOptionLock;
  } });
  var b = (0, import_chunk_8xs3r4c8.ILe)();
  Object.defineProperty(e, "AllowedPluginMarketplace", { enumerable: true, get: function() {
    return b.AllowedPluginMarketplace;
  } });
  Object.defineProperty(e, "MARKETPLACE_CREDENTIAL_KINDS", { enumerable: true, get: function() {
    return b.MARKETPLACE_CREDENTIAL_KINDS;
  } });
  Object.defineProperty(e, "MARKETPLACE_INSTALL_PREFS", { enumerable: true, get: function() {
    return b.MARKETPLACE_INSTALL_PREFS;
  } });
  Object.defineProperty(e, "assignParsedKey", { enumerable: true, get: function() {
    return b.assignParsedKey;
  } });
  Object.defineProperty(e, "BannerConfig", { enumerable: true, get: function() {
    return b.BannerConfig;
  } });
  Object.defineProperty(e, "FlatManagedConfig", { enumerable: true, get: function() {
    return b.FlatManagedConfig;
  } });
  Object.defineProperty(e, "flatConfigKeys", { enumerable: true, get: function() {
    return b.flatConfigKeys;
  } });
  Object.defineProperty(e, "FLAT_KEY_TO_NESTED_PATH", { enumerable: true, get: function() {
    return b.FLAT_KEY_TO_NESTED_PATH;
  } });
  Object.defineProperty(e, "RETIRED_FLAT_KEYS", { enumerable: true, get: function() {
    return b.RETIRED_FLAT_KEYS;
  } });
  Object.defineProperty(e, "retiredFlatKeyEffect", { enumerable: true, get: function() {
    return b.retiredFlatKeyEffect;
  } });
  Object.defineProperty(e, "ManagedConfig", { enumerable: true, get: function() {
    return b.ManagedConfig;
  } });
  Object.defineProperty(e, "enabledScopes", { enumerable: true, get: function() {
    return b.enabledScopes;
  } });
  Object.defineProperty(e, "deprecatedScopes", { enumerable: true, get: function() {
    return b.deprecatedScopes;
  } });
  Object.defineProperty(e, "getFieldMeta", { enumerable: true, get: function() {
    return b.getFieldMeta;
  } });
  Object.defineProperty(e, "tryGetFieldMeta", { enumerable: true, get: function() {
    return b.tryGetFieldMeta;
  } });
  Object.defineProperty(e, "keepsAuthoredEmptyList", { enumerable: true, get: function() {
    return b.keepsAuthoredEmptyList;
  } });
  Object.defineProperty(e, "isRedactedInExports", { enumerable: true, get: function() {
    return b.isRedactedInExports;
  } });
  Object.defineProperty(e, "isSensitiveDropped", { enumerable: true, get: function() {
    return b.isSensitiveDropped;
  } });
  Object.defineProperty(e, "CREDENTIAL_SPEC", { enumerable: true, get: function() {
    return b.CREDENTIAL_SPEC;
  } });
  Object.defineProperty(e, "credentialSpecCell", { enumerable: true, get: function() {
    return b.credentialSpecCell;
  } });
  Object.defineProperty(e, "kindSupportsDiscovery", { enumerable: true, get: function() {
    return b.kindSupportsDiscovery;
  } });
  Object.defineProperty(e, "CREDENTIAL_KINDS_FOR_PROVIDER", { enumerable: true, get: function() {
    return b.CREDENTIAL_KINDS_FOR_PROVIDER;
  } });
  Object.defineProperty(e, "deriveInferenceCredentialKind", { enumerable: true, get: function() {
    return b.deriveInferenceCredentialKind;
  } });
  Object.defineProperty(e, "kindIsPresent", { enumerable: true, get: function() {
    return b.kindIsPresent;
  } });
  Object.defineProperty(e, "presentCredentialKinds", { enumerable: true, get: function() {
    return b.presentCredentialKinds;
  } });
  Object.defineProperty(e, "isBelowMinDesktopVersion", { enumerable: true, get: function() {
    return b.isBelowMinDesktopVersion;
  } });
  Object.defineProperty(e, "configurationWarnings", { enumerable: true, get: function() {
    return b.configurationWarnings;
  } });
  Object.defineProperty(e, "enforceConfigurationValues", { enumerable: true, get: function() {
    return b.enforceConfigurationValues;
  } });
  Object.defineProperty(e, "applyPlatformVariants", { enumerable: true, get: function() {
    return b.applyPlatformVariants;
  } });
  Object.defineProperty(e, "keyedConfigurationWarnings", { enumerable: true, get: function() {
    return b.keyedConfigurationWarnings;
  } });
  Object.defineProperty(e, "materializeDefaults", { enumerable: true, get: function() {
    return b.materializeDefaults;
  } });
  Object.defineProperty(e, "nonAnthropicModelText", { enumerable: true, get: function() {
    return b.nonAnthropicModelText;
  } });
  Object.defineProperty(e, "redactedSnapshot", { enumerable: true, get: function() {
    return b.redactedSnapshot;
  } });
  Object.defineProperty(e, "reducedSnapshot", { enumerable: true, get: function() {
    return b.reducedSnapshot;
  } });
  Object.defineProperty(e, "resolveBuiltinAskTools", { enumerable: true, get: function() {
    return b.resolveBuiltinAskTools;
  } });
  Object.defineProperty(e, "resolveBuiltinAskToolNames", { enumerable: true, get: function() {
    return b.resolveBuiltinAskToolNames;
  } });
  Object.defineProperty(e, "BUILTIN_TOOL_NAMES", { enumerable: true, get: function() {
    return b.BUILTIN_TOOL_NAMES;
  } });
  Object.defineProperty(e, "builtinRuleToolName", { enumerable: true, get: function() {
    return b.builtinRuleToolName;
  } });
  Object.defineProperty(e, "builtinToolScope", { enumerable: true, get: function() {
    return b.builtinToolScope;
  } });
  Object.defineProperty(e, "canonicalBuiltinRule", { enumerable: true, get: function() {
    return b.canonicalBuiltinRule;
  } });
  Object.defineProperty(e, "checkDisabledBuiltinToolsForDrops", { enumerable: true, get: function() {
    return b.checkDisabledBuiltinToolsForDrops;
  } });
  Object.defineProperty(e, "isScopedBuiltinRule", { enumerable: true, get: function() {
    return b.isScopedBuiltinRule;
  } });
  Object.defineProperty(e, "parseBuiltinRule", { enumerable: true, get: function() {
    return b.parseBuiltinRule;
  } });
  Object.defineProperty(e, "scanRuleList", { enumerable: true, get: function() {
    return b.scanRuleList;
  } });
  Object.defineProperty(e, "toolsCoveredByScopedRule", { enumerable: true, get: function() {
    return b.toolsCoveredByScopedRule;
  } });
  Object.defineProperty(e, "BUILTIN_ASK_POLICY_VALUES", { enumerable: true, get: function() {
    return b.BUILTIN_ASK_POLICY_VALUES;
  } });
  Object.defineProperty(e, "checkBuiltinToolPolicyForDrops", { enumerable: true, get: function() {
    return b.checkBuiltinToolPolicyForDrops;
  } });
  Object.defineProperty(e, "resolveDisabledBuiltinTools", { enumerable: true, get: function() {
    return b.resolveDisabledBuiltinTools;
  } });
  Object.defineProperty(e, "isChatAdvancedFileAnalysisEnabled", { enumerable: true, get: function() {
    return b.isChatAdvancedFileAnalysisEnabled;
  } });
  Object.defineProperty(e, "isChatTabEnabled", { enumerable: true, get: function() {
    return b.isChatTabEnabled;
  } });
  Object.defineProperty(e, "isCoworkSurfaceEnabled", { enumerable: true, get: function() {
    return b.isCoworkSurfaceEnabled;
  } });
  Object.defineProperty(e, "dictationBaseUrl", { enumerable: true, get: function() {
    return b.dictationBaseUrl;
  } });
  Object.defineProperty(e, "dictationCspSource", { enumerable: true, get: function() {
    return b.dictationCspSource;
  } });
  Object.defineProperty(e, "dictationEndpoints", { enumerable: true, get: function() {
    return b.dictationEndpoints;
  } });
  Object.defineProperty(e, "websocketCspSource", { enumerable: true, get: function() {
    return b.websocketCspSource;
  } });
  Object.defineProperty(e, "isMcpPersistentAlwaysAllowEnabled", { enumerable: true, get: function() {
    return b.isMcpPersistentAlwaysAllowEnabled;
  } });
  Object.defineProperty(e, "isSkillCreationEnabled", { enumerable: true, get: function() {
    return b.isSkillCreationEnabled;
  } });
  Object.defineProperty(e, "autoModeSurfaces", { enumerable: true, get: function() {
    return b.autoModeSurfaces;
  } });
  Object.defineProperty(e, "resolveRedactPolicy", { enumerable: true, get: function() {
    return b.resolveRedactPolicy;
  } });
  Object.defineProperty(e, "parseConfigRecord", { enumerable: true, get: function() {
    return b.parseConfigRecord;
  } });
  Object.defineProperty(e, "standInFailClosed", { enumerable: true, get: function() {
    return b.standInFailClosed;
  } });
  Object.defineProperty(e, "detectDeprecations", { enumerable: true, get: function() {
    return b.detectDeprecations;
  } });
  Object.defineProperty(e, "legacyNameNotice", { enumerable: true, get: function() {
    return b.legacyNameNotice;
  } });
  Object.defineProperty(e, "resolveLegacyFlatKeys", { enumerable: true, get: function() {
    return b.resolveLegacyFlatKeys;
  } });
  Object.defineProperty(e, "parseForceLoginOrgUUIDs", { enumerable: true, get: function() {
    return b.parseForceLoginOrgUUIDs;
  } });
  Object.defineProperty(e, "isBedrockFamily", { enumerable: true, get: function() {
    return b.isBedrockFamily;
  } });
  Object.defineProperty(e, "fieldProviders", { enumerable: true, get: function() {
    return b.fieldProviders;
  } });
  Object.defineProperty(e, "requiredProviderLeaves", { enumerable: true, get: function() {
    return b.requiredProviderLeaves;
  } });
  Object.defineProperty(e, "PROVIDER_CLI_FLAG", { enumerable: true, get: function() {
    return b.PROVIDER_CLI_FLAG;
  } });
  Object.defineProperty(e, "PROVIDER_SELECTOR_ENV_FLAGS", { enumerable: true, get: function() {
    return b.PROVIDER_SELECTOR_ENV_FLAGS;
  } });
  Object.defineProperty(e, "providerCliFlagEnv", { enumerable: true, get: function() {
    return b.providerCliFlagEnv;
  } });
  Object.defineProperty(e, "effectiveModelPricing", { enumerable: true, get: function() {
    return b.effectiveModelPricing;
  } });
  Object.defineProperty(e, "MODEL_CATALOG_LOCATION_UNREADABLE_STAND_IN", { enumerable: true, get: function() {
    return b.MODEL_CATALOG_LOCATION_UNREADABLE_STAND_IN;
  } });
  Object.defineProperty(e, "usageCostEstimateEnabled", { enumerable: true, get: function() {
    return b.usageCostEstimateEnabled;
  } });
  Object.defineProperty(e, "REDACTED", { enumerable: true, get: function() {
    return b.REDACTED;
  } });
  Object.defineProperty(e, "redactSensitiveKeys", { enumerable: true, get: function() {
    return b.redactSensitiveKeys;
  } });
  Object.defineProperty(e, "claudeAiImportAdmits", { enumerable: true, get: function() {
    return b.claudeAiImportAdmits;
  } });
  Object.defineProperty(e, "claudeAiImportWizardSources", { enumerable: true, get: function() {
    return b.claudeAiImportWizardSources;
  } });
  Object.defineProperty(e, "resolveClaudeAiImportArm", { enumerable: true, get: function() {
    return b.resolveClaudeAiImportArm;
  } });
  Object.defineProperty(e, "stripEmptyKeys", { enumerable: true, get: function() {
    return b.stripEmptyKeys;
  } });
  Object.defineProperty(e, "bootstrapableKeys", { enumerable: true, get: function() {
    return b.bootstrapableKeys;
  } });
  Object.defineProperty(e, "isBootstrapableMeta", { enumerable: true, get: function() {
    return b.isBootstrapableMeta;
  } });
  Object.defineProperty(e, "isInferenceConnectionKey", { enumerable: true, get: function() {
    return b.isInferenceConnectionKey;
  } });
  Object.defineProperty(e, "nonBootstrapableKeys", { enumerable: true, get: function() {
    return b.nonBootstrapableKeys;
  } });
  Object.defineProperty(e, "remotePolicyDefaults", { enumerable: true, get: function() {
    return b.remotePolicyDefaults;
  } });
  Object.defineProperty(e, "staticTierKeys", { enumerable: true, get: function() {
    return b.staticTierKeys;
  } });
  Object.defineProperty(e, "isStaticTier3pKey", { enumerable: true, get: function() {
    return b.isStaticTier3pKey;
  } });
  Object.defineProperty(e, "keysWithRemotePolicy", { enumerable: true, get: function() {
    return b.keysWithRemotePolicy;
  } });
  Object.defineProperty(e, "canonicalJson", { enumerable: true, get: function() {
    return b.canonicalJson;
  } });
  Object.defineProperty(e, "changedKeysNeedingRestart", { enumerable: true, get: function() {
    return b.changedKeysNeedingRestart;
  } });
  Object.defineProperty(e, "layHotAppliedKeys", { enumerable: true, get: function() {
    return b.layHotAppliedKeys;
  } });
  Object.defineProperty(e, "applyUnverifiedKeys", { enumerable: true, get: function() {
    return b.applyUnverifiedKeys;
  } });
  Object.defineProperty(e, "appliesUnverifiedAsFailClosed", { enumerable: true, get: function() {
    return b.appliesUnverifiedAsFailClosed;
  } });
  Object.defineProperty(e, "unverifiedCacheAdmits", { enumerable: true, get: function() {
    return b.unverifiedCacheAdmits;
  } });
  Object.defineProperty(e, "unverifiedCacheValue", { enumerable: true, get: function() {
    return b.unverifiedCacheValue;
  } });
  Object.defineProperty(e, "isFailClosedStandIn", { enumerable: true, get: function() {
    return b.isFailClosedStandIn;
  } });
  Object.defineProperty(e, "appBehaviorMdmKeys", { enumerable: true, get: function() {
    return b.appBehaviorMdmKeys;
  } });
  Object.defineProperty(e, "activatesThirdPartyMode", { enumerable: true, get: function() {
    return b.activatesThirdPartyMode;
  } });
  Object.defineProperty(e, "flatKeysForExecutionTarget", { enumerable: true, get: function() {
    return b.flatKeysForExecutionTarget;
  } });
  Object.defineProperty(e, "GROUP_DESCRIPTIONS", { enumerable: true, get: function() {
    return b.GROUP_DESCRIPTIONS;
  } });
  Object.defineProperty(e, "OTLP_CONTENT_CATEGORIES", { enumerable: true, get: function() {
    return b.OTLP_CONTENT_CATEGORIES;
  } });
  Object.defineProperty(e, "CONFIG_RELAUNCH_IDLE_MINUTES", { enumerable: true, get: function() {
    return b.CONFIG_RELAUNCH_IDLE_MINUTES;
  } });
  Object.defineProperty(e, "RELAUNCH_ENFORCEMENT_DEFAULT_HOURS", { enumerable: true, get: function() {
    return b.RELAUNCH_ENFORCEMENT_DEFAULT_HOURS;
  } });
  var Ht = (0, import_chunk_mmevw7ty.Ime)();
  Object.defineProperty(e, "editorListsGatewayIdpNotices", { enumerable: true, get: function() {
    return Ht.editorListsGatewayIdpNotices;
  } });
  Object.defineProperty(e, "gatewayIdpMovedKeyPairs", { enumerable: true, get: function() {
    return Ht.gatewayIdpMovedKeyPairs;
  } });
  Object.defineProperty(e, "HelperScriptCreds", { enumerable: true, get: function() {
    return Ht.HelperScriptCreds;
  } });
  Object.defineProperty(e, "InferenceConfig", { enumerable: true, get: function() {
    return Ht.InferenceConfig;
  } });
  var xt = Yt();
  Object.defineProperty(e, "buildGroupServableSchema", { enumerable: true, get: function() {
    return xt.buildGroupServableSchema;
  } });
  Object.defineProperty(e, "GroupServableConfig", { enumerable: true, get: function() {
    return xt.GroupServableConfig;
  } });
  Object.defineProperty(e, "GroupSettings", { enumerable: true, get: function() {
    return xt.GroupSettings;
  } });
  Object.defineProperty(e, "isDeclaredInGroupEntry", { enumerable: true, get: function() {
    return xt.isDeclaredInGroupEntry;
  } });
  var Ru = je();
  Object.defineProperty(e, "refuseForHybrid", { enumerable: true, get: function() {
    return Ru.refuseForHybrid;
  } });
  var Gt = rr();
  Object.defineProperty(e, "buildHybridServableSchema", { enumerable: true, get: function() {
    return Gt.buildHybridServableSchema;
  } });
  Object.defineProperty(e, "HYBRID_SERVABLE_CREDENTIAL_KINDS", { enumerable: true, get: function() {
    return Gt.HYBRID_SERVABLE_CREDENTIAL_KINDS;
  } });
  Object.defineProperty(e, "HYBRID_SERVABLE_PROVIDERS", { enumerable: true, get: function() {
    return Gt.HYBRID_SERVABLE_PROVIDERS;
  } });
  Object.defineProperty(e, "releasedHybridCredentialKinds", { enumerable: true, get: function() {
    return Gt.releasedHybridCredentialKinds;
  } });
  var Ir = (0, import_chunk_8xs3r4c8.REs)();
  Object.defineProperty(e, "ABSENT_INFERENCE_REASONS", { enumerable: true, get: function() {
    return Ir.ABSENT_INFERENCE_REASONS;
  } });
  Object.defineProperty(e, "droppedKeyIssue", { enumerable: true, get: function() {
    return Ir.droppedKeyIssue;
  } });
  Object.defineProperty(e, "evaluateInference", { enumerable: true, get: function() {
    return Ir.evaluateInference;
  } });
  var Au = kn();
  Object.defineProperty(e, "readHybridStoredConfig", { enumerable: true, get: function() {
    return Au.readHybridStoredConfig;
  } });
  var ot = xn();
  Object.defineProperty(e, "preserveUnreadNames", { enumerable: true, get: function() {
    return ot.preserveUnreadNames;
  } });
  Object.defineProperty(e, "STORED_HEADER_VALUE_PLACEHOLDER", { enumerable: true, get: function() {
    return ot.STORED_HEADER_VALUE_PLACEHOLDER;
  } });
  Object.defineProperty(e, "withoutFormerNames", { enumerable: true, get: function() {
    return ot.withoutFormerNames;
  } });
  Object.defineProperty(e, "withoutNames", { enumerable: true, get: function() {
    return ot.withoutNames;
  } });
  Object.defineProperty(e, "withoutNulledNames", { enumerable: true, get: function() {
    return ot.withoutNulledNames;
  } });
  var Tu = (0, import_chunk_mmevw7ty.xCr)();
  Object.defineProperty(e, "credentialHeaderEntry", { enumerable: true, get: function() {
    return Tu.credentialHeaderEntry;
  } });
  var Cr = RGi();
  Object.defineProperty(e, "gatewayOverlayDropChecks", { enumerable: true, get: function() {
    return Cr.gatewayOverlayDropChecks;
  } });
  Object.defineProperty(e, "gatewayRefusedPathPrefixes", { enumerable: true, get: function() {
    return Cr.gatewayRefusedPathPrefixes;
  } });
  Object.defineProperty(e, "gatewayServableKeys", { enumerable: true, get: function() {
    return Cr.gatewayServableKeys;
  } });
  var qt = (0, import_chunk_mmevw7ty.Zvt)();
  Object.defineProperty(e, "NOT_ACCEPTED", { enumerable: true, get: function() {
    return qt.NOT_ACCEPTED;
  } });
  Object.defineProperty(e, "NOT_RECOGNIZED", { enumerable: true, get: function() {
    return qt.NOT_RECOGNIZED;
  } });
  Object.defineProperty(e, "reportableName", { enumerable: true, get: function() {
    return qt.reportableName;
  } });
  Object.defineProperty(e, "reportUnread", { enumerable: true, get: function() {
    return qt.reportUnread;
  } });
  var Iu = et();
  Object.defineProperty(e, "pruneSchema", { enumerable: true, get: function() {
    return Iu.pruneSchema;
  } });
  var it = (0, import_chunk_8xs3r4c8.wlt)();
  Object.defineProperty(e, "CLUSTER_REGISTRY", { enumerable: true, get: function() {
    return it.CLUSTER_REGISTRY;
  } });
  Object.defineProperty(e, "flattenAll", { enumerable: true, get: function() {
    return it.flattenAll;
  } });
  Object.defineProperty(e, "flattenInference", { enumerable: true, get: function() {
    return it.flattenInference;
  } });
  Object.defineProperty(e, "unflattenAll", { enumerable: true, get: function() {
    return it.unflattenAll;
  } });
  Object.defineProperty(e, "unflattenInference", { enumerable: true, get: function() {
    return it.unflattenInference;
  } });
  var st = Xn();
  Object.defineProperty(e, "asksForExecutionTarget", { enumerable: true, get: function() {
    return st.asksForExecutionTarget;
  } });
  Object.defineProperty(e, "asksForThirdPartyMode", { enumerable: true, get: function() {
    return st.asksForThirdPartyMode;
  } });
  Object.defineProperty(e, "holdCluster", { enumerable: true, get: function() {
    return st.holdCluster;
  } });
  Object.defineProperty(e, "materializeRaw", { enumerable: true, get: function() {
    return st.materializeRaw;
  } });
  Object.defineProperty(e, "mergeTiers", { enumerable: true, get: function() {
    return st.mergeTiers;
  } });
  var Jo = (0, import_chunk_8xs3r4c8.YEo)();
  Object.defineProperty(e, "CONFIG_DOCUMENT_META_NAMES", { enumerable: true, get: function() {
    return Jo.CONFIG_DOCUMENT_META_NAMES;
  } });
  Object.defineProperty(e, "normalizeVersionedConfig", { enumerable: true, get: function() {
    return Jo.normalize;
  } });
  var Z = nt();
  Object.defineProperty(e, "appliesUnder", { enumerable: true, get: function() {
    return Z.appliesUnder;
  } });
  Object.defineProperty(e, "controlTypeOf", { enumerable: true, get: function() {
    return Z.controlTypeOf;
  } });
  Object.defineProperty(e, "credentialKindsOffered", { enumerable: true, get: function() {
    return Z.credentialKindsOffered;
  } });
  Object.defineProperty(e, "FORM_FIELD_BY_ID", { enumerable: true, get: function() {
    return Z.FORM_FIELD_BY_ID;
  } });
  Object.defineProperty(e, "FORM_FIELDS", { enumerable: true, get: function() {
    return Z.FORM_FIELDS;
  } });
  Object.defineProperty(e, "formFieldsForReader", { enumerable: true, get: function() {
    return Z.formFieldsForReader;
  } });
  Object.defineProperty(e, "getFormField", { enumerable: true, get: function() {
    return Z.getFormField;
  } });
  Object.defineProperty(e, "isFieldRequired", { enumerable: true, get: function() {
    return Z.isFieldRequired;
  } });
  Object.defineProperty(e, "isFormFieldVisible", { enumerable: true, get: function() {
    return Z.isFormFieldVisible;
  } });
  Object.defineProperty(e, "itemColumnsOf", { enumerable: true, get: function() {
    return Z.itemColumnsOf;
  } });
  Object.defineProperty(e, "objectColumnsOf", { enumerable: true, get: function() {
    return Z.objectColumnsOf;
  } });
  Object.defineProperty(e, "optionValuesOf", { enumerable: true, get: function() {
    return Z.optionValuesOf;
  } });
  Object.defineProperty(e, "recordValueOptionsOf", { enumerable: true, get: function() {
    return Z.recordValueOptionsOf;
  } });
  Object.defineProperty(e, "runsSessionsOffDevice", { enumerable: true, get: function() {
    return Z.runsSessionsOffDevice;
  } });
  Object.defineProperty(e, "setInferenceCredentialKind", { enumerable: true, get: function() {
    return Z.setInferenceCredentialKind;
  } });
  Object.defineProperty(e, "setInferenceProvider", { enumerable: true, get: function() {
    return Z.setInferenceProvider;
  } });
  Object.defineProperty(e, "subFieldsOf", { enumerable: true, get: function() {
    return Z.subFieldsOf;
  } });
  Object.defineProperty(e, "targetCluster", { enumerable: true, get: function() {
    return Z.targetCluster;
  } });
  Object.defineProperty(e, "withoutInapplicable", { enumerable: true, get: function() {
    return Z.withoutInapplicable;
  } });
  var ze = (0, import_chunk_mmevw7ty.evo)();
  Object.defineProperty(e, "BANNER_DEFAULT_BACKGROUND_COLOR", { enumerable: true, get: function() {
    return ze.BANNER_DEFAULT_BACKGROUND_COLOR;
  } });
  Object.defineProperty(e, "BANNER_DEFAULT_TEXT_COLOR", { enumerable: true, get: function() {
    return ze.BANNER_DEFAULT_TEXT_COLOR;
  } });
  Object.defineProperty(e, "isValidBannerHexColor", { enumerable: true, get: function() {
    return ze.isValidBannerHexColor;
  } });
  Object.defineProperty(e, "isValidBannerLinkUrl", { enumerable: true, get: function() {
    return ze.isValidBannerLinkUrl;
  } });
  Object.defineProperty(e, "resolveBannerConfig", { enumerable: true, get: function() {
    return ze.resolveBannerConfig;
  } });
  Object.defineProperty(e, "toRenderableBannerConfig", { enumerable: true, get: function() {
    return ze.toRenderableBannerConfig;
  } });
  var Zt = qo();
  Object.defineProperty(e, "anchorSlug", { enumerable: true, get: function() {
    return Zt.anchorSlug;
  } });
  Object.defineProperty(e, "CONFIG_REFERENCE_URL", { enumerable: true, get: function() {
    return Zt.CONFIG_REFERENCE_URL;
  } });
  Object.defineProperty(e, "configReferenceUrl", { enumerable: true, get: function() {
    return Zt.configReferenceUrl;
  } });
  Object.defineProperty(e, "docsTableRows", { enumerable: true, get: function() {
    return Zt.docsTableRows;
  } });
  var Ye = Pt();
  Object.defineProperty(e, "CONFIGURATION_CATEGORIES", { enumerable: true, get: function() {
    return Ye.CONFIGURATION_CATEGORIES;
  } });
  Object.defineProperty(e, "isEmptyRowValue", { enumerable: true, get: function() {
    return Ye.isEmptyRowValue;
  } });
  Object.defineProperty(e, "isEmptySubValue", { enumerable: true, get: function() {
    return Ye.isEmptySubValue;
  } });
  Object.defineProperty(e, "isEmptyValue", { enumerable: true, get: function() {
    return Ye.isEmptyValue;
  } });
  Object.defineProperty(e, "missingSubFields", { enumerable: true, get: function() {
    return Ye.missingSubFields;
  } });
  Object.defineProperty(e, "stripHiddenSubFields", { enumerable: true, get: function() {
    return Ye.stripHiddenSubFields;
  } });
  var L = (0, import_chunk_mmevw7ty.Vk)();
  Object.defineProperty(e, "acceptsWildcard", { enumerable: true, get: function() {
    return L.acceptsWildcard;
  } });
  Object.defineProperty(e, "annotate", { enumerable: true, get: function() {
    return L.annotate;
  } });
  Object.defineProperty(e, "annotationsOf", { enumerable: true, get: function() {
    return L.annotationsOf;
  } });
  Object.defineProperty(e, "CONFIG_READERS", { enumerable: true, get: function() {
    return L.CONFIG_READERS;
  } });
  Object.defineProperty(e, "READER_FACTS", { enumerable: true, get: function() {
    return L.READER_FACTS;
  } });
  Object.defineProperty(e, "discriminatorArmsOf", { enumerable: true, get: function() {
    return L.discriminatorArmsOf;
  } });
  Object.defineProperty(e, "discriminatorKeyOf", { enumerable: true, get: function() {
    return L.discriminatorKeyOf;
  } });
  Object.defineProperty(e, "displayDefault", { enumerable: true, get: function() {
    return L.displayDefault;
  } });
  Object.defineProperty(e, "effectiveVisibility", { enumerable: true, get: function() {
    return L.effectiveVisibility;
  } });
  Object.defineProperty(e, "field", { enumerable: true, get: function() {
    return L.field;
  } });
  Object.defineProperty(e, "fieldMetaForNode", { enumerable: true, get: function() {
    return L.fieldMetaForNode;
  } });
  Object.defineProperty(e, "filePath", { enumerable: true, get: function() {
    return L.filePath;
  } });
  Object.defineProperty(e, "folderPath", { enumerable: true, get: function() {
    return L.folderPath;
  } });
  Object.defineProperty(e, "globPattern", { enumerable: true, get: function() {
    return L.globPattern;
  } });
  Object.defineProperty(e, "isHybridDerived", { enumerable: true, get: function() {
    return L.isHybridDerived;
  } });
  Object.defineProperty(e, "isHybridExcluded", { enumerable: true, get: function() {
    return L.isHybridExcluded;
  } });
  Object.defineProperty(e, "isHybridLoopback", { enumerable: true, get: function() {
    return L.isHybridLoopback;
  } });
  Object.defineProperty(e, "isReadBy", { enumerable: true, get: function() {
    return L.isReadBy;
  } });
  Object.defineProperty(e, "isReleasedFor3p", { enumerable: true, get: function() {
    return L.isReleasedFor3p;
  } });
  Object.defineProperty(e, "isRemoteOnly", { enumerable: true, get: function() {
    return L.isRemoteOnly;
  } });
  Object.defineProperty(e, "isUnreleasedMember", { enumerable: true, get: function() {
    return L.isUnreleasedMember;
  } });
  Object.defineProperty(e, "isUrlString", { enumerable: true, get: function() {
    return L.isUrlString;
  } });
  Object.defineProperty(e, "LONG_DESCRIPTION_MAX_LENGTH", { enumerable: true, get: function() {
    return L.LONG_DESCRIPTION_MAX_LENGTH;
  } });
  Object.defineProperty(e, "longDescription", { enumerable: true, get: function() {
    return L.longDescription;
  } });
  Object.defineProperty(e, "maxLengthOf", { enumerable: true, get: function() {
    return L.maxLengthOf;
  } });
  Object.defineProperty(e, "nestedColumnsOf", { enumerable: true, get: function() {
    return L.nestedColumnsOf;
  } });
  Object.defineProperty(e, "pathKindOf", { enumerable: true, get: function() {
    return L.pathKindOf;
  } });
  Object.defineProperty(e, "presetForItem", { enumerable: true, get: function() {
    return L.presetForItem;
  } });
  Object.defineProperty(e, "readersDeclared", { enumerable: true, get: function() {
    return L.readersDeclared;
  } });
  Object.defineProperty(e, "readersOf", { enumerable: true, get: function() {
    return L.readersOf;
  } });
  Object.defineProperty(e, "redact", { enumerable: true, get: function() {
    return L.redact;
  } });
  Object.defineProperty(e, "redactPolicyOf", { enumerable: true, get: function() {
    return L.redactPolicyOf;
  } });
  Object.defineProperty(e, "remotePolicyOf", { enumerable: true, get: function() {
    return L.remotePolicyOf;
  } });
  Object.defineProperty(e, "runtimeDefault", { enumerable: true, get: function() {
    return L.runtimeDefault;
  } });
  Object.defineProperty(e, "SHORT_DESCRIPTION_MAX_LENGTH", { enumerable: true, get: function() {
    return L.SHORT_DESCRIPTION_MAX_LENGTH;
  } });
  Object.defineProperty(e, "shortDescription", { enumerable: true, get: function() {
    return L.shortDescription;
  } });
  Object.defineProperty(e, "subfield", { enumerable: true, get: function() {
    return L.subfield;
  } });
  Object.defineProperty(e, "intakeReportKeepsValue", { enumerable: true, get: function() {
    return L.intakeReportKeepsValue;
  } });
  Object.defineProperty(e, "urlString", { enumerable: true, get: function() {
    return L.urlString;
  } });
  var We = (0, import_chunk_mmevw7ty.T4)();
  Object.defineProperty(e, "activeBootstrapOrigin", { enumerable: true, get: function() {
    return We.activeBootstrapOrigin;
  } });
  Object.defineProperty(e, "CREDENTIALED_URL_MESSAGE", { enumerable: true, get: function() {
    return We.CREDENTIALED_URL_MESSAGE;
  } });
  Object.defineProperty(e, "hasActiveBootstrap", { enumerable: true, get: function() {
    return We.hasActiveBootstrap;
  } });
  Object.defineProperty(e, "hasUserinfo", { enumerable: true, get: function() {
    return We.hasUserinfo;
  } });
  Object.defineProperty(e, "HELPER_SCRIPT_GROUP", { enumerable: true, get: function() {
    return We.HELPER_SCRIPT_GROUP;
  } });
  Object.defineProperty(e, "MODELS_GROUP", { enumerable: true, get: function() {
    return We.MODELS_GROUP;
  } });
  var Cu = (0, import_chunk_mmevw7ty.Ime)();
  Object.defineProperty(e, "providerHasDiscovery", { enumerable: true, get: function() {
    return Cu.providerHasDiscovery;
  } });
  var Xo = Yo();
  Object.defineProperty(e, "computeEgressRequirements", { enumerable: true, get: function() {
    return Xo.computeEgressRequirements;
  } });
  Object.defineProperty(e, "egressRequirementLabel", { enumerable: true, get: function() {
    return Xo.egressRequirementLabel;
  } });
  var De = (0, import_chunk_t2enjxg6.XEo)();
  Object.defineProperty(e, "EGRESS_SERVICES", { enumerable: true, get: function() {
    return De.EGRESS_SERVICES;
  } });
  Object.defineProperty(e, "egressServiceKeys", { enumerable: true, get: function() {
    return De.egressServiceKeys;
  } });
  Object.defineProperty(e, "enabledServicesFromConfig", { enumerable: true, get: function() {
    return De.enabledServicesFromConfig;
  } });
  Object.defineProperty(e, "hostsForService", { enumerable: true, get: function() {
    return De.hostsForService;
  } });
  Object.defineProperty(e, "rendererEgressRules", { enumerable: true, get: function() {
    return De.rendererEgressRules;
  } });
  Object.defineProperty(e, "subprocessHostsForServices", { enumerable: true, get: function() {
    return De.subprocessHostsForServices;
  } });
  Object.defineProperty(e, "resolveEndpoints", { enumerable: true, get: function() {
    return De.resolveEndpoints;
  } });
  Wo((0, import_chunk_mmevw7ty.dX)(), e);
  Wo((0, import_chunk_mmevw7ty.HGi)(), e);
  var Ae = (0, import_chunk_mmevw7ty.gGt)();
  Object.defineProperty(e, "DEFAULT_INFERENCE_PROVIDER", { enumerable: true, get: function() {
    return Ae.DEFAULT_INFERENCE_PROVIDER;
  } });
  Object.defineProperty(e, "getProviderLabel", { enumerable: true, get: function() {
    return Ae.getProviderLabel;
  } });
  Object.defineProperty(e, "INFERENCE_CREDENTIAL_KINDS", { enumerable: true, get: function() {
    return Ae.INFERENCE_CREDENTIAL_KINDS;
  } });
  Object.defineProperty(e, "isAnthropicOAuthToken", { enumerable: true, get: function() {
    return Ae.isAnthropicOAuthToken;
  } });
  Object.defineProperty(e, "KIND_PRECEDENCE", { enumerable: true, get: function() {
    return Ae.KIND_PRECEDENCE;
  } });
  Object.defineProperty(e, "PROVIDER_DISPLAY", { enumerable: true, get: function() {
    return Ae.PROVIDER_DISPLAY;
  } });
  Object.defineProperty(e, "PROVIDERS", { enumerable: true, get: function() {
    return Ae.PROVIDERS;
  } });
  Object.defineProperty(e, "SIGN_IN_CREDENTIAL_KINDS", { enumerable: true, get: function() {
    return Ae.SIGN_IN_CREDENTIAL_KINDS;
  } });
  var Te = (0, import_chunk_mmevw7ty.RCr)();
  Object.defineProperty(e, "isApprovalRequiredToolPolicy", { enumerable: true, get: function() {
    return Te.isApprovalRequiredToolPolicy;
  } });
  Object.defineProperty(e, "lookupMcpToolPolicy", { enumerable: true, get: function() {
    return Te.lookupMcpToolPolicy;
  } });
  Object.defineProperty(e, "managedToolPatternMatches", { enumerable: true, get: function() {
    return Te.managedToolPatternMatches;
  } });
  Object.defineProperty(e, "pluginMcpRulePrefix", { enumerable: true, get: function() {
    return Te.pluginMcpRulePrefix;
  } });
  Object.defineProperty(e, "strictestToolPolicy", { enumerable: true, get: function() {
    return Te.strictestToolPolicy;
  } });
  Object.defineProperty(e, "TOOL_POLICY_EDITOR_VALUES", { enumerable: true, get: function() {
    return Te.TOOL_POLICY_EDITOR_VALUES;
  } });
  Object.defineProperty(e, "TOOL_POLICY_VALUES", { enumerable: true, get: function() {
    return Te.TOOL_POLICY_VALUES;
  } });
  Object.defineProperty(e, "toolPolicyKeyGlobMatch", { enumerable: true, get: function() {
    return Te.toolPolicyKeyGlobMatch;
  } });
  var se = (0, import_chunk_mmevw7ty.Lwe)();
  Object.defineProperty(e, "applyLegacy", { enumerable: true, get: function() {
    return se.applyLegacy;
  } });
  Object.defineProperty(e, "BATCH_2026_09", { enumerable: true, get: function() {
    return se.BATCH_2026_09;
  } });
  Object.defineProperty(e, "DEPRECATION_FINAL_NOTICE_MS", { enumerable: true, get: function() {
    return se.DEPRECATION_FINAL_NOTICE_MS;
  } });
  Object.defineProperty(e, "deprecationApplies", { enumerable: true, get: function() {
    return se.deprecationApplies;
  } });
  Object.defineProperty(e, "deprecationHit", { enumerable: true, get: function() {
    return se.deprecationHit;
  } });
  Object.defineProperty(e, "deprecationInstant", { enumerable: true, get: function() {
    return se.deprecationInstant;
  } });
  Object.defineProperty(e, "deprecationPhase", { enumerable: true, get: function() {
    return se.deprecationPhase;
  } });
  Object.defineProperty(e, "describeDeprecation", { enumerable: true, get: function() {
    return se.describeDeprecation;
  } });
  Object.defineProperty(e, "formatDeprecationDate", { enumerable: true, get: function() {
    return se.formatDeprecationDate;
  } });
  Object.defineProperty(e, "isDeprecationHonoured", { enumerable: true, get: function() {
    return se.isDeprecationHonoured;
  } });
  Object.defineProperty(e, "nextDeprecationPhaseChange", { enumerable: true, get: function() {
    return se.nextDeprecationPhaseChange;
  } });
  Object.defineProperty(e, "setDeprecationClock", { enumerable: true, get: function() {
    return se.setDeprecationClock;
  } });
});
