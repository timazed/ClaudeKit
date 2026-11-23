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
var chunk_nbyg4q5d_exports = {};
__export(chunk_nbyg4q5d_exports, {
  B_: () => B_,
  E0n: () => E0n,
  Qls: () => Qls,
  kR: () => kR,
  s0: () => s0,
  zv: () => zv
});
module.exports = __toCommonJS(chunk_nbyg4q5d_exports);
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_fp3vnecp = require("/$bunfs/root/chunk-fp3vnecp.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_path = require("path");
var import_path2 = require("path");
function g(e) {
  let n = process.cwd();
  return n.endsWith(import_path2.sep) ? n + e : n + import_path2.sep + e;
}
function E0n(e) {
  return (n) => e.hostFiles.realPath(import_chunk_w578pjby.yS.workspace(n === "" || (0, import_path2.isAbsolute)(n) ? n : g(n)), { native: true });
}
function kR(e) {
  return e === void 0 ? void 0 : { hoverRestOn: (0, import_chunk_m15w38ag.ne)(), realPath: E0n(e) };
}
function m(e) {
  return e.namespace !== "transcript" || e.journal !== void 0 || e.sessionJournal !== void 0 ? void 0 : e.agentId ?? null;
}
function B_(e, n) {
  if (!(0, import_chunk_m15w38ag.ne)() || n === void 0) return;
  if (typeof e !== "string") return m(e.key) === null ? { backend: n, key: e.key } : void 0;
  if (!e.endsWith(".jsonl")) return;
  let t = (0, import_path.dirname)(e);
  if ((0, import_path.dirname)(t) !== (0, import_chunk_q3a5dy2r.Em)()) return;
  let r = (0, import_path.basename)(t), o = (0, import_path.basename)(e, ".jsonl");
  if (e !== (0, import_path.join)((0, import_chunk_q3a5dy2r.Em)(), r, `${o}.jsonl`)) return;
  let d = import_chunk_hkvzj051.at.transcript(r, o);
  return (0, import_chunk_fp3vnecp.db)(d) === void 0 ? { backend: n, key: d } : void 0;
}
function Qls(e, n) {
  if (!(0, import_chunk_m15w38ag.ne)() || n === void 0) return;
  if (typeof e !== "string") return typeof m(e.key) === "string" ? { backend: n, key: e.key } : void 0;
  let t = (0, import_path.relative)((0, import_chunk_q3a5dy2r.Em)(), e);
  if (t === "" || t === ".." || t.startsWith(`..${import_path.sep}`) || (0, import_path.isAbsolute)(t)) return;
  let r = t.split(import_path.sep);
  if (e !== (0, import_path.join)((0, import_chunk_q3a5dy2r.Em)(), ...r)) return;
  let o = r.at(-1);
  if (r.length < 4 || r[2] !== "subagents" || o === void 0 || !o.startsWith("agent-") || !o.endsWith(".jsonl")) return;
  let d = o.slice(6, -6), i = r.slice(3, -1);
  if (!(0, import_chunk_hkvzj051.HM)([r[0], r[1], d]) || i.length > 0 && !(0, import_chunk_hkvzj051.HM)(i)) return;
  let s = import_chunk_hkvzj051.at.transcript(r[0], r[1], d, i.length > 0 ? i : void 0);
  return (0, import_chunk_fp3vnecp.db)(s) === void 0 ? { backend: n, key: s } : void 0;
}
function s0(e) {
  if (!(0, import_chunk_m15w38ag.ne)() || e === void 0) return;
  return { backend: e, transcriptKey: import_chunk_hkvzj051.at.transcript, isKeySegment: import_chunk_hkvzj051.Ao, realWorkspacePath: E0n(e) };
}
function zv(e) {
  return e === void 0 ? void 0 : { source: e, hoverRestOn: (0, import_chunk_m15w38ag.ne)() };
}
