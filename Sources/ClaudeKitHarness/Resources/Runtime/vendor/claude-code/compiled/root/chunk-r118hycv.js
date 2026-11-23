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
var chunk_r118hycv_exports = {};
__export(chunk_r118hycv_exports, {
  $Us: () => $Us,
  Ama: () => Ama
});
module.exports = __toCommonJS(chunk_r118hycv_exports);
var import_chunk_2xjdqky3 = require("/$bunfs/root/chunk-2xjdqky3.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function s(o, t) {
  let c = (0, import_chunk_2xjdqky3.om)(), e = (0, import_chunk_bzyb60p0.Il)(o), n = (0, import_chunk_bzyb60p0.une)(e, t), a = (0, import_chunk_bzyb60p0.Vw)(e, t), r = !((0, import_chunk_2xjdqky3.i1)() && !(0, import_chunk_bzyb60p0.zTe)(e, t));
  return { enabled: c, effectiveWindow: n, threshold: a, enforced: r, source: (0, import_chunk_bzyb60p0.Sye)(e, t) };
}
function Ama(o) {
  let t;
  return { notify(c, e) {
    let n = s(c, e);
    if (t !== void 0 && $Us(t, n)) return;
    t = n, o(n);
  }, reset() {
    t = void 0;
  } };
}
function $Us(o, t) {
  return o.enabled === t.enabled && o.effectiveWindow === t.effectiveWindow && o.threshold === t.threshold && o.enforced === t.enforced && o.source === t.source;
}
