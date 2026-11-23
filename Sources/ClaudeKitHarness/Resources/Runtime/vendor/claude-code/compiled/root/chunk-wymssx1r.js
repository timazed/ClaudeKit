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
var chunk_wymssx1r_exports = {};
__export(chunk_wymssx1r_exports, {
  C4: () => C4
});
module.exports = __toCommonJS(chunk_wymssx1r_exports);
var import_chunk_tpn2kte3 = require("/$bunfs/root/chunk-tpn2kte3.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var m = (0, import_chunk_w1d7ygsk.V)(function(v) {
  Object.defineProperty(v, "__esModule", { value: true });
  v.getHomeDir = void 0;
  var T = (0, import_chunk_w1d7ygsk.ft)("os"), b = (0, import_chunk_w1d7ygsk.ft)("path"), h = {}, Q = () => {
    if (process && process.geteuid) return `${process.geteuid()}`;
    return "DEFAULT";
  }, Y = () => {
    let { HOME: e, USERPROFILE: t, HOMEPATH: r, HOMEDRIVE: o = `C:${b.sep}` } = process.env;
    if (e) return e;
    if (t) return t;
    if (r) return `${o}${r}`;
    let n = Q();
    if (!h[n]) h[n] = T.homedir();
    return h[n];
  };
  v.getHomeDir = Y;
});
var _ = (0, import_chunk_w1d7ygsk.V)(function(H) {
  Object.defineProperty(H, "__esModule", { value: true });
  H.getSSOTokenFilepath = void 0;
  var j = (0, import_chunk_w1d7ygsk.ft)("crypto"), y = (0, import_chunk_w1d7ygsk.ft)("path"), C = m(), Z = (e) => {
    let r = j.createHash("sha1").update(e).digest("hex");
    return y.join(C.getHomeDir(), ".aws", "sso", "cache", `${r}.json`);
  };
  H.getSSOTokenFilepath = Z;
});
var A = (0, import_chunk_w1d7ygsk.V)(function(N) {
  Object.defineProperty(N, "__esModule", { value: true });
  N.getSSOTokenFromFile = N.tokenIntercept = void 0;
  var w = (0, import_chunk_w1d7ygsk.ft)("fs/promises"), L = _();
  N.tokenIntercept = {};
  var ee = async (e) => {
    if (N.tokenIntercept[e]) return N.tokenIntercept[e];
    let t = L.getSSOTokenFilepath(e), r = await w.readFile(t, "utf8");
    return JSON.parse(r);
  };
  N.getSSOTokenFromFile = ee;
});
var W = (0, import_chunk_w1d7ygsk.V)(function(M) {
  Object.defineProperty(M, "__esModule", { value: true });
  M.readFile = M.fileIntercept = M.filePromises = void 0;
  var q = (0, import_chunk_w1d7ygsk.ft)("fs/promises");
  M.filePromises = {};
  M.fileIntercept = {};
  var te = (e, t) => {
    if (M.fileIntercept[e] !== void 0) return M.fileIntercept[e];
    if (!M.filePromises[e] || t?.ignoreCache) M.filePromises[e] = q.readFile(e, "utf8");
    return M.filePromises[e];
  };
  M.readFile = te;
});
var C4 = (0, import_chunk_w1d7ygsk.V)(function(a) {
  var f = m(), G = _(), E = A(), F = (0, import_chunk_w1d7ygsk.ft)("path"), g = (0, import_chunk_tpn2kte3.uQe)(), u = W(), X = "AWS_PROFILE", B = "default", re = (e) => e.profile || process.env[X] || B, c = ".", oe = (e) => Object.entries(e).filter(([t]) => {
    let r = t.indexOf(c);
    if (r === -1) return false;
    return Object.values(g.IniSectionType).includes(t.substring(0, r));
  }).reduce((t, [r, o]) => {
    let n = r.indexOf(c), i = r.substring(0, n) === g.IniSectionType.PROFILE ? r.substring(n + 1) : r;
    return t[i] = o, t;
  }, { ...e.default && { default: e.default } }), ne = "AWS_CONFIG_FILE", J = () => process.env[ne] || F.join(f.getHomeDir(), ".aws", "config"), ie = "AWS_SHARED_CREDENTIALS_FILE", se = () => process.env[ie] || F.join(f.getHomeDir(), ".aws", "credentials"), ce = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/, ae = ["__proto__", "profile __proto__"], P = (e) => {
    let t = {}, r, o;
    for (let n of e.split(/\r?\n/)) {
      let i = n.split(/(^|\s)[;#]/)[0].trim();
      if (i[0] === "[" && i[i.length - 1] === "]") {
        r = void 0, o = void 0;
        let s = i.substring(1, i.length - 1), l = ce.exec(s);
        if (l) {
          let [, p, , O] = l;
          if (Object.values(g.IniSectionType).includes(p)) r = [p, O].join(c);
        } else r = s;
        if (ae.includes(s)) throw Error(`Found invalid profile name "${s}"`);
      } else if (r) {
        let s = i.indexOf("=");
        if (![0, -1].includes(s)) {
          let [l, p] = [i.substring(0, s).trim(), i.substring(s + 1).trim()];
          if (p === "") o = l;
          else {
            if (o && n.trimStart() === n) o = void 0;
            t[r] = t[r] || {};
            let O = o ? [o, l].join(c) : l;
            t[r][O] = p;
          }
        }
      }
    }
    return t;
  }, U = () => ({}), z = async (e = {}) => {
    let { filepath: t = se(), configFilepath: r = J() } = e, o = f.getHomeDir(), n = "~/", i = t;
    if (t.startsWith("~/")) i = F.join(o, t.slice(2));
    let S = r;
    if (r.startsWith("~/")) S = F.join(o, r.slice(2));
    let s = await Promise.all([u.readFile(S, { ignoreCache: e.ignoreCache }).then(P).then(oe).catch(U), u.readFile(i, { ignoreCache: e.ignoreCache }).then(P).catch(U)]);
    return { configFile: s[0], credentialsFile: s[1] };
  }, le = (e) => Object.entries(e).filter(([t]) => t.startsWith(g.IniSectionType.SSO_SESSION + c)).reduce((t, [r, o]) => ({ ...t, [r.substring(r.indexOf(c) + 1)]: o }), {}), ue = () => ({}), pe = async (e = {}) => u.readFile(e.configFilepath ?? J()).then(P).then(le).catch(ue), fe = (...e) => {
    let t = {};
    for (let r of e) for (let [o, n] of Object.entries(r)) if (t[o] !== void 0) Object.assign(t[o], n);
    else t[o] = n;
    return t;
  }, de = async (e) => {
    let t = await z(e);
    return fe(t.configFile, t.credentialsFile);
  }, Fe = { getFileRecord() {
    return u.fileIntercept;
  }, interceptFile(e, t) {
    u.fileIntercept[e] = Promise.resolve(t);
  }, getTokenRecord() {
    return E.tokenIntercept;
  }, interceptToken(e, t) {
    E.tokenIntercept[e] = t;
  } };
  Object.defineProperty(a, "getSSOTokenFromFile", { enumerable: true, get: function() {
    return E.getSSOTokenFromFile;
  } });
  Object.defineProperty(a, "readFile", { enumerable: true, get: function() {
    return u.readFile;
  } });
  a.CONFIG_PREFIX_SEPARATOR = c;
  a.DEFAULT_PROFILE = B;
  a.ENV_PROFILE = X;
  a.externalDataInterceptor = Fe;
  a.getProfileName = re;
  a.loadSharedConfigFiles = z;
  a.loadSsoSessionData = pe;
  a.parseKnownFiles = de;
  Object.keys(f).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(a, e)) Object.defineProperty(a, e, { enumerable: true, get: function() {
      return f[e];
    } });
  });
  Object.keys(G).forEach(function(e) {
    if (e !== "default" && !Object.prototype.hasOwnProperty.call(a, e)) Object.defineProperty(a, e, { enumerable: true, get: function() {
      return G[e];
    } });
  });
});
