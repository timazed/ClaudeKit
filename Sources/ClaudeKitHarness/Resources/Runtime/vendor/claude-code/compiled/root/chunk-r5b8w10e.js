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
var chunk_r5b8w10e_exports = {};
__export(chunk_r5b8w10e_exports, {
  IGo: () => IGo,
  Jzr: () => Jzr,
  cYl: () => cYl,
  dYl: () => dYl
});
module.exports = __toCommonJS(chunk_r5b8w10e_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_h4t4qfaq = require("/$bunfs/root/chunk-h4t4qfaq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_qf73a9we = require("/$bunfs/root/chunk-qf73a9we.js");
var import_chunk_w50zedgp = require("/$bunfs/root/chunk-w50zedgp.js");
var import_chunk_vce2t55r = require("/$bunfs/root/chunk-vce2t55r.js");
var import_chunk_bxw3frzq = require("/$bunfs/root/chunk-bxw3frzq.js");
var import_chunk_771npqpr = require("/$bunfs/root/chunk-771npqpr.js");
var import_chunk_ncwex88j = require("/$bunfs/root/chunk-ncwex88j.js");
var import_chunk_5412tm8t = require("/$bunfs/root/chunk-5412tm8t.js");
var import_chunk_yaw6xb6n = require("/$bunfs/root/chunk-yaw6xb6n.js");
var import_chunk_3e58nsa7 = require("/$bunfs/root/chunk-3e58nsa7.js");
var import_chunk_k34ja5gf = require("/$bunfs/root/chunk-k34ja5gf.js");
var import_chunk_n1bj1qv8 = require("/$bunfs/root/chunk-n1bj1qv8.js");
var E = /artifact\w*\s*\(|\/artifacts?\/[0-9a-z]{8}|artifact-[0-9a-f]{8}-/i;
function IGo(o) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return "";
  return `eval #${o} never settled: the process that was running it exited. Its result is lost and the script is no longer running; a command it had started may have run on.`;
}
function y(o) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return "";
  return `eval #${o} never reported back: your earlier run ended or was stopped, or Claude Code exited, before its result reached you. Its result is lost and the script is no longer running. A command the script had started may still have run to completion.`;
}
function c(o, r) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return [];
  let l = Array.isArray(r) && r.length === o.length ? r : [], s = [];
  for (let [a, e] of o.entries()) {
    let i = l[a] == null ? void 0 : (0, import_chunk_bxw3frzq.IDt)(e, l[a]);
    if (i !== void 0) {
      s.push(i.evalId);
      continue;
    }
    for (let n of (0, import_chunk_bxw3frzq.cNa)(e)) s.push(n.evalId);
  }
  return s;
}
function h(o) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return "";
  if (o === null || typeof o !== "object") return "";
  let r = o, l = "content" in r ? r.content : void 0;
  return typeof l === "string" && (0, import_chunk_qf73a9we.uln)(l) ? l : "";
}
function A(o) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return [];
  let r = h(o), l = r !== "" && typeof o === "object" && o !== null && "declared" in o ? o.declared : void 0, s = Array.isArray(l) ? (0, import_chunk_qf73a9we.EWt)(r) : void 0;
  return s === void 0 ? c([r], void 0) : c(s, l);
}
function Jzr(o) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return [];
  let r = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set(), s = [], a = (e) => {
    let i = s.findLastIndex((n) => n.evalId === e);
    if (i !== -1) s.splice(i, 1);
  };
  for (let e of o) {
    if (e.type === "attachment") {
      if (e.attachment.type === "poll_events") c(e.attachment.envelopes, e.attachment.declared).forEach(a);
      continue;
    }
    if (e.type === "assistant" && !e.isVirtual) {
      for (let n of e.message.content) {
        if (n.type !== "tool_use") continue;
        if ((0, import_chunk_h4t4qfaq.li)(n.name)) r.set(n.id, n.input);
        else if (n.name === import_chunk_3grsnd7a.Vo) l.add(n.id);
      }
      continue;
    }
    if (e.type !== "user" || e.isVirtual) continue;
    let i = e.message.content;
    if (!Array.isArray(i)) continue;
    for (let n of i) {
      if (n.type !== "tool_result") continue;
      if (l.has(n.tool_use_id)) A(e.toolUseResult).forEach(a);
      else if (r.has(n.tool_use_id)) {
        let u = (0, import_chunk_771npqpr.iQs)(e.toolUseResult);
        if (u !== void 0) s.push({ toolUseId: n.tool_use_id, evalId: u, recordedAt: e.timestamp, ...E.test((0, import_chunk_w578pjby._)(r.get(n.tool_use_id)) ?? "") && { namesAnArtifact: true } });
      }
    }
  }
  return s;
}
function dYl(o, { startsTurn: r = true } = {}) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  let l = r && !(0, import_chunk_w50zedgp.Ng)(), s = Jzr(o).filter((e) => Date.parse(e.recordedAt) < performance.timeOrigin);
  if (s.length === 0) return;
  let a = !l && (0, import_chunk_w50zedgp.Hy)();
  if (!(0, import_chunk_qf73a9we.Mx)() && !a) {
    (0, import_chunk_w578pjby.t)(`resume: ${s.length} async REPL eval(s) never settled, and poll-event delivery is off, so no lost event is queued`, { level: "warn" });
    return;
  }
  (0, import_chunk_w578pjby.t)(`resume: ${s.length} async REPL eval(s) never settled (${s.map((e) => `#${e.evalId}`).join(", ")}); answering each with a lost event`), v(s, { text: IGo, rowText: "Lost: Claude Code exited before this finished", startsTurn: l });
}
function cYl(o, r, l) {
  if (!(0, import_chunk_r3kja8v6.ue)() || !(0, import_chunk_qf73a9we.Mx)()) return;
  let s = l.get(import_chunk_yaw6xb6n.Lbe), a = new Set((0, import_chunk_bzyb60p0.YHe)().filter((i) => (0, import_chunk_qf73a9we.N8e)(i, r)).flatMap((i) => i.pollEvent === void 0 ? [] : c([i.pollEvent.envelope], i.pollEvent.declared === void 0 ? void 0 : [{ kind: i.pollEvent.kind, ...i.pollEvent.declared }]))), e = Jzr(o).filter(({ evalId: i }) => !s.tracks(r, i) && !a.has(i));
  if (e.length === 0) return;
  (0, import_chunk_w578pjby.t)(`subagent resume: ${e.length} async REPL eval(s) never settled; answering each with a lost event`), v(e, { text: y, rowText: "Lost: the result never reached the agent", agentId: r });
}
function v(o, { text: r, rowText: l, agentId: s, startsTurn: a = true }) {
  if (!(0, import_chunk_r3kja8v6.ue)()) return;
  let e = (0, import_chunk_ncwex88j.bue)(), i = (0, import_chunk_f9x2f6cx.en)().names().some((n) => n === import_chunk_f9x2f6cx.p_ || /artifact/i.test(n));
  for (let { evalId: n, namesAnArtifact: u } of o) {
    let f = (0, import_chunk_k34ja5gf.cvn)(i || u ? [import_chunk_k449cc64.lu] : []), g = (0, import_chunk_3e58nsa7.Ute)() && f.length === 0, p = (/* @__PURE__ */ new Date()).toISOString();
    (0, import_chunk_bzyb60p0.j3e)({ kind: import_chunk_qf73a9we.kE, ...g ? { typed: { at: p, fields: { eval: n, status: import_chunk_vce2t55r.nEt, text: r(n) } } } : { element: (0, import_chunk_qf73a9we.pZ)({ kind: import_chunk_qf73a9we.kE, at: p, ...f.length > 0 ? { content: "", children: [...f, { tag: "log", text: r(n) }] } : { content: r(n) }, attributes: { eval: String(n), status: import_chunk_vce2t55r.nEt } }) }, ...s !== void 0 && { agentId: s }, ...!a && { startsTurn: a }, allowReservedKind: true, ...e ? { displayRows: (0, import_chunk_n1bj1qv8.uvn)(l, { clientsDrawCalls: true, shownOnCall: true }) } : { keepsRow: true } }).catch((m) => {
      (0, import_chunk_w578pjby.t)(`async REPL lost event for eval #${n} not queued: ${(0, import_chunk_5412tm8t.uj)(m) ? m.message : "non-Error rejection"}`, { level: "warn" });
    });
  }
}
