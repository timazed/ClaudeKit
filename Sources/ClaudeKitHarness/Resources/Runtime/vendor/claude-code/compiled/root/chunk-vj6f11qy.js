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
var chunk_vj6f11qy_exports = {};
__export(chunk_vj6f11qy_exports, {
  KTa: () => KTa,
  OMt: () => OMt,
  VEn: () => VEn,
  YTa: () => YTa,
  bqs: () => bqs,
  qTa: () => qTa,
  tQn: () => tQn
});
module.exports = __toCommonJS(chunk_vj6f11qy_exports);
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_060xwhvh = require("/$bunfs/root/chunk-060xwhvh.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_0dht3xy7 = require("/$bunfs/root/chunk-0dht3xy7.js");
var import_chunk_mahb4v28 = require("/$bunfs/root/chunk-mahb4v28.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var Y = "Updated task #", OMt = 1e6;
function tQn(a) {
  let r = Number(a);
  return /^\d+$/.test(a) && r <= OMt ? r : void 0;
}
var z = (a, r) => (0, import_chunk_ma3kja9f.T)(a) ? a[r] : void 0, V = (a) => (a.name === import_chunk_mahb4v28.Gp ? (0, import_chunk_bzyb60p0.GPn)(a.input) : (0, import_chunk_bzyb60p0.PZt)(a.input))?.input ?? a.input, W = (a) => {
  let r = (L) => {
    let m = z(a, L);
    return typeof m === "string" ? m : void 0;
  }, o = (L) => {
    let m = z(a, L);
    return Array.isArray(m) ? m.filter((k) => typeof k === "string") : void 0;
  }, f = z(a, "metadata");
  return { subject: r("subject"), description: r("description"), activeForm: r("activeForm"), status: r("status"), owner: r("owner"), metadata: (0, import_chunk_ma3kja9f.T)(f) ? f : void 0, addBlocks: o("addBlocks"), addBlockedBy: o("addBlockedBy") };
}, K = (a) => typeof a.content === "string" ? a.content : Array.isArray(a.content) ? (0, import_chunk_bzyb60p0.Go)(a.content) : "", bqs = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ name: (0, import_chunk_adx6804h.F)([import_chunk_mahb4v28.Gp, import_chunk_mahb4v28.$m]), input: (0, import_chunk_adx6804h.ie)(), result: (0, import_chunk_adx6804h.n)() })));
function H() {
  return (0, import_chunk_865at33z.b)("tengu_bright_kettle", import_chunk_c203g5kd.s.CLAUDE_CODE_ENTRYPOINT === "local-agent" && import_chunk_c203g5kd.s.CLAUDE_CODE_IS_COWORK);
}
var X = 16384;
function KTa(a) {
  if (!H()) return;
  let r = Array.from(VEn(a), (o) => ({ name: o.kind === "create" ? import_chunk_mahb4v28.Gp : import_chunk_mahb4v28.$m, input: o.use.input, result: K(o.result) }));
  if (r.length === 0) return;
  if (Buffer.byteLength((0, import_chunk_w578pjby._)(r)) > X) {
    (0, import_chunk_cqa9hrgx.l)("task_list_subagent_calls", "over_size_limit");
    return;
  }
  return (0, import_chunk_cqa9hrgx.u)("task_list_subagent_calls"), r;
}
function* VEn(a, r = () => false) {
  let o = /* @__PURE__ */ new Map(), f = H(), L = /* @__PURE__ */ new Map();
  for (let [m, k] of a.entries()) if (k.type === "assistant") {
    let y = k.message.id ?? k.uuid ?? `row ${m}`;
    for (let i of k.message.content) if (i.type === "tool_use" && (i.name === import_chunk_mahb4v28.Gp || i.name === import_chunk_mahb4v28.$m || f && (i.name === import_chunk_060xwhvh._t || i.name === import_chunk_060xwhvh.Df))) o.set(i.id, { use: i, response: y, askedEarlier: r(k, m) });
  }
  for (let [m, k] of a.entries()) if (k.type === "user" && typeof k.message.content !== "string") for (let y of k.message.content) {
    if (y.type !== "tool_result") continue;
    let i = o.get(y.tool_use_id);
    if (i === void 0) continue;
    if (o.delete(y.tool_use_id), y.is_error === true) continue;
    let S = i.use.name === import_chunk_mahb4v28.Gp || i.use.name === import_chunk_mahb4v28.$m ? [{ use: i.use, result: y }] : (bqs().safeParse(z(k.toolUseResult, "taskCalls")).data ?? []).map(({ name: M, input: g, result: I }, R) => {
      let A = `${y.tool_use_id}/${R}`;
      return { use: { id: A, name: M, input: g }, result: { tool_use_id: A, content: I } };
    });
    for (let { use: M, result: g } of S) {
      let I = K(g), R = V(M), A = { named: W(R), use: M, result: g, response: i.response, fromSubagent: M !== i.use, askedEarlier: i.askedEarlier, answeredEarlier: r(k, m) }, e;
      if (M.name === import_chunk_mahb4v28.Gp) {
        let h = I.match(import_chunk_bzyb60p0.Rci)?.[1];
        if (h !== void 0) e = { kind: "create", taskId: h, ...A };
      } else if (I.startsWith(Y)) {
        let h = z(R, "taskId");
        e = { kind: "update", taskId: typeof h === "string" ? h : "", ...A };
      }
      if (e === void 0) continue;
      if (yield e, e.kind === "update" && e.named.status === "deleted") {
        L.set(e.taskId, e);
        continue;
      }
      let d = L.get(e.taskId);
      if ((e.fromSubagent || d?.fromSubagent) && d?.response === e.response) yield d;
    }
  }
}
function qTa(a) {
  return a.filter((r) => r.type === "user" ? r.toolUseResult != null : !(0, import_chunk_865at33z.On)(r) || r.compactMetadata?.durationMs != null);
}
function YTa(a) {
  let r = Z(a), o = D(a, r);
  if (o.carriedList !== "dropped_on_restart") return o;
  let f = D(a, { fate: "none" });
  return { ...f, highestId: Math.max(f.highestId, o.highestId), carriedList: "dropped_on_restart" };
}
function D(a, r) {
  let o = { pendingCreates: /* @__PURE__ */ new Map(), tasks: /* @__PURE__ */ new Map() }, f = /* @__PURE__ */ new Map(), L = new G(), m, k = [], y = /* @__PURE__ */ new Set(), i = /* @__PURE__ */ new Map(), S = (e, d) => {
    let h = i.get(e)?.blocks, w = i.get(d)?.blockedBy;
    if (o.tasks.has(e) && o.tasks.has(d) && h && w) {
      if (!h.includes(d)) h.push(d);
      if (!w.includes(e)) w.push(e);
    }
  }, M = 0, g = (e) => {
    M = Math.max(M, tQn(e) ?? 0);
  };
  if (r.fate === "used" || r.fate === "highest_id_only") M = r.highestId;
  let I = r.fate === "used" ? r.highestId : 0;
  if (r.fate === "used") for (let e of r.tasks) o.tasks.set(e.id, { content: e.subject, activeForm: e.activeForm ?? e.subject, status: e.status }), f.set(e.id, O), i.set(e.id, { description: e.description ?? "", owner: e.owner, metadata: e.metadata, blocks: [...e.blocks ?? []], blockedBy: [...e.blockedBy ?? []] });
  for (let e of VEn(a, r.fate === "used" ? r.isOlderRow : void 0)) {
    let d = tQn(e.taskId);
    if (e.fromSubagent && (e.kind === "update" ? f.get(e.taskId) === void 0 : f.has(e.taskId) || d === void 0 || d <= I || d <= L.highestByOthersThan(e.response))) continue;
    if (g(e.taskId), e.answeredEarlier) continue;
    if (e.kind === "update") {
      if ((0, import_chunk_bzyb60p0.zPn)(o, e.use), !f.has(e.taskId)) f.set(e.taskId, void 0), k.push(e.taskId);
      let { description: w, owner: U, metadata: v } = e.named, j = i.get(e.taskId) ?? { description: "", blocks: [], blockedBy: [] };
      i.set(e.taskId, { ...j, ...w !== void 0 && { description: w }, ...U !== void 0 && { owner: U }, ...v !== void 0 && { metadata: (0, import_chunk_0dht3xy7.pon)(j.metadata, v) } });
      for (let x of e.named.addBlocks ?? []) S(e.taskId, x);
      for (let x of e.named.addBlockedBy ?? []) S(x, e.taskId);
      continue;
    }
    if (e.askedEarlier && f.get(e.taskId) === O && o.tasks.get(e.taskId)?.content === e.named.subject) continue;
    if (d !== void 0 && (r.fate === "used" && d <= I || d <= L.highestByOthersThan(e.response))) {
      if (r.fate === "used") return (0, import_chunk_w578pjby.t)(`[Tasks] rebuild: a create after the compaction marker got id ${e.taskId}, no higher than one already given out, so the id counter restarted; dropping the marker's list (highest id ${I})`), { tasks: [], highestId: I, olderTasks: 0, carriedTasks: 0, carriedList: "dropped_on_restart" };
      for (let w of e.response === m ? k : f.keys()) if (f.get(w) !== e.response) f.delete(w), o.tasks.delete(w), i.delete(w), y.delete(w);
      L.keepOnly(e.response), m = e.response, k = [];
    }
    if (y.has(e.taskId)) {
      for (let w of y) f.delete(w), o.tasks.delete(w), i.delete(w);
      y.clear();
    }
    if (f.get(e.taskId) === void 0) o.tasks.delete(e.taskId);
    if ((0, import_chunk_bzyb60p0.zPn)(o, e.use), (0, import_chunk_bzyb60p0.olr)(o, e.result), f.set(e.taskId, e.response), k.push(e.taskId), e.fromSubagent) y.add(e.taskId);
    else if (d !== void 0 && e.response !== O) L.add(e.response, d);
    i.set(e.taskId, { description: e.named.description ?? "", metadata: e.named.metadata, blocks: [], blockedBy: [] });
  }
  let R = [];
  for (let [e, d] of o.tasks) if (f.get(e) !== void 0 && tQn(e) !== void 0) {
    let h = i.get(e);
    R.push({ id: e, subject: d.content, description: h?.description ?? "", activeForm: d.activeForm, ...h?.owner !== void 0 && { owner: h.owner }, status: d.status, blocks: h?.blocks ?? [], blockedBy: h?.blockedBy ?? [], ...h?.metadata !== void 0 && { metadata: h.metadata } });
  }
  let A = new Map(R.map((e) => [e.id, e]));
  for (let e of R) e.blocks = e.blocks.filter((d) => A.get(d)?.blockedBy.includes(e.id));
  for (let e of R) e.blockedBy = e.blockedBy.filter((d) => A.get(d)?.blocks.includes(e.id));
  for (let e of o.tasks.keys()) g(e);
  return { tasks: R, highestId: M, olderTasks: o.tasks.size - R.length, carriedTasks: r.fate === "used" ? r.tasks.length : 0, carriedList: r.fate };
}
var O = "carried by the marker";
class G {
  byResponse = /* @__PURE__ */ new Map();
  leader;
  highest = -1 / 0;
  runnerUp = -1 / 0;
  add(a, r) {
    if (r <= (this.byResponse.get(a) ?? -1 / 0)) return;
    if (this.byResponse.set(a, r), r > this.highest) {
      if (this.leader !== a) this.runnerUp = this.highest;
      this.leader = a, this.highest = r;
    } else this.runnerUp = Math.max(this.runnerUp, r);
  }
  highestByOthersThan(a) {
    return a === this.leader ? this.runnerUp : this.highest;
  }
  keepOnly(a) {
    let r = this.byResponse.get(a);
    if (this.byResponse.clear(), this.leader = void 0, this.highest = -1 / 0, this.runnerUp = -1 / 0, r !== void 0) this.add(a, r);
  }
}
function N(a) {
  return typeof a.uuid === "string" ? a.uuid.toLowerCase() : "";
}
function P(a) {
  let r = q().safeParse(a.compactMetadata?.preservedMessages);
  return r.success ? [...r.data?.uuids ?? [], ...r.data?.allUuids ?? []].map((o) => o.toLowerCase()) : void 0;
}
function Z(a) {
  let r = /* @__PURE__ */ new Set(), o = true, f = false;
  for (let g of a) if ((0, import_chunk_865at33z.On)(g)) {
    f ||= g.compactMetadata?.preCompactTaskList !== void 0;
    let I = P(g);
    o &&= I !== void 0;
    for (let R of I ?? []) r.add(R);
  }
  let L = a.findLastIndex((g) => (0, import_chunk_865at33z.On)(g) && !r.has(N(g))), m = a[L];
  if (m === void 0 || !(0, import_chunk_865at33z.On)(m) || m.compactMetadata?.preCompactTaskList === void 0) return { fate: L === -1 && f ? "malformed" : "none" };
  let k = J().safeParse(m.compactMetadata.preCompactTaskList), y = P(m);
  if (!k.success || y === void 0 || !o) return (0, import_chunk_w578pjby.t)(`[Tasks] rebuild: ${k.success ? "a compaction marker's list of kept rows" : "the compaction marker's task list"} is malformed; the marker's task list is ignored and the list is rebuilt from the task calls alone`), { fate: "malformed" };
  let { tasks: i, highestId: S } = k.data;
  if (i === void 0) return { fate: "highest_id_only", highestId: S };
  let M = new Set(y);
  return { fate: "used", tasks: i, highestId: i.reduce((g, I) => Math.max(g, Number(I.id)), S), isOlderRow: (g, I) => I < L || M.has(N(g)) };
}
var q = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ uuids: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()), allUuids: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional() }).optional()), J = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ tasks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.c)({ id: (0, import_chunk_adx6804h.n)().refine((a) => (0, import_chunk_0dht3xy7.$Ci)(a) && tQn(a) !== void 0), subject: (0, import_chunk_adx6804h.n)(), description: (0, import_chunk_adx6804h.n)().optional(), activeForm: (0, import_chunk_adx6804h.n)().optional(), status: (0, import_chunk_0dht3xy7.jSe)(), owner: (0, import_chunk_adx6804h.n)().optional(), blocks: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), blockedBy: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).optional(), metadata: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()).optional() })).refine((a) => new Set(a.map((r) => r.id)).size === a.length).optional(), highestId: (0, import_chunk_adx6804h.E)().int().min(0).max(OMt) }));
