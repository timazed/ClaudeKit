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
var chunk_2zeyvjwb_exports = {};
__export(chunk_2zeyvjwb_exports, {
  $hn: () => $hn,
  FVn: () => FVn,
  H7i: () => H7i,
  I7i: () => I7i,
  JLl: () => JLl,
  M7i: () => M7i,
  NPe: () => NPe,
  NVt: () => NVt,
  Oze: () => Oze,
  QLl: () => QLl,
  Ree: () => Ree,
  Vde: () => Vde,
  WS: () => WS,
  XLl: () => XLl,
  YLl: () => YLl,
  ZLl: () => ZLl,
  _Mr: () => _Mr,
  aIo: () => aIo,
  aNl: () => aNl,
  d8: () => d8,
  dIo: () => dIo,
  dNl: () => dNl,
  eL: () => eL,
  eNl: () => eNl,
  hk: () => hk,
  iNl: () => iNl,
  kIs: () => kIs,
  lIo: () => lIo,
  lNl: () => lNl,
  nNl: () => nNl,
  oNl: () => oNl,
  pFe: () => pFe,
  qhe: () => qhe,
  rNl: () => rNl,
  s3: () => s3,
  sNl: () => sNl,
  t2: () => t2,
  tNl: () => tNl,
  uo: () => uo,
  wIs: () => wIs,
  zR: () => zR
});
module.exports = __toCommonJS(chunk_2zeyvjwb_exports);
var import_chunk_69qhefwa = require("/$bunfs/root/chunk-69qhefwa.js");
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
var import_chunk_4smdap7r = require("/$bunfs/root/chunk-4smdap7r.js");
var i = null;
function YLl(e) {
  let r = i;
  return i = e, r;
}
function _Mr() {
  return i;
}
var o = null;
function XLl(e) {
  let r = o;
  return o = e, r;
}
function JLl() {
  return o?.() === true;
}
var a = null;
function QLl(e) {
  let r = a;
  return a = e, r;
}
var s = /* @__PURE__ */ new Set(["hipaa"]);
class l {
  latched = /* @__PURE__ */ new Set();
  latchedTaints = [];
  taints = [];
  current = [];
  changed = (0, import_chunk_69qhefwa.Be)();
  verdict = void 0;
  sawCloudSessionsSignIn = false;
  isReadingCloudSessionsSignIn = false;
  sawLimitedRetentionTaint = false;
  replaceTaints(e) {
    this.current = (0, import_chunk_4smdap7r.M)(e).sort();
    for (let r of e) if (s.has(r)) this.latched.add(r);
    if (this.latched.size !== this.latchedTaints.length) this.latchedTaints = Array.from(this.latched).sort();
    return this.refreshEffectiveTaints();
  }
  latchTaints(e) {
    let r = false;
    for (let t of e) if (s.has(t) && !this.latched.has(t)) this.latched.add(t), r = true;
    if (!r) return false;
    return this.latchedTaints = Array.from(this.latched).sort(), this.refreshEffectiveTaints();
  }
  refreshEffectiveTaints() {
    let e = (0, import_chunk_4smdap7r.M)([...this.latchedTaints, ...this.current]).sort();
    if (e.length === this.taints.length && e.every((r, t) => r === this.taints[t])) return false;
    return this.taints = e, this.changed.emit(this.taints), true;
  }
  registerVerdict(e) {
    this.verdict = e;
  }
  resetForTesting() {
    this.latched.clear(), this.latchedTaints = [], this.taints = [], this.current = [], this.sawCloudSessionsSignIn = false, this.sawLimitedRetentionTaint = false;
  }
}
var c = new import_chunk_2904xtvq.j(() => new l());
function n() {
  return c.of((0, import_chunk_f9x2f6cx.N)().host);
}
function wIs(e) {
  return n().replaceTaints(e);
}
function ZLl(e) {
  return n().latchTaints(e);
}
function eNl(e) {
  return s.has(e);
}
function uo(e) {
  return n().taints.includes(e);
}
function NVt() {
  return null;
}
function Ree() {
  return false;
}
function aIo() {
  return false;
}
function eL() {
  return n().taints;
}
function d8() {
  return n().current;
}
function kIs() {
  return n().latchedTaints;
}
function s3(e) {
  return n().changed.subscribe(e);
}
function tNl() {
  n().resetForTesting();
}
function nNl(e) {
  n().registerVerdict(e);
}
function hk(e) {
  return n().verdict?.isPolicyAllowed(e) ?? false;
}
function Oze(e) {
  try {
    return n().verdict?.isPolicyEnforced(e) ?? false;
  } catch {
    return;
  }
}
function rNl() {
  return n().verdict?.computerUseApps();
}
function oNl() {
  let e = n().verdict;
  return e ? e.rememberedCoreSkills() : [];
}
function qhe(e) {
  try {
    return n().verdict?.commandPolicyGateAllows(e) ?? false;
  } catch {
    return false;
  }
}
function zR(e) {
  let r = n().verdict;
  if (!r) return "unregistered";
  return r.policyDenyKind(e);
}
function sNl(e) {
  return n().verdict?.policyDeniedInAnswer(e) === true;
}
function NPe(e, r, t) {
  return n().verdict?.policyDeniedReason(e, r, t) ?? null;
}
function Vde() {
  return n().verdict?.complianceTaintsSettled() ?? false;
}
function t2() {
  let e = n().verdict;
  if (e === void 0) return false;
  try {
    return !e.policyLimitsCacheLoaded();
  } catch {
    return true;
  }
}
function iNl() {
  let e = n().verdict;
  if (e === void 0) return "loaded";
  try {
    return e.autoDefaultVerdictState();
  } catch {
    return "pending";
  }
}
function WS() {
  let e = n().verdict;
  if (e === void 0) return false;
  try {
    return e.policyVerdictAbsent();
  } catch {
    return true;
  }
}
function aNl() {
  try {
    return n().verdict?.awaitsOwnVerdictSinceColdStart() ?? true;
  } catch {
    return true;
  }
}
function pFe() {
  let e = n().verdict;
  if (e === void 0) return false;
  try {
    return e.sessionVerdictUnattributed();
  } catch {
    return true;
  }
}
function $hn() {
  try {
    return n().verdict?.sessionVerdictOwnFetched() ?? false;
  } catch {
    return false;
  }
}
function lIo() {
  try {
    return n().verdict?.sessionVerdictFetchedForLivePrincipal() ?? false;
  } catch {
    return false;
  }
}
function dIo({ whenUnreadable: e = true } = {}) {
  let r = n().verdict;
  if (r === void 0) return false;
  try {
    return r.verdictAbsentUnderHipaaRecord(e);
  } catch {
    return e;
  }
}
var FVn = "unreadable";
function I7i() {
  try {
    return n().verdict?.rowPrincipalStamp() ?? null;
  } catch {
    return FVn;
  }
}
function M7i(e) {
  let r = n().verdict;
  if (r === void 0) return false;
  try {
    return r.rowOfAnotherPrincipal(e);
  } catch {
    return true;
  }
}
function H7i() {
  let e = { stamp: FVn, hasAnswered: false };
  try {
    return n().verdict?.liveLogin() ?? e;
  } catch {
    return e;
  }
}
function lNl() {
  let e = n().verdict;
  if (e === void 0) return false;
  try {
    return e.principalSeenUnderHipaa();
  } catch {
    return true;
  }
}
function dNl() {
  let e = n().verdict;
  if (e === void 0) return false;
  try {
    return e.setAsideLoginSeenUnderHipaa();
  } catch {
    return true;
  }
}
