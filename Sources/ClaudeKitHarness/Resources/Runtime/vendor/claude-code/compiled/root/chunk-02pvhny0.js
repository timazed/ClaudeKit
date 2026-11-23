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
var chunk_02pvhny0_exports = {};
__export(chunk_02pvhny0_exports, {
  $Ht: () => $Ht,
  A7t: () => A7t,
  AMa: () => AMa,
  C4r: () => C4r,
  IMa: () => IMa,
  MMa: () => MMa,
  OMa: () => OMa,
  PMa: () => PMa,
  RMa: () => RMa,
  T4r: () => T4r,
  Yet: () => Yet,
  bXs: () => bXs,
  ctr: () => ctr,
  iie: () => iie,
  j$e: () => j$e,
  kXs: () => kXs,
  v4r: () => v4r,
  wXs: () => wXs,
  xMa: () => xMa
});
module.exports = __toCommonJS(chunk_02pvhny0_exports);
var import_chunk_mzmcvr6c = require("/$bunfs/root/chunk-mzmcvr6c.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_r8478wtb = require("/$bunfs/root/chunk-r8478wtb.js");
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_khxw3ng0 = require("/$bunfs/root/chunk-khxw3ng0.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_jmxgdf7r = require("/$bunfs/root/chunk-jmxgdf7r.js");
var import_chunk_0rkwgmhx = require("/$bunfs/root/chunk-0rkwgmhx.js");
var import_chunk_hsqa3g9e = require("/$bunfs/root/chunk-hsqa3g9e.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_path = require("path");
(0, import_chunk_adx6804h.B)();
(0, import_chunk_adx6804h.B)();
var it = { published: "published", comment: "comment" }, x = 64, D = 16, st = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/, at = "", dt = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.v)(1), rows: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()) }), t = (0, import_chunk_adx6804h.c)({ v: (0, import_chunk_adx6804h.E)().gt(1) }), r = (0, import_chunk_adx6804h.c)({ stopped: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()) }), i = (0, import_chunk_adx6804h.F)(it), o = (0, import_chunk_adx6804h.n)().refine((g) => (0, import_chunk_mzmcvr6c.ht)(g) !== null), d = (0, import_chunk_adx6804h.c)({ orphans: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).transform((g) => g.slice(0, D).flatMap((m) => {
    let u = o.safeParse(m);
    return u.success ? [u.data] : [];
  })) }), a = (0, import_chunk_adx6804h.c)({ trigger_id: o, since: (0, import_chunk_adx6804h.n)().regex(st), events: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.n)()).max(16).transform((g) => (0, import_chunk_4smdap7r.M)(g).flatMap((m) => {
    let u = i.safeParse(m);
    return u.success ? [u.data] : [];
  })).refine((g) => g.length > 0), unreleased: (0, import_chunk_adx6804h.C)((0, import_chunk_adx6804h.ie)()).catch([]).transform((g) => g.slice(0, D).flatMap((m) => {
    let u = o.safeParse(m);
    return u.success ? [u.data] : [];
  })), claude_doc: (0, import_chunk_adx6804h.v)(true).optional().catch(void 0) }), f = (0, import_chunk_adx6804h.c)({ at_ms: (0, import_chunk_adx6804h.E)().refine(Number.isFinite) });
  return { rowsEnvelope: e, newerEnvelope: t, stopsEnvelope: r, orphansEnvelope: d, row: a, stop: f };
});
function AMa(e) {
  (0, import_chunk_0rkwgmhx.se)().durable.registrySink = e;
}
function RMa() {
  (0, import_chunk_0rkwgmhx.se)().durable.registryPublished = at;
}
function Yet() {
  if (!import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) return;
  let e = (0, import_chunk_0rkwgmhx.se)(), { durable: t } = e;
  if (t.registrySink === null) return;
  let r = {}, i = [], o = /* @__PURE__ */ new Set();
  for (let u of t.pendingRestoredRows.values()) {
    let h = t.rows.get(u.slug);
    if (h === void 0 && !t.unwatchedSlugs.has(u.slug)) {
      i.push(u);
      continue;
    }
    for (let S of [u.triggerId, ...u.unreleased ?? []]) if (S !== h?.triggerId) o.add(S);
  }
  for (let u of [...t.rows.values(), ...i].slice(0, x)) r[u.slug] = { trigger_id: u.triggerId, since: u.since, events: [...u.events], ...u.unreleased !== void 0 && u.unreleased.length > 0 && { unreleased: [...u.unreleased] }, ...(u.claudeDoc || t.pendingRestoredRows.get(u.slug)?.claudeDoc) && { claude_doc: true } };
  let d = {}, a = [...e.commentMonitorIntent.bySlug.entries()].filter(([, u]) => u.state === "stopped").sort(([, u], [, h]) => h.writtenAtMs - u.writtenAtMs).slice(0, x);
  for (let [u, h] of a) d[u] = { at_ms: h.writtenAtMs };
  let f = (0, import_chunk_4smdap7r.M)([...t.orphanTriggers, ...o]).slice(0, D), g = t.rows.size + i.length === 0 && a.length === 0 && f.length === 0 ? null : { v: 1, rows: r, stopped: d, ...f.length > 0 && { orphans: f } }, m = (0, import_chunk_w578pjby._)(g);
  if (m === t.registryPublished) return;
  t.registryPublished = m, t.registrySink({ artifact_durable_watches: g });
}
function xMa(e) {
  if (e === void 0 || e === null) return null;
  let t = dt(), r = 0, i = [], o = t.rowsEnvelope.safeParse(e);
  if (o.success) for (let [m, u] of q(o.data.rows)) {
    let h = t.row.safeParse(u);
    if (!import_chunk_r8478wtb.yo.test(m) || !h.success) {
      r++;
      continue;
    }
    i.push({ slug: m, triggerId: h.data.trigger_id, since: h.data.since, events: h.data.events, ...h.data.unreleased.length > 0 && { unreleased: h.data.unreleased }, ...h.data.claude_doc && { claudeDoc: true } });
  }
  let d = /* @__PURE__ */ new Map(), a = t.stopsEnvelope.safeParse(e);
  if (a.success) for (let [m, u] of q(a.data.stopped)) {
    if (!import_chunk_r8478wtb.yo.test(m)) {
      r++;
      continue;
    }
    let h = t.stop.safeParse(u);
    if (d.set(m, h.success ? h.data.at_ms : Date.now()), !h.success) r++;
  }
  if (!o.success || !a.success) (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", a.success && t.newerEnvelope.safeParse(e).success ? "registry_newer_version" : "registry_invalid");
  else if (r > 0) (0, import_chunk_cqa9hrgx.l)("artifact_durable_subscribe", "registry_entry_invalid");
  let f = t.orphansEnvelope.safeParse(e), g = f.success ? f.data.orphans : [];
  return { rows: i, stopped: d, orphans: g };
}
function q(e) {
  return Object.keys(e).slice(0, x).map((r) => [r, e[r]]);
}
function j$e(e) {
  let { live: t } = (0, import_chunk_0rkwgmhx.se)(), r = t.supervisors.get(e);
  return r !== void 0 && !r.stopped && r.autoReactWiring !== void 0 || t.inFlightWiredIntent.has(e);
}
var R = "\0unwritten", K = 256, Y = 32, N = 64, ct = (0, import_chunk_2cbgkbm2.p)(() => {
  let e = (0, import_chunk_adx6804h.E)().refine(Number.isFinite), t = (0, import_chunk_adx6804h.c)({ state: (0, import_chunk_adx6804h.F)(["armed", "stopped"]), writtenAtMs: e, title: (0, import_chunk_adx6804h.n)().min(1).max(K).optional(), holder: (0, import_chunk_adx6804h.n)().optional().transform((i) => i === void 0 ? void 0 : "bg"), holderPid: (0, import_chunk_adx6804h.E)().int().positive().optional().catch(void 0), holderProcStart: (0, import_chunk_adx6804h.n)().min(1).max(64).optional().catch(void 0), holderProcStartFt: (0, import_chunk_adx6804h.n)().min(1).max(64).optional().catch(void 0), holderJob: (0, import_chunk_adx6804h.n)().regex(/^[0-9a-f]{8}$/).optional().catch(void 0), holderPidSpace: (0, import_chunk_adx6804h.n)().min(1).max(160).optional().catch(void 0) }), r = (0, import_chunk_adx6804h.c)({ type: (0, import_chunk_adx6804h.v)("artifact-comment-monitor"), v: (0, import_chunk_adx6804h.v)(1), sessionId: (0, import_chunk_adx6804h.n)(), artifacts: (0, import_chunk_adx6804h.he)((0, import_chunk_adx6804h.n)(), (0, import_chunk_adx6804h.ie)()), crossLineMerged: (0, import_chunk_adx6804h.v)(true).optional().catch(void 0), tailTorn: (0, import_chunk_adx6804h.v)(true).optional().catch(void 0) });
  return { record: t, envelope: r };
});
function Z(e) {
  if (e.holderPid === void 0 || e.holderJob === void 0 || e.holderPidSpace === void 0 || e.holderProcStart === void 0 && e.holderProcStartFt === void 0) return {};
  return { holderPid: e.holderPid, holderJob: e.holderJob, ...e.holderProcStart !== void 0 && { holderProcStart: e.holderProcStart }, ...e.holderProcStartFt !== void 0 && { holderProcStartFt: e.holderProcStartFt }, holderPidSpace: e.holderPidSpace };
}
function Q() {
  let e = import_chunk_rb36kwbn.iFe.token;
  if (e === void 0) return (0, import_chunk_rb36kwbn.HE)(), {};
  let t = (0, import_chunk_865at33z.j0)();
  if (t === void 0 || !/^[0-9a-f]{8}$/.test((0, import_path.basename)(t))) return {};
  let { procStart: r, procStartFt: i } = (0, import_chunk_rb36kwbn.OPe)(e);
  return Z({ holderPid: process.pid, holderJob: (0, import_path.basename)(t), holderProcStart: r, holderProcStartFt: i, holderPidSpace: (0, import_chunk_jmxgdf7r.Ghe)().slice(0, 160) });
}
function bXs() {
  return (0, import_chunk_rb36kwbn.HE)();
}
function v4r(e, t) {
  let r = ct(), i = r.envelope.safeParse(e);
  if (!i.success) return (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "comment_monitor_intent_invalid"), null;
  if (i.data.sessionId !== (0, import_chunk_f9x2f6cx.W)()) return (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "comment_monitor_intent_foreign"), null;
  if (i.data.crossLineMerged === true) t?.onLossy?.();
  let o = i.data.tailTorn === true;
  if (o) t?.onLossy?.();
  let d = /* @__PURE__ */ new Map(), a = 0, f = 0, g = 0;
  for (let [m, u] of Object.entries(i.data.artifacts)) {
    if (f++ >= 2 * N) {
      t?.onLossy?.();
      break;
    }
    let h = r.record.safeParse(u);
    if (!import_chunk_r8478wtb.yo.test(m)) {
      a++, t?.onLossy?.();
      continue;
    }
    if (!h.success) {
      if (a++, t?.onLossy?.(), typeof u === "object" && u !== null && u.state === "stopped") d.set(m, { state: "stopped", writtenAtMs: Date.now() });
      continue;
    }
    if (o && h.data.state === "armed" && h.data.holder === void 0) {
      d.set(m, { state: "stopped", writtenAtMs: Date.now(), ...h.data.title !== void 0 && { title: h.data.title } }), t?.onTornStop?.(m);
      continue;
    }
    if (h.data.state === "armed" && g++ >= N) {
      t?.onLossy?.();
      continue;
    }
    let { state: S, writtenAtMs: w, title: y, holder: b } = h.data;
    d.set(m, { state: S, writtenAtMs: w, ...y !== void 0 && { title: y }, ...b !== void 0 && { holder: b, ...o ? {} : Z(h.data) } });
  }
  if (a > 0) (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "comment_monitor_intent_record_invalid");
  return d;
}
function ctr(e) {
  let t = k(e.storageV5), r = new Map([...t.pendingRestore ?? [], ...t.bySlug]);
  t.pendingRestore = null;
  let { excludeSlug: i } = e;
  if (i !== void 0) r.delete(i);
  return A(), r;
}
function T4r() {
  return (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent.tornStops;
}
function wXs() {
  return (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent.storageV5;
}
function iie(e) {
  k(e?.storageV5);
}
function PMa(e, t) {
  if (e === void 0 && !(0, import_chunk_0rkwgmhx.v0)()) return;
  let r = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent;
  r.earlySeed = e, r.adoptPendingFor = (0, import_chunk_f9x2f6cx.W)(), k(t?.storageV5);
}
function OMa(e, t) {
  let r = k(t?.storageV5);
  if ((0, import_chunk_0rkwgmhx.se)().durable.stopLatches.isStopped(e)) return;
  let i = t?.title, o = i !== void 0 && i.length >= 1 && i.length <= K, d = r.bySlug.get(e)?.title;
  r.forgottenAt.delete(e);
  let a = Date.now(), f = (0, import_chunk_865at33z.Kc)() ? { holder: "bg", ...Q() } : void 0;
  if (r.bySlug.set(e, { state: "armed", writtenAtMs: a, ...o ? { title: i } : d !== void 0 && { title: d }, ...f }), et(r, e), A(), f !== void 0 && f.holderPid === void 0) lt(e, a);
}
function lt(e, t) {
  (0, import_chunk_rb36kwbn.HE)().then(() => {
    if (!(0, import_chunk_0rkwgmhx.v0)() || !(0, import_chunk_865at33z.Kc)()) return;
    let r = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent, i = r.bySlug.get(e);
    if (r.sid !== (0, import_chunk_f9x2f6cx.W)() || i?.state !== "armed" || i.holder !== "bg" || i.holderPid !== void 0 || i.writtenAtMs !== t) return;
    let o = Q();
    if (o.holderPid === void 0) return;
    r.bySlug.set(e, { ...i, ...o }), A();
  }).catch(() => {
    return;
  });
}
function A7t(e, t) {
  let r = k(t?.storageV5), i = r.bySlug.get(e);
  r.bySlug.set(e, { state: "stopped", writtenAtMs: Date.now(), ...i?.title !== void 0 && { title: i.title } }), A({ durableNow: true });
  for (let [o, d] of r.parked) {
    let a = d.line[e];
    if (a?.state === "armed") d.line[e] = { state: "stopped", writtenAtMs: Date.now(), ...a.title !== void 0 && { title: a.title } }, P(o, d.path, d.line, { durableNow: true });
  }
}
function IMa(e, t) {
  return k(t?.storageV5).bySlug.get(e)?.state;
}
function $Ht(e, t) {
  let r = k(t?.storageV5), i = false, o = new Set(typeof e === "string" ? [e] : e), d = Date.now();
  for (let a of o) {
    if (i = r.bySlug.delete(a) || i, r.forgottenAt.delete(a), r.forgottenAt.size >= mt) {
      let f = r.forgottenAt.keys().next().value;
      if (f !== void 0) r.forgottenAt.delete(f);
    }
    r.forgottenAt.set(a, d);
  }
  if (i) A({ durableNow: true });
  for (let [a, f] of r.parked) {
    let g = false;
    for (let m of o) if (f.traveling?.has(m) && f.line[m]?.state === "armed") delete f.line[m], f.traveling.delete(m), g = true;
    if (g) {
      if (P(a, f.path, f.line, { durableNow: true }), !Object.values(f.line).some((m) => m.state === "armed")) r.parked.delete(a);
    }
  }
}
function C4r(e, t) {
  let r = k(t?.storageV5), { stopLatches: i } = (0, import_chunk_0rkwgmhx.se)().durable;
  for (let [o, d] of e) {
    if (i.wasClearedByRewatch(o)) continue;
    let a = r.bySlug.get(o);
    if (a === void 0 || a.state === "armed" || a.writtenAtMs <= d) r.bySlug.set(o, { state: "stopped", writtenAtMs: d, ...a?.title !== void 0 && { title: a.title } });
    i.reaffirmStop(o);
  }
  A();
}
function MMa(e) {
  let t = k(e?.storageV5), { yieldedSlugs: r } = (0, import_chunk_0rkwgmhx.se)().wakes, i = Date.now(), o = false;
  for (let [d, a] of t.bySlug) if (a.state === "armed" && !r.has(d)) t.bySlug.set(d, { state: "stopped", writtenAtMs: i, ...a.title !== void 0 && { title: a.title } }), o = true;
  if (o) A({ durableNow: true });
  for (let [d, a] of t.parked) {
    let f = false;
    for (let [g, m] of Object.entries(a.line)) if (m.state === "armed") a.line[g] = { state: "stopped", writtenAtMs: i, ...m.title !== void 0 && { title: m.title } }, f = true;
    if (f) P(d, a.path, a.line, { durableNow: true });
  }
}
function ut(e) {
  switch (e) {
    case "clear":
    case "resume":
    case "fork":
    case "remote_attach":
      return true;
    case "cd":
    case "spare_claim":
    case "hydrate":
    case "startup_custom_id":
      return false;
  }
}
function ft() {
  let e = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent, t = e.sid;
  if (t === null || t === (0, import_chunk_f9x2f6cx.W)()) {
    e.leftWith = null;
    return;
  }
  let r = /* @__PURE__ */ new Set();
  for (let [i, o] of e.bySlug) if (o.state === "armed" && j$e(i)) r.add(i);
  e.leftWith = { sid: t, traveling: r, unwritten: !e.onFile && !(0, import_chunk_bzyb60p0.L3e)(t) && e.adoptPendingFor !== t, inWindow: e.adoptPendingFor === t };
}
function I() {
  let e = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent;
  if (!(0, import_chunk_bzyb60p0.L3e)((0, import_chunk_f9x2f6cx.W)())) return;
  for (let [t, r] of e.parked) {
    if (r.traveling === void 0 || t === (0, import_chunk_f9x2f6cx.W)()) continue;
    let i = false;
    for (let o of r.traveling) if (r.line[o]?.state === "armed") delete r.line[o], i = true;
    if (r.traveling = void 0, i) P(t, r.path, r.line);
    if (!Object.values(r.line).some((o) => o.state === "armed")) e.parked.delete(t);
  }
}
function V(e, t) {
  if ((0, import_chunk_bzyb60p0.L3e)(t)) {
    if (e.adoptPendingFor === t) e.adoptPendingFor = null;
    return false;
  }
  return e.adoptPendingFor === t || (0, import_chunk_bzyb60p0.Bc)() !== null;
}
function G(e, t, r, i, o) {
  if (t === null) return;
  let d = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent, a = { path: t, line: tt(e, r) };
  d.pendingLines.set(e, a), (0, import_chunk_bzyb60p0.uro)(j), d.writeChain = d.writeChain.then(async () => {
    if (await (0, import_chunk_bzyb60p0.Pf)().catch(() => {
    }), d.pendingLines.get(e) !== a) return;
    if (d.exitStamped) return;
    if (d.pendingLines.delete(e), !i && (0, import_chunk_bzyb60p0.gQ)() === o) return;
    if (e === d.sid) {
      d.lastWritten = R, A();
      return;
    }
    P(e, t, r);
  }), d.writeChain = d.writeChain.catch(() => {
  });
}
var mt = 1024;
function tt(e, t) {
  let r = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent, i = r.parked.get(e);
  if (i?.unwritten === true) {
    let { traveling: o } = i;
    return o === void 0 ? t : (0, import_chunk_xcgcdx61.mi)(t, (d, a) => d.state === "armed" && o.has(a));
  }
  if (i?.leftInWindow === true) return U(r, { type: "artifact-comment-monitor", v: 1, sessionId: e, artifacts: t }).artifacts;
  return t;
}
function P(e, t, r, i) {
  if (t === null) return;
  let o = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent, { storageV5: d } = o, a = tt(e, { ...r }), f = { type: "artifact-comment-monitor", v: 1, sessionId: e, artifacts: a };
  o.owedLines.delete(e);
  let g = { path: t, line: a };
  if (o.pendingLines.set(e, g), (0, import_chunk_bzyb60p0.uro)(j), i?.durableNow === true) (0, import_chunk_bzyb60p0._ro)(f, t, z(f));
  o.writeChain = o.writeChain.then(async () => {
    if (await (0, import_chunk_bzyb60p0.Pf)().catch(() => {
    }), o.exitStamped) return;
    if (e === o.sid) {
      if (o.pendingLines.get(e) === g) o.pendingLines.delete(e);
      o.lastWritten = R, A();
      return;
    }
    if (await (0, import_chunk_bzyb60p0.rN)(t, f, d, { onlyIfExists: true, tornTailEntry: z(f) }), o.pendingLines.get(e) === g) o.pendingLines.delete(e);
  }).catch(() => {
    if (o.pendingLines.get(e) !== g) {
      (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "comment_monitor_intent_write_failed");
      return;
    }
    if (o.pendingLines.delete(e), o.owedLines.size >= 2 * Y) {
      let m = o.owedLines.keys().next().value;
      if (m !== void 0) o.owedLines.delete(m);
    }
    o.owedLines.set(e, { path: t, line: a }), (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
function kXs(e, t) {
  et(k(t?.storageV5), e);
}
function et(e, t) {
  let r = false;
  for (let [i, o] of e.parked) {
    if (i === (0, import_chunk_f9x2f6cx.W)() || o.line[t]?.state !== "armed") continue;
    (o.traveling ??= /* @__PURE__ */ new Set()).add(t), r = true;
  }
  if (r) I();
}
function H(e) {
  if (e.owedLines.size === 0) return;
  let t = [...e.owedLines.entries()];
  e.owedLines.clear();
  let r = false;
  for (let [i, { path: o, line: d }] of t) {
    if (i === e.sid) {
      e.lastWritten = R, r = true;
      continue;
    }
    if (e.pendingLines.has(i)) continue;
    let a = e.parked.get(i);
    P(i, a?.path ?? o, a?.line ?? d);
  }
  if (r) A();
}
function k(e) {
  let t = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent;
  if (e !== void 0) t.storageV5 = e;
  let r = (0, import_chunk_f9x2f6cx.W)(), i = false, o = false;
  if (t.sid !== r) {
    let a = t.leftWith !== null && t.leftWith.sid === t.sid ? t.leftWith : null, f = (S) => a !== null ? a.traveling.has(S) : j$e(S);
    t.leftWith = null;
    let g = L(t), m = /* @__PURE__ */ new Set(), u = 0;
    for (let [S, w] of t.bySlug) {
      if (w.state !== "armed") continue;
      if (f(S)) m.add(S);
      else t.bySlug.delete(S), u++;
    }
    let { stopLatches: h } = (0, import_chunk_0rkwgmhx.se)().durable;
    for (let [S, w] of Object.entries(t.parked.get(r)?.line ?? {})) {
      let y = t.forgottenAt.get(S);
      if (w.state === "armed" && y !== void 0 && w.writtenAtMs <= y && !j$e(S)) {
        o = true;
        continue;
      }
      let b = O(t.bySlug.get(S), w);
      if (b.state === "armed" && h.isStopped(S)) b = { state: "stopped", writtenAtMs: Date.now(), ...b.title !== void 0 && { title: b.title } };
      if (t.bySlug.set(S, b), b.state === "stopped") h.confirmStop(S);
    }
    t.parked.delete(r);
    for (let S of [t.owedLines.get(r), t.pendingLines.get(r)]) for (let [w, y] of Object.entries(S?.line ?? {})) {
      if (y.state !== "stopped") continue;
      let b = O(t.bySlug.get(w), y);
      if (t.bySlug.set(w, b), b.state === "stopped") h.confirmStop(w);
    }
    if (t.sid !== null && (u > 0 || m.size > 0)) {
      t.parked.set(t.sid, { path: t.transcriptPath, line: g, ...m.size > 0 && { traveling: m }, ...a?.unwritten === true && { unwritten: true }, ...a?.inWindow === true && { leftInWindow: true } });
      while (t.parked.size > Y) {
        let [S, w] = t.parked.entries().next().value;
        t.parked.delete(S);
        let y = Date.now();
        P(S, w.path, Object.fromEntries(Object.entries(w.line).flatMap(([b, T]) => T.state !== "armed" ? [[b, T]] : w.traveling?.has(b) ? [] : [[b, { state: "stopped", writtenAtMs: y, ...T.title !== void 0 && { title: T.title } }]])));
      }
    }
    if (t.sid !== null && t.wroteCurrentLine) G(t.sid, t.transcriptPath, g, t.lastWritten === R, t.failureSeqAtWrite);
    else if (t.sid !== null && a?.inWindow === true && rt(t, g)) G(t.sid, t.transcriptPath, g, true, t.failureSeqAtWrite);
    if (I(), i = [...t.bySlug.values()].some((S) => S.state === "armed"), t.sid = r, t.adoptPendingFor !== r) t.adoptPendingFor = null;
    t.lastWritten = o ? R : null, t.wroteCurrentLine = false, t.pendingRestore = null, t.transcriptPath = null, t.tornStops.clear(), t.onFile = false;
  }
  if (!t.onFile && (0, import_chunk_bzyb60p0.L3e)(r)) t.onFile = true;
  if (t.transcriptPath = V(t, r) ? (0, import_chunk_hsqa3g9e.wh)() : (0, import_chunk_bzyb60p0.Mh)(r), t.unsubscribeMaterialized === void 0) t.unsubscribeMaterialized = (0, import_chunk_bzyb60p0.ihi)(() => {
    if (t.sid !== null && (0, import_chunk_bzyb60p0.L3e)(t.sid)) t.onFile = true;
    I();
  });
  if (t.unsubscribeSwitch === void 0) t.unregisterExitDrain = (0, import_chunk_bzyb60p0.Qye)(() => (H(t), t.writeChain)), (0, import_chunk_bzyb60p0.uro)(j), t.unsubscribeSwitch = (0, import_chunk_f9x2f6cx.Bp)((a, f) => {
    if (f === "cd" && t.sid === a) t.transcriptPath = (0, import_chunk_bzyb60p0.Mh)(a);
    if (ut(f)) ft();
    if (f === "clear") queueMicrotask(A);
  });
  let d = t.earlySeed ?? (0, import_chunk_bzyb60p0.Jhi)();
  if (t.earlySeed = void 0, d !== void 0) {
    let a = false, f = v4r(d, { onLossy: () => {
      a = true;
    }, onTornStop: (g) => {
      t.tornStops.add(g);
    } });
    if (f !== null) {
      if (d.tailTorn === true) (0, import_chunk_bzyb60p0.Chi)(t.transcriptPath ?? void 0);
      let { stopLatches: g } = (0, import_chunk_0rkwgmhx.se)().durable, m = /* @__PURE__ */ new Map();
      for (let [u, h] of f) {
        let S = t.forgottenAt.get(u);
        if (h.state === "armed" && S !== void 0 && h.writtenAtMs <= S && !j$e(u)) {
          a = true;
          continue;
        }
        let w = t.bySlug.get(u);
        if (t.tornStops.has(u) && w?.state === "armed" && j$e(u)) {
          t.tornStops.delete(u), m.set(u, w), a = true;
          continue;
        }
        let y = O(w, h);
        if (t.bySlug.set(u, y), m.set(u, y), y.state === "stopped") g.confirmStop(u);
      }
      if (t.pendingRestore = m, !a && t.lastWritten === null) t.lastWritten = J(Object.fromEntries(f)), t.failureSeqAtWrite = (0, import_chunk_bzyb60p0.gQ)();
      else if (a && t.lastWritten === null) t.lastWritten = R;
      Yet();
    }
  }
  if (H(t), i || o) A();
  return t;
}
function O(e, t) {
  if (e === void 0) return t;
  if (t.state === "stopped" && e.state !== "stopped" && t.writtenAtMs >= e.writtenAtMs) return t;
  if (t.state === "armed" && e.state === "armed" && t.writtenAtMs > e.writtenAtMs) return t;
  return e;
}
function L(e) {
  return Object.fromEntries([...e.bySlug.entries()].sort(([, t], [, r]) => Number(r.state === "stopped") - Number(t.state === "stopped") || r.writtenAtMs - t.writtenAtMs).slice(0, N));
}
function nt() {
  let { commentMonitorIntent: e, wakes: t } = (0, import_chunk_0rkwgmhx.se)();
  if (!e.wroteCurrentLine || e.sid !== (0, import_chunk_f9x2f6cx.W)() || [...e.bySlug.keys()].some((r) => t.yieldedSlugs.has(r))) return;
  return { type: "artifact-comment-monitor", v: 1, sessionId: (0, import_chunk_f9x2f6cx.W)(), artifacts: L(e) };
}
function j() {
  let e = (0, import_chunk_0rkwgmhx.se)().commentMonitorIntent, t = (0, import_chunk_f9x2f6cx.W)(), r, i = () => rt(e, L(e)), o = !e.exitStamped && e.sid === t;
  if (o && (0, import_chunk_bzyb60p0.L3e)(t)) {
    if (e.wroteCurrentLine || i() || e.owedLines.has(t) || e.pendingLines.has(t)) I(), e.wroteCurrentLine = true, (0, import_chunk_bzyb60p0.IBe)(nt);
  } else if (o && V(e, t) && e.transcriptPath !== null && i()) {
    let a = U(e, { type: "artifact-comment-monitor", v: 1, sessionId: t, artifacts: L(e) });
    r = { path: e.transcriptPath, entry: a, tornTailEntry: z(a) };
    for (let f of [e.owedLines, e.pendingLines]) if (f.get(t)?.path === r.path) f.delete(t);
  }
  e.exitStamped = true;
  let d = [...e.owedLines, ...e.pendingLines].map(([a, { path: f, line: g }]) => {
    let m = { type: "artifact-comment-monitor", v: 1, sessionId: a, artifacts: g };
    return { path: f, entry: m, tornTailEntry: z(m) };
  });
  return r === void 0 ? d : [...d, r];
}
function z(e) {
  let t = Date.now();
  return { ...e, artifacts: (0, import_chunk_khxw3ng0.er)(e.artifacts, (r) => r.state === "armed" && r.holder === void 0 ? { state: "stopped", writtenAtMs: t, ...r.title !== void 0 && { title: r.title } } : r) };
}
function U(e, t) {
  let r = (0, import_chunk_f9x2f6cx.W)(), i = /* @__PURE__ */ new Set();
  for (let [o, d] of e.parked) {
    if (o === r || o === t.sessionId || d.unwritten) continue;
    for (let a of d.traveling ?? []) if (d.line[a]?.state === "armed") i.add(a);
  }
  if (i.size === 0) return t;
  return { ...t, artifacts: (0, import_chunk_xcgcdx61.mi)(t.artifacts, (o, d) => o.state === "armed" && i.has(d)) };
}
function rt(e, t) {
  return e.lastWritten !== J(t) && !(e.lastWritten === null && Object.keys(t).length === 0);
}
function J(e) {
  return (0, import_chunk_w578pjby._)(Object.entries(e).map(([t, r]) => [t, r.state, r.writtenAtMs, r.title ?? null, r.holder ?? null, r.holderPid ?? null, r.holderProcStart ?? r.holderProcStartFt ?? null, r.holderJob ?? null, r.holderPidSpace ?? null]).sort());
}
function A(e) {
  let t = k();
  I(), Yet();
  let r = L(t), i = J(r);
  if (i === t.lastWritten && (0, import_chunk_bzyb60p0.gQ)() === t.failureSeqAtWrite) return;
  if (t.failureSeqAtWrite = (0, import_chunk_bzyb60p0.gQ)(), t.lastWritten === null && t.bySlug.size === 0) {
    t.lastWritten = i;
    return;
  }
  let o = { type: "artifact-comment-monitor", v: 1, sessionId: (0, import_chunk_f9x2f6cx.W)(), artifacts: r };
  if (V(t, (0, import_chunk_f9x2f6cx.W)())) {
    if (t.lastWritten = R, e?.durableNow === true && t.transcriptPath !== null) {
      let d = U(t, o);
      (0, import_chunk_bzyb60p0._ro)(d, t.transcriptPath, z(d));
    }
    return;
  }
  if (t.lastWritten = i, t.wroteCurrentLine = true, (0, import_chunk_bzyb60p0.IBe)(nt), e?.durableNow === true) (0, import_chunk_bzyb60p0._ro)(o);
  (0, import_chunk_bzyb60p0.Xhi)(o, t.storageV5).catch(() => {
    if (t.lastWritten === i) t.lastWritten = R;
    (0, import_chunk_cqa9hrgx.l)("artifact_live_subscribe", "comment_monitor_intent_write_failed");
  });
}
