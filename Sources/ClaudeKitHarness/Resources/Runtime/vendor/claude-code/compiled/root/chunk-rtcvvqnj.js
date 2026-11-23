const __prototypeModuleURL = require("node:url").pathToFileURL(__filename).href;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_rtcvvqnj_exports = {};
__export(chunk_rtcvvqnj_exports, {
  H8l: () => H8l,
  wVs: () => wVs
});
module.exports = __toCommonJS(chunk_rtcvvqnj_exports);
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_k449cc64 = require("/$bunfs/root/chunk-k449cc64.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_xb56zerw = require("/$bunfs/root/chunk-xb56zerw.js");
var import_chunk_8z8j7rfh = require("/$bunfs/root/chunk-8z8j7rfh.js");
var import_chunk_sr1rbsf6 = require("/$bunfs/root/chunk-sr1rbsf6.js");
var import_chunk_xhqwsnqh = require("/$bunfs/root/chunk-xhqwsnqh.js");
async function wVs(e, o, a, { mayLoad: n = import_chunk_sr1rbsf6.k8t, ...s } = {}) {
  try {
    if (!await (0, import_chunk_8z8j7rfh.bGo)(e, o, a, s)) return false;
    let r = await n();
    if ((0, import_chunk_xfj2cwfv.nn)()) return (0, import_chunk_xfj2cwfv.Ga)();
    if (r) {
      if (!(0, import_chunk_865at33z.to)().builtinPluginsInitialized) (0, import_chunk_xb56zerw.L_e)(), (0, import_chunk_bzyb60p0.N_)("built-ins registered ahead of a vcs raise");
      await (0, import_chunk_bzyb60p0.yns)(o, a);
    }
    return r;
  } catch (r) {
    return (0, import_chunk_w578pjby.t)(`mods not loaded ahead of ${e}: ${(0, import_chunk_jv7av99m.d)(r)}`, { level: "warn" }), false;
  }
}
async function H8l(e, o) {
  (0, import_chunk_bzyb60p0.N_)("moved into a mod's working copy"), await (0, import_chunk_xhqwsnqh.UV)(() => (0, import_chunk_bzyb60p0.Yen)(e, o)).catch(import_chunk_k449cc64.i);
}
