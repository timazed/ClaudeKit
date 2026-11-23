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
var chunk_d1r21263_exports = {};
__export(chunk_d1r21263_exports, {
  $2l: () => $2l,
  $Ea: () => $Ea,
  EGr: () => EGr,
  FEa: () => FEa,
  HVs: () => HVs,
  IVs: () => IVs,
  LEa: () => LEa,
  MVs: () => MVs,
  NEa: () => NEa,
  OVs: () => OVs,
  PVs: () => PVs,
  SGr: () => SGr,
  U2l: () => U2l,
  UEa: () => UEa,
  bGr: () => bGr,
  hEn: () => hEn,
  hJn: () => hJn,
  kGr: () => kGr,
  mEn: () => mEn,
  vGr: () => vGr,
  wGr: () => wGr,
  yGr: () => yGr
});
module.exports = __toCommonJS(chunk_d1r21263_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_r3kja8v6 = require("/$bunfs/root/chunk-r3kja8v6.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_gq1dr8pm = require("/$bunfs/root/chunk-gq1dr8pm.js");
var import_chunk_4x1jja6d = require("/$bunfs/root/chunk-4x1jja6d.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_53snsm3k = require("/$bunfs/root/chunk-53snsm3k.js");
var import_chunk_08bv0y93 = require("/$bunfs/root/chunk-08bv0y93.js");
var import_chunk_xrav2tvh = require("/$bunfs/root/chunk-xrav2tvh.js");
var import_chunk_49zxha55 = require("/$bunfs/root/chunk-49zxha55.js");
var import_chunk_bp9b0hd8 = require("/$bunfs/root/chunk-bp9b0hd8.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var import_crypto = require("crypto");
var import_crypto2 = require("crypto");
var import_crypto3 = require("crypto");
var hJn = {};
(0, import_chunk_w1d7ygsk.jr)(hJn, { createTurnEventTail: () => OVs, default: () => hJn });
var UEa = (e) => import_chunk_bzyb60p0.GUe.has(e);
function mEn({ getAppState: e, setAppState: s }) {
  return { lastWritten: import_chunk_f9x2f6cx.ju, resolvedModel: import_chunk_865at33z.dt, automaticModels() {
    let n = (0, import_chunk_865at33z.N9)();
    return [(0, import_chunk_gq1dr8pm.l8e)()?.fallbackModel, (0, import_chunk_f9x2f6cx.ju)() === n ? n : void 0].filter((o) => o != null);
  }, moveTo(n, o) {
    let u = e();
    if (o.kind === "refusal") {
      if (o.isCyber) (0, import_chunk_f9x2f6cx.mNr)(o.requestId ?? void 0);
      (0, import_chunk_f9x2f6cx.hNr)({ fallbackModel: n, previousOverride: (0, import_chunk_f9x2f6cx.ju)(), previousAppStateModel: u.mainLoopModel, previousModelForSession: u.mainLoopModelForSession, carriedEffort: o.carriedEffort });
    }
    let l = !!u.fastMode;
    try {
      if ((0, import_chunk_865at33z.na)()) l = (0, import_chunk_865at33z.jU)(n, u.fastMode) && (l || o.kind === "refusal" || !o.keepsFastModeOff);
      (0, import_chunk_865at33z.KV)(u.fastMode, l);
    } catch (m) {
      (0, import_chunk_k449cc64.i)(m);
    }
    s((m) => ({ ...m, mainLoopModel: n, mainLoopModelForSession: null, fastMode: l })), (0, import_chunk_f9x2f6cx.Ig)(n);
  } };
}
var G = 72e5, hEn = /* @__PURE__ */ new Set([import_chunk_4x1jja6d.Ac]);
function D(e) {
  return /\S/.test(e);
}
function LEa(e) {
  return e.type === "content_block_delta" && e.delta.type === "text_delta" && D(e.delta.text);
}
function B(e) {
  return !e.isApiErrorMessage && e.message.model !== import_chunk_bp9b0hd8.xs;
}
function yGr(e, s) {
  if (!B(e)) return false;
  let { content: n } = e.message;
  if (typeof n === "string") return D(n);
  return n.some((o) => o.type === "text" && D(o.text) || o.type === "tool_use" && s?.has(o.name) === true);
}
function K(e) {
  return e === "tool_use" || e === "server_tool_use" || e === "mcp_tool_use";
}
function PVs({ queryChainId: e, observesUserWait: s, promptTiming: n, textToolNames: o, now: u = () => performance.now(), schedule: l = (m, y) => {
  let g = setTimeout(m, y);
  return g.unref?.(), () => clearTimeout(g);
} }) {
  let m = u(), y, g = false, _, E = /* @__PURE__ */ new Map(), C = 0, S = 0, p, I = false, F = [], r = l(() => b("cap", void 0), G);
  function M(x, c) {
    try {
      c();
    } catch (T) {
      (0, import_chunk_w578pjby.t)(`tengu_turn_first_text: ${x} failed: ${(0, import_chunk_jv7av99m.d)(T)}`, { level: "error" });
    }
  }
  function k(x, c) {
    let T = 0, h = 0;
    for (let v of F) {
      let w = Math.min(v.toMs ?? c, c) - Math.max(v.fromMs, x);
      if (w > 0) T += w, h += 1;
    }
    return { ms: T, count: h };
  }
  function b(x, c) {
    if (I) return;
    I = true, r();
    let T = y ?? m, h = p?.atMs ?? u(), v = Math.max(0, Math.round(h - T)), w = k(T, h), R = p && E.get(p.messageId), L = R?.toolCallsBefore ?? p?.toolCallsBefore ?? 0;
    try {
      (0, import_chunk_y53wbr8a.a)("tengu_turn_first_text", { first_text_wait_end: (0, import_chunk_78g0060s.f)(p ? "painted" : x), ...p && { ttfvt_first_text_paint_ms: v, first_text_path: (0, import_chunk_78g0060s.f)(L > 0 ? "after_tool_use" : "direct"), requests_before_first_text: R?.order ?? p.order, tool_calls_before_first_text: L, first_text_assistant_message_id: (0, import_chunk_49zxha55.Ce)(p.messageId), first_text_request_id: (0, import_chunk_49zxha55.Ce)(R?.requestId), first_text_render_path: (0, import_chunk_78g0060s.f)(p.renderPath) }, ...s && { user_wait_before_first_text_ms: Math.min(Math.round(w.ms), v), user_waits_before_first_text: w.count }, queryChainId: (0, import_chunk_49zxha55.Ce)(e), terminal_reason: (0, import_chunk_78g0060s.fe)(p ? void 0 : c), ...n && g && y !== void 0 && { prompt_submit_to_send_ms: Math.max(0, Math.round(y - n.submittedAtMs)), prompt_queued_ms: Math.max(0, Math.round(n.dequeuedAtMs - n.submittedAtMs)) } });
    } catch (Q) {
      (0, import_chunk_w578pjby.t)(`tengu_turn_first_text: analytics sink threw, event dropped: ${(0, import_chunk_jv7av99m.d)(Q)}`, { level: "error" });
    }
  }
  function A(x) {
    if (I || !B(x)) return;
    let { message: c, requestId: T } = x, h = E.get(c.id) ?? {};
    if (E.set(c.id, h), h.requestId ??= T ?? void 0, h.order === void 0 && (typeof c.content === "string" || c.content.some((v) => v.type !== "thinking" && v.type !== "redacted_thinking"))) C += 1, h.order = C;
    if (typeof c.content === "string") h.toolCallsBefore ??= S;
    else for (let v of c.content) if (v.type === "text" && D(v.text) || v.type === "tool_use" && o?.has(v.name) === true) h.toolCallsBefore ??= S;
    else if (K(v.type)) S += 1;
    if (p !== void 0 && p.messageId === c.id) b("painted", void 0);
  }
  return { onStreamEvent({ event: x, requestSentAtMs: c }) {
    M("stream event", () => {
      if (I || x.type !== "message_start") return;
      if (y === void 0) y = c ?? m, g = c !== void 0;
      if (p !== void 0 && p.messageId !== x.message.id) {
        b("painted", void 0);
        return;
      }
      _ = x.message.id;
    });
  }, onAssistantMessage(x) {
    M("assistant message", () => A(x));
  }, setUserWaiting(x) {
    M("user wait", () => {
      if (I) return;
      let c = F.at(-1);
      if (x && (c === void 0 || c.toMs !== void 0)) F.push({ fromMs: u(), toMs: void 0 });
      else if (!x && c !== void 0 && c.toMs === void 0) c.toMs = u();
    });
  }, markFirstTextPainted(x, c) {
    M("paint stamp", () => {
      if (I || p) return;
      let T = c ?? _;
      if (T === void 0) return;
      let h = E.get(T);
      if (p = { atMs: u(), messageId: T, order: h?.order ?? C + 1, toolCallsBefore: h?.toolCallsBefore ?? S, renderPath: x }, h) b("painted", void 0);
    });
  }, end(x, c = (0, import_chunk_xrav2tvh.WT)(x)) {
    M("settle", () => b(c ? "interrupted" : "no_text", x));
  } };
}
function NEa({ toolUseContext: e, sessionState: s }) {
  let n = (0, import_crypto.randomUUID)();
  e.queryTracking = { chainId: n, depth: -1 };
  let o = PVs({ queryChainId: n, observesUserWait: s !== void 0, textToolNames: hEn });
  o.setUserWaiting(s?.userDecisionPending ?? false);
  let u = s?.userDecisionPendingChanged.subscribe((l) => o.setUserWaiting(l));
  return { ...o, dispose() {
    u?.();
  } };
}
var V = 10, j = 1e3 / V, H = 3, U = 1e4;
function FEa({ session: e, sessionHooks: s, onStreamingDisplay: n, onStreamingRewrite: o, onMessageDisplay: u, storageV5: l, credentials: m }) {
  let y = (0, import_crypto2.randomUUID)(), g = null;
  function _(r) {
    if (r.abandoned) return;
    if (r.isLive) {
      E(r);
      return;
    }
    if (r.done) u(r.apiMessageId, r.output);
    else n(r.output);
  }
  function E(r) {
    if (!r.isRewritten) return;
    if (!r.done) {
      o({ original: r.raw.slice(0, r.resolvedOffset), text: r.output });
      return;
    }
    if (u(r.apiMessageId, r.output + (0, import_chunk_p1ewvgeh.b_)(r.raw.slice(r.resolvedOffset))), !r.finalized) o(null), n("");
  }
  function C(r, M, k, b, A) {
    r.inFlight++;
    let x = Date.now(), c = (async () => {
      let T = b;
      try {
        for await (let h of (0, import_chunk_bzyb60p0.Wrs)(e, { turnId: r.turnId, messageId: r.messageId, index: M, final: k, delta: b }, s, r.abortController.signal, U, l, m)) {
          if (h.message?.type === "attachment" && (h.message.attachment.type === "hook_non_blocking_error" || h.message.attachment.type === "hook_cancelled")) r.stats.errorCount++;
          if (h.displayContent !== void 0) T = h.displayContent;
        }
      } catch (h) {
        r.stats.errorCount++, (0, import_chunk_w578pjby.t)(`MessageDisplay hook flush ${M} failed; displaying original delta: ${h instanceof Error ? h.message : String(h)}`, { level: "error" });
      } finally {
        let h = Date.now() - x;
        r.stats.totalDurationMs += h, r.stats.maxDurationMs = Math.max(r.stats.maxDurationMs, h), r.inFlight--, S(r);
      }
      return T;
    })();
    r.appendChain = r.appendChain.then(async () => {
      let T = await c;
      r.output += T, r.resolvedOffset = A, r.isRewritten ||= T !== b, _(r);
    });
  }
  function S(r) {
    if (r.abandoned) return;
    if (r.finalized) {
      if (!r.finalDispatched) p(r, true);
      else if (r.inFlight === 0) (0, import_chunk_y53wbr8a.a)("tengu_message_display_hooks", { flushCount: r.index, errorCount: r.stats.errorCount, totalDurationMs: r.stats.totalDurationMs, maxDurationMs: r.stats.maxDurationMs });
      return;
    }
    I(r);
  }
  function p(r, M) {
    if (r.flushTimer !== null) clearTimeout(r.flushTimer), r.flushTimer = null;
    if (r.inFlight >= H) return;
    let k = M ? r.raw.length : r.raw.lastIndexOf(`
`) + 1, b = r.raw.slice(r.flushedOffset, k);
    if (!M && b === "") return;
    if (M) r.finalDispatched = true;
    r.flushedOffset = k, r.lastFlushAt = Date.now();
    let A = r.index;
    r.index++, C(r, A, M, (0, import_chunk_p1ewvgeh.b_)(b), k);
  }
  function I(r) {
    if (r.flushTimer !== null) return;
    if (r.inFlight >= H) return;
    if (r.raw.lastIndexOf(`
`) + 1 <= r.flushedOffset) return;
    let k = Date.now() - r.lastFlushAt;
    if (k >= j) {
      p(r, false);
      return;
    }
    r.flushTimer = setTimeout((b, A) => {
      if (b.flushTimer = null, !b.finalized && !b.abandoned) A(b, false);
    }, j - k, r, p);
  }
  function F(r) {
    if (r.abandoned = true, r.flushTimer !== null) clearTimeout(r.flushTimer), r.flushTimer = null;
    r.abortController.abort();
  }
  return { newTurn() {
    if (g && !g.finalized) F(g);
    g = null, y = (0, import_crypto2.randomUUID)();
  }, begin(r) {
    if (g && !g.finalized) F(g);
    if (o(null), !(0, import_chunk_bzyb60p0.$Be)("MessageDisplay", s, e.id)) {
      g = null, n(null);
      return;
    }
    let M = !(0, import_chunk_bzyb60p0.e0)("MessageDisplay", s, e.id) && !(0, import_chunk_bzyb60p0.Uzl)("MessageDisplay");
    g = { apiMessageId: r, messageId: (0, import_crypto2.randomUUID)(), turnId: y, raw: "", flushedOffset: 0, index: 0, output: "", isLive: M, resolvedOffset: 0, isRewritten: false, appendChain: Promise.resolve(), lastFlushAt: 0, flushTimer: null, inFlight: 0, abortController: new AbortController(), finalized: false, finalDispatched: false, done: false, abandoned: false, stats: { totalDurationMs: 0, maxDurationMs: 0, errorCount: 0 } }, n(M ? null : "");
  }, delta(r) {
    if (g === null || g.finalized) return;
    g.raw += r, I(g);
  }, entryLanded(r) {
    q(import_chunk_bzyb60p0.U4e.of(e), r, "repl");
    let M = g;
    if (M === null || M.apiMessageId !== r.message.id) return;
    if (M.raw === "" || !r.message.content.some((k) => k.type === "text")) return;
    if (M.done = true, _(M), !M.isLive) n("");
  }, finalize() {
    let r = g;
    if (r === null) return;
    if (r.finalized = true, g = null, n(null), o(null), r.raw === "" && r.index === 0) return;
    r.done = true, p(r, true), _(r);
  } };
}
function q(e, s, n) {
  for (let o of s.message.content) {
    let u = o.type === "text" ? { name: "text", source: o.text } : o.type === "thinking" ? { name: "thinking", source: o.thinking } : null;
    if (u === null) continue;
    let l = (0, import_chunk_p1ewvgeh.Byl)(u.source);
    if (l.openTagCount === 0 && l.closeTagCount === 0) continue;
    let m = (0, import_chunk_p1ewvgeh.Wyl)(u.source, (y) => e.citedStatus(y));
    (0, import_chunk_y53wbr8a.a)("tengu_cc_memory_tag_stripped", { surface: (0, import_chunk_78g0060s.f)(u.name), seam: (0, import_chunk_78g0060s.f)(n), open_tag_count: l.openTagCount, close_tag_count: l.closeTagCount, tagged_content_chars: l.taggedContentChars, block_chars: u.source.length, memory_file_count: l.memoryFileCount, missing_filenames_attr: l.missingFilenamesAttr, open_tag_chars_bucket: l.openTagCharsBucket, cited_resolved_count: m.resolved, cited_unknown_count: m.unknown, cited_read_count: m.read, cited_written_count: m.written, cited_injected_body_count: m.injectedBody, cited_surfaced_count: m.surfaced, cited_listed_count: m.listed, request_id: (0, import_chunk_49zxha55.Ce)(s.requestId), messageID: (0, import_chunk_49zxha55.Ce)(s.message.id) });
  }
}
function SGr(e, s) {
  if (Object.keys(e.displayedMessageContent).length === 0) return e;
  let n = /* @__PURE__ */ new Set();
  for (let l of s) if (l.type === "assistant") n.add(l.message.id);
  let o = {}, u = false;
  for (let [l, m] of Object.entries(e.displayedMessageContent)) if (n.has(l)) o[l] = m;
  else u = true;
  if (!u) return e;
  return { ...e, displayedMessageContent: o };
}
async function $Ea(e, s, n, o, u, l, m) {
  q(import_chunk_bzyb60p0.U4e.of(e), s, "sdk");
  let y = (0, import_chunk_p1ewvgeh.VEt)(s.message.content), g = y === s.message.content ? s : { ...s, message: { ...s.message, content: y } }, _ = { message: g, hookOutputApplied: false };
  if (!(0, import_chunk_bzyb60p0.$Be)("MessageDisplay", o, e.id)) return _;
  let E = g.message.content.map((p) => p.type === "text" ? p.text : "").join("");
  if (E === "" || (0, import_chunk_bzyb60p0.OMn)("MessageDisplay", o, e.id)) return _;
  let C;
  try {
    for await (let p of (0, import_chunk_bzyb60p0.Wrs)(e, { turnId: n, messageId: (0, import_crypto2.randomUUID)(), index: 0, final: true, delta: E }, o, u, U, l, m)) if (p.displayContent !== void 0) C = p.displayContent;
  } catch (p) {
    return (0, import_chunk_w578pjby.t)(`MessageDisplay hook failed for completed message; emitting original text: ${p instanceof Error ? p.message : String(p)}`, { level: "error" }), _;
  }
  if (C === void 0) return _;
  let S = true;
  return { hookOutputApplied: true, message: { ...g, message: { ...g.message, content: g.message.content.map((p) => {
    if (p.type !== "text") return p;
    let I = S ? C : "";
    return S = false, (0, import_chunk_p1ewvgeh.FUn)(p, I);
  }) } } };
}
var z = 200, Y = 50;
function bGr(e, s) {
  switch (e.type) {
    case "append":
      return { rows: e.messages, keep: (n) => s({ type: "append", messages: [...n] }) };
    case "append-or-move-by-uuid":
      return { rows: [e.message], keep: (n) => {
        for (let o of n) s({ type: "append-or-move-by-uuid", message: o });
      } };
    case "replace-by-uuid":
      return { rows: [e.message], keep: (n) => {
        for (let o of n) s({ type: "replace-by-uuid", uuid: e.uuid, message: o });
      } };
    case "insert-after-uuid": {
      let n = e.uuid;
      return { rows: e.messages, keep: (o) => {
        s({ type: "insert-after-uuid", uuid: n, messages: [...o] }), n = o.at(-1)?.uuid ?? n;
      } };
    }
    default:
      return;
  }
}
function wGr(e, s) {
  switch (s.type) {
    case "append":
      return s.messages.length === 0 ? e : [...e, ...s.messages];
    case "replace-all":
      return s.messages;
    case "remove-by-uuid": {
      let n = e.findIndex((u) => u.uuid === s.uuid);
      if (n === -1) return e;
      let o = e.slice();
      return o.splice(n, 1), o;
    }
    case "replace-by-uuid": {
      let n = e.findIndex((o) => o.uuid === s.uuid);
      return n === -1 ? [...e, s.message] : e.with(n, s.message);
    }
    case "insert-after-uuid": {
      let n = e.findIndex((u) => u.uuid === s.uuid);
      if (n === -1 || s.messages.length === 0) return e;
      let o = e.slice();
      return o.splice(n + 1, 0, ...s.messages), o;
    }
    case "replace-last-ephemeral-progress": {
      let n = (0, import_chunk_r3kja8v6.ue)() && s.message.data.type === "repl_tool_call" ? 0 : Math.max(0, e.length - z), o = s.message.data;
      for (let u = e.length - 1; u >= n; u--) {
        let l = e[u];
        if (l?.type !== "progress") break;
        let m = l.data;
        if (l.parentToolUseID === s.message.parentToolUseID && m.type === o.type && (!(0, import_chunk_r3kja8v6.ue)() || m.type !== "repl_tool_call" || o.type !== "repl_tool_call" || m.toolUseId === o.toolUseId)) return e.with(u, s.message);
      }
      return (0, import_chunk_r3kja8v6.ue)() ? [...J(e, s.message), s.message] : [...e, s.message];
    }
    case "append-or-move-by-uuid":
      return (0, import_chunk_bzyb60p0.roo)(e, s.message);
    case "remove-uuids-and-append":
      return [...e.filter((n) => !s.excludeUuids.has(n.uuid)), s.message];
    case "update":
      return s.updater(e);
  }
}
function J(e, s) {
  if (s.data.type !== "repl_tool_call") return e;
  let n = 0, o = -1, u = Math.max(0, e.length - z);
  for (let l = e.length - 1; l >= u; l--) {
    let m = e[l];
    if (m?.type !== "progress") break;
    let y = m.data;
    if (m.parentToolUseID === s.parentToolUseID && y.type === "repl_tool_call" && (y.phase === "complete" || y.phase === "error")) n++, o = l;
  }
  return n < Y ? e : e.toSpliced(o, 1);
}
function OVs(e) {
  let s = Promise.resolve(), n = 0, o = 0, u = -1;
  return { enqueue(l, m) {
    let y = n, g = o;
    s = s.then(() => {
      if (g <= u) return (0, import_chunk_w578pjby.t)(`${l}: not dispatched, the tail was severed while it waited behind an event that never settled`), [];
      return m();
    }).then((_) => {
      if (_.length === 0) return;
      if (y !== n) {
        (0, import_chunk_w578pjby.t)(`${l}: ${_.length} note(s) dropped, the conversation was reset while it ran (${y} to ${n})`);
        return;
      }
      e(_);
    }).catch((_) => (0, import_chunk_w578pjby.t)(`${l} failed: ${(0, import_chunk_jv7av99m.d)(_)}`));
  }, reset: () => {
    n += 1;
  }, settled: () => s, sever: () => {
    n += 1, u = o, o += 1, s = Promise.resolve();
  } };
}
function $2l(e) {
  let s = OVs(e);
  return { begin: import_crypto3.randomUUID, enqueue: s.enqueue, settled: s.settled, sever: s.sever };
}
function IVs(e) {
  let { newMessages: s, input: n, signal: o, abort: u } = e, l = s.findLast((p) => p.type === "user" && !p.isMeta), m = l && l.type === "user", y = (m ? (0, import_chunk_bzyb60p0.wu)(l.message.content) : null) ?? n ?? "", g = e.turnEvents.begin(), _ = Promise.withResolvers(), E = (0, import_chunk_bzyb60p0.THe)({ signal: o });
  e.turnEvents.enqueue("turn.start", () => E.turn.start({ text: y, turnId: g }).then(() => []).finally(_.resolve));
  let C = m === true && (0, import_chunk_865at33z.$u)(l.origin), S = s[(0, import_chunk_bzyb60p0.lSe)(s)];
  return (0, import_chunk_bzyb60p0.A6l)({ turnId: g, abort: u, started: _.promise, startedBy: C ? "person" : "automatic", openedAs: S?.type === "user" ? S.turnOrigin : void 0 }), (0, import_chunk_08bv0y93.B2l)(s), g;
}
function U2l(e, s) {
  return import_chunk_bzyb60p0.GUe.prune(e.getCommandQueue()), new Promise((n) => {
    let o = () => import_chunk_bzyb60p0.GUe.isAnyAside() || e.peek((u) => import_chunk_bzyb60p0.GUe.has(u.uuid)) !== void 0;
    if (o()) {
      n();
      return;
    }
    s.addEventListener("abort", e.subscribe(() => {
      if (o()) n();
    }), { once: true });
  });
}
class MVs {
  display;
  config;
  resetAnchor;
  holdsDefault = true;
  constructor(e, s) {
    this.display = e && e.type !== "disabled" ? e.display : void 0, this.config = e, this.resetAnchor = s;
  }
  current() {
    return this.config;
  }
  apply(e, s) {
    if (s !== void 0) this.display = s ?? void 0, (0, import_chunk_f9x2f6cx.e3t)(s !== null);
    if (e === void 0) this.config = vGr(null, this.display, this.config);
    else this.holdsDefault = e === null, this.config = vGr(e, this.display, this.resetAnchor);
  }
  refreshDefault() {
    if (this.holdsDefault) this.config = vGr(null, this.display, this.resetAnchor);
  }
}
var ce = { experimentalBetasOff: P("experimental betas are off (CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS or organization policy)"), model: P("this session's model does not support it on this API provider"), apiRejected: P('the API has already rejected "highlights"') };
function HVs(e) {
  if (e !== "highlights") return;
  let s = ce;
  if ((0, import_chunk_bzyb60p0.Len)((0, import_chunk_865at33z.dt)())) return (0, import_chunk_f9x2f6cx.V3n)() ? { ok: false, error: s.apiRejected } : void 0;
  if ((0, import_chunk_xfj2cwfv.OX)()) return { ok: false, error: s.experimentalBetasOff };
  return { ok: false, error: s.model };
}
function kGr(e, s, n) {
  let o = HVs(n);
  if (!o) return e.apply(s, n);
  if (s === void 0) return o;
  return e.apply(s, void 0) ?? o;
}
var EGr = (e, s) => {
  if (!(0, import_chunk_53snsm3k.hjn)(e)) throw new import_chunk_jv7av99m.gr(import_chunk_53snsm3k.mEs);
  let n = kGr(s.thinkingBudget, e.max_thinking_tokens, e.thinking_display);
  if (n) throw new import_chunk_jv7av99m.gr(n.error, "set_max_thinking_tokens: part of the request refused");
};
function vGr(e, s, n) {
  if (e === null) {
    if (n) return n.type !== "disabled" ? { ...n, display: s } : n;
    return s !== void 0 && (0, import_chunk_865at33z.ahe)() ? { type: "adaptive", display: s } : void 0;
  }
  if (e === 0) return { type: "disabled" };
  return { type: "enabled", budgetTokens: e, display: s };
}
function P(e) {
  return `set_max_thinking_tokens: thinking_display "highlights" was not applied because ${e}; the display stays as it was. max_thinking_tokens was applied if the request carried it. "summarized" and "omitted" are accepted.`;
}
