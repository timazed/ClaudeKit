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
var chunk_6b5tg8j3_exports = {};
__export(chunk_6b5tg8j3_exports, {
  Dyi: () => Dyi,
  EHn: () => EHn,
  Hyi: () => Hyi,
  Myi: () => Myi,
  NVl: () => NVl,
  Zoo: () => Zoo,
  bCe: () => bCe,
  kHn: () => kHn,
  yFt: () => yFt
});
module.exports = __toCommonJS(chunk_6b5tg8j3_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_path = require("path");
function b(r) {
  let e = 0;
  for (let o = r.indexOf(`
`); o >= 0; o = r.indexOf(`
`, o + 1)) e += 1;
  return e;
}
class h extends Error {
  constructor() {
    super("highlighting this text takes more work than its length allows");
    this.name = "HighlightBoundError";
  }
}
function f(r, e) {
  if (r.left -= e, r.left < 0) throw new h();
}
var yr = 32;
var Er = 64;
var N = 4096;
var H = 24;
var Tr = 3;
var _r = 16;
var v = (r, e) => class o extends r {
  static isBounded = true;
  held = 0;
  breaks = 0;
  height = 0;
  constructor() {
    super();
    f(e, _r);
  }
  open(n) {
    this.held += 1, f(e, 1), super.open(n), this.grownTo(this.stack.length - 1);
  }
  add(n) {
    let a = b(n);
    this.held += n.length, this.breaks += a, f(e, n.length + a * (this.stack.length - 1) ** 2), super.add(n);
  }
  graft(n, a) {
    if (n instanceof o) {
      let s = this.stack.length + n.height;
      this.held += n.held, this.breaks += n.breaks, this.grownTo(s), f(e, n.breaks * s ** 2);
    }
    super.graft(n, a);
  }
  finish() {
    f(e, this.held);
  }
  grownTo(n) {
    if (this.height = Math.max(this.height, n), this.height > yr) f(e, Number.POSITIVE_INFINITY);
  }
};
var x = 5e4;
var I = 16e3;
var D = 2e4;
var G = 8e3;
var W = 8e3;
var k = 2e4;
var C = 2e4;
var d = /* @__PURE__ */ new Map([["asciidoc", I], ["gcode", D], ["http", G], ["nestedtext", W], ["sas", k], ["wren", C]]);
var j = Math.min(x, ...d.values());
var E = /* @__PURE__ */ new Set(["abnf", "accesslog", "ada", "angelscript", "applescript", "arcade", "arduino", "asciidoc", "aspectj", "autohotkey", "awk", "bash", "brainfuck", "c", "cal", "clojure", "clojure-repl", "coffeescript", "cos", "cpp", "crmsh", "crystal", "csharp", "css", "dart", "delphi", "django", "dns", "dockerfile", "dos", "dsconfig", "dts", "dust", "elixir", "erb", "erlang", "excel", "fsharp", "gams", "gauss", "gcode", "go", "graphql", "groovy", "haml", "handlebars", "haskell", "http", "ini", "java", "javascript", "jboss-cli", "julia", "julia-repl", "kotlin", "latex", "leaf", "less", "livecodeserver", "livescript", "llvm", "markdown", "matlab", "mipsasm", "mojolicious", "monkey", "moonscript", "nestedtext", "nginx", "nim", "nix", "node-repl", "nsis", "objectivec", "ocaml", "parser3", "perl", "pgsql", "php", "php-template", "pony", "powershell", "processing", "profile", "properties", "protobuf", "puppet", "python", "python-repl", "qml", "r", "reasonml", "roboconf", "routeros", "ruby", "rust", "sas", "scala", "scheme", "scilab", "scss", "shell", "smali", "smalltalk", "sml", "stan", "stata", "stylus", "swift", "tap", "tcl", "tp", "twig", "typescript", "vbnet", "vbscript", "vbscript-html", "verilog", "wren", "x86asm", "xl", "xml", "xquery", "yaml", "zephir"]);
var L = /* @__PURE__ */ new Set([...d.keys(), ...E]);
var kHn = 256;
var Zoo = 16e6;
var NVl = N + x * H;
var A = (r, e) => e();
var U = (r) => (e, o) => {
  r.spent = 0;
  try {
    return o();
  } finally {
    e.left -= r.spent;
  }
};
var z = (r, e) => [...[("subLanguage" in e ? e.subLanguage : void 0) ?? []].flat().filter((o) => typeof o === "string").map((o) => r.getLanguage(o)), ...[...e.contains ?? []].flat(), ..."variants" in e ? e.variants ?? [] : [], "starts" in e ? e.starts : void 0];
class M extends Error {
  constructor() {
    super("this text is too long, or its lines are, for a grammar");
    this.name = "HighlightLimitError";
  }
}
var F = /<(?:script|style)(?=\s|>)/iu;
var Z = "[`~<";
var y = /* @__PURE__ */ new Map([["markdown", [Z, F]]]);
var K = /\s+|[^\n]+/g;
function B(r, e) {
  let o = 0;
  for (let n of e === void 0 ? "" : r) o += e?.includes(n) === true ? 1 : 0;
  return e === void 0 ? r.length : o;
}
function T(r, e) {
  let o = 0;
  if (r.length <= kHn) return o;
  for (let [n] of r.matchAll(K)) {
    let a = n.length > kHn;
    o += a ? B(n, e) * n.length : 0;
  }
  return o;
}
var X = (r) => r.length <= j && T(r, void 0) <= Zoo;
function Y(r, e) {
  let o = y.get(e);
  return o === void 0 || o[1].test(r) ? void 0 : o[0];
}
function Myi(r, e) {
  return E.has(e) && r.length > kHn ? T(r, Y(r, e)) : 0;
}
var Hyi = (r, e) => r.length <= (d.get(e) ?? x) && Myi(r, e) <= Zoo;
function Dyi(r, e) {
  let o = new Map([...L].flatMap((g) => {
    let p = r.getLanguage(g);
    return p === void 0 ? [] : [[p, g]];
  })), n = /* @__PURE__ */ new Set(), a = L.has(e) ? [] : [r.getLanguage(e)], s = e;
  while (a.length > 0) {
    let g = a.pop();
    if (typeof g !== "object" || g === null || n.has(g)) continue;
    let m = "subLanguage" in g && Array.isArray(g.subLanguage) && g.subLanguage.length === 0 ? [...o.values()].find((xr) => !y.has(xr)) ?? o.values().next().value : o.get(g);
    if (m !== void 0 && !y.has(m)) return m;
    s = m ?? s, n.add(g), a.push(...m === void 0 ? z(r, g) : []);
  }
  return s;
}
var q = (r) => ({ before: (e, o) => {
  if (!X(e) && !Hyi(e, Dyi(r, o))) throw new M();
} });
function J(r, e) {
  let o = /* @__PURE__ */ new Set(), n = [e], a = 0;
  while (n.length > 0) {
    let s = n.pop();
    if (typeof s !== "object" || s === null || o.has(s)) continue;
    o.add(s);
    let g = "subLanguage" in s ? s.subLanguage : void 0, p = Array.isArray(g);
    a = Math.max(a, p ? g.length || Number.POSITIVE_INFINITY : 0), n.push(...[g ?? []].flat().filter((m) => typeof m === "string").map((m) => r.getLanguage(m)), ...[...s.contains ?? []].flat(), ..."variants" in s ? s.variants ?? [] : [], "starts" in s ? s.starts : void 0);
  }
  return a;
}
function Q(r, e) {
  let o = /* @__PURE__ */ new WeakMap(), n = 0;
  function a(s) {
    let g = r.listLanguages().length;
    if (s === void 0) return 0;
    if (g !== n) o = /* @__PURE__ */ new WeakMap(), n = g;
    let p = o.get(s) ?? J(r, s);
    return o.set(s, p), Math.min(p, g, e);
  }
  return (s, g) => N + g * (H + Tr * a(r.getLanguage(s)));
}
var V = (r, e, o) => ({ before: (n, a) => {
  r.left = e(a, n.length), o.spent = r.left;
}, after: () => {
  let n = r.left < 0;
  if (o.spent -= Math.max(r.left, 0), r.left = Number.POSITIVE_INFINITY, n) throw new h();
} });
function R(r, e) {
  if ("isBounded" in r.Tree) return A;
  let o = { left: Number.POSITIVE_INFINITY }, n = { spent: 0 };
  return r.Tree = v(r.Tree, o), r.watchers.push(q(r), V(o, Q(r, e), n)), U(n);
}
var Or = (r) => R(r, Er);
var rr = ["begin", "end", "match", "illegal"];
var er = (r) => (e) => {
  let o = r.get(typeof e === "string" ? e : e.source);
  try {
    return o === void 0 ? e : new RegExp(o);
  } catch {
    return e;
  }
};
function _(r) {
  return typeof r === "object" && r !== null && Object.isFrozen(r) ? { ...r } : r;
}
function tr(r, e) {
  let o = /* @__PURE__ */ new Set(), n = [r], a = er(e);
  while (n.length > 0) {
    let s = n.pop();
    if (!(typeof s === "object" && s !== null) || o.has(s)) continue;
    o.add(s);
    for (let p of rr) {
      let m = s[p];
      if (m !== void 0 && m !== null) s[p] = Array.isArray(m) ? m.map(a) : a(m);
    }
    s.contains &&= s.contains.map(_), s.variants &&= s.variants.map(_), s.starts &&= _(s.starts), n.push(...s.contains ?? [], ...s.variants ?? [], s.starts);
  }
  return r;
}
var br = 1e3;
var or = 1e3;
var Nr = 16;
var Hr = 1e3;
var vr = 12;
var Ir = 1500;
var Dr = 1e4;
var Gr = 16;
var w = (r) => [String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` + String.raw`(?:<[^<>]+>)?)[\*&\s]+)+` + String.raw`(?:[a-zA-Z_]\w*::)?[A-Za-z]\w*\s*\(`, String.raw`(?=[a-zA-Z_])` + String.raw`(?:(?=decltype\(auto\))|(?<!${r}[a-zA-Z_]\w*?))` + String.raw`(${r}(decltype\(auto\)|(?:[a-zA-Z_]\w*::)?[a-zA-Z_]\w*` + String.raw`(?:<[^<>]+>)?)[\*&\s]+){1,${Gr}}` + String.raw`(?:[a-zA-Z_]\w*::)?[a-zA-Z]\w*\s*\(`];
var nr = [w("")];
var O = [w("(?!struct)")];
var sr = [[String.raw`([A-Za-z]\w*(<[A-Za-z]\w*(\s*,\s*[A-Za-z]\w*)*>)?(\[\])?\s+)+` + String.raw`[A-Za-z]\w*\s*(<[^=]+>\s*)?\(`, String.raw`(?=[a-zA-Z])(?<![A-Za-z]\w*?)` + String.raw`([A-Za-z]\w*(<[A-Za-z]\w*(\s*,\s*[A-Za-z]\w*)*>)?(\[\])?\s+)` + String.raw`{1,${vr}}[A-Za-z]\w*\s*` + String.raw`(<[^=]{1,${or}}?>\s*)?\(`], [String.raw`[A-Za-z]\w*\s*(<[^=]+>\s*)?\(`, String.raw`[A-Za-z]\w*\s*` + String.raw`(<[^=]{1,${or}}?>\s*)?\(`]];
var ir = [String.raw`(?:\.|\.\/|\/)?(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|` + String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` + "`" + String.raw`{|}~]+)(?:(\.|\/)(?:""|"[^"]+"|''|'[^']+'|\[\]|\[[^\]]+\]|` + String.raw`[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` + "`" + String.raw`{|}~]+))*`, String.raw`(\[\]|\[[^\]]+\]|[^\s!"#%&'()*+,.\/;<=>@\[\\\]^` + "`" + String.raw`{|}~]+)(?==)`].map((r) => [r, r.replaceAll(String.raw`[^\]]+\]`, String.raw`[^\]]{1,${br}}\]`)]);
var ar = [[String.raw`(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*')` + String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))*` + String.raw`(?=\s*=\s*[^#\s])`, String.raw`(?:(?<![A-Za-z0-9_-])[A-Za-z0-9_-]+|` + String.raw`(?<!\\)"(\\"|[^"])*"|'[^']*')` + String.raw`(\s*\.\s*(?:[A-Za-z0-9_-]+|"(\\"|[^"])*"|'[^']*'))` + String.raw`{0,${Nr}}` + String.raw`(?=\s*=\s*[^#\s])`]];
var gr = [["(`{3,})[^`](.|\\n)*?\\1`*[ ]*", "(`{3,})[^`][^\\r\\u2028\\u2029]*?\\1`*[ ]*"], [String.raw`(~{3,})[^~](.|\n)*?\1~*[ ]*`, String.raw`(~{3,})[^~][^\r\u2028\u2029]*?\1~*[ ]*`]];
var pr = [[String.raw`\[.*?\]\(.*?\)`, String.raw`\[(?=(.*?\]\())\1.*?\)`], [String.raw`\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)`, String.raw`\[(?=(.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/)))` + String.raw`\1.*?\)`], [String.raw`\[.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/.*?\)`, String.raw`\[(?=(.+?\]\([A-Za-z][A-Za-z0-9+.-]*:\/\/))\1.*?\)`], [String.raw`\[.+?\]\([./?&#].*?\)`, String.raw`\[(?=(.+?\]\([./?&#]))\1.*?\)`]];
var lr = [String.raw`(?:s|tr|y)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` + String.raw`(?:\\.|[^\\\/])*?\1[dualxmsipngr]{0,12}`, String.raw`(?:s|tr|y)\((?:\\.|[^\\\/])*?\)\(` + String.raw`(?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`, String.raw`(?:s|tr|y)\[(?:\\.|[^\\\/])*?\]\[` + String.raw`(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`, String.raw`(?:s|tr|y)\{(?:\\.|[^\\\/])*?\}\{` + String.raw`(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`, String.raw`(?:(?:m|qr)?)\/(?:\\.|[^\\\/])*?\/[dualxmsipngr]{0,12}`, String.raw`(?:m|qr)(!|\/|\||\?|'|"|#)(?:\\.|[^\\\/])*?\1` + String.raw`[dualxmsipngr]{0,12}`, String.raw`(?:m|qr)\((?:\\.|[^\\\/])*?\)[dualxmsipngr]{0,12}`, String.raw`(?:m|qr)\[(?:\\.|[^\\\/])*?\][dualxmsipngr]{0,12}`, String.raw`(?:m|qr)\{(?:\\.|[^\\\/])*?\}[dualxmsipngr]{0,12}`].map((r) => [r, r.replaceAll(")*?", `){0,${Ir}}?`)]);
var mr = [[String.raw`\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|` + "await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)", String.raw`\b([1-9](_?[0-9])*|0(_?0)*)[lLjJ]?(?=\b|and|as|assert|async|` + "await|break|case|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|10|not|or|pass|raise|return|try|while|with|yield)"]];
var ur = [[String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b)`, String.raw`<<[-~]?'?(?=(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)` + String.raw`{0,${Hr}}?[^\S\n]*\1\b)`]];
var fr = [[String.raw`b?r(#*)"(.|\n)*?"\1(?!#)`, String.raw`b?r(#*)"[^]{0,${Dr}}?"\1(?!#)`]];
var dr = /* @__PURE__ */ new Map([["arduino", O], ["c", nr], ["cpp", O], ["csharp", sr], ["handlebars", ir], ["ini", ar], ["markdown", [...pr, ...gr]], ["perl", lr], ["python", mr], ["ruby", ur], ["rust", fr]]);
var kr = (r, e) => (o) => {
  let n = e(o), a = dr.get(r);
  try {
    return a ? tr(n, new Map(a)) : n;
  } catch {
    return e(o);
  }
};
var Ur = /^[a-z0-9][a-z0-9_+#.-]{0,63}$/, zr = 16;
function Zr(r) {
  return r.default ?? r;
}
class cr {
  hljs = null;
  underMessage = A;
  loaded = /* @__PURE__ */ new Set();
  failed = /* @__PURE__ */ new Set();
  runtimeDepsEnsured = /* @__PURE__ */ new WeakSet();
  pluginLanguages = /* @__PURE__ */ new Map();
  pluginAliases = /* @__PURE__ */ new Set();
  generation = 0;
  core(r) {
    if (this.hljs) return this.hljs;
    let e = r.loadCore();
    this.underMessage = Or(e);
    for (let [o, n] of Object.entries(import_chunk_865at33z.zqi)) if (!e.getLanguage(o)) e.registerLanguage(o, n);
    for (let [o, n] of this.pluginLanguages) if (!e.getLanguage(o)) this.registerResolvedPluginLanguage(e, o, n, { emitSadTelemetry: true });
    return this.hljs = e, e;
  }
  highlightUnderMessage(r, e, o) {
    let n = this.core(r);
    return this.underMessage(e, () => o(n));
  }
  ensureLanguage(r, e) {
    let o = this.core(e), n = r.toLowerCase(), a = e.resolveId(n);
    if (a !== null) {
      if (this.failed.has(a)) return null;
      if (!this.loaded.has(a)) {
        let g = e.loaders[a];
        if (typeof g !== "function") return null;
        try {
          o.registerLanguage(a, kr(a, Zr(g())));
        } catch (p) {
          return this.failed.add(a), (0, import_chunk_k449cc64.i)(p), null;
        }
        this.loaded.add(a);
        for (let p of e.subLanguageDeps[a] ?? []) this.ensureLanguage(p, e);
      }
      return a;
    }
    let s = o.getLanguage(n);
    if (!s) return null;
    if (!this.runtimeDepsEnsured.has(s)) {
      this.runtimeDepsEnsured.add(s);
      for (let g of Kr(s)) if (g !== n) this.ensureLanguage(g, e);
    }
    return n;
  }
  get pluginGrammarGeneration() {
    return this.generation;
  }
  clearPluginLanguages() {
    if (this.generation++, this.hljs) for (let r of this.pluginLanguages.keys()) this.hljs.unregisterLanguage(r);
    this.pluginLanguages.clear(), this.pluginAliases.clear();
  }
  isReservedLanguageId(r) {
    return Object.prototype.hasOwnProperty.call(import_chunk_865at33z.ICt, r) || Object.prototype.hasOwnProperty.call(import_chunk_865at33z.Dpn, r) || Object.prototype.hasOwnProperty.call(import_chunk_865at33z.zqi, r) || import_chunk_865at33z.vOl.has(r) || this.pluginLanguages.has(r) || this.pluginAliases.has(r);
  }
  isPluginLanguageId(r) {
    return this.pluginLanguages.has(r) || this.pluginAliases.has(r);
  }
  addPluginLanguage(r, e, o) {
    if (this.isReservedLanguageId(r)) return false;
    let n = o.map((s) => s.toLowerCase()).filter((s) => Ur.test(s) && s !== r && !this.isReservedLanguageId(s)).slice(0, zr), a = (s) => {
      let g = e(s);
      return g.name = r, g.aliases = n, g.disableAutodetect = true, g;
    };
    this.pluginLanguages.set(r, a);
    for (let s of n) this.pluginAliases.add(s);
    if (this.hljs && !this.hljs.getLanguage(r)) return this.registerResolvedPluginLanguage(this.hljs, r, a, { emitSadTelemetry: false });
    return true;
  }
  registerResolvedPluginLanguage(r, e, o, { emitSadTelemetry: n }) {
    try {
      return r.registerLanguage(e, o), r.check(e), r.highlight("", { language: e, ignoreIllegals: true }), true;
    } catch (a) {
      if (this.pluginLanguages.delete(e), r.getLanguage(e)) r.unregisterLanguage(e);
      if (n) (0, import_chunk_cqa9hrgx.l)("plugin_hljs_languages", "resolve_failed");
      return (0, import_chunk_w578pjby.t)(`plugin hljs grammar '${e}' failed to resolve at registration: ${a instanceof Error ? a.message : String(a)}`, { level: "error" }), false;
    }
  }
}
function Kr(r) {
  let e = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
  function n(a) {
    if (a === null || typeof a !== "object" || o.has(a)) return;
    o.add(a);
    let s = a;
    for (let g of [s.subLanguage ?? []].flat()) if (typeof g === "string") e.add(g);
    for (let g of [...s.contains ?? []].flat()) n(g);
    n(s.starts);
    for (let g of s.variants ?? []) n(g);
  }
  return n(r), e;
}
var bCe = new cr();
function yFt(r) {
  let e = r.toLowerCase();
  return Object.prototype.hasOwnProperty.call(import_chunk_865at33z.ICt, e) ? e : Object.prototype.hasOwnProperty.call(import_chunk_865at33z.Dpn, e) ? import_chunk_865at33z.Dpn[e] ?? null : null;
}
async function EHn(r) {
  let e = (0, import_path.extname)(r).slice(1);
  if (!e) return (0, import_chunk_78g0060s.S)("unknown");
  let o = e.toLowerCase(), n = yFt(o);
  if (n !== null) return Sr(import_chunk_865at33z.ICt[n]);
  if (bCe.isPluginLanguageId(o)) return (0, import_chunk_78g0060s.S)("plugin");
  return Sr(Object.prototype.hasOwnProperty.call(import_chunk_865at33z._Ro, o) ? import_chunk_865at33z._Ro[o] : void 0);
}
function Sr(r) {
  return r === void 0 ? (0, import_chunk_78g0060s.S)("unknown") : (0, import_chunk_78g0060s.Fr)(r);
}
