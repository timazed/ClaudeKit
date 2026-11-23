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
var chunk_w5811gqy_exports = {};
__export(chunk_w5811gqy_exports, {
  WYr: () => WYr,
  iUa: () => iUa,
  oUa: () => oUa,
  rUa: () => rUa,
  sUa: () => sUa
});
module.exports = __toCommonJS(chunk_w5811gqy_exports);
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
var i = 1024, a = 1048576, c = new RegExp("^(?:(?!\\p{Lm})\\p{L}|\\p{N}|[\\x20-\\x7E])$", "u"), rUa = "Claude in Chrome file upload", u = /^https?:\/\/(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)*[a-z](?:[a-z0-9-]*[a-z0-9])?(?::[1-9][0-9]{0,4})?$/;
function WYr(n) {
  if (typeof n !== "string" || !u.test(n)) return false;
  try {
    return new URL(n).origin === n;
  } catch {
    return false;
  }
}
var p = /^[A-Za-z0-9_-]{8}-/;
function oUa(n, e) {
  if (e === "") return false;
  let t = n.slice(n.lastIndexOf("/") + 1);
  if (t === e) return true;
  let o = p.test(t) ? t.slice(9) : void 0;
  return o === e || o === `${e}_`;
}
function sUa(n) {
  if (!Array.isArray(n)) return;
  let e = [];
  for (let t of n) {
    if (!(0, import_chunk_ma3kja9f.T)(t) || typeof t.name !== "string" || typeof t.data !== "string" || t.mimeType !== void 0 && typeof t.mimeType !== "string") return;
    let o = Buffer.from(t.data, "base64");
    e.push({ name: t.name, mimeType: t.mimeType ?? "", size: o.length, sha256: (0, import_chunk_ccm69jjy.Je)(o) });
  }
  return e;
}
function iUa(n, e) {
  let t = e.map((r) => {
    let s = Math.floor(r.size * 10 / a), l = r.size === 1 ? "1 byte" : r.size < i ? `${r.size} bytes` : r.size < a ? `${Math.floor(r.size / i)} KB` : `${Math.floor(s / 10)}.${s % 10} MB`;
    return `"${f(r.name).replaceAll('"', "?")}" (${l})`;
  }), o = t.length > 1 ? `${t.slice(0, -1).join(", ")} and ${t.at(-1)}` : t[0] ?? "";
  return `Upload ${e.length === 1 ? "1 file" : `${e.length} files`} to ${f(n)}: ${o}`;
}
function f(n) {
  let e = "";
  for (let t of n) e += c.test(t) ? t : "?";
  return e;
}
