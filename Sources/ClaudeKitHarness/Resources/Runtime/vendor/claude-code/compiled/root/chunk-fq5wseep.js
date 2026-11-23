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
var chunk_fq5wseep_exports = {};
__export(chunk_fq5wseep_exports, {
  checkStyle: () => se
});
module.exports = __toCommonJS(chunk_fq5wseep_exports);
var S = ["color", "fontFamily", "fontSize", "fontWeight", "italic", "letterSpacing", "lineHeight"], O = ["backgroundColor", "fill", "radius", "borderColor", "borderWidth", "shadow", "padding", "paddingX", "paddingY", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"], I = { Text: S, Heading: S, UserMessage: [...S, ...O, "rotate"], AssistantMessage: [...S, ...O, "rotate"], ToolUse: ["color", "fontFamily", ...O] }, C = ["Text", "Heading", "UserMessage", "AssistantMessage", "ToolUse"], k = ["sans", "serif", "mono", "code", "cursive"], x = ["regular", "medium", "semibold", "bold"], z = [["paddingTop", "paddingY"], ["paddingRight", "paddingX"], ["paddingBottom", "paddingY"], ["paddingLeft", "paddingX"]], W = { fontSize: [11, 28], letterSpacing: [-1, 4], lineHeight: [12, 48], borderWidth: [0, 8], rotate: [-3, 3] }, P = [0, 48], L = [0, 64], E = [-16, 16], U = [0, 32], H = [1, 256];
var j = /^[A-Za-z0-9][A-Za-z0-9 _-]{0,63}$/, D = /^(?:surface-[0-3]|text-(?:primary|secondary|muted|disabled)|fill-primary|on-primary|border(?:-strong|-stronger)?|(?:fill|text|bg|on|border)-(?:accent|danger|success|warning|pro)|(?:bg|text)-(?:user|assistant)-message)$/, B = /^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i, G = /^(rgb|hsl)a?\(([\d.,%/ deg-]{1,59})\)$/, v = /^(-?(?:\d+(?:\.\d*)?|\.\d+))(%|deg)?$/, V = /([a-df-z])([^a-df-z]*)/gi, Y = / ?,? ?([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?)/iy, K = / ?,? ?([01])/y, X = { m: 2, l: 2, h: 1, v: 1, c: 6, s: 4, q: 4, t: 2, a: 7, z: 0 };
class c extends Error {
}
function se(o) {
  try {
    if (!Z(o)) throw new c("style may hold at most 1500 values, counting every field and list entry, and 65536 characters of text");
    let n = w(o, "style", C), t = {};
    for (let e of C) {
      let r = n[e], i = `style.${e}`;
      if (Array.isArray(r) && e.endsWith("Message")) t[e] = b(r, i, [1, 4]).map((s, d) => R(s, `${i}[${d}]`, e));
      else if (r !== void 0) t[e] = [R(r, i, e)];
    }
    if (Object.keys(t).length === 0) throw new c(`style needs at least one of ${C.join(", ")}`);
    return t;
  } catch (n) {
    if (n instanceof c) return n.message;
    throw n;
  }
}
function Z(o) {
  let n = [o], t = 0;
  for (let e of n) if (typeof e === "string") t += e.length;
  else if (typeof e === "object" && e !== null) {
    let r = Array.isArray(e) ? e.length : Object.keys(e).length;
    if (n.length + r > 1500) return false;
    n.push(...Object.values(e));
  }
  return t <= 65536;
}
function w(o, n, t) {
  if (typeof o !== "object" || o === null || Array.isArray(o)) throw new c(`${n} is an object with any of ${t.join(", ")}`);
  let e = Object.keys(o).find((r) => !t.includes(r));
  if (e !== void 0) throw new c(`${n} takes no "${e.slice(0, 32).replace(/[^ -~]/g, "?")}": it takes ${t.join(", ")}`);
  return Object.fromEntries(Object.entries(o));
}
function m(o, n, [t, e], r = "points") {
  if (typeof o !== "number" || !(o >= t && o <= e)) throw new c(`${n} is a number of ${r}, ${t} to ${e}`);
  return o;
}
function b(o, n, [t, e]) {
  if (!Array.isArray(o) || o.length < t || o.length > e) throw new c(`${n} is a list of ${t === e ? t : `${t} to ${e}`}`);
  return Array.from(o);
}
function M(o, n) {
  if (typeof o !== "boolean") throw new c(`${n} is true or false`);
  return o;
}
function N(o, n, t, e) {
  let [r = 0, i = r, s = r, d = r] = Array.isArray(o) ? b(o, n, [4, 4]).map((a, l) => m(a, `${n}[${l}]`, t, e)) : [m(o, n, t, e)];
  return [r, i, s, d];
}
function A(o, n, t) {
  let [e = 1, r = 1] = b(o, n, [2, 2]).map((i, s) => m(i, `${n}[${s}]`, H, t));
  return [e, r];
}
function q(o) {
  let n = o.length <= 5 ? o.slice(1).replace(/./g, "$&$&") : o.slice(1), [t = 0, e = 0, r = 0, i = 255] = (n.match(/../g) ?? []).map((s) => Number.parseInt(s, 16));
  return [t, e, r, i / 255];
}
function J(o) {
  let [, n, t = ""] = G.exec(o) ?? [], e = t.trim().split(/[ ,/]+/).map((h) => v.exec(h)), r = n === "hsl";
  if (e.length < 3 || e.length > 4 || e.some((h, y) => h === null || h[2] === (r && y === 0 ? "%" : "deg"))) return;
  let [i = 0, s = 0, d = 0, a = 1] = e.map((h, y) => {
    let _ = Number(h?.[1]);
    if (r && y === 0) return _;
    let F = h?.[2] === "%" ? 100 : y === 3 ? 1 : r ? 100 : 255;
    return Math.min(1, Math.max(0, _ / F));
  }), l = s * Math.min(d, 1 - d), g = r ? [0, 8, 4].map((h) => {
    let y = ((h + i / 30) % 12 + 12) % 12;
    return d - l * Math.max(-1, Math.min(y - 3, 9 - y, 1));
  }) : [i, s, d], [f = 0, u = 0, T = 0] = g.map((h) => Math.round(h * 255));
  return [f, u, T, a];
}
function p(o, n) {
  let t = typeof o === "string" ? o : "";
  if (D.test(t)) return { name: t };
  let e = t === "transparent" ? [0, 0, 0, 0] : B.test(t) ? q(t) : J(t);
  if (e === void 0) throw new c(`${n} is a color: #hex, rgb(), hsl(), transparent or a ThemeColorName such as text-primary`);
  return { rgba: e };
}
function Q(o, n, t) {
  let e = b(o, n, [1, 8]), r = e.pop(), i = k.find((s) => s === r);
  if (i === void 0) throw new c(`${n} ends with one of ${k.join(", ")}, for when no font before it is there`);
  if (t === "ToolUse" && e.length > 0) throw new c(`${n} takes one of ${k.join(", ")} alone, such as ["mono"]`);
  return { names: e.map((s, d) => {
    if (typeof s !== "string" || !j.test(s)) throw new c(`${n}[${d}] is a font name: 1 to 64 letters, digits, spaces, _ and -, starting with a letter or digit`);
    return s;
  }), generic: i };
}
function ee(o, n) {
  let t = w(o, n, ["stops", "angle", "shape", "size", "repeat"]), e = b(t.stops, `${n}.stops`, [2, 16]), { shape: r = "linear", angle: i = 180, repeat: s = false } = t, d = t.size === void 0 ? null : A(t.size, `${n}.size`), a = 0;
  if (r !== "linear" && r !== "radial") throw new c(`${n}.shape is linear or radial`);
  return { kind: "gradient", shape: r, angle: m(i, `${n}.angle`, [-360, 360], "degrees"), stops: e.map((l, g) => {
    let f = `${n}.stops[${g}]`, { at: u = g / (e.length - 1), color: T } = typeof l === "string" ? { color: l } : w(l, f, ["at", "color"]);
    if (typeof u !== "number" || !(u >= a && u <= 1)) throw new c(`${f} is out of place: stops run in order, from 0 to 1`);
    return a = u, { at: u, color: p(T, f) };
  }), tile: M(s, `${n}.repeat`) ? d : null };
}
function ne(o, n) {
  let t = new c(`${n} is SVG path data that starts with M, whole, of at most 16384 characters and no number past 1000000`);
  if (typeof o !== "string" || o.length > 16384 || !/^\s*m/i.test(o)) throw t;
  return Array.from(o.matchAll(V), ([, e = "", r]) => {
    let i = e.toLowerCase(), s = (r ?? "").replace(/\s+/g, " ").trimEnd(), d = X[i] ?? Number.NaN, a = [];
    for (let l = 0; l < s.length; ) {
      let g = a.length % d, f = i === "a" && (g === 3 || g === 4) ? K : Y;
      f.lastIndex = l;
      let u = Number(f.exec(s)?.[1]);
      if (!(Math.abs(u) <= 1e6)) throw t;
      a.push(u), l = f.lastIndex;
    }
    if (d === 0 ? a.length > 0 : a.length === 0 || a.length % d !== 0) throw t;
    return e + a.join(" ");
  }).join("");
}
function te(o, n) {
  let t = w(o, n, ["viewBox", "paths", "color", "size", "repeat", "slice"]), e = A(typeof t.viewBox === "number" ? [t.viewBox, t.viewBox] : t.viewBox, `${n}.viewBox`, "units"), r = t.size === void 0 ? e : A(t.size, `${n}.size`), i = t.color === void 0 ? void 0 : p(t.color, `${n}.color`);
  return { kind: "vector", viewBox: e, paths: b(t.paths, `${n}.paths`, [1, 64]).map((s, d) => {
    let a = `${n}.paths[${d}]`, { d: l, color: g, strokeWidth: f } = typeof s === "string" ? { d: s } : w(s, a, ["d", "strokeWidth", "color"]);
    return { d: ne(l, a), color: (g === void 0 ? i : void 0) ?? p(g, `${a}.color`), strokeWidth: f === void 0 ? null : m(f, `${a}.strokeWidth`, [0.1, 64]) };
  }), size: r, repeat: M(t.repeat ?? false, `${n}.repeat`), slice: t.slice === void 0 ? null : oe(t.slice, `${n}.slice`, e, r) };
}
function oe(o, n, [t, e], r) {
  let i = N(o, n, [0, H[1]], "viewBox units"), [s, d, a, l] = i, g = r[0] / t, f = r[1] / e, u = [s * f, d * g, a * f, l * g];
  if (s + a >= e || l + d >= t) throw new c(`${n} leaves no middle: opposite cuts must add up to less than the viewBox's side`);
  if (Math.max(...u) > 48) throw new c(`${n} draws an edge ${Math.ceil(Math.max(...u))} points wide, and the most is 48`);
  return { cuts: i, widths: u };
}
function re(o, n) {
  let { gradient: t, vector: e } = w(o, n, ["gradient", "vector"]);
  if (t === void 0 === (e === void 0)) throw new c(`${n} needs exactly one of gradient and vector`);
  return t === void 0 ? te(e, `${n}.vector`) : ee(t, `${n}.gradient`);
}
function ie(o, n) {
  if (o === "none") return o;
  let t = w(o, n, ["x", "y", "blur", "color"]), { x: e = 0, y: r = 0, blur: i = 0 } = t;
  return { x: m(e, `${n}.x`, E), y: m(r, `${n}.y`, E), blur: m(i, `${n}.blur`, U), color: p(t.color, `${n}.color`) };
}
function R(o, n, t) {
  let e = w(o, n, I[t]), r = {};
  for (let i of ["color", "backgroundColor", "borderColor"]) if (e[i] !== void 0) r[i] = p(e[i], `${n}.${i}`);
  if (typeof e.lineHeight === "number" && e.lineHeight < 4) throw new c(`${n}.lineHeight is points, not a multiple of the font size: 24, not 1.5`);
  for (let i of ["fontSize", "letterSpacing", "lineHeight", "borderWidth", "rotate"]) if (e[i] !== void 0) r[i] = m(e[i], `${n}.${i}`, W[i], i === "rotate" ? "degrees" : "points");
  if ((r.lineHeight ?? 1 / 0) < (r.fontSize ?? 0)) throw new c(`${n}.lineHeight is less than its fontSize, so lines would overlap`);
  for (let [i, s] of z) for (let d of ["padding", s, i]) if (e[d] !== void 0) r[i] = m(e[d], `${n}.${d}`, P);
  if (e.fontWeight !== void 0) {
    let i = x.findIndex((s) => s === e.fontWeight);
    if (i < 0) throw new c(`${n}.fontWeight is one of ${x.join(", ")}`);
    r.fontWeight = 400 + i * 100;
  }
  if (e.fontFamily !== void 0) r.fontFamily = Q(e.fontFamily, `${n}.fontFamily`, t);
  if (e.italic !== void 0) r.italic = M(e.italic, `${n}.italic`);
  if (e.fill !== void 0) r.fill = re(e.fill, `${n}.fill`);
  if (e.radius !== void 0) r.radius = N(e.radius, `${n}.radius`, L);
  if (e.shadow !== void 0) r.shadow = ie(e.shadow, `${n}.shadow`);
  return r;
}
