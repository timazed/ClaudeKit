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
var chunk_7jczpc8b_exports = {};
__export(chunk_7jczpc8b_exports, {
  Bwt: () => Bwt,
  Kv: () => Kv,
  tje: () => tje
});
module.exports = __toCommonJS(chunk_7jczpc8b_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
var s = new import_chunk_pzzqg6s3.ze(() => ({ store: void 0 })), i = { maxBytes: 0, save: async () => null };
function Bwt(e) {
  return s.peek(e)?.store ?? (e.host.launchOptions.diskless() ? i : void 0);
}
function Kv() {
  return Bwt((0, import_chunk_f9x2f6cx.N)());
}
async function tje(e, o, r, n) {
  try {
    return await e.save(o, r, n);
  } catch {
    return (0, import_chunk_w578pjby.t)("A result could not be saved where the model reads files", { level: "error" }), null;
  }
}
