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
var chunk_wf7k2rn2_exports = {};
__export(chunk_wf7k2rn2_exports, {
  ENV_CMDS_FULL_URI: () => x,
  ENV_CMDS_RELATIVE_URI: () => w,
  fromContainerMetadata: () => be,
  fromInstanceMetadata: () => nt,
  getInstanceMetadataEndpoint: () => y,
  httpRequest: () => p
});
module.exports = __toCommonJS(chunk_wf7k2rn2_exports);
var import_chunk_tf0gwgs2 = require("/$bunfs/root/chunk-tf0gwgs2.js");
var import_chunk_eebp24wr = require("/$bunfs/root/chunk-eebp24wr.js");
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_buffer = require("buffer");
var import_http = require("http");
var import_url = require("url");
function p(e) {
  return new Promise((t, n) => {
    let o = (0, import_http.request)({ method: "GET", ...e, hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1") });
    o.on("error", (r) => {
      n(Object.assign(new A.ProviderError("Unable to connect to instance metadata service"), r)), o.destroy();
    }), o.on("timeout", () => {
      n(new A.ProviderError("TimeoutError from instance metadata service")), o.destroy();
    }), o.on("response", (r) => {
      let { statusCode: a = 400 } = r;
      if (a < 200 || 300 <= a) n(Object.assign(new A.ProviderError("Error response received from instance metadata service"), { statusCode: a })), o.destroy();
      let m = [];
      r.on("data", (s) => {
        m.push(s);
      }), r.on("end", () => {
        t(import_buffer.Buffer.concat(m)), o.destroy();
      });
    }), o.end();
  });
}
var A;
var S = (0, import_chunk_w1d7ygsk.bo)(() => {
  A = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
});
var N = (e) => Boolean(e) && typeof e === "object" && typeof e.AccessKeyId === "string" && typeof e.SecretAccessKey === "string" && typeof e.Token === "string" && typeof e.Expiration === "string", g = (e) => ({ accessKeyId: e.AccessKeyId, secretAccessKey: e.SecretAccessKey, sessionToken: e.Token, expiration: new Date(e.Expiration), ...e.AccountId && { accountId: e.AccountId } });
var O = () => {
};
var C = ({ maxRetries: e = 0, timeout: t = 1e3 }) => ({ maxRetries: e, timeout: t });
var h = () => {
};
var _ = (e, t) => {
  let n = e();
  for (let o = 0; o < t; o++) n = n.catch(e);
  return n;
};
var D = () => {
};
var T, x = "AWS_CONTAINER_CREDENTIALS_FULL_URI", w = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", k = "AWS_CONTAINER_AUTHORIZATION_TOKEN", be = (e = {}) => {
  let { timeout: t, maxRetries: n } = C(e);
  return () => _(async () => {
    let o = await me({ logger: e.logger }), r = JSON.parse(await ce(t, o));
    if (!N(r)) throw new T.CredentialsProviderError("Invalid response received from instance metadata service.", { logger: e.logger });
    return g(r);
  }, n);
}, ce = async (e, t) => {
  if (process.env[k]) t.headers = { ...t.headers, Authorization: process.env[k] };
  return (await p({ ...t, timeout: e })).toString();
}, de = "169.254.170.2", le, pe, me = async ({ logger: e }) => {
  if (process.env[w]) return { hostname: de, path: process.env[w] };
  if (process.env[x]) {
    let t = (0, import_url.parse)(process.env[x]);
    if (!t.hostname || !(t.hostname in le)) throw new T.CredentialsProviderError(`${t.hostname} is not a valid container metadata service hostname`, { tryNextLink: false, logger: e });
    if (!t.protocol || !(t.protocol in pe)) throw new T.CredentialsProviderError(`${t.protocol} is not a valid container metadata service protocol`, { tryNextLink: false, logger: e });
    return { ...t, port: t.port ? parseInt(t.port, 10) : void 0 };
  }
  throw new T.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${w} or ${x} environment variable is set`, { tryNextLink: false, logger: e });
};
var V = (0, import_chunk_w1d7ygsk.bo)(() => {
  S();
  O();
  h();
  D();
  T = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)()), le = { localhost: true, "127.0.0.1": true }, pe = { "http:": true, "https:": true };
});
var U, v;
var W = (0, import_chunk_w1d7ygsk.bo)(() => {
  U = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
  v = class v2 extends U.CredentialsProviderError {
    tryNextLink;
    name = "InstanceMetadataV1FallbackError";
    constructor(e, t = true) {
      super(e, t);
      this.tryNextLink = t, Object.setPrototypeOf(this, v2.prototype);
    }
  };
});
var u;
var B = (0, import_chunk_w1d7ygsk.bo)(() => {
  (function(e) {
    e.IPv4 = "http://169.254.169.254", e.IPv6 = "http://[fd00:ec2::254]";
  })(u || (u = {}));
});
var K;
var G = (0, import_chunk_w1d7ygsk.bo)(() => {
  K = { environmentVariableSelector: (e) => e.AWS_EC2_METADATA_SERVICE_ENDPOINT, configFileSelector: (e) => e.ec2_metadata_service_endpoint, default: void 0 };
});
var l;
var M = (0, import_chunk_w1d7ygsk.bo)(() => {
  (function(e) {
    e.IPv4 = "IPv4", e.IPv6 = "IPv6";
  })(l || (l = {}));
});
var fe = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE", Ee = "ec2_metadata_service_endpoint_mode", q;
var H = (0, import_chunk_w1d7ygsk.bo)(() => {
  M();
  q = { environmentVariableSelector: (e) => e[fe], configFileSelector: (e) => e[Ee], default: l.IPv4 };
});
var P, Y, y = async () => Y.parseUrl(await Ie() || await _e()), Ie = async () => P.loadConfig(K)(), _e = async () => {
  let e = await P.loadConfig(q)();
  switch (e) {
    case l.IPv4:
      return u.IPv4;
    case l.IPv6:
      return u.IPv6;
    default:
      throw Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(l)}`);
  }
};
var R = (0, import_chunk_w1d7ygsk.bo)(() => {
  B();
  G();
  M();
  H();
  P = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_tf0gwgs2.Rj)()), Y = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_eebp24wr.Kre)());
});
var b = (e, t) => {
  let n = 300 + Math.floor(Math.random() * 300), o = new Date(Date.now() + n * 1e3);
  t.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(o)}.
