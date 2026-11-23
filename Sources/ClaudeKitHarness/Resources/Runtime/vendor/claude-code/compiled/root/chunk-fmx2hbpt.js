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
var chunk_fmx2hbpt_exports = {};
__export(chunk_fmx2hbpt_exports, {
  JIt: () => JIt,
  JSa: () => JSa,
  LJ: () => LJ,
  Ljr: () => Ljr,
  SXn: () => SXn,
  Tkn: () => Tkn,
  XSa: () => XSa,
  YSa: () => YSa,
  azs: () => azs,
  bXn: () => bXn,
  c$e: () => c$e,
  czs: () => czs,
  dzs: () => dzs,
  lzs: () => lzs,
  qSa: () => qSa,
  r8t: () => r8t,
  yXn: () => yXn
});
module.exports = __toCommonJS(chunk_fmx2hbpt_exports);
var import_chunk_d0bewyh8 = require("/$bunfs/root/chunk-d0bewyh8.js");
var import_chunk_sr33d2zd = require("/$bunfs/root/chunk-sr33d2zd.js");
var import_chunk_mgh1y10w = require("/$bunfs/root/chunk-mgh1y10w.js");
var import_chunk_f64qna2j = require("/$bunfs/root/chunk-f64qna2j.js");
var import_chunk_em52jhgp = require("/$bunfs/root/chunk-em52jhgp.js");
var qSa = 3e4, LJ = "bridge-failed", r8t = "disabled after repeated failures \xB7 restart to retry", azs = "Remote Control not started here";
function YSa(e, { crossSessionMessaging: t }, r = /* @__PURE__ */ new Date()) {
  let n = e.startedAt > 0 && e.startedAt <= r.getTime() ? ` (started ${(0, import_chunk_f64qna2j.Ty)(new Date(e.startedAt), { now: r })})` : "";
  return `${azs} \xB7 another Claude Code on this machine${n} already has Remote Control for this conversation${t ? ", so this terminal can't see your sessions on other machines and they can't reach it" : ""} \xB7 run /remote-control to move it to this terminal`;
}
var lzs = 150;
function JIt() {
  let e = /* @__PURE__ */ new Date(), t = String(e.getHours()).padStart(2, "0"), r = String(e.getMinutes()).padStart(2, "0"), n = String(e.getSeconds()).padStart(2, "0");
  return `${t}:${r}:${n}`;
}
function Ljr(e, t) {
  return `${(0, import_chunk_d0bewyh8.zQ)(void 0, t)}/code?environment=${e}`;
}
function dzs(e, t) {
  let r = t + 20;
  return t + 10 - e % r;
}
function Tkn(e, t) {
  let r = (0, import_chunk_mgh1y10w.oe)(e), n = t - 1, i = t + 1;
  if (n >= r || i < 0) return { before: e, shimmer: "", after: "" };
  let g = Math.max(0, n), s = 0, c = "", a = "", u = "";
  for (let { segment: o } of (0, import_chunk_em52jhgp.ul)().segment(e)) {
    let l = (0, import_chunk_mgh1y10w.oe)(o);
    if (s + l <= g) c += o;
    else if (s > i) u += o;
    else a += o;
    s += l;
  }
  return { before: c, shimmer: a, after: u };
}
var m = { label: "/rc failed", color: "error" }, d = { label: "/rc reconnecting", color: "warning" }, f = { label: "/rc active", color: "success" }, p = { label: "/rc connecting\u2026", color: "warning" };
function c$e({ error: e, connected: t, sessionActive: r, reconnecting: n }) {
  if (e) return m;
  if (n) return d;
  if (r || t) return f;
  return p;
}
function yXn(e) {
  return `Code anywhere with the Claude mobile app or ${e}`;
}
var XSa = "Or ask Claude to work in this folder from your projects on claude.ai";
function SXn(e) {
  return `Continue coding in the Claude mobile app or ${e}`;
}
var czs = "Run /remote-control to retry";
function bXn(e) {
  return e === import_chunk_sr33d2zd.pjn || e === import_chunk_sr33d2zd.qvt || e === import_chunk_sr33d2zd.PLe || e?.includes("/login") === true || e?.includes("/remote-control") === true || e?.includes("restart") === true || e?.includes("policy") === true || e?.includes("update") === true;
}
function JSa(e, t) {
  return `\x1B]8;;${t}\x07${e}\x1B]8;;\x07`;
}
