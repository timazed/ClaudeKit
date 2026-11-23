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
var chunk_kdpctb21_exports = {};
__export(chunk_kdpctb21_exports, {
  BJ: () => BJ,
  gKo: () => gKo
});
module.exports = __toCommonJS(chunk_kdpctb21_exports);
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_se72nykz = require("/$bunfs/root/chunk-se72nykz.js");
function o(e) {
  let n = "plugin" in e ? e.plugin : "no-plugin", t = e.type === "mcpb-needs-config" ? `:${e.serverName}` : "", i = e.type === "mcp-server-connector-blocked" && e.checkFailed ? ":check-failed" : "";
  return `${e.type}:${e.source}:${n}${t}${i}`;
}
function gKo(e) {
  return e === "lsp-manager" || e.startsWith("plugin:");
}
function g(e, n) {
  let t = e.filter((r) => gKo(r.source)), i = new Set(n.map(l));
  return [...t.filter((r) => !i.has(l(r))), ...n];
}
function l(e) {
  return e.type === "generic-error" ? `generic-error:${e.source}:${e.error}` : `${e.type}:${e.source}`;
}
function u(e, n) {
  let t = e.filter((r) => r.source.startsWith("plugin:")), i = new Set(n.map((r) => `${r.type}:${r.source}`));
  return [...t.filter((r) => !i.has(`${r.type}:${r.source}`)), ...n];
}
class BJ {
  #t;
  #n;
  constructor(e) {
    this.#t = e.getState, this.#n = e.setState;
  }
  static over(e) {
    return new BJ({ getState: e.getState, setState: (0, import_chunk_se72nykz.MIr)(e.setState) });
  }
  get() {
    return this.#t().plugins;
  }
  #e(e) {
    this.#n((n) => {
      let t = e(n.plugins);
      return t === n.plugins ? n : { ...n, plugins: t };
    });
  }
  addErrors(e) {
    if (e.length === 0) return;
    this.#e((n) => {
      let t = new Set(n.errors.map((s) => o(s))), i = e.filter((s) => !t.has(o(s)));
      if (i.length === 0) return n;
      return { ...n, errors: [...n.errors, ...i] };
    });
  }
  removeErrorsOf(e) {
    if (e.length === 0) return;
    let n = e.map((t) => ({ id: t, ...(0, import_chunk_xcgcdx61.tJ)(t) }));
    this.#e((t) => {
      let i = t.errors.filter((s) => {
        let r = (0, import_chunk_xcgcdx61.tJ)(s.source).marketplace;
        return !n.some((a) => (0, import_chunk_xcgcdx61.qb)(s.source, a.id) || "plugin" in s && s.plugin === a.name && !(0, import_chunk_xcgcdx61.cce)(s.source) && (r === void 0 || r === a.marketplace));
      });
      return i.length === t.errors.length ? t : { ...t, errors: i };
    });
  }
  addWarnings(e) {
    this.#e((n) => {
      let t = new Set(e.map((a) => o(a))), i = n.warnings.filter((a) => a.type !== "mcp-server-connector-blocked" || t.has(o(a))), s = new Set(i.map((a) => o(a))), r = e.filter((a) => !s.has(o(a)));
      if (r.length === 0 && i.length === n.warnings.length) return n;
      return { ...n, warnings: [...i, ...r] };
    });
  }
  markNeedsRefresh(e = "changed") {
    this.#e((n) => {
      if (e === "not-loaded") return n.needsRefresh && n.needsRefreshToLoad === true ? n : { ...n, needsRefresh: true, needsRefreshToLoad: true };
      return n.needsRefresh ? n : { ...n, needsRefresh: true };
    });
  }
  retarget(e) {
    this.#e((n) => {
      let t = n.enabled.findIndex((r) => r.source === e.source && r.path === e.path), i = n.enabled[t];
      if (i === void 0) return n;
      let s = (0, import_chunk_bzyb60p0.jdr)(i, e);
      if (s === i) return n;
      return { ...n, enabled: n.enabled.with(t, s) };
    });
  }
  setPendingMarketplaces(e) {
    this.#e((n) => ({ ...n, installationStatus: { marketplaces: e.map((t) => ({ name: t, status: "pending" })), plugins: [] } }));
  }
  setMarketplaceStatus(e, n, t) {
    this.#e((i) => ({ ...i, installationStatus: { ...i.installationStatus, marketplaces: i.installationStatus.marketplaces.map((s) => s.name === e ? { ...s, status: n, error: t } : s) } }));
  }
  applyRefresh(e, n = false) {
    this.#s(e, { needsRefresh: false, needsRefreshToLoad: void 0 }, true, n);
  }
  applyJoin(e, n) {
    this.#s(e, {}, n);
  }
  applyLanding() {
    this.#n((e) => ({ ...e, plugins: { ...e.plugins, commands: [...e.plugins.commands] }, agentDefinitions: { ...e.agentDefinitions, allAgents: [...e.agentDefinitions.allAgents], activeAgents: [...e.agentDefinitions.activeAgents] } }));
  }
  flagAgents() {
    return this.#t().agentDefinitions.allAgents.filter((e) => e.source === "flagSettings");
  }
  #s(e, n, t, i = false) {
    this.#n((s) => ({ ...s, plugins: { ...s.plugins, enabled: e.enabled, disabled: e.disabled, commands: e.commands, errors: g(s.plugins.errors, e.errors), warnings: u(s.plugins.warnings, e.warnings), ...n }, agentDefinitions: e.agentDefinitions, mcp: t ? { ...s.mcp, pluginReconnectKey: s.mcp.pluginReconnectKey + 1, ...i && { pluginReloadsKeepingConnectorList: (s.mcp.pluginReloadsKeepingConnectorList ?? 0) + 1 } } : s.mcp }));
  }
}
