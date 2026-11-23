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
var chunk_xr7b2tpa_exports = {};
__export(chunk_xr7b2tpa_exports, {
  I9t: () => I9t
});
module.exports = __toCommonJS(chunk_xr7b2tpa_exports);
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_271xsh6x = require("/$bunfs/root/chunk-271xsh6x.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_px0hhsq7 = require("/$bunfs/root/chunk-px0hhsq7.js");
var import_chunk_6mfepmbb = require("/$bunfs/root/chunk-6mfepmbb.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_y8kqnbqt = require("/$bunfs/root/chunk-y8kqnbqt.js");
var import_chunk_yrpmp1hk = require("/$bunfs/root/chunk-yrpmp1hk.js");
var import_chunk_q8r3eqnc = require("/$bunfs/root/chunk-q8r3eqnc.js");
var import_chunk_08m42etc = require("/$bunfs/root/chunk-08m42etc.js");
var import_chunk_1jfwdjvf = require("/$bunfs/root/chunk-1jfwdjvf.js");
var import_chunk_8v27xkv5 = require("/$bunfs/root/chunk-8v27xkv5.js");
var import_chunk_924etrq7 = require("/$bunfs/root/chunk-924etrq7.js");
var import_chunk_3bjtjsgp = require("/$bunfs/root/chunk-3bjtjsgp.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
function f() {
  return require("/$bunfs/root/chunk-4kvvnjdb.js").mcpClientModule();
}
function v(e) {
  (0, import_chunk_qdcbcsg7.Ap)(e.client).onclose = void 0, f().clearServerCache(e.name, e.config).catch(() => {
  });
}
function O(e, n, i) {
  return { tools: (0, import_chunk_08m42etc.V3)(e.tools, (s) => s.name?.startsWith(i)), commands: (0, import_chunk_08m42etc.V3)(e.commands, (s) => (0, import_chunk_bzyb60p0.ZE)(s, n)), resources: (0, import_chunk_y8kqnbqt.wE)(e.resources, n), resourceTemplates: (0, import_chunk_y8kqnbqt.wE)(e.resourceTemplates, n) };
}
class I9t {
  #e;
  constructor(e) {
    this.#e = e;
  }
  static over(e) {
    return new I9t((0, import_chunk_se72nykz.qXe)(e.getState, e.setState, "mcp"));
  }
  get() {
    return this.#e.get();
  }
  markNeedsAuth(e) {
    this.#e.set((n) => (0, import_chunk_08m42etc.Kya)(n, e));
  }
  async clearNeedsAuth(e) {
    let n = this.get().clients.find((s) => s.name === e);
    if (n?.type !== "needs-auth") return;
    let i = await f().peekSettledConnection(e, n.config);
    if (i?.type !== "connected") return;
    this.#e.set((s) => ({ ...s, clients: s.clients.map((t) => t === n ? (0, import_chunk_8v27xkv5.t5)(i, n.config) : t) }));
  }
  adoptServer(e, n, i) {
    let s = "adopted";
    return this.#e.set((t) => {
      if (i?.asked === true) return (0, import_chunk_08m42etc.uKe)({ mcp: t }, e, n).mcp;
      let r = t.clients.find((c) => c.name === e);
      if (s = H(r, n) ?? "adopted", r === void 0) return t;
      if (s !== "adopted") return w(t, r, s);
      return (0, import_chunk_08m42etc.uKe)({ mcp: t }, e, K(r, n), { appendIfAbsent: false }).mcp;
    }), s;
  }
  markReconnectDiscarded(e, n) {
    this.#e.set((i) => {
      let s = i.clients.find((t) => t.name === e);
      if (s === void 0 || (0, import_chunk_3bjtjsgp.Uo)(e, s.config) !== (0, import_chunk_3bjtjsgp.Uo)(e, n)) return i;
      if ((0, import_chunk_bzyb60p0.gi)(e)) return w(i, s, "disabled");
      if ((0, import_chunk_bzyb60p0.zu)(e, s.config) !== null) return w(i, s, "policy-blocked");
      if (s.type !== "connected") return i;
      return { ...i, clients: i.clients.map((t) => t === s ? { name: e, type: "failed", config: s.config, error: import_chunk_271xsh6x.qho } : t), ...I(i, e) };
    });
  }
  swapServerTools(e, n, i) {
    let s = false;
    return this.#e.set((t) => {
      let r = (0, import_chunk_08m42etc.MIt)(t.clients.find((d) => d.name === e), n, i);
      if (r === void 0) return (0, import_chunk_k449cc64.He)(e, "A re-queried tool list was not applied: another server holds the name"), t;
      let c = (0, import_chunk_08m42etc.M9t)({ mcp: t }, e, r);
      return s = c.mcp !== t, c.mcp;
    }), s;
  }
  swapListedCommands(e, n, i) {
    this.#e.set((s) => {
      let t = s.clients.find((r) => r.name === e.name);
      return t?.type === "connected" && t.client === e.client ? { ...s, commands: [...(0, import_chunk_08m42etc.V3)(s.commands, n), ...(0, import_chunk_924etrq7.$ue)(t, i)] } : s;
    });
  }
  setSuppressedClaudeAiConnectors(e) {
    this.#e.set((n) => (0, import_chunk_bzyb60p0.Wcr)(n.suppressedClaudeAiConnectors ?? [], e) ? n : { ...n, suppressedClaudeAiConnectors: e });
  }
  setReservedNameRefusals(e) {
    this.#e.set((n) => {
      let i = n.reservedNameRefusals ?? [];
      return i.length === e.length && i.every((t, r) => t.scope === e[r]?.scope && t.name === e[r]?.name) ? n : { ...n, reservedNameRefusals: e };
    });
  }
  addPendingServers(e) {
    this.#e.set((n) => {
      let i = D(n, e);
      if (i.length === 0) return n;
      return { ...n, clients: [...n.clients, ...i] };
    });
  }
  reconcileConfiguredServers(e, n, i) {
    this.#e.set((s) => {
      let { stale: t, ...r } = (0, import_chunk_bzyb60p0.Pza)(s, e, n);
      i(t);
      let c = D(r, e);
      if (c.length === 0 && t.length === 0) {
        if (s.clientsInitialized) return s;
        return { ...s, clientsInitialized: true };
      }
      return { ...s, ...r, clientsInitialized: true, clients: [...r.clients, ...c] };
    });
  }
  dropRemovedServers(e, n, i, s) {
    this.#e.set((t) => {
      let { stale: r, ...c } = (0, import_chunk_bzyb60p0._ar)(t, (d) => e.has(d.name) && ((0, import_chunk_bzyb60p0.gar)(d.config, i) || (0, import_chunk_bzyb60p0.gdi)(d, n)));
      if (r.length === 0) return t;
      return s(r), { ...t, ...c };
    });
  }
  applyIdentityBoundary(e, n) {
    let i = [...e, ...n];
    if (i.length === 0) return;
    this.#e.set((s) => {
      let t = i.map((c) => [c, (0, import_chunk_px0hhsq7.Rr)(c)]), r = (c) => t.some(([d, u]) => (0, import_chunk_px0hhsq7.Bu)(c, d, u));
      return { ...s, clients: s.clients.flatMap((c) => n.has(c.name) ? [] : e.has(c.name) ? [{ name: c.name, type: "pending", config: c.config }] : [c]), tools: (0, import_chunk_08m42etc.V3)(s.tools, r), commands: (0, import_chunk_08m42etc.V3)(s.commands, (c) => i.some((d) => (0, import_chunk_bzyb60p0.ZE)(c, d))), resources: (0, import_chunk_y8kqnbqt.wE)(s.resources, i), resourceTemplates: (0, import_chunk_y8kqnbqt.wE)(s.resourceTemplates, i) };
    });
  }
  applyQueuedUpdates(e, n) {
    let i = [];
    if (this.#e.set((s) => {
      let t = s;
      for (let r of e) {
        if (r.epoch !== n.currentEpoch && (0, import_chunk_yrpmp1hk.qL)(r.config)) {
          if (r.type === "connected") f().detachAndCloseConnection(r);
          continue;
        }
        let c = t.clients.find((a) => a.name === r.name), d = L(c, r), u = d === "stands" && c !== void 0 ? z(c, r) : r, { tools: S, commands: p, resources: R, resourceTemplates: A, replaceOnly: g, epoch: J, asked: V, superseded: U, ...j } = u, o = j, C = o.type === "disabled" || o.type === "failed", b = C ? S ?? [] : S, T = C ? p ?? [] : p, h = C ? R ?? [] : R, y = C ? A ?? [] : A, M = (0, import_chunk_px0hhsq7.Rr)(o.name), l = t.clients.findIndex((a) => a.name === o.name), m = l !== -1 ? t.clients[l] : void 0, E = o.type === "connected" && m?.type === "connected" && m.client === o.client, k = (0, import_chunk_xcgcdx61.ji)(o) && (0, import_chunk_bzyb60p0.zu)(o.name, o.config) === "managed-policy";
        if (o.type !== "disabled" && !E && (0, import_chunk_bzyb60p0.gi)(o.name) && !(k && m?.type !== "disabled")) {
          if (k) n.onDoorDenied(o.name);
          if (o.type === "connected") v(o);
          if (n.onOrphanedDisable(o.name), m && m.type !== "disabled" && (m.type !== "connected" || !(0, import_chunk_xcgcdx61.ji)(o))) t = { ...t, clients: t.clients.map((a) => a.name === o.name ? { name: o.name, type: "disabled", config: d === "elsewhere" ? a.config : o.config } : a), ...O(t, o.name, M) };
          continue;
        }
        if (d === "elsewhere" && m !== void 0) {
          if (o.type !== "disabled" || o.heldBy !== void 0) {
            if (o.type === "connected") v(o);
            (0, import_chunk_k449cc64.He)(o.name, `A late ${o.type} result was dropped: another server holds the name`);
            continue;
          }
          if (m.type === "connected") v(m);
          o = { name: o.name, type: "disabled", config: m.config };
        }
        let P = (0, import_chunk_xcgcdx61.ji)(o) ? (0, import_chunk_bzyb60p0.zu)(o.name, o.config) : null;
        if (P) {
          n.onDoorDenied(o.name);
          let a = o.config;
          if (o.type === "connected") (0, import_chunk_qdcbcsg7.Ap)(o.client).onclose = void 0;
          else if (m?.type === "connected") (0, import_chunk_qdcbcsg7.Ap)(m.client).onclose = void 0, a = m.config;
          if (f().clearServerCache(o.name, a).catch(() => {
          }), l === -1) continue;
          t = { ...t, clients: t.clients.map((x) => x.name === o.name ? { name: o.name, type: "failed", config: o.config, ...(0, import_chunk_bzyb60p0.iw)(P, o.name, o.config) } : x), ...O(t, o.name, M) };
          continue;
        }
        if (g && l !== -1 && (t.clients[l]?.type === "needs-auth" || t.clients[l]?.type === "disabled")) {
          if (o.type === "connected") (0, import_chunk_qdcbcsg7.Ap)(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {
          });
          continue;
        }
        if (l === -1 && (g || d === "nowhere" && !U)) {
          if (o.type === "connected") (0, import_chunk_qdcbcsg7.Ap)(o.client).onclose = void 0, f().clearServerCache(o.name, o.config).catch(() => {
          });
          if (!g) n.onOrphanedDisable(o.name), (0, import_chunk_k449cc64.He)(o.name, `A late ${o.type} result was dropped: no row holds the name`);
          continue;
        }
        if (g && (0, import_chunk_sjqze7qg.U_)() && l !== -1 && (0, import_chunk_3bjtjsgp.Uo)(o.name, t.clients[l].config) !== (0, import_chunk_3bjtjsgp.Uo)(o.name, o.config)) {
          if (o.type === "connected") f().detachAndCloseConnection(o);
          continue;
        }
        if (l !== -1 && !(0, import_chunk_xcgcdx61.Dgn)(t.clients[l], o)) {
          if (d === "asked") t = G(t, o);
          continue;
        }
        if (l === -1) i.push(o.name);
        let Q = l === -1 ? [...t.clients, o] : t.clients.map((a) => a.name === o.name ? o : a), W = b === void 0 ? t.tools : [...(0, import_chunk_08m42etc.V3)(t.tools, (a) => a.name?.startsWith(M)), ...b], F = T === void 0 ? t.commands : [...(0, import_chunk_08m42etc.V3)(t.commands, (a) => (0, import_chunk_bzyb60p0.ZE)(a, o.name)), ...T], _ = h === void 0 ? t.resources : h.length > 0 ? { ...t.resources, [o.name]: h } : (0, import_chunk_y8kqnbqt.wE)(t.resources, o.name), B = y === void 0 ? t.resourceTemplates : y.length > 0 ? { ...t.resourceTemplates, [o.name]: y } : (0, import_chunk_y8kqnbqt.wE)(t.resourceTemplates, o.name);
        t = { ...t, clients: Q, tools: W, commands: F, resources: _, resourceTemplates: B };
      }
      return t;
    }), i.length > 0) n.onRowsCreated(i);
  }
}
function D(e, n) {
  let i = new Set(e.clients.map((s) => s.name));
  return Object.entries(n).filter(([s]) => !i.has(s)).map(([s, t]) => ({ name: s, type: (0, import_chunk_bzyb60p0.gi)(s) ? "disabled" : "pending", config: t }));
}
function I(e, n) {
  let i = (0, import_chunk_px0hhsq7.Rr)(n);
  return { tools: (0, import_chunk_08m42etc.V3)(e.tools, (s) => (0, import_chunk_px0hhsq7.Bu)(s, n, i)), commands: (0, import_chunk_08m42etc.V3)(e.commands, (s) => (0, import_chunk_bzyb60p0.ZE)(s, n)), resources: (0, import_chunk_y8kqnbqt.wE)(e.resources, n), resourceTemplates: (0, import_chunk_y8kqnbqt.wE)(e.resourceTemplates, n) };
}
function L(e, n) {
  if (n.asked === true) return "asked";
  if (e === void 0) return "nowhere";
  return (0, import_chunk_3bjtjsgp.Uo)(n.name, e.config) === (0, import_chunk_3bjtjsgp.Uo)(n.name, n.config) ? "stands" : "elsewhere";
}
function z(e, n) {
  let i = { name: n.name, config: e.config };
  return { ...(0, import_chunk_q8r3eqnc.Jwn)(n, e.config), ...n.tools !== void 0 && { tools: (0, import_chunk_1jfwdjvf.eye)(i, n.tools) }, ...n.commands !== void 0 && { commands: (0, import_chunk_924etrq7.$ue)(i, n.commands) } };
}
function G(e, n) {
  let i = e.clients.find((p) => p.name === n.name);
  if (i === void 0 || (0, import_chunk_3bjtjsgp.Uo)(n.name, i.config) !== (0, import_chunk_3bjtjsgp.Uo)(n.name, n.config)) return e;
  let s = (0, import_chunk_q8r3eqnc.Jwn)(i, n.config);
  if (s === i) return e;
  let t = { name: n.name, config: n.config }, r = (0, import_chunk_px0hhsq7.Rr)(n.name), [c, d] = (0, import_chunk_6mfepmbb.Wl)(e.tools, (p) => (0, import_chunk_px0hhsq7.Bu)(p, n.name, r)), [u, S] = (0, import_chunk_6mfepmbb.Wl)(e.commands, (p) => (0, import_chunk_bzyb60p0.ZE)(p, n.name));
  return { ...e, clients: e.clients.map((p) => p === i ? s : p), tools: [...d, ...(0, import_chunk_1jfwdjvf.eye)(t, c)], commands: [...S, ...(0, import_chunk_924etrq7.$ue)(t, u)] };
}
function H(e, n) {
  let { name: i } = n.client;
  if (e === void 0) return "no-row";
  if ((0, import_chunk_3bjtjsgp.Uo)(i, e.config) !== (0, import_chunk_3bjtjsgp.Uo)(i, n.client.config)) return "another-server";
  if ((0, import_chunk_bzyb60p0.gi)(i)) return "disabled";
  if ((0, import_chunk_bzyb60p0.zu)(i, e.config) !== null) return "policy-blocked";
  return;
}
function w(e, n, i) {
  if (i !== "disabled" && i !== "policy-blocked") return e;
  let { name: s, config: t } = n, r = i === "policy-blocked" ? (0, import_chunk_bzyb60p0.zu)(s, t) : null;
  if (r === null && n.type === "disabled") return e;
  let c = r === null ? { name: s, type: "disabled", config: t } : { name: s, type: "failed", config: t, ...(0, import_chunk_bzyb60p0.iw)(r, s, t) };
  return { ...e, clients: e.clients.map((d) => d === n ? c : d), ...I(e, s) };
}
function K(e, n) {
  let i = { name: e.name, config: e.config };
  return { ...n, client: (0, import_chunk_q8r3eqnc.Jwn)(n.client, e.config), tools: (0, import_chunk_1jfwdjvf.eye)(i, n.tools), commands: (0, import_chunk_924etrq7.$ue)(i, n.commands) };
}
