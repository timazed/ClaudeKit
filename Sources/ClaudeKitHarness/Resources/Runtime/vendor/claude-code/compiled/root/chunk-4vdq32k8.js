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
var chunk_4vdq32k8_exports = {};
__export(chunk_4vdq32k8_exports, {
  O6o: () => O6o,
  lPa: () => lPa,
  y9s: () => y9s
});
module.exports = __toCommonJS(chunk_4vdq32k8_exports);
var import_chunk_2cbgkbm2 = require("/$bunfs/root/chunk-2cbgkbm2.js");
var import_chunk_adx6804h = require("/$bunfs/root/chunk-adx6804h.js");
(0, import_chunk_adx6804h.B)();
var O6o = ["important", "pre_existing", "nit"], y9s = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.c)({ file: (0, import_chunk_adx6804h.n)().describe("Repo-relative path of the file the finding is in"), line: (0, import_chunk_adx6804h.E)().int().optional().describe("1-indexed line the finding anchors to"), summary: (0, import_chunk_adx6804h.n)().describe("Statement of the defect"), short_summary: (0, import_chunk_adx6804h.n)().max(60).optional().describe("Compressed label for compact UI (\u226460 chars): the claim alone, no rationale or consequence clause"), failure_scenario: (0, import_chunk_adx6804h.n)().describe("Concrete inputs/state \u2192 wrong output/crash"), category: (0, import_chunk_adx6804h.n)().max(40).optional().describe('Short kebab-case slug of the finding type, e.g. "correctness", "simplification", "efficiency", "test-coverage"'), severity: (0, import_chunk_adx6804h.F)(O6o).optional().describe("Set when the review instructions ask for it. important: a bug the change adds or makes worse; pre_existing: a bug that was there before the change; nit: a minor issue"), verdict: (0, import_chunk_adx6804h.F)(["CONFIRMED", "PLAUSIBLE"]).optional().describe("Set when a verify pass ran; absent on inline-only reviews"), outcome: (0, import_chunk_adx6804h.F)(["fixed", "skipped", "no_change_needed"]).optional().describe("Set ONLY when re-reporting after applying fixes: what happened to this finding") })), lPa = (0, import_chunk_2cbgkbm2.p)(() => (0, import_chunk_adx6804h.Ae)({ level: (0, import_chunk_adx6804h.F)(["low", "medium", "high", "xhigh", "max"]).optional().describe("Effort level the review ran at"), findings: (0, import_chunk_adx6804h.C)(y9s()).max(32).describe("Verified findings, most-severe first; empty if none survived") }));
