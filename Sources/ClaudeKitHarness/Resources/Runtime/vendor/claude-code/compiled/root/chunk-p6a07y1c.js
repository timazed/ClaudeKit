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
var chunk_p6a07y1c_exports = {};
__export(chunk_p6a07y1c_exports, {
  Ton: () => Ton,
  VAi: () => VAi,
  auo: () => auo,
  usl: () => usl
});
module.exports = __toCommonJS(chunk_p6a07y1c_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
function l(r) {
  return r;
}
function auo(r) {
  return l(new Set(r));
}
function usl(r) {
  let t = /* @__PURE__ */ new Set(), n = (e) => {
    if (Array.isArray(e)) e.forEach(n);
    else if (typeof e === "object" && e !== null) {
      let { properties: o } = e;
      if (typeof o === "object" && o !== null) for (let a of Object.keys(o)) t.add(a);
      Object.values(e).forEach(n);
    }
  };
  try {
    n((0, import_chunk_adx6804h.ise)(r, { unrepresentable: "any" }));
  } catch {
  }
  return l(t);
}
function Ton(r, t) {
  let n;
  return (0, import_chunk_78g0060s.Fr)((r ?? []).map((e) => typeof e === "number" || typeof e === "string" && (n ??= t()).has(e) ? String(e) : "*").join("."));
}
var i = /* @__PURE__ */ new Set(["type", "subtype", "hook_event_name"]);
function VAi(r) {
  if (r?.code !== "invalid_union") return r?.path ?? [];
  let t = [];
  for (let n of r.errors) {
    let e = n.some(({ path: o }) => o.length === 1 && o.every((a) => i.has(a))) ? [] : VAi(n[0]);
    if (e.length > t.length) t = e;
  }
  return [...r.path, ...t];
}
