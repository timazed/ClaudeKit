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
var chunk_t2enjxg6_exports = {};
__export(chunk_t2enjxg6_exports, {
  XEo: () => XEo
});
module.exports = __toCommonJS(chunk_t2enjxg6_exports);
var import_chunk_mmevw7ty = require("/$bunfs/root/chunk-mmevw7ty.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var XEo = (0, import_chunk_w1d7ygsk.V)(function(y) {
  Object.defineProperty(y, "__esModule", { value: true });
  y.egressServiceKeys = y.EGRESS_SERVICES = y.CORE_GROUP_LABEL = void 0;
  y.asHostContext = b;
  y.resolveEndpoints = c;
  y.hostsForService = C;
  y.enabledServicesFromConfig = f;
  y.firewallHostsForServices = O;
  y.subprocessHostsForServices = T;
  y.rendererEgressRules = M;
  y.serviceLabelForToggleKey = N;
  var t = (0, import_chunk_mmevw7ty.dX)(), e = (0, import_chunk_mmevw7ty.vj)();
  function b(s) {
    return typeof s === "string" ? { anthropicHost: s } : s;
  }
  y.CORE_GROUP_LABEL = e.msg({ defaultMessage: "Core (VM bundle + Claude CLI binary)", id: "Qee7joNNug" });
  var m = e.msg({ defaultMessage: "Update feed", id: "KbnxmPwS+u" }), _ = e.msg({ defaultMessage: "Update binaries", id: "kEckiEomWG" }), R = e.msg({ defaultMessage: "Crash and error reporting", id: "KebbKnJWUP" }), v = e.msg({ defaultMessage: "Connector favicons", id: "WD43CRFsX6" }), h = e.msg({ defaultMessage: "Analytics events", id: "dEx3lCin50" }), A = e.msg({ defaultMessage: "Performance timing", id: "/01LkRl6b6" });
  y.EGRESS_SERVICES = { "vm-bundle": { toggleKey: null, label: y.CORE_GROUP_LABEL, endpoints: [{ host: t.VM_BUNDLE_HOST, origin: "main", purpose: e.msg({ defaultMessage: "VM workspace bundle and Claude CLI binary, fetched in the background or at session start", id: "KuP75AjRVN" }) }] }, "model-catalog": { toggleKey: null, label: y.CORE_GROUP_LABEL, endpoints: [{ host: t.VM_BUNDLE_HOST, origin: "main", purpose: e.msg({ defaultMessage: "Claude Code model catalog (signed picker metadata), polled every 5\u201315 minutes", id: "B6i3SyZAU2" }) }] }, updater: { toggleKey: "disableAutoUpdates", label: e.msg({ defaultMessage: "Auto-updates", id: "PNFwYup600" }), endpoints: ({ anthropicHost: s, updateViaUpdatesHost: o }) => o ? [{ host: t.UPDATE_FEED_HOST, path: "/api/desktop/", pathSuffix: "/update", origin: "main", purpose: m }, { host: t.VM_BUNDLE_HOST, path: "/releases/", followRedirects: true, origin: "main", purpose: _ }] : [{ host: s, path: "/api/desktop/", pathSuffix: "/update", origin: "renderer", purpose: m }, { host: t.ANTHROPIC_API_HOST, path: "/api/desktop/", pathSuffix: "/update", origin: "renderer", purpose: e.msg({ defaultMessage: "Update feed (releases.claude.com when updateViaUpdatesHost is set)", id: "jAA6DpK01B" }) }, { host: t.VM_BUNDLE_HOST, path: "/releases/", followRedirects: true, origin: "main", purpose: _ }] }, sentry: { toggleKey: "disableEssentialTelemetry", label: e.msg({ defaultMessage: "Essential telemetry", id: "4tdiEppQ3S" }), endpoints: [{ host: t.SENTRY_WILDCARD_HOST, origin: "renderer", purpose: R, firewallAlso: ["*.ingest.us.sentry.io"] }, { host: "sentry.io", origin: "renderer", purpose: R }] }, "datadog-rum": { toggleKey: "disableEssentialTelemetry", label: e.msg({ defaultMessage: "Essential telemetry", id: "4tdiEppQ3S" }), endpoints: ({ anthropicHost: s }) => [{ host: s, path: "/api/v2/rum", exactPath: true, origin: "renderer", cspDirective: [], undeliveredAs503: true, purpose: A }, ...t.DATADOG_INTAKE_HOSTS.map((o) => ({ host: o, origin: "renderer", purpose: A }))] }, "anthropic-telemetry": { toggleKey: "disableNonessentialTelemetry", label: e.msg({ defaultMessage: "Nonessential telemetry", id: "UzLHrala3Q" }), endpoints: ({ anthropicHost: s }) => [{ host: s, path: "/api/event_logging/", origin: "renderer", purpose: h }, { host: t.ANTHROPIC_API_HOST, path: "/api/event_logging/", origin: "subprocess", purpose: e.msg({ defaultMessage: "Claude Code usage telemetry, sent from inside the agent sandbox", id: "nuegL6TUzw" }) }] }, "connector-favicons": { toggleKey: "disableNonessentialServices", label: e.msg({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }), endpoints: [{ host: t.FAVICON_PROXY_HOST, path: "/s2/favicons", followRedirects: true, origin: "renderer", cspDirective: "img-src", purpose: v }, { host: t.GSTATIC_WILDCARD, path: "/faviconV2", origin: "renderer", cspDirective: "img-src", purpose: v }] }, "artifact-sandbox": { toggleKey: "disableNonessentialServices", label: e.msg({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }), endpoints: ({ artifactIframeHost: s }) => [{ host: s !== null && s !== void 0 ? s : t.ARTIFACT_IFRAME_HOST, origin: "renderer", cspDirective: "frame-src", purpose: e.msg({ defaultMessage: "Artifact preview iframe", id: "e6F+tBnFYh" }), firewallAlso: ["cdnjs.cloudflare.com", "fonts.googleapis.com", "cdn.jsdelivr.net"], firewallAlsoPurpose: e.msg({ defaultMessage: "Artifact preview asset CDNs", id: "F3E8xAmcXF" }) }] }, "mcp-app-sandbox": { toggleKey: "disableNonessentialServices", label: e.msg({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }), endpoints: [{ host: t.MCP_APP_SANDBOX_WILDCARD_HOST, origin: "renderer", cspDirective: "frame-src", purpose: e.msg({ defaultMessage: "MCP App widget iframe", id: "1VKIczmlHd" }), firewallAlso: [t.ANTHROPIC_ASSETS_HOST], firewallAlsoPurpose: e.msg({ defaultMessage: "Fonts loaded by MCP App widget iframes", id: "KZlBInyqLF" }) }] }, "spellcheck-dictionary": { toggleKey: "disableNonessentialServices", label: e.msg({ defaultMessage: "Nonessential services", id: "Pc8UzwjRqD" }), endpoints: [{ host: t.SPELLCHECK_DICTIONARY_HOST, origin: "main", platforms: ["linux"], purpose: e.msg({ defaultMessage: "Spellcheck dictionary download (Linux)", id: "RV5jkrepds" }), firewallAlso: [t.SPELLCHECK_DICTIONARY_WILDCARD], firewallAlsoPurpose: e.msg({ defaultMessage: "Redirect targets of the spellcheck dictionary download (Linux)", id: "2PMBhDP0Gf" }) }] }, dictation: { toggleKey: null, label: y.CORE_GROUP_LABEL, endpoints: ({ dictationCsp: s }) => s ? [{ host: s.host, origin: "renderer", cspDirective: "connect-src", cspScheme: s.scheme }] : [] } };
  y.egressServiceKeys = Object.keys(y.EGRESS_SERVICES);
  function c(s, o) {
    let r = b(o), i = typeof s === "function" ? s(r) : s, { platform: n } = r;
    return n === void 0 ? i : i.filter((l) => !l.platforms || l.platforms.includes(n));
  }
  function C(s, o = "") {
    return c(s.endpoints, o).flatMap((r) => {
      var i;
      return [r.host, ...(i = r.firewallAlso) !== null && i !== void 0 ? i : []];
    });
  }
  function P(s, o) {
    var r, i, n, l, d, u, p, E;
    switch (o) {
      case "disableAutoUpdates":
        return ((i = (r = s.autoUpdate) === null || r === void 0 ? void 0 : r.disabled) !== null && i !== void 0 ? i : s.disableAutoUpdates) === true;
      case "disableEssentialTelemetry":
        return ((l = (n = s.telemetry) === null || n === void 0 ? void 0 : n.disableEssential) !== null && l !== void 0 ? l : s.disableEssentialTelemetry) === true;
      case "disableNonessentialTelemetry":
        return ((u = (d = s.telemetry) === null || d === void 0 ? void 0 : d.disableNonessential) !== null && u !== void 0 ? u : s.disableNonessentialTelemetry) === true;
      case "disableNonessentialServices":
        return ((E = (p = s.telemetry) === null || p === void 0 ? void 0 : p.disableNonessentialServices) !== null && E !== void 0 ? E : s.disableNonessentialServices) === true;
    }
  }
  function f(s) {
    return y.egressServiceKeys.filter((o) => {
      let { toggleKey: r } = y.EGRESS_SERVICES[o];
      return r === null || !P(s, r);
    });
  }
  function O(s, o) {
    return f(s).flatMap((r) => {
      let i = y.EGRESS_SERVICES[r];
      return C(i, o).map((n) => ({ host: n, toggleKey: i.toggleKey }));
    });
  }
  function T(s, o = "") {
    return f(s).flatMap((r) => c(y.EGRESS_SERVICES[r].endpoints, o).filter((i) => i.origin === "subprocess").map((i) => i.host));
  }
  function M(s, o) {
    return s.flatMap((r) => c(y.EGRESS_SERVICES[r].endpoints, o).filter((i) => i.origin === "renderer").map(({ host: i, path: n, pathSuffix: l, exactPath: d, followRedirects: u, undeliveredAs503: p }) => ({ host: i, ...n !== void 0 && { path: n }, ...l !== void 0 && { pathSuffix: l }, ...d !== void 0 && { exactPath: d }, ...u !== void 0 && { followRedirects: u }, ...p !== void 0 && { undeliveredAs503: p } })));
  }
  function N(s) {
    if (s === null) return y.CORE_GROUP_LABEL;
    for (let o of y.egressServiceKeys) {
      let r = y.EGRESS_SERVICES[o];
      if (r.toggleKey === s) return r.label;
    }
    return;
  }
});
