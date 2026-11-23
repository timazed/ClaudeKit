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
var chunk_nw2twe6x_exports = {};
__export(chunk_nw2twe6x_exports, {
  IUi: () => IUi,
  abo: () => abo,
  dbs: () => dbs,
  hy: () => hy,
  lbo: () => lbo,
  pBn: () => pBn
});
module.exports = __toCommonJS(chunk_nw2twe6x_exports);
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var ce = 1, le = 2, ue = 4, fe = 8, Le = 16, ve = 32, we = 512, Re = 64, te = 1024, be = 65536, Ut = ce | le | ue | fe | te | be;
function it(e) {
  return (e.asked & ~Ut) !== 0;
}
function pBn(e, s) {
  let n = 0;
  if ((e & ce) !== 0 && (0, import_chunk_49rkmh8j.QPo)() && !(0, import_chunk_49rkmh8j.yVt)()) n |= ce;
  if ((e & le) !== 0 && (0, import_chunk_49rkmh8j.IDl)()) n |= le;
  if ((e & ue) !== 0 && (0, import_chunk_49rkmh8j.kDl)()) n |= ue;
  if ((e & fe) !== 0 && (0, import_chunk_49rkmh8j.eFe)(s)) n |= fe;
  if ((e & Le) !== 0 && (0, import_chunk_49rkmh8j.CIr)()) n |= Le;
  if ((e & ve) !== 0 && (0, import_chunk_49rkmh8j.eOo)() && (0, import_chunk_49rkmh8j.CIr)()) n |= ve;
  if ((e & we) !== 0 && (0, import_chunk_49rkmh8j.F8i)()) n |= we;
  if ((e & Re) !== 0 && (0, import_chunk_49rkmh8j.vDl)() && !(0, import_chunk_49rkmh8j.yVt)()) n |= Re;
  if ((e & te) !== 0 && (0, import_chunk_49rkmh8j.ADl)()) n |= te;
  if ((e & be) !== 0 && (0, import_chunk_49rkmh8j.EDl)()) n |= be;
  return n;
}
function dbs(e, s, n) {
  let t = s + n;
  return [t, t.replaceAll("\\\n", "")].every((r) => {
    let o = r.split(`
`);
    return o.findIndex((l) => {
      let f = e === "<<-" ? l.replace(/^\t+/, "") : l;
      return f === n || f.startsWith(n + ")");
    }) === o.length - 1;
  });
}
function He(e, s, n, t, r) {
  let o = r || n === ")" || n === "]", a = 0, l = 0, f = 0, d = s;
  while (d < e.length) {
    let L = e[d];
    if (d++, L === n && f === 0 && !(o && (a > 0 || l > 0))) return d - 1;
    if (L === "\\") {
      let b = e[d];
      if (d++, b === `
` || b === "$" || b === "\\" || b === "`" || b === n || b === "}" && f > 0 || n === "]" && b !== void 0 && "[](){}".includes(b)) continue;
      L = b ?? "";
    }
    switch (L) {
      case "$": {
        let b = e[d];
        if (b === "(" || b === "[") {
          let h = t.get(d - 1);
          if (h === void 0) return -1;
          d = h;
        } else if (b === "{") d++, f++;
        else if (b === "$") d++;
        break;
      }
      case "}":
        if (f > 0) f--;
        break;
      case "`":
        return -1;
      case "(":
        if (!o || f === 0) a++;
        break;
      case ")":
        if (!o || f === 0) {
          if (o && a === 0) return -1;
          a--;
        }
        break;
      case "[":
        if (!o || f === 0) l++;
        break;
      case "]":
        if (!o || f === 0) {
          if (o && l === 0) return -1;
          l--;
        }
        break;
      case '"': {
        if (n !== '"' && f === 0) break;
        if (f === 0) return -1;
        let b = He(e, d, '"', t, r);
        if (b < 0) return b;
        d = b + 1;
        break;
      }
    }
  }
  return -1;
}
var abo = { words_after_test: "Text after a closing ] in this command can't be checked before it runs", words_after_redirect: "Words after a redirect in this command can't be checked before it runs", reserved_word_after_prefix: "A shell keyword or opening brace in this command can't be checked before it runs", equals_in_test: "Text right after an = inside [[ ]] in this command can't be checked before it runs", hash_in_test: "Text after a # inside [ ] or [[ ]] in this command can't be checked before it runs", hash_in_for_list: "Text after a # in a for or select list in this command can't be checked before it runs", digits_before_redirect: "Your shell may read the digits just before a redirect in this command differently from Claude Code, so it can't be checked before it runs. To pass the digits as an argument, put a space after them.", dollar_quote_string: "A $'\u2026' string in this command may hide code that can't be checked before it runs", brace_text_read_again: "Text in or next to a brace pattern in this command can't be checked before it runs", pattern_flag: "A $ followed by ~ in this command may make zsh read a value as a pattern, which may run code that can't be checked before it runs", quoted_code_in_subscript: "Quoted text in square brackets in this command may run as code that can't be checked before it runs", bracket_word: "A bracket word or a ( ) list in this command can't be checked before it runs: your shell may read it as going on past where Claude Code ended it" }, qt = 50, Ht = 5e4, Kt = 67108864, ie = /* @__PURE__ */ new Set(["?", "$", "@", "*", "#", "-", "!", "_"]), $e = /* @__PURE__ */ new Set(["#", "^", "=", "~", "+"]);
function yt(e, s) {
  let n = e.L.src, t = s;
  while (t < e.L.len && $e.has(n[t])) t++;
  let r = false;
  while (t < e.L.len) {
    let o = n[t];
    if (z(o)) t++;
    else if (o >= "\x80") r = true, t++;
    else break;
  }
  return r ? t : -1;
}
var Gt = /* @__PURE__ */ new Set(["export", "declare", "typeset", "readonly", "local"]), lbo = /* @__PURE__ */ new Set(["if", "then", "elif", "else", "fi", "while", "until", "for", "in", "do", "done", "case", "esac", "function", "select"]);
function Qt(e) {
  return { src: e, len: e.length, i: 0, b: 0, heredocs: [], byteTable: null, zshCondParenDiff: false, dollarEnds: /* @__PURE__ */ new Map(), dollarStarts: [] };
}
function i(e) {
  let s = e.src.charCodeAt(e.i);
  if (e.i++, s < 128) e.b++;
  else if (s < 2048) e.b += 2;
  else if (s >= 55296 && s <= 56319) e.b += 4, e.i++;
  else e.b += 3;
}
function c(e, s = 0) {
  return e.i + s < e.len ? e.src[e.i + s] : "";
}
function oe(e, s) {
  if (e.byteTable) return e.byteTable[s];
  let n = new Uint32Array(e.len + 1), t = 0, r = 0;
  while (r < e.len) {
    n[r] = t;
    let a = e.src.charCodeAt(r);
    if (a < 128) t++, r++;
    else if (a < 2048) t += 2, r++;
    else if (a >= 55296 && a <= 56319) n[r + 1] = t + 2, t += 4, r += 2;
    else t += 3, r++;
  }
  n[e.len] = t;
  let o = n[s];
  return e.byteTable = n, o;
}
function _t(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "_" || e === "/" || e === "." || e === "-" || e === "+" || e === ":" || e === "@" || e === "%" || e === "," || e === "~" || e === "^" || e === "?" || e === "*" || e === "!" || e === "=" || e === "[" || e === "]" || e >= "\x80";
}
function Zt(e) {
  return _t(e) || e === "\\";
}
function gt(e) {
  return e === "" || e === " " || e === "	" || e === `
` || e === "\r" || e === ";" || e === "&" || e === "|" || e === "(" || e === ")" || e === "<" || e === ">";
}
function Ge(e) {
  return gt(e) && e !== "(";
}
function M(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "_";
}
function z(e) {
  return M(e) || e >= "0" && e <= "9";
}
function D(e) {
  return e >= "0" && e <= "9";
}
function jt(e) {
  return D(e) || e >= "a" && e <= "f" || e >= "A" && e <= "F";
}
function Xt(e) {
  return z(e) || e === "@";
}
function Yt(e) {
  return e !== "" && e !== " " && e !== "	" && e !== `
` && e !== "<" && e !== ">" && e !== "|" && e !== "&" && e !== ";" && e !== "(" && e !== ")" && e !== "'" && e !== '"' && e !== "`" && e !== "\\";
}
function x(e) {
  while (e.i < e.len) {
    let s = e.src[e.i];
    if (s === " " || s === "	" || s === "\r") i(e);
    else if (s === "\\") if (e.src[e.i + 1] === `
`) i(e), i(e);
    else break;
    else break;
  }
}
function Vt(e) {
  while (e.i < e.len) {
    let s = e.src[e.i];
    if (s === " " || s === "	") i(e);
    else if (s === "\\" && e.src[e.i + 1] === `
`) i(e), i(e);
    else break;
  }
}
function k(e, s = "arg") {
  x(e);
  let n = e.b;
  if (e.i >= e.len) return { type: "EOF", value: "", start: n, end: n };
  let t = e.src[e.i], r = c(e, 1), o = c(e, 2);
  if (t === `
`) return i(e), { type: "NEWLINE", value: `
`, start: n, end: e.b };
  if (t === "#") {
    let a = e.i > 0 ? e.src[e.i - 1] : "";
    if (a === "" || " 	\n;&|<>()`".includes(a)) {
      let l = e.i;
      while (e.i < e.len && e.src[e.i] !== `
`) i(e);
      return { type: "COMMENT", value: e.src.slice(l, e.i), start: n, end: e.b };
    }
  }
  if (t === "&" && r === "&") return i(e), i(e), { type: "OP", value: "&&", start: n, end: e.b };
  if (t === "|" && r === "|") return i(e), i(e), { type: "OP", value: "||", start: n, end: e.b };
  if (t === "|" && r === "&") return i(e), i(e), { type: "OP", value: "|&", start: n, end: e.b };
  if (t === ";" && r === ";" && o === "&") return i(e), i(e), i(e), { type: "OP", value: ";;&", start: n, end: e.b };
  if (t === ";" && r === ";") return i(e), i(e), { type: "OP", value: ";;", start: n, end: e.b };
  if (t === ";" && r === "&") return i(e), i(e), { type: "OP", value: ";&", start: n, end: e.b };
  if (t === ">" && r === ">") return i(e), i(e), { type: "OP", value: ">>", start: n, end: e.b };
  if (t === ">" && r === "&" && o === "-") return i(e), i(e), i(e), { type: "OP", value: ">&-", start: n, end: e.b };
  if (t === ">" && r === "&") return i(e), i(e), { type: "OP", value: ">&", start: n, end: e.b };
  if (t === ">" && r === "|") return i(e), i(e), { type: "OP", value: ">|", start: n, end: e.b };
  if (t === "&" && r === ">" && o === ">") return i(e), i(e), i(e), { type: "OP", value: "&>>", start: n, end: e.b };
  if (t === "&" && r === ">") return i(e), i(e), { type: "OP", value: "&>", start: n, end: e.b };
  if (t === "<" && r === "<" && o === "<") return i(e), i(e), i(e), { type: "OP", value: "<<<", start: n, end: e.b };
  if (t === "<" && r === "<" && o === "-") return i(e), i(e), i(e), { type: "OP", value: "<<-", start: n, end: e.b };
  if (t === "<" && r === "<") return i(e), i(e), { type: "OP", value: "<<", start: n, end: e.b };
  if (t === "<" && r === "&" && o === "-") return i(e), i(e), i(e), { type: "OP", value: "<&-", start: n, end: e.b };
  if (t === "<" && r === "&") return i(e), i(e), { type: "OP", value: "<&", start: n, end: e.b };
  if (t === "<" && r === "(") return i(e), i(e), { type: "LT_PAREN", value: "<(", start: n, end: e.b };
  if (t === ">" && r === "(") return i(e), i(e), { type: "GT_PAREN", value: ">(", start: n, end: e.b };
  if (t === "(" && r === "(") return i(e), i(e), { type: "OP", value: "((", start: n, end: e.b };
  if (t === ")" && r === ")") return i(e), i(e), { type: "OP", value: "))", start: n, end: e.b };
  if (t === "|" || t === "&" || t === ";" || t === ">" || t === "<") return i(e), { type: "OP", value: t, start: n, end: e.b };
  if (t === "(" || t === ")") return i(e), { type: "OP", value: t, start: n, end: e.b };
  if (s === "cmd") {
    if (t === "[") {
      let a = false, l = (d) => {
        while (e.src[d] === "\\") if (e.src[d + 1] === `
`) d += 2, a = true;
        else if (e.src[d + 1] === "\r" && e.src[d + 2] === `
`) d += 3, a = true;
        else break;
        return d;
      }, f = l(e.i + 1);
      if (e.src[f] === "[") {
        let d = l(f + 1);
        if (a && e.src[d] === "(") e.zshCondParenDiff = true;
      }
    }
    if (t === "[" && r === "[" && (o === " " || o === "	" || o === `
` || o === "" || o === "(")) {
      if (o === "(") e.zshCondParenDiff = true;
      return i(e), i(e), { type: "OP", value: "[[", start: n, end: e.b };
    }
    if (t === "[") return i(e), { type: "OP", value: "[", start: n, end: e.b };
    if (t === "{" && (r === " " || r === "	" || r === `
`)) return i(e), { type: "OP", value: "{", start: n, end: e.b };
    if (t === "}") return i(e), { type: "OP", value: "}", start: n, end: e.b };
    if (t === "!" && (r === " " || r === "	")) return i(e), { type: "OP", value: "!", start: n, end: e.b };
  }
  if (t === '"') return i(e), { type: "DQUOTE", value: '"', start: n, end: e.b };
  if (t === "'") {
    let a = e.i;
    i(e);
    while (e.i < e.len && e.src[e.i] !== "'") i(e);
    if (e.i < e.len) i(e);
    return { type: "SQUOTE", value: e.src.slice(a, e.i), start: n, end: e.b };
  }
  if (t === "$") {
    if (r === "(" && o === "(") return i(e), i(e), i(e), { type: "DOLLAR_DPAREN", value: "$((", start: n, end: e.b };
    if (r === "(") return i(e), i(e), { type: "DOLLAR_PAREN", value: "$(", start: n, end: e.b };
    if (r === "{") return i(e), i(e), { type: "DOLLAR_BRACE", value: "${", start: n, end: e.b };
    if (r === "'") {
      let a = e.i;
      i(e), i(e);
      while (e.i < e.len && e.src[e.i] !== "'") {
        if (e.src[e.i] === "\\" && e.i + 1 < e.len) i(e);
        i(e);
      }
      if (e.i < e.len) i(e);
      return { type: "ANSI_C", value: e.src.slice(a, e.i), start: n, end: e.b };
    }
    return i(e), { type: "DOLLAR", value: "$", start: n, end: e.b };
  }
  if (t === "`") return i(e), { type: "BACKTICK", value: "`", start: n, end: e.b };
  if (D(t)) {
    let a = e.i;
    while (a < e.len && D(e.src[a])) a++;
    let l = a < e.len ? e.src[a] : "";
    if (l === ">" || l === "<") {
      let f = e.i;
      while (e.i < a) i(e);
      return { type: "WORD", value: e.src.slice(f, e.i), start: n, end: e.b };
    }
  }
  if (Zt(t) || t === "{" || t === "}") {
    let a = e.i;
    while (e.i < e.len) {
      let l = e.src[e.i];
      if (l === "\\") {
        if (e.i + 1 >= e.len) break;
        if (e.src[e.i + 1] === `
`) {
          i(e), i(e);
          continue;
        }
        i(e), i(e);
        continue;
      }
      if (!_t(l) && l !== "{" && l !== "}" && l !== "#") break;
      i(e);
    }
    if (e.i > a) {
      let l = e.src.slice(a, e.i);
      if (/^-?\d+$/.test(l)) return { type: "NUMBER", value: l, start: n, end: e.b };
      return { type: "WORD", value: l, start: n, end: e.b };
    }
  }
  return i(e), { type: "WORD", value: t, start: n, end: e.b };
}
function Be(e, s, n) {
  let t = Qt(e), r = Pt(e);
  if (r >= Kt) return { root: null, timedOut: false, asked: 0, answers: 0 };
  let o = { L: t, src: e, srcBytes: r, isAscii: r === e.length, nodeCount: 0, deadline: n.now() + (s ?? qt), aborted: false, timedOut: false, inBacktick: 0, inDquote: 0, stopToken: null, sawIfOrLoop: false, misreading: void 0, dollarQuotes: void 0, quotedCode: void 0, plainQuotedCode: void 0, bracketOffsets: void 0, quoteOffsets: void 0, quoteOrBackslashOffsets: void 0, operandsRead: /* @__PURE__ */ new Set(), subscriptRead: 0, zshBraceDiff: e.includes("$\\\n"), dollarOperandDiff: false, keywordDesync: false, asked: 0, answers: 0, ports: n, zshMathClosesAlike: false, zshMathDiff: false, inForHead: false };
  return { root: Jt(o), timedOut: o.timedOut, asked: o.asked, answers: o.answers };
}
function Jt(e) {
  let s = e.src;
  try {
    let n = tn(e);
    if (e.aborted) return null;
    if (!e.zshMathDiff) {
      let t = [];
      for (let r of s.matchAll(/(\$+)(\[|\((?:\\\n)*\()?/g)) {
        let o = r[1]?.length ?? 1, a = 0;
        while (s[r.index - a - 1] === "\\") a++;
        let l = r.index + o - 1, f = r[2]?.includes(`
`);
        if (r[2] !== void 0 && (o - a % 2) % 2 === 1 && (f || !e.L.dollarEnds.has(l))) t.push(oe(e.L, l));
      }
      if (t.length > 0) {
        let r = [], o = [n];
        for (let a = o.pop(); a; a = o.pop()) if (Mn.has(a.type)) r.push(a);
        else {
          o.push(...a.children);
          let l = a.type === "heredoc_redirect" ? Kn(a) : void 0;
          if (l) r.push(l);
        }
        e.zshMathDiff = t.some((a) => !r.some((l) => l.startIndex <= a && a < l.endIndex)) && H(e, Le);
      }
    }
    if (import_chunk_49rkmh8j.TIr.test(s) && H(e, fe)) e.dollarOperandDiff = true;
    if (e.zshBraceDiff || e.L.zshCondParenDiff || e.dollarOperandDiff || e.zshMathDiff || e.keywordDesync) {
      let t = u(e, "ERROR", n.startIndex, n.endIndex, [n]), r = e.misreading === void 0 ? t : { ...t, misreading: e.misreading };
      if (e.keywordDesync) return { ...r, keywordAfterPrefix: true };
      return r;
    }
    return e.misreading === void 0 ? n : { ...n, misreading: e.misreading };
  } catch {
    return null;
  }
}
function Pt(e) {
  let s = 0;
  for (let n = 0; n < e.length; n++) {
    let t = e.charCodeAt(n);
    if (t < 128) s++;
    else if (t < 2048) s += 2;
    else if (t >= 55296 && t <= 56319) s += 4, n++;
    else s += 3;
  }
  return s;
}
function en(e) {
  if (e.nodeCount++, e.nodeCount > Ht) throw e.aborted = true, Error("budget");
  if ((e.nodeCount & 127) === 0 && e.ports.now() > e.deadline) throw e.aborted = true, e.timedOut = true, Error("timeout");
}
function u(e, s, n, t, r) {
  return en(e), { type: s, text: U(e, n, t), startIndex: n, endIndex: t, children: r };
}
function IUi(e) {
  return /\$(?:\{(?:\([^)}]{0,32}\))?)?[#^=~+!]*(?:[A-Za-z_]\w*)?[\u0080-\uffff]/.test(e);
}
function U(e, s, n) {
  if (e.isAscii) return e.src.slice(s, n);
  let t = e.L;
  if (!t.byteTable) oe(t, 0);
  let r = t.byteTable, o = 0, a = e.src.length;
  while (o < a) {
    let f = o + a >>> 1;
    if (r[f] < s) o = f + 1;
    else a = f;
  }
  let l = o;
  o = l, a = e.src.length;
  while (o < a) {
    let f = o + a >>> 1;
    if (r[f] < n) o = f + 1;
    else a = f;
  }
  return e.src.slice(l, o);
}
function g(e, s, n) {
  return u(e, s, n.start, n.end, []);
}
function tn(e) {
  let s = [];
  x(e.L);
  while (true) {
    let r = S(e.L);
    if (k(e.L, "cmd").type === "NEWLINE") {
      x(e.L);
      continue;
    }
    y(e.L, r);
    break;
  }
  let n = e.L.b;
  while (e.L.i < e.L.len) {
    let r = S(e.L), o = k(e.L, "cmd");
    if (o.type === "EOF") break;
    if (o.type === "NEWLINE") continue;
    if (o.type === "COMMENT") {
      s.push(g(e, "comment", o));
      continue;
    }
    y(e.L, r);
    let a = B(e, null);
    for (let l of a) s.push(l);
    if (a.length === 0) {
      let l = k(e.L, "cmd");
      if (l.type === "EOF") break;
      if (l.type === "OP" && l.value === ";;" && s.length > 0) continue;
      s.push(u(e, "ERROR", l.start, l.end, []));
    }
  }
  let t = s.length > 0 ? e.srcBytes : n;
  return u(e, "program", n, t, s);
}
function S(e) {
  return { i: e.i, b: e.b };
}
function y(e, s) {
  e.i = s.i, e.b = s.b, Tt(e);
}
function Tt(e) {
  for (let s = e.dollarStarts.at(-1); s !== void 0 && s >= e.i; s = e.dollarStarts.at(-1)) e.dollarEnds.delete(s), e.dollarStarts.pop();
}
function Ke(e, s, n) {
  e.dollarEnds.set(s, n), e.dollarStarts.push(s);
}
function B(e, s) {
  let n = [];
  while (true) {
    x(e.L);
    let t = S(e.L), r = k(e.L, "cmd");
    if (r.type === "EOF") {
      y(e.L, t);
      break;
    }
    if (r.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) Xe(e);
      continue;
    }
    if (r.type === "COMMENT") {
      n.push(g(e, "comment", r));
      continue;
    }
    if (s && r.type === "OP" && r.value === s) {
      y(e.L, t);
      break;
    }
    if (r.type === "OP" && (r.value === ")" || r.value === "}" || r.value === ";;" || r.value === ";&" || r.value === ";;&" || r.value === "))" || r.value === "]]" || r.value === "]")) {
      y(e.L, t);
      break;
    }
    if (r.type === "BACKTICK" && e.inBacktick > 0) {
      y(e.L, t);
      break;
    }
    if (r.type === "WORD" && (r.value === "then" || r.value === "elif" || r.value === "else" || r.value === "fi" || r.value === "do" || r.value === "done" || r.value === "esac")) {
      y(e.L, t);
      break;
    }
    y(e.L, t);
    let o = kt(e);
    if (!o) break;
    n.push(o), x(e.L);
    let a = S(e.L), l = k(e.L, "cmd");
    if (l.type === "OP" && (l.value === ";" || l.value === "&")) {
      let f = S(e.L), d = k(e.L, "cmd");
      if (y(e.L, f), n.push(g(e, l.value, l)), d.type === "EOF" || d.type === "OP" && (d.value === ")" || d.value === "}" || d.value === ";;" || d.value === ";&" || d.value === ";;&") || d.type === "WORD" && (d.value === "then" || d.value === "elif" || d.value === "else" || d.value === "fi" || d.value === "do" || d.value === "done" || d.value === "esac")) continue;
    } else if (l.type === "NEWLINE") {
      if (e.L.heredocs.length > 0) Xe(e);
      continue;
    } else y(e.L, a);
  }
  return n;
}
function kt(e) {
  let s = ot(e);
  if (!s) return null;
  while (true) {
    let n = S(e.L), t = k(e.L, "cmd");
    if (t.type === "OP" && (t.value === "&&" || t.value === "||")) {
      let r = g(e, t.value, t);
      Z(e);
      let o = ot(e);
      if (!o) {
        s = u(e, "ERROR", s.startIndex, r.endIndex, [s, r]);
        break;
      }
      if (o.type === "redirected_statement" && o.children.length >= 2) {
        let a = o.children[0], l = o.children.slice(1), f = u(e, "list", s.startIndex, a.endIndex, [s, r, a]), d = l.at(-1);
        s = u(e, "redirected_statement", f.startIndex, d.endIndex, [f, ...l]);
      } else s = u(e, "list", s.startIndex, o.endIndex, [s, r, o]);
    } else {
      y(e.L, n);
      break;
    }
  }
  return s;
}
function Z(e) {
  while (true) {
    let s = S(e.L);
    if (k(e.L, "cmd").type !== "NEWLINE") {
      y(e.L, s);
      break;
    }
  }
}
function ot(e) {
  let s = Y(e);
  if (!s) return null;
  let n = [s];
  while (true) {
    let r = S(e.L), o = k(e.L, "cmd");
    if (o.type === "OP" && (o.value === "|" || o.value === "|&")) {
      let a = g(e, o.value, o);
      Z(e);
      let l = Y(e);
      if (!l) {
        n.push(a);
        break;
      }
      if (l.type === "redirected_statement" && l.children.length >= 2 && n.length >= 1) {
        let f = l.children[0], d = l.children.slice(1), L = [...n, a, f], b = u(e, "pipeline", L[0].startIndex, f.endIndex, L), h = d.at(-1), p = u(e, "redirected_statement", b.startIndex, h.endIndex, [b, ...d]);
        n.length = 0, n.push(p), s = p;
        continue;
      }
      n.push(a, l);
    } else {
      y(e.L, r);
      break;
    }
  }
  if (n.length === 1) return n[0];
  let t = n.at(-1);
  return u(e, "pipeline", n[0].startIndex, t.endIndex, n);
}
function Y(e) {
  x(e.L);
  let s = S(e.L), n = k(e.L, "cmd");
  if (n.type === "EOF") return y(e.L, s), null;
  if (n.type === "OP" && n.value === "!") {
    let t = g(e, "!", n), r = Y(e);
    if (!r) return u(e, "negated_command", t.startIndex, t.endIndex, [t]);
    if (r.type === "redirected_statement" && r.children.length >= 2) {
      let o = r.children[0], a = r.children.slice(1), l = u(e, "negated_command", t.startIndex, o.endIndex, [t, o]), f = a.at(-1);
      return u(e, "redirected_statement", l.startIndex, f.endIndex, [l, ...a]);
    }
    return u(e, "negated_command", t.startIndex, r.endIndex, [t, r]);
  }
  if (n.type === "OP" && n.value === "(") {
    let t = g(e, "(", n), r = B(e, ")"), o = k(e.L, "cmd"), a = o.type === "OP" && o.value === ")" ? g(e, ")", o) : u(e, ")", t.endIndex, t.endIndex, []), l = u(e, "subshell", t.startIndex, a.endIndex, [t, ...r, a]);
    return K(e, l);
  }
  if (n.type === "OP" && n.value === "((") {
    let t = g(e, "((", n), r = e.L.i, o = ge(e, "))", "var");
    x(e.L);
    let a = Ce(e, r, ")", true), l = [t, ...o];
    if ((c(e.L) !== ")" || c(e.L, 1) !== ")") && Mt(e, a, true)) l.push(u(e, "))", t.endIndex, t.endIndex, []));
    let f = k(e.L, "cmd"), d = f.value === "))" ? g(e, "))", f) : u(e, "))", t.endIndex, t.endIndex, []);
    return u(e, "compound_statement", t.startIndex, d.endIndex, [...l, d]);
  }
  if (n.type === "OP" && n.value === "{") {
    let t = g(e, "{", n), r = B(e, "}"), o = k(e.L, "cmd"), a = o.type === "OP" && o.value === "}" ? g(e, "}", o) : u(e, "}", t.endIndex, t.endIndex, []), l = u(e, "compound_statement", t.startIndex, a.endIndex, [t, ...r, a]);
    return K(e, l);
  }
  if (n.type === "OP" && (n.value === "[" || n.value === "[[")) {
    let t = g(e, n.value, n), r = n.value === "[" ? "]" : "]]", o = S(e.L), a = Lt(e, r);
    if (x(e.L), n.value === "[" && c(e.L) !== "]") {
      y(e.L, o);
      let h = e.stopToken;
      e.stopToken = "]";
      let p = Y(e);
      if (e.stopToken = h, p && p.type === "redirected_statement") a = p;
      else y(e.L, o), a = Lt(e, r);
      x(e.L);
    }
    let l = S(e.L), f = k(e.L, "arg"), d;
    if (f.value === r && Ge(c(e.L))) d = g(e, r, f);
    else y(e.L, l), d = u(e, r, t.endIndex, t.endIndex, []);
    let L = a ? [t, a, d] : [t, d], b = K(e, u(e, "test_command", t.startIndex, d.endIndex, L));
    if (d.text === "]" && Bt(e)) e.misreading ??= "words_after_test";
    return b;
  }
  if (n.type === "WORD" && gt(c(e.L))) {
    if (n.value === "if") return K(e, vn(e, n), true);
    if (n.value === "while" || n.value === "until") return K(e, wn(e, n), true);
    if (n.value === "for") return K(e, ft(e, n), true);
    if (n.value === "select") return K(e, ft(e, n), true);
    if (n.value === "case") return K(e, Rn(e, n), true);
    if (n.value === "function") return Dn(e, n);
    if (Gt.has(n.value)) return K(e, An(e, n));
    if (n.value === "unset" || n.value === "unsetenv") {
      let t = S(e.L);
      x(e.L);
      let r = false;
      if (c(e.L) === "(") k(e.L, "cmd"), x(e.L), r = c(e.L) === ")";
      if (y(e.L, t), !r) return K(e, $n(e, n));
    }
  }
  return y(e.L, s), nn(e);
}
function nn(e) {
  let s = e.L.b, n = [], t = [];
  while (true) {
    x(e.L);
    let T = Et(e);
    if (T) {
      n.push(T);
      continue;
    }
    let N = re(e);
    if (N) {
      t.push(N);
      continue;
    }
    break;
  }
  x(e.L);
  let r = S(e.L), o = k(e.L, "cmd");
  if (o.type === "EOF" || o.type === "NEWLINE" || o.type === "COMMENT" || o.type === "BACKTICK" || o.type === "OP" && o.value !== "{" && o.value !== "[" && o.value !== "[[" || o.type === "WORD" && lbo.has(o.value) && o.value !== "in") {
    if (y(e.L, r), (n.length > 0 || t.length > 0) && o.type === "WORD" && lbo.has(o.value) && o.value !== "in" && H(e, ce)) {
      let T = [...n, ...t].sort((N, w) => N.startIndex - w.startIndex);
      return e.keywordDesync = true, e.ports.noteKeywordAfterPrefixFired(), u(e, "ERROR", s, T.at(-1).endIndex, T);
    }
    if (n.length === 1 && t.length === 0) return n[0];
    if (t.length > 0 && n.length === 0) {
      let T = t.at(-1);
      return u(e, "redirected_statement", t[0].startIndex, T.endIndex, t);
    }
    if (n.length > 1 && t.length === 0) {
      let T = n.at(-1);
      return u(e, "variable_assignments", n[0].startIndex, T.endIndex, n);
    }
    if (n.length > 0 || t.length > 0) {
      let T = [...n, ...t], N = T.at(-1);
      return u(e, "command", s, N.endIndex, T);
    }
    return null;
  }
  y(e.L, r);
  let a = S(e.L), l = W(e, "cmd");
  if (l && l.type === "word") {
    x(e.L);
    let T = false;
    if (c(e.L) === "(") {
      let N = S(e.L);
      k(e.L, "cmd"), x(e.L), T = c(e.L) === ")", y(e.L, N);
    }
    if (T) {
      let N = k(e.L, "cmd");
      x(e.L);
      let w = k(e.L, "cmd"), A = g(e, "(", N), q = g(e, ")", w);
      x(e.L), Z(e);
      let F = Y(e);
      if (F) {
        let ae = [F];
        if (F.type === "redirected_statement" && F.children.length >= 2 && F.children[0].type === "compound_statement") ae = F.children;
        let qe = ae.at(-1), P = u(e, "function_definition", l.startIndex, qe.endIndex, [l, A, q, ...ae]), ee = [...n, ...t].sort((Wt, Ft) => Wt.startIndex - Ft.startIndex);
        if (ee.length === 0 || !H(e, Re)) return P;
        return e.keywordDesync = true, e.ports.noteKeywordAfterPrefixFired(), u(e, "ERROR", s, P.endIndex, [...ee, P]);
      }
    }
  }
  y(e.L, a);
  let f = W(e, "cmd");
  if (!f) {
    if (n.length === 1) return n[0];
    return null;
  }
  let d = u(e, "command_name", f.startIndex, f.endIndex, [f]);
  if (n.length + t.length > 0 && ut(f) && (f.text !== "time" || e.sawIfOrLoop) || f.text.startsWith("{")) e.misreading ??= "reserved_word_after_prefix";
  let b = [], h = [], p = null;
  while (true) {
    x(e.L);
    let T = re(e, true);
    if (T) {
      if (T.type === "heredoc_redirect") p = T;
      else if (T.type === "herestring_redirect") b.push(T);
      else h.push(T);
      continue;
    }
    if (h.length > 0) {
      if (!(e.stopToken === "]" && c(e.L) === "]") && Bt(e)) e.misreading ??= "words_after_redirect";
      break;
    }
    if (e.stopToken === "]" && c(e.L) === "]") break;
    let N = S(e.L), w = k(e.L, "arg");
    if (w.type === "EOF" || w.type === "NEWLINE" || w.type === "COMMENT" || w.type === "OP" && (w.value === "|" || w.value === "|&" || w.value === "&&" || w.value === "||" || w.value === ";" || w.value === ";;" || w.value === ";&" || w.value === ";;&" || w.value === "&" || w.value === ")" || w.value === "}" || w.value === "))")) {
      y(e.L, N);
      break;
    }
    y(e.L, N);
    let A = W(e, "arg");
    if (!A) {
      if (c(e.L) === "(") {
        if (c(e.L, 1) === "(" && J(e)) e.zshMathDiff = true;
        let q = k(e.L, "cmd"), F = g(e, "(", q), ae = B(e, ")"), qe = S(e.L), P = k(e.L, "cmd"), ee;
        if (P.type === "OP" && P.value === ")") ee = g(e, ")", P);
        else y(e.L, qe), ee = u(e, ")", F.endIndex, F.endIndex, []);
        b.push(u(e, "subshell", F.startIndex, ee.endIndex, [F, ...ae, ee]));
        continue;
      }
      break;
    }
    if (A.type === "word" && A.text === "=") {
      b.push(u(e, "ERROR", A.startIndex, A.endIndex, [A]));
      continue;
    }
    if ((A.type === "word" || A.type === "concatenation") && c(e.L) === "(" && e.L.b === A.endIndex) {
      b.push(u(e, "ERROR", A.startIndex, A.endIndex, [A]));
      continue;
    }
    b.push(A);
  }
  let I = ln(f, b, h, p);
  if ((ct(f) || I.some(ct)) && H(e, te)) e.misreading ??= "bracket_word";
  let _ = f.text === "time" && n.length + t.length === 0 && b[0]?.text === "!" ? b[0] : null;
  if (I.some((T) => T !== _ && ut(T))) e.misreading ??= "reserved_word_after_prefix";
  let E = [...n, ...t, d, ...b], R = E.length > 0 ? E.at(-1).endIndex : d.endIndex, v = E[0].startIndex, O = u(e, "command", v, R, E);
  if (p) {
    Xe(e);
    let T = e.L.heredocs.shift();
    if (T && p.children.length >= 2) {
      let A = u(e, "heredoc_body", T.bodyStart, T.bodyEnd, T.quoted ? [] : bn(e, T.bodyStart, T.bodyEnd)), q = u(e, "heredoc_end", T.endStart, T.endEnd, []);
      p = { type: p.type, text: U(e, p.startIndex, T.endEnd), startIndex: p.startIndex, endIndex: T.endEnd, children: [...p.children, A, q] };
    }
    let N = [...t, p, ...h], w = t.length > 0 ? Math.min(O.startIndex, t[0].startIndex) : O.startIndex;
    return u(e, "redirected_statement", w, p.endIndex, [O, ...N]);
  }
  if (h.length > 0) {
    let T = h.at(-1);
    return u(e, "redirected_statement", O.startIndex, T.endIndex, [O, ...h]);
  }
  return O;
}
function K(e, s, n = false) {
  let t = [];
  while (true) {
    x(e.L);
    let o = S(e.L), a = re(e);
    if (!a) break;
    if (a.type === "herestring_redirect" && !n) {
      y(e.L, o);
      break;
    }
    t.push(a);
  }
  if (t.length === 0) return s;
  let r = t.at(-1);
  return u(e, "redirected_statement", s.startIndex, r.endIndex, [s, ...t]);
}
var sn = 2e4, rn = /#|<<|`|\$'|\\[\s\S]|"(?:\\[\s\S]|[^"\\])*"?|'[^']*'?/g, It = /^(?:[#`]|<<|\$'$|".*(?:`|\$[([]|\$\{(?!\w*\})))/s, pe = /\\[\s\S]|\$'(?:\\[\s\S]|[^'\\])*'?|'[^']*'?|"(?:\\[\s\S]|[^"\\])*"?|\$\{|[}[\];\n]/g;
function Qe(e, s) {
  return e.type === "word" && e.endIndex - e.startIndex === 1 && e.text === s;
}
function St(e, s = true) {
  let n = e.type === "concatenation" ? e.children : [e], t = 0;
  for (let r of n) if (Qe(r, "[")) t++;
  else if (Qe(r, "]")) t = Math.max(0, t - 1);
  else if (t > 0 && !(s ? cn(r) : vt(r))) return true;
  return t > 0;
}
function vt(e) {
  return (e.type === "word" || e.type === "number" && e.children.length === 0) && !/[{}"'`$\\]/.test(e.text);
}
var wt = `[](){}"'\`\\;|&<>#$
`, on = /^\$\{#?[A-Za-z_][A-Za-z0-9_]*(?:\[[A-Za-z0-9_@*]+\])?\}/, an = /^\$\(\([A-Za-z0-9_+\-*/% ]*\)\)/;
function Ze(e, s) {
  let n = e.slice(s, s + 80), t = on.exec(n) ?? an.exec(n);
  return t ? t[0].length : 0;
}
function cn(e) {
  if (vt(e)) return true;
  switch (e.type) {
    case "raw_string":
      return !/[[\]\n]/.test(e.text);
    case "string": {
      if (!e.text.startsWith('"')) return false;
      let s = e.text.slice(1, -1);
      for (let n = s.indexOf("$"); n !== -1; n = s.indexOf("$", n + 1)) {
        let t = Ze(s, n);
        if (t > 0) s = s.slice(0, n) + s.slice(n + t), n--;
      }
      return !/[[\]\n\\`]|\$[({['"]/.test(s);
    }
    case "simple_expansion":
      return true;
    case "expansion": {
      if (Ze(e.text, 0) === e.text.length) return true;
      let s = e.text.slice(2, -1);
      return e.text.startsWith("${") && e.text.endsWith("}") && /^[A-Za-z0-9_!@*?-]/.test(s) && !/[ \t]/.test(s) && !at(s);
    }
    case "arithmetic_expansion":
      return e.text.startsWith("$((") && e.text.endsWith("))") && !at(e.text.slice(3, -2));
    default:
      return false;
  }
}
function at(e) {
  for (let s of e) if (wt.includes(s)) return true;
  return false;
}
function ct(e) {
  return e.type === "concatenation" && e.children[0].type === "word" && un(e.children[0].text) && e.children.some((s) => Qe(s, "[")) && St(e, false);
}
var lt = /^[A-Za-z_\u0080-\uffff][A-Za-z0-9_\u0080-\uffff]*(?:\[.*\])?\+?=/s, Rt = /* @__PURE__ */ new Set([...lbo, "{", "}", "!", "[[", "]]", "time", "coproc"]);
function ut(e) {
  return Rt.has(e.text) || e.text.startsWith("{");
}
function ln(e, s, n, t) {
  if (e.text !== "time" && e.text !== "coproc" && !lt.test(e.text)) return [];
  let r = [], o = [...s, ...n, ...t ? [t] : []];
  for (let d of o.sort((L, b) => L.startIndex - b.startIndex)) {
    if (!d.type.endsWith("_redirect")) {
      r.push(d);
      continue;
    }
    let L = d.children.findIndex((b) => /^[<>&|]+-?$/.test(b.type));
    if (L !== -1) {
      let b = /^[<>]&-$/.test(d.children[L].type);
      r.push(...d.children.slice(b ? L + 1 : L + 2));
    }
  }
  let a = e.text === "coproc" ? 2 : 1, l = e.text === "time" ? 2 : 0, f = [];
  for (let d of r) {
    if (a === 0) break;
    if (f.push(d), l === 2 && d.text === "-p") {
      l = 1;
      continue;
    } else if (l > 0 && d.text === "--") {
      l = 0;
      continue;
    } else if (Rt.has(d.text)) a = 1 / 0;
    else if (lt.test(d.text) || !/^(?:word|number|concatenation|string|raw_string)$/.test(d.type)) ;
    else a--;
    l = 0;
  }
  return f;
}
function un(e) {
  let s = e[0] ?? "";
  if (!M(s) && s < "\x80") return false;
  for (let n = 1; n < e.length; n++) {
    let t = e[n];
    if (!z(t) && t < "\x80") return false;
  }
  return true;
}
function dn(e, s, n) {
  let t = "", r = 0, o = s;
  while (o < n) {
    let a = e[o];
    if (r === 0 && a === "$" && (t === "" || t === '"')) r = Ze(e, o);
    if (r > 0) r--;
    else if (t !== "") {
      if (e.startsWith(t, o)) o += t.length - 1, t = "";
      else if (t === "'" ? `[]
`.includes(a) : t === '"' ? `[]
\\\``.includes(a) || a === "$" && `({['"`.includes(e[o + 1] ?? " ") : wt.includes(a) || t === "}" && (a === " " || a === "	")) return true;
    } else if (a === "[") return true;
    else if (a === '"' || a === "'") t = a;
    else if (a === "$" && e.startsWith("((", o + 1)) t = "))", o += 2;
    else if (a === "$" && e[o + 1] === "{") {
      if (!/[A-Za-z0-9_!@*?-]/.test(e[o + 2] ?? " ")) return true;
      t = "}", o += 1;
    } else if (a === "$" && `('"`.includes(e[o + 1] ?? " ")) return true;
    else if (" 	\n;&|<>(){}`\\".includes(a)) return true;
    o++;
  }
  return t !== "";
}
function Et(e) {
  let s = S(e.L);
  x(e.L);
  let n = e.L.b;
  if (!M(c(e.L))) return y(e.L, s), null;
  while (z(c(e.L))) i(e.L);
  let t = e.L.b, r = t, o = e.L.i + 1;
  if (c(e.L) === "[") {
    je(e), i(e.L);
    let R = 1;
    while (e.L.i < e.L.len && R > 0) {
      let v = c(e.L);
      if (v === "[") R++;
      else if (v === "]") R--;
      i(e.L);
    }
    r = e.L.b;
  }
  let a = r > t && dn(e.src, o, e.L.i - 1), l = c(e.L), f = c(e.L, 1), d;
  if (l === "=" && f !== "=") d = "=";
  else if (l === "+" && f === "=") d = "+=";
  else return y(e.L, s), null;
  let L = u(e, "variable_name", n, t, []), b = L;
  if (r > t) {
    Te(e, t);
    let R = u(e, "[", t, t + 1, []), v = Ln(e, t + 1, r - 1), O = u(e, "]", r - 1, r, []);
    if (b = u(e, "subscript", n, r, [L, R, v, O]), a && H(e, te)) e.misreading ??= "bracket_word";
  }
  let h = e.L.b;
  if (i(e.L), d === "+=") i(e.L);
  let p = e.L.b, I = u(e, d, h, p, []), m = null;
  if (c(e.L) === "(") {
    let R = k(e.L, "cmd"), v = g(e, "(", R), O = [v];
    while (true) {
      if (x(e.L), c(e.L) === ")") break;
      let q = c(e.L) === "[";
      if (q) je(e);
      let F = W(e, "arg", q);
      if (!F) break;
      O.push(F);
    }
    let T = k(e.L, "cmd"), N = T.value === ")" ? g(e, ")", T) : u(e, ")", v.endIndex, v.endIndex, []), w = c(e.L), A = T.value === ")" && !(w === "" || ` 	
;&|)`.includes(w)) && !(w === "`" && e.inBacktick > 0);
    if ((T.value !== ")" || A || O.some((q) => q.text.startsWith("#") || St(q))) && H(e, te)) e.misreading ??= "bracket_word";
    O.push(N), m = u(e, "array", v.startIndex, N.endIndex, O);
  } else {
    let R = c(e.L);
    if (R && R !== " " && R !== "	" && R !== `
` && R !== ";" && R !== "&" && R !== "|" && R !== ")" && R !== "}") m = W(e, "arg");
  }
  let _ = m ? [b, I, m] : [b, I], E = m ? m.endIndex : p;
  return u(e, "variable_assignment", n, E, _);
}
function je(e, s = 0, n = true) {
  if (!$t(e)) return;
  if (e.subscriptRead > sn) {
    ye(e, e.L.b, e.srcBytes, n);
    return;
  }
  let t = s, r = 0, o = e.L.len, a = false;
  pe.lastIndex = e.L.i;
  for (let l = pe.exec(e.src); l; l = pe.exec(e.src)) {
    if (It.test(l[0])) {
      a = n && V(tt(e), e.L.b, e.srcBytes);
      break;
    }
    if (a ||= n && /^'.*(?:`|\$\()/s.test(l[0]), l[0] === "${") r++;
    else if (l[0] === "}") r = Math.max(r - 1, 0);
    else if (r > 0) continue;
    else if (l[0] === "[") t++;
    else if (/^['"]/.test(l[0]) && l[0].includes("[")) t = 1 / 0;
    else if (l[0] === ";" || l[0] === `
` || l[0] === "]" && --t === 0 && e.src[pe.lastIndex] !== "[") {
      o = pe.lastIndex;
      break;
    }
  }
  e.subscriptRead += o - e.L.i, ye(e, e.L.b, oe(e.L, o), a);
}
function fn(e) {
  x(e.L);
  let s = c(e.L);
  if ((s === "@" || s === "*") && c(e.L, 1) === "]") {
    let n = e.L.b;
    return i(e.L), u(e, "word", n, e.L.b, []);
  }
  if (s === "(" && c(e.L, 1) === "(") {
    let n = e.L.b;
    i(e.L), i(e.L);
    let t = u(e, "((", n, e.L.b, []), r = _e(e, "))", "var");
    x(e.L);
    let o;
    if (c(e.L) === ")" && c(e.L, 1) === ")") {
      let l = e.L.b;
      i(e.L), i(e.L), o = u(e, "))", l, e.L.b, []);
    } else o = u(e, "))", e.L.b, e.L.b, []);
    let a = r ? [t, r, o] : [t, o];
    return u(e, "compound_statement", t.startIndex, o.endIndex, a);
  }
  return _e(e, "]", "word");
}
function Ln(e, s, n) {
  let t = U(e, s, n);
  if (/^\d+$/.test(t)) return u(e, "number", s, n, []);
  if (/^\$([a-zA-Z_]\w*)$/.exec(t)) {
    let o = u(e, "$", s, s + 1, []), a = u(e, "variable_name", s + 1, n, []);
    return u(e, "simple_expansion", s, n, [o, a]);
  }
  if (t.length === 2 && t[0] === "$" && ie.has(t[1])) {
    let o = u(e, "$", s, s + 1, []), a = u(e, "special_variable_name", s + 1, n, []);
    return u(e, "simple_expansion", s, n, [o, a]);
  }
  return u(e, "word", s, n, []);
}
function dt(e) {
  let s = c(e.L);
  if (s === "" || s === `
`) return false;
  if (s === "|" || s === "&" || s === ";" || s === "(" || s === ")") return false;
  if (s === "<" || s === ">") return c(e.L, 1) === "(";
  if (D(s) && Nt(e).isDescriptor) return false;
  if (s === "}") return false;
  if (e.stopToken === "]" && s === "]") return false;
  return true;
}
function Nt(e) {
  let s = e.L.i;
  while (s < e.L.len && D(e.L.src[s])) s++;
  let n = s < e.L.len ? e.L.src[s] : "", t = n === ">" || n === "<";
  if (t ? s - e.L.i > 1 && e.L.src[s + 1] !== "(" : s - e.L.i === 1 && e.L.src.startsWith("&>", s)) e.misreading ??= "digits_before_redirect";
  return { end: s, isDescriptor: t };
}
function re(e, s = false) {
  let n = S(e.L);
  x(e.L);
  let t = null;
  if (D(c(e.L))) {
    let a = e.L.b, { end: l, isDescriptor: f } = Nt(e);
    if (f) {
      while (e.L.i < l) i(e.L);
      t = u(e, "file_descriptor", a, e.L.b, []);
    }
  }
  if (t === null && c(e.L) === "{") {
    let a = e.L.i + 1;
    if (a < e.L.len && /[A-Za-z_]/.test(e.L.src[a])) {
      while (a < e.L.len && /[A-Za-z0-9_]/.test(e.L.src[a])) a++;
      if (e.L.src[a] === "[") {
        let l = 0, f = false, d = false;
        while (a < e.L.len) {
          let L = e.L.src[a];
          if (f) {
            if (L === "'") f = false;
          } else if (d) {
            if (L === "\\" && a + 1 < e.L.len) a++;
            else if (L === '"') d = false;
          } else if (L === "\\" && a + 1 < e.L.len) a++;
          else if (L === "'") f = true;
          else if (L === '"') d = true;
          else if (L === "[") l++;
          else if (L === "]") {
            if (l--, l === 0) {
              a++;
              break;
            }
          } else if (L === "\\" && e.L.src[a + 1] === `
`) {
            a += 2;
            continue;
          } else if (L === `
`) break;
          a++;
        }
      }
      if (e.L.src[a] === "}") {
        let l = a + 1 < e.L.len ? e.L.src[a + 1] : "";
        if (l === ">" || l === "<") {
          let f = e.L.b;
          while (e.L.i <= a) i(e.L);
          t = u(e, "variable_name", f, e.L.b, []);
        }
      }
    }
  }
  let r = k(e.L, "arg");
  if (r.type !== "OP") return y(e.L, n), null;
  let o = r.value;
  if (o === "<<<") {
    let a = g(e, "<<<", r);
    x(e.L);
    let l = W(e, "arg"), f = l ? l.endIndex : a.endIndex, d = l ? [a, l] : [a];
    return u(e, "herestring_redirect", t ? t.startIndex : a.startIndex, f, t ? [t, ...d] : d);
  }
  if (o === "<<" || o === "<<-") {
    let a = g(e, o, r);
    Vt(e.L);
    let l = e.L.b, f = false, d = "", L = c(e.L);
    if (L === "'" || L === '"') {
      f = true, i(e.L);
      while (e.L.i < e.L.len && c(e.L) !== L) d += c(e.L), i(e.L);
      if (e.L.i < e.L.len) i(e.L);
    } else if (L === "\\") {
      if (f = true, i(e.L), e.L.i < e.L.len && c(e.L) !== `
`) d += c(e.L), i(e.L);
      while (e.L.i < e.L.len && z(c(e.L))) d += c(e.L), i(e.L);
    } else while (e.L.i < e.L.len && Yt(c(e.L))) d += c(e.L), i(e.L);
    let b = e.L.b;
    if (L === '"' && /[`$\\\n]/.test(d)) throw e.aborted = true, Error("heredoc delimiter contains substitution/escape chars");
    if (e.L.i < e.L.len) {
      let m = c(e.L);
      if (m !== " " && m !== "	" && m !== `
` && m !== "<" && m !== ">" && m !== "|" && m !== "&" && m !== ";" && m !== "(" && m !== ")") throw e.aborted = true, Error("heredoc delimiter word continues past scanned segment");
    }
    if (/[\uD800-\uDFFF]/.test(d)) throw e.aborted = true, Error("heredoc delimiter contains astral/surrogate code unit");
    let h = u(e, "heredoc_start", l, b, []);
    e.L.heredocs.push({ delim: d, stripTabs: o === "<<-", quoted: f, bodyStart: 0, bodyEnd: 0, endStart: 0, endEnd: 0 });
    let p = t ? [t, a, h] : [a, h], I = t ? t.startIndex : a.startIndex;
    while (true) {
      x(e.L);
      let m = c(e.L);
      if (m === `
` || m === "" || e.L.i >= e.L.len) break;
      if (m === ">" || m === "<" || D(m)) {
        let R = S(e.L), v = re(e);
        if (v && v.type === "file_redirect") {
          p.push(v);
          continue;
        }
        y(e.L, R);
      }
      if (m === "|" && c(e.L, 1) !== "|") {
        let R = e.L.b;
        i(e.L), x(e.L);
        let v = [];
        while (true) {
          let O = Y(e);
          if (!O) break;
          if (v.push(O), x(e.L), c(e.L) === "|" && c(e.L, 1) !== "|") {
            let T = e.L.b;
            i(e.L), v.push(u(e, "|", T, e.L.b, [])), x(e.L);
            continue;
          }
          break;
        }
        if (v.length > 0) {
          let O = v.at(-1);
          p.push(u(e, "pipeline", v[0].startIndex, O.endIndex, v));
        } else p.push(u(e, "ERROR", R, e.L.b, []));
        continue;
      }
      if (m === "&" && c(e.L, 1) === "&" || m === "|" && c(e.L, 1) === "|") {
        let R = e.L.b;
        i(e.L), i(e.L), x(e.L);
        let v = Y(e);
        if (v) p.push(v);
        else p.push(u(e, "ERROR", R, e.L.b, []));
        continue;
      }
      if (m === "&" || m === ";" || m === "(" || m === ")") {
        let R = e.L.b;
        while (e.L.i < e.L.len && c(e.L) !== `
`) i(e.L);
        p.push(u(e, "ERROR", R, e.L.b, []));
        break;
      }
      let _ = W(e, "arg");
      if (_) {
        p.push(_);
        continue;
      }
      let E = e.L.b;
      while (e.L.i < e.L.len && c(e.L) !== `
`) i(e.L);
      if (e.L.b > E) p.push(u(e, "ERROR", E, e.L.b, []));
      break;
    }
    return u(e, "heredoc_redirect", I, e.L.b, p);
  }
  if (o === "<&-" || o === ">&-") {
    let a = g(e, o, r), l = [];
    if (t) l.push(t);
    l.push(a), x(e.L);
    let f = S(e.L), d = dt(e) ? W(e, "arg") : null;
    if (d) l.push(d);
    else y(e.L, f);
    let L = t ? t.startIndex : a.startIndex, b = d ? d.endIndex : a.endIndex;
    return u(e, "file_redirect", L, b, l);
  }
  if (o === ">" || o === ">>" || o === ">&" || o === ">|" || o === "&>" || o === "&>>" || o === "<" || o === "<&") {
    let a = g(e, o, r), l = [];
    if (t) l.push(t);
    l.push(a);
    let f = a.endIndex, d = 0;
    while (true) {
      if (x(e.L), !dt(e)) break;
      if (!s && d >= 1) break;
      let b = c(e.L), h = c(e.L, 1), p = null;
      if ((b === "<" || b === ">") && h === "(") p = ze(e);
      else p = W(e, "arg");
      if (!p) break;
      l.push(p), f = p.endIndex, d++;
    }
    let L = t ? t.startIndex : a.startIndex;
    return u(e, "file_redirect", L, f, l);
  }
  return y(e.L, n), null;
}
function ze(e) {
  let s = c(e.L);
  if (s !== "<" && s !== ">" || c(e.L, 1) !== "(") return null;
  let n = e.L.b;
  i(e.L), i(e.L);
  let t = u(e, s + "(", n, e.L.b, []), r = B(e, ")");
  x(e.L);
  let o;
  if (c(e.L) === ")") {
    let a = e.L.b;
    i(e.L), o = u(e, ")", a, e.L.b, []);
  } else o = u(e, ")", e.L.b, e.L.b, []);
  return u(e, "process_substitution", n, o.endIndex, [t, ...r, o]);
}
function Xe(e) {
  while (e.L.i < e.L.len && e.L.src[e.L.i] !== `
`) i(e.L);
  if (e.L.i < e.L.len) i(e.L);
  for (let s = 0; s < e.L.heredocs.length; s++) {
    let n = e.L.heredocs[s], t = e.L.b, r = n.delim.length;
    if (n.stripTabs && n.delim.startsWith("	")) throw e.aborted = true, Error("ambiguous heredoc terminator (<<- tab-prefixed delim)");
    while (e.L.i < e.L.len) {
      let o = e.L.i, a = e.L.b, l = o;
      if (n.stripTabs) while (l < e.L.len && e.L.src[l] === "	") l++;
      if (e.L.src.startsWith(n.delim, l)) {
        let f = l + r, d = f < e.L.len ? e.L.src[f] : "";
        if (d === "" || d === `
` || d === "\r") {
          while (e.L.i < l) i(e.L);
          let b = e.L.b;
          for (let h = 0; h < r; h++) i(e.L);
          if (e.L.heredocs[s] = { ...n, bodyStart: t, bodyEnd: a, endStart: b, endEnd: e.L.b }, e.L.i < e.L.len && e.L.src[e.L.i] === `
`) i(e.L);
          return;
        }
        let L = f;
        while (L < e.L.len) {
          let b = e.L.src[L];
          if (b === `
`) break;
          if (b === ")" || b === "`" || b === "}") throw e.aborted = true, Error("ambiguous heredoc terminator (shell_eof_token)");
          L++;
        }
      }
      while (e.L.i < e.L.len && e.L.src[e.L.i] !== `
`) i(e.L);
      if (e.L.i < e.L.len) i(e.L);
    }
    e.L.heredocs[s] = { ...n, bodyStart: t, bodyEnd: e.L.b, endStart: e.L.b, endEnd: e.L.b };
  }
}
function bn(e, s, n) {
  let t = S(e.L);
  pn(e, s);
  let r = [], o = e.L.b, a = false;
  while (e.L.b < n) {
    let l = c(e.L);
    if (l === "\\") {
      let f = c(e.L, 1);
      if (f === "$" || f === "`" || f === "\\") {
        i(e.L), i(e.L);
        continue;
      }
      i(e.L);
      continue;
    }
    if (l === "$" || l === "`") {
      if (l === "$" && c(e.L, 1) === "'") {
        i(e.L);
        continue;
      }
      let f = e.L.b;
      e.inDquote++;
      let d = G(e);
      if (e.inDquote--, d && (d.type === "simple_expansion" || d.type === "expansion" || d.type === "command_substitution" || d.type === "arithmetic_expansion" || d.type === "ERROR")) {
        if (a && f > o) r.push(u(e, "heredoc_content", o, f, []));
        r.push(d), o = e.L.b, a = true;
      }
      continue;
    }
    i(e.L);
  }
  if (a) r.push(u(e, "heredoc_content", o, n, []));
  return y(e.L, t), r;
}
function pn(e, s) {
  if (!e.L.byteTable) oe(e.L, 0);
  let n = e.L.byteTable, t = 0, r = e.src.length;
  while (t < r) {
    let o = t + r >>> 1;
    if (n[o] < s) t = o + 1;
    else r = o;
  }
  e.L.i = t, e.L.b = s, Tt(e.L);
}
function Ot(e) {
  return $t(e) ? { brackets: 0, subscriptDepth: 0, holdsDollar: false, partsSeen: 0, afterExpansion: false, subscriptRunsQuotes: false } : null;
}
function xe(e, s, n) {
  if (!n) return;
  let t = s.at(-1);
  if (n.brackets > 0 && t && (n.subscriptDepth > 0 || t.type !== "raw_string")) ye(e, t.startIndex, t.endIndex, n.subscriptRunsQuotes && (t.type === "raw_string" || t.type !== "word" && V(tt(e), t.startIndex, t.endIndex)));
  for (; n.partsSeen < s.length; n.partsSeen++) {
    let { text: r, type: o } = s[n.partsSeen], a = s[n.partsSeen - 1];
    if (n.holdsDollar ||= !o.endsWith("_substitution") && r.includes("$"), n.afterExpansion = o.endsWith("expansion") || o === "ansi_c_string" || o === "number" || r === "]" || o === "word" && (/\$[#^=~+]*\w+$/.test(r) || /^\$#?$/.test(a?.text ?? "") && /^[\^=~+]*\w+$/.test(r) || r === "}" && a?.type === "word" && /\$\{\w*$/.test(a.text)), n.subscriptDepth > 0 && /^['"`<>]/.test(r) && r.includes("[")) n.brackets = 1 / 0;
  }
}
function Ye(e, s) {
  if (!e) return;
  if (s === "[") {
    if (e.subscriptDepth === 0 && e.holdsDollar) e.subscriptDepth = e.brackets + 1;
    e.subscriptRunsQuotes ||= e.afterExpansion, e.brackets++;
  } else if (s === "]") {
    if (e.afterExpansion = true, e.brackets = Math.max(e.brackets - 1, 0), e.brackets < e.subscriptDepth) e.subscriptDepth = 0, e.subscriptRunsQuotes = false;
  }
}
function W(e, s, n = false) {
  x(e.L);
  let t = [], r = Ot(e), o = false;
  while (e.L.i < e.L.len) {
    xe(e, t, r);
    let f = c(e.L);
    if (f === " " || f === "	" || f === `
` || f === "\r" || f === "" || f === "|" || f === "&" || f === ";" || f === "(" || f === ")") break;
    if (o && At(e)) e.misreading ??= "brace_text_read_again";
    if (f === "<" || f === ">") {
      if (c(e.L, 1) === "(") {
        let L = ze(e);
        if (L) t.push(L);
        continue;
      }
      break;
    }
    if (f === '"') {
      t.push(Q(e));
      continue;
    }
    if (f === "'") {
      let L = k(e.L, "arg");
      t.push(g(e, "raw_string", L));
      continue;
    }
    if (f === "$") {
      if (Ve(e, mn)) e.misreading ??= "brace_text_read_again";
      let L = c(e.L, 1);
      if (L === "'") {
        let h = k(e.L, "arg");
        t.push(g(e, "ansi_c_string", h));
        continue;
      }
      if (L === '"') {
        let h = { type: "DOLLAR", value: "$", start: e.L.b, end: e.L.b + 1 };
        i(e.L), t.push(g(e, "$", h)), t.push(Q(e));
        continue;
      }
      if (L === "`") {
        let h = { type: "DOLLAR", value: "$", start: e.L.b, end: e.L.b + 1 };
        i(e.L), t.push(g(e, "$", h));
        continue;
      }
      let b = G(e);
      if (b) t.push(b);
      continue;
    }
    if (f === "`") {
      if (e.inBacktick > 0) break;
      let L = Fe(e);
      t.push(L);
      continue;
    }
    if (f === "{") {
      let L = Tn(e);
      if (L) {
        t.push(L);
        continue;
      }
      let b = c(e.L, 1);
      if (b === ";" || b === "|" || b === "&" || b === `
` || b === "" || b === ")" || b === " " || b === "	") {
        let p = e.L.b;
        i(e.L), t.push(u(e, "word", p, e.L.b, []));
        continue;
      }
      let h = kn(e);
      if (h) {
        o ||= _n(e, h);
        for (let p of h) Ye(r, p.text), t.push(p), xe(e, t, r);
        continue;
      }
    }
    if (f === "}") {
      let L = e.L.b;
      i(e.L), t.push(u(e, "word", L, e.L.b, []));
      continue;
    }
    if (f === "[" || f === "]") {
      if (t.length > 0 || n) Ye(r, f);
      let L = e.L.b;
      i(e.L), t.push(u(e, "word", L, e.L.b, []));
      continue;
    }
    let d = hn(e);
    if (!d) break;
    if (d.type === "word" && /^-?(0x)?[0-9]+#$/.test(d.text) && c(e.L) === "$" && (c(e.L, 1) === "{" || c(e.L, 1) === "(")) {
      let L = G(e);
      if (L) {
        t.push(u(e, "number", d.startIndex, L.endIndex, [L]));
        continue;
      }
    }
    t.push(d);
  }
  if (xe(e, t, r), r && r.subscriptDepth > 0) je(e, r.brackets, r.subscriptRunsQuotes);
  if (t.some(gn) && t.some((f) => /(?<!\$)\{/.test(f.text))) e.misreading ??= "brace_text_read_again";
  if (t.length === 0) return null;
  if (t.length === 1) return t[0];
  let a = t[0], l = t.at(-1);
  return u(e, "concatenation", a.startIndex, l.endIndex, t);
}
function hn(e) {
  let s = e.L.b, n = e.L.i;
  while (e.L.i < e.L.len) {
    let o = c(e.L);
    if (o === "\\") {
      if (e.L.i + 1 >= e.L.len) break;
      if (e.L.src[e.L.i + 1] === `
`) break;
      i(e.L), i(e.L);
      continue;
    }
    if (o === " " || o === "	" || o === `
` || o === "\r" || o === "" || o === "|" || o === "&" || o === ";" || o === "(" || o === ")" || o === "<" || o === ">" || o === '"' || o === "'" || o === "$" || o === "`" || o === "{" || o === "}" || o === "[" || o === "]") break;
    i(e.L);
  }
  if (e.L.b === s) return null;
  let t = e.src.slice(n, e.L.i), r = /^-?\d+$/.test(t) ? "number" : "word";
  return u(e, r, s, e.L.b, []);
}
var Dt = /(?:^|\{)(?:[A-Z]\.\.[a-z]|[a-z]\.\.[A-Z])(?:\.\.[-+]?\d+)?$/, xn = /\$\$?(?:\[[^,}]*)?[,}]/y, mn = /\$\[[^{]*\{/y, yn = /\$\{\w+(?:(?::?[-=+?]|%%?|##?)[\w./*-]*)?\}/y;
function Ve(e, s) {
  return s.lastIndex = e.L.i, s.test(e.src);
}
function _n(e, s) {
  return s.at(-1).text !== "}" || s.slice(1).some((n) => n.text.includes("{")) || !s.some((n) => n.text.replace(/\\[^]/g, "").includes(",")) && e.src.includes("}", e.L.i);
}
function gn(e) {
  return e.type === "string" && e.children.some((s) => /^(?:`|\$\{)/.test(s.text) && s.text.includes('"'));
}
function At(e) {
  let s = c(e.L);
  if (s === "`" || s === "'" || s === '"') return true;
  let n = c(e.L, 1);
  return Ve(e, xn) || s === "$" && (n === "(" || n === "'" || n === "{" && !Ve(e, yn));
}
function Tn(e) {
  let s = S(e.L);
  if (c(e.L) !== "{") return null;
  let n = e.L.b;
  i(e.L);
  let t = e.L.b, r = e.L.b;
  while (D(c(e.L)) || M(c(e.L))) i(e.L);
  let o = e.L.b;
  if (o === r || c(e.L) !== "." || c(e.L, 1) !== ".") return y(e.L, s), null;
  let a = e.L.b;
  i(e.L), i(e.L);
  let l = e.L.b, f = e.L.b;
  while (D(c(e.L)) || M(c(e.L))) i(e.L);
  let d = e.L.b;
  if (d === f || c(e.L) !== "}") return y(e.L, s), null;
  let L = e.L.b;
  i(e.L);
  let b = e.L.b, h = U(e, r, o), p = U(e, f, d), I = /^\d+$/.test(h), m = /^\d+$/.test(p);
  if (I !== m) return y(e.L, s), null;
  if (!I && (h.length !== 1 || p.length !== 1)) return y(e.L, s), null;
  if (Dt.test(`${h}..${p}`)) e.misreading ??= "brace_text_read_again";
  let _ = I ? "number" : "word", E = m ? "number" : "word";
  return u(e, "brace_expression", n, b, [u(e, "{", n, t, []), u(e, _, r, o, []), u(e, "..", a, l, []), u(e, E, f, d, []), u(e, "}", L, b, [])]);
}
function kn(e) {
  if (c(e.L) !== "{") return null;
  let s = e.L.b;
  i(e.L);
  let n = e.L.b, t = [u(e, "word", s, n, [])];
  while (e.L.i < e.L.len) {
    let r = c(e.L);
    if (r === "}" || r === `
` || r === ";" || r === "|" || r === "&" || r === " " || r === "	" || r === "<" || r === ">" || r === "(" || r === ")") break;
    if (r === "[" || r === "]") {
      let l = e.L.b;
      i(e.L), t.push(u(e, "word", l, e.L.b, []));
      continue;
    }
    let o = e.L.b;
    while (e.L.i < e.L.len) {
      let l = c(e.L);
      if (l === "\\" && e.L.i + 1 < e.L.len) {
        i(e.L), i(e.L);
        continue;
      }
      if (l === "}" || l === `
` || l === ";" || l === "|" || l === "&" || l === " " || l === "	" || l === "<" || l === ">" || l === "(" || l === ")" || l === "[" || l === "]") break;
      if (At(e)) e.misreading ??= "brace_text_read_again";
      i(e.L);
    }
    let a = e.L.b;
    if (a > o) {
      let l = U(e, o, a);
      if (c(e.L) === "}" && Dt.test(l)) e.misreading ??= "brace_text_read_again";
      let f = /^-?\d+$/.test(l) ? "number" : "word";
      t.push(u(e, f, o, a, []));
    } else break;
  }
  if (c(e.L) === "}") {
    let r = e.L.b;
    i(e.L), t.push(u(e, "word", r, e.L.b, []));
  }
  return Te(e, s), t;
}
function Te(e, s) {
  se(e, s, e.L.b);
  let n = ke(e, s, e.srcBytes);
  if (n && !e.plainQuotedCode) {
    let t = [], r = true;
    for (let o of e.src.matchAll(rn)) {
      if (It.test(o[0])) {
        r = false;
        break;
      }
      let a = o[0].startsWith("'") ? o[0].search(/`|\$\(/) : -1;
      if (a >= 0) t.push(oe(e.L, o.index + a));
    }
    e.plainQuotedCode = r ? t : e.quotedCode;
  }
  if ((We(e, s, e.srcBytes) || n && V(e.plainQuotedCode, s, e.srcBytes)) && /\$\{(?!\w*\})/.test(U(e, s, e.L.b))) se(e, s, e.srcBytes);
}
function Q(e) {
  let s = e.L.b;
  i(e.L), e.inDquote++;
  let n = e.L.b, r = [u(e, '"', s, n, [])], o = e.L.b, a = e.L.i;
  while (e.L.i < e.L.len) {
    let f = c(e.L);
    if (f === '"') break;
    if (f === "\\" && e.L.i + 1 < e.L.len) {
      i(e.L), i(e.L);
      continue;
    }
    if (f === `
`) {
      he(e, r, o, a), i(e.L), o = e.L.b, a = e.L.i;
      continue;
    }
    if (f === "$") {
      let d = c(e.L, 1);
      if (d === "(" || d === "{" || d === "[" && J(e) || M(d) || ie.has(d) || D(d) || d >= "\x80" || $e.has(d) && yt(e, e.L.i + 1) !== -1) {
        he(e, r, o, a);
        let L = G(e);
        if (L) r.push(L);
        o = e.L.b, a = e.L.i;
        continue;
      }
      if (d !== '"' && d !== "") {
        he(e, r, o, a);
        let L = e.L.b;
        i(e.L), r.push(u(e, "$", L, e.L.b, [])), o = e.L.b, a = e.L.i;
        continue;
      }
    }
    if (f === "`") {
      he(e, r, o, a);
      let d = Fe(e);
      r.push(d), o = e.L.b, a = e.L.i;
      continue;
    }
    i(e.L);
  }
  he(e, r, o, a);
  let l;
  if (c(e.L) === '"') {
    let f = e.L.b;
    i(e.L), l = u(e, '"', f, e.L.b, []);
  } else l = u(e, '"', e.L.b, e.L.b, []);
  return r.push(l), e.inDquote--, u(e, "string", s, l.endIndex, r);
}
function he(e, s, n, t) {
  if (e.L.b > n) {
    let r = e.src.slice(t, e.L.i);
    if (!/^[ \t]+$/.test(r)) s.push(u(e, "string_content", n, e.L.b, []));
  }
}
function G(e) {
  let s = e.L.i, n = c(e.L, 1), t = e.L.b;
  if (n === "(" && c(e.L, 2) === "(") {
    i(e.L), i(e.L), i(e.L);
    let f = u(e, "$((", t, e.L.b, []), d = S(e.L), L = e.L.i, b = ge(e, "))", "var");
    x(e.L);
    let h = Ce(e, L, ")", true), p, I = false;
    if (c(e.L) !== ")" || c(e.L, 1) !== ")") xt(e, d, "))"), I = true, mt(e, h);
    if (Ke(e.L, s, e.L.i + 2), c(e.L) === ")" && c(e.L, 1) === ")") {
      let m = e.L.b;
      i(e.L), i(e.L), p = u(e, "))", m, e.L.b, []);
    } else p = u(e, "))", e.L.b, e.L.b, []);
    return u(e, I ? "ERROR" : "arithmetic_expansion", t, p.endIndex, [f, ...b, p]);
  }
  if (n === "[") {
    i(e.L), i(e.L);
    let f = u(e, "$[", t, e.L.b, []), d = S(e.L), L = e.L.i, b = ge(e, "]", "var");
    x(e.L);
    let h = Ce(e, L, "]", false), p, I = false;
    if (c(e.L) !== "]") xt(e, d, "]"), I = true, mt(e, h);
    if (Ke(e.L, s, e.L.i + 1), c(e.L) === "]") {
      let m = e.L.b;
      i(e.L), p = u(e, "]", m, e.L.b, []);
    } else p = u(e, "]", e.L.b, e.L.b, []);
    return u(e, I ? "ERROR" : "arithmetic_expansion", t, p.endIndex, [f, ...b, p]);
  }
  if (n === "(") {
    i(e.L), i(e.L);
    let f = u(e, "$(", t, e.L.b, []), { inDquote: d, inForHead: L } = e;
    e.inDquote = 0, e.inForHead = false;
    let b = B(e, ")");
    e.inDquote = d, e.inForHead = L, x(e.L);
    let h, p = false;
    if (c(e.L) === ")") {
      let I = e.L.b;
      i(e.L), h = u(e, ")", I, e.L.b, []);
    } else {
      p = true, e.zshBraceDiff = true;
      let I = e.L.b, m = 1;
      while (e.L.i < e.L.len) {
        let _ = c(e.L);
        if (_ === "\\" && e.L.i + 1 < e.L.len) {
          i(e.L), i(e.L);
          continue;
        }
        if (_ === '"' || _ === "'") {
          if (C(e, _), e.L.i < e.L.len) i(e.L);
          continue;
        }
        if (_ === "`") {
          i(e.L);
          while (e.L.i < e.L.len && c(e.L) !== "`") {
            if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
            i(e.L);
          }
          if (e.L.i < e.L.len) i(e.L);
          continue;
        }
        if (_ === "$" && c(e.L, 1) === "$") {
          i(e.L), i(e.L);
          continue;
        }
        if (_ === "$" && c(e.L, 1) === "'") {
          if (C(e, "$'"), e.L.i < e.L.len) i(e.L);
          continue;
        }
        if (_ === "(") m++;
        else if (_ === ")") {
          if (m--, m === 0) break;
        }
        i(e.L);
      }
      if (b.push(u(e, "ERROR", I, e.L.b, [])), c(e.L) === ")") {
        let _ = e.L.b;
        i(e.L), h = u(e, ")", _, e.L.b, []);
      } else h = u(e, "ERROR", e.L.b, e.L.b, []);
    }
    if (!p && b.length === 1 && b[0].type === "redirected_statement" && b[0].children.length === 1 && b[0].children[0].type === "file_redirect") b = [...b[0].children];
    return Ke(e.L, s, e.L.i), u(e, p ? "ERROR" : "command_substitution", t, h.endIndex, [f, ...b, h]);
  }
  if (n === "{") {
    i(e.L), i(e.L);
    let f = u(e, "${", t, e.L.b, []), d = In(e), L, b = false;
    while (c(e.L) === `
`) i(e.L);
    if (c(e.L) === "}") {
      let h = e.L.b;
      i(e.L), L = u(e, "}", h, e.L.b, []);
    } else {
      b = true, e.zshBraceDiff = true;
      let h = e.L.b, p = 1;
      while (e.L.i < e.L.len) {
        let m = c(e.L);
        if (m === "\\" && e.L.i + 1 < e.L.len) {
          i(e.L), i(e.L);
          continue;
        }
        if (m === '"' || m === "'") {
          if (C(e, m), e.L.i < e.L.len) i(e.L);
          continue;
        }
        if (m === "$" && c(e.L, 1) === "(") {
          let _ = 1;
          i(e.L), i(e.L);
          while (e.L.i < e.L.len && _ > 0) {
            let E = c(e.L);
            if (E === "\\" && e.L.i + 1 < e.L.len) i(e.L);
            else if (E === "$" && c(e.L, 1) === "$") i(e.L);
            else if (E === "$" && c(e.L, 1) === "'") C(e, "$'");
            else if (E === '"' || E === "'") C(e, E);
            else if (E === "`") {
              i(e.L);
              while (e.L.i < e.L.len && c(e.L) !== "`") {
                if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
                i(e.L);
              }
            } else if (E === "(") _++;
            else if (E === ")") _--;
            i(e.L);
          }
          continue;
        }
        if (m === "`") {
          i(e.L);
          while (e.L.i < e.L.len && c(e.L) !== "`") {
            if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
            i(e.L);
          }
          if (e.L.i < e.L.len) i(e.L);
          continue;
        }
        if (m === "$" && c(e.L, 1) === "$") {
          i(e.L), i(e.L);
          continue;
        }
        if (m === "$" && c(e.L, 1) === "'") {
          if (C(e, "$'"), e.L.i < e.L.len) i(e.L);
          continue;
        }
        if (m === "$" && c(e.L, 1) === "{") p++, i(e.L);
        else if (m === "}") {
          if (p--, p === 0) break;
        }
        i(e.L);
      }
      let I = u(e, "ERROR", h, e.L.b, []);
      if (c(e.L) === "}") {
        let m = e.L.b;
        i(e.L), L = u(e, "}", m, e.L.b, []);
      } else L = u(e, "ERROR", e.L.b, e.L.b, []);
      d.push(I);
    }
    if (!b && e.inDquote > 0 && U(e, f.endIndex, L.startIndex).includes("'")) b = true;
    if (!b && IUi(U(e, t, L.startIndex))) b = true;
    if (/\\\n|\$\[|\$\{[ \t\n|]/.test(U(e, f.endIndex, L.startIndex))) e.zshBraceDiff = true;
    return u(e, b || e.zshBraceDiff || e.dollarOperandDiff ? "ERROR" : "expansion", t, L.endIndex, [f, ...d, L]);
  }
  if (n === "'") {
    if (C(e, "$'"), c(e.L) === "'") i(e.L);
    return ye(e, t, e.L.b), u(e, "ansi_c_string", t, e.L.b, []);
  }
  i(e.L);
  let r = e.L.b, o = u(e, "$", t, r, []), a = c(e.L);
  if (a >= "\x80") {
    while (z(c(e.L)) || c(e.L) >= "\x80") i(e.L);
    return u(e, "ERROR", t, e.L.b, []);
  }
  if (a === "_" && !z(c(e.L, 1)) && c(e.L, 1) < "\x80") {
    let f = e.L.b;
    i(e.L);
    let d = u(e, "special_variable_name", f, e.L.b, []);
    return u(e, "simple_expansion", t, e.L.b, [o, d]);
  }
  if (M(a)) {
    let f = e.L.b;
    while (z(c(e.L))) i(e.L);
    if (c(e.L) >= "\x80") {
      while (z(c(e.L)) || c(e.L) >= "\x80") i(e.L);
      return u(e, "ERROR", t, e.L.b, []);
    }
    let d = u(e, "variable_name", f, e.L.b, []);
    return u(e, "simple_expansion", t, e.L.b, [o, d]);
  }
  let l = a === "#" && !$e.has(c(e.L, 1));
  if ($e.has(a) && !l) {
    let f = yt(e, e.L.i);
    if (f !== -1) {
      while (e.L.i < f) i(e.L);
      return u(e, "ERROR", t, e.L.b, []);
    }
  }
  if (D(a)) {
    let f = e.L.b;
    i(e.L);
    let d = u(e, "variable_name", f, e.L.b, []);
    return u(e, "simple_expansion", t, e.L.b, [o, d]);
  }
  if (ie.has(a)) {
    let f = e.L.b;
    i(e.L);
    let d = u(e, "special_variable_name", f, e.L.b, []);
    return u(e, "simple_expansion", t, e.L.b, [o, d]);
  }
  return o;
}
function In(e) {
  let s = [];
  x(e.L);
  {
    let o = c(e.L), a = c(e.L, 1);
    if (o === "#" && a === "!" && c(e.L, 2) === "}") return i(e.L), i(e.L), s;
    if (o === "!" && a === "#") {
      let l = 2;
      if (c(e.L, l) === "#") l++;
      if (c(e.L, l) === " ") l++;
      if (c(e.L, l) === "}") {
        while (l-- > 0) i(e.L);
        return s;
      }
    }
  }
  if (c(e.L) === "#") {
    let o = e.L.b;
    i(e.L), s.push(u(e, "#", o, e.L.b, []));
  }
  let n = c(e.L);
  if ((n === "!" || n === "=" || n === "~") && (M(c(e.L, 1)) || D(c(e.L, 1)))) {
    let o = e.L.b;
    i(e.L), s.push(u(e, n, o, e.L.b, []));
  }
  if (x(e.L), M(c(e.L))) {
    let o = e.L.b;
    while (z(c(e.L))) i(e.L);
    s.push(u(e, "variable_name", o, e.L.b, []));
  } else if (D(c(e.L))) {
    let o = e.L.b;
    while (D(c(e.L))) i(e.L);
    s.push(u(e, "variable_name", o, e.L.b, []));
  } else if (ie.has(c(e.L))) {
    let o = e.L.b;
    i(e.L), s.push(u(e, "special_variable_name", o, e.L.b, []));
  }
  if (c(e.L) === "[") {
    let o = s.at(-1), a = e.L.b;
    i(e.L);
    let l = u(e, "[", a, e.L.b, []), f = fn(e);
    x(e.L);
    let d = e.L.b;
    if (c(e.L) === "]") i(e.L);
    let L = u(e, "]", d, e.L.b, []);
    if (o) {
      let b = f ? [o, l, f, L] : [o, l, L], h = u(e, "subscript", o.startIndex, e.L.b, b);
      s.pop(), s.push(h);
    } else {
      let b = f ? [l, f, L] : [l, L];
      s.push(u(e, "ERROR", a, e.L.b, b));
    }
  }
  x(e.L);
  let t = c(e.L);
  if ((t === "*" || t === "@") && c(e.L, 1) === "}") {
    let o = e.L.b;
    return i(e.L), s.push(u(e, t, o, e.L.b, [])), s;
  }
  if (t === "@" && M(c(e.L, 1))) {
    let o = e.L.b;
    i(e.L), s.push(u(e, "@", o, e.L.b, []));
    while (z(c(e.L))) i(e.L);
    return s;
  }
  let r = c(e.L);
  if (r === ":") {
    let o = c(e.L, 1);
    if (o === "}") return i(e.L), s;
    if (o !== "-" && o !== "=" && o !== "?" && o !== "+") {
      i(e.L), x(e.L);
      let a = c(e.L), l;
      if (a === "-" && D(c(e.L, 1))) {
        let f = e.L.b;
        i(e.L);
        while (D(c(e.L))) i(e.L);
        l = u(e, "number", f, e.L.b, []);
      } else l = _e(e, ":}", "var");
      if (l) s.push(l);
      if (x(e.L), c(e.L) === ":") {
        i(e.L), x(e.L);
        let f = c(e.L), d;
        if (f === "-" && D(c(e.L, 1))) {
          let L = e.L.b;
          i(e.L);
          while (D(c(e.L))) i(e.L);
          d = u(e, "number", L, e.L.b, []);
        } else d = _e(e, "}", "var");
        if (d) s.push(d);
      }
      return s;
    }
  }
  if (r === ":" || r === "#" || r === "%" || r === "/" || r === "^" || r === "," || r === "-" || r === "=" || r === "?" || r === "+") {
    let o = e.L.b, a = c(e.L, 1), l = r;
    if (r === ":" && (a === "-" || a === "=" || a === "?" || a === "+")) i(e.L), i(e.L), l = r + a;
    else if ((r === "#" || r === "%" || r === "/" || r === "^" || r === ",") && a === r) i(e.L), i(e.L), l = r + r;
    else i(e.L);
    let f = s.at(-1)?.type, d = f === "variable_name" || f === "special_variable_name" && !(s[0]?.type === "#" && s[1]?.text === "#") || f === "subscript";
    s.push(u(e, l, o, e.L.b, []));
    let L = e.L.b, b = s.length, h = l === "#" || l === "##" || l === "%" || l === "%%" || l === "/" || l === "//" || l === "^" || l === "^^" || l === "," || l === ",,";
    if (l === "/" || l === "//") {
      let p = c(e.L);
      if (p === "#" || p === "%") {
        let m = e.L.b;
        i(e.L), s.push(u(e, p, m, e.L.b, []));
      }
      if (c(e.L) === '"') {
        s.push(Q(e));
        let m = Ee(e, "regex", true);
        if (m) s.push(m);
      } else {
        let m = Ee(e, "regex", true);
        if (m) s.push(m);
      }
      let I = e.L.b;
      if (se(e, L, I), c(e.L) === "/") {
        let m = e.L.b;
        i(e.L), s.push(u(e, "/", m, e.L.b, []));
        let _ = Ee(e, "replword", false);
        if ((We(e, L, e.L.b) || ke(e, L, e.L.b)) && (s[0]?.type === "#" || /^#?%?$|\[/.test(U(e, L, I)))) se(e, L, e.L.b);
        if (_) if (_.type === "concatenation" && _.children.length === 2 && _.children[0].type === "command_substitution") s.push(_.children[0]), s.push(_.children[1]);
        else s.push(_);
      }
    } else if (l === "#" || l === "##" || l === "%" || l === "%%") for (let p of Sn(e)) s.push(p);
    else {
      let p = Ee(e, h ? "regex" : "word", false);
      if (p) s.push(p);
    }
    if (l[0] !== "/" && (h || s[0]?.type === "#" || !d && (l === "+" || l === "="))) se(e, L, e.L.b);
    if (!d && V(e.quoteOrBackslashOffsets ??= Ie(e, /['\\]/g), L, e.L.b)) {
      let p = s.slice(b).reverse(), I = "", m = L;
      for (let _ = p.pop(); _; _ = p.pop()) if (e.operandsRead.has(_) || _.type === "command_substitution" && _.children[0]?.type === "$(") I += U(e, m, _.startIndex), m = _.endIndex;
      else p.push(..._.children.toReversed());
      for (let _ of s.slice(b)) e.operandsRead.add(_);
      if (/['\\]/.test(I + U(e, m, e.L.b)) && H(e, be)) e.zshBraceDiff = true;
    }
  }
  return s;
}
function ye(e, s, n, t = false) {
  let r = We(e, s, n) ? "dollar_quote_string" : t && ke(e, s, n) ? "quoted_code_in_subscript" : void 0;
  if (r && H(e, we)) e.misreading = r;
}
function se(e, s, n) {
  let t = ke(e, s, n) && V(e.bracketOffsets ??= Ie(e, /\[/g), s, n) && V(tt(e), s, n);
  ye(e, s, n, t);
}
function $t(e) {
  return We(e, e.L.b, e.srcBytes) || ke(e, e.L.b, e.srcBytes);
}
function We(e, s, n) {
  if (e.misreading !== void 0) return false;
  return e.dollarQuotes ??= Ie(e, /\$(?='(?!(?:\\[nrt]| )+'))/g), V(e.dollarQuotes, s, n);
}
function ke(e, s, n) {
  if (e.misreading !== void 0) return false;
  return e.quotedCode ??= Ie(e, /'[^'`]*?(?:`|\$\()/g), V(e.quotedCode, s, n);
}
function tt(e) {
  return e.quoteOffsets ??= Ie(e, /'/g);
}
function Ie(e, s) {
  return Array.from(e.src.matchAll(s), (n) => oe(e.L, n.index + n[0].length - 1));
}
function V(e, s, n) {
  let t = 0, r = e.length;
  while (t < r) {
    let o = t + r >>> 1;
    if (e[o] < s) t = o + 1;
    else r = o;
  }
  return t < e.length && e[t] < n;
}
function Ee(e, s, n) {
  let t = e.L.b;
  if (s === "word" && c(e.L) === "(") {
    i(e.L);
    let L = [u(e, "(", t, e.L.b, [])];
    while (e.L.i < e.L.len) {
      x(e.L);
      let b = c(e.L);
      if (b === ")" || b === "}" || b === `
` || b === "") break;
      let h = e.L.b;
      while (e.L.i < e.L.len) {
        let p = c(e.L);
        if (p === ")" || p === "}" || p === " " || p === "	" || p === `
` || p === "") break;
        if (p === "\\" && e.L.i + 1 < e.L.len) {
          i(e.L), i(e.L);
          continue;
        }
        if (p === "$" && c(e.L, 1) === "$") {
          i(e.L), i(e.L);
          continue;
        }
        if (p === "$" && c(e.L, 1) === "'") {
          if (C(e, "$'"), c(e.L) === "'") i(e.L);
          continue;
        }
        if (p === "$" && c(e.L, 1) === "(") e.zshBraceDiff = true;
        if (p === '"' || p === "'") {
          if (C(e, p), c(e.L) === p) i(e.L);
          continue;
        }
        if (p === "`") {
          e.zshBraceDiff = true, i(e.L);
          while (e.L.i < e.L.len && c(e.L) !== "`") {
            if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
            i(e.L);
          }
          if (c(e.L) === "`") i(e.L);
          continue;
        }
        if (p === "{") e.zshBraceDiff = true;
        i(e.L);
      }
      if (e.L.b > h) L.push(u(e, "word", h, e.L.b, []));
      else break;
    }
    if (c(e.L) === ")") {
      let b = e.L.b;
      i(e.L), L.push(u(e, ")", b, e.L.b, []));
    }
    while (c(e.L) === `
`) i(e.L);
    return u(e, "array", t, e.L.b, L);
  }
  if (s === "regex") {
    while (e.L.i < e.L.len) {
      let L = c(e.L);
      if (L === "{") e.zshBraceDiff = true;
      if (L === "}") break;
      if (n && L === "/") break;
      if (L === "\\" && e.L.i + 1 < e.L.len) {
        i(e.L), i(e.L);
        continue;
      }
      if (L === '"' || L === "'") {
        i(e.L);
        let b = H(e, le);
        while (e.L.i < e.L.len && c(e.L) !== L) {
          if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) {
            if (L === "'" && b && c(e.L, 1) === "'") e.zshBraceDiff = true;
            i(e.L);
          } else if (L === '"' && b && !e.zshBraceDiff) {
            if (c(e.L) === "`") e.zshBraceDiff = true;
            else if (c(e.L) === "$") {
              let h = 1;
              while (c(e.L, h) === "\\" && c(e.L, h + 1) === `
`) h += 2;
              let p = c(e.L, h);
              if (p === "{" || p === "(" || p === "[") e.zshBraceDiff = true;
            }
          }
          i(e.L);
        }
        if (c(e.L) === L) i(e.L);
        continue;
      }
      if (L === "`") {
        e.zshBraceDiff = true, i(e.L);
        while (e.L.i < e.L.len && c(e.L) !== "`") {
          if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
          i(e.L);
        }
        if (c(e.L) === "`") i(e.L);
        continue;
      }
      if (L === "$") {
        let b = c(e.L, 1);
        if (b === "$" && H(e, ue)) {
          let h = 2;
          while (c(e.L, h) === "$") h++;
          if (h % 2 === 0 && c(e.L, h) === "{") e.dollarOperandDiff = true;
          for (let p = 1; p < h; p++) i(e.L);
          continue;
        }
        if (b === "{") {
          let h = 0;
          i(e.L), i(e.L), h++;
          while (e.L.i < e.L.len && h > 0) {
            let p = c(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) i(e.L);
            else if (p === "$" && c(e.L, 1) === "$") i(e.L);
            else if (p === "$" && c(e.L, 1) === "'") C(e, "$'");
            else if (p === '"' || p === "'") C(e, p);
            else if (p === "`") {
              e.zshBraceDiff = true, i(e.L);
              while (e.L.i < e.L.len && c(e.L) !== "`") {
                if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
                i(e.L);
              }
            } else if (p === "$" && c(e.L, 1) === "{") h++, i(e.L);
            else if (p === "$" && c(e.L, 1) === "(") e.zshBraceDiff = true;
            else if (p === "{") e.zshBraceDiff = true;
            else if (p === "}") h--;
            i(e.L);
          }
          continue;
        }
        if (b === "(") {
          e.zshBraceDiff = true;
          let h = 0;
          i(e.L), i(e.L), h++;
          while (e.L.i < e.L.len && h > 0) {
            let p = c(e.L);
            if (p === "\\" && e.L.i + 1 < e.L.len) i(e.L);
            else if (p === "$" && c(e.L, 1) === "$") i(e.L);
            else if (p === "$" && c(e.L, 1) === "'") C(e, "$'");
            else if (p === '"' || p === "'") C(e, p);
            else if (p === "`") {
              i(e.L);
              while (e.L.i < e.L.len && c(e.L) !== "`") {
                if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
                i(e.L);
              }
            } else if (p === "(") h++;
            else if (p === ")") h--;
            i(e.L);
          }
          continue;
        }
      }
      i(e.L);
    }
    let d = e.L.b;
    if (d === t) return null;
    return u(e, "regex", t, d, []);
  }
  let r = [], o = e.L.b, a = Ot(e), l = e.L.b;
  while (e.L.i < e.L.len) {
    if (e.L.b === o) xe(e, r, a);
    let d = c(e.L);
    if (d === "}") break;
    if (d === "{") e.zshBraceDiff = true;
    if (n && d === "/") break;
    if (d === "\\" && e.L.i + 1 < e.L.len) {
      i(e.L), i(e.L);
      continue;
    }
    if (a) {
      if (d === " " || d === "	" || d === `
`) l = e.L.b + 1;
      else if (d === "]" || a.brackets > 0 || e.L.b > l) Ye(a, d);
    }
    let L = c(e.L, 1);
    if (d === "$") {
      if (L === "{" || L === "(" || L === "[") {
        j(e, r, o, a);
        let b = G(e);
        if (b) r.push(b);
        o = e.L.b;
        continue;
      }
      if (L === "'") {
        j(e, r, o, a);
        let b = e.L.b;
        if (C(e, "$'"), c(e.L) === "'") i(e.L);
        r.push(u(e, "ansi_c_string", b, e.L.b, [])), o = e.L.b;
        continue;
      }
      if (M(L) || D(L) || ie.has(L) || L >= "\x80") {
        j(e, r, o, a);
        let b = G(e);
        if (b) r.push(b);
        o = e.L.b;
        continue;
      }
      if (a) a.holdsDollar = true, a.afterExpansion = true;
    }
    if (d === '"') {
      j(e, r, o, a), r.push(Q(e)), o = e.L.b;
      continue;
    }
    if (d === "'") {
      j(e, r, o, a);
      let b = e.L.b;
      if (C(e, d), c(e.L) === "'") i(e.L);
      r.push(u(e, "raw_string", b, e.L.b, [])), o = e.L.b;
      continue;
    }
    if ((d === "<" || d === ">") && L === "(") {
      e.zshBraceDiff = true, j(e, r, o, a);
      let b = ze(e);
      if (b) r.push(b);
      o = e.L.b;
      continue;
    }
    if (d === "`") {
      j(e, r, o, a);
      let b = Fe(e);
      r.push(b), o = e.L.b;
      continue;
    }
    i(e.L);
  }
  if (j(e, r, o, a), r.length > 1 && r[0].type === "word" && /^[ \t]+$/.test(r[0].text)) r.shift();
  if (r.length === 0) return null;
  if (r.length === 1) return r[0];
  let f = r.at(-1);
  return u(e, "concatenation", r[0].startIndex, f.endIndex, r);
}
function j(e, s, n, t) {
  if (e.L.b > n) s.push(u(e, "word", n, e.L.b, [])), xe(e, s, t);
}
function Sn(e) {
  let s = [], n = e.L.b;
  while (e.L.i < e.L.len) {
    let t = c(e.L);
    if (t === "}") break;
    if (t === "{") e.zshBraceDiff = true;
    if (t === "\\" && e.L.i + 1 < e.L.len) {
      i(e.L), i(e.L);
      continue;
    }
    if (t === '"') {
      Ne(e, s, n), s.push(Q(e)), n = e.L.b;
      continue;
    }
    if (t === "'") {
      Ne(e, s, n);
      let r = e.L.b;
      i(e.L);
      while (e.L.i < e.L.len && c(e.L) !== "'") i(e.L);
      if (c(e.L) === "'") i(e.L);
      s.push(u(e, "raw_string", r, e.L.b, [])), n = e.L.b;
      continue;
    }
    if (t === "`") {
      e.zshBraceDiff = true, i(e.L);
      while (e.L.i < e.L.len && c(e.L) !== "`") {
        if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
        i(e.L);
      }
      if (c(e.L) === "`") i(e.L);
      continue;
    }
    if (t === "$") {
      let r = c(e.L, 1);
      if (r === "$") {
        i(e.L), i(e.L);
        continue;
      }
      if (r === "'") {
        Ne(e, s, n);
        let o = e.L.b;
        if (C(e, "$'"), c(e.L) === "'") i(e.L);
        s.push(u(e, "ansi_c_string", o, e.L.b, [])), n = e.L.b;
        continue;
      }
      if (r === "{") {
        let o = 1;
        i(e.L), i(e.L);
        while (e.L.i < e.L.len && o > 0) {
          let a = c(e.L);
          if (a === "\\" && e.L.i + 1 < e.L.len) i(e.L);
          else if (a === "$" && c(e.L, 1) === "$") i(e.L);
          else if (a === "$" && c(e.L, 1) === "'") C(e, "$'");
          else if (a === '"' || a === "'") C(e, a);
          else if (a === "`") {
            e.zshBraceDiff = true, i(e.L);
            while (e.L.i < e.L.len && c(e.L) !== "`") {
              if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
              i(e.L);
            }
          } else if (a === "$" && c(e.L, 1) === "{") o++, i(e.L);
          else if (a === "$" && c(e.L, 1) === "(") e.zshBraceDiff = true;
          else if (a === "{") e.zshBraceDiff = true;
          else if (a === "}") o--;
          i(e.L);
        }
        continue;
      }
      if (r === "(") {
        e.zshBraceDiff = true;
        let o = 1;
        i(e.L), i(e.L);
        while (e.L.i < e.L.len && o > 0) {
          let a = c(e.L);
          if (a === "\\" && e.L.i + 1 < e.L.len) i(e.L);
          else if (a === "$" && c(e.L, 1) === "$") i(e.L);
          else if (a === "$" && c(e.L, 1) === "'") C(e, "$'");
          else if (a === '"' || a === "'") C(e, a);
          else if (a === "`") {
            i(e.L);
            while (e.L.i < e.L.len && c(e.L) !== "`") {
              if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
              i(e.L);
            }
          } else if (a === "(") o++;
          else if (a === ")") o--;
          i(e.L);
        }
        continue;
      }
    }
    i(e.L);
  }
  return Ne(e, s, n), s;
}
function Ne(e, s, n) {
  if (e.L.b > n) s.push(u(e, "regex", n, e.L.b, []));
}
function Fe(e) {
  let s = e.L.b;
  i(e.L);
  let n = u(e, "`", s, e.L.b, []), t = e.L.i;
  {
    let d = false;
    while (t < e.L.len) {
      let L = e.L.src[t];
      if (L === "\\") {
        let b = e.L.src[t + 1];
        if (b === "`" || b === "$" || b === "\\" || b === '"' || b === `
`) d = true;
        t += 2;
        continue;
      }
      if (L === "`") break;
      t++;
    }
    if (d) {
      let L = e.L.b;
      while (e.L.i < t) i(e.L);
      let b = u(e, "backtick_escape_unsupported", L, e.L.b, []);
      e.zshMathDiff ||= import_chunk_49rkmh8j.rhn.test(b.text) && J(e);
      let h;
      if (c(e.L) === "`") {
        let p = e.L.b;
        i(e.L), h = u(e, "`", p, e.L.b, []);
      } else h = u(e, "`", e.L.b, e.L.b, []);
      return u(e, "command_substitution", s, h.endIndex, [n, b, h]);
    }
  }
  e.inBacktick++;
  let r = e.inDquote;
  e.inDquote = 0;
  let o = S(e.L), a = e.L.heredocs;
  e.L.heredocs = [];
  let l = [];
  while (true) {
    if (x(e.L), c(e.L) === "`" || c(e.L) === "") break;
    let d = S(e.L), L = k(e.L, "cmd");
    if (L.type === "EOF" || L.type === "BACKTICK") {
      y(e.L, d);
      break;
    }
    if (L.type === "NEWLINE") continue;
    y(e.L, d);
    let b = kt(e);
    if (!b) break;
    if (l.push(b), x(e.L), c(e.L) === "`") break;
    let h = S(e.L), p = k(e.L, "cmd");
    if (p.type === "OP" && (p.value === ";" || p.value === "&")) l.push(g(e, p.value, p));
    else if (p.type !== "NEWLINE") y(e.L, h);
  }
  if (e.L.heredocs = a, e.inBacktick--, e.inDquote = r, e.L.i !== t) {
    y(e.L, o);
    while (e.L.i < t) i(e.L);
    l.length = 0;
    let d = u(e, "backtick_body_overrun", n.endIndex, e.L.b, []);
    e.zshMathDiff ||= import_chunk_49rkmh8j.rhn.test(d.text) && J(e), l.push(d);
  }
  let f;
  if (c(e.L) === "`") {
    let d = e.L.b;
    i(e.L), f = u(e, "`", d, e.L.b, []);
  } else f = u(e, "`", e.L.b, e.L.b, []);
  if (l.length === 0) l.push(u(e, "backtick_body_empty", n.endIndex, e.L.b, []));
  return u(e, "command_substitution", s, f.endIndex, [n, ...l, f]);
}
function vn(e, s) {
  e.sawIfOrLoop = true;
  let n = g(e, "if", s), t = [n], r = B(e, null);
  t.push(...r), me(e, "then", t);
  let o = B(e, null);
  t.push(...o);
  while (true) {
    let l = S(e.L), f = k(e.L, "cmd");
    if (f.type === "WORD" && f.value === "elif") {
      let d = g(e, "elif", f), L = B(e, null), b = [d, ...L];
      me(e, "then", b);
      let h = B(e, null);
      b.push(...h);
      let p = b.at(-1);
      t.push(u(e, "elif_clause", d.startIndex, p.endIndex, b));
    } else if (f.type === "WORD" && f.value === "else") {
      let d = g(e, "else", f), L = B(e, null), b = L.length > 0 ? L.at(-1) : d;
      t.push(u(e, "else_clause", d.startIndex, b.endIndex, [d, ...L]));
    } else {
      y(e.L, l);
      break;
    }
  }
  me(e, "fi", t);
  let a = t.at(-1);
  return u(e, "if_statement", n.startIndex, a.endIndex, t);
}
function wn(e, s) {
  e.sawIfOrLoop = true;
  let n = g(e, s.value, s), t = [n], r = B(e, null);
  t.push(...r);
  let o = Je(e);
  if (o) t.push(o);
  let a = t.at(-1);
  return u(e, "while_statement", n.startIndex, a.endIndex, t);
}
function ft(e, s) {
  let n = g(e, s.value, s);
  if (x(e.L), s.value === "for" && c(e.L) === "(" && c(e.L, 1) === "(") {
    let b = e.L.b;
    i(e.L), i(e.L);
    let h = u(e, "((", b, e.L.b, []), p = [n, h], I = e.inForHead;
    for (let v = 0; v < 3; v++) {
      let O = e.L.i;
      e.inForHead = v < 2, x(e.L);
      let T = ge(e, v < 2 ? ";" : "))", "assign");
      p.push(...T), x(e.L);
      let N = v < 2 ? ";" : ")", w = Ce(e, O, N, v === 2);
      if (!(v < 2 ? c(e.L) === ";" : c(e.L) === ")" && c(e.L, 1) === ")") && Mt(e, w, v === 2)) p.push(u(e, "ERROR", e.L.b, e.L.b, []));
      if (v < 2) {
        if (c(e.L) === ";") {
          let q = e.L.b;
          i(e.L), p.push(u(e, ";", q, e.L.b, []));
        }
      }
    }
    if (e.inForHead = I, x(e.L), c(e.L) === ")" && c(e.L, 1) === ")") {
      let v = e.L.b;
      i(e.L), i(e.L), p.push(u(e, "))", v, e.L.b, []));
    } else p.push(u(e, "))", e.L.b, e.L.b, []));
    let m = S(e.L), _ = k(e.L, "cmd");
    if (_.type === "OP" && _.value === ";") p.push(g(e, ";", _));
    else if (_.type !== "NEWLINE") y(e.L, m);
    let E = Je(e);
    if (E) p.push(E);
    else if (Z(e), x(e.L), c(e.L) === "{") {
      let v = e.L.b;
      i(e.L);
      let O = u(e, "{", v, e.L.b, []), T = B(e, "}"), N;
      if (c(e.L) === "}") {
        let w = e.L.b;
        i(e.L), N = u(e, "}", w, e.L.b, []);
      } else N = u(e, "}", e.L.b, e.L.b, []);
      p.push(u(e, "compound_statement", O.startIndex, N.endIndex, [O, ...T, N]));
    }
    let R = p.at(-1);
    return u(e, "c_style_for_statement", n.startIndex, R.endIndex, p);
  }
  let t = [n], r = k(e.L, "arg");
  if (r.type === "WORD" && M(r.value[0] ?? "") && [...r.value].every(z)) t.push(u(e, "variable_name", r.start, r.end, []));
  else t.push(u(e, "ERROR", r.start, r.end, []));
  x(e.L);
  let o = S(e.L), a = k(e.L, "arg");
  if (a.type === "WORD" && a.value === "in") {
    t.push(g(e, "in", a));
    let b;
    while (true) {
      x(e.L);
      let h = c(e.L);
      if (h === ";" || h === `
` || h === "") break;
      if (h === "#") b ??= e.L.src.indexOf(`
`, e.L.i);
      let p = W(e, "arg");
      if (!p) break;
      t.push(p);
    }
    if (b !== void 0 && e.L.i !== b) e.misreading ??= "hash_in_for_list";
  } else y(e.L, o);
  let l = S(e.L), f = k(e.L, "cmd");
  if (f.type === "OP" && f.value === ";") t.push(g(e, ";", f));
  else if (f.type !== "NEWLINE") y(e.L, l);
  let d = Je(e);
  if (d) t.push(d);
  let L = t.at(-1);
  return u(e, "for_statement", n.startIndex, L.endIndex, t);
}
function Je(e) {
  Z(e);
  let s = S(e.L), n = k(e.L, "cmd");
  if (n.type !== "WORD" || n.value !== "do") return y(e.L, s), null;
  let t = g(e, "do", n), r = B(e, null), o = [t, ...r];
  me(e, "done", o);
  let a = o.at(-1);
  return u(e, "do_group", t.startIndex, a.endIndex, o);
}
function Rn(e, s) {
  let n = g(e, "case", s), t = [n];
  x(e.L);
  let r = W(e, "arg");
  if (r) t.push(r);
  x(e.L), me(e, "in", t), Z(e);
  while (true) {
    x(e.L), Z(e);
    let a = S(e.L), l = k(e.L, "arg");
    if (l.type === "WORD" && l.value === "esac") {
      t.push(g(e, "esac", l));
      break;
    }
    if (l.type === "EOF") break;
    y(e.L, a);
    let f = En(e);
    if (!f) break;
    t.push(f);
  }
  let o = t.at(-1);
  return u(e, "case_statement", n.startIndex, o.endIndex, t);
}
function En(e) {
  x(e.L);
  let s = e.L.b, n = [];
  if (c(e.L) === "(") {
    let f = e.L.b;
    i(e.L), n.push(u(e, "(", f, e.L.b, []));
  }
  let t = true;
  while (true) {
    x(e.L);
    let f = c(e.L);
    if (f === ")" || f === "") break;
    let d = Nn(e);
    if (d.length === 0) break;
    if (!t && d.length > 1) {
      let L = d.map((p) => p.type === "extglob_pattern" ? u(e, "word", p.startIndex, p.endIndex, []) : p), b = L[0], h = L.at(-1);
      n.push(u(e, "concatenation", b.startIndex, h.endIndex, L));
    } else n.push(...d);
    if (t = false, x(e.L), c(e.L) === "\\" && c(e.L, 1) === `
`) i(e.L), i(e.L), x(e.L);
    if (c(e.L) === "|") {
      let L = e.L.b;
      if (i(e.L), n.push(u(e, "|", L, e.L.b, [])), c(e.L) === "\\" && c(e.L, 1) === `
`) i(e.L), i(e.L);
    } else break;
  }
  if (c(e.L) === ")") {
    let f = e.L.b;
    i(e.L), n.push(u(e, ")", f, e.L.b, []));
  }
  let r = B(e, null);
  n.push(...r);
  let o = S(e.L), a = k(e.L, "cmd");
  if (a.type === "OP" && (a.value === ";;" || a.value === ";&" || a.value === ";;&")) n.push(g(e, a.value, a));
  else y(e.L, o);
  if (n.length === 0) return null;
  if (r.length === 0) for (let f = 0; f < n.length; f++) {
    let d = n[f];
    if (d.type !== "extglob_pattern") continue;
    let L = U(e, d.startIndex, d.endIndex);
    if (/^[-+?*@!][a-zA-Z]/.test(L) && !/[*?(]/.test(L)) n[f] = u(e, "word", d.startIndex, d.endIndex, []);
  }
  let l = n.at(-1);
  return u(e, "case_item", s, l.endIndex, n);
}
function Nn(e) {
  x(e.L);
  let s = S(e.L), n = e.L.b, t = e.L.i, r = 0, o = false, a = false, l = false;
  while (e.L.i < e.L.len) {
    let b = c(e.L);
    if (b === "\\" && e.L.i + 1 < e.L.len) {
      i(e.L), i(e.L);
      continue;
    }
    if (b === "$" && c(e.L, 1) === "$") {
      o = true, i(e.L), i(e.L);
      continue;
    }
    let h = b === "$" && c(e.L, 1) === "'";
    if (b === '"' || b === "'" || h) {
      l = true;
      let p = h ? "'" : b;
      if (h) i(e.L);
      i(e.L);
      while (e.L.i < e.L.len && c(e.L) !== p) {
        if (b !== "'" && c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
        i(e.L);
      }
      if (c(e.L) === p) i(e.L);
      continue;
    }
    if (b === "(") {
      r++, i(e.L);
      continue;
    }
    if (r > 0) {
      if (b === ")") {
        r--, i(e.L);
        continue;
      }
      if (b === `
`) break;
      i(e.L);
      continue;
    }
    if (b === ")" || b === "|" || b === " " || b === "	" || b === `
`) break;
    if (b === "$") o = true;
    if (b === "[") a = true;
    i(e.L);
  }
  if (e.L.b === n) return [];
  let f = e.src.slice(t, e.L.i), d = /[*?+@!]\(/.test(f);
  if (l && !d) return y(e.L, s), On(e);
  if (!d && (o || a)) {
    y(e.L, s);
    let b = W(e, "arg");
    return b ? [b] : [];
  }
  let L = d || /[*?]/.test(f) || /^[-+?*@!][a-zA-Z]/.test(f) ? "extglob_pattern" : "word";
  return Te(e, n), [u(e, L, n, e.L.b, [])];
}
function On(e) {
  let s = [], n = e.L.b, t = e.L.b, r = e.L.i;
  while (e.L.i < e.L.len) {
    let o = c(e.L);
    if (o === "\\" && e.L.i + 1 < e.L.len) {
      i(e.L), i(e.L);
      continue;
    }
    if (o === '"') {
      Oe(e, s, t, r), s.push(Q(e)), t = e.L.b, r = e.L.i;
      continue;
    }
    if (o === "'") {
      Oe(e, s, t, r);
      let a = k(e.L, "arg");
      s.push(g(e, "raw_string", a)), t = e.L.b, r = e.L.i;
      continue;
    }
    if (o === "$" && c(e.L, 1) === "$") {
      i(e.L), i(e.L);
      continue;
    }
    if (o === "$" && c(e.L, 1) === "'") {
      Oe(e, s, t, r);
      let a = k(e.L, "arg");
      s.push(g(e, "ansi_c_string", a)), t = e.L.b, r = e.L.i;
      continue;
    }
    if (o === ")" || o === "|" || o === " " || o === "	" || o === `
`) break;
    i(e.L);
  }
  return Oe(e, s, t, r), Te(e, n), s;
}
function Oe(e, s, n, t) {
  if (e.L.i > t) {
    let r = e.src.slice(t, e.L.i), o = /[*?]/.test(r) ? "extglob_pattern" : "word";
    s.push(u(e, o, n, e.L.b, []));
  }
}
function Dn(e, s) {
  let n = g(e, "function", s);
  x(e.L);
  let t = k(e.L, "arg"), r = u(e, "word", t.start, t.end, []), o = [n, r];
  if (x(e.L), c(e.L) === "(" && c(e.L, 1) === ")") {
    let f = k(e.L, "cmd");
    o.push(g(e, "(", f));
    let d = e.L.b;
    i(e.L), o.push(u(e, ")", d, e.L.b, []));
  }
  x(e.L), Z(e);
  let a = Y(e);
  if (a) if (a.type === "redirected_statement" && a.children.length >= 2 && a.children[0].type === "compound_statement") o.push(...a.children);
  else o.push(a);
  let l = o.at(-1);
  return u(e, "function_definition", n.startIndex, l.endIndex, o);
}
function An(e, s) {
  let n = g(e, s.value, s), t = [n], r = [];
  while (true) {
    x(e.L);
    let d = re(e);
    if (d) {
      r.push(d);
      continue;
    }
    let L = c(e.L);
    if (L === "(") {
      t.push(u(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (L === "" || L === `
` || L === ";" || L === "&" || L === "|" || L === ")" || L === "<" || L === ">") break;
    let b = Et(e);
    if (b) {
      t.push(b);
      continue;
    }
    if (L === '"' || L === "'" || L === "$") {
      let I = W(e, "arg");
      if (I) {
        t.push(I);
        continue;
      }
      break;
    }
    let h = S(e.L), p = k(e.L, "arg");
    if (p.type === "WORD" || p.type === "NUMBER") if (p.value.startsWith("-")) t.push(g(e, "word", p));
    else if (M(p.value[0] ?? "")) t.push(u(e, "variable_name", p.start, p.end, []));
    else t.push(g(e, "word", p));
    else {
      y(e.L, h);
      break;
    }
  }
  let o = t.at(-1), a = u(e, "declaration_command", n.startIndex, o.endIndex, t);
  if (r.length === 0) return a;
  let l = r.at(-1), f = Math.max(a.endIndex, l.endIndex);
  return u(e, "redirected_statement", n.startIndex, f, [a, ...r]);
}
function $n(e, s) {
  let n = g(e, "unset", s), t = [n], r = [];
  while (true) {
    x(e.L);
    let d = re(e);
    if (d) {
      r.push(d);
      continue;
    }
    let L = c(e.L);
    if (L === "(") {
      t.push(u(e, "variable_name", e.L.b, e.L.b + 1, []));
      break;
    }
    if (L === "" || L === `
` || L === ";" || L === "&" || L === "|" || L === ")" || L === "<" || L === ">") break;
    let b = W(e, "arg");
    if (!b) break;
    if (b.type === "word") if (b.text.startsWith("-")) t.push(b);
    else t.push(u(e, "variable_name", b.startIndex, b.endIndex, []));
    else t.push(b);
  }
  let o = t.at(-1), a = u(e, "unset_command", n.startIndex, o.endIndex, t);
  if (r.length === 0) return a;
  let l = r.at(-1), f = Math.max(a.endIndex, l.endIndex);
  return u(e, "redirected_statement", n.startIndex, f, [a, ...r]);
}
function me(e, s, n) {
  Z(e);
  let t = S(e.L), r = k(e.L, "cmd");
  if (r.type === "WORD" && r.value === s) n.push(g(e, s, r));
  else y(e.L, t);
}
function Lt(e, s) {
  return nt(e, s);
}
function nt(e, s) {
  let n = bt(e, s);
  if (!n) return null;
  while (true) {
    x(e.L);
    let t = S(e.L);
    if (s === "]]" && c(e.L) === "|" && c(e.L, 1) === "|") {
      let r = e.L.b;
      i(e.L), i(e.L);
      let o = u(e, "||", r, e.L.b, []);
      Ue(e, s);
      let a = bt(e, s);
      if (!a) {
        y(e.L, t);
        break;
      }
      n = u(e, "binary_expression", n.startIndex, a.endIndex, [n, o, a]);
    } else break;
  }
  return n;
}
function bt(e, s) {
  let n = pt(e, s);
  if (!n) return null;
  while (true) {
    x(e.L);
    let t = S(e.L);
    if (s === "]]" && c(e.L) === "&" && c(e.L, 1) === "&") {
      let r = e.L.b;
      i(e.L), i(e.L);
      let o = u(e, "&&", r, e.L.b, []);
      Ue(e, s);
      let a = pt(e, s);
      if (!a) {
        y(e.L, t);
        break;
      }
      n = u(e, "binary_expression", n.startIndex, a.endIndex, [n, o, a]);
    } else break;
  }
  return n;
}
function Ue(e, s) {
  if (x(e.L), s === "]]") while (true) {
    let n = c(e.L);
    if (n === `
`) i(e.L), x(e.L);
    else if (n === "#") while (c(e.L) && c(e.L) !== `
`) i(e.L);
    else break;
  }
}
function pt(e, s) {
  if (Ue(e, s), c(e.L) === "(") {
    let t = e.L.b;
    i(e.L);
    let r = u(e, "(", t, e.L.b, []), o = nt(e, s);
    x(e.L);
    let a;
    if (c(e.L) === ")") {
      let f = e.L.b;
      i(e.L), a = u(e, ")", f, e.L.b, []);
    } else a = u(e, ")", e.L.b, e.L.b, []);
    let l = o ? [r, o, a] : [r, a];
    return u(e, "parenthesized_expression", r.startIndex, a.endIndex, l);
  }
  return Cn(e, s);
}
function Ct(e, s) {
  Ue(e, s);
  let n = c(e.L), t = (r) => r === " " || r === "	" || r === `
` || r === "";
  if (n === "!" && (t(c(e.L, 1)) || c(e.L, 1) === "(")) {
    let r = e.L.b;
    i(e.L);
    let o = u(e, "!", r, e.L.b, []), a = Ct(e, s);
    if (!a) return o;
    return u(e, "unary_expression", o.startIndex, a.endIndex, [o, a]);
  }
  if (n === "(") {
    let r = e.L.b;
    i(e.L);
    let o = u(e, "(", r, e.L.b, []), a = nt(e, s);
    x(e.L);
    let l;
    if (c(e.L) === ")") {
      let d = e.L.b;
      i(e.L), l = u(e, ")", d, e.L.b, []);
    } else l = u(e, ")", e.L.b, e.L.b, []);
    let f = a ? [o, a, l] : [o, l];
    return u(e, "parenthesized_expression", o.startIndex, l.endIndex, f);
  }
  if (n === "-" && M(c(e.L, 1))) {
    let r = S(e.L), o = e.L.b;
    i(e.L);
    while (z(c(e.L))) i(e.L);
    if (!t(c(e.L))) return y(e.L, r), Ae(e, s);
    let a = u(e, "test_operator", o, e.L.b, []), l = e.L.i;
    x(e.L);
    let f = Ae(e, s);
    if (!f) {
      let d = e.src.slice(l, e.L.i);
      if (!/^(?:[ \t]|\\\n)*$/.test(d)) {
        let L = u(e, "test_rhs_missing", a.endIndex, e.L.b, []);
        return u(e, "unary_expression", a.startIndex, e.L.b, [a, L]);
      }
      return a;
    }
    return u(e, "unary_expression", a.startIndex, f.endIndex, [a, f]);
  }
  return Ae(e, s);
}
function De(e, s, n) {
  let t = u(e, "test_rhs_missing", n.endIndex, e.L.b, []);
  return u(e, "binary_expression", s.startIndex, e.L.b, [s, n, t]);
}
function Cn(e, s) {
  x(e.L);
  let n = Ct(e, s);
  if (!n) return null;
  x(e.L);
  let t = c(e.L), r = c(e.L, 1), o = null, a = e.L.b;
  if (t === "=" && r === "=") i(e.L), i(e.L), o = u(e, "==", a, e.L.b, []);
  else if (t === "!" && r === "=") i(e.L), i(e.L), o = u(e, "!=", a, e.L.b, []);
  else if (t === "=" && r === "~") i(e.L), i(e.L), o = u(e, "=~", a, e.L.b, []);
  else if (t === "=" && r !== "=") i(e.L), o = u(e, "=", a, e.L.b, []);
  else if (s === "]]" && t === "<" && r !== "<") i(e.L), o = u(e, "<", a, e.L.b, []);
  else if (s === "]]" && t === ">" && r !== ">") i(e.L), o = u(e, ">", a, e.L.b, []);
  else if (t === "-" && M(r)) {
    i(e.L);
    while (z(c(e.L))) i(e.L);
    o = u(e, "test_operator", a, e.L.b, []);
  }
  if (!o) return n;
  if (s === "]]" && o.type === "=" && ![" ", "	", `
`, ""].includes(c(e.L))) e.misreading ??= "equals_in_test";
  if (zt(e), s === "]]") {
    let f = o.type;
    if (f === "=~") {
      x(e.L);
      let d = c(e.L), L = null;
      if (d === '"' || d === "'") {
        let b = S(e.L), h = d === '"' ? Q(e) : g(e, "raw_string", k(e.L, "arg")), p = e.L.i, I = p;
        while (I < e.L.len && (e.src[I] === " " || e.src[I] === "	")) I++;
        let m = e.src[I] ?? "", _ = I + 1;
        while (e.src[_] === "\\") if (e.src[_ + 1] === `
`) _ += 2;
        else if (e.src[_ + 1] === "\r" && e.src[_ + 2] === `
`) _ += 3;
        else break;
        let E = e.src[_] ?? "";
        if (m === "]" && E === "]" && I > p || m === "&" && E === "&" || m === "|" && E === "|" && I > p || m === `
` || m === "") L = h;
        else y(e.L, b);
      }
      if (!L) L = ht(e, true);
      if (!L) return De(e, n, o);
      return u(e, "binary_expression", n.startIndex, L.endIndex, [n, o, L]);
    }
    if (f === "=") {
      let d = ht(e, false);
      if (!d) return De(e, n, o);
      return u(e, "binary_expression", n.startIndex, d.endIndex, [n, o, d]);
    }
    if (f === "==" || f === "!=") {
      let d = Bn(e);
      if (d.length === 0) return De(e, n, o);
      let L = d.at(-1);
      return u(e, "binary_expression", n.startIndex, L.endIndex, [n, o, ...d]);
    }
  }
  let l = Ae(e, s);
  if (!l) return De(e, n, o);
  return u(e, "binary_expression", n.startIndex, l.endIndex, [n, o, l]);
}
function ht(e, s) {
  x(e.L);
  let n = e.L.b, t = 0;
  while (e.L.i < e.L.len) {
    let r = c(e.L);
    if (r === "\\" && e.L.i + 1 < e.L.len) {
      i(e.L), i(e.L);
      continue;
    }
    if (r === `
`) {
      if (t === 0) break;
      i(e.L);
      continue;
    }
    if (r === '"' || r === "'") {
      let o = r;
      i(e.L);
      while (e.L.i < e.L.len && c(e.L) !== o) {
        if (o === '"' && c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
        i(e.L);
      }
      if (e.L.i < e.L.len) i(e.L);
      continue;
    }
    if (r === "`") {
      i(e.L);
      while (e.L.i < e.L.len && c(e.L) !== "`") {
        if (c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
        i(e.L);
      }
      if (e.L.i < e.L.len) i(e.L);
      continue;
    }
    if (t === 0) {
      if (r === " " || r === "	") break;
      if (r === "&" || !s && r === "|") break;
      if (r === ")") break;
    }
    if (r === "(") t++;
    else if (r === ")" && t > 0) t--;
    i(e.L);
  }
  if (e.L.b === n) return null;
  return Te(e, n), u(e, "regex", n, e.L.b, []);
}
var Mn = /* @__PURE__ */ new Set(["raw_string", "ansi_c_string", "comment", "subscript"]);
function Bn(e) {
  x(e.L);
  let s = [], n = e.L.b, t = e.L.b, r = e.L.i, o = 0;
  while (e.L.i < e.L.len) {
    let a = c(e.L);
    if (a === "\\" && e.L.i + 1 < e.L.len) {
      i(e.L), i(e.L);
      continue;
    }
    if (a === `
`) {
      if (o === 0) break;
      i(e.L);
      continue;
    }
    if (o === 0) {
      if (a === "&" || a === "|") break;
      if (a === " " || a === "	") {
        let l = e.L.i;
        for (; ; ) {
          let b = e.L.src[l];
          if (b === " " || b === "	") l++;
          else if (b === "\\" && e.L.src[l + 1] === `
`) l += 2;
          else if (b === "\\" && e.L.src[l + 1] === "\r" && e.L.src[l + 2] === `
`) l += 3;
          else break;
        }
        let f = e.L.src[l] ?? "", d = l + 1;
        while (e.L.src[d] === "\\") if (e.L.src[d + 1] === `
`) d += 2;
        else if (e.L.src[d + 1] === "\r" && e.L.src[d + 2] === `
`) d += 3;
        else break;
        let L = e.L.src[d] ?? "";
        if (f === "]" && L === "]" || f === "&" && L === "&" || f === "|" && L === "|" || f === "#" || f === `
`) break;
        i(e.L);
        continue;
      }
    }
    if (a === "$") {
      let l = c(e.L, 1);
      if (l === "'") {
        X(e, s, t, r);
        let f = k(e.L, "arg");
        s.push(g(e, "ansi_c_string", f)), t = e.L.b, r = e.L.i;
        continue;
      }
      if (l === '"') {
        X(e, s, t, r);
        let f = { type: "DOLLAR", value: "$", start: e.L.b, end: e.L.b + 1 };
        i(e.L), s.push(g(e, "$", f)), s.push(Q(e)), t = e.L.b, r = e.L.i;
        continue;
      }
      if (l === "(" || l === "{" || l === "[" && J(e) || M(l) || ie.has(l) || l >= "\x80") {
        X(e, s, t, r);
        let f = G(e);
        if (f) s.push(f);
        t = e.L.b, r = e.L.i;
        continue;
      }
    }
    if (a === '"') {
      X(e, s, t, r), s.push(Q(e)), t = e.L.b, r = e.L.i;
      continue;
    }
    if (a === "'") {
      X(e, s, t, r);
      let l = k(e.L, "arg");
      s.push(g(e, "raw_string", l)), t = e.L.b, r = e.L.i;
      continue;
    }
    if (a === "`") {
      X(e, s, t, r);
      let l = Fe(e);
      s.push(l), t = e.L.b, r = e.L.i;
      continue;
    }
    if ((a === "<" || a === ">") && c(e.L, 1) === "(") {
      X(e, s, t, r);
      let l = ze(e);
      if (l) s.push(l);
      t = e.L.b, r = e.L.i;
      continue;
    }
    if (a === ")" && o === 0) break;
    if (a === "(") o++;
    else if (a === ")" && o > 0) o--;
    i(e.L);
  }
  return X(e, s, t, r), se(e, n, e.L.b), s;
}
function X(e, s, n, t) {
  if (e.L.i > t) {
    let r = e.src.slice(t, e.L.i), o = /^\d+$/.test(r) ? "number" : "extglob_pattern";
    s.push(u(e, o, n, e.L.b, []));
  }
}
function Ae(e, s) {
  if (zt(e), s === "]" && c(e.L) === "]" && Ge(c(e.L, 1) ?? "")) return null;
  if (s === "]]" && c(e.L) === "]" && c(e.L, 1) === "]" && Ge(c(e.L, 2) ?? "")) return null;
  return W(e, "arg");
}
var zn = /* @__PURE__ */ new Map([["=", 2], ["+=", 2], ["-=", 2], ["*=", 2], ["/=", 2], ["%=", 2], ["<<=", 2], [">>=", 2], ["&=", 2], ["^=", 2], ["|=", 2], ["||", 4], ["&&", 5], ["|", 6], ["^", 7], ["&", 8], ["==", 9], ["!=", 9], ["<", 10], [">", 10], ["<=", 10], [">=", 10], ["<<", 11], [">>", 11], ["+", 12], ["-", 12], ["*", 13], ["/", 13], ["%", 13], ["**", 14]]), Wn = /* @__PURE__ */ new Set(["=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", "&=", "^=", "|=", "**"]);
function xt(e, s, n) {
  y(e.L, s);
  let t = 0;
  while (e.L.i < e.L.len) {
    let r = c(e.L);
    if (n === "))" || n === ")") {
      if (r === "(") t++;
      else if (r === ")") if (t === 0) {
        if (n === ")" || c(e.L, 1) === ")") return;
      } else t--;
    } else if (n === "]") {
      if (r === "[") t++;
      else if (r === "]") {
        if (t === 0) return;
        t--;
      }
    } else if (Se(e, n)) return;
    i(e.L);
  }
}
var Fn = /^(?!.*<<)(?:[\w\s$+\-*/%<>=!&|^~?:,.()[\];]|\$\{#?\w+\})*$/s;
function J(e) {
  return H(e, Le);
}
function Ce(e, s, n, t) {
  if (!J(e)) return -1;
  let r = e.L, o = He(r.src, s, n, r.dollarEnds, e.inForHead), a = c(r) === n && (!t || c(r, 1) === ")"), l = o < r.i || a && o !== r.i || t && r.src[o + 1] !== ")" || !Fn.test(r.src.slice(r.i, o)) || !a && /["']/.test(r.src.slice(s, o));
  return e.zshMathDiff ||= l, e.zshMathClosesAlike = !l, o;
}
function Mt(e, s, n) {
  if (!(e.zshMathClosesAlike || H(e, ve)) || s < e.L.i || n && e.L.src[s + 1] !== ")") return false;
  while (e.L.i < s) i(e.L);
  return true;
}
function mt(e, s) {
  if (e.L.i !== s && J(e)) e.zshMathDiff = true;
}
function _e(e, s, n = "var") {
  e.inDquote++;
  let t = Me(e, s, n);
  return e.inDquote--, t;
}
function ge(e, s, n = "var") {
  let t = [];
  while (true) {
    let r = _e(e, s, n);
    if (r) t.push(r);
    if (x(e.L), c(e.L) === "," && !Se(e, s)) {
      i(e.L);
      continue;
    }
    break;
  }
  return t;
}
function Me(e, s, n) {
  let t = Pe(e, s, 0, n);
  if (!t) return null;
  if (x(e.L), c(e.L) === "?") {
    let r = e.L.b;
    i(e.L);
    let o = u(e, "?", r, e.L.b, []), a = Pe(e, ":", 0, n);
    x(e.L);
    let l;
    if (c(e.L) === ":") {
      let b = e.L.b;
      i(e.L), l = u(e, ":", b, e.L.b, []);
    } else l = u(e, ":", e.L.b, e.L.b, []);
    let f = Me(e, s, n), d = f ?? l, L = [t, o];
    if (a) L.push(a);
    if (L.push(l), f) L.push(f);
    return u(e, "ternary_expression", t.startIndex, d.endIndex, L);
  }
  return t;
}
function Un(e) {
  let s = c(e.L), n = c(e.L, 1), t = c(e.L, 2);
  if (s === "<" && n === "<" && t === "=") return ["<<=", 3];
  if (s === ">" && n === ">" && t === "=") return [">>=", 3];
  if (s === "*" && n === "*") return ["**", 2];
  if (s === "<" && n === "<") return ["<<", 2];
  if (s === ">" && n === ">") return [">>", 2];
  if (s === "=" && n === "=") return ["==", 2];
  if (s === "!" && n === "=") return ["!=", 2];
  if (s === "<" && n === "=") return ["<=", 2];
  if (s === ">" && n === "=") return [">=", 2];
  if (s === "&" && n === "&") return ["&&", 2];
  if (s === "|" && n === "|") return ["||", 2];
  if (s === "+" && n === "=") return ["+=", 2];
  if (s === "-" && n === "=") return ["-=", 2];
  if (s === "*" && n === "=") return ["*=", 2];
  if (s === "/" && n === "=") return ["/=", 2];
  if (s === "%" && n === "=") return ["%=", 2];
  if (s === "&" && n === "=") return ["&=", 2];
  if (s === "^" && n === "=") return ["^=", 2];
  if (s === "|" && n === "=") return ["|=", 2];
  if (s === "+" && n !== "+") return ["+", 1];
  if (s === "-" && n !== "-") return ["-", 1];
  if (s === "*") return ["*", 1];
  if (s === "/") return ["/", 1];
  if (s === "%") return ["%", 1];
  if (s === "<") return ["<", 1];
  if (s === ">") return [">", 1];
  if (s === "&") return ["&", 1];
  if (s === "|") return ["|", 1];
  if (s === "^") return ["^", 1];
  if (s === "=") return ["=", 1];
  return null;
}
function Pe(e, s, n, t) {
  let r = et(e, s, t);
  if (!r) return null;
  while (true) {
    if (x(e.L), Se(e, s)) break;
    if (c(e.L) === ",") break;
    let o = Un(e);
    if (!o) break;
    let [a, l] = o, f = zn.get(a);
    if (f === void 0 || f < n) break;
    let d = e.L.b;
    for (let p = 0; p < l; p++) i(e.L);
    let L = u(e, a, d, e.L.b, []), b = Wn.has(a) ? f : f + 1, h = Pe(e, s, b, t);
    if (!h) break;
    r = u(e, "binary_expression", r.startIndex, h.endIndex, [r, L, h]);
  }
  return r;
}
function et(e, s, n) {
  if (x(e.L), Se(e, s)) return null;
  let t = c(e.L), r = c(e.L, 1);
  if (t === "+" && r === "+" || t === "-" && r === "-") {
    let o = e.L.b;
    i(e.L), i(e.L);
    let a = u(e, t + r, o, e.L.b, []), l = et(e, s, n);
    if (!l) return a;
    return u(e, "unary_expression", a.startIndex, l.endIndex, [a, l]);
  }
  if (t === "-" || t === "+" || t === "!" || t === "~") {
    if (n !== "var" && t === "-" && D(r)) {
      let f = e.L.b;
      i(e.L);
      while (D(c(e.L))) i(e.L);
      return u(e, "number", f, e.L.b, []);
    }
    let o = e.L.b;
    i(e.L);
    let a = u(e, t, o, e.L.b, []), l = et(e, s, n);
    if (!l) return a;
    return u(e, "unary_expression", a.startIndex, l.endIndex, [a, l]);
  }
  return qn(e, s, n);
}
function qn(e, s, n) {
  let t = Hn(e, s, n);
  if (!t) return null;
  let r = c(e.L), o = c(e.L, 1);
  if (r === "+" && o === "+" || r === "-" && o === "-") {
    let a = e.L.b;
    i(e.L), i(e.L);
    let l = u(e, r + o, a, e.L.b, []);
    return u(e, "postfix_expression", t.startIndex, l.endIndex, [t, l]);
  }
  return t;
}
function Hn(e, s, n) {
  if (x(e.L), Se(e, s)) return null;
  let t = c(e.L);
  if (t === "(") {
    let r = e.L.b;
    i(e.L);
    let o = u(e, "(", r, e.L.b, []), a = ge(e, ")", n);
    x(e.L);
    let l;
    if (c(e.L) === ")") {
      let f = e.L.b;
      i(e.L), l = u(e, ")", f, e.L.b, []);
    } else l = u(e, ")", e.L.b, e.L.b, []);
    return u(e, "parenthesized_expression", o.startIndex, l.endIndex, [o, ...a, l]);
  }
  if (t === '"') return Q(e);
  if (t === "$") return G(e);
  if (D(t)) {
    let r = e.L.b;
    while (D(c(e.L))) i(e.L);
    if (e.L.b - r === 1 && t === "0" && (c(e.L) === "x" || c(e.L) === "X")) {
      i(e.L);
      while (jt(c(e.L))) i(e.L);
    } else if (c(e.L) === "#") {
      i(e.L);
      while (Xt(c(e.L))) i(e.L);
      if (c(e.L) === "$" && J(e)) {
        let o = u(e, "number", r, e.L.b, []), a = G(e);
        return a ? u(e, "binary_expression", r, e.L.b, [o, a]) : o;
      }
    }
    return u(e, "number", r, e.L.b, []);
  }
  if (M(t)) {
    let r = e.L.b;
    while (z(c(e.L))) i(e.L);
    let o = c(e.L);
    if (n === "assign") {
      x(e.L);
      let l = c(e.L), f = c(e.L, 1);
      if (l === "=" && f !== "=") {
        let d = u(e, "variable_name", r, e.L.b, []), L = e.L.b;
        i(e.L);
        let b = u(e, "=", L, e.L.b, []), h = Me(e, s, n), p = h ? h.endIndex : b.endIndex;
        return u(e, "variable_assignment", r, p, h ? [d, b, h] : [d, b]);
      }
    }
    if (o === "[") {
      let l = u(e, "variable_name", r, e.L.b, []), f = e.L.b;
      i(e.L);
      let d = u(e, "[", f, e.L.b, []), L = Me(e, "]", "var") ?? G(e);
      x(e.L);
      let b;
      if (c(e.L) === "]") {
        let p = e.L.b;
        i(e.L), b = u(e, "]", p, e.L.b, []);
      } else b = u(e, "]", e.L.b, e.L.b, []);
      let h = L ? [l, d, L, b] : [l, d, b];
      return u(e, "subscript", r, b.endIndex, h);
    }
    return u(e, n === "var" ? "variable_name" : "word", r, e.L.b, []);
  }
  return null;
}
function Se(e, s) {
  let n = c(e.L);
  if (s === "))") return n === ")" && c(e.L, 1) === ")";
  if (s === ")") return n === ")";
  if (s === ";") return n === ";";
  if (s === ":") return n === ":";
  if (s === "]") return n === "]";
  if (s === "}") return n === "}";
  if (s === ":}") return n === ":" || n === "}";
  return n === "" || n === `
`;
}
function C(e, s) {
  let n = s.at(-1);
  if (s === "$'") i(e.L);
  i(e.L);
  while (e.L.i < e.L.len && c(e.L) !== n) {
    if (s !== "'" && c(e.L) === "\\" && e.L.i + 1 < e.L.len) i(e.L);
    else if ((n === '"' || e.inDquote > 0) && (c(e.L) === "$" || c(e.L) === "`")) e.zshBraceDiff = true;
    i(e.L);
  }
}
function Bt(e) {
  let s = S(e.L), n = k(e.L, "arg");
  return y(e.L, s), (!["EOF", "NEWLINE", "COMMENT", "OP"].includes(n.type) || n.value === "<<<") && !(n.type === "BACKTICK" && e.inBacktick > 0);
}
function zt(e) {
  if (x(e.L), c(e.L) === "#") e.misreading ??= "hash_in_test";
}
function Kn(e) {
  let [s, n] = e.children, t = e.children.at(-2), r = e.children.at(-1);
  if (s && n?.type === "heredoc_start" && /^(?:'[^'\\\s()]+'|"[^"$`\\\s()]+")$/.test(n.text) && t?.type === "heredoc_body" && t.children.length === 0 && r?.type === "heredoc_end" && r.text === n.text.slice(1, -1) && !e.children.some((o) => o.type === "ERROR") && e.text.slice(e.text.indexOf(`
`) + 1) === t.text + r.text && dbs(s.type, t.text, r.text)) return t;
  return;
}
function H(e, s) {
  if ((e.asked & s) === 0) e.asked |= s, e.answers |= e.ports.readSwitches(s, e.src);
  return (e.answers & s) !== 0;
}
var st = { now: () => performance.now(), readSwitches: (e, s) => pBn(e, s), noteKeywordAfterPrefixFired: () => (0, import_chunk_49rkmh8j.vIr)() }, Gn = { parse: Xn }, Qn = 64, Zn = 1e4, jn = 32e3, ne = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function hy() {
  return Gn;
}
function Xn(e, s) {
  if (s !== void 0 || e.length > Zn) {
    let o = Be(e, s, st);
    return rt(o.root, o), o.root;
  }
  let n = ne.get(e);
  if (n !== void 0 && n.switches.answers === pBn(n.switches.asked, e)) {
    if (n.root.keywordAfterPrefix) (0, import_chunk_49rkmh8j.vIr)();
    return rt(n.root, n.switches), n.root;
  }
  ne.delete(e);
  let t = Be(e, void 0, st);
  if (t.timedOut) t = Be(e, void 0, st);
  let r = t.root;
  if (rt(r, t), r !== null) {
    let o = e.length;
    for (let a of ne.keys()) o += a.length;
    for (let a of ne.keys()) {
      if (ne.size < Qn && o <= jn) break;
      ne.delete(a), o -= a.length;
    }
    ne.set(e, { root: r, switches: { asked: t.asked, answers: t.answers } });
  }
  return r;
}
function rt(e, s) {
  if (e === null || it(s)) (0, import_chunk_49rkmh8j.tOo)();
}
