const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
  var E = typeof SuppressedError === "function" ? SuppressedError : function(e, s, m2, _2) {
    return _2 = Error(m2), _2.name = "SuppressedError", _2.error = e, _2.suppressed = s, _2;
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
var chunk_c2m5gm43_exports = {};
__export(chunk_c2m5gm43_exports, {
  DVl: () => DVl,
  Foo: () => Foo,
  G8a: () => G8a,
  HVl: () => HVl,
  IVl: () => IVl,
  LVl: () => LVl,
  Loo: () => Loo,
  MVl: () => MVl,
  Noo: () => Noo,
  OVl: () => OVl,
  Syi: () => Syi,
  Wtn: () => Wtn,
  _ss: () => _ss,
  gss: () => gss,
  hfr: () => hfr,
  hss: () => hss,
  iot: () => iot,
  j8a: () => j8a,
  jtn: () => jtn,
  mss: () => mss,
  pFt: () => pFt,
  qBe: () => qBe,
  yyi: () => yyi,
  zSt: () => zSt
});
module.exports = __toCommonJS(chunk_c2m5gm43_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_may4s35x = require("/$bunfs/root/chunk-may4s35x.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kpby9tcv = require("/$bunfs/root/chunk-kpby9tcv.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_r0q0n8n3 = require("/$bunfs/root/chunk-r0q0n8n3.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_09gzjq1e = require("/$bunfs/root/chunk-09gzjq1e.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_kzzkh06w = require("/$bunfs/root/chunk-kzzkh06w.js");
var import_chunk_2tqq6ycx = require("/$bunfs/root/chunk-2tqq6ycx.js");
var import_chunk_g9ztbtfd = require("/$bunfs/root/chunk-g9ztbtfd.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var import_chunk_839h1d5e = require("/$bunfs/root/chunk-839h1d5e.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_promises = require("fs/promises");
var import_path = require("path");
var import_crypto = require("crypto");
var import_path2 = require("path");
var import_fs = require("fs");
var import_promises2 = require("fs/promises");
var import_path3 = require("path");
var import_util = require("util");
var C = 65536, I = 1500, k = 3, re = import_chunk_0w2wb7gk.xGt - k;
function D(e) {
  let r = `colors must be a plain JSON object, a whole palette, of at most ${I} values in about ${C} characters, nested at most ${re} deep`;
  if (!(0, import_chunk_may4s35x.K_)(e)) return r;
  let n = (0, import_chunk_0w2wb7gk.Fun)(), o = (0, import_chunk_0w2wb7gk.PGt)(e, k, n);
  if (o?.startsWith("nests deeper") === true) return `${r}: this one nests too deep`;
  if (o !== void 0) return `${r}: this one ${o}`;
  if (n.nodes > I || n.chars > C) return `${r}: this one holds ${n.nodes} values in about ${n.chars} characters`;
  let s = (0, import_chunk_0w2wb7gk.xvo)(e);
  return s === void 0 ? void 0 : `colors may hold no key named ${s} here: a list holds no named key, and a surface that merges colors reaches a prototype through __proto__, constructor or prototype`;
}
var pe = 1024;
function zSt(e) {
  return typeof e === "string" && e.length <= pe && !e.includes("\0") && !e.includes("\\") && (0, import_chunk_7cfjrnwy.Cf)(e) && import_path.win32.parse(e).root === "" && !(0, import_chunk_n2dbhmj2.RM)(e);
}
function mss(e) {
  return e.split("/").some((r) => r.startsWith(".") && r !== ".");
}
function Loo(e) {
  return (0, import_chunk_2tqq6ycx.r0)((0, import_path.join)(import_path.sep, "base", ...e.split("/"))) !== void 0;
}
var fe = new RegExp(`[\\p{Cc}\\p{Cs}\\u2028\\u2029\\u2800\\u{13430}-\\u{1345F}]|(?![\\u200C\\u200D\\uFE00-\\uFE0F\\u{E0100}-\\u{E01EF}])[${import_chunk_kx2fp6pc.V6e}\\p{Cf}]`, "u"), O = /[\u200C\u200D\uFE00-\uFE0F\u{E0100}-\u{E01EF}]/u, me = new RegExp("\\p{Default_Ignorable_Code_Point}", "gu"), S = /^[\u094D\u09CD\u0A4D\u0ACD\u0B4D\u0BCD\u0C4D\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u1039\u103A\u17D2\uA8C4\uA953\uA9C0\u1B44\u1BAA\u1BAB]$/u, T = new RegExp("^[\\p{Script=Devanagari}\\p{Script=Bengali}\\p{Script=Gurmukhi}\\p{Script=Gujarati}\\p{Script=Oriya}\\p{Script=Tamil}\\p{Script=Telugu}\\p{Script=Kannada}\\p{Script=Malayalam}\\p{Script=Sinhala}\\p{Script=Myanmar}\\p{Script=Khmer}\\p{Script=Saurashtra}\\p{Script=Rejang}\\p{Script=Javanese}\\p{Script=Balinese}\\p{Script=Sundanese}](?<=\\p{L})$", "u"), v = new RegExp("^\\p{M}$", "u"), le = new RegExp("^(?![\\u0621-\\u0625\\u0627\\u0629\\u062F-\\u0632\\u0648\\u0671-\\u0673\\u0675-\\u0677\\u0688-\\u0699\\u06C0\\u06C4-\\u06CB\\u06CD\\u06CF\\u06D2\\u06D3\\u06D5\\u06EE\\u06EF])[\\p{Script=Arabic}\\p{Script=Syriac}\\p{Script=Nko}\\p{Script=Mandaic}\\p{Script=Mongolian}](?<=\\p{L})$", "u"), he = new RegExp("^[\\p{Script=Arabic}\\p{Script=Syriac}\\p{Script=Nko}\\p{Script=Mandaic}\\p{Script=Mongolian}](?<=\\p{L})$", "u"), ge = new RegExp("^\\p{Extended_Pictographic}$", "u"), ye = new RegExp("^(?![0-9#*])[\\p{Emoji}](?<!\\p{Emoji_Presentation})$", "u"), ke = /^[\p{Emoji_Presentation}\p{Emoji_Modifier}\uFE0F]$/u, Ee = /^[0-9#*]$/u, be = "\u20E3";
function Wtn(e) {
  if (fe.test(e)) return true;
  if (!O.test(e)) return false;
  let r = [...e];
  return r.some((n, o) => {
    if (!O.test(n)) return false;
    let s = r[o - 1] ?? "", a = r[o + 1] ?? "";
    switch (n) {
      case "\u200D":
        return !(S.test(s) && T.test(a) || T.test(s) && S.test(a) || ke.test(s) && ge.test(a));
      case "\u200C": {
        if (S.test(s) && T.test(a)) return false;
        let i = o - 1;
        while (i >= 0 && v.test(r[i] ?? "")) i--;
        let d = o + 1;
        while (d < r.length && v.test(r[d] ?? "")) d++;
        return !(le.test(r[i] ?? "") && he.test(r[d] ?? ""));
      }
      case "\uFE0F":
        return !(ye.test(s) || Ee.test(s) && a === be);
      default:
        return true;
    }
  });
}
function j8a(e) {
  let r = /* @__PURE__ */ new Map();
  for (let o of e) {
    let s = o.replace(me, "").normalize("NFKC"), a = r.get(s);
    if (a) a.push(o);
    else r.set(s, [o]);
  }
  let n = /* @__PURE__ */ new Set();
  for (let o of r.values()) if (o.length > 1) for (let s of o) n.add(s);
  return n;
}
function jtn(e, r, { acceptAbsolute: n }) {
  if ((0, import_path.isAbsolute)(r) && !n) return null;
  let o = (0, import_path.resolve)(e), s = (0, import_path.resolve)(o, r);
  return (0, import_chunk_g9ztbtfd.ti)(o, s, true) ? s : null;
}
async function yyi(e, r) {
  try {
    let [n, o] = await Promise.all([(0, import_promises.realpath)(e), (0, import_promises.realpath)(r)]);
    return (0, import_chunk_g9ztbtfd.ti)(n, o, true);
  } catch {
    return false;
  }
}
async function hfr(e, r) {
  let n = e;
  for (let o of (0, import_path.relative)(e, r).split(import_path.sep)) {
    if (o === "" || o === "..") return "none";
    n = (0, import_path.join)(n, o);
    try {
      if ((await (0, import_promises.lstat)(n)).isSymbolicLink()) return "link";
    } catch (s) {
      let a = (0, import_chunk_jv7av99m.w)(s);
      return a === "ENOENT" || a === "ENOTDIR" ? "none" : "unexaminable";
    }
  }
  return "none";
}
var L = 64, U = 64, b = String.raw`(\d+(\.\d+)?|\.\d+)%?`, j = String.raw`( *, *| +)`, Se = new RegExp(String.raw`^(#([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})|(rgb|hsl)a?\( *` + `${b}${j}${b}${j}${b}` + String.raw`( *[,/] *${b})? *\))$`), Te = ["scene", "color", "gradient", "vector", "image"], G = "gradient or vector: a color or a scene takes none", K = { stops: "gradient", angle: "gradient", shape: "gradient", viewBox: "vector", paths: "vector", colors: "the set itself: a look's theme is the colors attribute, beside backdrop", size: G, repeat: G }, x = 480, J = 256, W = { gradient: "{ stops, angle?, shape?, size?, repeat? }", vector: "{ viewBox, paths, color?, size?, repeat? }", image: "{ source, size?, repeat? }" }, Y = "backdrop is a scene, { scene, glass? }, or a still ground: { color }, { gradient: { stops } } or { vector: { viewBox, paths } }", _e = "backdrop takes no image: a ground is a color, a gradient, a vector or an SVG scene, so redraw the picture as SVG";
function we(e) {
  return zSt(e) && e !== "" && e.length <= J;
}
function z(e) {
  if (!(0, import_chunk_may4s35x.K_)(e)) return Y;
  let r = (0, import_chunk_xcgcdx61.mi)(e, (c) => c === null), { scene: n, glass: o, image: s } = r;
  if (s !== void 0) return _e;
  let a = Te.filter((c) => r[c] !== void 0), i = Object.keys(K).find((c) => r[c] !== void 0);
  if (i !== void 0) return `backdrop.${i} goes inside ${K[i]}`;
  if (a.length > 1) return `backdrop takes just one of scene, color, gradient or vector, and this names ${a.join(" and ")}`;
  if (a.length === 0) return Y;
  if (n === void 0) {
    let c = a.find((h) => Object.hasOwn(W, h));
    if (c !== void 0 && !(0, import_chunk_may4s35x.K_)(r[c])) return `backdrop.${c} is ${W[c]}`;
    if ((0, import_chunk_may4s35x.K_)(r.image) && !we(r.image.source)) return `backdrop.image.source is a path of 1 to ${J} characters, relative to the mod's folder, with / between folders and no ".." in it`;
    return o === void 0 ? xe(e) : "backdrop.glass is for a scene: a still ground has none";
  }
  if ((0, import_chunk_0w2wb7gk.Olt)(n) !== void 0) return "backdrop needs a scene: 1 to 64 of letters, digits, _ or -";
  if (o === void 0 || o === false) return;
  if (typeof o !== "object" || o === null) return "glass is { blur?, tint?, opacity? } or false";
  let d = "blur" in o ? o.blur : void 0, p = "opacity" in o ? o.opacity : void 0, f = "tint" in o ? o.tint : void 0;
  if (d !== void 0 && !(typeof d === "number" && d >= 0 && d <= L)) return `glass.blur is a number of points, 0 to ${L}`;
  if (p !== void 0 && !(typeof p === "number" && p >= 0 && p <= 1)) return "glass.opacity is a number, 0 to 1";
  if (f !== void 0 && !(typeof f === "string" && f.length <= U && Se.test(f))) return `glass.tint is a raw color, #hex or rgb(), rgba(), hsl() or hsla() of numbers, at most ${U} characters`;
  return;
}
function xe(e) {
  let r = (0, import_chunk_0w2wb7gk.Fun)(), n = (0, import_chunk_0w2wb7gk.PGt)(e, k, r);
  if (n !== void 0) return `backdrop must be plain JSON data of at most ${x} values: this one ${n}`;
  if (r.nodes > x) return `backdrop may hold at most ${x} values: this holds ${r.nodes}`;
  let o = (0, import_chunk_0w2wb7gk.xvo)(e);
  return o === void 0 ? void 0 : import_chunk_0w2wb7gk.Yjn.includes(o) ? `backdrop may hold no key named ${o}: a surface's merge of it would reach a prototype` : `backdrop may hold no named key on a list, and a list here has one named ${o}`;
}
var iot = "backdrop";
function qBe() {
  return (0, import_chunk_865at33z.ce)().theme.getState();
}
function hss(e) {
  let r = qBe(), n = r?.backdrop;
  return r !== void 0 && n?.scene !== void 0 && e === iot ? { scene: n.scene, plugin: r.plugin, glass: n.glass, ...r.overrideColorScheme !== void 0 && { overrideColorScheme: r.overrideColorScheme } } : void 0;
}
function OVl() {
  let e = (0, import_chunk_865at33z.ce)().themeTurns;
  e.taken += 1, e.landed = e.taken;
  let r = qBe() !== void 0;
  if (r) (0, import_chunk_865at33z.ce)().theme.setState(() => {
    return;
  }), (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_backdrop");
  return { isDrawn: false, reason: r ? "the theme is cleared" : "no theme stood, so nothing was cleared" };
}
function Syi(e) {
  let r = (0, import_chunk_865at33z.ce)().themeTurns;
  r.taken += 1, r.gone.set(e, r.taken), (0, import_chunk_865at33z.ce)().theme.setState((n) => n?.plugin === e ? void 0 : n);
}
var P = { blur: 16, opacity: 0.6 };
function X(e) {
  if (e === false) return false;
  return { blur: e?.blur ?? P.blur, opacity: e?.opacity ?? P.opacity, ...e?.tint !== void 0 && { tint: e.tint } };
}
var Noo = (0, import_chunk_t57w17k7.de)((0, import_chunk_r0q0n8n3.Xr)(), (e) => e.set(void 0));
var G8a = (0, import_chunk_865at33z.JGe)();
var gss = (0, import_chunk_839h1d5e.Co)(async () => {
  let { createDeviceTreeHost: e } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-0xmafpjw.js")));
  return e();
});
async function V(e, r, n, o) {
  var _stack = [];
  try {
    let s = await (0, import_chunk_p9da7c9y.ZLe)((0, import_promises2.realpath)(e), o.unreached), { openTreeAnchor: a } = await Promise.resolve().then(() => __toESM(require("/$bunfs/root/chunk-s69qvmrf.js"))), i = await (0, import_chunk_p9da7c9y.ZLe)(a(await gss(), { gitRoot: e, realRoot: s }), o.unreached);
    if ("unavailable" in i) throw o.unheld(i.unavailable);
    const d = __using(_stack, i, true);
    let p = (0, import_path3.relative)(s, r).split(import_path3.sep).join("/"), f = await (0, import_chunk_p9da7c9y.ZLe)(i.lstat(p), o.unreached), c = await (0, import_chunk_p9da7c9y.ZLe)(i.open(p, import_fs.constants.O_RDONLY | import_chunk_09gzjq1e.u2), o.unreached);
    try {
      let h = await (0, import_chunk_p9da7c9y.ZLe)(c.stat({ bigint: true }), o.unreached), g = await (0, import_chunk_p9da7c9y.ZLe)(i.lstat(p), o.unreached);
      if (!h.isFile()) throw o.unreached();
      if (f.nlink > 1n || g.nlink > 1n) throw o.secondName();
      if ((0, import_chunk_kpby9tcv.ia)(h.ino)) throw o.unheld("this drive gives the file no id");
      if ([f, g].some((E) => E.ino !== h.ino || E.dev !== h.dev)) throw o.unreached();
      if (h.size > BigInt(n)) throw o.oversize();
      let y = await (0, import_chunk_p9da7c9y.ZLe)((0, import_chunk_p9da7c9y.GTs)(c, n + 1), o.unreached);
      if (y.length > n) throw o.oversize();
      return y;
    } finally {
      await c.close();
    }
  } catch (_2) {
    var _error = _2, _hasError = true;
  } finally {
    var _promise = __callDispose(_stack, _error, _hasError);
    _promise && await _promise;
  }
}
var Ke = 1048576, A = 4096, R = 40960, We = "image:", q = 20, Ye = "it isn't a whole JPEG or PNG file";
function ze(e) {
  let r = import_chunk_0w2wb7gk.dvs.every((d, p) => e[p] === d), n = (0, import_chunk_kzzkh06w.cy)(e) === "image/jpeg";
  if (!r && !n) return "it has to be a JPEG or PNG file";
  let o = n ? (0, import_chunk_kzzkh06w.umo)(e, q) : 1;
  if (n && (!(0, import_chunk_kzzkh06w.cmo)(e) || o > q)) return "it's a JPEG that can't be read here: save it again as a standard JPEG";
  let s = n ? e : (0, import_chunk_kzzkh06w.fmo)(e), a = s?.toString("latin1", import_chunk_0w2wb7gk.o7e.typeAt, import_chunk_0w2wb7gk.o7e.widthAt) === import_chunk_0w2wb7gk.o7e.type && s.toString("latin1", s.length - 8).startsWith("IEND"), i = s === null ? void 0 : (0, import_chunk_kzzkh06w.DT)(s);
  if (s === null || i === void 0 || o === 0 || !(n || a) || i.width < 1 || i.height < 1) return Ye;
  return i.width > A || i.height > A ? `it's ${i.width} by ${i.height}: at most ${A} on a side, so save it smaller` : { facts: { type: n ? "jpeg" : "png", ...i }, bytes: s };
}
async function Xe(e, r, n, o) {
  let s = `theme.set: ${e}`, a = (0, import_path2.resolve)(n, e), i = (f) => new import_chunk_hcg738hf.je(`${r}: ${s} isn't read, so nothing was set: a theme's file is read only through a safe handle on the mod's folder, and Claude Code can't get one here (${f}). If the mod is on a network drive, move it to a local disk`);
  if ((0, import_chunk_xfj2cwfv.hAt)(a)) throw i("a network location");
  let d = await (0, import_chunk_xfj2cwfv.gAt)(a);
  if (d !== void 0) throw (0, import_chunk_w578pjby.t)(`${r}: ${s} ${d}`), (0, import_chunk_p9da7c9y.WAr)(r, s, void 0);
  let { real: p } = await (0, import_chunk_p9da7c9y.eNe)(a, n, r).catch((f) => {
    throw (0, import_chunk_p9da7c9y.WAr)(r, s, f);
  });
  return V(n, p, o.most, { unreached: (f) => (0, import_chunk_p9da7c9y.J6i)(r, s, f), unheld: i, oversize: () => new import_chunk_hcg738hf.je(`${r}: theme.set: ${e} is too big: at most ${o.most} bytes, so ${o.advice}`), secondName: () => new import_chunk_hcg738hf.je(`${r}: theme.set: ${e} has a second name (a hard link), so it isn't read: copy it to a file of its own`) });
}
async function Z(e, r, n) {
  let o = ze(await Xe(e, r, n, { most: Ke, advice: "save it about 2560 wide as a JPEG" }));
  if (typeof o === "string") throw new import_chunk_hcg738hf.je(`${r}: theme.set: ${e}: ${o}`);
  return { wire: { ...o.facts, id: (0, import_crypto.createHmac)("sha256", (0, import_chunk_865at33z.ce)().themeImageKey).update(o.bytes).digest("hex") }, hash: (0, import_chunk_ccm69jjy.Je)(o.bytes), data: o.bytes };
}
function _ss(e) {
  return e.startsWith(We);
}
function ee(e, r) {
  let [, n, o, ...s] = e.split(":"), a = Number(o), i = Math.ceil(r.data.length / R);
  return n === r.id && s.length === 0 && /^\d+$/.test(o ?? "") && a < i ? { data: r.data.subarray(a * R, (a + 1) * R).toString("base64"), index: a, of: i, hash: r.hash, bytes: r.data.length } : void 0;
}
function IVl(e) {
  return (0, import_chunk_865at33z.ce)().theme.subscribe(e);
}
var pFt = "theme";
function te(e, r, n, o, s = []) {
  let { backdrop: a, overrideColorScheme: i, colors: d, sound: p, style: f } = e, c = a?.scene ?? void 0, h = c === void 0 ? pFt : iot, g = { plugin: r.plugin, ...a !== void 0 && { backdrop: c === void 0 ? (0, import_chunk_0w2wb7gk.Nme)({ ...a, scene: void 0, ...o !== void 0 && { image: { ...o.wire, size: a.image?.size, repeat: a.image?.repeat } } }) : { scene: c, glass: X(a.glass) } }, ...o !== void 0 && { image: { id: o.wire.id, hash: o.hash, data: o.data } }, ...i !== void 0 && { overrideColorScheme: i }, ...d !== void 0 && { colors: (0, import_chunk_0w2wb7gk.Nme)(d) }, ...p !== void 0 && { sound: { hash: (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)(p)), data: p } }, ...f !== void 0 && { style: { hash: (0, import_chunk_ccm69jjy.Je)((0, import_chunk_w578pjby._)([f, s.map((E) => E.wire)])), data: f, ...false } } }, y = !(0, import_util.isDeepStrictEqual)(qBe(), g);
  if (y) (0, import_chunk_865at33z.ce)().theme.setState(() => g);
  if (n === void 0) {
    if (y) (0, import_chunk_cqa9hrgx.u)("plugin_function_hooks_backdrop");
    return { isDrawn: true, requestId: h };
  }
  if (y) (0, import_chunk_cqa9hrgx.l)("plugin_function_hooks_backdrop", "undrawn");
  return { isDrawn: false, requestId: h, reason: n };
}
function MVl(e) {
  let r = qBe();
  if (r === void 0) return;
  let { plugin: n, backdrop: o, overrideColorScheme: s, colors: a } = r;
  if (_ss(e)) {
    let { image: d } = r;
    return d === void 0 ? void 0 : ee(e, d);
  }
  if (e !== pFt) return;
  let i = o?.scene !== void 0;
  return i && a === void 0 ? void 0 : { plugin: n, ...s !== void 0 && { overrideColorScheme: s }, ...a !== void 0 && { colors: a }, ...o !== void 0 && !i && { backdrop: o } };
}
async function HVl(e, r, n) {
  let o = e.backdrop?.image?.source ?? void 0;
  if (o !== void 0 && o !== n.sent.backdrop?.image?.source) throw (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_backdrop", "image_changed_by_hook"), new import_chunk_hcg738hf.je(`${r.plugin}: theme.set: a hook on theme.set changed this set's image, so nothing was set: only the mod that calls $.theme.set can name one`);
  let s = (0, import_chunk_865at33z.ce)().themeTurns, a = s.taken += 1, d = await (o === void 0 ? void 0 : s.reading(() => Z(o, r.plugin, n.root())))?.catch((h) => {
    throw (0, import_chunk_cqa9hrgx.m)("plugin_function_hooks_backdrop", "image_refused"), h;
  }), p, f = (o ?? p) !== void 0 && r.signal?.aborted === true, c = a < (s.gone.get(r.plugin) ?? 0);
  if (a < s.landed || c || f) return { isDrawn: false, reason: "nothing was set: a later $.theme.set or $.theme.clear came first, this mod unloaded, or the call was aborted" };
  return s.landed = a, te(e, r, n.undrawn(), d, p);
}
function Foo(e) {
  return e === "Theme" ? "Backdrop" : e;
}
function DVl(e) {
  return { component: e.component === "Backdrop" ? "Theme" : e.component, instance_id: e.requestId };
}
var rt = ["backdrop", "overrideColorScheme", "colors", "sound", "style"], oe = 'takes one generic font alone, such as ["serif"]: sans, serif, mono, code or cursive', nt = /^(style\.\w+(?:\[\d+\])?\.fontFamily).*/;
function LVl(e) {
  let r = rt;
  if (!(0, import_chunk_may4s35x.K_)(e)) return `the argument is an object with any of ${r.join(", ")}`;
  let n = Reflect.ownKeys(e).find((i) => typeof i !== "string" || !r.includes(i));
  if (n !== void 0) return `theme.set does not know the attribute "${(0, import_chunk_0w2wb7gk.sI)(n)}": this build takes ${r.join(", ")}`;
  let { backdrop: o, overrideColorScheme: s, colors: a } = e;
  if (r.every((i) => e[i] === void 0)) return `theme.set needs at least one of ${r.join(", ")}; $.theme.clear() clears the theme`;
  if (s !== void 0 && s !== "light" && s !== "dark") return "overrideColorScheme is light or dark";
  if (e.sound !== void 0) {
    let i = require("/$bunfs/root/chunk-krvxnrwv.js"), d = (0, import_chunk_0w2wb7gk.PGt)(e.sound, k, (0, import_chunk_0w2wb7gk.Fun)()), p = d === void 0 ? i.checkSound(e.sound) : `sound must be plain JSON data: this one ${d}`;
    if (typeof p === "string") return p;
  }
  if (e.style !== void 0) {
    let i = require("/$bunfs/root/chunk-fq5wseep.js"), d = (0, import_chunk_0w2wb7gk.PGt)(e.style, k, (0, import_chunk_0w2wb7gk.Fun)()), p = d === void 0 ? i.checkStyle(e.style) : `style must be plain JSON data: this one ${d}`;
    if (typeof p === "string") return p.replace(nt, `$1 ${oe}`);
    for (let [f, c] of Object.entries(p)) {
      let h = c.findIndex((g) => g.fontFamily?.names.length);
      if (h >= 0) {
        let g = (0, import_chunk_may4s35x.K_)(e.style) && Array.isArray(e.style[f]);
        return `style.${f}${g ? `[${h}]` : ""}.fontFamily ${oe}`;
      }
    }
  }
  return (o === void 0 ? void 0 : z(o)) ?? (a === void 0 ? void 0 : D(a));
}
