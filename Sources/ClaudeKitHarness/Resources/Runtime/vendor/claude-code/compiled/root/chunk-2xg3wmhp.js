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
var chunk_2xg3wmhp_exports = {};
__export(chunk_2xg3wmhp_exports, {
  FNn: () => FNn,
  _sn: () => _sn,
  hUt: () => hUt,
  jxi: () => jxi,
  ore: () => ore
});
module.exports = __toCommonJS(chunk_2xg3wmhp_exports);
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
function ore(e, n) {
  let t = e?.[n.argument], { entryKey: r } = n;
  if (r === void 0) return [{ entry: void 0, value: t }];
  if (!Array.isArray(t)) return [];
  let u = [];
  for (let [o, i] of t.entries()) if ((0, import_chunk_0jve1fep.Le)(i)) u.push({ entry: o, value: Object.hasOwn(i, r) ? i[r] : void 0 });
  return u;
}
function _sn(e, n, t) {
  let { entryKey: r } = n;
  if (r === void 0) {
    let o = t.get(void 0);
    return o === void 0 ? { ...e } : { ...e, [n.argument]: o };
  }
  let u = e[n.argument];
  if (!Array.isArray(u)) return { ...e };
  return { ...e, [n.argument]: u.map((o, i) => {
    let s = t.get(i);
    return s === void 0 || !(0, import_chunk_0jve1fep.Le)(o) ? o : { ...o, [r]: s };
  }) };
}
function jxi(e, n) {
  let t = e[n.argument];
  if (n.entryKey === void 0 || !Array.isArray(t)) return { ...e };
  return { ...e, [n.argument]: t.map((r) => (0, import_chunk_0jve1fep.Le)(r) ? { ...r } : r) };
}
function hUt(e) {
  return typeof e === "string" && e.startsWith("sha256:");
}
function FNn(e, n) {
  return e.wrongArgumentsHoldText === true ? typeof n === "string" && /^sha256:[0-9a-f]{64}:/.test(n) : hUt(n);
}
