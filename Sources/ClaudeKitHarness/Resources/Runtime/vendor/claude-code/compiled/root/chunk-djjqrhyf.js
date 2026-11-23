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
var chunk_djjqrhyf_exports = {};
__export(chunk_djjqrhyf_exports, {
  L0: () => L0,
  Mme: () => Mme
});
module.exports = __toCommonJS(chunk_djjqrhyf_exports);
var import_chunk_jybgpkft = require("/$bunfs/root/chunk-jybgpkft.js");
var import_chunk_tpn2kte3 = require("/$bunfs/root/chunk-tpn2kte3.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var v = (0, import_chunk_w1d7ygsk.V)(function(re) {
  var ne = (e, n, t) => {
    if (!(n in e)) return;
    if (e[n] === "true") return true;
    if (e[n] === "false") return false;
    throw Error(`Cannot load ${t} "${n}". Expected "true" or "false", got ${e[n]}.`);
  }, te = (e, n, t) => {
    if (!(n in e)) return;
    let r = parseInt(e[n], 10);
    if (Number.isNaN(r)) throw TypeError(`Cannot load ${t} '${n}'. Expected number, got '${e[n]}'.`);
    return r;
  };
  re.SelectorType = void 0;
  (function(e) {
    e.ENV = "env", e.CONFIG = "shared config entry";
  })(re.SelectorType || (re.SelectorType = {}));
  re.booleanSelector = ne;
  re.numberSelector = te;
});
var Mme = (0, import_chunk_w1d7ygsk.V)(function($e) {
  var O = (0, import_chunk_tpn2kte3.uQe)();
  class x {
    capacity;
    data = /* @__PURE__ */ new Map();
    parameters = [];
    constructor({ size: e, params: n }) {
      if (this.capacity = e ?? 50, n) this.parameters = n;
    }
    get(e, n) {
      let t = this.hash(e);
      if (t === false) return n();
      if (!this.data.has(t)) {
        if (this.data.size > this.capacity + 10) {
          let r = this.data.keys(), s = 0;
          while (true) {
            let { value: o, done: i } = r.next();
            if (this.data.delete(o), i || ++s > 10) break;
          }
        }
        this.data.set(t, n());
      }
      return this.data.get(t);
    }
    size() {
      return this.data.size;
    }
    hash(e) {
      let n = "", { parameters: t } = this;
      if (t.length === 0) return false;
      for (let r of t) {
        let s = String(e[r] ?? "");
        if (s.includes("|;")) return false;
        n += s + "|;";
      }
      return n;
    }
  }
  var ie = new RegExp("^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$"), U = (e) => ie.test(e) || e.startsWith("[") && e.endsWith("]"), ce = new RegExp("^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$"), m = (e, n = false) => {
    if (!n) return ce.test(e);
    let t = e.split(".");
    for (let r of t) if (!m(r)) return false;
    return true;
  }, I = {}, N = "endpoints";
  function d(e) {
    if (typeof e !== "object" || e == null) return e;
    if ("ref" in e) return `$${d(e.ref)}`;
    if ("fn" in e) return `${e.fn}(${(e.argv || []).map(d).join(", ")})`;
    return JSON.stringify(e, null, 2);
  }
  class u extends Error {
    constructor(e) {
      super(e);
      this.name = "EndpointError";
    }
  }
  var ae = (e, n) => e === n, le = (e) => {
    let n = e.split("."), t = [];
    for (let r of n) {
      let s = r.indexOf("[");
      if (s !== -1) {
        if (r.indexOf("]") !== r.length - 1) throw new u(`Path: '${e}' does not end with ']'`);
        let o = r.slice(s + 1, -1);
        if (Number.isNaN(parseInt(o))) throw new u(`Invalid array index: '${o}' in path: '${e}'`);
        if (s !== 0) t.push(r.slice(0, s));
        t.push(o);
      } else t.push(r);
    }
    return t;
  }, A = (e, n) => le(n).reduce((t, r) => {
    if (typeof t !== "object") throw new u(`Index '${r}' in '${n}' not found in '${JSON.stringify(e)}'`);
    else if (Array.isArray(t)) return t[parseInt(r)];
    return t[r];
  }, e), ue = (e) => e != null, de = (e) => !e, S = { [O.EndpointURLScheme.HTTP]: 80, [O.EndpointURLScheme.HTTPS]: 443 }, fe = (e) => {
    let n = (() => {
      try {
        if (e instanceof URL) return e;
        if (typeof e === "object" && "hostname" in e) {
          let { hostname: E, port: P, protocol: J = "", path: X = "", query: Q = {} } = e, T = new URL(`${J}//${E}${P ? `:${P}` : ""}${X}`);
          return T.search = Object.entries(Q).map(([Y, ee]) => `${Y}=${ee}`).join("&"), T;
        }
        return new URL(e);
      } catch (E) {
        return null;
      }
    })();
    if (!n) return console.error(`Unable to parse ${JSON.stringify(e)} as a whatwg URL.`), null;
    let t = n.href, { host: r, hostname: s, pathname: o, protocol: i, search: a } = n;
    if (a) return null;
    let l = i.slice(0, -1);
    if (!Object.values(O.EndpointURLScheme).includes(l)) return null;
    let c = U(s), g = t.includes(`${r}:${S[l]}`) || typeof e === "string" && e.includes(`${r}:${S[l]}`), p = `${r}${g ? `:${S[l]}` : ""}`;
    return { scheme: l, authority: p, path: o, normalizedPath: o.endsWith("/") ? o : `${o}/`, isIp: c };
  }, ge = (e, n) => e === n, pe = (e, n, t, r) => {
    if (n >= t || e.length < t) return null;
    if (!r) return e.substring(n, t);
    return e.substring(e.length - t, e.length - n);
  }, Ee = (e) => encodeURIComponent(e).replace(/[!*'()]/g, (n) => `%${n.charCodeAt(0).toString(16).toUpperCase()}`), Ne = { booleanEquals: ae, getAttr: A, isSet: ue, isValidHostLabel: m, not: de, parseURL: fe, stringEquals: ge, substring: pe, uriEncode: Ee }, D = (e, n) => {
    let t = [], r = { ...n.endpointParams, ...n.referenceRecord }, s = 0;
    while (s < e.length) {
      let o = e.indexOf("{", s);
      if (o === -1) {
        t.push(e.slice(s));
        break;
      }
      t.push(e.slice(s, o));
      let i = e.indexOf("}", o);
      if (i === -1) {
        t.push(e.slice(o));
        break;
      }
      if (e[o + 1] === "{" && e[i + 1] === "}") t.push(e.slice(o + 1, i)), s = i + 2;
      let a = e.substring(o + 1, i);
      if (a.includes("#")) {
        let [l, c] = a.split("#");
        t.push(A(r[l], c));
      } else t.push(r[a]);
      s = i + 1;
    }
    return t.join("");
  }, he = ({ ref: e }, n) => ({ ...n.endpointParams, ...n.referenceRecord })[e], h = (e, n, t) => {
    if (typeof e === "string") return D(e, t);
    else if (e.fn) return C.callFunction(e, t);
    else if (e.ref) return he(e, t);
    throw new u(`'${n}': ${String(e)} is not a string, function or reference.`);
  }, b = ({ fn: e, argv: n }, t) => {
    let r = n.map((o) => ["boolean", "number"].includes(typeof o) ? o : C.evaluateExpression(o, "arg", t)), s = e.split(".");
    if (s[0] in I && s[1] != null) return I[s[0]][s[1]](...r);
    return Ne[e](...r);
  }, C = { evaluateExpression: h, callFunction: b }, _e = ({ assign: e, ...n }, t) => {
    if (e && e in t.referenceRecord) throw new u(`'${e}' is already defined in Reference Record.`);
    let r = b(n, t);
    return t.logger?.debug?.(`${N} evaluateCondition: ${d(n)} = ${d(r)}`), { result: r === "" ? true : !!r, ...e != null && { toAssign: { name: e, value: r } } };
  }, w = (e = [], n) => {
    let t = {};
    for (let r of e) {
      let { result: s, toAssign: o } = _e(r, { ...n, referenceRecord: { ...n.referenceRecord, ...t } });
      if (!s) return { result: s };
      if (o) t[o.name] = o.value, n.logger?.debug?.(`${N} assign: ${o.name} := ${d(o.value)}`);
    }
    return { result: true, referenceRecord: t };
  }, Re = (e, n) => Object.entries(e).reduce((t, [r, s]) => ({ ...t, [r]: s.map((o) => {
    let i = h(o, "Header value entry", n);
    if (typeof i !== "string") throw new u(`Header '${r}' value '${i}' is not a string`);
    return i;
  }) }), {}), F = (e, n) => Object.entries(e).reduce((t, [r, s]) => ({ ...t, [r]: L.getEndpointProperty(s, n) }), {}), y = (e, n) => {
    if (Array.isArray(e)) return e.map((t) => y(t, n));
    switch (typeof e) {
      case "string":
        return D(e, n);
      case "object":
        if (e === null) throw new u(`Unexpected endpoint property: ${e}`);
        return L.getEndpointProperties(e, n);
      case "boolean":
        return e;
      default:
        throw new u(`Unexpected endpoint property type: ${typeof e}`);
    }
  }, L = { getEndpointProperty: y, getEndpointProperties: F }, Se = (e, n) => {
    let t = h(e, "Endpoint URL", n);
    if (typeof t === "string") try {
      return new URL(t);
    } catch (r) {
      throw console.error(`Failed to construct URL with ${t}`, r), r;
    }
    throw new u(`Endpoint URL must be a string, got ${typeof t}`);
  }, Oe = (e, n) => {
    let { conditions: t, endpoint: r } = e, { result: s, referenceRecord: o } = w(t, n);
    if (!s) return;
    let i = { ...n, referenceRecord: { ...n.referenceRecord, ...o } }, { url: a, properties: l, headers: c } = r;
    return n.logger?.debug?.(`${N} Resolving endpoint from template: ${d(r)}`), { ...c != null && { headers: Re(c, i) }, ...l != null && { properties: F(l, i) }, url: Se(a, i) };
  }, Ie = (e, n) => {
    let { conditions: t, error: r } = e, { result: s, referenceRecord: o } = w(t, n);
    if (!s) return;
    throw new u(h(r, "Error", { ...n, referenceRecord: { ...n.referenceRecord, ...o } }));
  }, G = (e, n) => {
    for (let t of e) if (t.type === "endpoint") {
      let r = Oe(t, n);
      if (r) return r;
    } else if (t.type === "error") Ie(t, n);
    else if (t.type === "tree") {
      let r = z.evaluateTreeRule(t, n);
      if (r) return r;
    } else throw new u(`Unknown endpoint rule: ${t}`);
    throw new u("Rules evaluation failed");
  }, me = (e, n) => {
    let { conditions: t, rules: r } = e, { result: s, referenceRecord: o } = w(t, n);
    if (!s) return;
    return z.evaluateRules(r, { ...n, referenceRecord: { ...n.referenceRecord, ...o } });
  }, z = { evaluateRules: G, evaluateTreeRule: me }, we = (e, n) => {
    let { endpointParams: t, logger: r } = n, { parameters: s, rules: o } = e;
    n.logger?.debug?.(`${N} Initial EndpointParams: ${d(t)}`);
    let i = Object.entries(s).filter(([, c]) => c.default != null).map(([c, g]) => [c, g.default]);
    if (i.length > 0) for (let [c, g] of i) t[c] = t[c] ?? g;
    let a = Object.entries(s).filter(([, c]) => c.required).map(([c]) => c);
    for (let c of a) if (t[c] == null) throw new u(`Missing required parameter: '${c}'`);
    let l = G(o, { endpointParams: t, logger: r, referenceRecord: {} });
    return n.logger?.debug?.(`${N} Resolved endpoint: ${d(l)}`), l;
  };
  $e.EndpointCache = x;
  $e.EndpointError = u;
  $e.customEndpointFunctions = I;
  $e.isIpAddress = U;
  $e.isValidHostLabel = m;
  $e.resolveEndpoint = we;
});
var L0 = (0, import_chunk_w1d7ygsk.V)(function(Be) {
  var f = v(), _ = (0, import_chunk_jybgpkft.Aj)(), De = Mme(), W = "AWS_USE_DUALSTACK_ENDPOINT", K = "use_dualstack_endpoint", be = false, Ce = { environmentVariableSelector: (e) => f.booleanSelector(e, W, f.SelectorType.ENV), configFileSelector: (e) => f.booleanSelector(e, K, f.SelectorType.CONFIG), default: false }, j = "AWS_USE_FIPS_ENDPOINT", M = "use_fips_endpoint", Fe = false, ye = { environmentVariableSelector: (e) => f.booleanSelector(e, j, f.SelectorType.ENV), configFileSelector: (e) => f.booleanSelector(e, M, f.SelectorType.CONFIG), default: false }, Le = (e) => {
    let { tls: n, endpoint: t, urlParser: r, useDualstackEndpoint: s } = e;
    return Object.assign(e, { tls: n ?? true, endpoint: _.normalizeProvider(typeof t === "string" ? r(t) : t), isCustomEndpoint: true, useDualstackEndpoint: _.normalizeProvider(s ?? false) });
  }, Ge = async (e) => {
    let { tls: n = true } = e, t = await e.region();
    if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(t)) throw Error("Invalid region in client config");
    let s = await e.useDualstackEndpoint(), o = await e.useFipsEndpoint(), { hostname: i } = await e.regionInfoProvider(t, { useDualstackEndpoint: s, useFipsEndpoint: o }) ?? {};
    if (!i) throw Error("Cannot resolve hostname from client config");
    return e.urlParser(`${n ? "https:" : "http:"}//${i}`);
  }, Ve = (e) => {
    let n = _.normalizeProvider(e.useDualstackEndpoint ?? false), { endpoint: t, useFipsEndpoint: r, urlParser: s, tls: o } = e;
    return Object.assign(e, { tls: o ?? true, endpoint: t ? _.normalizeProvider(typeof t === "string" ? s(t) : t) : () => Ge({ ...e, useDualstackEndpoint: n, useFipsEndpoint: r }), isCustomEndpoint: !!t, useDualstackEndpoint: n });
  }, H = "AWS_REGION", Z = "region", ze = { environmentVariableSelector: (e) => e[H], configFileSelector: (e) => e[Z], default: () => {
    throw Error("Region is missing");
  } }, ke = { preferredFile: "credentials" }, k = /* @__PURE__ */ new Set(), qe = (e, n = De.isValidHostLabel) => {
    if (!k.has(e) && !n(e)) if (e === "*") console.warn('@smithy/config-resolver WARN - Please use the caller region instead of "*". See "sigv4a" in https://github.com/aws/aws-sdk-js-v3/blob/main/supplemental-docs/CLIENTS.md.');
    else throw Error(`Region not accepted: region="${e}" is not a valid hostname component.`);
    else k.add(e);
  }, B = (e) => typeof e === "string" && (e.startsWith("fips-") || e.endsWith("-fips")), We = (e) => B(e) ? ["fips-aws-global", "aws-fips"].includes(e) ? "us-east-1" : e.replace(/fips-(dkr-|prod-)?|-fips/, "") : e, Ke = (e) => {
    let { region: n, useFipsEndpoint: t } = e;
    if (!n) throw Error("Region is missing");
    return Object.assign(e, { region: async () => {
      let r = typeof n === "function" ? await n() : n, s = We(r);
      return qe(s), s;
    }, useFipsEndpoint: async () => {
      let r = typeof n === "string" ? n : await n();
      if (B(r)) return true;
      return typeof t !== "function" ? Promise.resolve(!!t) : t();
    } });
  }, q = (e = [], { useFipsEndpoint: n, useDualstackEndpoint: t }) => e.find(({ tags: r }) => n === r.includes("fips") && t === r.includes("dualstack"))?.hostname, je = (e, { regionHostname: n, partitionHostname: t }) => n ? n : t ? t.replace("{region}", e) : void 0, Me = (e, { partitionHash: n }) => Object.keys(n || {}).find((t) => n[t].regions.includes(e)) ?? "aws", He = (e, { signingRegion: n, regionRegex: t, useFipsEndpoint: r }) => {
    if (n) return n;
    else if (r) {
      let s = t.replace("\\\\", "\\").replace(/^\^/g, "\\.").replace(/\$$/g, "\\."), o = e.match(s);
      if (o) return o[0].slice(1, -1);
    }
  }, Ze = (e, { useFipsEndpoint: n = false, useDualstackEndpoint: t = false, signingService: r, regionHash: s, partitionHash: o }) => {
    let i = Me(e, { partitionHash: o }), a = e in s ? e : o[i]?.endpoint ?? e, l = { useFipsEndpoint: n, useDualstackEndpoint: t }, c = q(s[a]?.variants, l), g = q(o[i]?.variants, l), p = je(a, { regionHostname: c, partitionHostname: g });
    if (p === void 0) throw Error(`Endpoint resolution failed for: ${{ resolvedRegion: a, useFipsEndpoint: n, useDualstackEndpoint: t }}`);
    let E = He(p, { signingRegion: s[a]?.signingRegion, regionRegex: o[i].regionRegex, useFipsEndpoint: n });
    return { partition: i, signingService: r, hostname: p, ...E && { signingRegion: E }, ...s[a]?.signingService && { signingService: s[a].signingService } };
  };
  Be.CONFIG_USE_DUALSTACK_ENDPOINT = K;
  Be.CONFIG_USE_FIPS_ENDPOINT = M;
  Be.DEFAULT_USE_DUALSTACK_ENDPOINT = be;
  Be.DEFAULT_USE_FIPS_ENDPOINT = Fe;
  Be.ENV_USE_DUALSTACK_ENDPOINT = W;
  Be.ENV_USE_FIPS_ENDPOINT = j;
  Be.NODE_REGION_CONFIG_FILE_OPTIONS = ke;
  Be.NODE_REGION_CONFIG_OPTIONS = ze;
  Be.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = Ce;
  Be.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = ye;
  Be.REGION_ENV_NAME = H;
  Be.REGION_INI_NAME = Z;
  Be.getRegionInfo = Ze;
  Be.resolveCustomEndpointsConfig = Le;
  Be.resolveEndpointsConfig = Ve;
  Be.resolveRegionConfig = Ke;
});
