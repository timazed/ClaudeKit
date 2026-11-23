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
var chunk_hsqa3g9e_exports = {};
__export(chunk_hsqa3g9e_exports, {
  $Ui: () => $Ui,
  $g: () => $g,
  BUi: () => BUi,
  Bjt: () => Bjt,
  Dy: () => Dy,
  FUi: () => FUi,
  Hre: () => Hre,
  JEr: () => JEr,
  SYe: () => SYe,
  UUi: () => UUi,
  Ujt: () => Ujt,
  WUi: () => WUi,
  bYe: () => bYe,
  bh: () => bh,
  ivt: () => ivt,
  mbs: () => mbs,
  ume: () => ume,
  wh: () => wh
});
module.exports = __toCommonJS(chunk_hsqa3g9e_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_hkvzj051 = require("/$bunfs/root/chunk-hkvzj051.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_q3a5dy2r = require("/$bunfs/root/chunk-q3a5dy2r.js");
var import_chunk_hnt4bwpe = require("/$bunfs/root/chunk-hnt4bwpe.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_m15w38ag = require("/$bunfs/root/chunk-m15w38ag.js");
var import_promises = require("fs/promises");
var import_path = require("path");
function bh() {
  return (0, import_path.join)((0, import_chunk_2gtmjt3y.Ze)(), "projects");
}
function ume(t) {
  return (0, import_path.dirname)(t) === bh() ? (0, import_path.basename)(t) : void 0;
}
function JEr(t) {
  if (typeof t === "string") return ume(t);
  let { scope: e } = t;
  return e.namespace === "transcript" && e.sessionId === void 0 ? e.projectKey : void 0;
}
class g {
  projectDirCache = /* @__PURE__ */ new Map();
  agentTranscriptSubdirs = /* @__PURE__ */ new Map();
  formerProjectDirs = /* @__PURE__ */ new Set();
  cacheProjectDir(t, e) {
    this.projectDirCache.set(t, e);
  }
  clearProjectDirCache() {
    this.projectDirCache.clear();
  }
  setAgentTranscriptSubdir(t, e) {
    this.agentTranscriptSubdirs.set(t, e);
  }
  clearAgentTranscriptSubdir(t) {
    this.agentTranscriptSubdirs.delete(t);
  }
}
var c = new import_chunk_2904xtvq.j(() => new g());
function Dy(t) {
  let e = c.of((0, import_chunk_f9x2f6cx.N)().host), n = e.projectDirCache.get(t);
  if (n !== void 0) return n;
  let r = (0, import_path.join)(bh(), (0, import_chunk_q3a5dy2r.sO)(t));
  return e.cacheProjectDir(t, r), r;
}
function SYe() {
  let t = (0, import_chunk_f9x2f6cx.ns)();
  if (t !== null) return Dy(t);
  return (0, import_chunk_q3a5dy2r.BAt)() ?? Dy((0, import_chunk_f9x2f6cx.Te)());
}
function Hre() {
  return (0, import_chunk_f9x2f6cx._se)() ?? SYe();
}
function FUi(t) {
  c.of((0, import_chunk_f9x2f6cx.N)().host).formerProjectDirs.add(t);
}
function $Ui(t) {
  let e = (0, import_chunk_f9x2f6cx.W)();
  if (!(0, import_chunk_mzmcvr6c.ZB)(e)) return t;
  let n = (0, import_path.normalize)(t), { formerProjectDirs: r } = c.of((0, import_chunk_f9x2f6cx.N)().host);
  for (let i of r) {
    let o = (0, import_path.join)(i, e) + import_path.sep;
    if (i !== SYe() && n.startsWith(o)) return (0, import_path.join)(Hre(), e, n.slice(o.length));
  }
  return t;
}
function wh() {
  return (0, import_path.join)(Hre(), `${(0, import_chunk_f9x2f6cx.W)()}.jsonl`);
}
function UUi() {
  return Hre();
}
function BUi(t, e) {
  c.of((0, import_chunk_f9x2f6cx.N)().host).setAgentTranscriptSubdir(t, e);
}
function mbs(t) {
  c.of((0, import_chunk_f9x2f6cx.N)().host).clearAgentTranscriptSubdir(t);
}
function Ujt() {
  return (0, import_path.join)(Hre(), (0, import_chunk_f9x2f6cx.W)(), "subagents");
}
function ivt(t) {
  return $g(t);
}
function $g(t) {
  let e = c.of((0, import_chunk_f9x2f6cx.N)().host).agentTranscriptSubdirs.get(t), n = e ? (0, import_path.join)(Ujt(), e) : Ujt();
  return (0, import_path.join)(n, `agent-${t}.jsonl`);
}
function Bjt(t) {
  return (0, import_chunk_mzmcvr6c.DD)(t) ? $g((0, import_chunk_mzmcvr6c.ro)(t)) : void 0;
}
async function bYe(t) {
  let e = ume(Hre());
  if ((0, import_chunk_m15w38ag.ne)() && t !== void 0 && e !== void 0) return l(t, e, (0, import_chunk_f9x2f6cx.W)());
  if ((0, import_chunk_f9x2f6cx.Y)()) return [];
  let n;
  try {
    n = await (0, import_promises.readdir)(Ujt(), { withFileTypes: true });
  } catch {
    return [];
  }
  return n.filter((r) => r.isFile() && r.name.startsWith("agent-") && r.name.endsWith(".jsonl")).map((r) => r.name.slice(6, -6));
}
async function l(t, e, n) {
  let r = [];
  try {
    return (await (0, import_chunk_hnt4bwpe.Nd)((o) => t.listEntries({ namespace: "transcript", projectKey: e, sessionId: n }, { skipKeyStats: true, skipScopeStats: true, ...o !== void 0 && { cursor: o } }), (o) => {
      for (let a of o) if (a.kind === "key" && a.key.namespace === "transcript" && a.key.agentId !== void 0 && a.key.agentRelPath === void 0 && (0, import_chunk_hkvzj051.Ao)(a.key.agentId)) r.push(a.key.agentId);
    })).status === "done" ? r : [];
  } catch {
    return [];
  }
}
function WUi(t, e) {
  let n = {};
  for (let r of Object.values(t)) {
    let i = e[r.id]?.messages;
    if (r.type === "in_process_teammate" && r.identity?.agentId && i && i.length > 0) n[r.identity.agentId] = i;
  }
  return n;
}
