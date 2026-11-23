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
var chunk_kzz1w7z4_exports = {};
__export(chunk_kzz1w7z4_exports, {
  NIa: () => NIa,
  Ner: () => Ner,
  kTn: () => kTn,
  r7s: () => r7s
});
module.exports = __toCommonJS(chunk_kzz1w7z4_exports);
var import_chunk_ccm69jjy = require("/$bunfs/root/chunk-ccm69jjy.js");
class kTn {
  scriptSha256ById = /* @__PURE__ */ new Map();
}
function Ner(r, s, i) {
  let n = s.get(kTn).scriptSha256ById.get(r);
  if (n !== void 0) return n;
  let e = Object.values(i.all()).find((t) => t.type === "local_workflow" && t.workflowRunId === r && t.withholdScriptFromSdkEvents === true);
  if (e === void 0) return;
  return e.script === "" ? "" : (0, import_chunk_ccm69jjy.Je)(e.script);
}
var r7s = "This workflow run hides its script, and this session has not loaded that script, so it cannot resume the run. Start a new run without resumeFromRunId.";
async function NIa(r, s, i, n) {
  let e = Ner(r, s, i);
  if (e === "") return { kind: "refused", reason: r7s };
  if (e !== void 0) return { kind: "hidden", scriptSha256: e };
  let t = await n();
  if ("refusal" in t) return { kind: "refused", reason: t.refusal };
  if (t.hiddenScriptSha256 !== void 0) return { kind: "refused", reason: "This workflow run hides its script, and this process has no record of starting it, so it will not resume it. Start a new run without resumeFromRunId." };
  if (t.hasUnreadLine === true) return { kind: "refused", reason: `A line of the journal of workflow run ${r} cannot be read, so this session cannot tell whether the run hides its script and will not resume it. Start a new run without resumeFromRunId; it runs again the agents this run had finished.` };
  return { kind: "shared" };
}
