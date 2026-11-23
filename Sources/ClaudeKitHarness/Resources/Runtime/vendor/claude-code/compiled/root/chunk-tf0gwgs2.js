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
var chunk_tf0gwgs2_exports = {};
__export(chunk_tf0gwgs2_exports, {
  Rj: () => Rj
});
module.exports = __toCommonJS(chunk_tf0gwgs2_exports);
var import_chunk_wymssx1r = require("/$bunfs/root/chunk-wymssx1r.js");
var import_chunk_fac79wqz = require("/$bunfs/root/chunk-fac79wqz.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var Rj = (0, import_chunk_w1d7ygsk.V)(function(y) {
  var t = (0, import_chunk_fac79wqz.gw)(), l = (0, import_chunk_wymssx1r.C4)();
  function d(e) {
    try {
      let o = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
      return o.delete("CONFIG"), o.delete("CONFIG_PREFIX_SEPARATOR"), o.delete("ENV"), [...o].join(", ");
    } catch (o) {
      return e;
    }
  }
  var h = (e, o) => async () => {
    try {
      let r = e(process.env, o);
      if (r === void 0) throw Error();
      return r;
    } catch (r) {
      throw new t.CredentialsProviderError(r.message || `Not found in ENV: ${d(e.toString())}`, { logger: o?.logger });
    }
  }, w = (e, { preferredFile: o = "config", ...r } = {}) => async () => {
    let n = l.getProfileName(r), { configFile: i, credentialsFile: c } = await l.loadSharedConfigFiles(r), s = c[n] || {}, g = i[n] || {}, m = o === "config" ? { ...s, ...g } : { ...g, ...s };
    try {
      let f = e(m, o === "config" ? i : c);
      if (f === void 0) throw Error();
      return f;
    } catch (a) {
      throw new t.CredentialsProviderError(a.message || `Not found in config files w/ profile [${n}]: ${d(e.toString())}`, { logger: r.logger });
    }
  }, F = (e) => typeof e === "function", u = (e) => F(e) ? async () => await e() : t.fromStatic(e), C = ({ environmentVariableSelector: e, configFileSelector: o, default: r }, n = {}) => {
    let { signingName: i, logger: c } = n, s = { signingName: i, logger: c };
    return t.memoize(t.chain(h(e, s), w(o, n), u(r)));
  };
  y.loadConfig = C;
});
