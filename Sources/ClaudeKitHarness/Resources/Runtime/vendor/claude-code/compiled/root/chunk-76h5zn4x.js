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
var chunk_76h5zn4x_exports = {};
__export(chunk_76h5zn4x_exports, {
  Hjr: () => Hjr
});
module.exports = __toCommonJS(chunk_76h5zn4x_exports);
var import_chunk_epy4sc29 = require("/$bunfs/root/chunk-epy4sc29.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var r = /^[a-zA-Z0-9_-]{1,64}$/;
function Hjr(i, n = import_chunk_epy4sc29.Ll) {
  if (!("tools" in i) || i.tools === void 0) return [];
  if (!Array.isArray(i.tools)) return (0, import_chunk_w578pjby.t)("[bridge:meta-mcp] meta tools[] is not an array", { level: "warn" }), null;
  let e = [];
  for (let o of i.tools) {
    if (o === null || typeof o !== "object" || !("name" in o) || typeof o.name !== "string" || !r.test(o.name)) return (0, import_chunk_w578pjby.t)("[bridge:meta-mcp] injected tools[] entry is malformed", { level: "warn" }), null;
    e.push({ name: o.name, ..."permission_policy" in o && typeof o.permission_policy === "string" && { permission_policy: o.permission_policy } });
  }
  let { allow: s } = (0, import_chunk_px0hhsq7.yqt)({ [n]: { type: "http", tools: e } }), l = (0, import_chunk_px0hhsq7.lr)(n, "");
  return s.map((o) => o.startsWith(l) ? o.slice(l.length) : o);
}
