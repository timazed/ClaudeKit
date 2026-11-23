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
var chunk_hgbq13xy_exports = {};
__export(chunk_hgbq13xy_exports, {
  Ayi: () => Ayi,
  Cfr: () => Cfr,
  Cyi: () => Cyi,
  Efr: () => Efr,
  JBe: () => JBe,
  Ktn: () => Ktn,
  Oss: () => Oss,
  Oyi: () => Oyi,
  Pss: () => Pss,
  Pyi: () => Pyi,
  Rss: () => Rss,
  Ryi: () => Ryi,
  SHn: () => SHn,
  Tfr: () => Tfr,
  Tyi: () => Tyi,
  Vtn: () => Vtn,
  XBe: () => XBe,
  Xoo: () => Xoo,
  Yoo: () => Yoo,
  _Ft: () => _Ft,
  aYa: () => aYa,
  bHn: () => bHn,
  cYa: () => cYa,
  dYa: () => dYa,
  gFt: () => gFt,
  iYa: () => iYa,
  lYa: () => lYa,
  lot: () => lot,
  qoo: () => qoo,
  vfr: () => vfr,
  wHn: () => wHn,
  xss: () => xss,
  xyi: () => xyi
});
module.exports = __toCommonJS(chunk_hgbq13xy_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_1frjyv5h = require("/$bunfs/root/chunk-1frjyv5h.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_xfr8663h = require("/$bunfs/root/chunk-xfr8663h.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_7fjbagnr = require("/$bunfs/root/chunk-7fjbagnr.js");
var import_chunk_4684b8fc = require("/$bunfs/root/chunk-4684b8fc.js");
var import_chunk_p78dm83c = require("/$bunfs/root/chunk-p78dm83c.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_73gwqz1r = require("/$bunfs/root/chunk-73gwqz1r.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
var import_path2 = require("path");
var import_promises = require("fs/promises");
var ne = 268435456;
function z(e, n, { context: r, timeout: i, maxSearchSteps: o = ne }) {
  return (0, import_chunk_4684b8fc.yae)("", "", e, n, "", "", { context: r, timeout: i, maxSearchSteps: o, skipsSearchOfUnshared: true })?.hunks;
}
var Vtn = 3, y = 5e3;
function qoo(e, n) {
  if (n === 0) return e;
  return e.map((r) => ({ ...r, oldStart: r.oldStart + n, newStart: r.newStart + n }));
}
function Yoo(e, n, r, i) {
  let o = 0, l = 0;
  if (e.length === 0 && (r || i)) o = r ? (0, import_chunk_7cfjrnwy.Mt)(r, `
`) + 1 : 0, l = i ? (0, import_chunk_7cfjrnwy.Mt)(i, `
`) + 1 : 0;
  else o = e.reduce((u, c) => u + (0, import_chunk_4smdap7r.U)(c.lines, (f) => f.startsWith("+")), 0), l = e.reduce((u, c) => u + (0, import_chunk_4smdap7r.U)(c.lines, (f) => f.startsWith("-")), 0);
  return (0, import_chunk_f9x2f6cx.aia)(o, l), (0, import_chunk_xfr8663h.qko)(() => {
    (0, import_chunk_p78dm83c.ZEi)()?.add(o, { type: "added", model: (0, import_chunk_xfr8663h.ETr)(n) }), (0, import_chunk_p78dm83c.ZEi)()?.add(l, { type: "removed", model: (0, import_chunk_xfr8663h.ETr)(n) });
  }), { lines_added: o, lines_removed: l };
}
function SHn(...e) {
  (0, import_chunk_y53wbr8a.a)("tengu_file_changed", Yoo(...e));
}
function XBe({ filePath: e, oldContent: n, newContent: r, singleHunk: i = false, convertTabs: o = false, isForToolResult: l = false }) {
  let u = i ? 1e5 : Vtn, c = l ? z(n, r, { context: u, timeout: y }) : (0, import_chunk_4684b8fc.yae)(e, e, n, r, void 0, void 0, { context: u, timeout: y })?.hunks;
  if (!c) return [];
  return o ? bHn(c) : c;
}
function JBe({ filePath: e, fileContents: n, edits: r }) {
  let i = (0, import_chunk_4684b8fc.yae)(e, e, n, r.reduce((o, l) => {
    let { old_string: u, new_string: c } = l;
    if ("replace_all" in l ? l.replace_all : false) return o.replaceAll(u, () => c);
    else return o.replace(u, () => c);
  }, n), void 0, void 0, { context: Vtn, timeout: y });
  if (!i) return [];
  return bHn(i.hunks);
}
function bHn(e) {
  return e.map((n) => ({ ...n, lines: n.lines.map((r) => r.slice(0, 1) + (0, import_chunk_2yx6c1y2.Qhe)(r.slice(1))) }));
}
function Rss(e) {
  return e.flatMap((n) => n.lines.map((r) => r.slice(1))).join(`
`);
}
var re = 24, ie = 16777216;
class W {
  cache;
  constructor(e = re, n = ie) {
    this.cache = new import_chunk_1frjyv5h.Uf({ max: e, maxSize: n, sizeCalculation: (r) => Math.max(1, r.content.length) });
  }
  readFile(e) {
    let n = (0, import_chunk_w578pjby.le)(), r;
    try {
      r = n.statSync(e);
    } catch (c) {
      throw this.cache.delete(e), c;
    }
    if (!r.isFile() || r.size > import_chunk_rb36kwbn.TVt) this.cache.delete(e), (0, import_chunk_73gwqz1r.MEe)(r, e, import_chunk_rb36kwbn.TVt);
    let i = this.cache.get(e);
    if (i && i.mtime === r.mtimeMs) return { content: i.content, encoding: i.encoding };
    let o, l;
    if (r.size === 0) {
      this.cache.delete(e);
      let c = (0, import_chunk_73gwqz1r.fra)(e, (f) => (0, import_chunk_xfj2cwfv.wmn)(e, f) !== void 0);
      o = (0, import_chunk_73gwqz1r.Cge)(c), l = c.toString(o);
    } else o = (0, import_chunk_2yx6c1y2.XXi)(e), l = n.readFileSync(e, { encoding: o });
    let u = l.replaceAll(`\r
`, `
`);
    return this.cache.set(e, { content: u, encoding: o, mtime: r.mtimeMs }), { content: u, encoding: o };
  }
  getStats() {
    return { size: this.cache.size, totalChars: this.cache.calculatedSize, entries: Array.from(this.cache.keys()) };
  }
}
var oe = new import_chunk_2904xtvq.j(() => new W());
function I(e) {
  let { content: n } = oe.of((0, import_chunk_f9x2f6cx.N)().host).readFile(e);
  return n;
}
function wHn() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_MEMORY_DIR;
  if (!e) return;
  let n = (0, import_path2.resolve)(e);
  return n === (0, import_path2.parse)(n).root ? void 0 : n;
}
function Ktn(e) {
  return /\.(md|mdx)$/i.test(e);
}
function gFt(e) {
  let n = e.split(/(\r\n|\n|\r)/), r = "";
  for (let i = 0; i < n.length; i++) {
    let o = n[i];
    if (o !== void 0) if (i % 2 === 0) r += o.replace(/\s+$/, "");
    else r += o;
  }
  return r;
}
var ce = { "<fnr>": "<function_results>", "<n>": "<name>", "</n>": "</name>", "<o>": "<output>", "</o>": "</output>", "<e>": "<error>", "</e>": "</error>", "<s>": "<system>", "</s>": "</system>", "<r>": "<result>", "</r>": "</result>", "< META_START >": "<META_START>", "< META_END >": "<META_END>", "< EOT >": "<EOT>", "< META >": "<META>", "< SOS >": "<SOS>", "\n\nH:": `

Human:`, "\n\nA:": `

Assistant:` };
function Xoo(e) {
  let n = e, r = [];
  for (let [i, o] of Object.entries(ce)) {
    let l = n;
    if (n = n.replaceAll(i, o), l !== n) r.push({ from: i, to: o });
  }
  return { result: n, appliedReplacements: r };
}
var P = "\u2018", S = "\u2019", O = "\u201C", v = "\u201D";
function X(e) {
  return e.replaceAll(P, "'").replaceAll(S, "'").replaceAll(O, '"').replaceAll(v, '"');
}
var H = /\\u[0-9a-fA-F]{4}/, B = /[\u0080-\uffff]/;
function k(e) {
  return e.replace(/(\\\\)|\\u([0-9a-fA-F]{4})/g, (n, r, i) => r !== void 0 ? n : String.fromCharCode(parseInt(i, 16)));
}
function fe(e) {
  let n = "";
  for (let r = 0; r < e.length; r++) {
    let i = e.charCodeAt(r);
    if (i >= 128) {
      n += "\\\\u";
      for (let o of i.toString(16).padStart(4, "0")) n += o >= "a" ? `[${o}${o.toUpperCase()}]` : o;
    } else n += (0, import_chunk_7cfjrnwy.fo)(e[r]);
  }
  return n;
}
function Y(e) {
  let n = 0;
  for (let r = 0; r < e.length; r++) if (e.charCodeAt(r) >= 128) n++;
  return e.length + 5 * n;
}
function Q(e, n) {
  let r = 0;
  while (e[n - 1 - r] === "\\") r++;
  return r;
}
function G(e, n) {
  if (Q(e, e.length) % 2 === 1) return null;
  let r = e[0] === "\\" ? [0] : [], i = 0;
  for (let l = 0; l < e.length; l++) if (e.charCodeAt(l) >= 128) r.push(i), i += 6;
  else i += 1;
  let o = fe(e);
  try {
    let l = new RegExp(o, "g");
    for (let u = l.exec(n); u !== null; u = l.exec(n)) {
      let c = u.index;
      if (r.every((f) => Q(n, c + f) % 2 === 0)) return n.indexOf(u[0]) === c ? u[0] : null;
      l.lastIndex = c + 1;
    }
    return null;
  } catch (l) {
    return (0, import_chunk_w578pjby.t)(`Edit: skipped the \\uXXXX-escape search; the regex engine refused a ${o.length}-character pattern (${l instanceof Error ? l.name : "non-Error"})`), null;
  }
}
function iYa(e) {
  return H.test(e) || B.test(e);
}
function de(e, n, r) {
  if (e === n) return r;
  if (B.test(e) && Y(e) === n.length && G(e, n) !== null) {
    let i = /* @__PURE__ */ new Map(), o = 0, l = 0;
    for (let u = 0, c = 0; u < e.length; u++) {
      let f = e.charCodeAt(u);
      if (f >= 128) {
        let p = n.slice(c + 2, c + 6);
        i.set(f, p);
        for (let E of p) if (E >= "a" && E <= "f") l++;
        else if (E >= "A" && E <= "F") o++;
        c += 6;
      } else c += 1;
    }
    return r.replace(/[\u0080-\uffff]/g, (u) => {
      let c = u.charCodeAt(0), f = i.get(c);
      if (f !== void 0) return "\\u" + f;
      let p = c.toString(16).padStart(4, "0");
      return "\\u" + (o > l ? p.toUpperCase() : p);
    });
  }
  if (H.test(e) && k(e) === n) return k(r);
  return r;
}
function lot(e, n) {
  if (e.includes(n)) return n;
  let r = X(n), o = X(e).indexOf(r);
  if (o !== -1) return e.substring(o, o + n.length);
  if (H.test(n)) {
    let l = k(n);
    if (l !== n && e.includes(l)) return l;
  }
  if (B.test(n)) {
    if (Y(n) > e.length || !e.includes("\\u")) return null;
    return G(n, e);
  }
  return null;
}
function Tyi(e, n, r) {
  if (e === n) return r;
  let i = n.includes(O) || n.includes(v), o = n.includes(P) || n.includes(S);
  if (!i && !o) return r;
  let l = r;
  if (i) l = pe(l);
  if (o) l = ge(l);
  return l;
}
function q(e, n) {
  if (n === 0) return true;
  let r = e[n - 1];
  return r === " " || r === "	" || r === `
` || r === "\r" || r === "(" || r === "[" || r === "{" || r === "\u2014" || r === "\u2013";
}
function pe(e) {
  let n = [...e], r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === '"') r.push(q(n, i) ? O : v);
  else r.push(n[i]);
  return r.join("");
}
function ge(e) {
  let n = [...e], r = [];
  for (let i = 0; i < n.length; i++) if (n[i] === "'") {
    let o = i > 0 ? n[i - 1] : void 0, l = i < n.length - 1 ? n[i + 1] : void 0, u = o !== void 0 && new RegExp("\\p{L}", "u").test(o), c = l !== void 0 && new RegExp("\\p{L}", "u").test(l);
    if (u && c) r.push(S);
    else r.push(q(n, i) ? P : S);
  } else r.push(n[i]);
  return r.join("");
}
function Efr(e, n, r) {
  return de(e, n, Tyi(e, n, r));
}
function vfr(e, n, r, i = false) {
  let o = i ? (u, c, f) => u.replaceAll(c, () => f) : (u, c, f) => u.replace(c, () => f), l = xss(n, r);
  return l !== void 0 && e.includes(l) ? o(e, l, r) : o(e, n, r);
}
function xss(e, n) {
  return n === "" && !e.endsWith(`
`) ? `${e}
` : void 0;
}
function Tfr({ filePath: e, fileContents: n, oldString: r, newString: i, replaceAll: o = false, isForToolResult: l }) {
  return Cyi({ filePath: e, fileContents: n, edits: [{ old_string: r, new_string: i, replace_all: o }], isForToolResult: l });
}
function Cyi({ filePath: e, fileContents: n, edits: r, isForToolResult: i }) {
  if (K(n, r)) return { patch: JBe({ filePath: e, fileContents: n, edits: [{ old_string: n, new_string: n, replace_all: false }] }), updatedFile: "" };
  let o = M(n, r);
  return { patch: XBe({ filePath: e, oldContent: n, newContent: o, convertTabs: true, isForToolResult: i }), updatedFile: o };
}
function K(e, n) {
  return !e && n.length === 1 && n[0] !== void 0 && n[0].old_string === "" && n[0].new_string === "";
}
function Ayi(e, n, r) {
  if (r === "") return n.trim() === "" ? void 0 : { message: import_chunk_rb36kwbn.k0l, errorCode: 3 };
  return e.endsWith(".ipynb") ? { message: import_chunk_rb36kwbn.E0l, errorCode: 5 } : void 0;
}
function Cfr(e, n) {
  let r = e.indexOf(n);
  return r !== -1 && e.indexOf(n, r + n.length) !== -1;
}
function Ryi(e, n, r, i = n) {
  if (r || n === "" || !Cfr(e, n)) return;
  return `Found ${e.split(n).length - 1} matches of the string to replace, but replace_all is false. To replace all occurrences, set replace_all to true. To replace only one occurrence, please provide more context to uniquely identify the instance.
String: ${i}`;
}
function M(e, n) {
  if (K(e, n)) return "";
  let r = e, i = [];
  for (let o of n) {
    let l = (0, import_chunk_7cfjrnwy.pP)(o.old_string, `
`);
    for (let f of i) if (l !== "" && f.includes(l)) throw Error("Cannot edit file: old_string is a substring of a new_string from a previous edit.");
    let u = Ryi(r, o.old_string, o.replace_all);
    if (u !== void 0) throw new import_chunk_rb36kwbn.mD(u);
    let c = r;
    if (r = o.old_string === "" ? o.new_string : vfr(r, o.old_string, o.new_string, o.replace_all), r === c) throw new import_chunk_rb36kwbn.mD(import_chunk_rb36kwbn.S0l);
    i.push(o.new_string);
  }
  if (r === e) throw Error("Original and edited file match exactly. Failed to apply edit.");
  return r;
}
var L = 8192;
function aYa(e, n) {
  let r = (0, import_chunk_4684b8fc.yae)("file.txt", "file.txt", e, n, void 0, void 0, { context: 8, timeout: y });
  if (!r) return "";
  let i = (0, import_chunk_7fjbagnr.BGt)(), o = r.hunks.map((_) => ({ startLine: _.oldStart, content: _.lines.filter((g) => !g.startsWith("-") && !g.startsWith("\\")).map((g) => g.slice(1)).join(`
`), tabAwareSeparator: i })).map(import_chunk_2yx6c1y2.TRt).join(`
...
`);
  if (o.length <= L) return o;
  let l = o.lastIndexOf(`
`, L), u = l > 0 ? o.slice(0, l) : o.slice(0, L), c = 1, f = 1, E = (0, import_chunk_7cfjrnwy.Mt)(o, `
`, u.length + c) + f;
  return `${u}

... [${E} lines truncated] ...`;
}
function lYa(e) {
  return e.map((n) => {
    let r = [], i = [];
    for (let o of n.lines) if (o.startsWith(" ")) r.push(o.slice(1)), i.push(o.slice(1));
    else if (o.startsWith("-")) r.push(o.slice(1));
    else if (o.startsWith("+")) i.push(o.slice(1));
    return { old_string: r.join(`
`), new_string: i.join(`
`), replace_all: false };
  });
}
function Z(e) {
  return (0, import_chunk_jv7av99m.kn)(e) || (0, import_chunk_jv7av99m.Kz)(e) || (0, import_chunk_73gwqz1r.ese)(e) || (0, import_chunk_73gwqz1r.vD)(e);
}
function Pss({ file_path: e, edits: n }) {
  if (n.length === 0) return { file_path: e, edits: n };
  let r = Ktn(e);
  try {
    let i = (0, import_chunk_n2dbhmj2.xt)(e);
    if (((0, import_chunk_z6pfqf6e.$r)(e) || (0, import_chunk_z6pfqf6e.$r)(i)) && !((0, import_chunk_z6pfqf6e.mc)(e) || (0, import_chunk_z6pfqf6e.mc)(i)) || (0, import_chunk_z6pfqf6e.xv)(e) || (0, import_chunk_z6pfqf6e.xv)(i) || (0, import_chunk_z6pfqf6e.BE)(e) || (0, import_chunk_z6pfqf6e.BE)(i)) return { file_path: e, edits: n };
    let o = wHn();
    if (o !== void 0 && (0, import_chunk_p1ewvgeh.Qbe)(i, o) && n.every((u) => Xoo(u.old_string).appliedReplacements.length === 0)) return { file_path: e, edits: r ? n : n.map((u) => u.old_string === "" ? u : { ...u, new_string: gFt(u.new_string) }) };
    let l = I(i);
    return { file_path: e, edits: n.map(({ old_string: u, new_string: c, replace_all: f }) => {
      let p = r ? c : gFt(c);
      if (l.includes(u)) return { old_string: u, new_string: p, replace_all: f };
      let { result: E, appliedReplacements: _ } = Xoo(u);
      if (l.includes(E)) {
        let g = p;
        for (let { from: h, to: b } of _) g = g.replaceAll(h, b);
        return { old_string: E, new_string: g, replace_all: f };
      }
      return { old_string: u, new_string: p, replace_all: f };
    }) };
  } catch (i) {
    if (!Z(i)) (0, import_chunk_w578pjby.t)(`Failed to read ${e} for edit normalization: ${i instanceof Error ? i.message : String(i)}`, { level: "error" });
  }
  return { file_path: e, edits: n };
}
function me(e, n, r) {
  let i = null, o = null, l = null, u = null;
  try {
    i = M(r, e);
  } catch (c) {
    o = (0, import_chunk_jv7av99m.d)(c);
  }
  try {
    l = M(r, n);
  } catch (c) {
    u = (0, import_chunk_jv7av99m.d)(c);
  }
  if (o !== null && u !== null) return o === u;
  if (o !== null || u !== null) return false;
  return i === l;
}
function xyi(e, n) {
  return e.file_path === n.file_path && e.edits.length === n.edits.length && e.edits.every((r, i) => {
    let o = n.edits[i];
    return o !== void 0 && r.old_string === o.old_string && r.new_string === o.new_string && r.replace_all === o.replace_all;
  });
}
function dYa(e, n) {
  if (e.file_path !== n.file_path) return false;
  if (xyi(e, n)) return true;
  let r = "";
  if ((!(0, import_chunk_z6pfqf6e.$r)(e.file_path) || (0, import_chunk_z6pfqf6e.mc)(e.file_path)) && !(0, import_chunk_z6pfqf6e.xv)(e.file_path) && !(0, import_chunk_z6pfqf6e.BE)(e.file_path) && !(0, import_chunk_z6pfqf6e.BE)((0, import_path.resolve)(e.file_path))) try {
    r = I(e.file_path);
  } catch (i) {
    if ((0, import_chunk_73gwqz1r.vD)(i) || (0, import_chunk_73gwqz1r.ese)(i) || (0, import_chunk_jv7av99m.w)(i) === "EAGAIN") return false;
    if (!Z(i)) throw i;
  }
  return me(e.edits, n.edits, r);
}
var T = 8192, _Ft = 10485760, A = 10, Ee = 13;
async function cYa(e, n, r = 3) {
  let i = await Pyi(e);
  if (i === null) return null;
  try {
    return await Oss(i, n, r);
  } finally {
    await i.close();
  }
}
async function Pyi(e) {
  if ((0, import_chunk_z6pfqf6e.sa)(e) || (0, import_chunk_z6pfqf6e.BE)(e)) return null;
  if (e.includes("\0")) return null;
  try {
    return await (0, import_promises.open)(e, "r");
  } catch (n) {
    if ((0, import_chunk_jv7av99m.J)(n)) return null;
    throw n;
  }
}
async function Oss(e, n, r) {
  if (n === "") return { content: "", lineOffset: 1, truncated: false };
  let i = Buffer.from(n, "utf8"), o = 0;
  for (let g = 0; g < i.length; g++) if (i[g] === A) o++;
  let l, u = i.length + o - 1, c = Math.max(T, u), f = Buffer.allocUnsafe(c + u), p = 0, E = 0, _ = 0;
  while (p < _Ft) {
    let { bytesRead: g } = await e.read(f, _, c, p);
    if (g === 0) break;
    let h = _ + g;
    if (p === 0 && (0, import_chunk_73gwqz1r.Cge)(f.subarray(0, h)) !== "utf8") return { content: "", lineOffset: 1, truncated: false };
    let b = V(f, i, h), x = i.length;
    if (b === -1 && o > 0) l ??= Buffer.from(n.replaceAll(`
`, `\r
`), "utf8"), b = V(f, l, h), x = l.length;
    if (b !== -1) {
      let R = p - _ + b;
      return await be(e, f, R, x, r, E + D(f, 0, b));
    }
    p += g;
    let F = Math.min(u, h);
    E += D(f, 0, h - F), _ = F, f.copyWithin(0, h - _, h);
  }
  return { content: "", lineOffset: 1, truncated: p >= _Ft };
}
async function Oyi(e) {
  let n = Buffer.allocUnsafe(T), r = 0;
  for (; ; ) {
    if (r === n.length) {
      let o = Buffer.allocUnsafe(Math.min(n.length * 2, _Ft + T));
      n.copy(o, 0, 0, r), n = o;
    }
    let { bytesRead: i } = await e.read(n, r, n.length - r, r);
    if (i === 0) break;
    if (r += i, r > _Ft) return null;
  }
  return (0, import_chunk_73gwqz1r.E3)(n.subarray(0, r));
}
function V(e, n, r) {
  let i = e.indexOf(n);
  return i === -1 || i + n.length > r ? -1 : i;
}
function D(e, n, r) {
  let i = 0;
  for (let o = n; o < r; o++) if (e[o] === A) i++;
  return i;
}
function ee(e) {
  return (e & 192) === 128;
}
function _e(e) {
  return e >= 240 ? 4 : e >= 224 ? 3 : e >= 192 ? 2 : 1;
}
function xe(e, n) {
  let r = e.toString("utf8", 0, n);
  return r.includes("\r") ? r.replaceAll(`\r
`, `
`) : r;
}
async function be(e, n, r, i, o, l) {
  let u = Math.min(r, T), { bytesRead: c } = await e.read(n, 0, u, r - u), f = r, p = 0;
  for (let m = c - 1; m >= 0 && p <= o; m--) {
    if (n[m] === A) {
      if (p++, p > o) break;
    }
    f--;
  }
  let E = r - c;
  for (let m = 0; m < 3 && f < r && ee(n[f - E]); m++) f++;
  let _ = r - f, g = l - D(n, c - _, c) + 1, h = r + i, { bytesRead: b } = await e.read(n, 0, T, h), x = h;
  p = 0;
  for (let m = 0; m < b; m++) if (x++, n[m] === A) {
    if (p++, p >= o + 1) break;
  }
  for (let m = 0; m <= 3 && x - 1 - m >= h; m++) {
    let C = n[x - 1 - m - h];
    if (ee(C)) continue;
    if (C >= 192 && _e(C) > m + 1) x -= m + 1;
    break;
  }
  if (x > h && n[x - 1 - h] === Ee) x--;
  let F = x - f, R = F <= n.length ? n : Buffer.allocUnsafe(F), { bytesRead: te } = await e.read(R, 0, F, f);
  return { content: xe(R, te), lineOffset: g, truncated: false };
}
