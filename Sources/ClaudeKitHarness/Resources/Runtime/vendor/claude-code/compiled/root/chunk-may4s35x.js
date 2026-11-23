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
var chunk_may4s35x_exports = {};
__export(chunk_may4s35x_exports, {
  $lt: () => $lt,
  DAr: () => DAr,
  DTs: () => DTs,
  G6i: () => G6i,
  HAr: () => HAr,
  HTs: () => HTs,
  I4l: () => I4l,
  K6i: () => K6i,
  KGt: () => KGt,
  K_: () => K_,
  LAr: () => LAr,
  LTs: () => LTs,
  MTo: () => MTo,
  O4l: () => O4l,
  P4l: () => P4l,
  V6i: () => V6i,
  X6i: () => X6i,
  Y6i: () => Y6i,
  YCl: () => YCl,
  YGt: () => YGt,
  j6i: () => j6i,
  mX: () => mX,
  q6i: () => q6i,
  qGt: () => qGt,
  tD: () => tD,
  tc: () => tc,
  ufn: () => ufn,
  xTt: () => xTt,
  z6i: () => z6i
});
module.exports = __toCommonJS(chunk_may4s35x_exports);
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
var import_chunk_hcg738hf = require("/$bunfs/root/chunk-hcg738hf.js");
var import_chunk_an2g6kvv = require("/$bunfs/root/chunk-an2g6kvv.js");
var import_chunk_c4n202ca = require("/$bunfs/root/chunk-c4n202ca.js");
var import_chunk_k886eq88 = require("/$bunfs/root/chunk-k886eq88.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function O() {
  let o = { log() {
  }, hookFailed() {
  }, handedOn() {
  } };
  return { set: (t) => {
    o = t;
  }, get: () => o };
}
var p = O();
var tc = p.get;
var LAr = p.set;
function K_(o) {
  if (!(0, import_chunk_ma3kja9f.T)(o)) return false;
  let t = Object.getPrototypeOf(o);
  return t === null || !(0, import_chunk_kbr9bg9m.dd)(t) && Object.getPrototypeOf(t) === null;
}
function y(o, t, e) {
  if (typeof o !== "object" || !o || t.has(o)) return e;
  if ((0, import_chunk_kbr9bg9m.dd)(o)) return e;
  let r = (e?.depth ?? 0) + 1;
  if (r > import_chunk_k886eq88.wGe) throw RangeError(import_chunk_k886eq88.Wlt);
  t.add(o);
  let n = Array.isArray(o);
  return n || K_(o) ? { node: o, keys: n ? [] : Object.keys(o), at: 0, depth: r, below: e } : e;
}
function j6i(o, t) {
  let e = y(o, t, void 0);
  while (e !== void 0) {
    let { node: r, keys: n, at: s } = e, f = Array.isArray(r);
    if (s < (f ? r : n).length) e.at = s + 1, e = y(f ? r[s] : r[n[s] ?? ""], t, e);
    else Object.freeze(r), e = e.below;
  }
}
function $lt(o) {
  return j6i(o, /* @__PURE__ */ new Set()), o;
}
var P4l = (o) => o.source.length + o.flags.length + o.text.length + 32;
var YCl = 262144;
var HTs = 8;
var DTs = 256;
var KGt = 65536;
function q(o) {
  if (o === void 0) return "undefined";
  if (typeof o === "function") return "a function";
  if (typeof o === "object" && o) {
    let t = Object.prototype.toString.call(o).replace(/^\[object |\]$/g, "");
    return t === "Object" ? "an object" : `a ${t}`;
  }
  return `a ${typeof o}`;
}
function qGt(o) {
  if (typeof o !== "object" || !o) return false;
  try {
    return Reflect.get(RegExp.prototype, "source", o), true;
  } catch {
    return false;
  }
}
var mX = (o) => K_(o) && !qGt(o);
var A = (o) => o?.paths.some((t) => t.length === 0) === true;
var ufn = "__proto__";
function tD(o, t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let [r, n] of Object.entries(o)) if (r !== ufn && t(n, r)) e[r] = n;
  return e;
}
var O4l = (o) => Object.freeze(tD((0, import_chunk_ma3kja9f.T)(o) ? o : {}, (t) => typeof t === "string"));
function j(o, t) {
  let e = new Set((0, import_chunk_qebpc5de.TEe)(t, o));
  for (let s of (0, import_chunk_qebpc5de.TEe)((0, import_chunk_qebpc5de.Gl)(t), o)) e.add(s);
  let r = new Set(e);
  for (let s of e) for (let f of (0, import_chunk_qebpc5de.nJ)(s, o)) r.add(f);
  let n = /* @__PURE__ */ new Set();
  for (let s of r) {
    n.add(s);
    for (let f of (0, import_chunk_qebpc5de.vEe)(s)) n.add(f);
  }
  return [...n];
}
function G6i(o, t) {
  let e = [];
  for (let r of o.paths) if (r[0] === t) e.push(r.slice(1));
  return e.length > 0 ? { table: o.table, paths: e } : void 0;
}
var I4l = Object.freeze({});
var k = Object.freeze({ "tool.call": [["tool"]], "tool.check": [["tool"]], "tool.judge": [["tool"]], "tool.run": [["tool"]], "agent.call": [["tool"]], "tool.describe": [["tool"]], "tool.offer": [["tool"]], "classic.PreToolUse": [["tool"]], "classic.PostToolUse": [["tool_name"]], "classic.PostToolUseFailure": [["tool_name"]], "classic.PermissionRequest": [["tool_name"]], "classic.PermissionDenied": [["tool_name"]], "classic.PostToolBatch": [["tool_calls", "tool_name"]], "session.append": [["origin", "tool"]], "session.compact": [["messages", "toolUses", "tool"]], "ui.render": [["props", "tool"], ["props", "calls", "tool"]] });
var z6i = (o) => Object.hasOwn(k, o) ? k[o] : void 0;
var w = (o, t, e) => A(o) && typeof t === "string" && typeof e === "string" && j(o.table, e).includes(t);
function LTs(o) {
  let t = typeof o === "function";
  return qGt(o) ? String(o) : Array.isArray(o) ? o.map(LTs).join("|") : mX(o) ? `{${Object.entries(o).map(([e, r]) => mX(r) ? `${e} has ${LTs(r)}` : `${e}=${LTs(r)}`).join(", ")}}` : t ? "function" : String(o);
}
var xTt = (o) => import_chunk_an2g6kvv.Ult.partsOf(o) ?? { source: String(Reflect.get(RegExp.prototype, "source", o)), flags: String(Reflect.get(RegExp.prototype, "flags", o)) };
var _ = "w";
var I = (o) => Array.from(o, (t) => (0, import_chunk_3f4m74y6.xn)(t) === t ? _ : t).join("");
function P(o) {
  let t = o.source.startsWith("^(") && o.source.endsWith(")$");
  return o.flags === "" && import_chunk_c4n202ca.HTo.test(I(o.source)) && (t || o.source.split("|").every((e) => e.startsWith("^") && e.endsWith("$")));
}
var N = (o, t, e) => A(o.names) && typeof e === "string" && P(xTt(t)) && j(o.names.table, e).some((r) => o.test(t, r));
function M(o, t) {
  return o.names === void 0 ? o : { test: o.test, names: G6i(o.names, t) };
}
function a(o, t) {
  let e = /* @__PURE__ */ new Set([o]), r = [{ items: o, next: 0, end: o.length }];
  for (let n = r.at(-1); n !== void 0; n = r.at(-1)) {
    if (!(n.next < n.end)) {
      r.pop();
      continue;
    }
    let s = n.next++;
    if (!(s in n.items)) continue;
    let f = n.items[s];
    if (!Array.isArray(f)) {
      if (t(f)) return true;
    } else if (!e.has(f)) e.add(f), r.push({ items: f, next: 0, end: f.length });
  }
  return false;
}
var S = (o) => typeof o === "object" && o !== null && typeof o.toString !== "function" ? "[object Object]" : String(o);
function YGt(o, t, e) {
  if (Array.isArray(o)) return Array.prototype.some.call(o, (r) => YGt(r, t, e));
  if (Array.isArray(t)) return a(t, (r) => YGt(o, r, e));
  if (typeof o !== "object" || o === null) return o === t || w(e.names, o, t);
  if (K_(o)) {
    if (typeof t !== "object" || !t) return false;
    for (let r of Object.keys(o)) if (Object.hasOwn(t, r) ? !YGt(o[r], t[r], M(e, r)) : !(Array.isArray(o[r]) && o[r].includes(void 0))) return false;
    return true;
  }
  return qGt(o) && (e.test(o, S(t)) || N(e, o, t));
}
function HAr(o, t, e = "") {
  let r;
  if (Array.isArray(o)) return Array.prototype.some.call(o, (n) => (r = HAr(n, t, e), r !== void 0)), r;
  if (Array.isArray(t)) return a(t, (n) => (r = HAr(o, n, e), r !== void 0)), r;
  if (!mX(o)) return;
  if (t === null) return { path: e, kind: "null" };
  switch (typeof t) {
    case "string":
      return { path: e, kind: "string" };
    case "number":
      return { path: e, kind: "number" };
    case "boolean":
      return { path: e, kind: "boolean" };
    case "bigint":
      return { path: e, kind: "bigint" };
    case "object":
      break;
    case "undefined":
    case "symbol":
    case "function":
      return;
  }
  for (let n of Object.keys(o)) {
    if (!Object.hasOwn(t, n)) continue;
    if (r = HAr(o[n], t[n], e === "" ? n : `${e}.${n}`), r !== void 0) return r;
  }
  return;
}
function V6i(o, t, e) {
  let r = e.path.split(".").at(-1) ?? e.path;
  return `hooks module ${o}: on('${t}') matcher at ${e.path} is a nested object, but e.${e.path} is a ${e.kind} there, which an object matcher can never match (a matcher has no operator keys); the hook will not run for it. A ${e.kind} is matched by the literal value or, as a string, by a RegExp, e.g. { ${r}: /^prefix/ }`;
}
var K6i = 32;
var W = (o) => /\([^()]*[+*?}]\)\s*[+*{]/.test(o);
var c = (o) => o.includes("g") ? "g" : o.includes("y") ? "y" : void 0;
function R({ source: o, flags: t, where: e, at: r }) {
  let n = c(t);
  if (n) throw new import_chunk_hcg738hf.je(`${e}: matcher${r} is a RegExp with the ${n} flag, which keeps state between tests; drop it`);
  if (W(o)) throw new import_chunk_hcg738hf.je(`${e}: matcher${r} is a RegExp with a nested quantifier (${o}), which can backtrack without bound; rewrite it`);
}
function h(o, t, e) {
  if (Object.hasOwn(o, ufn)) throw new import_chunk_hcg738hf.je(`${t}: matcher${e} has the key ${ufn}, which a matcher does not keep`);
}
function X6i(o, t, e) {
  let r = e === "" ? "" : ` at ${e}`;
  if (qGt(o)) {
    R({ ...xTt(o), where: t, at: r });
    return;
  }
  if (Array.isArray(o)) {
    Array.prototype.forEach.call(o, (n, s) => X6i(n, t, `${e}[${s}]`));
    return;
  }
  if (mX(o)) {
    if (Object.hasOwn(o, DAr)) throw new import_chunk_hcg738hf.je(`${t}: matcher${r} uses the reserved key ${DAr} (how a RegExp crosses the worker boundary); a RegExp goes in as a RegExp`);
    h(o, t, r);
    for (let [n, s] of Object.entries(o)) X6i(s, t, e === "" ? n : `${e}.${n}`);
    return;
  }
  switch (typeof o) {
    case "string":
      if (o.length > KGt) throw new import_chunk_hcg738hf.je(`${t}: matcher${r} is a string longer than ${KGt} characters, which cannot match`);
      return;
    case "number":
    case "boolean":
      return;
    case "object":
      if (!o) return;
      break;
    case "bigint":
    case "symbol":
    case "undefined":
    case "function":
      break;
  }
  throw new import_chunk_hcg738hf.je(`${t}: matcher${e === "" ? "" : ` at ${e}`} must be a string, a number, a boolean, null, a RegExp, an array of those, or a nested object; got ${q(o)}`);
}
function MTo(o, t) {
  if (t.length > KGt) return tc().log(`matcher: a value of ${t.length} characters is past the ${KGt} a RegExp matcher reads; it matches, so the hook decides`), true;
  if (c(xTt(o).flags)) o.lastIndex = 0;
  return RegExp.prototype.exec.call(o, t) !== null;
}
var DAr = "$$regex";
function q6i(o, t, e, r = false) {
  if (Array.isArray(o)) return Array.prototype.map.call(o, (n, s) => q6i(n, t, `${e}[${s}]`, r));
  if (mX(o)) {
    let n = e === "" ? "" : ` at ${e}`, s = o[DAr];
    if (typeof s === "string" && typeof o.flags === "string" && Object.keys(o).length === 2) return R({ source: s, flags: o.flags, where: t, at: n }), r ? new import_chunk_an2g6kvv.Ult(s, o.flags) : new RegExp(s, o.flags);
    h(o, t, n);
    let E = {};
    for (let [x, L] of Object.entries(o)) E[x] = q6i(L, t, e === "" ? x : `${e}.${x}`, r);
    return E;
  }
  return o;
}
function u(o) {
  if (qGt(o)) {
    let { source: t, flags: e } = xTt(o);
    return { [DAr]: t, flags: e };
  }
  if (Array.isArray(o)) return Array.prototype.map.call(o, u);
  if (mX(o)) {
    let t = {};
    for (let [e, r] of Object.entries(o)) t[e] = u(r);
    return t;
  }
  return o;
}
var Y6i = (o) => o.map(({ matcher: t, ...e }) => t === void 0 ? e : { ...e, matcher: u(t) });
