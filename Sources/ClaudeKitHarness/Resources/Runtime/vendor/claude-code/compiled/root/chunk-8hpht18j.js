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
var chunk_8hpht18j_exports = {};
__export(chunk_8hpht18j_exports, {
  $te: () => $te,
  CQn: () => CQn,
  Eet: () => Eet,
  GAa: () => GAa,
  KAa: () => KAa,
  L4s: () => L4s,
  VAa: () => VAa,
  qAa: () => qAa,
  vet: () => vet,
  zAa: () => zAa
});
module.exports = __toCommonJS(chunk_8hpht18j_exports);
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var y = /* @__PURE__ */ new Set(["hook_blocking_error", "hook_additional_context", "hook_stopped_continuation", "hook_system_message", "hook_non_blocking_error"]);
function GAa() {
  return { messages: [], committed: 0, halted: false };
}
function Eet(e) {
  return e.type === "attachment" && y.has(e.attachment.type);
}
function $te(e) {
  return e.type === "attachment" && e.attachment.type === "hook_stopped_continuation";
}
function L4s(e) {
  return e.type === "attachment" && (e.attachment.type === "hook_system_message" || e.attachment.type === "hook_non_blocking_error");
}
function zAa(e) {
  let o = e.messages.slice(e.committed);
  return e.committed = e.messages.length, o;
}
function CQn(e, o, s, a) {
  if (e.halted) return;
  e.halted = true, e.messages.push((0, import_chunk_bzyb60p0.Ut)({ type: "hook_stopped_continuation", message: a, hookName: `PreToolUse:${o}`, toolUseID: s, hookEvent: "PreToolUse" }));
}
var vet = "This tool call did not run. A hook returned continue: false for another tool call from the same piece of code, so every further tool call from it is refused. The hook's reason is sent with that code's result.", VAa = "A tool call from code is refused when a PreToolUse hook that matches it doesn't finish, or fails without giving an answer. If the code made many calls at once, or one with a very large input, make this call again on its own. If it fails again, tell the user which hook it is so that they can fix it, and don't change the hook yourself.", f = 50, u = 5e4, _ = 200, S = 50;
function p(e) {
  return (0, import_chunk_7cfjrnwy.PD)(e, 500, 1500, (o) => `
\u2026 [${o} characters left out]
`);
}
var g = `Some hook errors weren't shown: there were more than ${S} different ones in this piece of code.`, T = `Some hook messages weren't shown: each message is shown once, and at most ${_} for one piece of code.`;
function KAa() {
  return { sent: /* @__PURE__ */ new Set(), messages: 0, characters: 0, noted: false, systemSent: /* @__PURE__ */ new Set(), failuresSent: /* @__PURE__ */ new Set(), failedHooks: /* @__PURE__ */ new Set(), failuresNoted: false, systemNoted: false };
}
function E(e) {
  let o = e.attachment;
  return o.type === "hook_additional_context" ? o.content.join(`
`) : "";
}
function qAa(e, o) {
  let s = [], a = false, r;
  for (let n of o) {
    let t = n.attachment, i = t.type;
    if (i === "hook_stopped_continuation" || i === "hook_blocking_error") {
      s.push(n);
      continue;
    }
    if (t.type === "hook_system_message") {
      if (e.systemSent.has(t.content) || e.systemSent.size >= _) {
        r ??= n;
        continue;
      }
      e.systemSent.add(t.content), s.push(n);
      continue;
    }
    if (t.type === "hook_non_blocking_error") {
      let l = p(t.stderr), d = p(t.stdout), h = [t.hookEvent, t.command ?? t.hookName, t.exitCode].join("\0"), k = [h, t.hookName, l, d].join("\0");
      if (e.failuresSent.has(k)) continue;
      if (e.failuresSent.size < S || !e.failedHooks.has(h)) e.failuresSent.add(k), e.failedHooks.add(h), s.push({ ...n, attachment: { ...t, stderr: l, stdout: d } });
      else if (!e.failuresNoted) e.failuresNoted = true, s.push((0, import_chunk_bzyb60p0.Ut)({ type: "hook_system_message", content: g, hookName: "Claude Code", toolUseID: t.toolUseID, hookEvent: t.hookEvent }));
      continue;
    }
    let c = E(n), m = `${i}\0${c}`;
    if (e.sent.has(m)) {
      a = true;
      continue;
    }
    if (e.messages >= f || e.characters + c.length > u) {
      a = true;
      continue;
    }
    e.sent.add(m), e.messages++, e.characters += c.length, s.push(n);
  }
  if (a && !e.noted) e.noted = true, s.push((0, import_chunk_bzyb60p0.Ut)({ type: "hook_additional_context", content: [`Claude Code left out hook messages from this code's tool calls that repeated one already sent, or that went past the limit of ${f} messages or ${u.toLocaleString("en-US")} characters in one run of code. Block reasons and stops are always sent.`], hookName: "PostToolUse", toolUseID: "repl-hook-feedback-limit", hookEvent: "PostToolUse" }));
  if (r !== void 0 && r.attachment.type === "hook_system_message" && !e.systemNoted) e.systemNoted = true, s.push((0, import_chunk_bzyb60p0.Ut)({ type: "hook_system_message", content: T, hookName: "Claude Code", toolUseID: r.attachment.toolUseID, hookEvent: r.attachment.hookEvent }));
  return s;
}
