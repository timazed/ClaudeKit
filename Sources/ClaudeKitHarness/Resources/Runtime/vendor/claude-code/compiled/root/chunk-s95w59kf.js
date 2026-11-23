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
var chunk_s95w59kf_exports = {};
__export(chunk_s95w59kf_exports, {
  Tte: () => Tte,
  opa: () => opa,
  spa: () => spa,
  xo: () => xo
});
module.exports = __toCommonJS(chunk_s95w59kf_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3jjr3wje = require("/$bunfs/root/chunk-3jjr3wje.js");
var import_net = require("net");
var i = { debug: 0, info: 1, warn: 2, error: 3 };
function w() {
  let e = import_chunk_c203g5kd.s.CLAUDE_GATEWAY_LOG_LEVEL?.toLowerCase();
  return e && e in i ? i[e] : i.info;
}
function u() {
  return import_chunk_c203g5kd.s.CLAUDE_GATEWAY_LOG_FORMAT?.toLowerCase() === "json";
}
var y = { "\n": "\\n", "\r": "\\r", "	": "\\t" };
function m(e) {
  return e.replace(/[\u0000-\u001f\u007f-\u009f\u2028\u2029]/g, (r) => y[r] ?? `\\u${r.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function xo(e, r) {
  if (i[e] < w()) return;
  let n = (/* @__PURE__ */ new Date()).toISOString(), a = e === "warn" ? "WARNING" : e.toUpperCase();
  process.stderr.write(u() ? `${m(JSON.stringify({ severity: a, time: n, message: r }))}
` : `[gateway] ${n} ${e} ${m(r)}
`);
}
function opa(e) {
  if (u()) xo("error", `claude gateway: ${e}`);
  else process.stderr.write(`claude gateway: ${e}
`);
}
function Tte(e, r) {
  process.stderr.write(`${JSON.stringify({ ts: (/* @__PURE__ */ new Date()).toISOString(), evt: e, ...r })}
`);
}
function spa(e, r) {
  let n = ["This gateway can push settings that run commands on developer machines.", "Keep it on your private network. Never expose it to the public internet."];
  if (!u()) {
    let t = ["Claude apps gateway", "", ...n].map((o) => `\u2551  ${o.padEnd(74)}\u2551
`).join("");
    process.stderr.write(`
\u2554${"\u2550".repeat(76)}\u2557
${t}\u255A${"\u2550".repeat(76)}\u255D
`);
  } else xo("warn", n.join(" "));
  let a = r.tls ? "https" : "http", c = ["metrics", "logs", "traces"].filter((t) => e.telemetry.forward_to.some((o) => o[t]));
  if (xo("info", `claude gateway listening on ${a}://${r.hostname}:${r.port}`), e.listen.public_url) xo("info", `public_url ${e.listen.public_url}`);
  let l = e.listen.trusted_proxies.length;
  if (xo("info", l === 0 ? "client IPs: TCP peer address (listen.trusted_proxies empty)" : `client IPs: X-Forwarded-For via listen.trusted_proxies (${l} ${l === 1 ? "entry" : "entries"})`), e.oidc) {
    xo("info", `oidc issuer ${e.oidc.issuer}`);
    let t = e.oidc.allowed_email_domains ?? [];
    xo("info", `email domains ${t.length > 0 ? t.join(",") : "(unrestricted)"}`);
    let o = e.oidc.allowed_groups ?? [];
    xo("info", `allowed groups ${o.length > 0 ? o.join(",") : "(unrestricted)"}`);
  } else xo("info", "oidc: not configured (customer-routed inference only)");
  if (e.cri?.enabled) xo("info", `customer-routed inference: enabled (${e.cri.org_allowlist.length} allowed org(s), policy webhook ${e.cri.policy?.webhook ? "configured" : "not configured"})`);
  xo("info", `upstreams ${e.upstreams.length}: ${e.upstreams.map((t) => `${t.name}(${t.provider}${t.groups ? `, groups: ${t.groups.join(", ")}` : ""})`).join(", ")}`), xo("info", e.telemetry.forward_to.length === 0 ? "telemetry relay: not configured" : `telemetry relay: ${e.telemetry.forward_to.length} destination(s), signals enabled: ${c.join(",") || "none"}`);
  for (let t of e.telemetry.forward_to) {
    let { host: o, hostname: g } = new URL(t.url);
    if (!(0, import_net.isIP)(g.replace(/^\[|\]$/g, "")) && (0, import_chunk_3jjr3wje.DE)() && (0, import_chunk_3jjr3wje.yk)(t.url)) xo("info", `telemetry relay: ${o} matches NO_PROXY; exports to it skip the proxy`);
  }
  xo("info", `managed settings: ${r.managed ? "configured" : "not configured"}`), xo("info", `upstream requests: at most ${r.outboundLimit} at once per process (set BUN_CONFIG_MAX_HTTP_REQUESTS to change)`);
  let d = e.upstreams.filter((t) => t.provider !== "anthropic");
  if (e.timeouts.operator_set && d.length > 0) xo("info", `timeouts.upstream_ttfb_ms: ${e.timeouts.upstream_ttfb_ms} ms also applies to streaming and count_tokens requests on ${d.map((t) => t.name).join(", ")} (older gateways applied it to provider: anthropic upstreams only)`);
  let p = e.store.readiness_grace_seconds;
  if (p > 0) xo("info", `readiness: /readyz keeps reporting ready for up to ${p}s after Postgres stops answering (store.readiness_grace_seconds)`);
}
