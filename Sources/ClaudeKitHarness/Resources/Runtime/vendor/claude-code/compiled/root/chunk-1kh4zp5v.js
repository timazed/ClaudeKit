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
var chunk_1kh4zp5v_exports = {};
__export(chunk_1kh4zp5v_exports, {
  $ws: () => $ws,
  pM: () => pM,
  rlt: () => rlt
});
module.exports = __toCommonJS(chunk_1kh4zp5v_exports);
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
function rlt(o) {
  let t = (0, import_chunk_865at33z.ce)().loadedModules.find((s) => s.name === o);
  return t === void 0 || (0, import_chunk_59mwkeke.hu)(t);
}
function $ws() {
  let o = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
  return { list: (e) => rlt(e) ? [...o.get(e)?.values() ?? []] : [], own: (e) => {
    let r = o.get(e) ?? /* @__PURE__ */ new Map();
    return o.set(e, r), r;
  }, serverKey: (e) => t.get(e), ownerOfKey: (e) => [...t.entries()].find(([, r]) => r === e)?.[0], keyed: (e, r) => {
    t.set(e, r), s.add(r);
  }, minted: (e) => s.has(e), forget: (e) => {
    o.delete(e), t.delete(e);
  } };
}
var pM = $ws();
