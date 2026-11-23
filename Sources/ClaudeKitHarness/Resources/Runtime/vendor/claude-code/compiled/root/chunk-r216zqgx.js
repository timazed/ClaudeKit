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
var chunk_r216zqgx_exports = {};
__export(chunk_r216zqgx_exports, {
  rhl: () => rhl,
  tEt: () => tEt
});
module.exports = __toCommonJS(chunk_r216zqgx_exports);
var import_chunk_qebpc5de = require("/$bunfs/root/chunk-qebpc5de.js");
function tEt(t, e) {
  let n = t.get(e);
  if (n) return n;
  let i = l(e), o;
  for (let [c, s] of t) {
    let r = l(c);
    if (!r.includes("*")) {
      if (r === i) return s;
    } else if (o === void 0 && f(r, i)) o = s;
  }
  return o;
}
function l(t) {
  if (!t.startsWith("domain:")) return t;
  return `domain:${t.slice(7).toLowerCase().replace(/(?<=[^*.])\.+(?=(:\d+)?$)/, "")}`;
}
var a = ".:";
function f(t, e) {
  if (!t.startsWith("domain:") || !e.startsWith("domain:")) return false;
  if (t === "domain:*") return true;
  let n = u(t.slice(7)), i = u(e.slice(7));
  if (!n.startsWith("*.")) return (0, import_chunk_qebpc5de.qDr)(n, i, a);
  let o = n.slice(2), c = 1;
  for (let d of o) if (a.includes(d)) c++;
  let s = i.length;
  while (c > 0 && s > 0) if (s--, a.includes(i.charAt(s))) c--;
  let r = i.slice(0, s + 1);
  return c === 0 && !r.startsWith(".") && !r.includes("..") && !r.includes(":") && (0, import_chunk_qebpc5de.qDr)(o, i.slice(s + 1), a);
}
function u(t) {
  return t.replace(/[^\0-\x7f]/g, (e) => {
    let n = e.toUpperCase();
    return n.length === 1 && n.charCodeAt(0) > 127 ? n : e;
  });
}
function rhl(t, e) {
  let n = l(`domain:${t}`), i = l(`domain:${e}`);
  return n.includes("*") ? f(n, i) : n === i;
}
