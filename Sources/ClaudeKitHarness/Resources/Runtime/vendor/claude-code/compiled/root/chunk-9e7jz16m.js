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
var chunk_9e7jz16m_exports = {};
__export(chunk_9e7jz16m_exports, {
  EZe: () => EZe
});
module.exports = __toCommonJS(chunk_9e7jz16m_exports);
var import_chunk_k59mf0h7 = require("/$bunfs/root/chunk-k59mf0h7.js");
var import_chunk_8bkqeb5d = require("/$bunfs/root/chunk-8bkqeb5d.js");
var import_chunk_2t5dst6n = require("/$bunfs/root/chunk-2t5dst6n.js");
var import_chunk_z8dyhx9v = require("/$bunfs/root/chunk-z8dyhx9v.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_vs99e3g5 = require("/$bunfs/root/chunk-vs99e3g5.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
(0, import_chunk_bs4h6795.G)();
(0, import_chunk_bs4h6795.G)();
function h() {
  let [o] = (0, import_chunk_bs4h6795.y)(() => (0, import_chunk_k59mf0h7.Lvt)() ? import_chunk_2t5dst6n.HF : import_chunk_2t5dst6n._s);
  return o;
}
function EZe(o, { selfOpened: u, hasOpeningGrace: r = u, onCancelled: S, owedAtExit: b }) {
  let [C, s] = (0, import_chunk_bs4h6795.y)(false), n = (0, import_chunk_bs4h6795.I)(false), [c, R] = (0, import_chunk_bs4h6795.y)(false), e = (0, import_chunk_bs4h6795.I)(false), i = h(), E = (0, import_chunk_8bkqeb5d.oo)(r ? i : null), d = !r || E, x = (0, import_chunk_8bkqeb5d.Xe)() ? true : false, A = (0, import_chunk_z8dyhx9v.Ns)(i), { refusedWithin: g, noteRefused: v } = (0, import_chunk_z8dyhx9v.po)();
  function w() {
    if (r && (A() || g(i))) return v(), true;
    return false;
  }
  let a = (0, import_chunk_vs99e3g5.$l)(() => {
    if (e.current) return;
    let t = n.current;
    n.current = true;
    let l = S(t);
    if (l === void 0) {
      e.current = true;
      let p = b?.(t);
      if (p === void 0) {
        (0, import_chunk_bzyb60p0.Da)(1);
        return;
      }
      p.then((m) => (0, import_chunk_bzyb60p0.Yr)(1, "other", m === void 0 ? void 0 : { finalMessage: m }), () => (0, import_chunk_bzyb60p0.Yr)(1));
      return;
    }
    s(true), f(l);
  }, void 0, u && !c);
  function _() {
    if (n.current || !d) return false;
    return n.current = true, s(true), true;
  }
  function f(t) {
    if (e.current) return;
    e.current = true, R(true), o(t);
  }
  return { choicesDisabled: !d && !x, decided: C, take: _, refuseInput: w, settled: () => e.current, handBack: f, exit: a, exitHintShowing: a.pending && !c };
}
