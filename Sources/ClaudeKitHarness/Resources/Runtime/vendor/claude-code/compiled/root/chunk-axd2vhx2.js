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
var chunk_axd2vhx2_exports = {};
__export(chunk_axd2vhx2_exports, {
  $Cr: () => $Cr,
  Eed: () => Eed,
  FCr: () => FCr,
  gvo: () => gvo
});
module.exports = __toCommonJS(chunk_axd2vhx2_exports);
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var u = ["BUN_GC_TIMER_INTERVAL", "MIMALLOC_PURGE_HOLES_MIN_INTERVAL", "BUN_IDLE_GC_SECONDS", "MIMALLOC_PURGE_DELAY", "BUN_JSC_useFTLJIT", "BUN_JSC_percentCPUPerMBForEdenTimer", "BUN_JSC_percentCPUPerMBForFullTimer"], d = /* @__PURE__ */ new Set(["", "0", "false", "no", "off"]), n = (0, import_chunk_t57w17k7.de)({ isNoted: false, namesSet: void 0, purgeDelayMs: void 0, isCollectionTimerOff: void 0 }, (e) => {
  e.isNoted = false, e.namesSet = void 0, e.purgeDelayMs = void 0, e.isCollectionTimerOff = void 0;
});
function a(e) {
  return e !== void 0 && !d.has(e.toLowerCase());
}
function Eed() {
  if (n.isNoted) return;
  n.isNoted = true;
  try {
    let e = process.env, r = 0;
    for (let [s, f] of u.entries()) if (e[f]) r |= 1 << s;
    let t = e.MIMALLOC_PURGE_DELAY, o = t !== void 0 && /^\d{1,7}$/.test(t) ? Number(t) : void 0, i = a(e.BUN_GC_TIMER_DISABLE);
    n.purgeDelayMs = o, n.isCollectionTimerOff = i, n.namesSet = r;
  } catch {
  }
}
function FCr() {
  return n.namesSet;
}
function $Cr() {
  return n.purgeDelayMs;
}
function gvo() {
  return n.isCollectionTimerOff;
}
