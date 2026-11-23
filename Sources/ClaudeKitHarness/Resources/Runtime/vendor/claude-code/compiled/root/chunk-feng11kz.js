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
var chunk_feng11kz_exports = {};
__export(chunk_feng11kz_exports, {
  HCa: () => HCa,
  Sht: () => Sht
});
module.exports = __toCommonJS(chunk_feng11kz_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_syr33dp2 = require("/$bunfs/root/chunk-syr33dp2.js");
var import_chunk_4vsz8a99 = require("/$bunfs/root/chunk-4vsz8a99.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_rts2v6y0 = require("/$bunfs/root/chunk-rts2v6y0.js");
var import_chunk_d775ds6c = require("/$bunfs/root/chunk-d775ds6c.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_thxnftw8 = require("/$bunfs/root/chunk-thxnftw8.js");
var import_chunk_6crpgxs4 = require("/$bunfs/root/chunk-6crpgxs4.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var import_chunk_qwbhh2k3 = require("/$bunfs/root/chunk-qwbhh2k3.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var v = 3e3, H = 2e3;
async function HCa(e, o, n, s) {
  if (Sht(e)) return (0, import_chunk_f9x2f6cx.st)() && n.toolState.get(import_chunk_bzyb60p0.XL).machineFor(e) === void 0 ? { kind: "local", input: o } : y(e, o, n, s);
  let i = n.toolState.get(import_chunk_bzyb60p0.XL).machineFor(e);
  if (i !== void 0 && e.isMcp !== true) return R(e, o, i, n, s);
  if (!(0, import_chunk_4vsz8a99.MA)(e).supported || !(0, import_chunk_d775ds6c.MT)()) return { kind: "local", input: o };
  let { requested: r, input: a } = (0, import_chunk_syr33dp2.EV)(o);
  return r === void 0 ? { kind: "local", input: a } : w(e, r, a, n, s);
}
async function R(e, o, n, s, i) {
  if (!await (0, import_chunk_d775ds6c.vAe)()) return { kind: "error", code: "not_served", message: (0, import_chunk_thxnftw8.jCa)({ name: n, toolName: e.name }) };
  let r = o[import_chunk_syr33dp2.io];
  if (typeof r === "string" && (r.trim() === "" || (0, import_chunk_syr33dp2.Oat)(r))) return { kind: "error", code: "unknown_host", message: (0, import_chunk_thxnftw8.h4s)({ toolName: e.name, machines: [n, ...T(s, e.name, n)] }) };
  let { requested: a, input: c } = (0, import_chunk_syr33dp2.EV)(S(o)), l = a === void 0 ? N(s, e.name) : [];
  if (l.length > 1) return { kind: "error", code: "unknown_host", message: (0, import_chunk_thxnftw8.h4s)({ toolName: e.name, machines: [n, ...T(s, e.name, n)] }) };
  let g = a ?? l[0] ?? n, d = await w(e, g, c, s, i);
  if (d.kind !== "error") return d;
  let h = s.toolState.get(import_chunk_sjqze7qg.xq).resolve(g), u = h.kind === "remote" ? h.host.name : (0, import_chunk_syr33dp2.FRe)(g, n) ? n : g;
  switch (d.code) {
    case "unknown_host":
      return u === n ? { ...d, message: (0, import_chunk_thxnftw8.BCa)({ name: n, toolName: e.name }) } : d;
    case "not_served":
      return { ...d, message: u === n ? (0, import_chunk_thxnftw8.GCa)({ name: u, toolName: e.name }) : (0, import_chunk_thxnftw8.WCa)({ name: u, toolName: e.name, servedBy: n }) };
    case "incompatible": {
      if (h.kind !== "remote" || h.host.protocol.kind !== "incompatible") return d;
      return { ...d, message: u === n ? (0, import_chunk_thxnftw8.u6r)({ name: u, why: h.host.protocol, runsOnlyThere: e.name }) : (0, import_chunk_thxnftw8.u6r)({ name: u, why: h.host.protocol, servedInsteadBy: { toolName: e.name, name: n } }) };
    }
    default:
      return d;
  }
}
function N(e, o) {
  return (0, import_chunk_4smdap7r.M)(e.toolState.get(import_chunk_sjqze7qg.xq).hosts().flatMap((n) => n.kind === "remote" && n.status === "online" && n.protocol.kind !== "incompatible" && n.servedTools.has(o) ? [n.name] : []));
}
function T(e, o, n) {
  let s = e.toolState.get(import_chunk_sjqze7qg.xq).hosts().flatMap((i) => i.kind === "remote" && i.name !== n && i.servedTools.has(o) ? [i] : []);
  return [...new Map(s.map((i) => [i.name, i])).values()].map((i) => i.status === "offline" ? `${i.name} (offline)` : i.name);
}
async function w(e, o, n, s, i) {
  if (s.remoteCall !== void 0) return { kind: "error", code: "unknown_host", message: (0, import_chunk_thxnftw8.YGo)({ requested: o, attached: [] }) };
  if (!await (0, import_chunk_d775ds6c.vAe)()) return { kind: "error", code: "gate_off", message: (0, import_chunk_syr33dp2.Bbo)() };
  let r = s.toolState.get(import_chunk_sjqze7qg.xq);
  await k(i, s.abortController.signal, r);
  let a = r.resolve(o);
  if (i.forget !== void 0 && (a.kind === "unknown" || a.kind === "remote" && a.host.source !== "session" && (a.host.status === "offline" || A(s.toolState, a.host.name) || !a.host.servedTools.has(e.name) || a.host.protocol.kind === "incompatible")) && !i.listingUnavailable(r) && i.forget()) await k(i, s.abortController.signal, r), a = r.resolve(o);
  let c, l = a.kind === "unknown" ? (0, import_chunk_syr33dp2.Ubo)(o) : void 0, g = o.trim().toLowerCase(), d = l === void 0 ? void 0 : (0, import_chunk_syr33dp2.f9)(g) ? g : l, h = d !== void 0 && (0, import_chunk_syr33dp2.f9)(d) ? i.reconnectWaitMs?.(d) : void 0, u = d !== void 0 && h !== void 0 ? { machine: d, waitMs: h } : void 0, m;
  if (a.kind === "unknown" && i.awaitAnnounce !== void 0 && (u !== void 0 || P(i.listingProvisional?.(), r, o))) {
    if ((0, import_chunk_w578pjby.t)(`[remote-tools] holding ${e.name} for "${(0, import_chunk_syr33dp2.YH)(o)}" until its machine announces to this worker (bounded by the call's own deadline)`), u !== void 0) i.status?.((0, import_chunk_thxnftw8.eAa)(u.machine, Math.round(u.waitMs / 1e3)), u.waitMs + H);
    let f = Date.now();
    if (c = await i.awaitAnnounce(s.abortController.signal, async () => (i.forget?.(), await k(i, s.abortController.signal, r), r.resolve(o).kind === "remote"), u), u !== void 0) {
      let p = Date.now() - f;
      m = p > v ? p : void 0;
    }
    if ((0, import_chunk_w578pjby.t)(`[remote-tools] ${e.name} for "${(0, import_chunk_syr33dp2.YH)(o)}": ${O(c)}`), c.kind !== "aborted") await k(i, s.abortController.signal, r), a = r.resolve(o);
  }
  switch (a.kind) {
    case "local":
    case "unknown": {
      let f = d === void 0 ? void 0 : s.toolState.get(import_chunk_sjqze7qg.eb).withdrawnFor(d), p = d !== void 0 && f !== void 0 ? { name: d, reason: f } : void 0;
      return i.listingUnavailable(r) ? { kind: "error", code: "host_offline", message: (0, import_chunk_thxnftw8.XGo)() } : E(i.listingProvisional?.(), r, u?.machine ?? o, c, u !== void 0 || (i.bridgeReached?.() ?? true), u !== void 0, p, i.canAskForFolder?.() ?? false) ?? (p !== void 0 ? { kind: "error", code: "host_offline", message: (0, import_chunk_thxnftw8.JGo)(p.name, p.reason) } : { kind: "error", code: "unknown_host", message: (0, import_chunk_thxnftw8.YGo)({ requested: o, attached: r.hosts().flatMap((b) => b.kind !== "remote" ? [] : [b.status === "offline" ? `${b.name} (offline)` : b.name]) }) });
    }
    case "remote": {
      let { host: f } = a;
      if (f.status === "offline" && f.source !== "session") return { kind: "error", code: "host_offline", message: (0, import_chunk_thxnftw8.ivn)(f.name) };
      if (f.protocol.kind === "incompatible") return { kind: "error", code: "incompatible", message: (0, import_chunk_thxnftw8.u6r)({ name: f.name, why: f.protocol }) };
      if (!f.servedTools.has(e.name)) return { kind: "error", code: "not_served", message: (0, import_chunk_thxnftw8.zCa)({ name: f.name, toolName: e.name, served: [...f.servedTools], offersMcpTools: (f.passthroughTools?.size ?? 0) > 0 }) };
      return { kind: "remote", host: f, input: n, ...m !== void 0 && { waitedMs: m } };
    }
  }
}
function Sht(e) {
  return e.mcpInfo?.serverName === import_chunk_qdcbcsg7.$n;
}
function _(e, o, n) {
  let s = n.mcpInfo?.toolName;
  if (s === void 0) return;
  if (o === void 0) return e.passthroughHost(s);
  let i = (r) => r.name === o && r.passthroughTools?.has(s) === true;
  return e.sourceHosts("session").find(i) ?? e.sourceHosts("bridge").find(i);
}
async function y(e, o, n, s) {
  if (n.remoteCall !== void 0) return { kind: "local", input: o };
  let i = n.toolState.get(import_chunk_bzyb60p0.XL), r = i.machineFor(e), a = (m) => ({ kind: "error", code: "not_served", message: (0, import_chunk_thxnftw8.p6r)({ name: m, toolName: e.name }) });
  if (!await (0, import_chunk_d775ds6c.vAe)()) return r === void 0 ? { kind: "local", input: o } : a(r);
  if (r !== void 0 && !i.presentable()) return a(r);
  if (r === void 0 && (0, import_chunk_2hdy50wd.Xf)()) return { kind: "local", input: o };
  let c = n.toolState.get(import_chunk_sjqze7qg.xq);
  await k(s, n.abortController.signal, c);
  let l = _(c, r, e);
  if ((l === void 0 || l.source !== "session" && (l.status === "offline" || l.protocol.kind === "incompatible")) && (0, import_chunk_rts2v6y0.utt)(e.mcpInfo?.toolName ?? "") && s.forget !== void 0 && !s.listingUnavailable(c) && s.forget()) await k(s, n.abortController.signal, c), l = _(c, r, e);
  if (l === void 0) {
    if (r !== void 0) return { kind: "error", code: "not_served", message: (0, import_chunk_thxnftw8.$Mt)({ name: r, toolName: e.name }) };
    if (s.listingUnavailable(c)) return { kind: "error", code: "host_offline", message: (0, import_chunk_thxnftw8.XGo)() };
    let m = C(c), f = e.mcpInfo?.toolName ?? e.name;
    if (!(0, import_chunk_rts2v6y0.utt)(f)) return { kind: "local", input: o };
    if (m === void 0) switch (s.machineOffer()) {
      case "offered":
        return { kind: "error", code: "incompatible", message: (0, import_chunk_thxnftw8.p4s)() };
      case "unread":
        return { kind: "error", code: "host_offline", message: (0, import_chunk_thxnftw8.XGo)() };
      case "none":
        return { kind: "local", input: o };
    }
    if (m.status === "offline") {
      if (m.source === "session") n.toolState.get(import_chunk_6crpgxs4.Uqe).told(n.toolState.get(import_chunk_sjqze7qg.eb), n.agentId, m.name);
      return { kind: "error", code: "host_offline", message: m.source === "session" ? (0, import_chunk_thxnftw8.f6r)(m.name, m.asleep === true ? "it said it was going to sleep" : "it did not answer a liveness check", "machine", (0, import_chunk_thxnftw8.UMt)(m), { cause: m.asleep === true ? "asleep" : m.busy === true ? "busy" : "silent", lastHeardAt: m.lastHeardAt }) : (0, import_chunk_thxnftw8.ivn)(m.name) };
    }
    return { kind: "error", code: "not_served", message: m.rejectedPassthroughTools?.has(f) === true ? (0, import_chunk_thxnftw8.$Ca)({ name: m.name, toolName: e.name }) : (0, import_chunk_thxnftw8.$Mt)({ name: m.name, toolName: e.name }) };
  }
  if (l.source === "session" && !i.presentable()) return a(l.name);
  if (l.status === "offline" && l.source !== "session") return { kind: "error", code: "host_offline", message: (0, import_chunk_thxnftw8.ivn)(l.name) };
  if (l.protocol.kind === "incompatible") return { kind: "error", code: "incompatible", message: (0, import_chunk_thxnftw8.u6r)({ name: l.name, why: l.protocol, runsOnlyThere: e.name }) };
  if (l.description?.kind === "desktop_app") return { kind: "remote", host: l, input: (0, import_chunk_qwbhh2k3.Pn)(o, import_chunk_syr33dp2.hvr) };
  let g = o[import_chunk_syr33dp2.io];
  if (typeof g === "string" && (g.trim() === "" || (0, import_chunk_syr33dp2.Oat)(g))) return { kind: "error", code: "unknown_host", message: (0, import_chunk_thxnftw8.UCa)({ name: l.name, toolName: e.name }) };
  let { requested: d, input: h } = (0, import_chunk_syr33dp2.EV)(S(o));
  if (d === void 0) return { kind: "remote", host: l, input: h };
  let u = c.resolve(d);
  return u.kind === "remote" && u.host.name === l.name ? { kind: "remote", host: l, input: h } : { kind: "error", code: "unknown_host", message: (0, import_chunk_thxnftw8.YGo)({ requested: d, attached: [l.name] }) };
}
function A(e, o) {
  return e.get(import_chunk_sjqze7qg.eb).entries().some((n) => n.name === o && n.status === "offline");
}
function C(e) {
  return e.hosts().find((o) => o.kind === "remote" && (o.source === "bridge" || o.source === "session"));
}
function S(e) {
  let o = (0, import_chunk_qwbhh2k3.Pn)(e, import_chunk_syr33dp2.mvr), n = e[import_chunk_syr33dp2.io];
  return typeof n === "string" ? { ...o, [import_chunk_syr33dp2.io]: n } : o;
}
function P(e, o, n) {
  return e === "not_reannounced" && !(0, import_chunk_syr33dp2.Oat)(n) && !o.hosts().some((s) => s.kind === "remote");
}
function O(e) {
  switch (e.kind) {
    case "announced":
      return "the machine announced";
    case "routable":
      return "the machine became routable over the device bridge";
    case "gave_up":
      return `gave up after ${e.waitedMs} ms`;
    case "gave_up_earlier":
      return `not waiting again (gave up after ${e.waitedMs} ms earlier this worker life)`;
    case "aborted":
      return "the turn was aborted while waiting";
  }
}
function E(e, o, n, s, i, r, a, c) {
  if ((0, import_chunk_syr33dp2.Oat)(n) || !r && o.hosts().some((d) => d.kind === "remote")) return;
  if (r && s?.kind === "announced") return { kind: "error", code: "host_offline", message: a === void 0 ? (0, import_chunk_thxnftw8.f4s)(n) : (0, import_chunk_thxnftw8.JGo)(a.name, a.reason) };
  let g = s?.kind === "gave_up" || s?.kind === "gave_up_earlier" ? "not_reannounced" : e;
  if (a !== void 0 && g !== "connecting") return { kind: "error", code: "host_offline", message: (0, import_chunk_thxnftw8.JGo)(a.name, a.reason) };
  if (g === void 0) return;
  return { kind: "error", code: g === "set_aside" ? "incompatible" : "host_offline", message: D(g, n, s, i, c) };
}
function D(e, o, n, s, i) {
  switch (e) {
    case "connecting":
      return (0, import_chunk_thxnftw8.DCa)(o);
    case "not_connected":
      return (0, import_chunk_thxnftw8.FCa)();
    case "serves_nothing":
      return (0, import_chunk_thxnftw8.f4s)(o);
    case "set_aside":
      return (0, import_chunk_thxnftw8.p4s)();
    case "not_reannounced":
      return n?.kind === "gave_up_earlier" ? (0, import_chunk_thxnftw8.NCa)(o, n.waitedMs, s, i) : (0, import_chunk_thxnftw8.LCa)(o, n?.kind === "gave_up" ? n.waitedMs : 0, s, i);
  }
}
async function k(e, o, n) {
  await (0, import_chunk_5appeerh.Tn)(e.refresh(n), o, () => new import_chunk_jv7av99m.Ie()).catch((s) => {
    if (!(s instanceof import_chunk_jv7av99m.Ie)) throw s;
  });
}
