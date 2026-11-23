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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
  };
  var fail = (e) => error = hasError ? new E2(e, error, "An error was suppressed during disposal") : (hasError = true, e);
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
var chunk_psvbzxg2_exports = {};
__export(chunk_psvbzxg2_exports, {
  EEn: () => EEn,
  HGr: () => HGr,
  _2o: () => _2o,
  hY: () => hY,
  kJn: () => kJn,
  kMt: () => kMt,
  oht: () => oht,
  vEn: () => vEn,
  zVs: () => zVs
});
module.exports = __toCommonJS(chunk_psvbzxg2_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_18rsj2ts = require("/$bunfs/root/chunk-18rsj2ts.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_c2m5gm43 = require("/$bunfs/root/chunk-c2m5gm43.js");
var import_chunk_sp2atpe0 = require("/$bunfs/root/chunk-sp2atpe0.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_jxja0v0z = require("/$bunfs/root/chunk-jxja0v0z.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_path = require("path");
var kJn = { invalid_path: "sad", unsupported_name: "sad", symlink_in_path: "sad", path_not_canonical: "sad", read_rule: "sad", not_found: "sad", not_a_directory: "sad", os_permission_denied: "sad", workspace_moved: "bad", unexpected_error: "bad" }, E = "list denied: ";
function hY(n, e) {
  return new import_chunk_jv7av99m.gr(`${E}${n}`, e, n);
}
function oht(n) {
  if (!(n instanceof import_chunk_jv7av99m.gr)) return;
  let e = n.errorClass;
  return e !== void 0 && k(e) && n.message === `${E}${e}` ? e : void 0;
}
function k(n) {
  return Object.hasOwn(kJn, n);
}
var HGr = 5e3, _ = 10 * HGr;
async function zVs(n, e, r, a) {
  try {
    var _stack = [];
    try {
      if (!(0, import_chunk_c2m5gm43.zSt)(n)) throw hY("invalid_path");
      if (!(0, import_path.isAbsolute)(e) || (0, import_chunk_cg8dqz0a.x)() !== "linux") throw hY("unexpected_error");
      let o = (0, import_path.resolve)(e, n);
      if (!(0, import_chunk_g9ztbtfd.ti)(e, o, true)) throw hY("invalid_path");
      let s = r();
      if ((0, import_chunk_2tqq6ycx.r0)(o, s.trustedNetworkDirectories) !== void 0) throw hY("unsupported_name");
      if (C(e, o, s)) throw hY("read_rule");
      const d = __using(_stack, await _2o(e, o), true);
      if (!(await (0, import_promises.readlink)(`/proc/self/fd/${d.fd}`, { encoding: "buffer" }).catch((i) => {
        throw (0, import_chunk_jv7av99m.w)(i) === "ENOENT" ? hY("unexpected_error") : i;
      })).equals(Buffer.from(o))) throw hY("path_not_canonical");
      let l = await S(d);
      if (a()) throw hY("workspace_moved");
      let c = r();
      if (c !== s && C(e, o, c)) throw hY("read_rule");
      let f = l.length > _;
      l.length = Math.min(l.length, _), l.sort((i, u) => i.name < u.name ? -1 : i.name > u.name ? 1 : 0);
      let m = [], L = (0, import_chunk_18rsj2ts.uh)(e, () => {
        for (let i of l) {
          let u = (0, import_path.join)(o, i.name);
          if (kMt(u, c, !i.isFile())) continue;
          if (i.name.trimEnd() !== i.name && kMt(`${u}${import_path.sep}`, c, !i.isFile())) continue;
          if (m.length === HGr) return true;
          m.push(i);
        }
        return false;
      }), T = await Promise.all(m.map((i) => I(d, i)));
      return { absPath: o, entries: T.filter((i) => i !== null), truncated: L || f && m.length > 0 };
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  } catch (o) {
    throw oht(o) !== void 0 ? o : v(o);
  }
}
var O = import_chunk_jxja0v0z.mO | import_fs.constants.O_DIRECTORY | import_fs.constants.O_NOFOLLOW | import_chunk_jxja0v0z.cr;
async function _2o(n, e) {
  let r = e.split(import_path.sep).filter((s) => s !== ""), a = (0, import_chunk_4smdap7r.U)((0, import_path.resolve)(n).split(import_path.sep), (s) => s !== "") - 1, o = await (0, import_promises.open)(import_path.sep, O);
  for (let [s, d] of r.entries()) {
    var _stack = [];
    try {
      const y = __using(_stack, o, true);
      let l = `/proc/self/fd/${y.fd}/${d}`;
      o = await (0, import_promises.open)(l, O).catch(async (c) => {
        let f = (0, import_chunk_jv7av99m.w)(c);
        if (f === "ENOENT") await (0, import_promises.lstat)(`/proc/self/fd/${y.fd}`).catch(() => {
          throw hY("unexpected_error");
        });
        if (f === "ENOTDIR" && (await (0, import_promises.lstat)(l)).isSymbolicLink()) throw hY(s < a ? "path_not_canonical" : "symlink_in_path");
        throw c;
      });
    } catch (_2) {
      var _error = _2, _hasError = true;
    } finally {
      var _promise = __callDispose(_stack, _error, _hasError);
      _promise && await _promise;
    }
  }
  return o;
}
async function S(n) {
  let e = await (0, import_promises.opendir)(`/proc/self/fd/${n.fd}`).catch((a) => {
    throw (0, import_chunk_jv7av99m.w)(a) === "ENOENT" ? hY("unexpected_error") : a;
  }), r = [];
  for await (let a of e) if (r.push(a), r.length > _) break;
  return r;
}
async function I(n, e) {
  let r = await (0, import_chunk_sp2atpe0.aR)(e, `/proc/self/fd/${n.fd}/${e.name}`, "unknown");
  if (r === "unknown") return null;
  if (r === "symlink") return { name: e.name, isDirectory: false, isSymlink: true };
  if (r === "other") return { name: e.name, isDirectory: false, isSpecial: true };
  return { name: e.name, isDirectory: r === "dir" };
}
function C(n, e, r) {
  return EEn(r) || (0, import_chunk_18rsj2ts.uh)(n, () => vEn(e, r));
}
function EEn(n) {
  return (0, import_chunk_p1ewvgeh.k2e)([], n).layer !== "allow";
}
function vEn(n, e) {
  return kMt(n, e, true) || ["deny", "ask"].some((r) => (0, import_chunk_p1ewvgeh.Cjt)(n, e, "read", r) !== null);
}
function kMt(n, e, r) {
  return (r ? [{}, { isDirectory: true }] : [{}]).some((o) => ["deny", "ask"].some((s) => (0, import_chunk_p1ewvgeh.Ia)(n, e, "read", s, o) !== null));
}
function v(n) {
  switch ((0, import_chunk_jv7av99m.w)(n)) {
    case "ENOENT":
      return hY("not_found");
    case "ENOTDIR":
      return hY("not_a_directory");
    case "ELOOP":
      return hY("symlink_in_path");
    case "ENAMETOOLONG":
      return hY("invalid_path");
    case "EACCES":
    case "EPERM":
      return hY("os_permission_denied");
    default:
      let e = `list_directory failed: ${(0, import_chunk_jv7av99m.op)(n) ?? "not a filesystem error"}`;
      return (0, import_chunk_w578pjby.t)(e, { level: "error" }), hY("unexpected_error", e);
  }
}
