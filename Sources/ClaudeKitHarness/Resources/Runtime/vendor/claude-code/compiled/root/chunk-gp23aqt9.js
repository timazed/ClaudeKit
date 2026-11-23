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
var chunk_gp23aqt9_exports = {};
__export(chunk_gp23aqt9_exports, {
  $oo: () => $oo,
  Boo: () => Boo,
  K8a: () => K8a,
  Uoo: () => Uoo,
  V8a: () => V8a,
  _fr: () => _fr,
  byi: () => byi,
  gR: () => gR,
  gfr: () => gfr,
  mHn: () => mHn,
  pHn: () => pHn,
  q8a: () => q8a,
  yss: () => yss,
  z8a: () => z8a
});
module.exports = __toCommonJS(chunk_gp23aqt9_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_n5qd9b6p = require("/$bunfs/root/chunk-n5qd9b6p.js");
var import_chunk_dd5safr0 = require("/$bunfs/root/chunk-dd5safr0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_r3mm3x33 = require("/$bunfs/root/chunk-r3mm3x33.js");
var pHn = "usage limit", $oo = ` (after ${pHn})`;
function mHn(e, n = false) {
  let t = (0, import_chunk_dd5safr0.PA)(e, n);
  if (t === void 0) return;
  return /^\d/.test(t) ? `resets at ${t}` : `resets ${t}`;
}
function M(e) {
  let n = mHn(e);
  return n === void 0 ? pHn : `${pHn} ${n}`;
}
function k({ resetsAt: e, isHeldForLogin: n }) {
  return n ? "login changed \xB7 send a prompt to continue" : M(e);
}
function z8a(e) {
  return `Paused \xB7 ${k(e)}`;
}
function V8a(e) {
  if (e.isHeldForLogin) return "Paused \xB7 login changed \xB7 continue it from the terminal";
  let n = mHn(e.resetsAt, true) ?? "resets";
  return `Paused \xB7 continues after the ${pHn} ${n}`;
}
function byi(e) {
  return [["paused", k(e)], ["paused", e.isHeldForLogin ? "login changed" : pHn], ["paused"]];
}
var g = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]), d = /(?:\s|\/\/[^\n\r\u2028\u2029]*(?:[\n\r\u2028\u2029]|$)|\/\*[^*]*\*+(?:[^/*][^*]*\*+)*\/)*/y, W = /[\n\r\u2028\u2029]/, E = /[A-Za-z_$][\w$]*/y, j = /[\w$\\]/, b = /(?:(?:0|[1-9][0-9]*)(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?/y, m = /x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4})|u\{([0-9a-fA-F]+)\}/y, N = /* @__PURE__ */ new Map([["n", `
`], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"]]);
function v(e, n) {
  if (e[n] !== "{") return;
  try {
    return A(e, n);
  } catch {
    return;
  }
}
function x(e, n) {
  let t = f(e, n);
  if (e[t] === ";") return t + 1;
  if (t >= e.length) return n;
  if (!W.test(e.slice(n, t))) return;
  let r = w(e, t);
  if (r === void 0 || r === "in" || r === "instanceof") return;
  return n;
}
function f(e, n) {
  return d.lastIndex = n, d.exec(e) ? d.lastIndex : n;
}
function w(e, n) {
  E.lastIndex = n;
  let t = E.exec(e);
  if (!t || P(e, n + t[0].length)) return;
  return t[0];
}
function P(e, n) {
  let t = e[n];
  return t !== void 0 && (j.test(t) || t.charCodeAt(0) > 127);
}
function z(e, n) {
  switch (e[n]) {
    case "{":
      return A(e, n);
    case "[":
      return G(e, n, "]", z);
    case "'":
    case '"':
    case "`":
      return I(e, n);
    case "-": {
      let r = R(e, f(e, n + 1));
      return r && { value: -r.value, end: r.end };
    }
    default:
      break;
  }
  let t = R(e, n);
  if (t) return t;
  switch (w(e, n)) {
    case "true":
      return { value: true, end: n + 4 };
    case "false":
      return { value: false, end: n + 5 };
    case "null":
      return { value: null, end: n + 4 };
    default:
      return;
  }
}
function A(e, n) {
  let t = G(e, n, "}", D);
  if (!t) return;
  let r = /* @__PURE__ */ Object.create(null);
  for (let [o, i] of t.value) r[o] = i;
  return { value: r, end: t.end };
}
function D(e, n) {
  let t = e[n], r;
  if (t === "'" || t === '"') r = I(e, n);
  else {
    let s = w(e, n);
    r = s === void 0 ? void 0 : { value: s, end: n + s.length };
  }
  if (!r || g.has(r.value)) return;
  let o = f(e, r.end);
  if (e[o] !== ":") return;
  let i = z(e, f(e, o + 1));
  return i && { value: [r.value, i.value], end: i.end };
}
function G(e, n, t, r) {
  let o = [], i = n + 1;
  while (true) {
    if (i = f(e, i), e[i] === t) return { value: o, end: i + 1 };
    if (o.length > 0) {
      if (e[i] !== ",") return;
      if (i = f(e, i + 1), e[i] === t) return { value: o, end: i + 1 };
    }
    let s = r(e, i);
    if (!s) return;
    o.push(s.value), i = s.end;
  }
}
function R(e, n) {
  b.lastIndex = n;
  let t = b.exec(e);
  if (!t) return;
  let r = n + t[0].length;
  if (P(e, r) || e[r] === ".") return;
  return { value: Number(t[0]), end: r };
}
function I(e, n) {
  let t = e[n], r = t === "`", o = "", i = n + 1, s = i;
  while (s < e.length) {
    let a = e[s];
    if (a === t) return { value: o + e.slice(i, s), end: s + 1 };
    if (a === "\\") {
      let l = F(e, s);
      if (!l) return;
      o += e.slice(i, s) + l.value, s = i = l.end;
    } else if (r ? a === "$" && e[s + 1] === "{" : a === `
` || a === "\r") return;
    else if (r && a === "\r") o += `${e.slice(i, s)}
`, s = i = s + (e[s + 1] === `
` ? 2 : 1);
    else s++;
  }
  return;
}
function F(e, n) {
  let t = e[n + 1];
  if (t === void 0) return;
  let r = N.get(t);
  if (r !== void 0) return { value: r, end: n + 2 };
  if (t === "0") {
    let o = e[n + 2];
    if (o !== void 0 && o >= "0" && o <= "9") return;
    return { value: "\0", end: n + 2 };
  }
  if (t >= "1" && t <= "9") return;
  if (t === "x" || t === "u") {
    m.lastIndex = n + 1;
    let o = m.exec(e);
    if (!o) return;
    let i = parseInt(o[1] ?? o[2] ?? o[3] ?? "", 16);
    if (i > 1114111) return;
    return { value: String.fromCodePoint(i), end: m.lastIndex };
  }
  if (t === "\r") return { value: "", end: n + (e[n + 2] === `
` ? 3 : 2) };
  return { value: W.test(t) ? "" : t, end: n + 2 };
}
var C = new RegExp(`^${d.source}export\\s+const\\s+meta\\s*=\\s*(?=\\{)`);
function gR(e, { validateBody: n = true, maxBytes: t = import_chunk_p1ewvgeh.qO } = {}) {
  if (e.length > t) return { error: `Script exceeds ${t} bytes` };
  let r = n ? null : C.exec(e);
  if (r) {
    let u = v(e, r[0].length), h = u && x(e, u.end);
    if (u && h !== void 0) {
      let S = L(u.value);
      if (!("error" in S)) return { meta: S.meta, scriptBody: _(e, h) };
    }
  }
  let { parse: o } = require("/$bunfs/root/chunk-dzjs7e5t.js"), i;
  try {
    i = o(e, { sourceType: "module", allowAwaitOutsideFunction: true, allowReturnOutsideFunction: true });
  } catch (u) {
    return { error: U(u, e) };
  }
  let s = i.body[0];
  if (!s || s.type !== "ExportNamedDeclaration" || !V(s)) return { error: "`export const meta = { name, description, phases }` must be the FIRST statement in the script" };
  let l = s.declaration.declarations[0].init, c;
  try {
    c = O(l);
  } catch (u) {
    return { error: `meta must be a pure literal: ${u instanceof Error ? u.message : String(u)}` };
  }
  let p = L(c);
  if ("error" in p) return p;
  return { meta: p.meta, scriptBody: _(e, s.end) };
}
function _(e, n) {
  return e.slice(n).replace(/^[;\s]*\n/, "").trimStart();
}
function q8a(e) {
  return !("error" in gR(e));
}
var y = 80;
function U(e, n) {
  let t = e instanceof Error ? e.message : String(e), r = "Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping.", o = B(e) ? e.loc : void 0, i = o ? n.split(`
`)[o.line - 1] : void 0;
  if (!o || i === void 0) return `Script parse error: ${t}. ${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
  let s = Math.max(0, Math.min(o.column, i.length)), a = Math.max(0, Math.min(s - Math.floor(y / 2), i.length - y)), l = i.slice(a, a + y), c = `${(0, import_chunk_7cfjrnwy.xd)(" ", s - a)}^`;
  return `Script parse error: ${t}

${l}
${c}

${"Workflow scripts must be plain JavaScript \u2014 common causes are TypeScript syntax (type annotations, interfaces, generics) and broken string quoting or escaping."}`;
}
function B(e) {
  if (typeof e !== "object" || e === null || !("loc" in e)) return false;
  let n = e.loc;
  return typeof n === "object" && n !== null && "line" in n && typeof n.line === "number" && "column" in n && typeof n.column === "number";
}
function V(e) {
  let n = e.declaration;
  if (!n || n.type !== "VariableDeclaration") return false;
  if (n.kind !== "const" || n.declarations.length !== 1) return false;
  let t = n.declarations[0];
  return t.id.type === "Identifier" && t.id.name === "meta" && t.init?.type === "ObjectExpression";
}
function T(e) {
  switch (e.type) {
    case "Literal":
      return e.value;
    case "ArrayExpression":
      return e.elements.map((t) => {
        if (t === null) throw Error("sparse arrays not allowed");
        if (t.type === "SpreadElement") throw Error("spread not allowed in meta");
        return T(t);
      });
    case "ObjectExpression":
      return O(e);
    case "TemplateLiteral": {
      let n = e;
      if (n.expressions.length > 0) throw Error("template interpolation not allowed in meta");
      return n.quasis.map((t) => t.value.cooked ?? "").join("");
    }
    case "UnaryExpression": {
      let n = e;
      if (n.operator === "-" && n.argument.type === "Literal" && typeof n.argument.value === "number") return -n.argument.value;
      throw Error("only negative-number unary allowed in meta");
    }
    default:
      throw Error(`non-literal node type in meta: ${e.type}`);
  }
}
function O(e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let t of e.properties) {
    if (t.type !== "Property") throw Error("only plain properties allowed in meta");
    let r = t;
    if (r.computed) throw Error("computed keys not allowed in meta");
    if (r.method || r.kind !== "init") throw Error("methods/accessors not allowed in meta");
    n[H(r)] = T(r.value);
  }
  return n;
}
function H(e) {
  let n;
  if (e.key.type === "Identifier") n = e.key.name;
  else if (e.key.type === "Literal") n = String(e.key.value);
  else throw Error(`unsupported key type in meta: ${e.key.type}`);
  if (g.has(n)) throw Error(`reserved key name not allowed in meta: ${n}`);
  return n;
}
function L(e) {
  let n = e.name;
  if (typeof n !== "string" || n.length === 0) return { error: "meta.name must be a non-empty string" };
  let t = e.description;
  if (typeof t !== "string" || t.length === 0) return { error: "meta.description must be a non-empty string" };
  let r = typeof e.title === "string" && e.title.length > 0 ? e.title : void 0, o = typeof e.whenToUse === "string" ? e.whenToUse : void 0, i = K(e.phases);
  return { meta: { name: n, description: t, title: r, whenToUse: o, phases: i } };
}
function K(e) {
  if (!Array.isArray(e)) return;
  let n = [];
  for (let t of e) if (t && typeof t === "object" && "title" in t) {
    let { title: r, detail: o, model: i } = t;
    if (typeof r === "string") n.push({ title: r, detail: typeof o === "string" ? o : void 0, model: typeof i === "string" ? i : void 0 });
  }
  return n.length > 0 ? n : void 0;
}
function Uoo() {
  return (0, import_chunk_r3mm3x33.vB)()?.settings.workflowSizeGuideline !== void 0;
}
function gfr(e) {
  return (0, import_chunk_qrpds8jv.Fvr)((0, import_chunk_r3mm3x33.vB)()?.settings.workflowSizeGuideline) ?? (0, import_chunk_qrpds8jv.Fvr)(e);
}
function yss(e, n) {
  let t = gfr(e);
  return t === void 0 ? { size: n, isDefault: true } : { size: t, isDefault: false };
}
function Boo(e, n) {
  let t = (0, import_chunk_n5qd9b6p.Ar)();
  return t.sessionStartWorkflowSizeGuideline ??= yss(e, n), t.sessionStartWorkflowSizeGuideline;
}
function _fr(e, n) {
  let { size: t, isDefault: r } = Boo(e, n);
  if (t === "unrestricted") return "";
  return `

${(0, import_chunk_qrpds8jv.Vwl)(t, r)}`;
}
function K8a(e, n, t) {
  let r = yss(n, t).size, o;
  for (let s = e.length - 1; s >= 0; s--) {
    let a = e[s];
    if (a?.type === "attachment" && a.attachment.type === "workflow_size_guideline_change") {
      o = a.attachment.size;
      break;
    }
  }
  let i = o ?? Boo(n, t).size;
  if (r !== i) return [{ type: "workflow_size_guideline_change", size: r }];
  return [];
}
