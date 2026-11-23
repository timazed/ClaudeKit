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
var chunk_kgg1has5_exports = {};
__export(chunk_kgg1has5_exports, {
  $7l: () => $7l,
  LGl: () => LGl,
  U7l: () => U7l,
  cMa: () => cMa,
  cXs: () => cXs,
  dXs: () => dXs,
  lXs: () => lXs,
  uXs: () => uXs
});
module.exports = __toCommonJS(chunk_kgg1has5_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_p51r1nb3 = require("/$bunfs/root/chunk-p51r1nb3.js");
var import_chunk_mvbpsqbk = require("/$bunfs/root/chunk-mvbpsqbk.js");
var import_chunk_6d4w1614 = require("/$bunfs/root/chunk-6d4w1614.js");
var import_chunk_91y93gf1 = require("/$bunfs/root/chunk-91y93gf1.js");
var import_chunk_02pvhny0 = require("/$bunfs/root/chunk-02pvhny0.js");
var import_chunk_6hz903p5 = require("/$bunfs/root/chunk-6hz903p5.js");
var import_chunk_208y07t1 = require("/$bunfs/root/chunk-208y07t1.js");
var import_chunk_v6cdm8tp = require("/$bunfs/root/chunk-v6cdm8tp.js");
var z = 1e3, Q = 200, w = { armable: /* @__PURE__ */ new Set(), yielded: /* @__PURE__ */ new Set(), undo: () => {
} };
async function Z() {
  let n = (await (0, import_chunk_p51r1nb3.Iyr)()).find((r) => r.pid === process.pid);
  return n === void 0 ? void 0 : { sessionId: n.sessionId, tmux: n.tmux };
}
async function $7l(e) {
  let n = await ee(e).finally(() => e.claim?.end());
  if (n.kind === "took_over") (0, import_chunk_cqa9hrgx.u)("artifact_live_subscribe", { took_over: true, holders: e.holders.length, armable_count: n.armable.size, yielded_count: n.yielded.size });
  else (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", `takeover_${n.kind}`, { holders: e.holders.length });
  return n;
}
async function ee(e) {
  if (!(0, import_chunk_znn7ks07.Hl)()) return { ...w, kind: "messaging_off" };
  let n = (0, import_chunk_p51r1nb3.ybe)();
  if (n === void 0 || e.holders.length === 0) return { ...w, kind: "no_inbox" };
  let r = (0, import_chunk_865at33z.GN)(n), a = e.transport?.ownRecord ?? Z, s = await a().catch(() => {
    return;
  });
  if (s?.sessionId !== e.conversationId) {
    let o = e.transport?.timers ?? import_chunk_mvbpsqbk.A4r;
    await new Promise((d) => void o.setTimeout(d, Q)), s = await a().catch(() => {
      return;
    });
  }
  if (s?.sessionId !== e.conversationId) return { ...w, kind: "registry_stale" };
  let c = s.tmux;
  if (e.holdersIncomplete === true && !e.alreadyReplying) return { ...w, kind: "holder_unreachable" };
  let m = e.slugs.filter((o) => !(e.claim?.lost.has(o) ?? false)).slice(0, import_chunk_mvbpsqbk.ftr);
  if (m.length === 0) return { ...w, kind: "nothing_freed" };
  let h = [];
  for (let o of e.holders) {
    if (o.sock === void 0 || o.sock === "" || !(o.peerFeatures?.includes(import_chunk_865at33z.zxs) ?? false) || (0, import_chunk_865at33z.GN)(o.sock) === r || (0, import_chunk_91y93gf1.b4r)(o.kind)) {
      if (e.alreadyReplying) continue;
      return { ...w, kind: "holder_unreachable" };
    }
    h.push({ sock: o.sock, pid: o.pid });
  }
  if (h.length === 0) return { ...w, kind: "holder_unreachable" };
  let f = e.transport?.send ?? import_chunk_p51r1nb3.gFn, p = e.transport?.sendControl ?? import_chunk_p51r1nb3.okt, I = e.transport?.timers ?? import_chunk_mvbpsqbk.A4r, T = e.transport?.now ?? Date.now, G = (0, import_chunk_xfj2cwfv.Ode)(n), Y = (o) => (0, import_chunk_cg8dqz0a.x)() !== "windows" ? { expectPeerPid: o } : {}, v = [], D = /* @__PURE__ */ new Set(), { wakes: b, autoReact: X, durable: V } = (0, import_chunk_0rkwgmhx.se)(), W = (o) => {
    for (let d of o.yielded) {
      let i = b.takenFrom.get(d) ?? [];
      if (!i.some((g) => g.msgId === o.msgId)) b.takenFrom.set(d, [...i, { sock: o.sock, pid: o.pid, msgId: o.msgId }]);
      if (e.alreadyReplying && (X.userDisarmed || V.stopLatches.isStopped(d) || (0, import_chunk_208y07t1.pE)(d) && !(0, import_chunk_208y07t1.Uv)(d))) cMa(d, p);
    }
  }, U = e.claim?.sentAt ?? T(), A = (o, d, i) => {
    let g = i?.precautionary !== void 0 ? [...i.precautionary] : [...o.yielded].filter((y) => d === void 0 || d.has(y));
    if (g.length === 0) return;
    for (let y of g) o.yielded.delete(y);
    (0, import_chunk_cqa9hrgx.u)("artifact_live_subscribe", { [i?.precautionary !== void 0 ? "takeover_unyield_precautionary" : "takeover_handed_back"]: g.length });
    let _ = { action: "unyield_artifact_replies", orig_msg_id: o.msgId, slugs: g, ...i?.stopped === true && { stopped: true } };
    p(o.sock, _, Y(o.pid)).catch((y) => {
      if ((0, import_chunk_w578pjby.t)(`[reply-yield] unyield to ${(0, import_chunk_p51r1nb3.Uk)(o.sock)} failed: ${(0, import_chunk_p51r1nb3.XQ)(String(y))}`), (0, import_chunk_p51r1nb3.vpe)(y) && !(0, import_chunk_v6cdm8tp.Rd)(o.pid)) {
        (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "unyield_holder_gone");
        return;
      }
      let k = () => void p(o.sock, _, Y(o.pid)).catch(() => {
        (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "unyield_send_failed");
      });
      if ((0, import_chunk_p51r1nb3.vpe)(y)) I.setTimeout(k, z);
      else k();
    });
  }, N = [];
  for (let o of h) {
    let d = (0, import_chunk_mvszxaxb.Sbe)(), i = { sock: o.sock, pid: o.pid, msgId: d.msg_id, yielded: /* @__PURE__ */ new Set() };
    v.push(i);
    let g = (0, import_chunk_mvbpsqbk.WMa)(d.msg_id, m, { sentAt: U, expectPid: o.pid, ...e.transport?.timeoutMs !== void 0 && { timeoutMs: e.transport.timeoutMs }, ...e.transport?.timers !== void 0 && { timers: e.transport.timers }, onLate: (_) => {
      if (_.kind !== "yielded") return;
      for (let k of _.yielded) i.yielded.add(k);
      let y = new Map([...e.claim?.lost ?? [], ..._.lostTo]);
      A(i, new Set([...i.yielded].filter((k) => y.has(k) ? q(k, i, y, e.alreadyReplying === true) : !e.alreadyReplying && !D.has(k)))), W(i);
    } });
    N.push((async () => {
      try {
        await f(o.sock, { action: "yield_artifact_replies", from: G, session_id: e.conversationId, slugs: m, reason: e.reason, sent_at: T(), claimed_at: U, requester: { cwd: (0, import_chunk_f9x2f6cx.Te)(), ...c !== void 0 && { tmux: c } } }, d, Y(o.pid));
      } catch (_) {
        if ((0, import_chunk_p51r1nb3.vpe)(_)) {
          let y = (0, import_chunk_mvbpsqbk.GMa)(d.msg_id), k = y.map(([J]) => J);
          return (0, import_chunk_v6cdm8tp.Rd)(o.pid) ? { kind: "unreachable", lost: k, lostTo: y } : { kind: "gone", lost: k, lostTo: y };
        }
      }
      return g;
    })());
  }
  let B = await Promise.all(N), P = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), O = /* @__PURE__ */ new Map(), S = new Map(e.claim?.lost ?? []), C = true, K = false, F = 0;
  B.forEach((o, d) => {
    for (let [i, g] of o.lostTo) S.set(i, g);
    if (o.kind === "gone") return;
    if (F++, o.kind === "unreachable") {
      C = false;
      return;
    }
    if (o.kind === "yielded") {
      for (let i of o.yielded) v[d].yielded.add(i), P.set(i, (P.get(i) ?? 0) + 1);
      for (let i of o.notHeld) L.set(i, (L.get(i) ?? 0) + 1);
      for (let i of /* @__PURE__ */ new Set([...o.yielded, ...o.notHeld])) O.set(i, (O.get(i) ?? 0) + 1);
    } else if (C = false, o.kind === "refused") K = true;
  });
  let R = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  if (C && !K) for (let o of m) {
    if (S.has(o) || (O.get(o) ?? 0) !== F) continue;
    if ((P.get(o) ?? 0) > 0) R.add(o), M.add(o);
    else if ((L.get(o) ?? 0) === F) R.add(o);
  }
  for (let o of R) D.add(o);
  if (e.alreadyReplying) {
    for (let o of v) for (let d of o.yielded) if (!S.has(d)) M.add(d);
  }
  for (let o of v) {
    let d = new Set([...o.yielded].filter((i) => S.has(i) ? q(i, o, S, e.alreadyReplying === true) : !e.alreadyReplying && !R.has(i)));
    if (d.size > 0) A(o, d);
  }
  if (!e.alreadyReplying) B.forEach((o, d) => {
    if (o.kind === "timeout") A(v[d], void 0, { precautionary: m });
  });
  for (let o of v) W(o);
  return { armable: R, yielded: M, kind: R.size > 0 ? "took_over" : "nothing_freed", undo: (o) => {
    for (let i of v) A(i, o);
    let d = new Set(v.map((i) => i.msgId));
    for (let i of o ?? m) {
      let g = (b.takenFrom.get(i) ?? []).filter((_) => !d.has(_.msgId));
      if (g.length > 0) b.takenFrom.set(i, g);
      else b.takenFrom.delete(i);
    }
  } };
}
function q(e, n, r, a) {
  let s = r.get(e);
  return s !== void 0 && s === (0, import_chunk_xfj2cwfv.Ode)(n.sock) || !a && !(0, import_chunk_208y07t1.CY)(e);
}
function cMa(e, n = import_chunk_p51r1nb3.okt) {
  j(e, true, n);
}
function LGl(e) {
  j(e, false, import_chunk_p51r1nb3.okt);
}
function j(e, n, r) {
  let { wakes: a } = (0, import_chunk_0rkwgmhx.se)(), s = a.takenFrom.get(e);
  if (s === void 0 || (0, import_chunk_208y07t1.CY)(e)) return;
  a.takenFrom.delete(e);
  for (let c of s) {
    let m = { action: "unyield_artifact_replies", orig_msg_id: c.msgId, slugs: [e], ...n && { stopped: true } }, h = (0, import_chunk_cg8dqz0a.x)() !== "windows" ? { expectPeerPid: c.pid } : {};
    r(c.sock, m, h).catch((f) => {
      if ((0, import_chunk_w578pjby.t)(`[reply-yield] release to ${(0, import_chunk_p51r1nb3.Uk)(c.sock)} failed: ${(0, import_chunk_p51r1nb3.XQ)(String(f))}`), (0, import_chunk_p51r1nb3.vpe)(f) && !(0, import_chunk_v6cdm8tp.Rd)(c.pid)) return;
      let p = () => void r(c.sock, m, h).catch(() => {
        (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "takeover_release_failed");
      });
      if ((0, import_chunk_p51r1nb3.vpe)(f)) import_chunk_mvbpsqbk.A4r.setTimeout(p, z);
      else p();
    });
  }
  (0, import_chunk_cqa9hrgx.u)("artifact_live_subscribe", { [n ? "takeover_stop_notified" : "takeover_released"]: s.length });
}
function H(e) {
  let n = e.slice(0, 2), r = e.length - n.length;
  return `${n.join(", ")}${r > 0 ? ` and ${r} more` : ""}`;
}
function lXs(e, n, r, a) {
  let s = (0, import_chunk_91y93gf1._Xs)({ kind: "interactive", ...typeof r.cwd === "string" && { cwd: r.cwd }, ...typeof r.tmux === "string" && { tmux: r.tmux } }, a), c = n === "resume" ? `the session that just resumed this conversation in ${s}` : `another session of this conversation (${s}), which just published or resumed them there`;
  return `Automatic replies to comments on ${H(e)} moved to ${c}; this session keeps watching for new versions only. To take them back here, publish the Artifact again or ask Claude to resume its replies.`;
}
function dXs(e) {
  return `Automatic replies to comments on ${H(e)} are back in this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).`;
}
function cXs(e) {
  return `Automatic replies to comments on ${H(e)} were stopped in the other session of this conversation, so they stay off here too. To turn them back on, publish the Artifact again or ask Claude to resume its replies.`;
}
var te = "Automatic replies to comments on the Artifact(s) this session was answering moved to another session of this same conversation on this machine, at its request; this session keeps its version watch only. Nothing to do \u2014 do not stop or re-arm a watch on your own; a publish the user asks for here takes them back.", oe = "The automatic comment replies this session had handed to another session of this conversation were stopped by the user there; they stay stopped here too. Nothing to do unless the user asks to resume them or to publish again.", ne = "The automatic comment replies are back with this session: the other session of this conversation did not keep them (it could not take them over, or it has since exited).";
function U7l(e, n) {
  let r = e === "yielded" ? `Comment replies on ${n} Artifact(s) moved to another session of this conversation` : e === "reverted" ? `Comment replies on ${n} Artifact(s) are back with this session` : `Comment replies on ${n} Artifact(s) were stopped in the other session`, a = e === "yielded" ? te : e === "reverted" ? ne : oe;
  (0, import_chunk_bzyb60p0.Vl)({ value: (0, import_chunk_nhpsytqr.Ni)({ taskType: import_chunk_k449cc64.h2, summary: (0, import_chunk_hr2stdq7.sn)(r), body: `
<event>${(0, import_chunk_hr2stdq7.sn)(a)}</event>` }), mode: "task-notification", passive: true, priority: "next", origin: { kind: "task-notification", source: import_chunk_k449cc64.h2 }, agentId: (0, import_chunk_f9x2f6cx.ot)() });
}
function uXs(e) {
  return (0, import_chunk_mvbpsqbk.EXs)((n) => {
    let r = ie(n.slugs, n.msgId), a = r.newlyYielded;
    if (a.length > 0) (0, import_chunk_cqa9hrgx.u)("artifact_comments_autoreact", { yielded_to_other_session: a.length });
    return { yielded: r.yielded, notHeld: r.notHeld, ...a.length > 0 && { onDelivered: () => {
      let s = a.filter((c) => (0, import_chunk_208y07t1.CY)(c));
      for (let c of s) (0, import_chunk_208y07t1.wDa)(c);
      if (s.length > 0) e.yielded(s, n.reason, n.requester);
    } } };
  }, (n, r, a) => {
    for (let p of r) if (a?.stopped?.has(p) ?? false) (0, import_chunk_208y07t1.TDa)(p, n);
    let s = new Set(r.filter((p) => (0, import_chunk_208y07t1.CDa)(p))), c = new Set(r.filter((p) => (0, import_chunk_208y07t1.kDa)(p))), m = re(n, r), h = m.filter((p) => c.has(p) && !(0, import_chunk_208y07t1.pE)(p) && E(p) && !(a?.transferring?.has(p) ?? false));
    if (h.length > 0) e.reverted(h);
    let f = m.filter((p) => c.has(p) && s.has(p));
    if (f.length > 0) e.stoppedElsewhere(f);
    return m;
  }), () => (0, import_chunk_mvbpsqbk.EXs)(null);
}
function ie(e, n) {
  let { live: r, autoReact: a, durable: s } = (0, import_chunk_0rkwgmhx.se)(), c = [], m = [], h = [];
  for (let f of e) {
    if ((0, import_chunk_208y07t1.CY)(f)) {
      (0, import_chunk_208y07t1.NJs)(f, n), c.push(f);
      continue;
    }
    let p = E(f), I = (0, import_chunk_208y07t1.Uv)(f) && !(0, import_chunk_208y07t1.itt)(f), T = a.wakeEnabledMemo !== false && !a.userDisarmed && !s.stopLatches.isStopped(f) && (!(0, import_chunk_208y07t1.pE)(f) || I);
    if (!p || !T) {
      m.push(f);
      continue;
    }
    (0, import_chunk_208y07t1.NJs)(f, n), (0, import_chunk_208y07t1.fMe)(f), (0, import_chunk_208y07t1.Utr)(f), (0, import_chunk_208y07t1.u6)(r, f), c.push(f), h.push(f);
  }
  return { yielded: c, notHeld: m, newlyYielded: h };
}
function E(e) {
  let { live: n } = (0, import_chunk_0rkwgmhx.se)(), r = n.supervisors.get(e);
  return r !== void 0 && !r.stopped && r.autoReactWiring !== void 0 || n.inFlightWiredIntent.has(e) || (0, import_chunk_6hz903p5.Zht)().has(e);
}
function re(e, n) {
  let { live: r } = (0, import_chunk_0rkwgmhx.se)(), a = [];
  for (let s of n) {
    if (!(0, import_chunk_208y07t1.EDa)(s, e)) continue;
    if ((0, import_chunk_208y07t1.u6)(r, s), (0, import_chunk_208y07t1.pE)(s) && !(0, import_chunk_208y07t1.Uv)(s)) (0, import_chunk_02pvhny0.A7t)(s), cMa(s);
    a.push(s);
    let c = r.supervisors.get(s);
    if (!(0, import_chunk_208y07t1.pE)(s) && !E(s)) LGl(s);
    let m = (0, import_chunk_208y07t1.Rqe)(s).lastWakeArgs;
    if (!(0, import_chunk_208y07t1.pE)(s) && E(s) && c?.taskId !== void 0 && (0, import_chunk_6d4w1614.sCn)(c.taskId) && m !== null) (0, import_chunk_91y93gf1.W$e)({ ...m, seed: false, confirm: void 0, confirmBase: void 0, confirmAfter: void 0, reentry: void 0, idlePass: void 0, suppressSummonStatus: void 0 });
  }
  if (a.length > 0) (0, import_chunk_cqa9hrgx.u)("artifact_comments_autoreact", { yield_reverted: a.length });
  return a;
}
