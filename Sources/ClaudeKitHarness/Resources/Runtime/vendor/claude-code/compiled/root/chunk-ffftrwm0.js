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
var chunk_ffftrwm0_exports = {};
__export(chunk_ffftrwm0_exports, {
  P1s: () => P1s,
  x1s: () => x1s
});
module.exports = __toCommonJS(chunk_ffftrwm0_exports);
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var e = "claudecode/editResult", l = "1";
function x1s(o, t) {
  return o === import_chunk_rb36kwbn.lt && (0, import_chunk_0jve1fep.Le)(t) && t[e] === l;
}
async function P1s(o, t) {
  if (o.isError === true || t.subagentFrameResult === void 0) return o;
  try {
    if (await t.subagentFrameResultHolds?.() === false) return o;
  } catch (r) {
    return (0, import_chunk_k449cc64.i)(r), o;
  }
  return { ...o, _meta: { ...o._meta, [e]: t.subagentFrameResult } };
}
