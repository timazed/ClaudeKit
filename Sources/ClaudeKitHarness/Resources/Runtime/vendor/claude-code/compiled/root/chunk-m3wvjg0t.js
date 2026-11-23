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
var chunk_m3wvjg0t_exports = {};
__export(chunk_m3wvjg0t_exports, {
  ESe: () => ESe,
  SE: () => SE,
  Sls: () => Sls,
  YF: () => YF,
  fmr: () => fmr,
  i0n: () => i0n,
  pmr: () => pmr,
  umr: () => umr,
  y1t: () => y1t,
  yls: () => yls
});
module.exports = __toCommonJS(chunk_m3wvjg0t_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_jv7av99m = require("/$bunfs/root/chunk-jv7av99m.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2gtmjt3y = require("/$bunfs/root/chunk-2gtmjt3y.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_w578pjby = require("/$bunfs/root/chunk-w578pjby.js");
var import_chunk_cg8dqz0a = require("/$bunfs/root/chunk-cg8dqz0a.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_zzrn5zap = require("/$bunfs/root/chunk-zzrn5zap.js");
var import_chunk_9b4aq7fb = require("/$bunfs/root/chunk-9b4aq7fb.js");
var import_chunk_0pb268nk = require("/$bunfs/root/chunk-0pb268nk.js");
var import_chunk_6zh1j84y = require("/$bunfs/root/chunk-6zh1j84y.js");
var import_chunk_aj8wb2xh = require("/$bunfs/root/chunk-aj8wb2xh.js");
var import_chunk_t57w17k7 = require("/$bunfs/root/chunk-t57w17k7.js");
var import_chunk_j4z7srhg = require("/$bunfs/root/chunk-j4z7srhg.js");
var YF = true;
var yls = "no hooks module loads in a claude-code-server tenant, whose process serves many people, but one the binary carries, or one linked on its tool container and run in a sandboxed host";
var E = "no hooks module loads in a tool server's daemon, which can hold the person's token and runs its caller's shell commands";
function ESe() {
  if ((0, import_chunk_j4z7srhg.ec)()) return E;
  return (0, import_chunk_f9x2f6cx.Y)() ? yls : void 0;
}
var i = () => (0, import_chunk_2gtmjt3y.Xn)() || (0, import_chunk_865at33z.cc)() || Boolean(import_chunk_c203g5kd.s.ANTHROPIC_API_KEY) || Boolean((0, import_chunk_2yx6c1y2.zr)()?.env?.ANTHROPIC_API_KEY) || (0, import_chunk_865at33z.WGe)() !== null || Boolean((0, import_chunk_865at33z.o_)()) || (0, import_chunk_865at33z.dm)() || (0, import_chunk_9b4aq7fb.UVt)() || !(0, import_chunk_865at33z.QV)({ envBearerFallbackFor: (0, import_chunk_865at33z.Szn)() }).error;
async function m() {
  if (i()) return false;
  let [o, r] = await Promise.all([(0, import_chunk_aj8wb2xh.RVt)((0, import_chunk_zzrn5zap.Er)(), (a) => a.claudeAiOauth !== void 0), (0, import_chunk_cg8dqz0a.x)() !== "macos" || (0, import_chunk_zzrn5zap.NNl)()]);
  return r && o.every((a) => a.value === false);
}
var e = (0, import_chunk_t57w17k7.de)({ isLifted: false, lifting: void 0 }, (o) => {
  o.isLifted = false, o.lifting = void 0;
});
function l() {
  return e.lifting ??= m().then((o) => {
    e.isLifted = o;
  }, (o) => {
    (0, import_chunk_w578pjby.t)(`credential stores not read strictly: ${(0, import_chunk_jv7av99m.d)(o)}`);
  }), e.lifting;
}
var umr = (0, import_chunk_t57w17k7.de)({ isFollowed: false }, (o) => {
  o.isFollowed = false;
});
var n = /* @__PURE__ */ new Set(["disk", "payload"]);
async function y1t() {
  let o = (0, import_chunk_865at33z.gn)(import_chunk_865at33z.uk, YF);
  return !umr.isFollowed && (0, import_chunk_865at33z.Lc)() && o.value !== YF && n.has(o.source) ? l() : void 0;
}
var f = () => !e.isLifted || i();
function Sls() {
  try {
    return (0, import_chunk_865at33z.e3i)() || f();
  } catch (o) {
    return (0, import_chunk_w578pjby.t)(`GrowthBook: credential sources not read (${(0, import_chunk_jv7av99m.D)(o).name})`), true;
  }
}
var p = () => !umr.isFollowed && (0, import_chunk_865at33z.Lc)() && n.has((0, import_chunk_865at33z.gn)(import_chunk_865at33z.uk, YF).source) && !Sls();
function fmr() {
  let o = (0, import_chunk_865at33z.b)(import_chunk_865at33z.uk, YF), r = o !== YF, a = r && ((0, import_chunk_865at33z.wf)() || p());
  if (r) y1t();
  return a ? YF : o;
}
var SE = () => ESe() === void 0 && fmr();
var pmr = () => SE() && !(0, import_chunk_0pb268nk.Lr)("hooks") && !(0, import_chunk_2gtmjt3y.as)();
var i0n = () => pmr() && !(0, import_chunk_6zh1j84y.Qh)() && !(0, import_chunk_6zh1j84y.ub)();
