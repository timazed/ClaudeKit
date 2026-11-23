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
var chunk_84n38n3t_exports = {};
__export(chunk_84n38n3t_exports, {
  Ep: () => Ep,
  _ho: () => _ho
});
module.exports = __toCommonJS(chunk_84n38n3t_exports);
var import_chunk_865at33z = require("/$bunfs/root/chunk-865at33z.js");
var _ho = Object.freeze({ twoStageClassifier: true, sameTurnSiblingContext: true, editRemovalVisibility: true, editRemovalCap: 3e3, outcomeVisibility: false, repoVisibility: true, gitStatusType: true, gitStatusUploads: false, tagConnectorWrites: false, envOnboarding: true, severityByModel: Object.freeze({ "claude-sonnet-5[1m]": Object.freeze({ t1: 25, t2: 35 }), "claude-opus-4-8[1m]": Object.freeze({ t1: 45, t2: 35 }), "claude-sonnet-5": Object.freeze({ t1: 25, t2: 35 }), "claude-opus-4-8": Object.freeze({ t1: 45, t2: 35 }) }) }), e = Object.freeze({});
function Ep() {
  let t = (0, import_chunk_865at33z.b)("tengu_auto_mode_config", e) ?? e;
  if (t !== e) return t;
  return (0, import_chunk_865at33z.Lc)() ? e : _ho;
}
