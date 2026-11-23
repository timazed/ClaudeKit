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
var chunk_zvx9zp0y_exports = {};
__export(chunk_zvx9zp0y_exports, {
  nl: () => nl
});
module.exports = __toCommonJS(chunk_zvx9zp0y_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_e1qrqxdt = require("/$bunfs/root/chunk-e1qrqxdt.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
function nl(o, { isTyping: s = false, isEmptyList: r = false } = {}) {
  let d = (0, import_chunk_bs4h6795.be)(import_chunk_e1qrqxdt.R9t), i = (0, import_chunk_bs4h6795.be)(import_chunk_e1qrqxdt.x9t), n = (0, import_chunk_bs4h6795.mhr)(), e = d?.declared, t = d && o ? { hints: o, chain: d.chain, isTyping: s, isEmptyList: r, renders: i } : null;
  if (t) e?.byId.set(n, { ...t, isMounted: e.byId.get(n)?.isMounted ?? false });
  else e?.byId.delete(n);
  let a = t && (0, import_chunk_w578pjby._)([o, s, r]);
  (0, import_chunk_bs4h6795.It)(() => {
    if (!e || !t) return;
    return e.byId.set(n, { ...t, isMounted: true }), e.changed.emit(), () => {
      e.byId.delete(n), e.changed.emit();
    };
  }, [e, n, a]);
}
