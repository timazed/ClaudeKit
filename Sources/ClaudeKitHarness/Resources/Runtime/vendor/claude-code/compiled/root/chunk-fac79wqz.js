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
var chunk_fac79wqz_exports = {};
__export(chunk_fac79wqz_exports, {
  gw: () => gw
});
module.exports = __toCommonJS(chunk_fac79wqz_exports);
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var gw = (0, import_chunk_w1d7ygsk.V)(function(h) {
  class s extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(r, t = true) {
      let n, e = true;
      if (typeof t === "boolean") n = void 0, e = t;
      else if (t != null && typeof t === "object") n = t.logger, e = t.tryNextLink ?? true;
      super(r);
      this.tryNextLink = e, Object.setPrototypeOf(this, s.prototype), n?.debug?.(`@smithy/property-provider ${e ? "->" : "(!)"} ${r}`);
    }
    static from(r, t = true) {
      return Object.assign(new this(r.message, t), r);
    }
  }
  class f extends s {
    name = "CredentialsProviderError";
    constructor(r, t = true) {
      super(r, t);
      Object.setPrototypeOf(this, f.prototype);
    }
  }
  class l extends s {
    name = "TokenProviderError";
    constructor(r, t = true) {
      super(r, t);
      Object.setPrototypeOf(this, l.prototype);
    }
  }
  var y = (...r) => async () => {
    if (r.length === 0) throw new s("No providers in chain");
    let t;
    for (let n of r) try {
      return await n();
    } catch (e) {
      if (t = e, e?.tryNextLink) continue;
      throw e;
    }
    throw t;
  }, p = (r) => () => Promise.resolve(r), d = (r, t, n) => {
    let e, o, i, c = false, a = async () => {
      if (!o) o = r();
      try {
        e = await o, i = true, c = false;
      } finally {
        o = void 0;
      }
      return e;
    };
    if (t === void 0) return async (u) => {
      if (!i || u?.forceRefresh) e = await a();
      return e;
    };
    return async (u) => {
      if (!i || u?.forceRefresh) e = await a();
      if (c) return e;
      if (n && !n(e)) return c = true, e;
      if (t(e)) return await a(), e;
      return e;
    };
  };
  h.CredentialsProviderError = f;
  h.ProviderError = s;
  h.TokenProviderError = l;
  h.chain = y;
  h.fromStatic = p;
  h.memoize = d;
});
