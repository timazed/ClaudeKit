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
var chunk_rwc528c4_exports = {};
__export(chunk_rwc528c4_exports, {
  KD: () => KD,
  zsi: () => zsi
});
module.exports = __toCommonJS(chunk_rwc528c4_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_sjqze7qg = require("/$bunfs/root/chunk-sjqze7qg.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var n = 4096, r = 1024, i = new import_chunk_2904xtvq.j(() => new o());
function KD() {
  return i.of((0, import_chunk_f9x2f6cx.N)().host);
}
function zsi(e, t) {
  if (!e || !t) return;
  try {
    return btoa(`${e}:${t}`);
  } catch {
    return;
  }
}
function s() {
  return (0, import_chunk_sjqze7qg.yXa)() !== void 0;
}
class o {
  seen = /* @__PURE__ */ new Set();
  off = false;
  incomplete = false;
  overflowNotice = null;
  record(e) {
    if (this.recordingOff()) return;
    if (typeof e !== "string" || e === "") return;
    let t = (0, import_chunk_7cfjrnwy.ee)(e, r);
    if (this.seen.has(t)) return;
    if (this.seen.size >= n) {
      this.incomplete = true, this.overflowNotice ??= true;
      return;
    }
    this.seen.add(t);
  }
  recordingOff() {
    if (!this.off && s()) this.off = true, this.seen.clear(), this.incomplete = false, this.overflowNotice = null;
    return this.off;
  }
  takeOverflowNotice() {
    if (this.overflowNotice === true) return this.overflowNotice = false, true;
    return false;
  }
  snapshot() {
    return this.recordingOff(), { atoms: [...this.seen], complete: !this.incomplete };
  }
}
