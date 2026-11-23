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
var chunk_cm8ggj0m_exports = {};
__export(chunk_cm8ggj0m_exports, {
  lrr: () => lrr
});
module.exports = __toCommonJS(chunk_cm8ggj0m_exports);
class lrr {
  #e = /* @__PURE__ */ new Map();
  add(e, n) {
    this.#e.set(s(e), { job: e, refusedAt: n });
  }
  takeRepeat(e, n) {
    for (let [r, { refusedAt: t }] of this.#e) if (n - t > 9e5) this.#e.delete(r);
    if (this.#e.delete(s(e))) return "again";
    for (let [r, { job: t }] of this.#e) if (t.cron === e.cron && t.prompt === e.prompt && e.dueAt - t.dueAt >= 432e5) return this.#e.delete(r), { missed: t.dueAt };
    return;
  }
  clear() {
    this.#e.clear();
  }
}
function s({ dueAt: e, prompt: n }) {
  return `${e}
${n}`;
}
