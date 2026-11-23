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
var chunk_8z7w44vg_exports = {};
__export(chunk_8z7w44vg_exports, {
  Tbn: () => Tbn
});
module.exports = __toCommonJS(chunk_8z7w44vg_exports);
var import_chunk_3jkk3v3z = require("/$bunfs/root/chunk-3jkk3v3z.js");
var import_chunk_pxzmvybx = require("/$bunfs/root/chunk-pxzmvybx.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function Tbn(t, i) {
  let { credentials: r, storageV5: a } = (0, import_chunk_3jkk3v3z.Ve)(), [e] = (0, import_chunk_bs4h6795.y)(import_chunk_pxzmvybx.VUr), o = (0, import_chunk_bs4h6795.Ot)(e.subscribe, e.getSnapshot), { view: n } = o, [c, C] = (0, import_chunk_bs4h6795.y)(null), [g, u] = (0, import_chunk_bs4h6795.y)(false), [f, p] = (0, import_chunk_bs4h6795.y)(false), l = n.phase === "READY" && !(0, import_chunk_pxzmvybx.Ose)(n.message);
  return (0, import_chunk_bs4h6795.H)(() => {
    if (l) p(false);
  }, [l, n]), (0, import_chunk_bs4h6795.H)(() => {
    let s = e.retainControl(t, { credentials: r, storageV5: a });
    return u(true), s;
  }, [e, t, r, a]), { snapshot: g ? o : { ...o, isOpeningReadOut: true }, isLocked: c === n, isChoiceInDoubt: f && o.subject !== t.key, choose(s, m) {
    if (c === n) return false;
    return C(n), p(true), e.confirm({ entryPoint: i, decision: s, recordVersion: n.record_version, epoch: n.epoch, shown: { presentation: import_chunk_pxzmvybx.Zha[i], preselection: m }, text: { id: import_chunk_pxzmvybx.Jha, version_id: 0, lang: import_chunk_pxzmvybx.Qha } });
  }, tryAgain: () => e.tryAgain() };
}
