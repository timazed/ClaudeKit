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
var chunk_b9qnxh4s_exports = {};
__export(chunk_b9qnxh4s_exports, {
  $G: () => $G,
  A2e: () => A2e,
  ASl: () => ASl,
  AUi: () => AUi,
  C2e: () => C2e,
  CSl: () => CSl,
  CU: () => CU,
  CUi: () => CUi,
  Cat: () => Cat,
  Djt: () => Djt,
  EZ: () => EZ,
  Eat: () => Eat,
  GEr: () => GEr,
  Hdn: () => Hdn,
  Hjt: () => Hjt,
  Ijt: () => Ijt,
  Ire: () => Ire,
  JSo: () => JSo,
  JSs: () => JSs,
  KEr: () => KEr,
  Mdn: () => Mdn,
  Mjt: () => Mjt,
  OUi: () => OUi,
  Ojt: () => Ojt,
  P2e: () => P2e,
  PS: () => PS,
  PUi: () => PUi,
  QSo: () => QSo,
  QSs: () => QSs,
  R2e: () => R2e,
  RSl: () => RSl,
  RUi: () => RUi,
  T2e: () => T2e,
  TSl: () => TSl,
  Tat: () => Tat,
  UG: () => UG,
  VEr: () => VEr,
  XO: () => XO,
  XSo: () => XSo,
  XSs: () => XSs,
  Y7: () => Y7,
  ZSo: () => ZSo,
  ZSs: () => ZSs,
  _Ye: () => _Ye,
  abs: () => abs,
  cBn: () => cBn,
  dBn: () => dBn,
  ebo: () => ebo,
  ebs: () => ebs,
  ei: () => ei,
  ek: () => ek,
  fBn: () => fBn,
  ibo: () => ibo,
  ibs: () => ibs,
  lBn: () => lBn,
  lbs: () => lbs,
  lme: () => lme,
  nbo: () => nbo,
  nbs: () => nbs,
  oLe: () => oLe,
  obo: () => obo,
  obs: () => obs,
  ovt: () => ovt,
  qEr: () => qEr,
  rbo: () => rbo,
  rbs: () => rbs,
  sbo: () => sbo,
  sbs: () => sbs,
  svt: () => svt,
  swe: () => swe,
  tbo: () => tbo,
  tbs: () => tbs,
  uBn: () => uBn,
  vat: () => vat,
  x2e: () => x2e,
  xUi: () => xUi,
  zEr: () => zEr
});
module.exports = __toCommonJS(chunk_b9qnxh4s_exports);
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_r6r2wdsw = require("/$bunfs/root/chunk-r6r2wdsw.js");
var import_chunk_49rkmh8j = require("/$bunfs/root/chunk-49rkmh8j.js");
var import_chunk_nw2twe6x = require("/$bunfs/root/chunk-nw2twe6x.js");
var import_chunk_ay36ksef = require("/$bunfs/root/chunk-ay36ksef.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_os = require("os");
var import_util = require("util");
var import_async_hooks = require("async_hooks");
function XO(e) {
  return e.replace(/^.*[\\/]/, "").replace(/\.exe$/i, "");
}
function GEr(e) {
  for (let t of [XO(e), e]) {
    if (t.includes("zsh")) return "zsh";
    if (t.includes("bash")) return "bash";
  }
  return;
}
var _t = 5e3, Me = 65536, be = 1e4, G = new import_async_hooks.AsyncLocalStorage(), Le = new import_async_hooks.AsyncLocalStorage();
async function TSl(e) {
  let t = Le.getStore() ?? { noted: false };
  return { result: await Le.run(t, e), tooLong: t.noted };
}
function ze() {
  let e = Le.getStore();
  if (e !== void 0) e.noted = true;
}
class ke extends Error {
}
function XSs(e) {
  return e instanceof ke;
}
var De = { now() {
  let { user: e, system: t } = process.threadCpuUsage?.() ?? process.cpuUsage();
  return (e + t) / 1e3;
} };
function CSl(e) {
  return G.getStore() === void 0 ? G.run({ left: _t }, e) : e();
}
async function XSo(e) {
  let t = De.now(), n = G.getStore() ?? { left: _t }, r = n.until !== void 0;
  n.until ??= t + n.left;
  try {
    return { result: await G.run(n, e), outOfTime: n.outOfTime === true };
  } catch (i) {
    if (i instanceof ke) return { outOfTime: true };
    throw i;
  } finally {
    if (!r) n.until = void 0, n.left -= De.now() - t;
  }
}
function CUi(e = 0) {
  let t = G.getStore();
  if (t?.until !== void 0 && (e > be || De.now() > t.until)) We();
}
function ASl() {
  let e = G.getStore();
  if (e !== void 0) e.spliced = 0;
  CUi();
}
function bt(e) {
  let t = e.some(({ argv: n, envVars: r, redirects: i }) => n.some((s) => s.length > be) || r.some(({ value: s }) => s.length > be) || i.some(({ target: s }) => s.length > be));
  if (t) ze(), We();
  return t;
}
function We() {
  let e = G.getStore();
  if (e?.until !== void 0) throw e.outOfTime = true, new ke();
}
function kt(e) {
  let t = G.getStore();
  if (t?.until !== void 0) {
    if (t.spliced = (t.spliced ?? 0) + e, t.spliced > Me) We();
  }
}
function Ojt(e) {
  return /^-[pvV]+$/.test(e) && /[vV]/.test(e);
}
function T2e(e, t) {
  return /^-[a-zA-Z]+$/.test(e) && [...t].some((n) => e.includes(n));
}
function Fe(e) {
  return /^[+-][^iEF]*$/.test(e) && /[aA]/.test(e);
}
function RSl(e, t) {
  return /^-[a-z]+$/.test(e) && [...t].some((n) => e.includes(n));
}
var Rt = 1e4, zn = /* @__PURE__ */ new Set(["export", "declare", "typeset", "readonly", "local", "unset", "unsetenv"]), Wn = /* @__PURE__ */ new Set(["word", "string", "raw_string", "number"]), Be = /* @__PURE__ */ new Set(["command_substitution", "process_substitution"]), Ue = /* @__PURE__ */ new Set(["command", "declaration_command"]);
async function JSs(e) {
  if (!e || e.length > Rt) return null;
  try {
    let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
    if (!t) return null;
    let n = C2e(t, null), r = Fn(n);
    return { rootNode: t, envVars: r, commandNode: n, originalCommand: e };
  } catch {
    return null;
  }
}
var ek = Symbol("parse-aborted");
async function CU(e) {
  if (!e) return null;
  if (e.length > Rt) return (0, import_chunk_y53wbr8a.a)("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: false }), ek;
  try {
    let t = (0, import_chunk_nw2twe6x.hy)().parse(e);
    if (t === null) return (0, import_chunk_y53wbr8a.a)("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: false }), ek;
    return t;
  } catch {
    return (0, import_chunk_y53wbr8a.a)("tengu_tree_sitter_parse_abort", { cmdLength: e.length, panic: true }), ek;
  }
}
function C2e(e, t) {
  let { type: n, children: r } = e;
  if (Ue.has(n)) return e;
  if (n === "variable_assignment" && t) return t.children.find((i) => Ue.has(i.type) && i.startIndex > e.startIndex) ?? null;
  if (n === "pipeline") {
    for (let i of r) {
      let s = C2e(i, e);
      if (s) return s;
    }
    return null;
  }
  if (n === "redirected_statement") return r.find((i) => Ue.has(i.type)) ?? null;
  for (let i of r) {
    let s = C2e(i, e);
    if (s) return s;
  }
  return null;
}
function Fn(e) {
  if (!e || e.type !== "command") return [];
  let t = [];
  for (let n of e.children) if (n.type === "variable_assignment") t.push(n.text);
  else if (n.type === "command_name" || n.type === "word") break;
  return t;
}
function Ijt(e) {
  if (e.type === "declaration_command") {
    let r = e.children[0];
    return r && zn.has(r.text) ? [r.text] : [];
  }
  let t = [], n = false;
  for (let r of e.children) {
    if (r.type === "variable_assignment") continue;
    if (r.type === "command_name" || !n && r.type === "word") {
      n = true;
      let i = r.children[0] ?? r;
      if (i.type === "concatenation") t.push(i.children.some((s) => Be.has(s.type)) ? i.text : i.children.map(Re).join(""));
      else t.push(Re(i));
      continue;
    }
    if (Wn.has(r.type)) t.push(Re(r));
    else if (r.type === "concatenation") {
      if (r.children.some((i) => Be.has(i.type))) break;
      t.push(r.children.map(Re).join(""));
    } else if (Be.has(r.type)) break;
  }
  return t;
}
function Re(e) {
  if (e.type === "word") return e.text.replace(/\\(.)/g, "$1");
  return Bn(e.text);
}
function Bn(e) {
  return e.length >= 2 && (e[0] === '"' && e.at(-1) === '"' || e[0] === "'" && e.at(-1) === "'") ? e.slice(1, -1) : e;
}
function Et(e, t) {
  let n = Ze(e, t, "line"), r = n.search(Hn);
  return r !== -1 && St.test(n.slice(r + 2)) || At(e, t, false);
}
var He = "", Un = "", Hn = /[$<>]\((?!\(?\x03)/, St = /(?:^|[ \t\n;&|()<>])(?:#|(?:case|esac)(?=$|[ \t\n;&|()<>]))|(?:^|[^<])(?:<<(?![<\x02])|<<<+[<\x02])|\$(?=$|[ \t\n;&|)<>])/;
function At(e, t, n) {
  let r = e.children[0]?.type;
  if (e.type === "process_substitution" || e.type === "command_substitution" && r === "$(") {
    let s = Ze(e, t, "substitution");
    if (n || St.test(s.slice(2, -1)) || !wt(s.slice(1))) return true;
  } else if (r === "$((" && !wt(Ze(e, t, "substitution").slice(1))) return true;
  let i = n || e.type === "arithmetic_expansion" || e.type === "c_style_for_statement" || r === "((" || e.type === "string" && e.children.some((s, o) => s.type === "$" && e.children[o + 1]?.text.startsWith("["));
  return e.children.some((s) => At(s, t, i));
}
function wt(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) if (e[n] === "(") t++;
  else if (e[n] === ")" && --t === 0) return n === e.length - 1;
  return false;
}
function Ze(e, t, n) {
  let r = "", i = e.startIndex, s = $t(e, n).sort((o, l) => o.start - l.start);
  for (let o of s) if (o.start >= i) r += t.toString("latin1", i, o.start) + o.left, i = o.end;
  return (r + t.toString("latin1", i, e.endIndex)).replace(/\\([^])/g, (o, l) => l === `
` ? "" : l === " " || l === "	" ? l : "_");
}
function $t(e, t) {
  return e.children.flatMap((n) => {
    let r = Zn(n, t);
    return r === null ? $t(n, t) : [{ start: n.startIndex, end: n.endIndex, left: r }];
  });
}
function Zn(e, t) {
  switch (e.type) {
    case "raw_string":
      return "''";
    case "string":
      return '""';
    case "ansi_c_string":
      return "$''";
    case "simple_expansion":
      return "$x";
    case "comment":
      return " #";
    case "heredoc_body":
      return t === "line" ? " " : null;
    case "heredoc_redirect":
      return t === "substitution" && Gn(e) ? "<<" + Un : null;
    case "command_substitution":
      return e.children[0]?.type === "$(" ? "$(" + He + ")" : "``";
    case "process_substitution":
      return e.text.charAt(0) + "(" + He + ")";
    case "arithmetic_expansion":
      return e.children[0]?.type === "$((" ? "$((" + He + "))" : null;
    default:
      return null;
  }
}
function Gn(e) {
  let [t, n, r, i] = e.children;
  if (!t || !n || !r || !i || t.type !== "<<" && t.type !== "<<-" || n.type !== "heredoc_start" || !/^(?:(?!(?:case|esac)$)\w+|'[^'\\\s()]+'|"[^"$`\\\s()]+")$/.test(n.text) || r.type !== "heredoc_body" || r.startIndex !== n.endIndex + 1 || i.type !== "heredoc_end") return false;
  return (0, import_chunk_nw2twe6x.dbs)(t.type, r.text, i.text);
}
var Gt = '"(?:\\$PWD|\\$\\(pwd\\))', AUi = new RegExp(`${Gt}/`), QSs = new RegExp(`^${Gt}(/[^"$\`\\\\\\n]*)"$`), ut = /* @__PURE__ */ new Set(["program", "list", "pipeline", "redirected_statement"]), me = /* @__PURE__ */ new Set(["&&", "||", "|", ";", "&", "|&", `
`]), Vt = /* @__PURE__ */ new Set(["command", "pipeline", "list", "negated_command", "declaration_command", "unset_command"]), jn = /* @__PURE__ */ new Set(["test_command", "redirected_statement"]), Ire = "__CMDSUB_OUTPUT__", O = "__TRACKED_VAR__", Yn = /* @__PURE__ */ new Set(["file_redirect", "herestring_redirect", "heredoc_redirect"]), C = "__UNCERTAIN_VAR__";
function ei(e) {
  return e.includes(Ire) || e.includes(O) || e.includes(C);
}
function ZSs(e) {
  let t = [Ire, O, C].find((n) => e.startsWith(n));
  return t === void 0 ? void 0 : e.slice(t.length);
}
function zEr(e) {
  let t = [Ire, O, C].map((n) => e.indexOf(n));
  return e.slice(0, Math.min(...t.filter((n) => n !== -1), e.length));
}
function $G(e) {
  return e.replaceAll(Ire, "$(\u2026)").replaceAll(O, "${\u2026}");
}
function oLe(e) {
  return e.replaceAll(Ire, "").replaceAll(O, "");
}
function JSo(e, t) {
  return t.kind === "simple" && t.declarationPrefixes === void 0 ? t.commands : e.commands.map((n) => ({ ...n, argv: n.argv.map(oLe) }));
}
var D = 0, $e = 0, B = 0, Kn = /["`\\]/;
function Xn(e, t) {
  return t > 0 && e[t - 1] === `
`;
}
function RUi(e) {
  if (e.includes(O) || e.includes(C)) return true;
  let t = e.indexOf(Ire);
  while (t !== -1) {
    if (!Xn(e, t)) return true;
    t = e.indexOf(Ire, t + Ire.length);
  }
  return false;
}
function xUi(e) {
  return e.startsWith(Ire) || e.startsWith(O) || e.startsWith(C);
}
var Tt = /[ \t\n*?[]/, Qn = /^-[ioe]$/, Jn = /^-[ioe]./, er = /^--(input|output|error)=/, Pt = /* @__PURE__ */ new Set(["BASHOPTS", "BASH_VERSINFO", "EUID", "PPID", "SHELLOPTS", "UID", "FUNCNAME", "GROUPS", "BASH_ARGC", "BASH_ARGV", "BASH_LINENO", "BASH_SOURCE", "BASHPID"]), Ke = /* @__PURE__ */ new Set(["HOME", "PWD", "OLDPWD", "USER", "LOGNAME", "SHELL", "PATH", "HOSTNAME", "UID", "EUID", "PPID", "RANDOM", "SECONDS", "LINENO", "TMPDIR", "BASH_VERSION", "BASHPID", "SHLVL", "HISTFILE", "IFS"]), tr = /* @__PURE__ */ new Set(["?", "$", "!", "#", "0", "-"]), nr = /* @__PURE__ */ new Set(["command_substitution", "process_substitution", "expansion", "simple_expansion", "brace_expression", "subshell", "compound_statement", "for_statement", "while_statement", "until_statement", "if_statement", "case_statement", "function_definition", "test_command", "ansi_c_string", "translated_string", "herestring_redirect", "heredoc_redirect"]), rr = [...nr];
function ebs(e) {
  if (!e) return -2;
  if (e === "ERROR") return -1;
  let t = rr.indexOf(e);
  return t >= 0 ? t + 1 : 0;
}
var Xe = { ">": ">", ">>": ">>", "<": "<", ">&": ">&", "<&": "<&", ">|": ">|", "&>": "&>", "&>>": "&>>", "<<<": "<<<" }, lBn = { test: (e) => e.split(/\s/).some((t) => {
  let n = t.indexOf("{"), r = t.lastIndexOf("}"), i = n < 0 || r < n ? "" : t.slice(n + 1, r);
  return i.includes(",") || i.includes("..");
}) }, Qe = /\{[^{]*\\}/, Je = /\{[^}]*\\\{/, Eat = /[\x00-\x08\x0B-\x1F\x7F]/, Mjt = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/, vat = /[\u00A0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/, Hjt = /\\[ \t]/, QSo = /(?:^|[^ \t\\])(?:\\\\)*\\\n|[ \t](?:\\\\)+\\\n|\\[ \t]\\\n/, sr = new RegExp(`${Hjt.source}|${QSo.source}`), ZSo = /(?:^|[^\\])(?:\\\\)*(?:[`$]|[<>=]\()/, tbs = /(?:^|[^\\])(?:\\\\)*['"]/, ebo = /~\[/, tbo = /(?:^|[\s;&|])=[a-zA-Z_]/, nbs = /<\d*-\d*>/, ir = /\{[^}]*['"]/, et = /[*?[]/;
function A2e(e) {
  if (!et.test(e)) return false;
  let t = false, n = false, r = false, i = true, s = 0;
  while (s < e.length) {
    let o = e[s];
    if (r) if (o === "\\" && (e[s + 1] === "`" || e[s + 1] === "\\" || e[s + 1] === "$")) s += 2;
    else {
      if (o === "`") r = false;
      s++;
    }
    else if (t) {
      if (o === "'") t = false;
      s++;
    } else if (n) if (o === "\\" && (e[s + 1] === '"' || e[s + 1] === "\\" || e[s + 1] === "`")) s += 2;
    else if (o === "`") r = true, s++;
    else {
      if (o === '"') n = false;
      s++;
    }
    else if (o === "\\" && s + 1 < e.length) {
      if (e[s + 1] !== `
`) i = false;
      s += 2;
    } else if (o === "#" && i) {
      while (s < e.length && e[s] !== `
`) s++;
      i = true;
    } else if (o === "`") r = true, i = false, s++;
    else {
      if (o === "*" || o === "?" || o === "[") return true;
      if (o === "'") t = true;
      else if (o === '"') n = true;
      i = o === " " || o === "	" || o === `
` || o === ";" || o === "|" || o === "&" || o === "(" || o === ")" || o === "<" || o === ">", s++;
    }
  }
  return false;
}
var or = /[*?]|\[[^\]]*\]/;
function we(e) {
  return or.test(e);
}
function R2e(e) {
  let t = e.argvUnquotedGlob;
  if (e.carveOutMayDesyncQuoteScan === true || t === void 0 && e.argv.some(ei)) return e.argv.some(we) || e.redirects.some((r) => r.op !== "<<" && r.op !== "<<<" && we(r.target));
  if (t === void 0) return false;
  if (t.length !== e.argv.length) return e.argv.some(we);
  return e.argv.some((r, i) => we(r) && (t[i] === true || ei(r)));
}
function qt(e) {
  if (!e.includes("{")) return e;
  let t = [], n = false, r = false, i = false, s = true, o = 0;
  while (o < e.length) {
    let l = e[o];
    if (i) if (l === "\\" && (e[o + 1] === "`" || e[o + 1] === "\\" || e[o + 1] === "$")) t.push(l, e[o + 1]), o += 2;
    else {
      if (l === "`") i = false;
      t.push(l === "{" ? " " : l), o++;
    }
    else if (n) {
      if (l === "'") n = false;
      t.push(l === "{" ? " " : l), o++;
    } else if (r) if (l === "\\" && (e[o + 1] === '"' || e[o + 1] === "\\" || e[o + 1] === "`")) t.push(l, e[o + 1]), o += 2;
    else if (l === "`") i = true, t.push(l), o++;
    else {
      if (l === '"') r = false;
      t.push(l === "{" ? " " : l), o++;
    }
    else if (l === "\\" && o + 1 < e.length) {
      if (t.push(l, e[o + 1]), e[o + 1] !== `
`) s = false;
      o += 2;
    } else if (l === "#" && s) {
      while (o < e.length && e[o] !== `
`) t.push(e[o]), o++;
      s = true;
    } else if (l === "`") i = true, s = false, t.push(l), o++;
    else {
      if (l === "'") n = true;
      else if (l === '"') r = true;
      s = l === " " || l === "	" || l === `
` || l === ";" || l === "|" || l === "&" || l === "(" || l === ")" || l === "<" || l === ">", t.push(l), o++;
    }
  }
  return t.join("");
}
var Nt = String.fromCharCode(36);
function Ce(e, t) {
  if (e.type === t) return true;
  for (let n of e.children) if (n && Ce(n, t)) return true;
  return false;
}
async function PS(e, t = {}) {
  if (e === "") return { kind: "simple", commands: [], bareAssignmentNames: [] };
  let n = await CU(e);
  if (n === null) return { kind: "simple", commands: [], bareAssignmentNames: [] };
  let r = UG(e, n, t);
  if (n !== ek && (r.kind === "simple" || r.nodeType !== void 0)) return { ...r, tree: n };
  return r;
}
function nbo(e, t) {
  let n = (i) => Array.from({ length: e }, (s, o) => i(o));
  if (e <= 3) return { readings: Array.from({ length: 2 ** e }, (i, s) => n((o) => Math.floor(s / 2 ** o) % 2 === 1)), exhaustive: true };
  let r = [n(() => false), n(() => true)];
  for (let i = 0; e <= 8 && i < e; i++) r.push(n((s) => s === i));
  if (t?.length === e && !r.some((i) => i.every((s, o) => s === t[o]))) r.push([...t]);
  return { readings: r, exhaustive: false };
}
function UG(e, t, n = {}) {
  let r = ar(e, t, n);
  if (r.kind !== "simple") (0, import_chunk_49rkmh8j.rOo)(e);
  return r;
}
function ar(e, t, n) {
  let r = vt(e, t, n, "first");
  if (r.kind === "simple" && bt(r.commands) && t !== ek) return Sn(t);
  let i = t === ek ? void 0 : (0, import_chunk_49rkmh8j.ohn)(t);
  if (i !== void 0 && r.kind === "simple") return { kind: "too-complex", reason: import_chunk_nw2twe6x.abo[i], differential: true };
  if (r.kind === "simple" && n.readsDivergentShapes !== true && t !== ek && dBn(e, t)) return { kind: "too-complex", reason: "A nested command in this command can't be checked before it runs", differential: true, divergentShape: true, keepsRemovalVerdict: true };
  return r.kind === "simple" && r.hasLoop === true && (0, import_chunk_ay36ksef.mDl)() && !(0, import_util.isDeepStrictEqual)(r, vt(e, t, n, "later")) ? { ...r, laterLoopPassesDiffer: true } : r;
}
function dBn(e, t) {
  return e.includes("(") && (0, import_chunk_49rkmh8j.xDl)() && Et(t, Buffer.from(e, "utf8"));
}
function vt(e, t, { plainUnquotedHeredocs: n = false, declarationPrefix: r, readsDivergentShapes: i = false, unsetPidEmpty: s = false, passesEscapedBlanks: o = false }, l) {
  if (Mjt.test(e)) return { kind: "too-complex", reason: "Contains lone surrogate", differential: true };
  if (Eat.test(e)) return { kind: "too-complex", reason: "Contains control characters", differential: true };
  if (vat.test(e)) return { kind: "too-complex", reason: "Contains Unicode whitespace", differential: true };
  if ((o ? QSo : sr).test(e)) return { kind: "too-complex", reason: "Contains backslash-escaped whitespace", differential: true };
  if (ebo.test(e)) return { kind: "too-complex", reason: "Contains zsh ~[ dynamic directory syntax", differential: true };
  if (tbo.test(e)) return { kind: "too-complex", reason: "Contains zsh =cmd equals expansion", differential: true };
  if (nbs.test(e)) return { kind: "too-complex", reason: "Contains zsh <N-M> numeric-range glob", differential: true };
  if (ir.test(qt(e))) return { kind: "too-complex", reason: "Contains brace with quote character (expansion obfuscation)", differential: true };
  if (e.trim() === "") return { kind: "simple", commands: [], bareAssignmentNames: [] };
  if (t === ek) return { kind: "too-complex", reason: "Parser aborted (timeout, resource limit, or over-length)", nodeType: "PARSE_ABORT" };
  for (let S of ["backtick_body_empty", "backtick_body_overrun", "backtick_escape_unsupported"]) if (Ce(t, S)) return { kind: "too-complex", reason: S === "backtick_body_empty" ? "empty backtick substitution \u2014 bash joins the surrounding words, so the parsed command boundaries cannot be trusted" : "backtick substitution scan could not be trusted (" + S + ") \u2014 the parsed bytes may differ from what bash executes", differential: true };
  let f = Buffer.from(e, "utf8");
  {
    let S = Qt(t, f, 0);
    if (S) return S;
  }
  {
    let S = Jt(t);
    if (S) return S;
  }
  let g = (S) => S === 32 || S === 9 || S === 10 || S === 13 || S === 59 || S === 38, _ = (S, Q) => {
    let F = S;
    while (F < Q) {
      let xt = f[F];
      if (g(xt)) F++;
      else if (xt === 92 && (f[F + 1] === 10 || f[F + 1] === 13 && f[F + 2] === 10)) F += f[F + 1] === 13 ? 3 : 2;
      else break;
    }
    return F;
  }, h = t.children.filter((S) => S !== null).map((S) => [S.startIndex, S.endIndex]).sort((S, Q) => S[0] - Q[0]), d = 0;
  for (let [S, Q] of h) {
    if (_(d, S) < S) return { kind: "too-complex", reason: "Parser skipped input between top-level statements" };
    if (Q > d) d = Q;
  }
  if (_(d, f.length) < f.length) return { kind: "too-complex", reason: "Parser did not consume trailing input" };
  {
    let S = hn(t, f);
    if (S !== null) return { kind: "too-complex", reason: `Redirect uses ${dt(S)} fd-variable assignment \u2014 modifies shell variable as side effect` };
  }
  {
    let S = mn(t);
    if (S) return S;
  }
  let c = i ? null : jt(t);
  if (c !== null) return { kind: "too-complex", reason: c, nodeType: "ERROR", differential: true, divergentShape: true };
  let x = re, p = v, m = V, b = ce, y = H, w = j, k = W, A = q, R = he, P = Y, L = Z;
  Z = false;
  let vn = ue;
  ue = false;
  let In = ae;
  ae = false;
  let On = fe;
  fe = s;
  let Cn = de;
  de = 0;
  let Ln = pe, Dn = X, Mn = K;
  pe = l === "later", X = null, K = 0, re = n, v = i, V = false, ce = e.length * vr, H = r, j = 0, W = /* @__PURE__ */ new Map(), q = false, he = /* @__PURE__ */ new Set(), Y = void 0;
  let N;
  try {
    if (N = xr(t), Z && N.kind === "simple") N = { ...N, usesAssignedValue: true };
    if (ae && N.kind === "simple") N = { ...N, readsUnsetPid: true };
    if (q && N.kind === "simple") N = { kind: "too-complex", reason: "A variable set in front of a declaration inside a branch or loop can't be checked before it runs" };
    let S = Ar();
    if (r === void 0 && S !== void 0) N = { ...N, declarationPrefixes: S.length, declarationPrefixBashKeeps: S };
    if (r !== void 0 && N.kind === "simple" && $r() !== r.length) N = { kind: "too-complex", reason: "The variables set in front of declarations in this command can't be checked before it runs" };
    if (V) N = { ...N, uncertainWrite: true };
  } finally {
    re = x, v = p, V = m, ce = b, H = y, j = w, W = k, q = A, he = R, Y = P, Z = L, ue = vn, ae = In, fe = On, de = Cn, pe = Ln, X = Dn, K = Mn;
  }
  if (N.kind === "too-complex" && N.nodeType !== "ERROR" && (Yt(t) || Kt(t))) return { ...N, nodeType: "ERROR" };
  return N;
}
function jt(e) {
  if (e.children.length === 0) return e.startIndex === e.endIndex && !e.type.startsWith("heredoc_") ? "Parse error" : null;
  for (let t of e.children) {
    let n = t === null ? null : jt(t);
    if (n !== null) return n;
  }
  return e.type === "test_command" && e.children[0]?.type === "[" && !/^\[[ \t]/.test(e.text) ? "[ glued to the next word names another command" : null;
}
function Yt(e) {
  if (e.type === "ERROR" && (e.text.startsWith("${") || Xt(e.text))) return true;
  for (let t of e.children) if (t && Yt(t)) return true;
  return false;
}
function Kt(e) {
  let t = e.children;
  for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (!r) continue;
    if (r.type === "simple_expansion" && r.children.some((i) => i?.type === "special_variable_name" && i.text === "#")) {
      let i = "";
      for (let o = n + 1; o < t.length; o++) {
        let l = t[o]?.text ?? "";
        if (i += l, !/^[\w\u0080-\uffff]*$/.test(l)) break;
      }
      let s = /^[\w\u0080-\uffff]*(?=\[|:[a-zA-Z&])/.exec(i);
      if (s && /[\u0080-\uffff]/.test(s[0])) return true;
    }
    if (Kt(r)) return true;
  }
  return false;
}
function Xt(e) {
  return /^\$[#^=~+]*[\w\u0080-\uffff]+$/.test(e) && /[\u0080-\uffff]/.test(e);
}
function Qt(e, t, n) {
  for (let r of e.children) {
    if (!r) continue;
    let i = r.startIndex - 1 - n;
    if (r.type === "comment" && i >= 0 && (t[i] === 41 || t[i] === 40)) return { kind: "too-complex", reason: "comment glued to a paren \u2014 bash reads `)#\u2026` and `(#\u2026` as a comment, but zsh reads a keyword- or word-glued `(\u2026)` as a glob group whose `#\u2026` text is word content that executes", differential: true };
    let s = Qt(r, t, n);
    if (s) return s;
  }
  for (let r of e.children) {
    if (!r) continue;
    if (r.type === "case_item" && !r.children.some((i) => i !== void 0 && i.type === ")") && rn(r)) return { kind: "too-complex", reason: "`case` pattern group holds a comment \u2014 bash reads no comment inside a pattern list, but zsh reads the group as one glob word and expands its contents", differential: true };
    if (r.type === "function" && !e.children.some((i) => i !== void 0 && i.type === "(")) {
      let i = e.children[1], s = e.children.find((l) => l !== void 0 && l.type === "redirected_statement")?.children[0], o = e.children.find((l) => l !== void 0 && l.type === "subshell") ?? (s?.type === "subshell" ? s : void 0);
      if (i !== void 0 && o !== void 0 && mr(t, i.endIndex - n, o.startIndex - n)) return { kind: "too-complex", reason: "`function` with a parenthesised body and no `()` \u2014 bash reads a subshell body, but zsh reads one glob-group word and expands its contents", differential: true };
    }
    if (lr.has(r.type) && t[r.endIndex - n] === 40) return { kind: "too-complex", reason: `\`${r.type}\` glued to a paren \u2014 bash reads a keyword and a subshell, but zsh reads one glob-group word and expands its contents`, differential: true };
  }
  return null;
}
var lr = /* @__PURE__ */ new Set(["if", "elif", "else", "while", "until", "case"]);
function Jt(e) {
  if (e.type === "declaration_command" || e.type === "unset_command") {
    if (e.type === "declaration_command" && e.children.some((s) => s !== void 0 && (/^(?:export|readonly)$/.test(e.children[0]?.text ?? "") ? ur : ft).test(M(s.text))) && !ne(e)) return { kind: "too-complex", reason: `${e.children[0]?.text ?? "declare"} with a flag that changes assignment semantics and an operand it would evaluate`, differential: true };
    let t = e.type === "unset_command" || /^(?:declare|typeset|local|export)$/.test(e.children[0]?.text ?? ""), n = /^(?:declare|typeset|local)$/.test(e.children[0]?.text ?? ""), r = e.children.some((s) => s !== void 0 && /^[-+][A-Za-z]*[fF]/.test(M(s.text))), i;
    for (let [s, o] of e.children.entries()) {
      if (!o) continue;
      if (s > 1 && i !== void 0 && o.type !== "variable_assignment" && o.startIndex === i.endIndex) return { kind: "too-complex", reason: `${e.children[0]?.text ?? e.type} operand '${i.text}${o.text}' is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`, differential: true };
      if (s > 0 && o.type === "ansi_c_string" && /^\$'[-+]/.test(o.text)) return { kind: "too-complex", reason: `${e.children[0]?.text ?? e.type} flag ${o.text} \u2014 a $'\u2026' flag word the shell decodes`, differential: true };
      if (s > 0 && !/^[-+]/.test(M(o.text))) {
        let l = o.type === "word" || o.type === "raw_string" || o.type === "concatenation" || o.type === "variable_name" || o.type === "number";
        if (o.type === "ansi_c_string" && (t || e.children[0]?.text === "readonly")) return { kind: "too-complex", reason: `${e.children[0]?.text ?? e.type} operand ${o.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`, differential: true };
        if (n) {
          if (!Ne(o, r)) return { kind: "too-complex", reason: `${e.children[0]?.text ?? "declare"} operand '${o.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`, differential: true };
          i = o;
          continue;
        }
        let u = ee(o.text), f = /^['"]?[A-Za-z_]\w*=/.test(o.text), g = l ? t && u.includes("[") || (f ? u.slice(1).includes("\\") : o.text.slice(1).includes("\\")) : o.type === "string" && (f ? u.includes("\\") : o.text.includes("\\")), _ = o.type === "variable_assignment" && /['\\]/.test(ee(o.text)), h = l && t && /^['"]?\$/.test(u) && /[[`'"]/.test(o.text);
        if (g || _ || h) return { kind: "too-complex", reason: `${e.children[0]?.text ?? e.type} operand '${o.text}' carries a subscript or escape the shell evaluates \u2014 the parser read it as literal text`, differential: true };
        if (o.type === "variable_name" ? !(ie.test(o.text) || r && Te.test(o.text)) : (o.type === "word" || o.type === "concatenation" || o.type === "raw_string" || o.type === "string" && ee(o.text) !== o.text) && !It(o.text, r, e.children[0]?.text === "readonly")) return { kind: "too-complex", reason: `${e.children[0]?.text ?? e.type} operand '${o.text}' is not a plain variable name \u2014 the shell expands or matches it before assigning`, differential: true };
      }
      i = o;
    }
  }
  if (e.type === "command") {
    let t = e.children.find((i) => i !== void 0 && i.type === "command_name"), n = t === void 0 ? -1 : e.children.indexOf(t), r = e.children.filter((i, s) => i !== void 0 && s > n && i.type !== "command_name");
    if (t !== void 0) {
      if (Pe(t) && r.some((f) => !/^[-+]/.test(M(f.text)))) return { kind: "too-complex", reason: `command head ${t.text} \u2014 a $'\u2026' word the shell decodes before looking the command up`, differential: true };
      let i = Ve(t.text), s = r, o = false, l = false;
      while (rbs.test(i) && s.length > 0) {
        o = true;
        while (s.length > 0 && /^-/.test(M(s[0].text))) {
          let f = M(s[0].text);
          if (i === "command" && /^-[pP]*[vV]/.test(f)) l = true;
          s = s.slice(i === "exec" && /^-[cl]*a$/.test(f) ? 2 : 1);
        }
        if (!l && s.length > 0 && Pe(s[0]) && s.slice(1).some((f) => !/^[-+]/.test(M(f.text)))) return { kind: "too-complex", reason: `command head ${s[0].text} after ${i} \u2014 a $'\u2026' word the shell decodes before looking the command up`, differential: true };
        i = s.length > 0 ? Ve(s[0].text) : "", s = s.slice(1);
      }
      let u = o || Ve(t.text) !== t.text || rbo.test(t.text);
      if (!l && u && rbo.test(i)) {
        let f = i === "integer" || i === "float", g = { ...e, children: [t, ...f ? [{ ...t, text: "-i" }] : [], ...s] }, _ = s.map((p) => M(p.text)).filter((p) => /^[-+]/.test(p)).join(""), h = f || /^(?:declare|typeset|local|private)$/.test(i) && cr.test(_) || /^(?:export|readonly)$/.test(i) && fr.test(_), d = s.filter((p) => !/^[-+]/.test(M(p.text))), c = /[fF]/.test(_), x = h && !ne(g) || s.some((p) => p.type === "ansi_c_string" && /^\$'[-+]/.test(p.text));
        if (/^(?:declare|typeset|local|integer|float|private)$/.test(i)) x ||= d.some((p) => !Ne(p, c));
        else x ||= d.some((p) => {
          if (p.type === "ansi_c_string") return true;
          let m = ee(p.text);
          return /[\\'"]/.test(m.replace(/^['"]/, "").replace(/['"]$/, "")) || i !== "readonly" && m.includes("[") || /^['"]?\$/.test(m) || (p.type === "word" || p.type === "concatenation" || p.type === "raw_string" || p.type === "string" && ee(p.text) !== p.text) && !It(p.text, c, i === "readonly");
        });
        if (x) return { kind: "too-complex", reason: `${i} spelled '${o ? `${t.text} \u2026` : t.text}' with an operand the shell would evaluate \u2014 the parser did not read this as a declaration`, differential: true };
      }
    }
  }
  for (let t of e.children) {
    if (!t) continue;
    let n = Jt(t);
    if (n) return n;
  }
  return null;
}
var rbs = /^(?:builtin|command|exec|time|coproc|noglob|nocorrect|-)$/, rbo = /^(?:declare|typeset|local|export|readonly|unset|integer|float|private)$/, ft = /^[-+].*[nialuAEFLRZ]/, cr = /[nialuAEFLRZ]/, ur = /^[-+].*[aAiluEFLRZ]/, fr = /[aAiluEFLRZ]/, Ge = { assigning: /^[-+][rtx]+$/, listing: /^(?:-[fgprtxU]+|\+[grtx]+)$/ }, dr = /* @__PURE__ */ new Map([["declare", Ge], ["typeset", Ge], ["local", { assigning: Ge.assigning, listing: /^-[fprtx]+$/ }], ["export", { listing: /^-[aAfnp]+$/ }], ["readonly", { listing: /^-[aAfpx]+$/ }]]);
function en(e, t) {
  let n = dr.get(e), r = /* @__PURE__ */ new Set(), i = e === "readonly", s = false, o;
  for (let l of t) if (!/^[-+]/.test(l)) {
    if (o !== void 0 && l.includes("=")) return `${e} ${o} with an assignment \u2014 not every supported bash and zsh assigns under that option, so the value cannot be statically verified`;
    let u = l.replace(/\+?=.*/s, "");
    if (i && l.includes("=") && r.has(u)) return `${e} names '${$G(u)}' twice \u2014 the first makes it read-only, so bash does not carry out the second`;
    r.add(u), s = true;
  } else if (s) return `${e} word '${$G(l)}' comes after the options \u2014 the shell reads it as a name, which it cannot be, and bash and zsh go on from that error differently`;
  else if (l === "--") s = true;
  else if (n?.assigning?.test(l)) i ||= /^-.*r/.test(l);
  else if (n?.listing.test(l)) o ??= l;
  else return `${e} option '${$G(l)}' is not one bash and zsh are both known to accept \u2014 a shell that rejects it assigns nothing, so the names it declares cannot be statically verified`;
  return null;
}
function tn(e, t) {
  let n = t.filter((r) => !/^[-+]/.test(r));
  if (e === "local" && n.some((r) => r.includes("="))) return "'local' outside a function \u2014 bash refuses that and assigns nothing, so the value cannot be statically verified";
  if ((e === "export" || e === "readonly") && n.length > 0 && t.some(Fe)) return `'${e}' gives a name the array attribute \u2014 zsh empties a value it held and bash keeps it, so it cannot be statically verified`;
  return null;
}
var ie = /^[A-Za-z_][A-Za-z0-9_]*$/, Te = /^[A-Za-z_][\w.:-]*$/;
function It(e, t, n = false) {
  let r = ee(e), i = e[0];
  if (i === "'" || i === '"') {
    if (r = r.slice(1), r.endsWith(i)) r = r.slice(0, -1);
  } else if (/^\\[A-Za-z_]/.test(r)) r = r.slice(1);
  if (n && (i === "'" || i === '"')) {
    let s = e.indexOf("["), o = e.indexOf(i, 1);
    if (s > 0 && o > s) r = r.replace(/\[[\s\S]*$/, "");
  }
  return r = r.replace(/\+$/, ""), ie.test(r) || t && Te.test(r);
}
function Pe(e) {
  return e.type === "ansi_c_string" || e.children.some((t) => t !== void 0 && Pe(t));
}
function Ve(e) {
  return e.replace(/\$(['"])/g, "$1").replace(/["'\\]/g, "");
}
var pr = /* @__PURE__ */ new Set(["command_substitution", "process_substitution", "arithmetic_expansion", "expansion", "simple_expansion"]), tt = "$_";
function hr(e) {
  let t = [], n = (o) => {
    for (let l of o.children) {
      if (!l) continue;
      if (pr.has(l.type)) t.push([l.startIndex - e.startIndex, l.endIndex - e.startIndex]);
      else n(l);
    }
  };
  if (n(e), t.length === 0) return e.text;
  t.sort((o, l) => o[0] - l[0]);
  let r = Buffer.from(e.text, "utf8"), i = "", s = 0;
  for (let [o, l] of t) {
    if (o < s || l > r.length) return e.text;
    i += r.subarray(s, o).toString("utf8") + tt, s = l;
  }
  return i + r.subarray(s).toString("utf8");
}
function nn(e) {
  if (e.type === "expansion" && e.text.replace(/\$\(\(?|[<>]\(/g, "").includes("(")) return true;
  return e.children.some((t) => t !== void 0 && nn(t));
}
function Ne(e, t) {
  if (e.type === "number" || /^\d+$/.test(e.text)) return true;
  let n = hr(e);
  if (e.type !== "raw_string" && e.type !== "string" && lBn.test(qt(n))) return false;
  let r = /^['"]/.test(n) ? n.slice(1) : n, i = r.indexOf("="), s = (i < 0 ? r : r.slice(0, i)).replace(/\+$/, "");
  if (!(t ? /^[A-Za-z_][\w.:-]*['"]?$/ : /^[A-Za-z_]\w*['"]?$/).test(s)) return false;
  if (i < 0) return true;
  if (e.children.find((f, g) => f !== void 0 && g >= 2 && f.type !== "=" && f.type !== "+=")?.type === "array") return true;
  if (Pe(e) || /\$'./.test(n)) return false;
  if (nn(e)) return false;
  let u = r.slice(i + 1);
  for (; ; ) if (/^[\\'"]/.test(u)) u = u.slice(1);
  else if (/^\$['"]/.test(u)) u = u.slice(2);
  else if (u.startsWith(tt)) u = u.slice(tt.length);
  else break;
  return !u.startsWith("(");
}
function ee(e) {
  let t = 0, n = null, r = e[0] === "'" || e[0] === '"' ? e[0] : null;
  for (let i = r === null ? 0 : 1; i < e.length; i += 1) {
    let s = e[i];
    if (n !== null) {
      if (s === n) n = null;
    } else if ((s === "'" || s === '"') && s !== r) n = s;
    else if (s === "[") t += 1;
    else if (s === "]" && t > 0) t -= 1;
    else if (s === "=" && t === 0) return e.slice(0, i);
  }
  return e;
}
function rn(e) {
  return e.children.some((t) => t !== void 0 && (t.type === "comment" || rn(t)));
}
function mr(e, t, n) {
  let r = t;
  while (r < n) {
    let i = e[r];
    if (i === 32 || i === 9) r += 1;
    else if (i === 92 && e[r + 1] === 10) r += 2;
    else return false;
  }
  return true;
}
function ne(e) {
  let t = e.children.map((i) => i === void 0 ? "" : M(i.text)).filter((i) => /^[-+]/.test(i)).join(""), r = /[iEF]/.test(t) ? /^[A-Za-z_][\w.-]*=(?:(['"]?)[0-9+\-*\/% ().]*\1|\([0-9+\-*\/% ().\s]*\))$/ : /^[A-Za-z_][\w.-]*(?:\+?=(?:(['"]?)[\w.\/ -]*\1|\([\w\s.\/-]*\)))?$/;
  return e.children.every((i, s) => {
    if (!i || s === 0 || /^[-+]/.test(M(i.text))) return true;
    return r.test(i.text);
  });
}
function M(e) {
  let t = /^\$?(['"])([-+][^'"]*)\1$/.exec(e);
  if (t) return t[2];
  return /^\\[-+]/.test(e) ? e.slice(1) : e;
}
var sn = /* @__PURE__ */ new Set(["for_statement", "while_statement"]), gr = 5;
function Ot(e) {
  return sn.has(e.type) && (0, import_chunk_r6r2wdsw.Np)();
}
function xr(e) {
  let t = obo(e);
  if (t) return t;
  let n = [], r = /* @__PURE__ */ new Map(), i = [], s = I(e, n, r, i, false, true);
  if (s) return s;
  let o = [...sn].some((u) => Ce(e, u)), l = o ? void 0 : n.at(-1);
  for (let u of v ? [] : n) {
    let [f = "", ...g] = u.argv, _ = $n(f, g) ?? (u === l ? null : tn(f, g));
    if (_ !== null) return { kind: "too-complex", reason: _, divergentShape: true, ...u.argvUnquotedGlob === void 0 && { nodeType: "declaration_command" } };
  }
  return { kind: "simple", commands: n, bareAssignmentNames: i, hasLoop: o };
}
function yr(e, t, n) {
  return !Buffer.from(e.text, "utf8").subarray(t.endIndex - e.startIndex, n.startIndex - e.startIndex).toString("utf8").replace(/\\\r?\n/g, "").includes(`
`);
}
var _r = /* @__PURE__ */ new Set(["command", "variable_assignment", "variable_assignments", "list", "pipeline", "redirected_statement", "negated_command", "declaration_command", "unset_command", "test_command", "subshell", "compound_statement", "if_statement", "while_statement", "for_statement", "case_statement", "function_definition", "ERROR"]), br = /* @__PURE__ */ new Set(["negated_command", "if_statement", "while_statement", "for_statement", "subshell"]);
function obo(e) {
  let t = null;
  for (let n of e.children) {
    if (!n) continue;
    if (_r.has(n.type)) {
      if (t !== null) {
        let i = n;
        while (ut.has(i.type)) {
          let s = i.children.find((o) => o != null);
          if (!s) break;
          i = s;
        }
        if (br.has(i.type) && yr(e, t, i)) return { kind: "too-complex", reason: i.type === "subshell" ? "`(\u2026)` group directly follows a statement or word on the same line \u2014 bash rejects the line, but zsh reads the glued `(\u2026)` as a glob-group word and expands what follows it" : "statement directly follows another statement on the same line \u2014 bash reads the text as one command (`!` and shell keywords are plain words after an assignment), not two statements", differential: true };
      }
      t = n;
    } else t = null;
    let r = obo(n);
    if (r) return r;
  }
  return null;
}
function I(e, t, n, r, i = false, s = false) {
  if (e.type === "command") {
    let o = Ir(e, [], t, n, r);
    if (o.kind !== "simple") return o;
    if (s) for (let l of o.commands) l.andChainOperand = true;
    return t.push(...o.commands), null;
  }
  if (e.type === "redirected_statement") return Er(e, t, n, r, i, s);
  if (e.type === "comment") return null;
  if (ut.has(e.type)) {
    let o = e.type === "pipeline", l = t.length, u = false;
    if (!o) {
      for (let d of e.children) if (d && (d.type === "||" || d.type === "&")) {
        u = true;
        break;
      }
    }
    let f = u ? new Map(n) : null, g = o ? new Map(n) : n, _ = null, h = s && (e.type === "program" ? (0, import_chunk_4smdap7r.U)(e.children, (d) => d && d.type !== "comment") === 1 : e.type === "list" && !e.children.some((d) => d && me.has(d.type) && d.type !== "&&"));
    for (let d of e.children) {
      if (!d) continue;
      if (me.has(d.type)) {
        if (ue ||= d.type === "&", d.type === "||" || d.type === "|" || d.type === "|&" || d.type === "&") if (d.type === "||") {
          if (_ ??= /* @__PURE__ */ new Set(), K === 0) for (let p of n.keys()) _.add(p);
          let x = f ?? n;
          g = new Map(x);
          for (let [p, m] of n) if (x.get(p) !== m) T(g, p);
          for (let p of x.keys()) if (!n.has(p)) T(g, p);
        } else g = new Map(f ?? n);
        else if (_ !== null) {
          for (let x of _) T(n, x);
          _ = null, g = n;
        }
        continue;
      }
      let c = I(d, t, g, r, e.type === "program", h);
      if (c) return c;
      if (_ !== null && K > 0) J(n, g);
    }
    if (_ !== null) for (let d of _) T(n, d);
    if (o) {
      if (J(n, g), t.length === l) te(t, e);
    }
    return null;
  }
  if (e.type === "negated_command") {
    let o = t.length;
    for (let l of e.children) {
      if (!l) continue;
      if (l.type === "!") continue;
      let u = I(l, t, n, r);
      if (u) return u;
    }
    if (t.length === o) te(t, e);
    return null;
  }
  if (e.type === "declaration_command") {
    let o = t.length, l = e.children.some((m) => m !== null && se(m)), u = (m, b) => {
      if (!l) return null;
      let y = n.get(m), w = o === 0 && !ei(b), k = y !== void 0 && !ei(y);
      return w || k ? ye(`'${m}' is assigned by a declaration carrying an expansion that can fail at runtime, which assigns nothing when it fails \u2014 its value cannot be statically verified`) : null;
    }, f = B, g = new Map(n), _ = false, h = false, d = false, c = [], x = -1;
    for (let m of e.children) {
      if (!m) continue;
      let b = m.startIndex === x;
      switch (x = m.endIndex, m.type) {
        case "export":
        case "local":
        case "readonly":
        case "declare":
        case "typeset":
          c.push(m.text);
          break;
        case "word":
        case "number":
        case "raw_string":
        case "string":
        case "concatenation": {
          if (b) return { kind: "too-complex", reason: `${c[0] ?? "declaration"} operand is split across adjacent quoted segments \u2014 the shell joins them into one word the analyzer cannot verify`, differential: true };
          let y = z(m, t, g, r);
          if (typeof y !== "string") return y;
          if (/^[+-].*m/.test(y)) return { kind: "too-complex", reason: `${c[0]} flag ${y} \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`, nodeType: "declaration_command" };
          if (c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "readonly") {
            if (/^[+-].*f/.test(y)) _ = true;
            if (/^[+-].*[uU]/.test(y)) h = true;
            if (_ && h) return { kind: "too-complex", reason: `${c[0]} with both -f and -u/-U flags \u2014 zsh marks a function for autoload (synonym of 'autoload'), creating a function from file contents at call time`, nodeType: "declaration_command" };
          }
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && ft.test(y)) return { kind: "too-complex", reason: `declare flag ${y} changes assignment semantics (nameref/integer/float/array/width-truncation/case-conversion)`, ...ne(e) ? { nodeType: "declaration_command" } : { differential: true } };
          if ((c[0] === "export" || c[0] === "readonly") && Fe(y) && !ne(e)) return { kind: "too-complex", reason: `${c[0]} flag ${y} with an operand bash would evaluate as a compound array assignment`, differential: true };
          if ((c[0] === "export" || c[0] === "readonly") && /^[+-].*[iluEFLRZ]/.test(y)) return { kind: "too-complex", reason: `${c[0]} flag ${y} \u2014 zsh bin_typeset mathevals (-i/-E/-F), width-truncates (-L/-R/-Z), or case-converts (-l/-u) the assigned value`, ...ne(e) ? { nodeType: "declaration_command" } : { differential: true } };
          if (/^[+-].*T/.test(y)) return { kind: "too-complex", reason: `${c[0]} -T creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable`, nodeType: "declaration_command" };
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && y[0] !== "-" && /^[^=]*\[/.test(y)) return { kind: "too-complex", reason: `${c[0]} positional '${y}' contains array subscript \u2014 zsh/bash evaluate $(cmd) in subscripts`, differential: true };
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !/^[-+]/.test(y) && !Ne(m, c.some((w) => /^[-+][A-Za-z]*[fF]/.test(w)))) return { kind: "too-complex", reason: `${c[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`, differential: true };
          if (y[0] !== "-") {
            let w = y.indexOf("=");
            if (w > 0) {
              let k = y.slice(0, w);
              if (/^[A-Za-z_][A-Za-z0-9_]*\+?$/.test(k)) {
                let A = k.endsWith("+");
                d ||= A;
                let R = A ? k.slice(0, -1) : k, P = u(R, y.slice(w + 1));
                if (P) return P;
                Ye(n, { name: R, value: y.slice(w + 1), isAppend: A }, o > 0), r.push(R);
              }
            }
          }
          c.push(y);
          break;
        }
        case "variable_assignment": {
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local") && !Ne(m, c.some((k) => /^[-+][A-Za-z]*[fF]/.test(k)))) return { kind: "too-complex", reason: `${c[0]} operand '${m.text}' is not a plain NAME with an inert value \u2014 the shell may re-parse it as a subscript, an expanded name or a compound assignment`, differential: true };
          let y = at(m, t, g, r);
          if ("kind" in y) return y;
          let w = u(y.name, y.value);
          if (w) return w;
          Ye(n, y, o > 0), d ||= y.isAppend, r.push(y.name), c.push(`${y.name}=${y.value}`);
          break;
        }
        case "variable_name": {
          let y = m.text;
          if ((c[0] === "declare" || c[0] === "typeset" || c[0] === "local" || c[0] === "export") && y[0] !== "-" && /^[^=]*\[/.test(y)) return { kind: "too-complex", reason: `${c[0]} positional '${y}' contains array subscript \u2014 backslash-escaped form de-escapes to [$(cmd)] at runtime`, differential: true };
          let w = c.some((k) => /^-[A-Za-z]*[fF]/.test(k));
          if (!ie.test(y) && !(w && Te.test(y))) return { kind: "too-complex", reason: `${c[0]} operand '${y}' is not a plain variable name \u2014 the shell may turn it into an assignment the parser did not see`, differential: true };
          c.push(y);
          break;
        }
        case "ansi_c_string":
          return { kind: "too-complex", reason: `${c[0] ?? "declaration"} operand ${m.text} \u2014 a $'\u2026' word the shell decodes, which may carry a subscript the parser cannot read`, differential: true };
        default:
          return E(m);
      }
    }
    let p = en(c[0] ?? "", c.slice(1));
    if (p !== null && !v) return { kind: "too-complex", reason: p, divergentShape: true, ...ne(e) && { nodeType: "declaration_command" } };
    return t.push({ argv: c, envVars: [], redirects: [], text: e.text, hasUnquotedGlob: A2e(e.text), carveOutMayDesyncQuoteScan: B !== f, ...d && { operandAppends: d } }), null;
  }
  if (e.type === "variable_assignment") {
    let o = t.length, l = at(e, t, n, r);
    if ("kind" in l) return l;
    if (qEr(l.name)) return { kind: "too-complex", reason: `${l.name} assignment alters command lookup/execution for subsequent commands`, nodeType: "variable_assignment" };
    if (Nn(l.name, l.value)) return { kind: "too-complex", reason: `${l.name} has integer attribute \u2014 assignment arith-evals RHS, which can execute subscript command substitution or abort/diverge at runtime`, nodeType: "variable_assignment" };
    if (Ye(n, l, o > 0), r.push(l.name), t.length === o && (se(e) || Pt.has(l.name))) te(t, e);
    return null;
  }
  if (e.type === "for_statement") {
    if (Ot(e)) return E(e);
    let o = Wt(e, t, n, r);
    if ("kind" in o) return o;
    let l = null, u = null, f = t.length, g = false;
    for (let d of e.children) {
      if (!d) continue;
      if (d.type === "variable_name") l = d.text;
      else if (d.type === "do_group") u = d;
      else if (d.type === "select") return { kind: "too-complex", reason: "select statement reads stdin into $REPLY; cannot statically model", nodeType: "for_statement" };
      else if (d.type === "for" || d.type === "in" || d.type === ";") continue;
      else if (d.type === "command_substitution") {
        let c = ht(d, t, n, r);
        if (c) return c;
      } else {
        let c = z(d, t, n, r);
        if (typeof c !== "string") return c;
        if (se(d)) g = true;
        else if ((A2e(d.text) || Ie(d)) && (0, import_chunk_ay36ksef.pDl)()) g = true;
      }
    }
    if (l === null || u === null) return E(e);
    if (l === "PS4" || l === "IFS" || Pt.has(l) || l === "BASH_ARGV0" || qEr(l) || gt.has(l) || Ke.has(l) || Rn.has(l)) return { kind: "too-complex", reason: `${l} as loop variable bypasses assignment validation`, nodeType: "for_statement" };
    let _ = n.get(l);
    if (_ !== void 0 && !ei(_)) return { kind: "too-complex", reason: `for-loop variable '${l}' would overwrite tracked literal ${JSON.stringify(_.slice(0, 40))}; post-loop value cannot be statically determined`, nodeType: "for_statement" };
    n.delete(l), r.push(l);
    let h = new Map(n);
    je(h, u);
    for (let d of o) T(h, d);
    h.delete(l);
    for (let d of u.children) {
      if (!d) continue;
      if (d.type === "do" || d.type === "done" || d.type === ";") continue;
      let c = I(d, t, h, r);
      if (c) return c;
    }
    if (J(n, h), g && t.length === f) te(t, e);
    return null;
  }
  if (e.type === "if_statement" || e.type === "while_statement") {
    if (Ot(e)) return E(e);
    let o = null, l = null;
    if (e.type === "while_statement") {
      let f = Wt(e, t, n, r);
      if ("kind" in f) return f;
      o = new Set(n.keys()), l = new Map(n), je(n, e);
      for (let g of f) T(n, g), T(l, g);
    }
    let u = false;
    for (let f of e.children) {
      if (!f) continue;
      if (f.type === "if" || f.type === "fi" || f.type === "else" || f.type === "elif" || f.type === "while" || f.type === "until" || f.type === ";") continue;
      if (f.type === "then") {
        u = true;
        continue;
      }
      if (f.type === "do_group") {
        let d = new Map(n);
        je(d, f);
        for (let c of f.children) {
          if (!c) continue;
          if (c.type === "do" || c.type === "done" || c.type === ";") continue;
          let x = I(c, t, d, r);
          if (x) return x;
        }
        J(n, d);
        continue;
      }
      if (f.type === "elif_clause" || f.type === "else_clause") {
        let d = new Map(n);
        for (let c of f.children) {
          if (!c) continue;
          if (c.type === "elif" || c.type === "else" || c.type === "then" || c.type === ";") continue;
          let x = I(c, t, d, r);
          if (x) return x;
        }
        J(n, d);
        continue;
      }
      let g = new Map(n), _ = t.length, h = I(f, t, g, r);
      if (h) return h;
      if (!u) {
        for (let [d, c] of g) {
          let x = (l ?? n).get(d);
          if (x !== void 0 && !ei(x) && c !== x) return { kind: "too-complex", reason: `'${d}' was tracked as literal '${x}' but condition may modify it (||/pipeline/unset/&&-short-circuit) \u2014 cannot prove downstream value`, nodeType: e.type };
          if (x?.includes(C) === true && c !== x) {
            n.set(d, x);
            continue;
          }
          n.set(d, c);
        }
        for (let d of n.keys()) if (!g.has(d)) {
          let c = (l ?? n).get(d);
          if (c !== void 0 && !ei(c)) return { kind: "too-complex", reason: `'${d}' was tracked as literal '${c}' but condition may unset it (&&-short-circuit) \u2014 cannot prove downstream value`, nodeType: e.type };
          T(n, d);
        }
        for (let d = _; d < t.length; d++) {
          let c = t[d];
          if (c?.argv[0] === "read" && !(0, import_chunk_ay36ksef.IOs)()) {
            for (let p of c.argv.slice(1)) if (!p.startsWith("-") && /^[A-Za-z_][A-Za-z0-9_]*$/.test(p)) {
              let m = n.get(p);
              if (m !== void 0 && !ei(m)) return { kind: "too-complex", reason: `'read ${p}' in condition may not execute (||/pipeline/subshell); cannot prove it overwrites tracked literal '${m}'`, nodeType: e.type };
              T(n, p);
            }
            let x = n.get("REPLY");
            if (x !== void 0 && !ei(x)) return { kind: "too-complex", reason: `'read' in condition may write stdin to REPLY; cannot prove it overwrites tracked literal '${x}'`, nodeType: e.type };
            T(n, "REPLY");
          }
        }
      } else J(n, g);
    }
    if (o !== null) {
      for (let f of [...n.keys()]) if (!o.has(f)) n.delete(f);
    }
    return null;
  }
  if (e.type === "subshell") {
    let o = new Map(n), l = t.length, u = false;
    for (let f of e.children) {
      if (!f) continue;
      if (f.type === "(" || f.type === ")") continue;
      if (f.type !== "comment") u = true;
      let g = I(f, t, o, r);
      if (g) return g;
    }
    if (u && t.length === l) te(t, e);
    return null;
  }
  if (e.type === "test_command") {
    let o = e.children.some((g) => g?.type === "[["), l = an(e, o);
    if (l) return l;
    let u = ["[["], f = B;
    for (let g of e.children) {
      if (!g) continue;
      if (g.type === "[[" || g.type === "]]" || g.type === "[" || g.type === "]") continue;
      let _ = ln(g, u, t, n, r, o);
      if (_) return _;
    }
    return t.push({ argv: u, envVars: [], redirects: [], text: e.text, hasUnquotedGlob: A2e(e.text), carveOutMayDesyncQuoteScan: B !== f }), null;
  }
  if (e.type === "unset_command") {
    let o = [], l = B, u = t.length > 0, f = false, g = false, _ = false;
    for (let h of e.children) {
      if (!h) continue;
      switch (h.type) {
        case "unset":
          o.push(h.text), _ = h.text === "unsetenv";
          break;
        case "variable_name":
          if (!ie.test(h.text) && !(f && Te.test(h.text))) return { kind: "too-complex", reason: `${o[0] ?? "unset"} operand '${h.text}' is not a plain variable name \u2014 the shell may expand or evaluate it`, differential: true };
          if (o.push(h.text), g = true, f || _) {
            let d = nt(n.get(h.text), `'${h.text}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`, "unset_command");
            if (d !== null) return d;
            break;
          }
          if (swe(h.text)) return { kind: "too-complex", reason: `'unset' targets shell variable ${h.text} (exec-influencing / integer-attr / IFS / PS4)`, nodeType: "unset_command" };
          rt(n, h.text, u);
          break;
        case "word": {
          let d = z(h, t, n, r);
          if (typeof d !== "string") return d;
          if (d.startsWith("-")) {
            if (g) return E(h);
            if (d !== "-f" && d !== "-v") return E(h);
            if (d === "-f") f = true;
            o.push(d);
            break;
          }
          if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(d)) return E(h);
          if (o.push(d), g = true, f || _) {
            let c = nt(n.get(d), `'${d}' no longer has a statically known value at this unset \u2014 cannot verify what the command leaves behind`, "unset_command");
            if (c !== null) return c;
            break;
          }
          if (swe(d)) return { kind: "too-complex", reason: `'unset' targets shell variable ${d} (exec-influencing / integer-attr / IFS / PS4)`, nodeType: "unset_command" };
          rt(n, d, u);
          break;
        }
        case "ansi_c_string":
        case "raw_string":
        case "string":
        case "concatenation":
          if (/\[/.test(h.text) || h.type === "ansi_c_string") return { kind: "too-complex", reason: `${o[0] ?? "unset"} operand ${h.text} carries a subscript \u2014 bash and zsh evaluate $(cmd) inside it`, differential: true };
          return E(h);
        default:
          return E(h);
      }
    }
    return t.push({ argv: o, envVars: [], redirects: [], text: e.text, hasUnquotedGlob: A2e(e.text), carveOutMayDesyncQuoteScan: B !== l }), null;
  }
  return E(e);
}
var on = /* @__PURE__ */ new Set(["unary_expression", "binary_expression", "negated_expression", "parenthesized_expression"]);
function Ct(e, t) {
  let n = 0;
  while (n < e.length) {
    let r = e[n];
    if (r === " " || r === "	") {
      n++;
      continue;
    }
    if (r === "\\" && e[n + 1] === `
`) {
      n += 2;
      continue;
    }
    if (t && r === `
`) {
      n++;
      continue;
    }
    if (t && r === "#") {
      n++;
      while (n < e.length && e[n] !== `
`) n++;
      continue;
    }
    return false;
  }
  return true;
}
function an(e, t) {
  let n = Buffer.from(e.text, "utf8"), r = e.startIndex;
  for (let i of e.children) {
    if (!i) continue;
    if (i.startIndex > r) {
      let s = n.subarray(r - e.startIndex, i.startIndex - e.startIndex).toString("utf8");
      if (!Ct(s, t)) return { kind: "too-complex", reason: "Test command has unparsed bytes between children \u2014 parser dropped content that shell will see" };
    }
    if (r = Math.max(r, i.endIndex), on.has(i.type)) {
      let s = an(i, t);
      if (s) return s;
    }
  }
  if (r < e.endIndex) {
    let i = n.subarray(r - e.startIndex).toString("utf8");
    if (!Ct(i, t)) return { kind: "too-complex", reason: "Test command has unparsed bytes after its last child \u2014 parser dropped content that shell will see" };
  }
  return null;
}
function kr(e) {
  let t = false, n = false, r = false, i = 0, s;
  for (let o = 0; o < e.length; o++) {
    let l = e[o];
    if (!t && l === "\\") {
      o++;
      continue;
    }
    if (!n && l === "'") {
      t = !t;
      continue;
    }
    if (!t && l === '"') {
      n = !n;
      continue;
    }
    if (!t && !n) {
      if (l === "=" && e[o + 1] === "(" && (r || o === 0 || s === "|")) return true;
      if (l === "(") i++;
      else if (l === ")") i = Math.max(0, i - 1);
      else if (i === 0 && (l === "|" || l === "&") && s === l) r = true;
      s = l;
    }
  }
  return false;
}
function qe(e) {
  let t = e.replace(/\[(?::[a-zA-Z]+:|=[A-Za-z0-9-]*=|\.[A-Za-z0-9-]*\.|[!^]?)\]\](?!\])/g, "\0"), n = /[A-Za-z0-9_]/, r = t.indexOf("]]");
  while (r !== -1) {
    let i = r > 0 ? t[r - 1] : "", s = r + 2 < t.length ? t[r + 2] : "";
    if (!(n.test(i) && n.test(s))) return true;
    r = t.indexOf("]]", r + 1);
  }
  return false;
}
var Rr = /^([\w\u0080-\uffff]*|[-?*@!#])(\[|:[a-zA-Z&])/, wr = /^([\w\u0080-\uffff]*|[-?*@!#$])(\[|:[a-zA-Z&])/;
function ln(e, t, n, r, i, s) {
  if (on.has(e.type)) {
    for (let o = 0; o < e.children.length; o++) {
      let l = e.children[o];
      if (!l) continue;
      if ((l.type === "simple_expansion" || l.type === "expansion") && (e.children[o + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[o + 1]?.text ?? "") || l.children.some((f) => f?.type === "special_variable_name") && wr.test(e.children[o + 1]?.text ?? ""))) return { kind: "too-complex", reason: "zsh $name[expr] / $name:mod in [[ ]] operand \u2014 recursive eval", differential: true };
      if (s && l.type === "!" && e.children[o + 1]?.startIndex === l.endIndex) return { kind: "too-complex", reason: "zsh reads !( in [[ ]] as part of a word", differential: true };
      let u = ln(l, t, n, r, i, s);
      if (u) return u;
    }
    return null;
  }
  switch (e.type) {
    case "test_operator":
    case "!":
    case "(":
    case ")":
    case "&&":
    case "||":
    case "==":
    case "=":
    case "!=":
    case "<":
    case ">":
    case "=~":
      return t.push(e.text), null;
    case "regex":
    case "extglob_pattern":
      if (/\$([({[\w#?!*@$'"+~^=-]|[\u0080-\uffff])|`|[<>]\(/.test(e.text)) return { kind: "too-complex", reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains expansion / command / process substitution`, differential: true };
      if (e.text.startsWith("=(")) return { kind: "too-complex", reason: `[[ ]] ${e.type === "extglob_pattern" ? "pattern" : e.type} contains zsh =(CMD) process substitution`, differential: true };
      if (e.type === "regex" && kr(e.text)) return { kind: "too-complex", reason: `[[ ]] ${e.type} contains zsh =(CMD) process substitution`, differential: true };
      if (e.type === "extglob_pattern") {
        let o = e.text, l = 0;
        while (l < o.length) {
          if (o[l] === "\\" && l + 1 < o.length) {
            l += 2;
            continue;
          }
          if (o[l] === "&") return { kind: "too-complex", reason: "[[ ]] pattern contains unquoted & (zsh splits the word at & at any depth)", differential: true };
          l++;
        }
      }
      if (e.type === "regex") {
        let o = e.text, l = 0, u = 0;
        while (u < o.length) {
          let f = o[u];
          if (f === "\\" && u + 1 < o.length) {
            u += 2;
            continue;
          }
          if (l === 0 && f === "|" && o[u + 1] === f) return { kind: "too-complex", reason: "[[ ]] regex contains glued || (zsh splits it as a cond operator)", differential: true };
          if (f === "&") return { kind: "too-complex", reason: "[[ ]] regex contains unquoted & (zsh splits the word at & at any depth)", differential: true };
          if (f === '"' || f === "'") {
            let g = f;
            u++;
            while (u < o.length && o[u] !== g) {
              if (g === '"' && o[u] === "\\" && u + 1 < o.length) u++;
              u++;
            }
            if (u < o.length) u++;
            continue;
          }
          if (f === "(") l++;
          else if (f === ")") {
            if (l--, l < 0) return { kind: "too-complex", reason: "[[ ]] regex has unbalanced parentheses (parser desync)", differential: true };
          }
          u++;
        }
        if (l !== 0) return { kind: "too-complex", reason: "[[ ]] regex has unbalanced parentheses (parser desync)", differential: true };
      }
      if (e.text.includes("&&")) return { kind: "too-complex", reason: "[[ ]] pattern leaf contains `&&` \u2014 shell cond-lexer divergence (zsh splits the word there)", differential: true };
      if (qe(e.text)) return { kind: "too-complex", reason: "[[ ]] pattern leaf contains a potential standalone `]]` closer \u2014 shell cond-lexer divergence (zsh may close the conditional early)", differential: true };
      return t.push(e.text), null;
    case "test_rhs_missing":
      return { kind: "too-complex", reason: "Test command comparison is missing its right-hand side \u2014 parser dropped consumed bytes" };
    default: {
      let o = z(e, n, r, i);
      if (typeof o !== "string") {
        if (s && o.kind === "too-complex") {
          let { nodeType: l, ...u } = o;
          return { ...u, differential: true };
        }
        return o;
      }
      if (s && (qe(o) || qe(e.text)) || /]].*[;\n&|<>]/s.test(o)) return { kind: "too-complex", reason: s ? "[[ ]] quoted operand contains `]]` closer or `]]`+separator bytes \u2014 possible parser quote-state desync" : "test command quoted operand contains `]]`+separator bytes \u2014 possible parser quote-state desync", differential: true };
      return t.push(o), null;
    }
  }
}
function cn(e) {
  let t = null;
  for (let n of e.children) {
    if (!n || n.type === "!" || n.type === "comment" || me.has(n.type)) continue;
    t = n;
  }
  if (!t) return null;
  if (t.type === "list" || t.type === "negated_command") return cn(t);
  if (!Vt.has(t.type) && !jn.has(t.type)) return t;
  return null;
}
function T(e, t) {
  if (e.get(t)?.includes(C)) return;
  e.set(t, O);
}
var ge = `${C}\0`;
function xe(e) {
  return v && e.startsWith(ge) ? e.slice(ge.length) : e;
}
function nt(e, t, n) {
  if (e === void 0) return null;
  if (!ei(xe(e))) return null;
  return !v && e.includes(C) ? { kind: "too-complex", reason: t, nodeType: n, divergentShape: true } : { kind: "too-complex", reason: t, nodeType: n };
}
function rt(e, t, n) {
  if (he.add(t), n && v) V = true;
  e.set(t, !n ? "" : v ? ge : C);
}
function un(e, t) {
  for (let [n, r] of e) if (t.get(n) !== r) {
    if (!v && W.get(n) === r) q = true;
    V ||= v, e.set(n, !v ? C : r.includes(C) ? r : ge + r);
  }
  for (let n of t.keys()) if (!e.has(n)) e.set(n, C);
}
function Er(e, t, n, r, i, s) {
  let o = [], l = null, u = [], f = [];
  for (let p of e.children) {
    if (!p) continue;
    if (p.type === "file_redirect") u.push(p);
    else if (p.type === "heredoc_redirect") f.push(p);
    else if (Vt.has(p.type)) {
      if (p.type === "list" || p.type === "negated_command") {
        let m = cn(p);
        if (m) return E(m);
      }
      l = p;
    } else return E(p);
  }
  if (!l) {
    for (let p of u) {
      let m = ve(p, t, n, r);
      if ("kind" in m) return m;
      o.push(m);
    }
    for (let p of f) {
      let m = st(p, n);
      if (m) return m;
    }
    return t.push({ argv: [], envVars: [], redirects: o, text: e.text, hasUnquotedGlob: A2e(e.text) }), null;
  }
  let g = t.length, _ = re && i && l.type === "command" && u.length === 0 && f.length === 1 ? f[0]?.children.find((p) => p?.type === "pipeline") : void 0, h, d = false;
  if (l.type === "list") {
    let p = l.children;
    if (p.length === 3 && p[0] && p[1]?.type === "&&" && p[2]) {
      let m = I(p[0], t, n, r, false, s);
      if (m) return m;
      h = new Map(n), d = true;
      let b = I(p[2], t, n, r, false, s);
      if (b) return b;
    } else {
      let m = I(l, t, n, r, false, s);
      if (m) return m;
      h = n;
    }
  } else if (ut.has(l.type)) {
    let p = I(l, t, n, r, false, s);
    if (p) return p;
    h = n;
  } else {
    h = new Map(n), d = true;
    let p = I(l, t, _ ? new Map(n) : n, r, false, s && !_);
    if (p) return p;
  }
  if (d) un(n, h);
  let c = t.length > g ? t.at(-1) : void 0, x = c?.envVars[0]?.name;
  if (x !== void 0 && u.some((p) => se(p))) {
    let p = Se(x);
    if (p) return p;
  }
  for (let p of u) {
    let m = ve(p, t, h, r);
    if ("kind" in m) return m;
    o.push(m);
  }
  if (c) {
    let p = bn(u, c, o, t, h, r);
    if (p) return p;
  }
  for (let p of f) {
    let m = st(p, h, _);
    if (m) return m;
  }
  if (_) {
    let p = I(_, t, n, r);
    if (p) return p;
  }
  if (f.length > 0) for (let p = g; p < t.length; p++) {
    let m = t[p];
    if (m) m.argvSourceLiteral = false;
  }
  if (o.length > 0) if (t.length > g) {
    let p = t.at(-1);
    if (p) p.redirects.push(...o);
  } else t.push({ argv: [], envVars: [], redirects: o, text: e.text, hasUnquotedGlob: A2e(e.text) });
  return null;
}
function fn(e) {
  {
    let r = e.startIndex;
    for (let i of e.children) {
      if (!i) continue;
      if (i.startIndex > r) {
        let s = Buffer.from(e.text, "utf8").subarray(r - e.startIndex, i.startIndex - e.startIndex).toString("utf8");
        if (!/^(?:[ \t]|\\\n)*$/.test(s)) return { kind: "too-complex", reason: "Redirect has unparsed bytes between children \u2014 parser dropped content that shell will see" };
      }
      r = i.endIndex;
    }
    if (r < e.endIndex) {
      let i = Buffer.from(e.text, "utf8").subarray(r - e.startIndex).toString("utf8");
      if (!/^(?:[ \t]|\\\n)*$/.test(i)) return { kind: "too-complex", reason: "Redirect has unparsed trailing bytes \u2014 parser dropped content that shell will see" };
    }
  }
  let t = null, n = 0;
  for (let r of e.children) {
    if (!r) continue;
    if (r.type === "variable_name") return { kind: "too-complex", reason: `Redirect uses ${r.text} fd-variable assignment \u2014 modifies shell variable as side effect` };
    if (r.type === "file_descriptor") continue;
    if (r.type === ">&-" || r.type === "<&-") {
      t = r.type;
      continue;
    }
    if (r.type in Xe) {
      t = r.type;
      continue;
    }
    if ((t === ">&" || t === "<&") && r.text.startsWith("-")) return { kind: "too-complex", reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument" };
    if (t === ">&-" || t === "<&-") return { kind: "too-complex", reason: "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument" };
    n++, t = null;
  }
  if (n > 1) return { kind: "too-complex", reason: "Redirect has multiple targets \u2014 post-redirect args swallowed" };
  return null;
}
var dn = /* @__PURE__ */ new Set(["heredoc_start", "heredoc_body", "<<", "<<-", "heredoc_end", "file_descriptor"]), pn = /* @__PURE__ */ new Set(["file_redirect", "pipeline"]), Sr = /^\{(?:\w|[^\x00-\x7F])+(\[.*\])?\}$/su;
function dt(e) {
  let t = /^\{((?:\w|[^\x00-\x7F])+)/u.exec(e)?.[1];
  if (t === void 0) return "{\u2026}";
  let n = /^\w{1,64}$/.test(t) ? t : "\u2026";
  return e[t.length + 1] === "[" ? `{${n}[\u2026]}` : `{${n}}`;
}
function hn(e, t) {
  let n = t[e.startIndex] === 123 ? Sr.exec(e.text) : null;
  if (n) {
    let r = e.endIndex, i = false;
    for (; ; ) {
      let u = t[r];
      if (u === 32 || u === 9) i = true, r++;
      else if (u === 92 && t[r + 1] === 10) r += 2;
      else break;
    }
    let s = t[r], o = t[r + 1];
    if (((s === 62 || s === 60) && o !== 40 || s === 38 && o === 62) && !(i && n[1] !== void 0)) return e.text;
  }
  for (let r of e.children) if (r) {
    let i = hn(r, t);
    if (i !== null) return i;
  }
  return null;
}
function mn(e) {
  if (e.type === "file_redirect") {
    let t = fn(e);
    if (t) return t;
  }
  if (e.type === "herestring_redirect" || e.type === "heredoc_redirect") {
    for (let t of e.children) if (t?.type === "variable_name") return { kind: "too-complex", reason: `Redirect uses ${dt(t.text)} fd-variable assignment \u2014 modifies shell variable as side effect` };
    if (e.type === "heredoc_redirect") {
      for (let t of e.children) if (t && !dn.has(t.type) && !pn.has(t.type)) return { kind: "too-complex", reason: "Text after the heredoc start on the same line cannot be statically analyzed" };
    }
  }
  for (let t of e.children) if (t) {
    let n = mn(t);
    if (n) return n;
  }
  return null;
}
function ve(e, t, n, r) {
  let i = D, s = $e, o = null, l = null, u;
  {
    let f = fn(e);
    if (f) return f;
  }
  for (let f of e.children) {
    if (!f) continue;
    if (f.type === "file_descriptor") u = Number(f.text);
    else if (f.type === "variable_name") return { kind: "too-complex", reason: `Redirect uses ${f.text} fd-variable assignment \u2014 modifies shell variable as side effect` };
    else if (f.type in Xe) o = Xe[f.type] ?? null;
    else if (f.type === ">&-" || f.type === "<&-") {
      if (e.children.some((g) => g !== f && g?.type !== "file_descriptor")) return { kind: "too-complex", reason: "Close-fd redirect is followed by a word \u2014 bash passes it to the command as a hidden argument" };
      return E(f);
    } else if (l !== null) return { kind: "too-complex", reason: "Redirect has multiple targets \u2014 post-redirect args swallowed" };
    else if ((o === ">&" || o === "<&") && f.text.startsWith("-")) return { kind: "too-complex", reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument" };
    else if (f.type === "word" || f.type === "number") {
      if (f.children.length > 0) return E(f);
      if (lBn.test(f.text)) return E(f);
      if (Qe.test(f.text)) return E(f);
      if (Je.test(f.text)) return E(f);
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text)) return E(f);
      l = f.text.replace(/\\([\s\S])/g, (g, _) => _ === `
` ? "" : _);
    } else if (f.type === "raw_string") l = wn(f.text);
    else if (f.type === "string") {
      let g = kn(f, t, n, r);
      if (typeof g !== "string") return g;
      l = g;
    } else if (f.type === "concatenation") {
      let g = z(f, t, n, r);
      if (typeof g !== "string") return g;
      if (/(?:^|[^\\])(?:\\\\)*[`$]/.test(f.text)) return { kind: "too-complex", reason: "Redirect target concatenation contains $/` \u2014 unanalyzable gap or substitution", nodeType: "concatenation" };
      l = g;
    } else return E(f);
  }
  if (!o || l === null) return { kind: "too-complex", reason: "Unrecognized redirect shape" };
  if (ei(l)) return { kind: "too-complex", reason: "Redirect target contains $(cmd) output \u2014 path is runtime-determined", nodeType: e.type };
  if (l.includes(`
`)) return { kind: "too-complex", reason: "Redirect target contains newline \u2014 potential path traversal", nodeType: e.type };
  if (l.startsWith("!")) return { kind: "too-complex", reason: "Redirect target starts with ! \u2014 zsh clobber or history expansion", nodeType: e.type };
  if (l.startsWith("=")) return { kind: "too-complex", reason: "Redirect target starts with = \u2014 zsh expands to PATH binary", nodeType: e.type };
  if ((o === ">&" || o === "<&") && l.startsWith("-")) return { kind: "too-complex", reason: "Redirect target after >& or <& starts with - \u2014 bash treats the dash as close-fd and passes the rest to the command as a hidden argument" };
  if (o === ">&" && !/^[A-Za-z0-9./_-]+$/.test(l)) return { kind: "too-complex", reason: "bash `>&` applies a second word-expansion pass to its target \u2014 path cannot be statically validated", nodeType: e.type };
  return { op: o, target: l, fd: u, targetSourceLiteral: D === i && $e === s };
}
var re = false, v = false, V = false, ce = 0, gn = /* @__PURE__ */ new WeakMap(), H, j = 0, Y, W = /* @__PURE__ */ new Map(), q = false, Z = false, ue = false, ae = false, fe = false, de = 0, pe = false, X = null, K = 0, he = /* @__PURE__ */ new Set();
function ye(e) {
  return v ? null : { kind: "too-complex", reason: e, divergentShape: true };
}
function Se(e) {
  return ye(`'${e}' is set for one command that carries an expansion which can fail at runtime \u2014 whether the assignment stands for later commands cannot be statically verified`);
}
function Ar() {
  return Y;
}
function $r() {
  return j;
}
var Tr = /`|\\[$`\\\n]/, Lt = ie.source.slice(1, -1), Pr = new RegExp(`\\$(?:${Lt}(?![A-Za-z0-9_\\u0080-\\uffff])|\\{${Lt}\\})(?!\\[|:[A-Za-z&])`, "g");
function st(e, t, n) {
  let r = null, i = null, s = null, o = false;
  for (let u of e.children) {
    if (!u) continue;
    if (dn.has(u.type)) {
      if (u.type === "heredoc_start") r = u.text;
      else if (u.type === "heredoc_body") s = u;
      else if (u.type === "<<-") o = true;
      else if (u.type === "heredoc_end") i = u.text;
    } else if (u === n && u.children.at(-1)?.type === "command" && u.children.every((f) => f?.type === "|" || f?.type === "command" && !f.children.some((g) => g?.type.endsWith("_redirect")))) ;
    else if (pn.has(u.type)) {
      let f = E(u);
      return f.kind === "too-complex" ? { ...f, afterHeredocDelimiter: true } : f;
    } else return { kind: "too-complex", reason: "Text after the heredoc start on the same line cannot be statically analyzed" };
  }
  if (s === null) return { kind: "too-complex", reason: "Heredoc body was not scanned by the parser", nodeType: "heredoc_redirect" };
  if (n) {
    let u = Buffer.from(e.text, "utf8").subarray(0, s.startIndex - e.startIndex).toString("utf8"), f = e.children.slice(0, e.children.indexOf(s)).map((g) => (g === n ? "|" : "") + (g?.text ?? "")).join("");
    if (u.indexOf(`
`) !== u.length - 1 || u.includes("\\") || u.replace(/[ \t\n]/g, "") !== f.replace(/[ \t]/g, "")) return { kind: "too-complex", reason: "More than a pipeline follows the heredoc delimiter on its line" };
  }
  let l = r !== null && (r.startsWith("'") && r.endsWith("'") || r.startsWith('"') && r.endsWith('"') || r.startsWith("\\"));
  if (!l) {
    let u = s.children.filter((g) => g?.type !== "heredoc_content");
    if (!(re && t !== void 0 && r !== null && ie.test(r) && i === r && !Tr.test(s.text) && (s.text.match(/\$/g)?.length ?? 0) === u.length && (s.text.match(Pr)?.length ?? 0) === u.length && u.every((g) => (D++, (g?.type === "simple_expansion" || g?.type === "expansion") && typeof _e(g, t, true) === "string")))) return { kind: "too-complex", reason: "Heredoc with unquoted delimiter undergoes shell expansion", nodeType: "heredoc_redirect", differential: true };
  }
  if (r !== null && (r.startsWith("'") || r.startsWith('"')) && r.slice(1, -1).includes("\\")) return { kind: "too-complex", reason: "Quoted heredoc delimiter contains backslash", nodeType: "heredoc_redirect" };
  if (l) for (let u of s.children) {
    if (!u) continue;
    if (u.type !== "heredoc_content") return E(u);
  }
  if (r !== null && s !== null) {
    let u = !l ? r : r.startsWith("\\") ? r.slice(1) : r.slice(1, -1);
    if (u.length > 0) {
      if (o && u.startsWith("	")) return { kind: "too-complex", reason: "Heredoc uses <<- with a tab-prefixed delimiter", nodeType: "heredoc_redirect" };
      for (let f of s.text.split(`
`)) {
        let g = o ? f.replace(/^\t+/, "") : f;
        if (!g.startsWith(u)) continue;
        let _ = g.slice(u.length);
        if (/[)`}]/.test(_)) return { kind: "too-complex", reason: "Heredoc body line starts with the delimiter and contains a shell metacharacter bash may treat as a terminator", nodeType: "heredoc_redirect" };
      }
    }
  }
  return null;
}
function xn(e, t, n, r) {
  for (let i of e.children) {
    if (!i) continue;
    if (i.type === "<<<") continue;
    if (i.type === "variable_name") return { kind: "too-complex", reason: `Redirect uses ${dt(i.text)} fd-variable assignment \u2014 modifies shell variable as side effect` };
    let s = z(i, t, n, r);
    if (typeof s !== "string") return s;
    if (Ae.test(s)) return E(i);
  }
  return null;
}
var it = /* @__PURE__ */ new Set(["command", "builtin", "noglob", "nocorrect", "time"]), yn = /^[A-Za-z_][A-Za-z0-9_]*\+?=[A-Za-z0-9_.,:/@%+=-]*$/, ot = /* @__PURE__ */ new Set(["builtin", "command", "noglob"]), pt = /* @__PURE__ */ new Set(["declare", "typeset", "local", "export", "readonly"]), _n = /* @__PURE__ */ new Set([...pt, "integer", "float", "private"]), sbo = /* @__PURE__ */ new Set([":", "break", "continue", "return", "exit", "shift", "times", "set", "export", "readonly", "unset"]);
function Ee(e, t, n, r, i) {
  if (e === void 0) return null;
  let [, s = "", o = ""] = /^([A-Za-z_][A-Za-z0-9_]*)([\s\S]*)$/.exec(e) ?? [];
  if (s === "" || (n ? o === "" : o !== "" && !/^[[?]/.test(o))) return null;
  let l = r.get(s);
  if (!i.includes(s) && !he.has(s) && !W.has(s) && (l === void 0 || ei(l))) return null;
  if (!(0, import_chunk_ay36ksef._Dl)() || (0, import_chunk_ay36ksef.SDl)()) return null;
  let u = o, f = s;
  if (u.startsWith("[")) {
    let h = 0, d = u.length;
    for (let c = 0; c < u.length; c++) if (u[c] === "[") h++;
    else if (u[c] === "]" && --h === 0) {
      d = c + 1;
      break;
    }
    f += "[\u2026]", u = u.slice(d);
  }
  if (u !== "") f += u.startsWith("?") ? "?\u2026" : "\u2026";
  let _ = `In zsh, 'read ${$G(t === null ? f : `${t} ${f}`)}' can set ${s} differently from bash or leave it unchanged, and this command set or unset ${s} earlier, so ${s}'s value after the read can't be checked before the command runs`;
  if (!pe) (0, import_chunk_ay36ksef.yDl)(_);
  return { kind: "too-complex", reason: _, differential: true };
}
function Nr(e, t, n, r, i, s) {
  let o = [], l = [], u = (p, m = true) => {
    let b = p.match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (b) {
      if (o.push(b[0]), m) l.push(b[0]);
    }
  }, f = e, g = false, _, h = [];
  for (; ; ) {
    let p = f[0];
    if (p === void 0) break;
    if (it.has(p)) {
      if ((_ === "builtin" || _ === "command") && p !== "builtin" && p !== "command") {
        if (p === "noglob" && !g) return { kind: "too-complex", reason: `'${_} noglob' runs the wrapped command on zsh (for 'command', under POSIX_BUILTINS) but not bash \u2014 cannot statically model whether it executes`, nodeType: "command" };
        g = true;
      }
      let m = 1;
      while (m < f.length && /^-[-pvV]*$/.test(f[m])) {
        if (/[vV]/.test(f[m]) || p === "builtin" && /p/.test(f[m]) && (0, import_chunk_ay36ksef.EIr)()) g = true;
        m++;
      }
      f = f.slice(m), _ = p;
    } else if (p === "!") {
      if (_ === "builtin" || _ === "command") g = true;
      f = f.slice(1), _ = void 0;
    } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(p)) {
      if (_ !== void 0 && ot.has(_) && (0, import_chunk_ay36ksef.EIr)()) {
        if (!(yn.test(p) && !ei(p)) && !g) {
          let y = Dt(_, p);
          if (y) return y;
        }
        g = true;
      }
      let m = o.length;
      u(p), h.push({ word: p, target: o.length > m ? m : void 0 }), f = f.slice(1), _ = void 0;
    } else {
      if (_ !== void 0 && ot.has(_) && !g && p !== "[" && /[*?[]/.test(p) && (0, import_chunk_ay36ksef.EIr)()) {
        let m = Dt(_, p);
        if (m) return m;
      }
      break;
    }
  }
  let d = f[0];
  if (d === void 0) for (let p of t) u(p.name);
  else if (pt.has(d)) {
    let p = false;
    for (let m = 1; m < f.length; m++) {
      let b = f[m];
      if (!p && b === "--") {
        p = true;
        continue;
      }
      if (!p && /^[+-].*m/.test(b)) return { kind: "too-complex", reason: `'${d} ${b}' (wrapped form) \u2014 zsh -m/+m pattern-assigns every matching variable; cannot statically model target set`, nodeType: "command" };
      if (!p && b.startsWith("-")) continue;
      if (b.includes("=")) u(b);
    }
  } else if (d === "read" && (0, import_chunk_ay36ksef.IOs)()) ;
  else if (d === "read") {
    let p = 1, m = false, b = false;
    while (p < f.length) {
      let y = f[p];
      if (!m && y === "--") {
        m = true, p++;
        continue;
      }
      if (!m && y.startsWith("-")) {
        if (oe.has(y)) {
          if (Ut.has(y)) {
            let A = Ee(f[p + 1], y, false, n, r);
            if (A) return A;
          }
          p += 2;
          continue;
        }
        let k = false;
        for (let A = 1; A < y.length; A++) {
          let R = y[A];
          if (R === "a" || R === "A") {
            let P = A < y.length - 1 ? y.slice(A + 1) : f[p + 1];
            if (P) {
              let L = Ee(P, y.slice(0, A + 1), true, n, r);
              if (L) return L;
              u(P), b = true;
            }
            k = A === y.length - 1;
            break;
          }
          if (oe.has("-" + R)) {
            if (k = A === y.length - 1, k && Ut.has("-" + R)) {
              let P = Ee(f[p + 1], y, false, n, r);
              if (P) return P;
            }
            break;
          }
        }
        p += k ? 2 : 1;
        continue;
      }
      let w = Ee(y, null, true, n, r);
      if (w) return w;
      u(y), b = true, p++;
    }
    if (!b) o.push("REPLY");
  } else if (d === "printf") for (let p = 1; p < f.length; p++) {
    let m = f[p];
    if (m === "--" || !m.startsWith("-")) break;
    if (m === "-v") {
      if (f[p + 1]) u(f[p + 1]);
      p++;
      continue;
    }
    if (m.startsWith("-v")) u(m.slice(2));
  }
  else if (d === "getopts") {
    let p = f[1] === "--" ? 1 : 0;
    if (f[2 + p]) u(f[2 + p]);
    o.push("OPTARG"), T(n, "OPTIND");
  } else if (d === "wait") for (let p = 1; p < f.length; p++) {
    let m = f[p];
    if (m === "--" || !m.startsWith("-")) break;
    for (let b = 1; b < m.length; b++) if (m[b] === "p") {
      if (b < m.length - 1) u(m.slice(b + 1));
      else if (f[p + 1]) u(f[p + 1]), p++;
      break;
    }
  }
  else if (!g && (d === "unset" || d === "unsetenv")) {
    let p = false, m = false;
    for (let b = 1; b < f.length; b++) {
      let y = f[b];
      if (y.startsWith("-")) {
        if (m) return { kind: "too-complex", reason: `'unset \u2026 ${y}' (wrapped form) \u2014 flag after name; getopt stops at first non-option`, nodeType: "command" };
        if (y !== "-f" && y !== "-v") return { kind: "too-complex", reason: `'unset ${y}' (wrapped form) \u2014 flag other than -f/-v (zsh -m pattern-unset, bash -n nameref) cannot be statically modelled`, nodeType: "command" };
        if (y === "-f") p = true;
        continue;
      }
      if (m = true, !/^[A-Za-z_][A-Za-z0-9_]*$/.test(y)) return { kind: "too-complex", reason: `'unset ${y}' (wrapped form) \u2014 non-identifier operand may pathname-expand; cannot statically know which var is unset`, nodeType: "command" };
      if (p || d === "unsetenv") {
        let w = nt(n.get(y), `'${y}' no longer has a statically known value at this unset (wrapped form) \u2014 cannot verify what the command leaves behind`, "command");
        if (w !== null) return w;
        continue;
      }
      if (swe(y)) return { kind: "too-complex", reason: `'unset' targets shell variable ${y} (exec-influencing / integer-attr / IFS / PS4)`, nodeType: "command" };
      if (s) {
        let w = ye(`'unset ${y}' is in a command carrying an expansion that can fail at runtime \u2014 whether the name is cleared cannot be statically verified`);
        if (w) return w;
      }
      rt(n, y, i);
    }
  } else if (d === "print") for (let p = 1; p < f.length; p++) {
    let m = f[p];
    if (m === "--" || m === "-" || !m.startsWith("-")) break;
    let b = false;
    for (let y = 1; y < m.length; y++) {
      let w = m[y];
      if (w === "v") {
        let k = y < m.length - 1 ? m.slice(y + 1) : f[p + 1];
        if (k) u(k);
        b = y === m.length - 1;
        break;
      }
      if (Gr.has("-" + w)) {
        b = y === m.length - 1;
        break;
      }
    }
    if (b) p++;
  }
  else if (d === "set") for (let p = 1; p < f.length; p++) {
    let m = f[p];
    if (m === "--" || !/^[-+]/.test(m)) break;
    let b = m.indexOf("A", 1);
    if (b === -1) {
      if (m.endsWith("o")) p++;
      continue;
    }
    if (b < m.length - 1) u(m.slice(b + 1));
    else if (f[p + 1]) u(f[p + 1]);
    break;
  }
  else if (d === "mapfile" || d === "readarray") {
    let p = false;
    for (let m = 1; m < f.length; m++) {
      let b = f[m];
      if (b.startsWith("-")) {
        if (/^-[dnOsuCc]$/.test(b)) m++;
        continue;
      }
      u(b), p = true;
    }
    if (!p) o.push("MAPFILE");
  } else if (!g && (d === "cd" || d === "chdir" || d === "pushd" || d === "popd")) {
    let p = false;
    if (d === "pushd" || d === "popd") for (let m = 1; m < f.length; m++) {
      let b = f[m];
      if (b === "--") break;
      if (T2e(b, "n")) {
        p = true;
        break;
      }
      if (d === "popd" && (/^\+0*[1-9]/.test(b) || /^-0+$/.test(b))) {
        p = true;
        break;
      }
    }
    if (!p) T(n, "PWD"), T(n, "OLDPWD");
    if (d === "pushd" || d === "popd") T(n, "DIRSTACK"), T(n, "dirstack");
  }
  let c = d !== void 0 && _n.has(d) ? t.length + h.length : 0, x = j;
  if (j += c, c > 0 && H === void 0) {
    let p = d === "export" || d === "readonly" || f.some((b) => /^-[A-Za-z]*[xr]/.test(b)), m = /* @__PURE__ */ new Set();
    for (let b of p ? f.slice(1) : []) {
      let y = /^[A-Za-z_]\w*/.exec(b);
      if (y !== null) m.add(y[0]);
    }
    Y = [...Y ?? [], ...t.map((b) => m.has(b.name)), ...h.map(({ word: b }) => m.has(/^[A-Za-z_]\w*/.exec(b)?.[0] ?? ""))];
  }
  if (c > 0 && H !== void 0) {
    let p = { kind: "too-complex", reason: `A variable set in front of ${d} in this command can't be checked before it runs` }, m = [...t];
    for (let { word: b } of h) {
      let y = /^([A-Za-z_]\w*)(\+?)=([^]*)$/.exec(b);
      if (y === null) return p;
      let [, w = "", k, A = ""] = y;
      m.push(k === "+" ? { name: w, value: A, isAppend: true } : { name: w, value: A });
    }
    if (H.length < x + m.length || h.length > 0 && m.length > 1) return p;
    for (let b = h.length - 1; b >= 0; b--) {
      let y = h[b]?.target;
      if (y !== void 0) o.splice(y, 1);
    }
    for (let [b, y] of m.entries()) {
      if (H[x + b] !== true) continue;
      let w = y.isAppend ? n.get(y.name) : "", k = w === void 0 ? void 0 : xe(w);
      if (ei(y.value) || swe(y.name)) return p;
      if (k === void 0 || ei(k)) return p.kind === "too-complex" && !v && w?.includes(C) === true ? { ...p, divergentShape: true } : p;
      if (s) {
        let R = ye(`'${y.name}' is appended to by a command carrying an expansion that can fail at runtime \u2014 whether the append happens cannot be statically verified`);
        if (R) return R;
      }
      let A = (k === w ? "" : ge) + k + y.value;
      n.set(y.name, A), W.set(y.name, k + y.value);
    }
  }
  if (d !== void 0 && t.length > 0 && !(c > 0 && H !== void 0) && sbo.has(d)) for (let p of t) u(p.name);
  for (let p of o) {
    if (swe(p)) return { kind: "too-complex", reason: `'${d ?? t[0]?.name}' writes shell variable ${p} (exec-influencing / integer-attr / IFS) \u2014 value cannot be statically verified`, nodeType: "command" };
    T(n, p);
  }
  return r.push(...l), null;
}
function Dt(e, t) {
  return v ? null : { kind: "too-complex", reason: `'${e} ${$G(t)}' has a pattern the shell may expand, so this command can't be checked before it runs`, nodeType: "command", divergentShape: true, keepsRemovalVerdict: true };
}
var Mt = /^([A-Za-z_]\w*)(?:\[[\s\S]*?\])?(\+?)=([\s\S]*)$/, vr = 16;
function bn(e, t, n, r, i, s) {
  let o = [...t.envVars], l = gn.get(t.argv), u = false;
  for (let [c, x] of t.argv.entries()) {
    let [, p, m, b] = Mt.exec(x) ?? [], [, y] = /^([A-Za-z_]\w*)\[/.exec(x) ?? [];
    if (p !== void 0 && b !== void 0) o.push({ name: p, value: b, isAppend: m === "+", word: l?.[c], isOtherElement: /^\w+\[[1-9]\d*\]/.test(x) });
    else if (y !== void 0) o.push({ name: y, value: O }), u = true;
    else if (!u && (o.length > t.envVars.length || !/^(?:time|coproc|!|-p|--)$/.test(x))) return null;
  }
  let f = new Set(o.map((c) => c.name)), g = e.filter((c) => (c?.type === "file_redirect" || c?.type === "herestring_redirect") && Oe(c, f) !== null);
  if (g.length === 0) return null;
  let _ = ye("A redirect in this command may read a variable the same command sets, and shells can differ on which value it gets");
  if (_) return _.kind === "too-complex" ? { ..._, keepsRemovalVerdict: true } : _;
  let h = new Map(i), d = /* @__PURE__ */ new Set();
  for (let { name: c, value: x, isAppend: p, word: m, isOtherElement: b } of o) {
    let y = x;
    if (m !== void 0 && Oe(m, d) !== null) {
      let k = [], A = zt(m) ? z(m, k, h, s) : void 0;
      if (y = typeof A === "string" ? Mt.exec(A)?.[3] : void 0, y !== void 0) {
        let R = r.findIndex((P) => P.argv === t.argv);
        r.splice(R === -1 ? r.length : R, 0, ...k);
      }
    }
    if (b) continue;
    let w = p ? h.get(c) : "";
    if (w === void 0 || y === void 0) T(h, c);
    else h.set(c, w + y);
    d.add(c);
  }
  for (let c of g) {
    if (!zt(c)) continue;
    let x = r.length;
    if (c.type === "file_redirect") {
      let m = ve(c, r, h, s);
      if (r.length = x, !("kind" in m)) n.push(m);
      continue;
    }
    if (xn(c, r, h, s)) r.length = x;
  }
  return null;
}
function zt(e) {
  if (e.text.length > ce) return false;
  return ce -= e.text.length, true;
}
function Ir(e, t, n, r, i) {
  let s = D, o = B, l = n.length, u = [], f = [];
  if (v) gn.set(u, f);
  let g = [], _ = [], h = [], d = [...t], c = e.children.some((k) => k && Yn.has(k.type)) ? new Map(r) : null, x = 0, p = false;
  for (let k of e.children) {
    if (!k) continue;
    let A = se(k);
    switch (p ||= A, k.type) {
      case "variable_assignment": {
        if (h.length > 0) {
          let P = Oe(k, new Set(h.map((L) => L.name)));
          if (P !== null) return { kind: "too-complex", reason: `Env-prefix value references \`$${P}\` assigned by an earlier env-prefix in the same command \u2014 runtime sees the earlier assignment, static analysis does not`, nodeType: "variable_assignment" };
        }
        let R = at(k, n, r, i);
        if ("kind" in R) return R;
        if (Nn(R.name, R.value)) return { kind: "too-complex", reason: `${R.name} has integer attribute \u2014 env-prefix arith-evals value, which can execute subscript command substitution or abort/diverge at runtime`, nodeType: "variable_assignment" };
        if (h.push(R.isAppend ? { name: R.name, value: R.value, isAppend: true } : { name: R.name, value: R.value }), A) x = h.length - 1;
        break;
      }
      case "command_name": {
        let R = k.children[0] ?? k;
        if ((0, import_chunk_r6r2wdsw.Np)()) {
          if (R.type === "simple_expansion" || R.type === "expansion") return E(R);
          if ((R.type === "string" || R.type === "concatenation") && En(R)) return E(R);
        }
        let P = z(R, n, r, i);
        if (typeof P !== "string") return P;
        u.push(P), f.push(R), g.push(A2e(R.text) || Ie(R));
        break;
      }
      case "word":
      case "number":
      case "raw_string":
      case "string":
      case "concatenation":
      case "arithmetic_expansion": {
        let R = z(k, n, r, i);
        if (typeof R !== "string") return R;
        if (/^--?[\nA-Za-z0-9_]/.test(R) && ei(R)) return { kind: "too-complex", reason: "Argument starting with `-` contains runtime-determined content", nodeType: k.type };
        if (u.push(R), f.push(k), g.push(A2e(k.text) || Ie(k)), k.type === "string" && !r.has("PWD") && QSs.test(k.text)) _.push({ start: k.startIndex, end: k.endIndex });
        break;
      }
      case "simple_expansion": {
        D++;
        let R = _e(k, r, false);
        if (typeof R !== "string") return R;
        u.push(R), f.push(k), g.push(true);
        break;
      }
      case "file_redirect": {
        let R = h[0]?.name;
        if (R !== void 0 && A) {
          let L = Se(R);
          if (L) return L;
        }
        let P = ve(k, n, r, i);
        if ("kind" in P) return P;
        d.push(P);
        break;
      }
      case "herestring_redirect": {
        D++;
        let R = h[0]?.name;
        if (R !== void 0 && A) {
          let L = Se(R);
          if (L) return L;
        }
        let P = xn(k, n, r, i);
        if (P) return P;
        break;
      }
      default:
        return E(k);
    }
  }
  if (c) {
    let k = bn(e.children, { argv: u, envVars: h }, d, n, r, i);
    if (k) return k;
  }
  let m = h[0]?.name;
  if (x > 0 && m !== void 0) {
    let k = Se(m);
    if (k) return k;
  }
  {
    let k = Nr(u, h, r, i, l > 0, p);
    if (k) return k;
  }
  if (c) un(r, c);
  let b = (k, A) => k === "" || /["'\\ \t\n$`;|&<>(){}#]/.test(k) || A === 0 && k.includes("=") ? `'${k.replaceAll("'", "'\\''")}'` : k, y = /\$[A-Za-z_]/.test(e.text) || e.text.includes(`
`) ? [...h.map((k) => `${k.name}${k.isAppend && (0, import_chunk_ay36ksef.VAt)() ? "+" : ""}=${b(k.value)}`), ...u.map((k, A) => b(k, A))].join(" ") : e.text, w = A2e(e.text);
  return { kind: "simple", commands: [{ argv: u, envVars: h, redirects: d, text: y, hasUnquotedGlob: w, argvSourceLiteral: D === s, carveOutMayDesyncQuoteScan: B !== o, argvUnquotedGlob: g, ..._.length > 0 && { atShellCwd: { start: e.startIndex, end: e.endIndex, words: _ } } }], bareAssignmentNames: [] };
}
function Ie(e) {
  switch (e.type) {
    case "word":
    case "number":
      if (!et.test(e.text)) return false;
      for (let t = 0; t < e.text.length; t++) if (e.text[t] === "\\") t++;
      else if (et.test(e.text[t])) return true;
      return false;
    case "string":
    case "raw_string":
    case "simple_expansion":
    case "arithmetic_expansion":
      return false;
    case "concatenation":
      return e.children.some((t) => t !== null && Ie(t));
    default:
      return true;
  }
}
function ht(e, t, n, r) {
  if (re && Ce(e, "heredoc_redirect")) return E(e);
  let i = new Map(n), s = t.length, o = false;
  {
    let l = Buffer.from(e.text, "utf8"), u = (_) => _ === 32 || _ === 9 || _ === 10 || _ === 13 || _ === 59 || _ === 38, f = (_, h) => {
      let d = _;
      while (d < h) {
        let c = l[d];
        if (u(c)) d++;
        else if (c === 92 && (l[d + 1] === 10 || l[d + 1] === 13 && l[d + 2] === 10)) d += l[d + 1] === 13 ? 3 : 2;
        else return false;
      }
      return true;
    }, g = 0;
    for (let _ of e.children) {
      if (!_) continue;
      let h = _.startIndex - e.startIndex;
      if (!f(g, h)) return { kind: "too-complex", reason: "command substitution contains bytes no parsed node accounts for" };
      g = _.endIndex - e.startIndex;
    }
    if (!f(g, l.length)) return { kind: "too-complex", reason: "command substitution contains bytes no parsed node accounts for" };
  }
  for (let l of e.children) {
    if (!l) continue;
    if (l.type === "$(" || l.type === "`" || l.type === ")") continue;
    if (l.type !== "comment") o = true;
    let u = I(l, t, i, r);
    if (u) return u;
  }
  if (o && t.length === s) te(t, e);
  return null;
}
function z(e, t, n, r) {
  if (!e) return { kind: "too-complex", reason: "Null argument node" };
  switch (e.type) {
    case "word": {
      if (lBn.test(e.text)) return { kind: "too-complex", reason: "Word contains brace expansion syntax", nodeType: "word", differential: true };
      if (Qe.test(e.text) || Je.test(e.text)) return { kind: "too-complex", reason: "Brace body contains backslash-escaped brace", nodeType: "word", differential: true };
      if (ZSo.test(e.text)) return { kind: "too-complex", reason: "Word contains unescaped ` or $ \u2014 parser missed expansion", nodeType: "word", differential: true };
      if (tbs.test(e.text)) return { kind: "too-complex", reason: "Word contains unescaped quote \u2014 parser absorbed quote into brace-body word", nodeType: "word" };
      return e.text.replace(/\\(.)/g, "$1");
    }
    case "number":
      if (e.children.length > 0) return { kind: "too-complex", reason: "Number node contains expansion (NN# arithmetic base syntax)", nodeType: e.children[0]?.type };
      return e.text;
    case "raw_string":
      return wn(e.text);
    case "string":
      return kn(e, t, n, r);
    case "concatenation": {
      if (lBn.test(e.text)) return { kind: "too-complex", reason: "Brace expansion", nodeType: "concatenation", differential: true };
      if (Qe.test(e.text) || Je.test(e.text)) return { kind: "too-complex", reason: "Brace body contains backslash-escaped brace", nodeType: "concatenation", differential: true };
      let i = "", s = false, o = e.startIndex;
      for (let l = 0; l < e.children.length; l++) {
        let u = e.children[l];
        if (!u) continue;
        if (u.startIndex > o) return { kind: "too-complex", reason: "Concatenation has unparsed bytes between children \u2014 parser dropped content that shell will see", nodeType: "concatenation" };
        if (o = u.endIndex, u.type === "word" && u.text.includes("{")) s = true;
        if ((u.type === "simple_expansion" || u.type === "expansion") && (e.children[l + 1]?.text.startsWith("[") || /^:[a-zA-Z&]/.test(e.children[l + 1]?.text ?? ""))) return { kind: "too-complex", reason: "zsh $name[expr] / $name:mod in bare concatenation \u2014 recursive eval", nodeType: "concatenation", differential: true };
        let f = z(u, t, n, r);
        if (typeof f !== "string") return f;
        i += f;
      }
      if (s && (i.includes(",") || i.includes(".."))) return { kind: "too-complex", reason: "Brace expansion (unquoted `{` in concatenation with `,`/`..`)", nodeType: "concatenation" };
      if (ebo.test(i)) return { kind: "too-complex", reason: "zsh ~[ dynamic directory syntax (post-collapse)", nodeType: "concatenation", differential: true };
      if (tbo.test(i)) return { kind: "too-complex", reason: "zsh =cmd expansion (post-collapse)", nodeType: "concatenation", differential: true };
      return i;
    }
    case "arithmetic_expansion": {
      D++;
      let i = mt(e);
      if (i) return i;
      return O;
    }
    case "simple_expansion":
      return D++, _e(e, n, false);
    default:
      return E(e);
  }
}
function kn(e, t, n, r) {
  let i = "", s = -1, o = false, l = false, u = false;
  for (let f of e.children) {
    if (!f) continue;
    if (s !== -1 && f.startIndex > s) {
      let g = Buffer.from(e.text, "utf8").subarray(s - e.startIndex, f.startIndex - e.startIndex).toString("utf8");
      if (g.includes("`")) return { kind: "too-complex", reason: "Unanalyzable backtick body in double-quoted string gap \u2014 shell-evaluated value unknown", nodeType: "string", differential: true };
      if (g.length > 0) i += g, l = true;
    }
    switch (s = f.endIndex, f.type) {
      case '"':
        s = f.endIndex;
        break;
      case "string_content":
        i += f.text.replace(/\\\n/g, "").replace(/\\([$`"\\])/g, "$1"), l = true;
        break;
      case Nt: {
        let g = e.children.indexOf(f), _ = e.children[g + 1];
        if (_?.type === "string_content") {
          if (_.text.startsWith("[")) return { kind: "too-complex", reason: "Legacy $[...] arithmetic inside double-quotes \u2014 recursive subscript eval", nodeType: "string", differential: true };
          if (/^[+^=~]/.test(_.text)) return { kind: "too-complex", reason: "zsh $+/$^/$=/$~ prefix-flag expansion \u2014 value defeats downstream content checks", nodeType: "string", differential: true };
          let h = e.children[g - 1];
          if (/^:[a-zA-Z&]/.test(_.text) && h?.type === "simple_expansion" && h.endIndex === f.startIndex && h.children.some((d) => d?.type === "special_variable_name")) return { kind: "too-complex", reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval', nodeType: "string", differential: true };
        }
        i += Nt, l = true;
        break;
      }
      case "command_substitution": {
        let g = Cr(f);
        if (g === "DANGEROUS") return E(f);
        if (g !== null) {
          let h = g.replace(/\n+$/, "");
          if (Kn.test(f.text)) B++;
          if (h.includes(`
`)) {
            if (/^--?[A-Za-z0-9]/.test(i + h)) return { kind: "too-complex", reason: "cat-heredoc body would make the argument start with option syntax", nodeType: "command_substitution" };
            $e++, i += `
` + Ire, l = true;
            break;
          }
          $e++, i += h, l = true;
          break;
        }
        let _ = ht(f, t, n, r);
        if (_) return _;
        D++, i += Ire, o = true;
        break;
      }
      case "simple_expansion": {
        D++;
        let g = _e(f, n, true);
        if (typeof g !== "string") return g;
        {
          let _ = e.children[e.children.indexOf(f) + 1], h = f.children.some((d) => d?.type === "special_variable_name");
          if (_?.type === "string_content" && (_.text.startsWith("[") || /^:[a-zA-Z&]/.test(_.text) || h && Rr.test(_.text))) return { kind: "too-complex", reason: 'zsh "$name[expr]" / "$name:mod" inside double-quotes \u2014 recursive eval', nodeType: "string", differential: true };
        }
        if (ei(g)) o = true;
        else if (g !== "") l = true;
        else u = true;
        i += g;
        break;
      }
      case "arithmetic_expansion": {
        let g = mt(f);
        if (g) return g;
        D++, i += O, o = true;
        break;
      }
      default:
        return E(f);
    }
  }
  if (o) {
    if ([...i.replaceAll(Ire, "").replaceAll(O, "")].length <= 1) return E(e);
  }
  if (!l && !o && !u && e.text.length > 2) {
    let f = e.text.slice(1, -1);
    if (f.includes("`") || f.includes("$(")) return { kind: "too-complex", reason: "Delimiters-only string node contains unparsed command substitution", nodeType: "string", differential: true };
    return f;
  }
  return i;
}
var Or = /^(?:[0-9]+|0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[-+*/%^&|~!<>=?:(),]+|<<|>>|\*\*|&&|\|\||[<>=!]=|\$\(\(|\)\))$/;
function mt(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.children.length === 0) {
      if (!Or.test(t.text)) return { kind: "too-complex", reason: `Arithmetic expansion references variable or non-literal: ${t.text}`, nodeType: "arithmetic_expansion" };
      continue;
    }
    switch (t.type) {
      case "binary_expression":
      case "unary_expression":
      case "ternary_expression":
      case "parenthesized_expression": {
        let n = mt(t);
        if (n) return n;
        break;
      }
      default:
        return E(t);
    }
  }
  return null;
}
function te(e, t) {
  e.push({ argv: ["true"], envVars: [], redirects: [], text: t.text, hasUnquotedGlob: A2e(t.text) });
}
function se(e) {
  if (e.type === "arithmetic_expansion") return true;
  for (let t of e.children) if (t && se(t)) return true;
  return false;
}
function Cr(e) {
  let t = null;
  for (let i of e.children) {
    if (!i) continue;
    if (i.type === "$(" || i.type === ")") continue;
    if (i.type === "redirected_statement" && t === null) t = i;
    else return null;
  }
  if (!t) return null;
  let n = false, r = null;
  for (let i of t.children) {
    if (!i) continue;
    if (i.type === "command") {
      let s = i.children.filter((l) => l);
      if (s.length !== 1) return null;
      let o = s[0];
      if (o?.type !== "command_name" || o.text !== "cat") return null;
      n = true;
    } else if (i.type === "heredoc_redirect") {
      if (st(i) !== null) return null;
      for (let s of i.children) {
        if (s?.type === "<<-") return null;
        if (s?.type === "heredoc_body") r = s.text;
      }
    } else return null;
  }
  if (!n || r === null) return null;
  if (ct.test(r)) return "DANGEROUS";
  if (uBn(r) !== false) return "DANGEROUS";
  return r;
}
function at(e, t, n, r) {
  let i = null, s = "", o = false;
  for (let l of e.children) {
    if (!l) continue;
    if (l.type === "variable_name") i = l.text;
    else if (l.type === "=" || l.type === "+=") {
      o = l.type === "+=";
      continue;
    } else if (l.type === "command_substitution") {
      let u = ht(l, t, n, r);
      if (u) return u;
      s = Ire;
    } else if (l.type === "simple_expansion") {
      let u = _e(l, n, true);
      if (typeof u !== "string") return u;
      s = u;
    } else {
      let u = z(l, t, n, r);
      if (typeof u !== "string") return u;
      s = u;
    }
  }
  if (i === null) return { kind: "too-complex", reason: "Variable assignment without name", nodeType: "variable_assignment" };
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(i)) return { kind: "too-complex", reason: `Invalid variable name (bash treats as command): ${i}`, nodeType: "variable_assignment" };
  if (i === "IFS") return { kind: "too-complex", reason: "IFS assignment changes word-splitting \u2014 cannot model statically", nodeType: "variable_assignment" };
  if (i === "PS4" || i === "PROMPT4") {
    if (o) return { kind: "too-complex", reason: "PS4 += cannot be statically verified \u2014 combine into a single PS4= assignment", nodeType: "variable_assignment" };
    if (ei(s)) return { kind: "too-complex", reason: "PS4 value derived from cmdsub/variable \u2014 runtime unknowable", nodeType: "variable_assignment" };
    if (!/^[A-Za-z0-9 _+:./=[\]-]*$/.test(s.replace(/\$\{[A-Za-z_][A-Za-z0-9_]*\}/g, ""))) return { kind: "too-complex", reason: "PS4 value outside safe charset \u2014 only ${VAR} refs and [A-Za-z0-9 _+:.=/[]-] allowed", nodeType: "variable_assignment" };
  }
  if (s.includes("~") && !v) return { kind: "too-complex", reason: "Tilde in assignment value \u2014 bash may expand at assignment time", nodeType: "variable_assignment" };
  return { name: i, value: s, isAppend: o };
}
var Rn = /* @__PURE__ */ new Set(["_", "RANDOM", "SECONDS", "LINENO", "BASH_COMMAND", "FUNCNAME", "EPOCHSECONDS", "EPOCHREALTIME", "SRANDOM", "BASHPID", "BASH_MONOSECONDS", "BASH_TRAPSIG", "HISTCMD", "ERRNO", "REPLY", "reply", "PIPESTATUS", "pipestatus", "BASH_SOURCE", "DIRSTACK", "GROUPS", "BASH_ARGV", "BASH_ARGC", "BASH_SUBSHELL", "BASH_LINENO", "BASH_ARGV0", "BASH_REMATCH", "MATCH", "match", "MBEGIN", "MEND", "mbegin", "mend", "OPTARG", "OPTIND", "argv", "FIGNORE", "fignore", "PSVAR", "psvar", "WATCH", "watch", "HISTCHARS", "histchars", "PS1", "PROMPT", "prompt", "PS2", "PROMPT2", "PS3", "PROMPT3", "PS4", "PROMPT4", "RPS1", "RPROMPT", "RPS2", "RPROMPT2"]);
function _e(e, t, n) {
  let r = null, i = false;
  for (let u of e.children) {
    if (u?.type === "variable_name") {
      r = u.text;
      break;
    }
    if (u?.type === "special_variable_name") {
      r = u.text, i = true;
      break;
    }
  }
  if (r === null) return E(e);
  let s = t.get(r);
  de += s?.length ?? 0;
  let o = de > Me ? Sn(e) : void 0;
  if (kt(s?.length ?? 0), o !== void 0) return o;
  let l = s === void 0 ? void 0 : xe(s);
  if (l !== void 0) {
    if (l.includes(C)) {
      let u = E(e);
      return u.kind === "too-complex" && !v ? { ...u, divergentShape: true } : u;
    }
    if (Rn.has(r)) return n && Ke.has(r) && r !== "BASHPID" ? O : E(e);
    if (ei(l)) {
      if (!n) return E(e);
      return Z ||= l !== O && l !== Ire, l;
    }
    if (!n) {
      if (l === "") return E(e);
      if (Tt.test(l)) return E(e);
    }
    return Z = true, l;
  }
  if (r === "HOME") {
    let u = (0, import_os.homedir)();
    if (!n && (u === "" || Tt.test(u))) return E(e);
    return u;
  }
  if (n) {
    if (Ke.has(r)) return O;
    if (i && (tr.has(r) || /^[0-9]+$/.test(r))) {
      if (r === "!" && !ue && (0, import_chunk_49rkmh8j.ZPo)()) {
        if (Z = true, ae = true, fe) return "";
      }
      return O;
    }
  }
  return E(e);
}
function je(e, t) {
  le(t, e);
}
function Wt(e, t, n, r) {
  if (!pe || e === X) return [];
  if (K >= gr) return { kind: "too-complex", reason: "Loops nested too deeply to follow the variables they change", nodeType: e.type };
  let i = new Map(n), s = X, o = Z, l = V, u = j, f = Y, g = W, _ = q;
  W = new Map(g), X = e, K++;
  let h = I(e, [...t], i, [...r]);
  return K--, X = s, Z = o, V = l, j = u, Y = f, W = g, q = _, h ?? [...n.keys()].filter((d) => i.get(d) !== n.get(d));
}
function Ft(e, t) {
  let n = () => {
    for (let r of t.keys()) T(t, r);
  };
  for (let r of e) {
    if (r?.type === "unset" && r.text === "unsetenv") return;
    if (!r || r.type === "unset" || r.type === "file_redirect" || r.type === "heredoc_redirect" || r.type === "herestring_redirect") continue;
    if (r.type === "variable_name") {
      T(t, r.text.replace(/\\/g, ""));
      continue;
    }
    if (r.type === "word") {
      if (r.text.startsWith("-")) {
        if (r.text === "--" || /^-[fvn]+$/.test(r.text)) continue;
        n();
        continue;
      }
      if (/^\\?[A-Za-z_][A-Za-z0-9_]*$/.test(r.text)) {
        T(t, r.text.replace(/^\\/, ""));
        continue;
      }
    }
    n();
  }
}
function lt(e) {
  if (!e) return null;
  switch (e.type) {
    case "word":
    case "number":
      return e.text.replace(/\\(.)/g, "$1");
    case "raw_string":
      return e.text.slice(1, -1);
    case "string": {
      let t = e.children.filter((n) => n && n.type !== '"');
      if (t.length === 0) return "";
      if (t.length === 1 && t[0]?.type === "string_content") return t[0].text;
      return null;
    }
    case "concatenation": {
      let t = "";
      for (let n of e.children) {
        let r = lt(n);
        if (r === null) return null;
        t += r;
      }
      return t;
    }
    default:
      return null;
  }
}
function le(e, t) {
  if (e.type === "function_definition" || e.type === "subshell" || e.type === "command_substitution" || e.type === "process_substitution") return;
  if (e.type === "pipeline") {
    let n = null;
    for (let r of e.children) if (r && !me.has(r.type)) n = r;
    if (n) le(n, t);
    return;
  }
  if (e.type === "list" || e.type === "program") {
    let n = e.children;
    for (let r = 0; r < n.length; r++) {
      let i = n[r];
      if (!i || me.has(i.type)) continue;
      let s = r + 1;
      while (s < n.length && !n[s]) s++;
      if (n[s]?.type === "&") continue;
      le(i, t);
    }
    return;
  }
  if (e.type === "variable_assignment") {
    for (let n of e.children) if (n?.type === "variable_name") {
      T(t, n.text);
      break;
    }
  }
  if (e.type === "for_statement") {
    for (let n of e.children) if (n?.type === "variable_name") {
      T(t, n.text);
      break;
    }
  }
  if (e.type === "unset_command") Ft(e.children, t);
  if (e.type === "command") {
    let n, r, i = [], s = [], o = false;
    for (let c of e.children) {
      if (!c) continue;
      if (c.type === "command_name") r = c, n = lt(c.children[0] ?? c) ?? void 0, o = true;
      else if (!o || c.type === "file_redirect" || c.type === "herestring_redirect" || c.type === "heredoc_redirect") ;
      else i.push(lt(c) ?? ""), s.push(c);
    }
    let l = false, u;
    while (n !== void 0 && (it.has(n) || n === "!")) {
      if ((u === "builtin" || u === "command") && n !== "builtin" && n !== "command" && n !== "noglob") l = true;
      let c = n === "!" ? void 0 : n;
      while (i.length > 0) {
        let x = i[0];
        if (/^-[-pvV]*$/.test(x)) {
          if (/[vV]/.test(x) || c === "builtin" && /p/.test(x) && (0, import_chunk_ay36ksef.EIr)()) l = true;
          i.shift(), s.shift();
        } else if (/^[A-Za-z_]\w*(\[[^\]]*\])?\+?=/.test(x)) {
          if (c !== void 0 && ot.has(c) && (yn.test(x) && !ei(x) || v) && (0, import_chunk_ay36ksef.EIr)()) l = true;
          let p = x.match(/^[A-Za-z_][A-Za-z0-9_]*/)[0];
          T(t, p), i.shift(), s.shift(), c = void 0;
        } else break;
      }
      u = c, n = i.shift(), s.shift();
    }
    let f = i, g = (c) => {
      if (/^[A-Za-z_][A-Za-z0-9_]*$/.test(c)) T(t, c);
    };
    if (n === "read" && !(0, import_chunk_ay36ksef.IOs)()) {
      T(t, "REPLY");
      let c = 0, x = false;
      while (c < f.length) {
        let p = f[c];
        if (!x && p === "--") {
          x = true, c++;
          continue;
        }
        if (!x && p.startsWith("-")) {
          if (oe.has(p)) {
            c += 2;
            continue;
          }
          let m = false;
          for (let b = 1; b < p.length; b++) {
            let y = p[b];
            if (y === "a" || y === "A") {
              g(b < p.length - 1 ? p.slice(b + 1) : f[c + 1] ?? ""), m = b === p.length - 1;
              break;
            }
            if (oe.has("-" + y)) {
              m = b === p.length - 1;
              break;
            }
          }
          c += m ? 2 : 1;
          continue;
        }
        g(p), c++;
      }
    } else if (n === "mapfile" || n === "readarray") {
      T(t, "MAPFILE");
      for (let c = 0; c < f.length; c++) {
        let x = f[c];
        if (x.startsWith("-")) {
          if (/^-[dnOsuCc]$/.test(x)) c++;
          continue;
        }
        g(x);
      }
    } else if (n === "unset" && !l) Ft(s, t);
    let _ = r?.children[0], h = _?.type === "word" ? _.text.replace(/\\(.)/g, "$1") : void 0, d = h !== void 0 && !sbo.has(h) && !it.has(h) && !(H === void 0 ? pt : _n).has(h);
    for (let c of e.children) if (c && (c.type !== "variable_assignment" || !d)) le(c, t);
    return;
  }
  if (e.type === "declaration_command") {
    for (let n of e.children) if (n?.type === "string" || n?.type === "raw_string" || n?.type === "word" || n?.type === "number" || n?.type === "concatenation" || n?.type === "variable_name") {
      let r = n.text.replace(/['"\\]/g, ""), i = /^([A-Za-z_][A-Za-z0-9_]*)\+?=/.exec(r);
      if (i) T(t, i[1]);
      else {
        let s = r.indexOf("=");
        if (s > 0 && r.lastIndexOf("$", s - 1) !== -1) for (let o of [...t.keys()]) T(t, o);
      }
    }
  }
  for (let n of e.children) if (n) le(n, t);
}
function J(e, t) {
  for (let [n, r] of t) {
    let i = e.get(n);
    if (i !== void 0 && i !== r) {
      let s = xe(r);
      if (W.get(n) === s && xe(i) !== s) q = true;
      T(e, n);
    }
  }
  for (let n of e.keys()) if (!t.has(n)) T(e, n);
}
function Ye(e, t, n = false) {
  if (fe && t.value === "" && !t.isAppend) {
    e.set(t.name, "");
    return;
  }
  if (n) {
    T(e, t.name);
    return;
  }
  if (t.isAppend && !e.has(t.name)) return;
  let r = e.get(t.name);
  if (r !== void 0 && r !== t.value && !t.isAppend && !ei(t.value)) {
    T(e, t.name);
    return;
  }
  let i = t.isAppend ? (r ?? "") + t.value : t.value;
  e.set(t.name, i);
}
function wn(e) {
  return e.slice(1, -1);
}
function En(e) {
  for (let t of e.children) {
    if (!t) continue;
    if (t.type === "simple_expansion" || t.type === "expansion") return true;
    if (En(t)) return true;
  }
  return false;
}
function Lr(e) {
  if (e === "~" || e.startsWith("~/")) return "HOME";
  if (e === "~+" || e.startsWith("~+/")) return "PWD";
  if (e === "~-" || e.startsWith("~-/")) return "OLDPWD";
  return null;
}
function Oe(e, t) {
  let n = e.type === "variable_assignment";
  for (let r of e.children) {
    if (!r) continue;
    if (r.type === "variable_name") {
      if (n) continue;
      if (t.has(r.text)) return r.text;
    }
    if (r.type === "word") {
      let s = Lr(r.text);
      if (s !== null && t.has(s)) return s;
    }
    let i = Oe(r, t);
    if (i !== null) return i;
  }
  return null;
}
function Sn(e) {
  return ze(), E(e);
}
function E(e) {
  if (e.type === "ERROR") return { kind: "too-complex", reason: Xt(e.text) || e.text.startsWith("${") && (0, import_chunk_nw2twe6x.IUi)(e.text) ? "A $ followed by non-ASCII text in this command can't be checked before it runs" : "Parse error", nodeType: e.type };
  let t = Dr.get(e.type);
  return { kind: "too-complex", reason: `${t === void 0 ? "This command" : `${t} in this command`} can't be checked before it runs`, nodeType: e.type };
}
var Dr = /* @__PURE__ */ new Map([["simple_expansion", "A variable"], ["expansion", "A variable in braces"], ["command_substitution", "A nested command"], ["process_substitution", "A command used as a file"], ["brace_expression", "A brace pattern"], ["ansi_c_string", "Text with escape codes"], ["translated_string", "Translatable text"], ["test_command", "A test in brackets"], ["herestring_redirect", "A here-string"], ["heredoc_redirect", "A here-document"], ["subshell", "A group in parentheses"], ["compound_statement", "A group in braces or double parentheses"], ["for_statement", "A for or select loop"], ["c_style_for_statement", "A counting for loop"], ["while_statement", "A while or until loop"], ["until_statement", "An until loop"], ["if_statement", "An if statement"], ["case_statement", "A case statement"], ["function_definition", "A function definition"], ["array", "A list of values"], ["string", "Quoted text"], ["file_redirect", "A file redirect"], ["pipeline", "A pipeline"], ["concatenation", "Joined pieces of text"], ["variable_assignment", "A variable assignment"], ["variable_assignments", "Variable assignments"]]);
function PUi(e) {
  let t = [], n = 0, r = false, i = false;
  while (n < e.length) {
    let s = e[n];
    if (s === "\\" && !r) {
      n += 2;
      continue;
    }
    if (s === "'" && !i) {
      r = !r, n++;
      continue;
    }
    if (s === '"' && !r) {
      i = !i, n++;
      continue;
    }
    if (!r && s === "$" && e[n + 1] === "{") {
      let o = 1, l = n + 2, u = false, f = false;
      while (l < e.length && o > 0) {
        let g = e[l];
        if (g === "\\" && !u) {
          l += 2;
          continue;
        }
        if (g === "'" && !f) u = !u;
        else if (g === '"' && !u) f = !f;
        else if (!u && !f) {
          if (g === "{") o++;
          else if (g === "}") o--;
        }
        l++;
      }
      t.push(e.slice(n + 2, o === 0 ? l - 1 : l)), n = l;
      continue;
    }
    n++;
  }
  return t;
}
function Tat(e) {
  let t = "", n = false, r = false;
  for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (n) {
      if (s === "'") n = false, t += s;
      continue;
    }
    if (s === "\\" && !n) {
      let o = e[i + 1];
      if (i++, o !== void 0 && !"$'\"`\\".includes(o)) t += o;
      continue;
    }
    if (s === '"') {
      r = !r, t += s;
      continue;
    }
    if (s === "'" && !r) {
      n = true, t += s;
      continue;
    }
    t += s;
  }
  return t;
}
function ovt(e) {
  let t = "", n;
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (n === "'") {
      if (i === "'") n = void 0;
      continue;
    }
    if (n === '"') {
      if (i === "\\") r++;
      else if (i === '"') n = void 0;
      continue;
    }
    if (i === "\\") {
      r++;
      continue;
    }
    if (i === "'" || i === '"') {
      n = i;
      continue;
    }
    t += i;
  }
  return t;
}
var ibo = ["strftime", "pcre_match", "zstat", "zselect", "zgetattr", "zlistattr", "ztie", "zuntie", "syserror", "zsystem", "zftp", "zcurses"], An = /* @__PURE__ */ new Set(["zformat", "zparseopts", "zstyle", "zregexparse", "getln", "vared", ...ibo]);
function $n(e, t) {
  return e === "stat" && t.some((n) => /^-[gnNolLtTrs]*[AH]/.test(n)) && (0, import_chunk_ay36ksef.r8)() ? "'stat' with -A or -H \u2014 zsh's stat builtin stores its result in the variable that option names, so a tracked value cannot be statically verified" : null;
}
var svt = /* @__PURE__ */ new Set(["zmodload", "emulate", "sysopen", "sysread", "syswrite", "sysseek", "zpty", "ztcp", "zsocket", "zf_rm", "zf_mv", "zf_ln", "zf_chmod", "zf_chown", "zf_mkdir", "zf_rmdir", "zf_chgrp", "repeat", "foreach", "zcompile", "setopt", "unsetopt", "disable", "shopt", "autoload", "functions", ...An]), Mr = /* @__PURE__ */ new Set(["-exec", "-execdir", "-ok", "-okdir", "-delete", "-rm", "-fprint", "-fprint0", "-fprintf", "-fls", "-files0-from"]);
function Mdn(e) {
  return Mr.has(e) && (0, import_chunk_ay36ksef.JPo)(e);
}
var zr = /* @__PURE__ */ new Set(["-name", "-iname", "-path", "-ipath", "-lname", "-ilname", "-regex", "-iregex", "-wholename", "-iwholename", "-samefile", "-newer", "-anewer", "-cnewer", "-mnewer", "-perm", "-user", "-group", "-uid", "-gid", "-size", "-type", "-xtype", "-fstype", "-inum", "-links", "-used", "-context", "-amin", "-cmin", "-mmin", "-atime", "-ctime", "-mtime", "-mindepth", "-maxdepth", "-printf", "-regextype", "-D", "-f", "-flags", "-Bnewer", "-Btime", "-Bmin", "-files0-from", "-xattrname"]), Wr = /^-newer[aBcm][aBcmt]$/, Tn = /^-(?:[EHLPXdsx]*D|f|[dsx]*[EHLPX][EHLPXdsx]*f)$/, Fr = /^-[dsx]+f$/;
function cBn(e) {
  return zr.has(e) || Wr.test(e) || Tn.test(e);
}
function VEr(e) {
  return Tn.test(e);
}
function KEr(e) {
  return Fr.test(e);
}
var x2e = /* @__PURE__ */ new Set(["eval", "source", ".", "exec", "nocorrect", "fc", "coproc", "trap", "enable", "mapfile", "readarray", "hash", "bind", "complete", "compgen", "alias", "let"]), Cat = /* @__PURE__ */ new Set(["awk", "gawk", "mawk", "nawk"]), Br = /^(?:-[FvW]$|--(?:fie|a$|as))/;
function uBn(e) {
  if (/(?<![A-Za-z_])system[\s\\]*\(/.test(e)) return "awk program contains system() which executes arbitrary commands";
  if (/(?:^|[^|])\|&?[^/|%";#{}]*"/.test(e) || /(?:^|[^|])\|&?[\s\\]*getline\b/.test(e)) return 'awk program contains a command pipe (| "cmd" or | getline) which executes arbitrary commands';
  if (/@[\s\\]*(?:load|include)\b|@[\s\\]*\w+(?:::\w+)?(?:\[[^\]]*\])*[\s\\]*\(/.test(e)) return "awk program contains @load/@include or an @indirect call which can execute arbitrary code";
  if (/(?<![A-Za-z_])extension[\s\\]*\(/.test(e)) return "awk program contains extension() which loads arbitrary native code (legacy gawk)";
  if (/"\/inet[46]?\//.test(e)) return "awk program opens a gawk /inet/ network socket which can exfiltrate data";
  return false;
}
var _Ye = /* @__PURE__ */ new Set(["bash", "sh", "zsh", "dash", "ksh", "mksh", "ash", "hush", "rbash"]), Ur = /* @__PURE__ */ new Set(["busybox", "toybox", "wsl", "su", "runuser"]), Y7 = /* @__PURE__ */ new Set([..._Ye, "fish", "csh", "tcsh", "rsh", ...Ur, "cmd", "powershell", "pwsh"]), P2e = /* @__PURE__ */ new Set(["time", "command", "builtin", "noglob", "env", "nice", "nohup", "sudo", "doas", "stdbuf", "timeout"]), lme = /* @__PURE__ */ new Set(["watch", "ionice", "chrt", "setsid", "taskset", "strace", "ltrace", "script", "flock", "unshare", "nsenter", "sandbox-exec"]);
function Pn(e) {
  return svt.has(e) && (!An.has(e) || (0, import_chunk_ay36ksef.r8)());
}
function OUi(e) {
  let t = XO(e);
  return x2e.has(e) || Pn(e) || lme.has(e) || lme.has(t) || t === "rm" || t === "rmdir";
}
var obs = { test: /* @__PURE__ */ new Set(["-v", "-R", "-t"]), "[": /* @__PURE__ */ new Set(["-v", "-R", "-t"]), "[[": /* @__PURE__ */ new Set(["-v", "-R", "-t"]), printf: /* @__PURE__ */ new Set(["-v"]), read: /* @__PURE__ */ new Set(["-a"]), unset: /* @__PURE__ */ new Set(["-v"]), wait: /* @__PURE__ */ new Set(["-p"]) }, fBn = /* @__PURE__ */ new Set(["-eq", "-ne", "-lt", "-le", "-gt", "-ge"]), Hdn = /^-?(0[xX][0-9a-fA-F]+|[0-9]+#[0-9a-zA-Z]+|[0-9]+)$/, sbs = /* @__PURE__ */ new Set(["read", "unset"]), Bt = /* @__PURE__ */ new Set(["declare", "typeset", "local", "export", "readonly", "private", "float", "integer"]), ibs = /^[+-][-+\w:]*P/, Djt = /* @__PURE__ */ new Set(["declare", "typeset", "local", "export", "readonly", "print", "getopts", "set", "zparseopts", "zformat", "zstyle", ...ibo, "autoload", "shift", "exit", "return", "break", "continue", "bye", "logout", "vared", "private", "getln", "zregexparse", "float", "integer"]), abs = /* @__PURE__ */ new Set(["pipefail", "errexit", "nounset", "xtrace", "noglob", "noclobber", "verbose", "monitor", "notify", "vi", "emacs", "errtrace", "functrace", "hashall", "physical", "ignoreeof"]), lbs = /* @__PURE__ */ new Set(["e", "u", "x", "f", "C", "v", "m", "b", "E", "T", "h", "P", "n"]), Hr = /* @__PURE__ */ new Set(["path", "home", "dirstack", "tmpprefix", "bash_env", "env", "cdpath", "globignore", "shell", "fpath", "bash_loadables_path", "module_path", "manpath", "mailpath", "readnullcmd", "nullcmd", "histfile", "zdotdir", "functions", "commands", "aliases", "galiases", "saliases", "bash_cmds", "bash_aliases", "execignore", "bash_source_path", "lang", "language", "lc_all", "lc_ctype", "lc_collate", "lc_messages", "lc_numeric", "lc_time", "histchars", "textdomain", "textdomaindir"]), gt = /* @__PURE__ */ new Set(["RANDOM", "SECONDS", "LINENO", "OPTIND", "MAILCHECK", "HISTCMD", "SRANDOM", "EPOCHSECONDS", "EPOCHREALTIME", "BASHPID", "BASH_MONOSECONDS", "BASH_TRAPSIG", "COLUMNS", "LINES", "SHLVL", "ERRNO", "TMOUT", "HISTSIZE", "SAVEHIST", "TRY_BLOCK_ERROR", "TRY_BLOCK_INTERRUPT", "KEYTIMEOUT", "LISTMAX", "LOGCHECK", "PERIOD", "FUNCNEST", "UID", "EUID", "GID", "EGID", "REPORTTIME", "REPORTMEMORY", "DIRSTACKSIZE", "BAUD", "ZLE_RPROMPT_INDENT", "MBEGIN", "MEND", "PPID", "ARGC", "ZSH_SUBSHELL", "TTYIDLE", "status"]);
function Nn(e, t) {
  if (!gt.has(e)) return false;
  if (t.includes("[") || t.includes("`") || /\$\(/.test(t) || ei(t)) return true;
  if (!/^(0|[1-9][0-9]{0,17})$/.test(t)) return true;
  return false;
}
function qEr(e) {
  let t = e.toLowerCase();
  return Hr.has(t) || t.startsWith("ld_") || t.startsWith("dyld_") || t.startsWith("bash_func_");
}
function swe(e) {
  return qEr(e) || e === "IFS" || e === "PS4" || e === "PROMPT4" || gt.has(e);
}
var oe = /* @__PURE__ */ new Set(["-p", "-d", "-n", "-N", "-t", "-u", "-i"]), Ut = /* @__PURE__ */ new Set(["-p", "-t", "-n"]), Ht = /* @__PURE__ */ new Set(["-t", "-n", "-N"]), Zt = /^(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/, Zr = /^[A-Za-z_][A-Za-z0-9_]*\[/, Gr = /* @__PURE__ */ new Set(["-f", "-C", "-x", "-X", "-u"]), ct = /\/proc\/.*\/environ/, Ae = /\n\s*#/;
function EZ(e, t) {
  let n = t?.sourceGlobRecord !== false, r = null;
  for (let i of e) {
    let s = i.argv, o = false;
    for (; ; ) {
      let h = s[0] === void 0 ? void 0 : XO(s[0]), d = h === "time" || h === "nohup" || h === "timeout" || h === "nice" || h === "stdbuf" || h === "env" || h === "command" || h === "xargs" ? h : s[0];
      if (d === "time" || d === "nohup") {
        if (s = s.slice(1), s[0] !== void 0 && !/^[\w./~+-]+$/.test(s[0])) return { ok: false, reason: `'${d} ${s[0]}' can't be checked before it runs` };
      } else if (d === "timeout") {
        let c = 1;
        while (c < s.length) {
          let x = s[c];
          if (x === "--foreground" || x === "--preserve-status" || x === "--verbose") c++;
          else if (/^--(?:kill-after|signal)=[A-Za-z0-9_.+-]+$/.test(x)) c++;
          else if ((x === "--kill-after" || x === "--signal") && s[c + 1] && /^[A-Za-z0-9_.+-]+$/.test(s[c + 1])) c += 2;
          else if (x.startsWith("--")) return { ok: false, reason: `'timeout ${x}' can't be checked before it runs` };
          else if (x === "-v") c++;
          else if ((x === "-k" || x === "-s") && s[c + 1] && /^[A-Za-z0-9_.+-]+$/.test(s[c + 1])) c += 2;
          else if (/^-[ks][A-Za-z0-9_.+-]+$/.test(x)) c++;
          else if (x.startsWith("-")) return { ok: false, reason: `'timeout ${x}' can't be checked before it runs` };
          else break;
        }
        if (s[c] && /^\d+(?:\.\d+)?[smhd]?$/.test(s[c])) s = s.slice(c + 1);
        else if (s[c]) return { ok: false, reason: `timeout duration '${s[c]}' can't be checked before it runs` };
        else break;
      } else if (d === "nice") if (s[1] === "-n" && s[2] && /^-?\d+$/.test(s[2])) s = s.slice(3);
      else if (s[1] && /^-\d+$/.test(s[1])) s = s.slice(2);
      else if (s[1] && (/[$(`]/.test(s[1]) || ei(s[1]))) return { ok: false, reason: `nice argument '${s[1]}' contains expansion \u2014 cannot statically determine wrapped command` };
      else s = s.slice(1);
      else if (d === "env") {
        let c = 1;
        while (c < s.length) {
          let x = s[c];
          if (x.includes("=") && !x.startsWith("-")) c++;
          else if (x === "-i" || x === "-0" || x === "-v") c++;
          else if (x === "-u" && s[c + 1]) c += 2;
          else if (x.startsWith("-")) return { ok: false, reason: `'env ${x}' can't be checked before it runs` };
          else break;
        }
        if (c < s.length) s = s.slice(c);
        else break;
      } else if (d === "stdbuf") {
        let c = 1;
        while (c < s.length) {
          let x = s[c];
          if (Qn.test(x) && s[c + 1]) c += 2;
          else if (Jn.test(x)) c++;
          else if (er.test(x)) c++;
          else if (x.startsWith("-")) return { ok: false, reason: `'stdbuf ${x}' can't be checked before it runs` };
          else break;
        }
        if (c > 1 && c < s.length) s = s.slice(c);
        else break;
      } else if (d === "command") {
        let c = 1, x = false;
        while (c < s.length && s[c].startsWith("-") && s[c] !== "--") {
          let p = s[c];
          if (!/^-[pvV]+$/.test(p)) return { ok: false, reason: `'command ${p}' can't be checked before it runs` };
          if (p.includes("v") || p.includes("V")) x = true;
          c++;
        }
        if (s[c] === "--") c++;
        if (x || c >= s.length) break;
        s = s.slice(c);
      } else if (s[0] === "builtin" || s[0] === "noglob") {
        let c = s[0] === "builtin" && s[1] === "--" ? 2 : 1;
        if (c < s.length) s = s.slice(c);
        else break;
      } else if (d === "xargs") if (s.length >= 2 && !s[1].startsWith("-")) s = s.slice(1), o = true;
      else break;
      else break;
    }
    let l = s[0];
    if (l === void 0) continue;
    let u = XO(l);
    if (l === "") return { ok: false, reason: "Empty command name \u2014 argv[0] may not reflect what bash runs" };
    if (ei(l)) return { ok: false, reason: "Command name is runtime-determined (placeholder argv[0])" };
    if (l.startsWith("-") || l.startsWith("|") || l.startsWith("&")) return { ok: false, reason: "Command appears to be an incomplete fragment" };
    let f = (0, import_chunk_xcgcdx61.ko)(obs, u), g = u === "test" || u === "[" || u === "[[";
    if (f !== void 0) for (let h = 1; h < s.length; h++) {
      let d = s[h], c = s[h + 1];
      if (f.has(d) && c !== void 0 && (c.includes("[") || ei(c))) return { ok: false, reason: `'${u} ${d}' operand contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts` };
      if (g) {
        if (d === "-t" && c !== void 0 && !Hdn.test(c)) return { ok: false, reason: `'${u} -t' operand is non-numeric \u2014 zsh arith-evals identifiers (may run $(cmd))` };
        continue;
      }
      if (d.length > 2 && d[0] === "-" && d[1] !== "-" && !d.includes("[")) {
        for (let x of f) if (x.length === 2 && d.includes(x[1])) {
          let p = s[h + 1];
          if (p !== void 0 && (p.includes("[") || ei(p))) return { ok: false, reason: `'${u} ${x}' (combined in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts` };
        }
      }
      if (d.length > 2 && d[0] === "-" && u !== "read") for (let x of f) {
        if (x.length !== 2) continue;
        let p = d.indexOf(x[1], 1);
        if (p === -1 || p === d.length - 1) continue;
        let m = d.slice(p + 1);
        if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(m) || ei(m)) return { ok: false, reason: `'${u} ${x}' (fused in '${d}') operand contains array subscript \u2014 bash evaluates $(cmd) in subscripts` };
      }
    }
    if (g) for (let h = 2; h < s.length; h++) {
      if (!fBn.has(s[h])) continue;
      for (let d of [s[h - 1], s[h + 1]]) {
        if (d === void 0) continue;
        if (d.includes("[") || !Hdn.test(d)) return { ok: false, reason: `'${u} ... ${s[h]} ...' operand is non-numeric \u2014 \`[[\` arithmetically evaluates identifiers/subscripts (may run $(cmd))` };
      }
    }
    if (sbs.has(u)) {
      let h = false;
      for (let d = 1; d < s.length; d++) {
        let c = s[d];
        if (h !== false) {
          let x = h;
          if (h = false, x === "numeric" && !Zt.test(c)) return { ok: false, reason: `'read ${s[d - 1]}' operand '${c}' is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))` };
          if (x === "prompt" && (Zr.test(c) || c[0] === "-" && /[A-Za-z_][A-Za-z0-9_]*\[/.test(c) || c.includes(Ire))) return { ok: false, reason: `'read ${s[d - 1]}' operand '${c}' is a subscripted NAME, dash-prefixed with a subscript, or runtime-determined \u2014 zsh -p takes no operand; may arith-eval the subscript and run $(cmd)` };
          continue;
        }
        if (c[0] === "-") {
          if (u === "read") {
            if (Ht.has(c)) h = "numeric";
            else if (c === "-p") h = "prompt";
            else if (oe.has(c)) h = "string";
            else if (c.length > 2) for (let x = 1; x < c.length; x++) {
              let p = "-" + c[x], m = Ht.has(p);
              if (m || oe.has(p)) {
                if (x === c.length - 1) h = m ? "numeric" : p === "-p" ? "prompt" : "string";
                else if (m && !Zt.test(c.slice(x + 1))) return { ok: false, reason: `'read ${p}' (fused in '${c}') operand is non-numeric \u2014 zsh arith-evals subscripts/expressions (may run $(cmd))` };
                else if (p === "-p") {
                  let b = c.slice(x + 1);
                  if (/[A-Za-z_][A-Za-z0-9_]*\[/.test(b) || b.includes(Ire)) return { ok: false, reason: `'read -p' fused remainder '${b}' contains a subscripted identifier or cmdsub \u2014 on zsh (-p is no-arg) this may reach matheval via a following option and run $(cmd)` };
                }
                break;
              }
            }
          }
          continue;
        }
        if (c.includes("[") || ei(c)) return { ok: false, reason: `'${u}' positional NAME '${c}' contains array subscript or runtime-determined value \u2014 bash evaluates $(cmd) in subscripts` };
      }
    }
    if (Djt.has(u)) {
      let h = u === "declare" || u === "typeset" || u === "local", d = h || u === "export" || u === "readonly", c = h || u === "readonly", x = false, p = false;
      for (let y = 1; y < s.length; y++) {
        let w = s[y];
        if (c) {
          if (/^[+-].*f/.test(w)) x = true;
          if (/^[+-].*[uU]/.test(w)) p = true;
          if (x && p) return { ok: false, reason: `'${u}' with both -f and -u/-U flags (reached as plain command via wrapper/quote) \u2014 zsh marks a function for autoload (synonym of 'autoload')` };
        }
        if (h && ft.test(w)) return { ok: false, reason: `'${u}' with -n/-i/-a/-A/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) changes assignment eval semantics` };
        if (Bt.has(u) && /^[+-].*[iluEFLRZ]/.test(w)) return { ok: false, reason: `'${u}' with -i/-E/-F/-L/-R/-Z/-l/-u flag (reached as plain command via wrapper/quote) \u2014 zsh bin_typeset mathevals, width-truncates, or case-converts the value` };
        if ((d || u === "private") && /^[+-].*m/.test(w)) return { ok: false, reason: `'${u}' with -m/+m flag (reached as plain command via wrapper/quote) \u2014 zsh pattern-assigns every matching variable` };
        if (Bt.has(u) && /^[+-].*T/.test(w)) return { ok: false, reason: `'${u} -T' creates a user-defined zsh tied pair \u2014 tracked literals for its operands are unreliable` };
        let k = w.includes("[") && /[$`]/.test(w);
        if (k || ei(w)) return { ok: false, reason: k ? `'${u}' operand '${$G(w)}' contains array subscript with expansion \u2014 shell arith-evals $(cmd) in subscripts` : `'${u}' operand '${$G(w)}' is runtime-determined and may carry an array subscript \u2014 shell arith-evals $(cmd) in subscripts` };
        if ((u === "float" || u === "integer") && !/^[+-]/.test(w)) return { ok: false, reason: `zsh '${u}' operand \u2014 implicit typeset -E/-i arithmetically evaluates the (existing or assigned) value` };
      }
      let m = d && l === u ? en(u, s.slice(1)) : null;
      if (m !== null) return { ok: false, reason: m };
      let b = l === u && (t?.hasLoop !== false || i !== e.at(-1)) ? tn(u, s.slice(1)) : null;
      if (b !== null) return { ok: false, reason: b };
    }
    if (u === "printf") for (let h = 1; h < s.length; h++) {
      let d = s[h], c = d.includes("[") && /[$`]/.test(d);
      if (c || ei(d)) return { ok: false, reason: c ? `printf operand '${$G(d)}' contains array subscript with expansion \u2014 zsh arith-evals %d/%i operands (may run $(cmd))` : `printf operand '${$G(d)}' is runtime-determined and may carry an array subscript \u2014 zsh arith-evals %d/%i operands (may run $(cmd))` };
    }
    if (u === "set") for (let h = 1; h < s.length; h++) {
      let d = s[h];
      if (d === "--") break;
      if (!/^[-+]/.test(d)) continue;
      for (let c = 1; c < d.length; c++) {
        let x = d[c];
        if (x === "o") {
          let p = c < d.length - 1 ? d.slice(c + 1) : s[h + 1];
          if (p !== void 0 && p !== "" && !abs.has(p.toLowerCase().replace(/[_-]/g, ""))) return { ok: false, reason: `'set -o/+o ${p}' changes shell parsing/globbing state \u2014 can enable globsubst/extendedglob and defeat static analysis` };
          if (c === d.length - 1) h++;
          break;
        }
        if (x === "A") break;
        if (!lbs.has(x)) return { ok: false, reason: `'set ${d[0]}${x}' changes shell option state (allexport/keyword/\u2026) \u2014 defeats static env-var analysis; see SET_O_SAFE_LETTERS` };
      }
    }
    if (u === "print" && s.some((h) => ibs.test(h))) return { ok: false, reason: "What 'print -P' expands can't be checked before it runs" };
    if (u === "jobs") for (let h = 1; h < s.length; h++) {
      let d = s[h];
      if (/^[+-].*x/.test(d)) return { ok: false, reason: "What 'jobs -x' starts can't be checked before it runs" };
    }
    if (import_chunk_nw2twe6x.lbo.has(l)) return { ok: false, reason: `Shell keyword '${u}' as command name \u2014 tree-sitter mis-parse` };
    if (o) {
      if (u === "find" || u === "jq") return { ok: false, reason: `What xargs adds to ${u} can't be checked before it runs` };
      if (Cat.has(u)) {
        let h = false;
        for (let d = 1; d < s.length; d++) {
          let c = s[d];
          if (c === "--") {
            h = d + 1 < s.length;
            break;
          }
          if (c === "-" || !c.startsWith("-")) {
            h = true;
            break;
          }
          if (!c.includes("=") && Br.test(c)) d++;
        }
        if (!h) return { ok: false, reason: `The program xargs gives ${u} can't be checked before it runs` };
      }
    }
    if (u === "jq") {
      for (let h of s) {
        if (/\bsystem\s*\(/.test(h)) return { ok: false, reason: "jq command contains system() function which executes arbitrary commands" };
        if (/\b(?:include|import)\b/.test(h)) return { ok: false, reason: 'jq command contains include/import \u2014 modules can load arbitrary .jq files via {search:"."} and call env or other builtins' };
      }
      if (s.some((h) => /^(?:-[A-Za-z]*[fL]|--(?:from-file|rawfile|slurpfile|library-path)(?:$|=))/.test(h))) return { ok: false, reason: "jq command contains dangerous flags that could execute code or read arbitrary files" };
    }
    if (Cat.has(u)) {
      if (i.hasUnquotedGlob || n && R2e(i)) return { ok: false, reason: "awk command contains unquoted glob characters \u2014 could glob-expand to a planted program or flag before awk runs" };
      for (let h of s) {
        let d = uBn(h);
        if (d !== false) return { ok: false, reason: d };
        if (ei(h)) return { ok: false, reason: "awk is given text that can't be checked before it runs" };
      }
      if (s.some((h) => /^-[bcCghIkMnNOPrsStV]*[fEileDW]/.test(h) || /^--(?:fil|e|i|lo|s|de)/.test(h))) return { ok: false, reason: "awk has an option that can't be checked before it runs" };
    }
    if (u === "find") {
      if (i.hasUnquotedGlob || n && R2e(i)) return { ok: false, reason: "find contains unquoted glob characters \u2014 could glob-expand to a dangerous action before find runs" };
      let h = false;
      for (let d = 1; d < s.length; d++) {
        let c = s[d], x = h;
        if (h = false, Mdn(c)) return { ok: false, reason: `find with '${c}' executes commands or modifies files \u2014 cannot be auto-allowed by a Bash(find:*) prefix rule` };
        if (KEr(c)) return { ok: false, reason: `find option '${c}' is read differently by different versions of find \u2014 could hide a following action` };
        if (!x && VEr(c)) {
          h = true;
          continue;
        }
        if (!x && cBn(c)) {
          d++;
          continue;
        }
        if (ei(c)) return { ok: false, reason: "find argument is runtime-determined \u2014 could resolve to a dangerous action" };
        if (/[[\]*?]/.test(c)) return { ok: false, reason: `find argument '${c}' contains glob characters \u2014 could glob-expand to a dangerous action` };
      }
    }
    if (Pn(l)) return { ok: false, reason: `Zsh builtin '${u}' can bypass security checks` };
    let _ = $n(l, s.slice(1));
    if (_ !== null) return { ok: false, reason: _ };
    if (x2e.has(l)) if (u === "fc" && !s.slice(1).some((h) => /^[+-].*[es]/.test(h))) ;
    else if (u === "compgen" && !s.slice(1).some((h) => /^[+-].*[CFW]/.test(h))) ;
    else return { ok: false, reason: `'${u}' evaluates arguments as shell code` };
    if (lme.has(u) && s.length > 1) return { ok: false, reason: `What '${u}' starts can't be checked before it runs` };
    for (let h of i.argv) if (h.includes("/proc/") && ct.test(h)) return { ok: false, reason: "Accesses /proc/*/environ which may expose secrets" };
    for (let h of i.redirects) if (h.target.includes("/proc/") && ct.test(h.target)) return { ok: false, reason: "Accesses /proc/*/environ which may expose secrets" };
    for (let h of i.argv) if (h.includes(`
`) && Ae.test(h)) r ??= { ok: false, kind: "newline-hash", reason: "Newline followed by # inside a quoted argument can hide arguments from path validation" };
    for (let h of i.envVars) if (h.value.includes(`
`) && Ae.test(h.value)) r ??= { ok: false, kind: "newline-hash", reason: "Newline followed by # inside an env var value can hide arguments from path validation" };
    for (let h of i.redirects) if (h.target.includes(`
`) && Ae.test(h.target)) r ??= { ok: false, kind: "newline-hash", reason: "Newline followed by # inside a redirect target can hide arguments from path validation" };
  }
  if (r) return r;
  return { ok: true };
}
