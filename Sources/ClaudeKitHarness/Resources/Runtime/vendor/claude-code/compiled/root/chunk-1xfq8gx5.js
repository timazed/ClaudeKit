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
var chunk_1xfq8gx5_exports = {};
__export(chunk_1xfq8gx5_exports, {
  Sed: () => Sed,
  WGi: () => WGi,
  jGi: () => jGi
});
module.exports = __toCommonJS(chunk_1xfq8gx5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_tvbk4t18 = require("/$bunfs/root/chunk-tvbk4t18.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_rpdn91q1 = require("/$bunfs/root/chunk-rpdn91q1.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var p = 64, f = 200, c = "models.list (only a model name that can't be used with this provider)", M = "models.list (only a display name, too long or with hidden characters)";
function WGi(e, s, r) {
  if (e === void 0 || e.length === 0) return { leftOut: [] };
  if (e.length > f) return { leftOut: [`models.list (more than ${f} models, so no model limit applies)`] };
  let o = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map();
  for (let { name: t, labelOverride: n, supports1m: a, prefer1m: g } of e) {
    if (!import_chunk_rpdn91q1.Xze.test(t) || !r(t)) {
      o.add(c);
      continue;
    }
    d.add(t);
    let l = n === void 0 || n.length > p || (0, import_chunk_tvbk4t18.GT)(n) ? void 0 : n;
    if (l !== n) o.add(M);
    let u = a === true && (g === true || s);
    if (!u && !i.has(t)) i.set(t, l);
    if (a === true && !i.has(`${t}[1m]`)) i.set(`${t}[1m]`, u || l === void 0 ? l : `${l} (1M context)`);
  }
  if (i.size === 0) return { leftOut: ["models.list"] };
  return { settings: { availableModels: [...d], availableModelsMatch: "exact", modelPicker: { replaceBuiltInOptions: true, options: [...i].map(([t, n]) => ({ model: t, ...n !== void 0 && { label: n } })) } }, leftOut: [...o] };
}
var m = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Map());
function jGi(e, s) {
  let r = m.of((0, import_chunk_f9x2f6cx.N)().host), o = r.get(e);
  if (o === void 0) return r.set(e, s ?? null), { held: s ?? null, changed: false };
  return { held: o, changed: !(0, import_chunk_z688m88d.Zt)(o, s ?? null) };
}
function Sed() {
  let e = (0, import_chunk_xcgcdx61.Si)();
  return e === null ? null : m.of((0, import_chunk_f9x2f6cx.N)().host).get(e) ?? null;
}
