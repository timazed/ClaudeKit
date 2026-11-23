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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s2, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s2, _;
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
var chunk_v684xj67_exports = {};
__export(chunk_v684xj67_exports, {
  Bko: () => Bko,
  Wws: () => Wws,
  iEl: () => iEl,
  nEl: () => nEl,
  oEl: () => oEl,
  rEl: () => rEl,
  sEl: () => sEl
});
module.exports = __toCommonJS(chunk_v684xj67_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_crypto = require("crypto");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
function s(r) {
  return (0, import_path.join)((0, import_path.dirname)(r), "relay-caller-secret");
}
function nEl() {
  return (0, import_crypto.randomBytes)(32).toString("hex");
}
async function rEl(r, e, o) {
  let a = s(r);
  try {
    var _stack = [];
    try {
      await Wws(r);
      const n = __using(_stack, await (0, import_promises.open)(a, "wx", 384), true);
      if (await n.writeFile(`${e}:${o}`, "utf8"), ((await n.stat()).mode & 63) !== 0) throw Error("other accounts can read the file");
      return true;
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (n) {
    return (0, import_chunk_w578pjby.t)(`[agent-proxy] could not write the relay's caller secret for this account alone (${(0, import_chunk_jv7av99m.w)(n) ?? (n instanceof Error ? n.message : "unknown")})`, { level: "warn" }), await Wws(r).catch(() => {
    }), false;
  }
}
async function oEl(r, e) {
  let [o, a] = (await u(r)).split(":");
  return o === String(e) ? a : void 0;
}
var x = 128;
async function u(r) {
  try {
    var _stack = [];
    try {
      const e = __using(_stack, await (0, import_promises.open)(s(r), import_fs.constants.O_RDONLY | import_fs.constants.O_NOFOLLOW | import_fs.constants.O_NONBLOCK), true);
      return (await e.stat()).isFile() ? (await (0, import_chunk_w578pjby.KM)(e, x, "file")).toString() : "";
    } catch (_) {
      var _error = _, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (e) {
    if ((0, import_chunk_jv7av99m.w)(e) !== "ENOENT") (0, import_chunk_w578pjby.t)(`[agent-proxy] could not read the relay's caller secret (${(0, import_chunk_jv7av99m.w)(e) ?? "unreadable"})`, { level: "warn" });
    return "";
  }
}
async function Wws(r, e) {
  if (e !== void 0 && (await u(r)).split(":")[1] !== e) return;
  try {
    await (0, import_promises.unlink)(s(r));
  } catch (o) {
    if ((0, import_chunk_jv7av99m.w)(o) !== "ENOENT") throw o;
  }
}
var Bko = "agent-proxy relay";
function sEl(r) {
  return `Basic ${Buffer.from(`gh:${r}`).toString("base64")}`;
}
function iEl(r, e) {
  let o = /^proxy-authorization:[ \t]*basic[ \t]+(\S+)[ \t]*$/im.exec(r)?.[1], a = Buffer.from(o ?? "", "base64").toString("utf8"), n = a.indexOf(":"), f = n === -1 ? "" : a.slice(n + 1);
  return (0, import_crypto.timingSafeEqual)(c(f), c(e)) && e !== "";
}
function c(r) {
  return (0, import_crypto.createHash)("sha256").update(r).digest();
}
