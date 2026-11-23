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
var chunk_8xs3r4c8_exports = {};
__export(chunk_8xs3r4c8_exports, {
  ILe: () => ILe,
  REs: () => REs,
  YEo: () => YEo,
  _un: () => _un,
  wlt: () => wlt
});
module.exports = __toCommonJS(chunk_8xs3r4c8_exports);
var import_chunk_mmevw7ty = require("/$bunfs/root/chunk-mmevw7ty.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Re = (0, import_chunk_w1d7ygsk.V)(function(me) {
  var J, oe, ie;
  Object.defineProperty(me, "__esModule", { value: true });
  me.REDACTED = void 0;
  me.isSensitiveDropped = ae;
  me.isRedactedInExports = en;
  me.resolveRedactPolicy = ce;
  me.redactedSnapshot = sn;
  me.reducedSnapshot = dn;
  me.redactSensitiveKeys = an;
  var W = (0, import_chunk_mmevw7ty.dX)(), I = (0, import_chunk_mmevw7ty.Vk)(), Ee = (0, import_chunk_mmevw7ty.yun)(), N = (0, import_chunk_mmevw7ty.ZYe)();
  function ae(e) {
    let n = I.redactPolicyOf(N.FlatManagedConfig.shape[e]);
    return n === "drop" || n === "presence";
  }
  function en(e) {
    return ae(e) || N.getFieldMeta(e).multiline === true;
  }
  var nn = ((ie = (oe = (J = globalThis.crypto) === null || J === void 0 ? void 0 : J.randomUUID) === null || oe === void 0 ? void 0 : oe.call(J)) !== null && ie !== void 0 ? ie : String(Math.random())) + ":", tn = { [I.ZodKind.ZodBoolean]: (e) => typeof e === "boolean", [I.ZodKind.ZodNumber]: (e) => typeof e === "number", [I.ZodKind.ZodEnum]: (e, n) => {
    var t;
    return typeof e === "string" && ((t = I.enumOptionsOf(n)) === null || t === void 0 ? void 0 : t.includes(e)) === true;
  } };
  function be(e) {
    let n = I.zodKind(I.unwrapZod(e));
    return n && tn[n];
  }
  function ce(e) {
    var n;
    let t = N.FlatManagedConfig.shape[e];
    return (n = I.redactPolicyOf(t)) !== null && n !== void 0 ? n : be(t) ? "keep" : "presence";
  }
  function he(e, n) {
    if (Array.isArray(e)) return { count: e.length };
    if (n && e && typeof e === "object") return { keys: Object.keys(e) };
    return e !== null && e !== void 0;
  }
  function rn(e) {
    let n = 0;
    for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n = n & n;
    return ((n & 4294967295) >>> 0).toString();
  }
  var se = (e) => rn(nn + (typeof e === "string" ? e : JSON.stringify(e))), de = (e, n) => {
    let t = typeof e === "string" ? Ee.parseBuiltinRule(e) : void 0;
    if (t === void 0) return `#${String(n + 1)}`;
    return t.content === void 0 ? t.tool : `${t.tool}(#${String(n + 1)})`;
  };
  function on(e, n) {
    var t;
    switch (e) {
      case "keep":
        return n;
      case "hash":
        return Array.isArray(n) ? n.map(se) : se(n);
      case "toolRules":
        if (Array.isArray(n)) return n.map(de);
        if (n && typeof n === "object") return Object.fromEntries(Object.entries(n).map(([o, r], s) => [de(o, s), r === "allow" || r === "ask" ? r : se(r)]));
        return de(n, 0);
      case "hostname":
        return Array.isArray(n) ? n.map((o) => {
          var r;
          return (r = W.safeHostname(o)) !== null && r !== void 0 ? r : null;
        }) : (t = W.safeHostname(n)) !== null && t !== void 0 ? t : null;
      case "presence":
        return he(n, true);
      case "drop":
        return;
    }
  }
  function Oe(e, n) {
    let t = {};
    for (let o of N.allKeys) {
      let r = e[o];
      if (r === void 0) continue;
      let s = n(o, r);
      if (s !== void 0) t[o] = s;
    }
    return t;
  }
  function sn(e) {
    return Oe(e, (n, t) => on(ce(n), t));
  }
  function dn(e) {
    return Oe(e, (n, t) => {
      var o;
      let r = ce(n);
      if (r === "drop") return;
      let s = N.FlatManagedConfig.shape[n];
      if (r === "keep" && ((o = be(s)) === null || o === void 0 ? void 0 : o(t, s))) return t;
      return he(t, false);
    });
  }
  me.REDACTED = "[redacted]";
  function an(e) {
    let n = { ...e };
    for (let t of N.allKeys) {
      let o = e[t];
      if (o === void 0 || !ae(t)) continue;
      n[t] = Array.isArray(o) ? [me.REDACTED] : o && typeof o === "object" ? Object.fromEntries(Object.keys(o).map((r) => [r, me.REDACTED])) : me.REDACTED;
    }
    return n;
  }
});
var ILe = (0, import_chunk_w1d7ygsk.V)(function(a) {
  var _n = a && a.__createBinding || (Object.create ? function(e, n, t, o) {
    if (o === void 0) o = t;
    var r = Object.getOwnPropertyDescriptor(n, t);
    if (!r || ("get" in r ? !n.__esModule : r.writable || r.configurable)) r = { enumerable: true, get: function() {
      return n[t];
    } };
    Object.defineProperty(e, o, r);
  } : function(e, n, t, o) {
    if (o === void 0) o = t;
    e[o] = n[t];
  }), C = a && a.__exportStar || function(e, n) {
    for (var t in e) if (t !== "default" && !Object.prototype.hasOwnProperty.call(n, t)) _n(n, e, t);
  };
  Object.defineProperty(a, "__esModule", { value: true });
  a.MODELS_GROUP = a.HELPER_SCRIPT_GROUP = a.hasActiveBootstrap = a.credentialKindOf = a.COWORK_3P_DOCS_BASE = a.canonicalJson = a.providerHasDiscovery = a.providerCliFlagEnv = a.PROVIDER_SELECTOR_ENV_FLAGS = a.PROVIDER_CLI_FLAG = a.kindSupportsDiscovery = a.isBedrockFamily = a.CREDENTIAL_KINDS_FOR_PROVIDER = a.PROVIDERS = a.PROVIDER_DISPLAY = a.KIND_PRECEDENCE = a.INFERENCE_CREDENTIAL_KINDS = a.getProviderLabel = a.DEFAULT_INFERENCE_PROVIDER = a.unwrapZod = void 0;
  var pt = (0, import_chunk_mmevw7ty.NZ)(), vn = (0, import_chunk_mmevw7ty.Vk)();
  Object.defineProperty(a, "unwrapZod", { enumerable: true, get: function() {
    return vn.unwrapZod;
  } });
  var w = (0, import_chunk_mmevw7ty.gGt)();
  Object.defineProperty(a, "DEFAULT_INFERENCE_PROVIDER", { enumerable: true, get: function() {
    return w.DEFAULT_INFERENCE_PROVIDER;
  } });
  Object.defineProperty(a, "getProviderLabel", { enumerable: true, get: function() {
    return w.getProviderLabel;
  } });
  Object.defineProperty(a, "INFERENCE_CREDENTIAL_KINDS", { enumerable: true, get: function() {
    return w.INFERENCE_CREDENTIAL_KINDS;
  } });
  Object.defineProperty(a, "KIND_PRECEDENCE", { enumerable: true, get: function() {
    return w.KIND_PRECEDENCE;
  } });
  Object.defineProperty(a, "PROVIDER_DISPLAY", { enumerable: true, get: function() {
    return w.PROVIDER_DISPLAY;
  } });
  Object.defineProperty(a, "PROVIDERS", { enumerable: true, get: function() {
    return w.PROVIDERS;
  } });
  var U = (0, import_chunk_mmevw7ty.Ime)();
  Object.defineProperty(a, "CREDENTIAL_KINDS_FOR_PROVIDER", { enumerable: true, get: function() {
    return U.CREDENTIAL_KINDS_FOR_PROVIDER;
  } });
  Object.defineProperty(a, "isBedrockFamily", { enumerable: true, get: function() {
    return U.isBedrockFamily;
  } });
  Object.defineProperty(a, "kindSupportsDiscovery", { enumerable: true, get: function() {
    return U.kindSupportsDiscovery;
  } });
  Object.defineProperty(a, "PROVIDER_CLI_FLAG", { enumerable: true, get: function() {
    return U.PROVIDER_CLI_FLAG;
  } });
  Object.defineProperty(a, "PROVIDER_SELECTOR_ENV_FLAGS", { enumerable: true, get: function() {
    return U.PROVIDER_SELECTOR_ENV_FLAGS;
  } });
  Object.defineProperty(a, "providerCliFlagEnv", { enumerable: true, get: function() {
    return U.providerCliFlagEnv;
  } });
  Object.defineProperty(a, "providerHasDiscovery", { enumerable: true, get: function() {
    return U.providerHasDiscovery;
  } });
  var q = (0, import_chunk_mmevw7ty.T4)();
  Object.defineProperty(a, "canonicalJson", { enumerable: true, get: function() {
    return q.canonicalJson;
  } });
  Object.defineProperty(a, "COWORK_3P_DOCS_BASE", { enumerable: true, get: function() {
    return q.COWORK_3P_DOCS_BASE;
  } });
  Object.defineProperty(a, "credentialKindOf", { enumerable: true, get: function() {
    return q.credentialKindOf;
  } });
  Object.defineProperty(a, "hasActiveBootstrap", { enumerable: true, get: function() {
    return q.hasActiveBootstrap;
  } });
  Object.defineProperty(a, "HELPER_SCRIPT_GROUP", { enumerable: true, get: function() {
    return q.HELPER_SCRIPT_GROUP;
  } });
  Object.defineProperty(a, "MODELS_GROUP", { enumerable: true, get: function() {
    return q.MODELS_GROUP;
  } });
  C((0, import_chunk_mmevw7ty.klt)(), a);
  C((0, import_chunk_mmevw7ty.Cjn)(), a);
  C((0, import_chunk_mmevw7ty.OGi)(), a);
  C((0, import_chunk_mmevw7ty.IGi)(), a);
  C((0, import_chunk_mmevw7ty.QEo)(), a);
  C((0, import_chunk_mmevw7ty.PEs)(), a);
  C((0, import_chunk_mmevw7ty.MGi)(), a);
  C((0, import_chunk_mmevw7ty.DGi)(), a);
  C((0, import_chunk_mmevw7ty.yun)(), a);
  C((0, import_chunk_mmevw7ty.ZEo)(), a);
  C((0, import_chunk_mmevw7ty.LGi)(), a);
  C((0, import_chunk_mmevw7ty.NGi)(), a);
  C((0, import_chunk_mmevw7ty.Sun)(), a);
  C((0, import_chunk_mmevw7ty.ZYe)(), a);
  C((0, import_chunk_mmevw7ty.OEs)(), a);
  C((0, import_chunk_mmevw7ty.PCr)(), a);
  C(Re(), a);
});
var wlt = (0, import_chunk_w1d7ygsk.V)(function(Ie) {
  Object.defineProperty(Ie, "__esModule", { value: true });
  Ie.CLUSTER_NAMES = Ie.CLUSTER_REGISTRY = void 0;
  Ie.unflattenInference = le;
  Ie.flattenInference = Ae;
  Ie.getAtPath = Pe;
  Ie.setAtPath = ue;
  Ie.flattenAll = gn;
  Ie.unflattenAll = Sn;
  var c = (0, import_chunk_mmevw7ty.Vk)(), B = (0, import_chunk_mmevw7ty.Ime)(), ge = (0, import_chunk_mmevw7ty.gGt)(), k = ILe();
  function X(e) {
    var n, t, o;
    return (t = (n = c.fieldMetaForNode(e)) === null || n === void 0 ? void 0 : n.flatKey) !== null && t !== void 0 ? t : (o = c.subfieldMetaForNode(e)) === null || o === void 0 ? void 0 : o.flatKey;
  }
  var Se = (e, n, t) => {
    var o, r;
    let s = (o = ge.legacyCredentialKindAlias(n, t)) !== null && o !== void 0 ? o : t;
    return (r = c.discriminatorArmsOf(e.shape.credential).find((i) => i.id === s)) === null || r === void 0 ? void 0 : r.schema;
  }, En = (e) => {
    var n;
    return (n = e.inferenceCredentialKind) !== null && n !== void 0 ? n : k.deriveInferenceCredentialKind(e);
  };
  function H(e, n) {
    let t = {};
    for (let [o, r] of Object.entries(e.shape)) {
      let s = X(r);
      if (s) {
        let y = n[s];
        if (y !== void 0) t[o] = y;
        continue;
      }
      let i = c.literalValueOf(r);
      if (i !== void 0) {
        t[o] = i;
        continue;
      }
      let d = c.unwrapZod(r);
      if (c.zodKind(d) === c.ZodKind.ZodObject) {
        let y = H(d, n);
        if (Object.keys(y).length > 0) t[o] = y;
      }
    }
    return t;
  }
  function le(e) {
    let n = e.inferenceProvider;
    if (n === void 0) return;
    let t = B.PROVIDER_ARMS.get(n);
    if (!t) return;
    let o = H(t, e), r = En(e);
    if (r !== void 0) {
      let s = Se(t, n, r);
      if (s) o.credential = H(s, e);
    }
    return o;
  }
  function z(e, n, t) {
    for (let [o, r] of Object.entries(e.shape)) {
      let s = n[o];
      if (s === void 0) continue;
      let i = X(r);
      if (i) {
        t[i] = s;
        continue;
      }
      let d = c.unwrapZod(r);
      if (c.zodKind(d) === c.ZodKind.ZodObject) z(d, s, t);
    }
  }
  function Ae(e) {
    var n;
    let t = { inferenceProvider: e.provider, inferenceCredentialKind: (n = e.credential) === null || n === void 0 ? void 0 : n.kind }, o = B.PROVIDER_ARMS.get(e.provider);
    if (o) {
      if (z(o, e, t), e.credential) {
        let r = Se(o, e.provider, e.credential.kind);
        if (r) z(r, e.credential, t);
      }
    }
    return c.dropUndefined(t);
  }
  function Ce(e, n = []) {
    return Object.entries(e.shape).flatMap(([t, o]) => {
      var r;
      let s = [...n, t], i = (r = c.fieldMetaForNode(o)) === null || r === void 0 ? void 0 : r.flatKey;
      if (i) return [[s, i]];
      let d = c.unwrapZod(o);
      if (c.zodKind(d) === c.ZodKind.ZodObject) return Ce(d, s);
      throw Error(`simpleCluster: no flatKey on .${s.join(".")}`);
    });
  }
  function Pe(e, n) {
    let t = e;
    for (let o of n) {
      if (t === null || typeof t !== "object") return;
      t = t[o];
    }
    return t;
  }
  function ue(e, n, t) {
    let [o, ...r] = n;
    if (o === void 0) return e === void 0 ? void 0 : { ...e };
    let s = r.length === 0 ? t : ue(e === null || e === void 0 ? void 0 : e[o], r, t), i = c.dropUndefined({ ...e, [o]: s });
    return Object.keys(i).length === 0 ? void 0 : i;
  }
  var bn = (e) => {
    let n = Ce(e);
    return { schema: e, propMap: Object.fromEntries(n.map(([t, o]) => [t.join("."), o])), flatten: (t) => {
      let o = {};
      for (let [r, s] of n) {
        let i = Pe(t, r);
        if (i !== void 0) o[s] = i;
      }
      return o;
    }, unflatten: (t) => {
      let o;
      for (let [r, s] of n) {
        let i = t[s];
        if (i !== void 0) o = ue(o, r, i);
      }
      return o;
    } };
  }, hn = (e) => {
    let n = c.discriminatorKeyOf(e), t = Object.entries(k.DISCRIMINATORS).find(([, o]) => o.nestedPath.at(-1) === n);
    if (t === void 0) throw Error(`unionCluster: no selector discriminates "${n}"`);
    return t[0];
  }, On = (e, n) => {
    var t, o, r;
    let s = n.shape.credential, i = hn(s), d = c.discriminatorArmsOf(s).filter((_) => _.schema !== void 0), y = (_) => {
      var l;
      return (l = d.find((E) => E.id === _)) === null || l === void 0 ? void 0 : l.schema;
    }, v = /* @__PURE__ */ new Map(), g = (_) => {
      var l;
      return ((l = k.FLAT_KEY_TO_NESTED_PATH.get(_)) === null || l === void 0 ? void 0 : l[0]) === e;
    };
    for (let [_, l] of Object.entries(n.shape)) {
      let E = X(l);
      if (E !== void 0) v.set(E, { path: [_], own: g(E) });
    }
    v.set(i, { path: ["credential", c.discriminatorKeyOf(s)], own: false });
    for (let _ of d) for (let [l, E] of Object.entries(_.schema.shape)) {
      let h = X(E);
      if (h === void 0) continue;
      let S = (t = v.get(h)) !== null && t !== void 0 ? t : { path: ["credential", l], kinds: [], own: g(h) };
      (o = S.kinds) === null || o === void 0 || o.push(_.id), v.set(h, S);
    }
    let u = (r = Object.entries(k.DISCRIMINATORS).find(([, _]) => _.discriminates === "provider")) === null || r === void 0 ? void 0 : r[0], R = (_) => {
      let l = H(n, _), E = _[i];
      if (E !== void 0) {
        let h = y(E);
        if (h) l.credential = H(h, _);
        else if (u === void 0 || _[u] === void 0) l.credential = { kind: E };
      }
      return l;
    };
    return { schema: n, leaves: v, credentialKinds: d.map((_) => _.id), rebuild: R, unflatten: (_) => [...v].some(([l, E]) => E.own && _[l] !== void 0) ? R(_) : void 0, flatten: (_) => {
      let l = _, E = l.credential, h = { [i]: E === null || E === void 0 ? void 0 : E.kind };
      if (z(n, l, h), E !== void 0) {
        let S = E.kind === void 0 ? void 0 : y(E.kind);
        for (let j of S ? [S] : d.map((b) => b.schema)) z(j, E, h);
      }
      return c.dropUndefined(h);
    }, propMap: Object.fromEntries([...v].map(([_, l]) => [l.path.join("."), _])) };
  }, mn = { schema: B.InferenceConfig, flatten: Ae, unflatten: le, rebuild: le };
  Ie.CLUSTER_REGISTRY = Object.fromEntries(Object.entries(k.ManagedConfig.shape).flatMap(([e, n]) => {
    if (c.fieldMetaForNode(n)) return [];
    if (e === "inference") return [[e, mn]];
    let t = c.unwrapZod(n);
    if (c.zodKind(t) !== c.ZodKind.ZodObject) return [];
    let o = t.shape;
    if (o.credential !== void 0 && c.zodKind(c.unwrapZod(o.credential)) === c.ZodKind.ZodDiscriminatedUnion) return [[e, On(e, t)]];
    return [[e, bn(t)]];
  }));
  Ie.CLUSTER_NAMES = Object.keys(Ie.CLUSTER_REGISTRY);
  var Rn = new Set([...k.FLAT_KEY_TO_NESTED_PATH].filter(([, e]) => e[0] !== void 0 && e[0] in Ie.CLUSTER_REGISTRY).map(([e]) => e));
  function gn(e) {
    let n = {};
    for (let [t, o] of Object.entries(e)) {
      if (o === void 0) continue;
      let r = Ie.CLUSTER_REGISTRY[t];
      if (r) Object.assign(n, r.flatten(o));
      else n[t] = o;
    }
    return n;
  }
  function Sn(e) {
    let n = {};
    for (let t of Ie.CLUSTER_NAMES) {
      let o = Ie.CLUSTER_REGISTRY[t].unflatten(e);
      if (o !== void 0) n[t] = o;
    }
    for (let [t, o] of Object.entries(e)) {
      if (o === void 0 || Rn.has(t)) continue;
      n[t] = o;
    }
    return n;
  }
});
var REs = (0, import_chunk_w1d7ygsk.V)(function(ke) {
  Object.defineProperty(ke, "__esModule", { value: true });
  ke.ABSENT_INFERENCE_REASONS = void 0;
  ke.evaluateInference = Fn;
  ke.droppedKeyIssue = Ne;
  ke.describeDroppedKey = Ln;
  var F = (0, import_chunk_mmevw7ty.Vk)(), x = (0, import_chunk_mmevw7ty.T4)(), Ke = wlt(), m = ILe();
  ke.ABSENT_INFERENCE_REASONS = /* @__PURE__ */ new Set(["missing", "no_credential"]);
  var Nn = new Set([...m.INFERENCE_LEAF_MEMBERSHIP.keys()].filter((e) => F.isUrlString(m.FlatManagedConfig.shape[e]) || m.getFieldMeta(e).selectsConnection === true));
  function kn(e, n, t, o) {
    var r, s;
    if (!Nn.has(e)) return false;
    let i = (s = (r = m.tryGetFieldMeta(e)) === null || r === void 0 ? void 0 : r.platformVariant) === null || s === void 0 ? void 0 : s.platform;
    if (i !== void 0 && o !== void 0 && i !== o) return false;
    let d = m.INFERENCE_LEAF_MEMBERSHIP.get(e);
    return d !== void 0 && d.providers.includes(n) && (d.credentialKinds.length === 0 || t !== void 0 && d.credentialKinds.includes(t));
  }
  function Fn(e, n = {}) {
    var t, o, r, s;
    let i = (t = n.keyedErrors) !== null && t !== void 0 ? t : [], d = e.inference, y = n.remoteApplied === false && x.hasActiveBootstrap(e);
    if (y && !d) return;
    let v = [], g = (b) => {
      let A = Ne(b, n);
      if (A && !v.some((K) => K.key === b)) v.push(A);
      return A !== void 0;
    }, u = (b, A, K = "missing") => {
      if (!g(b)) v.push({ key: b, reason: K, msg: A });
    }, R = ((o = e.bootstrap) === null || o === void 0 ? void 0 : o.enabled) !== false && !x.hasActiveBootstrap(e) && i.some((b) => b.key === "bootstrapUrl" && !b.cluster);
    if (!d) {
      if (R) g("bootstrapUrl");
      if (x.hasActiveBootstrap(e) && n.providerOptional !== true) u("inferenceProvider", "inferenceProvider is not set");
      else g("inferenceProvider");
      return v.length > 0 ? je(void 0, v) : void 0;
    }
    let { provider: _ } = d, l = (r = d.credential) === null || r === void 0 ? void 0 : r.kind, E = Ke.flattenInference(d), h = () => {
      let b = v;
      if (R && v.some((A) => ke.ABSENT_INFERENCE_REASONS.has(A.reason))) {
        let A = i.find((K) => K.key === "bootstrapUrl" && !K.cluster);
        b = [...A ? [{ key: "bootstrapUrl", reason: "invalid", msg: pe("bootstrapUrl", A, n) }] : [], ...v.filter((K) => !ke.ABSENT_INFERENCE_REASONS.has(K.reason))];
      }
      return b.length > 0 ? je(_, b) : { ok: true, provider: _, kind: l };
    };
    if (!y) {
      for (let b of m.requiredProviderLeaves(_)) if (!m.isFieldSet(E[b])) u(b, `${b} is not set`);
    }
    for (let b of i) if (!m.isFieldSet(E[b.key]) && kn(b.key, _, l, n.platform)) g(b.key);
    if (y) return h();
    if (l === void 0) {
      for (let b of i) {
        let A = m.INFERENCE_LEAF_MEMBERSHIP.get(b.key);
        if (A !== void 0 && A.credentialKinds.length > 0 && A.providers.includes(_) && !m.isFieldSet(E[b.key])) g(b.key);
      }
      return u("inferenceCredentialKind", `no credential configured for provider "${_}": set inferenceCredentialKind or one of the credential fields`, "no_credential"), h();
    }
    let S = m.credentialSpecCell(_, l);
    if (!S) return v.push({ key: "inferenceCredentialKind", reason: "unsupported_kind", msg: `inferenceCredentialKind "${l}" is not supported for provider "${_}"` }), h();
    let j = [...S.requiredLeaves, ...(s = S.extraRequiredLeaves) !== null && s !== void 0 ? s : []].filter((b) => !m.isFieldSet(E[b]) && !g(b));
    if (j.length > 0) {
      let b = `inferenceCredentialKind is "${l}" but ${j.join(", ")} ${j.length > 1 ? "are" : "is"} not set`;
      for (let A of j) v.push({ key: A, reason: "missing", msg: b });
    }
    return h();
  }
  function je(e, n) {
    return { ok: false, provider: e, issues: n, msg: [...new Set(n.map((t) => t.msg))].join("; ") };
  }
  function Ne(e, n = {}) {
    var t, o;
    let r = ((t = n.keyedErrors) !== null && t !== void 0 ? t : []).filter((i) => i.key === e && !F.intakeReportKeepsValue(i)), s = (o = r.find((i) => !i.cluster)) !== null && o !== void 0 ? o : r[0];
    return s && { key: e, reason: "invalid", msg: pe(e, s, n) };
  }
  function Ln(e, n = {}) {
    return pe(e.key, e, n);
  }
  function pe(e, n, t) {
    var o, r, s;
    if (n.kind === "unknown") return `${e} (not a recognized key)`;
    let i = n.cluster ? "cluster failed to parse" : "set but invalid";
    if (t.quoteReasons === false) return `${e} (${i})`;
    let d = ((o = n.issues) === null || o === void 0 ? void 0 : o.length) ? n.issues.map((u) => `${u.path.length > 0 ? `${u.path.join(".")}: ` : ""}${u.message}`).join("; ") : n.msg, y = /(?:^|": |; )(?:\.: )?invalid_type\b/.test(n.msg) || ((s = (r = n.issues) === null || r === void 0 ? void 0 : r.some((u) => u.path.length === 0 && /expected object/.test(u.message))) !== null && s !== void 0 ? s : false), g = e in m.FlatManagedConfig.shape && F.zodKind(F.unwrapZod(m.FlatManagedConfig.shape[e])) === F.ZodKind.ZodObject && y ? " \u2014 the value must be a single JSON object string, not separate dotted keys" : "";
    return `${e} (${i}: ${d}${g})`;
  }
});
var Le = (0, import_chunk_w1d7ygsk.V)(function(Fe) {
  Object.defineProperty(Fe, "__esModule", { value: true });
  Fe.normalize = Un;
  function Un(e, n) {
    return e;
  }
});
var qe = (0, import_chunk_w1d7ygsk.V)(function(we) {
  Object.defineProperty(we, "__esModule", { value: true });
  we.normalize = $n;
  var Z = wlt(), Me = (0, import_chunk_mmevw7ty.Sun)(), Te = (0, import_chunk_mmevw7ty.Zvt)(), De = (e) => e !== null && typeof e === "object" && !Array.isArray(e), Ue = (e) => Array.isArray(e) ? "array" : e === null ? "null" : typeof e;
  function qn(e, n, t) {
    var o;
    let r = new Set(Object.keys((o = Z.CLUSTER_REGISTRY[e].propMap) !== null && o !== void 0 ? o : {}).filter((i) => i.includes(".")).map((i) => i.slice(0, i.indexOf("."))));
    if (r.size === 0) return n;
    let s = { ...n };
    for (let i of r) {
      let d = s[i];
      if (d === void 0 || d === null) continue;
      if (typeof d === "string") try {
        d = JSON.parse(d);
      } catch (y) {
      }
      if (De(d)) {
        s[i] = d;
        continue;
      }
      t.push(`Failed to parse bootstrap cluster "${e}.${i}": expected object, got ${Ue(d)}`), delete s[i];
    }
    return s;
  }
  function $n(e, n, t, o = []) {
    let r = { ...e }, s = [];
    for (let i of Z.CLUSTER_NAMES) {
      let d = r[i];
      if (delete r[i], d === void 0 || d === null) continue;
      if (typeof d === "string") try {
        d = JSON.parse(d);
      } catch (y) {
      }
      if (!De(d)) {
        n.push(`Failed to parse bootstrap cluster "${i}": expected object, got ${Ue(d)}`);
        continue;
      }
      s.push(i), d = qn(i, d, n), Te.reportUnread(i, Me.ManagedConfig.shape[i], d, (y, v, g) => o.push(g), { stopAtKeys: true });
      try {
        Object.assign(r, Z.CLUSTER_REGISTRY[i].flatten(d));
      } catch (y) {
        let v = y instanceof Error ? y.message : String(y);
        n.push(`Failed to parse bootstrap cluster "${i}": ${v}`), t === null || t === void 0 || t("bootstrap nested cluster flatten threw; cluster dropped", { key: i, message: v });
      }
    }
    return t === null || t === void 0 || t("bootstrap intake normalized v2 nested response", { clusters: s }), r;
  }
});
var YEo = (0, import_chunk_w1d7ygsk.V)(function(P) {
  var xn = P && P.__createBinding || (Object.create ? function(e, n, t, o) {
    if (o === void 0) o = t;
    var r = Object.getOwnPropertyDescriptor(n, t);
    if (!r || ("get" in r ? !n.__esModule : r.writable || r.configurable)) r = { enumerable: true, get: function() {
      return n[t];
    } };
    Object.defineProperty(e, o, r);
  } : function(e, n, t, o) {
    if (o === void 0) o = t;
    e[o] = n[t];
  }), Vn = P && P.__setModuleDefault || (Object.create ? function(e, n) {
    Object.defineProperty(e, "default", { enumerable: true, value: n });
  } : function(e, n) {
    e.default = n;
  }), $e = P && P.__importStar || /* @__PURE__ */ (function() {
    var e = function(n) {
      return e = Object.getOwnPropertyNames || function(t) {
        var o = [];
        for (var r in t) if (Object.prototype.hasOwnProperty.call(t, r)) o[o.length] = r;
        return o;
      }, e(n);
    };
    return function(n) {
      if (n && n.__esModule) return n;
      var t = {};
      if (n != null) {
        for (var o = e(n), r = 0; r < o.length; r++) if (o[r] !== "default") xn(t, n, o[r]);
      }
      return Vn(t, n), t;
    };
  })();
  Object.defineProperty(P, "__esModule", { value: true });
  P.NORMALIZERS = P.CONFIG_DOCUMENT_META_NAMES = void 0;
  P.normalize = Yn;
  var Be = wlt(), Zn = $e(Le()), Gn = $e(qe());
  P.CONFIG_DOCUMENT_META_NAMES = ["$schemaVersion", "$schema"];
  P.NORMALIZERS = { 1: Zn.normalize, 2: Gn.normalize };
  var Hn = (e) => e !== null && typeof e === "object" && !Array.isArray(e);
  function zn(e) {
    let n = e.$schemaVersion;
    if (typeof n === "number" && Number.isInteger(n) && n >= 1) return n;
    return Be.CLUSTER_NAMES.some((t) => e[t] !== void 0) ? 2 : 1;
  }
  function Yn(e, n) {
    var t;
    if (!Hn(e)) return { flat: {}, version: 1, warnings: [], unread: [] };
    let o = { ...e };
    for (let y of P.CONFIG_DOCUMENT_META_NAMES) delete o[y];
    let r = zn(e), s = (t = P.NORMALIZERS[r]) !== null && t !== void 0 ? t : P.NORMALIZERS[Math.max(...Object.keys(P.NORMALIZERS).map(Number))], i = [], d = [];
    return { flat: s(o, i, n, d), version: r, warnings: i, unread: d };
  }
});
var _un = (0, import_chunk_w1d7ygsk.V)(function(ne) {
  Object.defineProperty(ne, "__esModule", { value: true });
  ne.nonBootstrapableKeys = ne.bootstrapableKeys = void 0;
  ne.describeUnusableBody = Jn;
  ne.unrecognizedKeyMessage = We;
  ne.parseBootstrapConfig = Wn;
  ne.collectConsentTargets = ot;
  var Ze = (0, import_chunk_mmevw7ty.Lwe)(), T = (0, import_chunk_mmevw7ty.Vk)(), Ge = (0, import_chunk_mmevw7ty.Ime)(), He = REs(), L = (0, import_chunk_mmevw7ty.NZ)(), ze = YEo(), f = ILe(), Ye = (0, import_chunk_mmevw7ty.Zvt)(), Je = ILe();
  Object.defineProperty(ne, "bootstrapableKeys", { enumerable: true, get: function() {
    return Je.bootstrapableKeys;
  } });
  Object.defineProperty(ne, "nonBootstrapableKeys", { enumerable: true, get: function() {
    return Je.nonBootstrapableKeys;
  } });
  function Jn(e, n = {}, t = {}) {
    let o = /* @__PURE__ */ new Set(), r = [];
    for (let d of e) {
      if (T.intakeReportKeepsValue(d) && f.tryGetFieldMeta(d.key) !== void 0) continue;
      if (!d.cluster && !(d.key in n) && !o.has(d.key)) o.add(d.key), r.push(He.describeDroppedKey(d, t));
    }
    let s = [...new Set(e.filter((d) => d.cluster).map((d) => {
      var y;
      return t.quoteReasons === false ? `cluster "${((y = f.FLAT_KEY_TO_NESTED_PATH.get(d.key)) !== null && y !== void 0 ? y : [d.key])[0]}" failed to parse` : d.msg;
    }))], i = [r.length > 0 ? `every supplied key failed validation: ${r.join(", ")}` : "", ...s].filter(Boolean);
    return i.length > 0 ? i.join("; ") : "no recognized keys";
  }
  function We(e) {
    let n = f.retiredFlatKeyEffect(e);
    return n !== void 0 ? `Bootstrap intake dropped "${e}": this key has been retired \u2014 ${n}` : `Bootstrap intake dropped "${e}": not a recognized configuration key (check the spelling; a newer Claude Desktop release may read it)`;
  }
  function Wn(e, n, t, o = { includeInternal: false }, r) {
    var s, i, d, y;
    if (!e || typeof e !== "object" || Array.isArray(e)) return { config: {}, rejected: [], warnings: [], keyedParseErrors: [], sentKeys: [], issueDetails: /* @__PURE__ */ new Map() };
    let { flat: v, warnings: g, unread: u } = ze.normalize(e, t), R = typeof v.expiresAt === "number" && v.expiresAt > 0 ? v.expiresAt : void 0, _ = (s = r === null || r === void 0 ? void 0 : r.allowedKeys) !== null && s !== void 0 ? s : f.bootstrapableKeys(o), l = new Set(_), E = [], h = f.detectDeprecations(v, { keys: _, editor: r === null || r === void 0 ? void 0 : r.editor }), S = [], j = [], b = f.resolveLegacyFlatKeys(v, (p, O) => {
      if (l.has(p)) E.push({ key: p, msg: O }), S.push(p), t === null || t === void 0 || t("bootstrap key failed validation", { key: p, msg: O });
      else j.push(p);
    }, { editor: r === null || r === void 0 ? void 0 : r.editor });
    for (let p of j) if (!(p in b)) b[p] = void 0;
    let A = /* @__PURE__ */ new Set(), K = (p) => {
      var O;
      A.add(p), (O = r === null || r === void 0 ? void 0 : r.onFailClosed) === null || O === void 0 || O.call(r, p);
    }, _e = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Set();
    for (let p of g) {
      let O = (i = /^Failed to parse bootstrap cluster "([^"]+)"/.exec(p)) === null || i === void 0 ? void 0 : i[1];
      if (!O) continue;
      for (let [M, Qe] of f.FLAT_KEY_TO_NESTED_PATH) {
        if (!T.isReadBy(f.getFieldMeta(M), (d = o.reader) !== null && d !== void 0 ? d : "desktop")) continue;
        if (`${Qe.join(".")}.`.startsWith(`${O}.`)) E.push({ key: M, msg: p, cluster: true }), ve.add(M);
      }
    }
    let D = f.parseConfigRecord(b, { allowedKeys: _, schemaFor: r === null || r === void 0 ? void 0 : r.schemaFor, onFailClosed: K, channel: r === null || r === void 0 ? void 0 : r.channel, editor: r === null || r === void 0 ? void 0 : r.editor, onIssues: (p, O) => _e.set(p, O), onInvalid: (p, O, M) => {
      E.push(M ? { key: p, msg: O, kind: M } : { key: p, msg: O }), t === null || t === void 0 || t("bootstrap key failed validation", { key: p, msg: O });
    } });
    for (let p of S) f.standInFailClosed(D, p, () => K(p));
    for (let p of [...Object.keys(b).filter((O) => O !== "expiresAt" && f.tryGetFieldMeta(O) === void 0).map(Ye.reportableName), ...u]) {
      let O = We(p);
      E.push({ key: p, msg: O, kind: "unknown" }), t === null || t === void 0 || t("bootstrap key failed validation", { key: p, msg: O });
    }
    for (let p of ve) if (l.has(p) && D[p] === void 0 && !f.isInferenceConnectionKey(p)) f.standInFailClosed(D, p, () => K(p));
    for (let p of h) E.push({ key: p.key, msg: Ze.describeDeprecation(p), kind: "deprecated", deprecation: p });
    let te = Object.keys(b).filter((p) => p !== "expiresAt");
    if (t) {
      let p = Object.keys(D), O = te.filter((M) => !p.includes(M));
      if (O.length > 0) t("bootstrap intake dropped keys", { sentKeys: te, keptKeys: p, dropped: O });
    }
    let re = (y = r === null || r === void 0 ? void 0 : r.channel) !== null && y !== void 0 ? y : "bootstrap", Xe = re === "mdm" || re === "local" ? [] : Xn(D, { trustedOrigin: n, allowLoopbackResponseUrls: r === null || r === void 0 ? void 0 : r.allowLoopbackResponseUrls, channel: re, onDebug: t, onPolicyError: (p, O) => E.push({ key: p, msg: O }), onFailClosed: K });
    for (let [p, O] of E.entries()) if (O.kind === void 0 && A.has(O.key)) E[p] = { ...O, stoodIn: true };
    if (R !== void 0) D.expiresAt = R;
    return { config: D, rejected: Xe, warnings: g, keyedParseErrors: E, sentKeys: te, issueDetails: _e };
  }
  function Xn(e, n) {
    var t, o, r, s, i, d, y, v;
    let g = [];
    for (let u of f.bootstrapableKeys({ includeInternal: true, reader: "all" })) {
      let R = e[u];
      if (R === void 0) continue;
      let _ = f.getFieldMeta(u), l = _.remotePolicy;
      if (((t = l === null || l === void 0 ? void 0 : l.hybrid) === null || t === void 0 ? void 0 : t.scope) === "only" && n.channel !== "hybrid") {
        delete e[u], (o = n.onPolicyError) === null || o === void 0 || o.call(n, u, `Bootstrap intake dropped "${u}": only honored when delivered by the Anthropic-hosted control plane`);
        continue;
      }
      let E = n.allowLoopbackResponseUrls || n.channel === "hybrid" && ((r = l === null || l === void 0 ? void 0 : l.hybrid) === null || r === void 0 ? void 0 : r.loopback) === true;
      if ((l === null || l === void 0 ? void 0 : l.rejectLoopback) && it(R).some((h) => ee(h) && !(E && st(h)))) {
        if ("failClosedValue" in _) f.standInFailClosed(e, u, () => {
          var h;
          return (h = n.onFailClosed) === null || h === void 0 ? void 0 : h.call(n, u);
        });
        else delete e[u];
        (s = n.onDebug) === null || s === void 0 || s.call(n, "bootstrap rejected loopback/non-https URL", { key: u }), (i = n.onPolicyError) === null || i === void 0 || i.call(n, u, `Bootstrap intake dropped "${u}": loopback or non-https URL`);
        continue;
      }
      if ((l === null || l === void 0 ? void 0 : l.originPinned) && n.trustedOrigin !== void 0 && typeof R === "string") {
        if (!tt(R, n.trustedOrigin)) {
          delete e[u], g.push(u), (d = n.onPolicyError) === null || d === void 0 || d.call(n, u, `Bootstrap intake dropped "${u}": origin does not match the bootstrap server`);
          continue;
        }
      }
      if ((l === null || l === void 0 ? void 0 : l.mcpUrlHygiene) && Array.isArray(R)) {
        let { kept: h, dropped: S } = et(R, u, n.onDebug);
        if (S > 0) (y = n.onPolicyError) === null || y === void 0 || y.call(n, u, `${S} of ${R.length} "${u}" bootstrap entr${R.length === 1 ? "y" : "ies"} dropped for loopback/non-https URL`);
        if (S > 0 && h.length === 0) f.standInFailClosed(e, u, () => {
          var j;
          return (j = n.onFailClosed) === null || j === void 0 ? void 0 : j.call(n, u);
        });
        else if (S > 0) e[u] = h;
      }
      if ((l === null || l === void 0 ? void 0 : l.marketplaceUrlHygiene) && Array.isArray(R)) {
        let { kept: h, dropped: S } = Qn(R, u, n.onDebug);
        if (S > 0) (v = n.onPolicyError) === null || v === void 0 || v.call(n, u, `${S} of ${R.length} "${u}" bootstrap entr${R.length === 1 ? "y" : "ies"} dropped for loopback/non-https URL`);
        e[u] = h;
      }
    }
    return g;
  }
  function Qn(e, n, t) {
    let o = [], r = 0;
    for (let [s, i] of e.entries()) {
      if (!i || typeof i !== "object") continue;
      let d = i;
      if (typeof d.url === "string" && ee(d.url)) {
        r += 1, t === null || t === void 0 || t("bootstrap dropped loopback/non-https marketplace entry", { key: n, index: s });
        continue;
      }
      o.push(i);
    }
    return { kept: o, dropped: r };
  }
  function et(e, n, t) {
    let o = [], r = 0;
    for (let s of e) {
      let i = nt(s);
      if (i !== void 0 && ee(i)) {
        r += 1, t === null || t === void 0 || t("bootstrap dropped loopback-url MCP entry", { key: n, name: s.name });
        continue;
      }
      if (!L.isBuiltinMcpEntry(s) && s.transport !== "stdio" && L.oauthAsSelectionUrls(s.oauth).some(ee)) {
        r += 1, t === null || t === void 0 || t("bootstrap dropped MCP entry with loopback OAuth endpoint", { key: n, name: s.name });
        continue;
      }
      o.push(s);
    }
    return { kept: o, dropped: r };
  }
  function nt(e) {
    if (L.isBuiltinMcpEntry(e)) return "customUrl" in e ? e.customUrl : void 0;
    return e.transport === "stdio" ? void 0 : e.url;
  }
  function tt(e, n) {
    try {
      return new URL(e).origin === n;
    } catch (t) {
      return false;
    }
  }
  function rt(e) {
    var n;
    return [(n = f.getFieldMeta(e).legacyFlatKey) === null || n === void 0 ? void 0 : n.name, Ge.formerGatewayIdpKeyOf(e)].filter((t) => t !== void 0);
  }
  var ye = (e) => typeof e === "string" ? e : f.canonicalJson(e);
  function xe(e, n) {
    let t = {};
    for (let o of n) {
      let r = o.split(".").reduce((s, i) => s === null || s === void 0 ? void 0 : s[i], e);
      if (r !== void 0) t[o] = r;
    }
    return t;
  }
  function ot(e) {
    var n;
    let t = [];
    for (let o of f.keysWithRemotePolicy("requiresUserConsent")) {
      let r = e[o], s = Array.isArray(r) && r.length === 0;
      if (r !== void 0 && !s && !f.isFailClosedStandIn(o, r)) {
        let i = typeof r === "string" && T.isUrlString(f.FlatManagedConfig.shape[o]) ? new URL(r).origin : void 0, d = rt(o);
        t.push({ label: o, value: ye(r), key: o, origin: i, ...d.length > 0 ? { formerLabels: d } : {} });
      }
    }
    for (let o of f.bootstrapableKeys({ includeInternal: true })) {
      let r = e[o];
      if (r === null || typeof r !== "object") continue;
      let s = T.consentRequiringSubfieldKeys(f.FlatManagedConfig.shape[o]);
      if (s.size === 0) continue;
      if (!Array.isArray(r)) {
        let d = xe(r, s), y = Object.keys(d);
        if (y.length > 0) t.push({ label: o, value: ye(d), key: o, subfields: y });
        continue;
      }
      let i = /* @__PURE__ */ new Map();
      for (let [d, y] of r.entries()) {
        let v = [y.name, y.repo, y.url].find((u) => typeof u === "string"), g = xe(y, s);
        if (Object.keys(g).length > 0) {
          let u = `${o}[${v !== null && v !== void 0 ? v : d}]`, R = ((n = i.get(u)) !== null && n !== void 0 ? n : 0) + 1;
          i.set(u, R), t.push({ label: R === 1 ? u : `${u}#${R}`, value: ye(g), key: o, entryIndex: d, entryId: v });
        }
      }
    }
    return t;
  }
  function it(e) {
    if (typeof e === "string") return [e];
    if (Array.isArray(e)) return e.flatMap((n) => typeof n === "string" ? [n] : Ve(n));
    return Ve(e);
  }
  function Ve(e) {
    let n = typeof e === "object" && e !== null ? e.url : void 0;
    return typeof n === "string" ? [n] : [];
  }
  function ee(e) {
    try {
      let { protocol: n, hostname: t } = new URL(e);
      return n !== "https:" || L.isLoopbackHost(t);
    } catch (n) {
      return true;
    }
  }
  function st(e) {
    try {
      return L.LOOPBACK_HOSTS.has(new URL(e).hostname);
    } catch (n) {
      return false;
    }
  }
});
