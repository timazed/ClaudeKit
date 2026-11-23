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
var chunk_hdzn2mtn_exports = {};
__export(chunk_hdzn2mtn_exports, {
  IYl: () => IYl,
  MYl: () => MYl,
  c4s: () => c4s,
  d4s: () => d4s,
  yQn: () => yQn
});
module.exports = __toCommonJS(chunk_hdzn2mtn_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_yaw6xb6n = require("/$bunfs/root/chunk-yaw6xb6n.js");
var import_chunk_7ft50mzy = require("/$bunfs/root/chunk-7ft50mzy.js");
var import_chunk_tc59sryy = require("/$bunfs/root/chunk-tc59sryy.js");
var yQn = 48;
function IYl(t) {
  if (!(0, import_chunk_tc59sryy.Wje)()) return null;
  let n = t.get(import_chunk_yaw6xb6n.Lbe);
  return { subscribe: (e) => n.onRunningScriptsChange(e), getSnapshot: () => n.runningScripts(import_chunk_w50zedgp.Bk) };
}
function MYl(t) {
  if (!(0, import_chunk_tc59sryy.Wje)()) return null;
  let n = t.get(import_chunk_yaw6xb6n.Lbe);
  return { subscribe: (e) => n.onScriptTicksChange((0, import_chunk_69qhefwa.$ce)(e)), getSnapshot: () => n.scriptTicks(import_chunk_w50zedgp.Bk) };
}
function d4s(t, n) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return null;
  let e = [...t.values()].sort((r, u) => i(r) - i(u) || r.evalId - u.evalId), c = e[0] === void 0 ? 0 : i(e[0]), o = e.map((r) => ({ phase: i(r), text: (0, import_chunk_7ft50mzy.Jve)(r.description, n) })).filter(({ text: r }) => r !== ""), s = o[0];
  if (s === void 0 || s.phase !== c) return null;
  let p = (0, import_chunk_f64qna2j.Tt)(s.text, yQn);
  return o.length === 1 ? p : `${p} +${o.length - 1} more`;
}
function c4s(t) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return false;
  return [...t.values()].some((n) => i(n) === 0);
}
function i(t) {
  return t.late ? 2 : t.startedAt === void 0 ? 1 : 0;
}
