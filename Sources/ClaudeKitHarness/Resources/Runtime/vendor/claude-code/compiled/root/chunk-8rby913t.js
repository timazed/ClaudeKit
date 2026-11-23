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
var chunk_8rby913t_exports = {};
__export(chunk_8rby913t_exports, {
  J7t: () => J7t,
  JDa: () => JDa,
  Q7l: () => Q7l,
  Q7t: () => Q7t,
  QDa: () => QDa,
  XDa: () => XDa,
  YDa: () => YDa,
  Z7t: () => Z7t,
  ZDa: () => ZDa,
  aQs: () => aQs,
  e0a: () => e0a,
  f4o: () => f4o,
  m4o: () => m4o,
  n0a: () => n0a,
  p4o: () => p4o,
  t0a: () => t0a
});
module.exports = __toCommonJS(chunk_8rby913t_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_kx2fp6pc = require("/$bunfs/root/chunk-kx2fp6pc.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_yz5b8aaa = require("/$bunfs/root/chunk-yz5b8aaa.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_f2dee02n = require("/$bunfs/root/chunk-f2dee02n.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_gvzh3pxp = require("/$bunfs/root/chunk-gvzh3pxp.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_46fskppy = require("/$bunfs/root/chunk-46fskppy.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_rts2v6y0 = require("/$bunfs/root/chunk-rts2v6y0.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_zm3gf7c8 = require("/$bunfs/root/chunk-zm3gf7c8.js");
var import_chunk_1rt0shj8 = require("/$bunfs/root/chunk-1rt0shj8.js");
var import_chunk_aaxjkbk4 = require("/$bunfs/root/chunk-aaxjkbk4.js");
var import_chunk_t2e49pze = require("/$bunfs/root/chunk-t2e49pze.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_ze4kt7fs = require("/$bunfs/root/chunk-ze4kt7fs.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_3f4m74y6 = require("/$bunfs/root/chunk-3f4m74y6.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
function ge() {
  try {
    return (0, import_chunk_865at33z.b)("tengu_violin_scroll", false);
  } catch {
    return false;
  }
}
function q() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
class re {
  #e = /* @__PURE__ */ new WeakMap();
  reinitialize(e) {
    let n = this.#e.get(e);
    if (n) return n;
    let l = q().clearServerCache(e.name, e.config).catch(() => {
    });
    return this.#e.set(e, l), l;
  }
}
var $e = -32e3;
async function Y(e, n, l) {
  let o = await _e(e, n, l);
  if (o.kind !== "session_expired") return he(e, o);
  await n.recovery.reinitialize(o.connection);
  let u = await _e(e, n, l);
  return u.kind === "session_expired" ? { kind: "expired_twice" } : he(e, u);
}
async function he(e, n) {
  if (n.kind === "connect_failed") await q().evictStaleFailedConnectMemoForServe(e.name, e.config).catch(() => {
  });
  return n;
}
async function _e(e, { deadlineAt: n, signal: l, idempotent: o = false }, u) {
  let r = q(), m;
  try {
    m = await r.ensureConnectedClient(e, { signal: l, timeoutMs: Math.max(1, n - Date.now()), context: "remote tool execution" });
  } catch (c) {
    return { kind: "connect_failed", error: c };
  }
  let p = n - Date.now();
  if (p <= 0) return { kind: "connect_failed", error: Error("deadline reached before the request could be sent") };
  try {
    return { kind: "ok", value: await u(m, p) };
  } catch (c) {
    return c instanceof Error && (r.isMcpSessionExpiredError(c) || o && Ve(c, m)) ? { kind: "session_expired", connection: m } : { kind: "failed", error: c };
  }
}
function Ve(e, n) {
  return ("code" in e && e.code === $e && e.message.includes("Connection closed") || (0, import_chunk_jv7av99m.w)(e) === "CONNECTION_CLOSED") && (n.config.type === "http" || n.config.type === "claudeai-proxy");
}
var We = { maxRequestBytes: 4128768, defaultDeadlineMs: 58e3 }, Ke = -32001, Ge = "office_bridge.kind", Ye = "office_bridge.bound_miss", ze = /* @__PURE__ */ new Set(["not_connected", "send_failed", "contested", "unsupported_on_bound"]), Xe = /* @__PURE__ */ new Set(["disconnected", "cancelled"]), Je = /* @__PURE__ */ new Set(["timeout"]), Qe = /not connected|not reachable|offline/i, Ze = /disconnected before responding|connection may be closing/i, en = /did not respond within/i, nn = 200;
function ye(e, n) {
  return { kind: "bridge", limits: We, call: (l, o, u, r) => rn(e, n, l, o, u, r), callPlumbing: (l, o, u) => tn(e, n, l, o, u) };
}
async function tn(e, n, l, o, u) {
  if (!import_chunk_ze4kt7fs.hit.has(l)) throw Error("callPlumbing: not a bridge plumbing tool");
  let r = Date.now(), m = (0, import_chunk_syr33dp2.CZ)(u.deadlineMs), p = await Y(e, { deadlineAt: r + m, recovery: n, signal: u.signal, idempotent: u.idempotent }, (c, _) => (0, import_chunk_gvzh3pxp.Vq)(c, { name: l, arguments: { ...o } }, { signal: u.signal, timeout: _ }));
  if (p.kind === "ok") {
    let c = (0, import_chunk_syr33dp2.Q7)(p.value), _ = ke(c.content), g = c.isError && c.envelope.status === "absent" ? ve(p.value, _, m) : void 0;
    if (g !== void 0) return be(g);
    return { kind: "result", structuredContent: p.value.structuredContent, text: _, isError: c.isError };
  }
  if (u.signal.aborted) return { kind: "cancelled" };
  switch (p.kind) {
    case "connect_failed":
      return { kind: "unreachable", detail: (0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(p.error)) };
    case "expired_twice":
      return { kind: "unreachable", detail: "the device bridge rejected the session again right after re-initializing it; nothing ran" };
    case "failed":
      return be(Se(p.error, m, void 0));
  }
}
function be(e) {
  switch (e.kind) {
    case "timed_out":
    case "unreachable":
    case "dropped":
    case "transport_error":
    case "cancelled":
      return e;
    default:
      return { kind: "transport_error", detail: `unexpected: ${e.kind}` };
  }
}
function on(e) {
  let { envelope: n } = (0, import_chunk_syr33dp2.Q7)(e);
  return n.status === "present" && n.envelope.outcome === "needs_approval";
}
async function rn(e, n, l, o, u, r) {
  let m = Date.now(), p = (0, import_chunk_syr33dp2.CZ)(r.deadlineMs), c = (0, import_chunk_syr33dp2.dwl)(u), _ = await Y(e, { deadlineAt: m + p, recovery: n, signal: r.signal }, (g, v) => (0, import_chunk_gvzh3pxp.Vq)(g, { name: l, arguments: { ...o, [import_chunk_syr33dp2.Mat]: u }, _meta: { [import_chunk_syr33dp2.jdn]: r.toolUseId, ...c !== void 0 && { [import_chunk_syr33dp2.awl]: c } } }, { signal: r.signal, timeout: v }, false, on));
  if (_.kind === "ok") {
    let g = sn(_.value, Date.now() - m, p);
    return g.kind === "result" ? { ...g, metaCopy: c === void 0 ? "omitted" : "attached" } : g;
  }
  if (r.signal.aborted) return { kind: "cancelled" };
  switch (_.kind) {
    case "connect_failed":
      return { kind: "unreachable", detail: (0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(_.error)) };
    case "expired_twice":
      return { kind: "unreachable", detail: "the device bridge rejected the session again right after re-initializing it; nothing ran" };
    case "failed":
      return Se(_.error, p, r.toolUseId);
  }
}
function sn(e, n, l) {
  let o = (0, import_chunk_syr33dp2.Q7)(e);
  switch (o.envelope.status) {
    case "malformed":
      return { kind: "transport_error", detail: "malformed result envelope", unreadableResult: true };
    case "present":
      return { kind: "result", content: o.content, isError: o.isError, envelope: o.envelope.envelope, elapsedMs: n, responseBytes: (0, import_chunk_syr33dp2.pw)(e), ...{} };
    case "absent": {
      let u = o.isError ? ve(e, ke(o.content), l) : void 0;
      if (u) return u;
      return { kind: "result", content: o.content, isError: o.isError, envelope: void 0, elapsedMs: n, responseBytes: (0, import_chunk_syr33dp2.pw)(e) };
    }
  }
}
function ve(e, n, l) {
  let o = an(e);
  if (o !== void 0 && Je.has(o)) return { kind: "timed_out", capMs: l };
  if (o !== void 0 && Xe.has(o)) return { kind: "dropped", detail: `bridge: ${o}` };
  if (o !== void 0 && ze.has(o)) return { kind: "unreachable", detail: `bridge: ${o}`, ...o === "not_connected" && { machineNotAnswering: true } };
  if (o === "malformed_result") return { kind: "transport_error", detail: "bridge: malformed result", unreadableResult: true };
  if (n.length > nn) return;
  if (en.test(n)) return { kind: "timed_out", capMs: l };
  if (Ze.test(n)) return { kind: "dropped", detail: "bridge: disconnected" };
  if (Qe.test(n)) return { kind: "unreachable", detail: "bridge: not connected", machineNotAnswering: true };
  return;
}
function an(e) {
  let n = e !== null && typeof e === "object" && "_meta" in e ? e._meta : void 0;
  if (n === null || typeof n !== "object") return;
  let l = n, o = l[Ge];
  if (typeof o === "string") return o;
  return l[Ye] !== void 0 ? "not_connected" : void 0;
}
function Se(e, n, l) {
  if (we(e) === Ke || (0, import_chunk_jv7av99m.w)(e) === "REQUEST_TIMEOUT") return { kind: "timed_out", capMs: n };
  let o = (0, import_chunk_271xsh6x.Bl)((0, import_chunk_jv7av99m.d)(e));
  if (we(e) === import_chunk_yz5b8aaa.Pke && ln(e, l)) return { kind: "approval_unverified" };
  if ((0, import_chunk_yz5b8aaa.gz)(e) !== "downstream_unreachable") return { kind: "transport_error", detail: o };
  return dn.has((0, import_chunk_jv7av99m.w)(e) ?? "") ? { kind: "unreachable", detail: o } : { kind: "dropped", detail: o };
}
var dn = /* @__PURE__ */ new Set(["ECONNREFUSED", "ConnectionRefused", "ENOTFOUND", "ENETUNREACH", "EAI_AGAIN", "FailedToOpenSocket"]);
function ln(e, n) {
  let l = e !== null && typeof e === "object" && "data" in e ? e.data : void 0;
  if (typeof l !== "object" || l === null) return false;
  let o = l;
  return typeof o.args_sha256 === "string" && typeof o.tool_name === "string" && typeof o.tool_use_id === "string" && n !== void 0 && o.tool_use_id === n;
}
function we(e) {
  return e !== null && typeof e === "object" && "code" in e && typeof e.code === "number" ? e.code : void 0;
}
function ke(e) {
  return typeof e === "string" ? e : e.flatMap((n) => n.type === "text" ? [n.text] : []).join(`
`);
}
var un = "attached-machine";
function Re(e, n, l) {
  let o = n.map((h) => ({ ...h, name: (0, import_chunk_kx2fp6pc.qM)(h.name) })), u = o.filter((h) => import_chunk_ze4kt7fs.UAe.has(h.name)).map((h) => ({ toolName: h.name, meta: mn(h), raw: h._meta?.[import_chunk_syr33dp2._4] })), r = o.filter((h) => !import_chunk_ze4kt7fs.UAe.has(h.name) && (0, import_chunk_rts2v6y0.utt)(h.name) && h._meta?.[import_chunk_rts2v6y0.Pqe] !== void 0), m = r.flatMap((h) => {
    let C = cn(h);
    return C === void 0 ? [] : [{ bridgeName: h.name, marker: C }];
  }), p = new Set(m.map((h) => h.bridgeName)), c = new Set(r.filter((h) => !p.has(h.name)).map((h) => h.name)), _ = c.size, g = (0, import_chunk_4smdap7r.U)(u, (h) => h.meta === void 0), v = new Set(u.map((h) => h.toolName)), T = new Set(o.filter((h) => import_chunk_ze4kt7fs.hit.has(h.name)).map((h) => h.name)), k = new Map(m.map(({ bridgeName: h, marker: C }) => [h, { localName: C.tool }])), P = /* @__PURE__ */ new Set([...u.flatMap((h) => h.meta ? [h.meta.target.name] : []), ...m.map(({ marker: h }) => h.target.name)]), O = o.reduce((h, C) => {
    let K = (0, import_chunk_3f4m74y6.xn)(C.name);
    return h.set(K, (h.get(K) ?? 0) + 1), h;
  }, /* @__PURE__ */ new Map()), A = r.some((h) => (O.get((0, import_chunk_3f4m74y6.xn)(h.name)) ?? 0) > 1), y = P.size > 1 ? "two_names" : v.size < u.length || A ? "duplicate_tool" : void 0;
  if (u.length === 0 && m.length === 0 && _ === 0) return { hosts: [], invalid: y, unreadable: 0, unreadableMarkers: _ };
  let B = u.find((h) => h.meta)?.meta, x = B?.target ?? m[0]?.marker.target, z = B === void 0 ? u.map((h) => h.raw) : [], W = z.map(import_chunk_syr33dp2.cwl).find((h) => h !== void 0), X = z.map(import_chunk_syr33dp2.uwl).find((h) => h !== void 0);
  return { hosts: [{ kind: "remote", source: "bridge", name: x?.name ?? un, status: y === void 0 ? "online" : "offline", enforcement: "self", description: x, servedTools: v, passthroughTools: k, rejectedPassthroughTools: c, plumbingTools: T, protocol: (0, import_chunk_sjqze7qg.Jis)(W !== void 0 ? { kind: "incompatible", announced: W } : (0, import_chunk_syr33dp2.swo)(B?.protocol_versions ?? X ?? (u.length === 0 ? [import_chunk_syr33dp2.Zm] : void 0)), x?.tool_host_interface), transport: ye(e, l) }], invalid: y, unreadable: g, unreadableMarkers: _ };
}
function cn(e) {
  let n = (0, import_chunk_rts2v6y0.dnr)((0, import_chunk_kx2fp6pc.qM)(e._meta?.[import_chunk_rts2v6y0.Pqe]));
  return n !== void 0 && n.tool === (0, import_chunk_px0hhsq7.lr)(...fn(e.name)) && (0, import_chunk_syr33dp2.f9)(n.target.name) ? n : void 0;
}
function fn(e) {
  let n = e.indexOf("__");
  return n < 0 ? ["", e] : [e.slice(0, n), e.slice(n + 2)];
}
function mn(e) {
  let n = (0, import_chunk_syr33dp2.awo)((0, import_chunk_kx2fp6pc.qM)(e._meta?.[import_chunk_syr33dp2._4]));
  return n !== void 0 && n.tool === e.name && (0, import_chunk_syr33dp2.f9)(n.target.name) ? n : void 0;
}
function Te(e, n, l) {
  if (n === void 0 || n.version < import_chunk_46fskppy.D2e.attachedComputerPermissionRequest) return { sentFormat: { kind: "call_envelope", why: "computer_version" } };
  if (l !== "offered") return { sentFormat: { kind: "call_envelope", why: l } };
  if (e.envelopeOnlyFields.readBaseline !== void 0) return { sentFormat: { kind: "call_envelope", why: "carries_read_baseline" } };
  if (e.envelopeOnlyFields.detachedAgent === true) return { sentFormat: { kind: "call_envelope", why: "detached_agent" } };
  let o = (0, import_chunk_zm3gf7c8.r0a)(e);
  return o === void 0 ? { sentFormat: { kind: "call_envelope", why: "request_would_be_refused" } } : { sentFormat: { kind: "shared_request" }, toolHostRequest: o };
}
async function Ce(e, n, l, o, u) {
  if (!import_chunk_ze4kt7fs.hit.has(l)) throw Error("callPlumbing: not a plumbing tool");
  if (u.signal.aborted) return { kind: "cancelled" };
  let r = (0, import_chunk_syr33dp2.CZ)(u.deadlineMs), m = { subtype: "remote_plumbing_call", ...(0, import_chunk_syr33dp2.gwl)({ instanceId: n.instanceId, host: n.host, name: l, args: o, issuedAt: Date.now(), deadlineMs: r }) }, p;
  try {
    p = e.sendServedCallRequest({ request: m, accepts: pn, signal: u.signal });
  } catch (g) {
    return { kind: "transport_error", detail: `send failed: ${(0, import_chunk_jv7av99m.d)(g)}` };
  }
  if (!p.sent) return p.reply.catch(() => {
  }), { kind: "unreachable", detail: e.whyNotSending?.() ?? "the session stream is closed; nothing was sent" };
  let c = false, _ = setTimeout(() => {
    c = true, p.cancel();
  }, r);
  try {
    let g = await p.reply;
    return gn(g) ?? { kind: "transport_error", detail: "the answer was not a tool result" };
  } catch (g) {
    if (c) return { kind: "timed_out", capMs: r };
    if (u.signal.aborted) return { kind: "cancelled" };
    if (g instanceof import_chunk_jv7av99m.wp) return { kind: "dropped", detail: "the session stream closed after the request left" };
    return { kind: "transport_error", detail: (0, import_chunk_jv7av99m.d)(g) };
  } finally {
    clearTimeout(_);
  }
}
function Ae(e) {
  let n = typeof e === "object" && e !== null && "result" in e ? e.result : void 0;
  if (typeof n !== "object" || n === null) return;
  return Array.isArray(n.content) ? n : void 0;
}
function pn(e) {
  try {
    if ((0, import_chunk_syr33dp2.Zbo)(e)) return false;
    return Ae(e) !== void 0;
  } catch {
    return false;
  }
}
function gn(e) {
  let n = Ae(e);
  if (n === void 0) return;
  let { content: l, structuredContent: o, isError: u } = n;
  return { kind: "result", structuredContent: o, text: l.flatMap((r) => typeof r === "object" && r !== null && r.type === "text" && typeof r.text === "string" ? [r.text] : []).join(`
`), isError: u === true };
}
var f4o = { maxRequestBytes: 4128768, defaultDeadlineMs: 58e3 }, Pe = 6e4, hn = 2e3, J7t = 1e4, _n = ["invalid_request", "unsupported_protocol"];
function Q7l(e) {
  let n = { stale: false, quietMisses: [] }, l = e.limits ?? f4o;
  return { kind: "session", limits: l, call: (o, u, r, m) => De(e, n, l, o, u, r, m), markUnresponsive: () => {
    n.stale = true;
  }, checkLive: async ({ signal: o, hold: u }) => {
    let r = e.host(), m = r?.live(), p = e.now ?? Date.now;
    if (r === void 0 || m === void 0 || o.aborted || !(m.status === "offline" || n.stale || p() - m.lastHeardAt > Pe)) return;
    if (Oe(r, p())) return Q(r);
    let c = await Le(e, n, r, o);
    if (c === "missed" && u !== void 0 && r.live()?.status === "online" && !n.stale) {
      if (u.notify("waiting"), c = await Rn(e, n, r, o, u.ms), c === "there") u.notify("back");
    }
    if (c !== "missed") return;
    if (r.markAway("probe_missed"), (0, import_chunk_2hdy50wd.Xf)()) e.deviceHostGone?.(r.instanceId, "probe_missed");
    return Q(r);
  }, saidAsleep: () => e.host()?.live()?.asleepSince !== void 0, probeLive: async ({ signal: o }) => {
    let u = e.host();
    if (u === void 0 || u.live() === void 0 || o.aborted) return;
    let r = (e.now ?? Date.now)(), m = await Z(e, u, o), p = (u.live()?.lastHeardAt ?? -1 / 0) > r;
    if (m === "answered" || p) return n.stale = false, true;
    if (m !== "missed") return;
    return u.markAway("probe_missed"), false;
  }, isAway: () => e.host()?.live()?.status === "offline", silence: { quietForMs: () => {
    let o = e.host()?.live();
    return o === void 0 || o.status === "offline" || o.asleepSince !== void 0 ? void 0 : (e.now ?? Date.now)() - o.lastHeardAt;
  }, probe: (o) => An(e, n, o), missed: () => qe(e, n), ownStreamFrameAt: () => e.sender.readStreamFrameAt?.(), giveUp: () => {
    e.host()?.markAway("probe_missed");
  } }, isRechecked: () => e.rechecked?.() === true, ...e.sender.withdrawStandingServedCall !== void 0 && { withdrawStanding: (o) => {
    e.sender.withdrawStandingServedCall?.(o);
  } }, callPlumbing: async (o, u, r) => {
    let m = e.host();
    if (m === void 0) return { kind: "unreachable", detail: "the machine is no longer announced on this session" };
    let p = await Ce(e.sender, { instanceId: m.instanceId, host: m.hostName }, o, u, r);
    if (p.kind === "result") m.heard((e.now ?? Date.now)());
    return p;
  } };
}
function Q(e) {
  let n = e.live();
  return n?.asleepSince !== void 0 ? { kind: "unreachable", detail: "it said it was going to sleep", machineNotAnswering: true, saidAsleep: true, lastHeardAt: n.asleepSince } : { kind: "unreachable", detail: "the machine did not answer a liveness check on this session; nothing was sent", machineNotAnswering: true, ...n !== void 0 && { lastHeardAt: Math.max(n.lastHeardAt, n.lastStillHereAt ?? 0) }, ...n?.lastStillHereAt !== void 0 && n.lastStillHereAt > n.lastHeardAt && { saidBusy: true } };
}
function Oe(e, n) {
  let l = e.live()?.asleepSince;
  return l !== void 0 && n >= l && n - l < import_chunk_syr33dp2.Xbo;
}
async function De(e, n, l, o, u, r, m) {
  let p = e.now ?? Date.now;
  if (m.signal.aborted) return { kind: "cancelled" };
  let c = e.host(), _ = c?.live();
  if (c === void 0 || _ === void 0) return { kind: "unreachable", detail: "the machine is not announcing on this session", machineNotAnswering: true, ...e.signedOff?.() === true && { signedOff: true, ...Me(e.leftFor?.()) } };
  let g = "op" in r && r.op === "outcome_of";
  if (!g && (_.status === "offline" || n.stale || p() - _.lastHeardAt > Pe)) {
    if (Oe(c, p())) return Q(c);
    let R = p(), E = await Z(e, c, m.signal);
    if (E === "cancelled") return { kind: "cancelled" };
    if (E === "unsent") return { kind: "unreachable", detail: e.sender.whyNotSending?.() ?? "this session's event stream is not accepting requests; nothing was sent" };
    if (E === "stalled" || E === "taken_back") return { kind: "stalled", capMs: e.probeDeadlineMs ?? J7t, request: "probe", takenBack: E === "taken_back" };
    if (E === "stream_lost") return { kind: "unreachable", detail: "this session could not complete the liveness check for a reason on its own side (its event stream closed, the service refused the write that carried it, or that write had not completed in time); the machine was not reached and nothing was sent" };
    let I = E === "missed" && (c.live()?.lastHeardAt ?? -1 / 0) > R;
    if (E !== "answered" && !I) {
      if (E === "missed") {
        if (c.markAway("probe_missed"), (0, import_chunk_2hdy50wd.Xf)()) e.deviceHostGone?.(c.instanceId, "probe_missed");
      }
      let M = e.host(), G = M?.live();
      if (M === void 0 || M.instanceId === c.instanceId || G === void 0 || G.status === "offline") return E === "gone" ? { kind: "unreachable", detail: "the machine withdrew from this session while it was being asked whether it is still there; nothing was sent", machineNotAnswering: true, signedOff: true, ...Me(e.leftFor?.()) } : Q(c);
      c = M;
    }
    n.stale = false;
  }
  let v = (0, import_chunk_syr33dp2.CZ)(m.deadlineMs), T = p(), k = c.epoch(), P = k === void 0 ? {} : { sentUnderEpoch: k }, O = "op" in r ? r.op : r.approval ? 2 : 1, A = (0, import_chunk_1rt0shj8.snr)(O), y = { posts: 0 }, B = Promise.withResolvers(), x = false, z = (R) => {
    switch (R) {
      case "sending":
        y.posts += 1, y.startedAt ??= p(), (0, import_chunk_1rt0shj8.Ip)(r.call_id, "post started", { leg: O, queue_ms: y.startedAt - T, attempt: y.posts }, A);
        return;
      case "accepted":
        if (y.acceptedAt === void 0) {
          y.acceptedAt = p(), B.resolve();
          try {
            if (!x) m.onAccepted?.();
          } catch (E) {
            (0, import_chunk_w578pjby.t)(`[remote-tools] a leg's acceptance was not reported: ${(0, import_chunk_jv7av99m.d)(E)}`);
          }
        }
        (0, import_chunk_1rt0shj8.Ip)(r.call_id, "post accepted", { leg: O, post_ms: y.startedAt === void 0 ? void 0 : y.acceptedAt - y.startedAt, attempt: y.posts }, A);
        return;
      case "not_accepted":
      case "indeterminate":
        (0, import_chunk_1rt0shj8.Ip)(r.call_id, "post not accepted", { leg: O, phase: R, attempt: y.posts }, A);
    }
  }, W, X = m.forwardedRequest === void 0 ? void 0 : Te(m.forwardedRequest, c.interfaceRange?.(), e.sender.toolHostRequestOffer?.() ?? "not_offered"), h = X?.toolHostRequest, C;
  try {
    C = e.sender.sendServedCallRequest({ onUpload: z, ...(0, import_chunk_2hdy50wd.Xf)() && { hearsUploadAfterReply: true }, request: { subtype: "remote_tool_call", ...(0, import_chunk_syr33dp2.mwl)({ instanceId: c.instanceId, host: c.hostName, name: o, input: u, envelope: r, toolUseId: m.toolUseId, issuedAt: T, deadlineMs: v }), ...h !== void 0 && { envelope: h } }, accepts: (R) => {
      if (!vn(R, r.call_id)) return false;
      if (g && (0, import_chunk_syr33dp2.Zbo)(R)) return W = R, false;
      return true;
    }, signal: m.signal });
  } catch (R) {
    return { kind: "transport_error", detail: `send failed: ${(0, import_chunk_jv7av99m.d)(R)}` };
  }
  if (!C.sent) return { kind: "unreachable", detail: e.sender.whyNotSending?.() ?? "this session's event stream is closed; nothing was sent" };
  (0, import_chunk_1rt0shj8.Ip)(r.call_id, "sent", { leg: O, host_inst: c.instanceId, host_epoch: k, deadline_ms: v }), m.onSent?.({ instanceId: c.instanceId, epoch: k, requestId: C.requestId, sentFormat: X?.sentFormat });
  let K = "approval" in r && r.approval?.decision === "deny", F = !g && !K, { settled: oe, late: J } = await He(C, v, m.signal, { holdAtDeadline: m.onHeldAtDeadline !== void 0, withdrawable: F });
  x = J === void 0;
  let ue = (R) => {
    let E = y.posts > 1 && F && (0, import_chunk_2hdy50wd.Xf)() && R.kind === "answered" && H(R.payload) && ie(R.payload.result)?.outcome === "refused" ? { kind: "answered", payload: { ...R.payload, [import_chunk_syr33dp2.Zjt]: true } } : R, I = bn(E, { state: n, limits: l, entry: c, sent: C, callId: r.call_id, capMs: v, held: J !== void 0, sentUnderEpoch: P, elapsedMs: () => p() - T, heardNow: () => p(), heldBelowFloorAnswer: () => W });
    if (h !== void 0 && Ee(I)) e.sender.noteToolHostRequestRefused?.();
    let M = (0, import_chunk_2hdy50wd.Xf)() && R.kind === "answered" && I.kind === "result" && I.envelope?.outcome === "refused" ? { code: I.envelope.code, raw: ie(H(R.payload) ? R.payload.result : void 0) } : void 0, G = M?.code === "tool_host_no_live_grant" && M.raw?.reason === "device_stream_closed" ? "not_listening" : (M?.code === "serving_disabled" || M?.raw?.code === "bind_surface") && M?.raw?.reason === "device_host_off" ? "switched_off" : void 0, N = G === "not_listening" && !F ? void 0 : G;
    if (N !== void 0) {
      (0, import_chunk_1rt0shj8.Ip)(r.call_id, "the session service says the app is gone", { host_inst: c.instanceId, why: N });
      try {
        e.deviceHostGone?.(c.instanceId, N);
      } catch (j) {
        (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(j));
      }
    }
    if (I.kind === "result") try {
      let j = p(), V = { ...y.startedAt !== void 0 && { queueMs: y.startedAt - T }, ...y.startedAt !== void 0 && y.acceptedAt !== void 0 && { postMs: y.acceptedAt - y.startedAt }, ...y.acceptedAt !== void 0 && { replyWaitMs: j - y.acceptedAt }, totalMs: j - T, posts: y.posts };
      (0, import_chunk_1rt0shj8.Ip)(r.call_id, "answered", { leg: O, total_ms: V.totalMs, queue_ms: V.queueMs, post_ms: V.postMs, reply_wait_ms: V.replyWaitMs, posts: V.posts }, A), m.onTransit?.(V);
    } catch (j) {
      (0, import_chunk_w578pjby.t)(`[remote-tools] a leg's transit was not reported: ${(0, import_chunk_jv7av99m.d)(j)}`);
    }
    let pe = F && y.acceptedAt !== void 0 && (N !== void 0 || M?.code === "not_served" || M?.code === "tool_host_no_live_grant" && M.raw?.reason === void 0) && (0, import_chunk_syr33dp2.yBi)(R.kind === "answered" && R.payload);
    return I.kind === "result" && (N !== void 0 || pe) ? { ...I, ...N === "switched_off" && { hostTakenAway: true }, ...pe && { notPassedOn: true } } : I;
  };
  if (J !== void 0) m.onHeldAtDeadline?.({ late: J.then(ue), withdraw: () => C.cancel(), takeBack: () => F && C.withdraw(), accepted: () => {
    let R = C.delivery();
    return R === "delivered" || R === "untracked";
  } });
  if (F && y.acceptedAt === void 0 && oe.kind === "answered" && (0, import_chunk_syr33dp2.yBi)(oe.payload)) await (0, import_chunk_5appeerh.me)(B.promise, e.uploadAnswerWaitMs ?? hn);
  let ce = ue(oe);
  return K && h !== void 0 && Ee(ce) ? De(e, n, l, o, u, r, { ...m, forwardedRequest: void 0 }) : ce;
}
function bn(e, { state: n, limits: l, entry: o, sent: u, callId: r, capMs: m, held: p, sentUnderEpoch: c, elapsedMs: _, heardNow: g, heldBelowFloorAnswer: v }) {
  let T = () => {
    let k = v();
    if (k === void 0) return;
    (0, import_chunk_1rt0shj8.Ip)(r, "query deadline; taking the below-floor answer held for it", { deadline_ms: m, host_inst: o.instanceId });
    let P = se(k, _());
    return P.kind === "dropped" ? { ...P, ...c } : P;
  };
  switch (e.kind) {
    case "answered": {
      let k = se(e.payload, _());
      if (yn(k)) n.stale = false, o.heard(g());
      return k.kind === "dropped" ? { ...k, ...c } : k;
    }
    case "deadline": {
      let k = T();
      if (k !== void 0) return k;
      if (p) return (0, import_chunk_1rt0shj8.Ip)(r, "no answer by the deadline; request left standing, checking on it", { deadline_ms: m, host_inst: o.instanceId }), { kind: "timed_out", capMs: m, ...c };
      if ((0, import_chunk_1rt0shj8.Ip)(r, "no answer by the deadline; request withdrawn", { deadline_ms: m, host_inst: o.instanceId, error_replies_ignored: u.errorRepliesIgnored() }), m >= l.defaultDeadlineMs) n.stale = true;
      return { kind: "timed_out", capMs: m, ...c };
    }
    case "stalled":
      return (0, import_chunk_1rt0shj8.Ip)(r, e.takenBack ? "still queued here at the deadline; taken back before any write carried it" : "still queued here at the deadline; cancelled behind it", { deadline_ms: m, host_inst: o.instanceId }), { kind: "stalled", capMs: m, request: "call", takenBack: e.takenBack };
    case "unconfirmed": {
      let k = T();
      if (k !== void 0) return k;
      return (0, import_chunk_1rt0shj8.Ip)(r, "deadline reached with the write carrying the request unresolved; withdrawn, delivery unknown", { deadline_ms: m, host_inst: o.instanceId, delivery: e.delivery }), { kind: "dropped", why: "write_unresolved", detail: "the write carrying the request to the session service had not completed, or ended without an answer, by its deadline; whether the machine received it is unknown", ...c };
    }
    case "cancelled":
      return { kind: "cancelled" };
    case "dropped":
      return { kind: "dropped", detail: "this session's event stream closed after the call was sent", ...c };
    case "undelivered":
      return { kind: "unreachable", detail: `the session service refused the request${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; nothing was delivered` };
    case "delivery_unknown":
      return { kind: "dropped", detail: `an upload of the request ended without an answer and a later attempt was refused${e.status !== void 0 ? ` (HTTP ${e.status})` : ""}; whether the machine received it is unknown`, ...c };
    case "gone":
      return { kind: "host_gone", why: e.why, unsent: e.unsent };
    case "failed":
      return { kind: "transport_error", detail: e.detail };
  }
}
async function He(e, n, l, { holdAtDeadline: o, withdrawable: u }) {
  let r = e.reply.then((c) => ({ kind: "answered", payload: c }), (c) => {
    if (l.aborted) return { kind: "cancelled" };
    if (c instanceof import_chunk_aaxjkbk4.lnr) return { kind: "undelivered", status: c.status };
    if (c instanceof import_chunk_aaxjkbk4.anr) return { kind: "delivery_unknown", status: c.status };
    if (c instanceof import_chunk_jv7av99m.wp) return { kind: "dropped" };
    if (c instanceof import_chunk_aaxjkbk4.inr) return { kind: "gone", why: c.why, unsent: e.delivery() === "queued" };
    return { kind: "failed", detail: (0, import_chunk_jv7av99m.d)(c) };
  }), m = await (0, import_chunk_5appeerh.me)(r, n);
  if (m !== void 0) return { settled: m, late: void 0 };
  let p = e.delivery();
  if (p === "queued") {
    if (u && e.withdraw()) return { settled: { kind: "stalled", takenBack: true }, late: void 0 };
    return e.cancel(), { settled: { kind: "stalled", takenBack: false }, late: void 0 };
  }
  if (o) return { settled: { kind: "deadline" }, late: r };
  return e.cancel(), { settled: p === "in_flight" || p === "indeterminate" ? { kind: "unconfirmed", delivery: p } : { kind: "deadline" }, late: void 0 };
}
function Ee(e) {
  let n = e.kind === "dropped" ? e.reported : e;
  return n?.kind === "unreachable" || n?.kind === "result" && n.envelope?.outcome === "refused" && _n.includes(n.envelope.code);
}
function wn(e) {
  return e.kind === "approval_unverified" || e.kind === "result" && e.envelope?.outcome === "refused";
}
function yn(e) {
  return !wn(e) && e.kind !== "dropped";
}
function vn(e, n) {
  try {
    return Sn(e, n);
  } catch (l) {
    return (0, import_chunk_w578pjby.t)(`[remote-tools] an unreadable reply was not taken as an answer: ${(0, import_chunk_jv7av99m.d)(l)}`), false;
  }
}
function Sn(e, n) {
  let l = H(e) ? e.result : void 0, o = (0, import_chunk_syr33dp2.Q7)(l);
  switch (o.envelope.status) {
    case "present":
      return o.envelope.envelope.call_id === n && !((0, import_chunk_2hdy50wd.Xf)() && (o.envelope.envelope.outcome === "needs_approval" || o.envelope.envelope.outcome === "acknowledged"));
    case "malformed":
      return kn(l) === n;
    case "absent":
      return false;
  }
}
function kn(e) {
  return ie(e)?.call_id;
}
function ie(e) {
  if (!H(e)) return;
  return [e.structuredContent, e._meta].filter(H).map((n) => n[import_chunk_syr33dp2._4]).find(H);
}
function se(e, n) {
  if ((0, import_chunk_syr33dp2.Zbo)(e)) {
    let { [import_chunk_syr33dp2.Zjt]: r, ...m } = e, p = se(m, n), c = p.kind === "result" && p.envelope?.outcome === "refused" ? p.envelope : void 0;
    return { kind: "dropped", why: "unverified_refusal", detail: "a sender this session could not verify reported the call refused; the machine itself is asked what became of it", ...p.kind === "result" && c !== void 0 && { reported: { kind: "result", content: "", isError: p.isError, envelope: { v: c.v, outcome: c.outcome, target: { name: "", working_dir: "" }, code: c.code, ...c.reason !== void 0 && { reason: c.reason }, ...c.limit !== void 0 && { limit: c.limit }, message: "" }, elapsedMs: p.elapsedMs, responseBytes: p.responseBytes } } };
  }
  let l = H(e) ? e.result : void 0, o = (0, import_chunk_syr33dp2.Q7)(l);
  if (o.envelope.status === "malformed") return { kind: "transport_error", detail: "malformed result envelope", unreadableResult: true };
  if (o.envelope.status === "absent") return { kind: "transport_error", detail: "answer without an envelope" };
  let u = o.envelope.envelope;
  if (u.outcome === "refused" && u.code === "no_approval") return { kind: "approval_unverified" };
  return { kind: "result", content: o.content, isError: o.isError, envelope: u, elapsedMs: n, responseBytes: (0, import_chunk_syr33dp2.pw)(l), ...{} };
}
async function Le(e, n, l, o) {
  let u = (e.now ?? Date.now)(), r = await Z(e, l, o), m = (l.live()?.lastHeardAt ?? -1 / 0) > u, p = e.host(), c = p?.instanceId !== l.instanceId;
  if (r === "answered" || r === "missed" && (m || c)) n.stale = false;
  if (r === "answered" || r === "missed" && m || r !== "cancelled" && c && p !== void 0) return "there";
  return r === "missed" && !c ? "missed" : "unknown";
}
async function Rn(e, n, l, o, u) {
  if (n.hold === void 0) {
    let m = new AbortController(), p = Cn(e, n, l, m.signal, u);
    n.hold = { ended: p.finally(() => {
      n.hold = void 0;
    }), stop: m, waiting: 0 };
  }
  let r = n.hold;
  r.waiting += 1;
  try {
    return await (0, import_chunk_5appeerh.Tn)(r.ended, o, () => new import_chunk_jv7av99m.Ie());
  } catch {
    return "unknown";
  } finally {
    if (r.waiting -= 1, r.waiting === 0) r.stop.abort();
  }
}
async function Cn(e, n, l, o, u) {
  let r = e.probeDeadlineMs ?? J7t;
  for (let m = u; m > 0; m -= r) {
    let p = await Le(e, n, l, o);
    if (p !== "missed") return p;
  }
  return "missed";
}
function qe(e, n) {
  let l = n.quietMisses[0], o = e.host()?.live();
  if (l !== void 0 && (o === void 0 || Be(o, l.writtenAt))) n.quietMisses = [];
  return n.quietMisses;
}
function Be(e, n) {
  return e.lastHeardAt > n || e.lastStillHereAt !== void 0 && e.lastStillHereAt > n;
}
function An(e, n, l) {
  if (n.quietProbe !== void 0) return n.quietProbe;
  let o = e.host(), u = o?.live();
  if (o === void 0 || u === void 0 || u.asleepSince !== void 0) return Promise.resolve(void 0);
  let r = (e.now ?? Date.now)(), m = l ?? e.probeDeadlineMs ?? J7t, p = Z(e, o, new AbortController().signal, { putWithinMs: import_chunk_syr33dp2.Jbo, deadlineMs: m }).then((c) => {
    let _ = o.live();
    if (c === "answered" || c === "missed" && _ !== void 0 && Be(_, r)) {
      if (c === "answered" || (_?.lastHeardAt ?? -1 / 0) > r) n.stale = false;
      return n.quietMisses = [], true;
    }
    if (c !== "missed" || _ === void 0 || _.asleepSince !== void 0) return;
    return n.quietMisses = [...qe(e, n), { writtenAt: r, waitedMs: m }], false;
  }).catch((c) => {
    (0, import_chunk_w578pjby.t)(`[remote-tools] a liveness probe for a waiting call failed: ${(0, import_chunk_jv7av99m.d)(c)}`);
    return;
  }).finally(() => {
    n.quietProbe = void 0;
  });
  return n.quietProbe = p, p;
}
async function Z(e, n, l, o) {
  let u = e.now ?? Date.now, r = o?.deadlineMs ?? e.probeDeadlineMs ?? J7t, m = u(), p, c;
  try {
    c = e.sender.sendServedCallRequest({ request: { subtype: "remote_tools_probe", instance_id: n.instanceId, issued_at: m, deadline_ms: r }, accepts: En, signal: l, ...o !== void 0 && { onUpload: (g) => {
      if (g === "accepted") p ??= u();
    } } });
  } catch (g) {
    return (0, import_chunk_w578pjby.t)(`[remote-tools] liveness probe to ${n.hostName} could not be sent: ${(0, import_chunk_jv7av99m.d)(g)}`), "unsent";
  }
  if (!c.sent) return "unsent";
  let { settled: _ } = await He(c, r, l, { holdAtDeadline: false, withdrawable: true });
  if (_.kind === "answered") {
    let g = H(_.payload) ? _.payload.result : void 0;
    return n.heard(u(), H(g) ? (0, import_chunk_syr33dp2.EBi)(g.epoch) : void 0), "answered";
  }
  switch (_.kind) {
    case "cancelled":
      return "cancelled";
    case "undelivered":
    case "failed":
      return "unsent";
    case "stalled":
      return _.takenBack ? "taken_back" : "stalled";
    case "gone":
      return "gone";
    case "deadline":
      return o !== void 0 && (p === void 0 || m + r - p < (e.probeDeadlineMs ?? J7t) - o.putWithinMs) ? "stream_lost" : "missed";
    case "dropped":
    case "delivery_unknown":
    case "unconfirmed":
      return "stream_lost";
  }
}
function En(e) {
  let n = H(e) ? e.result : void 0;
  return H(n) && (0, import_chunk_syr33dp2.EBi)(n.epoch) !== void 0;
}
function Me(e) {
  return e === void 0 ? {} : { leftFor: e };
}
function H(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function Q7t(e) {
  return { toolState: e.toolState, agentContext: e.agentContext, mcpClients: () => (0, import_chunk_4vsz8a99.Oc)(e) };
}
var Mn = 8e3, Pn = 5e3, On = 3e4, Dn = 2e3, ee = 5e3, ne = 6e4;
class L {
  recovery = new re();
  connection = void 0;
  listingMemo = void 0;
  synced = false;
  lastListingFailed = false;
  lastForcedRelistAt = void 0;
  reportedUnmatched = false;
  provisional = void 0;
  setAside = 0;
  offer = "unread";
  lastListedAt = void 0;
  unconnectedSince = void 0;
  failedAt = void 0;
  inFlight = void 0;
}
function YDa(e) {
  let n = e.toolState.get(L), l = Date.now(), o = n.provisional !== void 0 && (n.provisional.stub || l - n.provisional.since < ne) ? ee : Hn;
  if (n.lastForcedRelistAt !== void 0 && l - n.lastForcedRelistAt < o || n.lastListedAt !== void 0 && l - n.lastListedAt < ee) return false;
  n.lastForcedRelistAt = l;
  let u = n.connection;
  if (u !== void 0) q().fetchToolsForClient.cache.delete((0, import_chunk_3bjtjsgp.Uo)(u.name, u.config));
  return n.synced = false, n.listingMemo = void 0, true;
}
var Hn = 3e4;
async function Z7t(e, n, l) {
  if (p4o(e, n, l), (0, import_chunk_f9x2f6cx.st)()) return;
  await In(e, n, l), p4o(e, n, l);
}
function p4o(e, n, l) {
  let o = n.sourceHosts("session");
  n.replaceRemoteHosts("session", e.toolState.get(import_chunk_sjqze7qg.eb).hostsForTable());
  let u = n.sourceHosts("session");
  if (te(o) === te(u)) return;
  (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: e.toolState.get(import_chunk_sjqze7qg.eb).entries().length === 0 ? (0, import_chunk_78g0060s.S)("withdrawn") : (0, import_chunk_78g0060s.f)(je(o, u)), source: (0, import_chunk_78g0060s.S)("session"), trigger: (0, import_chunk_78g0060s.f)(l), target_count: u.length, served_tool_count: u.reduce((r, m) => r + m.servedTools.size, 0), passthrough_tool_count: u.reduce((r, m) => r + (m.passthroughTools?.size ?? 0), 0), target_kind: (0, import_chunk_78g0060s.fe)(u[0]?.description?.kind), target_platform: (0, import_chunk_78g0060s.fe)((0, import_chunk_syr33dp2.vBn)(u[0]?.description?.platform)), incompatible_count: (0, import_chunk_4smdap7r.U)(u, (r) => r.protocol.kind === "incompatible"), incompatible_interface_count: (0, import_chunk_4smdap7r.U)(u, Ue) });
}
async function In(e, n, l) {
  if (!await (0, import_chunk_d775ds6c.vAe)()) return;
  let o = e.toolState.get(L);
  return o.inFlight ??= Ln(e, o, n, l).catch((u) => {
    (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.D)(u));
  }).finally(() => {
    o.inFlight = void 0;
  }), o.inFlight;
}
function XDa(e) {
  let n = e.toolState.get(L), l = m4o(e);
  if (n.synced && !n.lastListingFailed && l !== void 0 && l !== "set_aside") return "unlisted";
  if (n.synced && !n.lastListingFailed) return "listed";
  return !(0, import_chunk_f9x2f6cx.st)() && ae(e) ? "unlisted" : "absent";
}
function JDa(e) {
  return e.toolState.get(L).connection !== void 0;
}
function QDa(e, n) {
  return e.toolState.get(L).lastListingFailed && !n.hosts().some((o) => o.kind === "remote" && (o.source === "bridge" || o.source === "session"));
}
async function Ln(e, n, l, o) {
  let u = e.mcpClients(), r = Vn(u);
  if (r === void 0) {
    if ((0, import_chunk_865at33z.ghe)(e.agentContext)) return;
    if (jn(u, n, o), n.failedAt = void 0, n.lastListingFailed = false, ae(e)) n.unconnectedSince ??= Date.now();
    else n.provisional = void 0, n.unconnectedSince = void 0;
    if (n.connection !== void 0) n.connection = void 0, n.listingMemo = void 0, n.setAside = 0, Fe(l, [], { invalid: void 0, unreadable: 0, unreadableMarkers: 0, trigger: o });
    return;
  }
  let m = q().fetchToolsForClient.cache.get((0, import_chunk_3bjtjsgp.Uo)(r.name, r.config)), p = e.toolState.get(import_chunk_sjqze7qg.eb).entries().some((A) => A.status === "online"), c = o !== "resolve" && n.provisional?.stub === true && !(0, import_chunk_d775ds6c.z5)();
  if (n.synced && r === n.connection && m === n.listingMemo && (p || c || !Un(n.provisional))) return;
  if (n.failedAt?.connection === r && Date.now() - n.failedAt.time < On) return;
  let _ = Date.now(), g = await Y(r, { deadlineAt: _ + Mn, recovery: n.recovery, idempotent: true }, (A, y) => qn(A, Math.min(y, Pn)));
  if (g.kind !== "ok") {
    n.lastListingFailed = true, n.failedAt = Date.now() - _ >= Dn ? { connection: r, time: Date.now() } : void 0, (0, import_chunk_w578pjby.t)(`[remote-tools] device-bridge tools/list failed (${g.kind}); keeping last known machines${"error" in g ? `: ${(0, import_chunk_jv7av99m.d)(g.error)}` : ""}`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: (0, import_chunk_78g0060s.S)("list_failed"), trigger: (0, import_chunk_78g0060s.f)(o), reason: "error" in g && Fn(g.error) ? (0, import_chunk_78g0060s.S)("timeout") : (0, import_chunk_78g0060s.f)(g.kind) });
    return;
  }
  if (g.value.truncated) (0, import_chunk_w578pjby.t)("[remote-tools] device-bridge tools/list is paginated; only the first page is read for machine discovery", { level: "warn" });
  let v = Re(r, g.value.tools, n.recovery), T = (0, import_chunk_d775ds6c.z5)() ? v : { ...v, hosts: [], invalid: void 0 }, k = v.hosts.length - T.hosts.length;
  if (n.offer = k > 0 ? "offered" : "none", k !== n.setAside) {
    if (n.setAside = k, k > 0) (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: (0, import_chunk_78g0060s.S)("listing_set_aside"), trigger: (0, import_chunk_78g0060s.f)(o), host_count: k, tool_count: g.value.tools.length, stub: g.value.stub, invalid: (0, import_chunk_78g0060s.fe)(v.invalid) }), (0, import_chunk_w578pjby.t)("[remote-tools] device-bridge listing offered a machine; not adopted: machines are taken from the session channel alone", { level: "warn" });
  }
  let P = T.hosts.length === 0;
  if (P && (n.provisional === void 0 || n.provisional.stub !== g.value.stub)) (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: (0, import_chunk_78g0060s.S)("listed_empty"), trigger: (0, import_chunk_78g0060s.f)(o), tool_count: g.value.tools.length, truncated: g.value.truncated, has_served_name: g.value.tools.some((A) => import_chunk_ze4kt7fs.UAe.has(A.name)), marker_count: (0, import_chunk_4smdap7r.U)(g.value.tools, (A) => A._meta?.[import_chunk_rts2v6y0.Pqe] !== void 0), stub: g.value.stub }), (0, import_chunk_w578pjby.t)(`[remote-tools] device-bridge listing adopted no machine (${g.value.tools.length} tools${g.value.stub ? p ? ", stub listing \u2014 the bound machine serves over the session channel instead" : ", stub listing \u2014 the bound machine has not announced yet" : ""})`);
  if (T.invalid !== void 0) (0, import_chunk_w578pjby.t)(`[remote-tools] device-bridge listing rejected (${T.invalid}): one connection must announce exactly one machine \u2014 its first announced name stays attached but unreachable`, { level: "warn" });
  Fe(l, T.hosts, { invalid: T.invalid, unreadable: T.unreadable, unreadableMarkers: T.unreadableMarkers, trigger: o });
  let O = !P && n.provisional !== void 0 && m !== void 0 && m === n.listingMemo;
  if (O) q().fetchToolsForClient.cache.delete((0, import_chunk_3bjtjsgp.Uo)(r.name, r.config));
  n.connection = r, n.listingMemo = O ? void 0 : m, n.synced = true, n.lastListedAt = Date.now(), n.unconnectedSince = void 0, n.provisional = P ? { at: Date.now(), since: n.provisional?.since ?? Date.now(), stub: g.value.stub } : void 0, n.reportedUnmatched = false, n.failedAt = void 0, n.lastListingFailed = false, (0, import_chunk_w578pjby.t)(`[remote-tools] device bridge matched: ${r.name} (${g.value.tools.length} tools over ${g.value.pages} page(s))`);
}
async function qn(e, n) {
  let l = await (0, import_chunk_gvzh3pxp.Gon)(e, { timeout: n });
  return { tools: l.tools.filter(Bn), pages: 1, truncated: Boolean(l.nextCursor), stub: (0, import_chunk_qdcbcsg7.Vct)(l) === "stub" };
}
function Bn(e) {
  return typeof e === "object" && e !== null && typeof e.name === "string";
}
function Fn(e) {
  let n = (0, import_chunk_jv7av99m.d)(e).toLowerCase();
  return n.includes("timed out") || n.includes("timeout");
}
function ae(e) {
  return e.mcpClients().some((n) => de(n) && n.type !== "disabled" && n.type !== "needs-auth");
}
function m4o(e) {
  let n = Nn(e), l = n !== "connecting" && e.toolState.get(L).setAside > 0 ? "set_aside" : n;
  if (n === void 0 || (0, import_chunk_d775ds6c.z5)()) return l;
  let o = e.toolState.get(import_chunk_sjqze7qg.eb);
  if (o.hasAnnouncedThisLife()) return o.entries().length === 0 ? "serves_nothing" : l;
  return (import_chunk_c203g5kd.s.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 ? "not_reannounced" : l;
}
function ZDa(e) {
  if ((0, import_chunk_d775ds6c.z5)()) return "none";
  let { offer: n } = e.toolState.get(L);
  if (n !== "unread") return n;
  let l = e.mcpClients().filter((o) => o.name === import_chunk_ze4kt7fs.xG);
  return l.length > 0 && !l.some((o) => de(o) || le(o)) ? "none" : "unread";
}
var xe = 15e3;
function e0a(e) {
  return e ? Math.max(xe, f4o.defaultDeadlineMs) : xe;
}
function aQs(e) {
  let n = e.toolState.get(import_chunk_sjqze7qg.eb);
  return (import_chunk_c203g5kd.s.CLAUDE_CODE_WORKER_EPOCH ?? 1) > 1 && !(0, import_chunk_d775ds6c.z5)() && !(n.hasAnnouncedThisLife() && n.entries().length === 0) && e.toolState.get(import_chunk_t2e49pze.GJ).canAsk() && (0, import_chunk_d775ds6c.gpe)() && ge();
}
function t0a(e, n, l) {
  return n.has(l) && !e.toolState.get(import_chunk_sjqze7qg.eb).withdrawnThisLife(l) && aQs(e);
}
async function n0a(e, n, { deadlineMs: l = f4o.defaultDeadlineMs, sliceMs: o = ee, routableOtherwise: u, forMachine: r } = {}) {
  let m = e.toolState.get(import_chunk_sjqze7qg.eb);
  if (r === void 0 && m.entries().length > 0) return { kind: "announced" };
  let p = m.announceWaitExpired();
  if (p !== void 0) return { kind: "gave_up_earlier", waitedMs: p };
  if (r !== void 0 && e.toolState.get(import_chunk_t2e49pze.GJ).askOnce({ workerEpoch: import_chunk_c203g5kd.s.CLAUDE_CODE_WORKER_EPOCH ?? 1, deadlineMs: l })) (0, import_chunk_w578pjby.t)("[remote-tools] asked the attached client to announce to this replacement worker");
  let c = Date.now();
  for (; ; ) {
    if (n.aborted) return { kind: "aborted" };
    if (r === void 0 ? m.hasAnnouncedThisLife() : m.withdrawnThisLife(r)) return { kind: "announced" };
    let g = l - (Date.now() - c);
    if (g <= 0) break;
    let v = await (0, import_chunk_bzyb60p0.Uyt)(m, n, Math.min(o, g));
    if (v === "announced" && (r === void 0 || u === void 0)) return { kind: "announced" };
    if (v === "aborted") return { kind: "aborted" };
    if (u !== void 0 && await u()) return v === "announced" ? { kind: "announced" } : { kind: "routable" };
  }
  let _ = Date.now() - c;
  return m.markAnnounceWaitExpired(_), { kind: "gave_up", waitedMs: _ };
}
function Nn(e) {
  let n = e.toolState.get(L);
  if (n.connection === void 0) return ae(e) && n.unconnectedSince !== void 0 && Date.now() - n.unconnectedSince < ne ? "connecting" : void 0;
  if (!n.provisional) return;
  if (Date.now() - n.provisional.since < ne) return "connecting";
  return n.provisional.stub ? "not_connected" : void 0;
}
function Un(e) {
  if (e === void 0) return false;
  let n = Date.now();
  if (!e.stub && n - e.since >= ne) return false;
  return n - e.at >= ee;
}
function jn(e, n, l) {
  let o = e.filter((r) => r.name === import_chunk_ze4kt7fs.xG);
  if (o.length === 0 || n.reportedUnmatched) return;
  let u = o.map($n);
  if (u.every((r) => r === "connecting")) return;
  n.reportedUnmatched = true, (0, import_chunk_w578pjby.t)(`[remote-tools] a '${import_chunk_ze4kt7fs.xG}' MCP entry exists but was not adopted as the device bridge: ${o.map((r, m) => `${u[m]} (type=${r.type}, scope=${r.config.scope})`).join("; ")}`, { level: "warn" }), (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: (0, import_chunk_78g0060s.S)("no_bridge_connection"), trigger: (0, import_chunk_78g0060s.f)(l), servers_seen: o.length, reason: (0, import_chunk_78g0060s.f)(u[0] ?? "none"), ingress_base_unset: import_chunk_f2dee02n.Ql.atStartup === void 0 });
}
function $n(e) {
  if (le(e)) return "scoped_entry";
  if (!("url" in e.config) || typeof e.config.url !== "string") return "no_url";
  if (!(0, import_chunk_2mwshd9r.Yu)(e.config.url)) return "not_ccr_proxy_url";
  if (!(0, import_chunk_2mwshd9r.cFe)(e.config.url)) return "not_devices_upstream";
  if (!Ne(e.config.url)) return "routing_shape";
  switch (e.type) {
    case "connected":
      return "none";
    case "disabled":
      return "disabled";
    case "needs-auth":
      return "needs_auth";
    default:
      return "connecting";
  }
}
function Vn(e) {
  return e.find((n) => n.type === "connected" && de(n));
}
function de(e) {
  return e.name === import_chunk_ze4kt7fs.xG && !le(e) && "url" in e.config && typeof e.config.url === "string" && (0, import_chunk_2mwshd9r.cFe)(e.config.url) && Ne(e.config.url);
}
function le(e) {
  let { scope: n, pluginSource: l, agentSource: o } = e.config;
  return n === "project" || n === "local" || n === "agent" || l !== void 0 || o !== void 0;
}
function Ne(e) {
  try {
    let n = new URL(e), l = n.searchParams.getAll("toolbox_mcp_server_id"), o = /\/v2\/ccr-sessions\/([^/]+)\/mcp$/.exec(n.pathname)?.[1], u = l[0];
    return n.searchParams.getAll("mcp_url").length === 1 && (l.length === 0 || l.length === 1 && (u === import_chunk_ze4kt7fs.xG || o !== void 0 && u === Wn(o)));
  } catch {
    return false;
  }
}
function Wn(e) {
  return (0, import_chunk_qdcbcsg7.Ioe)(e, import_chunk_ze4kt7fs.xG);
}
function Fe(e, n, { invalid: l, unreadable: o, unreadableMarkers: u, trigger: r }) {
  let m = e.sourceHosts("bridge"), { dropped: p } = e.replaceRemoteHosts("bridge", n);
  if (p.length > 0) (0, import_chunk_w578pjby.t)(`[remote-tools] the bridge announced ${p.length} machine(s) under a name this session cannot adopt; not adopted: ${p.join(", ")}`, { level: "warn" });
  let c = e.sourceHosts("bridge"), _ = te(m) !== te(c);
  if (l !== void 0) (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: (0, import_chunk_78g0060s.S)("listing_invalid"), reason: (0, import_chunk_78g0060s.f)(l), trigger: (0, import_chunk_78g0060s.f)(r) });
  let g = _ ? je(m, c) : void 0;
  if (g !== void 0) (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: (0, import_chunk_78g0060s.f)(g), trigger: (0, import_chunk_78g0060s.f)(r), target_count: c.length, served_tool_count: c.reduce((v, T) => v + T.servedTools.size, 0), passthrough_tool_count: c.reduce((v, T) => v + (T.passthroughTools?.size ?? 0), 0), target_kind: (0, import_chunk_78g0060s.fe)(c[0]?.description?.kind), target_platform: (0, import_chunk_78g0060s.fe)((0, import_chunk_syr33dp2.vBn)(c[0]?.description?.platform)), incompatible_count: (0, import_chunk_4smdap7r.U)(c, (v) => v.protocol.kind === "incompatible"), incompatible_interface_count: (0, import_chunk_4smdap7r.U)(c, Ue), protocol_version: c[0]?.protocol.kind === "compatible" ? c[0].protocol.version : void 0, interface_agreed_version: c[0]?.protocol.kind === "compatible" ? c[0].protocol.interfaceVersion : void 0 });
  if (o > 0 || u > 0) (0, import_chunk_y53wbr8a.a)("tengu_remote_tool_targets", { event: (0, import_chunk_78g0060s.S)("unreadable"), trigger: (0, import_chunk_78g0060s.f)(r), unreadable_count: o, unreadable_marker_count: u });
}
function Ue(e) {
  return e.protocol.kind === "incompatible" && e.protocol.cause === "interface";
}
function te(e) {
  return e.map((n) => `${n.name}\0${n.status}\0${n.servedTools.size}\0${n.passthroughTools?.size ?? 0}`).sort().join(`
`);
}
function je(e, n) {
  let l = e.some((u) => u.status === "online"), o = n.some((u) => u.status === "online");
  if (e.length === 0) return n.length === 0 ? "changed" : "discovered";
  if (l && !o) return "went_offline";
  if (!l && o) return "came_online";
  return "changed";
}
