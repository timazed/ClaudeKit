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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m, _) {
    return _ = Error(m), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
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
var chunk_e7pc50e8_exports = {};
__export(chunk_e7pc50e8_exports, {
  Q2r: () => Q2r,
  fka: () => fka,
  pka: () => pka
});
module.exports = __toCommonJS(chunk_e7pc50e8_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var fka = "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.", s = 268435456;
function Q2r(t) {
  let e = (0, import_chunk_0jve1fep.Ys)(t).trimStart();
  return e.startsWith("{") || (0, import_chunk_0jve1fep.et)(e, false) !== null;
}
async function pka(t) {
  let e = (0, import_path.resolve)(t);
  try {
    var _stack = [];
    try {
      const r = __using(_stack, await (0, import_promises.open)(e, (0, import_chunk_w578pjby.G8)()), true);
      let a = await r.stat({ bigint: true });
      (0, import_chunk_73gwqz1r.nBl)(a, e);
      let o = await (0, import_promises.realpath)(e).catch(() => e), n = await (0, import_promises.stat)(o, { bigint: true });
      if (n.dev !== a.dev || n.ino !== a.ino) return { ok: false, error: `Error: --agents file changed while it was read: ${e}` };
      let { content: i } = await (0, import_chunk_73gwqz1r.oQe)(r, e, s);
      return { ok: true, json: i, filePath: e, realPath: o };
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (r) {
    switch ((0, import_chunk_jv7av99m.w)(r)) {
      case "ENOENT":
        return { ok: false, error: `Error: --agents file not found: ${e} (a value that is not a JSON object is read as a file path)` };
      case "ERR_FILE_TOO_LARGE":
        return { ok: false, error: `Error: --agents file is larger than ${s} bytes: ${e}` };
      case "ERR_MULTIPLE_LINKS":
        return { ok: false, error: `Error: --agents file has more than one hard link: ${e} (its other names are not write-protected; pass a file with one name)` };
      default:
        return { ok: false, error: `Error reading --agents file ${e}: ${(0, import_chunk_jv7av99m.d)(r)}` };
    }
  }
}
