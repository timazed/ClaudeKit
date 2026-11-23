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
var chunk_jhy72swy_exports = {};
__export(chunk_jhy72swy_exports, {
  Q8t: () => Q8t,
  QTa: () => QTa,
  oQn: () => oQn
});
module.exports = __toCommonJS(chunk_jhy72swy_exports);
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_trwykz8a = require("/$bunfs/root/chunk-trwykz8a.js");
var import_chunk_cbnm4p23 = require("/$bunfs/root/chunk-cbnm4p23.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_p1ewvgeh = require("/$bunfs/root/chunk-p1ewvgeh.js");
var import_chunk_4yjj7pjs = require("/$bunfs/root/chunk-4yjj7pjs.js");
var import_chunk_ed372ykp = require("/$bunfs/root/chunk-ed372ykp.js");
function Q8t(e, r, a = (n) => !(0, import_chunk_ed372ykp.$o)(n.status)) {
  for (let n of Object.values(e)) {
    let s = n.cwd;
    if (s === void 0 || !a(n)) continue;
    if (r.some((u) => (0, import_chunk_p1ewvgeh.Sc)(s, u))) return n;
  }
  return;
}
function oQn(e, r) {
  return !(0, import_chunk_ed372ykp.$o)(e.status) || (0, import_chunk_bzyb60p0.QTe)(e) || (0, import_chunk_bzyb60p0.jie)(e.id, r);
}
function QTa(e) {
  let r = { ...e, resuming: /* @__PURE__ */ new Set(), subscriptions: [] };
  r.subscriptions.push((0, import_chunk_trwykz8a.mn)().agentSettled.subscribe((a, n, s) => f(r, a, s?.stranded === true, false)), (0, import_chunk_trwykz8a.mn)().taskEvicted.subscribe((a) => f(r, a, false, true))), f(r, void 0, false, false);
}
function f(e, r, a, n) {
  try {
    let s = r !== void 0 && (0, import_chunk_cbnm4p23.Ai)((0, import_chunk_4yjj7pjs.tso)(r)?.signal.reason) === "background";
    if (r !== void 0 && a) e.resuming.add(r);
    else if (r !== void 0) e.resuming.delete(r);
    if (e.findOccupant((o) => !(n && o.id === r) && (e.resuming.has(o.id) || oQn(o, e.taskRegistry))) !== void 0 && !s) return;
    for (let o of e.subscriptions) o();
    if ((0, import_chunk_w578pjby.t)(`Agent worktree ${e.worktreePath}: ${s ? "a /background handoff was seen; lock kept" : "no live task is left in it; releasing its lock"}`), !s) {
      let o = (0, import_chunk_bzyb60p0.yq)(e.worktreePath, e.gitRoot);
      o.finally((0, import_chunk_w578pjby.Ct)(() => o));
    }
  } catch (s) {
    if (!(0, import_chunk_jv7av99m.Fe)(s)) (0, import_chunk_k449cc64.i)(s);
  }
}
