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
var chunk_hvkyrv0z_exports = {};
__export(chunk_hvkyrv0z_exports, {
  HAe: () => HAe,
  Kps: () => Kps,
  Vps: () => Vps,
  _Fn: () => _Fn,
  n8e: () => n8e,
  nIi: () => nIi,
  qps: () => qps,
  t8e: () => t8e,
  ymo: () => ymo
});
module.exports = __toCommonJS(chunk_hvkyrv0z_exports);
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_7cfjrnwy = require("/$bunfs/root/chunk-7cfjrnwy.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_7fsmgfxx = require("/$bunfs/root/chunk-7fsmgfxx.js");
var import_chunk_xfj2cwfv = require("/$bunfs/root/chunk-xfj2cwfv.js");
var c = "it2";
class u {
  inITerm2 = null;
  it2Command = "it2";
  recordInITerm2(e) {
    this.inITerm2 = e;
  }
  recordIt2Command(e) {
    this.it2Command = e;
  }
}
function I() {
  return { cachedDetectionResult: null, backendsRegistered: false, inProcessFallbackActive: false, TmuxBackendClass: null, ITermBackendClass: null, tmuxBackend: null, itermBackend: null, terminalProbes: new u() };
}
var t8e = I();
var d = import_chunk_c203g5kd.s.TMUX, T = import_chunk_c203g5kd.s.TMUX_PANE;
function ymo() {
  return !!d;
}
async function HAe() {
  return ymo();
}
function Vps() {
  return T || null;
}
function Kps() {
  if (!d) return null;
  return (0, import_chunk_7cfjrnwy.nt)(d, ",") || null;
}
async function _Fn() {
  return (await (0, import_chunk_7fsmgfxx.kt)(import_chunk_xfj2cwfv.W6t, ["-V"])).code === 0;
}
function n8e(e = t8e) {
  let { terminalProbes: o } = e;
  if (o.inITerm2 !== null) return o.inITerm2;
  let a = import_chunk_c203g5kd.s.TERM_PROGRAM, i = !!import_chunk_c203g5kd.s.ITERM_SESSION_ID, l = import_chunk_c203g5kd.s.terminal === "iTerm.app", n = a === "iTerm.app" || i || l;
  return o.recordInITerm2(n), n;
}
function nIi(e = t8e) {
  return e.terminalProbes.it2Command;
}
async function qps(e = t8e) {
  let o = import_chunk_c203g5kd.s.SHELL || "/bin/zsh", a = await (0, import_chunk_7fsmgfxx.kt)(o, ["-lc", `command -v ${c}`], { useCwd: false, timeout: 2e3 }), i = a.code === 0 ? a.stdout.split(`
`).map((m) => m.trim()).filter(Boolean).at(-1) ?? "" : "", l = async (m) => (0, import_chunk_7fsmgfxx.kt)(m, ["session", "list"]), n = i || c, r = await l(n);
  if (i && r.code !== 0 && (r.code === 127 || /ENOENT/i.test(r.error ?? ""))) n = c, r = await l(n);
  if (r.code !== 0) return (0, import_chunk_w578pjby.t)(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr || r.error || "no stderr"}. ` + (i ? "it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled (Preferences > General > Magic > Enable Python API)." : "it2 was not found on PATH (including login-shell PATH).")), false;
  return e.terminalProbes.recordIt2Command(n), true;
}
