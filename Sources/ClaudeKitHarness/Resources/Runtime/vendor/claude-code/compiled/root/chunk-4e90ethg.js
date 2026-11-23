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
var chunk_4e90ethg_exports = {};
__export(chunk_4e90ethg_exports, {
  HYr: () => HYr,
  MYr: () => MYr,
  dJl: () => dJl,
  lJl: () => lJl,
  roi: () => roi
});
module.exports = __toCommonJS(chunk_4e90ethg_exports);
var import_chunk_racn22qq = require("/$bunfs/root/chunk-racn22qq.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_f5n8840h = require("/$bunfs/root/chunk-f5n8840h.js");
var import_chunk_a5aq0pxy = require("/$bunfs/root/chunk-a5aq0pxy.js");
var import_chunk_jnzfg7cq = require("/$bunfs/root/chunk-jnzfg7cq.js");
var import_chunk_pyt5z6an = require("/$bunfs/root/chunk-pyt5z6an.js");
class R {
  urlFlows = /* @__PURE__ */ new Map();
  deps;
  client;
  constructor(t, e) {
    this.deps = t, this.client = e;
  }
  hasCompletionChannel() {
    return this.client?.getProtocolEra?.() !== "modern";
  }
  rebind(t) {
    this.deps = t;
  }
  handle = async (t, e) => {
    let { signal: o } = e, { serverName: i } = this.deps;
    if ((0, import_chunk_ze4kt7fs.A7)({ name: i }) !== void 0) return { action: "cancel" };
    let n = "transportErrorState" in e ? e.transportErrorState : this.deps.transportErrorState;
    if (n) n.pendingElicitations++;
    (0, import_chunk_k449cc64.He)(i, `Received elicitation request: ${(0, import_chunk_jnzfg7cq.sJt)(t.params)}`);
    let { params: r } = t, s = w(r);
    (0, import_chunk_y53wbr8a.a)("tengu_mcp_elicitation_shown", { mode: (0, import_chunk_78g0060s.f)(s) });
    try {
      let c = await this.deps.runElicitationHooks(i, r, o);
      if (c) return (0, import_chunk_k449cc64.He)(i, `Elicitation resolved by hook: ${(0, import_chunk_jnzfg7cq.r0t)(s, c)}`), (0, import_chunk_y53wbr8a.a)("tengu_mcp_elicitation_response", { mode: (0, import_chunk_78g0060s.f)(s), action: (0, import_chunk_78g0060s.f)(c.action), byHook: true }), (0, import_chunk_cqa9hrgx.u)("mcp_elicitation_handle"), c;
      let l = r.mode === "url" && this.hasCompletionChannel() ? r.elicitationId : void 0, { result: p, flow: g } = await this.ask(r, o, s, l, n);
      if (p === import_chunk_a5aq0pxy.esr) return (0, import_chunk_cqa9hrgx.u)("mcp_elicitation_handle"), p;
      (0, import_chunk_k449cc64.He)(i, `Elicitation response: ${(0, import_chunk_jnzfg7cq.r0t)(s, p)}`);
      let d = await this.deps.runElicitationResultHooks(i, p, o, s, l);
      if (d.action !== p.action) (0, import_chunk_y53wbr8a.a)("tengu_mcp_elicitation_result_hook", { mode: (0, import_chunk_78g0060s.f)(s), action: (0, import_chunk_78g0060s.f)(d.action) });
      if (r.mode === "url" && p.action === "accept" && d.action !== "accept") this.abandonWaiting(l, g);
      return (0, import_chunk_cqa9hrgx.u)("mcp_elicitation_handle"), d;
    } catch (c) {
      return (0, import_chunk_k449cc64.id)(i, `Elicitation error: ${c}`), (0, import_chunk_cqa9hrgx.m)("mcp_elicitation_handle", "handler_error"), { action: "cancel" };
    } finally {
      if (n) n.pendingElicitations--, n.lastElicitationClosedAt = Date.now();
    }
  };
  complete = (t) => {
    let e = this.urlFlows.get(t);
    if (!e || e.size === 0) return false;
    for (let o of e) o.completed = true, o.closeWaiting?.();
    return true;
  };
  abandonWaiting(t, e) {
    e?.closeWaiting?.(), this.forget(t, e);
  }
  async ask(t, e, o, i, n) {
    if (e.aborted || (0, import_chunk_pyt5z6an.W0e)()) return { result: { action: "cancel" }, flow: void 0 };
    let { serverName: r, requestDialog: s } = this.deps, c = (0, import_chunk_a5aq0pxy.$Ua)(e), l;
    if (i !== void 0) {
      l = { completed: false, closeWaiting: void 0 };
      let d = this.urlFlows.get(i);
      if (d) d.add(l);
      else this.urlFlows.set(i, /* @__PURE__ */ new Set([l]));
    }
    let p = Array.from(n?.activeCallWatchdogs ?? [], (d) => d.holdForQuestion?.()), g = await s(import_chunk_f5n8840h.e5, { serverName: r, params: t, ...t.mode === "url" && i === void 0 && { userConfirmsCompletion: true }, ...c && { canWait: c } }, { place: "under", signal: e, ...c && { alsoHideWhile: ["draft"] } }).finally(() => {
      for (let d of p) d?.();
    });
    if (!e.aborted) (0, import_chunk_y53wbr8a.a)("tengu_mcp_elicitation_response", { mode: (0, import_chunk_78g0060s.f)(o), action: (0, import_chunk_78g0060s.f)(g.action) });
    if (c && g.action === "cancel" && !e.aborted) return this.forget(i, l), { result: import_chunk_a5aq0pxy.esr, flow: void 0 };
    if (t.mode === "url" && g.action === "accept" && l) if (l.completed) this.forget(i, l);
    else this.showWaiting(t, i, l, e, n);
    else this.forget(i, l);
    return { result: g, flow: l };
  }
  async showWaiting(t, e, o, i, n) {
    let r = new AbortController();
    if (o.closeWaiting = () => r.abort(), n) n.pendingElicitations++;
    try {
      await this.deps.requestDialog(import_chunk_f5n8840h.Due, { serverName: this.deps.serverName, params: t, waitingState: { actionLabel: "Skip confirmation" } }, { signal: AbortSignal.any([r.signal, i]), succeeds: true });
    } finally {
      if (n) n.pendingElicitations--, n.lastElicitationClosedAt = Date.now();
    }
    this.forget(e, o);
  }
  forget(t, e) {
    if (t === void 0 || e === void 0) return;
    let o = this.urlFlows.get(t);
    if (!o) return;
    if (o.delete(e), o.size === 0) this.urlFlows.delete(t);
  }
}
function w(t) {
  return t.mode === "url" ? "url" : "form";
}
var h = /* @__PURE__ */ new WeakMap();
function E(t, e) {
  let o = h.get(t);
  if (o) return o.rebind(e), o;
  let i = new R(e, t);
  return h.set(t, i), i;
}
function lJl(t) {
  let e = import_chunk_racn22qq.Mor.safeParse(t?.[import_chunk_racn22qq.Ior]);
  return e.success ? { taskId: e.data.taskId } : null;
}
function dJl(t, e, o, i) {
  if ((0, import_chunk_ze4kt7fs.A7)({ name: e }) !== void 0) return;
  let n = E(t, { serverName: e, requestDialog: o, transportErrorState: i, runElicitationHooks: MYr, runElicitationResultHooks: HYr });
  try {
    t.setRequestHandler("elicitation/create", (r, s) => n.handle(r, { signal: s.mcpReq.signal })), t.setNotificationHandler("notifications/elicitation/complete", (r) => {
      let { elicitationId: s } = r.params;
      if ((0, import_chunk_k449cc64.He)(e, `Received elicitation completion notification: ${s}`), (0, import_chunk_bzyb60p0.oae)((0, import_chunk_bzyb60p0.GMe)(), { message: `MCP server "${e}" confirmed elicitation ${s} complete`, notificationType: "elicitation_complete" }).catch(import_chunk_bzyb60p0.KUe), !n.complete(s)) (0, import_chunk_k449cc64.He)(e, `Ignoring completion notification for unknown elicitation: ${s}`);
    });
  } catch {
    return;
  }
}
function roi({ connected: t, params: e, signal: o, requestDialog: i, transportErrorState: n }) {
  return E((0, import_chunk_qdcbcsg7.Ap)(t.client), { serverName: t.name, requestDialog: i, transportErrorState: t.transportErrorState, runElicitationHooks: MYr, runElicitationResultHooks: HYr }).handle({ params: e }, { signal: o, transportErrorState: n });
}
async function MYr(t, e, o) {
  let i = (0, import_chunk_bzyb60p0.GMe)();
  if (i.project === null && !(0, import_chunk_f9x2f6cx.Y)()) throw new import_chunk_f9x2f6cx.$B();
  try {
    let n = e.mode === "url" ? "url" : "form", r = "url" in e ? e.url : void 0, s = "elicitationId" in e ? e.elicitationId : void 0, { elicitationResponse: c, blockingError: l } = await (0, import_chunk_bzyb60p0.Urs)({ session: i, serverName: t, message: e.message, requestedSchema: "requestedSchema" in e ? e.requestedSchema : void 0, signal: o, mode: n, url: r, elicitationId: s });
    if (l) return { action: "decline" };
    if (c) return { action: c.action, content: c.content };
    return;
  } catch (n) {
    (0, import_chunk_k449cc64.id)(t, `Elicitation hook error: ${n}`);
    return;
  }
}
async function HYr(t, e, o, i, n) {
  let r = (0, import_chunk_bzyb60p0.GMe)();
  if (r.project === null && !(0, import_chunk_f9x2f6cx.Y)()) throw new import_chunk_f9x2f6cx.$B();
  try {
    let { elicitationResultResponse: s, blockingError: c } = await (0, import_chunk_bzyb60p0.Brs)({ session: r, serverName: t, action: e.action, content: e.content, signal: o, mode: i, elicitationId: n });
    if (c) return (0, import_chunk_bzyb60p0.oae)(r, { message: `Elicitation response for server "${t}": decline`, notificationType: "elicitation_response" }).catch(import_chunk_bzyb60p0.KUe), { action: "decline" };
    let l = s ? { action: s.action, content: s.content ?? e.content } : e;
    return (0, import_chunk_bzyb60p0.oae)(r, { message: `Elicitation response for server "${t}": ${l.action}`, notificationType: "elicitation_response" }).catch(import_chunk_bzyb60p0.KUe), l;
  } catch (s) {
    return (0, import_chunk_k449cc64.id)(t, `ElicitationResult hook error: ${s}`), (0, import_chunk_bzyb60p0.oae)(r, { message: `Elicitation response for server "${t}": ${e.action}`, notificationType: "elicitation_response" }).catch(import_chunk_bzyb60p0.KUe), e;
  }
}
