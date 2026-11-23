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
var chunk_4m6b6dwt_exports = {};
__export(chunk_4m6b6dwt_exports, {
  E9l: () => E9l,
  P1o: () => P1o
});
module.exports = __toCommonJS(chunk_4m6b6dwt_exports);
var import_chunk_0jve1fep = require("/$bunfs/root/chunk-0jve1fep.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_xv4nm9fz = require("/$bunfs/root/chunk-xv4nm9fz.js");
function E9l(t, o, s) {
  let e = P1o(s);
  if (e.size === 0) return;
  t.dropRewound(import_chunk_xv4nm9fz.Bje, e), (0, import_chunk_qf73a9we.gN)(o.removeByFilter((n) => {
    let r = n.pollEvent?.replToolUseId;
    return r !== void 0 && e.has(r);
  }, { reason: "rewound" }), "a rewind removed the REPL call this event comes from");
}
function P1o(t) {
  let o = /* @__PURE__ */ new Set();
  for (let s of t) {
    if (s.type !== "assistant" || !Array.isArray(s.message.content)) continue;
    for (let e of s.message.content) if ((0, import_chunk_0jve1fep.Le)(e) && e.type === "tool_use" && typeof e.id === "string") o.add(e.id);
  }
  return o;
}
