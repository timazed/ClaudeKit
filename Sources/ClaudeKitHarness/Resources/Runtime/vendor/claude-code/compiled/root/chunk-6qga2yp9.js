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
var chunk_6qga2yp9_exports = {};
__export(chunk_6qga2yp9_exports, {
  $Ia: () => $Ia,
  Ber: () => Ber,
  Wer: () => Wer,
  f7s: () => f7s,
  p7s: () => p7s,
  u7s: () => u7s
});
module.exports = __toCommonJS(chunk_6qga2yp9_exports);
var u7s = "error details withheld for this workflow", f7s = "This workflow run hides its script, and its record of that could not be read or written, so nothing was run.";
function Ber(r) {
  return `Run ${r} hides its script, so its script is not shown here; the resume runs only the script the run was launched with.`;
}
function Wer(r) {
  return r.type !== "workflow_log";
}
function p7s(r) {
  let { promptPreview: e, phaseTitle: t, ...o } = r, s = t !== void 0 && o.phaseIndex !== void 0;
  return { ...o, ...s && { phaseTitle: `phase ${o.phaseIndex}` }, ...o.error !== void 0 && { error: "error details withheld for this workflow" } };
}
function $Ia(r) {
  return r.map((e) => e.type === "workflow_phase" ? { ...e, title: `phase ${e.index}` } : p7s(e));
}
