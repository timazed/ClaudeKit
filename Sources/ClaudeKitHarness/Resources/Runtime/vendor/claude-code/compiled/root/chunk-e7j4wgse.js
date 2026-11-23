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
var chunk_e7j4wgse_exports = {};
__export(chunk_e7j4wgse_exports, {
  lgt: () => lgt
});
module.exports = __toCommonJS(chunk_e7j4wgse_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_3f2ytgjw = require("/$bunfs/root/chunk-3f2ytgjw.js");
var import_chunk_vyzg3yfa = require("/$bunfs/root/chunk-vyzg3yfa.js");
var lgt = { mayAsk() {
  let t = (0, import_chunk_3f2ytgjw.Hwe)(), e = t === void 0 ? (0, import_chunk_9b4aq7fb.hFe)() : t;
  return (0, import_chunk_vyzg3yfa.QO)() && (0, import_chunk_865at33z.oRr)(import_chunk_c203g5kd.s.ANTHROPIC_BASE_URL ?? e ?? "https://api.anthropic.com");
}, getHeaders() {
  return (0, import_chunk_865at33z.JV)();
} };
