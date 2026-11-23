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
var chunk_590fnate_exports = {};
__export(chunk_590fnate_exports, {
  oYr: () => oYr
});
module.exports = __toCommonJS(chunk_590fnate_exports);
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
function oYr(r, i) {
  let s = r.sameTurnErroredToolUseIds;
  if (s === void 0 || s.size === 0) return null;
  let o = /* @__PURE__ */ new Map();
  for (let t of r.sameTurnToolUses ?? []) for (let e of t.message.content) {
    if (e.type !== "tool_use" || e.name !== import_chunk_rb36kwbn.lt && e.name !== import_chunk_rb36kwbn.Dt || !(0, import_chunk_ma3kja9f.T)(e.input)) continue;
    let a = e.input.file_path ?? e.input.path ?? e.input.file, n = typeof a === "string" ? (0, import_chunk_n2dbhmj2.Fa)(a) : null;
    if (n === null || !i.includes(n)) continue;
    if (s.has(e.id)) o.set(n, true);
    else if (e.name === import_chunk_rb36kwbn.Dt) o.set(n, false);
  }
  return i.find((t) => o.get(t) === true) ?? null;
}
