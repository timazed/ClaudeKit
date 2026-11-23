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
var chunk_a5aq0pxy_exports = {};
__export(chunk_a5aq0pxy_exports, {
  $Ua: () => $Ua,
  FUa: () => FUa,
  Noi: () => Noi,
  esr: () => esr
});
module.exports = __toCommonJS(chunk_a5aq0pxy_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var o = 5e3, n = /* @__PURE__ */ new WeakSet();
function FUa(e) {
  n.add(e);
}
function $Ua(e) {
  return n.has(e);
}
var esr = Object.freeze({ action: "cancel" });
class Noi {
  #s;
  #i = 0;
  #t = false;
  #e = false;
  #o = /* @__PURE__ */ new Set();
  #n = new AbortController();
  #a;
  constructor(e) {
    this.#a = e;
  }
  set(e) {
    if (e !== this.#s) this.#s = e, this.#a(e && this.open, e);
  }
  open = () => {
    if (this.#s === "off_screen" && !this.#t) this.#t = true, this.#n.abort(), (0, import_chunk_cqa9hrgx.u)("mcp_task_question_reopen");
  };
  takeOpen() {
    let e = this.#t;
    if (this.#t = false, e) this.#e = false, this.#o.clear();
    return e;
  }
  putAside(e) {
    this.#e = true, this.#o.add(e), this.set("off_screen");
  }
  updateHold(e) {
    return this.#e = e.length > 0 && (this.#e || e.some((t) => this.#o.has(t))), this.#e;
  }
  answered() {
    this.#i = Date.now();
  }
  graceLeftMs() {
    return this.#i + o - Date.now();
  }
  async sleep(e, t, s) {
    if (await (0, import_chunk_5appeerh.K)(e, AbortSignal.any([t, this.#n.signal]), s), this.#n.signal.aborted) this.#n = new AbortController();
  }
}
