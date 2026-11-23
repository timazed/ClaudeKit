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
var chunk_pt2stgge_exports = {};
__export(chunk_pt2stgge_exports, {
  MDt: () => MDt,
  oei: () => oei
});
module.exports = __toCommonJS(chunk_pt2stgge_exports);
var import_chunk_0vvtfqck = require("/$bunfs/root/chunk-0vvtfqck.js");
function oei(r, o = [], n = false) {
  let t = r.message.content;
  if (!Array.isArray(t)) return "";
  let i = (0, import_chunk_0vvtfqck.kje)();
  if (i.size === 0) return "";
  return t.flatMap((e) => {
    if (e.type !== "tool_use") return [];
    if (!i.has(e.name)) return o.filter((s) => s.replCallId === e.id && (n || !s.toAnotherAgent)).map((s) => s.text);
    if (!n && !(0, import_chunk_0vvtfqck.HMi)(e.name)) return [];
    let a = e.input?.text;
    return typeof a === "string" ? [a] : [];
  }).filter(Boolean).join(`
`);
}
var p = 8;
class MDt {
  #t = [];
  note(r, o, n) {
    let t = n.text;
    if (typeof t !== "string" || !t) return;
    if (this.#t.push({ replCallId: r, text: t, ...!(0, import_chunk_0vvtfqck.HMi)(o) && { toAnotherAgent: true } }), this.#t.length > p) this.#t.shift();
  }
  take() {
    return this.#t.splice(0);
  }
  clear() {
    this.#t.length = 0;
  }
}
