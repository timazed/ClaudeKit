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
var chunk_4rsz1aqz_exports = {};
__export(chunk_4rsz1aqz_exports, {
  Eqs: () => Eqs
});
module.exports = __toCommonJS(chunk_4rsz1aqz_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_ch6321bk = require("/$bunfs/root/chunk-ch6321bk.js");
function Eqs(d, s, m, i) {
  let e = (0, import_chunk_ch6321bk.yvr)(d), r = e !== null ? (0, import_chunk_ch6321bk.Svr)() : null, n = r?.code === "hooks_held" ? null : r;
  if (n !== null) (0, import_chunk_cqa9hrgx.l)("goal_set", n.code, { origin: (0, import_chunk_78g0060s.f)("restored") });
  let t;
  if (e === null || n !== null) {
    if (s((o) => (t = o.activeGoal, o.activeGoal === void 0 ? o : { ...o, activeGoal: void 0 })), t !== void 0) (0, import_chunk_ch6321bk.$Re)(t, "resume_swap");
    return;
  }
  if (m.add((0, import_chunk_f9x2f6cx.W)(), "Stop", "", (0, import_chunk_ch6321bk.ABi)(e)), s((o) => (t = o.activeGoal, { ...o, activeGoal: { condition: e, iterations: i?.iterations ?? 0, setAt: i?.setAt ?? Date.now(), ...i?.lastReason !== void 0 && { lastReason: i.lastReason }, origin: "restored", tokensAtStart: (0, import_chunk_f9x2f6cx.rw)() } })), t !== void 0) (0, import_chunk_ch6321bk.$Re)(t, "resume_swap");
  (0, import_chunk_y53wbr8a.a)("tengu_goal_restored_on_resume", { promptLength: e.length }), (0, import_chunk_y53wbr8a.a)("tengu_stop_hook_added", { promptLength: e.length, via: (0, import_chunk_78g0060s.S)("goal"), origin: (0, import_chunk_78g0060s.f)("restored") });
}
