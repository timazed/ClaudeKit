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
var chunk_nrva1r4h_exports = {};
__export(chunk_nrva1r4h_exports, {
  Bvn: () => Bvn,
  HVr: () => HVr,
  MVr: () => MVr,
  Uvn: () => Uvn
});
module.exports = __toCommonJS(chunk_nrva1r4h_exports);
var import_chunk_drk264d0 = require("/$bunfs/root/chunk-drk264d0.js");
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var import_chunk_pbteexar = require("/$bunfs/root/chunk-pbteexar.js");
var import_chunk_ye28qmhg = require("/$bunfs/root/chunk-ye28qmhg.js");
var import_chunk_bzyb60p0 = require("/$bunfs/root/chunk-bzyb60p0.js");
function Uvn(n, o, s, e, i) {
  return e || (0, import_chunk_drk264d0.Ey)(s) || n.suppressesAlwaysAllowRule?.(o, !(0, import_chunk_865at33z.b)("tengu_valiant_crayon", false)) === true && !(i ?? []).some((r) => (r.type === "addRules" || r.type === "replaceRules") && r.behavior === "allow" && r.rules.some((t) => t.ruleContent !== void 0)) || void 0;
}
function MVr(n, o, s, e, i) {
  return e.ruleUsuallyOffered === true && e.suppressAlwaysAllowRule === true && e.defaultToNo !== true && e.hooksMayRefuse !== true && e.oneTimeAnswersOnly !== true && (0, import_chunk_bzyb60p0.ha)(e.decisionReason, (r) => !r.classifierApprovable) === void 0 && Uvn(n, o, s, false, i) === void 0 || void 0;
}
function HVr(n, o, s, e) {
  return e.metadata?.mcpSkill !== void 0 && (e.matchedAskRule !== void 0 || Uvn(n, o, s, e.suppressAlwaysAllowRule, e.suggestions) === true) ? void 0 : e.suggestions;
}
function Bvn(n, o, s) {
  if ((0, import_chunk_bzyb60p0.ha)(n.decisionReason, import_chunk_pbteexar.MK) !== void 0 || (0, import_chunk_ye28qmhg.nqe)(s)) return true;
  if (o.requiresUserInteraction?.()) return true;
  return n.forcedByCaller === true || n.personOnly === true;
}
