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
var chunk_9mt9c1vn_exports = {};
__export(chunk_9mt9c1vn_exports, {
  AnthropicFoundry: () => y
});
module.exports = __toCommonJS(chunk_9mt9c1vn_exports);
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var c = (e) => (c = Array.isArray, c(e)), l = c;
var d = Symbol.for("brand.privateNullableHeaders");
function* h(e) {
  if (!e) return;
  if (d in e) {
    let { values: r, nulls: o } = e;
    yield* r.entries();
    for (let i of o) yield [i, null];
    return;
  }
  let t = false, n;
  if (e instanceof Headers) n = e.entries();
  else if (l(e)) n = e;
  else t = true, n = Object.entries(e ?? {});
  for (let r of n) {
    let o = r[0];
    if (typeof o !== "string") throw TypeError("expected header name to be a string");
    let i = l(r[1]) ? r[1] : [r[1]], f = false;
    for (let s of i) {
      if (s === void 0) continue;
      if (t && !f) f = true, yield [o, a];
      yield [o, s];
    }
  }
}
var a = Symbol("clear"), b = /* @__PURE__ */ new Set(["x-stainless-helper"]), x = (e, t) => {
  let n = e ? e.split(",").map((r) => r.trim()).filter(Boolean) : [];
  for (let r of t.split(",").map((o) => o.trim())) if (r && !n.includes(r)) n.push(r);
  return n.join(", ");
}, p = (e) => {
  let t = new Headers(), n = /* @__PURE__ */ new Set();
  for (let r of e) {
    let o = /* @__PURE__ */ new Set();
    for (let [i, f] of h(r)) {
      let s = i.toLowerCase();
      if (b.has(s)) {
        if (f === a) continue;
        if (f === null) t.delete(i), n.add(s);
        else t.set(i, x(t.get(i), f)), n.delete(s);
        continue;
      }
      if (f === a || !o.has(s)) {
        if (t.delete(i), o.add(s), f === a) continue;
      }
      if (f === null) t.delete(i), n.add(s);
      else t.append(i, f), n.delete(s);
    }
  }
  return { [d]: true, values: t, nulls: n };
};
var u = (e) => {
  if (typeof globalThis.process < "u") return globalThis.process.env?.[e]?.trim() || void 0;
  if (typeof globalThis.Deno < "u") return globalThis.Deno.env?.get?.(e)?.trim() || void 0;
  return;
};
class y extends import_chunk_gq1dr8pm.yje {
  constructor({ baseURL: e = u("ANTHROPIC_FOUNDRY_BASE_URL"), apiKey: t = u("ANTHROPIC_FOUNDRY_API_KEY"), resource: n = u("ANTHROPIC_FOUNDRY_RESOURCE"), azureADTokenProvider: r, dangerouslyAllowBrowser: o, ...i } = {}) {
    if (typeof r === "function") o = true;
    if (!r && !t) throw new import_chunk_jv7av99m.Mo("Missing credentials. Please pass one of `apiKey` and `azureTokenProvider`, or set the `ANTHROPIC_FOUNDRY_API_KEY` environment variable.");
    if (r && t) throw new import_chunk_jv7av99m.Mo("The `apiKey` and `azureADTokenProvider` arguments are mutually exclusive; only one can be passed at a time.");
    if (!e) {
      if (!n) throw new import_chunk_jv7av99m.Mo("Must provide one of the `baseURL` or `resource` arguments, or the `ANTHROPIC_FOUNDRY_RESOURCE` environment variable");
      e = `https://${n}.services.ai.azure.com/anthropic/`;
    } else if (n) throw new import_chunk_jv7av99m.Mo("baseURL and resource are mutually exclusive");
    super({ apiKey: r ?? t, baseURL: e, ...i, ...o !== void 0 ? { dangerouslyAllowBrowser: o } : {} });
    this.resource = null, this.messages = w(this), this.beta = E(this), this.models = void 0;
  }
  async authHeaders() {
    if (typeof this._options.apiKey === "function") {
      let e;
      try {
        e = await this._options.apiKey();
      } catch (t) {
        if (t instanceof import_chunk_jv7av99m.Mo) throw t;
        throw new import_chunk_jv7av99m.Mo(`Failed to get token from azureADTokenProvider: ${t.message}`, { cause: t });
      }
      if (typeof e !== "string" || !e) throw new import_chunk_jv7av99m.Mo(`Expected azureADTokenProvider function argument to return a string but it returned ${e}`);
      return p([{ Authorization: `Bearer ${e}` }]);
    }
    if (typeof this._options.apiKey === "string") return p([{ "x-api-key": this.apiKey }]);
    return;
  }
  validateHeaders() {
    return;
  }
  getUserAgent() {
    return `AnthropicFoundry/JS ${import_chunk_3f2ytgjw.IN}`;
  }
}
function w(e) {
  let t = new import_chunk_gq1dr8pm.LAe(e);
  return delete t.batches, t;
}
function E(e) {
  let t = new import_chunk_gq1dr8pm.DAe(e);
  return delete t.messages.batches, t;
}
