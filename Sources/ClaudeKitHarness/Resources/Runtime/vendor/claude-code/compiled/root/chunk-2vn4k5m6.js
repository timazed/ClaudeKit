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
var chunk_2vn4k5m6_exports = {};
__export(chunk_2vn4k5m6_exports, {
  $cs: () => $cs,
  Bcs: () => Bcs,
  Dcs: () => Dcs,
  ER: () => ER,
  Fcs: () => Fcs,
  Gco: () => Gco,
  LP: () => LP,
  Lcs: () => Lcs,
  Ncs: () => Ncs,
  R$t: () => R$t,
  ULn: () => ULn,
  Ucs: () => Ucs,
  aAi: () => aAi,
  cAi: () => cAi,
  cgr: () => cgr,
  dAi: () => dAi,
  dgr: () => dgr,
  iAi: () => iAi,
  jQ: () => jQ,
  lAi: () => lAi,
  ob: () => ob,
  x$t: () => x$t
});
module.exports = __toCommonJS(chunk_2vn4k5m6_exports);
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_nw2twe6x = require("/$bunfs/root/chunk-nw2twe6x.js");
var import_chunk_b9qnxh4s = require("/$bunfs/root/chunk-b9qnxh4s.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function dgr(e) {
  return import_chunk_b9qnxh4s.Hjt.test(e) || ULn(e);
}
function ULn(e) {
  return import_chunk_b9qnxh4s.Eat.test(e) || import_chunk_b9qnxh4s.Mjt.test(e) || import_chunk_b9qnxh4s.QSo.test(e) || import_chunk_b9qnxh4s.ebo.test(e) || import_chunk_b9qnxh4s.tbo.test(e) || import_chunk_b9qnxh4s.nbs.test(e);
}
function R$t(e) {
  return e.type === "ERROR" || e.children.some(R$t);
}
var R = /* @__PURE__ */ new Set(["program", "list", "pipeline"]), A = /* @__PURE__ */ new Set(["&&", "||", "|", ";", "&", "|&", `
`]), LP = 1e4, G = 65536, Y = 16, v = 128;
function ob(e) {
  if (!e) return [];
  if (e.length > LP) return [e];
  let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
  if (!t) return [e];
  let r = [], n = (i) => {
    if (A.has(i.type) || i.type === "comment") return;
    if (i.type === "redirected_statement") {
      for (let s of i.children) if (!s.type.endsWith("_redirect")) n(s);
      return;
    }
    if (R.has(i.type)) {
      for (let s of i.children) n(s);
      return;
    }
    r.push(i.text);
  };
  return n(t.type === "ERROR" && t.children[0]?.type === "program" ? t.children[0] : t), r;
}
function S(e) {
  switch (e.type) {
    case "ERROR":
      return true;
    case "heredoc_redirect":
      if (!e.children.some((t) => t.type === "heredoc_body") || T(e) && /(?:^|[^\\])(?:\\\\)*`/.test(e.text)) return true;
      break;
    case "heredoc_start":
      if (e.text.includes("$")) return true;
      break;
    case "subscript":
      if (/\$\((?!\([^()]*\)\))|`|\$\{[ \t\n|]|\[.*\[/s.test(e.text)) return true;
      return e.children.some((t) => t.type !== "word" && S(t));
    case "word":
      if (import_chunk_b9qnxh4s.ZSo.test(e.text)) return true;
      break;
    case "regex":
    case "extglob_pattern":
      if (/(?:^|[^\\])(?:\\\\)*(?:`|\$\((?!\([^()]*\)\))|\$\{[ \t\n|]|[<>]\()/.test(e.text)) return true;
      break;
  }
  return e.children.some(S);
}
function iAi(e) {
  return S(e) || Gco(e, { unparsedBodyOverruns: true }) === null;
}
function aAi(e) {
  if (e.length > LP) return true;
  let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
  if (t?.type !== "program") return true;
  let r = t;
  while (r !== void 0 && (R.has(r.type) || r.type === "redirected_statement")) {
    let n = r.children.findLastIndex((i) => !A.has(i.type) && i.type !== "comment" && !i.type.endsWith("_redirect"));
    if (r.type === "list" && r.children[n - 1]?.type === "&&") return true;
    r = r.children[n];
  }
  return false;
}
function x$t(e) {
  if (!e || e.length > LP) return [];
  let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
  return t ? Dcs(t) : [];
}
function Dcs(e) {
  return Gco(e) ?? [];
}
function Gco(e, { unparsedBodyOverruns: t = false } = {}) {
  let r = [], n = G, i = Y, s = { first: [], second: [] }, o = false, u = (l) => {
    if (o) return;
    if (l.type === "command") r.push(l.text), n -= l.text.length;
    let f = $cs(l);
    if (f !== null) i -= 1, n -= f.length;
    if (n < 0 || i < 0) {
      o = true;
      return;
    }
    if (f !== null) {
      let a = (0, import_chunk_nw2twe6x.hy)()?.parse(f);
      if (a) u(a);
      else if (t) o = true;
      return;
    }
    Fcs(l, s);
    for (let a of l.children) u(a);
  };
  if (u(e), o) return null;
  for (let { bodyRoot: l } of Lcs(s)) {
    if (l) u(l);
    if (o) break;
  }
  return r;
}
function* Lcs(e) {
  for (let t = 0; t < v; t += 1) {
    let r = e.first.shift() ?? e.second.shift();
    if (r === void 0) return;
    yield { body: r, bodyRoot: (0, import_chunk_nw2twe6x.hy)()?.parse(r) ?? null };
  }
}
function W(e, t, r) {
  if (e.type === "backtick_escape_unsupported") r.push({ body: e, quoted: t });
  let n = e.type === "string" || t && e.type === "command_substitution" && e.children[0]?.type === "`";
  for (let i of e.children) W(i, n, r);
}
function z(e, t, r) {
  let n = Buffer.from(e), i = "", s = 0;
  for (let { body: o, quoted: u } of t) i += n.toString("utf8", s, o.startIndex) + F(o.text, u ? r : "%"), s = o.endIndex;
  return i + n.toString("utf8", s);
}
function lAi(e, t) {
  let r = [];
  if (W(t, false, r), r.length === 0 || r.some(({ body: n }) => /\\[`$\\]/.test(n.text))) return [];
  return (0, import_chunk_4smdap7r.M)(['"', "%"].map((n) => z(e, r, n))).map((n) => ({ line: n, lineRoot: (0, import_chunk_nw2twe6x.hy)()?.parse(n) ?? null }));
}
function Ncs(e, t = false, r = { parsesLeft: v }) {
  let n = q(e), i = r.parsesLeft > 0 ? n : [];
  r.parsesLeft -= i.length;
  let s = i.flatMap((o) => (0, import_chunk_nw2twe6x.hy)()?.parse(o) ?? []);
  return t && (s.length < n.length || r.parsesLeft < 0) || i.length > 0 && !/\\[`$\\]/.test(e.text) && (0, import_chunk_4smdap7r.U)(s, (o) => o.type === "ERROR") === i.length || [...e.children, ...s].some((o) => Ncs(o, t, r));
}
function Fcs(e, t) {
  let [r, n] = q(e);
  if (r !== void 0) t.first.push(r);
  if (n !== void 0) t.second.push(n);
}
function q(e) {
  if (e.type !== "backtick_escape_unsupported") return [];
  return (0, import_chunk_4smdap7r.M)(['\\"', '"'].map((t) => F(e.text, t)));
}
function F(e, t) {
  return e.replace(/\\([`$\\\n"])/g, (r, n) => n === `
` ? "" : n === '"' ? t : n);
}
function $cs(e) {
  if (e.type !== "expansion" && e.type !== "ERROR") return null;
  let t = e.text;
  if (!/^\$\{[ \t\n|]/.test(t)) return null;
  let r = t.endsWith("}") ? t.length - 1 : t.length;
  return t.slice(2, r).trim().replace(/^\|/, "").replace(/;$/, "").trim();
}
function cgr(e) {
  if (!e || e.length > LP) return null;
  let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
  if (!t) return null;
  return H(t);
}
function Ucs(e) {
  if (!e || e.length > LP) return null;
  let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
  if (!t) return null;
  if (R$t(t) || (0, import_chunk_b9qnxh4s.obo)(t) !== null || Q(t) || X(t) || Bcs(e)) return null;
  if (e.includes("`")) return null;
  let r = H(t);
  if (r === null) return null;
  let n = (0, import_chunk_49rkmh8j.RDl)();
  return r.some((i) => ee(i, n)) ? null : r;
}
var I = /(?<!\$)\{|(?<=[$\\]\$)\{|\$'|\$"/, K = /[;&|<>\n]/, j = /(?:^|[ \t])[-/]/, V = /[()]/;
function J(e) {
  let t = e.search(/(?<!\$)\{|(?<=[$\\]\$)\{/);
  return t === -1 || /['"\\]/.test(e.slice(t));
}
function ee(e, t) {
  if (I.test(e) && C(e)) return true;
  let r = e.replace(/['"\\]/g, ""), n = (0, import_chunk_b9qnxh4s.ovt)(t ? e.replace(/\$(?=['"\\])/g, "_") : e);
  if (I.test(n) && (K.test(n) || V.test(n) || j.test(r) && J(e))) return true;
  if (P.test(e) || ne(e)) return true;
  let i = (0, import_chunk_b9qnxh4s.Tat)(e).replace(te, "");
  if (!t || !(i.includes("${") || re.test(i))) return false;
  for (let { index: s } of e.matchAll(/\$\{/g)) if (D.lastIndex = s + 2, !D.test(e)) return true;
  return P.test(r);
}
var E = String.raw`(?:[A-Za-z_]\w*(?:\[(?:-?\d+|[@*])\])?|\d+|[@*#?$-])`, te = /\$\{\w+\}(?!\[|:[a-zA-Z&])/g, re = /\$[#+^=~]*(?:\w+|[@*?!-])\[/, D = new RegExp([String.raw`#?${E}\}`, String.raw`${E}(?::[-+?]|[-+?#%/^,])`, String.raw`${E}:(?: ?-?\d+(?:: ?-?\d+)?|: ?-?\d+)\}`, String.raw`!\}`, String.raw`[A-Za-z_]\w*:?=\d+\}`].join("|"), "y"), P = /\$\(|`|<\(|>\(|\$\[|\$\{[ \t\n|]/;
function ne(e) {
  let t;
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (t !== void 0) {
      if (t === '"' && n === "\\") r++;
      else if (n === t) t = void 0;
      continue;
    }
    if (n === "\\") {
      r++;
      continue;
    }
    if (n === "'" || n === '"') {
      t = n;
      continue;
    }
    if (n === "$" && e[r + 1] === '"') return true;
  }
  return false;
}
var ie = /* @__PURE__ */ new Set(["file_descriptor", "number", ">&", "<&"]);
function X(e) {
  if (e.type.endsWith("_redirect")) {
    if (!se(e)) return true;
  }
  return e.children.some(X);
}
function se(e) {
  let t = e.children.map((n) => n.type);
  if (!(t.length === 2 && t[0] !== "file_descriptor" || t.length === 3 && t[0] === "file_descriptor")) return false;
  return e.children.every((n) => {
    if (!ie.has(n.type) || n.children.length !== 0) return false;
    return n.type === "number" || n.type === "file_descriptor" ? /^\d+$/.test(n.text) : true;
  });
}
function H(e) {
  let t = [], r = true, n = (i) => {
    if (!r) return;
    if (A.has(i.type) || i.type === "comment") return;
    if (i.type === "redirected_statement") {
      for (let s of i.children) {
        if (s.type.endsWith("_redirect")) {
          if (b(s)) {
            r = false;
            return;
          }
          continue;
        }
        n(s);
      }
      return;
    }
    if (R.has(i.type)) {
      for (let s of i.children) n(s);
      return;
    }
    if (i.type === "negated_command") {
      for (let s of i.children) if (s.type !== "!") n(s);
      return;
    }
    if (i.type === "command" || i.type === "variable_assignment") {
      if (b(i)) {
        r = false;
        return;
      }
      t.push(i.text);
      return;
    }
    r = false;
  };
  return n(e), r ? t : null;
}
function b(e) {
  let t = e.type === "command" || e.type === "variable_assignment";
  for (let r of e.children) {
    if (r.type === "subshell" && t) return true;
    if (b(r)) return true;
  }
  return false;
}
function Bcs(e) {
  if (!e) return false;
  if (e.length > LP) return true;
  let t = (0, import_chunk_nw2twe6x.hy)()?.parse(e);
  if (!t) return true;
  let r = false, n = (i) => {
    if (r) return;
    if (i.type === "expansion" && i.text.includes("(")) {
      r = true;
      return;
    }
    for (let s of i.children) n(s);
  };
  return n(t), r;
}
function ER(e) {
  if (!e || e.length > LP) return [];
  let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
  if (!t) return [];
  let r = (0, import_chunk_b9qnxh4s.C2e)(t, null);
  if (!r) return [];
  return (0, import_chunk_b9qnxh4s.Ijt)(r);
}
var N = /* @__PURE__ */ new Set(["command_substitution", "process_substitution", "expansion", "simple_expansion", "arithmetic_expansion"]);
function w(e) {
  if (N.has(e.type)) return true;
  return e.children.some(w);
}
var oe = /* @__PURE__ */ new Set(["command_substitution", "process_substitution", "arithmetic_expansion", "subshell"]);
function Q(e) {
  if (oe.has(e.type)) return true;
  return e.children.some(Q);
}
var ue = /* @__PURE__ */ new Set(["ansi_c_string", "translated_string"]);
function O(e) {
  if (ue.has(e.type)) return true;
  return e.children.some(O);
}
var Z = /* @__PURE__ */ new Set(["<", ">", ">>", "<<", "<<-", "<<<", "<&", ">&", "&>", "&>>", ">|", ">&-", "<&-", "file_descriptor", "heredoc_start", "heredoc_body", "heredoc_content", "heredoc_end"]);
function L(e) {
  if (e.type.endsWith("_redirect")) {
    let t = e.children.filter((s) => !Z.has(s.type)), r = e.children.some((s) => s.type === ">&-" || s.type === "<&-"), n = !r && e.children.some((s) => s.type === ">&" || s.type === "<&") && t.some((s) => y(s).startsWith("-")), i = e.type === "heredoc_redirect" || r || n ? 0 : 1;
    if (t.length > i) return true;
  }
  return e.children.some(L);
}
function T(e) {
  if (e.type === "heredoc_redirect") {
    let r = e.children.find((i) => i.type === "heredoc_start")?.text ?? "";
    if (!(r.length >= 2 && (r.startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"'))) || r.includes("\\")) return true;
  }
  return e.children.some(T);
}
function dAi(e, t) {
  if (!e) return false;
  if (e.length > LP || dgr(e)) return true;
  let r = (0, import_chunk_nw2twe6x.hy)().parse(e);
  if (!r || R$t(r)) return true;
  let n = (o) => L(o) || T(o) || w(o) || O(o) || o.type !== "heredoc_redirect" && C(o.text) || o.type !== "heredoc_redirect" && !o.children.every((u) => Z.has(u.type) || B(u, /\s/.test(u.text))) || o.type !== "heredoc_redirect" && o.children.some((u) => u.type === "word" && u.text.startsWith("=")), i = (o) => {
    if (N.has(o.type)) return;
    if (o.type === "command") return o;
    let u;
    for (let l of o.children) {
      if (l.type.endsWith("_redirect")) continue;
      let f = i(l);
      if (f) u = f;
    }
    return u;
  }, s = (o) => {
    if (N.has(o.type)) return false;
    if (o.type === "redirected_statement") {
      let u = o.children.find((f) => f.type === "command") ?? i(o), l = u ? t(u.text) : true;
      for (let f of o.children) if (f.type.endsWith("_redirect")) {
        if (l && n(f)) return true;
      } else if (s(f)) return true;
      return false;
    }
    if (o.type === "command") {
      let u = t(o.text);
      for (let l of o.children) if (l.type.endsWith("_redirect")) {
        if (u && n(l)) return true;
      } else if (s(l)) return true;
      return false;
    }
    if (o.type.endsWith("_redirect")) return n(o);
    return o.children.some(s);
  };
  return s(r);
}
var le = /* @__PURE__ */ new Set(["word", "string", "raw_string", "number"]), ce = /(?:^|[^\\])(?:\\\\)*[;|&<>]/, ae = /(?:^|[^\\])(?:\\\\)*\\$/;
function B(e, t = false) {
  if (e.type === "concatenation") return e.children.every((r) => B(r, t));
  if (e.type === "word") {
    if (import_chunk_b9qnxh4s.ZSo.test(e.text)) return false;
    if (ce.test(e.text) || ae.test(e.text)) return false;
    if (t && import_chunk_b9qnxh4s.tbs.test(e.text)) return false;
    return true;
  }
  if (e.type === "string" || e.type === "raw_string") {
    let r = e.type === "raw_string" ? "'" : '"';
    return e.text.length >= 2 && e.text.startsWith(r) && e.text.endsWith(r);
  }
  return le.has(e.type);
}
function C(e) {
  let t = null, r = false, n = false;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (t === "'") {
      if (s === "'") t = null;
      continue;
    }
    if (t === '"') {
      if (s === "\\" && i + 1 < e.length && '$`"\\'.includes(e[i + 1])) {
        i++;
        continue;
      }
      if (s === "`") return true;
      if (s === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return true;
      if (s === '"') t = null;
      continue;
    }
    if (s === "\\") {
      i++;
      continue;
    }
    if (s === "`") return true;
    if (s === "$" && (e[i + 1] === "'" || e[i + 1] === '"')) return true;
    if (s === "$" && /[A-Za-z0-9_{(@*#?$!-]/.test(e[i + 1] ?? "")) return true;
    if (s === "=" && e[i + 1] === "(") return true;
    if (s === "*" || s === "?" || s === "[") return true;
    if (s === "'" || s === '"') {
      t = s;
      continue;
    }
    if (s === `
`) return false;
    if (s === " " || s === "	") {
      r = false, n = false;
      continue;
    }
    if (s === "{") {
      r = true;
      continue;
    }
    if (r && (s === "," || s === "." && e[i + 1] === ".")) {
      n = true;
      continue;
    }
    if (s === "}" && r && n) return true;
  }
  return t !== null;
}
function cAi(e) {
  if (!e || e.length > LP) return true;
  if (dgr(e)) return true;
  if (C(e)) return true;
  let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
  if (!t || R$t(t)) return true;
  let r = t.children.filter((i) => i.type !== "comment");
  if (r.length !== 1 || r[0].type !== "command" && !(r[0].type === "redirected_statement" && r[0].children.some((i) => i.type === "command"))) return true;
  if (w(t) || O(t) || L(t) || T(t)) return true;
  let n = (0, import_chunk_b9qnxh4s.C2e)(t, null);
  if (!n) return true;
  for (let i of n.children) {
    if (i.type === "command_name" || i.type === "variable_assignment") continue;
    if (i.type.endsWith("_redirect")) continue;
    if (!B(i, /\s/.test(i.text))) return true;
  }
  return false;
}
function y(e) {
  switch (e.type) {
    case "raw_string":
      return e.text.slice(1, -1);
    case "string":
      return e.text.slice(1, -1).replace(/\\([$`"\\\n])/g, (t, r) => r === `
` ? "" : r);
    case "word":
      return e.text.replace(/\\([\s\S])/g, (t, r) => r === `
` ? "" : r);
    default:
      return e.text;
  }
}
function jQ(e, t) {
  let r = { commandWithoutRedirections: e, redirections: [], hasDangerousRedirection: false, dangerousRedirectionReason: void 0 };
  if (!e || e.length > LP) return r;
  let n = (0, import_chunk_nw2twe6x.hy)().parse(e, t);
  if (!n) return r;
  let i = [], s = false, o, u = (a) => {
    if (a.type === "file_redirect") {
      let p = null, m = false, d = null, k = 0;
      for (let c of a.children) if (c.type === ">" || c.type === "&>" || c.type === ">|") p = ">";
      else if (c.type === ">>" || c.type === "&>>" || c.type === ">>|") p = ">>";
      else if (c.type === ">&") p = ">", m = true;
      else if (c.type === "<&") {
        let g = a.children.filter((h) => h !== c && h.type !== "file_descriptor");
        if (g.length > 1 || g.some((h) => y(h).startsWith("-"))) {
          if (s = true, o !== "network_device") o = "shell_expansion";
        }
        return;
      } else if (c.type === ">&-" || c.type === "<&-") {
        if (a.children.filter((h) => h !== c && h.type !== "file_descriptor").length > 0) {
          if (s = true, o !== "network_device") o = "shell_expansion";
        }
        return;
      } else if (c.type === "<") {
        let g = a.children.filter((x) => x !== c && x.type !== "file_descriptor");
        if (g.length > 1) {
          if (s = true, o !== "network_device") o = "shell_expansion";
          return;
        }
        let h = g[0];
        if (h) {
          let x = y(h);
          if (/^\/dev\/(tcp|udp)\//.test(x)) s = true, o = "network_device";
        }
        return;
      } else if (c.type !== "file_descriptor") d = c, k++;
      if (!p || !d) return;
      if (k > 1) {
        if (s = true, o !== "network_device") o = "shell_expansion";
        return;
      }
      if (m && y(d).startsWith("-")) {
        if (s = true, o !== "network_device") o = "shell_expansion";
        return;
      }
      if (d.type === "number" && d.children.length === 0 && m) return;
      if (!(d.type === "word" && d.children.length === 0 || d.type === "number" && d.children.length === 0 || d.type === "raw_string" || d.type === "string" && !d.children.some((c) => c.type !== "string_content" && c.type !== '"'))) {
        if (s = true, o !== "network_device") o = "shell_expansion";
        return;
      }
      let _ = y(d);
      if (/^~|[*?[]/.test(_)) {
        if (s = true, o !== "network_device") o = "shell_expansion";
        return;
      }
      if (_.startsWith("!") || _.startsWith("=")) {
        if (s = true, o !== "network_device") o = "shell_expansion";
        return;
      }
      if (m && !/^[A-Za-z0-9./_-]+$/.test(_)) {
        if (s = true, o !== "network_device") o = "shell_expansion";
        return;
      }
      if (/^\/dev\/(tcp|udp)\//.test(_)) {
        s = true, o = "network_device";
        return;
      }
      i.push({ target: _, operator: p });
      return;
    }
    for (let p of a.children) u(p);
  };
  u(n);
  let l = [], f = (a) => {
    if (a.type === "comment") return;
    if (a.type === "redirected_statement") {
      for (let p of a.children) if (!p.type.endsWith("_redirect")) f(p);
      return;
    }
    if (R.has(a.type)) {
      for (let p of a.children) f(p);
      return;
    }
    l.push(a.text);
  };
  return f(n.type === "ERROR" && n.children[0]?.type === "program" ? n.children[0] : n), { commandWithoutRedirections: l.length > 0 ? l.join(" ") : e, redirections: i, hasDangerousRedirection: s, dangerousRedirectionReason: o };
}
