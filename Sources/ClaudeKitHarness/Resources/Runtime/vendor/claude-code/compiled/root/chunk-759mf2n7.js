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
var chunk_759mf2n7_exports = {};
__export(chunk_759mf2n7_exports, {
  ADt: () => ADt,
  q_e: () => q_e
});
module.exports = __toCommonJS(chunk_759mf2n7_exports);
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_pzzqg6s3 = require("/$bunfs/root/chunk-pzzqg6s3.js");
function n() {
  return { spawned: 0, requested: { background: 0, foreground: 0, unset: 0 }, started_in_background: 0, max_depth: 0, spawned_by_subagents: 0, completed: 0, failed: 0, killed: { parent: 0, user: 0, system: 0 }, refused: { depth_limit: 0, concurrency_limit: 0, budget: 0 } };
}
class s {
  #e;
  #t;
  constructor(e) {
    this.#e = e;
  }
  completed() {
    if (this.#n("completed")) this.#e.completed += 1;
  }
  failed() {
    if (this.#n("failed")) this.#e.failed += 1;
  }
  killed(e) {
    if (this.#n("killed")) this.#e.killed[e ?? "user"] += 1;
  }
  cancelledAfterCompletion() {
    if (this.#t === "completed") this.#e.completed -= 1, this.#t = void 0;
    this.killed("user");
  }
  #n(e) {
    if (this.#t !== void 0) return false;
    return this.#t = e, true;
  }
}
class r {
  #e = n();
  #t = /* @__PURE__ */ new Map();
  recordSpawn(e) {
    let t = this.#e;
    if (t.spawned += 1, t.requested[e.runInBackground === void 0 ? "unset" : e.runInBackground ? "background" : "foreground"] += 1, e.runsInBackground) t.started_in_background += 1;
    if (this.#t.set(e.agentType, (this.#t.get(e.agentType) ?? 0) + 1), t.max_depth = Math.max(t.max_depth, e.depth), e.depth > 1) t.spawned_by_subagents += 1;
    return new s(t);
  }
  recordRefused(e) {
    this.#e.refused[e] += 1;
  }
  snapshot() {
    let e = this.#e;
    return { ...e, requested: { ...e.requested }, killed: { ...e.killed }, refused: { ...e.refused }, by_type: Object.fromEntries(this.#t) };
  }
  reset() {
    Object.assign(this.#e, n()), this.#t.clear();
  }
}
var ADt = new import_chunk_pzzqg6s3.ze(() => new r());
function q_e(e) {
  if (!e) return;
  try {
    return ADt.of(e).snapshot();
  } catch (t) {
    (0, import_chunk_k449cc64.i)(t);
    return;
  }
}
