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
var chunk_5gpax19g_exports = {};
__export(chunk_5gpax19g_exports, {
  gXt: () => gXt
});
module.exports = __toCommonJS(chunk_5gpax19g_exports);
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_em330z26 = require("/$bunfs/root/chunk-em330z26.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var n = [{ kind: "ios_app", found: (t) => t.has_ios_app_project }, { kind: "android_app", found: (t) => t.has_android_app_project }];
class s {
  #t = 0;
  #o = 0;
  #e = /* @__PURE__ */ new Map();
  get started() {
    return this.#t > 0;
  }
  start() {
    this.#t++, this.#r(false);
  }
  conversationReset() {
    if (this.started) this.#t++, this.#r(false);
  }
  directoryChanged() {
    if (!this.started) {
      this.start();
      return;
    }
    this.#r(false);
  }
  turnStarting() {
    let t = this.#t;
    if (!this.started || this.#o === t) return;
    if (this.#o = t, n.some(({ kind: e }) => this.#e.get(e) !== t)) this.#r(true);
  }
  #r(t) {
    let e = this.#t;
    (0, import_chunk_em330z26.m9r)({ fresh: t }).then((r) => {
      if (e !== this.#t || r === null) return;
      if (r.has_ios_app_project === null && this.#e.get("ios_app") !== e) (0, import_chunk_cqa9hrgx.l)("dev_intent_detect", "project_unreadable", { kind: (0, import_chunk_78g0060s.S)("ios_app"), trigger: (0, import_chunk_78g0060s.S)("project_scan") });
      for (let { kind: o, found: a } of n) if (a(r) === true && this.#e.get(o) !== e) this.#e.set(o, e), this.#n(o);
    });
  }
  #n(t) {
    try {
      (0, import_chunk_865at33z.Fs)({ type: "system", subtype: "dev_intent", kind: t, trigger: "project_scan" }), (0, import_chunk_cqa9hrgx.u)("dev_intent_detect", { kind: (0, import_chunk_78g0060s.f)(t), trigger: (0, import_chunk_78g0060s.S)("project_scan") });
    } catch (e) {
      (0, import_chunk_k449cc64.i)((0, import_chunk_jv7av99m.Ye)((0, import_chunk_jv7av99m.D)(e), "project dev intent send failed")), (0, import_chunk_cqa9hrgx.m)("dev_intent_detect", "project_send_threw", { kind: (0, import_chunk_78g0060s.f)(t), trigger: (0, import_chunk_78g0060s.S)("project_scan") });
    }
  }
}
var gXt = new import_chunk_2904xtvq.j(() => new s());
