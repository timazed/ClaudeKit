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
var chunk_p5m4fqpp_exports = {};
__export(chunk_p5m4fqpp_exports, {
  Wzr: () => Wzr
});
module.exports = __toCommonJS(chunk_p5m4fqpp_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w5s307zm = require("/$bunfs/root/chunk-w5s307zm.js");
var import_chunk_rb36kwbn = require("/$bunfs/root/chunk-rb36kwbn.js");
var import_chunk_kypvvv9j = require("/$bunfs/root/chunk-kypvvv9j.js");
var import_chunk_6h9mds0d = require("/$bunfs/root/chunk-6h9mds0d.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_harsxaq1 = require("/$bunfs/root/chunk-harsxaq1.js");
async function Wzr(t, o, s, { parentAgentId: n, origin: a, signal: k, refuseGitWorktree: l, tmuxSessionName: d, mayStartThere: f }) {
  let p = { name: t, from: o, for: "session", ...n !== void 0 && { parentAgentId: n }, base: s.fromHead ? "head" : (0, import_chunk_bzyb60p0.lQ)() }, m = import_chunk_bzyb60p0.qY.get()?.isHooked("vcs.isolate", p, a);
  if (m) {
    if ((0, import_chunk_bzyb60p0.IZo)(), (0, import_chunk_9e5mdyfk.$ot)(t)) throw new import_chunk_bzyb60p0.gd("A worktree name can't start with a dash. Choose a different name.");
  }
  let u = (0, import_chunk_f9x2f6cx.Te)(), e = {}, { worktreePath: i, realPath: g, copy: h } = await (0, import_chunk_bzyb60p0.YY)(p, { origin: a, signal: k, mayStartThere: f, onFolderRefused() {
    if (!(0, import_chunk_w5s307zm.dr)(o)) (0, import_chunk_rb36kwbn.GIr)(o);
  }, async make() {
    try {
      return e.made = await (0, import_chunk_bzyb60p0.odr)((0, import_chunk_f9x2f6cx.W)(), t, d, { ...s, fromCwd: o, ...(0, import_chunk_harsxaq1.Dg)("session") && { askedMod: { refuseGitWorktree: l, onUnobtainable() {
        e.isUnobtainable = true;
      } } } }), (0, import_chunk_bzyb60p0.Ueo)(e.made);
    } catch (r) {
      throw e.failure = r, r;
    }
  } }).catch((r) => {
    if (e.isUnobtainable && r === e.failure) (0, import_chunk_rb36kwbn.GIr)(o);
    throw r;
  });
  if (e.made !== void 0 && !m) return e.made;
  let c = { ...e.made ?? { originalCwd: o, preEnterOriginalCwd: u, worktreePath: i, worktreeName: t, sessionId: (0, import_chunk_f9x2f6cx.W)(), tmuxSessionName: d, hookBased: true, madeAs: (0, import_chunk_kypvvv9j.Tg)(i), realPath: f && (0, import_chunk_6h9mds0d.bE)(o, i) !== "distinct" ? void 0 : g }, vcsCopy: h };
  return (0, import_chunk_bzyb60p0.V$)(c, s.storageV5), c;
}
