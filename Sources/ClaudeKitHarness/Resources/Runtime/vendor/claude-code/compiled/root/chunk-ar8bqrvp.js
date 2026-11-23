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
var chunk_ar8bqrvp_exports = {};
__export(chunk_ar8bqrvp_exports, {
  UUs: () => UUs
});
module.exports = __toCommonJS(chunk_ar8bqrvp_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_hr2stdq7 = require("/$bunfs/root/chunk-hr2stdq7.js");
var import_chunk_nhpsytqr = require("/$bunfs/root/chunk-nhpsytqr.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_mvszxaxb = require("/$bunfs/root/chunk-mvszxaxb.js");
var import_chunk_bagkgwh8 = require("/$bunfs/root/chunk-bagkgwh8.js");
var import_chunk_43cax88x = require("/$bunfs/root/chunk-43cax88x.js");
var import_chunk_8jqz7q9z = require("/$bunfs/root/chunk-8jqz7q9z.js");
var import_chunk_dwxd9se5 = require("/$bunfs/root/chunk-dwxd9se5.js");
var import_chunk_4eswazsj = require("/$bunfs/root/chunk-4eswazsj.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var I = Object.prototype, j = I.hasOwnProperty, H = (0, import_chunk_6mfepmbb.vKn)(function(t, s, e) {
  if (j.call(t, e)) t[e].push(s);
  else (0, import_chunk_4eswazsj.nse)(t, e, [s]);
}), S = H;
var q = 500, k = 200, W = 30, L = 36e5, U = /* @__PURE__ */ new Set(["rate-limited", "hop-loop", "hop-runaway"]), T = /* @__PURE__ */ new Set(["held", "released", "shown", "expired", "denied", "refused", "unverified", "queue_full"]);
function UUs({ clock: t, transcript: s, queue: e, wakesIdleSession: n = () => true, hidesFoldedNotices: a = false }) {
  {
    let o = A(), r = new C(), u = () => {
      let d = o;
      o = A();
      for (let l of ["held", "denied", "expired", "delivered", "refused"]) {
        let i = d[l];
        if (i.length === 0) continue;
        let h = i.length;
        s.apply({ type: "append", messages: [(0, import_chunk_bzyb60p0.Pt)(`Cross-session ${h === 1 ? "message" : `messages (${h})`} ${Q(l)}${w(i)}. ${B(l)}`, "warning")] }), e.enqueue(y(V(l, h, v(i)), r.take(l, i, n()), a));
      }
      if (d.dropped.length > 0) {
        let l = d.dropped.flatMap((p) => p.sends), i = l.length, h = X(d.dropped.map((p) => p.dropReason));
        s.apply({ type: "append", messages: [(0, import_chunk_bzyb60p0.Pt)(`Cross-session ${i === 1 ? "message was" : `messages (${i}) were`} dropped at the recipient session's inbox${w(l)} and not delivered${h ? ` \u2014 ${h}` : ""}. Claude was told not to resend right away.`, "warning")] });
        let g = d.dropped.filter((p) => !U.has(p.dropReason)).flatMap((p) => p.sends);
        e.enqueue(y(K(i, v(l), h), r.take("dropped", g, n()), a));
      }
      for (let l of Object.values(S(d.remote, (i) => `${i.outcome} ${i.stillStored} ${i.earlierDrops.length > 0}`))) {
        let { outcome: i, stillStored: h, earlierDrops: g } = l[0], p = { outcome: i, stillStored: h, stillWatched: l.some((m) => m.stillWatched), afterDrop: g.length > 0 }, R = l.map((m) => m.sent);
        s.apply({ type: "append", messages: [(0, import_chunk_bzyb60p0.Pt)(Y(p, R), "warning")] });
        let b = l.filter((m) => m.mayWake && T.has(i) && (!p.afterDrop || i === "released" || i === "shown") && m.earlierDrops.every((N) => T.has(N))).map((m) => m.sent);
        e.enqueue(y(F(p, R), b.length > 0 && r.take(i, b, n()), a));
      }
    }, c = null, f = () => {
      c?.(), c = t.setTimeout(() => {
        c = null, u();
      }, q);
    };
    return (0, import_chunk_bagkgwh8.mzo)((d) => {
      if (d.status === "dropped") {
        if (o.dropped.length < k) o.dropped.push(d);
      } else if (d.status === "remote") o.remote.push(d);
      else if (o[d.status].length < k) o[d.status].push(d.sent);
      f();
    }), () => {
      (0, import_chunk_bagkgwh8.mzo)(null), c?.(), c = null;
    };
  }
  return () => {
  };
}
function A() {
  return { held: [], denied: [], expired: [], delivered: [], refused: [], dropped: [], remote: [] };
}
class C {
  wokeAt = [];
  take(t, s, e) {
    if (!(0, import_chunk_8jqz7q9z.v0t)()) return e;
    let { wokeForHold: n } = (0, import_chunk_mvszxaxb.Zo)().receipts;
    if (["delivered", "released", "shown"].includes(t)) s.forEach((r) => n.delete(r.to));
    if ((0, import_chunk_8jqz7q9z.Isr)() === "always") return e && s.length > 0;
    let a = s.filter((r) => t !== "held" || !n.has(r.to)), o = Date.now();
    if (this.wokeAt = this.wokeAt.filter((r) => o - r < L), !e || a.length === 0 || this.wokeAt.length >= W) return false;
    if (this.wokeAt.push(o), t === "held") a.forEach((r) => n.add(r.to));
    return true;
  }
}
function D(t) {
  return (0, import_chunk_xfj2cwfv.WNe)(t.to) ? t.to : "";
}
function w(t) {
  let s = /* @__PURE__ */ new Map();
  for (let o of t) if (!s.get(o.to)?.handle) s.set(o.to, o);
  let e = [...s.values()], n = (0, import_chunk_dwxd9se5.Obe)(e, (o) => o.handle ?? ""), a = E(e.map((o) => {
    let r = D(o);
    if (!o.handle) return r;
    return n[o.handle] === 1 || r === "" ? `@${o.handle}` : `@${o.handle} at ${r}`;
  }));
  return a === "" ? "" : ` (${a})`;
}
function v(t) {
  let s = E(t.map(D));
  return ` (${s === "" ? "" : `${s}; `}msg_id: ${_(t.map((e) => e.msgId), 5)})`;
}
function E(t) {
  let s = (0, import_chunk_4smdap7r.M)(t.filter((e) => e !== ""));
  return s.length === 0 ? "" : `${(0, import_chunk_7cfjrnwy.O)(s.length, "recipient")}: ${_(s, 3)}`;
}
function _(t, s) {
  return `${t.slice(0, s).join(", ")}${t.length > s ? ", \u2026" : ""}`;
}
function Q(t) {
  switch (t) {
    case "held":
      return "held by the receiving session";
    case "denied":
      return "denied";
    case "expired":
      return "expired without approval";
    case "delivered":
      return "released after approval";
    case "refused":
      return "refused";
  }
}
function B(t) {
  switch (t) {
    case "held":
      return "Claude in that session hasn't seen it. The usual cause is that the two sessions are in different permission modes: a terminal session then asks for approval there, but the desktop app and non-interactive sessions can't ask, so there the message expires undelivered unless the modes come to match. A session can also be set to hold every message.";
    case "denied":
      return "The recipient's user declined it; it was not delivered.";
    case "expired":
      return "It was never approved, so it wasn't delivered and nothing is waiting in that session. Claude was told.";
    case "delivered":
      return "It was approved and released to that session (final delivery is up to their queue).";
    case "refused":
      return "That session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them); it was not delivered.";
  }
}
function V(t, s, e) {
  let n = s === 1 ? "Your message to another session" : `${s} of your messages to another session`, a = s === 1 ? "was" : "were", o = s === 1 ? "it" : "them";
  switch (t) {
    case "held":
      return `${import_chunk_43cax88x.XMt} ${n} ${a} held by that session${e}. NOT delivered: its Claude has not seen ${o}. Do not report ${o} as delivered, do not wait for a reply, and do not resend while held. The usual cause is that the two sessions run in different permission modes: a terminal session then asks its user to approve, but a Claude Desktop or non-interactive session cannot ask, so there the hold expires undelivered unless the modes come to match. A session can also be set to hold every message. Another notice follows on release, denial or expiry. Tell your user what is held and why, or choose another approach.`;
    case "denied":
      return `${import_chunk_43cax88x.XMt} ${n} ${a} denied by the recipient user${e}. Not delivered to that session's Claude. Do not wait for a reply; continue, or choose another approach.`;
    case "expired":
      return `${import_chunk_43cax88x.XMt} ${n} ${a} not approved before expiry${e}. Not delivered to that session's Claude, and nothing is waiting there. Do not wait for a reply, and do not resend unprompted: while the two sessions' permission modes differ a resend is only held again. Tell your user what was not delivered and why; send ${o} again, edited if that helps, when they ask.`;
    case "delivered":
      return `${import_chunk_43cax88x.XMt} ${n} ${a} approved and released to that session${e}.`;
    case "refused":
      return `${import_chunk_43cax88x.XMt} ${n} ${a} refused${e}: that session is not accepting cross-session messages (the feature is off there, or a setting or policy there refuses them). Not delivered to that session's Claude. Do not wait for a reply and do not resend; tell the user, or choose another approach.`;
  }
}
function X(t) {
  return (0, import_chunk_4smdap7r.M)(t.map((e) => {
    switch (e) {
      case "rate-limited":
        return "you sent faster than that session accepts";
      case "duplicate":
        return "it repeated your previous message";
      case "hop-loop":
      case "hop-runaway":
        return "a relay loop between sessions was cut";
      case "queue-full":
        return "its queue of undelivered peer messages was full";
      case void 0:
        return "";
    }
  })).filter((e) => e !== "").join("; ");
}
function K(t, s, e) {
  let n = t === 1 ? "one of your messages to another session was" : `${t} of your messages to another session were`;
  return `${import_chunk_43cax88x.XMt} Do not resend now: ${n} dropped at that session's inbox${s} and NOT delivered${e ? ` (${e})` : ""}. Treat them as unsent. If the content still matters, fold it into ONE later message after you have finished other work; never retry in a loop.`;
}
function P({ outcome: t, afterDrop: s }, e) {
  switch (t) {
    case "held":
      return `it is holding ${e}`;
    case "released":
      return s ? `it has now accepted ${e}` : `it is no longer holding ${e}`;
    case "shown":
      return `its Claude has now been given ${e}`;
    case "expired":
      return `nobody approved ${e} in time`;
    case "denied":
      return `its user declined ${e}`;
    case "refused":
      return "it does not accept cross-session messages (the feature is off there, or a setting or policy refuses them)";
    case "unverified":
      return "it takes messages only from verified devices, and could not verify the sending device";
    case "rate_limited":
      return "messages came faster than it accepts";
    case "duplicate":
      return "it had just received the same text from this session";
    case "loop":
      return "it cut a relay loop between sessions";
    case "queue_full":
      return "its queue of waiting messages was full";
    case "other":
      return `it dropped ${e}`;
  }
}
var x = "The usual cause is that the two sessions are in different permission modes; a session can also be set to hold every message. A terminal session asks its user for approval. A cloud session or the desktop app may show nothing to approve: then it takes a change to that session's permission mode or its crossSessionInbound setting, which is for its user to decide.";
function Y(t, s) {
  let { outcome: e, stillStored: n, afterDrop: a } = t, o = s.length === 1, r = `Cross-session ${o ? "message" : `messages (${s.length})`}`, u = `${w(s)}: that session reports that ${P(t, o ? "it" : "them")}.`;
  if (e === "held") return `${r} held${u} ${x}`;
  if (e === "released" || e === "shown") return `${r} ${!a ? "released" : e === "shown" ? "delivered after all" : "accepted after all"}${u}`;
  return `${r} not delivered${u}${n || a ? ` That session ${n ? "may still" : "will not"} take ${o ? "it" : "them"} after a restart.` : ""}`;
}
function F(t, s) {
  let { outcome: e, stillStored: n, stillWatched: a, afterDrop: o } = t, r = s.length === 1 ? "it" : "them", u = `${import_chunk_43cax88x.XMt} ${s.length === 1 ? "Your message" : `${s.length} of your messages`} to a cloud or Remote Control session${v(s)}: that session reports that ${P(t, r)}.${o ? ` This replaces every earlier notice about ${r}.` : ""}`;
  if (e === "released" || e === "shown") return o ? `${u} Tell your user if the same work was also done another way.` : u;
  if (e === "held") return `${u} NOT delivered: do not report ${r} as delivered, do not wait for a reply, and do not resend while held. ${x} If that session's mode or setting comes to accept ${r}, the held copy can still be delivered, at once or when that session next restarts: do not resend then, and warn your user that the same work done another way may happen twice. Another notice follows only if that session reports a release or a drop within a day of the send, while this session is still running. Tell your user what is held and why, or choose another approach.`;
  let c = a ? "Another notice follows only if that session reports a change within a day of the send, while this session is still running." : "No further notice follows.";
  if (e === "duplicate") return `${u} It dropped this repeat, which does not show what became of the earlier copy. Do not resend unless the latest notice about the earlier copy said that it was not delivered, and named no way for it to be delivered later.${n ? " That session may still take the repeat after a restart." : ""}${a ? ` ${c}` : ""}`;
  let f = n ? `Do not resend, even once that session accepts messages again: it may still take ${r} after a restart. Warn your user that a copy, or the same work done another way, may happen twice.` : e === "rate_limited" || e === "queue_full" ? "Do not resend now. If the content still matters, fold it into ONE later message after you have finished other work." : "Nothing is waiting there to approve. Do not resend unless your user asks: the same message is likely to meet the same end.", d = o && !n ? ` That session will not take ${r} after a restart either.` : "";
  return `${u} NOT delivered; do not wait for a reply.${d} ${f} ${c} Tell your user, or choose another approach.`;
}
function y(t, s, e) {
  let n = { agentId: (0, import_chunk_f9x2f6cx.ot)(), skipSlashCommands: true, isMeta: true };
  if (s) return { ...n, mode: "prompt", value: t, priority: e ? "next" : "later" };
  return e ? { ...n, mode: "prompt", value: t, passive: true, priority: "next" } : { ...n, mode: "task-notification", value: (0, import_chunk_nhpsytqr.Ni)({ body: `
${(0, import_chunk_hr2stdq7.sn)(t)}` }), skipAttachments: true, passive: true, priority: "next" };
}
