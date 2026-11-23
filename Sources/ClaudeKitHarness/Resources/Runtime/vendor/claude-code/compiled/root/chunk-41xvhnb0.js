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
var chunk_41xvhnb0_exports = {};
__export(chunk_41xvhnb0_exports, {
  M8t: () => M8t,
  bva: () => bva
});
module.exports = __toCommonJS(chunk_41xvhnb0_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_jsm9pvcb = require("/$bunfs/root/chunk-jsm9pvcb.js");
function M8t(e) {
  return Array.isArray(e?.names) && e.names.length > 0 ? { names: e.names, isWholeList: false } : void 0;
}
function bva(e, { tools: a, prefixesStillToCome: d, messages: f }) {
  let s = e?.names.filter((o) => !a.some((n) => (0, import_chunk_4vsz8a99.gt)(n, o)) && !d.some((n) => o.startsWith(n)));
  if (e === void 0 || !s?.length) return e;
  let t = /* @__PURE__ */ new Set();
  try {
    for (let o of f) if (o.type === "assistant" && Array.isArray(o.message.content)) {
      for (let n of o.message.content) if ((0, import_chunk_jsm9pvcb.Wi)(n) && n.type === "tool_use") t.add(n.name);
    }
  } catch (o) {
    t.clear(), (0, import_chunk_k449cc64.i)(o);
  }
  let r = e.names.filter((o) => !s.includes(o) || t.has(o));
  return r.length === e.names.length ? e : M8t({ ...e, names: r });
}
