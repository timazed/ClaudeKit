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
var chunk_2xjdqky3_exports = {};
__export(chunk_2xjdqky3_exports, {
  Dhs: () => Dhs,
  Gpl: () => Gpl,
  Iit: () => Iit,
  Jpl: () => Jpl,
  Kpl: () => Kpl,
  Lhs: () => Lhs,
  Mit: () => Mit,
  QSr: () => QSr,
  Qpl: () => Qpl,
  VBt: () => VBt,
  Vpl: () => Vpl,
  Xpl: () => Xpl,
  Ypl: () => Ypl,
  Zpl: () => Zpl,
  aml: () => aml,
  b1n: () => b1n,
  cml: () => cml,
  dml: () => dml,
  eml: () => eml,
  fDi: () => fDi,
  fml: () => fml,
  hml: () => hml,
  i1: () => i1,
  iml: () => iml,
  jpl: () => jpl,
  k1n: () => k1n,
  lml: () => lml,
  mml: () => mml,
  nml: () => nml,
  om: () => om,
  oml: () => oml,
  pml: () => pml,
  qpl: () => qpl,
  rml: () => rml,
  sml: () => sml,
  tgo: () => tgo,
  tml: () => tml,
  uDi: () => uDi,
  uml: () => uml,
  w1n: () => w1n,
  yan: () => yan,
  zBt: () => zBt,
  zpl: () => zpl
});
module.exports = __toCommonJS(chunk_2xjdqky3_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_c203g5kd = require("/$bunfs/root/chunk-c203g5kd.js");
var import_chunk_3t7ve0wy = require("/$bunfs/root/chunk-3t7ve0wy.js");
var import_chunk_xzvhvaa2 = require("/$bunfs/root/chunk-xzvhvaa2.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_2yx6c1y2 = require("/$bunfs/root/chunk-2yx6c1y2.js");
var import_chunk_8m5q5cts = require("/$bunfs/root/chunk-8m5q5cts.js");
var import_chunk_pqpxa7em = require("/$bunfs/root/chunk-pqpxa7em.js");
var jpl = "claude-opus-4-8";
function Gpl() {
  return (0, import_chunk_865at33z.b)("tengu_amber_redwood2", "") || (0, import_chunk_865at33z.b)("tengu_amber_redwood3", "");
}
var u = "tengu_goofy_jellyfish";
function zpl() {
  return (0, import_chunk_865at33z.b)(u, "");
}
var i = "tengu_jaunty_breeze", Vpl = "claude-opus-5-5", a = 3e5;
function Kpl() {
  let e = (0, import_chunk_865at33z.b)(i, 0);
  return typeof e === "number" && Number.isInteger(e) && e >= a && e < 1e6 ? e : 0;
}
function o() {
  return Boolean((0, import_chunk_69qhefwa.Ne)(process.env.DISABLE_COMPACT) || import_chunk_c203g5kd.s.DISABLE_AUTO_COMPACT);
}
function om() {
  if (o()) return false;
  return (0, import_chunk_8m5q5cts.ll)("autoCompactEnabled", true).value;
}
function Iit() {
  return (0, import_chunk_8m5q5cts.ll)("idleCompaction", true).value;
}
function zBt() {
  return (0, import_chunk_8m5q5cts.ll)("precomputeCompactionEnabled", true).value;
}
function tgo() {
  return (0, import_chunk_2yx6c1y2._e)("flagSettings")?.precomputeArmTokens ?? 1 / 0;
}
function uDi() {
  if (o()) return false;
  let e = (0, import_chunk_8m5q5cts.ll)("autoCompactEnabled", true);
  if (e.value) return false;
  if (e.source === "userSettings") return true;
  if (e.source === "legacyGlobalConfig") return (0, import_chunk_xzvhvaa2.rn)("userSettings");
  return false;
}
class r {
  latched = void 0;
  isOpen() {
    return this.latched ??= (0, import_chunk_865at33z.b)("tengu_reactive_compact_remote", (0, import_chunk_pqpxa7em.Lcn)()), this.latched;
  }
  reset() {
    this.latched = void 0;
  }
}
var l = new r();
function i1() {
  if (import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE) {
    if (!l.isOpen()) return false;
  }
  return true;
}
function yan() {
  return (0, import_chunk_865at33z.b)("tengu_hidden_frog", true);
}
function VBt() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_865at33z.b)(import_chunk_865at33z.QCo, false);
}
function QSr() {
  return (0, import_chunk_865at33z.b)("tengu_generic_papert", (0, import_chunk_3t7ve0wy.SLs)() && !(0, import_chunk_3t7ve0wy.nx)() && (0, import_chunk_pqpxa7em.KG)());
}
function qpl() {
  return (0, import_chunk_865at33z.b)("tengu_virtual_quiche", false);
}
function Ypl() {
  return (0, import_chunk_865at33z.b)("tengu_wobbly_sundae", false);
}
function Xpl() {
  return (0, import_chunk_865at33z.b)("tengu_linked_shore", (0, import_chunk_3t7ve0wy.SLs)() && !(0, import_chunk_3t7ve0wy.nx)() && (0, import_chunk_pqpxa7em.KG)());
}
function Jpl() {
  return (0, import_chunk_865at33z.b)("tengu_hazy_prism", false);
}
function Qpl() {
  return (0, import_chunk_865at33z.b)("tengu_valiant_teapot", false);
}
function b1n() {
  return (0, import_chunk_865at33z.b)("tengu_linked_rose", true);
}
function w1n() {
  return (0, import_chunk_865at33z.b)("tengu_soft_spark", (0, import_chunk_pqpxa7em.Lcn)());
}
function Zpl() {
  return (0, import_chunk_865at33z.b)("tengu_gentle_anchor", true);
}
function eml() {
  return import_chunk_c203g5kd.s.CLAUDE_CODE_REMOTE && (0, import_chunk_865at33z.b)("tengu_typed_snail", false);
}
function tml() {
  return (0, import_chunk_865at33z.b)("tengu_tidy_thimble", false);
}
function nml() {
  return (0, import_chunk_865at33z.b)("tengu_sleepy_ripple", true);
}
function rml() {
  return (0, import_chunk_865at33z.b)("tengu_mossy_sky", false);
}
function fDi() {
  return (0, import_chunk_865at33z.b)("tengu_serene_rain", false) && zBt();
}
function oml() {
  let e = (0, import_chunk_865at33z.b)("tengu_spare_attic", 0);
  return typeof e === "number" ? e : 0;
}
var t = "tengu_binary_music";
function sml() {
  if ((0, import_chunk_f9x2f6cx.Se)()) return (0, import_chunk_3t7ve0wy.Dw)() && (0, import_chunk_865at33z.Lc)() && (0, import_chunk_2yx6c1y2._e)("flagSettings")?.autoCompactRaisedForLoad === true;
  let e = (0, import_chunk_865at33z.kM)(t) ? (0, import_chunk_865at33z.b)(t, {}) : (0, import_chunk_865at33z.Lc)() && (0, import_chunk_865at33z.xX)(t);
  return typeof e === "object" && e !== null && "arm" in e && e.arm === "offer";
}
var iml = "tengu_nested_kite";
function aml() {
  let e = (0, import_chunk_865at33z.b)("tengu_woven_tassel", 0);
  return typeof e === "number" && e > 0 ? e : 0;
}
function Dhs(e) {
  return (0, import_chunk_865at33z.b)("tengu_scalable_meteor", false) ? { byCharacterKind: e } : e;
}
function lml() {
  return (0, import_chunk_865at33z.b)("tengu_dapper_fountain", true);
}
function dml() {
  return (0, import_chunk_865at33z.b)("tengu_indexed_salamander", false);
}
function cml() {
  return (0, import_chunk_865at33z.b)("tengu_partitioned_brook", false);
}
function uml() {
  return (0, import_chunk_865at33z.b)("tengu_wise_pillow", false);
}
function fml() {
  return (0, import_chunk_865at33z.b)("tengu_gleaming_spring", false);
}
function pml() {
  return (0, import_chunk_865at33z.b)("tengu_flickering_nest", false);
}
function mml() {
  return (0, import_chunk_865at33z.b)("tengu_groovy_eclipse", false);
}
var p = "tengu_wise_comet";
function hml(e) {
  let n = import_chunk_c203g5kd.s.CLAUDE_CODE_WISE_COMET;
  if (n !== void 0) return { strip: n, source: "env" };
  if (e !== "adaptive") return { strip: false, source: "thinking_type" };
  return { strip: (0, import_chunk_865at33z.b)(p, false), source: "flag" };
}
var c = /* @__PURE__ */ new Set(["prompt_suggestion", "away_summary", "agent_summary", "resume_cache_warm", "hook_prompt", "comparison_fork"]);
function Mit(e) {
  return e !== void 0 && c.has(e);
}
var _ = /* @__PURE__ */ new Set(["side_question", "extract_memories"]);
function Lhs(e) {
  return e !== void 0 && _.has(e);
}
function k1n(e) {
  return e === "compact";
}
