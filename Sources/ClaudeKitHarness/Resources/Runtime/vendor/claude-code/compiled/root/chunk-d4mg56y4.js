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
var chunk_d4mg56y4_exports = {};
__export(chunk_d4mg56y4_exports, {
  zgt: () => zgt
});
module.exports = __toCommonJS(chunk_d4mg56y4_exports);
var import_chunk_kbr9bg9m = require("/$bunfs/root/chunk-kbr9bg9m.js");
var a = 2e5, m = 1e3;
function zgt(n) {
  try {
    if (!b(n) || Array.isArray(n)) return;
    let i = {}, s = [[n, i, 1]], l = a, y = (e, t) => {
      if (l-- <= 0) return c;
      if (e === null || e === void 0 || typeof e === "string" || typeof e === "number" || typeof e === "boolean") return e;
      if (t > m || !b(e)) return c;
      let u = Array.isArray(e) ? [] : {};
      return s.push([e, u, t]), u;
    };
    while (s.length > 0) {
      let [e, t, u] = s.pop(), d = Object.getOwnPropertyDescriptors(e);
      if (Array.isArray(e)) {
        let f = d.length?.value;
        if (typeof f !== "number") return;
        for (let r = 0; r < f; r++) {
          let o = d[r];
          if (o !== void 0 && !("value" in o)) return;
          let p = y(o?.value, u + 1);
          if (p === c) return;
          t[r] = p;
        }
        Object.freeze(t);
        continue;
      }
      if (Object.getOwnPropertySymbols(e).length > 0) return;
      for (let [f, r] of Object.entries(d)) {
        if (!("value" in r)) return;
        if (!r.enumerable) continue;
        let o = y(r.value, u + 1);
        if (o === c) return;
        Object.defineProperty(t, f, { value: o, writable: true, enumerable: true, configurable: true });
      }
      Object.freeze(t);
    }
    return i;
  } catch {
    return;
  }
}
var c = Symbol("not plain data");
function b(n) {
  if (typeof n !== "object" || n === null || (0, import_chunk_kbr9bg9m.dd)(n)) return false;
  if (Array.isArray(n)) return true;
  let i = Object.getPrototypeOf(n);
  return i === Object.prototype || i === null;
}
