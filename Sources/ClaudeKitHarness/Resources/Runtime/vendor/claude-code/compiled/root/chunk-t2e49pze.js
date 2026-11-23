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
var chunk_t2e49pze_exports = {};
__export(chunk_t2e49pze_exports, {
  GJ: () => GJ,
  p0a: () => p0a
});
module.exports = __toCommonJS(chunk_t2e49pze_exports);
var import_chunk_2hdy50wd = require("/$bunfs/root/chunk-2hdy50wd.js");
var t = 58e3, r = 1e4, p0a = ["device_stream_closed", "device_announce_refused"];
class GJ {
  #e = void 0;
  #t = false;
  #n = void 0;
  #o = Promise.withResolvers();
  #s = void 0;
  provide(e) {
    this.#e = e;
  }
  canAsk() {
    return this.#e !== void 0;
  }
  askDesktopApp(e, n = Date.now()) {
    if (this.#e === void 0 || !(0, import_chunk_2hdy50wd.Xf)() || !(0, import_chunk_2hdy50wd.Twe)() || this.#n !== void 0 && n - this.#n < r) return false;
    this.#n = n;
    let o = Promise.withResolvers();
    return this.#o = o, this.#s = void 0, this.#e({ subtype: "remote_tools_reannounce", worker_epoch: Math.max(1, e ?? 1), deadline_ms: t }, void 0, (s) => {
      if (o.resolve(), this.#o === o) this.#s = s;
    }), true;
  }
  noAnnounce() {
    return this.#o.promise;
  }
  noAnnounceAnswer() {
    return this.#s;
  }
  askOnce({ workerEpoch: e, deadlineMs: n }) {
    if (this.#e === void 0 || this.#t) return false;
    return this.#t = true, this.#e({ subtype: "remote_tools_reannounce", worker_epoch: e, deadline_ms: n }, AbortSignal.timeout(n)), true;
  }
}
