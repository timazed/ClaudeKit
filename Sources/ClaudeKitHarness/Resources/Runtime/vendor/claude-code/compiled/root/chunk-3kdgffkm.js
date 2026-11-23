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
var chunk_3kdgffkm_exports = {};
__export(chunk_3kdgffkm_exports, {
  EGl: () => EGl,
  V8s: () => V8s,
  vGl: () => vGl
});
module.exports = __toCommonJS(chunk_3kdgffkm_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var V8s = Object.freeze({ isKept: true, isDenied: false, context: Object.freeze([]) });
function m() {
  let o = (0, import_chunk_865at33z.Yl)();
  return { setPromptMentionRunner: o.set, runPromptMention: (e) => {
    let r = o.get();
    return r ? r(e) : e.read(e.raised, "unhooked").then(() => V8s);
  } };
}
var t = (0, import_chunk_t57w17k7.de)(m(), (o) => o.setPromptMentionRunner(null));
var EGl = t.runPromptMention;
var vGl = t.setPromptMentionRunner;
