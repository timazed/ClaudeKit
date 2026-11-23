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
var chunk_d0bewyh8_exports = {};
__export(chunk_d0bewyh8_exports, {
  Vu: () => Vu,
  cuo: () => cuo,
  duo: () => duo,
  ius: () => ius,
  zQ: () => zQ
});
module.exports = __toCommonJS(chunk_d0bewyh8_exports);
var duo = "https://claude.com/claude-code", cuo = "https://claude.ai";
function i(t, e) {
  return t?.includes("_staging_") === true || e?.includes("staging") === true;
}
function ius(t, e) {
  return t?.includes("_local_") === true || e?.includes("localhost") === true;
}
function zQ(t, e) {
  if (ius(t, e)) return "http://localhost:4000";
  if (i(t, e)) return "https://claude-ai.staging.ant.dev";
  return "https://claude.ai";
}
function Vu(t, e, n) {
  let { toCompatSessionId: s } = require("/$bunfs/root/chunk-qy28wzmz.js"), o = s(t), r = `${zQ(o, e)}/code/${o}`;
  return n ? `${r}?${new URLSearchParams(n)}` : r;
}
