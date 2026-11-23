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
var chunk_174ey7y2_exports = {};
__export(chunk_174ey7y2_exports, {
  Twn: () => Twn
});
module.exports = __toCommonJS(chunk_174ey7y2_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function h(e, o) {
  let p = (0, import_chunk_bzyb60p0._en)(e), s = Math.min(p.length, (0, import_chunk_bzyb60p0.FOn)());
  return 2 + (0, import_chunk_bzyb60p0.$On)(e, o).length + 2 + s + 1;
}
function Twn(e, o, p) {
  let s = /* @__PURE__ */ new Map();
  for (let n of e) {
    if (n.type !== "prompt" || n.disableModelInvocation) continue;
    let t = n.pluginInfo?.pluginManifest.name;
    if (!t) continue;
    let a = h(n, e), r = s.get(t) ?? [];
    r.push({ name: n.name, chars: a, approxTokens: Math.round(a / o) }), s.set(t, r);
  }
  let u = [...s.entries()].map(([n, t]) => {
    t.sort((r, i) => i.chars - r.chars);
    let a = t.reduce((r, i) => r + i.chars, 0);
    return { pluginName: n, skillCount: t.length, chars: a, approxTokens: Math.round(a / o), skills: t };
  }).sort((n, t) => t.chars - n.chars), m = u.reduce((n, t) => n + t.chars, 0), c = (0, import_chunk_bzyb60p0.gen)(p, o), l = m > c, g = l ? c : m;
  return { byPlugin: u, totalChars: g, totalTokens: Math.round(g / o), overBudget: l };
}
