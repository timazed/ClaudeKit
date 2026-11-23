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
var chunk_6bezhs7s_exports = {};
__export(chunk_6bezhs7s_exports, {
  ABs: () => ABs,
  CBs: () => CBs
});
module.exports = __toCommonJS(chunk_6bezhs7s_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_78g0060s = require("/$bunfs/root/chunk-78g0060s.js");
var import_chunk_y53wbr8a = require("/$bunfs/root/chunk-y53wbr8a.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_1zphp81a = require("/$bunfs/root/chunk-1zphp81a.js");
function CBs(u, { requireOnboarding: n = true } = {}) {
  let o = (0, import_chunk_865at33z.ge)();
  if (n && !o.hasCompletedOnboarding || o.hasSeenAutoDefaultNudge || !(0, import_chunk_865at33z.b)("tengu_maple_pier", true)) return null;
  let e = (0, import_chunk_2yx6c1y2._e)("userSettings")?.permissions?.defaultMode, t = ["projectSettings", "localSettings", "flagSettings", "policySettings"].some((r) => (0, import_chunk_2yx6c1y2._e)(r)?.permissions?.defaultMode);
  if (e && e !== "auto" && !t && (0, import_chunk_1zphp81a.l6)(u)) return e;
  return null;
}
function ABs(u, n, o) {
  if ((0, import_chunk_865at33z.ge)().hasSeenAutoDefaultNudge) return;
  let e = (0, import_chunk_pbteexar.a_)(n.current_mode);
  if (u === "shown") {
    (0, import_chunk_y53wbr8a.a)("tengu_auto_default_nudge_shown", { current_mode: (0, import_chunk_78g0060s.fe)(e), surface: (0, import_chunk_78g0060s.S)("ide") });
    return;
  }
  let t = n.choice === "accept" ? "accept" : "decline";
  if (t === "accept") (0, import_chunk_2yx6c1y2.Mr)("userSettings", { permissions: { defaultMode: "auto" } }, void 0, o);
  (0, import_chunk_865at33z.Ke)((r) => r.hasSeenAutoDefaultNudge ? r : { ...r, hasSeenAutoDefaultNudge: true }, o), (0, import_chunk_y53wbr8a.a)("tengu_auto_default_nudge_resolved", { choice: (0, import_chunk_78g0060s.S)(t), outcome: t === "accept" ? (0, import_chunk_78g0060s.S)("switched") : (0, import_chunk_78g0060s.S)("declined"), current_mode: (0, import_chunk_78g0060s.fe)(e), surface: (0, import_chunk_78g0060s.S)("ide") });
}
