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
var chunk_bpagkwz4_exports = {};
__export(chunk_bpagkwz4_exports, {
  Azo: () => Azo,
  Czo: () => Czo,
  D6r: () => D6r,
  H6r: () => H6r,
  M6r: () => M6r,
  PQn: () => PQn,
  RQn: () => RQn,
  Tzo: () => Tzo,
  YMt: () => YMt,
  a3s: () => a3s,
  c3s: () => c3s,
  d3s: () => d3s,
  gvn: () => gvn,
  hvn: () => hvn,
  i3s: () => i3s,
  iRa: () => iRa,
  l3s: () => l3s,
  n3s: () => n3s,
  o3s: () => o3s,
  oYt: () => oYt,
  r3s: () => r3s,
  s3s: () => s3s,
  vzo: () => vzo,
  xQn: () => xQn
});
module.exports = __toCommonJS(chunk_bpagkwz4_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_t39bs2jr = require("/$bunfs/root/chunk-t39bs2jr.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_wtm85h0y = require("/$bunfs/root/chunk-wtm85h0y.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_znn7ks07 = require("/$bunfs/root/chunk-znn7ks07.js");
var import_chunk_x9aavfmb = require("/$bunfs/root/chunk-x9aavfmb.js");
var import_chunk_jgsh7w3m = require("/$bunfs/root/chunk-jgsh7w3m.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function oYt(e, n, s) {
  let i = (0, import_chunk_865at33z.$s)(n);
  e((r) => {
    let a = Object.hasOwn(r.sendMessagePins, i) ? r.sendMessagePins[i] : void 0, o = a !== void 0 && (0, import_chunk_865at33z.Xpn)(a.id) && !(0, import_chunk_865at33z.Xpn)(s.id) && (s.claimedSessionIds ?? []).some((c) => (0, import_chunk_865at33z.Lzn)(c) === a.id) ? a.id : s.id;
    return a?.id === o && a.sock === s.sock ? r : { ...r, sendMessagePins: { ...r.sendMessagePins, [i]: { id: o, name: n, ref: (0, import_chunk_865at33z.S6t)(s.kind, o), ...s.sock !== void 0 && { sock: s.sock } } } };
  });
}
var vzo = "Note: messaging a new session for the first time under a previously used name (was it restarted?)";
function M6r(e, n) {
  return `
A session on this machine now named '${n}' reports '${e}' as one of its former names \u2014 if that is the session you meant, it goes by '${n}' now (a rename, not a stop).`;
}
function iRa(e) {
  return ` A session now named '${e}' reports it as a former name (renamed).`;
}
var n3s = "Note: another live session record on this machine currently claims this session's identity (the same conversation open in two places, or a record impersonating it). This went to the socket confirmed earlier in this conversation; if that is unexpected, check with the user before sending it anything sensitive.", r3s = "Note: this session has restarted since this conversation last reached it (same session, new process). If you were not expecting that, check with the user before sending it anything sensitive.", YMt = "another Claude session on this machine";
function RQn(e, n, s) {
  if (e === void 0) return { message: "", display: "" };
  let i = n && (0, import_chunk_xfj2cwfv.iT)(n) || "an agent in this session";
  return s.oneWay ? { message: "; sent under this session's address, not this agent's", display: ` (sent by ${i}, under this session's name)` } : { message: "; sent under this session's address: any reply will be delivered to this session's main conversation, not to this agent", display: ` (sent by ${i}; replies go to the main conversation)` };
}
function H6r(e) {
  return e === "cloud" ? "a Claude session running in the cloud" : "a Claude session on another machine, over Remote Control";
}
var Tzo = "; accepted by the server for that session, but delivery is not confirmed: no recent listing here shows that it can receive cross-session messages, and an older version cannot", Me = " (accepted by the server; delivery not confirmed)", Ee = "; in that session's inbox, not yet read by its Claude \u2014 a [Cross-session delivery notice] follows if that session holds it (usually a different permission mode) or refuses it", Te = "; in that session's inbox, not yet read by its Claude \u2014 that session may hold it (usually a different permission mode) or refuse it, and with no inbox bound here nothing reports back, so never treat silence as agreement";
function o3s(e) {
  return e ? Ee : Te;
}
var s3s = "; not confirmed read \u2014 that session may hold it (usually a different permission mode) or refuse it, and this route reports nothing back", i3s = " (that session's settings decide delivery; no read receipt)";
function xQn(e) {
  return e ? { message: "; stored for that session, not confirmed read. If it reports within about 10 minutes that it held, refused or dropped the message, a [Cross-session delivery notice] follows. An older version may drop it and report nothing, so silence does not mean agreement", display: " (a notice follows if that session reports holding, refusing or dropping it)" } : { message: s3s, display: i3s };
}
function a3s(e) {
  return e ? { message: Tzo, display: Me } : { message: "", display: "" };
}
function hvn(e) {
  return `${e.alsoListedRemotely ? "; it is also connected via Remote Control" : ""}${e.remoteNamesakeClaimedLocally ? `; a Remote Control or cloud session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? ce : ""}`;
}
function Czo(e, n, s = "live session", i = "delivery") {
  return le(e, `. ${i === "subscription" ? "The subscription" : "This"} went to the one this conversation confirmed; to switch, re-send with that ${s === "agent" ? "agent" : "session"}'s 'name [ref]'${n}.`, s);
}
function Azo(e, n = "live session", s = "delivery") {
  return le(e, `; ${s === "subscription" ? "the subscription" : "this"} went to the one confirmed earlier in this conversation.`, n);
}
function le(e, n, s) {
  let i = e.previouslyPinned ? `
${vzo}` : e.restartedSincePin ? `
${r3s}` : e.identityContested ? `
${n3s}` : "", r = e.sameNamedSiblings ? `
Note: ${e.sameNamedSiblings} other ${(0, import_chunk_7cfjrnwy.O)(e.sameNamedSiblings, `${s} is`, `${s}s are`)} also named '${e.displayName}'${n}` : "";
  return `${i}${r}`;
}
function D6r(e) {
  return `${e.offline ? Le : ""}${e.remoteNamesakeClaimedLocally ? `; another session also named '${e.displayName}' is registered to a session on this machine` : ""}${e.searchTruncated ? ce : ""}`;
}
var Le = "; it is offline right now \u2014 delivery is queued until that machine reconnects";
function l3s(e) {
  return e.localUnavailable && !e.bridgeUnavailable && !e.cloudUnavailable ? "the sessions on this machine could not be listed just now" : e.localUnavailable ? "this machine's and your account's other sessions could not all be checked just now" : "your account's other sessions could not be checked just now";
}
function d3s(e) {
  return `A session on this machine now claims to be '${e}', which was confirmed earlier as a session elsewhere`;
}
var ce = "; your session list could not be checked completely, so a same-named session beyond what was searched would not have been seen", gvn = `
Your session list could not be checked completely, so a session by that name may exist beyond what was searched.`, c3s = "your session list could not be checked completely";
async function PQn(e, n, s, i, r, a) {
  let o = [e, n, s, i, r, a], c = Date.now(), d = await fe(...o);
  if (d.kind !== "not-found" || !(0, import_chunk_znn7ks07.z0e)() || typeof s !== "string" || (0, import_chunk_865at33z.ixo)(n) || d.cloudUnavailable || d.bridgeUnavailable) return d;
  function f() {
    return (0, import_chunk_x9aavfmb.DEi)(e) || (0, import_chunk_bzyb60p0.uar)(e)?.recent === false;
  }
  function b() {
    return (0, import_chunk_4smdap7r.U)([(0, import_chunk_x9aavfmb.Fbt)(e), (0, import_chunk_bzyb60p0.uar)(e)], (C) => C !== void 0);
  }
  let g = b(), R = import_chunk_x9aavfmb.Blo.of(e).rereadAfterMiss;
  if (f() && Math.abs(Date.now() - R.at) >= R.wait) {
    R.at = Date.now();
    let C = (0, import_chunk_x9aavfmb.Nbt)(e, a, "recent");
    R.done = (0, import_chunk_5appeerh.me)(Promise.all([C, (0, import_chunk_bzyb60p0.uar)(e)?.recent === false && (0, import_chunk_x9aavfmb.jmr)(e, a).then(async (I) => {
      let { sessions: A, unavailable: E } = await C;
      if (!I.failed && !(0, import_chunk_x9aavfmb.Arn)(E)) (0, import_chunk_x9aavfmb.v0n)(e, I, (0, import_chunk_x9aavfmb.T0n)(I.rows, A));
    })]), ue);
  } else if (R.at < c - ue) return d;
  if (await R.done, R.wait = f() ? Ue : import_chunk_x9aavfmb.Flo, f() || b() < g) return d;
  let p = await fe(...o);
  return p.kind === "cloud-session" || p.kind === "ambiguous" && !p.cloudUnavailable && !p.bridgeUnavailable ? p : d;
}
var ue = 2e3, Ue = 6e4;
async function fe(e, n, s, i, r, a) {
  await (0, import_chunk_x9aavfmb.Crn)({ refresh: true, credentials: a });
  let o = (0, import_chunk_865at33z.$s)(n), c = (0, import_chunk_wtm85h0y.Nf)(i.teamContext), d = null;
  if ((0, import_chunk_865at33z.ixo)(n)) return { kind: "not-found", closest: [] };
  if (typeof s === "string") {
    if (n === import_chunk_865at33z.cS) return { kind: "main" };
    let h = i.teamContext?.teammates ?? {}, S = Object.entries(h).find(([, k]) => k.name === n), T = (0, import_chunk_mzmcvr6c.tm)(n) ?? (0, import_chunk_mzmcvr6c.tm)(o), y = S || T ? void 0 : i.agentNameRegistry.get(n), w = T ?? y;
    if (w) return Z(i, w, n);
    if (S) return { kind: "mailbox", recipientName: n, memberAgentId: S[0], memberIdentitySource: "team-context" };
    let te = (0, import_chunk_865at33z.yde)(n);
    if (c) {
      if (n === import_chunk_xfj2cwfv.cd) return { kind: "mailbox", recipientName: n };
      if (d = await (0, import_chunk_jgsh7w3m.$k)(c, r), te === null && d !== null) {
        let k = (0, import_chunk_865at33z.y6t)(d, (0, import_chunk_865at33z.cPe)(i)).find((v) => v.name === n);
        if (k !== void 0) return { kind: "mailbox", recipientName: n, memberAgentId: k.agentId, memberIdentitySource: "roster" };
      }
    }
    let Pe = (0, import_chunk_865at33z.cPe)(i), J = Object.entries(h).find(([k, v]) => ((0, import_chunk_865at33z.Jpn)({ name: v.name, agentId: k }, Pe) || !(0, import_chunk_865at33z.GCt)(v.name)) && (0, import_chunk_865at33z.$s)(v.name) === o);
    if (J !== void 0) return { kind: "mailbox", recipientName: J[1].name, memberAgentId: J[0], memberIdentitySource: "team-context" };
    for (let [k, v] of i.agentNameRegistry) if (!(0, import_chunk_865at33z.GCt)(k) && (0, import_chunk_865at33z.$s)(k) === o) return Z(i, v, k);
    let j = te;
    if (j) {
      let [k, v] = await Promise.all([(0, import_chunk_bzyb60p0.UXo)(), (0, import_chunk_x9aavfmb.Nbt)(e, a)]), F = k.sessions, z = await ge(e, i.sendMessagePins, (0, import_chunk_865at33z.$s)(j.name), v, o, (0, import_chunk_bzyb60p0.uar)(e), a), { rows: Q, unavailable: we } = z, x = (0, import_chunk_865at33z.moe)(i, { teamFile: d, sessions: F, cloud: v.sessions, bridge: Q }), L = (0, import_chunk_865at33z.$s)(j.name), oe = (_, K, xe, Ae) => {
        let W = V(_, i);
        return W.kind === "local-session" || W.kind === "cloud-session" ? { ...W, ...ne(W, L, K, { socksMirroredRemotely: ke(F, v, xe), searchTruncated: v.truncated === true || Ae }, i.sendMessagePins) } : W;
      }, re = he(x, L, j.ref);
      if (re) return oe(re, x, Q, z.truncated);
      let ae = we, de = z.truncated;
      if (Q === void 0) {
        let _ = await X(e, v, o, a);
        if (ae = _.unavailable, de = _.truncated, _.rows.length > 0) {
          x = (0, import_chunk_865at33z.moe)(i, { teamFile: d, sessions: F, cloud: v.sessions, bridge: _.rows });
          let K = he(x, L, j.ref);
          if (K) return oe(K, x, _.rows, _.truncated);
        }
      }
      return { ...Y(L, x), ...ve(L, F, x, i.sendMessagePins), ...ye(v, ae, k.unavailable, { remoteTruncated: de }), ...P(i.sendMessagePins, [L], (0, import_chunk_865at33z.Nzn)(F)) };
    }
  }
  if (typeof s !== "string") {
    if (s.type === "shutdown_response") return { kind: "mailbox", recipientName: n };
    if (n !== import_chunk_xfj2cwfv.cd && (0, import_chunk_865at33z.$j)(n)) return Y((0, import_chunk_865at33z.$s)(n), (0, import_chunk_865at33z.moe)(i, { teamFile: null, sessions: [] }), (y) => y.kind === "teammate");
    if (!c) return { kind: "mailbox", recipientName: n };
    if (n === import_chunk_xfj2cwfv.cd) return { kind: "mailbox", recipientName: n };
    let h = Object.entries(i.teamContext?.teammates ?? {}).filter(([y, w]) => (0, import_chunk_865at33z.Jpn)({ name: w.name, agentId: y }, (0, import_chunk_865at33z.cPe)(i)) || !(0, import_chunk_865at33z.GCt)(w.name)), S = h.find(([, y]) => y.name === n);
    if (S) return { kind: "mailbox", recipientName: n, memberAgentId: S[0], memberIdentitySource: "team-context" };
    if (d = await (0, import_chunk_jgsh7w3m.$k)(c, r), (0, import_chunk_865at33z.yde)(n) === null && d !== null) {
      let y = (0, import_chunk_865at33z.y6t)(d, (0, import_chunk_865at33z.cPe)(i)).find((w) => w.name === n);
      if (y !== void 0) return { kind: "mailbox", recipientName: n, memberAgentId: y.agentId, memberIdentitySource: "roster" };
    }
    let T = h.find(([, y]) => (0, import_chunk_865at33z.$s)(y.name) === o);
    if (T !== void 0) return { kind: "mailbox", recipientName: T[1].name, memberAgentId: T[0], memberIdentitySource: "team-context" };
    if ((0, import_chunk_865at33z.yde)(n) === null && d !== null) {
      let y = (0, import_chunk_865at33z.sxo)((0, import_chunk_865at33z.y6t)(d, (0, import_chunk_865at33z.cPe)(i)), n);
      if (y !== void 0) return { kind: "mailbox", recipientName: y.name, displayName: n, memberAgentId: y.agentId, memberIdentitySource: "roster" };
    }
    if (d === null) return { kind: "mailbox", recipientName: n };
    return Y(o, (0, import_chunk_865at33z.moe)(i, { teamFile: d, sessions: [] }), (y) => y.kind === "teammate");
  }
  if (c && d === null) {
    if ((0, import_chunk_865at33z.$j)(n)) return Y(o, (0, import_chunk_865at33z.moe)(i, { teamFile: d, sessions: [] }));
    return { kind: "mailbox", recipientName: n };
  }
  let f = await (0, import_chunk_bzyb60p0.UXo)(), b = f.sessions, g = D(i.sendMessagePins, o), R = g !== "cloud" && g !== "remote-control" && (0, import_chunk_865at33z.moe)(i, { teamFile: null, sessions: b }).byName.get(o)?.filter((h) => h.kind === "session"), p = await (0, import_chunk_x9aavfmb.Nbt)(e, a, !R || R.length === 0 ? void 0 : g === "local" && R.some((h) => ee(i.sendMessagePins[o], h)) ? "repeat-send" : "first-send"), C = await ge(e, i.sendMessagePins, o, p, o, (0, import_chunk_bzyb60p0.uar)(e), a), { rows: I, unavailable: A, truncated: E } = C, ie = (0, import_chunk_865at33z.Nzn)(b), G = () => ({ cloudUnavailable: Re(p.unavailable), cloudOff: p.unavailable === "gate_off", bridgeUnavailable: A, localClaimedRemoteBodies: ie, bridgeSettled: I !== void 0, localUnavailable: f.unavailable, socksMirroredRemotely: ke(b, p, I), searchTruncated: p.truncated === true || E }), N = (0, import_chunk_865at33z.moe)(i, { teamFile: d, sessions: b, cloud: p.sessions, bridge: I }), B = N.byName.get(o)?.length === 1 ? N.byName.get(o)[0] : void 0, Ce = B !== void 0 && g !== void 0 && Object.hasOwn(i.sendMessagePins, o) && ee(i.sendMessagePins[o], B), _e = B !== void 0 && (B.kind === "session" || B.kind === "cloud-session") && g !== "agent" && !Ce;
  if (I === void 0 && _e) {
    let h = await X(e, p, o, a);
    I = h.rows, A = h.unavailable, E = h.truncated, N = (0, import_chunk_865at33z.moe)(i, { teamFile: d, sessions: b, cloud: p.sessions, bridge: h.rows });
  }
  let se = be(N, o, n, i, G());
  if (se) return se;
  if (I === void 0) {
    let h = await X(e, p, o, a);
    if (I = h.rows, A = h.unavailable, E = h.truncated, h.rows.length > 0) {
      N = (0, import_chunk_865at33z.moe)(i, { teamFile: d, sessions: b, cloud: p.sessions, bridge: h.rows });
      let S = be(N, o, n, i, G());
      if (S) return S;
    }
  }
  return $e(N, o, i, G()) ?? { ...Y(o, N), ...ve(o, b, N, i.sendMessagePins), ...ye(p, A, f.unavailable, { remoteTruncated: E }), ...P(i.sendMessagePins, [o], ie) };
}
function De(e, n, s) {
  let i = D(e, n);
  if (i !== "cloud" && i !== "remote-control") return;
  let r = e[n];
  return s.has((0, import_chunk_t39bs2jr.Un)(r.id)) ? r.name : void 0;
}
function Oe(e, n) {
  let s = n[0];
  if (s === void 0 || s.length < 3) return n;
  let i = Object.keys(e).filter((r) => r !== s && r.startsWith(s) && !n.includes(r));
  return i.length === 0 ? n : [...n, ...i];
}
function P(e, n, s) {
  for (let i of Oe(e, n)) {
    let r = De(e, i, s);
    if (r !== void 0) return { pinnedIdentityClaimedLocally: r };
  }
  return {};
}
function D(e, n) {
  let s = Object.hasOwn(e, n) ? e[n] : void 0;
  if (s === void 0) return;
  if ((0, import_chunk_mzmcvr6c.tm)(s.id) !== null) return "agent";
  if (s.id.startsWith("cse_")) return "cloud";
  return (0, import_chunk_t39bs2jr.Un)(s.id) !== s.id ? "remote-control" : "local";
}
async function ge(e, n, s, i, r, a, o) {
  let c = a?.rows;
  if (!Be(n, s, i.sessions, c)) return { rows: c, unavailable: void 0, truncated: a !== void 0 && a.truncated };
  let d = await X(e, i, r, o);
  return { rows: d.unavailable === void 0 || c === void 0 ? d.rows : c, unavailable: d.unavailable, truncated: d.unavailable === void 0 || a === void 0 ? d.truncated : a.truncated };
}
function Be(e, n, s, i) {
  let r = D(e, n);
  if (r !== "remote-control" && r !== "cloud") return false;
  let a = (0, import_chunk_t39bs2jr.Un)(e[n].id);
  if (s.some((o) => (0, import_chunk_t39bs2jr.Un)(o.id) === a)) return false;
  return i === void 0 || !i.some((o) => (0, import_chunk_t39bs2jr.Un)(o.id) === a);
}
function H(e) {
  return { ...e.cloudUnavailable && { cloudUnavailable: e.cloudUnavailable }, ...e.bridgeUnavailable && { bridgeUnavailable: e.bridgeUnavailable }, ...e.localUnavailable && { localUnavailable: true }, ...e.searchTruncated && { searchTruncated: true } };
}
function be(e, n, s, i, r) {
  let a = (0, import_chunk_865at33z.Qpn)(e.byName, n, s);
  if (a) {
    if (a.kind === "ambiguous") {
      let o = e.byName.get(n), c = Ne(i.sendMessagePins, n, o, s, r);
      if (c) return Se(c, o, i, n, e, r);
      let d = P(i.sendMessagePins, [n], r.localClaimedRemoteBodies), f = o[0], b = D(i.sendMessagePins, n);
      if (o.length === 1 && (f.kind === "session" || f.kind === "cloud-session" || f.kind === "bridge-session") && !r.cloudUnavailable && r.bridgeSettled && !r.bridgeUnavailable && !r.localUnavailable && d.pinnedIdentityClaimedLocally === void 0 && b !== "agent" && !(b === "cloud" && r.cloudOff && f.kind === "session") && !f.derivedName) {
        let g = V(f, i);
        if (g.kind === "local-session" || g.kind === "cloud-session") return { ...g, exactUnique: true, ...b !== void 0 && (f.kind === "session" || (0, import_chunk_t39bs2jr.Un)(i.sendMessagePins[n].id) !== (0, import_chunk_t39bs2jr.Un)(f.id)) && { previouslyPinned: true }, ...ne(g, n, e, r, i.sendMessagePins) };
      }
      return { ...q(o, "exact"), ...H(r), ...d };
    }
    return V(a.candidate, i);
  }
  return;
}
function $e(e, n, s, i) {
  if (n.length >= 3) {
    let r = [...e.byName.keys()].filter((a) => a.startsWith(n));
    if (r.length === 1) {
      let a = (0, import_chunk_865at33z.Qpn)(e.byName, r[0]), o = D(s.sendMessagePins, n), c = P(s.sendMessagePins, [n], i.localClaimedRemoteBodies).pinnedIdentityClaimedLocally !== void 0;
      if (o !== void 0 && o !== "agent" || c) {
        let d = e.byName.get(r[0]);
        return (0, import_chunk_cqa9hrgx.l)("send_message_prefix_match", o !== void 0 && o !== "agent" ? "typed_name_pinned" : "prefix_of_claimed_pin"), { ...q(a.kind === "one" ? [a.candidate] : d, "prefix"), ...H(i), ...P(s.sendMessagePins, [n, r[0]], i.localClaimedRemoteBodies) };
      }
      if (a.kind === "ambiguous") {
        let d = e.byName.get(r[0]), f = Ne(s.sendMessagePins, r[0], d, void 0, i, true);
        if (f) return (0, import_chunk_cqa9hrgx.u)("send_message_prefix_match", { input_len: n.length, index_size: e.candidates.length, pinned: 1 }), Se(f, d, s, r[0], e, i);
        if (d.length === 1) (0, import_chunk_cqa9hrgx.l)("send_message_prefix_match", "confirm_required");
        else (0, import_chunk_cqa9hrgx.m)("send_message_prefix_match", "ambiguous_name");
        return { ...q(d, "prefix"), ...H(i), ...P(s.sendMessagePins, [n, r[0]], i.localClaimedRemoteBodies) };
      }
      if (i.cloudUnavailable || i.bridgeUnavailable || i.localUnavailable) return (0, import_chunk_cqa9hrgx.l)("send_message_prefix_match", i.cloudUnavailable || i.bridgeUnavailable ? "remote_unsearched" : "local_unsearched"), { ...q([a.candidate], "prefix"), ...H(i), ...P(s.sendMessagePins, [n, r[0]], i.localClaimedRemoteBodies) };
      return (0, import_chunk_cqa9hrgx.u)("send_message_prefix_match", { input_len: n.length, index_size: e.candidates.length, ...i.searchTruncated && { search_truncated: true } }), V(a.candidate, s);
    }
    if (r.length > 1) return (0, import_chunk_cqa9hrgx.m)("send_message_prefix_match", "ambiguous_prefix"), { ...H(i), ...P(s.sendMessagePins, [n, ...r], i.localClaimedRemoteBodies), ...q(r.flatMap((a) => {
      let o = e.byName.get(a), c = (0, import_chunk_865at33z.Qpn)(e.byName, a);
      return c?.kind === "one" ? [c.candidate] : o;
    }), "prefix") };
  }
  return;
}
function he(e, n, s) {
  let i = e.byName.get(n) ?? [], r = (0, import_chunk_865at33z.Qpn)(e.byName, n);
  return (r?.kind === "one" ? [r.candidate] : i).find((o) => o.ref === s) ?? (r?.kind === "one" || !(0, import_chunk_znn7ks07.z0e)() ? void 0 : e.byTokenOnly.find((o) => o.ref === s && (0, import_chunk_865at33z.$s)(o.name) === n));
}
async function X(e, n, s, i) {
  if ((0, import_chunk_znn7ks07.Hl)()) {
    let r = !(0, import_chunk_x9aavfmb.Arn)(n.unavailable), a = (0, import_chunk_x9aavfmb.jmr)(e, i), o = await (0, import_chunk_5appeerh.me)(a, pe);
    if (o === void 0) {
      if ((0, import_chunk_w578pjby.t)(`[bridge:resolve] "${s}": Remote Control population not ready within ${pe}ms (cold) \u2014 not searched, disclosing a hedge`, { level: "warn" }), r) a.then((d) => (0, import_chunk_x9aavfmb.v0n)(e, d, (0, import_chunk_x9aavfmb.T0n)(d.rows, n.sessions)));
      return { rows: [], unavailable: "timeout", truncated: false };
    }
    if (o.failed || o.identityKey !== null && !(0, import_chunk_x9aavfmb.$lo)(o)) return (0, import_chunk_w578pjby.t)(`[bridge:resolve] "${s}": Remote Control walk ${o.failed ? "failed" : "ran under a previous handle"} (cold) \u2014 not searched, disclosing a hedge`, { level: "warn" }), { rows: [], unavailable: "fetch_failed", truncated: false };
    let c = (0, import_chunk_x9aavfmb.T0n)(o.rows, n.sessions);
    if (r) (0, import_chunk_x9aavfmb.v0n)(e, o, c);
    else (0, import_chunk_x9aavfmb.Ulo)(e, o);
    return (0, import_chunk_w578pjby.t)(`[bridge:resolve] "${s}": ${o.rows.length} Remote Control rows, ${c.length} listed (cold${r ? ", recorded" : ", not recorded \u2014 cloud list failed"})`), { rows: c, unavailable: void 0, truncated: o.truncated === true };
  }
  return { rows: [], unavailable: void 0, truncated: false };
}
function Re(e) {
  return (0, import_chunk_x9aavfmb.Arn)(e) ? e : void 0;
}
function ye(e, n, s, { remoteTruncated: i }) {
  return { cloudUnavailable: Re(e.unavailable), ...n !== void 0 && { bridgeUnavailable: n }, ...s && { localUnavailable: true }, ...(e.truncated === true || i) && { searchTruncated: true } };
}
function Z(e, n, s) {
  let i = e.tasks[n];
  if ((0, import_chunk_4yjj7pjs.An)(i) && !(0, import_chunk_bzyb60p0.xtn)(i)) {
    if (i.status === "running") return { kind: "agent-live", agentId: n, agentName: s };
    if (i.stoppedByUser && !i.sweptByStop) return { kind: "agent-stopped-by-user", agentId: n, agentName: s };
    return { kind: "agent-stopped", agentId: n, status: i.status, agentName: s };
  }
  return { kind: "agent-evicted", agentId: n, agentName: s };
}
function V(e, n) {
  switch (e.kind) {
    case "main":
      return { kind: "main" };
    case "teammate":
      return { kind: "mailbox", recipientName: e.name, memberAgentId: e.id, memberIdentitySource: e.where === "in-process" ? "team-context" : "roster" };
    case "subagent":
      return Z(n, (0, import_chunk_mzmcvr6c.ro)(e.id), e.name);
    case "session":
      return { kind: "local-session", sock: e.sock, pinId: (0, import_chunk_865at33z.TPr)(e), ...e.claimedSessionIds !== void 0 && { claimedSessionIds: e.claimedSessionIds }, displayName: e.name, ...e.hostSessionId !== void 0 && { hostSessionId: e.hostSessionId }, ...e.readByName !== void 0 && { readByName: e.readByName } };
    case "cloud-session":
    case "bridge-session":
      return { kind: "cloud-session", via: e.where === "cloud" ? "cloud" : "remote-control", refKind: e.kind, sessionId: e.id, displayName: e.name, ...e.offline && { offline: true }, ...e.reportsInbound && { reportsInbound: true }, ...e.inboundReportUnavailable && { inboundReportUnavailable: true } };
  }
}
var Ie = 3, pe = 5e3;
function q(e, n) {
  return { kind: "ambiguous", candidates: e.slice(0, Ie), total: e.length, matchedBy: n };
}
function ve(e, n, s, i) {
  if (!(0, import_chunk_865at33z.dPe)()) return {};
  let r = n.filter((f) => (0, import_chunk_865at33z._6t)(f) && f.sessionId !== void 0 && f.formerNames?.some((b) => b.sessionId === f.sessionId && (0, import_chunk_865at33z.$s)(b.name) === e));
  if (r.length !== 1) return {};
  let a = r[0];
  if (n.filter((f) => (0, import_chunk_865at33z._6t)(f) && (0, import_chunk_xfj2cwfv.jNe)(f.sock, a.sock)).length !== 1) return {};
  let c = s.candidates.find((f) => f.kind === "session" && f.sock !== void 0 && (0, import_chunk_xfj2cwfv.wXe)(f.sock, a.sock));
  if (c === void 0 || (0, import_chunk_865at33z.yde)(c.name) !== null || (0, import_chunk_865at33z.$j)(c.name) || (s.byName.get((0, import_chunk_865at33z.$s)(c.name))?.length ?? 0) !== 1) return {};
  let d = Object.hasOwn(i, e) ? i[e] : void 0;
  if (d !== void 0 && d.id !== (0, import_chunk_865at33z.TPr)(c)) return {};
  return { renamedTo: c };
}
function Y(e, n, s) {
  let i = s ? n.candidates.filter(s) : n.candidates, r = (0, import_chunk_4smdap7r.M)(i.map((o) => (0, import_chunk_865at33z.$s)(o.name)));
  return { kind: "not-found", closest: (0, import_chunk_xcgcdx61.age)(e, r, Ie).map((o) => i.find((c) => (0, import_chunk_865at33z.$s)(c.name) === o)) };
}
function Ne(e, n, s, i, r, a = false) {
  let o = Object.hasOwn(e, n) ? e[n] : void 0;
  if (o === void 0) return;
  let c = D(e, n);
  if (c === "agent") return;
  let d = c !== "local";
  if (d && r.localClaimedRemoteBodies.has((0, import_chunk_t39bs2jr.Un)(o.id))) return;
  if (c === "cloud" && r.cloudUnavailable || c === "remote-control" && r.bridgeUnavailable || c === "local" && r.localUnavailable || a && (r.cloudUnavailable || r.bridgeUnavailable || r.localUnavailable)) return;
  let f = s.filter((g) => (d ? g.kind === "cloud-session" || g.kind === "bridge-session" : g.kind === "session") && g.where !== "in-process"), b = f.find((g) => (0, import_chunk_865at33z.TPr)(g) === o.id) ?? f.find((g) => ee(o, g));
  if (b === void 0) {
    if (!(d && r.searchTruncated)) (0, import_chunk_cqa9hrgx.l)("send_message_pin", "stale");
    return;
  }
  if (i !== void 0 && b.name !== i && s.some((g) => g.name === i)) return;
  return (0, import_chunk_cqa9hrgx.u)("send_message_pin"), b;
}
function Se(e, n, s, i, r, a) {
  let o = V(e, s);
  if (o.kind !== "local-session" && o.kind !== "cloud-session") return o;
  let c = Object.hasOwn(s.sendMessagePins, i) ? s.sendMessagePins[i] : void 0, f = o.kind === "local-session" && c !== void 0 && c.id !== o.pinId && c.sock !== void 0 && (0, import_chunk_xfj2cwfv.wXe)(c.sock, o.sock) && (0, import_chunk_865at33z.Xpn)(c.id) && !(0, import_chunk_865at33z.Xpn)(o.pinId) ? { ...o, pinId: c.id, identityContested: true } : o;
  return { ...f, ...n.length > 1 && { sameNamedSiblings: n.length - 1 }, ...ne(f, i, r, a, s.sendMessagePins) };
}
function ke(e, n, s) {
  let i = /* @__PURE__ */ new Set([...n.sessions.map((r) => (0, import_chunk_t39bs2jr.Un)(r.id)), ...(s ?? []).map((r) => (0, import_chunk_t39bs2jr.Un)(r.id))]);
  return new Set(e.flatMap((r) => r.bridgeSessionId !== void 0 && i.has((0, import_chunk_t39bs2jr.Un)(r.bridgeSessionId)) ? [r.sock] : []));
}
function ee(e, n) {
  if ((0, import_chunk_865at33z.TPr)(n) === e.id) return true;
  if (e.sock === void 0 || n.kind !== "session" || n.sock === void 0 || !(0, import_chunk_xfj2cwfv.wXe)(n.sock, e.sock)) return false;
  return !(0, import_chunk_865at33z.Xpn)(e.id) || n.stableId === void 0 && (n.claimedSessionIds ?? []).some((s) => (0, import_chunk_865at33z.Lzn)(s) === e.id);
}
function ne(e, n, s, i, r) {
  let a = Object.hasOwn(r, n) ? r[n] : void 0;
  return { ...e.kind === "local-session" && a?.sock !== void 0 && a.id === e.pinId && !(0, import_chunk_xfj2cwfv.wXe)(a.sock, e.sock) && { restartedSincePin: true }, ...e.kind === "local-session" && i.socksMirroredRemotely.has(e.sock) && { alsoListedRemotely: true }, ...[...s.remoteNamesClaimedLocally.get(n) ?? []].some((o) => e.kind !== "local-session" || o !== e.sock) && { remoteNamesakeClaimedLocally: true }, ...i.searchTruncated && { searchTruncated: true } };
}
