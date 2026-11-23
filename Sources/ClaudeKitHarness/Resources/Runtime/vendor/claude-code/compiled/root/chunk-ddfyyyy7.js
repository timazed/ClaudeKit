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
var chunk_ddfyyyy7_exports = {};
__export(chunk_ddfyyyy7_exports, {
  $yo: () => $yo,
  Byo: () => Byo,
  Fln: () => Fln,
  J8e: () => J8e,
  Q$n: () => Q$n,
  Q8e: () => Q8e,
  S_l: () => S_l,
  U7: () => U7,
  Uyo: () => Uyo,
  e2e: () => e2e,
  fle: () => fle,
  h1i: () => h1i,
  pkr: () => pkr,
  ple: () => ple,
  sm: () => sm,
  vEt: () => vEt
});
module.exports = __toCommonJS(chunk_ddfyyyy7_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_r60bafc1 = require("/$bunfs/root/chunk-r60bafc1.js");
var import_async_hooks = require("async_hooks");
var m = ["approval", "model", "own", "external"];
class pkr {
  #n;
  #a;
  #u;
  #o;
  #r = { external: 0, approval: 0, model: 0, own: 0 };
  #e = { external: 0, approval: 0, model: 0, own: 0 };
  #s;
  #i;
  #t = false;
  #d = false;
  constructor(e, t = Date.now, n, o) {
    this.#n = e, this.#s = e, this.#a = t, this.#u = n, this.#o = o;
  }
  get toolUseId() {
    return this.#d ? void 0 : this.#u;
  }
  endToolUse() {
    this.#d = true;
  }
  mark(e) {
    if (this.#o !== void 0) return this.#o.mark(e);
    if (this.#t) return () => {
    };
    let t = this.#l();
    if (e !== "own") this.#i ??= t;
    this.#r[e]++;
    let n = false;
    return () => {
      if (n || this.#t) return;
      n = true, this.#l(), this.#r[e]--;
    };
  }
  settle() {
    if (!this.#t) this.#l(), this.#t = true;
  }
  fields(e, { declaredNoOutsideWork: t }) {
    if (this.#i === void 0 && !t) return {};
    let n = Math.max(0, e), o = (p) => {
      let a = Math.min(Math.max(0, p), n);
      return n -= a, a;
    }, r = o(this.#e.approval), i = o(this.#e.model), d = o(this.#e.external), l = o((this.#i ?? this.#n) - this.#n);
    return { externalWallMs: d, ...r > 0 && { approvalWaitMs: r }, ...i > 0 && { modelCallMs: i }, ...l > 0 && { preExternalMs: l } };
  }
  #l() {
    let e = this.#a(), t = m.find((n) => this.#r[n] > 0);
    if (t !== void 0) this.#e[t] += Math.max(0, e - this.#s);
    return this.#s = e, e;
  }
}
var u = new import_async_hooks.AsyncLocalStorage();
function $yo(e, t) {
  return u.run(e, t);
}
function J8e() {
  return u.getStore();
}
var Q$n = 20971520, fle = 33554432, vEt = 1073741824, f = "application/vnd.ant.frame-refusal+json", E = /^[0-9A-Za-z_-]{1,256}$/;
function sm() {
  let e = J8e()?.toolUseId;
  return { Accept: `application/json, ${f}`, "X-Frame-CP": "go", "X-Frame-Surface": "code", "X-Frame-Platform": (0, import_chunk_3t7ve0wy.Ol)() ? "desktop" : "cli", "X-Frame-Client-Version": { ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues", PACKAGE_URL: "@anthropic-ai/claude-code", README_URL: "https://code.claude.com/docs/en/overview", VERSION: "2.1.330", FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues", BUILD_TIME: "2026-11-20T17:34:37Z", GIT_SHA: "8c664bec500172ded713624f9ecac0eb7e714829", HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js", DD_SOURCEMAP_GROUP: "darwin" }.VERSION, "X-Frame-Session-Id": h1i() ?? (0, import_chunk_f9x2f6cx.W)(), "X-Frame-Claude-Code-Session-Id": (0, import_chunk_f9x2f6cx.W)(), ...e !== void 0 && E.test(e) && { "X-Frame-Tool-Use-Id": e } };
}
var h = /^(?:session_|cse_)[A-Za-z0-9_-]{1,184}$/;
function h1i() {
  let e = import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE_SESSION_ID ?? (0, import_chunk_r60bafc1._kr)();
  return e && h.test(e) ? e : void 0;
}
var x = /^req_[A-Za-z0-9_-]{4,128}$/;
function Q8e(e) {
  return e !== void 0 && x.test(e) ? { request_id: e } : {};
}
var Uyo = "create_confirmed=1", S_l = "anthropic/frameCreateConfirmed", e2e = /unknown field|not a recognized|not allowlisted/i;
function U7(e) {
  if (typeof e === "string") return e;
  if (e && typeof e === "object") {
    if ("error" in e && typeof e.error === "string") {
      let t = "reason" in e && typeof e.reason === "string" ? ` [${e.reason}]` : "";
      return e.error + t;
    }
    return (0, import_chunk_w578pjby._)(e) ?? "";
  }
  return "";
}
function Fln(e, t) {
  return e.includes(`'${t}'`) || new RegExp(`"${t}"(?!\\??:)`).test(e);
}
function Byo(e, t) {
  let n = U7(e);
  return e2e.test(n) && Fln(n, t);
}
var ple = /^[A-Za-z0-9_-]{1,64}$/;
