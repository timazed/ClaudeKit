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
var chunk_r59sj93t_exports = {};
__export(chunk_r59sj93t_exports, {
  O_e: () => O_e,
  cue: () => cue,
  tqs: () => tqs,
  z8t: () => z8t
});
module.exports = __toCommonJS(chunk_r59sj93t_exports);
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_5h9h52az = require("/$bunfs/root/chunk-5h9h52az.js");
function cue(e, t) {
  let n = e.trimStart();
  return (0, import_chunk_5h9h52az.Rk)(n) !== "prompt" || n.startsWith("/") || t?.tempo === "blocked" && (t.block?.questions.length ?? 0) > 0;
}
function z8t(e) {
  return e.queuedPrompt !== void 0 && cue(e.queuedPrompt, null) ? void 0 : e.queuedPrompt;
}
function tqs(e, t) {
  return e === t || e.endsWith(`

${t}`);
}
async function O_e(e, t, n, o, u) {
  if (cue(n, null)) return false;
  let r = u ? z8t(t) : void 0;
  return (0, import_chunk_9e5mdyfk.Hf)(e, { ...t, queuedPrompt: !r ? n : tqs(r, n) ? r : `${r}

${n}`, updatedAt: (/* @__PURE__ */ new Date()).toISOString() }, o).then(() => true, (i) => ((0, import_chunk_9e5mdyfk.Lu)(i), false));
}
