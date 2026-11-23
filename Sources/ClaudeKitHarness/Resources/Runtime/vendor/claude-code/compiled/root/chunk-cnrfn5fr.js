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
var chunk_cnrfn5fr_exports = {};
__export(chunk_cnrfn5fr_exports, {
  Att: () => Att,
  DDt: () => DDt,
  Err: () => Err,
  HDt: () => HDt,
  Rtt: () => Rtt,
  Vei: () => Vei,
  dTe: () => dTe,
  krr: () => krr,
  oAn: () => oAn,
  sAn: () => sAn,
  vXt: () => vXt,
  wMe: () => wMe,
  zei: () => zei
});
module.exports = __toCommonJS(chunk_cnrfn5fr_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_k2pr2qmg = require("/$bunfs/root/chunk-k2pr2qmg.js");
var import_chunk_p6rv87rz = require("/$bunfs/root/chunk-p6rv87rz.js");
var import_path = require("path");
var l = "/mnt/user-data/working", zei = import_path.posix.join(l, import_chunk_k2pr2qmg.vMe), HDt = 32, wMe = 524288, krr = 2097152, Vei = 200, a = 237, p = 4, dTe = "CLAUDE.md", Att = "rules", DDt = "output-styles", oAn = "settings.json", e = ".md", E = new RegExp("[\\p{Cc}\\p{Cf}\\p{Co}\\p{Cn}\\p{Zl}\\p{Zp}\\p{Default_Ignorable_Code_Point}\\u2800\\u{1D159}\\u2024-\\u2026\\u2044\\u2215\\u2216\\u2236\\u2571\\u2572\\u27CB\\u27CD\\u29F5\\u29F8\\u29F9\\u02D0\\u05C3\\u0589\\uA789\\uFE13\\uFE52\\uFE55\\uFE68\\uFF0E\\uFF0F\\uFF1A\\uFF3C\\uFF61\\u3002]|(?!\\u0020)\\p{Zs}", "u"), c = new RegExp("^\\p{M}", "u");
function d(t) {
  return t !== "" && t === t.trim() && Buffer.byteLength(t, "utf8") <= a && !t.startsWith(".") && !(0, import_chunk_p6rv87rz.Gcn)(t) && !t.includes("\\") && !E.test(t) && !c.test(t) && !t.endsWith("~") && !t.endsWith(".swp") && !t.endsWith(".tmp");
}
function r(t) {
  return t.length > e.length && t.endsWith(e);
}
function Err(t) {
  return (0, import_chunk_sjqze7qg.cpr)(t);
}
function M(t) {
  return r(Err(t));
}
function Rtt(t) {
  if (t.length > Vei || !(0, import_chunk_7cfjrnwy.Cf)(t) || t.normalize("NFC") !== t) return null;
  let n = t.split("/");
  if (!n.every(d)) return null;
  let [i, ...o] = n;
  if (o.length === 0) return i === dTe ? "claude_md" : null;
  let u = o.slice(0, -1), s = o.at(-1) ?? "";
  if (!r(s) || u.some(M)) return null;
  if (o.length > p) return null;
  return i === Att ? "rule" : i === DDt ? "output_style" : null;
}
function sAn(t) {
  return Rtt(t) !== null;
}
function vXt(t) {
  let n = Rtt(t);
  return n === null ? null : { destination: t, kind: n };
}
