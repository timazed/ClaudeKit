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
var chunk_ndx89hd3_exports = {};
__export(chunk_ndx89hd3_exports, {
  Lxa: () => Lxa,
  MYt: () => MYt,
  NVr: () => NVr,
  tMe: () => tMe
});
module.exports = __toCommonJS(chunk_ndx89hd3_exports);
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
function tMe(e, n) {
  let a;
  for (let s of Object.values(n)) if ((0, import_chunk_z6hn62tj.Xm)(s) && s.identity.agentId === e) {
    if (s.status === "running") return s;
    if (!a) a = s;
  }
  return a;
}
function NVr(e, n) {
  let a = tMe(e, n);
  if (a) return { status: "found", task: a };
  let s = Object.values(n).filter(import_chunk_z6hn62tj.Xm).filter((t) => t.identity.resumableAgentId === e), o = s.find((t) => t.status === "running") ?? s[0];
  if (o) return { status: "found", task: o };
  let i = /* @__PURE__ */ new Map();
  for (let t of Object.values(n)) {
    if (!(0, import_chunk_z6hn62tj.Xm)(t) || t.identity.agentName !== e) continue;
    let d = i.get(t.identity.agentId);
    if (!d || d.status !== "running" && t.status === "running") i.set(t.identity.agentId, t);
  }
  let u = [...i.values()], m = u.filter((t) => t.status === "running"), r = m.length > 0 ? m : u;
  if (r.length === 1) return { status: "found", task: r[0] };
  if (r.length > 1) return { status: "ambiguous", candidates: r.map((t) => t.identity.agentId), anyLive: r.some((t) => !(0, import_chunk_ed372ykp.$o)(t.status)) };
  return { status: "not_found" };
}
function Lxa(e) {
  return MYt(e).filter((n) => n.status === "running").map((n) => n.identity.agentId);
}
function MYt(e) {
  return Object.values(e).filter(import_chunk_z6hn62tj.Xm);
}
