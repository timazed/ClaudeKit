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
var chunk_aeefyj9w_exports = {};
__export(chunk_aeefyj9w_exports, {
  Eer: () => Eer,
  UYs: () => UYs,
  bIa: () => bIa,
  hqr: () => hqr,
  wIa: () => wIa
});
module.exports = __toCommonJS(chunk_aeefyj9w_exports);
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
function hqr(o, e) {
}
function bIa() {
  return false;
}
var Eer = "CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS", c = /* @__PURE__ */ new Set(["resume", "continue", "from-pr", "fork-session", "session-id", "name", "teleport", "cloud", "remote", "desktop", "environment", "pool", "project", "ref", "on-branch", "correlation-id", "metadata", ...[], "forward-home-settings", "resume-session-at", "resume-drops-turn", "reply-on-resume", "rewind-files", "worktree", "tmux", "background", "routine", "file", "init", "init-only", "maintenance", "prefill", "prefill-b64", "deep-link-origin", "deep-link-repo", "deep-link-last-fetch", "deep-link-cwd-b64", "watch-artifact", "watch-artifact-no-autoreact"]), p = /* @__PURE__ */ new Set(["agent-id", "agent-name", "team-name", "agent-color", "agent-type", "parent-session-id", "lead-verify-key", "plan-mode-required", "inherit-permission-mode", "agents-view-if-allowed", "attach-serve", "session-began-as-copy", "messaging-socket-path", "project-config-root", "hold-repository-while-parked"]), u = /^-[\w/:@=+-]*$/, E = /^[\w./:+][\w./:@=+-]*$/, f = /(^|=)\/(dev|proc)\//;
function UYs(o, e) {
  let d = [], n = 0;
  while (n < e.length) {
    let i = e[n++];
    if (i === "--") break;
    if (!(0, import_chunk_dw5px5e0.QOe)(i)) continue;
    let r = [], t = l(o, i);
    if (t) {
      if (t.required) {
        if (n >= e.length) return "";
        r.push(e[n++]);
      } else if (t.optional && n < e.length && !(0, import_chunk_dw5px5e0.QOe)(e[n])) r.push(e[n++]);
      if (t.variadic) while (n < e.length && !(0, import_chunk_dw5px5e0.QOe)(e[n])) r.push(e[n++]);
    } else {
      let a = i.startsWith("--") ? i.indexOf("=") : -1;
      if (t = a > 2 ? l(o, i.slice(0, a)) : void 0, !t || !(t.required || t.optional)) return "";
    }
    if (p.has(t.name())) return "";
    if (c.has(t.name())) continue;
    if (!u.test(i) || !r.every((a) => E.test(a)) || [i, ...r].some((a) => f.test(a))) return "";
    d.push(i, ...r);
  }
  return d.join(" ");
}
function wIa(o) {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS;
  if (e === void 0) return;
  return import_chunk_c203g5kd.s.unset("CLAUDE_CODE_RELAUNCH_RESUME_HINT_FLAGS"), UYs(o, e.split(" ")) === e ? e : "";
}
function l(o, e) {
  return o.find((d) => d.short === e || d.long === e);
}
