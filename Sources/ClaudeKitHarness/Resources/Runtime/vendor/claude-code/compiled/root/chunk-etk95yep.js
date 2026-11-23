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
var chunk_etk95yep_exports = {};
__export(chunk_etk95yep_exports, {
  Azi: () => Azi,
  _vo: () => _vo,
  ved: () => ved
});
module.exports = __toCommonJS(chunk_etk95yep_exports);
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_w1d7ygsk = require("/$bunfs/root/chunk-w1d7ygsk.js");
var d = 36e5, e = (0, import_chunk_t57w17k7.de)({ isDecided: false, toFirstMessage: void 0, toFirstResult: void 0, atFirstMessage: void 0, giveUp: void 0 }, (t) => {
  _vo(), t.isDecided = false;
});
function ved() {
  if (e.isDecided) return;
  e.isDecided = true;
  try {
    if (process.env.CLAUDE_CODE_REMOTE !== "true" || process.env.CLAUDE_CODE_COUNT_GARBAGE_COLLECTIONS !== "1") return;
    let { GCProfiler: t } = (0, import_chunk_w1d7ygsk.ft)("v8"), s = new t(), i = new t();
    s.start(), i.start(), e.toFirstMessage = s, e.toFirstResult = i, e.giveUp = setTimeout(_vo, d), e.giveUp.unref();
  } catch {
  }
}
function o(t) {
  if (t === void 0) return;
  try {
    let s = t.stop().statistics.filter((n) => n.gcType === "Scavenge" || n.gcType === "MarkSweepCompact"), i = (0, import_chunk_4smdap7r.U)(s, (n) => n.gcType === "Scavenge"), r = s.at(-1)?.afterGC.heapStatistics.usedHeapSize, a = { eden: i, full: s.length - i, wall_ms: Math.round(s.reduce((n, u) => n + u.cost, 0) / 1e3), ...r !== void 0 && { heap_after_mib: Math.round(r / 1048576) } };
    return Object.values(a).every(Number.isSafeInteger) ? a : void 0;
  } catch {
    return;
  }
}
function Azi() {
  e.atFirstMessage ??= o(e.toFirstMessage), e.toFirstMessage = void 0;
}
function _vo() {
  let { atFirstMessage: t } = e;
  clearTimeout(e.giveUp), o(e.toFirstMessage);
  let s = o(e.toFirstResult);
  return e.toFirstMessage = void 0, e.toFirstResult = void 0, e.atFirstMessage = void 0, e.giveUp = void 0, s && { ...t && { to_first_message: t }, to_first_result: s };
}
