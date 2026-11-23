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
var chunk_z2c6pmpw_exports = {};
__export(chunk_z2c6pmpw_exports, {
  $5r: () => $5r,
  $nr: () => $nr,
  B5r: () => B5r,
  D5r: () => D5r,
  DCn: () => DCn,
  F5r: () => F5r,
  Fnr: () => Fnr,
  HCn: () => HCn,
  ICn: () => ICn,
  KGl: () => KGl,
  L5r: () => L5r,
  MCn: () => MCn,
  N5r: () => N5r,
  U5r: () => U5r,
  W5r: () => W5r,
  a3o: () => a3o,
  aLa: () => aLa,
  bgt: () => bgt,
  c3o: () => c3o,
  cXt: () => cXt,
  cZs: () => cZs,
  d3o: () => d3o,
  i3o: () => i3o,
  iLa: () => iLa,
  l3o: () => l3o,
  lLa: () => lLa,
  o3o: () => o3o,
  qGl: () => qGl,
  s3o: () => s3o,
  u3o: () => u3o,
  wDt: () => wDt
});
module.exports = __toCommonJS(chunk_z2c6pmpw_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_q2404y26 = require("/$bunfs/root/chunk-q2404y26.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_0ha8wex8 = require("/$bunfs/root/chunk-0ha8wex8.js");
var import_chunk_59mwkeke = require("/$bunfs/root/chunk-59mwkeke.js");
var import_chunk_wgyw76w5 = require("/$bunfs/root/chunk-wgyw76w5.js");
var import_chunk_m20gh621 = require("/$bunfs/root/chunk-m20gh621.js");
var import_chunk_bz1f2qnq = require("/$bunfs/root/chunk-bz1f2qnq.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_0w2wb7gk = require("/$bunfs/root/chunk-0w2wb7gk.js");
var import_chunk_1ea72zr6 = require("/$bunfs/root/chunk-1ea72zr6.js");
var import_chunk_7f901c6t = require("/$bunfs/root/chunk-7f901c6t.js");
var import_chunk_zwfq7wpn = require("/$bunfs/root/chunk-zwfq7wpn.js");
var import_chunk_thj6vbn4 = require("/$bunfs/root/chunk-thj6vbn4.js");
var import_chunk_5zps0wmn = require("/$bunfs/root/chunk-5zps0wmn.js");
var import_chunk_tjdnrbvx = require("/$bunfs/root/chunk-tjdnrbvx.js");
var import_chunk_mjq4pbxz = require("/$bunfs/root/chunk-mjq4pbxz.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var import_crypto = require("crypto");
var K = (e, o) => o ? { drop: o.resultText ?? "blocked by a UserPromptSubmit hook" } : { text: e };
var ICn = (e, o = "UserPromptSubmit") => (0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: [...e], hookName: o, toolUseID: `hook-${(0, import_crypto.randomUUID)()}`, hookEvent: "UserPromptSubmit" });
var N = true;
var MCn = (e, o) => ({ messages: [{ ...(0, import_chunk_bzyb60p0.Pt)(e, "warning", void 0, N), promptSubmitEnding: { ending: o, promptKept: false } }], shouldQuery: false, resultText: e });
function X(e, o, r) {
  return r === true ? e : `${e}

Original prompt: ${o}`;
}
var HCn = { wasCancelled: true };
var D = (e) => e.wasCancelled === true && (e.blocked === void 0 || e.stopped !== void 0);
var A = (e, o, r) => D(e) ? HCn : { ended: o, stopped: e.stopped, text: r, wasCancelled: e.wasCancelled };
var q = () => MCn("Prompt blocked: the UserPromptSubmit hooks did not run over the submitted text.", { kind: "no_verdict", noVerdictKind: "hooks_never_ran" });
function Y(e) {
  let o = e.origin;
  return o?.kind === "plugin" && o.asUser !== true ? (0, import_chunk_bzyb60p0.YMn)(e.text, o.name, { midTurn: false }) : e.text;
}
var ee = (e, o, r) => ({ proceeds: { text: e, sessionTitle: o, ...r !== void 0 && r.length > 0 && { context: r } } });
var j = (e, o) => ({ ...e, ...o?.length && { context: o } });
var je = (e, o, r) => !e ? { ended: q() } : e.blocked ? j(A(e, e.blocked, o.text), o.context) : { ...ee(Y(o), r, o.context), wasCancelled: e.wasCancelled };
var te = (e) => e.aborted;
function oe(e) {
  return e && (e.attachment.type !== "hook_success" || e.attachment.content) ? e : void 0;
}
var re = "the turn was interrupted while the prompt was checked";
var ne = (e) => e instanceof import_chunk_jv7av99m.wp;
var Ke = (e, o) => (0, import_chunk_wgyw76w5.di)(e) === (0, import_chunk_wgyw76w5.di)(o?.made);
var F = (e, o) => e || te(o);
var se = "the prompt did not go through prompt.submit (a command, bash mode, an input that did not query, or a failed pass)";
var KGl = (e, o) => e.plugins !== o.plugins;
function ie() {
  let e = /* @__PURE__ */ new WeakMap(), o = 0;
  return { of: (r) => {
    let n = e.get(r);
    if (n === void 0) o += 1, n = o, e.set(r, n);
    return n;
  } };
}
var pe = ie();
function v() {
  let e = (0, import_chunk_m20gh621.dFn)("prompt.submit");
  return e.length === 0 ? "" : JSON.stringify([pe.of(import_chunk_m20gh621.VUt.plugins()), e.map((r) => [r.plugin, r.generation])]);
}
var o3o = (e, o) => ({ ...(0, import_chunk_bzyb60p0.Pt)(e, "warning", void 0, N), promptSubmitEnding: { ending: o, promptKept: true } });
var me = (e) => e === void 0 ? import_chunk_0ha8wex8.Sct : `${import_chunk_0ha8wex8.Sct}: ${e}`;
var s3o = (e) => (0, import_chunk_bzyb60p0.Me)({ content: e, isMeta: true });
var ue = (e, o, r) => ({ blocked: e, stopped: o, ...r && { wasCancelled: true } });
var ae = (e, o) => (0, import_chunk_bzyb60p0.zJr)({ promptSource: e ?? "sdk", wakeupSource: o });
function de(e, o) {
  return e.message?.type === "attachment" && e.message.attachment.type === "hook_cancelled" && e.message.attachment.timedOut !== true && o.aborted;
}
async function i3o({ text: e, typed: o, context: r, result: n, promptSource: s, wakeupSource: l, composerEnter: m, tiers: b }) {
  let d, c = r.abortController.signal.aborted, U = (0, import_chunk_thj6vbn4.h6)();
  try {
    for await (let i of (0, import_chunk_bzyb60p0.gtn)(e, (0, import_chunk_bz1f2qnq.Z)(r).mode, r, ae(s, l), b, { enteredAs: s, composerEnter: m })) {
      if (i.message?.type === "progress") continue;
      if (de(i, r.abortController.signal)) c = true;
      if (i.blockingError) {
        let u = F(c, r.abortController.signal), p = i.suppressOriginalPrompt === true || o !== e || (0, import_chunk_thj6vbn4.K2)(U) || (0, import_chunk_thj6vbn4.kDt)({ isRunReached: false }), f = i.blockingError.promptEnding;
        return { blocked: MCn(X((0, import_chunk_bzyb60p0.UBe)(i.blockingError), e, p), f !== void 0 && "noVerdict" in f ? { kind: "no_verdict", noVerdictKind: f.noVerdict, ...(0, import_chunk_bzyb60p0.Vur)(f.reason) } : { kind: "blocked_by_hook", ...(0, import_chunk_bzyb60p0.Vur)(f?.reason) }), ...u && { wasCancelled: true } };
      }
      if (i.preventContinuation) {
        let u = me(i.stopReason);
        return n.messages = [...n.messages, s3o(u), o3o(u, { kind: "stopped_by_hook", ...(0, import_chunk_bzyb60p0.Vur)(i.stopReason) })], n.shouldQuery = false, n.resultText = u, n.allowedTools = void 0, ue(n, u, F(c, r.abortController.signal));
      }
      if (i.sessionTitle) d = i.sessionTitle;
      let k = i.additionalContexts;
      if (k !== void 0 && k.length > 0) n.messages = [...n.messages, ICn(k)];
      let y = oe(i.message);
      if (y) n.messages = [...n.messages, y];
    }
  } catch (i) {
    let P = (0, import_chunk_mjq4pbxz.zjn)(i, r.abortController.signal), k = !ne(i);
    if (!P) throw i;
    (0, import_chunk_w578pjby.t)(k ? "UserPromptSubmit hooks cancelled (interrupted while a hook ran)" : "UserPromptSubmit hooks cancelled (control stream closed)");
  }
  return F(c, r.abortController.signal) ? { sessionTitle: d, wasCancelled: true } : { sessionTitle: d };
}
var le = (e) => ({ ...e, messages: [...e.messages], allowedTools: e.allowedTools && [...e.allowedTools] });
var cZs = (e) => (0, import_chunk_bzyb60p0.zro)(e) !== "" || v() !== "";
var a3o = () => (0, import_chunk_865at33z.ce)().loadedModules.some((e) => !(0, import_chunk_1ea72zr6.$6)(e.args.pluginStorageId) && (0, import_chunk_59mwkeke.hu)(e) && (e.hooks("prompt.submit") || e.hooks("classic.UserPromptSubmit")));
var ut = (e) => e === void 0 || e.hooks !== "" || ["prompt.submit", "classic.UserPromptSubmit"].some((o) => (0, import_chunk_m20gh621.dFn)(o).some((r) => r.tier !== "builtin"));
var wDt = (e) => ({ permissionMode: (0, import_chunk_bz1f2qnq.Z)(e).mode, hooks: (0, import_chunk_bzyb60p0.zro)(e), plugins: v(), hooksSkippedByTrust: (0, import_chunk_bzyb60p0.sG)() });
function D5r(e, { latch: o }) {
  let r, n = false;
  return () => {
    if (n || o && r) return r;
    try {
      r = wDt(e());
    } catch (s) {
      r = void 0, n = o, (0, import_chunk_w578pjby.t)(`could not read what screens a prompt now: ${s}`, { level: "error" });
    }
    return r;
  };
}
var L5r = (e, o) => e.hooks !== o.hooks || e.hooksSkippedByTrust !== o.hooksSkippedByTrust || e.plugins !== o.plugins || e.permissionMode !== o.permissionMode && o.hooks !== "";
var fe = (e, o) => ({ scratch: e, blocked: o.blocked, sessionTitle: o.sessionTitle, stopped: o.stopped, wasCancelled: o.wasCancelled });
function xt({ typed: e, result: o, context: r, promptSource: n, wakeupSource: s, composerEnter: l }) {
  let m, b, d = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Set();
  async function U(u, p) {
    let f = p.managedHooksExcluded === true, R = le(f ? b?.scratch ?? o : o), g = fe(R, await i3o({ text: u, typed: e, context: r, result: R, promptSource: n, wakeupSource: s, composerEnter: l, tiers: p }));
    return d.delete(u), d.set(u, g), g;
  }
  function i(u, p) {
    let f = U(u, p);
    return c.add(f), f.finally(() => c.delete(f));
  }
  async function P() {
    while (c.size > 0) await Promise.allSettled([...c]);
  }
  function k() {
    let [u, p] = [...d].at(-1) ?? [];
    return p?.blocked !== void 0 && p.stopped === void 0 ? u : void 0;
  }
  async function _(u) {
    let p = await i(u, import_chunk_bzyb60p0.YNt);
    return b = p, m = p.sessionTitle ?? m, p;
  }
  function y(u) {
    let p = d.get(u);
    if (!p) return;
    return o.messages = p.scratch.messages, o.allowedTools = p.scratch.allowedTools, o.shouldQuery = p.scratch.shouldQuery, o.resultText = p.scratch.resultText, m = p.sessionTitle ?? m, p;
  }
  return { managed: _, pass: i, commit: y, settled: P, blockedText: k, managedRun: () => b, sessionTitle: () => m };
}
var ge = ({ submission: e, attachments: o, origin: r, turnId: n, shouldWait: s }) => ({ text: e.text, wait: s, ...o.length > 0 && { attachments: o }, origin: r, ...n !== void 0 && { turnId: n }, ...e.command !== void 0 && { command: e.command }, ...e.isMeta === true && { isMeta: e.isMeta } });
function qGl(e) {
  let o = false;
  return { origin: e?.origin, settle(r) {
    o = true, e?.settle(r);
  }, settleWhen(r) {
    o = true, r.then((n) => e?.settle(n), () => e?.settle({ drop: se }));
  }, [Symbol.dispose]() {
    if (!o) o = true, e?.settle({ drop: se });
  } };
}
function xe(e, o) {
  let r = (0, import_chunk_5zps0wmn.Qi)("prompt.submit");
  return !e || !r ? Promise.resolve() : e(o);
}
function ye(e, o) {
  let r = new Set(o ?? []);
  for (let n of e.toSorted((s, l) => l.index - s.index)) {
    let s = n.returned, l = (0, import_chunk_ma3kja9f.T)(s) ? s.context : void 0, m = ((0, import_chunk_0w2wb7gk.R4)(l) ?? []).filter((d) => !r.has(d));
    if (m.length === 0) continue;
    for (let d of m) r.add(d);
    let b = m.reduce((d, c) => d + c.length, 0);
    (0, import_chunk_w578pjby.t)(`prompt.submit: ${n.plugin} put ${m.length} context ${m.length === 1 ? "entry" : "entries"} (${b} characters) on its result after next(); not attached, the prompt had entered`, { level: "warn" });
  }
}
async function N5r({ submission: e, origin: o, bridgeOrigin: r, mode: n, turnId: s, shouldWait: l, context: m, result: b, promptSource: d, wakeupSource: c, composerEnter: U, queued: i, isStartInput: P, enter: k, bound: _ }) {
  if (!P) await import_chunk_q2404y26.BSe.get();
  _?.();
  let { signal: y } = m.abortController, u = D5r(() => m, { latch: false }), p = () => ut(u()) || a3o(), f = p(), R = () => f || p();
  if (f && y.aborted) return i?.settle({ drop: re }), HCn;
  let g = xt({ typed: e.text, result: b, context: m, promptSource: d, wakeupSource: c, composerEnter: U }), B = (0, import_chunk_bzyb60p0.car)(import_chunk_bzyb60p0.fXo), { unplaceable: w } = e, H = (0, import_chunk_bzyb60p0.n6l)(async (a, x) => {
    if (w !== void 0 && a !== e.text) return { drop: w };
    let h = await (x.managedHooksOnly ? g.managed(a) : g.pass(a, x));
    if (D(h) && R()) throw (0, import_chunk_0w2wb7gk._Ge)(y);
    return K(a, h.blocked);
  }, B.perform), L, M = await (0, import_chunk_mjq4pbxz.Mun)((0, import_chunk_bzyb60p0.dar)(B, (0, import_chunk_7f901c6t.nKl)((0, import_chunk_7f901c6t.Zki)(e.input, e.pastedContents), m.modelFacts.model, (a) => (0, import_chunk_bzyb60p0.men)({ signal: y, origin: i?.origin, core: { "prompt.submit": H.core }, managed: { "prompt.submit": H.managed }, trace: (x) => {
    if (L) ye(x, L.context);
  } }).prompt.submit(ge({ submission: e, attachments: a, origin: (0, import_chunk_bzyb60p0.GGa)({ origin: o, bridgeOrigin: r, wakeupSource: c, mode: n, promptSource: d }), turnId: s, shouldWait: l })))), y);
  if (M === void 0) {
    await g.settled();
    let a = g.blockedText(), x = a === void 0 ? void 0 : g.commit(a), I = x?.blocked, h = a !== void 0 && x !== void 0 && I !== void 0;
    return (0, import_chunk_w578pjby.t)("prompt.submit: interrupted while a hook checked the prompt: " + (h ? "the block given beneath it stands" : "no verdict")), i?.settle(h ? K(a, I) : { drop: re }), h ? j(A(x, I, a), H.arrivedContext()) : HCn;
  }
  if (M.arrived) {
    let a = M.arrived;
    if (L = a, a.text !== e.text) (0, import_chunk_w578pjby.t)(`prompt.submit: text rewritten by a hook (${e.text.length} -> ${a.text.length} chars)`);
    let x = je(g.commit(a.text), a, g.sessionTitle()), h = x.wasCancelled === true && R() && x.proceeds ? HCn : x, J = xe(k, h);
    return i?.settleWhen(J.then(() => a)), J.then(() => B.done(a), (Pe) => B.failed(Pe)), h;
  }
  let C = M.answered, S = H.runs.last(), G = (0, import_chunk_bzyb60p0.e6l)(C, S?.made);
  (0, import_chunk_w578pjby.t)(`prompt.submit: dropped (${G.drop})`), i?.settle(G);
  let V = g.managedRun();
  if (V?.blocked) return g.commit(e.text), A(V, V.blocked, e.text);
  if (w !== void 0 && S?.made.drop === w) return { ended: MCn(w, { kind: "no_verdict", noVerdictKind: "rewrite_unplaceable" }) };
  let E = S ? g.commit(S.input) : void 0, Q = E?.blocked, he = C.drop !== void 0 && S !== void 0 && !Ke(C, S), Se = H.arrivedContext();
  if (S !== void 0 && E !== void 0 && Q !== void 0 && !he) return j(A(E, Q, S.input), Se);
  if (y.aborted && (E?.blocked === void 0 || D(E)) && R()) return HCn;
  let z = C.drop !== void 0;
  return { ended: MCn(z ? `Prompt dropped by a hook: ${(0, import_chunk_bzyb60p0.rFt)(C.drop)}` : `Prompt not submitted: ${import_chunk_bzyb60p0.fXo}`, z ? { kind: "dropped_by_hook", ...(0, import_chunk_bzyb60p0.Vur)(C.drop) } : { kind: "not_passed_on" }) };
}
function bgt() {
  return (0, import_chunk_zwfq7wpn._R)() && !(0, import_chunk_f9x2f6cx.Hn)();
}
function wt(e, o) {
  if (!e) return "idle-fork";
  return o ? "defer-then-fork" : "abort-then-fork";
}
function Ht(e) {
  let { inFlight: o } = e;
  if (e.isBg) return { ok: true, via: "detach", inFlight: o };
  if (!e.fleetEnabled) return { ok: false, reason: "fleet-disabled", inFlight: o };
  if (e.isRemote) return { ok: false, reason: "remote", inFlight: o };
  if (e.persistenceDisabled) return { ok: false, reason: "persistence", inFlight: o };
  if (e.isExternalLoading) return { ok: false, reason: "loading", inFlight: o };
  return { ok: true, via: wt(e.isLoading, e.betweenCalls), inFlight: o };
}
function F5r(e, o) {
  return !o && !Et(e);
}
function Et(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "assistant") return r.message?.stop_reason === null;
    if (r.type === "user") return false;
  }
  return false;
}
function l3o(e) {
  let o = 0;
  for (let r = e.length - 1; r >= 0; r--) {
    let n = e[r];
    if (n.type === "assistant") {
      if (n.message?.stop_reason !== null) return o;
      for (let s of n.message?.content ?? []) if (s.type === "text" && typeof s.text === "string") o += s.text.length;
    } else if (n.type === "user") return o;
  }
  return o;
}
function d3o(e, o) {
  let r = e.length;
  for (let s = e.length - 1; s >= 0; s--) {
    let l = e[s];
    if (l.type === "assistant") {
      if (l.message?.stop_reason !== null) break;
      r = s;
    } else if (l.type === "user") break;
  }
  let n = "";
  for (let s = r; s < e.length; s++) {
    let l = e[s];
    if (l.type !== "assistant") continue;
    for (let m of l.message?.content ?? []) if (m.type === "text" && typeof m.text === "string") n += m.text;
  }
  return n + (o ?? "");
}
function $5r(e) {
  let o, r = false;
  return (n) => {
    if (r) return true;
    try {
      return o ??= wDt(e()), L5r(n.under, o);
    } catch (s) {
      return r = true, (0, import_chunk_w578pjby.t)(`heldScreening could not read the screening: ${s}`, { level: "error" }), true;
    }
  };
}
function c3o(e, o) {
  let r = 0;
  for (let n of e) {
    if ((0, import_chunk_tjdnrbvx.Rcn)(n)) continue;
    if (n.priority === "later" || n.drainOnly === true || n.screeningPending === true || n.answeredPost !== void 0 || n.promptSubmitted !== void 0 && o !== void 0 && o(n.promptSubmitted) || n.mode === "bash" || n.mode === "poll-event" || (0, import_chunk_tjdnrbvx.wg)(n.value) && !n.skipSlashCommands) r++;
  }
  return r;
}
function iLa(e) {
  return `Still backgrounding after the current tool \u2014 waiting for ${e} running ${(0, import_chunk_7cfjrnwy.O)(e, "subagent")} so the work carries over. Press \u2190 again to skip ahead and restart ${e === 1 ? "it" : "them"} from the beginning.`;
}
function Fnr(e, o) {
  return `Backgrounding cancelled \u2014 ${e}.${o === void 0 ? "" : ` ${o}`}`;
}
var U5r = Fnr("you have unsent text in the input", "Send it or clear it, then press \u2190 again."), aLa = "Still backgrounding after the current tool \u2014 a question is waiting for your answer.", u3o = Fnr("the turn was stopped");
function ke(e) {
  if (e.type !== "user") return false;
  let o = e.message?.content;
  return Array.isArray(o) && o[0]?.type === "tool_result" && o.every((r) => r.type === "tool_result" || r.type === "text" || r.type === "image");
}
function Ot(e) {
  if (e.type === "system") return true;
  if (e.type === "assistant") {
    if (e.isApiErrorMessage === true) return false;
    let o = e.message?.stop_reason;
    return o === null || o === "tool_use";
  }
  if (e.type === "user") return (0, import_chunk_0ha8wex8.rg)(e);
  return false;
}
function cXt(e) {
  let o = e.length, r = false;
  while (o > 0) {
    let s = e[o - 1];
    if (s.type === "user") if ((0, import_chunk_0ha8wex8.rg)(s)) r ||= ke(s);
    else if (r && ke(s)) ;
    else break;
    else if (s.type === "assistant") {
      if (!Ot(s)) break;
      r = false;
    }
    o--;
  }
  let n = e.slice(o).filter((s) => s.type !== "user" && s.type !== "assistant" && s.type !== "system");
  if (o + n.length === e.length) return e;
  return [...e.slice(0, o), ...n];
}
function $nr(e) {
  let o = cXt(e);
  for (let r = o.length - 1; r >= 0; r--) {
    let n = o[r].type;
    if (n === "user" || n === "assistant") return o[r].uuid;
  }
  return;
}
function lLa(e, o) {
  if (e === null || e.length < 1 || e.length > o.length) return false;
  let r = e.length - 1;
  if (o[r]?.uuid !== e.uuid) return false;
  for (let n = e.length; n < o.length; n++) {
    let s = o[n].type;
    if (s === "user" || s === "assistant") return false;
  }
  return true;
}
function B5r(e) {
  for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    if (r.type === "user") return !(0, import_chunk_0ha8wex8.rg)(r);
    if (r.type === "assistant") return false;
  }
  return false;
}
function W5r(e) {
  return e.ok && e.via !== "detach";
}
function DCn(e) {
  return Ht({ ...e, fleetEnabled: (0, import_chunk_zwfq7wpn._R)(), isRemote: (0, import_chunk_f9x2f6cx.Hn)(), persistenceDisabled: (0, import_chunk_bzyb60p0.El)() });
}
