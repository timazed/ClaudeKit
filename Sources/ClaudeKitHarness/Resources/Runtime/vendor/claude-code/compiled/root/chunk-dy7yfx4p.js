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
var chunk_dy7yfx4p_exports = {};
__export(chunk_dy7yfx4p_exports, {
  lHt: () => lHt,
  tPa: () => tPa
});
module.exports = __toCommonJS(chunk_dy7yfx4p_exports);
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var n = { marks: ["claude", "anthropic", "anthropics"], builtinLead: "cc-plugin", products: ["claude-code", "claude-mods"] }, c = [...n.marks, n.builtinLead], E = [...n.marks, ...n.products], l = (e) => new Set(e.map((s) => (0, import_chunk_xcgcdx61.jHs)(s).join(""))), p = l(c), u = l(E), m = Math.max(...[...p, ...u].map((e) => e.length)), a = (e) => new Intl.ListFormat("en", { type: "disjunction" }).format(e.map((s) => `"${s}"`)), d = "Name it for what it does.", tPa = "If this is one of Anthropic's own plugins, validate the marketplace that lists it.";
function lHt(e) {
  let s = import_chunk_xcgcdx61.WHs.test(e), o = (s ? (0, import_chunk_hr2stdq7.vee)(e) : e).toLowerCase(), r = s ? `"${e}" (read as "${o}")` : `"${e}"`, i = (0, import_chunk_xcgcdx61.jHs)(o);
  if ([...(0, import_chunk_xcgcdx61.vZi)(o, m)].some(({ joined: t, isWhole: g }) => (g ? u : p).has(t)) || import_chunk_xcgcdx61.EZi.test(o) || import_chunk_xcgcdx61.EZi.test(i.join(""))) return { severity: "error", message: `Plugin name ${r} is reserved: it passes as one of Anthropic's own. A third party's plugin name cannot start with ${a(c.map((t) => `${t}-`))}, be ${a(E)}, or put "official" beside "claude" or "anthropic". ` + d };
  return n.marks.some((t) => i.includes(t)) ? { severity: "warning", message: `Plugin name ${r} reads as one of Anthropic's own. ` + d } : void 0;
}
