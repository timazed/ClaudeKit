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
var chunk_c2atdz6e_exports = {};
__export(chunk_c2atdz6e_exports, {
  VFa: () => VFa,
  cni: () => cni
});
module.exports = __toCommonJS(chunk_c2atdz6e_exports);
var import_chunk_5appeerh = require("/$bunfs/root/chunk-5appeerh.js");
var import_chunk_cqa9hrgx = require("/$bunfs/root/chunk-cqa9hrgx.js");
var import_chunk_929j4hj9 = require("/$bunfs/root/chunk-929j4hj9.js");
var a = 1e3, o = 3e4, r = 6e5, s = 8;
function VFa(t) {
  (0, import_chunk_929j4hj9.Fi)().chatTabGroupTitleAsks = { read: t, askedOnce: false, asksWithNoName: 0, serverGaveName: false, nextAskAt: 0, stopped: false, inFlight: void 0 };
}
async function cni() {
  let t = (0, import_chunk_929j4hj9.Fi)().chatTabGroupTitleAsks;
  if (!t || t.stopped) return;
  let i = !t.askedOnce;
  if (t.askedOnce = true, t.inFlight === void 0 && import_chunk_5appeerh.Gi.monotonicNow() >= t.nextAskAt) t.inFlight = t.read().catch(() => ({ kind: "ask_again", askAgainAfterMs: o })).then((e) => {
    t.inFlight = void 0, n(e);
  });
  if (i && t.inFlight) {
    let e = new AbortController();
    await Promise.race([t.inFlight, (0, import_chunk_5appeerh.K)(a, e.signal)]), e.abort();
  }
}
function n(t) {
  let i = (0, import_chunk_929j4hj9.Fi)(), e = i.chatTabGroupTitleAsks;
  if (!e) return;
  if (t.kind === "stop") {
    e.stopped = true, i.chromeTabGroupTitle = void 0, (0, import_chunk_cqa9hrgx.l)("chrome_tab_group_title_ask", "stopped");
    return;
  }
  if (t.kind === "named") i.chromeTabGroupTitle = t.title;
  if (e.serverGaveName) {
    e.stopped = true;
    return;
  }
  if (t.kind === "named") {
    e.serverGaveName = true, e.nextAskAt = import_chunk_5appeerh.Gi.monotonicNow() + t.askAgainAfterMs, (0, import_chunk_cqa9hrgx.u)("chrome_tab_group_title_ask");
    return;
  }
  if (e.asksWithNoName++, e.asksWithNoName >= s) {
    e.stopped = true, (0, import_chunk_cqa9hrgx.l)("chrome_tab_group_title_ask", "ask_limit_reached");
    return;
  }
  e.nextAskAt = import_chunk_5appeerh.Gi.monotonicNow() + Math.min(t.askAgainAfterMs * 2 ** (e.asksWithNoName - 1), r);
}
