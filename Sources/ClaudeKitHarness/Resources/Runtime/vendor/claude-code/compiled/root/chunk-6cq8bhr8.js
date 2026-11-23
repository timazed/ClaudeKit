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
var chunk_6cq8bhr8_exports = {};
__export(chunk_6cq8bhr8_exports, {
  RYt: () => RYt
});
module.exports = __toCommonJS(chunk_6cq8bhr8_exports);
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_2qh29p4b = require("/$bunfs/root/chunk-2qh29p4b.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_g78kc1rr = require("/$bunfs/root/chunk-g78kc1rr.js");
function RYt(f, t, i, m) {
  let e = (0, import_chunk_2qh29p4b.l0t)(t);
  if (e === null || !(0, import_chunk_g78kc1rr.QQ)(e) || t.some((n) => n !== e && n.name === e.name)) return;
  let c = (0, import_chunk_px0hhsq7.lr)(import_chunk_epy4sc29.Ll, m), r = f.filter((n) => (0, import_chunk_4vsz8a99.gt)(n, c)), o = r[0]?.mcpInfo;
  return r.length !== 1 || i !== void 0 && Object.hasOwn(i, c) || o?.serverName !== e.name || o.toolName !== m || o.scope !== e.config.scope || o.serverType !== e.config.type || o.hiddenFromModel === true ? void 0 : r[0];
}
