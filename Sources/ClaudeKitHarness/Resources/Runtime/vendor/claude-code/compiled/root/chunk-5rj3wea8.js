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
var chunk_5rj3wea8_exports = {};
__export(chunk_5rj3wea8_exports, {
  FMt: () => FMt,
  ICa: () => ICa,
  KGo: () => KGo,
  MCa: () => MCa,
  OYl: () => OYl,
  VGo: () => VGo,
  a4s: () => a4s,
  i4s: () => i4s,
  l4s: () => l4s,
  svn: () => svn,
  tYt: () => tYt
});
module.exports = __toCommonJS(chunk_5rj3wea8_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_wx7ffn80 = require("/$bunfs/root/chunk-wx7ffn80.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_3grsnd7a = require("/$bunfs/root/chunk-3grsnd7a.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_wx3ay5nf = require("/$bunfs/root/chunk-wx3ay5nf.js");
var import_chunk_h5byc1b9 = require("/$bunfs/root/chunk-h5byc1b9.js");
var import_chunk_8hpht18j = require("/$bunfs/root/chunk-8hpht18j.js");
var import_chunk_rwtf0my6 = require("/$bunfs/root/chunk-rwtf0my6.js");
var import_chunk_n1bj1qv8 = require("/$bunfs/root/chunk-n1bj1qv8.js");
var import_chunk_ckc7s0v4 = require("/$bunfs/root/chunk-ckc7s0v4.js");
var import_chunk_hn3cwwzt = require("/$bunfs/root/chunk-hn3cwwzt.js");
var import_crypto = require("crypto");
var N = "repl-script-over", VGo = new DOMException(N, "AbortError");
function q(t) {
  return t.aborted && (0, import_chunk_cbnm4p23.Ai)(t.reason) === N;
}
var P = "[Tool call not made: the script that started this code has returned and none of its calls is still running, and after that the code it left behind can make no more calls. Nobody stopped or declined this call. To run these steps, await them inside one script.]", ICa = "This tool call did not run. The piece of code that it belongs to had already finished, and a timer or promise that finished code leaves running can't make tool calls. To run these steps, send them again in one piece of code that awaits each of them.", FMt = "This tool call did not run. The code that made it finished or was stopped before the call could start. If it is still needed and nobody stopped the code, make the call again in code that awaits it.", i4s = "Code that this script left running can go no further: after a script returns, that code can't use sleep() or timers, and it can make calls only while an earlier call is still running. Check what was done, then await the rest inside one script (set the timeout parameter for a long loop).", MCa = "REPL: this code was stopped. The script that started it has ended, and the code kept running without waiting for anything. Await these steps inside one script.", svn = "ScriptOverError";
class a4s extends Error {
  constructor() {
    super(P);
    this.name = svn;
  }
}
function KGo(t, e) {
  return q(t) ? P : e;
}
var V = 300, I = "local_script", j = ["is_virtual", "hidden_tool_use_ids", "detached_tool_use_ids", "withheld_script_tool_use_id"], X = ["parent_tool_use_id", "agent_id", "subagent_type", "task_description"], Y = ["user_message_uuid", "user_message_uuids", "supersedes"], z = "A hook withheld this call's result.", J = 300, O = /* @__PURE__ */ new WeakSet();
function OYl(t) {
  return O.has(t);
}
function h(t) {
  return typeof t === "object" && t !== null;
}
function w(t) {
  let e = h(t.message) ? t.message.content : void 0;
  return Array.isArray(e) ? e.filter(h) : [];
}
function A(t, e) {
  return { ...t, message: { ...t.message, content: e } };
}
function E(t) {
  if (!j.some((s) => s in t)) return t;
  let e = { ...t };
  for (let s of j) delete e[s];
  return e;
}
function b(t, e) {
  return { ...(0, import_chunk_bzyb60p0.Me)({ content: [{ type: "tool_result", tool_use_id: t, content: e, is_error: true }], isVirtual: true }), uuid: (0, import_chunk_ckc7s0v4.B$e)(t, "result") };
}
class tYt {
  #r;
  #y = /* @__PURE__ */ new WeakSet();
  #t = /* @__PURE__ */ new Set();
  #s = /* @__PURE__ */ new Set();
  #n = /* @__PURE__ */ new Map();
  #l = /* @__PURE__ */ new Set();
  #i = /* @__PURE__ */ new Set();
  #o = /* @__PURE__ */ new Map();
  #c = /* @__PURE__ */ new Map();
  #h = /* @__PURE__ */ new Set();
  #_ = /* @__PURE__ */ new Set();
  #p = () => [];
  #w = false;
  #E = /* @__PURE__ */ new Set();
  #a = {};
  #f = false;
  #e;
  #S = false;
  #A = /* @__PURE__ */ new Set();
  #T = /* @__PURE__ */ new Set();
  #g = "[]";
  get attached() {
    return this.#r !== void 0;
  }
  attach(t, e, s) {
    this.#p = s;
    let n = t.outbound.enqueue.bind(t.outbound), a = t.write.bind(t);
    this.#r = (u) => {
      this.#y.add(u), n(u);
    }, t.outbound.enqueue = (u) => this.#d([u]);
    let d = /* @__PURE__ */ new WeakSet(), o = t.writeAfterInit.bind(t);
    t.writeAfterInit = (u) => {
      d.add(u), o(u);
    }, t.write = async (u) => {
      if (this.#y.has(u)) return a(u);
      if (e && !t.outbound.ended && !d.has(u) && (u.type === "assistant" || u.type === "user")) return this.#d([u], true);
      for (let f of this.#v(u)) await a(f);
    };
  }
  async open(t, e, s, n = () => {
  }, a = false, d) {
    let o = e !== void 0;
    if (this.#A.add(t), a) return;
    if (d !== void 0) this.#t.add(t);
    else if (!this.#o.has(t) && !(o && this.#E.has(e))) {
      let r = new AbortController();
      this.#c.set(t, () => r.abort()), await (0, import_chunk_5appeerh.K)(V, r.signal), this.#c.delete(t);
    }
    let u = this.#o.get(t);
    if (u === void 0 && o) {
      this.#E.add(e);
      return;
    }
    let f = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Map();
    this.#h.add(t);
    let G = 0, v, L = () => {
      v ??= setInterval((r, m) => {
        if ((0, import_chunk_wx7ffn80.QWn)() || (0, import_chunk_xfj2cwfv.nn)()) return;
        for (let [c, { toolName: p, startedAt: g }] of m) {
          let y = Date.now() - g;
          if (y >= import_chunk_bzyb60p0.Idr / 2) r({ type: "tool_progress", tool_use_id: `${c}-heartbeat-${G++}`, tool_name: p, parent_tool_use_id: c, elapsed_time_seconds: Math.floor(y / 1e3), heartbeat: true, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: (0, import_crypto.randomUUID)() });
        }
      }, import_chunk_bzyb60p0.Idr, (r) => this.#m(r), f), v.unref?.();
    }, x = Object.fromEntries(X.flatMap((r) => u?.[r] === void 0 ? [] : [[r, u[r]]])), k = (r, m, c, p) => {
      this.#d(this.#p());
      for (let g of (0, import_chunk_wx3ay5nf.RO)(c, s())) {
        let { tool_use_result: y, ...T } = H(E(g), m, p);
        l.set(c.uuid, w(T));
        let S = p === void 0 || p.call.phase === "error", D = { type: "tool_result", tool_use_id: r, content: `This call ${S ? "failed or was stopped" : "finished"}. Its result was not saved.`, is_error: S };
        if (r === d?.toolUseID) this.#l.delete(r), d.answered(D);
        if (!this.#i.has(t)) n(c.uuid, D);
        let B = this.#n.get(r);
        if (B !== void 0) B.result = { ...c, hostContent: w(T) };
        this.#f ||= !o && p?.call.phase === "error", this.#m({ ...T, ...(!o || typeof y === "string") && { tool_use_result: y }, ...x });
      }
    }, C = false;
    return { shown: l, started: (r, m) => R(() => {
      if (r === d?.toolUseID) {
        let p = (0, import_chunk_ckc7s0v4.B$e)(r, "use");
        if (!C && !l.has(p)) {
          this.#s.add(r), l.set(p, []);
          let { toolName: g } = d;
          f.set(r, { toolName: g, startedAt: Date.now() }), L();
        }
        return;
      }
      if (this.#s.has(r) || this.#t.has(r)) return;
      let c = C || this.#i.has(t) ? void 0 : m();
      if (c === void 0) {
        this.#t.add(r);
        return;
      }
      for (let p of (0, import_chunk_wx3ay5nf.RO)(c.row, s())) {
        let g = w(p).map((S) => ({ ...S, input: c.input })), y = String(g[0]?.name);
        if ((0, import_chunk_h5byc1b9.X3)(y)) {
          this.#t.add(r);
          return;
        }
        if (this.#s.add(r), l.set(c.row.uuid, g), g[0] !== void 0) n(c.row.uuid, g[0]);
        if (!o) this.#n.set(r, { call: { ...c.row, ranByToolUseId: t, hostContent: g } });
        if (f.set(r, { toolName: y, startedAt: Date.now() }), !o) L();
        let T = o ? [] : this.#C(g[0], u?.message);
        this.#m({ ...E(A(p, g)), ...!o && this.#R(), ...u !== void 0 && { message: { ...u.message, content: g }, ...u.request_id !== void 0 && { request_id: u.request_id } }, ...x }), T.forEach((S) => this.#u(S));
      }
    }), ended: (r, m) => R(() => {
      let c = f.get(r)?.toolName, p = c === void 0 ? void 0 : m();
      if (c !== void 0 && p !== void 0) if (f.delete(r), this.#i.has(t)) k(r, c, b(r, z));
      else k(r, c, p.row, p);
    }), parked: (r) => {
      f.delete(r), this.#l.add(r);
    }, subagentTurn: (r) => R(() => {
      if (this.#i.has(t)) return;
      let m = (0, import_chunk_bzyb60p0.SQ)({ toolUseID: r.toolUseID, parentToolUseID: r.parentToolUseID ?? r.toolUseID, data: r.data });
      this.#d(this.#p()), this.#d((0, import_chunk_wx3ay5nf.RO)(m, s()), true);
    }), close: (r) => R(() => {
      C = true, clearInterval(v), this.#h.delete(t), this.#o.delete(t);
      for (let [m, { toolName: c }] of f) k(m, c, b(m, r));
      f.clear();
    }) };
  }
  withhold(t) {
    this.#i.add(t);
    for (let [e, { call: s }] of this.#n) if (s.ranByToolUseId === t) this.#n.delete(e);
  }
  rowsNotSaved(t) {
    return [...this.#n].flatMap(([e, { call: s, result: n }]) => t.has(s.ranByToolUseId ?? "") ? [s, n ?? b(e, import_chunk_0ha8wex8.dT)] : []);
  }
  #d(t, e = false) {
    for (let s of t) for (let n of this.#v(s)) {
      if (e) O.add(n);
      this.#r?.(n);
    }
  }
  #m(t) {
    O.add(t), this.#r?.(t);
  }
  #R() {
    let t = this.#a;
    return this.#a = {}, t;
  }
  #u(t) {
    this.#r?.({ type: "stream_event", event: t, parent_tool_use_id: null, session_id: (0, import_chunk_f9x2f6cx.W)(), uuid: (0, import_crypto.randomUUID)() });
  }
  #C(t, e) {
    if (!this.#S || t === void 0) return [];
    let s = { input_tokens: 0, output_tokens: 0 }, n = h(e) && e.id === this.#e?.messageId ? this.#e : void 0;
    if (n === void 0 && this.#e !== void 0) return [];
    let a = n === void 0 ? 0 : n.next++;
    if (n === void 0) this.#u({ type: "message_start", message: { ...h(e) && e, content: [], stop_reason: null, usage: s } });
    return this.#u({ type: "content_block_start", index: a, content_block: { ...t, input: {} } }), this.#u({ type: "content_block_delta", index: a, delta: { type: "input_json_delta", partial_json: (0, import_chunk_w578pjby._)(t.input) } }), [{ type: "content_block_stop", index: a }, ...n === void 0 ? [{ type: "message_delta", delta: { stop_reason: "tool_use", stop_sequence: null }, usage: s }, { type: "message_stop" }] : []];
  }
  #v(t) {
    let e = t;
    try {
      switch (e.type) {
        case "assistant":
          return this.#b(e);
        case "user":
          return this.#F(e);
        case "stream_event":
          return this.#M(e);
        case "tool_progress":
          return this.#O(e);
        case "tool_use_summary":
          return this.#L(e);
        case "system":
          return this.#x(e);
        case "control_response":
          return [tt(e)];
        case "result":
          if (this.#a = {}, this.#e = void 0, Array.isArray(e.permission_denials)) {
            for (let s of e.permission_denials) if (h(s) && (0, import_chunk_h5byc1b9.X3)(s.tool_name)) s.tool_input = (0, import_chunk_h5byc1b9.h4r)(s.tool_input), s.tool_name = import_chunk_hn3cwwzt.ke;
          }
          return [e];
        default:
          return [e];
      }
    } catch (s) {
      return (0, import_chunk_k449cc64.i)(s), [e];
    }
  }
  #b(t) {
    let e = w(t), s = e.filter((o) => {
      if (o.type !== "tool_use" || typeof o.id !== "string") return true;
      if (t.is_virtual === true && this.#s.has(o.id)) return this.#n.delete(o.id), false;
      if ((0, import_chunk_h5byc1b9.X3)(o.name)) {
        if (this.#t.add(o.id), o.name !== import_chunk_3grsnd7a.Vo && t.is_virtual !== true) this.#f &&= Boolean(t.parent_tool_use_id), this.#o.set(o.id, t), this.#c.get(o.id)?.();
      }
      if (t.is_virtual !== true && !(0, import_chunk_h5byc1b9.X3)(o.name)) this.#t.delete(o.id);
      if (this.#t.has(o.id)) return false;
      if (t.is_virtual !== true) this.#_.add(o.id);
      return true;
    }), n = !t.parent_tool_use_id;
    if (s.length === e.length) {
      let o = E(t);
      return n && Object.keys(this.#a).length > 0 ? [{ ...this.#R(), ...o }] : [o];
    }
    if (s.length === 0) {
      for (let o of n ? Y : []) if (t[o] !== void 0) this.#a[o] = t[o];
      return [];
    }
    let { tool_use_meta: a, ...d } = A(t, s);
    return [E(d)];
  }
  #F(t) {
    let e = Array.isArray(t.hidden_tool_use_ids) ? t.hidden_tool_use_ids : [], s = w(t), n = s.filter((l) => l.type === "tool_result"), a = n.filter(({ tool_use_id: l }) => typeof l === "string" && (this.#t.has(l) || e.includes(l) && !this.#_.has(l) || t.is_virtual === true && this.#s.has(l) && !this.#l.delete(l))), d = a.find((l) => !this.#A.has(l.tool_use_id) && et(t, l)), o = d === void 0 ? [] : [...this.#k(String(d.tool_use_id)), { ...E(A(t, [{ ...d, content: (0, import_chunk_h5byc1b9.otr)(String(d.content)) }])), tool_use_result: (0, import_chunk_h5byc1b9.otr)(String(t.tool_use_result)) }];
    for (let { tool_use_id: l } of a) if (typeof l === "string" && !this.#h.has(l) && !(h(t.tool_use_result) && t.tool_use_result.asyncDispatched === true)) this.#o.delete(l);
    if (a.length === 0) return n.forEach(({ tool_use_id: l }) => this.#_.delete(String(l))), [U(E(t))];
    if (a.length === n.length) return d !== void 0 && this.#s.has(String(d.tool_use_id)) ? o : st(t, a, this.#f);
    let { tool_use_result: u, ...f } = A(t, s.filter((l) => !a.includes(l)));
    return [E(f)];
  }
  #k(t) {
    let e = this.#o.get(t), s = e && w(e).find((o) => o.id === t);
    if (e === void 0 || this.#s.has(t)) return [];
    this.#s.add(t);
    let { tool_use_meta: n, wire_tool_inputs: a, ...d } = A(e, [{ type: "tool_use", id: t, name: import_chunk_hn3cwwzt.ke, input: (0, import_chunk_h5byc1b9.h4r)(s?.input) }]);
    return [d];
  }
  #M(t) {
    let e = t.event;
    if (!h(e) || t.parent_tool_use_id !== null) return [t];
    if (this.#S = true, e.type === "message_start") this.#e = { messageId: h(e.message) ? e.message.id : void 0, shownIndex: /* @__PURE__ */ new Map(), next: 0 };
    else if (e.type === "message_stop") this.#e = void 0;
    if (this.#e === void 0 || e.index === void 0) return [t];
    let { shownIndex: s } = this.#e;
    if (e.type === "content_block_start") {
      let a = e.content_block;
      s.set(e.index, h(a) && a.type === "tool_use" && (0, import_chunk_h5byc1b9.X3)(a.name) ? void 0 : this.#e.next++);
    }
    if (!s.has(e.index)) return [t];
    let n = s.get(e.index);
    return n === void 0 ? [] : [n === e.index ? t : { ...t, event: { ...e, index: n } }];
  }
  #O(t) {
    return "inner_call" in t || "repl_call" in t || (0, import_chunk_h5byc1b9.X3)(t.tool_name) ? [] : [t];
  }
  #L(t) {
    let e = t.preceding_tool_use_ids;
    return Array.isArray(e) && e.some((s) => this.#t.has(s)) ? [] : [t];
  }
  #x(t) {
    switch (t.subtype) {
      case "init":
        return Array.isArray(t.tools) ? [{ ...t, tools: nt(t.tools) }] : [t];
      case "permission_denied": {
        let e = String(t.tool_use_id);
        return [...this.#k(e), this.#t.has(e) || (0, import_chunk_h5byc1b9.X3)(t.tool_name) ? { ...t, tool_name: (0, import_chunk_h5byc1b9.X3)(t.tool_name) ? import_chunk_hn3cwwzt.ke : t.tool_name, message: (0, import_chunk_h5byc1b9.otr)(String(t.message)) } : t];
      }
      case "hook_started":
      case "hook_progress":
      case "hook_response":
        return (0, import_chunk_h5byc1b9.X3)(String(t.hook_name).split(":").at(-1)) ? [] : [t];
      case "task_started":
        if (t.task_type === I) return this.#T.add(t.task_id), [];
        return [t];
      case "task_progress": {
        let { last_tool_name: e, ...s } = t;
        return [(0, import_chunk_h5byc1b9.X3)(e) ? s : t];
      }
      case "task_updated":
      case "task_notification":
        return this.#T.has(t.task_id) ? [] : [t];
      case "background_tasks_changed": {
        if (!Array.isArray(t.tasks)) return [t];
        let e = t.tasks.filter((d) => !(h(d) && d.task_type === I)), s = e.length < t.tasks.length, n = s || this.#w, a = this.#g;
        return this.#w = s, this.#g = (0, import_chunk_w578pjby._)(e), n && a === this.#g ? [] : [{ ...t, tasks: e }];
      }
      default:
        return [t];
    }
  }
}
var F = 1e5;
function Q(t, e, s) {
  let n = s?.call;
  if (n?.declined === true) return import_chunk_0ha8wex8.hp;
  if (t === FMt || t === import_chunk_8hpht18j.vet) return s?.stopped === true ? import_chunk_0ha8wex8.hp : import_chunk_ckc7s0v4.C7t;
  let a = `Permission denied for ${e}: `;
  if (t.startsWith(a)) return t.slice(a.length);
  return n !== void 0 && n.executed === void 0 && n.toolDenialKind === void 0 && n.permissionDecision === void 0 && !s?.stopped ? `<tool_use_error>${t}</tool_use_error>` : t;
}
function Z({ call: t, tool: e, row: s, mcpResult: n }) {
  let { result: a } = t;
  if (t.servedText !== void 0 || t.phase !== "complete") return;
  let d = (0, import_chunk_rwtf0my6.DHt)(s.toolUseResultStripped ? a : s.toolUseResult, F, F);
  if (d.chars + d.values > F) return;
  if (e.isMcp === true) {
    if (n === void 0) return;
    let { data: u, structuredContent: f } = n;
    return { content: u, result: f === void 0 ? u : { content: u, structuredContent: f } };
  }
  let { content: o } = e.mapToolResultToToolResultBlockParam(a, t.toolUseId);
  return Array.isArray(o) ? { content: o, result: a } : void 0;
}
function H(t, e, s) {
  let n = s && Z(s), a = w(t).map((o) => o.type !== "tool_result" || typeof o.content !== "string" ? o : o.is_error === true ? { ...o, content: Q(o.content, e, s) } : { ...o, content: n?.content ?? (o.content || `(${e} completed with no output)`) }), d = a.find((o) => o.is_error === true);
  return U({ ...A(t, a), ...n !== void 0 && { tool_use_result: n.result }, ...d !== void 0 && { tool_use_result: (0, import_chunk_ckc7s0v4.m4r)(String(d.content)) } });
}
function l4s(t, e) {
  return [...(0, import_chunk_wx3ay5nf.RO)(t.row, e)].flatMap((s) => s.type === "user" ? w(H((0, import_chunk_rwtf0my6.rXs)(s, t.row, e), t.tool.name, t)) : []);
}
function U(t) {
  let { message: e, tool_use_result: s } = t, n = h(s) && Array.isArray(s.toolsUsed);
  if (!n && t.isSynthetic !== true) return t;
  return { ...t, ...h(e) && { message: { ...e, content: n ? (0, import_chunk_h5byc1b9.rtr)(e.content) : (0, import_chunk_h5byc1b9.oXs)(e.content) } }, ...h(s) && Array.isArray(s.toolsUsed) && { tool_use_result: { ...s, toolsUsed: s.toolsUsed.filter((a) => !(0, import_chunk_h5byc1b9.X3)(a)) } } };
}
function tt(t) {
  let e = h(t.response) ? t.response.response : void 0, s = h(e) ? e.messageBreakdown : void 0;
  if (!h(s)) return t;
  for (let n of ["toolCallsByType", "attachmentsByType"]) {
    let a = s[n];
    if (Array.isArray(a)) s[n] = a.filter((d) => !(h(d) && ((0, import_chunk_h5byc1b9.X3)(d.name) || d.name === "poll_events")));
  }
  return t;
}
function et(t, e) {
  return e.is_error === true && t.is_virtual !== true && !h(t.tool_use_result) && typeof e.content === "string" && !e.content.startsWith(import_chunk_0ha8wex8.hp);
}
function st(t, e, s) {
  let n = e.find((o) => o.is_error === true), a = t.tool_use_result;
  if (n === void 0 || s || !String(n.tool_use_id).startsWith(import_chunk_n1bj1qv8.x4s) || h(a) && a.stoppedBy !== void 0) return [];
  let d = (0, import_chunk_7cfjrnwy.ee)(String(n.content), J);
  return [{ type: "system", subtype: "informational", level: "warning", content: d.split(/\W+/).some(import_chunk_h5byc1b9.X3) ? "Code that Claude ran was stopped before it finished." : `Code that Claude ran failed with this error: ${d}`, uuid: (0, import_crypto.randomUUID)(), session_id: t.session_id }];
}
function R(t) {
  try {
    t();
  } catch (e) {
    (0, import_chunk_k449cc64.i)(e);
  }
}
function nt(t) {
  let e = (0, import_chunk_bzyb60p0.dR)() && t.includes(import_chunk_hn3cwwzt.ke);
  return t.filter((s) => !(0, import_chunk_h5byc1b9.X3)(s) && !(e && (s === import_chunk_865at33z.Qr || s === import_chunk_865at33z.Sr)));
}
