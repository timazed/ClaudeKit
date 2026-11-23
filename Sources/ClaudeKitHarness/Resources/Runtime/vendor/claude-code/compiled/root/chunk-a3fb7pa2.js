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
var chunk_a3fb7pa2_exports = {};
__export(chunk_a3fb7pa2_exports, {
  NSl: () => NSl,
  gy: () => gy
});
module.exports = __toCommonJS(chunk_a3fb7pa2_exports);
var import_chunk_f9x2f6cx = require("/$bunfs/root/chunk-f9x2f6cx.js");
var import_chunk_2904xtvq = require("/$bunfs/root/chunk-2904xtvq.js");
class e {
  claudeTempDir = void 0;
  childProcessTmpDir = void 0;
  bundledSkillsRoot = void 0;
  scratchpadDirBySessionId = /* @__PURE__ */ new Map();
  resolvedWorkingDirPaths = /* @__PURE__ */ new Map();
  workingDirPathsHeldAsNamed = /* @__PURE__ */ new Set();
  pinnedWorkingDirPaths = /* @__PURE__ */ new Set();
  agentWorktreeRuleFolderPaths = /* @__PURE__ */ new Map();
  launchRootsAsFirstResolved = /* @__PURE__ */ new Map();
  relativeRuleFolderPaths = /* @__PURE__ */ new Map();
  ownPatternCounts = /* @__PURE__ */ new WeakMap();
  relativeRuleRootsSwitch = void 0;
  compiledPatternsByRules = /* @__PURE__ */ new WeakMap();
  physicalTwinsByPattern = /* @__PURE__ */ new Map();
  composedRepoRules = {};
  reportedGiveUps = /* @__PURE__ */ new Set();
  reportedSecondRootMountMatches = /* @__PURE__ */ new Set();
  reportedSecondRootMountFlagThrow = false;
  eventsLoggedOnce = /* @__PURE__ */ new Set();
  trustedSymlinkEquivalences = void 0;
  userSkillsBaseSpellingsFolded = void 0;
  resolvedSandboxConfigPaths = /* @__PURE__ */ new Map();
  resolvedSandboxDenyPaths = /* @__PURE__ */ new Map();
  judgedRootPaths = /* @__PURE__ */ new Map();
  judgedBeforeSettle = /* @__PURE__ */ new Set();
  judgedByAWalkThatGaveUp = /* @__PURE__ */ new Set();
  canonicalHomedirByHome = /* @__PURE__ */ new Map();
  foldedSegmentsBySpelling = /* @__PURE__ */ new Map();
  settingsFileLinks = void 0;
  reset() {
    delete this.composedRepoRules.native, delete this.composedRepoRules.upload, this.claudeTempDir = void 0, this.childProcessTmpDir = void 0, this.bundledSkillsRoot = void 0, this.scratchpadDirBySessionId.clear(), this.resolvedWorkingDirPaths.clear(), this.workingDirPathsHeldAsNamed.clear(), this.pinnedWorkingDirPaths.clear(), this.agentWorktreeRuleFolderPaths.clear(), this.launchRootsAsFirstResolved.clear(), this.relativeRuleFolderPaths.clear(), this.relativeRuleRootsSwitch?.unfollow(), this.relativeRuleRootsSwitch = void 0, this.trustedSymlinkEquivalences = void 0, this.userSkillsBaseSpellingsFolded = void 0, this.resolvedSandboxConfigPaths.clear(), this.resolvedSandboxDenyPaths.clear(), this.judgedRootPaths.clear(), this.judgedBeforeSettle.clear(), this.judgedByAWalkThatGaveUp.clear(), this.canonicalHomedirByHome.clear(), this.foldedSegmentsBySpelling.clear(), this.physicalTwinsByPattern.clear(), this.reportedGiveUps.clear(), this.reportedSecondRootMountMatches.clear(), this.reportedSecondRootMountFlagThrow = false, this.eventsLoggedOnce.clear(), this.settingsFileLinks = void 0;
  }
}
var n = new import_chunk_2904xtvq.j(() => new e());
function gy() {
  return n.of((0, import_chunk_f9x2f6cx.N)().host);
}
function NSl() {
  return (0, import_chunk_f9x2f6cx.N)().host.clock;
}
