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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m, _2) {
    return _2 = Error(m), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
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
var chunk_p9da7c9y_exports = {};
__export(chunk_p9da7c9y_exports, {
  Axe: () => Axe,
  BTo: () => BTo,
  D2n: () => D2n,
  GAr: () => GAr,
  GTs: () => GTs,
  Glt: () => Glt,
  Gwe: () => Gwe,
  ITt: () => ITt,
  J6i: () => J6i,
  L2n: () => L2n,
  MTt: () => MTt,
  N2n: () => N2n,
  N4l: () => N4l,
  Q6i: () => Q6i,
  Vlt: () => Vlt,
  WAr: () => WAr,
  WTs: () => WTs,
  Z6i: () => Z6i,
  ZGt: () => ZGt,
  ZLe: () => ZLe,
  eNe: () => eNe,
  ezt: () => ezt,
  ffn: () => ffn,
  jAr: () => jAr,
  jTs: () => jTs,
  jlt: () => jlt,
  p7e: () => p7e,
  zlt: () => zlt
});
module.exports = __toCommonJS(chunk_p9da7c9y_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_6sjp0rab = require("/$bunfs/root/chunk-6sjp0rab.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_paa8n07f = require("/$bunfs/root/chunk-paa8n07f.js");
var import_path = require("path");
var import_path2 = require("path");
var import_path3 = require("path");
var import_fs = require("fs");
var import_promises = require("fs/promises");
var import_promises2 = require("fs/promises");
var import_promises3 = require("fs/promises");
var import_path4 = require("path");
var import_path5 = require("path");
var h = (r, o) => new import_chunk_hcg738hf.je(`${r}: ${o}: changed while it was read`);
class ZGt extends import_chunk_hcg738hf.je {
}
var x = (r) => r instanceof Error && "code" in r ? String(r.code) : "EIO";
var WAr = (r, o, e) => new import_chunk_hcg738hf.je(`${r}: ${o}: no such file`, { cause: x(e) });
var H = ["EMFILE", "ENFILE"];
async function ZLe(r, o) {
  try {
    return await r;
  } catch (e) {
    throw o(e);
  }
}
function J6i(r, o, e) {
  let t = x(e);
  return H.includes(t) ? new import_chunk_hcg738hf.je(`${r}: ${o}: not read, no file descriptor free (${t})`) : WAr(r, o, e);
}
var Y = (r, o, e) => new import_chunk_hcg738hf.je(`${r}: ${o}: not readable (${x(e)})`);
var _ = `/** @jsxRuntime classic */
/** @jsx h */
/** @jsxFrag Fragment */
`;
var D2n = (r) => import_chunk_6sjp0rab.XDs[import_chunk_6sjp0rab.C_n.find((o) => r.endsWith(o)) ?? ""] ?? "js";
function T(r) {
  let o = typeof r === "object" && r ? r : {}, e = "errors" in o ? o.errors : void 0;
  return Array.isArray(e) ? e : [o];
}
function M(r, o) {
  let e = typeof r === "object" && r !== null, t = e && "message" in r ? String(r.message) : "", s = e && "position" in r ? r.position : void 0;
  if (!(typeof s === "object" && s !== null && "line" in s && typeof s.line === "number" && "column" in s)) return t;
  return `${t} (line ${Number(s.line) - o}, column ${String(s.column)})`;
}
var b = (r, o) => T(r).map((e) => M(e, o)).filter((e) => e !== "").join("; ") || String(r);
function jlt(r, o) {
  let e = D2n(r), t = e === "js", s = e === "ts" ? "" : _;
  if (t) return o;
  try {
    let n = { loader: e, macro: false };
    return new Bun.Transpiler(n).transformSync(`${s}${o}`);
  } catch (n) {
    throw new import_chunk_hcg738hf.je(b(n, (0, import_chunk_7cfjrnwy.Mt)(s, `
`)));
  }
}
var L2n = (r) => import_chunk_6sjp0rab.C_n.some((o) => r.endsWith(o));
var ezt = 32;
var ffn = 1048576;
var p7e = 8388608;
function jAr(r) {
  let o = [r];
  if (r.endsWith(".js")) {
    let e = r.slice(0, -3);
    o.push(`${e}.ts`, `${e}.tsx`);
  }
  if (r.endsWith(".jsx")) o.push(`${r.slice(0, -4)}.tsx`);
  if (r.endsWith(".mjs")) o.push(`${r.slice(0, -4)}.mts`);
  if (r.endsWith(".cjs")) o.push(`${r.slice(0, -4)}.cts`);
  for (let e of import_chunk_6sjp0rab.C_n) o.push(`${r}${e}`), o.push(`${r}${import_path.sep}index${e}`);
  return o;
}
var Axe = "claude-code";
var ITt = (r, o, e) => new import_chunk_hcg738hf.je(`${r}: cannot import "${o}" (from ${e}): a hooks module imports its own files by relative path and "${Axe}", nothing else`);
var GAr = (r, o) => [".", "..", "./", "../"].includes(r) ? (0, import_path2.resolve)((0, import_path2.dirname)(o), r, "index") : (0, import_path2.resolve)((0, import_path2.dirname)(o), r);
var MTt = (r) => r === "." || r === ".." || r.startsWith("./") || r.startsWith("../");
var WTs = ["no such file", "not a regular file", "resolves outside the plugin's folder"];
class jTs extends ZGt {
}
var BTo = (r, o, e = ffn) => new jTs(`${r}: ${o} is over ${e} bytes and was not read`);
async function GTs(r, o) {
  let e = Buffer.allocUnsafeSlow(o), t = 0;
  for (; ; ) {
    let { bytesRead: s } = await r.read(e, t, o - t, t);
    if (t += s, s === 0 || t === o) return e.subarray(0, t);
  }
}
function L(r, o) {
  return (0, import_promises2.realpath)(o);
}
async function w(r, { real: o, size: e }, t, { most: s, isSized: n }) {
  var _stack = [];
  try {
    if (e > s) throw BTo(t, r, s);
    let i = (m) => J6i(t, r, m);
    const l = __using(_stack, await ZLe((0, import_promises.open)(o, import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.Fo), (m) => x(m) === "ELOOP" ? h(t, r) : i(m)), true);
    let f = await ZLe(l.stat(), i);
    if (!f.isFile()) throw h(t, r);
    if (await ZLe(L(l.fd, o), i) !== o) throw h(t, r);
    if (f.size > s) throw BTo(t, r, s);
    let c = await ZLe(GTs(l, (n ? f.size : s) + 1), i);
    if (c.length > s) throw BTo(t, r, s);
    if (n && c.length !== f.size) throw h(t, r);
    return c;
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
async function S(r, o, e) {
  let t = await w(r, o, e, { most: ffn, isSized: false });
  return { real: o.real, source: t.toString("utf8") };
}
async function eNe(r, o, e) {
  let t = await ZLe((0, import_promises3.realpath)(o), (g) => Y(e, (0, import_path4.basename)(o), g)), s = (g) => J6i(e, r, g), n = await ZLe((0, import_promises3.realpath)(r), s), i = (0, import_path4.relative)(t, n);
  if (i === ".." || i.startsWith(`..${import_path4.sep}`) || (0, import_path4.isAbsolute)(i)) throw new import_chunk_hcg738hf.je(`${e}: ${r}: ${n} resolves outside the plugin's folder`);
  if ((0, import_chunk_paa8n07f.g7e)(o, r) || (0, import_chunk_paa8n07f.g7e)(t, n)) throw new import_chunk_hcg738hf.je(`${e}: ${r}: ${import_chunk_paa8n07f.SX}`);
  let f = await ZLe((0, import_promises3.lstat)(n), s);
  if (!f.isFile()) throw new import_chunk_hcg738hf.je(`${e}: ${r}: not a regular file`);
  return { real: n, size: f.size };
}
var Q6i = (r, o) => new ZGt(`${r}: ${o} is not named like code and was not loaded: a hooks module and the files it imports end in ` + import_chunk_6sjp0rab.uDo);
function y(r, o, e) {
  let t = [o, e].find((s) => !L2n(s));
  if (t !== void 0) throw Q6i(r, t);
}
var N2n = (r, o) => o.startsWith(`${r}: `) ? o.slice(`${r}: `.length) : o;
async function Z6i({ spelled: r, importer: o, root: e, pluginName: t }, s, n) {
  let i = `${t}: cannot import "${r}" (from ${(0, import_path3.relative)(e, o) || o}):`, l = GAr(r, o), f = (0, import_path3.relative)(e, l);
  if (f === ".." || f.startsWith(`..${import_path3.sep}`) || (0, import_path3.isAbsolute)(f)) throw new import_chunk_hcg738hf.je(`${i} it is outside the plugin's folder (${e})`);
  let c = [];
  for (let m of jAr(l)) {
    let A = s.get(m);
    if (A !== void 0) return { file: m, source: A };
    try {
      let u = await eNe(m, e, t);
      y(t, m, u.real);
      let p = n.get(u.real), O = p === void 0 ? void 0 : s.get(p);
      if (p !== void 0 && O !== void 0) return { file: p, source: O };
      let { real: k, source: D } = await S(m, u, t);
      return { file: m, source: D, real: k };
    } catch (u) {
      let p = (0, import_chunk_jv7av99m.d)(u);
      if (!(u instanceof import_chunk_hcg738hf.je) || !WTs.some((k) => p.endsWith(k))) throw new import_chunk_hcg738hf.je(`${i} ${N2n(t, p)}`);
      let F = u.cause === void 0;
      c.push(F ? p : `${p} (${String(u.cause)})`);
    }
  }
  throw new import_chunk_hcg738hf.je(`${i} no such file under ${e}`, c.length === 0 ? void 0 : { cause: c.join("; ") });
}
var v = (r, o, e) => new import_chunk_hcg738hf.je(`${r}: ${o} ${e}`);
var N4l = (r, o) => v(r, o, `takes the module over ${p7e} bytes in total and was not read`);
async function Glt(r, o, e) {
  let t = await eNe(r, o, e);
  return y(e, r, t.real), S(r, t, e);
}
var zlt = (r) => r.endsWith(".wasm");
var Gwe = 67108864;
async function Vlt(r, o, e) {
  let t = (0, import_path5.resolve)(o, ...r.split("/")), s = await eNe(t, o, e);
  if (!zlt(s.real)) throw new ZGt(`${e}: ${t} is a link to a file not named .wasm and was not read`);
  return w(t, s, e, { most: Gwe, isSized: true });
}
