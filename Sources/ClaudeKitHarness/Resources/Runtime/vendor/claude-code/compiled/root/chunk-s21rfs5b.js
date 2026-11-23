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
var chunk_s21rfs5b_exports = {};
__export(chunk_s21rfs5b_exports, {
  N7l: () => N7l,
  sXs: () => sXs
});
module.exports = __toCommonJS(chunk_s21rfs5b_exports);
var import_chunk_nwzbbv1c = require("/$bunfs/root/chunk-nwzbbv1c.js");
var s = 40, a = 80, i = "Your REPL VM state was kept across this compaction", f = 4e3, c = new RegExp(`^${i}(?:; no bindings are defined in it\\.|\\. (\\d{1,9}) bindings? (?:is|are) still defined in it, with names this note does not list\\.|\\. These bindings are still defined: ((?:\`[^\`]+\`, )*\`[^\`]+\`)(?:, and (\\d{1,9}) more this note does not list)?\\.)$`);
function o(e) {
  return e.length <= a && import_chunk_nwzbbv1c.Klo.test(e);
}
function r(e, n) {
  if (e.length === 0 && n === 0) return `${i}; no bindings are defined in it.`;
  if (e.length === 0) return `${i}. ${n} binding${n === 1 ? " is" : "s are"} still defined in it, with names this note does not list.`;
  return `${i}. These bindings are still defined: ${e.map((t) => `\`${t}\``).join(", ")}${n > 0 ? `, and ${n} more this note does not list` : ""}.`;
}
function N7l(e) {
  let n = e.filter(o).slice(0, s);
  return r(n, e.length - n.length);
}
function sXs(e) {
  if (e.length > f) return false;
  let n = c.exec(e);
  if (n === null) return false;
  let t = n[2] === void 0 ? [] : n[2].split(", ").map((d) => d.slice(1, -1)), l = Number(n[1] ?? n[3] ?? 0);
  if (t.length > s || !t.every(o)) return false;
  return r(t, l) === e;
}
