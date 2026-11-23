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
var chunk_75ftbgzx_exports = {};
__export(chunk_75ftbgzx_exports, {
  AJ: () => AJ,
  D$o: () => D$o,
  H$o: () => H$o,
  JWs: () => JWs,
  PBr: () => PBr,
  SIe: () => SIe,
  V5t: () => V5t,
  Vce: () => Vce,
  XWs: () => XWs,
  Xz: () => Xz,
  YWs: () => YWs,
  nwn: () => nwn,
  own: () => own,
  rwn: () => rwn,
  twn: () => twn,
  z5t: () => z5t
});
module.exports = __toCommonJS(chunk_75ftbgzx_exports);
var import_chunk_7r4ehpnw = require("/$bunfs/root/chunk-7r4ehpnw.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_k67pwqya = require("/$bunfs/root/chunk-k67pwqya.js");
var import_chunk_qrpds8jv = require("/$bunfs/root/chunk-qrpds8jv.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_cy0ck7w2 = require("/$bunfs/root/chunk-cy0ck7w2.js");
var import_chunk_8c111j67 = require("/$bunfs/root/chunk-8c111j67.js");
var import_chunk_fdqz9r50 = require("/$bunfs/root/chunk-fdqz9r50.js");
var import_chunk_74h6kcya = require("/$bunfs/root/chunk-74h6kcya.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_8ym8b8h9 = require("/$bunfs/root/chunk-8ym8b8h9.js");
var import_chunk_d6e25tyr = require("/$bunfs/root/chunk-d6e25tyr.js");
var import_chunk_bs4h6795 = require("/$bunfs/root/chunk-bs4h6795.js");
var import_chunk_z6hn62tj = require("/$bunfs/root/chunk-z6hn62tj.js");
(0, import_chunk_bs4h6795.G)();
function AJ() {
  return (0, import_chunk_8ym8b8h9._h)() && (0, import_chunk_8c111j67.Mf)();
}
function Vce() {
  return (0, import_chunk_fdqz9r50._m)(AJ);
}
function PBr() {
  return !(0, import_chunk_f9x2f6cx.Se)();
}
function z5t(e, t) {
  if (!e) return null;
  let r = (0, import_chunk_865at33z.Y_)(e) ?? (0, import_chunk_865at33z.Mm)(e), n = H$o(t);
  return n !== void 0 ? `${r} (${n})` : r;
}
function H$o(e) {
  if (e === void 0) return;
  if (typeof e === "number") return;
  return (0, import_chunk_k67pwqya.CN)(e);
}
function Xz(e) {
  return e === "completed" || e === "failed" || e === "killed";
}
function YWs(e) {
  if (e === "running") return import_chunk_xcgcdx61.Fc;
  if (e === "completed") return import_chunk_7r4ehpnw.xe.tick;
  if (e === "failed" || e === "killed") return import_chunk_7r4ehpnw.xe.cross;
  if (e === "paused") return import_chunk_xcgcdx61.HJe;
  return import_chunk_7r4ehpnw.xe.circle;
}
function twn(e) {
  if (e === "completed") return "success";
  if (e === "failed") return "error";
  if (e === "killed") return "warning";
  if (e === "paused") return "warning";
  return "background";
}
function nwn(e) {
  if (!(0, import_chunk_4yjj7pjs.lw)(e) || (0, import_chunk_z6hn62tj.Kf)(e)) return false;
  if (e.status === "running" || e.status === "pending") return e.isBackgrounded === false;
  return (0, import_chunk_bzyb60p0.GY)(e);
}
function rwn(e, t, r) {
  let n = e.agentId === void 0 ? void 0 : t[String(e.agentId)];
  if (!(0, import_chunk_4yjj7pjs.lw)(n)) return;
  let o = [...r].find(([, a]) => a === n.id)?.[0];
  return (0, import_chunk_cy0ck7w2.Vi)(o === void 0 ? `${n.agentType} subagent` : `@${o}`);
}
function D$o(e) {
  return (0, import_chunk_z6hn62tj.uy)(e) && !(0, import_chunk_z6hn62tj.u8e)(e) && !(0, import_chunk_z6hn62tj.dre)(e) && !(0, import_chunk_z6hn62tj.Kf)(e);
}
function SIe(e) {
  if ((0, import_chunk_z6hn62tj.u8e)(e)) return false;
  if (AJ()) return (0, import_chunk_z6hn62tj.uy)(e) || nwn(e);
  return (0, import_chunk_z6hn62tj.uy)(e) && e.type !== "local_workflow" && !(PBr() && ((0, import_chunk_4yjj7pjs.lw)(e) || e.type === "in_process_teammate"));
}
function s({ tasks: e, remoteBackgroundTasks: t }, r) {
  let n = Object.values(e), o = n.filter(SIe), a = V5t(t);
  return o.some(f) || a.length === 0 && o.every(import_chunk_6d4w1614.G_e) ? [o, a, 0] : [n.filter((i) => SIe(i) || D$o(i)), a, r];
}
function f(e) {
  return e.type === "mcp_task" ? e.openQuestion !== void 0 : (0, import_chunk_d6e25tyr.ker)([e]);
}
function own() {
  (0, import_chunk_fdqz9r50.Jz)();
  let e = u();
  return (0, import_chunk_74h6kcya.X)((t) => {
    let [r, n, o] = s(t, e);
    return r.length + n.length + o;
  });
}
function XWs() {
  (0, import_chunk_fdqz9r50.Jz)();
  let e = u();
  return (0, import_chunk_74h6kcya.X)((t) => (0, import_chunk_d6e25tyr.Ght)(...s(t, e)));
}
function u() {
  return (0, import_chunk_bs4h6795.Ot)(import_chunk_f9x2f6cx.bpt, () => (0, import_chunk_f9x2f6cx.eu)().length);
}
function l() {
  return !AJ() && (0, import_chunk_qrpds8jv.t_)();
}
function JWs() {
  return (0, import_chunk_fdqz9r50.Jz)(), (0, import_chunk_74h6kcya.X)((e) => (e.remoteBackgroundTasks.length > 0 || e.remoteWorkflowRuns.length > 0) && l());
}
function V5t(e) {
  if (e.length === 0) return [];
  let t = l();
  return e.filter((r) => !r.ambient && r.taskType !== "in_process_teammate" && !(r.taskType === "local_workflow" && t));
}
