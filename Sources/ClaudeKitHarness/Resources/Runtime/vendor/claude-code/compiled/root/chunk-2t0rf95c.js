const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
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
var __using = (stack, value, async) => {
  if (value != null) {
    if (typeof value !== "object" && typeof value !== "function") __typeError("Object expected");
    var dispose, inner;
    if (async) dispose = value[__knownSymbol("asyncDispose")];
    if (dispose === void 0) {
      dispose = value[__knownSymbol("dispose")];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") __typeError("Object not disposable");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    stack.push([async, dispose, value]);
  } else if (async) {
    stack.push([async]);
  }
  return value;
};
var __callDispose = (stack, error, hasError) => {
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
  };
  var fail = (e) => error = hasError ? new E(e, error, "An error was suppressed during disposal") : (hasError = true, e);
  var next = (it) => {
    while (it = stack.pop()) {
      try {
        var result = it[1] && it[1].call(it[2]);
        if (it[0]) return Promise.resolve(result).then(next, (e) => (fail(e), next()));
      } catch (e) {
        fail(e);
      }
    }
    if (hasError) throw error;
  };
  return next();
};
var chunk_2t0rf95c_exports = {};
__export(chunk_2t0rf95c_exports, {
  A8n: () => A8n
});
module.exports = __toCommonJS(chunk_2t0rf95c_exports);
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_kj84g0v7 = require("/$bunfs/root/chunk-kj84g0v7.js");
async function A8n(s, i) {
  var _stack = [];
  try {
    const a = __using(_stack, new DisposableStack());
    let t = /* @__PURE__ */ new Map();
    for (let e of i) {
      if (e.type !== "http" && e.type !== "sse") continue;
      let r = (0, import_chunk_yz5b8aaa.kc)(s, e);
      if (!t.has(r)) t.set(r, e), a.use((0, import_chunk_kj84g0v7.U$a)(r));
    }
    if (await (0, import_chunk_yz5b8aaa.oB)() === import_chunk_zzrn5zap.bs) return { cleared: false, reason: "credential_store_failed" };
    let c = require("/$bunfs/root/chunk-4kvvnjdb.js").mcpAuthModule(), o = { cleared: true };
    for (let e of t.values()) {
      let r = await c.revokeServerTokens(s, e);
      if (!r.cleared && (o.cleared || r.reason === "credential_store_failed")) o = r;
    }
    if (!o.cleared && o.reason === "credential_store_failed") return o;
    let n = await (0, import_chunk_yz5b8aaa.oB)();
    if (n === import_chunk_zzrn5zap.bs || [...t.keys()].some((e) => !!n?.mcpOAuth?.[e])) return { cleared: false, reason: "credential_store_failed" };
    return o;
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
