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
var chunk_nn7sd2sk_exports = {};
__export(chunk_nn7sd2sk_exports, {
  IMt: () => IMt,
  _ht: () => _ht
});
module.exports = __toCommonJS(chunk_nn7sd2sk_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_mndk3x2g = require("/$bunfs/root/chunk-mndk3x2g.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_21whhrcv = require("/$bunfs/root/chunk-21whhrcv.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4rp6k6sw = require("/$bunfs/root/chunk-4rp6k6sw.js");
var import_path = require("path");
function IMt(o, { liveLaunchAnchor: e, launchCheckout: i, bootLaunchTree: n, worktreePath: r }, c = true) {
  if (e === void 0) return true;
  if (typeof o !== "string") return false;
  let s = i ?? null, a = s ?? e;
  if (!l(a)) return (0, import_chunk_w578pjby.t)("[worktree] exit: edits stay allowed without asking only in the worktree: the repository that Claude Code was started in (or the folder, if it was started outside any repository) has a link in its path now, or cannot be resolved"), false;
  if (s !== null) {
    let f = (0, import_chunk_mndk3x2g.Nh)(e);
    if (!(0, import_chunk_mndk3x2g.ipe)(f, (0, import_chunk_mndk3x2g.Nh)(r))) {
      let u = f.canonical === f.lexical ? (0, import_chunk_w5s307zm.Gy)(e) : null;
      if (u === null || (0, import_chunk_6h9mds0d.bE)(u, s) !== "same") return (0, import_chunk_w578pjby.t)("[worktree] exit: edits stay allowed without asking only in the worktree: the git repository that Claude Code was started in has been moved, replaced or removed since the session was resumed, or the folder that it was started in has a link in its path now or cannot be resolved"), false;
    }
  }
  if ((0, import_chunk_6h9mds0d.bE)(a, r) === "same") return false;
  let d = (0, import_chunk_4rp6k6sw.VAe)(r)?.checkout;
  return (0, import_chunk_21whhrcv._tr)(o, [a], { requireCovered: true, coveredWitnesses: s !== null ? [s] : [], extraCoveredRoots: c && d !== void 0 && l(d) ? [d] : [], bootLaunchTree: n !== void 0 && l(n) && (0, import_chunk_6h9mds0d.bE)((0, import_chunk_f9x2f6cx.Te)(), r) === "same" ? n : void 0 });
}
function _ht(o, e) {
  let i = o.preEnterOriginalCwd;
  if (typeof i !== "string" || !(0, import_path.isAbsolute)(i)) return;
  if ((0, import_chunk_w578pjby.M4t)(i)) {
    (0, import_chunk_w578pjby.t)('[worktree] exit: not entering the folder from before EnterWorktree: its spelling is refused (network, "..") or a part of it cannot be examined');
    return;
  }
  let n = (0, import_chunk_bzyb60p0.aSe)(i, (r) => o.liveLaunchAnchor === void 0 ? r === i : IMt(r, o, false));
  if (n === void 0) {
    (0, import_chunk_w578pjby.t)("[worktree] exit: not entering the folder from before EnterWorktree: it is gone, or it resolves to a path that is refused");
    return;
  }
  try {
    (0, import_chunk_w578pjby.u_)(n.path);
  } catch (r) {
    (0, import_chunk_w578pjby.t)(`[worktree] exit: the folder from before EnterWorktree refuses entry (${(0, import_chunk_jv7av99m.w)(r) ?? "no code"})`);
    return;
  }
  return (0, import_chunk_bzyb60p0.Cfe)(n, e), n.path;
}
function l(o) {
  let e = (0, import_chunk_mndk3x2g.Nh)(o);
  return e.canonical === e.lexical;
}
