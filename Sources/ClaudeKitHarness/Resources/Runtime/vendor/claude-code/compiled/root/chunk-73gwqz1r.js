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
  var E2 = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _) {
    return _ = Error(m2), _.name = "SuppressedError", _.error = e, _.suppressed = s, _;
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
var chunk_73gwqz1r_exports = {};
__export(chunk_73gwqz1r_exports, {
  Age: () => Age,
  Cge: () => Cge,
  E3: () => E3,
  G_n: () => G_n,
  Jqt: () => Jqt,
  K0r: () => K0r,
  Lxt: () => Lxt,
  M0s: () => M0s,
  MEe: () => MEe,
  RB: () => RB,
  V0r: () => V0r,
  ese: () => ese,
  fra: () => fra,
  gra: () => gra,
  hra: () => hra,
  l4n: () => l4n,
  mra: () => mra,
  nBl: () => nBl,
  oQe: () => oQe,
  pra: () => pra,
  vD: () => vD,
  wk: () => wk,
  yft: () => yft,
  z_n: () => z_n
});
module.exports = __toCommonJS(chunk_73gwqz1r_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_43nz5n02 = require("/$bunfs/root/chunk-43nz5n02.js");
var import_buffer = require("buffer");
var import_fs = require("fs");
var import_promises = require("fs/promises");
function Lxt(n) {
  let e = (0, import_chunk_43nz5n02.yL)(n);
  return (0, import_chunk_43nz5n02.Ro)(e) ? import_chunk_43nz5n02.Vr : e;
}
function K0r(n) {
  let e = (0, import_chunk_sah8dzn4.e3n)(n);
  return e.includes("\\") || /%[0-9A-Fa-f]{2}/.test(e) || e.split(/[/?#]/).some((r) => r === "." || r === "..");
}
function gra(n) {
  let e = n.trimStart(), r = /^([A-Za-z][A-Za-z0-9+.-]*):\/\//.exec(e);
  if (r === null || /^https?$/i.test(r[1] ?? "")) return (0, import_chunk_sah8dzn4.Jft)(e);
  return (0, import_chunk_sah8dzn4.Jft)(r[0] + (0, import_chunk_sah8dzn4.e3n)(e.slice(r[0].length)));
}
function Age(n) {
  if (n.includes("%00") || n.includes("\0")) return true;
  if ((0, import_chunk_43nz5n02.Rge)(n)) return true;
  let e = [(0, import_chunk_sah8dzn4.$ge)(n)?.host, (0, import_chunk_sah8dzn4.$ge)(n, { asRewritten: true })?.host];
  if (n.includes("://")) e.push((0, import_chunk_sah8dzn4.Jft)(n.trimStart())?.hostname || void 0, gra(n)?.hostname || void 0);
  let r = e.map((i) => i === void 0 ? null : Lxt(i));
  return r.some((i) => i !== r[0]);
}
function m(n, e) {
  if (!(0, import_chunk_w578pjby.qoa)()) return;
  let { resolvedPath: r, isSymlink: i } = (0, import_chunk_w578pjby.no)(n, e);
  if (i) (0, import_chunk_w578pjby.t)(`Reading through symlink: ${e} -> ${r}`);
}
function L(n, e, r) {
  let i = n.statSync(e);
  return MEe(i, e, r), i;
}
function MEe(n, e, r) {
  if (n.isDirectory()) throw Object.assign(Error("EISDIR: illegal operation on a directory, read"), { code: "EISDIR", errno: -21, syscall: "read", path: e });
  if (!n.isFile()) throw u(e);
  if (r !== void 0 && n.size > r) throw Object.assign(Error("File exceeds maxBytes limit"), { code: "ERR_FILE_TOO_LARGE", path: e, size: n.size, maxBytes: r });
}
function u(n) {
  return Object.assign(Error("Not a regular file (device, FIFO, or socket)"), { code: "ERR_NOT_REGULAR_FILE", path: n });
}
var G_n = 10485760;
function y() {
  return false;
}
function x(n, e) {
  let { resolvedPath: r, isCanonical: i } = (0, import_chunk_w578pjby.no)((0, import_chunk_w578pjby.le)(), e);
  if (i) return r;
  return (0, import_chunk_jv7av99m.kn)(n) ? e : void 0;
}
async function V0r(n, e) {
  if (e?.refusesName(n)) throw u(n);
  let r = await (0, import_promises.open)(n, (0, import_chunk_w578pjby.G8)()).catch((i) => {
    if ((0, import_chunk_jv7av99m.w)(i) !== "EAGAIN") throw i;
    return (0, import_promises.open)(n, "r");
  });
  try {
    let i = await r.stat().catch(() => null);
    if (i !== null) {
      if (MEe(i, n, e?.maxSizedBytes), i.size !== 0) {
        if (e === void 0) return null;
        let o = await (0, import_chunk_w578pjby.KM)(r, e.maxSizedBytes + 1, "file");
        return l4n(o.length, n, e.maxSizedBytes), o;
      }
    }
    if (e !== void 0 && y()) {
      let o = await (0, import_promises.readlink)(`/proc/self/fd/${r.fd}`).catch((s) => x(s, n));
      if (e.refusesName(o)) throw u(n);
    }
    return await M0s(r, n);
  } finally {
    await r.close().catch(() => {
    });
  }
}
function fra(n, e) {
  var _stack = [];
  try {
    const r = __using(_stack, import_chunk_w578pjby.tw`readUnsizedFileBytesSync(${n})`);
    if (e?.(n)) throw u(n);
    let i = (0, import_fs.openSync)(n, (0, import_chunk_w578pjby.G8)());
    try {
      let o;
      try {
        o = (0, import_fs.fstatSync)(i);
      } catch {
      }
      if (o !== void 0) MEe(o, n, G_n);
      if (e !== void 0 && y()) {
        let a;
        try {
          a = (0, import_fs.readlinkSync)(`/proc/self/fd/${i}`);
        } catch (c) {
          a = x(c, n);
        }
        if (e(a)) throw u(n);
      }
      let s = (0, import_chunk_w578pjby.LLs)(i, G_n + 8, "stream");
      return l4n(s.length, n, G_n), s;
    } finally {
      try {
        (0, import_fs.closeSync)(i);
      } catch {
      }
    }
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    __callDispose(_stack, _error, _hasError);
  }
}
async function M0s(n, e) {
  let r = await (0, import_chunk_w578pjby.KM)(n, G_n + 8, "stream");
  return l4n(r.length, e, G_n), r;
}
function nBl(n, e) {
  if (n.isFile() && Number(n.nlink) > 1) throw Object.assign(Error("File has more than one hard link"), { code: "ERR_MULTIPLE_LINKS", path: e });
}
function l4n(n, e, r) {
  if (r === void 0) return;
  if (n > r) throw Object.assign(Error("File exceeds maxBytes limit"), { code: "ERR_FILE_TOO_LARGE", path: e, size: n, maxBytes: r });
}
function ese(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_NOT_REGULAR_FILE";
}
function vD(n) {
  return n != null && typeof n === "object" && "code" in n && n.code === "ERR_FILE_TOO_LARGE";
}
function Cge(n) {
  if (n.byteLength === 0) return "utf8";
  if (n.byteLength >= 2) {
    if (n[0] === 255 && n[1] === 254) return "utf16le";
  }
  if (n.byteLength >= 3 && n[0] === 239 && n[1] === 187 && n[2] === 191) return "utf8";
  return "utf8";
}
var g = 4096, h = 8e3;
function pra(n) {
  return n.subarray(0, h).includes(0);
}
function yft(n) {
  let e = Cge(n.subarray(0, g));
  if (e !== "utf8") return { encoding: e };
  if (n.byteLength >= 2 && n[0] === 254 && n[1] === 255) return { encoding: e, notText: "utf16be" };
  if (pra(n)) return { encoding: e, notText: "nul" };
  return (0, import_buffer.isUtf8)(n) ? { encoding: e } : { encoding: e, notText: "not_utf8" };
}
function Jqt(n, e) {
  return e !== "" && n?.charCodeAt(0) === 65279 && e.charCodeAt(0) !== 65279 ? `\uFEFF${e}` : e;
}
function E3(n) {
  let e = Cge(n.subarray(0, g));
  return Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString(e).replaceAll(`\r
`, `
`);
}
function mra(n) {
  let { buffer: e, bytesRead: r } = (0, import_chunk_w578pjby.le)().readSync(n, { length: g });
  return Cge(e.subarray(0, r));
}
function z_n(n) {
  let e = 0, r = 0;
  for (let i = 0; i < n.length; i++) if (n[i] === `
`) if (i > 0 && n[i - 1] === "\r") e++;
  else r++;
  return e > r ? "CRLF" : "LF";
}
function hra(n, e, r) {
  let i = (0, import_chunk_w578pjby.le)();
  m(i, n);
  let o = L(i, n, e);
  r?.(o);
  let s = e === void 0 && o.size === 0 ? fra(n) : void 0, a = s === void 0 ? mra(n) : Cge(s), c;
  if (s !== void 0) c = s.toString(a);
  else if (e === void 0) c = i.readFileSync(n, { encoding: a });
  else {
    let { buffer: d, bytesRead: p } = i.readSync(n, { length: e + 1 });
    l4n(p, n, e), c = d.subarray(0, p).toString(a);
  }
  let f = z_n(c.slice(0, 4096));
  return { content: c.replaceAll(`\r
`, `
`), encoding: a, lineEndings: f };
}
function RB(n, e, r) {
  return hra(n, e, r).content;
}
async function wk(n, e, r) {
  var _stack = [];
  try {
    let i = (0, import_chunk_w578pjby.le)();
    m(i, n), MEe(await i.stat(n), n, e);
    const o = __using(_stack, await (0, import_promises.open)(n, (0, import_chunk_w578pjby.G8)()), true);
    return await oQe(o, n, e, r);
  } catch (_) {
    var _error = _, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function oQe(n, e, r, i) {
  let o = await n.stat();
  MEe(o, e, r), i?.(o);
  let s;
  if (r !== void 0) s = await (0, import_chunk_w578pjby.KM)(n, r + 1, "file"), l4n(s.length, e, r);
  else if (o.size === 0) s = await M0s(n, e);
  else s = await n.readFile();
  let { encoding: a, notText: c } = yft(s), f = s.toString(a), d = z_n(f.slice(0, 4096));
  return { content: f.replaceAll(`\r
`, `
`), encoding: a, lineEndings: d, ...c && { notText: c } };
}
