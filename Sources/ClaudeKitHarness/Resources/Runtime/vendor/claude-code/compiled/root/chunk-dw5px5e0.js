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
var chunk_dw5px5e0_exports = {};
__export(chunk_dw5px5e0_exports, {
  Bnd: () => Bnd,
  GE: () => GE,
  HFr: () => HFr,
  IFr: () => IFr,
  L1e: () => L1e,
  MFr: () => MFr,
  Pv: () => Pv,
  QOe: () => QOe,
  Tb: () => Tb,
  Xca: () => Xca,
  Yca: () => Yca,
  ZOe: () => ZOe,
  bVe: () => bVe,
  g5n: () => g5n,
  kte: () => kte,
  nY: () => nY,
  qca: () => qca,
  rSn: () => rSn
});
module.exports = __toCommonJS(chunk_dw5px5e0_exports);
var i = /* @__PURE__ */ new Set(["--prefill", "--prefill-b64", "--deep-link-repo", "--deep-link-last-fetch", "--deep-link-cwd-b64", "--handle-uri", "--settings", "--managed-settings", "--initialize-fields", "--setting-sources", "--client-data-url", "--watch-artifact", "--watch-artifact-no-autoreact", "--team-name", "--agent-id", "--agent-name", "--agent-color", "--parent-session-id", "--lead-verify-key", "--agent-type", "--model", "--agent", "--routine", "--effort", "--fast-mode", "--permission-mode", "--inherit-permission-mode", "--proactivity", "--debug-file", "--system-prompt", "--system-prompt-file", "--append-system-prompt", "--append-system-prompt-file", "--system-prompt-snapshot", "--append-subagent-system-prompt", "--append-subagent-system-prompt-file", "--plan-mode-instructions", "--permission-prompt-tool", "--permission-prompts", "--json-schema", "--fallback-model", "--advisor", "--agents", "--name", "-n", "--allowedTools", "--allowed-tools", "--disallowedTools", "--disallowed-tools", "--tools", "--add-dir", "--mcp-config", "--betas", "--file", "--channels", "--dangerously-load-development-channels", "--plugin-dir", "--plugin-dir-no-mcp", "--plugin-url", "--remote-control-session-name-prefix", "--exec", "-m", "--sdk-url", "--thinking", "--thinking-display", "--max-thinking-tokens", "--max-turns", "--max-budget-usd", "--task-budget", "--autocompact", "--rewind-files", "--resume-session-at", "--resume-drops-turn", "--workload", "--output-format", "--input-format", "--teammate-mode", "--messaging-socket-path", "--session-id", "--environment", "--pool", "--ref", "--on-branch", "--correlation-id", "--metadata", "--forward-home-settings", "--project-config-root", "--attach-serve", "--runner-declares", "--session-began-as-copy", ...[]]), g5n = /* @__PURE__ */ new Set(["--allowedTools", "--allowed-tools", "--disallowedTools", "--disallowed-tools", "--tools", "--add-dir", "--mcp-config", "--betas", "--file", "--channels", "--dangerously-load-development-channels"]), l = /* @__PURE__ */ new Set(["-d", "--debug", "-r", "--resume", "--from-pr", "-w", "--worktree", "--teleport", "--cloud", "--remote", "--project", "--remote-control", "--rc", "--prompt-suggestions"]);
function bVe(e, n) {
  let t = e[n];
  if (t !== void 0 && l.has(t)) {
    let r = e[n + 1];
    return r !== void 0 && !QOe(r) ? n + 1 : n;
  }
  if (t === void 0 || !i.has(t)) return n;
  let o = n + 1;
  if (g5n.has(t)) while (o + 1 < e.length && !QOe(e[o + 1])) o++;
  return o;
}
function QOe(e) {
  return e.length > 1 && e.startsWith("-");
}
function Tb(e, n = process.argv) {
  return nY(e, n).at(-1);
}
function nY(e, n = process.argv) {
  return d(e, n).map((t) => t.value);
}
function qca(e, n) {
  return new Set(d(e, n).flatMap((t) => t.indices));
}
function d(e, n) {
  let t = [];
  for (let o = 0; o < n.length; o++) {
    let r = n[o];
    if (r === "--") break;
    if (r?.startsWith(`${e}=`)) {
      t.push({ value: r.slice(e.length + 1), indices: [o] });
      continue;
    }
    if (r === e && o + 1 < n.length) {
      t.push({ value: n[o + 1], indices: [o, o + 1] }), o++;
      continue;
    }
    o = bVe(n, o);
  }
  return t;
}
function GE(e, n = process.argv) {
  return L1e((t) => t === e, n) !== -1;
}
function Bnd(e) {
  return GE("--bg", e) || GE("--background", e);
}
function ZOe(e = process.argv.slice(2)) {
  let n = GE("-p", e) || GE("--print", e), t = GE("--init-only", e), o = L1e((r) => r.startsWith("--sdk-url"), e) !== -1;
  return n || t || o || !process.stdout.isTTY;
}
function L1e(e, n = process.argv) {
  for (let t = 0; t < n.length; t++) {
    let o = n[t];
    if (o === "--") break;
    if (o !== void 0 && e(o)) return t;
    t = bVe(n, t);
  }
  return -1;
}
function IFr(e) {
  let n = e.indexOf("--"), t = n === -1 ? e : e.slice(0, n), o = [];
  for (let r = 0; r < t.length; r++) {
    let s = t[r];
    o.push(i.has(s) && r + 1 < t.length ? `${s}=${t[r + 1]}` : s), r = bVe(t, r);
  }
  return o;
}
function MFr(e = process.argv.slice(2)) {
  let n = rSn(e);
  return n === -1 ? void 0 : e[n];
}
function rSn(e) {
  for (let n = 0; n < e.length; n++) {
    let t = e[n];
    if (t === "--") return n + 1 < e.length ? n + 1 : -1;
    if (!QOe(t)) return n;
    n = bVe(e, n);
  }
  return -1;
}
var u = /* @__PURE__ */ new Set(["attach", "logs", "stop", "kill", "respawn", "rm"]), p = /* @__PURE__ */ new Set(["-p", "--print", "--bg", "--background", "--routine", "-h", "--help", "-v", "-V", "--version"]), g = /* @__PURE__ */ new Set(["-d2e", "--debug-to-stderr", "--verbose", "-p", "--print", "--bare", "--safe-mode", "--init", "--init-only", "--maintenance", "--include-hook-events", "--include-partial-messages", "--forward-subagent-text", "--session-mirror", "--await-claim", "--hold-repository-while-parked", "--await-initialize", "--managed-settings-in-initialize", "--dangerously-skip-permissions", "--allow-dangerously-skip-permissions", "--replay-user-messages", "--host-auth-is-org-sign-in", "--enable-auth-status", "--restricted", "--allow-other-models", "--exclude-dynamic-system-prompt-sections", "--include-unsupported-models", "-c", "--continue", "--fork-session", "--deep-link-origin", "--no-session-persistence", "--reply-on-resume", "--ide", "--desktop", "--strict-mcp-config", "--disable-slash-commands", "--chrome", "--no-chrome", "--tmux", "--enable-auto-mode", "--bg", "--background", "--agents-view-if-allowed", "--brief", "--ax-screen-reader", "--plan-mode-required", "--hard-fail", ...[]]), m = /* @__PURE__ */ new Set(["--exec", "-m", "--handle-uri"]), f = /^[a-f0-9]{8}$/;
function Yca(e = process.argv.slice(2), { behindRootOptions: n = true } = {}) {
  let t = rSn(e);
  if (t === -1 || !u.has(e[t])) return -1;
  if (t === 0) return 0;
  if (!n || e[t - 1] === "--") return -1;
  let o = e[t + 1], r = o;
  if (o === void 0 || !(f.test(o) || e[t] === "respawn" && o === "--all")) return -1;
  for (let s = 0; s < t; s = bVe(e, s) + 1) {
    let a = e[s];
    if (h(a) || !c(a)) return -1;
  }
  return t;
}
function c(e) {
  if (g.has(e)) return true;
  let n = e.indexOf("="), t = n === -1 ? e : e.slice(0, n);
  return i.has(t) && !m.has(t) || l.has(t);
}
function h(e) {
  return p.has(e) || e.startsWith("--routine=") || /^-[A-Za-z]{2,}$/.test(e);
}
function HFr(e) {
  return e.startsWith("cc://") || e.startsWith("cc+unix://");
}
function Xca(e = process.argv.slice(2)) {
  if (e.some((n) => n === "--help" || /^-[^-]*h/.test(n))) return true;
  for (let n = 0; n < e.length; n = bVe(e, n) + 1) if (!c(e[n])) return true;
  return false;
}
var b = /^-|^[A-Za-z][A-Za-z0-9+.-]+:\/\//;
function kte(e) {
  return !b.test(e) && !e.includes("\0");
}
function Pv(e, n) {
  if (!n) return [];
  return kte(n) ? [e, n] : [`${e}=${n}`];
}
