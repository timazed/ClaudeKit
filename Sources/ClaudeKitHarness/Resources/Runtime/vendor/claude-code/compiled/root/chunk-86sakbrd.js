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
var chunk_86sakbrd_exports = {};
__export(chunk_86sakbrd_exports, {
  A7r: () => A7r,
  C7r: () => C7r,
  HBa: () => HBa,
  HRn: () => HRn,
  IBa: () => IBa,
  MBa: () => MBa,
  OBa: () => OBa,
  R7r: () => R7r,
  T7r: () => T7r,
  TJt: () => TJt,
  _8o: () => _8o,
  csi: () => csi,
  dsi: () => dsi,
  fsr: () => fsr,
  int: () => int,
  l4e: () => l4e,
  snt: () => snt,
  usi: () => usi
});
module.exports = __toCommonJS(chunk_86sakbrd_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var _ = "x-mcp-file", H = "Give the path of a file on this computer. The file itself is sent, not the path.", ke = "To send files, write a list of their paths, even for one file. Anything else here, a path too, is sent as written. For each path in the list:", Te = "A file on this computer cannot be sent through this argument: a path written here is sent as text, not the file.", I = "local_file_path", T7r = `an object with the one member "${I}"`, be = `To send a file on this computer, write it as ${T7r}; anything else, a path too, is sent as it is written, but text that is JSON can be sent as what it holds. For ${I}: ${H}`, He = { type: "string", maxLength: 0 }, pe = { type: "object", properties: { [I]: { type: "string", description: H } }, required: [I], additionalProperties: false };
function l4e(e) {
  return ae(e).own;
}
function snt(e) {
  return ae(e).whole.hidden;
}
function C(e, n) {
  let { marked: t, unfilled: r, everyCall: o } = n, i = { whole: n, own: { marked: t, unfilled: r, everyCall: o } };
  if (typeof e === "object" && e !== null) we.set(e, i);
  return i;
}
var we = /* @__PURE__ */ new WeakMap();
function ae(e) {
  let n = typeof e === "object" && e !== null ? we.get(e) : void 0;
  if (n !== void 0) return n;
  let t = typeof e === "object" && e !== null ? [{ node: e, level: 1 }] : [], r = t.length, o = false, i = false;
  for (let a = t.pop(); a !== void 0; a = t.pop()) {
    let { node: l, level: d } = a;
    if (d > De) return C(e, { marked: [], hidden: [], listed: [], unfilled: [], everyCall: false });
    if (!Array.isArray(l)) o ||= Object.keys(l).some(he), i ||= Object.hasOwn(l, I);
    for (let g of Array.isArray(l) ? l : Object.values(l)) if (o ||= typeof g === "string" && he(g), i ||= g === I, typeof g === "object" && g !== null) {
      if (r++, r > Be) return C(e, { marked: [], hidden: [], listed: [], unfilled: [], everyCall: false });
      t.push({ node: g, level: d + 1 });
    }
  }
  let s = (0, import_chunk_0jve1fep.Le)(e) ? e : {}, u = [];
  if ((0, import_chunk_0jve1fep.Le)(e)) {
    let { properties: a, $defs: l, definitions: d, ...g } = e;
    u.push({ value: g });
    for (let [w, j] of [["properties", a], ["$defs", l], ["definitions", d]]) {
      if (!(0, import_chunk_0jve1fep.Le)(j)) {
        u.push({ value: j });
        continue;
      }
      for (let [F, R] of Object.entries(j)) u.push(w === "properties" ? { argument: F, value: R } : { definition: `${w}/${F}`, value: R });
    }
  } else u.push({ value: e });
  let f = [], c = [], p = [], y = /* @__PURE__ */ new Set(), b = false, O = o || !(0, import_chunk_0jve1fep.Le)(e) || Object.hasOwn(e, "type") && e.type !== "object" || !N(e, L.input);
  for (let a of O ? [] : u) {
    let l = a.value;
    if (a.argument === void 0 || !(0, import_chunk_0jve1fep.Le)(l)) continue;
    let d = se(l, s);
    if (d === "unmarked") continue;
    if (d === "untaken") {
      O = true;
      break;
    }
    let g = d.files.map(({ file: m }) => m), w = d.files.map(({ place: m }) => m), j = w.map((m) => (0, import_chunk_4smdap7r.U)(m, (x) => x === "items")), F = j.every((m) => m > 0), R = !F && j.some((m) => m > 0), E = j.find((m) => m > 0) ?? 0, [de, ce] = [false, true].map((m) => Ue(g.filter((x, Ne) => w[Ne]?.includes("items") === m)));
    if (g.some((m) => m.through !== g[0]?.through) || j.some((m) => m > 0 && m !== E) || R && !(0, import_chunk_z688m88d.Zt)(de, ce)) {
      O = true;
      break;
    }
    let P = { list: F, ...R && { orList: true }, ...d.beside.some(T) && { optional: true }, ...de ?? ce }, [Z, ve] = w[0] ?? [], q = Z === "items" ? ve : Z, ee = w.flatMap((m) => m.filter((x) => typeof x === "number")), ne = d.besideItems.some(T), Me = Array.isArray(l.anyOf) && l.anyOf.length === 2 && l.anyOf.some(qe);
    if (R || E > 1 || ee.length > w.length) {
      if (P.places = w.map((m) => m.map((x) => `/${x}`).join("")), ne) P.nullItems = true;
    } else if ((q === "anyOf" || q === "oneOf") && !Me) if (Z === "items") P.items = { branchOf: q, branches: ee, ...ne && { optional: true } };
    else P.branchOf = q, P.branches = ee;
    p.push({ name: a.argument, ...P });
    let z = d.beside.filter((m) => !T(m));
    if (E > 1) b = true;
    else if (d.besideItems.every(T) && (z.length === 0 || F && z.every(Xe) && z.some($e))) f.push({ argument: a.argument, ...P, ...G(g), ...z.length > 0 && { beside: d.beside } });
    else {
      let m = !i && d.besideItems.every((x) => X(x, s, false)) && d.beside.every((x) => (F || X(x, s, false)) && (E === 0 || X(x, s, true)));
      c.push({ argument: a.argument, places: w, ...m && { pathObject: true, ...!d.besideItems.every(T) && { otherItems: true }, ...ne && { nullItems: true }, ...G(g), ...P.noName && J, ...P.noDigest && K } });
    }
    a.taken = d.taken;
    for (let { definition: m } of g) if (m !== void 0) y.add(m);
  }
  if (!O && p.length > 0) {
    let a = [];
    for (let d of u) a.push({ value: d.value, taken: d.definition !== void 0 && y.has(d.definition) ? [[]] : d.taken });
    let l = Oe(a);
    if (O = l.mark || l.unfollowed || l.references.some((d) => {
      let g = d.indexOf("/", d.indexOf("/") + 1);
      return /[~%]/.test(d) || y.has(g === -1 ? d : d.slice(0, g));
    }), p.sort((d, g) => Y(d.name, g.name)), !O && !b) return C(e, { marked: f.sort((d, g) => Y(d.argument, g.argument)), hidden: c.sort((d, g) => Y(d.argument, g.argument)), listed: p, unfilled: [], everyCall: false });
  }
  let k = /* @__PURE__ */ new Map(), A = [], h = false;
  for (let a of u) {
    let l = Oe([{ value: a.value }]);
    h ||= l.mark, a.reaches = l.mark || l.unfollowed;
    for (let d of l.references) {
      let [g = "", w = ""] = d.split("/", 2), j;
      try {
        j = [w, decodeURI(w), decodeURIComponent(w), decodeURIComponent(d).split("/", 2)[1] ?? ""];
      } catch {
        a.reaches = true;
        continue;
      }
      for (let F of new Set(j)) {
        let R = `${g}/${F.replaceAll("~1", "/").replaceAll("~0", "~")}`, E = k.get(R);
        if (E === void 0) k.set(R, [a]);
        else E.push(a);
      }
    }
    if (a.reaches) A.push(a);
  }
  if (!h) return C(e, { marked: [], hidden: [], listed: [], unfilled: [], everyCall: false });
  for (let a = A.pop(); a !== void 0; a = A.pop()) {
    if (a.definition === void 0) continue;
    for (let l of k.get(a.definition) ?? []) if (!l.reaches) l.reaches = true, A.push(l);
  }
  return C(e, { marked: [], hidden: [], listed: O ? [] : p, unfilled: u.flatMap((a) => a.reaches && a.argument !== void 0 ? [a.argument] : []).sort(Y), everyCall: u.some((a) => a.reaches === true && a.argument === void 0 && a.definition === void 0) });
}
function _8o(e, n) {
  return n.find((t) => {
    let r = Object.hasOwn(e, t) ? e[t] : void 0;
    return r !== void 0 && r !== null && !(Array.isArray(r) && r.length === 0);
  });
}
function C7r(e, n) {
  return n.find(({ argument: t }) => {
    let r = Object.hasOwn(e, t) ? e[t] : void 0;
    return (Array.isArray(r) ? r : [r]).some((i) => (0, import_chunk_0jve1fep.Le)(i) && B.every((s) => Object.hasOwn(i, s)));
  })?.argument;
}
function A7r(e, n) {
  return n.find(({ argument: t, pathObject: r }) => r === true && Object.hasOwn(e, t) && TJt(e[t]))?.argument;
}
function TJt(e) {
  let n = [e], t = Ce;
  while (n.length > 0) {
    let r = n.pop();
    if (typeof r === "string") {
      if (r.replace(/\\u([\da-f]{4})/gi, (i, s) => String.fromCharCode(Number.parseInt(s, 16))).includes(I) && /^\s*[[{]/.test(r)) try {
        n.push((0, import_chunk_w578pjby.te)(r));
      } catch {
        return true;
      }
      continue;
    }
    if (!(Array.isArray(r) || (0, import_chunk_0jve1fep.Le)(r))) continue;
    if (Object.hasOwn(r, I)) return true;
    for (let o of Object.values(r)) {
      if (t-- <= 0) return true;
      n.push(o);
    }
  }
  return false;
}
var Ce = 2e5;
function OBa(e) {
  if (Array.isArray(e)) return e.filter((n) => ie(n) === void 0);
  return ie(e) === void 0 ? e : void 0;
}
function ie(e) {
  let n = (0, import_chunk_0jve1fep.Le)(e) && Object.hasOwn(e, I) && Object.keys(e).length === 1 ? e[I] : void 0;
  return Ae(n) ? n : void 0;
}
function Ae(e) {
  return typeof e === "string" && e !== "" && !/^data:/i.test(e);
}
var je = /* @__PURE__ */ new WeakMap();
function IBa(e, n) {
  je.set(e, n);
}
function R7r(e) {
  return je.get(e);
}
function fsr(e, n) {
  let { marked: t, unfilled: r, hidden: o } = ae(e).whole;
  return _8o(n, [...t.map((i) => i.argument), ...r, ...o.map(({ argument: i }) => i)]) !== void 0;
}
function MBa(e, n, t = []) {
  if (n.length === 0 && t.length === 0 || !(0, import_chunk_0jve1fep.Le)(e) || !(0, import_chunk_0jve1fep.Le)(e.properties)) return e;
  let r = { ...e.properties };
  for (let { argument: i, places: s, pathObject: u } of t) {
    let f = r[i], c = u ? fe(f, s) : ue(f, s);
    if (!(0, import_chunk_0jve1fep.Le)(f) || !(0, import_chunk_0jve1fep.Le)(c)) continue;
    let { description: p, ...y } = c, b = typeof f.description === "string" ? `${f.description} ` : "", { anyOf: O } = y, k = Array.isArray(O) ? O : [y];
    r[i] = { ...!u || k.some(V) ? y : { ...Array.isArray(O) && y, anyOf: [...k, He] }, description: `${b}${u ? be : Te}` };
  }
  for (let i of n) {
    let { argument: s, list: u, orList: f, optional: c, items: p, nullItems: y, beside: b } = i, O = r[s], A = `${(0, import_chunk_0jve1fep.Le)(O) && typeof O.description === "string" ? `${O.description} ` : ""}${b ? `${ke} ` : ""}${H}`, h = u ? [] : [{ type: "string" }];
    if (u || f) {
      let l = { ...xe(Se(O)), type: "array", items: { type: "string" } };
      if (h.push(l), p?.optional || y) h.push({ ...l, items: { anyOf: [{ type: "string" }, { type: "null" }] } });
    }
    let a = b ?? (c ? [{ type: "null" }] : []);
    r[s] = h.length + a.length > 1 ? { anyOf: [...h, ...a], description: A } : { ...h[0], description: A };
  }
  let o = { ...e, properties: r };
  for (let i of ["$defs", "definitions"]) {
    let s = e[i];
    if ((0, import_chunk_0jve1fep.Le)(s)) {
      let u = [];
      for (let [f, c] of Object.entries(s)) if (!(0, import_chunk_0jve1fep.Le)(c) || v(c) === void 0) u.push([f, c]);
      o[i] = Object.fromEntries(u);
    }
  }
  return o;
}
function xe(e) {
  let n = (0, import_chunk_0jve1fep.Le)(e) ? e : {};
  return { ...typeof n.minItems === "number" && { minItems: n.minItems }, ...typeof n.maxItems === "number" && { maxItems: n.maxItems }, ...typeof n.uniqueItems === "boolean" && { uniqueItems: n.uniqueItems } };
}
function dsi(e) {
  let n = (0, import_chunk_0jve1fep.Le)(e) ? e.properties : void 0;
  if (!(0, import_chunk_0jve1fep.Le)(n)) return [];
  return Object.keys(n).filter((t) => {
    let r = n[t];
    return (0, import_chunk_0jve1fep.Le)(r) && typeof r.description === "string" && r.description.endsWith(H) && !Ie(r) && !Fe(r) && (V(r) || Array.isArray(r.anyOf) && r.anyOf.some(V));
  });
}
function csi(e) {
  let n = (0, import_chunk_0jve1fep.Le)(e) ? e.properties : void 0;
  return (0, import_chunk_0jve1fep.Le)(n) ? Object.keys(n).filter((t) => Ie(n[t])) : [];
}
function Ie(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && typeof e.description === "string" && e.description.endsWith(`${ke} ${H}`) && Array.isArray(e.anyOf) && V(e.anyOf[0]) && e.anyOf[0].type === "array" && e.anyOf.slice(1).some($e);
}
function usi(e) {
  let n = (0, import_chunk_0jve1fep.Le)(e) ? e.properties : void 0;
  return (0, import_chunk_0jve1fep.Le)(n) ? Object.keys(n).filter((t) => Fe(n[t])) : [];
}
function Fe(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && typeof e.description === "string" && e.description.endsWith(be) && oe(e);
}
function oe(e, n = 12) {
  if (!(0, import_chunk_0jve1fep.Le)(e) || n === 0) return false;
  let { properties: t, items: r, anyOf: o } = e, i = (0, import_chunk_0jve1fep.Le)(t) ? t[I] : void 0;
  return (0, import_chunk_0jve1fep.Le)(i) && i.description === H || oe(r, n - 1) || Array.isArray(o) && o.some((s) => oe(s, n - 1));
}
function int(e, n, t = []) {
  let r = [];
  for (let o of n) {
    let { argument: i, optional: s, maxSize: u } = o, f = Object.hasOwn(e, i) ? e[i] : void 0, c = Array.isArray(f);
    if (f === void 0 || f === null && s || o.beside !== void 0 && (f === null || typeof f !== "object")) continue;
    if (c ? !o.list && !o.orList : o.list) return { notAPath: i };
    for (let [p, y] of (c ? f : [f]).entries()) {
      if (c && (o.items?.optional || o.nullItems) && y === null) continue;
      if (!Ae(y)) return { notAPath: i };
      r.push({ argument: i, ...c && { index: p }, path: y, ...u !== void 0 && { maxSize: u }, ...o.noName && J, ...o.noDigest && K });
    }
  }
  for (let o of t) {
    let { argument: i, places: s, pathObject: u, otherItems: f, nullItems: c } = o, p = u && Object.hasOwn(e, i) ? e[i] : void 0;
    if (!TJt(p)) continue;
    let y = Array.isArray(p);
    if (!s.some((b) => b.includes("items") === y)) return { notAPath: i };
    for (let [b, O] of (y ? p : [p]).entries()) {
      let k = ie(O);
      if (k !== void 0) r.push({ argument: i, ...y && { index: b }, path: k, ...o.maxSize !== void 0 && { maxSize: o.maxSize }, ...o.noName && J, ...o.noDigest && K });
      else if (TJt(O) || !(f || c && O === null)) return { notAPath: i };
    }
  }
  return r;
}
var Be = 5e4, De = 1e3, B = ["id", "mimeType", "size"], re = ["digest", "name"], J = { noName: true }, K = { noDigest: true };
function HBa(e, n = false) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return false;
  let { id: t, name: r, mimeType: o, size: i, digest: s, data: u } = e;
  return typeof t === "string" && typeof o === "string" && typeof i === "number" && (r === void 0 || typeof r === "string") && (u === void 0 || typeof u === "string") && (n && s === void 0 || (0, import_chunk_0jve1fep.Le)(s) && typeof s.algorithm === "string" && typeof s.value === "string");
}
var We = ["title", "description", "$comment", "examples", "example", "default", "deprecated", "readOnly", "writeOnly"], L = { file: S("type", "required", "properties", "additionalProperties", "anyOf", _), condition: S("type", "required"), reference: S("$ref", "allOf", _), allOf: S("allOf", _), list: S("type", "items", "minItems", "maxItems", "uniqueItems"), anyOf: S("anyOf", _), oneOf: S("oneOf", _), input: S("type", "properties", "required", "additionalProperties", "minProperties", "maxProperties", "dependentRequired", "$defs", "definitions", "$schema", "$id") };
function S(...e) {
  return /* @__PURE__ */ new Set([...e, ...We]);
}
var Re = ["$ref", "$dynamicRef", "$recursiveRef"];
function v(e) {
  let n = Object.hasOwn(e, _) ? e[_] : void 0;
  return n === null || n === false ? void 0 : n;
}
function qe(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && e.type === "null" && Object.keys(e).length === 1;
}
var ye = /* @__PURE__ */ new WeakMap();
function me(e) {
  let n = ye.get(e);
  if (n !== void 0) return n;
  let { required: t, anyOf: r } = e, o = e.type === "object" && Array.isArray(t) && B.every((i) => t.includes(i)) && t.every((i) => B.includes(i) || re.includes(i)) && !Re.some((i) => typeof e[i] === "string") && N(e, L.file) && !ze(e) && !re.some((i) => t.includes(i) && D(e, i)) && (!Object.hasOwn(e, "anyOf") || Array.isArray(r) && r.some((i) => (0, import_chunk_0jve1fep.Le)(i) && N(i, L.condition) && (!Object.hasOwn(i, "type") || i.type === "object") && (!Object.hasOwn(i, "required") || Array.isArray(i.required) && i.required.every((s) => B.includes(s) || re.includes(s) && !D(e, s)))));
  return ye.set(e, o), o;
}
function N(e, n) {
  return Object.keys(e).every((t) => n.has(t) || t.startsWith("x-") && (t !== _ || v(e) === void 0));
}
function ze(e) {
  let n = Object.hasOwn(e, "additionalProperties"), t = e.additionalProperties;
  if (!Object.hasOwn(e, "properties")) return n && t !== true;
  let { properties: r } = e;
  if (!(0, import_chunk_0jve1fep.Le)(r) || n && t !== true && t !== false) return true;
  return B.some((o) => D(e, o));
}
function D(e, n) {
  let { properties: t } = e;
  if (!(0, import_chunk_0jve1fep.Le)(t)) return false;
  return Object.hasOwn(t, n) ? t[n] === false : e.additionalProperties === false;
}
function ge(e) {
  return { ...D(e, "name") && J, ...D(e, "digest") && K };
}
function Ue(e) {
  let n = e[0]?.leftOut;
  for (let { leftOut: t } of e) if (Object.keys(t).length < Object.keys(n ?? {}).length) n = t;
  return n;
}
function Pe(e) {
  let n = e.allOf, t = Array.isArray(n) && n.length === 1 ? n[0] : void 0;
  return (0, import_chunk_0jve1fep.Le)(t) ? t : void 0;
}
function Q(e) {
  let n = Pe(e);
  return n !== void 0 && Object.keys(n).length === 1 && typeof n.$ref === "string" ? n : void 0;
}
function Ye(e, n, t) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return t === void 0 ? "unmarked" : "untaken";
  let r = v(e), o = (Q(e) ?? e).$ref;
  if (typeof o !== "string") {
    let f = (N(e, L.allOf) ? Pe(e) : void 0) ?? e, c = [r, t, v(f)].filter((p) => p !== void 0);
    if (c.length === 0) return "unmarked";
    if (c.every(import_chunk_0jve1fep.Le) && me(f)) return { ...G(c), leftOut: ge(f) };
    return t === void 0 && (Object.hasOwn(e, "anyOf") || Object.hasOwn(e, "oneOf")) ? "unmarked" : "untaken";
  }
  let i = _e(o, n), s = (0, import_chunk_0jve1fep.Le)(i) ? v(i) : void 0;
  if (r === void 0 && t === void 0 && s === void 0) return "unmarked";
  if (!(0, import_chunk_0jve1fep.Le)(i) || !N(e, L.reference) || Object.hasOwn(e, "$ref") && Object.hasOwn(e, "allOf") || !me(i) || r !== void 0 && !(0, import_chunk_0jve1fep.Le)(r) || s !== void 0 && !(0, import_chunk_0jve1fep.Le)(s)) return "untaken";
  return { ...G([r, t, s]), ...s !== void 0 && { definition: o.slice(2) }, through: o.slice(2), leftOut: ge(i) };
}
function _e(e, n) {
  let t = e.startsWith("#/$defs/") ? "$defs" : e.startsWith("#/definitions/") ? "definitions" : void 0, r = t === void 0 ? "" : e.slice(t.length + 3), o = t === void 0 ? void 0 : n[t];
  return r !== "" && !/[/~%]/.test(r) && (0, import_chunk_0jve1fep.Le)(o) && Object.hasOwn(o, r) ? o[r] : void 0;
}
function se(e, n, t = 2, r = 8, o) {
  let i = Ye(e, n, o);
  if (typeof i === "object") return { files: [{ place: [], file: i }], taken: [[], ["allOf", 0]], beside: [], besideItems: [] };
  if (i === "untaken" || !(0, import_chunk_0jve1fep.Le)(e) || typeof e.$ref === "string" || Q(e) !== void 0) return i;
  let s = Object.hasOwn(e, "anyOf"), u = le(e.type);
  if ((e.type === "array" || u) && !s) {
    let k = t > 0 ? se(e.items, n, t - 1, r) : i;
    if (typeof k !== "object") return k;
    let A = k.files.some(({ place: h }) => h.includes("items")) && k.beside.some(T);
    return N(e, L.list) && !A ? { files: k.files.map(({ place: h, file: a }) => ({ place: ["items", ...h], file: a })), taken: k.taken.map((h) => ["items", ...h]), beside: u ? [{ type: "null" }] : [], besideItems: [...k.beside, ...k.besideItems] } : "untaken";
  }
  let f = s ? "anyOf" : "oneOf", c = e[f];
  if (r === 0 || s === Object.hasOwn(e, "oneOf") || !Array.isArray(c) || c.length === 0) return "unmarked";
  let p = v(e);
  if (p !== void 0 && !(0, import_chunk_0jve1fep.Le)(p)) return "untaken";
  let y = { files: [], taken: p === void 0 ? [] : [[]], beside: [], besideItems: [] }, b = 0, O = 0;
  for (let [k, A] of c.entries()) {
    let h = se(A, n, t, r - 1, p);
    if (h === "untaken") return "untaken";
    if (h === "unmarked") {
      y.beside.push(A);
      continue;
    }
    for (let { place: l, file: d } of h.files) y.files.push({ place: [f, k, ...l], file: d });
    for (let l of h.taken) y.taken.push([f, k, ...l]);
    for (let l of h.beside) y.beside.push(l);
    for (let l of h.besideItems) y.besideItems.push(l);
    let a = h.files.filter(({ place: l }) => l.includes("items"));
    b += a.length < h.files.length ? 1 : 0, O += a.length > 0 ? 1 : 0;
  }
  if (y.files.length === 0) return "unmarked";
  return f === "oneOf" && (b > 1 || O > 1) || !N(e, L[f]) ? "untaken" : y;
}
function W(e) {
  let n = /* @__PURE__ */ new Map();
  for (let [t, ...r] of e) {
    let o = n.get(t);
    if (o === void 0) n.set(t, [r]);
    else o.push(r);
  }
  return n;
}
function ue(e, n) {
  let [t] = n[0] ?? [];
  if (!(0, import_chunk_0jve1fep.Le)(e) || t === void 0) return;
  let r = e[t], o = W(n).get(t) ?? [];
  if (!Array.isArray(r)) {
    let u = ue(r, o);
    if (u !== void 0) return { ...e, [t]: u };
    return le(e.type) ? { type: "null" } : void 0;
  }
  let i = W(o), s = r.flatMap((u, f) => {
    let c = i.get(f), p = c ? ue(u, c) : u;
    return p === void 0 ? [] : [p];
  });
  return s.length === 0 ? void 0 : { ...e, [t]: s };
}
function fe(e, n) {
  let [t] = n[0] ?? [];
  if (!(0, import_chunk_0jve1fep.Le)(e) || t === void 0) return pe;
  let r = e[t], o = W(n).get(t) ?? [], { [t]: i, [_]: s, ...u } = e;
  if (!Array.isArray(r)) {
    let p = fe(r, o);
    return p === pe ? { ...xe(e), type: e.type, items: p } : { ...u, [t]: p };
  }
  let f = W(o), c = (0, import_chunk_4smdap7r.M)([...r.flatMap((p, y) => {
    let b = f.get(y);
    return b ? [fe(p, b)] : [];
  }), ...r.filter((p, y) => !f.has(y))]);
  return c.length === 1 ? c[0] : { ...u, anyOf: c };
}
function le(e) {
  return Array.isArray(e) && e.length === 2 && e.includes("array") && e.includes("null");
}
function Se(e) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return;
  let n = e.anyOf ?? e.oneOf;
  return e.type === "array" || le(e.type) ? e : Array.isArray(n) ? n.map(Se).find((t) => t !== void 0) : void 0;
}
function X(e, n, t) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return e === false;
  let r = Object.hasOwn(e, "$ref") ? e.$ref : Q(e)?.$ref, o = typeof r === "string" ? _e(r, n) : e;
  if (!(0, import_chunk_0jve1fep.Le)(o) || typeof o.$ref === "string") return false;
  let { type: i, items: s, required: u, additionalProperties: f } = o, c = Array.isArray(i) ? i : [i], p = [...Ee, t ? "object" : "array"];
  if (c.length > 0 && c.length <= p.length && c.every((y) => p.includes(y))) return true;
  return t ? (0, import_chunk_0jve1fep.Le)(s) && !Object.hasOwn(s, "allOf") && !Object.hasOwn(o, "prefixItems") && X(s, n, false) : Array.isArray(u) && typeof u[0] === "string" || f === false && !Object.hasOwn(o, "patternProperties");
}
var Ee = ["string", "number", "integer", "boolean", "null"];
function Xe(e) {
  if (!(0, import_chunk_0jve1fep.Le)(e) || typeof e.$ref === "string") return false;
  let n = [e.type].flat();
  return n.length > 0 && n.every((t) => Ee.includes(t));
}
function $e(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && [e.type].flat().includes("string");
}
function T(e) {
  if (!(0, import_chunk_0jve1fep.Le)(e)) return false;
  let { type: n } = e;
  return n === "null" || Array.isArray(n) && n.length === 1 && n[0] === "null";
}
function G(e) {
  let n = e.flatMap((t) => {
    let r = (0, import_chunk_0jve1fep.Le)(t) ? t.maxSize : void 0;
    return typeof r === "number" && Number.isInteger(r) && r >= 0 && r <= 9007199254740992 ? [r] : [];
  });
  return n.length === 0 ? {} : { maxSize: Math.min(...n) };
}
function Oe(e) {
  let n = { mark: false, unfollowed: false, references: [] };
  for (let t = e.pop(); t !== void 0; t = e.pop()) {
    let { value: r, taken: o } = t, i = o?.some((u) => u.length === 0) === true, s = o && W(o);
    if (Array.isArray(r)) {
      for (let [u, f] of r.entries()) e.push({ value: f, taken: s?.get(u) });
      continue;
    }
    if (!(0, import_chunk_0jve1fep.Le)(r)) continue;
    if (!i && v(r) !== void 0) n.mark = true;
    for (let [u, f] of Object.entries(r)) {
      if (typeof f === "string" && Re.includes(u)) {
        if (!f.startsWith("#/$defs/") && !f.startsWith("#/definitions/")) n.unfollowed = true;
        else if (!(i && u === "$ref")) n.references.push(f.slice(2));
      }
      if (i && u === "allOf" && Q(r) !== void 0) continue;
      e.push({ value: f, taken: s?.get(u) });
    }
  }
  return n;
}
function he(e) {
  for (let n = 0; n < e.length; n++) {
    let t = e.charCodeAt(n);
    if (t >= 55296 && t <= 56319) {
      let r = e.charCodeAt(n + 1);
      if (!(r >= 56320 && r <= 57343)) return true;
      n++;
    } else if (t >= 56320 && t <= 57343) return true;
  }
  return false;
}
function V(e) {
  return (0, import_chunk_0jve1fep.Le)(e) && (e.type === "string" || e.type === "array" && (0, import_chunk_0jve1fep.Le)(e.items) && e.items.type === "string");
}
var Je = 1e4;
function HRn(e, n, { intoObjects: t = false } = {}) {
  let r = [e], o = Je;
  while (r.length > 0) {
    let i = r.pop();
    if (typeof i === "string") {
      if (n(i)) return true;
    } else if (Array.isArray(i)) for (let s of i) {
      if (o-- <= 0) return true;
      r.push(s);
    }
    else if (t && (0, import_chunk_0jve1fep.Le)(i)) for (let [s, u] of Object.entries(i)) {
      if (n(s) || o-- <= 0) return true;
      r.push(u);
    }
  }
  return false;
}
function Y(e, n) {
  let t = 0;
  while (t < e.length && t < n.length) {
    let r = e.codePointAt(t) ?? 0, o = n.codePointAt(t) ?? 0;
    if (r !== o) return r - o;
    t += r > 65535 ? 2 : 1;
  }
  return e.length - n.length;
}
