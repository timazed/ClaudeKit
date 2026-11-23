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
var chunk_r7rdkntg_exports = {};
__export(chunk_r7rdkntg_exports, {
  aDt: () => aDt,
  tQs: () => tQs
});
module.exports = __toCommonJS(chunk_r7rdkntg_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_xcgcdx61 = require("/$bunfs/root/chunk-xcgcdx61.js");
var import_chunk_vcnr02by = require("/$bunfs/root/chunk-vcnr02by.js");
var import_chunk_wj4me9k5 = require("/$bunfs/root/chunk-wj4me9k5.js");
var import_chunk_54j6k3fn = require("/$bunfs/root/chunk-54j6k3fn.js");
var d = 14, f = 10;
async function aDt() {
  try {
    let e = (0, import_chunk_865at33z.Lpn)();
    if (e === void 0) return [];
    if ((0, import_chunk_wj4me9k5.E4)() !== null) return [];
    let { enabled: s } = await e;
    if (s.length === 0) return [];
    let u = (0, import_chunk_vcnr02by.Bg)(), l = (0, import_chunk_wj4me9k5.VG)(), c = (0, import_chunk_865at33z.ge)().numStartups, g = Date.now(), r = [];
    for (let n of s) {
      let { marketplace: o } = (0, import_chunk_xcgcdx61.Kn)(n.repository);
      if (!o || (0, import_chunk_xcgcdx61.sg)(o)) continue;
      if ((0, import_chunk_54j6k3fn.IOi)(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = (0, import_chunk_54j6k3fn.smo)(n.repository);
      if (!i) continue;
      if ((0, import_chunk_54j6k3fn.COi)(n.repository)) continue;
      let { sessionsSinceLastUse: m, daysSinceLastUse: a } = (0, import_chunk_54j6k3fn.imo)(i, c, g);
      if (a >= d && m >= f) r.push({ pluginId: n.repository, name: n.name, daysSinceLastUse: a });
    }
    return r.sort((n, o) => o.daysSinceLastUse - n.daysSinceLastUse), r;
  } catch (e) {
    return (0, import_chunk_w578pjby.t)(`plugin-disuse tip: failed to compute disused plugins: ${e}`, { level: "error" }), [];
  }
}
function tQs(e) {
  if ((0, import_chunk_wj4me9k5.E4)() !== null) return null;
  let s = (0, import_chunk_54j6k3fn.smo)(e);
  if (!s) return null;
  if ((0, import_chunk_54j6k3fn.COi)(e)) return 0;
  return (0, import_chunk_54j6k3fn.imo)(s, (0, import_chunk_865at33z.ge)().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
