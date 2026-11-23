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
var chunk_1pan7v6b_exports = {};
__export(chunk_1pan7v6b_exports, {
  Aal: () => Aal,
  Cal: () => Cal,
  Jon: () => Jon,
  Qon: () => Qon,
  Tal: () => Tal,
  ZSe: () => ZSe,
  Zon: () => Zon,
  _Ae: () => _Ae,
  ebe: () => ebe,
  k7: () => k7,
  val: () => val,
  yAe: () => yAe
});
module.exports = __toCommonJS(chunk_1pan7v6b_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_n74jpb9a = require("/$bunfs/root/chunk-n74jpb9a.js");
var import_path = require("path");
var o = 100, f = 900, h = 300;
function _Ae(t) {
  return (0, import_chunk_w578pjby._)(t).replace(/[^\x20-\x7e]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Jon(t) {
  let n = _Ae(t);
  if (n.length <= h) return n;
  let e = [...t], r = e.length, i = 5;
  while (r > 0) {
    if (i += _Ae(e[r - 1]).length - 2, i > h) break;
    r--;
  }
  return _Ae(`...${e.slice(r).join("")}`);
}
function val(t) {
  let n = [], e = 0;
  for (let { path: i, name: a, size: c } of t) {
    let g = `${Jon(i)}${(0, import_path.basename)(i) === a ? "" : `, the file ${Jon(a)}`} (${c} bytes)`;
    if (e += g.length + 2, e > f) break;
    n.push(g);
  }
  let r = t.length - n.length;
  return `Attaches ${t.length} ${(0, import_chunk_7cfjrnwy.O)(t.length, "file")}: ${n.join("; ")}${r > 0 ? `; and ${r} more` : ""}`;
}
function Tal(t) {
  if (t === "") return;
  let n = t.slice(1).split("/").map((e) => e.replaceAll("~1", "/").replaceAll("~0", "~")).map((e, r) => r === 0 ? e : /^\d+$/.test(e) ? `[${e}]` : `.${e}`).join("");
  return ZSe(n);
}
function ZSe(t) {
  return _Ae(t.length > o ? `${(0, import_chunk_7cfjrnwy.ee)(t, o)}...` : t);
}
function p(t) {
  return t.replace(/[^\x20-\x7e]|[<>]/g, (n) => `\\u${n.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Qon(t) {
  return p((0, import_chunk_w578pjby._)(t));
}
function ebe(t) {
  let n = Qon(t);
  if (n.length <= h) return n;
  let e = [...t], r = e.length, i = 5;
  while (r > 0) {
    if (i += Qon(e[r - 1]).length - 2, i > h) break;
    r--;
  }
  return Qon(`...${e.slice(r).join("")}`);
}
function k7(t) {
  return Qon(t.length > o ? `${(0, import_chunk_7cfjrnwy.ee)(t, o)}...` : t);
}
var d = /^[A-Za-z0-9_.-]+$/;
function yAe(t) {
  return t.length <= o && d.test(t) ? t : k7(t);
}
function Zon(t) {
  return (0, import_path.resolve)((0, import_chunk_n2dbhmj2.Fa)(t) ?? t);
}
function Cal(t, n) {
  let e = Zon(t);
  return n !== e && !(import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE === true && (0, import_chunk_n74jpb9a.KDe)(e, n, { product: import_chunk_6mfepmbb.qR, attach: import_chunk_6mfepmbb.p3 }));
}
function Aal(t, n, e) {
  let r = n !== void 0 && n.length <= 1e3 && !n.endsWith("\\") && /^[\x20\x21\x23-\x3b\x3d\x3f-\x7e]+$/.test(n) ? n : void 0;
  return `Cannot send ${t}: it resolves to another path${r === void 0 ? ", through a link or a name that is stored otherwise" : `, "${r}"`}. A file is sent only by the path it resolves to, so that the path a person approves names the file that is sent. If that is the file you mean, call again with ${r === void 0 ? "the path it resolves to" : "that path"}. ${e}`;
}
