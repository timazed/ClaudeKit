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
var chunk_zg2mw0h6_exports = {};
__export(chunk_zg2mw0h6_exports, {
  A7s: () => A7s,
  C7l: () => C7l,
  C7s: () => C7s,
  E7l: () => E7l,
  E7s: () => E7s,
  GIa: () => GIa,
  Ker: () => Ker,
  Kht: () => Kht,
  Kqr: () => Kqr,
  OHt: () => OHt,
  R7s: () => R7s,
  SKo: () => SKo,
  T7l: () => T7l,
  T7s: () => T7s,
  U$e: () => U$e,
  Vht: () => Vht,
  Vqr: () => Vqr,
  Yqr: () => Yqr,
  _Ko: () => _Ko,
  bKo: () => bKo,
  k7l: () => k7l,
  k7s: () => k7s,
  qqr: () => qqr,
  v7l: () => v7l,
  v7s: () => v7s,
  yKo: () => yKo,
  zIa: () => zIa,
  zqr: () => zqr
});
module.exports = __toCommonJS(chunk_zg2mw0h6_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_vc58gmrj = require("/$bunfs/root/chunk-vc58gmrj.js");
var import_chunk_akv83krc = require("/$bunfs/root/chunk-akv83krc.js");
var import_chunk_sghy0qej = require("/$bunfs/root/chunk-sghy0qej.js");
var import_chunk_bne5t4g3 = require("/$bunfs/root/chunk-bne5t4g3.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
(0, import_chunk_adx6804h.B)();
var Vht = "__replStep", k7s = `{${Vht}();`, E7s = `(${Vht}(),`, v7s = `;${Vht}();`, zqr = "__replRaw", Ker = "__replAt", W = "__replEnter", z = 3e8, T7s = 64, GIa = 5;
function C7s() {
  return z;
}
var M = 500, L = 2e6, U = 120, Vqr = `0/*${Vht}*/||`, _Ko = `0/*${Vht}*/,`, yKo = `${zqr}(${Vqr}`;
function SKo(e) {
  return e.replaceAll(yKo, "(").replaceAll(Vqr, "").replaceAll(_Ko, "");
}
var C = "This script is too costly to parse: it nests default values, destructuring or for heads too deeply, nests a lot of code too deeply, or has a regular expression with too many named groups. Move the inner parts into variables or functions of their own.", G = "bun:wrap";
class Kht extends Error {
  place;
  constructor(e, s) {
    super(e);
    this.place = s;
  }
}
function U$e(e, s) {
  let { parse: l } = require("/$bunfs/root/chunk-dzjs7e5t.js"), i = 0, r, d = false;
  try {
    return l(e, { onRegExp: (o) => {
      if (i += F(o), i > L) throw new Kht(C);
    }, onToken: (o) => {
      if (d) s?.add(o.start);
      d = o.type === "(" && (r?.type !== "name" || r.end !== o.start || /^(of|yield)$/.test(e.slice(r.start, r.end))), r = o;
    }, sourceType: "script", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true });
  } catch (o) {
    if (!(o instanceof SyntaxError) || !("loc" in o) || typeof o.loc !== "object" || o.loc === null || !("line" in o.loc) || !("column" in o.loc) || typeof o.loc.line !== "number" || typeof o.loc.column !== "number") throw o;
    let { line: m, column: y } = o.loc, h = ` (${m}:${y})`;
    throw new Kht(o.message.endsWith(h) ? o.message.slice(0, -h.length) : o.message, { line: m, column: y });
  }
}
function zIa(e) {
  let s = require("/$bunfs/root/chunk-qkq8jy2e.js"), l = /* @__PURE__ */ new Set(), i = U$e(e, l), r = [], d = [], o = Kqr(i);
  if (o !== void 0 && !o.async) r.push({ at: o.start, text: "async " });
  let m = (t) => {
    if (t.type === "BlockStatement") {
      let f = t.body.findLast((g) => g.type === "ExpressionStatement" && g.directive !== void 0);
      r.push(f === void 0 ? { at: t.start + 1, text: `${Vht}();` } : { at: f.end, text: v7s });
      return;
    }
    r.push({ at: t.start, text: k7s }), r.push({ at: t.end, text: "}" });
  }, y = (t) => {
    if (t.body.type === "BlockStatement") {
      m(t.body);
      return;
    }
    l.delete(t.body.start), r.push({ at: t.body.start, text: E7s }), r.push({ at: t.body.end, text: ")" });
  };
  s.full(i, (t) => {
    switch (t.type) {
      case "Identifier":
        if (t.name === Vht) throw SyntaxError("REPL: the name __replStep is reserved. Use another name.");
        if (t.name === zqr) throw SyntaxError("REPL: the name __replRaw is reserved. Use another name.");
        if (t.name === Ker) throw SyntaxError("REPL: the name __replAt is reserved. Use another name.");
        if (t.name === W) throw SyntaxError("REPL: the name __replEnter is reserved. Use another name.");
        return;
      case "ObjectExpression": {
        let [f] = t.properties;
        if (t.properties.length === 1 && f?.type === "Property" && (f.key.type === "Literal" ? f.key.value === "raw" : !f.computed && f.key.type === "Identifier" && f.key.name === "raw")) d.push(t);
        return;
      }
      case "WithStatement":
        throw SyntaxError("REPL: a with block is not supported.");
      case "ImportExpression":
        if (t.source.type === "Literal" && t.source.value === G) throw new Kht("This script uses syntax that REPL code cannot run, such as a decorator, an `accessor` field or a `using` declaration: it needs helper functions that are loaded by import, and REPL code cannot import.");
        return;
      case "ForStatement":
      case "ForInStatement":
      case "ForOfStatement":
      case "WhileStatement":
      case "DoWhileStatement":
      case "FunctionDeclaration":
      case "FunctionExpression":
        m(t.body);
        return;
      case "ArrowFunctionExpression":
        y(t);
        return;
      default:
        return;
    }
  });
  let { nesting: h, cost: E, costAsWritten: u, rewritable: x } = V(i, l);
  if (h > M) throw new Kht(`This script is nested too deeply: the limit is ${M} levels of syntax. Build a deep value with a loop or JSON.parse.`);
  if (E > L) throw new Kht(C);
  if (u > L) r = [...x.map((t) => ({ at: t.end, text: ")" })), ...r, ...x.map((t) => ({ at: t.start, text: t.type === "ArrayExpression" || t.type === "ObjectExpression" ? `(${Vqr}` : `(${_Ko}` }))];
  r = [...d.map((t) => ({ at: t.end, text: "))" })), ...r, ...d.map((t) => ({ at: t.start, text: `(${yKo}` }))];
  let S = "", w = 0;
  for (let { at: t, text: f } of r.sort((g, R) => g.at - R.at)) S += e.slice(w, t) + f, w = t;
  return S + e.slice(w);
}
function F(e) {
  let s = e.split(/\(\?<[^=!]/).length - 1;
  return s && s * e.split(/[(|]/).length;
}
function V(e, s) {
  let l = 0, i = 0, r = 0, d = 0, o = 0, m = [], y = [[e, 0, 0, 1, 1, false]];
  for (let E = y.pop(); E; E = y.pop()) {
    let [u, x, S, w, t, f] = E;
    if (l = Math.max(l, x), i = Math.max(i, x + S / 16), r++, u.type === "Literal" && u.regex) {
      let a = F(u.regex.pattern);
      d += a && a * w, o += a && a * t;
    }
    let g = /^(Variable|Function|Catch)/.test(u.type) || f && /Pattern|Property|Rest/.test(u.type), R = u.type === "ArrayExpression" || u.type === "ObjectExpression";
    for (let a of Object.values(u).flat()) {
      if (!(0, import_chunk_akv83krc.zAr)(a)) continue;
      let T = a.start === u.start || u.type === "IfStatement" && a === u.alternate && a.type === "IfStatement", j = u.type === "ArrowFunctionExpression" && a !== u.body && a.type !== "Identifier" || a.type !== "VariableDeclaration" && (u.type === "ForStatement" ? a === u.init : (u.type === "ForInStatement" || u.type === "ForOfStatement") && a === u.left) || u.type === "CallExpression" && u.callee.type === "Identifier" && u.callee.name === "async" && a !== u.callee, D = !g && (a.type === "ArrayPattern" || a.type === "ObjectPattern"), v = a.type === "ArrayExpression" || a.type === "ObjectExpression", I = (v || a.type === "AssignmentExpression" || a.type === "SequenceExpression") && s.has(a.start) && !(T && u.type === "SequenceExpression"), b = (j ? 2 : 1) * (D ? 2 : 1), A = b * (R ? 2 : 1) * (I ? 2 : 1);
      R &&= !/Literal$|FunctionExpression$|^CallExpression$/.test(a.type === "Property" ? a.value.type : a.type);
      let N = a.end - a.start;
      if (A > 1) d += N * w * (A - 1);
      if (b > 1) o += N * t * (b - 1);
      if (v || I) m.push(a);
      y.push([a, T ? x : x + 1, T ? S + 1 : S, w * A, t * b, g]);
    }
  }
  let h = 2 * r * Math.max(0, l - U);
  return { nesting: l, cost: o * i + h, costAsWritten: d * i + h, rewritable: m };
}
function Kqr(e) {
  let s = e.body.at(-1);
  if (s === void 0) return;
  if (e.body.slice(0, -1).every((r) => r.type === "VariableDeclaration" && r.kind === "var" && r.declarations.every((d) => d.id.type === "Identifier" && !d.init)) && s.type === "ExpressionStatement" && s.expression.type === "CallExpression" && s.expression.arguments.length === 0) {
    let r = s.expression.callee;
    if ((r.type === "ArrowFunctionExpression" || r.type === "FunctionExpression") && r.params.length === 0 && !r.generator) return r;
  }
  let i = Error("REPL: the script was not run. The REPL tool could not prepare it to run; this is a fault in the tool, not in the script. The same script will fail the same way, so write it another way, and tell the user.");
  throw i.stack = void 0, i;
}
function k7l() {
  return (0, import_chunk_sghy0qej.Pe)("tengu_bright_clover", { safe: false }) && (0, import_chunk_vc58gmrj.zp)("auto", { peek: true }) === "arbiter";
}
function E7l(e) {
  return `${import_chunk_060xwhvh.Tko}: when your work is complete, send one last ${import_chunk_h4t4qfaq.vo} call whose code is only await ${import_chunk_060xwhvh.mu}({message: \`<your full report>\`}). Write the report out in that call, with no variables and no \${}. It is a JavaScript string, so write \\\\ for a backslash, \\\` for a backtick and \\\${ for \${. That call ends your run.` + (e ? ` Do not also send the report with ${import_chunk_bne5t4g3.Ln}: your caller would get it twice.` : "");
}
var A7s = `Your report was not sent, because a script failed or something new arrived first. Read what arrived, then call ${import_chunk_060xwhvh.mu} again.`, OHt = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear()), qqr = (0, import_chunk_t57w17k7.de)(/* @__PURE__ */ new Map(), (e) => e.clear());
function v7l(e, s) {
  let l = R7s(e);
  if (s) OHt.set(e, {});
  else OHt.delete(e);
  return s && l;
}
function R7s(e) {
  return e !== void 0 && OHt.get(e)?.held !== void 0;
}
var q = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ message: (0, import_chunk_adx6804h.n)().describe("Your full report for your caller") })), H = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ success: (0, import_chunk_adx6804h.P)(), message: (0, import_chunk_adx6804h.n)() })), k = "Hand in your final report to your caller. The call ends your run, so make it your last.", Yqr = (0, import_chunk_4vsz8a99.vn)({ registryToolId: "9bd314a8-dbf1-5d05-aeee-8f21ec501ad2", name: import_chunk_060xwhvh.mu, backgrounding: "never", maxResultSizeChars: 1e5, alwaysLoad: true, get inputSchema() {
  return q();
}, get outputSchema() {
  return H();
}, async description() {
  return k;
}, async prompt() {
  return k;
}, create(e) {
  return { async call({ message: s }, l) {
    let i = OHt.get(e.agentId ?? "");
    if (i === void 0 || s.trim() === "") return O(false, "Nothing was sent. Write your report as plain text instead.");
    let r = l.enclosingToolUseId;
    if (i.held !== void 0 && i.held.scriptId === r) return O(false, "Not sent: this script has already reported.");
    return i.held = { message: s, reply: l.parentMessage, scriptId: r }, O(true, "Your report is noted. It goes out unless you are told that it was not sent.");
  } };
}, mapToolResultToToolResultBlockParam(e, s) {
  return { tool_use_id: s, type: "tool_result", content: [{ type: "text", text: (0, import_chunk_w578pjby._)(e) }] };
}, renderToolUseMessage() {
  return null;
} });
function O(e, s) {
  return { data: { success: e, message: s } };
}
function T7l(e, s) {
  let l = e.filter((i) => i !== Yqr);
  return s ? [...l, Yqr] : l;
}
var Y = new Map([["n", `
`], ["t", "	"], ...[..."\\'\"`$"].map((e) => [e, e])]), K = new RegExp(String.raw`^\s*(?:return\s+)?(?:await\s+)?(?:tools\.)?${import_chunk_060xwhvh.mu}\(\s*\{\s*(['"]?)message\1\s*:\s*(String\.raw)?`);
function bKo(e) {
  if (typeof e !== "string") return;
  let s = K.exec(e), l = e.lastIndexOf("}");
  if (s === null || !/^\}\s*\)\s*;?\s*$/.test(e.slice(l))) return;
  let i = (0, import_chunk_7cfjrnwy.Lm)(e.slice(s[0].length, l).trimEnd(), ",").trimEnd(), r;
  try {
    r = U$e(`(${i})`).body[0];
  } catch {
    return;
  }
  let d = r?.type === "ExpressionStatement" ? r.expression : void 0;
  if (d?.start !== 1 || d.end !== i.length + 1) return;
  let o = s[2] !== void 0, m = d.type === "Literal" && !o ? d.value : d.type === "TemplateLiteral" && d.quasis.length === 1 ? d.quasis[0]?.value[o ? "raw" : "cooked"] : void 0;
  if (typeof m !== "string") return;
  let y = i.slice(1, -1);
  return { text: o ? y : y.replace(/\\([\s\S])/g, (h, E) => Y.get(E) ?? h), passed: m };
}
function C7l(e, s) {
  let l = e.findLast((r) => r.type === "assistant" && !r.isVirtual), i = l && qqr.get(l.uuid);
  if (l === void 0 || i === void 0) return;
  return qqr.delete(l.uuid), i.review !== null || s?.includes(i.text) ? i.review : void 0;
}
