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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
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
var chunk_xytxbeb6_exports = {};
__export(chunk_xytxbeb6_exports, {
  Jze: () => Jze,
  THs: () => THs,
  _1l: () => _1l,
  vHs: () => vHs
});
module.exports = __toCommonJS(chunk_xytxbeb6_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_fs = require("fs");
function Jze(e, { maxBytes: n, symlinkAtPath: t = "follow", regularFileOnly: r = t === "refuse" }) {
  var _stack = [];
  try {
    const f = __using(_stack, import_chunk_w578pjby.tw`fs.readBoundedSync(${e}, max ${n} bytes)`);
    let i = "r";
    if (t === "refuse") i = import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK;
    else if (r) i = import_fs.constants.O_RDONLY | import_fs.constants.O_NONBLOCK;
    let o = (0, import_fs.openSync)(e, i);
    try {
      if (r) {
        if (!(0, import_fs.fstatSync)(o).isFile()) throw Object.assign(Error("EINVAL: not a regular file"), { code: "EINVAL" });
      }
      return d(o, e, n);
    } finally {
      (0, import_fs.closeSync)(o);
    }
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function _1l(e, { maxBytes: n }) {
  var _stack = [];
  try {
    const t = __using(_stack, import_chunk_w578pjby.tw`fs.readInheritedFdSync(fd ${e}, max ${n} bytes)`);
    let r = (0, import_fs.fstatSync)(e);
    if (!r.isSocket() && !r.isFIFO()) throw new import_chunk_jv7av99m.A(`refusing to read fd ${e}: not a pipe or socket`, "readInheritedFdSync: descriptor is not a pipe or socket");
    return p(e, n);
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
function vHs(e) {
  return THs(e) === "socket";
}
function THs(e) {
  let n, t;
  try {
    let r = (0, import_fs.fstatSync)(e);
    n = r.isSocket(), t = r.isFIFO();
  } catch {
    return "not_open";
  }
  if (n) return "socket";
  return t ? "pipe" : "other";
}
function p(e, n) {
  try {
    return d(e, `fd ${e}`, n, { untilNewline: true });
  } finally {
    (0, import_fs.closeSync)(e);
  }
}
function d(e, n, t, { untilNewline: r = false } = {}) {
  let f = [], i = 0, o = Buffer.alloc(8192);
  while (true) {
    let s = (0, import_fs.readSync)(e, o, 0, o.length, null);
    if (s === 0) return Buffer.concat(f).toString("utf8");
    if (i += s, i > t) throw new import_chunk_jv7av99m.A(`refusing to read ${n}: content exceeds ${t} byte limit`, "readBoundedSync: content exceeds byte limit");
    let u = r ? o.subarray(0, s).indexOf(10) : -1;
    if (f.push(Buffer.from(o.subarray(0, u === -1 ? s : u + 1))), u !== -1) return Buffer.concat(f).toString("utf8");
  }
}