For more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);
  let r = e.originalExpiration ?? e.expiration;
  return { ...e, ...r ? { originalExpiration: r } : {}, expiration: o };
};
var j = () => {
};
var J = (e, t = {}) => {
  let n = t?.logger || console, o;
  return async () => {
    let r;
    try {
      if (r = await e(), r.expiration && r.expiration.getTime() < Date.now()) r = b(r, n);
    } catch (a) {
      if (o) n.warn("Credential renew failed: ", a), r = b(o, n);
      else throw a;
    }
    return o = r, r;
  };
};
var z = (0, import_chunk_w1d7ygsk.bo)(() => {
  j();
});
var Q, L, ee = "/latest/meta-data/iam/security-credentials/", Te = "/latest/api/token", F = "AWS_EC2_METADATA_V1_DISABLED", X = "ec2_metadata_v1_disabled", Z = "x-aws-ec2-metadata-token", nt = (e = {}) => J(ue(e), { logger: e.logger }), ue = (e = {}) => {
  let t = false, { logger: n, profile: o } = e, { timeout: r, maxRetries: a } = C(e), m = async (s, f) => {
    if (t || f.headers?.[Z] == null) {
      let i = false, c = false, ne = await Q.loadConfig({ environmentVariableSelector: (d) => {
        let E = d[F];
        if (c = !!E && E !== "false", E === void 0) throw new L.CredentialsProviderError(`${F} not set in env, checking config file next.`, { logger: e.logger });
        return c;
      }, configFileSelector: (d) => {
        let E = d[X];
        return i = !!E && E !== "false", i;
      }, default: false }, { profile: o })();
      if (e.ec2MetadataV1Disabled || ne) {
        let d = [];
        if (e.ec2MetadataV1Disabled) d.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
        if (i) d.push(`config file profile (${X})`);
        if (c) d.push(`process environment variable (${F})`);
        throw new v(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${d.join(", ")}].`);
      }
    }
    let re = (await _(async () => {
      let i;
      try {
        i = await Se(f);
      } catch (c) {
        if (c.statusCode === 401) t = false;
        throw c;
      }
      return i;
    }, s)).trim();
    return _(async () => {
      let i;
      try {
        i = await Ne(re, f, e);
      } catch (c) {
        if (c.statusCode === 401) t = false;
        throw c;
      }
      return i;
    }, s);
  };
  return async () => {
    let s = await y();
    if (t) return n?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)"), m(a, { ...s, timeout: r });
    else {
      let f;
      try {
        f = (await Ae({ ...s, timeout: r })).toString();
      } catch (I) {
        if (I?.statusCode === 400) throw Object.assign(I, { message: "EC2 Metadata token request returned error" });
        else if (I.message === "TimeoutError" || [403, 404, 405].includes(I.statusCode)) t = true;
        return n?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)"), m(a, { ...s, timeout: r });
      }
      return m(a, { ...s, headers: { [Z]: f }, timeout: r });
    }
  };
}, Ae = async (e) => p({ ...e, path: Te, method: "PUT", headers: { "x-aws-ec2-metadata-token-ttl-seconds": "21600" } }), Se = async (e) => (await p({ ...e, path: ee })).toString(), Ne = async (e, t, n) => {
  let o = JSON.parse((await p({ ...t, path: ee + e })).toString());
  if (!N(o)) throw new L.CredentialsProviderError("Invalid response received from instance metadata service.", { logger: n.logger });
  return g(o);
};
var te = (0, import_chunk_w1d7ygsk.bo)(() => {
  W();
  S();
  O();
  h();
  D();
  R();
  z();
  Q = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_tf0gwgs2.Rj)()), L = (0, import_chunk_w1d7ygsk.rt)((0, import_chunk_fac79wqz.gw)());
});
var oe = () => {
};
var ge = (0, import_chunk_w1d7ygsk.bo)(() => {
  S();
  R();
  V();
  te();
  h();
  oe();
});
ge();
