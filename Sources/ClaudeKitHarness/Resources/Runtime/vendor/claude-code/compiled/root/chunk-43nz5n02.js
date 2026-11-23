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
var chunk_43nz5n02_exports = {};
__export(chunk_43nz5n02_exports, {
  BDo: () => BDo,
  HEe: () => HEe,
  Nxt: () => Nxt,
  Qqt: () => Qqt,
  Rge: () => Rge,
  Ro: () => Ro,
  Vr: () => Vr,
  Xee: () => Xee,
  _ra: () => _ra,
  bce: () => bce,
  d4n: () => d4n,
  tse: () => tse,
  yL: () => yL,
  yra: () => yra
});
module.exports = __toCommonJS(chunk_43nz5n02_exports);
var import_chunk_sah8dzn4 = require("/$bunfs/root/chunk-sah8dzn4.js");
var import_chunk_jk26f2gn = require("/$bunfs/root/chunk-jk26f2gn.js");
var _ra = /* @__PURE__ */ new Set(["http", "https", "ws", "wss", "ftp"]);
function Rge(t) {
  t = t.replace(/^[\x00-\x20]+/, "").replace(/[\t\n\r]/g, "");
  let n = t.indexOf("://");
  if (n === -1) return false;
  let r = t.slice(n + 3), s = t.slice(0, n).toLowerCase();
  if (_ra.has(s)) {
    let o = r.match(/^[/\\]+/)?.[0] ?? "";
    if (o.includes("\\")) return true;
    r = r.slice(o.length);
  }
  let e = r.search(/[/?#]/);
  return (e === -1 ? r : r.slice(0, e)).includes("\\");
}
var Vr = "github.com", yra = [`git@${Vr}:`, `ssh://git@${Vr}/`], m = [`https://${Vr}`, `https://${Vr}/`, Vr], x = `users.noreply.${Vr}`, a = "https://api.github.com", u = /[:/\\?#@\s]/, Xee = /^(?!\.{1,2}$)[a-z0-9.-]+$/, bce = /^(?!\.{1,2}$)[a-zA-Z0-9._-]+$/;
function yL(t) {
  let n = c(t.replace(/[\t\n\r]/g, "").toLowerCase());
  if (n === "" || u.test(n)) return n;
  try {
    let r = new URL(`https://${n}`);
    if (r.username !== "" || r.password !== "" || r.port !== "" || r.pathname !== "/" || r.search !== "" || r.hash !== "") return n;
    return c(r.hostname);
  } catch {
    return n;
  }
}
var Qqt = (0, import_chunk_jk26f2gn.u$)(function(n) {
  let r = yL(n);
  while (r.startsWith("www.")) r = r.slice(4);
  return r;
}, (t) => t, 50);
function d4n(t, n) {
  return Qqt(t) === n;
}
function Ro(t) {
  return d4n(t, Vr);
}
function Nxt(t, n) {
  if (!t || !n) return false;
  let r = yL(t);
  return r !== "" && r === yL(n);
}
function HEe(t) {
  return Ro(t) ? a : `https://${t}/api/v3`;
}
function BDo(t) {
  return Ro(t) ? `${a}/graphql` : `https://${t}/api/graphql`;
}
function i(t) {
  return /[%\x00-\x1f\x7f-\u{10FFFF}]/u.test(t);
}
function tse(t) {
  if ((0, import_chunk_sah8dzn4._J)(t)) return true;
  if (t.includes("://")) {
    if (Rge(t)) return true;
    try {
      let e = new URL(t);
      if (e.protocol === "http:" || e.protocol === "https:") return false;
      return i(e.hostname);
    } catch {
      return true;
    }
  }
  let n = t.indexOf(":"), r = t.indexOf("@");
  if (n >= 0 && r > n) return true;
  let s = t.match(/^(?:[^@]+@)?([^:]+):/)?.[1];
  return s ? i(s) : false;
}
function c(t) {
  let n = t.length;
  while (n > 0 && t[n - 1] === ".") n--;
  return t.slice(0, n);
}
