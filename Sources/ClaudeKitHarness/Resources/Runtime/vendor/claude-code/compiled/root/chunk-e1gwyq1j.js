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
var chunk_e1gwyq1j_exports = {};
__export(chunk_e1gwyq1j_exports, {
  FDt: () => FDt,
  Z3o: () => Z3o
});
module.exports = __toCommonJS(chunk_e1gwyq1j_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_z6pfqf6e = require("/$bunfs/root/chunk-z6pfqf6e.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var import_chunk_n2dbhmj2 = require("/$bunfs/root/chunk-n2dbhmj2.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_os = require("os");
var import_path = require("path");
function FDt(e) {
  try {
    if (!((0, import_chunk_cg8dqz0a.x)() === "windows" ? /^(?:[A-Za-z]:[\\/]|[\\/]{2}[^\\/])/.test(e) : (0, import_path.isAbsolute)(e))) return { verdict: "untrusted", cwd: e, unresolvable: true };
    let r = (0, import_chunk_z6pfqf6e.zh)(e);
    if (r === null) return { verdict: "untrusted", cwd: e, unresolvable: true };
    if (import_chunk_c203g5kd.s.CLAUDE_CODE_SANDBOXED) return { verdict: "sandboxed", cwd: r };
    if ((0, import_chunk_865at33z.Xk)(r)) return { verdict: "persisted", cwd: r };
    let n;
    for (let o of /* @__PURE__ */ new Set([(0, import_path.resolve)(e), (0, import_chunk_f9x2f6cx.Te)()])) {
      if ((0, import_chunk_n2dbhmj2.Noe)(o) === (0, import_chunk_n2dbhmj2.Noe)(r) || (0, import_chunk_2yx6c1y2.bv)(o, r) && (0, import_chunk_z6pfqf6e.sNo)(o) !== o) continue;
      if (!(0, import_chunk_z6pfqf6e.Lce)(o, r)) continue;
      let u = (0, import_chunk_865at33z.e6n)(o);
      if (u === null || !(0, import_chunk_z6pfqf6e.Rpt)(u, r)) continue;
      if (n === void 0) n = (0, import_chunk_865at33z.dmn)(r);
      if (n === null || (n.rootOnly ? (0, import_chunk_z6pfqf6e.Lce)(n.root, u) : (0, import_chunk_z6pfqf6e.Rpt)(n.root, u))) return { verdict: "persisted", cwd: o };
    }
    if ((0, import_chunk_f9x2f6cx.XM)() && (0, import_chunk_f9x2f6cx.HQe)() && (0, import_chunk_z6pfqf6e.Lce)((0, import_os.homedir)(), r)) return { verdict: "session", cwd: r };
    return { verdict: "untrusted", cwd: r, unresolvable: false };
  } catch (i) {
    return (0, import_chunk_w578pjby.t)(`bg: workspace trust check threw \u2014 ${(0, import_chunk_jv7av99m.d)(i)}`, { level: "warn" }), { verdict: "untrusted", cwd: e, unresolvable: false };
  }
}
function Z3o(e) {
  let i = (0, import_chunk_xfj2cwfv.wr)(e.cwd);
  if (e.unresolvable) return `Workspace not trusted. ${i} could not be resolved on disk.`;
  return (0, import_chunk_z6pfqf6e.Lce)(e.cwd, (0, import_os.homedir)()) ? "Workspace not trusted. The home directory is trusted one session at a time \u2014 start this from an interactive terminal there, or from a project directory." : `Workspace not trusted. Run \`claude\` in ${i} once and accept the trust prompt, then retry.`;
}
