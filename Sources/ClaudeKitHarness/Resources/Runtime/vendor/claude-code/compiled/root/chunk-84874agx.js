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
var chunk_84874agx_exports = {};
__export(chunk_84874agx_exports, {
  BYn: () => BYn,
  vmt: () => vmt
});
module.exports = __toCommonJS(chunk_84874agx_exports);
var import_chunk_vw137skj = require("/$bunfs/root/chunk-vw137skj.js");
var BYn = { native: "copied to clipboard", "tmux-buffer": "copied to tmux buffer", osc52: "sent to your terminal's clipboard", none: "not copied to clipboard" };
async function vmt(e) {
  let o = await (0, import_chunk_vw137skj.F6)(e);
  if (o) process.stdout.write(o);
  let t = (0, import_chunk_vw137skj.kSe)();
  return t === "osc52" && !o ? "none" : t;
}
