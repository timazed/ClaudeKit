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
var chunk_5vsymk03_exports = {};
__export(chunk_5vsymk03_exports, {
  jYt: () => jYt
});
module.exports = __toCommonJS(chunk_5vsymk03_exports);
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var c = ["shift+up", "shift+down", "ctrl+="].map(import_chunk_y8kqnbqt.wae);
function jYt(s, o) {
  let t = (0, import_chunk_y8kqnbqt.zCe)(s, "Chat", o), e = t.at(-1) ?? null, r = (0, import_chunk_vw137skj.f1t)() ?? "", n = (0, import_chunk_vw137skj.Nne)() !== null || /^(tmux|screen|ssh-session)/.test(r);
  if (!n && r !== "Apple_Terminal") return e;
  return t.findLast((i) => !i.some((f) => c.some((a) => (0, import_chunk_y8kqnbqt.EWe)(a, f)))) ?? (n ? e : null);
}
