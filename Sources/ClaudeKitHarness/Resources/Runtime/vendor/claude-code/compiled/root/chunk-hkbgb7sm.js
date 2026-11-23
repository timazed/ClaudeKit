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
var chunk_hkbgb7sm_exports = {};
__export(chunk_hkbgb7sm_exports, {
  qIa: () => qIa,
  x7s: () => x7s
});
module.exports = __toCommonJS(chunk_hkbgb7sm_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_t7fzcstv = require("/$bunfs/root/chunk-t7fzcstv.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_zhr7rpv7 = require("/$bunfs/root/chunk-zhr7rpv7.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_2nv4wrez = require("/$bunfs/root/chunk-2nv4wrez.js");
var import_chunk_qvjn7dva = require("/$bunfs/root/chunk-qvjn7dva.js");
var import_chunk_8704k7wd = require("/$bunfs/root/chunk-8704k7wd.js");
var import_chunk_tfs0ssqe = require("/$bunfs/root/chunk-tfs0ssqe.js");
var import_chunk_vhsysgcd = require("/$bunfs/root/chunk-vhsysgcd.js");
var import_chunk_z688m88d = require("/$bunfs/root/chunk-z688m88d.js");
var d = { advisor: ["anthropicApi", "featureFlags"], "artifact-capabilities": ["subscription", "nonessentialTraffic"], "artifact-diagramming": ["anthropicApi", "nonessentialTraffic"], artifacts: ["subscription", "nonessentialTraffic"], "autofix-pr": ["subscription"], chrome: ["subscription"], "claude-in-chrome": ["subscription"], design: ["anthropicApi", "nonessentialTraffic"], "design-login": ["anthropicApi", "nonessentialTraffic"], "design-sync": ["anthropicApi", "nonessentialTraffic"], desktop: ["subscription"], import: ["featureFlags"], "install-github-app": ["subscription"], "install-slack-app": ["subscription"], logout: ["anthropicApi"], "privacy-settings": ["subscription"], "rate-limit-options": ["subscription"], "remote-control": ["subscription", "nonessentialTraffic", "featureFlags"], "remote-env": ["subscription"], schedule: ["subscription"], "skill-doctor": ["featureFlags"], slides: ["subscription", "nonessentialTraffic"], teleport: ["subscription"], ultrareview: ["subscription", "featureFlags"], upgrade: ["subscription"], "usage-credits": ["subscription"], voice: ["subscription"], "web-setup": ["subscription", "nonessentialTraffic"] }, f = "https://code.claude.com/docs/en";
function c(o, n) {
  let r = (0, import_chunk_zhr7rpv7.ve)(), t = r === "firstParty" ? void 0 : { kind: "provider", label: (0, import_chunk_zhr7rpv7.l4t)(r) };
  switch (o) {
    case "anthropicApi":
      return t;
    case "subscription": {
      let i = n.filter((a) => a.availability), e = i.length > 0 ? i.some(import_chunk_tfs0ssqe.Qne) : (0, import_chunk_865at33z.Rt)();
      if (e || t) return e ? void 0 : t;
      if (i.some((a) => a.availability?.includes("console"))) return { kind: "variable", name: "ANTHROPIC_BASE_URL" };
      return i.some(({ policyGate: a }) => {
        let l = a && (0, import_chunk_2nv4wrez.ba)(a.policy);
        return l === "org_denied" || l === "latched";
      }) ? { kind: "deniedAfterSignIn" } : { kind: "signIn" };
    }
    case "nonessentialTraffic": {
      let i = (0, import_chunk_k449cc64.gQe)();
      return i === null ? void 0 : { kind: "variable", name: i };
    }
    case "featureFlags": {
      if ((0, import_chunk_865at33z.cz)()) return t;
      let i = (0, import_chunk_865at33z.pPe)() ? null : (0, import_chunk_k449cc64.J4n)() ?? (0, import_chunk_2gtmjt3y.zK)();
      return i === null ? void 0 : { kind: "variable", name: i };
    }
  }
}
function p(o, n) {
  if (!Object.hasOwn(d, o) || (0, import_chunk_t7fzcstv.bt)() || (0, import_chunk_f9x2f6cx.gh)() || (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_qvjn7dva.a2e)().some((e) => e.name === o && !n.includes(e))) return;
  let r = n.filter((e) => e.name === o), t = d[o]?.map((e) => c(e, r)).find((e) => e !== void 0);
  return t !== void 0 && r.some((e) => (0, import_chunk_tfs0ssqe.Qne)(e) && (0, import_chunk_vhsysgcd.yl)(e)) ? void 0 : t;
}
function x7s(o) {
  let n = (0, import_chunk_t7fzcstv.bt)() ? void 0 : c("anthropicApi", []) ?? c("nonessentialTraffic", []) ?? c("featureFlags", []);
  if (n?.kind === "provider") return [{ label: "Features", value: `some aren't available with ${n.label}: ${f}/feature-availability`, linkify: true }];
  if (n?.kind !== "variable") return [];
  let r = Object.keys(d).filter((a) => (0, import_chunk_z688m88d.Zt)(p(a, o), n)), t = r.length > 0 ? `, such as /${r.join(", /")}` : "", i = n.name === (0, import_chunk_k449cc64.gQe)() ? "" : "#features-that-need-feature-flag-fetching";
  return [{ label: "Features", value: `some aren't available while ${n.name} is set${t}: ${f}/env-vars${i}`, linkify: true }];
}
function qIa(o, n) {
  let r = (0, import_chunk_8704k7wd.zs)(o, n), t = r?.name ?? o, i = p(t, n);
  switch (i?.kind) {
    case void 0:
    case "deniedAfterSignIn":
      return;
    case "provider":
      return { command: r, reason: `/${t} isn't available with ${i.label}. See ${f}/feature-availability` };
    case "variable": {
      let e = (0, import_chunk_2yx6c1y2._e)("policySettings")?.env?.[i.name] !== void 0;
      return { command: r, reason: `/${t} isn't available while ${i.name} is set.${e ? " Your admin set it." : ""}` };
    }
    case "signIn": {
      let e = (0, import_chunk_865at33z.xa)().source, a = [e, (0, import_chunk_865at33z.lm)({ skipRetrievingKeyFromApiKeyHelper: true }).source].find((u) => u === "ANTHROPIC_AUTH_TOKEN" || u === "ANTHROPIC_API_KEY" || u === "apiKeyHelper"), l = e === "none" && !import_chunk_c203g5kd.s.DISABLE_LOGIN_COMMAND && (0, import_chunk_865at33z.qT)() !== "console", m = a ? ` This session uses ${a} instead.` : l ? " Run /login to sign in with one." : " Run /status to see how this session is signed in.";
      return { command: r, reason: `/${t} needs a Claude subscription.${m}` };
    }
  }
}
