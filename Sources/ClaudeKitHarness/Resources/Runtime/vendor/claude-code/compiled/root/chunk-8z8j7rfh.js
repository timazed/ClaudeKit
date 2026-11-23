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
var chunk_8z8j7rfh_exports = {};
__export(chunk_8z8j7rfh_exports, {
  aYl: () => aYl,
  bGo: () => bGo,
  wGo: () => wGo
});
module.exports = __toCommonJS(chunk_8z8j7rfh_exports);
var import_chunk_vfyns8ja = require("/$bunfs/root/chunk-vfyns8ja.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_dw5px5e0 = require("/$bunfs/root/chunk-dw5px5e0.js");
var import_chunk_m3wvjg0t = require("/$bunfs/root/chunk-m3wvjg0t.js");
var import_chunk_hrmqj4hy = require("/$bunfs/root/chunk-hrmqj4hy.js");
var import_chunk_jhdsf4g3 = require("/$bunfs/root/chunk-jhdsf4g3.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_4b5275ey = require("/$bunfs/root/chunk-4b5275ey.js");
var import_chunk_9e5mdyfk = require("/$bunfs/root/chunk-9e5mdyfk.js");
var import_chunk_speqggn1 = require("/$bunfs/root/chunk-speqggn1.js");
function u(e = (0, import_chunk_865at33z.Yi)()) {
  return e && !import_chunk_c203g5kd.s.CLAUDE_CODE_SYNC_PLUGIN_INSTALL && (0, import_chunk_hrmqj4hy.tX)() && (0, import_chunk_m3wvjg0t.SE)();
}
async function bGo(e, o, i, { isTrusted: r, isPreview: n } = {}) {
  try {
    if (!u(r)) return false;
    return (await Promise.allSettled((await (0, import_chunk_bzyb60p0.Jpi)(o, i, n)).map((a) => (0, import_chunk_vfyns8ja.jGt)(a.modulePath, a.path, a.name)))).some((a) => a.status === "fulfilled" && a.value.scan.hooks.some((m) => m.startsWith("vcs.") && (0, import_chunk_vfyns8ja.FV)(m, e)));
  } catch (l) {
    return (0, import_chunk_w578pjby.t)(`mods not scanned for ${e}: ${(0, import_chunk_jv7av99m.d)(l)}`, { level: "warn" }), false;
  }
}
async function wGo(e, o) {
  return e.length > 0 || (0, import_chunk_bzyb60p0.QIn)() || (0, import_chunk_jhdsf4g3.Ion)() || (await (0, import_chunk_bzyb60p0.DYo)(o)).length > 0;
}
async function aYl(e, o, i) {
  let r = (0, import_chunk_bzyb60p0.$Zo)(e);
  if (e[0] === "ssh" || (0, import_chunk_dw5px5e0.L1e)(import_chunk_dw5px5e0.HFr, r) !== -1 || (0, import_chunk_9e5mdyfk.tmr)((0, import_chunk_dw5px5e0.IFr)(r)) || false || !u()) return false;
  if ((0, import_chunk_dw5px5e0.nY)("--plugin-url", r).length > 0) return true;
  let n = (0, import_chunk_speqggn1.L$)((0, import_chunk_dw5px5e0.nY)("--plugin-dir", r), (0, import_chunk_dw5px5e0.nY)("--plugin-dir-no-mcp", r), (0, import_chunk_speqggn1.Hht)());
  if ((0, import_chunk_f9x2f6cx.AL)((0, import_chunk_dw5px5e0.nY)("--add-dir", r)), !await wGo(n, o)) return false;
  (0, import_chunk_f9x2f6cx.kF)(n);
  try {
    return await bGo("vcs.isolate", o, i);
  } finally {
    (0, import_chunk_f9x2f6cx.kF)([]), (0, import_chunk_bzyb60p0.N_)("tmux router: listed ahead of the root program"), await (0, import_chunk_4b5275ey.Lmr)(import_chunk_4b5275ey.krn);
  }
}
