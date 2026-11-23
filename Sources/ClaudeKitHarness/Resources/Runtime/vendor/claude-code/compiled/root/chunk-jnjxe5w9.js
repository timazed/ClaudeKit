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
var chunk_jnjxe5w9_exports = {};
__export(chunk_jnjxe5w9_exports, {
  Ejr: () => Ejr,
  K9t: () => K9t,
  lWo: () => lWo,
  yKe: () => yKe,
  ykn: () => ykn
});
module.exports = __toCommonJS(chunk_jnjxe5w9_exports);
var import_chunk_sng02qpc = require("/$bunfs/root/chunk-sng02qpc.js");
var import_chunk_a46xeenj = require("/$bunfs/root/chunk-a46xeenj.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
var c = 10, a = { ring: [], mode: { type: "idle" } };
function h(n, i) {
  switch (i.type) {
    case "kill": {
      if (i.text.length === 0) return n.mode.type === "idle" ? n : { ...n, mode: { type: "idle" } };
      return { ring: n.mode.type === "killing" && n.ring.length > 0 ? [i.direction === "prepend" ? i.text + n.ring[0] : n.ring[0] + i.text, ...n.ring.slice(1)] : [i.text, ...n.ring].slice(0, c), mode: { type: "killing" } };
    }
    case "yank":
      return { ...n, mode: { type: "yanked", start: i.start, length: i.length, index: 0 } };
    case "yankPop": {
      if (n.mode.type !== "yanked" || n.ring.length <= 1) return n;
      let r = (n.mode.index + 1) % n.ring.length;
      return { ...n, mode: { ...n.mode, index: r } };
    }
    case "updateYankLength":
      if (n.mode.type !== "yanked") return n;
      return { ...n, mode: { ...n.mode, length: i.length } };
    case "interrupt":
      if (n.mode.type === "idle") return n;
      return { ...n, mode: { type: "idle" } };
  }
}
function K9t(n) {
  return n.ring[0] ?? "";
}
function Ejr(n) {
  if (n.mode.type !== "yanked" || n.ring.length <= 1) return null;
  let i = (n.mode.index + 1) % n.ring.length, { start: r, length: t } = n.mode;
  return { text: n.ring[i] ?? "", start: r, length: t };
}
function lWo() {
  let n = a;
  return { get state() {
    return n;
  }, dispatch(i) {
    n = h(n, i);
  } };
}
var l = (0, import_chunk_bs4h6795.an)(null);
function ykn(n) {
  let t = (0, import_chunk_sng02qpc.k)(5), { handle: i, children: r } = n, p;
  if (t[0] !== i) p = () => i ?? lWo(), t[0] = i, t[1] = p;
  else p = t[1];
  let [x] = (0, import_chunk_bs4h6795.y)(p);
  const d = i ?? x;
  let u;
  if (t[2] !== r || t[3] !== d) u = (0, import_chunk_a46xeenj.e)(l.Provider, { value: d, children: r }), t[2] = r, t[3] = d, t[4] = u;
  else u = t[4];
  return u;
}
function yKe() {
  let n = (0, import_chunk_bs4h6795.be)(l);
  if (!n) {
    throw ReferenceError("useKillRing cannot be called outside of a <KillRingProvider /> (mounted around every Ink root by src/ink.ts)");
  }
  return n;
}
