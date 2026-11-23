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
var chunk_mzmcvr6c_exports = {};
__export(chunk_mzmcvr6c_exports, {
  DD: () => DD,
  Fce: () => import_crypto.randomUUID,
  Wca: () => Wca,
  ZB: () => ZB,
  cx: () => cx,
  eSn: () => eSn,
  ht: () => ht,
  jQe: () => jQe,
  qS: () => qS,
  ro: () => ro,
  tm: () => tm,
  wT: () => wT
});
module.exports = __toCommonJS(chunk_mzmcvr6c_exports);
var import_crypto = require("crypto");
function wT(t) {
  return t;
}
function ro(t) {
  return t;
}
var eSn = "hook-agent-";
function ZB(t) {
  return typeof t === "string" && t.length <= 200 && /^[A-Za-z0-9_][A-Za-z0-9_-]*$/.test(t) && !/^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i.test(t);
}
var i = "[\\w-]{1,63}", a = new RegExp(`^${i}$`), u = /^[\w-]{1,128}$/;
function DD(t) {
  return u.test(t);
}
var c = new RegExp(`^a(?:${i}-)?[0-9a-f]{16}$`);
function tm(t) {
  return c.test(t) ? t : null;
}
var d = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, g = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function jQe(t) {
  return g.test(t);
}
function cx(t, o) {
  let f = Buffer.from(o.replace(/-/g, ""), "hex"), n = (0, import_crypto.createHash)("sha1").update(f).update(Buffer.from(t, "utf8")).digest();
  n[6] = n[6] & 15 | 80, n[8] = n[8] & 63 | 128;
  let e = n.subarray(0, 16).toString("hex");
  return `${e.slice(0, 8)}-${e.slice(8, 12)}-${e.slice(12, 16)}-${e.slice(16, 20)}-${e.slice(20, 32)}`;
}
var p = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
function Wca(t) {
  return typeof t === "string" && p.test(t);
}
function ht(t) {
  if (typeof t !== "string") return null;
  return d.test(t) ? t : null;
}
function qS(t) {
  if (t && !a.test(t)) t = t.replace(/[^\w-]/g, "").slice(0, 63);
  let o = (0, import_crypto.randomBytes)(8).toString("hex");
  return t ? `a${t}-${o}` : `a${o}`;
}
