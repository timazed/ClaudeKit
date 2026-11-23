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
var chunk_8j4mv1cb_exports = {};
__export(chunk_8j4mv1cb_exports, {
  jkn: () => jkn,
  p2r: () => p2r
});
module.exports = __toCommonJS(chunk_8j4mv1cb_exports);
function jkn(e) {
  return typeof e === "object" && !Array.isArray(e);
}
var c = /^\/?[\w:.-]+/;
function* a(e) {
  let t = e.length, n = 0;
  while (n < t) {
    if (e[n] !== "<") {
      let u = e.indexOf("<", n);
      if (u === -1) u = t;
      yield ["", void 0, void 0, e.slice(n, u)], n = u;
      continue;
    }
    if (e.startsWith("<?", n)) {
      let u = e.indexOf("?>", n + 2);
      if (u === -1) return;
      n = u + 2;
      continue;
    }
    if (e.startsWith("<!--", n)) {
      let u = e.indexOf("-->", n + 4);
      if (u === -1) return;
      n = u + 3;
      continue;
    }
    let i = e.indexOf(">", n + 1);
    if (i === -1) return;
    if (e.startsWith("<!", n)) {
      n = i + 1;
      continue;
    }
    let r = e.slice(n + 1, i), d = c.exec(r)?.[0];
    if (d === void 0) return;
    yield [e.slice(n, i + 1), d, r.endsWith("/") ? "/" : "", void 0], n = i + 1;
  }
}
function p2r(e) {
  let t = a(e), n = s(t);
  if (!n || n[1] !== "plist" || n[2] === "/") return;
  let i = s(t);
  if (!i) return;
  let r = o(t, i);
  return s(t)?.[1] === "/plist" ? r : void 0;
}
function s(e) {
  for (let t = e.next(); !t.done; t = e.next()) if (t.value[1] !== void 0) return t.value;
  return;
}
function f(e, t) {
  if (t[2] === "/") return "";
  let n = "";
  for (let i = e.next(); !i.done; i = e.next()) {
    let r = i.value;
    if (r[1] === `/${t[1]}`) return g(n);
    if (r[3] === void 0) return;
    n += r[3];
  }
  return;
}
function o(e, t) {
  let n = t[2] === "/";
  switch (t[1]) {
    case "true":
    case "false":
      if (!n && f(e, t) === void 0) return;
      return t[1] === "true";
    case "string":
    case "data":
    case "date":
      return f(e, t);
    case "integer": {
      let i = f(e, t)?.trim();
      if (!i) return;
      let r = Number(i);
      return Number.isNaN(r) ? void 0 : r;
    }
    case "real": {
      let i = f(e, t)?.trim();
      if (!i) return;
      let r = /^([+-]?)(nan|inf|infinity)$/i.exec(i);
      if (r) {
        if (r[2].toLowerCase() === "nan") return NaN;
        return r[1] === "-" ? -1 / 0 : 1 / 0;
      }
      let d = Number(i);
      return Number.isNaN(d) ? void 0 : d;
    }
    case "array":
      return n ? [] : l(e);
    case "dict":
      return n ? {} : p(e);
    default:
      return;
  }
}
function l(e) {
  let t = [];
  for (; ; ) {
    let n = s(e);
    if (!n) return;
    if (n[1] === "/array") return t;
    let i = o(e, n);
    if (i === void 0) return;
    t.push(i);
  }
}
function p(e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (; ; ) {
    let n = s(e);
    if (!n) return;
    if (n[1] === "/dict") return t;
    if (n[1] !== "key") return;
    let i = f(e, n), r = s(e);
    if (i === void 0 || !r) return;
    let d = o(e, r);
    if (d === void 0) return;
    t[i] = d;
  }
}
function g(e) {
  if (!e.includes("&")) return e;
  return e.replace(/&(lt|gt|amp|quot|apos|#x[0-9a-fA-F]+|#\d+);/g, (t, n) => {
    switch (n) {
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "amp":
        return "&";
      case "quot":
        return '"';
      case "apos":
        return "'";
      default: {
        let i = n[1] === "x" ? parseInt(n.slice(2), 16) : parseInt(n.slice(1), 10);
        return i <= 1114111 ? String.fromCodePoint(i) : t;
      }
    }
  });
}
