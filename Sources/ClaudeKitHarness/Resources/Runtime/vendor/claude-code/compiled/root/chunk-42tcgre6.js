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
var chunk_42tcgre6_exports = {};
__export(chunk_42tcgre6_exports, {
  Fqt: () => Fqt,
  M8: () => M8,
  Tge: () => Tge,
  q: () => q,
  uft: () => uft,
  x0r: () => x0r,
  xUl: () => xUl,
  xxt: () => xxt
});
module.exports = __toCommonJS(chunk_42tcgre6_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_path = require("path");
var import_async_hooks = require("async_hooks");
function x0r(e, t) {
  let n = false;
  for (let o of e) {
    let i = o.deref();
    if (i === void 0) e.delete(o);
    else if (i === t) n = true;
  }
  if (n) return false;
  return e.add(new WeakRef(t)), true;
}
function xxt(e) {
  let t = [];
  for (let n of e) {
    let o = n.deref();
    if (o === void 0) e.delete(n);
    else t.push(o);
  }
  return t;
}
var p = new import_async_hooks.AsyncLocalStorage(), l = false;
function M8() {
  return l;
}
function Tge() {
  return p.getStore() !== void 0;
}
var f = new import_chunk_2904xtvq.j(() => /* @__PURE__ */ new Set()), H = new import_chunk_2904xtvq.j(() => ({ hasEntered: false }));
function S() {
  return (0, import_chunk_f9x2f6cx.kr)(f);
}
function xUl() {
  let e = [];
  for (let t of xxt(S())) {
    let n = t.session?.hookRegistry;
    e.push(n ? n.holder().registeredHooks : t.registeredHooks, n ? n.mainThreadAgentHooks() : t.mainThreadAgentHooks);
  }
  return e;
}
function a() {
}
class c {
  pendingWrite = Promise.resolve();
  cleanupRegistered = false;
  notStarted = [];
  appendOldest = this.appendOldestNotStarted.bind(this);
  append(e, t) {
    let n = this.notStarted.at(-1);
    if (n?.logFile === e) {
      n.lines += t;
      return;
    }
    if (this.notStarted.push({ logFile: e, lines: t }), this.pendingWrite = this.pendingWrite.then(this.appendOldest).catch(a), !this.cleanupRegistered) this.cleanupRegistered = true, (0, import_chunk_w578pjby.Ct)(() => this.flush());
  }
  async appendOldestNotStarted() {
    let e = this.notStarted.shift();
    if (e === void 0) return;
    let t = (0, import_chunk_w578pjby.le)();
    try {
      await t.appendFile(e.logFile, e.lines);
    } catch {
      await t.mkdir((0, import_path.dirname)(e.logFile)).catch(a), await t.appendFile(e.logFile, e.lines);
    }
  }
  flush() {
    return this.pendingWrite;
  }
}
var h = new import_chunk_2904xtvq.j(() => new c());
function u() {
  return (0, import_chunk_f9x2f6cx.kr)(h);
}
function q(e, t, n, o = "queued") {
  let i = y();
  if (!i) return;
  let r;
  try {
    r = d(e, t, k(n));
  } catch {
    r = d(e, t, { diagnostics_payload_failed: true });
  }
  if (o === "now") try {
    (0, import_chunk_w578pjby.le)().appendFileSync(i, r);
  } catch {
  }
  else u().append(i, r);
}
function k(e) {
  try {
    return (typeof e === "function" ? e() : e) ?? {};
  } catch {
    return { diagnostics_payload_failed: true };
  }
}
function d(e, t, n) {
  let o = { timestamp: (/* @__PURE__ */ new Date()).toISOString(), level: e, event: t, data: n, cc_version: typeof { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" } < "u" ? { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION : "unknown" };
  return (0, import_chunk_w578pjby._)(o) + `
`;
}
function uft() {
  return u().flush();
}
function y() {
  return x() ? void 0 : import_chunk_c203g5kd.s.CLAUDE_CODE_DIAGNOSTICS_FILE;
}
function x() {
  return Tge() ? (0, import_chunk_f9x2f6cx.Y)() : (0, import_chunk_f9x2f6cx.Pd)();
}
async function Fqt(e, t, n) {
  let o = Date.now();
  q("info", `${e}_started`);
  try {
    let i = await t(), r = n ? n(i) : {};
    return q("info", `${e}_completed`, { duration_ms: Date.now() - o, ...r }), i;
  } catch (i) {
    throw q("error", `${e}_failed`, { duration_ms: Date.now() - o }), i;
  }
}
