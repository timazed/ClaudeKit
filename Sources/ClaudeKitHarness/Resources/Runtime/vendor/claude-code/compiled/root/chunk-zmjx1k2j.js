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
var chunk_zmjx1k2j_exports = {};
__export(chunk_zmjx1k2j_exports, {
  Doi: () => Doi,
  Hoi: () => Hoi,
  Jor: () => Jor,
  Qor: () => Qor,
  hJt: () => hJt,
  n7r: () => n7r,
  r7r: () => r7r
});
module.exports = __toCommonJS(chunk_zmjx1k2j_exports);
var import_chunk_2zeyvjwb = require("/$bunfs/root/chunk-2zeyvjwb.js");
var import_chunk_qdcbcsg7 = require("/$bunfs/root/chunk-qdcbcsg7.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_2mwshd9r = require("/$bunfs/root/chunk-2mwshd9r.js");
var import_chunk_507k3c1m = require("/$bunfs/root/chunk-507k3c1m.js");
var import_chunk_th6rswmx = require("/$bunfs/root/chunk-th6rswmx.js");
var import_chunk_ma3kja9f = require("/$bunfs/root/chunk-ma3kja9f.js");
var n = /^ht1_[0-9a-f]{32}$/;
function hJt(e) {
  return e.serverName === import_chunk_qdcbcsg7.$n && n.test(e.mcpTaskId);
}
function n7r() {
  return (0, import_chunk_507k3c1m.Cpl)() && (0, import_chunk_2zeyvjwb.qhe)("allow_mcp_task_worker_wake");
}
function r7r() {
  return (0, import_chunk_507k3c1m.qSr)() && (0, import_chunk_2zeyvjwb.qhe)("allow_mcp_task_worker_wake");
}
function Jor(e) {
  return e.type === "http" && e.scope === "dynamic" && !(0, import_chunk_xcgcdx61.jl)(e) && e.headersHelper === void 0 && (0, import_chunk_2mwshd9r.pB)(e.url) !== null && r7r();
}
function Qor(e, r) {
  {
    let o = (0, import_chunk_ma3kja9f.T)(e) ? e[import_chunk_th6rswmx.OUa] : void 0, t = (0, import_chunk_ma3kja9f.T)(o) && o[import_chunk_th6rswmx.MUa] === r ? o[import_chunk_th6rswmx.IUa] : void 0;
    if (typeof t === "boolean") return t ? "service" : "client";
  }
  return;
}
function Hoi(e, r, o) {
  return { [import_chunk_th6rswmx.Zor]: `${e}.${r ?? ""}.${o}` };
}
class Doi {
  #o = true;
  #r = Date.now();
  #e;
  #t;
  constructor(e) {
    this.#e = !e;
  }
  isInForce() {
    return !this.#e;
  }
  async untilPoll(e) {
    if (!e.aborted && !this.#e && !this.#o) {
      let r = Promise.withResolvers(), o = () => r.resolve();
      this.#t = o, e.addEventListener("abort", o, { once: true }), await r.promise, e.removeEventListener("abort", o);
    }
  }
  polled() {
    this.#o = false;
  }
  look() {
    if (Date.now() - this.#r < import_chunk_th6rswmx.HUa) return false;
    return this.#r = Date.now(), this.pollAgain(), true;
  }
  pollAgain() {
    this.#o = true, this.#t?.();
  }
  begin() {
    this.#e = false, this.#o = true, this.#r = Date.now();
  }
  end() {
    this.#e = true, this.#t?.();
  }
}
