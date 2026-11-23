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
var chunk_sps8tde9_exports = {};
__export(chunk_sps8tde9_exports, {
  $To: () => $To,
  BAr: () => BAr,
  BTs: () => BTs,
  Cxe: () => Cxe,
  D4l: () => D4l,
  FS: () => FS,
  H4l: () => H4l,
  L4l: () => L4l,
  M4l: () => M4l,
  QGt: () => QGt,
  UTo: () => UTo
});
module.exports = __toCommonJS(chunk_sps8tde9_exports);
var import_chunk_6sjp0rab = require("/$bunfs/root/chunk-6sjp0rab.js");
var import_chunk_p9da7c9y = require("/$bunfs/root/chunk-p9da7c9y.js");
var import_chunk_akv83krc = require("/$bunfs/root/chunk-akv83krc.js");
var import_path = require("path");
var f = (r, e) => r.id === e || r.params.includes(e);
var c = { VariableDeclarator: (r, e) => r.id === e, FunctionDeclaration: f, FunctionExpression: f, ArrowFunctionExpression: (r, e) => r.params.includes(e), ClassDeclaration: (r, e) => r.id === e, ClassExpression: (r, e) => r.id === e, CatchClause: (r, e) => r.param === e, AssignmentPattern: (r, e) => r.left === e, RestElement: (r, e) => r.argument === e, ArrayPattern: (r, e) => r.elements.includes(e), Property: (r, e, o) => r.value === e && o?.type === "ObjectPattern", ImportSpecifier: (r, e) => r.local === e, ImportDefaultSpecifier: (r, e) => r.local === e, ImportNamespaceSpecifier: (r, e) => r.local === e };
var M4l = (r) => c[r.type];
var H4l = (r, e) => (e?.type === "Property" || e?.type === "PropertyDefinition" || e?.type === "MethodDefinition") && e.key === r && !e.computed;
function D4l(r) {
  let e = /* @__PURE__ */ new WeakMap();
  return (o) => {
    let t = e.get(o);
    if (t !== void 0) return t;
    let n = r(o);
    return e.set(o, n), n;
  };
}
function FS(r, e, o) {
  let t = [{ node: r, parent: void 0, grandparent: void 0 }];
  for (let n = t.pop(); n !== void 0; n = t.pop()) {
    if (e(n), o?.(n.node)) continue;
    let a = Object.keys(n.node);
    for (let s = a.length - 1; s >= 0; s -= 1) {
      let i = a[s];
      if (i === void 0 || i === "type" || i === "start" || i === "end") continue;
      let p = n.node[i];
      if (Array.isArray(p)) for (let l = p.length - 1; l >= 0; l -= 1) {
        let d = p[l];
        if ((0, import_chunk_akv83krc.zAr)(d)) t.push({ node: d, parent: n.node, grandparent: n.parent });
      }
      else if ((0, import_chunk_akv83krc.zAr)(p)) t.push({ node: p, parent: n.node, grandparent: n.parent });
    }
  }
}
function L4l(r) {
  let e = /* @__PURE__ */ new Map();
  return FS(r, ({ node: o, parent: t }) => {
    if (t !== void 0) e.set(o, t);
  }), e;
}
function BTs(r) {
  let e;
  for (let o of r.properties) {
    if (o.type === "SpreadElement") {
      e = e && { ...e, isSpreadAfter: true };
      continue;
    }
    let { key: t } = o;
    if (!o.computed && o.kind === "init" && (t.type === "Identifier" && t.name === "module" || t.type === "Literal" && t.value === "module")) e = { property: o, isSpreadAfter: false };
  }
  return e;
}
function QGt(r) {
  if (r === void 0) return "no argument";
  switch (r.type) {
    case "Identifier":
      return `the variable ${r.name}`;
    case "TemplateLiteral":
      return "a template with a substitution";
    case "SpreadElement":
      return "a spread";
    case "Literal":
      return `the literal ${r.raw ?? String(r.value)}`;
    case "MemberExpression":
      return "a member read";
    case "CallExpression":
      return "a call";
    case "BinaryExpression":
      return "a concatenation";
    case "ObjectExpression":
      return "an object whose plugin or key is not a string literal";
    default:
      return `a ${r.type}`;
  }
}
function Cxe(r) {
  if (r.type === "Literal") return typeof r.value === "string" ? r.value : void 0;
  if (r.type !== "TemplateLiteral" || r.expressions.length !== 0) return;
  let e = r.quasis[0]?.value.cooked;
  return e === void 0 || e === null ? void 0 : e;
}
function $To(r, e) {
  if (!e || e.type !== "ObjectExpression") return { at: e ?? r, problem: `Client takes its props as an object literal ({ module: "./board.tsx", key }), so the surface module it names can be read before it runs (got ${QGt(e)})` };
  let o = BTs(e);
  if (!o) return { at: e, problem: `Client names no module: give it module, the surface module's path as a string literal ("./board.tsx")` };
  if (o.isSpreadAfter) return { at: o.property, problem: "a spread after module in Client(...) could replace it: put module after the spread" };
  let { value: t } = o.property, n = Cxe(t);
  if (n === void 0) return { at: t, problem: `Client module must be a string literal, the surface module's path relative to this file (got ${QGt(t)})` };
  return { at: t, spelled: n };
}
var UTo = "h";
function BAr(r) {
  let { spelled: e, file: o, root: t } = r, n = `Client module "${e}"`;
  if (!(0, import_chunk_p9da7c9y.MTt)(e)) return { problem: `${n} is not relative: spell the surface module's path from this file ("./board.tsx")` };
  if (!(0, import_chunk_p9da7c9y.L2n)(e)) return { problem: `${n} is not named like code: a surface module's path ends in ` + import_chunk_6sjp0rab.uDo };
  let a = (0, import_path.resolve)((0, import_path.dirname)(o), e), s = (0, import_path.relative)((0, import_path.resolve)(t), a);
  return s === ".." || s.startsWith(`..${import_path.sep}`) || (0, import_path.isAbsolute)(s) ? { problem: `${n} leaves the plugin's folder` } : { module: s.split(import_path.sep).join("/") };
}
